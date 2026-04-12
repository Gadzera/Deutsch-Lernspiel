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

// ============ STRUKTUREN POOL — wird noch erweitert ============
strukturen: [],

// ============ GRAMMATIK POOL — wird noch erweitert ============
grammatik: []

};
