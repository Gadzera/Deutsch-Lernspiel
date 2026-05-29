// Deutsch-Lernspiel — Cloudflare Worker AI backend.
// Free tier (Workers AI). The static site (GitHub Pages) calls this over HTTPS.
// Deploy: see README.md. You MUST add a Workers AI binding named "AI".
//
// Endpoints (POST JSON):
//   { task:"correct", text, lang }            -> corrects a German text
//   { task:"explain", question, answer, lang } -> explains a grammar point
//   { task:"sentence", prompt, lang }          -> helps build/correct a sentence
// Response: { reply: "<markdown/text>" }  (or { error })

const MODEL = '@cf/meta/llama-3.1-8b-instruct';
const LANG = { ru: 'Russian', en: 'English', tr: 'Turkish', ar: 'Arabic', fa: 'Persian' };
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

    let system, user;
    if (b.task === 'correct') {
      system = `You are a precise German (Deutsch) writing tutor for a CEFR B1–C1 student. Correct the student's German text and keep their meaning. Reply in Markdown with exactly these sections: "## Korrigierter Text" (the corrected German text), "## Änderungen" (a short bullet list of the key fixes, each "falsch → richtig" with a 3–6 word reason in ${L}), "## Tipp" (one short improvement tip in ${L}). Be concise.`;
      user = 'Korrigiere diesen Text:\n\n' + (b.text || '');
    } else if (b.task === 'explain') {
      system = `You are a friendly German grammar tutor. Explain clearly and briefly in ${L}, with exactly one German example. Max 4 sentences.`;
      user = 'Erkläre für einen Deutschlerner: ' + (b.question || '') + (b.answer ? ` (richtige Antwort: ${b.answer})` : '');
    } else {
      system = `You are a friendly German tutor. Help the student build and correct German sentences. Explain word order simply (conjugated verb in position 2; TE-KA-MO-LO; subordinate clause verb at the end). Explain difficult points in ${L}. Be concise.`;
      user = b.prompt || b.text || '';
    }

    try {
      const out = await env.AI.run(b.model || MODEL, {
        messages: [{ role: 'system', content: system }, { role: 'user', content: user }],
        max_tokens: 768,
      });
      const reply = (out && (out.response || (out.result && out.result.response))) || '';
      return json({ reply });
    } catch (e) {
      return json({ error: String((e && e.message) || e) }, 500);
    }
  },
};
