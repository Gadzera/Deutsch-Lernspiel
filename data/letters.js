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


/* ── Hilfesprachen-Übersetzungen der Aufgabenstellung + Inhaltspunkte (ru/en/tr/ar/fa) ── */
(function(){ window.LETTER_I18N = {
  "a1-geburtstag": {
    ru: {
      prompt: "Скоро у тебя день рождения, и ты хочешь пригласить свою подругу Anna. Напиши короткое письмо по электронной почте.",
      points: ["Когда и где будет праздник", "Чем вы будете заниматься вместе", "Что Anna должна принести с собой"]
    },
    en: {
      prompt: "Your birthday is coming up and you want to invite your friend Anna. Write a short email.",
      points: ["When and where the party is", "What you will do together", "What Anna should bring"]
    },
    tr: {
      prompt: "Yakında doğum günün var ve arkadaşın Anna'yı davet etmek istiyorsun. Kısa bir e-posta yaz.",
      points: ["Kutlamanın ne zaman ve nerede olduğu", "Birlikte neler yapacağınız", "Anna'nın ne getirmesi gerektiği"]
    },
    ar: {
      prompt: "اقترب عيد ميلادك وتريد دعوة صديقتك Anna. اكتب بريدًا إلكترونيًا قصيرًا.",
      points: ["متى وأين ستُقام الحفلة", "ماذا ستفعلان معًا", "ما الذي يجب أن تحضره Anna"]
    },
    fa: {
      prompt: "به زودی تولدت است و می‌خواهی دوستت Anna را دعوت کنی. یک ایمیل کوتاه بنویس.",
      points: ["مهمانی کِی و کجا برگزار می‌شود", "چه کارهایی با هم انجام می‌دهید", "Anna باید چه چیزی بیاورد"]
    }
  },
  "a1-krank": {
    ru: {
      prompt: "Ты заболел(а) и не можешь прийти на встречу с другом Tom. Напиши ему короткое сообщение.",
      points: ["Что ты не можешь прийти", "Почему (ты болен/больна)", "Предложи новое время встречи"]
    },
    en: {
      prompt: "You are sick and cannot make it to the meeting with your friend Tom. Write him a short message.",
      points: ["That you cannot come", "Why (you are sick)", "Suggest a new time to meet"]
    },
    tr: {
      prompt: "Hasta olduğun için arkadaşın Tom ile olan buluşmana gidemiyorsun. Ona kısa bir mesaj yaz.",
      points: ["Gelemeyeceğini belirt", "Neden gelemediğini açıkla (hasta olduğunu söyle)", "Yeni bir buluşma zamanı öner"]
    },
    ar: {
      prompt: "أنت مريض ولا تستطيع الحضور إلى اللقاء مع صديقك Tom. اكتب له رسالة قصيرة.",
      points: ["أخبره أنك لا تستطيع الحضور", "السبب (أنك مريض)", "اقترح موعدًا جديدًا للقاء"]
    },
    fa: {
      prompt: "مریض هستی و نمی‌توانی به قرار ملاقات با دوستت Tom بروی. برایش یک پیام کوتاه بنویس.",
      points: ["اینکه نمی‌توانی بیایی", "چرا (مریض هستی)", "یک وقت جدید برای دیدار پیشنهاد بده"]
    }
  },
  "a1-urlaub": {
    ru: {
      prompt: "Ты в отпуске и пишешь открытку или короткое письмо другу.",
      points: ["Где ты находишься", "Какая там погода", "Что ты там делаешь"]
    },
    en: {
      prompt: "You are on holiday and writing a postcard or short email to a friend.",
      points: ["Where you are", "What the weather is like", "What you are doing there"]
    },
    tr: {
      prompt: "Tatildesin ve bir arkadaşına kart veya kısa bir e-posta yazıyorsun.",
      points: ["Nerede olduğunu", "Havanın nasıl olduğunu", "Orada ne yaptığını"]
    },
    ar: {
      prompt: "أنت في إجازة وتكتب بطاقة بريدية أو بريدًا إلكترونيًا قصيرًا لصديق.",
      points: ["أين أنت", "كيف حال الطقس", "ماذا تفعل هناك"]
    },
    fa: {
      prompt: "در تعطیلات هستی و برای یک دوست کارت پستال یا ایمیل کوتاهی می‌نویسی.",
      points: ["کجا هستی", "هوا چطور است", "آنجا چه می‌کنی"]
    }
  },
  "a2-besuch": {
    ru: {
      prompt: "Подруга из твоей родной страны хочет навестить тебя. Напиши ей письмо по электронной почте и пригласи её.",
      points: ["Когда ей приехать", "Что вы сможете делать вместе", "Как добраться до тебя (поездом, самолётом ...)"]
    },
    en: {
      prompt: "A friend from your home country wants to visit you. Write her an email and invite her.",
      points: ["When she should come", "What you can do together", "How she can get to you (by train, plane, ...)"]
    },
    tr: {
      prompt: "Memleketin'den bir arkadaşın seni ziyaret etmek istiyor. Ona bir e-posta yaz ve davet et.",
      points: ["Ne zaman gelmesi gerektiğini", "Birlikte neler yapabileceğinizi", "Sana nasıl geleceğini (tren, uçak ...)"]
    },
    ar: {
      prompt: "صديقة من بلدك الأصلي تريد زيارتك. اكتبي لها بريدًا إلكترونيًا وادعيها.",
      points: ["متى يجب أن تأتي", "ما الذي يمكنكما فعله معًا", "كيف تصل إليك (بالقطار، الطائرة ...)"]
    },
    fa: {
      prompt: "یک دوست از کشور زادگاهت می‌خواهد به دیدنت بیاید. برایش ایمیل بنویس و او را دعوت کن.",
      points: ["چه زمانی بیاید", "چه کارهایی می‌توانید با هم انجام دهید", "چطور می‌تواند به پیشت برسد (قطار، هواپیما ...)"]
    }
  },
  "a2-termin": {
    ru: {
      prompt: "Вы договорились встретиться в субботу, но у тебя нет времени. Напиши другу и перенеси встречу.",
      points: ["Что в субботу у тебя нет времени", "Почему (причина)", "Предложи другой день"]
    },
    en: {
      prompt: "You planned to meet on Saturday but you are not available. Write to your friend and reschedule.",
      points: ["That you are not free on Saturday", "Why not (give a reason)", "Suggest a new day"]
    },
    tr: {
      prompt: "Cumartesi günü buluşmayı planlamıştınız ama zamanın yok. Arkadaşına yaz ve randevuyu ertele.",
      points: ["Cumartesi günü zamanın olmadığını", "Neden olmadığını (bir neden belirt)", "Yeni bir gün öner"]
    },
    ar: {
      prompt: "كنتما قد اتفقتما على اللقاء يوم السبت لكنك لست متاحًا. اكتب لصديقك وأجِّل الموعد.",
      points: ["أنك لست متاحًا يوم السبت", "السبب في ذلك", "اقترح يومًا آخر"]
    },
    fa: {
      prompt: "قرار بود شنبه با هم دیدار کنید، اما تو وقت نداری. برای دوستت بنویس و قرار را عقب بینداز.",
      points: ["اینکه شنبه وقت نداری", "چرا (دلیل بیاور)", "یک روز دیگر پیشنهاد بده"]
    }
  },
  "a2-kurs": {
    ru: {
      prompt: "Ты хочешь записаться на курс немецкого языка в языковой школе. Напиши вежливое короткое письмо в школу.",
      points: ["Какой курс тебе нужен (уровень)", "Когда ты хочешь начать", "Один вопрос (например, цена или расписание)"]
    },
    en: {
      prompt: "You want to join a German course at a language school. Write a short, polite email to the school.",
      points: ["Which course you are looking for (level)", "When you want to start", "One question (e.g. price or timetable)"]
    },
    tr: {
      prompt: "Bir dil okulunda Almanca kursu almak istiyorsun. Okula kısa ve kibar bir e-posta yaz.",
      points: ["Hangi kursu aradığını (seviye)", "Ne zaman başlamak istediğini", "Bir soru (ör. fiyat veya ders saatleri)"]
    },
    ar: {
      prompt: "تريد الالتحاق بدورة لغة ألمانية في مدرسة اللغات. اكتب بريدًا إلكترونيًا قصيرًا ومهذبًا للمدرسة.",
      points: ["الدورة التي تبحث عنها (المستوى)", "متى تريد البدء", "سؤال واحد (مثلًا السعر أو المواعيد)"]
    },
    fa: {
      prompt: "می‌خواهی در یک مدرسه زبان، دوره آلمانی بگذرانی. یک ایمیل کوتاه و مودبانه به مدرسه بنویس.",
      points: ["چه دوره‌ای می‌خواهی (سطح)", "از چه زمانی می‌خواهی شروع کنی", "یک سوال (مثلاً قیمت یا ساعات)"]
    }
  },
  "b1-umzug": {
    ru: {
      prompt: "Недавно ты переехал(а) в другой город. Напиши другу или подруге письмо о своей новой жизни.",
      points: ["Почему ты переехал(а)", "Как тебе нравится новый город или квартира", "Пригласи его/её в гости"]
    },
    en: {
      prompt: "You recently moved to a new city. Write an email to a friend about your new life.",
      points: ["Why you moved", "What you think of the new city or apartment", "Invite him/her to visit you"]
    },
    tr: {
      prompt: "Kısa süre önce başka bir şehre taşındın. Bir arkadaşına yeni hayatın hakkında e-posta yaz.",
      points: ["Neden taşındığını", "Yeni şehrin / dairenin nasıl olduğunu", "Onu ziyarete davet et"]
    },
    ar: {
      prompt: "انتقلت مؤخرًا إلى مدينة أخرى. اكتب لصديق أو صديقة بريدًا إلكترونيًا عن حياتك الجديدة.",
      points: ["لماذا انتقلت", "كيف تبدو لك المدينة الجديدة أو الشقة", "ادعُه/ادعُها لزيارتك"]
    },
    fa: {
      prompt: "اخیراً به شهر دیگری نقل مکان کرده‌ای. برای یک دوست درباره زندگی جدیدت ایمیل بنویس.",
      points: ["چرا نقل مکان کردی", "شهر یا آپارتمان جدید چطور است", "او را به دیدن دعوت کن"]
    }
  },
  "b1-reklamation": {
    ru: {
      prompt: "В твоей квартире что-то сломалось (например, отопление). Напиши вежливое, но твёрдое письмо своему домовладельцу.",
      points: ["Что именно сломалось", "С какого времени существует проблема", "Чего ты требуешь (ремонт) и к какому сроку"]
    },
    en: {
      prompt: "Something in your apartment is broken (e.g. the heating). Write a polite but firm email to your landlord.",
      points: ["What is broken", "How long the problem has existed", "What you are asking for (repair) and by when"]
    },
    tr: {
      prompt: "Dairende bir şey bozuk (ör. ısıtma sistemi). Ev sahibine kibar ama kararlı bir e-posta yaz.",
      points: ["Ne olduğunu (neyin bozulduğunu)", "Sorunun ne zamandan beri devam ettiğini", "Ne istediğini (tamir) ve ne zamana kadar"]
    },
    ar: {
      prompt: "هناك شيء معطوب في شقتك (مثلًا نظام التدفئة). اكتب بريدًا إلكترونيًا مهذبًا لكن حازمًا إلى المالك.",
      points: ["ما الذي تعطّل", "منذ متى يوجد هذا المشكل", "ما الذي تطلبه (الإصلاح) وبحلول متى"]
    },
    fa: {
      prompt: "در آپارتمانت چیزی خراب شده (مثلاً گرمایش). یک ایمیل مودبانه اما قاطعانه به صاحب‌خانه بنویس.",
      points: ["چه چیزی خراب است", "مشکل از چه زمانی وجود دارد", "چه می‌خواهی (تعمیر) و تا چه زمانی"]
    }
  },
  "b1-kursleitung": {
    ru: {
      prompt: "Ты хочешь записаться на курс в народной школе (Volkshochschule) и у тебя есть вопросы. Напиши официальное письмо руководству курса.",
      points: ["Причина твоего обращения (о каком курсе идёт речь)", "Два конкретных вопроса (например, расписание, материалы, стоимость)", "Просьба ответить как можно скорее"]
    },
    en: {
      prompt: "You want to take a course at a community education centre and have some questions. Write a formal email to the course management.",
      points: ["The reason you are writing (which course)", "Two specific questions (e.g. dates, materials, costs)", "A request for a prompt reply"]
    },
    tr: {
      prompt: "Bir halk eğitim merkezinde kursa katılmak istiyorsun ve sorularını var. Kurs yönetimine resmi bir e-posta yaz.",
      points: ["Yazma nedenin (hangi kurs hakkında)", "İki somut soru (ör. tarihler, materyaller, ücret)", "Hızlı yanıt talebinde bulun"]
    },
    ar: {
      prompt: "تريد المشاركة في دورة بمركز تعليم الكبار ولديك أسئلة. اكتب بريدًا إلكترونيًا رسميًا إلى إدارة الدورة.",
      points: ["سبب كتابتك (أي دورة تعني)", "سؤالان محددان (مثلًا المواعيد، المواد، التكاليف)", "اطلب ردًا سريعًا"]
    },
    fa: {
      prompt: "می‌خواهی در یک دوره آموزشی شرکت کنی و سوال داری. یک ایمیل رسمی به مدیریت دوره بنویس.",
      points: ["دلیل نوشتنت (درباره کدام دوره)", "دو سوال مشخص (مثلاً زمان‌بندی، مواد آموزشی، هزینه)", "درخواست پاسخ هرچه سریع‌تر"]
    }
  },
  "b2-beschwerde": {
    ru: {
      prompt: "Ты заказал(а) товар в интернете, но он пришёл повреждённым или не тем. Напиши официальную жалобу в интернет-магазин.",
      points: ["Детали заказа (что и когда заказал(а))", "Подробно опиши проблему", "Твоё требование (замена или возврат денег)", "Укажи срок и ожидание ответа"]
    },
    en: {
      prompt: "You ordered a product online but it arrived damaged or wrong. Write a formal complaint to the online shop.",
      points: ["Order details (what you ordered and when)", "Describe the problem precisely", "Your demand (replacement or refund)", "A deadline and expectation of a response"]
    },
    tr: {
      prompt: "İnternetten bir ürün sipariş ettin ama hasarlı ya da yanlış geldi. Online mağazaya resmi bir şikâyet yaz.",
      points: ["Sipariş detayları (ne sipariş ettiğin ve ne zaman)", "Sorunu ayrıntılı olarak açıkla", "Talebini belirt (değişim ya da para iadesi)", "Bir son tarih belirle ve yanıt beklediğini ifade et"]
    },
    ar: {
      prompt: "طلبت منتجًا عبر الإنترنت لكنه وصل تالفًا أو مخالفًا للطلب. اكتب شكوى رسمية إلى المتجر الإلكتروني.",
      points: ["تفاصيل الطلب (ماذا طلبت ومتى)", "اشرح المشكلة بدقة", "مطلبك (استبدال أو استرداد المبلغ)", "حدّد موعدًا نهائيًا وتوقع الرد"]
    },
    fa: {
      prompt: "یک محصول را آنلاین سفارش دادی، اما آسیب‌دیده یا اشتباه رسید. یک شکایت رسمی به فروشگاه اینترنتی بنویس.",
      points: ["جزئیات سفارش (چه چیزی و چه زمانی سفارش دادی)", "مشکل را دقیقاً توضیح بده", "خواسته‌ات (تعویض یا بازپرداخت)", "یک مهلت تعیین کن و انتظار پاسخ داشته باش"]
    }
  },
  "b2-praktikum": {
    ru: {
      prompt: "Ты хочешь подать заявку на стажировку в компанию. Напиши официальное сопроводительное письмо.",
      points: ["Ссылка: на какую вакансию и откуда ты о ней узнал(а)", "Твоя квалификация и опыт", "Твоя мотивация для этой должности", "Доступность и просьба о собеседовании"]
    },
    en: {
      prompt: "You want to apply for an internship at a company. Write a formal cover letter.",
      points: ["Reference: which position and how you found it", "Your qualifications and experience", "Your motivation for this role", "Your availability and a request for an interview"]
    },
    tr: {
      prompt: "Bir şirkette staj başvurusunda bulunmak istiyorsun. Resmi bir başvuru mektubu yaz.",
      points: ["Hangi pozisyona ve nasıl öğrendiğine dair bilgi", "Niteliklerin ve deneyimin", "Bu pozisyona ilgin ve motivasyonun", "Müsaitliğin ve bir görüşme talebi"]
    },
    ar: {
      prompt: "تريد التقديم على تدريب في شركة. اكتب خطاب تقديم رسميًا.",
      points: ["المرجع: أي وظيفة وكيف عثرت عليها", "مؤهلاتك وخبرتك", "دوافعك للحصول على هذا المنصب", "توافرك وطلب إجراء مقابلة"]
    },
    fa: {
      prompt: "می‌خواهی برای یک کارآموزی در شرکتی درخواست بدهی. یک نامه معرفی رسمی بنویس.",
      points: ["اشاره: برای کدام موقعیت و چطور آن را پیدا کردی", "مدارک و تجربیاتت", "انگیزه‌ات برای این موقعیت", "در دسترس بودنت و درخواست مصاحبه"]
    }
  },
  "b2-leserbrief": {
    ru: {
      prompt: "В газете ты прочитал(а) статью о введении платы за обучение. Напиши письмо в редакцию и выскажи своё мнение.",
      points: ["Ссылка на статью", "Твоё собственное мнение с обоснованием", "Назови один контраргумент и опровергни его", "Заключительный вывод"]
    },
    en: {
      prompt: "You read a newspaper article about the introduction of tuition fees. Write a letter to the editor and give your opinion.",
      points: ["Reference to the article", "Your own opinion with reasoning", "Name a counterargument and refute it", "A concluding summary"]
    },
    tr: {
      prompt: "Bir gazetede öğrenim ücretlerinin getirilmesi hakkında bir makale okudun. Editöre bir mektup yaz ve görüşünü belirt.",
      points: ["Makaleye atıfta bulun", "Kendi görüşünü gerekçesiyle açıkla", "Bir karşı argüman belirt ve çürüt", "Sonuç cümlesiyle bitir"]
    },
    ar: {
      prompt: "قرأت في صحيفة مقالًا حول فرض رسوم دراسية. اكتب خطابًا إلى المحرر وأبدِ رأيك.",
      points: ["الإشارة إلى المقال", "رأيك الخاص مع التبرير", "اذكر حجة مضادة ودحضها", "خلاصة ختامية"]
    },
    fa: {
      prompt: "در یک روزنامه مقاله‌ای درباره معرفی شهریه دانشگاه خواندی. نامه‌ای به سردبیر بنویس و نظرت را بیان کن.",
      points: ["اشاره به مقاله", "نظر خودت با دلیل", "یک استدلال مخالف را ذکر کن و رد کن", "نتیجه‌گیری پایانی"]
    }
  },
  "c1-leserbrief": {
    ru: {
      prompt: "Ты прочитал(а) статью о растущем использовании мобильных телефонов в повседневной жизни. Напиши взвешенное письмо в редакцию.",
      points: ["Точная ссылка на статью и её тезис", "Твоя позиция с двумя обоснованными аргументами", "Подними противоположную точку зрения и опровергни её", "Чёткий заключительный призыв"]
    },
    en: {
      prompt: "You read an article about the growing use of mobile phones in everyday life. Write a nuanced letter to the editor.",
      points: ["Precise reference to the article and its thesis", "Your position supported by two well-founded arguments", "Address and refute a counterpoint", "A pointed closing appeal"]
    },
    tr: {
      prompt: "Günlük hayatta cep telefonlarının artan kullanımı hakkında bir makale okudun. Dengeli bir okuyucu mektubu yaz.",
      points: ["Makaleye ve tezine kesin atıfta bulun", "İki sağlam argümanla desteklenen kendi tutumun", "Karşı bir görüşe değin ve çürüt", "Çarpıcı bir kapanış çağrısıyla bitir"]
    },
    ar: {
      prompt: "قرأت مقالًا حول الاستخدام المتزايد للهواتف المحمولة في الحياة اليومية. اكتب خطابًا متوازنًا إلى المحرر.",
      points: ["إشارة دقيقة إلى المقال وأطروحته", "موقفك مع حجتين موثقتين", "تناول وجهة نظر مقابلة ودحضها", "نداء ختامي حاد ومؤثر"]
    },
    fa: {
      prompt: "مقاله‌ای درباره استفاده روزافزون از تلفن همراه در زندگی روزمره خواندی. یک نامه سنجیده به سردبیر بنویس.",
      points: ["اشاره دقیق به مقاله و مطلب اصلی آن", "موضع تو با دو استدلال محکم", "به دیدگاه مخالف بپرداز و آن را رد کن", "یک فراخوان پایانی قاطع"]
    }
  },
  "c1-beschwerde": {
    ru: {
      prompt: "Ты очень недоволен(а) работой какого-либо учреждения (ведомства, университета, поставщика услуг). Напиши сдержанную, но настойчивую жалобу.",
      points: ["Точно и объективно опиши ситуацию", "Изложи последствия и их влияние на тебя", "Сформулируй чёткое требование со сроком", "Вежливо намекни на возможные дальнейшие шаги"]
    },
    en: {
      prompt: "You are very unhappy with the service of an institution (office, university, provider). Write a factual, firm complaint.",
      points: ["Describe the situation precisely and objectively", "Explain the consequences and impact on you", "State a clear demand with a deadline", "Politely hint at possible further steps"]
    },
    tr: {
      prompt: "Bir kurumun (daire, üniversite, sağlayıcı) hizmetinden çok memnun değilsin. Nesnel ama kararlı bir şikâyet yaz.",
      points: ["Durumu kesin ve nesnel biçimde açıkla", "Sonuçlarını ve seni nasıl etkilediğini anlat", "Son tarihli net bir talep belirt", "Olası sonraki adımlara kibar bir şekilde değin"]
    },
    ar: {
      prompt: "أنت غير راضٍ تمامًا عن أداء مؤسسة ما (دائرة حكومية، جامعة، مزود خدمة). اكتب شكوى موضوعية وحازمة.",
      points: ["اشرح الوضع بدقة وموضوعية", "بيّن العواقب وتأثيرها عليك", "صُغ مطلبًا واضحًا مع تحديد موعد نهائي", "أشِر بلطف إلى الخطوات المحتملة التالية"]
    },
    fa: {
      prompt: "از عملکرد یک نهاد (اداره، دانشگاه، ارائه‌دهنده خدمات) بسیار ناراضی هستی. یک شکایت منطقی و قاطعانه بنویس.",
      points: ["وضعیت را دقیق و بی‌طرفانه شرح بده", "پیامدها و تأثیر آن‌ها بر خودت را توضیح بده", "یک خواسته روشن با مهلت مشخص بیان کن", "به آرامی به مراحل بعدی احتمالی اشاره کن"]
    }
  },
  "c1-motivation": {
    ru: {
      prompt: "Ты подаёшь заявку на место в университете или на стипендию. Напиши убедительное мотивационное письмо.",
      points: ["Обоснуй выбор специальности или области знаний", "Расскажи о своей квалификации и опыте", "Поясни свои цели и ожидания", "Вежливо попроси рассмотреть твою кандидатуру"]
    },
    en: {
      prompt: "You are applying for a university place or a scholarship. Write a compelling motivation letter.",
      points: ["Explain your choice of subject or field", "Present your qualifications and experience so far", "Describe your goals and expectations", "Formulate a polite closing request"]
    },
    tr: {
      prompt: "Bir üniversiteye veya bursa başvuruyorsun. İkna edici bir motivasyon mektubu yaz.",
      points: ["Bölüm veya alan seçimini gerekçelendir", "Şimdiye kadarki niteliklerini ve deneyimlerini sun", "Hedeflerini ve beklentilerini açıkla", "Kibar bir kapanış isteğiyle bitir"]
    },
    ar: {
      prompt: "تتقدم لشغل مقعد دراسي في جامعة أو الحصول على منحة. اكتب خطاب دوافع مقنعًا.",
      points: ["علّل اختيارك للتخصص أو المجال", "اعرض مؤهلاتك وخبراتك حتى الآن", "أوضح أهدافك وتوقعاتك", "اختم بطلب مهذب"]
    },
    fa: {
      prompt: "برای یک جای دانشگاهی یا بورسیه درخواست می‌دهی. یک نامه انگیزشی متقاعدکننده بنویس.",
      points: ["انتخاب رشته یا حوزه مطالعاتی‌ات را توضیح بده", "مدارک و تجربیات تاکنون خود را ارائه بده", "اهداف و انتظاراتت را شرح بده", "با یک درخواست مودبانه پایانی نامه را ببند"]
    }
  }
}; })();
