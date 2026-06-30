/**
 * アプリ本体。ビュー（ホーム/文法解説/クイズ/結果）の描画と画面遷移を管理する。
 * データ(LEKTIONEN, QUESTIONS)・Storage・Quiz に依存する。
 */
(() => {
  'use strict';

  const viewEl = document.getElementById('view');
  const homeBtn = document.getElementById('homeBtn');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let session = null; // 現在のクイズセッション

  /* ---------- ユーティリティ ---------- */

  /** HTMLエスケープ（XSS・表示崩れ防止） */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** 問題文の括弧内から格・冠詞・代名詞等の文法サフィックスを除去 */
  function stripGrammarHint(prompt) {
    return prompt.replace(/・[^）]*(?:格|冠詞|代名詞|自動詞|他動詞|変化)[^）]*/g, '');
  }

  /** 問題文からドイツ語部分のみを返す（括弧部分を除去） */
  function germanOnly(prompt) {
    return prompt.replace(/（[^）]*）/g, '').trim();
  }

  /* ---------- 格変化ヒント表 ---------- */

  const HINT_TABLE_DEF = `
<p class="hint-table-label">📋 定冠詞の格変化</p>
<table class="hint-table">
  <thead><tr><th></th><th>男性</th><th>女性</th><th>中性</th><th>複数</th></tr></thead>
  <tbody>
    <tr><th>1格</th><td>der</td><td>die</td><td>das</td><td>die</td></tr>
    <tr><th>2格</th><td>des</td><td>der</td><td>des</td><td>der</td></tr>
    <tr><th>3格</th><td>dem</td><td>der</td><td>dem</td><td>den</td></tr>
    <tr><th>4格</th><td>den</td><td>die</td><td>das</td><td>die</td></tr>
  </tbody>
</table>`;

  const HINT_TABLE_PRON = `
<p class="hint-table-label">📋 人称代名詞の格変化</p>
<table class="hint-table">
  <thead><tr><th>1格</th><th>3格（に）</th><th>4格（を）</th></tr></thead>
  <tbody>
    <tr><td>ich</td><td>mir</td><td>mich</td></tr>
    <tr><td>du</td><td>dir</td><td>dich</td></tr>
    <tr><td>er</td><td>ihm</td><td>ihn</td></tr>
    <tr><td>sie</td><td>ihr</td><td>sie</td></tr>
    <tr><td>es</td><td>ihm</td><td>es</td></tr>
    <tr><td>wir</td><td>uns</td><td>uns</td></tr>
    <tr><td>ihr</td><td>euch</td><td>euch</td></tr>
    <tr><td>sie/Sie</td><td>ihnen/Ihnen</td><td>sie/Sie</td></tr>
  </tbody>
</table>`;

  const PRON_MARKERS = new Set(['mich', 'mir', 'ihn', 'ihm', 'dich', 'dir', 'uns', 'euch', 'ihnen', 'Ihnen', 'sich']);
  const ART_MARKERS = new Set(['der', 'die', 'das', 'dem', 'den', 'des', 'ein', 'eine', 'einen', 'einem', 'einer', 'eines']);

  /** 問題の選択肢から格変化表HTMLを返す。不要なら空文字。 */
  function hintTableFor(q) {
    const short = q.choices.filter((c) => !String(c).includes(' '));
    if (short.length < 2) return '';
    if (short.some((c) => PRON_MARKERS.has(c))) return HINT_TABLE_PRON;
    if (short.some((c) => ART_MARKERS.has(c))) return HINT_TABLE_DEF;
    return '';
  }

  /** 解説データの table を HTML テーブル文字列に変換 */
  function buildTable(table) {
    if (!table) return '';
    const head = table.headers.map((h) => `<th>${esc(h)}</th>`).join('');
    const body = table.rows
      .map((row) => `<tr>${row.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`)
      .join('');
    return `<div class="table-wrap"><table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  /** ビューを差し替えて入場アニメーションを再生 */
  function mountView(html) {
    viewEl.innerHTML = html;
    viewEl.scrollTop = 0;
    window.scrollTo(0, 0);
    if (reduceMotion) return;
    viewEl.classList.remove('view-enter');
    // リフローを強制してアニメーションを再トリガー
    void viewEl.offsetWidth;
    viewEl.classList.add('view-enter');
  }

  /** 最終学習日時を「今日／きのう／N日前」の相対表記にする。 */
  function formatStudiedAt(ts) {
    if (!ts) return null;
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    const startOfToday = new Date().setHours(0, 0, 0, 0);
    const days = Math.floor((startOfToday - new Date(ts).setHours(0, 0, 0, 0)) / MS_PER_DAY);
    if (days <= 0) return '今日';
    if (days === 1) return 'きのう';
    return `${days}日前`;
  }

  /** ホーム上部の学習サマリー（苦手数・習得済み数・最終学習）の HTML を返す。 */
  function buildSummaryHtml() {
    const s = Storage.getSummary();
    if (s.tracked === 0) return '';
    const studied = formatStudiedAt(s.lastStudiedAt);
    return `
      <div class="summary" aria-label="学習サマリー">
        <span class="summary-item"><b>${s.weak}</b> 苦手</span>
        <span class="summary-item"><b>${s.mastered}</b> 習得済み</span>
        ${studied ? `<span class="summary-item summary-item--muted">最終学習 ${studied}</span>` : ''}
      </div>`;
  }

  /** 軽い触覚フィードバック（対応端末のみ） */
  function vibrate(pattern) {
    if (navigator.vibrate && !reduceMotion) {
      try { navigator.vibrate(pattern); } catch (_) { /* 無視 */ }
    }
  }

  /* ---------- ゲーム要素（コンボ・バッジ） ---------- */

  const BADGE_DEFS = [
    { id: 'first_perfect', icon: '🌟', name: 'パーフェクト', desc: '1ラウンド全問正解' },
    { id: 'combo5', icon: '🔥', name: '5コンボ', desc: '5問連続正解' },
    { id: 'combo10', icon: '⚡', name: '10コンボ', desc: '10問連続正解' },
    { id: 'clear3', icon: '🎖️', name: '三冠', desc: '3つのLektionで満点（100%）' },
    { id: 'clearAll', icon: '👑', name: '全制覇', desc: 'すべてのLektionで満点（100%）' },
  ];

  /** 満点（bestRate===100）のLektion数を数える。 */
  function masteredLektionCount() {
    return LEKTIONEN.filter((l) => {
      const p = Storage.getProgress(l.id);
      return p && p.bestRate === 100;
    }).length;
  }

  /** 現時点で条件を満たすバッジIDを返す。 */
  function satisfiedBadgeIds(roundRate) {
    const ids = [];
    if (roundRate === 100) ids.push('first_perfect');
    const mc = Storage.getMaxCombo();
    if (mc >= 5) ids.push('combo5');
    if (mc >= 10) ids.push('combo10');
    const mastered = masteredLektionCount();
    if (mastered >= 3) ids.push('clear3');
    if (mastered >= LEKTIONEN.length) ids.push('clearAll');
    return ids;
  }

  /** コンボ数に応じた煽りメッセージとレベルを返す。 */
  function comboMessage(c) {
    if (c >= 10) return { t: `${c} COMBO!! 神がかってる！👑`, lv: 5 };
    if (c >= 7) return { t: `${c} COMBO! 止まらない！🚀`, lv: 4 };
    if (c >= 5) return { t: `${c} COMBO! 絶好調！⚡`, lv: 3 };
    if (c >= 3) return { t: `${c} 連続正解！🔥`, lv: 2 };
    if (c >= 2) return { t: `${c} 連続！`, lv: 1 };
    return null;
  }

  /** 画面中央にコンボの煽り演出を一瞬表示する。 */
  function showComboFlash(combo) {
    const m = comboMessage(combo);
    if (!m || reduceMotion) return;
    const el = document.createElement('div');
    el.className = `combo-flash combo-flash--lv${m.lv}`;
    el.textContent = m.t;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1100);
  }

  /** 新規獲得バッジをトーストで順番に知らせる。 */
  function showBadgeToast(ids) {
    ids.forEach((id, i) => {
      const def = BADGE_DEFS.find((b) => b.id === id);
      if (!def) return;
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'badge-toast';
        el.innerHTML = `<span class="badge-toast-ico">${def.icon}</span><span class="badge-toast-body"><b>バッジ獲得！</b><span>${esc(def.name)}（${esc(def.desc)}）</span></span>`;
        document.body.appendChild(el);
        void el.offsetWidth;
        el.classList.add('badge-toast--in');
        setTimeout(() => {
          el.classList.remove('badge-toast--in');
          setTimeout(() => el.remove(), 300);
        }, 2600);
      }, i * 450);
    });
  }

  /** ホームのバッジ棚HTMLを返す。 */
  function buildBadgeHtml() {
    const earned = new Set(Storage.getEarnedBadges());
    const maxCombo = Storage.getMaxCombo();
    const items = BADGE_DEFS.map((b) => {
      const on = earned.has(b.id);
      return `<span class="badge ${on ? 'badge--on' : 'badge--off'}" title="${esc(b.name)}：${esc(b.desc)}">${b.icon}</span>`;
    }).join('');
    return `
      <div class="badges-bar">
        <span class="badges-label">🏅 バッジ ${earned.size}/${BADGE_DEFS.length}${maxCombo >= 2 ? ` ・ 最高 ${maxCombo} コンボ` : ''}</span>
        <div class="badges-row">${items}</div>
      </div>`;
  }

  /* ---------- ホーム ---------- */

  function renderHome() {
    session = null;
    homeBtn.classList.add('hidden');

    const cards = LEKTIONEN.map((lek, i) => {
      const prog = Storage.getProgress(lek.id);
      const rate = prog ? prog.bestRate : 0;
      const themeTags = lek.themes.map((t) => `<span class="tag">${esc(t)}</span>`).join('');
      const badge = prog
        ? `<span class="card-badge" style="--rate:${rate}">最高 ${rate}%</span>`
        : '<span class="card-badge card-badge--new">未挑戦</span>';
      return `
        <button class="card" data-lektion="${lek.id}" style="--accent:${lek.accent}; --delay:${i * 70}ms">
          <div class="card-top">
            <span class="card-num">Lektion ${lek.id}</span>
            ${badge}
          </div>
          <h2 class="card-title">${esc(lek.title)}</h2>
          <p class="card-sub">${esc(lek.subtitleJa)}</p>
          <div class="card-tags">${themeTags}</div>
          <div class="progress"><div class="progress-bar" style="width:${rate}%"></div></div>
        </button>`;
    }).join('');

    const weakCount = Storage.getWeakIds().length;
    const reviewDisabled = weakCount === 0;

    mountView(`
      <section class="home">
        <div class="hero">
          <h1 class="hero-title">ドイツ語文法トレーナー</h1>
          <p class="hero-sub">Lektion 1〜8 ｜ 格変化・人称変化・格支配を択一問題で練習</p>
        </div>
        ${buildSummaryHtml()}
        ${buildBadgeHtml()}
        <div class="special-grid">
          <button class="special-card special-card--random" id="randomBtn">
            <span class="special-icon">🎲</span>
            <span class="special-body">
              <span class="special-title">全範囲からランダム</span>
              <span class="special-sub">全レッスンを混ぜて10問ずつ出題</span>
            </span>
          </button>
          <button class="special-card special-card--review" id="reviewBtn" ${reviewDisabled ? 'disabled' : ''}>
            <span class="special-icon">🎯</span>
            <span class="special-body">
              <span class="special-title">よく間違える問題を集中学習</span>
              <span class="special-sub">${reviewDisabled ? 'まだ苦手な問題はありません' : `苦手リスト ${weakCount} 問・苦手な順に出題`}</span>
            </span>
          </button>
          <button class="special-card special-card--drill" id="drillBtn">
            <span class="special-icon">⚡</span>
            <span class="special-body">
              <span class="special-title">特訓ドリル</span>
              <span class="special-sub">動詞の格・前置詞・助動詞の意味などをテーマ別に連続特訓</span>
            </span>
          </button>
        </div>
        <div class="card-grid">${cards}</div>
        <p class="home-foot">学習したいレッスンを選んでください</p>
      </section>
    `);

    viewEl.querySelectorAll('.card').forEach((btn) => {
      btn.addEventListener('click', () => {
        vibrate(8);
        renderLektion(Number(btn.dataset.lektion));
      });
    });

    document.getElementById('randomBtn').addEventListener('click', () => {
      vibrate(8);
      renderRandomSettings();
    });
    const reviewBtn = document.getElementById('reviewBtn');
    if (!reviewDisabled) {
      reviewBtn.addEventListener('click', () => {
        vibrate(8);
        startWeakQuiz();
      });
    }
    document.getElementById('drillBtn').addEventListener('click', () => {
      vibrate(8);
      renderDrillSettings();
    });
  }

  /* ---------- 文法解説 ---------- */

  /** 解説セクション群の HTML を組み立てる（詳細ビュー・オーバーレイで共用） */
  function buildGrammarSections(lek) {
    return lek.grammar.map((sec) => `
      <div class="g-section">
        <h3 class="g-heading">${esc(sec.heading)}</h3>
        ${sec.body ? `<p class="g-body">${esc(sec.body)}</p>` : ''}
        ${buildTable(sec.table)}
        ${sec.notes ? `<ul class="g-notes">${sec.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>` : ''}
      </div>
    `).join('');
  }

  /**
   * クイズ中に解説をオーバーレイ表示する。クイズのDOMは保持されるため、
   * 閉じると解いていた問題の状態にそのまま戻れる。
   */
  function showGrammarOverlay(lek) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
      <div class="overlay-panel" style="--accent:${lek.accent}" role="dialog" aria-modal="true" aria-label="文法解説">
        <div class="overlay-head">
          <h2 class="overlay-title">Lektion ${lek.id} の解説</h2>
          <button class="overlay-close" id="overlayClose" aria-label="閉じて問題に戻る">×</button>
        </div>
        <div class="overlay-body">${buildGrammarSections(lek)}</div>
        <button class="btn btn-primary overlay-back" id="overlayBack">← 問題に戻る</button>
      </div>
    `;
    document.body.appendChild(overlay);
    document.body.classList.add('no-scroll');

    const close = () => {
      overlay.classList.add('overlay--leaving');
      document.body.classList.remove('no-scroll');
      setTimeout(() => overlay.remove(), reduceMotion ? 0 : 200);
    };
    overlay.querySelector('#overlayClose').addEventListener('click', () => { vibrate(8); close(); });
    overlay.querySelector('#overlayBack').addEventListener('click', () => { vibrate(8); close(); });
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    // 入場アニメーション
    if (!reduceMotion) {
      void overlay.offsetWidth;
      overlay.classList.add('overlay--in');
    } else {
      overlay.classList.add('overlay--in');
    }
  }

  function renderLektion(lektionId) {
    homeBtn.classList.remove('hidden');
    const lek = LEKTIONEN.find((l) => l.id === lektionId);
    if (!lek) return renderHome();

    const sections = buildGrammarSections(lek);

    const count = QUESTIONS.filter((q) => q.lektion === lektionId).length;

    mountView(`
      <section class="lektion" style="--accent:${lek.accent}">
        <div class="lektion-head">
          <span class="lektion-num">Lektion ${lek.id}</span>
          <h1 class="lektion-title">${esc(lek.title)}</h1>
          <p class="lektion-de">„${esc(lek.subtitle)}“</p>
          <p class="lektion-ja">${esc(lek.subtitleJa)}</p>
        </div>
        <div class="grammar">${sections}</div>
        <button class="btn btn-primary btn-start" id="startBtn">クイズを始める（10問ずつ・全${count}問）</button>
      </section>
    `);

    document.getElementById('startBtn').addEventListener('click', () => {
      vibrate(8);
      startQuiz(lektionId);
    });
  }

  /* ---------- クイズ ---------- */

  function startQuiz(lektionId) {
    session = Quiz.createSession(lektionId);
    renderQuestion();
  }

  /* ---------- ランダム出題の設定（セクション選択） ---------- */

  /** ランダム出題の対象Lektion（セクション）を選ぶ設定画面。 */
  function renderRandomSettings() {
    homeBtn.classList.remove('hidden');
    const selected = new Set(Storage.getSelectedLektionen());

    const chips = LEKTIONEN.map((l) => {
      const count = QUESTIONS.filter((q) => q.lektion === l.id).length;
      const on = selected.has(l.id);
      return `
        <button class="sec-chip${on ? ' sec-chip--on' : ''}" data-lektion="${l.id}" style="--accent:${l.accent}" aria-pressed="${on}">
          <span class="sec-chip-num">Lektion ${l.id}</span>
          <span class="sec-chip-title">${esc(l.title)}</span>
          <span class="sec-chip-count">${count}問</span>
        </button>`;
    }).join('');

    mountView(`
      <section class="settings">
        <div class="settings-head">
          <h1 class="settings-title">🎲 ランダム出題の設定</h1>
          <p class="settings-sub">出題する Lektion（セクション）を選んでください。複数選択できます。</p>
        </div>
        <div class="settings-actions-top">
          <button class="btn btn-ghost btn-sm" id="selAll" type="button">すべて選択</button>
          <button class="btn btn-ghost btn-sm" id="selNone" type="button">すべて解除</button>
        </div>
        <div class="sec-grid">${chips}</div>
        <div class="settings-foot">
          <span class="settings-count" id="selCount"></span>
          <button class="btn btn-primary" id="startRandomBtn" type="button">この設定で開始</button>
        </div>
      </section>
    `);

    const countEl = document.getElementById('selCount');
    const startBtn = document.getElementById('startRandomBtn');
    const selectedIds = () => [...viewEl.querySelectorAll('.sec-chip--on')].map((b) => Number(b.dataset.lektion));
    const updateCount = () => {
      const ids = selectedIds();
      const n = QUESTIONS.filter((q) => ids.includes(q.lektion)).length;
      countEl.textContent = `選択中：${ids.length} Lektion ／ ${n} 問`;
      startBtn.disabled = ids.length === 0;
    };

    viewEl.querySelectorAll('.sec-chip').forEach((b) => {
      b.addEventListener('click', () => {
        const on = b.classList.toggle('sec-chip--on');
        b.setAttribute('aria-pressed', String(on));
        vibrate(6);
        updateCount();
      });
    });
    document.getElementById('selAll').addEventListener('click', () => {
      viewEl.querySelectorAll('.sec-chip').forEach((b) => { b.classList.add('sec-chip--on'); b.setAttribute('aria-pressed', 'true'); });
      vibrate(8); updateCount();
    });
    document.getElementById('selNone').addEventListener('click', () => {
      viewEl.querySelectorAll('.sec-chip').forEach((b) => { b.classList.remove('sec-chip--on'); b.setAttribute('aria-pressed', 'false'); });
      vibrate(8); updateCount();
    });
    startBtn.addEventListener('click', () => {
      const ids = selectedIds();
      if (ids.length === 0) return;
      Storage.setSelectedLektionen(ids);
      vibrate(8);
      startRandomQuiz(ids);
    });

    updateCount();
  }

  /** 選択されたLektionの問題を混ぜてランダム出題する（未指定なら保存済み設定）。 */
  function startRandomQuiz(lektionIds) {
    const ids = (lektionIds && lektionIds.length) ? lektionIds : Storage.getSelectedLektionen();
    const pool = QUESTIONS.filter((q) => ids.includes(q.lektion));
    if (pool.length === 0) return renderRandomSettings();
    const label = ids.length >= LEKTIONEN.length
      ? '全範囲ランダム'
      : `ランダム（${ids.length} Lektion・${pool.length}問）`;
    session = Quiz.createCustomSession(pool, { mode: 'random', label });
    renderQuestion();
  }

  /** 苦手リスト（よく間違える問題）をミスの多い順に出題する。Lektion問題とドリル問題の両方が対象。 */
  function startWeakQuiz() {
    const ids = Storage.getWeakIds(); // ミスの多い順
    const order = new Map(ids.map((id, i) => [id, i]));
    const pool = QUESTIONS.concat(typeof DRILLS !== 'undefined' ? DRILLS : [])
      .filter((q) => order.has(q.id))
      .sort((a, b) => order.get(a.id) - order.get(b.id));
    if (pool.length === 0) return renderHome();
    session = Quiz.createCustomSession(pool, { mode: 'review', label: 'よく間違える問題', ordered: true });
    renderQuestion();
  }

  /* ---------- 特訓ドリル（テーマ選択） ---------- */

  const DRILL_ACCENT = '#7c3aed'; // 複数テーマ選択時のアクセント色

  /** 特訓ドリルのテーマを選ぶ設定画面。 */
  function renderDrillSettings() {
    homeBtn.classList.remove('hidden');
    const chips = DRILL_THEMES.map((t) => {
      const count = DRILLS.filter((q) => q.theme === t.id).length;
      return `
        <button class="sec-chip drill-chip" data-theme="${t.id}" style="--accent:${t.accent}" aria-pressed="false">
          <span class="sec-chip-num">${t.icon} ${esc(t.title)}</span>
          <span class="sec-chip-title">${esc(t.sub)}</span>
          <span class="sec-chip-count">${count}問</span>
        </button>`;
    }).join('');

    mountView(`
      <section class="settings">
        <div class="settings-head">
          <h1 class="settings-title">⚡ 特訓ドリル</h1>
          <p class="settings-sub">鍛えたいテーマを選んでください。複数選べます。10問ずつ連続で出題します。</p>
        </div>
        <div class="settings-actions-top">
          <button class="btn btn-ghost btn-sm" id="selAll" type="button">すべて選択</button>
          <button class="btn btn-ghost btn-sm" id="selNone" type="button">すべて解除</button>
        </div>
        <div class="sec-grid">${chips}</div>
        <div class="settings-foot">
          <span class="settings-count" id="selCount"></span>
          <button class="btn btn-primary" id="startDrillBtn" type="button">この設定で開始</button>
        </div>
      </section>
    `);

    const countEl = document.getElementById('selCount');
    const startBtn = document.getElementById('startDrillBtn');
    const selectedIds = () => [...viewEl.querySelectorAll('.drill-chip[aria-pressed="true"]')].map((b) => b.dataset.theme);
    const updateCount = () => {
      const ids = selectedIds();
      const n = DRILLS.filter((q) => ids.includes(q.theme)).length;
      countEl.textContent = `選択中：${ids.length} テーマ ／ ${n} 問`;
      startBtn.disabled = ids.length === 0;
    };

    viewEl.querySelectorAll('.drill-chip').forEach((b) => {
      b.addEventListener('click', () => {
        const on = b.getAttribute('aria-pressed') !== 'true';
        b.setAttribute('aria-pressed', String(on));
        b.classList.toggle('sec-chip--on', on);
        vibrate(6);
        updateCount();
      });
    });
    document.getElementById('selAll').addEventListener('click', () => {
      viewEl.querySelectorAll('.drill-chip').forEach((b) => { b.classList.add('sec-chip--on'); b.setAttribute('aria-pressed', 'true'); });
      vibrate(8); updateCount();
    });
    document.getElementById('selNone').addEventListener('click', () => {
      viewEl.querySelectorAll('.drill-chip').forEach((b) => { b.classList.remove('sec-chip--on'); b.setAttribute('aria-pressed', 'false'); });
      vibrate(8); updateCount();
    });
    startBtn.addEventListener('click', () => {
      const ids = selectedIds();
      if (ids.length === 0) return;
      vibrate(8);
      startDrillQuiz(ids);
    });

    updateCount();
  }

  /** 選択したテーマのドリル問題を連続出題する。 */
  function startDrillQuiz(themeIds) {
    const ids = (themeIds && themeIds.length) ? themeIds : DRILL_THEMES.map((t) => t.id);
    const pool = DRILLS.filter((q) => ids.includes(q.theme));
    if (pool.length === 0) return renderDrillSettings();
    const single = ids.length === 1 ? DRILL_THEMES.find((t) => t.id === ids[0]) : null;
    const label = single ? `特訓ドリル：${single.title}` : `特訓ドリル（${ids.length}テーマ・${pool.length}問）`;
    session = Quiz.createCustomSession(pool, { mode: 'drill', label });
    session.drillThemes = ids;
    session.accent = single ? single.accent : DRILL_ACCENT;
    renderQuestion();
  }

  /** 問題が属するLektion（解説オーバーレイ・アクセント色に使用）を返す。 */
  function lektionOf(q) {
    return LEKTIONEN.find((l) => l.id === q.lektion) || LEKTIONEN[0];
  }

  /** 問題の表示用フィールドを正規化（新スキーマ ja/exp と旧 prompt/explanation の両対応）。 */
  function questionText(q) { return q.ja || germanOnly(q.prompt || ''); }
  function questionExp(q) { return q.exp || q.explanation || ''; }

  /** 解答確定時に共通で行うコンボ加算・進捗記録・演出。正誤に応じたコンボタグHTMLを返す。 */
  function applyAnswerResult(q, correct) {
    if (correct) {
      Storage.recordCorrect(q.id);
      session.combo = (session.combo || 0) + 1;
      Storage.recordCombo(session.combo);
      vibrate(12);
      if (!reduceMotion) burstConfetti();
      if (session.combo >= 2) showComboFlash(session.combo);
      return session.combo >= 2 ? ` <span class="fb-combo">🔥 ${session.combo}連続！</span>` : '';
    }
    Storage.recordWrong(q.id);
    session.combo = 0;
    vibrate([20, 40, 20]);
    return '';
  }

  function renderQuestion() {
    const q = Quiz.current(session);
    const lek = session.mode === 'lektion'
      ? LEKTIONEN.find((l) => l.id === session.lektionId)
      : lektionOf(q);
    const accent = session.accent || lek.accent;
    const p = Quiz.progress(session);
    const r = Quiz.roundInfo(session);
    const pct = Math.round(((p.current - 1) / p.total) * 100);
    const roundLabel = r.totalRounds > 1 ? `ラウンド ${r.round} / ${r.totalRounds}` : '';
    const catPrefix = (session.mode === 'random' || session.mode === 'review') ? `Lektion ${lek.id}・` : '';

    // 共通ヘッダ（進捗バー・カテゴリ・日本語訳）
    const headerHtml = `
        <div class="quiz-top">
          <span class="quiz-top-left">
            ${roundLabel ? `<span class="quiz-round">${roundLabel}</span>` : ''}
            ${(session.combo || 0) >= 2 ? `<span class="quiz-combo">🔥 ${session.combo} 連続</span>` : ''}
          </span>
          <button class="btn btn-ghost btn-grammar" id="grammarBtn" type="button">📖 解説を見る</button>
        </div>
        <div class="quiz-bar">
          <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
          <span class="quiz-count">${p.current} / ${p.total}</span>
        </div>
        <span class="quiz-cat">${catPrefix}${esc(q.category)}</span>
        <h2 class="quiz-prompt">${esc(questionText(q))}</h2>`;

    if (q.buildMode) {
      renderBuildQuestion(q, lek, accent, p, headerHtml);
    } else {
      renderChoiceQuestion(q, lek, accent, p, headerHtml);
    }
  }

  /** 末尾の解説フィードバックHTMLを組み立てる（コンボ・解説・コツ）。 */
  function feedbackBody(q, comboTag, correct, correctLine) {
    const tipHtml = q.tip
      ? `<div class="tip-box"><span class="tip-label">💡 覚え方のコツ</span>${esc(q.tip)}</div>`
      : '';
    const head = correct
      ? `<strong>正解！</strong>${comboTag}`
      : `<strong>不正解</strong>${correctLine}`;
    return `${head} ${esc(questionExp(q))}${tipHtml}`;
  }

  /* ---------- 択一形式の出題 ---------- */

  function renderChoiceQuestion(q, lek, accent, p, headerHtml) {
    const choices = q.choices.map((c, i) => `
      <button class="choice" data-index="${i}">
        <span class="choice-key">${String.fromCharCode(65 + i)}</span>
        <span class="choice-text">${esc(c)}</span>
      </button>
    `).join('');

    mountView(`
      <section class="quiz" style="--accent:${accent}">
        ${headerHtml}
        <div class="choices" id="choices">${choices}</div>
        <button class="btn btn-ghost btn-hint" id="hintBtn">💡 ヒントを見る</button>
        <div class="hint" id="hint" hidden>${esc(q.hint || '')}${hintTableFor(q)}</div>
        <div class="feedback" id="feedback" aria-live="polite" hidden></div>
        <button class="btn btn-primary btn-next" id="nextBtn" hidden></button>
      </section>
    `);

    const choicesEl = document.getElementById('choices');
    const hintBtn = document.getElementById('hintBtn');
    const hintEl = document.getElementById('hint');
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');

    document.getElementById('grammarBtn').addEventListener('click', () => { vibrate(8); showGrammarOverlay(lek); });
    hintBtn.addEventListener('click', () => {
      hintEl.hidden = false;
      hintBtn.classList.add('used');
      hintBtn.textContent = '💡 ヒント表示中';
    });

    choicesEl.querySelectorAll('.choice').forEach((btn) => {
      btn.addEventListener('click', () => {
        const result = Quiz.answer(session, Number(btn.dataset.index));
        choicesEl.querySelectorAll('.choice').forEach((b, i) => {
          b.disabled = true;
          b.classList.add('locked');
          if (i === result.answer) b.classList.add('correct');
        });
        const comboTag = applyAnswerResult(q, result.correct);
        if (result.correct) {
          btn.classList.add('pop');
          feedbackEl.className = 'feedback feedback--ok';
          feedbackEl.innerHTML = feedbackBody(q, comboTag, true);
        } else {
          btn.classList.add('wrong', 'shake');
          feedbackEl.className = 'feedback feedback--ng';
          feedbackEl.innerHTML = feedbackBody(q, '', false, ` 正解は <b>${esc(q.choices[result.answer])}</b><br>`);
        }
        feedbackEl.hidden = false;
        hintBtn.hidden = true;
        nextBtn.textContent = p.current === p.total ? '結果を見る →' : '次の問題 →';
        nextBtn.hidden = false;
      });
    });

    nextBtn.addEventListener('click', () => {
      vibrate(8);
      if (Quiz.next(session)) renderQuestion(); else renderResult();
    });
  }

  /* ---------- 組み立て形式（並び替え・語形変化）の出題 ---------- */

  function renderBuildQuestion(q, lek, accent, p, headerHtml) {
    let placed = [];      // q.bank のindex を並べた順
    let answered = false;
    let resetPending = false;
    let resetTimer = null;
    const hasFormTile = q.bank.some((it) => !it.fixed && !it.dummy);
    const tileText = (it) => it.forms[it.idx];

    mountView(`
      <section class="quiz" style="--accent:${accent}">
        ${headerHtml}
        ${hasFormTile ? '<div class="transform-note">✏️ <b>オレンジのタイル</b>はタップで語形が変わります。正しい形に直して並べよう（<b>✕</b>で削除）。</div>' : ''}
        <div class="answer-area" id="answerArea" aria-label="組み立てた独文"></div>
        <div class="bank" id="bank" aria-label="語句"></div>
        <div class="quiz-controls">
          <button class="btn btn-ghost btn-reset" id="resetBtn" type="button">↺ リセット</button>
          <button class="btn btn-primary btn-check" id="checkBtn" type="button" disabled>答え合わせ</button>
        </div>
        <button class="btn btn-ghost btn-hint" id="hintBtn" type="button">💡 ヒントを見る</button>
        <div class="hint" id="hint" hidden>${esc(q.hint || '')}</div>
        <div class="feedback" id="feedback" aria-live="polite" hidden></div>
        <button class="btn btn-primary btn-next" id="nextBtn" type="button" hidden></button>
      </section>
    `);

    const answerArea = document.getElementById('answerArea');
    const bankEl = document.getElementById('bank');
    const resetBtn = document.getElementById('resetBtn');
    const checkBtn = document.getElementById('checkBtn');
    const hintBtn = document.getElementById('hintBtn');
    const hintEl = document.getElementById('hint');
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');

    function renderTiles() {
      if (placed.length === 0) {
        answerArea.innerHTML = '<span class="answer-placeholder">下の語句をタップして独文を作ろう</span>';
      } else {
        answerArea.innerHTML = placed.map((bi, pos) => {
          const item = q.bank[bi];
          const isForm = !item.fixed && !item.dummy;
          let cls = 'tile' + (isForm ? ' tile--form' : '');
          if (answered) cls += tileText(item) === q.tokens[pos] ? ' tile--ok' : ' tile--ng';
          const cyc = (isForm && !answered) ? '<span class="tile-cyc" aria-hidden="true">⇅</span>' : '';
          const xb = answered ? '' : '<span class="tile-x" data-x="1" aria-label="削除">✕</span>';
          return `<button class="${cls}" data-loc="ans" data-i="${pos}">${cyc}<span class="tile-txt">${esc(tileText(item))}</span>${xb}</button>`;
        }).join('');
      }
      const remaining = q.bank
        .map((item, bi) => ({ item, bi }))
        .filter(({ bi }) => !placed.includes(bi));
      bankEl.innerHTML = remaining.length
        ? remaining.map(({ item, bi }) => {
            const isForm = !item.fixed && !item.dummy;
            return `<button class="tile${isForm ? ' tile--form' : ''}" data-loc="bank" data-i="${bi}"><span class="tile-txt">${esc(tileText(item))}</span></button>`;
          }).join('')
        : '<span class="bank-empty">すべて使いました</span>';
      checkBtn.disabled = answered || placed.length === 0;
    }

    answerArea.addEventListener('click', (e) => {
      if (answered) return;
      const tileEl = e.target.closest('.tile');
      if (!tileEl) return;
      const pos = Number(tileEl.dataset.i);
      const item = q.bank[placed[pos]];
      if (e.target.closest('.tile-x')) {
        placed.splice(pos, 1);
      } else if (item && !item.fixed && !item.dummy) {
        item.idx = (item.idx + 1) % item.forms.length;    // 本体タップ：語形を次へ
      } else {
        placed.splice(pos, 1);
      }
      vibrate(6);
      renderTiles();
    });

    bankEl.addEventListener('click', (e) => {
      const t = e.target.closest('.tile');
      if (!t || answered) return;
      const bi = Number(t.dataset.i);
      if (!placed.includes(bi)) placed.push(bi);
      vibrate(6);
      renderTiles();
    });

    resetBtn.addEventListener('click', () => {
      if (answered) return;
      if (resetPending) {
        placed = [];
        resetPending = false;
        clearTimeout(resetTimer);
        resetBtn.textContent = '↺ リセット';
        resetBtn.classList.remove('btn-reset--confirm');
        vibrate(8);
        renderTiles();
      } else {
        resetPending = true;
        resetBtn.textContent = 'もう一度押すと消去';
        resetBtn.classList.add('btn-reset--confirm');
        vibrate([10, 30, 10]);
        resetTimer = setTimeout(() => {
          resetPending = false;
          resetBtn.textContent = '↺ リセット';
          resetBtn.classList.remove('btn-reset--confirm');
        }, 2000);
      }
    });

    document.getElementById('grammarBtn').addEventListener('click', () => { vibrate(8); showGrammarOverlay(lek); });
    hintBtn.addEventListener('click', () => {
      hintEl.hidden = false;
      hintBtn.classList.add('used');
      hintBtn.textContent = '💡 ヒント表示中';
    });

    checkBtn.addEventListener('click', () => {
      if (answered || placed.length === 0) return;
      answered = true;
      const built = placed.map((bi) => tileText(q.bank[bi]));
      const result = Quiz.check(session, built);
      renderTiles();
      resetBtn.disabled = true;
      checkBtn.hidden = true;
      hintBtn.hidden = true;

      const comboTag = applyAnswerResult(q, result.correct);
      const sentenceHtml = q.sentence ? `<div class="fb-sentence">${esc(q.sentence)}</div>` : '';
      if (result.correct) {
        feedbackEl.className = 'feedback feedback--ok';
        feedbackEl.innerHTML = `<div class="fb-result fb-result--ok">✅ 正解！${comboTag}</div>${sentenceHtml}<div class="fb-section">${esc(questionExp(q))}</div>${q.tip ? `<div class="tip-box"><span class="tip-label">💡 覚え方のコツ</span>${esc(q.tip)}</div>` : ''}`;
      } else {
        answerArea.classList.add('shake');
        setTimeout(() => answerArea.classList.remove('shake'), 420);
        feedbackEl.className = 'feedback feedback--ng';
        feedbackEl.innerHTML = `<div class="fb-result fb-result--ng">✗ おしい！</div><p class="fb-correct-label">正しい語順はこちら：</p>${sentenceHtml}<div class="fb-section">${esc(questionExp(q))}</div>${q.tip ? `<div class="tip-box"><span class="tip-label">💡 覚え方のコツ</span>${esc(q.tip)}</div>` : ''}`;
      }
      feedbackEl.hidden = false;
      nextBtn.textContent = p.current === p.total ? '結果を見る →' : '次の問題 →';
      nextBtn.hidden = false;
    });

    nextBtn.addEventListener('click', () => {
      vibrate(8);
      if (Quiz.next(session)) renderQuestion(); else renderResult();
    });

    renderTiles();
  }

  /* ---------- 結果 ---------- */

  function renderResult() {
    const isLektion = session.mode === 'lektion';
    const lek = isLektion ? LEKTIONEN.find((l) => l.id === session.lektionId) : null;
    const accent = session.accent || (lek ? lek.accent : '#14b8a6');
    const total = session.questions.length;
    const correct = session.correctCount;
    const rate = Math.round((correct / total) * 100);
    // Lektion別の最高記録はLektionモードのときだけ保存する
    if (isLektion) Storage.saveResult(session.lektionId, correct, total);

    // バッジ判定（このラウンドの結果を保存した後で評価する）
    const earnedNow = satisfiedBadgeIds(rate).filter((id) => Storage.awardBadge(id));

    const r = Quiz.roundInfo(session);
    const hasNext = Quiz.hasNextRound(session);
    const wrong = Quiz.wrongAnswers(session);
    const message =
      rate === 100 ? '完璧です！🎉' : rate >= 80 ? 'すばらしい！💪' : rate >= 50 ? 'その調子！📚' : 'もう一度復習しよう！';

    const reviewHtml = wrong.length
      ? `
        <div class="review">
          <h3 class="review-title">復習：間違えた問題（${wrong.length}問）</h3>
          ${wrong.map((a) => {
            const aq = a.question;
            const ans = aq.buildMode ? (aq.sentence || aq.tokens.join(' ')) : aq.choices[aq.answer];
            return `
            <div class="review-item">
              <p class="review-q">${esc(questionText(aq))}</p>
              <p class="review-a">正解：<b>${esc(ans)}</b></p>
              <p class="review-e">${esc(questionExp(aq))}</p>
              ${aq.tip ? `<p class="review-tip">💡 ${esc(aq.tip)}</p>` : ''}
            </div>`;
          }).join('')}
        </div>`
      : '<p class="all-correct">全問正解！この調子で続けましょう。✨</p>';

    const roundLabel = r.totalRounds > 1 ? `ラウンド ${r.round} / ${r.totalRounds}　` : '';
    const headLabel = isLektion ? `Lektion ${lek.id}` : esc(session.label);
    // 続きがあれば「続きを解く」を主ボタンに、なければ「もう一度」を主ボタンにする
    const nextHtml = hasNext
      ? '<button class="btn btn-primary" id="nextRoundBtn">続きを解く →</button>'
      : '';
    // 復習モード以外で今ラウンドに間違いがあれば「間違えた問題に再挑戦」を出す
    const reviewBtnHtml = session.mode !== 'review' && wrong.length > 0
      ? `<button class="btn btn-ghost" id="reviewBtn">📌 間違えた問題に再挑戦（${wrong.length}問）</button>`
      : '';
    const retryLabel = session.mode === 'review' ? 'もう一度復習' : '最初から';
    const retryClass = hasNext ? 'btn btn-ghost' : 'btn btn-primary';

    mountView(`
      <section class="result" style="--accent:${accent}">
        <div class="score-ring" style="--pct:${rate}">
          <div class="score-inner">
            <span class="score-num" data-target="${rate}">0</span><span class="score-pct">%</span>
          </div>
        </div>
        <p class="result-msg">${message}</p>
        <p class="result-detail">${headLabel} ／ ${roundLabel}${correct} / ${total} 問正解</p>
        ${hasNext ? '<p class="result-hint">残りの問題があります。「続きを解く」で次の10問に挑戦できます。</p>' : ''}
        ${reviewHtml}
        <div class="result-actions">
          ${nextHtml}
          ${reviewBtnHtml}
          <button class="${retryClass}" id="retryBtn">${retryLabel}</button>
          <button class="btn btn-ghost" id="backBtn">ホームへ</button>
        </div>
      </section>
    `);

    animateCount(document.querySelector('.score-num'), rate);
    if (earnedNow.length) showBadgeToast(earnedNow);
    if (hasNext) {
      document.getElementById('nextRoundBtn').addEventListener('click', () => {
        vibrate(8);
        Quiz.startNextRound(session);
        renderQuestion();
      });
    }
    const reviewBtnEl = document.getElementById('reviewBtn');
    if (reviewBtnEl) {
      reviewBtnEl.addEventListener('click', () => {
        vibrate(8);
        session = Quiz.createCustomSession(
          wrong.map((a) => a.question),
          { mode: 'review', label: 'このラウンドの間違い復習' }
        );
        renderQuestion();
      });
    }
    document.getElementById('retryBtn').addEventListener('click', () => {
      vibrate(8);
      if (session.mode === 'random') startRandomQuiz();
      else if (session.mode === 'review') startWeakQuiz();
      else if (session.mode === 'drill') startDrillQuiz(session.drillThemes);
      else startQuiz(session.lektionId);
    });
    document.getElementById('backBtn').addEventListener('click', () => {
      vibrate(8);
      renderHome();
    });
  }

  /* ---------- 演出 ---------- */

  /** スコアのカウントアップ */
  function animateCount(el, target) {
    if (!el) return;
    if (reduceMotion) { el.textContent = target; return; }
    const duration = 900;
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(eased * target);
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /** 控えめな紙吹雪バースト */
  function burstConfetti() {
    const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#0ea5e9'];
    const layer = document.createElement('div');
    layer.className = 'confetti-layer';
    for (let i = 0; i < 16; i++) {
      const p = document.createElement('span');
      p.className = 'confetti';
      p.style.left = 50 + (Math.random() * 40 - 20) + '%';
      p.style.background = colors[i % colors.length];
      p.style.setProperty('--dx', (Math.random() * 200 - 100) + 'px');
      p.style.setProperty('--dy', (-120 - Math.random() * 120) + 'px');
      p.style.setProperty('--rot', (Math.random() * 720 - 360) + 'deg');
      p.style.animationDelay = Math.random() * 80 + 'ms';
      layer.appendChild(p);
    }
    document.body.appendChild(layer);
    setTimeout(() => layer.remove(), 1200);
  }

  /* ---------- 初期化 ---------- */

  homeBtn.addEventListener('click', () => {
    vibrate(8);
    renderHome();
  });

  renderHome();
})();
