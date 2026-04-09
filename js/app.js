// ============== DEUTSCH LERNSPIEL PRO v2.0 ==============
// Главное приложение с регистрацией, аутентификацией и системой обучения

// ============== CONFIGURATION ==============
const CONFIG = {
    version: "2.0.0",
    appName: "Deutsch Lernspiel Pro",
    storagePrefixes: {
        user: "dlp_user_",
        stats: "dlp_stats_",
        learned: "dlp_learned_",
        articles: "dlp_articles_"
    }
};

// ============== GLOBAL STATE ==============
let APP = {
    currentUser: null,
    currentLanguage: 'ru',
    quizState: {
        mode: 'article',
        filter: 'all',
        type: 'other',
        words: [],
        currentIndex: 0,
        score: 0,
        startTime: 0
    },
    allWords: []
};

// ============== INITIALIZATION ==============
function initApp() {
    console.log(`🚀 Инициализация ${CONFIG.appName} v${CONFIG.version}`);

    // Загружаем словари
    if (typeof NOUNS !== 'undefined' && typeof VERBS !== 'undefined') {
        APP.allWords = [...NOUNS, ...VERBS];
        console.log(`✅ Загружено ${APP.allWords.length} слов`);
    } else {
        console.error('❌ Словари не загружены!');
        alert('Ошибка: словари не найдены. Перезагрузите страницу.');
        return;
    }

    // Проверяем авторизацию
    const savedUserId = localStorage.getItem('dlp_currentUser');
    if (savedUserId) {
        const userData = localStorage.getItem(CONFIG.storagePrefixes.user + savedUserId);
        if (userData) {
            APP.currentUser = JSON.parse(userData);
            showMainMenu();
            updateStatsDisplay();
            return;
        }
    }

    // Показываем экран авторизации
    showAuthPage();
}

// ============== AUTHENTICATION ==============
function showAuthPage() {
    const html = `
        <div class="auth-page">
            <div class="auth-card">
                <h1>🇩🇪 Deutsch Lernspiel Pro</h1>
                <p class="auth-subtitle">Выучи немецкий язык легко!</p>

                <div id="authForm" class="auth-form">
                    <div class="form-group">
                        <label>Email адрес:</label>
                        <input type="email" id="authEmail" placeholder="your@email.com" required>
                    </div>

                    <div class="form-group">
                        <label>Пароль:</label>
                        <input type="password" id="authPassword" placeholder="Минимум 6 символов" required>
                    </div>

                    <button class="btn btn-primary btn-lg" onclick="handleLogin()">Вход</button>
                    <button class="btn btn-secondary btn-lg" onclick="showRegistration()">Регистрация</button>
                    <button class="btn btn-light btn-lg" onclick="showForgotPassword()">Забыл пароль</button>
                </div>

                <div id="registrationForm" class="auth-form hidden">
                    <h2>Новый аккаунт</h2>

                    <div class="form-group">
                        <label>Имя (никнейм):</label>
                        <input type="text" id="regName" placeholder="Твоё имя" required>
                    </div>

                    <div class="form-group">
                        <label>Email адрес:</label>
                        <input type="email" id="regEmail" placeholder="your@email.com" required>
                    </div>

                    <div class="form-group">
                        <label>Страна:</label>
                        <select id="regCountry" required>
                            <option value="">-- Выбери страну --</option>
                            <option value="🇷🇺">🇷🇺 Россия</option>
                            <option value="🇺🇦">🇺🇦 Украина</option>
                            <option value="🇧🇾">🇧🇾 Беларусь</option>
                            <option value="🇰🇿">🇰🇿 Казахстан</option>
                            <option value="🇩🇪">🇩🇪 Германия</option>
                            <option value="🇦🇹">🇦🇹 Австрия</option>
                            <option value="🇨🇭">🇨🇭 Швейцария</option>
                            <option value="🇺🇸">🇺🇸 США</option>
                            <option value="🇬🇧">🇬🇧 Британия</option>
                            <option value="🇫🇷">🇫🇷 Франция</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Пароль (минимум 6 символов):</label>
                        <input type="password" id="regPassword" placeholder="Надёжный пароль" required>
                    </div>

                    <div class="form-group">
                        <label>Повтори пароль:</label>
                        <input type="password" id="regPassword2" placeholder="Повтори пароль" required>
                    </div>

                    <button class="btn btn-primary btn-lg" onclick="handleRegistration()">Зарегистрироваться</button>
                    <button class="btn btn-secondary btn-lg" onclick="showAuthPage()">← Назад</button>
                </div>

                <div id="forgotForm" class="auth-form hidden">
                    <h2>Восстановление пароля</h2>

                    <div class="form-group">
                        <label>Email адрес:</label>
                        <input type="email" id="forgotEmail" placeholder="your@email.com" required>
                    </div>

                    <p class="info-text">На твой email будут отправлены инструкции по восстановлению пароля</p>

                    <button class="btn btn-primary btn-lg" onclick="handleForgotPassword()">Отправить</button>
                    <button class="btn btn-secondary btn-lg" onclick="showAuthPage()">← Назад</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}

function showRegistration() {
    document.getElementById('authForm').classList.add('hidden');
    document.getElementById('registrationForm').classList.remove('hidden');
}

function showForgotPassword() {
    document.getElementById('authForm').classList.add('hidden');
    document.getElementById('forgotForm').classList.remove('hidden');
}

function handleLogin() {
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;

    if (!email || !password) {
        alert('Заполни все поля!');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Некорректный email адрес!');
        return;
    }

    // Ищем пользователя
    const userId = hashEmail(email);
    const userData = localStorage.getItem(CONFIG.storagePrefixes.user + userId);

    if (!userData) {
        alert('Пользователь не найден. Пожалуйста, зарегистрируйся.');
        return;
    }

    const user = JSON.parse(userData);

    // Проверяем пароль
    if (hashPassword(password) !== user.passwordHash) {
        alert('Неправильный пароль!');
        return;
    }

    // Успешный вход
    APP.currentUser = user;
    localStorage.setItem('dlp_currentUser', userId);
    console.log(`✅ Вход успешен! Пользователь: ${user.name}`);

    showMainMenu();
    updateStatsDisplay();
}

function handleRegistration() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const country = document.getElementById('regCountry').value;
    const password = document.getElementById('regPassword').value;
    const password2 = document.getElementById('regPassword2').value;

    // Валидация
    if (!name || !email || !country || !password) {
        alert('Заполни все поля!');
        return;
    }

    if (name.length < 2) {
        alert('Имя должно быть минимум 2 символа!');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Некорректный email адрес!');
        return;
    }

    if (password.length < 6) {
        alert('Пароль должен быть минимум 6 символов!');
        return;
    }

    if (password !== password2) {
        alert('Пароли не совпадают!');
        return;
    }

    // Проверяем, не существует ли уже такой пользователь
    const userId = hashEmail(email);
    if (localStorage.getItem(CONFIG.storagePrefixes.user + userId)) {
        alert('Пользователь с этим email уже зарегистрирован!');
        return;
    }

    // Создаём пользователя
    const newUser = {
        id: userId,
        name: name,
        email: email,
        country: country,
        passwordHash: hashPassword(password),
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
    };

    // Сохраняем в localStorage
    localStorage.setItem(CONFIG.storagePrefixes.user + userId, JSON.stringify(newUser));
    localStorage.setItem('dlp_currentUser', userId);

    console.log(`✅ Регистрация успешна! Пользователь: ${name}`);

    APP.currentUser = newUser;
    showMainMenu();
    updateStatsDisplay();
}

function handleForgotPassword() {
    const email = document.getElementById('forgotEmail').value.trim();

    if (!email) {
        alert('Введи свой email!');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Некорректный email адрес!');
        return;
    }

    const userId = hashEmail(email);
    const userData = localStorage.getItem(CONFIG.storagePrefixes.user + userId);

    if (!userData) {
        alert('Пользователь с таким email не найден.');
        return;
    }

    // В реальном приложении здесь было бы отправка email
    // Сейчас просто показываем временный пароль
    alert(`Инструкции отправлены на ${email}.\n\nДля демонстрации:\nСброс пароля доступен. Пожалуйста, используй функцию восстановления в полной версии приложения.`);

    showAuthPage();
}

// ============== MAIN MENU ==============
function showMainMenu() {
    const html = `
        <div class="main-menu">
            <header class="menu-header">
                <h1>🇩🇪 Deutsch Lernspiel Pro</h1>
                <div class="header-controls">
                    <select id="langSelect" onchange="changeLanguage(this.value)">
                        <option value="ru">🇷🇺 Русский</option>
                        <option value="en">🇬🇧 English</option>
                        <option value="uk">🇺🇦 Українська</option>
                        <option value="tr">🇹🇷 Türkçe</option>
                    </select>
                    <button class="btn btn-small" onclick="handleLogout()">Выход</button>
                </div>
            </header>

            <main class="menu-content">
                <div class="user-card">
                    <h2>👤 ${APP.currentUser.name} ${APP.currentUser.country}</h2>
                    <p>Email: ${APP.currentUser.email}</p>
                </div>

                <div class="settings-section">
                    <h3>⚙️ Настройки викторины</h3>

                    <div class="setting-group">
                        <label>Режим:</label>
                        <select id="quizMode" onchange="APP.quizState.mode = this.value">
                            <option value="article">Артикли (der/die/das)</option>
                            <option value="de_to_l1">Немецкий → Перевод</option>
                            <option value="l1_to_de">Перевод → Немецкий</option>
                        </select>
                    </div>

                    <div class="setting-group">
                        <label>Фильтр слов:</label>
                        <select id="quizFilter" onchange="APP.quizState.filter = this.value">
                            <option value="all">Все слова</option>
                            <option value="nouns">Только существительные</option>
                            <option value="verbs">Только глаголы</option>
                            <option value="unlearned">Невыученные</option>
                        </select>
                    </div>

                    <div class="setting-group">
                        <label>Количество вопросов:</label>
                        <input type="number" id="quizCount" value="10" min="5" max="100">
                    </div>
                </div>

                <div class="stats-section">
                    <h3>📊 Моя статистика</h3>
                    <div id="statsDisplay" class="stats-box"></div>
                </div>

                <div class="action-buttons">
                    <button class="btn btn-primary btn-lg" onclick="startQuiz()">🚀 Начать викторину!</button>
                    <button class="btn btn-secondary btn-lg" onclick="showLeaderboard()">🏆 Таблица лидеров</button>
                    <button class="btn btn-secondary btn-lg" onclick="showAchievements()">🎖️ Достижения</button>
                </div>
            </main>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}

function changeLanguage(lang) {
    APP.currentLanguage = lang;
    console.log(`🌍 Язык изменён на: ${lang}`);
    // Здесь будет реализована смена интерфейса
}

function handleLogout() {
    if (confirm('Вы уверены, что хотите выйти?')) {
        localStorage.removeItem('dlp_currentUser');
        APP.currentUser = null;
        showAuthPage();
        console.log('👋 Пользователь вышел из системы');
    }
}

// ============== QUIZ FUNCTIONS ==============
function startQuiz() {
    if (!APP.currentUser) return;

    const count = parseInt(document.getElementById('quizCount').value) || 10;
    let selectedWords = [];

    if (APP.quizState.filter === 'nouns') {
        selectedWords = NOUNS.slice(0, count);
    } else if (APP.quizState.filter === 'verbs') {
        selectedWords = VERBS.slice(0, count);
    } else {
        selectedWords = APP.allWords.slice(0, count);
    }

    APP.quizState.words = shuffleArray(selectedWords);
    APP.quizState.currentIndex = 0;
    APP.quizState.score = 0;
    APP.quizState.startTime = Date.now();

    showQuizPage();
}

function showQuizPage() {
    if (APP.quizState.currentIndex >= APP.quizState.words.length) {
        showResults();
        return;
    }

    const word = APP.quizState.words[APP.quizState.currentIndex];
    const progress = ((APP.quizState.currentIndex / APP.quizState.words.length) * 100).toFixed(0);

    let questionText = '';
    let displayWord = '';
    let displayTranslation = '';
    let options = [];
    let correct = '';

    if (APP.quizState.mode === 'article') {
        questionText = 'Выбери артикль:';
        displayWord = word.word || word.german;
        displayTranslation = word[APP.currentLanguage] || word.ru;
        options = ['der', 'die', 'das'];
        correct = word.article || '';
    } else if (APP.quizState.mode === 'de_to_l1') {
        questionText = 'Что означает:';
        displayWord = word.german;
        options = APP.allWords.slice(0, 3).map(w => w[APP.currentLanguage] || w.ru);
        options.push(word[APP.currentLanguage] || word.ru);
        correct = word[APP.currentLanguage] || word.ru;
    } else {
        questionText = 'Как на немецком:';
        displayWord = word[APP.currentLanguage] || word.ru;
        options = APP.allWords.slice(0, 3).map(w => w.german);
        options.push(word.german);
        correct = word.german;
    }

    options = shuffleArray([...new Set(options)]);

    const answersHTML = options.map(opt =>
        `<button class="answer-btn" onclick="checkAnswer('${opt}', '${correct}', this)">${opt}</button>`
    ).join('');

    const html = `
        <div class="quiz-page">
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>

            <div class="quiz-info">
                Вопрос ${APP.quizState.currentIndex + 1} из ${APP.quizState.words.length}
            </div>

            <div class="question-box">
                <p class="question-text">${questionText}</p>
                <div class="word-display">${displayWord}</div>
                ${displayTranslation ? `<div class="translation-display">${displayTranslation}</div>` : ''}
            </div>

            <div class="answers-container">
                ${answersHTML}
            </div>

            <button class="btn btn-secondary" onclick="showMainMenu()" style="width: 100%; margin-top: 20px;">← Выход</button>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}

function checkAnswer(answer, correct, buttonElement) {
    const isCorrect = answer === correct;

    if (isCorrect) {
        APP.quizState.score++;
        buttonElement.classList.add('correct');
    } else {
        buttonElement.classList.add('incorrect');
    }

    // Находим и подсвечиваем правильный ответ
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add('correct');
        }
    });

    // Переходим к следующему вопросу через 2 секунды
    setTimeout(() => {
        APP.quizState.currentIndex++;
        showQuizPage();
    }, 2000);
}

function showResults() {
    const timeSpent = Math.round((Date.now() - APP.quizState.startTime) / 1000);
    const percent = Math.round((APP.quizState.score / APP.quizState.words.length) * 100);

    // Сохраняем результат
    saveQuizResult({
        date: new Date().toISOString(),
        score: APP.quizState.score,
        total: APP.quizState.words.length,
        percent: percent,
        time: timeSpent,
        mode: APP.quizState.mode
    });

    let resultMessage = '';
    if (percent === 100) resultMessage = '🎉 Идеально!';
    else if (percent >= 80) resultMessage = '👍 Отлично!';
    else if (percent >= 60) resultMessage = '😊 Хорошо!';
    else if (percent >= 40) resultMessage = '🤔 Неплохо!';
    else resultMessage = '📚 Учи больше!';

    const html = `
        <div class="results-page">
            <h1>Результаты</h1>

            <div class="score-display">
                <div class="result-message">${resultMessage}</div>
                <div class="score">${APP.quizState.score}/${APP.quizState.words.length}</div>
                <div class="percent">${percent}%</div>
            </div>

            <div class="stats-box">
                <div class="stat-row"><span>Времени затрачено:</span> <strong>${timeSpent} сек</strong></div>
                <div class="stat-row"><span>Правильных ответов:</span> <strong>${APP.quizState.score}</strong></div>
                <div class="stat-row"><span>Неправильных ответов:</span> <strong>${APP.quizState.words.length - APP.quizState.score}</strong></div>
            </div>

            <div class="action-buttons">
                <button class="btn btn-primary" onclick="startQuiz()">🔄 Повторить</button>
                <button class="btn btn-secondary" onclick="showMainMenu()">← Меню</button>
            </div>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}

function saveQuizResult(result) {
    if (!APP.currentUser) return;

    const key = CONFIG.storagePrefixes.stats + APP.currentUser.id;
    const stats = JSON.parse(localStorage.getItem(key) || '{"quizzes":[]}');
    stats.quizzes.push(result);
    localStorage.setItem(key, JSON.stringify(stats));
}

function updateStatsDisplay() {
    if (!APP.currentUser) return;

    const key = CONFIG.storagePrefixes.stats + APP.currentUser.id;
    const stats = JSON.parse(localStorage.getItem(key) || '{"quizzes":[]}');
    const quizzes = stats.quizzes;

    if (quizzes.length === 0) {
        document.getElementById('statsDisplay').innerHTML = '<p>Пока нет результатов. Начни викторину!</p>';
        return;
    }

    const avgPercent = Math.round(quizzes.reduce((s, q) => s + q.percent, 0) / quizzes.length);
    const totalQuestions = quizzes.reduce((s, q) => s + q.total, 0);

    const html = `
        <div class="stat-row"><span>Викторин пройдено:</span> <strong>${quizzes.length}</strong></div>
        <div class="stat-row"><span>Средний результат:</span> <strong>${avgPercent}%</strong></div>
        <div class="stat-row"><span>Всего вопросов:</span> <strong>${totalQuestions}</strong></div>
    `;

    document.getElementById('statsDisplay').innerHTML = html;
}

function showLeaderboard() {
    const html = `
        <div class="leaderboard-page">
            <h1>🏆 Таблица лидеров</h1>
            <p>Скоро будут добавлены глобальные рейтинги!</p>
            <button class="btn btn-secondary" onclick="showMainMenu()">← Назад</button>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}

function showAchievements() {
    const html = `
        <div class="achievements-page">
            <h1>🎖️ Достижения</h1>
            <p>Достижения разблокируются при прохождении викторин!</p>
            <button class="btn btn-secondary" onclick="showMainMenu()">← Назад</button>
        </div>
    `;
    document.getElementById('app').innerHTML = html;
}

// ============== UTILITY FUNCTIONS ==============
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(36);
}

function hashEmail(email) {
    return 'user_' + email.split('@')[0] + '_' + email.split('@')[1].split('.')[0];
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ============== START APPLICATION ==============
window.addEventListener('DOMContentLoaded', initApp);
