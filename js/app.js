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
const LANG_FLAGS = {ru:"🇷🇺", en:"🇬🇧", tr:"🇹🇷", ar:"🇸🇦", fa:"🇮🇷"};
const LANG_NAMES = {ru:"Русский", en:"English", tr:"Türkçe", ar:"العربية", fa:"فارسی"};

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

// Get translation of a word in the current helper language
function tr(w) {
    if (APP.lang !== 'ru' && w[APP.lang]) return w[APP.lang];
    return w.ru || w.en || w.german || w.verb || '';
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
function catHTML(icon,title,cnt,progKey,total,bodyId,bodyContent){
    const p=getProgressPct(progKey,total);
    const open=APP.openCat===bodyId;
    return `<div class="cat-card">
        <div class="cat-header" onclick="toggleCat('${bodyId}')">
            <span class="cat-icon">${icon}</span>
            <div class="cat-info"><div class="cat-title">${title}</div><div class="cat-sub">${cnt} &bull; ${p}% gelernt</div></div>
            <span class="cat-arrow ${open?'open':''}">&rsaquo;</span>
        </div>
        <div class="cat-progress"><div class="cat-progress-fill" style="width:${p}%"></div></div>
        <div class="cat-body" id="${bodyId}" style="display:${open?'block':'none'}">${bodyContent}</div>
    </div>`;
}
function sqBtn(icon,label,cat,mode){
    return `<button class="sub-quiz-btn" onclick="startQuiz('${cat}','${mode}')">${icon} ${label}</button>`;
}
function ruleBtn(cat){
    if(typeof RULES==='undefined'||!RULES[cat]) return '';
    return `<button class="sub-quiz-btn rule-btn" onclick="showRule('${cat}')">📖 Regel</button>`;
}
function showRule(cat){
    if(typeof RULES==='undefined'||!RULES[cat]) return;
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="showMenu()">&#8592;</button><span>Grammatikregel</span></div>
            </div>
            <div class="quiz-body rule-page">${RULES[cat]}</div>
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
        ruleBtn('partizip')+
        sqBtn('➡️','Verb → hat/ist + Partizip II','partizip','v2p')+
        sqBtn('🔀','haben oder sein?','partizip','aux'));
    // 3. Reflexive
    if(hasRf) cats+=catHTML('🔄','Reflexive Verben',REFLEXIVE.length+' Verben','reflexive_conj',REFLEXIVE.length,'catReflex',
        ruleBtn('reflexive')+
        sqBtn('✍️','Satz vervollständigen','reflexive','conj')+
        sqBtn('🎯','Akkusativ oder Dativ?','reflexive','case'));
    // 4. Satzbau
    if(hasSn){
        const snCats=[...new Set(SENTENCES.map(s=>s.cat))];
        let snBtns=sqBtn('📐','Alle Themen','sentences','all');
        const snLabels={tekamolo:'TEKAMOLO',weil:'weil-Sätze',dass:'dass-Sätze',wenn:'wenn-Sätze',als:'als-Sätze',
            ob:'ob-Sätze',obwohl:'obwohl-Sätze',damit:'damit-Sätze',um_zu:'um...zu',trotzdem:'trotzdem',
            deshalb:'deshalb',denn:'denn-Sätze',aber:'aber-Sätze',nachdem:'nachdem',bevor:'bevor',
            waehrend:'während',relativ:'Relativsätze',passiv:'Passiv',konjunktiv:'Konjunktiv II',
            je_desto:'je...desto',modal:'Modalverben',hauptsatz:'Hauptsätze',sondern:'sondern',
            seitdem:'seitdem',bis:'bis',sobald:'sobald',textbau:'Textbau (B2-C2)'};
        snCats.forEach(c=>{
            const ruleKey='satz_'+c;
            const hasRule=typeof RULES!=='undefined'&&RULES[ruleKey];
            snBtns+=(hasRule?`<button class="sub-quiz-btn rule-btn" onclick="showRule('${ruleKey}')" style="font-size:0.75rem;opacity:0.7;padding:6px 10px">📖 Regel: ${snLabels[c]||c}</button>`:'')+sqBtn('📎',snLabels[c]||c,'sentences',c);
        });
        cats+=catHTML('📐','Satzbau',SENTENCES.length+' Übungen','sentences_all',SENTENCES.length,'catSatz',ruleBtn('sentences')+snBtns);
    }
    // 5. Präpositionen
    if(hasPp) cats+=catHTML('📌','Präpositionen',PREPOSITIONS.length+' Übungen','prep_all',PREPOSITIONS.length,'catPrep',
        ruleBtn('prepositions')+
        sqBtn('📌','Alle Präpositionen','prepositions','all')+
        sqBtn('🔄','Wechselpräpositionen','prepositions','wechsel')+
        sqBtn('📗','Dativ-Präpositionen','prepositions','dativ')+
        sqBtn('📕','Akkusativ-Präpositionen','prepositions','akkusativ')+
        sqBtn('📘','Genitiv-Präpositionen','prepositions','genitiv')+
        sqBtn('🔗','Verb + Präposition','prepositions','verb_prep'));
    // 6. Pronomen
    if(hasPn) cats+=catHTML('👥','Pronomen',PRONOUNS.length+' Übungen','pron_all',PRONOUNS.length,'catPron',
        ruleBtn('pronouns')+
        sqBtn('👤','Alle Pronomen','pronouns','all')+
        sqBtn('🙋','Personalpronomen','pronouns','personal')+
        sqBtn('📎','Possessivpronomen','pronouns','possessiv')+
        sqBtn('🔄','Reflexivpronomen','pronouns','reflexiv')+
        sqBtn('🔗','Relativpronomen','pronouns','relativ')+
        sqBtn('❓','Indefinitpronomen','pronouns','indefinit'));

    // 7. VWU — отдельная кнопка ведёт в showVWUMenu()
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
    APP.quiz={type,cat,mode,items:shuffle(pool).slice(0,n),idx:0,score:0,t0:Date.now(),built:[],allW:[],correctS:[],wrongs:[]};
    showQ();
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
            hint=tr(item)+' ('+item.verb+')';
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
        label=item.sentence.replace('___','______');display='';hint=tr(item);
        correct=item.answer;
        // Generate 10 confusing options
        const allPreps=['in','an','auf','über','unter','vor','hinter','neben','zwischen','zu','bei','mit','nach','seit','von','aus','durch','für','gegen','ohne','um','wegen','trotz','während','statt','außerhalb','innerhalb','anstelle','aufgrund','entgegen'];
        const pool=allPreps.filter(p=>p!==item.answer);
        opts=shuffle([...new Set([...item.options,...shuffle(pool).slice(0,8),correct])]).slice(0,10);
        if(!opts.includes(correct)) opts[9]=correct;
        opts=shuffle(opts);
    }else if(cat==='pronouns'){
        label=item.sentence.replace('___','______');display='';hint=tr(item);
        correct=item.answer;
        // More pronoun options to confuse
        const allProns=['ich','du','er','sie','es','wir','ihr','mich','dich','sich','uns','euch','mir','dir','ihm','ihr','ihnen','mein','dein','sein','ihre','unser','euer','meinen','meinem','meine','meiner','dieser','diese','dieses','diesem','diesen','der','die','das','den','dem','dessen','deren','denen','jemand','niemand','man','etwas','nichts','alle'];
        const pool=allProns.filter(p=>p!==item.answer&&!item.options.includes(p));
        opts=shuffle([...new Set([...item.options,...shuffle(pool).slice(0,4),correct])]).slice(0,8);
        if(!opts.includes(correct)) opts[7]=correct;
        opts=shuffle(opts);
    }
    return {label,display,hint,opts,correct,isArt};
}

function showMCQ(){
    const q=prepareMCQ();
    const pct=(APP.quiz.idx/APP.quiz.items.length)*100;
    const num=APP.quiz.idx+1,tot=APP.quiz.items.length;
    const btns=q.opts.map(o=>`<button class="answer-btn" data-val="${esc(o)}" data-cor="${esc(q.correct)}" onclick="checkA(this)">${o}</button>`).join('');

    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitQ()">&#8592;</button><span class="quiz-progress-text">${num} ${UI.of} ${tot}</span></div>
                <span class="quiz-score" id="qsc">&#10003; ${APP.quiz.score}</span>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${q.label}</div>
                ${q.display?`<div class="quiz-word">${q.display}</div>`:''}
                ${q.hint?`<div class="quiz-hint">${q.hint}</div>`:''}
                <div class="quiz-answers ${q.isArt?'article-mode':''} stagger">${btns}</div>
            </div>
        </div>`;
}

function checkA(btn){
    const val=btn.dataset.val,cor=btn.dataset.cor,ok=val===cor;
    const item=APP.quiz.items[APP.quiz.idx];
    if(ok){
        APP.quiz.score++;btn.classList.add('correct');
        markKnown(item.id,APP.quiz.cat+'_'+APP.quiz.mode);
    }else{
        btn.classList.add('incorrect');
        APP.quiz.wrongs.push({item,userAnswer:val,correct:cor});
        if(navigator.vibrate) navigator.vibrate(100);
    }
    document.querySelectorAll('.answer-btn').forEach(b=>{b.disabled=true;if(b.dataset.val===cor)b.classList.add('correct');});
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+APP.quiz.score;
    if(APP.subliminal) showSubliminal(item);
    setTimeout(()=>{APP.quiz.idx++;showQ();},1200);
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
        tr:['Fiil her zaman 2. pozisyondadır.','Özne + Fiil + Nesne temel kuraldır.']},
    tekamolo:{de:['Reihenfolge: Temporal → Kausal → Modal → Lokal.','Wann? Warum? Wie? Wo? — TeKaMoLo!'],
        ru:['Порядок: Когда → Почему → Как → Где (TeKaMoLo).','Wann? Warum? Wie? Wo? — TeKaMoLo!'],
        en:['Order: When → Why → How → Where (TeKaMoLo).','Wann? Warum? Wie? Wo? — TeKaMoLo!'],
        tr:['Sıralama: Ne zaman → Neden → Nasıl → Nerede (TeKaMoLo).']},
    modal:{de:['Modalverb auf Position 2, Infinitiv am Ende.'],
        ru:['Модальный глагол на 2-й позиции, инфинитив в конце.'],
        en:['Modal verb in position 2, infinitive at the end.'],
        tr:['Modal fiil 2. pozisyonda, mastar sonda.']},
    weil:{de:['Nach "weil" steht das Verb am Ende!'],
        ru:['После "weil" (потому что) глагол в КОНЦЕ!'],
        en:['After "weil" (because) the verb goes to the END!'],
        tr:['"weil" (çünkü) den sonra fiil SONA gider!']},
    dass:{de:['Nach "dass" steht das Verb am Ende!'],
        ru:['После "dass" (что) глагол в КОНЦЕ!'],
        en:['After "dass" (that) the verb goes to the END!'],
        tr:['"dass" (ki) den sonra fiil SONA gider!']},
    wenn:{de:['Nach "wenn" steht das Verb am Ende!'],
        ru:['После "wenn" (если/когда) глагол в КОНЦЕ!'],
        en:['After "wenn" (if/when) the verb goes to the END!'],
        tr:['"wenn" (eğer/ne zaman) dan sonra fiil SONA gider!']},
    als:{de:['Nach "als" steht das Verb am Ende!'],
        ru:['После "als" (когда — одноразово в прошлом) глагол в КОНЦЕ!'],
        en:['After "als" (when — one-time past) verb goes to the END!'],
        tr:['"als" (ne zaman — geçmişte bir kez) dan sonra fiil SONA gider!']},
    ob:{de:['Nach "ob" steht das Verb am Ende!'],
        ru:['После "ob" (ли — косвенный вопрос) глагол в КОНЦЕ!'],
        en:['After "ob" (whether) the verb goes to the END!'],
        tr:['"ob" (acaba) dan sonra fiil SONA gider!']},
    obwohl:{de:['Nach "obwohl" steht das Verb am Ende!'],
        ru:['После "obwohl" (хотя) глагол в КОНЦЕ!'],
        en:['After "obwohl" (although) the verb goes to the END!'],
        tr:['"obwohl" (rağmen) den sonra fiil SONA gider!']},
    damit:{de:['Nach "damit" steht das Verb am Ende!'],
        ru:['После "damit" (чтобы, разные субъекты) глагол в КОНЦЕ!'],
        en:['After "damit" (so that, different subjects) verb goes to the END!'],
        tr:['"damit" (diye, farklı özneler) den sonra fiil SONA gider!']},
    um_zu:{de:['um + zu + Infinitiv am Ende.'],
        ru:['um...zu + инфинитив в конце (чтобы, одинаковый субъект).'],
        en:['um...zu + infinitive at the end (in order to, same subject).'],
        tr:['um...zu + mastar sonda (amacıyla, aynı özne).']},
    trotzdem:{de:['Nach "trotzdem" — Verb auf Position 2!'],
        ru:['После "trotzdem" (тем не менее) — глагол на 2-й позиции! Главное предложение.'],
        en:['After "trotzdem" (nevertheless) — verb in position 2! Main clause.'],
        tr:['"trotzdem" (buna rağmen) dan sonra fiil 2. pozisyonda!']},
    deshalb:{de:['Nach "deshalb" — Verb auf Position 2!'],
        ru:['После "deshalb" (поэтому) — глагол на 2-й позиции!'],
        en:['After "deshalb" (therefore) — verb in position 2!'],
        tr:['"deshalb" (bu yüzden) dan sonra fiil 2. pozisyonda!']},
    denn:{de:['Nach "denn" — normale Wortstellung!'],
        ru:['После "denn" (потому что) — обычный порядок слов, глагол на 2-й позиции!'],
        en:['After "denn" (because) — normal word order, verb in position 2!'],
        tr:['"denn" (çünkü) den sonra normal sözcük sırası!']},
    aber:{de:['Nach "aber" — normale Wortstellung!'],
        ru:['После "aber" (но) — обычный порядок слов.'],
        en:['After "aber" (but) — normal word order.'],
        tr:['"aber" (ama) dan sonra normal sözcük sırası.']},
    sondern:{de:['nicht...sondern — Korrektur einer Aussage.'],
        ru:['nicht...sondern (не...а) — исправление утверждения.'],
        en:['nicht...sondern (not...but rather) — correcting a statement.'],
        tr:['nicht...sondern (değil...aksine) — bir ifadeyi düzeltme.']},
    nachdem:{de:['Nach "nachdem" — Verb am Ende + Plusquamperfekt!'],
        ru:['После "nachdem" (после того как) — глагол в конце + Plusquamperfekt!'],
        en:['After "nachdem" (after) — verb at end + past perfect!'],
        tr:['"nachdem" (sonra) dan sonra fiil sonda + Plusquamperfekt!']},
    bevor:{de:['Nach "bevor" — Verb am Ende!'],
        ru:['После "bevor" (прежде чем) — глагол в КОНЦЕ!'],
        en:['After "bevor" (before) — verb at the END!'],
        tr:['"bevor" (önce) den sonra fiil SONDA!']},
    waehrend:{de:['Nach "während" — Verb am Ende!'],
        ru:['После "während" (в то время как) — глагол в КОНЦЕ!'],
        en:['After "während" (while) — verb at the END!'],
        tr:['"während" (iken) den sonra fiil SONDA!']},
    seitdem:{de:['Nach "seitdem" — Verb am Ende!'],ru:['После "seitdem" (с тех пор как) — глагол в КОНЦЕ!'],en:['After "seitdem" (since) — verb at the END!'],tr:['"seitdem" dan sonra fiil SONDA!']},
    bis:{de:['Nach "bis" — Verb am Ende!'],ru:['После "bis" (пока не) — глагол в КОНЦЕ!'],en:['After "bis" (until) — verb at the END!'],tr:['"bis" (kadar) dan sonra fiil SONDA!']},
    sobald:{de:['Nach "sobald" — Verb am Ende!'],ru:['После "sobald" (как только) — глагол в КОНЦЕ!'],en:['After "sobald" (as soon as) — verb at the END!'],tr:['"sobald" (hemen) dan sonra fiil SONDA!']},
    relativ:{de:['Relativpronomen + Verb am Ende!'],ru:['Относительное местоимение (der/die/das) + глагол в КОНЦЕ!'],en:['Relative pronoun + verb at the END!'],tr:['İlgi zamiri + fiil SONDA!']},
    passiv:{de:['Passiv: werden + Partizip II'],ru:['Пассив: werden + Partizip II. Дом строится = Das Haus wird gebaut.'],en:['Passive: werden + past participle.'],tr:['Edilgen: werden + Partizip II.']},
    konjunktiv:{de:['Konjunktiv II: würde/wäre/hätte'],ru:['Сослагательное: würde/wäre/hätte. Если бы я был богат = Wenn ich reich wäre...'],en:['Subjunctive II: würde/wäre/hätte. If I were rich...'],tr:['Dilek kipi: würde/wäre/hätte.']},
    je_desto:{de:['Je + Komparativ, desto + Komparativ + Verb'],ru:['Je...desto: Чем больше..., тем лучше... Je mehr, desto besser.'],en:['Je...desto: The more..., the better...'],tr:['Je...desto: Ne kadar çok..., o kadar iyi...']},
    textbau:{de:['Erstens, zweitens, darüber hinaus, zusammenfassend...'],ru:['Структура текста: Во-первых, во-вторых, кроме того, в итоге...'],en:['Text structure: Firstly, secondly, furthermore, in conclusion...'],tr:['Metin yapısı: Birincisi, ikincisi, ayrıca, sonuç olarak...']}
};
function getHints(cat){
    const h=HINTS_ML[cat];
    if(!h) return ['Achte auf die Wortstellung!'];
    return h[APP.lang]||h.ru||h.de||['Achte auf die Wortstellung!'];
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
    const connAlts={weil:['dass','denn'],dass:['weil','ob'],wenn:['als','weil'],als:['wenn'],ob:['dass','weil'],obwohl:['weil','trotzdem'],trotzdem:['deshalb','obwohl'],deshalb:['trotzdem','weil'],denn:['weil'],aber:['und','oder'],sondern:['aber'],damit:['weil','um'],nachdem:['bevor'],bevor:['nachdem']};
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

    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitQ()">&#8592;</button><span class="quiz-progress-text">${num} ${UI.of} ${tot}</span></div>
                <span class="quiz-score" id="qsc">&#10003; ${APP.quiz.score}</span>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${item.rule||UI.buildSentence}</div>
                <div class="quiz-hint">${tr(item)}</div>
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
        APP.quiz.score++;markKnown(item.id,APP.quiz.cat+'_'+APP.quiz.mode);
        APP.quiz.checked=true;
        const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+APP.quiz.score;
        if(APP.subliminal) showSubliminal(item);
        renderBuilder();
    }else{
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
                    const parts=corr.rule.split('\n📐 ');
                    ruleText.innerHTML='📝 '+esc(parts[0])+(parts[1]?'<div class="corr-formula">📐 '+esc(parts[1])+'</div>':'');
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
    const connNames={weil:'потому что',dass:'что',wenn:'если/когда',als:'когда (прошлое)',ob:'ли',obwohl:'хотя',damit:'чтобы',nachdem:'после того как',bevor:'прежде чем',seitdem:'с тех пор',bis:'пока не',sobald:'как только',denn:'ведь',aber:'но',sondern:'а (не...а)',trotzdem:'тем не менее',deshalb:'поэтому'};
    const _t=(de,ru,en,tr)=>({de,ru,en,tr})[L]||ru||de;
    // Get formula for category
    const cf=CAT_FORMULAS[cat];
    const formula=cf?('\n📐 '+cf.f+' — '+(cf[L]||cf.ru||cf.de)):'';

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
            return (pair[L]||pair.ru||pair.de)+formula;
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

function quitQ(){if(confirm(UI.back+'?'))showMenu();}

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
                ${APP.quiz.wrongs&&APP.quiz.wrongs.length?`<button class="btn btn-accent" onclick="showWrongReview()">❌ ${tot-s} Fehler ansehen</button>`:''}
                <button class="btn btn-outline" onclick="showMenu()">&#8592; ${UI.menu}</button>
            </div>
        </div>`;
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
    const origTest=level.tests.find(t=>t.id===testId);
    if(!origTest) return;
    // Tiefe Kopie der Sektionen, damit Pool-Substitutionen pro Test-Lauf frisch sind
    const test=Object.assign({},origTest,{sections:origTest.sections.map(s=>Object.assign({},s))});
    APP.vwu={level,test,secIdx:0,gramIdx:0,gramScore:0,gramTotal:0,wrongs:[],t0:Date.now(),lesenPick:null};
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
    else{v.secIdx++;showVWUSection();}
}

function showVWUGram(){
    const v=APP.vwu,sec=v.test.sections[v.secIdx];
    if(v.gramIdx>=sec.items.length){v.secIdx++;showVWUSection();return;}
    const item=sec.items[v.gramIdx];
    const num=v.gramIdx+1,tot=sec.items.length;
    const pct=(v.gramIdx/tot)*100;
    const btns=item.opts.map(o=>`<button class="answer-btn" data-val="${esc(o)}" data-cor="${esc(item.ans)}" onclick="checkVWUGram(this)">${o}</button>`).join('');
    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left"><button class="quiz-back" onclick="quitVWU()">&#8592;</button><span class="quiz-progress-text">${v.test.name} &bull; Grammatik ${num}/${tot}</span></div>
                <span class="quiz-score" id="qsc">&#10003; ${v.gramScore}</span>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">Ergänzen Sie:</div>
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
                <button class="btn btn-primary" onclick="startVWU('${v.level.id}','${v.test.id}')">🔄 Nochmal</button>
                <button class="btn btn-outline" onclick="showMenu()">&#8592; Menü</button>
            </div>
        </div>`;
}

function quitVWU(){if(confirm('Test abbrechen?'))showMenu();}

// ============== START ==============
window.addEventListener('DOMContentLoaded', initApp);
