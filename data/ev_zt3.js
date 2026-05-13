// ev_zt3.js — EV Zwischentest 3 Übungssektionen (30 Aufgaben pro Sektion)

const EV_ZT3_SECTIONS = [

// ──────────────────────────────────────────────────────────────────
// 0. WORTSCHATZ — Wortfamilien
// ──────────────────────────────────────────────────────────────────
{type:"grammatik", name:"Wortschatz – Wortfamilien",
 desc:"Ergänzen Sie die fehlende Wortform!", perItem:0.5,
 items:[
{q:"gesund → ___ (Nomen)",opts:["Gesundheit","Gesunde","Gesunden","Gesundtum"],ans:"Gesundheit",rule:"gesund (Adj.) → die Gesundheit (Nomen)"},
{q:"Freude → ___ (Adjektiv)",opts:["freudig","freudsam","freuend","freudvoll"],ans:"freudig",rule:"Freude (Nomen) → freudig (Adj.)"},
{q:"Kritik → ___ (Verb)",opts:["kritisieren","kritiken","kritikmachen","kritikieren"],ans:"kritisieren",rule:"Kritik (Nomen) → kritisieren (Verb)"},
{q:"glücklich → ___ (Nomen)",opts:["Glück","Glücklichkeit","Glücke","Glücknis"],ans:"Glück",rule:"glücklich (Adj.) → das Glück (Nomen)"},
{q:"Gefahr → ___ (Adjektiv)",opts:["gefährlich","gefahrvoll","gefahrend","gefährt"],ans:"gefährlich",rule:"Gefahr (Nomen) → gefährlich (Adj.)"},
{q:"ängstlich → ___ (Nomen)",opts:["Angst","Ängstlichkeit","Ängste","Ängstnis"],ans:"Angst",rule:"ängstlich (Adj.) → die Angst (Nomen)"},
{q:"schlafen → ___ (Nomen, Handlung)",opts:["Schlaf","Schlafe","Schläfe","Schlafen"],ans:"Schlaf",rule:"schlafen (Verb) → der Schlaf (Nomen)"},
{q:"Hunger → ___ (Adjektiv)",opts:["hungrig","hungernd","hungervoll","hungerisch"],ans:"hungrig",rule:"Hunger (Nomen) → hungrig (Adj.)"},
{q:"arbeitslos → ___ (Nomen)",opts:["Arbeitslosigkeit","Arbeitslose","Arbeitlosnis","Arbeitlosheit"],ans:"Arbeitslosigkeit",rule:"arbeitslos (Adj.) → die Arbeitslosigkeit (Nomen)"},
{q:"Entscheidung → ___ (Verb)",opts:["entscheiden","entscheidigen","entscheider","entscheidieren"],ans:"entscheiden",rule:"Entscheidung (Nomen) → (sich) entscheiden (Verb)"},
{q:"einsam → ___ (Nomen)",opts:["Einsamkeit","Einsamnis","Einsamung","Einsame"],ans:"Einsamkeit",rule:"einsam (Adj.) → die Einsamkeit (Nomen)"},
{q:"Vorsicht → ___ (Adjektiv)",opts:["vorsichtig","vorsichtlich","vorsam","vorsorglich"],ans:"vorsichtig",rule:"Vorsicht (Nomen) → vorsichtig (Adj.)"},
{q:"Erklärung → ___ (Verb)",opts:["erklären","erklärtigen","erklärieren","erklärtigen"],ans:"erklären",rule:"Erklärung (Nomen) → erklären (Verb)"},
{q:"traurig → ___ (Nomen)",opts:["Traurigkeit","Traure","Traurignis","Traurung"],ans:"Traurigkeit",rule:"traurig (Adj.) → die Traurigkeit (Nomen)"},
{q:"Erfolg → ___ (Adjektiv)",opts:["erfolgreich","erfolgig","erfolgvoll","erfolgtend"],ans:"erfolgreich",rule:"Erfolg (Nomen) → erfolgreich (Adj.)"},
{q:"Wohnung → ___ (Verb)",opts:["wohnen","wohnigen","wohnieren","bewohnigen"],ans:"wohnen",rule:"Wohnung (Nomen) → wohnen (Verb)"},
{q:"wütend → ___ (Nomen)",opts:["Wut","Wütigkeit","Wütheit","Wütnis"],ans:"Wut",rule:"wütend (Adj.) → die Wut (Nomen)"},
{q:"Ruhe → ___ (Adjektiv)",opts:["ruhig","ruhsam","ruhbar","ruhend"],ans:"ruhig",rule:"Ruhe (Nomen) → ruhig (Adj.)"},
{q:"Verbesserung → ___ (Verb)",opts:["verbessern","verbesserieren","verbessergen","verbeesern"],ans:"verbessern",rule:"Verbesserung (Nomen) → verbessern (Verb)"},
{q:"sparsam → ___ (Nomen)",opts:["Sparsamkeit","Sparheit","Sparnis","Sparschaft"],ans:"Sparsamkeit",rule:"sparsam (Adj.) → die Sparsamkeit (Nomen)"},
{q:"Vertrauen → ___ (Adjektiv)",opts:["vertrauensvoll","vertrauendig","vertrauensam","vertrauend"],ans:"vertrauensvoll",rule:"Vertrauen (Nomen) → vertrauensvoll (Adj.)"},
{q:"Kauf → ___ (Verb)",opts:["kaufen","käufen","kauf","kaufieren"],ans:"kaufen",rule:"Kauf (Nomen) → kaufen (Verb)"},
{q:"interessant → ___ (Nomen)",opts:["Interesse","Interessantheit","Interessankeit","Interessanz"],ans:"Interesse",rule:"interessant (Adj.) → das Interesse (Nomen)"},
{q:"Freundschaft → ___ (Adjektiv)",opts:["freundschaftlich","freundige","freundbar","freundend"],ans:"freundschaftlich",rule:"Freundschaft (Nomen) → freundschaftlich (Adj.)"},
{q:"Besuch → ___ (Verb)",opts:["besuchen","besuchieren","besuchten","besuchtigen"],ans:"besuchen",rule:"Besuch (Nomen) → besuchen (Verb)"},
{q:"gefährlich → ___ (Nomen)",opts:["Gefahr","Gefährlichkeit","Gefährnis","Gefahrung"],ans:"Gefahr",rule:"gefährlich (Adj.) → die Gefahr (Nomen)"},
{q:"Schlaf → ___ (Adjektiv)",opts:["schläfrig","schlafig","schlafend","schläftend"],ans:"schläfrig",rule:"Schlaf (Nomen) → schläfrig (Adj.)"},
{q:"Hoffnung → ___ (Verb)",opts:["hoffen","hoffnen","hofftieren","erhofften"],ans:"hoffen",rule:"Hoffnung (Nomen) → hoffen (Verb)"},
{q:"ökologisch → ___ (Nomen)",opts:["Ökologie","Ökologismus","Ökologe","Ökologistik"],ans:"Ökologie",rule:"ökologisch (Adj.) → die Ökologie (Nomen)"},
{q:"Energie → ___ (Adjektiv)",opts:["energisch","energielos","energetisch","energievoll"],ans:"energisch",rule:"Energie (Nomen) → energisch (Adj.)"}
]},

// ──────────────────────────────────────────────────────────────────
// 1. WORTSCHATZ — Komposita
// ──────────────────────────────────────────────────────────────────
{type:"grammatik", name:"Wortschatz – Komposita",
 desc:"Wählen Sie das korrekte Kompositum mit Artikel!", perItem:0.5,
 items:[
{q:"Küche + Messer → ___",opts:["das Küchenmesser","der Küchenmesser","die Küchenmesser","das Küchermesser"],ans:"das Küchenmesser",rule:"Küche + Messer → das Küchenmesser (Neutrum)"},
{q:"Schlaf + Zimmer → ___",opts:["das Schlafzimmer","der Schlafzimmer","die Schlafzimmern","das Schlafzimmert"],ans:"das Schlafzimmer",rule:"Schlaf + Zimmer → das Schlafzimmer (Neutrum)"},
{q:"Frei + Zeit → ___",opts:["die Freizeit","das Freizeit","der Freizeit","die Freiheitszeit"],ans:"die Freizeit",rule:"Frei + Zeit → die Freizeit (Feminin)"},
{q:"Schreib + Tisch → ___",opts:["der Schreibtisch","das Schreibtisch","die Schreibtische","der Schreibtischen"],ans:"der Schreibtisch",rule:"Schreib + Tisch → der Schreibtisch (Maskulin)"},
{q:"Kühl + Schrank → ___",opts:["der Kühlschrank","das Kühlschrank","die Kühlschrankheit","der Kühlschrankung"],ans:"der Kühlschrank",rule:"Kühl + Schrank → der Kühlschrank (Maskulin)"},
{q:"Hand + Tasche → ___",opts:["die Handtasche","der Handtasche","das Handtasche","die Handtaschen"],ans:"die Handtasche",rule:"Hand + Tasche → die Handtasche (Feminin)"},
{q:"Haus + Aufgabe → ___",opts:["die Hausaufgabe","der Hausaufgabe","das Hausaufgabe","das Hausaufwerk"],ans:"die Hausaufgabe",rule:"Haus + Aufgabe → die Hausaufgabe (Feminin)"},
{q:"Kopf + Schmerzen → ___",opts:["die Kopfschmerzen","der Kopfschmerzen","das Kopfschmerzen","den Kopfschmerzen"],ans:"die Kopfschmerzen",rule:"Kopf + Schmerzen → die Kopfschmerzen (Plural, Feminin)"},
{q:"Geburt + Tag → ___",opts:["der Geburtstag","das Geburtstag","die Geburtstage","der Geburtstagen"],ans:"der Geburtstag",rule:"Geburt + Tag → der Geburtstag (Maskulin)"},
{q:"Bahn + Steig → ___",opts:["der Bahnsteig","das Bahnsteig","die Bahnsteige","der Bahnensteig"],ans:"der Bahnsteig",rule:"Bahn + Steig → der Bahnsteig (Maskulin)"},
{q:"Sport + Platz → ___",opts:["der Sportplatz","das Sportplatz","die Sportplätze","der Sportenplatz"],ans:"der Sportplatz",rule:"Sport + Platz → der Sportplatz (Maskulin)"},
{q:"Speise + Karte → ___",opts:["die Speisekarte","der Speisekarte","das Speisekarte","die Speisekartung"],ans:"die Speisekarte",rule:"Speise + Karte → die Speisekarte (Feminin)"},
{q:"Krank + Haus → ___",opts:["das Krankenhaus","der Krankenhaus","die Krankenhäuser","das Krankhaus"],ans:"das Krankenhaus",rule:"Krank(en) + Haus → das Krankenhaus (Neutrum)"},
{q:"Haupt + Bahnhof → ___",opts:["der Hauptbahnhof","das Hauptbahnhof","die Hauptbahnhöfe","der Hauptbahnhofe"],ans:"der Hauptbahnhof",rule:"Haupt + Bahnhof → der Hauptbahnhof (Maskulin)"},
{q:"Tag + Zeitung → ___",opts:["die Tageszeitung","der Tageszeitung","das Tageszeitung","die Tagzeitung"],ans:"die Tageszeitung",rule:"Tages + Zeitung → die Tageszeitung (Feminin)"},
{q:"Fenster + Bank → ___",opts:["die Fensterbank","der Fensterbank","das Fensterbank","die Fensterbänke"],ans:"die Fensterbank",rule:"Fenster + Bank → die Fensterbank (Feminin)"},
{q:"Welt + Meisterschaft → ___",opts:["die Weltmeisterschaft","der Weltmeisterschaft","das Weltmeisterschaft","die Weltmeisterklasse"],ans:"die Weltmeisterschaft",rule:"Welt + Meisterschaft → die Weltmeisterschaft (Feminin)"},
{q:"Sprach + Kurs → ___",opts:["der Sprachkurs","das Sprachkurs","die Sprachkurse","der Sprachencourse"],ans:"der Sprachkurs",rule:"Sprach + Kurs → der Sprachkurs (Maskulin)"},
{q:"Berufs + Schule → ___",opts:["die Berufsschule","der Berufsschule","das Berufsschule","die Berufschule"],ans:"die Berufsschule",rule:"Berufs + Schule → die Berufsschule (Feminin)"},
{q:"Telefon + Nummer → ___",opts:["die Telefonnummer","der Telefonnummer","das Telefonnummer","die Telefonnummern"],ans:"die Telefonnummer",rule:"Telefon + Nummer → die Telefonnummer (Feminin)"},
{q:"Wohn + Zimmer → ___",opts:["das Wohnzimmer","der Wohnzimmer","die Wohnzimmer","das Wohnzimmert"],ans:"das Wohnzimmer",rule:"Wohn + Zimmer → das Wohnzimmer (Neutrum)"},
{q:"Neben + Wirkung → ___",opts:["die Nebenwirkung","der Nebenwirkung","das Nebenwirkung","die Nebenwirkungheit"],ans:"die Nebenwirkung",rule:"Neben + Wirkung → die Nebenwirkung (Feminin)"},
{q:"Straßen + Bahn → ___",opts:["die Straßenbahn","der Straßenbahn","das Straßenbahn","die Straßenbahnen"],ans:"die Straßenbahn",rule:"Straßen + Bahn → die Straßenbahn (Feminin)"},
{q:"Sommer + Urlaub → ___",opts:["der Sommerurlaub","das Sommerurlaub","die Sommerurlaube","der Sommerferien"],ans:"der Sommerurlaub",rule:"Sommer + Urlaub → der Sommerurlaub (Maskulin)"},
{q:"Fußgänger + Zone → ___",opts:["die Fußgängerzone","der Fußgängerzone","das Fußgängerzone","die Fußgängerzonen"],ans:"die Fußgängerzone",rule:"Fußgänger + Zone → die Fußgängerzone (Feminin)"},
{q:"Haupt + Gericht → ___",opts:["das Hauptgericht","der Hauptgericht","die Hauptgerichte","das Hauptgerichtung"],ans:"das Hauptgericht",rule:"Haupt + Gericht → das Hauptgericht (Neutrum)"},
{q:"Brief + Kasten → ___",opts:["der Briefkasten","das Briefkasten","die Briefkästen","der Brief-Kasten"],ans:"der Briefkasten",rule:"Brief + Kasten → der Briefkasten (Maskulin)"},
{q:"Arbeits + Zimmer → ___",opts:["das Arbeitszimmer","der Arbeitszimmer","die Arbeitszimmer","das Arbeitszimmert"],ans:"das Arbeitszimmer",rule:"Arbeits + Zimmer → das Arbeitszimmer (Neutrum)"},
{q:"Sonnen + Brille → ___",opts:["die Sonnenbrille","der Sonnenbrille","das Sonnenbrille","die Sonnenbrillen"],ans:"die Sonnenbrille",rule:"Sonnen + Brille → die Sonnenbrille (Feminin)"},
{q:"Kinder + Garten → ___",opts:["der Kindergarten","das Kindergarten","die Kindergärten","der Kindgarten"],ans:"der Kindergarten",rule:"Kinder + Garten → der Kindergarten (Maskulin)"}
]},

// ──────────────────────────────────────────────────────────────────
// 2. WORTSCHATZ — Synonyme
// ──────────────────────────────────────────────────────────────────
{type:"grammatik", name:"Wortschatz – Synonyme",
 desc:"Finden Sie das passende Synonym!", perItem:0.5,
 items:[
{q:"Synonym für 'beginnen'",opts:["anfangen","aufhören","beenden","fertigstellen"],ans:"anfangen",rule:"beginnen = anfangen (Verb, Gegenteil: aufhören)"},
{q:"Synonym für 'verbieten'",opts:["untersagen","erlauben","genehmigen","gestatten"],ans:"untersagen",rule:"verbieten = untersagen (formal)"},
{q:"Synonym für 'antworten'",opts:["erwidern","fragen","nachfragen","bitten"],ans:"erwidern",rule:"antworten = erwidern (etwas zurücksagen)"},
{q:"Synonym für 'Nachtisch'",opts:["Dessert","Vorspeise","Hauptspeise","Beilage"],ans:"Dessert",rule:"der Nachtisch = das Dessert (Nachspeise)"},
{q:"Synonym für 'herstellen'",opts:["produzieren","verkaufen","kaufen","liefern"],ans:"produzieren",rule:"herstellen = produzieren (fertigen)"},
{q:"Synonym für 'aufmachen'",opts:["öffnen","schließen","zumachen","sperren"],ans:"öffnen",rule:"aufmachen = öffnen (Gegenteil: zumachen)"},
{q:"Synonym für 'Ende'",opts:["Schluss","Anfang","Beginn","Start"],ans:"Schluss",rule:"das Ende = der Schluss (Gegenteil: der Anfang)"},
{q:"Synonym für 'bekommen'",opts:["erhalten","verlieren","geben","abgeben"],ans:"erhalten",rule:"bekommen = erhalten (empfangen)"},
{q:"Synonym für 'sprechen'",opts:["reden","schreiben","lesen","hören"],ans:"reden",rule:"sprechen = reden (kommunizieren)"},
{q:"Synonym für 'schön' (beeindruckend)",opts:["herrlich","hässlich","langweilig","schrecklich"],ans:"herrlich",rule:"schön = herrlich (wunderschön, prachtvoll)"},
{q:"Synonym für 'Mut'",opts:["Tapferkeit","Angst","Schwäche","Feigheit"],ans:"Tapferkeit",rule:"der Mut = die Tapferkeit (Courage)"},
{q:"Synonym für 'Problem'",opts:["Schwierigkeit","Lösung","Antwort","Ergebnis"],ans:"Schwierigkeit",rule:"das Problem = die Schwierigkeit"},
{q:"Synonym für 'lachen'",opts:["grinsen","weinen","klagen","seufzen"],ans:"grinsen",rule:"lachen = grinsen (breit lächeln)"},
{q:"Synonym für 'wütend'",opts:["zornig","glücklich","freudig","ruhig"],ans:"zornig",rule:"wütend = zornig (ärgerlich, aufgebracht)"},
{q:"Synonym für 'Fehler'",opts:["Irrtum","Erfolg","Leistung","Ergebnis"],ans:"Irrtum",rule:"der Fehler = der Irrtum (Versehen)"},
{q:"Synonym für 'sofort'",opts:["unverzüglich","langsam","später","irgendwann"],ans:"unverzüglich",rule:"sofort = unverzüglich (ohne Verzögerung)"},
{q:"Synonym für 'fragen'",opts:["sich erkundigen","antworten","behaupten","bestreiten"],ans:"sich erkundigen",rule:"fragen = sich erkundigen (Informationen einholen)"},
{q:"Synonym für 'oft'",opts:["häufig","selten","manchmal","niemals"],ans:"häufig",rule:"oft = häufig (Gegenteil: selten)"},
{q:"Synonym für 'arbeiten'",opts:["tätig sein","faulenzen","schlafen","ruhen"],ans:"tätig sein",rule:"arbeiten = tätig sein (beschäftigt sein)"},
{q:"Synonym für 'kaufen'",opts:["erwerben","verkaufen","verleihen","verlieren"],ans:"erwerben",rule:"kaufen = erwerben (in Besitz nehmen)"},
{q:"Synonym für 'gefährlich'",opts:["riskant","sicher","harmlos","ungefährlich"],ans:"riskant",rule:"gefährlich = riskant (mit Risiko verbunden)"},
{q:"Synonym für 'Abschluss'",opts:["Ende","Anfang","Beginn","Start"],ans:"Ende",rule:"der Abschluss = das Ende (Beendigung)"},
{q:"Synonym für 'schwierig'",opts:["kompliziert","einfach","leicht","simpel"],ans:"kompliziert",rule:"schwierig = kompliziert (nicht einfach)"},
{q:"Synonym für 'helfen'",opts:["unterstützen","behindern","stören","aufhalten"],ans:"unterstützen",rule:"helfen = unterstützen (assistieren)"},
{q:"Synonym für 'Freund'",opts:["Kamerad","Feind","Gegner","Widersacher"],ans:"Kamerad",rule:"der Freund = der Kamerad (Kumpel, Begleiter)"},
{q:"Synonym für 'lernen'",opts:["sich aneignen","vergessen","ablehnen","verschieben"],ans:"sich aneignen",rule:"lernen = sich aneignen (Wissen aufnehmen)"},
{q:"Synonym für 'berühmt'",opts:["weltbekannt","unbekannt","anonym","geheim"],ans:"weltbekannt",rule:"berühmt = weltbekannt (sehr bekannt)"},
{q:"Synonym für 'schnell'",opts:["rasch","langsam","gemächlich","träge"],ans:"rasch",rule:"schnell = rasch (ohne Verzögerung)"},
{q:"Synonym für 'wichtig'",opts:["bedeutend","unwichtig","nebensächlich","trivial"],ans:"bedeutend",rule:"wichtig = bedeutend (von Bedeutung)"},
{q:"Synonym für 'Aufgabe'",opts:["Pflicht","Recht","Erlaubnis","Freiheit"],ans:"Pflicht",rule:"die Aufgabe = die Pflicht (Verpflichtung, Verantwortung)"}
]},

// ──────────────────────────────────────────────────────────────────
// 3. GRAMMATIK — Passiv umformen
// ──────────────────────────────────────────────────────────────────
{type:"lueckentext", name:"Grammatik – Passiv",
 desc:"Formen Sie den Satz ins Passiv um! Ordnen Sie die Wörter.", perItem:1.5,
 items:[
{satz:{text:"Die Schüler schreiben den Test. → Passiv:",start:"Der Test",words:["wird","von","den","Schülern","geschrieben"],models:["wird von den Schülern geschrieben"],ru:"Тест пишется учениками.",en:"The test is written by the pupils."}},
{satz:{text:"Der Koch kocht das Essen. → Passiv:",start:"Das Essen",words:["wird","vom","Koch","gekocht"],models:["wird vom Koch gekocht"],ru:"Еда готовится поваром.",en:"The food is cooked by the chef."}},
{satz:{text:"Die Lehrerin erklärt die Grammatik. → Passiv:",start:"Die Grammatik",words:["wird","von","der","Lehrerin","erklärt"],models:["wird von der Lehrerin erklärt"],ru:"Грамматика объясняется учительницей.",en:"The grammar is explained by the teacher."}},
{satz:{text:"Der Mechaniker repariert das Auto. → Passiv:",start:"Das Auto",words:["wird","vom","Mechaniker","repariert"],models:["wird vom Mechaniker repariert"],ru:"Машина ремонтируется механиком.",en:"The car is repaired by the mechanic."}},
{satz:{text:"Die Kinder singen das Lied. → Passiv:",start:"Das Lied",words:["wird","von","den","Kindern","gesungen"],models:["wird von den Kindern gesungen"],ru:"Песня поётся детьми.",en:"The song is sung by the children."}},
{satz:{text:"Der Arzt untersucht die Patientin. → Passiv:",start:"Die Patientin",words:["wird","vom","Arzt","untersucht"],models:["wird vom Arzt untersucht"],ru:"Пациентка осматривается врачом.",en:"The patient is examined by the doctor."}},
{satz:{text:"Die Studenten lesen den Text. → Passiv:",start:"Der Text",words:["wird","von","den","Studenten","gelesen"],models:["wird von den Studenten gelesen"],ru:"Текст читается студентами.",en:"The text is read by the students."}},
{satz:{text:"Die Mitarbeiterin schreibt den Bericht. → Passiv:",start:"Der Bericht",words:["wird","von","der","Mitarbeiterin","geschrieben"],models:["wird von der Mitarbeiterin geschrieben"],ru:"Отчёт пишется сотрудницей.",en:"The report is written by the employee."}},
{satz:{text:"Der Bäcker backt das Brot. → Passiv:",start:"Das Brot",words:["wird","vom","Bäcker","gebacken"],models:["wird vom Bäcker gebacken"],ru:"Хлеб печётся пекарем.",en:"The bread is baked by the baker."}},
{satz:{text:"Die Polizei kontrolliert die Ausweise. → Passiv:",start:"Die Ausweise",words:["werden","von","der","Polizei","kontrolliert"],models:["werden von der Polizei kontrolliert"],ru:"Документы проверяются полицией.",en:"The IDs are checked by the police."}},
{satz:{text:"Der Lehrer kündigte den Test an. → Passiv (Vergangenheit):",start:"Der Test",words:["wurde","vom","Lehrer","angekündigt"],models:["wurde vom Lehrer angekündigt"],ru:"Тест был объявлен учителем.",en:"The test was announced by the teacher."}},
{satz:{text:"Die Forscher entdeckten das Medikament. → Passiv:",start:"Das Medikament",words:["wurde","von","den","Forschern","entdeckt"],models:["wurde von den Forschern entdeckt"],ru:"Лекарство было открыто учёными.",en:"The medicine was discovered by the researchers."}},
{satz:{text:"Die Schüler stellten viele Fragen. → Passiv:",start:"Viele Fragen",words:["wurden","von","den","Schülern","gestellt"],models:["wurden von den Schülern gestellt"],ru:"Много вопросов было задано учениками.",en:"Many questions were asked by the pupils."}},
{satz:{text:"Die Firma schickte das Paket. → Passiv:",start:"Das Paket",words:["wurde","von","der","Firma","geschickt"],models:["wurde von der Firma geschickt"],ru:"Посылка была отправлена фирмой.",en:"The package was sent by the company."}},
{satz:{text:"Der Architekt entwarf das Gebäude. → Passiv:",start:"Das Gebäude",words:["wurde","vom","Architekten","entworfen"],models:["wurde vom Architekten entworfen"],ru:"Здание было спроектировано архитектором.",en:"The building was designed by the architect."}},
{satz:{text:"Die Mutter bereitete das Mittagessen vor. → Passiv:",start:"Das Mittagessen",words:["wurde","von","der","Mutter","vorbereitet"],models:["wurde von der Mutter vorbereitet"],ru:"Обед был приготовлен мамой.",en:"Lunch was prepared by the mother."}},
{satz:{text:"Der Techniker installierte die Anlage. → Passiv:",start:"Die Anlage",words:["wurde","vom","Techniker","installiert"],models:["wurde vom Techniker installiert"],ru:"Установка была смонтирована техником.",en:"The system was installed by the technician."}},
{satz:{text:"Die Wissenschaftler entwickelten die App. → Passiv:",start:"Die App",words:["wurde","von","den","Wissenschaftlern","entwickelt"],models:["wurde von den Wissenschaftlern entwickelt"],ru:"Приложение было разработано учёными.",en:"The app was developed by the scientists."}},
{satz:{text:"Der Regisseur drehte den Film. → Passiv:",start:"Der Film",words:["wurde","vom","Regisseur","gedreht"],models:["wurde vom Regisseur gedreht"],ru:"Фильм был снят режиссёром.",en:"The film was directed by the director."}},
{satz:{text:"Die Reinigungskraft putzte das Zimmer. → Passiv:",start:"Das Zimmer",words:["wurde","von","der","Reinigungskraft","geputzt"],models:["wurde von der Reinigungskraft geputzt"],ru:"Комната была убрана уборщицей.",en:"The room was cleaned by the cleaner."}},
{satz:{text:"Die Lehrerin korrigiert die Tests sofort. → Passiv:",start:"Die Tests",words:["werden","von","der","Lehrerin","sofort","korrigiert"],models:["werden von der Lehrerin sofort korrigiert"],ru:"Тесты сразу проверяются учительницей.",en:"The tests are corrected immediately by the teacher."}},
{satz:{text:"Die Sekretärin beantwortet die E-Mails. → Passiv:",start:"Die E-Mails",words:["werden","von","der","Sekretärin","beantwortet"],models:["werden von der Sekretärin beantwortet"],ru:"Имейлы отвечаются секретарём.",en:"The emails are answered by the secretary."}},
{satz:{text:"Die Feuerwehr löscht den Brand. → Passiv:",start:"Der Brand",words:["wird","von","der","Feuerwehr","gelöscht"],models:["wird von der Feuerwehr gelöscht"],ru:"Пожар тушится пожарными.",en:"The fire is extinguished by the fire brigade."}},
{satz:{text:"Der Kellner serviert das Essen. → Passiv:",start:"Das Essen",words:["wird","vom","Kellner","serviert"],models:["wird vom Kellner serviert"],ru:"Еда подаётся официантом.",en:"The food is served by the waiter."}},
{satz:{text:"Die Ärztin verschreibt das Medikament. → Passiv:",start:"Das Medikament",words:["wird","von","der","Ärztin","verschrieben"],models:["wird von der Ärztin verschrieben"],ru:"Лекарство выписывается врачом.",en:"The medicine is prescribed by the doctor."}},
{satz:{text:"Der Professor hält den Vortrag. → Passiv:",start:"Der Vortrag",words:["wird","vom","Professor","gehalten"],models:["wird vom Professor gehalten"],ru:"Доклад делается профессором.",en:"The lecture is given by the professor."}},
{satz:{text:"Die Studenten übersetzen den Text. → Passiv:",start:"Der Text",words:["wird","von","den","Studenten","übersetzt"],models:["wird von den Studenten übersetzt"],ru:"Текст переводится студентами.",en:"The text is translated by the students."}},
{satz:{text:"Der Vater wäscht das Auto. → Passiv:",start:"Das Auto",words:["wird","vom","Vater","gewaschen"],models:["wird vom Vater gewaschen"],ru:"Машина моется отцом.",en:"The car is washed by the father."}},
{satz:{text:"Die Mannschaft gewann das Spiel. → Passiv:",start:"Das Spiel",words:["wurde","von","der","Mannschaft","gewonnen"],models:["wurde von der Mannschaft gewonnen"],ru:"Матч был выигран командой.",en:"The game was won by the team."}},
{satz:{text:"Der Direktor eröffnete die Veranstaltung. → Passiv:",start:"Die Veranstaltung",words:["wurde","vom","Direktor","eröffnet"],models:["wurde vom Direktor eröffnet"],ru:"Мероприятие было открыто директором.",en:"The event was opened by the director."}}
]}

// ──────────────────────────────────────────────────────────────────
// 4. GRAMMATIK — Präpositionen
// ──────────────────────────────────────────────────────────────────
,{type:"grammatik", name:"Grammatik – Präpositionen",
 desc:"Setzen Sie die richtige Präposition ein!", perItem:0.5,
 items:[
{q:"Ich freue mich ___ das Wochenende.",opts:["auf","für","über","an"],ans:"auf",rule:"sich freuen auf + Akk. (Vorfreude)"},
{q:"Sie denkt oft ___ ihre Heimat.",opts:["an","auf","über","von"],ans:"an",rule:"denken an + Akk."},
{q:"Wir sprechen ___ das Wetter.",opts:["über","von","an","auf"],ans:"über",rule:"sprechen über + Akk."},
{q:"Er hat Angst ___ Hunden.",opts:["vor","von","bei","an"],ans:"vor",rule:"Angst haben vor + Dat."},
{q:"Die Klasse besteht ___ 20 Schülern.",opts:["aus","von","mit","für"],ans:"aus",rule:"bestehen aus + Dat."},
{q:"Ich interessiere mich ___ Musik.",opts:["für","an","über","auf"],ans:"für",rule:"sich interessieren für + Akk."},
{q:"Er träumt ___ einem Urlaub in Italien.",opts:["von","über","an","auf"],ans:"von",rule:"träumen von + Dat."},
{q:"Sie fragt ___ dem Weg.",opts:["nach","an","um","für"],ans:"nach",rule:"fragen nach + Dat."},
{q:"Ich verlasse mich ___ dich.",opts:["auf","von","an","bei"],ans:"auf",rule:"sich verlassen auf + Akk."},
{q:"Wir warten ___ den Bus.",opts:["auf","nach","an","bei"],ans:"auf",rule:"warten auf + Akk."},
{q:"Er beschäftigt sich ___ Literatur.",opts:["mit","an","über","von"],ans:"mit",rule:"sich beschäftigen mit + Dat."},
{q:"Ich bedanke mich ___ Ihre Hilfe.",opts:["für","über","an","von"],ans:"für",rule:"sich bedanken für + Akk."},
{q:"Sie klagt ___ Kopfschmerzen.",opts:["über","von","an","für"],ans:"über",rule:"klagen über + Akk."},
{q:"Das hängt ___ dem Wetter ab.",opts:["von","an","auf","über"],ans:"von",rule:"abhängen von + Dat."},
{q:"Ich freue mich ___ deinen Besuch.",opts:["über","auf","an","von"],ans:"über",rule:"sich freuen über + Akk. (Gegenwärtiges)"},
{q:"Er kämpft ___ seine Rechte.",opts:["für","über","von","an"],ans:"für",rule:"kämpfen für + Akk."},
{q:"Sie kümmert sich ___ die Kinder.",opts:["um","von","für","an"],ans:"um",rule:"sich kümmern um + Akk."},
{q:"Wir glauben ___ seine Unschuld.",opts:["an","auf","über","von"],ans:"an",rule:"glauben an + Akk."},
{q:"Er bittet ___ Hilfe.",opts:["um","für","an","von"],ans:"um",rule:"bitten um + Akk."},
{q:"Das liegt ___ der langen Entfernung.",opts:["an","auf","über","von"],ans:"an",rule:"liegen an + Dat. (Grund)"},
{q:"Ich erinnere mich ___ meinen Großvater.",opts:["an","auf","von","über"],ans:"an",rule:"sich erinnern an + Akk."},
{q:"Wir diskutieren ___ dieses Thema.",opts:["über","von","an","auf"],ans:"über",rule:"diskutieren über + Akk."},
{q:"Sie nimmt ___ dem Kurs teil.",opts:["an","bei","von","auf"],ans:"an",rule:"teilnehmen an + Dat."},
{q:"Er entschuldigt sich ___ den Fehler.",opts:["für","über","von","an"],ans:"für",rule:"sich entschuldigen für + Akk."},
{q:"Ich leide ___ starken Kopfschmerzen.",opts:["unter","an","von","über"],ans:"unter",rule:"leiden unter + Dat."},
{q:"Er zweifelt ___ ihrer Aussage.",opts:["an","auf","über","von"],ans:"an",rule:"zweifeln an + Dat."},
{q:"Wir sind uns ___ die Lösung einig.",opts:["über","an","von","auf"],ans:"über",rule:"sich einig sein über + Akk."},
{q:"Sie berichtet ___ ihre Reise.",opts:["über","von","an","auf"],ans:"über",rule:"berichten über + Akk."},
{q:"Ich achte ___ meine Gesundheit.",opts:["auf","an","über","von"],ans:"auf",rule:"achten auf + Akk."},
{q:"Er leidet ___ Schlafproblemen.",opts:["an","unter","von","über"],ans:"an",rule:"leiden an + Dat. (Krankheit)"}
]},

// ──────────────────────────────────────────────────────────────────
// 5. GRAMMATIK — Genitiv
// ──────────────────────────────────────────────────────────────────
{type:"grammatik", name:"Grammatik – Genitiv",
 desc:"Ergänzen Sie das Nomen im Genitiv!", perItem:0.5,
 items:[
{q:"Die Meinung ___ interessiert mich. (mein Vater)",opts:["meines Vaters","meinem Vater","meinen Vater","mein Vater"],ans:"meines Vaters",rule:"maskulin: meines Vaters"},
{q:"Das Ende ___ ist nah. (das Semester)",opts:["des Semesters","dem Semester","das Semester","des Semesteres"],ans:"des Semesters",rule:"neutrum: des Semesters"},
{q:"Die Qualität ___ ist gut. (die Ware)",opts:["der Ware","die Ware","der Waren","die Waren"],ans:"der Ware",rule:"feminin: der Ware"},
{q:"Das Ergebnis ___ war positiv. (die Prüfung)",opts:["der Prüfung","die Prüfung","der Prüfungen","die Prüfungen"],ans:"der Prüfung",rule:"feminin: der Prüfung"},
{q:"Der Titel ___ ist interessant. (das Buch)",opts:["des Buches","dem Buch","das Buch","des Buchen"],ans:"des Buches",rule:"neutrum: des Buches"},
{q:"Die Sprache ___ ist einfach. (ein Kind)",opts:["eines Kindes","einem Kind","ein Kind","des Kindes"],ans:"eines Kindes",rule:"neutrum (unbestimmt): eines Kindes"},
{q:"Der Beginn ___ ist um 9 Uhr. (der Unterricht)",opts:["des Unterrichts","dem Unterricht","den Unterricht","der Unterricht"],ans:"des Unterrichts",rule:"maskulin: des Unterrichts"},
{q:"Das Gehalt ___ ist niedrig. (die Lehrerin)",opts:["der Lehrerin","die Lehrerin","einer Lehrerin","der Lehrer"],ans:"der Lehrerin",rule:"feminin: der Lehrerin"},
{q:"Die Antwort ___ war überraschend. (meine Freundin)",opts:["meiner Freundin","meine Freundin","meiner Freunde","meinem Freund"],ans:"meiner Freundin",rule:"feminin (Possessiv): meiner Freundin"},
{q:"Das Haus ___ ist groß. (unsere Nachbarn)",opts:["unserer Nachbarn","unseren Nachbarn","unsere Nachbarn","unserer Nachbarschaft"],ans:"unserer Nachbarn",rule:"Plural: unserer Nachbarn"},
{q:"Der Preis ___ ist hoch. (das Produkt)",opts:["des Produkts","dem Produkt","das Produkt","des Produktes"],ans:"des Produkts",rule:"neutrum: des Produkts"},
{q:"Die Erklärung ___ war klar. (der Lehrer)",opts:["des Lehrers","dem Lehrer","den Lehrer","der Lehrer"],ans:"des Lehrers",rule:"maskulin: des Lehrers"},
{q:"Das Ziel ___ ist unklar. (unser Projekt)",opts:["unseres Projekts","unserem Projekt","unser Projekt","unserer Projekte"],ans:"unseres Projekts",rule:"neutrum (Possessiv): unseres Projekts"},
{q:"Die Hilfe ___ ist nötig. (ein Arzt)",opts:["eines Arztes","einem Arzt","ein Arzt","des Arztes"],ans:"eines Arztes",rule:"maskulin (unbestimmt): eines Arztes"},
{q:"Der Name ___ ist Wien. (die Stadt)",opts:["der Stadt","die Stadt","der Städte","einer Stadt"],ans:"der Stadt",rule:"feminin: der Stadt"},
{q:"Die Ergebnisse ___ sind beeindruckend. (die Forschung)",opts:["der Forschung","die Forschung","der Forschungen","des Forschens"],ans:"der Forschung",rule:"feminin: der Forschung"},
{q:"Das Ende ___ war unerwartet. (ihr Buch)",opts:["ihres Buches","ihrem Buch","ihr Buch","ihres Buchs"],ans:"ihres Buches",rule:"neutrum (Possessiv): ihres Buches"},
{q:"Die Stärke ___ ist beeindruckend. (dieser Mann)",opts:["dieses Mannes","diesem Mann","diesen Mann","dieser Mannes"],ans:"dieses Mannes",rule:"maskulin (Demonstrativ): dieses Mannes"},
{q:"Der Ton ___ ist schön. (die Musik)",opts:["der Musik","die Musik","die Musiken","den Musiken"],ans:"der Musik",rule:"feminin: der Musik"},
{q:"Die Meinungen ___ sind verschieden. (die Schüler)",opts:["der Schüler","die Schüler","den Schülern","der Schülerinnen"],ans:"der Schüler",rule:"Plural: der Schüler"},
{q:"Das Verhalten ___ überrascht uns. (das Kind)",opts:["des Kindes","dem Kind","das Kind","des Kinde"],ans:"des Kindes",rule:"neutrum: des Kindes"},
{q:"Die Wirkung ___ ist stark. (das Medikament)",opts:["des Medikaments","dem Medikament","das Medikament","des Medikamentes"],ans:"des Medikaments",rule:"neutrum: des Medikaments"},
{q:"Die Aufgabe ___ ist klar. (ein Mitarbeiter)",opts:["eines Mitarbeiters","einem Mitarbeiter","ein Mitarbeiter","einen Mitarbeiter"],ans:"eines Mitarbeiters",rule:"maskulin (unbestimmt): eines Mitarbeiters"},
{q:"Der Zweck ___ ist beruflich. (die Reise)",opts:["der Reise","die Reise","der Reisen","einer Reise"],ans:"der Reise",rule:"feminin: der Reise"},
{q:"Das Ergebnis ___ war gut. (seine Arbeit)",opts:["seiner Arbeit","seine Arbeit","seinen Arbeiten","seiner Arbeiter"],ans:"seiner Arbeit",rule:"feminin (Possessiv): seiner Arbeit"},
{q:"Die Kosten ___ sind hoch. (das Projekt)",opts:["des Projekts","dem Projekt","das Projekt","des Projektens"],ans:"des Projekts",rule:"neutrum: des Projekts"},
{q:"Der Inhalt ___ ist wichtig. (dieser Brief)",opts:["dieses Briefes","diesem Brief","diesen Brief","dieser Brief"],ans:"dieses Briefes",rule:"maskulin (Demonstrativ): dieses Briefes"},
{q:"Das Wohl ___ liegt mir am Herzen. (die Gesellschaft)",opts:["der Gesellschaft","die Gesellschaft","der Gesellschaften","einer Gesellschaft"],ans:"der Gesellschaft",rule:"feminin: der Gesellschaft"},
{q:"Die Umsetzung ___ ist schwierig. (ein Plan)",opts:["eines Plans","einem Plan","ein Plan","eines Planes"],ans:"eines Plans",rule:"maskulin (unbestimmt): eines Plans"},
{q:"Das Ziel ___ ist ein Abschluss. (die Studierenden)",opts:["der Studierenden","die Studierenden","der Studierende","den Studierenden"],ans:"der Studierenden",rule:"Plural (schwache Dekl.): der Studierenden"}
]},

// ──────────────────────────────────────────────────────────────────
// 6. GRAMMATIK — Relativpronomen
// ──────────────────────────────────────────────────────────────────
{type:"grammatik", name:"Grammatik – Relativpronomen",
 desc:"Ergänzen Sie das Relativpronomen (ggf. mit Präposition)!", perItem:0.5,
 items:[
{q:"Die Frau, ___ ich gestern getroffen habe, ist Ärztin.",opts:["die","der","das","dem"],ans:"die",rule:"Akkusativ feminin → die"},
{q:"Der Mann, ___ dort sitzt, ist mein Vater.",opts:["der","die","das","dem"],ans:"der",rule:"Nominativ maskulin → der"},
{q:"Das Buch, ___ ich gerade lese, ist spannend.",opts:["das","die","der","dem"],ans:"das",rule:"Akkusativ neutrum → das"},
{q:"Die Stadt, ___ ich liebe, heißt Wien.",opts:["die","der","das","dem"],ans:"die",rule:"Akkusativ feminin → die"},
{q:"Das ist der Kollege, ___ ich zusammenarbeite.",opts:["mit dem","mit der","für den","für die"],ans:"mit dem",rule:"mit + Dativ maskulin → mit dem"},
{q:"Das Problem, ___ wir diskutieren, ist komplex.",opts:["über das","über dem","über die","über den"],ans:"über das",rule:"über + Akkusativ neutrum → über das"},
{q:"Die Kinder, ___ auf dem Spielplatz spielen, sind laut.",opts:["die","der","das","denen"],ans:"die",rule:"Nominativ Plural → die"},
{q:"Der Zug, ___ ich täglich fahre, ist pünktlich.",opts:["mit dem","mit der","in dem","in die"],ans:"mit dem",rule:"mit + Dativ maskulin → mit dem"},
{q:"Die Lehrerin, ___ ich alles verdanke, war geduldig.",opts:["der","die","das","dem"],ans:"der",rule:"Dativ feminin → der"},
{q:"Das Restaurant, ___ mir gut gefällt, ist teuer.",opts:["das","die","der","dem"],ans:"das",rule:"Nominativ neutrum → das"},
{q:"Die Menschen, ___ hier leben, sind freundlich.",opts:["die","der","das","denen"],ans:"die",rule:"Nominativ Plural → die"},
{q:"Der Lehrer, ___ ich Deutsch lerne, ist erfahren.",opts:["bei dem","mit dem","von dem","für den"],ans:"bei dem",rule:"bei + Dativ maskulin → bei dem"},
{q:"Das Haus, ___ wir gekauft haben, ist schön.",opts:["das","die","der","dem"],ans:"das",rule:"Akkusativ neutrum → das"},
{q:"Die Aufgabe, ___ ich arbeite, ist schwierig.",opts:["an der","an dem","für die","für den"],ans:"an der",rule:"an + Dativ feminin → an der"},
{q:"Der Student, ___ Dissertation ausgezeichnet wurde, hat ein Stipendium.",opts:["dessen","deren","denen","dem"],ans:"dessen",rule:"Genitiv maskulin → dessen"},
{q:"Die Frau, ___ Kinder ich betreue, ist Ärztin.",opts:["deren","derer","denen","des"],ans:"deren",rule:"Genitiv feminin → deren"},
{q:"Das Projekt, ___ wir beteiligt sind, ist wichtig.",opts:["an dem","an der","für das","für die"],ans:"an dem",rule:"an + Dativ neutrum → an dem"},
{q:"Die Bücher, ___ auf dem Tisch liegen, gehören mir.",opts:["die","der","das","denen"],ans:"die",rule:"Nominativ Plural → die"},
{q:"Der Arzt, ___ ich vertraue, ist kompetent.",opts:["dem","der","den","das"],ans:"dem",rule:"Dativ maskulin → dem"},
{q:"Das Thema, ___ ich mich interessiere, ist Geschichte.",opts:["für das","für dem","für die","für den"],ans:"für das",rule:"für + Akkusativ neutrum → für das"},
{q:"Die Stadt, ___ ich aufgewachsen bin, liegt in Bayern.",opts:["in der","in dem","in das","in die"],ans:"in der",rule:"in + Dativ feminin (Ort) → in der"},
{q:"Der Film, ___ mir empfohlen wurde, war gut.",opts:["der","dem","die","das"],ans:"der",rule:"Nominativ maskulin (Passiv-Relativsatz) → der"},
{q:"Die Nachbarn, ___ ich helfe, sind dankbar.",opts:["denen","die","deren","dem"],ans:"denen",rule:"Dativ Plural → denen"},
{q:"Das Gespräch, ___ sie geführt haben, war wichtig.",opts:["das","die","der","dem"],ans:"das",rule:"Akkusativ neutrum → das"},
{q:"Der Politiker, ___ ich gestimmt habe, hat gewonnen.",opts:["für den","für dem","für die","für das"],ans:"für den",rule:"für + Akkusativ maskulin → für den"},
{q:"Die Universität, ___ ich studiere, ist modern.",opts:["an der","in der","für die","von der"],ans:"an der",rule:"an + Dativ feminin → an der"},
{q:"Das Land, ___ ich komme, ist Russland.",opts:["aus dem","aus der","aus das","aus den"],ans:"aus dem",rule:"aus + Dativ neutrum → aus dem"},
{q:"Die Idee, ___ er vorschlug, wurde abgelehnt.",opts:["die","der","das","dem"],ans:"die",rule:"Akkusativ feminin → die"},
{q:"Der Kurs, ___ ich mich angemeldet habe, beginnt bald.",opts:["für den","für dem","für die","an dem"],ans:"für den",rule:"für + Akkusativ maskulin → für den"},
{q:"Das Ergebnis, ___ wir gewartet haben, kam endlich.",opts:["auf das","auf dem","auf die","auf den"],ans:"auf das",rule:"auf + Akkusativ neutrum → auf das"}
]},

// ──────────────────────────────────────────────────────────────────
// 7. GRAMMATIK — Komparativ & Superlativ
// ──────────────────────────────────────────────────────────────────
{type:"grammatik", name:"Grammatik – Komparativ & Superlativ",
 desc:"Ergänzen Sie den Komparativ oder Superlativ!", perItem:0.5,
 items:[
{q:"Das ist das ___ Restaurant in Wien. (schön)",opts:["schönste","schönere","schöner","am schönen"],ans:"schönste",rule:"Superlativ + Artikel: das schönste"},
{q:"Sie läuft ___ als er. (schnell)",opts:["schneller","am schnellsten","schnellste","schnell"],ans:"schneller",rule:"Komparativ: schnell → schneller"},
{q:"Das ist das ___ Geschäft. (teuer)",opts:["teuerste","teurere","teures","teuersten"],ans:"teuerste",rule:"Superlativ + Artikel: das teuerste"},
{q:"Er ist ___ als sein Bruder. (jung)",opts:["jünger","am jüngsten","jungere","mehr jung"],ans:"jünger",rule:"Komparativ mit Umlaut: jung → jünger"},
{q:"Das ist das ___ Hotel. (gut)",opts:["beste","besser","gute","am besten"],ans:"beste",rule:"unregelmäßig: gut → besser → das beste"},
{q:"Heute ist es ___ als gestern. (kalt)",opts:["kälter","am kältesten","kältere","mehr kalt"],ans:"kälter",rule:"Komparativ mit Umlaut: kalt → kälter"},
{q:"Sie arbeitet ___ von allen. (fleißig)",opts:["am fleißigsten","fleißiger","die fleißigste","fleißigsten"],ans:"am fleißigsten",rule:"Superlativ prädikativ: am fleißigsten"},
{q:"Das Wetter heute ist ___ als gestern. (schlecht)",opts:["schlechter","am schlechtesten","schlimmer","mehr schlecht"],ans:"schlechter",rule:"Komparativ: schlecht → schlechter"},
{q:"Er ist der ___ Schüler in der Klasse. (gut)",opts:["beste","besser","am besten","gutste"],ans:"beste",rule:"Superlativ + Artikel: der beste (unregelmäßig)"},
{q:"Diese Aufgabe ist ___ als die andere. (leicht)",opts:["leichter","am leichtesten","leichte","mehr leicht"],ans:"leichter",rule:"Komparativ: leicht → leichter"},
{q:"Das ist der ___ Beruf. (interessant)",opts:["interessanteste","interessanter","interessantste","interessantere"],ans:"interessanteste",rule:"Superlativ + Artikel: der interessanteste"},
{q:"Er spricht ___ Deutsch als früher. (gut)",opts:["besser","am besten","mehr gut","gut"],ans:"besser",rule:"Komparativ unregelmäßig: gut → besser"},
{q:"Das ist das ___ Tier auf der Welt. (groß)",opts:["größte","größer","am größten","großste"],ans:"größte",rule:"Superlativ mit Umlaut: das größte"},
{q:"Sie kommt ___ als ihr Bruder nach Hause. (spät)",opts:["später","am spätesten","spätere","mehr spät"],ans:"später",rule:"Komparativ mit Umlaut: spät → später"},
{q:"Das ist der ___ Tag des Jahres. (kurz)",opts:["kürzeste","kürzer","kurzeste","kürzesten"],ans:"kürzeste",rule:"Superlativ mit Umlaut: der kürzeste"},
{q:"Er ist ___ als seine Schwester. (alt)",opts:["älter","am ältesten","altere","mehr alt"],ans:"älter",rule:"Komparativ mit Umlaut: alt → älter"},
{q:"Das Essen hier ist ___ als im anderen Restaurant. (lecker)",opts:["leckerer","am leckersten","leckere","mehr lecker"],ans:"leckerer",rule:"Komparativ: lecker → leckerer"},
{q:"Sie ist die ___ Studentin in ihrem Semester. (intelligent)",opts:["intelligenteste","intelligenter","am intelligentesten","intelligentste"],ans:"intelligenteste",rule:"Superlativ + Artikel: die intelligenteste"},
{q:"Je ___ der Kurs ist, desto mehr Teilnehmer gibt es. (populär)",opts:["populärer","populärste","am populärsten","mehr populär"],ans:"populärer",rule:"je...desto immer Komparativ: je populärer"},
{q:"Das ist das ___ Problem. (groß)",opts:["größte","am größten","größer","am großen"],ans:"größte",rule:"Superlativ + Artikel: das größte"},
{q:"Er hat ___ Geld als sie. (viel)",opts:["mehr","am meisten","mehrere","viele"],ans:"mehr",rule:"unregelmäßig: viel → mehr"},
{q:"Sie hat ___ Bücher als er. (wenig)",opts:["weniger","am wenigsten","wenigere","wenig"],ans:"weniger",rule:"unregelmäßig: wenig → weniger"},
{q:"Das ist der ___ Weg nach Hause. (kurz)",opts:["kürzeste","kürzere","am kürzesten","kurzeste"],ans:"kürzeste",rule:"Superlativ + Artikel: der kürzeste"},
{q:"Heute bin ich ___ als gestern. (müde)",opts:["müder","am müdesten","müdere","mehr müde"],ans:"müder",rule:"Komparativ: müde → müder"},
{q:"Welche Stadt ist die ___ der Welt? (schön)",opts:["schönste","schönere","am schönsten","schöne"],ans:"schönste",rule:"Superlativ + Artikel: die schönste"},
{q:"Er ist der ___ Sportler unserer Schule. (schnell)",opts:["schnellste","schnellere","am schnellsten","schnelle"],ans:"schnellste",rule:"Superlativ + Artikel: der schnellste"},
{q:"Diese Lösung ist ___ als die andere. (praktisch)",opts:["praktischer","am praktischsten","praktische","mehr praktisch"],ans:"praktischer",rule:"Komparativ: praktisch → praktischer"},
{q:"Das Wetter im Sommer ist ___ als im Winter. (warm)",opts:["wärmer","am wärmsten","wärmere","mehr warm"],ans:"wärmer",rule:"Komparativ mit Umlaut: warm → wärmer"},
{q:"Sie hat ___ Erfahrung als er. (viel)",opts:["mehr","mehrere","am meisten","viele"],ans:"mehr",rule:"unregelmäßig: viel → mehr"},
{q:"Das ist das ___ Zimmer im Hotel. (klein)",opts:["kleinste","kleinere","kleiner","am kleinsten"],ans:"kleinste",rule:"Superlativ + Artikel: das kleinste"}
]},

// ──────────────────────────────────────────────────────────────────
// 8. SCHRIFTLICHE PRODUKTION
// ──────────────────────────────────────────────────────────────────
{type:"schreiben", name:"Schriftliche Produktion",
 prompt:"Argumentation: Schreiben Sie einen Text von 180–200 Wörtern zu einem der beiden Themen. Sie erhalten Punkte für Inhalt, Aufbau, Wortschatz und Sprachrichtigkeit.\n\nThema 1: „Du bist, was du isst.“\n• Was halten Sie von dieser Aussage?\n• Warum ist dieses Thema für viele Menschen wichtig?\n• Was für eine Rolle spielt dieses Thema für Sie und warum?\n• Was essen Sie persönlich am liebsten und warum?\n• Welche Tipps zum Thema Essen haben Sie?\n\nThema 2: „Ich brauche keine Geschäfte, denn ich kaufe nur online ein.“\n• Was halten Sie von dieser Aussage?\n• Aus welchen Gründen kaufen Ihrer Meinung nach immer mehr Menschen online ein?\n• Was sind die Vor- und Nachteile von Online-Shopping?\n• Worauf sollte man beim Einkaufen im Internet achten?\n• Was ist für Sie beim Einkaufen wichtig? Warum?",
 tip:"Achten Sie auf: 1) Satz- und Textverknüpfungsmittel (weil, deshalb, obwohl, trotzdem, außerdem, jedoch, einerseits…andererseits). 2) Einleitung + Hauptteil + Schluss. 3) Eigene Meinung + Begründung. Ziel: 180–200 Wörter."}


]; // end EV_ZT3_SECTIONS

// Inject into VWU after vwu.js is loaded
(function(){
  if(typeof VWU==='undefined') return;
  const ev=VWU.levels.find(function(l){return l.id==='ev';});
  if(!ev) return;
  const t=ev.tests.find(function(t){return t.id==='ev_zt3';});
  if(!t) return;
  t.empty=false;
  t.sections=EV_ZT3_SECTIONS;
})();
