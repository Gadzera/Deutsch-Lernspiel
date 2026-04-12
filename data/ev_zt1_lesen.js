// EV ZT1 — Leseverstehen Texte (10 Texte, B1-B2)
const EV_ZT1_LESEN = [
// ---- TEXT 1: Liebe aus dem Internet (original) ----
{id:"ev1_lt1",title:"Liebe aus dem Internet",
text:`<h4>Abschnitt A</h4>
<p>Viele Menschen suchen im Netz nach Schuhen, buchen eine Urlaubsreise oder wollen den Partner bzw. die Partnerin fürs Leben finden – oder einfach nur für eine Nacht. Onlineportale verdienen damit viel Geld.</p>
<p>Mehr als elf Millionen Nutzer*innen befinden sich regelmäßig auf Internetseiten, wo man Kontakte finden kann. Solche Seiten heißen auch Kontaktbörsen, Datingportale oder Singlebörsen. Im deutschsprachigen Raum gibt es 2500 Singlebörsen und da kann jede*r etwas finden. Es gibt Partnerbörsen für Senior*innen oder Singles mit Kindern. Es gibt Kontaktbörsen für Musikfans, für besonders große Menschen oder für besonders dicke Menschen. Für jede*n ist etwas dabei.</p>
<p>Die verschiedenen Kontaktbörsen verdienen viel Geld damit. Rund 186 Millionen Euro verdienen die Portale jährlich zusammen.</p>
<h4>Abschnitt B</h4>
<p>2014 kam die kostenfreie Dating-App „Tinder" auf den Markt. Bei Tinder kann man ganz einfach einen Partner*eine Partnerin aus der Umgebung finden, ihn oder sie kontaktieren und mit der Person chatten. Dabei kann man auch mitteilen, ob man sie mag oder nicht. Das ist bei jungen Leuten besonders beliebt. „Tinder" ist kostenlos, aber das ist für andere Datingportale kein Problem, denn bei Tinder suchen die Menschen niemanden für eine lebenslange Partnerschaft. Sie nutzen das Portal, weil sie sich nur einmal kurz treffen oder flirten wollen.</p>
<h4>Abschnitt C</h4>
<p>Trotzdem ist das Geschäft mit der Online-Liebe heute schwieriger. Die Onlineportale haben zum Beispiel immer wieder Probleme mit modernen „Heiratsschwindlern". Heiratsschwindler*innen sind Betrüger*innen, die keine Liebe, sondern Geld suchen. Sie wollen im Internet jemanden kennenlernen, der viel Geld hat. Dann sagen sie: „Ich liebe dich und möchte dich heiraten!" Und wenn sie das Geld haben, sind sie plötzlich weg. Solche Probleme können sogar am Ende dazu führen, dass einige Portale aufhören.</p>
<h4>Abschnitt D</h4>
<p>Die 37-jährige Britta hat im Internet aber gute Erfahrungen gemacht. Sie war mehrere Jahre auf einem Onlineportal aktiv und hat dort nicht nur Männer, sondern auch Freunde gefunden. Auch ihren Ehemann hat Britta über ein Internetportal kennengelernt. „Man kann ein Internetportal nutzen", sagt sie, „aber man sollte auch sehr aufpassen, was man tut."</p>
<p>Britta empfiehlt, zu den ersten Treffen immer einen guten Freund oder eine Freundin mitzunehmen, damit man keine unangenehme Situation erlebt. Außerdem sollte man für die ersten Verabredungen immer nur öffentliche Orte auswählen, an denen sich auch viele andere Menschen befinden, wie zum Beispiel ein Kaffeehaus.</p>
<p>Britta selbst hat das so gemacht und Glück gehabt, denn heute lebt sie in einer harmonischen Partnerschaft.</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Es gibt besondere Portale für Menschen mit unterschiedlichen Interessen.","Ein Onlineportal allein verdient circa 186 Millionen Euro pro Jahr.","Mit Datingportalen kann man im deutschsprachigen Raum nicht viel Geld verdienen."],ans:0},
  {type:"sinngemaess",q:"Was sagt Britta über die Online-Portale?",points:1,opts:["Jede*r kann hier den richtigen Mann oder die Frau fürs Leben finden.","Es ist schwer, mit jemandem erst mal nur zu chatten und ihn oder sie nicht zu treffen.","Man sollte gut aufpassen."],ans:2},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Gute Tipps für die Online-Partnersuche","Große Konkurrenz für Onlineportale durch Tinder","Auf der Suche nach Geld statt Liebe"],correctMap:{"0":"D","1":"B","2":"C"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"Jungen Leuten gefällt es, dass sie über Tinder zeigen können, wenn sie jemanden mögen.",ans:"R"},
    {text:"Laut dem Text suchen viele Menschen auf Tinder den Partner*die Partnerin fürs Leben.",ans:"F"},
    {text:"Probleme mit Heiratsschwindler*innen auf Online-Portalen gibt es heutzutage kaum.",ans:"F"},
    {text:"Britta empfiehlt, sich bei der ersten Verabredung allein an einem ruhigen Ort zu treffen.",ans:"F"}
  ]}
]},

// ---- TEXT 2: Einkaufen im Wandel ----
{id:"ev1_lt2",title:"Einkaufen im Wandel",
text:`<h4>Abschnitt A</h4>
<p>Das Einkaufsverhalten der Österreicher*innen hat sich in den letzten Jahren stark verändert. Immer mehr Menschen bestellen ihre Waren im Internet, anstatt in ein Geschäft zu gehen. Besonders Kleidung, Elektronik und Bücher werden häufig online gekauft. Der Online-Handel wächst jedes Jahr um etwa 10 Prozent.</p>
<p>Gleichzeitig haben viele kleine Geschäfte in den Innenstädten Probleme. Sie können mit den niedrigen Preisen der großen Online-Händler nicht mithalten. In manchen Städten stehen bereits viele Geschäfte leer.</p>
<h4>Abschnitt B</h4>
<p>Trotzdem gibt es auch einen Gegentrend. Viele Konsument*innen achten heute mehr auf Nachhaltigkeit und regionale Produkte. Sie kaufen lieber auf dem Wochenmarkt oder in kleinen Bio-Läden ein, weil sie wissen wollen, woher ihre Lebensmittel kommen. Auch das Konzept „Unverpackt-Laden" wird immer beliebter: Dort bringt man seine eigenen Behälter mit und kauft Lebensmittel ohne Plastikverpackung.</p>
<h4>Abschnitt C</h4>
<p>Der 45-jährige Markus betreibt seit drei Jahren einen kleinen Bio-Laden in Graz. „Am Anfang war es schwierig, Kunden zu finden", erzählt er. „Aber inzwischen kommen immer mehr Leute, die bewusst einkaufen wollen. Sie fragen nach der Herkunft der Produkte und wollen wissen, ob die Bauern fair bezahlt werden."</p>
<h4>Abschnitt D</h4>
<p>Markus glaubt, dass die Zukunft des Einkaufens eine Mischung aus online und offline sein wird. „Die Menschen wollen schnell und bequem bestellen, aber sie wollen auch das Erlebnis im Geschäft nicht missen. Man kann ein Brot nicht im Internet riechen", sagt er lachend. Er empfiehlt anderen Geschäftsleuten, einen eigenen Online-Shop zu eröffnen und gleichzeitig im Laden eine besondere Atmosphäre zu schaffen.</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Der Online-Handel ist in den letzten Jahren gesunken.","Viele kleine Geschäfte haben Probleme wegen der Online-Konkurrenz.","Die meisten Österreicher kaufen am liebsten im Geschäft ein."],ans:1},
  {type:"sinngemaess",q:"Was sagt Markus über die Zukunft des Einkaufens?",points:1,opts:["Online-Shopping wird komplett verschwinden.","Die Zukunft wird eine Mischung aus Online und Laden sein.","Nur große Geschäfte werden überleben."],ans:1},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Tipps von einem erfolgreichen Ladenbesitzer","Online-Shopping verdrängt kleine Geschäfte","Billige Produkte aus dem Ausland"],correctMap:{"0":"D","1":"A","2":"X"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"In Unverpackt-Läden kauft man Lebensmittel ohne Plastikverpackung.",ans:"R"},
    {text:"Markus hatte von Anfang an viele Kunden in seinem Bio-Laden.",ans:"F"},
    {text:"Der Online-Handel wächst jedes Jahr um etwa 10 Prozent.",ans:"R"},
    {text:"Markus empfiehlt, keinen Online-Shop zu eröffnen.",ans:"F"}
  ]}
]},

// ---- TEXT 3: Wohnen in der Großstadt ----
{id:"ev1_lt3",title:"Wohnen in der Großstadt",
text:`<h4>Abschnitt A</h4>
<p>Die Mieten in Wien steigen seit Jahren. Besonders in den beliebten Bezirken wie dem 7. oder dem 8. Bezirk sind die Preise so hoch, dass sich viele junge Menschen keine Wohnung mehr leisten können. Eine kleine Zweizimmerwohnung kostet dort oft mehr als 800 Euro im Monat. Studierende und Berufsanfänger*innen sind besonders betroffen.</p>
<h4>Abschnitt B</h4>
<p>Als Alternative werden Wohngemeinschaften (WGs) immer beliebter. In einer WG teilt man sich Küche, Bad und Wohnzimmer mit anderen Mitbewohner*innen. Das spart nicht nur Geld, sondern hat auch soziale Vorteile: Man ist nie allein und kann sich gegenseitig helfen. Allerdings gibt es auch Nachteile – zum Beispiel Konflikte über die Sauberkeit oder den Lärm.</p>
<h4>Abschnitt C</h4>
<p>Die 28-jährige Lisa lebt seit vier Jahren in einer WG im 15. Bezirk. „Ich zahle nur 350 Euro für mein Zimmer, inklusive Nebenkosten", erzählt sie. „In einer eigenen Wohnung würde ich mindestens das Doppelte zahlen." Lisa mag besonders die Gemeinschaft: „Abends kochen wir oft zusammen und am Wochenende unternehmen wir etwas."</p>
<h4>Abschnitt D</h4>
<p>Es gibt aber auch Probleme. Lisas ehemalige Mitbewohnerin hat nie geputzt und immer sehr laute Musik gehört. „Das war eine schwierige Zeit", sagt Lisa. „Aber nachdem sie ausgezogen ist, haben wir einen neuen Mitbewohner gefunden, der viel besser passt." Lisa empfiehlt, vor dem Einzug ein langes Gespräch mit den potenziellen Mitbewohner*innen zu führen: „Man sollte offen über Erwartungen und Gewohnheiten sprechen, bevor man zusammenzieht."</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Die Mieten in Wien sind in den letzten Jahren gesunken.","Junge Menschen können sich oft keine eigene Wohnung leisten.","Im 15. Bezirk sind die Mieten am höchsten."],ans:1},
  {type:"sinngemaess",q:"Was empfiehlt Lisa?",points:1,opts:["Man sollte nie in einer WG wohnen.","Man sollte vorher mit den Mitbewohnern über Erwartungen sprechen.","Man sollte immer allein wohnen."],ans:1},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Vorteile und Nachteile des WG-Lebens","Hohe Mieten treffen junge Leute besonders hart","Neue Wohnprojekte der Stadt Wien"],correctMap:{"0":"B","1":"A","2":"X"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"Lisa zahlt 350 Euro für ihr WG-Zimmer.",ans:"R"},
    {text:"In einer WG gibt es nie Konflikte.",ans:"F"},
    {text:"Lisas ehemalige Mitbewohnerin war sehr ordentlich.",ans:"F"},
    {text:"Lisa wohnt seit vier Jahren in einer WG.",ans:"R"}
  ]}
]},

// ---- TEXT 4: Ehrenamt — Freiwillig helfen ----
{id:"ev1_lt4",title:"Ehrenamt — Freiwillig helfen",
text:`<h4>Abschnitt A</h4>
<p>In Österreich engagieren sich rund 3,5 Millionen Menschen ehrenamtlich. Das bedeutet, sie arbeiten freiwillig und ohne Bezahlung für andere Menschen oder für die Gesellschaft. Ehrenamtliche helfen zum Beispiel bei der Freiwilligen Feuerwehr, beim Roten Kreuz, in Sportvereinen oder in sozialen Einrichtungen wie Obdachlosenheimen.</p>
<p>Ohne diese freiwilligen Helfer*innen würde vieles in Österreich nicht funktionieren. Der Staat könnte die Arbeit, die Ehrenamtliche leisten, gar nicht bezahlen. Expert*innen schätzen den Wert der ehrenamtlichen Arbeit auf mehrere Milliarden Euro pro Jahr.</p>
<h4>Abschnitt B</h4>
<p>Besonders viele Ehrenamtliche gibt es im Sportbereich. Etwa 500.000 Menschen arbeiten freiwillig in Sportvereinen — als Trainer*innen, Schiedsrichter*innen oder in der Organisation. Ohne sie könnte der Breitensport in Österreich nicht existieren. Auch im kulturellen Bereich sind viele Freiwillige aktiv: Sie organisieren Konzerte, leiten Chöre oder arbeiten in Museen.</p>
<h4>Abschnitt C</h4>
<p>In den letzten Jahren gibt es allerdings ein Problem: Immer weniger junge Menschen engagieren sich ehrenamtlich. Viele sagen, sie hätten keine Zeit, weil sie neben dem Studium arbeiten müssen. Andere finden es nicht attraktiv, ohne Geld zu arbeiten. Die Vereine versuchen deshalb, junge Leute mit neuen Angeboten anzulocken, zum Beispiel mit Zertifikaten, die man bei Bewerbungen verwenden kann.</p>
<h4>Abschnitt D</h4>
<p>Die 52-jährige Petra arbeitet seit über zwanzig Jahren ehrenamtlich bei der Caritas. „Ich helfe jeden Samstag bei der Essensausgabe für obdachlose Menschen", erzählt sie. „Es macht mich glücklich, wenn ich sehe, dass ich jemandem helfen kann." Petra sagt, dass man durch ehrenamtliche Arbeit auch viel lernt: „Man lernt, im Team zu arbeiten, Verantwortung zu übernehmen und mit schwierigen Situationen umzugehen. Das sind Fähigkeiten, die man auch im Beruf braucht."</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Ehrenamtliche Arbeit wird in Österreich gut bezahlt.","Ohne ehrenamtliche Helfer würde vieles nicht funktionieren.","In Österreich engagieren sich nur wenige Menschen ehrenamtlich."],ans:1},
  {type:"sinngemaess",q:"Was sagt Petra über ehrenamtliche Arbeit?",points:1,opts:["Man verliert nur Zeit damit.","Man lernt dabei wichtige Fähigkeiten.","Man sollte dafür Geld bekommen."],ans:1},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Ehrenamtliche Arbeit — unverzichtbar für die Gesellschaft","Junge Menschen und das Ehrenamt — ein Problem","Staat bezahlt Ehrenamtliche besser als früher"],correctMap:{"0":"A","1":"C","2":"X"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"Etwa 500.000 Menschen arbeiten freiwillig in Sportvereinen.",ans:"R"},
    {text:"Alle jungen Menschen in Österreich engagieren sich ehrenamtlich.",ans:"F"},
    {text:"Petra arbeitet seit über zwanzig Jahren bei der Caritas.",ans:"R"},
    {text:"Vereine bieten jungen Leuten Zertifikate an, um sie zu motivieren.",ans:"R"}
  ]}
]},

// ---- TEXT 5: Digitales Lernen ----
{id:"ev1_lt5",title:"Digitales Lernen",
text:`<h4>Abschnitt A</h4>
<p>Die Corona-Pandemie hat das Bildungssystem in Österreich stark verändert. Plötzlich mussten Schulen und Universitäten auf Online-Unterricht umstellen. Lehrer*innen, die vorher kaum mit digitalen Medien gearbeitet hatten, mussten innerhalb weniger Tage lernen, wie man Videokonferenzen hält und digitale Lernplattformen benutzt.</p>
<p>Auch für die Schüler*innen und Studierenden war die Umstellung schwierig. Nicht alle hatten zu Hause einen Computer oder eine stabile Internetverbindung. Besonders Kinder aus ärmeren Familien waren benachteiligt.</p>
<h4>Abschnitt B</h4>
<p>Inzwischen sind viele Schulen und Universitäten wieder zum Präsenzunterricht zurückgekehrt, aber digitale Elemente sind geblieben. Viele Lehrende stellen ihre Materialien online zur Verfügung, und Studierende können Vorlesungen als Video nachschauen. Auch hybride Formate, bei denen ein Teil der Studierenden im Hörsaal sitzt und ein Teil online teilnimmt, werden immer häufiger angeboten.</p>
<h4>Abschnitt C</h4>
<p>Die 31-jährige Lehrerin Sarah unterrichtet Deutsch an einem Gymnasium in Linz. „Während der Pandemie habe ich gelernt, digitale Tools zu benutzen, und möchte sie nicht mehr missen", sagt sie. „Zum Beispiel benutze ich jetzt regelmäßig Lern-Apps im Unterricht, die den Schülern*innen sofort Feedback geben. Das motiviert sie sehr."</p>
<h4>Abschnitt D</h4>
<p>Gleichzeitig warnt Sarah vor zu viel Bildschirmzeit: „Kinder und Jugendliche verbringen ohnehin schon sehr viel Zeit vor dem Bildschirm. Der persönliche Kontakt zwischen Lehrkraft und Schüler*innen ist durch nichts zu ersetzen." Sie empfiehlt eine Mischung: „Das Beste aus beiden Welten — digitale Tools dort einsetzen, wo sie sinnvoll sind, aber den menschlichen Kontakt nie vergessen."</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Alle Schüler hatten während der Pandemie einen Computer zu Hause.","Die Pandemie hat das Bildungssystem in Österreich verändert.","Lehrer waren auf den Online-Unterricht gut vorbereitet."],ans:1},
  {type:"sinngemaess",q:"Was empfiehlt Sarah?",points:1,opts:["Nur noch digital unterrichten.","Eine Mischung aus digitalen und persönlichen Elementen.","Digitale Medien komplett aus dem Unterricht verbannen."],ans:1},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Digitale Elemente bleiben nach der Pandemie","Lern-Apps ersetzen alle Lehrkräfte","Kinder aus ärmeren Familien waren benachteiligt"],correctMap:{"0":"B","1":"X","2":"A"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"Sarah unterrichtet Mathematik an einem Gymnasium.",ans:"F"},
    {text:"Hybride Formate werden an Universitäten immer häufiger angeboten.",ans:"R"},
    {text:"Sarah möchte digitale Tools nicht mehr im Unterricht benutzen.",ans:"F"},
    {text:"Sarah warnt vor zu viel Bildschirmzeit bei Kindern.",ans:"R"}
  ]}
]},

// ---- TEXT 6: Öffentlicher Verkehr in Wien ----
{id:"ev1_lt6",title:"Öffentlicher Verkehr in Wien",
text:`<h4>Abschnitt A</h4>
<p>Wien hat eines der besten öffentlichen Verkehrsnetze in Europa. Mit fünf U-Bahn-Linien, 29 Straßenbahn-Linien und über 100 Buslinien kommt man fast überall in der Stadt schnell und günstig hin. Außerdem gibt es die S-Bahn, die Wien mit den umliegenden Gemeinden verbindet.</p>
<p>Besonders beliebt ist das Jahresticket der Wiener Linien. Für 365 Euro — also nur einen Euro pro Tag — kann man ein ganzes Jahr lang alle öffentlichen Verkehrsmittel in Wien benutzen. Mehr als 800.000 Menschen haben dieses Ticket, das ist fast jede*r zweite Wiener*in.</p>
<h4>Abschnitt B</h4>
<p>Trotz des guten Angebots gibt es auch Kritik. Besonders in den Stoßzeiten am Morgen und am Abend sind die U-Bahnen oft überfüllt. Manche Fahrgäste müssen warten, bis die nächste Bahn kommt, weil sie in die erste nicht mehr einsteigen können. Außerdem klagen viele Pendler*innen aus den Vororten über zu wenige Verbindungen am Wochenende.</p>
<h4>Abschnitt C</h4>
<p>Die Wiener Linien investieren deshalb stark in den Ausbau des Netzes. Die neue U-Bahn-Linie U5 wird gebaut und soll 2026 eröffnet werden. Auch die U2 wird verlängert. Dadurch sollen in Zukunft noch mehr Menschen auf das Auto verzichten und stattdessen die Öffis benutzen.</p>
<h4>Abschnitt D</h4>
<p>Der 39-jährige Markus fährt jeden Tag mit der U-Bahn zur Arbeit. „Ich habe vor drei Jahren mein Auto verkauft und benutze nur noch die Öffis", erzählt er. „Es ist günstiger, umweltfreundlicher und meistens auch schneller als mit dem Auto." Sein einziger Kritikpunkt: „Manchmal ist es in der U-Bahn so voll, dass man kaum atmen kann. Aber insgesamt bin ich sehr zufrieden mit den Wiener Linien."</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Das Jahresticket kostet mehr als 500 Euro.","Wien hat eines der besten Verkehrsnetze in Europa.","Nur wenige Wiener benutzen öffentliche Verkehrsmittel."],ans:1},
  {type:"sinngemaess",q:"Was sagt Markus?",points:1,opts:["Er fährt lieber mit dem Auto als mit der U-Bahn.","Öffis sind günstiger, umweltfreundlicher und oft schneller.","Die U-Bahnen sind nie überfüllt."],ans:1},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Ausbau des Verkehrsnetzes für die Zukunft","Günstig und praktisch — das Wiener Jahresticket","Wien plant autofreie Zonen in der Innenstadt"],correctMap:{"0":"C","1":"A","2":"X"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"Das Jahresticket kostet 365 Euro, also einen Euro pro Tag.",ans:"R"},
    {text:"Die U-Bahnen sind in den Stoßzeiten nie überfüllt.",ans:"F"},
    {text:"Markus hat sein Auto vor drei Jahren verkauft.",ans:"R"},
    {text:"Die neue U-Bahn-Linie U5 ist bereits in Betrieb.",ans:"F"}
  ]}
]},

// ---- TEXT 7: Umweltschutz im Alltag ----
{id:"ev1_lt7",title:"Umweltschutz im Alltag",
text:`<h4>Abschnitt A</h4>
<p>Der Klimawandel ist eine der größten Herausforderungen unserer Zeit. Immer mehr Menschen in Österreich wollen deshalb ihren Beitrag zum Umweltschutz leisten. Doch was kann man im Alltag konkret tun? Expert*innen sagen, dass jede*r Einzelne etwas bewirken kann — auch mit kleinen Veränderungen.</p>
<p>Besonders viel CO2 verursachen der Verkehr, die Ernährung und das Heizen. Wer zum Beispiel öfter das Fahrrad nimmt statt das Auto, spart pro Kilometer etwa 150 Gramm CO2. Wer weniger Fleisch isst, reduziert seinen ökologischen Fußabdruck ebenfalls deutlich.</p>
<h4>Abschnitt B</h4>
<p>Mülltrennung gehört in Österreich schon lange zum Alltag. In Wien gibt es verschiedenfarbige Tonnen für Papier, Plastik, Glas und Biomüll. Trotzdem landen immer noch viele Dinge im falschen Container. Besonders bei Plastik sind viele Verbraucher*innen unsicher, was recycelt werden kann und was nicht.</p>
<h4>Abschnitt C</h4>
<p>Die 33-jährige Klara aus Wien hat vor zwei Jahren beschlossen, ihren Alltag umweltfreundlicher zu gestalten. „Ich habe angefangen, meine eigenen Taschen zum Einkaufen mitzubringen und Produkte ohne Verpackung zu kaufen", erzählt sie. „Außerdem fahre ich jetzt mit dem Fahrrad zur Arbeit, obwohl es manchmal regnet." Klara sagt, dass sie durch diese Änderungen nicht nur Geld spart, sondern sich auch besser fühlt.</p>
<h4>Abschnitt D</h4>
<p>Klara empfiehlt anderen, nicht alles auf einmal zu ändern: „Man sollte mit einer Sache anfangen und sich langsam steigern. Zum Beispiel kann man zuerst versuchen, eine Woche lang kein Fleisch zu essen. Wenn das klappt, kann man den nächsten Schritt machen." Sie findet es auch wichtig, mit Freunden und Familie über Umweltschutz zu sprechen: „Wenn viele Menschen kleine Dinge ändern, hat das eine große Wirkung."</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Einzelne Personen können nichts für die Umwelt tun.","Verkehr, Ernährung und Heizen verursachen besonders viel CO2.","Mülltrennung gibt es in Österreich noch nicht."],ans:1},
  {type:"sinngemaess",q:"Was empfiehlt Klara?",points:1,opts:["Man sollte sofort alles in seinem Leben ändern.","Man sollte mit einer kleinen Veränderung anfangen.","Man sollte nichts ändern und auf die Regierung warten."],ans:1},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Mülltrennung in Österreich — nicht immer einfach","Schritt für Schritt umweltfreundlicher leben","Neue Gesetze gegen den Klimawandel"],correctMap:{"0":"B","1":"D","2":"X"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"Klara fährt jetzt mit dem Fahrrad zur Arbeit.",ans:"R"},
    {text:"Pro Kilometer mit dem Fahrrad spart man etwa 150 Gramm CO2.",ans:"R"},
    {text:"In Wien gibt es keine Mülltrennung.",ans:"F"},
    {text:"Klara hat ihre Gewohnheiten vor fünf Jahren geändert.",ans:"F"}
  ]}
]},

// ---- TEXT 8: Haustiere in der Stadt ----
{id:"ev1_lt8",title:"Haustiere in der Stadt",
text:`<h4>Abschnitt A</h4>
<p>Österreich ist ein Land der Tierliebhaber*innen. Rund 2 Millionen Katzen und 700.000 Hunde leben in österreichischen Haushalten. In den Großstädten sind Haustiere besonders beliebt: Viele Menschen, die allein leben, fühlen sich mit einem Tier weniger einsam. Auch Familien mit Kindern haben oft Haustiere, weil Kinder dadurch lernen, Verantwortung zu übernehmen.</p>
<p>Das Halten von Haustieren in der Stadt bringt jedoch auch Herausforderungen mit sich. Hunde brauchen regelmäßig Auslauf, und nicht überall gibt es geeignete Grünflächen. Auch die Kosten für Futter, Tierarzt und Hundesteuer können hoch sein.</p>
<h4>Abschnitt B</h4>
<p>In Wien gibt es strenge Regeln für Hundebesitzer*innen. Hunde müssen in öffentlichen Verkehrsmitteln einen Maulkorb tragen oder in einer Transportbox mitgenommen werden. In manchen Parks gibt es spezielle Hundezonen, wo die Tiere frei laufen dürfen. Außerdem müssen Hundebesitzer*innen den Kot ihres Hundes aufsammeln — wer das nicht tut, muss eine Strafe von bis zu 50 Euro bezahlen.</p>
<h4>Abschnitt C</h4>
<p>Die 29-jährige Julia hat seit einem Jahr einen Hund namens Bello. „Ich wohne in einer kleinen Wohnung im 3. Bezirk", erzählt sie. „Am Anfang hatte ich Angst, dass die Wohnung zu klein für einen Hund ist. Aber ich gehe dreimal am Tag mit Bello in den Prater, und er hat genug Bewegung."</p>
<h4>Abschnitt D</h4>
<p>Julia sagt, dass ein Hund ihr Leben komplett verändert hat: „Ich bin viel aktiver geworden, weil ich jeden Tag rausgehen muss. Und ich habe durch Bello auch viele neue Leute kennengelernt — andere Hundebesitzer im Park." Sie empfiehlt, sich vor der Anschaffung eines Haustiers gut zu informieren: „Man muss wissen, wie viel Zeit und Geld ein Tier braucht. Ein Hund ist keine Sache, die man einfach zurückgeben kann, wenn man keine Lust mehr hat."</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["In Österreich gibt es nur wenige Haustiere.","Haustiere helfen gegen Einsamkeit.","Hunde brauchen in der Stadt keinen Auslauf."],ans:1},
  {type:"sinngemaess",q:"Was empfiehlt Julia?",points:1,opts:["Man sollte sich vor dem Kauf eines Tieres gut informieren.","Kleine Wohnungen sind für Hunde ungeeignet.","Man sollte keinen Hund in der Stadt halten."],ans:0},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Regeln für Hundebesitzer in Wien","Wien baut neue Tierheime","Ein Hund verändert das Leben"],correctMap:{"0":"B","1":"X","2":"D"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"In Wien müssen Hunde in den Öffis einen Maulkorb tragen.",ans:"R"},
    {text:"Julia wohnt in einer großen Wohnung.",ans:"F"},
    {text:"Hundebesitzer müssen den Kot ihres Hundes aufsammeln.",ans:"R"},
    {text:"Julia hat durch ihren Hund keine neuen Leute kennengelernt.",ans:"F"}
  ]}
]},

// ---- TEXT 9: Gesunde Ernährung ----
{id:"ev1_lt9",title:"Gesunde Ernährung",
text:`<h4>Abschnitt A</h4>
<p>Die Ernährungsgewohnheiten der Österreicher*innen haben sich in den letzten Jahrzehnten stark verändert. Früher aßen die meisten Menschen viel Fleisch und schwere Kost. Heute achten immer mehr Menschen auf eine gesunde und ausgewogene Ernährung. Der Trend geht zu mehr Obst, Gemüse und Vollkornprodukten.</p>
<p>Laut einer Studie ernähren sich etwa 10 Prozent der Österreicher*innen vegetarisch und rund 2 Prozent vegan. Besonders unter jungen Menschen zwischen 18 und 30 Jahren steigt der Anteil derer, die auf Fleisch verzichten.</p>
<h4>Abschnitt B</h4>
<p>In den Supermärkten und Restaurants reagiert man auf diesen Trend. Es gibt immer mehr vegane und vegetarische Produkte, und viele Restaurants bieten pflanzliche Gerichte an. Auch in Schulen und Universitäten wird gesünderes Essen angeboten. In der Mensa der Universität Wien gibt es jeden Tag mindestens ein vegetarisches Gericht.</p>
<h4>Abschnitt C</h4>
<p>Gleichzeitig warnen Ernährungsberater*innen davor, jeden Ernährungstrend unkritisch zu übernehmen. „Nicht jede Diät ist gesund", sagt die Ernährungswissenschaftlerin Dr. Maria Weber. „Wer sich einseitig ernährt, riskiert einen Nährstoffmangel. Wichtig ist eine abwechslungsreiche Ernährung mit viel Obst und Gemüse, ausreichend Eiweiß und gesunden Fetten."</p>
<h4>Abschnitt D</h4>
<p>Der 26-jährige Student David ist seit drei Jahren Vegetarier. „Ich habe mich damals entschieden, kein Fleisch mehr zu essen, weil ich etwas für die Umwelt tun wollte", erzählt er. „Die Fleischproduktion verursacht sehr viel CO2." David kocht gern und probiert regelmäßig neue vegetarische Rezepte aus. „Am Anfang war es schwierig, aber inzwischen vermisse ich Fleisch überhaupt nicht mehr." Er rät aber davon ab, von heute auf morgen alles zu ändern: „Man sollte langsam anfangen und Schritt für Schritt seine Ernährung umstellen."</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Die Ernährungsgewohnheiten in Österreich haben sich kaum verändert.","Immer mehr Österreicher achten auf gesunde Ernährung.","Die meisten Österreicher sind Veganer."],ans:1},
  {type:"sinngemaess",q:"Was sagt Dr. Weber?",points:1,opts:["Jede Diät ist automatisch gesund.","Eine abwechslungsreiche Ernährung ist wichtig.","Man sollte nur Obst und Gemüse essen."],ans:1},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Supermärkte und Restaurants passen sich an","Ein Student erzählt, warum er Vegetarier wurde","Neue Steuer auf Fleischprodukte in Österreich"],correctMap:{"0":"B","1":"D","2":"X"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"Etwa 10 Prozent der Österreicher ernähren sich vegetarisch.",ans:"R"},
    {text:"David ist seit fünf Jahren Vegetarier.",ans:"F"},
    {text:"In der Mensa der Universität Wien gibt es jeden Tag ein vegetarisches Gericht.",ans:"R"},
    {text:"Dr. Weber empfiehlt einseitige Diäten.",ans:"F"}
  ]}
]},

// ---- TEXT 10: Reisen mit dem Zug ----
{id:"ev1_lt10",title:"Reisen mit dem Zug",
text:`<h4>Abschnitt A</h4>
<p>In den letzten Jahren entscheiden sich immer mehr Menschen in Österreich dafür, mit dem Zug zu reisen statt zu fliegen. Der Hauptgrund dafür ist der Umweltschutz: Ein Flug von Wien nach München verursacht etwa 20-mal so viel CO2 wie eine Zugfahrt auf derselben Strecke. Außerdem sind die Züge der ÖBB (Österreichische Bundesbahnen) in den letzten Jahren deutlich komfortabler geworden.</p>
<p>Besonders die Nachtzüge der ÖBB, die sogenannten „Nightjets", sind sehr beliebt. Man kann abends in Wien einsteigen und am nächsten Morgen in Hamburg, Rom oder Brüssel aufwachen — ganz ohne Flughafen-Stress.</p>
<h4>Abschnitt B</h4>
<p>Allerdings gibt es auch Kritik an der Bahn. Die Tickets sind oft teuer, besonders wenn man sie kurzfristig kauft. Ein einfaches Ticket von Wien nach Salzburg kann über 50 Euro kosten. Außerdem sind Verspätungen ein Problem: Laut Statistik kommen etwa 10 Prozent aller ÖBB-Züge mit einer Verspätung von mehr als fünf Minuten an.</p>
<h4>Abschnitt C</h4>
<p>Die ÖBB reagieren auf die Kritik. Seit 2022 gibt es das „Klimaticket" für 1.095 Euro pro Jahr, mit dem man alle öffentlichen Verkehrsmittel in ganz Österreich benutzen kann — Züge, Busse, Straßenbahnen und U-Bahnen. Das sind nur etwa drei Euro pro Tag. Für junge Menschen unter 26 gibt es das Klimaticket sogar günstiger.</p>
<h4>Abschnitt D</h4>
<p>Die 35-jährige Sabine fährt regelmäßig mit dem Zug von Wien nach Graz, wo ihre Eltern wohnen. „Früher bin ich manchmal geflogen oder mit dem Auto gefahren", sagt sie. „Seit ich das Klimaticket habe, nehme ich immer den Zug. Die Fahrt dauert zweieinhalb Stunden, und ich kann im Zug lesen oder arbeiten. Das geht im Auto nicht." Ihr einziger Kritikpunkt: „Manchmal sind die Züge verspätet, besonders im Winter. Aber insgesamt finde ich den Zug die beste Option."</p>`,
questions:[
  {type:"sinngemaess",q:"Was steht sinngemäß im Text?",points:1,opts:["Fliegen verursacht weniger CO2 als Zugfahren.","Immer mehr Menschen reisen mit dem Zug statt zu fliegen.","Die ÖBB-Züge sind in den letzten Jahren unbequemer geworden."],ans:1},
  {type:"sinngemaess",q:"Was sagt Sabine?",points:1,opts:["Sie fliegt lieber als Zug zu fahren.","Im Zug kann man lesen oder arbeiten.","Züge sind nie verspätet."],ans:1},
  {type:"zuordnung",q:"Ordnen Sie den Abschnitten (A–D) eine Überschrift zu! Eine passt nicht (= X).",points:3,headings:["Das Klimaticket — günstig durch ganz Österreich","Teure Tickets und Verspätungen als Kritikpunkte","Österreich plant neue Flughäfen"],correctMap:{"0":"C","1":"B","2":"X"}},
  {type:"richtigfalsch",q:"Laut Text richtig (R) oder falsch (F)?",points:4,statements:[
    {text:"Ein Flug von Wien nach München verursacht 20-mal so viel CO2 wie eine Zugfahrt.",ans:"R"},
    {text:"Alle ÖBB-Züge kommen immer pünktlich an.",ans:"F"},
    {text:"Das Klimaticket kostet 1.095 Euro pro Jahr.",ans:"R"},
    {text:"Die Zugfahrt von Wien nach Graz dauert fünf Stunden.",ans:"F"}
  ]}
]}
];
