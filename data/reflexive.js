// Reflexive Verben — 90 deutsche reflexive Verben mit Konjugationen
const REFLEXIVE = [
  // ===== AKKUSATIV REFLEXIV =====
  {id:"rf001", verb:"sich waschen", case:"akk",
   ich:"wasche mich", du:"wäschst dich", er:"wäscht sich", wir:"waschen uns", ihr:"wascht euch", sie:"waschen sich",
   ru:"мыться", en:"to wash oneself", tr:"yıkanmak"},

  {id:"rf002", verb:"sich setzen", case:"akk",
   ich:"setze mich", du:"setzt dich", er:"setzt sich", wir:"setzen uns", ihr:"setzt euch", sie:"setzen sich",
   ru:"садиться", en:"to sit down", tr:"oturmak"},

  {id:"rf003", verb:"sich freuen", case:"akk",
   ich:"freue mich", du:"freust dich", er:"freut sich", wir:"freuen uns", ihr:"freut euch", sie:"freuen sich",
   ru:"радоваться", en:"to be glad", tr:"sevinmek"},

  {id:"rf004", verb:"sich ärgern", case:"akk",
   ich:"ärgere mich", du:"ärgerst dich", er:"ärgert sich", wir:"ärgern uns", ihr:"ärgert euch", sie:"ärgern sich",
   ru:"злиться", en:"to be annoyed", tr:"kızmak"},

  {id:"rf005", verb:"sich erinnern", case:"akk",
   ich:"erinnere mich", du:"erinnerst dich", er:"erinnert sich", wir:"erinnern uns", ihr:"erinnert euch", sie:"erinnern sich",
   ru:"вспоминать", en:"to remember", tr:"hatırlamak"},

  {id:"rf006", verb:"sich entscheiden", case:"akk",
   ich:"entscheide mich", du:"entscheidest dich", er:"entscheidet sich", wir:"entscheiden uns", ihr:"entscheidet euch", sie:"entscheiden sich",
   ru:"решаться", en:"to decide", tr:"karar vermek"},

  {id:"rf007", verb:"sich fühlen", case:"akk",
   ich:"fühle mich", du:"fühlst dich", er:"fühlt sich", wir:"fühlen uns", ihr:"fühlt euch", sie:"fühlen sich",
   ru:"чувствовать себя", en:"to feel", tr:"hissetmek"},

  {id:"rf008", verb:"sich bewegen", case:"akk",
   ich:"bewege mich", du:"bewegst dich", er:"bewegt sich", wir:"bewegen uns", ihr:"bewegt euch", sie:"bewegen sich",
   ru:"двигаться", en:"to move", tr:"hareket etmek"},

  {id:"rf009", verb:"sich beschäftigen", case:"akk",
   ich:"beschäftige mich", du:"beschäftigst dich", er:"beschäftigt sich", wir:"beschäftigen uns", ihr:"beschäftigt euch", sie:"beschäftigen sich",
   ru:"заниматься", en:"to occupy oneself", tr:"meşgul olmak"},

  {id:"rf010", verb:"sich bewerben", case:"akk",
   ich:"bewerbe mich", du:"bewirbst dich", er:"bewirbt sich", wir:"bewerben uns", ihr:"bewerbt euch", sie:"bewerben sich",
   ru:"подавать заявку", en:"to apply for", tr:"başvurmak"},

  {id:"rf011", verb:"sich erholen", case:"akk",
   ich:"erhole mich", du:"erholst dich", er:"erholt sich", wir:"erholen uns", ihr:"erholt euch", sie:"erholen sich",
   ru:"отдыхать", en:"to recover", tr:"dinlenmek"},

  {id:"rf012", verb:"sich kümmern", case:"akk",
   ich:"kümmere mich", du:"kümmerst dich", er:"kümmert sich", wir:"kümmern uns", ihr:"kümmert euch", sie:"kümmern sich",
   ru:"заботиться", en:"to take care of", tr:"ilgilenmek"},

  {id:"rf013", verb:"sich schämen", case:"akk",
   ich:"schäme mich", du:"schämst dich", er:"schämt sich", wir:"schämen uns", ihr:"schämt euch", sie:"schämen sich",
   ru:"стыдиться", en:"to be ashamed", tr:"utanmak"},

  {id:"rf014", verb:"sich sehnen", case:"akk",
   ich:"sehne mich", du:"sehnst dich", er:"sehnt sich", wir:"sehnen uns", ihr:"sehnt euch", sie:"sehnen sich",
   ru:"тосковать", en:"to long for", tr:"özlemek"},

  {id:"rf015", verb:"sich unterhalten", case:"akk",
   ich:"unterhalte mich", du:"unterhältst dich", er:"unterhält sich", wir:"unterhalten uns", ihr:"unterhaltet euch", sie:"unterhalten sich",
   ru:"разговаривать", en:"to converse", tr:"sohbet etmek"},

  {id:"rf016", verb:"sich verabschieden", case:"akk",
   ich:"verabschiede mich", du:"verabschiedest dich", er:"verabschiedet sich", wir:"verabschieden uns", ihr:"verabschiedet euch", sie:"verabschieden sich",
   ru:"прощаться", en:"to say goodbye", tr:"vedalaşmak"},

  {id:"rf017", verb:"sich verhalten", case:"akk",
   ich:"verhalte mich", du:"verhältst dich", er:"verhält sich", wir:"verhalten uns", ihr:"verhaltet euch", sie:"verhalten sich",
   ru:"вести себя", en:"to behave", tr:"davranmak"},

  {id:"rf018", verb:"sich verspäten", case:"akk",
   ich:"verspäte mich", du:"verspätest dich", er:"verspätet sich", wir:"verspäten uns", ihr:"verspätet euch", sie:"verspäten sich",
   ru:"опаздывать", en:"to be late", tr:"geç kalmak"},

  {id:"rf019", verb:"sich anziehen", case:"akk",
   ich:"ziehe mich an", du:"ziehst dich an", er:"zieht sich an", wir:"ziehen uns an", ihr:"zieht euch an", sie:"ziehen sich an",
   ru:"одеваться", en:"to get dressed", tr:"giyinmek"},

  {id:"rf020", verb:"sich ausziehen", case:"akk",
   ich:"ziehe mich aus", du:"ziehst dich aus", er:"zieht sich aus", wir:"ziehen uns aus", ihr:"zieht euch aus", sie:"ziehen sich aus",
   ru:"раздеваться", en:"to undress", tr:"soyunmak"},

  {id:"rf021", verb:"sich umziehen", case:"akk",
   ich:"ziehe mich um", du:"ziehst dich um", er:"zieht sich um", wir:"ziehen uns um", ihr:"zieht euch um", sie:"ziehen sich um",
   ru:"переодеваться", en:"to change clothes", tr:"üstünü değiştirmek"},

  {id:"rf022", verb:"sich hinsetzen", case:"akk",
   ich:"setze mich hin", du:"setzt dich hin", er:"setzt sich hin", wir:"setzen uns hin", ihr:"setzt euch hin", sie:"setzen sich hin",
   ru:"присаживаться", en:"to sit down", tr:"oturmak"},

  {id:"rf023", verb:"sich hinlegen", case:"akk",
   ich:"lege mich hin", du:"legst dich hin", er:"legt sich hin", wir:"legen uns hin", ihr:"legt euch hin", sie:"legen sich hin",
   ru:"ложиться", en:"to lie down", tr:"uzanmak"},

  {id:"rf024", verb:"sich beeilen", case:"akk",
   ich:"beeile mich", du:"beeilst dich", er:"beeilt sich", wir:"beeilen uns", ihr:"beeilt euch", sie:"beeilen sich",
   ru:"торопиться", en:"to hurry", tr:"acele etmek"},

  {id:"rf025", verb:"sich bedanken", case:"akk",
   ich:"bedanke mich", du:"bedankst dich", er:"bedankt sich", wir:"bedanken uns", ihr:"bedankt euch", sie:"bedanken sich",
   ru:"благодарить", en:"to thank", tr:"teşekkür etmek"},

  {id:"rf026", verb:"sich beklagen", case:"akk",
   ich:"beklage mich", du:"beklagst dich", er:"beklagt sich", wir:"beklagen uns", ihr:"beklagt euch", sie:"beklagen sich",
   ru:"жаловаться", en:"to complain", tr:"şikâyet etmek"},

  {id:"rf027", verb:"sich bemühen", case:"akk",
   ich:"bemühe mich", du:"bemühst dich", er:"bemüht sich", wir:"bemühen uns", ihr:"bemüht euch", sie:"bemühen sich",
   ru:"стараться", en:"to make an effort", tr:"çabalamak"},

  {id:"rf028", verb:"sich beschweren", case:"akk",
   ich:"beschwere mich", du:"beschwerst dich", er:"beschwert sich", wir:"beschweren uns", ihr:"beschwert euch", sie:"beschweren sich",
   ru:"жаловаться", en:"to complain", tr:"şikâyet etmek"},

  {id:"rf029", verb:"sich beteiligen", case:"akk",
   ich:"beteilige mich", du:"beteiligst dich", er:"beteiligt sich", wir:"beteiligen uns", ihr:"beteiligt euch", sie:"beteiligen sich",
   ru:"участвовать", en:"to participate", tr:"katılmak"},

  {id:"rf030", verb:"sich drehen", case:"akk",
   ich:"drehe mich", du:"drehst dich", er:"dreht sich", wir:"drehen uns", ihr:"dreht euch", sie:"drehen sich",
   ru:"поворачиваться", en:"to turn around", tr:"dönmek"},

  {id:"rf031", verb:"sich eignen", case:"akk",
   ich:"eigne mich", du:"eignest dich", er:"eignet sich", wir:"eignen uns", ihr:"eignet euch", sie:"eignen sich",
   ru:"подходить", en:"to be suitable", tr:"uygun olmak"},

  {id:"rf032", verb:"sich entschuldigen", case:"akk",
   ich:"entschuldige mich", du:"entschuldigst dich", er:"entschuldigt sich", wir:"entschuldigen uns", ihr:"entschuldigt euch", sie:"entschuldigen sich",
   ru:"извиняться", en:"to apologize", tr:"özür dilemek"},

  {id:"rf033", verb:"sich entwickeln", case:"akk",
   ich:"entwickle mich", du:"entwickelst dich", er:"entwickelt sich", wir:"entwickeln uns", ihr:"entwickelt euch", sie:"entwickeln sich",
   ru:"развиваться", en:"to develop", tr:"gelişmek"},

  {id:"rf034", verb:"sich erkundigen", case:"akk",
   ich:"erkundige mich", du:"erkundigst dich", er:"erkundigt sich", wir:"erkundigen uns", ihr:"erkundigt euch", sie:"erkundigen sich",
   ru:"осведомляться", en:"to inquire", tr:"bilgi almak"},

  {id:"rf035", verb:"sich ernähren", case:"akk",
   ich:"ernähre mich", du:"ernährst dich", er:"ernährt sich", wir:"ernähren uns", ihr:"ernährt euch", sie:"ernähren sich",
   ru:"питаться", en:"to nourish oneself", tr:"beslenmek"},

  {id:"rf036", verb:"sich freuen auf", case:"akk",
   ich:"freue mich auf", du:"freust dich auf", er:"freut sich auf", wir:"freuen uns auf", ihr:"freut euch auf", sie:"freuen sich auf",
   ru:"радоваться чему-то (в будущем)", en:"to look forward to", tr:"dört gözle beklemek"},

  {id:"rf037", verb:"sich gewöhnen an", case:"akk",
   ich:"gewöhne mich an", du:"gewöhnst dich an", er:"gewöhnt sich an", wir:"gewöhnen uns an", ihr:"gewöhnt euch an", sie:"gewöhnen sich an",
   ru:"привыкать к", en:"to get used to", tr:"alışmak"},

  {id:"rf038", verb:"sich interessieren", case:"akk",
   ich:"interessiere mich", du:"interessierst dich", er:"interessiert sich", wir:"interessieren uns", ihr:"interessiert euch", sie:"interessieren sich",
   ru:"интересоваться", en:"to be interested in", tr:"ilgilenmek"},

  {id:"rf039", verb:"sich irren", case:"akk",
   ich:"irre mich", du:"irrst dich", er:"irrt sich", wir:"irren uns", ihr:"irrt euch", sie:"irren sich",
   ru:"ошибаться", en:"to be mistaken", tr:"yanılmak"},

  {id:"rf040", verb:"sich konzentrieren", case:"akk",
   ich:"konzentriere mich", du:"konzentrierst dich", er:"konzentriert sich", wir:"konzentrieren uns", ihr:"konzentriert euch", sie:"konzentrieren sich",
   ru:"концентрироваться", en:"to concentrate", tr:"konsantre olmak"},

  {id:"rf041", verb:"sich langweilen", case:"akk",
   ich:"langweile mich", du:"langweilst dich", er:"langweilt sich", wir:"langweilen uns", ihr:"langweilt euch", sie:"langweilen sich",
   ru:"скучать", en:"to be bored", tr:"sıkılmak"},

  {id:"rf042", verb:"sich rasieren", case:"akk",
   ich:"rasiere mich", du:"rasierst dich", er:"rasiert sich", wir:"rasieren uns", ihr:"rasiert euch", sie:"rasieren sich",
   ru:"бриться", en:"to shave", tr:"tıraş olmak"},

  {id:"rf043", verb:"sich schminken", case:"akk",
   ich:"schminke mich", du:"schminkst dich", er:"schminkt sich", wir:"schminken uns", ihr:"schminkt euch", sie:"schminken sich",
   ru:"краситься", en:"to put on makeup", tr:"makyaj yapmak"},

  {id:"rf044", verb:"sich streiten", case:"akk",
   ich:"streite mich", du:"streitest dich", er:"streitet sich", wir:"streiten uns", ihr:"streitet euch", sie:"streiten sich",
   ru:"ссориться", en:"to argue", tr:"kavga etmek"},

  {id:"rf045", verb:"sich trennen", case:"akk",
   ich:"trenne mich", du:"trennst dich", er:"trennt sich", wir:"trennen uns", ihr:"trennt euch", sie:"trennen sich",
   ru:"расставаться", en:"to separate", tr:"ayrılmak"},

  {id:"rf046", verb:"sich umdrehen", case:"akk",
   ich:"drehe mich um", du:"drehst dich um", er:"dreht sich um", wir:"drehen uns um", ihr:"dreht euch um", sie:"drehen sich um",
   ru:"оборачиваться", en:"to turn around", tr:"arkasına dönmek"},

  {id:"rf047", verb:"sich umsehen", case:"akk",
   ich:"sehe mich um", du:"siehst dich um", er:"sieht sich um", wir:"sehen uns um", ihr:"seht euch um", sie:"sehen sich um",
   ru:"осматриваться", en:"to look around", tr:"etrafına bakmak"},

  {id:"rf048", verb:"sich verändern", case:"akk",
   ich:"verändere mich", du:"veränderst dich", er:"verändert sich", wir:"verändern uns", ihr:"verändert euch", sie:"verändern sich",
   ru:"изменяться", en:"to change", tr:"değişmek"},

  {id:"rf049", verb:"sich verirren", case:"akk",
   ich:"verirre mich", du:"verirrst dich", er:"verirrt sich", wir:"verirren uns", ihr:"verirrt euch", sie:"verirren sich",
   ru:"заблудиться", en:"to get lost", tr:"kaybolmak"},

  {id:"rf050", verb:"sich verlieben", case:"akk",
   ich:"verliebe mich", du:"verliebst dich", er:"verliebt sich", wir:"verlieben uns", ihr:"verliebt euch", sie:"verlieben sich",
   ru:"влюбляться", en:"to fall in love", tr:"âşık olmak"},

  {id:"rf051", verb:"sich verlassen auf", case:"akk",
   ich:"verlasse mich auf", du:"verlässt dich auf", er:"verlässt sich auf", wir:"verlassen uns auf", ihr:"verlasst euch auf", sie:"verlassen sich auf",
   ru:"полагаться на", en:"to rely on", tr:"güvenmek"},

  {id:"rf052", verb:"sich verstecken", case:"akk",
   ich:"verstecke mich", du:"versteckst dich", er:"versteckt sich", wir:"verstecken uns", ihr:"versteckt euch", sie:"verstecken sich",
   ru:"прятаться", en:"to hide", tr:"saklanmak"},

  {id:"rf053", verb:"sich vorbereiten", case:"akk",
   ich:"bereite mich vor", du:"bereitest dich vor", er:"bereitet sich vor", wir:"bereiten uns vor", ihr:"bereitet euch vor", sie:"bereiten sich vor",
   ru:"готовиться", en:"to prepare oneself", tr:"hazırlanmak"},

  {id:"rf054", verb:"sich vorstellen", case:"akk",
   ich:"stelle mich vor", du:"stellst dich vor", er:"stellt sich vor", wir:"stellen uns vor", ihr:"stellt euch vor", sie:"stellen sich vor",
   ru:"представляться", en:"to introduce oneself", tr:"kendini tanıtmak"},

  {id:"rf055", verb:"sich wundern", case:"akk",
   ich:"wundere mich", du:"wunderst dich", er:"wundert sich", wir:"wundern uns", ihr:"wundert euch", sie:"wundern sich",
   ru:"удивляться", en:"to be surprised", tr:"şaşırmak"},

  {id:"rf056", verb:"sich ausruhen", case:"akk",
   ich:"ruhe mich aus", du:"ruhst dich aus", er:"ruht sich aus", wir:"ruhen uns aus", ihr:"ruht euch aus", sie:"ruhen sich aus",
   ru:"отдыхать", en:"to rest", tr:"dinlenmek"},

  {id:"rf057", verb:"sich anmelden", case:"akk",
   ich:"melde mich an", du:"meldest dich an", er:"meldet sich an", wir:"melden uns an", ihr:"meldet euch an", sie:"melden sich an",
   ru:"регистрироваться", en:"to register", tr:"kayıt olmak"},

  {id:"rf058", verb:"sich abmelden", case:"akk",
   ich:"melde mich ab", du:"meldest dich ab", er:"meldet sich ab", wir:"melden uns ab", ihr:"meldet euch ab", sie:"melden sich ab",
   ru:"отписываться", en:"to log off", tr:"çıkış yapmak"},

  {id:"rf059", verb:"sich aufregen", case:"akk",
   ich:"rege mich auf", du:"regst dich auf", er:"regt sich auf", wir:"regen uns auf", ihr:"regt euch auf", sie:"regen sich auf",
   ru:"волноваться", en:"to get upset", tr:"sinirlenmek"},

  {id:"rf060", verb:"sich entspannen", case:"akk",
   ich:"entspanne mich", du:"entspannst dich", er:"entspannt sich", wir:"entspannen uns", ihr:"entspannt euch", sie:"entspannen sich",
   ru:"расслабляться", en:"to relax", tr:"rahatlamak"},

  {id:"rf061", verb:"sich erkälten", case:"akk",
   ich:"erkälte mich", du:"erkältest dich", er:"erkältet sich", wir:"erkälten uns", ihr:"erkältet euch", sie:"erkälten sich",
   ru:"простужаться", en:"to catch a cold", tr:"üşütmek"},

  {id:"rf062", verb:"sich verletzen", case:"akk",
   ich:"verletze mich", du:"verletzt dich", er:"verletzt sich", wir:"verletzen uns", ihr:"verletzt euch", sie:"verletzen sich",
   ru:"пораниться", en:"to injure oneself", tr:"yaralanmak"},

  {id:"rf063", verb:"sich täuschen", case:"akk",
   ich:"täusche mich", du:"täuschst dich", er:"täuscht sich", wir:"täuschen uns", ihr:"täuscht euch", sie:"täuschen sich",
   ru:"обманываться", en:"to be deceived", tr:"aldanmak"},

  {id:"rf064", verb:"sich verabreden", case:"akk",
   ich:"verabrede mich", du:"verabredest dich", er:"verabredet sich", wir:"verabreden uns", ihr:"verabredet euch", sie:"verabreden sich",
   ru:"договариваться о встрече", en:"to make an appointment", tr:"buluşmak"},

  {id:"rf065", verb:"sich kämmen", case:"akk",
   ich:"kämme mich", du:"kämmst dich", er:"kämmt sich", wir:"kämmen uns", ihr:"kämmt euch", sie:"kämmen sich",
   ru:"причёсываться", en:"to comb one's hair", tr:"taranmak"},

  {id:"rf066", verb:"sich duschen", case:"akk",
   ich:"dusche mich", du:"duschst dich", er:"duscht sich", wir:"duschen uns", ihr:"duscht euch", sie:"duschen sich",
   ru:"принимать душ", en:"to take a shower", tr:"duş almak"},

  {id:"rf067", verb:"sich abtrocknen", case:"akk",
   ich:"trockne mich ab", du:"trocknest dich ab", er:"trocknet sich ab", wir:"trocknen uns ab", ihr:"trocknet euch ab", sie:"trocknen sich ab",
   ru:"вытираться", en:"to dry oneself", tr:"kurulanmak"},

  {id:"rf068", verb:"sich befinden", case:"akk",
   ich:"befinde mich", du:"befindest dich", er:"befindet sich", wir:"befinden uns", ihr:"befindet euch", sie:"befinden sich",
   ru:"находиться", en:"to be located", tr:"bulunmak"},

  {id:"rf069", verb:"sich wehren", case:"akk",
   ich:"wehre mich", du:"wehrst dich", er:"wehrt sich", wir:"wehren uns", ihr:"wehrt euch", sie:"wehren sich",
   ru:"защищаться", en:"to defend oneself", tr:"savunmak"},

  // ===== DATIV REFLEXIV =====
  {id:"rf070", verb:"sich etwas vorstellen", case:"dat",
   ich:"stelle mir vor", du:"stellst dir vor", er:"stellt sich vor", wir:"stellen uns vor", ihr:"stellt euch vor", sie:"stellen sich vor",
   ru:"представлять себе", en:"to imagine", tr:"hayal etmek"},

  {id:"rf071", verb:"sich etwas wünschen", case:"dat",
   ich:"wünsche mir", du:"wünschst dir", er:"wünscht sich", wir:"wünschen uns", ihr:"wünscht euch", sie:"wünschen sich",
   ru:"желать себе", en:"to wish for", tr:"dilemek"},

  {id:"rf072", verb:"sich etwas leisten", case:"dat",
   ich:"leiste mir", du:"leistest dir", er:"leistet sich", wir:"leisten uns", ihr:"leistet euch", sie:"leisten sich",
   ru:"позволять себе", en:"to afford", tr:"karşılayabilmek"},

  {id:"rf073", verb:"sich etwas merken", case:"dat",
   ich:"merke mir", du:"merkst dir", er:"merkt sich", wir:"merken uns", ihr:"merkt euch", sie:"merken sich",
   ru:"запоминать", en:"to memorize", tr:"akılda tutmak"},

  {id:"rf074", verb:"sich etwas überlegen", case:"dat",
   ich:"überlege mir", du:"überlegst dir", er:"überlegt sich", wir:"überlegen uns", ihr:"überlegt euch", sie:"überlegen sich",
   ru:"обдумывать", en:"to think over", tr:"düşünmek"},

  {id:"rf075", verb:"sich etwas ansehen", case:"dat",
   ich:"sehe mir an", du:"siehst dir an", er:"sieht sich an", wir:"sehen uns an", ihr:"seht euch an", sie:"sehen sich an",
   ru:"рассматривать", en:"to have a look at", tr:"incelemek"},

  {id:"rf076", verb:"sich etwas anhören", case:"dat",
   ich:"höre mir an", du:"hörst dir an", er:"hört sich an", wir:"hören uns an", ihr:"hört euch an", sie:"hören sich an",
   ru:"прослушивать", en:"to listen to", tr:"dinlemek"},

  {id:"rf077", verb:"sich etwas kaufen", case:"dat",
   ich:"kaufe mir", du:"kaufst dir", er:"kauft sich", wir:"kaufen uns", ihr:"kauft euch", sie:"kaufen sich",
   ru:"покупать себе", en:"to buy oneself", tr:"kendine almak"},

  {id:"rf078", verb:"sich etwas bestellen", case:"dat",
   ich:"bestelle mir", du:"bestellst dir", er:"bestellt sich", wir:"bestellen uns", ihr:"bestellt euch", sie:"bestellen sich",
   ru:"заказывать себе", en:"to order for oneself", tr:"kendine sipariş vermek"},

  {id:"rf079", verb:"sich etwas kochen", case:"dat",
   ich:"koche mir", du:"kochst dir", er:"kocht sich", wir:"kochen uns", ihr:"kocht euch", sie:"kochen sich",
   ru:"готовить себе", en:"to cook for oneself", tr:"kendine pişirmek"},

  {id:"rf080", verb:"sich etwas nehmen", case:"dat",
   ich:"nehme mir", du:"nimmst dir", er:"nimmt sich", wir:"nehmen uns", ihr:"nehmt euch", sie:"nehmen sich",
   ru:"брать себе", en:"to take for oneself", tr:"kendine almak"},

  {id:"rf081", verb:"sich etwas leihen", case:"dat",
   ich:"leihe mir", du:"leihst dir", er:"leiht sich", wir:"leihen uns", ihr:"leiht euch", sie:"leihen sich",
   ru:"одалживать себе", en:"to borrow", tr:"ödünç almak"},

  {id:"rf082", verb:"sich etwas anziehen", case:"dat",
   ich:"ziehe mir an", du:"ziehst dir an", er:"zieht sich an", wir:"ziehen uns an", ihr:"zieht euch an", sie:"ziehen sich an",
   ru:"надевать на себя (вещь)", en:"to put on (a garment)", tr:"giymek"},

  {id:"rf083", verb:"sich die Zähne putzen", case:"dat",
   ich:"putze mir die Zähne", du:"putzt dir die Zähne", er:"putzt sich die Zähne", wir:"putzen uns die Zähne", ihr:"putzt euch die Zähne", sie:"putzen sich die Zähne",
   ru:"чистить зубы", en:"to brush one's teeth", tr:"dişlerini fırçalamak"},

  {id:"rf084", verb:"sich die Haare waschen", case:"dat",
   ich:"wasche mir die Haare", du:"wäschst dir die Haare", er:"wäscht sich die Haare", wir:"waschen uns die Haare", ihr:"wascht euch die Haare", sie:"waschen sich die Haare",
   ru:"мыть голову", en:"to wash one's hair", tr:"saçlarını yıkamak"},

  {id:"rf085", verb:"sich die Hände waschen", case:"dat",
   ich:"wasche mir die Hände", du:"wäschst dir die Hände", er:"wäscht sich die Hände", wir:"waschen uns die Hände", ihr:"wascht euch die Hände", sie:"waschen sich die Hände",
   ru:"мыть руки", en:"to wash one's hands", tr:"ellerini yıkamak"},

  {id:"rf086", verb:"sich Sorgen machen", case:"dat",
   ich:"mache mir Sorgen", du:"machst dir Sorgen", er:"macht sich Sorgen", wir:"machen uns Sorgen", ihr:"macht euch Sorgen", sie:"machen sich Sorgen",
   ru:"беспокоиться", en:"to worry", tr:"endişelenmek"},

  {id:"rf087", verb:"sich Mühe geben", case:"dat",
   ich:"gebe mir Mühe", du:"gibst dir Mühe", er:"gibt sich Mühe", wir:"geben uns Mühe", ihr:"gebt euch Mühe", sie:"geben sich Mühe",
   ru:"стараться", en:"to make an effort", tr:"çaba göstermek"},

  {id:"rf088", verb:"sich etwas einbilden", case:"dat",
   ich:"bilde mir ein", du:"bildest dir ein", er:"bildet sich ein", wir:"bilden uns ein", ihr:"bildet euch ein", sie:"bilden sich ein",
   ru:"воображать", en:"to imagine (falsely)", tr:"hayal kurmak"},

  {id:"rf089", verb:"sich etwas ausdenken", case:"dat",
   ich:"denke mir aus", du:"denkst dir aus", er:"denkt sich aus", wir:"denken uns aus", ihr:"denkt euch aus", sie:"denken sich aus",
   ru:"придумывать", en:"to think up", tr:"uydurmak"},

  {id:"rf090", verb:"sich etwas vornehmen", case:"dat",
   ich:"nehme mir vor", du:"nimmst dir vor", er:"nimmt sich vor", wir:"nehmen uns vor", ihr:"nehmt euch vor", sie:"nehmen sich vor",
   ru:"задумать", en:"to plan to do", tr:"planlamak"}
];
