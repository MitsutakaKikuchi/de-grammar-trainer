/**
 * ドイツ語問題データ（questions.js）生成スクリプト。
 * 出典: ドイツ語テキスト_Lektion1-7_学習資料.md の各Lektion練習問題(Übung)・例文。
 * 形式: 組み立て式（chips=並び替え / tiles=語形変化タップ）と 択一式（choices）。
 *
 * 問題文(ja)のルール（ユーザー指示）:
 *   - 格・方向・人称・動詞の意味などのヒントは問題文に書かない。
 *   - 示してよいのは「名詞の性」のみ（例: Mutter＝女性）。冠詞は性から格に応じて選ばせる。
 *   - 解答を一意にするための語順制約（「Morgen で始める」等）は可。
 * L7は話法の助動詞まで（未来形・従属接続詞は含めない）。L8は格支配の総合（択一）。
 * 実行: node gen_questions.js → ../../js/data/questions.js を出力。手で questions.js を編集しない。
 */
'use strict';
const fs = require('fs');
const path = require('path');

/* 性別ごとの冠詞・冠詞類の格変化形（タイルの forms）。性は問題文で与え、格は学習者が判断する。 */
const ARTM = ['der', 'des', 'dem', 'den'];
const ARTF = ['die', 'der'];
const ARTN = ['das', 'des', 'dem'];
const ARTPL = ['die', 'der', 'den'];
const EINM = ['ein', 'eines', 'einem', 'einen'];
const EINF = ['eine', 'einer'];
const EINN = ['ein', 'eines', 'einem'];
const DIESM = ['dieser', 'dieses', 'diesem', 'diesen'];
const MEINF = ['meine', 'meiner'];
const DEINM = ['dein', 'deines', 'deinem', 'deinen'];
const SEINF = ['seine', 'seiner'];
const UNSERF = ['unsere', 'unserer'];
const KEINM = ['kein', 'keines', 'keinem', 'keinen'];
const IHR_PL = ['ihre', 'ihrer', 'ihren', 'ihrem'];
const IHR_N = ['ihr', 'ihre', 'ihren'];
const f = (forms, answer) => ({ forms, answer });

const P = [];
const add = (o) => P.push(o);

/* ---- Lektion 1: 規則動詞の人称変化・語順 ---- */
add({ lektion: 1, category: '動詞の人称変化', ja: '君は何を飲むの？',
  tiles: ['Was', f(['trinke', 'trinkst', 'trinkt'], 'trinkst'), 'du'], sentence: 'Was trinkst du?',
  hint: 'trinken（飲む）。du の語尾は -st。', exp: 'du trinkst（語幹 trink- ＋ -st）。', tip: '人称語尾: ich-e / du-st / er-t / wir-en / ihr-t / sie-en。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '私はコーヒーを飲みます。',
  tiles: ['Ich', f(['trinke', 'trinkst', 'trinkt'], 'trinke'), 'Kaffee'], sentence: 'Ich trinke Kaffee.',
  hint: 'trinken。ich の語尾は -e。', exp: 'ich trinke（-e）。', tip: '主語に合わせて語尾を変える。' });
add({ lektion: 1, category: '動詞の人称変化', ja: 'ミュラーさんはとても上手に泳ぎます。',
  tiles: ['Frau Müller', f(['schwimme', 'schwimmst', 'schwimmt'], 'schwimmt'), 'sehr', 'gut'], sentence: 'Frau Müller schwimmt sehr gut.',
  hint: 'schwimmen（泳ぐ）。er/sie/es は -t。', exp: '3人称単数 → schwimmt。', tip: '人名・Frau/Herr＋名前は er/sie/es 扱い。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '君はハンブルク出身なの？',
  tiles: [f(['Komme', 'Kommst', 'Kommt'], 'Kommst'), 'du', 'aus', 'Hamburg'], sentence: 'Kommst du aus Hamburg?',
  hint: 'kommen（来る/出身）。疑問文は〈定動詞＋主語〉。', exp: 'Kommst du …?（du の -st）。', tip: '決定疑問文は動詞が文頭。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '私はベルリン出身です。',
  tiles: ['Ich', f(['komme', 'kommst', 'kommt'], 'komme'), 'aus', 'Berlin'], sentence: 'Ich komme aus Berlin.',
  hint: 'kommen。aus＋場所で「〜出身」。', exp: 'ich komme aus Berlin。', tip: 'aus＋3格で出身・出所。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '君は熱心に働くね。',
  tiles: ['Du', f(['arbeite', 'arbeitest', 'arbeitet'], 'arbeitest'), 'fleißig'], sentence: 'Du arbeitest fleißig.',
  hint: 'arbeiten（働く）。語幹 -t は du で口調の e。', exp: 'arbeit- ＋ -est → arbeitest。', tip: '-t/-d 語幹は du -est, er -et。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '君は旅行が好き？',
  tiles: [f(['Reise', 'Reist', 'Reisen'], 'Reist'), 'du', 'gern'], sentence: 'Reist du gern?',
  hint: 'reisen（旅行する）。語幹 -s は du で -t のみ。', exp: 'reis- ＋ -t → du reist。', tip: '-s/-ß/-z 語幹は du -t。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '今晩私はベートーヴェンを聴きます。（Heute Abend で始める）',
  tiles: ['Heute Abend', f(['höre', 'hörst', 'hört'], 'höre'), 'ich', 'Beethoven'], sentence: 'Heute Abend höre ich Beethoven.',
  hint: 'hören（聴く）。文頭が時の副詞→倒置。', exp: 'Heute Abend(1) höre(2) ich …。', tip: '文頭が副詞でも定動詞は2番目。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '君は今どこへ行くの？',
  tiles: ['Wohin', f(['gehe', 'gehst', 'geht'], 'gehst'), 'du', 'jetzt'], sentence: 'Wohin gehst du jetzt?',
  hint: 'gehen（行く）。wohin＝どこへ。', exp: 'Wohin gehst du jetzt?', tip: '疑問詞＋定動詞＋主語。' });
add({ lektion: 1, category: '動詞の人称変化', ja: 'マイヤーさんはどこに住んでいますか？',
  tiles: ['Wo', f(['wohne', 'wohnst', 'wohnt'], 'wohnt'), 'Herr Meier'], sentence: 'Wo wohnt Herr Meier?',
  hint: 'wohnen（住む）。Herr Meier は3人称単数。', exp: 'Wo wohnt Herr Meier?', tip: 'wo＝どこに（位置）。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '君たちは今日テニスをします。',
  tiles: ['Ihr', f(['spiele', 'spielst', 'spielt', 'spielen'], 'spielt'), 'heute', 'Tennis'], sentence: 'Ihr spielt heute Tennis.',
  hint: 'spielen（する）。ihr の語尾は -t。', exp: 'ihr spielt（-t）。', tip: 'ihr は -t、wir/sie は -en。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '彼は今法律を勉強していますか？',
  tiles: [f(['Studiere', 'Studierst', 'Studiert'], 'Studiert'), 'er', 'jetzt', 'Jura'], sentence: 'Studiert er jetzt Jura?',
  hint: 'studieren（専攻する）。er は -t。', exp: 'Studiert er jetzt Jura?', tip: '疑問文は動詞が文頭。' });
add({ lektion: 1, category: '語順（定動詞第2位）', ja: '彼はサッカーをするのが好きです。',
  chips: 'Er / spielt / gern / Fußball', sentence: 'Er spielt gern Fußball.',
  hint: '定動詞は2番目。', exp: 'Er(1) spielt(2) gern Fußball。', tip: '定動詞第2位の原則。' });
add({ lektion: 1, category: '語順（倒置）', ja: '明日フランツはサッカーをします。（Morgen で始める）',
  chips: 'Morgen / spielt / Franz / Fußball', sentence: 'Morgen spielt Franz Fußball.',
  hint: '文頭が「明日」でも定動詞は2番目。', exp: 'Morgen(1) spielt(2) Franz …（倒置）。', tip: '文頭に副詞→主語と動詞が入れ替わる。' });
add({ lektion: 1, category: '語順（疑問詞）', ja: '今日彼は何をしますか？',
  chips: 'Was / macht / er / heute', sentence: 'Was macht er heute?',
  hint: '疑問詞が1番目でも定動詞は2番目。', exp: 'Was(1) macht(2) er heute?', tip: '疑問詞＋定動詞＋主語。' });
add({ lektion: 1, category: '語順（倒置）', ja: '明日彼はドイツへ飛びます。（Morgen で始める）',
  chips: 'Morgen / fliegt / er / nach / Deutschland', sentence: 'Morgen fliegt er nach Deutschland.',
  hint: 'fliegen（飛行機で行く）。nach＋地名。', exp: 'Morgen fliegt er nach Deutschland.', tip: 'nach＋無冠詞の地名。' });

/* ---- Lektion 2: sein/haben・名詞の性・複数 ---- */
add({ lektion: 2, category: 'sein / haben', ja: '私は大学生で、君も大学生だ。',
  tiles: ['Ich', f(['bin', 'bist', 'ist'], 'bin'), 'Student', 'und', 'du', f(['bin', 'bist', 'ist'], 'bist'), 'auch', 'Student'],
  sentence: 'Ich bin Student und du bist auch Student.', hint: 'sein。ich→bin, du→bist。', exp: 'sein: ich bin / du bist。', tip: 'sein は不規則。bin/bist/ist を丸暗記。' });
add({ lektion: 2, category: 'sein / haben', ja: '君はお腹が空いてる？',
  tiles: [f(['Habe', 'Hast', 'Hat'], 'Hast'), 'du', 'Hunger'], sentence: 'Hast du Hunger?',
  hint: 'haben（持つ）。Hunger haben＝空腹。du→hast。', exp: 'haben: du hast。', tip: '「空腹・渇き」は haben で表す。' });
add({ lektion: 2, category: 'sein / haben', ja: 'ユストさんは頭痛がします。',
  tiles: ['Frau Just', f(['habe', 'hast', 'hat'], 'hat'), 'Kopfschmerzen'], sentence: 'Frau Just hat Kopfschmerzen.',
  hint: 'haben。3人称単数→hat。', exp: 'haben: er/sie/es hat。', tip: '痛みは Schmerzen（複数）＋ haben。' });
add({ lektion: 2, category: 'sein / haben', ja: 'あなたのご職業は何ですか？',
  tiles: ['Was', f(['bin', 'bist', 'sind'], 'sind'), 'Sie', 'von Beruf'], sentence: 'Was sind Sie von Beruf?',
  hint: 'sein。Sie（敬称）→sind。', exp: 'sein: Sie sind。', tip: '職業を尋ねる定型 Was sind Sie von Beruf?' });
add({ lektion: 2, category: 'sein / haben', ja: '彼は教師です。',
  tiles: ['Er', f(['bin', 'bist', 'ist'], 'ist'), 'Lehrer'], sentence: 'Er ist Lehrer.',
  hint: 'sein。er→ist。', exp: 'sein: er ist。', tip: '職業・身分は無冠詞で言う。' });
add({ lektion: 2, category: 'sein / haben', ja: '私はのどが渇いています。',
  tiles: ['Ich', f(['habe', 'hast', 'hat'], 'habe'), 'Durst'], sentence: 'Ich habe Durst.',
  hint: 'haben。Durst haben＝のどが渇く。', exp: 'haben: ich habe。', tip: 'Durst（渇き）も haben。' });
add({ lektion: 2, category: '名詞の性（不定冠詞）', ja: '一人の男性がそこで歌っています。（Mann＝男性）',
  tiles: [f(['Ein', 'Eine'], 'Ein'), 'Mann', 'singt', 'dort'], sentence: 'Ein Mann singt dort.',
  hint: '男性・中性は ein、女性は eine。', exp: 'der Mann（男性）→ 不定冠詞 ein。', tip: '不定冠詞: 男/中 ein, 女 eine。' });
add({ lektion: 2, category: '名詞の性（不定冠詞）', ja: '一人の女性がコーヒーを飲んでいます。（Frau＝女性）',
  tiles: [f(['Ein', 'Eine'], 'Eine'), 'Frau', 'trinkt', 'Kaffee'], sentence: 'Eine Frau trinkt Kaffee.',
  hint: '女性名詞は eine。', exp: 'die Frau（女性）→ eine。', tip: '性は冠詞ごと覚える。' });
add({ lektion: 2, category: '名詞の性（定冠詞1格）', ja: 'その男性はペーターという名前です。（Mann＝男性）',
  tiles: [f(['Der', 'Die', 'Das'], 'Der'), 'Mann', 'heißt', 'Peter'], sentence: 'Der Mann heißt Peter.',
  hint: '男性の定冠詞（1格）は der。', exp: 'der Mann（男性1格）。', tip: '定冠詞1格: 男 der / 女 die / 中 das。' });
add({ lektion: 2, category: '名詞の性（定冠詞1格）', ja: 'その女性はドイツ出身です。（Frau＝女性）',
  tiles: [f(['Der', 'Die', 'Das'], 'Die'), 'Frau', 'kommt', 'aus', 'Deutschland'], sentence: 'Die Frau kommt aus Deutschland.',
  hint: '女性の定冠詞（1格）は die。', exp: 'die Frau（女性1格）。', tip: '性を覚えていれば冠詞は決まる。' });
add({ lektion: 2, category: '複数形', ja: '「犬（der Hund）」の複数形は？',
  choices: ['die Hunde', 'die Hunden', 'die Hünde', 'die Hunds'], answer: 0, hint: 'e式（-e を付ける）。', exp: 'Hund → Hunde（e式）。', tip: '複数の定冠詞は性に関係なく die。' });
add({ lektion: 2, category: '複数形', ja: '「子供（das Kind）」の複数形は？',
  choices: ['die Kinder', 'die Kindern', 'die Kinde', 'die Kinds'], answer: 0, hint: 'er式（-er を付ける）。', exp: 'Kind → Kinder（er式）。', tip: '中性短音節は er式が多い。' });
add({ lektion: 2, category: '複数形', ja: '「父（der Vater）」の複数形は？',
  choices: ['die Väter', 'die Vater', 'die Vaters', 'die Vatern'], answer: 0, hint: '無語尾式＋ウムラウト。', exp: 'Vater → Väter（幹母音がウムラウト）。', tip: '-er/-el で終わる男性は無語尾＋ウムラウトが多い。' });
add({ lektion: 2, category: '語順（倒置）', ja: 'ここは天気がとても良いです。（Hier で始める）',
  chips: 'Hier / ist / das Wetter / sehr / schön', sentence: 'Hier ist das Wetter sehr schön.',
  hint: '文頭が Hier でも定動詞は2番目。', exp: 'Hier(1) ist(2) das Wetter …。', tip: '場所の副詞で始めると倒置。' });

/* ---- Lektion 3: 格変化・動詞の格支配 ---- */
add({ lektion: 3, category: '動詞の格支配', ja: '息子は母に雑誌を持ってくる。（Mutter＝女性, Zeitschrift＝女性）',
  tiles: ['Der Sohn', 'bringt', f(ARTF, 'der'), 'Mutter', f(EINF, 'eine'), 'Zeitschrift'], sentence: 'Der Sohn bringt der Mutter eine Zeitschrift.',
  hint: 'bringen は「（人）に（物）を」。母＝受け手、雑誌＝渡す物。', exp: 'der Mutter（3格）/ eine Zeitschrift（4格）。', tip: '「人に物を」型は 3格＋4格。' });
add({ lektion: 3, category: '動詞の格支配', ja: '彼女は叔母に手紙を書く。（Tante＝女性, Brief＝男性）',
  tiles: ['Sie', 'schreibt', f(ARTF, 'der'), 'Tante', f(EINM, 'einen'), 'Brief'], sentence: 'Sie schreibt der Tante einen Brief.',
  hint: 'schreiben は「（人）に（物）を」。', exp: 'der Tante（3格）/ einen Brief（男性4格）。', tip: '男性4格は冠詞が -en（den/einen）。' });
add({ lektion: 3, category: '動詞の格支配', ja: '私はその通りを知らない。（Straße＝女性）',
  tiles: ['Ich', 'kenne', f(ARTF, 'die'), 'Straße', 'nicht'], sentence: 'Ich kenne die Straße nicht.',
  hint: 'kennen は「〜を」。', exp: 'die Straße（女性4格）。', tip: '女性は1格と4格が同形（die）。' });
add({ lektion: 3, category: '動詞の格支配', ja: '先生は（一人の）生徒に質問する。（Schüler＝男性）',
  tiles: ['Der Lehrer', 'fragt', f(EINM, 'einen'), 'Schüler'], sentence: 'Der Lehrer fragt einen Schüler.',
  hint: 'fragen は「〜に質問する」でも直接目的語をとる。', exp: 'einen Schüler（男性4格）。', tip: 'fragen は日本語の「に」につられない。' });
add({ lektion: 3, category: '動詞の格支配', ja: 'その生徒は先生に答える。（Schüler＝男性, Lehrer＝男性）',
  tiles: ['Der Schüler', 'antwortet', f(ARTM, 'dem'), 'Lehrer'], sentence: 'Der Schüler antwortet dem Lehrer.',
  hint: 'antworten は答える相手をとる。', exp: 'dem Lehrer（男性3格）。', tip: 'antworten/danken/helfen はこのタイプ。' });
add({ lektion: 3, category: '動詞の格支配', ja: '父は子供たちに童話を語る。（Kinder＝複数, Märchen＝中性）',
  tiles: ['Der Vater', 'erzählt', f(ARTPL, 'den'), 'Kindern', f(EINN, 'ein'), 'Märchen'], sentence: 'Der Vater erzählt den Kindern ein Märchen.',
  hint: 'erzählen は「（人）に（話）を」。複数は名詞に -n。', exp: 'den Kindern（複数）/ ein Märchen（中性）。', tip: '複数は冠詞 den＋名詞語尾 -n。' });
add({ lektion: 3, category: '動詞の格支配', ja: 'ハンドバッグはその女性のものだ。（Frau＝女性）',
  tiles: ['Die Handtasche', 'gehört', f(ARTF, 'der'), 'Frau'], sentence: 'Die Handtasche gehört der Frau.',
  hint: 'gehören は「〜のものだ」。所有者をとる。', exp: 'der Frau（女性）。', tip: '女性の2格・3格は der。' });
add({ lektion: 3, category: '動詞の格支配', ja: 'オートバイはその男性のものだ。（Mann＝男性）',
  tiles: ['Das Motorrad', 'gehört', f(ARTM, 'dem'), 'Mann'], sentence: 'Das Motorrad gehört dem Mann.',
  hint: 'gehören は所有者をとる。', exp: 'dem Mann（男性）。', tip: 'gehören は「〜のものだ」。' });
add({ lektion: 3, category: '動詞の格支配', ja: '少女は（女の）友達に写真を見せる。（Freundin＝女性, Foto＝中性）',
  tiles: ['Das Mädchen', 'zeigt', f(EINF, 'einer'), 'Freundin', f(EINN, 'ein'), 'Foto'], sentence: 'Das Mädchen zeigt einer Freundin ein Foto.',
  hint: 'zeigen は「（人）に（物）を」。', exp: 'einer Freundin / ein Foto。', tip: '不定冠詞 女性3格＝einer。' });
add({ lektion: 3, category: '動詞の格支配', ja: '私はその子供に本を贈ります。（Kind＝中性, Buch＝中性）',
  tiles: ['Ich', 'schenke', f(ARTN, 'dem'), 'Kind', f(ARTN, 'das'), 'Buch'], sentence: 'Ich schenke dem Kind das Buch.',
  hint: 'schenken は「（人）に（物）を」。', exp: 'dem Kind（中性3格）/ das Buch（中性4格）。', tip: '中性は1格と4格が同形（das）。' });
add({ lektion: 3, category: '動詞の格支配', ja: '彼女はその子供たちに感謝します。（Kinder＝複数）',
  tiles: ['Sie', 'dankt', f(ARTPL, 'den'), 'Kindern'], sentence: 'Sie dankt den Kindern.',
  hint: 'danken は感謝する相手をとる。複数は -n。', exp: 'den Kindern（複数）。', tip: '複数3格は den＋語尾 -n。' });
add({ lektion: 3, category: '動詞の格支配', ja: '先生は子供たちを褒める。（Kinder＝複数）',
  tiles: ['Der Lehrer', 'lobt', f(ARTPL, 'die'), 'Kinder'], sentence: 'Der Lehrer lobt die Kinder.',
  hint: 'loben は「〜を」。複数。', exp: 'die Kinder（複数の直接目的語）。', tip: '複数1・4格の冠詞は die。' });
add({ lektion: 3, category: '2格（所有）', ja: 'その男性の車は新しい。（Mann＝男性）',
  tiles: ['Der Wagen', f(ARTM, 'des'), 'Mannes', 'ist', 'neu'], sentence: 'Der Wagen des Mannes ist neu.',
  hint: '「〜の」を表す形。男性は冠詞 des＋名詞 -(e)s。', exp: 'des Mannes（男性2格）。', tip: '男性・中性2格は des、名詞も -(e)s。' });
add({ lektion: 3, category: '2格（所有）', ja: '彼はある医者の娘を愛している。（Arzt＝男性）',
  tiles: ['Er', 'liebt', 'die Tochter', f(EINM, 'eines'), 'Arztes'], sentence: 'Er liebt die Tochter eines Arztes.',
  hint: '「ある医者の」は2格。男性は eines＋名詞 -es。', exp: 'eines Arztes（男性2格）。', tip: '2格は後ろから名詞を修飾。' });
add({ lektion: 3, category: '語順（2格）', ja: 'これは友人の携帯電話です。（des Freundes＝友人の）',
  chips: 'Das / ist / das Handy / des Freundes', sentence: 'Das ist das Handy des Freundes.',
  hint: '2格は修飾する名詞の後ろ。', exp: 'das Handy des Freundes（友人の携帯）。', tip: '2格は後置で「〜の」。' });

/* ---- Lektion 4: 不規則変化動詞・命令形 ---- */
add({ lektion: 4, category: '不規則動詞', ja: '君はその錠剤を飲む？',
  tiles: [f(['Nehme', 'Nimmst', 'Nimmt'], 'Nimmst'), 'du', 'die Tabletten'], sentence: 'Nimmst du die Tabletten?',
  hint: 'nehmen（取る/飲む）。du/er で nimm- に変化。', exp: 'du nimmst（nehm→nimm）。', tip: 'nehmen は du nimmst, er nimmt。' });
add({ lektion: 4, category: '不規則動詞', ja: '私は朝に錠剤を飲みます。',
  tiles: ['Ich', f(['nehme', 'nimmst', 'nimmt'], 'nehme'), 'morgens', 'die Tabletten'], sentence: 'Ich nehme morgens die Tabletten.',
  hint: 'nehmen。ich は語幹そのまま。', exp: 'ich nehme（1人称は変化なし）。', tip: '語幹変化は du と er/sie/es だけ。' });
add({ lektion: 4, category: '不規則動詞', ja: 'マリアは今日その友人に会う？',
  tiles: [f(['Treffe', 'Triffst', 'Trifft'], 'Trifft'), 'Maria', 'heute', 'den Freund'], sentence: 'Trifft Maria heute den Freund?',
  hint: 'treffen（会う）。e→i。Maria は3人称単数。', exp: 'er/sie trifft（treff→triff）。', tip: 'treffen は4格をとる。' });
add({ lektion: 4, category: '不規則動詞', ja: '君は推理小説を読む？',
  tiles: [f(['Lese', 'Liest', 'Lest'], 'Liest'), 'du', 'einen Krimi'], sentence: 'Liest du einen Krimi?',
  hint: 'lesen（読む）。e→ie。', exp: 'du liest（les→lies）。', tip: 'sehen/lesen/empfehlen は e→ie。' });
add({ lektion: 4, category: '不規則動詞', ja: 'フランツはその少女に時計をあげる。（Mädchen＝中性, Uhr＝女性）',
  tiles: ['Franz', f(['gebe', 'gibst', 'gibt'], 'gibt'), 'dem Mädchen', 'die Uhr'], sentence: 'Franz gibt dem Mädchen die Uhr.',
  hint: 'geben（与える）。e→i。', exp: 'er gibt（geb→gib）。', tip: 'geben は「（人）に（物）を」。' });
add({ lektion: 4, category: '不規則動詞', ja: 'アンナは魚を好んで食べる。',
  tiles: ['Anna', f(['esse', 'isst', 'essen'], 'isst'), 'gern', 'Fisch'], sentence: 'Anna isst gern Fisch.',
  hint: 'essen（食べる）。e→i。', exp: 'sie isst（ess→iss）。', tip: 'essen の du と er は同形 isst。' });
add({ lektion: 4, category: '不規則動詞', ja: 'ハンスは明日ボンへ行く？',
  tiles: [f(['Fahre', 'Fährst', 'Fährt'], 'Fährt'), 'Hans', 'morgen', 'nach Bonn'], sentence: 'Fährt Hans morgen nach Bonn?',
  hint: 'fahren（乗り物で行く）。a→ä。', exp: 'er fährt（fahr→fähr）。', tip: 'fahren/tragen/schlafen は a→ä。' });
add({ lektion: 4, category: '不規則動詞', ja: 'オットーはひげをはやしている？',
  tiles: [f(['Trage', 'Trägst', 'Trägt'], 'Trägt'), 'Otto', 'einen Bart'], sentence: 'Trägt Otto einen Bart?',
  hint: 'tragen（運ぶ・着る・生やす）。a→ä。', exp: 'er trägt。', tip: 'tragen は a→ä。' });
add({ lektion: 4, category: '不規則動詞', ja: 'あそこの教会が見えますか？（Kirche＝女性）',
  tiles: [f(['Sehe', 'Siehst', 'Sieht'], 'Siehst'), 'du', 'die Kirche', 'dort'], sentence: 'Siehst du die Kirche dort?',
  hint: 'sehen（見る）。e→ie。', exp: 'du siehst（seh→sieh）。', tip: 'die Kirche（女性4格）。' });
add({ lektion: 4, category: '不規則動詞', ja: 'フランツはのちに教師になります。',
  tiles: ['Franz', f(['werde', 'wirst', 'wird'], 'wird'), 'später', 'Lehrer'], sentence: 'Franz wird später Lehrer.',
  hint: 'werden（〜になる）。er→wird。', exp: 'er wird（不規則）。', tip: 'werden: du wirst, er wird。' });
add({ lektion: 4, category: '命令形', ja: 'ハンス、座って！（Platz nehmen＝着席する）',
  chips: 'Nimm / Platz', sentence: 'Nimm Platz!',
  hint: 'nehmen の du 命令は Nimm。', exp: 'e→i 動詞の du 命令は変化形のまま: Nimm!', tip: 'du命令: 語幹のみ（e→i は維持）。' });
add({ lektion: 4, category: '命令形', ja: 'lesen（読む）の du に対する命令形は？',
  choices: ['Lies', 'Lese', 'Liest', 'Les'], answer: 0, hint: 'e→ie は命令でも維持。', exp: 'lesen → Lies!', tip: 'e→ie/e→i 動詞の du 命令は変化形。' });
add({ lektion: 4, category: '命令形', ja: 'essen（食べる）の du に対する命令形は？',
  choices: ['Iss', 'Esse', 'Isst', 'Es'], answer: 0, hint: 'e→i は命令でも維持。', exp: 'essen → Iss!', tip: '語尾 e は付けない。' });
add({ lektion: 4, category: '命令形', ja: 'sprechen（話す）の du に対する命令形は？',
  choices: ['Sprich', 'Sprech', 'Sprichst', 'Spreche'], answer: 0, hint: 'e→i は命令でも維持。', exp: 'sprechen → Sprich!', tip: '×Sprech ではなく Sprich。' });
add({ lektion: 4, category: '命令形', ja: 'ワルターさん、ゆっくり話してください！（Sie に対する命令）',
  chips: 'Sprechen / Sie / bitte / langsam', sentence: 'Sprechen Sie bitte langsam!',
  hint: 'Sie命令は〈動詞＋Sie〉。', exp: 'Sprechen Sie …!', tip: 'Sie命令は不定詞と同形＋Sie。' });
add({ lektion: 4, category: '命令形', ja: 'ハンスとアンナ、静かにして！（ihr に対する命令）',
  chips: 'Seid / ruhig', sentence: 'Seid ruhig!',
  hint: 'sein の ihr 命令は Seid。', exp: 'ihr命令は ihr の形: Seid!', tip: 'sein: du sei / ihr seid / Sie seien Sie。' });

/* ---- Lektion 5: 定冠詞類・所有冠詞・疑問代名詞 ---- */
add({ lektion: 5, category: '定冠詞類', ja: '私はこの車を買います。（Wagen＝男性）',
  tiles: ['Ich', 'kaufe', f(DIESM, 'diesen'), 'Wagen'], sentence: 'Ich kaufe diesen Wagen.',
  hint: 'dieser は定冠詞と同じ変化。「〜を」。', exp: 'diesen Wagen（男性の直接目的語）。', tip: 'dieser/jeder/welcher は der型変化。' });
add({ lektion: 5, category: '定冠詞類', ja: 'どの女性がそれですか？（Frau＝女性）',
  tiles: [f(['Welcher', 'Welche', 'Welches'], 'Welche'), 'Frau', 'ist', 'das'], sentence: 'Welche Frau ist das?',
  hint: 'welcher も der型。女性1格＝welche。', exp: 'welche Frau（女性1格）。', tip: 'welcher＝「どの」。' });
add({ lektion: 5, category: '所有冠詞', ja: 'このハンドバッグは私の母にとても気に入っている。（Mutter＝女性）',
  tiles: ['Die Handtasche', 'gefällt', f(MEINF, 'meiner'), 'Mutter', 'sehr'], sentence: 'Die Handtasche gefällt meiner Mutter sehr.',
  hint: 'gefallen は気に入る人をとる。', exp: 'meiner Mutter（女性）。', tip: 'gefallen は「〜の気に入る」。' });
add({ lektion: 5, category: '所有冠詞', ja: '私は妹を手伝う。（Schwester＝女性）',
  tiles: ['Ich', 'helfe', f(MEINF, 'meiner'), 'Schwester'], sentence: 'Ich helfe meiner Schwester.',
  hint: 'helfen は手伝う相手をとる。', exp: 'meiner Schwester（女性）。', tip: 'helfen は4格に見えてこのタイプ。' });
add({ lektion: 5, category: '所有冠詞', ja: '彼の妻のご職業は何ですか？（Frau＝女性）',
  tiles: ['Was', 'ist', f(SEINF, 'seine'), 'Frau', 'von Beruf'], sentence: 'Was ist seine Frau von Beruf?',
  hint: 'seine Frau は主語（1格）。', exp: 'seine Frau（女性1格）。', tip: '所有冠詞も性・格で変化（ein型）。' });
add({ lektion: 5, category: '所有冠詞', ja: '私たちの街の教会はとても美しい。（Stadt＝女性, Kirche＝女性）',
  tiles: ['Die Kirche', f(UNSERF, 'unserer'), 'Stadt', 'ist', 'sehr', 'schön'], sentence: 'Die Kirche unserer Stadt ist sehr schön.',
  hint: '「私たちの街の」は所有（2格）。女性。', exp: 'unserer Stadt（女性2格）。', tip: '女性2格の所有冠詞は -er。' });
add({ lektion: 5, category: '否定冠詞 kein', ja: '私たちはお酒を飲みません。（Alkohol＝男性）',
  tiles: ['Wir', 'trinken', f(KEINM, 'keinen'), 'Alkohol'], sentence: 'Wir trinken keinen Alkohol.',
  hint: 'kein は ein 型。「〜を」（男性）。', exp: 'keinen Alkohol（男性の直接目的語）。', tip: 'kein は否定の不定冠詞。' });
add({ lektion: 5, category: '所有冠詞', ja: '母は子供たちに自分の写真を見せる。（Kinder＝複数, Foto＝中性）',
  tiles: ['Die Mutter', 'zeigt', f(IHR_PL, 'ihren'), 'Kindern', f(IHR_N, 'ihr'), 'Foto'], sentence: 'Die Mutter zeigt ihren Kindern ihr Foto.',
  hint: 'zeigen は「（人）に（物）を」。ihr（彼女の）も変化。', exp: 'ihren Kindern（複数）/ ihr Foto（中性）。', tip: 'ihr（彼女の）も冠詞類として格変化。' });
add({ lektion: 5, category: '疑問代名詞', ja: 'その少女は誰ですか？',
  tiles: [f(['Wer', 'Wen', 'Wem'], 'Wer'), 'ist', 'das Mädchen'], sentence: 'Wer ist das Mädchen?',
  hint: '主語を尋ねる「誰が」。', exp: '1格（誰が）＝ wer。', tip: 'wer/wessen/wem/wen（1/2/3/4格）。' });
add({ lektion: 5, category: '疑問代名詞', ja: '君は誰を訪ねるの？— ___ besuchst du?',
  choices: ['Wen', 'Wer', 'Wem', 'Wessen'], answer: 0, hint: 'besuchen は直接目的語。', exp: '4格（誰を）＝ wen。', tip: '疑問代名詞も格変化する。' });
add({ lektion: 5, category: '疑問代名詞', ja: 'この車は誰のもの？— ___ gehört dieses Auto?',
  choices: ['Wem', 'Wer', 'Wen', 'Wessen'], answer: 0, hint: 'gehören は所有者をとる。', exp: '3格（誰に）＝ wem。', tip: 'gehören＋3格 → wem。' });
add({ lektion: 5, category: '疑問代名詞', ja: 'これは誰のバッグ？— ___ Tasche ist das?',
  choices: ['Wessen', 'Wer', 'Wem', 'Wen'], answer: 0, hint: '「誰の」は所有。', exp: '2格（誰の）＝ wessen。', tip: 'wessen ＋ 名詞で「誰の〜」。' });
add({ lektion: 5, category: '語順', ja: 'あなたの子供たちは今どこに住んでいますか？',
  chips: 'Wo / wohnen / deine Kinder / jetzt', sentence: 'Wo wohnen deine Kinder jetzt?',
  hint: '疑問詞＋定動詞＋主語。', exp: 'Wo(1) wohnen(2) deine Kinder jetzt?', tip: '複数主語に動詞は -en。' });

/* ---- Lektion 6: 人称代名詞3/4格・前置詞・融合形 ---- */
add({ lektion: 6, category: '人称代名詞', ja: '私は君に心から感謝する。',
  tiles: ['Ich', 'danke', f(['du', 'dir', 'dich'], 'dir'), 'herzlich'], sentence: 'Ich danke dir herzlich.',
  hint: 'danken は感謝する相手をとる。du の変化形は？', exp: 'du → dir。', tip: 'du: dir（に）/ dich（を）。' });
add({ lektion: 6, category: '人称代名詞', ja: '君のために私はそのプレゼントを買う。（Für で始める）',
  tiles: ['Für', f(['du', 'dir', 'dich'], 'dich'), 'kaufe', 'ich', 'das Geschenk'], sentence: 'Für dich kaufe ich das Geschenk.',
  hint: 'für は決まった格をとる。文頭句の後は倒置。', exp: 'für dich。Für dich(1) kaufe(2) ich …。', tip: '文頭が前置詞句でも定動詞は2番目。' });
add({ lektion: 6, category: '人称代名詞', ja: '君は彼にその指輪を贈るの？',
  tiles: [f(['Schenke', 'Schenkst', 'Schenkt'], 'Schenkst'), 'du', f(['er', 'ihm', 'ihn'], 'ihm'), 'den Ring'], sentence: 'Schenkst du ihm den Ring?',
  hint: 'schenken は「（人）に（物）を」。er の変化形は？', exp: 'er → ihm。', tip: 'er: ihm（に）/ ihn（を）。' });
add({ lektion: 6, category: '人称代名詞', ja: 'この車は私たちにとても気に入っている。',
  tiles: ['Dieses Auto', 'gefällt', f(['wir', 'uns'], 'uns'), 'sehr', 'gut'], sentence: 'Dieses Auto gefällt uns sehr gut.',
  hint: 'gefallen は気に入る人をとる。wir の変化形は？', exp: 'wir → uns。', tip: 'wir: uns（に・を同形）。' });
add({ lektion: 6, category: '人称代名詞', ja: '私は彼女に新聞を持っていく。',
  tiles: ['Ich', 'bringe', f(['sie', 'ihr'], 'ihr'), 'eine Zeitung'], sentence: 'Ich bringe ihr eine Zeitung.',
  hint: 'bringen は「（人）に（物）を」。sie（彼女）の変化形は？', exp: 'sie → ihr（に）。', tip: 'sie（彼女）: ihr（に）/ sie（を）。' });
add({ lektion: 6, category: '前置詞（3・4格／方向）', ja: '私はその絵を壁に掛ける。（Wand＝女性）',
  tiles: ['Ich', 'hänge', 'das Bild', 'an', f(ARTF, 'die'), 'Wand'], sentence: 'Ich hänge das Bild an die Wand.',
  hint: 'an は移動か静止かで格が変わる。「掛ける」は動き。', exp: 'an die Wand（女性）。', tip: '3・4格支配は 移動か静止かで決まる。' });
add({ lektion: 6, category: '前置詞（3・4格／位置）', ja: 'その絵は壁に掛かっている。（Wand＝女性）',
  tiles: ['Das Bild', 'hängt', 'an', f(ARTF, 'der'), 'Wand'], sentence: 'Das Bild hängt an der Wand.',
  hint: '「掛かっている」は静止状態。', exp: 'an der Wand（女性）。', tip: 'hängen(自)＝静止 / hängen(他)＝移動。' });
add({ lektion: 6, category: '前置詞（3・4格／位置）', ja: '私のおじは街に住んでいる。（Stadt＝女性）',
  tiles: ['Mein Onkel', 'wohnt', 'in', f(ARTF, 'der'), 'Stadt'], sentence: 'Mein Onkel wohnt in der Stadt.',
  hint: 'wohnen は静止状態。', exp: 'in der Stadt（女性）。', tip: 'wohnen/sein/bleiben は静止。' });
add({ lektion: 6, category: '前置詞（3・4格／方向）', ja: 'オットーはバッグを椅子の上に置く。（Stuhl＝男性）',
  tiles: ['Otto', 'legt', 'seine Tasche', 'auf', f(ARTM, 'den'), 'Stuhl'], sentence: 'Otto legt seine Tasche auf den Stuhl.',
  hint: 'legen（置く）は動き。男性。', exp: 'auf den Stuhl（男性）。', tip: 'legen＝移動、liegen＝静止。' });
add({ lektion: 6, category: '前置詞（3・4格／位置）', ja: '私のバッグは椅子の上に置いてある。（Stuhl＝男性）',
  tiles: ['Meine Tasche', 'liegt', 'auf', f(ARTM, 'dem'), 'Stuhl'], sentence: 'Meine Tasche liegt auf dem Stuhl.',
  hint: 'liegen（置いてある）は静止。男性。', exp: 'auf dem Stuhl（男性）。', tip: 'liegen は静止状態。' });
add({ lektion: 6, category: '融合形', ja: '彼は劇場へ行く。（Theater＝中性）',
  tiles: ['Er', 'geht', f(['im', 'ins'], 'ins'), 'Theater'], sentence: 'Er geht ins Theater.',
  hint: '「劇場へ行く」は移動。in＋das の融合形は？', exp: 'ins ＝ in das（中性・移動）。', tip: '-s 終わりの融合形(ins/ans)は移動。' });
add({ lektion: 6, category: '融合形', ja: 'アンナは海へ行く。（Meer＝中性）',
  tiles: ['Anna', 'fährt', f(['am', 'ans'], 'ans'), 'Meer'], sentence: 'Anna fährt ans Meer.',
  hint: '「海へ行く」は移動。an＋das の融合形は？', exp: 'ans ＝ an das（中性・移動）。', tip: 'ans Meer（海へ）/ am Meer（海辺で）。' });
add({ lektion: 6, category: '融合形', ja: '中央駅へはどう行きますか？（Hauptbahnhof＝男性）',
  tiles: ['Wie', 'kommen', 'wir', f(['zur', 'zum'], 'zum'), 'Hauptbahnhof'], sentence: 'Wie kommen wir zum Hauptbahnhof?',
  hint: 'zu＋dem の融合形は？', exp: 'zum ＝ zu dem（男性）。', tip: 'zu は常にこの格をとる。' });
add({ lektion: 6, category: '融合形', ja: '妹はよく学校へ行く。（Schule＝女性）',
  tiles: ['Meine Schwester', 'geht', 'oft', f(['zur', 'zum'], 'zur'), 'Schule'], sentence: 'Meine Schwester geht oft zur Schule.',
  hint: 'zu＋der の融合形は？', exp: 'zur ＝ zu der（女性）。', tip: 'zur Schule / zur Arbeit。' });
add({ lektion: 6, category: '語順（前置詞句）', ja: '私の兄は映画館の前で私を待っています。（vor dem Kino＝映画館の前で, auf mich＝私を）',
  chips: 'Mein Bruder / wartet / vor dem Kino / auf mich', sentence: 'Mein Bruder wartet vor dem Kino auf mich.',
  hint: 'warten auf＋人「〜を待つ」。', exp: 'vor dem Kino / auf mich。', tip: 'warten auf＋4格 は熟語。' });

/* ---- Lektion 7: 話法の助動詞（ここまで） ---- */
add({ lektion: 7, category: '話法の助動詞（変化）', ja: '彼はいくら払わなければならない？',
  tiles: ['Wie viel', f(['muss', 'musst', 'müssen'], 'muss'), 'er', 'bezahlen'], sentence: 'Wie viel muss er bezahlen?',
  hint: 'müssen（ねばならない）。er→muss。本動詞は文末。', exp: 'muss … bezahlen。', tip: '助動詞は ich/er で語尾なし（muss）。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: 'ここで写真を撮ってもいいですか？',
  tiles: [f(['Darf', 'Darfst', 'Dürfen'], 'Darf'), 'ich', 'hier', 'fotografieren'], sentence: 'Darf ich hier fotografieren?',
  hint: 'dürfen（してよい）。ich→darf。', exp: 'Darf ich … fotografieren?', tip: 'dürfen は許可。否定で禁止。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: 'いいえ、ここでは写真を撮ってはいけません。',
  tiles: ['Sie', f(['darf', 'darfst', 'dürfen'], 'dürfen'), 'hier', 'nicht', 'fotografieren'], sentence: 'Sie dürfen hier nicht fotografieren.',
  hint: 'dürfen。Sie→dürfen。dürfen＋nicht＝禁止。', exp: 'dürfen nicht ＝「〜してはいけない」。', tip: 'nicht dürfen は禁止。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: '君は本当のことを言うべきだ。',
  tiles: ['Du', f(['soll', 'sollst', 'sollen'], 'sollst'), 'die Wahrheit', 'sagen'], sentence: 'Du sollst die Wahrheit sagen.',
  hint: 'sollen（すべき）。du→sollst。', exp: 'sollst … sagen。', tip: 'sollen＝他者の意志。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: '彼は流暢に日本語を話せます。',
  tiles: ['Franz', f(['kann', 'kannst', 'können'], 'kann'), 'fließend', 'Japanisch', 'sprechen'], sentence: 'Franz kann fließend Japanisch sprechen.',
  hint: 'können（できる）。er→kann。本動詞は文末。', exp: 'kann … sprechen。', tip: 'können＝能力・可能。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: 'エリカは政治学を専攻するつもりだ。',
  tiles: ['Erika', f(['will', 'willst', 'wollen'], 'will'), 'Politik', 'studieren'], sentence: 'Erika will Politik studieren.',
  hint: 'wollen（つもり）。sie→will。', exp: 'will … studieren。', tip: 'wollen＝自分の意志。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: '君たちは今日歩いて大学へ行かなければならない。',
  tiles: ['Ihr', f(['muss', 'müsst', 'müssen'], 'müsst'), 'heute', 'zu Fuß', 'zur Uni', 'gehen'], sentence: 'Ihr müsst heute zu Fuß zur Uni gehen.',
  hint: 'müssen。ihr→müsst。本動詞 gehen は文末。', exp: 'müsst … gehen。', tip: 'ihr の助動詞語尾は -t（müsst, könnt）。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: '君は毎日よく眠れる？',
  tiles: [f(['Kann', 'Kannst', 'Können'], 'Kannst'), 'du', 'jeden Tag', 'gut', 'schlafen'], sentence: 'Kannst du jeden Tag gut schlafen?',
  hint: 'können。du→kannst。', exp: 'Kannst du … schlafen?', tip: '本動詞は不定詞で文末。' });
add({ lektion: 7, category: '助動詞構文の語順', ja: '私の兄はドイツ文学を専攻するつもりだ。',
  chips: 'Mein Bruder / will / Germanistik / studieren', sentence: 'Mein Bruder will Germanistik studieren.',
  hint: '助動詞が2位、本動詞（不定詞）は文末。', exp: 'will … Germanistik studieren。', tip: '助動詞構文は「枠構造」。' });
add({ lektion: 7, category: '助動詞構文の語順', ja: '私はピアノを弾きたい。',
  chips: 'Ich / möchte / Klavier / spielen', sentence: 'Ich möchte Klavier spielen.',
  hint: 'möchte（したい）＋不定詞（文末）。', exp: 'möchte … spielen。', tip: 'möchte は丁寧な「〜したい」。' });
add({ lektion: 7, category: '助動詞構文の語順', ja: '私は写真を撮りたい。',
  chips: 'Ich / möchte / ein Foto / machen', sentence: 'Ich möchte ein Foto machen.',
  hint: 'möchte＋不定詞（文末）。', exp: 'möchte … machen。', tip: '本動詞は原形で文末。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '話法の助動詞 müssen の意味は？',
  choices: ['〜しなければならない', '〜してもよい', '〜できる', '〜するつもりだ'], answer: 0, hint: '義務・必要。', exp: 'müssen＝〜しなければならない。', tip: 'müssen↔dürfen（必要↔許可）。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '話法の助動詞 dürfen の意味は？',
  choices: ['〜してもよい（許可）', '〜すべきだ', '〜したい', '〜できる'], answer: 0, hint: '許可。否定で禁止。', exp: 'dürfen＝〜してよい。', tip: 'können（能力）と区別。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '話法の助動詞 können の意味は？',
  choices: ['〜できる（能力・可能）', '〜しなければならない', '〜してもよい', '〜すべきだ'], answer: 0, hint: '能力・可能。', exp: 'können＝〜できる。', tip: 'dürfen（許可）と区別。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '話法の助動詞 wollen の意味は？',
  choices: ['〜するつもりだ（意志）', '〜しなければならない', '〜してもよい', '〜かもしれない'], answer: 0, hint: '主語自身の強い意志。', exp: 'wollen＝〜するつもりだ。', tip: 'wollen↔sollen（自分↔他者の意志）。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '話法の助動詞 sollen の意味は？',
  choices: ['〜すべきだ（他者の意志）', '〜したい', '〜できる', '〜してもよい'], answer: 0, hint: '他者の意志・指示。', exp: 'sollen＝〜すべきだ。', tip: 'wollen（自分の意志）と対比。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '「〜したい」という願望を表す助動詞は？',
  choices: ['möchte', 'müssen', 'sollen', 'dürfen'], answer: 0, hint: 'mögen の接続法II式。', exp: 'möchte＝〜したい。', tip: 'Ich möchte … は丁寧な願望。' });

/* ---- Lektion 8: 格支配の総合（択一） ---- */
add({ lektion: 8, category: '格支配の総合', ja: 'kennen（〜をよく知っている）が取る格は？',
  choices: ['4格', '3格', '3格＋4格', '2格'], answer: 0, hint: '他動詞「〜を」。', exp: 'kennen は4格。', tip: '多くの他動詞は4格。' });
add({ lektion: 8, category: '格支配の総合', ja: 'helfen（〜を手伝う）が取る格は？',
  choices: ['3格', '4格', '3格＋4格', '1格'], answer: 0, hint: '日本語の「を」につられない。', exp: 'helfen は3格。', tip: 'helfen/danken/antworten/gehören/gefallen は3格。' });
add({ lektion: 8, category: '格支配の総合', ja: 'gehören（〜のものである）が取る格は？',
  choices: ['3格', '4格', '2格', '3格＋4格'], answer: 0, hint: '「〜に属する」。', exp: 'gehören は3格。', tip: 'Das gehört mir.（私のものだ）。' });
add({ lektion: 8, category: '格支配の総合', ja: 'geben（〜に〜を与える）が取る格は？',
  choices: ['3格＋4格', '4格のみ', '3格のみ', '2格'], answer: 0, hint: '「人に物を」。', exp: 'geben は3格＋4格。', tip: 'geben/schenken/zeigen/bringen は3格＋4格。' });
add({ lektion: 8, category: '格支配の総合', ja: 'danken（〜に感謝する）が取る格は？',
  choices: ['3格', '4格', '3格＋4格', '1格'], answer: 0, hint: '感謝する相手は3格。', exp: 'danken は3格。', tip: 'Ich danke dir.（dir＝3格）。' });
add({ lektion: 8, category: '格支配の総合', ja: 'besuchen（〜を訪問する）が取る格は？',
  choices: ['4格', '3格', '3格＋4格', '2格'], answer: 0, hint: '他動詞。', exp: 'besuchen は4格。', tip: 'besuchen/kennen/loben/lieben は4格。' });
add({ lektion: 8, category: '格支配の総合', ja: 'gefallen（〜の気に入る）が取る格は？',
  choices: ['3格', '4格', '3格＋4格', '1格'], answer: 0, hint: '気に入る人は3格。', exp: 'gefallen は3格。', tip: 'Das gefällt mir.（私は気に入る）。' });
add({ lektion: 8, category: '格支配の総合', ja: 'antworten（〜に答える）が取る格は？',
  choices: ['3格', '4格', '3格＋4格', '2格'], answer: 0, hint: '答える相手は3格。', exp: 'antworten は3格。', tip: '一方 fragen（質問する）は4格。' });
add({ lektion: 8, category: '格支配の総合', ja: 'fragen（〜に質問する）が取る格は？',
  choices: ['4格', '3格', '3格＋4格', '2格'], answer: 0, hint: '日本語の「に」につられない。', exp: 'fragen は4格。', tip: 'fragen↔antworten（4格↔3格）。' });
add({ lektion: 8, category: '格支配の総合', ja: 'zeigen（〜に〜を見せる）が取る格は？',
  choices: ['3格＋4格', '4格のみ', '3格のみ', '2格'], answer: 0, hint: '「人に物を」。', exp: 'zeigen は3格＋4格。', tip: '見せる相手＝3格、見せる物＝4格。' });
add({ lektion: 8, category: '冠詞の格変換', ja: '「Ich besuche einen Freund.」の einen を定冠詞にすると？（Freund＝男性）',
  choices: ['den', 'der', 'dem', 'des'], answer: 0, hint: '男性4格の定冠詞。', exp: 'einen Freund → den Freund（男性4格）。', tip: '男性4格は der→den / ein→einen。' });
add({ lektion: 8, category: '格の判定', ja: '「Ich danke dem Lehrer.」の dem Lehrer は何格？',
  choices: ['3格', '4格', '2格', '1格'], answer: 0, hint: 'danken の格支配から。', exp: 'danken は3格 → dem Lehrer は3格。', tip: '男性3格の定冠詞は dem。' });
add({ lektion: 8, category: '全格パラダイム', ja: '不定冠詞 ein（男性名詞）の 1格→2格→3格→4格 は？',
  choices: ['ein - eines - einem - einen', 'ein - einen - einem - eines', 'ein - einem - eines - einen', 'ein - eines - einen - einem'], answer: 0,
  hint: '男性: 1=ein, 2=eines, 3=einem, 4=einen。', exp: 'ein / eines / einem / einen。', tip: '男性4格だけ語尾 -en（einen）。' });
add({ lektion: 8, category: '格支配の総合', ja: 'loben（〜を褒める）が取る格は？',
  choices: ['4格', '3格', '3格＋4格', '2格'], answer: 0, hint: '他動詞「〜を」。', exp: 'loben は4格。', tip: 'loben/lieben/kennen は4格。' });

/* ====== 出力 ====== */
const out = [];
const seq = {};
P.forEach((q) => {
  seq[q.lektion] = (seq[q.lektion] || 0) + 1;
  const id = `l${q.lektion}-${String(seq[q.lektion]).padStart(2, '0')}`;
  out.push({ id, ...q });
});

const header = `/**
 * ドイツ語 Lektion 1-8 の問題データ（自動生成: ドイツ語初級/js/gen_questions.js）。
 * 出典: ドイツ語テキスト_Lektion1-7_学習資料.md の各Lektion練習問題(Übung)・例文。
 * 形式: 組み立て式（chips=並び替え / tiles=[固定文字列 | {forms,answer}] をタップで語形変化）/ 択一式（choices+answer）。
 * 各問: id / lektion / category / ja(日本語訳=問題文) / (chips|tiles|choices+answer) / sentence(正解文) / hint / exp / tip
 *   問題文(ja)には格・方向・人称・動詞の意味のヒントを書かない。名詞の性のみ示す。
 *   L7は話法の助動詞まで。L8は格支配の総合（択一）。
 * 手で編集せず、元データを直して gen_questions.js を再実行すること。
 */
const QUESTIONS = `;

fs.writeFileSync(path.resolve(__dirname, '../../js/data/questions.js'), header + JSON.stringify(out, null, 2) + ';\n', 'utf8');
const by = {};
out.forEach((q) => { by[q.lektion] = (by[q.lektion] || 0) + 1; });
console.log('total:', out.length, by);
