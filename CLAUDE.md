# CLAUDE.md — Deutsch Lernspiel Pro

## Project Overview

**Deutsch Lernspiel Pro** is an interactive web application for learning German from A1 to C1 levels. It features 2,248+ exercises across 6 quiz categories, PIN-based authentication, adaptive learning, and a subliminal "25th Frame" learning mode. The UI is entirely in German; translations are provided in 5 helper languages (Russian, English, Turkish, Arabic, Farsi).

- **Live demo:** https://gadzera.github.io/Deutsch-Lernspiel/
- **Version:** 2.1.0
- **Developer:** Aleksandr Gadzera

## Tech Stack

- **Pure vanilla stack** — HTML5, CSS3, JavaScript (ES6+). No frameworks, no npm, no bundler.
- **Data storage:** `localStorage` (client-side only, no backend/database).
- **Deployment:** GitHub Pages via GitHub Actions (`deploy-pages.yml` on push to `main`).

## Repository Structure

```
.
├── app.html                  # Main SPA entry point (loads all scripts)
├── index.html                # Redirect page → app.html
├── css/
│   └── style.css             # All styles (~1,825 lines), CSS variables, dark mode, animations
├── data/                     # Exercise data files (global JS arrays/objects)
│   ├── nouns.js              # 545 nouns with articles (der/die/das)
│   ├── verbs.js              # 833 verbs & adjectives
│   ├── partizip2.js          # 200 past participle patterns
│   ├── reflexive.js          # 90 reflexive verbs with full conjugation tables
│   ├── sentences.js          # 200 sentence construction exercises
│   ├── prepositions.js       # 120 preposition exercises
│   ├── pronouns.js           # 100 pronoun exercises
│   ├── rules.js              # Grammar rule explanations and tables
│   └── vwu.js               # VWU test preparation (4 levels: AV, EV, GF, EPD)
├── js/
│   └── app.js                # All application logic (~1,460 lines)
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # GitHub Pages CI/CD
└── README.md                 # Project README (in Russian)
```

## Architecture

This is a **single-page application (SPA)** built with vanilla JS. All rendering is done via `innerHTML` manipulation on a single `<div id="app">`. There is no router — page state is managed through a global `APP` object.

### Key Globals

- **`CONFIG`** — `{ version, prefix }`. The `prefix` (`"dlp2_"`) is prepended to all localStorage keys.
- **`APP`** — Mutable application state: `user`, `lang`, `darkMode`, `quiz`, `vwu`, etc.
- **`UI`** — All German UI strings (44 constants).
- **`COUNTRIES`** — Array of `{ code, flag, name }` objects (45 countries).
- **Data arrays** — `NOUNS`, `VERBS`, `PARTIZIP2`, `REFLEXIVE`, `SENTENCES`, `PREPOSITIONS`, `PRONOUNS`, `RULES`, `VWU_LEVELS` — loaded from `data/*.js` as global variables.

### Core Patterns

- **`$(id)`** — Shorthand for `document.getElementById(id)`.
- **`ld(key)`** / **`sv(key, val)`** — Read/write to localStorage with the `dlp2_` prefix and JSON serialization.
- **`tr(item)`** — Returns the translation string for an exercise item in the user's selected helper language.
- **`esc(str)`** — HTML-escapes a string for safe innerHTML insertion.
- **`hash(str)`** — Simple string hash used for user IDs and PINs.
- **`uid()`** — Generates unique IDs.
- **`shuffle(arr)`** — Fisher-Yates array shuffle.
- **`toast(msg)`** — Shows a toast notification.

### Function Groups

| Area | Key Functions |
|---|---|
| Auth | `doLogin()`, `doReg()`, `doForgot()`, `pinSubmit()`, `doLogout()` |
| UI Navigation | `showMenu()`, `showAuth()`, `toggleCat()`, `showStats()`, `showRule()` |
| Quiz Engine | `startQuiz()`, `prepareMCQ()`, `showBuilder()`, `checkBuilder()`, `showRes()` |
| Corrections | `startCorrections()`, `showCorrection()`, `nextCorrection()` |
| VWU Tests | `startVWU()`, `showVWUSection()`, `showVWUGram()`, `submitVWUWrite()`, `showVWUResults()` |
| Progress | `getKnownIds()`, `markKnown()`, `getProgressPct()`, `getStats()`, `getDetailedStats()` |

### Event Handling

Event handlers are attached via **inline `onclick` attributes** in HTML strings built by JavaScript. This is a consistent pattern throughout the codebase — do not refactor to `addEventListener` unless explicitly asked.

## CSS / Styling

- **CSS variables** define the entire theme in `:root` (and overridden in `body.dark` for dark mode).
- **Color palette:** Primary `#6C63FF`, Accent `#FF6584`, Success `#00C853`, Danger `#FF5252`, Warning `#FFB300`.
- **Mobile-first** with iOS safe area support (`env(safe-area-inset-bottom)`).
- **Animations:** `fadeIn`, `slideUp`, `scaleIn`, `pop`, `shake`, `pulse` — all CSS `@keyframes`.
- **Button variants:** `.btn`, `.btn-outline`, `.btn-accent`, `.btn-ghost` — minimum touch target 44px.

## Data Format

### Exercise Items

Each exercise is a JS object with an `id` field and language-specific translations:

```javascript
{ id: "n1", word: "Haus", article: "das", ru: "дом", en: "house", tr: "ev", ar: "بيت", fa: "خانه" }
```

Fields vary by category (e.g., `partizip`, `aux`, `prefix` for Partizip II; `forms` object for reflexive verbs).

### User Data (localStorage)

```javascript
// User record:  dlp2_usr_[hash]
{ id, name, email, country, lang, pin, createdAt }

// Current session: dlp2_cur
"user_id_string"

// Progress: dlp2_prog_[userId]
["exercise_id_1", "exercise_id_2", ...]

// Statistics: dlp2_st_[userId]
[{ d: "2025-01-15", s: 8, tot: 10, pct: 80, ts: 45, m: "mcq" }, ...]
```

## Development Workflow

### Running Locally

No build step. Open `app.html` in a browser or use any static file server:

```bash
python3 -m http.server 8000
# Then open http://localhost:8000/app.html
```

### Deployment

Push to `main` triggers automatic GitHub Pages deployment via `.github/workflows/deploy-pages.yml`.

### Git Conventions

- **Commit prefix style:** `feat:`, `fix:`, `ci:` (conventional commits).
- **Branch naming:** `claude/<description>` for AI-authored branches.
- **Main branch:** `main` — production, auto-deploys to GitHub Pages.

## Code Conventions

- **camelCase** for all function and variable names.
- **UPPER_CASE** for module-level constants and data arrays (`CONFIG`, `UI`, `NOUNS`, `VERBS`, etc.).
- **No semicolons** are inconsistently used — the codebase uses semicolons at end of statements.
- **Single global APP object** for all mutable state — do not introduce additional global state.
- **HTML strings built in JS** — the app constructs HTML via template literals and sets `innerHTML`. Keep this pattern.
- **German UI text** — all user-facing strings go through the `UI` constant or are hardcoded in German. Never add English UI text.
- **Data file IDs** — exercise IDs follow category-specific prefixes (`n` for nouns, `v` for verbs, `p2_` for Partizip II, `ref_` for reflexive, `s_` for sentences, `prep_` for prepositions, `pron_` for pronouns).

## Important Constraints

1. **No build tools** — Do not introduce npm, webpack, vite, or any build system without explicit permission. The project intentionally uses zero dependencies.
2. **No frameworks** — Do not introduce React, Vue, or any UI framework. The vanilla JS approach is deliberate.
3. **No backend** — All data is client-side. Do not add server-side code or API calls.
4. **localStorage only** — Do not introduce IndexedDB, cookies, or other storage mechanisms.
5. **German UI** — The interface language is always German. Helper languages are only for exercise translations.
6. **Mobile-first** — All UI changes must work well on mobile devices. Minimum touch target: 44px.
7. **Inline event handlers** — The codebase uses `onclick="fn()"` in HTML strings. Maintain this pattern.

## Testing

There is no automated test suite. Changes should be verified manually in a browser:

1. Open `app.html` in a browser (or via a local HTTP server for full functionality).
2. Test the registration and login flow.
3. Verify quiz functionality across categories.
4. Check both light and dark modes.
5. Test on mobile viewport sizes.

## Quiz Categories Reference

| Category | Data Source | Count | Exercise Types |
|---|---|---|---|
| Wortschatz (Vocabulary) | `nouns.js`, `verbs.js` | 1,378 | Article selection, DE↔Translation MCQ |
| Partizip II | `partizip2.js` | 200 | Past participle patterns, auxiliary selection |
| Reflexive Verben | `reflexive.js` | 250 | Reflexive verb conjugation (all persons) |
| Satzbau (Sentence Construction) | `sentences.js` | 200 | Word-order drag & drop, TEKAMOLO rules |
| Prepositionen | `prepositions.js` | 120 | Accusative/dative/genitive/Wechselpräpositionen |
| Pronomen | `pronouns.js` | 100 | Personal, possessive, reflexive pronouns |

## Common Tasks

### Adding New Vocabulary

Add entries to the appropriate `data/*.js` file following the existing object format. Ensure all 5 translation languages are included. Use the next sequential ID for the category.

### Adding a New Quiz Category

1. Create a new `data/[category].js` file with the exercise data array.
2. Add a `<script>` tag in `app.html` before `app.js`.
3. Add category rendering in `showMenu()` and quiz logic in `startQuiz()` in `app.js`.
4. Add corresponding CSS styles in `style.css`.

### Modifying Styles

All styles are in `css/style.css`. The theme is controlled by CSS variables in `:root`. Dark mode overrides are in `body.dark { ... }`. Always update both light and dark mode when changing colors.
