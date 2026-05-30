/* Deutsch-Lernspiel — Textproduktion: Themen zum freien Schreiben (A1–C2).
 * window.TEXT_THEMES = [{ id, level, kind, title, prompt(DE), minWords, tip?, tr:{ru,en,tr,ar,fa} }]
 * Built up in several push() blocks so the list can grow file-by-file. */
(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── A1 · ~60 Wörter ───── */
    { id: 'a1-tag', level: 'A1', kind: 'Beschreibung', title: 'Mein Tagesablauf', minWords: 60, tip: 'am Morgen, dann, danach, am Abend',
      prompt: 'Beschreibe einen normalen Tag: Was machst du morgens, mittags und abends?',
      tr: { ru: 'Опиши обычный день: что ты делаешь утром, днём и вечером?', en: 'Describe a normal day: what do you do in the morning, at noon and in the evening?', tr: 'Normal bir gününü anlat: sabah, öğle ve akşam ne yaparsın?', ar: 'صِف يومًا عاديًا: ماذا تفعل صباحًا وظهرًا ومساءً؟', fa: 'یک روز عادی را توصیف کن: صبح، ظهر و شب چه می‌کنی؟' } },
    { id: 'a1-familie', level: 'A1', kind: 'Beschreibung', title: 'Meine Familie', minWords: 60, tip: 'Ich habe …, Mein Vater heißt …, Sie ist … Jahre alt',
      prompt: 'Stell deine Familie vor: Wer gehört dazu und was machen sie?',
      tr: { ru: 'Представь свою семью: кто в неё входит и чем они занимаются?', en: 'Introduce your family: who is in it and what do they do?', tr: 'Aileni tanıt: kimler var ve ne yapıyorlar?', ar: 'قدِّم عائلتك: من فيها وماذا يعملون؟', fa: 'خانواده‌ات را معرفی کن: چه کسانی هستند و چه کار می‌کنند؟' } },
    { id: 'a1-zimmer', level: 'A1', kind: 'Beschreibung', title: 'Mein Zimmer', minWords: 60, tip: 'Es gibt …, links/rechts, an der Wand',
      prompt: 'Beschreibe dein Zimmer: Welche Möbel gibt es und wo stehen sie?',
      tr: { ru: 'Опиши свою комнату: какая мебель есть и где она стоит?', en: 'Describe your room: what furniture is there and where is it?', tr: 'Odanı anlat: hangi eşyalar var ve nerede duruyorlar?', ar: 'صِف غرفتك: ما الأثاث الموجود وأين يقع؟', fa: 'اتاقت را توصیف کن: چه وسایلی هست و کجا قرار دارند؟' } },
    { id: 'a1-wochenende', level: 'A1', kind: 'Bericht', title: 'Mein Wochenende', minWords: 60, tip: 'am Samstag, zuerst, später, es war schön',
      prompt: 'Erzähle, was du am Wochenende gemacht hast.',
      tr: { ru: 'Расскажи, что ты делал(а) на выходных.', en: 'Tell what you did at the weekend.', tr: 'Hafta sonu ne yaptığını anlat.', ar: 'احكِ ماذا فعلت في عطلة نهاية الأسبوع.', fa: 'بگو آخر هفته چه کار کردی.' } },
    { id: 'a1-essen', level: 'A1', kind: 'Beschreibung', title: 'Mein Lieblingsessen', minWords: 60, tip: 'Ich esse gern …, weil …, zum Frühstück',
      prompt: 'Was isst du gern? Beschreibe dein Lieblingsessen.',
      tr: { ru: 'Что ты любишь есть? Опиши свою любимую еду.', en: 'What do you like to eat? Describe your favourite food.', tr: 'Ne yemeyi seversin? En sevdiğin yemeği anlat.', ar: 'ماذا تحب أن تأكل؟ صِف طعامك المفضل.', fa: 'دوست داری چه بخوری؟ غذای موردعلاقه‌ات را توصیف کن.' } },
    { id: 'a1-stadt', level: 'A1', kind: 'Beschreibung', title: 'Meine Stadt', minWords: 60, tip: 'In meiner Stadt gibt es …, man kann … ',
      prompt: 'Beschreibe deine Stadt oder dein Dorf: Was gibt es dort?',
      tr: { ru: 'Опиши свой город или село: что там есть?', en: 'Describe your town or village: what is there?', tr: 'Şehrini veya köyünü anlat: orada ne var?', ar: 'صِف مدينتك أو قريتك: ماذا يوجد هناك؟', fa: 'شهر یا روستایت را توصیف کن: آنجا چه چیزهایی هست؟' } },
    { id: 'a1-hobby', level: 'A1', kind: 'Beschreibung', title: 'Mein Hobby', minWords: 60, tip: 'In meiner Freizeit …, ich mag …, einmal pro Woche',
      prompt: 'Was machst du in deiner Freizeit? Beschreibe dein Hobby.',
      tr: { ru: 'Чем ты занимаешься в свободное время? Опиши своё хобби.', en: 'What do you do in your free time? Describe your hobby.', tr: 'Boş zamanında ne yaparsın? Hobini anlat.', ar: 'ماذا تفعل في وقت فراغك؟ صِف هوايتك.', fa: 'در اوقات فراغت چه می‌کنی؟ سرگرمی‌ات را توصیف کن.' } },
    { id: 'a1-freund', level: 'A1', kind: 'Beschreibung', title: 'Mein bester Freund', minWords: 60, tip: 'Er/Sie heißt …, ist … Jahre alt, wir … zusammen',
      prompt: 'Beschreibe deinen besten Freund oder deine beste Freundin.',
      tr: { ru: 'Опиши своего лучшего друга или подругу.', en: 'Describe your best friend.', tr: 'En iyi arkadaşını anlat.', ar: 'صِف أفضل صديق لك.', fa: 'بهترین دوستت را توصیف کن.' } },

    /* ───── A2 · ~120 Wörter ───── */
    { id: 'a2-urlaub', level: 'A2', kind: 'Bericht', title: 'Mein letzter Urlaub', minWords: 120, tip: 'Ich war in …, zuerst, dann, am besten war …',
      prompt: 'Erzähle von deinem letzten Urlaub: Wohin bist du gefahren und was hast du gemacht?',
      tr: { ru: 'Расскажи о своём последнем отпуске: куда ты ездил(а) и что делал(а)?', en: 'Tell about your last holiday: where did you go and what did you do?', tr: 'Son tatilini anlat: nereye gittin ve ne yaptın?', ar: 'احكِ عن إجازتك الأخيرة: إلى أين ذهبت وماذا فعلت؟', fa: 'درباره‌ی آخرین تعطیلاتت بگو: کجا رفتی و چه کردی؟' } },
    { id: 'a2-beruf', level: 'A2', kind: 'Beschreibung', title: 'Mein Traumberuf', minWords: 120, tip: 'Ich möchte … werden, weil …, dafür muss man …',
      prompt: 'Welchen Beruf möchtest du haben und warum?',
      tr: { ru: 'Какую профессию ты хочешь и почему?', en: 'What job would you like to have and why?', tr: 'Hangi mesleği istiyorsun ve neden?', ar: 'ما المهنة التي تريدها ولماذا؟', fa: 'چه شغلی می‌خواهی و چرا؟' } },
    { id: 'a2-fest', level: 'A2', kind: 'Beschreibung', title: 'Ein Fest in meinem Land', minWords: 120, tip: 'Man feiert …, es gibt …, die Leute …',
      prompt: 'Beschreibe ein wichtiges Fest in deinem Land: Wie feiert man es?',
      tr: { ru: 'Опиши важный праздник в твоей стране: как его отмечают?', en: 'Describe an important festival in your country: how is it celebrated?', tr: 'Ülkendeki önemli bir bayramı anlat: nasıl kutlanır?', ar: 'صِف عيدًا مهمًا في بلدك: كيف يُحتفل به؟', fa: 'یک جشن مهم در کشورت را توصیف کن: چگونه برگزار می‌شود؟' } },
    { id: 'a2-gesund', level: 'A2', kind: 'Meinung', title: 'Gesund leben', minWords: 120, tip: 'Man sollte …, es ist wichtig, dass …, ich finde …',
      prompt: 'Was kann man tun, um gesund zu leben? Schreibe deine Tipps.',
      tr: { ru: 'Что можно делать, чтобы жить здорово? Напиши свои советы.', en: 'What can you do to live healthily? Write your tips.', tr: 'Sağlıklı yaşamak için ne yapılabilir? Önerilerini yaz.', ar: 'ماذا يمكن فعله للعيش بصحة جيدة؟ اكتب نصائحك.', fa: 'برای سالم زندگی کردن چه می‌توان کرد؟ توصیه‌هایت را بنویس.' } },
    { id: 'a2-wohnung', level: 'A2', kind: 'Beschreibung', title: 'Meine Wohnung', minWords: 120, tip: 'Die Wohnung hat … Zimmer, im … gibt es …',
      prompt: 'Beschreibe deine Wohnung oder dein Haus genau.',
      tr: { ru: 'Подробно опиши свою квартиру или дом.', en: 'Describe your flat or house in detail.', tr: 'Evini veya daireni ayrıntılı anlat.', ar: 'صِف شقتك أو منزلك بالتفصيل.', fa: 'آپارتمان یا خانه‌ات را با جزئیات توصیف کن.' } },
    { id: 'a2-reise', level: 'A2', kind: 'Bericht', title: 'Eine Reise planen', minWords: 120, tip: 'Ich möchte …, zuerst, mit dem Zug/Flugzeug',
      prompt: 'Du planst eine Reise. Schreibe, wohin du fährst und was du dort machen willst.',
      tr: { ru: 'Ты планируешь поездку. Напиши, куда едешь и что хочешь там делать.', en: 'You are planning a trip. Write where you are going and what you want to do there.', tr: 'Bir gezi planlıyorsun. Nereye gittiğini ve orada ne yapmak istediğini yaz.', ar: 'تخطط لرحلة. اكتب إلى أين تذهب وماذا تريد أن تفعل هناك.', fa: 'سفری برنامه‌ریزی می‌کنی. بنویس کجا می‌روی و آنجا چه می‌خواهی بکنی.' } },
    { id: 'a2-sport', level: 'A2', kind: 'Meinung', title: 'Sport in meinem Leben', minWords: 120, tip: 'Ich treibe … gern, weil …, … mal pro Woche',
      prompt: 'Welche Rolle spielt Sport in deinem Leben? Schreibe darüber.',
      tr: { ru: 'Какую роль играет спорт в твоей жизни? Напиши об этом.', en: 'What role does sport play in your life? Write about it.', tr: 'Sporun hayatında ne rolü var? Bunun hakkında yaz.', ar: 'ما دور الرياضة في حياتك؟ اكتب عن ذلك.', fa: 'ورزش چه نقشی در زندگی‌ات دارد؟ درباره‌اش بنویس.' } },
    { id: 'a2-film', level: 'A2', kind: 'Beschreibung', title: 'Mein Lieblingsfilm', minWords: 120, tip: 'Der Film heißt …, es geht um …, mir gefällt …',
      prompt: 'Stelle deinen Lieblingsfilm vor: Worum geht es und warum magst du ihn?',
      tr: { ru: 'Представь свой любимый фильм: о чём он и почему он тебе нравится?', en: 'Introduce your favourite film: what is it about and why do you like it?', tr: 'En sevdiğin filmi tanıt: konusu ne ve neden seviyorsun?', ar: 'قدِّم فيلمك المفضل: عمَّ يدور ولماذا يعجبك؟', fa: 'فیلم موردعلاقه‌ات را معرفی کن: درباره‌ی چیست و چرا دوستش داری؟' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── B1 · ~180 Wörter ───── */
    { id: 'b1-stadt-land', level: 'B1', kind: 'Erörterung', title: 'Stadt oder Land?', minWords: 180, tip: 'einerseits … andererseits, meiner Meinung nach',
      prompt: 'Wo lebt man besser – in der Stadt oder auf dem Land? Nenne Vor- und Nachteile und deine Meinung.',
      tr: { ru: 'Где лучше жить — в городе или в деревне? Назови плюсы и минусы и своё мнение.', en: 'Where is it better to live – in the city or the countryside? Give pros and cons and your opinion.', tr: 'Nerede yaşamak daha iyi – şehirde mi kırsalda mı? Artı ve eksileri ile görüşünü yaz.', ar: 'أين الأفضل أن تعيش – في المدينة أم الريف؟ اذكر الإيجابيات والسلبيات ورأيك.', fa: 'کجا بهتر است زندگی کرد — شهر یا روستا؟ مزایا و معایب و نظرت را بنویس.' } },
    { id: 'b1-handy', level: 'B1', kind: 'Meinung', title: 'Das Smartphone im Alltag', minWords: 180, tip: 'zum einen, zum anderen, dadurch, trotzdem',
      prompt: 'Wie verändert das Smartphone unseren Alltag? Schreibe über Vorteile und Gefahren.',
      tr: { ru: 'Как смартфон меняет нашу повседневную жизнь? Напиши о преимуществах и опасностях.', en: 'How does the smartphone change our daily life? Write about advantages and dangers.', tr: 'Akıllı telefon günlük hayatımızı nasıl değiştiriyor? Avantaj ve tehlikeleri yaz.', ar: 'كيف يغيّر الهاتف الذكي حياتنا اليومية؟ اكتب عن المزايا والمخاطر.', fa: 'گوشی هوشمند چگونه زندگی روزمره‌ی ما را تغییر می‌دهد؟ درباره‌ی مزایا و خطرها بنویس.' } },
    { id: 'b1-umwelt', level: 'B1', kind: 'Meinung', title: 'Umweltschutz im Alltag', minWords: 180, tip: 'man sollte, es ist wichtig, dass, außerdem',
      prompt: 'Was kann jeder Einzelne für die Umwelt tun? Beschreibe konkrete Möglichkeiten.',
      tr: { ru: 'Что может сделать каждый для окружающей среды? Опиши конкретные возможности.', en: 'What can each individual do for the environment? Describe concrete options.', tr: 'Her birey çevre için ne yapabilir? Somut olanakları anlat.', ar: 'ماذا يمكن لكل فرد أن يفعل من أجل البيئة؟ صِف إمكانيات ملموسة.', fa: 'هر فرد برای محیط‌زیست چه می‌تواند بکند؟ امکانات مشخص را توصیف کن.' } },
    { id: 'b1-online-lernen', level: 'B1', kind: 'Erörterung', title: 'Online lernen', minWords: 180, tip: 'im Vergleich zu, ein Vorteil ist, dagegen',
      prompt: 'Online lernen oder im Klassenzimmer? Vergleiche beide Formen und nimm Stellung.',
      tr: { ru: 'Учиться онлайн или в классе? Сравни обе формы и выскажи позицию.', en: 'Learning online or in the classroom? Compare both forms and take a position.', tr: 'Çevrimiçi mi yoksa sınıfta mı öğrenmek? İkisini karşılaştır ve görüş belirt.', ar: 'التعلّم عبر الإنترنت أم في الصف؟ قارن بين الشكلين وحدّد موقفك.', fa: 'یادگیری آنلاین یا در کلاس؟ هر دو شکل را مقایسه کن و موضع بگیر.' } },
    { id: 'b1-ernaehrung', level: 'B1', kind: 'Meinung', title: 'Gesunde Ernährung', minWords: 180, tip: 'ich achte auf, weil, deshalb',
      prompt: 'Wie wichtig ist gesunde Ernährung? Schreibe, worauf du achtest und warum.',
      tr: { ru: 'Насколько важно здоровое питание? Напиши, на что ты обращаешь внимание и почему.', en: 'How important is healthy eating? Write what you pay attention to and why.', tr: 'Sağlıklı beslenme ne kadar önemli? Neye dikkat ettiğini ve nedenini yaz.', ar: 'ما أهمية التغذية الصحية؟ اكتب بماذا تهتم ولماذا.', fa: 'تغذیه‌ی سالم چقدر مهم است؟ بنویس به چه چیزی توجه می‌کنی و چرا.' } },
    { id: 'b1-medien', level: 'B1', kind: 'Erörterung', title: 'Soziale Medien', minWords: 180, tip: 'einerseits, andererseits, ein Risiko ist',
      prompt: 'Welche Rolle spielen soziale Medien in deinem Leben? Diskutiere Chancen und Risiken.',
      tr: { ru: 'Какую роль играют соцсети в твоей жизни? Обсуди возможности и риски.', en: 'What role do social media play in your life? Discuss opportunities and risks.', tr: 'Sosyal medya hayatında ne rol oynuyor? Fırsat ve riskleri tartış.', ar: 'ما دور وسائل التواصل الاجتماعي في حياتك؟ ناقش الفرص والمخاطر.', fa: 'شبکه‌های اجتماعی چه نقشی در زندگی‌ات دارند؟ فرصت‌ها و خطرها را بحث کن.' } },
    { id: 'b1-reisen', level: 'B1', kind: 'Meinung', title: 'Reisen bildet', minWords: 180, tip: 'beim Reisen, dadurch, zum Beispiel',
      prompt: 'Warum reisen Menschen? Schreibe, was man auf Reisen lernen kann.',
      tr: { ru: 'Почему люди путешествуют? Напиши, чему можно научиться в поездках.', en: 'Why do people travel? Write what one can learn while travelling.', tr: 'İnsanlar neden seyahat eder? Seyahatte neler öğrenilebileceğini yaz.', ar: 'لماذا يسافر الناس؟ اكتب ماذا يمكن أن يتعلّم المرء أثناء السفر.', fa: 'چرا مردم سفر می‌کنند؟ بنویس در سفر چه می‌توان آموخت.' } },
    { id: 'b1-freundschaft', level: 'B1', kind: 'Beschreibung', title: 'Freundschaft heute', minWords: 180, tip: 'für mich bedeutet, ein Beispiel dafür ist',
      prompt: 'Was bedeutet wahre Freundschaft für dich? Beschreibe mit Beispielen.',
      tr: { ru: 'Что для тебя значит настоящая дружба? Опиши с примерами.', en: 'What does true friendship mean to you? Describe with examples.', tr: 'Gerçek dostluk senin için ne ifade ediyor? Örneklerle anlat.', ar: 'ماذا تعني لك الصداقة الحقيقية؟ صِف بأمثلة.', fa: 'دوستی واقعی برای تو چه معنایی دارد؟ با مثال توصیف کن.' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── B2 · ~220 Wörter · Erörterung ───── */
    { id: 'b2-studiengebuehren', level: 'B2', kind: 'Erörterung', title: 'Kostenloses Studium?', minWords: 220, tip: 'Befürworter argumentieren, Kritiker hingegen, abschließend',
      prompt: 'Sollte das Studium kostenlos sein? Erörtere Argumente dafür und dagegen.',
      tr: { ru: 'Должно ли высшее образование быть бесплатным? Рассмотри аргументы за и против.', en: 'Should university study be free? Discuss arguments for and against.', tr: 'Üniversite eğitimi ücretsiz mi olmalı? Lehte ve aleyhte argümanları tartış.', ar: 'هل يجب أن تكون الدراسة الجامعية مجانية؟ ناقش الحجج المؤيدة والمعارضة.', fa: 'آیا تحصیل دانشگاهی باید رایگان باشد؟ دلایل موافق و مخالف را بررسی کن.' } },
    { id: 'b2-auto-stadt', level: 'B2', kind: 'Erörterung', title: 'Autofreie Innenstädte', minWords: 220, tip: 'ein gewichtiges Argument, dem steht gegenüber',
      prompt: 'Sollte man Autos aus den Innenstädten verbannen? Erörtere das Pro und Contra.',
      tr: { ru: 'Стоит ли запретить автомобили в центрах городов? Рассмотри за и против.', en: 'Should cars be banned from city centres? Discuss the pros and cons.', tr: 'Arabalar şehir merkezlerinden yasaklanmalı mı? Lehte ve aleyhte tartış.', ar: 'هل ينبغي منع السيارات من مراكز المدن؟ ناقش المؤيد والمعارض.', fa: 'آیا باید خودروها را از مراکز شهر ممنوع کرد؟ موافق و مخالف را بررسی کن.' } },
    { id: 'b2-homeoffice', level: 'B2', kind: 'Erörterung', title: 'Homeoffice statt Büro?', minWords: 220, tip: 'für das Homeoffice spricht, dagegen lässt sich einwenden',
      prompt: 'Homeoffice oder Arbeit im Büro – was ist besser? Wäge die Argumente ab.',
      tr: { ru: 'Удалёнка или работа в офисе — что лучше? Взвесь аргументы.', en: 'Home office or working in the office – which is better? Weigh the arguments.', tr: 'Evden çalışma mı ofiste çalışma mı daha iyi? Argümanları tart.', ar: 'العمل من المنزل أم في المكتب – أيهما أفضل؟ وازن الحجج.', fa: 'دورکاری یا کار در دفتر – کدام بهتر است؟ دلایل را بسنج.' } },
    { id: 'b2-plastik', level: 'B2', kind: 'Erörterung', title: 'Einwegplastik verbieten?', minWords: 220, tip: 'einerseits, andererseits, letztlich',
      prompt: 'Sollte Einwegplastik komplett verboten werden? Diskutiere Vor- und Nachteile.',
      tr: { ru: 'Стоит ли полностью запретить одноразовый пластик? Обсуди плюсы и минусы.', en: 'Should single-use plastic be banned completely? Discuss pros and cons.', tr: 'Tek kullanımlık plastik tamamen yasaklanmalı mı? Artı ve eksileri tartış.', ar: 'هل ينبغي حظر البلاستيك أحادي الاستخدام تمامًا؟ ناقش الإيجابيات والسلبيات.', fa: 'آیا باید پلاستیک یک‌بارمصرف کاملاً ممنوع شود؟ مزایا و معایب را بحث کن.' } },
    { id: 'b2-socialmedia-jugend', level: 'B2', kind: 'Erörterung', title: 'Social Media und Jugend', minWords: 220, tip: 'Studien zeigen, kritisch zu sehen ist, dennoch',
      prompt: 'Schaden soziale Medien Jugendlichen? Nimm begründet Stellung.',
      tr: { ru: 'Вредят ли соцсети молодёжи? Выскажи обоснованную позицию.', en: 'Do social media harm young people? Take a reasoned position.', tr: 'Sosyal medya gençlere zarar veriyor mu? Gerekçeli görüş belirt.', ar: 'هل تضرّ وسائل التواصل بالشباب؟ اتخذ موقفًا مبرَّرًا.', fa: 'آیا شبکه‌های اجتماعی به جوانان آسیب می‌زنند؟ موضعی مستدل بگیر.' } },
    { id: 'b2-tourismus', level: 'B2', kind: 'Erörterung', title: 'Massentourismus', minWords: 220, tip: 'positiv ist, problematisch erscheint, insgesamt',
      prompt: 'Massentourismus – Segen oder Fluch? Erörtere die Folgen für Städte und Natur.',
      tr: { ru: 'Массовый туризм — благо или проклятие? Рассмотри последствия для городов и природы.', en: 'Mass tourism – blessing or curse? Discuss the consequences for cities and nature.', tr: 'Kitle turizmi – nimet mi yoksa bela mı? Şehirler ve doğa için sonuçları tartış.', ar: 'السياحة الجماعية – نعمة أم نقمة؟ ناقش العواقب على المدن والطبيعة.', fa: 'گردشگری انبوه — نعمت یا نقمت؟ پیامدها برای شهرها و طبیعت را بررسی کن.' } },
    { id: 'b2-fleisch', level: 'B2', kind: 'Erörterung', title: 'Weniger Fleisch essen?', minWords: 220, tip: 'aus gesundheitlicher Sicht, ökologisch betrachtet',
      prompt: 'Sollten wir weniger Fleisch essen? Erörtere gesundheitliche und ökologische Aspekte.',
      tr: { ru: 'Должны ли мы есть меньше мяса? Рассмотри аспекты здоровья и экологии.', en: 'Should we eat less meat? Discuss health and ecological aspects.', tr: 'Daha az et mi yemeliyiz? Sağlık ve çevresel yönleri tartış.', ar: 'هل ينبغي أن نأكل لحمًا أقل؟ ناقش الجوانب الصحية والبيئية.', fa: 'آیا باید گوشت کمتری بخوریم؟ جنبه‌های سلامتی و زیست‌محیطی را بررسی کن.' } },
    { id: 'b2-digital-schule', level: 'B2', kind: 'Erörterung', title: 'Digitalisierung der Schule', minWords: 220, tip: 'Chancen bietet, ein Nachteil besteht darin, zusammenfassend',
      prompt: 'Sollte die Schule stärker digitalisiert werden? Diskutiere Chancen und Probleme.',
      tr: { ru: 'Должна ли школа быть сильнее цифровизирована? Обсуди возможности и проблемы.', en: 'Should schools be more digitalised? Discuss opportunities and problems.', tr: 'Okullar daha çok dijitalleşmeli mi? Fırsat ve sorunları tartış.', ar: 'هل ينبغي رقمنة المدارس أكثر؟ ناقش الفرص والمشكلات.', fa: 'آیا مدرسه باید بیشتر دیجیتالی شود؟ فرصت‌ها و مشکلات را بحث کن.' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── C1 · ~300 Wörter · Erörterung / Stellungnahme ───── */
    { id: 'c1-ki', level: 'C1', kind: 'Erörterung', title: 'Künstliche Intelligenz', minWords: 300, tip: 'zweifellos, gleichwohl, in diesem Zusammenhang, folglich',
      prompt: 'Künstliche Intelligenz verändert die Arbeitswelt. Diskutiere Chancen und Risiken für die Gesellschaft.',
      tr: { ru: 'Искусственный интеллект меняет мир труда. Обсуди возможности и риски для общества.', en: 'Artificial intelligence is changing the world of work. Discuss opportunities and risks for society.', tr: 'Yapay zekâ iş dünyasını değiştiriyor. Toplum için fırsat ve riskleri tartış.', ar: 'الذكاء الاصطناعي يغيّر عالم العمل. ناقش الفرص والمخاطر على المجتمع.', fa: 'هوش مصنوعی دنیای کار را تغییر می‌دهد. فرصت‌ها و خطرها برای جامعه را بررسی کن.' } },
    { id: 'c1-klima', level: 'C1', kind: 'Stellungnahme', title: 'Verantwortung beim Klima', minWords: 300, tip: 'es lässt sich argumentieren, letztlich, demgegenüber',
      prompt: 'Wer trägt die Verantwortung im Kampf gegen den Klimawandel – der Einzelne oder der Staat?',
      tr: { ru: 'Кто несёт ответственность в борьбе с изменением климата — отдельный человек или государство?', en: 'Who bears responsibility in the fight against climate change – the individual or the state?', tr: 'İklim değişikliğiyle mücadelede sorumluluk kimde – bireyde mi devlette mi?', ar: 'مَن يتحمّل المسؤولية في مكافحة تغيّر المناخ – الفرد أم الدولة؟', fa: 'مسئولیت مبارزه با تغییرات اقلیمی با کیست — فرد یا دولت؟' } },
    { id: 'c1-migration', level: 'C1', kind: 'Erörterung', title: 'Migration und Integration', minWords: 300, tip: 'einerseits, andererseits, vor diesem Hintergrund',
      prompt: 'Migration prägt moderne Gesellschaften. Erörtere Herausforderungen und Chancen der Integration.',
      tr: { ru: 'Миграция формирует современные общества. Рассмотри вызовы и возможности интеграции.', en: 'Migration shapes modern societies. Discuss the challenges and opportunities of integration.', tr: 'Göç modern toplumları şekillendiriyor. Entegrasyonun zorluk ve fırsatlarını tartış.', ar: 'الهجرة تشكّل المجتمعات الحديثة. ناقش تحديات وفرص الاندماج.', fa: 'مهاجرت جوامع مدرن را شکل می‌دهد. چالش‌ها و فرصت‌های ادغام را بررسی کن.' } },
    { id: 'c1-ueberwachung', level: 'C1', kind: 'Erörterung', title: 'Freiheit und Sicherheit', minWords: 300, tip: 'auf der einen Seite, auf der anderen Seite, abzuwägen ist',
      prompt: 'Mehr Sicherheit durch mehr Überwachung? Diskutiere das Spannungsfeld zwischen Freiheit und Sicherheit.',
      tr: { ru: 'Больше безопасности через больше слежки? Обсуди противоречие между свободой и безопасностью.', en: 'More security through more surveillance? Discuss the tension between freedom and security.', tr: 'Daha fazla gözetimle daha fazla güvenlik mi? Özgürlük ve güvenlik gerilimini tartış.', ar: 'أمن أكثر عبر مراقبة أكثر؟ ناقش التوتر بين الحرية والأمن.', fa: 'امنیت بیشتر از طریق نظارت بیشتر؟ تنش میان آزادی و امنیت را بررسی کن.' } },
    { id: 'c1-konsum', level: 'C1', kind: 'Stellungnahme', title: 'Konsum und Nachhaltigkeit', minWords: 300, tip: 'es stellt sich die Frage, dabei ist zu bedenken, somit',
      prompt: 'Unsere Konsumgesellschaft und Nachhaltigkeit – ein Widerspruch? Nimm begründet Stellung.',
      tr: { ru: 'Наше общество потребления и устойчивость — противоречие? Выскажи обоснованную позицию.', en: 'Our consumer society and sustainability – a contradiction? Take a reasoned position.', tr: 'Tüketim toplumumuz ve sürdürülebilirlik – çelişki mi? Gerekçeli görüş belirt.', ar: 'مجتمع الاستهلاك والاستدامة – تناقض؟ اتخذ موقفًا مبرَّرًا.', fa: 'جامعه‌ی مصرفی ما و پایداری — یک تناقض؟ موضعی مستدل بگیر.' } },
    { id: 'c1-bildung', level: 'C1', kind: 'Erörterung', title: 'Bildungsgerechtigkeit', minWords: 300, tip: 'Studien belegen, daraus folgt, nichtsdestotrotz',
      prompt: 'Hängt Bildungserfolg vom Elternhaus ab? Erörtere die Frage der Bildungsgerechtigkeit.',
      tr: { ru: 'Зависит ли успех в образовании от семьи? Рассмотри вопрос справедливости в образовании.', en: 'Does educational success depend on the family background? Discuss the question of educational equity.', tr: 'Eğitim başarısı aileye mi bağlı? Eğitimde fırsat eşitliği sorusunu tartış.', ar: 'هل يعتمد النجاح التعليمي على الأسرة؟ ناقش مسألة العدالة التعليمية.', fa: 'آیا موفقیت تحصیلی به خانواده بستگی دارد؟ مسئله‌ی عدالت آموزشی را بررسی کن.' } },
    { id: 'c1-globalisierung', level: 'C1', kind: 'Erörterung', title: 'Globalisierung', minWords: 300, tip: 'befürwortend lässt sich sagen, kritisch anzumerken ist',
      prompt: 'Globalisierung – verbindet sie die Welt oder vertieft sie Ungleichheit? Erörtere.',
      tr: { ru: 'Глобализация — объединяет мир или углубляет неравенство? Рассмотри.', en: 'Globalisation – does it connect the world or deepen inequality? Discuss.', tr: 'Küreselleşme – dünyayı birleştiriyor mu yoksa eşitsizliği derinleştiriyor mu? Tartış.', ar: 'العولمة – هل تربط العالم أم تعمّق اللامساواة؟ ناقش.', fa: 'جهانی‌شدن — جهان را به هم پیوند می‌دهد یا نابرابری را عمیق‌تر می‌کند؟ بررسی کن.' } },
    { id: 'c1-worklife', level: 'C1', kind: 'Stellungnahme', title: 'Work-Life-Balance', minWords: 300, tip: 'zunehmend, von Bedeutung ist, abschließend lässt sich festhalten',
      prompt: 'Arbeit bestimmt zunehmend unser Leben. Wie wichtig ist die Work-Life-Balance? Nimm Stellung.',
      tr: { ru: 'Работа всё больше определяет нашу жизнь. Насколько важен баланс работы и жизни? Выскажи позицию.', en: 'Work increasingly dominates our lives. How important is work-life balance? Take a position.', tr: 'İş giderek hayatımızı belirliyor. İş-yaşam dengesi ne kadar önemli? Görüş belirt.', ar: 'العمل يهيمن على حياتنا بشكل متزايد. ما أهمية التوازن بين العمل والحياة؟ حدّد موقفك.', fa: 'کار به‌طور فزاینده زندگی ما را تعیین می‌کند. تعادل کار و زندگی چقدر مهم است؟ موضع بگیر.' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── C2 · ~350 Wörter · Essay / Erörterung ───── */
    { id: 'c2-anonymitaet', level: 'C2', kind: 'Essay', title: 'Anonymität im Internet', minWords: 350, tip: 'es ließe sich einwenden, gleichwohl, in letzter Konsequenz',
      prompt: 'Sollte Anonymität im Internet geschützt oder eingeschränkt werden? Verfasse einen argumentativen Essay.',
      tr: { ru: 'Следует ли защищать или ограничивать анонимность в интернете? Напиши аргументированное эссе.', en: 'Should anonymity on the internet be protected or restricted? Write an argumentative essay.', tr: 'İnternette anonimlik korunmalı mı yoksa kısıtlanmalı mı? Argümana dayalı bir deneme yaz.', ar: 'هل ينبغي حماية إخفاء الهوية على الإنترنت أم تقييده؟ اكتب مقالًا حِجاجيًا.', fa: 'آیا گمنامی در اینترنت باید حفظ شود یا محدود؟ یک مقاله‌ی استدلالی بنویس.' } },
    { id: 'c2-wissenschaft-ethik', level: 'C2', kind: 'Erörterung', title: 'Wissenschaft und Ethik', minWords: 350, tip: 'grundsätzlich, im Spannungsverhältnis, daraus ergibt sich',
      prompt: 'Gibt es Grenzen der Forschung? Diskutiere das Verhältnis von Wissenschaft und Ethik.',
      tr: { ru: 'Есть ли границы у науки? Обсуди отношение науки и этики.', en: 'Are there limits to research? Discuss the relationship between science and ethics.', tr: 'Araştırmanın sınırları var mı? Bilim ve etik ilişkisini tartış.', ar: 'هل للبحث العلمي حدود؟ ناقش العلاقة بين العلم والأخلاق.', fa: 'آیا پژوهش مرز دارد؟ رابطه‌ی علم و اخلاق را بررسی کن.' } },
    { id: 'c2-sprache-identitaet', level: 'C2', kind: 'Essay', title: 'Sprache und Identität', minWords: 350, tip: 'unbestreitbar, in diesem Sinne, vielmehr',
      prompt: 'Wie prägt Sprache unsere Identität? Erörtere den Zusammenhang von Sprache und Denken.',
      tr: { ru: 'Как язык формирует нашу идентичность? Рассмотри связь языка и мышления.', en: 'How does language shape our identity? Discuss the connection between language and thought.', tr: 'Dil kimliğimizi nasıl şekillendirir? Dil ve düşünce ilişkisini tartış.', ar: 'كيف تشكّل اللغة هويتنا؟ ناقش العلاقة بين اللغة والفكر.', fa: 'زبان چگونه هویت ما را شکل می‌دهد؟ پیوند زبان و اندیشه را بررسی کن.' } },
    { id: 'c2-kunst', level: 'C2', kind: 'Essay', title: 'Kunst und Gesellschaft', minWords: 350, tip: 'es lässt sich beobachten, insofern, letztlich',
      prompt: 'Welche Rolle spielt Kunst in der Gesellschaft? Verfasse einen reflektierenden Essay.',
      tr: { ru: 'Какую роль играет искусство в обществе? Напиши рефлексивное эссе.', en: 'What role does art play in society? Write a reflective essay.', tr: 'Sanat toplumda ne rol oynar? Düşünsel bir deneme yaz.', ar: 'ما دور الفن في المجتمع؟ اكتب مقالًا تأمّليًا.', fa: 'هنر چه نقشی در جامعه دارد؟ یک مقاله‌ی تأملی بنویس.' } },
    { id: 'c2-fortschritt', level: 'C2', kind: 'Erörterung', title: 'Der Preis des Fortschritts', minWords: 350, tip: 'einerseits ermöglicht, andererseits, kritisch betrachtet',
      prompt: 'Jeder Fortschritt hat seinen Preis. Diskutiere diese These am Beispiel der Technik.',
      tr: { ru: 'У каждого прогресса есть своя цена. Обсуди этот тезис на примере техники.', en: 'Every progress has its price. Discuss this thesis using the example of technology.', tr: 'Her ilerlemenin bir bedeli vardır. Bu tezi teknoloji örneğiyle tartış.', ar: 'لكل تقدّم ثمنه. ناقش هذه الأطروحة على مثال التقنية.', fa: 'هر پیشرفتی بهای خود را دارد. این گزاره را با مثال فناوری بررسی کن.' } },
    { id: 'c2-individuum', level: 'C2', kind: 'Erörterung', title: 'Individuum und Kollektiv', minWords: 350, tip: 'aus liberaler Sicht, dem ist entgegenzuhalten, im Ergebnis',
      prompt: 'Individuum oder Gemeinschaft – was sollte Vorrang haben? Erörtere differenziert.',
      tr: { ru: 'Личность или общество — что должно иметь приоритет? Рассмотри дифференцированно.', en: 'The individual or the community – which should take priority? Discuss in a differentiated way.', tr: 'Birey mi toplum mu önceliğe sahip olmalı? Ayrıntılı biçimde tartış.', ar: 'الفرد أم الجماعة – أيهما ينبغي أن تكون له الأولوية؟ ناقش بتمييز.', fa: 'فرد یا جامعه — کدام باید اولویت داشته باشد؟ به‌تفصیل بررسی کن.' } },
    { id: 'c2-demokratie', level: 'C2', kind: 'Erörterung', title: 'Demokratie in der Krise?', minWords: 350, tip: 'als Ursache lässt sich anführen, ein möglicher Ausweg, schließlich',
      prompt: 'Ist die Demokratie in der Krise? Analysiere Ursachen und mögliche Auswege.',
      tr: { ru: 'Демократия в кризисе? Проанализируй причины и возможные выходы.', en: 'Is democracy in crisis? Analyse the causes and possible solutions.', tr: 'Demokrasi krizde mi? Nedenleri ve olası çıkış yollarını analiz et.', ar: 'هل الديمقراطية في أزمة؟ حلّل الأسباب والمخارج الممكنة.', fa: 'آیا دموکراسی در بحران است؟ علل و راه‌های برون‌رفت ممکن را تحلیل کن.' } },
    { id: 'c2-erinnerung', level: 'C2', kind: 'Erörterung', title: 'Erinnerungskultur', minWords: 350, tip: 'von zentraler Bedeutung, nicht zuletzt, zusammenfassend',
      prompt: 'Warum ist Erinnerungskultur wichtig? Erörtere die Bedeutung des Umgangs mit der Vergangenheit.',
      tr: { ru: 'Почему важна культура памяти? Рассмотри значение обращения с прошлым.', en: 'Why is the culture of remembrance important? Discuss the significance of dealing with the past.', tr: 'Anma kültürü neden önemli? Geçmişle yüzleşmenin önemini tartış.', ar: 'لماذا تُعدّ ثقافة الذاكرة مهمة؟ ناقش أهمية التعامل مع الماضي.', fa: 'چرا فرهنگ یادبود مهم است؟ اهمیت برخورد با گذشته را بررسی کن.' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── A1 · weitere Themen · ~60 Wörter ───── */
    { id: 'a1-wetter', level: 'A1', kind: 'Beschreibung', title: 'Das Wetter heute', minWords: 60, tip: 'Es ist …, es regnet/schneit, die Sonne scheint',
      prompt: 'Wie ist das Wetter heute? Beschreibe es.',
      tr: { ru: 'Какая сегодня погода? Опиши её.', en: 'What is the weather like today? Describe it.', tr: 'Bugün hava nasıl? Anlat.', ar: 'كيف الطقس اليوم؟ صِفه.', fa: 'امروز هوا چطور است؟ توصیفش کن.' } },
    { id: 'a1-kleidung', level: 'A1', kind: 'Beschreibung', title: 'Meine Kleidung', minWords: 60, tip: 'Ich trage …, gern, heute',
      prompt: 'Was trägst du gern? Beschreibe deine Kleidung.',
      tr: { ru: 'Что ты любишь носить? Опиши свою одежду.', en: 'What do you like to wear? Describe your clothes.', tr: 'Ne giymeyi seversin? Kıyafetlerini anlat.', ar: 'ماذا تحب أن ترتدي؟ صِف ملابسك.', fa: 'دوست داری چه بپوشی؟ لباس‌هایت را توصیف کن.' } },
    { id: 'a1-einkaufen', level: 'A1', kind: 'Bericht', title: 'Einkaufen', minWords: 60, tip: 'Ich kaufe …, im Supermarkt, ich brauche',
      prompt: 'Was kaufst du oft? Schreibe über deinen Einkauf.',
      tr: { ru: 'Что ты часто покупаешь? Напиши о своих покупках.', en: 'What do you often buy? Write about your shopping.', tr: 'Sık sık ne alırsın? Alışverişin hakkında yaz.', ar: 'ماذا تشتري كثيرًا؟ اكتب عن تسوقك.', fa: 'اغلب چه می‌خری؟ درباره‌ی خریدت بنویس.' } },
    { id: 'a1-haustier', level: 'A1', kind: 'Beschreibung', title: 'Mein Haustier', minWords: 60, tip: 'Ich habe …, es heißt …, es ist',
      prompt: 'Hast du ein Haustier? Beschreibe es oder ein Tier, das du magst.',
      tr: { ru: 'У тебя есть питомец? Опиши его или животное, которое тебе нравится.', en: 'Do you have a pet? Describe it or an animal you like.', tr: 'Evcil hayvanın var mı? Onu ya da sevdiğin bir hayvanı anlat.', ar: 'هل لديك حيوان أليف؟ صِفه أو حيوانًا تحبه.', fa: 'حیوان خانگی داری؟ آن یا حیوانی که دوست داری را توصیف کن.' } },
    { id: 'a1-kurs', level: 'A1', kind: 'Beschreibung', title: 'Mein Deutschkurs', minWords: 60, tip: 'Mein Kurs ist …, ich lerne …, die Lehrerin',
      prompt: 'Beschreibe deine Schule oder deinen Deutschkurs.',
      tr: { ru: 'Опиши свою школу или курс немецкого.', en: 'Describe your school or your German course.', tr: 'Okulunu veya Almanca kursunu anlat.', ar: 'صِف مدرستك أو دورة الألمانية.', fa: 'مدرسه یا کلاس آلمانی‌ات را توصیف کن.' } },
    { id: 'a1-arzt', level: 'A1', kind: 'Bericht', title: 'Beim Arzt', minWords: 60, tip: 'Mir tut … weh, ich bin krank, ich habe',
      prompt: 'Dir geht es nicht gut. Schreibe, was dir wehtut.',
      tr: { ru: 'Тебе нездоровится. Напиши, что у тебя болит.', en: 'You are not feeling well. Write what hurts.', tr: 'İyi hissetmiyorsun. Neyin ağrıdığını yaz.', ar: 'لست بخير. اكتب ما الذي يؤلمك.', fa: 'حالت خوب نیست. بنویس کجایت درد می‌کند.' } },
    { id: 'a1-jahreszeit', level: 'A1', kind: 'Meinung', title: 'Meine Lieblingsjahreszeit', minWords: 60, tip: 'Ich mag … am liebsten, weil, im',
      prompt: 'Welche Jahreszeit magst du am liebsten und warum?',
      tr: { ru: 'Какое время года тебе нравится больше всего и почему?', en: 'Which season do you like best and why?', tr: 'En çok hangi mevsimi seversin ve neden?', ar: 'أي فصل تفضّل أكثر ولماذا؟', fa: 'کدام فصل را بیشتر دوست داری و چرا؟' } },
    { id: 'a1-weg', level: 'A1', kind: 'Bericht', title: 'Mein Weg zur Arbeit', minWords: 60, tip: 'Ich fahre mit …, zu Fuß, es dauert',
      prompt: 'Wie kommst du zur Arbeit oder zum Kurs? Beschreibe deinen Weg.',
      tr: { ru: 'Как ты добираешься до работы или на курс? Опиши свой путь.', en: 'How do you get to work or to your course? Describe your way.', tr: 'İşe veya kursa nasıl gidersin? Yolunu anlat.', ar: 'كيف تذهب إلى العمل أو الدورة؟ صِف طريقك.', fa: 'چطور به محل کار یا کلاس می‌روی؟ مسیرت را توصیف کن.' } },
    { id: 'a1-geburtstag', level: 'A1', kind: 'Bericht', title: 'Mein Geburtstag', minWords: 60, tip: 'Ich feiere …, mit …, wir essen',
      prompt: 'Wie feierst du deinen Geburtstag?',
      tr: { ru: 'Как ты празднуешь свой день рождения?', en: 'How do you celebrate your birthday?', tr: 'Doğum gününü nasıl kutlarsın?', ar: 'كيف تحتفل بعيد ميلادك؟', fa: 'تولدت را چطور جشن می‌گیری؟' } },
    { id: 'a1-morgen', level: 'A1', kind: 'Beschreibung', title: 'Am Morgen', minWords: 60, tip: 'Zuerst, dann, ich stehe … auf',
      prompt: 'Was machst du jeden Morgen? Beschreibe deine Morgenroutine.',
      tr: { ru: 'Что ты делаешь каждое утро? Опиши своё утро.', en: 'What do you do every morning? Describe your morning routine.', tr: 'Her sabah ne yaparsın? Sabah rutinini anlat.', ar: 'ماذا تفعل كل صباح؟ صِف روتينك الصباحي.', fa: 'هر صبح چه می‌کنی؟ روال صبحت را توصیف کن.' } },
    { id: 'a1-getraenk', level: 'A1', kind: 'Beschreibung', title: 'Was ich gern trinke', minWords: 60, tip: 'Ich trinke gern …, am Morgen, kalt/warm',
      prompt: 'Was trinkst du gern? Schreibe darüber.',
      tr: { ru: 'Что ты любишь пить? Напиши об этом.', en: 'What do you like to drink? Write about it.', tr: 'Ne içmeyi seversin? Bunun hakkında yaz.', ar: 'ماذا تحب أن تشرب؟ اكتب عن ذلك.', fa: 'دوست داری چه بنوشی؟ درباره‌اش بنویس.' } },
    { id: 'a1-woche', level: 'A1', kind: 'Bericht', title: 'Meine Woche', minWords: 60, tip: 'am Montag, am Wochenende, jeden Tag',
      prompt: 'Was machst du an den Tagen der Woche (Montag bis Sonntag)?',
      tr: { ru: 'Что ты делаешь в дни недели (с понедельника по воскресенье)?', en: 'What do you do on the days of the week (Monday to Sunday)?', tr: 'Haftanın günlerinde (Pazartesi–Pazar) ne yaparsın?', ar: 'ماذا تفعل في أيام الأسبوع (الإثنين إلى الأحد)؟', fa: 'در روزهای هفته (دوشنبه تا یکشنبه) چه می‌کنی؟' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── A2 · weitere Themen · ~120 Wörter ───── */
    { id: 'a2-nachbar', level: 'A2', kind: 'Beschreibung', title: 'Meine Nachbarn', minWords: 120, tip: 'Mein Nachbar …, wir, manchmal',
      prompt: 'Beschreibe deine Nachbarn. Wie ist der Kontakt zu ihnen?',
      tr: { ru: 'Опиши своих соседей. Какие у тебя с ними отношения?', en: 'Describe your neighbours. What is your contact with them like?', tr: 'Komşularını anlat. Onlarla ilişkin nasıl?', ar: 'صِف جيرانك. كيف هي علاقتك بهم؟', fa: 'همسایه‌هایت را توصیف کن. رابطه‌ات با آن‌ها چگونه است؟' } },
    { id: 'a2-internet', level: 'A2', kind: 'Meinung', title: 'Internet im Alltag', minWords: 120, tip: 'Ich nutze …, um zu, jeden Tag',
      prompt: 'Wofür nutzt du das Internet im Alltag? Schreibe darüber.',
      tr: { ru: 'Для чего ты используешь интернет в повседневной жизни? Напиши об этом.', en: 'What do you use the internet for in everyday life? Write about it.', tr: 'Günlük hayatta interneti ne için kullanırsın? Yaz.', ar: 'لماذا تستخدم الإنترنت في حياتك اليومية؟ اكتب عن ذلك.', fa: 'در زندگی روزمره اینترنت را برای چه استفاده می‌کنی؟ بنویس.' } },
    { id: 'a2-kochen', level: 'A2', kind: 'Bericht', title: 'Mein Lieblingsrezept', minWords: 120, tip: 'zuerst, dann, man braucht',
      prompt: 'Beschreibe, wie man dein Lieblingsgericht kocht.',
      tr: { ru: 'Опиши, как готовить твоё любимое блюдо.', en: 'Describe how to cook your favourite dish.', tr: 'En sevdiğin yemeğin nasıl yapıldığını anlat.', ar: 'صِف كيف يُطبخ طبقك المفضل.', fa: 'توصیف کن غذای موردعلاقه‌ات چطور پخته می‌شود.' } },
    { id: 'a2-kindheit', level: 'A2', kind: 'Bericht', title: 'Meine Kindheit', minWords: 120, tip: 'Als Kind …, früher, ich habe oft',
      prompt: 'Wie war deine Kindheit? Erzähle davon.',
      tr: { ru: 'Каким было твоё детство? Расскажи о нём.', en: 'What was your childhood like? Tell about it.', tr: 'Çocukluğun nasıldı? Anlat.', ar: 'كيف كانت طفولتك؟ احكِ عنها.', fa: 'کودکی‌ات چگونه بود؟ درباره‌اش بگو.' } },
    { id: 'a2-wohnort', level: 'A2', kind: 'Beschreibung', title: 'Mein Wohnort', minWords: 120, tip: 'Ich wohne in …, hier gibt es, man kann',
      prompt: 'Beschreibe deinen Wohnort. Was gefällt dir dort, was nicht?',
      tr: { ru: 'Опиши место, где ты живёшь. Что тебе там нравится, а что нет?', en: 'Describe where you live. What do you like there, what not?', tr: 'Yaşadığın yeri anlat. Orada neyi seviyorsun, neyi sevmiyorsun?', ar: 'صِف مكان سكنك. ما الذي يعجبك هناك وما الذي لا يعجبك؟', fa: 'محل زندگی‌ات را توصیف کن. آنجا چه چیزی را دوست داری و چه چیزی را نه؟' } },
    { id: 'a2-feiertag', level: 'A2', kind: 'Beschreibung', title: 'Mein Lieblingsfeiertag', minWords: 120, tip: 'An … feiern wir, es gibt, die Familie',
      prompt: 'Welcher Feiertag ist dein liebster? Beschreibe ihn.',
      tr: { ru: 'Какой праздник твой любимый? Опиши его.', en: 'Which holiday is your favourite? Describe it.', tr: 'En sevdiğin bayram hangisi? Anlat.', ar: 'ما عيدك المفضل؟ صِفه.', fa: 'کدام تعطیلات موردعلاقه‌ات است؟ توصیفش کن.' } },
    { id: 'a2-plaene', level: 'A2', kind: 'Meinung', title: 'Meine Pläne', minWords: 120, tip: 'Ich möchte …, in Zukunft, ich will',
      prompt: 'Welche Pläne hast du für die nächsten Jahre?',
      tr: { ru: 'Какие у тебя планы на ближайшие годы?', en: 'What plans do you have for the next few years?', tr: 'Önümüzdeki birkaç yıl için ne planların var?', ar: 'ما خططك للسنوات القادمة؟', fa: 'برای چند سال آینده چه برنامه‌هایی داری؟' } },
    { id: 'a2-musik', level: 'A2', kind: 'Meinung', title: 'Musik in meinem Leben', minWords: 120, tip: 'Ich höre gern …, weil, beim',
      prompt: 'Welche Musik hörst du gern und wann? Schreibe darüber.',
      tr: { ru: 'Какую музыку ты любишь слушать и когда? Напиши об этом.', en: 'What music do you like to listen to and when? Write about it.', tr: 'Ne tür müzik dinlemeyi seversin ve ne zaman? Yaz.', ar: 'ما الموسيقى التي تحب أن تستمع إليها ومتى؟ اكتب عن ذلك.', fa: 'چه موسیقی‌ای دوست داری گوش بدهی و کِی؟ بنویس.' } },
    { id: 'a2-fit', level: 'A2', kind: 'Meinung', title: 'Gesund bleiben', minWords: 120, tip: 'Man sollte …, es ist gut, ich versuche',
      prompt: 'Was machst du, um gesund zu bleiben?',
      tr: { ru: 'Что ты делаешь, чтобы оставаться здоровым(ой)?', en: 'What do you do to stay healthy?', tr: 'Sağlıklı kalmak için ne yaparsın?', ar: 'ماذا تفعل لتبقى بصحة جيدة؟', fa: 'برای سالم ماندن چه می‌کنی؟' } },
    { id: 'a2-einladung', level: 'A2', kind: 'Bericht', title: 'Eine Einladung', minWords: 120, tip: 'Ich lade dich ein, am …, um … Uhr, komm',
      prompt: 'Du machst eine Party. Schreibe eine Einladung an einen Freund.',
      tr: { ru: 'Ты устраиваешь вечеринку. Напиши приглашение другу.', en: 'You are having a party. Write an invitation to a friend.', tr: 'Bir parti veriyorsun. Bir arkadaşına davet yaz.', ar: 'تقيم حفلة. اكتب دعوة إلى صديق.', fa: 'مهمانی می‌گیری. برای یک دوست دعوت‌نامه بنویس.' } },
    { id: 'a2-ausflug', level: 'A2', kind: 'Bericht', title: 'Ein Ausflug', minWords: 120, tip: 'Wir sind … gefahren, zuerst, am Ende',
      prompt: 'Erzähle von einem Ausflug, den du gemacht hast.',
      tr: { ru: 'Расскажи о поездке или прогулке, которую ты совершил(а).', en: 'Tell about an outing or trip you went on.', tr: 'Yaptığın bir gezi hakkında anlat.', ar: 'احكِ عن نزهة أو رحلة قمت بها.', fa: 'درباره‌ی گردش یا سفری که رفتی بگو.' } },
    { id: 'a2-arbeitstag', level: 'A2', kind: 'Beschreibung', title: 'Mein Arbeitstag', minWords: 120, tip: 'Ich beginne um …, dann, am Ende des Tages',
      prompt: 'Beschreibe einen typischen Arbeits- oder Schultag.',
      tr: { ru: 'Опиши типичный рабочий или учебный день.', en: 'Describe a typical work or school day.', tr: 'Tipik bir iş veya okul gününü anlat.', ar: 'صِف يوم عمل أو دراسة اعتياديًا.', fa: 'یک روز کاری یا درسی معمولی را توصیف کن.' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── B1 · weitere Themen · ~180 Wörter ───── */
    { id: 'b1-sport', level: 'B1', kind: 'Meinung', title: 'Sport treiben', minWords: 180, tip: 'einerseits, gesund, ich finde',
      prompt: 'Wie wichtig ist Sport für ein gesundes Leben? Begründe deine Meinung.',
      tr: { ru: 'Насколько важен спорт для здоровой жизни? Обоснуй своё мнение.', en: 'How important is sport for a healthy life? Justify your opinion.', tr: 'Sağlıklı bir yaşam için spor ne kadar önemli? Görüşünü gerekçelendir.', ar: 'ما أهمية الرياضة لحياة صحية؟ برِّر رأيك.', fa: 'ورزش برای زندگی سالم چقدر مهم است؟ نظرت را توجیه کن.' } },
    { id: 'b1-haustiere', level: 'B1', kind: 'Erörterung', title: 'Haustiere in der Stadt', minWords: 180, tip: 'Vorteile, Nachteile, meiner Meinung nach',
      prompt: 'Ist es gut, Haustiere in einer Stadtwohnung zu halten? Nenne Vor- und Nachteile.',
      tr: { ru: 'Хорошо ли держать питомцев в городской квартире? Назови плюсы и минусы.', en: 'Is it good to keep pets in a city flat? Give pros and cons.', tr: 'Şehir dairesinde evcil hayvan beslemek iyi mi? Artı ve eksileri yaz.', ar: 'هل من الجيد تربية حيوانات أليفة في شقة بالمدينة؟ اذكر الإيجابيات والسلبيات.', fa: 'آیا نگه‌داری حیوان خانگی در آپارتمان شهری خوب است؟ مزایا و معایب را بنویس.' } },
    { id: 'b1-fernsehen', level: 'B1', kind: 'Erörterung', title: 'Fernsehen oder Streaming', minWords: 180, tip: 'früher, heute, im Vergleich',
      prompt: 'Fernsehen oder Streamingdienste – was ist besser? Vergleiche und nimm Stellung.',
      tr: { ru: 'Телевидение или стриминг — что лучше? Сравни и выскажи позицию.', en: 'Television or streaming services – which is better? Compare and take a position.', tr: 'Televizyon mu yayın hizmetleri mi daha iyi? Karşılaştır ve görüş belirt.', ar: 'التلفزيون أم خدمات البث – أيهما أفضل؟ قارن وحدّد موقفك.', fa: 'تلویزیون یا سرویس‌های پخش — کدام بهتر است؟ مقایسه کن و موضع بگیر.' } },
    { id: 'b1-ehrenamt', level: 'B1', kind: 'Meinung', title: 'Ehrenamtliche Arbeit', minWords: 180, tip: 'man hilft, dadurch, ich denke',
      prompt: 'Sollte man ehrenamtlich arbeiten? Schreibe über Vorteile für die Gesellschaft und für einen selbst.',
      tr: { ru: 'Стоит ли заниматься волонтёрством? Напиши о пользе для общества и для себя.', en: 'Should one do volunteer work? Write about benefits for society and for oneself.', tr: 'Gönüllü çalışmalı mı? Topluma ve kişiye faydalarını yaz.', ar: 'هل ينبغي القيام بعمل تطوعي؟ اكتب عن الفوائد للمجتمع وللفرد.', fa: 'آیا باید کار داوطلبانه کرد؟ درباره‌ی فواید برای جامعه و خود فرد بنویس.' } },
    { id: 'b1-geld', level: 'B1', kind: 'Meinung', title: 'Umgang mit Geld', minWords: 180, tip: 'sparen, ausgeben, es ist wichtig',
      prompt: 'Wie geht man am besten mit Geld um? Schreibe deine Tipps und Meinung.',
      tr: { ru: 'Как лучше всего обращаться с деньгами? Напиши советы и мнение.', en: 'What is the best way to handle money? Write your tips and opinion.', tr: 'Parayı en iyi nasıl yönetmeli? Önerilerini ve görüşünü yaz.', ar: 'ما أفضل طريقة للتعامل مع المال؟ اكتب نصائحك ورأيك.', fa: 'بهترین راه مدیریت پول چیست؟ توصیه‌ها و نظرت را بنویس.' } },
    { id: 'b1-werbung', level: 'B1', kind: 'Erörterung', title: 'Werbung', minWords: 180, tip: 'einerseits, andererseits, beeinflusst',
      prompt: 'Beeinflusst Werbung unser Kaufverhalten zu stark? Diskutiere.',
      tr: { ru: 'Слишком ли сильно реклама влияет на наши покупки? Обсуди.', en: 'Does advertising influence our buying behaviour too much? Discuss.', tr: 'Reklam satın alma davranışımızı fazla mı etkiliyor? Tartış.', ar: 'هل تؤثر الإعلانات كثيرًا على سلوكنا الشرائي؟ ناقش.', fa: 'آیا تبلیغات بیش از حد بر رفتار خرید ما اثر می‌گذارد؟ بحث کن.' } },
    { id: 'b1-auto-fahrrad', level: 'B1', kind: 'Erörterung', title: 'Auto oder Fahrrad', minWords: 180, tip: 'praktisch, umweltfreundlich, ich bevorzuge',
      prompt: 'Auto oder Fahrrad in der Stadt – was ist besser? Begründe.',
      tr: { ru: 'Машина или велосипед в городе — что лучше? Обоснуй.', en: 'Car or bicycle in the city – which is better? Justify.', tr: 'Şehirde araba mı bisiklet mi daha iyi? Gerekçelendir.', ar: 'السيارة أم الدراجة في المدينة – أيهما أفضل؟ برِّر.', fa: 'خودرو یا دوچرخه در شهر — کدام بهتر است؟ توجیه کن.' } },
    { id: 'b1-fremdsprachen', level: 'B1', kind: 'Meinung', title: 'Fremdsprachen lernen', minWords: 180, tip: 'es hilft, beim Reisen, ich finde',
      prompt: 'Warum ist es nützlich, Fremdsprachen zu lernen? Schreibe deine Meinung.',
      tr: { ru: 'Почему полезно учить иностранные языки? Напиши своё мнение.', en: 'Why is it useful to learn foreign languages? Write your opinion.', tr: 'Yabancı dil öğrenmek neden faydalı? Görüşünü yaz.', ar: 'لماذا من المفيد تعلّم اللغات الأجنبية؟ اكتب رأيك.', fa: 'چرا یادگیری زبان‌های خارجی مفید است؟ نظرت را بنویس.' } },
    { id: 'b1-stress', level: 'B1', kind: 'Meinung', title: 'Stress im Alltag', minWords: 180, tip: 'oft, deshalb, um … zu vermeiden',
      prompt: 'Was sind die Ursachen von Stress und wie kann man ihn vermeiden?',
      tr: { ru: 'Каковы причины стресса и как его избежать?', en: 'What are the causes of stress and how can one avoid it?', tr: 'Stresin nedenleri nelerdir ve nasıl önlenebilir?', ar: 'ما أسباب التوتر وكيف يمكن تجنّبه؟', fa: 'علل استرس چیست و چگونه می‌توان از آن جلوگیری کرد؟' } },
    { id: 'b1-feste', level: 'B1', kind: 'Beschreibung', title: 'Feste und Traditionen', minWords: 180, tip: 'man feiert, früher, heute',
      prompt: 'Wie wichtig sind Feste und Traditionen heute noch? Schreibe darüber.',
      tr: { ru: 'Насколько важны праздники и традиции сегодня? Напиши об этом.', en: 'How important are festivals and traditions still today? Write about it.', tr: 'Bayramlar ve gelenekler bugün hâlâ ne kadar önemli? Yaz.', ar: 'ما مدى أهمية الأعياد والتقاليد اليوم؟ اكتب عن ذلك.', fa: 'جشن‌ها و سنت‌ها امروز چقدر مهم‌اند؟ درباره‌اش بنویس.' } },
    { id: 'b1-nachbarschaft', level: 'B1', kind: 'Meinung', title: 'Gute Nachbarschaft', minWords: 180, tip: 'man sollte, hilfsbereit, ich meine',
      prompt: 'Was macht eine gute Nachbarschaft aus? Schreibe deine Gedanken.',
      tr: { ru: 'Что делает соседство хорошим? Напиши свои мысли.', en: 'What makes good neighbourliness? Write your thoughts.', tr: 'İyi bir komşuluğu ne oluşturur? Düşüncelerini yaz.', ar: 'ما الذي يصنع حُسن الجوار؟ اكتب أفكارك.', fa: 'یک همسایگی خوب چه ویژگی‌هایی دارد؟ افکارت را بنویس.' } },
    { id: 'b1-zukunftsberuf', level: 'B1', kind: 'Meinung', title: 'Beruf der Zukunft', minWords: 180, tip: 'in Zukunft, wegen, ich glaube',
      prompt: 'Welche Berufe werden in Zukunft wichtig sein? Begründe deine Meinung.',
      tr: { ru: 'Какие профессии будут важны в будущем? Обоснуй своё мнение.', en: 'Which jobs will be important in the future? Justify your opinion.', tr: 'Gelecekte hangi meslekler önemli olacak? Görüşünü gerekçelendir.', ar: 'ما المهن التي ستكون مهمة في المستقبل؟ برِّر رأيك.', fa: 'کدام مشاغل در آینده مهم خواهند بود؟ نظرت را توجیه کن.' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── B2 · weitere Themen · ~220 Wörter · Erörterung ───── */
    { id: 'b2-rauchen', level: 'B2', kind: 'Erörterung', title: 'Rauchverbot', minWords: 220, tip: 'Befürworter, Gegner, abschließend',
      prompt: 'Sollte das Rauchen an öffentlichen Orten generell verboten werden? Erörtere.',
      tr: { ru: 'Следует ли полностью запретить курение в общественных местах? Рассмотри.', en: 'Should smoking in public places be banned entirely? Discuss.', tr: 'Kamuya açık yerlerde sigara tamamen yasaklanmalı mı? Tartış.', ar: 'هل ينبغي حظر التدخين في الأماكن العامة تمامًا؟ ناقش.', fa: 'آیا باید سیگار در اماکن عمومی کاملاً ممنوع شود؟ بررسی کن.' } },
    { id: 'b2-tempolimit', level: 'B2', kind: 'Erörterung', title: 'Tempolimit', minWords: 220, tip: 'für, gegen, letztlich',
      prompt: 'Sollte es ein allgemeines Tempolimit auf Autobahnen geben? Erörtere Pro und Contra.',
      tr: { ru: 'Должно ли быть общее ограничение скорости на автобанах? Рассмотри за и против.', en: 'Should there be a general speed limit on motorways? Discuss pros and cons.', tr: 'Otoyollarda genel hız sınırı olmalı mı? Lehte ve aleyhte tartış.', ar: 'هل ينبغي وجود حد سرعة عام على الطرق السريعة؟ ناقش المؤيد والمعارض.', fa: 'آیا باید محدودیت سرعت عمومی در بزرگراه‌ها باشد؟ موافق و مخالف را بررسی کن.' } },
    { id: 'b2-gentechnik', level: 'B2', kind: 'Erörterung', title: 'Gentechnik in Lebensmitteln', minWords: 220, tip: 'Chancen, Risiken, insgesamt',
      prompt: 'Ist Gentechnik in Lebensmitteln vertretbar? Diskutiere Chancen und Risiken.',
      tr: { ru: 'Допустима ли генная инженерия в продуктах? Обсуди возможности и риски.', en: 'Is genetic engineering in food acceptable? Discuss opportunities and risks.', tr: 'Gıdada gen teknolojisi kabul edilebilir mi? Fırsat ve riskleri tartış.', ar: 'هل الهندسة الوراثية في الغذاء مقبولة؟ ناقش الفرص والمخاطر.', fa: 'آیا مهندسی ژنتیک در غذا پذیرفتنی است؟ فرصت‌ها و خطرها را بررسی کن.' } },
    { id: 'b2-zoo', level: 'B2', kind: 'Erörterung', title: 'Zoos', minWords: 220, tip: 'einerseits, andererseits, meiner Ansicht nach',
      prompt: 'Sollten Zoos abgeschafft werden? Erörtere Argumente dafür und dagegen.',
      tr: { ru: 'Следует ли закрыть зоопарки? Рассмотри аргументы за и против.', en: 'Should zoos be abolished? Discuss arguments for and against.', tr: 'Hayvanat bahçeleri kapatılmalı mı? Lehte ve aleyhte argümanları tartış.', ar: 'هل ينبغي إلغاء حدائق الحيوان؟ ناقش الحجج المؤيدة والمعارضة.', fa: 'آیا باغ‌وحش‌ها باید برچیده شوند؟ دلایل موافق و مخالف را بررسی کن.' } },
    { id: 'b2-uniform', level: 'B2', kind: 'Erörterung', title: 'Schuluniform', minWords: 220, tip: 'Vorteile, Nachteile, zusammenfassend',
      prompt: 'Sollten Schulen eine Schuluniform einführen? Erörtere.',
      tr: { ru: 'Должны ли школы ввести школьную форму? Рассмотри.', en: 'Should schools introduce a school uniform? Discuss.', tr: 'Okullar üniforma getirmeli mi? Tartış.', ar: 'هل ينبغي للمدارس فرض زي موحد؟ ناقش.', fa: 'آیا مدارس باید لباس فرم اجباری کنند؟ بررسی کن.' } },
    { id: 'b2-wahlpflicht', level: 'B2', kind: 'Erörterung', title: 'Wahlpflicht', minWords: 220, tip: 'demokratisch, Freiheit, abschließend',
      prompt: 'Sollte es eine Wahlpflicht geben? Diskutiere Vor- und Nachteile.',
      tr: { ru: 'Должно ли голосование быть обязательным? Обсуди плюсы и минусы.', en: 'Should voting be compulsory? Discuss pros and cons.', tr: 'Oy verme zorunlu olmalı mı? Artı ve eksileri tartış.', ar: 'هل ينبغي أن يكون التصويت إلزاميًا؟ ناقش الإيجابيات والسلبيات.', fa: 'آیا رأی‌دادن باید اجباری باشد؟ مزایا و معایب را بررسی کن.' } },
    { id: 'b2-handy-schule', level: 'B2', kind: 'Erörterung', title: 'Handyverbot in der Schule', minWords: 220, tip: 'für, gegen, im Ergebnis',
      prompt: 'Sollten Handys an Schulen verboten werden? Erörtere die Argumente.',
      tr: { ru: 'Следует ли запретить телефоны в школах? Рассмотри аргументы.', en: 'Should mobile phones be banned at schools? Discuss the arguments.', tr: 'Okullarda cep telefonu yasaklanmalı mı? Argümanları tartış.', ar: 'هل ينبغي حظر الهواتف في المدارس؟ ناقش الحجج.', fa: 'آیا باید موبایل در مدارس ممنوع شود؟ دلایل را بررسی کن.' } },
    { id: 'b2-grundeinkommen', level: 'B2', kind: 'Erörterung', title: 'Bedingungsloses Grundeinkommen', minWords: 220, tip: 'Befürworter, Kritiker, letztlich',
      prompt: 'Wäre ein bedingungsloses Grundeinkommen sinnvoll? Erörtere.',
      tr: { ru: 'Имеет ли смысл безусловный базовый доход? Рассмотри.', en: 'Would an unconditional basic income make sense? Discuss.', tr: 'Koşulsuz temel gelir mantıklı olur mu? Tartış.', ar: 'هل سيكون الدخل الأساسي غير المشروط منطقيًا؟ ناقش.', fa: 'آیا درآمد پایه‌ی بی‌قیدوشرط منطقی است؟ بررسی کن.' } },
    { id: 'b2-tierversuche', level: 'B2', kind: 'Erörterung', title: 'Tierversuche', minWords: 220, tip: 'einerseits, andererseits, abschließend',
      prompt: 'Sind Tierversuche in der Forschung zu rechtfertigen? Erörtere.',
      tr: { ru: 'Оправданы ли опыты над животными в науке? Рассмотри.', en: 'Are animal experiments in research justifiable? Discuss.', tr: 'Araştırmada hayvan deneyleri haklı görülebilir mi? Tartış.', ar: 'هل تجارب الحيوانات في البحث لها ما يبررها؟ ناقش.', fa: 'آیا آزمایش روی حیوانات در پژوهش قابل توجیه است؟ بررسی کن.' } },
    { id: 'b2-stadtgruen', level: 'B2', kind: 'Erörterung', title: 'Mehr Grün in Städten', minWords: 220, tip: 'Vorteile, Kosten, insgesamt',
      prompt: 'Sollten Städte deutlich mehr Grünflächen schaffen? Erörtere Nutzen und Probleme.',
      tr: { ru: 'Должны ли города создавать намного больше зелёных зон? Рассмотри пользу и проблемы.', en: 'Should cities create considerably more green spaces? Discuss benefits and problems.', tr: 'Şehirler çok daha fazla yeşil alan oluşturmalı mı? Fayda ve sorunları tartış.', ar: 'هل ينبغي للمدن إنشاء مساحات خضراء أكثر بكثير؟ ناقش الفوائد والمشكلات.', fa: 'آیا شهرها باید فضای سبز بسیار بیشتری ایجاد کنند؟ فواید و مشکلات را بررسی کن.' } },
    { id: 'b2-pflichtdienst', level: 'B2', kind: 'Erörterung', title: 'Sozialer Pflichtdienst', minWords: 220, tip: 'für, gegen, abschließend',
      prompt: 'Sollte es einen verpflichtenden sozialen Dienst für junge Menschen geben? Erörtere.',
      tr: { ru: 'Должна ли быть обязательная социальная служба для молодёжи? Рассмотри.', en: 'Should there be a compulsory social service for young people? Discuss.', tr: 'Gençler için zorunlu bir sosyal hizmet olmalı mı? Tartış.', ar: 'هل ينبغي وجود خدمة اجتماعية إلزامية للشباب؟ ناقش.', fa: 'آیا باید خدمت اجتماعی اجباری برای جوانان باشد؟ بررسی کن.' } },
    { id: 'b2-arbeit-freizeit', level: 'B2', kind: 'Erörterung', title: 'Arbeit und Freizeit', minWords: 220, tip: 'einerseits, andererseits, im Ergebnis',
      prompt: 'Arbeiten viele Menschen heute zu viel? Erörtere das Verhältnis von Arbeit und Freizeit.',
      tr: { ru: 'Слишком ли много работают многие сегодня? Рассмотри баланс работы и отдыха.', en: 'Do many people work too much today? Discuss the balance of work and leisure.', tr: 'Bugün birçok insan fazla mı çalışıyor? İş ve boş zaman dengesini tartış.', ar: 'هل يعمل كثير من الناس اليوم أكثر من اللازم؟ ناقش العلاقة بين العمل والفراغ.', fa: 'آیا امروز بسیاری بیش از حد کار می‌کنند؟ تعادل کار و اوقات فراغت را بررسی کن.' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── C1 · weitere Themen · ~300 Wörter ───── */
    { id: 'c1-medienkompetenz', level: 'C1', kind: 'Erörterung', title: 'Medien und Wahrheit', minWords: 300, tip: 'einerseits, andererseits, vor diesem Hintergrund',
      prompt: 'Wie kann man in Zeiten von Fake News verlässliche Informationen erkennen? Erörtere.',
      tr: { ru: 'Как в эпоху фейковых новостей распознавать достоверную информацию? Рассмотри.', en: 'How can one identify reliable information in times of fake news? Discuss.', tr: 'Sahte haberler çağında güvenilir bilgi nasıl ayırt edilir? Tartış.', ar: 'كيف يمكن تمييز المعلومات الموثوقة في زمن الأخبار الزائفة؟ ناقش.', fa: 'در عصر اخبار جعلی چگونه می‌توان اطلاعات معتبر را تشخیص داد؟ بررسی کن.' } },
    { id: 'c1-digital-arbeit', level: 'C1', kind: 'Erörterung', title: 'Digitalisierung der Arbeit', minWords: 300, tip: 'zweifellos, gleichwohl, folglich',
      prompt: 'Wie verändert die Digitalisierung die Arbeitswelt? Diskutiere Chancen und Gefahren.',
      tr: { ru: 'Как цифровизация меняет мир труда? Обсуди возможности и опасности.', en: 'How is digitalisation changing the world of work? Discuss opportunities and dangers.', tr: 'Dijitalleşme iş dünyasını nasıl değiştiriyor? Fırsat ve tehlikeleri tartış.', ar: 'كيف تغيّر الرقمنة عالم العمل؟ ناقش الفرص والمخاطر.', fa: 'دیجیتالی‌شدن چگونه دنیای کار را تغییر می‌دهد؟ فرصت‌ها و خطرها را بررسی کن.' } },
    { id: 'c1-urbanisierung', level: 'C1', kind: 'Erörterung', title: 'Leben in der Großstadt', minWords: 300, tip: 'einerseits, andererseits, abschließend',
      prompt: 'Immer mehr Menschen ziehen in Großstädte. Erörtere Folgen für Mensch und Umwelt.',
      tr: { ru: 'Всё больше людей переезжают в мегаполисы. Рассмотри последствия для человека и среды.', en: 'More and more people move to big cities. Discuss consequences for people and the environment.', tr: 'Giderek daha çok insan büyük şehirlere taşınıyor. İnsan ve çevre için sonuçları tartış.', ar: 'يتزايد انتقال الناس إلى المدن الكبرى. ناقش العواقب على الإنسان والبيئة.', fa: 'مردم بیش‌ازپیش به کلان‌شهرها می‌روند. پیامدها برای انسان و محیط را بررسی کن.' } },
    { id: 'c1-gesundheit-verantwortung', level: 'C1', kind: 'Stellungnahme', title: 'Gesundheit und Eigenverantwortung', minWords: 300, tip: 'es lässt sich argumentieren, letztlich, demgegenüber',
      prompt: 'Wie weit reicht die Eigenverantwortung für die eigene Gesundheit? Nimm Stellung.',
      tr: { ru: 'Насколько простирается личная ответственность за своё здоровье? Выскажи позицию.', en: 'How far does personal responsibility for one’s own health extend? Take a position.', tr: 'Kendi sağlığımız için kişisel sorumluluk nereye kadar uzanır? Görüş belirt.', ar: 'إلى أي مدى تمتدّ المسؤولية الشخصية عن الصحة؟ حدّد موقفك.', fa: 'مسئولیت فردی برای سلامت خود تا کجاست؟ موضع بگیر.' } },
    { id: 'c1-kulturfoerderung', level: 'C1', kind: 'Erörterung', title: 'Kulturförderung', minWords: 300, tip: 'einerseits, andererseits, vor diesem Hintergrund',
      prompt: 'Sollte der Staat Kunst und Kultur finanziell fördern? Erörtere.',
      tr: { ru: 'Должно ли государство финансово поддерживать искусство и культуру? Рассмотри.', en: 'Should the state financially support art and culture? Discuss.', tr: 'Devlet sanat ve kültürü maddi olarak desteklemeli mi? Tartış.', ar: 'هل ينبغي للدولة دعم الفن والثقافة ماليًا؟ ناقش.', fa: 'آیا دولت باید هنر و فرهنگ را مالی حمایت کند؟ بررسی کن.' } },
    { id: 'c1-generationen', level: 'C1', kind: 'Erörterung', title: 'Generationengerechtigkeit', minWords: 300, tip: 'auf der einen Seite, auf der anderen Seite, abzuwägen ist',
      prompt: 'Handeln wir gegenüber künftigen Generationen verantwortungsvoll? Erörtere.',
      tr: { ru: 'Поступаем ли мы ответственно по отношению к будущим поколениям? Рассмотри.', en: 'Are we acting responsibly towards future generations? Discuss.', tr: 'Gelecek nesillere karşı sorumlu davranıyor muyuz? Tartış.', ar: 'هل نتصرّف بمسؤولية تجاه الأجيال القادمة؟ ناقش.', fa: 'آیا نسبت به نسل‌های آینده مسئولانه عمل می‌کنیم؟ بررسی کن.' } },
    { id: 'c1-tierethik', level: 'C1', kind: 'Stellungnahme', title: 'Mensch und Tier', minWords: 300, tip: 'es stellt sich die Frage, dabei ist zu bedenken, somit',
      prompt: 'Welche Verantwortung trägt der Mensch gegenüber Tieren? Nimm begründet Stellung.',
      tr: { ru: 'Какую ответственность несёт человек перед животными? Выскажи обоснованную позицию.', en: 'What responsibility do humans have towards animals? Take a reasoned position.', tr: 'İnsanın hayvanlara karşı sorumluluğu nedir? Gerekçeli görüş belirt.', ar: 'ما مسؤولية الإنسان تجاه الحيوانات؟ اتخذ موقفًا مبرَّرًا.', fa: 'انسان چه مسئولیتی در برابر حیوانات دارد؟ موضعی مستدل بگیر.' } },
    { id: 'c1-energiewende', level: 'C1', kind: 'Erörterung', title: 'Energiewende', minWords: 300, tip: 'einerseits, andererseits, im Ergebnis',
      prompt: 'Wie kann der Übergang zu erneuerbaren Energien gelingen? Erörtere Chancen und Hürden.',
      tr: { ru: 'Как может удаться переход к возобновляемой энергии? Рассмотри возможности и препятствия.', en: 'How can the transition to renewable energy succeed? Discuss opportunities and obstacles.', tr: 'Yenilenebilir enerjiye geçiş nasıl başarılabilir? Fırsat ve engelleri tartış.', ar: 'كيف يمكن أن ينجح الانتقال إلى الطاقة المتجددة؟ ناقش الفرص والعقبات.', fa: 'چگونه گذار به انرژی‌های تجدیدپذیر می‌تواند موفق شود؟ فرصت‌ها و موانع را بررسی کن.' } },
    { id: 'c1-wissenschaft-vertrauen', level: 'C1', kind: 'Stellungnahme', title: 'Vertrauen in die Wissenschaft', minWords: 300, tip: 'es lässt sich argumentieren, demgegenüber, folglich',
      prompt: 'Warum vertrauen manche Menschen der Wissenschaft nicht? Nimm Stellung.',
      tr: { ru: 'Почему некоторые люди не доверяют науке? Выскажи позицию.', en: 'Why do some people not trust science? Take a position.', tr: 'Bazı insanlar bilime neden güvenmiyor? Görüş belirt.', ar: 'لماذا لا يثق بعض الناس بالعلم؟ حدّد موقفك.', fa: 'چرا برخی به علم اعتماد ندارند؟ موضع بگیر.' } },
    { id: 'c1-zivilgesellschaft', level: 'C1', kind: 'Erörterung', title: 'Engagement in der Gesellschaft', minWords: 300, tip: 'einerseits, andererseits, abschließend',
      prompt: 'Wie wichtig ist bürgerschaftliches Engagement für eine Gesellschaft? Erörtere.',
      tr: { ru: 'Насколько важна гражданская активность для общества? Рассмотри.', en: 'How important is civic engagement for a society? Discuss.', tr: 'Yurttaş katılımı bir toplum için ne kadar önemli? Tartış.', ar: 'ما أهمية المشاركة المدنية للمجتمع؟ ناقش.', fa: 'مشارکت مدنی برای یک جامعه چقدر مهم است؟ بررسی کن.' } },
    { id: 'c1-sprachwandel', level: 'C1', kind: 'Stellungnahme', title: 'Sprachwandel', minWords: 300, tip: 'es stellt sich die Frage, somit, gleichwohl',
      prompt: 'Verarmt unsere Sprache durch Anglizismen und Digitalisierung? Nimm Stellung.',
      tr: { ru: 'Беднеет ли наш язык из-за англицизмов и цифровизации? Выскажи позицию.', en: 'Is our language becoming impoverished through anglicisms and digitalisation? Take a position.', tr: 'Dilimiz İngilizce sözcükler ve dijitalleşme yüzünden fakirleşiyor mu? Görüş belirt.', ar: 'هل تفتقر لغتنا بسبب الكلمات الإنجليزية والرقمنة؟ حدّد موقفك.', fa: 'آیا زبان ما به‌خاطر واژه‌های انگلیسی و دیجیتالی‌شدن فقیر می‌شود؟ موضع بگیر.' } },
    { id: 'c1-mobilitaet', level: 'C1', kind: 'Erörterung', title: 'Mobilität der Zukunft', minWords: 300, tip: 'einerseits, andererseits, folglich',
      prompt: 'Wie sollte die Mobilität der Zukunft aussehen? Erörtere mögliche Wege.',
      tr: { ru: 'Какой должна быть мобильность будущего? Рассмотри возможные пути.', en: 'What should the mobility of the future look like? Discuss possible paths.', tr: 'Geleceğin ulaşımı nasıl olmalı? Olası yolları tartış.', ar: 'كيف ينبغي أن يكون التنقّل في المستقبل؟ ناقش المسارات الممكنة.', fa: 'تحرک آینده باید چگونه باشد؟ مسیرهای ممکن را بررسی کن.' } }
  );
})();

(function () {
  'use strict';
  window.TEXT_THEMES = window.TEXT_THEMES || [];
  window.TEXT_THEMES.push(
    /* ───── C2 · weitere Themen · ~350 Wörter ───── */
    { id: 'c2-freiheit-sicherheit', level: 'C2', kind: 'Erörterung', title: 'Freiheit oder Sicherheit', minWords: 350, tip: 'einerseits, andererseits, in letzter Konsequenz',
      prompt: 'Wie viel Freiheit darf für mehr Sicherheit geopfert werden? Erörtere differenziert.',
      tr: { ru: 'Сколько свободы можно пожертвовать ради безопасности? Рассмотри дифференцированно.', en: 'How much freedom may be sacrificed for more security? Discuss in a differentiated way.', tr: 'Daha fazla güvenlik için ne kadar özgürlük feda edilebilir? Ayrıntılı tartış.', ar: 'كم من الحرية يمكن التضحية بها مقابل أمن أكبر؟ ناقش بتمييز.', fa: 'چه میزان آزادی را می‌توان برای امنیت بیشتر فدا کرد؟ به‌تفصیل بررسی کن.' } },
    { id: 'c2-wahrheit-medien', level: 'C2', kind: 'Essay', title: 'Wahrheit im medialen Zeitalter', minWords: 350, tip: 'es ließe sich einwenden, gleichwohl, in letzter Konsequenz',
      prompt: 'Gibt es im Zeitalter der Medien noch eine gemeinsame Wahrheit? Verfasse einen Essay.',
      tr: { ru: 'Существует ли в эпоху медиа ещё общая истина? Напиши эссе.', en: 'Is there still a shared truth in the age of media? Write an essay.', tr: 'Medya çağında hâlâ ortak bir gerçek var mı? Bir deneme yaz.', ar: 'هل ما زالت هناك حقيقة مشتركة في عصر الإعلام؟ اكتب مقالًا.', fa: 'آیا در عصر رسانه هنوز حقیقتی مشترک وجود دارد؟ یک مقاله بنویس.' } },
    { id: 'c2-technik-menschlichkeit', level: 'C2', kind: 'Erörterung', title: 'Technik und Menschlichkeit', minWords: 350, tip: 'grundsätzlich, im Spannungsverhältnis, daraus ergibt sich',
      prompt: 'Bedroht der technische Fortschritt unsere Menschlichkeit? Erörtere.',
      tr: { ru: 'Угрожает ли технический прогресс нашей человечности? Рассмотри.', en: 'Does technological progress threaten our humanity? Discuss.', tr: 'Teknolojik ilerleme insanlığımızı tehdit ediyor mu? Tartış.', ar: 'هل يهدّد التقدّم التقني إنسانيتنا؟ ناقش.', fa: 'آیا پیشرفت فناوری انسانیت ما را تهدید می‌کند؟ بررسی کن.' } },
    { id: 'c2-gerechtigkeit', level: 'C2', kind: 'Essay', title: 'Was ist Gerechtigkeit?', minWords: 350, tip: 'unbestreitbar, vielmehr, in diesem Sinne',
      prompt: 'Was bedeutet Gerechtigkeit in einer modernen Gesellschaft? Verfasse einen reflektierenden Essay.',
      tr: { ru: 'Что значит справедливость в современном обществе? Напиши рефлексивное эссе.', en: 'What does justice mean in a modern society? Write a reflective essay.', tr: 'Modern bir toplumda adalet ne anlama gelir? Düşünsel bir deneme yaz.', ar: 'ماذا تعني العدالة في مجتمع حديث؟ اكتب مقالًا تأمّليًا.', fa: 'عدالت در جامعه‌ی مدرن چه معنایی دارد؟ یک مقاله‌ی تأملی بنویس.' } },
    { id: 'c2-natur-kultur', level: 'C2', kind: 'Erörterung', title: 'Natur und Kultur', minWords: 350, tip: 'einerseits, andererseits, letztlich',
      prompt: 'In welchem Verhältnis stehen Mensch und Natur? Erörtere.',
      tr: { ru: 'В каком отношении находятся человек и природа? Рассмотри.', en: 'What is the relationship between humans and nature? Discuss.', tr: 'İnsan ile doğa arasındaki ilişki nedir? Tartış.', ar: 'ما العلاقة بين الإنسان والطبيعة؟ ناقش.', fa: 'رابطه‌ی انسان و طبیعت چیست؟ بررسی کن.' } },
    { id: 'c2-glueck', level: 'C2', kind: 'Essay', title: 'Was ist Glück?', minWords: 350, tip: 'es lässt sich beobachten, insofern, letztlich',
      prompt: 'Was macht ein gelungenes, glückliches Leben aus? Verfasse einen Essay.',
      tr: { ru: 'Что делает жизнь удавшейся и счастливой? Напиши эссе.', en: 'What makes a successful, happy life? Write an essay.', tr: 'Başarılı, mutlu bir hayatı ne oluşturur? Bir deneme yaz.', ar: 'ما الذي يصنع حياة ناجحة وسعيدة؟ اكتب مقالًا.', fa: 'چه چیزی یک زندگی موفق و شاد می‌سازد؟ یک مقاله بنویس.' } },
    { id: 'c2-zeit', level: 'C2', kind: 'Essay', title: 'Der Umgang mit Zeit', minWords: 350, tip: 'einerseits, andererseits, in diesem Sinne',
      prompt: 'Wie verändert die Beschleunigung des Lebens unseren Umgang mit Zeit? Erörtere.',
      tr: { ru: 'Как ускорение жизни меняет наше обращение со временем? Рассмотри.', en: 'How does the acceleration of life change our relationship with time? Discuss.', tr: 'Hayatın hızlanması zamanla ilişkimizi nasıl değiştiriyor? Tartış.', ar: 'كيف يغيّر تسارع الحياة علاقتنا بالوقت؟ ناقش.', fa: 'شتاب زندگی چگونه رابطه‌ی ما با زمان را تغییر می‌دهد؟ بررسی کن.' } },
    { id: 'c2-macht-sprache', level: 'C2', kind: 'Erörterung', title: 'Die Macht der Sprache', minWords: 350, tip: 'unbestreitbar, vielmehr, daraus ergibt sich',
      prompt: 'Welche Macht übt Sprache über das Denken und Handeln aus? Erörtere.',
      tr: { ru: 'Какую власть язык оказывает на мышление и действия? Рассмотри.', en: 'What power does language exert over thought and action? Discuss.', tr: 'Dil, düşünce ve eylem üzerinde nasıl bir güç uygular? Tartış.', ar: 'ما السلطة التي تمارسها اللغة على الفكر والفعل؟ ناقش.', fa: 'زبان چه قدرتی بر اندیشه و کنش اعمال می‌کند؟ بررسی کن.' } },
    { id: 'c2-tradition-moderne', level: 'C2', kind: 'Erörterung', title: 'Tradition und Moderne', minWords: 350, tip: 'einerseits, andererseits, im Ergebnis',
      prompt: 'Wie lassen sich Tradition und Fortschritt miteinander vereinbaren? Erörtere.',
      tr: { ru: 'Как примирить традицию и прогресс? Рассмотри.', en: 'How can tradition and progress be reconciled? Discuss.', tr: 'Gelenek ve ilerleme nasıl bağdaştırılabilir? Tartış.', ar: 'كيف يمكن التوفيق بين التقليد والتقدّم؟ ناقش.', fa: 'چگونه می‌توان سنت و پیشرفت را با هم آشتی داد؟ بررسی کن.' } },
    { id: 'c2-verantwortung-zukunft', level: 'C2', kind: 'Stellungnahme', title: 'Verantwortung für die Zukunft', minWords: 350, tip: 'von zentraler Bedeutung, nicht zuletzt, zusammenfassend',
      prompt: 'Welche Verantwortung tragen wir für kommende Generationen? Nimm begründet Stellung.',
      tr: { ru: 'Какую ответственность мы несём за грядущие поколения? Выскажи обоснованную позицию.', en: 'What responsibility do we bear for coming generations? Take a reasoned position.', tr: 'Gelecek nesiller için ne tür bir sorumluluk taşıyoruz? Gerekçeli görüş belirt.', ar: 'ما المسؤولية التي نتحمّلها تجاه الأجيال القادمة؟ اتخذ موقفًا مبرَّرًا.', fa: 'چه مسئولیتی در برابر نسل‌های آینده داریم؟ موضعی مستدل بگیر.' } },
    { id: 'c2-bildung-wert', level: 'C2', kind: 'Essay', title: 'Der Wert der Bildung', minWords: 350, tip: 'es ließe sich einwenden, gleichwohl, letztlich',
      prompt: 'Worin liegt der eigentliche Wert von Bildung? Verfasse einen Essay.',
      tr: { ru: 'В чём заключается подлинная ценность образования? Напиши эссе.', en: 'What is the true value of education? Write an essay.', tr: 'Eğitimin gerçek değeri nedir? Bir deneme yaz.', ar: 'ما القيمة الحقيقية للتعليم؟ اكتب مقالًا.', fa: 'ارزش واقعی آموزش در چیست؟ یک مقاله بنویس.' } },
    { id: 'c2-wahrheit-objektiv', level: 'C2', kind: 'Erörterung', title: 'Objektive Wahrheit', minWords: 350, tip: 'einerseits, andererseits, in letzter Konsequenz',
      prompt: 'Gibt es eine objektive Wahrheit oder ist alles Ansichtssache? Erörtere.',
      tr: { ru: 'Существует ли объективная истина или всё — дело взгляда? Рассмотри.', en: 'Is there an objective truth or is everything a matter of opinion? Discuss.', tr: 'Nesnel bir gerçek var mı yoksa her şey görüş meselesi mi? Tartış.', ar: 'هل هناك حقيقة موضوعية أم أن كل شيء مسألة رأي؟ ناقش.', fa: 'آیا حقیقتی عینی وجود دارد یا همه‌چیز سلیقه‌ای است؟ بررسی کن.' } }
  );
})();
