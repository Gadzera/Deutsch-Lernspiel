/* Deutsch-Lernspiel — AI assistant client.
 * Talks to the Cloudflare Worker (see ai/worker.js) over HTTPS.
 * The Worker URL comes from localStorage 'de_ai_url' (set in Settings) or the
 * window.AI_WORKER_URL constant (data/ai-config.js). If neither is set, the app
 * treats AI as unavailable and hides the AI buttons.
 *
 *   DeutschAI.available()                    -> bool (a URL is configured)
 *   DeutschAI.correctText(text, lang)        -> Promise<string> (markdown)
 *   DeutschAI.explain(question, answer, lang)-> Promise<string>
 *   DeutschAI.sentence(prompt, lang)         -> Promise<string>
 *   DeutschAI.coach(text, lang)              -> Promise<string> (writing hints, no full solution)
 *   DeutschAI.live(text, lang)               -> Promise<string> (tiny live as-you-type feedback)
 *   DeutschAI.letterCheck(text, lang, ctx)   -> Promise<{text, done}> (full letter evaluation)
 *   DeutschAI.letterLive(text, lang, ctx)    -> Promise<{text, done}> (live letter coach + covered-points)
 *   DeutschAI.setUrl(url) / DeutschAI.getUrl()
 *
 * ctx (letter tasks) = { level, kind:'formell'|'informell', title, prompt, points:[...], anrede, gruss }
 * The reply may end with a marker "[[DONE: 1,3]]" listing which required content
 * points are already covered; parseDone() strips it and returns the indices.
 */
(function () {
  'use strict';
  function getUrl() {
    var u = '';
    try { u = (localStorage.getItem('de_ai_url') || '').trim(); } catch (e) {}
    if (!u) u = (window.AI_WORKER_URL || '').trim();
    return u.replace(/\/+$/, '');
  }
  function available() { return !!getUrl(); }
  function call(payload) {
    var u = getUrl();
    if (!u) return Promise.reject(new Error('KI nicht konfiguriert'));
    return fetch(u, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(function (r) {
      if (!r.ok) return r.text().then(function (t) { throw new Error('KI ' + r.status + ': ' + t.slice(0, 140)); });
      return r.json();
    }).then(function (j) {
      if (j.error) throw new Error(j.error);
      return (j.reply || j.response || '').trim();
    });
  }
  // Letter tasks may end with "[[DONE: 1,3]]" — covered required-points (1-based).
  function parseDone(s) {
    var done = [];
    s = s || '';
    var m = s.match(/\[\[\s*DONE\s*:\s*([0-9,\s]*)\]\]/i);
    if (m) {
      done = m[1].split(',').map(function (x) { return parseInt(x, 10); }).filter(function (x) { return !isNaN(x); });
      s = s.replace(m[0], '').trim();
    }
    return { text: s, done: done };
  }
  window.DeutschAI = {
    available: available,
    getUrl: getUrl,
    setUrl: function (u) { try { localStorage.setItem('de_ai_url', (u || '').trim()); } catch (e) {} },
    correctText: function (text, lang) { return call({ task: 'correct', text: text, lang: lang }); },
    explain: function (question, answer, lang) { return call({ task: 'explain', question: question, answer: answer, lang: lang }); },
    sentence: function (prompt, lang) { return call({ task: 'sentence', prompt: prompt, lang: lang }); },
    coach: function (text, lang) { return call({ task: 'coach', text: text, lang: lang }); },
    live: function (text, lang) { return call({ task: 'live', text: text, lang: lang }); },
    letterCheck: function (text, lang, ctx) { return call({ task: 'letter', text: text, lang: lang, ctx: ctx }).then(parseDone); },
    letterLive: function (text, lang, ctx) { return call({ task: 'letterlive', text: text, lang: lang, ctx: ctx }).then(parseDone); },
  };
})();
