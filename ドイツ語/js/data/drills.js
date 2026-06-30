/**
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

const DRILLS = [
  {
    "id": "d-verb-case-001",
    "theme": "verb-case",
    "lektion": 1,
    "category": "動詞の格支配",
    "ja": "動詞 „lernen“（学ぶ）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "lernen（学ぶ）は 4格。例: Ich lerne Deutsch.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-002",
    "theme": "verb-case",
    "lektion": 1,
    "category": "動詞の格支配",
    "ja": "動詞 „trinken“（飲む）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "trinken（飲む）は 4格。例: Ich trinke Kaffee.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-003",
    "theme": "verb-case",
    "lektion": 2,
    "category": "動詞の格支配",
    "ja": "動詞 „haben“（持つ）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "haben（持つ）は 4格。例: Ich habe Hunger.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-004",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „bringen“（持ってくる）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "bringen（持ってくる）は 3格＋4格。例: Der Sohn bringt der Mutter eine Zeitschrift.",
    "tip": "「（人）に（物）を」型は 3格＋4格（bringen/schenken/zeigen/erzählen/schreiben）。"
  },
  {
    "id": "d-verb-case-005",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „schreiben“（書く）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "schreiben（書く）は 3格＋4格。例: Sie schreibt der Tante einen Brief.",
    "tip": "「（人）に（物）を」型は 3格＋4格（bringen/schenken/zeigen/erzählen/schreiben）。"
  },
  {
    "id": "d-verb-case-006",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „kennen“（知っている）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "kennen（知っている）は 4格。例: Ich kenne den Mann sehr gut.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-007",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „fragen“（質問する）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "fragen（質問する）は 4格。例: Der Lehrer fragt einen Schüler.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-008",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „antworten“（答える）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "antworten（答える）は 3格。例: Der Schüler antwortet dem Lehrer.",
    "tip": "3格をとる動詞: helfen/danken/antworten/gehören/gefallen。"
  },
  {
    "id": "d-verb-case-009",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „erzählen“（語る）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "erzählen（語る）は 3格＋4格。例: Der Vater erzählt den Kindern ein Märchen.",
    "tip": "「（人）に（物）を」型は 3格＋4格（bringen/schenken/zeigen/erzählen/schreiben）。"
  },
  {
    "id": "d-verb-case-010",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „besuchen“（訪問する）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "besuchen（訪問する）は 4格。例: Ich besuche eine Freundin.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-011",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „gehören“（（〜の）ものである）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "gehören（（〜の）ものである）は 3格。例: Die Handtasche gehört der Frau.",
    "tip": "3格をとる動詞: helfen/danken/antworten/gehören/gefallen。"
  },
  {
    "id": "d-verb-case-012",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „zeigen“（見せる）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "zeigen（見せる）は 3格＋4格。例: Das Mädchen zeigt einer Freundin ein Foto.",
    "tip": "「（人）に（物）を」型は 3格＋4格（bringen/schenken/zeigen/erzählen/schreiben）。"
  },
  {
    "id": "d-verb-case-013",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „schenken“（贈る）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 2,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "schenken（贈る）は 3格＋4格。例: Ich schenke dem Kind das Buch.",
    "tip": "「（人）に（物）を」型は 3格＋4格（bringen/schenken/zeigen/erzählen/schreiben）。"
  },
  {
    "id": "d-verb-case-014",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „danken“（感謝する）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "danken（感謝する）は 3格。例: Sie dankt den Kindern.",
    "tip": "3格をとる動詞: helfen/danken/antworten/gehören/gefallen。"
  },
  {
    "id": "d-verb-case-015",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „loben“（褒める）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "loben（褒める）は 4格。例: Ich lobe den Mann.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-016",
    "theme": "verb-case",
    "lektion": 3,
    "category": "動詞の格支配",
    "ja": "動詞 „lieben“（愛する）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "lieben（愛する）は 4格。例: Er liebt die Tochter eines Arztes.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-017",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „tragen“（運ぶ・着る）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "tragen（運ぶ・着る）は 4格。例: Otto trägt einen Bart.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-018",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „sprechen“（話す）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "sprechen（話す）は 4格。例: Sie spricht gut Deutsch.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-019",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „essen“（食べる）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "essen（食べる）は 4格。例: Anna isst gern Fisch.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-020",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „helfen“（手伝う）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "helfen（手伝う）は 3格。例: Ich helfe meiner Schwester.",
    "tip": "3格をとる動詞: helfen/danken/antworten/gehören/gefallen。"
  },
  {
    "id": "d-verb-case-021",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „treffen“（会う）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "treffen（会う）は 4格。例: Maria trifft den Freund.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-022",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „sehen“（見る）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "sehen（見る）は 4格。例: Siehst du die Kirche dort?",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-023",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „lesen“（読む）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "lesen（読む）は 4格。例: Ich lese einen Krimi.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-024",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „nehmen“（取る・（乗り物に）乗る）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "nehmen（取る・（乗り物に）乗る）は 4格。例: Du nimmst den Bus.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-025",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „wissen“（（知識として）知っている）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "wissen（（知識として）知っている）は 4格。例: Ich weiß die Adresse nicht.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-verb-case-026",
    "theme": "verb-case",
    "lektion": 4,
    "category": "動詞の格支配",
    "ja": "動詞 „werden“（〜になる）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 3,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "werden（〜になる）は 1格（補語）。例: Franz wird später Lehrer.",
    "tip": "sein・werden は主語と同じ1格の補語をとる。"
  },
  {
    "id": "d-verb-case-027",
    "theme": "verb-case",
    "lektion": 5,
    "category": "動詞の格支配",
    "ja": "動詞 „gefallen“（気に入る）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 0,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "gefallen（気に入る）は 3格。例: Die Handtasche gefällt meiner Mutter.",
    "tip": "3格をとる動詞: helfen/danken/antworten/gehören/gefallen。"
  },
  {
    "id": "d-verb-case-028",
    "theme": "verb-case",
    "lektion": 6,
    "category": "動詞の格支配",
    "ja": "動詞 „legen“（置く・横にする（他動詞））が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格（補語）"
    ],
    "answer": 1,
    "hint": "3格＝「〜に」、4格＝「〜を」。",
    "exp": "legen（置く・横にする（他動詞））は 4格。例: Otto legt seine Tasche auf den Stuhl.",
    "tip": "多くの他動詞は4格。迷ったらまず4格を疑う。"
  },
  {
    "id": "d-prep-case-029",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „aus“（〜の中から、〜出身の）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "aus は 3格支配。",
    "tip": "3格支配は「aus・bei・mit・nach・seit・von・zu」の7つ。"
  },
  {
    "id": "d-prep-case-030",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „bei“（〜のもとで、〜の際に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "bei は 3格支配。",
    "tip": "3格支配は「aus・bei・mit・nach・seit・von・zu」の7つ。"
  },
  {
    "id": "d-prep-case-031",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „mit“（〜と一緒に、〜を使って）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "mit は 3格支配。",
    "tip": "3格支配は「aus・bei・mit・nach・seit・von・zu」の7つ。"
  },
  {
    "id": "d-prep-case-032",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „nach“（〜の後で、〜へ（地名））が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "nach は 3格支配。",
    "tip": "3格支配は「aus・bei・mit・nach・seit・von・zu」の7つ。"
  },
  {
    "id": "d-prep-case-033",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „seit“（〜以来）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "seit は 3格支配。",
    "tip": "3格支配は「aus・bei・mit・nach・seit・von・zu」の7つ。"
  },
  {
    "id": "d-prep-case-034",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „von“（〜から、〜の）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "von は 3格支配。",
    "tip": "3格支配は「aus・bei・mit・nach・seit・von・zu」の7つ。"
  },
  {
    "id": "d-prep-case-035",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „zu“（〜へ、〜のために）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 0,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "zu は 3格支配。",
    "tip": "3格支配は「aus・bei・mit・nach・seit・von・zu」の7つ。"
  },
  {
    "id": "d-prep-case-036",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „bis“（〜まで）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "bis は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-037",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „für“（〜のために）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "für は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-038",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „gegen“（〜に対して、〜頃）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "gegen は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-039",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „ohne“（〜なしに）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "ohne は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-040",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „um“（〜の周りに、〜時に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 1,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "um は 4格支配。",
    "tip": "4格支配は「bis・für・gegen・ohne・um」の5つ。"
  },
  {
    "id": "d-prep-case-041",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „an“（〜のきわに）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "an は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-042",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „auf“（〜の上に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "auf は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-043",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „hinter“（〜の後ろに）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "hinter は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-044",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „in“（〜の中に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "in は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-045",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „neben“（〜の横に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "neben は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-046",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „über“（〜の上方に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "über は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-047",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „unter“（〜の下に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "unter は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-048",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „vor“（〜の前に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "vor は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-049",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞の格支配",
    "ja": "前置詞 „zwischen“（〜の間に）が支配する格は？",
    "choices": [
      "3格支配",
      "4格支配",
      "3・4格支配",
      "2格支配"
    ],
    "answer": 2,
    "hint": "3格支配＝aus/bei/mit/nach/seit/von/zu、4格支配＝bis/für/gegen/ohne/um。",
    "exp": "zwischen は 3・4格支配。場所（静止）なら3格、方向（移動）なら4格。",
    "tip": "3・4格支配は an/auf/hinter/in/neben/über/unter/vor/zwischen の9つ。"
  },
  {
    "id": "d-prep-case-050",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "融合形 „am“ は何の短縮形？",
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
    "exp": "am = an + dem。例: Erika bleibt am Meer.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる（ans/ins）は4格（方向）。"
  },
  {
    "id": "d-prep-case-051",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "融合形 „im“ は何の短縮形？",
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
    "exp": "im = in + dem。例: Sie bleibt im Bett.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる（ans/ins）は4格（方向）。"
  },
  {
    "id": "d-prep-case-052",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "融合形 „zum“ は何の短縮形？",
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
    "exp": "zum = zu + dem。例: Er geht zum Bahnhof.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる（ans/ins）は4格（方向）。"
  },
  {
    "id": "d-prep-case-053",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "融合形 „zur“ は何の短縮形？",
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
    "exp": "zur = zu + der。例: Wir gehen zur Bäckerei.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる（ans/ins）は4格（方向）。"
  },
  {
    "id": "d-prep-case-054",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "融合形 „ans“ は何の短縮形？",
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
    "exp": "ans = an + das。例: Anna fährt ans Meer.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる（ans/ins）は4格（方向）。"
  },
  {
    "id": "d-prep-case-055",
    "theme": "prep-case",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "融合形 „ins“ は何の短縮形？",
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
    "exp": "ins = in + das。例: Er geht ins Theater.",
    "tip": "-m で終わる融合形（am/im/zum）は3格、-s で終わる（ans/ins）は4格（方向）。"
  },
  {
    "id": "d-prep-meaning-056",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „aus“ の意味は？",
    "choices": [
      "〜の中から、〜出身の",
      "〜の間に",
      "〜まで",
      "〜の後ろに"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "aus ＝「〜の中から、〜出身の」（3格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-057",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „bei“ の意味は？",
    "choices": [
      "〜のもとで、〜の際に",
      "〜の中に",
      "〜と一緒に、〜を使って",
      "〜に対して、〜頃"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "bei ＝「〜のもとで、〜の際に」（3格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-058",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „mit“ の意味は？",
    "choices": [
      "〜と一緒に、〜を使って",
      "〜の中から、〜出身の",
      "〜のために",
      "〜の中に"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "mit ＝「〜と一緒に、〜を使って」（3格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-059",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „nach“ の意味は？",
    "choices": [
      "〜の後で、〜へ（地名）",
      "〜の中から、〜出身の",
      "〜のために",
      "〜の中に"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "nach ＝「〜の後で、〜へ（地名）」（3格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-060",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „seit“ の意味は？",
    "choices": [
      "〜以来",
      "〜の下に",
      "〜から、〜の",
      "〜のきわに"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "seit ＝「〜以来」（3格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-061",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „von“ の意味は？",
    "choices": [
      "〜から、〜の",
      "〜なしに",
      "〜の上方に",
      "〜の後で、〜へ（地名）"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "von ＝「〜から、〜の」（3格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-062",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „zu“ の意味は？",
    "choices": [
      "〜へ、〜のために",
      "〜の間に",
      "〜まで",
      "〜の後ろに"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "zu ＝「〜へ、〜のために」（3格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-063",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „bis“ の意味は？",
    "choices": [
      "〜まで",
      "〜に対して、〜頃",
      "〜の横に",
      "〜と一緒に、〜を使って"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "bis ＝「〜まで」（4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-064",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „für“ の意味は？",
    "choices": [
      "〜のために",
      "〜に対して、〜頃",
      "〜の横に",
      "〜と一緒に、〜を使って"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "für ＝「〜のために」（4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-065",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „gegen“ の意味は？",
    "choices": [
      "〜に対して、〜頃",
      "〜の前に",
      "〜から、〜の",
      "〜の上に"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "gegen ＝「〜に対して、〜頃」（4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-066",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „ohne“ の意味は？",
    "choices": [
      "〜なしに",
      "〜の上方に",
      "〜の後で、〜へ（地名）",
      "〜の周りに、〜時に"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "ohne ＝「〜なしに」（4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-067",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „um“ の意味は？",
    "choices": [
      "〜の周りに、〜時に",
      "〜の上方に",
      "〜の後で、〜へ（地名）",
      "〜なしに"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "um ＝「〜の周りに、〜時に」（4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-068",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „an“ の意味は？",
    "choices": [
      "〜のきわに",
      "〜の下に",
      "〜以来",
      "〜の周りに、〜時に"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "an ＝「〜のきわに」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-069",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „auf“ の意味は？",
    "choices": [
      "〜の上に",
      "〜へ、〜のために",
      "〜の後ろに",
      "〜の中から、〜出身の"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "auf ＝「〜の上に」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-070",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „hinter“ の意味は？",
    "choices": [
      "〜の後ろに",
      "〜の中から、〜出身の",
      "〜まで",
      "〜の中に"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "hinter ＝「〜の後ろに」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-071",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „in“ の意味は？",
    "choices": [
      "〜の中に",
      "〜から、〜の",
      "〜のきわに",
      "〜の間に"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "in ＝「〜の中に」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-072",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „neben“ の意味は？",
    "choices": [
      "〜の横に",
      "〜の中から、〜出身の",
      "〜まで",
      "〜の後ろに"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "neben ＝「〜の横に」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-073",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „über“ の意味は？",
    "choices": [
      "〜の上方に",
      "〜の中に",
      "〜と一緒に、〜を使って",
      "〜に対して、〜頃"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "über ＝「〜の上方に」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-074",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „unter“ の意味は？",
    "choices": [
      "〜の下に",
      "〜のために",
      "〜の中に",
      "〜と一緒に、〜を使って"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "unter ＝「〜の下に」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-075",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „vor“ の意味は？",
    "choices": [
      "〜の前に",
      "〜の上に",
      "〜の中から、〜出身の",
      "〜まで"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "vor ＝「〜の前に」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-prep-meaning-076",
    "theme": "prep-meaning",
    "lektion": 6,
    "category": "前置詞の意味",
    "ja": "前置詞 „zwischen“ の意味は？",
    "choices": [
      "〜の間に",
      "〜に対して、〜頃",
      "〜の横に",
      "〜の後で、〜へ（地名）"
    ],
    "answer": 0,
    "hint": "前置詞は意味と格支配をセットで覚える。",
    "exp": "zwischen ＝「〜の間に」（3・4格支配）。",
    "tip": "mit＝〜と一緒に、für＝〜のために、ohne＝〜なしに、bei＝〜のもとで、など頻出語から。"
  },
  {
    "id": "d-modal-077",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 „dürfen“ の意味は？",
    "choices": [
      "〜してもよい（許可）",
      "〜したい（願望）",
      "〜できる（能力・可能）",
      "〜を好む"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "exp": "dürfen ＝「〜してもよい（許可）」。",
    "tip": "wollen（自分の意志）↔sollen（他者の意志）、müssen（必要）↔dürfen（許可）。"
  },
  {
    "id": "d-modal-078",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 „können“ の意味は？",
    "choices": [
      "〜できる（能力・可能）",
      "〜するつもりだ（意志）",
      "〜したい（願望）",
      "〜してもよい（許可）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "exp": "können ＝「〜できる（能力・可能）」。",
    "tip": "wollen（自分の意志）↔sollen（他者の意志）、müssen（必要）↔dürfen（許可）。"
  },
  {
    "id": "d-modal-079",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 „mögen“ の意味は？",
    "choices": [
      "〜を好む",
      "〜すべきだ",
      "〜するつもりだ（意志）",
      "〜したい（願望）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "exp": "mögen ＝「〜を好む」。",
    "tip": "wollen（自分の意志）↔sollen（他者の意志）、müssen（必要）↔dürfen（許可）。"
  },
  {
    "id": "d-modal-080",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 „müssen“ の意味は？",
    "choices": [
      "〜しなければならない",
      "〜するつもりだ（意志）",
      "〜したい（願望）",
      "〜してもよい（許可）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "exp": "müssen ＝「〜しなければならない」。",
    "tip": "wollen（自分の意志）↔sollen（他者の意志）、müssen（必要）↔dürfen（許可）。"
  },
  {
    "id": "d-modal-081",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 „sollen“ の意味は？",
    "choices": [
      "〜すべきだ",
      "〜したい（願望）",
      "〜してもよい（許可）",
      "〜できる（能力・可能）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "exp": "sollen ＝「〜すべきだ」。",
    "tip": "wollen（自分の意志）↔sollen（他者の意志）、müssen（必要）↔dürfen（許可）。"
  },
  {
    "id": "d-modal-082",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 „wollen“ の意味は？",
    "choices": [
      "〜するつもりだ（意志）",
      "〜しなければならない",
      "〜すべきだ",
      "〜したい（願望）"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "exp": "wollen ＝「〜するつもりだ（意志）」。",
    "tip": "wollen（自分の意志）↔sollen（他者の意志）、müssen（必要）↔dürfen（許可）。"
  },
  {
    "id": "d-modal-083",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 „möchte“ の意味は？",
    "choices": [
      "〜したい（願望）",
      "〜できる（能力・可能）",
      "〜を好む",
      "〜しなければならない"
    ],
    "answer": 0,
    "hint": "können=できる, müssen=ねばならない, wollen=つもり, dürfen=してよい, sollen=すべき。",
    "exp": "möchte ＝「〜したい（願望）」。",
    "tip": "wollen（自分の意志）↔sollen（他者の意志）、müssen（必要）↔dürfen（許可）。"
  },
  {
    "id": "d-modal-084",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "„dürfen“ の er/sie/es の現在形は？",
    "choices": [
      "darf",
      "soll",
      "kann",
      "muss"
    ],
    "answer": 0,
    "hint": "話法の助動詞は ich と er/sie/es が同形で、単数は母音が変わるものが多い。",
    "exp": "er darf（ich も同形）。",
    "tip": "ich/er は語尾なし（muss, kann, will…）。複数は不定詞と同形。"
  },
  {
    "id": "d-modal-085",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "„können“ の er/sie/es の現在形は？",
    "choices": [
      "kann",
      "will",
      "mag",
      "soll"
    ],
    "answer": 0,
    "hint": "話法の助動詞は ich と er/sie/es が同形で、単数は母音が変わるものが多い。",
    "exp": "er kann（ich も同形）。",
    "tip": "ich/er は語尾なし（muss, kann, will…）。複数は不定詞と同形。"
  },
  {
    "id": "d-modal-086",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "„mögen“ の er/sie/es の現在形は？",
    "choices": [
      "mag",
      "will",
      "kann",
      "soll"
    ],
    "answer": 0,
    "hint": "話法の助動詞は ich と er/sie/es が同形で、単数は母音が変わるものが多い。",
    "exp": "er mag（ich も同形）。",
    "tip": "ich/er は語尾なし（muss, kann, will…）。複数は不定詞と同形。"
  },
  {
    "id": "d-modal-087",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "„müssen“ の er/sie/es の現在形は？",
    "choices": [
      "muss",
      "kann",
      "soll",
      "darf"
    ],
    "answer": 0,
    "hint": "話法の助動詞は ich と er/sie/es が同形で、単数は母音が変わるものが多い。",
    "exp": "er muss（ich も同形）。",
    "tip": "ich/er は語尾なし（muss, kann, will…）。複数は不定詞と同形。"
  },
  {
    "id": "d-modal-088",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "„sollen“ の er/sie/es の現在形は？",
    "choices": [
      "soll",
      "mag",
      "will",
      "kann"
    ],
    "answer": 0,
    "hint": "話法の助動詞は ich と er/sie/es が同形で、単数は母音が変わるものが多い。",
    "exp": "er soll（ich も同形）。",
    "tip": "ich/er は語尾なし（muss, kann, will…）。複数は不定詞と同形。"
  },
  {
    "id": "d-modal-089",
    "theme": "modal",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "„wollen“ の er/sie/es の現在形は？",
    "choices": [
      "will",
      "darf",
      "mag",
      "soll"
    ],
    "answer": 0,
    "hint": "話法の助動詞は ich と er/sie/es が同形で、単数は母音が変わるものが多い。",
    "exp": "er will（ich も同形）。",
    "tip": "ich/er は語尾なし（muss, kann, will…）。複数は不定詞と同形。"
  },
  {
    "id": "d-gender-090",
    "theme": "gender",
    "lektion": 1,
    "category": "名詞の性",
    "ja": "„___ Roman“（小説）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Roman（小説）は der Roman。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-091",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Student“（大学生）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Student（大学生）は der Student。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-092",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Lehrer“（教師）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Lehrer（教師）は der Lehrer。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-093",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Arzt“（医者）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Arzt（医者）は der Arzt。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-094",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Bier“（ビール）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Bier（ビール）は das Bier。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-095",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Wein“（ワイン）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Wein（ワイン）は der Wein。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-096",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Hund“（犬）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Hund（犬）は der Hund。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-097",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Katze“（猫）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Katze（猫）は die Katze。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-098",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Mädchen“（少女）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Mädchen（少女）は das Mädchen。",
    "tip": "-chen で終わる名詞は必ず中性（das Mädchen, das Brötchen）。"
  },
  {
    "id": "d-gender-099",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Pferd“（馬）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Pferd（馬）は das Pferd。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-100",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Vater“（父）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Vater（父）は der Vater。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-101",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Mutter“（母）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Mutter（母）は die Mutter。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-102",
    "theme": "gender",
    "lektion": 2,
    "category": "名詞の性",
    "ja": "„___ Kind“（子供）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Kind（子供）は das Kind。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-103",
    "theme": "gender",
    "lektion": 4,
    "category": "名詞の性",
    "ja": "„___ Tasche“（バッグ）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Tasche（バッグ）は die Tasche。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-104",
    "theme": "gender",
    "lektion": 4,
    "category": "名詞の性",
    "ja": "„___ Schüler“（生徒）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Schüler（生徒）は der Schüler。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-105",
    "theme": "gender",
    "lektion": 4,
    "category": "名詞の性",
    "ja": "„___ Krimi“（推理小説）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Krimi（推理小説）は der Krimi。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-106",
    "theme": "gender",
    "lektion": 4,
    "category": "名詞の性",
    "ja": "„___ Tablette“（錠剤）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Tablette（錠剤）は die Tablette。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-107",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "ja": "„___ Regenschirm“（傘）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Regenschirm（傘）は der Regenschirm。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-108",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "ja": "„___ Ring“（指輪）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Ring（指輪）は der Ring。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-109",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "ja": "„___ Pullover“（セーター）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Pullover（セーター）は der Pullover。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-110",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "ja": "„___ Zahnarzt“（歯科医）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Zahnarzt（歯科医）は der Zahnarzt。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-111",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "ja": "„___ Kartenspiel“（カードゲーム）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Kartenspiel（カードゲーム）は das Kartenspiel。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-112",
    "theme": "gender",
    "lektion": 5,
    "category": "名詞の性",
    "ja": "„___ Professor“（教授）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Professor（教授）は der Professor。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-113",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Bäckerei“（パン屋）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Bäckerei（パン屋）は die Bäckerei。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-114",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Brot“（パン）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Brot（パン）は das Brot。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-115",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Brötchen“（小型パン）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Brötchen（小型パン）は das Brötchen。",
    "tip": "-chen で終わる名詞は必ず中性（das Mädchen, das Brötchen）。"
  },
  {
    "id": "d-gender-116",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Ofen“（オーブン）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Ofen（オーブン）は der Ofen。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-117",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Frühstück“（朝食）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Frühstück（朝食）は das Frühstück。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-118",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Wurst“（ソーセージ）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Wurst（ソーセージ）は die Wurst。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-119",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Käse“（チーズ）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Käse（チーズ）は der Käse。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-120",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Salat“（サラダ）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Salat（サラダ）は der Salat。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-121",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Stuhl“（椅子）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Stuhl（椅子）は der Stuhl。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-122",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Wand“（壁）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Wand（壁）は die Wand。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-123",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Meer“（海）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Meer（海）は das Meer。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-124",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Theater“（劇場）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Theater（劇場）は das Theater。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-125",
    "theme": "gender",
    "lektion": 6,
    "category": "名詞の性",
    "ja": "„___ Hauptbahnhof“（中央駅）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Hauptbahnhof（中央駅）は der Hauptbahnhof。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-126",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "ja": "„___ Urlaub“（休暇）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Urlaub（休暇）は der Urlaub。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-127",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "ja": "„___ Reise“（旅行）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 1,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Reise（旅行）は die Reise。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-128",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "ja": "„___ Strand“（海岸）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Strand（海岸）は der Strand。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-129",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "ja": "„___ Ausflug“（遠足）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Ausflug（遠足）は der Ausflug。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-130",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "ja": "„___ Rathaus“（市役所）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 2,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Rathaus（市役所）は das Rathaus。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-gender-131",
    "theme": "gender",
    "lektion": 7,
    "category": "名詞の性",
    "ja": "„___ Bericht“（報告書）に付く定冠詞（1格）は？",
    "choices": [
      "der",
      "die",
      "das"
    ],
    "answer": 0,
    "hint": "-chen / -lein は中性（das）。-ei は女性（die）が多い。",
    "exp": "Bericht（報告書）は der Bericht。",
    "tip": "名詞は「der/die/das ＋語」で音ごと覚えるのが近道。"
  },
  {
    "id": "d-vocab-132",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „lernen“ の意味は？",
    "choices": [
      "学ぶ",
      "愛する",
      "読む",
      "行く"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "lernen ＝「学ぶ」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-133",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „trinken“ の意味は？",
    "choices": [
      "飲む",
      "（乗り物で）行く",
      "持つ",
      "訪問する"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "trinken ＝「飲む」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-134",
    "theme": "vocab",
    "lektion": 2,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „haben“ の意味は？",
    "choices": [
      "持つ",
      "気に入る",
      "働く",
      "知っている"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "haben ＝「持つ」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-135",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „bringen“ の意味は？",
    "choices": [
      "持ってくる",
      "運ぶ・着る",
      "取る・（乗り物に）乗る",
      "（乗り物で）行く"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "bringen ＝「持ってくる」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-136",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „schreiben“ の意味は？",
    "choices": [
      "書く",
      "会う",
      "置く・横にする（他動詞）",
      "旅行する"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "schreiben ＝「書く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-137",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „kennen“ の意味は？",
    "choices": [
      "知っている",
      "置いてある・横になっている（自動詞）",
      "答える",
      "褒める"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "kennen ＝「知っている」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-138",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „fragen“ の意味は？",
    "choices": [
      "質問する",
      "働く",
      "書く",
      "贈る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "fragen ＝「質問する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-139",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „antworten“ の意味は？",
    "choices": [
      "答える",
      "（知識として）知っている",
      "飛ぶ・飛行機で行く",
      "持つ"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "antworten ＝「答える」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-140",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „erzählen“ の意味は？",
    "choices": [
      "語る",
      "働く",
      "書く",
      "贈る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "erzählen ＝「語る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-141",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „besuchen“ の意味は？",
    "choices": [
      "訪問する",
      "飲む",
      "語る",
      "運ぶ・着る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "besuchen ＝「訪問する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-142",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „gehören“ の意味は？",
    "choices": [
      "（〜の）ものである",
      "旅行する",
      "知っている",
      "感謝する"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "gehören ＝「（〜の）ものである」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-143",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „zeigen“ の意味は？",
    "choices": [
      "見せる",
      "持つ",
      "訪問する",
      "話す"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "zeigen ＝「見せる」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-144",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „schenken“ の意味は？",
    "choices": [
      "贈る",
      "知っている",
      "感謝する",
      "会う"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "schenken ＝「贈る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-145",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „danken“ の意味は？",
    "choices": [
      "感謝する",
      "知っている",
      "贈る",
      "会う"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "danken ＝「感謝する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-146",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „loben“ の意味は？",
    "choices": [
      "褒める",
      "感謝する",
      "見る",
      "来る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "loben ＝「褒める」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-147",
    "theme": "vocab",
    "lektion": 3,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „lieben“ の意味は？",
    "choices": [
      "愛する",
      "旅行する",
      "知っている",
      "贈る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "lieben ＝「愛する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-148",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „tragen“ の意味は？",
    "choices": [
      "運ぶ・着る",
      "見せる",
      "手伝う",
      "気に入る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "tragen ＝「運ぶ・着る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-149",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „sprechen“ の意味は？",
    "choices": [
      "話す",
      "置く・横にする（他動詞）",
      "旅行する",
      "知っている"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "sprechen ＝「話す」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-150",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „essen“ の意味は？",
    "choices": [
      "食べる",
      "取る・（乗り物に）乗る",
      "（乗り物で）行く",
      "飲む"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "essen ＝「食べる」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-151",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „helfen“ の意味は？",
    "choices": [
      "手伝う",
      "置く・横にする（他動詞）",
      "旅行する",
      "知っている"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "helfen ＝「手伝う」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-152",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „treffen“ の意味は？",
    "choices": [
      "会う",
      "働く",
      "書く",
      "見せる"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "treffen ＝「会う」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-153",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „sehen“ の意味は？",
    "choices": [
      "見る",
      "読む",
      "行く",
      "学ぶ"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "sehen ＝「見る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-154",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „lesen“ の意味は？",
    "choices": [
      "読む",
      "愛する",
      "取る・（乗り物に）乗る",
      "（乗り物で）行く"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "lesen ＝「読む」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-155",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „nehmen“ の意味は？",
    "choices": [
      "取る・（乗り物に）乗る",
      "気に入る",
      "働く",
      "書く"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "nehmen ＝「取る・（乗り物に）乗る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-156",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „wissen“ の意味は？",
    "choices": [
      "（知識として）知っている",
      "（〜の）ものである",
      "話す",
      "〜になる"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "wissen ＝「（知識として）知っている」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-157",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „werden“ の意味は？",
    "choices": [
      "〜になる",
      "学ぶ",
      "答える",
      "褒める"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "werden ＝「〜になる」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-158",
    "theme": "vocab",
    "lektion": 5,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „gefallen“ の意味は？",
    "choices": [
      "気に入る",
      "（乗り物で）行く",
      "飲む",
      "語る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "gefallen ＝「気に入る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-159",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „legen“ の意味は？",
    "choices": [
      "置く・横にする（他動詞）",
      "旅行する",
      "知っている",
      "贈る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "legen ＝「置く・横にする（他動詞）」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-160",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „kommen“ の意味は？",
    "choices": [
      "来る",
      "話す",
      "（知識として）知っている",
      "泳ぐ"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "kommen ＝「来る」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-161",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „gehen“ の意味は？",
    "choices": [
      "行く",
      "（乗り物で）行く",
      "飲む",
      "語る"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "gehen ＝「行く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-162",
    "theme": "vocab",
    "lektion": 4,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „fahren“ の意味は？",
    "choices": [
      "（乗り物で）行く",
      "来る",
      "学ぶ",
      "答える"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "fahren ＝「（乗り物で）行く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-163",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „fliegen“ の意味は？",
    "choices": [
      "飛ぶ・飛行機で行く",
      "手伝う",
      "気に入る",
      "旅行する"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "fliegen ＝「飛ぶ・飛行機で行く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-164",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „schwimmen“ の意味は？",
    "choices": [
      "泳ぐ",
      "語る",
      "愛する",
      "読む"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "schwimmen ＝「泳ぐ」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-165",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „arbeiten“ の意味は？",
    "choices": [
      "働く",
      "読む",
      "行く",
      "飲む"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "arbeiten ＝「働く」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-166",
    "theme": "vocab",
    "lektion": 1,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „reisen“ の意味は？",
    "choices": [
      "旅行する",
      "見る",
      "来る",
      "学ぶ"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "reisen ＝「旅行する」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  },
  {
    "id": "d-vocab-167",
    "theme": "vocab",
    "lektion": 6,
    "category": "単語の意味（動詞）",
    "ja": "動詞 „liegen“ の意味は？",
    "choices": [
      "置いてある・横になっている（自動詞）",
      "語る",
      "愛する",
      "読む"
    ],
    "answer": 0,
    "hint": "動詞の基本義を思い出す。",
    "exp": "liegen ＝「置いてある・横になっている（自動詞）」。",
    "tip": "動詞は「意味＋格支配」をセットで覚えると作文で迷わない。"
  }
];
