/**
 * 特訓ドリル（drills.js）生成スクリプト。
 * 出典: ドイツ語テキスト_Lektion1-7_学習資料.md の「総合語彙リスト」「各Lektionの練習問題(Übung)」。
 * 4テーマ（動詞の格支配 / 前置詞の格支配 / 単語の意味 / 名詞の性）の択一問題を機械生成する。
 *
 * 実行: node gen_drills.js  → ../../js/data/drills.js を出力。
 */
'use strict';
const fs = require('fs');
const path = require('path');

/* ===== 出典データ（テキストを忠実に転記） ===== */

// 動詞: { de, ja, kasus, lektion, bsp } kasus は格支配ラベル
const VERBS = [
  { de: 'lernen',   ja: '学ぶ',                 kasus: '4格',        lektion: 1, bsp: 'Ich lerne Deutsch.' },
  { de: 'trinken',  ja: '飲む',                 kasus: '4格',        lektion: 1, bsp: 'Ich trinke Kaffee.' },
  { de: 'haben',    ja: '持つ',                 kasus: '4格',        lektion: 2, bsp: 'Ich habe Hunger.' },
  { de: 'bringen',  ja: '持ってくる',           kasus: '3格＋4格',   lektion: 3, bsp: 'Der Sohn bringt der Mutter eine Zeitschrift.' },
  { de: 'schreiben',ja: '書く',                 kasus: '3格＋4格',   lektion: 3, bsp: 'Sie schreibt der Tante einen Brief.' },
  { de: 'kennen',   ja: '知っている',           kasus: '4格',        lektion: 3, bsp: 'Ich kenne den Mann sehr gut.' },
  { de: 'fragen',   ja: '質問する',             kasus: '4格',        lektion: 3, bsp: 'Der Lehrer fragt einen Schüler.' },
  { de: 'antworten',ja: '答える',               kasus: '3格',        lektion: 3, bsp: 'Der Schüler antwortet dem Lehrer.' },
  { de: 'erzählen', ja: '語る',                 kasus: '3格＋4格',   lektion: 3, bsp: 'Der Vater erzählt den Kindern ein Märchen.' },
  { de: 'besuchen', ja: '訪問する',             kasus: '4格',        lektion: 3, bsp: 'Ich besuche eine Freundin.' },
  { de: 'gehören',  ja: '（〜の）ものである',   kasus: '3格',        lektion: 3, bsp: 'Die Handtasche gehört der Frau.' },
  { de: 'zeigen',   ja: '見せる',               kasus: '3格＋4格',   lektion: 3, bsp: 'Das Mädchen zeigt einer Freundin ein Foto.' },
  { de: 'schenken', ja: '贈る',                 kasus: '3格＋4格',   lektion: 3, bsp: 'Ich schenke dem Kind das Buch.' },
  { de: 'danken',   ja: '感謝する',             kasus: '3格',        lektion: 3, bsp: 'Sie dankt den Kindern.' },
  { de: 'loben',    ja: '褒める',               kasus: '4格',        lektion: 3, bsp: 'Ich lobe den Mann.' },
  { de: 'lieben',   ja: '愛する',               kasus: '4格',        lektion: 3, bsp: 'Er liebt die Tochter eines Arztes.' },
  { de: 'tragen',   ja: '運ぶ・着る',           kasus: '4格',        lektion: 4, bsp: 'Otto trägt einen Bart.' },
  { de: 'sprechen', ja: '話す',                 kasus: '4格',        lektion: 4, bsp: 'Sie spricht gut Deutsch.' },
  { de: 'essen',    ja: '食べる',               kasus: '4格',        lektion: 4, bsp: 'Anna isst gern Fisch.' },
  { de: 'helfen',   ja: '手伝う',               kasus: '3格',        lektion: 4, bsp: 'Ich helfe meiner Schwester.' },
  { de: 'treffen',  ja: '会う',                 kasus: '4格',        lektion: 4, bsp: 'Maria trifft den Freund.' },
  { de: 'sehen',    ja: '見る',                 kasus: '4格',        lektion: 4, bsp: 'Siehst du die Kirche dort?' },
  { de: 'lesen',    ja: '読む',                 kasus: '4格',        lektion: 4, bsp: 'Ich lese einen Krimi.' },
  { de: 'nehmen',   ja: '取る・（乗り物に）乗る', kasus: '4格',      lektion: 4, bsp: 'Du nimmst den Bus.' },
  { de: 'wissen',   ja: '（知識として）知っている', kasus: '4格',    lektion: 4, bsp: 'Ich weiß die Adresse nicht.' },
  { de: 'werden',   ja: '〜になる',             kasus: '1格（補語）', lektion: 4, bsp: 'Franz wird später Lehrer.' },
  { de: 'gefallen', ja: '気に入る',             kasus: '3格',        lektion: 5, bsp: 'Die Handtasche gefällt meiner Mutter.' },
  { de: 'legen',    ja: '置く・横にする（他動詞）', kasus: '4格',    lektion: 6, bsp: 'Otto legt seine Tasche auf den Stuhl.' },
];

// 移動・自動詞など（意味ドリル用に含めるが格支配ドリルからは除外）
const VERBS_VOCAB_EXTRA = [
  { de: 'kommen',   ja: '来る',          lektion: 1 },
  { de: 'gehen',    ja: '行く',          lektion: 1 },
  { de: 'fahren',   ja: '（乗り物で）行く', lektion: 4 },
  { de: 'fliegen',  ja: '飛ぶ・飛行機で行く', lektion: 1 },
  { de: 'schwimmen',ja: '泳ぐ',          lektion: 1 },
  { de: 'arbeiten', ja: '働く',          lektion: 1 },
  { de: 'reisen',   ja: '旅行する',      lektion: 1 },
  { de: 'liegen',   ja: '置いてある・横になっている（自動詞）', lektion: 6 },
];

// 助動詞（意味ドリル用）
const MODALS = [
  { de: 'dürfen',  ja: '〜してもよい（許可）' },
  { de: 'können',  ja: '〜できる（能力・可能）' },
  { de: 'mögen',   ja: '〜を好む' },
  { de: 'müssen',  ja: '〜しなければならない' },
  { de: 'sollen',  ja: '〜すべきだ' },
  { de: 'wollen',  ja: '〜するつもりだ（意志）' },
  { de: 'möchte',  ja: '〜したい（願望）' },
];

// 名詞: { de(冠詞なし), art(der/die/das), ja, lektion }
const NOUNS = [
  { de: 'Roman',        art: 'der', ja: '小説',           lektion: 1 },
  { de: 'Student',      art: 'der', ja: '大学生',         lektion: 2 },
  { de: 'Lehrer',       art: 'der', ja: '教師',           lektion: 2 },
  { de: 'Arzt',         art: 'der', ja: '医者',           lektion: 2 },
  { de: 'Bier',         art: 'das', ja: 'ビール',         lektion: 2 },
  { de: 'Wein',         art: 'der', ja: 'ワイン',         lektion: 2 },
  { de: 'Winzer',       art: 'der', ja: 'ワイン醸造家',   lektion: 2 },
  { de: 'Hund',         art: 'der', ja: '犬',             lektion: 2 },
  { de: 'Katze',        art: 'die', ja: '猫',             lektion: 2 },
  { de: 'Mädchen',      art: 'das', ja: '少女',           lektion: 2 },
  { de: 'Pferd',        art: 'das', ja: '馬',             lektion: 2 },
  { de: 'Vater',        art: 'der', ja: '父',             lektion: 2 },
  { de: 'Mutter',       art: 'die', ja: '母',             lektion: 2 },
  { de: 'Kind',         art: 'das', ja: '子供',           lektion: 2 },
  { de: 'Tasche',       art: 'die', ja: 'バッグ',         lektion: 4 },
  { de: 'Schüler',      art: 'der', ja: '生徒',           lektion: 4 },
  { de: 'Krimi',        art: 'der', ja: '推理小説',       lektion: 4 },
  { de: 'Tablette',     art: 'die', ja: '錠剤',           lektion: 4 },
  { de: 'Regenschirm',  art: 'der', ja: '傘',             lektion: 5 },
  { de: 'Ring',         art: 'der', ja: '指輪',           lektion: 5 },
  { de: 'Pullover',     art: 'der', ja: 'セーター',       lektion: 5 },
  { de: 'Kusine',       art: 'die', ja: 'いとこ（女性）', lektion: 5 },
  { de: 'Zahnarzt',     art: 'der', ja: '歯科医',         lektion: 5 },
  { de: 'Kartenspiel',  art: 'das', ja: 'カードゲーム',   lektion: 5 },
  { de: 'Professor',    art: 'der', ja: '教授',           lektion: 5 },
  { de: 'Praktikum',    art: 'das', ja: 'インターンシップ', lektion: 5 },
  { de: 'Bäckerei',     art: 'die', ja: 'パン屋',         lektion: 6 },
  { de: 'Brot',         art: 'das', ja: 'パン',           lektion: 6 },
  { de: 'Brötchen',     art: 'das', ja: '小型パン',       lektion: 6 },
  { de: 'Ofen',         art: 'der', ja: 'オーブン',       lektion: 6 },
  { de: 'Frühstück',    art: 'das', ja: '朝食',           lektion: 6 },
  { de: 'Wurst',        art: 'die', ja: 'ソーセージ',     lektion: 6 },
  { de: 'Schinken',     art: 'der', ja: 'ハム',           lektion: 6 },
  { de: 'Käse',         art: 'der', ja: 'チーズ',         lektion: 6 },
  { de: 'Salat',        art: 'der', ja: 'サラダ',         lektion: 6 },
  { de: 'Stuhl',        art: 'der', ja: '椅子',           lektion: 6 },
  { de: 'Wand',         art: 'die', ja: '壁',             lektion: 6 },
  { de: 'Meer',         art: 'das', ja: '海',             lektion: 6 },
  { de: 'Theater',      art: 'das', ja: '劇場',           lektion: 6 },
  { de: 'Hauptbahnhof', art: 'der', ja: '中央駅',         lektion: 6 },
  { de: 'Urlaub',       art: 'der', ja: '休暇',           lektion: 7 },
  { de: 'Reise',        art: 'die', ja: '旅行',           lektion: 7 },
  { de: 'Strand',       art: 'der', ja: '海岸',           lektion: 7 },
  { de: 'Ausflug',      art: 'der', ja: '遠足',           lektion: 7 },
  { de: 'Rathaus',      art: 'das', ja: '市役所',         lektion: 7 },
  { de: 'Bericht',      art: 'der', ja: '報告書',         lektion: 7 },
];

// 前置詞: { de, ja, gov: '3格' | '4格' | '3・4格' }
const PREPS = [
  { de: 'aus',  ja: '〜の中から、〜出身の', gov: '3格' },
  { de: 'bei',  ja: '〜のもとで、〜の際に', gov: '3格' },
  { de: 'mit',  ja: '〜と一緒に、〜を使って', gov: '3格' },
  { de: 'nach', ja: '〜の後で、〜へ（地名）', gov: '3格' },
  { de: 'seit', ja: '〜以来',               gov: '3格' },
  { de: 'von',  ja: '〜から、〜の',         gov: '3格' },
  { de: 'zu',   ja: '〜へ、〜のために',     gov: '3格' },
  { de: 'bis',  ja: '〜まで',               gov: '4格' },
  { de: 'für',  ja: '〜のために',           gov: '4格' },
  { de: 'gegen',ja: '〜に対して、〜頃',     gov: '4格' },
  { de: 'ohne', ja: '〜なしに',             gov: '4格' },
  { de: 'um',   ja: '〜の周りに、〜時に',   gov: '4格' },
  { de: 'an',   ja: '〜のきわに',           gov: '3・4格' },
  { de: 'auf',  ja: '〜の上に',             gov: '3・4格' },
  { de: 'hinter',ja: '〜の後ろに',          gov: '3・4格' },
  { de: 'in',   ja: '〜の中に',             gov: '3・4格' },
  { de: 'neben',ja: '〜の横に',             gov: '3・4格' },
  { de: 'über', ja: '〜の上方に',           gov: '3・4格' },
  { de: 'unter',ja: '〜の下に',             gov: '3・4格' },
  { de: 'vor',  ja: '〜の前に',             gov: '3・4格' },
  { de: 'zwischen', ja: '〜の間に',         gov: '3・4格' },
];

// 融合形: { form, exp(元の形), lektion }
const FUSIONS = [
  { form: 'am',  von: 'an + dem', bsp: 'Erika bleibt am Meer.' },
  { form: 'im',  von: 'in + dem', bsp: 'Sie bleibt im Bett.' },
  { form: 'zum', von: 'zu + dem', bsp: 'Er geht zum Bahnhof.' },
  { form: 'zur', von: 'zu + der', bsp: 'Wir gehen zur Bäckerei.' },
  { form: 'ans', von: 'an + das', bsp: 'Anna fährt ans Meer.' },
  { form: 'ins', von: 'in + das', bsp: 'Er geht ins Theater.' },
];

/* ===== テキストの練習問題（Übung）から：冠詞・格を選ぶ ===== */
// 格支配（動詞）の Übung 文
const UEBUNG_VERB = [
  { satz: 'Der Sohn bringt ___ Mutter eine Zeitschrift.', ja: '息子は母親に雑誌を持ってくる。',
    answer: 'der', opts: ['der', 'die', 'dem', 'den'], exp: 'bringen は〈3格＋4格〉。Mutter は女性名詞、ここは3格（〜に）→ der Mutter。' },
  { satz: 'Sie schreibt ___ Tante einen Brief.', ja: '彼女は叔母に手紙を書く。',
    answer: 'der', opts: ['der', 'die', 'dem', 'den'], exp: 'schreiben は〈3格＋4格〉。Tante は女性名詞の3格 → der Tante。' },
  { satz: 'Ich kenne ___ Mann sehr gut.', ja: '私はその男性をよく知っている。',
    answer: 'den', opts: ['der', 'die', 'dem', 'den'], exp: 'kennen は4格をとる。Mann は男性名詞の4格 → den Mann。' },
  { satz: 'Der Lehrer fragt ___ Schüler.', ja: '先生は生徒に質問する。',
    answer: 'den', opts: ['der', 'die', 'dem', 'den'], exp: 'fragen は4格をとる。Schüler は男性名詞の4格 → den Schüler。' },
  { satz: 'Der Schüler antwortet ___ Lehrer.', ja: 'その生徒は先生に答える。',
    answer: 'dem', opts: ['der', 'die', 'dem', 'den'], exp: 'antworten は3格をとる。Lehrer は男性名詞の3格 → dem Lehrer。' },
  { satz: 'Der Vater erzählt ___ Kindern ein Märchen.', ja: '父親は子供たちに童話を語る。',
    answer: 'den', opts: ['der', 'die', 'dem', 'den'], exp: 'erzählen は〈3格＋4格〉。複数の3格は den ＋ 名詞に -n → den Kindern。' },
  { satz: 'Die Handtasche gehört ___ Frau.', ja: 'ハンドバッグはその女性のものだ。',
    answer: 'der', opts: ['der', 'die', 'dem', 'den'], exp: 'gehören は3格をとる。Frau は女性名詞の3格 → der Frau。' },
  { satz: 'Das Motorrad gehört ___ Mann.', ja: 'オートバイはその男性のものだ。',
    answer: 'dem', opts: ['der', 'die', 'dem', 'den'], exp: 'gehören は3格をとる。Mann は男性名詞の3格 → dem Mann。' },
  { satz: 'Der Lehrer lobt ___ Kinder.', ja: '先生は子供たちを褒める。',
    answer: 'die', opts: ['der', 'die', 'dem', 'den'], exp: 'loben は4格をとる。複数の4格は die → die Kinder。' },
  { satz: 'Ich helfe ___ Lehrerin.', ja: '私はその女性教師を手伝う。',
    answer: 'der', opts: ['der', 'die', 'dem', 'den'], exp: 'helfen は3格をとる。Lehrerin は女性名詞の3格 → der Lehrerin。' },
];

// 3・4格（場所＝3格／方向＝4格）の Übung 文
const UEBUNG_PREP = [
  { satz: 'Ich hänge das Bild an ___ Wand.', ja: '私はその絵を壁に掛ける。（移動）',
    answer: 'die', opts: ['die', 'der', 'das', 'dem'], exp: '「掛ける（移動）」は方向 → 4格。Wand は女性名詞の4格 → die Wand。' },
  { satz: 'Jetzt hängt das Bild an ___ Wand.', ja: '今その絵は壁に掛かっている。（位置）',
    answer: 'der', opts: ['die', 'der', 'das', 'dem'], exp: '「掛かっている（位置）」は場所 → 3格。Wand は女性名詞の3格 → der Wand。' },
  { satz: 'Mein Onkel wohnt in ___ Stadt.', ja: '私の叔父は街に住んでいる。（位置）',
    answer: 'der', opts: ['die', 'der', 'das', 'dem'], exp: 'wohnen は位置 → 3格。Stadt は女性名詞の3格 → der Stadt。' },
  { satz: 'Ich gehe morgen in ___ Stadt.', ja: '私は明日街へ行く。（移動）',
    answer: 'die', opts: ['die', 'der', 'das', 'dem'], exp: '「行く（移動）」は方向 → 4格。Stadt は女性名詞の4格 → die Stadt。' },
  { satz: 'Otto legt seine Tasche auf ___ Stuhl.', ja: 'オットーはバッグを椅子の上に置く。（移動）',
    answer: 'den', opts: ['den', 'dem', 'der', 'das'], exp: 'legen（置く＝移動）は方向 → 4格。Stuhl は男性名詞の4格 → den Stuhl。' },
  { satz: 'Meine Tasche liegt auf ___ Stuhl.', ja: '私のバッグは椅子の上に置いてある。（位置）',
    answer: 'dem', opts: ['den', 'dem', 'der', 'das'], exp: 'liegen（置いてある＝位置）は場所 → 3格。Stuhl は男性名詞の3格 → dem Stuhl。' },
];

/* ===== 生成ロジック ===== */
const out = [];
let nseq = 0;
function pushQ(theme, lektion, category, q) {
  nseq += 1;
  out.push({
    id: `d-${theme}-${String(nseq).padStart(3, '0')}`,
    theme, lektion, category,
    ...q,
  });
}

/** answer(正解文字列)を含む4択を作り、{choices, answer(index)} を返す（順序はソース順、エンジン側で再シャッフルされる）。 */
function fixedChoices(opts, correct) {
  const choices = opts.slice();
  const answer = choices.indexOf(correct);
  if (answer < 0) throw new Error(`correct "${correct}" not in opts ${JSON.stringify(opts)}`);
  return { choices, answer };
}

/** プールから correct を除いた他要素を n 個、決定的に選ぶ。 */
function distractors(pool, correctKey, keyFn, n) {
  const others = pool.filter((x) => keyFn(x) !== correctKey);
  const picked = [];
  // correctKey の文字列ハッシュで開始位置を散らし、毎回同じだが偏らないように選ぶ
  let h = 0;
  for (const ch of String(correctKey)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  for (let i = 0; i < n && i < others.length; i++) {
    picked.push(others[(h + i * 7) % others.length]);
  }
  return picked;
}

/* --- ① 動詞の格支配 --- */
const KASUS_OPTS = ['3格', '4格', '3格＋4格', '1格（補語）'];
VERBS.forEach((v) => {
  const { choices, answer } = fixedChoices(KASUS_OPTS, v.kasus);
  pushQ('verb-case', v.lektion, '動詞の格支配', {
    prompt: `動詞 „${v.de}“ は何格をとる？`,
    translation: `${v.de} ＝ ${v.ja}`,
    choices, answer,
    hint: '3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。',
    explanation: `${v.de}（${v.ja}）は ${v.kasus} をとる。例: ${v.bsp}`,
    tip: v.kasus === '3格＋4格'
      ? '「（人）に（物）を」型の動詞は 3格＋4格（bringen, schenken, zeigen, erzählen, schreiben）。'
      : v.kasus === '3格'
        ? '3格をとる動詞は helfen / danken / antworten / gehören / gefallen をセットで暗記。'
        : v.kasus === '1格（補語）'
          ? 'sein・werden は「〜である／〜になる」で主語と同じ1格の補語をとる。'
          : '多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。',
  });
});
// テキスト練習問題（格支配・冠詞選択）
UEBUNG_VERB.forEach((u) => {
  const { choices, answer } = fixedChoices(u.opts, u.answer);
  pushQ('verb-case', 3, 'テキスト練習問題：格支配', {
    prompt: u.satz,
    translation: u.ja,
    choices, answer,
    hint: '動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。',
    explanation: u.exp,
    tip: '動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。',
  });
});

/* --- ② 前置詞の格支配 --- */
const GOV_OPTS = ['3格支配', '4格支配', '3・4格支配', '2格支配'];
PREPS.forEach((p) => {
  const { choices, answer } = fixedChoices(GOV_OPTS, `${p.gov}支配`);
  pushQ('prep-case', 6, '前置詞の格支配', {
    prompt: `前置詞 „${p.de}“ は何格を支配する？`,
    translation: `${p.de} ＝ ${p.ja}`,
    choices, answer,
    hint: '3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。',
    explanation: `${p.de}（${p.ja}）は ${p.gov}支配。` + (p.gov === '3・4格'
      ? '場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。'
      : ''),
    tip: p.gov === '3格'
      ? '3格支配は語呂「aus・bei・mit・nach・seit・von・zu」で7つまとめて覚える。'
      : p.gov === '4格'
        ? '4格支配は「bis・für・gegen・ohne・um」の5つ。'
        : '3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。',
  });
});
// 3・4格の場所/方向ルール（テキスト練習問題）
UEBUNG_PREP.forEach((u) => {
  const { choices, answer } = fixedChoices(u.opts, u.answer);
  pushQ('prep-case', 6, 'テキスト練習問題：3・4格', {
    prompt: u.satz,
    translation: u.ja,
    choices, answer,
    hint: '3・4格支配の前置詞は、位置（どこに）＝3格、方向（どこへ）＝4格。',
    explanation: u.exp,
    tip: '動詞が「移動」か「静止」かを見抜くのがカギ。gehen/legen/hängen(他)=方向→4格、wohnen/liegen/hängen(自)=位置→3格。',
  });
});
// 融合形
FUSIONS.forEach((f) => {
  const opts = ['an + dem', 'in + dem', 'zu + dem', 'zu + der', 'an + das', 'in + das'];
  const { choices, answer } = fixedChoices(opts, f.von);
  pushQ('prep-case', 6, '前置詞と定冠詞の融合形', {
    prompt: `融合形 „${f.form}“ は何の短縮？`,
    choices, answer,
    hint: 'am=an+dem, im=in+dem, zum=zu+dem, zur=zu+der, ans=an+das, ins=in+das。',
    explanation: `${f.form} = ${f.von}。例: ${f.bsp}`,
    tip: '-m で終わる融合形（am/im/zum）は3格、-s で終わる融合形（ans/ins）は4格の合図。',
  });
});

/* --- ③ 単語の意味 --- */
// 動詞 独→日
const ALL_VERBS = VERBS.concat(VERBS_VOCAB_EXTRA);
ALL_VERBS.forEach((v) => {
  const ds = distractors(ALL_VERBS, v.de, (x) => x.de, 3).map((x) => x.ja);
  const { choices, answer } = fixedChoices([v.ja, ...ds], v.ja);
  pushQ('vocab', v.lektion, '単語の意味（動詞 独→日）', {
    prompt: `動詞 „${v.de}“ の意味は？`,
    choices, answer,
    hint: '動詞の基本義を思い出す。',
    explanation: `${v.de} =「${v.ja}」。`,
    tip: '動詞は「意味＋格支配」をセットで覚えると作文で迷わない。',
  });
});
// 動詞 日→独（主要15語）
const VERB_J2G = VERBS.slice(0, 15);
VERB_J2G.forEach((v) => {
  const ds = distractors(ALL_VERBS, v.de, (x) => x.de, 3).map((x) => x.de);
  const { choices, answer } = fixedChoices([v.de, ...ds], v.de);
  pushQ('vocab', v.lektion, '単語の意味（動詞 日→独）', {
    prompt: `「${v.ja}」にあたるドイツ語の動詞は？`,
    choices, answer,
    hint: '原形（不定詞）で選ぶ。',
    explanation: `「${v.ja}」= ${v.de}。例: ${v.bsp}`,
    tip: '和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。',
  });
});
// 助動詞 独→日
MODALS.forEach((m) => {
  const ds = distractors(MODALS, m.de, (x) => x.de, 3).map((x) => x.ja);
  const { choices, answer } = fixedChoices([m.ja, ...ds], m.ja);
  pushQ('vocab', 7, '単語の意味（話法の助動詞）', {
    prompt: `話法の助動詞 „${m.de}“ の意味は？`,
    choices, answer,
    hint: 'können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。',
    explanation: `${m.de} =「${m.ja}」。助動詞構文では本動詞は不定詞で文末。`,
    tip: 'wollen（自分の意志）と sollen（他者の意志）、müssen（必要）と dürfen（許可）の対比で覚える。',
  });
});
// 名詞 独→日（全46語、定冠詞付きで出題）
const NOUN_VOCAB = NOUNS;
NOUN_VOCAB.forEach((n) => {
  const ds = distractors(NOUNS, n.de, (x) => x.de, 3).map((x) => x.ja);
  const { choices, answer } = fixedChoices([n.ja, ...ds], n.ja);
  pushQ('vocab', n.lektion, '単語の意味（名詞 独→日）', {
    prompt: `名詞 „${n.art} ${n.de}“ の意味は？`,
    choices, answer,
    hint: '名詞は冠詞（性）とセットで思い出す。',
    explanation: `${n.art} ${n.de} =「${n.ja}」（${n.art === 'der' ? '男性' : n.art === 'die' ? '女性' : '中性'}名詞）。`,
    tip: '名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。',
  });
});

/* --- ④ 名詞の性 --- */
const ART_OPTS = ['der', 'die', 'das'];
NOUNS.forEach((n) => {
  const { choices, answer } = fixedChoices(ART_OPTS, n.art);
  pushQ('gender', n.lektion, '名詞の性', {
    prompt: `名詞 „${n.de}“ に付く定冠詞（1格）は？`,
    translation: `${n.de} ＝ ${n.ja}`,
    choices, answer,
    hint: '-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。',
    explanation: `${n.de}（${n.ja}）は${n.art === 'der' ? '男性' : n.art === 'die' ? '女性' : '中性'}名詞 → ${n.art} ${n.de}。`,
    tip: n.de.endsWith('chen')
      ? '-chen で終わる名詞は必ず中性（das Mädchen, das Brötchen）。'
      : '性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。',
  });
});

/* ===== 出力 ===== */
const header = `/**
 * 特訓ドリル用の択一問題データ（自動生成: ドイツ語初級/js/gen_drills.js）。
 * 出典: ドイツ語テキスト_Lektion1-7_学習資料.md「総合語彙リスト」「各Lektionの練習問題(Übung)」。
 * テーマ別の集中ドリル。形式は QUESTIONS と同じ（id/category/prompt/choices/answer/...）。
 *   theme: 'verb-case'（動詞の格支配）| 'prep-case'（前置詞の格支配）| 'vocab'（単語の意味）| 'gender'（名詞の性）
 *   lektion: 関連Lektion（色・解説オーバーレイに使用。出題プールには影響しない）
 * 手で編集せず、元データを直して gen_drills.js を再実行すること。
 */
const DRILL_THEMES = [
  { id: 'verb-case', icon: '🧩', title: '動詞の格支配', sub: 'helfen=3格 / besuchen=4格 / bringen=3格＋4格', accent: '#10b981' },
  { id: 'prep-case', icon: '🧭', title: '前置詞の格支配', sub: 'mit=3格 / für=4格 / in=3・4格', accent: '#0ea5e9' },
  { id: 'vocab',     icon: '📖', title: '単語の意味', sub: '独⇄日の意味あて（動詞・名詞・助動詞）', accent: '#f59e0b' },
  { id: 'gender',    icon: '🔤', title: '名詞の性', sub: 'der / die / das の判別', accent: '#ec4899' },
];

const DRILLS = `;

const body = JSON.stringify(out, null, 2);
const file = header + body + ';\n';
const dest = path.resolve(__dirname, '../../js/data/drills.js');
fs.writeFileSync(dest, file, 'utf8');

// サマリ
const byTheme = {};
out.forEach((q) => { byTheme[q.theme] = (byTheme[q.theme] || 0) + 1; });
console.log('total:', out.length, byTheme);
console.log('wrote:', dest);
