/**
 * 特訓ドリル（drills.js）生成スクリプト。
 * 出典: ドイツ語テキスト_Lektion1-7_学習資料.md の総合語彙リスト・各Lektionの練習問題(Übung)。
 * テーマ別の択一ドリル。ユーザー要望の中心テーマ＝動詞の格支配 / 前置詞の格支配 / 前置詞の意味 / 助動詞の意味・変化。
 *   補助テーマ＝名詞の性 / 単語の意味。
 * 形式は択一（ja=問題文 / choices / answer / hint / exp / tip）。app.js の renderChoiceQuestion で表示される。
 * 実行: node gen_drills.js → ../../js/data/drills.js を出力。手で編集しない。
 */
'use strict';
const fs = require('fs');
const path = require('path');

const VERBS = [
  { de: 'lernen', ja: '学ぶ', kasus: '4格', lektion: 1, bsp: 'Ich lerne Deutsch.' },
  { de: 'trinken', ja: '飲む', kasus: '4格', lektion: 1, bsp: 'Ich trinke Kaffee.' },
  { de: 'haben', ja: '持つ', kasus: '4格', lektion: 2, bsp: 'Ich habe Hunger.' },
  { de: 'bringen', ja: '持ってくる', kasus: '3格＋4格', lektion: 3, bsp: 'Der Sohn bringt der Mutter eine Zeitschrift.' },
  { de: 'schreiben', ja: '書く', kasus: '3格＋4格', lektion: 3, bsp: 'Sie schreibt der Tante einen Brief.' },
  { de: 'kennen', ja: '知っている', kasus: '4格', lektion: 3, bsp: 'Ich kenne den Mann sehr gut.' },
  { de: 'fragen', ja: '質問する', kasus: '4格', lektion: 3, bsp: 'Der Lehrer fragt einen Schüler.' },
  { de: 'antworten', ja: '答える', kasus: '3格', lektion: 3, bsp: 'Der Schüler antwortet dem Lehrer.' },
  { de: 'erzählen', ja: '語る', kasus: '3格＋4格', lektion: 3, bsp: 'Der Vater erzählt den Kindern ein Märchen.' },
  { de: 'besuchen', ja: '訪問する', kasus: '4格', lektion: 3, bsp: 'Ich besuche eine Freundin.' },
  { de: 'gehören', ja: '（〜の）ものである', kasus: '3格', lektion: 3, bsp: 'Die Handtasche gehört der Frau.' },
  { de: 'zeigen', ja: '見せる', kasus: '3格＋4格', lektion: 3, bsp: 'Das Mädchen zeigt einer Freundin ein Foto.' },
  { de: 'schenken', ja: '贈る', kasus: '3格＋4格', lektion: 3, bsp: 'Ich schenke dem Kind das Buch.' },
  { de: 'danken', ja: '感謝する', kasus: '3格', lektion: 3, bsp: 'Sie dankt den Kindern.' },
  { de: 'loben', ja: '褒める', kasus: '4格', lektion: 3, bsp: 'Ich lobe den Mann.' },
  { de: 'lieben', ja: '愛する', kasus: '4格', lektion: 3, bsp: 'Er liebt die Tochter eines Arztes.' },
  { de: 'tragen', ja: '運ぶ・着る', kasus: '4格', lektion: 4, bsp: 'Otto trägt einen Bart.' },
  { de: 'sprechen', ja: '話す', kasus: '4格', lektion: 4, bsp: 'Sie spricht gut Deutsch.' },
  { de: 'essen', ja: '食べる', kasus: '4格', lektion: 4, bsp: 'Anna isst gern Fisch.' },
  { de: 'helfen', ja: '手伝う', kasus: '3格', lektion: 4, bsp: 'Ich helfe meiner Schwester.' },
  { de: 'treffen', ja: '会う', kasus: '4格', lektion: 4, bsp: 'Maria trifft den Freund.' },
  { de: 'sehen', ja: '見る', kasus: '4格', lektion: 4, bsp: 'Siehst du die Kirche dort?' },
  { de: 'lesen', ja: '読む', kasus: '4格', lektion: 4, bsp: 'Ich lese einen Krimi.' },
  { de: 'nehmen', ja: '取る・（乗り物に）乗る', kasus: '4格', lektion: 4, bsp: 'Du nimmst den Bus.' },
  { de: 'wissen', ja: '（知識として）知っている', kasus: '4格', lektion: 4, bsp: 'Ich weiß die Adresse nicht.' },
  { de: 'werden', ja: '〜になる', kasus: '1格（補語）', lektion: 4, bsp: 'Franz wird später Lehrer.' },
  { de: 'gefallen', ja: '気に入る', kasus: '3格', lektion: 5, bsp: 'Die Handtasche gefällt meiner Mutter.' },
  { de: 'legen', ja: '置く・横にする（他動詞）', kasus: '4格', lektion: 6, bsp: 'Otto legt seine Tasche auf den Stuhl.' },
];
const VERBS_VOCAB_EXTRA = [
  { de: 'kommen', ja: '来る', lektion: 1 },
  { de: 'gehen', ja: '行く', lektion: 1 },
  { de: 'fahren', ja: '（乗り物で）行く', lektion: 4 },
  { de: 'fliegen', ja: '飛ぶ・飛行機で行く', lektion: 1 },
  { de: 'schwimmen', ja: '泳ぐ', lektion: 1 },
  { de: 'arbeiten', ja: '働く', lektion: 1 },
  { de: 'reisen', ja: '旅行する', lektion: 1 },
  { de: 'liegen', ja: '置いてある・横になっている（自動詞）', lektion: 6 },
];
// 助動詞: meaning と er/sie/es の現在形（単数で母音が変わる）
const MODALS = [
  { de: 'dürfen', ja: '〜してもよい（許可）', er: 'darf' },
  { de: 'können', ja: '〜できる（能力・可能）', er: 'kann' },
  { de: 'mögen', ja: '〜を好む', er: 'mag' },
  { de: 'müssen', ja: '〜しなければならない', er: 'muss' },
  { de: 'sollen', ja: '〜すべきだ', er: 'soll' },
  { de: 'wollen', ja: '〜するつもりだ（意志）', er: 'will' },
  { de: 'möchte', ja: '〜したい（願望）', er: 'möchte' },
];
const NOUNS = [
  { de: 'Roman', art: 'der', ja: '小説', lektion: 1 }, { de: 'Student', art: 'der', ja: '大学生', lektion: 2 },
  { de: 'Lehrer', art: 'der', ja: '教師', lektion: 2 }, { de: 'Arzt', art: 'der', ja: '医者', lektion: 2 },
  { de: 'Bier', art: 'das', ja: 'ビール', lektion: 2 }, { de: 'Wein', art: 'der', ja: 'ワイン', lektion: 2 },
  { de: 'Hund', art: 'der', ja: '犬', lektion: 2 }, { de: 'Katze', art: 'die', ja: '猫', lektion: 2 },
  { de: 'Mädchen', art: 'das', ja: '少女', lektion: 2 }, { de: 'Pferd', art: 'das', ja: '馬', lektion: 2 },
  { de: 'Vater', art: 'der', ja: '父', lektion: 2 }, { de: 'Mutter', art: 'die', ja: '母', lektion: 2 },
  { de: 'Kind', art: 'das', ja: '子供', lektion: 2 }, { de: 'Tasche', art: 'die', ja: 'バッグ', lektion: 4 },
  { de: 'Schüler', art: 'der', ja: '生徒', lektion: 4 }, { de: 'Krimi', art: 'der', ja: '推理小説', lektion: 4 },
  { de: 'Tablette', art: 'die', ja: '錠剤', lektion: 4 }, { de: 'Regenschirm', art: 'der', ja: '傘', lektion: 5 },
  { de: 'Ring', art: 'der', ja: '指輪', lektion: 5 }, { de: 'Pullover', art: 'der', ja: 'セーター', lektion: 5 },
  { de: 'Zahnarzt', art: 'der', ja: '歯科医', lektion: 5 }, { de: 'Kartenspiel', art: 'das', ja: 'カードゲーム', lektion: 5 },
  { de: 'Professor', art: 'der', ja: '教授', lektion: 5 }, { de: 'Bäckerei', art: 'die', ja: 'パン屋', lektion: 6 },
  { de: 'Brot', art: 'das', ja: 'パン', lektion: 6 }, { de: 'Brötchen', art: 'das', ja: '小型パン', lektion: 6 },
  { de: 'Ofen', art: 'der', ja: 'オーブン', lektion: 6 }, { de: 'Frühstück', art: 'das', ja: '朝食', lektion: 6 },
  { de: 'Wurst', art: 'die', ja: 'ソーセージ', lektion: 6 }, { de: 'Käse', art: 'der', ja: 'チーズ', lektion: 6 },
  { de: 'Salat', art: 'der', ja: 'サラダ', lektion: 6 }, { de: 'Stuhl', art: 'der', ja: '椅子', lektion: 6 },
  { de: 'Wand', art: 'die', ja: '壁', lektion: 6 }, { de: 'Meer', art: 'das', ja: '海', lektion: 6 },
  { de: 'Theater', art: 'das', ja: '劇場', lektion: 6 }, { de: 'Hauptbahnhof', art: 'der', ja: '中央駅', lektion: 6 },
  { de: 'Urlaub', art: 'der', ja: '休暇', lektion: 7 }, { de: 'Reise', art: 'die', ja: '旅行', lektion: 7 },
  { de: 'Strand', art: 'der', ja: '海岸', lektion: 7 }, { de: 'Ausflug', art: 'der', ja: '遠足', lektion: 7 },
  { de: 'Rathaus', art: 'das', ja: '市役所', lektion: 7 }, { de: 'Bericht', art: 'der', ja: '報告書', lektion: 7 },
];
const PREPS = [
  { de: 'aus', ja: '〜の中から、〜出身の', gov: '3格' }, { de: 'bei', ja: '〜のもとで、〜の際に', gov: '3格' },
  { de: 'mit', ja: '〜と一緒に、〜を使って', gov: '3格' }, { de: 'nach', ja: '〜の後で、〜へ（地名）', gov: '3格' },
  { de: 'seit', ja: '〜以来', gov: '3格' }, { de: 'von', ja: '〜から、〜の', gov: '3格' },
  { de: 'zu', ja: '〜へ、〜のために', gov: '3格' }, { de: 'bis', ja: '〜まで', gov: '4格' },
  { de: 'für', ja: '〜のために', gov: '4格' }, { de: 'gegen', ja: '〜に対して、〜頃', gov: '4格' },
  { de: 'ohne', ja: '〜なしに', gov: '4格' }, { de: 'um', ja: '〜の周りに、〜時に', gov: '4格' },
  { de: 'an', ja: '〜のきわに', gov: '3・4格' }, { de: 'auf', ja: '〜の上に', gov: '3・4格' },
  { de: 'hinter', ja: '〜の後ろに', gov: '3・4格' }, { de: 'in', ja: '〜の中に', gov: '3・4格' },
  { de: 'neben', ja: '〜の横に', gov: '3・4格' }, { de: 'über', ja: '〜の上方に', gov: '3・4格' },
  { de: 'unter', ja: '〜の下に', gov: '3・4格' }, { de: 'vor', ja: '〜の前に', gov: '3・4格' },
  { de: 'zwischen', ja: '〜の間に', gov: '3・4格' },
];
const FUSIONS = [
  { form: 'am', von: 'an + dem', bsp: 'Erika bleibt am Meer.' },
  { form: 'im', von: 'in + dem', bsp: 'Sie bleibt im Bett.' },
  { form: 'zum', von: 'zu + dem', bsp: 'Er geht zum Bahnhof.' },
  { form: 'zur', von: 'zu + der', bsp: 'Wir gehen zur Bäckerei.' },
  { form: 'ans', von: 'an + das', bsp: 'Anna fährt ans Meer.' },
  { form: 'ins', von: 'in + das', bsp: 'Er geht ins Theater.' },
];

/* ===== 生成 ===== */
const out = [];
let nseq = 0;
function pushQ(theme, lektion, category, q) {
  nseq += 1;
  out.push({ id: `d-${theme}-${String(nseq).padStart(3, '0')}`, theme, lektion, category, ...q });
}
function fixedChoices(opts, correct) {
  const choices = opts.slice();
  const answer = choices.indexOf(correct);
  if (answer < 0) throw new Error(`correct "${correct}" not in opts`);
  return { choices, answer };
}
function distractors(pool, correctKey, keyFn, n) {
  const others = pool.filter((x) => keyFn(x) !== correctKey);
  const picked = [];
  let h = 0;
  for (const ch of String(correctKey)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  for (let i = 0; i < n && i < others.length; i++) picked.push(others[(h + i * 7) % others.length]);
  return picked;
}

/* ① 動詞の格支配 */
const KASUS_OPTS = ['3格', '4格', '3格＋4格', '1格（補語）'];
VERBS.forEach((v) => {
  const { choices, answer } = fixedChoices(KASUS_OPTS, v.kasus);
  pushQ('verb-case', v.lektion, '動詞の格支配', {
    ja: `動詞 „${v.de}“（${v.ja}）が取る格は？`, choices, answer,
    hint: '3格＝「〜に」、4格＝「〜を」。', exp: `${v.de}（${v.ja}）は ${v.kasus}。例: ${v.bsp}`,
    tip: v.kasus === '3格＋4格' ? '「（人）に（物）を」型は 3格＋4格（bringen/schenken/zeigen/erzählen/schreiben）。'
      : v.kasus === '3格' ? '3格をとる動詞: helfen/danken/antworten/gehören/gefallen。'
        : v.kasus === '1格（補語）' ? 'sein・werden は主語と同じ1格の補語をとる。'
          : '多くの他動詞は4格。迷ったらまず4格を疑う。' });
});

/* ② 前置詞の格支配 */
const GOV_OPTS = ['3格支配', '4格支配', '3・4格支配', '2格支配'];
PREPS.forEach((p) => {
  const { choices, answer } = fixedChoices(GOV_OPTS, `${p.gov}支配`);
  pushQ('prep-case', 6, '前置詞の格支配', {
    ja: `前置詞 „${p.de}“（${p.ja}）が支配する格は？`, choices, answer,
    hint: '3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。', exp: `${p.de} は ${p.gov}支配。` + (p.gov === '3・4格' ? '場所（静止）なら3格、方向（移動）なら4格。' : ''),
    tip: p.gov === '3格' ? '3格支配は「aus・bei・mit・nach・seit・von・zu」の7つ。'
      : p.gov === '4格' ? '4格支配は「bis・für・gegen・ohne・um」の5つ。'
        : '3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。' });
});
FUSIONS.forEach((fu) => {
  const opts = ['an + dem', 'in + dem', 'zu + dem', 'zu + der', 'an + das', 'in + das'];
  const { choices, answer } = fixedChoices(opts, fu.von);
  pushQ('prep-case', 6, '前置詞と定冠詞の融合形', {
    ja: `融合形 „${fu.form}“ は何の短縮形？`, choices, answer,
    hint: 'am=an+dem, im=in+dem, zum=zu+dem, zur=zu+der, ans=an+das, ins=in+das。', exp: `${fu.form} = ${fu.von}。例: ${fu.bsp}`,
    tip: '-m で終わる融合形（am/im/zum）は3格、-s で終わる（ans/ins）は4格（方向）。' });
});

/* ③ 前置詞の意味 */
PREPS.forEach((p) => {
  const ds = distractors(PREPS, p.de, (x) => x.de, 3).map((x) => x.ja);
  const { choices, answer } = fixedChoices([p.ja, ...ds], p.ja);
  pushQ('prep-meaning', 6, '前置詞の意味', {
    ja: `前置詞 „${p.de}“ の意味は？`, choices, answer,
    hint: '前置詞は意味と格支配をセットで覚える。', exp: `${p.de} ＝「${p.ja}」（${p.gov}支配）。`,
    tip: 'mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。' });
});

/* ④ 助動詞（意味・変化） */
MODALS.forEach((m) => {
  const ds = distractors(MODALS, m.de, (x) => x.de, 3).map((x) => x.ja);
  const { choices, answer } = fixedChoices([m.ja, ...ds], m.ja);
  pushQ('modal', 7, '話法の助動詞（意味）', {
    ja: `話法の助動詞 „${m.de}“ の意味は？`, choices, answer,
    hint: 'können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。', exp: `${m.de} ＝「${m.ja}」。`,
    tip: 'wollen（自分の意志）↔sollen（他者の意志）、müssen（必要）↔dürfen（許可）。' });
});
MODALS.filter((m) => m.de !== 'möchte').forEach((m) => {
  const ds = distractors(MODALS.filter((x) => x.de !== 'möchte'), m.er, (x) => x.er, 3).map((x) => x.er);
  const { choices, answer } = fixedChoices([m.er, ...ds], m.er);
  pushQ('modal', 7, '話法の助動詞（変化）', {
    ja: `„${m.de}“ の er/sie/es の現在形は？`, choices, answer,
    hint: '話法の助動詞は ich と er/sie/es が同形で、単数は母音が変わるものが多い。', exp: `er ${m.er}（ich も同形）。`,
    tip: 'ich/er は語尾なし（muss, kann, will…）。複数は不定詞と同形。' });
});

/* ⑤ 名詞の性（補助） */
const ART_OPTS = ['der', 'die', 'das'];
NOUNS.forEach((n) => {
  const { choices, answer } = fixedChoices(ART_OPTS, n.art);
  pushQ('gender', n.lektion, '名詞の性', {
    ja: `„___ ${n.de}“（${n.ja}）に付く定冠詞（1格）は？`, choices, answer,
    hint: '-chen / -lein は中性（das）。-ei は女性（die）が多い。', exp: `${n.de}（${n.ja}）は ${n.art} ${n.de}。`,
    tip: n.de.endsWith('chen') ? '-chen で終わる名詞は必ず中性（das Mädchen, das Brötchen）。' : '名詞は「der/die/das ＋語」で音ごと覚えるのが近道。' });
});

/* ⑥ 単語の意味（補助・動詞） */
const ALL_VERBS = VERBS.concat(VERBS_VOCAB_EXTRA);
ALL_VERBS.forEach((v) => {
  const ds = distractors(ALL_VERBS, v.de, (x) => x.de, 3).map((x) => x.ja);
  const { choices, answer } = fixedChoices([v.ja, ...ds], v.ja);
  pushQ('vocab', v.lektion, '単語の意味（動詞）', {
    ja: `動詞 „${v.de}“ の意味は？`, choices, answer,
    hint: '動詞の基本義を思い出す。', exp: `${v.de} ＝「${v.ja}」。`,
    tip: '動詞は「意味＋格支配」をセットで覚えると作文で迷わない。' });
});

/* ===== 出力 ===== */
const header = `/**
 * 特訓ドリル用の択一問題データ（自動生成: ドイツ語初級/js/gen_drills.js）。
 * 出典: ドイツ語テキスト_Lektion1-7_学習資料.md。テーマ別の単問特訓（すべて択一）。
 *   theme: 'verb-case'動詞の格支配 / 'prep-case'前置詞の格支配 / 'prep-meaning'前置詞の意味 /
 *          'modal'助動詞(意味・変化) / 'gender'名詞の性 / 'vocab'単語の意味
 * 形式は QUESTIONS の択一と同じ（ja/choices/answer/hint/exp/tip）。
 * 手で編集せず、元データを直して gen_drills.js を再実行すること。
 */
const DRILL_THEMES = [
  { id: 'verb-case', icon: '🧩', title: '動詞の格支配', sub: 'helfen=3格 / besuchen=4格 / bringen=3格＋4格', accent: '#10b981' },
  { id: 'prep-case', icon: '🧭', title: '前置詞の格支配', sub: 'mit=3格 / für=4格 / in=3・4格・融合形', accent: '#0ea5e9' },
  { id: 'prep-meaning', icon: '🗺️', title: '前置詞の意味', sub: 'mit/für/ohne/bei… の意味あて', accent: '#6366f1' },
  { id: 'modal', icon: '🔑', title: '助動詞の意味・変化', sub: 'können/müssen/wollen… 意味と人称変化', accent: '#ef4444' },
  { id: 'gender', icon: '🔤', title: '名詞の性', sub: 'der / die / das の判別', accent: '#ec4899' },
  { id: 'vocab', icon: '📖', title: '単語の意味', sub: '動詞の独→日', accent: '#f59e0b' },
];

const DRILLS = `;

fs.writeFileSync(path.resolve(__dirname, '../../js/data/drills.js'), header + JSON.stringify(out, null, 2) + ';\n', 'utf8');
const byTheme = {};
out.forEach((q) => { byTheme[q.theme] = (byTheme[q.theme] || 0) + 1; });
console.log('total:', out.length, byTheme);
