const RULES = {
partizip: `
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

reflexive: `
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

sentences: `
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
<tr><td><b>weil</b></td><td>потому что</td><td>..., weil er müde <span class="rule-hl">ist</span></td></tr>
<tr><td><b>dass</b></td><td>что</td><td>..., dass er Deutsch <span class="rule-hl">lernt</span></td></tr>
<tr><td><b>wenn</b></td><td>если/когда</td><td>Wenn es <span class="rule-hl">regnet</span>, ...</td></tr>
<tr><td><b>als</b></td><td>когда (прошлое)</td><td>Als ich jung <span class="rule-hl">war</span>, ...</td></tr>
<tr><td><b>ob</b></td><td>ли</td><td>..., ob er <span class="rule-hl">kommt</span></td></tr>
<tr><td><b>obwohl</b></td><td>хотя</td><td>..., obwohl es kalt <span class="rule-hl">ist</span></td></tr>
<tr><td><b>damit</b></td><td>чтобы</td><td>..., damit alle es <span class="rule-hl">verstehen</span></td></tr>
<tr><td><b>nachdem</b></td><td>после того как</td><td>Nachdem er gegessen <span class="rule-hl">hatte</span>, ...</td></tr>
<tr><td><b>bevor</b></td><td>прежде чем</td><td>Bevor du <span class="rule-hl">gehst</span>, ...</td></tr>
<tr><td><b>während</b></td><td>пока</td><td>Während er <span class="rule-hl">kocht</span>, ...</td></tr>
</table>

<h3>Konnektoren (Hauptsatz!)</h3>
<table class="rule-table">
<tr><th>Konnektor</th><th>Wortstellung</th></tr>
<tr><td><b>denn</b> (потому что)</td><td>Normal: S+V+O</td></tr>
<tr><td><b>aber</b> (но)</td><td>Normal: S+V+O</td></tr>
<tr><td><b>deshalb</b> (поэтому)</td><td>Inversion: V+S+O</td></tr>
<tr><td><b>trotzdem</b> (тем не менее)</td><td>Inversion: V+S+O</td></tr>
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

prepositions: `
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

pronouns: `
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
