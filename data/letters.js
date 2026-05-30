/* Deutsch-Lernspiel — Briefe & E-Mails schreiben (writing trainer data).
 *
 * window.LETTER_TASKS = array of letter tasks, grouped in the UI by CEFR level.
 * Each task:
 *   id      — unique slug
 *   level   — 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
 *   kind    — 'informell' (du, Freund/Familie) | 'formell' (Sie, Institution)
 *   title   — short headline shown in the list
 *   prompt  — the situation / Aufgabenstellung (German)
 *   points  — required content points (Inhaltspunkte); the AI ticks these off live
 *   anrede  — suggested salutation
 *   gruss   — suggested closing
 *   minWords— target length for that level
 *   hint    — small Redemittel hint (optional)
 *
 * Topics follow the typical Uni-Wien VWU / ÖSD letter tasks per level
 * (A1 ~60 W · A2 ~120 W · B1 ~180 W · B2 ~220 W · C1 ~300 W).
 */
(function () {
  'use strict';
  window.LETTER_TASKS = [
    /* ───────────────────────── A1 — informell, ~60 Wörter ───────────────────────── */
    {
      id: 'a1-geburtstag', level: 'A1', kind: 'informell',
      title: 'Einladung zum Geburtstag',
      prompt: 'Du hast bald Geburtstag und möchtest deine Freundin Anna einladen. Schreib eine kurze E-Mail.',
      points: ['Wann und wo die Feier ist', 'Was ihr zusammen macht', 'Was Anna mitbringen soll'],
      anrede: 'Liebe Anna,', gruss: 'Liebe Grüße, [dein Name]', minWords: 60,
      hint: 'einladen zu, am … um … Uhr, bei mir zu Hause, bitte bring … mit',
    },
    {
      id: 'a1-krank', level: 'A1', kind: 'informell',
      title: 'Absage: Ich bin krank',
      prompt: 'Du bist krank und kannst heute nicht zum Treffen mit deinem Freund Tom kommen. Schreib ihm eine kurze Nachricht.',
      points: ['Dass du nicht kommen kannst', 'Warum (du bist krank)', 'Einen neuen Termin vorschlagen'],
      anrede: 'Lieber Tom,', gruss: 'Bis bald, [dein Name]', minWords: 60,
      hint: 'leider, ich bin krank, es tut mir leid, vielleicht am … ?',
    },
    {
      id: 'a1-urlaub', level: 'A1', kind: 'informell',
      title: 'Gruß aus dem Urlaub',
      prompt: 'Du bist im Urlaub und schreibst eine Postkarte / kurze E-Mail an einen Freund.',
      points: ['Wo du bist', 'Wie das Wetter ist', 'Was du dort machst'],
      anrede: 'Lieber Max,', gruss: 'Viele Grüße, [dein Name]', minWords: 60,
      hint: 'ich bin in …, das Wetter ist …, ich besuche / schwimme / esse …',
    },

    /* ───────────────────────── A2 — informell + einfach formell, ~120 Wörter ───────────────────────── */
    {
      id: 'a2-besuch', level: 'A2', kind: 'informell',
      title: 'Einladung in deine Stadt',
      prompt: 'Eine Freundin aus deinem Heimatland möchte dich besuchen. Schreib ihr eine E-Mail und lade sie ein.',
      points: ['Wann sie kommen soll', 'Was ihr zusammen unternehmen könnt', 'Wie sie zu dir kommt (Zug, Flugzeug …)'],
      anrede: 'Liebe Sara,', gruss: 'Ich freue mich auf dich! Liebe Grüße, [dein Name]', minWords: 120,
      hint: 'komm doch …, wir können …, du kannst mit dem … fahren',
    },
    {
      id: 'a2-termin', level: 'A2', kind: 'informell',
      title: 'Termin verschieben',
      prompt: 'Ihr wolltet euch am Samstag treffen, aber du hast keine Zeit. Schreib deinem Freund und verschiebe den Termin.',
      points: ['Dass du am Samstag keine Zeit hast', 'Warum nicht (Grund)', 'Einen neuen Tag vorschlagen'],
      anrede: 'Lieber Jan,', gruss: 'Liebe Grüße, [dein Name]', minWords: 120,
      hint: 'leider, ich kann am … nicht, weil …, passt dir … ?',
    },
    {
      id: 'a2-kurs', level: 'A2', kind: 'formell',
      title: 'Anfrage: Deutschkurs',
      prompt: 'Du möchtest einen Deutschkurs an einer Sprachschule machen. Schreib eine kurze, höfliche E-Mail an die Schule.',
      points: ['Welchen Kurs du suchst (Niveau)', 'Ab wann du anfangen möchtest', 'Eine Frage (z. B. Preis oder Uhrzeit)'],
      anrede: 'Sehr geehrte Damen und Herren,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 120,
      hint: 'ich interessiere mich für …, könnten Sie mir sagen …, ich möchte …',
    },

    /* ───────────────────────── B1 — informell & formell, ~180 Wörter ───────────────────────── */
    {
      id: 'b1-umzug', level: 'B1', kind: 'informell',
      title: 'Umzug in eine neue Stadt',
      prompt: 'Du bist vor Kurzem in eine andere Stadt gezogen. Schreib einem Freund / einer Freundin eine E-Mail über dein neues Leben.',
      points: ['Warum du umgezogen bist', 'Wie dir die neue Stadt / Wohnung gefällt', 'Lade ihn/sie zu einem Besuch ein'],
      anrede: 'Liebe Lena,', gruss: 'Ich hoffe, wir sehen uns bald! Liebe Grüße, [dein Name]', minWords: 180,
      hint: 'seit einem Monat wohne ich …, mir gefällt besonders …, komm mich doch besuchen',
    },
    {
      id: 'b1-reklamation', level: 'B1', kind: 'formell',
      title: 'Reklamation an den Vermieter',
      prompt: 'In deiner Wohnung ist etwas kaputt (z. B. die Heizung). Schreib eine höfliche, aber bestimmte E-Mail an deinen Vermieter.',
      points: ['Was kaputt ist', 'Seit wann das Problem besteht', 'Was du verlangst (Reparatur) und bis wann'],
      anrede: 'Sehr geehrter Herr Bauer,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 180,
      hint: 'ich möchte Sie darüber informieren, dass …, seit … funktioniert … nicht, ich bitte Sie, … bis … zu reparieren',
    },
    {
      id: 'b1-kursleitung', level: 'B1', kind: 'formell',
      title: 'Anfrage an die Kursleitung',
      prompt: 'Du möchtest an einem Kurs an der Volkshochschule teilnehmen und hast Fragen. Schreib eine formelle E-Mail an die Kursleitung.',
      points: ['Grund deines Schreibens (welcher Kurs)', 'Zwei konkrete Fragen (z. B. Termine, Material, Kosten)', 'Bitte um eine baldige Antwort'],
      anrede: 'Sehr geehrte Damen und Herren,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 180,
      hint: 'ich schreibe Ihnen, weil …, könnten Sie mir mitteilen, ob …, über eine Antwort würde ich mich freuen',
    },

    /* ───────────────────────── B2 — meist formell, ~220 Wörter ───────────────────────── */
    {
      id: 'b2-beschwerde', level: 'B2', kind: 'formell',
      title: 'Beschwerde über eine Bestellung',
      prompt: 'Du hast online ein Produkt bestellt, aber es kam beschädigt / falsch an. Schreib eine formelle Beschwerde an den Online-Shop.',
      points: ['Bestelldetails (was, wann bestellt)', 'Das Problem genau beschreiben', 'Deine Forderung (Ersatz oder Rückerstattung)', 'Eine Frist und die Erwartung einer Antwort'],
      anrede: 'Sehr geehrte Damen und Herren,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 220,
      hint: 'am … habe ich … bestellt, leider musste ich feststellen, dass …, ich erwarte, dass Sie …, bis spätestens …',
    },
    {
      id: 'b2-praktikum', level: 'B2', kind: 'formell',
      title: 'Bewerbung um ein Praktikum',
      prompt: 'Du möchtest dich um ein Praktikum in einem Unternehmen bewerben. Schreib ein formelles Bewerbungsschreiben.',
      points: ['Bezug: auf welche Stelle und wie gefunden', 'Deine Qualifikationen / Erfahrung', 'Deine Motivation für diese Stelle', 'Verfügbarkeit und Bitte um ein Gespräch'],
      anrede: 'Sehr geehrte Frau Klein,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 220,
      hint: 'mit großem Interesse habe ich …, derzeit studiere ich …, ich bringe … mit, über eine Einladung zu einem Gespräch würde ich mich freuen',
    },
    {
      id: 'b2-leserbrief', level: 'B2', kind: 'formell',
      title: 'Leserbrief: Studiengebühren',
      prompt: 'In einer Zeitung hast du einen Artikel über die Einführung von Studiengebühren gelesen. Schreib einen Leserbrief und nimm Stellung.',
      points: ['Bezug auf den Artikel', 'Deine eigene Meinung mit Begründung', 'Ein Gegenargument nennen und entkräften', 'Ein abschließendes Fazit'],
      anrede: 'Sehr geehrte Redaktion,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 220,
      hint: 'in Ihrem Artikel … wird behauptet, dass …, meiner Meinung nach …, zwar … aber …, zusammenfassend …',
    },

    /* ───────────────────────── C1 — formell & anspruchsvoll, ~300 Wörter ───────────────────────── */
    {
      id: 'c1-leserbrief', level: 'C1', kind: 'formell',
      title: 'Leserbrief: Digitalisierung',
      prompt: 'Du hast einen Artikel über die zunehmende Handynutzung im Alltag gelesen. Verfasse einen differenzierten Leserbrief.',
      points: ['Präziser Bezug auf den Artikel und seine These', 'Deine Position mit zwei fundierten Argumenten', 'Eine Gegenposition aufgreifen und entkräften', 'Ein pointierter Schlussappell'],
      anrede: 'Sehr geehrte Redaktion,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 300,
      hint: 'mit großem Interesse habe ich Ihren Artikel … gelesen, es lässt sich nicht leugnen, dass …, gleichwohl …, abschließend bleibt festzuhalten …',
    },
    {
      id: 'c1-beschwerde', level: 'C1', kind: 'formell',
      title: 'Formelle Beschwerde an eine Institution',
      prompt: 'Du bist mit der Leistung einer Institution (Amt, Universität, Anbieter) sehr unzufrieden. Verfasse eine sachliche, nachdrückliche Beschwerde.',
      points: ['Den Sachverhalt präzise und sachlich schildern', 'Die Folgen / Auswirkungen für dich darlegen', 'Eine klare Forderung mit Frist formulieren', 'Mögliche Konsequenzen höflich andeuten'],
      anrede: 'Sehr geehrte Damen und Herren,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 300,
      hint: 'hiermit möchte ich mich nachdrücklich darüber beschweren, dass …, dies hatte zur Folge, dass …, ich fordere Sie auf, … bis … zu …, andernfalls sehe ich mich gezwungen …',
    },
    {
      id: 'c1-motivation', level: 'C1', kind: 'formell',
      title: 'Motivationsschreiben fürs Studium',
      prompt: 'Du bewirbst dich um einen Studienplatz / ein Stipendium an einer Universität. Verfasse ein überzeugendes Motivationsschreiben.',
      points: ['Begründe deine Studien- bzw. Fachwahl', 'Lege deine bisherigen Qualifikationen und Erfahrungen dar', 'Erläutere deine Ziele und Erwartungen', 'Formuliere eine höfliche Schlussbitte'],
      anrede: 'Sehr geehrtes Auswahlkomitee,', gruss: 'Mit freundlichen Grüßen, [Vor- und Nachname]', minWords: 300,
      hint: 'mein besonderes Interesse an … begründet sich durch …, im Laufe meiner bisherigen Ausbildung habe ich …, mein langfristiges Ziel ist es, …, ich würde mich sehr freuen, …',
    },
  ];
})();
