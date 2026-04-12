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
        if(localStorage.key(i).startsWith(CONFIG.prefix+'u_u_')) c++;
    }
    return c;
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
    if(!nm||!em||!co) return toast(UI.fillAll);
    if(nm.length<2) return toast(UI.nameShort);
    if(!okEmail(em)) return toast(UI.badEmail);
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
function toggleCat(id){
    APP.openCat=APP.openCat===id?null:id;
    document.querySelectorAll('.cat-body').forEach(e=>{e.style.display=e.id===APP.openCat?'block':'none';});
    document.querySelectorAll('.cat-arrow').forEach(a=>{a.classList.toggle('open',a.closest('.cat-card').querySelector('.cat-body').id===APP.openCat);});
}

function showMenu() {
    if(!APP.user) return showAuth();
    updateActivity();
    const st=getStats(), nc=NOUNS.length, vc=VERBS.length;
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
        sqBtn('➡️','Verb → Partizip II','partizip','v2p')+
        sqBtn('⬅️','Partizip II → Verb','partizip','p2v')+
        sqBtn('🔀','haben oder sein?','partizip','aux'));
    // 3. Reflexive
    if(hasRf) cats+=catHTML('🔄','Reflexive Verben',REFLEXIVE.length+' Verben','reflexive_conj',REFLEXIVE.length,'catReflex',
        sqBtn('✍️','Konjugation üben','reflexive','conj'));
    // 4. Satzbau
    if(hasSn){
        const snCats=[...new Set(SENTENCES.map(s=>s.cat))];
        let snBtns=sqBtn('📐','Alle Themen','sentences','all');
        const snLabels={tekamolo:'TEKAMOLO',weil:'weil-Sätze',dass:'dass-Sätze',wenn:'wenn-Sätze',als:'als-Sätze',
            ob:'ob-Sätze',obwohl:'obwohl-Sätze',damit:'damit-Sätze',um_zu:'um...zu',trotzdem:'trotzdem',
            deshalb:'deshalb',denn:'denn-Sätze',aber:'aber-Sätze',nachdem:'nachdem',bevor:'bevor',
            waehrend:'während',relativ:'Relativsätze',passiv:'Passiv',konjunktiv:'Konjunktiv II',
            je_desto:'je...desto',modal:'Modalverben',hauptsatz:'Hauptsätze',sondern:'sondern',
            seitdem:'seitdem',bis:'bis',sobald:'sobald'};
        snCats.forEach(c=>{snBtns+=sqBtn('📎',snLabels[c]||c,'sentences',c);});
        cats+=catHTML('📐','Satzbau',SENTENCES.length+' Übungen','sentences_all',SENTENCES.length,'catSatz',snBtns);
    }
    // 5. Präpositionen
    if(hasPp) cats+=catHTML('📌','Präpositionen',PREPOSITIONS.length+' Übungen','prep_all',PREPOSITIONS.length,'catPrep',
        sqBtn('📌','Alle Präpositionen','prepositions','all')+
        sqBtn('🔄','Wechselpräpositionen','prepositions','wechsel')+
        sqBtn('📗','Dativ-Präpositionen','prepositions','dativ')+
        sqBtn('📕','Akkusativ-Präpositionen','prepositions','akkusativ')+
        sqBtn('📘','Genitiv-Präpositionen','prepositions','genitiv')+
        sqBtn('🔗','Verb + Präposition','prepositions','verb_prep'));
    // 6. Pronomen
    if(hasPn) cats+=catHTML('���','Pronomen',PRONOUNS.length+' Übungen','pron_all',PRONOUNS.length,'catPron',
        sqBtn('👤','Alle Pronomen','pronouns','all')+
        sqBtn('🙋','Personalpronomen','pronouns','personal')+
        sqBtn('📎','Possessivpronomen','pronouns','possessiv')+
        sqBtn('🔄','Reflexivpronomen','pronouns','reflexiv')+
        sqBtn('🔗','Relativpronomen','pronouns','relativ'));

    const regCnt=getUserCount(), onCnt=getOnlineCount();

    $('app').innerHTML=`
        <div class="app-shell">
            <div class="app-header">
                <div class="app-header-left"><span style="font-size:1.3rem">���🇪</span><h1>${UI.appName}</h1></div>
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
                    <div class="user-stats-row">
                        <div class="user-stat"><div class="user-stat-value">${st.total}</div><div class="user-stat-label">${UI.games}</div></div>
                        <div class="user-stat"><div class="user-stat-value">${st.avg}%</div><div class="user-stat-label">${UI.avg}</div></div>
                        <div class="user-stat"><div class="user-stat-value">${nc+vc}</div><div class="user-stat-label">${UI.words}</div></div>
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
                    </div>
                </div>
                <div class="user-counter">${UI.registered}: ${regCnt} &bull; ${UI.online}: ${onCnt}</div>
                <div style="height:20px"></div>
            </div>
        </div>
    `;
}

function doLogout(){if(!confirm(UI.logoutQ))return;localStorage.removeItem(CONFIG.prefix+'cur');APP.user=null;showAuth();}

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
    APP.quiz={type,cat,mode,items:shuffle(pool).slice(0,n),idx:0,score:0,t0:Date.now(),built:[],allW:[],correctS:[]};
    showQ();
}

function showQ(){
    if(!APP.quiz||APP.quiz.idx>=APP.quiz.items.length){showRes();return;}
    if(APP.quiz.type==='builder') showBuilder();
    else showMCQ();
}

// ============== MCQ QUIZ ==============
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
            label='Wie ist das Partizip II?';display=item.verb;hint=tr(item);correct=item.partizip;
            const ot=shuffle(P.filter(x=>x.id!==item.id)).slice(0,3).map(x=>x.partizip);
            opts=shuffle([...new Set([...ot,correct])]);
        }else if(mode==='p2v'){
            label='Welches Verb?';display=item.partizip;hint=tr(item);correct=item.verb;
            const ot=shuffle(P.filter(x=>x.id!==item.id)).slice(0,3).map(x=>x.verb);
            opts=shuffle([...new Set([...ot,correct])]);
        }else{
            isArt=true;label='haben oder sein?';display=item.verb+' → '+item.partizip;hint=tr(item);
            opts=['haben','sein'];correct=item.aux;
        }
    }else if(cat==='reflexive'){
        const keys=['ich','du','er','wir','ihr','sie'];
        const labels=['ich ...?','du ...?','er/sie/es ...?','wir ...?','ihr ...?','sie/Sie ...?'];
        const pi=Math.floor(Math.random()*6);
        label=labels[pi];display=item.verb;hint=tr(item);correct=item[keys[pi]];
        const ot=shuffle(REFLEXIVE.filter(x=>x.id!==item.id)).slice(0,3).map(x=>x[keys[pi]]);
        opts=shuffle([...new Set([...ot,correct])]);
    }else if(cat==='prepositions'||cat==='pronouns'){
        label=item.sentence.replace('___','______');display='';hint=tr(item);
        opts=shuffle([...item.options]);correct=item.answer;
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
    }else{btn.classList.add('incorrect');}
    document.querySelectorAll('.answer-btn').forEach(b=>{b.disabled=true;if(b.dataset.val===cor)b.classList.add('correct');});
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+APP.quiz.score;
    if(APP.subliminal) showSubliminal(item);
    setTimeout(()=>{APP.quiz.idx++;showQ();},1200);
}

// ============== SENTENCE BUILDER ==============
function showBuilder(){
    const item=APP.quiz.items[APP.quiz.idx];
    APP.quiz.allW=shuffle([...item.correct,...(item.distractors||[])]);
    APP.quiz.built=[];
    APP.quiz.correctS=item.correct;
    renderBuilder();
}
function renderBuilder(){
    const item=APP.quiz.items[APP.quiz.idx];
    const pct=(APP.quiz.idx/APP.quiz.items.length)*100;
    const num=APP.quiz.idx+1,tot=APP.quiz.items.length;
    const builtH=APP.quiz.built.map((wi,i)=>`<button class="word-chip selected" onclick="removeWord(${i})">${esc(APP.quiz.allW[wi])}</button>`).join('');
    const poolH=APP.quiz.allW.map((w,i)=>{
        const used=APP.quiz.built.includes(i);
        return `<button class="word-chip${used?' used':''}" onclick="addWord(${i})" ${used?'disabled':''}>${esc(w)}</button>`;
    }).join('');

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
                <div class="sentence-area">${builtH||'<span class="sentence-ph">'+UI.tapWords+'</span>'}</div>
                <div class="word-pool">${poolH}</div>
                <button class="btn btn-primary" onclick="checkBuilder()" style="margin-top:16px">${UI.checkBtn}</button>
            </div>
        </div>`;
}
function addWord(i){if(!APP.quiz.built.includes(i)){APP.quiz.built.push(i);renderBuilder();}}
function removeWord(pos){APP.quiz.built.splice(pos,1);renderBuilder();}
function checkBuilder(){
    const built=APP.quiz.built.map(i=>APP.quiz.allW[i]);
    const correct=APP.quiz.correctS;
    const ok=built.length===correct.length&&built.every((w,i)=>w===correct[i]);
    const item=APP.quiz.items[APP.quiz.idx];
    if(ok){APP.quiz.score++;markKnown(item.id,APP.quiz.cat+'_'+APP.quiz.mode);}
    // Show result visually
    const area=document.querySelector('.sentence-area');
    const pool=document.querySelector('.word-pool');
    if(area)area.innerHTML=correct.map(w=>`<span class="word-chip ${ok?'wc-correct':'wc-wrong'}">${esc(w)}</span>`).join('');
    if(pool)pool.style.opacity='0.3';
    document.querySelectorAll('.btn-primary').forEach(b=>b.disabled=true);
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+APP.quiz.score;
    if(APP.subliminal) showSubliminal(item);
    setTimeout(()=>{APP.quiz.idx++;showQ();},2000);
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
    else if(pct>=40){emoji='��';msg=UI.notBad;}
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
                <button class="btn btn-outline" onclick="showMenu()">&#8592; ${UI.menu}</button>
            </div>
        </div>`;
}

// ============== STATS ==============
function saveRes(r){if(!APP.user)return;const k='st_'+APP.user.id;const d=ld(k)||{r:[]};d.r.push(r);sv(k,d);}
function getStats(){
    if(!APP.user) return {total:0,avg:0};
    const d=ld('st_'+APP.user.id);
    if(!d||!d.r||!d.r.length) return {total:0,avg:0};
    return {total:d.r.length,avg:Math.round(d.r.reduce((s,x)=>s+x.pct,0)/d.r.length)};
}

// ============== START ==============
window.addEventListener('DOMContentLoaded', initApp);
