# Firebase backend — integration notes

Adds **online presence** + **TOP leaderboards** to the Deutsch app via Firebase
**Realtime Database** + **anonymous auth**. Everything is client-side (free Spark
plan, no Cloud Functions). Project: `deutsch-cd8a6`.

## Files
- `config.js` — public web config (`window.FIREBASE_CONFIG`). Loaded first.
- `backend.js` — lazy-loads the Firebase compat SDK and exposes `window.DeutschBackend`.
- `../database.rules.json` — security rules (paste into RTDB → Rules).
- Both scripts are already included in `../react-app.html` `<head>`.

## Console checklist (do once)
1. **Realtime Database** → *Datenbank erstellen* → region **europe-west1** → Testmodus.
   Then copy the shown URL into `config.js` → `databaseURL` (verify the region suffix).
2. **Authentication** → *Sign-in method* → enable **Anonym**.
3. **Authentication → Settings → Authorized domains** → add `gadzera.github.io`.
4. **Realtime Database → Rules** → paste `database.rules.json` → *Veröffentlichen*.

## window.DeutschBackend API
```js
await DeutschBackend.ready;                 // resolves to uid once signed in
DeutschBackend.isEnabled                    // false if config is still placeholder
DeutschBackend.saveProfile({ name, lang });
DeutschBackend.saveStats({ xp, level, streak, dailyDone });
const off  = DeutschBackend.onLeaderboard(rows => {/* [{uid,name,xp,...}] desc */});
const off2 = DeutschBackend.onOnline(({count, users}) => {/* live online players */});
```

## Wiring into the React bundle (patches)
1. After successful PIN registration/login, call
   `DeutschBackend.ready.then(() => DeutschBackend.saveProfile({name, lang}))`.
2. In `App` `onDone`/stats update, also call `DeutschBackend.saveStats({xp, level, streak})`.
3. Replace the hardcoded `LEAGUE` array in `bb5d261b` (LeagueScreen) with
   `onLeaderboard`; show `onOnline().count` as a live "X online" badge.
4. Repack: `node tools/repack.js repo/react-app.html patches` → commit.
