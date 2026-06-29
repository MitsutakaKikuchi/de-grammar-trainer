/**
 * ドイツ語 Lektion 1-8 の問題データ（自動生成: ドイツ語初級/js/gen_questions.js）。
 * 出典: ドイツ語テキスト_Lektion1-7_学習資料.md の各Lektion練習問題(Übung)・例文。
 * 形式:
 *   - 組み立て式 … chips（"a / b / c" を並び替え）/ tiles（[固定文字列 | {forms,answer}] をタップで語形変化）
 *   - 択一式     … choices（配列）＋ answer（0始まりのindex）
 * 各問: id / lektion / category / ja(日本語訳=問題文) / (chips|tiles|choices+answer) / sentence(正解文) / hint / exp / tip
 *   冠詞を選ぶ問題は ja に名詞の性を明示する（性は与え、格に応じた冠詞を選ばせる）。
 *   L7は話法の助動詞まで（未来形・従属接続詞は含めない）。L8は格支配の総合（択一）。
 * 手で編集せず、元データを直して gen_questions.js を再実行すること。
 */
const QUESTIONS = [
  {
    "id": "l1-01",
    "lektion": 1,
    "category": "動詞の人称変化",
    "ja": "君は何を飲むの？（trinken＝飲む）",
    "tiles": [
      "Was",
      {
        "forms": [
          "trinke",
          "trinkst",
          "trinkt"
        ],
        "answer": "trinkst"
      },
      "du"
    ],
    "sentence": "Was trinkst du?",
    "hint": "du の語尾は -st。",
    "exp": "du trinkst（語幹 trink- ＋ -st）。",
    "tip": "人称語尾: ich-e / du-st / er-t / wir-en / ihr-t / sie-en。"
  },
  {
    "id": "l1-02",
    "lektion": 1,
    "category": "動詞の人称変化",
    "ja": "私はコーヒーを飲みます。（trinken）",
    "tiles": [
      "Ich",
      {
        "forms": [
          "trinke",
          "trinkst",
          "trinkt"
        ],
        "answer": "trinke"
      },
      "Kaffee"
    ],
    "sentence": "Ich trinke Kaffee.",
    "hint": "ich の語尾は -e。",
    "exp": "ich trinke（-e）。",
    "tip": "主語に合わせて語尾を変える。"
  },
  {
    "id": "l1-03",
    "lektion": 1,
    "category": "動詞の人称変化",
    "ja": "ミュラーさんはとても上手に泳ぎます。（schwimmen＝泳ぐ／3人称単数）",
    "tiles": [
      "Frau Müller",
      {
        "forms": [
          "schwimme",
          "schwimmst",
          "schwimmt"
        ],
        "answer": "schwimmt"
      },
      "sehr",
      "gut"
    ],
    "sentence": "Frau Müller schwimmt sehr gut.",
    "hint": "er/sie/es の語尾は -t。",
    "exp": "3人称単数 → schwimmt。",
    "tip": "人名・Frau/Herr＋名前は er/sie/es 扱い。"
  },
  {
    "id": "l1-04",
    "lektion": 1,
    "category": "動詞の人称変化",
    "ja": "君はハンブルク出身なの？（kommen＝来る／aus＋3格で「〜出身」）",
    "tiles": [
      {
        "forms": [
          "Komme",
          "Kommst",
          "Kommt"
        ],
        "answer": "Kommst"
      },
      "du",
      "aus",
      "Hamburg"
    ],
    "sentence": "Kommst du aus Hamburg?",
    "hint": "疑問文は〈定動詞＋主語〉。du → -st。",
    "exp": "Kommst du …?（du の -st）。",
    "tip": "決定疑問文は動詞が文頭。"
  },
  {
    "id": "l1-05",
    "lektion": 1,
    "category": "動詞の人称変化",
    "ja": "君は熱心に働くね。（arbeiten＝働く）",
    "tiles": [
      "Du",
      {
        "forms": [
          "arbeite",
          "arbeitest",
          "arbeitet"
        ],
        "answer": "arbeitest"
      },
      "fleißig"
    ],
    "sentence": "Du arbeitest fleißig.",
    "hint": "語幹が -t で終わる動詞は du で口調の e を入れる。",
    "exp": "arbeit- ＋ -est → arbeitest。",
    "tip": "-t/-d 語幹は du -est, er -et。"
  },
  {
    "id": "l1-06",
    "lektion": 1,
    "category": "動詞の人称変化",
    "ja": "君は旅行が好き？（reisen＝旅行する）",
    "tiles": [
      {
        "forms": [
          "Reise",
          "Reist",
          "Reisen"
        ],
        "answer": "Reist"
      },
      "du",
      "gern"
    ],
    "sentence": "Reist du gern?",
    "hint": "語幹が -s で終わる動詞は du で -t のみ。",
    "exp": "reis- ＋ -t → du reist。",
    "tip": "-s/-ß/-z 語幹は du -t。"
  },
  {
    "id": "l1-07",
    "lektion": 1,
    "category": "語順（定動詞第2位）",
    "ja": "彼はサッカーをするのが好きです。",
    "chips": "Er / spielt / gern / Fußball",
    "sentence": "Er spielt gern Fußball.",
    "hint": "定動詞は2番目。",
    "exp": "Er(1) spielt(2) gern Fußball。",
    "tip": "定動詞第2位の原則。"
  },
  {
    "id": "l1-08",
    "lektion": 1,
    "category": "語順（倒置）",
    "ja": "明日フランツはサッカーをします。（Morgen で始める）",
    "chips": "Morgen / spielt / Franz / Fußball",
    "sentence": "Morgen spielt Franz Fußball.",
    "hint": "文頭が「明日」でも定動詞は2番目。",
    "exp": "Morgen(1) spielt(2) Franz …（倒置）。",
    "tip": "文頭に副詞→主語と動詞が入れ替わる。"
  },
  {
    "id": "l1-09",
    "lektion": 1,
    "category": "語順（疑問詞）",
    "ja": "今日彼は何をしますか？",
    "chips": "Was / macht / er / heute",
    "sentence": "Was macht er heute?",
    "hint": "疑問詞が1番目でも定動詞は2番目。",
    "exp": "Was(1) macht(2) er heute?",
    "tip": "疑問詞＋定動詞＋主語。"
  },
  {
    "id": "l1-10",
    "lektion": 1,
    "category": "語順（倒置）",
    "ja": "明日彼はドイツへ飛びます。（Morgen で始める／fliegen＝飛行機で行く）",
    "chips": "Morgen / fliegt / er / nach / Deutschland",
    "sentence": "Morgen fliegt er nach Deutschland.",
    "hint": "nach＋地名で「〜へ」。",
    "exp": "Morgen fliegt er nach Deutschland.",
    "tip": "nach＋無冠詞の地名。"
  },
  {
    "id": "l2-01",
    "lektion": 2,
    "category": "sein / haben",
    "ja": "私は大学生で、君も大学生だ。（sein＝〜である）",
    "tiles": [
      "Ich",
      {
        "forms": [
          "bin",
          "bist",
          "ist"
        ],
        "answer": "bin"
      },
      "Student",
      "und",
      "du",
      {
        "forms": [
          "bin",
          "bist",
          "ist"
        ],
        "answer": "bist"
      },
      "auch",
      "Student"
    ],
    "sentence": "Ich bin Student und du bist auch Student.",
    "hint": "ich→bin, du→bist。",
    "exp": "sein: ich bin / du bist。",
    "tip": "sein は不規則。bin/bist/ist を丸暗記。"
  },
  {
    "id": "l2-02",
    "lektion": 2,
    "category": "sein / haben",
    "ja": "君はお腹が空いてる？（haben＝持つ／Hunger haben＝空腹）",
    "tiles": [
      {
        "forms": [
          "Habe",
          "Hast",
          "Hat"
        ],
        "answer": "Hast"
      },
      "du",
      "Hunger"
    ],
    "sentence": "Hast du Hunger?",
    "hint": "du→hast。",
    "exp": "haben: du hast。空腹は Hunger haben。",
    "tip": "「空腹・渇き」は haben で表す。"
  },
  {
    "id": "l2-03",
    "lektion": 2,
    "category": "sein / haben",
    "ja": "ユストさんは頭痛がします。（haben／Kopfschmerzen＝頭痛・複数）",
    "tiles": [
      "Frau Just",
      {
        "forms": [
          "habe",
          "hast",
          "hat"
        ],
        "answer": "hat"
      },
      "Kopfschmerzen"
    ],
    "sentence": "Frau Just hat Kopfschmerzen.",
    "hint": "3人称単数→hat。",
    "exp": "haben: er/sie/es hat。",
    "tip": "痛みは Schmerzen（複数）＋ haben。"
  },
  {
    "id": "l2-04",
    "lektion": 2,
    "category": "sein / haben",
    "ja": "あなたのご職業は何ですか？（sein／Sie で）",
    "tiles": [
      "Was",
      {
        "forms": [
          "bin",
          "bist",
          "sind"
        ],
        "answer": "sind"
      },
      "Sie",
      "von Beruf"
    ],
    "sentence": "Was sind Sie von Beruf?",
    "hint": "Sie（敬称）→sind。",
    "exp": "sein: Sie sind。",
    "tip": "職業を尋ねる定型 Was sind Sie von Beruf?"
  },
  {
    "id": "l2-05",
    "lektion": 2,
    "category": "名詞の性（不定冠詞）",
    "ja": "一人の男性がそこで歌っています。（Mann＝男性名詞）",
    "tiles": [
      {
        "forms": [
          "Ein",
          "Eine"
        ],
        "answer": "Ein"
      },
      "Mann",
      "singt",
      "dort"
    ],
    "sentence": "Ein Mann singt dort.",
    "hint": "男性・中性は ein、女性は eine。",
    "exp": "der Mann（男性）→ 不定冠詞 ein。",
    "tip": "不定冠詞: 男/中 ein, 女 eine。"
  },
  {
    "id": "l2-06",
    "lektion": 2,
    "category": "名詞の性（不定冠詞）",
    "ja": "一人の女性がコーヒーを飲んでいます。（Frau＝女性名詞）",
    "tiles": [
      {
        "forms": [
          "Ein",
          "Eine"
        ],
        "answer": "Eine"
      },
      "Frau",
      "trinkt",
      "Kaffee"
    ],
    "sentence": "Eine Frau trinkt Kaffee.",
    "hint": "女性名詞は eine。",
    "exp": "die Frau（女性）→ eine。",
    "tip": "性は冠詞ごと覚える。"
  },
  {
    "id": "l2-07",
    "lektion": 2,
    "category": "複数形",
    "ja": "「犬（der Hund）」の複数形は？",
    "choices": [
      "die Hunde",
      "die Hunden",
      "die Hünde",
      "die Hunds"
    ],
    "answer": 0,
    "hint": "e式（-e を付ける）。",
    "exp": "Hund → Hunde（e式）。",
    "tip": "複数の定冠詞は性に関係なく die。"
  },
  {
    "id": "l2-08",
    "lektion": 2,
    "category": "複数形",
    "ja": "「子供（das Kind）」の複数形は？",
    "choices": [
      "die Kinder",
      "die Kindern",
      "die Kinde",
      "die Kinds"
    ],
    "answer": 0,
    "hint": "er式（-er を付ける）。",
    "exp": "Kind → Kinder（er式）。",
    "tip": "中性短音節は er式が多い。"
  },
  {
    "id": "l2-09",
    "lektion": 2,
    "category": "語順（倒置）",
    "ja": "ここは天気がとても良いです。（Hier で始める／Wetter＝中性）",
    "chips": "Hier / ist / das Wetter / sehr / schön",
    "sentence": "Hier ist das Wetter sehr schön.",
    "hint": "文頭が Hier でも定動詞は2番目。",
    "exp": "Hier(1) ist(2) das Wetter …。",
    "tip": "場所の副詞で始めると倒置。"
  },
  {
    "id": "l3-01",
    "lektion": 3,
    "category": "動詞の格支配（3格＋4格）",
    "ja": "息子は母に雑誌を持ってくる。（bringen＝3格に4格を／Mutter＝女性, Zeitschrift＝女性）",
    "tiles": [
      "Der Sohn",
      "bringt",
      {
        "forms": [
          "die",
          "der"
        ],
        "answer": "der"
      },
      "Mutter",
      {
        "forms": [
          "eine",
          "einer"
        ],
        "answer": "eine"
      },
      "Zeitschrift"
    ],
    "sentence": "Der Sohn bringt der Mutter eine Zeitschrift.",
    "hint": "母に＝3格(der)、雑誌を＝4格(eine)。",
    "exp": "bringen は3格＋4格。der Mutter（3格）/ eine Zeitschrift（4格）。",
    "tip": "「人に物を」型は 3格＋4格。"
  },
  {
    "id": "l3-02",
    "lektion": 3,
    "category": "動詞の格支配（3格＋4格）",
    "ja": "彼女は叔母に手紙を書く。（schreiben＝3格に4格を／Tante＝女性, Brief＝男性）",
    "tiles": [
      "Sie",
      "schreibt",
      {
        "forms": [
          "die",
          "der"
        ],
        "answer": "der"
      },
      "Tante",
      {
        "forms": [
          "ein",
          "eines",
          "einem",
          "einen"
        ],
        "answer": "einen"
      },
      "Brief"
    ],
    "sentence": "Sie schreibt der Tante einen Brief.",
    "hint": "叔母に＝3格(der)、手紙を＝4格(einen)。",
    "exp": "schreiben は3格＋4格。einen Brief（男性4格）。",
    "tip": "男性4格は冠詞が -en（den/einen）。"
  },
  {
    "id": "l3-03",
    "lektion": 3,
    "category": "動詞の格支配（4格）",
    "ja": "私はその通りを知らない。（kennen＝4格／Straße＝女性）",
    "tiles": [
      "Ich",
      "kenne",
      {
        "forms": [
          "die",
          "der"
        ],
        "answer": "die"
      },
      "Straße",
      "nicht"
    ],
    "sentence": "Ich kenne die Straße nicht.",
    "hint": "kennen は4格。女性4格＝die。",
    "exp": "die Straße（女性4格）。",
    "tip": "女性は1格と4格が同形（die）。"
  },
  {
    "id": "l3-04",
    "lektion": 3,
    "category": "動詞の格支配（4格）",
    "ja": "先生は（一人の）生徒に質問する。（fragen＝4格／Schüler＝男性）",
    "tiles": [
      "Der Lehrer",
      "fragt",
      {
        "forms": [
          "ein",
          "eines",
          "einem",
          "einen"
        ],
        "answer": "einen"
      },
      "Schüler"
    ],
    "sentence": "Der Lehrer fragt einen Schüler.",
    "hint": "fragen は4格（「〜に質問する」でも4格）。",
    "exp": "einen Schüler（男性4格）。",
    "tip": "fragen は日本語の「に」につられず4格。"
  },
  {
    "id": "l3-05",
    "lektion": 3,
    "category": "動詞の格支配（3格）",
    "ja": "その生徒は先生に答える。（antworten＝3格／Schüler＝男性, Lehrer＝男性）",
    "tiles": [
      "Der Schüler",
      "antwortet",
      {
        "forms": [
          "der",
          "des",
          "dem",
          "den"
        ],
        "answer": "dem"
      },
      "Lehrer"
    ],
    "sentence": "Der Schüler antwortet dem Lehrer.",
    "hint": "antworten は3格。男性3格＝dem。",
    "exp": "dem Lehrer（男性3格）。",
    "tip": "antworten/danken/helfen は3格。"
  },
  {
    "id": "l3-06",
    "lektion": 3,
    "category": "動詞の格支配（3格＋4格）",
    "ja": "父は子供たちに童話を語る。（erzählen＝3格に4格を／Kinder＝複数, Märchen＝中性）",
    "tiles": [
      "Der Vater",
      "erzählt",
      {
        "forms": [
          "die",
          "der",
          "den"
        ],
        "answer": "den"
      },
      "Kindern",
      {
        "forms": [
          "ein",
          "eines",
          "einem"
        ],
        "answer": "ein"
      },
      "Märchen"
    ],
    "sentence": "Der Vater erzählt den Kindern ein Märchen.",
    "hint": "複数3格は den＋名詞に -n。中性4格＝ein。",
    "exp": "den Kindern（複数3格, Kinder→Kindern）/ ein Märchen（中性4格）。",
    "tip": "複数3格は名詞語尾に -n が付く。"
  },
  {
    "id": "l3-07",
    "lektion": 3,
    "category": "動詞の格支配（3格）",
    "ja": "ハンドバッグはその女性のものだ。（gehören＝3格／Frau＝女性）",
    "tiles": [
      "Die Handtasche",
      "gehört",
      {
        "forms": [
          "die",
          "der"
        ],
        "answer": "der"
      },
      "Frau"
    ],
    "sentence": "Die Handtasche gehört der Frau.",
    "hint": "gehören は3格。女性3格＝der。",
    "exp": "der Frau（女性3格）。",
    "tip": "女性の2格・3格は der。"
  },
  {
    "id": "l3-08",
    "lektion": 3,
    "category": "動詞の格支配（3格）",
    "ja": "オートバイはその男性のものだ。（gehören＝3格／Mann＝男性）",
    "tiles": [
      "Das Motorrad",
      "gehört",
      {
        "forms": [
          "der",
          "des",
          "dem",
          "den"
        ],
        "answer": "dem"
      },
      "Mann"
    ],
    "sentence": "Das Motorrad gehört dem Mann.",
    "hint": "男性3格＝dem。",
    "exp": "dem Mann（男性3格）。",
    "tip": "gehören は「〜のものだ」で3格。"
  },
  {
    "id": "l3-09",
    "lektion": 3,
    "category": "動詞の格支配（3格＋4格）",
    "ja": "少女は（女の）友達に写真を見せる。（zeigen＝3格に4格を／Freundin＝女性, Foto＝中性）",
    "tiles": [
      "Das Mädchen",
      "zeigt",
      {
        "forms": [
          "eine",
          "einer"
        ],
        "answer": "einer"
      },
      "Freundin",
      {
        "forms": [
          "ein",
          "eines",
          "einem"
        ],
        "answer": "ein"
      },
      "Foto"
    ],
    "sentence": "Das Mädchen zeigt einer Freundin ein Foto.",
    "hint": "友達に＝女性3格(einer)、写真を＝中性4格(ein)。",
    "exp": "einer Freundin（女性3格）/ ein Foto（中性4格）。",
    "tip": "不定冠詞 女性3格＝einer。"
  },
  {
    "id": "l3-10",
    "lektion": 3,
    "category": "2格（所有）",
    "ja": "その男性の車は新しい。（2格／Mann＝男性）",
    "tiles": [
      "Der Wagen",
      {
        "forms": [
          "der",
          "des",
          "dem",
          "den"
        ],
        "answer": "des"
      },
      "Mannes",
      "ist",
      "neu"
    ],
    "sentence": "Der Wagen des Mannes ist neu.",
    "hint": "「〜の」は2格。男性2格＝des＋名詞に -(e)s。",
    "exp": "des Mannes（男性2格）。",
    "tip": "男性・中性2格は des、名詞も -(e)s。"
  },
  {
    "id": "l3-11",
    "lektion": 3,
    "category": "語順（2格）",
    "ja": "これは友人の携帯電話です。（des Freundes＝友人の）",
    "chips": "Das / ist / das Handy / des Freundes",
    "sentence": "Das ist das Handy des Freundes.",
    "hint": "2格は修飾する名詞の後ろ。",
    "exp": "das Handy des Freundes（友人の携帯）。",
    "tip": "2格は後置で「〜の」。"
  },
  {
    "id": "l4-01",
    "lektion": 4,
    "category": "不規則動詞（e→i）",
    "ja": "君はその錠剤を飲む？（nehmen＝取る/飲む／du）",
    "tiles": [
      {
        "forms": [
          "Nehme",
          "Nimmst",
          "Nimmt"
        ],
        "answer": "Nimmst"
      },
      "du",
      "die Tabletten"
    ],
    "sentence": "Nimmst du die Tabletten?",
    "hint": "nehmen は du/er で nimm- に変化。",
    "exp": "du nimmst（特殊: nehm→nimm）。",
    "tip": "nehmen は du nimmst, er nimmt。"
  },
  {
    "id": "l4-02",
    "lektion": 4,
    "category": "不規則動詞（e→i）",
    "ja": "私は朝に錠剤を飲みます。（nehmen／ich）",
    "tiles": [
      "Ich",
      {
        "forms": [
          "nehme",
          "nimmst",
          "nimmt"
        ],
        "answer": "nehme"
      },
      "morgens",
      "die Tabletten"
    ],
    "sentence": "Ich nehme morgens die Tabletten.",
    "hint": "ich は語幹変化しない。",
    "exp": "ich nehme（1人称は語幹そのまま）。",
    "tip": "語幹変化は du と er/sie/es だけ。"
  },
  {
    "id": "l4-03",
    "lektion": 4,
    "category": "不規則動詞（e→i）",
    "ja": "マリアは今日その友人に会う？（treffen＝会う／3人称単数）",
    "tiles": [
      {
        "forms": [
          "Treffe",
          "Triffst",
          "Trifft"
        ],
        "answer": "Trifft"
      },
      "Maria",
      "heute",
      "den Freund"
    ],
    "sentence": "Trifft Maria heute den Freund?",
    "hint": "treffen は e→i。",
    "exp": "er/sie trifft（treff→triff）。",
    "tip": "treffen は4格をとる。"
  },
  {
    "id": "l4-04",
    "lektion": 4,
    "category": "不規則動詞（e→ie）",
    "ja": "君は推理小説を読む？（lesen＝読む／du・Krimi＝男性）",
    "tiles": [
      {
        "forms": [
          "Lese",
          "Liest",
          "Lest"
        ],
        "answer": "Liest"
      },
      "du",
      "einen Krimi"
    ],
    "sentence": "Liest du einen Krimi?",
    "hint": "lesen は e→ie。",
    "exp": "du liest（les→lies）。",
    "tip": "sehen/lesen/empfehlen は e→ie。"
  },
  {
    "id": "l4-05",
    "lektion": 4,
    "category": "不規則動詞（e→i）",
    "ja": "フランツはその少女に時計をあげる。（geben＝3格に4格を／Mädchen＝中性, Uhr＝女性）",
    "tiles": [
      "Franz",
      {
        "forms": [
          "gebe",
          "gibst",
          "gibt"
        ],
        "answer": "gibt"
      },
      "dem Mädchen",
      "die Uhr"
    ],
    "sentence": "Franz gibt dem Mädchen die Uhr.",
    "hint": "geben は e→i。3格(dem Mädchen)＋4格(die Uhr)。",
    "exp": "er gibt（geb→gib）。",
    "tip": "geben は3格＋4格をとる。"
  },
  {
    "id": "l4-06",
    "lektion": 4,
    "category": "不規則動詞（e→i）",
    "ja": "アンナは魚を好んで食べる。（essen＝食べる／3人称単数）",
    "tiles": [
      "Anna",
      {
        "forms": [
          "esse",
          "isst",
          "essen"
        ],
        "answer": "isst"
      },
      "gern",
      "Fisch"
    ],
    "sentence": "Anna isst gern Fisch.",
    "hint": "essen は e→i（du/er は isst）。",
    "exp": "sie isst（ess→iss）。",
    "tip": "essen の du と er は同形 isst。"
  },
  {
    "id": "l4-07",
    "lektion": 4,
    "category": "不規則動詞（a→ä）",
    "ja": "ハンスは明日ボンへ行く？（fahren＝乗り物で行く／3人称単数）",
    "tiles": [
      {
        "forms": [
          "Fahre",
          "Fährst",
          "Fährt"
        ],
        "answer": "Fährt"
      },
      "Hans",
      "morgen",
      "nach Bonn"
    ],
    "sentence": "Fährt Hans morgen nach Bonn?",
    "hint": "fahren は a→ä。",
    "exp": "er fährt（fahr→fähr）。",
    "tip": "fahren/tragen/schlafen は a→ä。"
  },
  {
    "id": "l4-08",
    "lektion": 4,
    "category": "不規則動詞（a→ä）",
    "ja": "オットーはひげをはやしている？（tragen＝身につける／Bart＝男性）",
    "tiles": [
      {
        "forms": [
          "Trage",
          "Trägst",
          "Trägt"
        ],
        "answer": "Trägt"
      },
      "Otto",
      "einen Bart"
    ],
    "sentence": "Trägt Otto einen Bart?",
    "hint": "tragen は a→ä。",
    "exp": "er trägt。einen Bart（男性4格）。",
    "tip": "tragen は「運ぶ・着る・生やす」。"
  },
  {
    "id": "l4-09",
    "lektion": 4,
    "category": "命令形（du）",
    "ja": "ハンス、座って！（命令形・du／Platz nehmen＝着席する）",
    "chips": "Nimm / Platz",
    "sentence": "Nimm Platz!",
    "hint": "nehmen の du 命令は Nimm（語幹変化が残る）。",
    "exp": "e→i 動詞の du 命令は変化形のまま: Nimm!",
    "tip": "du命令: 語幹のみ（e→i は維持）。"
  },
  {
    "id": "l4-10",
    "lektion": 4,
    "category": "命令形（Sie）",
    "ja": "ワルターさん、ゆっくり話してください！（命令形・Sie）",
    "chips": "Sprechen / Sie / bitte / langsam",
    "sentence": "Sprechen Sie bitte langsam!",
    "hint": "Sie命令は〈動詞＋Sie〉。",
    "exp": "Sprechen Sie …!（敬称の命令）。",
    "tip": "Sie命令は不定詞と同形＋Sie。"
  },
  {
    "id": "l4-11",
    "lektion": 4,
    "category": "命令形（ihr）",
    "ja": "ハンスとアンナ、静かにして！（命令形・ihr／sein）",
    "chips": "Seid / ruhig",
    "sentence": "Seid ruhig!",
    "hint": "sein の ihr 命令は Seid。",
    "exp": "ihr命令は ihr の形: Seid!",
    "tip": "sein の命令: du sei / ihr seid / Sie seien Sie。"
  },
  {
    "id": "l5-01",
    "lektion": 5,
    "category": "定冠詞類（dieser）",
    "ja": "私はこの車を買います。（dieser＝この／Wagen＝男性4格）",
    "tiles": [
      "Ich",
      "kaufe",
      {
        "forms": [
          "dieser",
          "dieses",
          "diesem",
          "diesen"
        ],
        "answer": "diesen"
      },
      "Wagen"
    ],
    "sentence": "Ich kaufe diesen Wagen.",
    "hint": "dieser は定冠詞と同じ変化。男性4格＝diesen。",
    "exp": "diesen Wagen（男性4格）。",
    "tip": "dieser/jeder/welcher は der型変化。"
  },
  {
    "id": "l5-02",
    "lektion": 5,
    "category": "所有冠詞（3格）",
    "ja": "このハンドバッグは私の母にとても気に入っている。（gefallen＝3格／mein・Mutter＝女性）",
    "tiles": [
      "Die Handtasche",
      "gefällt",
      {
        "forms": [
          "meine",
          "meiner"
        ],
        "answer": "meiner"
      },
      "Mutter",
      "sehr"
    ],
    "sentence": "Die Handtasche gefällt meiner Mutter sehr.",
    "hint": "gefallen は3格。女性3格＝meiner。",
    "exp": "meiner Mutter（女性3格）。",
    "tip": "gefallen は「〜の気に入る」で3格。"
  },
  {
    "id": "l5-03",
    "lektion": 5,
    "category": "所有冠詞（3格）",
    "ja": "私は妹を手伝う。（helfen＝3格／mein・Schwester＝女性）",
    "tiles": [
      "Ich",
      "helfe",
      {
        "forms": [
          "meine",
          "meiner"
        ],
        "answer": "meiner"
      },
      "Schwester"
    ],
    "sentence": "Ich helfe meiner Schwester.",
    "hint": "helfen は3格。",
    "exp": "meiner Schwester（女性3格）。",
    "tip": "helfen は4格に見えて3格。"
  },
  {
    "id": "l5-04",
    "lektion": 5,
    "category": "所有冠詞・定冠詞類",
    "ja": "君は友人にこの指輪を贈るの？（schenken＝3格に4格を／dein・Freund＝男性, Ring＝男性）",
    "tiles": [
      {
        "forms": [
          "Schenke",
          "Schenkst",
          "Schenkt"
        ],
        "answer": "Schenkst"
      },
      "du",
      {
        "forms": [
          "dein",
          "deines",
          "deinem",
          "deinen"
        ],
        "answer": "deinem"
      },
      "Freund",
      {
        "forms": [
          "dieser",
          "dieses",
          "diesem",
          "diesen"
        ],
        "answer": "diesen"
      },
      "Ring"
    ],
    "sentence": "Schenkst du deinem Freund diesen Ring?",
    "hint": "友人に＝男性3格(deinem)、指輪を＝男性4格(diesen)。",
    "exp": "deinem Freund（3格）/ diesen Ring（4格）。",
    "tip": "所有冠詞も ein型・dieser は der型の変化。"
  },
  {
    "id": "l5-05",
    "lektion": 5,
    "category": "所有冠詞（複数3格・中性4格）",
    "ja": "母は子供たちに自分の写真を見せる。（zeigen＝3格に4格を／ihr・Kinder＝複数, Foto＝中性）",
    "tiles": [
      "Die Mutter",
      "zeigt",
      {
        "forms": [
          "ihre",
          "ihrer",
          "ihren",
          "ihrem"
        ],
        "answer": "ihren"
      },
      "Kindern",
      {
        "forms": [
          "ihr",
          "ihre",
          "ihren"
        ],
        "answer": "ihr"
      },
      "Foto"
    ],
    "sentence": "Die Mutter zeigt ihren Kindern ihr Foto.",
    "hint": "複数3格＝ihren＋Kindern、中性4格＝ihr。",
    "exp": "ihren Kindern（複数3格）/ ihr Foto（中性4格）。",
    "tip": "ihr（彼女の）も冠詞類として格変化する。"
  },
  {
    "id": "l5-06",
    "lektion": 5,
    "category": "疑問代名詞",
    "ja": "君は誰を訪ねるの？（wen＝誰を／4格）— ___ besuchst du?",
    "choices": [
      "Wen",
      "Wer",
      "Wem",
      "Wessen"
    ],
    "answer": 0,
    "hint": "besuchen は4格。「誰を」＝wen。",
    "exp": "4格（誰を）＝ wen。Wen besuchst du?",
    "tip": "疑問代名詞: wer/wessen/wem/wen（1/2/3/4格）。"
  },
  {
    "id": "l5-07",
    "lektion": 5,
    "category": "疑問代名詞",
    "ja": "この車は誰のもの？（gehören＝3格）— ___ gehört dieses Auto?",
    "choices": [
      "Wem",
      "Wer",
      "Wen",
      "Wessen"
    ],
    "answer": 0,
    "hint": "gehören は3格。「誰に」＝wem。",
    "exp": "3格（誰に）＝ wem。",
    "tip": "gehören＋3格 → wem で尋ねる。"
  },
  {
    "id": "l5-08",
    "lektion": 5,
    "category": "疑問代名詞",
    "ja": "これは誰のバッグ？（誰の＝2格）— ___ Tasche ist das?",
    "choices": [
      "Wessen",
      "Wer",
      "Wem",
      "Wen"
    ],
    "answer": 0,
    "hint": "「誰の」＝2格 wessen。",
    "exp": "2格（誰の）＝ wessen。",
    "tip": "wessen ＋ 名詞で「誰の〜」。"
  },
  {
    "id": "l5-09",
    "lektion": 5,
    "category": "語順",
    "ja": "あなたの子供たちは今どこに住んでいますか？（deine Kinder）",
    "chips": "Wo / wohnen / deine Kinder / jetzt",
    "sentence": "Wo wohnen deine Kinder jetzt?",
    "hint": "疑問詞＋定動詞＋主語。",
    "exp": "Wo(1) wohnen(2) deine Kinder jetzt?",
    "tip": "複数主語に動詞は -en。"
  },
  {
    "id": "l6-01",
    "lektion": 6,
    "category": "人称代名詞（3格）",
    "ja": "私は君に心から感謝する。（danken＝3格／du→？）",
    "tiles": [
      "Ich",
      "danke",
      {
        "forms": [
          "du",
          "dir",
          "dich"
        ],
        "answer": "dir"
      },
      "herzlich"
    ],
    "sentence": "Ich danke dir herzlich.",
    "hint": "danken は3格。du の3格＝dir。",
    "exp": "du → 3格 dir。",
    "tip": "人称代名詞 du: 3格 dir / 4格 dich。"
  },
  {
    "id": "l6-02",
    "lektion": 6,
    "category": "人称代名詞（4格）",
    "ja": "君のために私はそのプレゼントを買う。（für＝4格／du→？・Für で始める）",
    "tiles": [
      "Für",
      {
        "forms": [
          "du",
          "dir",
          "dich"
        ],
        "answer": "dich"
      },
      "kaufe",
      "ich",
      "das Geschenk"
    ],
    "sentence": "Für dich kaufe ich das Geschenk.",
    "hint": "für は4格。du の4格＝dich。文頭句の後は倒置。",
    "exp": "für dich（4格）。Für dich(1) kaufe(2) ich …。",
    "tip": "für＋4格。文頭が前置詞句でも定動詞は2番目。"
  },
  {
    "id": "l6-03",
    "lektion": 6,
    "category": "人称代名詞（3格）",
    "ja": "君は彼にその指輪を贈るの？（schenken＝3格に4格を／er→？）",
    "tiles": [
      {
        "forms": [
          "Schenke",
          "Schenkst",
          "Schenkt"
        ],
        "answer": "Schenkst"
      },
      "du",
      {
        "forms": [
          "er",
          "ihm",
          "ihn"
        ],
        "answer": "ihm"
      },
      "den Ring"
    ],
    "sentence": "Schenkst du ihm den Ring?",
    "hint": "schenken の「彼に」＝3格 ihm。",
    "exp": "er → 3格 ihm。",
    "tip": "er: 3格 ihm / 4格 ihn。"
  },
  {
    "id": "l6-04",
    "lektion": 6,
    "category": "前置詞の格支配（3・4格／方向）",
    "ja": "私はその絵を壁に掛ける。（an＝3・4格／移動＝方向・Wand＝女性）",
    "tiles": [
      "Ich",
      "hänge",
      "das Bild",
      "an",
      {
        "forms": [
          "die",
          "der"
        ],
        "answer": "die"
      },
      "Wand"
    ],
    "sentence": "Ich hänge das Bild an die Wand.",
    "hint": "「掛ける（移動）」は方向→4格。女性4格＝die。",
    "exp": "an die Wand（方向→4格）。",
    "tip": "3・4格支配は 移動=4格 / 静止=3格。"
  },
  {
    "id": "l6-05",
    "lektion": 6,
    "category": "前置詞の格支配（3・4格／位置）",
    "ja": "その絵は壁に掛かっている。（an＝3・4格／静止＝位置・Wand＝女性）",
    "tiles": [
      "Das Bild",
      "hängt",
      "an",
      {
        "forms": [
          "die",
          "der"
        ],
        "answer": "der"
      },
      "Wand"
    ],
    "sentence": "Das Bild hängt an der Wand.",
    "hint": "「掛かっている（位置）」は3格。女性3格＝der。",
    "exp": "an der Wand（位置→3格）。",
    "tip": "hängen(自)=位置→3格、hängen(他)=方向→4格。"
  },
  {
    "id": "l6-06",
    "lektion": 6,
    "category": "前置詞の格支配（3・4格／位置）",
    "ja": "私のおじは街に住んでいる。（in＝3・4格／位置・Stadt＝女性）",
    "tiles": [
      "Mein Onkel",
      "wohnt",
      "in",
      {
        "forms": [
          "die",
          "der"
        ],
        "answer": "der"
      },
      "Stadt"
    ],
    "sentence": "Mein Onkel wohnt in der Stadt.",
    "hint": "wohnen は位置→3格。",
    "exp": "in der Stadt（位置→3格）。",
    "tip": "wohnen/sein/bleiben は3格。"
  },
  {
    "id": "l6-07",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "彼は劇場へ行く。（in＋das の融合形は？／移動・Theater＝中性）",
    "tiles": [
      "Er",
      "geht",
      {
        "forms": [
          "im",
          "ins"
        ],
        "answer": "ins"
      },
      "Theater"
    ],
    "sentence": "Er geht ins Theater.",
    "hint": "移動→4格。in＋das＝ins。",
    "exp": "ins ＝ in das（中性4格・方向）。",
    "tip": "-s 終わりの融合形(ins/ans)は4格。"
  },
  {
    "id": "l6-08",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "中央駅へはどう行きますか？（zu＋dem の融合形は？／Hauptbahnhof＝男性）",
    "tiles": [
      "Wie",
      "kommen",
      "wir",
      {
        "forms": [
          "zur",
          "zum"
        ],
        "answer": "zum"
      },
      "Hauptbahnhof"
    ],
    "sentence": "Wie kommen wir zum Hauptbahnhof?",
    "hint": "zu＋dem＝zum。",
    "exp": "zum ＝ zu dem（男性3格）。",
    "tip": "zu は常に3格支配。"
  },
  {
    "id": "l6-09",
    "lektion": 6,
    "category": "前置詞と定冠詞の融合形",
    "ja": "妹はよく学校へ行く。（zu＋der の融合形は？／Schule＝女性）",
    "tiles": [
      "Meine Schwester",
      "geht",
      "oft",
      {
        "forms": [
          "zur",
          "zum"
        ],
        "answer": "zur"
      },
      "Schule"
    ],
    "sentence": "Meine Schwester geht oft zur Schule.",
    "hint": "zu＋der＝zur。",
    "exp": "zur ＝ zu der（女性3格）。",
    "tip": "zur Schule / zur Arbeit など定型。"
  },
  {
    "id": "l6-10",
    "lektion": 6,
    "category": "語順（前置詞句）",
    "ja": "私の兄は映画館の前で私を待っています。（vor dem Kino＝映画館の前で, auf mich＝私を）",
    "chips": "Mein Bruder / wartet / vor dem Kino / auf mich",
    "sentence": "Mein Bruder wartet vor dem Kino auf mich.",
    "hint": "warten auf＋4格「〜を待つ」。",
    "exp": "vor dem Kino（位置3格）/ auf mich（4格）。",
    "tip": "warten auf＋4格 は熟語。"
  },
  {
    "id": "l7-01",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "彼はいくら払わなければならない？（müssen＝ねばならない／3人称単数・本動詞 bezahlen は文末）",
    "tiles": [
      "Wie viel",
      {
        "forms": [
          "muss",
          "musst",
          "müssen"
        ],
        "answer": "muss"
      },
      "er",
      "bezahlen"
    ],
    "sentence": "Wie viel muss er bezahlen?",
    "hint": "müssen: er muss。本動詞は不定詞で文末。",
    "exp": "muss …（…）… bezahlen。助動詞は2位・本動詞は文末。",
    "tip": "話法の助動詞は ich/er で語尾なし（muss）。"
  },
  {
    "id": "l7-02",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "ここで写真を撮ってもいいですか？（dürfen＝してよい／ich・本動詞 fotografieren は文末）",
    "tiles": [
      {
        "forms": [
          "Darf",
          "Darfst",
          "Dürfen"
        ],
        "answer": "Darf"
      },
      "ich",
      "hier",
      "fotografieren"
    ],
    "sentence": "Darf ich hier fotografieren?",
    "hint": "dürfen: ich darf。",
    "exp": "Darf ich … fotografieren?（許可を尋ねる）。",
    "tip": "dürfen は「許可」。否定で「禁止」。"
  },
  {
    "id": "l7-03",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "いいえ、ここでは写真を撮ってはいけません。（dürfen／Sie・nicht）",
    "tiles": [
      "Sie",
      {
        "forms": [
          "darf",
          "darfst",
          "dürfen"
        ],
        "answer": "dürfen"
      },
      "hier",
      "nicht",
      "fotografieren"
    ],
    "sentence": "Sie dürfen hier nicht fotografieren.",
    "hint": "Sie→dürfen。dürfen＋nicht＝禁止。",
    "exp": "dürfen nicht ＝「〜してはいけない」。",
    "tip": "nicht dürfen は禁止を表す。"
  },
  {
    "id": "l7-04",
    "lektion": 7,
    "category": "話法の助動詞（変化）",
    "ja": "君は本当のことを言うべきだ。（sollen＝すべき／du・本動詞 sagen は文末）",
    "tiles": [
      "Du",
      {
        "forms": [
          "soll",
          "sollst",
          "sollen"
        ],
        "answer": "sollst"
      },
      "die Wahrheit",
      "sagen"
    ],
    "sentence": "Du sollst die Wahrheit sagen.",
    "hint": "sollen: du sollst。",
    "exp": "sollst … sagen。",
    "tip": "sollen＝他者の意志「すべき」。"
  },
  {
    "id": "l7-05",
    "lektion": 7,
    "category": "助動詞構文の語順",
    "ja": "私の兄はドイツ文学を専攻するつもりだ。（wollen／本動詞 studieren は文末）",
    "chips": "Mein Bruder / will / Germanistik / studieren",
    "sentence": "Mein Bruder will Germanistik studieren.",
    "hint": "助動詞が2位、本動詞（不定詞）は文末。",
    "exp": "will … Germanistik studieren。",
    "tip": "助動詞構文は「枠構造」（助動詞…不定詞）。"
  },
  {
    "id": "l7-06",
    "lektion": 7,
    "category": "助動詞構文の語順",
    "ja": "私はピアノを弾きたい。（möchte＝したい／本動詞 spielen は文末）",
    "chips": "Ich / möchte / Klavier / spielen",
    "sentence": "Ich möchte Klavier spielen.",
    "hint": "möchte＋不定詞（文末）。",
    "exp": "möchte … spielen。",
    "tip": "möchte は「〜したい」の丁寧な願望。"
  },
  {
    "id": "l7-07",
    "lektion": 7,
    "category": "助動詞構文の語順",
    "ja": "君たちは今日歩いて大学へ行かなければならない。（müssen／ihr・本動詞 gehen は文末）",
    "tiles": [
      "Ihr",
      {
        "forms": [
          "muss",
          "müsst",
          "müssen"
        ],
        "answer": "müsst"
      },
      "heute",
      "zu Fuß",
      "zur Uni",
      "gehen"
    ],
    "sentence": "Ihr müsst heute zu Fuß zur Uni gehen.",
    "hint": "müssen: ihr müsst。本動詞 gehen は文末。",
    "exp": "müsst … zur Uni gehen。",
    "tip": "ihr の助動詞語尾は -t（müsst, könnt）。"
  },
  {
    "id": "l7-08",
    "lektion": 7,
    "category": "助動詞構文の語順",
    "ja": "君は毎日よく眠れる？（können＝できる／du・本動詞 schlafen は文末）",
    "tiles": [
      {
        "forms": [
          "Kann",
          "Kannst",
          "Können"
        ],
        "answer": "Kannst"
      },
      "du",
      "jeden Tag",
      "gut",
      "schlafen"
    ],
    "sentence": "Kannst du jeden Tag gut schlafen?",
    "hint": "können: du kannst。",
    "exp": "Kannst du … schlafen?",
    "tip": "können＝能力・可能「できる」。"
  },
  {
    "id": "l7-09",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 müssen の意味は？",
    "choices": [
      "〜しなければならない",
      "〜してもよい",
      "〜できる",
      "〜するつもりだ"
    ],
    "answer": 0,
    "hint": "義務・必要。",
    "exp": "müssen＝〜しなければならない（必要・義務）。",
    "tip": "müssen↔dürfen（必要↔許可）。"
  },
  {
    "id": "l7-10",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 dürfen の意味は？",
    "choices": [
      "〜してもよい（許可）",
      "〜すべきだ",
      "〜したい",
      "〜できる"
    ],
    "answer": 0,
    "hint": "許可。否定で禁止。",
    "exp": "dürfen＝〜してよい（許可）。",
    "tip": "können（能力）と区別。"
  },
  {
    "id": "l7-11",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "話法の助動詞 wollen の意味は？",
    "choices": [
      "〜するつもりだ（意志）",
      "〜しなければならない",
      "〜してもよい",
      "〜かもしれない"
    ],
    "answer": 0,
    "hint": "主語自身の強い意志。",
    "exp": "wollen＝〜するつもりだ（自分の意志）。",
    "tip": "wollen（自分の意志）↔sollen（他者の意志）。"
  },
  {
    "id": "l7-12",
    "lektion": 7,
    "category": "話法の助動詞（意味）",
    "ja": "「〜したい」という願望を表す助動詞は？",
    "choices": [
      "möchte",
      "müssen",
      "sollen",
      "dürfen"
    ],
    "answer": 0,
    "hint": "mögen の接続法II式。",
    "exp": "möchte＝〜したい（控えめな願望）。",
    "tip": "Ich möchte … は丁寧な「〜したい」。"
  },
  {
    "id": "l8-01",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "kennen（〜をよく知っている）が取る格は？",
    "choices": [
      "4格",
      "3格",
      "3格＋4格",
      "2格"
    ],
    "answer": 0,
    "hint": "他動詞「〜を」。",
    "exp": "kennen は4格。",
    "tip": "多くの他動詞は4格。"
  },
  {
    "id": "l8-02",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "helfen（〜を手伝う）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格"
    ],
    "answer": 0,
    "hint": "日本語の「を」につられない。",
    "exp": "helfen は3格。",
    "tip": "helfen/danken/antworten/gehören/gefallen は3格。"
  },
  {
    "id": "l8-03",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "gehören（〜のものである）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "2格",
      "3格＋4格"
    ],
    "answer": 0,
    "hint": "「〜に属する」。",
    "exp": "gehören は3格。",
    "tip": "Das gehört mir.（私のものだ）。"
  },
  {
    "id": "l8-04",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "geben（〜に〜を与える）が取る格は？",
    "choices": [
      "3格＋4格",
      "4格のみ",
      "3格のみ",
      "2格"
    ],
    "answer": 0,
    "hint": "「人に物を」。",
    "exp": "geben は3格＋4格。",
    "tip": "geben/schenken/zeigen/bringen は3格＋4格。"
  },
  {
    "id": "l8-05",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "danken（〜に感謝する）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格"
    ],
    "answer": 0,
    "hint": "感謝する相手は3格。",
    "exp": "danken は3格。",
    "tip": "Ich danke dir.（dir＝3格）。"
  },
  {
    "id": "l8-06",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "besuchen（〜を訪問する）が取る格は？",
    "choices": [
      "4格",
      "3格",
      "3格＋4格",
      "2格"
    ],
    "answer": 0,
    "hint": "他動詞。",
    "exp": "besuchen は4格。",
    "tip": "besuchen/kennen/loben/lieben は4格。"
  },
  {
    "id": "l8-07",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "gefallen（〜の気に入る）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "1格"
    ],
    "answer": 0,
    "hint": "気に入る人は3格。",
    "exp": "gefallen は3格。",
    "tip": "Das gefällt mir.（私は気に入る）。"
  },
  {
    "id": "l8-08",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "antworten（〜に答える）が取る格は？",
    "choices": [
      "3格",
      "4格",
      "3格＋4格",
      "2格"
    ],
    "answer": 0,
    "hint": "答える相手は3格。",
    "exp": "antworten は3格。",
    "tip": "一方 fragen（質問する）は4格。"
  },
  {
    "id": "l8-09",
    "lektion": 8,
    "category": "冠詞の格変換",
    "ja": "「Ich besuche einen Freund.」の einen を定冠詞にすると？（Freund＝男性4格）",
    "choices": [
      "den",
      "der",
      "dem",
      "des"
    ],
    "answer": 0,
    "hint": "男性4格の定冠詞。",
    "exp": "einen Freund → den Freund（男性4格）。",
    "tip": "男性4格は der→den / ein→einen。"
  },
  {
    "id": "l8-10",
    "lektion": 8,
    "category": "格の判定",
    "ja": "「Ich danke dem Lehrer.」の dem Lehrer は何格？",
    "choices": [
      "3格",
      "4格",
      "2格",
      "1格"
    ],
    "answer": 0,
    "hint": "danken の格支配から。",
    "exp": "danken は3格 → dem Lehrer は3格。",
    "tip": "男性3格の定冠詞は dem。"
  },
  {
    "id": "l8-11",
    "lektion": 8,
    "category": "全格パラダイム",
    "ja": "不定冠詞 ein（男性名詞）の 1格→2格→3格→4格 は？",
    "choices": [
      "ein - eines - einem - einen",
      "ein - einen - einem - eines",
      "ein - einem - eines - einen",
      "ein - eines - einen - einem"
    ],
    "answer": 0,
    "hint": "男性: 1=ein, 2=eines, 3=einem, 4=einen。",
    "exp": "ein / eines / einem / einen。",
    "tip": "男性4格だけ語尾 -en（einen）。"
  },
  {
    "id": "l8-12",
    "lektion": 8,
    "category": "格支配の総合",
    "ja": "loben（〜を褒める）が取る格は？",
    "choices": [
      "4格",
      "3格",
      "3格＋4格",
      "2格"
    ],
    "answer": 0,
    "hint": "他動詞「〜を」。",
    "exp": "loben は4格。",
    "tip": "loben/lieben/kennen は4格。"
  }
];
