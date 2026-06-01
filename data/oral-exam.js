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
      },
      {
        id: 'interkulturalitaet', title: 'Interkulturalität', titleRu: 'Межкультурность: праздники, ритуалы, манеры', icon: 'globe',
        qa: [
          { q: 'Welche Feste und Feiertage feierst du in deiner Kultur?', ru: 'Какие праздники ты отмечаешь?',
            a: 'In meiner Kultur feiern wir vor allem [Fest — z. B. das Neujahrsfest und religiöse Feiertage]. An diesen Tagen kommt die ganze Familie zusammen, wir kochen traditionelle Gerichte und machen einander Geschenke. Diese Feste sind mir wichtig, weil sie die Familie verbinden.' },
          { q: 'Gibt es Rituale oder Traditionen, die du täglich pflegst?', ru: 'Есть ли ежедневные ритуалы?',
            a: 'Ja, ein kleines tägliches Ritual ist für mich [z. B. der Morgenkaffee oder ein Spaziergang am Abend]. Solche Gewohnheiten geben mir Struktur und helfen mir, den Tag ruhig zu beginnen oder zu beenden.' },
          { q: 'Wie gehst du mit kulturellen Unterschieden im Alltag um?', ru: 'Как справляешься с культурными различиями?',
            a: 'Ich versuche, offen und neugierig zu sein. Wenn ich etwas nicht verstehe, frage ich nach, statt vorschnell zu urteilen. Meiner Meinung nach kann man von anderen Kulturen viel lernen, wenn man respektvoll bleibt.' },
          { q: 'Wie wichtig sind dir Umgangsformen und Höflichkeit?', ru: 'Насколько важны манеры и вежливость?',
            a: 'Höflichkeit ist mir sehr wichtig. Ein freundlicher Gruß oder ein „Danke" kostet nichts, macht aber den Alltag angenehmer. In Österreich finde ich zum Beispiel die Höflichkeitsform „Sie" wichtig, besonders bei fremden oder älteren Personen.' },
          { q: 'Hast du schon einmal an einem Fest aus einer anderen Kultur teilgenommen?', ru: 'Участвовал(а) в празднике другой культуры?',
            a: 'Ja, ich habe schon [z. B. Weihnachten oder ein Fest von Freunden] miterlebt. Am Anfang war manches neu für mich, aber es war eine schöne Erfahrung. Ich finde es spannend zu sehen, wie unterschiedlich Menschen feiern.' },
          { q: 'Was bedeutet für dich interkultureller Austausch?', ru: 'Что для тебя межкультурный обмен?',
            a: 'Interkultureller Austausch bedeutet für mich, dass Menschen aus verschiedenen Ländern voneinander lernen. Man teilt Essen, Sprache und Traditionen und baut so Vorurteile ab. Gerade an einer internationalen Universität ist das eine große Bereicherung.' },
          { q: 'Welche kulturellen Unterschiede sind dir in Österreich aufgefallen?', ru: 'Какие культурные различия заметил(а) в Австрии?',
            a: 'Mir ist aufgefallen, dass die Menschen hier sehr pünktlich sind und Termine ernst nehmen. Außerdem trennt man den Müll sehr genau. Am Anfang war das ungewohnt, aber inzwischen finde ich diese Ordnung praktisch.' },
          { q: 'Gibt es Traditionen aus anderen Kulturen, die du übernommen hast?', ru: 'Перенял(а) ли традиции других культур?',
            a: 'Ja, seit ich hier lebe, habe ich [z. B. den Sonntagsspaziergang oder bestimmte Essgewohnheiten] übernommen. Ich glaube, es ist normal, dass man im Ausland neue Gewohnheiten annimmt und so seine eigene Kultur erweitert.' }
        ]
      },
      {
        id: 'essen', title: 'Essen und Trinken', titleRu: 'Еда и напитки: привычки, здоровое питание', icon: 'book',
        qa: [
          { q: 'Was sind deine Lieblingsgerichte und warum?', ru: 'Любимые блюда и почему?',
            a: 'Mein Lieblingsgericht ist [Gericht]. Ich mag es so gern, weil es [Grund — z. B. an meine Kindheit erinnert oder einfach gut schmeckt]. Meistens esse ich es [wann], und manchmal koche ich es auch selbst.' },
          { q: 'Wie oft kochst du zu Hause, und was kochst du am liebsten?', ru: 'Как часто готовишь дома и что?',
            a: 'Ich koche [oft / mehrmals pro Woche] selbst, weil das gesünder und billiger ist, als Essen zu bestellen. Am liebsten koche ich [Gericht], weil es schnell geht und mir gut gelingt.' },
          { q: 'Wie wichtig ist dir eine gesunde Ernährung?', ru: 'Насколько важно здоровое питание?',
            a: 'Eine gesunde Ernährung ist mir ziemlich wichtig. Ich versuche, viel Obst und Gemüse zu essen und nicht zu viel Zucker. Trotzdem gönne ich mir ab und zu etwas Süßes, denn man soll das Leben auch genießen.' },
          { q: 'Gibt es typische Gerichte aus deiner Heimat?', ru: 'Есть типичные блюда родины?',
            a: 'Ja, ein typisches Gericht aus meiner Heimat ist [Gericht]. Es wird aus [Zutaten] gemacht und meistens zu besonderen Anlässen gegessen. Wenn ich es koche, fühle ich mich ein bisschen wie zu Hause.' },
          { q: 'Wie oft gehst du in Restaurants, und welche Küchen bevorzugst du?', ru: 'Как часто в ресторанах, какая кухня?',
            a: 'In Restaurants gehe ich nicht sehr oft, meistens nur zu besonderen Gelegenheiten. Am liebsten mag ich [Küche — z. B. die italienische], weil mir die Gerichte gut schmecken. Es ist aber auch schön, neue Küchen auszuprobieren.' },
          { q: 'Was hältst du von vegetarischer oder veganer Ernährung?', ru: 'Что думаешь о вегетарианстве?',
            a: 'Ich finde vegetarische und vegane Ernährung sinnvoll, weil sie gut für die Umwelt und oft auch gesünder ist. Ich selbst esse [noch Fleisch / wenig Fleisch], aber ich achte darauf, nicht zu viel davon zu essen.' },
          { q: 'Welche Rolle spielen Mahlzeiten in deinem sozialen Leben?', ru: 'Какую роль играет еда в общении?',
            a: 'Mahlzeiten spielen eine große Rolle, weil man beim Essen zusammenkommt und sich unterhält. Mit Freunden oder Familie zu essen ist für mich mehr als nur satt werden — es ist ein soziales Erlebnis.' },
          { q: 'Wie planst du deine Mahlzeiten für die Woche?', ru: 'Как планируешь питание на неделю?',
            a: 'Ich plane meine Mahlzeiten meistens am Wochenende. Dann überlege ich, was ich kochen möchte, und kaufe gezielt ein. So spare ich Zeit und Geld und werfe weniger Lebensmittel weg.' }
        ]
      },
      {
        id: 'einkaufen', title: 'Einkaufen', titleRu: 'Покупки: где, цена/качество, онлайн', icon: 'cards',
        qa: [
          { q: 'Wo gehst du am liebsten einkaufen, und warum?', ru: 'Где любишь покупать и почему?',
            a: 'Am liebsten kaufe ich in [Supermarkt / kleinen Läden] ein, weil [Grund — z. B. die Auswahl groß ist oder es in der Nähe ist]. Für frische Produkte gehe ich gern auf den Markt, weil die Qualität dort besser ist.' },
          { q: 'Was hältst du von Online-Shopping im Vergleich zum Geschäft?', ru: 'Онлайн или в магазине?',
            a: 'Online-Shopping ist praktisch, weil man bequem von zu Hause bestellen kann. Trotzdem kaufe ich Kleidung lieber im Geschäft, weil ich die Sachen anprobieren möchte. Bei Büchern oder Technik bestelle ich dagegen oft online.' },
          { q: 'Was ist dir wichtiger: Qualität oder Preis?', ru: 'Что важнее: качество или цена?',
            a: 'Mir ist Qualität meistens wichtiger als der Preis, besonders bei Dingen, die ich lange benutze. Bei alltäglichen Sachen schaue ich aber schon auf das Geld. Am besten ist natürlich ein gutes Preis-Leistungs-Verhältnis.' },
          { q: 'Sparst du Geld für größere Anschaffungen?', ru: 'Копишь на крупные покупки?',
            a: 'Ja, für größere Anschaffungen spare ich vorher. Ich lege jeden Monat ein bisschen Geld zur Seite, damit ich mir später etwas Größeres leisten kann, ohne Schulden zu machen.' },
          { q: 'Welche Rolle spielen Werbung und Marketing bei deinen Kaufentscheidungen?', ru: 'Влияет ли реклама на покупки?',
            a: 'Werbung beeinflusst uns alle, auch wenn wir es nicht immer merken. Ich versuche aber, nicht alles zu glauben und vor dem Kauf zu vergleichen. Ein Produkt kaufe ich nur, wenn ich es wirklich brauche.' },
          { q: 'Wie wichtig sind dir umweltfreundliche und nachhaltige Produkte?', ru: 'Важны ли экологичные товары?',
            a: 'Nachhaltige Produkte sind mir wichtig geworden. Ich nehme zum Beispiel eine eigene Tasche zum Einkaufen mit und achte auf die Verpackung. Manchmal sind solche Produkte teurer, aber für die Umwelt lohnt es sich.' },
          { q: 'Welche Unterschiede siehst du zwischen dem Einkaufen in deiner Heimat und hier?', ru: 'Различия покупок дома и здесь?',
            a: 'In meiner Heimat kauft man oft auf Märkten und in kleinen Geschäften, hier in Österreich eher in großen Supermärkten. Außerdem sind die Geschäfte hier am Sonntag geschlossen, was am Anfang ungewohnt war.' },
          { q: 'Hast du schon einmal einen Fehlkauf gemacht?', ru: 'Был ли неудачный покупка?',
            a: 'Ja, einmal habe ich [etwas — z. B. ein Kleidungsstück] gekauft, das ich dann nie benutzt habe. Seitdem überlege ich vor jedem Kauf genauer, ob ich die Sache wirklich brauche.' }
        ]
      },
      {
        id: 'wohnen', title: 'Wohnen', titleRu: 'Жильё: квартира, поиск, расходы, город/село', icon: 'pin',
        qa: [
          { q: 'Wie wohnst du zurzeit, und wie gefällt dir deine Wohnsituation?', ru: 'Как сейчас живёшь и нравится ли?',
            a: 'Zurzeit wohne ich in [einer Wohnung / einem Zimmer / einer WG] in [Stadtteil]. Insgesamt gefällt mir meine Wohnsituation gut, weil [Grund]. Schön wäre nur, wenn [Wunsch — z. B. die Wohnung etwas größer wäre].' },
          { q: 'Was sind die Vor- und Nachteile von Stadt- und Landleben?', ru: 'Плюсы и минусы города и села?',
            a: 'In der Stadt gibt es mehr Möglichkeiten: Arbeit, Geschäfte und öffentliche Verkehrsmittel. Auf dem Land ist es dafür ruhiger, grüner und billiger. Ich persönlich wohne lieber in der Stadt, weil dort mehr los ist.' },
          { q: 'Wie hast du deine Wohnung gefunden, und was war dir wichtig?', ru: 'Как нашёл жильё и что было важно?',
            a: 'Meine Wohnung habe ich [über das Internet / über Freunde] gefunden. Wichtig waren mir vor allem der Preis, die Lage und eine gute Verkehrsanbindung. Die Suche war nicht leicht, weil Wohnungen in Wien oft teuer sind.' },
          { q: 'Wie hoch sind die Wohnungskosten in deiner Region?', ru: 'Какие расходы на жильё?',
            a: 'Die Wohnungskosten sind hier ziemlich hoch, besonders die Miete. Ein großer Teil meines Geldes geht für die Wohnung weg. Deshalb muss ich beim Rest sparsam sein.' },
          { q: 'Wie würdest du deine Wohnung einrichten, wenn Geld keine Rolle spielen würde?', ru: 'Как бы обставил жильё без ограничений?',
            a: 'Wenn Geld keine Rolle spielen würde, hätte ich gern eine große, helle Wohnung mit einem Balkon. Ich würde sie modern, aber gemütlich einrichten und einen Raum nur zum Arbeiten haben. Wichtig wären mir viel Licht und Pflanzen.' },
          { q: 'Was ist dir bei der Wahl einer Wohnung besonders wichtig?', ru: 'Что важно при выборе жилья?',
            a: 'Bei der Wahl einer Wohnung sind mir die Lage, der Preis und die Größe am wichtigsten. Außerdem soll die Wohnung ruhig und gut mit öffentlichen Verkehrsmitteln erreichbar sein. Auch nette Nachbarn sind ein Plus.' },
          { q: 'Welche Unterschiede siehst du zwischen Haus, Wohnung und WG?', ru: 'Различия дом/квартира/коммуна?',
            a: 'In einem Haus hat man mehr Platz und Ruhe, aber auch mehr Arbeit und Kosten. Eine Wohnung ist praktischer und günstiger. In einer WG teilt man sich die Miete und hat Gesellschaft, muss aber Rücksicht nehmen.' },
          { q: 'Wie würdest du deinen idealen Wohnort beschreiben?', ru: 'Опиши идеальное место жительства.',
            a: 'Mein idealer Wohnort wäre eine nicht zu große Stadt mit viel Grün. Ich hätte gern Geschäfte und Cafés in der Nähe, aber auch einen Park zum Spazierengehen. Wichtig wäre mir eine gute Mischung aus Stadt und Natur.' }
        ]
      },
      {
        id: 'reisen', title: 'Reisen & Verkehr', titleRu: 'Путешествия и транспорт', icon: 'globe',
        qa: [
          { q: 'Welches Verkehrsmittel nutzt du am häufigsten, und warum?', ru: 'Каким транспортом чаще пользуешься?',
            a: 'Am häufigsten nutze ich [die öffentlichen Verkehrsmittel / das Fahrrad], weil das in der Stadt am praktischsten ist. In Wien ist das Netz sehr gut ausgebaut, deshalb brauche ich kein Auto. Außerdem ist es umweltfreundlicher.' },
          { q: 'Welches Land möchtest du unbedingt einmal besuchen? Warum?', ru: 'Какую страну хочешь посетить?',
            a: 'Ich möchte unbedingt einmal [Land] besuchen, weil mich [die Kultur / die Natur / die Geschichte] dort sehr interessiert. Ich habe schon viel darüber gelesen und würde gern alles mit eigenen Augen sehen.' },
          { q: 'Wie planst du normalerweise deine Reisen?', ru: 'Как планируешь поездки?',
            a: 'Ich plane meine Reisen meistens im Voraus. Ich suche günstige Tickets, buche eine Unterkunft und überlege, was ich sehen möchte. Ein bisschen Spontaneität lasse ich aber, weil die schönsten Momente oft ungeplant sind.' },
          { q: 'Was war dein bisher schönstes Reiseerlebnis?', ru: 'Самое яркое впечатление от поездки?',
            a: 'Mein schönstes Reiseerlebnis war [Reise / Ort]. Besonders in Erinnerung ist mir [Moment], weil es etwas ganz Neues für mich war. Diese Reise hat mir gezeigt, wie schön es ist, andere Länder zu entdecken.' },
          { q: 'Wie findest du dich in einer fremden Stadt zurecht?', ru: 'Как ориентируешься в чужом городе?',
            a: 'In einer fremden Stadt nutze ich oft eine Karte am Handy oder frage Einheimische nach dem Weg. Ich finde es auch gut, einfach ein bisschen herumzulaufen, weil man so eine Stadt am besten kennenlernt.' },
          { q: 'Welche Vor- und Nachteile siehst du bei verschiedenen Verkehrsmitteln?', ru: 'Плюсы и минусы видов транспорта?',
            a: 'Das Flugzeug ist schnell, aber teuer und schlecht für die Umwelt. Der Zug ist bequem und umweltfreundlicher, dauert aber länger. Das Auto ist flexibel, aber im Stau verliert man viel Zeit. Jedes Verkehrsmittel hat also Vor- und Nachteile.' },
          { q: 'Welche Rolle spielt Nachhaltigkeit bei deinen Reiseentscheidungen?', ru: 'Важна ли экологичность в путешествиях?',
            a: 'Nachhaltigkeit wird mir immer wichtiger. Wenn es möglich ist, nehme ich lieber den Zug als das Flugzeug. Außerdem versuche ich, auf Reisen Müll zu vermeiden und die Natur zu respektieren.' },
          { q: 'Wie beeinflussen Reisen dein Verständnis von anderen Kulturen?', ru: 'Как путешествия меняют взгляд на культуры?',
            a: 'Reisen helfen mir, andere Kulturen besser zu verstehen. Wenn man ein Land selbst erlebt, merkt man, dass viele Vorurteile nicht stimmen. Man wird offener und toleranter, weil man sieht, wie andere Menschen leben.' }
        ]
      },
      {
        id: 'klima', title: 'Klima & Wetter', titleRu: 'Климат, погода, времена года', icon: 'globe',
        qa: [
          { q: 'Welche Jahreszeit magst du am liebsten, und warum?', ru: 'Любимое время года и почему?',
            a: 'Am liebsten mag ich [Jahreszeit], weil [Grund — z. B. das Wetter angenehm ist oder man viel draußen sein kann]. Im [Sommer] kann man zum Beispiel [Aktivität], und das genieße ich sehr.' },
          { q: 'Wie beeinflusst das Wetter deine Stimmung und Aktivitäten?', ru: 'Как погода влияет на настроение?',
            a: 'Das Wetter beeinflusst meine Stimmung schon ziemlich stark. Bei Sonne bin ich aktiver und besser gelaunt, bei Regen bleibe ich lieber zu Hause und lese. Trotzdem versuche ich, mich nicht zu sehr vom Wetter abhängig zu machen.' },
          { q: 'Was ist das typische Wetter in deiner Heimat?', ru: 'Какая погода типична на родине?',
            a: 'In meiner Heimat ist das Wetter [Beschreibung — z. B. im Sommer sehr heiß und im Winter mild]. Im Vergleich zu Österreich [Unterschied]. An das Wetter hier musste ich mich erst gewöhnen.' },
          { q: 'Wie bereitest du dich auf extreme Wetterbedingungen vor?', ru: 'Как готовишься к экстремальной погоде?',
            a: 'Bei extremem Wetter passe ich meine Kleidung an und bleibe, wenn nötig, zu Hause. Im Winter ziehe ich mich warm an, im Sommer trinke ich viel Wasser. So komme ich auch mit Hitze oder Kälte gut zurecht.' },
          { q: 'Welche Aktivitäten machst du bei schönem Wetter am liebsten?', ru: 'Что делаешь в хорошую погоду?',
            a: 'Bei schönem Wetter bin ich am liebsten draußen. Ich gehe spazieren, treffe Freunde im Park oder fahre Fahrrad. Sonnenschein motiviert mich, aktiv zu sein und etwas zu unternehmen.' },
          { q: 'Wie verändert sich das Klima in deiner Region?', ru: 'Как меняется климат в твоём регионе?',
            a: 'Auch in meiner Region merkt man den Klimawandel. Die Sommer werden heißer und das Wetter wird unberechenbarer. Das macht mir Sorgen, weil es Folgen für die Natur und die Menschen hat.' },
          { q: 'Wie trägst du zum Umweltschutz bei?', ru: 'Как помогаешь экологии?',
            a: 'Ich versuche, im Alltag umweltbewusst zu leben: Ich trenne den Müll, nutze öffentliche Verkehrsmittel und vermeide Plastik. Das ist nur ein kleiner Beitrag, aber wenn viele mitmachen, kann man etwas erreichen.' },
          { q: 'Hast du schon einmal extreme Wetterbedingungen erlebt?', ru: 'Переживал(а) экстремальную погоду?',
            a: 'Ja, einmal habe ich [z. B. ein heftiges Gewitter oder eine Hitzewelle] erlebt. Das war ziemlich beeindruckend und ein bisschen beängstigend. Solche Erlebnisse zeigen mir, wie mächtig die Natur ist.' }
        ]
      },
      {
        id: 'gesundheit', title: 'Gesundheit', titleRu: 'Здоровье: тело, болезни, врач', icon: 'shield',
        qa: [
          { q: 'Wie wichtig ist dir deine Gesundheit, und was tust du dafür?', ru: 'Насколько важно здоровье и что делаешь?',
            a: 'Meine Gesundheit ist mir sehr wichtig, denn ohne Gesundheit kann man nichts genießen. Deshalb versuche ich, mich gesund zu ernähren, genug zu schlafen und mich regelmäßig zu bewegen.' },
          { q: 'Wie oft gehst du zum Arzt, und warum?', ru: 'Как часто к врачу?',
            a: 'Zum Arzt gehe ich nur, wenn ich wirklich krank bin oder zur Kontrolle. Ich finde Vorsorge wichtig, weil man Krankheiten so früh erkennen kann. Zum Glück bin ich meistens gesund.' },
          { q: 'Wie gehst du mit Stress und Druck um?', ru: 'Как справляешься со стрессом?',
            a: 'Wenn ich gestresst bin, versuche ich, eine Pause zu machen und tief durchzuatmen. Mir hilft es, spazieren zu gehen oder mit Freunden zu reden. Ich glaube, es ist wichtig, Stress nicht in sich hineinzufressen.' },
          { q: 'Welche gesunden Gewohnheiten hast du in deinen Alltag integriert?', ru: 'Какие здоровые привычки у тебя есть?',
            a: 'Eine gesunde Gewohnheit von mir ist, jeden Tag genug Wasser zu trinken und mich zu bewegen. Außerdem versuche ich, weniger am Handy zu sein und früher schlafen zu gehen. Solche kleinen Dinge machen auf Dauer viel aus.' },
          { q: 'Welche Rolle spielt Sport für deine Gesundheit?', ru: 'Роль спорта для здоровья?',
            a: 'Sport spielt eine wichtige Rolle, weil er nicht nur den Körper, sondern auch den Kopf fit hält. Ich mache [Sportart], weil es mir Spaß macht und ich mich danach besser fühle. Schon ein Spaziergang tut gut.' },
          { q: 'Was hältst du von alternativen Heilmethoden?', ru: 'Что думаешь об альтернативной медицине?',
            a: 'Alternativen Heilmethoden stehe ich offen, aber kritisch gegenüber. Manche, wie Tee oder Ruhe, helfen sicher. Bei ernsten Krankheiten vertraue ich aber lieber der Schulmedizin und gehe zum Arzt.' },
          { q: 'Hast du schon einmal einen Unfall gehabt?', ru: 'Был ли несчастный случай?',
            a: 'Zum Glück hatte ich noch keinen schweren Unfall. Einmal bin ich [z. B. beim Sport gestürzt], aber es war nichts Schlimmes. Seitdem bin ich vorsichtiger.' },
          { q: 'Was sind die wichtigsten Maßnahmen, um gesund zu bleiben?', ru: 'Главные меры, чтобы быть здоровым?',
            a: 'Um gesund zu bleiben, sind für mich eine ausgewogene Ernährung, regelmäßige Bewegung und genug Schlaf am wichtigsten. Außerdem sollte man Stress vermeiden und auf seinen Körper hören. Vorbeugen ist besser als heilen.' }
        ]
      },
      {
        id: 'freizeit', title: 'Freizeit & Hobbys', titleRu: 'Свободное время и хобби', icon: 'star',
        qa: [
          { q: 'Was machst du am liebsten in deiner Freizeit?', ru: 'Что любишь делать в свободное время?',
            a: 'In meiner Freizeit mache ich am liebsten [Hobby]. Das entspannt mich und macht mir Spaß. Außerdem treffe ich gern Freunde oder gehe nach draußen, weil ich nicht den ganzen Tag zu Hause sitzen möchte.' },
          { q: 'Welche Hobbys hast du und wie hast du damit angefangen?', ru: 'Какие хобби и как начал(а)?',
            a: 'Mein wichtigstes Hobby ist [Hobby]. Angefangen habe ich damit, als [Zeit/Anlass]. Am Anfang war ich nicht gut darin, aber mit der Zeit habe ich mich verbessert, und jetzt möchte ich es nicht mehr missen.' },
          { q: 'Treibst du regelmäßig Sport? Welche Sportarten?', ru: 'Занимаешься спортом? Каким?',
            a: 'Ja, ich versuche, regelmäßig Sport zu treiben. Am liebsten mache ich [Sportart], weil [Grund]. Sport hilft mir, fit zu bleiben und den Kopf frei zu bekommen.' },
          { q: 'Wie wichtig ist dir Freizeit und wie planst du sie?', ru: 'Насколько важен досуг и как планируешь?',
            a: 'Freizeit ist mir sehr wichtig, weil man Zeit zum Entspannen braucht. Ich plane sie aber nicht zu genau, sondern lasse mir Raum für spontane Dinge. Wichtig ist mir eine gute Balance zwischen Aktivität und Ruhe.' },
          { q: 'Wie oft liest du Bücher und welche Genres bevorzugst du?', ru: 'Как часто читаешь и какие жанры?',
            a: 'Ich lese [oft / ab und zu], meistens am Abend vor dem Schlafen. Am liebsten mag ich [Genre], weil mich solche Geschichten fesseln. Lesen hilft mir außerdem, mein Deutsch zu verbessern.' },
          { q: 'Wie entspannst du dich nach einem langen Tag?', ru: 'Как расслабляешься после долгого дня?',
            a: 'Nach einem langen Tag entspanne ich mich am liebsten [z. B. bei Musik, einem Spaziergang oder einer Serie]. So kann ich abschalten und den Stress vergessen. Manchmal hilft auch einfach, früh ins Bett zu gehen.' },
          { q: 'Welche neuen Hobbys würdest du gerne ausprobieren?', ru: 'Какие новые хобби хотел(а) бы попробовать?',
            a: 'Ich würde gern einmal [Hobby] ausprobieren, weil es mich interessiert und ich etwas Neues lernen möchte. Bis jetzt hatte ich noch keine Zeit dafür, aber vielleicht fange ich bald damit an.' },
          { q: 'Mit wem teilst du deine Freizeitaktivitäten am liebsten?', ru: 'С кем любишь проводить досуг?',
            a: 'Meine Freizeit verbringe ich am liebsten mit [Freunden / der Familie], weil es zusammen einfach mehr Spaß macht. Manche Dinge, wie Lesen, mache ich aber lieber allein, weil ich dabei zur Ruhe komme.' }
        ]
      },
      {
        id: 'arbeit', title: 'Arbeitswelt', titleRu: 'Работа: профессии, рабочее место, поиск', icon: 'doc',
        qa: [
          { q: 'Was machst du beruflich, und wie gefällt dir dein Job?', ru: 'Чем занимаешься и нравится ли работа?',
            a: 'Im Moment [studiere ich / arbeite ich als …]. Später möchte ich gern als [Beruf] arbeiten. An diesem Bereich gefällt mir, dass [Grund]. Wichtig ist mir, dass die Arbeit sinnvoll ist und Spaß macht.' },
          { q: 'Wie sieht ein typischer Arbeitstag aus?', ru: 'Как выглядит рабочий день?',
            a: 'Ein typischer Tag beginnt für mich um [Uhrzeit]. Zuerst [Tätigkeit], danach [Tätigkeit]. Zwischendurch mache ich Pausen, weil man sonst nicht konzentriert bleiben kann. Am Ende des Tages [Abschluss].' },
          { q: 'Was sind die größten Herausforderungen in deinem Bereich?', ru: 'Главные сложности в твоей сфере?',
            a: 'Die größte Herausforderung ist für mich [z. B. Zeitdruck oder viel Neues zu lernen]. Man muss gut organisiert sein und ruhig bleiben. Ich sehe solche Herausforderungen aber auch als Chance, mich zu verbessern.' },
          { q: 'Wie gehst du mit Stress und Druck bei der Arbeit um?', ru: 'Как справляешься со стрессом на работе?',
            a: 'Bei Stress versuche ich, meine Aufgaben nach Wichtigkeit zu ordnen und eines nach dem anderen zu erledigen. Pausen sind dabei sehr wichtig. Wenn der Druck zu groß wird, rede ich mit Kollegen oder bitte um Hilfe.' },
          { q: 'Was sind deine beruflichen Ziele für die nächsten Jahre?', ru: 'Цели на ближайшие годы?',
            a: 'In den nächsten Jahren möchte ich zuerst mein Studium abschließen und dann Berufserfahrung sammeln. Langfristig wünsche ich mir einen Job, bei dem ich mich weiterentwickeln kann und der sicher ist.' },
          { q: 'Wie findest du eine gute Work-Life-Balance?', ru: 'Как находишь баланс работы и жизни?',
            a: 'Eine gute Work-Life-Balance ist mir wichtig. Ich versuche, Arbeit und Freizeit klar zu trennen und nach der Arbeit wirklich abzuschalten. Nur wer sich erholt, kann auf Dauer gute Leistung bringen.' },
          { q: 'Welche Fähigkeiten sind in deinem Beruf besonders wichtig?', ru: 'Какие навыки важны в профессии?',
            a: 'In meinem Bereich sind vor allem [Fähigkeiten — z. B. Teamarbeit, Genauigkeit, Kommunikation] wichtig. Auch Flexibilität und die Bereitschaft, Neues zu lernen, spielen eine große Rolle.' },
          { q: 'Was rätst du jemandem, der auf Arbeitssuche ist?', ru: 'Что посоветуешь ищущему работу?',
            a: 'Ich würde raten, eine gute Bewerbung zu schreiben und nicht aufzugeben, wenn es nicht sofort klappt. Außerdem hilft es, Kontakte zu nutzen und sich gut auf das Vorstellungsgespräch vorzubereiten. Geduld ist sehr wichtig.' }
        ]
      },
      {
        id: 'fremdsprachen', title: 'Fremdsprachen lernen', titleRu: 'Изучение иностранных языков', icon: 'globe',
        qa: [
          { q: 'Welche Fremdsprachen sprichst du, und wie hast du sie gelernt?', ru: 'Какими языками владеешь и как учил(а)?',
            a: 'Ich spreche [Sprachen]. [Sprache] habe ich in der Schule gelernt, und Deutsch lerne ich gerade hier im Kurs. Am meisten lerne ich, wenn ich die Sprache wirklich benutze, zum Beispiel im Gespräch.' },
          { q: 'Was motiviert dich, neue Sprachen zu lernen?', ru: 'Что мотивирует учить языки?',
            a: 'Mich motiviert vor allem, dass ich mit mehr Menschen sprechen kann. Außerdem brauche ich Deutsch für mein Studium in Österreich. Eine neue Sprache öffnet auch Türen zu einer anderen Kultur.' },
          { q: 'Welche Strategien nutzt du, um eine Sprache zu lernen?', ru: 'Какие стратегии используешь?',
            a: 'Ich nutze verschiedene Strategien: Ich lerne Vokabeln, schaue Filme mit Untertiteln und übe mit Apps. Am wichtigsten ist für mich aber, viel zu sprechen, auch wenn ich Fehler mache. Aus Fehlern lernt man.' },
          { q: 'Welche Herausforderungen hast du beim Sprachenlernen erlebt?', ru: 'Какие трудности при изучении?',
            a: 'Die größte Herausforderung ist für mich die Grammatik, besonders die Fälle im Deutschen. Auch das freie Sprechen war am Anfang schwer. Aber mit viel Übung wird es langsam besser.' },
          { q: 'Wie wichtig ist es, mehrere Sprachen zu beherrschen?', ru: 'Насколько важно знать несколько языков?',
            a: 'Mehrere Sprachen zu beherrschen ist heute sehr wichtig, besonders im Beruf und beim Reisen. Man kann sich besser verständigen und versteht andere Kulturen besser. Deshalb finde ich Sprachenlernen sehr wertvoll.' },
          { q: 'Wie nutzt du Medien (Filme, Bücher, Musik), um Sprachen zu lernen?', ru: 'Как используешь медиа для изучения?',
            a: 'Ich nutze Medien sehr gern zum Lernen. Ich höre deutsche Musik, schaue Serien und lese einfache Texte. So lerne ich neue Wörter in einem natürlichen Zusammenhang, und es macht mehr Spaß als nur Grammatik.' },
          { q: 'Hast du schon einmal Sprachkurse besucht? Wie waren deine Erfahrungen?', ru: 'Посещал(а) ли курсы? Как впечатления?',
            a: 'Ja, ich besuche gerade einen Deutschkurs, und meine Erfahrungen sind sehr positiv. Im Kurs kann man mit anderen üben und bekommt Feedback von der Lehrerin. Allein zu lernen ist schwieriger als in der Gruppe.' },
          { q: 'Welche Vorteile siehst du darin, mehrere Sprachen zu sprechen?', ru: 'Какие плюсы знания нескольких языков?',
            a: 'Wer mehrere Sprachen spricht, hat im Beruf bessere Chancen und kann leichter im Ausland leben. Außerdem trainiert das das Gehirn. Für mich ist der schönste Vorteil, dass ich mit Menschen aus vielen Ländern reden kann.' }
        ]
      },
      {
        id: 'ausland-leben', title: 'Leben im Ausland', titleRu: 'Жизнь за границей: плюсы и минусы', icon: 'globe',
        qa: [
          { q: 'Lebst du gerade im Ausland? Wie ist die Erfahrung?', ru: 'Живёшь ли за границей? Как впечатления?',
            a: 'Ja, ich lebe zurzeit in Österreich, und das ist eine spannende, aber auch herausfordernde Erfahrung. Am Anfang war alles neu — die Sprache, die Menschen, der Alltag. Inzwischen fühle ich mich hier aber immer wohler.' },
          { q: 'Was sind die größten Vorteile des Lebens im Ausland?', ru: 'Главные плюсы жизни за границей?',
            a: 'Der größte Vorteil ist, dass man sehr viel lernt — eine neue Sprache, eine neue Kultur und auch viel über sich selbst. Man wird selbstständiger und offener. Außerdem hat man bessere Bildungs- und Berufschancen.' },
          { q: 'Welche Herausforderungen hast du im Ausland erlebt?', ru: 'Какие трудности за границей?',
            a: 'Die größte Herausforderung war für mich am Anfang die Sprache und das Gefühl, weit weg von der Familie zu sein. Auch Behördensachen waren kompliziert. Aber mit der Zeit gewöhnt man sich an vieles.' },
          { q: 'Was vermisst du am meisten, wenn du im Ausland lebst?', ru: 'Что больше всего скучаешь?',
            a: 'Am meisten vermisse ich meine Familie und meine Freunde. Auch das Essen aus meiner Heimat fehlt mir manchmal. Zum Glück kann ich dank Internet jederzeit mit meinen Liebsten in Kontakt bleiben.' },
          { q: 'Wie integrierst du dich in eine neue Gesellschaft und Kultur?', ru: 'Как интегрируешься в новое общество?',
            a: 'Ich versuche, mich zu integrieren, indem ich die Sprache lerne, Kontakte knüpfe und an Aktivitäten teilnehme. Es hilft sehr, offen zu sein und die Bräuche des Landes zu respektieren. So fühlt man sich schneller zu Hause.' },
          { q: 'Wie hat das Leben im Ausland deine Sicht auf die Welt verändert?', ru: 'Как жизнь за границей изменила взгляд?',
            a: 'Das Leben im Ausland hat mich offener und toleranter gemacht. Ich sehe jetzt, dass es viele Wege gibt zu leben, und beurteile anderes weniger schnell. Ich bin außerdem selbstbewusster geworden.' },
          { q: 'Wie pflegst du den Kontakt zu Freunden und Familie?', ru: 'Как поддерживаешь связь с близкими?',
            a: 'Den Kontakt halte ich vor allem über das Handy — wir telefonieren, schreiben Nachrichten und machen Videoanrufe. So bleibt die Verbindung eng, obwohl wir weit voneinander entfernt sind.' },
          { q: 'Was würdest du jemandem raten, der ins Ausland ziehen möchte?', ru: 'Что посоветуешь переезжающему за границу?',
            a: 'Ich würde raten, die Sprache vorher zu lernen und offen für Neues zu sein. Am Anfang ist alles schwer, aber man sollte geduldig bleiben und Hilfe annehmen. Es lohnt sich, weil man als Mensch sehr wächst.' }
        ]
      },
      {
        id: 'ausland-studium', title: 'Studium im Ausland & Heimat', titleRu: 'Учёба за границей и дома: плюсы и минусы', icon: 'cap',
        qa: [
          { q: 'Warum möchtest du im Ausland studieren?', ru: 'Почему хочешь учиться за границей?',
            a: 'Ich möchte im Ausland studieren, weil die Universitäten hier einen guten Ruf haben und ich eine bessere Ausbildung bekomme. Außerdem lerne ich eine neue Sprache und Kultur kennen, was mir auch im Beruf helfen wird.' },
          { q: 'Was sind die größten Unterschiede zwischen dem Studium im Ausland und im Heimatland?', ru: 'Различия учёбы дома и за границей?',
            a: 'Ein großer Unterschied ist, dass man hier selbstständiger lernen muss. Im Ausland ist auch die Sprache eine Hürde. Dafür gibt es oft modernere Methoden und mehr Kontakt zu Studierenden aus aller Welt.' },
          { q: 'Welche Vorteile siehst du im Studium im Ausland?', ru: 'Плюсы учёбы за границей?',
            a: 'Die Vorteile sind eine gute Ausbildung, internationale Kontakte und bessere Berufschancen. Man wird selbstständig und lernt, sich in einer fremden Umgebung zurechtzufinden. Das ist eine wertvolle Erfahrung fürs ganze Leben.' },
          { q: 'Welche Herausforderungen gibt es beim Studium im Ausland?', ru: 'Трудности учёбы за границей?',
            a: 'Die größten Herausforderungen sind die fremde Sprache, die Kosten und das Heimweh. Auch das Studiensystem ist anders. Man muss sich gut organisieren und darf nicht aufgeben, wenn es am Anfang schwer ist.' },
          { q: 'Wie wichtig ist dir der Austausch mit internationalen Studierenden?', ru: 'Важен ли обмен с иностранными студентами?',
            a: 'Der Austausch mit internationalen Studierenden ist mir sehr wichtig. Man lernt verschiedene Sichtweisen kennen und schließt Freundschaften aus aller Welt. Das macht das Studium interessanter und erweitert den Horizont.' },
          { q: 'Wie gehst du mit kulturellen Unterschieden im Studium um?', ru: 'Как справляешься с различиями в учёбе?',
            a: 'Ich versuche, offen und respektvoll zu sein. Wenn ich etwas nicht verstehe, frage ich nach. Kulturelle Unterschiede sehe ich nicht als Problem, sondern als Chance, etwas Neues zu lernen.' },
          { q: 'Wie hat das Studium deine beruflichen Perspektiven verändert?', ru: 'Как учёба меняет карьерные перспективы?',
            a: 'Durch ein Studium im Ausland verbessern sich meine Berufschancen deutlich. Ich habe bessere Sprachkenntnisse und einen anerkannten Abschluss. Außerdem zeigt es Arbeitgebern, dass ich selbstständig und flexibel bin.' },
          { q: 'Was würdest du jemandem raten, der im Ausland studieren möchte?', ru: 'Что посоветуешь желающему учиться за границей?',
            a: 'Ich würde raten, sich früh zu informieren, die Sprache zu lernen und sich gut auf die Bewerbung vorzubereiten. Wichtig ist auch, finanziell zu planen und offen für Neues zu sein. Mut zahlt sich am Ende aus.' }
        ]
      },
      {
        id: 'ausbildung', title: 'Ausbildung & Schule', titleRu: 'Образование: путь, школьная система, учёба', icon: 'cap',
        qa: [
          { q: 'Kannst du etwas über deinen Bildungsweg erzählen?', ru: 'Расскажи о своём образовательном пути.',
            a: 'Gern. Ich bin in [Land] zur Schule gegangen und habe danach [Ausbildung/Studium] gemacht. Jetzt bereite ich mich darauf vor, in Österreich zu studieren. Bildung war mir und meiner Familie immer wichtig.' },
          { q: 'Was waren deine Lieblingsfächer in der Schule und warum?', ru: 'Любимые предметы и почему?',
            a: 'Meine Lieblingsfächer waren [Fächer], weil sie mich interessiert haben und mir leichtgefallen sind. Besonders [Fach] mochte ich, weil [Grund]. Andere Fächer fand ich dagegen schwieriger.' },
          { q: 'Wie unterscheidet sich das Schulsystem in deinem Land von anderen?', ru: 'Чем отличается школьная система твоей страны?',
            a: 'In meinem Heimatland ist die Schule [Beschreibung — z. B. strenger oder anders aufgebaut] als in Österreich. Bei uns legt man viel Wert auf [Aspekt]. Beide Systeme haben aber Vor- und Nachteile.' },
          { q: 'Wie hast du dich für dein Studium entschieden?', ru: 'Как выбрал(а) специальность?',
            a: 'Ich habe mich für [Fach] entschieden, weil ich mich dafür interessiere und es gute Berufschancen bietet. Meine Familie und Lehrer haben mich dabei beraten. Am Ende war es aber meine eigene Entscheidung.' },
          { q: 'Wie bereitest du dich auf Prüfungen vor?', ru: 'Как готовишься к экзаменам?',
            a: 'Auf Prüfungen bereite ich mich vor, indem ich rechtzeitig anfange und einen Lernplan mache. Ich wiederhole den Stoff in kleinen Portionen und mache Übungen. Pausen und genug Schlaf sind dabei genauso wichtig wie das Lernen.' },
          { q: 'Welche Rolle spielt praktische Erfahrung in der Ausbildung?', ru: 'Роль практики в обучении?',
            a: 'Praktische Erfahrung ist sehr wichtig, weil man Theorie und Praxis verbinden muss. In einem Praktikum lernt man Dinge, die in keinem Buch stehen. Deshalb finde ich, dass eine gute Ausbildung beides braucht.' },
          { q: 'Welche Weiterbildungsmöglichkeiten interessieren dich?', ru: 'Какие возможности повышения квалификации интересны?',
            a: 'Mich interessieren vor allem Kurse in [Bereich] und natürlich Sprachkurse. Ich finde es wichtig, sich ständig weiterzubilden, weil sich die Welt schnell verändert. Wer aufhört zu lernen, bleibt stehen.' },
          { q: 'Was würdest du an deinem Schulsystem ändern, wenn du könntest?', ru: 'Что бы изменил(а) в школьной системе?',
            a: 'Wenn ich könnte, würde ich mehr praktischen Unterricht und weniger Auswendiglernen einführen. Außerdem sollten Schüler lernen, selbstständig zu denken. Ich finde, die Schule sollte auf das echte Leben vorbereiten.' }
        ]
      },
      {
        id: 'oesterreich', title: 'Aktuelle Ereignisse in Österreich', titleRu: 'Актуальные события в Австрии', icon: 'globe',
        qa: [
          { q: 'Welche aktuellen Themen in Österreich kennst du?', ru: 'Какие актуальные темы в Австрии знаешь?',
            a: 'Ich verfolge die Nachrichten und kenne einige aktuelle Themen, zum Beispiel [Thema — etwa die Teuerung, den Klimaschutz oder die Bildung]. Genauer informiere ich mich über die ORF-Nachrichten in einfacher Sprache, weil ich sie gut verstehe.' },
          { q: 'Wie beeinflussen aktuelle Ereignisse dein tägliches Leben?', ru: 'Как события влияют на твою жизнь?',
            a: 'Manche Ereignisse beeinflussen meinen Alltag direkt, zum Beispiel, wenn die Preise steigen oder sich die Regeln für Studierende ändern. Deshalb finde ich es wichtig, informiert zu bleiben.' },
          { q: 'Welche Rolle spielen Umweltfragen in Österreich?', ru: 'Какова роль экологии в Австрии?',
            a: 'Umweltfragen spielen in Österreich eine große Rolle. Viele Menschen trennen den Müll, nutzen öffentliche Verkehrsmittel und achten auf Nachhaltigkeit. Ich finde das vorbildlich und versuche, selbst mitzumachen.' },
          { q: 'Welche sozialen Themen sind gerade wichtig?', ru: 'Какие социальные темы важны?',
            a: 'Wichtige soziale Themen sind zum Beispiel die steigenden Lebenskosten, das Wohnen und die Integration. Solche Themen betreffen viele Menschen, auch Studierende. Ich finde es gut, dass darüber öffentlich diskutiert wird.' },
          { q: 'Wie informierst du dich über aktuelle Ereignisse?', ru: 'Как узнаёшь о событиях?',
            a: 'Ich informiere mich vor allem über Nachrichten im Internet und über den ORF. Für Deutschlerner sind die „Nachrichten in einfacher Sprache" sehr nützlich. So verbessere ich gleichzeitig mein Deutsch.' },
          { q: 'Welche kulturellen Veranstaltungen sind in Österreich bekannt?', ru: 'Какие культурные события известны в Австрии?',
            a: 'Österreich ist bekannt für seine Kultur, zum Beispiel für klassische Musik, Theater und Feste. In Wien gibt es viele Konzerte und Museen. Ich würde gern mehr davon besuchen, um Land und Leute besser kennenzulernen.' },
          { q: 'Wie hat die Corona-Pandemie das Leben verändert?', ru: 'Как пандемия изменила жизнь?',
            a: 'Die Corona-Pandemie hat vieles verändert. Man hat gelernt, online zu arbeiten und zu studieren, und achtet mehr auf die Gesundheit. Manches war schwierig, aber wir haben auch gesehen, wie wichtig der Zusammenhalt ist.' },
          { q: 'Was sind die größten Herausforderungen für Österreich?', ru: 'Какие главные вызовы у Австрии?',
            a: 'Zu den größten Herausforderungen gehören meiner Meinung nach der Klimawandel, die steigenden Kosten und die Integration. Das sind komplexe Themen, die nur gemeinsam gelöst werden können. Ich bin aber optimistisch.' }
        ]
      }
    ]
  };
})();
