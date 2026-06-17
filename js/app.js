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

  /** 問題文の括弧内から格・冠詞・代名詞等の文法サフィックスを除去（ヒントに移動するため） */
  function stripGrammarHint(prompt) {
    return prompt.replace(/・[^）]*(?:格|冠詞|代名詞|自動詞|他動詞|変化)[^）]*/g, '');
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

  /** 軽い触覚フィードバック（対応端末のみ） */
  function vibrate(pattern) {
    if (navigator.vibrate && !reduceMotion) {
      try { navigator.vibrate(pattern); } catch (_) { /* 無視 */ }
    }
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

    const wrongCount = Storage.getWrongIds().length;
    const reviewDisabled = wrongCount === 0;

    mountView(`
      <section class="home">
        <div class="hero">
          <h1 class="hero-title">ドイツ語文法トレーナー</h1>
          <p class="hero-sub">Lektion 1〜8 ｜ 格変化・人称変化・格支配を択一問題で練習</p>
        </div>
        <div class="special-grid">
          <button class="special-card special-card--random" id="randomBtn">
            <span class="special-icon">🎲</span>
            <span class="special-body">
              <span class="special-title">全範囲からランダム</span>
              <span class="special-sub">全レッスンを混ぜて10問ずつ出題</span>
            </span>
          </button>
          <button class="special-card special-card--review" id="reviewBtn" ${reviewDisabled ? 'disabled' : ''}>
            <span class="special-icon">📌</span>
            <span class="special-body">
              <span class="special-title">間違えた問題に再挑戦</span>
              <span class="special-sub">${reviewDisabled ? 'まだ間違えた問題はありません' : `復習リスト ${wrongCount} 問`}</span>
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
      startRandomQuiz();
    });
    const reviewBtn = document.getElementById('reviewBtn');
    if (!reviewDisabled) {
      reviewBtn.addEventListener('click', () => {
        vibrate(8);
        startReviewQuiz();
      });
    }
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

  /** 全レッスンの問題を混ぜてランダム出題する。 */
  function startRandomQuiz() {
    session = Quiz.createCustomSession(QUESTIONS, { mode: 'random', label: '全範囲ランダム' });
    renderQuestion();
  }

  /** 復習リスト（間違えた問題）だけを出題する。 */
  function startReviewQuiz() {
    const ids = Storage.getWrongIds();
    const pool = QUESTIONS.filter((q) => ids.includes(q.id));
    if (pool.length === 0) return renderHome();
    session = Quiz.createCustomSession(pool, { mode: 'review', label: '間違えた問題の復習' });
    renderQuestion();
  }

  /** 問題が属するLektion（解説オーバーレイ・アクセント色に使用）を返す。 */
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

    mountView(`
      <section class="quiz" style="--accent:${lek.accent}">
        <div class="quiz-top">
          ${roundLabel ? `<span class="quiz-round">${roundLabel}</span>` : '<span></span>'}
          <button class="btn btn-ghost btn-grammar" id="grammarBtn" type="button">📖 解説を見る</button>
        </div>
        <div class="quiz-bar">
          <div class="quiz-progress"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
          <span class="quiz-count">${p.current} / ${p.total}</span>
        </div>
        <span class="quiz-cat">${session.mode !== 'lektion' ? `Lektion ${lek.id}・` : ''}${esc(q.category)}</span>
        <h2 class="quiz-prompt">${esc(stripGrammarHint(q.prompt))}</h2>
        <div class="choices" id="choices">${choices}</div>
        <button class="btn btn-ghost btn-hint" id="hintBtn">💡 ヒントを見る</button>
        <div class="hint" id="hint" hidden>${esc(q.hint)}${hintTableFor(q)}</div>
        <div class="feedback" id="feedback" aria-live="polite" hidden></div>
        <button class="btn btn-primary btn-next" id="nextBtn" hidden></button>
      </section>
    `);

    const choicesEl = document.getElementById('choices');
    const hintBtn = document.getElementById('hintBtn');
    const hintEl = document.getElementById('hint');
    const feedbackEl = document.getElementById('feedback');
    const nextBtn = document.getElementById('nextBtn');

    document.getElementById('grammarBtn').addEventListener('click', () => {
      vibrate(8);
      showGrammarOverlay(lek);
    });

    hintBtn.addEventListener('click', () => {
      hintEl.hidden = false;
      hintBtn.classList.add('used');
      hintBtn.textContent = '💡 ヒント表示中';
    });

    choicesEl.querySelectorAll('.choice').forEach((btn) => {
      btn.addEventListener('click', () => {
        const selected = Number(btn.dataset.index);
        const result = Quiz.answer(session, selected);

        // 復習リストを更新（不正解→追加、正解→除外）
        if (result.correct) {
          Storage.removeWrong(q.id);
        } else {
          Storage.addWrong(q.id);
        }

        // 全選択肢を無効化し、正解/不正解をマーク
        choicesEl.querySelectorAll('.choice').forEach((b, i) => {
          b.disabled = true;
          b.classList.add('locked');
          if (i === result.answer) b.classList.add('correct');
        });

        const tipHtml = q.tip
          ? `<div class="tip-box"><span class="tip-label">💡 覚え方のコツ</span>${esc(q.tip)}</div>`
          : '';

        if (result.correct) {
          btn.classList.add('pop');
          vibrate(12);
          if (!reduceMotion) burstConfetti();
          feedbackEl.className = 'feedback feedback--ok';
          feedbackEl.innerHTML = `<strong>正解！</strong> ${esc(Quiz.current(session).explanation)}${tipHtml}`;
        } else {
          btn.classList.add('wrong', 'shake');
          vibrate([20, 40, 20]);
          feedbackEl.className = 'feedback feedback--ng';
          feedbackEl.innerHTML = `<strong>不正解</strong> 正解は <b>${esc(q.choices[result.answer])}</b><br>${esc(Quiz.current(session).explanation)}${tipHtml}`;
        }
        feedbackEl.hidden = false;
        hintBtn.hidden = true;

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
    const accent = lek ? lek.accent : '#14b8a6';
    const total = session.questions.length;
    const correct = session.correctCount;
    const rate = Math.round((correct / total) * 100);
    // Lektion別の最高記録はLektionモードのときだけ保存する
    if (isLektion) Storage.saveResult(session.lektionId, correct, total);

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
              ${a.question.tip ? `<p class="review-tip">💡 ${esc(a.question.tip)}</p>` : ''}
            </div>
          `).join('')}
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
      else if (session.mode === 'review') startReviewQuiz();
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
