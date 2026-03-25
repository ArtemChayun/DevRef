const HTML_TAGS = [
  {
    tag: `<!DOCTYPE>`,
    category: "Документ",
    description: "Объявляет тип документа и версию HTML. Должен быть первой строкой HTML-документа.",
    attributes: ["html"],
    example: `<!DOCTYPE html>\n<html lang="ru">\n  <head>...</head>\n  <body>...</body>\n</html>`,
    mdn: "https://developer.mozilla.org/ru/docs/Glossary/Doctype"
  },
  {
    tag: "<a>",
    category: "Текст и ссылки",
    description: "Создаёт гиперссылку на другую страницу, файл, email или любой URL. Является основным элементом навигации в вебе.",
    attributes: ["href", "target", "rel", "download", "hreflang", "type"],
    example: `<a href="https://example.com" target="_blank" rel="noopener">\n  Открыть сайт\n</a>\n\n<!-- Ссылка на email -->\n<a href="mailto:info@example.com">Написать нам</a>\n\n<!-- Ссылка-якорь -->\n<a href="#section1">Перейти к разделу</a>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/a"
  },
  {
    tag: "<abbr>",
    category: "Текст и ссылки",
    description: "Представляет аббревиатуру или акроним. Атрибут title содержит расшифровку.",
    attributes: ["title"],
    example: `<p>Язык <abbr title="HyperText Markup Language">HTML</abbr> создан в 1991 году.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/abbr"
  },
  {
    tag: "<address>",
    category: "Семантика",
    description: "Содержит контактную информацию для ближайшего <article> или <body>. Обычно отображается курсивом.",
    attributes: [],
    example: `<address>\n  <a href="mailto:info@example.com">info@example.com</a><br>\n  <a href="tel:+79001234567">+7 (900) 123-45-67</a><br>\n  г. Москва, ул. Примерная, д. 1\n</address>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/address"
  },
  {
    tag: "<area>",
    category: "Медиа",
    description: "Определяет кликабельную область внутри карты изображения. Используется внутри <map>.",
    attributes: ["alt", "coords", "href", "shape", "target", "rel"],
    example: `<img src="map.png" usemap="#worldmap" alt="Карта мира">\n<map name="worldmap">\n  <area shape="rect" coords="0,0,200,100" href="europe.html" alt="Европа">\n  <area shape="circle" coords="300,150,50" href="asia.html" alt="Азия">\n</map>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/area"
  },
  {
    tag: "<article>",
    category: "Семантика",
    description: "Самодостаточный независимый блок контента: статья, пост блога, комментарий, виджет.",
    attributes: [],
    example: `<article>\n  <h2>Заголовок статьи</h2>\n  <p>Текст статьи...</p>\n  <footer>\n    <time datetime="2024-01-15">15 января 2024</time>\n  </footer>\n</article>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/article"
  },
  {
    tag: "<aside>",
    category: "Семантика",
    description: "Содержимое, косвенно связанное с основным контентом: боковая панель, врезка, реклама.",
    attributes: [],
    example: `<main>\n  <article>Основной контент...</article>\n  <aside>\n    <h3>Связанные материалы</h3>\n    <ul>\n      <li><a href="#">Статья 1</a></li>\n      <li><a href="#">Статья 2</a></li>\n    </ul>\n  </aside>\n</main>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/aside"
  },
  {
    tag: "<audio>",
    category: "Медиа",
    description: "Встраивает аудиоконтент. Поддерживает форматы MP3, WAV, OGG.",
    attributes: ["src", "controls", "autoplay", "loop", "muted", "preload"],
    example: `<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  <source src="audio.ogg" type="audio/ogg">\n  Ваш браузер не поддерживает аудио.\n</audio>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/audio"
  },
  {
    tag: "<b>",
    category: "Текст и ссылки",
    description: "Жирное начертание без семантической нагрузки. Для важного текста используйте <strong>.",
    attributes: [],
    example: `<p>Инструкция: нажмите кнопку <b>ОК</b> для продолжения.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/b"
  },
  {
    tag: "<base>",
    category: "Метаданные",
    description: "Задаёт базовый URL для всех относительных URL в документе. Только один элемент на страницу.",
    attributes: ["href", "target"],
    example: `<head>\n  <base href="https://example.com/" target="_blank">\n</head>\n<!-- Ссылка будет вести на https://example.com/page.html -->\n<a href="page.html">Страница</a>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/base"
  },
  {
    tag: "<bdi>",
    category: "Текст и ссылки",
    description: "Изолирует фрагмент текста, направление которого неизвестно заранее (двунаправленная изоляция).",
    attributes: [],
    example: `<ul>\n  <li>Пользователь <bdi>أحمد</bdi>: 5 очков</li>\n  <li>Пользователь <bdi>Ivan</bdi>: 10 очков</li>\n</ul>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/bdi"
  },
  {
    tag: "<bdo>",
    category: "Текст и ссылки",
    description: "Переопределяет направление текста. Атрибут dir: ltr (слева направо) или rtl (справа налево).",
    attributes: ["dir"],
    example: `<p><bdo dir="rtl">Этот текст справа налево</bdo></p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/bdo"
  },
  {
    tag: "<blockquote>",
    category: "Текст и ссылки",
    description: "Блочная цитата из внешнего источника. Атрибут cite указывает URL источника.",
    attributes: ["cite"],
    example: `<blockquote cite="https://www.w3.org/">\n  <p>Сила веба — в его универсальности.</p>\n  <footer>— <cite>Тим Бернерс-Ли</cite></footer>\n</blockquote>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/blockquote"
  },
  {
    tag: "<body>",
    category: "Документ",
    description: "Корневой элемент, содержащий весь видимый контент HTML-документа.",
    attributes: ["onload", "onunload", "onresize"],
    example: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Страница</title>\n</head>\n<body>\n  <h1>Привет, мир!</h1>\n  <p>Это тело документа.</p>\n</body>\n</html>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/body"
  },
  {
    tag: "<br>",
    category: "Текст и ссылки",
    description: "Вставляет перенос строки. Используйте для стихов и адресов, не для отступов между абзацами.",
    attributes: [],
    example: `<p>Москва,<br>ул. Примерная,<br>д. 42</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/br"
  },
  {
    tag: "<button>",
    category: "Формы",
    description: "Интерактивная кнопка. Может содержать текст, иконки и другие элементы.",
    attributes: ["type", "name", "value", "disabled", "form", "formaction", "autofocus"],
    example: `<!-- Обычная кнопка -->\n<button type="button" onclick="alert('Клик!')">Нажми меня</button>\n\n<!-- Кнопка отправки формы -->\n<button type="submit">Отправить</button>\n\n<!-- Отключённая кнопка -->\n<button disabled>Недоступно</button>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/button"
  },
  {
    tag: "<canvas>",
    category: "Медиа",
    description: "Контейнер для рисования графики через JavaScript (2D/3D). Широко используется для игр и анимаций.",
    attributes: ["width", "height"],
    example: `<canvas id="myCanvas" width="300" height="150"></canvas>\n<script>\n  const ctx = document.getElementById('myCanvas').getContext('2d');\n  ctx.fillStyle = '#4F46E5';\n  ctx.fillRect(20, 20, 200, 100);\n  ctx.fillStyle = 'white';\n  ctx.font = '20px Arial';\n  ctx.fillText('Canvas!', 90, 75);\n</script>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/canvas"
  },
  {
    tag: "<caption>",
    category: "Таблицы",
    description: "Подпись к таблице. Размещается сразу после открывающего тега <table>.",
    attributes: [],
    example: `<table>\n  <caption>Продажи за квартал</caption>\n  <tr>\n    <th>Месяц</th>\n    <th>Выручка</th>\n  </tr>\n  <tr>\n    <td>Январь</td>\n    <td>₽150 000</td>\n  </tr>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/caption"
  },
  {
    tag: "<cite>",
    category: "Текст и ссылки",
    description: "Указывает название творческого произведения: книги, фильма, статьи. Отображается курсивом.",
    attributes: [],
    example: `<p>Моя любимая книга — <cite>Мастер и Маргарита</cite> Булгакова.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/cite"
  },
  {
    tag: "<code>",
    category: "Текст и ссылки",
    description: "Отображает фрагмент компьютерного кода. Используется вместе с <pre> для блоков кода.",
    attributes: [],
    example: `<p>Функция <code>console.log()</code> выводит данные в консоль.</p>\n\n<pre><code>function greet(name) {\n  return 'Привет, ' + name;\n}</code></pre>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/code"
  },
  {
    tag: "<col>",
    category: "Таблицы",
    description: "Задаёт свойства для столбца в <colgroup>. Позволяет стилизовать целые столбцы.",
    attributes: ["span"],
    example: `<table>\n  <colgroup>\n    <col style="background:#f0f0f0">\n    <col span="2" style="background:#e0e0ff">\n  </colgroup>\n  <tr><td>A</td><td>B</td><td>C</td></tr>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/col"
  },
  {
    tag: "<colgroup>",
    category: "Таблицы",
    description: "Группирует столбцы таблицы для применения общих стилей через элементы <col>.",
    attributes: ["span"],
    example: `<table>\n  <colgroup>\n    <col style="width: 30%">\n    <col style="width: 70%">\n  </colgroup>\n  <tr>\n    <td>Ключ</td>\n    <td>Значение</td>\n  </tr>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/colgroup"
  },
  {
    tag: "<data>",
    category: "Текст и ссылки",
    description: "Связывает контент с машиночитаемым значением через атрибут value.",
    attributes: ["value"],
    example: `<ul>\n  <li><data value="21053">Яблоко</data></li>\n  <li><data value="21054">Груша</data></li>\n</ul>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/data"
  },
  {
    tag: "<datalist>",
    category: "Формы",
    description: "Список предопределённых вариантов для элемента <input>. Реализует автодополнение.",
    attributes: [],
    example: `<label>Выберите браузер:\n  <input list="browsers" name="browser">\n</label>\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n  <option value="Safari">\n  <option value="Edge">\n</datalist>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/datalist"
  },
  {
    tag: "<dd>",
    category: "Списки",
    description: "Описание термина в списке определений <dl>. Идёт после элемента <dt>.",
    attributes: [],
    example: `<dl>\n  <dt>HTML</dt>\n  <dd>Язык разметки гипертекста</dd>\n  <dt>CSS</dt>\n  <dd>Каскадные таблицы стилей</dd>\n</dl>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dd"
  },
  {
    tag: "<del>",
    category: "Текст и ссылки",
    description: "Помечает удалённый текст. Отображается с зачёркиванием. Для противоположного используйте <ins>.",
    attributes: ["cite", "datetime"],
    example: `<p>Цена: <del>₽2 000</del> <ins>₽1 500</ins></p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/del"
  },
  {
    tag: "<details>",
    category: "Интерактивность",
    description: "Раскрывающийся виджет с дополнительным контентом. Работает без JavaScript.",
    attributes: ["open"],
    example: `<details>\n  <summary>Подробнее о проекте</summary>\n  <p>Это детальное описание проекта, которое\n  скрыто по умолчанию и раскрывается при клике.</p>\n</details>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/details"
  },
  {
    tag: "<dfn>",
    category: "Текст и ссылки",
    description: "Помечает термин, который определяется в данном месте документа.",
    attributes: ["title"],
    example: `<p>\n  <dfn>Семантика</dfn> — это раздел лингвистики,\n  изучающий значение языковых единиц.\n</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dfn"
  },
  {
    tag: "<dialog>",
    category: "Интерактивность",
    description: "Диалоговое окно или другой интерактивный компонент. Можно открывать методами showModal() и show().",
    attributes: ["open"],
    example: `<dialog id="myDialog">\n  <h2>Подтверждение</h2>\n  <p>Вы уверены?</p>\n  <button onclick="document.getElementById('myDialog').close()">Закрыть</button>\n</dialog>\n<button onclick="document.getElementById('myDialog').showModal()">Открыть</button>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dialog"
  },
  {
    tag: "<div>",
    category: "Структура",
    description: "Универсальный блочный контейнер без семантики. Используется для группировки элементов и применения стилей.",
    attributes: [],
    example: `<div class="card">\n  <div class="card-header">\n    <h2>Заголовок</h2>\n  </div>\n  <div class="card-body">\n    <p>Содержимое карточки</p>\n  </div>\n</div>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/div"
  },
  {
    tag: "<dl>",
    category: "Списки",
    description: "Список определений: пары термин (<dt>) и описание (<dd>). Подходит для глоссариев.",
    attributes: [],
    example: `<dl>\n  <dt>JavaScript</dt>\n  <dd>Язык программирования для веба</dd>\n  <dt>Node.js</dt>\n  <dd>Среда выполнения JavaScript на сервере</dd>\n</dl>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dl"
  },
  {
    tag: "<dt>",
    category: "Списки",
    description: "Термин в списке определений <dl>. Обычно идёт перед одним или несколькими элементами <dd>.",
    attributes: [],
    example: `<dl>\n  <dt>Кот</dt>\n  <dd>Домашнее животное семейства кошачьих</dd>\n</dl>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/dt"
  },
  {
    tag: "<em>",
    category: "Текст и ссылки",
    description: "Выделяет текст с семантическим ударением. Отображается курсивом. Важнее, чем <i>.",
    attributes: [],
    example: `<p>Я <em>обязательно</em> приду на встречу.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/em"
  },
  {
    tag: "<embed>",
    category: "Медиа",
    description: "Встраивает внешний контент: плагин, PDF, Flash. Современный аналог — <object> или <iframe>.",
    attributes: ["src", "type", "width", "height"],
    example: `<embed src="document.pdf" type="application/pdf" width="600" height="400">`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/embed"
  },
  {
    tag: "<fieldset>",
    category: "Формы",
    description: "Группирует связанные элементы формы с рамкой. Подпись задаётся через <legend>.",
    attributes: ["disabled", "form", "name"],
    example: `<fieldset>\n  <legend>Личные данные</legend>\n  <label>Имя: <input type="text" name="name"></label>\n  <label>Email: <input type="email" name="email"></label>\n</fieldset>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/fieldset"
  },
  {
    tag: "<figcaption>",
    category: "Семантика",
    description: "Подпись к элементу <figure>. Может быть в начале или конце фигуры.",
    attributes: [],
    example: `<figure>\n  <img src="photo.jpg" alt="Закат">\n  <figcaption>Закат над Чёрным морем, 2024</figcaption>\n</figure>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/figcaption"
  },
  {
    tag: "<figure>",
    category: "Семантика",
    description: "Самодостаточный контент с необязательной подписью: изображение, диаграмма, код.",
    attributes: [],
    example: `<figure>\n  <img src="chart.png" alt="График роста">\n  <figcaption>Рост продаж за 2024 год</figcaption>\n</figure>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/figure"
  },
  {
    tag: "<footer>",
    category: "Семантика",
    description: "Нижний колонтитул раздела или страницы. Содержит авторство, ссылки, копирайт.",
    attributes: [],
    example: `<footer>\n  <p>© 2024 Компания. Все права защищены.</p>\n  <nav>\n    <a href="/privacy">Конфиденциальность</a>\n    <a href="/terms">Условия</a>\n  </nav>\n</footer>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/footer"
  },
  {
    tag: "<form>",
    category: "Формы",
    description: "Интерактивная форма для ввода и отправки данных. Контейнер для элементов управления.",
    attributes: ["action", "method", "enctype", "target", "autocomplete", "novalidate"],
    example: `<form action="/submit" method="post">\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email" required>\n  <button type="submit">Отправить</button>\n</form>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/form"
  },
  {
    tag: "<h1>",
    category: "Заголовки",
    description: "Заголовок первого уровня — самый важный на странице. Должен быть один на странице.",
    attributes: [],
    example: `<h1>Главный заголовок страницы</h1>\n<h2>Раздел первый</h2>\n<h3>Подраздел</h3>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements"
  },
  {
    tag: "<h2>",
    category: "Заголовки",
    description: "Заголовок второго уровня. Подзаголовок или название раздела.",
    attributes: [],
    example: `<h1>Кулинария</h1>\n<h2>Супы</h2>\n<h3>Борщ</h3>\n<h3>Щи</h3>\n<h2>Вторые блюда</h2>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements"
  },
  {
    tag: "<h3>",
    category: "Заголовки",
    description: "Заголовок третьего уровня. Используется для подразделов внутри h2.",
    attributes: [],
    example: `<h2>Языки программирования</h2>\n<h3>JavaScript</h3>\n<p>Описание JS...</p>\n<h3>Python</h3>\n<p>Описание Python...</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements"
  },
  {
    tag: "<h4>",
    category: "Заголовки",
    description: "Заголовок четвёртого уровня. Редко используется — пересмотрите структуру документа.",
    attributes: [],
    example: `<h3>Фреймворки JS</h3>\n<h4>React</h4>\n<p>Библиотека от Meta...</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements"
  },
  {
    tag: "<h5>",
    category: "Заголовки",
    description: "Заголовок пятого уровня. Используется очень редко.",
    attributes: [],
    example: `<h5>Дополнительные материалы</h5>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements"
  },
  {
    tag: "<h6>",
    category: "Заголовки",
    description: "Заголовок шестого уровня — самый низкий. Используется крайне редко.",
    attributes: [],
    example: `<h6>Примечание</h6>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements"
  },
  {
    tag: "<head>",
    category: "Документ",
    description: "Контейнер метаданных документа: заголовок, стили, скрипты, мета-теги. Не отображается.",
    attributes: [],
    example: `<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Моя страница</title>\n  <link rel="stylesheet" href="style.css">\n</head>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/head"
  },
  {
    tag: "<header>",
    category: "Семантика",
    description: "Вводный блок раздела или страницы. Обычно содержит логотип, навигацию, заголовок.",
    attributes: [],
    example: `<header>\n  <img src="logo.svg" alt="Логотип">\n  <nav>\n    <a href="/">Главная</a>\n    <a href="/about">О нас</a>\n    <a href="/contact">Контакты</a>\n  </nav>\n</header>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/header"
  },
  {
    tag: "<hr>",
    category: "Структура",
    description: "Горизонтальная разделительная линия. Семантически означает тематический разрыв.",
    attributes: [],
    example: `<p>Первый раздел текста.</p>\n<hr>\n<p>Второй раздел текста.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/hr"
  },
  {
    tag: "<html>",
    category: "Документ",
    description: "Корневой элемент HTML-страницы. Содержит <head> и <body>. Атрибут lang важен для SEO.",
    attributes: ["lang", "dir"],
    example: `<!DOCTYPE html>\n<html lang="ru" dir="ltr">\n  <head>...</head>\n  <body>...</body>\n</html>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/html"
  },
  {
    tag: "<i>",
    category: "Текст и ссылки",
    description: "Курсивный текст без семантики: термины, иностранные слова, иконки Font Awesome.",
    attributes: [],
    example: `<p>Слово <i lang="en">interface</i> происходит из латыни.</p>\n<!-- Font Awesome иконка -->\n<i class="fas fa-heart"></i>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/i"
  },
  {
    tag: "<iframe>",
    category: "Встраивание",
    description: "Встраивает другой HTML-документ в текущую страницу. Используется для карт, видео, виджетов.",
    attributes: ["src", "width", "height", "title", "allow", "loading", "sandbox"],
    example: `<!-- YouTube видео -->\n<iframe \n  width="560" height="315"\n  src="https://www.youtube.com/embed/VIDEO_ID"\n  title="YouTube video"\n  allow="accelerometer; clipboard-write; encrypted-media"\n  allowfullscreen\n  loading="lazy">\n</iframe>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/iframe"
  },
  {
    tag: "<img>",
    category: "Медиа",
    description: "Встраивает изображение. Атрибут alt обязателен для доступности. Поддерживает lazy loading.",
    attributes: ["src", "alt", "width", "height", "loading", "srcset", "sizes", "decoding"],
    example: `<!-- Базовое изображение -->\n<img src="photo.jpg" alt="Описание фото" width="800" height="600" loading="lazy">\n\n<!-- Адаптивное изображение -->\n<img\n  src="small.jpg"\n  srcset="medium.jpg 800w, large.jpg 1200w"\n  sizes="(max-width: 600px) 100vw, 50vw"\n  alt="Адаптивное фото">`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/img"
  },
  {
    tag: "<input>",
    category: "Формы",
    description: "Поле ввода данных. Тип определяется атрибутом type: text, email, password, checkbox, radio и др.",
    attributes: ["type", "name", "value", "placeholder", "required", "disabled", "readonly", "min", "max", "pattern", "autocomplete"],
    example: `<!-- Текстовое поле -->\n<input type="text" placeholder="Введите имя" required>\n\n<!-- Email с валидацией -->\n<input type="email" name="email">\n\n<!-- Чекбокс -->\n<input type="checkbox" id="agree" name="agree">\n<label for="agree">Согласен с условиями</label>\n\n<!-- Слайдер -->\n<input type="range" min="0" max="100" value="50">`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/input"
  },
  {
    tag: "<ins>",
    category: "Текст и ссылки",
    description: "Помечает вставленный текст. Отображается с подчёркиванием. Противоположность <del>.",
    attributes: ["cite", "datetime"],
    example: `<p>Старая цена: <del>₽500</del>, новая: <ins>₽350</ins></p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/ins"
  },
  {
    tag: "<kbd>",
    category: "Текст и ссылки",
    description: "Обозначает ввод с клавиатуры. Отображается моноширинным шрифтом.",
    attributes: [],
    example: `<p>Нажмите <kbd>Ctrl</kbd> + <kbd>C</kbd> для копирования.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/kbd"
  },
  {
    tag: "<label>",
    category: "Формы",
    description: "Метка для элемента формы. Улучшает доступность и увеличивает область клика.",
    attributes: ["for"],
    example: `<!-- Явная связь через for -->\n<label for="username">Имя пользователя:</label>\n<input type="text" id="username">\n\n<!-- Неявная связь (обёртка) -->\n<label>\n  Пароль:\n  <input type="password">\n</label>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/label"
  },
  {
    tag: "<legend>",
    category: "Формы",
    description: "Подпись для группы элементов <fieldset>. Должен быть первым дочерним элементом.",
    attributes: [],
    example: `<fieldset>\n  <legend>Способ доставки</legend>\n  <label><input type="radio" name="delivery" value="courier"> Курьер</label>\n  <label><input type="radio" name="delivery" value="pickup"> Самовывоз</label>\n</fieldset>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/legend"
  },
  {
    tag: "<li>",
    category: "Списки",
    description: "Элемент списка. Используется внутри <ul>, <ol> или <menu>.",
    attributes: ["value"],
    example: `<ul>\n  <li>Первый пункт</li>\n  <li>Второй пункт\n    <ul>\n      <li>Вложенный пункт</li>\n    </ul>\n  </li>\n</ul>\n\n<ol start="5">\n  <li>Пятый пункт</li>\n  <li value="10">Десятый пункт</li>\n</ol>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/li"
  },
  {
    tag: "<link>",
    category: "Метаданные",
    description: "Связывает документ с внешним ресурсом: стилями, иконкой, шрифтами. В <head>.",
    attributes: ["rel", "href", "type", "media", "as", "crossorigin", "sizes"],
    example: `<head>\n  <!-- Стили -->\n  <link rel="stylesheet" href="style.css">\n  <!-- Иконка -->\n  <link rel="icon" href="favicon.ico" sizes="32x32">\n  <!-- Предзагрузка шрифта -->\n  <link rel="preload" href="font.woff2" as="font" crossorigin>\n  <!-- Google Fonts -->\n  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">\n</head>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/link"
  },
  {
    tag: "<main>",
    category: "Семантика",
    description: "Основной уникальный контент страницы. Один элемент на страницу, не вложен в <article>, <aside>, <nav>.",
    attributes: [],
    example: `<body>\n  <header>Шапка</header>\n  <main>\n    <h1>Главная страница</h1>\n    <p>Основной контент...</p>\n  </main>\n  <footer>Подвал</footer>\n</body>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/main"
  },
  {
    tag: "<map>",
    category: "Медиа",
    description: "Определяет карту изображения с кликабельными областями (<area>). Связывается с <img> через usemap.",
    attributes: ["name"],
    example: `<img src="world.png" usemap="#worldmap" alt="Карта">\n<map name="worldmap">\n  <area href="russia.html" shape="poly" coords="100,50,200,50,200,150,100,150" alt="Россия">\n</map>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/map"
  },
  {
    tag: "<mark>",
    category: "Текст и ссылки",
    description: "Выделяет текст как важный в контексте: результаты поиска, подсветка кода.",
    attributes: [],
    example: `<p>Результаты поиска для «<mark>веб-разработка</mark>»:</p>\n<p>Курс по <mark>веб-разработке</mark> с нуля.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/mark"
  },
  {
    tag: "<menu>",
    category: "Списки",
    description: "Семантический список для меню команд или навигации. Альтернативный семантический вариант <ul>.",
    attributes: [],
    example: `<menu>\n  <li><button>Новый файл</button></li>\n  <li><button>Открыть</button></li>\n  <li><button>Сохранить</button></li>\n</menu>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/menu"
  },
  {
    tag: "<meta>",
    category: "Метаданные",
    description: "Метаданные документа: кодировка, viewport, описание, автор, Open Graph теги.",
    attributes: ["charset", "name", "content", "http-equiv", "property"],
    example: `<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Описание страницы для SEO">\n  <meta name="keywords" content="HTML, CSS, веб">\n  <!-- Open Graph -->\n  <meta property="og:title" content="Заголовок">\n  <meta property="og:image" content="preview.jpg">\n</head>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/meta"
  },
  {
    tag: "<meter>",
    category: "Формы",
    description: "Шкала для измеримой величины в известном диапазоне: заполненность диска, оценка, уровень.",
    attributes: ["value", "min", "max", "low", "high", "optimum"],
    example: `<label>Заполненность диска:\n  <meter value="75" min="0" max="100" low="20" high="80">\n    75%\n  </meter>\n</label>\n<label>Рейтинг:\n  <meter value="4.5" min="0" max="5">4.5/5</meter>\n</label>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/meter"
  },
  {
    tag: "<nav>",
    category: "Семантика",
    description: "Блок навигационных ссылок: главное меню, хлебные крошки, оглавление.",
    attributes: [],
    example: `<nav aria-label="Главное меню">\n  <ul>\n    <li><a href="/">Главная</a></li>\n    <li><a href="/products">Товары</a></li>\n    <li><a href="/about">О нас</a></li>\n    <li><a href="/contact">Контакты</a></li>\n  </ul>\n</nav>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/nav"
  },
  {
    tag: "<noscript>",
    category: "Скрипты",
    description: "Контент для браузеров без JavaScript или с отключённым JS.",
    attributes: [],
    example: `<noscript>\n  <p>Для работы сайта включите JavaScript в настройках браузера.</p>\n  <style>.js-only { display: none; }</style>\n</noscript>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/noscript"
  },
  {
    tag: "<object>",
    category: "Встраивание",
    description: "Встраивает внешний ресурс: PDF, Flash, SVG. Более универсальный аналог <embed>.",
    attributes: ["data", "type", "width", "height", "name", "form"],
    example: `<object data="document.pdf" type="application/pdf" width="600" height="400">\n  <p>Ваш браузер не поддерживает PDF. \n  <a href="document.pdf">Скачать файл</a></p>\n</object>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/object"
  },
  {
    tag: "<ol>",
    category: "Списки",
    description: "Нумерованный список. Порядок элементов важен. Атрибут type меняет тип нумерации.",
    attributes: ["type", "start", "reversed"],
    example: `<ol>\n  <li>Открыть редактор</li>\n  <li>Написать код</li>\n  <li>Сохранить файл</li>\n</ol>\n\n<!-- Буквенная нумерация -->\n<ol type="a">\n  <li>Первый</li>\n  <li>Второй</li>\n</ol>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/ol"
  },
  {
    tag: "<optgroup>",
    category: "Формы",
    description: "Группирует связанные варианты в <select>. Атрибут label задаёт заголовок группы.",
    attributes: ["label", "disabled"],
    example: `<select>\n  <optgroup label="Фрукты">\n    <option>Яблоко</option>\n    <option>Груша</option>\n  </optgroup>\n  <optgroup label="Овощи">\n    <option>Морковь</option>\n    <option>Картофель</option>\n  </optgroup>\n</select>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/optgroup"
  },
  {
    tag: "<option>",
    category: "Формы",
    description: "Вариант выбора в <select>, <datalist> или <optgroup>.",
    attributes: ["value", "selected", "disabled", "label"],
    example: `<select name="city">\n  <option value="">Выберите город</option>\n  <option value="msk" selected>Москва</option>\n  <option value="spb">Санкт-Петербург</option>\n  <option value="ekb">Екатеринбург</option>\n</select>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/option"
  },
  {
    tag: "<output>",
    category: "Формы",
    description: "Отображает результат вычисления или действия пользователя. Семантически связан с формой.",
    attributes: ["for", "form", "name"],
    example: `<form oninput="result.value = parseInt(a.value) + parseInt(b.value)">\n  <input type="number" id="a" value="0"> +\n  <input type="number" id="b" value="0"> =\n  <output name="result" for="a b">0</output>\n</form>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/output"
  },
  {
    tag: "<p>",
    category: "Текст и ссылки",
    description: "Параграф текста. Браузер автоматически добавляет отступы сверху и снизу.",
    attributes: [],
    example: `<p>Первый абзац текста содержит основную мысль.</p>\n<p>Второй абзац развивает идею дальше и приводит примеры.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/p"
  },
  {
    tag: "<picture>",
    category: "Медиа",
    description: "Контейнер для адаптивных изображений. Позволяет задать разные источники для разных условий.",
    attributes: [],
    example: `<picture>\n  <source media="(min-width: 800px)" srcset="large.jpg">\n  <source media="(min-width: 400px)" srcset="medium.jpg">\n  <img src="small.jpg" alt="Адаптивное фото">\n</picture>\n\n<!-- Поддержка WebP -->\n<picture>\n  <source srcset="image.webp" type="image/webp">\n  <img src="image.jpg" alt="Фото">\n</picture>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/picture"
  },
  {
    tag: "<pre>",
    category: "Текст и ссылки",
    description: "Предварительно отформатированный текст. Сохраняет пробелы и переносы строк.",
    attributes: [],
    example: `<pre><code>function hello() {\n  console.log("Hello, World!");\n}</code></pre>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/pre"
  },
  {
    tag: "<progress>",
    category: "Формы",
    description: "Индикатор прогресса задачи. Без value показывает неопределённый прогресс (анимация).",
    attributes: ["value", "max"],
    example: `<!-- Определённый прогресс -->\n<label>Загрузка:\n  <progress value="70" max="100">70%</progress>\n</label>\n\n<!-- Неопределённый прогресс -->\n<progress>Загрузка...</progress>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/progress"
  },
  {
    tag: "<q>",
    category: "Текст и ссылки",
    description: "Строчная цитата. Браузер автоматически добавляет кавычки. Для блочных цитат — <blockquote>.",
    attributes: ["cite"],
    example: `<p>Как сказал Эйнштейн: <q>Воображение важнее знаний.</q></p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/q"
  },
  {
    tag: "<ruby>",
    category: "Текст и ссылки",
    description: "Аннотация ruby для восточноазиатской типографики: произношение иероглифов.",
    attributes: [],
    example: `<ruby>\n  漢 <rt>かん</rt>\n  字 <rt>じ</rt>\n</ruby>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/ruby"
  },
  {
    tag: "<s>",
    category: "Текст и ссылки",
    description: "Зачёркнутый текст, который больше не актуален. Для редактирования используйте <del>.",
    attributes: [],
    example: `<p><s>Цена: ₽3 000</s> Акция: ₽1 999</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/s"
  },
  {
    tag: "<samp>",
    category: "Текст и ссылки",
    description: "Вывод программы или компьютерной системы. Отображается моноширинным шрифтом.",
    attributes: [],
    example: `<p>Программа вернула: <samp>Error 404: File not found</samp></p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/samp"
  },
  {
    tag: "<script>",
    category: "Скрипты",
    description: "Встраивает или подключает JavaScript. Атрибуты defer и async управляют загрузкой.",
    attributes: ["src", "type", "defer", "async", "crossorigin", "integrity", "nomodule"],
    example: `<!-- Встроенный скрипт -->\n<script>\n  console.log("Привет!");\n</script>\n\n<!-- Внешний файл с defer -->\n<script src="app.js" defer></script>\n\n<!-- ES-модуль -->\n<script type="module" src="module.js"></script>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/script"
  },
  {
    tag: "<section>",
    category: "Семантика",
    description: "Тематический раздел документа с заголовком. Группирует связанный контент.",
    attributes: [],
    example: `<section>\n  <h2>О компании</h2>\n  <p>Мы занимаемся разработкой...</p>\n</section>\n<section>\n  <h2>Наши услуги</h2>\n  <ul>...</ul>\n</section>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/section"
  },
  {
    tag: "<select>",
    category: "Формы",
    description: "Выпадающий список для выбора одного или нескольких вариантов.",
    attributes: ["name", "multiple", "size", "disabled", "required", "autofocus"],
    example: `<!-- Одиночный выбор -->\n<select name="country">\n  <option value="ru">Россия</option>\n  <option value="ua">Украина</option>\n  <option value="by">Беларусь</option>\n</select>\n\n<!-- Множественный выбор -->\n<select name="languages" multiple size="3">\n  <option>JavaScript</option>\n  <option>Python</option>\n  <option>Rust</option>\n</select>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/select"
  },
  {
    tag: "<small>",
    category: "Текст и ссылки",
    description: "Мелкий шрифт для примечаний, правовых оговорок, авторских прав.",
    attributes: [],
    example: `<p>Регистрируясь, вы соглашаетесь с условиями.</p>\n<small>© 2024 Компания. Все права защищены.</small>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/small"
  },
  {
    tag: "<source>",
    category: "Медиа",
    description: "Альтернативный источник медиа для <picture>, <audio> и <video>. Браузер выбирает подходящий.",
    attributes: ["src", "srcset", "type", "media", "sizes"],
    example: `<video controls>\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n</video>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/source"
  },
  {
    tag: "<span>",
    category: "Структура",
    description: "Строчный контейнер без семантики. Используется для стилизации части текста.",
    attributes: [],
    example: `<p>Цена: <span class="price">₽1 500</span></p>\n<p><span class="highlight">Важное</span> замечание.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/span"
  },
  {
    tag: "<strong>",
    category: "Текст и ссылки",
    description: "Важный текст с высокой значимостью. Отображается жирным. Семантически важнее <b>.",
    attributes: [],
    example: `<p><strong>Внимание!</strong> Не сохраняйте пароли в браузере.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/strong"
  },
  {
    tag: "<style>",
    category: "Метаданные",
    description: "Встроенные CSS-стили. Рекомендуется выносить стили во внешние файлы через <link>.",
    attributes: ["media", "type"],
    example: `<style>\n  body {\n    font-family: sans-serif;\n    color: #333;\n  }\n  .highlight {\n    background: yellow;\n    padding: 2px 6px;\n  }\n</style>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/style"
  },
  {
    tag: "<sub>",
    category: "Текст и ссылки",
    description: "Нижний индекс. Используется для химических формул, математических выражений.",
    attributes: [],
    example: `<p>Вода: H<sub>2</sub>O</p>\n<p>CO<sub>2</sub> — углекислый газ</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/sub"
  },
  {
    tag: "<summary>",
    category: "Интерактивность",
    description: "Видимый заголовок для элемента <details>. При клике раскрывает/скрывает контент.",
    attributes: [],
    example: `<details>\n  <summary>Показать детали</summary>\n  <p>Это скрытый контент, который появляется после клика.</p>\n</details>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/summary"
  },
  {
    tag: "<sup>",
    category: "Текст и ссылки",
    description: "Верхний индекс. Используется для сносок, степеней, математических формул.",
    attributes: [],
    example: `<p>E = mc<sup>2</sup></p>\n<p>Это утверждение<sup>1</sup> требует доказательства.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/sup"
  },
  {
    tag: "<table>",
    category: "Таблицы",
    description: "Создаёт таблицу. Используйте только для табличных данных, не для вёрстки.",
    attributes: [],
    example: `<table>\n  <caption>Расписание</caption>\n  <thead>\n    <tr>\n      <th>День</th>\n      <th>Время</th>\n      <th>Событие</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Понедельник</td>\n      <td>10:00</td>\n      <td>Встреча</td>\n    </tr>\n  </tbody>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/table"
  },
  {
    tag: "<tbody>",
    category: "Таблицы",
    description: "Группирует строки тела таблицы. Позволяет применять стили и скроллить независимо от шапки.",
    attributes: [],
    example: `<table>\n  <thead><tr><th>Имя</th><th>Возраст</th></tr></thead>\n  <tbody>\n    <tr><td>Иван</td><td>25</td></tr>\n    <tr><td>Мария</td><td>30</td></tr>\n  </tbody>\n  <tfoot><tr><td colspan="2">Итого: 2 человека</td></tr></tfoot>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/tbody"
  },
  {
    tag: "<td>",
    category: "Таблицы",
    description: "Ячейка данных в таблице. Может объединять строки (rowspan) и столбцы (colspan).",
    attributes: ["colspan", "rowspan", "headers"],
    example: `<table>\n  <tr>\n    <td>Обычная ячейка</td>\n    <td colspan="2">Ячейка на два столбца</td>\n  </tr>\n  <tr>\n    <td rowspan="2">Ячейка на две строки</td>\n    <td>B</td>\n    <td>C</td>\n  </tr>\n  <tr><td>D</td><td>E</td></tr>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/td"
  },
  {
    tag: "<template>",
    category: "Скрипты",
    description: "Шаблон HTML-контента, не отображаемый при загрузке. Клонируется через JavaScript.",
    attributes: [],
    example: `<template id="card-template">\n  <div class="card">\n    <h3 class="title"></h3>\n    <p class="description"></p>\n  </div>\n</template>\n<script>\n  const tmpl = document.getElementById('card-template');\n  const clone = tmpl.content.cloneNode(true);\n  clone.querySelector('.title').textContent = 'Заголовок';\n  document.body.appendChild(clone);\n</script>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/template"
  },
  {
    tag: "<textarea>",
    category: "Формы",
    description: "Многострочное текстовое поле. Размер регулируется атрибутами rows и cols или CSS.",
    attributes: ["name", "rows", "cols", "placeholder", "disabled", "readonly", "required", "maxlength", "autofocus"],
    example: `<label for="message">Сообщение:</label>\n<textarea \n  id="message" \n  name="message"\n  rows="5" \n  cols="40"\n  placeholder="Введите ваше сообщение..."\n  maxlength="500"\n></textarea>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/textarea"
  },
  {
    tag: "<tfoot>",
    category: "Таблицы",
    description: "Группирует строки нижней части таблицы: итоги, суммы. Рендерится после <tbody>.",
    attributes: [],
    example: `<table>\n  <tbody>\n    <tr><td>Товар А</td><td>₽500</td></tr>\n    <tr><td>Товар Б</td><td>₽750</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><th>Итого</th><th>₽1 250</th></tr>\n  </tfoot>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/tfoot"
  },
  {
    tag: "<th>",
    category: "Таблицы",
    description: "Заголовочная ячейка таблицы. Жирный и центрированный. Атрибут scope улучшает доступность.",
    attributes: ["scope", "colspan", "rowspan", "abbr"],
    example: `<table>\n  <tr>\n    <th scope="col">Продукт</th>\n    <th scope="col">Цена</th>\n    <th scope="col">Количество</th>\n  </tr>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/th"
  },
  {
    tag: "<thead>",
    category: "Таблицы",
    description: "Группирует строки заголовка таблицы. Повторяется при печати многостраничных таблиц.",
    attributes: [],
    example: `<table>\n  <thead>\n    <tr>\n      <th>Имя</th>\n      <th>Email</th>\n    </tr>\n  </thead>\n  <tbody>...</tbody>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/thead"
  },
  {
    tag: "<time>",
    category: "Текст и ссылки",
    description: "Машиночитаемое время или дата. Атрибут datetime содержит значение в стандартном формате.",
    attributes: ["datetime"],
    example: `<p>Опубликовано <time datetime="2024-01-15T10:30">15 января 2024</time></p>\n<p>Мероприятие начнётся <time datetime="19:00">в 7 вечера</time></p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/time"
  },
  {
    tag: "<title>",
    category: "Метаданные",
    description: "Заголовок документа в браузерной вкладке. Важен для SEO. Обязателен в <head>.",
    attributes: [],
    example: `<head>\n  <title>Главная — Мой сайт</title>\n</head>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/title"
  },
  {
    tag: "<tr>",
    category: "Таблицы",
    description: "Строка таблицы. Содержит ячейки <td> и заголовки <th>.",
    attributes: [],
    example: `<table>\n  <tr>\n    <th>Имя</th>\n    <th>Оценка</th>\n  </tr>\n  <tr>\n    <td>Алексей</td>\n    <td>5</td>\n  </tr>\n</table>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/tr"
  },
  {
    tag: "<track>",
    category: "Медиа",
    description: "Текстовые треки для <video> и <audio>: субтитры, описания, главы.",
    attributes: ["src", "kind", "srclang", "label", "default"],
    example: `<video controls>\n  <source src="movie.mp4" type="video/mp4">\n  <track src="subtitles_ru.vtt" kind="subtitles" srclang="ru" label="Русский" default>\n  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">\n</video>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/track"
  },
  {
    tag: "<u>",
    category: "Текст и ссылки",
    description: "Подчёркнутый текст с нетекстовой аннотацией: орфографические ошибки, имена собственные.",
    attributes: [],
    example: `<p>В этом предложении есть <u>орфографическая ошибка</u>.</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/u"
  },
  {
    tag: "<ul>",
    category: "Списки",
    description: "Неупорядоченный (маркированный) список. Порядок элементов не важен.",
    attributes: [],
    example: `<ul>\n  <li>Хлеб</li>\n  <li>Молоко</li>\n  <li>Масло</li>\n</ul>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/ul"
  },
  {
    tag: "<var>",
    category: "Текст и ссылки",
    description: "Математическая переменная или программный идентификатор. Отображается курсивом.",
    attributes: [],
    example: `<p>Переменная <var>x</var> = <var>y</var> + 2</p>\n<p>Функция <var>f</var>(<var>x</var>) = x²</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/var"
  },
  {
    tag: "<video>",
    category: "Медиа",
    description: "Встраивает видеоконтент. Поддерживает MP4, WebM, OGG. Атрибут poster задаёт превью.",
    attributes: ["src", "controls", "autoplay", "loop", "muted", "poster", "preload", "width", "height", "playsinline"],
    example: `<video controls width="640" height="360" poster="preview.jpg">\n  <source src="video.mp4" type="video/mp4">\n  <source src="video.webm" type="video/webm">\n  <track src="subtitles.vtt" kind="subtitles" srclang="ru" label="Русский">\n  Ваш браузер не поддерживает видео.\n</video>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/video"
  },
  {
    tag: "<wbr>",
    category: "Текст и ссылки",
    description: "Подсказка браузеру о возможном месте переноса слова. Не вставляет дефис.",
    attributes: [],
    example: `<p>https://www.example.com/very<wbr>-long<wbr>-url<wbr>/path<wbr>/to<wbr>/page</p>`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/HTML/Element/wbr"
  }
];
