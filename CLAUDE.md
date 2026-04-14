# Deutsch-Lernspiel — Инструкции для Claude

## КРИТИЧЕСКИ ВАЖНО: избегать Stream idle timeout

**Проблема**: API возвращает `Stream idle timeout - partial response received`,
когда я генерирую очень большой блок текста через `Write` или `Edit` за один ход.
Стрим простаивает, модель не успевает прислать токены вовремя — соединение падает.

**Правило**: НИКОГДА не пиши большие (>100 строк) блоки данных через `Write`/`Edit`.

### Когда использовать Bash/Python скрипты вместо Write/Edit

Используй Python через Bash для:
- Массовых правок data-файлов (nouns.js, verbs.js, prepositions.js, pronouns.js,
  partizip2.js, reflexive.js, sentences.js) — любое добавление/изменение
  множественных записей
- Добавления переводов сразу во многие записи (например, поле `vi:`, `ar:`, `fa:`
  для 100+ записей)
- Переписывания `options:[...]` массивов в большом количестве объектов
- Генерации новых тестов/текстов VWU (ev_zt2, gf_zt*, epd_test) где нужно
  сразу много контента
- Генерации HINTS_ML, RULES_DIFF, RULE_SUMMARIES с переводами на 6 языков

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
- Правок `index.html`
- Новых отдельных секций в CLAUDE.md / README

## Git workflow

- Основная ветка: `main`
- Feature-ветка: `claude/fix-quiz-app-6cQbS`
- Пуш: `git -c user.name=Gadzera -c user.email=gadzera@users.noreply.github.com commit ...`
  Имя "Claude" в git-авторе НЕ использовать — только Gadzera.
- После коммита на feature-ветку делать squash-merge в `main` и пушить `main`.

## ⚠️ КРИТИЧЕСКИ ВАЖНО: GitHub Pages деплоится из `gh-pages`, не из `main`

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
git -c user.name=Gadzera -c user.email=gadzera@users.noreply.github.com commit ...
git push origin main

# 3. ОБЯЗАТЕЛЬНО: force-push main → gh-pages, иначе сайт не обновится!
git push origin main:gh-pages --force
```

**Без шага 3** пользователь будет продолжать видеть старую версию
независимо от cache-busting и очистки кэша. Проверено 14 апреля 2026 —
убил на это сутки, пуская коммиты в `main`, который Pages не смотрит.

## Структура приложения

- Vanilla JS SPA, без сборки. Всё подключается напрямую через `<script>` в index.html
- localStorage prefix: `dlp2_`
- Категории: Wortschatz, Partizip II, Reflexive, Satzbau, Präpositionen, Pronomen,
  VWU (Prüfungsvorbereitung — отдельное меню через `showVWUMenu()`)
- Helper languages: ru, en, tr, ar, fa, vi (`LANG_FLAGS` / `LANG_NAMES` в app.js ~138)

## Helper language fallback chain (tr() функция ~167)

Если `APP.lang` НЕ русский и у слова нет поля этого языка:
1. `w.en` (английский — универсальный fallback)
2. `w.german` / `w.verb`
3. `w.ru` (крайний случай)

Никогда не показывать русский перевод арабскому/фарси/турецкому/вьетнамскому
пользователю — это было багой, которую чинили.

## Поля для переводов в data-файлах

Стандартные поля в объектах: `ru`, `en` (всегда есть). Желательно добавлять:
`tr` (турецкий), `ar` (арабский), `fa` (фарси), `vi` (вьетнамский).

## Пользовательские требования (постоянные)

1. Сообщения в git от имени Gadzera, не Claude
2. Все правила, подсказки, объяснения — на выбранном helper-языке пользователя
3. Satzbau — строго конструктор из отдельных слов (см. `splitPart()` ~1020),
   никаких готовых фраз
4. MCQ (prepositions/pronouns): ровно 4 варианта, 2-колоночная сетка на мобильном,
   анимированное объяснение после ответа, варианты-дистракторы — вариации того же
   корня (mein/meine/meinen/meinem), а не случайные местоимения
5. Кнопка "✓ Знаю" на каждом упражнении — помечает как известное и пропускает
