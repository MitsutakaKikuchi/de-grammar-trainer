/**
 * Lektion 1-7 のメタ情報と文法解説データ。
 * 元教材「ドイツ語テキスト_Lektion1-7_学習資料.md」の Grammatik（文法解説）部分を構造化したもの。
 * 読解文は学習対象外のため含めない。
 *
 * grammar の各セクションは以下のいずれか（複数可）を持つ:
 *   heading : 見出し（必須）
 *   body    : 補足説明テキスト（任意）
 *   table   : { headers: string[], rows: string[][] }（任意）
 *   notes   : 注記の配列 string[]（任意）
 */
const LEKTIONEN = [
  {
    id: 1,
    title: '規則動詞の現在人称変化と語順',
    subtitle: 'Überall in Deutschland finden wir heute Manga-Shops.',
    subtitleJa: 'ドイツのいたるところで私たちは今日マンガショップを見つけます。',
    themes: ['規則変化動詞', '定動詞第2位'],
    accent: '#6366f1',
    grammar: [
      {
        heading: '① 主語になる人称代名詞',
        table: {
          headers: ['', '単数', '複数'],
          rows: [
            ['1人称', 'ich（私）', 'wir（私たち）'],
            ['2人称（親称）', 'du（君）', 'ihr（君たち）'],
            ['3人称', 'er（彼）/ sie（彼女）/ es（それ）', 'sie（彼ら）'],
            ['2人称（敬称）', 'Sie（あなた）', 'Sie（あなたたち）'],
          ],
        },
        notes: [
          '2人称には du, ihr（親称）と Sie（敬称・単複同形・常に大文字）がある。',
          '3人称単数 er, sie, es は、それぞれ男性・女性・中性名詞を受ける。',
        ],
      },
      {
        heading: '② 規則動詞の現在人称変化',
        body: '不定詞（原形）は「語幹 + -en」の形。主語の人称・数に応じて語尾が変化する。',
        table: {
          headers: ['人称', '語尾', 'lernen（学ぶ）', 'kommen（来る）'],
          rows: [
            ['ich', '-e', 'lerne', 'komme'],
            ['du', '-st', 'lernst', 'kommst'],
            ['er/sie/es', '-t', 'lernt', 'kommt'],
            ['wir', '-en', 'lernen', 'kommen'],
            ['ihr', '-t', 'lernt', 'kommt'],
            ['sie/Sie', '-en', 'lernen', 'kommen'],
          ],
        },
      },
      {
        heading: '③ 語幹の終わりに注意する動詞',
        notes: [
          'arbeiten（語幹 -t）: du と er で口調上の e を入れる → du arbeitest, er arbeitet。',
          'reisen（語幹 -s）: du の語尾が -t のみになる → du reist。',
          'wandern（語幹 -er）: wir/sie で語尾が -n になる → wir wandern。',
        ],
      },
      {
        heading: '④ 定動詞第2位の原則',
        body: '定動詞（人称変化した動詞）は文の2番目の位置に置かれる。文頭が主語でも、時を表す語でも、疑問詞でも変わらない。',
        table: {
          headers: ['1番目', '定動詞（2番目）', 'その他'],
          rows: [
            ['Du', 'lernst', 'heute Deutsch.'],
            ['Heute', 'lernst', 'du Deutsch.'],
            ['Was', 'lernst', 'du heute?'],
          ],
        },
      },
    ],
  },
  {
    id: 2,
    title: 'sein・haben と名詞の性・数',
    subtitle: 'Auch Wein ist in Deutschland beliebt.',
    subtitleJa: 'ワインもドイツでは人気があります。',
    themes: ['sein / haben', '名詞の性', '不定冠詞', '複数形'],
    accent: '#0ea5e9',
    grammar: [
      {
        heading: '① sein と haben の現在人称変化',
        table: {
          headers: ['', 'sein（～である）', 'haben（～を持つ）'],
          rows: [
            ['ich', 'bin', 'habe'],
            ['du', 'bist', 'hast'],
            ['er/sie/es', 'ist', 'hat'],
            ['wir', 'sind', 'haben'],
            ['ihr', 'seid', 'habt'],
            ['sie/Sie', 'sind', 'haben'],
          ],
        },
        notes: ['Hast du Hunger? — Nein, aber ich habe Durst.（空腹？－いいえ、でものどが渇いています。）'],
      },
      {
        heading: '② 名詞の性と定冠詞・不定冠詞',
        body: 'ドイツ語の名詞には男性・女性・中性の性がある。名詞は文中でも常に大文字で書き始める。',
        table: {
          headers: ['', '男性', '女性', '中性'],
          rows: [
            ['定冠詞', 'der（der Vater）', 'die（die Mutter）', 'das（das Kind）'],
            ['不定冠詞', 'ein', 'eine', 'ein'],
          ],
        },
        notes: ['不定冠詞「ある一つの～」は英語の a/an に相当。男性・中性は ein、女性は eine。'],
      },
      {
        heading: '③ 複数形のパターン',
        table: {
          headers: ['パターン', '単数', '複数'],
          rows: [
            ['無語尾式', 'der Onkel / der Vater', 'die Onkel / die Väter'],
            ['e式', 'der Tag / der Hund', 'die Tage / die Hunde'],
            ['er式', 'das Kind / das Buch', 'die Kinder / die Bücher'],
            ['(e)n式', 'die Blume / die Katze', 'die Blumen / die Katzen'],
            ['s式', 'das Hotel / die Kamera', 'die Hotels / die Kameras'],
          ],
        },
        notes: ['s式は外来語に多い。無語尾式・e式・er式ではウムラウトが付くことがある（Vater→Väter）。'],
      },
    ],
  },
  {
    id: 3,
    title: '冠詞と名詞の格変化・動詞の格支配',
    subtitle: 'Berlin ist die Hauptstadt Deutschlands.',
    subtitleJa: 'ベルリンはドイツの首都です。',
    themes: ['1〜4格', '定冠詞の格変化', '不定冠詞の格変化', '格支配'],
    accent: '#f59e0b',
    grammar: [
      {
        heading: '① 4つの格',
        body: '格は名詞の前につく冠詞に表される。',
        table: {
          headers: ['格', '名称', '用法', '意味'],
          rows: [
            ['1格', 'Nominativ', '主語', '～は・～が'],
            ['2格', 'Genitiv', '所有', '～の'],
            ['3格', 'Dativ', '間接目的語', '～に'],
            ['4格', 'Akkusativ', '直接目的語', '～を'],
          ],
        },
      },
      {
        heading: '② 定冠詞と名詞の格変化',
        table: {
          headers: ['格', '男性', '女性', '中性', '複数'],
          rows: [
            ['1格', 'der Vater', 'die Mutter', 'das Kind', 'die Kinder'],
            ['2格', 'des Vaters', 'der Mutter', 'des Kindes', 'der Kinder'],
            ['3格', 'dem Vater', 'der Mutter', 'dem Kind', 'den Kindern'],
            ['4格', 'den Vater', 'die Mutter', 'das Kind', 'die Kinder'],
          ],
        },
        notes: [
          '男性・中性の2格は名詞にも -s/-es が付く（Vater→Vaters, Kind→Kindes）。',
          '複数3格は名詞に -n が付くことが多い（Kinder→Kindern）。',
        ],
      },
      {
        heading: '③ 不定冠詞と名詞の格変化',
        table: {
          headers: ['格', '男性', '女性', '中性'],
          rows: [
            ['1格', 'ein Vater', 'eine Mutter', 'ein Kind'],
            ['2格', 'eines Vaters', 'einer Mutter', 'eines Kindes'],
            ['3格', 'einem Vater', 'einer Mutter', 'einem Kind'],
            ['4格', 'einen Vater', 'eine Mutter', 'ein Kind'],
          ],
        },
        notes: ['不定冠詞は複数形を持たない（複数は無冠詞または定冠詞）。'],
      },
      {
        heading: '④ 動詞の格支配（主な例）',
        body: '動詞はそれぞれ決まった格の目的語をとる。動詞と格をセットで覚える。',
        table: {
          headers: ['動詞', '意味', '格支配'],
          rows: [
            ['kennen / besuchen / loben / lieben', '知る/訪ねる/褒める/愛する', '4格'],
            ['danken / gehören / antworten', '感謝する/～のものだ/答える', '3格'],
            ['schenken / zeigen / bringen / erzählen', '贈る/見せる/持参/語る', '3格＋4格'],
          ],
        },
      },
    ],
  },
  {
    id: 4,
    title: '不規則変化動詞・命令形・弱変化名詞',
    subtitle: 'Die Kultur in Europa ist sehr vielfältig.',
    subtitleJa: 'ヨーロッパの文化はとても多様です。',
    themes: ['母音変化動詞', '命令形', '弱変化名詞'],
    accent: '#10b981',
    grammar: [
      {
        heading: '① 語幹の母音が変わる動詞',
        body: '2人称単数（du）と3人称単数（er/sie/es）で語幹の母音が変化する。',
        table: {
          headers: ['', 'fahren (a→ä)', 'sprechen (e→i)', 'sehen (e→ie)'],
          rows: [
            ['ich', 'fahre', 'spreche', 'sehe'],
            ['du', 'fährst', 'sprichst', 'siehst'],
            ['er/sie/es', 'fährt', 'spricht', 'sieht'],
            ['wir', 'fahren', 'sprechen', 'sehen'],
            ['ihr', 'fahrt', 'sprecht', 'seht'],
            ['sie/Sie', 'fahren', 'sprechen', 'sehen'],
          ],
        },
        notes: [
          'a→ä : fahren, tragen, schlafen, halten',
          'e→i : sprechen, essen, helfen, treffen, nehmen（du nimmst, er nimmt）',
          'e→ie : sehen, lesen, empfehlen',
        ],
      },
      {
        heading: '② 命令形（Imperativ）',
        table: {
          headers: ['相手', '作り方', '例'],
          rows: [
            ['du', '語幹（＋e）＋!', 'Komm! / Sprich! / Warte!'],
            ['ihr', '動詞の ihr の形＋!', 'Wartet! / Sprecht!'],
            ['Sie', '動詞の Sie の形＋Sie＋!', 'Warten Sie! / Sprechen Sie!'],
          ],
        },
        notes: [
          'e→i / e→ie の動詞は du命令形でも母音変化が残る（sprechen→Sprich!、lesen→Lies!）。',
          'sein の命令形は特殊: du→sei, ihr→seid, Sie→seien Sie。',
        ],
      },
      {
        heading: '③ 弱変化名詞（der Student 型）',
        body: '一部の男性名詞は1格以外（2・3・4格）で語尾に -en / -n が付く。',
        table: {
          headers: ['格', '単数', '複数'],
          rows: [
            ['1格', 'der Student', 'die Studenten'],
            ['2格', 'des Studenten', 'der Studenten'],
            ['3格', 'dem Studenten', 'den Studenten'],
            ['4格', 'den Studenten', 'die Studenten'],
          ],
        },
        notes: ['その他: der Junge, der Kollege, der Mensch, der Herr（複数 die Herren）。'],
      },
    ],
  },
  {
    id: 5,
    title: '定冠詞類・不定冠詞類・指示/疑問代名詞',
    subtitle: 'Manche Studenten machen auch ein Praktikum.',
    subtitleJa: '多くの学生たちはインターンシップも行います。',
    themes: ['定冠詞類', '所有冠詞', '指示代名詞', '疑問代名詞'],
    accent: '#ec4899',
    grammar: [
      {
        heading: '① 定冠詞類（dieser 型）',
        body: '定冠詞とよく似た変化をする。dieser（この）, jeder（どの～も）, welcher（どの）, mancher（多くの）, aller（すべての）, solcher（そのような）。',
        table: {
          headers: ['格', '男性', '女性', '中性', '複数'],
          rows: [
            ['1格', 'dieser Vater', 'diese Mutter', 'dieses Kind', 'diese Kinder'],
            ['2格', 'dieses Vaters', 'dieser Mutter', 'dieses Kindes', 'dieser Kinder'],
            ['3格', 'diesem Vater', 'dieser Mutter', 'diesem Kind', 'diesen Kindern'],
            ['4格', 'diesen Vater', 'diese Mutter', 'dieses Kind', 'diese Kinder'],
          ],
        },
      },
      {
        heading: '② 不定冠詞類（所有冠詞・kein）',
        body: '不定冠詞とそっくりな変化をする。mein, dein, sein, ihr, unser, euer, Ihr、否定の kein。',
        table: {
          headers: ['格', '男性', '女性', '中性', '複数'],
          rows: [
            ['1格', 'mein Vater', 'meine Mutter', 'mein Kind', 'meine Kinder'],
            ['2格', 'meines Vaters', 'meiner Mutter', 'meines Kindes', 'meiner Kinder'],
            ['3格', 'meinem Vater', 'meiner Mutter', 'meinem Kind', 'meinen Kindern'],
            ['4格', 'meinen Vater', 'meine Mutter', 'mein Kind', 'meine Kinder'],
          ],
        },
        notes: ['男性1格と中性1・4格は語尾なし（mein）。それ以外は定冠詞類と同じ語尾。'],
      },
      {
        heading: '③ 指示代名詞',
        body: '定冠詞と同形だが、強調して「これ・あれ」を指す。文頭に置かれ後ろに定動詞が続く。',
        table: {
          headers: ['格', '男性', '女性', '中性', '複数'],
          rows: [
            ['1格', 'der', 'die', 'das', 'die'],
            ['2格', 'dessen', 'deren', 'dessen', 'deren'],
            ['3格', 'dem', 'der', 'dem', 'denen'],
            ['4格', 'den', 'die', 'das', 'die'],
          ],
        },
        notes: ['Kennst du den Studenten dort? — Ja, den kenne ich.（彼を知っています。）'],
      },
      {
        heading: '④ 疑問代名詞',
        table: {
          headers: ['格', '人（誰）', '事物（何）'],
          rows: [
            ['1格', 'wer', 'was'],
            ['2格', 'wessen', '—'],
            ['3格', 'wem', '—'],
            ['4格', 'wen', 'was'],
          ],
        },
        notes: ['Wem schenkst du diesen Ring?（誰にこの指輪を贈るの？） / Wen besuchst du?（誰を訪ねるの？）'],
      },
    ],
  },
  {
    id: 6,
    title: '人称代名詞の格変化・前置詞の格支配',
    subtitle: 'Am Morgen gehen die Leute vor der Arbeit zur Bäckerei.',
    subtitleJa: '朝、人々は仕事の前にパン屋へ行きます。',
    themes: ['人称代名詞 3・4格', '前置詞の格支配', '融合形'],
    accent: '#8b5cf6',
    grammar: [
      {
        heading: '① 人称代名詞の3格・4格',
        table: {
          headers: ['1格', 'ich', 'du', 'er', 'sie', 'es', 'wir', 'ihr', 'sie', 'Sie'],
          rows: [
            ['3格', 'mir', 'dir', 'ihm', 'ihr', 'ihm', 'uns', 'euch', 'ihnen', 'Ihnen'],
            ['4格', 'mich', 'dich', 'ihn', 'sie', 'es', 'uns', 'euch', 'sie', 'Sie'],
          ],
        },
        notes: ['Du liebst ihn und sie liebt dich auch.（君は彼を愛し、彼女も君を愛している。）'],
      },
      {
        heading: '② 3格支配の前置詞',
        table: {
          headers: ['前置詞', '意味'],
          rows: [
            ['aus', '～の中から、～出身の'],
            ['bei', '～のもとで、～の際に'],
            ['mit', '～と一緒に、～で'],
            ['nach', '～の後で、～へ（地名）'],
            ['seit', '～以来'],
            ['von', '～から、～の'],
            ['zu', '～へ、～のために'],
          ],
        },
      },
      {
        heading: '③ 4格支配の前置詞',
        table: {
          headers: ['前置詞', '意味'],
          rows: [
            ['bis', '～まで'],
            ['für', '～のために'],
            ['gegen', '～に対して、～頃'],
            ['ohne', '～なしに'],
            ['um', '～の周りに、～時に'],
          ],
        },
      },
      {
        heading: '④ 3・4格支配の前置詞',
        body: 'an, auf, hinter, in, neben, über, unter, vor, zwischen の9個。意味で格が決まる。',
        table: {
          headers: ['格', '意味', '問い'],
          rows: [
            ['3格', '場所（静止・位置）', 'wo? どこに'],
            ['4格', '方向（移動）', 'wohin? どこへ'],
          ],
        },
        notes: [
          'Das Bild hängt an der Wand.（壁に掛かっている＝位置・3格）',
          'Ich hänge das Bild an die Wand.（壁に掛ける＝移動・4格）',
        ],
      },
      {
        heading: '⑤ 前置詞と定冠詞の融合形',
        table: {
          headers: ['融合形', '元の形', '例'],
          rows: [
            ['am', 'an + dem', 'am Meer'],
            ['im', 'in + dem', 'im Bett'],
            ['ins', 'in + das', 'ins Theater'],
            ['zur', 'zu + der', 'zur Bäckerei'],
            ['zum', 'zu + dem', 'zum Bahnhof'],
          ],
        },
      },
    ],
  },
  {
    id: 7,
    title: '話法の助動詞・未来形・従属の接続詞',
    subtitle: 'Er möchte dieses Jahr mit seiner Frau in die Türkei fahren.',
    subtitleJa: '彼は今年妻とトルコへ行きたいと思っています。',
    themes: ['話法の助動詞', '未来形 werden', '従属接続詞'],
    accent: '#ef4444',
    grammar: [
      {
        heading: '① 話法の助動詞の人称変化',
        body: 'ich と er/sie/es が同形になり、語幹の母音が単数で変わるものが多い。',
        table: {
          headers: ['', 'dürfen', 'können', 'mögen', 'müssen', 'sollen', 'wollen', 'möchte'],
          rows: [
            ['ich', 'darf', 'kann', 'mag', 'muss', 'soll', 'will', 'möchte'],
            ['du', 'darfst', 'kannst', 'magst', 'musst', 'sollst', 'willst', 'möchtest'],
            ['er/sie/es', 'darf', 'kann', 'mag', 'muss', 'soll', 'will', 'möchte'],
            ['wir', 'dürfen', 'können', 'mögen', 'müssen', 'sollen', 'wollen', 'möchten'],
            ['ihr', 'dürft', 'könnt', 'mögt', 'müsst', 'sollt', 'wollt', 'möchtet'],
            ['sie/Sie', 'dürfen', 'können', 'mögen', 'müssen', 'sollen', 'wollen', 'möchten'],
          ],
        },
      },
      {
        heading: '② 助動詞の語順（枠構造）',
        body: '助動詞は定動詞として2番目、本動詞は不定詞（原形）で文末に置く。',
        table: {
          headers: ['1番目', '定動詞（助動詞）', '…', '文末（不定詞）'],
          rows: [
            ['Ich', 'will', 'hier ein Buch', 'kaufen.'],
            ['Mein Bruder', 'kann', 'gut Klavier', 'spielen.'],
          ],
        },
      },
      {
        heading: '③ 未来形（werden + 不定詞）',
        body: 'werden を定動詞として2番目、不定詞を文末に置く。',
        table: {
          headers: ['主語', '用法', '例'],
          rows: [
            ['ich/du/wir/ihr', '意志（するつもりだ）', 'Ich werde immer helfen.'],
            ['er/sie/es/sie', '推量（だろう）', 'Er wird wohl krank sein.'],
          ],
        },
        notes: ['morgen など未来を示す語があれば、現在形でも未来を表せる。'],
      },
      {
        heading: '④ 従属の接続詞と定動詞の文末',
        body: '従属の接続詞が導く文（従属文）では、定動詞は文末に置かれる。',
        table: {
          headers: ['接続詞', '意味'],
          rows: [
            ['als', '～したとき'],
            ['dass', '～ということ'],
            ['ob', '～かどうか'],
            ['weil', '～なので'],
            ['obwohl', '～にもかかわらず'],
            ['wenn', '～ならば／～するとき'],
          ],
        },
        notes: [
          'Frau Bauer bleibt zu Hause, weil das Wetter schlecht ist.',
          '従属文が文頭にくると、主文の定動詞はコンマ直後（全体の2番目）に置く: Weil das Wetter schlecht ist, bleibt sie zu Hause.',
        ],
      },
    ],
  },
  {
    id: 8,
    title: '格支配 完全マスター（自動詞・他動詞）',
    subtitle: 'Ich gebe dem Kind das Buch.',
    subtitleJa: '私はその子にその本を与えます。',
    themes: ['4格動詞', '3格動詞', '3格＋4格動詞', '自動詞・他動詞', '二重4格'],
    accent: '#14b8a6',
    grammar: [
      {
        heading: '① 格支配とは',
        body: '動詞はそれぞれ「どの格の目的語をとるか」が決まっている。これを格支配という。日本語の助詞（～を／～に）と必ずしも一致しないので、動詞と格をセットで覚えるのが鉄則。',
        table: {
          headers: ['タイプ', 'とる格', '代表的な動詞'],
          rows: [
            ['他動詞（4格）', '4格（～を）', 'kennen, sehen, kaufen, lieben, fragen'],
            ['3格をとる動詞', '3格（～に）', 'helfen, danken, gehören, antworten'],
            ['3格＋4格', '3格＋4格（～に～を）', 'geben, schenken, zeigen, bringen'],
            ['自動詞', '目的語なし／前置詞句', 'wohnen, fahren, liegen, stehen'],
          ],
        },
      },
      {
        heading: '② 4格をとる動詞（他動詞）',
        body: '「～を」にあたる直接目的語（4格）をとる動詞。最も数が多い基本タイプ。',
        table: {
          headers: ['動詞', '意味', '例'],
          rows: [
            ['kennen', '知っている', 'Ich kenne den Mann.'],
            ['besuchen', '訪ねる', 'Wir besuchen die Oma.'],
            ['fragen', '質問する', 'Er fragt den Lehrer.'],
            ['finden', '～だと思う', 'Ich finde den Film gut.'],
            ['brauchen', '必要とする', 'Sie braucht einen Stift.'],
            ['suchen', '探す', 'Ich suche den Schlüssel.'],
          ],
        },
        notes: ['fragen（質問する）は日本語の「～に質問する」につられて3格にしないよう注意。4格支配。'],
      },
      {
        heading: '③ 3格をとる動詞',
        body: '日本語では「～を」と訳せても、ドイツ語では3格（～に）をとる動詞がある。数が限られるので丸暗記が有効。',
        table: {
          headers: ['動詞', '意味', '例'],
          rows: [
            ['helfen', '助ける／手伝う', 'Ich helfe dem Mann.'],
            ['danken', '感謝する', 'Ich danke dir.'],
            ['gehören', '～のものだ', 'Das Buch gehört mir.'],
            ['antworten', '答える', 'Er antwortet dem Lehrer.'],
            ['gefallen', '気に入る', 'Das Bild gefällt mir.'],
            ['folgen', 'ついて行く', 'Der Hund folgt dem Kind.'],
            ['begegnen', '出会う', 'Ich begegne einem Freund.'],
            ['gratulieren', '祝う', 'Wir gratulieren dir.'],
          ],
        },
        notes: [
          'helfen, danken, gehören, antworten, gefallen, folgen, begegnen, gratulieren, schmecken, passen は3格支配の代表。',
          'gefallen / schmecken / gehören は「物が主語（1格）＋人が3格」の語順になりやすい（Das Buch gehört mir.）。',
        ],
      },
      {
        heading: '④ 3格＋4格をとる動詞',
        body: '「（人）に（物）を」のように、3格（人）と4格（物）の2つの目的語をとる動詞。授与・伝達を表すものが多い。',
        table: {
          headers: ['動詞', '意味', '例（3格＝人／4格＝物）'],
          rows: [
            ['geben', '与える', 'Ich gebe dem Kind das Buch.'],
            ['schenken', '贈る', 'Er schenkt der Mutter Blumen.'],
            ['zeigen', '見せる', 'Sie zeigt mir das Foto.'],
            ['bringen', '持って来る', 'Ich bringe dir den Kaffee.'],
            ['erzählen', '話して聞かせる', 'Oma erzählt uns eine Geschichte.'],
            ['schicken', '送る', 'Ich schicke ihm einen Brief.'],
            ['empfehlen', '勧める', 'Ich empfehle Ihnen das Buch.'],
            ['leihen', '貸す', 'Er leiht mir das Auto.'],
          ],
        },
        notes: [
          '語順は通常「3格（人）→ 4格（物）」。ただし4格が代名詞だと「4格 → 3格」になる（Ich gebe es dem Kind.）。',
          '名詞と代名詞では「代名詞が先」。Ich gebe ihm das Buch. / Ich gebe es ihm.',
        ],
      },
      {
        heading: '⑥ 二重4格（4格＋4格）をとる動詞',
        body: '通常の他動詞は4格目的語を1つとるが、一部の動詞は「人（4格）＋物/内容（4格）」という2つの4格目的語をとる。「人に」にあたる部分でも3格にならない点に注意。',
        table: {
          headers: ['動詞', '意味', '例（二重4格）'],
          rows: [
            ['kosten', '（費用・時間が）かかる', 'Das kostet mich viel Geld.'],
            ['lehren', '教える', 'Er lehrt mich Deutsch.'],
            ['nennen', '呼ぶ・名付ける', 'Ich nenne ihn einen Freund.'],
            ['fragen', '尋ねる', 'Er fragt mich etwas.'],
          ],
        },
        notes: [
          '「人に（相当）」の部分が3格ではなく4格になる：mich / dich / ihn / sie / uns / euch / sie。',
          '3格支配の helfen（Ich helfe ihm.）や geben（Ich gebe ihm das Buch.）と混同しないよう対比して覚える。',
        ],
      },
      {
        heading: '⑤ 自動詞と他動詞（位置・移動のペア）',
        body: '4格目的語をとるのが他動詞、とらないのが自動詞。特に「位置（自動詞）」と「移動・設置（他動詞）」で形が似たペアに注意。他動詞は4格＋4格支配の前置詞、自動詞は位置＋3格支配の前置詞をとる。',
        table: {
          headers: ['自動詞（～にある／いる）', '他動詞（～に置く）', '意味'],
          rows: [
            ['liegen（横たわっている）', 'legen（横にして置く）', '寝かせる'],
            ['stehen（立っている）', 'stellen（立てて置く）', '立てる'],
            ['sitzen（座っている）', 'setzen（座らせる）', '座らせる'],
            ['hängen（掛かっている・自）', 'hängen（掛ける・他）', '掛ける'],
          ],
        },
        notes: [
          '自動詞は4格目的語をとらず、場所は「3格（wo? どこに）」。Das Buch liegt auf dem Tisch.',
          '他動詞は4格目的語をとり、方向は「4格（wohin? どこへ）」。Ich lege das Buch auf den Tisch.',
          '自動詞 liegen-lag / stehen-stand は強変化、他動詞 legen-legte / stellen-stellte は弱変化。',
        ],
      },
    ],
  },
];
