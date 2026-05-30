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
