// VWU Prüfungsvorbereitung — Grammatik + Schreiben
const VWU = {
  levels: [
    // ===== AV — Aufnahmevoraussetzungen (A2-B1) =====
    {
      id:"av", name:"AV — Aufnahmevoraussetzungen", desc:"Grundgrammatik A2-B1",
      tests:[
        // --- AV ZT1: Perfekt, Dativ/Akkusativ, Nebensätze ---
        {id:"av_zt1", name:"Zwischentest 1", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"av1_01",q:"Ich ___ gestern ins Kino gegangen.",opts:["bin","habe","werde","war"],ans:"bin",rule:"Perfekt mit sein bei Bewegung"},
            {id:"av1_02",q:"Er ___ das Buch gelesen.",opts:["hat","ist","wird","hatte"],ans:"hat",rule:"Perfekt mit haben bei transitiven Verben"},
            {id:"av1_03",q:"Wir haben den Film ___.",opts:["gesehen","sehen","geseht","seht"],ans:"gesehen",rule:"Partizip II von sehen"},
            {id:"av1_04",q:"Ich gebe ___ Freund das Buch.",opts:["meinem","meinen","mein","meiner"],ans:"meinem",rule:"Dativ nach geben"},
            {id:"av1_05",q:"Sie kauft ___ Kleid.",opts:["ein","einem","einen","einer"],ans:"ein",rule:"Akkusativ: ein Kleid (neutrum)"},
            {id:"av1_06",q:"Ich bleibe zu Hause, ___ ich krank bin.",opts:["weil","denn","deshalb","trotzdem"],ans:"weil",rule:"weil + Verb am Ende"},
            {id:"av1_07",q:"Er sagt, ___ er morgen kommt.",opts:["dass","das","weil","ob"],ans:"dass",rule:"dass-Satz: Verb am Ende"},
            {id:"av1_08",q:"___ das Wetter schön ist, gehen wir spazieren.",opts:["Wenn","Wann","Als","Ob"],ans:"Wenn",rule:"wenn = если/когда (wiederholend)"},
            {id:"av1_09",q:"Ich habe ___ Mutter angerufen.",opts:["meine","meiner","meinem","meinen"],ans:"meine",rule:"Akkusativ: meine Mutter (fem.)"},
            {id:"av1_10",q:"Das Kind ___ im Park gespielt.",opts:["hat","ist","wird","wurde"],ans:"hat",rule:"Perfekt mit haben: spielen"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Schreiben Sie über Ihren Tagesablauf. Was machen Sie morgens, mittags und abends? (80-100 Wörter)",
           tip:"Benutzen Sie Zeitangaben: morgens, mittags, abends, dann, danach, zuerst, zum Schluss.",
           model:"Morgens stehe ich um 7 Uhr auf. Zuerst dusche ich und frühstücke. Dann fahre ich mit der U-Bahn zur Universität. Mittags esse ich in der Mensa. Nach dem Unterricht gehe ich in die Bibliothek. Abends koche ich zu Hause und sehe fern. Um 23 Uhr gehe ich ins Bett."}
        ]},

        // --- AV ZT2: Modalverben, Präpositionen, Wortstellung ---
        {id:"av_zt2", name:"Zwischentest 2", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"av2_01",q:"Ich ___ Deutsch lernen.",opts:["möchte","möchtet","möchtest","möchten"],ans:"möchte",rule:"Modalverb möchten: ich möchte"},
            {id:"av2_02",q:"Du ___ nicht so laut sprechen.",opts:["sollst","sollt","sollen","sollest"],ans:"sollst",rule:"Modalverb sollen: du sollst"},
            {id:"av2_03",q:"Hier ___ man nicht rauchen.",opts:["darf","darfst","dürfen","darft"],ans:"darf",rule:"Modalverb dürfen: man darf"},
            {id:"av2_04",q:"Ich fahre ___ dem Bus zur Arbeit.",opts:["mit","bei","von","zu"],ans:"mit",rule:"mit + Dativ: Transportmittel"},
            {id:"av2_05",q:"Das Buch liegt ___ dem Tisch.",opts:["auf","an","über","in"],ans:"auf",rule:"auf + Dativ: Wo? Auf dem Tisch"},
            {id:"av2_06",q:"Ich gehe ___ Hause.",opts:["nach","zu","in","bei"],ans:"nach",rule:"nach Hause = домой"},
            {id:"av2_07",q:"Morgen ___ ich zum Arzt gehen.",opts:["muss","musst","müssen","müsst"],ans:"muss",rule:"Modalverb müssen: ich muss"},
            {id:"av2_08",q:"Er wohnt ___ München.",opts:["in","an","auf","bei"],ans:"in",rule:"in + Stadt: in München"},
            {id:"av2_09",q:"___ Wochenende fahre ich nach Wien.",opts:["Am","Im","Um","Zum"],ans:"Am",rule:"am Wochenende"},
            {id:"av2_10",q:"Das Kind kann schon gut ___.",opts:["schwimmen","schwimmt","geschwommen","schwimme"],ans:"schwimmen",rule:"Modalverb + Infinitiv am Ende"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Schreiben Sie eine E-Mail an einen Freund. Laden Sie ihn zu Ihrer Geburtstagsparty ein. (80-100 Wörter)",
           tip:"Vergessen Sie nicht: Anrede, Einladung, Datum/Uhrzeit/Ort, Gruß am Ende.",
           model:"Lieber Tom, ich möchte dich zu meiner Geburtstagsparty einladen. Die Party ist am Samstag, den 15. Mai, um 19 Uhr. Wir feiern bei mir zu Hause. Es gibt Essen, Getränke und Musik. Kannst du kommen? Ich würde mich sehr freuen! Liebe Grüße, Anna"}
        ]},

        // --- AV ZT3: Komparativ, Imperativ, temporale Nebensätze ---
        {id:"av_zt3", name:"Zwischentest 3", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"av3_01",q:"Berlin ist ___ als München.",opts:["größer","groß","am größten","größerer"],ans:"größer",rule:"Komparativ: groß → größer"},
            {id:"av3_02",q:"Das ist der ___ Tag des Jahres.",opts:["längste","länger","lang","längster"],ans:"längste",rule:"Superlativ: der längste Tag"},
            {id:"av3_03",q:"___ bitte die Tür!",opts:["Öffne","Öffnen","Öffnest","Geöffnet"],ans:"Öffne",rule:"Imperativ du: Öffne!"},
            {id:"av3_04",q:"___ Sie bitte hier!",opts:["Warten","Wartet","Warte","Gewartet"],ans:"Warten",rule:"Imperativ Sie: Warten Sie!"},
            {id:"av3_05",q:"___ ich ein Kind war, spielte ich oft draußen.",opts:["Als","Wenn","Wann","Ob"],ans:"Als",rule:"als = когда (einmalig, Vergangenheit)"},
            {id:"av3_06",q:"Ich warte hier, ___ du kommst.",opts:["bis","seit","bevor","nachdem"],ans:"bis",rule:"bis = пока не"},
            {id:"av3_07",q:"___ er nach Hause kam, war er müde.",opts:["Als","Wenn","Wann","Ob"],ans:"Als",rule:"als + Vergangenheit (einmalig)"},
            {id:"av3_08",q:"Dieses Auto ist ___ teuer wie meins.",opts:["genauso","so","mehr","am meisten"],ans:"genauso",rule:"genauso...wie = так же...как"},
            {id:"av3_09",q:"___ laut! Die Nachbarn schlafen.",opts:["Seid nicht","Sein nicht","Sind nicht","Sei nicht"],ans:"Seid nicht",rule:"Imperativ ihr: Seid!"},
            {id:"av3_10",q:"___ dem Essen gehen wir spazieren.",opts:["Nach","Vor","Seit","Während"],ans:"Nach",rule:"nach + Dativ: nach dem Essen"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Beschreiben Sie Ihre Lieblingsstadt. Was gefällt Ihnen dort? Was kann man dort machen? (80-100 Wörter)",
           tip:"Benutzen Sie Adjektive und Vergleiche: größer als, schöner als, am besten...",
           model:"Meine Lieblingsstadt ist Wien. Wien ist die Hauptstadt von Österreich und eine der schönsten Städte Europas. Man kann dort viele Museen besuchen und die historische Architektur bewundern. Das Essen ist auch sehr gut. Am besten gefällt mir der Stephansdom. Im Sommer kann man in der Donau schwimmen. Wien ist größer als Graz, aber nicht so groß wie Berlin."}
        ]}
      ]
    },

    // ===== EV — Ergänzungsprüfung Vorstufe (B1-B2) =====
    {
      id:"ev", name:"EV — Ergänzungsprüfung Vorstufe", desc:"B1-B2 · Leseverstehen, Wortschatz, Strukturen, Grammatik, Schreiben",
      tests:[
        // --- EV ZT1 ---
        {id:"ev_zt1", name:"Zwischentest 1", sections:[
          // ---- LESEVERSTEHEN (9P) ----
          {type:"leseverstehen", name:"Leseverstehen", points:9,
           text:`<h3>Liebe aus dem Internet</h3>
<h4>Abschnitt A</h4>
<p>Viele Menschen suchen im Netz nach Schuhen, buchen eine Urlaubsreise oder wollen den Partner bzw. die Partnerin fürs Leben finden – oder einfach nur für eine Nacht. Onlineportale verdienen damit viel Geld.</p>
<p>Mehr als elf Millionen Nutzer*innen befinden sich regelmäßig auf Internetseiten, wo man Kontakte finden kann. Solche Seiten heißen auch Kontaktbörsen, Datingportale oder Singlebörsen. Im deutschsprachigen Raum gibt es 2500 Singlebörsen und da kann jede*r etwas finden. Es gibt Partnerbörsen für Senior*innen oder Singles mit Kindern. Es gibt Kontaktbörsen für Musikfans, für besonders große Menschen oder für besonders dicke Menschen. Für jede*n ist etwas dabei.</p>
<p>Die verschiedenen Kontaktbörsen verdienen viel Geld damit. Rund 186 Millionen Euro verdienen die Portale jährlich zusammen.</p>
<h4>Abschnitt B</h4>
<p>2014 kam die kostenfreie Dating-App „Tinder" auf den Markt. Bei Tinder kann man ganz einfach einen Partner*eine Partnerin aus der Umgebung finden, ihn oder sie kontaktieren und mit der Person chatten. Dabei kann man auch mitteilen, ob man sie mag oder nicht. Das ist bei jungen Leuten besonders beliebt. „Tinder" ist kostenlos, aber das ist für andere Datingportale kein Problem, denn bei Tinder suchen die Menschen niemanden für eine lebenslange Partnerschaft. Sie nutzen das Portal, weil sie sich nur einmal kurz treffen oder flirten wollen.</p>
<h4>Abschnitt C</h4>
<p>Trotzdem ist das Geschäft mit der Online-Liebe heute schwieriger. Die Onlineportale haben zum Beispiel immer wieder Probleme mit modernen „Heiratsschwindlern". Heiratsschwindler*innen sind Betrüger*innen, die keine Liebe, sondern Geld suchen. Sie wollen im Internet jemanden kennenlernen, der viel Geld hat. Dann sagen sie: „Ich liebe dich und möchte dich heiraten!" Und wenn sie das Geld haben, sind sie plötzlich weg. Solche Probleme können sogar am Ende dazu führen, dass einige Portale aufhören.</p>
<h4>Abschnitt D</h4>
<p>Die 37-jährige Britta hat im Internet aber gute Erfahrungen gemacht. Sie war mehrere Jahre auf einem Onlineportal aktiv und hat dort nicht nur Männer, sondern auch Freunde gefunden. Es hat ihr gefallen, dass sie zuerst nur von zu Hause aus im Internet Kontakt hatte. Auch ihren Ehemann hat Britta über ein Internetportal kennengelernt. „Man kann ein Internetportal nutzen", sagt sie, „aber man sollte auch sehr aufpassen, was man tut."</p>
<p>Britta empfiehlt, zu den ersten Treffen immer einen guten Freund oder eine Freundin mitzunehmen, damit man keine unangenehme Situation erlebt. Von diesem Freund oder dieser Freundin kann man sich später auch beraten lassen. Außerdem sollte man für die ersten Verabredungen immer nur öffentliche Orte auswählen, an denen sich auch viele andere Menschen befinden, wie zum Beispiel ein Kaffeehaus.</p>
<p>Britta selbst hat das so gemacht und Glück gehabt, denn heute lebt sie in einer harmonischen Partnerschaft.</p>`,
           questions:[
             {id:"ev1_lv1",q:"Was steht sinngemäß im Text? Kreuzen Sie an!",opts:["Es gibt besondere Portale für Menschen mit unterschiedlichen Interessen.","Ein Onlineportal allein verdient circa 186 Millionen Euro pro Jahr.","Mit Datingportalen kann man im deutschsprachigen Raum nicht viel Geld verdienen."],ans:0,points:1},
             {id:"ev1_lv2",q:"Was steht sinngemäß im Text?",opts:["Tinder ist eine kostenpflichtige App für ältere Menschen.","Bei Tinder suchen die Menschen eher keine feste Partnerschaft.","Tinder ist ein großes Problem für andere Datingportale."],ans:1,points:1},
             {id:"ev1_lv3",q:"Was steht sinngemäß im Text?",opts:["Heiratsschwindler suchen im Internet nach Liebe.","Betrüger auf Datingportalen wollen Geld von anderen Menschen.","Alle Onlineportale haben wegen Betrügern geschlossen."],ans:1,points:1},
             {id:"ev1_lv4",q:"Was steht sinngemäß im Text?",opts:["Britta hat nur schlechte Erfahrungen im Internet gemacht.","Britta hat ihren Mann über ein Internetportal kennengelernt.","Britta war nur wenige Wochen auf einem Onlineportal."],ans:1,points:1},
             {id:"ev1_lv5",q:"Was steht sinngemäß im Text?",opts:["Britta empfiehlt, allein zu den ersten Treffen zu gehen.","Man sollte sich an privaten Orten treffen.","Man sollte zum ersten Treffen einen Freund mitnehmen."],ans:2,points:1},
             {id:"ev1_lv6",q:"Richtig oder Falsch: Im deutschsprachigen Raum gibt es mehr als 2000 Singlebörsen.",opts:["Richtig","Falsch"],ans:0,points:1},
             {id:"ev1_lv7",q:"Richtig oder Falsch: Tinder kam 2010 auf den Markt.",opts:["Richtig","Falsch"],ans:1,points:1},
             {id:"ev1_lv8",q:"Richtig oder Falsch: Britta hat auf dem Portal auch Freunde gefunden.",opts:["Richtig","Falsch"],ans:0,points:1},
             {id:"ev1_lv9",q:"Richtig oder Falsch: Britta empfiehlt, sich an ruhigen, privaten Orten zu treffen.",opts:["Richtig","Falsch"],ans:1,points:1}
           ]},
          // ---- WORTSCHATZ (8P) ----
          {type:"wortschatz", name:"Wortschatz", points:8,
           tasks:[
             {type:"noun2verb",q:"Bilden Sie Verben aus den Nomen und setzen Sie sie ein!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
              example:{noun:"die Wohnung",verb:"wohnt",sentence:"Meine Familie wohnt in einem schönen Haus."},
              items:[
                {noun:"das Gespräch",sentence:"Ihr ___ oft über Politik.",answers:["sprecht","redet"]},
                {noun:"das Studium",sentence:"Wir planen, in Wien zu ___.",answers:["studieren"]},
                {noun:"der Anruf",sentence:"Er hat mir versprochen, dass er mich ___.",answers:["anruft"]},
                {noun:"die Ankunft",sentence:"Vermutlich ___ er um 17 Uhr.",answers:["kommt an","ankommt"]},
                {noun:"die Fahrt",sentence:"Herr Huber ___ meistens zu schnell.",answers:["fährt"]},
                {noun:"die Hilfe",sentence:"Du ___ deinem Bruder zu selten!",answers:["hilfst"]}
              ]},
             {type:"adjectives",q:"Markieren Sie die Adjektive!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
              words:["jetzt","klug","nun","durstig","still","tut","statt","leer","lässt","sowieso","treu","dann","nur","fein","ob","freiwillig"],
              correctIdxs:[1,3,7,10,13,15]},
             {type:"antonyms",q:"Was ist das Gegenteil? Schreiben Sie das Wort!",scoring:"4 x 0,5 = 2 P.",perItem:0.5,
              example:{word:"gemütlich",answer:"ungemütlich"},
              items:[
                {word:"einschalten",answers:["ausschalten"]},
                {word:"schnell",answers:["langsam"]},
                {word:"hell",answers:["dunkel"]},
                {word:"glücklich",answers:["unglücklich","traurig"]}
              ]}
           ]},
          // ---- GRAMMATIK (10P) ----
          {type:"grammatik", name:"Grammatik", items:[
            {id:"ev1_01",q:"Das Haus ___ gebaut.",opts:["wird","ist","hat","wurde"],ans:"wird",rule:"Passiv Präsens: werden + Partizip II"},
            {id:"ev1_02",q:"Die Briefe ___ jeden Tag geschrieben.",opts:["werden","sind","haben","wurden"],ans:"werden",rule:"Passiv Plural: werden + Partizip II"},
            {id:"ev1_03",q:"Wenn ich reich ___, würde ich reisen.",opts:["wäre","bin","sei","war"],ans:"wäre",rule:"Konjunktiv II: wäre"},
            {id:"ev1_04",q:"An deiner Stelle ___ ich zum Arzt gehen.",opts:["würde","werde","will","wollte"],ans:"würde",rule:"Konjunktiv II: würde + Infinitiv"},
            {id:"ev1_05",q:"Der Mann, ___ dort steht, ist mein Lehrer.",opts:["der","den","dem","dessen"],ans:"der",rule:"Relativpronomen Nominativ maskulin"},
            {id:"ev1_06",q:"Die Frau, ___ ich gestern getroffen habe, ist Ärztin.",opts:["die","der","dem","deren"],ans:"die",rule:"Relativpronomen Akkusativ feminin"},
            {id:"ev1_07",q:"Das Kind, ___ Mutter krank ist, bleibt zu Hause.",opts:["dessen","dem","das","den"],ans:"dessen",rule:"Relativpronomen Genitiv neutrum"},
            {id:"ev1_08",q:"Wenn ich Zeit ___, würde ich mehr Sport machen.",opts:["hätte","habe","habe","hatte"],ans:"hätte",rule:"Konjunktiv II: hätte"},
            {id:"ev1_09",q:"Das Auto ___ repariert.",opts:["wird","ist","hat","wurde"],ans:"wird",rule:"Passiv Präsens: Das Auto wird repariert"},
            {id:"ev1_10",q:"Die Leute, ___ ich helfe, sind dankbar.",opts:["denen","die","deren","den"],ans:"denen",rule:"Relativpronomen Dativ Plural"}
          ]},
          // ---- SCHREIBEN (20P) ----
          {type:"schreiben", name:"Textproduktion", prompt:"Erlebnisbericht: Sie sind Elena und arbeiten in den Sommerferien als Praktikantin in einem Hotel in den Tiroler Bergen. Sie schreiben Ihrer Freundin Anna eine E-Mail.\n\n• Beschreiben Sie: Warum sind Sie dort? Wie haben Sie diesen Job gefunden? Welche Erfahrungen haben Sie bisher gemacht?\n• Begründen Sie: Was hat Ihnen bisher gefallen? Was hat Ihnen nicht so gut gefallen? Warum?\n• Welche Tipps haben Sie für Ihre Freundin Anna, die auch einen Job als Praktikantin in einem Hotel sucht? Was ist wichtig?\n\nSchreiben Sie 140-160 Wörter. Verwenden Sie das Perfekt und komplexen Satzbau (als, dass, weil, wenn...).",
           tip:"Anrede + Einleitung + 3 Punkte beantworten + Gruß. Verwenden Sie: als, dass, weil, wenn, obwohl, um...zu.",
           model:"Liebe Anna,\n\nich schreibe dir aus Tirol! Ich arbeite seit drei Wochen als Praktikantin in einem kleinen Hotel in den Bergen. Ich habe den Job über eine Internetseite gefunden, als ich nach Sommerjobs gesucht habe.\n\nBis jetzt habe ich viele gute Erfahrungen gemacht. Am besten gefällt mir, dass ich mit Menschen aus verschiedenen Ländern sprechen kann. Außerdem ist die Natur hier wunderschön. Was mir nicht so gut gefällt, ist die Arbeitszeit, weil ich manchmal schon um 6 Uhr anfangen muss.\n\nWenn du auch einen Job in einem Hotel suchst, empfehle ich dir, früh zu suchen, weil die besten Stellen schnell vergeben sind. Es ist wichtig, dass du freundlich bist und gut mit Stress umgehen kannst.\n\nLiebe Grüße,\nElena"}
        ]},

        // --- EV ZT2 ---
        {id:"ev_zt2", name:"Zwischentest 2", sections:[
          // ---- LESEVERSTEHEN (9P) ----
          {type:"leseverstehen", name:"Leseverstehen", points:9,
           text:`<h3>Gesund leben in der Stadt</h3>
<h4>Abschnitt A</h4>
<p>Immer mehr Menschen in Österreich achten auf ihre Gesundheit. Sie kaufen Bio-Lebensmittel, gehen regelmäßig zum Sport und versuchen, Stress zu vermeiden. Besonders in den Großstädten wie Wien, Graz oder Linz gibt es viele Angebote für einen gesunden Lebensstil: Fitnessstudios, Yoga-Kurse, vegane Restaurants und Bioläden.</p>
<p>Eine Studie der Universität Wien zeigt, dass etwa 65 Prozent der Wiener*innen mindestens einmal pro Woche Sport treiben. Am beliebtesten sind Laufen, Radfahren und Schwimmen. Viele nutzen auch die Parks der Stadt, um sich zu bewegen.</p>
<h4>Abschnitt B</h4>
<p>Allerdings gibt es auch Probleme. Die Luftqualität in den Städten ist oft schlecht, besonders im Winter. Außerdem fehlt vielen Berufstätigen die Zeit für Sport und gesundes Kochen. Fast-Food-Restaurants sind oft billiger und schneller als gesunde Alternativen. Besonders junge Menschen zwischen 18 und 25 Jahren ernähren sich häufig ungesund, weil sie wenig Geld haben und nicht kochen können.</p>
<h4>Abschnitt C</h4>
<p>Die Stadt Wien hat deshalb verschiedene Programme gestartet. Es gibt kostenlose Sportangebote in Parks, zum Beispiel „Bewegung im Park" im Sommer. Außerdem wurde das Radwegenetz in den letzten Jahren stark ausgebaut. Heute kann man fast überall in Wien sicher Rad fahren.</p>
<p>Auch in den Schulen wird mehr für die Gesundheit getan. Die Kinder lernen im Unterricht, wie man gesund kocht, und in vielen Schulkantinen gibt es jetzt nur noch gesundes Essen.</p>
<h4>Abschnitt D</h4>
<p>Der 42-jährige Thomas aus Wien erzählt: „Vor fünf Jahren war ich übergewichtig und hatte oft Rückenschmerzen. Dann habe ich angefangen, dreimal pro Woche joggen zu gehen und mich gesünder zu ernähren. Heute fühle ich mich viel besser." Thomas empfiehlt, mit kleinen Änderungen anzufangen: „Man muss nicht sofort alles ändern. Es reicht, wenn man zum Beispiel jeden Tag eine halbe Stunde spazieren geht und mehr Gemüse isst."</p>`,
           questions:[
             {id:"ev2_lv1",q:"Was steht sinngemäß im Text?",opts:["In Wien gibt es wenige Möglichkeiten für Sport.","Etwa zwei Drittel der Wiener treiben regelmäßig Sport.","Die meisten Wiener gehen ins Fitnessstudio."],ans:1,points:1},
             {id:"ev2_lv2",q:"Was steht sinngemäß im Text?",opts:["Junge Menschen ernähren sich besonders gesund.","Fast Food ist teurer als gesunde Alternativen.","Viele Berufstätige haben zu wenig Zeit für Sport."],ans:2,points:1},
             {id:"ev2_lv3",q:"Was steht sinngemäß im Text?",opts:["Die Stadt Wien bietet kostenlose Sportprogramme an.","In Wien kann man nicht sicher Rad fahren.","Es gibt keine Programme für Gesundheit in Schulen."],ans:0,points:1},
             {id:"ev2_lv4",q:"Was steht sinngemäß im Text?",opts:["Thomas hat sofort sein ganzes Leben geändert.","Thomas empfiehlt, mit kleinen Schritten anzufangen.","Thomas geht jeden Tag zwei Stunden joggen."],ans:1,points:1},
             {id:"ev2_lv5",q:"Was steht sinngemäß im Text?",opts:["Die Luftqualität in Städten ist immer gut.","Bio-Lebensmittel sind in Österreich nicht beliebt.","Besonders im Winter ist die Luft in den Städten schlecht."],ans:2,points:1},
             {id:"ev2_lv6",q:"Richtig oder Falsch: Laufen ist die beliebteste Sportart in Wien.",opts:["Richtig","Falsch"],ans:0,points:1},
             {id:"ev2_lv7",q:"Richtig oder Falsch: Das Programm „Bewegung im Park" kostet 5 Euro.",opts:["Richtig","Falsch"],ans:1,points:1},
             {id:"ev2_lv8",q:"Richtig oder Falsch: Thomas war vor fünf Jahren übergewichtig.",opts:["Richtig","Falsch"],ans:0,points:1},
             {id:"ev2_lv9",q:"Richtig oder Falsch: In Wiener Schulkantinen gibt es nur noch Fast Food.",opts:["Richtig","Falsch"],ans:1,points:1}
           ]},
          // ---- WORTSCHATZ (8P) ----
          {type:"wortschatz", name:"Wortschatz", points:8,
           tasks:[
             {type:"noun2verb",q:"Bilden Sie Verben aus den Nomen und setzen Sie sie ein!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
              example:{noun:"die Empfehlung",verb:"empfiehlt",sentence:"Der Arzt empfiehlt mehr Bewegung."},
              items:[
                {noun:"die Ernährung",sentence:"Er ___ sich seit einem Jahr gesund.",answers:["ernährt"]},
                {noun:"die Bewegung",sentence:"Wir ___ uns jeden Tag mindestens 30 Minuten.",answers:["bewegen"]},
                {noun:"die Veränderung",sentence:"Sie möchte ihr Leben ___.",answers:["verändern"]},
                {noun:"die Entscheidung",sentence:"Du musst dich endlich ___.",answers:["entscheiden"]},
                {noun:"die Beratung",sentence:"Die Ärztin ___ ihre Patienten gut.",answers:["berät"]},
                {noun:"die Verbesserung",sentence:"Wir wollen unsere Noten ___.",answers:["verbessern"]}
              ]},
             {type:"adjectives",q:"Markieren Sie die Adjektive!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
              words:["trotzdem","gesund","bereits","günstig","obwohl","müde","plötzlich","deshalb","übergewichtig","weil","kostenlos","allerdings"],
              correctIdxs:[1,3,5,6,8,10]},
             {type:"antonyms",q:"Was ist das Gegenteil?",scoring:"4 x 0,5 = 2 P.",perItem:0.5,
              example:{word:"gesund",answer:"ungesund"},
              items:[
                {word:"billig",answers:["teuer"]},
                {word:"dick",answers:["dünn","schlank"]},
                {word:"fleißig",answers:["faul"]},
                {word:"öffentlich",answers:["privat"]}
              ]}
           ]},
          // ---- GRAMMATIK (10P) ----
          {type:"grammatik", name:"Grammatik", items:[
            {id:"ev2_01",q:"Das Problem ___ gelöst werden.",opts:["muss","müsst","musst","müssen"],ans:"muss",rule:"Passiv + Modalverb: muss + Partizip II + werden"},
            {id:"ev2_02",q:"Der Text ___ bis morgen geschrieben werden.",opts:["soll","sollt","sollst","sollen"],ans:"soll",rule:"Passiv + sollen"},
            {id:"ev2_03",q:"Wenn ich du ___, würde ich mehr lernen.",opts:["wäre","bin","sei","war"],ans:"wäre",rule:"Konjunktiv II: Wenn ich du wäre"},
            {id:"ev2_04",q:"Er lernt Deutsch, ___ er in Wien studieren kann.",opts:["damit","um","weil","dass"],ans:"damit",rule:"damit + Nebensatz (verschiedene Subjekte)"},
            {id:"ev2_05",q:"Sie fährt nach Wien, ___ dort zu studieren.",opts:["um","damit","weil","dass"],ans:"um",rule:"um...zu + Infinitiv (gleiches Subjekt)"},
            {id:"ev2_06",q:"Das Fenster ___ nicht geöffnet werden.",opts:["kann","können","kannst","könnt"],ans:"kann",rule:"Passiv + können"},
            {id:"ev2_07",q:"___ ich mehr Geld hätte, würde ich eine Reise machen.",opts:["Wenn","Als","Wann","Ob"],ans:"Wenn",rule:"Konjunktiv II: Wenn + hätte"},
            {id:"ev2_08",q:"Die Hausaufgabe ___ bis Freitag abgegeben werden.",opts:["muss","müsst","musst","mussen"],ans:"muss",rule:"Passiv + müssen"},
            {id:"ev2_09",q:"Ich lerne Deutsch, ___ eine gute Arbeit zu finden.",opts:["um","damit","weil","für"],ans:"um",rule:"um...zu (Finalsatz, gleiches Subjekt)"},
            {id:"ev2_10",q:"An seiner Stelle ___ ich das nicht tun.",opts:["würde","werde","will","wollte"],ans:"würde",rule:"Konjunktiv II: würde + Infinitiv"}
          ]},
          // ---- SCHREIBEN ----
          {type:"schreiben", name:"Textproduktion", prompt:"Stellungnahme: 'Soziale Medien haben mehr Nachteile als Vorteile.' Stimmen Sie zu? Begründen Sie Ihre Meinung.\n\n• Einleitung: Wie aktuell ist das Thema?\n• Vorteile von sozialen Medien\n• Nachteile von sozialen Medien\n• Ihre persönliche Meinung\n\nSchreiben Sie 150-180 Wörter.",
           tip:"Verwenden Sie: Meiner Meinung nach..., Einerseits... andererseits..., obwohl, weil, dass, Zusammenfassend...",
           model:"Das Thema soziale Medien ist heute sehr aktuell, weil fast alle Menschen täglich Instagram, TikTok oder WhatsApp benutzen.\n\nEinerseits haben soziale Medien viele Vorteile. Man kann schnell mit Freunden und Familie kommunizieren, auch wenn sie weit weg wohnen. Außerdem kann man interessante Informationen finden und neue Leute kennenlernen.\n\nAndererseits gibt es auch ernste Nachteile. Viele Menschen verbringen zu viel Zeit am Handy, obwohl sie eigentlich lernen oder arbeiten sollten. Außerdem können soziale Medien süchtig machen und die psychische Gesundheit negativ beeinflussen, besonders bei Jugendlichen.\n\nMeiner Meinung nach überwiegen die Vorteile, wenn man soziale Medien verantwortungsvoll nutzt. Es ist wichtig, dass man Pausen macht und nicht alles glaubt, was man im Internet liest. Zusammenfassend lässt sich sagen, dass es auf die Art der Nutzung ankommt."}
        ]},

        // --- EV ZT3 ---
        {id:"ev_zt3", name:"Zwischentest 3", sections:[
          // ---- LESEVERSTEHEN (9P) ----
          {type:"leseverstehen", name:"Leseverstehen", points:9,
           text:`<h3>Studieren und Arbeiten in Wien</h3>
<h4>Abschnitt A</h4>
<p>Wien ist eine der beliebtesten Städte für internationale Studierende. Jedes Jahr kommen tausende junge Menschen aus der ganzen Welt nach Wien, um an einer der zahlreichen Universitäten zu studieren. Die Universität Wien, die Technische Universität und die Wirtschaftsuniversität gehören zu den bekanntesten Hochschulen des Landes.</p>
<p>Das Studium in Österreich ist relativ günstig. EU-Bürger*innen zahlen keine Studiengebühren, wenn sie die Regelstudienzeit nicht überschreiten. Studierende aus Drittstaaten müssen etwa 726 Euro pro Semester bezahlen. Dazu kommen noch der ÖH-Beitrag von etwa 21 Euro.</p>
<h4>Abschnitt B</h4>
<p>Viele Studierende müssen neben dem Studium arbeiten, um die Lebenshaltungskosten zu decken. Wien ist nicht billig: Eine kleine Wohnung kostet mindestens 500-700 Euro im Monat, und auch Essen und Transport kosten Geld. Die meisten Studierenden arbeiten als Kellner*innen, im Einzelhandel oder als Nachhilfelehrer*innen.</p>
<p>Internationale Studierende aus EU-Ländern dürfen unbegrenzt arbeiten. Studierende aus Nicht-EU-Ländern dürfen nur 20 Stunden pro Woche arbeiten und brauchen eine spezielle Arbeitsgenehmigung.</p>
<h4>Abschnitt C</h4>
<p>Die 25-jährige Marija aus Serbien studiert seit drei Jahren Wirtschaft an der WU Wien. „Am Anfang war es sehr schwierig", erzählt sie. „Ich musste zuerst Deutsch lernen und mich an das neue System gewöhnen. In Serbien war alles anders." Heute spricht Marija fließend Deutsch und arbeitet 15 Stunden pro Woche in einem Büro.</p>
<h4>Abschnitt D</h4>
<p>Marija gibt anderen internationalen Studierenden Tipps: „Besucht unbedingt einen Deutschkurs, bevor ihr mit dem Studium anfangt. Und sucht euch früh eine Wohnung – am besten schon im Sommer, weil es im September fast unmöglich ist, etwas zu finden." Außerdem empfiehlt sie, sich bei der ÖH (Österreichische Hochschülerschaft) zu informieren, weil es dort viele kostenlose Beratungsangebote gibt.</p>
<p>„Wien ist eine wunderbare Stadt zum Studieren", sagt Marija. „Man muss nur gut planen und sich nicht entmutigen lassen, wenn am Anfang nicht alles perfekt läuft."</p>`,
           questions:[
             {id:"ev3_lv1",q:"Was steht sinngemäß im Text?",opts:["In Wien gibt es nur eine Universität.","Wien gehört zu den beliebtesten Städten für internationale Studierende.","Alle Studierenden in Wien bekommen ein Stipendium."],ans:1,points:1},
             {id:"ev3_lv2",q:"Was steht sinngemäß im Text?",opts:["EU-Bürger müssen hohe Studiengebühren bezahlen.","Studierende aus Drittstaaten studieren kostenlos.","EU-Bürger zahlen keine Studiengebühren bei Regelstudienzeit."],ans:2,points:1},
             {id:"ev3_lv3",q:"Was steht sinngemäß im Text?",opts:["Das Leben in Wien ist billig für Studierende.","Viele Studierende müssen neben dem Studium arbeiten.","Alle Studierenden arbeiten als Kellner."],ans:1,points:1},
             {id:"ev3_lv4",q:"Was steht sinngemäß im Text?",opts:["Nicht-EU-Studierende dürfen unbegrenzt arbeiten.","Nicht-EU-Studierende dürfen nur 20 Stunden pro Woche arbeiten.","Internationale Studierende dürfen nicht arbeiten."],ans:1,points:1},
             {id:"ev3_lv5",q:"Was steht sinngemäß im Text?",opts:["Marija fand den Anfang in Wien einfach.","Marija musste sich an ein neues System gewöhnen.","Marija konnte schon Deutsch, als sie nach Wien kam."],ans:1,points:1},
             {id:"ev3_lv6",q:"Richtig oder Falsch: Der ÖH-Beitrag beträgt etwa 21 Euro.",opts:["Richtig","Falsch"],ans:0,points:1},
             {id:"ev3_lv7",q:"Richtig oder Falsch: Marija studiert Medizin.",opts:["Richtig","Falsch"],ans:1,points:1},
             {id:"ev3_lv8",q:"Richtig oder Falsch: Man sollte sich schon im Sommer eine Wohnung suchen.",opts:["Richtig","Falsch"],ans:0,points:1},
             {id:"ev3_lv9",q:"Richtig oder Falsch: Die ÖH bietet keine Beratung für Studierende an.",opts:["Richtig","Falsch"],ans:1,points:1}
           ]},
          // ---- WORTSCHATZ (8P) ----
          {type:"wortschatz", name:"Wortschatz", points:8,
           tasks:[
             {type:"noun2verb",q:"Bilden Sie Verben aus den Nomen und setzen Sie sie ein!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
              example:{noun:"die Bezahlung",verb:"bezahlt",sentence:"Man bezahlt die Miete am Anfang des Monats."},
              items:[
                {noun:"die Bewerbung",sentence:"Ich ___ mich um eine Stelle als Kellner.",answers:["bewerbe"]},
                {noun:"die Überschreitung",sentence:"Du sollst die Geschwindigkeit nicht ___.",answers:["überschreiten"]},
                {noun:"die Gewöhnung",sentence:"Man muss sich an das Klima ___.",answers:["gewöhnen"]},
                {noun:"die Empfehlung",sentence:"Der Professor ___ dieses Buch.",answers:["empfiehlt"]},
                {noun:"die Planung",sentence:"Wir müssen unsere Reise besser ___.",answers:["planen"]},
                {noun:"die Information",sentence:"Bitte ___ Sie sich auf der Webseite.",answers:["informieren"]}
              ]},
             {type:"adjectives",q:"Markieren Sie die Adjektive!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
              words:["unbegrenzt","mindestens","günstig","zahlreich","trotzdem","fließend","kostenlos","unbedingt","international","deshalb","schwierig","bereits"],
              correctIdxs:[0,2,3,5,6,8,10]},
             {type:"antonyms",q:"Was ist das Gegenteil?",scoring:"4 x 0,5 = 2 P.",perItem:0.5,
              example:{word:"günstig",answer:"teuer"},
              items:[
                {word:"schwierig",answers:["einfach","leicht"]},
                {word:"möglich",answers:["unmöglich"]},
                {word:"bekannt",answers:["unbekannt"]},
                {word:"früh",answers:["spät"]}
              ]}
           ]},
          // ---- GRAMMATIK (10P) ----
          {type:"grammatik", name:"Grammatik", items:[
            {id:"ev3_01",q:"Das Buch ___ im 19. Jahrhundert geschrieben.",opts:["wurde","wird","ist","hat"],ans:"wurde",rule:"Passiv Präteritum: wurde + Partizip II"},
            {id:"ev3_02",q:"Die Häuser ___ nach dem Krieg wieder aufgebaut.",opts:["wurden","werden","sind","haben"],ans:"wurden",rule:"Passiv Präteritum Plural"},
            {id:"ev3_03",q:"Der ___ Brief liegt auf dem Tisch.",opts:["geschriebene","geschrieben","schreibende","geschriebener"],ans:"geschriebene",rule:"Partizip II als Adjektiv + Dekl."},
            {id:"ev3_04",q:"Die ___ Studenten warten im Flur.",opts:["geprüften","geprüft","prüfenden","geprüfte"],ans:"geprüften",rule:"Partizip II als Adjektiv Plural"},
            {id:"ev3_05",q:"Das Problem ist schon ___ worden.",opts:["gelöst","lösen","lösend","gelöste"],ans:"gelöst",rule:"Passiv Perfekt: ist + Partizip II + worden"},
            {id:"ev3_06",q:"Der Kuchen ___ von meiner Mutter gebacken.",opts:["wurde","wird","ist","hat"],ans:"wurde",rule:"Passiv Präteritum"},
            {id:"ev3_07",q:"Das ___ Handy funktioniert nicht mehr.",opts:["reparierte","repariert","reparierende","repariertes"],ans:"reparierte",rule:"Partizip II als Adjektiv"},
            {id:"ev3_08",q:"Die Aufgabe ist ___ worden.",opts:["erledigt","erledigen","erledigend","erledigte"],ans:"erledigt",rule:"Passiv Perfekt"},
            {id:"ev3_09",q:"Dieses Gebäude ___ 1900 gebaut.",opts:["wurde","wird","hat","ist"],ans:"wurde",rule:"Passiv Präteritum"},
            {id:"ev3_10",q:"Die ___ Tür muss repariert werden.",opts:["kaputte","kaputt","kaputter","kaputtene"],ans:"kaputte",rule:"Adjektivdeklination"}
          ]},
          // ---- SCHREIBEN ----
          {type:"schreiben", name:"Textproduktion", prompt:"Stellungnahme: 'Sollte der öffentliche Verkehr kostenlos sein?' Schreiben Sie Ihre Meinung mit Argumenten.\n\n• Einleitung: Warum ist das Thema wichtig?\n• Pro-Argumente (Umwelt, soziale Gerechtigkeit)\n• Contra-Argumente (Kosten, Finanzierung)\n• Ihre Meinung\n\nSchreiben Sie 150-180 Wörter.",
           tip:"Verwenden Sie: Es wird oft diskutiert, ob...; Einerseits... andererseits...; Meiner Meinung nach...",
           model:"Die Frage, ob der öffentliche Verkehr kostenlos sein sollte, wird oft diskutiert. Dieses Thema ist wichtig, weil der Klimawandel ein großes Problem ist.\n\nEinerseits gibt es gute Argumente dafür. Wenn Busse und Bahnen kostenlos wären, würden mehr Menschen öffentliche Verkehrsmittel benutzen und weniger Auto fahren. Das wäre gut für die Umwelt, weil es weniger CO2-Emissionen gäbe. Außerdem wäre es sozial gerecht, weil auch Menschen mit wenig Geld mobil sein könnten.\n\nAndererseits müsste jemand die Kosten bezahlen. Der Staat müsste die Verkehrsbetriebe finanzieren, was zu höheren Steuern führen könnte. Außerdem könnte die Qualität sinken, wenn die Verkehrsmittel überfüllt wären.\n\nMeiner Meinung nach wäre ein stark vergünstigter Verkehr die beste Lösung. Ein Jahresticket für 365 Euro, also einen Euro pro Tag, ist ein guter Kompromiss."}
        ]}
      ]
    },

    // ===== GF — Grundstufe Fortgeschritten (B2-C1) =====
    {
      id:"gf", name:"GF — Grundstufe Fortgeschritten", desc:"Grammatik B2-C1",
      tests:[
        {id:"gf_zt1", name:"Zwischentest 1", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"gf1_01",q:"___ der hohen Kosten verzichten viele auf ein Auto.",opts:["Aufgrund","Wegen","Trotz","Dank"],ans:"Aufgrund",rule:"aufgrund + Genitiv"},
            {id:"gf1_02",q:"Die Nominalisierung ___ Verbs ist im Deutschen häufig.",opts:["des","dem","den","der"],ans:"des",rule:"Genitiv maskulin: des Verbs"},
            {id:"gf1_03",q:"Das Buch ist lesenswert, ___ es gut geschrieben ist.",opts:["zumal","weil","obwohl","damit"],ans:"zumal",rule:"zumal = тем более что (Nebensatz)"},
            {id:"gf1_04",q:"Dieser Text ___ sich leicht lesen.",opts:["lässt","wird","kann","ist"],ans:"lässt",rule:"sich lassen = Passiv-Alternative"},
            {id:"gf1_05",q:"Der von der Regierung ___ Plan wurde umgesetzt.",opts:["vorgeschlagene","vorgeschlagen","vorschlagende","vorgeschlagener"],ans:"vorgeschlagene",rule:"Erweitertes Partizip als Adjektiv"},
            {id:"gf1_06",q:"Je mehr man übt, ___ besser wird man.",opts:["desto","je","um","so"],ans:"desto",rule:"je...desto + Komparativ"},
            {id:"gf1_07",q:"___ seines Alters ist er noch sehr aktiv.",opts:["Trotz","Wegen","Aufgrund","Dank"],ans:"Trotz",rule:"trotz + Genitiv"},
            {id:"gf1_08",q:"Die Ergebnisse sind ___ zu interpretieren.",opts:["schwer","schwere","schwerer","schweres"],ans:"schwer",rule:"sein + Adverb + zu + Infinitiv"},
            {id:"gf1_09",q:"Es ___ sich heraus, dass er recht hatte.",opts:["stellte","stellt","hat","ist"],ans:"stellte",rule:"sich herausstellen + Präteritum"},
            {id:"gf1_10",q:"Nicht nur lernt er Deutsch, ___ auch Französisch.",opts:["sondern","aber","und","oder"],ans:"sondern",rule:"Nicht nur...sondern auch"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Erörterung: 'Sollte Homeoffice zur Norm werden?' Diskutieren Sie Pro und Contra mit Beispielen. (200-220 Wörter)",
           tip:"Verwenden Sie: Einerseits/Andererseits, Darüber hinaus, Zusammenfassend lässt sich sagen...",
           model:"Die Frage, ob Homeoffice zur Norm werden sollte, ist seit der Pandemie besonders aktuell. Einerseits bietet Homeoffice viele Vorteile: Man spart Zeit beim Pendeln, kann flexibler arbeiten und die Work-Life-Balance verbessern. Darüber hinaus zeigen Studien, dass viele Arbeitnehmer im Homeoffice produktiver sind. Andererseits gibt es auch Nachteile. Die soziale Isolation kann zu psychischen Problemen führen. Außerdem fällt es manchen schwer, Arbeit und Privatleben zu trennen. Meiner Meinung nach sollte eine Mischform aus Homeoffice und Büroarbeit die beste Lösung sein."}
        ]},
        {id:"gf_zt2", name:"Zwischentest 2", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"gf2_01",q:"Er behauptet, er ___ nichts davon gewusst.",opts:["habe","hat","hätte","hatte"],ans:"habe",rule:"Konjunktiv I: indirekte Rede (haben → habe)"},
            {id:"gf2_02",q:"Die Zeitung berichtet, die Preise ___.",opts:["stiegen","steigen","seien gestiegen","sind gestiegen"],ans:"seien gestiegen",rule:"Konjunktiv I Perfekt: seien gestiegen"},
            {id:"gf2_03",q:"Er ___ krank sein, denn er fehlt oft.",opts:["muss","soll","will","darf"],ans:"muss",rule:"Subjektives Modalverb: muss (Vermutung sicher)"},
            {id:"gf2_04",q:"Sie ___ reich sein — man weiß es nicht genau.",opts:["soll","muss","will","darf"],ans:"soll",rule:"Subjektives Modalverb: soll (Gerücht)"},
            {id:"gf2_05",q:"Die Maßnahme führt ___ Verbesserung der Lage.",opts:["zur","zum","zu","bei"],ans:"zur",rule:"führen zu + Dativ: zur Verbesserung"},
            {id:"gf2_06",q:"Man ___ Rücksicht auf die Umwelt nehmen.",opts:["sollte","soll","muss","will"],ans:"sollte",rule:"Konjunktiv II von sollen: sollte"},
            {id:"gf2_07",q:"Er ___, er sei unschuldig.",opts:["behauptet","behauptete","hat behauptet","behaupte"],ans:"behauptet",rule:"Indirekte Rede: Hauptsatz Indikativ + NS Konj. I"},
            {id:"gf2_08",q:"Sowohl der Lehrer ___ auch die Schüler waren begeistert.",opts:["als","wie","und","oder"],ans:"als",rule:"sowohl...als auch"},
            {id:"gf2_09",q:"Weder das Wetter ___ die Verspätung konnten ihn stoppen.",opts:["noch","oder","und","aber"],ans:"noch",rule:"weder...noch"},
            {id:"gf2_10",q:"Er ___ die Prüfung bestanden haben — ich bin mir nicht sicher.",opts:["könnte","kann","konnte","muss"],ans:"könnte",rule:"Subjektives Modalverb: könnte (Vermutung unsicher)"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Stellungnahme: 'Künstliche Intelligenz wird in Zukunft viele Berufe ersetzen.' Nehmen Sie Stellung. (200-220 Wörter)",
           tip:"Nennen Sie konkrete Beispiele. Verwenden Sie Konjunktiv II für Vermutungen.",
           model:"Das Thema künstliche Intelligenz beschäftigt heute viele Menschen. Es ist unbestritten, dass KI bereits jetzt in vielen Bereichen eingesetzt wird. Einerseits könnte KI repetitive Aufgaben übernehmen und die Effizienz steigern. Andererseits könnten viele Arbeitsplätze verloren gehen. Meiner Einschätzung nach wird KI zwar Berufe verändern, aber nicht vollständig ersetzen. Kreative und soziale Berufe werden weiterhin von Menschen ausgeübt werden müssen."}
        ]},
        {id:"gf_zt3", name:"Zwischentest 3", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"gf3_01",q:"___ mehr er lernt, desto besser werden seine Noten.",opts:["Je","Desto","Um","So"],ans:"Je",rule:"je + Komparativ, desto + Komparativ"},
            {id:"gf3_02",q:"Er hat mich gebeten, ihm beim Umzug zu ___.",opts:["helfen","geholfen","hilft","helfe"],ans:"helfen",rule:"bitten + zu + Infinitiv"},
            {id:"gf3_03",q:"___ er krank war, ging er trotzdem zur Arbeit.",opts:["Obwohl","Weil","Damit","Wenn"],ans:"Obwohl",rule:"obwohl = хотя (Nebensatz)"},
            {id:"gf3_04",q:"Sie ist ___ die Prüfung bestanden.",opts:["dennoch","trotzdem","nichtsdestotrotz","obwohl"],ans:"trotzdem",rule:"trotzdem = тем не менее (Hauptsatz)"},
            {id:"gf3_05",q:"Der Vorschlag, ___ Arbeitszeit zu verkürzen, wurde abgelehnt.",opts:["die","der","den","dem"],ans:"die",rule:"Relativsatz: die Arbeitszeit (fem. Akk.)"},
            {id:"gf3_06",q:"___ des schlechten Wetters fand das Festival statt.",opts:["Trotz","Wegen","Aufgrund","Dank"],ans:"Trotz",rule:"trotz + Genitiv"},
            {id:"gf3_07",q:"Es handelt sich ___ ein Missverständnis.",opts:["um","über","für","von"],ans:"um",rule:"sich handeln um + Akkusativ"},
            {id:"gf3_08",q:"Man muss davon ___, dass die Preise steigen.",opts:["ausgehen","ausgegangen","ausgeht","auszugehen"],ans:"ausgehen",rule:"davon ausgehen, dass..."},
            {id:"gf3_09",q:"Die Entscheidung hängt ___ vielen Faktoren ab.",opts:["von","an","aus","mit"],ans:"von",rule:"abhängen von + Dativ"},
            {id:"gf3_10",q:"___ ich alles erledigt hatte, ging ich nach Hause.",opts:["Nachdem","Bevor","Während","Seit"],ans:"Nachdem",rule:"nachdem + Plusquamperfekt"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Erörterung: 'Sollte das Wahlrecht ab 16 Jahren gelten?' Argumentieren Sie dafür oder dagegen. (200-220 Wörter)",
           tip:"Verwenden Sie Konnektoren: Erstens, Zweitens, Darüber hinaus, Abschließend...",
           model:"Die Frage, ob Jugendliche ab 16 Jahren wählen dürfen sollten, wird kontrovers diskutiert. Befürworter argumentieren, dass junge Menschen politisch informiert sind und ihre Zukunft mitgestalten sollten. Gegner hingegen behaupten, dass 16-Jährige noch nicht reif genug seien, um politische Entscheidungen zu treffen. Meiner Meinung nach sollte das Wahlrecht ab 16 gelten, da junge Menschen bereits Steuern zahlen und von politischen Entscheidungen direkt betroffen sind."}
        ]}
      ]
    },

    // ===== EPD — Ergänzungsprüfung Deutsch (C1, 1 großer Test) =====
    {
      id:"epd", name:"EPD — Ergänzungsprüfung Deutsch", desc:"Abschlussprüfung C1",
      tests:[
        {id:"epd_test", name:"Abschlussprüfung", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"epd_01",q:"___ der Tatsache, dass er krank war, kam er zur Prüfung.",opts:["Ungeachtet","Trotz","Wegen","Aufgrund"],ans:"Ungeachtet",rule:"ungeachtet + Genitiv (C1)"},
            {id:"epd_02",q:"Die Forschungsergebnisse ___ veröffentlicht werden.",opts:["sollen","soll","sollt","sollest"],ans:"sollen",rule:"Passiv + Modalverb Plural"},
            {id:"epd_03",q:"Er tat so, ___ ob er nichts wüsste.",opts:["als","wie","dass","ob"],ans:"als",rule:"als ob + Konjunktiv II"},
            {id:"epd_04",q:"___ sei denn, du hast einen guten Grund.",opts:["Es","Er","Sie","Das"],ans:"Es",rule:"es sei denn = если только не"},
            {id:"epd_05",q:"Die Kosten ___ sich auf 10.000 Euro.",opts:["belaufen","belauft","belief","beläuft"],ans:"belaufen",rule:"sich belaufen auf + Akkusativ"},
            {id:"epd_06",q:"___ er auch noch so fleißig lernt, er besteht die Prüfung nicht.",opts:["Mag","Kann","Will","Soll"],ans:"Mag",rule:"Mag + auch = даже если (Konzessiv)"},
            {id:"epd_07",q:"Infolge ___ Pandemie mussten viele Geschäfte schließen.",opts:["der","die","den","dem"],ans:"der",rule:"infolge + Genitiv feminin"},
            {id:"epd_08",q:"Der Minister erklärte, die Reform ___ notwendig.",opts:["sei","ist","wäre","wird"],ans:"sei",rule:"Konjunktiv I: indirekte Rede"},
            {id:"epd_09",q:"Das ist ein nicht zu ___ Problem.",opts:["unterschätzendes","unterschätzen","unterschätzend","unterschätztem"],ans:"unterschätzendes",rule:"nicht zu + Partizip I + Adjektivendung"},
            {id:"epd_10",q:"___ das Projekt abgeschlossen ist, können wir feiern.",opts:["Sobald","Nachdem","Bevor","Bis"],ans:"Sobald",rule:"sobald = как только"},
            {id:"epd_11",q:"Er handelte, ___ er keine Angst hätte.",opts:["als ob","als wenn","wie wenn","obwohl"],ans:"als ob",rule:"als ob + Konjunktiv II (irrealer Vergleich)"},
            {id:"epd_12",q:"Die Ergebnisse lassen ___ keine eindeutige Schlussfolgerung zu.",opts:["sich","es","man","uns"],ans:"sich",rule:"sich zulassen = быть допустимым"},
            {id:"epd_13",q:"___ bessere Bildung könnte die Gesellschaft gerechter werden.",opts:["Durch","Mit","Von","Für"],ans:"Durch",rule:"durch + Akkusativ (Mittel/Ursache)"},
            {id:"epd_14",q:"Je komplexer das Thema, ___ schwieriger die Lösung.",opts:["desto","je","um so","so"],ans:"desto",rule:"je...desto (без глагола в Kurzform)"},
            {id:"epd_15",q:"___ aller Bemühungen konnte das Ziel nicht erreicht werden.",opts:["Trotz","Wegen","Aufgrund","Dank"],ans:"Trotz",rule:"trotz + Genitiv Plural"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Stellungnahme: 'Die Digitalisierung des Bildungssystems ist unvermeidlich.' Nehmen Sie differenziert Stellung. Nennen Sie Vor- und Nachteile und formulieren Sie Ihre eigene Position. (200-220 Wörter)",
           tip:"C1-Niveau: Verwenden Sie Nominalisierungen, Passiv-Alternativen, Konnektoren auf hohem Niveau (nichtsdestotrotz, infolgedessen, darüber hinaus).",
           model:"Die Digitalisierung des Bildungssystems ist ein viel diskutiertes Thema. Unbestritten ist, dass digitale Medien den Zugang zu Wissen erleichtern und individualisiertes Lernen ermöglichen. Darüber hinaus können Lehrende durch digitale Tools ihre Unterrichtsmethoden erweitern. Nichtsdestotrotz birgt die Digitalisierung auch Risiken: Die soziale Interaktion könnte darunter leiden, und nicht alle Lernenden verfügen über die nötige technische Ausstattung. Infolgedessen könnte eine rein digitale Bildung bestehende Ungleichheiten verschärfen. Meines Erachtens sollte eine ausgewogene Kombination aus digitalen und analogen Methoden angestrebt werden, um die Vorteile beider Ansätze zu nutzen."}
        ]}
      ]
    }
  ]
};
