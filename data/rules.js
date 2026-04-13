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
satz_hauptsatz: `
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

satz_modal: `
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

satz_tekamolo: `
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

satz_weil: `
<h2>weil — потому что</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">weil</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>weil</b> = потому что. Глагол уходит в КОНЕЦ!</p>
<p>Ich bleibe zu Hause, <b>weil</b> ich krank <span class="rule-hl2">bin</span>.</p>
<p>Er lernt Deutsch, <b>weil</b> er in Wien arbeiten <span class="rule-hl2">will</span>.</p>
<div class="rule-box rule-blue"><b>weil vs. denn:</b><br>
<b>weil</b> → придаточное (Verb am Ende): ..., weil er müde <b>ist</b>.<br>
<b>denn</b> → главное (нормальный порядок): ..., denn er <b>ist</b> müde.</div>`,

satz_dass: `
<h2>dass — что</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">dass</span> + Subjekt + ... + <span class="rule-hl2">Verb (Ende!)</span></div>
<p><b>dass</b> = что. Глагол уходит в КОНЕЦ!</p>
<p>Ich denke, <b>dass</b> er recht <span class="rule-hl2">hat</span>.</p>
<p>Es ist wichtig, <b>dass</b> du pünktlich <span class="rule-hl2">kommst</span>.</p>
<div class="rule-box rule-blue"><b>dass vs. ob:</b><br>
<b>dass</b> = что (факт): Ich weiß, <b>dass</b> er kommt.<br>
<b>ob</b> = ли (вопрос): Ich weiß nicht, <b>ob</b> er kommt.</div>`,

satz_wenn: `
<h2>wenn — если / когда</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, <span class="rule-hl3">V</span> + S + ...</div>
<p><b>wenn</b> = если / когда (повторяющееся, настоящее, будущее)</p>
<p><b>Wenn</b> es <span class="rule-hl2">regnet</span>, <span class="rule-hl3">bleibe</span> ich zu Hause.</p>
<p><b>Wenn</b> ich Zeit <span class="rule-hl2">habe</span>, <span class="rule-hl3">lese</span> ich ein Buch.</p>
<div class="rule-box rule-green"><b>wenn vs. als:</b><br>
<b>wenn</b> = повторяющееся / будущее / настоящее<br>
<b>als</b> = однократное в прошлом</div>`,

satz_als: `
<h2>als — когда (прошлое, однократно)</h2>
<div class="rule-formula"><span class="rule-hl">Als</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>als</b> = когда (одно событие в прошлом)</p>
<p><b>Als</b> ich ein Kind <span class="rule-hl2">war</span>, spielte ich oft draußen.</p>
<p><b>Als</b> er nach Deutschland <span class="rule-hl2">kam</span>, sprach er kein Deutsch.</p>
<div class="rule-box rule-blue"><b>als</b> — ТОЛЬКО одноразово в прошлом!<br><b>wenn</b> — повторение или будущее/настоящее.</div>`,

satz_ob: `
<h2>ob — ли (косвенный вопрос)</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">ob</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>ob</b> = ли. Вопрос в придаточном. Глагол в КОНЦЕ!</p>
<p>Ich weiß nicht, <b>ob</b> er morgen <span class="rule-hl2">kommt</span>.</p>
<p>Kannst du mir sagen, <b>ob</b> das Geschäft noch offen <span class="rule-hl2">ist</span>?</p>`,

satz_obwohl: `
<h2>obwohl — хотя</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">obwohl</span> + S + ... + <span class="rule-hl2">V(Ende)</span></div>
<p><b>obwohl</b> = хотя (Nebensatz, глагол в конце!)</p>
<p>Er geht spazieren, <b>obwohl</b> es <span class="rule-hl2">regnet</span>.</p>
<div class="rule-box rule-blue"><b>obwohl vs. trotzdem:</b><br>
<b>obwohl</b> → Nebensatz (V am Ende): ..., obwohl es regnet.<br>
<b>trotzdem</b> → Hauptsatz (Inversion): Es regnet. <b>Trotzdem</b> geht er spazieren.</div>`,

satz_damit: `
<h2>damit / um...zu — чтобы</h2>
<div class="rule-formula"><span class="rule-hl">damit</span> + S + ... + V(Ende) | <span class="rule-hl2">um</span> + ... + <span class="rule-hl2">zu</span> + Infinitiv</div>
<p><b>damit</b> — разные подлежащие:</p>
<p>Ich erkläre es, <b>damit</b> alle es <span class="rule-hl">verstehen</span>.</p>
<p><b>um...zu</b> — одно подлежащее:</p>
<p>Ich lerne Deutsch, <b>um</b> eine Arbeit <b>zu</b> <span class="rule-hl2">finden</span>.</p>`,

satz_denn: `
<h2>denn — ведь, потому что</h2>
<div class="rule-formula">Hauptsatz, <span class="rule-hl">denn</span> + S + V + O (нормальный порядок!)</div>
<p><b>denn</b> = потому что, ведь. Главное предложение — обычный порядок слов!</p>
<p>Ich bleibe zu Hause, <b>denn</b> ich <span class="rule-hl">bin</span> krank.</p>
<div class="rule-box rule-green"><b>denn</b> (V на Pos. 2) ≠ <b>weil</b> (V am Ende)</div>`,

satz_aber: `
<h2>aber / sondern — но</h2>
<div class="rule-formula">HS, <span class="rule-hl">aber</span> + S + V + O | HS, <span class="rule-hl2">sondern</span> + ...</div>
<p><b>aber</b> = но (противопоставление):</p>
<p>Das Essen ist teuer, <b>aber</b> es schmeckt gut.</p>
<p><b>sondern</b> = а (после отрицания):</p>
<p>Er trinkt nicht Kaffee, <b>sondern</b> Tee.</p>`,

satz_trotzdem: `
<h2>trotzdem / deshalb — тем не менее / поэтому</h2>
<div class="rule-formula"><span class="rule-hl">trotzdem/deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>После trotzdem и deshalb — <b>инверсия</b> (V+S)!</p>
<p>Es regnet. <b>Trotzdem</b> <span class="rule-hl2">geht</span> er spazieren.</p>
<p>Er ist müde. <b>Deshalb</b> <span class="rule-hl2">bleibt</span> er zu Hause.</p>
<div class="rule-box rule-blue"><b>trotzdem</b> = тем не менее (вопреки)<br><b>deshalb</b> = поэтому (следствие)</div>`,

satz_nachdem: `
<h2>nachdem / bevor — после того как / прежде чем</h2>
<div class="rule-formula"><span class="rule-hl">Nachdem</span> + S + ... + <span class="rule-hl2">V(Ende)</span>, V + S + ...</div>
<p><b>nachdem</b> = после того как. Важно: разные времена!</p>
<p><b>Nachdem</b> er gegessen <span class="rule-hl2">hatte</span>, ging er spazieren. (Plusquamperfekt → Präteritum)</p>
<p><b>bevor</b> = прежде чем:</p>
<p><b>Bevor</b> du <span class="rule-hl2">gehst</span>, ruf mich an!</p>`,

satz_passiv: `
<h2>Passiv — Пассивный залог</h2>
<div class="rule-formula">Subjekt + <span class="rule-hl">werden</span> + ... + <span class="rule-hl2">Partizip II</span></div>
<table class="rule-table">
<tr><th>Tempus</th><th>Formel</th><th>Beispiel</th></tr>
<tr><td>Präsens</td><td>wird + P.II</td><td>Das Haus <b>wird</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Präteritum</td><td>wurde + P.II</td><td>Das Haus <b>wurde</b> <span class="rule-hl2">gebaut</span>.</td></tr>
<tr><td>Perfekt</td><td>ist + P.II + worden</td><td>Das Haus <b>ist</b> <span class="rule-hl2">gebaut</span> <b>worden</b>.</td></tr>
<tr><td>mit Modal</td><td>Modal + P.II + werden</td><td>Das Haus <b>muss</b> <span class="rule-hl2">gebaut</span> <b>werden</b>.</td></tr>
</table>`,

satz_konjunktiv: `
<h2>Konjunktiv II — Сослагательное наклонение</h2>
<div class="rule-formula"><span class="rule-hl">Wenn</span> + S + hätte/wäre, <span class="rule-hl2">würde</span> + S + Infinitiv</div>
<table class="rule-table">
<tr><th>Verb</th><th>Konjunktiv II</th><th>Beispiel</th></tr>
<tr><td>sein</td><td><b>wäre</b></td><td>Wenn ich reich <b>wäre</b>...</td></tr>
<tr><td>haben</td><td><b>hätte</b></td><td>Wenn ich Zeit <b>hätte</b>...</td></tr>
<tr><td>andere</td><td><b>würde</b> + Inf.</td><td>Ich <b>würde</b> reisen.</td></tr>
<tr><td>können</td><td><b>könnte</b></td><td>Ich <b>könnte</b> helfen.</td></tr>
<tr><td>müssen</td><td><b>müsste</b></td><td>Du <b>müsstest</b> lernen.</td></tr>
</table>
<p>Wenn ich mehr Geld <b>hätte</b>, <b>würde</b> ich eine Reise machen.</p>
<div class="rule-box rule-green"><b>An deiner Stelle würde ich...</b> — вежливый совет</div>`,

satz_je_desto: `
<h2>je...desto — чем...тем</h2>
<div class="rule-formula"><span class="rule-hl">Je</span> + Komparativ + S + V(Ende), <span class="rule-hl2">desto</span> + Komparativ + V + S</div>
<p><b>Je</b> mehr man übt, <b>desto</b> besser wird man.</p>
<p><b>Je</b> älter man wird, <b>desto</b> weiser wird man.</p>
<div class="rule-box rule-blue">В je-части: Verb am Ende!<br>В desto-части: Inversion (V+S)!</div>`,

satz_relativ: `
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
<p>Die Frau, <b>die</b> ich gestern <span class="rule-hl2">getroffen habe</span>, ist Ärztin.</p>`,

satz_bevor: `
<h2>bevor — перед тем как</h2>
<div class="rule-formula">HS, <span class="rule-hl">bevor</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bevor</b> вводит придаточное времени. Действие в придаточном происходит ПОЗЖЕ действия главного.</p>
<table class="rule-table">
<tr><th>Главное</th><th>Союз</th><th>Подлежащее</th><th>...</th><th>Глагол</th></tr>
<tr><td>Ich frühstücke,</td><td><b>bevor</b></td><td>ich</td><td>zur Arbeit</td><td><b>gehe</b>.</td></tr>
</table>
<p>Wasch dir die Hände, <b>bevor</b> du <span class="rule-hl2">isst</span>.</p>
<p>Bevor ich nach Hause <span class="rule-hl2">komme</span>, kaufe ich Brot.</p>`,

satz_bis: `
<h2>bis — до тех пор пока (не)</h2>
<div class="rule-formula">HS, <span class="rule-hl">bis</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>bis</b> обозначает конечную точку во времени.</p>
<p>Ich warte hier, <b>bis</b> du <span class="rule-hl2">kommst</span>.</p>
<p>Bleib im Bett, <b>bis</b> der Arzt <span class="rule-hl2">kommt</span>!</p>
<p>Wir spielen, <b>bis</b> es dunkel <span class="rule-hl2">wird</span>.</p>`,

satz_deshalb: `
<h2>deshalb / darum / deswegen — поэтому</h2>
<div class="rule-formula">HS1. <span class="rule-hl">Deshalb</span> + <span class="rule-hl2">Verb</span> + Subjekt + ...</div>
<p>Союзные наречия — после них идёт ИНВЕРСИЯ (глагол на 2-м месте, подлежащее после).</p>
<table class="rule-table">
<tr><th>Pos. 1</th><th>Pos. 2 (Verb)</th><th>Pos. 3</th><th>...</th></tr>
<tr><td><b>Deshalb</b></td><td><b>bleibe</b></td><td>ich</td><td>zu Hause.</td></tr>
</table>
<p>Es regnet. <b>Deshalb</b> <span class="rule-hl2">nehme</span> ich den Regenschirm.</p>
<p>Ich bin müde. <b>Darum</b> <span class="rule-hl2">gehe</span> ich ins Bett.</p>
<p>Er war krank. <b>Deswegen</b> <span class="rule-hl2">ist</span> er nicht gekommen.</p>`,

satz_seitdem: `
<h2>seit / seitdem — с тех пор как</h2>
<div class="rule-formula">HS, <span class="rule-hl">seitdem</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>seit/seitdem</b> вводит придаточное времени — действие началось в прошлом и продолжается.</p>
<p>Ich lerne Deutsch, <b>seitdem</b> ich in Wien <span class="rule-hl2">wohne</span>.</p>
<p><b>Seit</b> er Sport <span class="rule-hl2">macht</span>, fühlt er sich besser.</p>
<p>Es regnet, <b>seitdem</b> wir hier <span class="rule-hl2">sind</span>.</p>`,

satz_sobald: `
<h2>sobald — как только</h2>
<div class="rule-formula">HS, <span class="rule-hl">sobald</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>sobald</b> — действия следуют непосредственно одно за другим.</p>
<p>Ich rufe dich an, <b>sobald</b> ich zu Hause <span class="rule-hl2">bin</span>.</p>
<p><b>Sobald</b> die Sonne <span class="rule-hl2">scheint</span>, gehen wir in den Park.</p>
<p>Wir fangen an, <b>sobald</b> alle da <span class="rule-hl2">sind</span>.</p>`,

satz_sondern: `
<h2>sondern — а / но (после отрицания)</h2>
<div class="rule-formula">nicht/kein ..., <span class="rule-hl">sondern</span> ...</div>
<p><b>sondern</b> используется ТОЛЬКО после отрицания (nicht, kein, nie). Сочинительный союз — порядок слов прямой.</p>
<table class="rule-table">
<tr><th>Отрицание</th><th>Союз</th><th>Альтернатива</th></tr>
<tr><td>Das ist <b>nicht</b> Peter,</td><td><b>sondern</b></td><td>Paul.</td></tr>
<tr><td>Ich trinke <b>keinen</b> Kaffee,</td><td><b>sondern</b></td><td>Tee.</td></tr>
</table>
<p>Er kommt <b>nicht</b> heute, <b>sondern</b> morgen.</p>
<p>Das Buch ist <b>nicht</b> langweilig, <b>sondern</b> sehr interessant.</p>`,

satz_textbau: `
<h2>Textaufbau — Построение текста (B2-C2)</h2>
<p>Хороший текст имеет чёткую структуру: <b>Einleitung → Hauptteil → Schluss</b>.</p>
<table class="rule-table">
<tr><th>Часть</th><th>Функция</th><th>Konnektoren</th></tr>
<tr><td>Einleitung</td><td>Тема, проблема</td><td>zunächst, einerseits, in letzter Zeit</td></tr>
<tr><td>Hauptteil</td><td>Аргументы, примеры</td><td>außerdem, darüber hinaus, zum Beispiel, dagegen</td></tr>
<tr><td>Schluss</td><td>Вывод, мнение</td><td>schließlich, zusammenfassend, meiner Meinung nach</td></tr>
</table>
<div class="rule-formula">Argument + <span class="rule-hl">Beispiel</span> + <span class="rule-hl2">Folgerung</span></div>
<p><b>Einerseits</b> bietet das Internet viele Vorteile, <b>andererseits</b> gibt es auch Risiken.</p>
<p><b>Zum Beispiel</b> kann man schnell Informationen finden. <b>Außerdem</b> kann man mit Freunden in Kontakt bleiben.</p>
<p><b>Zusammenfassend</b> lässt sich sagen, dass das Internet aus unserem Leben nicht mehr wegzudenken ist.</p>`,

satz_um_zu: `
<h2>um ... zu + Infinitiv — чтобы (одно подлежащее)</h2>
<div class="rule-formula">HS, <span class="rule-hl">um</span> ... <span class="rule-hl2">zu + Infinitiv</span></div>
<p><b>um...zu</b> используется только когда подлежащее в обеих частях ОДНО И ТО ЖЕ. Иначе используем <b>damit</b>.</p>
<table class="rule-table">
<tr><th>Главное</th><th>um</th><th>...</th><th>zu + Inf</th></tr>
<tr><td>Ich lerne Deutsch,</td><td><b>um</b></td><td>in Wien</td><td><b>zu studieren</b>.</td></tr>
<tr><td>Sie geht ins Café,</td><td><b>um</b></td><td>einen Kaffee</td><td><b>zu trinken</b>.</td></tr>
</table>
<p>⚠ Trennbare Verben: <b>um</b> ein<span class="rule-hl">zu</span>kaufen / <b>um</b> auf<span class="rule-hl">zu</span>stehen.</p>
<p>Er fährt nach Deutschland, <b>um</b> seine Familie <span class="rule-hl2">zu besuchen</span>.</p>`,

satz_waehrend: `
<h2>während — в то время как / пока</h2>
<div class="rule-formula">HS, <span class="rule-hl">während</span> + Subjekt + ... + <span class="rule-hl2">Verb(Ende)</span></div>
<p><b>während</b> имеет два значения:<br>
1. <b>Время</b> — одновременность действий<br>
2. <b>Противопоставление</b> — в то время как (контраст)</p>
<p>Ich höre Musik, <b>während</b> ich <span class="rule-hl2">koche</span>. <i>(время)</i></p>
<p><b>Während</b> er gern Sport <span class="rule-hl2">macht</span>, liest sie lieber Bücher. <i>(контраст)</i></p>
<p><b>Während</b> meine Schwester schläft, <span class="rule-hl2">lerne</span> ich.</p>`
};
