/**
 * アプリ本体。ビュー（ホーム/要点解説/クイズ/結果）の描画と画面遷移を管理する。
 * データ(LEKTIONEN, QUESTIONS)・Storage・Quiz に依存する。
 * ※ LEKTIONEN は「回」のメタ情報配列（lektion=回番号）。
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
    void viewEl.offsetWidth; // リフローを強制してアニメーションを再トリガー
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
    { id: 'clear3', icon: '🎖️', name: '三冠', desc: '3つの回で満点（100%）' },
    { id: 'clearAll', icon: '👑', name: '全制覇', desc: 'すべての回で満点（100%）' },
  ];

  /** 満点（bestRate===100）の回数を数える。 */
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
        <button class="card" data-lektion="${lek.id}" style="--accent:${lek.accent}; --delay:${i * 60}ms">
          <div class="card-top">
            <span class="card-num">第${lek.id}回</span>
            ${badge}
          </div>
          <h2 class="card-title">${esc(lek.title)}</h2>
          <p class="card-sub">${esc(lek.subtitle)}</p>
          <div class="card-tags">${themeTags}</div>
          <div class="progress"><div class="progress-bar" style="width:${rate}%"></div></div>
        </button>`;
    }).join('');

    const weakCount = Storage.getWeakIds().length;
    const reviewDisabled = weakCount === 0;

    mountView(`
      <section class="home">
        <div class="hero">
          <h1 class="hero-title">邦楽歌詞研究 択一トレーナー</h1>
          <p class="hero-sub">第1〜10回 ｜ 雅楽・能・狂言・地歌箏曲・長唄・浄瑠璃の歌詞と歴史を択一問題で確認</p>
        </div>
        ${buildSummaryHtml()}
        ${buildBadgeHtml()}
        <div class="special-grid">
          <button class="special-card special-card--random" id="randomBtn">
            <span class="special-icon">🎲</span>
            <span class="special-body">
              <span class="special-title">全範囲からランダム</span>
              <span class="special-sub">全10回を混ぜて10問ずつ出題</span>
            </span>
          </button>
          <button class="special-card special-card--review" id="reviewBtn" ${reviewDisabled ? 'disabled' : ''}>
            <span class="special-icon">🎯</span>
            <span class="special-body">
              <span class="special-title">よく間違える問題を集中学習</span>
              <span class="special-sub">${reviewDisabled ? 'まだ苦手な問題はありません' : `苦手リスト ${weakCount} 問・正答数の少ない順に出題`}</span>
            </span>
          </button>
        </div>
        <div class="card-grid">${cards}</div>
        <p class="home-foot">学習したい回を選んでください（前期試験：7月7日・多肢選択式）</p>
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
  }

  /* ---------- 要点・解説 ---------- */

  /** 要点セクション群の HTML を組み立てる（詳細ビュー・オーバーレイで共用） */
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
   * クイズ中に要点をオーバーレイ表示する。クイズのDOMは保持されるため、
   * 閉じると解いていた問題の状態にそのまま戻れる。
   */
  function showGrammarOverlay(lek) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
      <div class="overlay-panel" style="--accent:${lek.accent}" role="dialog" aria-modal="true" aria-label="要点・解説">
        <div class="overlay-head">
          <h2 class="overlay-title">第${lek.id}回の要点</h2>
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
    void overlay.offsetWidth;
    overlay.classList.add('overlay--in');
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
          <span class="lektion-num">第${lek.id}回</span>
          <h1 class="lektion-title">${esc(lek.title)}</h1>
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

  /** ランダム出題の対象回（セクション）を選ぶ設定画面。 */
  function renderRandomSettings() {
    homeBtn.classList.remove('hidden');
    const selected = new Set(Storage.getSelectedLektionen());

    const chips = LEKTIONEN.map((l) => {
      const count = QUESTIONS.filter((q) => q.lektion === l.id).length;
      const on = selected.has(l.id);
      return `
        <button class="sec-chip${on ? ' sec-chip--on' : ''}" data-lektion="${l.id}" style="--accent:${l.accent}" aria-pressed="${on}">
          <span class="sec-chip-num">第${l.id}回</span>
          <span class="sec-chip-title">${esc(l.title)}</span>
          <span class="sec-chip-count">${count}問</span>
        </button>`;
    }).join('');

    mountView(`
      <section class="settings">
        <div class="settings-head">
          <h1 class="settings-title">🎲 ランダム出題の設定</h1>
          <p class="settings-sub">出題する回（セクション）を選んでください。複数選択できます。</p>
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
      countEl.textContent = `選択中：${ids.length} 回 ／ ${n} 問`;
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

  /** 選択された回の問題を混ぜてランダム出題する（未指定なら保存済み設定）。 */
  function startRandomQuiz(lektionIds) {
    const ids = (lektionIds && lektionIds.length) ? lektionIds : Storage.getSelectedLektionen();
    const pool = QUESTIONS.filter((q) => ids.includes(q.lektion));
    if (pool.length === 0) return renderRandomSettings();
    const label = ids.length >= LEKTIONEN.length
      ? '全範囲ランダム'
      : `ランダム（${ids.length}回・${pool.length}問）`;
    session = Quiz.createCustomSession(pool, { mode: 'random', label });
    renderQuestion();
  }

  /** 苦手リスト（よく間違える問題）を正答数の少ない順に出題する。 */
  function startWeakQuiz() {
    const ids = Storage.getWeakIds(); // ミスが多く正答が少ない順
    const order = new Map(ids.map((id, i) => [id, i]));
    const pool = QUESTIONS
      .filter((q) => order.has(q.id))
      .sort((a, b) => order.get(a.id) - order.get(b.id));
    if (pool.length === 0) return renderHome();
    session = Quiz.createCustomSession(pool, { mode: 'review', label: 'よく間違える問題', ordered: true });
    renderQuestion();
  }

  /** 問題が属する回（要点オーバーレイ・アクセント色に使用）を返す。 */
  function lektionOf(q) {
    return LEKTIONEN.find((l) => l.id === q.lektion) || LEKTIONEN[0];
  }

  function renderQuestion() {
    const q = Quiz.current(session);
    const lek = session.mode === 'lektion'
      ? LEKTIONEN.find((l) => l.id === session.lektionId)
      : lektionOf(q);
    const p = Quiz.progress(session);
    const r = Quiz.roundInfo(session);
    const pct = Math.round(((p.current - 1) / p.total) * 100);
    const roundLabel = r.totalRounds > 1 ? `ラウンド ${r.round} / ${r.totalRounds}` : '';

    const choices = q.choices.map((c, i) => `
      <button class="choice" data-index="${i}">
        <span class="choice-key">${String.fromCharCode(65 + i)}</span>
        <span class="choice-text">${esc(c)}</span>
      </button>
    `).join('');

    const hintHtml = q.hint
      ? `<button class="btn btn-ghost btn-hint" id="hintBtn">💡 ヒントを見る</button>
         <div class="hint" id="hint" hidden>${esc(q.hint)}</div>`
      : '';

    mountView(`
      <section class="quiz" style="--accent:${lek.accent}">
        <div class="quiz-top">
          <span class="quiz-top-left">
            ${roundLabel ? `<span class="quiz-round">${roundLabel}</span>` : ''}
            ${(session.combo || 0) >= 2 ? `<span class="quiz-combo">🔥 ${session.combo} 連続</span>` : ''}
          </span>
          <button class="btn btn-ghost btn-grammar" id="grammarBtn" type="button">📖 要点を見る</button>
        </div>
        <div class="quiz-bar">
          <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
          <span class="quiz-count">${p.current} / ${p.total}</span>
        </div>
        <span class="quiz-cat">第${lek.id}回・${esc(q.category)}</span>
        <h2 class="quiz-prompt">${esc(q.prompt)}</h2>
        <div class="choices" id="choices">${choices}</div>
        ${hintHtml}
        <div class="feedback" id="feedback" aria-live="polite" hidden></div>
        <button class="btn btn-primary btn-next" id="nextBtn" hidden></button>
      </section>
    `);

    const choicesEl = document.getElementById('choices');
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');
    const hintBtn = document.getElementById('hintBtn');

    document.getElementById('grammarBtn').addEventListener('click', () => {
      vibrate(8);
      showGrammarOverlay(lek);
    });

    if (hintBtn) {
      const hintEl = document.getElementById('hint');
      hintBtn.addEventListener('click', () => {
        hintEl.hidden = false;
        hintBtn.classList.add('used');
        hintBtn.textContent = '💡 ヒント表示中';
      });
    }

    choicesEl.querySelectorAll('.choice').forEach((btn) => {
      btn.addEventListener('click', () => {
        const selected = Number(btn.dataset.index);
        const result = Quiz.answer(session, selected);

        // 苦手リストを更新（不正解→ミス記録、正解→連続正解を記録し2回で卒業）
        if (result.correct) {
          Storage.recordCorrect(q.id);
        } else {
          Storage.recordWrong(q.id);
        }

        // 全選択肢を無効化し、正解/不正解をマーク
        choicesEl.querySelectorAll('.choice').forEach((b, i) => {
          b.disabled = true;
          b.classList.add('locked');
          if (i === result.answer) b.classList.add('correct');
        });

        if (result.correct) {
          session.combo = (session.combo || 0) + 1;
          Storage.recordCombo(session.combo);
          btn.classList.add('pop');
          vibrate(12);
          if (!reduceMotion) burstConfetti();
          if (session.combo >= 2) showComboFlash(session.combo);
          const comboTag = session.combo >= 2 ? ` <span class="fb-combo">🔥 ${session.combo}連続！</span>` : '';
          feedbackEl.className = 'feedback feedback--ok';
          feedbackEl.innerHTML = `<strong>正解！</strong>${comboTag} ${esc(Quiz.current(session).explanation)}`;
        } else {
          session.combo = 0;
          btn.classList.add('wrong', 'shake');
          vibrate([20, 40, 20]);
          feedbackEl.className = 'feedback feedback--ng';
          feedbackEl.innerHTML = `<strong>不正解</strong> 正解は <b>${esc(q.choices[result.answer])}</b><br>${esc(Quiz.current(session).explanation)}`;
        }
        feedbackEl.hidden = false;
        if (hintBtn) hintBtn.hidden = true;

        const last = p.current === p.total;
        nextBtn.textContent = last ? '結果を見る →' : '次の問題 →';
        nextBtn.hidden = false;
      });
    });

    nextBtn.addEventListener('click', () => {
      vibrate(8);
      if (Quiz.next(session)) {
        renderQuestion();
      } else {
        renderResult();
      }
    });
  }

  /* ---------- 結果 ---------- */

  function renderResult() {
    const isLektion = session.mode === 'lektion';
    const lek = isLektion ? LEKTIONEN.find((l) => l.id === session.lektionId) : null;
    const accent = lek ? lek.accent : '#8b5cf6';
    const total = session.questions.length;
    const correct = session.correctCount;
    const rate = Math.round((correct / total) * 100);
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
          ${wrong.map((a) => `
            <div class="review-item">
              <p class="review-q">${esc(a.question.prompt)}</p>
              <p class="review-a">正解：<b>${esc(a.question.choices[a.question.answer])}</b></p>
              <p class="review-e">${esc(a.question.explanation)}</p>
            </div>
          `).join('')}
        </div>`
      : '<p class="all-correct">全問正解！この調子で続けましょう。✨</p>';

    const roundLabel = r.totalRounds > 1 ? `ラウンド ${r.round} / ${r.totalRounds}　` : '';
    const headLabel = isLektion ? `第${lek.id}回` : esc(session.label);
    const nextHtml = hasNext
      ? '<button class="btn btn-primary" id="nextRoundBtn">続きを解く →</button>'
      : '';
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
