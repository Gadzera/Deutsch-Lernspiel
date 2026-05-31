/* Mündliche Abschlussprüfung EV (Uni Wien) — Vorbereitung.
 * window.ORAL_EXAM = { info:{...}, topics:[{ id, title, titleRu, icon, qa:[{ q, ru, a }] }] }
 * a = Musterantwort (B1) — eine VORLAGE zum Anpassen an das eigene Leben.
 * Wird über <script src="data/oral-exam.js"> in react-app.html geladen (kein Bundle). */
(function () {
  'use strict';
  window.ORAL_EXAM = {
    info: {
      datum: '18.06.2026',
      format: 'Du bereitest 6 Zeitungsartikel (DW „Top-Thema") zu den Themen unten vor — wähle Themen, die dich persönlich interessieren. In der Prüfung (ca. 7 Min.) wählt die Prüferin EINEN deiner Artikel; du fasst ihn ca. 1 Minute zusammen und sprichst dann darüber. Pro Artikel darfst du 7 Stichwörter notieren (keine ganzen Sätze).',
      summaryRedemittel: [
        'In dem Artikel geht es um …',
        'Der Artikel handelt von …',
        'Der Text berichtet darüber, dass …',
        'Zuerst … Dann … Außerdem … Am Ende …',
        'Ich habe diesen Artikel gewählt, weil …',
        'Mich hat besonders interessiert, dass …',
        'Meiner Meinung nach … / Ich finde, dass …'
      ],
      tipps: [
        'Antworte in ganzen Sätzen und gib immer einen Grund oder ein Beispiel an — nicht nur einen Satz.',
        'Nutze Konnektoren: weil, deshalb, obwohl, zum Beispiel, einerseits … andererseits.',
        'Pass die Musterantworten an dein eigenes Leben an — die [eckigen Klammern] sind Platzhalter.',
        'Wenn du etwas nicht verstehst: „Können Sie die Frage bitte wiederholen?"'
      ]
    },
    topics: [
      {
        id: 'identitaet', title: 'Identität & Person', titleRu: 'Личность: имя, возраст, происхождение, профессия', icon: 'user',
        qa: [
          { q: 'Wie heißt du und woher kommst du?', ru: 'Как тебя зовут и откуда ты?',
            a: 'Ich heiße [Vorname Nachname] und komme aus [Land]. Genauer gesagt komme ich aus [Stadt], einer Stadt im [Norden/Süden] von [Land]. Ich bin [Alter] Jahre alt und lebe jetzt seit [Zeitangabe] in Wien, weil ich hier an der Universität studieren möchte.' },
          { q: 'Kannst du etwas über deine Herkunft und deine Familie erzählen?', ru: 'Расскажи о своём происхождении и семье.',
            a: 'Ich komme aus [Land], das in [Region] liegt. Meine Familie ist nicht sehr groß: Ich habe [Anzahl] Geschwister, und meine Eltern leben noch in meiner Heimatstadt. Bei uns ist die Familie sehr wichtig, deshalb telefonieren wir fast jeden Tag, obwohl ich jetzt weit weg bin.' },
          { q: 'Was hast du studiert oder gelernt, und warum hast du diesen Weg gewählt?', ru: 'Что ты изучал(а) и почему выбрал(а) этот путь?',
            a: 'In meiner Heimat habe ich [Fach/Beruf] gelernt. Ich habe mich dafür entschieden, weil ich mich schon immer für [Bereich] interessiert habe. Außerdem hat man in diesem Bereich gute Berufschancen. Jetzt möchte ich in Österreich weiterstudieren, um meine Kenntnisse zu vertiefen.' },
          { q: 'Welchen Beruf möchtest du ausüben, und was gefällt dir daran?', ru: 'Какую профессию хочешь и что в ней нравится?',
            a: 'Später möchte ich gern als [Beruf] arbeiten. Daran gefällt mir besonders, dass man [Grund — z. B. mit Menschen arbeitet / kreativ ist / Probleme löst]. Ich finde es wichtig, einen Beruf zu haben, der mir Spaß macht und bei dem ich anderen helfen kann.' },
          { q: 'Was sind deine beruflichen Ziele für die Zukunft?', ru: 'Какие у тебя профессиональные цели на будущее?',
            a: 'Mein wichtigstes Ziel ist es, zuerst mein Studium erfolgreich abzuschließen. Danach möchte ich [Berufsziel] und vielleicht später in meinem Bereich Verantwortung übernehmen. Langfristig wünsche ich mir einen sicheren Job, mit dem ich zufrieden bin.' },
          { q: 'Wie sieht ein typischer Tag bei dir aus?', ru: 'Как выглядит твой обычный день?',
            a: 'Mein Tag beginnt meistens um [Uhrzeit]. Am Vormittag habe ich Kurse oder lerne Deutsch, mittags esse ich etwas Kleines. Am Nachmittag erledige ich meine Aufgaben oder treffe Freunde, und am Abend entspanne ich mich, zum Beispiel beim Lesen. Unter der Woche ist mein Tag also ziemlich strukturiert.' },
          { q: 'Welche Fähigkeiten sind in deinem Bereich besonders wichtig?', ru: 'Какие навыки важны в твоей сфере?',
            a: 'In meinem Bereich sind vor allem [Fähigkeit — z. B. Genauigkeit, Teamarbeit, Kommunikation] wichtig. Man muss außerdem gut organisiert sein und bereit sein, ständig Neues zu lernen. Ich glaube, dass auch Geduld und Verantwortungsbewusstsein eine große Rolle spielen.' },
          { q: 'Was machst du in deiner Freizeit, um abzuschalten?', ru: 'Что делаешь в свободное время, чтобы расслабиться?',
            a: 'Um abzuschalten, mache ich am liebsten [Hobby]. Das hilft mir, den Stress zu vergessen. Außerdem treffe ich gern Freunde oder gehe spazieren, weil mir Bewegung an der frischen Luft guttut. Am Wochenende nehme ich mir bewusst Zeit für mich.' }
        ]
      },
      {
        id: 'familie', title: 'Familie', titleRu: 'Семья: члены семьи, совместная жизнь', icon: 'people',
        qa: [
          { q: 'Wer gehört alles zu deiner Familie?', ru: 'Кто входит в твою семью?',
            a: 'Zu meiner Familie gehören meine Eltern, [meine Geschwister] und ich. Außerdem habe ich noch [Großeltern / Onkel / Tanten], zu denen ich auch Kontakt habe. Wir sind keine sehr große Familie, aber wir halten fest zusammen.' },
          { q: 'Wie versteht ihr euch in deiner Familie? Gibt es besondere Traditionen?', ru: 'Как вы ладите в семье? Есть традиции?',
            a: 'In meiner Familie verstehen wir uns insgesamt sehr gut. Natürlich gibt es manchmal kleine Streitereien, aber wir reden über Probleme und finden meistens eine Lösung. Eine schöne Tradition bei uns ist, dass wir [am Sonntag / an Feiertagen] zusammen essen.' },
          { q: 'Wie oft triffst du deine Familie und was macht ihr zusammen?', ru: 'Как часто видишься с семьёй и что делаете вместе?',
            a: 'Seit ich in Wien lebe, sehe ich meine Familie leider nicht so oft. Trotzdem telefonieren oder videochatten wir fast jeden Tag. Wenn ich zu Besuch bin, kochen wir zusammen, gehen spazieren und erzählen uns alles, was passiert ist.' },
          { q: 'Wie hat sich deine Beziehung zu deinen Eltern mit der Zeit verändert?', ru: 'Как менялись отношения с родителями со временем?',
            a: 'Als ich jünger war, haben meine Eltern viele Entscheidungen für mich getroffen. Heute sehen sie mich eher als Erwachsenen, und wir reden auf Augenhöhe. Dadurch ist unsere Beziehung enger und ehrlicher geworden.' },
          { q: 'Welche Werte sind dir im Familienleben wichtig?', ru: 'Какие ценности важны в семейной жизни?',
            a: 'Mir sind im Familienleben vor allem Ehrlichkeit, Respekt und Vertrauen wichtig. Ich finde, man sollte einander zuhören und sich gegenseitig unterstützen, besonders in schwierigen Zeiten.' },
          { q: 'Hast du Geschwister? Wie ist eure Beziehung?', ru: 'Есть ли братья/сёстры? Какие отношения?',
            a: 'Ja, ich habe [einen Bruder / eine Schwester]. Wir verstehen uns gut, auch wenn wir als Kinder oft gestritten haben. Heute ist er/sie für mich eine wichtige Person, mit der ich über alles reden kann.' },
          { q: 'Wie teilt ihr euch die Hausarbeit?', ru: 'Как распределяете домашние дела?',
            a: 'Bei uns zu Hause teilen wir die Hausarbeit auf. Jeder hat seine Aufgaben: Der eine kocht, der andere putzt oder kauft ein. Ich finde es wichtig, dass nicht nur eine Person alles macht, sondern alle mithelfen.' },
          { q: 'Was war das schönste Erlebnis mit deiner Familie?', ru: 'Какое самое приятное событие с семьёй?',
            a: 'Ein besonders schönes Erlebnis war [eine gemeinsame Reise / ein Familienfest]. Wir haben viel Zeit miteinander verbracht und zusammen gelacht. An solche Momente denke ich gern zurück, weil sie uns als Familie noch stärker verbunden haben.' }
        ]
      },
      {
        id: 'beziehungen', title: 'Zwischenmenschliche Beziehungen', titleRu: 'Отношения: дружба, партнёрство, контакты', icon: 'people',
        qa: [
          { q: 'Was bedeutet Freundschaft für dich, und wie pflegst du sie?', ru: 'Что для тебя дружба и как ты её поддерживаешь?',
            a: 'Freundschaft bedeutet für mich, dass man sich aufeinander verlassen kann. Ich pflege meine Freundschaften, indem ich mich regelmäßig melde und für meine Freunde da bin, wenn sie mich brauchen. Echte Freunde sind für mich wie eine zweite Familie.' },
          { q: 'Wie hast du deine engsten Freunde kennengelernt?', ru: 'Как ты познакомился(ась) с близкими друзьями?',
            a: 'Meine engsten Freunde habe ich [in der Schule / beim Studium / bei der Arbeit] kennengelernt. Am Anfang haben wir nur über alltägliche Dinge geredet, aber mit der Zeit ist daraus eine tiefe Freundschaft geworden, weil wir ähnliche Interessen haben.' },
          { q: 'Was ist dir in einer Partnerschaft besonders wichtig?', ru: 'Что важно в отношениях с партнёром?',
            a: 'In einer Partnerschaft sind mir Vertrauen, Ehrlichkeit und Respekt am wichtigsten. Außerdem finde ich es wichtig, dass beide Partner offen miteinander reden und gemeinsame Ziele haben. Ohne Vertrauen funktioniert eine Beziehung meiner Meinung nach nicht.' },
          { q: 'Welche Rolle spielt Kommunikation in deinen Beziehungen?', ru: 'Какую роль играет общение в отношениях?',
            a: 'Kommunikation spielt in jeder Beziehung eine zentrale Rolle. Wenn man nicht miteinander redet, entstehen schnell Missverständnisse. Deshalb versuche ich, Probleme direkt anzusprechen, statt sie zu verschweigen.' },
          { q: 'Wie hat sich die Rolle der Frau deiner Meinung nach verändert?', ru: 'Как, по-твоему, изменилась роль женщины?',
            a: 'Die Rolle der Frau hat sich in den letzten Jahrzehnten stark verändert. Heute arbeiten viele Frauen, studieren und sind unabhängiger als früher. Ich finde diese Entwicklung sehr positiv, weil Männer und Frauen die gleichen Rechte und Chancen haben sollten.' },
          { q: 'Wie gehst du mit Konflikten in Freundschaften um?', ru: 'Как ты решаешь конфликты в дружбе?',
            a: 'Wenn es einen Konflikt gibt, versuche ich ruhig zu bleiben und zuerst zuzuhören. Danach sage ich offen meine Meinung. Ich glaube, die meisten Konflikte kann man lösen, wenn beide Seiten kompromissbereit sind.' },
          { q: 'Welche Eigenschaften hat für dich ein guter Freund?', ru: 'Какими качествами обладает хороший друг?',
            a: 'Ein guter Freund ist für mich ehrlich, treu und hilfsbereit. Er hört zu, ohne zu urteilen, und ist auch in schwierigen Zeiten da. Solche Eigenschaften sind mir wichtiger als zum Beispiel gemeinsame Hobbys.' },
          { q: 'Welche Rolle spielen soziale Medien in deinen Beziehungen?', ru: 'Какую роль играют соцсети в твоих отношениях?',
            a: 'Soziale Medien spielen heute eine große Rolle, vor allem, um Kontakt zu halten, wenn man weit weg wohnt. Ich nutze sie gern, um mit Freunden in Verbindung zu bleiben. Trotzdem finde ich persönliche Treffen viel wichtiger als Nachrichten am Handy.' }
        ]
      }
    ]
  };
})();
