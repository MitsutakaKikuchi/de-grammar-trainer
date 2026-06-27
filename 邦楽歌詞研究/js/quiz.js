/**
 * クイズエンジン。指定Lektionの問題を取得・シャッフルし、1問ずつ即時判定して採点する。
 * 1セッションは全問をシャッフルしたプールを持ち、ROUND_SIZE 問ずつ「ラウンド」として出題する。
 * ラウンドを解き終えると、残りがあれば「続きを解く」で次のラウンドへ進める。
 * UI には依存しない純粋なロジック。
 */
const Quiz = (() => {
  const ROUND_SIZE = 10; // 1ラウンドあたりの出題数

  /**
   * 配列をシャッフルする（Fisher-Yates、非破壊）。
   * @param {Array} arr
   * @returns {Array} 新しいシャッフル済み配列
   */
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
   * @param {Array} arr 問題配列
   * @returns {Array} 並べ替え済みの新しい配列
   */
  function orderByPriority(arr) {
    if (typeof Storage === 'undefined' || !Storage.getPriorityMap) return shuffle(arr);
    const pmap = Storage.getPriorityMap();
    return arr
      .map((q) => ({ q, key: (pmap[q.id] || 0) + Math.random() * JITTER }))
      .sort((a, b) => b.key - a.key)
      .map((x) => x.q);
  }

  /**
   * 選択肢をシャッフルし、正解indexを追従させた問題オブジェクトを返す。
   * @param {Object} q 元の問題
   * @returns {Object} シャッフル済みの問題
   */
  function shuffleChoices(q) {
    const indices = shuffle(q.choices.map((_, i) => i));
    const choices = indices.map((i) => q.choices[i]);
    const answer = indices.indexOf(q.answer);
    return { ...q, choices, answer };
  }

  /**
   * 現在のラウンドの問題（選択肢シャッフル済み）をプールから切り出してセットする。
   * @param {Object} session
   */
  function loadRound(session) {
    const slice = session.pool.slice(session.roundStart, session.roundStart + ROUND_SIZE);
    session.questions = slice.map(shuffleChoices);
    session.index = 0;
    session.correctCount = 0;
    session.answers = [];
  }

  /**
   * 指定Lektionのクイズセッションを生成する（全問をシャッフルし最初のラウンドを準備）。
   * @param {number} lektionId
   * @returns {Object} セッション状態
   */
  function createSession(lektionId) {
    const pool = QUESTIONS.filter((q) => q.lektion === lektionId);
    const session = {
      mode: 'lektion',     // 'lektion' | 'random' | 'review'
      lektionId,
      label: null,         // 特別モードの表示名
      pool: orderByPriority(pool), // 苦手・未学習を先に、習得済みを後ろに並べる
      roundStart: 0,       // 現在ラウンドの開始index
      questions: [],       // 現在ラウンドの出題
      index: 0,
      correctCount: 0,
      answers: [], // { question, selected, correct }
    };
    loadRound(session);
    return session;
  }

  /**
   * 任意の問題リストからセッションを生成する（全範囲ランダム・間違い復習で使用）。
   * @param {Object[]} questions 出題する問題の配列
   * @param {{ mode: string, label: string, ordered?: boolean }} meta モード情報（ordered: true で渡された順序を保持）
   * @returns {Object} セッション状態
   */
  function createCustomSession(questions, meta) {
    const session = {
      mode: meta.mode,
      lektionId: null,
      label: meta.label,
      // ordered 指定時は渡された順（＝ミスの多い順など）を保持、それ以外は優先度順に並べる
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

  /**
   * 次のラウンドがあるか（まだ出題していない問題が残っているか）。
   * @param {Object} session
   * @returns {boolean}
   */
  function hasNextRound(session) {
    return session.roundStart + session.questions.length < session.pool.length;
  }

  /**
   * 次のラウンドへ進める。
   * @param {Object} session
   */
  function startNextRound(session) {
    session.roundStart += ROUND_SIZE;
    loadRound(session);
  }

  /**
   * ラウンド情報（現在の何ラウンド目か／全ラウンド数）を返す。
   * @param {Object} session
   * @returns {{ round: number, totalRounds: number }}
   */
  function roundInfo(session) {
    return {
      round: Math.floor(session.roundStart / ROUND_SIZE) + 1,
      totalRounds: Math.ceil(session.pool.length / ROUND_SIZE),
    };
  }

  /**
   * 現在の問題を返す。
   * @param {Object} session
   * @returns {Object|null}
   */
  function current(session) {
    return session.questions[session.index] || null;
  }

  /**
   * 回答を記録し、正誤を返す。
   * @param {Object} session
   * @param {number} selectedIndex 選んだ選択肢index
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
   * 次の問題へ進める。
   * @param {Object} session
   * @returns {boolean} まだ問題が残っていれば true
   */
  function next(session) {
    session.index++;
    return session.index < session.questions.length;
  }

  /**
   * 進捗（n / total）を返す。
   */
  function progress(session) {
    return { current: session.index + 1, total: session.questions.length };
  }

  /**
   * 間違えた問題の一覧を返す。
   */
  function wrongAnswers(session) {
    return session.answers.filter((a) => !a.correct);
  }

  return {
    createSession,
    createCustomSession,
    current,
    answer,
    next,
    progress,
    wrongAnswers,
    hasNextRound,
    startNextRound,
    roundInfo,
  };
})();
