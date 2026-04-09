// ============== DEUTSCH LERNSPIEL PRO v2.0 ==============

const CONFIG = {
    version: "2.0.0",
    prefix: "dlp2_"
};

// ============== UI TRANSLATIONS ==============
const UI_TEXT = {
    ru: {
        appName: "Deutsch Lernspiel",
        subtitle: "Учи немецкий легко!",
        login: "Вход",
        register: "Регистрация",
        email: "Email",
        emailPh: "your@email.com",
        password: "Пароль",
        passPh: "Минимум 6 символов",
        passConfirm: "Повтори пароль",
        name: "Имя",
        namePh: "Как тебя зовут?",
        country: "Страна",
        countrySel: "Выбери страну",
        loginBtn: "Войти",
        registerBtn: "Зарегистрироваться",
        forgot: "Забыл пароль?",
        logout: "Выход",
        language: "Язык",
        settings: "Настройки",
        mode: "Режим",
        modeArticle: "Артикли (der/die/das)",
        modeDe: "Немецкий → Перевод",
        modeL1: "Перевод → Немецкий",
        filter: "Слова",
        filterAll: "Все слова",
        filterNouns: "Существительные",
        filterVerbs: "Глаголы",
        qCount: "Вопросов",
        startQuiz: "Начать викторину",
        leaderboard: "Рейтинг",
        achievements: "Достижения",
        chooseArt: "Выбери артикль",
        whatMeans: "Что означает",
        howGerman: "Как на немецком",
        of: "из",
        results: "Результаты",
        time: "Время",
        sec: "сек",
        correctAns: "Правильных",
        wrongAns: "Ошибок",
        again: "Ещё раз",
        menu: "В меню",
        perfect: "Идеально!",
        excellent: "Отлично!",
        good: "Хорошо!",
        notBad: "Неплохо!",
        studyMore: "Учи ещё!",
        games: "Игр",
        avg: "Средний",
        words: "Слов",
        comingSoon: "Скоро будет доступно!",
        fillAll: "Заполни все поля!",
        badEmail: "Некорректный email!",
        passShort: "Пароль минимум 6 символов!",
        passNoMatch: "Пароли не совпадают!",
        nameShort: "Имя минимум 2 символа!",
        userExists: "Этот email уже зарегистрирован!",
        noUser: "Пользователь не найден!",
        badPass: "Неправильный пароль!",
        recoverySent: "Инструкции отправлены на email",
        logoutQ: "Выйти из аккаунта?"
    },
    en: {
        appName: "Deutsch Lernspiel",
        subtitle: "Learn German easily!",
        login: "Login",
        register: "Register",
        email: "Email",
        emailPh: "your@email.com",
        password: "Password",
        passPh: "Min 6 characters",
        passConfirm: "Confirm password",
        name: "Name",
        namePh: "What's your name?",
        country: "Country",
        countrySel: "Choose country",
        loginBtn: "Sign In",
        registerBtn: "Sign Up",
        forgot: "Forgot password?",
        logout: "Logout",
        language: "Language",
        settings: "Settings",
        mode: "Mode",
        modeArticle: "Articles (der/die/das)",
        modeDe: "German → Translation",
        modeL1: "Translation → German",
        filter: "Words",
        filterAll: "All words",
        filterNouns: "Nouns",
        filterVerbs: "Verbs",
        qCount: "Questions",
        startQuiz: "Start Quiz",
        leaderboard: "Leaderboard",
        achievements: "Achievements",
        chooseArt: "Choose the article",
        whatMeans: "What does it mean",
        howGerman: "How in German",
        of: "of",
        results: "Results",
        time: "Time",
        sec: "sec",
        correctAns: "Correct",
        wrongAns: "Wrong",
        again: "Try Again",
        menu: "Menu",
        perfect: "Perfect!",
        excellent: "Excellent!",
        good: "Good!",
        notBad: "Not bad!",
        studyMore: "Study more!",
        games: "Games",
        avg: "Average",
        words: "Words",
        comingSoon: "Coming soon!",
        fillAll: "Fill all fields!",
        badEmail: "Invalid email!",
        passShort: "Password min 6 characters!",
        passNoMatch: "Passwords don't match!",
        nameShort: "Name min 2 characters!",
        userExists: "Email already registered!",
        noUser: "User not found!",
        badPass: "Wrong password!",
        recoverySent: "Instructions sent to email",
        logoutQ: "Log out?"
    },
    uk: {
        appName: "Deutsch Lernspiel",
        subtitle: "Вчи німецьку легко!",
        login: "Вхід",
        register: "Реєстрація",
        email: "Email",
        emailPh: "your@email.com",
        password: "Пароль",
        passPh: "Мінімум 6 символів",
        passConfirm: "Повтори пароль",
        name: "Ім'я",
        namePh: "Як тебе звати?",
        country: "Країна",
        countrySel: "Обери країну",
        loginBtn: "Увійти",
        registerBtn: "Зареєструватися",
        forgot: "Забув пароль?",
        logout: "Вийти",
        language: "Мова",
        settings: "Налаштування",
        mode: "Режим",
        modeArticle: "Артиклі (der/die/das)",
        modeDe: "Німецька → Переклад",
        modeL1: "Переклад → Німецька",
        filter: "Слова",
        filterAll: "Всі слова",
        filterNouns: "Іменники",
        filterVerbs: "Дієслова",
        qCount: "Питань",
        startQuiz: "Почати вікторину",
        leaderboard: "Рейтинг",
        achievements: "Досягнення",
        chooseArt: "Обери артикль",
        whatMeans: "Що означає",
        howGerman: "Як німецькою",
        of: "з",
        results: "Результати",
        time: "Час",
        sec: "сек",
        correctAns: "Правильних",
        wrongAns: "Помилок",
        again: "Ще раз",
        menu: "До меню",
        perfect: "Ідеально!",
        excellent: "Чудово!",
        good: "Добре!",
        notBad: "Непогано!",
        studyMore: "Вчи ще!",
        games: "Ігор",
        avg: "Середній",
        words: "Слів",
        comingSoon: "Скоро буде!",
        fillAll: "Заповни всі поля!",
        badEmail: "Некоректний email!",
        passShort: "Пароль мінімум 6 символів!",
        passNoMatch: "Паролі не збігаються!",
        nameShort: "Ім'я мінімум 2 символи!",
        userExists: "Цей email вже зареєстрований!",
        noUser: "Користувача не знайдено!",
        badPass: "Неправильний пароль!",
        recoverySent: "Інструкції надіслано на email",
        logoutQ: "Вийти з акаунту?"
    },
    tr: {
        appName: "Deutsch Lernspiel",
        subtitle: "Almancayı kolay öğren!",
        login: "Giriş",
        register: "Kayıt",
        email: "E-posta",
        emailPh: "your@email.com",
        password: "Şifre",
        passPh: "En az 6 karakter",
        passConfirm: "Şifreyi tekrarla",
        name: "İsim",
        namePh: "İsmin ne?",
        country: "Ülke",
        countrySel: "Ülke seç",
        loginBtn: "Giriş Yap",
        registerBtn: "Kayıt Ol",
        forgot: "Şifremi unuttum?",
        logout: "Çıkış",
        language: "Dil",
        settings: "Ayarlar",
        mode: "Mod",
        modeArticle: "Artikeller (der/die/das)",
        modeDe: "Almanca → Çeviri",
        modeL1: "Çeviri → Almanca",
        filter: "Kelimeler",
        filterAll: "Tüm kelimeler",
        filterNouns: "İsimler",
        filterVerbs: "Fiiller",
        qCount: "Soru",
        startQuiz: "Teste Başla",
        leaderboard: "Sıralama",
        achievements: "Başarılar",
        chooseArt: "Artikeli seç",
        whatMeans: "Ne anlama geliyor",
        howGerman: "Almancası ne",
        of: "/",
        results: "Sonuçlar",
        time: "Süre",
        sec: "sn",
        correctAns: "Doğru",
        wrongAns: "Yanlış",
        again: "Tekrar",
        menu: "Menü",
        perfect: "Mükemmel!",
        excellent: "Harika!",
        good: "İyi!",
        notBad: "Fena değil!",
        studyMore: "Daha çalış!",
        games: "Oyun",
        avg: "Ortalama",
        words: "Kelime",
        comingSoon: "Yakında!",
        fillAll: "Tüm alanları doldur!",
        badEmail: "Geçersiz email!",
        passShort: "Şifre en az 6 karakter!",
        passNoMatch: "Şifreler uyuşmuyor!",
        nameShort: "İsim en az 2 karakter!",
        userExists: "Bu email zaten kayıtlı!",
        noUser: "Kullanıcı bulunamadı!",
        badPass: "Yanlış şifre!",
        recoverySent: "Talimatlar e-postaya gönderildi",
        logoutQ: "Çıkış yapmak istiyor musunuz?"
    }
};

const COUNTRIES = [
    {f: "🇷🇺", n: "Россия"}, {f: "🇺🇦", n: "Україна"}, {f: "🇧🇾", n: "Беларусь"},
    {f: "🇰🇿", n: "Казахстан"}, {f: "🇩🇪", n: "Deutschland"}, {f: "🇦🇹", n: "Österreich"},
    {f: "🇨🇭", n: "Schweiz"}, {f: "🇺🇸", n: "USA"}, {f: "🇬🇧", n: "UK"},
    {f: "🇹🇷", n: "Türkiye"}, {f: "🇫🇷", n: "France"}, {f: "🇮🇹", n: "Italia"},
    {f: "🇪🇸", n: "España"}, {f: "🇵🇱", n: "Polska"}, {f: "🇨🇿", n: "Česko"},
    {f: "🇳🇱", n: "Nederland"}
];

const LFLAGS = {ru: "🇷🇺", en: "🇬🇧", uk: "🇺🇦", tr: "🇹🇷"};
const LNAMES = {ru: "Русский", en: "English", uk: "Українська", tr: "Türkçe"};

// ============== STATE ==============
let APP = {
    user: null,
    lang: 'ru',
    quiz: { mode: 'article', filter: 'all', count: 10, words: [], idx: 0, score: 0, t0: 0 },
    allWords: []
};

// ============== HELPERS ==============
function t(k) { return (UI_TEXT[APP.lang] || UI_TEXT.ru)[k] || UI_TEXT.ru[k] || k; }
function $(id) { return document.getElementById(id); }
function shuffle(a) { const r = [...a]; for (let i = r.length - 1; i > 0; i--) { const j = 0 | Math.random() * (i + 1); [r[i], r[j]] = [r[j], r[i]]; } return r; }
function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; } return Math.abs(h).toString(36); }
function uid(e) { return 'u_' + hash(e.toLowerCase()); }
function sv(k, v) { localStorage.setItem(CONFIG.prefix + k, JSON.stringify(v)); }
function ld(k) { try { return JSON.parse(localStorage.getItem(CONFIG.prefix + k)); } catch { return null; } }
function okEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function tr(w) { return w.ru || w.german; }
function esc(s) { return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }

function toast(msg) {
    document.querySelectorAll('.toast').forEach(e => e.remove());
    const d = document.createElement('div');
    d.className = 'toast';
    d.textContent = msg;
    document.body.appendChild(d);
    setTimeout(() => d.remove(), 2500);
}

// ============== INIT ==============
function initApp() {
    if (typeof NOUNS === 'undefined' || typeof VERBS === 'undefined') {
        $('app').innerHTML = '<p style="text-align:center;padding:40px;color:red;">Word data not loaded!</p>';
        return;
    }
    APP.allWords = [...NOUNS, ...VERBS];

    const sLang = localStorage.getItem(CONFIG.prefix + 'lang');
    if (sLang && UI_TEXT[sLang]) APP.lang = sLang;

    const cuid = localStorage.getItem(CONFIG.prefix + 'cur');
    if (cuid) {
        const d = ld('u_' + cuid);
        if (d) { APP.user = d; showMenu(); return; }
    }
    showAuth();
}

// ============== AUTH ==============
function showAuth(tab) {
    tab = tab || 'login';
    const cOpts = COUNTRIES.map(c => `<option value="${c.f}">${c.f} ${c.n}</option>`).join('');

    $('app').innerHTML = `
        <div class="auth-page">
            <div class="auth-header">
                <div class="auth-logo">🇩🇪</div>
                <h1>${t('appName')}</h1>
                <p>${t('subtitle')}</p>
            </div>
            <div class="auth-body">
                <div class="auth-tabs">
                    <button class="auth-tab ${tab==='login'?'active':''}" onclick="showAuth('login')">${t('login')}</button>
                    <button class="auth-tab ${tab==='register'?'active':''}" onclick="showAuth('register')">${t('register')}</button>
                </div>

                <div class="auth-form ${tab==='login'?'active':''}" id="fLogin">
                    <div class="form-group">
                        <label class="form-label">${t('email')}</label>
                        <input class="form-input" type="email" id="lEmail" placeholder="${t('emailPh')}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${t('password')}</label>
                        <input class="form-input" type="password" id="lPass" placeholder="${t('passPh')}">
                    </div>
                    <button class="btn btn-primary" onclick="doLogin()">${t('loginBtn')}</button>
                    <div class="auth-footer"><a onclick="doForgot()">${t('forgot')}</a></div>
                </div>

                <div class="auth-form ${tab==='register'?'active':''}" id="fReg">
                    <div class="form-group">
                        <label class="form-label">${t('name')}</label>
                        <input class="form-input" type="text" id="rName" placeholder="${t('namePh')}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${t('email')}</label>
                        <input class="form-input" type="email" id="rEmail" placeholder="${t('emailPh')}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${t('country')}</label>
                        <select class="form-select" id="rCountry"><option value="">${t('countrySel')}</option>${cOpts}</select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">${t('password')}</label>
                        <input class="form-input" type="password" id="rPass" placeholder="${t('passPh')}">
                    </div>
                    <div class="form-group">
                        <label class="form-label">${t('passConfirm')}</label>
                        <input class="form-input" type="password" id="rPass2" placeholder="${t('passPh')}">
                    </div>
                    <button class="btn btn-primary" onclick="doReg()">${t('registerBtn')}</button>
                </div>

                <div style="text-align:center;margin-top:20px">
                    <button class="btn btn-ghost btn-sm" onclick="showLangModal()" style="width:auto;display:inline-flex">${LFLAGS[APP.lang]} ${LNAMES[APP.lang]}</button>
                </div>
            </div>
        </div>
    `;
}

function doLogin() {
    const e = $('lEmail').value.trim(), p = $('lPass').value;
    if (!e || !p) return toast(t('fillAll'));
    if (!okEmail(e)) return toast(t('badEmail'));
    const id = uid(e), d = ld('u_' + id);
    if (!d) return toast(t('noUser'));
    if (hash(p) !== d.ph) return toast(t('badPass'));
    APP.user = d;
    localStorage.setItem(CONFIG.prefix + 'cur', id);
    showMenu();
}

function doReg() {
    const nm = $('rName').value.trim(), em = $('rEmail').value.trim(),
          co = $('rCountry').value, p1 = $('rPass').value, p2 = $('rPass2').value;
    if (!nm || !em || !co || !p1) return toast(t('fillAll'));
    if (nm.length < 2) return toast(t('nameShort'));
    if (!okEmail(em)) return toast(t('badEmail'));
    if (p1.length < 6) return toast(t('passShort'));
    if (p1 !== p2) return toast(t('passNoMatch'));
    const id = uid(em);
    if (ld('u_' + id)) return toast(t('userExists'));
    const u = { id, name: nm, email: em, country: co, ph: hash(p1), ts: Date.now() };
    sv('u_' + id, u);
    localStorage.setItem(CONFIG.prefix + 'cur', id);
    APP.user = u;
    showMenu();
}

function doForgot() {
    const e = prompt(t('email') + ':');
    if (!e) return;
    if (!okEmail(e)) return toast(t('badEmail'));
    if (!ld('u_' + uid(e))) return toast(t('noUser'));
    toast(t('recoverySent'));
}

// ============== MENU ==============
function showMenu() {
    if (!APP.user) return showAuth();
    const st = getStats(), nc = NOUNS.length, vc = VERBS.length;

    $('app').innerHTML = `
        <div class="app-shell">
            <div class="app-header">
                <div class="app-header-left">
                    <span style="font-size:1.3rem">🇩🇪</span>
                    <h1>${t('appName')}</h1>
                </div>
                <div class="app-header-right">
                    <button class="lang-chip" onclick="showLangModal()">${LFLAGS[APP.lang]} ${APP.lang.toUpperCase()}</button>
                    <button class="btn btn-ghost btn-sm" onclick="doLogout()" style="width:auto">${t('logout')}</button>
                </div>
            </div>
            <div class="app-content">
                <div class="user-card">
                    <div class="user-card-top">
                        <div class="user-avatar">${APP.user.country}</div>
                        <div><div class="user-name">${esc(APP.user.name)}</div><div class="user-email">${esc(APP.user.email)}</div></div>
                    </div>
                    <div class="user-stats-row">
                        <div class="user-stat"><div class="user-stat-value">${st.total}</div><div class="user-stat-label">${t('games')}</div></div>
                        <div class="user-stat"><div class="user-stat-value">${st.avg}%</div><div class="user-stat-label">${t('avg')}</div></div>
                        <div class="user-stat"><div class="user-stat-value">${nc+vc}</div><div class="user-stat-label">${t('words')}</div></div>
                    </div>
                </div>

                <div class="menu-section stagger">
                    <div class="menu-section-title">${t('settings')}</div>
                    <div class="menu-card">
                        <div class="setting-row">
                            <span class="setting-label">${t('mode')}</span>
                            <select class="form-select" id="sMode">
                                <option value="article">${t('modeArticle')}</option>
                                <option value="de2l1">${t('modeDe')}</option>
                                <option value="l12de">${t('modeL1')}</option>
                            </select>
                        </div>
                        <div class="setting-row">
                            <span class="setting-label">${t('filter')}</span>
                            <select class="form-select" id="sFilter">
                                <option value="all">${t('filterAll')} (${nc+vc})</option>
                                <option value="nouns">${t('filterNouns')} (${nc})</option>
                                <option value="verbs">${t('filterVerbs')} (${vc})</option>
                            </select>
                        </div>
                        <div class="setting-row">
                            <span class="setting-label">${t('qCount')}</span>
                            <select class="form-select" id="sCount">
                                <option value="10">10</option><option value="20">20</option>
                                <option value="30">30</option><option value="50">50</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="menu-section stagger">
                    <div class="quick-actions">
                        <div class="quick-action" onclick="showLB()">
                            <div class="quick-action-icon">🏆</div>
                            <div class="quick-action-text">${t('leaderboard')}</div>
                        </div>
                        <div class="quick-action" onclick="showAch()">
                            <div class="quick-action-icon">🎖️</div>
                            <div class="quick-action-text">${t('achievements')}</div>
                        </div>
                    </div>
                </div>
                <div style="height:80px"></div>
            </div>
            <div class="start-btn-wrap">
                <button class="start-btn" onclick="startQuiz()">🚀 ${t('startQuiz')}</button>
            </div>
        </div>
    `;
}

function doLogout() { if (!confirm(t('logoutQ'))) return; localStorage.removeItem(CONFIG.prefix+'cur'); APP.user=null; showAuth(); }

// ============== LANGUAGE ==============
function showLangModal() {
    const opts = ['ru','en','uk','tr'].map(l => `
        <button class="lang-option ${APP.lang===l?'selected':''}" onclick="setLang('${l}')">
            <span class="lang-option-flag">${LFLAGS[l]}</span>
            <span class="lang-option-name">${LNAMES[l]}</span>
        </button>
    `).join('');
    const m = document.createElement('div');
    m.className = 'modal-overlay'; m.id = 'lm';
    m.onclick = function(e) { if (e.target === this) closeLM(); };
    m.innerHTML = `<div class="modal-sheet"><div class="modal-handle"></div><div class="modal-title">${t('language')}</div>${opts}</div>`;
    document.body.appendChild(m);
}
function closeLM() { const m=$('lm'); if(m) m.remove(); }
function setLang(l) { APP.lang=l; localStorage.setItem(CONFIG.prefix+'lang',l); closeLM(); APP.user ? showMenu() : showAuth(); }

// ============== QUIZ ==============
function startQuiz() {
    const mode = $('sMode').value, filter = $('sFilter').value, count = +$('sCount').value;
    let pool = filter==='nouns' ? [...NOUNS] : filter==='verbs' ? [...VERBS] : [...APP.allWords];
    if (mode === 'article') pool = pool.filter(w => w.article);
    if (!pool.length) { toast('No words!'); return; }
    const n = Math.min(count, pool.length);
    APP.quiz = { mode, filter, count: n, words: shuffle(pool).slice(0, n), idx: 0, score: 0, t0: Date.now() };
    showQ();
}

function showQ() {
    if (APP.quiz.idx >= APP.quiz.words.length) { showRes(); return; }
    const w = APP.quiz.words[APP.quiz.idx];
    const pct = (APP.quiz.idx / APP.quiz.words.length) * 100;
    const num = APP.quiz.idx + 1, tot = APP.quiz.words.length;
    let label, display, hint = '', opts = [], correct, isArt = false;

    if (APP.quiz.mode === 'article') {
        isArt = true; label = t('chooseArt');
        display = w.word || w.german; hint = tr(w);
        opts = ['der','die','das']; correct = w.article;
    } else if (APP.quiz.mode === 'de2l1') {
        label = t('whatMeans'); display = w.german;
        const others = shuffle(APP.allWords.filter(x => x.id !== w.id)).slice(0, 3).map(x => tr(x));
        correct = tr(w); opts = shuffle([...new Set([...others, correct])]);
    } else {
        label = t('howGerman'); display = tr(w);
        const others = shuffle(APP.allWords.filter(x => x.id !== w.id)).slice(0, 3).map(x => x.german);
        correct = w.german; opts = shuffle([...new Set([...others, correct])]);
    }

    const btns = opts.map(o => {
        const eO = esc(o), eC = esc(correct);
        return `<button class="answer-btn" data-val="${eO}" data-cor="${eC}" onclick="checkA(this)">${o}</button>`;
    }).join('');

    $('app').innerHTML = `
        <div class="quiz-page">
            <div class="quiz-header">
                <div class="quiz-header-left">
                    <button class="quiz-back" onclick="quitQ()">&#8592;</button>
                    <span class="quiz-progress-text">${num} ${t('of')} ${tot}</span>
                </div>
                <span class="quiz-score" id="qsc">&#10003; ${APP.quiz.score}</span>
            </div>
            <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
            <div class="quiz-body">
                <div class="quiz-question-label">${label}</div>
                <div class="quiz-word">${display}</div>
                ${hint ? `<div class="quiz-hint">${hint}</div>` : ''}
                <div class="quiz-answers ${isArt?'article-mode':''} stagger">${btns}</div>
            </div>
        </div>
    `;
}

function checkA(btn) {
    const val = btn.dataset.val, cor = btn.dataset.cor;
    const ok = val === cor;
    if (ok) { APP.quiz.score++; btn.classList.add('correct'); }
    else { btn.classList.add('incorrect'); }
    document.querySelectorAll('.answer-btn').forEach(b => {
        b.disabled = true;
        if (b.dataset.val === cor) b.classList.add('correct');
    });
    const sc = $('qsc'); if (sc) sc.innerHTML = '&#10003; ' + APP.quiz.score;
    setTimeout(() => { APP.quiz.idx++; showQ(); }, 1200);
}

function quitQ() { if (confirm(t('menu')+'?')) showMenu(); }

// ============== RESULTS ==============
function showRes() {
    const ts = Math.round((Date.now() - APP.quiz.t0) / 1000);
    const s = APP.quiz.score, tot = APP.quiz.words.length, pct = Math.round(s/tot*100);
    saveRes({ d: Date.now(), s, tot, pct, ts, m: APP.quiz.mode });

    let emoji, msg;
    if (pct===100) { emoji='🎉'; msg=t('perfect'); }
    else if (pct>=80) { emoji='🔥'; msg=t('excellent'); }
    else if (pct>=60) { emoji='👍'; msg=t('good'); }
    else if (pct>=40) { emoji='💪'; msg=t('notBad'); }
    else { emoji='📚'; msg=t('studyMore'); }

    $('app').innerHTML = `
        <div class="results-page">
            <div class="results-emoji">${emoji}</div>
            <div class="results-title">${msg}</div>
            <div class="results-score">${s}/${tot}</div>
            <div class="results-percent">${pct}%</div>
            <div class="results-details">
                <div class="results-detail-row"><span>${t('correctAns')}</span><span style="color:var(--success)">${s}</span></div>
                <div class="results-detail-row"><span>${t('wrongAns')}</span><span style="color:var(--danger)">${tot-s}</span></div>
                <div class="results-detail-row"><span>${t('time')}</span><span>${ts} ${t('sec')}</span></div>
            </div>
            <div class="results-actions">
                <button class="btn btn-primary" onclick="showMenu();setTimeout(startQuiz,100)">🔄 ${t('again')}</button>
                <button class="btn btn-outline" onclick="showMenu()">&#8592; ${t('menu')}</button>
            </div>
        </div>
    `;
}

// ============== STATS ==============
function saveRes(r) { if (!APP.user) return; const k='st_'+APP.user.id; const d=ld(k)||{r:[]}; d.r.push(r); sv(k,d); }
function getStats() {
    if (!APP.user) return {total:0,avg:0};
    const d = ld('st_'+APP.user.id);
    if (!d||!d.r||!d.r.length) return {total:0,avg:0};
    return { total: d.r.length, avg: Math.round(d.r.reduce((s,x) => s+x.pct, 0)/d.r.length) };
}

// ============== PAGES ==============
function showLB() {
    $('app').innerHTML = `<div class="page-container"><div class="page-header"><button class="quiz-back" onclick="showMenu()">&#8592;</button><h1>🏆 ${t('leaderboard')}</h1></div><div class="page-body"><div class="empty-state"><div class="empty-state-icon">🏆</div><div class="empty-state-text">${t('comingSoon')}</div></div></div></div>`;
}
function showAch() {
    $('app').innerHTML = `<div class="page-container"><div class="page-header"><button class="quiz-back" onclick="showMenu()">&#8592;</button><h1>🎖️ ${t('achievements')}</h1></div><div class="page-body"><div class="empty-state"><div class="empty-state-icon">🎖️</div><div class="empty-state-text">${t('comingSoon')}</div></div></div></div>`;
}

// ============== START ==============
window.addEventListener('DOMContentLoaded', initApp);
