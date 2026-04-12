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
<div class="rule-box rule-green">Im Relativsatz steht das Verb am <b>Ende</b>!<br>Der Mann, <b>der</b> dort <span class="rule-hl">steht</span>, ist mein Lehrer.</div>`
};
