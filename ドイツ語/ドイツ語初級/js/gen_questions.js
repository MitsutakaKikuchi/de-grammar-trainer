/**
 * ドイツ語問題データ（questions.js）生成スクリプト。
 * 出典: ドイツ語テキスト_Lektion1-7_学習資料.md の各Lektion練習問題(Übung)・例文。
 * 形式: 組み立て式（chips=並び替え / tiles=語形変化タップ）と 択一式（choices）。
 *   各問に日本語訳(ja)を表示し、冠詞を選ぶ問題は名詞の性を ja に明示する。
 *   L7は話法の助動詞まで（未来形・従属接続詞は含めない）。L8は格支配の総合（択一）。
 * 実行: node gen_questions.js → ../../js/data/questions.js を出力。手で questions.js を編集しない。
 */
'use strict';
const fs = require('fs');
const path = require('path');

/* 定冠詞・不定冠詞・冠詞類の「性別ごとの格変化形」。タイルの forms に使う（性は問題文で与える）。 */
const ARTM = ['der', 'des', 'dem', 'den'];   // 男性 1/2/3/4
const ARTF = ['die', 'der'];                 // 女性 1・4 / 2・3
const ARTN = ['das', 'des', 'dem'];          // 中性 1・4 / 2 / 3
const ARTPL = ['die', 'der', 'den'];         // 複数 1・4 / 2 / 3
const EINM = ['ein', 'eines', 'einem', 'einen'];
const EINF = ['eine', 'einer'];
const EINN = ['ein', 'eines', 'einem'];
const DIESM = ['dieser', 'dieses', 'diesem', 'diesen'];
const MEINM = ['mein', 'meines', 'meinem', 'meinen'];
const MEINF = ['meine', 'meiner'];
const DEINM = ['dein', 'deines', 'deinem', 'deinen'];
const IHR_PL = ['ihre', 'ihrer', 'ihren', 'ihrem'];
const IHR_N = ['ihr', 'ihre', 'ihren'];
const f = (forms, answer) => ({ forms, answer });

const T = '組み立てて文を作ろう。';

/* ====== 問題定義（Lektionごと） ====== */
const P = [];
const add = (o) => P.push(o);

/* ---- Lektion 1: 規則動詞の人称変化・語順 ---- */
add({ lektion: 1, category: '動詞の人称変化', ja: '君は何を飲むの？（trinken＝飲む）',
  tiles: ['Was', f(['trinke', 'trinkst', 'trinkt'], 'trinkst'), 'du'],
  sentence: 'Was trinkst du?', hint: 'du の語尾は -st。', exp: 'du trinkst（語幹 trink- ＋ -st）。', tip: '人称語尾: ich-e / du-st / er-t / wir-en / ihr-t / sie-en。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '私はコーヒーを飲みます。（trinken）',
  tiles: ['Ich', f(['trinke', 'trinkst', 'trinkt'], 'trinke'), 'Kaffee'],
  sentence: 'Ich trinke Kaffee.', hint: 'ich の語尾は -e。', exp: 'ich trinke（-e）。', tip: '主語に合わせて語尾を変える。' });
add({ lektion: 1, category: '動詞の人称変化', ja: 'ミュラーさんはとても上手に泳ぎます。（schwimmen＝泳ぐ／3人称単数）',
  tiles: ['Frau Müller', f(['schwimme', 'schwimmst', 'schwimmt'], 'schwimmt'), 'sehr', 'gut'],
  sentence: 'Frau Müller schwimmt sehr gut.', hint: 'er/sie/es の語尾は -t。', exp: '3人称単数 → schwimmt。', tip: '人名・Frau/Herr＋名前は er/sie/es 扱い。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '君はハンブルク出身なの？（kommen＝来る／aus＋3格で「〜出身」）',
  tiles: [f(['Komme', 'Kommst', 'Kommt'], 'Kommst'), 'du', 'aus', 'Hamburg'],
  sentence: 'Kommst du aus Hamburg?', hint: '疑問文は〈定動詞＋主語〉。du → -st。', exp: 'Kommst du …?（du の -st）。', tip: '決定疑問文は動詞が文頭。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '君は熱心に働くね。（arbeiten＝働く）',
  tiles: ['Du', f(['arbeite', 'arbeitest', 'arbeitet'], 'arbeitest'), 'fleißig'],
  sentence: 'Du arbeitest fleißig.', hint: '語幹が -t で終わる動詞は du で口調の e を入れる。', exp: 'arbeit- ＋ -est → arbeitest。', tip: '-t/-d 語幹は du -est, er -et。' });
add({ lektion: 1, category: '動詞の人称変化', ja: '君は旅行が好き？（reisen＝旅行する）',
  tiles: [f(['Reise', 'Reist', 'Reisen'], 'Reist'), 'du', 'gern'],
  sentence: 'Reist du gern?', hint: '語幹が -s で終わる動詞は du で -t のみ。', exp: 'reis- ＋ -t → du reist。', tip: '-s/-ß/-z 語幹は du -t。' });
add({ lektion: 1, category: '語順（定動詞第2位）', ja: '彼はサッカーをするのが好きです。',
  chips: 'Er / spielt / gern / Fußball', sentence: 'Er spielt gern Fußball.',
  hint: '定動詞は2番目。', exp: 'Er(1) spielt(2) gern Fußball。', tip: '定動詞第2位の原則。' });
add({ lektion: 1, category: '語順（倒置）', ja: '明日フランツはサッカーをします。（Morgen で始める）',
  chips: 'Morgen / spielt / Franz / Fußball', sentence: 'Morgen spielt Franz Fußball.',
  hint: '文頭が「明日」でも定動詞は2番目。', exp: 'Morgen(1) spielt(2) Franz …（倒置）。', tip: '文頭に副詞→主語と動詞が入れ替わる。' });
add({ lektion: 1, category: '語順（疑問詞）', ja: '今日彼は何をしますか？',
  chips: 'Was / macht / er / heute', sentence: 'Was macht er heute?',
  hint: '疑問詞が1番目でも定動詞は2番目。', exp: 'Was(1) macht(2) er heute?', tip: '疑問詞＋定動詞＋主語。' });
add({ lektion: 1, category: '語順（倒置）', ja: '明日彼はドイツへ飛びます。（Morgen で始める／fliegen＝飛行機で行く）',
  chips: 'Morgen / fliegt / er / nach / Deutschland', sentence: 'Morgen fliegt er nach Deutschland.',
  hint: 'nach＋地名で「〜へ」。', exp: 'Morgen fliegt er nach Deutschland.', tip: 'nach＋無冠詞の地名。' });

/* ---- Lektion 2: sein/haben・名詞の性・複数 ---- */
add({ lektion: 2, category: 'sein / haben', ja: '私は大学生で、君も大学生だ。（sein＝〜である）',
  tiles: ['Ich', f(['bin', 'bist', 'ist'], 'bin'), 'Student', 'und', 'du', f(['bin', 'bist', 'ist'], 'bist'), 'auch', 'Student'],
  sentence: 'Ich bin Student und du bist auch Student.', hint: 'ich→bin, du→bist。', exp: 'sein: ich bin / du bist。', tip: 'sein は不規則。bin/bist/ist を丸暗記。' });
add({ lektion: 2, category: 'sein / haben', ja: '君はお腹が空いてる？（haben＝持つ／Hunger haben＝空腹）',
  tiles: [f(['Habe', 'Hast', 'Hat'], 'Hast'), 'du', 'Hunger'],
  sentence: 'Hast du Hunger?', hint: 'du→hast。', exp: 'haben: du hast。空腹は Hunger haben。', tip: '「空腹・渇き」は haben で表す。' });
add({ lektion: 2, category: 'sein / haben', ja: 'ユストさんは頭痛がします。（haben／Kopfschmerzen＝頭痛・複数）',
  tiles: ['Frau Just', f(['habe', 'hast', 'hat'], 'hat'), 'Kopfschmerzen'],
  sentence: 'Frau Just hat Kopfschmerzen.', hint: '3人称単数→hat。', exp: 'haben: er/sie/es hat。', tip: '痛みは Schmerzen（複数）＋ haben。' });
add({ lektion: 2, category: 'sein / haben', ja: 'あなたのご職業は何ですか？（sein／Sie で）',
  tiles: ['Was', f(['bin', 'bist', 'sind'], 'sind'), 'Sie', 'von Beruf'],
  sentence: 'Was sind Sie von Beruf?', hint: 'Sie（敬称）→sind。', exp: 'sein: Sie sind。', tip: '職業を尋ねる定型 Was sind Sie von Beruf?' });
add({ lektion: 2, category: '名詞の性（不定冠詞）', ja: '一人の男性がそこで歌っています。（Mann＝男性名詞）',
  tiles: [f(['Ein', 'Eine'], 'Ein'), 'Mann', 'singt', 'dort'],
  sentence: 'Ein Mann singt dort.', hint: '男性・中性は ein、女性は eine。', exp: 'der Mann（男性）→ 不定冠詞 ein。', tip: '不定冠詞: 男/中 ein, 女 eine。' });
add({ lektion: 2, category: '名詞の性（不定冠詞）', ja: '一人の女性がコーヒーを飲んでいます。（Frau＝女性名詞）',
  tiles: [f(['Ein', 'Eine'], 'Eine'), 'Frau', 'trinkt', 'Kaffee'],
  sentence: 'Eine Frau trinkt Kaffee.', hint: '女性名詞は eine。', exp: 'die Frau（女性）→ eine。', tip: '性は冠詞ごと覚える。' });
add({ lektion: 2, category: '複数形', ja: '「犬（der Hund）」の複数形は？',
  choices: ['die Hunde', 'die Hunden', 'die Hünde', 'die Hunds'], answer: 0,
  hint: 'e式（-e を付ける）。', exp: 'Hund → Hunde（e式）。', tip: '複数の定冠詞は性に関係なく die。' });
add({ lektion: 2, category: '複数形', ja: '「子供（das Kind）」の複数形は？',
  choices: ['die Kinder', 'die Kindern', 'die Kinde', 'die Kinds'], answer: 0,
  hint: 'er式（-er を付ける）。', exp: 'Kind → Kinder（er式）。', tip: '中性短音節は er式が多い。' });
add({ lektion: 2, category: '語順（倒置）', ja: 'ここは天気がとても良いです。（Hier で始める／Wetter＝中性）',
  chips: 'Hier / ist / das Wetter / sehr / schön', sentence: 'Hier ist das Wetter sehr schön.',
  hint: '文頭が Hier でも定動詞は2番目。', exp: 'Hier(1) ist(2) das Wetter …。', tip: '場所の副詞で始めると倒置。' });

/* ---- Lektion 3: 格変化・動詞の格支配 ---- */
add({ lektion: 3, category: '動詞の格支配（3格＋4格）', ja: '息子は母に雑誌を持ってくる。（bringen＝3格に4格を／Mutter＝女性, Zeitschrift＝女性）',
  tiles: ['Der Sohn', 'bringt', f(ARTF, 'der'), 'Mutter', f(EINF, 'eine'), 'Zeitschrift'],
  sentence: 'Der Sohn bringt der Mutter eine Zeitschrift.', hint: '母に＝3格(der)、雑誌を＝4格(eine)。', exp: 'bringen は3格＋4格。der Mutter（3格）/ eine Zeitschrift（4格）。', tip: '「人に物を」型は 3格＋4格。' });
add({ lektion: 3, category: '動詞の格支配（3格＋4格）', ja: '彼女は叔母に手紙を書く。（schreiben＝3格に4格を／Tante＝女性, Brief＝男性）',
  tiles: ['Sie', 'schreibt', f(ARTF, 'der'), 'Tante', f(EINM, 'einen'), 'Brief'],
  sentence: 'Sie schreibt der Tante einen Brief.', hint: '叔母に＝3格(der)、手紙を＝4格(einen)。', exp: 'schreiben は3格＋4格。einen Brief（男性4格）。', tip: '男性4格は冠詞が -en（den/einen）。' });
add({ lektion: 3, category: '動詞の格支配（4格）', ja: '私はその通りを知らない。（kennen＝4格／Straße＝女性）',
  tiles: ['Ich', 'kenne', f(ARTF, 'die'), 'Straße', 'nicht'],
  sentence: 'Ich kenne die Straße nicht.', hint: 'kennen は4格。女性4格＝die。', exp: 'die Straße（女性4格）。', tip: '女性は1格と4格が同形（die）。' });
add({ lektion: 3, category: '動詞の格支配（4格）', ja: '先生は（一人の）生徒に質問する。（fragen＝4格／Schüler＝男性）',
  tiles: ['Der Lehrer', 'fragt', f(EINM, 'einen'), 'Schüler'],
  sentence: 'Der Lehrer fragt einen Schüler.', hint: 'fragen は4格（「〜に質問する」でも4格）。', exp: 'einen Schüler（男性4格）。', tip: 'fragen は日本語の「に」につられず4格。' });
add({ lektion: 3, category: '動詞の格支配（3格）', ja: 'その生徒は先生に答える。（antworten＝3格／Schüler＝男性, Lehrer＝男性）',
  tiles: ['Der Schüler', 'antwortet', f(ARTM, 'dem'), 'Lehrer'],
  sentence: 'Der Schüler antwortet dem Lehrer.', hint: 'antworten は3格。男性3格＝dem。', exp: 'dem Lehrer（男性3格）。', tip: 'antworten/danken/helfen は3格。' });
add({ lektion: 3, category: '動詞の格支配（3格＋4格）', ja: '父は子供たちに童話を語る。（erzählen＝3格に4格を／Kinder＝複数, Märchen＝中性）',
  tiles: ['Der Vater', 'erzählt', f(ARTPL, 'den'), 'Kindern', f(EINN, 'ein'), 'Märchen'],
  sentence: 'Der Vater erzählt den Kindern ein Märchen.', hint: '複数3格は den＋名詞に -n。中性4格＝ein。', exp: 'den Kindern（複数3格, Kinder→Kindern）/ ein Märchen（中性4格）。', tip: '複数3格は名詞語尾に -n が付く。' });
add({ lektion: 3, category: '動詞の格支配（3格）', ja: 'ハンドバッグはその女性のものだ。（gehören＝3格／Frau＝女性）',
  tiles: ['Die Handtasche', 'gehört', f(ARTF, 'der'), 'Frau'],
  sentence: 'Die Handtasche gehört der Frau.', hint: 'gehören は3格。女性3格＝der。', exp: 'der Frau（女性3格）。', tip: '女性の2格・3格は der。' });
add({ lektion: 3, category: '動詞の格支配（3格）', ja: 'オートバイはその男性のものだ。（gehören＝3格／Mann＝男性）',
  tiles: ['Das Motorrad', 'gehört', f(ARTM, 'dem'), 'Mann'],
  sentence: 'Das Motorrad gehört dem Mann.', hint: '男性3格＝dem。', exp: 'dem Mann（男性3格）。', tip: 'gehören は「〜のものだ」で3格。' });
add({ lektion: 3, category: '動詞の格支配（3格＋4格）', ja: '少女は（女の）友達に写真を見せる。（zeigen＝3格に4格を／Freundin＝女性, Foto＝中性）',
  tiles: ['Das Mädchen', 'zeigt', f(EINF, 'einer'), 'Freundin', f(EINN, 'ein'), 'Foto'],
  sentence: 'Das Mädchen zeigt einer Freundin ein Foto.', hint: '友達に＝女性3格(einer)、写真を＝中性4格(ein)。', exp: 'einer Freundin（女性3格）/ ein Foto（中性4格）。', tip: '不定冠詞 女性3格＝einer。' });
add({ lektion: 3, category: '2格（所有）', ja: 'その男性の車は新しい。（2格／Mann＝男性）',
  tiles: ['Der Wagen', f(ARTM, 'des'), 'Mannes', 'ist', 'neu'],
  sentence: 'Der Wagen des Mannes ist neu.', hint: '「〜の」は2格。男性2格＝des＋名詞に -(e)s。', exp: 'des Mannes（男性2格）。', tip: '男性・中性2格は des、名詞も -(e)s。' });
add({ lektion: 3, category: '語順（2格）', ja: 'これは友人の携帯電話です。（des Freundes＝友人の）',
  chips: 'Das / ist / das Handy / des Freundes', sentence: 'Das ist das Handy des Freundes.',
  hint: '2格は修飾する名詞の後ろ。', exp: 'das Handy des Freundes（友人の携帯）。', tip: '2格は後置で「〜の」。' });

/* ---- Lektion 4: 不規則変化動詞（語幹変化）・命令形 ---- */
add({ lektion: 4, category: '不規則動詞（e→i）', ja: '君はその錠剤を飲む？（nehmen＝取る/飲む／du）',
  tiles: [f(['Nehme', 'Nimmst', 'Nimmt'], 'Nimmst'), 'du', 'die Tabletten'],
  sentence: 'Nimmst du die Tabletten?', hint: 'nehmen は du/er で nimm- に変化。', exp: 'du nimmst（特殊: nehm→nimm）。', tip: 'nehmen は du nimmst, er nimmt。' });
add({ lektion: 4, category: '不規則動詞（e→i）', ja: '私は朝に錠剤を飲みます。（nehmen／ich）',
  tiles: ['Ich', f(['nehme', 'nimmst', 'nimmt'], 'nehme'), 'morgens', 'die Tabletten'],
  sentence: 'Ich nehme morgens die Tabletten.', hint: 'ich は語幹変化しない。', exp: 'ich nehme（1人称は語幹そのまま）。', tip: '語幹変化は du と er/sie/es だけ。' });
add({ lektion: 4, category: '不規則動詞（e→i）', ja: 'マリアは今日その友人に会う？（treffen＝会う／3人称単数）',
  tiles: [f(['Treffe', 'Triffst', 'Trifft'], 'Trifft'), 'Maria', 'heute', 'den Freund'],
  sentence: 'Trifft Maria heute den Freund?', hint: 'treffen は e→i。', exp: 'er/sie trifft（treff→triff）。', tip: 'treffen は4格をとる。' });
add({ lektion: 4, category: '不規則動詞（e→ie）', ja: '君は推理小説を読む？（lesen＝読む／du・Krimi＝男性）',
  tiles: [f(['Lese', 'Liest', 'Lest'], 'Liest'), 'du', 'einen Krimi'],
  sentence: 'Liest du einen Krimi?', hint: 'lesen は e→ie。', exp: 'du liest（les→lies）。', tip: 'sehen/lesen/empfehlen は e→ie。' });
add({ lektion: 4, category: '不規則動詞（e→i）', ja: 'フランツはその少女に時計をあげる。（geben＝3格に4格を／Mädchen＝中性, Uhr＝女性）',
  tiles: ['Franz', f(['gebe', 'gibst', 'gibt'], 'gibt'), 'dem Mädchen', 'die Uhr'],
  sentence: 'Franz gibt dem Mädchen die Uhr.', hint: 'geben は e→i。3格(dem Mädchen)＋4格(die Uhr)。', exp: 'er gibt（geb→gib）。', tip: 'geben は3格＋4格をとる。' });
add({ lektion: 4, category: '不規則動詞（e→i）', ja: 'アンナは魚を好んで食べる。（essen＝食べる／3人称単数）',
  tiles: ['Anna', f(['esse', 'isst', 'essen'], 'isst'), 'gern', 'Fisch'],
  sentence: 'Anna isst gern Fisch.', hint: 'essen は e→i（du/er は isst）。', exp: 'sie isst（ess→iss）。', tip: 'essen の du と er は同形 isst。' });
add({ lektion: 4, category: '不規則動詞（a→ä）', ja: 'ハンスは明日ボンへ行く？（fahren＝乗り物で行く／3人称単数）',
  tiles: [f(['Fahre', 'Fährst', 'Fährt'], 'Fährt'), 'Hans', 'morgen', 'nach Bonn'],
  sentence: 'Fährt Hans morgen nach Bonn?', hint: 'fahren は a→ä。', exp: 'er fährt（fahr→fähr）。', tip: 'fahren/tragen/schlafen は a→ä。' });
add({ lektion: 4, category: '不規則動詞（a→ä）', ja: 'オットーはひげをはやしている？（tragen＝身につける／Bart＝男性）',
  tiles: [f(['Trage', 'Trägst', 'Trägt'], 'Trägt'), 'Otto', 'einen Bart'],
  sentence: 'Trägt Otto einen Bart?', hint: 'tragen は a→ä。', exp: 'er trägt。einen Bart（男性4格）。', tip: 'tragen は「運ぶ・着る・生やす」。' });
add({ lektion: 4, category: '命令形（du）', ja: 'ハンス、座って！（命令形・du／Platz nehmen＝着席する）',
  chips: 'Nimm / Platz', sentence: 'Nimm Platz!', hint: 'nehmen の du 命令は Nimm（語幹変化が残る）。', exp: 'e→i 動詞の du 命令は変化形のまま: Nimm!', tip: 'du命令: 語幹のみ（e→i は維持）。' });
add({ lektion: 4, category: '命令形（Sie）', ja: 'ワルターさん、ゆっくり話してください！（命令形・Sie）',
  chips: 'Sprechen / Sie / bitte / langsam', sentence: 'Sprechen Sie bitte langsam!', hint: 'Sie命令は〈動詞＋Sie〉。', exp: 'Sprechen Sie …!（敬称の命令）。', tip: 'Sie命令は不定詞と同形＋Sie。' });
add({ lektion: 4, category: '命令形（ihr）', ja: 'ハンスとアンナ、静かにして！（命令形・ihr／sein）',
  chips: 'Seid / ruhig', sentence: 'Seid ruhig!', hint: 'sein の ihr 命令は Seid。', exp: 'ihr命令は ihr の形: Seid!', tip: 'sein の命令: du sei / ihr seid / Sie seien Sie。' });

/* ---- Lektion 5: 定冠詞類・所有冠詞・疑問代名詞 ---- */
add({ lektion: 5, category: '定冠詞類（dieser）', ja: '私はこの車を買います。（dieser＝この／Wagen＝男性4格）',
  tiles: ['Ich', 'kaufe', f(DIESM, 'diesen'), 'Wagen'],
  sentence: 'Ich kaufe diesen Wagen.', hint: 'dieser は定冠詞と同じ変化。男性4格＝diesen。', exp: 'diesen Wagen（男性4格）。', tip: 'dieser/jeder/welcher は der型変化。' });
add({ lektion: 5, category: '所有冠詞（3格）', ja: 'このハンドバッグは私の母にとても気に入っている。（gefallen＝3格／mein・Mutter＝女性）',
  tiles: ['Die Handtasche', 'gefällt', f(MEINF, 'meiner'), 'Mutter', 'sehr'],
  sentence: 'Die Handtasche gefällt meiner Mutter sehr.', hint: 'gefallen は3格。女性3格＝meiner。', exp: 'meiner Mutter（女性3格）。', tip: 'gefallen は「〜の気に入る」で3格。' });
add({ lektion: 5, category: '所有冠詞（3格）', ja: '私は妹を手伝う。（helfen＝3格／mein・Schwester＝女性）',
  tiles: ['Ich', 'helfe', f(MEINF, 'meiner'), 'Schwester'],
  sentence: 'Ich helfe meiner Schwester.', hint: 'helfen は3格。', exp: 'meiner Schwester（女性3格）。', tip: 'helfen は4格に見えて3格。' });
add({ lektion: 5, category: '所有冠詞・定冠詞類', ja: '君は友人にこの指輪を贈るの？（schenken＝3格に4格を／dein・Freund＝男性, Ring＝男性）',
  tiles: [f(['Schenke', 'Schenkst', 'Schenkt'], 'Schenkst'), 'du', f(DEINM, 'deinem'), 'Freund', f(DIESM, 'diesen'), 'Ring'],
  sentence: 'Schenkst du deinem Freund diesen Ring?', hint: '友人に＝男性3格(deinem)、指輪を＝男性4格(diesen)。', exp: 'deinem Freund（3格）/ diesen Ring（4格）。', tip: '所有冠詞も ein型・dieser は der型の変化。' });
add({ lektion: 5, category: '所有冠詞（複数3格・中性4格）', ja: '母は子供たちに自分の写真を見せる。（zeigen＝3格に4格を／ihr・Kinder＝複数, Foto＝中性）',
  tiles: ['Die Mutter', 'zeigt', f(IHR_PL, 'ihren'), 'Kindern', f(IHR_N, 'ihr'), 'Foto'],
  sentence: 'Die Mutter zeigt ihren Kindern ihr Foto.', hint: '複数3格＝ihren＋Kindern、中性4格＝ihr。', exp: 'ihren Kindern（複数3格）/ ihr Foto（中性4格）。', tip: 'ihr（彼女の）も冠詞類として格変化する。' });
add({ lektion: 5, category: '疑問代名詞', ja: '君は誰を訪ねるの？（wen＝誰を／4格）— ___ besuchst du?',
  choices: ['Wen', 'Wer', 'Wem', 'Wessen'], answer: 0,
  hint: 'besuchen は4格。「誰を」＝wen。', exp: '4格（誰を）＝ wen。Wen besuchst du?', tip: '疑問代名詞: wer/wessen/wem/wen（1/2/3/4格）。' });
add({ lektion: 5, category: '疑問代名詞', ja: 'この車は誰のもの？（gehören＝3格）— ___ gehört dieses Auto?',
  choices: ['Wem', 'Wer', 'Wen', 'Wessen'], answer: 0,
  hint: 'gehören は3格。「誰に」＝wem。', exp: '3格（誰に）＝ wem。', tip: 'gehören＋3格 → wem で尋ねる。' });
add({ lektion: 5, category: '疑問代名詞', ja: 'これは誰のバッグ？（誰の＝2格）— ___ Tasche ist das?',
  choices: ['Wessen', 'Wer', 'Wem', 'Wen'], answer: 0,
  hint: '「誰の」＝2格 wessen。', exp: '2格（誰の）＝ wessen。', tip: 'wessen ＋ 名詞で「誰の〜」。' });
add({ lektion: 5, category: '語順', ja: 'あなたの子供たちは今どこに住んでいますか？（deine Kinder）',
  chips: 'Wo / wohnen / deine Kinder / jetzt', sentence: 'Wo wohnen deine Kinder jetzt?',
  hint: '疑問詞＋定動詞＋主語。', exp: 'Wo(1) wohnen(2) deine Kinder jetzt?', tip: '複数主語に動詞は -en。' });

/* ---- Lektion 6: 人称代名詞3/4格・前置詞の格支配・融合形 ---- */
add({ lektion: 6, category: '人称代名詞（3格）', ja: '私は君に心から感謝する。（danken＝3格／du→？）',
  tiles: ['Ich', 'danke', f(['du', 'dir', 'dich'], 'dir'), 'herzlich'],
  sentence: 'Ich danke dir herzlich.', hint: 'danken は3格。du の3格＝dir。', exp: 'du → 3格 dir。', tip: '人称代名詞 du: 3格 dir / 4格 dich。' });
add({ lektion: 6, category: '人称代名詞（4格）', ja: '君のために私はそのプレゼントを買う。（für＝4格／du→？・Für で始める）',
  tiles: ['Für', f(['du', 'dir', 'dich'], 'dich'), 'kaufe', 'ich', 'das Geschenk'],
  sentence: 'Für dich kaufe ich das Geschenk.', hint: 'für は4格。du の4格＝dich。文頭句の後は倒置。', exp: 'für dich（4格）。Für dich(1) kaufe(2) ich …。', tip: 'für＋4格。文頭が前置詞句でも定動詞は2番目。' });
add({ lektion: 6, category: '人称代名詞（3格）', ja: '君は彼にその指輪を贈るの？（schenken＝3格に4格を／er→？）',
  tiles: [f(['Schenke', 'Schenkst', 'Schenkt'], 'Schenkst'), 'du', f(['er', 'ihm', 'ihn'], 'ihm'), 'den Ring'],
  sentence: 'Schenkst du ihm den Ring?', hint: 'schenken の「彼に」＝3格 ihm。', exp: 'er → 3格 ihm。', tip: 'er: 3格 ihm / 4格 ihn。' });
add({ lektion: 6, category: '前置詞の格支配（3・4格／方向）', ja: '私はその絵を壁に掛ける。（an＝3・4格／移動＝方向・Wand＝女性）',
  tiles: ['Ich', 'hänge', 'das Bild', 'an', f(ARTF, 'die'), 'Wand'],
  sentence: 'Ich hänge das Bild an die Wand.', hint: '「掛ける（移動）」は方向→4格。女性4格＝die。', exp: 'an die Wand（方向→4格）。', tip: '3・4格支配は 移動=4格 / 静止=3格。' });
add({ lektion: 6, category: '前置詞の格支配（3・4格／位置）', ja: 'その絵は壁に掛かっている。（an＝3・4格／静止＝位置・Wand＝女性）',
  tiles: ['Das Bild', 'hängt', 'an', f(ARTF, 'der'), 'Wand'],
  sentence: 'Das Bild hängt an der Wand.', hint: '「掛かっている（位置）」は3格。女性3格＝der。', exp: 'an der Wand（位置→3格）。', tip: 'hängen(自)=位置→3格、hängen(他)=方向→4格。' });
add({ lektion: 6, category: '前置詞の格支配（3・4格／位置）', ja: '私のおじは街に住んでいる。（in＝3・4格／位置・Stadt＝女性）',
  tiles: ['Mein Onkel', 'wohnt', 'in', f(ARTF, 'der'), 'Stadt'],
  sentence: 'Mein Onkel wohnt in der Stadt.', hint: 'wohnen は位置→3格。', exp: 'in der Stadt（位置→3格）。', tip: 'wohnen/sein/bleiben は3格。' });
add({ lektion: 6, category: '前置詞と定冠詞の融合形', ja: '彼は劇場へ行く。（in＋das の融合形は？／移動・Theater＝中性）',
  tiles: ['Er', 'geht', f(['im', 'ins'], 'ins'), 'Theater'],
  sentence: 'Er geht ins Theater.', hint: '移動→4格。in＋das＝ins。', exp: 'ins ＝ in das（中性4格・方向）。', tip: '-s 終わりの融合形(ins/ans)は4格。' });
add({ lektion: 6, category: '前置詞と定冠詞の融合形', ja: '中央駅へはどう行きますか？（zu＋dem の融合形は？／Hauptbahnhof＝男性）',
  tiles: ['Wie', 'kommen', 'wir', f(['zur', 'zum'], 'zum'), 'Hauptbahnhof'],
  sentence: 'Wie kommen wir zum Hauptbahnhof?', hint: 'zu＋dem＝zum。', exp: 'zum ＝ zu dem（男性3格）。', tip: 'zu は常に3格支配。' });
add({ lektion: 6, category: '前置詞と定冠詞の融合形', ja: '妹はよく学校へ行く。（zu＋der の融合形は？／Schule＝女性）',
  tiles: ['Meine Schwester', 'geht', 'oft', f(['zur', 'zum'], 'zur'), 'Schule'],
  sentence: 'Meine Schwester geht oft zur Schule.', hint: 'zu＋der＝zur。', exp: 'zur ＝ zu der（女性3格）。', tip: 'zur Schule / zur Arbeit など定型。' });
add({ lektion: 6, category: '語順（前置詞句）', ja: '私の兄は映画館の前で私を待っています。（vor dem Kino＝映画館の前で, auf mich＝私を）',
  chips: 'Mein Bruder / wartet / vor dem Kino / auf mich', sentence: 'Mein Bruder wartet vor dem Kino auf mich.',
  hint: 'warten auf＋4格「〜を待つ」。', exp: 'vor dem Kino（位置3格）/ auf mich（4格）。', tip: 'warten auf＋4格 は熟語。' });

/* ---- Lektion 7: 話法の助動詞（ここまで） ---- */
add({ lektion: 7, category: '話法の助動詞（変化）', ja: '彼はいくら払わなければならない？（müssen＝ねばならない／3人称単数・本動詞 bezahlen は文末）',
  tiles: ['Wie viel', f(['muss', 'musst', 'müssen'], 'muss'), 'er', 'bezahlen'],
  sentence: 'Wie viel muss er bezahlen?', hint: 'müssen: er muss。本動詞は不定詞で文末。', exp: 'muss …（…）… bezahlen。助動詞は2位・本動詞は文末。', tip: '話法の助動詞は ich/er で語尾なし（muss）。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: 'ここで写真を撮ってもいいですか？（dürfen＝してよい／ich・本動詞 fotografieren は文末）',
  tiles: [f(['Darf', 'Darfst', 'Dürfen'], 'Darf'), 'ich', 'hier', 'fotografieren'],
  sentence: 'Darf ich hier fotografieren?', hint: 'dürfen: ich darf。', exp: 'Darf ich … fotografieren?（許可を尋ねる）。', tip: 'dürfen は「許可」。否定で「禁止」。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: 'いいえ、ここでは写真を撮ってはいけません。（dürfen／Sie・nicht）',
  tiles: ['Sie', f(['darf', 'darfst', 'dürfen'], 'dürfen'), 'hier', 'nicht', 'fotografieren'],
  sentence: 'Sie dürfen hier nicht fotografieren.', hint: 'Sie→dürfen。dürfen＋nicht＝禁止。', exp: 'dürfen nicht ＝「〜してはいけない」。', tip: 'nicht dürfen は禁止を表す。' });
add({ lektion: 7, category: '話法の助動詞（変化）', ja: '君は本当のことを言うべきだ。（sollen＝すべき／du・本動詞 sagen は文末）',
  tiles: ['Du', f(['soll', 'sollst', 'sollen'], 'sollst'), 'die Wahrheit', 'sagen'],
  sentence: 'Du sollst die Wahrheit sagen.', hint: 'sollen: du sollst。', exp: 'sollst … sagen。', tip: 'sollen＝他者の意志「すべき」。' });
add({ lektion: 7, category: '助動詞構文の語順', ja: '私の兄はドイツ文学を専攻するつもりだ。（wollen／本動詞 studieren は文末）',
  chips: 'Mein Bruder / will / Germanistik / studieren', sentence: 'Mein Bruder will Germanistik studieren.',
  hint: '助動詞が2位、本動詞（不定詞）は文末。', exp: 'will … Germanistik studieren。', tip: '助動詞構文は「枠構造」（助動詞…不定詞）。' });
add({ lektion: 7, category: '助動詞構文の語順', ja: '私はピアノを弾きたい。（möchte＝したい／本動詞 spielen は文末）',
  chips: 'Ich / möchte / Klavier / spielen', sentence: 'Ich möchte Klavier spielen.',
  hint: 'möchte＋不定詞（文末）。', exp: 'möchte … spielen。', tip: 'möchte は「〜したい」の丁寧な願望。' });
add({ lektion: 7, category: '助動詞構文の語順', ja: '君たちは今日歩いて大学へ行かなければならない。（müssen／ihr・本動詞 gehen は文末）',
  tiles: ['Ihr', f(['muss', 'müsst', 'müssen'], 'müsst'), 'heute', 'zu Fuß', 'zur Uni', 'gehen'],
  sentence: 'Ihr müsst heute zu Fuß zur Uni gehen.', hint: 'müssen: ihr müsst。本動詞 gehen は文末。', exp: 'müsst … zur Uni gehen。', tip: 'ihr の助動詞語尾は -t（müsst, könnt）。' });
add({ lektion: 7, category: '助動詞構文の語順', ja: '君は毎日よく眠れる？（können＝できる／du・本動詞 schlafen は文末）',
  tiles: [f(['Kann', 'Kannst', 'Können'], 'Kannst'), 'du', 'jeden Tag', 'gut', 'schlafen'],
  sentence: 'Kannst du jeden Tag gut schlafen?', hint: 'können: du kannst。', exp: 'Kannst du … schlafen?', tip: 'können＝能力・可能「できる」。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '話法の助動詞 müssen の意味は？',
  choices: ['〜しなければならない', '〜してもよい', '〜できる', '〜するつもりだ'], answer: 0,
  hint: '義務・必要。', exp: 'müssen＝〜しなければならない（必要・義務）。', tip: 'müssen↔dürfen（必要↔許可）。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '話法の助動詞 dürfen の意味は？',
  choices: ['〜してもよい（許可）', '〜すべきだ', '〜したい', '〜できる'], answer: 0,
  hint: '許可。否定で禁止。', exp: 'dürfen＝〜してよい（許可）。', tip: 'können（能力）と区別。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '話法の助動詞 wollen の意味は？',
  choices: ['〜するつもりだ（意志）', '〜しなければならない', '〜してもよい', '〜かもしれない'], answer: 0,
  hint: '主語自身の強い意志。', exp: 'wollen＝〜するつもりだ（自分の意志）。', tip: 'wollen（自分の意志）↔sollen（他者の意志）。' });
add({ lektion: 7, category: '話法の助動詞（意味）', ja: '「〜したい」という願望を表す助動詞は？',
  choices: ['möchte', 'müssen', 'sollen', 'dürfen'], answer: 0,
  hint: 'mögen の接続法II式。', exp: 'möchte＝〜したい（控えめな願望）。', tip: 'Ich möchte … は丁寧な「〜したい」。' });

/* ---- Lektion 8: 格支配の総合（択一・テキストの動詞で復習） ---- */
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
add({ lektion: 8, category: '冠詞の格変換', ja: '「Ich besuche einen Freund.」の einen を定冠詞にすると？（Freund＝男性4格）',
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
 * 形式:
 *   - 組み立て式 … chips（"a / b / c" を並び替え）/ tiles（[固定文字列 | {forms,answer}] をタップで語形変化）
 *   - 択一式     … choices（配列）＋ answer（0始まりのindex）
 * 各問: id / lektion / category / ja(日本語訳=問題文) / (chips|tiles|choices+answer) / sentence(正解文) / hint / exp / tip
 *   冠詞を選ぶ問題は ja に名詞の性を明示する（性は与え、格に応じた冠詞を選ばせる）。
 *   L7は話法の助動詞まで（未来形・従属接続詞は含めない）。L8は格支配の総合（択一）。
 * 手で編集せず、元データを直して gen_questions.js を再実行すること。
 */
const QUESTIONS = `;

fs.writeFileSync(path.resolve(__dirname, '../../js/data/questions.js'), header + JSON.stringify(out, null, 2) + ';\n', 'utf8');
const by = {};
out.forEach((q) => { by[q.lektion] = (by[q.lektion] || 0) + 1; });
console.log('total:', out.length, by);
