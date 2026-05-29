/* Deutsch-Lernspiel — Beute-/Sammelsystem ("loot").
 * Klassisches <script> im Browser, läuft im globalen Scope (kein Build-Step).
 * Alles wird auf window gelegt, damit der React-Bundle dagegen verdrahten kann.
 *
 *   window.LOOT_RARITY   -> Seltenheitsstufen (common..legendary) mit label/color/weight
 *   window.CHARACTERS    -> 8 wählbare Lern-Maskottchen
 *   window.LOOT          -> 100 Sammelobjekte (id/name/emoji/rarity/flavor)
 *   window.rollLoot()    -> ein zufälliges Item, gewichtet nach Seltenheit
 *   window.lootById(id)  -> passendes Item oder null
 *   window.LOOT_COUNT    -> Anzahl der Items (= 100)
 */
(function () {
  'use strict';

  /* ===================== 1) Seltenheitsstufen ===================== */
  var LOOT_RARITY = {
    common:    { label: 'Gewöhnlich',   color: '#9aa0a6', weight: 60 },
    uncommon:  { label: 'Ungewöhnlich', color: '#4a9d6a', weight: 25 },
    rare:      { label: 'Selten',       color: '#3b82c4', weight: 10 },
    epic:      { label: 'Episch',       color: '#9b59b6', weight: 4 },
    legendary: { label: 'Legendär',     color: '#d4a017', weight: 1 }
  };

  /* ===================== 2) Wählbare Charaktere ===================== */
  var CHARACTERS = [
    { id: 'bruno-baer',    name: 'Bruno der Bücherbär',  emoji: '🐻', desc: 'Brummt Vokabeln, bis sie sitzen.' },
    { id: 'evi-eule',      name: 'Evi die Eule',         emoji: '🦉', desc: 'Weise, aber nachts am fleißigsten.' },
    { id: 'brezi',         name: 'Brezi die Brezel',     emoji: '🥨', desc: 'Verknotet die Grammatik mit Liebe.' },
    { id: 'waldi-dackel',  name: 'Waldi der Dackel',     emoji: '🐶', desc: 'Kurze Beine, lange Sätze.' },
    { id: 'franz-fuchs',   name: 'Franz der Fuchs',      emoji: '🦊', desc: 'Schlau bei jedem Trick mit dem Dativ.' },
    { id: 'klara-katze',   name: 'Klara die Klugkatze',  emoji: '🐱', desc: 'Schnurrt nur bei richtigen Artikeln.' },
    { id: 'kaiser-pinguin',name: 'Kaiser Pinguin',       emoji: '🐧', desc: 'Watschelt würdevoll durch den Konjunktiv.' },
    { id: 'igel-igor',     name: 'Igel Igor',            emoji: '🦔', desc: 'Stachelig, aber merkt sich alles.' }
  ];

  /* ===================== 3) Beute-Objekte (100 Stück) ===================== */
  /* Verteilung: 45 common, 28 uncommon, 17 rare, 7 epic, 3 legendary = 100 */
  var LOOT = [
    /* ---------- common (45) ---------- */
    { id: 'die-brezel',          name: 'Die Brezel',           emoji: '🥨', rarity: 'common',   flavor: 'Salzig, verknotet, herzlich gern genommen.' },
    { id: 'die-wurst',           name: 'Die Wurst',            emoji: '🌭', rarity: 'common',   flavor: 'Alles hat ein Ende, nur die Wurst hat zwei.' },
    { id: 'das-schnitzel',       name: 'Das Wiener Schnitzel', emoji: '🍖', rarity: 'common',   flavor: 'Goldbraun und mindestens tellergroß.' },
    { id: 'der-kaffee',          name: 'Der kleine Braune',    emoji: '☕', rarity: 'common',   flavor: 'Im Kaffeehaus bestellt man so.' },
    { id: 'das-broetchen',       name: 'Das Brötchen',         emoji: '🥖', rarity: 'common',   flavor: 'In Wien heißt es Semmel, bitte schön.' },
    { id: 'der-apfelstrudel',    name: 'Der Apfelstrudel',     emoji: '🥧', rarity: 'common',   flavor: 'Hauchdünn ausgezogen, Oma nickt zufrieden.' },
    { id: 'das-sauerkraut',      name: 'Das Sauerkraut',       emoji: '🥬', rarity: 'common',   flavor: 'Sauer macht bekanntlich lustig.' },
    { id: 'die-kartoffel',       name: 'Die Erdäpfel',         emoji: '🥔', rarity: 'common',   flavor: 'Das Wichtigste auf dem Teller, sagt der Bauer.' },
    { id: 'das-bier',            name: 'Das Seidl Bier',       emoji: '🍺', rarity: 'common',   flavor: 'Ein kühles Seidl zum Feierabend.' },
    { id: 'der-senf',           name: 'Der süße Senf',         emoji: '🟡', rarity: 'common',   flavor: 'Gibt überall seinen Senf dazu.' },
    { id: 'die-gurke',           name: 'Die Essiggurke',       emoji: '🥒', rarity: 'common',   flavor: 'Saure Gurkenzeit, aber lecker.' },
    { id: 'der-kaese',           name: 'Der Bergkäse',         emoji: '🧀', rarity: 'common',   flavor: 'Je älter, desto kräftiger der Spruch.' },
    { id: 'die-katze',           name: 'Die Hauskatze',        emoji: '🐱', rarity: 'common',   flavor: 'Schaut dich beim Lernen prüfend an.' },
    { id: 'der-hund',            name: 'Der treue Hund',       emoji: '🐕', rarity: 'common',   flavor: 'Bringt dir die Vokabeln apportiert.' },
    { id: 'die-maus',            name: 'Die Lernmaus',         emoji: '🐭', rarity: 'common',   flavor: 'Klein, aber huscht durch jedes Kapitel.' },
    { id: 'der-spatz',           name: 'Der Spatz',            emoji: '🐦', rarity: 'common',   flavor: 'Besser als die Taube auf dem Dach.' },
    { id: 'der-marienkaefer',    name: 'Der Marienkäfer',      emoji: '🐞', rarity: 'common',   flavor: 'Bringt ein bisschen Glück beim Test.' },
    { id: 'die-biene',           name: 'Die fleißige Biene',   emoji: '🐝', rarity: 'common',   flavor: 'Fleißig wie du beim Konjugieren.' },
    { id: 'der-bleistift',       name: 'Der Bleistift',        emoji: '✏️', rarity: 'common',   flavor: 'Radiergummi inklusive, Fehler erlaubt.' },
    { id: 'das-heft',            name: 'Das Schulheft',        emoji: '📓', rarity: 'common',   flavor: 'Kariert, denn Ordnung ist das halbe Leben.' },
    { id: 'der-radiergummi',     name: 'Der Radiergummi',      emoji: '🧽', rarity: 'common',   flavor: 'Macht den Akkusativ-Fehler ungeschehen.' },
    { id: 'das-lineal',          name: 'Das Lineal',           emoji: '📏', rarity: 'common',   flavor: 'Zieht klare Linien wie ein Beamter.' },
    { id: 'der-radler',          name: 'Der Radler',           emoji: '🚲', rarity: 'common',   flavor: 'Bier plus Limo, fürs lange Lernen.' },
    { id: 'die-vokabelkarte',    name: 'Die Vokabelkarte',     emoji: '🃏', rarity: 'common',   flavor: 'Vorne deutsch, hinten Schweißausbruch.' },
    { id: 'der-regenschirm',     name: 'Der Regenschirm',      emoji: '☂️', rarity: 'common',   flavor: 'In Wien immer dabei, sicher ist sicher.' },
    { id: 'die-wolke',           name: 'Die Wolke',            emoji: '☁️', rarity: 'common',   flavor: 'Steht im Plural gern über dem Wienerwald.' },
    { id: 'der-regentropfen',    name: 'Der Regentropfen',     emoji: '💧', rarity: 'common',   flavor: 'Steter Tropfen lernt das Verb.' },
    { id: 'die-sonne',           name: 'Die Frühlingssonne',   emoji: '🌞', rarity: 'common',   flavor: 'Lacht, wenn die Übung sitzt.' },
    { id: 'der-schneeball',      name: 'Der Schneeball',       emoji: '⛄', rarity: 'common',   flavor: 'Wintergaudi auf der Hohen Wand.' },
    { id: 'das-blatt',           name: 'Das Herbstblatt',      emoji: '🍂', rarity: 'common',   flavor: 'Fällt leise wie ein vergessener Artikel.' },
    { id: 'die-tasse',           name: 'Die Häferl-Tasse',     emoji: '🍵', rarity: 'common',   flavor: 'Häferl sagt man im Osten Österreichs.' },
    { id: 'der-loeffel',         name: 'Der Suppenlöffel',     emoji: '🥄', rarity: 'common',   flavor: 'Für die Frittatensuppe unverzichtbar.' },
    { id: 'die-gabel',           name: 'Die Gabel',            emoji: '🍴', rarity: 'common',   flavor: 'Sticht mutig ins Schnitzel.' },
    { id: 'der-knopf',           name: 'Der Knopf',            emoji: '🔘', rarity: 'common',   flavor: 'Geht beim Üben gern verloren.' },
    { id: 'die-socke',           name: 'Die einsame Socke',    emoji: '🧦', rarity: 'common',   flavor: 'Ihr Zwilling lernt noch in der Maschine.' },
    { id: 'der-hut',             name: 'Der Trachtenhut',      emoji: '🎩', rarity: 'common',   flavor: 'Mit Gamsbart sieht er gleich gschmackig aus.' },
    { id: 'die-blume',           name: 'Die Wiesenblume',      emoji: '🌼', rarity: 'common',   flavor: 'Pflückt sich am Donaukanal von selbst.' },
    { id: 'der-kaktus',          name: 'Der Fensterkaktus',    emoji: '🌵', rarity: 'common',   flavor: 'Stachelig wie die deutsche Aussprache.' },
    { id: 'der-pilz',            name: 'Der Waldpilz',         emoji: '🍄', rarity: 'common',   flavor: 'Vorsicht, nicht jeder ist ein Glückspilz.' },
    { id: 'die-note',            name: 'Die Musiknote',        emoji: '🎵', rarity: 'common',   flavor: 'Summt leise das Lied der Vokabeln.' },
    { id: 'die-glocke',          name: 'Das Glöckchen',        emoji: '🔔', rarity: 'common',   flavor: 'Klingelt, wenn die Pause naht.' },
    { id: 'der-stern-klein',     name: 'Das Sternchen',        emoji: '⭐', rarity: 'common',   flavor: 'Ein Sternchen fürs brave Üben.' },
    { id: 'der-wuerfel',         name: 'Der Würfel',           emoji: '🎲', rarity: 'common',   flavor: 'Der Zufall bestimmt deine nächste Frage.' },
    { id: 'die-muenze',          name: 'Der Groschen',         emoji: '🪙', rarity: 'common',   flavor: 'Jetzt ist der Groschen gefallen!' },
    { id: 'das-pflaster',        name: 'Das Pflaster',         emoji: '🩹', rarity: 'common',   flavor: 'Für kleine Wunden am Grammatik-Ego.' },

    /* ---------- uncommon (28) ---------- */
    { id: 'der-ohrwurm',         name: 'Der Ohrwurm',          emoji: '🎶', rarity: 'uncommon', flavor: 'Geht ins Ohr und nicht mehr raus.' },
    { id: 'der-gluckspilz',      name: 'Der Glückspilz',       emoji: '🍄', rarity: 'uncommon', flavor: 'So nennt man jemanden mit Dusel.' },
    { id: 'die-schnapsidee',     name: 'Die Schnapsidee',      emoji: '💡', rarity: 'uncommon', flavor: 'Eine ziemlich verrückte Eingebung.' },
    { id: 'der-sauregurkenzeit', name: 'Die Sauregurkenzeit',  emoji: '🥒', rarity: 'uncommon', flavor: 'Wenn gar nichts los ist im Land.' },
    { id: 'das-fernweh',         name: 'Das Fernweh',          emoji: '🧳', rarity: 'uncommon', flavor: 'Die Sehnsucht nach der weiten Welt.' },
    { id: 'die-torschlusspanik', name: 'Die Torschlusspanik',  emoji: '🚪', rarity: 'uncommon', flavor: 'Schnell rein, bevor das Tor zugeht!' },
    { id: 'der-schweinehund',    name: 'Der innere Schweinehund', emoji: '🐷', rarity: 'uncommon', flavor: 'Den muss man jeden Tag überwinden.' },
    { id: 'die-naschkatze',      name: 'Die Naschkatze',       emoji: '🍬', rarity: 'uncommon', flavor: 'Kann den Süßigkeiten nicht widerstehen.' },
    { id: 'der-dreikaesehoch',   name: 'Der Dreikäsehoch',     emoji: '🧒', rarity: 'uncommon', flavor: 'So klein und schon so frech.' },
    { id: 'die-mehlspeise',      name: 'Die Mehlspeise',       emoji: '🧁', rarity: 'uncommon', flavor: 'Österreichs süße Antwort auf alles.' },
    { id: 'der-kaiserschmarrn',  name: 'Der Kaiserschmarrn',   emoji: '🍳', rarity: 'uncommon', flavor: 'Vom Kaiser geliebt, mit Zwetschkenröster.' },
    { id: 'die-sachertorte',     name: 'Die Sachertorte',      emoji: '🍰', rarity: 'uncommon', flavor: 'Die berühmteste Torte Wiens.' },
    { id: 'der-melange',         name: 'Die Wiener Melange',   emoji: '☕', rarity: 'uncommon', flavor: 'Kaffee mit Milchschaum, ganz fein.' },
    { id: 'die-fledermaus',      name: 'Die Fledermaus',       emoji: '🦇', rarity: 'uncommon', flavor: 'Eine Operette von Johann Strauß.' },
    { id: 'der-fuchs',           name: 'Der schlaue Fuchs',    emoji: '🦊', rarity: 'uncommon', flavor: 'Wo der sich auskennt, ist er Spitze.' },
    { id: 'die-eule-uc',         name: 'Die weise Eule',       emoji: '🦉', rarity: 'uncommon', flavor: 'Eulen nach Athen tragen? Lieber nicht.' },
    { id: 'der-hirsch',          name: 'Der Hirsch im Wald',   emoji: '🦌', rarity: 'uncommon', flavor: 'Röhrt im Herbst durch den Wienerwald.' },
    { id: 'der-fasching',        name: 'Die Faschingsmaske',   emoji: '🎭', rarity: 'uncommon', flavor: 'In Wien sagt man Fasching, nicht Karneval.' },
    { id: 'das-akkordeon',       name: 'Die Quetschn',         emoji: '🪗', rarity: 'uncommon', flavor: 'Wienerlied-Stimmung beim Heurigen.' },
    { id: 'die-geige',           name: 'Die Geige',            emoji: '🎻', rarity: 'uncommon', flavor: 'Walzerklänge aus dem Musikverein.' },
    { id: 'der-walzer',          name: 'Der Wiener Walzer',    emoji: '💃', rarity: 'uncommon', flavor: 'Eins-zwei-drei, links herum gedreht.' },
    { id: 'das-woerterbuch',     name: 'Das Wörterbuch',       emoji: '📖', rarity: 'uncommon', flavor: 'Dein bester Freund bei Zweifeln.' },
    { id: 'die-lupe',            name: 'Die Lupe',             emoji: '🔍', rarity: 'uncommon', flavor: 'Für den genauen Blick auf die Endung.' },
    { id: 'die-eieruhr',         name: 'Die Eieruhr',          emoji: '⏲️', rarity: 'uncommon', flavor: 'Tickt für deine Lernpause mit.' },
    { id: 'der-kompass',         name: 'Der Kompass',          emoji: '🧭', rarity: 'uncommon', flavor: 'Zeigt dir den Weg durch die Fälle.' },
    { id: 'der-schneemann',      name: 'Der Schneemann',       emoji: '☃️', rarity: 'uncommon', flavor: 'Schmilzt nur bei falschem Konjunktiv.' },
    { id: 'der-regenbogen',      name: 'Der Regenbogen',       emoji: '🌈', rarity: 'uncommon', flavor: 'Nach dem Regen kommt die Belohnung.' },
    { id: 'der-froschkoenig',    name: 'Der Frosch (noch kein König)', emoji: '🐸', rarity: 'uncommon', flavor: 'Ein Küsschen fehlt zur Verwandlung.' },

    /* ---------- rare (17) ---------- */
    { id: 'das-kuddelmuddel',    name: 'Das Kuddelmuddel',     emoji: '🌀', rarity: 'rare',     flavor: 'Ein heilloses Durcheinander, herrlich.' },
    { id: 'der-tollpatsch',      name: 'Der Tollpatsch',       emoji: '🤹', rarity: 'rare',     flavor: 'Stolpert charmant durch jede Stunde.' },
    { id: 'das-gluck-im-unglueck', name: 'Das Glück im Unglück', emoji: '🍀', rarity: 'rare',   flavor: 'Noch mal gut gegangen, puh.' },
    { id: 'die-eselsbruecke',    name: 'Die Eselsbrücke',      emoji: '🐴', rarity: 'rare',     flavor: 'Die beste Hilfe gegen das Vergessen.' },
    { id: 'der-purzelbaum',      name: 'Der Purzelbaum',       emoji: '🤸', rarity: 'rare',     flavor: 'Vor Lernfreude einen Purzelbaum schlagen.' },
    { id: 'die-sternschnuppe',   name: 'Die Sternschnuppe',    emoji: '🌠', rarity: 'rare',     flavor: 'Schnell einen Wunsch fürs Examen!' },
    { id: 'der-rabe',            name: 'Der kluge Rabe',       emoji: '🐦‍⬛', rarity: 'rare',  flavor: 'Sammelt glänzende Vokabeln wie Schätze.' },
    { id: 'die-schildkroete',    name: 'Die Schildkröte',      emoji: '🐢', rarity: 'rare',     flavor: 'Langsam, aber kommt sicher ans Ziel.' },
    { id: 'der-pfau',            name: 'Der stolze Pfau',      emoji: '🦚', rarity: 'rare',     flavor: 'Zeigt sein Können in voller Pracht.' },
    { id: 'das-riesenrad',       name: 'Das Riesenrad',        emoji: '🎡', rarity: 'rare',     flavor: 'Wahrzeichen vom Wiener Prater.' },
    { id: 'der-stephansdom',     name: 'Der Steffl',           emoji: '⛪', rarity: 'rare',     flavor: 'Liebevoll für den Stephansdom.' },
    { id: 'die-mozartkugel',     name: 'Die Mozartkugel',      emoji: '🍫', rarity: 'rare',     flavor: 'Marzipan, Nougat, ein Stück Salzburg.' },
    { id: 'der-lebkuchen',       name: 'Das Lebkuchenherz',    emoji: '🍪', rarity: 'rare',     flavor: 'Vom Christkindlmarkt, mit Zuckerguss-Spruch.' },
    { id: 'die-rote-rube',       name: 'Die rote Laterne',     emoji: '🏮', rarity: 'rare',     flavor: 'Hat man, wenn man Letzter ist.' },
    { id: 'der-hampelmann',      name: 'Der Hampelmann',       emoji: '🪅', rarity: 'rare',     flavor: 'Zappelt an Fäden durch die Grammatik.' },
    { id: 'die-zauberfloete',    name: 'Die Zauberflöte',      emoji: '🪈', rarity: 'rare',     flavor: 'Mozarts magische Melodie.' },
    { id: 'der-gluehwein',       name: 'Der Glühwein',         emoji: '🍷', rarity: 'rare',     flavor: 'Wärmt am Adventmarkt Herz und Vokabeln.' },

    /* ---------- epic (7) ---------- */
    { id: 'der-feuervogel',      name: 'Der Feuervogel',       emoji: '🔥', rarity: 'epic',     flavor: 'Steigt aus der Asche fehlerfreier Sätze.' },
    { id: 'das-einhorn',         name: 'Das Lern-Einhorn',     emoji: '🦄', rarity: 'epic',     flavor: 'Selten gesichtet, immer perfekt im Genitiv.' },
    { id: 'der-drache',         name: 'Der Grammatik-Drache',  emoji: '🐉', rarity: 'epic',     flavor: 'Bewacht den Schatz der starken Verben.' },
    { id: 'die-kristallkugel',   name: 'Die Kristallkugel',    emoji: '🔮', rarity: 'epic',     flavor: 'Sieht das Ergebnis deiner Prüfung voraus.' },
    { id: 'das-zauberbuch',      name: 'Das Zauberbuch',       emoji: '📚', rarity: 'epic',     flavor: 'Blättert sich von selbst zur Lösung.' },
    { id: 'der-rumpelstilzchen', name: 'Rumpelstilzchen',      emoji: '🧌', rarity: 'epic',     flavor: 'Spinnt Stroh zu Gold und kennt seinen Namen.' },
    { id: 'der-goldene-schluessel', name: 'Der goldene Schlüssel', emoji: '🗝️', rarity: 'epic', flavor: 'Öffnet das Tor zum nächsten Sprachniveau.' },

    /* ---------- legendary (3) ---------- */
    { id: 'die-goldene-brezel',  name: 'Die goldene Brezel',   emoji: '🥨', rarity: 'legendary', flavor: 'Der heilige Gral aller Brotwaren.' },
    { id: 'die-krone-goldliga',  name: 'Krone der Goldliga',   emoji: '👑', rarity: 'legendary', flavor: 'Nur die fleißigsten Lernenden tragen sie.' },
    { id: 'der-heilige-kaffee',  name: 'Der Heilige Kaffee',   emoji: '☕', rarity: 'legendary', flavor: 'Eine Tasse und du verstehst den Konjunktiv II.' }
  ];

  /* ===================== 4) Gewichtetes Ziehen ===================== */
  function rollLoot() {
    var pool = [];
    var i, item, w, k;
    for (i = 0; i < LOOT.length; i++) {
      item = LOOT[i];
      var rar = LOOT_RARITY[item.rarity];
      w = (rar && rar.weight) ? rar.weight : 1;
      for (k = 0; k < w; k++) {
        pool.push(item);
      }
    }
    if (pool.length === 0) return null;
    var idx = Math.floor(Math.random() * pool.length);
    return pool[idx];
  }

  /* ===================== 5) Suche nach id ===================== */
  function lootById(id) {
    var i;
    for (i = 0; i < LOOT.length; i++) {
      if (LOOT[i].id === id) return LOOT[i];
    }
    return null;
  }

  /* ===================== 6) Export auf window ===================== */
  window.LOOT_RARITY = LOOT_RARITY;
  window.CHARACTERS = CHARACTERS;
  window.LOOT = LOOT;
  window.rollLoot = rollLoot;
  window.lootById = lootById;
  window.LOOT_COUNT = LOOT.length;
})();
