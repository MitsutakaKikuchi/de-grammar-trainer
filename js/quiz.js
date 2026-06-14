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
      lektionId,
      pool: shuffle(pool), // 全問（問題順シャッフル済み）
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
