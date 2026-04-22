// EV ZT2 — 7 Grammatik + 3 Wortschatz exercises, 30 items each
const EV_ZT2_DATA = {
  grammatik: [
    // 1. Konnektoren (als/bis/seit/wann/wenn)
    {name:"Konnektoren: als – bis – seit(dem) – wann – wenn",
     desc:"Wählen Sie für jede Lücke einen passenden Konnektor!",
     items:[{"q": "___ er in Wien ankam, war er sehr müde.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "als", "rule": "als=когда(прошлое, однократно)"}, {"q": "___ er seine Freundin zum ersten Mal sah, war er sofort verliebt.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "als", "rule": "als=когда(прошлое, однократно)"}, {"q": "___ ich nach Hause komme, koche ich Abendessen.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wenn", "rule": "wenn=когда(настоящее/будущее/повторяющееся)"}, {"q": "___ es regnet, nehme ich immer einen Regenschirm mit.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wenn", "rule": "wenn=каждый раз когда"}, {"q": "Er fragte mich, ___ der Zug abfährt.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wann", "rule": "wann=в какое время (вопрос)"}, {"q": "Ich weiß nicht, ___ er zurückkommt.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wann", "rule": "wann=когда именно (вопрос)"}, {"q": "Warte hier, ___ ich wiederkomme.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "bis", "rule": "bis=до тех пор пока"}, {"q": "Bleib sitzen, ___ der Arzt dich ruft.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "bis", "rule": "bis=до тех пор пока"}, {"q": "___ er in dieser Stadt wohnt, geht es ihm besser.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "seit", "rule": "seit(dem)=с тех пор как"}, {"q": "___ sie Deutsch lernt, versteht sie mehr.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "seit", "rule": "seit(dem)=с тех пор как"}, {"q": "___ ich klein war, spielte ich immer im Garten.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "als", "rule": "als=когда(прошлое)"}, {"q": "___ du Zeit hast, können wir uns treffen.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wenn", "rule": "wenn=если/когда"}, {"q": "Er wartet, ___ sie fertig ist.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "bis", "rule": "bis=пока не"}, {"q": "___ er die Prüfung bestanden hat, ist er glücklich.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "seit", "rule": "seit(dem)=с тех пор как"}, {"q": "Kannst du mir sagen, ___ das Konzert beginnt?", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wann", "rule": "wann=когда (вопрос)"}, {"q": "___ das Wetter schön ist, gehen wir spazieren.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wenn", "rule": "wenn=когда/если"}, {"q": "___ sie ihren Job verlor, war sie traurig.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "als", "rule": "als=когда(прошлое)"}, {"q": "Ich rufe dich an, ___ ich ankomme.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wenn", "rule": "wenn=когда(будущее)"}, {"q": "Er blieb zu Hause, ___ es aufhörte zu regnen.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "bis", "rule": "bis=до тех пор пока"}, {"q": "___ er das Studium abgeschlossen hat, arbeitet er als Ingenieur.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "seit", "rule": "seit(dem)=с тех пор как"}, {"q": "Weißt du, ___ der Laden öffnet?", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wann", "rule": "wann=когда (вопрос)"}, {"q": "___ er ein Kind war, lebte er in Berlin.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "als", "rule": "als=когда(прошлое)"}, {"q": "___ ich müde bin, trinke ich Kaffee.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wenn", "rule": "wenn=каждый раз когда"}, {"q": "Er liest, ___ er einschläft.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "bis", "rule": "bis=пока не"}, {"q": "___ wir uns kennen, streiten wir nie.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "seit", "rule": "seit(dem)=с тех пор как"}, {"q": "Ich erinnere mich, ___ wir uns zum ersten Mal trafen.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "als", "rule": "als=когда(прошлое)"}, {"q": "___ fährt dein Bus?", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wann", "rule": "wann=когда (вопрос)"}, {"q": "___ es dunkel wird, gehen die Kinder nach Hause.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wenn", "rule": "wenn=когда/если"}, {"q": "Er wusste nicht, ___ sie geboren wurde.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "wann", "rule": "wann=когда (вопрос)"}, {"q": "___ ich die Nachricht bekam, war ich überrascht.", "opts": ["als", "bis", "seit(dem)", "wann", "wenn"], "ans": "als", "rule": "als=когда(прошлое)"}]},

    // 2. obwohl / trotzdem
    {name:"obwohl oder trotzdem?",
     desc:"Vervollständigen Sie die Sätze mit obwohl oder trotzdem!",
     items:[{"q": "Er geht spazieren, ___ es regnet.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя (Nebensatz, Verb am Ende)"}, {"q": "Es regnet. ___ geht er spazieren.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее (Hauptsatz, Inversion)"}, {"q": "___ sie müde ist, arbeitet sie weiter.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Sie ist müde. ___ arbeitet sie weiter.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "Er hat keine Zeit, ___ er uns hilft.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Er hat keine Zeit. ___ hilft er uns.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ das Essen teuer war, bestellten sie viel.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Das Essen war teuer. ___ bestellten sie viel.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ er krank ist, geht er zur Arbeit.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Er ist krank. ___ geht er zur Arbeit.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ sie wenig Geld hat, kauft sie das Kleid.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Sie hat wenig Geld. ___ kauft sie das Kleid.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ der Film langweilig war, sah er ihn bis zum Ende.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Der Film war langweilig. ___ sah er ihn bis zum Ende.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ die Aufgabe schwer ist, schafft sie es.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Die Aufgabe ist schwer. ___ schafft sie es.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ er viel gelernt hat, hat er die Prüfung nicht bestanden.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Er hat viel gelernt. ___ hat er die Prüfung nicht bestanden.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "Ich gehe ins Fitnessstudio, ___ ich keine Lust habe.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Ich habe keine Lust. ___ gehe ich ins Fitnessstudio.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ er Vegetarier ist, hat er Fleisch probiert.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Er ist Vegetarier. ___ hat er Fleisch probiert.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ das Hotel teuer war, war das Zimmer klein.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Das Hotel war teuer. ___ war das Zimmer klein.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ es spät ist, bleiben die Kinder wach.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Es ist spät. ___ bleiben die Kinder wach.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ der Weg lang war, gingen sie zu Fuß.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Der Weg war lang. ___ gingen sie zu Fuß.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}, {"q": "___ sie Angst hatte, sprang sie ins Wasser.", "opts": ["obwohl", "trotzdem"], "ans": "obwohl", "rule": "obwohl=хотя"}, {"q": "Sie hatte Angst. ___ sprang sie ins Wasser.", "opts": ["obwohl", "trotzdem"], "ans": "trotzdem", "rule": "trotzdem=тем не менее"}]},

    // 3. Finalsätze mit damit
    {name:"Finalsätze mit damit",
     desc:"Bilden Sie Sätze mit dem Konnektor damit!",
     items:[{"q": "Ich lerne Deutsch, ___ ich in Wien studieren kann.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы (Nebensatz)"}, {"q": "Er spricht langsam, ___ alle ihn verstehen.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Sie spart Geld, ___ sie ein Auto kaufen kann.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Wir üben jeden Tag, ___ wir die Prüfung bestehen.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er schließt das Fenster, ___ es nicht kalt wird.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Ich schreibe es auf, ___ ich es nicht vergesse.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Sie erklärt es nochmal, ___ er es versteht.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er fährt früh los, ___ er pünktlich ankommt.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Ich lese viel, ___ ich meinen Wortschatz erweitere.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Sie macht Sport, ___ sie gesund bleibt.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er ruft sie an, ___ sie Bescheid weiß.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Wir sprechen leise, ___ das Baby nicht aufwacht.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Ich nehme den Regenschirm mit, ___ ich nicht nass werde.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er trägt eine Brille, ___ er besser sieht.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Sie kocht gesund, ___ die Familie fit bleibt.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Ich mache das Licht an, ___ du besser lesen kannst.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er arbeitet viel, ___ seine Familie genug Geld hat.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Sie schreibt alles auf, ___ sie nichts vergisst.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Ich fahre mit dem Bus, ___ ich kein Benzin brauche.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er macht Pausen, ___ er sich erholen kann.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Sie geht früh ins Bett, ___ sie morgen ausgeschlafen ist.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Wir kaufen Blumen, ___ das Haus schöner aussieht.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er lernt Kochen, ___ er sich selbst versorgen kann.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Ich ziehe mich warm an, ___ mir nicht kalt wird.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Sie erzählt es allen, ___ jeder Bescheid weiß.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er spart Wasser, ___ die Rechnung nicht so hoch wird.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Wir planen alles, ___ nichts schiefgeht.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Ich frage den Lehrer, ___ ich die Aufgabe richtig mache.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Sie bringt ihm Essen, ___ er nicht hungrig bleibt.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}, {"q": "Er trainiert hart, ___ er den Wettkampf gewinnt.", "opts": ["damit", "um...zu", "weil", "obwohl"], "ans": "damit", "rule": "damit=чтобы"}]},

    // 4. Reflexivpronomen
    {name:"Reflexivpronomen einsetzen",
     desc:"Setzen Sie das passende Reflexivpronomen ein!",
     items:[{"q": "Ich wasche ___ die Hände.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "mir", "rule": "Dativ-Reflexiv: sich(Dat) + Körperteil"}, {"q": "Er setzt ___ auf den Stuhl.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "Akkusativ-Reflexiv: sich setzen"}, {"q": "Wir freuen ___ auf den Urlaub.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "uns", "rule": "sich freuen auf + Akk"}, {"q": "Du musst ___ beeilen!", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "dich", "rule": "sich beeilen (Akk-Reflexiv)"}, {"q": "Sie interessiert ___ für Kunst.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich interessieren für + Akk"}, {"q": "Ich erinnere ___ an den Film.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "mich", "rule": "sich erinnern an + Akk"}, {"q": "Er kauft ___ ein neues Auto.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "Dativ-Reflexiv: sich(Dat) etwas kaufen"}, {"q": "Ihr trefft ___ am Bahnhof.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "euch", "rule": "sich treffen (Akk-Reflexiv)"}, {"q": "Wir kümmern ___ um die Kinder.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "uns", "rule": "sich kümmern um + Akk"}, {"q": "Du wünschst ___ ein Fahrrad.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "dir", "rule": "Dativ-Reflexiv: sich(Dat) etwas wünschen"}, {"q": "Sie ärgert ___ über den Fehler.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich ärgern über + Akk"}, {"q": "Ich fühle ___ nicht gut.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "mich", "rule": "sich fühlen (Akk-Reflexiv)"}, {"q": "Er entschuldigt ___ für die Verspätung.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich entschuldigen für + Akk"}, {"q": "Wir verabschieden ___ von den Freunden.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "uns", "rule": "sich verabschieden von + Dat"}, {"q": "Du musst ___ anstrengen.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "dich", "rule": "sich anstrengen (Akk-Reflexiv)"}, {"q": "Ich stelle ___ das vor.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "mir", "rule": "Dativ-Reflexiv: sich(Dat) vorstellen"}, {"q": "Er rasiert ___ jeden Morgen.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich rasieren (Akk-Reflexiv)"}, {"q": "Ihr müsst ___ vorbereiten.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "euch", "rule": "sich vorbereiten (Akk-Reflexiv)"}, {"q": "Sie erholt ___ am Wochenende.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich erholen (Akk-Reflexiv)"}, {"q": "Wir unterhalten ___ über Politik.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "uns", "rule": "sich unterhalten über + Akk"}, {"q": "Du duscht ___ schnell.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "dich", "rule": "sich duschen (Akk-Reflexiv)"}, {"q": "Ich merke ___ die Nummer.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "mir", "rule": "Dativ-Reflexiv: sich(Dat) merken"}, {"q": "Er konzentriert ___ auf die Arbeit.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich konzentrieren auf + Akk"}, {"q": "Ihr beschwert ___ über den Lärm.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "euch", "rule": "sich beschweren über + Akk"}, {"q": "Sie entscheidet ___ für den Job.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich entscheiden für + Akk"}, {"q": "Wir sehen ___ morgen.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "uns", "rule": "sich sehen (Akk-Reflexiv)"}, {"q": "Du ziehst ___ warm an.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "dich", "rule": "sich anziehen (Akk-Reflexiv)"}, {"q": "Ich bewerbe ___ um die Stelle.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "mich", "rule": "sich bewerben um + Akk"}, {"q": "Er wundert ___ über das Ergebnis.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich wundern über + Akk"}, {"q": "Sie gewöhnt ___ an das Klima.", "opts": ["mich", "mir", "dich", "dir", "sich", "uns", "euch"], "ans": "sich", "rule": "sich gewöhnen an + Akk"}]},

    // 5. Präteritum
    {name:"Verben im Präteritum",
     desc:"Ergänzen Sie die Verben im Präteritum!",
     items:[{"q": "fahren → er ___", "opts": ["fuhr", "war", "wollte", "konnte"], "ans": "fuhr", "rule": "fahren → fuhr (starkes Verb, a→u)"}, {"q": "kommen → sie ___", "opts": ["kam", "war", "wollte", "konnte"], "ans": "kam", "rule": "kommen → kam (starkes Verb, o→a)"}, {"q": "gehen → ich ___", "opts": ["ging", "war", "wollte", "konnte"], "ans": "ging", "rule": "gehen → ging (starkes Verb)"}, {"q": "sehen → er ___", "opts": ["sah", "war", "wollte", "konnte"], "ans": "sah", "rule": "sehen → sah (starkes Verb, e→a)"}, {"q": "lesen → sie ___", "opts": ["las", "war", "wollte", "konnte"], "ans": "las", "rule": "lesen → las (starkes Verb, e→a)"}, {"q": "schreiben → er ___", "opts": ["schrieb", "war", "wollte", "konnte"], "ans": "schrieb", "rule": "schreiben → schrieb (starkes Verb, ei→ie)"}, {"q": "sprechen → sie ___", "opts": ["sprach", "war", "wollte", "konnte"], "ans": "sprach", "rule": "sprechen → sprach (starkes Verb, e→a)"}, {"q": "essen → er ___", "opts": ["aß", "war", "wollte", "konnte"], "ans": "aß", "rule": "essen → aß (starkes Verb, e→a)"}, {"q": "trinken → sie ___", "opts": ["trank", "war", "wollte", "konnte"], "ans": "trank", "rule": "trinken → trank (starkes Verb, i→a)"}, {"q": "finden → ich ___", "opts": ["fand", "war", "wollte", "konnte"], "ans": "fand", "rule": "finden → fand (starkes Verb, i→a)"}, {"q": "helfen → er ___", "opts": ["half", "war", "wollte", "konnte"], "ans": "half", "rule": "helfen → half (starkes Verb, e→a)"}, {"q": "nehmen → sie ___", "opts": ["nahm", "war", "wollte", "konnte"], "ans": "nahm", "rule": "nehmen → nahm (starkes Verb, e→a)"}, {"q": "geben → er ___", "opts": ["gab", "war", "wollte", "konnte"], "ans": "gab", "rule": "geben → gab (starkes Verb, e→a)"}, {"q": "stehen → ich ___", "opts": ["stand", "war", "wollte", "konnte"], "ans": "stand", "rule": "stehen → stand (starkes Verb)"}, {"q": "sitzen → er ___", "opts": ["saß", "war", "wollte", "konnte"], "ans": "saß", "rule": "sitzen → saß (starkes Verb, i→a)"}, {"q": "liegen → sie ___", "opts": ["lag", "war", "wollte", "konnte"], "ans": "lag", "rule": "liegen → lag (starkes Verb, ie→a)"}, {"q": "schlafen → er ___", "opts": ["schlief", "war", "wollte", "konnte"], "ans": "schlief", "rule": "schlafen → schlief (starkes Verb, a→ie)"}, {"q": "laufen → sie ___", "opts": ["lief", "war", "wollte", "konnte"], "ans": "lief", "rule": "laufen → lief (starkes Verb, au→ie)"}, {"q": "tragen → er ___", "opts": ["trug", "war", "wollte", "konnte"], "ans": "trug", "rule": "tragen → trug (starkes Verb, a→u)"}, {"q": "fliegen → ich ___", "opts": ["flog", "war", "wollte", "konnte"], "ans": "flog", "rule": "fliegen → flog (starkes Verb, ie→o)"}, {"q": "rufen → er ___", "opts": ["rief", "war", "wollte", "konnte"], "ans": "rief", "rule": "rufen → rief (starkes Verb, u→ie)"}, {"q": "wissen → sie ___", "opts": ["wusste", "war", "wollte", "konnte"], "ans": "wusste", "rule": "wissen → wusste (gemischtes Verb)"}, {"q": "bringen → er ___", "opts": ["brachte", "war", "wollte", "konnte"], "ans": "brachte", "rule": "bringen → brachte (gemischtes Verb)"}, {"q": "denken → ich ___", "opts": ["dachte", "war", "wollte", "konnte"], "ans": "dachte", "rule": "denken → dachte (gemischtes Verb)"}, {"q": "kennen → er ___", "opts": ["kannte", "war", "wollte", "konnte"], "ans": "kannte", "rule": "kennen → kannte (gemischtes Verb)"}, {"q": "beginnen → sie ___", "opts": ["begann", "war", "wollte", "konnte"], "ans": "begann", "rule": "beginnen → begann (starkes Verb, i→a)"}, {"q": "gewinnen → er ___", "opts": ["gewann", "war", "wollte", "konnte"], "ans": "gewann", "rule": "gewinnen → gewann (starkes Verb, i→a)"}, {"q": "fallen → ich ___", "opts": ["fiel", "war", "wollte", "konnte"], "ans": "fiel", "rule": "fallen → fiel (starkes Verb, a→ie)"}, {"q": "bleiben → er ___", "opts": ["blieb", "war", "wollte", "konnte"], "ans": "blieb", "rule": "bleiben → blieb (starkes Verb, ei→ie)"}, {"q": "werden → sie ___", "opts": ["wurde", "war", "wollte", "konnte"], "ans": "wurde", "rule": "werden → wurde (starkes Verb, e→u)"}]},

    // 6. Präpositionen, wo-/da-/dar- Formen
    {name:"Präpositionen und Pronominaladverbien",
     desc:"Setzen Sie die passenden Präpositionen, Fragewörter und Adverbien (da-/dar-) ein!",
     items:[{"q": "Ich interessiere mich ___ Musik.", "opts": ["für", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "für", "rule": "sich interessieren für + Akk"}, {"q": "Er wartet ___ den Bus.", "opts": ["auf", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "auf", "rule": "warten auf + Akk"}, {"q": "Wir sprechen ___ das Problem.", "opts": ["über", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "über", "rule": "sprechen über + Akk"}, {"q": "Sie freut sich ___ das Geschenk.", "opts": ["über", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "über", "rule": "sich freuen über + Akk (geschehen)"}, {"q": "Er denkt ___ seine Familie.", "opts": ["an", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "an", "rule": "denken an + Akk"}, {"q": "Ich habe Angst ___ Hunden.", "opts": ["vor", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "vor", "rule": "Angst haben vor + Dat"}, {"q": "Er kümmert sich ___ die Kinder.", "opts": ["um", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "um", "rule": "sich kümmern um + Akk"}, {"q": "Sie träumt ___ einer Reise.", "opts": ["von", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "von", "rule": "träumen von + Dat"}, {"q": "Wir beschäftigen uns ___ dem Thema.", "opts": ["mit", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "mit", "rule": "sich beschäftigen mit + Dat"}, {"q": "Er leidet ___ Kopfschmerzen.", "opts": ["unter", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "unter", "rule": "leiden unter + Dat"}, {"q": "___ sprichst du gern? — Über Filme.", "opts": ["Worüber", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Worüber", "rule": "wo(r)+Präposition bei Sachen"}, {"q": "___ freust du dich? — Auf den Urlaub.", "opts": ["Worauf", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Worauf", "rule": "wo(r)+Präposition bei Sachen"}, {"q": "___ denkst du? — An meine Prüfung.", "opts": ["auf", "darüber", "damit", "darauf", "Woran", "worüber"], "ans": "Woran", "rule": "wo(r)+Präposition bei Sachen"}, {"q": "___ hast du Angst? — Vor Spinnen.", "opts": ["Wovor", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Wovor", "rule": "wo(r)+Präposition bei Sachen"}, {"q": "___ beschäftigst du dich? — Mit Kunst.", "opts": ["Womit", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Womit", "rule": "wo(r)+Präposition bei Sachen"}, {"q": "Ich interessiere mich ___ — nämlich für Sport.", "opts": ["dafür", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "dafür", "rule": "da(r)+Präposition = Verweis"}, {"q": "Er freut sich ___, dass du kommst.", "opts": ["darüber", "auf", "damit", "darauf", "worüber", "woran"], "ans": "darüber", "rule": "da(r)+Präposition vor dass-Satz"}, {"q": "Ich denke oft ___, was er gesagt hat.", "opts": ["daran", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "daran", "rule": "da(r)+Präposition = Verweis"}, {"q": "Sie ärgert sich ___, dass er zu spät kommt.", "opts": ["darüber", "auf", "damit", "darauf", "worüber", "woran"], "ans": "darüber", "rule": "da(r)+Präposition vor dass-Satz"}, {"q": "Wir warten ___, dass es aufhört zu regnen.", "opts": ["auf", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "darauf", "rule": "da(r)+Präposition vor dass-Satz"}, {"q": "Er hat Angst ___, allein zu sein.", "opts": ["davor", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "davor", "rule": "da(r)+Präposition vor zu-Infinitiv"}, {"q": "Ich kümmere mich ___.", "opts": ["darum", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "darum", "rule": "da(r)+Präposition = Verweis"}, {"q": "___ ärgerst du dich? — Über den Lärm.", "opts": ["Worüber", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Worüber", "rule": "wo(r)+Präposition = Frage nach Sachen"}, {"q": "___ wartest du? — Auf die Antwort.", "opts": ["Worauf", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Worauf", "rule": "wo(r)+Präposition = Frage"}, {"q": "___ träumst du? — Von einer Weltreise.", "opts": ["Wovon", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Wovon", "rule": "wo(r)+Präposition = Frage"}, {"q": "___ hängt das ab? — Vom Wetter.", "opts": ["Wovon", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Wovon", "rule": "wo(r)+Präposition = Frage"}, {"q": "Er hat ___ gerechnet, dass es regnet.", "opts": ["auf", "damit", "darüber", "darauf", "worüber", "woran"], "ans": "damit", "rule": "da(r)+mit = Verweis"}, {"q": "Ich bin ___ zufrieden.", "opts": ["auf", "damit", "darüber", "darauf", "worüber", "woran"], "ans": "damit", "rule": "da(r)+mit = Verweis"}, {"q": "___ interessierst du dich? — Für Geschichte.", "opts": ["Wofür", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "Wofür", "rule": "wo(r)+Präposition = Frage"}, {"q": "Sie gewöhnt sich ___, früh aufzustehen.", "opts": ["daran", "darüber", "damit", "darauf", "worüber", "woran"], "ans": "daran", "rule": "da(r)+an vor zu-Infinitiv"}]},

    // 7. Gemischte Grammatik
    {name:"Gemischte Grammatikübungen",
     desc:"Ergänzen Sie die Lücken! Konnektoren, Verben, Pronomen, Artikel, Präpositionen.",
     items:[{"q": "___ er nach Hause kam, war er müde.", "opts": ["Als", "als", "wenn", "weil"], "ans": "Als", "rule": "Konnektor: als (einmalig, Vergangenheit)"}, {"q": "Sie lernt Deutsch, ___ sie in Wien arbeiten will.", "opts": ["weil", "als", "wenn", "obwohl"], "ans": "weil", "rule": "Kausalsatz: weil + Verb am Ende"}, {"q": "___ sie krank war, ging sie zur Arbeit.", "opts": ["Obwohl", "als", "wenn", "weil"], "ans": "Obwohl", "rule": "Konzessivsatz: obwohl + Verb am Ende"}, {"q": "Er spricht langsam, ___ alle verstehen.", "opts": ["damit", "als", "wenn", "weil"], "ans": "damit", "rule": "Finalsatz: damit + Verb am Ende"}, {"q": "Ich ___ (waschen) mir die Hände.", "opts": ["wasche", "als", "wenn", "weil"], "ans": "wasche", "rule": "Präsens: waschen → ich wasche"}, {"q": "Er ___ (fahren) gestern nach Berlin.", "opts": ["fuhr", "als", "wenn", "weil"], "ans": "fuhr", "rule": "Präteritum: fahren → fuhr"}, {"q": "Sie hat das Buch ___ (lesen).", "opts": ["gelesen", "als", "wenn", "weil"], "ans": "gelesen", "rule": "Perfekt: lesen → gelesen"}, {"q": "Das Haus ___ (bauen) im Jahr 2000 gebaut.", "opts": ["wurde", "als", "wenn", "weil"], "ans": "wurde", "rule": "Passiv Präteritum: wurde + Partizip II"}, {"q": "___ ich du wäre, würde ich mehr lernen.", "opts": ["Wenn", "als", "wenn", "weil"], "ans": "Wenn", "rule": "Konjunktiv II: Wenn + wäre"}, {"q": "Er ___ (können) gestern nicht kommen.", "opts": ["konnte", "als", "wenn", "weil"], "ans": "konnte", "rule": "Modalverb Präteritum: können → konnte"}, {"q": "Sie ___ (müssen) morgen arbeiten.", "opts": ["muss", "als", "wenn", "weil"], "ans": "muss", "rule": "Modalverb Präsens: müssen → muss"}, {"q": "Er ist größer ___ sein Bruder.", "opts": ["als", "wenn", "weil", "obwohl"], "ans": "als", "rule": "Komparativ: als bei Vergleich"}, {"q": "Berlin ist ___ schönsten im Sommer.", "opts": ["am", "als", "wenn", "weil"], "ans": "am", "rule": "Superlativ: am + Adjektiv + sten"}, {"q": "Das ist der Mann, ___ ich gestern getroffen habe.", "opts": ["den", "als", "wenn", "weil"], "ans": "den", "rule": "Relativpronomen Akkusativ maskulin"}, {"q": "Die Frau, ___ ich helfe, ist nett.", "opts": ["der", "als", "wenn", "weil"], "ans": "der", "rule": "Relativpronomen Dativ feminin"}, {"q": "Ich freue ___ auf den Urlaub.", "opts": ["mich", "als", "wenn", "weil"], "ans": "mich", "rule": "Reflexivpronomen Akkusativ: ich → mich"}, {"q": "Er kauft ___ ein Buch.", "opts": ["sich", "als", "wenn", "weil"], "ans": "sich", "rule": "Reflexivpronomen Dativ: er → sich"}, {"q": "___ Wetter ist heute schön.", "opts": ["Das", "als", "wenn", "weil"], "ans": "Das", "rule": "Artikel: das Wetter (Neutrum)"}, {"q": "Ich gehe ___ Arzt.", "opts": ["zum", "als", "wenn", "weil"], "ans": "zum", "rule": "Präposition: zu + dem = zum"}, {"q": "Er kommt ___ der Schule.", "opts": ["aus", "als", "wenn", "weil"], "ans": "aus", "rule": "Präposition: aus + Dativ"}, {"q": "Sie wohnt ___ Berlin.", "opts": ["in", "als", "wenn", "weil"], "ans": "in", "rule": "Präposition: in + Dativ (Ort)"}, {"q": "Wir fahren ___ München.", "opts": ["nach", "als", "wenn", "weil"], "ans": "nach", "rule": "Präposition: nach + Städte/Länder"}, {"q": "Der Brief ___ Herrn Müller ist da.", "opts": ["des", "als", "wenn", "weil"], "ans": "des", "rule": "Genitiv: des Herrn (n-Deklination)"}, {"q": "Ich helfe ___ Studenten.", "opts": ["dem", "als", "wenn", "weil"], "ans": "dem", "rule": "Dativ: dem Studenten (n-Deklination)"}, {"q": "___ ich Zeit hätte, würde ich reisen.", "opts": ["Wenn", "als", "wenn", "weil"], "ans": "Wenn", "rule": "Konjunktiv II: irrealer Wunsch"}, {"q": "Er hat ___ gesagt, dass er kommt.", "opts": ["mir", "als", "wenn", "weil"], "ans": "mir", "rule": "Dativ-Objekt: mir (Person)"}, {"q": "___ du kommst, können wir essen.", "opts": ["Wenn", "als", "wenn", "weil"], "ans": "Wenn", "rule": "wenn = wenn/falls (Bedingung)"}, {"q": "Ich lerne, ___ ich die Prüfung bestehe.", "opts": ["damit", "als", "wenn", "weil"], "ans": "damit", "rule": "Finalsatz: damit"}, {"q": "___ er studiert, arbeitet er auch.", "opts": ["Während", "als", "wenn", "weil"], "ans": "Während", "rule": "Temporalsatz: während = gleichzeitig"}, {"q": "Er spricht ___ Deutsch ___ Englisch.", "opts": ["sowohl...als auch", "als", "wenn", "weil"], "ans": "sowohl...als auch", "rule": "Zweiteilige Konjunktion"}]},

  ],
  wortschatz: [
    {
      "name": "Passende Objekte mit Artikel",
      "desc": "Welches Objekt passt zum Verb? Wählen Sie die richtige Kombination mit Artikel!",
      "items": [
        {
          "q": "kochen → ___",
          "opts": [
            "das Essen",
            "den Tisch",
            "die Lampe",
            "das Fenster"
          ],
          "ans": "das Essen",
          "rule": "kochen → das Essen kochen"
        },
        {
          "q": "lesen → ___",
          "opts": [
            "das Buch",
            "den Stuhl",
            "die Wand",
            "das Dach"
          ],
          "ans": "das Buch",
          "rule": "lesen → das Buch lesen"
        },
        {
          "q": "trinken → ___",
          "opts": [
            "den Kaffee",
            "den Teppich",
            "die Tür",
            "das Regal"
          ],
          "ans": "den Kaffee",
          "rule": "trinken → den Kaffee trinken"
        },
        {
          "q": "schreiben → ___",
          "opts": [
            "den Brief",
            "den Schrank",
            "die Decke",
            "das Kissen"
          ],
          "ans": "den Brief",
          "rule": "schreiben → den Brief schreiben"
        },
        {
          "q": "putzen → ___",
          "opts": [
            "die Wohnung",
            "den Apfel",
            "das Lied",
            "den Wald"
          ],
          "ans": "die Wohnung",
          "rule": "putzen → die Wohnung putzen"
        },
        {
          "q": "waschen → ___",
          "opts": [
            "die Wäsche",
            "den Berg",
            "das Konzert",
            "den Park"
          ],
          "ans": "die Wäsche",
          "rule": "waschen → die Wäsche waschen"
        },
        {
          "q": "öffnen → ___",
          "opts": [
            "die Tür",
            "das Wetter",
            "den Hunger",
            "die Müdigkeit"
          ],
          "ans": "die Tür",
          "rule": "öffnen → die Tür öffnen"
        },
        {
          "q": "bezahlen → ___",
          "opts": [
            "die Rechnung",
            "den Regen",
            "das Glück",
            "die Luft"
          ],
          "ans": "die Rechnung",
          "rule": "bezahlen → die Rechnung bezahlen"
        },
        {
          "q": "buchen → ___",
          "opts": [
            "die Reise",
            "den Stuhl",
            "das Gras",
            "den Löffel"
          ],
          "ans": "die Reise",
          "rule": "buchen → die Reise buchen"
        },
        {
          "q": "bestehen → ___",
          "opts": [
            "die Prüfung",
            "den Teller",
            "das Sofa",
            "die Blume"
          ],
          "ans": "die Prüfung",
          "rule": "bestehen → die Prüfung bestehen"
        },
        {
          "q": "bügeln → ___",
          "opts": [
            "das Hemd",
            "den Computer",
            "die Brücke",
            "das Fahrrad"
          ],
          "ans": "das Hemd",
          "rule": "bügeln → das Hemd bügeln"
        },
        {
          "q": "gießen → ___",
          "opts": [
            "die Blumen",
            "den Fernseher",
            "das Bett",
            "den Koffer"
          ],
          "ans": "die Blumen",
          "rule": "gießen → die Blumen gießen"
        },
        {
          "q": "abschließen → ___",
          "opts": [
            "die Haustür",
            "den Hunger",
            "das Wetter",
            "die Freude"
          ],
          "ans": "die Haustür",
          "rule": "abschließen → die Haustür abschließen"
        },
        {
          "q": "anziehen → ___",
          "opts": [
            "den Mantel",
            "den Tisch",
            "das Fenster",
            "die Wand"
          ],
          "ans": "den Mantel",
          "rule": "anziehen → den Mantel anziehen"
        },
        {
          "q": "aufräumen → ___",
          "opts": [
            "das Zimmer",
            "den Himmel",
            "die Sonne",
            "den Berg"
          ],
          "ans": "das Zimmer",
          "rule": "aufräumen → das Zimmer aufräumen"
        },
        {
          "q": "reparieren → ___",
          "opts": [
            "das Auto",
            "den Regen",
            "die Wolke",
            "das Wetter"
          ],
          "ans": "das Auto",
          "rule": "reparieren → das Auto reparieren"
        },
        {
          "q": "unterschreiben → ___",
          "opts": [
            "den Vertrag",
            "die Suppe",
            "das Bild",
            "den Kuchen"
          ],
          "ans": "den Vertrag",
          "rule": "unterschreiben → den Vertrag unterschreiben"
        },
        {
          "q": "reservieren → ___",
          "opts": [
            "den Tisch",
            "den Baum",
            "die Sonne",
            "das Gras"
          ],
          "ans": "den Tisch",
          "rule": "reservieren → den Tisch reservieren"
        },
        {
          "q": "abgeben → ___",
          "opts": [
            "die Hausaufgabe",
            "den Himmel",
            "das Meer",
            "die Luft"
          ],
          "ans": "die Hausaufgabe",
          "rule": "abgeben → die Hausaufgabe abgeben"
        },
        {
          "q": "besuchen → ___",
          "opts": [
            "den Kurs",
            "die Wolke",
            "das Dach",
            "den Boden"
          ],
          "ans": "den Kurs",
          "rule": "besuchen → den Kurs besuchen"
        },
        {
          "q": "kündigen → ___",
          "opts": [
            "den Job",
            "das Fenster",
            "die Lampe",
            "den Teppich"
          ],
          "ans": "den Job",
          "rule": "kündigen → den Job kündigen"
        },
        {
          "q": "verlängern → ___",
          "opts": [
            "das Visum",
            "den Stuhl",
            "die Wand",
            "den Löffel"
          ],
          "ans": "das Visum",
          "rule": "verlängern → das Visum verlängern"
        },
        {
          "q": "ausfüllen → ___",
          "opts": [
            "das Formular",
            "den Baum",
            "die Blume",
            "das Gras"
          ],
          "ans": "das Formular",
          "rule": "ausfüllen → das Formular ausfüllen"
        },
        {
          "q": "wechseln → ___",
          "opts": [
            "das Geld",
            "den Berg",
            "die Wolke",
            "den See"
          ],
          "ans": "das Geld",
          "rule": "wechseln → das Geld wechseln"
        },
        {
          "q": "staubsaugen → ___",
          "opts": [
            "den Teppich",
            "den Regen",
            "das Lied",
            "die Sonne"
          ],
          "ans": "den Teppich",
          "rule": "staubsaugen → den Teppich staubsaugen"
        },
        {
          "q": "spülen → ___",
          "opts": [
            "das Geschirr",
            "den Park",
            "die Straße",
            "den Wald"
          ],
          "ans": "das Geschirr",
          "rule": "spülen → das Geschirr spülen"
        },
        {
          "q": "einlösen → ___",
          "opts": [
            "den Gutschein",
            "das Dach",
            "die Mauer",
            "den Boden"
          ],
          "ans": "den Gutschein",
          "rule": "einlösen → den Gutschein einlösen"
        },
        {
          "q": "überweisen → ___",
          "opts": [
            "das Geld",
            "den Stuhl",
            "die Tür",
            "den Vorhang"
          ],
          "ans": "das Geld",
          "rule": "überweisen → das Geld überweisen"
        },
        {
          "q": "absagen → ___",
          "opts": [
            "den Termin",
            "das Regal",
            "die Decke",
            "den Teppich"
          ],
          "ans": "den Termin",
          "rule": "absagen → den Termin absagen"
        },
        {
          "q": "einwerfen → ___",
          "opts": [
            "den Brief",
            "die Lampe",
            "das Bett",
            "den Schrank"
          ],
          "ans": "den Brief",
          "rule": "einwerfen → den Brief einwerfen"
        }
      ]
    },
    {
      "name": "Was passt NICHT?",
      "desc": "Welches Wort passt NICHT in die Reihe? Finden Sie das falsche Wort!",
      "items": [
        {
          "q": "Obst: Apfel, Birne, ___",
          "opts": [
            "Kirsche",
            "Stuhl",
            "Traube",
            "Orange"
          ],
          "ans": "Stuhl",
          "rule": "der Stuhl = Möbel, kein Obst"
        },
        {
          "q": "Gemüse: Karotte, Tomate, ___",
          "opts": [
            "Gurke",
            "Heft",
            "Paprika",
            "Zwiebel"
          ],
          "ans": "Heft",
          "rule": "das Heft = Schreibwaren, kein Gemüse"
        },
        {
          "q": "Möbel: Tisch, Stuhl, ___",
          "opts": [
            "Schrank",
            "Apfel",
            "Regal",
            "Sofa"
          ],
          "ans": "Apfel",
          "rule": "der Apfel = Obst, kein Möbel"
        },
        {
          "q": "Kleidung: Hose, Jacke, ___",
          "opts": [
            "Hemd",
            "Tisch",
            "Rock",
            "Pullover"
          ],
          "ans": "Tisch",
          "rule": "der Tisch = Möbel, keine Kleidung"
        },
        {
          "q": "Verkehrsmittel: Bus, Zug, ___",
          "opts": [
            "Auto",
            "Buch",
            "Straßenbahn",
            "Fahrrad"
          ],
          "ans": "Buch",
          "rule": "das Buch = kein Verkehrsmittel"
        },
        {
          "q": "Getränke: Wasser, Saft, ___",
          "opts": [
            "Tee",
            "Schere",
            "Milch",
            "Kaffee"
          ],
          "ans": "Schere",
          "rule": "die Schere = Werkzeug, kein Getränk"
        },
        {
          "q": "Körperteile: Arm, Bein, ___",
          "opts": [
            "Kopf",
            "Teller",
            "Hand",
            "Fuß"
          ],
          "ans": "Teller",
          "rule": "der Teller = Geschirr, kein Körperteil"
        },
        {
          "q": "Berufe: Arzt, Lehrer, ___",
          "opts": [
            "Ingenieur",
            "Fenster",
            "Koch",
            "Polizist"
          ],
          "ans": "Fenster",
          "rule": "das Fenster = kein Beruf"
        },
        {
          "q": "Tiere: Hund, Katze, ___",
          "opts": [
            "Pferd",
            "Bleistift",
            "Vogel",
            "Fisch"
          ],
          "ans": "Bleistift",
          "rule": "der Bleistift = Schreibwaren, kein Tier"
        },
        {
          "q": "Farben: rot, blau, ___",
          "opts": [
            "grün",
            "schnell",
            "gelb",
            "weiß"
          ],
          "ans": "schnell",
          "rule": "schnell = Adjektiv der Geschwindigkeit, keine Farbe"
        },
        {
          "q": "Schulfächer: Mathe, Deutsch, ___",
          "opts": [
            "Biologie",
            "Koffer",
            "Physik",
            "Geschichte"
          ],
          "ans": "Koffer",
          "rule": "der Koffer = kein Schulfach"
        },
        {
          "q": "Wetter: Regen, Schnee, ___",
          "opts": [
            "Wind",
            "Gabel",
            "Sonne",
            "Gewitter"
          ],
          "ans": "Gabel",
          "rule": "die Gabel = Besteck, kein Wetter"
        },
        {
          "q": "Familie: Mutter, Vater, ___",
          "opts": [
            "Schwester",
            "Zeitung",
            "Bruder",
            "Tante"
          ],
          "ans": "Zeitung",
          "rule": "die Zeitung = Medien, keine Familie"
        },
        {
          "q": "Geschirr: Teller, Tasse, ___",
          "opts": [
            "Glas",
            "Hund",
            "Schüssel",
            "Kanne"
          ],
          "ans": "Hund",
          "rule": "der Hund = Tier, kein Geschirr"
        },
        {
          "q": "Sportarten: Fußball, Tennis, ___",
          "opts": [
            "Schwimmen",
            "Tomate",
            "Basketball",
            "Volleyball"
          ],
          "ans": "Tomate",
          "rule": "die Tomate = Gemüse, keine Sportart"
        },
        {
          "q": "Werkzeuge: Hammer, Zange, ___",
          "opts": [
            "Schraubenzieher",
            "Milch",
            "Bohrer",
            "Säge"
          ],
          "ans": "Milch",
          "rule": "die Milch = Getränk, kein Werkzeug"
        },
        {
          "q": "Musikinstrumente: Gitarre, Klavier, ___",
          "opts": [
            "Geige",
            "Mantel",
            "Trompete",
            "Flöte"
          ],
          "ans": "Mantel",
          "rule": "der Mantel = Kleidung, kein Instrument"
        },
        {
          "q": "Büromaterial: Kugelschreiber, Papier, ___",
          "opts": [
            "Ordner",
            "Suppe",
            "Schere",
            "Lineal"
          ],
          "ans": "Suppe",
          "rule": "die Suppe = Essen, kein Büromaterial"
        },
        {
          "q": "Gebäude: Schule, Krankenhaus, ___",
          "opts": [
            "Rathaus",
            "Birne",
            "Kirche",
            "Museum"
          ],
          "ans": "Birne",
          "rule": "die Birne = Obst, kein Gebäude"
        },
        {
          "q": "Monate: Januar, März, ___",
          "opts": [
            "Juli",
            "Tisch",
            "Oktober",
            "Dezember"
          ],
          "ans": "Tisch",
          "rule": "der Tisch = Möbel, kein Monat"
        },
        {
          "q": "Hobbys: Lesen, Malen, ___",
          "opts": [
            "Kochen",
            "Regal",
            "Tanzen",
            "Wandern"
          ],
          "ans": "Regal",
          "rule": "das Regal = Möbel, kein Hobby"
        },
        {
          "q": "Gewürze: Salz, Pfeffer, ___",
          "opts": [
            "Zimt",
            "Sofa",
            "Paprika",
            "Basilikum"
          ],
          "ans": "Sofa",
          "rule": "das Sofa = Möbel, kein Gewürz"
        },
        {
          "q": "Oberflächen: glatt, rau, ___",
          "opts": [
            "weich",
            "gestern",
            "hart",
            "feucht"
          ],
          "ans": "gestern",
          "rule": "gestern = Zeitadverb, keine Oberfläche"
        },
        {
          "q": "Emotionen: Freude, Trauer, ___",
          "opts": [
            "Angst",
            "Tisch",
            "Wut",
            "Liebe"
          ],
          "ans": "Tisch",
          "rule": "der Tisch = Möbel, keine Emotion"
        },
        {
          "q": "Länder: Österreich, Deutschland, ___",
          "opts": [
            "Schweiz",
            "Gurke",
            "Frankreich",
            "Italien"
          ],
          "ans": "Gurke",
          "rule": "die Gurke = Gemüse, kein Land"
        },
        {
          "q": "Materialien: Holz, Metall, ___",
          "opts": [
            "Glas",
            "Montag",
            "Plastik",
            "Stoff"
          ],
          "ans": "Montag",
          "rule": "Montag = Wochentag, kein Material"
        },
        {
          "q": "Mahlzeiten: Frühstück, Mittagessen, ___",
          "opts": [
            "Abendessen",
            "Bleistift",
            "Jause",
            "Snack"
          ],
          "ans": "Bleistift",
          "rule": "der Bleistift = Schreibwaren, keine Mahlzeit"
        },
        {
          "q": "Dokumente: Reisepass, Führerschein, ___",
          "opts": [
            "Visum",
            "Baum",
            "Meldezettel",
            "Geburtsurkunde"
          ],
          "ans": "Baum",
          "rule": "der Baum = Pflanze, kein Dokument"
        },
        {
          "q": "Räume: Küche, Schlafzimmer, ___",
          "opts": [
            "Badezimmer",
            "Hose",
            "Wohnzimmer",
            "Flur"
          ],
          "ans": "Hose",
          "rule": "die Hose = Kleidung, kein Raum"
        },
        {
          "q": "Medien: Zeitung, Radio, ___",
          "opts": [
            "Fernsehen",
            "Karotte",
            "Internet",
            "Buch"
          ],
          "ans": "Karotte",
          "rule": "die Karotte = Gemüse, kein Medium"
        }
      ]
    },
    {
      "name": "Nomen und Überbegriffe",
      "desc": "Welcher Überbegriff passt zu den Wörtern? Ordnen Sie zu!",
      "items": [
        {
          "q": "Apfel, Banane, Orange → ___",
          "opts": [
            "Obst",
            "Gemüse",
            "Getränke",
            "Möbel"
          ],
          "ans": "Obst",
          "rule": "Obst = фрукты / fruits"
        },
        {
          "q": "Karotte, Gurke, Paprika → ___",
          "opts": [
            "Gemüse",
            "Obst",
            "Fleisch",
            "Getränke"
          ],
          "ans": "Gemüse",
          "rule": "Gemüse = овощи / vegetables"
        },
        {
          "q": "Tisch, Stuhl, Schrank → ___",
          "opts": [
            "Möbel",
            "Kleidung",
            "Geschirr",
            "Werkzeuge"
          ],
          "ans": "Möbel",
          "rule": "Möbel = мебель / furniture"
        },
        {
          "q": "Hose, Jacke, Pullover → ___",
          "opts": [
            "Kleidung",
            "Möbel",
            "Obst",
            "Berufe"
          ],
          "ans": "Kleidung",
          "rule": "Kleidung = одежда / clothing"
        },
        {
          "q": "Bus, Zug, Straßenbahn → ___",
          "opts": [
            "Verkehrsmittel",
            "Gebäude",
            "Berufe",
            "Sportarten"
          ],
          "ans": "Verkehrsmittel",
          "rule": "Verkehrsmittel = транспорт / transport"
        },
        {
          "q": "Arzt, Lehrer, Ingenieur → ___",
          "opts": [
            "Berufe",
            "Tiere",
            "Farben",
            "Hobbys"
          ],
          "ans": "Berufe",
          "rule": "Berufe = профессии / professions"
        },
        {
          "q": "Hund, Katze, Pferd → ___",
          "opts": [
            "Tiere",
            "Berufe",
            "Möbel",
            "Kleidung"
          ],
          "ans": "Tiere",
          "rule": "Tiere = животные / animals"
        },
        {
          "q": "Teller, Tasse, Glas → ___",
          "opts": [
            "Geschirr",
            "Werkzeuge",
            "Kleidung",
            "Gebäude"
          ],
          "ans": "Geschirr",
          "rule": "Geschirr = посуда / dishes"
        },
        {
          "q": "Fußball, Tennis, Schwimmen → ___",
          "opts": [
            "Sportarten",
            "Berufe",
            "Getränke",
            "Farben"
          ],
          "ans": "Sportarten",
          "rule": "Sportarten = виды спорта / sports"
        },
        {
          "q": "Hammer, Zange, Säge → ___",
          "opts": [
            "Werkzeuge",
            "Geschirr",
            "Möbel",
            "Tiere"
          ],
          "ans": "Werkzeuge",
          "rule": "Werkzeuge = инструменты / tools"
        },
        {
          "q": "Gitarre, Klavier, Geige → ___",
          "opts": [
            "Musikinstrumente",
            "Sportarten",
            "Berufe",
            "Werkzeuge"
          ],
          "ans": "Musikinstrumente",
          "rule": "Musikinstrumente = муз. инструменты / instruments"
        },
        {
          "q": "Kugelschreiber, Papier, Ordner → ___",
          "opts": [
            "Büromaterial",
            "Kleidung",
            "Geschirr",
            "Lebensmittel"
          ],
          "ans": "Büromaterial",
          "rule": "Büromaterial = канцелярия / stationery"
        },
        {
          "q": "Schule, Krankenhaus, Rathaus → ___",
          "opts": [
            "Gebäude",
            "Verkehrsmittel",
            "Tiere",
            "Farben"
          ],
          "ans": "Gebäude",
          "rule": "Gebäude = здания / buildings"
        },
        {
          "q": "Januar, März, Oktober → ___",
          "opts": [
            "Monate",
            "Farben",
            "Sportarten",
            "Berufe"
          ],
          "ans": "Monate",
          "rule": "Monate = месяцы / months"
        },
        {
          "q": "Kopf, Arm, Bein → ___",
          "opts": [
            "Körperteile",
            "Kleidung",
            "Möbel",
            "Tiere"
          ],
          "ans": "Körperteile",
          "rule": "Körperteile = части тела / body parts"
        },
        {
          "q": "Regen, Schnee, Gewitter → ___",
          "opts": [
            "Wetter",
            "Farben",
            "Tiere",
            "Hobbys"
          ],
          "ans": "Wetter",
          "rule": "Wetter = погода / weather"
        },
        {
          "q": "Salz, Pfeffer, Zimt → ___",
          "opts": [
            "Gewürze",
            "Getränke",
            "Gemüse",
            "Obst"
          ],
          "ans": "Gewürze",
          "rule": "Gewürze = специи / spices"
        },
        {
          "q": "Holz, Metall, Plastik → ___",
          "opts": [
            "Materialien",
            "Farben",
            "Monate",
            "Berufe"
          ],
          "ans": "Materialien",
          "rule": "Materialien = материалы / materials"
        },
        {
          "q": "Küche, Schlafzimmer, Bad → ___",
          "opts": [
            "Räume",
            "Gebäude",
            "Verkehrsmittel",
            "Kleidung"
          ],
          "ans": "Räume",
          "rule": "Räume = комнаты / rooms"
        },
        {
          "q": "Reisepass, Visum, Meldezettel → ___",
          "opts": [
            "Dokumente",
            "Geschirr",
            "Möbel",
            "Werkzeuge"
          ],
          "ans": "Dokumente",
          "rule": "Dokumente = документы / documents"
        },
        {
          "q": "Wasser, Saft, Tee → ___",
          "opts": [
            "Getränke",
            "Gemüse",
            "Obst",
            "Gewürze"
          ],
          "ans": "Getränke",
          "rule": "Getränke = напитки / drinks"
        },
        {
          "q": "Mutter, Vater, Schwester → ___",
          "opts": [
            "Familie",
            "Berufe",
            "Tiere",
            "Farben"
          ],
          "ans": "Familie",
          "rule": "Familie = семья / family"
        },
        {
          "q": "Rose, Tulpe, Sonnenblume → ___",
          "opts": [
            "Blumen",
            "Obst",
            "Gemüse",
            "Bäume"
          ],
          "ans": "Blumen",
          "rule": "Blumen = цветы / flowers"
        },
        {
          "q": "Eiche, Birke, Tanne → ___",
          "opts": [
            "Bäume",
            "Blumen",
            "Obst",
            "Gemüse"
          ],
          "ans": "Bäume",
          "rule": "Bäume = деревья / trees"
        },
        {
          "q": "Zeitung, Radio, Fernsehen → ___",
          "opts": [
            "Medien",
            "Werkzeuge",
            "Möbel",
            "Kleidung"
          ],
          "ans": "Medien",
          "rule": "Medien = СМИ / media"
        },
        {
          "q": "Freude, Trauer, Angst → ___",
          "opts": [
            "Emotionen",
            "Farben",
            "Tiere",
            "Berufe"
          ],
          "ans": "Emotionen",
          "rule": "Emotionen = эмоции / emotions"
        },
        {
          "q": "Frühstück, Mittagessen, Abendessen → ___",
          "opts": [
            "Mahlzeiten",
            "Monate",
            "Gebäude",
            "Sportarten"
          ],
          "ans": "Mahlzeiten",
          "rule": "Mahlzeiten = приёмы пищи / meals"
        },
        {
          "q": "Messer, Gabel, Löffel → ___",
          "opts": [
            "Besteck",
            "Werkzeuge",
            "Geschirr",
            "Büromaterial"
          ],
          "ans": "Besteck",
          "rule": "Besteck = столовые приборы / cutlery"
        },
        {
          "q": "Lesen, Wandern, Malen → ___",
          "opts": [
            "Hobbys",
            "Berufe",
            "Sportarten",
            "Schulfächer"
          ],
          "ans": "Hobbys",
          "rule": "Hobbys = хобби / hobbies"
        },
        {
          "q": "Österreich, Deutschland, Schweiz → ___",
          "opts": [
            "Länder",
            "Städte",
            "Gebäude",
            "Monate"
          ],
          "ans": "Länder",
          "rule": "Länder = страны / countries"
        }
      ]
    }
  ]
};


// Auto-wire EV_ZT2_DATA into VWU structure
(function(){
  if(typeof VWU==='undefined') return;
  const ev=VWU.levels.find(l=>l.id==='ev');
  if(!ev) return;
  const zt2=ev.tests.find(t=>t.id==='ev_zt2');
  if(!zt2) return;
  delete zt2.empty;
  const gramRules=['vwu_konnektoren','satz_obwohl','satz_damit','reflexive','satz_praeteritum','prepositions',''];
  const wortRules=['','',''];
  zt2.sections=[];
  EV_ZT2_DATA.grammatik.forEach((g,i)=>{
    const rk=gramRules[i]||'';
    zt2.sections.push({type:'grammatik',name:g.name,desc:g.desc,items:g.items,ruleKey:rk||undefined});
  });
  EV_ZT2_DATA.wortschatz.forEach((w,i)=>{
    zt2.sections.push({type:'grammatik',name:w.name,desc:w.desc,items:w.items});
  });
})();
