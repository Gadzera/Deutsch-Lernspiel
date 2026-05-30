/* Deutsch-Lernspiel — minimal Firebase backend.
 *
 * Exposes a tiny window.DeutschBackend API for:
 *   - anonymous sign-in (each device gets a stable uid)
 *   - online presence (native Realtime Database onDisconnect)
 *   - a live TOP leaderboard (ordered by xp)
 *
 * No build step: this lazy-loads the Firebase "compat" SDK from the gstatic CDN
 * only when a real config is present, then wires everything up. If the config is
 * still the placeholder it degrades to a harmless no-op so the page never breaks.
 *
 * IMPORTANT — write ordering: the DB rules require every users/{uid} node to have
 * a `name`. So the FIRST write must include the name. We therefore defer presence
 * and stats writes until saveProfile() (which carries the name) has run once.
 *
 * Usage from the React bundle:
 *   await DeutschBackend.ready;                          // signed in -> uid
 *   DeutschBackend.saveProfile({ name, lang });          // do this first
 *   DeutschBackend.saveStats({ xp, level, streak });
 *   const off  = DeutschBackend.onLeaderboard(rows => ...);   // [{uid,name,xp,...}] desc
 *   const off2 = DeutschBackend.onOnline(({count, users}) => ...);
 *   DeutschBackend.setOffline();                         // on logout
 */
(function () {
  'use strict';

  var SDK_VERSION = '10.14.1';
  var CDN = 'https://www.gstatic.com/firebasejs/' + SDK_VERSION + '/';
  var cfg = window.FIREBASE_CONFIG || {};

  // ---- guard: refuse to run with a missing/placeholder config -------------
  var looksReal = cfg.apiKey && cfg.databaseURL &&
                  cfg.apiKey.indexOf('YOUR_') !== 0 &&
                  cfg.databaseURL.indexOf('YOUR_') !== 0;

  var _resolveReady, _rejectReady;
  var readyPromise = new Promise(function (res, rej) { _resolveReady = res; _rejectReady = rej; });

  // Internal state once initialised.
  var db = null, uid = null;
  var usersCache = {};            // uid -> record, kept fresh by a single listener
  var leaderboardCbs = [];
  var onlineCbs = [];
  var listening = false;
  var profileSaved = false;       // becomes true after the first name-bearing write
  var presenceWired = false;
  var pendingStats = null;        // stats requested before the profile existed
  var lastChatAt = 0, lastChatText = '';  // client-side anti-flood for the chat

  // ---- profanity filter ----------------------------------------------------
  // Masks common swear words (RU mat + EN/DE/TR) in the shared chat and in
  // display names. Word-based with light de-obfuscation (repeats, separators,
  // a bit of leet). Not perfect — just extend BAD with more stems as needed.
  var BAD = ('хуй хуя хуё хуе хуи хуев хуёв хуйн пизд пезд ебал ебан ебат ебач ебля ебло ебну ебуч ёбан ёбну ёбыр еблан ебанат ебанут '
    + 'выеб въеб заеб наеб объеб отъеб подъеб разъеб уеб съеб доеб остоеб долбоеб долбоёб далбаёб блят бляд '
    + 'сука суки суке суку сукой сучк сучар мудак мудач мудил мудо пидор пидар педик педрил пидорас пидарас гандон гондон гнида '
    + 'залуп мандавош дроч херн херов херня херас херач говн гавн дерьм срать насра обосра посра зассан ссань мраз падла падло '
    + 'шлюх шалав блудниц проститутк уёбищ уебищ ублюд выблядок дебил жоп задниц чмош чмыр '
    + 'бля '
    + 'suka cyka suchk blyat blyad blya pizd pizdec huy huyl huya nahuy pohuy ebat ebal eban ebuch mudak pidor pidoras zalupa dolboeb gandon '
    + 'fuck fuk fck shit bitch bastard asshole arsehole cunt dick pussy motherf bullshit slut whore faggot nigger nigga wanker twat cocksuck dumbass dipshit '
    + 'scheiss scheiß arschloch arsch ficken fick fotze wichser hurensohn schlampe miststück votze nutte hure '
    + 'orospu piç siktir sikis sikim yarrak pezeveng amcık amına gavat amk').split(/\s+/);

  function _norm(w) {
    return String(w).toLowerCase()
      .replace(/[@4]/g, 'a').replace(/\$/g, 's').replace(/0/g, 'o').replace(/3/g, 'e').replace(/1/g, 'i').replace(/5/g, 's').replace(/7/g, 't')
      .replace(/[^a-zа-яё]/g, '')
      .replace(/(.)\1{2,}/g, '$1');
  }
  function _isBad(w) {
    var t = _norm(w);
    if (t.length < 3) return false;
    for (var i = 0; i < BAD.length; i++) { if (BAD[i] && t.indexOf(BAD[i]) !== -1) return true; }
    return false;
  }
  function clean(text) {
    if (text == null) return text;
    var out = String(text).replace(/[0-9A-Za-zА-Яа-яЁё@$]+/g, function (w) {
      if (!_isBad(w)) return w;
      var n = Math.max(1, Math.min(w.length - 1, 7));
      return w.charAt(0) + new Array(n + 1).join('*');
    });
    // Second pass: catch spaced/punctuated obfuscation like "б л я" or "п.и.д.о.р"
    // — a run of single letters split by separators whose compacted form is bad.
    out = out.replace(/([0-9A-Za-zА-Яа-яЁё@$][\s._\-*]+){2,}[0-9A-Za-zА-Яа-яЁё@$]/g, function (seg) {
      return _isBad(seg.replace(/[\s._\-*]+/g, '')) ? seg.replace(/[0-9A-Za-zА-Яа-яЁё@$]/g, '*') : seg;
    });
    return out;
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src; s.async = true;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('failed to load ' + src)); };
      document.head.appendChild(s);
    });
  }

  function fanout() {
    var rows = Object.keys(usersCache).map(function (k) {
      var r = usersCache[k] || {};
      return {
        uid: k, name: clean(r.name || 'Anonym'), lang: r.lang || null,
        xp: r.xp || 0, level: r.level || 0, streak: r.streak || 0,
        online: !!r.online, lastActive: r.lastActive || 0
      };
    });
    var board = rows.slice().sort(function (a, b) { return b.xp - a.xp; });
    var online = rows.filter(function (r) { return r.online; })
                     .sort(function (a, b) { return b.xp - a.xp; });
    leaderboardCbs.forEach(function (cb) { try { cb(board); } catch (e) {} });
    onlineCbs.forEach(function (cb) { try { cb({ count: online.length, users: online }); } catch (e) {} });
  }

  // One listener on /users feeds both the leaderboard and the online list.
  // Fine for class-sized usage (tens–hundreds of users). If it grows large,
  // switch to an indexed `orderByChild('xp').limitToLast(N)` query instead.
  function startListening() {
    if (listening || !db) return;
    listening = true;
    db.ref('users').on('value', function (snap) {
      usersCache = snap.val() || {};
      fanout();
    });
  }

  // Presence relies on the node already having a name (rules), so it is only
  // wired after saveProfile() has run once.
  function wirePresence() {
    if (presenceWired || !db || !uid) return;
    presenceWired = true;
    var firebase = window.firebase;
    var TS = firebase.database.ServerValue.TIMESTAMP;
    var meRef = db.ref('users/' + uid);
    db.ref('.info/connected').on('value', function (snap) {
      if (snap.val() !== true) return;
      meRef.child('online').onDisconnect().set(false);
      meRef.child('lastActive').onDisconnect().set(TS);
      meRef.update({ online: true, lastActive: TS });
    });
  }

  function init() {
    return loadScript(CDN + 'firebase-app-compat.js')
      .then(function () { return Promise.all([
        loadScript(CDN + 'firebase-auth-compat.js'),
        loadScript(CDN + 'firebase-database-compat.js')
      ]); })
      .then(function () {
        var firebase = window.firebase;
        firebase.initializeApp(cfg);
        db = firebase.database();
        return firebase.auth().signInAnonymously().then(function (cred) {
          uid = cred.user.uid;
          startListening();           // reads are allowed for any signed-in user
          return uid;
        });
      });
  }

  // ---- public API ---------------------------------------------------------
  var API = {
    isEnabled: !!looksReal,
    ready: readyPromise,
    get uid() { return uid; },

    // First meaningful write — carries the name the rules require.
    saveProfile: function (p) {
      if (!db || !uid) return Promise.resolve();
      var firebase = window.firebase;
      var TS = firebase.database.ServerValue.TIMESTAMP;
      var patch = { online: true, lastActive: TS };
      if (p && p.name != null) patch.name = String(p.name).slice(0, 40);
      if (p && p.lang != null) patch.lang = String(p.lang).slice(0, 8);
      return db.ref('users/' + uid).update(patch).then(function () {
        profileSaved = true;
        wirePresence();
        if (pendingStats) { var s = pendingStats; pendingStats = null; API.saveStats(s); }
      }).catch(function (e) { console.warn('[DeutschBackend] saveProfile failed', e); });
    },

    saveStats: function (s) {
      if (!db || !uid) return Promise.resolve();
      if (!profileSaved) { pendingStats = s; return Promise.resolve(); } // wait for name
      var patch = {};
      ['xp', 'level', 'streak', 'dailyDone'].forEach(function (k) {
        if (s && typeof s[k] === 'number') patch[k] = s[k];
      });
      if (!Object.keys(patch).length) return Promise.resolve();
      return db.ref('users/' + uid).update(patch)
        .catch(function (e) { console.warn('[DeutschBackend] saveStats failed', e); });
    },

    setOffline: function () {
      if (!db || !uid || !profileSaved) return Promise.resolve();
      var firebase = window.firebase;
      var TS = firebase.database.ServerValue.TIMESTAMP;
      return db.ref('users/' + uid).update({ online: false, lastActive: TS })
        .catch(function () {});
    },

    onLeaderboard: function (cb) {
      leaderboardCbs.push(cb);
      if (listening) fanout();
      return function () { leaderboardCbs = leaderboardCbs.filter(function (f) { return f !== cb; }); };
    },

    onOnline: function (cb) {
      onlineCbs.push(cb);
      if (listening) fanout();
      return function () { onlineCbs = onlineCbs.filter(function (f) { return f !== cb; }); };
    },

    // ---- shared chat (RTDB /chat) -----------------------------------------
    // Rejects with Error('flood'|'duplicate'|'empty'|'offline') so the UI can
    // show a hint and keep the text instead of silently dropping it.
    sendMessage: function (text, name) {
      if (!db || !uid) return Promise.reject(new Error('offline'));
      text = String(text == null ? '' : text).replace(/\s+/g, ' ').trim().slice(0, 280);
      if (!text) return Promise.reject(new Error('empty'));
      var now = Date.now();
      if (now - lastChatAt < 1500) return Promise.reject(new Error('flood'));       // too fast
      if (text === lastChatText) return Promise.reject(new Error('duplicate'));     // same as the last one
      lastChatAt = now; lastChatText = text;
      var firebase = window.firebase;
      var TS = firebase.database.ServerValue.TIMESTAMP;
      var nm = name || (usersCache[uid] && usersCache[uid].name) || 'Anonym';
      return db.ref('chat').push({ uid: uid, name: clean(String(nm).slice(0, 40)), text: clean(text), ts: TS })
        .catch(function (e) { console.warn('[DeutschBackend] sendMessage failed', e); throw e; });
    },

    // Author-only edit of your own message (DB rules enforce uid === auth.uid).
    editMessage: function (id, text) {
      if (!db || !uid || !id) return Promise.reject(new Error('offline'));
      text = String(text == null ? '' : text).replace(/\s+/g, ' ').trim().slice(0, 280);
      if (!text) return Promise.reject(new Error('empty'));
      var firebase = window.firebase;
      var TS = firebase.database.ServerValue.TIMESTAMP;
      var nm = (usersCache[uid] && usersCache[uid].name) || 'Anonym';
      return db.ref('chat/' + id).update({ uid: uid, name: clean(String(nm).slice(0, 40)), text: clean(text), edited: TS })
        .catch(function (e) { console.warn('[DeutschBackend] editMessage failed', e); throw e; });
    },

    // Author-only delete of your own message.
    deleteMessage: function (id) {
      if (!db || !uid || !id) return Promise.reject(new Error('offline'));
      return db.ref('chat/' + id).remove()
        .catch(function (e) { console.warn('[DeutschBackend] deleteMessage failed', e); throw e; });
    },

    onChat: function (cb) {
      if (!db) return function () {};
      var ref = db.ref('chat').orderByChild('ts').limitToLast(50);
      var handler = ref.on('value', function (snap) {
        var v = snap.val() || {};
        var msgs = Object.keys(v).map(function (k) {
          var m = v[k] || {};
          return { id: k, uid: m.uid, name: clean(m.name || 'Anonym'), text: clean(m.text || ''), ts: m.ts || 0, edited: m.edited || 0 };
        });
        msgs.sort(function (a, b) { return a.ts - b.ts; });
        try { cb(msgs); } catch (e) {}
      }, function () {});
      return function () { ref.off('value', handler); };
    }
  };

  if (!looksReal) {
    console.warn('[DeutschBackend] disabled — fill in window.FIREBASE_CONFIG (config.js). Running in no-op mode.');
    _resolveReady(null);
  } else {
    init().then(function (id) { _resolveReady(id); })
          .catch(function (err) {
            console.error('[DeutschBackend] init failed:', err);
            _rejectReady(err);
          });
  }

  window.DeutschBackend = API;
})();
