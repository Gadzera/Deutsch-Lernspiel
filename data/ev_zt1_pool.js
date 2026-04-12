// EV ZT1 — Pool дополнительных заданий (Wortschatz, Strukturen, Grammatik)
// При запуске теста случайно выбирается один набор из пула
const EV_ZT1_POOL = {

// ============ WORTSCHATZ POOL ============
wortschatz: [

// ---- SET 1 ----
{tasks:[
  {type:"noun2verb",q:"Bilden Sie Verben aus den Nomen und setzen Sie sie ein!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:{noun:"die Wohnung",verb:"wohnt",sentence:"Meine Familie wohnt in einem schönen Haus."},
   items:[
     {noun:"das Gespräch",sentence:"Ihr ___ oft über Politik.",answers:["sprecht","redet"]},
     {noun:"das Studium",sentence:"Wir planen, in Wien zu ___.",answers:["studieren"]},
     {noun:"der Anruf",sentence:"Er hat mir versprochen, dass er mich ___.",answers:["anruft"]},
     {noun:"die Ankunft",sentence:"Vermutlich ___ er um 17 Uhr.",answers:["kommt an","kommt"]},
     {noun:"die Fahrt",sentence:"Herr Huber ___ meistens zu schnell.",answers:["fährt"]},
     {noun:"die Hilfe",sentence:"Du ___ deinem Bruder zu selten!",answers:["hilfst"]}
   ]},
  {type:"adjectives",q:"Markieren Sie 6 Adjektive wie im Beispiel!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:"freiwillig",
   words:["jetzt","klug","nun","durstig","still","tut","statt","leer","lässt","sowieso","treu","dann","nur","fein","ob","freiwillig"],
   correctIdxs:[1,3,4,7,10,13]},
  {type:"antonyms",q:"Was ist das Gegenteil?",scoring:"4 x 0,5 = 2 P.",perItem:0.5,
   example:{word:"gemütlich",answer:"ungemütlich"},
   items:[
     {word:"einschalten",answers:["ausschalten"]},
     {word:"schnell",answers:["langsam"]},
     {word:"hell",answers:["dunkel"]},
     {word:"glücklich",answers:["unglücklich","traurig"]}
   ]}
]},

// ---- SET 2 ----
{tasks:[
  {type:"noun2verb",q:"Bilden Sie Verben aus den Nomen und setzen Sie sie ein!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:{noun:"die Arbeit",verb:"arbeitet",sentence:"Mein Vater arbeitet in einer Bank."},
   items:[
     {noun:"die Lehre",sentence:"Die Professorin ___ Deutsch als Fremdsprache.",answers:["lehrt","unterrichtet"]},
     {noun:"das Verständnis",sentence:"Ich ___ nicht, was du meinst.",answers:["verstehe"]},
     {noun:"der Besuch",sentence:"Wir ___ unsere Oma jeden Sonntag.",answers:["besuchen"]},
     {noun:"die Erinnerung",sentence:"Ich ___ mich noch gut an die Kindheit.",answers:["erinnere"]},
     {noun:"die Freude",sentence:"Die Kinder ___ sich über das Geschenk.",answers:["freuen"]},
     {noun:"die Übersetzung",sentence:"Er ___ den Text ins Englische.",answers:["übersetzt"]}
   ]},
  {type:"adjectives",q:"Markieren Sie 6 Adjektive wie im Beispiel!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:"wichtig",
   words:["ruhig","schon","bald","modern","vielleicht","lustig","nie","praktisch","dann","leise","kaum","teuer","wieder","sauber","sehr","wichtig"],
   correctIdxs:[0,3,5,7,9,11,13]},
  {type:"antonyms",q:"Was ist das Gegenteil?",scoring:"4 x 0,5 = 2 P.",perItem:0.5,
   example:{word:"laut",answer:"leise"},
   items:[
     {word:"öffnen",answers:["schließen","zumachen"]},
     {word:"kaufen",answers:["verkaufen"]},
     {word:"interessant",answers:["langweilig","uninteressant"]},
     {word:"jung",answers:["alt"]}
   ]}
]},

// ---- SET 3 ----
{tasks:[
  {type:"noun2verb",q:"Bilden Sie Verben aus den Nomen und setzen Sie sie ein!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:{noun:"der Schlaf",verb:"schläft",sentence:"Das Baby schläft jetzt."},
   items:[
     {noun:"die Suche",sentence:"Ich ___ schon seit Stunden nach dem Schlüssel.",answers:["suche"]},
     {noun:"die Antwort",sentence:"Bitte ___ Sie auf meine E-Mail!",answers:["antworten"]},
     {noun:"die Frage",sentence:"Die Studentin ___ den Professor nach dem Termin.",answers:["fragt"]},
     {noun:"die Bestellung",sentence:"Wir ___ eine Pizza zum Mitnehmen.",answers:["bestellen"]},
     {noun:"die Öffnung",sentence:"Die Bibliothek ___ um 9 Uhr.",answers:["öffnet","macht auf"]},
     {noun:"die Reise",sentence:"Nächsten Sommer ___ wir nach Italien.",answers:["reisen","fahren"]}
   ]},
  {type:"adjectives",q:"Markieren Sie 6 Adjektive wie im Beispiel!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:"freundlich",
   words:["oft","müde","damals","hungrig","genug","neu","bald","frisch","sogar","gesund","eben","krank","zwar","hoch","fast","freundlich"],
   correctIdxs:[1,3,5,7,9,11,13]},
  {type:"antonyms",q:"Was ist das Gegenteil?",scoring:"4 x 0,5 = 2 P.",perItem:0.5,
   example:{word:"viel",answer:"wenig"},
   items:[
     {word:"anfangen",answers:["aufhören","beenden"]},
     {word:"kalt",answers:["warm","heiß"]},
     {word:"arm",answers:["reich"]},
     {word:"früh",answers:["spät"]}
   ]}
]},

// ---- SET 4 ----
{tasks:[
  {type:"noun2verb",q:"Bilden Sie Verben aus den Nomen und setzen Sie sie ein!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:{noun:"die Lieferung",verb:"liefert",sentence:"Die Firma liefert die Ware morgen."},
   items:[
     {noun:"die Meinung",sentence:"Was ___ du darüber?",answers:["meinst"]},
     {noun:"die Erklärung",sentence:"Der Lehrer ___ die Grammatik sehr gut.",answers:["erklärt"]},
     {noun:"die Korrektur",sentence:"Bitte ___ meine Hausaufgabe!",answers:["korrigiere","korrigieren","korrigiert"]},
     {noun:"die Beschreibung",sentence:"Können Sie bitte das Problem ___?",answers:["beschreiben"]},
     {noun:"die Diskussion",sentence:"Wir ___ lange über dieses Thema.",answers:["diskutieren","diskutierten","haben diskutiert"]},
     {noun:"die Organisation",sentence:"Sie ___ die Party perfekt.",answers:["organisiert"]}
   ]},
  {type:"adjectives",q:"Markieren Sie 6 Adjektive wie im Beispiel!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:"glücklich",
   words:["immer","traurig","manchmal","nützlich","nie","faul","schon","dumm","wieder","schlau","wohl","weich","kaum","schwach","dann","glücklich"],
   correctIdxs:[1,3,5,7,9,11,13]},
  {type:"antonyms",q:"Was ist das Gegenteil?",scoring:"4 x 0,5 = 2 P.",perItem:0.5,
   example:{word:"groß",answer:"klein"},
   items:[
     {word:"hässlich",answers:["schön","hübsch"]},
     {word:"gewinnen",answers:["verlieren"]},
     {word:"lachen",answers:["weinen"]},
     {word:"sicher",answers:["unsicher","gefährlich"]}
   ]}
]}

],

// ============ STRUKTUREN POOL ============
strukturen: [

// ---- SET 1 ----
{tasks:[
  {type:"infinitiv_zu",q:"Ergänzen Sie die Sätze mit Infinitiv + zu!",scoring:"3 x 1,5 = 4,5 P.",perItem:1.5,
   items:[
     {start:"Für Jugendliche ist es nicht leicht,",example:"sich für das richtige Studium zu entscheiden."},
     {start:"Maturant*innen hoffen,",example:"einen Studienplatz an der Universität zu bekommen."},
     {start:"Nicht jede*r hat die Möglichkeit,",example:"an einer guten Universität im Ausland zu studieren."}
   ]},
  {type:"praepositionen",q:"Ergänzen Sie die passenden Präpositionen und Artikel!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   example:"Im Park: In der Mittagspause...",
   text:"___ ___ Mittagspause gehen viele Leute ___ ___ Park. Sie setzen sich auf eine Bank und holen ihre Jause ___ ___ Tasche. Andere kaufen sich etwas ___ ___ Imbissstand. Ein Student arbeitet ___ ___ Notebook auf der Wiese. ___ ___ Pause kehren alle wieder zur Arbeit zurück.",
   blanks:[
     {answers:["In der"]},
     {answers:["in den","zum"]},
     {answers:["aus der","aus ihrer"]},
     {answers:["am","bei dem","beim"]},
     {answers:["mit dem","mit seinem"]},
     {answers:["Nach der"]}
   ]},
  {type:"satzanfaenge",q:"Vervollständigen Sie mit 3 verschiedenen Gedanken!",scoring:"3 x 1 = 3 P.",perItem:1,
   stem:"Der Umzug nach Österreich war schwierig, ...",
   connectors:["denn","weil","deshalb"],
   examples:["denn ich kannte dort niemanden.","weil ich die Sprache nicht konnte.","Deshalb habe ich sofort einen Deutschkurs besucht."]},
  {type:"konjunktiv2",q:"Sagen Sie es höflicher mit Konjunktiv II!",scoring:"3 x 1,5 = 4,5 P.",perItem:1.5,
   items:[
     {imperativ:"„Hilf mir mit der Hausaufgabe!\"",example:"Könntest du mir bitte mit der Hausaufgabe helfen?"},
     {imperativ:"„Gießen Sie bitte meine Blumen!\"",example:"Würden Sie bitte meine Blumen gießen?"},
     {imperativ:"„Tragt die Taschen bitte hinein!\"",example:"Könntet ihr bitte die Taschen hineintragen?"}
   ]},
  {type:"stehen_liegen",q:"Bilden Sie mit den folgenden Nomen 4 korrekte Sätze!",scoring:"4 x 1,5 = 6 P.",perItem:1.5,
   verbs:["stehen","liegen","hängen","stellen","legen"],
   items:[
     {nouns:"Peter/Fahrrad/Haus",example:"Peter stellt das Fahrrad vor das Haus."},
     {nouns:"Er/Mantel/Garderobe",example:"Er hängt den Mantel an die Garderobe."},
     {nouns:"Gläser/Wohnzimmerregal",example:"Die Gläser stehen im Wohnzimmerregal."},
     {nouns:"Skripten/Schreibtisch",example:"Die Skripten liegen auf dem Schreibtisch."}
   ]}
]},

// ---- SET 2 ----
{tasks:[
  {type:"infinitiv_zu",q:"Ergänzen Sie die Sätze mit Infinitiv + zu!",scoring:"3 x 1,5 = 4,5 P.",perItem:1.5,
   items:[
     {start:"Es ist wichtig,",example:"jeden Tag Deutsch zu lernen und neue Wörter zu üben."},
     {start:"Viele Studierende versuchen,",example:"neben dem Studium Geld zu verdienen."},
     {start:"Es ist nicht einfach,",example:"in Wien eine günstige Wohnung zu finden."}
   ]},
  {type:"praepositionen",q:"Ergänzen Sie die passenden Präpositionen und Artikel!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
   text:"Am Wochenende fahre ich ___ ___ Zug ___ ___ Großeltern. Ich steige ___ ___ Hauptbahnhof ein und fahre zwei Stunden. Meine Oma wartet ___ ___ Bahnhof auf mich. Wir gehen zuerst ___ ___ Café und trinken Kaffee. ___ ___ Kaffee gehen wir spazieren.",
   blanks:[
     {answers:["mit dem"]},
     {answers:["zu den","zu meinen"]},
     {answers:["am","beim"]},
     {answers:["am","beim"]},
     {answers:["in ein","in das","ins"]},
     {answers:["Nach dem"]}
   ]},
  {type:"satzanfaenge",q:"Vervollständigen Sie mit 3 verschiedenen Gedanken!",scoring:"3 x 1 = 3 P.",perItem:1,
   stem:"Ich lerne Deutsch, ...",
   connectors:["denn","weil","deshalb"],
   examples:["denn ich möchte in Österreich studieren.","weil Deutsch für meine Zukunft wichtig ist.","Deshalb besuche ich täglich einen Kurs."]},
  {type:"konjunktiv2",q:"Sagen Sie es höflicher mit Konjunktiv II!",scoring:"3 x 1,5 = 4,5 P.",perItem:1.5,
   items:[
     {imperativ:"„Öffnen Sie bitte das Fenster!\"",example:"Könnten Sie bitte das Fenster öffnen?"},
     {imperativ:"„Gib mir das Buch!\"",example:"Könntest du mir bitte das Buch geben?"},
     {imperativ:"„Wartet einen Moment!\"",example:"Könntet ihr bitte einen Moment warten?"}
   ]},
  {type:"stehen_liegen",q:"Bilden Sie mit den folgenden Nomen 4 korrekte Sätze!",scoring:"4 x 1,5 = 6 P.",perItem:1.5,
   verbs:["stehen","liegen","hängen","stellen","legen","setzen"],
   items:[
     {nouns:"Bild/Wand",example:"Das Bild hängt an der Wand."},
     {nouns:"Mutter/Teller/Tisch",example:"Die Mutter stellt den Teller auf den Tisch."},
     {nouns:"Buch/Regal",example:"Das Buch steht im Regal."},
     {nouns:"Kind/Boden",example:"Das Kind sitzt auf dem Boden."}
   ]}
]}

],

// ============ GRAMMATIK POOL ============
grammatik: [

// ---- SET 1: Perfekt, Modalverben, Nebensätze ----
{items:[
  {id:"ev1g1_01",q:"Ich ___ gestern ins Theater gegangen.",opts:["bin","habe","werde","war"],ans:"bin",rule:"Perfekt mit sein bei Bewegung"},
  {id:"ev1g1_02",q:"Er hat den Brief schon ___.",opts:["geschrieben","schreiben","schrieb","schreibt"],ans:"geschrieben",rule:"Partizip II"},
  {id:"ev1g1_03",q:"Wir ___ heute früher nach Hause gehen.",opts:["müssen","muss","musst","müsst"],ans:"müssen",rule:"Modalverb wir"},
  {id:"ev1g1_04",q:"Ich bleibe heute zu Hause, ___ ich krank bin.",opts:["weil","denn","obwohl","damit"],ans:"weil",rule:"Kausalsatz mit weil"},
  {id:"ev1g1_05",q:"Er sagt, ___ er morgen kommt.",opts:["dass","das","weil","ob"],ans:"dass",rule:"dass-Satz"},
  {id:"ev1g1_06",q:"___ das Wetter schön ist, gehen wir schwimmen.",opts:["Wenn","Als","Wann","Ob"],ans:"Wenn",rule:"wenn = если"},
  {id:"ev1g1_07",q:"Sie hat mir ___ Buch gegeben.",opts:["das","dem","den","der"],ans:"das",rule:"Akkusativ Neutrum"},
  {id:"ev1g1_08",q:"Ich gebe ___ Kind einen Apfel.",opts:["dem","den","das","der"],ans:"dem",rule:"Dativ Neutrum"},
  {id:"ev1g1_09",q:"Die Kinder ___ im Park gespielt.",opts:["haben","sind","werden","wurden"],ans:"haben",rule:"Perfekt mit haben"},
  {id:"ev1g1_10",q:"Ich möchte ___ Wien studieren.",opts:["in","an","auf","zu"],ans:"in",rule:"in + Dativ bei Städten"}
]},

// ---- SET 2: Passiv, Konjunktiv II, Finalsätze ----
{items:[
  {id:"ev1g2_01",q:"Das Problem ___ gelöst werden.",opts:["muss","müsst","musst","müssen"],ans:"muss",rule:"Passiv + Modalverb"},
  {id:"ev1g2_02",q:"Wenn ich reich ___, würde ich reisen.",opts:["wäre","bin","sei","war"],ans:"wäre",rule:"Konjunktiv II: wäre"},
  {id:"ev1g2_03",q:"Er lernt Deutsch, ___ in Wien zu studieren.",opts:["um","damit","weil","dass"],ans:"um",rule:"um...zu (gleiches Subjekt)"},
  {id:"ev1g2_04",q:"Sie fährt nach Graz, ___ ihre Eltern sie besuchen.",opts:["damit","um","weil","dass"],ans:"damit",rule:"damit (verschiedene Subjekte)"},
  {id:"ev1g2_05",q:"An seiner Stelle ___ ich mehr üben.",opts:["würde","werde","will","wollte"],ans:"würde",rule:"Konjunktiv II: würde + Infinitiv"},
  {id:"ev1g2_06",q:"Das Fenster ___ nicht geöffnet werden.",opts:["kann","können","kannst","könnt"],ans:"kann",rule:"Passiv + können"},
  {id:"ev1g2_07",q:"Der Text ___ bis morgen geschrieben werden.",opts:["soll","sollt","sollst","sollen"],ans:"soll",rule:"Passiv + sollen"},
  {id:"ev1g2_08",q:"Ich ___ gerne mehr Zeit haben.",opts:["hätte","habe","hatte","hat"],ans:"hätte",rule:"Konjunktiv II: hätte"},
  {id:"ev1g2_09",q:"Die Aufgabe wurde gestern ___.",opts:["erledigt","erledigen","erledigend","erledigte"],ans:"erledigt",rule:"Passiv Präteritum"},
  {id:"ev1g2_10",q:"Wenn ich Zeit ___, käme ich mit.",opts:["hätte","habe","hatte","haben"],ans:"hätte",rule:"Konjunktiv II Bedingung"}
]},

// ---- SET 3: Präpositionen, Adjektivdeklination ----
{items:[
  {id:"ev1g3_01",q:"Ich wohne ___ einer kleinen Wohnung.",opts:["in","auf","an","bei"],ans:"in",rule:"in + Dativ (wo?)"},
  {id:"ev1g3_02",q:"Der Schlüssel liegt ___ dem Tisch.",opts:["auf","in","an","über"],ans:"auf",rule:"auf + Dativ (wo?)"},
  {id:"ev1g3_03",q:"Ich fahre ___ dem Bus zur Uni.",opts:["mit","bei","zu","von"],ans:"mit",rule:"mit + Dativ (Transportmittel)"},
  {id:"ev1g3_04",q:"Das ___ Auto gehört meinem Vater.",opts:["rote","rot","roter","rotes"],ans:"rote",rule:"Adjektiv nach bestimmtem Artikel"},
  {id:"ev1g3_05",q:"Ich habe einen ___ Hund.",opts:["kleinen","kleine","klein","kleines"],ans:"kleinen",rule:"Akkusativ maskulin unbestimmt"},
  {id:"ev1g3_06",q:"Wir sitzen ___ einem schönen Park.",opts:["in","auf","an","bei"],ans:"in",rule:"in + Dativ (wo?)"},
  {id:"ev1g3_07",q:"Die ___ Frau ist meine Tante.",opts:["nette","nett","nettes","netter"],ans:"nette",rule:"Adjektiv nach bestimmtem Artikel fem."},
  {id:"ev1g3_08",q:"___ Wochenende besuche ich meine Eltern.",opts:["Am","Im","Um","Zum"],ans:"Am",rule:"am Wochenende"},
  {id:"ev1g3_09",q:"Ich trinke eine ___ Tasse Kaffee.",opts:["heiße","heißes","heiß","heißer"],ans:"heiße",rule:"Adjektiv Akk. fem. unbestimmt"},
  {id:"ev1g3_10",q:"Das Buch liegt ___ Regal.",opts:["im","in","an","auf"],ans:"im",rule:"im = in dem"}
]},

// ---- SET 4: Relativsätze, Komparativ, temporale Nebensätze ----
{items:[
  {id:"ev1g4_01",q:"Das ist der Mann, ___ gestern angerufen hat.",opts:["der","den","dem","dessen"],ans:"der",rule:"Relativpronomen Nominativ mask."},
  {id:"ev1g4_02",q:"Ich kenne die Frau, ___ du gesehen hast.",opts:["die","der","dem","das"],ans:"die",rule:"Relativpronomen Akkusativ fem."},
  {id:"ev1g4_03",q:"Wien ist ___ als Graz.",opts:["größer","groß","am größten","größeres"],ans:"größer",rule:"Komparativ"},
  {id:"ev1g4_04",q:"Das ist das ___ Buch, das ich je gelesen habe.",opts:["beste","besser","gute","guten"],ans:"beste",rule:"Superlativ"},
  {id:"ev1g4_05",q:"___ ich ein Kind war, wohnte ich in Linz.",opts:["Als","Wenn","Wann","Ob"],ans:"Als",rule:"als = когда (Vergangenheit)"},
  {id:"ev1g4_06",q:"Die Studentin, ___ ich das Buch gegeben habe, heißt Anna.",opts:["der","die","den","dem"],ans:"der",rule:"Relativpronomen Dativ fem."},
  {id:"ev1g4_07",q:"Das Auto ist ___ teuer wie meins.",opts:["so","als","wie","mehr"],ans:"so",rule:"so...wie = так же...как"},
  {id:"ev1g4_08",q:"___ ich nach Hause komme, rufe ich dich an.",opts:["Wenn","Als","Wann","Ob"],ans:"Wenn",rule:"wenn = когда (zukünftig)"},
  {id:"ev1g4_09",q:"Ich warte hier, ___ du kommst.",opts:["bis","seit","bevor","nachdem"],ans:"bis",rule:"bis = пока не"},
  {id:"ev1g4_10",q:"Das ist die Stadt, ___ ich geboren bin.",opts:["in der","die","der","wo"],ans:"in der",rule:"Präpositional Relativpronomen"}
]},

// ---- SET 5: Gemischt B1-B2 ----
{items:[
  {id:"ev1g5_01",q:"Obwohl es regnet, ___ wir spazieren.",opts:["gehen","gingen","gehend","gegangen"],ans:"gehen",rule:"Obwohl-Satz: Verb am Ende NS, HS normal"},
  {id:"ev1g5_02",q:"Nachdem er gegessen hatte, ___ er ins Bett.",opts:["ging","geht","gegangen","gehen"],ans:"ging",rule:"Plusquamperfekt + Präteritum"},
  {id:"ev1g5_03",q:"Ich interessiere mich ___ Musik.",opts:["für","auf","an","über"],ans:"für",rule:"sich interessieren für"},
  {id:"ev1g5_04",q:"Er denkt oft ___ seine Kindheit.",opts:["an","auf","über","für"],ans:"an",rule:"denken an + Akkusativ"},
  {id:"ev1g5_05",q:"Wir freuen uns ___ das Wochenende.",opts:["auf","für","an","über"],ans:"auf",rule:"sich freuen auf (Zukunft)"},
  {id:"ev1g5_06",q:"Sie hat Angst ___ Spinnen.",opts:["vor","für","über","an"],ans:"vor",rule:"Angst haben vor"},
  {id:"ev1g5_07",q:"Ich bin stolz ___ meine Tochter.",opts:["auf","über","für","an"],ans:"auf",rule:"stolz sein auf"},
  {id:"ev1g5_08",q:"Er hat mir ___ geholfen.",opts:["gestern","gestrige","gestriger","gestrigen"],ans:"gestern",rule:"Adverb der Zeit"},
  {id:"ev1g5_09",q:"___ Essen trinke ich Wasser.",opts:["Zum","Am","Im","Beim"],ans:"Zum",rule:"zum Essen"},
  {id:"ev1g5_10",q:"Ich kann Deutsch, ___ ich in Wien gelebt habe.",opts:["weil","denn","obwohl","trotzdem"],ans:"weil",rule:"weil (Nebensatz)"}
]}

]

};
