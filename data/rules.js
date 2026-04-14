const RULES = {
partizip: {
de: `
<h2>Partizip II — Perfekt</h2>
<div class="rule-formula">haben/sein + <span class="rule-hl">Partizip II</span></div>
<table class="rule-table">
<tr><th>Typ</th><th>Formel</th><th>Beispiel</th></tr>
<tr><td>Regelmäßig</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">t</span></td><td>machen → <b>ge</b>mach<b>t</b></td></tr>
<tr><td>Unregelmäßig</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">en</span></td><td>gehen → <b>ge</b>gang<b>en</b></td></tr>
<tr><td>Trennbar</td><td>Präfix-<span class="rule-hl">ge</span>-...-t/en</td><td>aufmachen → <b>aufge</b>mach<b>t</b></td></tr>
<tr><td>Untrennbar (be/ver/er/ent/emp/zer)</td><td>KEIN ge-</td><td>verstehen → <b>verstanden</b></td></tr>
<tr><td>-ieren</td><td>KEIN ge-, ...-<span class="rule-hl">t</span></td><td>studieren → <b>studiert</b></td></tr>
</table>
<h3>haben oder sein?</h3>
<div class="rule-box rule-green"><b>sein</b> — Bewegung (gehen, fahren, fliegen) + Zustandsänderung (werden, sterben, aufwachen, einschlafen) + sein, bleiben</div>
<div class="rule-box rule-blue"><b>haben</b> — alle anderen Verben</div>
<h3>Beispiele</h3>
<p>Ich <b>habe</b> Deutsch <span class="rule-hl">gelernt</span>.</p>
<p>Er <b>ist</b> nach Berlin <span class="rule-hl">gefahren</span>.</p>
<p>Sie <b>hat</b> den Film <span class="rule-hl">gesehen</span>.</p>
<p>Wir <b>sind</b> spät <span class="rule-hl">aufgewacht</span>.</p>`,
ru: `
<h2>Partizip II — Перфект</h2>
<div class="rule-formula">haben/sein + <span class="rule-hl">Partizip II</span></div>
<table class="rule-table">
<tr><th>Тип</th><th>Формула</th><th>Пример</th></tr>
<tr><td>Правильные</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">t</span></td><td>machen → <b>ge</b>mach<b>t</b></td></tr>
<tr><td>Неправильные</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">en</span></td><td>gehen → <b>ge</b>gang<b>en</b></td></tr>
<tr><td>Отделяемые</td><td>Приставка-<span class="rule-hl">ge</span>-...-t/en</td><td>aufmachen → <b>aufge</b>mach<b>t</b></td></tr>
<tr><td>Неотделяемые (be/ver/er/ent/emp/zer)</td><td>БЕЗ ge-</td><td>verstehen → <b>verstanden</b></td></tr>
<tr><td>-ieren</td><td>БЕЗ ge-, ...-<span class="rule-hl">t</span></td><td>studieren → <b>studiert</b></td></tr>
</table>
<h3>haben или sein?</h3>
<div class="rule-box rule-green"><b>sein</b> — движение (gehen, fahren, fliegen) + изменение состояния (werden, sterben, aufwachen, einschlafen) + sein, bleiben</div>
<div class="rule-box rule-blue"><b>haben</b> — все остальные глаголы</div>
<h3>Примеры</h3>
<p>Ich <b>habe</b> Deutsch <span class="rule-hl">gelernt</span>. — Я учил немецкий.</p>
<p>Er <b>ist</b> nach Berlin <span class="rule-hl">gefahren</span>. — Он поехал в Берлин.</p>
<p>Sie <b>hat</b> den Film <span class="rule-hl">gesehen</span>. — Она посмотрела фильм.</p>
<p>Wir <b>sind</b> spät <span class="rule-hl">aufgewacht</span>. — Мы поздно проснулись.</p>`,
en: `
<h2>Partizip II — Perfect Tense</h2>
<div class="rule-formula">haben/sein + <span class="rule-hl">Partizip II</span></div>
<table class="rule-table">
<tr><th>Type</th><th>Pattern</th><th>Example</th></tr>
<tr><td>Regular</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">t</span></td><td>machen → <b>ge</b>mach<b>t</b></td></tr>
<tr><td>Irregular</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">en</span></td><td>gehen → <b>ge</b>gang<b>en</b></td></tr>
<tr><td>Separable</td><td>Prefix-<span class="rule-hl">ge</span>-...-t/en</td><td>aufmachen → <b>aufge</b>mach<b>t</b></td></tr>
<tr><td>Inseparable (be/ver/er/ent/emp/zer)</td><td>NO ge-</td><td>verstehen → <b>verstanden</b></td></tr>
<tr><td>-ieren</td><td>NO ge-, ...-<span class="rule-hl">t</span></td><td>studieren → <b>studiert</b></td></tr>
</table>
<h3>haben or sein?</h3>
<div class="rule-box rule-green"><b>sein</b> — movement (gehen, fahren, fliegen) + change of state (werden, sterben, aufwachen, einschlafen) + sein, bleiben</div>
<div class="rule-box rule-blue"><b>haben</b> — all other verbs</div>
<h3>Examples</h3>
<p>Ich <b>habe</b> Deutsch <span class="rule-hl">gelernt</span>. — I learned German.</p>
<p>Er <b>ist</b> nach Berlin <span class="rule-hl">gefahren</span>. — He went to Berlin.</p>
<p>Sie <b>hat</b> den Film <span class="rule-hl">gesehen</span>. — She watched the movie.</p>
<p>Wir <b>sind</b> spät <span class="rule-hl">aufgewacht</span>. — We woke up late.</p>`,
tr: `
<h2>Partizip II — Perfekt (Geçmiş Zaman)</h2>
<div class="rule-formula">haben/sein + <span class="rule-hl">Partizip II</span></div>
<table class="rule-table">
<tr><th>Tip</th><th>Formül</th><th>Örnek</th></tr>
<tr><td>Düzenli</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">t</span></td><td>machen → <b>ge</b>mach<b>t</b></td></tr>
<tr><td>Düzensiz</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">en</span></td><td>gehen → <b>ge</b>gang<b>en</b></td></tr>
<tr><td>Ayrılabilir</td><td>Önek-<span class="rule-hl">ge</span>-...-t/en</td><td>aufmachen → <b>aufge</b>mach<b>t</b></td></tr>
<tr><td>Ayrılmaz (be/ver/er/ent/emp/zer)</td><td>ge- YOK</td><td>verstehen → <b>verstanden</b></td></tr>
<tr><td>-ieren</td><td>ge- YOK, ...-<span class="rule-hl">t</span></td><td>studieren → <b>studiert</b></td></tr>
</table>
<h3>haben mi sein mi?</h3>
<div class="rule-box rule-green"><b>sein</b> — hareket (gehen, fahren, fliegen) + durum değişikliği (werden, sterben, aufwachen, einschlafen) + sein, bleiben</div>
<div class="rule-box rule-blue"><b>haben</b> — diğer tüm fiiller</div>
<h3>Örnekler</h3>
<p>Ich <b>habe</b> Deutsch <span class="rule-hl">gelernt</span>. — Almanca öğrendim.</p>
<p>Er <b>ist</b> nach Berlin <span class="rule-hl">gefahren</span>. — Berlin'e gitti.</p>
<p>Sie <b>hat</b> den Film <span class="rule-hl">gesehen</span>. — Filmi izledi.</p>
<p>Wir <b>sind</b> spät <span class="rule-hl">aufgewacht</span>. — Geç uyandık.</p>`,
ar: `
<h2>Partizip II — زمن الماضي</h2>
<div class="rule-formula">haben/sein + <span class="rule-hl">Partizip II</span></div>
<table class="rule-table">
<tr><th>النوع</th><th>الصيغة</th><th>مثال</th></tr>
<tr><td>منتظم</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">t</span></td><td>machen → <b>ge</b>mach<b>t</b></td></tr>
<tr><td>غير منتظم</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">en</span></td><td>gehen → <b>ge</b>gang<b>en</b></td></tr>
<tr><td>قابل للفصل</td><td>البادئة-<span class="rule-hl">ge</span>-...-t/en</td><td>aufmachen → <b>aufge</b>mach<b>t</b></td></tr>
<tr><td>غير قابل للفصل (be/ver/er/ent/emp/zer)</td><td>بدون ge-</td><td>verstehen → <b>verstanden</b></td></tr>
<tr><td>-ieren</td><td>بدون ge-، ...-<span class="rule-hl">t</span></td><td>studieren → <b>studiert</b></td></tr>
</table>
<h3>haben أم sein؟</h3>
<div class="rule-box rule-green"><b>sein</b> — الحركة (gehen, fahren, fliegen) + تغير الحالة (werden, sterben, aufwachen, einschlafen) + sein, bleiben</div>
<div class="rule-box rule-blue"><b>haben</b> — جميع الأفعال الأخرى</div>
<h3>أمثلة</h3>
<p>Ich <b>habe</b> Deutsch <span class="rule-hl">gelernt</span>. — تعلمت الألمانية.</p>
<p>Er <b>ist</b> nach Berlin <span class="rule-hl">gefahren</span>. — ذهب إلى برلين.</p>
<p>Sie <b>hat</b> den Film <span class="rule-hl">gesehen</span>. — شاهدت الفيلم.</p>
<p>Wir <b>sind</b> spät <span class="rule-hl">aufgewacht</span>. — استيقظنا متأخرين.</p>`,
fa: `
<h2>Partizip II — گذشته کامل</h2>
<div class="rule-formula">haben/sein + <span class="rule-hl">Partizip II</span></div>
<table class="rule-table">
<tr><th>نوع</th><th>الگو</th><th>مثال</th></tr>
<tr><td>باقاعده</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">t</span></td><td>machen → <b>ge</b>mach<b>t</b></td></tr>
<tr><td>بی‌قاعده</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">en</span></td><td>gehen → <b>ge</b>gang<b>en</b></td></tr>
<tr><td>جداشدنی</td><td>پیشوند-<span class="rule-hl">ge</span>-...-t/en</td><td>aufmachen → <b>aufge</b>mach<b>t</b></td></tr>
<tr><td>جدانشدنی (be/ver/er/ent/emp/zer)</td><td>بدون ge-</td><td>verstehen → <b>verstanden</b></td></tr>
<tr><td>-ieren</td><td>بدون ge-، ...-<span class="rule-hl">t</span></td><td>studieren → <b>studiert</b></td></tr>
</table>
<h3>haben یا sein؟</h3>
<div class="rule-box rule-green"><b>sein</b> — حرکت (gehen, fahren, fliegen) + تغییر حالت (werden, sterben, aufwachen, einschlafen) + sein, bleiben</div>
<div class="rule-box rule-blue"><b>haben</b> — همه فعل‌های دیگر</div>
<h3>مثال‌ها</h3>
<p>Ich <b>habe</b> Deutsch <span class="rule-hl">gelernt</span>. — آلمانی یاد گرفتم.</p>
<p>Er <b>ist</b> nach Berlin <span class="rule-hl">gefahren</span>. — او به برلین رفت.</p>
<p>Sie <b>hat</b> den Film <span class="rule-hl">gesehen</span>. — او فیلم را دید.</p>
<p>Wir <b>sind</b> spät <span class="rule-hl">aufgewacht</span>. — ما دیر بیدار شدیم.</p>`,
vi: `
<h2>Partizip II — Thì hoàn thành</h2>
<div class="rule-formula">haben/sein + <span class="rule-hl">Partizip II</span></div>
<table class="rule-table">
<tr><th>Loại</th><th>Công thức</th><th>Ví dụ</th></tr>
<tr><td>Quy tắc</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">t</span></td><td>machen → <b>ge</b>mach<b>t</b></td></tr>
<tr><td>Bất quy tắc</td><td><span class="rule-hl">ge</span>-...-<span class="rule-hl">en</span></td><td>gehen → <b>ge</b>gang<b>en</b></td></tr>
<tr><td>Có thể tách</td><td>Tiền tố-<span class="rule-hl">ge</span>-...-t/en</td><td>aufmachen → <b>aufge</b>mach<b>t</b></td></tr>
<tr><td>Không tách (be/ver/er/ent/emp/zer)</td><td>KHÔNG ge-</td><td>verstehen → <b>verstanden</b></td></tr>
<tr><td>-ieren</td><td>KHÔNG ge-, ...-<span class="rule-hl">t</span></td><td>studieren → <b>studiert</b></td></tr>
</table>
<h3>haben hay sein?</h3>
<div class="rule-box rule-green"><b>sein</b> — chuyển động (gehen, fahren, fliegen) + thay đổi trạng thái (werden, sterben, aufwachen, einschlafen) + sein, bleiben</div>
<div class="rule-box rule-blue"><b>haben</b> — tất cả các động từ khác</div>
<h3>Ví dụ</h3>
<p>Ich <b>habe</b> Deutsch <span class="rule-hl">gelernt</span>. — Tôi đã học tiếng Đức.</p>
<p>Er <b>ist</b> nach Berlin <span class="rule-hl">gefahren</span>. — Anh ấy đã đi Berlin.</p>
<p>Sie <b>hat</b> den Film <span class="rule-hl">gesehen</span>. — Cô ấy đã xem phim.</p>
<p>Wir <b>sind</b> spät <span class="rule-hl">aufgewacht</span>. — Chúng tôi dậy muộn.</p>`
},

reflexive: {
de: `
<h2>Reflexive Verben</h2>
<div class="rule-formula">Subjekt + Verb + <span class="rule-hl">Reflexivpronomen</span></div>
<h3>Akkusativ-Reflexivpronomen</h3>
<table class="rule-table">
<tr><th>Person</th><th>Pronomen</th><th>Beispiel</th></tr>
<tr><td>ich</td><td><span class="rule-hl">mich</span></td><td>Ich wasche <b>mich</b></td></tr>
<tr><td>du</td><td><span class="rule-hl">dich</span></td><td>Du setzt <b>dich</b></td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl">sich</span></td><td>Er fühlt <b>sich</b> gut</td></tr>
<tr><td>wir</td><td><span class="rule-hl">uns</span></td><td>Wir freuen <b>uns</b></td></tr>
<tr><td>ihr</td><td><span class="rule-hl">euch</span></td><td>Ihr beeilt <b>euch</b></td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl">sich</span></td><td>Sie erinnern <b>sich</b></td></tr>
</table>
<h3>Dativ-Reflexivpronomen</h3>
<table class="rule-table">
<tr><th>Person</th><th>Pronomen</th><th>Beispiel</th></tr>
<tr><td>ich</td><td><span class="rule-hl2">mir</span></td><td>Ich stelle <b>mir</b> das vor</td></tr>
<tr><td>du</td><td><span class="rule-hl2">dir</span></td><td>Du merkst <b>dir</b> das</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl2">sich</span></td><td>Er wünscht <b>sich</b> ein Auto</td></tr>
<tr><td>wir</td><td><span class="rule-hl2">uns</span></td><td>Wir kaufen <b>uns</b> ein Eis</td></tr>
<tr><td>ihr</td><td><span class="rule-hl2">euch</span></td><td>Ihr sucht <b>euch</b> etwas aus</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl2">sich</span></td><td>Sie nehmen <b>sich</b> Zeit</td></tr>
</table>
<div class="rule-box rule-green"><b>Akkusativ</b> — wenn KEIN anderes Akkusativobjekt im Satz: Ich wasche <b>mich</b></div>
<div class="rule-box rule-blue"><b>Dativ</b> — wenn ein Akkusativobjekt vorhanden: Ich wasche <b>mir</b> die Hände</div>`,
ru: `
<h2>Возвратные глаголы</h2>
<div class="rule-formula">Подлежащее + Глагол + <span class="rule-hl">Возвратное местоимение</span></div>
<h3>Возвратное местоимение в Аккузативе</h3>
<table class="rule-table">
<tr><th>Лицо</th><th>Местоимение</th><th>Пример</th></tr>
<tr><td>ich</td><td><span class="rule-hl">mich</span></td><td>Ich wasche <b>mich</b> — Я моюсь</td></tr>
<tr><td>du</td><td><span class="rule-hl">dich</span></td><td>Du setzt <b>dich</b> — Ты садишься</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl">sich</span></td><td>Er fühlt <b>sich</b> gut</td></tr>
<tr><td>wir</td><td><span class="rule-hl">uns</span></td><td>Wir freuen <b>uns</b> — Мы радуемся</td></tr>
<tr><td>ihr</td><td><span class="rule-hl">euch</span></td><td>Ihr beeilt <b>euch</b> — Вы спешите</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl">sich</span></td><td>Sie erinnern <b>sich</b> — Они вспоминают</td></tr>
</table>
<h3>Возвратное местоимение в Дативе</h3>
<table class="rule-table">
<tr><th>Лицо</th><th>Местоимение</th><th>Пример</th></tr>
<tr><td>ich</td><td><span class="rule-hl2">mir</span></td><td>Ich stelle <b>mir</b> das vor — Я это представляю</td></tr>
<tr><td>du</td><td><span class="rule-hl2">dir</span></td><td>Du merkst <b>dir</b> das — Ты это запоминаешь</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl2">sich</span></td><td>Er wünscht <b>sich</b> ein Auto</td></tr>
<tr><td>wir</td><td><span class="rule-hl2">uns</span></td><td>Wir kaufen <b>uns</b> ein Eis</td></tr>
<tr><td>ihr</td><td><span class="rule-hl2">euch</span></td><td>Ihr sucht <b>euch</b> etwas aus</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl2">sich</span></td><td>Sie nehmen <b>sich</b> Zeit</td></tr>
</table>
<div class="rule-box rule-green"><b>Аккузатив</b> — когда в предложении НЕТ другого прямого дополнения: Ich wasche <b>mich</b></div>
<div class="rule-box rule-blue"><b>Датив</b> — когда есть другое прямое дополнение: Ich wasche <b>mir</b> die Hände (Я мою себе руки)</div>`,
en: `
<h2>Reflexive Verbs</h2>
<div class="rule-formula">Subject + Verb + <span class="rule-hl">Reflexive pronoun</span></div>
<h3>Accusative reflexive pronouns</h3>
<table class="rule-table">
<tr><th>Person</th><th>Pronoun</th><th>Example</th></tr>
<tr><td>ich</td><td><span class="rule-hl">mich</span></td><td>Ich wasche <b>mich</b> — I wash myself</td></tr>
<tr><td>du</td><td><span class="rule-hl">dich</span></td><td>Du setzt <b>dich</b> — You sit down</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl">sich</span></td><td>Er fühlt <b>sich</b> gut</td></tr>
<tr><td>wir</td><td><span class="rule-hl">uns</span></td><td>Wir freuen <b>uns</b> — We are happy</td></tr>
<tr><td>ihr</td><td><span class="rule-hl">euch</span></td><td>Ihr beeilt <b>euch</b> — You hurry</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl">sich</span></td><td>Sie erinnern <b>sich</b> — They remember</td></tr>
</table>
<h3>Dative reflexive pronouns</h3>
<table class="rule-table">
<tr><th>Person</th><th>Pronoun</th><th>Example</th></tr>
<tr><td>ich</td><td><span class="rule-hl2">mir</span></td><td>Ich stelle <b>mir</b> das vor — I imagine that</td></tr>
<tr><td>du</td><td><span class="rule-hl2">dir</span></td><td>Du merkst <b>dir</b> das — You memorize that</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl2">sich</span></td><td>Er wünscht <b>sich</b> ein Auto</td></tr>
<tr><td>wir</td><td><span class="rule-hl2">uns</span></td><td>Wir kaufen <b>uns</b> ein Eis</td></tr>
<tr><td>ihr</td><td><span class="rule-hl2">euch</span></td><td>Ihr sucht <b>euch</b> etwas aus</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl2">sich</span></td><td>Sie nehmen <b>sich</b> Zeit</td></tr>
</table>
<div class="rule-box rule-green"><b>Accusative</b> — when there is NO other accusative object in the sentence: Ich wasche <b>mich</b></div>
<div class="rule-box rule-blue"><b>Dative</b> — when an accusative object is present: Ich wasche <b>mir</b> die Hände (I wash my hands)</div>`,
tr: `
<h2>Dönüşlü Fiiller</h2>
<div class="rule-formula">Özne + Fiil + <span class="rule-hl">Dönüşlü zamir</span></div>
<h3>Akkusativ dönüşlü zamirler</h3>
<table class="rule-table">
<tr><th>Kişi</th><th>Zamir</th><th>Örnek</th></tr>
<tr><td>ich</td><td><span class="rule-hl">mich</span></td><td>Ich wasche <b>mich</b> — Yıkanıyorum</td></tr>
<tr><td>du</td><td><span class="rule-hl">dich</span></td><td>Du setzt <b>dich</b> — Oturuyorsun</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl">sich</span></td><td>Er fühlt <b>sich</b> gut</td></tr>
<tr><td>wir</td><td><span class="rule-hl">uns</span></td><td>Wir freuen <b>uns</b> — Seviniyoruz</td></tr>
<tr><td>ihr</td><td><span class="rule-hl">euch</span></td><td>Ihr beeilt <b>euch</b> — Acele ediyorsunuz</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl">sich</span></td><td>Sie erinnern <b>sich</b> — Hatırlıyorlar</td></tr>
</table>
<h3>Dativ dönüşlü zamirler</h3>
<table class="rule-table">
<tr><th>Kişi</th><th>Zamir</th><th>Örnek</th></tr>
<tr><td>ich</td><td><span class="rule-hl2">mir</span></td><td>Ich stelle <b>mir</b> das vor — Bunu hayal ediyorum</td></tr>
<tr><td>du</td><td><span class="rule-hl2">dir</span></td><td>Du merkst <b>dir</b> das — Bunu aklında tutuyorsun</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl2">sich</span></td><td>Er wünscht <b>sich</b> ein Auto</td></tr>
<tr><td>wir</td><td><span class="rule-hl2">uns</span></td><td>Wir kaufen <b>uns</b> ein Eis</td></tr>
<tr><td>ihr</td><td><span class="rule-hl2">euch</span></td><td>Ihr sucht <b>euch</b> etwas aus</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl2">sich</span></td><td>Sie nehmen <b>sich</b> Zeit</td></tr>
</table>
<div class="rule-box rule-green"><b>Akkusativ</b> — cümlede başka Akkusativ nesnesi YOKSA: Ich wasche <b>mich</b></div>
<div class="rule-box rule-blue"><b>Dativ</b> — Akkusativ nesnesi varsa: Ich wasche <b>mir</b> die Hände (Ellerimi yıkıyorum)</div>`,
ar: `
<h2>الأفعال الانعكاسية</h2>
<div class="rule-formula">الفاعل + الفعل + <span class="rule-hl">ضمير انعكاسي</span></div>
<h3>الضمير الانعكاسي في حالة النصب (Akkusativ)</h3>
<table class="rule-table">
<tr><th>الضمير</th><th>الصيغة</th><th>مثال</th></tr>
<tr><td>ich</td><td><span class="rule-hl">mich</span></td><td>Ich wasche <b>mich</b> — أغسل نفسي</td></tr>
<tr><td>du</td><td><span class="rule-hl">dich</span></td><td>Du setzt <b>dich</b> — أنت تجلس</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl">sich</span></td><td>Er fühlt <b>sich</b> gut</td></tr>
<tr><td>wir</td><td><span class="rule-hl">uns</span></td><td>Wir freuen <b>uns</b> — نحن نفرح</td></tr>
<tr><td>ihr</td><td><span class="rule-hl">euch</span></td><td>Ihr beeilt <b>euch</b></td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl">sich</span></td><td>Sie erinnern <b>sich</b></td></tr>
</table>
<h3>الضمير الانعكاسي في حالة الجر (Dativ)</h3>
<table class="rule-table">
<tr><th>الضمير</th><th>الصيغة</th><th>مثال</th></tr>
<tr><td>ich</td><td><span class="rule-hl2">mir</span></td><td>Ich stelle <b>mir</b> das vor — أتخيل ذلك</td></tr>
<tr><td>du</td><td><span class="rule-hl2">dir</span></td><td>Du merkst <b>dir</b> das</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl2">sich</span></td><td>Er wünscht <b>sich</b> ein Auto</td></tr>
<tr><td>wir</td><td><span class="rule-hl2">uns</span></td><td>Wir kaufen <b>uns</b> ein Eis</td></tr>
<tr><td>ihr</td><td><span class="rule-hl2">euch</span></td><td>Ihr sucht <b>euch</b> etwas aus</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl2">sich</span></td><td>Sie nehmen <b>sich</b> Zeit</td></tr>
</table>
<div class="rule-box rule-green"><b>Akkusativ</b> — عندما لا يوجد مفعول مباشر آخر في الجملة: Ich wasche <b>mich</b></div>
<div class="rule-box rule-blue"><b>Dativ</b> — عندما يوجد مفعول مباشر: Ich wasche <b>mir</b> die Hände (أغسل يديّ)</div>`,
fa: `
<h2>افعال انعکاسی</h2>
<div class="rule-formula">فاعل + فعل + <span class="rule-hl">ضمیر انعکاسی</span></div>
<h3>ضمایر انعکاسی در حالت مفعولی (Akkusativ)</h3>
<table class="rule-table">
<tr><th>شخص</th><th>ضمیر</th><th>مثال</th></tr>
<tr><td>ich</td><td><span class="rule-hl">mich</span></td><td>Ich wasche <b>mich</b> — خودم را می‌شویم</td></tr>
<tr><td>du</td><td><span class="rule-hl">dich</span></td><td>Du setzt <b>dich</b> — می‌نشینی</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl">sich</span></td><td>Er fühlt <b>sich</b> gut</td></tr>
<tr><td>wir</td><td><span class="rule-hl">uns</span></td><td>Wir freuen <b>uns</b> — خوشحال می‌شویم</td></tr>
<tr><td>ihr</td><td><span class="rule-hl">euch</span></td><td>Ihr beeilt <b>euch</b></td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl">sich</span></td><td>Sie erinnern <b>sich</b></td></tr>
</table>
<h3>ضمایر انعکاسی در حالت مفعول غیرمستقیم (Dativ)</h3>
<table class="rule-table">
<tr><th>شخص</th><th>ضمیر</th><th>مثال</th></tr>
<tr><td>ich</td><td><span class="rule-hl2">mir</span></td><td>Ich stelle <b>mir</b> das vor — آن را تصور می‌کنم</td></tr>
<tr><td>du</td><td><span class="rule-hl2">dir</span></td><td>Du merkst <b>dir</b> das</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl2">sich</span></td><td>Er wünscht <b>sich</b> ein Auto</td></tr>
<tr><td>wir</td><td><span class="rule-hl2">uns</span></td><td>Wir kaufen <b>uns</b> ein Eis</td></tr>
<tr><td>ihr</td><td><span class="rule-hl2">euch</span></td><td>Ihr sucht <b>euch</b> etwas aus</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl2">sich</span></td><td>Sie nehmen <b>sich</b> Zeit</td></tr>
</table>
<div class="rule-box rule-green"><b>Akkusativ</b> — وقتی مفعول مستقیم دیگری در جمله نباشد: Ich wasche <b>mich</b></div>
<div class="rule-box rule-blue"><b>Dativ</b> — وقتی مفعول مستقیم وجود دارد: Ich wasche <b>mir</b> die Hände (دست‌هایم را می‌شویم)</div>`,
vi: `
<h2>Động từ phản thân</h2>
<div class="rule-formula">Chủ ngữ + Động từ + <span class="rule-hl">Đại từ phản thân</span></div>
<h3>Đại từ phản thân Akkusativ</h3>
<table class="rule-table">
<tr><th>Ngôi</th><th>Đại từ</th><th>Ví dụ</th></tr>
<tr><td>ich</td><td><span class="rule-hl">mich</span></td><td>Ich wasche <b>mich</b> — Tôi tự tắm</td></tr>
<tr><td>du</td><td><span class="rule-hl">dich</span></td><td>Du setzt <b>dich</b> — Bạn ngồi xuống</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl">sich</span></td><td>Er fühlt <b>sich</b> gut</td></tr>
<tr><td>wir</td><td><span class="rule-hl">uns</span></td><td>Wir freuen <b>uns</b> — Chúng tôi vui mừng</td></tr>
<tr><td>ihr</td><td><span class="rule-hl">euch</span></td><td>Ihr beeilt <b>euch</b> — Các bạn vội vàng</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl">sich</span></td><td>Sie erinnern <b>sich</b> — Họ nhớ lại</td></tr>
</table>
<h3>Đại từ phản thân Dativ</h3>
<table class="rule-table">
<tr><th>Ngôi</th><th>Đại từ</th><th>Ví dụ</th></tr>
<tr><td>ich</td><td><span class="rule-hl2">mir</span></td><td>Ich stelle <b>mir</b> das vor — Tôi hình dung điều đó</td></tr>
<tr><td>du</td><td><span class="rule-hl2">dir</span></td><td>Du merkst <b>dir</b> das</td></tr>
<tr><td>er/sie/es</td><td><span class="rule-hl2">sich</span></td><td>Er wünscht <b>sich</b> ein Auto</td></tr>
<tr><td>wir</td><td><span class="rule-hl2">uns</span></td><td>Wir kaufen <b>uns</b> ein Eis</td></tr>
<tr><td>ihr</td><td><span class="rule-hl2">euch</span></td><td>Ihr sucht <b>euch</b> etwas aus</td></tr>
<tr><td>sie/Sie</td><td><span class="rule-hl2">sich</span></td><td>Sie nehmen <b>sich</b> Zeit</td></tr>
</table>
<div class="rule-box rule-green"><b>Akkusativ</b> — khi KHÔNG có tân ngữ trực tiếp khác trong câu: Ich wasche <b>mich</b></div>
<div class="rule-box rule-blue"><b>Dativ</b> — khi có tân ngữ trực tiếp: Ich wasche <b>mir</b> die Hände (Tôi rửa tay)</div>`
},

sentences: {
de: `
<h2>Satzbau — Wortstellung</h2>
<h3>Hauptsatz</h3>
<div class="rule-formula">Subjekt + <span class="rule-hl">Verb (Pos. 2)</span> + Objekte</div>
<p>Ich <span class="rule-hl">lerne</span> Deutsch. | Morgen <span class="rule-hl">gehe</span> ich zur Schule.</p>

<h3>TEKAMOLO</h3>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal → <span class="rule-hl2">Ka</span>usal → <span class="rule-hl3">Mo</span>dal → <span class="rule-hl4">Lo</span>kal</div>
<p>Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">mit dem Zug</span> <span class="rule-hl4">nach Berlin</span>.</p>

<h3>Nebensätze — Verb am Ende!</h3>
<table class="rule-table">
<tr><th>Konjunktion</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td><b>weil</b></td><td>denn (Grund)</td><td>..., weil er müde <span class="rule-hl">ist</span></td></tr>
<tr><td><b>dass</b></td><td>Objektsatz</td><td>..., dass er Deutsch <span class="rule-hl">lernt</span></td></tr>
<tr><td><b>wenn</b></td><td>Bedingung</td><td>Wenn es <span class="rule-hl">regnet</span>, ...</td></tr>
<tr><td><b>als</b></td><td>Vergangenheit</td><td>Als ich jung <span class="rule-hl">war</span>, ...</td></tr>
<tr><td><b>ob</b></td><td>indirekte Frage</td><td>..., ob er <span class="rule-hl">kommt</span></td></tr>
<tr><td><b>obwohl</b></td><td>Gegensatz</td><td>..., obwohl es kalt <span class="rule-hl">ist</span></td></tr>
<tr><td><b>damit</b></td><td>Zweck</td><td>..., damit alle es <span class="rule-hl">verstehen</span></td></tr>
<tr><td><b>nachdem</b></td><td>Zeit (danach)</td><td>Nachdem er gegessen <span class="rule-hl">hatte</span>, ...</td></tr>
<tr><td><b>bevor</b></td><td>Zeit (davor)</td><td>Bevor du <span class="rule-hl">gehst</span>, ...</td></tr>
<tr><td><b>während</b></td><td>Gleichzeitigkeit</td><td>Während er <span class="rule-hl">kocht</span>, ...</td></tr>
</table>

<h3>Konnektoren (Hauptsatz!)</h3>
<table class="rule-table">
<tr><th>Konnektor</th><th>Wortstellung</th></tr>
<tr><td><b>denn</b></td><td>Normal: S+V+O</td></tr>
<tr><td><b>aber</b></td><td>Normal: S+V+O</td></tr>
<tr><td><b>deshalb</b></td><td>Inversion: V+S+O</td></tr>
<tr><td><b>trotzdem</b></td><td>Inversion: V+S+O</td></tr>
</table>

<h3>Passiv</h3>
<div class="rule-formula">werden + <span class="rule-hl">Partizip II</span></div>
<p>Das Haus <b>wird</b> <span class="rule-hl">gebaut</span>. (Präsens)</p>
<p>Das Haus <b>wurde</b> <span class="rule-hl">gebaut</span>. (Präteritum)</p>
<p>Das Haus <b>ist</b> <span class="rule-hl">gebaut</span> <b>worden</b>. (Perfekt)</p>

<h3>Konjunktiv II</h3>
<div class="rule-formula">würde + Infinitiv / wäre / hätte</div>
<p>Wenn ich reich <b>wäre</b>, <b>würde</b> ich reisen.</p>
<p>Wenn er Zeit <b>hätte</b>, <b>würde</b> er kommen.</p>`,
ru: `
<h2>Построение предложений — порядок слов</h2>
<h3>Главное предложение</h3>
<div class="rule-formula">Подлежащее + <span class="rule-hl">Глагол (позиция 2)</span> + Дополнения</div>
<p>Ich <span class="rule-hl">lerne</span> Deutsch. | Morgen <span class="rule-hl">gehe</span> ich zur Schule.</p>

<h3>TEKAMOLO — порядок обстоятельств</h3>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal (время) → <span class="rule-hl2">Ka</span>usal (причина) → <span class="rule-hl3">Mo</span>dal (образ) → <span class="rule-hl4">Lo</span>kal (место)</div>
<p>Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">mit dem Zug</span> <span class="rule-hl4">nach Berlin</span>. — Я еду завтра из-за работы на поезде в Берлин.</p>

<h3>Придаточные предложения — глагол в конце!</h3>
<table class="rule-table">
<tr><th>Союз</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>weil</b></td><td>потому что</td><td>..., weil er müde <span class="rule-hl">ist</span></td></tr>
<tr><td><b>dass</b></td><td>что</td><td>..., dass er Deutsch <span class="rule-hl">lernt</span></td></tr>
<tr><td><b>wenn</b></td><td>если/когда</td><td>Wenn es <span class="rule-hl">regnet</span>, ...</td></tr>
<tr><td><b>als</b></td><td>когда (прошлое)</td><td>Als ich jung <span class="rule-hl">war</span>, ...</td></tr>
<tr><td><b>ob</b></td><td>ли (косв. вопрос)</td><td>..., ob er <span class="rule-hl">kommt</span></td></tr>
<tr><td><b>obwohl</b></td><td>хотя</td><td>..., obwohl es kalt <span class="rule-hl">ist</span></td></tr>
<tr><td><b>damit</b></td><td>чтобы</td><td>..., damit alle es <span class="rule-hl">verstehen</span></td></tr>
<tr><td><b>nachdem</b></td><td>после того как</td><td>Nachdem er gegessen <span class="rule-hl">hatte</span>, ...</td></tr>
<tr><td><b>bevor</b></td><td>прежде чем</td><td>Bevor du <span class="rule-hl">gehst</span>, ...</td></tr>
<tr><td><b>während</b></td><td>пока</td><td>Während er <span class="rule-hl">kocht</span>, ...</td></tr>
</table>

<h3>Коннекторы (главное предложение!)</h3>
<table class="rule-table">
<tr><th>Коннектор</th><th>Порядок слов</th></tr>
<tr><td><b>denn</b> (потому что)</td><td>Обычный: S+V+O</td></tr>
<tr><td><b>aber</b> (но)</td><td>Обычный: S+V+O</td></tr>
<tr><td><b>deshalb</b> (поэтому)</td><td>Инверсия: V+S+O</td></tr>
<tr><td><b>trotzdem</b> (тем не менее)</td><td>Инверсия: V+S+O</td></tr>
</table>

<h3>Пассив</h3>
<div class="rule-formula">werden + <span class="rule-hl">Partizip II</span></div>
<p>Das Haus <b>wird</b> <span class="rule-hl">gebaut</span>. — Дом строится. (Präsens)</p>
<p>Das Haus <b>wurde</b> <span class="rule-hl">gebaut</span>. — Дом строился. (Präteritum)</p>
<p>Das Haus <b>ist</b> <span class="rule-hl">gebaut</span> <b>worden</b>. — Дом был построен. (Perfekt)</p>

<h3>Konjunktiv II — сослагательное</h3>
<div class="rule-formula">würde + Infinitiv / wäre / hätte</div>
<p>Wenn ich reich <b>wäre</b>, <b>würde</b> ich reisen. — Если бы я был богат, я бы путешествовал.</p>
<p>Wenn er Zeit <b>hätte</b>, <b>würde</b> er kommen. — Если бы у него было время, он бы пришёл.</p>`,
en: `
<h2>Sentence structure — Word order</h2>
<h3>Main clause</h3>
<div class="rule-formula">Subject + <span class="rule-hl">Verb (Pos. 2)</span> + Objects</div>
<p>Ich <span class="rule-hl">lerne</span> Deutsch. | Morgen <span class="rule-hl">gehe</span> ich zur Schule.</p>

<h3>TEKAMOLO — order of adverbials</h3>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal (when) → <span class="rule-hl2">Ka</span>usal (why) → <span class="rule-hl3">Mo</span>dal (how) → <span class="rule-hl4">Lo</span>kal (where)</div>
<p>Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">mit dem Zug</span> <span class="rule-hl4">nach Berlin</span>. — Tomorrow I'm going to Berlin by train because of work.</p>

<h3>Subordinate clauses — verb at the end!</h3>
<table class="rule-table">
<tr><th>Conjunction</th><th>Meaning</th><th>Example</th></tr>
<tr><td><b>weil</b></td><td>because</td><td>..., weil er müde <span class="rule-hl">ist</span></td></tr>
<tr><td><b>dass</b></td><td>that</td><td>..., dass er Deutsch <span class="rule-hl">lernt</span></td></tr>
<tr><td><b>wenn</b></td><td>if/when</td><td>Wenn es <span class="rule-hl">regnet</span>, ...</td></tr>
<tr><td><b>als</b></td><td>when (past)</td><td>Als ich jung <span class="rule-hl">war</span>, ...</td></tr>
<tr><td><b>ob</b></td><td>whether</td><td>..., ob er <span class="rule-hl">kommt</span></td></tr>
<tr><td><b>obwohl</b></td><td>although</td><td>..., obwohl es kalt <span class="rule-hl">ist</span></td></tr>
<tr><td><b>damit</b></td><td>so that</td><td>..., damit alle es <span class="rule-hl">verstehen</span></td></tr>
<tr><td><b>nachdem</b></td><td>after</td><td>Nachdem er gegessen <span class="rule-hl">hatte</span>, ...</td></tr>
<tr><td><b>bevor</b></td><td>before</td><td>Bevor du <span class="rule-hl">gehst</span>, ...</td></tr>
<tr><td><b>während</b></td><td>while</td><td>Während er <span class="rule-hl">kocht</span>, ...</td></tr>
</table>

<h3>Connectors (main clause!)</h3>
<table class="rule-table">
<tr><th>Connector</th><th>Word order</th></tr>
<tr><td><b>denn</b> (because)</td><td>Normal: S+V+O</td></tr>
<tr><td><b>aber</b> (but)</td><td>Normal: S+V+O</td></tr>
<tr><td><b>deshalb</b> (therefore)</td><td>Inversion: V+S+O</td></tr>
<tr><td><b>trotzdem</b> (nevertheless)</td><td>Inversion: V+S+O</td></tr>
</table>

<h3>Passive</h3>
<div class="rule-formula">werden + <span class="rule-hl">Partizip II</span></div>
<p>Das Haus <b>wird</b> <span class="rule-hl">gebaut</span>. — The house is being built. (Present)</p>
<p>Das Haus <b>wurde</b> <span class="rule-hl">gebaut</span>. — The house was built. (Past)</p>
<p>Das Haus <b>ist</b> <span class="rule-hl">gebaut</span> <b>worden</b>. — The house has been built. (Perfect)</p>

<h3>Konjunktiv II — subjunctive</h3>
<div class="rule-formula">würde + Infinitive / wäre / hätte</div>
<p>Wenn ich reich <b>wäre</b>, <b>würde</b> ich reisen. — If I were rich, I would travel.</p>
<p>Wenn er Zeit <b>hätte</b>, <b>würde</b> er kommen. — If he had time, he would come.</p>`,
tr: `
<h2>Cümle yapısı — Sözcük düzeni</h2>
<h3>Ana cümle</h3>
<div class="rule-formula">Özne + <span class="rule-hl">Fiil (2. pozisyon)</span> + Nesneler</div>
<p>Ich <span class="rule-hl">lerne</span> Deutsch. | Morgen <span class="rule-hl">gehe</span> ich zur Schule.</p>

<h3>TEKAMOLO — zarf sıralaması</h3>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal (ne zaman) → <span class="rule-hl2">Ka</span>usal (neden) → <span class="rule-hl3">Mo</span>dal (nasıl) → <span class="rule-hl4">Lo</span>kal (nerede)</div>
<p>Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">mit dem Zug</span> <span class="rule-hl4">nach Berlin</span>. — Yarın iş nedeniyle trenle Berlin'e gidiyorum.</p>

<h3>Yan cümleler — fiil sonda!</h3>
<table class="rule-table">
<tr><th>Bağlaç</th><th>Anlam</th><th>Örnek</th></tr>
<tr><td><b>weil</b></td><td>çünkü</td><td>..., weil er müde <span class="rule-hl">ist</span></td></tr>
<tr><td><b>dass</b></td><td>ki</td><td>..., dass er Deutsch <span class="rule-hl">lernt</span></td></tr>
<tr><td><b>wenn</b></td><td>eğer/-dığında</td><td>Wenn es <span class="rule-hl">regnet</span>, ...</td></tr>
<tr><td><b>als</b></td><td>-dığı zaman (geçmiş)</td><td>Als ich jung <span class="rule-hl">war</span>, ...</td></tr>
<tr><td><b>ob</b></td><td>-ıp -madığı</td><td>..., ob er <span class="rule-hl">kommt</span></td></tr>
<tr><td><b>obwohl</b></td><td>her ne kadar</td><td>..., obwohl es kalt <span class="rule-hl">ist</span></td></tr>
<tr><td><b>damit</b></td><td>için</td><td>..., damit alle es <span class="rule-hl">verstehen</span></td></tr>
<tr><td><b>nachdem</b></td><td>-dıktan sonra</td><td>Nachdem er gegessen <span class="rule-hl">hatte</span>, ...</td></tr>
<tr><td><b>bevor</b></td><td>-meden önce</td><td>Bevor du <span class="rule-hl">gehst</span>, ...</td></tr>
<tr><td><b>während</b></td><td>-iken</td><td>Während er <span class="rule-hl">kocht</span>, ...</td></tr>
</table>

<h3>Bağlayıcılar (ana cümle!)</h3>
<table class="rule-table">
<tr><th>Bağlayıcı</th><th>Sözcük düzeni</th></tr>
<tr><td><b>denn</b> (çünkü)</td><td>Normal: S+V+O</td></tr>
<tr><td><b>aber</b> (ama)</td><td>Normal: S+V+O</td></tr>
<tr><td><b>deshalb</b> (bu yüzden)</td><td>Devrik: V+S+O</td></tr>
<tr><td><b>trotzdem</b> (yine de)</td><td>Devrik: V+S+O</td></tr>
</table>

<h3>Edilgen</h3>
<div class="rule-formula">werden + <span class="rule-hl">Partizip II</span></div>
<p>Das Haus <b>wird</b> <span class="rule-hl">gebaut</span>. — Ev inşa ediliyor. (Şimdiki)</p>
<p>Das Haus <b>wurde</b> <span class="rule-hl">gebaut</span>. — Ev inşa edildi. (Geçmiş)</p>
<p>Das Haus <b>ist</b> <span class="rule-hl">gebaut</span> <b>worden</b>. — Ev inşa edilmiş. (Perfekt)</p>

<h3>Konjunktiv II — dilek kipi</h3>
<div class="rule-formula">würde + Mastar / wäre / hätte</div>
<p>Wenn ich reich <b>wäre</b>, <b>würde</b> ich reisen. — Zengin olsaydım seyahat ederdim.</p>
<p>Wenn er Zeit <b>hätte</b>, <b>würde</b> er kommen. — Vakti olsaydı gelirdi.</p>`,
ar: `
<h2>بناء الجملة — ترتيب الكلمات</h2>
<h3>الجملة الرئيسية</h3>
<div class="rule-formula">الفاعل + <span class="rule-hl">الفعل (المركز 2)</span> + المفاعيل</div>
<p>Ich <span class="rule-hl">lerne</span> Deutsch. | Morgen <span class="rule-hl">gehe</span> ich zur Schule.</p>

<h3>TEKAMOLO — ترتيب الظروف</h3>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal (الزمن) → <span class="rule-hl2">Ka</span>usal (السبب) → <span class="rule-hl3">Mo</span>dal (الكيفية) → <span class="rule-hl4">Lo</span>kal (المكان)</div>
<p>Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">mit dem Zug</span> <span class="rule-hl4">nach Berlin</span>. — غداً سأسافر بالقطار إلى برلين بسبب العمل.</p>

<h3>الجمل التابعة — الفعل في النهاية!</h3>
<table class="rule-table">
<tr><th>أداة</th><th>المعنى</th><th>مثال</th></tr>
<tr><td><b>weil</b></td><td>لأن</td><td>..., weil er müde <span class="rule-hl">ist</span></td></tr>
<tr><td><b>dass</b></td><td>أن</td><td>..., dass er Deutsch <span class="rule-hl">lernt</span></td></tr>
<tr><td><b>wenn</b></td><td>إذا/عندما</td><td>Wenn es <span class="rule-hl">regnet</span>, ...</td></tr>
<tr><td><b>als</b></td><td>عندما (ماضي)</td><td>Als ich jung <span class="rule-hl">war</span>, ...</td></tr>
<tr><td><b>ob</b></td><td>إذا كان</td><td>..., ob er <span class="rule-hl">kommt</span></td></tr>
<tr><td><b>obwohl</b></td><td>رغم أن</td><td>..., obwohl es kalt <span class="rule-hl">ist</span></td></tr>
<tr><td><b>damit</b></td><td>لكي</td><td>..., damit alle es <span class="rule-hl">verstehen</span></td></tr>
<tr><td><b>nachdem</b></td><td>بعد أن</td><td>Nachdem er gegessen <span class="rule-hl">hatte</span>, ...</td></tr>
<tr><td><b>bevor</b></td><td>قبل أن</td><td>Bevor du <span class="rule-hl">gehst</span>, ...</td></tr>
<tr><td><b>während</b></td><td>بينما</td><td>Während er <span class="rule-hl">kocht</span>, ...</td></tr>
</table>

<h3>الروابط (الجملة الرئيسية!)</h3>
<table class="rule-table">
<tr><th>الرابط</th><th>ترتيب الكلمات</th></tr>
<tr><td><b>denn</b> (لأن)</td><td>عادي: S+V+O</td></tr>
<tr><td><b>aber</b> (لكن)</td><td>عادي: S+V+O</td></tr>
<tr><td><b>deshalb</b> (لذلك)</td><td>قلب: V+S+O</td></tr>
<tr><td><b>trotzdem</b> (ومع ذلك)</td><td>قلب: V+S+O</td></tr>
</table>

<h3>المبني للمجهول</h3>
<div class="rule-formula">werden + <span class="rule-hl">Partizip II</span></div>
<p>Das Haus <b>wird</b> <span class="rule-hl">gebaut</span>. — البيت يُبنى. (مضارع)</p>
<p>Das Haus <b>wurde</b> <span class="rule-hl">gebaut</span>. — البيت بُني. (ماضي)</p>
<p>Das Haus <b>ist</b> <span class="rule-hl">gebaut</span> <b>worden</b>. — البيت قد بُني. (تام)</p>

<h3>Konjunktiv II — الشرطي</h3>
<div class="rule-formula">würde + المصدر / wäre / hätte</div>
<p>Wenn ich reich <b>wäre</b>, <b>würde</b> ich reisen. — لو كنت غنياً، لسافرت.</p>
<p>Wenn er Zeit <b>hätte</b>, <b>würde</b> er kommen. — لو كان لديه وقت، لجاء.</p>`,
fa: `
<h2>ساختار جمله — ترتیب کلمات</h2>
<h3>جملهٔ اصلی</h3>
<div class="rule-formula">فاعل + <span class="rule-hl">فعل (جایگاه ۲)</span> + مفعول‌ها</div>
<p>Ich <span class="rule-hl">lerne</span> Deutsch. | Morgen <span class="rule-hl">gehe</span> ich zur Schule.</p>

<h3>TEKAMOLO — ترتیب قیدها</h3>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal (زمان) → <span class="rule-hl2">Ka</span>usal (علت) → <span class="rule-hl3">Mo</span>dal (چگونگی) → <span class="rule-hl4">Lo</span>kal (مکان)</div>
<p>Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">mit dem Zug</span> <span class="rule-hl4">nach Berlin</span>. — فردا به خاطر کار با قطار به برلین می‌روم.</p>

<h3>جمله‌های پیرو — فعل در انتها!</h3>
<table class="rule-table">
<tr><th>حرف ربط</th><th>معنی</th><th>مثال</th></tr>
<tr><td><b>weil</b></td><td>چون</td><td>..., weil er müde <span class="rule-hl">ist</span></td></tr>
<tr><td><b>dass</b></td><td>که</td><td>..., dass er Deutsch <span class="rule-hl">lernt</span></td></tr>
<tr><td><b>wenn</b></td><td>اگر/وقتی</td><td>Wenn es <span class="rule-hl">regnet</span>, ...</td></tr>
<tr><td><b>als</b></td><td>وقتی (گذشته)</td><td>Als ich jung <span class="rule-hl">war</span>, ...</td></tr>
<tr><td><b>ob</b></td><td>آیا</td><td>..., ob er <span class="rule-hl">kommt</span></td></tr>
<tr><td><b>obwohl</b></td><td>گرچه</td><td>..., obwohl es kalt <span class="rule-hl">ist</span></td></tr>
<tr><td><b>damit</b></td><td>تا اینکه</td><td>..., damit alle es <span class="rule-hl">verstehen</span></td></tr>
<tr><td><b>nachdem</b></td><td>بعد از اینکه</td><td>Nachdem er gegessen <span class="rule-hl">hatte</span>, ...</td></tr>
<tr><td><b>bevor</b></td><td>قبل از اینکه</td><td>Bevor du <span class="rule-hl">gehst</span>, ...</td></tr>
<tr><td><b>während</b></td><td>در حالی که</td><td>Während er <span class="rule-hl">kocht</span>, ...</td></tr>
</table>

<h3>رابط‌ها (جملهٔ اصلی!)</h3>
<table class="rule-table">
<tr><th>رابط</th><th>ترتیب کلمات</th></tr>
<tr><td><b>denn</b> (زیرا)</td><td>عادی: S+V+O</td></tr>
<tr><td><b>aber</b> (اما)</td><td>عادی: S+V+O</td></tr>
<tr><td><b>deshalb</b> (بنابراین)</td><td>معکوس: V+S+O</td></tr>
<tr><td><b>trotzdem</b> (با این حال)</td><td>معکوس: V+S+O</td></tr>
</table>

<h3>مجهول</h3>
<div class="rule-formula">werden + <span class="rule-hl">Partizip II</span></div>
<p>Das Haus <b>wird</b> <span class="rule-hl">gebaut</span>. — خانه ساخته می‌شود. (حال)</p>
<p>Das Haus <b>wurde</b> <span class="rule-hl">gebaut</span>. — خانه ساخته شد. (گذشته)</p>
<p>Das Haus <b>ist</b> <span class="rule-hl">gebaut</span> <b>worden</b>. — خانه ساخته شده است. (کامل)</p>

<h3>Konjunktiv II — شرطی</h3>
<div class="rule-formula">würde + مصدر / wäre / hätte</div>
<p>Wenn ich reich <b>wäre</b>, <b>würde</b> ich reisen. — اگر ثروتمند بودم، سفر می‌کردم.</p>
<p>Wenn er Zeit <b>hätte</b>, <b>würde</b> er kommen. — اگر وقت داشت، می‌آمد.</p>`,
vi: `
<h2>Cấu trúc câu — Trật tự từ</h2>
<h3>Câu chính</h3>
<div class="rule-formula">Chủ ngữ + <span class="rule-hl">Động từ (Vị trí 2)</span> + Tân ngữ</div>
<p>Ich <span class="rule-hl">lerne</span> Deutsch. | Morgen <span class="rule-hl">gehe</span> ich zur Schule.</p>

<h3>TEKAMOLO — thứ tự trạng ngữ</h3>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal (khi nào) → <span class="rule-hl2">Ka</span>usal (tại sao) → <span class="rule-hl3">Mo</span>dal (như thế nào) → <span class="rule-hl4">Lo</span>kal (ở đâu)</div>
<p>Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">mit dem Zug</span> <span class="rule-hl4">nach Berlin</span>. — Ngày mai tôi đi Berlin bằng tàu vì công việc.</p>

<h3>Mệnh đề phụ — động từ ở cuối!</h3>
<table class="rule-table">
<tr><th>Liên từ</th><th>Nghĩa</th><th>Ví dụ</th></tr>
<tr><td><b>weil</b></td><td>bởi vì</td><td>..., weil er müde <span class="rule-hl">ist</span></td></tr>
<tr><td><b>dass</b></td><td>rằng</td><td>..., dass er Deutsch <span class="rule-hl">lernt</span></td></tr>
<tr><td><b>wenn</b></td><td>nếu/khi</td><td>Wenn es <span class="rule-hl">regnet</span>, ...</td></tr>
<tr><td><b>als</b></td><td>khi (quá khứ)</td><td>Als ich jung <span class="rule-hl">war</span>, ...</td></tr>
<tr><td><b>ob</b></td><td>liệu</td><td>..., ob er <span class="rule-hl">kommt</span></td></tr>
<tr><td><b>obwohl</b></td><td>mặc dù</td><td>..., obwohl es kalt <span class="rule-hl">ist</span></td></tr>
<tr><td><b>damit</b></td><td>để</td><td>..., damit alle es <span class="rule-hl">verstehen</span></td></tr>
<tr><td><b>nachdem</b></td><td>sau khi</td><td>Nachdem er gegessen <span class="rule-hl">hatte</span>, ...</td></tr>
<tr><td><b>bevor</b></td><td>trước khi</td><td>Bevor du <span class="rule-hl">gehst</span>, ...</td></tr>
<tr><td><b>während</b></td><td>trong khi</td><td>Während er <span class="rule-hl">kocht</span>, ...</td></tr>
</table>

<h3>Từ nối (câu chính!)</h3>
<table class="rule-table">
<tr><th>Từ nối</th><th>Trật tự từ</th></tr>
<tr><td><b>denn</b> (vì)</td><td>Bình thường: S+V+O</td></tr>
<tr><td><b>aber</b> (nhưng)</td><td>Bình thường: S+V+O</td></tr>
<tr><td><b>deshalb</b> (do đó)</td><td>Đảo: V+S+O</td></tr>
<tr><td><b>trotzdem</b> (dù vậy)</td><td>Đảo: V+S+O</td></tr>
</table>

<h3>Bị động</h3>
<div class="rule-formula">werden + <span class="rule-hl">Partizip II</span></div>
<p>Das Haus <b>wird</b> <span class="rule-hl">gebaut</span>. — Ngôi nhà đang được xây. (Hiện tại)</p>
<p>Das Haus <b>wurde</b> <span class="rule-hl">gebaut</span>. — Ngôi nhà đã được xây. (Quá khứ)</p>
<p>Das Haus <b>ist</b> <span class="rule-hl">gebaut</span> <b>worden</b>. — Ngôi nhà đã được xây xong. (Hoàn thành)</p>

<h3>Konjunktiv II — giả định</h3>
<div class="rule-formula">würde + Nguyên mẫu / wäre / hätte</div>
<p>Wenn ich reich <b>wäre</b>, <b>würde</b> ich reisen. — Nếu tôi giàu, tôi sẽ đi du lịch.</p>
<p>Wenn er Zeit <b>hätte</b>, <b>würde</b> er kommen. — Nếu anh ấy có thời gian, anh ấy sẽ đến.</p>`
},

prepositions: {
de: `
<h2>Präpositionen</h2>
<h3>Wechselpräpositionen (Akk ↔ Dat)</h3>
<div class="rule-formula"><span class="rule-hl">Wohin?</span> → Akkusativ | <span class="rule-hl2">Wo?</span> → Dativ</div>
<table class="rule-table">
<tr><th>Präp.</th><th>Akkusativ (Bewegung)</th><th>Dativ (Position)</th></tr>
<tr><td><b>in</b></td><td>Ich gehe <b>in die</b> Schule</td><td>Ich bin <b>in der</b> Schule</td></tr>
<tr><td><b>an</b></td><td>Er hängt es <b>an die</b> Wand</td><td>Es hängt <b>an der</b> Wand</td></tr>
<tr><td><b>auf</b></td><td>Ich lege es <b>auf den</b> Tisch</td><td>Es liegt <b>auf dem</b> Tisch</td></tr>
<tr><td><b>über</b></td><td>über <b>den</b> Fluss</td><td>über <b>dem</b> Tisch</td></tr>
<tr><td><b>unter</b></td><td>unter <b>den</b> Tisch</td><td>unter <b>dem</b> Tisch</td></tr>
<tr><td><b>vor</b></td><td>vor <b>das</b> Haus</td><td>vor <b>dem</b> Haus</td></tr>
<tr><td><b>hinter</b></td><td>hinter <b>das</b> Haus</td><td>hinter <b>dem</b> Haus</td></tr>
<tr><td><b>neben</b></td><td>neben <b>den</b> Stuhl</td><td>neben <b>dem</b> Stuhl</td></tr>
<tr><td><b>zwischen</b></td><td>zwischen <b>die</b> Bücher</td><td>zwischen <b>den</b> Büchern</td></tr>
</table>

<h3>Nur Dativ</h3>
<div class="rule-box rule-green"><b>aus, bei, mit, nach, seit, von, zu</b> — immer Dativ!</div>

<h3>Nur Akkusativ</h3>
<div class="rule-box rule-blue"><b>durch, für, gegen, ohne, um</b> — immer Akkusativ!</div>

<h3>Genitiv</h3>
<div class="rule-box rule-purple"><b>wegen, trotz, während, statt, aufgrund, außerhalb, innerhalb</b></div>

<h3>Verb + Präposition</h3>
<table class="rule-table">
<tr><th>Verb</th><th>Präp.</th><th>Kasus</th></tr>
<tr><td>warten</td><td><b>auf</b></td><td>Akk</td></tr>
<tr><td>sich freuen</td><td><b>auf/über</b></td><td>Akk</td></tr>
<tr><td>denken</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich erinnern</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich kümmern</td><td><b>um</b></td><td>Akk</td></tr>
<tr><td>helfen</td><td><b>bei</b></td><td>Dat</td></tr>
<tr><td>gratulieren</td><td><b>zu</b></td><td>Dat</td></tr>
<tr><td>leiden</td><td><b>unter</b></td><td>Dat</td></tr>
</table>`,
ru: `
<h2>Предлоги</h2>
<h3>Wechselpräpositionen (Акк ↔ Дат)</h3>
<div class="rule-formula"><span class="rule-hl">Куда?</span> → Аккузатив | <span class="rule-hl2">Где?</span> → Датив</div>
<table class="rule-table">
<tr><th>Предл.</th><th>Аккузатив (движение)</th><th>Датив (положение)</th></tr>
<tr><td><b>in</b></td><td>Ich gehe <b>in die</b> Schule (я иду в школу)</td><td>Ich bin <b>in der</b> Schule (я в школе)</td></tr>
<tr><td><b>an</b></td><td>Er hängt es <b>an die</b> Wand</td><td>Es hängt <b>an der</b> Wand</td></tr>
<tr><td><b>auf</b></td><td>Ich lege es <b>auf den</b> Tisch</td><td>Es liegt <b>auf dem</b> Tisch</td></tr>
<tr><td><b>über</b></td><td>über <b>den</b> Fluss (через реку)</td><td>über <b>dem</b> Tisch (над столом)</td></tr>
<tr><td><b>unter</b></td><td>unter <b>den</b> Tisch</td><td>unter <b>dem</b> Tisch</td></tr>
<tr><td><b>vor</b></td><td>vor <b>das</b> Haus</td><td>vor <b>dem</b> Haus</td></tr>
<tr><td><b>hinter</b></td><td>hinter <b>das</b> Haus</td><td>hinter <b>dem</b> Haus</td></tr>
<tr><td><b>neben</b></td><td>neben <b>den</b> Stuhl</td><td>neben <b>dem</b> Stuhl</td></tr>
<tr><td><b>zwischen</b></td><td>zwischen <b>die</b> Bücher</td><td>zwischen <b>den</b> Büchern</td></tr>
</table>

<h3>Только Датив</h3>
<div class="rule-box rule-green"><b>aus, bei, mit, nach, seit, von, zu</b> — всегда Датив!</div>

<h3>Только Аккузатив</h3>
<div class="rule-box rule-blue"><b>durch, für, gegen, ohne, um</b> — всегда Аккузатив!</div>

<h3>Генитив</h3>
<div class="rule-box rule-purple"><b>wegen, trotz, während, statt, aufgrund, außerhalb, innerhalb</b></div>

<h3>Глагол + предлог</h3>
<table class="rule-table">
<tr><th>Глагол</th><th>Предл.</th><th>Падеж</th></tr>
<tr><td>warten (ждать)</td><td><b>auf</b></td><td>Акк</td></tr>
<tr><td>sich freuen (радоваться)</td><td><b>auf/über</b></td><td>Акк</td></tr>
<tr><td>denken (думать)</td><td><b>an</b></td><td>Акк</td></tr>
<tr><td>sich erinnern (вспоминать)</td><td><b>an</b></td><td>Акк</td></tr>
<tr><td>sich kümmern (заботиться)</td><td><b>um</b></td><td>Акк</td></tr>
<tr><td>helfen (помогать)</td><td><b>bei</b></td><td>Дат</td></tr>
<tr><td>gratulieren (поздравлять)</td><td><b>zu</b></td><td>Дат</td></tr>
<tr><td>leiden (страдать)</td><td><b>unter</b></td><td>Дат</td></tr>
</table>`,
en: `
<h2>Prepositions</h2>
<h3>Two-way prepositions (Acc ↔ Dat)</h3>
<div class="rule-formula"><span class="rule-hl">Where to?</span> → Accusative | <span class="rule-hl2">Where?</span> → Dative</div>
<table class="rule-table">
<tr><th>Prep.</th><th>Accusative (motion)</th><th>Dative (position)</th></tr>
<tr><td><b>in</b></td><td>Ich gehe <b>in die</b> Schule (I go into school)</td><td>Ich bin <b>in der</b> Schule (I am in school)</td></tr>
<tr><td><b>an</b></td><td>Er hängt es <b>an die</b> Wand</td><td>Es hängt <b>an der</b> Wand</td></tr>
<tr><td><b>auf</b></td><td>Ich lege es <b>auf den</b> Tisch</td><td>Es liegt <b>auf dem</b> Tisch</td></tr>
<tr><td><b>über</b></td><td>über <b>den</b> Fluss (across the river)</td><td>über <b>dem</b> Tisch (above the table)</td></tr>
<tr><td><b>unter</b></td><td>unter <b>den</b> Tisch</td><td>unter <b>dem</b> Tisch</td></tr>
<tr><td><b>vor</b></td><td>vor <b>das</b> Haus</td><td>vor <b>dem</b> Haus</td></tr>
<tr><td><b>hinter</b></td><td>hinter <b>das</b> Haus</td><td>hinter <b>dem</b> Haus</td></tr>
<tr><td><b>neben</b></td><td>neben <b>den</b> Stuhl</td><td>neben <b>dem</b> Stuhl</td></tr>
<tr><td><b>zwischen</b></td><td>zwischen <b>die</b> Bücher</td><td>zwischen <b>den</b> Büchern</td></tr>
</table>

<h3>Dative only</h3>
<div class="rule-box rule-green"><b>aus, bei, mit, nach, seit, von, zu</b> — always Dative!</div>

<h3>Accusative only</h3>
<div class="rule-box rule-blue"><b>durch, für, gegen, ohne, um</b> — always Accusative!</div>

<h3>Genitive</h3>
<div class="rule-box rule-purple"><b>wegen, trotz, während, statt, aufgrund, außerhalb, innerhalb</b></div>

<h3>Verb + preposition</h3>
<table class="rule-table">
<tr><th>Verb</th><th>Prep.</th><th>Case</th></tr>
<tr><td>warten (to wait)</td><td><b>auf</b></td><td>Acc</td></tr>
<tr><td>sich freuen (to be happy)</td><td><b>auf/über</b></td><td>Acc</td></tr>
<tr><td>denken (to think)</td><td><b>an</b></td><td>Acc</td></tr>
<tr><td>sich erinnern (to remember)</td><td><b>an</b></td><td>Acc</td></tr>
<tr><td>sich kümmern (to take care)</td><td><b>um</b></td><td>Acc</td></tr>
<tr><td>helfen (to help)</td><td><b>bei</b></td><td>Dat</td></tr>
<tr><td>gratulieren (to congratulate)</td><td><b>zu</b></td><td>Dat</td></tr>
<tr><td>leiden (to suffer)</td><td><b>unter</b></td><td>Dat</td></tr>
</table>`,
tr: `
<h2>Edatlar (Präpositionen)</h2>
<h3>Değişken edatlar (Akk ↔ Dat)</h3>
<div class="rule-formula"><span class="rule-hl">Nereye?</span> → Akkusativ | <span class="rule-hl2">Nerede?</span> → Dativ</div>
<table class="rule-table">
<tr><th>Edat</th><th>Akkusativ (hareket)</th><th>Dativ (konum)</th></tr>
<tr><td><b>in</b></td><td>Ich gehe <b>in die</b> Schule (okula gidiyorum)</td><td>Ich bin <b>in der</b> Schule (okuldayım)</td></tr>
<tr><td><b>an</b></td><td>Er hängt es <b>an die</b> Wand</td><td>Es hängt <b>an der</b> Wand</td></tr>
<tr><td><b>auf</b></td><td>Ich lege es <b>auf den</b> Tisch</td><td>Es liegt <b>auf dem</b> Tisch</td></tr>
<tr><td><b>über</b></td><td>über <b>den</b> Fluss (nehrin üstünden)</td><td>über <b>dem</b> Tisch (masanın üstünde)</td></tr>
<tr><td><b>unter</b></td><td>unter <b>den</b> Tisch</td><td>unter <b>dem</b> Tisch</td></tr>
<tr><td><b>vor</b></td><td>vor <b>das</b> Haus</td><td>vor <b>dem</b> Haus</td></tr>
<tr><td><b>hinter</b></td><td>hinter <b>das</b> Haus</td><td>hinter <b>dem</b> Haus</td></tr>
<tr><td><b>neben</b></td><td>neben <b>den</b> Stuhl</td><td>neben <b>dem</b> Stuhl</td></tr>
<tr><td><b>zwischen</b></td><td>zwischen <b>die</b> Bücher</td><td>zwischen <b>den</b> Büchern</td></tr>
</table>

<h3>Sadece Dativ</h3>
<div class="rule-box rule-green"><b>aus, bei, mit, nach, seit, von, zu</b> — her zaman Dativ!</div>

<h3>Sadece Akkusativ</h3>
<div class="rule-box rule-blue"><b>durch, für, gegen, ohne, um</b> — her zaman Akkusativ!</div>

<h3>Genitiv</h3>
<div class="rule-box rule-purple"><b>wegen, trotz, während, statt, aufgrund, außerhalb, innerhalb</b></div>

<h3>Fiil + edat</h3>
<table class="rule-table">
<tr><th>Fiil</th><th>Edat</th><th>Hal</th></tr>
<tr><td>warten (beklemek)</td><td><b>auf</b></td><td>Akk</td></tr>
<tr><td>sich freuen (sevinmek)</td><td><b>auf/über</b></td><td>Akk</td></tr>
<tr><td>denken (düşünmek)</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich erinnern (hatırlamak)</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich kümmern (ilgilenmek)</td><td><b>um</b></td><td>Akk</td></tr>
<tr><td>helfen (yardım etmek)</td><td><b>bei</b></td><td>Dat</td></tr>
<tr><td>gratulieren (tebrik etmek)</td><td><b>zu</b></td><td>Dat</td></tr>
<tr><td>leiden (acı çekmek)</td><td><b>unter</b></td><td>Dat</td></tr>
</table>`,
ar: `
<h2>حروف الجر</h2>
<h3>حروف الجر المتغيرة (Akk ↔ Dat)</h3>
<div class="rule-formula"><span class="rule-hl">إلى أين؟</span> → Akkusativ | <span class="rule-hl2">أين؟</span> → Dativ</div>
<table class="rule-table">
<tr><th>الحرف</th><th>Akkusativ (حركة)</th><th>Dativ (مكان)</th></tr>
<tr><td><b>in</b></td><td>Ich gehe <b>in die</b> Schule (أذهب إلى المدرسة)</td><td>Ich bin <b>in der</b> Schule (أنا في المدرسة)</td></tr>
<tr><td><b>an</b></td><td>Er hängt es <b>an die</b> Wand</td><td>Es hängt <b>an der</b> Wand</td></tr>
<tr><td><b>auf</b></td><td>Ich lege es <b>auf den</b> Tisch</td><td>Es liegt <b>auf dem</b> Tisch</td></tr>
<tr><td><b>über</b></td><td>über <b>den</b> Fluss (عبر النهر)</td><td>über <b>dem</b> Tisch (فوق الطاولة)</td></tr>
<tr><td><b>unter</b></td><td>unter <b>den</b> Tisch</td><td>unter <b>dem</b> Tisch</td></tr>
<tr><td><b>vor</b></td><td>vor <b>das</b> Haus</td><td>vor <b>dem</b> Haus</td></tr>
<tr><td><b>hinter</b></td><td>hinter <b>das</b> Haus</td><td>hinter <b>dem</b> Haus</td></tr>
<tr><td><b>neben</b></td><td>neben <b>den</b> Stuhl</td><td>neben <b>dem</b> Stuhl</td></tr>
<tr><td><b>zwischen</b></td><td>zwischen <b>die</b> Bücher</td><td>zwischen <b>den</b> Büchern</td></tr>
</table>

<h3>Dativ فقط</h3>
<div class="rule-box rule-green"><b>aus, bei, mit, nach, seit, von, zu</b> — دائماً Dativ!</div>

<h3>Akkusativ فقط</h3>
<div class="rule-box rule-blue"><b>durch, für, gegen, ohne, um</b> — دائماً Akkusativ!</div>

<h3>Genitiv</h3>
<div class="rule-box rule-purple"><b>wegen, trotz, während, statt, aufgrund, außerhalb, innerhalb</b></div>

<h3>فعل + حرف جر</h3>
<table class="rule-table">
<tr><th>الفعل</th><th>الحرف</th><th>الحالة</th></tr>
<tr><td>warten (ينتظر)</td><td><b>auf</b></td><td>Akk</td></tr>
<tr><td>sich freuen (يفرح)</td><td><b>auf/über</b></td><td>Akk</td></tr>
<tr><td>denken (يفكر)</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich erinnern (يتذكر)</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich kümmern (يهتم)</td><td><b>um</b></td><td>Akk</td></tr>
<tr><td>helfen (يساعد)</td><td><b>bei</b></td><td>Dat</td></tr>
<tr><td>gratulieren (يهنئ)</td><td><b>zu</b></td><td>Dat</td></tr>
<tr><td>leiden (يعاني)</td><td><b>unter</b></td><td>Dat</td></tr>
</table>`,
fa: `
<h2>حروف اضافه</h2>
<h3>حروف اضافه دوگانه (Akk ↔ Dat)</h3>
<div class="rule-formula"><span class="rule-hl">به کجا؟</span> → Akkusativ | <span class="rule-hl2">کجا؟</span> → Dativ</div>
<table class="rule-table">
<tr><th>حرف</th><th>Akkusativ (حرکت)</th><th>Dativ (موقعیت)</th></tr>
<tr><td><b>in</b></td><td>Ich gehe <b>in die</b> Schule (به مدرسه می‌روم)</td><td>Ich bin <b>in der</b> Schule (در مدرسه هستم)</td></tr>
<tr><td><b>an</b></td><td>Er hängt es <b>an die</b> Wand</td><td>Es hängt <b>an der</b> Wand</td></tr>
<tr><td><b>auf</b></td><td>Ich lege es <b>auf den</b> Tisch</td><td>Es liegt <b>auf dem</b> Tisch</td></tr>
<tr><td><b>über</b></td><td>über <b>den</b> Fluss (از روی رودخانه)</td><td>über <b>dem</b> Tisch (بالای میز)</td></tr>
<tr><td><b>unter</b></td><td>unter <b>den</b> Tisch</td><td>unter <b>dem</b> Tisch</td></tr>
<tr><td><b>vor</b></td><td>vor <b>das</b> Haus</td><td>vor <b>dem</b> Haus</td></tr>
<tr><td><b>hinter</b></td><td>hinter <b>das</b> Haus</td><td>hinter <b>dem</b> Haus</td></tr>
<tr><td><b>neben</b></td><td>neben <b>den</b> Stuhl</td><td>neben <b>dem</b> Stuhl</td></tr>
<tr><td><b>zwischen</b></td><td>zwischen <b>die</b> Bücher</td><td>zwischen <b>den</b> Büchern</td></tr>
</table>

<h3>فقط Dativ</h3>
<div class="rule-box rule-green"><b>aus, bei, mit, nach, seit, von, zu</b> — همیشه Dativ!</div>

<h3>فقط Akkusativ</h3>
<div class="rule-box rule-blue"><b>durch, für, gegen, ohne, um</b> — همیشه Akkusativ!</div>

<h3>Genitiv</h3>
<div class="rule-box rule-purple"><b>wegen, trotz, während, statt, aufgrund, außerhalb, innerhalb</b></div>

<h3>فعل + حرف اضافه</h3>
<table class="rule-table">
<tr><th>فعل</th><th>حرف</th><th>حالت</th></tr>
<tr><td>warten (منتظر بودن)</td><td><b>auf</b></td><td>Akk</td></tr>
<tr><td>sich freuen (خوشحال بودن)</td><td><b>auf/über</b></td><td>Akk</td></tr>
<tr><td>denken (فکر کردن)</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich erinnern (به یاد آوردن)</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich kümmern (مراقب بودن)</td><td><b>um</b></td><td>Akk</td></tr>
<tr><td>helfen (کمک کردن)</td><td><b>bei</b></td><td>Dat</td></tr>
<tr><td>gratulieren (تبریک گفتن)</td><td><b>zu</b></td><td>Dat</td></tr>
<tr><td>leiden (رنج بردن)</td><td><b>unter</b></td><td>Dat</td></tr>
</table>`,
vi: `
<h2>Giới từ</h2>
<h3>Giới từ đổi cách (Akk ↔ Dat)</h3>
<div class="rule-formula"><span class="rule-hl">Đi đâu?</span> → Akkusativ | <span class="rule-hl2">Ở đâu?</span> → Dativ</div>
<table class="rule-table">
<tr><th>Giới từ</th><th>Akkusativ (chuyển động)</th><th>Dativ (vị trí)</th></tr>
<tr><td><b>in</b></td><td>Ich gehe <b>in die</b> Schule (tôi đi đến trường)</td><td>Ich bin <b>in der</b> Schule (tôi ở trường)</td></tr>
<tr><td><b>an</b></td><td>Er hängt es <b>an die</b> Wand</td><td>Es hängt <b>an der</b> Wand</td></tr>
<tr><td><b>auf</b></td><td>Ich lege es <b>auf den</b> Tisch</td><td>Es liegt <b>auf dem</b> Tisch</td></tr>
<tr><td><b>über</b></td><td>über <b>den</b> Fluss (qua sông)</td><td>über <b>dem</b> Tisch (trên bàn)</td></tr>
<tr><td><b>unter</b></td><td>unter <b>den</b> Tisch</td><td>unter <b>dem</b> Tisch</td></tr>
<tr><td><b>vor</b></td><td>vor <b>das</b> Haus</td><td>vor <b>dem</b> Haus</td></tr>
<tr><td><b>hinter</b></td><td>hinter <b>das</b> Haus</td><td>hinter <b>dem</b> Haus</td></tr>
<tr><td><b>neben</b></td><td>neben <b>den</b> Stuhl</td><td>neben <b>dem</b> Stuhl</td></tr>
<tr><td><b>zwischen</b></td><td>zwischen <b>die</b> Bücher</td><td>zwischen <b>den</b> Büchern</td></tr>
</table>

<h3>Chỉ Dativ</h3>
<div class="rule-box rule-green"><b>aus, bei, mit, nach, seit, von, zu</b> — luôn Dativ!</div>

<h3>Chỉ Akkusativ</h3>
<div class="rule-box rule-blue"><b>durch, für, gegen, ohne, um</b> — luôn Akkusativ!</div>

<h3>Genitiv</h3>
<div class="rule-box rule-purple"><b>wegen, trotz, während, statt, aufgrund, außerhalb, innerhalb</b></div>

<h3>Động từ + giới từ</h3>
<table class="rule-table">
<tr><th>Động từ</th><th>Giới từ</th><th>Cách</th></tr>
<tr><td>warten (đợi)</td><td><b>auf</b></td><td>Akk</td></tr>
<tr><td>sich freuen (vui)</td><td><b>auf/über</b></td><td>Akk</td></tr>
<tr><td>denken (nghĩ)</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich erinnern (nhớ)</td><td><b>an</b></td><td>Akk</td></tr>
<tr><td>sich kümmern (chăm sóc)</td><td><b>um</b></td><td>Akk</td></tr>
<tr><td>helfen (giúp đỡ)</td><td><b>bei</b></td><td>Dat</td></tr>
<tr><td>gratulieren (chúc mừng)</td><td><b>zu</b></td><td>Dat</td></tr>
<tr><td>leiden (đau khổ)</td><td><b>unter</b></td><td>Dat</td></tr>
</table>`
},

pronouns: {
de: `
<h2>Pronomen</h2>
<h3>Personalpronomen</h3>
<table class="rule-table">
<tr><th></th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td>1.Sg</td><td><b>ich</b></td><td><span class="rule-hl">mich</span></td><td><span class="rule-hl2">mir</span></td></tr>
<tr><td>2.Sg</td><td><b>du</b></td><td><span class="rule-hl">dich</span></td><td><span class="rule-hl2">dir</span></td></tr>
<tr><td>3.Sg m</td><td><b>er</b></td><td><span class="rule-hl">ihn</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>3.Sg f</td><td><b>sie</b></td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihr</span></td></tr>
<tr><td>3.Sg n</td><td><b>es</b></td><td><span class="rule-hl">es</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>1.Pl</td><td><b>wir</b></td><td><span class="rule-hl">uns</span></td><td><span class="rule-hl2">uns</span></td></tr>
<tr><td>2.Pl</td><td><b>ihr</b></td><td><span class="rule-hl">euch</span></td><td><span class="rule-hl2">euch</span></td></tr>
<tr><td>3.Pl</td><td><b>sie</b></td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihnen</span></td></tr>
<tr><td>Formal</td><td><b>Sie</b></td><td><span class="rule-hl">Sie</span></td><td><span class="rule-hl2">Ihnen</span></td></tr>
</table>

<h3>Possessivpronomen (Nominativ)</h3>
<table class="rule-table">
<tr><th></th><th>mask.</th><th>fem.</th><th>neutr.</th><th>Plural</th></tr>
<tr><td>ich</td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td></tr>
<tr><td>du</td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td></tr>
<tr><td>er/es</td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td></tr>
<tr><td>sie</td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td></tr>
<tr><td>wir</td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td></tr>
</table>

<h3>Relativpronomen</h3>
<table class="rule-table">
<tr><th></th><th>mask.</th><th>fem.</th><th>neutr.</th><th>Plural</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td></tr>
</table>
<div class="rule-box rule-green">Im Relativsatz steht das Verb am <b>Ende</b>!<br>Der Mann, <b>der</b> dort <span class="rule-hl">steht</span>, ist mein Lehrer.</div>`,
ru: `
<h2>Местоимения</h2>
<h3>Личные местоимения</h3>
<table class="rule-table">
<tr><th></th><th>Номинатив</th><th>Аккузатив</th><th>Датив</th></tr>
<tr><td>1.Ед</td><td><b>ich</b> (я)</td><td><span class="rule-hl">mich</span></td><td><span class="rule-hl2">mir</span></td></tr>
<tr><td>2.Ед</td><td><b>du</b> (ты)</td><td><span class="rule-hl">dich</span></td><td><span class="rule-hl2">dir</span></td></tr>
<tr><td>3.Ед м</td><td><b>er</b> (он)</td><td><span class="rule-hl">ihn</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>3.Ед ж</td><td><b>sie</b> (она)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihr</span></td></tr>
<tr><td>3.Ед ср</td><td><b>es</b> (оно)</td><td><span class="rule-hl">es</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>1.Мн</td><td><b>wir</b> (мы)</td><td><span class="rule-hl">uns</span></td><td><span class="rule-hl2">uns</span></td></tr>
<tr><td>2.Мн</td><td><b>ihr</b> (вы)</td><td><span class="rule-hl">euch</span></td><td><span class="rule-hl2">euch</span></td></tr>
<tr><td>3.Мн</td><td><b>sie</b> (они)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihnen</span></td></tr>
<tr><td>Вежл.</td><td><b>Sie</b> (Вы)</td><td><span class="rule-hl">Sie</span></td><td><span class="rule-hl2">Ihnen</span></td></tr>
</table>

<h3>Притяжательные местоимения (Номинатив)</h3>
<table class="rule-table">
<tr><th></th><th>муж.</th><th>жен.</th><th>ср.</th><th>Мн.ч.</th></tr>
<tr><td>ich</td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td></tr>
<tr><td>du</td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td></tr>
<tr><td>er/es</td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td></tr>
<tr><td>sie</td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td></tr>
<tr><td>wir</td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td></tr>
</table>

<h3>Относительные местоимения</h3>
<table class="rule-table">
<tr><th></th><th>муж.</th><th>жен.</th><th>ср.</th><th>Мн.ч.</th></tr>
<tr><td>Ном</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Акк</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Дат</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Ген</td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td></tr>
</table>
<div class="rule-box rule-green">В придаточном предложении глагол стоит в <b>конце</b>!<br>Der Mann, <b>der</b> dort <span class="rule-hl">steht</span>, ist mein Lehrer. (Мужчина, который там стоит — мой учитель.)</div>`,
en: `
<h2>Pronouns</h2>
<h3>Personal pronouns</h3>
<table class="rule-table">
<tr><th></th><th>Nominative</th><th>Accusative</th><th>Dative</th></tr>
<tr><td>1.Sg</td><td><b>ich</b> (I)</td><td><span class="rule-hl">mich</span></td><td><span class="rule-hl2">mir</span></td></tr>
<tr><td>2.Sg</td><td><b>du</b> (you)</td><td><span class="rule-hl">dich</span></td><td><span class="rule-hl2">dir</span></td></tr>
<tr><td>3.Sg m</td><td><b>er</b> (he)</td><td><span class="rule-hl">ihn</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>3.Sg f</td><td><b>sie</b> (she)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihr</span></td></tr>
<tr><td>3.Sg n</td><td><b>es</b> (it)</td><td><span class="rule-hl">es</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>1.Pl</td><td><b>wir</b> (we)</td><td><span class="rule-hl">uns</span></td><td><span class="rule-hl2">uns</span></td></tr>
<tr><td>2.Pl</td><td><b>ihr</b> (you pl.)</td><td><span class="rule-hl">euch</span></td><td><span class="rule-hl2">euch</span></td></tr>
<tr><td>3.Pl</td><td><b>sie</b> (they)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihnen</span></td></tr>
<tr><td>Formal</td><td><b>Sie</b> (You)</td><td><span class="rule-hl">Sie</span></td><td><span class="rule-hl2">Ihnen</span></td></tr>
</table>

<h3>Possessive pronouns (Nominative)</h3>
<table class="rule-table">
<tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>Plural</th></tr>
<tr><td>ich</td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td></tr>
<tr><td>du</td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td></tr>
<tr><td>er/es</td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td></tr>
<tr><td>sie</td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td></tr>
<tr><td>wir</td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td></tr>
</table>

<h3>Relative pronouns</h3>
<table class="rule-table">
<tr><th></th><th>masc.</th><th>fem.</th><th>neut.</th><th>Plural</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Acc</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td></tr>
</table>
<div class="rule-box rule-green">In a relative clause the verb goes at the <b>end</b>!<br>Der Mann, <b>der</b> dort <span class="rule-hl">steht</span>, ist mein Lehrer. (The man who stands there is my teacher.)</div>`,
tr: `
<h2>Zamirler</h2>
<h3>Şahıs zamirleri</h3>
<table class="rule-table">
<tr><th></th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td>1.Tk</td><td><b>ich</b> (ben)</td><td><span class="rule-hl">mich</span></td><td><span class="rule-hl2">mir</span></td></tr>
<tr><td>2.Tk</td><td><b>du</b> (sen)</td><td><span class="rule-hl">dich</span></td><td><span class="rule-hl2">dir</span></td></tr>
<tr><td>3.Tk eril</td><td><b>er</b> (o)</td><td><span class="rule-hl">ihn</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>3.Tk dişil</td><td><b>sie</b> (o)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihr</span></td></tr>
<tr><td>3.Tk nötr</td><td><b>es</b> (o)</td><td><span class="rule-hl">es</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>1.Ç</td><td><b>wir</b> (biz)</td><td><span class="rule-hl">uns</span></td><td><span class="rule-hl2">uns</span></td></tr>
<tr><td>2.Ç</td><td><b>ihr</b> (siz)</td><td><span class="rule-hl">euch</span></td><td><span class="rule-hl2">euch</span></td></tr>
<tr><td>3.Ç</td><td><b>sie</b> (onlar)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihnen</span></td></tr>
<tr><td>Kibar</td><td><b>Sie</b> (Siz)</td><td><span class="rule-hl">Sie</span></td><td><span class="rule-hl2">Ihnen</span></td></tr>
</table>

<h3>İyelik zamirleri (Nominativ)</h3>
<table class="rule-table">
<tr><th></th><th>eril</th><th>dişil</th><th>nötr</th><th>Çoğul</th></tr>
<tr><td>ich</td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td></tr>
<tr><td>du</td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td></tr>
<tr><td>er/es</td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td></tr>
<tr><td>sie</td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td></tr>
<tr><td>wir</td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td></tr>
</table>

<h3>İlgi zamirleri</h3>
<table class="rule-table">
<tr><th></th><th>eril</th><th>dişil</th><th>nötr</th><th>Çoğul</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td></tr>
</table>
<div class="rule-box rule-green">İlgi cümlesinde fiil <b>sonda</b> durur!<br>Der Mann, <b>der</b> dort <span class="rule-hl">steht</span>, ist mein Lehrer. (Orada duran adam benim öğretmenimdir.)</div>`,
ar: `
<h2>الضمائر</h2>
<h3>الضمائر الشخصية</h3>
<table class="rule-table">
<tr><th></th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td>1.مف</td><td><b>ich</b> (أنا)</td><td><span class="rule-hl">mich</span></td><td><span class="rule-hl2">mir</span></td></tr>
<tr><td>2.مف</td><td><b>du</b> (أنت)</td><td><span class="rule-hl">dich</span></td><td><span class="rule-hl2">dir</span></td></tr>
<tr><td>3.مذكر</td><td><b>er</b> (هو)</td><td><span class="rule-hl">ihn</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>3.مؤنث</td><td><b>sie</b> (هي)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihr</span></td></tr>
<tr><td>3.محايد</td><td><b>es</b></td><td><span class="rule-hl">es</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>1.جم</td><td><b>wir</b> (نحن)</td><td><span class="rule-hl">uns</span></td><td><span class="rule-hl2">uns</span></td></tr>
<tr><td>2.جم</td><td><b>ihr</b> (أنتم)</td><td><span class="rule-hl">euch</span></td><td><span class="rule-hl2">euch</span></td></tr>
<tr><td>3.جم</td><td><b>sie</b> (هم)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihnen</span></td></tr>
<tr><td>رسمي</td><td><b>Sie</b> (حضرتك)</td><td><span class="rule-hl">Sie</span></td><td><span class="rule-hl2">Ihnen</span></td></tr>
</table>

<h3>ضمائر الملكية (Nominativ)</h3>
<table class="rule-table">
<tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>ich</td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td></tr>
<tr><td>du</td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td></tr>
<tr><td>er/es</td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td></tr>
<tr><td>sie</td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td></tr>
<tr><td>wir</td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td></tr>
</table>

<h3>ضمائر الوصل</h3>
<table class="rule-table">
<tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td></tr>
</table>
<div class="rule-box rule-green">في جملة الوصل يكون الفعل في <b>النهاية</b>!<br>Der Mann, <b>der</b> dort <span class="rule-hl">steht</span>, ist mein Lehrer. (الرجل الذي يقف هناك هو معلمي.)</div>`,
fa: `
<h2>ضمایر</h2>
<h3>ضمایر شخصی</h3>
<table class="rule-table">
<tr><th></th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td>1.مفرد</td><td><b>ich</b> (من)</td><td><span class="rule-hl">mich</span></td><td><span class="rule-hl2">mir</span></td></tr>
<tr><td>2.مفرد</td><td><b>du</b> (تو)</td><td><span class="rule-hl">dich</span></td><td><span class="rule-hl2">dir</span></td></tr>
<tr><td>3.مذکر</td><td><b>er</b> (او)</td><td><span class="rule-hl">ihn</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>3.مؤنث</td><td><b>sie</b> (او)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihr</span></td></tr>
<tr><td>3.خنثی</td><td><b>es</b></td><td><span class="rule-hl">es</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>1.جمع</td><td><b>wir</b> (ما)</td><td><span class="rule-hl">uns</span></td><td><span class="rule-hl2">uns</span></td></tr>
<tr><td>2.جمع</td><td><b>ihr</b> (شما)</td><td><span class="rule-hl">euch</span></td><td><span class="rule-hl2">euch</span></td></tr>
<tr><td>3.جمع</td><td><b>sie</b> (آن‌ها)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihnen</span></td></tr>
<tr><td>رسمی</td><td><b>Sie</b> (شما)</td><td><span class="rule-hl">Sie</span></td><td><span class="rule-hl2">Ihnen</span></td></tr>
</table>

<h3>ضمایر ملکی (Nominativ)</h3>
<table class="rule-table">
<tr><th></th><th>مذکر</th><th>مؤنث</th><th>خنثی</th><th>جمع</th></tr>
<tr><td>ich</td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td></tr>
<tr><td>du</td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td></tr>
<tr><td>er/es</td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td></tr>
<tr><td>sie</td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td></tr>
<tr><td>wir</td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td></tr>
</table>

<h3>ضمایر موصول</h3>
<table class="rule-table">
<tr><th></th><th>مذکر</th><th>مؤنث</th><th>خنثی</th><th>جمع</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td></tr>
</table>
<div class="rule-box rule-green">در جمله موصولی فعل در <b>انتها</b> قرار می‌گیرد!<br>Der Mann, <b>der</b> dort <span class="rule-hl">steht</span>, ist mein Lehrer. (مردی که آنجا ایستاده است معلم من است.)</div>`,
vi: `
<h2>Đại từ</h2>
<h3>Đại từ nhân xưng</h3>
<table class="rule-table">
<tr><th></th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
<tr><td>1.số ít</td><td><b>ich</b> (tôi)</td><td><span class="rule-hl">mich</span></td><td><span class="rule-hl2">mir</span></td></tr>
<tr><td>2.số ít</td><td><b>du</b> (bạn)</td><td><span class="rule-hl">dich</span></td><td><span class="rule-hl2">dir</span></td></tr>
<tr><td>3.số ít m</td><td><b>er</b> (anh ấy)</td><td><span class="rule-hl">ihn</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>3.số ít f</td><td><b>sie</b> (cô ấy)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihr</span></td></tr>
<tr><td>3.số ít n</td><td><b>es</b> (nó)</td><td><span class="rule-hl">es</span></td><td><span class="rule-hl2">ihm</span></td></tr>
<tr><td>1.số nh.</td><td><b>wir</b> (chúng tôi)</td><td><span class="rule-hl">uns</span></td><td><span class="rule-hl2">uns</span></td></tr>
<tr><td>2.số nh.</td><td><b>ihr</b> (các bạn)</td><td><span class="rule-hl">euch</span></td><td><span class="rule-hl2">euch</span></td></tr>
<tr><td>3.số nh.</td><td><b>sie</b> (họ)</td><td><span class="rule-hl">sie</span></td><td><span class="rule-hl2">ihnen</span></td></tr>
<tr><td>Lịch sự</td><td><b>Sie</b> (Ngài)</td><td><span class="rule-hl">Sie</span></td><td><span class="rule-hl2">Ihnen</span></td></tr>
</table>

<h3>Đại từ sở hữu (Nominativ)</h3>
<table class="rule-table">
<tr><th></th><th>g.đực</th><th>g.cái</th><th>t.tính</th><th>số nh.</th></tr>
<tr><td>ich</td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td><td><b>mein</b></td><td>mein<span class="rule-hl">e</span></td></tr>
<tr><td>du</td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td><td><b>dein</b></td><td>dein<span class="rule-hl">e</span></td></tr>
<tr><td>er/es</td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td><td><b>sein</b></td><td>sein<span class="rule-hl">e</span></td></tr>
<tr><td>sie</td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td><td><b>ihr</b></td><td>ihr<span class="rule-hl">e</span></td></tr>
<tr><td>wir</td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td><td><b>unser</b></td><td>unser<span class="rule-hl">e</span></td></tr>
</table>

<h3>Đại từ quan hệ</h3>
<table class="rule-table">
<tr><th></th><th>g.đực</th><th>g.cái</th><th>t.tính</th><th>số nh.</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td><td><span class="rule-hl3">dessen</span></td><td><span class="rule-hl3">deren</span></td></tr>
</table>
<div class="rule-box rule-green">Trong mệnh đề quan hệ, động từ đứng ở <b>cuối</b>!<br>Der Mann, <b>der</b> dort <span class="rule-hl">steht</span>, ist mein Lehrer. (Người đàn ông đứng ở đó là thầy giáo của tôi.)</div>`
},

// ===== Satzbau — отдельные правила для каждой подкатегории =====
satz_hauptsatz: {
de: `
<h2>Hauptsatz</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">Verb (Pos. 2)</span> + Objekt/Adverb</div>
<p><b>Regel:</b> Das Verb steht IMMER auf Position 2!</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb!)</th><th>Rest</th></tr>
<tr><td>Ich</td><td><span class="rule-hl">trinke</span></td><td>Kaffee.</td></tr>
<tr><td>Morgen</td><td><span class="rule-hl">gehe</span></td><td>ich ins Kino.</td></tr>
<tr><td>Den Film</td><td><span class="rule-hl">habe</span></td><td>ich gesehen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Perfekt:</b> haben/sein auf Pos. 2, Partizip II ans Ende!<br>Ich <b>habe</b> gestern einen Film <span class="rule-hl">gesehen</span>.</div>
<div class="rule-box rule-blue"><b>Negation:</b><br>nicht — vor Adjektiv/Verb: Ich verstehe das <b>nicht</b>.<br>kein — statt ein: Ich habe <b>keine</b> Zeit.</div>`,
ru: `
<h2>Hauptsatz — Главное предложение</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">Verb (Pos. 2)</span> + Objekt/Adverb</div>
<p><b>Правило:</b> Глагол ВСЕГДА на 2-й позиции!</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb!)</th><th>Rest</th></tr>
<tr><td>Ich</td><td><span class="rule-hl">trinke</span></td><td>Kaffee.</td></tr>
<tr><td>Morgen</td><td><span class="rule-hl">gehe</span></td><td>ich ins Kino.</td></tr>
<tr><td>Den Film</td><td><span class="rule-hl">habe</span></td><td>ich gesehen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Perfekt:</b> haben/sein на Pos. 2, Partizip II — в конце!<br>Ich <b>habe</b> gestern einen Film <span class="rule-hl">gesehen</span>.</div>
<div class="rule-box rule-blue"><b>Negation:</b><br>nicht — перед прилагательным/глаголом: Ich verstehe das <b>nicht</b>.<br>kein — вместо ein: Ich habe <b>keine</b> Zeit.</div>`,
en: `
<h2>Hauptsatz — Main clause</h2>
<div class="rule-formula">Subject + <span class="rule-hl">Verb (Pos. 2)</span> + Object/Adverb</div>
<p><b>Rule:</b> The verb ALWAYS sits in position 2!</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb!)</th><th>Rest</th></tr>
<tr><td>Ich</td><td><span class="rule-hl">trinke</span></td><td>Kaffee.</td></tr>
<tr><td>Morgen</td><td><span class="rule-hl">gehe</span></td><td>ich ins Kino.</td></tr>
<tr><td>Den Film</td><td><span class="rule-hl">habe</span></td><td>ich gesehen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Perfekt:</b> haben/sein in pos. 2, Partizip II at the end!<br>Ich <b>habe</b> gestern einen Film <span class="rule-hl">gesehen</span>.</div>
<div class="rule-box rule-blue"><b>Negation:</b><br>nicht — before adjective/verb: Ich verstehe das <b>nicht</b>.<br>kein — instead of ein: Ich habe <b>keine</b> Zeit.</div>`,
tr: `
<h2>Hauptsatz — Ana cümle</h2>
<div class="rule-formula">Özne + <span class="rule-hl">Fiil (Poz. 2)</span> + Nesne/Zarf</div>
<p><b>Kural:</b> Fiil DAİMA 2. pozisyondadır!</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Fiil!)</th><th>Kalan</th></tr>
<tr><td>Ich</td><td><span class="rule-hl">trinke</span></td><td>Kaffee.</td></tr>
<tr><td>Morgen</td><td><span class="rule-hl">gehe</span></td><td>ich ins Kino.</td></tr>
<tr><td>Den Film</td><td><span class="rule-hl">habe</span></td><td>ich gesehen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Perfekt:</b> haben/sein 2. pozisyonda, Partizip II sonda!<br>Ich <b>habe</b> gestern einen Film <span class="rule-hl">gesehen</span>.</div>
<div class="rule-box rule-blue"><b>Olumsuzluk:</b><br>nicht — sıfat/fiilden önce: Ich verstehe das <b>nicht</b>.<br>kein — ein yerine: Ich habe <b>keine</b> Zeit.</div>`,
ar: `
<h2>Hauptsatz — الجملة الرئيسية</h2>
<div class="rule-formula">الفاعل + <span class="rule-hl">الفعل (الموضع 2)</span> + مفعول/ظرف</div>
<p><b>القاعدة:</b> الفعل دائماً في الموضع الثاني!</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (الفعل!)</th><th>الباقي</th></tr>
<tr><td>Ich</td><td><span class="rule-hl">trinke</span></td><td>Kaffee.</td></tr>
<tr><td>Morgen</td><td><span class="rule-hl">gehe</span></td><td>ich ins Kino.</td></tr>
<tr><td>Den Film</td><td><span class="rule-hl">habe</span></td><td>ich gesehen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Perfekt:</b> haben/sein في الموضع 2، Partizip II في النهاية!<br>Ich <b>habe</b> gestern einen Film <span class="rule-hl">gesehen</span>.</div>
<div class="rule-box rule-blue"><b>النفي:</b><br>nicht — قبل الصفة/الفعل: Ich verstehe das <b>nicht</b>.<br>kein — بدلاً من ein: Ich habe <b>keine</b> Zeit.</div>`,
fa: `
<h2>Hauptsatz — جمله اصلی</h2>
<div class="rule-formula">فاعل + <span class="rule-hl">فعل (موقعیت ۲)</span> + مفعول/قید</div>
<p><b>قاعده:</b> فعل همیشه در موقعیت دوم قرار می‌گیرد!</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (فعل!)</th><th>بقیه</th></tr>
<tr><td>Ich</td><td><span class="rule-hl">trinke</span></td><td>Kaffee.</td></tr>
<tr><td>Morgen</td><td><span class="rule-hl">gehe</span></td><td>ich ins Kino.</td></tr>
<tr><td>Den Film</td><td><span class="rule-hl">habe</span></td><td>ich gesehen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Perfekt:</b> haben/sein در موقعیت ۲، Partizip II در پایان!<br>Ich <b>habe</b> gestern einen Film <span class="rule-hl">gesehen</span>.</div>
<div class="rule-box rule-blue"><b>منفی:</b><br>nicht — قبل از صفت/فعل: Ich verstehe das <b>nicht</b>.<br>kein — به جای ein: Ich habe <b>keine</b> Zeit.</div>`,
vi: `
<h2>Hauptsatz — Câu chính</h2>
<div class="rule-formula">Chủ ngữ + <span class="rule-hl">Động từ (Pos. 2)</span> + Tân ngữ/Trạng từ</div>
<p><b>Quy tắc:</b> Động từ LUÔN ở vị trí 2!</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Động từ!)</th><th>Phần còn lại</th></tr>
<tr><td>Ich</td><td><span class="rule-hl">trinke</span></td><td>Kaffee.</td></tr>
<tr><td>Morgen</td><td><span class="rule-hl">gehe</span></td><td>ich ins Kino.</td></tr>
<tr><td>Den Film</td><td><span class="rule-hl">habe</span></td><td>ich gesehen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Perfekt:</b> haben/sein ở vị trí 2, Partizip II ở cuối!<br>Ich <b>habe</b> gestern einen Film <span class="rule-hl">gesehen</span>.</div>
<div class="rule-box rule-blue"><b>Phủ định:</b><br>nicht — trước tính từ/động từ: Ich verstehe das <b>nicht</b>.<br>kein — thay cho ein: Ich habe <b>keine</b> Zeit.</div>`
},

satz_modal: {
de: `
<h2>Modalverben</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">Modalverb (Pos. 2)</span> + ... + <span class="rule-hl2">Infinitiv (Ende)</span></div>
<table class="rule-table">
<tr><th>Modalverb</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td><b>können</b></td><td>können</td><td>Ich <b>kann</b> schwimmen.</td></tr>
<tr><td><b>müssen</b></td><td>müssen</td><td>Du <b>musst</b> lernen.</td></tr>
<tr><td><b>wollen</b></td><td>wollen</td><td>Er <b>will</b> spielen.</td></tr>
<tr><td><b>möchte</b></td><td>wünschen (höflich)</td><td>Ich <b>möchte</b> bestellen.</td></tr>
<tr><td><b>sollen</b></td><td>sollen (Pflicht)</td><td>Du <b>sollst</b> aufräumen.</td></tr>
<tr><td><b>dürfen</b></td><td>dürfen (Erlaubnis)</td><td>Man <b>darf</b> hier nicht rauchen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Der Infinitiv steht immer am Ende!</b><br>Ich <b>möchte</b> eine Pizza <span class="rule-hl">bestellen</span>.</div>`,
ru: `
<h2>Modalverben — Модальные глаголы</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">Modalverb (Pos. 2)</span> + ... + <span class="rule-hl2">Infinitiv (Ende)</span></div>
<table class="rule-table">
<tr><th>Modalverb</th><th>Значение</th><th>Beispiel</th></tr>
<tr><td><b>können</b></td><td>мочь, уметь</td><td>Ich <b>kann</b> schwimmen.</td></tr>
<tr><td><b>müssen</b></td><td>должен</td><td>Du <b>musst</b> lernen.</td></tr>
<tr><td><b>wollen</b></td><td>хотеть</td><td>Er <b>will</b> spielen.</td></tr>
<tr><td><b>möchte</b></td><td>хотел бы</td><td>Ich <b>möchte</b> bestellen.</td></tr>
<tr><td><b>sollen</b></td><td>следует</td><td>Du <b>sollst</b> aufräumen.</td></tr>
<tr><td><b>dürfen</b></td><td>разрешено</td><td>Man <b>darf</b> hier nicht rauchen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Инфинитив всегда в конце!</b><br>Ich <b>möchte</b> eine Pizza <span class="rule-hl">bestellen</span>.</div>`,
en: `
<h2>Modalverben — Modal verbs</h2>
<div class="rule-formula">Subject + <span class="rule-hl">Modal (Pos. 2)</span> + ... + <span class="rule-hl2">Infinitive (end)</span></div>
<table class="rule-table">
<tr><th>Modalverb</th><th>Meaning</th><th>Beispiel</th></tr>
<tr><td><b>können</b></td><td>can, be able</td><td>Ich <b>kann</b> schwimmen.</td></tr>
<tr><td><b>müssen</b></td><td>must</td><td>Du <b>musst</b> lernen.</td></tr>
<tr><td><b>wollen</b></td><td>want</td><td>Er <b>will</b> spielen.</td></tr>
<tr><td><b>möchte</b></td><td>would like</td><td>Ich <b>möchte</b> bestellen.</td></tr>
<tr><td><b>sollen</b></td><td>should</td><td>Du <b>sollst</b> aufräumen.</td></tr>
<tr><td><b>dürfen</b></td><td>be allowed</td><td>Man <b>darf</b> hier nicht rauchen.</td></tr>
</table>
<div class="rule-box rule-green"><b>The infinitive always goes at the end!</b><br>Ich <b>möchte</b> eine Pizza <span class="rule-hl">bestellen</span>.</div>`,
tr: `
<h2>Modal fiiller</h2>
<div class="rule-formula">Özne + <span class="rule-hl">Modal fiil (Poz. 2)</span> + ... + <span class="rule-hl2">Mastar (sonda)</span></div>
<table class="rule-table">
<tr><th>Modalverb</th><th>Anlam</th><th>Beispiel</th></tr>
<tr><td><b>können</b></td><td>yapabilmek</td><td>Ich <b>kann</b> schwimmen.</td></tr>
<tr><td><b>müssen</b></td><td>zorunda olmak</td><td>Du <b>musst</b> lernen.</td></tr>
<tr><td><b>wollen</b></td><td>istemek</td><td>Er <b>will</b> spielen.</td></tr>
<tr><td><b>möchte</b></td><td>istemek (kibar)</td><td>Ich <b>möchte</b> bestellen.</td></tr>
<tr><td><b>sollen</b></td><td>gerekmek</td><td>Du <b>sollst</b> aufräumen.</td></tr>
<tr><td><b>dürfen</b></td><td>izin verilmek</td><td>Man <b>darf</b> hier nicht rauchen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Mastar her zaman sondadır!</b><br>Ich <b>möchte</b> eine Pizza <span class="rule-hl">bestellen</span>.</div>`,
ar: `
<h2>الأفعال المساعدة (Modalverben)</h2>
<div class="rule-formula">الفاعل + <span class="rule-hl">الفعل المساعد (الموضع 2)</span> + ... + <span class="rule-hl2">المصدر (النهاية)</span></div>
<table class="rule-table">
<tr><th>Modalverb</th><th>المعنى</th><th>Beispiel</th></tr>
<tr><td><b>können</b></td><td>يستطيع</td><td>Ich <b>kann</b> schwimmen.</td></tr>
<tr><td><b>müssen</b></td><td>يجب</td><td>Du <b>musst</b> lernen.</td></tr>
<tr><td><b>wollen</b></td><td>يريد</td><td>Er <b>will</b> spielen.</td></tr>
<tr><td><b>möchte</b></td><td>أود</td><td>Ich <b>möchte</b> bestellen.</td></tr>
<tr><td><b>sollen</b></td><td>ينبغي</td><td>Du <b>sollst</b> aufräumen.</td></tr>
<tr><td><b>dürfen</b></td><td>يُسمح</td><td>Man <b>darf</b> hier nicht rauchen.</td></tr>
</table>
<div class="rule-box rule-green"><b>المصدر دائماً في النهاية!</b><br>Ich <b>möchte</b> eine Pizza <span class="rule-hl">bestellen</span>.</div>`,
fa: `
<h2>افعال کمکی وجهی</h2>
<div class="rule-formula">فاعل + <span class="rule-hl">فعل کمکی (موقعیت ۲)</span> + ... + <span class="rule-hl2">مصدر (پایان)</span></div>
<table class="rule-table">
<tr><th>Modalverb</th><th>معنی</th><th>Beispiel</th></tr>
<tr><td><b>können</b></td><td>توانستن</td><td>Ich <b>kann</b> schwimmen.</td></tr>
<tr><td><b>müssen</b></td><td>باید</td><td>Du <b>musst</b> lernen.</td></tr>
<tr><td><b>wollen</b></td><td>خواستن</td><td>Er <b>will</b> spielen.</td></tr>
<tr><td><b>möchte</b></td><td>مایل بودن</td><td>Ich <b>möchte</b> bestellen.</td></tr>
<tr><td><b>sollen</b></td><td>بایستی</td><td>Du <b>sollst</b> aufräumen.</td></tr>
<tr><td><b>dürfen</b></td><td>اجازه داشتن</td><td>Man <b>darf</b> hier nicht rauchen.</td></tr>
</table>
<div class="rule-box rule-green"><b>مصدر همیشه در پایان است!</b><br>Ich <b>möchte</b> eine Pizza <span class="rule-hl">bestellen</span>.</div>`,
vi: `
<h2>Modalverben — Động từ khuyết thiếu</h2>
<div class="rule-formula">Chủ ngữ + <span class="rule-hl">Động từ khuyết thiếu (Pos. 2)</span> + ... + <span class="rule-hl2">Nguyên thể (cuối)</span></div>
<table class="rule-table">
<tr><th>Modalverb</th><th>Nghĩa</th><th>Beispiel</th></tr>
<tr><td><b>können</b></td><td>có thể</td><td>Ich <b>kann</b> schwimmen.</td></tr>
<tr><td><b>müssen</b></td><td>phải</td><td>Du <b>musst</b> lernen.</td></tr>
<tr><td><b>wollen</b></td><td>muốn</td><td>Er <b>will</b> spielen.</td></tr>
<tr><td><b>möchte</b></td><td>muốn (lịch sự)</td><td>Ich <b>möchte</b> bestellen.</td></tr>
<tr><td><b>sollen</b></td><td>nên</td><td>Du <b>sollst</b> aufräumen.</td></tr>
<tr><td><b>dürfen</b></td><td>được phép</td><td>Man <b>darf</b> hier nicht rauchen.</td></tr>
</table>
<div class="rule-box rule-green"><b>Động từ nguyên thể luôn ở cuối câu!</b><br>Ich <b>möchte</b> eine Pizza <span class="rule-hl">bestellen</span>.</div>`
},

satz_tekamolo: {
de: `
<h2>TEKAMOLO — Reihenfolge der Ergänzungen</h2>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal → <span class="rule-hl2">Ka</span>usal → <span class="rule-hl3">Mo</span>dal → <span class="rule-hl4">Lo</span>kal</div>
<p><b>WANN → WARUM → WIE → WO/WOHIN</b></p>
<table class="rule-table">
<tr><th>Typ</th><th>Frage</th><th>Beispiel</th></tr>
<tr><td><span class="rule-hl">Temporal</span></td><td>Wann?</td><td>morgen, gestern, jeden Tag</td></tr>
<tr><td><span class="rule-hl2">Kausal</span></td><td>Warum?</td><td>wegen der Arbeit, aus Liebe</td></tr>
<tr><td><span class="rule-hl3">Modal</span></td><td>Wie?</td><td>schnell, gern, mit dem Bus</td></tr>
<tr><td><span class="rule-hl4">Lokal</span></td><td>Wo? Wohin?</td><td>nach Berlin, im Park</td></tr>
</table>
<div class="rule-box rule-green">
Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">schnell</span> <span class="rule-hl4">nach Berlin</span>.
</div>`,
ru: `
<h2>TEKAMOLO — Порядок дополнений</h2>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal → <span class="rule-hl2">Ka</span>usal → <span class="rule-hl3">Mo</span>dal → <span class="rule-hl4">Lo</span>kal</div>
<p><b>КОГДА → ПОЧЕМУ → КАК → ГДЕ/КУДА</b></p>
<table class="rule-table">
<tr><th>Тип</th><th>Frage</th><th>Beispiel</th></tr>
<tr><td><span class="rule-hl">Temporal</span></td><td>Wann?</td><td>morgen, gestern, jeden Tag</td></tr>
<tr><td><span class="rule-hl2">Kausal</span></td><td>Warum?</td><td>wegen der Arbeit, aus Liebe</td></tr>
<tr><td><span class="rule-hl3">Modal</span></td><td>Wie?</td><td>schnell, gern, mit dem Bus</td></tr>
<tr><td><span class="rule-hl4">Lokal</span></td><td>Wo? Wohin?</td><td>nach Berlin, im Park</td></tr>
</table>
<div class="rule-box rule-green">
Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">schnell</span> <span class="rule-hl4">nach Berlin</span>.
</div>`,
en: `
<h2>TEKAMOLO — Order of complements</h2>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal → <span class="rule-hl2">Ka</span>usal → <span class="rule-hl3">Mo</span>dal → <span class="rule-hl4">Lo</span>kal</div>
<p><b>WHEN → WHY → HOW → WHERE</b></p>
<table class="rule-table">
<tr><th>Type</th><th>Question</th><th>Beispiel</th></tr>
<tr><td><span class="rule-hl">Temporal</span></td><td>When?</td><td>morgen, gestern, jeden Tag</td></tr>
<tr><td><span class="rule-hl2">Kausal</span></td><td>Why?</td><td>wegen der Arbeit, aus Liebe</td></tr>
<tr><td><span class="rule-hl3">Modal</span></td><td>How?</td><td>schnell, gern, mit dem Bus</td></tr>
<tr><td><span class="rule-hl4">Lokal</span></td><td>Where? Where to?</td><td>nach Berlin, im Park</td></tr>
</table>
<div class="rule-box rule-green">
Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">schnell</span> <span class="rule-hl4">nach Berlin</span>.
</div>`,
tr: `
<h2>TEKAMOLO — Tümleç sıralaması</h2>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal → <span class="rule-hl2">Ka</span>usal → <span class="rule-hl3">Mo</span>dal → <span class="rule-hl4">Lo</span>kal</div>
<p><b>NE ZAMAN → NEDEN → NASIL → NEREDE/NEREYE</b></p>
<table class="rule-table">
<tr><th>Tür</th><th>Soru</th><th>Beispiel</th></tr>
<tr><td><span class="rule-hl">Temporal</span></td><td>Wann?</td><td>morgen, gestern, jeden Tag</td></tr>
<tr><td><span class="rule-hl2">Kausal</span></td><td>Warum?</td><td>wegen der Arbeit, aus Liebe</td></tr>
<tr><td><span class="rule-hl3">Modal</span></td><td>Wie?</td><td>schnell, gern, mit dem Bus</td></tr>
<tr><td><span class="rule-hl4">Lokal</span></td><td>Wo? Wohin?</td><td>nach Berlin, im Park</td></tr>
</table>
<div class="rule-box rule-green">
Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">schnell</span> <span class="rule-hl4">nach Berlin</span>.
</div>`,
ar: `
<h2>TEKAMOLO — ترتيب المتممات</h2>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal → <span class="rule-hl2">Ka</span>usal → <span class="rule-hl3">Mo</span>dal → <span class="rule-hl4">Lo</span>kal</div>
<p><b>متى → لماذا → كيف → أين/إلى أين</b></p>
<table class="rule-table">
<tr><th>النوع</th><th>السؤال</th><th>Beispiel</th></tr>
<tr><td><span class="rule-hl">Temporal</span></td><td>متى؟</td><td>morgen, gestern, jeden Tag</td></tr>
<tr><td><span class="rule-hl2">Kausal</span></td><td>لماذا؟</td><td>wegen der Arbeit, aus Liebe</td></tr>
<tr><td><span class="rule-hl3">Modal</span></td><td>كيف؟</td><td>schnell, gern, mit dem Bus</td></tr>
<tr><td><span class="rule-hl4">Lokal</span></td><td>أين؟ إلى أين؟</td><td>nach Berlin, im Park</td></tr>
</table>
<div class="rule-box rule-green">
Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">schnell</span> <span class="rule-hl4">nach Berlin</span>.
</div>`,
fa: `
<h2>TEKAMOLO — ترتیب متمم‌ها</h2>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal → <span class="rule-hl2">Ka</span>usal → <span class="rule-hl3">Mo</span>dal → <span class="rule-hl4">Lo</span>kal</div>
<p><b>چه وقت → چرا → چگونه → کجا</b></p>
<table class="rule-table">
<tr><th>نوع</th><th>سؤال</th><th>Beispiel</th></tr>
<tr><td><span class="rule-hl">Temporal</span></td><td>کی؟</td><td>morgen, gestern, jeden Tag</td></tr>
<tr><td><span class="rule-hl2">Kausal</span></td><td>چرا؟</td><td>wegen der Arbeit, aus Liebe</td></tr>
<tr><td><span class="rule-hl3">Modal</span></td><td>چگونه؟</td><td>schnell, gern, mit dem Bus</td></tr>
<tr><td><span class="rule-hl4">Lokal</span></td><td>کجا؟</td><td>nach Berlin, im Park</td></tr>
</table>
<div class="rule-box rule-green">
Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">schnell</span> <span class="rule-hl4">nach Berlin</span>.
</div>`,
vi: `
<h2>TEKAMOLO — Thứ tự bổ ngữ</h2>
<div class="rule-formula"><span class="rule-hl">Te</span>mporal → <span class="rule-hl2">Ka</span>usal → <span class="rule-hl3">Mo</span>dal → <span class="rule-hl4">Lo</span>kal</div>
<p><b>KHI NÀO → TẠI SAO → NHƯ THẾ NÀO → Ở ĐÂU</b></p>
<table class="rule-table">
<tr><th>Loại</th><th>Câu hỏi</th><th>Beispiel</th></tr>
<tr><td><span class="rule-hl">Temporal</span></td><td>Khi nào?</td><td>morgen, gestern, jeden Tag</td></tr>
<tr><td><span class="rule-hl2">Kausal</span></td><td>Tại sao?</td><td>wegen der Arbeit, aus Liebe</td></tr>
<tr><td><span class="rule-hl3">Modal</span></td><td>Như thế nào?</td><td>schnell, gern, mit dem Bus</td></tr>
<tr><td><span class="rule-hl4">Lokal</span></td><td>Ở đâu? Đến đâu?</td><td>nach Berlin, im Park</td></tr>
</table>
<div class="rule-box rule-green">
Ich fahre <span class="rule-hl">morgen</span> <span class="rule-hl2">wegen der Arbeit</span> <span class="rule-hl3">schnell</span> <span class="rule-hl4">nach Berlin</span>.
</div>`
},

satz_weil: {
de: `
<h2>weil — weil (Grund)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">weil</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>weil</b> = weil. Das Verb geht ans ENDE!</p>
<p>Ich bleibe zu Hause, <b>weil</b> ich krank <span class="rule-hl2">bin</span>.</p>
<p>Er lernt Deutsch, <b>weil</b> er in Wien arbeiten <span class="rule-hl2">will</span>.</p>
<div class="rule-box rule-blue"><b>weil vs. denn:</b><br><b>weil</b> → Nebensatz (Verb am Ende): ..., weil er müde <b>ist</b>.<br><b>denn</b> → Hauptsatz (normale Stellung): ..., denn er <b>ist</b> müde.</div>`,
ru: `
<h2>weil — потому что</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">weil</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>weil</b> = потому что. Глагол уходит в КОНЕЦ!</p>
<p>Ich bleibe zu Hause, <b>weil</b> ich krank <span class="rule-hl2">bin</span>.</p>
<p>Er lernt Deutsch, <b>weil</b> er in Wien arbeiten <span class="rule-hl2">will</span>.</p>
<div class="rule-box rule-blue"><b>weil vs. denn:</b><br><b>weil</b> → придаточное (Verb am Ende): ..., weil er müde <b>ist</b>.<br><b>denn</b> → главное (нормальный порядок): ..., denn er <b>ist</b> müde.</div>`,
en: `
<h2>weil — because</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">weil</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>weil</b> = because. The verb moves to the END!</p>
<p>Ich bleibe zu Hause, <b>weil</b> ich krank <span class="rule-hl2">bin</span>.</p>
<p>Er lernt Deutsch, <b>weil</b> er in Wien arbeiten <span class="rule-hl2">will</span>.</p>
<div class="rule-box rule-blue"><b>weil vs. denn:</b><br><b>weil</b> → subordinate (verb at end): ..., weil er müde <b>ist</b>.<br><b>denn</b> → main clause (normal order): ..., denn er <b>ist</b> müde.</div>`,
tr: `
<h2>weil — çünkü</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">weil</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>weil</b> = çünkü. Fiil SONA gider!</p>
<p>Ich bleibe zu Hause, <b>weil</b> ich krank <span class="rule-hl2">bin</span>.</p>
<p>Er lernt Deutsch, <b>weil</b> er in Wien arbeiten <span class="rule-hl2">will</span>.</p>
<div class="rule-box rule-blue"><b>weil vs. denn:</b><br><b>weil</b> → yan cümle (fiil sonda): ..., weil er müde <b>ist</b>.<br><b>denn</b> → ana cümle (normal sıra): ..., denn er <b>ist</b> müde.</div>`,
ar: `
<h2>weil — لأن</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">weil</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>weil</b> = لأن. الفعل يذهب إلى النهاية!</p>
<p>Ich bleibe zu Hause, <b>weil</b> ich krank <span class="rule-hl2">bin</span>.</p>
<p>Er lernt Deutsch, <b>weil</b> er in Wien arbeiten <span class="rule-hl2">will</span>.</p>
<div class="rule-box rule-blue"><b>weil vs. denn:</b><br><b>weil</b> → جملة تابعة (الفعل في النهاية): ..., weil er müde <b>ist</b>.<br><b>denn</b> → جملة رئيسية (ترتيب عادي): ..., denn er <b>ist</b> müde.</div>`,
fa: `
<h2>weil — چون</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">weil</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>weil</b> = چون. فعل به پایان می‌رود!</p>
<p>Ich bleibe zu Hause, <b>weil</b> ich krank <span class="rule-hl2">bin</span>.</p>
<p>Er lernt Deutsch, <b>weil</b> er in Wien arbeiten <span class="rule-hl2">will</span>.</p>
<div class="rule-box rule-blue"><b>weil vs. denn:</b><br><b>weil</b> → جمله فرعی (فعل در پایان): ..., weil er müde <b>ist</b>.<br><b>denn</b> → جمله اصلی (ترتیب عادی): ..., denn er <b>ist</b> müde.</div>`,
vi: `
<h2>weil — bởi vì</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">weil</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>weil</b> = bởi vì. Động từ về CUỐI câu!</p>
<p>Ich bleibe zu Hause, <b>weil</b> ich krank <span class="rule-hl2">bin</span>.</p>
<p>Er lernt Deutsch, <b>weil</b> er in Wien arbeiten <span class="rule-hl2">will</span>.</p>
<div class="rule-box rule-blue"><b>weil vs. denn:</b><br><b>weil</b> → mệnh đề phụ (động từ cuối): ..., weil er müde <b>ist</b>.<br><b>denn</b> → mệnh đề chính (trật tự thường): ..., denn er <b>ist</b> müde.</div>`
},

satz_dass: {
de: `
<h2>dass — dass (Tatsache)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">dass</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>dass</b> = dass. Verb ans ENDE!</p>
<p>Ich denke, <b>dass</b> er recht <span class="rule-hl2">hat</span>.</p>
<p>Es ist wichtig, <b>dass</b> du pünktlich <span class="rule-hl2">kommst</span>.</p>
<div class="rule-box rule-blue"><b>dass vs. ob:</b><br><b>dass</b> = Tatsache: Ich weiß, <b>dass</b> er kommt.<br><b>ob</b> = Frage: Ich weiß nicht, <b>ob</b> er kommt.</div>`,
ru: `
<h2>dass — что</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">dass</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>dass</b> = что. Глагол уходит в КОНЕЦ!</p>
<p>Ich denke, <b>dass</b> er recht <span class="rule-hl2">hat</span>.</p>
<p>Es ist wichtig, <b>dass</b> du pünktlich <span class="rule-hl2">kommst</span>.</p>
<div class="rule-box rule-blue"><b>dass vs. ob:</b><br><b>dass</b> = что (факт): Ich weiß, <b>dass</b> er kommt.<br><b>ob</b> = ли (вопрос): Ich weiß nicht, <b>ob</b> er kommt.</div>`,
en: `
<h2>dass — that</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">dass</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>dass</b> = that. Verb goes to the END!</p>
<p>Ich denke, <b>dass</b> er recht <span class="rule-hl2">hat</span>.</p>
<p>Es ist wichtig, <b>dass</b> du pünktlich <span class="rule-hl2">kommst</span>.</p>
<div class="rule-box rule-blue"><b>dass vs. ob:</b><br><b>dass</b> = that (fact): Ich weiß, <b>dass</b> er kommt.<br><b>ob</b> = whether (question): Ich weiß nicht, <b>ob</b> er kommt.</div>`,
tr: `
<h2>dass — ki / diye</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">dass</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>dass</b> = ki. Fiil SONA gider!</p>
<p>Ich denke, <b>dass</b> er recht <span class="rule-hl2">hat</span>.</p>
<p>Es ist wichtig, <b>dass</b> du pünktlich <span class="rule-hl2">kommst</span>.</p>
<div class="rule-box rule-blue"><b>dass vs. ob:</b><br><b>dass</b> = ki (gerçek): Ich weiß, <b>dass</b> er kommt.<br><b>ob</b> = mı/mi (soru): Ich weiß nicht, <b>ob</b> er kommt.</div>`,
ar: `
<h2>dass — أن</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">dass</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>dass</b> = أن. الفعل في النهاية!</p>
<p>Ich denke, <b>dass</b> er recht <span class="rule-hl2">hat</span>.</p>
<p>Es ist wichtig, <b>dass</b> du pünktlich <span class="rule-hl2">kommst</span>.</p>
<div class="rule-box rule-blue"><b>dass vs. ob:</b><br><b>dass</b> = أن (حقيقة): Ich weiß, <b>dass</b> er kommt.<br><b>ob</b> = إذا ما (سؤال): Ich weiß nicht, <b>ob</b> er kommt.</div>`,
fa: `
<h2>dass — که</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">dass</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>dass</b> = که. فعل در انتها!</p>
<p>Ich denke, <b>dass</b> er recht <span class="rule-hl2">hat</span>.</p>
<p>Es ist wichtig, <b>dass</b> du pünktlich <span class="rule-hl2">kommst</span>.</p>
<div class="rule-box rule-blue"><b>dass vs. ob:</b><br><b>dass</b> = که (حقیقت): Ich weiß, <b>dass</b> er kommt.<br><b>ob</b> = آیا (پرسش): Ich weiß nicht, <b>ob</b> er kommt.</div>`,
vi: `
<h2>dass — rằng</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">dass</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>dass</b> = rằng. Động từ ở CUỐI!</p>
<p>Ich denke, <b>dass</b> er recht <span class="rule-hl2">hat</span>.</p>
<p>Es ist wichtig, <b>dass</b> du pünktlich <span class="rule-hl2">kommst</span>.</p>
<div class="rule-box rule-blue"><b>dass vs. ob:</b><br><b>dass</b> = rằng (sự thật): Ich weiß, <b>dass</b> er kommt.<br><b>ob</b> = liệu có (câu hỏi): Ich weiß nicht, <b>ob</b> er kommt.</div>`
},

satz_wenn: {
de: `
<h2>wenn — wenn / falls</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, <span class="rule-hl3">V</span> + S + ...</div>
<p><b>wenn</b> = wenn (wiederholt, Präsens, Zukunft)</p>
<p><b>Wenn</b> es <span class="rule-hl2">regnet</span>, <span class="rule-hl3">bleibe</span> ich zu Hause.</p>
<p><b>Wenn</b> ich Zeit <span class="rule-hl2">habe</span>, <span class="rule-hl3">lese</span> ich ein Buch.</p>
<div class="rule-box rule-green"><b>wenn vs. als:</b><br><b>wenn</b> = wiederholt / Gegenwart / Zukunft<br><b>als</b> = einmalige Vergangenheit</div>`,
ru: `
<h2>wenn — если / когда</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, <span class="rule-hl3">V</span> + S + ...</div>
<p><b>wenn</b> = если / когда (повторяющееся, настоящее, будущее)</p>
<p><b>Wenn</b> es <span class="rule-hl2">regnet</span>, <span class="rule-hl3">bleibe</span> ich zu Hause.</p>
<p><b>Wenn</b> ich Zeit <span class="rule-hl2">habe</span>, <span class="rule-hl3">lese</span> ich ein Buch.</p>
<div class="rule-box rule-green"><b>wenn vs. als:</b><br><b>wenn</b> = повторяющееся / будущее / настоящее<br><b>als</b> = однократное в прошлом</div>`,
en: `
<h2>wenn — if / when</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, <span class="rule-hl3">V</span> + S + ...</div>
<p><b>wenn</b> = if / when (repeated, present, future)</p>
<p><b>Wenn</b> es <span class="rule-hl2">regnet</span>, <span class="rule-hl3">bleibe</span> ich zu Hause.</p>
<p><b>Wenn</b> ich Zeit <span class="rule-hl2">habe</span>, <span class="rule-hl3">lese</span> ich ein Buch.</p>
<div class="rule-box rule-green"><b>wenn vs. als:</b><br><b>wenn</b> = repeated / present / future<br><b>als</b> = single event in past</div>`,
tr: `
<h2>wenn — eğer / -diği zaman</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, <span class="rule-hl3">V</span> + S + ...</div>
<p><b>wenn</b> = eğer / -diği zaman (tekrarlayan, şimdi, gelecek)</p>
<p><b>Wenn</b> es <span class="rule-hl2">regnet</span>, <span class="rule-hl3">bleibe</span> ich zu Hause.</p>
<p><b>Wenn</b> ich Zeit <span class="rule-hl2">habe</span>, <span class="rule-hl3">lese</span> ich ein Buch.</p>
<div class="rule-box rule-green"><b>wenn vs. als:</b><br><b>wenn</b> = tekrar / şimdi / gelecek<br><b>als</b> = geçmişte tek olay</div>`,
ar: `
<h2>wenn — إذا / عندما</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, <span class="rule-hl3">V</span> + S + ...</div>
<p><b>wenn</b> = إذا / عندما (متكرر، حاضر، مستقبل)</p>
<p><b>Wenn</b> es <span class="rule-hl2">regnet</span>, <span class="rule-hl3">bleibe</span> ich zu Hause.</p>
<p><b>Wenn</b> ich Zeit <span class="rule-hl2">habe</span>, <span class="rule-hl3">lese</span> ich ein Buch.</p>
<div class="rule-box rule-green"><b>wenn vs. als:</b><br><b>wenn</b> = متكرر / حاضر / مستقبل<br><b>als</b> = حدث واحد في الماضي</div>`,
fa: `
<h2>wenn — اگر / وقتی</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, <span class="rule-hl3">V</span> + S + ...</div>
<p><b>wenn</b> = اگر / وقتی (تکراری، حال، آینده)</p>
<p><b>Wenn</b> es <span class="rule-hl2">regnet</span>, <span class="rule-hl3">bleibe</span> ich zu Hause.</p>
<p><b>Wenn</b> ich Zeit <span class="rule-hl2">habe</span>, <span class="rule-hl3">lese</span> ich ein Buch.</p>
<div class="rule-box rule-green"><b>wenn vs. als:</b><br><b>wenn</b> = تکراری / حال / آینده<br><b>als</b> = یک رویداد در گذشته</div>`,
vi: `
<h2>wenn — nếu / khi</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, <span class="rule-hl3">V</span> + S + ...</div>
<p><b>wenn</b> = nếu / khi (lặp lại, hiện tại, tương lai)</p>
<p><b>Wenn</b> es <span class="rule-hl2">regnet</span>, <span class="rule-hl3">bleibe</span> ich zu Hause.</p>
<p><b>Wenn</b> ich Zeit <span class="rule-hl2">habe</span>, <span class="rule-hl3">lese</span> ich ein Buch.</p>
<div class="rule-box rule-green"><b>wenn vs. als:</b><br><b>wenn</b> = lặp lại / hiện tại / tương lai<br><b>als</b> = sự kiện một lần trong quá khứ</div>`
},

satz_als: {
de: `
<h2>als — als (einmalig in Vergangenheit)</h2>
<div class="rule-formula"><span class="rule-hl">Als</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>als</b> = als (ein Ereignis in der Vergangenheit)</p>
<p><b>Als</b> ich ein Kind <span class="rule-hl2">war</span>, spielte ich oft draußen.</p>
<p><b>Als</b> er nach Deutschland <span class="rule-hl2">kam</span>, sprach er kein Deutsch.</p>
<div class="rule-box rule-blue"><b>als</b> — NUR einmalige Vergangenheit!<br><b>wenn</b> — Wiederholung oder Zukunft/Gegenwart.</div>`,
ru: `
<h2>als — когда (прошлое, однократно)</h2>
<div class="rule-formula"><span class="rule-hl">Als</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>als</b> = когда (одно событие в прошлом)</p>
<p><b>Als</b> ich ein Kind <span class="rule-hl2">war</span>, spielte ich oft draußen.</p>
<p><b>Als</b> er nach Deutschland <span class="rule-hl2">kam</span>, sprach er kein Deutsch.</p>
<div class="rule-box rule-blue"><b>als</b> — ТОЛЬКО одноразово в прошлом!<br><b>wenn</b> — повторение или будущее/настоящее.</div>`,
en: `
<h2>als — when (single past event)</h2>
<div class="rule-formula"><span class="rule-hl">Als</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>als</b> = when (one event in the past)</p>
<p><b>Als</b> ich ein Kind <span class="rule-hl2">war</span>, spielte ich oft draußen.</p>
<p><b>Als</b> er nach Deutschland <span class="rule-hl2">kam</span>, sprach er kein Deutsch.</p>
<div class="rule-box rule-blue"><b>als</b> — ONLY a single past event!<br><b>wenn</b> — repetition or future/present.</div>`,
tr: `
<h2>als — -dığı zaman (geçmişte bir kez)</h2>
<div class="rule-formula"><span class="rule-hl">Als</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>als</b> = -dığı zaman (geçmişte tek olay)</p>
<p><b>Als</b> ich ein Kind <span class="rule-hl2">war</span>, spielte ich oft draußen.</p>
<p><b>Als</b> er nach Deutschland <span class="rule-hl2">kam</span>, sprach er kein Deutsch.</p>
<div class="rule-box rule-blue"><b>als</b> — SADECE geçmişte tek seferlik!<br><b>wenn</b> — tekrar veya gelecek/şimdi.</div>`,
ar: `
<h2>als — عندما (حدث واحد في الماضي)</h2>
<div class="rule-formula"><span class="rule-hl">Als</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>als</b> = عندما (حدث واحد في الماضي)</p>
<p><b>Als</b> ich ein Kind <span class="rule-hl2">war</span>, spielte ich oft draußen.</p>
<p><b>Als</b> er nach Deutschland <span class="rule-hl2">kam</span>, sprach er kein Deutsch.</p>
<div class="rule-box rule-blue"><b>als</b> — فقط للحدث الواحد في الماضي!<br><b>wenn</b> — التكرار أو المستقبل/الحاضر.</div>`,
fa: `
<h2>als — وقتی (یک رویداد در گذشته)</h2>
<div class="rule-formula"><span class="rule-hl">Als</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>als</b> = وقتی (یک رویداد در گذشته)</p>
<p><b>Als</b> ich ein Kind <span class="rule-hl2">war</span>, spielte ich oft draußen.</p>
<p><b>Als</b> er nach Deutschland <span class="rule-hl2">kam</span>, sprach er kein Deutsch.</p>
<div class="rule-box rule-blue"><b>als</b> — فقط رویداد یک‌باره در گذشته!<br><b>wenn</b> — تکرار یا آینده/حال.</div>`,
vi: `
<h2>als — khi (sự kiện một lần quá khứ)</h2>
<div class="rule-formula"><span class="rule-hl">Als</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>als</b> = khi (một sự kiện trong quá khứ)</p>
<p><b>Als</b> ich ein Kind <span class="rule-hl2">war</span>, spielte ich oft draußen.</p>
<p><b>Als</b> er nach Deutschland <span class="rule-hl2">kam</span>, sprach er kein Deutsch.</p>
<div class="rule-box rule-blue"><b>als</b> — CHỈ cho sự kiện một lần ở quá khứ!<br><b>wenn</b> — lặp lại hoặc tương lai/hiện tại.</div>`
},

satz_ob: {
de: `
<h2>ob — ob (indirekte Frage)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">ob</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>ob</b> = ob. Indirekte Frage. Verb am ENDE!</p>
<p>Ich weiß nicht, <b>ob</b> er morgen <span class="rule-hl2">kommt</span>.</p>
<p>Kannst du mir sagen, <b>ob</b> das Geschäft noch offen <span class="rule-hl2">ist</span>?</p>`,
ru: `
<h2>ob — ли (косвенный вопрос)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">ob</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>ob</b> = ли. Вопрос в придаточном. Глагол в КОНЦЕ!</p>
<p>Ich weiß nicht, <b>ob</b> er morgen <span class="rule-hl2">kommt</span>.</p>
<p>Kannst du mir sagen, <b>ob</b> das Geschäft noch offen <span class="rule-hl2">ist</span>?</p>`,
en: `
<h2>ob — whether (indirect question)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">ob</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>ob</b> = whether. Indirect question. Verb at END!</p>
<p>Ich weiß nicht, <b>ob</b> er morgen <span class="rule-hl2">kommt</span>.</p>
<p>Kannst du mir sagen, <b>ob</b> das Geschäft noch offen <span class="rule-hl2">ist</span>?</p>`,
tr: `
<h2>ob — -ıp -madığını</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">ob</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>ob</b> = -ıp -madığını. Dolaylı soru. Fiil SONDA!</p>
<p>Ich weiß nicht, <b>ob</b> er morgen <span class="rule-hl2">kommt</span>.</p>
<p>Kannst du mir sagen, <b>ob</b> das Geschäft noch offen <span class="rule-hl2">ist</span>?</p>`,
ar: `
<h2>ob — ما إذا (سؤال غير مباشر)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">ob</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>ob</b> = ما إذا. سؤال غير مباشر. الفعل في النهاية!</p>
<p>Ich weiß nicht, <b>ob</b> er morgen <span class="rule-hl2">kommt</span>.</p>
<p>Kannst du mir sagen, <b>ob</b> das Geschäft noch offen <span class="rule-hl2">ist</span>?</p>`,
fa: `
<h2>ob — آیا (پرسش غیرمستقیم)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">ob</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>ob</b> = آیا. پرسش غیرمستقیم. فعل در پایان!</p>
<p>Ich weiß nicht, <b>ob</b> er morgen <span class="rule-hl2">kommt</span>.</p>
<p>Kannst du mir sagen, <b>ob</b> das Geschäft noch offen <span class="rule-hl2">ist</span>?</p>`,
vi: `
<h2>ob — liệu có (câu hỏi gián tiếp)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">ob</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>ob</b> = liệu có. Câu hỏi gián tiếp. Động từ ở CUỐI!</p>
<p>Ich weiß nicht, <b>ob</b> er morgen <span class="rule-hl2">kommt</span>.</p>
<p>Kannst du mir sagen, <b>ob</b> das Geschäft noch offen <span class="rule-hl2">ist</span>?</p>`
},

satz_obwohl: {
de: `
<h2>obwohl — obwohl</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">obwohl</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>obwohl</b> = obwohl (Nebensatz, Verb am Ende!)</p>
<p>Er geht spazieren, <b>obwohl</b> es <span class="rule-hl2">regnet</span>.</p>
<div class="rule-box rule-blue"><b>obwohl vs. trotzdem:</b><br><b>obwohl</b> → Nebensatz (V am Ende): ..., obwohl es regnet.<br><b>trotzdem</b> → Hauptsatz (Inversion): Es regnet. <b>Trotzdem</b> geht er spazieren.</div>`,
ru: `
<h2>obwohl — хотя</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">obwohl</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>obwohl</b> = хотя (Nebensatz, глагол в конце!)</p>
<p>Er geht spazieren, <b>obwohl</b> es <span class="rule-hl2">regnet</span>.</p>
<div class="rule-box rule-blue"><b>obwohl vs. trotzdem:</b><br><b>obwohl</b> → Nebensatz (V am Ende): ..., obwohl es regnet.<br><b>trotzdem</b> → Hauptsatz (Inversion): Es regnet. <b>Trotzdem</b> geht er spazieren.</div>`,
en: `
<h2>obwohl — although</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">obwohl</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>obwohl</b> = although (subordinate, verb at end!)</p>
<p>Er geht spazieren, <b>obwohl</b> es <span class="rule-hl2">regnet</span>.</p>
<div class="rule-box rule-blue"><b>obwohl vs. trotzdem:</b><br><b>obwohl</b> → subordinate (V at end): ..., obwohl es regnet.<br><b>trotzdem</b> → main clause (inversion): Es regnet. <b>Trotzdem</b> geht er spazieren.</div>`,
tr: `
<h2>obwohl — -masına rağmen</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">obwohl</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>obwohl</b> = -masına rağmen (yan cümle, fiil sonda!)</p>
<p>Er geht spazieren, <b>obwohl</b> es <span class="rule-hl2">regnet</span>.</p>
<div class="rule-box rule-blue"><b>obwohl vs. trotzdem:</b><br><b>obwohl</b> → yan cümle (V sonda): ..., obwohl es regnet.<br><b>trotzdem</b> → ana cümle (devrik): Es regnet. <b>Trotzdem</b> geht er spazieren.</div>`,
ar: `
<h2>obwohl — رغم أن</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">obwohl</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>obwohl</b> = رغم أن (جملة تابعة، الفعل في النهاية!)</p>
<p>Er geht spazieren, <b>obwohl</b> es <span class="rule-hl2">regnet</span>.</p>
<div class="rule-box rule-blue"><b>obwohl vs. trotzdem:</b><br><b>obwohl</b> → جملة تابعة (الفعل في النهاية): ..., obwohl es regnet.<br><b>trotzdem</b> → جملة رئيسية (قلب): Es regnet. <b>Trotzdem</b> geht er spazieren.</div>`,
fa: `
<h2>obwohl — اگرچه</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">obwohl</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>obwohl</b> = اگرچه (جمله فرعی، فعل در پایان!)</p>
<p>Er geht spazieren, <b>obwohl</b> es <span class="rule-hl2">regnet</span>.</p>
<div class="rule-box rule-blue"><b>obwohl vs. trotzdem:</b><br><b>obwohl</b> → جمله فرعی (فعل در پایان): ..., obwohl es regnet.<br><b>trotzdem</b> → جمله اصلی (وارونه): Es regnet. <b>Trotzdem</b> geht er spazieren.</div>`,
vi: `
<h2>obwohl — mặc dù</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">obwohl</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>obwohl</b> = mặc dù (mệnh đề phụ, động từ cuối!)</p>
<p>Er geht spazieren, <b>obwohl</b> es <span class="rule-hl2">regnet</span>.</p>
<div class="rule-box rule-blue"><b>obwohl vs. trotzdem:</b><br><b>obwohl</b> → mệnh đề phụ (V cuối): ..., obwohl es regnet.<br><b>trotzdem</b> → mệnh đề chính (đảo): Es regnet. <b>Trotzdem</b> geht er spazieren.</div>`
},

satz_damit: {
de: `
<h2>damit / um...zu — damit</h2>
<div class="rule-formula"><span class="rule-hl">damit</span> + S + ... + V(Ende) | <span class="rule-hl2">um</span> + ... + <span class="rule-hl2">zu</span> + Infinitiv</div>
<p><b>damit</b> — verschiedene Subjekte:</p>
<p>Ich erkläre es, <b>damit</b> alle es <span class="rule-hl">verstehen</span>.</p>
<p><b>um...zu</b> — gleiches Subjekt:</p>
<p>Ich lerne Deutsch, <b>um</b> eine Arbeit <b>zu</b> <span class="rule-hl2">finden</span>.</p>`,
ru: `
<h2>damit / um...zu — чтобы</h2>
<div class="rule-formula"><span class="rule-hl">damit</span> + S + ... + V(Ende) | <span class="rule-hl2">um</span> + ... + <span class="rule-hl2">zu</span> + Infinitiv</div>
<p><b>damit</b> — разные подлежащие:</p>
<p>Ich erkläre es, <b>damit</b> alle es <span class="rule-hl">verstehen</span>.</p>
<p><b>um...zu</b> — одно подлежащее:</p>
<p>Ich lerne Deutsch, <b>um</b> eine Arbeit <b>zu</b> <span class="rule-hl2">finden</span>.</p>`,
en: `
<h2>damit / um...zu — so that</h2>
<div class="rule-formula"><span class="rule-hl">damit</span> + S + ... + V(Ende) | <span class="rule-hl2">um</span> + ... + <span class="rule-hl2">zu</span> + Infinitiv</div>
<p><b>damit</b> — different subjects:</p>
<p>Ich erkläre es, <b>damit</b> alle es <span class="rule-hl">verstehen</span>.</p>
<p><b>um...zu</b> — same subject:</p>
<p>Ich lerne Deutsch, <b>um</b> eine Arbeit <b>zu</b> <span class="rule-hl2">finden</span>.</p>`,
tr: `
<h2>damit / um...zu — -sin diye</h2>
<div class="rule-formula"><span class="rule-hl">damit</span> + S + ... + V(Ende) | <span class="rule-hl2">um</span> + ... + <span class="rule-hl2">zu</span> + Infinitiv</div>
<p><b>damit</b> — farklı özneler:</p>
<p>Ich erkläre es, <b>damit</b> alle es <span class="rule-hl">verstehen</span>.</p>
<p><b>um...zu</b> — aynı özne:</p>
<p>Ich lerne Deutsch, <b>um</b> eine Arbeit <b>zu</b> <span class="rule-hl2">finden</span>.</p>`,
ar: `
<h2>damit / um...zu — لكي</h2>
<div class="rule-formula"><span class="rule-hl">damit</span> + S + ... + V(Ende) | <span class="rule-hl2">um</span> + ... + <span class="rule-hl2">zu</span> + Infinitiv</div>
<p><b>damit</b> — فاعلان مختلفان:</p>
<p>Ich erkläre es, <b>damit</b> alle es <span class="rule-hl">verstehen</span>.</p>
<p><b>um...zu</b> — نفس الفاعل:</p>
<p>Ich lerne Deutsch, <b>um</b> eine Arbeit <b>zu</b> <span class="rule-hl2">finden</span>.</p>`,
fa: `
<h2>damit / um...zu — تا</h2>
<div class="rule-formula"><span class="rule-hl">damit</span> + S + ... + V(Ende) | <span class="rule-hl2">um</span> + ... + <span class="rule-hl2">zu</span> + Infinitiv</div>
<p><b>damit</b> — فاعل متفاوت:</p>
<p>Ich erkläre es, <b>damit</b> alle es <span class="rule-hl">verstehen</span>.</p>
<p><b>um...zu</b> — فاعل یکسان:</p>
<p>Ich lerne Deutsch, <b>um</b> eine Arbeit <b>zu</b> <span class="rule-hl2">finden</span>.</p>`,
vi: `
<h2>damit / um...zu — để</h2>
<div class="rule-formula"><span class="rule-hl">damit</span> + S + ... + V(Ende) | <span class="rule-hl2">um</span> + ... + <span class="rule-hl2">zu</span> + Infinitiv</div>
<p><b>damit</b> — hai chủ ngữ khác nhau:</p>
<p>Ich erkläre es, <b>damit</b> alle es <span class="rule-hl">verstehen</span>.</p>
<p><b>um...zu</b> — cùng một chủ ngữ:</p>
<p>Ich lerne Deutsch, <b>um</b> eine Arbeit <b>zu</b> <span class="rule-hl2">finden</span>.</p>`
},

satz_denn: {
de: `
<h2>denn — denn</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">denn</span> + S + V + O</div>
<p><b>denn</b> = denn. Hauptsatz — normale Wortstellung!</p>
<p>Ich bleibe zu Hause, <b>denn</b> ich <span class="rule-hl">bin</span> krank.</p>
<div class="rule-box rule-green"><b>denn</b> (V auf Pos. 2) ≠ <b>weil</b> (V am Ende)</div>`,
ru: `
<h2>denn — ведь, потому что</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">denn</span> + S + V + O</div>
<p><b>denn</b> = потому что, ведь. Главное предложение — обычный порядок слов!</p>
<p>Ich bleibe zu Hause, <b>denn</b> ich <span class="rule-hl">bin</span> krank.</p>
<div class="rule-box rule-green"><b>denn</b> (V на Pos. 2) ≠ <b>weil</b> (V am Ende)</div>`,
en: `
<h2>denn — because, for</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">denn</span> + S + V + O</div>
<p><b>denn</b> = because. Main clause — normal word order!</p>
<p>Ich bleibe zu Hause, <b>denn</b> ich <span class="rule-hl">bin</span> krank.</p>
<div class="rule-box rule-green"><b>denn</b> (V at Pos. 2) ≠ <b>weil</b> (V at end)</div>`,
tr: `
<h2>denn — çünkü</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">denn</span> + S + V + O</div>
<p><b>denn</b> = çünkü. Ana cümle — normal sıra!</p>
<p>Ich bleibe zu Hause, <b>denn</b> ich <span class="rule-hl">bin</span> krank.</p>
<div class="rule-box rule-green"><b>denn</b> (V Pos. 2) ≠ <b>weil</b> (V sonda)</div>`,
ar: `
<h2>denn — لأن</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">denn</span> + S + V + O</div>
<p><b>denn</b> = لأن. جملة رئيسية — ترتيب عادي!</p>
<p>Ich bleibe zu Hause, <b>denn</b> ich <span class="rule-hl">bin</span> krank.</p>
<div class="rule-box rule-green"><b>denn</b> (الفعل في الموقع 2) ≠ <b>weil</b> (الفعل في النهاية)</div>`,
fa: `
<h2>denn — زیرا</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">denn</span> + S + V + O</div>
<p><b>denn</b> = زیرا. جمله اصلی — ترتیب عادی!</p>
<p>Ich bleibe zu Hause, <b>denn</b> ich <span class="rule-hl">bin</span> krank.</p>
<div class="rule-box rule-green"><b>denn</b> (فعل در موقعیت 2) ≠ <b>weil</b> (فعل در پایان)</div>`,
vi: `
<h2>denn — bởi vì</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">denn</span> + S + V + O</div>
<p><b>denn</b> = bởi vì. Mệnh đề chính — trật tự từ bình thường!</p>
<p>Ich bleibe zu Hause, <b>denn</b> ich <span class="rule-hl">bin</span> krank.</p>
<div class="rule-box rule-green"><b>denn</b> (V ở vị trí 2) ≠ <b>weil</b> (V ở cuối)</div>`
},

satz_aber: {
de: `
<h2>aber / sondern — aber / sondern</h2>
<div class="rule-formula">HS, <span class="rule-hl">aber</span> + S + V + O | HS, <span class="rule-hl2">sondern</span> + ...</div>
<p><b>aber</b> = aber (Gegensatz):</p>
<p>Das Essen ist teuer, <b>aber</b> es schmeckt gut.</p>
<p><b>sondern</b> = sondern (nach Negation):</p>
<p>Er trinkt nicht Kaffee, <b>sondern</b> Tee.`,
ru: `
<h2>aber / sondern — но</h2>
<div class="rule-formula">HS, <span class="rule-hl">aber</span> + S + V + O | HS, <span class="rule-hl2">sondern</span> + ...</div>
<p><b>aber</b> = но (противопоставление):</p>
<p>Das Essen ist teuer, <b>aber</b> es schmeckt gut.</p>
<p><b>sondern</b> = а (после отрицания):</p>
<p>Er trinkt nicht Kaffee, <b>sondern</b> Tee.`,
en: `
<h2>aber / sondern — but</h2>
<div class="rule-formula">HS, <span class="rule-hl">aber</span> + S + V + O | HS, <span class="rule-hl2">sondern</span> + ...</div>
<p><b>aber</b> = but (contrast):</p>
<p>Das Essen ist teuer, <b>aber</b> es schmeckt gut.</p>
<p><b>sondern</b> = but rather (after negation):</p>
<p>Er trinkt nicht Kaffee, <b>sondern</b> Tee.`,
tr: `
<h2>aber / sondern — ama</h2>
<div class="rule-formula">HS, <span class="rule-hl">aber</span> + S + V + O | HS, <span class="rule-hl2">sondern</span> + ...</div>
<p><b>aber</b> = ama (karşıtlık):</p>
<p>Das Essen ist teuer, <b>aber</b> es schmeckt gut.</p>
<p><b>sondern</b> = aksine (olumsuzlamadan sonra):</p>
<p>Er trinkt nicht Kaffee, <b>sondern</b> Tee.`,
ar: `
<h2>aber / sondern — لكن</h2>
<div class="rule-formula">HS, <span class="rule-hl">aber</span> + S + V + O | HS, <span class="rule-hl2">sondern</span> + ...</div>
<p><b>aber</b> = لكن (تباين):</p>
<p>Das Essen ist teuer, <b>aber</b> es schmeckt gut.</p>
<p><b>sondern</b> = بل (بعد النفي):</p>
<p>Er trinkt nicht Kaffee, <b>sondern</b> Tee.`,
fa: `
<h2>aber / sondern — ولی</h2>
<div class="rule-formula">HS, <span class="rule-hl">aber</span> + S + V + O | HS, <span class="rule-hl2">sondern</span> + ...</div>
<p><b>aber</b> = ولی (تضاد):</p>
<p>Das Essen ist teuer, <b>aber</b> es schmeckt gut.</p>
<p><b>sondern</b> = بلکه (بعد از نفی):</p>
<p>Er trinkt nicht Kaffee, <b>sondern</b> Tee.`,
vi: `
<h2>aber / sondern — nhưng</h2>
<div class="rule-formula">HS, <span class="rule-hl">aber</span> + S + V + O | HS, <span class="rule-hl2">sondern</span> + ...</div>
<p><b>aber</b> = nhưng (tương phản):</p>
<p>Das Essen ist teuer, <b>aber</b> es schmeckt gut.</p>
<p><b>sondern</b> = mà là (sau phủ định):</p>
<p>Er trinkt nicht Kaffee, <b>sondern</b> Tee.`
},

satz_trotzdem: {
de: `
<h2>trotzdem / deshalb — trotzdem / deshalb</h2>
<div class="rule-formula"><span class="rule-hl">trotzdem/deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>Nach trotzdem und deshalb: <b>Inversion</b> (V+S)!</p>
<p>Es regnet. <b>Trotzdem</b> <span class="rule-hl2">geht</span> er spazieren.</p>
<p>Er ist müde. <b>Deshalb</b> <span class="rule-hl2">bleibt</span> er zu Hause.</p>
<div class="rule-box rule-blue"><b>trotzdem</b> = trotzdem (entgegen)<br><b>deshalb</b> = deshalb (Folge)</div>`,
ru: `
<h2>trotzdem / deshalb — тем не менее / поэтому</h2>
<div class="rule-formula"><span class="rule-hl">trotzdem/deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>После trotzdem и deshalb — <b>инверсия</b> (V+S)!</p>
<p>Es regnet. <b>Trotzdem</b> <span class="rule-hl2">geht</span> er spazieren.</p>
<p>Er ist müde. <b>Deshalb</b> <span class="rule-hl2">bleibt</span> er zu Hause.</p>
<div class="rule-box rule-blue"><b>trotzdem</b> = тем не менее (вопреки)<br><b>deshalb</b> = поэтому (следствие)</div>`,
en: `
<h2>trotzdem / deshalb — nevertheless / therefore</h2>
<div class="rule-formula"><span class="rule-hl">trotzdem/deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>After trotzdem and deshalb: <b>inversion</b> (V+S)!</p>
<p>Es regnet. <b>Trotzdem</b> <span class="rule-hl2">geht</span> er spazieren.</p>
<p>Er ist müde. <b>Deshalb</b> <span class="rule-hl2">bleibt</span> er zu Hause.</p>
<div class="rule-box rule-blue"><b>trotzdem</b> = nevertheless (despite)<br><b>deshalb</b> = therefore (consequence)</div>`,
tr: `
<h2>trotzdem / deshalb — yine de / bu yüzden</h2>
<div class="rule-formula"><span class="rule-hl">trotzdem/deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>trotzdem ve deshalb'den sonra: <b>devrik</b> (V+S)!</p>
<p>Es regnet. <b>Trotzdem</b> <span class="rule-hl2">geht</span> er spazieren.</p>
<p>Er ist müde. <b>Deshalb</b> <span class="rule-hl2">bleibt</span> er zu Hause.</p>
<div class="rule-box rule-blue"><b>trotzdem</b> = yine de (buna rağmen)<br><b>deshalb</b> = bu yüzden (sonuç)</div>`,
ar: `
<h2>trotzdem / deshalb — رغم ذلك / لذلك</h2>
<div class="rule-formula"><span class="rule-hl">trotzdem/deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>بعد trotzdem و deshalb: <b>قلب</b> (V+S)!</p>
<p>Es regnet. <b>Trotzdem</b> <span class="rule-hl2">geht</span> er spazieren.</p>
<p>Er ist müde. <b>Deshalb</b> <span class="rule-hl2">bleibt</span> er zu Hause.</p>
<div class="rule-box rule-blue"><b>trotzdem</b> = رغم ذلك<br><b>deshalb</b> = لذلك (نتيجة)</div>`,
fa: `
<h2>trotzdem / deshalb — با این حال / بنابراین</h2>
<div class="rule-formula"><span class="rule-hl">trotzdem/deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>بعد از trotzdem و deshalb: <b>وارونه</b> (V+S)!</p>
<p>Es regnet. <b>Trotzdem</b> <span class="rule-hl2">geht</span> er spazieren.</p>
<p>Er ist müde. <b>Deshalb</b> <span class="rule-hl2">bleibt</span> er zu Hause.</p>
<div class="rule-box rule-blue"><b>trotzdem</b> = با این حال (علی‌رغم)<br><b>deshalb</b> = بنابراین (نتیجه)</div>`,
vi: `
<h2>trotzdem / deshalb — tuy nhiên / vì vậy</h2>
<div class="rule-formula"><span class="rule-hl">trotzdem/deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>Sau trotzdem và deshalb: <b>đảo</b> (V+S)!</p>
<p>Es regnet. <b>Trotzdem</b> <span class="rule-hl2">geht</span> er spazieren.</p>
<p>Er ist müde. <b>Deshalb</b> <span class="rule-hl2">bleibt</span> er zu Hause.</p>
<div class="rule-box rule-blue"><b>trotzdem</b> = tuy nhiên (bất chấp)<br><b>deshalb</b> = vì vậy (hệ quả)</div>`
},

satz_nachdem: {
de: `
<h2>nachdem / bevor — nachdem / bevor</h2>
<div class="rule-formula"><span class="rule-hl">Nachdem</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>nachdem</b> = nachdem. Wichtig: verschiedene Zeiten!</p>
<p><b>Nachdem</b> er gegessen <span class="rule-hl2">hatte</span>, ging er spazieren. (Plusquamperfekt → Präteritum)</p>
<p><b>bevor</b> = bevor:</p>
<p><b>Bevor</b> du <span class="rule-hl2">gehst</span>, ruf mich an!</p>`,
ru: `
<h2>nachdem / bevor — после того как / прежде чем</h2>
<div class="rule-formula"><span class="rule-hl">Nachdem</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>nachdem</b> = после того как. Важно: разные времена!</p>
<p><b>Nachdem</b> er gegessen <span class="rule-hl2">hatte</span>, ging er spazieren. (Plusquamperfekt → Präteritum)</p>
<p><b>bevor</b> = прежде чем:</p>
<p><b>Bevor</b> du <span class="rule-hl2">gehst</span>, ruf mich an!</p>`,
en: `
<h2>nachdem / bevor — after / before</h2>
<div class="rule-formula"><span class="rule-hl">Nachdem</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>nachdem</b> = after. Important: different tenses!</p>
<p><b>Nachdem</b> er gegessen <span class="rule-hl2">hatte</span>, ging er spazieren. (Plusquamperfekt → Präteritum)</p>
<p><b>bevor</b> = before:</p>
<p><b>Bevor</b> du <span class="rule-hl2">gehst</span>, ruf mich an!</p>`,
tr: `
<h2>nachdem / bevor — -dıktan sonra / -meden önce</h2>
<div class="rule-formula"><span class="rule-hl">Nachdem</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>nachdem</b> = -dıktan sonra. Önemli: farklı zamanlar!</p>
<p><b>Nachdem</b> er gegessen <span class="rule-hl2">hatte</span>, ging er spazieren. (Plusquamperfekt → Präteritum)</p>
<p><b>bevor</b> = -meden önce:</p>
<p><b>Bevor</b> du <span class="rule-hl2">gehst</span>, ruf mich an!</p>`,
ar: `
<h2>nachdem / bevor — بعد أن / قبل أن</h2>
<div class="rule-formula"><span class="rule-hl">Nachdem</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>nachdem</b> = بعد أن. مهم: أزمنة مختلفة!</p>
<p><b>Nachdem</b> er gegessen <span class="rule-hl2">hatte</span>, ging er spazieren. (Plusquamperfekt → Präteritum)</p>
<p><b>bevor</b> = قبل أن:</p>
<p><b>Bevor</b> du <span class="rule-hl2">gehst</span>, ruf mich an!</p>`,
fa: `
<h2>nachdem / bevor — بعد از آنکه / قبل از آنکه</h2>
<div class="rule-formula"><span class="rule-hl">Nachdem</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>nachdem</b> = بعد از آنکه. مهم: زمان‌های متفاوت!</p>
<p><b>Nachdem</b> er gegessen <span class="rule-hl2">hatte</span>, ging er spazieren. (Plusquamperfekt → Präteritum)</p>
<p><b>bevor</b> = قبل از آنکه:</p>
<p><b>Bevor</b> du <span class="rule-hl2">gehst</span>, ruf mich an!</p>`,
vi: `
<h2>nachdem / bevor — sau khi / trước khi</h2>
<div class="rule-formula"><span class="rule-hl">Nachdem</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>nachdem</b> = sau khi. Quan trọng: thì khác nhau!</p>
<p><b>Nachdem</b> er gegessen <span class="rule-hl2">hatte</span>, ging er spazieren. (Plusquamperfekt → Präteritum)</p>
<p><b>bevor</b> = trước khi:</p>
<p><b>Bevor</b> du <span class="rule-hl2">gehst</span>, ruf mich an!</p>`
},

satz_passiv: {
de: `
<h2>Passiv</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">werden</span> + ... + <span class="rule-hl2">Partizip II</span></div>
<table class="rule-table">
<tr><th>Tempus</th><th>Formel</th><th>Beispiel</th></tr>
<tr><td>Präsens</td><td>wird + P.II</td><td>Das Haus <b>wird</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Präteritum</td><td>wurde + P.II</td><td>Das Haus <b>wurde</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Perfekt</td><td>ist + P.II + worden</td><td>Das Haus <b>ist</b> <span class="rule-hl2">gebaut</span> <b>worden</b>.</td></tr>
<tr><td>mit Modal</td><td>Modal + P.II + werden</td><td>Das Haus <b>muss</b> <span class="rule-hl2">gebaut</span> <b>werden</b>.</td></tr>
</table>`,
ru: `
<h2>Passiv — Пассивный залог</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">werden</span> + ... + <span class="rule-hl2">Partizip II</span></div>
<table class="rule-table">
<tr><th>Время</th><th>Формула</th><th>Beispiel</th></tr>
<tr><td>Präsens</td><td>wird + P.II</td><td>Das Haus <b>wird</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Präteritum</td><td>wurde + P.II</td><td>Das Haus <b>wurde</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Perfekt</td><td>ist + P.II + worden</td><td>Das Haus <b>ist</b> <span class="rule-hl2">gebaut</span> <b>worden</b>.</td></tr>
<tr><td>mit Modal</td><td>Modal + P.II + werden</td><td>Das Haus <b>muss</b> <span class="rule-hl2">gebaut</span> <b>werden</b>.</td></tr>
</table>`,
en: `
<h2>Passiv — Passive voice</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">werden</span> + ... + <span class="rule-hl2">Partizip II</span></div>
<table class="rule-table">
<tr><th>Tense</th><th>Formula</th><th>Example</th></tr>
<tr><td>Präsens</td><td>wird + P.II</td><td>Das Haus <b>wird</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Präteritum</td><td>wurde + P.II</td><td>Das Haus <b>wurde</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Perfekt</td><td>ist + P.II + worden</td><td>Das Haus <b>ist</b> <span class="rule-hl2">gebaut</span> <b>worden</b>.</td></tr>
<tr><td>mit Modal</td><td>Modal + P.II + werden</td><td>Das Haus <b>muss</b> <span class="rule-hl2">gebaut</span> <b>werden</b>.</td></tr>
</table>`,
tr: `
<h2>Passiv — Edilgen çatı</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">werden</span> + ... + <span class="rule-hl2">Partizip II</span></div>
<table class="rule-table">
<tr><th>Zaman</th><th>Formül</th><th>Örnek</th></tr>
<tr><td>Präsens</td><td>wird + P.II</td><td>Das Haus <b>wird</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Präteritum</td><td>wurde + P.II</td><td>Das Haus <b>wurde</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Perfekt</td><td>ist + P.II + worden</td><td>Das Haus <b>ist</b> <span class="rule-hl2">gebaut</span> <b>worden</b>.</td></tr>
<tr><td>mit Modal</td><td>Modal + P.II + werden</td><td>Das Haus <b>muss</b> <span class="rule-hl2">gebaut</span> <b>werden</b>.</td></tr>
</table>`,
ar: `
<h2>Passiv — المبني للمجهول</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">werden</span> + ... + <span class="rule-hl2">Partizip II</span></div>
<table class="rule-table">
<tr><th>الزمن</th><th>الصيغة</th><th>مثال</th></tr>
<tr><td>Präsens</td><td>wird + P.II</td><td>Das Haus <b>wird</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Präteritum</td><td>wurde + P.II</td><td>Das Haus <b>wurde</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Perfekt</td><td>ist + P.II + worden</td><td>Das Haus <b>ist</b> <span class="rule-hl2">gebaut</span> <b>worden</b>.</td></tr>
<tr><td>mit Modal</td><td>Modal + P.II + werden</td><td>Das Haus <b>muss</b> <span class="rule-hl2">gebaut</span> <b>werden</b>.</td></tr>
</table>`,
fa: `
<h2>Passiv — ساختار مجهول</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">werden</span> + ... + <span class="rule-hl2">Partizip II</span></div>
<table class="rule-table">
<tr><th>زمان</th><th>فرمول</th><th>مثال</th></tr>
<tr><td>Präsens</td><td>wird + P.II</td><td>Das Haus <b>wird</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Präteritum</td><td>wurde + P.II</td><td>Das Haus <b>wurde</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Perfekt</td><td>ist + P.II + worden</td><td>Das Haus <b>ist</b> <span class="rule-hl2">gebaut</span> <b>worden</b>.</td></tr>
<tr><td>mit Modal</td><td>Modal + P.II + werden</td><td>Das Haus <b>muss</b> <span class="rule-hl2">gebaut</span> <b>werden</b>.</td></tr>
</table>`,
vi: `
<h2>Passiv — Thể bị động</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">werden</span> + ... + <span class="rule-hl2">Partizip II</span></div>
<table class="rule-table">
<tr><th>Thì</th><th>Công thức</th><th>Ví dụ</th></tr>
<tr><td>Präsens</td><td>wird + P.II</td><td>Das Haus <b>wird</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Präteritum</td><td>wurde + P.II</td><td>Das Haus <b>wurde</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Perfekt</td><td>ist + P.II + worden</td><td>Das Haus <b>ist</b> <span class="rule-hl2">gebaut</span> <b>worden</b>.</td></tr>
<tr><td>mit Modal</td><td>Modal + P.II + werden</td><td>Das Haus <b>muss</b> <span class="rule-hl2">gebaut</span> <b>werden</b>.</td></tr>
</table>`
},

satz_konjunktiv: {
de: `
<h2>Konjunktiv II</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + hätte/wäre, <span class="rule-hl2">würde</span> + S + Infinitiv</div>
<table class="rule-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>Beispiel</th></tr>
<tr><td>sein</td><td><b>wäre</b></td><td>Wenn ich reich <b>wäre</b>... (wenn ich reich wäre)</td></tr>
<tr><td>haben</td><td><b>hätte</b></td><td>Wenn ich Zeit <b>hätte</b>...</td></tr>
<tr><td>andere</td><td><b>würde</b> + Inf.</td><td>Ich <b>würde</b> reisen.</td></tr>
<tr><td>können</td><td><b>könnte</b></td><td>Ich <b>könnte</b> helfen.</td></tr>
<tr><td>müssen</td><td><b>müsste</b></td><td>Du <b>müsstest</b> lernen.</td></tr>
</table>
<p>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Reise machen.</p>
<div class="rule-box rule-green"><b>An deiner Stelle würde ich...</b> — höflicher Rat</div>`,
ru: `
<h2>Konjunktiv II — Сослагательное наклонение</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + hätte/wäre, <span class="rule-hl2">würde</span> + S + Infinitiv</div>
<table class="rule-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>Beispiel</th></tr>
<tr><td>sein</td><td><b>wäre</b></td><td>Wenn ich reich <b>wäre</b>... (если бы я был богатым)</td></tr>
<tr><td>haben</td><td><b>hätte</b></td><td>Wenn ich Zeit <b>hätte</b>... (если бы у меня было время)</td></tr>
<tr><td>andere</td><td><b>würde</b> + Inf.</td><td>Ich <b>würde</b> reisen. (я бы путешествовал)</td></tr>
<tr><td>können</td><td><b>könnte</b></td><td>Ich <b>könnte</b> helfen.</td></tr>
<tr><td>müssen</td><td><b>müsste</b></td><td>Du <b>müsstest</b> lernen.</td></tr>
</table>
<p>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Reise machen.</p>
<div class="rule-box rule-green"><b>An deiner Stelle würde ich...</b> — вежливый совет</div>`,
en: `
<h2>Konjunktiv II — Subjunctive</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + hätte/wäre, <span class="rule-hl2">würde</span> + S + Infinitiv</div>
<table class="rule-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>Example</th></tr>
<tr><td>sein</td><td><b>wäre</b></td><td>Wenn ich reich <b>wäre</b>... (if I were rich)</td></tr>
<tr><td>haben</td><td><b>hätte</b></td><td>Wenn ich Zeit <b>hätte</b>... (if I had time)</td></tr>
<tr><td>andere</td><td><b>würde</b> + Inf.</td><td>Ich <b>würde</b> reisen. (I would travel)</td></tr>
<tr><td>können</td><td><b>könnte</b></td><td>Ich <b>könnte</b> helfen.</td></tr>
<tr><td>müssen</td><td><b>müsste</b></td><td>Du <b>müsstest</b> lernen.</td></tr>
</table>
<p>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Reise machen.</p>
<div class="rule-box rule-green"><b>An deiner Stelle würde ich...</b> — polite advice</div>`,
tr: `
<h2>Konjunktiv II — Dilek kipi</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + hätte/wäre, <span class="rule-hl2">würde</span> + S + Infinitiv</div>
<table class="rule-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>Örnek</th></tr>
<tr><td>sein</td><td><b>wäre</b></td><td>Wenn ich reich <b>wäre</b>... (zengin olsaydım)</td></tr>
<tr><td>haben</td><td><b>hätte</b></td><td>Wenn ich Zeit <b>hätte</b>... (zamanım olsaydı)</td></tr>
<tr><td>andere</td><td><b>würde</b> + Inf.</td><td>Ich <b>würde</b> reisen. (seyahat ederdim)</td></tr>
<tr><td>können</td><td><b>könnte</b></td><td>Ich <b>könnte</b> helfen.</td></tr>
<tr><td>müssen</td><td><b>müsste</b></td><td>Du <b>müsstest</b> lernen.</td></tr>
</table>
<p>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Reise machen.</p>
<div class="rule-box rule-green"><b>An deiner Stelle würde ich...</b> — kibar öneri</div>`,
ar: `
<h2>Konjunktiv II — صيغة الشرط</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + hätte/wäre, <span class="rule-hl2">würde</span> + S + Infinitiv</div>
<table class="rule-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>مثال</th></tr>
<tr><td>sein</td><td><b>wäre</b></td><td>Wenn ich reich <b>wäre</b>... (لو كنت غنياً)</td></tr>
<tr><td>haben</td><td><b>hätte</b></td><td>Wenn ich Zeit <b>hätte</b>... (لو كان لدي وقت)</td></tr>
<tr><td>andere</td><td><b>würde</b> + Inf.</td><td>Ich <b>würde</b> reisen. (كنت سأسافر)</td></tr>
<tr><td>können</td><td><b>könnte</b></td><td>Ich <b>könnte</b> helfen.</td></tr>
<tr><td>müssen</td><td><b>müsste</b></td><td>Du <b>müsstest</b> lernen.</td></tr>
</table>
<p>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Reise machen.</p>
<div class="rule-box rule-green"><b>An deiner Stelle würde ich...</b> — نصيحة مهذبة</div>`,
fa: `
<h2>Konjunktiv II — وجه شرطی</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + hätte/wäre, <span class="rule-hl2">würde</span> + S + Infinitiv</div>
<table class="rule-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>مثال</th></tr>
<tr><td>sein</td><td><b>wäre</b></td><td>Wenn ich reich <b>wäre</b>... (اگر ثروتمند بودم)</td></tr>
<tr><td>haben</td><td><b>hätte</b></td><td>Wenn ich Zeit <b>hätte</b>... (اگر وقت داشتم)</td></tr>
<tr><td>andere</td><td><b>würde</b> + Inf.</td><td>Ich <b>würde</b> reisen. (سفر می‌کردم)</td></tr>
<tr><td>können</td><td><b>könnte</b></td><td>Ich <b>könnte</b> helfen.</td></tr>
<tr><td>müssen</td><td><b>müsste</b></td><td>Du <b>müsstest</b> lernen.</td></tr>
</table>
<p>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Reise machen.</p>
<div class="rule-box rule-green"><b>An deiner Stelle würde ich...</b> — توصیه مؤدبانه</div>`,
vi: `
<h2>Konjunktiv II — Thức giả định</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + hätte/wäre, <span class="rule-hl2">würde</span> + S + Infinitiv</div>
<table class="rule-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>Ví dụ</th></tr>
<tr><td>sein</td><td><b>wäre</b></td><td>Wenn ich reich <b>wäre</b>... (nếu tôi giàu)</td></tr>
<tr><td>haben</td><td><b>hätte</b></td><td>Wenn ich Zeit <b>hätte</b>... (nếu tôi có thời gian)</td></tr>
<tr><td>andere</td><td><b>würde</b> + Inf.</td><td>Ich <b>würde</b> reisen. (tôi sẽ đi du lịch)</td></tr>
<tr><td>können</td><td><b>könnte</b></td><td>Ich <b>könnte</b> helfen.</td></tr>
<tr><td>müssen</td><td><b>müsste</b></td><td>Du <b>müsstest</b> lernen.</td></tr>
</table>
<p>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Reise machen.</p>
<div class="rule-box rule-green"><b>An deiner Stelle würde ich...</b> — lời khuyên lịch sự</div>`
},

satz_je_desto: {
de: `
<h2>je...desto — je...desto</h2>
<div class="rule-formula"><span class="rule-hl">Je</span> + Komparativ + S + V(Ende), <span class="rule-hl2">desto</span> + Komparativ + V + S</div>
<p><b>Je</b> mehr man übt, <b>desto</b> besser wird man.</p>
<p><b>Je</b> älter man wird, <b>desto</b> weiser wird man.</p>
<div class="rule-box rule-blue">Im je-Teil: Verb am Ende!<br>Im desto-Teil: Inversion (V+S)!</div>`,
ru: `
<h2>je...desto — чем...тем</h2>
<div class="rule-formula"><span class="rule-hl">Je</span> + Komparativ + S + V(Ende), <span class="rule-hl2">desto</span> + Komparativ + V + S</div>
<p><b>Je</b> mehr man übt, <b>desto</b> besser wird man.</p>
<p><b>Je</b> älter man wird, <b>desto</b> weiser wird man.</p>
<div class="rule-box rule-blue">В je-части: Verb am Ende!<br>В desto-части: Inversion (V+S)!</div>`,
en: `
<h2>je...desto — the...the</h2>
<div class="rule-formula"><span class="rule-hl">Je</span> + Komparativ + S + V(Ende), <span class="rule-hl2">desto</span> + Komparativ + V + S</div>
<p><b>Je</b> mehr man übt, <b>desto</b> besser wird man.</p>
<p><b>Je</b> älter man wird, <b>desto</b> weiser wird man.</p>
<div class="rule-box rule-blue">In the je-part: verb at the end!<br>In the desto-part: inversion (V+S)!</div>`,
tr: `
<h2>je...desto — ne kadar...o kadar</h2>
<div class="rule-formula"><span class="rule-hl">Je</span> + Komparativ + S + V(Ende), <span class="rule-hl2">desto</span> + Komparativ + V + S</div>
<p><b>Je</b> mehr man übt, <b>desto</b> besser wird man.</p>
<p><b>Je</b> älter man wird, <b>desto</b> weiser wird man.</p>
<div class="rule-box rule-blue">je kısmında: fiil sonda!<br>desto kısmında: devrik (V+S)!</div>`,
ar: `
<h2>je...desto — كلما...كلما</h2>
<div class="rule-formula"><span class="rule-hl">Je</span> + Komparativ + S + V(Ende), <span class="rule-hl2">desto</span> + Komparativ + V + S</div>
<p><b>Je</b> mehr man übt, <b>desto</b> besser wird man.</p>
<p><b>Je</b> älter man wird, <b>desto</b> weiser wird man.</p>
<div class="rule-box rule-blue">في قسم je: الفعل في النهاية!<br>في قسم desto: قلب (V+S)!</div>`,
fa: `
<h2>je...desto — هرچه...آنقدر</h2>
<div class="rule-formula"><span class="rule-hl">Je</span> + Komparativ + S + V(Ende), <span class="rule-hl2">desto</span> + Komparativ + V + S</div>
<p><b>Je</b> mehr man übt, <b>desto</b> besser wird man.</p>
<p><b>Je</b> älter man wird, <b>desto</b> weiser wird man.</p>
<div class="rule-box rule-blue">در بخش je: فعل در پایان!<br>در بخش desto: وارونه (V+S)!</div>`,
vi: `
<h2>je...desto — càng...càng</h2>
<div class="rule-formula"><span class="rule-hl">Je</span> + Komparativ + S + V(Ende), <span class="rule-hl2">desto</span> + Komparativ + V + S</div>
<p><b>Je</b> mehr man übt, <b>desto</b> besser wird man.</p>
<p><b>Je</b> älter man wird, <b>desto</b> weiser wird man.</p>
<div class="rule-box rule-blue">Ở phần je: động từ ở cuối!<br>Ở phần desto: đảo (V+S)!</div>`
},

satz_relativ: {
de: `
<h2>Relativsätze — Relativsätze</h2>
<div class="rule-formula">Nomen, + <span class="rule-hl">Relativpronomen</span> + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<table class="rule-table">
<tr><th></th><th>Mask.</th><th>Fem.</th><th>Neutr.</th><th>Plural</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
</table>
<p>Der Mann, <b>der</b> dort <span class="rule-hl2">steht</span>, ist mein Lehrer.</p>
<p>Die Frau, <b>die</b> ich gestern <span class="rule-hl2">getroffen habe</span>, ist Ärztin.`,
ru: `
<h2>Relativsätze — Относительные предложения</h2>
<div class="rule-formula">Nomen, + <span class="rule-hl">Relativpronomen</span> + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<table class="rule-table">
<tr><th></th><th>Mask.</th><th>Fem.</th><th>Neutr.</th><th>Plural</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
</table>
<p>Der Mann, <b>der</b> dort <span class="rule-hl2">steht</span>, ist mein Lehrer.</p>
<p>Die Frau, <b>die</b> ich gestern <span class="rule-hl2">getroffen habe</span>, ist Ärztin.`,
en: `
<h2>Relativsätze — Relative clauses</h2>
<div class="rule-formula">Nomen, + <span class="rule-hl">Relativpronomen</span> + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<table class="rule-table">
<tr><th></th><th>Masc.</th><th>Fem.</th><th>Neut.</th><th>Plural</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
</table>
<p>Der Mann, <b>der</b> dort <span class="rule-hl2">steht</span>, ist mein Lehrer.</p>
<p>Die Frau, <b>die</b> ich gestern <span class="rule-hl2">getroffen habe</span>, ist Ärztin.`,
tr: `
<h2>Relativsätze — İlgi cümleleri</h2>
<div class="rule-formula">Nomen, + <span class="rule-hl">Relativpronomen</span> + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<table class="rule-table">
<tr><th></th><th>Eril</th><th>Dişil</th><th>Nötr</th><th>Çoğul</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
</table>
<p>Der Mann, <b>der</b> dort <span class="rule-hl2">steht</span>, ist mein Lehrer.</p>
<p>Die Frau, <b>die</b> ich gestern <span class="rule-hl2">getroffen habe</span>, ist Ärztin.`,
ar: `
<h2>Relativsätze — جمل الوصل</h2>
<div class="rule-formula">Nomen, + <span class="rule-hl">Relativpronomen</span> + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<table class="rule-table">
<tr><th></th><th>مذكر</th><th>مؤنث</th><th>محايد</th><th>جمع</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
</table>
<p>Der Mann, <b>der</b> dort <span class="rule-hl2">steht</span>, ist mein Lehrer.</p>
<p>Die Frau, <b>die</b> ich gestern <span class="rule-hl2">getroffen habe</span>, ist Ärztin.`,
fa: `
<h2>Relativsätze — جملات موصولی</h2>
<div class="rule-formula">Nomen, + <span class="rule-hl">Relativpronomen</span> + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<table class="rule-table">
<tr><th></th><th>مذکر</th><th>مؤنث</th><th>خنثی</th><th>جمع</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
</table>
<p>Der Mann, <b>der</b> dort <span class="rule-hl2">steht</span>, ist mein Lehrer.</p>
<p>Die Frau, <b>die</b> ich gestern <span class="rule-hl2">getroffen habe</span>, ist Ärztin.`,
vi: `
<h2>Relativsätze — Mệnh đề quan hệ</h2>
<div class="rule-formula">Nomen, + <span class="rule-hl">Relativpronomen</span> + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<table class="rule-table">
<tr><th></th><th>g.đực</th><th>g.cái</th><th>t.tính</th><th>số nh.</th></tr>
<tr><td>Nom</td><td><b>der</b></td><td><b>die</b></td><td><b>das</b></td><td><b>die</b></td></tr>
<tr><td>Akk</td><td><span class="rule-hl">den</span></td><td>die</td><td>das</td><td>die</td></tr>
<tr><td>Dat</td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">der</span></td><td><span class="rule-hl2">dem</span></td><td><span class="rule-hl2">denen</span></td></tr>
<tr><td>Gen</td><td>dessen</td><td>deren</td><td>dessen</td><td>deren</td></tr>
</table>
<p>Der Mann, <b>der</b> dort <span class="rule-hl2">steht</span>, ist mein Lehrer.</p>
<p>Die Frau, <b>die</b> ich gestern <span class="rule-hl2">getroffen habe</span>, ist Ärztin.`
},

satz_bevor: {
de: `
<h2>bevor — bevor</h2>
<div class="rule-formula">HS, <span class="rule-hl">bevor</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bevor</b> leitet einen Nebensatz ein — das Verb steht am Ende.</p>
<table class="rule-table">
<tr><th>HS</th><th>Konj.</th><th>Subjekt</th><th>...</th><th>Verb</th></tr>
<tr><td>Ich frühstücke,</td><td><b>bevor</b></td><td>ich</td><td>zur Arbeit</td><td><b>gehe</b>.</td></tr>
</table>
<p>Wasch dir die Hände, <b>bevor</b> du <span class="rule-hl2">isst</span>.</p>
<p>Bevor ich nach Hause <span class="rule-hl2">komme</span>, kaufe ich Brot.</p>`,
ru: `
<h2>bevor — прежде чем</h2>
<div class="rule-formula">HS, <span class="rule-hl">bevor</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bevor</b> вводит придаточное — глагол идёт в конец.</p>
<table class="rule-table">
<tr><th>Главное</th><th>Союз</th><th>Подлежащее</th><th>...</th><th>Глагол</th></tr>
<tr><td>Ich frühstücke,</td><td><b>bevor</b></td><td>ich</td><td>zur Arbeit</td><td><b>gehe</b>.</td></tr>
</table>
<p>Wasch dir die Hände, <b>bevor</b> du <span class="rule-hl2">isst</span>.</p>
<p>Bevor ich nach Hause <span class="rule-hl2">komme</span>, kaufe ich Brot.</p>`,
en: `
<h2>bevor — before</h2>
<div class="rule-formula">HS, <span class="rule-hl">bevor</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bevor</b> introduces a subordinate clause — verb at the end.</p>
<table class="rule-table">
<tr><th>Main</th><th>Conj.</th><th>Subject</th><th>...</th><th>Verb</th></tr>
<tr><td>Ich frühstücke,</td><td><b>bevor</b></td><td>ich</td><td>zur Arbeit</td><td><b>gehe</b>.</td></tr>
</table>
<p>Wasch dir die Hände, <b>bevor</b> du <span class="rule-hl2">isst</span>.</p>
<p>Bevor ich nach Hause <span class="rule-hl2">komme</span>, kaufe ich Brot.</p>`,
tr: `
<h2>bevor — -meden önce</h2>
<div class="rule-formula">HS, <span class="rule-hl">bevor</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bevor</b> yan cümle başlatır — fiil sonda.</p>
<table class="rule-table">
<tr><th>Ana</th><th>Bağlaç</th><th>Özne</th><th>...</th><th>Fiil</th></tr>
<tr><td>Ich frühstücke,</td><td><b>bevor</b></td><td>ich</td><td>zur Arbeit</td><td><b>gehe</b>.</td></tr>
</table>
<p>Wasch dir die Hände, <b>bevor</b> du <span class="rule-hl2">isst</span>.</p>
<p>Bevor ich nach Hause <span class="rule-hl2">komme</span>, kaufe ich Brot.</p>`,
ar: `
<h2>bevor — قبل أن</h2>
<div class="rule-formula">HS, <span class="rule-hl">bevor</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bevor</b> تبدأ جملة تابعة — الفعل في النهاية.</p>
<table class="rule-table">
<tr><th>الرئيسية</th><th>الرابط</th><th>الفاعل</th><th>...</th><th>الفعل</th></tr>
<tr><td>Ich frühstücke,</td><td><b>bevor</b></td><td>ich</td><td>zur Arbeit</td><td><b>gehe</b>.</td></tr>
</table>
<p>Wasch dir die Hände, <b>bevor</b> du <span class="rule-hl2">isst</span>.</p>
<p>Bevor ich nach Hause <span class="rule-hl2">komme</span>, kaufe ich Brot.</p>`,
fa: `
<h2>bevor — قبل از آنکه</h2>
<div class="rule-formula">HS, <span class="rule-hl">bevor</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bevor</b> یک جمله فرعی را آغاز می‌کند — فعل در پایان.</p>
<table class="rule-table">
<tr><th>اصلی</th><th>رابط</th><th>فاعل</th><th>...</th><th>فعل</th></tr>
<tr><td>Ich frühstücke,</td><td><b>bevor</b></td><td>ich</td><td>zur Arbeit</td><td><b>gehe</b>.</td></tr>
</table>
<p>Wasch dir die Hände, <b>bevor</b> du <span class="rule-hl2">isst</span>.</p>
<p>Bevor ich nach Hause <span class="rule-hl2">komme</span>, kaufe ich Brot.</p>`,
vi: `
<h2>bevor — trước khi</h2>
<div class="rule-formula">HS, <span class="rule-hl">bevor</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bevor</b> giới thiệu mệnh đề phụ — động từ ở cuối.</p>
<table class="rule-table">
<tr><th>Chính</th><th>Liên từ</th><th>Chủ ngữ</th><th>...</th><th>Động từ</th></tr>
<tr><td>Ich frühstücke,</td><td><b>bevor</b></td><td>ich</td><td>zur Arbeit</td><td><b>gehe</b>.</td></tr>
</table>
<p>Wasch dir die Hände, <b>bevor</b> du <span class="rule-hl2">isst</span>.</p>
<p>Bevor ich nach Hause <span class="rule-hl2">komme</span>, kaufe ich Brot.</p>`
},

satz_bis: {
de: `
<h2>bis — bis</h2>
<div class="rule-formula">HS, <span class="rule-hl">bis</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bis</b> bezeichnet einen Endpunkt in der Zeit.</p>
<p>Ich warte hier, <b>bis</b> du <span class="rule-hl2">kommst</span>.</p>
<p>Bleib im Bett, <b>bis</b> der Arzt <span class="rule-hl2">kommt</span>!</p>
<p>Wir spielen, <b>bis</b> es dunkel <span class="rule-hl2">wird</span>.`,
ru: `
<h2>bis — до тех пор пока (не)</h2>
<div class="rule-formula">HS, <span class="rule-hl">bis</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bis</b> обозначает конечную точку во времени.</p>
<p>Ich warte hier, <b>bis</b> du <span class="rule-hl2">kommst</span>.</p>
<p>Bleib im Bett, <b>bis</b> der Arzt <span class="rule-hl2">kommt</span>!</p>
<p>Wir spielen, <b>bis</b> es dunkel <span class="rule-hl2">wird</span>.`,
en: `
<h2>bis — until</h2>
<div class="rule-formula">HS, <span class="rule-hl">bis</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bis</b> marks an end point in time.</p>
<p>Ich warte hier, <b>bis</b> du <span class="rule-hl2">kommst</span>.</p>
<p>Bleib im Bett, <b>bis</b> der Arzt <span class="rule-hl2">kommt</span>!</p>
<p>Wir spielen, <b>bis</b> es dunkel <span class="rule-hl2">wird</span>.`,
tr: `
<h2>bis — -ene kadar</h2>
<div class="rule-formula">HS, <span class="rule-hl">bis</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bis</b> zamanda bir son noktayı belirtir.</p>
<p>Ich warte hier, <b>bis</b> du <span class="rule-hl2">kommst</span>.</p>
<p>Bleib im Bett, <b>bis</b> der Arzt <span class="rule-hl2">kommt</span>!</p>
<p>Wir spielen, <b>bis</b> es dunkel <span class="rule-hl2">wird</span>.`,
ar: `
<h2>bis — حتى</h2>
<div class="rule-formula">HS, <span class="rule-hl">bis</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bis</b> تشير إلى نقطة نهاية في الزمن.</p>
<p>Ich warte hier, <b>bis</b> du <span class="rule-hl2">kommst</span>.</p>
<p>Bleib im Bett, <b>bis</b> der Arzt <span class="rule-hl2">kommt</span>!</p>
<p>Wir spielen, <b>bis</b> es dunkel <span class="rule-hl2">wird</span>.`,
fa: `
<h2>bis — تا زمانی که</h2>
<div class="rule-formula">HS, <span class="rule-hl">bis</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bis</b> یک نقطه پایانی در زمان را مشخص می‌کند.</p>
<p>Ich warte hier, <b>bis</b> du <span class="rule-hl2">kommst</span>.</p>
<p>Bleib im Bett, <b>bis</b> der Arzt <span class="rule-hl2">kommt</span>!</p>
<p>Wir spielen, <b>bis</b> es dunkel <span class="rule-hl2">wird</span>.`,
vi: `
<h2>bis — cho đến khi</h2>
<div class="rule-formula">HS, <span class="rule-hl">bis</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bis</b> đánh dấu điểm kết thúc trong thời gian.</p>
<p>Ich warte hier, <b>bis</b> du <span class="rule-hl2">kommst</span>.</p>
<p>Bleib im Bett, <b>bis</b> der Arzt <span class="rule-hl2">kommt</span>!</p>
<p>Wir spielen, <b>bis</b> es dunkel <span class="rule-hl2">wird</span>.`
},

satz_deshalb: {
de: `
<h2>deshalb / darum / deswegen — deshalb</h2>
<div class="rule-formula">HS1. <span class="rule-hl">Deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>Konjunktionaladverbien — danach <b>Inversion</b> (Verb auf Pos. 2, Subjekt danach).</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb)</th><th>Pos. 3</th><th>...</th></tr>
<tr><td><b>Deshalb</b></td><td><b>bleibe</b></td><td>ich</td><td>zu Hause.</td></tr>
</table>
<p>Es regnet. <b>Deshalb</b> <span class="rule-hl2">nehme</span> ich den Regenschirm.</p>
<p>Ich bin müde. <b>Darum</b> <span class="rule-hl2">gehe</span> ich ins Bett.</p>
<p>Er war krank. <b>Deswegen</b> <span class="rule-hl2">ist</span> er nicht gekommen.`,
ru: `
<h2>deshalb / darum / deswegen — поэтому</h2>
<div class="rule-formula">HS1. <span class="rule-hl">Deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>Союзные наречия — после них идёт ИНВЕРСИЯ (глагол на 2-м месте, подлежащее после).</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb)</th><th>Pos. 3</th><th>...</th></tr>
<tr><td><b>Deshalb</b></td><td><b>bleibe</b></td><td>ich</td><td>zu Hause.</td></tr>
</table>
<p>Es regnet. <b>Deshalb</b> <span class="rule-hl2">nehme</span> ich den Regenschirm.</p>
<p>Ich bin müde. <b>Darum</b> <span class="rule-hl2">gehe</span> ich ins Bett.</p>
<p>Er war krank. <b>Deswegen</b> <span class="rule-hl2">ist</span> er nicht gekommen.`,
en: `
<h2>deshalb / darum / deswegen — therefore</h2>
<div class="rule-formula">HS1. <span class="rule-hl">Deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>Conjunctional adverbs — followed by <b>inversion</b> (verb at position 2, subject after).</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb)</th><th>Pos. 3</th><th>...</th></tr>
<tr><td><b>Deshalb</b></td><td><b>bleibe</b></td><td>ich</td><td>zu Hause.</td></tr>
</table>
<p>Es regnet. <b>Deshalb</b> <span class="rule-hl2">nehme</span> ich den Regenschirm.</p>
<p>Ich bin müde. <b>Darum</b> <span class="rule-hl2">gehe</span> ich ins Bett.</p>
<p>Er war krank. <b>Deswegen</b> <span class="rule-hl2">ist</span> er nicht gekommen.`,
tr: `
<h2>deshalb / darum / deswegen — bu yüzden</h2>
<div class="rule-formula">HS1. <span class="rule-hl">Deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>Bağlaç zarfları — bunlardan sonra <b>devrik</b> (fiil 2. pozisyonda, özne sonra).</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb)</th><th>Pos. 3</th><th>...</th></tr>
<tr><td><b>Deshalb</b></td><td><b>bleibe</b></td><td>ich</td><td>zu Hause.</td></tr>
</table>
<p>Es regnet. <b>Deshalb</b> <span class="rule-hl2">nehme</span> ich den Regenschirm.</p>
<p>Ich bin müde. <b>Darum</b> <span class="rule-hl2">gehe</span> ich ins Bett.</p>
<p>Er war krank. <b>Deswegen</b> <span class="rule-hl2">ist</span> er nicht gekommen.`,
ar: `
<h2>deshalb / darum / deswegen — لذلك</h2>
<div class="rule-formula">HS1. <span class="rule-hl">Deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>أحرف عطف — بعدها <b>قلب</b> (الفعل في الموقع 2، الفاعل بعده).</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb)</th><th>Pos. 3</th><th>...</th></tr>
<tr><td><b>Deshalb</b></td><td><b>bleibe</b></td><td>ich</td><td>zu Hause.</td></tr>
</table>
<p>Es regnet. <b>Deshalb</b> <span class="rule-hl2">nehme</span> ich den Regenschirm.</p>
<p>Ich bin müde. <b>Darum</b> <span class="rule-hl2">gehe</span> ich ins Bett.</p>
<p>Er war krank. <b>Deswegen</b> <span class="rule-hl2">ist</span> er nicht gekommen.`,
fa: `
<h2>deshalb / darum / deswegen — بنابراین</h2>
<div class="rule-formula">HS1. <span class="rule-hl">Deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>قیدهای ربطی — پس از آنها <b>وارونه</b> (فعل در موقعیت 2، فاعل بعد).</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb)</th><th>Pos. 3</th><th>...</th></tr>
<tr><td><b>Deshalb</b></td><td><b>bleibe</b></td><td>ich</td><td>zu Hause.</td></tr>
</table>
<p>Es regnet. <b>Deshalb</b> <span class="rule-hl2">nehme</span> ich den Regenschirm.</p>
<p>Ich bin müde. <b>Darum</b> <span class="rule-hl2">gehe</span> ich ins Bett.</p>
<p>Er war krank. <b>Deswegen</b> <span class="rule-hl2">ist</span> er nicht gekommen.`,
vi: `
<h2>deshalb / darum / deswegen — vì vậy</h2>
<div class="rule-formula">HS1. <span class="rule-hl">Deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>Trạng từ liên từ — sau chúng là <b>đảo</b> (động từ ở vị trí 2, chủ ngữ sau).</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb)</th><th>Pos. 3</th><th>...</th></tr>
<tr><td><b>Deshalb</b></td><td><b>bleibe</b></td><td>ich</td><td>zu Hause.</td></tr>
</table>
<p>Es regnet. <b>Deshalb</b> <span class="rule-hl2">nehme</span> ich den Regenschirm.</p>
<p>Ich bin müde. <b>Darum</b> <span class="rule-hl2">gehe</span> ich ins Bett.</p>
<p>Er war krank. <b>Deswegen</b> <span class="rule-hl2">ist</span> er nicht gekommen.`
},

satz_seitdem: {
de: `
<h2>seit / seitdem — seit / seitdem</h2>
<div class="rule-formula">HS, <span class="rule-hl">seitdem</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>seit/seitdem</b> leitet einen Temporal-Nebensatz ein — die Handlung begann in der Vergangenheit und dauert an.</p>
<p>Ich lerne Deutsch, <b>seitdem</b> ich in Wien <span class="rule-hl2">wohne</span>.</p>
<p><b>Seit</b> er Sport <span class="rule-hl2">macht</span>, fühlt er sich besser.</p>
<p>Es regnet, <b>seitdem</b> wir hier <span class="rule-hl2">sind</span>.`,
ru: `
<h2>seit / seitdem — с тех пор как</h2>
<div class="rule-formula">HS, <span class="rule-hl">seitdem</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>seit/seitdem</b> вводит придаточное времени — действие началось в прошлом и продолжается.</p>
<p>Ich lerne Deutsch, <b>seitdem</b> ich in Wien <span class="rule-hl2">wohne</span>.</p>
<p><b>Seit</b> er Sport <span class="rule-hl2">macht</span>, fühlt er sich besser.</p>
<p>Es regnet, <b>seitdem</b> wir hier <span class="rule-hl2">sind</span>.`,
en: `
<h2>seit / seitdem — since</h2>
<div class="rule-formula">HS, <span class="rule-hl">seitdem</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>seit/seitdem</b> introduces a temporal clause — the action started in the past and continues.</p>
<p>Ich lerne Deutsch, <b>seitdem</b> ich in Wien <span class="rule-hl2">wohne</span>.</p>
<p><b>Seit</b> er Sport <span class="rule-hl2">macht</span>, fühlt er sich besser.</p>
<p>Es regnet, <b>seitdem</b> wir hier <span class="rule-hl2">sind</span>.`,
tr: `
<h2>seit / seitdem — -den beri</h2>
<div class="rule-formula">HS, <span class="rule-hl">seitdem</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>seit/seitdem</b> zaman yan cümlesi başlatır — eylem geçmişte başlamış ve devam ediyor.</p>
<p>Ich lerne Deutsch, <b>seitdem</b> ich in Wien <span class="rule-hl2">wohne</span>.</p>
<p><b>Seit</b> er Sport <span class="rule-hl2">macht</span>, fühlt er sich besser.</p>
<p>Es regnet, <b>seitdem</b> wir hier <span class="rule-hl2">sind</span>.`,
ar: `
<h2>seit / seitdem — منذ أن</h2>
<div class="rule-formula">HS, <span class="rule-hl">seitdem</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>seit/seitdem</b> تبدأ جملة زمنية — بدأ الفعل في الماضي ولا يزال مستمراً.</p>
<p>Ich lerne Deutsch, <b>seitdem</b> ich in Wien <span class="rule-hl2">wohne</span>.</p>
<p><b>Seit</b> er Sport <span class="rule-hl2">macht</span>, fühlt er sich besser.</p>
<p>Es regnet, <b>seitdem</b> wir hier <span class="rule-hl2">sind</span>.`,
fa: `
<h2>seit / seitdem — از زمانی که</h2>
<div class="rule-formula">HS, <span class="rule-hl">seitdem</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>seit/seitdem</b> یک جمله زمانی را آغاز می‌کند — عمل در گذشته شروع شده و ادامه دارد.</p>
<p>Ich lerne Deutsch, <b>seitdem</b> ich in Wien <span class="rule-hl2">wohne</span>.</p>
<p><b>Seit</b> er Sport <span class="rule-hl2">macht</span>, fühlt er sich besser.</p>
<p>Es regnet, <b>seitdem</b> wir hier <span class="rule-hl2">sind</span>.`,
vi: `
<h2>seit / seitdem — kể từ khi</h2>
<div class="rule-formula">HS, <span class="rule-hl">seitdem</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>seit/seitdem</b> giới thiệu mệnh đề thời gian — hành động bắt đầu trong quá khứ và tiếp tục.</p>
<p>Ich lerne Deutsch, <b>seitdem</b> ich in Wien <span class="rule-hl2">wohne</span>.</p>
<p><b>Seit</b> er Sport <span class="rule-hl2">macht</span>, fühlt er sich besser.</p>
<p>Es regnet, <b>seitdem</b> wir hier <span class="rule-hl2">sind</span>.`
},

satz_sobald: {
de: `
<h2>sobald — sobald</h2>
<div class="rule-formula">HS, <span class="rule-hl">sobald</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>sobald</b> — Handlungen folgen unmittelbar aufeinander.</p>
<p>Ich rufe dich an, <b>sobald</b> ich zu Hause <span class="rule-hl2">bin</span>.</p>
<p><b>Sobald</b> die Sonne <span class="rule-hl2">scheint</span>, gehen wir in den Park.</p>
<p>Wir fangen an, <b>sobald</b> alle da <span class="rule-hl2">sind</span>.`,
ru: `
<h2>sobald — как только</h2>
<div class="rule-formula">HS, <span class="rule-hl">sobald</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>sobald</b> — действия следуют непосредственно одно за другим.</p>
<p>Ich rufe dich an, <b>sobald</b> ich zu Hause <span class="rule-hl2">bin</span>.</p>
<p><b>Sobald</b> die Sonne <span class="rule-hl2">scheint</span>, gehen wir in den Park.</p>
<p>Wir fangen an, <b>sobald</b> alle da <span class="rule-hl2">sind</span>.`,
en: `
<h2>sobald — as soon as</h2>
<div class="rule-formula">HS, <span class="rule-hl">sobald</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>sobald</b> — actions follow immediately one after another.</p>
<p>Ich rufe dich an, <b>sobald</b> ich zu Hause <span class="rule-hl2">bin</span>.</p>
<p><b>Sobald</b> die Sonne <span class="rule-hl2">scheint</span>, gehen wir in den Park.</p>
<p>Wir fangen an, <b>sobald</b> alle da <span class="rule-hl2">sind</span>.`,
tr: `
<h2>sobald — -er -mez</h2>
<div class="rule-formula">HS, <span class="rule-hl">sobald</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>sobald</b> — eylemler hemen art arda gelir.</p>
<p>Ich rufe dich an, <b>sobald</b> ich zu Hause <span class="rule-hl2">bin</span>.</p>
<p><b>Sobald</b> die Sonne <span class="rule-hl2">scheint</span>, gehen wir in den Park.</p>
<p>Wir fangen an, <b>sobald</b> alle da <span class="rule-hl2">sind</span>.`,
ar: `
<h2>sobald — حالما</h2>
<div class="rule-formula">HS, <span class="rule-hl">sobald</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>sobald</b> — تتبع الأفعال بعضها البعض مباشرة.</p>
<p>Ich rufe dich an, <b>sobald</b> ich zu Hause <span class="rule-hl2">bin</span>.</p>
<p><b>Sobald</b> die Sonne <span class="rule-hl2">scheint</span>, gehen wir in den Park.</p>
<p>Wir fangen an, <b>sobald</b> alle da <span class="rule-hl2">sind</span>.`,
fa: `
<h2>sobald — به محض اینکه</h2>
<div class="rule-formula">HS, <span class="rule-hl">sobald</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>sobald</b> — اعمال بلافاصله یکی پس از دیگری می‌آیند.</p>
<p>Ich rufe dich an, <b>sobald</b> ich zu Hause <span class="rule-hl2">bin</span>.</p>
<p><b>Sobald</b> die Sonne <span class="rule-hl2">scheint</span>, gehen wir in den Park.</p>
<p>Wir fangen an, <b>sobald</b> alle da <span class="rule-hl2">sind</span>.`,
vi: `
<h2>sobald — ngay khi</h2>
<div class="rule-formula">HS, <span class="rule-hl">sobald</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>sobald</b> — các hành động nối tiếp nhau ngay lập tức.</p>
<p>Ich rufe dich an, <b>sobald</b> ich zu Hause <span class="rule-hl2">bin</span>.</p>
<p><b>Sobald</b> die Sonne <span class="rule-hl2">scheint</span>, gehen wir in den Park.</p>
<p>Wir fangen an, <b>sobald</b> alle da <span class="rule-hl2">sind</span>.`
},

satz_sondern: {
de: `
<h2>sondern — sondern (nach Negation)</h2>
<div class="rule-formula">nicht/kein ..., <span class="rule-hl">sondern</span> ...</div>
<p><b>sondern</b> wird NUR nach Negation (nicht, kein, nie) verwendet. Beiordnende Konjunktion — normale Wortstellung.</p>
<table class="rule-table">
<tr><th>Negation</th><th>Konj.</th><th>Alternative</th></tr>
<tr><td>Das ist <b>nicht</b> Peter,</td><td><b>sondern</b></td><td>Paul.</td></tr>
<tr><td>Ich trinke <b>keinen</b> Kaffee,</td><td><b>sondern</b></td><td>Tee.</td></tr>
</table>`,
ru: `
<h2>sondern — а / но (после отрицания)</h2>
<div class="rule-formula">nicht/kein ..., <span class="rule-hl">sondern</span> ...</div>
<p><b>sondern</b> используется ТОЛЬКО после отрицания (nicht, kein, nie). Сочинительный союз — порядок слов прямой.</p>
<table class="rule-table">
<tr><th>Отрицание</th><th>Союз</th><th>Альтернатива</th></tr>
<tr><td>Das ist <b>nicht</b> Peter,</td><td><b>sondern</b></td><td>Paul.</td></tr>
<tr><td>Ich trinke <b>keinen</b> Kaffee,</td><td><b>sondern</b></td><td>Tee.</td></tr>
</table>`,
en: `
<h2>sondern — but rather (after negation)</h2>
<div class="rule-formula">nicht/kein ..., <span class="rule-hl">sondern</span> ...</div>
<p><b>sondern</b> is used ONLY after negation (nicht, kein, nie). Coordinating conjunction — normal word order.</p>
<table class="rule-table">
<tr><th>Negation</th><th>Conj.</th><th>Alternative</th></tr>
<tr><td>Das ist <b>nicht</b> Peter,</td><td><b>sondern</b></td><td>Paul.</td></tr>
<tr><td>Ich trinke <b>keinen</b> Kaffee,</td><td><b>sondern</b></td><td>Tee.</td></tr>
</table>`,
tr: `
<h2>sondern — aksine (olumsuzlamadan sonra)</h2>
<div class="rule-formula">nicht/kein ..., <span class="rule-hl">sondern</span> ...</div>
<p><b>sondern</b> SADECE olumsuzlamadan sonra (nicht, kein, nie) kullanılır. Eşgüdüm bağlacı — normal sıra.</p>
<table class="rule-table">
<tr><th>Olumsuz</th><th>Bağlaç</th><th>Alternatif</th></tr>
<tr><td>Das ist <b>nicht</b> Peter,</td><td><b>sondern</b></td><td>Paul.</td></tr>
<tr><td>Ich trinke <b>keinen</b> Kaffee,</td><td><b>sondern</b></td><td>Tee.</td></tr>
</table>`,
ar: `
<h2>sondern — بل (بعد النفي)</h2>
<div class="rule-formula">nicht/kein ..., <span class="rule-hl">sondern</span> ...</div>
<p><b>sondern</b> يُستخدم فقط بعد النفي (nicht, kein, nie). حرف عطف تنسيقي — ترتيب عادي.</p>
<table class="rule-table">
<tr><th>النفي</th><th>الرابط</th><th>البديل</th></tr>
<tr><td>Das ist <b>nicht</b> Peter,</td><td><b>sondern</b></td><td>Paul.</td></tr>
<tr><td>Ich trinke <b>keinen</b> Kaffee,</td><td><b>sondern</b></td><td>Tee.</td></tr>
</table>`,
fa: `
<h2>sondern — بلکه (بعد از نفی)</h2>
<div class="rule-formula">nicht/kein ..., <span class="rule-hl">sondern</span> ...</div>
<p><b>sondern</b> فقط بعد از نفی (nicht, kein, nie) استفاده می‌شود. حرف ربط هم‌پایه — ترتیب عادی.</p>
<table class="rule-table">
<tr><th>نفی</th><th>رابط</th><th>جایگزین</th></tr>
<tr><td>Das ist <b>nicht</b> Peter,</td><td><b>sondern</b></td><td>Paul.</td></tr>
<tr><td>Ich trinke <b>keinen</b> Kaffee,</td><td><b>sondern</b></td><td>Tee.</td></tr>
</table>`,
vi: `
<h2>sondern — mà là (sau phủ định)</h2>
<div class="rule-formula">nicht/kein ..., <span class="rule-hl">sondern</span> ...</div>
<p><b>sondern</b> CHỈ dùng sau phủ định (nicht, kein, nie). Liên từ đẳng lập — trật tự thường.</p>
<table class="rule-table">
<tr><th>Phủ định</th><th>Liên từ</th><th>Thay thế</th></tr>
<tr><td>Das ist <b>nicht</b> Peter,</td><td><b>sondern</b></td><td>Paul.</td></tr>
<tr><td>Ich trinke <b>keinen</b> Kaffee,</td><td><b>sondern</b></td><td>Tee.</td></tr>
</table>`
},

satz_textbau: {
de: `
<h2>Textbau / Konnektoren — Textaufbau</h2>
<div class="rule-formula">zuerst → dann → danach → schließlich / zum Schluss</div>
<p>Temporal-Konnektoren strukturieren einen Text. Nach ihnen: <b>Inversion</b> (V+S).</p>
<table class="rule-table">
<tr><th>Konnektor</th><th>Bedeutung</th></tr>
<tr><td><b>zuerst</b></td><td>zuerst (am Anfang)</td></tr>
<tr><td><b>dann</b></td><td>dann (als nächstes)</td></tr>
<tr><td><b>danach</b></td><td>danach (später)</td></tr>
<tr><td><b>zum Schluss / schließlich</b></td><td>schließlich / zuletzt</td></tr>
</table>
<p><b>Zuerst</b> <span class="rule-hl2">stehe</span> ich auf. <b>Dann</b> <span class="rule-hl2">frühstücke</span> ich. <b>Danach</b> <span class="rule-hl2">gehe</span> ich zur Arbeit. <b>Zum Schluss</b> <span class="rule-hl2">komme</span> ich nach Hause.</p>`,
ru: `
<h2>Textbau / Konnektoren — построение текста</h2>
<div class="rule-formula">zuerst → dann → danach → schließlich / zum Schluss</div>
<p>Временные коннекторы структурируют текст. После них — <b>инверсия</b> (V+S).</p>
<table class="rule-table">
<tr><th>Konnektor</th><th>Bedeutung</th></tr>
<tr><td><b>zuerst</b></td><td>сначала</td></tr>
<tr><td><b>dann</b></td><td>потом</td></tr>
<tr><td><b>danach</b></td><td>затем</td></tr>
<tr><td><b>zum Schluss / schließlich</b></td><td>наконец</td></tr>
</table>
<p><b>Zuerst</b> <span class="rule-hl2">stehe</span> ich auf. <b>Dann</b> <span class="rule-hl2">frühstücke</span> ich. <b>Danach</b> <span class="rule-hl2">gehe</span> ich zur Arbeit. <b>Zum Schluss</b> <span class="rule-hl2">komme</span> ich nach Hause.</p>`,
en: `
<h2>Textbau / Konnektoren — text structure</h2>
<div class="rule-formula">zuerst → dann → danach → schließlich / zum Schluss</div>
<p>Temporal connectors structure a text. After them: <b>inversion</b> (V+S).</p>
<table class="rule-table">
<tr><th>Konnektor</th><th>Bedeutung</th></tr>
<tr><td><b>zuerst</b></td><td>first</td></tr>
<tr><td><b>dann</b></td><td>then</td></tr>
<tr><td><b>danach</b></td><td>afterwards</td></tr>
<tr><td><b>zum Schluss / schließlich</b></td><td>finally / at the end</td></tr>
</table>
<p><b>Zuerst</b> <span class="rule-hl2">stehe</span> ich auf. <b>Dann</b> <span class="rule-hl2">frühstücke</span> ich. <b>Danach</b> <span class="rule-hl2">gehe</span> ich zur Arbeit. <b>Zum Schluss</b> <span class="rule-hl2">komme</span> ich nach Hause.</p>`,
tr: `
<h2>Textbau / Konnektoren — metin yapısı</h2>
<div class="rule-formula">zuerst → dann → danach → schließlich / zum Schluss</div>
<p>Zaman bağlaçları metni yapılandırır. Bunlardan sonra: <b>devrik</b> (V+S).</p>
<table class="rule-table">
<tr><th>Konnektor</th><th>Bedeutung</th></tr>
<tr><td><b>zuerst</b></td><td>önce</td></tr>
<tr><td><b>dann</b></td><td>sonra</td></tr>
<tr><td><b>danach</b></td><td>ardından</td></tr>
<tr><td><b>zum Schluss / schließlich</b></td><td>son olarak</td></tr>
</table>
<p><b>Zuerst</b> <span class="rule-hl2">stehe</span> ich auf. <b>Dann</b> <span class="rule-hl2">frühstücke</span> ich. <b>Danach</b> <span class="rule-hl2">gehe</span> ich zur Arbeit. <b>Zum Schluss</b> <span class="rule-hl2">komme</span> ich nach Hause.</p>`,
ar: `
<h2>Textbau / Konnektoren — بناء النص</h2>
<div class="rule-formula">zuerst → dann → danach → schließlich / zum Schluss</div>
<p>الروابط الزمنية تنظم النص. بعدها: <b>قلب</b> (V+S).</p>
<table class="rule-table">
<tr><th>Konnektor</th><th>Bedeutung</th></tr>
<tr><td><b>zuerst</b></td><td>أولاً</td></tr>
<tr><td><b>dann</b></td><td>ثم</td></tr>
<tr><td><b>danach</b></td><td>بعد ذلك</td></tr>
<tr><td><b>zum Schluss / schließlich</b></td><td>أخيراً</td></tr>
</table>
<p><b>Zuerst</b> <span class="rule-hl2">stehe</span> ich auf. <b>Dann</b> <span class="rule-hl2">frühstücke</span> ich. <b>Danach</b> <span class="rule-hl2">gehe</span> ich zur Arbeit. <b>Zum Schluss</b> <span class="rule-hl2">komme</span> ich nach Hause.</p>`,
fa: `
<h2>Textbau / Konnektoren — ساختار متن</h2>
<div class="rule-formula">zuerst → dann → danach → schließlich / zum Schluss</div>
<p>رابط‌های زمانی متن را ساختار می‌دهند. پس از آنها: <b>وارونه</b> (V+S).</p>
<table class="rule-table">
<tr><th>Konnektor</th><th>Bedeutung</th></tr>
<tr><td><b>zuerst</b></td><td>اول</td></tr>
<tr><td><b>dann</b></td><td>سپس</td></tr>
<tr><td><b>danach</b></td><td>بعد از آن</td></tr>
<tr><td><b>zum Schluss / schließlich</b></td><td>در نهایت</td></tr>
</table>
<p><b>Zuerst</b> <span class="rule-hl2">stehe</span> ich auf. <b>Dann</b> <span class="rule-hl2">frühstücke</span> ich. <b>Danach</b> <span class="rule-hl2">gehe</span> ich zur Arbeit. <b>Zum Schluss</b> <span class="rule-hl2">komme</span> ich nach Hause.</p>`,
vi: `
<h2>Textbau / Konnektoren — cấu trúc văn bản</h2>
<div class="rule-formula">zuerst → dann → danach → schließlich / zum Schluss</div>
<p>Liên từ chỉ thời gian cấu trúc văn bản. Sau chúng: <b>đảo</b> (V+S).</p>
<table class="rule-table">
<tr><th>Konnektor</th><th>Bedeutung</th></tr>
<tr><td><b>zuerst</b></td><td>đầu tiên</td></tr>
<tr><td><b>dann</b></td><td>sau đó</td></tr>
<tr><td><b>danach</b></td><td>tiếp theo</td></tr>
<tr><td><b>zum Schluss / schließlich</b></td><td>cuối cùng</td></tr>
</table>
<p><b>Zuerst</b> <span class="rule-hl2">stehe</span> ich auf. <b>Dann</b> <span class="rule-hl2">frühstücke</span> ich. <b>Danach</b> <span class="rule-hl2">gehe</span> ich zur Arbeit. <b>Zum Schluss</b> <span class="rule-hl2">komme</span> ich nach Hause.</p>`
},

satz_um_zu: {
de: `
<h2>um...zu — um zu</h2>
<div class="rule-formula">HS, <span class="rule-hl">um</span> ... <span class="rule-hl2">zu + Infinitiv</span></div>
<p><b>um...zu</b> wird nur benutzt, wenn beide Subjekte GLEICH sind. Sonst nimmt man <b>damit</b>.</p>
<table class="rule-table">
<tr><th>HS</th><th>um</th><th>...</th><th>zu + Inf</th></tr>
<tr><td>Ich lerne Deutsch,</td><td><b>um</b></td><td>in Wien</td><td><b>zu studieren</b>.</td></tr>
<tr><td>Sie geht ins Café,</td><td><b>um</b></td><td>einen Kaffee</td><td><b>zu trinken</b>.</td></tr>
</table>
<p>⚠ Trennbare Verben: <b>um</b> ein<span class="rule-hl">zu</span>kaufen / <b>um</b> auf<span class="rule-hl">zu</span>stehen.</p>
<p>Er fährt nach Deutschland, <b>um</b> seine Familie <span class="rule-hl2">zu besuchen</span>.`,
ru: `
<h2>um...zu — чтобы</h2>
<div class="rule-formula">HS, <span class="rule-hl">um</span> ... <span class="rule-hl2">zu + Infinitiv</span></div>
<p><b>um...zu</b> используется только когда подлежащее в обеих частях ОДНО И ТО ЖЕ. Иначе используем <b>damit</b>.</p>
<table class="rule-table">
<tr><th>HS</th><th>um</th><th>...</th><th>zu + Inf</th></tr>
<tr><td>Ich lerne Deutsch,</td><td><b>um</b></td><td>in Wien</td><td><b>zu studieren</b>.</td></tr>
<tr><td>Sie geht ins Café,</td><td><b>um</b></td><td>einen Kaffee</td><td><b>zu trinken</b>.</td></tr>
</table>
<p>⚠ Trennbare Verben: <b>um</b> ein<span class="rule-hl">zu</span>kaufen / <b>um</b> auf<span class="rule-hl">zu</span>stehen.</p>
<p>Er fährt nach Deutschland, <b>um</b> seine Familie <span class="rule-hl2">zu besuchen</span>.`,
en: `
<h2>um...zu — in order to</h2>
<div class="rule-formula">HS, <span class="rule-hl">um</span> ... <span class="rule-hl2">zu + Infinitiv</span></div>
<p><b>um...zu</b> is used ONLY when both subjects are THE SAME. Otherwise use <b>damit</b>.</p>
<table class="rule-table">
<tr><th>HS</th><th>um</th><th>...</th><th>zu + Inf</th></tr>
<tr><td>Ich lerne Deutsch,</td><td><b>um</b></td><td>in Wien</td><td><b>zu studieren</b>.</td></tr>
<tr><td>Sie geht ins Café,</td><td><b>um</b></td><td>einen Kaffee</td><td><b>zu trinken</b>.</td></tr>
</table>
<p>⚠ Separable verbs: <b>um</b> ein<span class="rule-hl">zu</span>kaufen / <b>um</b> auf<span class="rule-hl">zu</span>stehen.</p>
<p>Er fährt nach Deutschland, <b>um</b> seine Familie <span class="rule-hl2">zu besuchen</span>.`,
tr: `
<h2>um...zu — -mek için</h2>
<div class="rule-formula">HS, <span class="rule-hl">um</span> ... <span class="rule-hl2">zu + Infinitiv</span></div>
<p><b>um...zu</b> sadece her iki öznenin AYNI olduğu durumda kullanılır. Aksi halde <b>damit</b> kullanılır.</p>
<table class="rule-table">
<tr><th>HS</th><th>um</th><th>...</th><th>zu + Inf</th></tr>
<tr><td>Ich lerne Deutsch,</td><td><b>um</b></td><td>in Wien</td><td><b>zu studieren</b>.</td></tr>
<tr><td>Sie geht ins Café,</td><td><b>um</b></td><td>einen Kaffee</td><td><b>zu trinken</b>.</td></tr>
</table>
<p>⚠ Ayrılabilen fiiller: <b>um</b> ein<span class="rule-hl">zu</span>kaufen / <b>um</b> auf<span class="rule-hl">zu</span>stehen.</p>
<p>Er fährt nach Deutschland, <b>um</b> seine Familie <span class="rule-hl2">zu besuchen</span>.`,
ar: `
<h2>um...zu — من أجل أن</h2>
<div class="rule-formula">HS, <span class="rule-hl">um</span> ... <span class="rule-hl2">zu + Infinitiv</span></div>
<p><b>um...zu</b> يُستخدم فقط عندما يكون الفاعل نفسه في الجملتين. وإلا نستخدم <b>damit</b>.</p>
<table class="rule-table">
<tr><th>HS</th><th>um</th><th>...</th><th>zu + Inf</th></tr>
<tr><td>Ich lerne Deutsch,</td><td><b>um</b></td><td>in Wien</td><td><b>zu studieren</b>.</td></tr>
<tr><td>Sie geht ins Café,</td><td><b>um</b></td><td>einen Kaffee</td><td><b>zu trinken</b>.</td></tr>
</table>
<p>⚠ الأفعال المنفصلة: <b>um</b> ein<span class="rule-hl">zu</span>kaufen / <b>um</b> auf<span class="rule-hl">zu</span>stehen.</p>
<p>Er fährt nach Deutschland, <b>um</b> seine Familie <span class="rule-hl2">zu besuchen</span>.`,
fa: `
<h2>um...zu — برای اینکه</h2>
<div class="rule-formula">HS, <span class="rule-hl">um</span> ... <span class="rule-hl2">zu + Infinitiv</span></div>
<p><b>um...zu</b> فقط زمانی استفاده می‌شود که فاعل هر دو جمله یکسان باشد. در غیر این صورت از <b>damit</b> استفاده می‌کنیم.</p>
<table class="rule-table">
<tr><th>HS</th><th>um</th><th>...</th><th>zu + Inf</th></tr>
<tr><td>Ich lerne Deutsch,</td><td><b>um</b></td><td>in Wien</td><td><b>zu studieren</b>.</td></tr>
<tr><td>Sie geht ins Café,</td><td><b>um</b></td><td>einen Kaffee</td><td><b>zu trinken</b>.</td></tr>
</table>
<p>⚠ افعال جداشدنی: <b>um</b> ein<span class="rule-hl">zu</span>kaufen / <b>um</b> auf<span class="rule-hl">zu</span>stehen.</p>
<p>Er fährt nach Deutschland, <b>um</b> seine Familie <span class="rule-hl2">zu besuchen</span>.`,
vi: `
<h2>um...zu — để</h2>
<div class="rule-formula">HS, <span class="rule-hl">um</span> ... <span class="rule-hl2">zu + Infinitiv</span></div>
<p><b>um...zu</b> chỉ dùng khi cả hai mệnh đề có CÙNG một chủ ngữ. Nếu không, dùng <b>damit</b>.</p>
<table class="rule-table">
<tr><th>HS</th><th>um</th><th>...</th><th>zu + Inf</th></tr>
<tr><td>Ich lerne Deutsch,</td><td><b>um</b></td><td>in Wien</td><td><b>zu studieren</b>.</td></tr>
<tr><td>Sie geht ins Café,</td><td><b>um</b></td><td>einen Kaffee</td><td><b>zu trinken</b>.</td></tr>
</table>
<p>⚠ Động từ tách: <b>um</b> ein<span class="rule-hl">zu</span>kaufen / <b>um</b> auf<span class="rule-hl">zu</span>stehen.</p>
<p>Er fährt nach Deutschland, <b>um</b> seine Familie <span class="rule-hl2">zu besuchen</span>.`
},

satz_waehrend: {
de: `
<h2>während — während</h2>
<div class="rule-formula">HS, <span class="rule-hl">während</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>während</b> hat zwei Bedeutungen:<br>1. <b>Zeit</b> — gleichzeitige Handlungen<br>2. <b>Gegensatz</b> — während (Kontrast)</p>
<p>Ich höre Musik, <b>während</b> ich <span class="rule-hl2">koche</span>. <i>(Zeit)</i></p>
<p><b>Während</b> er gern Sport <span class="rule-hl2">macht</span>, liest sie lieber Bücher. <i>(Kontrast)</i></p>
<p><b>Während</b> meine Schwester schläft, <span class="rule-hl2">lerne</span> ich.`,
ru: `
<h2>während — в то время как / пока</h2>
<div class="rule-formula">HS, <span class="rule-hl">während</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>während</b> имеет два значения:<br>1. <b>Время</b> — одновременность действий<br>2. <b>Противопоставление</b> — в то время как (контраст)</p>
<p>Ich höre Musik, <b>während</b> ich <span class="rule-hl2">koche</span>. <i>(время)</i></p>
<p><b>Während</b> er gern Sport <span class="rule-hl2">macht</span>, liest sie lieber Bücher. <i>(контраст)</i></p>
<p><b>Während</b> meine Schwester schläft, <span class="rule-hl2">lerne</span> ich.`,
en: `
<h2>während — while / whereas</h2>
<div class="rule-formula">HS, <span class="rule-hl">während</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>während</b> has two meanings:<br>1. <b>Time</b> — simultaneous actions<br>2. <b>Contrast</b> — whereas</p>
<p>Ich höre Musik, <b>während</b> ich <span class="rule-hl2">koche</span>. <i>(time)</i></p>
<p><b>Während</b> er gern Sport <span class="rule-hl2">macht</span>, liest sie lieber Bücher. <i>(contrast)</i></p>
<p><b>Während</b> meine Schwester schläft, <span class="rule-hl2">lerne</span> ich.`,
tr: `
<h2>während — -irken / oysa</h2>
<div class="rule-formula">HS, <span class="rule-hl">während</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>während</b>'in iki anlamı vardır:<br>1. <b>Zaman</b> — eşzamanlı eylemler<br>2. <b>Karşıtlık</b> — oysa</p>
<p>Ich höre Musik, <b>während</b> ich <span class="rule-hl2">koche</span>. <i>(zaman)</i></p>
<p><b>Während</b> er gern Sport <span class="rule-hl2">macht</span>, liest sie lieber Bücher. <i>(karşıtlık)</i></p>
<p><b>Während</b> meine Schwester schläft, <span class="rule-hl2">lerne</span> ich.`,
ar: `
<h2>während — بينما</h2>
<div class="rule-formula">HS, <span class="rule-hl">während</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>während</b> له معنيان:<br>1. <b>الزمن</b> — أفعال متزامنة<br>2. <b>التضاد</b> — بينما</p>
<p>Ich höre Musik, <b>während</b> ich <span class="rule-hl2">koche</span>. <i>(الزمن)</i></p>
<p><b>Während</b> er gern Sport <span class="rule-hl2">macht</span>, liest sie lieber Bücher. <i>(التضاد)</i></p>
<p><b>Während</b> meine Schwester schläft, <span class="rule-hl2">lerne</span> ich.`,
fa: `
<h2>während — در حالی که</h2>
<div class="rule-formula">HS, <span class="rule-hl">während</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>während</b> دو معنی دارد:<br>1. <b>زمان</b> — اعمال همزمان<br>2. <b>تضاد</b> — در حالی که</p>
<p>Ich höre Musik, <b>während</b> ich <span class="rule-hl2">koche</span>. <i>(زمان)</i></p>
<p><b>Während</b> er gern Sport <span class="rule-hl2">macht</span>, liest sie lieber Bücher. <i>(تضاد)</i></p>
<p><b>Während</b> meine Schwester schläft, <span class="rule-hl2">lerne</span> ich.`,
vi: `
<h2>während — trong khi</h2>
<div class="rule-formula">HS, <span class="rule-hl">während</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>während</b> có hai nghĩa:<br>1. <b>Thời gian</b> — hành động đồng thời<br>2. <b>Tương phản</b> — trong khi</p>
<p>Ich höre Musik, <b>während</b> ich <span class="rule-hl2">koche</span>. <i>(thời gian)</i></p>
<p><b>Während</b> er gern Sport <span class="rule-hl2">macht</span>, liest sie lieber Bücher. <i>(tương phản)</i></p>
<p><b>Während</b> meine Schwester schläft, <span class="rule-hl2">lerne</span> ich.`
},

satz_da: {
de: `
<h2>da — kausal (formell, schriftsprachlich)</h2>
<div class="rule-formula">HS, <span class="rule-hl">da</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>da</b> leitet einen kausalen Nebensatz ein. Bedeutung wie <b>weil</b>, aber:</p>
<ul><li>Der Grund ist dem Hörer schon <b>bekannt</b>.</li><li>Klingt <b>formell</b> / schriftlich (Briefe, Berichte, Vorträge).</li><li>Der <b>da</b>-Satz steht oft <b>vor</b> dem Hauptsatz.</li></ul>
<p><b>Da</b> es <span class="rule-hl2">regnet</span>, bleiben wir zu Hause.</p>
<p><b>Da</b> ich krank <span class="rule-hl2">bin</span>, gehe ich nicht zur Arbeit.</p>
<p><i>Achtung: nicht verwechseln mit <b>da</b> als Adverb („dort") oder als Pronominaladverb (<b>damit, davon</b>).</i>`,
ru: `
<h2>da — потому что / поскольку (формальный стиль)</h2>
<div class="rule-formula">HS, <span class="rule-hl">da</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>da</b> вводит причинное придаточное. Значение как у <b>weil</b>, но:</p>
<ul><li>Причина уже <b>известна</b> слушателю.</li><li>Звучит <b>формально</b>, в письменной речи (письма, доклады).</li><li><b>da</b>-предложение часто стоит <b>перед</b> главным.</li></ul>
<p><b>Da</b> es <span class="rule-hl2">regnet</span>, bleiben wir zu Hause. — Поскольку идёт дождь, мы остаёмся дома.</p>
<p><b>Da</b> ich krank <span class="rule-hl2">bin</span>, gehe ich nicht zur Arbeit. — Так как я болен, я не иду на работу.</p>
<p><i>Не путать с <b>da</b> в значении «там» или с <b>damit/davon</b>.</i>`,
en: `
<h2>da — since / as (formal causal)</h2>
<div class="rule-formula">HS, <span class="rule-hl">da</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>da</b> introduces a causal subordinate clause. Same meaning as <b>weil</b>, but:</p>
<ul><li>The reason is already <b>known</b> to the listener.</li><li>Sounds <b>formal</b> / written (letters, reports, lectures).</li><li>The <b>da</b>-clause often stands <b>before</b> the main clause.</li></ul>
<p><b>Da</b> es <span class="rule-hl2">regnet</span>, bleiben wir zu Hause. — Since it's raining, we're staying home.</p>
<p><b>Da</b> ich krank <span class="rule-hl2">bin</span>, gehe ich nicht zur Arbeit. — As I'm sick, I'm not going to work.</p>
<p><i>Don't confuse with <b>da</b> as adverb ("there") or pronominal <b>damit/davon</b>.</i>`,
tr: `
<h2>da — -dığı için (resmî, yazılı dil)</h2>
<div class="rule-formula">HS, <span class="rule-hl">da</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>da</b> sebep yan cümlesi başlatır. <b>weil</b> ile aynı anlamda, ancak:</p>
<ul><li>Sebep dinleyici tarafından zaten <b>bilinmektedir</b>.</li><li><b>Resmî</b> / yazılı dilde kullanılır (mektup, rapor, sunum).</li><li><b>da</b>-cümlesi genellikle ana cümleden <b>önce</b> gelir.</li></ul>
<p><b>Da</b> es <span class="rule-hl2">regnet</span>, bleiben wir zu Hause. — Yağmur yağdığı için evde kalıyoruz.</p>
<p><b>Da</b> ich krank <span class="rule-hl2">bin</span>, gehe ich nicht zur Arbeit. — Hasta olduğum için işe gitmiyorum.</p>`,
ar: `
<h2>da — بما أن (سببية رسمية)</h2>
<div class="rule-formula">HS, <span class="rule-hl">da</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>da</b> تُقدّم جملة فرعية سببية. المعنى كما في <b>weil</b>، ولكن:</p>
<ul><li>السبب <b>معروف مسبقاً</b> للمستمع.</li><li>أسلوب <b>رسمي</b> / كتابي (الرسائل، التقارير).</li><li>جملة <b>da</b> غالباً ما تأتي <b>قبل</b> الجملة الرئيسية.</li></ul>
<p><b>Da</b> es <span class="rule-hl2">regnet</span>, bleiben wir zu Hause. — بما أن السماء تمطر، نبقى في البيت.</p>
<p><b>Da</b> ich krank <span class="rule-hl2">bin</span>, gehe ich nicht zur Arbeit. — بما أنني مريض، لا أذهب إلى العمل.</p>`,
fa: `
<h2>da — از آنجا که (سببی، رسمی)</h2>
<div class="rule-formula">HS, <span class="rule-hl">da</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>da</b> یک جمله‌واره‌ی علّی را معرفی می‌کند. هم‌معنی <b>weil</b>، اما:</p>
<ul><li>دلیل برای شنونده <b>از قبل معلوم</b> است.</li><li>سبک <b>رسمی</b> / کتبی (نامه، گزارش، سخنرانی).</li><li>جمله‌ی <b>da</b> اغلب <b>پیش از</b> جمله‌ی اصلی می‌آید.</li></ul>
<p><b>Da</b> es <span class="rule-hl2">regnet</span>, bleiben wir zu Hause. — از آنجا که باران می‌بارد، در خانه می‌مانیم.</p>
<p><b>Da</b> ich krank <span class="rule-hl2">bin</span>, gehe ich nicht zur Arbeit. — از آنجا که مریضم، به سر کار نمی‌روم.</p>`,
vi: `
<h2>da — vì (nguyên nhân, trang trọng)</h2>
<div class="rule-formula">HS, <span class="rule-hl">da</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>da</b> mở đầu mệnh đề phụ chỉ nguyên nhân. Nghĩa giống <b>weil</b>, nhưng:</p>
<ul><li>Nguyên nhân đã được <b>người nghe biết</b>.</li><li>Văn phong <b>trang trọng</b> / viết (thư, báo cáo, thuyết trình).</li><li>Mệnh đề <b>da</b> thường đứng <b>trước</b> mệnh đề chính.</li></ul>
<p><b>Da</b> es <span class="rule-hl2">regnet</span>, bleiben wir zu Hause. — Vì trời đang mưa nên chúng tôi ở nhà.</p>
<p><b>Da</b> ich krank <span class="rule-hl2">bin</span>, gehe ich nicht zur Arbeit. — Vì tôi bị ốm nên tôi không đi làm.</p>`
},

satz_falls: {
de: `
<h2>falls — konditional (für den Fall, dass)</h2>
<div class="rule-formula">HS, <span class="rule-hl">falls</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>falls</b> drückt eine <b>Bedingung</b> aus — synonym mit <b>wenn</b> (konditional), aber:</p>
<ul><li>Betont, dass das Eintreten <b>unsicher</b> ist („für den Fall, dass").</li><li>Wird häufig <b>formell</b> verwendet (Briefe, Verträge, Anweisungen).</li><li>Niemals temporal — <b>falls</b> bedeutet nie „wann".</li></ul>
<p><b>Falls</b> es <span class="rule-hl2">regnet</span>, nehmen wir einen Schirm mit.</p>
<p><b>Falls</b> Sie Fragen <span class="rule-hl2">haben</span>, wenden Sie sich an unseren Service.</p>
<p>Ich rufe dich an, <b>falls</b> ich später <span class="rule-hl2">komme</span>.`,
ru: `
<h2>falls — на случай если (условие)</h2>
<div class="rule-formula">HS, <span class="rule-hl">falls</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>falls</b> выражает <b>условие</b> — синоним <b>wenn</b> (условного), но:</p>
<ul><li>Подчёркивает, что событие <b>необязательно</b> произойдёт.</li><li>Часто используется в <b>формальном</b> стиле (письма, договоры, инструкции).</li><li>Никогда не временное — <b>falls</b> не значит «когда».</li></ul>
<p><b>Falls</b> es <span class="rule-hl2">regnet</span>, nehmen wir einen Schirm mit. — На случай если пойдёт дождь, возьмём зонт.</p>
<p><b>Falls</b> Sie Fragen <span class="rule-hl2">haben</span>, wenden Sie sich an unseren Service. — Если у Вас возникнут вопросы, обратитесь в нашу службу.</p>`,
en: `
<h2>falls — in case (conditional)</h2>
<div class="rule-formula">HS, <span class="rule-hl">falls</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>falls</b> expresses a <b>condition</b> — synonym of <b>wenn</b> (conditional), but:</p>
<ul><li>Emphasises that the event is <b>uncertain</b> ("just in case").</li><li>Often used in <b>formal</b> style (letters, contracts, instructions).</li><li>Never temporal — <b>falls</b> never means "when".</li></ul>
<p><b>Falls</b> es <span class="rule-hl2">regnet</span>, nehmen wir einen Schirm mit. — In case it rains, we'll take an umbrella.</p>
<p><b>Falls</b> Sie Fragen <span class="rule-hl2">haben</span>, wenden Sie sich an unseren Service. — In case you have questions, please contact our service.</p>`,
tr: `
<h2>falls — -se diye, ihtimale karşı</h2>
<div class="rule-formula">HS, <span class="rule-hl">falls</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>falls</b> bir <b>koşul</b> ifade eder — koşullu <b>wenn</b> ile eş anlamlıdır, ancak:</p>
<ul><li>Olayın gerçekleşmesinin <b>belirsiz</b> olduğunu vurgular.</li><li>Genellikle <b>resmî</b> dilde kullanılır (mektup, sözleşme, talimat).</li><li>Hiçbir zaman zaman bildirmez — <b>falls</b> asla „ne zaman" anlamına gelmez.</li></ul>
<p><b>Falls</b> es <span class="rule-hl2">regnet</span>, nehmen wir einen Schirm mit. — Yağmur yağarsa diye şemsiye götürüyoruz.</p>`,
ar: `
<h2>falls — في حال (شرطي)</h2>
<div class="rule-formula">HS, <span class="rule-hl">falls</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>falls</b> تُعبّر عن <b>شرط</b> — مرادف لـ <b>wenn</b> الشرطية، ولكن:</p>
<ul><li>تُؤكّد أن وقوع الحدث <b>غير مؤكد</b>.</li><li>تُستخدم غالباً في الأسلوب <b>الرسمي</b> (الرسائل، العقود، التعليمات).</li><li>ليست زمنية أبداً — <b>falls</b> لا تعني „متى".</li></ul>
<p><b>Falls</b> es <span class="rule-hl2">regnet</span>, nehmen wir einen Schirm mit. — في حال أمطرت، سنأخذ مظلة معنا.</p>
<p><b>Falls</b> Sie Fragen <span class="rule-hl2">haben</span>, wenden Sie sich an unseren Service. — في حال كانت لديكم أسئلة، يرجى التواصل مع خدمتنا.</p>`,
fa: `
<h2>falls — در صورتی که (شرطی)</h2>
<div class="rule-formula">HS, <span class="rule-hl">falls</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>falls</b> یک <b>شرط</b> را بیان می‌کند — هم‌معنی <b>wenn</b> شرطی است، اما:</p>
<ul><li>تأکید می‌کند که وقوع رویداد <b>قطعی نیست</b>.</li><li>اغلب در سبک <b>رسمی</b> به کار می‌رود (نامه، قرارداد، دستورالعمل).</li><li>هرگز زمانی نیست — <b>falls</b> هرگز به معنای «وقتی» نیست.</li></ul>
<p><b>Falls</b> es <span class="rule-hl2">regnet</span>, nehmen wir einen Schirm mit. — در صورتی که باران ببارد، چتر می‌بریم.</p>`,
vi: `
<h2>falls — phòng khi (điều kiện)</h2>
<div class="rule-formula">HS, <span class="rule-hl">falls</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>falls</b> diễn đạt một <b>điều kiện</b> — đồng nghĩa với <b>wenn</b> điều kiện, nhưng:</p>
<ul><li>Nhấn mạnh rằng việc xảy ra là <b>không chắc chắn</b>.</li><li>Thường dùng trong văn phong <b>trang trọng</b> (thư, hợp đồng, chỉ dẫn).</li><li>Không bao giờ chỉ thời gian — <b>falls</b> không bao giờ có nghĩa „khi nào".</li></ul>
<p><b>Falls</b> es <span class="rule-hl2">regnet</span>, nehmen wir einen Schirm mit. — Phòng khi trời mưa chúng tôi mang theo ô.</p>`
},

satz_zu_infinitiv: {
de: `
<h2>Infinitiv mit zu (zu + Infinitiv)</h2>
<div class="rule-formula">..., <span class="rule-hl">zu</span> + <span class="rule-hl2">Infinitiv</span> (am Ende)</div>
<p>Viele Verben, Adjektive und feste Ausdrücke verlangen einen <b>Infinitiv mit zu</b>. Der Infinitiv steht <b>am Ende</b> des Satzes oder Nebensatzes.</p>
<p><b>Häufige Auslöser:</b></p>
<ul>
<li><b>Verben:</b> versuchen, vergessen, hoffen, beginnen, anfangen, aufhören, vorhaben, sich entscheiden, sich freuen, scheinen, glauben, brauchen (nur + nicht/kein)</li>
<li><b>Es ist + Adjektiv:</b> Es ist <b>wichtig/schön/möglich</b>, ... <b>zu</b> + Inf.</li>
<li><b>Substantiv + haben:</b> Lust / Zeit / Angst / Möglichkeit / vor + ... <b>zu</b> + Inf.</li>
<li><b>ohne ... zu</b>, <b>statt ... zu</b>, <b>(an)statt zu</b></li>
<li><b>sein + zu</b> (Passiv-Ersatz): Das ist leicht <b>zu</b> machen.</li>
</ul>
<p><b>Beispiele:</b></p>
<p>Es ist wichtig, pünktlich <b>zu sein</b>.</p>
<p>Ich versuche, jeden Tag Deutsch <b>zu lernen</b>.</p>
<p>Sie hat keine Lust, ins Kino <b>zu gehen</b>.</p>
<p><b>Trennbare Verben:</b> <i>zu</i> steht zwischen Vorsilbe und Stamm — als <b>ein Wort</b>: <b>einzuparken</b>, <b>aufzustehen</b>, <b>mitzukommen</b>.</p>
<p>Es ist nicht leicht, hier <b>einzuparken</b>.</p>
<p><i>Achtung: Modalverben (können, müssen, dürfen, sollen, wollen, mögen) bekommen <b>kein</b> zu! → Ich kann schwimmen.</i>`,
ru: `
<h2>Инфинитив с zu (zu + Infinitiv)</h2>
<div class="rule-formula">..., <span class="rule-hl">zu</span> + <span class="rule-hl2">Infinitiv</span> (в конце)</div>
<p>Многие глаголы, прилагательные и устойчивые выражения требуют <b>инфинитив с zu</b>. Инфинитив стоит <b>в конце</b> предложения.</p>
<p><b>Когда нужен:</b></p>
<ul>
<li><b>Глаголы:</b> versuchen (пытаться), vergessen (забыть), hoffen (надеяться), anfangen / beginnen (начинать), aufhören (прекращать), vorhaben (планировать), sich entscheiden (решить), sich freuen (радоваться), scheinen (казаться), glauben (полагать), brauchen (только с nicht/kein)</li>
<li><b>Es ist + прилагательное:</b> Es ist <b>wichtig/schön/möglich</b>, ... <b>zu</b> + Inf.</li>
<li><b>Существительное + haben:</b> Lust / Zeit / Angst / vor + ... <b>zu</b> + Inf.</li>
<li><b>ohne ... zu</b> (не делая чего-то), <b>statt ... zu</b> (вместо того чтобы)</li>
<li><b>sein + zu</b> (вместо пассива): Das ist leicht <b>zu</b> machen.</li>
</ul>
<p><b>Примеры:</b></p>
<p>Es ist wichtig, pünktlich <b>zu sein</b>. — Важно быть пунктуальным.</p>
<p>Ich versuche, jeden Tag Deutsch <b>zu lernen</b>. — Я пытаюсь учить немецкий каждый день.</p>
<p>Sie hat keine Lust, ins Kino <b>zu gehen</b>. — У неё нет желания идти в кино.</p>
<p><b>Отделяемые глаголы:</b> <i>zu</i> ставится между приставкой и основой <b>одним словом</b>: <b>einzuparken</b>, <b>aufzustehen</b>, <b>mitzukommen</b>.</p>
<p>Es ist nicht leicht, hier <b>einzuparken</b>. — Здесь нелегко припарковаться.</p>
<p><i>Внимание: модальные глаголы (können, müssen, dürfen, sollen, wollen, mögen) НЕ требуют zu! → Ich kann schwimmen.</i>`,
en: `
<h2>Infinitive with zu (zu + Infinitive)</h2>
<div class="rule-formula">..., <span class="rule-hl">zu</span> + <span class="rule-hl2">Infinitive</span> (at the end)</div>
<p>Many verbs, adjectives and fixed expressions require an <b>infinitive with zu</b>. The infinitive goes <b>at the end</b> of the clause.</p>
<p><b>Common triggers:</b></p>
<ul>
<li><b>Verbs:</b> versuchen (try), vergessen (forget), hoffen (hope), anfangen / beginnen (start), aufhören (stop), vorhaben (plan), sich entscheiden (decide), sich freuen (be happy), scheinen (seem), glauben (believe), brauchen (only with nicht/kein)</li>
<li><b>Es ist + adjective:</b> Es ist <b>wichtig/schön/möglich</b>, ... <b>zu</b> + Inf.</li>
<li><b>Noun + haben:</b> Lust / Zeit / Angst / vor + ... <b>zu</b> + Inf.</li>
<li><b>ohne ... zu</b> (without doing), <b>statt ... zu</b> (instead of)</li>
<li><b>sein + zu</b> (passive substitute): Das ist leicht <b>zu</b> machen.</li>
</ul>
<p><b>Examples:</b></p>
<p>Es ist wichtig, pünktlich <b>zu sein</b>. — It's important to be on time.</p>
<p>Ich versuche, jeden Tag Deutsch <b>zu lernen</b>. — I try to learn German every day.</p>
<p>Sie hat keine Lust, ins Kino <b>zu gehen</b>. — She doesn't feel like going to the cinema.</p>
<p><b>Separable verbs:</b> <i>zu</i> sits between prefix and stem as <b>one word</b>: <b>einzuparken</b>, <b>aufzustehen</b>, <b>mitzukommen</b>.</p>
<p>Es ist nicht leicht, hier <b>einzuparken</b>. — It's not easy to park here.</p>
<p><i>Note: Modal verbs (können, müssen, dürfen, sollen, wollen, mögen) take <b>no</b> zu! → Ich kann schwimmen.</i>`,
tr: `
<h2>zu ile mastar (zu + Infinitiv)</h2>
<div class="rule-formula">..., <span class="rule-hl">zu</span> + <span class="rule-hl2">Mastar</span> (sonda)</div>
<p>Birçok fiil, sıfat ve kalıp ifade <b>zu ile mastar</b> ister. Mastar cümlenin <b>sonunda</b> yer alır.</p>
<p><b>Tetikleyiciler:</b></p>
<ul>
<li><b>Fiiller:</b> versuchen (denemek), vergessen (unutmak), hoffen (ummak), anfangen / beginnen (başlamak), aufhören (bırakmak), vorhaben (planlamak), sich entscheiden (karar vermek), sich freuen (sevinmek), scheinen (görünmek), glauben (sanmak), brauchen (yalnızca nicht/kein ile)</li>
<li><b>Es ist + sıfat:</b> Es ist <b>wichtig/schön/möglich</b>, ... <b>zu</b> + Mastar.</li>
<li><b>İsim + haben:</b> Lust / Zeit / Angst / vor + ... <b>zu</b> + Mastar.</li>
<li><b>ohne ... zu</b> (-meden), <b>statt ... zu</b> (-mek yerine)</li>
<li><b>sein + zu</b> (edilgen yerine): Das ist leicht <b>zu</b> machen.</li>
</ul>
<p><b>Örnekler:</b></p>
<p>Es ist wichtig, pünktlich <b>zu sein</b>. — Zamanında olmak önemlidir.</p>
<p>Ich versuche, jeden Tag Deutsch <b>zu lernen</b>. — Her gün Almanca öğrenmeye çalışıyorum.</p>
<p><b>Ayrılabilir fiiller:</b> <i>zu</i> ön ek ile kök arasına girer ve <b>tek kelime</b> yazılır: <b>einzuparken</b>, <b>aufzustehen</b>, <b>mitzukommen</b>.</p>
<p><i>Dikkat: Modal fiiller (können, müssen, dürfen, sollen, wollen, mögen) zu <b>almaz</b>! → Ich kann schwimmen.</i>`,
ar: `
<h2>المصدر مع zu</h2>
<div class="rule-formula">..., <span class="rule-hl">zu</span> + <span class="rule-hl2">المصدر</span> (في النهاية)</div>
<p>كثير من الأفعال والصفات والتعابير الثابتة تتطلب <b>مصدراً مع zu</b>. يأتي المصدر في <b>نهاية</b> الجملة.</p>
<p><b>الحالات الشائعة:</b></p>
<ul>
<li><b>أفعال:</b> versuchen (يحاول)، vergessen (ينسى)، hoffen (يأمل)، anfangen / beginnen (يبدأ)، aufhören (يتوقف)، vorhaben (يخطط)، sich entscheiden (يقرر)، sich freuen (يفرح)، scheinen (يبدو)، glauben (يظن)، brauchen (مع nicht/kein فقط)</li>
<li><b>Es ist + صفة:</b> Es ist <b>wichtig/schön/möglich</b>, ... <b>zu</b> + مصدر.</li>
<li><b>اسم + haben:</b> Lust / Zeit / Angst / vor + ... <b>zu</b> + مصدر.</li>
<li><b>ohne ... zu</b> (دون أن)، <b>statt ... zu</b> (بدلاً من أن)</li>
</ul>
<p>Es ist wichtig, pünktlich <b>zu sein</b>. — من المهم أن تكون في الوقت المحدد.</p>
<p>Ich versuche, jeden Tag Deutsch <b>zu lernen</b>. — أحاول تعلم الألمانية كل يوم.</p>
<p><b>الأفعال القابلة للفصل:</b> <i>zu</i> توضع بين البادئة والجذر ككلمة واحدة: <b>einzuparken</b>، <b>aufzustehen</b>.</p>
<p><i>تنبيه: الأفعال المساعدة (können، müssen، dürfen، sollen، wollen، mögen) لا تأخذ zu! → Ich kann schwimmen.</i>`,
fa: `
<h2>مصدر با zu</h2>
<div class="rule-formula">..., <span class="rule-hl">zu</span> + <span class="rule-hl2">مصدر</span> (در انتها)</div>
<p>بسیاری از افعال، صفت‌ها و عبارت‌های ثابت به <b>مصدر با zu</b> نیاز دارند. مصدر در <b>انتهای</b> جمله می‌آید.</p>
<p><b>نمونه‌های رایج:</b></p>
<ul>
<li><b>افعال:</b> versuchen (تلاش کردن)، vergessen (فراموش کردن)، hoffen (امیدوار بودن)، anfangen / beginnen (شروع کردن)، aufhören (متوقف کردن)، vorhaben (قصد داشتن)، sich entscheiden (تصمیم گرفتن)، sich freuen (خوشحال بودن)، scheinen (به نظر رسیدن)، glauben (پنداشتن)، brauchen (فقط با nicht/kein)</li>
<li><b>Es ist + صفت:</b> Es ist <b>wichtig/schön/möglich</b>, ... <b>zu</b> + مصدر.</li>
<li><b>اسم + haben:</b> Lust / Zeit / Angst / vor + ... <b>zu</b> + مصدر.</li>
<li><b>ohne ... zu</b> (بدون اینکه)، <b>statt ... zu</b> (به جای اینکه)</li>
</ul>
<p>Es ist wichtig, pünktlich <b>zu sein</b>. — مهم است که سر وقت باشی.</p>
<p>Ich versuche, jeden Tag Deutsch <b>zu lernen</b>. — تلاش می‌کنم هر روز آلمانی یاد بگیرم.</p>
<p><b>افعال جداشدنی:</b> <i>zu</i> میان پیشوند و ریشه به‌صورت یک کلمه می‌آید: <b>einzuparken</b>.</p>
<p><i>توجه: افعال وجهی (können، müssen، dürfen، sollen، wollen، mögen) zu <b>نمی‌گیرند</b>! → Ich kann schwimmen.</i>`,
vi: `
<h2>Động từ nguyên thể với zu (zu + Infinitiv)</h2>
<div class="rule-formula">..., <span class="rule-hl">zu</span> + <span class="rule-hl2">động từ nguyên thể</span> (ở cuối)</div>
<p>Nhiều động từ, tính từ và cụm cố định đòi hỏi <b>động từ nguyên thể với zu</b>. Động từ nguyên thể đứng ở <b>cuối</b> mệnh đề.</p>
<p><b>Các trường hợp thường gặp:</b></p>
<ul>
<li><b>Động từ:</b> versuchen (cố gắng), vergessen (quên), hoffen (hy vọng), anfangen / beginnen (bắt đầu), aufhören (dừng), vorhaben (dự định), sich entscheiden (quyết định), sich freuen (vui mừng), scheinen (có vẻ), glauben (tin), brauchen (chỉ với nicht/kein)</li>
<li><b>Es ist + tính từ:</b> Es ist <b>wichtig/schön/möglich</b>, ... <b>zu</b> + Inf.</li>
<li><b>Danh từ + haben:</b> Lust / Zeit / Angst / vor + ... <b>zu</b> + Inf.</li>
<li><b>ohne ... zu</b> (mà không), <b>statt ... zu</b> (thay vì)</li>
</ul>
<p>Es ist wichtig, pünktlich <b>zu sein</b>. — Đúng giờ là điều quan trọng.</p>
<p>Ich versuche, jeden Tag Deutsch <b>zu lernen</b>. — Tôi cố gắng học tiếng Đức mỗi ngày.</p>
<p><b>Động từ tách được:</b> <i>zu</i> đặt giữa tiền tố và gốc, viết liền thành một từ: <b>einzuparken</b>, <b>aufzustehen</b>.</p>
<p><i>Lưu ý: Động từ khiếm khuyết (können, müssen, dürfen, sollen, wollen, mögen) <b>không</b> dùng zu! → Ich kann schwimmen.</i>`
},

satz_indirekt_w: {
de: `
<h2>Indirekte W-Fragen</h2>
<div class="rule-formula">..., <span class="rule-hl">W-Wort</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p>Eine direkte W-Frage wird zu einer <b>indirekten Frage</b>, wenn sie in einen Hauptsatz eingebettet wird (<i>Ich weiß nicht, ... / Können Sie mir sagen, ...</i>). Dann wird sie zum <b>Nebensatz</b> — und das Verb wandert <b>ans Ende</b>.</p>
<p><b>Direkt:</b> Wo wohnt er? → <b>Indirekt:</b> Ich weiß nicht, <b>wo</b> er <span class="rule-hl2">wohnt</span>.</p>
<p><b>Direkt:</b> Wann fährt der Zug? → <b>Indirekt:</b> Können Sie mir sagen, <b>wann</b> der Zug <span class="rule-hl2">fährt</span>?</p>
<p><b>Häufige Auslöser:</b> Ich weiß (nicht), Ich frage mich, Ich verstehe nicht, Ich habe vergessen, Können Sie mir sagen, Wissen Sie, Es ist (un)klar, Sag mir bitte, Ich möchte wissen, Hast du gehört.</p>
<p><b>W-Wörter:</b> wer, was, wo, wohin, woher, wann, wie, warum, wie viel, wie lange, wie oft, mit wem, wofür, worüber, worum.</p>
<ul>
<li>Komma <b>vor</b> dem W-Wort.</li>
<li>Konjugiertes Verb steht <b>am Ende</b> des indirekten Fragesatzes.</li>
<li>Bei trennbaren Verben: alles <b>zusammen</b> am Ende — Ich weiß nicht, wann der Zug <b>abfährt</b>.</li>
<li>Im Perfekt: Hilfsverb ans Ende — Ich frage mich, was er gesagt <b>hat</b>.</li>
</ul>
<p><i>Achtung: Bei Ja/Nein-Fragen → <b>ob</b>, nicht <b>dass</b>! Ich weiß nicht, <b>ob</b> er kommt.</i>`,
ru: `
<h2>Косвенные W-вопросы (indirekte W-Fragen)</h2>
<div class="rule-formula">..., <span class="rule-hl">W-слово</span> + подлежащее + ... + <span class="rule-hl2">глагол(в конце)</span></div>
<p>Прямой W-вопрос становится <b>косвенным</b>, когда встраивается в главное предложение (<i>Я не знаю, ... / Можете сказать, ...</i>). Тогда он становится <b>придаточным</b> — и глагол уходит <b>в конец</b>.</p>
<p><b>Прямо:</b> Wo wohnt er? → <b>Косв.:</b> Ich weiß nicht, <b>wo</b> er <span class="rule-hl2">wohnt</span>. — Я не знаю, где он живёт.</p>
<p><b>Прямо:</b> Wann fährt der Zug? → <b>Косв.:</b> Können Sie mir sagen, <b>wann</b> der Zug <span class="rule-hl2">fährt</span>? — Можете сказать, когда отправляется поезд?</p>
<p><b>Частые вводные:</b> Ich weiß (nicht) — я (не) знаю, Ich frage mich — спрашиваю себя, Ich verstehe nicht — не понимаю, Ich habe vergessen — забыл(а), Können Sie mir sagen — можете сказать, Wissen Sie — знаете ли, Sag mir bitte — скажи мне.</p>
<p><b>W-слова:</b> wer (кто), was (что), wo (где), wohin (куда), woher (откуда), wann (когда), wie (как), warum (почему), wie viel (сколько), wie lange (как долго), wie oft (как часто), mit wem (с кем), wofür (для чего).</p>
<ul>
<li>Запятая <b>перед</b> W-словом.</li>
<li>Спрягаемый глагол стоит <b>в конце</b>.</li>
<li>У отделяемых глаголов всё <b>вместе</b> в конце — abfährt.</li>
<li>В Perfekt вспомогательный глагол в самый конец — ..., was er gesagt <b>hat</b>.</li>
</ul>
<p><i>Внимание: для да/нет-вопросов используется <b>ob</b>, а не <b>dass</b>! Ich weiß nicht, <b>ob</b> er kommt.</i>`,
en: `
<h2>Indirect W-questions</h2>
<div class="rule-formula">..., <span class="rule-hl">W-word</span> + subject + ... + <span class="rule-hl2">verb(end)</span></div>
<p>A direct W-question becomes an <b>indirect question</b> when embedded in a main clause (<i>I don't know... / Can you tell me...</i>). It then becomes a <b>subordinate clause</b> — and the verb moves to the <b>end</b>.</p>
<p><b>Direct:</b> Wo wohnt er? → <b>Indirect:</b> Ich weiß nicht, <b>wo</b> er <span class="rule-hl2">wohnt</span>. — I don't know where he lives.</p>
<p><b>Direct:</b> Wann fährt der Zug? → <b>Indirect:</b> Können Sie mir sagen, <b>wann</b> der Zug <span class="rule-hl2">fährt</span>? — Can you tell me when the train leaves?</p>
<p><b>Common triggers:</b> Ich weiß (nicht), Ich frage mich, Ich verstehe nicht, Ich habe vergessen, Können Sie mir sagen, Wissen Sie, Sag mir bitte, Ich möchte wissen.</p>
<p><b>W-words:</b> wer, was, wo, wohin, woher, wann, wie, warum, wie viel, wie lange, wie oft, mit wem, wofür, worüber.</p>
<ul>
<li>Comma <b>before</b> the W-word.</li>
<li>Conjugated verb at the <b>end</b>.</li>
<li>Separable verbs stay <b>together</b> at the end — abfährt.</li>
<li>In Perfekt the auxiliary goes at the very end — ..., was er gesagt <b>hat</b>.</li>
</ul>
<p><i>Note: for yes/no questions use <b>ob</b>, not <b>dass</b>! Ich weiß nicht, <b>ob</b> er kommt.</i>`,
tr: `
<h2>Dolaylı W-soruları</h2>
<div class="rule-formula">..., <span class="rule-hl">W-kelimesi</span> + özne + ... + <span class="rule-hl2">fiil(sonda)</span></div>
<p>Doğrudan W-sorusu, bir ana cümlenin içine yerleştirildiğinde (<i>Bilmiyorum... / Söyleyebilir misiniz...</i>) <b>dolaylı soru</b> hâline gelir. Bu durumda <b>yan cümle</b> olur ve fiil <b>sona</b> gider.</p>
<p><b>Doğrudan:</b> Wo wohnt er? → <b>Dolaylı:</b> Ich weiß nicht, <b>wo</b> er <span class="rule-hl2">wohnt</span>. — Nerede yaşadığını bilmiyorum.</p>
<p><b>Doğrudan:</b> Wann fährt der Zug? → <b>Dolaylı:</b> Können Sie mir sagen, <b>wann</b> der Zug <span class="rule-hl2">fährt</span>? — Trenin ne zaman kalktığını söyleyebilir misiniz?</p>
<p><b>Sık tetikleyiciler:</b> Ich weiß (nicht), Ich frage mich, Ich verstehe nicht, Ich habe vergessen, Können Sie mir sagen, Wissen Sie, Sag mir bitte.</p>
<p><b>W-kelimeleri:</b> wer, was, wo, wohin, woher, wann, wie, warum, wie viel, wie lange, wie oft, mit wem, wofür.</p>
<ul>
<li>W-kelimesinden <b>önce</b> virgül.</li>
<li>Çekimli fiil <b>sonda</b>.</li>
<li>Ayrılabilir fiiller sonda <b>birleşir</b> — abfährt.</li>
<li>Perfekt'te yardımcı fiil tam <b>sonda</b> — ..., was er gesagt <b>hat</b>.</li>
</ul>
<p><i>Dikkat: Evet/hayır soruları için <b>ob</b> kullanılır, <b>dass</b> değil!</i>`,
ar: `
<h2>الأسئلة غير المباشرة بـ W</h2>
<div class="rule-formula">..., <span class="rule-hl">كلمة W</span> + الفاعل + ... + <span class="rule-hl2">الفعل (في النهاية)</span></div>
<p>السؤال المباشر بـ W يصبح <b>سؤالاً غير مباشر</b> عندما يُدرج داخل جملة رئيسية (<i>لا أعرف... / هل يمكنك أن تخبرني...</i>). فيتحول إلى <b>جملة فرعية</b> — ويذهب الفعل إلى <b>النهاية</b>.</p>
<p><b>مباشر:</b> Wo wohnt er? → <b>غير مباشر:</b> Ich weiß nicht, <b>wo</b> er <span class="rule-hl2">wohnt</span>. — لا أعرف أين يسكن.</p>
<p><b>مباشر:</b> Wann fährt der Zug? → <b>غير مباشر:</b> Können Sie mir sagen, <b>wann</b> der Zug <span class="rule-hl2">fährt</span>? — هل يمكنك إخباري متى يغادر القطار؟</p>
<p><b>المُحفّزات الشائعة:</b> Ich weiß (nicht)، Ich frage mich، Ich verstehe nicht، Ich habe vergessen، Können Sie mir sagen، Wissen Sie.</p>
<p><b>كلمات W:</b> wer (من)، was (ماذا)، wo (أين)، wohin (إلى أين)، woher (من أين)، wann (متى)، wie (كيف)، warum (لماذا)، wie viel (كم)، wie lange (كم من الوقت)، mit wem (مع من).</p>
<ul>
<li>فاصلة <b>قبل</b> كلمة W.</li>
<li>الفعل المُصرّف في <b>النهاية</b>.</li>
<li>الأفعال القابلة للفصل تبقى <b>متّصلة</b> في النهاية — abfährt.</li>
<li>في Perfekt الفعل المساعد في النهاية تماماً — ..., was er gesagt <b>hat</b>.</li>
</ul>
<p><i>تنبيه: لأسئلة نعم/لا نستخدم <b>ob</b>، وليس <b>dass</b>!</i>`,
fa: `
<h2>پرسش‌های غیرمستقیم با W</h2>
<div class="rule-formula">..., <span class="rule-hl">واژهٔ W</span> + فاعل + ... + <span class="rule-hl2">فعل (در انتها)</span></div>
<p>پرسش مستقیم با W هنگامی که در یک جملهٔ اصلی جای می‌گیرد (<i>نمی‌دانم... / می‌توانید بگویید...</i>) به <b>پرسش غیرمستقیم</b> تبدیل می‌شود. آنگاه به <b>جملهٔ پیرو</b> بدل می‌شود و فعل به <b>انتها</b> می‌رود.</p>
<p><b>مستقیم:</b> Wo wohnt er? → <b>غیرمستقیم:</b> Ich weiß nicht, <b>wo</b> er <span class="rule-hl2">wohnt</span>. — نمی‌دانم کجا زندگی می‌کند.</p>
<p><b>مستقیم:</b> Wann fährt der Zug? → <b>غیرمستقیم:</b> Können Sie mir sagen, <b>wann</b> der Zug <span class="rule-hl2">fährt</span>? — می‌توانید بگویید قطار چه ساعتی حرکت می‌کند؟</p>
<p><b>محرک‌های رایج:</b> Ich weiß (nicht)، Ich frage mich، Ich verstehe nicht، Ich habe vergessen، Können Sie mir sagen.</p>
<p><b>واژه‌های W:</b> wer (چه کسی)، was (چه)، wo (کجا)، wohin (به کجا)، woher (از کجا)، wann (کی)، wie (چگونه)، warum (چرا)، wie viel (چقدر)، mit wem (با چه کسی).</p>
<ul>
<li>ویرگول <b>پیش از</b> واژهٔ W.</li>
<li>فعل صرف‌شده در <b>انتها</b>.</li>
<li>افعال جداشدنی در انتها <b>یکی می‌شوند</b> — abfährt.</li>
<li>در Perfekt فعل کمکی در آخرین جای جمله — ..., was er gesagt <b>hat</b>.</li>
</ul>
<p><i>توجه: برای پرسش‌های بله/خیر از <b>ob</b> استفاده می‌شود، نه <b>dass</b>!</i>`,
vi: `
<h2>Câu hỏi W gián tiếp</h2>
<div class="rule-formula">..., <span class="rule-hl">từ W</span> + chủ ngữ + ... + <span class="rule-hl2">động từ (ở cuối)</span></div>
<p>Một câu hỏi W trực tiếp trở thành <b>câu hỏi gián tiếp</b> khi được đặt trong một mệnh đề chính (<i>Tôi không biết... / Bạn có thể cho tôi biết...</i>). Khi đó nó trở thành <b>mệnh đề phụ</b> và động từ đi xuống <b>cuối câu</b>.</p>
<p><b>Trực tiếp:</b> Wo wohnt er? → <b>Gián tiếp:</b> Ich weiß nicht, <b>wo</b> er <span class="rule-hl2">wohnt</span>. — Tôi không biết anh ấy sống ở đâu.</p>
<p><b>Trực tiếp:</b> Wann fährt der Zug? → <b>Gián tiếp:</b> Können Sie mir sagen, <b>wann</b> der Zug <span class="rule-hl2">fährt</span>? — Bạn có thể cho tôi biết tàu khởi hành lúc nào không?</p>
<p><b>Cụm dẫn thường gặp:</b> Ich weiß (nicht), Ich frage mich, Ich verstehe nicht, Ich habe vergessen, Können Sie mir sagen, Wissen Sie.</p>
<p><b>Từ W:</b> wer (ai), was (cái gì), wo (ở đâu), wohin (đi đâu), woher (từ đâu), wann (khi nào), wie (thế nào), warum (tại sao), wie viel (bao nhiêu), wie lange (bao lâu).</p>
<ul>
<li>Dấu phẩy <b>trước</b> từ W.</li>
<li>Động từ chia ở <b>cuối câu</b>.</li>
<li>Động từ tách được <b>nối lại</b> ở cuối — abfährt.</li>
<li>Trong Perfekt, trợ động từ ở vị trí cuối cùng — ..., was er gesagt <b>hat</b>.</li>
</ul>
<p><i>Lưu ý: Đối với câu hỏi có/không, dùng <b>ob</b>, không phải <b>dass</b>!</i>`
},

satz_negation: {
de: `
<h2>Negation: nicht / kein</h2>
<div class="rule-formula"><span class="rule-hl">kein</span> + Substantiv &nbsp;|&nbsp; ... + <span class="rule-hl2">nicht</span> + (Adj/Adv/PP/Inf/Part/Vorsilbe)</div>

<h3>1. kein oder nicht?</h3>
<ul>
<li><b>kein</b> verneint Substantive <b>ohne Artikel</b> oder mit <b>ein-</b>.<br>Ich habe <b>ein</b> Auto. → Ich habe <b>kein</b> Auto.<br>Ich trinke Kaffee. → Ich trinke <b>keinen</b> Kaffee.</li>
<li><b>nicht</b> verneint alles andere: Verben, Sätze, Adjektive, Adverbien, Eigennamen, Substantive mit <b>bestimmtem Artikel</b>.<br>Ich kaufe das Auto <b>nicht</b>.</li>
</ul>
<p><b>kein</b> wird wie <b>ein</b> dekliniert: kein/keine/keinen/keinem/keiner/keines.</p>

<h3>2. Position von nicht</h3>
<p>Bei Satznegation steht <b>nicht</b> am <b>Ende</b> des Satzes:</p>
<p>Er kommt heute <b>nicht</b>.</p>
<p>ABER: <b>nicht</b> rückt nach <b>vor</b>, wenn rechts ein bestimmtes Element steht:</p>
<ul>
<li><b>vor Adjektiv/Adverb:</b> Das Buch ist <b>nicht</b> interessant. — Sie fährt <b>nicht</b> schnell.</li>
<li><b>vor Präpositionalphrase (Ort/Richtung):</b> Wir gehen <b>nicht</b> ins Kino. — Ich wohne <b>nicht</b> in Berlin.</li>
<li><b>vor Infinitiv (Modalverb):</b> Ich kann heute <b>nicht</b> kommen. — Du darfst hier <b>nicht</b> rauchen.</li>
<li><b>vor Partizip II (Perfekt/Passiv):</b> Ich habe das <b>nicht</b> gesagt. — Wir sind <b>nicht</b> gegangen.</li>
<li><b>vor trennbarer Vorsilbe:</b> Er steht heute <b>nicht</b> auf. — Sie ruft mich <b>nicht</b> an.</li>
</ul>

<h3>3. Teilnegation: nicht ... sondern</h3>
<p><b>nicht</b> kann auch nur <b>ein einzelnes Element</b> verneinen — dann steht es direkt davor und wird oft mit <b>sondern</b> korrigiert:</p>
<p>Ich fahre <b>nicht</b> morgen, <b>sondern</b> heute.</p>
<p>Er heißt <b>nicht</b> Peter, <b>sondern</b> Paul.</p>

<h3>4. Andere Negationswörter</h3>
<ul>
<li><b>nichts</b> = ничего → Ich habe <b>nichts</b> verstanden.</li>
<li><b>niemand</b> = никто → <b>Niemand</b> hat mir das gesagt.</li>
<li><b>nie / niemals</b> = никогда → Er kommt <b>nie</b> zu spät.</li>
<li><b>nirgendwo / nirgends</b> = нигде</li>
</ul>`,
ru: `
<h2>Отрицание: nicht / kein</h2>
<div class="rule-formula"><span class="rule-hl">kein</span> + сущ. &nbsp;|&nbsp; ... + <span class="rule-hl2">nicht</span> + (прил./нар./PP/инф./Part/приставка)</div>

<h3>1. kein или nicht?</h3>
<ul>
<li><b>kein</b> отрицает существительные <b>без артикля</b> или с <b>ein-</b>.<br>Ich habe <b>ein</b> Auto. → Ich habe <b>kein</b> Auto.<br>Ich trinke Kaffee. → Ich trinke <b>keinen</b> Kaffee.</li>
<li><b>nicht</b> отрицает всё остальное: глаголы, целое предложение, прилагательные, наречия, имена собственные, существительные с <b>определённым артиклем</b>.<br>Ich kaufe das Auto <b>nicht</b>. — Я не покупаю эту машину.</li>
</ul>
<p><b>kein</b> склоняется как <b>ein</b>: kein/keine/keinen/keinem/keiner/keines.</p>

<h3>2. Где стоит nicht?</h3>
<p>При отрицании всего предложения <b>nicht</b> ставится в <b>конце</b>:</p>
<p>Er kommt heute <b>nicht</b>. — Он сегодня не придёт.</p>
<p>НО: <b>nicht</b> сдвигается <b>влево</b>, если справа стоит определённый элемент:</p>
<ul>
<li><b>перед прилагательным/наречием:</b> Das Buch ist <b>nicht</b> interessant. — Sie fährt <b>nicht</b> schnell.</li>
<li><b>перед предложной группой (место/направление):</b> Wir gehen <b>nicht</b> ins Kino. — Ich wohne <b>nicht</b> in Berlin.</li>
<li><b>перед инфинитивом (с модальным):</b> Ich kann heute <b>nicht</b> kommen.</li>
<li><b>перед Partizip II:</b> Ich habe das <b>nicht</b> gesagt.</li>
<li><b>перед отделяемой приставкой:</b> Er steht heute <b>nicht</b> auf. — Sie ruft mich <b>nicht</b> an.</li>
</ul>

<h3>3. Частичное отрицание: nicht ... sondern</h3>
<p><b>nicht</b> может отрицать только <b>один элемент</b> — тогда оно ставится прямо перед ним, часто с поправкой через <b>sondern</b>:</p>
<p>Ich fahre <b>nicht</b> morgen, <b>sondern</b> heute. — Я еду не завтра, а сегодня.</p>
<p>Er heißt <b>nicht</b> Peter, <b>sondern</b> Paul.</p>

<h3>4. Другие отрицательные слова</h3>
<ul>
<li><b>nichts</b> — ничего</li>
<li><b>niemand</b> — никто</li>
<li><b>nie / niemals</b> — никогда</li>
<li><b>nirgendwo / nirgends</b> — нигде</li>
</ul>`,
en: `
<h2>Negation: nicht / kein</h2>
<div class="rule-formula"><span class="rule-hl">kein</span> + noun &nbsp;|&nbsp; ... + <span class="rule-hl2">nicht</span> + (Adj/Adv/PP/Inf/Part/prefix)</div>

<h3>1. kein or nicht?</h3>
<ul>
<li><b>kein</b> negates nouns <b>without an article</b> or with <b>ein-</b>.<br>Ich habe <b>ein</b> Auto. → Ich habe <b>kein</b> Auto. (I don't have a car)<br>Ich trinke Kaffee. → Ich trinke <b>keinen</b> Kaffee.</li>
<li><b>nicht</b> negates everything else: verbs, whole sentences, adjectives, adverbs, proper names, nouns with the <b>definite article</b>.<br>Ich kaufe das Auto <b>nicht</b>.</li>
</ul>
<p><b>kein</b> is declined like <b>ein</b>: kein/keine/keinen/keinem/keiner/keines.</p>

<h3>2. Position of nicht</h3>
<p>For sentence negation, <b>nicht</b> stands at the <b>end</b>:</p>
<p>Er kommt heute <b>nicht</b>. — He's not coming today.</p>
<p>BUT: <b>nicht</b> moves to the left when a specific element stands to its right:</p>
<ul>
<li><b>before adjective/adverb:</b> Das Buch ist <b>nicht</b> interessant.</li>
<li><b>before a prepositional phrase:</b> Wir gehen <b>nicht</b> ins Kino.</li>
<li><b>before an infinitive (modal):</b> Ich kann heute <b>nicht</b> kommen.</li>
<li><b>before Partizip II:</b> Ich habe das <b>nicht</b> gesagt.</li>
<li><b>before a separable prefix:</b> Er steht heute <b>nicht</b> auf.</li>
</ul>

<h3>3. Partial negation: nicht ... sondern</h3>
<p><b>nicht</b> can negate just <b>one element</b> — then it stands directly in front of it, often corrected with <b>sondern</b>:</p>
<p>Ich fahre <b>nicht</b> morgen, <b>sondern</b> heute.</p>

<h3>4. Other negative words</h3>
<ul>
<li><b>nichts</b> = nothing</li>
<li><b>niemand</b> = nobody</li>
<li><b>nie / niemals</b> = never</li>
<li><b>nirgendwo</b> = nowhere</li>
</ul>`,
tr: `
<h2>Olumsuzluk: nicht / kein</h2>
<div class="rule-formula"><span class="rule-hl">kein</span> + isim &nbsp;|&nbsp; ... + <span class="rule-hl2">nicht</span> + (sıfat/zarf/PP/mastar/Partizip/ön ek)</div>

<h3>1. kein mi nicht mi?</h3>
<ul>
<li><b>kein</b> <b>artikelsiz</b> isimleri ya da <b>ein-</b> ile gelen isimleri olumsuzlar.<br>Ich habe <b>ein</b> Auto. → Ich habe <b>kein</b> Auto.</li>
<li><b>nicht</b> diğer her şeyi olumsuzlar: fiiller, tüm cümleyi, sıfatlar, zarflar, özel isimler, <b>belirli artikelli</b> isimler.<br>Ich kaufe das Auto <b>nicht</b>.</li>
</ul>
<p><b>kein</b> tıpkı <b>ein</b> gibi çekilir.</p>

<h3>2. nicht'in yeri</h3>
<p>Cümle olumsuzlamasında <b>nicht</b> <b>sonda</b> olur:</p>
<p>Er kommt heute <b>nicht</b>.</p>
<p>ANCAK: Sağında belirli bir öge olduğunda <b>nicht</b> sola kayar:</p>
<ul>
<li><b>sıfat/zarf önünde:</b> Das Buch ist <b>nicht</b> interessant.</li>
<li><b>edat öbeği önünde:</b> Wir gehen <b>nicht</b> ins Kino.</li>
<li><b>mastar (modal) önünde:</b> Ich kann heute <b>nicht</b> kommen.</li>
<li><b>Partizip II önünde:</b> Ich habe das <b>nicht</b> gesagt.</li>
<li><b>ayrılabilir ön ek önünde:</b> Er steht heute <b>nicht</b> auf.</li>
</ul>

<h3>3. Kısmi olumsuzluk: nicht ... sondern</h3>
<p><b>nicht</b> tek bir öğeyi olumsuzlayabilir — o zaman tam onun önünde durur ve <b>sondern</b> ile düzeltilir:</p>
<p>Ich fahre <b>nicht</b> morgen, <b>sondern</b> heute.</p>

<h3>4. Diğer olumsuz kelimeler</h3>
<ul><li><b>nichts</b> (hiçbir şey)</li><li><b>niemand</b> (kimse)</li><li><b>nie</b> (asla)</li><li><b>nirgendwo</b> (hiçbir yerde)</li></ul>`,
ar: `
<h2>النفي: nicht / kein</h2>
<div class="rule-formula"><span class="rule-hl">kein</span> + اسم &nbsp;|&nbsp; ... + <span class="rule-hl2">nicht</span> + (صفة/ظرف/شبه جملة/مصدر/Partizip/بادئة)</div>

<h3>1. kein أم nicht؟</h3>
<ul>
<li><b>kein</b> ينفي الأسماء <b>بدون أداة تعريف</b> أو مع <b>ein-</b>.<br>Ich habe <b>ein</b> Auto. → Ich habe <b>kein</b> Auto.</li>
<li><b>nicht</b> ينفي كل شيء آخر: الأفعال، الجملة كاملة، الصفات، الظروف، أسماء العَلَم، الأسماء مع <b>أداة التعريف</b>.<br>Ich kaufe das Auto <b>nicht</b>.</li>
</ul>
<p><b>kein</b> يُصرّف مثل <b>ein</b>.</p>

<h3>2. موضع nicht</h3>
<p>عند نفي الجملة كلها، يقف <b>nicht</b> في <b>النهاية</b>:</p>
<p>Er kommt heute <b>nicht</b>.</p>
<p>لكن <b>nicht</b> يتقدم إلى الأمام عندما يأتي عنصر محدد على يمينه:</p>
<ul>
<li><b>قبل صفة/ظرف:</b> Das Buch ist <b>nicht</b> interessant.</li>
<li><b>قبل شبه جملة جر:</b> Wir gehen <b>nicht</b> ins Kino.</li>
<li><b>قبل المصدر (مع مساعد):</b> Ich kann heute <b>nicht</b> kommen.</li>
<li><b>قبل Partizip II:</b> Ich habe das <b>nicht</b> gesagt.</li>
<li><b>قبل البادئة المنفصلة:</b> Er steht heute <b>nicht</b> auf.</li>
</ul>

<h3>3. النفي الجزئي: nicht ... sondern</h3>
<p><b>nicht</b> يمكن أن ينفي عنصراً واحداً فقط — يقف مباشرة قبله ويُصحّح عادة بـ <b>sondern</b>:</p>
<p>Ich fahre <b>nicht</b> morgen, <b>sondern</b> heute.</p>

<h3>4. كلمات نفي أخرى</h3>
<ul><li><b>nichts</b> (لا شيء)</li><li><b>niemand</b> (لا أحد)</li><li><b>nie</b> (أبداً)</li><li><b>nirgendwo</b> (لا في أي مكان)</li></ul>`,
fa: `
<h2>نفی: nicht / kein</h2>
<div class="rule-formula"><span class="rule-hl">kein</span> + اسم &nbsp;|&nbsp; ... + <span class="rule-hl2">nicht</span> + (صفت/قید/گروه حرف اضافه/مصدر/Partizip/پیشوند)</div>

<h3>۱. kein یا nicht؟</h3>
<ul>
<li><b>kein</b> اسم‌های <b>بدون حرف تعریف</b> یا با <b>ein-</b> را نفی می‌کند.<br>Ich habe <b>ein</b> Auto. → Ich habe <b>kein</b> Auto.</li>
<li><b>nicht</b> بقیهٔ موارد را نفی می‌کند: افعال، کل جمله، صفات، قیدها، اسم‌های خاص و اسم‌های با <b>حرف تعریف معین</b>.<br>Ich kaufe das Auto <b>nicht</b>.</li>
</ul>
<p><b>kein</b> مانند <b>ein</b> صرف می‌شود.</p>

<h3>۲. جایگاه nicht</h3>
<p>در نفی کل جمله، <b>nicht</b> در <b>انتها</b> می‌آید:</p>
<p>Er kommt heute <b>nicht</b>.</p>
<p>اما <b>nicht</b> به سمت چپ می‌رود اگر سمت راستش عنصر مشخصی باشد:</p>
<ul>
<li><b>پیش از صفت/قید:</b> Das Buch ist <b>nicht</b> interessant.</li>
<li><b>پیش از گروه حرف اضافه:</b> Wir gehen <b>nicht</b> ins Kino.</li>
<li><b>پیش از مصدر (با فعل وجهی):</b> Ich kann heute <b>nicht</b> kommen.</li>
<li><b>پیش از Partizip II:</b> Ich habe das <b>nicht</b> gesagt.</li>
<li><b>پیش از پیشوند جداشدنی:</b> Er steht heute <b>nicht</b> auf.</li>
</ul>

<h3>۳. نفی جزئی: nicht ... sondern</h3>
<p><b>nicht</b> می‌تواند فقط یک عنصر را نفی کند — آنگاه مستقیماً پیش از آن می‌آید و معمولاً با <b>sondern</b> اصلاح می‌شود:</p>
<p>Ich fahre <b>nicht</b> morgen, <b>sondern</b> heute.</p>

<h3>۴. سایر واژه‌های نفی</h3>
<ul><li><b>nichts</b> (هیچ چیز)</li><li><b>niemand</b> (هیچ‌کس)</li><li><b>nie</b> (هرگز)</li><li><b>nirgendwo</b> (هیچ‌جا)</li></ul>`,
vi: `
<h2>Phủ định: nicht / kein</h2>
<div class="rule-formula"><span class="rule-hl">kein</span> + danh từ &nbsp;|&nbsp; ... + <span class="rule-hl2">nicht</span> + (tính từ/trạng từ/cụm giới từ/động từ nguyên thể/Partizip/tiền tố)</div>

<h3>1. kein hay nicht?</h3>
<ul>
<li><b>kein</b> phủ định danh từ <b>không có mạo từ</b> hoặc với <b>ein-</b>.<br>Ich habe <b>ein</b> Auto. → Ich habe <b>kein</b> Auto.</li>
<li><b>nicht</b> phủ định mọi thứ khác: động từ, cả câu, tính từ, trạng từ, danh riêng, danh từ với <b>mạo từ xác định</b>.<br>Ich kaufe das Auto <b>nicht</b>.</li>
</ul>
<p><b>kein</b> được biến đổi giống như <b>ein</b>.</p>

<h3>2. Vị trí của nicht</h3>
<p>Khi phủ định cả câu, <b>nicht</b> đứng ở <b>cuối câu</b>:</p>
<p>Er kommt heute <b>nicht</b>. — Hôm nay anh ấy không đến.</p>
<p>NHƯNG <b>nicht</b> chuyển sang trái khi bên phải nó là một thành phần cụ thể:</p>
<ul>
<li><b>trước tính từ/trạng từ:</b> Das Buch ist <b>nicht</b> interessant.</li>
<li><b>trước cụm giới từ:</b> Wir gehen <b>nicht</b> ins Kino.</li>
<li><b>trước động từ nguyên thể (với động từ khiếm khuyết):</b> Ich kann heute <b>nicht</b> kommen.</li>
<li><b>trước Partizip II:</b> Ich habe das <b>nicht</b> gesagt.</li>
<li><b>trước tiền tố tách được:</b> Er steht heute <b>nicht</b> auf.</li>
</ul>

<h3>3. Phủ định bộ phận: nicht ... sondern</h3>
<p><b>nicht</b> có thể chỉ phủ định một thành phần — khi đó nó đứng ngay trước thành phần đó, thường được sửa lại bằng <b>sondern</b>:</p>
<p>Ich fahre <b>nicht</b> morgen, <b>sondern</b> heute.</p>

<h3>4. Các từ phủ định khác</h3>
<ul><li><b>nichts</b> (không gì)</li><li><b>niemand</b> (không ai)</li><li><b>nie</b> (không bao giờ)</li><li><b>nirgendwo</b> (không nơi nào)</li></ul>`
}

};
