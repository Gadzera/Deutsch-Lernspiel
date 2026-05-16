# Deutsch-Lernspiel — Инструкции для Claude

## КРИТИЧЕСКИ ВАЖНО: избегать Stream idle timeout

**Проблема**: API возвращает `Stream idle timeout - partial response received`,
когда генерируется очень большой блок текста через `Write` или `Edit` за один ход.
Стрим простаивает, модель не успевает прислать токены вовремя — соединение падает.

**Правило**: НИКОГДА не пиши большие (>100 строк) блоки данных через `Write`/`Edit`.

### Когда использовать Bash/Python скрипты вместо Write/Edit

Используй Python через Bash для:
- Массовых правок data-файлов (nouns.js, verbs.js, prepositions.js, pronouns.js,
  partizip2.js, reflexive.js, sentences.js, deklination.js) — любое добавление/изменение
  множественных записей
- Добавления переводов сразу во многие записи (например, поле `vi:`, `ar:`, `fa:`
  для 100+ записей)
- Переписывания `options:[...]` массивов в большом количестве объектов
- Генерации новых тестов/текстов VWU (ev_zt2, ev_zt3*, epd_test) где нужно
  сразу много контента
- Генерации HINTS_ML, RULES_DIFF, RULE_SUMMARIES с переводами на 6 языков
- Переписывания самого CLAUDE.md (если изменений > 100 строк)

### Шаблон python-скрипта для правки data-файла

```bash
python3 <<'PY'
import re, pathlib
p = pathlib.Path('data/pronouns.js')
src = p.read_text()
# ... regex/replace ...
p.write_text(new_src)
print('OK')
PY
```

Скрипт выполняется НА СЕРВЕРЕ — никакого стриминга токенов, никаких таймаутов.

### Когда можно использовать Edit/Write

Edit/Write приемлем для:
- Маленьких точечных правок (≤ 30 строк в одном блоке)
- Отдельных функций в `js/app.js`
- Правок `css/style.css` (обычно мелкие добавления)
- Правок `index.html` или `app.html`
- Новых отдельных секций в CLAUDE.md / README

---

## Git workflow

- Основная ветка: `main`
- Текущая активная feature-ветка: `claude/add-claude-documentation-tNHDM`
- Коммит: `git -c user.name=Gadzera -c user.email=gadzera@users.noreply.github.com commit ...`
  Имя "Claude" в git-авторе НЕ использовать — только **Gadzera**.
- После коммита на feature-ветку делать squash-merge в `main` и пушить `main`.

## КРИТИЧЕСКИ ВАЖНО: GitHub Pages деплоится из `gh-pages`, не из `main`

GitHub Pages этого репозитория настроен на деплой **из отдельной ветки
`gh-pages`**. В `main` есть workflow-файл `.github/workflows/deploy-pages.yml`,
но он НЕ используется — Pages читает файлы напрямую из `gh-pages`.

**Полный workflow деплоя**:
```bash
# 1. Коммит в feature-ветку
git checkout claude/<branch>
git commit ...

# 2. Squash-merge в main
git checkout main
git merge --squash claude/<branch>
git -c user.name=Gadzera -c user.email=gadzera@users.noreply.github.com commit -m "..."
git push origin main

# 3. ОБЯЗАТЕЛЬНО: force-push main → gh-pages, иначе сайт не обновится!
git push origin main:gh-pages --force
```

**Без шага 3** пользователь видит старую версию независимо от cache-busting.
Проверено 14 апреля 2026 — убил на это сутки, пуская коммиты только в `main`.

---

## Структура приложения

### Файловая структура

```
index.html           — точка входа; мгновенно редиректит на app.html?t=<timestamp>
app.html             — основная SPA-страница; загружает все скрипты динамически
css/style.css        — все стили (~2289 строк); тёмная тема через data-theme="dark"
js/app.js            — вся логика (~3307 строк); ни фреймворков, чистый vanilla JS
data/nouns.js        — NOUNS[] (~1124 строки; ~290 существительных с артиклями)
data/verbs.js        — VERBS[] (~1324 строки; ~830 глаголов и прилагательных)
data/partizip2.js    — PARTIZIP2[] (~403 строки; Partizip II с aux)
data/reflexive.js    — REFLEXIVE[] (~527 строк; 90 рефлексивных глаголов)
data/sentences.js    — SENTENCES[] (~831 строка; упражнения Satzbau)
data/prepositions.js — PREPOSITIONS[] (~3958 строк; предлоги A1-C1)
data/pronouns.js     — PRONOUNS[] (~2657 строк; местоимения A1-B2)
data/deklination.js  — DEKLINATION[] (~959 строк; n-Deklination, Genitiv, Adjektiv)
data/rules.js        — RULES{} (~4790 строк; HTML-правила для каждой категории)
data/vwu.js          — VWU{} (~157 строк; структура меню Prüfungsvorbereitung)
data/ev_zt1_lesen.js        — данные Leseverstehen для EV ZT1
data/ev_zt1_pool.js         — пул вопросов для EV ZT1
data/ev_zt1_sections.js     — разделы EV ZT1
data/ev_zt2.js              — EV ZT2 (skeleton, пустые секции)
data/ev_zt3.js              — EV ZT3 основная структура (15-вариантный пул)
data/ev_zt3_g1.js           — EV ZT3 Grammatik варианты 1-8
data/ev_zt3_g2.js           — EV ZT3 Grammatik варианты 9-15
data/ev_zt3_w.js            — EV ZT3 Wortschatz (15 вариантов)
data/ev_zt3_s.js            — EV ZT3 Schreiben пул (5 Argumentation-промптов)
data/textproduktion.js      — TP_DATA[] (темы Textproduktion / Stellungnahme)
```

### Точка входа и порядок загрузки скриптов

1. `index.html` — cache-bust redirect → `app.html?t=<timestamp>`
2. `app.html` — inline SW cleanup, затем динамически инжектирует все
   `<script src="...?t=<timestamp>">` в порядке:
   nouns → verbs → partizip2 → reflexive → sentences → prepositions → pronouns
   → deklination → rules → vwu → ev_zt1_lesen → ev_zt1_pool → ev_zt1_sections
   → ev_zt2 → ev_zt3_g1 → ev_zt3_g2 → ev_zt3_w → ev_zt3_s → ev_zt3 → textproduktion
   → **js/app.js** (всегда последним!)
3. После загрузки последнего скрипта вызывается `initApp()` через `window.onload`.

**ВАЖНО**: `js/app.js` должен быть последним — он ожидает, что все константы
(NOUNS, VERBS, PARTIZIP2, …) уже объявлены в глобальном scope.

### Глобальный объект APP

```js
let APP = {
    user: null,          // объект пользователя из localStorage или null
    lang: 'ru',          // helper language: 'ru'|'en'|'tr'|'ar'|'fa'|'vi'
    quiz: null,          // активный quiz-объект (см. startQuiz())
    allWords: [],        // [...NOUNS, ...VERBS]
    quizCount: 10,       // количество вопросов за сессию
    skipKnown: true,     // пропускать known items
    subliminal: true,    // subliminal flash (25th-frame обучение)
    subliminalMs: 40,    // длительность flash в мс
    openCat: null        // id открытой категории в меню
};
```

localStorage prefix для всех ключей: `dlp2_`.
Ключевые ключи: `dlp2_cur` (id текущего пользователя), `dlp2_lang`,
`dlp2_dark`, `dlp2_sub`, `dlp2_prog_<userId>` (прогресс по категориям).

---

## Данные (data/*.js) — схемы объектов

### nouns.js — NOUNS[]

```js
{
    id: "mann",          // уникальный snake_case ID
    german: "der Mann",  // артикль + слово (полная форма для UI)
    article: "der",      // "der" | "die" | "das"
    word: "Mann",        // слово без артикля
    ru: "мужчина",       // обязателен
    en: "man",           // обязателен
    tr: "adam",          // желательно
    vi: "dan ong",       // желательно
    ar: "...",           // желательно
    fa: "..."            // желательно
}
```

### verbs.js — VERBS[]

```js
{
    id: "abschliessen",
    german: "abschließen",   // инфинитив (полная форма для UI)
    word: "abschließen",     // то же, что german
    ru, en, tr, vi, ar, fa   // те же поля, что у nouns
}
```

### prepositions.js — PREPOSITIONS[]

```js
{
    id: "pp001",
    level: "A1",                      // A1 | A2 | B1 | B2 | C1
    type: "wechsel",                  // wechsel | dativ | akkusativ | genitiv |
                                      // verb_prep | verb_prep_kasus | adjektiv_prep
    case: "Akkusativ",                // Akkusativ | Dativ | "" для verb_prep
    sentence: "Ich gehe ___ die Schule",  // ___ = место для вставки
    answer: "in",
    options: ["in","an","auf","zu"],   // ровно 4 варианта
    ru: "...", en: "...", vi: "...", ar: "...", fa: "...", tr: "..."
    // для verb_prep_kasus / adjektiv_prep дополнительно:
    // sent_ru, sent_en, sent_tr, sent_ar, sent_fa, sent_vi — полный перевод предложения
}
```

### pronouns.js — PRONOUNS[]

```js
{
    id: "pn001",
    level: "A1",
    type: "personal",   // personal | possessiv | reflexiv | relativ |
                        // indefinit | frageartikel | artikelwort
    case: "Nominativ",  // Nominativ | Akkusativ | Dativ | Genitiv
    sentence: "___ komme aus Russland",
    answer: "Ich",
    options: ["Ich","Mich","Mir","Mein"],  // ровно 4; дистракторы — вариации корня
    ru: "...", en: "...", vi: "...", ar: "...", fa: "...", tr: "..."
}
```

### partizip2.js — PARTIZIP2[]

```js
{
    id: "pt001",
    verb: "machen",        // инфинитив
    partizip: "gemacht",   // форма Partizip II
    aux: "haben",          // "haben" | "sein"
    ru, en, tr, vi, ar, fa
}
```

### reflexive.js — REFLEXIVE[]

```js
{
    id: "rf001",
    verb: "sich waschen",
    case: "akk",           // "akk" | "dat"
    ich: "wasche mich",
    du: "waschst dich",
    er: "wascht sich",
    wir: "waschen uns",
    ihr: "wascht euch",
    sie: "waschen sich",
    ru, en, tr, vi, ar, fa
}
```

### sentences.js — SENTENCES[]

```js
{
    id: "s001",
    level: "A1",
    cat: "hauptsatz",       // hauptsatz | modal | tekamolo | nebensatz |
                            // relativsatz | konjunktiv | indirekt | passiv | ...
    rule: "Subjekt + Verb + Objekt",  // краткое правило для подсказки
    correct: ["Ich","trinke","Kaffee"],  // правильный порядок (массив фрагментов)
    alt: ["..."],           // опциональный альтернативный правильный порядок
    distractors: ["Tee","du","morgen"],  // слова-дистракторы
    ru, en, vi, tr, ar, fa
}
```

### deklination.js — DEKLINATION[]

```js
{
    id: "dk001",
    type: "n_dekl",     // n_dekl | genitiv_attr | adj_dekl
    level: "A2",
    sentence: "Der ___ kommt aus Berlin",
    answer: "Student",
    options: ["Student","Studenten","Studentes","Studente"],
    ru, en, tr, vi, ar, fa
}
```

### rules.js — RULES{}

Ключи объекта = id категорий: `partizip`, `reflexive`, `prepositions`,
`pronouns`, `sentences`, `deklination`.
Каждый ключ содержит поле `de` (HTML-разметка правила на немецком).
Отображается через `showRule(cat, backAction)` (app.js ~665).

---

## app.js — ключевые секции (3307 строк)

| Строки    | Секция / Функция                  | Назначение                                    |
|-----------|-----------------------------------|-----------------------------------------------|
| 1–91      | CONFIG, UI{}                      | версия, prefix, все UI-строки на немецком     |
| 93–139    | COUNTRIES[], LANG_FLAGS/NAMES     | страны и 6 helper-языков                      |
| 141–152   | APP{}                             | глобальный state-объект                       |
| 155–175   | Helpers                           | $(), shuffle(), hash(), sv(), ld(), tr()      |
| 169–175   | tr(w)                             | перевод слова на APP.lang с fallback          |
| 184–194   | fullSent(w)                       | перевод предложения (sent_XX поля)            |
| 196–216   | Progress                          | getKnownIds(), markKnown(), resetCatProgress()|
| 218–266   | User counter, PIN helpers, toast  | getUserCount(), pinPadHTML(), toast()         |
| 268–284   | initApp()                         | загрузка, восстановление сессии               |
| 286–439   | AUTH                              | showAuth(), doLogin(), doReg(), doForgot()    |
| 440–845   | Menu                              | catHTML(), sqBtn(), ruleBtn(), showMenu()     |
| 612–630   | buildSatzbauGroups()              | группировка Satzbau по типу коннектора        |
| 698–845   | showMenu()                        | рендер меню, все 9 категорий                  |
| 850–859   | showLangModal(), setLang()        | переключение helper-языка                     |
| 861–941   | Quiz Engine                       | getPool(), startQuiz(), repeatUnmarked()      |
| 943–1246  | MCQ Quiz                          | prepareMCQ(), showMCQ(), checkA()             |
| 945–978   | Partizip fake forms               | genFakePForm(), genFakePartizips()            |
| 1116–1210 | Know-button                       | knowBtnLabel(), markKnownAndSkip()            |
| 1151–1246 | MCQ explanation                   | getMCQExplanation() — объяснение после ответа |
| 1247–1298 | RF_SENTENCES, RF_SIMILAR          | данные для Reflexive-упражнений               |
| 1299–1459 | HINTS_ML{}                        | многоязычные подсказки по грамматике          |
| 1460–1466 | getHints(cat)                     | выбор подсказки для APP.lang                  |
| 1467–1589 | Sentence Builder                  | splitPart(), showBuilder(), renderBuilder()   |
| 1590–1615 | checkBuilder()                    | проверка Satzbau-ответа                       |
| 1617–1712 | Animated corrections              | startCorrections(), showCorrection()           |
| 1778–1962 | Category formulas                 | формулы и примеры для каждой категории        |
| 1963–2080 | getCatDetail(), getCorrectionRule | детальные объяснения при ошибке               |
| 2081–2092 | Subliminal                        | showSubliminal() — 25th-frame flash           |
| 2093+     | Results                           | showRes(), showWrongReview()                  |
| 2200+     | VWU, Textproduktion               | showVWUMenu(), showTPMenu() и их логика       |

---

## Система i18n / переводов

### tr(w) — перевод слова (app.js ~169)

```
если APP.lang == 'ru':  w.ru -> w.en -> w.german/verb -> ''
если APP.lang != 'ru':  w[lang] -> w.en -> w.german/verb -> w.ru -> ''
```

**ПРАВИЛО**: никогда не показывать `w.ru` арабскому/фарси/турецкому/вьетнамскому
пользователю раньше `w.en` — иначе кириллица у не-RU юзеров (это была баг).

### fullSent(w) — перевод предложения (app.js ~184)

Читает поля `sent_ru`, `sent_en`, `sent_tr`, `sent_ar`, `sent_fa`, `sent_vi`.
Используется для verb_prep_kasus и adjektiv_prep, где `ru`/`en` — краткий глосс,
а `sent_XX` — полный перевод предложения с предлогом.

### HINTS_ML{} (app.js ~1300)

Многоязычные грамматические подсказки для каждого `cat` Satzbau-упражнений.
Структура: `HINTS_ML[cat][langCode]` = массив строк-подсказок.
Языки: `de`, `ru`, `en`, `tr`, `vi`, `ar`, `fa`.

---

## Quiz Engine

### getPool(cat, mode) (app.js ~862)

| cat          | mode                  | источник                          |
|--------------|-----------------------|-----------------------------------|
| words        | article / de2l1 / l12de | NOUNS, VERBS                    |
| partizip     | v2p / aux             | PARTIZIP2                         |
| reflexive    | conj / case           | REFLEXIVE                         |
| sentences    | all / hauptsatz / ... | SENTENCES (filter по .cat)        |
| prepositions | all / wechsel / ...   | PREPOSITIONS (filter по .type)    |
| pronouns     | all / personal / ...  | PRONOUNS (filter по .type)        |
| deklination  | all / n_dekl / ...    | DEKLINATION (filter по .type)     |

### startQuiz(cat, mode) (app.js ~885)

1. Получить пул через `getPool()`
2. Если `skipKnown` — отфильтровать по `getKnownIds(cat+'_'+mode)`
3. Shuffle + slice до `APP.quizCount`
4. `type = (cat==='sentences') ? 'builder' : 'mcq'`
5. Заполнить `APP.quiz` и вызвать `showQ()`

### APP.quiz объект

```js
{
    type: 'mcq' | 'builder',
    cat, mode,
    items: [...],       // перемешанный подмассив
    idx: 0,             // текущий индекс
    score: 0,
    t0: Date.now(),
    built: [],          // для builder: выбранные слова пользователем
    allW: [],           // для builder: все доступные слова (correct + distractors)
    correctS: [],
    wrongs: [],         // [{item, userAnswer, correct}]
    knownTicked: Set,   // отмеченные как 'знаю' в текущей сессии
    poolSnapshot: []
}
```

---

## Категории и их режимы (showMenu app.js ~698)

| Категория        | Icon | Режимы (mode)                                                          |
|------------------|------|------------------------------------------------------------------------|
| Wortschatz       | 📚   | article, de2l1, l12de                                                  |
| Partizip II      | 📝   | v2p (verb→partizip), aux (haben/sein)                                  |
| Reflexive Verben | 🔄   | conj (спряжение), case (акк/дат)                                       |
| Satzbau          | 📐   | all, hauptsatz, modal, tekamolo, nebensatz, relativsatz, ...           |
| Präpositionen    | 📌   | all, wechsel, dativ, akkusativ, genitiv, verb_prep, verb_prep_kasus, adjektiv_prep |
| Pronomen         | 👥   | all, personal, possessiv, reflexiv, relativ, indefinit, frageartikel, artikelwort |
| Deklination      | 🏛️  | all, n_dekl, genitiv_attr, adj_dekl                                    |
| Textproduktion   | ✍️   | отдельный экран showTPMenu()                                           |
| VWU              | 🎓   | отдельное меню showVWUMenu() — уровни AV / EV / EPD / GF               |

progKey для прогресса = `cat + '_' + mode` (например, `prepositions_wechsel`).

---

## Система прогресса

Хранится в localStorage как `dlp2_prog_<userId>`:
```js
{ "prepositions_all": ["pp001","pp003",...], "words_article": [...], ... }
```

- `getKnownIds(key)` → `Set<id>`
- `markKnown(itemId, key)` → добавить в массив прогресса
- `getProgressPct(key, total)` → процент (для progress-bar в меню)
- `resetCatProgress(key)` → удалить ключ из прогресса

Кнопка "✓ Знаю" (`toggleKnowTick()`) добавляет item в `APP.quiz.knownTicked` —
временный Set только для текущей сессии; реально в localStorage записывается
через `markKnownAndSkip()` (MCQ) или аналог в builder.

---

## MCQ — правила

- Ровно **4 варианта** (`options[]` в данных)
- **2-колоночная** сетка на мобильном (`.mcq-grid`)
- Дистракторы — **вариации того же корня** (mein/meine/meinen/meinem),
  не случайные слова
- После ответа: анимированное объяснение + правило (`getMCQExplanation`)
- Partizip: fake-формы генерируются динамически через `genFakePartizips()`

## Satzbau (Sentence Builder) — правила

- `splitPart(s)` (~1468) разбивает фрагмент предложения на отдельные слова
- `splitSentenceParts(arr)` разбивает весь `correct[]` на слова
- `genExtraDistractors(item)` добавляет слова из `distractors[]`
- Интерфейс: банк слов → пользователь тапает → слово попадает в строку-ответ
- `arrEq(a, b)` — сравнение с учётом `alt[]` (альтернативный порядок)
- После неверного ответа: **анимированные коррекции** (`startCorrections`)

---

## Пользовательские требования (постоянные)

1. Сообщения в git от имени **Gadzera**, не Claude
2. Все правила, подсказки, объяснения — на **выбранном helper-языке** пользователя
3. Satzbau — строго конструктор из отдельных слов (`splitPart()` ~1468),
   никаких готовых фраз
4. MCQ: ровно 4 варианта, 2-колоночная сетка на мобильном,
   анимированное объяснение после ответа, дистракторы — вариации того же корня
5. Кнопка "✓ Знаю" на каждом упражнении — помечает как известное и пропускает
6. UI всегда на **немецком** (объект `UI{}`), независимо от helper-языка
7. Helper-языки строго: `ru`, `en`, `tr`, `ar`, `fa`, `vi` — шесть, не больше
