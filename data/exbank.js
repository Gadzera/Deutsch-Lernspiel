/* Deutsch-Lernspiel — level-tagged exercise bank (A1–C2).
 * Source of truth: Uni Wien EV / Akademie Deutsch course (see out/uni-wien-ev-course.md).
 * Pure MCQ items (self-contained for the quiz engine: kind/label/display/opts/a/why).
 * Exposed on window so the React bundle modules can read it.
 *
 *   window.EXBANK            -> array of items, each tagged {lvl, topic}
 *   window.buildMarathon(n, level?)   -> shuffled slice across all (or one) level
 *   window.buildLevelQuiz(level, n)   -> shuffled slice for one level
 *   window.exbankCount(level?)        -> how many items (optionally per level)
 */
(function () {
  'use strict';
  var Q = [];
  function add(lvl, topic, label, def) { Q.push(Object.assign({ lvl: lvl, topic: topic, label: label, kind: 'mcq', grid: false }, def)); }
  function art(lvl, noun, a, why) { add(lvl, 'artikel', 'Artikel', { display: '___ ' + noun, grid: true, opts: ['der', 'die', 'das'], a: a, why: why || ('<b>' + a + ' ' + noun + '</b>') }); }

  /* ================= A1 — Artikel (Nomen aus dem Kurs) ================= */
  art('A1', 'Hund', 'der', 'Tiere oft maskulin: <b>der</b> Hund.');
  art('A1', 'Katze', 'die', '<b>die</b> Katze.');
  art('A1', 'Vogel', 'der', '<b>der</b> Vogel, Plural: die Vögel.');
  art('A1', 'Schlange', 'die', '<b>die</b> Schlange.');
  art('A1', 'Salz', 'das', '<b>das</b> Salz.');
  art('A1', 'Brot', 'das', '<b>das</b> Brot.');
  art('A1', 'Zucker', 'der', '<b>der</b> Zucker.');
  art('A1', 'Gemüse', 'das', '<b>das</b> Gemüse.');
  art('A1', 'Liebe', 'die', '<b>die</b> Liebe.');
  art('A1', 'Hochzeit', 'die', '<b>die</b> Hochzeit.');
  art('A1', 'Streit', 'der', '<b>der</b> Streit.');
  art('A1', 'Studium', 'das', '<b>das</b> Studium.');
  art('A1', 'Klausur', 'die', '<b>die</b> Klausur.');
  art('A1', 'Konzert', 'das', '<b>das</b> Konzert.');
  art('A1', 'Gitarre', 'die', '<b>die</b> Gitarre.');
  art('A1', 'Feuer', 'das', '<b>das</b> Feuer.');
  art('A1', 'Erdbeben', 'das', '<b>das</b> Erdbeben.');
  art('A1', 'Wald', 'der', '<b>der</b> Wald.');
  art('A1', 'Notausgang', 'der', '<b>der</b> Notausgang.');
  art('A1', 'Aufzug', 'der', '<b>der</b> Aufzug (= der Lift).');

  /* ================= A1/A2 — Personalpronomen & Präsens ================= */
  add('A1', 'pronomen', 'Pronomen', { display: '___ heiße Anna.', grid: true, opts: ['Ich', 'Du', 'Er', 'Wir'], a: 'Ich', why: '1. Person Singular: <b>ich</b> heiße.' });
  add('A1', 'praesens', 'Präsens', { display: 'Er ___ aus Wien. <span style="opacity:.6">(kommen)</span>', grid: true, opts: ['komme', 'kommst', 'kommt', 'kommen'], a: 'kommt', why: 'er/sie/es → Stamm + <b>-t</b>: kommt.' });
  add('A1', 'praesens', 'Präsens', { display: 'Du ___ Deutsch. <span style="opacity:.6">(sprechen)</span>', grid: true, opts: ['sprichst', 'sprechst', 'spricht', 'sprachst'], a: 'sprichst', why: 'e→i Wechsel + du-Endung -st: <b>sprichst</b>.' });
  add('A2', 'praesens', 'Präsens', { display: 'Sie ___ ein Buch. <span style="opacity:.6">(lesen)</span>', grid: true, opts: ['list', 'liest', 'lest', 'liset'], a: 'liest', why: 'e→ie: sie <b>liest</b>.' });

  /* ================= A2 — Perfekt: haben/sein ================= */
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Ich ___ nach Wien gefahren.', grid: true, opts: ['bin', 'habe'], a: 'bin', why: 'Bewegungsverb → <b>sein</b>: ich bin gefahren.' });
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Ich ___ einen Kaffee getrunken.', grid: true, opts: ['bin', 'habe'], a: 'habe', why: 'Die meisten Verben → <b>haben</b>: ich habe getrunken.' });
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Wir ___ ins Kino gegangen.', grid: true, opts: ['sind', 'haben'], a: 'sind', why: 'gehen = Bewegung → <b>sein</b>.' });
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Er ___ früh aufgewacht.', grid: true, opts: ['ist', 'hat'], a: 'ist', why: 'aufwachen = Zustandsänderung → <b>sein</b>.' });
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Sie ___ die Hausaufgabe gemacht.', grid: true, opts: ['ist', 'hat'], a: 'hat', why: 'machen → <b>haben</b>.' });

  /* ================= A2/B1 — Partizip II ================= */
  add('A2', 'partizip', 'Partizip II', { display: 'trinken → ich habe …', opts: ['getrinkt', 'getrunken', 'getrankt', 'getrinken'], a: 'getrunken', why: 'trinken–trank–<b>getrunken</b>.' });
  add('A2', 'partizip', 'Partizip II', { display: 'essen → ich habe …', opts: ['geessen', 'gegessen', 'geißt', 'geesst'], a: 'gegessen', why: 'essen–aß–<b>gegessen</b>.' });
  add('B1', 'partizip', 'Partizip II', { display: 'nehmen → ich habe …', opts: ['genehmt', 'genommen', 'genahmen', 'genimmt'], a: 'genommen', why: 'nehmen–nahm–<b>genommen</b>.' });
  add('B1', 'partizip', 'Partizip II', { display: 'schreiben → ich habe …', opts: ['geschreibt', 'geschrieben', 'geschrioben', 'schreibt'], a: 'geschrieben', why: 'schreiben–schrieb–<b>geschrieben</b>.' });
  add('B1', 'partizip', 'Partizip II', { display: 'sprechen → ich habe …', opts: ['gesprecht', 'gesprochen', 'gesprachen', 'gesprichen'], a: 'gesprochen', why: 'sprechen–sprach–<b>gesprochen</b>.' });

  /* ================= B1 — Präteritum ================= */
  add('B1', 'praeteritum', 'Präteritum', { display: 'finden → er ___', grid: true, opts: ['findete', 'fand', 'fund', 'fandte'], a: 'fand', why: 'finden–<b>fand</b>–gefunden.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'gehen → er ___', grid: true, opts: ['gehte', 'ging', 'gang', 'gegangen'], a: 'ging', why: 'gehen–<b>ging</b>–gegangen.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'sein → er ___', grid: true, opts: ['warte', 'war', 'wäre', 'ist'], a: 'war', why: 'sein–<b>war</b>–gewesen.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'bringen → er ___', grid: true, opts: ['bringte', 'brachte', 'brang', 'brangte'], a: 'brachte', why: 'bringen–<b>brachte</b>–gebracht (gemischt).' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'kommen → er ___', grid: true, opts: ['kam', 'kommte', 'kom', 'kahm'], a: 'kam', why: 'kommen–<b>kam</b>–gekommen.' });

  /* ================= A2/B1 — Wechselpräpositionen (Wo/Wohin) ================= */
  add('A2', 'wechsel', 'Wo? → Dativ', { display: 'Das Bild hängt ___ Wand.', opts: ['an die', 'an der', 'auf die', 'in die'], a: 'an der', why: 'Wo? (Position) → Dativ: an <b>der</b> Wand.' });
  add('A2', 'wechsel', 'Wohin? → Akkusativ', { display: 'Ich hänge das Bild ___ Wand.', opts: ['an der', 'an die', 'an dem', 'auf der'], a: 'an die', why: 'Wohin? (Richtung) → Akkusativ: an <b>die</b> Wand.' });
  add('A2', 'wechsel', 'Wo? → Dativ', { display: 'Die Katze liegt ___ Sofa.', opts: ['auf das', 'auf dem', 'auf den', 'in das'], a: 'auf dem', why: 'Wo? → Dativ: auf <b>dem</b> Sofa.' });
  add('B1', 'wechsel', 'Wohin? → Akkusativ', { display: 'Stell die Flasche ___ Tisch.', opts: ['auf dem', 'auf den', 'auf der', 'an dem'], a: 'auf den', why: 'stellen = Richtung → Akkusativ: auf <b>den</b> Tisch.' });
  add('B1', 'wechsel', 'Wo? → Dativ', { display: 'Ich bin ___ Schule.', opts: ['in die', 'in der', 'in das', 'an die'], a: 'in der', why: 'sein/Position → Dativ: in <b>der</b> Schule.' });

  /* ================= A2 — Lokale Präp.: nach/zu/aus/von ================= */
  add('A2', 'lokal', 'nach/zu/aus', { display: 'Ich fliege ___ Spanien.', grid: true, opts: ['nach', 'zu', 'in', 'aus'], a: 'nach', why: 'Länder ohne Artikel → <b>nach</b>.' });
  add('A2', 'lokal', 'nach/zu/aus', { display: 'Ich gehe ___ Arzt.', grid: true, opts: ['nach', 'zum', 'ins', 'auf'], a: 'zum', why: 'Person/Ziel → zu: <b>zum</b> Arzt (zu dem).' });
  add('A2', 'lokal', 'nach/zu/aus', { display: 'Sie kommt ___ der Türkei.', grid: true, opts: ['von', 'aus', 'nach', 'zu'], a: 'aus', why: 'Herkunft (Land) → <b>aus</b> der Türkei.' });
  add('A2', 'lokal', 'zu Hause / nach Hause', { display: 'Ich bleibe heute ___.', grid: true, opts: ['nach Hause', 'zu Hause', 'ins Haus', 'im Hause'], a: 'zu Hause', why: 'Position (Wo?) → <b>zu Hause</b>. Richtung: nach Hause.' });

  /* ================= B1 — Reflexive Verben + Präposition ================= */
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Ich interessiere mich ___ Musik.', grid: true, opts: ['für', 'auf', 'an', 'über'], a: 'für', why: 'sich interessieren <b>für</b> + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Ich freue mich ___ das Wochenende.', grid: true, opts: ['über', 'auf', 'für', 'an'], a: 'auf', why: 'sich freuen <b>auf</b> (Zukunft) + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Er ärgert sich ___ den Lärm.', grid: true, opts: ['auf', 'für', 'über', 'an'], a: 'über', why: 'sich ärgern <b>über</b> + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Wir gewöhnen uns ___ das Wetter.', grid: true, opts: ['an', 'auf', 'über', 'für'], a: 'an', why: 'sich gewöhnen <b>an</b> + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Sie fürchtet sich ___ Spinnen.', grid: true, opts: ['vor', 'über', 'auf', 'an'], a: 'vor', why: 'sich fürchten <b>vor</b> + Dativ.' });

  /* ================= B1 — Verben mit Präposition ================= */
  add('B1', 'verb_prep', 'Verb + Präp.', { display: 'Ich warte ___ den Bus.', grid: true, opts: ['auf', 'an', 'für', 'über'], a: 'auf', why: 'warten <b>auf</b> + Akk.' });
  add('B1', 'verb_prep', 'Verb + Präp.', { display: 'Er träumt ___ einem Auto.', grid: true, opts: ['von', 'über', 'auf', 'an'], a: 'von', why: 'träumen <b>von</b> + Dativ.' });
  add('B1', 'verb_prep', 'Verb + Kasus', { display: 'Ich helfe ___ Freund. <span style="opacity:.6">(mein)</span>', grid: true, opts: ['meinen', 'meinem', 'mein', 'meines'], a: 'meinem', why: 'helfen + <b>Dativ</b>: meinem Freund.' });
  add('B1', 'verb_prep', 'Fragewort', { display: '___ wartest du? <span style="opacity:.6">(auf den Bus)</span>', grid: true, opts: ['Worauf', 'Auf wen', 'Wofür', 'Worüber'], a: 'Worauf', why: 'Sache + warten auf → <b>Worauf</b>? (wo+r+Präp).' });

  /* ================= B1 — Dativ vor Akkusativ ================= */
  add('B1', 'da_reihenfolge', 'Dativ vor Akkusativ', { display: 'Er schenkt …', displaySmall: true, opts: ['das Buch seinem Freund', 'seinem Freund das Buch'], a: 'seinem Freund das Buch', why: 'Zwei Nomen: <b>Dativ vor Akkusativ</b>.' });
  add('B1', 'da_reihenfolge', 'Pronomen zuerst', { display: 'Er schenkt …', displaySmall: true, opts: ['seinem Freund es', 'es seinem Freund'], a: 'es seinem Freund', why: 'Akkusativ-<b>Pronomen</b> steht vor dem Dativ.' });

  /* ================= B1/B2 — Relativpronomen ================= */
  add('B1', 'relativ', 'Relativpronomen', { display: 'Der Mann, ___ dort steht, ist Lehrer.', grid: true, opts: ['der', 'den', 'dem', 'die'], a: 'der', why: 'Subjekt im NS, maskulin → <b>der</b> (Nom.).' });
  add('B1', 'relativ', 'Relativpronomen', { display: 'Der Film, ___ wir gesehen haben, …', grid: true, opts: ['der', 'den', 'dem', 'das'], a: 'den', why: 'Objekt, maskulin → <b>den</b> (Akk.).' });
  add('B2', 'relativ', 'Relativpronomen', { display: 'Das Kind, ___ ich geholfen habe, …', grid: true, opts: ['das', 'dem', 'den', 'der'], a: 'dem', why: 'helfen + Dativ, neutrum → <b>dem</b>.' });
  add('B2', 'relativ', 'Relativpronomen', { display: 'Die Leute, ___ ich vertraue, …', grid: true, opts: ['die', 'denen', 'der', 'den'], a: 'denen', why: 'vertrauen + Dativ, Plural → <b>denen</b>.' });
  add('B2', 'relativ', 'Relativpronomen', { display: 'Die Frau, ___ ich gestern traf, …', grid: true, opts: ['die', 'der', 'den', 'dem'], a: 'die', why: 'Objekt, feminin → <b>die</b> (Akk.).' });

  /* ================= B1 — Konjunktionen ================= */
  add('B1', 'konjunktion', 'weil / Nebensatz', { display: 'Ich bleibe zu Hause, ___ es regnet.', grid: true, opts: ['weil', 'denn', 'deshalb', 'wegen'], a: 'weil', why: '<b>weil</b> + Nebensatz (Verb am Ende).' });
  add('B1', 'konjunktion', 'denn vs weil', { display: 'Ich lerne viel, ___ ich will bestehen.', grid: true, opts: ['weil', 'denn', 'dass', 'obwohl'], a: 'denn', why: 'Hauptsatz-Wortstellung (will an Pos. 2) → <b>denn</b>.' });
  add('B1', 'konjunktion', 'als vs wenn', { display: '___ ich ein Kind war, lebte ich in Kyiv.', grid: true, opts: ['Wenn', 'Als', 'Wann', 'Ob'], a: 'Als', why: 'Einmalige Vergangenheit → <b>als</b>.' });
  add('B1', 'konjunktion', 'dass — Wortstellung', { display: 'Ich glaube, dass er recht ___.', grid: true, opts: ['hat', 'ist', 'haben', 'wird'], a: 'hat', why: 'dass-Satz: Verb am <b>Ende</b> → … recht hat.' });
  add('B1', 'konjunktion', 'obwohl', { display: '___ ich krank bin, gehe ich arbeiten.', grid: true, opts: ['Obwohl', 'Trotzdem', 'Weil', 'Denn'], a: 'Obwohl', why: '<b>Obwohl</b> leitet den Nebensatz ein (Verb am Ende).' });
  add('B1', 'konjunktion', 'trotzdem', { display: 'Ich bin krank. ___ gehe ich arbeiten.', grid: true, opts: ['Obwohl', 'Trotzdem', 'Weil', 'Damit'], a: 'Trotzdem', why: '<b>Trotzdem</b> = Adverb, Verb auf Position 2.' });

  /* ================= B1 — TE-KA-MO-LO ================= */
  add('B1', 'tekamolo', 'Wortstellung TE-KA-MO-LO', { display: 'Welcher Satz ist richtig?', displaySmall: true, opts: ['Ich fahre nach Wien heute mit dem Bus.', 'Ich fahre heute mit dem Bus nach Wien.', 'Ich fahre mit dem Bus heute nach Wien.'], a: 'Ich fahre heute mit dem Bus nach Wien.', why: 'TE (heute) → MO (mit dem Bus) → LO (nach Wien).' });
  add('B2', 'tekamolo', 'Wortstellung TE-KA-MO-LO', { display: 'Welcher Satz ist richtig?', displaySmall: true, opts: ['Ich gehe wegen der Prüfung heute nervös ins Büro.', 'Ich gehe heute wegen der Prüfung nervös ins Büro.', 'Ich gehe ins Büro heute nervös wegen der Prüfung.'], a: 'Ich gehe heute wegen der Prüfung nervös ins Büro.', why: 'TE → KA (wegen) → MO (nervös) → LO (ins Büro).' });

  /* ================= B1/B2 — Adjektivdeklination ================= */
  add('B1', 'adjektiv', 'Adjektivendung', { display: 'Ich sehe einen ___ Hund. <span style="opacity:.6">(klein)</span>', grid: true, opts: ['kleiner', 'kleinen', 'kleines', 'kleine'], a: 'kleinen', why: 'unbest. Artikel, Akk. maskulin → <b>-en</b>.' });
  add('B1', 'adjektiv', 'Adjektivendung', { display: 'Das ist ein ___ Auto. <span style="opacity:.6">(neu)</span>', grid: true, opts: ['neuer', 'neues', 'neue', 'neuen'], a: 'neues', why: 'unbest. Artikel, Nom. neutrum → <b>-es</b>.' });
  add('B1', 'adjektiv', 'Adjektivendung', { display: 'Die ___ Frau lacht. <span style="opacity:.6">(nett, best. Art.)</span>', grid: true, opts: ['nette', 'netten', 'nettes', 'netter'], a: 'nette', why: 'best. Artikel, Nom. feminin → <b>-e</b>.' });
  add('B2', 'adjektiv', 'Adjektivendung', { display: 'mit dem ___ Auto <span style="opacity:.6">(schnell)</span>', grid: true, opts: ['schnellen', 'schnelle', 'schnelles', 'schneller'], a: 'schnellen', why: 'Dativ → fast immer <b>-en</b>.' });
  add('B2', 'adjektiv', 'Nullartikel', { display: 'Ich trinke gern ___ Wasser. <span style="opacity:.6">(kalt)</span>', grid: true, opts: ['kaltes', 'kalte', 'kalten', 'kalter'], a: 'kaltes', why: 'ohne Artikel, Akk. neutrum → <b>-es</b>.' });

  /* ================= B2 — n-Deklination ================= */
  add('B2', 'n_dekl', 'n-Deklination', { display: 'Ich helfe dem ___. <span style="opacity:.6">(Student)</span>', grid: true, opts: ['Student', 'Studenten', 'Students', 'Studentes'], a: 'Studenten', why: 'n-Deklination: dem <b>Studenten</b> (Dativ +en).' });
  add('B2', 'n_dekl', 'n-Deklination', { display: 'Ich sehe einen ___. <span style="opacity:.6">(Elefant)</span>', grid: true, opts: ['Elefant', 'Elefanten', 'Elefants', 'Elefantes'], a: 'Elefanten', why: 'Tier auf -ant → n-Deklination: <b>Elefanten</b>.' });
  add('B2', 'n_dekl', 'n-Deklination', { display: 'das Auto des ___. <span style="opacity:.6">(Präsident)</span>', grid: true, opts: ['Präsident', 'Präsidents', 'Präsidenten', 'Präsidentes'], a: 'Präsidenten', why: '-ent → n-Deklination, Genitiv: des <b>Präsidenten</b>.' });
  add('C1', 'n_dekl', 'n-Deklination (Ausnahme)', { display: 'Genitiv: die Kraft des ___. <span style="opacity:.6">(Herz)</span>', grid: true, opts: ['Herzs', 'Herzes', 'Herzens', 'Herzen'], a: 'Herzens', why: 'das Herz ist die Ausnahme: des <b>Herzens</b>.' });

  /* ================= B2 — Passiv ================= */
  add('B2', 'passiv', 'Passiv Präsens', { display: 'Das Haus ___ gebaut.', grid: true, opts: ['wird', 'wurde', 'ist', 'hat'], a: 'wird', why: 'Passiv Präsens: werden + P2 → <b>wird</b> gebaut.' });
  add('B2', 'passiv', 'Passiv Präteritum', { display: 'Die Glühbirne ___ von Edison erfunden.', grid: true, opts: ['wird', 'wurde', 'ist', 'war'], a: 'wurde', why: 'Passiv Präteritum: <b>wurde</b> + P2.' });
  add('B2', 'passiv', 'Passiv Perfekt', { display: 'Das Haus ist gebaut ___.', grid: true, opts: ['geworden', 'worden', 'gewesen', 'werden'], a: 'worden', why: 'Passiv Perfekt: ist + P2 + <b>worden</b>.' });
  add('B2', 'passiv', 'Passiv mit Modalverb', { display: 'Der Brief muss heute ___.', displaySmall: true, opts: ['geschrieben werden', 'geschrieben worden', 'schreiben werden', 'werden geschrieben'], a: 'geschrieben werden', why: 'Modal + P2 + <b>werden</b>: muss geschrieben werden.' });

  /* ================= B2 — Plusquamperfekt ================= */
  add('B2', 'plusquam', 'Plusquamperfekt', { display: 'Nachdem ich ___ war, frühstückte ich. <span style="opacity:.6">(aufstehen)</span>', displaySmall: true, opts: ['aufstand', 'aufgestanden', 'aufgestiegen', 'gestanden'], a: 'aufgestanden', why: 'war + P2: war <b>aufgestanden</b> (Vorzeitigkeit).' });
  add('B2', 'plusquam', 'Plusquamperfekt', { display: 'Nachdem er gegessen ___, ging er.', grid: true, opts: ['hatte', 'war', 'ist', 'hat'], a: 'hatte', why: 'essen → haben: <b>hatte</b> gegessen.' });

  /* ================= A2/B1 — Komparativ / Superlativ ================= */
  add('A2', 'komparativ', 'Steigerung', { display: 'gut – besser – ___', grid: true, opts: ['am guten', 'am besten', 'am gutsten', 'am bessten'], a: 'am besten', why: 'Unregelmäßig: gut – besser – <b>am besten</b>.' });
  add('A2', 'komparativ', 'Steigerung', { display: 'hoch – ___ – am höchsten', grid: true, opts: ['hocher', 'höher', 'höcher', 'hoer'], a: 'höher', why: 'hoch – <b>höher</b> – am höchsten.' });
  add('B1', 'komparativ', 'Steigerung', { display: 'Er läuft ___ als ich. <span style="opacity:.6">(schnell)</span>', grid: true, opts: ['schnell', 'schneller', 'am schnellsten', 'schnellere'], a: 'schneller', why: 'Vergleich mit „als" → Komparativ <b>schneller</b>.' });
  add('B1', 'komparativ', 'Steigerung', { display: 'viel – mehr – ___', grid: true, opts: ['am vielsten', 'am mehrsten', 'am meisten', 'am mehr'], a: 'am meisten', why: 'viel – mehr – <b>am meisten</b>.' });

  /* ================= B2 — Konsekutiv / Final ================= */
  add('B2', 'konsekutiv', 'so … dass', { display: 'Es ist ___ kalt, dass wir frieren.', grid: true, opts: ['so', 'solch', 'sehr', 'zu'], a: 'so', why: 'Konsekutivsatz: <b>so</b> + Adjektiv + dass.' });
  add('B2', 'final', 'damit / um…zu', { display: 'Ich lerne viel, ___ die Prüfung zu bestehen.', grid: true, opts: ['damit', 'um', 'für', 'zu'], a: 'um', why: 'Gleiches Subjekt → <b>um</b> … zu + Infinitiv.' });
  add('B2', 'final', 'damit / um…zu', { display: 'Ich gebe dir Geld, ___ du ein Buch kaufst.', grid: true, opts: ['um', 'damit', 'dass', 'weil'], a: 'damit', why: 'Verschiedene Subjekte → <b>damit</b>.' });

  /* ================= B2 — Indirekte Fragen ================= */
  add('B2', 'indirekt', 'Indirekte Frage (ob)', { display: 'Ich weiß nicht, ___ er heute kommt.', grid: true, opts: ['ob', 'dass', 'wenn', 'was'], a: 'ob', why: 'Ja/Nein-Frage indirekt → <b>ob</b>.' });
  add('B2', 'indirekt', 'Indirekte Frage (W)', { display: 'Können Sie sagen, ___ der Bahnhof ist?', grid: true, opts: ['ob', 'wo', 'dass', 'wenn'], a: 'wo', why: 'W-Frage bleibt: …, <b>wo</b> der Bahnhof ist.' });

  /* ================= A2/B1 — Imperativ ================= */
  add('A2', 'imperativ', 'Imperativ (du)', { display: '___ bitte her! <span style="opacity:.6">(kommen)</span>', grid: true, opts: ['Kommst', 'Komm', 'Kommen', 'Komme du'], a: 'Komm', why: 'du-Imperativ: Stamm ohne Endung → <b>Komm!</b>' });
  add('B1', 'imperativ', 'Imperativ (du)', { display: '___ mir bitte! <span style="opacity:.6">(helfen)</span>', grid: true, opts: ['Helf', 'Hilf', 'Helfe', 'Hilfst'], a: 'Hilf', why: 'e→i auch im Imperativ: <b>Hilf!</b>' });
  add('B1', 'imperativ', 'Imperativ (Sie)', { display: '___ Sie bitte einen Moment!', grid: true, opts: ['Warten', 'Wartet', 'Warte', 'Wart'], a: 'Warten', why: 'Sie-Form: Infinitiv + Sie → <b>Warten Sie!</b>' });

  /* ================= B1 — zu + Infinitiv ================= */
  add('B1', 'zu_inf', 'zu + Infinitiv', { display: 'Es macht Spaß, Deutsch ___.', grid: true, opts: ['lernen', 'zu lernen', 'lerne', 'gelernt'], a: 'zu lernen', why: 'Nach „Es macht Spaß," → <b>zu</b> + Infinitiv.' });
  add('B1', 'zu_inf', 'zu + Infinitiv', { display: 'Ich versuche, pünktlich ___.', grid: true, opts: ['sein', 'zu sein', 'bin', 'gewesen'], a: 'zu sein', why: 'versuchen + <b>zu</b> + Infinitiv.' });

  /* ================= B1 — Suffix-Genus ================= */
  add('B1', 'genus', 'Genus nach Endung', { display: 'die Freiheit, die Gesundheit → Endung -heit ist …', displaySmall: true, grid: true, opts: ['der', 'die', 'das'], a: 'die', why: '-heit/-keit → immer <b>die</b>.' });
  add('B1', 'genus', 'Genus nach Endung', { display: 'die Erkältung, die Lösung → Endung -ung ist …', displaySmall: true, grid: true, opts: ['der', 'die', 'das'], a: 'die', why: '-ung → immer <b>die</b>.' });
  add('B1', 'genus', 'Genus nach Endung', { display: 'das Häuschen, das Mädchen → Endung -chen ist …', displaySmall: true, grid: true, opts: ['der', 'die', 'das'], a: 'das', why: '-chen/-lein → immer <b>das</b> (Verkleinerung).' });

  /* ================= C1/C2 — Redewendungen & Wortschatz ================= */
  add('C1', 'idiom', 'Redewendung', { display: 'Der Ton macht die ___.', grid: true, opts: ['Musik', 'Sprache', 'Stimme', 'Worte'], a: 'Musik', why: '„Der Ton macht die <b>Musik</b>" — wichtig ist, WIE man etwas sagt.' });
  add('C1', 'idiom', 'Redewendung', { display: 'Ich nehme kein ___ vor den Mund.', grid: true, opts: ['Blatt', 'Buch', 'Tuch', 'Wort'], a: 'Blatt', why: 'kein <b>Blatt</b> vor den Mund nehmen = offen reden.' });
  add('C1', 'idiom', 'Glück wünschen', { display: 'Vor der Prüfung sagt man: „Hals- und ___bruch!"', grid: true, opts: ['Bein', 'Arm', 'Kopf', 'Fuß'], a: 'Bein', why: '„Hals- und <b>Beinbruch</b>!" = viel Glück (ironisch).' });
  add('C1', 'wortschatz', 'Bedeutung', { display: 'die Schadenfreude bedeutet …', displaySmall: true, opts: ['Freude über das Pech anderer', 'große Traurigkeit', 'Angst vor Schaden', 'Freude am Helfen'], a: 'Freude über das Pech anderer', why: '<b>Schadenfreude</b> = Freude über das Missgeschick anderer.' });
  add('C2', 'wortschatz', 'Bedeutung', { display: 'ein „Ohrwurm" ist …', displaySmall: true, opts: ['ein Insekt im Ohr', 'eine Melodie, die im Kopf bleibt', 'eine Ohrenkrankheit', 'ein lautes Geräusch'], a: 'eine Melodie, die im Kopf bleibt', why: 'der <b>Ohrwurm</b> = eine eingängige Melodie, die nicht aus dem Kopf geht.' });
  add('C2', 'wortschatz', 'Person', { display: 'Ein „Glückspilz" ist eine Person, die …', displaySmall: true, opts: ['oft Glück hat', 'Pilze sammelt', 'immer Pech hat', 'gerne kocht'], a: 'oft Glück hat', why: 'der <b>Glückspilz</b> = jemand, der viel Glück hat (Gegenteil: Pechvogel).' });

  /* ================= NEW BLOCK — expanded coverage (Uni Wien EV scenarios) ================= */

  /* ---- A1/A2 — mehr Artikel (Kursvokabular) ---- */
  art('A1', 'Bär', 'der', '<b>der</b> Bär.');
  art('A1', 'Hase', 'der', '<b>der</b> Hase.');
  art('A1', 'Löwe', 'der', '<b>der</b> Löwe.');
  art('A1', 'Biene', 'die', '<b>die</b> Biene.');
  art('A1', 'Spinne', 'die', '<b>die</b> Spinne.');
  art('A1', 'Igel', 'der', '<b>der</b> Igel.');
  art('A1', 'Pinguin', 'der', '<b>der</b> Pinguin.');
  art('A1', 'Schnecke', 'die', '<b>die</b> Schnecke.');
  art('A1', 'Lift', 'der', '<b>der</b> Lift (= der Aufzug).');
  art('A1', 'Flur', 'der', '<b>der</b> Flur (= der Gang).');
  art('A1', 'WG', 'die', '<b>die</b> WG (Wohngemeinschaft).');
  art('A1', 'Putzplan', 'der', '<b>der</b> Putzplan.');
  art('A1', 'Nachtruhe', 'die', '<b>die</b> Nachtruhe.');
  art('A1', 'Soße', 'die', '<b>die</b> Soße.');
  art('A1', 'Mehl', 'das', '<b>das</b> Mehl.');
  art('A1', 'Obst', 'das', '<b>das</b> Obst.');
  art('A1', 'Kebap', 'der', '<b>der</b> Kebap.');
  art('A1', 'Dessert', 'das', '<b>das</b> Dessert (= die Nachspeise).');
  art('A1', 'Paar', 'das', '<b>das</b> Paar.');
  art('A1', 'Verlobung', 'die', '<b>die</b> Verlobung.');
  art('A1', 'Heiratsantrag', 'der', '<b>der</b> Heiratsantrag.');
  art('A1', 'Freundschaft', 'die', '<b>die</b> Freundschaft.');
  art('A1', 'Trennung', 'die', '<b>die</b> Trennung.');
  art('A1', 'Liebeskummer', 'der', '<b>der</b> Liebeskummer.');
  art('A1', 'Notfall', 'der', '<b>der</b> Notfall.');
  art('A1', 'Notarzt', 'der', '<b>der</b> Notarzt.');
  art('A1', 'Notaufnahme', 'die', '<b>die</b> Notaufnahme.');
  art('A1', 'Notbremse', 'die', '<b>die</b> Notbremse.');
  art('A1', 'Erkältung', 'die', '<b>die</b> Erkältung.');
  art('A1', 'Brand', 'der', '<b>der</b> Brand.');
  art('A1', 'Überschwemmung', 'die', '<b>die</b> Überschwemmung.');
  art('A1', 'Welle', 'die', '<b>die</b> Welle.');
  art('A1', 'Erde', 'die', '<b>die</b> Erde.');
  art('A1', 'Weltall', 'das', '<b>das</b> Weltall.');
  art('A1', 'Königin', 'die', '<b>die</b> Königin.');
  art('A1', 'Palast', 'der', '<b>der</b> Palast.');
  art('A1', 'Kleid', 'das', '<b>das</b> Kleid.');
  art('A1', 'Feder', 'die', '<b>die</b> Feder.');
  art('A1', 'Zwerg', 'der', '<b>der</b> Zwerg.');
  art('A2', 'Häuschen', 'das', '-chen → <b>das</b> Häuschen.');
  art('A1', 'Band', 'die', '<b>die</b> Band (Musikgruppe).');
  art('A1', 'Schlagzeug', 'das', '<b>das</b> Schlagzeug.');
  art('A1', 'Mikrofon', 'das', '<b>das</b> Mikrofon.');
  art('A1', 'Ohrwurm', 'der', '<b>der</b> Ohrwurm.');
  art('A1', 'Kopfkino', 'das', '<b>das</b> Kopfkino.');
  art('A1', 'Abitur', 'das', '<b>das</b> Abitur.');
  art('A1', 'Matura', 'die', '<b>die</b> Matura (österr. = Abitur).');
  art('A1', 'Studiengang', 'der', '<b>der</b> Studiengang.');
  art('A1', 'Aufnahmeprüfung', 'die', '<b>die</b> Aufnahmeprüfung.');
  art('A1', 'Hausarbeit', 'die', '<b>die</b> Hausarbeit.');
  art('A1', 'Wortschatz', 'der', '<b>der</b> Wortschatz.');
  art('A2', 'Pechvogel', 'der', '<b>der</b> Pechvogel.');
  art('A2', 'Glückspilz', 'der', '<b>der</b> Glückspilz.');
  art('A2', 'Naschkatze', 'die', '<b>die</b> Naschkatze.');
  art('A2', 'Schnapsidee', 'die', '<b>die</b> Schnapsidee.');

  /* ---- A1/A2 — Präsens: stammverändernde Verben ---- */
  add('A1', 'praesens', 'Präsens (a→ä)', { display: 'Du ___ zu schnell. <span style="opacity:.6">(fahren)</span>', grid: true, opts: ['fahrst', 'fährst', 'fahrest', 'fährt'], a: 'fährst', why: 'a→ä bei du: <b>fährst</b>.' });
  add('A1', 'praesens', 'Präsens (a→ä)', { display: 'Er ___ den ganzen Tag. <span style="opacity:.6">(schlafen)</span>', grid: true, opts: ['schlaft', 'schläft', 'schläfst', 'schlieft'], a: 'schläft', why: 'a→ä bei er/sie/es: <b>schläft</b>.' });
  add('A1', 'praesens', 'Präsens (au→äu)', { display: 'Sie ___ sehr schnell. <span style="opacity:.6">(laufen)</span>', grid: true, opts: ['lauft', 'läuft', 'läufst', 'loft'], a: 'läuft', why: 'au→äu bei er/sie/es: <b>läuft</b>.' });
  add('A1', 'praesens', 'Präsens (e→i)', { display: 'Du ___ mir das Buch. <span style="opacity:.6">(geben)</span>', grid: true, opts: ['gebst', 'gibst', 'gibt', 'gebest'], a: 'gibst', why: 'e→i bei du: <b>gibst</b>.' });
  add('A1', 'praesens', 'Präsens (e→ie)', { display: 'Er ___ den Film. <span style="opacity:.6">(sehen)</span>', grid: true, opts: ['seht', 'sieht', 'siht', 'seiht'], a: 'sieht', why: 'e→ie bei er/sie/es: <b>sieht</b>.' });
  add('A1', 'praesens', 'Präsens (e→i)', { display: 'Du ___ Brot. <span style="opacity:.6">(essen)</span>', grid: true, opts: ['esst', 'isst', 'esset', 'ißt'], a: 'isst', why: 'e→i bei du: <b>isst</b>.' });
  add('A2', 'praesens', 'Präsens (e→i)', { display: 'Sie ___ ihm. <span style="opacity:.6">(helfen)</span>', grid: true, opts: ['helft', 'hilft', 'hilfst', 'helfet'], a: 'hilft', why: 'e→i bei er/sie/es: <b>hilft</b>.' });
  add('A2', 'praesens', 'Präsens (e→i)', { display: 'Du ___ ein Auto. <span style="opacity:.6">(nehmen)</span>', grid: true, opts: ['nehmst', 'nimmst', 'nimmt', 'nehmest'], a: 'nimmst', why: 'e→i bei du: <b>nimmst</b>.' });
  add('A1', 'praesens', 'Präsens (haben)', { display: 'Du ___ ein Buch. <span style="opacity:.6">(haben)</span>', grid: true, opts: ['hast', 'habst', 'hat', 'habest'], a: 'hast', why: 'haben unregelmäßig: du <b>hast</b>.' });
  add('A1', 'praesens', 'Präsens (sein)', { display: 'Ihr ___ pünktlich. <span style="opacity:.6">(sein)</span>', grid: true, opts: ['sind', 'seid', 'seit', 'bist'], a: 'seid', why: 'ihr <b>seid</b> (mit d).' });

  /* ---- A1/A2 — Modalverben ---- */
  add('A1', 'modalverb', 'können', { display: 'Ich ___ schwimmen.', grid: true, opts: ['kann', 'kannst', 'können', 'könnt'], a: 'kann', why: 'ich/er kann (kein -e): <b>kann</b>.' });
  add('A1', 'modalverb', 'können', { display: 'Du ___ gut kochen.', grid: true, opts: ['kann', 'kannst', 'kannt', 'könnst'], a: 'kannst', why: 'du <b>kannst</b>.' });
  add('A1', 'modalverb', 'müssen', { display: 'Wir ___ jetzt gehen.', grid: true, opts: ['muss', 'müssen', 'müsst', 'musst'], a: 'müssen', why: 'wir <b>müssen</b>.' });
  add('A1', 'modalverb', 'müssen', { display: 'Ich ___ heute lernen.', grid: true, opts: ['muss', 'musst', 'müsse', 'müssen'], a: 'muss', why: 'ich <b>muss</b> (kein Umlaut, kein -e).' });
  add('A2', 'modalverb', 'wollen', { display: 'Er ___ nach Wien fahren.', grid: true, opts: ['will', 'willst', 'wollt', 'wollen'], a: 'will', why: 'er <b>will</b>.' });
  add('A2', 'modalverb', 'dürfen', { display: 'Hier ___ man nicht rauchen.', grid: true, opts: ['darf', 'darfst', 'dürfen', 'durft'], a: 'darf', why: 'man <b>darf</b> nicht (= verboten).' });
  add('A2', 'modalverb', 'sollen', { display: 'Du ___ mehr schlafen, sagt der Arzt.', grid: true, opts: ['sollst', 'soll', 'sollt', 'sollest'], a: 'sollst', why: 'du <b>sollst</b> (Rat/Auftrag).' });
  add('A2', 'modalverb', 'mögen', { display: 'Ich ___ keinen Kaffee.', grid: true, opts: ['mag', 'magst', 'möge', 'mögen'], a: 'mag', why: 'ich <b>mag</b> (Vorliebe).' });
  add('A2', 'modalverb', 'Satzklammer', { display: 'Ich ___ heute nicht ___. <span style="opacity:.6">(können / kommen)</span>', displaySmall: true, opts: ['kann … kommen', 'komme … können', 'kann … komme', 'könne … kommen'], a: 'kann … kommen', why: 'Modalverb Pos. 2, Infinitiv am Ende: <b>kann … kommen</b>.' });
  add('A2', 'modalverb', 'mögen (möchte)', { display: 'Ich ___ einen Tee, bitte.', grid: true, opts: ['möchte', 'möchtest', 'mag', 'will'], a: 'möchte', why: 'höflicher Wunsch: ich <b>möchte</b>.' });

  /* ---- A1/A2 — trennbare Verben ---- */
  add('A1', 'trennbar', 'aufstehen', { display: 'Ich ___ um 7 Uhr ___. <span style="opacity:.6">(aufstehen)</span>', displaySmall: true, opts: ['stehe … auf', 'aufstehe …', 'stehe auf …', 'auf … stehe'], a: 'stehe … auf', why: 'Trennbar: Vorsilbe ans Ende → <b>stehe … auf</b>.' });
  add('A1', 'trennbar', 'einkaufen', { display: 'Wir ___ am Samstag ___. <span style="opacity:.6">(einkaufen)</span>', displaySmall: true, opts: ['kaufen … ein', 'einkaufen …', 'kaufen ein …', 'ein … kaufen'], a: 'kaufen … ein', why: 'Trennbar: <b>kaufen … ein</b>.' });
  add('A1', 'trennbar', 'anrufen', { display: 'Sie ___ ihre Mutter ___. <span style="opacity:.6">(anrufen)</span>', displaySmall: true, opts: ['ruft … an', 'anruft …', 'ruft an …', 'an … ruft'], a: 'ruft … an', why: 'Trennbar: <b>ruft … an</b>.' });
  add('A2', 'trennbar', 'fernsehen', { display: 'Am Abend ___ ich gern ___. <span style="opacity:.6">(fernsehen)</span>', displaySmall: true, opts: ['sehe … fern', 'fernsehe …', 'sehe fern …', 'fern … sehe'], a: 'sehe … fern', why: 'Trennbar: <b>sehe … fern</b>.' });
  add('A2', 'trennbar', 'Partizip II (trennbar)', { display: 'aufstehen → ich bin …', grid: true, opts: ['aufgestanden', 'aufgestiegen', 'gestanden auf', 'aufstanden'], a: 'aufgestanden', why: 'ge- in der Mitte: <b>aufgestanden</b>.' });
  add('A2', 'trennbar', 'Partizip II (trennbar)', { display: 'einkaufen → ich habe …', grid: true, opts: ['eingekauft', 'gekauft ein', 'einkauft', 'eingekaufen'], a: 'eingekauft', why: 'auf+ge+kauft → <b>eingekauft</b>.' });
  add('A2', 'trennbar', 'untrennbar (kein ge-)', { display: 'verstehen → ich habe …', grid: true, opts: ['geverstanden', 'verstanden', 'versteht', 'verstande'], a: 'verstanden', why: 'untrennbar (ver-) → kein ge-: <b>verstanden</b>.' });

  /* ---- A1/A2 — Possessivartikel ---- */
  add('A1', 'possessiv', 'mein/dein', { display: 'Das ist ___ Bruder. <span style="opacity:.6">(ich)</span>', grid: true, opts: ['mein', 'meine', 'meinen', 'meiner'], a: 'mein', why: 'Nom. maskulin: <b>mein</b> Bruder.' });
  add('A1', 'possessiv', 'mein/dein', { display: 'Ist das ___ Schwester? <span style="opacity:.6">(du)</span>', grid: true, opts: ['dein', 'deine', 'deinen', 'deiner'], a: 'deine', why: 'Nom. feminin: <b>deine</b> Schwester.' });
  add('A2', 'possessiv', 'sein/ihr', { display: 'Anna sucht ___ Buch. <span style="opacity:.6">(sie, Akk. neutrum)</span>', grid: true, opts: ['ihr', 'ihre', 'ihren', 'ihrem'], a: 'ihr', why: 'Akk. neutrum: <b>ihr</b> Buch (kein -e).' });
  add('A2', 'possessiv', 'sein/ihr', { display: 'Der Mann liebt ___ Frau. <span style="opacity:.6">(er, Akk. feminin)</span>', grid: true, opts: ['sein', 'seine', 'seinen', 'seiner'], a: 'seine', why: 'Akk. feminin: <b>seine</b> Frau.' });
  add('A2', 'possessiv', 'unser', { display: 'Wir lieben ___ Stadt. <span style="opacity:.6">(wir, Akk. feminin)</span>', grid: true, opts: ['unser', 'unsere', 'unseren', 'unserem'], a: 'unsere', why: 'Akk. feminin: <b>unsere</b> Stadt.' });
  add('A2', 'possessiv', 'Dativ', { display: 'Ich spiele mit ___ Hund. <span style="opacity:.6">(ich, Dativ maskulin)</span>', grid: true, opts: ['mein', 'meine', 'meinem', 'meinen'], a: 'meinem', why: 'mit + Dativ maskulin: <b>meinem</b> Hund.' });

  /* ---- A1/A2 — Akkusativ (ein/kein/-en) ---- */
  add('A1', 'akkusativ', 'einen/ein/eine', { display: 'Ich habe ___ Hund. <span style="opacity:.6">(maskulin)</span>', grid: true, opts: ['ein', 'einen', 'einem', 'einer'], a: 'einen', why: 'Akk. maskulin: <b>einen</b> Hund.' });
  add('A1', 'akkusativ', 'einen/ein/eine', { display: 'Sie kauft ___ Auto. <span style="opacity:.6">(neutrum)</span>', grid: true, opts: ['einen', 'ein', 'eine', 'einem'], a: 'ein', why: 'Akk. neutrum: <b>ein</b> Auto.' });
  add('A1', 'akkusativ', 'eine', { display: 'Er sucht ___ Wohnung. <span style="opacity:.6">(feminin)</span>', grid: true, opts: ['einen', 'ein', 'eine', 'einer'], a: 'eine', why: 'Akk. feminin: <b>eine</b> Wohnung.' });
  add('A2', 'akkusativ', 'kein/keinen', { display: 'Ich habe ___ Bruder. <span style="opacity:.6">(maskulin, Verneinung)</span>', grid: true, opts: ['kein', 'keinen', 'keine', 'keinem'], a: 'keinen', why: 'Akk. maskulin verneint: <b>keinen</b> Bruder.' });
  add('A2', 'akkusativ', 'kein/keine', { display: 'Wir haben ___ Zeit. <span style="opacity:.6">(feminin, Verneinung)</span>', grid: true, opts: ['kein', 'keinen', 'keine', 'keiner'], a: 'keine', why: 'Akk. feminin verneint: <b>keine</b> Zeit.' });
  add('A2', 'akkusativ', 'Akkusativ-Pronomen', { display: 'Kennst du den Film? – Ja, ich kenne ___.', grid: true, opts: ['er', 'ihn', 'ihm', 'es'], a: 'ihn', why: 'maskulin Akkusativ: <b>ihn</b>.' });

  /* ---- A2 — nicht vs kein ---- */
  add('A2', 'negation', 'nicht vs kein', { display: 'Ich habe ___ Auto.', grid: true, opts: ['nicht', 'kein', 'nicht ein', 'keine'], a: 'kein', why: 'Nomen mit unbest./ohne Artikel verneint man mit <b>kein</b>.' });
  add('A2', 'negation', 'nicht vs kein', { display: 'Das Auto ist ___ rot.', grid: true, opts: ['kein', 'keine', 'nicht', 'nichts'], a: 'nicht', why: 'Adjektive/Verben verneint man mit <b>nicht</b>.' });
  add('A2', 'negation', 'nicht vs kein', { display: 'Ich kenne den Mann ___.', grid: true, opts: ['kein', 'keinen', 'nicht', 'nichts'], a: 'nicht', why: 'Nomen mit bestimmtem Artikel → <b>nicht</b>.' });
  add('A2', 'negation', 'Position von nicht', { display: 'Welcher Satz ist richtig?', displaySmall: true, opts: ['Ich komme nicht heute.', 'Ich komme heute nicht.', 'Ich nicht komme heute.'], a: 'Ich komme heute nicht.', why: 'Satznegation: <b>nicht</b> steht am Satzende.' });

  /* ---- A2/B1 — mehr Perfekt (haben/sein) ---- */
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Er ___ schnell gelaufen.', grid: true, opts: ['ist', 'hat'], a: 'ist', why: 'laufen = Bewegung → <b>sein</b>.' });
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Ich ___ den Brief geschrieben.', grid: true, opts: ['bin', 'habe'], a: 'habe', why: 'schreiben → <b>haben</b>.' });
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Sie ___ in Wien geblieben.', grid: true, opts: ['ist', 'hat'], a: 'ist', why: 'bleiben → <b>sein</b> (Ausnahme).' });
  add('A2', 'perfekt', 'Perfekt: haben/sein', { display: 'Das Kind ___ eingeschlafen.', grid: true, opts: ['ist', 'hat'], a: 'ist', why: 'einschlafen = Zustandsänderung → <b>sein</b>.' });
  add('B1', 'perfekt', 'Perfekt: haben/sein', { display: 'Der Großvater ___ letztes Jahr gestorben.', grid: true, opts: ['ist', 'hat'], a: 'ist', why: 'sterben = Zustandsänderung → <b>sein</b>.' });
  add('B1', 'perfekt', 'Perfekt: haben/sein', { display: 'Wir ___ den ganzen Film gesehen.', grid: true, opts: ['sind', 'haben'], a: 'haben', why: 'sehen → <b>haben</b>.' });

  /* ---- A2/B1 — mehr Partizip II ---- */
  add('A2', 'partizip', 'Partizip II', { display: 'fahren → ich bin …', grid: true, opts: ['gefahren', 'gefahrt', 'gefohren', 'gefahret'], a: 'gefahren', why: 'fahren–fuhr–<b>gefahren</b>.' });
  add('A2', 'partizip', 'Partizip II', { display: 'kommen → ich bin …', grid: true, opts: ['gekommt', 'gekommen', 'gekamen', 'gekimmen'], a: 'gekommen', why: 'kommen–kam–<b>gekommen</b>.' });
  add('B1', 'partizip', 'Partizip II', { display: 'lesen → ich habe …', grid: true, opts: ['gelest', 'gelesen', 'gelasen', 'gelisen'], a: 'gelesen', why: 'lesen–las–<b>gelesen</b>.' });
  add('B1', 'partizip', 'Partizip II', { display: 'geben → ich habe …', grid: true, opts: ['gegebt', 'gegeben', 'gegoben', 'gegiben'], a: 'gegeben', why: 'geben–gab–<b>gegeben</b>.' });
  add('B1', 'partizip', 'Partizip II (-ieren)', { display: 'studieren → ich habe …', grid: true, opts: ['gestudiert', 'studiert', 'studieren', 'gestudieren'], a: 'studiert', why: 'Verben auf -ieren: <b>kein</b> ge- → studiert.' });
  add('B1', 'partizip', 'Partizip II', { display: 'bleiben → ich bin …', grid: true, opts: ['gebleibt', 'geblieben', 'gebliben', 'bleibt'], a: 'geblieben', why: 'bleiben–blieb–<b>geblieben</b>.' });

  /* ---- B1 — mehr Präteritum (unregelmäßig) ---- */
  add('B1', 'praeteritum', 'Präteritum', { display: 'sehen → er ___', grid: true, opts: ['sehte', 'sah', 'sieh', 'sahte'], a: 'sah', why: 'sehen–<b>sah</b>–gesehen.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'geben → er ___', grid: true, opts: ['gebte', 'gab', 'gibt', 'gob'], a: 'gab', why: 'geben–<b>gab</b>–gegeben.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'lesen → er ___', grid: true, opts: ['leste', 'las', 'lies', 'losen'], a: 'las', why: 'lesen–<b>las</b>–gelesen.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'sprechen → er ___', grid: true, opts: ['sprechte', 'sprach', 'sprich', 'sproch'], a: 'sprach', why: 'sprechen–<b>sprach</b>–gesprochen.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'schreiben → er ___', grid: true, opts: ['schreibte', 'schrieb', 'schrob', 'schreibe'], a: 'schrieb', why: 'schreiben–<b>schrieb</b>–geschrieben.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'fahren → er ___', grid: true, opts: ['fahrte', 'fuhr', 'fahr', 'fihr'], a: 'fuhr', why: 'fahren–<b>fuhr</b>–gefahren.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'nehmen → er ___', grid: true, opts: ['nehmte', 'nahm', 'nimmt', 'nohm'], a: 'nahm', why: 'nehmen–<b>nahm</b>–genommen.' });
  add('B1', 'praeteritum', 'Präteritum', { display: 'bleiben → er ___', grid: true, opts: ['bleibte', 'blieb', 'blob', 'bleibe'], a: 'blieb', why: 'bleiben–<b>blieb</b>–geblieben.' });
  add('B1', 'praeteritum', 'Präteritum (haben)', { display: 'haben → er ___', grid: true, opts: ['habte', 'hatte', 'hate', 'hatt'], a: 'hatte', why: 'haben–<b>hatte</b>–gehabt.' });
  add('B1', 'praeteritum', 'Präteritum (werden)', { display: 'werden → er ___', grid: true, opts: ['werdete', 'wurde', 'ward', 'wurd'], a: 'wurde', why: 'werden–<b>wurde</b>–geworden.' });

  /* ---- A2/B1 — mehr Wechselpräpositionen ---- */
  add('A2', 'wechsel', 'Wo? → Dativ', { display: 'Das Buch liegt ___ Tisch.', opts: ['auf den', 'auf dem', 'auf der', 'an den'], a: 'auf dem', why: 'Wo? → Dativ: auf <b>dem</b> Tisch.' });
  add('B1', 'wechsel', 'Wohin? → Akkusativ', { display: 'Ich lege das Buch ___ Tisch.', opts: ['auf dem', 'auf den', 'auf der', 'an dem'], a: 'auf den', why: 'legen = Richtung → Akk.: auf <b>den</b> Tisch.' });
  add('B1', 'wechsel', 'Wo? → Dativ', { display: 'Die Lampe hängt ___ Tisch.', opts: ['über den', 'über dem', 'über der', 'auf den'], a: 'über dem', why: 'Wo? → Dativ: über <b>dem</b> Tisch.' });
  add('B1', 'wechsel', 'Wohin? → Akkusativ', { display: 'Ich setze mich ___ Stuhl.', opts: ['auf dem', 'auf den', 'an dem', 'auf der'], a: 'auf den', why: 'sich setzen = Richtung → Akk.: auf <b>den</b> Stuhl.' });
  add('B1', 'wechsel', 'Wo? → Dativ', { display: 'Der Hund sitzt ___ Tür.', opts: ['vor die', 'vor der', 'vor den', 'an die'], a: 'vor der', why: 'Wo? → Dativ: vor <b>der</b> Tür.' });
  add('B1', 'wechsel', 'Wohin? → Akkusativ', { display: 'Wir gehen ___ Kino.', opts: ['in dem', 'ins', 'im', 'in der'], a: 'ins', why: 'Wohin? → Akk.: <b>ins</b> Kino (in das).' });

  /* ---- B1 — mehr Reflexiv + Präposition ---- */
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Er regt sich ___ den Lärm auf.', grid: true, opts: ['über', 'auf', 'an', 'für'], a: 'über', why: 'sich aufregen <b>über</b> + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Ich bedanke mich ___ das Geschenk.', grid: true, opts: ['für', 'über', 'auf', 'an'], a: 'für', why: 'sich bedanken <b>für</b> + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Sie beschwert sich ___ den Service.', grid: true, opts: ['auf', 'über', 'für', 'von'], a: 'über', why: 'sich beschweren <b>über</b> + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Wir kennen uns gut ___ Wien aus.', grid: true, opts: ['mit', 'in', 'an', 'über'], a: 'mit', why: 'sich auskennen <b>mit</b> + Dativ.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Ich erinnere mich ___ den Urlaub.', grid: true, opts: ['an', 'auf', 'über', 'für'], a: 'an', why: 'sich erinnern <b>an</b> + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Er schämt sich ___ seinen Fehler.', grid: true, opts: ['für', 'über', 'an', 'vor'], a: 'für', why: 'sich schämen <b>für</b> + Akk.' });
  add('B1', 'refl_prep', 'Reflexiv + Präp.', { display: 'Sie verabredet sich ___ einer Freundin.', grid: true, opts: ['mit', 'für', 'an', 'auf'], a: 'mit', why: 'sich verabreden <b>mit</b> + Dativ.' });
  add('B1', 'refl_prep', 'Reflexiv (Akk./Dat.)', { display: 'Ich wasche ___ die Hände.', grid: true, opts: ['mich', 'mir', 'mein', 'sich'], a: 'mir', why: 'Mit Akk.-Objekt (die Hände) → Reflexivpronomen im <b>Dativ</b>: mir.' });

  /* ---- B1 — mehr Verben mit Präposition ---- */
  add('B1', 'verb_prep', 'Verb + Präp.', { display: 'Wir denken oft ___ dich.', grid: true, opts: ['an', 'auf', 'über', 'von'], a: 'an', why: 'denken <b>an</b> + Akk.' });
  add('B1', 'verb_prep', 'Verb + Präp.', { display: 'Sie bittet ihn ___ Hilfe.', grid: true, opts: ['um', 'für', 'an', 'auf'], a: 'um', why: 'bitten <b>um</b> + Akk.' });
  add('B1', 'verb_prep', 'Verb + Präp.', { display: 'Das hängt ___ dem Wetter ab.', grid: true, opts: ['von', 'an', 'auf', 'über'], a: 'von', why: 'abhängen <b>von</b> + Dativ.' });
  add('B1', 'verb_prep', 'Verb + Präp.', { display: 'Ich danke dir ___ deine Hilfe.', grid: true, opts: ['für', 'über', 'um', 'an'], a: 'für', why: 'danken <b>für</b> + Akk.' });
  add('B1', 'verb_prep', 'Verb + Kasus', { display: 'Das Buch gehört ___ Lehrer. <span style="opacity:.6">(der)</span>', grid: true, opts: ['den', 'dem', 'der', 'des'], a: 'dem', why: 'gehören + <b>Dativ</b>: dem Lehrer.' });
  add('B1', 'verb_prep', 'Fragewort (Person)', { display: '___ wartest du? <span style="opacity:.6">(auf meinen Bruder)</span>', grid: true, opts: ['Worauf', 'Auf wen', 'Wofür', 'Auf was'], a: 'Auf wen', why: 'Person + Präposition → <b>Auf wen</b>?' });

  /* ---- B1 — mehr Dativ/Akkusativ-Reihenfolge ---- */
  add('B1', 'da_reihenfolge', 'Dativ vor Akkusativ', { display: 'Sie gibt …', displaySmall: true, opts: ['den Brief der Frau', 'der Frau den Brief'], a: 'der Frau den Brief', why: 'Zwei Nomen: <b>Dativ vor Akkusativ</b>.' });
  add('B1', 'da_reihenfolge', 'Pronomen zuerst', { display: 'Sie gibt …', displaySmall: true, opts: ['der Frau ihn', 'ihn der Frau'], a: 'ihn der Frau', why: 'Akkusativ-<b>Pronomen</b> vor dem Dativ-Nomen.' });
  add('B2', 'da_reihenfolge', 'Zwei Pronomen', { display: 'Er gibt …', displaySmall: true, opts: ['ihm es', 'es ihm'], a: 'es ihm', why: 'Zwei Pronomen: <b>Akkusativ vor Dativ</b> (es ihm).' });

  /* ---- B1/B2 — mehr Relativpronomen ---- */
  add('B1', 'relativ', 'Relativpronomen', { display: 'Das Buch, ___ auf dem Tisch liegt, …', grid: true, opts: ['der', 'die', 'das', 'dem'], a: 'das', why: 'Subjekt, neutrum → <b>das</b> (Nom.).' });
  add('B2', 'relativ', 'Relativpronomen (Gen.)', { display: 'Der Mann, ___ Auto kaputt ist, …', grid: true, opts: ['der', 'dessen', 'den', 'deren'], a: 'dessen', why: 'Besitz, maskulin → Genitiv <b>dessen</b>.' });
  add('B2', 'relativ', 'Relativpronomen (Gen.)', { display: 'Die Frau, ___ Kinder hier spielen, …', grid: true, opts: ['die', 'deren', 'dessen', 'der'], a: 'deren', why: 'Besitz, feminin → Genitiv <b>deren</b>.' });
  add('B2', 'relativ', 'Relativpronomen (Präp.)', { display: 'Der Stuhl, ___ ich sitze, ist alt.', grid: true, opts: ['auf den', 'auf dem', 'auf der', 'an dem'], a: 'auf dem', why: 'sitzen auf + Dativ, maskulin → auf <b>dem</b>.' });
  add('B2', 'relativ', 'Relativpronomen (Pl.)', { display: 'Die Bücher, ___ ich lese, …', grid: true, opts: ['das', 'die', 'denen', 'der'], a: 'die', why: 'Objekt, Plural → <b>die</b> (Akk.).' });

  /* ---- B1 — mehr Konjunktionen ---- */
  add('B1', 'konjunktion', 'sondern vs aber', { display: 'Er kommt nicht heute, ___ morgen.', grid: true, opts: ['aber', 'sondern', 'denn', 'oder'], a: 'sondern', why: 'Nach Verneinung + Korrektur → <b>sondern</b>.' });
  add('B1', 'konjunktion', 'deshalb', { display: 'Es regnet, ___ bleibe ich zu Hause.', grid: true, opts: ['weil', 'deshalb', 'obwohl', 'dass'], a: 'deshalb', why: '<b>deshalb</b> = Adverb (Folge), Verb auf Pos. 2.' });
  add('B1', 'konjunktion', 'wenn (Bedingung)', { display: '___ es regnet, nehme ich den Schirm.', grid: true, opts: ['Als', 'Wenn', 'Ob', 'Dass'], a: 'Wenn', why: 'Bedingung/Wiederholung → <b>wenn</b>.' });
  add('B1', 'konjunktion', 'da (= weil)', { display: '___ ich krank bin, bleibe ich im Bett.', grid: true, opts: ['Da', 'Denn', 'Trotzdem', 'Deshalb'], a: 'Da', why: '<b>Da</b> = weil (Nebensatz, Verb am Ende).' });
  add('B1', 'konjunktion', 'und (Verbposition)', { display: 'Ich koche ___ du deckst den Tisch.', grid: true, opts: ['und', 'dass', 'weil', 'obwohl'], a: 'und', why: '<b>und</b> verbindet zwei Hauptsätze (Verb Pos. 2).' });
  add('B1', 'konjunktion', 'oder', { display: 'Möchtest du Tee ___ Kaffee?', grid: true, opts: ['und', 'oder', 'aber', 'sondern'], a: 'oder', why: 'Alternative → <b>oder</b>.' });

  /* ---- B1/B2 — mehr TE-KA-MO-LO ---- */
  add('B1', 'tekamolo', 'Wortstellung TE-KA-MO-LO', { display: 'Welcher Satz ist richtig?', displaySmall: true, opts: ['Sie geht jeden Tag zu Fuß ins Büro.', 'Sie geht zu Fuß jeden Tag ins Büro.', 'Sie geht ins Büro jeden Tag zu Fuß.'], a: 'Sie geht jeden Tag zu Fuß ins Büro.', why: 'TE (jeden Tag) → MO (zu Fuß) → LO (ins Büro).' });
  add('B2', 'tekamolo', 'Wortstellung TE-KA-MO-LO', { display: 'Welcher Satz ist richtig?', displaySmall: true, opts: ['Er fährt morgen aus Angst langsam nach Hause.', 'Er fährt aus Angst morgen langsam nach Hause.', 'Er fährt nach Hause morgen langsam aus Angst.'], a: 'Er fährt morgen aus Angst langsam nach Hause.', why: 'TE (morgen) → KA (aus Angst) → MO (langsam) → LO (nach Hause).' });

  /* ---- B1/B2 — mehr Adjektivdeklination ---- */
  add('B1', 'adjektiv', 'Adjektivendung', { display: 'Der ___ Mann singt. <span style="opacity:.6">(alt, best. Art.)</span>', grid: true, opts: ['alte', 'alten', 'alter', 'altes'], a: 'alte', why: 'best. Artikel, Nom. maskulin → <b>-e</b>.' });
  add('B1', 'adjektiv', 'Adjektivendung', { display: 'Ich habe eine ___ Idee. <span style="opacity:.6">(gut)</span>', grid: true, opts: ['gute', 'guten', 'gutes', 'guter'], a: 'gute', why: 'unbest. Artikel, Akk. feminin → <b>-e</b>.' });
  add('B2', 'adjektiv', 'Adjektivendung', { display: 'die ___ Häuser <span style="opacity:.6">(alt, best. Art., Plural)</span>', grid: true, opts: ['alte', 'alten', 'altes', 'alter'], a: 'alten', why: 'best. Artikel Plural → <b>-en</b>.' });
  add('B2', 'adjektiv', 'Nullartikel', { display: 'Ich kaufe ___ Brot. <span style="opacity:.6">(frisch)</span>', grid: true, opts: ['frisches', 'frische', 'frischen', 'frischer'], a: 'frisches', why: 'ohne Artikel, Akk. neutrum → <b>-es</b>.' });
  add('B2', 'adjektiv', 'Nullartikel (Plural)', { display: 'Das sind ___ Freunde. <span style="opacity:.6">(gut)</span>', grid: true, opts: ['gute', 'guten', 'gutes', 'guter'], a: 'gute', why: 'ohne Artikel, Nom. Plural → <b>-e</b>.' });
  add('B2', 'adjektiv', 'Nullartikel (Material)', { display: 'ein Ring aus ___ Gold <span style="opacity:.6">(rein, Dativ neutrum)</span>', grid: true, opts: ['reines', 'reinem', 'reine', 'reinen'], a: 'reinem', why: 'ohne Artikel, Dativ neutrum → <b>-em</b>.' });

  /* ---- B2 — mehr n-Deklination ---- */
  add('B2', 'n_dekl', 'n-Deklination', { display: 'Ich kenne den ___. <span style="opacity:.6">(Kollege)</span>', grid: true, opts: ['Kollege', 'Kollegen', 'Kolleges', 'Kollegn'], a: 'Kollegen', why: '-e (Person) → n-Deklination: den <b>Kollegen</b>.' });
  add('B2', 'n_dekl', 'n-Deklination', { display: 'Wir sprechen mit dem ___. <span style="opacity:.6">(Herr)</span>', grid: true, opts: ['Herr', 'Herrn', 'Herren', 'Herrs'], a: 'Herrn', why: 'Herr → Singular <b>Herrn</b> (Plural: Herren).' });
  add('B2', 'n_dekl', 'n-Deklination', { display: 'Das ist die Idee eines ___. <span style="opacity:.6">(Journalist)</span>', grid: true, opts: ['Journalist', 'Journalists', 'Journalisten', 'Journalistes'], a: 'Journalisten', why: '-ist → n-Deklination, Genitiv: eines <b>Journalisten</b>.' });
  add('B2', 'n_dekl', 'n-Deklination', { display: 'Ich sehe den ___ im Zoo. <span style="opacity:.6">(Affe)</span>', grid: true, opts: ['Affe', 'Affen', 'Affes', 'Affn'], a: 'Affen', why: 'Tier auf -e → n-Deklination: den <b>Affen</b>.' });

  /* ---- B2 — mehr Passiv ---- */
  add('B2', 'passiv', 'Passiv Präsens', { display: 'Die Tür ___ geöffnet.', grid: true, opts: ['wird', 'wurde', 'ist', 'hat'], a: 'wird', why: 'Passiv Präsens: werden + P2 → <b>wird</b> geöffnet.' });
  add('B2', 'passiv', 'Passiv Präteritum', { display: 'Das Internet ___ in den 1960ern erfunden.', grid: true, opts: ['wird', 'wurde', 'ist', 'war'], a: 'wurde', why: 'Passiv Präteritum: <b>wurde</b> + P2.' });
  add('B2', 'passiv', 'Passiv Perfekt', { display: 'Der Wagen ist repariert ___.', grid: true, opts: ['geworden', 'worden', 'gewesen', 'werden'], a: 'worden', why: 'Passiv Perfekt: ist + P2 + <b>worden</b>.' });
  add('B2', 'passiv', 'Passiv Plusquam.', { display: 'Das Haus ___ schon verkauft worden.', grid: true, opts: ['hatte', 'war', 'ist', 'wurde'], a: 'war', why: 'Passiv Plusquam.: <b>war</b> + P2 + worden.' });
  add('B2', 'passiv', 'Passiv mit Modalverb', { display: 'Die Aufgabe muss heute ___.', displaySmall: true, opts: ['gelöst werden', 'gelöst worden', 'lösen werden', 'werden gelöst'], a: 'gelöst werden', why: 'Modal + P2 + <b>werden</b>: muss gelöst werden.' });
  add('B2', 'passiv', 'Vorgangs- vs Zustandspassiv', { display: 'Das Fenster ___ (jetzt) geöffnet. <span style="opacity:.6">(Zustand)</span>', grid: true, opts: ['wird', 'ist', 'wurde', 'hat'], a: 'ist', why: 'Zustandspassiv (Resultat): sein + P2 → <b>ist</b> geöffnet.' });

  /* ---- B2 — mehr Plusquamperfekt ---- */
  add('B2', 'plusquam', 'Plusquamperfekt', { display: 'Nachdem er gekommen ___, aßen wir.', grid: true, opts: ['hatte', 'war', 'ist', 'hat'], a: 'war', why: 'kommen → sein: <b>war</b> gekommen (Vorzeitigkeit).' });
  add('B2', 'plusquam', 'Plusquamperfekt', { display: 'Sie war müde, weil sie schlecht ___. <span style="opacity:.6">(schlafen)</span>', displaySmall: true, opts: ['geschlafen hatte', 'geschlafen war', 'schlief', 'geschlafen ist'], a: 'geschlafen hatte', why: 'schlafen → haben: hatte <b>geschlafen</b>.' });

  /* ---- A2/B1 — mehr Komparativ / Superlativ ---- */
  add('B1', 'komparativ', 'Steigerung', { display: 'Ich trinke ___ Tee als Kaffee. <span style="opacity:.6">(gern)</span>', grid: true, opts: ['gerner', 'lieber', 'mehr gern', 'gernster'], a: 'lieber', why: 'gern – <b>lieber</b> – am liebsten (unregelmäßig).' });
  add('B1', 'komparativ', 'Steigerung (Superlativ)', { display: 'Pizza esse ich ___. <span style="opacity:.6">(gern)</span>', grid: true, opts: ['am gernsten', 'am liebsten', 'am mehrsten', 'liebsten'], a: 'am liebsten', why: 'gern – lieber – <b>am liebsten</b>.' });
  add('A2', 'komparativ', 'Steigerung (Umlaut)', { display: 'groß – ___ – am größten', grid: true, opts: ['grosser', 'größer', 'grösser', 'gröser'], a: 'größer', why: 'groß – <b>größer</b> – am größten (Umlaut).' });
  add('B1', 'komparativ', 'so … wie', { display: 'Er ist ___ groß wie sein Bruder.', grid: true, opts: ['als', 'so', 'wie', 'mehr'], a: 'so', why: 'Gleichheit: <b>so</b> … wie (Vergleich mit als → Komparativ).' });
  add('B1', 'komparativ', 'Superlativ (attributiv)', { display: 'Das ist der ___ Tag des Jahres. <span style="opacity:.6">(lang)</span>', grid: true, opts: ['längste', 'längster', 'längsten', 'am längsten'], a: 'längste', why: 'attributiver Superlativ: der <b>längste</b> Tag.' });

  /* ---- B2 — mehr Konsekutiv / Final ---- */
  add('B2', 'konsekutiv', 'sodass', { display: 'Er sprach leise, ___ ich nichts verstand.', grid: true, opts: ['sodass', 'so', 'damit', 'um'], a: 'sodass', why: 'Folge im Nebensatz: <b>sodass</b> + Verb am Ende.' });
  add('B2', 'final', 'damit / um…zu', { display: 'Ich höre Podcasts, ___ meinen Wortschatz zu vergrößern.', grid: true, opts: ['damit', 'um', 'dass', 'weil'], a: 'um', why: 'Gleiches Subjekt → <b>um</b> … zu + Infinitiv.' });
  add('B2', 'final', 'damit / um…zu', { display: 'Ich erkläre es langsam, ___ alle es verstehen.', grid: true, opts: ['um', 'damit', 'dass', 'sodass'], a: 'damit', why: 'Verschiedene Subjekte → <b>damit</b>.' });

  /* ---- B2 — mehr indirekte Fragen ---- */
  add('B2', 'indirekt', 'Indirekte Frage (W)', { display: 'Ich möchte wissen, ___ alt du bist.', grid: true, opts: ['ob', 'wie', 'dass', 'wenn'], a: 'wie', why: 'W-Frage (wie alt) bleibt: …, <b>wie</b> alt du bist.' });
  add('B2', 'indirekt', 'Indirekte Frage (ob)', { display: 'Sie fragt, ___ ich Zeit habe.', grid: true, opts: ['ob', 'dass', 'wenn', 'was'], a: 'ob', why: 'Ja/Nein-Frage → <b>ob</b> (Verb am Ende).' });
  add('B2', 'indirekt', 'Indirekte Frage (warum)', { display: 'Er fragt, ___ ich zu spät komme.', grid: true, opts: ['ob', 'warum', 'dass', 'wenn'], a: 'warum', why: 'W-Frage bleibt: …, <b>warum</b> ich … komme.' });

  /* ---- A2/B1 — mehr Imperativ ---- */
  add('A2', 'imperativ', 'Imperativ (ihr)', { display: '___ bitte leise! <span style="opacity:.6">(sein, ihr)</span>', grid: true, opts: ['Seid', 'Sei', 'Seien', 'Bist'], a: 'Seid', why: 'ihr-Imperativ von sein: <b>Seid</b> leise!' });
  add('B1', 'imperativ', 'Imperativ (du)', { display: '___ keine Angst! <span style="opacity:.6">(haben, du)</span>', grid: true, opts: ['Hab', 'Habe du', 'Hast', 'Haben'], a: 'Hab', why: 'du-Imperativ von haben: <b>Hab</b> keine Angst!' });
  add('B1', 'imperativ', 'Imperativ (du, a→ä?)', { display: '___ vorsichtig! <span style="opacity:.6">(fahren, du)</span>', grid: true, opts: ['Fähr', 'Fahr', 'Fahre du', 'Fahrst'], a: 'Fahr', why: 'a→ä gilt NICHT im Imperativ: <b>Fahr!</b>' });

  /* ---- B1 — mehr zu + Infinitiv ---- */
  add('B1', 'zu_inf', 'zu + Infinitiv', { display: 'Hast du Lust, ins Kino ___?', grid: true, opts: ['gehen', 'zu gehen', 'gehst', 'gegangen'], a: 'zu gehen', why: 'Lust haben + <b>zu</b> + Infinitiv.' });
  add('B1', 'zu_inf', 'zu + Inf. (trennbar)', { display: 'Vergiss nicht, mich ___! <span style="opacity:.6">(anrufen)</span>', grid: true, opts: ['anzurufen', 'zu anrufen', 'anrufen zu', 'anzurufan'], a: 'anzurufen', why: 'Trennbar: zu in der Mitte → <b>anzurufen</b>.' });
  add('B2', 'zu_inf', 'ohne zu', { display: 'Er ging weg, ___ etwas zu sagen.', grid: true, opts: ['ohne', 'um', 'statt', 'damit'], a: 'ohne', why: '<b>ohne</b> … zu + Infinitiv (= er sagte nichts).' });

  /* ---- B1 — mehr Genus nach Suffix ---- */
  add('B1', 'genus', 'Genus nach Endung', { display: 'die Universität, die Aktivität → Endung -tät ist …', displaySmall: true, grid: true, opts: ['der', 'die', 'das'], a: 'die', why: '-tät → immer <b>die</b>.' });
  add('B1', 'genus', 'Genus nach Endung', { display: 'der Motor, der Doktor → Endung -or ist oft …', displaySmall: true, grid: true, opts: ['der', 'die', 'das'], a: 'der', why: '-or → meist <b>der</b>.' });

  /* ---- B1/B2 — Genitiv ---- */
  add('B1', 'genitiv', 'Genitiv (-s/-es)', { display: 'das Auto ___ Vaters', grid: true, opts: ['des', 'der', 'dem', 'den'], a: 'des', why: 'Genitiv maskulin: <b>des</b> Vaters.' });
  add('B1', 'genitiv', 'Genitiv (-s/-es)', { display: 'der Titel des ___. <span style="opacity:.6">(Buch)</span>', grid: true, opts: ['Buch', 'Buchs', 'Buches', 'Bucher'], a: 'Buches', why: 'einsilbig oft +es: des <b>Buches</b>.' });
  add('B2', 'genitiv', 'Genitiv (feminin)', { display: 'die Farbe ___ Blume', grid: true, opts: ['des', 'der', 'dem', 'den'], a: 'der', why: 'Genitiv feminin: <b>der</b> Blume.' });
  add('B2', 'genitiv', 'Genitivpräposition', { display: '___ des Regens bleiben wir zu Hause.', grid: true, opts: ['Wegen', 'Trotz', 'Während', 'Wegens'], a: 'Wegen', why: '<b>wegen</b> + Genitiv (Grund): wegen des Regens.' });

  /* ---- B2 — Konjunktiv II ---- */
  add('B2', 'konjunktiv2', 'höfliche Bitte', { display: '___ Sie mir bitte helfen?', grid: true, opts: ['Können', 'Könnten', 'Konnten', 'Kannten'], a: 'Könnten', why: 'Höfliche Bitte: Konjunktiv II <b>Könnten</b> Sie …?' });
  add('B2', 'konjunktiv2', 'höfliche Bitte', { display: '___ du mir das Salz geben?', grid: true, opts: ['Wurdest', 'Würdest', 'Wirst', 'Werdest'], a: 'Würdest', why: 'Höflich: <b>Würdest</b> du … (würde + Infinitiv).' });
  add('B2', 'konjunktiv2', 'irreal (sein)', { display: 'Wenn ich reich ___, würde ich reisen.', grid: true, opts: ['war', 'wäre', 'bin', 'würde'], a: 'wäre', why: 'Irrealer Wunsch: ich <b>wäre</b> (Konjunktiv II von sein).' });
  add('B2', 'konjunktiv2', 'irreal (haben)', { display: 'Wenn ich Zeit ___, käme ich mit.', grid: true, opts: ['hatte', 'hätte', 'habe', 'würde'], a: 'hätte', why: 'Irreal: ich <b>hätte</b> (Konjunktiv II von haben).' });
  add('B2', 'konjunktiv2', 'irreal (würde)', { display: 'An deiner Stelle ___ ich mehr lernen.', grid: true, opts: ['werde', 'würde', 'wurde', 'wäre'], a: 'würde', why: 'Irreal: ich <b>würde</b> … lernen (würde + Infinitiv).' });
  add('C1', 'konjunktiv2', 'Vergangenheit', { display: 'Wenn ich Zeit gehabt ___, wäre ich gekommen.', grid: true, opts: ['hätte', 'wäre', 'habe', 'würde'], a: 'hätte', why: 'Irreal Vergangenheit: <b>hätte</b> + P2 (hätte gehabt).' });

  /* ---- B2 — Konnektoren ---- */
  add('B2', 'konnektor', 'entweder … oder', { display: 'Wir fahren ___ nach Wien oder nach Graz.', grid: true, opts: ['entweder', 'sowohl', 'weder', 'nicht nur'], a: 'entweder', why: '<b>entweder</b> … oder (Alternative).' });
  add('B2', 'konnektor', 'weder … noch', { display: 'Er trinkt ___ Kaffee noch Tee.', grid: true, opts: ['entweder', 'weder', 'sowohl', 'nicht nur'], a: 'weder', why: '<b>weder</b> … noch (doppelte Verneinung).' });
  add('B2', 'konnektor', 'nicht nur … sondern auch', { display: 'Sie ist nicht nur klug, ___ auch fleißig.', grid: true, opts: ['aber', 'sondern', 'oder', 'denn'], a: 'sondern', why: 'nicht nur …, <b>sondern</b> auch.' });
  add('B2', 'konnektor', 'sowohl … als auch', { display: '___ er als auch sie kommen mit.', grid: true, opts: ['Sowohl', 'Weder', 'Entweder', 'Nicht nur'], a: 'Sowohl', why: '<b>Sowohl</b> … als auch (beide).' });
  add('B2', 'konnektor', 'je … desto', { display: 'Je mehr ich lerne, ___ besser verstehe ich.', grid: true, opts: ['desto', 'umso mehr', 'so', 'als'], a: 'desto', why: 'Je …, <b>desto</b> + Komparativ (Verb am Ende, dann Verb Pos. … nach desto).' });
  add('B2', 'konnektor', 'zwar … aber', { display: 'Das Auto ist ___ teuer, aber sehr gut.', grid: true, opts: ['zwar', 'sowohl', 'weder', 'je'], a: 'zwar', why: '<b>zwar</b> … aber (Einräumung).' });

  /* ---- C1/C2 — Partizipialattribute ---- */
  add('C1', 'partizipattr', 'Partizip I (aktiv)', { display: 'der ___ Student <span style="opacity:.6">(lesen, gerade)</span>', grid: true, opts: ['gelesene', 'lesende', 'gelesen', 'lesen'], a: 'lesende', why: 'Partizip I (Infinitiv+d): der <b>lesende</b> Student (= der liest).' });
  add('C1', 'partizipattr', 'Partizip II (passiv)', { display: 'das ___ Essen <span style="opacity:.6">(kochen, fertig)</span>', grid: true, opts: ['kochende', 'gekochte', 'kochend', 'gekocht'], a: 'gekochte', why: 'Partizip II als Attribut: das <b>gekochte</b> Essen (= wurde gekocht).' });
  add('C1', 'partizipattr', 'Partizip I', { display: 'das ___ Kind <span style="opacity:.6">(weinen)</span>', grid: true, opts: ['geweinte', 'weinende', 'geweint', 'weinend'], a: 'weinende', why: 'Partizip I + Endung: das <b>weinende</b> Kind.' });
  add('C1', 'partizipattr', 'Partizip II', { display: 'die ___ Tür <span style="opacity:.6">(schließen)</span>', grid: true, opts: ['schließende', 'geschlossene', 'geschlossen', 'schließend'], a: 'geschlossene', why: 'Partizip II als Attribut: die <b>geschlossene</b> Tür.' });

  /* ---- C1/C2 — Passiv-Ersatzformen ---- */
  add('C1', 'passiversatz', 'sich lassen', { display: 'Das Problem ___ sich leicht lösen.', grid: true, opts: ['lässt', 'wird', 'ist', 'kann'], a: 'lässt', why: 'sich lassen = kann … werden: <b>lässt</b> sich lösen.' });
  add('C1', 'passiversatz', 'sein + zu + Inf.', { display: 'Die Aufgabe ist leicht zu ___.', grid: true, opts: ['lösen', 'gelöst', 'lösend', 'löst'], a: 'lösen', why: 'sein + zu + Infinitiv = muss/kann … werden: zu <b>lösen</b>.' });
  add('C1', 'passiversatz', 'Adjektiv auf -bar', { display: 'Das Problem ist leicht ___. <span style="opacity:.6">(lösen)</span>', grid: true, opts: ['lösbar', 'gelöst', 'lösend', 'lösung'], a: 'lösbar', why: '-bar = kann … werden: <b>lösbar</b> (= kann gelöst werden).' });
  add('C2', 'passiversatz', 'man (Ersatz)', { display: 'Aktiver Ersatz für „Hier wird Deutsch gesprochen": Hier ___ man Deutsch.', displaySmall: true, grid: true, opts: ['spricht', 'gesprochen', 'wird', 'sprechen'], a: 'spricht', why: 'Passiv-Ersatz mit <b>man</b>: Hier spricht man Deutsch.' });

  /* ---- C1/C2 — feine Bedeutungsunterschiede ---- */
  add('B2', 'bedeutung', 'legen vs liegen', { display: 'Ich ___ das Buch auf den Tisch.', grid: true, opts: ['liege', 'lege', 'liegt', 'gelegen'], a: 'lege', why: '<b>legen</b> (Akk., Wohin?) = etwas hinlegen; liegen = Position.' });
  add('B2', 'bedeutung', 'liegen vs legen', { display: 'Das Buch ___ auf dem Tisch.', grid: true, opts: ['legt', 'liegt', 'lege', 'gelegt'], a: 'liegt', why: '<b>liegen</b> (Dativ, Wo?) = Position; legen = Handlung.' });
  add('B2', 'bedeutung', 'stellen vs stehen', { display: 'Ich ___ die Flasche in den Kühlschrank.', grid: true, opts: ['stehe', 'stelle', 'steht', 'gestanden'], a: 'stelle', why: '<b>stellen</b> (Akk., Wohin?) = hinstellen; stehen = Position.' });
  add('B2', 'bedeutung', 'stehen vs stellen', { display: 'Die Flasche ___ im Kühlschrank.', grid: true, opts: ['stellt', 'steht', 'stelle', 'gestellt'], a: 'steht', why: '<b>stehen</b> (Dativ, Wo?) = Position; stellen = Handlung.' });
  add('B2', 'bedeutung', 'kennen vs wissen', { display: 'Ich ___ diese Stadt sehr gut.', grid: true, opts: ['weiß', 'kenne', 'kennt', 'wisse'], a: 'kenne', why: '<b>kennen</b> + Nomen (vertraut sein): kenne die Stadt.' });
  add('B2', 'bedeutung', 'wissen vs kennen', { display: 'Ich ___ nicht, wo er wohnt.', grid: true, opts: ['kenne', 'weiß', 'kennt', 'wisse'], a: 'weiß', why: '<b>wissen</b> + Nebensatz/Fakt: ich weiß nicht, wo …' });

  /* ---- C1/C2 — mehr Redewendungen & Wortschatz ---- */
  add('C1', 'wortschatz', 'Person', { display: 'Ein „Pechvogel" ist eine Person, die …', displaySmall: true, opts: ['oft Pech hat', 'gern Vögel beobachtet', 'immer Glück hat', 'viel pfeift'], a: 'oft Pech hat', why: 'der <b>Pechvogel</b> = jemand mit viel Pech (Gegenteil: Glückspilz).' });
  add('C1', 'wortschatz', 'Bedeutung', { display: 'das „Kopfkino" bedeutet …', displaySmall: true, opts: ['lebhafte Vorstellungen im Kopf', 'ein echtes Kino', 'Kopfschmerzen', 'ein Filmgenre'], a: 'lebhafte Vorstellungen im Kopf', why: 'das <b>Kopfkino</b> = man stellt sich etwas lebhaft vor.' });
  add('C1', 'wortschatz', 'Person', { display: 'Eine „Naschkatze" ist jemand, der gern …', displaySmall: true, opts: ['Süßes isst', 'Katzen hat', 'schläft', 'streitet'], a: 'Süßes isst', why: 'die <b>Naschkatze</b> = jemand, der gern Süßigkeiten nascht.' });
  add('C2', 'wortschatz', 'Bedeutung', { display: 'eine „Schnapsidee" ist …', displaySmall: true, opts: ['eine sehr unsinnige Idee', 'ein Rezept für Schnaps', 'eine gute Idee', 'ein Getränk'], a: 'eine sehr unsinnige Idee', why: 'die <b>Schnapsidee</b> = eine völlig verrückte/unsinnige Idee.' });
  add('C2', 'idiom', 'Redewendung', { display: '„Hals- und Beinbruch" wünscht man jemandem, …', displaySmall: true, opts: ['der etwas Wichtiges vor sich hat', 'der sich verletzt hat', 'der schläft', 'der isst'], a: 'der etwas Wichtiges vor sich hat', why: '<b>Hals- und Beinbruch</b> = viel Glück (ironische Wunschformel).' });
  add('C2', 'idiom', 'Redewendung', { display: '„Der Ton macht die Musik" bedeutet: Wichtig ist, …', displaySmall: true, opts: ['WIE man etwas sagt', 'WAS man sagt', 'wie laut man ist', 'welches Instrument'], a: 'WIE man etwas sagt', why: '<b>Der Ton macht die Musik</b> = die Art und Weise zählt.' });

  /* ============================================================
   *  GENERIERTE AUFGABEN — aus kompakten, korrekten Datentabellen.
   *  So bekommt jede Stufe sehr viele Items. Distraktoren werden
   *  rotiert, damit die richtige Antwort nicht immer vorne steht.
   * ============================================================ */
  var _ai = 0;
  function rot(a, d) { var o = d.slice(); var pos = _ai++ % (o.length + 1); o.splice(pos, 0, a); return o; }
  function gen(lvl, topic, label, display, a, dist, why, small) {
    var def = { display: display, opts: rot(a, dist), a: a, why: why };
    if (small) def.displaySmall = true;
    add(lvl, topic, label, def);
  }

  /* ---- Artikel: Nomen → der/die/das (art() baut die Optionen) ---- */
  var _seenArt = {};
  var ART = {
    A1: { der: ['Tisch', 'Stuhl', 'Schrank', 'Teller', 'Apfel', 'Kaffee', 'Saft', 'Computer', 'Fernseher', 'Schlüssel', 'Bahnhof', 'Garten', 'Mann', 'Sohn', 'Bruder', 'Freund', 'Lehrer', 'Arzt', 'Zug', 'Bus', 'Ball', 'Berg', 'Sommer', 'Winter', 'Morgen', 'Abend', 'Stift', 'Kühlschrank'],
          die: ['Lampe', 'Tür', 'Wand', 'Küche', 'Tasche', 'Flasche', 'Tasse', 'Gabel', 'Banane', 'Milch', 'Butter', 'Frau', 'Tochter', 'Schwester', 'Freundin', 'Lehrerin', 'Schule', 'Straße', 'Stadt', 'Uhr', 'Woche', 'Stunde', 'Nacht', 'Sonne', 'Blume', 'Hand', 'Nase', 'Zeit'],
          das: ['Buch', 'Heft', 'Fenster', 'Bett', 'Sofa', 'Auto', 'Fahrrad', 'Haus', 'Zimmer', 'Bad', 'Kind', 'Baby', 'Wasser', 'Bier', 'Ei', 'Handy', 'Telefon', 'Geld', 'Jahr', 'Kino', 'Theater', 'Hotel', 'Auge', 'Ohr', 'Wochenende', 'Restaurant'] },
    A2: { der: ['Beruf', 'Termin', 'Urlaub', 'Flughafen', 'Koffer', 'Pass', 'Vertrag', 'Kollege', 'Chef', 'Nachbar', 'Wecker', 'Regen', 'Schnee', 'Wind', 'Markt', 'Preis', 'Kuchen', 'Käse', 'Wein', 'Brief'],
          die: ['Arbeit', 'Reise', 'Wohnung', 'Miete', 'Rechnung', 'Gesundheit', 'Krankheit', 'Apotheke', 'Bäckerei', 'Zeitung', 'Sprache', 'Antwort', 'Frage', 'Familie', 'Party', 'Jacke', 'Hose', 'Brille', 'Natur', 'Karte'],
          das: ['Büro', 'Krankenhaus', 'Rezept', 'Gehalt', 'Praktikum', 'Formular', 'Paket', 'Wetter', 'Gespräch', 'Frühstück', 'Mittagessen', 'Abendessen', 'Ticket', 'Gepäck', 'Hemd', 'Kleid', 'Problem', 'Beispiel', 'Ergebnis', 'Konto'] },
    B1: { der: ['Vorteil', 'Nachteil', 'Unterschied', 'Vorschlag', 'Wunsch', 'Zweck', 'Erfolg', 'Versuch', 'Eindruck', 'Einfluss', 'Grund', 'Zusammenhang', 'Bereich', 'Vortrag', 'Antrag', 'Verkehr', 'Strom', 'Müll', 'Bürger', 'Anfang'],
          die: ['Umwelt', 'Gesellschaft', 'Entwicklung', 'Meinung', 'Erfahrung', 'Lösung', 'Bedeutung', 'Möglichkeit', 'Verantwortung', 'Beziehung', 'Regierung', 'Bildung', 'Forschung', 'Werbung', 'Mehrheit', 'Pflicht', 'Gewohnheit', 'Absicht', 'Folge', 'Wirtschaft'],
          das: ['Ziel', 'Mittel', 'Recht', 'Gesetz', 'Verhalten', 'Ereignis', 'Verhältnis', 'Bedürfnis', 'Wachstum', 'Wissen', 'Vertrauen', 'Gefühl', 'Erlebnis', 'Verständnis', 'Publikum', 'System', 'Niveau', 'Interesse', 'Gehirn', 'Gebäude'] },
    B2: { der: ['Aspekt', 'Faktor', 'Begriff', 'Standpunkt', 'Konflikt', 'Fortschritt', 'Rückgang', 'Anstieg', 'Beitrag', 'Verzicht', 'Reichtum', 'Anspruch', 'Mangel', 'Überblick', 'Wandel', 'Ansatz', 'Zweifel', 'Nachweis', 'Hinweis', 'Schwerpunkt'],
          die: ['Auswirkung', 'Voraussetzung', 'Herausforderung', 'Maßnahme', 'Tatsache', 'Ursache', 'Wirkung', 'Hinsicht', 'These', 'Quelle', 'Debatte', 'Studie', 'Statistik', 'Tendenz', 'Grundlage', 'Annahme', 'Behauptung', 'Vielfalt', 'Nachhaltigkeit', 'Sicht'],
          das: ['Phänomen', 'Konzept', 'Kriterium', 'Verfahren', 'Vorhaben', 'Risiko', 'Ausmaß', 'Bewusstsein', 'Engagement', 'Defizit', 'Potenzial', 'Argument', 'Merkmal', 'Gegenteil', 'Vorbild', 'Missverständnis', 'Zugeständnis', 'Bündnis', 'Gleichgewicht', 'Vorurteil'] },
    C1: { der: ['Diskurs', 'Konsens', 'Widerspruch', 'Sachverhalt', 'Gegensatz', 'Maßstab', 'Spielraum', 'Zuwachs', 'Niedergang', 'Wohlstand', 'Stellenwert', 'Umgang', 'Gesichtspunkt', 'Verlauf', 'Befund', 'Einwand', 'Antrieb', 'Schwund'],
          die: ['Wahrnehmung', 'Auseinandersetzung', 'Errungenschaft', 'Beeinträchtigung', 'Gewichtung', 'Zuständigkeit', 'Verflechtung', 'Resonanz', 'Tragweite', 'Glaubwürdigkeit', 'Nachfrage', 'Befürchtung', 'Erkenntnis', 'Wechselwirkung', 'Voreingenommenheit', 'Triebkraft', 'Sichtweise', 'Zumutung'],
          das: ['Spektrum', 'Gefüge', 'Zusammenspiel', 'Dilemma', 'Selbstverständnis', 'Spannungsfeld', 'Anliegen', 'Unterfangen', 'Bestreben', 'Ansehen', 'Vermögen', 'Postulat', 'Wechselspiel', 'Gleichnis', 'Gepräge', 'Unvermögen', 'Paradoxon', 'Vorhaben'] },
    C2: { der: ['Inbegriff', 'Zeitgeist', 'Trugschluss', 'Sachzwang', 'Wesenszug', 'Gleichmut', 'Überdruss', 'Zwiespalt', 'Argwohn', 'Beifall', 'Hochmut', 'Werdegang', 'Nachhall', 'Zwist', 'Unmut', 'Verdruss', 'Gemeinplatz', 'Brückenschlag'],
          die: ['Zwickmühle', 'Beharrlichkeit', 'Gelassenheit', 'Zerrissenheit', 'Gleichgültigkeit', 'Vergänglichkeit', 'Eigenart', 'Zuversicht', 'Befindlichkeit', 'Beliebigkeit', 'Schwerfälligkeit', 'Unverfrorenheit', 'Gemengelage', 'Wesensart', 'Tragfähigkeit', 'Zwangsläufigkeit', 'Unabdingbarkeit', 'Gepflogenheit'],
          das: ['Pendant', 'Politikum', 'Spezifikum', 'Unbehagen', 'Gebaren', 'Sinnbild', 'Vermächtnis', 'Ärgernis', 'Bollwerk', 'Einvernehmen', 'Zerwürfnis', 'Sammelsurium', 'Allerlei', 'Brimborium', 'Unterfangen', 'Gleichnis', 'Vorhaben', 'Spektrum'] }
  };
  Object.keys(ART).forEach(function (lvl) {
    ['der', 'die', 'das'].forEach(function (g) {
      ART[lvl][g].forEach(function (n) {
        var k = lvl + '|' + n;
        if (_seenArt[k]) return;
        _seenArt[k] = 1;
        art(lvl, n, g);
      });
    });
  });

  /* ---- Plural ---- */
  [
    ['A1', 'das Auto', 'Autos', ['Auten', 'Autoer', 'Aute']],
    ['A1', 'das Kind', 'Kinder', ['Kinde', 'Kinds', 'Kindern']],
    ['A1', 'der Mann', 'Männer', ['Manner', 'Männen', 'Manns']],
    ['A1', 'die Frau', 'Frauen', ['Fraus', 'Frauern', 'Fräue']],
    ['A1', 'das Buch', 'Bücher', ['Buchs', 'Buche', 'Buchen']],
    ['A1', 'der Apfel', 'Äpfel', ['Apfeln', 'Apfels', 'Äpfels']],
    ['A1', 'das Haus', 'Häuser', ['Hause', 'Hausen', 'Häuse']],
    ['A1', 'die Stadt', 'Städte', ['Stadten', 'Stadts', 'Städter']],
    ['A2', 'der Tisch', 'Tische', ['Tischer', 'Tischen', 'Tisches']],
    ['A2', 'die Blume', 'Blumen', ['Blumes', 'Blümer', 'Blume']],
    ['A2', 'das Bild', 'Bilder', ['Bilde', 'Bilds', 'Bilden']],
    ['A2', 'der Stuhl', 'Stühle', ['Stuhle', 'Stühlen', 'Stuhls']],
    ['A2', 'die Hand', 'Hände', ['Handen', 'Hands', 'Händer']],
    ['A2', 'das Wort', 'Wörter', ['Worts', 'Worte', 'Worten']],
    ['A2', 'der Garten', 'Gärten', ['Gartens', 'Gartenen', 'Gärtens']],
    ['A2', 'die Mutter', 'Mütter', ['Mutters', 'Mutteren', 'Müttern']],
    ['B1', 'das Thema', 'Themen', ['Themas', 'Themaer', 'Themae']],
    ['B1', 'der Vortrag', 'Vorträge', ['Vortrags', 'Vortragen', 'Vorträgen']],
    ['B1', 'die Universität', 'Universitäten', ['Universität', 'Universitäte', 'Universitäts']],
    ['B1', 'das Mitglied', 'Mitglieder', ['Mitglieds', 'Mitgliede', 'Mitglieden']],
    ['B1', 'der Grund', 'Gründe', ['Grunds', 'Grunde', 'Gründen']],
    ['B1', 'die Kenntnis', 'Kenntnisse', ['Kenntnis', 'Kenntnise', 'Kenntnissen']],
    ['B2', 'das Praktikum', 'Praktika', ['Praktikums', 'Praktiken', 'Praktikume']],
    ['B2', 'das Visum', 'Visa', ['Visums', 'Visen', 'Visume']],
    ['B2', 'der Atlas', 'Atlanten', ['Atlasse', 'Atlas', 'Atlase']],
    ['B2', 'die Krise', 'Krisen', ['Krises', 'Krisern', 'Krise']],
    ['B2', 'das Material', 'Materialien', ['Materiale', 'Materials', 'Materialen']]
  ].forEach(function (r) { gen(r[0], 'plural', 'Plural', r[1] + ' → Plural: die …', r[2], r[3], '<b>die ' + r[2] + '</b> (Plural von ' + r[1] + ').'); });

  /* ---- Partizip II (Perfekt mit haben/sein) ---- */
  [
    ['A2', 'machen', 'habe', 'gemacht', ['gemachen', 'gemakt', 'machte']],
    ['A2', 'kaufen', 'habe', 'gekauft', ['kaufte', 'gekaufen', 'kauft']],
    ['A2', 'spielen', 'habe', 'gespielt', ['spielte', 'gespielen', 'gespield']],
    ['A2', 'gehen', 'bin', 'gegangen', ['gegeht', 'gegangt', 'geht']],
    ['A2', 'kommen', 'bin', 'gekommen', ['gekommt', 'gekamen', 'kommt']],
    ['A2', 'fahren', 'bin', 'gefahren', ['gefahrt', 'gefuhren', 'fahrt']],
    ['A2', 'essen', 'habe', 'gegessen', ['geesst', 'geessen', 'isst']],
    ['A2', 'trinken', 'habe', 'getrunken', ['getrinkt', 'getrankt', 'trinkt']],
    ['B1', 'nehmen', 'habe', 'genommen', ['genehmt', 'genahmen', 'nimmt']],
    ['B1', 'geben', 'habe', 'gegeben', ['gegebt', 'gegoben', 'gibt']],
    ['B1', 'finden', 'habe', 'gefunden', ['gefindet', 'gefanden', 'findet']],
    ['B1', 'bleiben', 'bin', 'geblieben', ['gebleibt', 'gebluben', 'bleibt']],
    ['B1', 'helfen', 'habe', 'geholfen', ['gehelft', 'gehalfen', 'hilft']],
    ['B1', 'sprechen', 'habe', 'gesprochen', ['gesprecht', 'gesprachen', 'spricht']],
    ['B1', 'schreiben', 'habe', 'geschrieben', ['geschreibt', 'geschrioben', 'schreibt']],
    ['B1', 'werden', 'bin', 'geworden', ['gewerdet', 'gewordet', 'wird']],
    ['B2', 'gelingen', 'ist', 'gelungen', ['gelingt', 'gegelingen', 'gelangen']],
    ['B2', 'verlieren', 'habe', 'verloren', ['verliert', 'verlort', 'verlieren']],
    ['B2', 'beginnen', 'habe', 'begonnen', ['beginnt', 'begannen', 'beginnen']],
    ['B2', 'schließen', 'habe', 'geschlossen', ['schließt', 'geschließen', 'geschloßt']],
    ['B2', 'wachsen', 'bin', 'gewachsen', ['wächst', 'gewachst', 'gewuchsen']],
    ['B2', 'gelten', 'hat', 'gegolten', ['gilt', 'gegeltet', 'gegalten']]
  ].forEach(function (r) { gen(r[0], 'partizip', 'Partizip II', r[1] + ' → ich ' + r[2] + ' …', r[3], r[4], r[1] + ' → ich ' + r[2] + ' <b>' + r[3] + '</b>.'); });

  /* ---- Präteritum (er-Form) ---- */
  [
    ['B1', 'sehen', 'sah', ['sahte', 'sehte', 'sieh']],
    ['B1', 'geben', 'gab', ['gabte', 'geb', 'gibte']],
    ['B1', 'fahren', 'fuhr', ['fahrte', 'fuhrte', 'fahr']],
    ['B1', 'lesen', 'las', ['laste', 'lese', 'list']],
    ['B1', 'sprechen', 'sprach', ['sprachte', 'sprich', 'sproch']],
    ['B1', 'schlafen', 'schlief', ['schlafte', 'schlaf', 'schlofte']],
    ['B2', 'denken', 'dachte', ['denkte', 'dacht', 'dünkte']],
    ['B2', 'ziehen', 'zog', ['ziehte', 'zoch', 'zugte']],
    ['B2', 'bitten', 'bat', ['bittete', 'bot', 'batte']],
    ['B2', 'liegen', 'lag', ['liegte', 'log', 'legte']],
    ['B2', 'rufen', 'rief', ['rufte', 'ruf', 'riefte']],
    ['B2', 'schließen', 'schloss', ['schließte', 'schluss', 'schlosste']],
    ['C1', 'erwägen', 'erwog', ['erwägte', 'erwagte', 'erwiegte']],
    ['C1', 'gedeihen', 'gedieh', ['gedeihte', 'gedeite', 'gediehte']],
    ['C1', 'schwören', 'schwor', ['schwörte', 'schwurte', 'schworte']],
    ['C1', 'meiden', 'mied', ['meidete', 'miedte', 'mod']]
  ].forEach(function (r) { gen(r[0], 'praeteritum', 'Präteritum', r[1] + ' → er ___ (Präteritum)', r[2], r[3], r[1] + ' – <b>' + r[2] + '</b> – (Partizip).'); });

  /* ---- Komparativ ---- */
  [
    ['A2', 'gut', 'besser', ['guter', 'gutter', 'besserer']],
    ['A2', 'viel', 'mehr', ['vieler', 'mehrer', 'vielmehr']],
    ['A2', 'hoch', 'höher', ['hocher', 'höcher', 'hoher']],
    ['A2', 'nah', 'näher', ['naher', 'nähr', 'neher']],
    ['A2', 'gern', 'lieber', ['gerner', 'lieberer', 'mehr gern']],
    ['A2', 'groß', 'größer', ['grosser', 'größerer', 'gröber']],
    ['B1', 'alt', 'älter', ['alter', 'älterer', 'elter']],
    ['B1', 'kalt', 'kälter', ['kalter', 'kältester', 'kelter']],
    ['B1', 'warm', 'wärmer', ['warmer', 'wärmster', 'wermer']],
    ['B1', 'jung', 'jünger', ['junger', 'jüngster', 'jinger']],
    ['B1', 'kurz', 'kürzer', ['kurzer', 'kürzester', 'korzer']],
    ['B1', 'klug', 'klüger', ['kluger', 'klügster', 'kliger']]
  ].forEach(function (r) { gen(r[0], 'komparativ', 'Komparativ', r[1] + ' → Komparativ?', r[2], r[3], r[1] + ' → <b>' + r[2] + '</b>.'); });

  /* ---- Verb + Präposition (feste Rektion) ---- */
  [
    ['B1', 'warten', 'auf', ['für', 'an', 'über'], 'Ich warte ___ den Bus.'],
    ['B1', 'sich freuen', 'auf', ['für', 'an', 'zu'], 'Ich freue mich ___ das Wochenende. (Vorfreude)'],
    ['B1', 'denken', 'an', ['auf', 'für', 'zu'], 'Ich denke oft ___ dich.'],
    ['B1', 'sich interessieren', 'für', ['auf', 'über', 'zu'], 'Sie interessiert sich ___ Kunst.'],
    ['B1', 'bitten', 'um', ['für', 'nach', 'an'], 'Er bittet ___ Hilfe.'],
    ['B2', 'sich erinnern', 'an', ['auf', 'über', 'von'], 'Ich erinnere mich ___ den Tag.'],
    ['B2', 'teilnehmen', 'an', ['bei', 'auf', 'in'], 'Wir nehmen ___ dem Kurs teil.'],
    ['B2', 'sich bewerben', 'um', ['für', 'nach', 'in'], 'Er bewirbt sich ___ die Stelle.'],
    ['B2', 'bestehen', 'aus', ['von', 'in', 'bei'], 'Das Team besteht ___ fünf Leuten.'],
    ['B2', 'bestehen', 'auf', ['in', 'an', 'über'], 'Sie besteht ___ ihrem Recht. (beharren)'],
    ['B2', 'verzichten', 'auf', ['von', 'über', 'an'], 'Ich verzichte ___ Zucker.'],
    ['C1', 'sich beziehen', 'auf', ['an', 'über', 'zu'], 'Der Text bezieht sich ___ eine Studie.'],
    ['C1', 'gelten', 'als', ['für', 'wie', 'zu'], 'Er gilt ___ Experte.'],
    ['C1', 'zweifeln', 'an', ['über', 'auf', 'von'], 'Ich zweifle ___ seiner Aussage.'],
    ['C1', 'sich sehnen', 'nach', ['auf', 'für', 'an'], 'Sie sehnt sich ___ Ruhe.']
  ].forEach(function (r) { gen(r[0], 'verb_prep', 'Verb + Präposition', r[4] + ' <span style="opacity:.6">(Präposition?)</span>', r[2], r[3], '<b>' + r[1] + ' ' + r[2] + '</b> — feste Präposition.', false); });

  /* ---- Synonyme (Wortschatz C1/C2) ---- */
  [
    ['C1', 'beginnen', 'anfangen', ['aufhören', 'beenden', 'schließen']],
    ['C1', 'wichtig', 'bedeutend', ['unwichtig', 'gering', 'belanglos']],
    ['C1', 'schnell', 'rasch', ['langsam', 'träge', 'gemächlich']],
    ['C1', 'die Meinung', 'die Ansicht', ['die Frage', 'die Antwort', 'die Tatsache']],
    ['C1', 'das Problem', 'die Schwierigkeit', ['die Lösung', 'der Vorteil', 'der Erfolg']],
    ['C1', 'erlauben', 'gestatten', ['verbieten', 'verhindern', 'ablehnen']],
    ['C1', 'vermuten', 'annehmen', ['wissen', 'beweisen', 'leugnen']],
    ['C1', 'nutzen', 'verwenden', ['verschwenden', 'wegwerfen', 'sparen']],
    ['C2', 'hartnäckig', 'beharrlich', ['nachlässig', 'gleichgültig', 'sorglos']],
    ['C2', 'zunehmen', 'ansteigen', ['sinken', 'fallen', 'abnehmen']],
    ['C2', 'erörtern', 'diskutieren', ['verschweigen', 'ignorieren', 'beenden']],
    ['C2', 'offensichtlich', 'augenscheinlich', ['versteckt', 'unklar', 'fraglich']],
    ['C2', 'bewältigen', 'meistern', ['scheitern', 'aufgeben', 'versagen']],
    ['C2', 'befürworten', 'unterstützen', ['ablehnen', 'kritisieren', 'verhindern']],
    ['C2', 'geringfügig', 'unbedeutend', ['enorm', 'gewaltig', 'erheblich']],
    ['C2', 'unumgänglich', 'unvermeidlich', ['optional', 'freiwillig', 'vermeidbar']]
  ].forEach(function (r) { gen(r[0], 'synonym', 'Synonym', 'Welches Wort bedeutet dasselbe wie „' + r[1] + '"?', r[2], r[3], '<b>' + r[1] + ' ≈ ' + r[2] + '</b>.', true); });

  /* ---- expose ---- */
  window.EXBANK = Q;
  window.EXBANK_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  window.buildMarathon = function (n, level) {
    var pool = level ? Q.filter(function (x) { return x.lvl === level; }) : Q;
    return shuffle(pool).slice(0, n || 40);
  };
  window.buildLevelQuiz = function (level, n) { return window.buildMarathon(n || 12, level); };
  window.exbankCount = function (level) { return (level ? Q.filter(function (x) { return x.lvl === level; }) : Q).length; };
})();
