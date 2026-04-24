// ============== DEUTSCH LERNSPIEL PRO v2.0 ==============

const CONFIG = { version: "2.1.0", prefix: "dlp2_" };

// ============== UI is always in German ==============
const UI = {
    appName: "Deutsch Lernspiel",
    subtitle: "Lerne Deutsch spielerisch!",
    login: "Anmelden",
    register: "Registrieren",
    email: "E-Mail",
    emailPh: "deine@email.com",
    pin: "PIN-Code",
    pinPh: "4-stelliger PIN",
    pinConfirm: "PIN bestätigen",
    name: "Name",
    namePh: "Dein Name",
    country: "Land",
    countrySel: "Land wählen",
    loginBtn: "Einloggen",
    registerBtn: "Registrieren",
    forgot: "PIN vergessen?",
    logout: "Abmelden",
    helpLang: "Hilfssprache",
    helpLangDesc: "Übersetzungen werden in dieser Sprache angezeigt",
    settings: "Einstellungen",
    mode: "Modus",
    modeArticle: "Artikel (der/die/das)",
    modeDe: "Deutsch → Übersetzung",
    modeL1: "Übersetzung → Deutsch",
    filter: "Wörter",
    filterAll: "Alle Wörter",
    filterNouns: "Substantive",
    filterVerbs: "Verben & Adjektive",
    qCount: "Fragen",
    startQuiz: "Quiz starten",
    leaderboard: "Bestenliste",
    achievements: "Erfolge",
    chooseArt: "Wähle den Artikel",
    whatMeans: "Was bedeutet",
    howGerman: "Wie heißt auf Deutsch",
    of: "von",
    results: "Ergebnisse",
    time: "Zeit",
    sec: "Sek",
    correctAns: "Richtig",
    wrongAns: "Falsch",
    again: "Nochmal",
    menu: "Menü",
    perfect: "Perfekt!",
    excellent: "Ausgezeichnet!",
    good: "Gut!",
    notBad: "Nicht schlecht!",
    studyMore: "Weiter lernen!",
    games: "Spiele",
    avg: "Durchschnitt",
    words: "Wörter",
    comingSoon: "Kommt bald!",
    fillAll: "Bitte alle Felder ausfüllen!",
    badEmail: "Ungültige E-Mail!",
    pinShort: "PIN muss 4 Ziffern haben!",
    pinNoMatch: "PINs stimmen nicht überein!",
    nameShort: "Name mindestens 2 Zeichen!",
    userExists: "Diese E-Mail ist bereits registriert!",
    noUser: "Benutzer nicht gefunden!",
    badPin: "Falscher PIN!",
    recoverySent: "Anweisungen an E-Mail gesendet",
    logoutQ: "Möchtest du dich abmelden?",
    back: "Zurück",
    resetPin: "PIN zurücksetzen",
    resetPinDesc: "Gib deine E-Mail und deinen neuen PIN ein",
    newPin: "Neuer PIN",
    resetBtn: "Zurücksetzen",
    resetSuccess: "PIN wurde zurückgesetzt! Du kannst dich jetzt anmelden.",
    backToLogin: "Zurück zur Anmeldung",
    regSuccess: "Registrierung erfolgreich!",
    accountExists: "Konto existiert bereits. Bitte melde dich an oder setze deinen PIN zurück.",
    skipKnown: "Gelernte überspringen",
    skipKnownDesc: "Richtig beantwortete Wörter nicht wiederholen",
    allLearned: "Alles gelernt! Fortschritt zurücksetzen?",
    progress: "Fortschritt",
    reset: "Zurücksetzen",
    buildSentence: "Bilde den Satz",
    checkBtn: "Prüfen",
    tapWords: "Tippe auf Wörter...",
    hintBtn: "Tipp",
    nextBtn: "Weiter",
    tryAgain: "Nochmal versuchen",
    registered: "Registriert",
    online: "Online"
};

// ============== COUNTRIES (expanded, international names) ==============
const COUNTRIES = [
    {f:"🇩🇪",n:"Germany"},{f:"🇦🇹",n:"Austria"},{f:"🇨🇭",n:"Switzerland"},
    {f:"🇷🇺",n:"Russia"},{f:"🇧🇾",n:"Belarus"},
    {f:"🇰🇿",n:"Kazakhstan"},{f:"🇺🇿",n:"Uzbekistan"},{f:"🇹🇯",n:"Tajikistan"},
    {f:"🇰🇬",n:"Kyrgyzstan"},{f:"🇹🇲",n:"Turkmenistan"},{f:"🇦🇿",n:"Azerbaijan"},
    {f:"🇬🇪",n:"Georgia"},{f:"🇦🇲",n:"Armenia"},{f:"🇲🇩",n:"Moldova"},
    {f:"🇺🇸",n:"USA"},{f:"🇬🇧",n:"United Kingdom"},{f:"🇨🇦",n:"Canada"},
    {f:"🇦🇺",n:"Australia"},{f:"🇳🇿",n:"New Zealand"},{f:"🇮🇪",n:"Ireland"},
    {f:"🇹🇷",n:"Türkiye"},{f:"🇮🇷",n:"Iran"},{f:"🇮🇶",n:"Iraq"},
    {f:"🇸🇦",n:"Saudi Arabia"},{f:"🇦🇪",n:"UAE"},{f:"🇸🇾",n:"Syria"},
    {f:"🇦🇫",n:"Afghanistan"},{f:"🇵🇰",n:"Pakistan"},{f:"🇮🇳",n:"India"},
    {f:"🇧🇩",n:"Bangladesh"},{f:"🇱🇰",n:"Sri Lanka"},
    {f:"🇨🇳",n:"China"},{f:"🇯🇵",n:"Japan"},{f:"🇰🇷",n:"South Korea"},
    {f:"🇻🇳",n:"Vietnam"},{f:"🇹🇭",n:"Thailand"},{f:"🇮🇩",n:"Indonesia"},
    {f:"🇲🇾",n:"Malaysia"},{f:"🇵🇭",n:"Philippines"},{f:"🇸🇬",n:"Singapore"},
    {f:"🇫🇷",n:"France"},{f:"🇮🇹",n:"Italy"},{f:"🇪🇸",n:"Spain"},
    {f:"🇵🇹",n:"Portugal"},{f:"🇳🇱",n:"Netherlands"},{f:"🇧🇪",n:"Belgium"},
    {f:"🇱🇺",n:"Luxembourg"},
    {f:"🇵🇱",n:"Poland"},{f:"🇨🇿",n:"Czechia"},{f:"🇸🇰",n:"Slovakia"},
    {f:"🇭🇺",n:"Hungary"},{f:"🇷🇴",n:"Romania"},{f:"🇧🇬",n:"Bulgaria"},
    {f:"🇭🇷",n:"Croatia"},{f:"🇷🇸",n:"Serbia"},{f:"🇧🇦",n:"Bosnia"},
    {f:"🇦🇱",n:"Albania"},{f:"🇽🇰",n:"Kosovo"},{f:"🇲🇰",n:"North Macedonia"},
    {f:"🇲🇪",n:"Montenegro"},{f:"🇸🇮",n:"Slovenia"},{f:"🇬🇷",n:"Greece"},
    {f:"🇸🇪",n:"Sweden"},{f:"🇳🇴",n:"Norway"},{f:"🇩🇰",n:"Denmark"},
    {f:"🇫🇮",n:"Finland"},{f:"🇮🇸",n:"Iceland"},
    {f:"🇪🇪",n:"Estonia"},{f:"🇱🇻",n:"Latvia"},{f:"🇱🇹",n:"Lithuania"},
    {f:"🇪🇬",n:"Egypt"},{f:"🇲🇦",n:"Morocco"},{f:"🇹🇳",n:"Tunisia"},
    {f:"🇩🇿",n:"Algeria"},{f:"🇱🇾",n:"Libya"},{f:"🇸🇩",n:"Sudan"},
    {f:"🇳🇬",n:"Nigeria"},{f:"🇪🇹",n:"Ethiopia"},{f:"🇰🇪",n:"Kenya"},
    {f:"🇿🇦",n:"South Africa"},{f:"🇬🇭",n:"Ghana"},
    {f:"🇧🇷",n:"Brazil"},{f:"🇦🇷",n:"Argentina"},{f:"🇲🇽",n:"Mexico"},
    {f:"🇨🇴",n:"Colombia"},{f:"🇨🇱",n:"Chile"},{f:"🇵🇪",n:"Peru"},
    {f:"🇻🇪",n:"Venezuela"},{f:"🇺🇾",n:"Uruguay"},{f:"🇵🇾",n:"Paraguay"},
    {f:"🇪🇨",n:"Ecuador"},{f:"🇧🇴",n:"Bolivia"},
    {f:"🇨🇺",n:"Cuba"},{f:"🇩🇴",n:"Dominican Republic"},
    {f:"🇮🇱",n:"Israel"},{f:"🇵🇸",n:"Palestine"},{f:"🇯🇴",n:"Jordan"},
    {f:"🇱🇧",n:"Lebanon"},{f:"🇰🇼",n:"Kuwait"},{f:"🇶🇦",n:"Qatar"},
    {f:"🇴🇲",n:"Oman"},{f:"🇧🇭",n:"Bahrain"},{f:"🇾🇪",n:"Yemen"},
    {f:"🇲🇳",n:"Mongolia"},{f:"🇳🇵",n:"Nepal"},{f:"🇲🇲",n:"Myanmar"},
    {f:"🇰🇭",n:"Cambodia"},{f:"🇱🇦",n:"Laos"},{f:"🇹🇼",n:"Taiwan"},
    {f:"🏳️",n:"Other"}
];

// Helper language names (shown in their own language)
const LANG_FLAGS = {ru:"🇷🇺", en:"🇬🇧", tr:"🇹🇷", ar:"🇸🇦", fa:"🇮🇷", vi:"🇻🇳"};
const LANG_NAMES = {ru:"Русский", en:"English", tr:"Türkçe", ar:"العربية", fa:"فارسی", vi:"Tiếng Việt"};

// ============== STATE ==============
let APP = {
    user: null,
    lang: 'ru',
    quiz: null,
    allWords: [],
    quizCount: 10,
    skipKnown: true,
    subliminal: true,
    subliminalMs: 40,
    openCat: null
};
let pinValue = '';

// ============== HELPERS ==============
function $(id) { return document.getElementById(id); }
function shuffle(a) { const r=[...a]; for(let i=r.length-1;i>0;i--){const j=0|Math.random()*(i+1);[r[i],r[j]]=[r[j],r[i]];} return r; }
function hash(s) { let h=0; for(let i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i);h|=0;} return Math.abs(h).toString(36); }
function uid(e) { return 'u_'+hash(e.toLowerCase()); }
function sv(k,v) { localStorage.setItem(CONFIG.prefix+k, JSON.stringify(v)); }
function ld(k) { try{return JSON.parse(localStorage.getItem(CONFIG.prefix+k));}catch{return null;} }
function okEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function esc(s) { const d=document.createElement('div');d.textContent=s;return d.innerHTML; }

// Get translation of a word in the current helper language.
// Fallback chain: selected language → English → Russian → German.
// For non-Russian helper languages we never fall back to Russian before English,
// otherwise Arabic/Farsi/Turkish/Vietnamese users would see Cyrillic.
function tr(w) {
    const l = APP.lang || 'ru';
    if (l !== 'ru' && w[l]) return w[l];
    if (l === 'ru') return w.ru || w.en || w.german || w.verb || '';
    // Non-ru: prefer English, then German, then Russian as last resort
    return w.en || w.german || w.verb || w.ru || '';
}

// Full-SENTENCE translation for quiz items where the word-level `ru`/`en`
// is just a dictionary gloss (adjektiv_prep, verb_prep_kasus). Returns the
// `sent_${lang}` field if present, otherwise falls back cross-language
// (en → ru → any other available), and finally to the short `tr()`
// translation so nothing regresses for items that only have word-level
// fields. The field prefix is `sent_` (not `${lang}Sent`) to avoid name
// collisions with helper-language codes like `tr`.
function fullSent(w) {
    const l = APP.lang || 'ru';
    const k = 'sent_' + l;
    if (w[k]) return w[k];
    // Fallback chain across languages: en → ru → tr → ar → fa → vi
    const chain = ['en','ru','tr','ar','fa','vi'];
    for (const cl of chain) {
        if (cl !== l && w['sent_'+cl]) return w['sent_'+cl];
    }
    return tr(w);
}

// ============== PROGRESS ==============
function getKnownIds(key) {
    if(!APP.user) return new Set();
    const d=ld('prog_'+APP.user.id);
    return new Set(d&&d[key]?d[key]:[]);
}
function markKnown(itemId, key) {
    if(!APP.user) return;
    const pk='prog_'+APP.user.id, d=ld(pk)||{};
    if(!d[key]) d[key]=[];
    if(!d[key].includes(itemId)) d[key].push(itemId);
    sv(pk,d);
}
function getProgressPct(key, total) {
    return total>0?Math.round((getKnownIds(key).size/total)*100):0;
}
function resetCatProgress(key) {
    if(!APP.user) return;
    const pk='prog_'+APP.user.id, d=ld(pk)||{};
    delete d[key]; sv(pk,d);
}

// ============== USER COUNTER ==============
function getUserCount() {
    let c=0;
    for(let i=0;i<localStorage.length;i++){
        const k=localStorage.key(i);
        if(k && k.startsWith(CONFIG.prefix+'u_u_')) c++;
    }
    return Math.max(1,c);
}
function updateActivity() {
    if(!APP.user) return;
    sv('act_'+APP.user.id, Date.now());
}
function getOnlineCount() {
    let c=0; const now=Date.now();
    for(let i=0;i<localStorage.length;i++){
        const k=localStorage.key(i);
        if(k.startsWith(CONFIG.prefix+'act_')){
            try{const t=JSON.parse(localStorage.getItem(k)); if(now-t<300000)c++;}catch{}
        }
    }
    return Math.max(1,c);
}

// ============== PIN HELPERS ==============
function pinKey(k) {
    if(k==='del'){pinValue=pinValue.slice(0,-1);}
    else if(pinValue.length<4){pinValue+=''+k;}
    updatePinDots();
}
function updatePinDots() {
    document.querySelectorAll('.pin-dot').forEach((d,i)=>{
        d.classList.toggle('filled',i<pinValue.length);
    });
}
function pinPadHTML() {
    return `<div class="pin-pad">
        ${[1,2,3,4,5,6,7,8,9].map(n=>`<button class="pin-key" onclick="pinKey(${n})">${n}</button>`).join('')}
        <button class="pin-key" onclick="pinKey('del')">&#9003;</button>
        <button class="pin-key" onclick="pinKey(0)">0</button>
        <button class="pin-key pin-key-ok" onclick="pinSubmit()">&#10003;</button>
    </div>`;
}

function toast(msg) {
    document.querySelectorAll('.toast').forEach(e=>e.remove());
    const d=document.createElement('div');d.className='toast';d.textContent=msg;
    document.body.appendChild(d);setTimeout(()=>d.remove(),2500);
}

// ============== INIT ==============
function initApp() {
    if (typeof NOUNS==='undefined'||typeof VERBS==='undefined') {
        $('app').innerHTML='<p style="text-align:center;padding:40px;color:red">Wörterbuch nicht geladen!</p>';
        return;
    }
    APP.allWords=[...NOUNS,...VERBS];
    const sL=localStorage.getItem(CONFIG.prefix+'lang');
    if(sL && LANG_NAMES[sL]) APP.lang=sL;
    const sSub=localStorage.getItem(CONFIG.prefix+'sub');
    if(sSub!==null) APP.subliminal=sSub==='true';
    const sDark=localStorage.getItem(CONFIG.prefix+'dark');
    if(sDark==='true') document.documentElement.setAttribute('data-theme','dark');
    const cu=localStorage.getItem(CONFIG.prefix+'cur');
    if(cu){const d=ld('u_'+cu);if(d){APP.user=d;showMenu();return;}}
    showAuth();
}

// ============== AUTH ==============
let authMode = 'login'; // login | register | forgot

function showAuth(tab) {
    tab = tab || 'login';
    authMode = tab;
    pinValue = '';
    const savedEmail = localStorage.getItem(CONFIG.prefix+'lastEmail')||'';
    const cOpts = COUNTRIES.map(c=>`<option value="${c.f}">${c.f} ${c.n}</option>`).join('');

    if (tab === 'login') {
        $('app').innerHTML=`
        <div class="auth-page">
            <div class="auth-header">
                <div class="auth-logo">🇩🇪</div>
                <h1>${UI.appName}</h1>
                <p>${UI.subtitle}</p>
            </div>
            <div class="auth-body">
                <div class="auth-tabs">
                    <button class="auth-tab active">${UI.login}</button>
                    <button class="auth-tab" onclick="showAuth('register')">${UI.register}</button>
                </div>
                <div class="form-group">
                    <label class="form-label">${UI.email}</label>
                    <input class="form-input" type="email" id="lEmail" value="${esc(savedEmail)}" placeholder="${UI.emailPh}">
                </div>
                <div class="pin-label">${UI.pin}</div>
                <div class="pin-display" id="pinArea">
                    <div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div>
                </div>
                ${pinPadHTML()}
                <div class="auth-footer"><a onclick="showAuth('forgot')">${UI.forgot}</a></div>
            </div>
        </div>`;
    } else if (tab === 'register') {
        $('app').innerHTML=`
        <div class="auth-page">
            <div class="auth-header">
                <div class="auth-logo">🇩🇪</div>
                <h1>${UI.appName}</h1>
                <p>${UI.subtitle}</p>
            </div>
            <div class="auth-body">
                <div class="auth-tabs">
                    <button class="auth-tab" onclick="showAuth('login')">${UI.login}</button>
                    <button class="auth-tab active">${UI.register}</button>
                </div>
                <div class="form-group"><label class="form-label">${UI.name}</label>
                    <input class="form-input" type="text" id="rName" placeholder="${UI.namePh}"></div>
                <div class="form-group"><label class="form-label">${UI.email}</label>
                    <input class="form-input" type="email" id="rEmail" placeholder="${UI.emailPh}"></div>
                <div class="form-group"><label class="form-label">${UI.country}</label>
                    <select class="form-select" id="rCountry"><option value="">${UI.countrySel}</option>${cOpts}</select></div>
                <div class="form-group"><label class="form-label">${UI.helpLang}</label>
                    <select class="form-select" id="rLang">
                        ${Object.keys(LANG_NAMES).map(l=>`<option value="${l}" ${l===APP.lang?'selected':''}>${LANG_FLAGS[l]} ${LANG_NAMES[l]}</option>`).join('')}
                    </select>
                    <small style="color:var(--text-light);margin-top:4px;display:block">${UI.helpLangDesc}</small></div>
                <div class="pin-label">${UI.pin} (4 Ziffern)</div>
                <div class="pin-display" id="pinArea">
                    <div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div>
                </div>
                ${pinPadHTML()}
            </div>
        </div>`;
    } else {
        $('app').innerHTML=`
        <div class="auth-page">
            <div class="auth-header">
                <div class="auth-logo">🇩🇪</div>
                <h1>${UI.appName}</h1>
                <p>${UI.subtitle}</p>
            </div>
            <div class="auth-body">
                <h3 style="text-align:center;margin-bottom:8px">${UI.resetPin}</h3>
                <p style="color:var(--text-light);font-size:0.85rem;text-align:center;margin-bottom:16px">${UI.resetPinDesc}</p>
                <div class="form-group"><label class="form-label">${UI.email}</label>
                    <input class="form-input" type="email" id="fEmail" placeholder="${UI.emailPh}"></div>
                <div class="pin-label">${UI.newPin}</div>
                <div class="pin-display" id="pinArea">
                    <div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div><div class="pin-dot"></div>
                </div>
                ${pinPadHTML()}
                <div class="auth-footer"><a onclick="showAuth('login')">&#8592; ${UI.backToLogin}</a></div>
            </div>
        </div>`;
    }
}

function pinSubmit() {
    if (authMode==='login') doLogin();
    else if (authMode==='register') doReg();
    else doForgot();
}

function doLogin() {
    const e=$('lEmail').value.trim().toLowerCase();
    if(!e) return toast(UI.badEmail);
    if(!okEmail(e)) return toast(UI.badEmail);
    if(pinValue.length!==4) return toast(UI.pinShort);
    const id=uid(e),d=ld('u_'+id);
    if(!d) return toast(UI.noUser);
    if(hash(pinValue)!==d.ph){
        pinValue=''; updatePinDots();
        $('pinArea').classList.add('animate-shake');
        setTimeout(()=>$('pinArea').classList.remove('animate-shake'),500);
        return toast(UI.badPin);
    }
    APP.user=d;
    if(d.lang&&LANG_NAMES[d.lang]) APP.lang=d.lang;
    localStorage.setItem(CONFIG.prefix+'cur',id);
    localStorage.setItem(CONFIG.prefix+'lastEmail',e);
    localStorage.setItem(CONFIG.prefix+'lang',APP.lang);
    updateActivity();
    showMenu();
}

function doReg() {
    const nm=$('rName').value.trim(),em=$('rEmail').value.trim().toLowerCase(),
          co=$('rCountry').value,lang=$('rLang').value;
    if(!nm) return toast('Gib deinen Namen ein!');
    if(nm.length<2) return toast(UI.nameShort);
    if(!em) return toast('Gib deine E-Mail ein!');
    if(!okEmail(em)) return toast(UI.badEmail);
    if(!co) return toast('Wähle dein Land!');
    if(pinValue.length!==4) return toast(UI.pinShort);
    const id=uid(em);
    if(ld('u_'+id)) return toast(UI.accountExists);
    const u={id,name:nm,email:em,country:co,lang:lang,ph:hash(pinValue),ts:Date.now()};
    sv('u_'+id,u);
    localStorage.setItem(CONFIG.prefix+'cur',id);
    localStorage.setItem(CONFIG.prefix+'lastEmail',em);
    APP.lang=lang;
    localStorage.setItem(CONFIG.prefix+'lang',lang);
    APP.user=u;
    updateActivity();
    toast(UI.regSuccess);
    setTimeout(showMenu,300);
}

function doForgot() {
    const e=$('fEmail').value.trim().toLowerCase();
    if(!e) return toast(UI.fillAll);
    if(!okEmail(e)) return toast(UI.badEmail);
    if(pinValue.length!==4) return toast(UI.pinShort);
    const id=uid(e),d=ld('u_'+id);
    if(!d) return toast(UI.noUser);
    d.ph=hash(pinValue);
    sv('u_'+id,d);
    toast(UI.resetSuccess);
    setTimeout(()=>showAuth('login'),600);
}

// ============== MENU ==============
// Satzbau submenu: group connectors by grammatical structure (verb position)
// Groups:
//   hauptV2   — Hauptsatz, Verb auf Position 2 (basic clauses, modal, TEKAMOLO, Passiv, Konjunktiv)
//   koordP0   — Koordinierende Konjunktionen Position 0 (aber/denn/sondern — keine Inversion)
//   advV2     — Verbindungsadverbien → Verb auf Position 2 (trotzdem/deshalb — Inversion)
//   nebenEnd  — Nebensatz-Konnektoren, Verb am Ende (weil/dass/wenn/als/ob/obwohl/damit/um...zu/bevor/nachdem/während/seitdem/bis/sobald)
//   relativ   — Relativsätze
//   spezial   — je...desto, Textbau (Stil-Konnektoren B2-C2)
// Satzbau groups — semantic grouping (by meaning/function).
// Section titles stay multilingual so the learner understands what each group is for.
// Exercise names inside (rendered from SATZ_LABELS) stay German.
const SATZ_GROUPS=[
    {key:'hauptV2',cats:['hauptsatz','modal','tekamolo','praeteritum','passiv','konjunktiv'],
     t:{de:'Hauptsatz · Verb Position 2',
        ru:'Главное предложение · глагол на 2-й позиции',
        en:'Main clause · verb in position 2',
        tr:'Ana cümle · fiil 2. pozisyonda',
        ar:'جملة رئيسية · الفعل في الموضع 2',
        fa:'جمله اصلی · فعل در جایگاه ۲',
        vi:'Mệnh đề chính · động từ ở vị trí 2'}},
    {key:'kausal',cats:['weil','denn','deshalb','da'],
     t:{de:'Kausal · Begründung (warum?)',
        ru:'Причина (warum? — почему?)',
        en:'Causal · reason (warum? — why?)',
        tr:'Sebep (warum? — neden?)',
        ar:'السببية (warum؟)',
        fa:'علّی (warum؟)',
        vi:'Nguyên nhân (warum? — vì sao?)'}},
    {key:'konzessiv',cats:['obwohl','trotzdem'],
     t:{de:'Konzessiv · Einschränkung (obwohl, trotzdem)',
        ru:'Уступка (хотя / тем не менее)',
        en:'Concessive · contrast (although / nevertheless)',
        tr:'Karşıt durum (-e rağmen)',
        ar:'الاستدراك',
        fa:'تضاد (اگرچه / با این حال)',
        vi:'Nhượng bộ (mặc dù / tuy nhiên)'}},
    {key:'temporal',cats:['als','wenn','bevor','nachdem','waehrend','seitdem','bis','sobald'],
     t:{de:'Temporal · Zeit (wann? wie lange?)',
        ru:'Время (wann? — когда? как долго?)',
        en:'Temporal · time (wann? — when? how long?)',
        tr:'Zaman (wann? — ne zaman?)',
        ar:'الزمان (wann؟)',
        fa:'زمانی (wann؟)',
        vi:'Thời gian (wann? — khi nào?)'}},
    {key:'konditional',cats:['falls'],
     t:{de:'Konditional · Bedingung (falls, im Fall)',
        ru:'Условие (на случай если)',
        en:'Conditional · condition (in case)',
        tr:'Koşul (-se diye)',
        ar:'الشرط (في حال)',
        fa:'شرطی (در صورتی که)',
        vi:'Điều kiện (phòng khi)'}},
    {key:'final',cats:['damit','um_zu'],
     t:{de:'Final · Absicht (wozu? wofür?)',
        ru:'Цель (wozu? — зачем?)',
        en:'Final · purpose (wozu? — what for?)',
        tr:'Amaç (wozu? — ne için?)',
        ar:'الغرض (wozu؟)',
        fa:'هدف (wozu؟)',
        vi:'Mục đích (wozu? — để làm gì?)'}},
    {key:'infinitiv',cats:['zu_infinitiv'],
     t:{de:'Infinitiv mit zu',
        ru:'Инфинитив с zu',
        en:'Infinitive with zu',
        tr:'zu ile mastar',
        ar:'المصدر مع zu',
        fa:'مصدر با zu',
        vi:'Động từ nguyên thể với zu'}},
    {key:'negation',cats:['negation'],
     t:{de:'Negation · nicht / kein',
        ru:'Отрицание · nicht / kein',
        en:'Negation · nicht / kein',
        tr:'Olumsuzluk · nicht / kein',
        ar:'النفي · nicht / kein',
        fa:'نفی · nicht / kein',
        vi:'Phủ định · nicht / kein'}},
    {key:'koord',cats:['koord'],
     t:{de:'Koordinierende Konjunktionen · und / oder / doch (Position 0)',
        ru:'Сочинительные союзы · und / oder / doch (нулевая позиция)',
        en:'Coordinating conjunctions · und / oder / doch (Position 0)',
        tr:'Eşgüdümlü bağlaçlar · und / oder / doch (sıfır pozisyon)',
        ar:'حروف العطف الترتيبية · und / oder / doch (الموقع 0)',
        fa:'حروف ربط همپایه · und / oder / doch (موقعیت ۰)',
        vi:'Liên từ đẳng lập · und / oder / doch (vị trí 0)'}},
    {key:'zeitmass',cats:['zeitmass_akk'],
     t:{de:'Zeit- und Maßangaben im Akkusativ',
        ru:'Время и меры в Akkusativ (без предлога)',
        en:'Time and measure expressions in the accusative',
        tr:'Akkusatif ile zaman ve ölçü ifadeleri',
        ar:'تعبيرات الزمن والقياس في حالة النصب',
        fa:'بیان زمان و اندازه در حالت Akkusativ',
        vi:'Cụm từ chỉ thời gian và kích thước ở Akkusativ'}},
    {key:'vergleich',cats:['komparativ'],
     t:{de:'Vergleich · Komparativ und Superlativ',
        ru:'Сравнение · сравнительная и превосходная степень',
        en:'Comparison · comparative and superlative',
        tr:'Karşılaştırma · üstünlük ve en üstünlük',
        ar:'المقارنة · التفضيل والمطلق',
        fa:'مقایسه · صفت تفضیلی و عالی',
        vi:'So sánh · hơn và nhất'}},
    {key:'adversativ',cats:['aber','sondern'],
     t:{de:'Adversativ · Gegensatz (aber, sondern)',
        ru:'Противопоставление (но / а)',
        en:'Adversative · contrast (but / but rather)',
        tr:'Karşıtlık (ama / aksine)',
        ar:'العطف الاستدراكي',
        fa:'تضاد (اما / بلکه)',
        vi:'Đối lập (nhưng / mà là)'}},
    {key:'indirekt',cats:['dass','ob','indirekt_w'],
     t:{de:'Indirekte Rede · dass / ob / W-Fragen',
        ru:'Косвенная речь · dass / ob / W-вопросы',
        en:'Indirect speech · dass / ob / W-questions',
        tr:'Dolaylı anlatım · dass / ob / W-soruları',
        ar:'الكلام المنقول · dass / ob / أسئلة W',
        fa:'گفتار غیرمستقیم · dass / ob / پرسش‌های W',
        vi:'Lời tường thuật · dass / ob / câu hỏi W'}},
    {key:'relativ',cats:['relativ'],
     t:{de:'Relativsätze',
        ru:'Относительные предложения',
        en:'Relative clauses',
        tr:'İlgi cümleleri',
        ar:'جمل الوصل',
        fa:'جمله‌های موصولی',
        vi:'Mệnh đề quan hệ'}},
    {key:'spezial',cats:['je_desto','textbau'],
     t:{de:'Speziell · je...desto, Textbau (B2-C2)',
        ru:'Особые конструкции · je...desto, Textbau (B2-C2)',
        en:'Special · je...desto, text connectors (B2-C2)',
        tr:'Özel · je...desto, metin yapısı (B2-C2)',
        ar:'خاص · je...desto، بناء النص (B2-C2)',
        fa:'ویژه · je...desto، ساخت متن (B2-C2)',
        vi:'Đặc biệt · je...desto, cấu trúc văn bản (B2-C2)'}}
];
const SATZ_LABELS={
    hauptsatz:{de:'Hauptsätze',ru:'Главные предложения',en:'Main clauses',tr:'Ana cümleler',ar:'جمل رئيسية',fa:'جمله‌های اصلی',vi:'Mệnh đề chính'},
    modal:{de:'Modalverben',ru:'Модальные глаголы',en:'Modal verbs',tr:'Kip fiilleri',ar:'أفعال شكلية',fa:'افعال وجهی',vi:'Động từ khiếm khuyết'},
    tekamolo:{de:'TEKAMOLO',ru:'TEKAMOLO (порядок обстоятельств)',en:'TEKAMOLO (adverb order)',tr:'TEKAMOLO (zarf sırası)',ar:'TEKAMOLO (ترتيب الظروف)',fa:'TEKAMOLO (ترتیب قیدها)',vi:'TEKAMOLO (thứ tự trạng ngữ)'},
    passiv:{de:'Passiv',ru:'Пассивный залог',en:'Passive voice',tr:'Edilgen çatı',ar:'المبني للمجهول',fa:'مجهول',vi:'Thể bị động'},
    konjunktiv:{de:'Konjunktiv II',ru:'Сослагательное наклонение II',en:'Subjunctive II',tr:'Konjunktiv II',ar:'الصيغة الشرطية II',fa:'وجه التزامی II',vi:'Thức giả định II'},
    aber:{de:'aber',ru:'aber (но)',en:'aber (but)',tr:'aber (ama)',ar:'aber (لكن)',fa:'aber (اما)',vi:'aber (nhưng)'},
    denn:{de:'denn',ru:'denn (так как)',en:'denn (because)',tr:'denn (çünkü)',ar:'denn (لأن)',fa:'denn (زیرا)',vi:'denn (vì)'},
    sondern:{de:'sondern',ru:'sondern (а, но)',en:'sondern (but rather)',tr:'sondern (bilakis)',ar:'sondern (بل)',fa:'sondern (بلکه)',vi:'sondern (mà là)'},
    trotzdem:{de:'trotzdem',ru:'trotzdem (всё же)',en:'trotzdem (nevertheless)',tr:'trotzdem (yine de)',ar:'trotzdem (مع ذلك)',fa:'trotzdem (با این حال)',vi:'trotzdem (tuy nhiên)'},
    deshalb:{de:'deshalb',ru:'deshalb (поэтому)',en:'deshalb (therefore)',tr:'deshalb (bu yüzden)',ar:'deshalb (لذلك)',fa:'deshalb (به همین دلیل)',vi:'deshalb (vì vậy)'},
    da:{de:'da',ru:'da (так как)',en:'da (since)',tr:'da (-dığı için)',ar:'da (بما أن)',fa:'da (از آنجا که)',vi:'da (vì)'},
    falls:{de:'falls',ru:'falls (на случай если)',en:'falls (in case)',tr:'falls (-se diye)',ar:'falls (في حال)',fa:'falls (در صورتی که)',vi:'falls (phòng khi)'},
    weil:{de:'weil',ru:'weil (потому что)',en:'weil (because)',tr:'weil (çünkü)',ar:'weil (لأن)',fa:'weil (چون)',vi:'weil (bởi vì)'},
    dass:{de:'dass',ru:'dass (что)',en:'dass (that)',tr:'dass (-dığı)',ar:'dass (أن)',fa:'dass (که)',vi:'dass (rằng)'},
    wenn:{de:'wenn',ru:'wenn (если/когда)',en:'wenn (if/when)',tr:'wenn (eğer/-dığında)',ar:'wenn (إذا/عندما)',fa:'wenn (اگر/وقتی)',vi:'wenn (nếu/khi)'},
    als:{de:'als',ru:'als (когда — однократно в прошлом)',en:'als (when — past single)',tr:'als (-dığı zaman, geçmiş)',ar:'als (عندما — في الماضي)',fa:'als (وقتی — گذشته)',vi:'als (khi — quá khứ một lần)'},
    ob:{de:'ob',ru:'ob (ли)',en:'ob (whether)',tr:'ob (-ıp -madığı)',ar:'ob (ما إذا)',fa:'ob (آیا)',vi:'ob (liệu)'},
    obwohl:{de:'obwohl',ru:'obwohl (хотя)',en:'obwohl (although)',tr:'obwohl (-mesine rağmen)',ar:'obwohl (على الرغم من)',fa:'obwohl (اگرچه)',vi:'obwohl (mặc dù)'},
    damit:{de:'damit',ru:'damit (чтобы)',en:'damit (so that)',tr:'damit (-sin diye)',ar:'damit (لكي)',fa:'damit (تا اینکه)',vi:'damit (để mà)'},
    um_zu:{de:'um...zu',ru:'um...zu (чтобы + inf)',en:'um...zu (in order to)',tr:'um...zu (için)',ar:'um...zu (لكي)',fa:'um...zu (برای اینکه)',vi:'um...zu (để)'},
    zu_infinitiv:{de:'zu-Infinitiv',ru:'zu-Infinitiv (инфинитив с zu)',en:'zu-Infinitive',tr:'zu-Mastar',ar:'zu + المصدر',fa:'مصدر با zu',vi:'zu-Infinitiv (động từ nguyên thể với zu)'},
    indirekt_w:{de:'indirekte W-Fragen',ru:'indirekte W-Fragen (косвенные W-вопросы)',en:'indirekte W-Fragen (indirect W-questions)',tr:'indirekte W-Fragen (dolaylı W-soruları)',ar:'indirekte W-Fragen (أسئلة W غير مباشرة)',fa:'indirekte W-Fragen (پرسش‌های غیرمستقیم با W)',vi:'indirekte W-Fragen (câu hỏi W gián tiếp)'},
    negation:{de:'Negation (nicht / kein)',ru:'Negation (отрицание nicht / kein)',en:'Negation (nicht / kein)',tr:'Negation (olumsuzluk nicht / kein)',ar:'Negation (النفي nicht / kein)',fa:'Negation (نفی nicht / kein)',vi:'Negation (phủ định nicht / kein)'},
    koord:{de:'und / oder / doch',ru:'und / oder / doch (Position 0)',en:'und / oder / doch (Position 0)',tr:'und / oder / doch (sıfır konum)',ar:'und / oder / doch (الموقع 0)',fa:'und / oder / doch (موقعیت ۰)',vi:'und / oder / doch (vị trí 0)'},
    zeitmass_akk:{de:'Zeit-/Maßangaben (Akkusativ)',ru:'Zeit-/Maßangaben (время и меры в Akkusativ)',en:'Zeit-/Maßangaben (time/measure in accusative)',tr:'Zeit-/Maßangaben (zaman ve ölçü, Akkusatif)',ar:'Zeit-/Maßangaben (الزمن والقياس، نصب)',fa:'Zeit-/Maßangaben (زمان و اندازه، Akkusativ)',vi:'Zeit-/Maßangaben (thời gian/kích thước ở Akkusativ)'},
    komparativ:{de:'Komparativ / Superlativ',ru:'Komparativ / Superlativ (сравнительная и превосходная степень)',en:'Komparativ / Superlativ (comparative and superlative)',tr:'Komparativ / Superlativ (üstünlük ve en üstünlük)',ar:'Komparativ / Superlativ (التفضيل والمطلق)',fa:'Komparativ / Superlativ (صفت تفضیلی و عالی)',vi:'Komparativ / Superlativ (so sánh hơn và so sánh nhất)'},
    praeteritum:{de:'Präteritum',ru:'Präteritum (прошедшее время — письменная форма)',en:'Präteritum (past tense — written form)',tr:'Präteritum (geçmiş zaman — yazılı biçim)',ar:'Präteritum (صيغة الماضي المكتوبة)',fa:'Präteritum (گذشتهٔ نوشتاری)',vi:'Präteritum (thì quá khứ — văn viết)'},
    bevor:{de:'bevor',ru:'bevor (прежде чем)',en:'bevor (before)',tr:'bevor (-meden önce)',ar:'bevor (قبل أن)',fa:'bevor (قبل از)',vi:'bevor (trước khi)'},
    nachdem:{de:'nachdem',ru:'nachdem (после того как)',en:'nachdem (after)',tr:'nachdem (-dikten sonra)',ar:'nachdem (بعد أن)',fa:'nachdem (بعد از اینکه)',vi:'nachdem (sau khi)'},
    waehrend:{de:'während',ru:'während (в то время как)',en:'während (while)',tr:'während (-iken)',ar:'während (بينما)',fa:'während (در حالی که)',vi:'während (trong khi)'},
    seitdem:{de:'seitdem',ru:'seitdem (с тех пор как)',en:'seitdem (since)',tr:'seitdem (-den beri)',ar:'seitdem (منذ أن)',fa:'seitdem (از زمانی که)',vi:'seitdem (kể từ khi)'},
    bis:{de:'bis',ru:'bis (пока не)',en:'bis (until)',tr:'bis (-ene kadar)',ar:'bis (حتى)',fa:'bis (تا اینکه)',vi:'bis (cho đến khi)'},
    sobald:{de:'sobald',ru:'sobald (как только)',en:'sobald (as soon as)',tr:'sobald (-er -mez)',ar:'sobald (بمجرد أن)',fa:'sobald (به محض اینکه)',vi:'sobald (ngay khi)'},
    relativ:{de:'Relativsätze',ru:'Относительные предложения',en:'Relative clauses',tr:'İlgi cümleleri',ar:'جمل الوصل',fa:'جمله‌های موصولی',vi:'Mệnh đề quan hệ'},
    je_desto:{de:'je...desto',ru:'je...desto (чем...тем)',en:'je...desto (the...the)',tr:'je...desto (-dikçe)',ar:'je...desto (كلما...كلما)',fa:'je...desto (هرچه...همان‌قدر)',vi:'je...desto (càng...càng)'},
    textbau:{de:'Textbau (B2-C2)',ru:'Текстовые конструкции (B2-C2)',en:'Text builders (B2-C2)',tr:'Metin yapısı (B2-C2)',ar:'بناء النص (B2-C2)',fa:'ساخت متن (B2-C2)',vi:'Cấu trúc văn bản (B2-C2)'}
};
function buildSatzbauGroups(snCatsSet){
    // Satzbau menu — все названия (групп, упражнений, "Alle Themen") всегда
    // по-немецки, потому что это немецкие грамматические термины.
    let html=sqBtn('📐','Alle Themen','sentences','all');
    SATZ_GROUPS.forEach(g=>{
        const groupCats=g.cats.filter(c=>snCatsSet.has(c));
        if(!groupCats.length) return;
        // Group titles always in German — they describe German grammar topics.
        html+=`<div class="satz-group-title">${g.t.de||g.t}</div>`;
        groupCats.forEach(c=>{
            // Exercise names always in German — they are German grammar terms
            // and should not be translated to helper languages.
            const lbl=SATZ_LABELS[c]?(SATZ_LABELS[c].de||c):c;
            html+=sqBtn('📎',lbl,'sentences',c);
        });
    });
    return html;
}

function catHTML(icon,title,cnt,progKey,total,bodyId,bodyContent){
    const p=getProgressPct(progKey,total);
    const open=APP.openCat===bodyId;
    const resetTitle=resetBtnLabel();
    const showReset=p>0;
    return `<div class="cat-card">
        <div class="cat-header" onclick="toggleCat('${bodyId}')">
            <span class="cat-icon">${icon}</span>
            <div class="cat-info"><div class="cat-title">${title}</div><div class="cat-sub">${cnt} &bull; ${p}% gelernt</div></div>
            ${showReset?`<button class="cat-reset-btn" title="${resetTitle}" onclick="event.stopPropagation();confirmResetCat('${progKey}','${esc(title)}')">↺</button>`:''}
            <span class="cat-arrow ${open?'open':''}">&rsaquo;</span>
        </div>
        <div class="cat-progress"><div class="cat-progress-fill" style="width:${p}%"></div></div>
        <div class="cat-body" id="${bodyId}" style="display:${open?'block':'none'}">${bodyContent}</div>
    </div>`;
}
function resetBtnLabel(){
    const M={ru:'Сбросить прогресс',en:'Reset progress',de:'Fortschritt zurücksetzen',tr:'İlerlemeyi sıfırla',ar:'إعادة ضبط التقدم',fa:'بازنشانی پیشرفت',vi:'Đặt lại tiến độ'};
    return M[APP.lang||'ru']||M.de;
}
function confirmResetCat(progKey,title){
    const M={ru:'Сбросить прогресс по этой категории?',en:'Reset progress for this category?',de:'Fortschritt für diese Kategorie zurücksetzen?',tr:'Bu kategorinin ilerlemesi sıfırlansın mı?',ar:'هل تريد إعادة ضبط التقدم لهذه الفئة؟',fa:'پیشرفت این دسته بازنشانی شود؟',vi:'Đặt lại tiến độ cho mục này?'};
    if(confirm((M[APP.lang||'ru']||M.de)+'\n\n'+title)){
        resetCatProgress(progKey);
        showMenu();
    }
}
function sqBtn(icon,label,cat,mode){
    return `<button class="sub-quiz-btn" onclick="startQuiz('${cat}','${mode}')">${icon} ${label}</button>`;
}
function ruleBtn(cat){
    if(typeof RULES==='undefined'||!RULES[cat]) return '';
    return `<button class="sub-quiz-btn rule-btn" onclick="showRule('${cat}')">📖 Regel</button>`;
}
function showRule(cat,backAction){
    if(typeof RULES==='undefined'||!RULES[cat]) return;
    let back='showMenu()';
    if(backAction===true) back='renderBuilder()';
    else if(typeof backAction==='string') back=backAction;
    // Multilingual rule selection: RULES[cat] can be either an HTML string (legacy)
    // or an object { de, ru, en, tr, ar, fa, vi }. Pick the current language
    // and fall back through a chain.
    const entry=RULES[cat];
    const lang=APP.lang||'ru';
    let html='';
    if(typeof entry==='string'){
        html=entry;
    }else if(typeof entry==='object'){
        html=entry[lang]||entry.en||entry.de||entry.ru||'';
    }
    // Header title in the user's language
    const titles={ru:'Грамматическое правило',en:'Grammar rule',de:'Grammatikregel',tr:'Dilbilgisi kuralı',ar:'قاعدة نحوية',fa:'قاعده دستوری',vi:'Quy tắc ngữ pháp'};
    const title=titles[lang]||titles.de;
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="${back}">&#8592;</button><span>${title}</span></div>
            </div>
            <div class="quiz-body rule-page">${html}</div>
        </div>`;
}
function toggleCat(id){
    APP.openCat=APP.openCat===id?null:id;
    document.querySelectorAll('.cat-body').forEach(e=>{e.style.display=e.id===APP.openCat?'block':'none';});
    document.querySelectorAll('.cat-arrow').forEach(a=>{a.classList.toggle('open',a.closest('.cat-card').querySelector('.cat-body').id===APP.openCat);});
}

function showMenu() {
    if(!APP.user) return showAuth();
    updateActivity();
    const st=getStats(), nc=NOUNS.length, vc=VERBS.length, streak=getStreak();
    const hasPt=typeof PARTIZIP2!=='undefined'&&PARTIZIP2.length;
    const hasRf=typeof REFLEXIVE!=='undefined'&&REFLEXIVE.length;
    const hasSn=typeof SENTENCES!=='undefined'&&SENTENCES.length;
    const hasPp=typeof PREPOSITIONS!=='undefined'&&PREPOSITIONS.length;
    const hasPn=typeof PRONOUNS!=='undefined'&&PRONOUNS.length;

    let cats='';
    // 1. Wortschatz
    cats+=catHTML('📚','Wortschatz',nc+vc+' Wörter','words_article',nc,'catWords',
        sqBtn('🔤','Artikel (der/die/das)','words','article')+
        sqBtn('🇩🇪','Deutsch → Übersetzung','words','de2l1')+
        sqBtn('🌍','Übersetzung → Deutsch','words','l12de'));
    // 2. Partizip II
    if(hasPt) cats+=catHTML('📝','Partizip II',PARTIZIP2.length+' Verben','partizip_v2p',PARTIZIP2.length,'catPartiz',
        sqBtn('➡️','Verb → hat/ist + Partizip II','partizip','v2p')+
        sqBtn('🔀','haben oder sein?','partizip','aux'));
    // 3. Reflexive
    if(hasRf) cats+=catHTML('🔄','Reflexive Verben',REFLEXIVE.length+' Verben','reflexive_conj',REFLEXIVE.length,'catReflex',
        sqBtn('✍️','Satz vervollständigen','reflexive','conj')+
        sqBtn('🎯','Akkusativ oder Dativ?','reflexive','case'));
    // 4. Satzbau — gruppiert nach Konnektor-Typ / Verb-Position
    if(hasSn){
        const snCatsSet=new Set(SENTENCES.map(s=>s.cat));
        const snBtns=buildSatzbauGroups(snCatsSet);
        cats+=catHTML('📐','Satzbau',SENTENCES.length+' Übungen','sentences_all',SENTENCES.length,'catSatz',snBtns);
    }
    // 5. Präpositionen
    if(hasPp) cats+=catHTML('📌','Präpositionen',PREPOSITIONS.length+' Übungen','prep_all',PREPOSITIONS.length,'catPrep',
        sqBtn('📌','Alle Präpositionen','prepositions','all')+
        sqBtn('🔄','Wechselpräpositionen','prepositions','wechsel')+
        sqBtn('📗','Dativ-Präpositionen','prepositions','dativ')+
        sqBtn('📕','Akkusativ-Präpositionen','prepositions','akkusativ')+
        sqBtn('📘','Genitiv-Präpositionen','prepositions','genitiv')+
        sqBtn('🔗','Verb + Präposition','prepositions','verb_prep')+
        sqBtn('🎯','Verb + Prep + Kasus','prepositions','verb_prep_kasus')+
        sqBtn('💡','Adjektiv + Präposition','prepositions','adjektiv_prep'));
    // 6. Pronomen
    if(hasPn) cats+=catHTML('👥','Pronomen',PRONOUNS.length+' Übungen','pron_all',PRONOUNS.length,'catPron',
        sqBtn('👤','Alle Pronomen','pronouns','all')+
        sqBtn('🙋','Personalpronomen','pronouns','personal')+
        sqBtn('📎','Possessivpronomen','pronouns','possessiv')+
        sqBtn('🔄','Reflexivpronomen','pronouns','reflexiv')+
        sqBtn('🔗','Relativpronomen','pronouns','relativ')+
        sqBtn('❓','Indefinitpronomen','pronouns','indefinit')+
        sqBtn('❔','welch- / was für ein-','pronouns','frageartikel')+
        sqBtn('🔖','dieser/jeder/mancher','pronouns','artikelwort'));

    // 7. Deklination — новая карточка (n-Deklination, Genitiv, Adjektiv)
    const hasDk=typeof DEKLINATION!=='undefined'&&DEKLINATION.length;
    if(hasDk) cats+=catHTML('🏛️','Deklination',DEKLINATION.length+' Übungen','dekl_all',DEKLINATION.length,'catDekl',
        sqBtn('🏛️','Alle Deklinationen','deklination','all')+
        sqBtn('👨','n-Deklination','deklination','n_dekl')+
        sqBtn('📖','Genitiv-Attribute','deklination','genitiv_attr')+
        sqBtn('🎨','Adjektivdeklination','deklination','adj_dekl'));

    // 8. VWU — отдельная кнопка ведёт в showVWUMenu()
    const hasVWU=typeof VWU!=='undefined'&&VWU.levels;
    if(hasVWU){
        const totalTests=VWU.levels.reduce((s,l)=>s+l.tests.length,0);
        cats+=`<div class="cat-card vwu-entry-card">
            <div class="cat-header" onclick="showVWUMenu()">
                <span class="cat-icon">🎓</span>
                <div class="cat-info"><div class="cat-title">Prüfungsvorbereitung VWU</div>
                <div class="cat-sub">${VWU.levels.length} Stufen &bull; ${totalTests} Zwischentests</div></div>
                <span class="cat-arrow">&rsaquo;</span>
            </div>
        </div>`;
    }

    const regCnt=getUserCount(), onCnt=getOnlineCount();

    $('app').innerHTML=`
        <div class="app-shell">
            <div class="app-header">
                <div class="app-header-left"><span style="font-size:1.3rem">🇩🇪</span><h1>${UI.appName}</h1></div>
                <div class="app-header-right">
                    <button class="lang-chip" onclick="showLangModal()">${LANG_FLAGS[APP.lang]||'🌐'} ${LANG_NAMES[APP.lang]||APP.lang}</button>
                    <button class="btn btn-ghost btn-sm" onclick="doLogout()" style="width:auto">${UI.logout}</button>
                </div>
            </div>
            <div class="app-content">
                <div class="user-card">
                    <div class="user-card-top">
                        <div class="user-avatar">${APP.user.country}</div>
                        <div><div class="user-name">${esc(APP.user.name)}</div><div class="user-email">${esc(APP.user.email)}</div></div>
                    </div>
                    <div class="user-stats-row user-stats-4">
                        <div class="user-stat"><div class="user-stat-value">${st.total}</div><div class="user-stat-label">${UI.games}</div></div>
                        <div class="user-stat"><div class="user-stat-value">${st.avg}%</div><div class="user-stat-label">${UI.avg}</div></div>
                        <div class="user-stat"><div class="user-stat-value">${nc+vc}</div><div class="user-stat-label">${UI.words}</div></div>
                        <div class="user-stat"><div class="user-stat-value streak-value">${streak.current>0?'🔥 '+streak.current:'-'}</div><div class="user-stat-label">Tage</div></div>
                    </div>
                </div>
                <div class="menu-section"><div class="menu-section-title">Quiz-Kategorien</div>${cats}</div>
                <div class="menu-section">
                    <div class="menu-section-title">${UI.settings}</div>
                    <div class="menu-card">
                        <div class="setting-row"><span class="setting-label">${UI.qCount}</span>
                            <select class="form-select" id="sCount" onchange="APP.quizCount=+this.value">
                                <option value="10" ${APP.quizCount===10?'selected':''}>10</option>
                                <option value="20" ${APP.quizCount===20?'selected':''}>20</option>
                                <option value="30" ${APP.quizCount===30?'selected':''}>30</option>
                                <option value="50" ${APP.quizCount===50?'selected':''}>50</option>
                            </select>
                        </div>
                        <div class="toggle-row"><div><div class="toggle-row-label">${UI.skipKnown}</div><div class="toggle-row-sub">${UI.skipKnownDesc}</div></div>
                            <label class="toggle-switch"><input type="checkbox" ${APP.skipKnown?'checked':''} onchange="APP.skipKnown=this.checked"><span class="toggle-slider"></span></label></div>
                        <div class="toggle-row"><div><div class="toggle-row-label">25. Frame Technologie</div><div class="toggle-row-sub">Unterbewusstes Lernen</div></div>
                            <label class="toggle-switch"><input type="checkbox" ${APP.subliminal?'checked':''} onchange="APP.subliminal=this.checked;localStorage.setItem(CONFIG.prefix+'sub',this.checked)"><span class="toggle-slider"></span></label></div>
                        <div class="toggle-row"><div><div class="toggle-row-label">Dunkelmodus</div><div class="toggle-row-sub">Augenschonend bei Nacht</div></div>
                            <label class="toggle-switch"><input type="checkbox" ${localStorage.getItem(CONFIG.prefix+'dark')==='true'?'checked':''} onchange="toggleDark(this.checked)"><span class="toggle-slider"></span></label></div>
                    </div>
                </div>
                <div style="text-align:center;margin-bottom:12px"><button class="btn btn-outline" onclick="showStats()" style="width:auto;padding:8px 24px">📊 Meine Statistik</button></div>
                <div class="user-counter">${UI.registered}: ${regCnt} &bull; ${UI.online}: ${onCnt}</div>
                <div style="height:20px"></div>
            </div>
        </div>
    `;
    // Scroll restore: if a category is open, scroll it into view
    if(APP.openCat){
        setTimeout(()=>{
            const el=document.getElementById(APP.openCat);
            if(el){
                const card=el.closest('.cat-card');
                if(card) card.scrollIntoView({block:'start',behavior:'auto'});
            }
        },0);
    }
}

function doLogout(){if(!confirm(UI.logoutQ))return;localStorage.removeItem(CONFIG.prefix+'cur');APP.user=null;showAuth();}
function toggleDark(on){document.documentElement.setAttribute('data-theme',on?'dark':'light');localStorage.setItem(CONFIG.prefix+'dark',on);}


// ============== LANGUAGE MODAL ==============
function showLangModal(){
    const opts=Object.keys(LANG_NAMES).map(l=>`<button class="lang-option ${APP.lang===l?'selected':''}" onclick="setLang('${l}')"><span class="lang-option-flag">${LANG_FLAGS[l]}</span><span class="lang-option-name">${LANG_NAMES[l]}</span></button>`).join('');
    const m=document.createElement('div');m.className='modal-overlay';m.id='lm';
    m.onclick=function(e){if(e.target===this)closeLM();};
    m.innerHTML=`<div class="modal-sheet"><div class="modal-handle"></div><div class="modal-title">${UI.helpLang}</div><p style="text-align:center;color:var(--text-light);font-size:0.85rem;margin-bottom:16px">${UI.helpLangDesc}</p>${opts}</div>`;
    document.body.appendChild(m);
}
function closeLM(){const m=$('lm');if(m)m.remove();}
function setLang(l){APP.lang=l;localStorage.setItem(CONFIG.prefix+'lang',l);if(APP.user){APP.user.lang=l;sv('u_'+APP.user.id,APP.user);}closeLM();showMenu();}

// ============== QUIZ ENGINE ==============
function getPool(cat,mode){
    switch(cat){
        case 'words':
            if(mode==='article') return NOUNS.filter(w=>w.article);
            return [...NOUNS,...VERBS];
        case 'partizip': return typeof PARTIZIP2!=='undefined'?[...PARTIZIP2]:[];
        case 'reflexive': return typeof REFLEXIVE!=='undefined'?[...REFLEXIVE]:[];
        case 'sentences':
            if(typeof SENTENCES==='undefined') return [];
            return mode==='all'?[...SENTENCES]:SENTENCES.filter(s=>s.cat===mode);
        case 'prepositions':
            if(typeof PREPOSITIONS==='undefined') return [];
            return mode==='all'?[...PREPOSITIONS]:PREPOSITIONS.filter(p=>p.type===mode);
        case 'pronouns':
            if(typeof PRONOUNS==='undefined') return [];
            return mode==='all'?[...PRONOUNS]:PRONOUNS.filter(p=>p.type===mode);
        case 'deklination':
            if(typeof DEKLINATION==='undefined') return [];
            return mode==='all'?[...DEKLINATION]:DEKLINATION.filter(p=>p.type===mode);
    }
    return [];
}

function startQuiz(cat,mode){
    let pool=getPool(cat,mode);
    const progKey=cat+'_'+mode;
    if(APP.skipKnown){
        const known=getKnownIds(progKey);
        if(known.size>0) pool=pool.filter(w=>!known.has(w.id));
        if(!pool.length){
            if(confirm(UI.allLearned)){resetCatProgress(progKey);pool=getPool(cat,mode);}
            else return;
        }
    }
    if(!pool.length){toast('Keine Übungen!');return;}
    const n=Math.min(APP.quizCount,pool.length);
    const type=(cat==='sentences')?'builder':'mcq';
    APP.quiz={type,cat,mode,items:shuffle(pool).slice(0,n),idx:0,score:0,t0:Date.now(),built:[],allW:[],correctS:[],wrongs:[],knownTicked:new Set(),poolSnapshot:[...pool]};
    showQ();
}

// Restart quiz with only items the user did NOT mark as known in the previous session
function repeatUnmarked(){
    if(!APP.quiz) return;
    const ticked=APP.quiz.knownTicked||new Set();
    const remaining=APP.quiz.items.filter(it=>!ticked.has(it.id));
    if(!remaining.length){
        toast({ru:'Все слова отмечены как знакомые!',en:'All items already marked as known!',de:'Alle als bekannt markiert!',tr:'Hepsi bildiğin olarak işaretli!',ar:'الكل معروف بالفعل!',fa:'همه شناخته‌شده هستند!',vi:'Tất cả đã được đánh dấu!'}[APP.lang]||'Nothing to repeat');
        showMenu();return;
    }
    const cat=APP.quiz.cat,mode=APP.quiz.mode;
    const type=(cat==='sentences')?'builder':'mcq';
    APP.quiz={type,cat,mode,items:shuffle(remaining),idx:0,score:0,t0:Date.now(),built:[],allW:[],correctS:[],wrongs:[],knownTicked:new Set(),poolSnapshot:remaining};
    showQ();
}

// Toggle the "I know this" tick on the current quiz item
function toggleKnowTick(){
    if(!APP.quiz||APP.quiz.idx>=APP.quiz.items.length) return;
    const item=APP.quiz.items[APP.quiz.idx];
    if(!APP.quiz.knownTicked) APP.quiz.knownTicked=new Set();
    if(APP.quiz.knownTicked.has(item.id)) APP.quiz.knownTicked.delete(item.id);
    else APP.quiz.knownTicked.add(item.id);
    const btn=$('tickBtn');
    if(btn){
        const on=APP.quiz.knownTicked.has(item.id);
        btn.classList.toggle('on',on);
        btn.innerHTML=(on?'☑':'☐')+' '+tickBtnLabel();
    }
}
function tickBtnLabel(){
    const M={ru:'Знаю',en:'Know',de:'Kenne',tr:'Biliyorum',ar:'أعرف',fa:'می‌دانم',vi:'Đã biết'};
    return M[APP.lang||'ru']||M.de;
}

function showQ(){
    if(!APP.quiz||APP.quiz.idx>=APP.quiz.items.length){showRes();return;}
    if(APP.quiz.type==='builder') showBuilder();
    else showMCQ();
}

// ============== MCQ QUIZ ==============
// ============== PARTIZIP FAKE FORMS ==============
function genFakePForm(p){
    if(p.endsWith('t')&&!p.endsWith('et')) return p.slice(0,-1)+'en';
    if(p.endsWith('en')) return p.slice(0,-2)+'t';
    if(p.endsWith('et')) return p.slice(0,-2)+'t';
    return p+'t';
}
function genFakePartizips(item){
    const p=item.partizip,aux=item.aux,wrongAux=aux==='haben'?'sein':'haben';
    const fakes=[];
    // 1. Wrong aux + correct partizip
    fakes.push(wrongAux+' '+p);
    // 2. Wrong ending (-t↔-en)
    fakes.push(aux+' '+genFakePForm(p));
    // 3. Missing ge-
    if(p.startsWith('ge')) fakes.push(aux+' '+p.slice(2));
    // 4. Extra ge- where shouldn't be
    if(!p.startsWith('ge')&&!p.includes('ge')) fakes.push(aux+' ge'+p);
    // 5. Wrong ending + wrong aux
    fakes.push(wrongAux+' '+genFakePForm(p));
    // 6. Extra suffix
    if(p.endsWith('t')) fakes.push(aux+' '+p+'et');
    else fakes.push(aux+' '+p+'t');
    // 7. For separable: wrong ge- placement
    const sepPre='auf,an,ein,aus,zu,zurück,mit,um,vor,weg,nach,ab,hin'.split(',');
    for(const sp of sepPre){
        if(p.startsWith(sp+'ge')){
            fakes.push(aux+' ge'+sp+p.slice(sp.length+2));
            break;
        }
    }
    const correct=aux+' '+p;
    return [...new Set(fakes)].filter(f=>f!==correct);
}

function prepareMCQ(){
    const item=APP.quiz.items[APP.quiz.idx],cat=APP.quiz.cat,mode=APP.quiz.mode;
    let label='',display='',hint='',opts=[],correct='',isArt=false;

    if(cat==='words'){
        if(mode==='article'){
            isArt=true;label=UI.chooseArt;display=item.word||item.german;hint=tr(item);
            opts=['der','die','das'];correct=item.article;
        }else if(mode==='de2l1'){
            label=UI.whatMeans;display=item.german;correct=tr(item);
            const ot=shuffle(APP.allWords.filter(x=>x.id!==item.id)).slice(0,3).map(x=>tr(x));
            opts=shuffle([...new Set([...ot,correct])]);
        }else{
            label=UI.howGerman;display=tr(item);correct=item.german;
            const ot=shuffle(APP.allWords.filter(x=>x.id!==item.id)).slice(0,3).map(x=>x.german);
            opts=shuffle([...new Set([...ot,correct])]);
        }
    }else if(cat==='partizip'){
        const P=PARTIZIP2;
        if(mode==='v2p'){
            const fullForm=item.aux+' '+item.partizip;
            label='Wie ist das Perfekt?';display=item.verb;hint=tr(item);correct=fullForm;
            const fakes=genFakePartizips(item);
            const sim=shuffle(P.filter(x=>x.id!==item.id)).slice(0,2).map(x=>x.aux+' '+x.partizip);
            opts=shuffle([...new Set([...fakes.slice(0,4),...sim,correct])]).slice(0,6);
            if(!opts.includes(correct)){opts[5]=correct;opts=shuffle(opts);}
        }else{
            label='Wie sagt man im Perfekt?';display=item.verb;hint=tr(item);
            correct=item.aux+' '+item.partizip;
            const wrongAux=(item.aux==='haben'?'sein':'haben');
            const fakeP=genFakePForm(item.partizip);
            let dis=[wrongAux+' '+item.partizip, item.aux+' '+fakeP, wrongAux+' '+fakeP];
            const sim=shuffle(P.filter(x=>x.id!==item.id)).slice(0,2).map(x=>x.aux+' '+x.partizip);
            opts=shuffle([...new Set([correct,...dis,...sim])]).slice(0,6);
            if(!opts.includes(correct)){opts[5]=correct;opts=shuffle(opts);}
        }
    }else if(cat==='reflexive'){
        if(mode==='case'){
            label='Akkusativ oder Dativ?';display=item.verb;hint=tr(item);
            correct=item.case==='akk'?'Akkusativ':'Dativ';
            opts=['Akkusativ','Dativ'];
        }else{
            const keys=['ich','du','er','wir','ihr','sie'];
            const pronouns=['Ich','Du','Er/Sie/Es','Wir','Ihr','Sie'];
            const pi=Math.floor(Math.random()*6);
            const ctx=RF_SENTENCES[Math.floor(Math.random()*RF_SENTENCES.length)];
            label=pronouns[pi]+' ______ '+ctx+'.';
            display='';
            // Nur die Übersetzung im Hilfesprache zeigen — den deutschen Infinitiv NICHT,
            // weil er sonst die Antwort verrät.
            hint=tr(item);
            correct=item[keys[pi]];
            // Find phonetically similar distractors
            const vBase=item.verb.replace('sich ','');
            const similar=RF_SIMILAR[vBase]||[];
            const simForms=[];
            for(const sv of similar){
                const match=REFLEXIVE.find(x=>x.verb.includes(sv));
                if(match) simForms.push(match[keys[pi]]);
            }
            // Also add same-case verbs
            const sameCase=shuffle(REFLEXIVE.filter(x=>x.id!==item.id&&x.case===item.case));
            // And wrong pronoun (akk↔dat swap for ich/du)
            const wrongPron=[];
            if(pi===0&&item.case==='akk') wrongPron.push(correct.replace(' mich',' mir'));
            if(pi===0&&item.case==='dat') wrongPron.push(correct.replace(' mir',' mich'));
            if(pi===1&&item.case==='akk') wrongPron.push(correct.replace(' dich',' dir'));
            if(pi===1&&item.case==='dat') wrongPron.push(correct.replace(' dir',' dich'));
            let distractors=[
                ...simForms.slice(0,3),
                ...wrongPron,
                ...sameCase.slice(0,4).map(x=>x[keys[pi]])
            ];
            opts=shuffle([...new Set([...distractors.slice(0,5),correct].filter(Boolean))]);
            if(opts.length<4){
                const extra=shuffle(REFLEXIVE.filter(x=>x.id!==item.id)).slice(0,4).map(x=>x[keys[pi]]);
                opts=shuffle([...new Set([...opts,...extra])]).slice(0,6);
            }
        }
    }else if(cat==='prepositions'){
        label=item.sentence.replace('___','______');display='';hint=fullSent(item);
        correct=item.answer;
        // Use exactly the 4 options from the data (designed to be confusing)
        opts=shuffle([...new Set([...item.options,correct])]).slice(0,4);
        if(!opts.includes(correct)){opts[3]=correct;opts=shuffle(opts);}
    }else if(cat==='pronouns'){
        label=item.sentence.replace('___','______');display='';hint=tr(item);
        correct=item.answer;
        // Use exactly the 4 options from the data (case variations of same root)
        opts=shuffle([...new Set([...item.options,correct])]).slice(0,4);
        if(!opts.includes(correct)){opts[3]=correct;opts=shuffle(opts);}
    }else if(cat==='deklination'){
        label=item.sentence.replace('___','______');display='';hint=tr(item);
        correct=item.answer;
        opts=shuffle([...new Set([...item.options,correct])]).slice(0,4);
        if(!opts.includes(correct)){opts[3]=correct;opts=shuffle(opts);}
    }
    return {label,display,hint,opts,correct,isArt};
}

function showMCQ(){
    const q=prepareMCQ();
    const pct=(APP.quiz.idx/APP.quiz.items.length)*100;
    const num=APP.quiz.idx+1,tot=APP.quiz.items.length;
    const cat=APP.quiz.cat;
    // 2-column grid for prepositions/pronouns (4 options) — fits on one screen
    const isGrid=(cat==='prepositions'||cat==='pronouns')&&q.opts.length<=6;
    const btns=q.opts.map(o=>`<button class="answer-btn" data-val="${esc(o)}" data-cor="${esc(q.correct)}" onclick="checkA(this)">${o}</button>`).join('');

    const item=APP.quiz.items[APP.quiz.idx];
    const ticked=APP.quiz.knownTicked&&APP.quiz.knownTicked.has(item.id);
    const tickLbl=tickBtnLabel();
    let mcqRuleBtn='';
    if(cat==='pronouns'&&item.type){const rk='pron_'+item.type;if(typeof RULES!=='undefined'&&RULES[rk])mcqRuleBtn=`<button class="btn btn-outline rule-quiz-btn" onclick="showRule('${rk}',true)">📖</button>`;}
    if(cat==='deklination'){mcqRuleBtn=`<button class="btn btn-outline rule-quiz-btn" onclick="showRule('deklination',true)">📖</button>`;}
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitQ()">&#8592;</button><span class="quiz-progress-text">${num} ${UI.of} ${tot}</span></div>
                <div class="quiz-header-right">
                    ${mcqRuleBtn}<span class="quiz-score" id="qsc">&#10003; ${APP.quiz.score}</span>
                </div>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${q.label}</div>
                ${q.display?`<div class="quiz-word">${q.display}</div>`:''}
                ${q.hint?`<div class="quiz-hint">${q.hint}</div>`:''}
                <button id="tickBtn" class="tick-inline ${ticked?'on':''}" onclick="toggleKnowTick()">${ticked?'☑':'☐'} ${tickLbl}</button>
                <div class="quiz-answers ${q.isArt?'article-mode':''} ${isGrid?'two-col':''} stagger">${btns}</div>
                <div id="mcqExplain" class="mcq-explain" style="display:none"></div>
                <button id="mcqNext" class="btn btn-primary" style="display:none;margin-top:12px" onclick="APP.quiz.idx++;showQ();">${UI.nextBtn||'Weiter'} →</button>
            </div>
        </div>`;
}

// Multilingual label for the "I know this" button
function knowBtnLabel(){
    const l=APP.lang||'ru';
    const M={
        ru:'Знаю — пропустить',
        en:'I know this — skip',
        de:'Kenne ich — überspringen',
        tr:'Biliyorum — atla',
        ar:'أعرف هذا — تخطي',
        fa:'می‌دانم — رد کردن',
        vi:'Tôi biết — bỏ qua'
    };
    return M[l]||M.de;
}

// Mark the current quiz item as known and skip to next question
function markKnownAndSkip(){
    if(!APP.quiz||APP.quiz.idx>=APP.quiz.items.length) return;
    const item=APP.quiz.items[APP.quiz.idx];
    const key=APP.quiz.cat+'_'+APP.quiz.mode;
    markKnown(item.id,key);
    const l=APP.lang||'ru';
    const msgs={
        ru:'✓ Отмечено как известное',
        en:'✓ Marked as known',
        de:'✓ Als bekannt markiert',
        tr:'✓ Bildiğiniz olarak işaretlendi',
        ar:'✓ تم وضع علامة كمعروف',
        fa:'✓ به عنوان شناخته‌شده علامت‌گذاری شد',
        vi:'✓ Đã đánh dấu là đã biết'
    };
    toast(msgs[l]||msgs.en);
    APP.quiz.idx++;
    showQ();
}

function getMCQExplanation(item,cat,userAns,correct,isOk){
    // Build a localized explanation for prepositions / pronouns
    const lang=APP.lang||'ru';
    const T=(ru,en,de,tr,vi,ar,fa)=>({ru,en,de,tr,vi,ar,fa}[lang]||en||de);
    let why='';
    if(cat==='prepositions'){
        const typeNames={
            wechsel:T('Wechselpräposition (Akk/Dat)','Two-way preposition','Wechselpräposition','Yön/Yer edatı','Giới từ hai cách (Akk/Dat)','حرف جر ثنائي (Akk/Dat)','حرف اضافهٔ دوسویه (Akk/Dat)'),
            dativ:T('Präposition mit Dativ','Dative preposition','Präposition + Dativ','Datif edatı','Giới từ với cách Dativ','حرف جر مع الداتيف','حرف اضافهٔ داتیو'),
            akkusativ:T('Präposition mit Akkusativ','Accusative preposition','Präposition + Akkusativ','Akuzatif edatı','Giới từ với cách Akkusativ','حرف جر مع الأكوزاتيف','حرف اضافهٔ آکوزاتیو'),
            genitiv:T('Präposition mit Genitiv','Genitive preposition','Präposition + Genitiv','Genitif edatı','Giới từ với cách Genitiv','حرف جر مع الجينيتيف','حرف اضافهٔ گنیتیو'),
            verb_prep:T('Verb + feste Präposition','Verb + fixed preposition','Verb + feste Präposition','Fiil + sabit edat','Động từ + giới từ cố định','فعل + حرف جر ثابت','فعل + حرف اضافهٔ ثابت'),
            verb_prep_kasus:T('Verb + Präposition + Kasus','Verb + preposition + case','Verb + Präposition + Kasus','Fiil + edat + hâl','Động từ + giới từ + cách','فعل + حرف جر + حالة','فعل + حرف اضافه + حالت'),
            adjektiv_prep:T('Adjektiv + Präposition + Kasus','Adjective + preposition + case','Adjektiv + Präposition + Kasus','Sıfat + edat + hâl','Tính từ + giới từ + cách','صفة + حرف جر + حالة','صفت + حرف اضافه + حالت')
        };
        const tn=typeNames[item.type]||'';
        why=`<b>${correct}</b> — ${tn}`;
        if(item.case) why+=` · <i>${item.case}</i>`;
    }else if(cat==='pronouns'){
        const typeNames={
            personal:T('Personalpronomen','Personal pronoun','Personalpronomen','Şahıs zamiri','Đại từ nhân xưng','ضمير شخصي','ضمیر شخصی'),
            possessiv:T('Possessivpronomen','Possessive pronoun','Possessivpronomen','İyelik zamiri','Đại từ sở hữu','ضمير ملكية','ضمیر ملکی'),
            reflexiv:T('Reflexivpronomen','Reflexive pronoun','Reflexivpronomen','Dönüşlü zamir','Đại từ phản thân','ضمير انعكاسي','ضمیر انعکاسی'),
            relativ:T('Relativpronomen','Relative pronoun','Relativpronomen','İlgi zamiri','Đại từ quan hệ','ضمير الوصل','ضمیر موصولی'),
            demonstrativ:T('Demonstrativpronomen','Demonstrative pronoun','Demonstrativpronomen','İşaret zamiri','Đại từ chỉ định','ضمير الإشارة','ضمیر اشاره'),
            indefinit:T('Indefinitpronomen','Indefinite pronoun','Indefinitpronomen','Belirsiz zamir','Đại từ không xác định','ضمير غير معرف','ضمیر نامعین'),
            frageartikel:T('Frageartikel (welch- / was für ein-)','Question article (welch- / was für ein-)','Frageartikel','Soru artikeli','Mạo từ nghi vấn','أداة السؤال','حرف تعریف پرسشی'),
            artikelwort:T('Artikelwort (dieser/jeder/mancher/solcher/jener)','Determiner (dieser/jeder/mancher/solcher/jener)','Artikelwort','Belirleyici zamir','Mạo từ chỉ định','أداة تعريف','حرف تعریف اشاره')
        };
        const tn=typeNames[item.type]||'';
        why=`<b>${correct}</b> — ${tn}`;
        if(item.case) why+=` · <i>${item.case}</i>`;
    }else if(cat==='deklination'){
        const typeNames={
            n_dekl:T('n-Deklination (schwache Maskulina)','n-Declension (weak masculines)','n-Deklination','n-çekimi (zayıf erilin)','n-Deklination (danh từ nam yếu)','تصريف n (المذكر الضعيف)','تصریف n (مذکر ضعیف)'),
            genitiv_attr:T('Genitiv-Attribut','Genitive attribute','Genitiv-Attribut','Genitif niteleme','Thuộc ngữ Genitiv','صفة المضاف إليه','اضافهٔ ملکی'),
            adj_dekl:T('Adjektivdeklination','Adjective declension','Adjektivdeklination','Sıfat çekimi','Biến cách tính từ','تصريف الصفة','تصریف صفت')
        };
        const tn=typeNames[item.type]||'';
        why=`<b>${correct}</b> — ${tn}`;
        if(item.case) why+=` · <i>${item.case}</i>`;
    }
    const head=isOk
        ? `<div class="mcq-ex-head ok">✓ ${T('Richtig!','Correct!','Richtig!','Doğru!','Đúng rồi!','صحيح!','درست!')}</div>`
        : `<div class="mcq-ex-head err">✗ ${T('Falsch','Wrong','Falsch','Yanlış','Sai','خطأ','اشتباه')} — <s>${esc(userAns)}</s></div>`;
    const trDisplay=item[lang]||item.en||item.german||item.verb||'';
    const trLine=trDisplay?`<div class="mcq-ex-tr">${esc(trDisplay)}</div>`:'';
    let exBlock='';
    if((item.type==='verb_prep_kasus'||item.type==='adjektiv_prep')&&item.example){
        const caseShort=item.case==='Dativ'?'Dat':(item.case==='Akkusativ'?'Akk':(item.case==='Genitiv'?'Gen':item.case));
        const head=item.verb||item.adj||'';
        const formula=esc(head)+' + <b>'+esc(item.prep||'')+'</b> + <b>'+esc(caseShort)+'</b>';
        const tipLabel=T('Beispiel','Example','Beispiel','Örnek','Ví dụ','مثال','مثال');
        exBlock=`<div class="verb-example"><div class="ve-label">${tipLabel}</div>`
              +`<div class="ve-de">${esc(item.example)}</div>`
              +`<div class="ve-formula">${formula}</div></div>`;
    }
    return `${head}<div class="mcq-ex-why">${why}</div>${trLine}${exBlock}`;
}

function checkA(btn){
    const val=btn.dataset.val,cor=btn.dataset.cor,ok=val===cor;
    const item=APP.quiz.items[APP.quiz.idx];
    const cat=APP.quiz.cat;
    if(ok){
        APP.quiz.score++;btn.classList.add('correct');
        // Only persist as "known" if user explicitly ticked the checkmark
        if(APP.quiz.knownTicked&&APP.quiz.knownTicked.has(item.id)){
            markKnown(item.id,APP.quiz.cat+'_'+APP.quiz.mode);
        }
    }else{
        btn.classList.add('incorrect');
        // A wrong answer un-marks the tick — you don't actually know it
        if(APP.quiz.knownTicked) APP.quiz.knownTicked.delete(item.id);
        APP.quiz.wrongs.push({item,userAnswer:val,correct:cor});
        if(navigator.vibrate) navigator.vibrate(100);
    }
    document.querySelectorAll('.answer-btn').forEach(b=>{b.disabled=true;if(b.dataset.val===cor)b.classList.add('correct');});
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+APP.quiz.score;
    if(APP.subliminal) showSubliminal(item);
    // Show explanation animation for prepositions/pronouns/deklination; advance with button
    if(cat==='prepositions'||cat==='pronouns'||cat==='deklination'){
        const ex=$('mcqExplain'),nb=$('mcqNext');
        if(ex){
            ex.innerHTML=getMCQExplanation(item,cat,val,cor,ok);
            ex.style.display='block';
            ex.classList.add('mcq-ex-anim');
            const veEl=ex.querySelector('.verb-example');
            if(veEl) setTimeout(()=>veEl.classList.add('ve-show'),450);
        }
        if(nb) nb.style.display='block';
    }else{
        setTimeout(()=>{APP.quiz.idx++;showQ();},1200);
    }
}

// ============== REFLEXIVE SENTENCES & SIMILAR ==============
const RF_SENTENCES=[
    "nach einem langen Arbeitstag gern",
    "jeden Morgen vor dem Frühstück im Bad schnell",
    "am Wochenende nach dem Sport im Fitnessstudio",
    "heute Abend auf die große Party bei Freunden",
    "an den letzten Sommerurlaub in Spanien immer gern",
    "über die schlechte Note in Mathe sehr",
    "nach der Arbeit im Wohnzimmer auf das Sofa",
    "im Winter vor der Schule immer warm",
    "nach dem Duschen im Badezimmer sorgfältig",
    "seit drei Jahren für klassische Musik sehr",
    "morgens nach dem Aufstehen immer zuerst",
    "abends vor dem Schlafengehen noch schnell",
    "in der Mittagspause im Park kurz",
    "am Montag bei der Chefin über den Kollegen",
    "beim Arzt immer vor der Untersuchung ein bisschen",
    "nach dem Essen auf dem Sofa gemütlich",
    "vor dem Urlaub immer auf die Reise sehr",
    "nach der langen Wanderung in den Bergen langsam",
    "in der neuen Stadt noch nicht so gut",
    "für die schwere Prüfung am Freitag gründlich"
];
const RF_SIMILAR={
    'waschen':['wachsen','wechseln','wünschen'],
    'setzen':['schätzen','stützen','schützen'],
    'freuen':['fühlen','führen','fürchten'],
    'ärgern':['ändern','äußern','anstrengen'],
    'erinnern':['erkälten','erkundigen','erholen'],
    'entscheiden':['entschuldigen','entwickeln','entspannen'],
    'fühlen':['führen','freuen','fürchten'],
    'anziehen':['anmelden','anstrengen','ansehen'],
    'ausruhen':['auskennen','aufregen','aufhalten'],
    'bewegen':['bewerben','beschäftigen','beschweren'],
    'kümmern':['kämmen','konzentrieren','kaufen'],
    'vorstellen':['vorbereiten','vornehmen','verabreden'],
    'unterhalten':['unterscheiden','umziehen','umdrehen'],
    'interessieren':['informieren','irren','isolieren'],
    'verabschieden':['verabreden','verändern','verhalten'],
    'konzentrieren':['kontrollieren','korrigieren','konsultieren'],
    'beschäftigen':['beschweren','bewerben','beeilen'],
    'beeilen':['befinden','bewerben','beschäftigen'],
    'gewöhnen':['gehören','gewinnen','genieren'],
    'bemühen':['befinden','bewegen','bewerben']
};
const RF_CONTEXTS = [
    "jeden Morgen","oft","selten","gern","immer","heute","manchmal",
    "ab und zu","jeden Tag","am Wochenende","morgens","abends",
    "normalerweise","zu Hause","nach der Arbeit","vor dem Essen",
    "schnell","langsam","sofort","regelmäßig"
];

// ============== GRAMMAR HINTS (multilingual) ==============
const HINTS_ML={
    hauptsatz:{de:['Das Verb steht immer auf Position 2.','Subjekt + Verb + Objekt ist die Grundregel.'],
        ru:['Глагол ВСЕГДА на 2-й позиции.','Подлежащее + Глагол + Дополнение — основное правило.'],
        en:['The verb is always in position 2.','Subject + Verb + Object is the basic rule.'],
        tr:['Fiil her zaman 2. pozisyondadır.','Özne + Fiil + Nesne temel kuraldır.'],
        vi:['Động từ LUÔN ở vị trí thứ 2.','Chủ ngữ + Động từ + Tân ngữ là quy tắc cơ bản.'],ar:["الفعل دائماً في الموضع الثاني.","فاعل + فعل + مفعول هي القاعدة الأساسية."],fa:["فعل همیشه در جایگاه ۲ است.","فاعل + فعل + مفعول قاعدهٔ اصلی است."]},
    tekamolo:{de:['Reihenfolge: Temporal → Kausal → Modal → Lokal.','Wann? Warum? Wie? Wo? — TeKaMoLo!'],
        ru:['Порядок: Когда → Почему → Как → Где (TeKaMoLo).','Wann? Warum? Wie? Wo? — TeKaMoLo!'],
        en:['Order: When → Why → How → Where (TeKaMoLo).','Wann? Warum? Wie? Wo? — TeKaMoLo!'],
        tr:['Sıralama: Ne zaman → Neden → Nasıl → Nerede (TeKaMoLo).'],
        vi:['Thứ tự: Thời gian → Lý do → Cách thức → Nơi chốn (TeKaMoLo).','Khi nào? Tại sao? Như thế nào? Ở đâu?'],ar:["الترتيب: الزمن ← السبب ← الطريقة ← المكان (TeKaMoLo).","متى؟ لماذا؟ كيف؟ أين؟ — TeKaMoLo!"],fa:["ترتیب: زمان ← علت ← روش ← مکان (TeKaMoLo).","چه زمانی؟ چرا؟ چگونه؟ کجا؟ — TeKaMoLo!"]},
    modal:{de:['Modalverb auf Position 2, Infinitiv am Ende.'],
        ru:['Модальный глагол на 2-й позиции, инфинитив в конце.'],
        en:['Modal verb in position 2, infinitive at the end.'],
        tr:['Modal fiil 2. pozisyonda, mastar sonda.'],
        vi:['Động từ khuyết thiếu ở vị trí 2, động từ nguyên thể ở cuối câu.'],ar:["الفعل الشكلي في الموضع الثاني، المصدر في النهاية."],fa:["فعل وجهی در جایگاه ۲، مصدر در انتها."]},
    weil:{de:['Nach "weil" steht das Verb am Ende!'],
        ru:['После "weil" (потому что) глагол в КОНЦЕ!'],
        en:['After "weil" (because) the verb goes to the END!'],
        tr:['"weil" (çünkü) den sonra fiil SONA gider!'],
        vi:['Sau "weil" (bởi vì) động từ đi xuống CUỐI câu!'],ar:["بعد \"weil\" (لأن) يأتي الفعل في النهاية!"],fa:["بعد از \"weil\" (چون) فعل به انتها می‌رود!"]},
    dass:{de:['Nach "dass" steht das Verb am Ende!'],
        ru:['После "dass" (что) глагол в КОНЦЕ!'],
        en:['After "dass" (that) the verb goes to the END!'],
        tr:['"dass" (ki) den sonra fiil SONA gider!'],
        vi:['Sau "dass" (rằng) động từ ở CUỐI câu!'],ar:["بعد \"dass\" (أن) يأتي الفعل في النهاية!"],fa:["بعد از \"dass\" (که) فعل در انتهاست!"]},
    wenn:{de:['Nach "wenn" steht das Verb am Ende!'],
        ru:['После "wenn" (если/когда) глагол в КОНЦЕ!'],
        en:['After "wenn" (if/when) the verb goes to the END!'],
        tr:['"wenn" (eğer/ne zaman) dan sonra fiil SONA gider!'],
        vi:['Sau "wenn" (nếu/khi) động từ ở CUỐI câu!'],ar:["بعد \"wenn\" (إذا/عندما) يأتي الفعل في النهاية!"],fa:["بعد از \"wenn\" (اگر/وقتی) فعل در انتهاست!"]},
    als:{de:['Nach "als" steht das Verb am Ende!'],
        ru:['После "als" (когда — одноразово в прошлом) глагол в КОНЦЕ!'],
        en:['After "als" (when — one-time past) verb goes to the END!'],
        tr:['"als" (ne zaman — geçmişte bir kez) dan sonra fiil SONA gider!'],
        vi:['Sau "als" (khi — sự kiện đơn lẻ trong quá khứ) động từ ở CUỐI câu!'],ar:["بعد \"als\" (عندما — حدث مرة في الماضي) يأتي الفعل في النهاية!"],fa:["بعد از \"als\" (وقتی — گذشتهٔ یک‌بار) فعل در انتهاست!"]},
    ob:{de:['Nach "ob" steht das Verb am Ende!'],
        ru:['После "ob" (ли — косвенный вопрос) глагол в КОНЦЕ!'],
        en:['After "ob" (whether) the verb goes to the END!'],
        tr:['"ob" (acaba) dan sonra fiil SONA gider!'],
        vi:['Sau "ob" (liệu có) động từ ở CUỐI câu!'],ar:["بعد \"ob\" (ما إذا) يأتي الفعل في النهاية!"],fa:["بعد از \"ob\" (آیا) فعل در انتهاست!"]},
    obwohl:{de:['Nach "obwohl" steht das Verb am Ende!'],
        ru:['После "obwohl" (хотя) глагол в КОНЦЕ!'],
        en:['After "obwohl" (although) the verb goes to the END!'],
        tr:['"obwohl" (rağmen) den sonra fiil SONA gider!'],
        vi:['Sau "obwohl" (mặc dù) động từ ở CUỐI câu!'],ar:["بعد \"obwohl\" (على الرغم من) يأتي الفعل في النهاية!"],fa:["بعد از \"obwohl\" (اگرچه) فعل در انتهاست!"]},
    damit:{de:['Nach "damit" steht das Verb am Ende!'],
        ru:['После "damit" (чтобы, разные субъекты) глагол в КОНЦЕ!'],
        en:['After "damit" (so that, different subjects) verb goes to the END!'],
        tr:['"damit" (diye, farklı özneler) den sonra fiil SONA gider!'],
        vi:['Sau "damit" (để, chủ ngữ khác nhau) động từ ở CUỐI câu!'],ar:["بعد \"damit\" (لكي، فاعل مختلف) يأتي الفعل في النهاية!"],fa:["بعد از \"damit\" (برای اینکه، فاعل متفاوت) فعل در انتهاست!"]},
    um_zu:{de:['um + zu + Infinitiv am Ende.'],
        ru:['um...zu + инфинитив в конце (чтобы, одинаковый субъект).'],
        en:['um...zu + infinitive at the end (in order to, same subject).'],
        tr:['um...zu + mastar sonda (amacıyla, aynı özne).'],
        vi:['um...zu + động từ nguyên thể ở cuối (để, cùng chủ ngữ).'],ar:["um + zu + مصدر في النهاية (لكي، نفس الفاعل)."],fa:["um + zu + مصدر در انتها (برای، فاعل یکسان)."]},
    zu_infinitiv:{de:['zu + Infinitiv steht am Ende. Bei trennbaren Verben: ein|zu|parken.'],
        ru:['"zu + инфинитив" стоит в конце. У отделяемых глаголов zu идёт между приставкой и основой: einzuparken.'],
        en:['"zu + infinitive" goes at the end. With separable verbs zu sits between prefix and stem: einzuparken.'],
        tr:['"zu + mastar" sonda yer alır. Ayrılabilir fiillerde zu, ön ek ile kök arasına girer: einzuparken.'],
        vi:['"zu + động từ nguyên thể" đứng ở cuối câu. Với động từ tách được: ein|zu|parken.'],ar:["\"zu + المصدر\" يأتي في نهاية الجملة. مع الأفعال القابلة للفصل: einzuparken."],fa:["«zu + مصدر» در انتها قرار می‌گیرد. در افعال جداشدنی zu میان پیشوند و ریشه می‌آید: einzuparken."]},
    indirekt_w:{de:['Indirekte W-Frage: W-Wort + Subjekt + ... + Verb am Ende.'],
        ru:['Косвенный W-вопрос: W-слово + подлежащее + ... + глагол в КОНЦЕ. Запятая перед W-словом.'],
        en:['Indirect W-question: W-word + subject + ... + verb at the END. Comma before the W-word.'],
        tr:['Dolaylı W-sorusu: W-kelimesi + özne + ... + fiil SONDA. W-kelimesinden önce virgül.'],
        vi:['Câu hỏi W gián tiếp: từ W + chủ ngữ + ... + động từ ở CUỐI. Có dấu phẩy trước từ W.'],ar:["السؤال غير المباشر بـ W: كلمة W + الفاعل + ... + الفعل في النهاية. فاصلة قبل كلمة W."],fa:["پرسش غیرمستقیم با W: واژهٔ W + فاعل + ... + فعل در انتها. ویرگول پیش از واژهٔ W."]},
    negation:{de:['kein- vor Substantiv ohne Artikel/mit ein-. nicht steht meist am Ende, aber VOR Adjektiv/Adverb/PP/Infinitiv/Partizip/trennbarer Vorsilbe.'],
        ru:['kein — перед существительным без артикля или с ein-. nicht обычно в конце, но ПЕРЕД прилагательным/наречием/предлогом/инфинитивом/Partizip/отделяемой приставкой.'],
        en:['kein — before a noun without article or with ein-. nicht usually goes at the end, but BEFORE an adjective/adverb/PP/infinitive/Partizip/separable prefix.'],
        tr:['kein — artikelsiz veya ein- ile başlayan isimden önce. nicht genelde sonda olur, ancak sıfat/zarf/edat öbeği/mastar/Partizip/ayrılabilir ön ek ÖNCESİNDE.'],
        vi:['kein — trước danh từ không có mạo từ hoặc có ein-. nicht thường đứng ở cuối, nhưng đứng TRƯỚC tính từ/trạng từ/cụm giới từ/động từ nguyên thể/Partizip/tiền tố tách được.'],ar:["kein قبل اسم بلا أداة أو مع ein-. nicht عادة في النهاية، لكن قبل الصفة/الظرف/شبه الجملة/المصدر/Partizip/البادئة المنفصلة."],fa:["kein پیش از اسم بدون حرف تعریف یا با ein-. nicht معمولاً در انتها می‌آید، اما پیش از صفت/قید/گروه حرف اضافه/مصدر/Partizip/پیشوند جداشدنی."]},
    koord:{de:['und/oder/doch stehen auf Position 0 — sie verändern die Wortstellung NICHT. Verb des 2. Hauptsatzes bleibt auf Position 2.'],
        ru:['und/oder/doch стоят на нулевой позиции — они НЕ меняют порядок слов. Глагол второго главного предложения остаётся на 2-й позиции.'],
        en:['und/oder/doch sit on Position 0 — they do NOT affect word order. The verb of the 2nd main clause stays in Position 2.'],
        tr:['und/oder/doch sıfır pozisyonda yer alır — kelime sırasını değiştirmez. İkinci ana cümlenin fiili 2. pozisyonda kalır.'],
        vi:['und/oder/doch đứng ở vị trí 0 — chúng KHÔNG ảnh hưởng đến trật tự từ. Động từ của mệnh đề chính thứ 2 vẫn ở vị trí 2.'],ar:["und/oder/doch تأتي في الموقع 0 — لا تُغيّر ترتيب الكلمات. فعل الجملة الرئيسية الثانية يبقى في الموقع 2."],fa:["und/oder/doch در موقعیت ۰ قرار می‌گیرند — ترتیب کلمات را تغییر نمی‌دهند. فعل جملهٔ اصلی دوم در موقعیت ۲ باقی می‌ماند."]},
    praeteritum:{de:['Präteritum = schriftliche Erzählform (Roman, Märchen, Zeitung). Im Gespräch: fast immer Perfekt, außer sein/haben/werden/Modalverben.','Schwache Verben: Stamm + -te/-test/-te/-ten/-tet/-ten (lernen→lernte). Auf t/d: -ete (arbeit-ete).','Starke Verben: Vokalwechsel im Stamm, keine -te (gehen→ging, kommen→kam, sehen→sah). 1./3. Pers. Sg. OHNE Endung.','Unregelmäßig häufig: sein→war, haben→hatte, werden→wurde, können→konnte, müssen→musste, wollen→wollte, dürfen→durfte, sollen→sollte, mögen→mochte, wissen→wusste, bringen→brachte, denken→dachte.'],
        ru:['Präteritum — письменная (литературная/газетная) форма прошедшего. В разговоре обычно Perfekt, КРОМЕ sein/haben/werden и модальных — они почти всегда в Präteritum.','Слабые (правильные) глаголы: основа + -te/-test/-te/-ten/-tet/-ten (lernen→lernte). После t/d — -ete: arbeitete.','Сильные глаголы: смена гласной + особые формы (gehen→ging, kommen→kam, sehen→sah). 1-е и 3-е лицо ед.ч. БЕЗ окончания.','Самые частые: sein→war, haben→hatte, werden→wurde, können→konnte, müssen→musste, wollen→wollte, dürfen→durfte, sollen→sollte, mögen→mochte, wissen→wusste, bringen→brachte, denken→dachte.'],
        en:['Präteritum = the written past tense (novels, fairy tales, newspapers). In speech Germans mostly use the Perfekt, EXCEPT sein/haben/werden and modal verbs — these are almost always in Präteritum.','Weak verbs: stem + -te/-test/-te/-ten/-tet/-ten (lernen→lernte). Stems in t/d take -ete (arbeit-ete).','Strong verbs: vowel change in the stem, no -te (gehen→ging, kommen→kam, sehen→sah). 1st/3rd person singular have NO ending.','Very frequent: sein→war, haben→hatte, werden→wurde, können→konnte, müssen→musste, wollen→wollte, dürfen→durfte, sollen→sollte, mögen→mochte, wissen→wusste, bringen→brachte, denken→dachte.'],
        tr:['Präteritum yazılı geçmiş zamandır (roman, masal, gazete). Konuşmada Perfekt kullanılır — ama sein/haben/werden ve modal fiiller neredeyse her zaman Präteritum ile.','Zayıf (kurallı) fiiller: kök + -te/-test/-te/-ten/-tet/-ten (lernen→lernte). t/d ile biten köklerde -ete: arbeitete.','Kuvvetli fiiller: kökte ünlü değişimi, -te YOK (gehen→ging, kommen→kam, sehen→sah). 1. ve 3. tekil kişi ekSIZdir.','En sık kullanılanlar: sein→war, haben→hatte, werden→wurde, können→konnte, müssen→musste, wollen→wollte, dürfen→durfte, sollen→sollte, mögen→mochte, wissen→wusste, bringen→brachte, denken→dachte.'],
        vi:['Präteritum là thì quá khứ văn viết (tiểu thuyết, truyện cổ tích, báo chí). Trong hội thoại người Đức dùng Perfekt — NGOẠI TRỪ sein/haben/werden và các động từ khiếm khuyết: chúng hầu như luôn ở Präteritum.','Động từ yếu: gốc + -te/-test/-te/-ten/-tet/-ten (lernen→lernte). Gốc kết thúc t/d dùng -ete (arbeitete).','Động từ mạnh: đổi nguyên âm trong gốc, KHÔNG có -te (gehen→ging, kommen→kam, sehen→sah). Ngôi 1 và 3 số ít KHÔNG có đuôi.','Rất thường gặp: sein→war, haben→hatte, werden→wurde, können→konnte, müssen→musste, wollen→wollte, dürfen→durfte, sollen→sollte, mögen→mochte, wissen→wusste, bringen→brachte, denken→dachte.'],
        ar:["Präteritum هو صيغة الماضي المكتوبة (روايات، حكايات، صحف). في المحادثة يُستخدم Perfekt، باستثناء sein/haben/werden والأفعال الشكلية — هذه دائماً بصيغة Präteritum.","الأفعال الضعيفة (المنتظمة): الجذر + -te/-test/-te/-ten/-tet/-ten (lernen→lernte). الجذور المنتهية بـ t/d تأخذ -ete (arbeitete).","الأفعال القوية: تغيير في حرف العلة في الجذر، بلا -te (gehen→ging, kommen→kam, sehen→sah). الشخص الأول والثالث المفرد بلا نهاية.","الأكثر شيوعاً: sein→war, haben→hatte, werden→wurde, können→konnte, müssen→musste, wollen→wollte, dürfen→durfte, sollen→sollte, mögen→mochte, wissen→wusste, bringen→brachte, denken→dachte."],
        fa:["Präteritum زمان گذشتهٔ نوشتاری است (رمان، افسانه، روزنامه). در مکالمه معمولاً Perfekt به کار می‌رود — به جز sein/haben/werden و افعال وجهی که تقریباً همیشه در Präteritum می‌آیند.","افعال ضعیف (باقاعده): ریشه + -te/-test/-te/-ten/-tet/-ten (lernen→lernte). ریشه‌های ختم‌شده به t/d با -ete می‌آیند (arbeitete).","افعال قوی: تغییر مصوت در ریشه، بدون -te (gehen→ging, kommen→kam, sehen→sah). اول و سوم شخص مفرد بدون پایانه.","پرکاربرد‌ترین‌ها: sein→war, haben→hatte, werden→wurde, können→konnte, müssen→musste, wollen→wollte, dürfen→durfte, sollen→sollte, mögen→mochte, wissen→wusste, bringen→brachte, denken→dachte."]},
    komparativ:{de:['Komparativ: Adjektiv + -er + als (größer als). Viele kurze Adjektive bekommen Umlaut: alt→älter, warm→wärmer.','Superlativ prädikativ: am + Adjektiv + -sten (am schnellsten). Attributiv: der/die/das + Adjektiv + -ste (der schnellste Läufer).','Unregelmäßig: gut→besser→am besten · viel→mehr→am meisten · gern→lieber→am liebsten · hoch→höher→am höchsten · nah→näher→am nächsten.','Gleichheit: (genau)so + Adjektiv + wie. Ungleichheit: nicht so ... wie.'],
        ru:['Komparativ: прилагательное + -er + als (больше чем). У многих коротких прилагательных появляется умлаут: alt→älter, warm→wärmer.','Superlativ предикативный: am + прилагательное + -sten (am schnellsten). Атрибутивный: der/die/das + прил. + -ste.','Исключения: gut→besser→am besten · viel→mehr→am meisten · gern→lieber→am liebsten · hoch→höher · nah→näher→am nächsten.','Равенство: (genau)so + прил. + wie. Неравенство: nicht so ... wie.'],
        en:['Comparative: adjective + -er + als (bigger than). Many short adjectives take an umlaut: alt→älter, warm→wärmer.','Predicative superlative: am + adjective + -sten (am schnellsten). Attributive: der/die/das + adj. + -ste.','Irregular: gut→besser→am besten · viel→mehr→am meisten · gern→lieber→am liebsten · hoch→höher · nah→näher→am nächsten.','Equality: (genau)so + adj. + wie. Inequality: nicht so ... wie.'],
        tr:['Komparativ: sıfat + -er + als (-den daha). Kısa sıfatların çoğu umlaut alır: alt→älter, warm→wärmer.','Yüklemsel superlatif: am + sıfat + -sten (am schnellsten). Sıfat tamlamasında: der/die/das + sıfat + -ste.','Kuraldışı: gut→besser→am besten · viel→mehr→am meisten · gern→lieber → am liebsten · hoch→höher · nah→näher.','Eşitlik: (genau)so + sıfat + wie. Eşitsizlik: nicht so ... wie.'],
        vi:['Komparativ: tính từ + -er + als (hơn...). Nhiều tính từ ngắn chuyển sang có umlaut: alt→älter, warm→wärmer.','Superlativ vị ngữ: am + tính từ + -sten. Superlativ định ngữ: der/die/das + tính từ + -ste.','Bất quy tắc: gut→besser→am besten · viel→mehr→am meisten · gern→lieber→am liebsten · hoch→höher · nah→näher.','So sánh bằng: (genau)so + tính từ + wie. So sánh không bằng: nicht so ... wie.'],
        ar:["Komparativ: صفة + -er + als (أكثر من). كثير من الصفات القصيرة تأخذ umlaut: alt→älter, warm→wärmer.","Superlativ في الخبر: am + صفة + -sten. في الصفة النعتية: der/die/das + صفة + -ste.","الصفات الشاذة: gut→besser→am besten · viel→mehr→am meisten · gern→lieber→am liebsten · hoch→höher · nah→näher.","المساواة: (genau)so + صفة + wie. عدم المساواة: nicht so ... wie."],
        fa:["Komparativ: صفت + -er + als (…تر از). بسیاری از صفات کوتاه umlaut می‌گیرند: alt→älter, warm→wärmer.","Superlativ خبری: am + صفت + -sten. Superlativ وصفی: der/die/das + صفت + -ste.","بی‌قاعده‌ها: gut→besser→am besten · viel→mehr→am meisten · gern→lieber→am liebsten · hoch→höher · nah→näher.","برابری: (genau)so + صفت + wie. نابرابری: nicht so ... wie."]},
    zeitmass_akk:{de:['Dauer / Wiederholung / Maße ohne Präposition stehen im AKKUSATIV: einen Monat, jeden Tag, einen Meter, zwei Wochen.','jeden / jede / jedes + maskulin/neutrum/feminin im Akk.'],
        ru:['Длительность / повтор / меры БЕЗ ПРЕДЛОГА — в Akkusativ: einen Monat, jeden Tag, einen Meter, zwei Wochen.','jeden (m) / jede (f) / jedes (n) — формы Akkusativ.'],
        en:['Duration / repetition / measures WITHOUT a preposition take the ACCUSATIVE: einen Monat, jeden Tag, einen Meter, zwei Wochen.','jeden (m) / jede (f) / jedes (n) — accusative forms.'],
        tr:['Edatsız süre / tekrar / ölçüler AKKUSATİF alır: einen Monat, jeden Tag, einen Meter, zwei Wochen.','jeden (eril) / jede (dişil) / jedes (nötr) — akkusatif biçimleri.'],
        vi:['Thời lượng / sự lặp lại / kích thước KHÔNG có giới từ dùng AKKUSATIV: einen Monat, jeden Tag, einen Meter, zwei Wochen.','jeden (m) / jede (f) / jedes (n) là dạng Akkusativ.'],
        ar:["المدة / التكرار / القياسات بدون حرف جر في حالة النصب: einen Monat، jeden Tag، einen Meter، zwei Wochen.","jeden (مذكر) / jede (مؤنث) / jedes (محايد) — صيغ النصب."],
        fa:["مدت / تکرار / اندازه‌ها بدون حرف اضافه در حالت Akkusativ می‌آیند: einen Monat، jeden Tag، einen Meter، zwei Wochen.","jeden (مذکر) / jede (مؤنث) / jedes (خنثی) — اشکال Akkusativ."]},
    trotzdem:{de:['Nach "trotzdem" — Verb auf Position 2!'],
        ru:['После "trotzdem" (тем не менее) — глагол на 2-й позиции! Главное предложение.'],
        en:['After "trotzdem" (nevertheless) — verb in position 2! Main clause.'],
        tr:['"trotzdem" (buna rağmen) dan sonra fiil 2. pozisyonda!'],
        vi:['Sau "trotzdem" (tuy nhiên) — động từ ở vị trí 2! Mệnh đề chính.'],ar:["بعد \"trotzdem\" (مع ذلك) — الفعل في الموضع الثاني! جملة رئيسية."],fa:["بعد از \"trotzdem\" (با این حال) — فعل در جایگاه ۲! جملهٔ اصلی."]},
    deshalb:{de:['Nach "deshalb" — Verb auf Position 2!'],
        ru:['После "deshalb" (поэтому) — глагол на 2-й позиции!'],
        en:['After "deshalb" (therefore) — verb in position 2!'],
        tr:['"deshalb" (bu yüzden) dan sonra fiil 2. pozisyonda!'],
        vi:['Sau "deshalb" (do đó) — động từ ở vị trí 2!'],ar:["بعد \"deshalb\" (لذلك) — الفعل في الموضع الثاني!"],fa:["بعد از \"deshalb\" (به همین دلیل) — فعل در جایگاه ۲!"]},
    denn:{de:['Nach "denn" — normale Wortstellung!'],
        ru:['После "denn" (потому что) — обычный порядок слов, глагол на 2-й позиции!'],
        en:['After "denn" (because) — normal word order, verb in position 2!'],
        tr:['"denn" (çünkü) den sonra normal sözcük sırası!'],
        vi:['Sau "denn" (vì) — trật tự từ bình thường, động từ ở vị trí 2!'],ar:["بعد \"denn\" (لأن) — ترتيب الكلمات عادي، الفعل في الموضع الثاني!"],fa:["بعد از \"denn\" (زیرا) — ترتیب عادی کلمات، فعل در جایگاه ۲!"]},
    aber:{de:['Nach "aber" — normale Wortstellung!'],
        ru:['После "aber" (но) — обычный порядок слов.'],
        en:['After "aber" (but) — normal word order.'],
        tr:['"aber" (ama) dan sonra normal sözcük sırası.'],
        vi:['Sau "aber" (nhưng) — trật tự từ bình thường.'],ar:["بعد \"aber\" (لكن) — ترتيب الكلمات عادي."],fa:["بعد از \"aber\" (اما) — ترتیب عادی کلمات."]},
    sondern:{de:['nicht...sondern — Korrektur einer Aussage.'],
        ru:['nicht...sondern (не...а) — исправление утверждения.'],
        en:['nicht...sondern (not...but rather) — correcting a statement.'],
        tr:['nicht...sondern (değil...aksine) — bir ifadeyi düzeltme.'],
        vi:['nicht...sondern (không...mà là) — sửa một câu khẳng định.'],ar:["nicht...sondern (ليس...بل) — لتصحيح جملة."],fa:["nicht...sondern (نه...بلکه) — اصلاح یک گزاره."]},
    nachdem:{de:['Nach "nachdem" — Verb am Ende + Plusquamperfekt!'],
        ru:['После "nachdem" (после того как) — глагол в конце + Plusquamperfekt!'],
        en:['After "nachdem" (after) — verb at end + past perfect!'],
        tr:['"nachdem" (sonra) dan sonra fiil sonda + Plusquamperfekt!'],
        vi:['Sau "nachdem" (sau khi) — động từ ở cuối + Plusquamperfekt!'],ar:["بعد \"nachdem\" (بعد أن) — الفعل في النهاية + الماضي التام!"],fa:["بعد از \"nachdem\" (پس از اینکه) — فعل در انتها + گذشتهٔ کامل!"]},
    bevor:{de:['Nach "bevor" — Verb am Ende!'],
        ru:['После "bevor" (прежде чем) — глагол в КОНЦЕ!'],
        en:['After "bevor" (before) — verb at the END!'],
        tr:['"bevor" (önce) den sonra fiil SONDA!'],
        vi:['Sau "bevor" (trước khi) — động từ ở CUỐI câu!'],ar:["بعد \"bevor\" (قبل أن) — الفعل في النهاية!"],fa:["بعد از \"bevor\" (قبل از) — فعل در انتها!"]},
    waehrend:{de:['Nach "während" — Verb am Ende!'],
        ru:['После "während" (в то время как) — глагол в КОНЦЕ!'],
        en:['After "während" (while) — verb at the END!'],
        tr:['"während" (iken) den sonra fiil SONDA!'],
        vi:['Sau "während" (trong khi) — động từ ở CUỐI câu!'],ar:["بعد \"während\" (بينما) — الفعل في النهاية!"],fa:["بعد از \"während\" (در حالی که) — فعل در انتها!"]},
    seitdem:{de:['Nach "seitdem" — Verb am Ende!'],ru:['После "seitdem" (с тех пор как) — глагол в КОНЦЕ!'],en:['After "seitdem" (since) — verb at the END!'],tr:['"seitdem" dan sonra fiil SONDA!'],vi:['Sau "seitdem" (từ khi) — động từ ở CUỐI câu!'],ar:["بعد \"seitdem\" (منذ أن) — الفعل في النهاية!"],fa:["بعد از \"seitdem\" (از زمانی که) — فعل در انتها!"]},
    bis:{de:['Nach "bis" — Verb am Ende!'],ru:['После "bis" (пока не) — глагол в КОНЦЕ!'],en:['After "bis" (until) — verb at the END!'],tr:['"bis" (kadar) dan sonra fiil SONDA!'],vi:['Sau "bis" (cho đến khi) — động từ ở CUỐI câu!'],ar:["بعد \"bis\" (حتى) — الفعل في النهاية!"],fa:["بعد از \"bis\" (تا اینکه) — فعل در انتها!"]},
    sobald:{de:['Nach "sobald" — Verb am Ende!'],ru:['После "sobald" (как только) — глагол в КОНЦЕ!'],en:['After "sobald" (as soon as) — verb at the END!'],tr:['"sobald" (hemen) dan sonra fiil SONDA!'],vi:['Sau "sobald" (ngay khi) — động từ ở CUỐI câu!'],ar:["بعد \"sobald\" (بمجرد أن) — الفعل في النهاية!"],fa:["بعد از \"sobald\" (به محض اینکه) — فعل در انتها!"]},
    relativ:{de:['Relativpronomen + Verb am Ende!'],ru:['Относительное местоимение (der/die/das) + глагол в КОНЦЕ!'],en:['Relative pronoun + verb at the END!'],tr:['İlgi zamiri + fiil SONDA!'],vi:['Đại từ quan hệ (der/die/das) + động từ ở CUỐI câu!'],ar:["ضمير الوصل (der/die/das) + الفعل في النهاية!"],fa:["ضمیر موصولی (der/die/das) + فعل در انتها!"]},
    passiv:{de:['Passiv: werden + Partizip II'],ru:['Пассив: werden + Partizip II. Дом строится = Das Haus wird gebaut.'],en:['Passive: werden + past participle.'],tr:['Edilgen: werden + Partizip II.'],vi:['Bị động: werden + Partizip II. Ngôi nhà được xây = Das Haus wird gebaut.'],ar:["المبني للمجهول: werden + اسم المفعول. البيت يُبنى = Das Haus wird gebaut."],fa:["مجهول: werden + اسم مفعول. خانه ساخته می‌شود = Das Haus wird gebaut."]},
    konjunktiv:{de:['Konjunktiv II: würde/wäre/hätte'],ru:['Сослагательное: würde/wäre/hätte. Если бы я был богат = Wenn ich reich wäre...'],en:['Subjunctive II: würde/wäre/hätte. If I were rich...'],tr:['Dilek kipi: würde/wäre/hätte.'],vi:['Thức giả định II: würde/wäre/hätte. Nếu tôi giàu = Wenn ich reich wäre...'],ar:["الصيغة الشرطية II: würde/wäre/hätte. لو كنت غنياً = Wenn ich reich wäre..."],fa:["وجه التزامی II: würde/wäre/hätte. اگر ثروتمند بودم = Wenn ich reich wäre..."]},
    je_desto:{de:['Je + Komparativ, desto + Komparativ + Verb'],ru:['Je...desto: Чем больше..., тем лучше... Je mehr, desto besser.'],en:['Je...desto: The more..., the better...'],tr:['Je...desto: Ne kadar çok..., o kadar iyi...'],vi:['Je...desto: Càng nhiều..., càng tốt... Je mehr, desto besser.'],ar:["Je + مقارن، desto + مقارن + فعل. كلما... كلما..."],fa:["Je + صفت تفضیلی، desto + صفت تفضیلی + فعل. هرچه بیشتر...همان‌قدر بهتر..."]},
    textbau:{de:['Erstens, zweitens, darüber hinaus, zusammenfassend...'],ru:['Структура текста: Во-первых, во-вторых, кроме того, в итоге...'],en:['Text structure: Firstly, secondly, furthermore, in conclusion...'],tr:['Metin yapısı: Birincisi, ikincisi, ayrıca, sonuç olarak...'],vi:['Cấu trúc văn bản: Thứ nhất, thứ hai, ngoài ra, tóm lại...'],ar:["بنية النص: أولاً، ثانياً، علاوة على ذلك، في الختام..."],fa:["ساختار متن: نخست، دوم، علاوه بر این، در نهایت..."]},
    da:{de:['Nach "da" — Verb am Ende! Wie "weil", aber formell.'],
        ru:['После "da" (так как) — глагол в КОНЦЕ. Как "weil", но формально.'],
        en:['After "da" (since) — verb at the END. Like "weil", but formal.'],
        tr:['"da" (-dığı için) den sonra fiil SONDA. "weil" gibi, ama resmî.'],
        vi:['Sau "da" (vì) — động từ ở CUỐI. Giống "weil" nhưng trang trọng.'],
        ar:["بعد \"da\" (بما أن) — الفعل في النهاية. مثل \"weil\" ولكن رسمي."],
        fa:["بعد از \"da\" (از آنجا که) — فعل در انتها. مثل \"weil\" اما رسمی."]},
    falls:{de:['Nach "falls" — Verb am Ende! Bedingung wie "wenn", formell.'],
        ru:['После "falls" (на случай если) — глагол в КОНЦЕ. Условие, формальный стиль.'],
        en:['After "falls" (in case) — verb at the END. Conditional, formal.'],
        tr:['"falls" (-se diye) den sonra fiil SONDA. Koşul, resmî.'],
        vi:['Sau "falls" (phòng khi) — động từ ở CUỐI. Điều kiện, trang trọng.'],
        ar:["بعد \"falls\" (في حال) — الفعل في النهاية. شرط، أسلوب رسمي."],
        fa:["بعد از \"falls\" (در صورتی که) — فعل در انتها. شرط، رسمی."]}
};
function getHints(cat){
    const h=HINTS_ML[cat];
    if(!h) return ['Achte auf die Wortstellung!'];
    return h[APP.lang]||(APP.lang==='ru'?h.ru:h.en)||h.de||h.ru||['Achte auf die Wortstellung!'];
}

// ============== SENTENCE BUILDER ==============
// ============== SENTENCE SPLITTING + EXTRA DISTRACTORS ==============
function splitPart(s){
    // Split ALL phrases into individual words — no multi-word chips
    return s.split(/\s+/).filter(w=>w);
}
function splitSentenceParts(arr){
    const out=[];
    for(const p of arr) out.push(...splitPart(p));
    return out;
}
function genExtraDistractors(item){
    const extras=[];
    const connAlts={weil:['dass','denn'],dass:['weil','ob'],wenn:['als','weil'],als:['wenn'],ob:['dass','weil'],obwohl:['weil','trotzdem'],trotzdem:['deshalb','obwohl'],deshalb:['trotzdem','weil'],denn:['weil'],aber:['und','oder'],sondern:['aber'],damit:['weil','um'],nachdem:['bevor'],bevor:['nachdem'],da:['weil','denn'],falls:['wenn','ob']};
    const modalAlts={möchte:['will','kann'],muss:['soll','kann'],kann:['darf','muss'],darf:['kann'],soll:['muss'],will:['möchte']};
    const subjAlts={ich:['du','er'],du:['ich','er'],er:['sie','ich'],sie:['er','wir'],wir:['sie','ihr'],ihr:['wir','sie']};
    for(const w of item.correct){
        const lo=w.toLowerCase().replace(/[,.:?!]/g,'');
        if(connAlts[lo]) extras.push(...connAlts[lo]);
        if(modalAlts[lo]) extras.push(...modalAlts[lo]);
        if(subjAlts[lo]) extras.push(...subjAlts[lo]);
    }
    return extras.filter(e=>!item.correct.includes(e)&&!(item.distractors||[]).includes(e));
}
function showBuilder(){
    const item=APP.quiz.items[APP.quiz.idx];
    // Split phrases and generate extra distractors
    const splitCorrect=splitSentenceParts(item.correct);
    const splitDist=splitSentenceParts(item.distractors||[]);
    const extra=genExtraDistractors(item);
    APP.quiz.allW=shuffle([...splitCorrect,...splitDist,...extra.slice(0,3)]);
    APP.quiz.built=[];
    APP.quiz.correctS=splitCorrect;
    APP.quiz.checked=false;
    APP.quiz.hintUsed=false;
    renderBuilder();
}
function renderBuilder(){
    const item=APP.quiz.items[APP.quiz.idx];
    const pct=(APP.quiz.idx/APP.quiz.items.length)*100;
    const num=APP.quiz.idx+1,tot=APP.quiz.items.length;
    const checked=APP.quiz.checked;
    let builtH='';
    if(checked){
        // After check: show per-word green/red
        const built=APP.quiz.built.map(i=>APP.quiz.allW[i]);
        const correct=APP.quiz.correctS;
        builtH=built.map((w,i)=>{
            const isRight=i<correct.length&&w===correct[i];
            return `<span class="word-chip ${isRight?'wc-correct':'wc-wrong'}">${esc(w)}</span>`;
        }).join('');
        // Show missing words if built is shorter
        if(built.length<correct.length){
            for(let i=built.length;i<correct.length;i++){
                builtH+=`<span class="word-chip wc-wrong" style="opacity:0.4">___</span>`;
            }
        }
    }else{
        builtH=APP.quiz.built.map((wi,i)=>`<button class="word-chip selected" onclick="removeWord(${i})">${esc(APP.quiz.allW[wi])}</button>`).join('');
    }
    const poolH=checked?'':APP.quiz.allW.map((w,i)=>{
        const used=APP.quiz.built.includes(i);
        return `<button class="word-chip${used?' used':''}" onclick="addWord(${i})" ${used?'disabled':''}>${esc(w)}</button>`;
    }).join('');

    // Correct answer display after check
    let correctLine='';
    if(checked){
        correctLine=`<div style="margin-top:12px;padding:10px;background:var(--success);color:#fff;border-radius:10px;font-weight:600;text-align:center">${APP.quiz.correctS.join(' ')}</div>`;
    }

    // Hint area
    let hintArea='';
    if(APP.quiz.hintUsed){
        const hints=getHints(item.cat);
        hintArea=`<div class="hint-box">${hints.map(h=>'💡 '+esc(h)).join('<br>')}</div>`;
    }

    // Buttons
    let btns='';
    if(checked){
        btns=`<button class="btn btn-primary" onclick="nextBuilder()" style="margin-top:12px">${UI.nextBtn} →</button>`;
    }else{
        btns=`<div style="display:flex;gap:8px;margin-top:12px">
            <button class="btn btn-outline" onclick="showHint()" style="flex:1">${UI.hintBtn} 💡</button>
            <button class="btn btn-primary" onclick="checkBuilder()" style="flex:2">${UI.checkBtn}</button>
        </div>`;
    }
    const tickedB=APP.quiz.knownTicked&&APP.quiz.knownTicked.has(item.id);
    const tickLblB=tickBtnLabel();

    // Regel button for current sentence rule (per-item or per-mode)
    const itemCat=item.cat||APP.quiz.mode;
    const ruleKey='satz_'+itemCat;
    const hasItemRule=typeof RULES!=='undefined'&&RULES[ruleKey];
    const ruleBtnH=hasItemRule?`<button class="btn btn-outline rule-quiz-btn" onclick="showRule('${ruleKey}',true)">📖 Regel</button>`:'';

    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitQ()">&#8592;</button><span class="quiz-progress-text">${num} ${UI.of} ${tot}</span></div>
                <div class="quiz-header-right">
                    <span class="quiz-score" id="qsc">&#10003; ${APP.quiz.score}</span>
                </div>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${item.rule||UI.buildSentence}</div>
                ${ruleBtnH}
                <div class="quiz-hint">${tr(item)}</div>
                <button id="tickBtn" class="tick-inline ${tickedB?'on':''}" onclick="toggleKnowTick()">${tickedB?'☑':'☐'} ${tickLblB}</button>
                ${hintArea}
                <div class="sentence-area">${builtH||'<span class="sentence-ph">'+UI.tapWords+'</span>'}</div>
                ${poolH?'<div class="word-pool">'+poolH+'</div>':''}
                ${correctLine}
                ${btns}
            </div>
        </div>`;
}
function addWord(i){if(!APP.quiz.built.includes(i)){APP.quiz.built.push(i);renderBuilder();}}
function removeWord(pos){if(!APP.quiz.checked){APP.quiz.built.splice(pos,1);renderBuilder();}}
function showHint(){APP.quiz.hintUsed=true;renderBuilder();}
function nextBuilder(){APP.quiz.idx++;showQ();}
function arrEq(a,b){return a.length===b.length&&a.every((w,i)=>w===b[i]);}
function checkBuilder(){
    const built=APP.quiz.built.map(i=>APP.quiz.allW[i]);
    const correct=APP.quiz.correctS;
    const item=APP.quiz.items[APP.quiz.idx];
    const altCorrect=item.alt?splitSentenceParts(item.alt):null;
    const ok=arrEq(built,correct)||(altCorrect&&arrEq(built,altCorrect));
    if(ok){
        APP.quiz.score++;
        // Only persist as "known" if user explicitly ticked the checkmark
        if(APP.quiz.knownTicked&&APP.quiz.knownTicked.has(item.id)){
            markKnown(item.id,APP.quiz.cat+'_'+APP.quiz.mode);
        }
        APP.quiz.checked=true;
        const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+APP.quiz.score;
        if(APP.subliminal) showSubliminal(item);
        renderBuilder();
    }else{
        if(APP.quiz.knownTicked) APP.quiz.knownTicked.delete(item.id);
        APP.quiz.wrongs.push({item,userAnswer:built.join(' '),correct:correct.join(' ')});
        if(navigator.vibrate)navigator.vibrate(100);
        APP.quiz.checked=true;
        if(APP.subliminal) showSubliminal(item);
        startCorrections(built,correct,item);
    }
}

// ============== ANIMATED CORRECTIONS ==============
function startCorrections(userWords,correctWords,item){
    const corrs=[];
    for(let i=0;i<correctWords.length;i++){
        if(i>=userWords.length||userWords[i]!==correctWords[i]){
            const uw=i<userWords.length?userWords[i]:'___';
            corrs.push({pos:i,wrong:uw,correct:correctWords[i],
                rule:getCorrectionRule(correctWords[i],uw,i,correctWords,item)});
        }
    }
    if(!corrs.length){renderBuilder();return;}
    APP.quiz.corrs=corrs;
    APP.quiz.corrIdx=0;
    APP.quiz.corrDisplay=[...userWords];
    while(APP.quiz.corrDisplay.length<correctWords.length) APP.quiz.corrDisplay.push('___');
    showCorrection();
}

function showCorrection(){
    const v=APP.quiz;
    if(!v.corrs||v.corrIdx>=v.corrs.length){renderBuilder();return;}
    const corr=v.corrs[v.corrIdx];
    const item=v.items[v.idx];
    const pct=(v.idx/v.items.length)*100;
    const num=v.idx+1,tot=v.items.length;
    const correct=v.correctS;

    let sentH='';
    for(let i=0;i<correct.length;i++){
        if(i<corr.pos){
            sentH+=`<span class="word-chip wc-correct">${esc(correct[i])}</span>`;
        }else if(i===corr.pos){
            sentH+=`<span class="word-chip corr-wrong" id="corrW">${esc(corr.wrong)}</span>`;
            sentH+=`<span class="word-chip corr-right" id="corrR">${esc(corr.correct)}</span>`;
        }else{
            const w=v.corrDisplay[i]||'___';
            const isOk=i<v.corrDisplay.length&&w===correct[i];
            sentH+=`<span class="word-chip ${isOk?'':'corr-pending'}">${esc(w)}</span>`;
        }
    }

    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitQ()">&#8592;</button><span class="quiz-progress-text">${num} ${UI.of} ${tot}</span></div>
                <span class="quiz-score" id="qsc">&#10003; ${v.score}</span>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${item.rule||UI.buildSentence}</div>
                <div class="quiz-hint">${tr(item)}</div>
                <div class="sentence-area corr-mode">${sentH}</div>
                <div class="corr-rule-box" id="corrRule">
                    <div class="corr-rule-text" id="corrRuleText"></div>
                    <button class="corr-skip-btn" id="corrSkip" onclick="nextCorrection()">→</button>
                </div>
                <div class="corr-counter">${v.corrIdx+1} / ${v.corrs.length} Korrekturen</div>
            </div>
        </div>`;

    const wEl=$('corrW'),rEl=$('corrR'),ruleBox=$('corrRule'),ruleText=$('corrRuleText');
    if(ruleBox)ruleBox.style.opacity='0';
    if(rEl)rEl.style.display='none';

    setTimeout(()=>{
        if(wEl)wEl.classList.add('corr-shake');
        setTimeout(()=>{
            if(wEl){wEl.classList.remove('corr-shake');wEl.classList.add('corr-fade-out');}
            setTimeout(()=>{
                if(wEl)wEl.style.display='none';
                if(rEl){rEl.style.display='';rEl.classList.add('corr-slide-in');}
                if(ruleBox){ruleBox.style.opacity='1';ruleBox.style.transition='opacity 0.4s';}
                if(ruleText){
                    let rt=corr.rule;
                    let main=rt, fm='', dt='';
                    const iD=rt.indexOf('\n💡 ');
                    if(iD>=0){dt=rt.slice(iD+2);rt=rt.slice(0,iD);}
                    const iF=rt.indexOf('\n📐 ');
                    if(iF>=0){fm=rt.slice(iF+2);main=rt.slice(0,iF);}else{main=rt;}
                    ruleText.innerHTML='📝 '+esc(main)+(fm?'<div class="corr-formula">'+esc(fm)+'</div>':'')+(dt?'<div class="corr-detail">'+esc(dt)+'</div>':'');
                }
            },500);
        },600);
    },300);
}

function nextCorrection(){
    const v=APP.quiz;
    if(v.corrs&&v.corrIdx<v.corrs.length){
        const corr=v.corrs[v.corrIdx];
        v.corrDisplay[corr.pos]=corr.correct;
    }
    v.corrIdx++;
    if(v.corrIdx>=v.corrs.length){renderBuilder();}
    else{showCorrection();}
}

// ============== WORD PAIR EXPLANATIONS ==============
const WORD_PAIRS={
'möchte|will':{de:'«möchte» = höfliche Bitte (ich hätte gern). «will» = fester Wunsch (ich will). Für Bestellungen/Bitten: möchte.',ru:'«möchte» — хотел бы (вежливо). «will» — хочу (категорично). Для просьб/заказов всегда möchte.',en:'"möchte" = would like (polite). "will" = want (firm). For requests: use möchte.',tr:'"möchte" = rica (kibar). "will" = istek (kesin). Sipariş için: möchte.'},
'möchte|kann':{de:'«möchte» = Wunsch (ich hätte gern). «kann» = Fähigkeit (ich bin in der Lage).',ru:'«möchte» — хотел бы (желание). «kann» — могу (способность). Разные значения!',en:'"möchte" = wish. "kann" = ability. Different meanings!',tr:'"möchte" = istek. "kann" = yetenek.'},
'muss|soll':{de:'«muss» = Pflicht/Notwendigkeit. «soll» = Empfehlung/Auftrag von jemand anderem.',ru:'«muss» — должен (обязательно). «soll» — следует (рекомендация/чужое поручение).',en:'"muss" = must (obligation). "soll" = should (recommendation).',tr:'"muss" = zorunda. "soll" = tavsiye.'},
'kann|darf':{de:'«kann» = Fähigkeit. «darf» = Erlaubnis. "Ich kann schwimmen" vs "Ich darf hier schwimmen".',ru:'«kann» — умею/могу (способность). «darf» — разрешено (позволение). "Я умею плавать" vs "Мне можно тут плавать".',en:'"kann" = can (ability). "darf" = may (permission).',tr:'"kann" = yapabilmek. "darf" = izin.'},
'weil|dass':{de:'«weil» = Grund (warum?). «dass» = Inhalt/Meinung. Nach beiden: Verb am Ende!',ru:'«weil» — потому что (причина). «dass» — что (факт/мнение). После обоих глагол в КОНЦЕ!',en:'"weil" = because (reason). "dass" = that (content). Both: verb at END!',tr:'"weil" = çünkü (neden). "dass" = ki (içerik). İkisinde de fiil SONDA!'},
'weil|denn':{de:'«weil» → Nebensatz (Verb am Ende). «denn» → Hauptsatz (Verb auf Position 2).',ru:'«weil» → придаточное (глагол в конце). «denn» → главное (глагол на 2-й позиции). Оба = «потому что».',en:'"weil" → subordinate (verb at end). "denn" → main clause (verb position 2). Both = because.',tr:'"weil" → yan cümle (fiil sonda). "denn" → ana cümle (fiil 2. pozisyonda).'},
'wenn|als':{de:'«wenn» = wiederholte/zukünftige Handlung. «als» = einmaliges Ereignis in der Vergangenheit.',ru:'«wenn» — если/когда (повторяющееся или будущее). «als» — когда (одноразово в прошлом).',en:'"wenn" = if/when (repeated/future). "als" = when (one-time past event).',tr:'"wenn" = her zaman/gelecek. "als" = geçmişte bir kez.'},
'ob|dass':{de:'«ob» = indirekte Ja/Nein-Frage (ob er kommt?). «dass» = Aussage (dass er kommt).',ru:'«ob» — ли (косвенный вопрос: придёт ли он?). «dass» — что (утверждение: что он придёт).',en:'"ob" = whether (indirect question). "dass" = that (statement).',tr:'"ob" = olup olmadığı (soru). "dass" = ki (ifade).'},
'obwohl|weil':{de:'«obwohl» = Gegensatz (trotz). «weil» = Grund. Beide: Verb am Ende!',ru:'«obwohl» — хотя (уступка, вопреки). «weil» — потому что (причина). После обоих глагол в КОНЦЕ!',en:'"obwohl" = although (concession). "weil" = because (reason). Both: verb at end!',tr:'"obwohl" = rağmen. "weil" = çünkü. İkisinde de fiil sonda!'},
'trotzdem|deshalb':{de:'«trotzdem» = dennoch (Gegensatz). «deshalb» = darum (Folge). Beide: Verb auf Position 2!',ru:'«trotzdem» — тем не менее (вопреки). «deshalb» — поэтому (следствие). Оба + глагол на 2-й позиции!',en:'"trotzdem" = nevertheless. "deshalb" = therefore. Both: verb in position 2!',tr:'"trotzdem" = buna rağmen. "deshalb" = bu yüzden. İkisinde de fiil 2. pozisyonda!'},
'haben|sein':{de:'«haben» für die meisten Verben. «sein» für Bewegung (gehen, fahren) und Zustandsänderung (werden, sterben).',ru:'«haben» — для большинства глаголов. «sein» — для глаголов движения (gehen, fahren, kommen) и смены состояния (werden, sterben, wachsen).',en:'"haben" for most verbs. "sein" for movement (gehen, fahren) and state change (werden, sterben).',tr:'"haben" çoğu fiil için. "sein" hareket (gehen, fahren) ve durum değişikliği (werden) için.'},
'ist|hat':{de:'«ist» (sein) = Bewegung/Zustandsänderung. «hat» (haben) = alle anderen Verben im Perfekt.',ru:'«ist» (sein) — для движения/смены состояния в Perfekt. «hat» (haben) — для остальных глаголов.',en:'"ist" (sein) = motion/change in Perfekt. "hat" (haben) = other verbs.',tr:'"ist" (sein) = hareket/değişim. "hat" (haben) = diğer fiiller.'},
'hätte|wäre':{de:'«hätte» = Konjunktiv II von «haben». «wäre» = Konjunktiv II von «sein».',ru:'«hätte» — имел бы (Konjunktiv II от haben). «wäre» — был бы (Konjunktiv II от sein).',en:'"hätte" = would have (from haben). "wäre" = would be (from sein).',tr:'"hätte" = olsaydı (haben). "wäre" = olsaydı (sein).'},
'würde|könnte':{de:'«würde» = Konjunktiv II allgemein. «könnte» = Konjunktiv II von «können» (Möglichkeit).',ru:'«würde» — бы (общий Konjunktiv II). «könnte» — мог бы (от können, возможность).',en:'"würde" = would (general). "könnte" = could (possibility).',tr:'"würde" = genel dilek. "könnte" = yapabilirdi.'},
'damit|um':{de:'«damit» = Zweck (verschiedene Subjekte). «um...zu» = Zweck (gleiches Subjekt).',ru:'«damit» — чтобы (разные подлежащие: Я объясняю, чтобы ТЫ понял). «um...zu» — чтобы (одно подлежащее: Я учусь, чтобы сдать).',en:'"damit" = so that (different subjects). "um...zu" = in order to (same subject).',tr:'"damit" = farklı özneler. "um...zu" = aynı özne.'},
'sondern|aber':{de:'«sondern» = Korrektur nach Verneinung (nicht X, sondern Y). «aber» = einfacher Gegensatz.',ru:'«sondern» — а (после отрицания: не X, а Y). «aber» — но (простое противопоставление).',en:'"sondern" = but rather (after negation: not X, but Y). "aber" = but (simple contrast).',tr:'"sondern" = değil X, aksine Y. "aber" = ama.'},
'der|die':{de:'«der» = Maskulin/Dativ Feminin. «die» = Feminin/Plural. Achte auf das Genus!',ru:'«der» — мужской род / дат. пад. женского. «die» — женский род / множ. число. Следи за родом!',en:'"der" = masculine/dative feminine. "die" = feminine/plural. Check gender!',tr:'"der" = eril. "die" = dişil/çoğul.'},
'keine|nicht':{de:'«keine» = Negation VOR Substantiv (kein Geld). «nicht» = Negation bei Verben/Adjektiven.',ru:'«keine» — отрицание ПЕРЕД существительным (нет денег). «nicht» — отрицание при глаголах/прилагательных.',en:'"keine" = negation before nouns. "nicht" = negation for verbs/adjectives.',tr:'"keine" = isimden önce. "nicht" = fiil/sıfat için.'},
'nachdem|bevor':{de:'«nachdem» = nach einer Handlung (Plusquamperfekt!). «bevor» = vor einer Handlung.',ru:'«nachdem» — после того как (используй Plusquamperfekt!). «bevor» — прежде чем.',en:'"nachdem" = after (use past perfect!). "bevor" = before.',tr:'"nachdem" = sonra (Plusquamperfekt!). "bevor" = önce.'},
'wurde|hat':{de:'«wurde» = Passiv Präteritum (Das Haus wurde gebaut). «hat» = Perfekt Aktiv (Er hat gebaut).',ru:'«wurde» — пассив прошедшего (Дом был построен). «hat» — перфект актив (Он построил).',en:'"wurde" = passive past (was built). "hat" = active perfect (has built).',tr:'"wurde" = pasif geçmiş. "hat" = aktif perfekt.'},
'wird|hat':{de:'«wird» = Passiv Präsens (Das Haus wird gebaut) oder Futur. «hat» = Perfekt.',ru:'«wird» — пассив настоящего (Дом строится) или будущее время. «hat» — перфект.',en:'"wird" = passive present / future. "hat" = perfect tense.',tr:'"wird" = pasif şimdiki / gelecek. "hat" = perfekt.'}
};

// ============== CATEGORY FORMULAS ==============
const CAT_FORMULAS={
da:{f:'Da + S + ... + V(Ende), V + S',de:'Da + Subjekt + ... + Verb (Ende), Verb + Subjekt (formelle Begründung)',ru:'Da + Подлеж. + ... + Глагол (конец), Глагол + Подлеж. (формальная причина)',en:'Da + S + ... + V (end), V + S (formal reason)',tr:'Da + Ö + ... + F (son), F + Ö (resmi neden)'},
falls:{f:'Falls + S + ... + V(Ende), V + S',de:'Falls + Subjekt + ... + Verb (Ende), Verb + Subjekt (Bedingung)',ru:'Falls + Подлеж. + ... + Глагол (конец), Глагол + Подлеж. (условие «на случай»)',en:'Falls + S + ... + V (end), V + S (conditional "in case")',tr:'Falls + Ö + ... + F (son), F + Ö (koşul)'},
zu_infinitiv:{f:'HS, ... + zu + Inf.',de:'Hauptsatz, (Komma) + Objekte + zu + Infinitiv (am Ende!)',ru:'Главное предл., (запятая) + дополнения + zu + Инфинитив (в КОНЦЕ!)',en:'Main clause, (comma) + objects + zu + Infinitive (at END!)',tr:'Ana cümle, (virgül) + nesneler + zu + Mastar (SONDA!)'},
indirekt_w:{f:'HS, W-Wort + S + ... + V(Ende)',de:'Hauptsatz, W-Wort (wer/was/wann…) + Subjekt + ... + Verb (Ende)',ru:'Главное предл., W-слово (wer/was/wann…) + Подлеж. + ... + Глагол (в КОНЦЕ!)',en:'Main clause, W-word + S + ... + V (end)',tr:'Ana cümle, W-kelime + Ö + ... + F (son)'},
negation:{f:'... nicht / kein + N',de:'«nicht» = vor dem zu verneinenden Wort oder am Satzende. «kein» = vor einem Substantiv (statt ein/der).',ru:'«nicht» — перед отрицаемым словом или в конце предложения. «kein» — перед существительным (вместо ein/der).',en:'"nicht" before the negated word or at end. "kein" before a noun (replacing ein/der).',tr:'"nicht" = olumsuzlanan kelimeden önce / cümle sonunda. "kein" = isimden önce.'},
koord:{f:'HS + und/aber/denn/oder/sondern + HS',de:'Hauptsatz + Koordinator (Position 0) + Hauptsatz — normale V2-Wortstellung nach dem Koordinator!',ru:'Главное + Коорд. союз (позиция 0) + Главное — после коорд. союза обычный порядок V2 (глагол на 2-й)!',en:'Main + coord. conjunction (position 0) + Main — normal V2 word order after the coordinator!',tr:'Ana + bağlaç (0. pozisyon) + Ana — bağlaçtan sonra normal V2 sırası!'},
zeitmass_akk:{f:'S + V + Akk-Zeit/Maß + ...',de:'Zeit-/Maßangaben ohne Präposition stehen im AKKUSATIV: einen Monat, jeden Tag, einen Meter, nächsten Montag.',ru:'Указания времени/меры БЕЗ предлога — в АККУЗАТИВЕ: einen Monat, jeden Tag, einen Meter, nächsten Montag.',en:'Time/measure without preposition → ACCUSATIVE: einen Monat, jeden Tag, einen Meter.',tr:'Edatsız süre/ölçü AKKUSATIF alır: einen Monat, jeden Tag, einen Meter.'},
komparativ:{f:'Adj+er … als / am Adj+sten',de:'Komparativ: Adj+er + als. Superlativ: am + Adj+sten / der/die/das … -ste. Irregulär: gut→besser, viel→mehr, gern→lieber.',ru:'Сравнит.: прил.+er + als. Превосх.: am + прил.+sten / der/die/das … -ste. Неправ.: gut→besser, viel→mehr, gern→lieber.',en:'Comparative: adj+er + als. Superlative: am + adj+sten. Irregular: gut→besser, viel→mehr, gern→lieber.',tr:'Karş.: sıfat+er + als. Üstün.: am + sıfat+sten. Düzensiz: gut→besser, viel→mehr, gern→lieber.'},
praeteritum:{f:'Schwach: Stamm+te · Stark: Vokalwechsel · sein→war, haben→hatte',de:'Schwache Verben: Stamm + -te. Starke: Vokalwechsel (ging, kam, sah). Hilfs-/Modalverben immer im Präteritum, auch mündlich (war, hatte, konnte, musste).',ru:'Слабые: основа + -te. Сильные: смена гласной (ging, kam, sah). Вспом./модальные — в Präteritum даже в разговоре (war, hatte, konnte, musste).',en:'Weak: stem + -te. Strong: vowel change (ging, kam, sah). Aux/modals always in Präteritum even orally (war, hatte, konnte, musste).',tr:'Zayıf: kök + -te. Güçlü: ünlü değişimi (ging, kam, sah). Yardımcı/modal fiiller her zaman Präteritum (war, hatte, konnte).'},
hauptsatz:{f:'S + V(2) + O',de:'Subjekt + Verb (Position 2) + Objekt',ru:'Подлежащее + Глагол (позиция 2) + Дополнение',en:'Subject + Verb (position 2) + Object',tr:'Özne + Fiil (2.poz) + Nesne'},
modal:{f:'S + MV(2) + ... + Inf.(Ende)',de:'Subjekt + Modalverb (Pos.2) + ... + Infinitiv (Ende)',ru:'Подл. + Модальный глагол (поз.2) + ... + Инфинитив (конец)',en:'Subject + Modal (pos.2) + ... + Infinitive (end)',tr:'Özne + Modal (2.poz) + ... + Mastar (son)'},
weil:{f:'HS, weil + S + ... + V(Ende)',de:'Hauptsatz, weil + Subjekt + ... + Verb (Ende)',ru:'Главное, weil + Подлеж. + ... + Глагол (в конце!)',en:'Main clause, weil + S + ... + V (end)',tr:'Ana cümle, weil + Ö + ... + F (son)'},
dass:{f:'HS, dass + S + ... + V(Ende)',de:'Hauptsatz, dass + Subjekt + ... + Verb (Ende)',ru:'Главное, dass + Подлеж. + ... + Глагол (в конце!)',en:'Main clause, dass + S + ... + V (end)',tr:'Ana cümle, dass + Ö + ... + F (son)'},
wenn:{f:'Wenn + S + ... + V(Ende), V + S',de:'Wenn + Subjekt + ... + Verb (Ende), Verb + Subjekt',ru:'Wenn + Подлеж. + ... + Глагол (конец), Глагол + Подлеж.',en:'Wenn + S + ... + V (end), V + S',tr:'Wenn + Ö + ... + F (son), F + Ö'},
als:{f:'Als + S + ... + V(Ende), V + S',de:'Als + Subjekt + ... + Verb (Ende), Verb + Subjekt',ru:'Als + Подлеж. + ... + Глагол (конец), Глагол + Подлеж.',en:'Als + S + ... + V (end), V + S',tr:'Als + Ö + ... + F (son), F + Ö'},
ob:{f:'HS, ob + S + ... + V(Ende)',de:'Hauptsatz, ob + Subjekt + ... + Verb (Ende)',ru:'Главное, ob + Подлеж. + ... + Глагол (в конце!)',en:'Main clause, ob + S + ... + V (end)',tr:'Ana cümle, ob + Ö + ... + F (son)'},
obwohl:{f:'Obwohl + S + ... + V(Ende), V + S',de:'Obwohl + Subjekt + ... + Verb (Ende), Hauptsatz',ru:'Obwohl + Подлеж. + ... + Глагол (конец), Главное предложение',en:'Obwohl + S + ... + V (end), main clause',tr:'Obwohl + Ö + ... + F (son), ana cümle'},
tekamolo:{f:'S + V + Te + Ka + Mo + Lo',de:'Subjekt + Verb + Temporal + Kausal + Modal + Lokal',ru:'Подлеж. + Глагол + Когда? + Почему? + Как? + Где/Куда?',en:'Subject + Verb + When? + Why? + How? + Where?',tr:'Özne + Fiil + Ne zaman + Neden + Nasıl + Nerede'},
passiv:{f:'S + werden + ... + Part.II',de:'Subjekt + werden/wurde + ... + Partizip II',ru:'Подлеж. + werden/wurde + ... + Причастие II',en:'Subject + werden/wurde + ... + Past Participle',tr:'Özne + werden/wurde + ... + Partizip II'},
konjunktiv:{f:'Wenn + S + wäre/hätte, würde + S + Inf.',de:'Wenn + Subjekt + wäre/hätte, würde + Subjekt + Infinitiv',ru:'Wenn + Подл. + wäre/hätte, würde + Подл. + Инфинитив',en:'Wenn + S + wäre/hätte, würde + S + Infinitive',tr:'Wenn + Ö + wäre/hätte, würde + Ö + Mastar'},
je_desto:{f:'Je + Komp., desto + Komp. + V + S',de:'Je + Komparativ, desto + Komparativ + Verb + Subjekt',ru:'Je + сравнит., desto + сравнит. + Глагол + Подлеж.',en:'Je + comparative, desto + comparative + V + S',tr:'Je + karş., desto + karş. + F + Ö'},
um_zu:{f:'HS, um + ... + zu + Inf.',de:'Hauptsatz, um + ... + zu + Infinitiv (gleiches Subjekt)',ru:'Главное, um + ... + zu + Инфинитив (одно подлежащее)',en:'Main clause, um + ... + zu + Infinitive (same subject)',tr:'Ana cümle, um + ... + zu + Mastar (aynı özne)'},
damit:{f:'HS, damit + S + ... + V(Ende)',de:'Hauptsatz, damit + Subjekt + ... + Verb (Ende)',ru:'Главное, damit + Подлеж. + ... + Глагол (конец) (разные подлежащие)',en:'Main clause, damit + S + ... + V (end) (different subjects)',tr:'Ana cümle, damit + Ö + ... + F (son)'},
trotzdem:{f:'HS. Trotzdem + V(2) + S',de:'Hauptsatz. Trotzdem + Verb (Pos.2) + Subjekt',ru:'Главное. Trotzdem + Глагол (поз.2) + Подлеж.',en:'Main clause. Trotzdem + V (pos.2) + S',tr:'Ana cümle. Trotzdem + F (2.poz) + Ö'},
deshalb:{f:'HS. Deshalb + V(2) + S',de:'Hauptsatz. Deshalb + Verb (Pos.2) + Subjekt',ru:'Главное. Deshalb + Глагол (поз.2) + Подлеж.',en:'Main clause. Deshalb + V (pos.2) + S',tr:'Ana cümle. Deshalb + F (2.poz) + Ö'},
denn:{f:'HS, denn + S + V(2) + O',de:'Hauptsatz, denn + Subjekt + Verb (Pos.2) — normale Wortstellung!',ru:'Главное, denn + Подлеж. + Глагол (поз.2) — обычный порядок!',en:'Main clause, denn + S + V (pos.2) — normal word order!',tr:'Ana cümle, denn + Ö + F (2.poz) — normal sıra!'},
aber:{f:'HS, aber + S + V(2)',de:'Hauptsatz, aber + normale Wortstellung',ru:'Главное, aber + обычный порядок слов',en:'Main clause, aber + normal word order',tr:'Ana cümle, aber + normal sıra'},
sondern:{f:'nicht + X, sondern + Y',de:'nicht + X, sondern + Y (Korrektur nach Verneinung)',ru:'nicht + X, sondern + Y (исправление после отрицания)',en:'nicht + X, sondern + Y (correction after negation)',tr:'nicht + X, sondern + Y (olumsuzluktan sonra düzeltme)'},
nachdem:{f:'Nachdem + S + PQP + V(Ende), Prät.',de:'Nachdem + Plusquamperfekt (hatte/war + Part.II), Präteritum',ru:'Nachdem + Плюсквамперфект (hatte/war + Прич.II), Претерит',en:'Nachdem + past perfect, simple past',tr:'Nachdem + Plusquamperfekt, Präteritum'},
bevor:{f:'Bevor + S + ... + V(Ende), HS',de:'Bevor + Subjekt + ... + Verb (Ende), Hauptsatz',ru:'Bevor + Подлеж. + ... + Глагол (конец), Главное',en:'Bevor + S + ... + V (end), main clause',tr:'Bevor + Ö + ... + F (son), ana cümle'},
waehrend:{f:'Während + S + ... + V(Ende), HS',de:'Während + Subjekt + ... + Verb (Ende), Hauptsatz',ru:'Während + Подлеж. + ... + Глагол (конец), Главное',en:'Während + S + ... + V (end), main clause',tr:'Während + Ö + ... + F (son), ana cümle'},
seitdem:{f:'Seitdem + S + ... + V(Ende), HS',de:'Seitdem + Subjekt + ... + Verb (Ende), Hauptsatz',ru:'Seitdem + Подлеж. + ... + Глагол (конец), Главное',en:'Seitdem + S + ... + V (end), main clause',tr:'Seitdem + Ö + ... + F (son), ana cümle'},
bis:{f:'HS, bis + S + ... + V(Ende)',de:'Hauptsatz, bis + Subjekt + ... + Verb (Ende)',ru:'Главное, bis + Подлеж. + ... + Глагол (конец)',en:'Main clause, bis + S + ... + V (end)',tr:'Ana cümle, bis + Ö + ... + F (son)'},
sobald:{f:'Sobald + S + ... + V(Ende), HS',de:'Sobald + Subjekt + ... + Verb (Ende), Hauptsatz',ru:'Sobald + Подлеж. + ... + Глагол (конец), Главное',en:'Sobald + S + ... + V (end), main clause',tr:'Sobald + Ö + ... + F (son), ana cümle'},
relativ:{f:'Nomen, Rel.pron. + ... + V(Ende)',de:'Nomen, Relativpronomen + ... + Verb (Ende)',ru:'Сущ., Относит. местоимение + ... + Глагол (конец)',en:'Noun, relative pronoun + ... + V (end)',tr:'İsim, ilgi zamiri + ... + F (son)'},
textbau:{f:'Konnektor + HS',de:'Textkonnektor + Hauptsatz-Struktur',ru:'Текстовый коннектор + структура главного предложения',en:'Text connector + main clause structure',tr:'Metin bağlacı + ana cümle yapısı'}
};

// ============== CATEGORY DETAIL (richer explanations) ==============
const CAT_DETAIL_ML={
de:{
tekamolo:'📏 TEKAMOLO: Adverbialen in der Reihenfolge Te(wann) → Ka(warum) → Mo(wie) → Lo(wo/wohin).',
negation:'❗ nicht — vor dem zu verneinenden Wort oder am Satzende. kein — vor einem Nomen (statt ein/der).',
koord:'🔗 und/aber/denn/oder/sondern — koord. Konnektoren auf Position 0. Danach NORMALE V2-Stellung!',
zu_infinitiv:'➡️ zu-Infinitiv: zu + Verb am Ende des Nebensatzes. «Es ist wichtig, pünktlich zu sein».',
indirekt_w:'❓ Indirekte W-Frage: nach W-Wort kommt Subjekt, VERB AM ENDE (wie im Nebensatz).',
zeitmass_akk:'⏱️ Zeit-/Maßangaben ohne Präposition → AKKUSATIV: einen Monat, jeden Tag, einen Meter.',
komparativ:'📐 Komparativ: Adj+er als. Superlativ: am Adj+sten. Irregulär: gut→besser, viel→mehr, gern→lieber.',
praeteritum:'📜 Präteritum — schriftlich. Schwach: Stamm+te. Stark: Vokalwechsel. sein/haben/Modalverben IMMER Präteritum.',
da:'📌 da — formale Begründung (wie weil, aber gehoben): VERB AM ENDE des Nebensatzes.',
falls:'📌 falls — konditional «für den Fall»: VERB AM ENDE des Nebensatzes.',
weil:'📌 weil — kausaler Subjunktor. VERB geht ans ENDE des Nebensatzes.',
dass:'📌 dass — Subjunktor. VERB ans ENDE des Nebensatzes.',
wenn:'📌 wenn — konditional/wiederholt. VERB ans ENDE des Nebensatzes.',
als:'📌 als — einmaliges Ereignis in der Vergangenheit. VERB ans ENDE.',
ob:'📌 ob — indirekte Ja/Nein-Frage. VERB ans ENDE.',
obwohl:'📌 obwohl — Konzessivsatz «obwohl». VERB ans ENDE.',
um_zu:'➡️ um … zu + Infinitiv — Finalsatz bei GLEICHEM Subjekt. zu + Inf. am ENDE.',
damit:'➡️ damit — Finalsatz bei VERSCHIEDENEN Subjekten. VERB ans ENDE.',
trotzdem:'🔄 trotzdem auf Position 1, VERB auf Position 2, dann Subjekt (Inversion).',
deshalb:'🔄 deshalb auf Position 1, VERB auf Position 2, dann Subjekt (Inversion).',
hauptsatz:'✅ Hauptsatz: V2-Regel — VERB auf Position 2 (nach dem 1. Element).',
modal:'🎯 Modalverben: MV auf Position 2, Hauptverb im INFINITIV am ENDE (Satzklammer).',
passiv:'⚙️ Passiv: werden/wurde + Partizip II am ENDE (Passivklammer).',
konjunktiv:'💭 Konjunktiv II: wenn + wäre/hätte/würde + Inf. am Ende. Irrealer Wunsch.'
},
ru:{
tekamolo:'📏 TEKAMOLO: обстоятельства в порядке Te(когда) → Ka(причина) → Mo(как) → Lo(где/куда).',
negation:'❗ nicht — перед отрицаемым словом или в конце. kein — перед существительным (вместо ein/der).',
koord:'🔗 und/aber/denn/oder/sondern — коорд. союзы на позиции 0. После них ОБЫЧНЫЙ порядок V2 (глагол на 2-й позиции).',
zu_infinitiv:'➡️ Конструкция zu + Infinitiv: zu + глагол в конце придаточной части. «Es ist wichtig, pünktlich zu sein».',
indirekt_w:'❓ Косвенный вопрос с W-словом (wer/was/wann…): после W-слова подлежащее, ГЛАГОЛ В КОНЦЕ, как в придаточном.',
zeitmass_akk:'⏱️ Указания времени/меры БЕЗ предлога стоят в АККУЗАТИВЕ: einen Monat, jeden Tag, einen Meter, nächsten Montag.',
komparativ:'📐 Сравнит.: Adj+er als. Превосх.: am Adj+sten. Неправ.: gut→besser, viel→mehr, gern→lieber.',
praeteritum:'📜 Präteritum — письменная форма. Слабые: Stamm+te. Сильные: смена гласной. sein/haben/модальные — ВСЕГДА в Präteritum.',
da:'📌 da — формальная причина (как weil, но книжное): ГЛАГОЛ В КОНЦЕ придаточного.',
falls:'📌 falls — «на случай если» (условие): ГЛАГОЛ В КОНЦЕ придаточного.',
weil:'📌 weil — подчинительный союз причины. ГЛАГОЛ уходит в КОНЕЦ придаточного.',
dass:'📌 dass — подчинительный союз. ГЛАГОЛ в КОНЦЕ придаточного.',
wenn:'📌 wenn — условное/повторяющееся. ГЛАГОЛ в КОНЦЕ придаточного.',
als:'📌 als — однократное событие в прошлом. ГЛАГОЛ в КОНЦЕ придаточного.',
ob:'📌 ob — косвенный да/нет вопрос. ГЛАГОЛ в КОНЦЕ придаточного.',
obwohl:'📌 obwohl — уступка «хотя». ГЛАГОЛ в КОНЦЕ придаточного.',
um_zu:'➡️ um … zu + Infinitiv — цель при ОДНОМ подлежащем. zu + инфинитив в КОНЦЕ.',
damit:'➡️ damit — цель при РАЗНЫХ подлежащих. ГЛАГОЛ в КОНЦЕ придаточного.',
trotzdem:'🔄 trotzdem — на позиции 1, ГЛАГОЛ на позиции 2, затем подлежащее (инверсия).',
deshalb:'🔄 deshalb — на позиции 1, ГЛАГОЛ на позиции 2, затем подлежащее (инверсия).',
hauptsatz:'✅ Главное предложение: V2-правило — ГЛАГОЛ на позиции 2 (после 1-го элемента).',
modal:'🎯 Модальные: MV на позиции 2, основной глагол в ИНФИНИТИВЕ в КОНЦЕ (рамочная конструкция).',
passiv:'⚙️ Пассив: werden/wurde + Partizip II в КОНЦЕ. Deponens-рамка.',
konjunktiv:'💭 Konjunktiv II: wenn + wäre/hätte/würde + Inf. в конце. Ирреальное условие.'
},
en:{
tekamolo:'📏 TEKAMOLO rule: adverbials in order Te(when) → Ka(why) → Mo(how) → Lo(where).',
negation:'❗ nicht — before the negated word or at sentence end. kein — before a noun (replaces ein/der).',
koord:'🔗 und/aber/denn/oder/sondern — coord. conjunctions at position 0. After them NORMAL V2 order!',
zu_infinitiv:'➡️ zu-Infinitive: zu + verb at the end of the subclause. «Es ist wichtig, pünktlich zu sein».',
indirekt_w:'❓ Indirect W-question: after W-word comes subject, VERB AT END (like a subclause).',
zeitmass_akk:'⏱️ Time/measure without preposition → ACCUSATIVE: einen Monat, jeden Tag, einen Meter.',
komparativ:'📐 Comparative: adj+er als. Superlative: am adj+sten. Irregular: gut→besser, viel→mehr, gern→lieber.',
praeteritum:'📜 Präteritum — written form. Weak: stem+te. Strong: vowel change. sein/haben/modals ALWAYS Präteritum.',
da:'📌 da — formal reason (like weil, but literary): VERB AT END of subclause.',
falls:'📌 falls — conditional "in case": VERB AT END of subclause.',
weil:'📌 weil — causal subordinator. VERB goes to the END.',
dass:'📌 dass — subordinator. VERB at END.',
wenn:'📌 wenn — conditional/repeated. VERB at END.',
als:'📌 als — one-time past event. VERB at END.',
ob:'📌 ob — indirect yes/no question. VERB at END.',
obwohl:'📌 obwohl — concessive. VERB at END.',
um_zu:'➡️ um … zu + Inf. — purpose with SAME subject. zu + inf. at END.',
damit:'➡️ damit — purpose with DIFFERENT subjects. VERB at END.',
trotzdem:'🔄 trotzdem at pos.1, VERB at pos.2, then subject (inversion).',
deshalb:'🔄 deshalb at pos.1, VERB at pos.2, then subject (inversion).',
hauptsatz:'✅ Main clause: V2 rule — VERB at position 2 (after the 1st element).',
modal:'🎯 Modals: MV at pos.2, main verb INFINITIVE at END (sentence bracket).',
passiv:'⚙️ Passive: werden/wurde + Partizip II at END.',
konjunktiv:'💭 Konjunktiv II: wenn + wäre/hätte/würde + inf. at end. Irrealis.'
},
tr:{
tekamolo:'📏 TEKAMOLO: zarflar sırası Te(ne zaman) → Ka(neden) → Mo(nasıl) → Lo(nerede).',
negation:'❗ nicht — olumsuzlanan kelimeden önce / sonda. kein — isimden önce (ein/der yerine).',
koord:'🔗 und/aber/denn/oder/sondern — 0. pozisyonda bağlaç. Sonrasında NORMAL V2 sırası!',
zu_infinitiv:'➡️ zu-Mastar: zu + fiil yan cümlenin sonunda. «Es ist wichtig, pünktlich zu sein».',
indirekt_w:'❓ Dolaylı W-soru: W-kelimesinden sonra özne, FİİL SONDA.',
zeitmass_akk:'⏱️ Edatsız süre/ölçü AKKUSATİF alır: einen Monat, jeden Tag, einen Meter.',
komparativ:'📐 Karş.: sıfat+er als. Üstün.: am sıfat+sten. Düzensiz: gut→besser, viel→mehr, gern→lieber.',
praeteritum:'📜 Präteritum — yazılı geçmiş. Zayıf: kök+te. Güçlü: ünlü değişimi. sein/haben/modal: HER ZAMAN Präteritum.',
da:'📌 da — resmi neden (weil gibi ama edebi): FİİL yan cümlenin SONUNDA.',
falls:'📌 falls — koşul «durumunda»: FİİL SONDA.',
weil:'📌 weil — neden bağlacı. FİİL SONA gider.',
dass:'📌 dass — bağlaç. FİİL SONDA.',
wenn:'📌 wenn — koşul/tekrar. FİİL SONDA.',
als:'📌 als — geçmişte tek olay. FİİL SONDA.',
ob:'📌 ob — dolaylı evet/hayır sorusu. FİİL SONDA.',
obwohl:'📌 obwohl — «rağmen» yan cümlesi. FİİL SONDA.',
um_zu:'➡️ um … zu + mastar — AYNI özneli amaç. zu + mastar SONDA.',
damit:'➡️ damit — FARKLI özneli amaç. FİİL SONDA.',
trotzdem:'🔄 trotzdem 1.poz, FİİL 2.poz, sonra özne (devrik).',
deshalb:'🔄 deshalb 1.poz, FİİL 2.poz, sonra özne (devrik).',
hauptsatz:'✅ Ana cümle: V2 kuralı — FİİL 2. pozisyonda.',
modal:'🎯 Modal: MV 2.poz, ana fiil MASTAR olarak SONDA (cümle çerçevesi).',
passiv:'⚙️ Pasif: werden/wurde + Partizip II SONDA.',
konjunktiv:'💭 Konjunktiv II: wenn + wäre/hätte/würde + mastar sonda.'
},
ar:{
tekamolo:'📏 قاعدة TEKAMOLO: ترتيب الظروف الزمان ← السبب ← الحال ← المكان.',
negation:'❗ nicht قبل الكلمة المنفية أو في نهاية الجملة. kein قبل الاسم (بدل ein/der).',
koord:'🔗 und/aber/denn/oder/sondern — روابط تنسيقية في الموضع 0. بعدها ترتيب V2 العادي!',
zu_infinitiv:'➡️ zu + مصدر في نهاية الجملة الفرعية. «Es ist wichtig, pünktlich zu sein».',
indirekt_w:'❓ سؤال غير مباشر بـ W: بعد كلمة W الفاعل ثم الفعل في النهاية.',
zeitmass_akk:'⏱️ تعبيرات الزمان/المقدار بدون حرف جر ← حالة النصب: einen Monat, jeden Tag.',
komparativ:'📐 المقارنة: Adj+er als. التفضيل: am Adj+sten. شاذ: gut→besser, viel→mehr, gern→lieber.',
praeteritum:'📜 Präteritum — صيغة كتابية. الضعيفة: الجذر+te. القوية: تغيير حرف العلة. sein/haben/modal دائماً Präteritum.',
da:'📌 da — تعليل رسمي (مثل weil): الفعل في نهاية الجملة الفرعية.',
falls:'📌 falls — «في حالة»: الفعل في النهاية.',
weil:'📌 weil — أداة تعليل ربط. الفعل ينتقل إلى النهاية.',
dass:'📌 dass — أداة ربط. الفعل في النهاية.',
wenn:'📌 wenn — شرطي/متكرر. الفعل في النهاية.',
als:'📌 als — حدث لمرة واحدة في الماضي. الفعل في النهاية.',
ob:'📌 ob — سؤال غير مباشر نعم/لا. الفعل في النهاية.',
obwohl:'📌 obwohl — «على الرغم من». الفعل في النهاية.',
um_zu:'➡️ um … zu + مصدر — الغرض مع فاعل واحد. zu + مصدر في النهاية.',
damit:'➡️ damit — الغرض مع فاعلين مختلفين. الفعل في النهاية.',
trotzdem:'🔄 trotzdem في الموضع 1، الفعل في الموضع 2، ثم الفاعل.',
deshalb:'🔄 deshalb في الموضع 1، الفعل في الموضع 2، ثم الفاعل.',
hauptsatz:'✅ الجملة الرئيسية: قاعدة V2 — الفعل في الموضع 2.',
modal:'🎯 الأفعال الناقصة: MV في الموضع 2، الفعل الرئيسي في المصدر في النهاية.',
passiv:'⚙️ المبني للمجهول: werden/wurde + Partizip II في النهاية.',
konjunktiv:'💭 Konjunktiv II: wenn + wäre/hätte/würde + مصدر في النهاية.'
},
fa:{
tekamolo:'📏 قاعده TEKAMOLO: ترتیب قیدها زمان ← علت ← حالت ← مکان.',
negation:'❗ nicht قبل از کلمه منفی یا انتهای جمله. kein قبل از اسم (به جای ein/der).',
koord:'🔗 und/aber/denn/oder/sondern — حروف ربط هم‌پایه در موقعیت 0. بعد از آن‌ها ترتیب عادی V2!',
zu_infinitiv:'➡️ zu + مصدر در انتهای جمله فرعی. «Es ist wichtig, pünktlich zu sein».',
indirekt_w:'❓ سؤال غیرمستقیم با W: بعد از W فاعل، سپس فعل در انتها.',
zeitmass_akk:'⏱️ عبارات زمان/اندازه بدون حرف اضافه ← حالت مفعولی: einen Monat, jeden Tag.',
komparativ:'📐 تفضیلی: Adj+er als. عالی: am Adj+sten. بی‌قاعده: gut→besser, viel→mehr, gern→lieber.',
praeteritum:'📜 Präteritum — فرم نوشتاری. ضعیف: ریشه+te. قوی: تغییر مصوت. sein/haben/modal همیشه Präteritum.',
da:'📌 da — دلیل رسمی (مثل weil اما ادبی): فعل در انتها.',
falls:'📌 falls — «در صورتی که»: فعل در انتها.',
weil:'📌 weil — حرف ربط علت. فعل به انتها می‌رود.',
dass:'📌 dass — حرف ربط. فعل در انتها.',
wenn:'📌 wenn — شرطی/تکراری. فعل در انتها.',
als:'📌 als — یک بار در گذشته. فعل در انتها.',
ob:'📌 ob — سؤال غیرمستقیم بله/خیر. فعل در انتها.',
obwohl:'📌 obwohl — «اگرچه». فعل در انتها.',
um_zu:'➡️ um … zu + مصدر — هدف با یک فاعل. zu + مصدر در انتها.',
damit:'➡️ damit — هدف با فاعل‌های متفاوت. فعل در انتها.',
trotzdem:'🔄 trotzdem در موقعیت 1، فعل در موقعیت 2، سپس فاعل.',
deshalb:'🔄 deshalb در موقعیت 1، فعل در موقعیت 2، سپس فاعل.',
hauptsatz:'✅ جمله اصلی: قاعده V2 — فعل در موقعیت 2.',
modal:'🎯 افعال مدال: MV موقعیت 2، فعل اصلی مصدر در انتها.',
passiv:'⚙️ مجهول: werden/wurde + Partizip II در انتها.',
konjunktiv:'💭 Konjunktiv II: wenn + wäre/hätte/würde + مصدر در انتها.'
},
vi:{
tekamolo:'📏 Quy tắc TEKAMOLO: trạng ngữ theo thứ tự Te(khi nào) → Ka(vì sao) → Mo(thế nào) → Lo(ở đâu).',
negation:'❗ nicht — trước từ bị phủ định hoặc cuối câu. kein — trước danh từ (thay ein/der).',
koord:'🔗 und/aber/denn/oder/sondern — liên từ kết hợp ở vị trí 0. Sau đó trật tự V2 BÌNH THƯỜNG!',
zu_infinitiv:'➡️ zu + động từ ở cuối mệnh đề phụ. «Es ist wichtig, pünktlich zu sein».',
indirekt_w:'❓ Câu hỏi gián tiếp với W: sau từ W là chủ ngữ, ĐỘNG TỪ Ở CUỐI.',
zeitmass_akk:'⏱️ Thời gian/đo lường không giới từ → CÁCH AKKUSATIV: einen Monat, jeden Tag.',
komparativ:'📐 So sánh hơn: Adj+er als. So sánh nhất: am Adj+sten. Bất quy tắc: gut→besser, viel→mehr, gern→lieber.',
praeteritum:'📜 Präteritum — dạng văn viết. Yếu: gốc+te. Mạnh: đổi nguyên âm. sein/haben/modal LUÔN Präteritum.',
da:'📌 da — lý do trang trọng (như weil, văn chương): ĐỘNG TỪ Ở CUỐI.',
falls:'📌 falls — «trong trường hợp»: ĐỘNG TỪ Ở CUỐI.',
weil:'📌 weil — liên từ phụ thuộc. ĐỘNG TỪ ra CUỐI.',
dass:'📌 dass — liên từ phụ thuộc. ĐỘNG TỪ ở CUỐI.',
wenn:'📌 wenn — điều kiện/lặp lại. ĐỘNG TỪ ở CUỐI.',
als:'📌 als — sự kiện một lần trong quá khứ. ĐỘNG TỪ ở CUỐI.',
ob:'📌 ob — câu hỏi gián tiếp có/không. ĐỘNG TỪ ở CUỐI.',
obwohl:'📌 obwohl — «mặc dù». ĐỘNG TỪ ở CUỐI.',
um_zu:'➡️ um … zu + nguyên thể — mục đích cùng chủ ngữ. zu + nguyên thể ở CUỐI.',
damit:'➡️ damit — mục đích với chủ ngữ khác. ĐỘNG TỪ ở CUỐI.',
trotzdem:'🔄 trotzdem ở vị trí 1, ĐỘNG TỪ ở vị trí 2, rồi chủ ngữ.',
deshalb:'🔄 deshalb ở vị trí 1, ĐỘNG TỪ ở vị trí 2, rồi chủ ngữ.',
hauptsatz:'✅ Mệnh đề chính: quy tắc V2 — ĐỘNG TỪ ở vị trí 2.',
modal:'🎯 Modal: MV ở vị trí 2, động từ chính NGUYÊN THỂ ở CUỐI.',
passiv:'⚙️ Bị động: werden/wurde + Partizip II ở CUỐI.',
konjunktiv:'💭 Konjunktiv II: wenn + wäre/hätte/würde + nguyên thể ở cuối.'
}
};
function getCatDetail(cat,L){
    const m=CAT_DETAIL_ML[L]||CAT_DETAIL_ML.en;
    return m[cat]||'';
}

function getCorrectionRule(word,wrongWord,pos,sentence,item){
    const L=APP.lang||'de';
    const cat=item.cat||'';
    const lo=word.toLowerCase();
    const wlo=(wrongWord||'').toLowerCase();
    const verbList='bin,bist,ist,sind,seid,habe,hast,hat,haben,habt,werde,wirst,wird,werden,werdet,kann,kannst,könnt,können,muss,musst,müsst,müssen,soll,sollst,sollt,sollen,will,willst,wollt,wollen,darf,darfst,dürft,dürfen,möchte,möchtest,möchtet,möchten,gehe,gehst,geht,gehen,komme,kommst,kommt,kommen,mache,machst,macht,machen,lese,liest,lesen,fahre,fährst,fährt,fahren,schlafe,schläfst,schläft,schlafen,esse,isst,essen,trinke,trinkst,trinkt,trinken,arbeite,arbeitest,arbeitet,arbeiten,lerne,lernst,lernt,lernen,spiele,spielst,spielt,spielen,wohne,wohnst,wohnt,wohnen,brauche,brauchst,braucht,brauchen,kaufe,kaufst,kauft,kaufen,nehme,nimmst,nimmt,nehmen,gebe,gibst,gibt,geben,sehe,siehst,sieht,sehen,spreche,sprichst,spricht,sprechen,stehe,stehst,steht,stehen,liege,liegst,liegt,liegen,sitze,sitzt,sitzen,laufe,läufst,läuft,laufen,finde,findest,findet,finden,weiß,weißt,wissen,wisst';
    const isVerb=verbList.split(',').includes(lo);
    const nebCats='weil,dass,wenn,als,ob,obwohl,damit,nachdem,bevor,waehrend,seitdem,bis,sobald,relativ';
    const isNeb=nebCats.split(',').includes(cat);
    const pronouns='ich,du,er,sie,es,wir,ihr,man'.split(',');
    const isPronoun=pronouns.includes(lo);
    const CONN_NAMES_ML={
        ru:{weil:'потому что',dass:'что',wenn:'если/когда',als:'когда (прошлое)',ob:'ли',obwohl:'хотя',damit:'чтобы',nachdem:'после того как',bevor:'прежде чем',seitdem:'с тех пор',bis:'пока не',sobald:'как только',denn:'ведь',aber:'но',sondern:'а (не...а)',trotzdem:'тем не менее',deshalb:'поэтому',da:'так как (формально)',falls:'на случай если'},
        en:{weil:'because',dass:'that',wenn:'if/when',als:'when (past)',ob:'whether',obwohl:'although',damit:'so that',nachdem:'after',bevor:'before',seitdem:'since',bis:'until',sobald:'as soon as',denn:'because',aber:'but',sondern:'but rather',trotzdem:'nevertheless',deshalb:'therefore',da:'since (formal)',falls:'in case'},
        de:{weil:'weil',dass:'dass',wenn:'wenn',als:'als',ob:'ob',obwohl:'obwohl',damit:'damit',nachdem:'nachdem',bevor:'bevor',seitdem:'seitdem',bis:'bis',sobald:'sobald',denn:'denn',aber:'aber',sondern:'sondern',trotzdem:'trotzdem',deshalb:'deshalb',da:'da',falls:'falls'},
        tr:{weil:'çünkü',dass:'ki',wenn:'eğer/ne zaman',als:'iken (geçmiş)',ob:'olup olmadığı',obwohl:'rağmen',damit:'amacıyla',nachdem:'sonra',bevor:'önce',seitdem:'o zamandan beri',bis:'kadar',sobald:'hemen',denn:'çünkü',aber:'ama',sondern:'aksine',trotzdem:'buna rağmen',deshalb:'bu yüzden',da:'-dığı için',falls:'-se diye'},
        ar:{weil:'لأن',dass:'أن',wenn:'إذا/عندما',als:'عندما (الماضي)',ob:'ما إذا',obwohl:'على الرغم من',damit:'لكي',nachdem:'بعد أن',bevor:'قبل أن',seitdem:'منذ أن',bis:'حتى',sobald:'بمجرد أن',denn:'لأن',aber:'لكن',sondern:'بل',trotzdem:'مع ذلك',deshalb:'لذلك',da:'بما أن',falls:'في حال'},
        fa:{weil:'چون',dass:'که',wenn:'اگر/وقتی',als:'وقتی (گذشته)',ob:'آیا',obwohl:'اگرچه',damit:'برای اینکه',nachdem:'پس از اینکه',bevor:'قبل از',seitdem:'از زمانی که',bis:'تا اینکه',sobald:'به محض اینکه',denn:'زیرا',aber:'اما',sondern:'بلکه',trotzdem:'با این حال',deshalb:'به همین دلیل',da:'از آنجا که',falls:'در صورتی که'},
        vi:{weil:'bởi vì',dass:'rằng',wenn:'nếu/khi',als:'khi (quá khứ)',ob:'liệu',obwohl:'mặc dù',damit:'để',nachdem:'sau khi',bevor:'trước khi',seitdem:'từ khi',bis:'cho đến khi',sobald:'ngay khi',denn:'vì',aber:'nhưng',sondern:'mà là',trotzdem:'tuy nhiên',deshalb:'do đó',da:'vì (trang trọng)',falls:'phòng khi'}
    };
    const connNames=CONN_NAMES_ML[L]||CONN_NAMES_ML.en;
    const _t=(de,ru,en,tr,ar,fa,vi)=>({de,ru,en,tr,ar,fa,vi}[L]||en||de);
    // Get formula for category
    const cf=CAT_FORMULAS[cat];
    const catDetail=getCatDetail(cat,L);
    const formula=(cf?('\n📐 '+cf.f+' — '+(cf[L]||cf.en||cf.de||'')):'')+(catDetail?('\n💡 '+catDetail):'');

    // === A: MISSING WORD ===
    if(wrongWord==='___'){
        if(isVerb){
            const vpos=isNeb?_t('am Ende (Nebensatz)','в КОНЦЕ (придаточное)','at the END (subordinate)','SONDA (yan cümle)'):_t('auf Position '+(pos+1),'на позиции '+(pos+1),'at position '+(pos+1),(pos+1)+'. pozisyonda');
            return _t(
                'Das Verb «'+word+'» fehlt! Es steht '+vpos+'.',
                'Ты забыл(а) глагол «'+word+'»! Он стоит '+vpos+'.',
                'You forgot the verb "'+word+'"! It goes '+vpos+'.',
                '«'+word+'» fiilini unuttun! Yeri: '+vpos+'.'
            )+formula;
        }
        if(isPronoun) return _t(
            'Das Subjekt «'+word+'» fehlt!'+(isNeb?' Im Nebensatz kommt nach dem Konnektor das Subjekt.':''),
            'Ты забыл(а) подлежащее «'+word+'»!'+(isNeb?' В придаточном после союза обязательно идёт подлежащее!':''),
            'You forgot the subject "'+word+'"!'+(isNeb?' In a subordinate clause the subject follows the connector.':''),
            '«'+word+'» öznesini unuttun!'+(isNeb?' Yan cümlede bağlaçtan sonra özne gelir.':'')
        )+formula;
        if(connNames[lo]) return _t(
            'Der Konnektor «'+word+'» fehlt! Er verbindet die Satzteile.',
            'Ты забыл(а) союз «'+word+'» ('+connNames[lo]+'). Он соединяет части предложения.',
            'You forgot the connector "'+word+'" ('+connNames[lo]+'). It joins the clauses.',
            '«'+word+'» bağlacını unuttun ('+connNames[lo]+').'
        )+formula;
        return _t(
            'Das Wort «'+word+'» fehlt an Position '+(pos+1)+'.',
            'Ты забыл(а) слово «'+word+'» на позиции '+(pos+1)+'.',
            'You forgot the word "'+word+'" at position '+(pos+1)+'.',
            '«'+word+'» kelimesini unuttun (pozisyon '+(pos+1)+').'
        )+formula;
    }

    // === B: WRONG WORD — check pair dictionary ===
    if(wrongWord&&wrongWord!=='___'&&wrongWord!==word){
        const k1=lo+'|'+wlo, k2=wlo+'|'+lo;
        const pair=WORD_PAIRS[k1]||WORD_PAIRS[k2];
        if(pair){
            return (pair[L]||pair.en||pair.de||'')+formula;
        }
        // Check if wrong word is from correct sentence (wrong position)
        const wrongInCorrect=sentence.indexOf(wrongWord);
        if(wrongInCorrect!==-1&&wrongInCorrect!==pos){
            return _t(
                '«'+wrongWord+'» gehört auf Position '+(wrongInCorrect+1)+', nicht '+(pos+1)+'. Hier steht «'+word+'».',
                '«'+wrongWord+'» стоит на позиции '+(wrongInCorrect+1)+', а не '+(pos+1)+'. Здесь должно быть «'+word+'».',
                '"'+wrongWord+'" belongs at position '+(wrongInCorrect+1)+', not '+(pos+1)+'. Here should be "'+word+'".',
                '"'+wrongWord+'" '+(wrongInCorrect+1)+'. pozisyonda olmalı, '+(pos+1)+' değil. Burada "'+word+'" olmalı.'
            )+formula;
        }
        // Generic wrong word with role explanation
        let role='';
        if(isVerb){
            if(isNeb) role=_t(' Das Verb steht im Nebensatz am Ende.',' Глагол в придаточном стоит в КОНЦЕ.',' Verb goes to the end in subordinate.',' Yan cümlede fiil sonda.');
            else if(pos===1) role=_t(' Das Verb steht auf Position 2.',' Глагол стоит на 2-й позиции.',' Verb goes in position 2.',' Fiil 2. pozisyonda.');
        }
        if(connNames[lo]) role=_t(' «'+word+'» ('+connNames[lo]+') leitet einen Nebensatz ein.',' «'+word+'» ('+connNames[lo]+') — начинает придаточное предложение.',' "'+word+'" ('+connNames[lo]+') starts a subordinate clause.',' "'+word+'" ('+connNames[lo]+') yan cümle başlatır.');
        return _t(
            'Hier braucht man «'+word+'», nicht «'+wrongWord+'».'+role,
            'Здесь нужно «'+word+'», а не «'+wrongWord+'».'+role,
            'Here you need "'+word+'", not "'+wrongWord+'".'+role,
            'Burada "'+word+'" olmalı, "'+wrongWord+'" değil.'+role
        )+formula;
    }

    // === C: FALLBACK — positional rules (old logic as backup) ===
    if(isVerb&&pos===1&&!isNeb) return _t(
        'Das Verb «'+word+'» steht IMMER auf Position 2 im Hauptsatz!',
        'Глагол «'+word+'» ВСЕГДА на 2-й позиции в главном предложении!',
        'The verb "'+word+'" is ALWAYS in position 2 in main clauses!',
        '"'+word+'" fiili ana cümlede HER ZAMAN 2. pozisyonda!'
    )+formula;
    if(isVerb&&pos===sentence.length-1&&isNeb) return _t(
        'Im Nebensatz ('+cat+') steht das Verb «'+word+'» am ENDE!',
        'В придаточном ('+cat+') глагол «'+word+'» стоит в КОНЦЕ!',
        'In subordinate ('+cat+') the verb "'+word+'" goes to the END!',
        'Yan cümlede ('+cat+') "'+word+'" fiili SONA gider!'
    )+formula;
    if(connNames[lo]) return _t(
        '«'+word+'» ('+connNames[lo]+') — Konnektor. Verb ans Ende!',
        '«'+word+'» ('+connNames[lo]+') — союз. Глагол в конец!',
        '"'+word+'" ('+connNames[lo]+') — connector. Verb to the end!',
        '"'+word+'" ('+connNames[lo]+') — bağlaç. Fiil sona!'
    )+formula;
    if(item.rule) return item.rule+formula;
    return _t('Achte auf Wortstellung und Form!','Следи за порядком слов и формой!','Watch word order and form!','Kelime sırasına ve forma dikkat et!')+formula;
}

// ============== SUBLIMINAL ==============
function showSubliminal(word){
    const frame=$('subliminalFrame'),wEl=$('subliminalWord'),tEl=$('subliminalTrans');
    if(!frame||!wEl||!tEl) return;
    wEl.textContent=word.article?(word.article+' '+word.word):(word.german||word.verb||word.correct?.join(' ')||'');
    tEl.textContent=tr(word);
    frame.classList.add('visible');
    setTimeout(()=>frame.classList.remove('visible'),APP.subliminalMs);
}

function quitQ(){showMenu();}

// ============== RESULTS ==============
function showRes(){
    const ts=Math.round((Date.now()-APP.quiz.t0)/1000);
    const s=APP.quiz.score,tot=APP.quiz.items.length,pct=Math.round(s/tot*100);
    saveRes({d:Date.now(),s,tot,pct,ts,m:APP.quiz.cat+'_'+APP.quiz.mode});
    let emoji,msg;
    if(pct===100){emoji='🎉';msg=UI.perfect;}
    else if(pct>=80){emoji='🔥';msg=UI.excellent;}
    else if(pct>=60){emoji='👍';msg=UI.good;}
    else if(pct>=40){emoji='💪';msg=UI.notBad;}
    else{emoji='📚';msg=UI.studyMore;}

    $('app').innerHTML=`
        <div class="results-page">
            <div class="results-emoji">${emoji}</div>
            <div class="results-title">${msg}</div>
            <div class="results-score">${s}/${tot}</div>
            <div class="results-percent">${pct}%</div>
            <div class="results-details">
                <div class="results-detail-row"><span>${UI.correctAns}</span><span style="color:var(--success)">${s}</span></div>
                <div class="results-detail-row"><span>${UI.wrongAns}</span><span style="color:var(--danger)">${tot-s}</span></div>
                <div class="results-detail-row"><span>${UI.time}</span><span>${ts} ${UI.sec}</span></div>
            </div>
            <div class="results-actions">
                <button class="btn btn-primary" onclick="startQuiz('${APP.quiz.cat}','${APP.quiz.mode}')">🔄 ${UI.again}</button>
                ${(APP.quiz.items.length-(APP.quiz.knownTicked?APP.quiz.knownTicked.size:0))>0?`<button class="btn btn-accent" onclick="repeatUnmarked()">🎯 ${repeatUnmarkedLabel()} (${APP.quiz.items.length-(APP.quiz.knownTicked?APP.quiz.knownTicked.size:0)})</button>`:''}
                ${APP.quiz.wrongs&&APP.quiz.wrongs.length?`<button class="btn btn-accent" onclick="showWrongReview()">❌ ${tot-s} Fehler ansehen</button>`:''}
                <button class="btn btn-outline" onclick="showMenu()">&#8592; ${UI.menu}</button>
            </div>
        </div>`;
}
function repeatUnmarkedLabel(){
    const M={ru:'Повторить незнакомые',en:'Repeat unmarked',de:'Unbekannte wiederholen',tr:'İşaretsizleri tekrarla',ar:'كرر غير المعروفة',fa:'ناشناخته‌ها را تکرار کن',vi:'Lặp lại từ chưa biết'};
    return M[APP.lang||'ru']||M.de;
}

function showWrongReview(){
    if(!APP.quiz||!APP.quiz.wrongs||!APP.quiz.wrongs.length) return;
    const cards=APP.quiz.wrongs.map((w,i)=>{
        const q=w.item;
        const qLabel=q.word||q.german||q.verb||q.sentence||(q.correct?q.correct.join(' '):'')||'';
        return `<div class="review-card">
            <div class="review-num">${i+1}</div>
            <div class="review-body">
                <div class="review-question">${esc(qLabel)}</div>
                <div class="review-wrong">✗ ${esc(w.userAnswer)}</div>
                <div class="review-correct">✓ ${esc(w.correct)}</div>
            </div>
        </div>`;
    }).join('');
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="showRes()">&#8592;</button><span>Fehlerübersicht</span></div>
            </div>
            <div class="quiz-body" style="padding-top:16px">
                ${cards}
                <button class="btn btn-outline" onclick="showRes()" style="margin-top:16px">&#8592; Zurück</button>
            </div>
        </div>`;
}

// ============== STREAK ==============
function getStreak(){
    if(!APP.user) return {current:0,best:0,lastDate:''};
    return ld('streak_'+APP.user.id)||{current:0,best:0,lastDate:''};
}
function updateStreak(){
    if(!APP.user) return;
    const k='streak_'+APP.user.id;
    const d=ld(k)||{current:0,best:0,lastDate:''};
    const today=new Date().toISOString().slice(0,10);
    if(d.lastDate===today) return;
    const yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);
    d.current=(d.lastDate===yesterday)?(d.current+1):1;
    d.best=Math.max(d.best,d.current);
    d.lastDate=today;
    sv(k,d);
}

// ============== STATS ==============
function saveRes(r){if(!APP.user)return;updateStreak();const k='st_'+APP.user.id;const d=ld(k)||{r:[]};d.r.push(r);sv(k,d);}
function getStats(){
    if(!APP.user) return {total:0,avg:0};
    const d=ld('st_'+APP.user.id);
    if(!d||!d.r||!d.r.length) return {total:0,avg:0};
    return {total:d.r.length,avg:Math.round(d.r.reduce((s,x)=>s+x.pct,0)/d.r.length)};
}
function getDetailedStats(){
    if(!APP.user) return [];
    const d=ld('st_'+APP.user.id);
    if(!d||!d.r||!d.r.length) return [];
    const byMode={};
    d.r.forEach(r=>{
        const k=r.m||'unknown';
        if(!byMode[k]) byMode[k]={mode:k,total:0,correct:0,wrong:0,games:0,pctSum:0};
        byMode[k].games++;
        byMode[k].correct+=r.s;
        byMode[k].wrong+=(r.tot-r.s);
        byMode[k].total+=r.tot;
        byMode[k].pctSum+=r.pct;
    });
    return Object.values(byMode).map(s=>({
        ...s,
        avg:Math.round(s.pctSum/s.games),
        label:getModeName(s.mode)
    })).sort((a,b)=>a.avg-b.avg);
}
function getModeName(m){
    const names={
        words_article:'Artikel',words_de2l1:'DE→Übersetzung',words_l12de:'Übersetzung→DE',
        partizip_v2p:'Partizip II',partizip_aux:'haben/sein',
        reflexive_conj:'Reflexive Verben',reflexive_case:'Reflexiv: Akk/Dat',
        sentences_all:'Satzbau (alle)',
        prep_all:'Präpositionen',pron_all:'Pronomen'
    };
    if(names[m]) return names[m];
    if(m.startsWith('sentences_')) return 'Satzbau: '+(m.split('_')[1]||'');
    if(m.startsWith('prep_')) return 'Präp: '+(m.split('_').slice(1).join(' ')||'');
    if(m.startsWith('pron_')) return 'Pron: '+(m.split('_').slice(1).join(' ')||'');
    if(m.startsWith('vwu_')) return 'VWU: '+(m.split('_').slice(1).join(' ')||'');
    return m;
}
function showStats(){
    const stats=getDetailedStats();
    if(!stats.length){toast('Noch keine Statistik!');return;}
    const weak=stats.filter(s=>s.avg<60);
    const strong=stats.filter(s=>s.avg>=80);
    const mid=stats.filter(s=>s.avg>=60&&s.avg<80);

    const rowH=(arr,color)=>arr.map(s=>`
        <div class="stat-row">
            <div class="stat-row-label">${esc(s.label)}</div>
            <div class="stat-row-bar"><div class="stat-row-fill" style="width:${s.avg}%;background:${color}"></div></div>
            <div class="stat-row-pct" style="color:${color}">${s.avg}%</div>
        </div>
        <div class="stat-row-detail">${s.correct}/${s.total} richtig &bull; ${s.games} Spiele</div>
    `).join('');

    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="showMenu()">&#8592;</button><span>Meine Statistik</span></div>
            </div>
            <div class="quiz-body" style="padding-top:16px">
                ${weak.length?'<div class="stat-section"><div class="stat-section-title">&#10060; Schwächen</div>'+rowH(weak,'#e53935')+'</div>':''}
                ${mid.length?'<div class="stat-section"><div class="stat-section-title">&#9888;&#65039; Mittel</div>'+rowH(mid,'#FB8C00')+'</div>':''}
                ${strong.length?'<div class="stat-section"><div class="stat-section-title">&#10004; Stärken</div>'+rowH(strong,'#43A047')+'</div>':''}
                <button class="btn btn-outline" onclick="showMenu()" style="margin-top:20px">&#8592; ${UI.menu}</button>
            </div>
        </div>`;
}

// ============== VWU MENU ==============
function showVWUMenu(){
    let content='';
    VWU.levels.forEach(lv=>{
        const icon=lv.id==='av'?'📗':lv.id==='ev'?'📘':lv.id==='gf'?'📙':'📕';
        let testCards='';
        lv.tests.forEach(t=>{
            const isEmpty = t.empty || !t.sections || t.sections.length===0;
            let secTags;
            if(isEmpty){
                secTags='<span class="vwu-sec-tag vwu-tag-empty">🚧 In Vorbereitung</span>';
            } else {
                secTags=t.sections.map(s=>{
                    if(s.type==='leseverstehen') return '<span class="vwu-sec-tag vwu-tag-lesen">📖 Lesen</span>';
                    if(s.type==='wortschatz') return '<span class="vwu-sec-tag vwu-tag-wort">📚 Wortschatz</span>';
                    if(s.type==='strukturen') return '<span class="vwu-sec-tag vwu-tag-struk">🔧 Strukturen</span>';
                    if(s.type==='grammatik') return '<span class="vwu-sec-tag vwu-tag-gram">📝 Grammatik</span>';
                    if(s.type==='schreiben') return '<span class="vwu-sec-tag vwu-tag-schr">✍️ Schreiben</span>';
                    return '<span class="vwu-sec-tag">'+esc(s.name)+'</span>';
                }).join('');
            }
            const icon = isEmpty ? '🚧' : '📋';
            const cls = isEmpty ? 'sub-quiz-btn vwu-test-btn vwu-test-empty' : 'sub-quiz-btn vwu-test-btn';
            testCards+=`<button class="${cls}" onclick="startVWU('${lv.id}','${t.id}')">
                <div class="vwu-test-name">${icon} ${esc(t.name)}</div>
                <div class="vwu-test-tags">${secTags}</div>
            </button>`;
        });
        const open=APP.openCat==='catVWU_'+lv.id;
        content+=`<div class="cat-card">
            <div class="cat-header" onclick="toggleCat('catVWU_${lv.id}')">
                <span class="cat-icon">${icon}</span>
                <div class="cat-info"><div class="cat-title">${esc(lv.name)}</div><div class="cat-sub">${lv.tests.length} Tests &bull; ${esc(lv.desc)}</div></div>
                <span class="cat-arrow ${open?'open':''}">&rsaquo;</span>
            </div>
            <div class="cat-body" id="catVWU_${lv.id}" style="display:${open?'block':'none'}">${testCards}</div>
        </div>`;
    });
    $('app').innerHTML=`
        <div class="app-shell">
            <div class="app-header">
                <div class="app-header-left"><button class="quiz-back" onclick="showMenu()">&#8592;</button><h1>🎓 Prüfungsvorbereitung</h1></div>
            </div>
            <div class="app-content"><div class="menu-scroll" style="padding:12px 16px">${content}</div></div>
        </div>`;
    if(APP.openCat&&APP.openCat.indexOf('catVWU_')===0){
        setTimeout(()=>{
            const el=document.getElementById(APP.openCat);
            if(el){const card=el.closest('.cat-card');if(card)card.scrollIntoView({block:'start',behavior:'auto'});}
        },0);
    }
}

// ============== VWU TEST ENGINE ==============
function showVWUEmptyPlaceholder(){
    const v=APP.vwu;
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="showVWUMenu()">&#8592;</button><span>${v.test.name}</span></div>
            </div>
            <div class="quiz-body" style="text-align:center;padding:40px 20px">
                <div style="font-size:64px;margin-bottom:16px">🚧</div>
                <h2 style="color:var(--primary);margin-bottom:12px">In Vorbereitung</h2>
                <p style="color:var(--text-sub);margin-bottom:8px;line-height:1.6">
                    Dieser Test ist noch nicht verfügbar.
                </p>
                <p style="color:var(--text-sub);margin-bottom:24px;line-height:1.6">
                    Aktuell ist nur <strong>EV ZT1</strong> vollständig ausgearbeitet
                    mit Leseverstehen, Wortschatz, Strukturen, Grammatik und Textproduktion.
                </p>
                <button class="btn btn-primary" onclick="startVWU('ev','ev_zt1')">EV ZT1 starten</button>
                <button class="btn btn-outline" onclick="showVWUMenu()" style="margin-top:12px">Zurück</button>
            </div>
        </div>`;
}

function startVWU(levelId,testId){
    if(typeof VWU==='undefined') return;
    const level=VWU.levels.find(l=>l.id===levelId);
    if(!level) return;
    const test=level.tests.find(t=>t.id===testId);
    if(!test) return;
    if(test.empty||!test.sections||test.sections.length===0){
        APP.vwu={level,test:Object.assign({},test),secIdx:0};showVWUEmptyPlaceholder();return;
    }
    const backFn="startVWU('"+esc(levelId)+"','"+esc(testId)+"')";
    let cards='';
    test.sections.forEach((sec,i)=>{
        const icon=sec.type==='leseverstehen'?'📖':sec.type==='schreiben'?'✍️':'📝';
        const cnt=sec.type==='grammatik'?(sec.items?sec.items.length:'30')+' Aufgaben':sec.type==='leseverstehen'?'Leseverstehen':sec.type==='schreiben'?'Textproduktion':sec.type==='wortschatz'?'Wortschatz':sec.type==='strukturen'?'Strukturen':'';
        const nm=sec.name||sec.type;
        const rk=sec.ruleKey;
        const hasRule=rk&&typeof RULES!=='undefined'&&RULES[rk];
        const regelBtn=hasRule?`<span class="vwu-regel-btn" onclick="event.stopPropagation();showRule('${rk}','${backFn}')">📖</span>`:'';
        cards+=`<button class="sub-quiz-btn" onclick="runVWUSec('${esc(levelId)}','${esc(testId)}',${i})" style="text-align:left;position:relative">
            <span>${icon}</span> ${esc(nm)}
            <span style="font-size:0.75rem;color:var(--text-secondary);margin-left:auto">${cnt}</span>
            ${regelBtn}
        </button>`;
    });
    $('app').innerHTML=`
        <div class="app-shell">
            <div class="app-header">
                <div class="app-header-left"><button class="quiz-back" onclick="showVWUMenu()">&#8592;</button><h1>${esc(test.name)}</h1></div>
            </div>
            <div class="app-content"><div class="menu-scroll" style="padding:12px 16px">
                <button class="sub-quiz-btn vwu-all-btn" onclick="runVWUAll('${esc(levelId)}','${esc(testId)}')" style="text-align:center;font-weight:600;background:var(--primary);color:#fff;border:none">
                    🚀 Alle Abschnitte starten
                </button>
                ${cards}
            </div></div>
        </div>`;
}

function runVWUSec(levelId,testId,secIdx){
    const level=VWU.levels.find(l=>l.id===levelId);
    const origTest=level.tests.find(t=>t.id===testId);
    const sec=Object.assign({},origTest.sections[secIdx]);
    const test=Object.assign({},origTest,{sections:[sec]});
    APP.vwu={level,test,origTestId:testId,origSecIdx:secIdx,secIdx:0,gramIdx:0,gramScore:0,gramTotal:0,wrongs:[],t0:Date.now(),lesenPick:null,singleSection:true};
    showVWUSection();
}

function runVWUAll(levelId,testId){
    const level=VWU.levels.find(l=>l.id===levelId);
    const origTest=level.tests.find(t=>t.id===testId);
    const test=Object.assign({},origTest,{sections:origTest.sections.map(s=>Object.assign({},s))});
    APP.vwu={level,test,origTestId:testId,secIdx:0,gramIdx:0,gramScore:0,gramTotal:0,wrongs:[],t0:Date.now(),lesenPick:null};
    showVWUSection();
}

function showVWUSection(){
    const v=APP.vwu;
    if(!v) return;
    // Placeholder für leere Tests
    if(v.test.empty || !v.test.sections || v.test.sections.length===0){
        showVWUEmptyPlaceholder();return;
    }
    if(v.secIdx>=v.test.sections.length){showVWUResults();return;}
    let sec=v.test.sections[v.secIdx];
    // EV ZT1: Pool-basierte Substitution für Wortschatz/Strukturen/Grammatik
    if(v.test.id==='ev_zt1' && typeof EV_ZT1_POOL!=='undefined' && !sec._poolApplied){
        const pick=(arr)=>arr[Math.floor(Math.random()*arr.length)];
        if(sec.type==='wortschatz' && EV_ZT1_POOL.wortschatz.length){
            const p=pick(EV_ZT1_POOL.wortschatz);
            sec=Object.assign({},sec,{tasks:p.tasks,_poolApplied:true});
            v.test.sections[v.secIdx]=sec;
        } else if(sec.type==='strukturen' && EV_ZT1_POOL.strukturen.length){
            const p=pick(EV_ZT1_POOL.strukturen);
            sec=Object.assign({},sec,{tasks:p.tasks,_poolApplied:true});
            v.test.sections[v.secIdx]=sec;
        } else if(sec.type==='grammatik' && EV_ZT1_POOL.grammatik.length){
            const p=pick(EV_ZT1_POOL.grammatik);
            sec=Object.assign({},sec,{items:p.items,_poolApplied:true});
            v.test.sections[v.secIdx]=sec;
        }
    }
    if(sec.type==='grammatik'){v.gramIdx=0;v.gramScore=0;v.gramTotal=sec.items.length;showVWUGram();}
    else if(sec.type==='schreiben'){showVWUSchreiben();}
    else if(sec.type==='leseverstehen'){showVWULesen();}
    else if(sec.type==='wortschatz'){showVWUWortschatz();}
    else if(sec.type==='strukturen'){showVWUStrukturen();}
    else if(sec.type==='lueckentext'){v.gramIdx=0;v.gramScore=0;v.gramTotal=sec.items.length;showVWULuecke();}
    else{v.secIdx++;showVWUSection();}
}

function showVWULuecke(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    if(v.gramIdx>=sec.items.length){v.secIdx++;showVWUSection();return;}
    const item=sec.items[v.gramIdx];
    const num=v.gramIdx+1,tot=sec.items.length;
    const pct=(v.gramIdx/tot)*100;
    const rk=sec.ruleKey;
    const regelH=rk&&typeof RULES!=='undefined'&&RULES[rk]?`<button class="btn btn-outline rule-quiz-btn" onclick="showRule('${rk}','showVWULuecke()')">📖</button>`:'';
    let body='';
    if(item.questions){
        if(item.example){
            const eq=item.example;
            body+=`<div class="luecke-example"><strong>Beispiel:</strong> ${esc(eq.q)}<br><div class="luecke-chips luecke-chips-demo">`;
            eq.words.forEach((w,wi)=>{
                const cls=eq.wrong.includes(wi)?'luecke-chip-demo-wrong':'';
                body+=`<span class="luecke-chip-demo ${cls}">${esc(w)}</span>`;
            });
            body+=`</div></div>`;
        }
        item.questions.forEach((q,qi)=>{
            body+=`<div class="luecke-question"><div class="luecke-q-text">${esc(q.q)}</div><div class="luecke-chips">`;
            q.words.forEach((w,wi)=>{
                body+=`<label class="luecke-chip"><input type="checkbox" id="lk_${qi}_${wi}"><span>${esc(w)}</span></label>`;
            });
            body+=`</div></div>`;
        });
    } else if(item.satz){
        var sw=[...item.satz.words];for(var i=sw.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var tmp=sw[i];sw[i]=sw[j];sw[j]=tmp;}
        APP._satz={words:sw,built:[],start:item.satz.start||'',models:item.satz.models,checked:false};
        renderVWUSatz();return;
    } else if(item.text!==undefined&&item.blanks){
        const bankWords=item.bank||[];
        APP._luecke={blanks:item.blanks,bank:bankWords,reuse:sec.reuse||item.reuse||false,filled:new Array(item.blanks.length).fill(null),selectedSlot:0};
        if(bankWords.length){
            body+=`<div class="luecke-bank">`;
            if(sec.bankLabel) body+=`<em class="luecke-bank-label">${esc(sec.bankLabel)}</em>`;
            bankWords.forEach((w,i)=>{
                body+=`<button class="luecke-bchip" id="lbc_${i}" onclick="lueckePick(${i})">${esc(w)}</button>`;
            });
            body+=`</div>`;
        }
        let tx=esc(item.text).replace(/\n/g,'<br>');
        for(let i=0;i<item.blanks.length;i++){
            const h=item.hints?item.hints[i]||'':'';
            const hh=h?` <span class="luecke-hint">${esc(h)}</span>`:'';
            const sel=i===0?' luecke-slot-selected':'';
            tx=tx.replace('___'+i+'___',`<button class="luecke-slot${sel}" id="ls_${i}" onclick="lueckeSlot(${i})">___</button>${hh}`);
        }
        body+=`<div class="luecke-text">${tx}</div>`;
    }
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span class="quiz-progress-text">${esc(sec.name||v.test.name)} ${num}/${tot}</span></div>
                ${regelH}<span class="quiz-score" id="qsc">&#10003; ${v.gramScore}</span>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${esc(sec.desc||'Ergänzen Sie:')}</div>
                ${body}
                <button class="btn btn-primary luecke-check-btn" id="lueckeCheckBtn" onclick="checkVWULuecke()">Überprüfen</button>
                <div class="vwu-rule-hint" id="vwuRule" style="display:none"></div>
            </div>
        </div>`;
}

function lueckeSlot(idx){
    const L=APP._luecke;
    if(!L)return;
    if(L.filled[idx]!==null){
        const bi=L.filled[idx];
        L.filled[idx]=null;
        const s=document.getElementById('ls_'+idx);
        if(s){s.textContent='___';s.classList.remove('luecke-slot-filled');}
        if(!L.reuse){const c=document.getElementById('lbc_'+bi);if(c)c.classList.remove('luecke-bchip-used');}
    }
    document.querySelectorAll('.luecke-slot').forEach(s=>s.classList.remove('luecke-slot-selected'));
    const s=document.getElementById('ls_'+idx);
    if(s)s.classList.add('luecke-slot-selected');
    L.selectedSlot=idx;
}

function lueckePick(bi){
    const L=APP._luecke;
    if(!L)return;
    const chip=document.getElementById('lbc_'+bi);
    if(!L.reuse&&chip&&chip.classList.contains('luecke-bchip-used'))return;
    let t=L.selectedSlot;
    if(t===null||t===undefined||L.filled[t]!==null){t=L.filled.indexOf(null);if(t===-1)return;}
    L.filled[t]=bi;
    const w=L.bank[bi];
    const sl=document.getElementById('ls_'+t);
    if(sl){sl.textContent=w;sl.classList.add('luecke-slot-filled');sl.classList.remove('luecke-slot-selected');}
    if(!L.reuse&&chip)chip.classList.add('luecke-bchip-used');
    const nx=L.filled.indexOf(null);
    L.selectedSlot=nx;
    document.querySelectorAll('.luecke-slot').forEach(s=>s.classList.remove('luecke-slot-selected'));
    if(nx!==-1){const ns=document.getElementById('ls_'+nx);if(ns)ns.classList.add('luecke-slot-selected');}
}

function renderVWUSatz(){
    var v=APP.vwu,sec=v.test.sections[v.secIdx];
    var item=sec.items[v.gramIdx];
    var S=APP._satz,s=item.satz;
    var num=v.gramIdx+1,tot=sec.items.length;
    var pct=(v.gramIdx/tot)*100;
    var hint=s[APP.lang||'ru']||s.en||s.ru||'';
    var startC=S.start?'<span class="word-chip wc-correct">'+esc(S.start)+'</span>':'';
    var builtH=startC;
    if(S.checked&&!APP._satzCorr){
        var ok=S._wasOk;
        S.built.forEach(function(wi){builtH+='<span class="word-chip wc-correct">'+esc(S.words[wi])+'</span>';});
        if(!S.built.length) builtH+='<span class="sentence-ph">—</span>';
        var feedH='';
        if(ok) feedH='<div class="satz-feedback satz-fb-ok">✓ Richtig!</div>';
        else{
            feedH='<div class="satz-alts" style="margin-top:10px"><strong>Richtige Varianten:</strong><br>';
            s.models.slice(0,3).forEach(function(m){feedH+='<span style="color:#43A047">• '+esc(S.start+' '+m)+'</span><br>';});
            feedH+='</div>';
        }
        $('app').innerHTML='<div class="quiz-page"><div class="quiz-header"><div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span class="quiz-progress-text">'+esc(sec.name||v.test.name)+' '+num+'/'+tot+'</span></div><span class="quiz-score" id="qsc">&#10003; '+v.gramScore+'</span></div><div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:'+pct+'%"></div></div><div class="quiz-body"><div class="quiz-question-label">'+esc(s.text)+'</div><div class="quiz-hint">'+esc(hint)+'</div><div class="sentence-area">'+builtH+'</div>'+feedH+'<button class="btn btn-primary" style="margin-top:14px" onclick="nextVWUSatz()">Weiter →</button></div></div>';
        return;
    }
    S.built.forEach(function(wi,pi){builtH+='<span class="word-chip wc-user" onclick="satzRemove('+pi+')">'+esc(S.words[wi])+'</span>';});
    if(!S.built.length) builtH+='<span class="sentence-ph">Tippen Sie auf die Wörter...</span>';
    var poolH='';
    S.words.forEach(function(w,i){var used=S.built.indexOf(i)>=0;poolH+='<span class="word-chip pool-word'+(used?' pw-used':'')+'" onclick="'+(used?'':'satzPick('+i+')')+'">'+esc(w)+'</span>';});
    $('app').innerHTML='<div class="quiz-page"><div class="quiz-header"><div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span class="quiz-progress-text">'+esc(sec.name||v.test.name)+' '+num+'/'+tot+'</span></div><span class="quiz-score" id="qsc">&#10003; '+v.gramScore+'</span></div><div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:'+pct+'%"></div></div><div class="quiz-body"><div class="quiz-question-label">'+esc(s.text)+'</div><div class="quiz-hint">'+esc(hint)+'</div><div class="sentence-area">'+builtH+'</div><div class="word-pool">'+poolH+'</div><button class="btn btn-primary" style="margin-top:14px" onclick="checkVWUSatz()">Überprüfen</button></div></div>';
}
function satzPick(wi){var S=APP._satz;if(!S||S.checked||S.built.indexOf(wi)>=0)return;S.built.push(wi);renderVWUSatz();}
function satzRemove(pi){var S=APP._satz;if(!S||S.checked)return;S.built.splice(pi,1);renderVWUSatz();}
function checkVWUSatz(){
    var v=APP.vwu,sec=v.test.sections[v.secIdx],item=sec.items[v.gramIdx];
    var S=APP._satz;
    var built=S.built.map(function(wi){return S.words[wi];});
    var norm=function(s){return s.toLowerCase().replace(/[.,!?;:]/g,'').replace(/\s+/g,' ').trim();};
    var ok=false;
    for(var mi=0;mi<S.models.length;mi++){if(norm(built.join(' '))===norm(S.models[mi])){ok=true;break;}}
    S.checked=true;S._wasOk=ok;
    var perItem=sec.perItem||0.5;
    if(ok){v.gramScore+=perItem*2;var sc=$('qsc');if(sc)sc.textContent='✓ '+v.gramScore;renderVWUSatz();}
    else{
        if(navigator.vibrate)navigator.vibrate(100);
        var bestModel=S.models[0].split(' '),bestScore=-1;
        for(var mi=0;mi<S.models.length;mi++){var mw=S.models[mi].split(' ');var sc2=0;for(var i=0;i<Math.min(built.length,mw.length);i++){if(built[i]===mw[i])sc2++;}if(sc2>bestScore){bestScore=sc2;bestModel=mw;}}
        v.wrongs.push({q:item.satz.text,userAnswer:(S.start+' '+built.join(' ')).trim(),correct:S.start+' '+bestModel.join(' ')});
        startVWUSatzCorr(built,bestModel,item);
    }
}
function startVWUSatzCorr(userW,correctW,item){
    var corrs=[];
    for(var i=0;i<correctW.length;i++){
        if(i>=userW.length||userW[i]!==correctW[i]){
            var uw=i<userW.length?userW[i]:'___';
            corrs.push({pos:i,wrong:uw,correct:correctW[i]});
        }
    }
    if(!corrs.length){renderVWUSatz();return;}
    APP._satzCorr={corrs:corrs,corrIdx:0,corrDisplay:userW.slice(),correctWords:correctW,item:item};
    while(APP._satzCorr.corrDisplay.length<correctW.length) APP._satzCorr.corrDisplay.push('___');
    showVWUSatzCorr();
}
function showVWUSatzCorr(){
    var v=APP.vwu,sec=v.test.sections[v.secIdx];
    var C=APP._satzCorr;
    if(!C||C.corrIdx>=C.corrs.length){delete APP._satzCorr;renderVWUSatz();return;}
    var corr=C.corrs[C.corrIdx],item=C.item,s=item.satz;
    var num=v.gramIdx+1,tot=sec.items.length,pct=(v.gramIdx/tot)*100;
    var hint=s[APP.lang||'ru']||s.en||s.ru||'';
    var startC=s.start?'<span class="word-chip wc-correct">'+esc(s.start)+'</span>':'';
    var sentH=startC;
    for(var i=0;i<C.correctWords.length;i++){
        if(i<corr.pos){sentH+='<span class="word-chip wc-correct">'+esc(C.correctWords[i])+'</span>';}
        else if(i===corr.pos){sentH+='<span class="word-chip corr-wrong" id="corrW">'+esc(corr.wrong)+'</span>';sentH+='<span class="word-chip corr-right" id="corrR">'+esc(corr.correct)+'</span>';}
        else{var w=C.corrDisplay[i]||'___';sentH+='<span class="word-chip '+(w===C.correctWords[i]?'':'corr-pending')+'">'+esc(w)+'</span>';}
    }
    var altsH='<div class="satz-alts" style="margin-top:8px;font-size:0.82rem;color:#666">Auch richtig: '+s.models.slice(1,3).map(function(m){return '<em>'+esc(s.start+' '+m)+'</em>';}).join(' | ')+'</div>';
    $('app').innerHTML='<div class="quiz-page"><div class="quiz-header"><div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span class="quiz-progress-text">'+esc(sec.name||v.test.name)+' '+num+'/'+tot+'</span></div><span class="quiz-score" id="qsc">&#10003; '+v.gramScore+'</span></div><div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:'+pct+'%"></div></div><div class="quiz-body"><div class="quiz-question-label">'+esc(s.text)+'</div><div class="quiz-hint">'+esc(hint)+'</div><div class="sentence-area corr-mode">'+sentH+'</div><div class="corr-rule-box" id="corrRule"><div class="corr-rule-text" id="corrRuleText"></div><button class="corr-skip-btn" id="corrSkip" onclick="nextVWUSatzCorr()">→</button></div><div class="corr-counter">'+String(C.corrIdx+1)+' / '+C.corrs.length+' Korrekturen</div>'+altsH+'</div></div>';
    var wEl=$('corrW'),rEl=$('corrR'),ruleBox=$('corrRule'),ruleText=$('corrRuleText');
    if(ruleBox)ruleBox.style.opacity='0';
    if(rEl)rEl.style.display='none';
    setTimeout(function(){
        if(wEl)wEl.classList.add('corr-shake');
        setTimeout(function(){
            if(wEl){wEl.classList.remove('corr-shake');wEl.classList.add('corr-fade-out');}
            setTimeout(function(){
                if(wEl)wEl.style.display='none';
                if(rEl){rEl.style.display='';rEl.classList.add('corr-slide-in');}
                if(ruleBox){ruleBox.style.opacity='1';ruleBox.style.transition='opacity 0.4s';}
                if(ruleText){
                    var start=s.start||'';
                    var rule=start==='obwohl'?'obwohl → Nebensatz: Verb am ENDE!':start==='Trotzdem'?'Trotzdem → Hauptsatz: Verb auf Position 2!':start==='damit'?'damit → Nebensatz: Verb am ENDE!':'';
                    ruleText.innerHTML='📝 '+esc(rule);
                }
            },500);
        },600);
    },300);
}
function nextVWUSatzCorr(){
    var C=APP._satzCorr;
    if(C&&C.corrIdx<C.corrs.length){C.corrDisplay[C.corrs[C.corrIdx].pos]=C.corrs[C.corrIdx].correct;}
    C.corrIdx++;
    if(C.corrIdx>=C.corrs.length){delete APP._satzCorr;renderVWUSatz();}
    else{showVWUSatzCorr();}
}
function nextVWUSatz(){APP.vwu.gramIdx++;showVWULuecke();}

function checkVWULuecke(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    const item=sec.items[v.gramIdx];
    let score=0;
    const perItem=sec.perItem||0.5;
    if(item.questions){
        item.questions.forEach((q,qi)=>{
            q.words.forEach((w,wi)=>{
                const cb=document.getElementById('lk_'+qi+'_'+wi);
                if(!cb)return;
                cb.disabled=true;
                const isWrong=q.wrong.includes(wi);
                const chip=cb.closest('.luecke-chip');
                if(isWrong&&cb.checked){score+=perItem;chip.classList.add('luecke-chip-correct');}
                else if(isWrong&&!cb.checked){chip.classList.add('luecke-chip-missed');v.wrongs.push({q:q.q,userAnswer:'—',correct:w+' passt nicht'});}
                else if(!isWrong&&cb.checked){chip.classList.add('luecke-chip-wrong');v.wrongs.push({q:q.q,userAnswer:w,correct:'passt!'});}
                else{chip.classList.add('luecke-chip-ok');}
            });
        });
        } else if(item.text!==undefined&&item.blanks){
        const L=APP._luecke;
        item.blanks.forEach((acc,i)=>{
            const sl=document.getElementById('ls_'+i);
            if(!sl)return;
            const val=L&&L.filled[i]!==null?L.bank[L.filled[i]]:'';
            const ok=acc.some(a=>a.toLowerCase()===val.toLowerCase());
            sl.onclick=null;sl.style.cursor='default';
            if(ok){sl.classList.add('luecke-correct');score+=perItem;}
            else{sl.classList.add('luecke-wrong');sl.insertAdjacentHTML('afterend',`<span class="luecke-answer">${esc(acc[0])}</span>`);v.wrongs.push({q:'Lücke '+(i+1),userAnswer:val||'—',correct:acc[0]});}
        });
        document.querySelectorAll('.luecke-bchip').forEach(c=>{c.disabled=true;c.onclick=null;});
    }
    v.gramScore+=Math.round(score*10)/10;
    const sc=$('qsc');if(sc)sc.textContent='✓ '+v.gramScore;
    const btn=document.getElementById('lueckeCheckBtn');
    if(btn){btn.textContent='Weiter →';btn.onclick=function(){v.gramIdx++;showVWULuecke();};}
    document.querySelectorAll('.luecke-slot').forEach(s=>{s.onclick=null;s.style.cursor='default';});
    document.querySelectorAll('.luecke-chip input').forEach(cb=>{cb.disabled=true;});
}

function showVWUGram(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    if(v.gramIdx>=sec.items.length){v.secIdx++;showVWUSection();return;}
    const item=sec.items[v.gramIdx];
    const num=v.gramIdx+1,tot=sec.items.length;
    const pct=(v.gramIdx/tot)*100;
    const btns=item.opts.map(o=>`<button class="answer-btn" data-val="${esc(o)}" data-cor="${esc(item.ans)}" onclick="checkVWUGram(this)">${o}</button>`).join('');
    const rk=sec.ruleKey;
    const regelH=rk&&typeof RULES!=='undefined'&&RULES[rk]?`<button class="btn btn-outline rule-quiz-btn" onclick="showRule('${rk}','showVWUGram()')">📖</button>`:'';
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span class="quiz-progress-text">${esc(sec.name||v.test.name)} ${num}/${tot}</span></div>
                ${regelH}<span class="quiz-score" id="qsc">&#10003; ${v.gramScore}</span>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${sec.desc||'Ergänzen Sie:'}</div>
                <div class="vwu-sentence">${item.q.replace('___','<span class="vwu-blank">______</span>')}</div>
                <div class="quiz-answers stagger">${btns}</div>
                <div class="vwu-rule-hint" id="vwuRule" style="display:none"></div>
            </div>
        </div>`;
}

function checkVWUGram(btn){
    const val=btn.dataset.val,cor=btn.dataset.cor,ok=val===cor;
    const v=APP.vwu,sec=v.test.sections[v.secIdx],item=sec.items[v.gramIdx];
    if(ok){v.gramScore++;btn.classList.add('correct');}
    else{btn.classList.add('incorrect');v.wrongs.push({q:item.q,userAnswer:val,correct:cor,rule:item.rule});if(navigator.vibrate)navigator.vibrate(100);}
    document.querySelectorAll('.answer-btn').forEach(b=>{b.disabled=true;if(b.dataset.val===cor)b.classList.add('correct');});
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+v.gramScore;
    const ruleEl=$('vwuRule');
    if(ruleEl){ruleEl.style.display='block';ruleEl.innerHTML='📝 '+esc(item.rule);}
    setTimeout(()=>{v.gramIdx++;showVWUGram();},1500);
}

function showVWUSchreiben(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span>${v.test.name} &bull; Schreiben</span></div>
            </div>
            <div class="quiz-body">
                <div class="vwu-write-prompt">${esc(sec.prompt)}</div>
                ${sec.tip?'<div class="hint-box">💡 '+esc(sec.tip)+'</div>':''}
                <textarea id="vwuText" class="vwu-textarea" placeholder="Schreiben Sie hier..." oninput="updateWC()"></textarea>
                <div class="vwu-wc" id="vwuWC">0 Wörter</div>
                <button class="btn btn-primary" onclick="submitVWUWrite()" style="margin-top:12px">Abgeben</button>
            </div>
        </div>`;
}

function updateWC(){
    const t=$('vwuText');if(!t)return;
    const w=t.value.trim().split(/\s+/).filter(x=>x).length;
    const el=$('vwuWC');if(el)el.textContent=w+' Wörter';
}

function submitVWUWrite(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    const text=($('vwuText')||{}).value||'';
    const wc=text.trim().split(/\s+/).filter(x=>x).length;
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="showVWUResults()">&#8592;</button><span>Musterantwort</span></div>
            </div>
            <div class="quiz-body">
                <div class="vwu-write-prompt">${esc(sec.prompt)}</div>
                <div class="vwu-your-text"><strong>Ihr Text (${wc} Wörter):</strong><p>${esc(text)||'<em>Kein Text</em>'}</p></div>
                <div class="vwu-model"><strong>Musterantwort:</strong><p>${esc(sec.model)}</p></div>
                <div style="margin-top:16px;text-align:center">
                    <p style="font-size:0.85rem;color:var(--text-secondary)">Bewerten Sie sich selbst:</p>
                    <div style="display:flex;gap:8px;margin-top:8px">
                        <button class="btn btn-outline" onclick="rateVWU('gut')" style="flex:1;border-color:var(--success);color:var(--success)">Gut</button>
                        <button class="btn btn-outline" onclick="rateVWU('mittel')" style="flex:1;border-color:var(--warning);color:var(--warning)">Mittel</button>
                        <button class="btn btn-outline" onclick="rateVWU('schlecht')" style="flex:1;border-color:var(--danger);color:var(--danger)">Schlecht</button>
                    </div>
                </div>
            </div>
        </div>`;
}

function rateVWU(rating){
    const v=APP.vwu;
    v.writeRating=rating;
    v.secIdx++;
    showVWUSection();
}

// ============== LESEVERSTEHEN ==============
function showVWULesen(){
    const v=APP.vwu;
    let sec=v.test.sections[v.secIdx];
    // Für EV ZT1: zufälligen Text aus EV_ZT1_LESEN Pool wählen (10 Texte)
    if(v.test.id==='ev_zt1' && typeof EV_ZT1_LESEN!=='undefined' && EV_ZT1_LESEN.length){
        if(!v.lesenPick){
            const pick=EV_ZT1_LESEN[Math.floor(Math.random()*EV_ZT1_LESEN.length)];
            v.lesenPick=pick;
        }
        const p=v.lesenPick;
        sec={type:'leseverstehen',name:'Leseverstehen',points:sec.points||9,
             text:'<h3>'+p.title+'</h3>'+p.text,
             questions:p.questions};
    }
    let qHTML='';
    sec.questions.forEach((q,qi)=>{
        let inner='';
        if(q.type==='zuordnung'){
            // Match headings to Abschnitte A-D, one = X
            const cols=['A','B','C','D','X'];
            inner+=`<table class="vwu-zuord-table"><tr><th></th>${cols.map(c=>'<th>'+c+'</th>').join('')}</tr>`;
            q.headings.forEach((h,hi)=>{
                inner+=`<tr><td>${esc(h)}</td>${cols.map(c=>`<td><input type="radio" name="zuord_${qi}_${hi}" value="${c}"></td>`).join('')}</tr>`;
            });
            inner+=`</table>`;
        } else if(q.type==='richtigfalsch'){
            // R/F for multiple statements
            inner+=`<table class="vwu-rf-table"><tr><th></th><th>R</th><th>F</th></tr>`;
            q.statements.forEach((s,si)=>{
                inner+=`<tr id="rf_${qi}_${si}"><td>${esc(s.text)}</td><td><input type="radio" name="rf_${qi}_${si}" value="R"></td><td><input type="radio" name="rf_${qi}_${si}" value="F"></td></tr>`;
            });
            inner+=`</table>`;
        } else {
            // sinngemaess or default — radio options
            (q.opts||[]).forEach((o,oi)=>{
                inner+=`<label class="vwu-lv-opt"><input type="radio" name="lvq_${qi}" value="${oi}"><span>${esc(o)}</span></label>`;
            });
        }
        qHTML+=`<div class="vwu-lv-question" id="lvq_${qi}">
            <div class="vwu-lv-qnum">${qi+1}. ${esc(q.q)} <span class="vwu-lv-pts">(${q.points||1} P.)</span></div>
            ${inner}
        </div>`;
    });
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span>${v.test.name} &bull; Leseverstehen</span></div>
                <span class="quiz-score" id="qsc">&#10003; ${v.gramScore}</span>
            </div>
            <div class="quiz-body">
                <div class="vwu-section-label">Leseverstehen &bull; ${sec.points||9} Punkte</div>
                <div class="vwu-text-box">${sec.text}</div>
                <div class="vwu-lv-questions">${qHTML}</div>
                <button class="btn btn-primary" onclick="checkVWULesen()" style="margin-top:16px">Prüfen</button>
            </div>
        </div>`;
}
function checkVWULesen(){
    const v=APP.vwu;
    let sec=v.test.sections[v.secIdx];
    if(v.test.id==='ev_zt1' && v.lesenPick){
        sec={type:'leseverstehen',questions:v.lesenPick.questions};
    }
    let score=0;
    sec.questions.forEach((q,qi)=>{
        const box=document.getElementById('lvq_'+qi);
        if(!box) return;
        if(q.type==='zuordnung'){
            let sub=0;
            q.headings.forEach((h,hi)=>{
                const sel=document.querySelector('input[name="zuord_'+qi+'_'+hi+'"]:checked');
                const val=sel?sel.value:'';
                const correct=q.correctMap[hi]||q.correctMap[''+hi]||'';
                if(val===correct) sub++;
                else v.wrongs.push({q:h,userAnswer:val||'—',correct:correct,rule:'Überschrift → Abschnitt '+correct});
            });
            score+=sub;
            box.classList.add(sub===q.headings.length?'vwu-lv-correct':'vwu-lv-wrong');
            box.querySelectorAll('input').forEach(i=>i.disabled=true);
        } else if(q.type==='richtigfalsch'){
            q.statements.forEach((s,si)=>{
                const sel=document.querySelector('input[name="rf_'+qi+'_'+si+'"]:checked');
                const val=sel?sel.value:'';
                const ok=val===s.ans;
                const row=document.getElementById('rf_'+qi+'_'+si);
                if(row) row.classList.add(ok?'vwu-rf-correct':'vwu-rf-wrong');
                if(ok) score++;
                else v.wrongs.push({q:s.text,userAnswer:val||'—',correct:s.ans,rule:'Richtig/Falsch'});
            });
            box.querySelectorAll('input').forEach(i=>i.disabled=true);
        } else {
            const sel=document.querySelector('input[name="lvq_'+qi+'"]:checked');
            const userVal=sel?parseInt(sel.value):-1;
            const ok=userVal===q.ans;
            if(ok){score+=(q.points||1);box.classList.add('vwu-lv-correct');}
            else{box.classList.add('vwu-lv-wrong');v.wrongs.push({q:q.q,userAnswer:userVal>=0?q.opts[userVal]:'—',correct:q.opts[q.ans],rule:'Leseverstehen'});}
            box.querySelectorAll('input').forEach(i=>i.disabled=true);
            box.querySelectorAll('.vwu-lv-opt').forEach((o,oi)=>{if(oi===q.ans)o.classList.add('vwu-lv-opt-correct');});
        }
    });
    v.gramScore+=score;
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+v.gramScore;
    document.querySelectorAll('.quiz-body .btn-primary').forEach(b=>{
        b.textContent='Weiter →';b.setAttribute('onclick','nextVWUSec()');
    });
}
function nextVWUSec(){APP.vwu.secIdx++;showVWUSection();}

// ============== WORTSCHATZ ==============
function showVWUWortschatz(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    let tasksH='';
    sec.tasks.forEach((task,ti)=>{
        let innerH='';
        if(task.type==='noun2verb'){
            // Noun → Verb transformation + fill sentence
            innerH=`<div class="vwu-ws-example">Beispiel: <em>${esc(task.example.noun)}</em> → <strong><em>${esc(task.example.verb)}</em></strong>: ${task.example.sentence.replace(task.example.verb,'<u>'+esc(task.example.verb)+'</u>')}</div>`;
            task.items.forEach((it,ii)=>{
                innerH+=`<div class="vwu-ws-item"><span class="vwu-ws-noun">${esc(it.noun)}</span> → <input class="vwu-ws-input" id="ws_${ti}_${ii}" placeholder="..." autocomplete="off" autocapitalize="off"><span class="vwu-ws-sent">${esc(it.sentence)}</span></div>`;
            });
        } else if(task.type==='adjectives'){
            // Mark adjectives from word list
            innerH=`<div class="vwu-ws-wordgrid">`;
            task.words.forEach((w,wi)=>{
                innerH+=`<label class="vwu-ws-chip"><input type="checkbox" id="adj_${ti}_${wi}" value="${wi}"><span>${esc(w)}</span></label>`;
            });
            innerH+=`</div>`;
        } else if(task.type==='antonyms'){
            // Write the opposite
            innerH=`<div class="vwu-ws-example">Beispiel: <em>${esc(task.example.word)}</em> → <strong><em>${esc(task.example.answer)}</em></strong></div>`;
            task.items.forEach((it,ii)=>{
                innerH+=`<div class="vwu-ws-item"><span class="vwu-ws-noun">${esc(it.word)}</span> → <input class="vwu-ws-input" id="ant_${ti}_${ii}" placeholder="..." autocomplete="off" autocapitalize="off"></div>`;
            });
        }
        tasksH+=`<div class="vwu-task-block"><div class="vwu-task-title">${ti+1}. ${esc(task.q)} <span class="vwu-lv-pts">(${esc(task.scoring)})</span></div>${innerH}</div>`;
    });
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span>${v.test.name} &bull; Wortschatz</span></div>
                <span class="quiz-score" id="qsc">&#10003; ${v.gramScore}</span>
            </div>
            <div class="quiz-body">
                <div class="vwu-section-label">Wortschatz &bull; ${sec.points||8} Punkte</div>
                ${tasksH}
                <button class="btn btn-primary" onclick="checkVWUWortschatz()" style="margin-top:16px">Prüfen</button>
            </div>
        </div>`;
}
function checkVWUWortschatz(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    let score=0;
    sec.tasks.forEach((task,ti)=>{
        if(task.type==='noun2verb'){
            task.items.forEach((it,ii)=>{
                const inp=document.getElementById('ws_'+ti+'_'+ii);
                if(!inp) return;
                const val=inp.value.trim().toLowerCase();
                const ok=it.answers.some(a=>a.toLowerCase()===val);
                inp.classList.add(ok?'vwu-inp-correct':'vwu-inp-wrong');
                inp.disabled=true;
                if(ok) score+=task.perItem||0.5;
                else{inp.insertAdjacentHTML('afterend','<span class="vwu-ws-answer">'+esc(it.answers[0])+'</span>');v.wrongs.push({q:it.noun+' → ?',userAnswer:val||'—',correct:it.answers[0],rule:'Nomen → Verb'});}
            });
        } else if(task.type==='adjectives'){
            const correctSet=new Set(task.correctIdxs);
            task.words.forEach((w,wi)=>{
                const cb=document.getElementById('adj_'+ti+'_'+wi);
                if(!cb) return;
                const checked=cb.checked, isCorr=correctSet.has(wi);
                cb.disabled=true;
                const lbl=cb.closest('.vwu-ws-chip');
                if(checked&&isCorr){lbl.classList.add('vwu-chip-correct');score+=task.perItem||0.5;}
                else if(checked&&!isCorr){lbl.classList.add('vwu-chip-wrong');v.wrongs.push({q:'Adjektiv?',userAnswer:w,correct:'Nein',rule:w+' ist kein Adjektiv'});}
                else if(!checked&&isCorr){lbl.classList.add('vwu-chip-missed');}
            });
        } else if(task.type==='antonyms'){
            task.items.forEach((it,ii)=>{
                const inp=document.getElementById('ant_'+ti+'_'+ii);
                if(!inp) return;
                const val=inp.value.trim().toLowerCase();
                const ok=it.answers.some(a=>a.toLowerCase()===val);
                inp.classList.add(ok?'vwu-inp-correct':'vwu-inp-wrong');
                inp.disabled=true;
                if(ok) score+=task.perItem||0.5;
                else{inp.insertAdjacentHTML('afterend','<span class="vwu-ws-answer">'+esc(it.answers[0])+'</span>');v.wrongs.push({q:it.word+' → Gegenteil?',userAnswer:val||'—',correct:it.answers[0],rule:'Gegenteil: '+it.word+' → '+it.answers[0]});}
            });
        }
    });
    v.gramScore+=Math.round(score*10)/10;
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+v.gramScore;
    document.querySelectorAll('.quiz-body .btn-primary').forEach(b=>{b.textContent='Weiter →';b.setAttribute('onclick','nextVWUSec()');});
}

// ============== STRUKTUREN ==============
function showVWUStrukturen(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    let tasksH='';
    sec.tasks.forEach((task,ti)=>{
        let innerH='';
        if(task.type==='infinitiv_zu'){
            task.items.forEach((it,ii)=>{
                innerH+=`<div class="vwu-str-item"><span class="vwu-str-prefix">${esc(it.start)}</span><input class="vwu-ws-input vwu-str-long" id="infzu_${ti}_${ii}" placeholder="...zu + Infinitiv" autocomplete="off"></div>`;
            });
        } else if(task.type==='praepositionen'){
            // Lückentext mit Präpositionen+Artikel
            let blankIdx=0;
            const textH=task.text.replace(/___ ___/g,()=>{
                const id='praep_'+ti+'_'+blankIdx;blankIdx++;
                return `<input class="vwu-ws-input vwu-str-fill" id="${id}" placeholder="..." autocomplete="off" style="width:90px">`;
            });
            if(task.example) innerH+=`<div class="vwu-ws-example">Beispiel: <em>${esc(task.example)}</em></div>`;
            innerH+=`<div class="vwu-str-text">${textH}</div>`;
        } else if(task.type==='satzanfaenge'){
            innerH+=`<div class="vwu-str-stem">${esc(task.stem)}</div>`;
            task.connectors.forEach((c,ci)=>{
                innerH+=`<div class="vwu-str-item"><span class="vwu-str-connector">... ${esc(c)}</span><input class="vwu-ws-input vwu-str-long" id="satza_${ti}_${ci}" placeholder="..." autocomplete="off"></div>`;
            });
        } else if(task.type==='konjunktiv2'){
            task.items.forEach((it,ii)=>{
                innerH+=`<div class="vwu-str-item"><div class="vwu-str-orig">${esc(it.imperativ)}</div><input class="vwu-ws-input vwu-str-long" id="konj_${ti}_${ii}" placeholder="Könnten Sie / Würdest du ..." autocomplete="off"></div>`;
            });
        } else if(task.type==='stehen_liegen'){
            if(task.verbs) innerH+=`<div class="vwu-str-verbs">${task.verbs.map(vb=>'<span class="vwu-str-verb">'+esc(vb)+'</span>').join(' ')}</div>`;
            task.items.forEach((it,ii)=>{
                innerH+=`<div class="vwu-str-item"><span class="vwu-str-prefix">${esc(it.nouns)}</span><input class="vwu-ws-input vwu-str-long" id="stlg_${ti}_${ii}" placeholder="Bilden Sie einen Satz..." autocomplete="off"></div>`;
            });
        } else if(task.type==='fill'){
            task.items.forEach((it,ii)=>{
                const sentH=it.sentence.replace(/___/g,`<input class="vwu-ws-input vwu-str-fill" id="str_${ti}_${ii}" placeholder="..." autocomplete="off">`);
                innerH+=`<div class="vwu-str-item">${it.prefix?'<span class="vwu-str-prefix">'+esc(it.prefix)+'</span>':''} ${sentH}</div>`;
            });
        }
        tasksH+=`<div class="vwu-task-block"><div class="vwu-task-title">${ti+1}. ${esc(task.q)} <span class="vwu-lv-pts">(${esc(task.scoring)})</span></div>${innerH}</div>`;
    });
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span>${v.test.name} &bull; Strukturen</span></div>
                <span class="quiz-score" id="qsc">&#10003; ${v.gramScore}</span>
            </div>
            <div class="quiz-body">
                <div class="vwu-section-label">Strukturen &bull; ${sec.points||23} Punkte</div>
                ${tasksH}
                <button class="btn btn-primary" onclick="checkVWUStrukturen()" style="margin-top:16px">Prüfen</button>
            </div>
        </div>`;
}
function checkVWUStrukturen(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    let score=0;
    sec.tasks.forEach((task,ti)=>{
        if(task.type==='praepositionen'){
            (task.blanks||[]).forEach((bl,bi)=>{
                const inp=document.getElementById('praep_'+ti+'_'+bi);
                if(!inp) return;
                const val=inp.value.trim().toLowerCase();
                const ok=bl.answers.some(a=>a.toLowerCase()===val);
                inp.classList.add(ok?'vwu-inp-correct':'vwu-inp-wrong');
                inp.disabled=true;
                if(ok) score+=task.perItem||0.5;
                else{inp.insertAdjacentHTML('afterend','<span class="vwu-ws-answer">'+esc(bl.answers[0])+'</span>');v.wrongs.push({q:'Präposition + Artikel',userAnswer:val||'—',correct:bl.answers[0],rule:task.q});}
            });
        } else if(task.type==='satzanfaenge'){
            // Free text — show model answers, self-rate
            task.connectors.forEach((c,ci)=>{
                const inp=document.getElementById('satza_'+ti+'_'+ci);
                if(!inp) return;
                inp.disabled=true;
                const ex=task.examples&&task.examples[ci]?task.examples[ci]:'';
                inp.insertAdjacentHTML('afterend','<span class="vwu-ws-answer" style="color:var(--primary)">Beispiel: '+esc(ex)+'</span>');
                if(inp.value.trim().length>3) score+=task.perItem||1;
            });
        } else if(task.type==='konjunktiv2'){
            task.items.forEach((it,ii)=>{
                const inp=document.getElementById('konj_'+ti+'_'+ii);
                if(!inp) return;
                inp.disabled=true;
                inp.insertAdjacentHTML('afterend','<span class="vwu-ws-answer" style="color:var(--primary)">Beispiel: '+esc(it.example)+'</span>');
                if(inp.value.trim().length>5) score+=task.perItem||1.5;
            });
        } else if(task.type==='infinitiv_zu'){
            task.items.forEach((it,ii)=>{
                const inp=document.getElementById('infzu_'+ti+'_'+ii);
                if(!inp) return;
                inp.disabled=true;
                inp.insertAdjacentHTML('afterend','<span class="vwu-ws-answer" style="color:var(--primary)">Beispiel: '+esc(it.example)+'</span>');
                if(inp.value.trim().length>5) score+=task.perItem||1.5;
            });
        } else if(task.type==='stehen_liegen'){
            task.items.forEach((it,ii)=>{
                const inp=document.getElementById('stlg_'+ti+'_'+ii);
                if(!inp) return;
                inp.disabled=true;
                inp.insertAdjacentHTML('afterend','<span class="vwu-ws-answer" style="color:var(--primary)">Beispiel: '+esc(it.example)+'</span>');
                if(inp.value.trim().length>5) score+=task.perItem||1.5;
            });
        } else {
            // fill type
            (task.items||[]).forEach((it,ii)=>{
                const inp=document.getElementById('str_'+ti+'_'+ii);
                if(!inp) return;
                const val=inp.value.trim().toLowerCase().replace(/\s+/g,' ');
                const ok=(it.answers||[]).some(a=>a.toLowerCase().replace(/\s+/g,' ')===val);
                inp.classList.add(ok?'vwu-inp-correct':'vwu-inp-wrong');
                inp.disabled=true;
                if(ok) score+=task.perItem||1;
                else{inp.insertAdjacentHTML('afterend','<span class="vwu-ws-answer">'+esc((it.answers||[''])[0])+'</span>');v.wrongs.push({q:it.prefix||it.sentence||'',userAnswer:val||'—',correct:(it.answers||[''])[0],rule:task.q});}
            });
        }
    });
    v.gramScore+=Math.round(score*10)/10;
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+v.gramScore;
    document.querySelectorAll('.quiz-body .btn-primary').forEach(b=>{b.textContent='Weiter →';b.setAttribute('onclick','nextVWUSec()');});
}

function showVWUResults(){
    const v=APP.vwu;
    if(!v) return showMenu();
    const ts=Math.round((Date.now()-v.t0)/1000);
    // Calculate total points across all sections
    let maxPts=0;
    v.test.sections.forEach(s=>{
        if(s.type==='grammatik') maxPts+=s.items.length;
        else if(s.type==='leseverstehen') maxPts+=(s.points||9);
        else if(s.type==='wortschatz') maxPts+=(s.points||8);
        else if(s.type==='strukturen') maxPts+=(s.points||23);
    });
    const tot=maxPts||1;
    const pct=Math.round(v.gramScore/tot*100);
    saveRes({d:Date.now(),s:v.gramScore,tot,pct,ts,m:'vwu_'+v.test.id});
    let emoji,msg;
    if(pct>=80){emoji='🎉';msg='Ausgezeichnet!';}
    else if(pct>=60){emoji='👍';msg='Gut gemacht!';}
    else{emoji='📚';msg='Weiter lernen!';}

    const wrongCards=v.wrongs.length?v.wrongs.map((w,i)=>`
        <div class="review-card">
            <div class="review-num">${i+1}</div>
            <div class="review-body">
                <div class="review-question">${esc(w.q)}</div>
                <div class="review-wrong">✗ ${esc(w.userAnswer)}</div>
                <div class="review-correct">✓ ${esc(w.correct)}</div>
                <div style="font-size:0.75rem;color:var(--text-secondary);margin-top:2px">📝 ${esc(w.rule)}</div>
            </div>
        </div>
    `).join(''):'';

    $('app').innerHTML=`
        <div class="results-page">
            <div class="results-emoji">${emoji}</div>
            <div class="results-title">${msg}</div>
            <div class="results-score">${v.gramScore}/${tot}</div>
            <div class="results-percent">${pct}%</div>
            ${v.writeRating?`<div style="margin:8px 0;font-size:0.9rem">Schreiben: <strong>${v.writeRating}</strong></div>`:''}
            <div class="results-details">
                <div class="results-detail-row"><span>Richtig</span><span style="color:var(--success)">${v.gramScore}</span></div>
                <div class="results-detail-row"><span>Falsch</span><span style="color:var(--danger)">${tot-v.gramScore}</span></div>
                <div class="results-detail-row"><span>Zeit</span><span>${ts} Sek</span></div>
            </div>
            ${wrongCards?'<div style="margin-top:16px;text-align:left"><div class="stat-section-title">&#10060; Fehler</div>'+wrongCards+'</div>':''}
            <div class="results-actions">
                <button class="btn btn-primary" onclick="${v.singleSection?`runVWUSec('${v.level.id}','${v.origTestId||v.test.id}',${v.origSecIdx||0})`:`runVWUAll('${v.level.id}','${v.origTestId||v.test.id}')`}">🔄 Nochmal</button>
                <button class="btn btn-outline" onclick="startVWU('${v.level.id}','${v.origTestId||v.test.id}')">&#8592; Zum Test</button>
            </div>
        </div>`;
}

function quitVWU(){
    const v=APP.vwu;
    if(v&&v.origTestId) startVWU(v.level.id,v.origTestId);
    else showVWUMenu();
}

// ============== START ==============
window.addEventListener('DOMContentLoaded', initApp);
