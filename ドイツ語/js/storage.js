/**
 * localStorage を使った進捗・成績・ゲーム要素の保存ラッパ。
 * - 進捗      : { [lektionId]: { bestRate, lastRate, lastCorrect, lastTotal, attempts, updatedAt } }
 * - 学習履歴  : { [questionId]: { miss, streak, correct, lastSeenAt, lastCorrectAt } }
 * - 出題設定  : ランダム出題の対象セクション（回）ID配列
 * - ゲーム要素: 最高連続正解（コンボ）・獲得バッジ
 */
const Storage = (() => {
  const PREFIX = 'de-grammar';
  const STORAGE_KEY = `${PREFIX}-progress-v1`;
  const WRONG_KEY = `${PREFIX}-wrong-v1`;
  const SELECT_KEY = `${PREFIX}-select-v1`;
  const COMBO_KEY = `${PREFIX}-maxcombo-v1`;
  const BADGE_KEY = `${PREFIX}-badges-v1`;

  /**
   * 全進捗を読み込む。
   * @returns {Object} lektionId をキーとした進捗オブジェクト
   */
  function loadAll() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (err) {
      console.warn('進捗の読み込みに失敗しました:', err);
      return {};
    }
  }

  /**
   * 指定回の進捗を取得する。
   * @param {number} lektionId
   * @returns {Object|null}
   */
  function getProgress(lektionId) {
    const all = loadAll();
    return all[lektionId] || null;
  }

  /**
   * クイズ結果を保存する（最高正答率も更新）。
   * @param {number} lektionId
   * @param {number} correct 正解数
   * @param {number} total 問題数
   */
  function saveResult(lektionId, correct, total) {
    if (!total) return;
    try {
      const all = loadAll();
      const prev = all[lektionId] || { bestRate: 0, attempts: 0 };
      const rate = Math.round((correct / total) * 100);
      all[lektionId] = {
        bestRate: Math.max(prev.bestRate || 0, rate),
        lastRate: rate,
        lastCorrect: correct,
        lastTotal: total,
        attempts: (prev.attempts || 0) + 1,
        updatedAt: Date.now(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    } catch (err) {
      console.warn('進捗の保存に失敗しました:', err);
    }
  }

  /**
   * 全進捗を消去する。
   */
  function clearAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.warn('進捗の消去に失敗しました:', err);
    }
  }

  /* ---------- 問題ごとの学習履歴（出題優先度・苦手判定） ---------- */

  // 連続正解で「習得済み」とみなし、苦手リストから外す回数
  const GRADUATE_STREAK = 2;
  // 出題優先度スコアの計算で連続正解1回あたり差し引く重み（毎回正解する問題を後回しにする）
  const STREAK_WEIGHT = 0.5;

  /**
   * 統計1件を既定値で正規化する（旧形式・欠損フィールドの吸収）。
   * @param {Object} s
   * @returns {{miss:number, streak:number, correct:number, lastSeenAt:number, lastCorrectAt:number}}
   */
  function normalizeStat(s) {
    return {
      miss: Number(s && s.miss) || 0,
      streak: Number(s && s.streak) || 0,
      correct: Number(s && s.correct) || 0,
      lastSeenAt: Number(s && s.lastSeenAt) || 0,
      lastCorrectAt: Number(s && s.lastCorrectAt) || 0,
    };
  }

  /**
   * 全問題の学習履歴を読み込む。旧形式（IDの配列／簡易オブジェクト）は自動で移行する。
   * @returns {Object} { [questionId]: 正規化済み統計 }
   */
  function loadStats() {
    try {
      const raw = localStorage.getItem(WRONG_KEY);
      if (!raw) return {};
      const data = JSON.parse(raw);
      const out = {};
      if (Array.isArray(data)) {
        data.forEach((id) => { out[id] = normalizeStat({ miss: 1 }); });
        return out;
      }
      if (data && typeof data === 'object') {
        Object.keys(data).forEach((id) => { out[id] = normalizeStat(data[id]); });
      }
      return out;
    } catch (err) {
      console.warn('学習履歴の読み込みに失敗しました:', err);
      return {};
    }
  }

  /** 学習履歴を保存する。 */
  function saveStats(stats) {
    try {
      localStorage.setItem(WRONG_KEY, JSON.stringify(stats));
    } catch (err) {
      console.warn('学習履歴の保存に失敗しました:', err);
    }
  }

  /** 出題優先度スコア（高いほど先に出題）。
   * ミスが多い、正解が少ない、連続正解が少ないほど高くなる。 */
  function scoreOf(stat) {
    return stat.miss - stat.streak * STREAK_WEIGHT - stat.correct * 0.1;
  }

  /** 苦手（まだ習得していない＝ミスがあり連続正解が GRADUATE_STREAK 未満）か。 */
  function isWeak(stat) {
    return stat.miss > 0 && stat.streak < GRADUATE_STREAK;
  }

  /**
   * 不正解を記録する（ミス回数+1・連続正解数リセット）。
   * @param {string} questionId
   */
  function recordWrong(questionId) {
    if (!questionId) return;
    const stats = loadStats();
    const cur = normalizeStat(stats[questionId]);
    cur.miss += 1;
    cur.streak = 0;
    cur.lastSeenAt = Date.now();
    stats[questionId] = cur;
    saveStats(stats);
  }

  /**
   * 正解を記録する（連続正解数+1・正解時刻を更新）。
   * @param {string} questionId
   */
  function recordCorrect(questionId) {
    if (!questionId) return;
    const stats = loadStats();
    const cur = normalizeStat(stats[questionId]);
    cur.streak += 1;
    cur.correct += 1;
    cur.lastSeenAt = Date.now();
    cur.lastCorrectAt = cur.lastSeenAt;
    stats[questionId] = cur;
    saveStats(stats);
  }

  /**
   * 苦手問題IDを出題優先度の高い順（よく間違える＝正答数の少ない順）に返す。
   * @returns {string[]}
   */
  function getWeakIds() {
    const stats = loadStats();
    return Object.keys(stats)
      .filter((id) => isWeak(stats[id]))
      .sort((a, b) => scoreOf(stats[b]) - scoreOf(stats[a]));
  }

  /**
   * 問題IDごとの出題優先度スコアの対応表を返す（出題順の最適化に使用）。
   * @returns {Object} { [questionId]: score }
   */
  function getPriorityMap() {
    const stats = loadStats();
    const map = {};
    Object.keys(stats).forEach((id) => { map[id] = scoreOf(stats[id]); });
    return map;
  }

  /**
   * ホーム表示用の学習サマリーを返す。
   * @returns {{weak:number, mastered:number, tracked:number, lastStudiedAt:number}}
   */
  function getSummary() {
    const stats = loadStats();
    const ids = Object.keys(stats);
    let weak = 0;
    let mastered = 0;
    let lastStudiedAt = 0;
    ids.forEach((id) => {
      const s = stats[id];
      if (isWeak(s)) weak += 1;
      if (s.streak >= GRADUATE_STREAK) mastered += 1;
      if (s.lastSeenAt > lastStudiedAt) lastStudiedAt = s.lastSeenAt;
    });
    return { weak, mastered, tracked: ids.length, lastStudiedAt };
  }

  /** 学習履歴（苦手リスト含む）をすべて消去する。 */
  function clearWrong() {
    try {
      localStorage.removeItem(WRONG_KEY);
    } catch (err) {
      console.warn('学習履歴の消去に失敗しました:', err);
    }
  }

  /* ---------- ランダム出題の対象セクション（回）設定 ---------- */

  /** 全回IDを返す。 */
  function allLektionIds() {
    return (typeof LEKTIONEN !== 'undefined' && Array.isArray(LEKTIONEN)) ? LEKTIONEN.map((l) => l.id) : [];
  }

  /** ランダム出題の対象回ID一覧を取得する（未設定なら全回）。 */
  function getSelectedLektionen() {
    try {
      const raw = localStorage.getItem(SELECT_KEY);
      const arr = raw ? JSON.parse(raw) : null;
      if (Array.isArray(arr) && arr.length) return arr;
    } catch (err) {
      console.warn('出題設定の読み込みに失敗しました:', err);
    }
    return allLektionIds();
  }

  /** ランダム出題の対象回を保存する。 */
  function setSelectedLektionen(ids) {
    try {
      localStorage.setItem(SELECT_KEY, JSON.stringify(ids));
    } catch (err) {
      console.warn('出題設定の保存に失敗しました:', err);
    }
  }

  /* ---------- ゲーム要素（コンボ・バッジ） ---------- */

  /** 自己ベストの連続正解数（コンボ）を取得する。 */
  function getMaxCombo() {
    try {
      return Number(localStorage.getItem(COMBO_KEY)) || 0;
    } catch (err) {
      return 0;
    }
  }

  /** コンボが自己ベストを更新したら保存する。 */
  function recordCombo(n) {
    try {
      if (n > getMaxCombo()) localStorage.setItem(COMBO_KEY, String(n));
    } catch (err) {
      /* 無視 */
    }
  }

  /** 獲得済みバッジID一覧を返す。 */
  function getEarnedBadges() {
    try {
      const raw = localStorage.getItem(BADGE_KEY);
      const a = raw ? JSON.parse(raw) : [];
      return Array.isArray(a) ? a : [];
    } catch (err) {
      return [];
    }
  }

  /** バッジを付与する。新規付与なら true を返す。 */
  function awardBadge(id) {
    try {
      const a = getEarnedBadges();
      if (a.includes(id)) return false;
      a.push(id);
      localStorage.setItem(BADGE_KEY, JSON.stringify(a));
      return true;
    } catch (err) {
      return false;
    }
  }

  /** ゲーム要素（コンボ・バッジ）を消去する。 */
  function clearGameData() {
    try {
      localStorage.removeItem(COMBO_KEY);
      localStorage.removeItem(BADGE_KEY);
    } catch (err) {
      /* 無視 */
    }
  }

  return {
    loadAll, getProgress, saveResult, clearAll,
    recordWrong, recordCorrect, getWeakIds, getPriorityMap, getSummary, clearWrong,
    getSelectedLektionen, setSelectedLektionen,
    getMaxCombo, recordCombo, getEarnedBadges, awardBadge, clearGameData,
  };
})();
