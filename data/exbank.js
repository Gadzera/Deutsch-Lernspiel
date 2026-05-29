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
  add('A1', 'praesens', 'Präsens', { display: 'Du ___ Deutsch. <span style="opacity:.6">(sprechen)</span>', grid: true, opts: ['sprichst', 'sprechst', 'spricht', 'sprechst'], a: 'sprichst', why: 'e→i Wechsel + du-Endung -st: <b>sprichst</b>.' });
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
