// VWU Prüfungsvorbereitung — Grammatik + Schreiben
const VWU = {
  levels: [
    // ===== AV — Aufnahmevoraussetzungen (A2-B1) =====
    {
      id:"av", name:"AV — Aufnahmevoraussetzungen", desc:"Grundgrammatik A2-B1",
      tests:[
        {id:"av_zt1", name:"Zwischentest 1", empty:true, sections:[]},
        {id:"av_zt2", name:"Zwischentest 2", empty:true, sections:[]},
        {id:"av_zt3", name:"Zwischentest 3", empty:true, sections:[]}
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
<p>2014 kam die kostenfreie Dating-App Tinder" auf den Markt. Bei Tinder kann man ganz einfach einen Partner*eine Partnerin aus der Umgebung finden, ihn oder sie kontaktieren und mit der Person chatten. Dabei kann man auch mitteilen, ob man sie mag oder nicht. Das ist bei jungen Leuten besonders beliebt. Tinder" ist kostenlos, aber das ist für andere Datingportale kein Problem, denn bei Tinder suchen die Menschen niemanden für eine lebenslange Partnerschaft. Sie nutzen das Portal, weil sie sich nur einmal kurz treffen oder flirten wollen.</p>
<h4>Abschnitt C</h4>
<p>Trotzdem ist das Geschäft mit der Online-Liebe heute schwieriger. Die Onlineportale haben zum Beispiel immer wieder Probleme mit modernen Heiratsschwindlern". Heiratsschwindler*innen sind Betrüger*innen, die keine Liebe, sondern Geld suchen. Sie wollen im Internet jemanden kennenlernen, der viel Geld hat. Dann sagen sie: Ich liebe dich und möchte dich heiraten!" Und wenn sie das Geld haben, sind sie plötzlich weg. Solche Probleme können sogar am Ende dazu führen, dass einige Portale aufhören.</p>
<h4>Abschnitt D</h4>
<p>Die 37-jährige Britta hat im Internet aber gute Erfahrungen gemacht. Sie war mehrere Jahre auf einem Onlineportal aktiv und hat dort nicht nur Männer, sondern auch Freunde gefunden. Es hat ihr gefallen, dass sie zuerst nur von zu Hause aus im Internet Kontakt hatte. Auch ihren Ehemann hat Britta über ein Internetportal kennengelernt. Man kann ein Internetportal nutzen", sagt sie, aber man sollte auch sehr aufpassen, was man tut."</p>
<p>Britta empfiehlt, zu den ersten Treffen immer einen guten Freund oder eine Freundin mitzunehmen, damit man keine unangenehme Situation erlebt. Von diesem Freund oder dieser Freundin kann man sich später auch beraten lassen. Außerdem sollte man für die ersten Verabredungen immer nur öffentliche Orte auswählen, an denen sich auch viele andere Menschen befinden, wie zum Beispiel ein Kaffeehaus.</p>
<p>Britta selbst hat das so gemacht und Glück gehabt, denn heute lebt sie in einer harmonischen Partnerschaft.</p>`,
           questions:[
             {id:"ev1_lv1",type:"sinngemaess",q:"Was steht sinngemäß im Text? Kreuzen Sie an!",points:1,
              opts:["Es gibt besondere Portale für Menschen mit unterschiedlichen Interessen.",
                    "Ein Onlineportal allein verdient circa 186 Millionen Euro pro Jahr.",
                    "Mit Datingportalen kann man im deutschsprachigen Raum nicht viel Geld verdienen."],ans:0},
             {id:"ev1_lv2",type:"sinngemaess",q:"Was sagt Britta über die Online-Portale? Markieren Sie eine Antwort!",points:1,
              opts:["Jede*r kann hier den richtigen Mann oder die Frau fürs Leben finden.",
                    "Es ist schwer, mit jemandem erst mal nur zu chatten und ihn oder sie nicht zu treffen.",
                    "Man sollte gut aufpassen."],ans:2},
             {id:"ev1_lv3",type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Achtung: Zwei Überschriften passen, eine passt nicht (= X).",points:3,
              headings:["Gute Tipps für die Online-Partnersuche","Große Konkurrenz für Onlineportale durch Tinder","Auf der Suche nach Geld statt Liebe"],
              correctMap:{"0":"D","1":"B","2":"C"}},
             {id:"ev1_lv4",type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)? Kreuzen Sie an!",points:4,
              statements:[
                {text:"Jungen Leuten gefällt es, dass sie über Tinder zeigen können, wenn sie jemanden mögen.",ans:"R"},
                {text:"Laut dem Text suchen viele Menschen auf Tinder den Partner*die Partnerin fürs Leben.",ans:"F"},
                {text:"Probleme mit Heiratsschwindler*innen auf Online-Portalen gibt es heutzutage kaum.",ans:"F"},
                {text:"Britta empfiehlt, sich bei der ersten Verabredung allein an einem ruhigen Ort zu treffen.",ans:"F"}
              ]}
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
                {noun:"die Ankunft",sentence:"Vermutlich ___ er um 17 Uhr.",answers:["kommt an","kommt"]},
                {noun:"die Fahrt",sentence:"Herr Huber ___ meistens zu schnell.",answers:["fährt"]},
                {noun:"die Hilfe",sentence:"Du ___ deinem Bruder zu selten!",answers:["hilfst"]}
              ]},
             {type:"adjectives",q:"Markieren Sie noch weitere 6 Adjektive wie im Beispiel!",scoring:"6 x 0,5 = 3 P.",perItem:0.5,
              example:"freiwillig",
              words:["jetzt","klug","nun","durstig","still","tut","statt","leer","lässt","sowieso","treu","dann","nur","fein","ob","freiwillig"],
              correctIdxs:[1,3,4,7,10,13]},
             {type:"antonyms",q:"Was ist das Gegenteil? Notieren Sie das Wort wie im Beispiel!",scoring:"4 x 0,5 = 2 P.",perItem:0.5,
              example:{word:"gemütlich",answer:"ungemütlich"},
              items:[
                {word:"einschalten",answers:["ausschalten"]},
                {word:"schnell",answers:["langsam"]},
                {word:"hell",answers:["dunkel"]},
                {word:"glücklich",answers:["unglücklich","traurig"]}
              ]}
           ]},

          // ---- STRUKTUREN (23P) ----
          {type:"strukturen", name:"Strukturen", points:23,
           tasks:[
             {type:"infinitiv_zu",q:"Ergänzen Sie die Sätze mittels Infinitiv + zu mit mindestens 5 Wörtern aus dem Wortfeld Studienwahl!",scoring:"3 x 1,5 = 4,5 P.",perItem:1.5,
              items:[
                {start:"Für Jugendliche ist es nicht leicht,",example:"sich für das richtige Studium zu entscheiden."},
                {start:"Maturant*innen hoffen,",example:"einen Studienplatz an der Universität zu bekommen."},
                {start:"Nicht jede*r hat die Möglichkeit,",example:"an einer guten Universität im Ausland zu studieren."}
              ]},
             {type:"praepositionen",q:"Ergänzen Sie die passenden Präpositionen und Artikel wie im Beispiel!",scoring:"10 x 0,5 = 5 P.",perItem:0.5,
              example:"Im Park: In der Mittagspause nützen viele Leute die Zeit, um...",
              text:"___ ___ Mittagspause nützen viele Leute die Zeit, um ___ ___ Kollegen und Kolleginnen in den Park zu gehen. Sie setzen sich auf eine Bank, holen ihre Jause ___ ___ Taschen und genießen die Sonne und die frische Luft. Andere gehen in der Mittagspause ___ ___ Imbissstand um die Ecke und kaufen sich ein Kebab, eine Pizzaschnitte, Sushi oder eine Wurstsemmel. Ein junger Student sitzt ___ ___ Notebook auf der Wiese und arbeitet an seiner Seminararbeit. ___ ___ Pause kehren die Menschen wieder an ihre Arbeitsplätze zurück.",
              blanks:[
                {answers:["In der"]},
                {answers:["mit den","mit ihren"]},
                {answers:["aus den","aus ihren"]},
                {answers:["zu dem","zum","zu einem"]},
                {answers:["mit dem","mit seinem"]},
                {answers:["Nach der"]}
              ]},
             {type:"satzanfaenge",q:"Vervollständigen Sie die Satzanfänge mit 3 verschiedenen Gedanken!",scoring:"3 x 1 = 3 P.",perItem:1,
              stem:"Der Umzug nach Österreich war schwierig, ...",
              connectors:["denn","weil","deshalb"],
              examples:["denn ich kannte dort niemanden.","weil ich die Sprache nicht konnte.","Deshalb habe ich sofort einen Deutschkurs besucht."]},
             {type:"konjunktiv2",q:"Sagen Sie es höflicher, indem Sie den Konjunktiv II verwenden!",scoring:"3 x 1,5 = 4,5 P.",perItem:1.5,
              items:[
                {imperativ:"Hilf mir mit der Hausaufgabe!",example:"Könntest du mir bitte mit der Hausaufgabe helfen?"},
                {imperativ:"Gießen Sie bitte meine Blumen!",example:"Würden Sie bitte meine Blumen gießen?"},
                {imperativ:"Tragt die Taschen bitte hinein!",example:"Könntet ihr bitte die Taschen hineintragen?"}
              ]},
             {type:"stehen_liegen",q:"Bilden Sie mit den folgenden Nomen 4 korrekte Sätze. Verwenden Sie dazu die Verben im Kasten unten. Achtung: Ein Verb passt nicht!",scoring:"4 x 1,5 = 6 P.",perItem:1.5,
              verbs:["stehen","liegen","hängen","stellen","legen"],
              items:[
                {nouns:"Peter/Fahrrad/Haus",example:"Peter stellt das Fahrrad vor das Haus."},
                {nouns:"Er/Mantel/Garderobe",example:"Er hängt den Mantel an die Garderobe."},
                {nouns:"Gläser/Wohnzimmerregal",example:"Die Gläser stehen im Wohnzimmerregal."},
                {nouns:"Skripten/Schreibtisch",example:"Die Skripten liegen auf dem Schreibtisch."}
              ]}
           ]},

          // ---- TEXTPRODUKTION (20P) ----
          {type:"schreiben", name:"Textproduktion", points:20,
           format:"email",
           emailTo:"a.smiley@gmail.com",
           emailBetreff:"Hallo aus Tirol",
           emailAnrede:"Liebe Anna,",
           prompt:"Erlebnisbericht: Sie sind Elena und arbeiten in den Sommerferien als Praktikantin in einem Hotel in den Tiroler Bergen. Sie schreiben Ihrer Freundin Anna eine E-Mail.\n\n• Beschreiben Sie: Warum sind Sie dort? Wie haben Sie diesen Job gefunden? Welche Erfahrungen haben Sie bisher gemacht?\n• Begründen Sie: Was hat Ihnen bisher gefallen? Was hat Ihnen nicht so gut gefallen? Warum?\n• Welche Tipps haben Sie für Ihre Freundin Anna, die auch einen Job als Praktikantin in einem Hotel sucht? Was ist wichtig?\n\nSchreiben Sie 140–160 Wörter. Achten Sie auf den Textaufbau (Anrede, Einleitung, Schluss) und gehen Sie auf alle Fragen ein. Für eine gute Bewertung verwenden Sie das Perfekt und komplexen Satzbau (z. B. mit als, dass, weil, wenn ...).",
           tip:"Anrede + Einleitung + 3 Punkte beantworten + Gruß. Verwenden Sie: als, dass, weil, wenn, obwohl, um...zu.",
           model:"Liebe Anna,\n\nich schreibe dir aus Tirol! Ich arbeite seit drei Wochen als Praktikantin in einem kleinen Hotel in den Bergen. Ich habe den Job über eine Internetseite gefunden, als ich nach Sommerjobs gesucht habe.\n\nBis jetzt habe ich viele gute Erfahrungen gemacht. Am besten gefällt mir, dass ich mit Menschen aus verschiedenen Ländern sprechen kann. Außerdem ist die Natur hier wunderschön. Was mir nicht so gut gefällt, ist die Arbeitszeit, weil ich manchmal schon um 6 Uhr anfangen muss.\n\nWenn du auch einen Job in einem Hotel suchst, empfehle ich dir, früh zu suchen, weil die besten Stellen schnell vergeben sind. Es ist wichtig, dass du freundlich bist und gut mit Stress umgehen kannst.\n\nLiebe Grüße,\nElena"}
        ]},

        {id:"ev_zt2", name:"Zwischentest 2", empty:true, sections:[]},
        {id:"ev_zt3", name:"Zwischentest 3", empty:true, sections:[]}
      ]
    },

    // ===== GF — Grundstufe Fortgeschritten (B2-C1) =====
    {
      id:"gf", name:"GF — Grundstufe Fortgeschritten", desc:"Grammatik B2-C1",
      tests:[
        {id:"gf_zt1", name:"Zwischentest 1", empty:true, sections:[]},
        {id:"gf_zt2", name:"Zwischentest 2", empty:true, sections:[]},
        {id:"gf_zt3", name:"Zwischentest 3", empty:true, sections:[]}
      ]
    },

    // ===== EPD — Ergänzungsprüfung Deutsch (C1, 1 großer Test) =====
    {
      id:"epd", name:"EPD — Ergänzungsprüfung Deutsch", desc:"Abschlussprüfung C1",
      tests:[
        {id:"epd_test", name:"Abschlussprüfung", empty:true, sections:[]}
      ]
    }
  ]
};
