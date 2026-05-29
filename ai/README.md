# AI assistant (Cloudflare Worker + Workers AI) — free, for all site visitors

The app (`data/ai.js`) calls this Worker over HTTPS. The Worker runs an LLM on
Cloudflare's free Workers AI and returns text. No API keys live in the website.

## What it does
- **Text correction** (Textproduktion → „✨ KI-Korrektur")
- **Explain** a grammar point / answer (quiz → „Erklären")
- **Sentence help** (build/correct German sentences)

## Deploy — option A: Dashboard (no install)
1. Create a free account at https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Create Worker**. Name it e.g. `deutsch-ai`. Deploy the default, then **Edit code**.
2. Replace the code with the contents of `worker.js` (this folder). Click **Deploy**.
3. Add the AI binding: Worker → **Settings** → **Bindings** → **Add** → **Workers AI** → Variable name **`AI`** → Save & Deploy.
4. Copy your Worker URL: `https://deutsch-ai.<your-subdomain>.workers.dev`.
5. In the app: **Profil → Einstellungen → KI-Assistent** → paste the URL → Save.
   (Or hardcode it in `data/ai-config.js`: `window.AI_WORKER_URL = "https://…workers.dev";` and commit.)
6. Open the URL in a browser → it should say `Deutsch AI Worker OK`.

## Deploy — option B: Wrangler CLI
```bash
npm i -g wrangler
cd ai
wrangler login
wrangler deploy        # uses wrangler.toml (already has the [ai] binding)
```
Then do steps 4–6 above.

## Notes
- **Free limits:** Workers AI has a daily free allowance (Neurons). Fine for a class-sized app. Heavy use may need a paid plan.
- **Model:** default `@cf/meta/llama-3.1-8b-instruct`. To change, edit `MODEL` in `worker.js` (see https://developers.cloudflare.com/workers-ai/models/ for IDs).
- **CORS** is open (`*`) so GitHub Pages can call it. To lock it to your site later, replace `*` with `https://gadzera.github.io` in `worker.js`.
- The app hides all AI buttons until a Worker URL is set, so the site never breaks without it.
