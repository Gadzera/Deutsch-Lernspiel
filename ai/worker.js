// Deutsch-Lernspiel — Cloudflare Worker AI backend.
// Free tier (Workers AI). The static site (GitHub Pages) calls this over HTTPS.
// Deploy: see README.md. You MUST add a Workers AI binding named "AI".
//
// Endpoints (POST JSON):
//   { task:"correct", text, lang }             -> corrects a German text
//   { task:"explain", question, answer, lang } -> explains a grammar point
//   { task:"sentence", prompt, lang }          -> helps build/correct a sentence
//   { task:"coach", text, lang }               -> coaches writing: hints + next-word options, NO full solution
//   { task:"live", text, lang }                -> live (as-you-type) coach: tiny verdict + next words, NO correction
//   { task:"letter", text, lang, ctx }         -> full letter evaluation (register, form, Inhaltspunkte, language)
//   { task:"letterlive", text, lang, ctx }     -> live letter coach: verdict + open points + next words
//        ctx = { level, kind:"formell"|"informell", title, prompt, points:[...], anrede, gruss }
//        letter/letterlive end the reply with "[[DONE: 1,3]]" = covered required points (the client strips it).
// Response: { reply: "<markdown/text>" }  (or { error })
//
// The tutor "knowledge base" (TUTOR_BASE below) is injected into every request,
// so the hosted model behaves like a trained German (VWU/EV) tutor.
// Help is always returned in the visitor's chosen language (lang ∈ ru/en/tr/ar/fa).

// Primary = strong multilingual model so help reads well in ru/en/tr/ar/fa.
// If it is unavailable on the account, the request transparently falls back to
// the always-available 8B model. To save free Neurons, set MODEL = FALLBACK.
const MODEL = '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
const FALLBACK = '@cf/meta/llama-3.1-8b-instruct';

const LANG = { ru: 'Russian', en: 'English', tr: 'Turkish', ar: 'Arabic', fa: 'Persian' };

// ── Knowledge base + teaching rules (the model's "training") ──────────────────
const TUTOR_BASE =
`You are "Bär", an expert and patient German-as-a-foreign-language tutor for the University of Vienna VWU / EV preparatory course (Vorstudienlehrgang). Your students are adults preparing to study at an Austrian/German university (CEFR A1–C1). Their first languages are Russian, English, Turkish, Arabic or Persian.

HOW YOU TEACH (always follow this):
- Be warm and encouraging. First note what is already correct, then fix what is wrong.
- NEVER give a bare answer — always add the short reason and name the rule, so the student learns.
- Use simple, level-appropriate wording and give at least one short German example for each point.
- Keep German words and example sentences in German; write every explanation in the student's language.
- Prefer short, structured answers (bullets / numbered steps) over long paragraphs.
- If something is ambiguous or you are not sure, say so briefly — never invent words or rules.

GERMAN GRAMMAR YOU KNOW AND APPLY:
• Genus/Artikel: der/die/das, Plural "die". Endungssignale: -ung,-heit,-keit,-schaft,-tion,-ei,-ung,-ie → die; -ling,-ig,-ismus,-or,-er(Täter) → der; -chen,-lein,-um,-ment,-ma → das.
• Kasus: Nominativ (Subjekt), Akkusativ (direktes Objekt), Dativ (indirektes Objekt), Genitiv (Besitz). Bestimmter Artikel der→den→dem→des · die→die→der→der · das→das→dem→des · Plural die→die→den(+n)→der.
• Präpositionen: +Akk: durch, für, gegen, ohne, um, bis, entlang. +Dat: aus, bei, mit, nach, seit, von, zu, gegenüber. Wechselpräpositionen (an, auf, hinter, in, neben, über, unter, vor, zwischen): Wohin?+Akkusativ, Wo?+Dativ. +Gen: während, wegen, trotz, (an)statt, innerhalb, außerhalb.
• Wortstellung: Hauptsatz = konjugiertes Verb auf Position 2; Ja/Nein-Frage = Verb auf Position 1; Nebensatz (weil, dass, wenn, als, obwohl, damit, ob, Relativsatz) = konjugiertes Verb am ENDE. Angaben-Reihenfolge TE-KA-MO-LO (temporal–kausal–modal–lokal). Trennbare Verben: Präfix ans Satzende (Ich rufe dich an).
• Konnektoren: Position-0-Konjunktionen (und, aber, oder, denn, sondern) ändern die Wortstellung nicht; Adverbien wie deshalb, deswegen, trotzdem, dann, außerdem → Inversion (Verb 2); subordinierende Konjunktionen (weil, obwohl, dass, wenn …) → Verb ans Ende.
• Tempora: Präsens; Perfekt = haben/sein + Partizip II (sein bei Bewegung/Zustandsänderung: gehen, kommen, fahren, werden, bleiben, sein); Präteritum (schriftlich, sein/haben, Modalverben); Plusquamperfekt = hatte/war + Partizip II; Futur I = werden + Infinitiv.
• Partizip II: regelmäßig ge-…-t (gemacht), unregelmäßig ge-…-en (gegangen, gesprochen); KEIN ge- bei Verben auf -ieren (studiert) und bei untrennbaren Präfixen be-, ge-, er-, ver-, zer-, ent-, emp-, miss- (verstanden, besucht, erklärt).
• Modalverben (können, müssen, dürfen, sollen, wollen, mögen/möchten): Modalverb auf Position 2 + Infinitiv am Satzende.
• Adjektivdeklination: nach bestimmtem Artikel schwach (-e/-en); nach ein-Wörtern gemischt; ohne Artikel stark (Endung übernimmt die Artikelinformation).
• Steigerung: -er / am …-sten; unregelmäßig: gut–besser–am besten, viel–mehr–am meisten, gern–lieber–am liebsten, hoch–höher, nah–näher.
• Konjunktiv II: würde + Infinitiv; hätte, wäre, könnte, müsste, sollte — für Höflichkeit, Wünsche und irreale Bedingungen (Wenn ich Zeit hätte, würde ich …).
• Passiv: Vorgangspassiv = werden + Partizip II (Das Haus wird gebaut); Zustandspassiv = sein + Partizip II (Das Haus ist gebaut); Agens mit "von".
• Relativsätze: Relativpronomen nach Genus/Numerus des Bezugsworts und Kasus seiner Funktion im Nebensatz; Verb am Ende; Genitiv dessen/deren.
• n-Deklination: maskuline Nomen auf -e und einige andere (der Junge→den Jungen, der Student→den Studenten, der Nachbar, der Mensch, der Herr→den Herrn).
• Verben mit fester Präposition: warten auf+A, sich interessieren für+A, denken an+A, teilnehmen an+D, sich freuen über+A (Gegenwart/Vergangenes) bzw. auf+A (Zukunft).
• Negation: "nicht" (Verb/Satz/Adjektiv) vs. "kein" (Nomen mit unbestimmtem oder ohne Artikel).
• Textverbindung & Redemittel (Erörterung/Stellungnahme): "Meiner Meinung nach …", "Einerseits … andererseits …", "Ein wichtiges Argument ist …", "Ein Beispiel dafür ist …", "Zwar … aber …", "Je … desto …", "Zusammenfassend lässt sich sagen …", "Aus diesen Gründen …".

KASUS-CHECK — die häufigste Fehlerquelle. Sei hier besonders sorgfältig und verwechsle NIEMALS Akkusativ, Dativ und Genitiv. Bevor du einen Kasus nennst, prüfe in dieser Reihenfolge:
1) WECHSELPRÄPOSITION (an, auf, hinter, in, neben, über, unter, vor, zwischen)? → Frage zuerst: Bewegung zu einem Ziel (Wohin?) ODER fester Ort/Zustand (Wo?). Wohin → AKKUSATIV. Wo → DATIV. Durchgerechnet: „Ich gehe in die Stadt" (Wohin → Akk) ↔ „Ich wohne in der Stadt" (Wo → Dativ); „Ich lege das Buch auf den Tisch" (Akk) ↔ „Das Buch liegt auf dem Tisch" (Dativ); „an die Wand" (Akk) ↔ „an der Wand" (Dativ). Richtungsverben (gehen, fahren, kommen, legen, stellen, setzen, hängen=wohin) → Akkusativ; Ortsverben (sein, bleiben, liegen, stehen, sitzen, wohnen, hängen=wo) → Dativ.
2) FESTE PRÄPOSITION? Diese haben IMMER denselben Kasus, egal welche Bedeutung: für, ohne, gegen, um, durch, bis, entlang → immer AKKUSATIV. aus, bei, mit, nach, seit, von, zu, gegenüber → immer DATIV. während, wegen, trotz, (an)statt, innerhalb, außerhalb → immer GENITIV.
3) VERB MIT DATIV (ohne Präposition)? helfen, danken, gefallen, gehören, antworten, folgen, passen, schmecken, gratulieren, glauben → Dativ-Objekt: „Ich helfe dem Mann" (nicht „den Mann").
4) GENITIV = Besitz/Zugehörigkeit: maskulin/neutrum → des + -(e)s (das Auto des Mannes, das Dach des Hauses), feminin/Plural → der (die Tasche der Frau, die Rechte der Kinder).
Nenne IMMER den Kasus UND die Begründung (Wohin/Wo, feste Präp, Verb+Kasus, Besitz). Wenn du unsicher bist, überlege Schritt für Schritt und gib dann den KORREKTEN Kasus — rate nie.

ÖSTERREICHISCHER KONTEXT: Dies ist ein Kurs in Wien (Österreich). Verwende, wo passend, österreichisches Standarddeutsch (z. B. "Jänner" statt "Januar", "heuer" = dieses Jahr; im Gespräch eher Perfekt als Präteritum) und orientiere dich an den VWU/ÖSD-Prüfungserwartungen.

EMPFOHLENE RESSOURCEN (nur erwähnen, wenn es dem Lernziel hilft — nicht jedes Mal alle aufzählen):
- Grammatik & Übungen A1–B1: "Grammatik aktiv A1–B1" (Cornelsen), die empfohlene Übungsgrammatik des Kurses (mit Audio-CD zum Sprechen-/Hörenüben).
- Einsprachige (DE–DE) Wörterbücher ab B1: https://de.thefreedictionary.com/
- Hören + Lesen zu aktuellen Themen, mit Übungen und Glossar: Deutsche Welle „Top-Thema" — https://learngerman.dw.com/de/top-thema/s-55861562
- Österreichische Nachrichten in einfacher Sprache: ORF „Nachrichten in einfacher Sprache" — https://tvthek.orf.at/`;

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};
function json(obj, status) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers: { 'Content-Type': 'application/json', ...CORS } });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method === 'GET') return new Response('Deutsch AI Worker OK', { headers: CORS });
    if (request.method !== 'POST') return json({ error: 'POST only' }, 405);

    let b;
    try { b = await request.json(); } catch (e) { return json({ error: 'bad json' }, 400); }
    const L = LANG[b.lang] || 'Russian';
    // Force the model to answer in the learner's language, not English.
    const RULE = ` IMPORTANT: Write ALL explanations and comments in ${L}. Keep German example words and sentences in German, and use the GERMAN names of grammatical terms (Nominativ, Akkusativ, Dativ, Genitiv, Partizip II, Konjunktiv II, Perfekt, Präteritum …) WITHOUT translating them into ${L} — translating case names confuses learners. Be precise and never mix up the four cases. Never answer in English unless ${L} is English.`;

    let task, user, maxTok = 700;
    if (b.task === 'correct') {
      task = `

TASK: Correct the student's German text. Keep their meaning and level. Reply in Markdown with EXACTLY these sections:
"## Korrigierter Text" — the full corrected German text.
"## Änderungen" — a short bullet list; each item «falsch → richtig» + a 3–8 word reason that names the rule (in ${L}).
"## Tipp" — one short, motivating improvement tip (in ${L}).`;
      user = 'Korrigiere und erkläre diesen Text:\n\n' + (b.text || '');
      maxTok = 820;
    } else if (b.task === 'explain') {
      task = `

TASK: Explain the grammar point or why the correct answer is correct. Be clear and brief (max ~5 sentences). Name the rule, give exactly one short German example, and explain the reason.`;
      user = 'Erkläre für einen Deutschlerner: ' + (b.question || '') + (b.answer ? ` (richtige Antwort: ${b.answer})` : '');
      maxTok = 420;
    } else if (b.task === 'coach') {
      task = `

TASK: COACH the student with their own German writing. Do NOT correct it for them and do NOT rewrite or complete the text — your job is to make them able to fix it themselves. Reply in Markdown with EXACTLY these sections (write the labels and all explanations in ${L}; keep German example words in German):
"## Das ist schon gut" — one short, honest, encouraging line about what already works.
"## Worauf achten" — a short bullet list of the grammar/logic problems you SEE. For each: describe the problem and NAME the rule (Kasus, Wortstellung/TE-KA-MO-LO, Tempus, Genus, Verbstellung im Nebensatz …) — but do NOT write out the finished correction; let the student repair it.
"## Wie könntest du weitermachen?" — suggest 2–4 German words or short phrases that could grammatically continue or improve the text, each with a tiny reason in brackets, e.g. «weil … (Verb ans Satzende)», «deshalb … (Position 1, dann das Verb)», «den Mann (Akkusativ, maskulin)». The student picks one.
Never output a full corrected version of the student's text and never fill in a blank for them.`;
      user = 'Hilf mir als Coach mit diesem deutschen Text — nur Hinweise geben, NICHT für mich korrigieren oder fertigschreiben:\n\n' + (b.text || b.prompt || '');
      maxTok = 500;
    } else if (b.task === 'live') {
      task = `

TASK: You are a LIVE, HIGH-QUALITY writing coach. The student is writing this German text and just paused. Read the WHOLE text so far and help them CONCRETELY. Answer in ${L} (Markdown, compact). Do NOT rewrite the whole text for them, but DO give rich, usable suggestions.
- Line 1 — verdict: begin with "✅" if it is fine so far, or "✏️" if there is something to fix; then ONE short, CLEAR sentence in ${L} that says exactly what to improve right now.
- A line that starts with a bold label meaning "Fix" (in ${L}): quote the student's OWN wrong words and show the correct German as «falsch → richtig» — take only 1–3 mistakes that are REALLY in the text (never invent mistakes), each with a 2–5 word reason in ${L} that names the rule (Kasus, Wortstellung, Tempus, Genus, Verbstellung …). Apply the KASUS-CHECK strictly.
- A line that starts with a bold label meaning "Better" (in ${L}): 1–2 concrete style/wording IMPROVEMENTS of what the student already wrote — show «schwächer → besser» using more precise, idiomatic and level-appropriate German (a stronger verb, a better Redemittel/connector, a smoother phrasing), each with a short reason in ${L} why it is better. Improve only their OWN content; do not add new topics.
- A line that starts with a bold label meaning "Next" (in ${L}): 2–3 READY-TO-USE short GERMAN sentences or phrases the student could write next, fitting the topic and a good written style (e.g. a Redemittel + clause, a linking sentence) — give WHOLE usable phrases/sentences, not single words, each with a tiny reason in ${L}.
Be concrete, clear and encouraging; ALWAYS quote the student's real words so it is obvious what you mean. Keep it compact (no long paragraphs).`;
      user = 'Mein Text bis jetzt — gib kurzes, KONKRETES Live-Feedback in hoher Qualität: echte Fehler «falsch → richtig», 1–2 Stil-Verbesserungen «schwächer → besser» und 2–3 fertige deutsche Satz-/Phrasenvorschläge zum Weiterschreiben, aber schreib den Text NICHT fertig:\n\n' + (b.text || b.prompt || '');
      maxTok = 480;
    } else if (b.task === 'letter' || b.task === 'letterlive') {
      // Letter/e-mail writing trainer. ctx carries the exam task so the AI can
      // check register (Sie/du), the German letter format AND tick off the
      // required content points (Inhaltspunkte) live.
      const c = b.ctx || {};
      const formell = c.kind === 'formell';
      const reg = formell
        ? `Das ist ein FORMELLER Brief / eine formelle E-Mail (an Institution, Firma, Amt, Redaktion). REGISTER-REGELN: Höflichkeitsform "Sie/Ihnen/Ihr/Ihre" und sie wird GROSSGESCHRIEBEN; passende Anrede ("Sehr geehrte Damen und Herren," oder "Sehr geehrte/r Frau/Herr …,"); Schlussformel "Mit freundlichen Grüßen"; sachlicher, höflicher Ton; KEINE Umgangssprache, keine Smileys. Nach der Anrede mit Komma geht es klein weiter.`
        : `Das ist ein INFORMELLER Brief / eine informelle E-Mail (an Freund/in, Familie). REGISTER-REGELN: persönliche Anrede mit "du/dein/dich/dir" (klein); Anrede "Liebe/r …,"; Schlussformel z. B. "Liebe Grüße", "Viele Grüße", "Bis bald"; freundlicher, persönlicher Ton. Nach der Anrede mit Komma geht es klein weiter.`;
      const pts = (c.points || []).map((p, i) => `${i + 1}. ${p}`).join('\n') || '(keine angegeben)';
      const ctxStr = `\n\nAUFGABE DES LERNERS (Niveau ${c.level || ''}):\n${reg}\nThema: ${c.title || ''} — ${c.prompt || ''}\nPFLICHT-INHALTSPUNKTE (jeder MUSS inhaltlich vorkommen):\n${pts}\n`;
      const doneRule = `\n\nGanz am ENDE, in der ALLERLETZTEN Zeile, gib NUR einen Marker mit den Nummern der bereits inhaltlich erfüllten Pflicht-Inhaltspunkte aus, exakt im Format: [[DONE: 1,3]] (noch keiner erfüllt → [[DONE: ]]). Schreibe NICHTS nach diesem Marker.`;
      // The single most important rule for letters: the learner reads the help in
      // THEIR language. Force the whole answer — verdict, explanations AND every
      // label/heading — into ${L}; only the German letter text, single German
      // example words and the German grammar terms stay German.
      const SPRACHE = `\n\nWICHTIGSTE REGEL — SPRACHE: Schreibe deine GANZE Antwort auf ${L} (die Sprache des Lerners): das Verdikt, ALLE Erklärungen, Hinweise UND alle Abschnitts-Labels/Überschriften. Übersetze auch Label-Wörter wie „Noch offen", „Weiter", „Korrigierter Brief", „Inhaltspunkte", „Form & Register", „Sprache", „Tipp" in ${L}. NUR diese drei Dinge bleiben auf Deutsch: (1) der korrigierte deutsche Brieftext selbst, (2) einzelne deutsche Beispielwörter, (3) die deutschen Grammatik-Fachbegriffe (Nominativ, Akkusativ, Dativ, Genitiv, Konjunktiv II, Perfekt, Präteritum …). Antworte NIEMALS auf Deutsch, außer ${L} ist selbst Deutsch.`;
      if (b.task === 'letterlive') {
        task = `${ctxStr}${SPRACHE}
TASK: You are a LIVE, HIGH-QUALITY writing coach for this GERMAN LETTER. The student is writing and just paused. Read the WHOLE letter so far together with the task above, then help them CONCRETELY — remember the SPRACHE rule above: write everything in ${L}. Do NOT rewrite the whole letter, but DO give rich, usable suggestions.
- Line 1 — verdict: "✅" if it is on track, or "✏️" if there is something to fix; then ONE short, CLEAR note in ${L}. Be ACCURATE about register: only warn about Sie/du if it is actually wrong for THIS letter (do not warn when it is already correct); check Anrede/Gruß and apply the KASUS-CHECK strictly.
- A line that begins with a bold label meaning "Fix" (translated into ${L}): quote the student's OWN wrong words and show the correct German as «falsch → richtig» — take only 1–3 mistakes that are REALLY in the text (never invent mistakes), each with a 2–5 word reason in ${L} that names the rule.
- A line that begins with a bold label meaning "Better" (translated into ${L}): 1–2 concrete IMPROVEMENTS that make the letter sound better for a ${formell ? 'formellen' : 'informellen'} Brief — show «schwächer → besser» with more polite, precise and idiomatic German that fits the register and good letter style (a stronger Redemittel/Floskel, e.g. for a formal letter «Ich würde mich sehr freuen, wenn …», «Über eine positive Rückmeldung würde ich mich freuen»), each with a short reason in ${L}. Improve only their OWN content.
- A line that begins with a bold label meaning "Still missing" (translated into ${L}): names which PFLICHT-INHALTSPUNKTE are NOT yet covered (by number + keyword), or says (in ${L}) that all content points are done 🎉.
- A line that begins with a bold label meaning "Next" (translated into ${L}): 2–3 READY-TO-USE short GERMAN sentences/phrases that fit THIS letter and its register and could come next (ideally a sentence that covers an open Inhaltspunkt) — give WHOLE usable sentences/phrases, not single words, each with a tiny reason in ${L}.
Be concrete, clear and kind; ALWAYS quote the student's real words so it is obvious what you mean.${doneRule}`;
        user = 'Mein Brief bis jetzt — gib kurzes, KONKRETES Live-Feedback in hoher Qualität: echte Fehler «falsch → richtig», 1–2 Stil-Verbesserungen «schwächer → besser» passend zum Register und 2–3 fertige deutsche Satzvorschläge (am besten für offene Inhaltspunkte), prüfe Register und Inhaltspunkte, aber schreib den Brief NICHT fertig:\n\n' + (b.text || '');
        maxTok = 580;
      } else {
        task = `${ctxStr}${SPRACHE}
TASK: Evaluate and correct this GERMAN LETTER like a VWU/ÖSD examiner. Reply in Markdown. Follow the SPRACHE rule above: the section headings and all explanations go in ${L}; the corrected letter text and German examples stay German. Use EXACTLY these five sections, but TRANSLATE each heading into ${L} (the German originals are only to tell you what each section is):
1) heading = "Korrigierter Brief" (in ${L}) — the full corrected letter, in GERMAN, with a correct Anrede and Schlussformel for THIS register.
2) heading = "Inhaltspunkte" (in ${L}) — list every required point with ✅ (inhaltlich erfüllt) or ❌ (fehlt/zu knapp) + a 3–6 word note in ${L}.
3) heading = "Form & Register" (in ${L}) — one short line: are Anrede and Gruß correct, and is the Sie/du form consistent and right for a ${formell ? 'formellen' : 'informellen'} Brief?
4) heading = "Sprache" (in ${L}) — a short bullet list of the main language errors as «falsch → richtig» + a named German rule term + the reason in ${L}.
5) heading = "Tipp" (in ${L}) — one short, motivating improvement tip in ${L}.${doneRule}`;
        user = 'Bewerte und korrigiere diesen Brief; prüfe Register, Form und ALLE Inhaltspunkte:\n\n' + (b.text || '');
        maxTok = 950;
      }
    } else {
      task = `

TASK: Help the student build or correct a German sentence. Show the correct German sentence, then explain the word order and any case/verb issues simply.`;
      user = b.prompt || b.text || '';
    }

    const system = TUTOR_BASE + task + RULE;

    // Try the primary model, then transparently fall back to the 8B model.
    const models = [b.model || MODEL];
    if (models.indexOf(FALLBACK) === -1) models.push(FALLBACK);
    let reply = '', lastErr;
    for (let i = 0; i < models.length; i++) {
      try {
        const out = await env.AI.run(models[i], {
          messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
          max_tokens: maxTok,
          temperature: 0.3,
        });
        reply = (out && (out.response || (out.result && out.result.response))) || '';
        if (reply) break;
      } catch (e) { lastErr = e; }
    }
    if (!reply) return json({ error: String((lastErr && lastErr.message) || lastErr || 'no reply') }, 500);
    return json({ reply });
  },
};
