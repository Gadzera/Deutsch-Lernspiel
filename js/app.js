// ============== DEUTSCH LERNSPIEL PRO v2.0 ==============

const CONFIG = { version: "2.0.0", prefix: "dlp2_" };

// ============== UI is always in German ==============
const UI = {
    appName: "Deutsch Lernspiel",
    subtitle: "Lerne Deutsch spielerisch!",
    login: "Anmelden",
    register: "Registrieren",
    email: "E-Mail",
    emailPh: "deine@email.com",
    password: "Passwort",
    passPh: "Mindestens 6 Zeichen",
    passConfirm: "Passwort bestätigen",
    name: "Name",
    namePh: "Dein Name",
    country: "Land",
    countrySel: "Land wählen",
    loginBtn: "Einloggen",
    registerBtn: "Registrieren",
    forgot: "Passwort vergessen?",
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
    passShort: "Passwort mindestens 6 Zeichen!",
    passNoMatch: "Passwörter stimmen nicht überein!",
    nameShort: "Name mindestens 2 Zeichen!",
    userExists: "Diese E-Mail ist bereits registriert!",
    noUser: "Benutzer nicht gefunden!",
    badPass: "Falsches Passwort!",
    recoverySent: "Anweisungen an E-Mail gesendet",
    logoutQ: "Möchtest du dich abmelden?",
    back: "Zurück"
};

// ============== COUNTRIES (expanded) ==============
const COUNTRIES = [
    {f:"🇩🇪",n:"Deutschland"},{f:"🇦🇹",n:"Österreich"},{f:"🇨🇭",n:"Schweiz"},
    {f:"🇷🇺",n:"Russland"},{f:"🇺🇦",n:"Ukraine"},{f:"🇧🇾",n:"Belarus"},
    {f:"🇰🇿",n:"Kasachstan"},{f:"🇺🇿",n:"Usbekistan"},{f:"🇹🇯",n:"Tadschikistan"},
    {f:"🇰🇬",n:"Kirgisistan"},{f:"🇹🇲",n:"Turkmenistan"},{f:"🇦🇿",n:"Aserbaidschan"},
    {f:"🇬🇪",n:"Georgien"},{f:"🇦🇲",n:"Armenien"},{f:"🇲🇩",n:"Moldawien"},
    {f:"🇺🇸",n:"USA"},{f:"🇬🇧",n:"Großbritannien"},{f:"🇨🇦",n:"Kanada"},
    {f:"🇦🇺",n:"Australien"},
    {f:"🇹🇷",n:"Türkei"},{f:"🇮🇷",n:"Iran"},{f:"🇮🇶",n:"Irak"},
    {f:"🇸🇦",n:"Saudi-Arabien"},{f:"🇦🇪",n:"VAE"},{f:"🇸🇾",n:"Syrien"},
    {f:"🇦🇫",n:"Afghanistan"},{f:"🇵🇰",n:"Pakistan"},{f:"🇮🇳",n:"Indien"},
    {f:"🇧🇩",n:"Bangladesch"},{f:"🇱🇰",n:"Sri Lanka"},
    {f:"🇨🇳",n:"China"},{f:"🇯🇵",n:"Japan"},{f:"🇰🇷",n:"Südkorea"},
    {f:"🇻🇳",n:"Vietnam"},{f:"🇹🇭",n:"Thailand"},{f:"🇮🇩",n:"Indonesien"},
    {f:"🇲🇾",n:"Malaysia"},{f:"🇵🇭",n:"Philippinen"},
    {f:"🇫🇷",n:"Frankreich"},{f:"🇮🇹",n:"Italien"},{f:"🇪🇸",n:"Spanien"},
    {f:"🇵🇹",n:"Portugal"},{f:"🇳🇱",n:"Niederlande"},{f:"🇧🇪",n:"Belgien"},
    {f:"🇵🇱",n:"Polen"},{f:"🇨🇿",n:"Tschechien"},{f:"🇸🇰",n:"Slowakei"},
    {f:"🇭🇺",n:"Ungarn"},{f:"🇷🇴",n:"Rumänien"},{f:"🇧🇬",n:"Bulgarien"},
    {f:"🇭🇷",n:"Kroatien"},{f:"🇷🇸",n:"Serbien"},{f:"🇧🇦",n:"Bosnien"},
    {f:"🇦🇱",n:"Albanien"},{f:"🇬🇷",n:"Griechenland"},
    {f:"🇸🇪",n:"Schweden"},{f:"🇳🇴",n:"Norwegen"},{f:"🇩🇰",n:"Dänemark"},
    {f:"🇫🇮",n:"Finnland"},{f:"🇪🇪",n:"Estland"},{f:"🇱🇻",n:"Lettland"},
    {f:"🇱🇹",n:"Litauen"},
    {f:"🇪🇬",n:"Ägypten"},{f:"🇲🇦",n:"Marokko"},{f:"🇹🇳",n:"Tunesien"},
    {f:"🇳🇬",n:"Nigeria"},{f:"🇪🇹",n:"Äthiopien"},{f:"🇰🇪",n:"Kenia"},
    {f:"🇿🇦",n:"Südafrika"},
    {f:"🇧🇷",n:"Brasilien"},{f:"🇦🇷",n:"Argentinien"},{f:"🇲🇽",n:"Mexiko"},
    {f:"🇨🇴",n:"Kolumbien"},{f:"🇨🇱",n:"Chile"},{f:"🇵🇪",n:"Peru"},
    {f:"🇨🇺",n:"Kuba"},{f:"🇮🇱",n:"Israel"},{f:"🇯🇴",n:"Jordanien"},
    {f:"🇱🇧",n:"Libanon"},{f:"🇰🇼",n:"Kuwait"},{f:"🇶🇦",n:"Katar"},
    {f:"🇴🇲",n:"Oman"},{f:"🇧🇭",n:"Bahrain"},{f:"🇾🇪",n:"Jemen"},
    {f:"🇲🇳",n:"Mongolei"},{f:"🇳🇵",n:"Nepal"},{f:"🇲🇲",n:"Myanmar"},
    {f:"🇰🇭",n:"Kambodscha"},{f:"🇱🇦",n:"Laos"},
    {f:"🏳️",n:"Anderes Land"}
];

// Helper language names (shown in their own language)
const LANG_FLAGS = {ru:"🇷🇺", en:"🇬🇧", tr:"🇹🇷", ar:"🇸🇦", fa:"🇮🇷"};
const LANG_NAMES = {ru:"Русский", en:"English", tr:"Türkçe", ar:"العربية", fa:"فارسی"};

// ============== STATE ==============
let APP = {
    user: null,
    lang: 'ru', // helper/translation language
    quiz: { mode:'article', filter:'all', count:10, words:[], idx:0, score:0, t0:0 },
    allWords: [],
    subliminal: true,  // 25th frame enabled
    subliminalMs: 40    // flash duration ms
};

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
    // Try current language, fall back to ru, then german
    if (APP.lang !== 'ru' && w[APP.lang]) return w[APP.lang];
    return w.ru || w.russian || w.german;
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
function showAuth(tab) {
    tab=tab||'login';
    const cOpts=COUNTRIES.map(c=>`<option value="${c.f}">${c.f} ${c.n}</option>`).join('');

    $('app').innerHTML=`
        <div class="auth-page">
            <div class="auth-header">
                <div class="auth-logo">🇩🇪</div>
                <h1>${UI.appName}</h1>
                <p>${UI.subtitle}</p>
            </div>
            <div class="auth-body">
                <div class="auth-tabs">
                    <button class="auth-tab ${tab==='login'?'active':''}" onclick="showAuth('login')">${UI.login}</button>
                    <button class="auth-tab ${tab==='register'?'active':''}" onclick="showAuth('register')">${UI.register}</button>
                </div>

                <div class="auth-form ${tab==='login'?'active':''}" id="fLogin">
                    <div class="form-group">
                        <label class="form-label">${UI.email}</label>
                        <input class="form-input" type="email" id="lEmail" placeholder="${UI.emailPh}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${UI.password}</label>
                        <input class="form-input" type="password" id="lPass" placeholder="${UI.passPh}">
                    </div>
                    <button class="btn btn-primary" onclick="doLogin()">${UI.loginBtn}</button>
                    <div class="auth-footer"><a onclick="doForgot()">${UI.forgot}</a></div>
                </div>

                <div class="auth-form ${tab==='register'?'active':''}" id="fReg">
                    <div class="form-group">
                        <label class="form-label">${UI.name}</label>
                        <input class="form-input" type="text" id="rName" placeholder="${UI.namePh}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${UI.email}</label>
                        <input class="form-input" type="email" id="rEmail" placeholder="${UI.emailPh}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${UI.country}</label>
                        <select class="form-select" id="rCountry"><option value="">${UI.countrySel}</option>${cOpts}</select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">${UI.helpLang}</label>
                        <select class="form-select" id="rLang">
                            ${Object.keys(LANG_NAMES).map(l=>`<option value="${l}" ${l===APP.lang?'selected':''}>${LANG_FLAGS[l]} ${LANG_NAMES[l]}</option>`).join('')}
                        </select>
                        <small style="color:var(--text-light);margin-top:4px;display:block">${UI.helpLangDesc}</small>
                    </div>
                    <div class="form-group">
                        <label class="form-label">${UI.password}</label>
                        <input class="form-input" type="password" id="rPass" placeholder="${UI.passPh}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${UI.passConfirm}</label>
                        <input class="form-input" type="password" id="rPass2" placeholder="${UI.passPh}">
                    </div>
                    <button class="btn btn-primary" onclick="doReg()">${UI.registerBtn}</button>
                </div>
            </div>
        </div>
    `;
}

function doLogin() {
    const e=$('lEmail').value.trim(), p=$('lPass').value;
    if(!e||!p) return toast(UI.fillAll);
    if(!okEmail(e)) return toast(UI.badEmail);
    const id=uid(e),d=ld('u_'+id);
    if(!d) return toast(UI.noUser);
    if(hash(p)!==d.ph) return toast(UI.badPass);
    APP.user=d;
    if(d.lang && LANG_NAMES[d.lang]) APP.lang=d.lang;
    localStorage.setItem(CONFIG.prefix+'cur',id);
    localStorage.setItem(CONFIG.prefix+'lang',APP.lang);
    showMenu();
}

function doReg() {
    const nm=$('rName').value.trim(), em=$('rEmail').value.trim(),
          co=$('rCountry').value, lang=$('rLang').value,
          p1=$('rPass').value, p2=$('rPass2').value;
    if(!nm||!em||!co||!p1) return toast(UI.fillAll);
    if(nm.length<2) return toast(UI.nameShort);
    if(!okEmail(em)) return toast(UI.badEmail);
    if(p1.length<6) return toast(UI.passShort);
    if(p1!==p2) return toast(UI.passNoMatch);
    const id=uid(em);
    const existing=ld('u_'+id);
    if(existing && !confirm('Dieses Konto existiert bereits. Möchtest du es überschreiben?')) return;
    const u={id,name:nm,email:em,country:co,lang:lang,ph:hash(p1),ts:Date.now()};
    sv('u_'+id,u);
    localStorage.setItem(CONFIG.prefix+'cur',id);
    APP.lang=lang;
    localStorage.setItem(CONFIG.prefix+'lang',lang);
    APP.user=u;
    showMenu();
}

function doForgot() {
    const e=prompt(UI.email+':');
    if(!e) return;
    if(!okEmail(e)) return toast(UI.badEmail);
    const id=uid(e), d=ld('u_'+id);
    if(!d) return toast(UI.noUser);
    const np=prompt('Neues Passwort (min. 6 Zeichen):');
    if(!np) return;
    if(np.length<6) return toast(UI.passShort);
    d.ph=hash(np);
    sv('u_'+id,d);
    toast('Passwort wurde zurückgesetzt! Bitte melde dich an.');
}

// ============== MENU ==============
function showMenu() {
    if(!APP.user) return showAuth();
    const st=getStats(), nc=NOUNS.length, vc=VERBS.length;

    $('app').innerHTML=`
        <div class="app-shell">
            <div class="app-header">
                <div class="app-header-left">
                    <span style="font-size:1.3rem">🇩🇪</span>
                    <h1>${UI.appName}</h1>
                </div>
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

                <div class="menu-section stagger">
                    <div class="menu-section-title">${UI.settings}</div>
                    <div class="menu-card">
                        <div class="setting-row">
                            <span class="setting-label">${UI.mode}</span>
                            <select class="form-select" id="sMode">
                                <option value="article">${UI.modeArticle}</option>
                                <option value="de2l1">${UI.modeDe}</option>
                                <option value="l12de">${UI.modeL1}</option>
                            </select>
                        </div>
                        <div class="setting-row">
                            <span class="setting-label">${UI.filter}</span>
                            <select class="form-select" id="sFilter">
                                <option value="all">${UI.filterAll} (${nc+vc})</option>
                                <option value="nouns">${UI.filterNouns} (${nc})</option>
                                <option value="verbs">${UI.filterVerbs} (${vc})</option>
                            </select>
                        </div>
                        <div class="setting-row">
                            <span class="setting-label">${UI.qCount}</span>
                            <select class="form-select" id="sCount">
                                <option value="10">10</option><option value="20">20</option>
                                <option value="30">30</option><option value="50">50</option>
                            </select>
                        </div>
                        <div class="toggle-row">
                            <div>
                                <div class="toggle-row-label">25. Frame Technologie</div>
                                <div class="toggle-row-sub">Unterbewusstes Lernen</div>
                            </div>
                            <label class="toggle-switch">
                                <input type="checkbox" id="sSubliminal" ${APP.subliminal?'checked':''} onchange="APP.subliminal=this.checked;localStorage.setItem(CONFIG.prefix+'sub',this.checked)">
                                <span class="toggle-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="menu-section stagger">
                    <div class="quick-actions">
                        <div class="quick-action" onclick="showLB()">
                            <div class="quick-action-icon">🏆</div>
                            <div class="quick-action-text">${UI.leaderboard}</div>
                        </div>
                        <div class="quick-action" onclick="showAch()">
                            <div class="quick-action-icon">🎖️</div>
                            <div class="quick-action-text">${UI.achievements}</div>
                        </div>
                    </div>
                </div>
                <div style="height:80px"></div>
            </div>
            <div class="start-btn-wrap">
                <button class="start-btn" onclick="startQuiz()">🚀 ${UI.startQuiz}</button>
            </div>
        </div>
    `;
}

function doLogout() { if(!confirm(UI.logoutQ)) return; localStorage.removeItem(CONFIG.prefix+'cur'); APP.user=null; showAuth(); }

// ============== LANGUAGE MODAL ==============
function showLangModal() {
    const langs=Object.keys(LANG_NAMES);
    const opts=langs.map(l=>`
        <button class="lang-option ${APP.lang===l?'selected':''}" onclick="setLang('${l}')">
            <span class="lang-option-flag">${LANG_FLAGS[l]}</span>
            <span class="lang-option-name">${LANG_NAMES[l]}</span>
        </button>
    `).join('');
    const m=document.createElement('div');
    m.className='modal-overlay';m.id='lm';
    m.onclick=function(e){if(e.target===this)closeLM();};
    m.innerHTML=`<div class="modal-sheet"><div class="modal-handle"></div><div class="modal-title">${UI.helpLang}</div><p style="text-align:center;color:var(--text-light);font-size:0.85rem;margin-bottom:16px">${UI.helpLangDesc}</p>${opts}</div>`;
    document.body.appendChild(m);
}
function closeLM(){const m=$('lm');if(m)m.remove();}
function setLang(l){
    APP.lang=l;
    localStorage.setItem(CONFIG.prefix+'lang',l);
    // Update user record too
    if(APP.user){APP.user.lang=l;sv('u_'+APP.user.id,APP.user);}
    closeLM();
    showMenu();
}

// ============== QUIZ ==============
function startQuiz() {
    const mode=$('sMode').value, filter=$('sFilter').value, count=+$('sCount').value;
    let pool=filter==='nouns'?[...NOUNS]:filter==='verbs'?[...VERBS]:[...APP.allWords];
    if(mode==='article') pool=pool.filter(w=>w.article);
    if(!pool.length){toast('Keine Wörter!');return;}
    const n=Math.min(count,pool.length);
    APP.quiz={mode,filter,count:n,words:shuffle(pool).slice(0,n),idx:0,score:0,t0:Date.now()};
    showQ();
}

function showQ() {
    if(APP.quiz.idx>=APP.quiz.words.length){showRes();return;}
    const w=APP.quiz.words[APP.quiz.idx];
    const pct=(APP.quiz.idx/APP.quiz.words.length)*100;
    const num=APP.quiz.idx+1, tot=APP.quiz.words.length;
    let label, display, hint='', opts=[], correct, isArt=false;

    if(APP.quiz.mode==='article'){
        isArt=true; label=UI.chooseArt;
        display=w.word||w.german; hint=tr(w);
        opts=['der','die','das']; correct=w.article;
    } else if(APP.quiz.mode==='de2l1'){
        label=UI.whatMeans;
        display=w.german;
        const others=shuffle(APP.allWords.filter(x=>x.id!==w.id)).slice(0,3).map(x=>tr(x));
        correct=tr(w);
        opts=shuffle([...new Set([...others,correct])]);
    } else {
        label=UI.howGerman;
        display=tr(w);
        const others=shuffle(APP.allWords.filter(x=>x.id!==w.id)).slice(0,3).map(x=>x.german);
        correct=w.german;
        opts=shuffle([...new Set([...others,correct])]);
    }

    const btns=opts.map(o=>{
        const eO=esc(o),eC=esc(correct);
        return `<button class="answer-btn" data-val="${eO}" data-cor="${eC}" onclick="checkA(this)">${o}</button>`;
    }).join('');

    $('app').innerHTML=`
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left">
                    <button class="quiz-back" onclick="quitQ()">&#8592;</button>
                    <span class="quiz-progress-text">${num} ${UI.of} ${tot}</span>
                </div>
                <span class="quiz-score" id="qsc">&#10003; ${APP.quiz.score}</span>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${label}</div>
                <div class="quiz-word">${display}</div>
                ${hint?`<div class="quiz-hint">${hint}</div>`:''}
                <div class="quiz-answers ${isArt?'article-mode':''} stagger">${btns}</div>
            </div>
        </div>
    `;
}

function checkA(btn) {
    const val=btn.dataset.val, cor=btn.dataset.cor, ok=val===cor;
    if(ok){APP.quiz.score++;btn.classList.add('correct');}
    else{btn.classList.add('incorrect');}
    document.querySelectorAll('.answer-btn').forEach(b=>{
        b.disabled=true;
        if(b.dataset.val===cor)b.classList.add('correct');
    });
    const sc=$('qsc');if(sc)sc.innerHTML='&#10003; '+APP.quiz.score;
    // 25th frame
    if(APP.subliminal) showSubliminal(APP.quiz.words[APP.quiz.idx]);
    setTimeout(()=>{APP.quiz.idx++;showQ();},1200);
}

// 25th frame subliminal flash
function showSubliminal(word) {
    const frame=$('subliminalFrame');
    const wEl=$('subliminalWord');
    const tEl=$('subliminalTrans');
    if(!frame||!wEl||!tEl) return;
    wEl.textContent = word.article ? (word.article+' '+word.word) : word.german;
    tEl.textContent = tr(word);
    frame.classList.add('visible');
    setTimeout(()=>frame.classList.remove('visible'), APP.subliminalMs);
}

function quitQ(){if(confirm(UI.back+'?'))showMenu();}

// ============== RESULTS ==============
function showRes() {
    const ts=Math.round((Date.now()-APP.quiz.t0)/1000);
    const s=APP.quiz.score, tot=APP.quiz.words.length, pct=Math.round(s/tot*100);
    saveRes({d:Date.now(),s,tot,pct,ts,m:APP.quiz.mode});

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
                <button class="btn btn-primary" onclick="showMenu();setTimeout(startQuiz,100)">🔄 ${UI.again}</button>
                <button class="btn btn-outline" onclick="showMenu()">&#8592; ${UI.menu}</button>
            </div>
        </div>
    `;
}

// ============== STATS ==============
function saveRes(r){if(!APP.user)return;const k='st_'+APP.user.id;const d=ld(k)||{r:[]};d.r.push(r);sv(k,d);}
function getStats(){
    if(!APP.user) return {total:0,avg:0};
    const d=ld('st_'+APP.user.id);
    if(!d||!d.r||!d.r.length) return {total:0,avg:0};
    return {total:d.r.length, avg:Math.round(d.r.reduce((s,x)=>s+x.pct,0)/d.r.length)};
}

// ============== PAGES ==============
function showLB(){
    $('app').innerHTML=`<div class="page-container"><div class="page-header"><button class="quiz-back" onclick="showMenu()">&#8592;</button><h1>🏆 ${UI.leaderboard}</h1></div><div class="page-body"><div class="empty-state"><div class="empty-state-icon">🏆</div><div class="empty-state-text">${UI.comingSoon}</div></div></div></div>`;
}
function showAch(){
    $('app').innerHTML=`<div class="page-container"><div class="page-header"><button class="quiz-back" onclick="showMenu()">&#8592;</button><h1>🎖️ ${UI.achievements}</h1></div><div class="page-body"><div class="empty-state"><div class="empty-state-icon">🎖️</div><div class="empty-state-text">${UI.comingSoon}</div></div></div></div>`;
}

// ============== START ==============
window.addEventListener('DOMContentLoaded', initApp);
