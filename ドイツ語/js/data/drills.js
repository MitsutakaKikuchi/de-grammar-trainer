/**
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

const DRILLS = [
  {
    "id": "d-verb-case-001",
    "theme": "verb-case",
    "lektion": 1,
    "category": "動詞の格支配",
    "prompt": "動詞 „lernen“ は何格をとる？",
    "translation": "lernen ＝ 学ぶ",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "lernen（学ぶ）は 4格 をとる。例: Ich lerne Deutsch.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-002",
    "theme": "verb-case",
    "lektion": 1,
    "category": "動詞の格支配",
    "prompt": "動詞 „trinken“ は何格をとる？",
    "translation": "trinken ＝ 飲む",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "trinken（飲む）は 4格 をとる。例: Ich trinke Kaffee.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-003",
    "theme": "verb-case",
    "lektion": 2,
    "category": "動詞の格支配",
    "prompt": "動詞 „haben“ は何格をとる？",
    "translation": "haben ＝ 持つ",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "haben（持つ）は 4格 をとる。例: Ich habe Hunger.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-004",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „bringen“ は何格をとる？",
    "translation": "bringen ＝ 持ってくる",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "bringen（持ってくる）は 3格＋4格 をとる。例: Der Sohn bringt der Mutter eine Zeitschrift.",
    "tip": "「（人）に（物）を」型の動詞は 3格＋4格（bringen, schenken, zeigen, erzählen, schreiben）。"
  },
  {
    "id": "d-verb-case-005",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „schreiben“ は何格をとる？",
    "translation": "schreiben ＝ 書く",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "schreiben（書く）は 3格＋4格 をとる。例: Sie schreibt der Tante einen Brief.",
    "tip": "「（人）に（物）を」型の動詞は 3格＋4格（bringen, schenken, zeigen, erzählen, schreiben）。"
  },
  {
    "id": "d-verb-case-006",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „kennen“ は何格をとる？",
    "translation": "kennen ＝ 知っている",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "kennen（知っている）は 4格 をとる。例: Ich kenne den Mann sehr gut.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-007",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „fragen“ は何格をとる？",
    "translation": "fragen ＝ 質問する",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "fragen（質問する）は 4格 をとる。例: Der Lehrer fragt einen Schüler.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-008",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „antworten“ は何格をとる？",
    "translation": "antworten ＝ 答える",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "antworten（答える）は 3格 をとる。例: Der Schüler antwortet dem Lehrer.",
    "tip": "3格をとる動詞は helfen / danken / antworten / gehören / gefallen をセットで暗記。"
  },
  {
    "id": "d-verb-case-009",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „erzählen“ は何格をとる？",
    "translation": "erzählen ＝ 語る",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "erzählen（語る）は 3格＋4格 をとる。例: Der Vater erzählt den Kindern ein Märchen.",
    "tip": "「（人）に（物）を」型の動詞は 3格＋4格（bringen, schenken, zeigen, erzählen, schreiben）。"
  },
  {
    "id": "d-verb-case-010",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „besuchen“ は何格をとる？",
    "translation": "besuchen ＝ 訪問する",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "besuchen（訪問する）は 4格 をとる。例: Ich besuche eine Freundin.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-011",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „gehören“ は何格をとる？",
    "translation": "gehören ＝ （〜の）ものである",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "gehören（（〜の）ものである）は 3格 をとる。例: Die Handtasche gehört der Frau.",
    "tip": "3格をとる動詞は helfen / danken / antworten / gehören / gefallen をセットで暗記。"
  },
  {
    "id": "d-verb-case-012",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „zeigen“ は何格をとる？",
    "translation": "zeigen ＝ 見せる",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "zeigen（見せる）は 3格＋4格 をとる。例: Das Mädchen zeigt einer Freundin ein Foto.",
    "tip": "「（人）に（物）を」型の動詞は 3格＋4格（bringen, schenken, zeigen, erzählen, schreiben）。"
  },
  {
    "id": "d-verb-case-013",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „schenken“ は何格をとる？",
    "translation": "schenken ＝ 贈る",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "schenken（贈る）は 3格＋4格 をとる。例: Ich schenke dem Kind das Buch.",
    "tip": "「（人）に（物）を」型の動詞は 3格＋4格（bringen, schenken, zeigen, erzählen, schreiben）。"
  },
  {
    "id": "d-verb-case-014",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „danken“ は何格をとる？",
    "translation": "danken ＝ 感謝する",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "danken（感謝する）は 3格 をとる。例: Sie dankt den Kindern.",
    "tip": "3格をとる動詞は helfen / danken / antworten / gehören / gefallen をセットで暗記。"
  },
  {
    "id": "d-verb-case-015",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „loben“ は何格をとる？",
    "translation": "loben ＝ 褒める",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "loben（褒める）は 4格 をとる。例: Ich lobe den Mann.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-016",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "prompt": "動詞 „lieben“ は何格をとる？",
    "translation": "lieben ＝ 愛する",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "lieben（愛する）は 4格 をとる。例: Er liebt die Tochter eines Arztes.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-017",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „tragen“ は何格をとる？",
    "translation": "tragen ＝ 運ぶ・着る",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "tragen（運ぶ・着る）は 4格 をとる。例: Otto trägt einen Bart.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-018",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „sprechen“ は何格をとる？",
    "translation": "sprechen ＝ 話す",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "sprechen（話す）は 4格 をとる。例: Sie spricht gut Deutsch.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-019",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „essen“ は何格をとる？",
    "translation": "essen ＝ 食べる",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "essen（食べる）は 4格 をとる。例: Anna isst gern Fisch.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-020",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „helfen“ は何格をとる？",
    "translation": "helfen ＝ 手伝う",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "helfen（手伝う）は 3格 をとる。例: Ich helfe meiner Schwester.",
    "tip": "3格をとる動詞は helfen / danken / antworten / gehören / gefallen をセットで暗記。"
  },
  {
    "id": "d-verb-case-021",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „treffen“ は何格をとる？",
    "translation": "treffen ＝ 会う",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "treffen（会う）は 4格 をとる。例: Maria trifft den Freund.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-022",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „sehen“ は何格をとる？",
    "translation": "sehen ＝ 見る",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "sehen（見る）は 4格 をとる。例: Siehst du die Kirche dort?",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-023",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „lesen“ は何格をとる？",
    "translation": "lesen ＝ 読む",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "lesen（読む）は 4格 をとる。例: Ich lese einen Krimi.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-024",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „nehmen“ は何格をとる？",
    "translation": "nehmen ＝ 取る・（乗り物に）乗る",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "nehmen（取る・（乗り物に）乗る）は 4格 をとる。例: Du nimmst den Bus.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-025",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „wissen“ は何格をとる？",
    "translation": "wissen ＝ （知識として）知っている",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "wissen（（知識として）知っている）は 4格 をとる。例: Ich weiß die Adresse nicht.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-026",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "prompt": "動詞 „werden“ は何格をとる？",
    "translation": "werden ＝ 〜になる",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 3,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "werden（〜になる）は 1格（補語） をとる。例: Franz wird später Lehrer.",
    "tip": "sein・werden は「〜である／〜になる」で主語と同じ1格の補語をとる。"
  },
  {
    "id": "d-verb-case-027",
    "theme": "verb-case",
    "lektion": 5,
    "category": "動詞の格支配",
    "prompt": "動詞 „gefallen“ は何格をとる？",
    "translation": "gefallen ＝ 気に入る",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "gefallen（気に入る）は 3格 をとる。例: Die Handtasche gefällt meiner Mutter.",
    "tip": "3格をとる動詞は helfen / danken / antworten / gehören / gefallen をセットで暗記。"
  },
  {
    "id": "d-verb-case-028",
    "theme": "verb-case",
    "lektion": 6,
    "category": "動詞の格支配",
    "prompt": "動詞 „legen“ は何格をとる？",
    "translation": "legen ＝ 置く・横にする（他動詞）",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」（間接目的語）、4格＝「〜を」（直接目的語）。",
    "explanation": "legen（置く・横にする（他動詞））は 4格 をとる。例: Otto legt seine Tasche auf den Stuhl.",
    "tip": "多くの他動詞は4格（kennen, sehen, lesen, besuchen, loben…）。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-029",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Der Sohn bringt ___ Mutter eine Zeitschrift.",
    "translation": "息子は母親に雑誌を持ってくる。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 0,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "bringen は〈3格＋4格〉。Mutter は女性名詞、ここは3格（〜に）→ der Mutter。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-030",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Sie schreibt ___ Tante einen Brief.",
    "translation": "彼女は叔母に手紙を書く。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 0,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "schreiben は〈3格＋4格〉。Tante は女性名詞の3格 → der Tante。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-031",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Ich kenne ___ Mann sehr gut.",
    "translation": "私はその男性をよく知っている。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 3,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "kennen は4格をとる。Mann は男性名詞の4格 → den Mann。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-032",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Der Lehrer fragt ___ Schüler.",
    "translation": "先生は生徒に質問する。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 3,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "fragen は4格をとる。Schüler は男性名詞の4格 → den Schüler。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-033",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Der Schüler antwortet ___ Lehrer.",
    "translation": "その生徒は先生に答える。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 2,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "antworten は3格をとる。Lehrer は男性名詞の3格 → dem Lehrer。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-034",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Der Vater erzählt ___ Kindern ein Märchen.",
    "translation": "父親は子供たちに童話を語る。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 3,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "erzählen は〈3格＋4格〉。複数の3格は den ＋ 名詞に -n → den Kindern。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-035",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Die Handtasche gehört ___ Frau.",
    "translation": "ハンドバッグはその女性のものだ。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 0,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "gehören は3格をとる。Frau は女性名詞の3格 → der Frau。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-036",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Das Motorrad gehört ___ Mann.",
    "translation": "オートバイはその男性のものだ。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 2,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "gehören は3格をとる。Mann は男性名詞の3格 → dem Mann。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-037",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Der Lehrer lobt ___ Kinder.",
    "translation": "先生は子供たちを褒める。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 1,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "loben は4格をとる。複数の4格は die → die Kinder。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-verb-case-038",
    "theme": "verb-case",
    "lektion": 3,
    "category": "テキスト練習問題：格支配",
    "prompt": "Ich helfe ___ Lehrerin.",
    "translation": "私はその女性教師を手伝う。",
    "choices": [
      "der",
      "die",
      "dem",
      "den"
    ],
    "answer": 0,
    "hint": "動詞が何格をとるか→その格の定冠詞を選ぶ。3格男性/中性=dem・女性/複数=der、4格男性=den・女性=die。",
    "explanation": "helfen は3格をとる。Lehrerin は女性名詞の3格 → der Lehrerin。",
    "tip": "動詞の格支配と定冠詞の格変化はセットで身につく。まず動詞の格を判定→冠詞を当てはめる。"
  },
  {
    "id": "d-prep-case-039",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „aus“ は何格を支配する？",
    "translation": "aus ＝ 〜の中から、〜出身の",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "aus（〜の中から、〜出身の）は 3格支配。",
    "tip": "3格支配は語呂「aus・bei・mit・nach・seit・von・zu」で7つまとめて覚える。"
  },
  {
    "id": "d-prep-case-040",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „bei“ は何格を支配する？",
    "translation": "bei ＝ 〜のもとで、〜の際に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "bei（〜のもとで、〜の際に）は 3格支配。",
    "tip": "3格支配は語呂「aus・bei・mit・nach・seit・von・zu」で7つまとめて覚える。"
  },
  {
    "id": "d-prep-case-041",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „mit“ は何格を支配する？",
    "translation": "mit ＝ 〜と一緒に、〜を使って",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "mit（〜と一緒に、〜を使って）は 3格支配。",
    "tip": "3格支配は語呂「aus・bei・mit・nach・seit・von・zu」で7つまとめて覚える。"
  },
  {
    "id": "d-prep-case-042",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „nach“ は何格を支配する？",
    "translation": "nach ＝ 〜の後で、〜へ（地名）",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "nach（〜の後で、〜へ（地名））は 3格支配。",
    "tip": "3格支配は語呂「aus・bei・mit・nach・seit・von・zu」で7つまとめて覚える。"
  },
  {
    "id": "d-prep-case-043",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „seit“ は何格を支配する？",
    "translation": "seit ＝ 〜以来",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "seit（〜以来）は 3格支配。",
    "tip": "3格支配は語呂「aus・bei・mit・nach・seit・von・zu」で7つまとめて覚える。"
  },
  {
    "id": "d-prep-case-044",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „von“ は何格を支配する？",
    "translation": "von ＝ 〜から、〜の",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "von（〜から、〜の）は 3格支配。",
    "tip": "3格支配は語呂「aus・bei・mit・nach・seit・von・zu」で7つまとめて覚える。"
  },
  {
    "id": "d-prep-case-045",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „zu“ は何格を支配する？",
    "translation": "zu ＝ 〜へ、〜のために",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "zu（〜へ、〜のために）は 3格支配。",
    "tip": "3格支配は語呂「aus・bei・mit・nach・seit・von・zu」で7つまとめて覚える。"
  },
  {
    "id": "d-prep-case-046",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „bis“ は何格を支配する？",
    "translation": "bis ＝ 〜まで",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "bis（〜まで）は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-047",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „für“ は何格を支配する？",
    "translation": "für ＝ 〜のために",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "für（〜のために）は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-048",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „gegen“ は何格を支配する？",
    "translation": "gegen ＝ 〜に対して、〜頃",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "gegen（〜に対して、〜頃）は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-049",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „ohne“ は何格を支配する？",
    "translation": "ohne ＝ 〜なしに",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "ohne（〜なしに）は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-050",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „um“ は何格を支配する？",
    "translation": "um ＝ 〜の周りに、〜時に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "um（〜の周りに、〜時に）は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-051",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „an“ は何格を支配する？",
    "translation": "an ＝ 〜のきわに",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "an（〜のきわに）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-052",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „auf“ は何格を支配する？",
    "translation": "auf ＝ 〜の上に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "auf（〜の上に）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-053",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „hinter“ は何格を支配する？",
    "translation": "hinter ＝ 〜の後ろに",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "hinter（〜の後ろに）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-054",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „in“ は何格を支配する？",
    "translation": "in ＝ 〜の中に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "in（〜の中に）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-055",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „neben“ は何格を支配する？",
    "translation": "neben ＝ 〜の横に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "neben（〜の横に）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-056",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „über“ は何格を支配する？",
    "translation": "über ＝ 〜の上方に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "über（〜の上方に）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-057",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „unter“ は何格を支配する？",
    "translation": "unter ＝ 〜の下に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "unter（〜の下に）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-058",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „vor“ は何格を支配する？",
    "translation": "vor ＝ 〜の前に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "vor（〜の前に）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-059",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "prompt": "前置詞 „zwischen“ は何格を支配する？",
    "translation": "zwischen ＝ 〜の間に",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "explanation": "zwischen（〜の間に）は 3・4格支配。場所（どこに・静止）なら3格、方向（どこへ・移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ（位置か方向かで格が変わる）。"
  },
  {
    "id": "d-prep-case-060",
    "theme": "prep-case",
    "lektion": 6,
    "category": "テキスト練習問題：3・4格",
    "prompt": "Ich hänge das Bild an ___ Wand.",
    "translation": "私はその絵を壁に掛ける。（移動）",
    "choices": [
      "die",
      "der",
      "das",
      "dem"
    ],
    "answer": 0,
    "hint": "3・4格支配の前置詞は、位置（どこに）＝3格、方向（どこへ）＝4格。",
    "explanation": "「掛ける（移動）」は方向 → 4格。Wand は女性名詞の4格 → die Wand。",
    "tip": "動詞が「移動」か「静止」かを見抜くのがカギ。gehen/legen/hängen(他)=方向→4格、wohnen/liegen/hängen(自)=位置→3格。"
  },
  {
    "id": "d-prep-case-061",
    "theme": "prep-case",
    "lektion": 6,
    "category": "テキスト練習問題：3・4格",
    "prompt": "Jetzt hängt das Bild an ___ Wand.",
    "translation": "今その絵は壁に掛かっている。（位置）",
    "choices": [
      "die",
      "der",
      "das",
      "dem"
    ],
    "answer": 1,
    "hint": "3・4格支配の前置詞は、位置（どこに）＝3格、方向（どこへ）＝4格。",
    "explanation": "「掛かっている（位置）」は場所 → 3格。Wand は女性名詞の3格 → der Wand。",
    "tip": "動詞が「移動」か「静止」かを見抜くのがカギ。gehen/legen/hängen(他)=方向→4格、wohnen/liegen/hängen(自)=位置→3格。"
  },
  {
    "id": "d-prep-case-062",
    "theme": "prep-case",
    "lektion": 6,
    "category": "テキスト練習問題：3・4格",
    "prompt": "Mein Onkel wohnt in ___ Stadt.",
    "translation": "私の叔父は街に住んでいる。（位置）",
    "choices": [
      "die",
      "der",
      "das",
      "dem"
    ],
    "answer": 1,
    "hint": "3・4格支配の前置詞は、位置（どこに）＝3格、方向（どこへ）＝4格。",
    "explanation": "wohnen は位置 → 3格。Stadt は女性名詞の3格 → der Stadt。",
    "tip": "動詞が「移動」か「静止」かを見抜くのがカギ。gehen/legen/hängen(他)=方向→4格、wohnen/liegen/hängen(自)=位置→3格。"
  },
  {
    "id": "d-prep-case-063",
    "theme": "prep-case",
    "lektion": 6,
    "category": "テキスト練習問題：3・4格",
    "prompt": "Ich gehe morgen in ___ Stadt.",
    "translation": "私は明日街へ行く。（移動）",
    "choices": [
      "die",
      "der",
      "das",
      "dem"
    ],
    "answer": 0,
    "hint": "3・4格支配の前置詞は、位置（どこに）＝3格、方向（どこへ）＝4格。",
    "explanation": "「行く（移動）」は方向 → 4格。Stadt は女性名詞の4格 → die Stadt。",
    "tip": "動詞が「移動」か「静止」かを見抜くのがカギ。gehen/legen/hängen(他)=方向→4格、wohnen/liegen/hängen(自)=位置→3格。"
  },
  {
    "id": "d-prep-case-064",
    "theme": "prep-case",
    "lektion": 6,
    "category": "テキスト練習問題：3・4格",
    "prompt": "Otto legt seine Tasche auf ___ Stuhl.",
    "translation": "オットーはバッグを椅子の上に置く。（移動）",
    "choices": [
      "den",
      "dem",
      "der",
      "das"
    ],
    "answer": 0,
    "hint": "3・4格支配の前置詞は、位置（どこに）＝3格、方向（どこへ）＝4格。",
    "explanation": "legen（置く＝移動）は方向 → 4格。Stuhl は男性名詞の4格 → den Stuhl。",
    "tip": "動詞が「移動」か「静止」かを見抜くのがカギ。gehen/legen/hängen(他)=方向→4格、wohnen/liegen/hängen(自)=位置→3格。"
  },
  {
    "id": "d-prep-case-065",
    "theme": "prep-case",
    "lektion": 6,
    "category": "テキスト練習問題：3・4格",
    "prompt": "Meine Tasche liegt auf ___ Stuhl.",
    "translation": "私のバッグは椅子の上に置いてある。（位置）",
    "choices": [
      "den",
      "dem",
      "der",
      "das"
    ],
    "answer": 1,
    "hint": "3・4格支配の前置詞は、位置（どこに）＝3格、方向（どこへ）＝4格。",
    "explanation": "liegen（置いてある＝位置）は場所 → 3格。Stuhl は男性名詞の3格 → dem Stuhl。",
    "tip": "動詞が「移動」か「静止」かを見抜くのがカギ。gehen/legen/hängen(他)=方向→4格、wohnen/liegen/hängen(自)=位置→3格。"
  },
  {
    "id": "d-prep-case-066",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "prompt": "融合形 „am“ は何の短縮？",
    "choices": [
      "an + dem",
      "in + dem",
      "zu + dem",
      "zu + der",
      "an + das",
      "in + das"
    ],
    "answer": 0,
    "hint": "am=an+dem, im=in+dem, zum=zu+dem, zur=zu+der, ans=an+das, ins=in+das。",
    "explanation": "am = an + dem。例: Erika bleibt am Meer.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる融合形（ans/ins）は4格の合図。"
  },
  {
    "id": "d-prep-case-067",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "prompt": "融合形 „im“ は何の短縮？",
    "choices": [
      "an + dem",
      "in + dem",
      "zu + dem",
      "zu + der",
      "an + das",
      "in + das"
    ],
    "answer": 1,
    "hint": "am=an+dem, im=in+dem, zum=zu+dem, zur=zu+der, ans=an+das, ins=in+das。",
    "explanation": "im = in + dem。例: Sie bleibt im Bett.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる融合形（ans/ins）は4格の合図。"
  },
  {
    "id": "d-prep-case-068",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "prompt": "融合形 „zum“ は何の短縮？",
    "choices": [
      "an + dem",
      "in + dem",
      "zu + dem",
      "zu + der",
      "an + das",
      "in + das"
    ],
    "answer": 2,
    "hint": "am=an+dem, im=in+dem, zum=zu+dem, zur=zu+der, ans=an+das, ins=in+das。",
    "explanation": "zum = zu + dem。例: Er geht zum Bahnhof.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる融合形（ans/ins）は4格の合図。"
  },
  {
    "id": "d-prep-case-069",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "prompt": "融合形 „zur“ は何の短縮？",
    "choices": [
      "an + dem",
      "in + dem",
      "zu + dem",
      "zu + der",
      "an + das",
      "in + das"
    ],
    "answer": 3,
    "hint": "am=an+dem, im=in+dem, zum=zu+dem, zur=zu+der, ans=an+das, ins=in+das。",
    "explanation": "zur = zu + der。例: Wir gehen zur Bäckerei.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる融合形（ans/ins）は4格の合図。"
  },
  {
    "id": "d-prep-case-070",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "prompt": "融合形 „ans“ は何の短縮？",
    "choices": [
      "an + dem",
      "in + dem",
      "zu + dem",
      "zu + der",
      "an + das",
      "in + das"
    ],
    "answer": 4,
    "hint": "am=an+dem, im=in+dem, zum=zu+dem, zur=zu+der, ans=an+das, ins=in+das。",
    "explanation": "ans = an + das。例: Anna fährt ans Meer.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる融合形（ans/ins）は4格の合図。"
  },
  {
    "id": "d-prep-case-071",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "prompt": "融合形 „ins“ は何の短縮？",
    "choices": [
      "an + dem",
      "in + dem",
      "zu + dem",
      "zu + der",
      "an + das",
      "in + das"
    ],
    "answer": 5,
    "hint": "am=an+dem, im=in+dem, zum=zu+dem, zur=zu+der, ans=an+das, ins=in+das。",
    "explanation": "ins = in + das。例: Er geht ins Theater.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる融合形（ans/ins）は4格の合図。"
  },
  {
    "id": "d-vocab-072",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „lernen“ の意味は？",
    "choices": [
      "学ぶ",
      "愛する",
      "読む",
      "行く"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "lernen =「学ぶ」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-073",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „trinken“ の意味は？",
    "choices": [
      "飲む",
      "（乗り物で）行く",
      "持つ",
      "訪問する"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "trinken =「飲む」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-074",
    "theme": "vocab",
    "lektion": 2,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „haben“ の意味は？",
    "choices": [
      "持つ",
      "気に入る",
      "働く",
      "知っている"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "haben =「持つ」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-075",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „bringen“ の意味は？",
    "choices": [
      "持ってくる",
      "運ぶ・着る",
      "取る・（乗り物に）乗る",
      "（乗り物で）行く"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "bringen =「持ってくる」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-076",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „schreiben“ の意味は？",
    "choices": [
      "書く",
      "会う",
      "置く・横にする（他動詞）",
      "旅行する"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "schreiben =「書く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-077",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „kennen“ の意味は？",
    "choices": [
      "知っている",
      "置いてある・横になっている（自動詞）",
      "答える",
      "褒める"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "kennen =「知っている」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-078",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „fragen“ の意味は？",
    "choices": [
      "質問する",
      "働く",
      "書く",
      "贈る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "fragen =「質問する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-079",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „antworten“ の意味は？",
    "choices": [
      "答える",
      "（知識として）知っている",
      "飛ぶ・飛行機で行く",
      "持つ"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "antworten =「答える」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-080",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „erzählen“ の意味は？",
    "choices": [
      "語る",
      "働く",
      "書く",
      "贈る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "erzählen =「語る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-081",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „besuchen“ の意味は？",
    "choices": [
      "訪問する",
      "飲む",
      "語る",
      "運ぶ・着る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "besuchen =「訪問する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-082",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „gehören“ の意味は？",
    "choices": [
      "（〜の）ものである",
      "旅行する",
      "知っている",
      "感謝する"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "gehören =「（〜の）ものである」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-083",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „zeigen“ の意味は？",
    "choices": [
      "見せる",
      "持つ",
      "訪問する",
      "話す"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "zeigen =「見せる」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-084",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „schenken“ の意味は？",
    "choices": [
      "贈る",
      "知っている",
      "感謝する",
      "会う"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "schenken =「贈る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-085",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „danken“ の意味は？",
    "choices": [
      "感謝する",
      "知っている",
      "贈る",
      "会う"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "danken =「感謝する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-086",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „loben“ の意味は？",
    "choices": [
      "褒める",
      "感謝する",
      "見る",
      "来る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "loben =「褒める」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-087",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „lieben“ の意味は？",
    "choices": [
      "愛する",
      "旅行する",
      "知っている",
      "贈る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "lieben =「愛する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-088",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „tragen“ の意味は？",
    "choices": [
      "運ぶ・着る",
      "見せる",
      "手伝う",
      "気に入る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "tragen =「運ぶ・着る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-089",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „sprechen“ の意味は？",
    "choices": [
      "話す",
      "置く・横にする（他動詞）",
      "旅行する",
      "知っている"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "sprechen =「話す」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-090",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „essen“ の意味は？",
    "choices": [
      "食べる",
      "取る・（乗り物に）乗る",
      "（乗り物で）行く",
      "飲む"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "essen =「食べる」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-091",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „helfen“ の意味は？",
    "choices": [
      "手伝う",
      "置く・横にする（他動詞）",
      "旅行する",
      "知っている"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "helfen =「手伝う」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-092",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „treffen“ の意味は？",
    "choices": [
      "会う",
      "働く",
      "書く",
      "見せる"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "treffen =「会う」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-093",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „sehen“ の意味は？",
    "choices": [
      "見る",
      "読む",
      "行く",
      "学ぶ"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "sehen =「見る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-094",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „lesen“ の意味は？",
    "choices": [
      "読む",
      "愛する",
      "取る・（乗り物に）乗る",
      "（乗り物で）行く"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "lesen =「読む」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-095",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „nehmen“ の意味は？",
    "choices": [
      "取る・（乗り物に）乗る",
      "気に入る",
      "働く",
      "書く"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "nehmen =「取る・（乗り物に）乗る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-096",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „wissen“ の意味は？",
    "choices": [
      "（知識として）知っている",
      "（〜の）ものである",
      "話す",
      "〜になる"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "wissen =「（知識として）知っている」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-097",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „werden“ の意味は？",
    "choices": [
      "〜になる",
      "学ぶ",
      "答える",
      "褒める"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "werden =「〜になる」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-098",
    "theme": "vocab",
    "lektion": 5,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „gefallen“ の意味は？",
    "choices": [
      "気に入る",
      "（乗り物で）行く",
      "飲む",
      "語る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "gefallen =「気に入る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-099",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „legen“ の意味は？",
    "choices": [
      "置く・横にする（他動詞）",
      "旅行する",
      "知っている",
      "贈る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "legen =「置く・横にする（他動詞）」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-100",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „kommen“ の意味は？",
    "choices": [
      "来る",
      "話す",
      "（知識として）知っている",
      "泳ぐ"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "kommen =「来る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-101",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „gehen“ の意味は？",
    "choices": [
      "行く",
      "（乗り物で）行く",
      "飲む",
      "語る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "gehen =「行く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-102",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „fahren“ の意味は？",
    "choices": [
      "（乗り物で）行く",
      "来る",
      "学ぶ",
      "答える"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "fahren =「（乗り物で）行く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-103",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „fliegen“ の意味は？",
    "choices": [
      "飛ぶ・飛行機で行く",
      "手伝う",
      "気に入る",
      "旅行する"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "fliegen =「飛ぶ・飛行機で行く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-104",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „schwimmen“ の意味は？",
    "choices": [
      "泳ぐ",
      "語る",
      "愛する",
      "読む"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "schwimmen =「泳ぐ」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-105",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „arbeiten“ の意味は？",
    "choices": [
      "働く",
      "読む",
      "行く",
      "飲む"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "arbeiten =「働く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-106",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „reisen“ の意味は？",
    "choices": [
      "旅行する",
      "見る",
      "来る",
      "学ぶ"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "reisen =「旅行する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-107",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（動詞 独→日）",
    "prompt": "動詞 „liegen“ の意味は？",
    "choices": [
      "置いてある・横になっている（自動詞）",
      "語る",
      "愛する",
      "読む"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "explanation": "liegen =「置いてある・横になっている（自動詞）」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-108",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「学ぶ」にあたるドイツ語の動詞は？",
    "choices": [
      "lernen",
      "lieben",
      "lesen",
      "gehen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「学ぶ」= lernen。例: Ich lerne Deutsch.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-109",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「飲む」にあたるドイツ語の動詞は？",
    "choices": [
      "trinken",
      "fahren",
      "haben",
      "besuchen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「飲む」= trinken。例: Ich trinke Kaffee.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-110",
    "theme": "vocab",
    "lektion": 2,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「持つ」にあたるドイツ語の動詞は？",
    "choices": [
      "haben",
      "gefallen",
      "arbeiten",
      "kennen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「持つ」= haben。例: Ich habe Hunger.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-111",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「持ってくる」にあたるドイツ語の動詞は？",
    "choices": [
      "bringen",
      "tragen",
      "nehmen",
      "fahren"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「持ってくる」= bringen。例: Der Sohn bringt der Mutter eine Zeitschrift.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-112",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「書く」にあたるドイツ語の動詞は？",
    "choices": [
      "schreiben",
      "treffen",
      "legen",
      "reisen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「書く」= schreiben。例: Sie schreibt der Tante einen Brief.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-113",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「知っている」にあたるドイツ語の動詞は？",
    "choices": [
      "kennen",
      "liegen",
      "antworten",
      "loben"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「知っている」= kennen。例: Ich kenne den Mann sehr gut.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-114",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「質問する」にあたるドイツ語の動詞は？",
    "choices": [
      "fragen",
      "arbeiten",
      "schreiben",
      "schenken"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「質問する」= fragen。例: Der Lehrer fragt einen Schüler.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-115",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「答える」にあたるドイツ語の動詞は？",
    "choices": [
      "antworten",
      "wissen",
      "fliegen",
      "haben"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「答える」= antworten。例: Der Schüler antwortet dem Lehrer.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-116",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「語る」にあたるドイツ語の動詞は？",
    "choices": [
      "erzählen",
      "arbeiten",
      "schreiben",
      "schenken"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「語る」= erzählen。例: Der Vater erzählt den Kindern ein Märchen.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-117",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「訪問する」にあたるドイツ語の動詞は？",
    "choices": [
      "besuchen",
      "trinken",
      "erzählen",
      "tragen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「訪問する」= besuchen。例: Ich besuche eine Freundin.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-118",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「（〜の）ものである」にあたるドイツ語の動詞は？",
    "choices": [
      "gehören",
      "reisen",
      "kennen",
      "danken"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「（〜の）ものである」= gehören。例: Die Handtasche gehört der Frau.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-119",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「見せる」にあたるドイツ語の動詞は？",
    "choices": [
      "zeigen",
      "haben",
      "besuchen",
      "sprechen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「見せる」= zeigen。例: Das Mädchen zeigt einer Freundin ein Foto.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-120",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「贈る」にあたるドイツ語の動詞は？",
    "choices": [
      "schenken",
      "kennen",
      "danken",
      "treffen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「贈る」= schenken。例: Ich schenke dem Kind das Buch.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-121",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「感謝する」にあたるドイツ語の動詞は？",
    "choices": [
      "danken",
      "kennen",
      "schenken",
      "treffen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「感謝する」= danken。例: Sie dankt den Kindern.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-122",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞 日→独）",
    "prompt": "「褒める」にあたるドイツ語の動詞は？",
    "choices": [
      "loben",
      "danken",
      "sehen",
      "kommen"
    ],
    "answer": 0,
    "hint": "原形（不定詞）で選ぶ。",
    "explanation": "「褒める」= loben。例: Ich lobe den Mann.",
    "tip": "和訳から原形を引ける状態が、人称変化・格支配を使う前提になる。"
  },
  {
    "id": "d-vocab-123",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（話法の助動詞）",
    "prompt": "話法の助動詞 „dürfen“ の意味は？",
    "choices": [
      "〜してもよい（許可）",
      "〜したい（願望）",
      "〜できる（能力・可能）",
      "〜を好む"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "explanation": "dürfen =「〜してもよい（許可）」。助動詞構文では本動詞は不定詞で文末。",
    "tip": "wollen（自分の意志）と sollen（他者の意志）、müssen（必要）と dürfen（許可）の対比で覚える。"
  },
  {
    "id": "d-vocab-124",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（話法の助動詞）",
    "prompt": "話法の助動詞 „können“ の意味は？",
    "choices": [
      "〜できる（能力・可能）",
      "〜するつもりだ（意志）",
      "〜したい（願望）",
      "〜してもよい（許可）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "explanation": "können =「〜できる（能力・可能）」。助動詞構文では本動詞は不定詞で文末。",
    "tip": "wollen（自分の意志）と sollen（他者の意志）、müssen（必要）と dürfen（許可）の対比で覚える。"
  },
  {
    "id": "d-vocab-125",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（話法の助動詞）",
    "prompt": "話法の助動詞 „mögen“ の意味は？",
    "choices": [
      "〜を好む",
      "〜すべきだ",
      "〜するつもりだ（意志）",
      "〜したい（願望）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "explanation": "mögen =「〜を好む」。助動詞構文では本動詞は不定詞で文末。",
    "tip": "wollen（自分の意志）と sollen（他者の意志）、müssen（必要）と dürfen（許可）の対比で覚える。"
  },
  {
    "id": "d-vocab-126",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（話法の助動詞）",
    "prompt": "話法の助動詞 „müssen“ の意味は？",
    "choices": [
      "〜しなければならない",
      "〜するつもりだ（意志）",
      "〜したい（願望）",
      "〜してもよい（許可）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "explanation": "müssen =「〜しなければならない」。助動詞構文では本動詞は不定詞で文末。",
    "tip": "wollen（自分の意志）と sollen（他者の意志）、müssen（必要）と dürfen（許可）の対比で覚える。"
  },
  {
    "id": "d-vocab-127",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（話法の助動詞）",
    "prompt": "話法の助動詞 „sollen“ の意味は？",
    "choices": [
      "〜すべきだ",
      "〜したい（願望）",
      "〜してもよい（許可）",
      "〜できる（能力・可能）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "explanation": "sollen =「〜すべきだ」。助動詞構文では本動詞は不定詞で文末。",
    "tip": "wollen（自分の意志）と sollen（他者の意志）、müssen（必要）と dürfen（許可）の対比で覚える。"
  },
  {
    "id": "d-vocab-128",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（話法の助動詞）",
    "prompt": "話法の助動詞 „wollen“ の意味は？",
    "choices": [
      "〜するつもりだ（意志）",
      "〜しなければならない",
      "〜すべきだ",
      "〜したい（願望）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "explanation": "wollen =「〜するつもりだ（意志）」。助動詞構文では本動詞は不定詞で文末。",
    "tip": "wollen（自分の意志）と sollen（他者の意志）、müssen（必要）と dürfen（許可）の対比で覚える。"
  },
  {
    "id": "d-vocab-129",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（話法の助動詞）",
    "prompt": "話法の助動詞 „möchte“ の意味は？",
    "choices": [
      "〜したい（願望）",
      "〜できる（能力・可能）",
      "〜を好む",
      "〜しなければならない"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "explanation": "möchte =「〜したい（願望）」。助動詞構文では本動詞は不定詞で文末。",
    "tip": "wollen（自分の意志）と sollen（他者の意志）、müssen（必要）と dürfen（許可）の対比で覚える。"
  },
  {
    "id": "d-vocab-130",
    "theme": "vocab",
    "lektion": 5,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Pullover“ の意味は？",
    "choices": [
      "セーター",
      "ワイン",
      "母",
      "指輪"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Pullover =「セーター」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-131",
    "theme": "vocab",
    "lektion": 5,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „die Kusine“ の意味は？",
    "choices": [
      "いとこ（女性）",
      "猫",
      "生徒",
      "カードゲーム"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "die Kusine =「いとこ（女性）」（女性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-132",
    "theme": "vocab",
    "lektion": 5,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Zahnarzt“ の意味は？",
    "choices": [
      "歯科医",
      "市役所",
      "ワイン",
      "母"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Zahnarzt =「歯科医」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-133",
    "theme": "vocab",
    "lektion": 5,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „das Kartenspiel“ の意味は？",
    "choices": [
      "カードゲーム",
      "ワイン醸造家",
      "子供",
      "セーター"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "das Kartenspiel =「カードゲーム」（中性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-134",
    "theme": "vocab",
    "lektion": 5,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Professor“ の意味は？",
    "choices": [
      "教授",
      "オーブン",
      "壁",
      "遠足"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Professor =「教授」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-135",
    "theme": "vocab",
    "lektion": 5,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „das Praktikum“ の意味は？",
    "choices": [
      "インターンシップ",
      "セーター",
      "小型パン",
      "椅子"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "das Praktikum =「インターンシップ」（中性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-136",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „die Bäckerei“ の意味は？",
    "choices": [
      "パン屋",
      "推理小説",
      "カードゲーム",
      "ソーセージ"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "die Bäckerei =「パン屋」（女性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-137",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „das Brot“ の意味は？",
    "choices": [
      "パン",
      "教師",
      "少女",
      "推理小説"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "das Brot =「パン」（中性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-138",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „das Brötchen“ の意味は？",
    "choices": [
      "小型パン",
      "市役所",
      "ワイン",
      "母"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "das Brötchen =「小型パン」（中性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-139",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Ofen“ の意味は？",
    "choices": [
      "オーブン",
      "教師",
      "少女",
      "推理小説"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Ofen =「オーブン」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-140",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „das Frühstück“ の意味は？",
    "choices": [
      "朝食",
      "大学生",
      "猫",
      "生徒"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "das Frühstück =「朝食」（中性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-141",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „die Wurst“ の意味は？",
    "choices": [
      "ソーセージ",
      "休暇",
      "大学生",
      "猫"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "die Wurst =「ソーセージ」（女性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-142",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Schinken“ の意味は？",
    "choices": [
      "ハム",
      "遠足",
      "ビール",
      "父"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Schinken =「ハム」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-143",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Käse“ の意味は？",
    "choices": [
      "チーズ",
      "少女",
      "推理小説",
      "カードゲーム"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Käse =「チーズ」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-144",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Salat“ の意味は？",
    "choices": [
      "サラダ",
      "ワイン醸造家",
      "子供",
      "セーター"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Salat =「サラダ」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-145",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Stuhl“ の意味は？",
    "choices": [
      "椅子",
      "傘",
      "インターンシップ",
      "ハム"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Stuhl =「椅子」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-146",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „die Wand“ の意味は？",
    "choices": [
      "壁",
      "指輪",
      "パン屋",
      "チーズ"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "die Wand =「壁」（女性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-147",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „das Meer“ の意味は？",
    "choices": [
      "海",
      "チーズ",
      "旅行",
      "教師"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "das Meer =「海」（中性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-148",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „das Theater“ の意味は？",
    "choices": [
      "劇場",
      "教授",
      "ソーセージ",
      "中央駅"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "das Theater =「劇場」（中性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-149",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Hauptbahnhof“ の意味は？",
    "choices": [
      "中央駅",
      "医者",
      "馬",
      "錠剤"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Hauptbahnhof =「中央駅」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-150",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Urlaub“ の意味は？",
    "choices": [
      "休暇",
      "指輪",
      "パン屋",
      "チーズ"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Urlaub =「休暇」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-151",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „die Reise“ の意味は？",
    "choices": [
      "旅行",
      "教授",
      "ソーセージ",
      "劇場"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "die Reise =「旅行」（女性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-152",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Strand“ の意味は？",
    "choices": [
      "海岸",
      "セーター",
      "パン",
      "サラダ"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Strand =「海岸」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-153",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Ausflug“ の意味は？",
    "choices": [
      "遠足",
      "猫",
      "生徒",
      "歯科医"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Ausflug =「遠足」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-154",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „das Rathaus“ の意味は？",
    "choices": [
      "市役所",
      "いとこ（女性）",
      "小型パン",
      "椅子"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "das Rathaus =「市役所」（中性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-vocab-155",
    "theme": "vocab",
    "lektion": 7,
    "category": "単語の意味（名詞 独→日）",
    "prompt": "名詞 „der Bericht“ の意味は？",
    "choices": [
      "報告書",
      "大学生",
      "猫",
      "生徒"
    ],
    "answer": 0,
    "hint": "名詞は冠詞（性）とセットで思い出す。",
    "explanation": "der Bericht =「報告書」（男性名詞）。",
    "tip": "名詞は必ず定冠詞つきで暗記すると、性も同時に覚えられる。"
  },
  {
    "id": "d-gender-156",
    "theme": "gender",
    "lektion": 1,
    "category": "名詞の性",
    "prompt": "名詞 „Roman“ に付く定冠詞（1格）は？",
    "translation": "Roman ＝ 小説",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Roman（小説）は男性名詞 → der Roman。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-157",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Student“ に付く定冠詞（1格）は？",
    "translation": "Student ＝ 大学生",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Student（大学生）は男性名詞 → der Student。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-158",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Lehrer“ に付く定冠詞（1格）は？",
    "translation": "Lehrer ＝ 教師",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Lehrer（教師）は男性名詞 → der Lehrer。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-159",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Arzt“ に付く定冠詞（1格）は？",
    "translation": "Arzt ＝ 医者",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Arzt（医者）は男性名詞 → der Arzt。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-160",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Bier“ に付く定冠詞（1格）は？",
    "translation": "Bier ＝ ビール",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Bier（ビール）は中性名詞 → das Bier。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-161",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Wein“ に付く定冠詞（1格）は？",
    "translation": "Wein ＝ ワイン",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Wein（ワイン）は男性名詞 → der Wein。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-162",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Winzer“ に付く定冠詞（1格）は？",
    "translation": "Winzer ＝ ワイン醸造家",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Winzer（ワイン醸造家）は男性名詞 → der Winzer。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-163",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Hund“ に付く定冠詞（1格）は？",
    "translation": "Hund ＝ 犬",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Hund（犬）は男性名詞 → der Hund。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-164",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Katze“ に付く定冠詞（1格）は？",
    "translation": "Katze ＝ 猫",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Katze（猫）は女性名詞 → die Katze。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-165",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Mädchen“ に付く定冠詞（1格）は？",
    "translation": "Mädchen ＝ 少女",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Mädchen（少女）は中性名詞 → das Mädchen。",
    "tip": "-chen で終わる名詞は必ず中性（das Mädchen, das Brötchen）。"
  },
  {
    "id": "d-gender-166",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Pferd“ に付く定冠詞（1格）は？",
    "translation": "Pferd ＝ 馬",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Pferd（馬）は中性名詞 → das Pferd。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-167",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Vater“ に付く定冠詞（1格）は？",
    "translation": "Vater ＝ 父",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Vater（父）は男性名詞 → der Vater。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-168",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Mutter“ に付く定冠詞（1格）は？",
    "translation": "Mutter ＝ 母",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Mutter（母）は女性名詞 → die Mutter。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-169",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "prompt": "名詞 „Kind“ に付く定冠詞（1格）は？",
    "translation": "Kind ＝ 子供",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Kind（子供）は中性名詞 → das Kind。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-170",
    "theme": "gender",
    "lektion": 4,
    "category": "名詞の性",
    "prompt": "名詞 „Tasche“ に付く定冠詞（1格）は？",
    "translation": "Tasche ＝ バッグ",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Tasche（バッグ）は女性名詞 → die Tasche。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-171",
    "theme": "gender",
    "lektion": 4,
    "category": "名詞の性",
    "prompt": "名詞 „Schüler“ に付く定冠詞（1格）は？",
    "translation": "Schüler ＝ 生徒",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Schüler（生徒）は男性名詞 → der Schüler。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-172",
    "theme": "gender",
    "lektion": 4,
    "category": "名詞の性",
    "prompt": "名詞 „Krimi“ に付く定冠詞（1格）は？",
    "translation": "Krimi ＝ 推理小説",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Krimi（推理小説）は男性名詞 → der Krimi。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-173",
    "theme": "gender",
    "lektion": 4,
    "category": "名詞の性",
    "prompt": "名詞 „Tablette“ に付く定冠詞（1格）は？",
    "translation": "Tablette ＝ 錠剤",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Tablette（錠剤）は女性名詞 → die Tablette。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-174",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "prompt": "名詞 „Regenschirm“ に付く定冠詞（1格）は？",
    "translation": "Regenschirm ＝ 傘",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Regenschirm（傘）は男性名詞 → der Regenschirm。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-175",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "prompt": "名詞 „Ring“ に付く定冠詞（1格）は？",
    "translation": "Ring ＝ 指輪",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Ring（指輪）は男性名詞 → der Ring。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-176",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "prompt": "名詞 „Pullover“ に付く定冠詞（1格）は？",
    "translation": "Pullover ＝ セーター",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Pullover（セーター）は男性名詞 → der Pullover。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-177",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "prompt": "名詞 „Kusine“ に付く定冠詞（1格）は？",
    "translation": "Kusine ＝ いとこ（女性）",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Kusine（いとこ（女性））は女性名詞 → die Kusine。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-178",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "prompt": "名詞 „Zahnarzt“ に付く定冠詞（1格）は？",
    "translation": "Zahnarzt ＝ 歯科医",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Zahnarzt（歯科医）は男性名詞 → der Zahnarzt。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-179",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "prompt": "名詞 „Kartenspiel“ に付く定冠詞（1格）は？",
    "translation": "Kartenspiel ＝ カードゲーム",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Kartenspiel（カードゲーム）は中性名詞 → das Kartenspiel。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-180",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "prompt": "名詞 „Professor“ に付く定冠詞（1格）は？",
    "translation": "Professor ＝ 教授",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Professor（教授）は男性名詞 → der Professor。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-181",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "prompt": "名詞 „Praktikum“ に付く定冠詞（1格）は？",
    "translation": "Praktikum ＝ インターンシップ",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Praktikum（インターンシップ）は中性名詞 → das Praktikum。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-182",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Bäckerei“ に付く定冠詞（1格）は？",
    "translation": "Bäckerei ＝ パン屋",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Bäckerei（パン屋）は女性名詞 → die Bäckerei。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-183",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Brot“ に付く定冠詞（1格）は？",
    "translation": "Brot ＝ パン",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Brot（パン）は中性名詞 → das Brot。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-184",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Brötchen“ に付く定冠詞（1格）は？",
    "translation": "Brötchen ＝ 小型パン",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Brötchen（小型パン）は中性名詞 → das Brötchen。",
    "tip": "-chen で終わる名詞は必ず中性（das Mädchen, das Brötchen）。"
  },
  {
    "id": "d-gender-185",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Ofen“ に付く定冠詞（1格）は？",
    "translation": "Ofen ＝ オーブン",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Ofen（オーブン）は男性名詞 → der Ofen。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-186",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Frühstück“ に付く定冠詞（1格）は？",
    "translation": "Frühstück ＝ 朝食",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Frühstück（朝食）は中性名詞 → das Frühstück。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-187",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Wurst“ に付く定冠詞（1格）は？",
    "translation": "Wurst ＝ ソーセージ",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Wurst（ソーセージ）は女性名詞 → die Wurst。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-188",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Schinken“ に付く定冠詞（1格）は？",
    "translation": "Schinken ＝ ハム",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Schinken（ハム）は男性名詞 → der Schinken。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-189",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Käse“ に付く定冠詞（1格）は？",
    "translation": "Käse ＝ チーズ",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Käse（チーズ）は男性名詞 → der Käse。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-190",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Salat“ に付く定冠詞（1格）は？",
    "translation": "Salat ＝ サラダ",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Salat（サラダ）は男性名詞 → der Salat。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-191",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Stuhl“ に付く定冠詞（1格）は？",
    "translation": "Stuhl ＝ 椅子",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Stuhl（椅子）は男性名詞 → der Stuhl。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-192",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Wand“ に付く定冠詞（1格）は？",
    "translation": "Wand ＝ 壁",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Wand（壁）は女性名詞 → die Wand。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-193",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Meer“ に付く定冠詞（1格）は？",
    "translation": "Meer ＝ 海",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Meer（海）は中性名詞 → das Meer。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-194",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Theater“ に付く定冠詞（1格）は？",
    "translation": "Theater ＝ 劇場",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Theater（劇場）は中性名詞 → das Theater。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-195",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "prompt": "名詞 „Hauptbahnhof“ に付く定冠詞（1格）は？",
    "translation": "Hauptbahnhof ＝ 中央駅",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Hauptbahnhof（中央駅）は男性名詞 → der Hauptbahnhof。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-196",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "prompt": "名詞 „Urlaub“ に付く定冠詞（1格）は？",
    "translation": "Urlaub ＝ 休暇",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Urlaub（休暇）は男性名詞 → der Urlaub。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-197",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "prompt": "名詞 „Reise“ に付く定冠詞（1格）は？",
    "translation": "Reise ＝ 旅行",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Reise（旅行）は女性名詞 → die Reise。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-198",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "prompt": "名詞 „Strand“ に付く定冠詞（1格）は？",
    "translation": "Strand ＝ 海岸",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Strand（海岸）は男性名詞 → der Strand。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-199",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "prompt": "名詞 „Ausflug“ に付く定冠詞（1格）は？",
    "translation": "Ausflug ＝ 遠足",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Ausflug（遠足）は男性名詞 → der Ausflug。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-200",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "prompt": "名詞 „Rathaus“ に付く定冠詞（1格）は？",
    "translation": "Rathaus ＝ 市役所",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Rathaus（市役所）は中性名詞 → das Rathaus。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  },
  {
    "id": "d-gender-201",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "prompt": "名詞 „Bericht“ に付く定冠詞（1格）は？",
    "translation": "Bericht ＝ 報告書",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein で終わる語は中性（das）。-ei は女性（die）が多い。",
    "explanation": "Bericht（報告書）は男性名詞 → der Bericht。",
    "tip": "性に規則は少ない。定冠詞ごと「der/die/das ＋ 名詞」で音で覚えるのが近道。"
  }
];
