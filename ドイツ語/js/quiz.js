/**
 * クイズエンジン。指定Lektionの問題を取得・シャッフルし、1問ずつ即時判定して採点する。
 * 2つの出題形式に対応する純粋なロジック（UI非依存）:
 *   ① 組み立て式（buildMode）… chips（並び替え）/ tiles（語形変化）。語句タイルを並べて文を作り、
 *      正解の語順 tokens と照合する。tiles はタップで語形が循環し、answer が正解形。
 *   ② 択一式（choices）… 4択から1つ選ぶ。選択肢をシャッフルして answer index を追従させる。
 * 1セッションは全問をシャッフルしたプールを持ち、ROUND_SIZE 問ずつ「ラウンド」として出題する。
 */
const Quiz = (() => {
  const ROUND_SIZE = 10; // 1ラウンドあたりの出題数

  /** 配列をシャッフルする（Fisher-Yates、非破壊）。 */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // 同程度の優先度の問題を毎回少し入れ替えるためのランダム揺らぎ幅（バケットは崩さない）
  const JITTER = 0.45;

  /**
   * 学習履歴の優先度（高いほど先）に軽いランダム揺らぎを加えて並べる。
   * 苦手・未学習を先に、毎回正解する習得済みを後ろに回す。Storage が無い場合は単純シャッフル。
   */
  function orderByPriority(arr) {
    if (typeof Storage === 'undefined' || !Storage.getPriorityMap) return shuffle(arr);
    const pmap = Storage.getPriorityMap();
    return arr
      .map((q) => ({ q, key: (pmap[q.id] || 0) + Math.random() * JITTER }))
      .sort((a, b) => b.key - a.key)
      .map((x) => x.q);
  }

  /** "a / b / c" 形式の文字列を語句トークン配列にする。 */
  function splitChips(str) {
    if (!str) return [];
    return String(str).split('/').map((s) => s.trim()).filter((s) => s.length > 0);
  }

  /** 択一問題の選択肢をシャッフルし、正解indexを追従させる。 */
  function shuffleChoices(q) {
    const indices = shuffle(q.choices.map((_, i) => i));
    const choices = indices.map((i) => q.choices[i]);
    const answer = indices.indexOf(q.answer);
    return { ...q, choices, answer, buildMode: false };
  }

  /**
   * 問題に出題用の情報を付与する。
   *  - tiles あり … 語形変化モード。各タイルは候補 forms と現在の選択 idx を持つ。
   *      fixed=true は固定、それ以外はタップで forms を循環し answer が正解形。
   *  - chips あり … 並び替えモード（全タイル固定）。
   *  - それ以外  … 択一モード（choices をシャッフル）。
   * 戻り値の buildMode が true なら組み立て式、false なら択一式。
   *   tokens : 正解の語順（配列、組み立て式のみ）
   *   bank   : 出題するタイル {forms,idx,fixed,dummy,answer?} の配列（シャッフル済み）
   */
  function prepare(q) {
    if (q.tiles && q.tiles.length) {
      const tiles = q.tiles.map((t) => (typeof t === 'string'
        ? { forms: [t], idx: 0, fixed: true, dummy: false }
        : { forms: t.forms.slice(), idx: 0, fixed: false, dummy: false, answer: t.answer }));
      const tokens = tiles.map((t) => (t.fixed ? t.forms[0] : t.answer));
      const dummyTiles = splitChips(q.dummies).map((d) => ({ forms: [d], idx: 0, fixed: true, dummy: true }));
      const bank = shuffle(tiles.concat(dummyTiles));
      return { ...q, tokens, bank, formMode: true, buildMode: true };
    }
    if (q.chips) {
      const toks = splitChips(q.chips);
      const dummies = splitChips(q.dummies);
      const bank = shuffle(
        toks.map((t) => ({ forms: [t], idx: 0, fixed: true, dummy: false }))
          .concat(dummies.map((t) => ({ forms: [t], idx: 0, fixed: true, dummy: true })))
      );
      return { ...q, tokens: toks, bank, buildMode: true };
    }
    return shuffleChoices(q);
  }

  /** 現在のラウンドの問題をプールから切り出してセットする。 */
  function loadRound(session) {
    const slice = session.pool.slice(session.roundStart, session.roundStart + ROUND_SIZE);
    session.questions = slice.map(prepare);
    session.index = 0;
    session.correctCount = 0;
    session.answers = [];
  }

  /** 指定Lektionのクイズセッションを生成する。 */
  function createSession(lektionId) {
    const pool = QUESTIONS.filter((q) => q.lektion === lektionId);
    const session = {
      mode: 'lektion',
      lektionId,
      label: null,
      pool: orderByPriority(pool),
      roundStart: 0,
      questions: [],
      index: 0,
      correctCount: 0,
      answers: [],
    };
    loadRound(session);
    return session;
  }

  /** 任意の問題リストからセッションを生成する（ランダム・復習で使用）。 */
  function createCustomSession(questions, meta) {
    const session = {
      mode: meta.mode,
      lektionId: null,
      label: meta.label,
      pool: meta.ordered ? questions.slice() : orderByPriority(questions),
      roundStart: 0,
      questions: [],
      index: 0,
      correctCount: 0,
      answers: [],
    };
    loadRound(session);
    return session;
  }

  function hasNextRound(session) {
    return session.roundStart + session.questions.length < session.pool.length;
  }

  function startNextRound(session) {
    session.roundStart += ROUND_SIZE;
    loadRound(session);
  }

  function roundInfo(session) {
    return {
      round: Math.floor(session.roundStart / ROUND_SIZE) + 1,
      totalRounds: Math.ceil(session.pool.length / ROUND_SIZE),
    };
  }

  function current(session) {
    return session.questions[session.index] || null;
  }

  /**
   * 択一式の回答を記録し、正誤を返す。
   * @returns {{ correct: boolean, answer: number }}
   */
  function answer(session, selectedIndex) {
    const q = current(session);
    const isCorrect = selectedIndex === q.answer;
    if (isCorrect) session.correctCount++;
    session.answers.push({ question: q, selected: selectedIndex, correct: isCorrect });
    return { correct: isCorrect, answer: q.answer };
  }

  /**
   * 組み立て式の回答（並べた語句列）を採点する。
   * @returns {{ correct: boolean, tokens: string[] }}
   */
  function check(session, builtTexts) {
    const q = current(session);
    const isCorrect = JSON.stringify(builtTexts) === JSON.stringify(q.tokens);
    if (isCorrect) session.correctCount++;
    session.answers.push({ question: q, built: builtTexts.slice(), correct: isCorrect });
    return { correct: isCorrect, tokens: q.tokens };
  }

  function next(session) {
    session.index++;
    return session.index < session.questions.length;
  }

  function progress(session) {
    return { current: session.index + 1, total: session.questions.length };
  }

  function wrongAnswers(session) {
    return session.answers.filter((a) => !a.correct);
  }

  return {
    createSession,
    createCustomSession,
    current,
    answer,
    check,
    next,
    progress,
    wrongAnswers,
    hasNextRound,
    startNextRound,
    roundInfo,
  };
})();
