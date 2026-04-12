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
      id:"ev", name:"EV — Ergänzungsprüfung Vorstufe", desc:"Grammatik B1-B2",
      tests:[
        // --- EV ZT1: Passiv Präsens, Konjunktiv II, Relativsätze ---
        {id:"ev_zt1", name:"Zwischentest 1", sections:[
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
          {type:"schreiben", name:"Schreiben", prompt:"Schreiben Sie Ihre Meinung zum Thema: 'Sollen Studenten neben dem Studium arbeiten?' Begründen Sie Ihre Meinung. (150-180 Wörter)",
           tip:"Struktur: Einleitung → Pro-Argumente → Contra-Argumente → Ihre Meinung.",
           model:"Viele Studenten arbeiten neben dem Studium, um Geld zu verdienen. Ich finde, dass das sowohl Vorteile als auch Nachteile hat. Einerseits sammeln Studenten wertvolle Berufserfahrung. Andererseits kann die Arbeit das Studium negativ beeinflussen, wenn man zu viel arbeitet. Meiner Meinung nach sollte man höchstens 10-15 Stunden pro Woche arbeiten."}
        ]},

        // --- EV ZT2: Passiv+Modal, Konjunktiv II, Finalsätze ---
        {id:"ev_zt2", name:"Zwischentest 2", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"ev2_01",q:"Das Problem ___ gelöst werden.",opts:["muss","müsst","musst","müssen"],ans:"muss",rule:"Passiv + Modalverb: muss + Partizip II + werden"},
            {id:"ev2_02",q:"Der Text ___ bis morgen geschrieben werden.",opts:["soll","sollt","sollst","sollen"],ans:"soll",rule:"Passiv + sollen"},
            {id:"ev2_03",q:"Wenn ich du ___, würde ich mehr lernen.",opts:["wäre","bin","sei","war"],ans:"wäre",rule:"Konjunktiv II: Wenn ich du wäre"},
            {id:"ev2_04",q:"Er lernt Deutsch, ___ er in Wien studieren kann.",opts:["damit","um","weil","dass"],ans:"damit",rule:"damit + Nebensatz (verschiedene Subjekte)"},
            {id:"ev2_05",q:"Sie fährt nach Wien, ___ dort zu studieren.",opts:["um","damit","weil","dass"],ans:"um",rule:"um...zu + Infinitiv (gleiches Subjekt)"},
            {id:"ev2_06",q:"Das Fenster ___ nicht geöffnet werden.",opts:["kann","können","kannst","könnt"],ans:"kann",rule:"Passiv + können: kann + Partizip II + werden"},
            {id:"ev2_07",q:"___ ich mehr Geld hätte, würde ich eine Reise machen.",opts:["Wenn","Als","Wann","Ob"],ans:"Wenn",rule:"Konjunktiv II: Wenn + hätte"},
            {id:"ev2_08",q:"Die Hausaufgabe ___ bis Freitag abgegeben werden.",opts:["muss","müsst","musst","mussen"],ans:"muss",rule:"Passiv + müssen"},
            {id:"ev2_09",q:"Ich lerne Deutsch, ___ eine gute Arbeit zu finden.",opts:["um","damit","weil","für"],ans:"um",rule:"um...zu (Finalssatz, gleiches Subjekt)"},
            {id:"ev2_10",q:"An seiner Stelle ___ ich das nicht tun.",opts:["würde","werde","will","wollte"],ans:"würde",rule:"Konjunktiv II: würde + Infinitiv"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Stellungnahme: 'Soziale Medien haben mehr Nachteile als Vorteile.' Stimmen Sie zu? Begründen Sie. (150-180 Wörter)",
           tip:"Formulierungen: Meiner Meinung nach..., Ich bin der Meinung, dass..., Einerseits... andererseits..., Zusammenfassend...",
           model:"Das Thema soziale Medien ist sehr aktuell. Einerseits ermöglichen sie schnelle Kommunikation und den Austausch von Informationen. Andererseits können sie süchtig machen und die psychische Gesundheit beeinflussen. Meiner Meinung nach überwiegen die Vorteile, wenn man soziale Medien verantwortungsvoll nutzt. Zusammenfassend lässt sich sagen, dass es auf die Art der Nutzung ankommt."}
        ]},

        // --- EV ZT3: Passiv Vergangenheit, Partizip als Adjektiv ---
        {id:"ev_zt3", name:"Zwischentest 3", sections:[
          {type:"grammatik", name:"Grammatik", items:[
            {id:"ev3_01",q:"Das Buch ___ im 19. Jahrhundert geschrieben.",opts:["wurde","wird","ist","hat"],ans:"wurde",rule:"Passiv Präteritum: wurde + Partizip II"},
            {id:"ev3_02",q:"Die Häuser ___ nach dem Krieg wieder aufgebaut.",opts:["wurden","werden","sind","haben"],ans:"wurden",rule:"Passiv Präteritum Plural"},
            {id:"ev3_03",q:"Der ___ Brief liegt auf dem Tisch.",opts:["geschriebene","geschrieben","schreibende","geschriebener"],ans:"geschriebene",rule:"Partizip II als Adjektiv + Dekl."},
            {id:"ev3_04",q:"Die ___ Studenten warten im Flur.",opts:["geprüften","geprüft","prüfenden","geprüfte"],ans:"geprüften",rule:"Partizip II als Adjektiv Plural"},
            {id:"ev3_05",q:"Das Problem ist schon ___ worden.",opts:["gelöst","lösen","lösend","gelöste"],ans:"gelöst",rule:"Passiv Perfekt: ist + Partizip II + worden"},
            {id:"ev3_06",q:"Der Kuchen ___ von meiner Mutter gebacken.",opts:["wurde","wird","ist","hat"],ans:"wurde",rule:"Passiv Präteritum: wurde gebacken"},
            {id:"ev3_07",q:"Das ___ Handy funktioniert nicht mehr.",opts:["reparierte","repariert","reparierende","repariertes"],ans:"reparierte",rule:"Partizip II als Adjektiv: das reparierte Handy"},
            {id:"ev3_08",q:"Die Aufgabe ist ___ worden.",opts:["erledigt","erledigen","erledigend","erledigte"],ans:"erledigt",rule:"Passiv Perfekt"},
            {id:"ev3_09",q:"Dieses Gebäude ___ 1900 gebaut.",opts:["wurde","wird","hat","ist"],ans:"wurde",rule:"Passiv Präteritum"},
            {id:"ev3_10",q:"Die ___ Tür muss repariert werden.",opts:["kaputte","kaputt","kaputter","kaputtene"],ans:"kaputte",rule:"Adjektivdeklination: die kaputte Tür"}
          ]},
          {type:"schreiben", name:"Schreiben", prompt:"Stellungnahme: 'Sollte der öffentliche Verkehr kostenlos sein?' Schreiben Sie Ihre Meinung mit Argumenten. (150-180 Wörter)",
           tip:"Pro: Umweltschutz, weniger Autos, soziale Gerechtigkeit. Contra: Kosten, Qualität, Finanzierung.",
           model:"Die Frage, ob der öffentliche Verkehr kostenlos sein sollte, wird oft diskutiert. Einerseits würden mehr Menschen den Bus oder die Straßenbahn benutzen, was gut für die Umwelt wäre. Es gäbe weniger Staus und die Luftqualität würde sich verbessern. Andererseits müsste der Staat die Kosten übernehmen, was zu höheren Steuern führen könnte. Meiner Meinung nach wäre ein stark vergünstigter Verkehr die beste Lösung."}
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
