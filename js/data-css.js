const CSS_PROPERTIES = [
  {
    property: "align-content",
    category: "Flexbox / Grid",
    description: "Выравнивает строки flex-контейнера или дорожки grid по поперечной оси при наличии свободного пространства.",
    values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"],
    example: `.container {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: space-between;\n  height: 300px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/align-content"
  },
  {
    property: "align-items",
    category: "Flexbox / Grid",
    description: "Выравнивает flex-элементы по поперечной оси внутри строки контейнера.",
    values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    example: `.container {\n  display: flex;\n  align-items: center; /* вертикальное центрирование */\n  height: 200px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/align-items"
  },
  {
    property: "align-self",
    category: "Flexbox / Grid",
    description: "Переопределяет align-items для отдельного flex-элемента.",
    values: ["auto", "flex-start", "flex-end", "center", "baseline", "stretch"],
    example: `.item {\n  align-self: flex-end; /* прижать к низу */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/align-self"
  },
  {
    property: "animation",
    category: "Анимация",
    description: "Шорткат для всех свойств анимации: имя, длительность, функция, задержка, повторы, направление.",
    values: ["name duration timing-function delay iteration-count direction fill-mode"],
    example: `.element {\n  animation: fadeIn 0.5s ease-out;\n  animation: spin 2s linear infinite;\n  animation: bounce 1s ease-in-out 0.3s 3 alternate;\n}\n\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to   { opacity: 1; transform: translateY(0); }\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation"
  },
  {
    property: "animation-delay",
    category: "Анимация",
    description: "Задержка перед стартом анимации. Отрицательные значения запускают анимацию с середины.",
    values: ["<time>"],
    example: `.item:nth-child(1) { animation-delay: 0s; }\n.item:nth-child(2) { animation-delay: 0.1s; }\n.item:nth-child(3) { animation-delay: 0.2s; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation-delay"
  },
  {
    property: "animation-direction",
    category: "Анимация",
    description: "Направление воспроизведения анимации: вперёд, назад или попеременно.",
    values: ["normal", "reverse", "alternate", "alternate-reverse"],
    example: `.element {\n  animation-direction: alternate; /* туда-обратно */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation-direction"
  },
  {
    property: "animation-duration",
    category: "Анимация",
    description: "Продолжительность одного цикла анимации.",
    values: ["<time>"],
    example: `.slow { animation-duration: 3s; }\n.fast { animation-duration: 150ms; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation-duration"
  },
  {
    property: "animation-fill-mode",
    category: "Анимация",
    description: "Сохраняет стиль анимации до или после её выполнения.",
    values: ["none", "forwards", "backwards", "both"],
    example: `.element {\n  animation: fadeIn 0.5s ease forwards;\n  /* элемент остаётся в конечном состоянии */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation-fill-mode"
  },
  {
    property: "animation-iteration-count",
    category: "Анимация",
    description: "Количество повторений анимации. infinite — бесконечно.",
    values: ["<number>", "infinite"],
    example: `.spinner {\n  animation-iteration-count: infinite;\n}\n.blink {\n  animation-iteration-count: 3;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation-iteration-count"
  },
  {
    property: "animation-name",
    category: "Анимация",
    description: "Имя @keyframes, применяемого к элементу.",
    values: ["<custom-ident>", "none"],
    example: `@keyframes slideIn {\n  from { transform: translateX(-100%); }\n  to   { transform: translateX(0); }\n}\n.element {\n  animation-name: slideIn;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation-name"
  },
  {
    property: "animation-play-state",
    category: "Анимация",
    description: "Запускает или приостанавливает анимацию.",
    values: ["running", "paused"],
    example: `.element:hover {\n  animation-play-state: paused;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation-play-state"
  },
  {
    property: "animation-timing-function",
    category: "Анимация",
    description: "Функция скорости анимации: как значения меняются во времени.",
    values: ["ease", "linear", "ease-in", "ease-out", "ease-in-out", "cubic-bezier()", "steps()"],
    example: `.ease    { animation-timing-function: ease; }\n.linear  { animation-timing-function: linear; }\n.custom  { animation-timing-function: cubic-bezier(0.68,-0.55,0.27,1.55); }\n.stepped { animation-timing-function: steps(5, end); }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/animation-timing-function"
  },
  {
    property: "aspect-ratio",
    category: "Размеры",
    description: "Задаёт соотношение сторон элемента. Полезно для адаптивных медиа без явной высоты.",
    values: ["auto", "<ratio>"],
    example: `.video-wrapper {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n}\n.square {\n  aspect-ratio: 1;\n}\n.portrait {\n  aspect-ratio: 3 / 4;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/aspect-ratio"
  },
  {
    property: "backdrop-filter",
    category: "Фильтры",
    description: "Применяет графические эффекты к области за элементом. Создаёт эффект стекла (glassmorphism).",
    values: ["blur()", "brightness()", "contrast()", "grayscale()", "none"],
    example: `.glass {\n  background: rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(10px);\n}\n.dark-glass {\n  backdrop-filter: blur(8px) brightness(0.7);\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/backdrop-filter"
  },
  {
    property: "background",
    category: "Фон",
    description: "Шорткат для всех свойств фона: цвет, изображение, позиция, размер, повтор, origin, clip, attachment.",
    values: ["color", "image", "position", "size", "repeat", "attachment", "origin", "clip"],
    example: `.element {\n  background: #f0f0f0;\n  background: url('img.jpg') center / cover no-repeat;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  /* Несколько фонов */\n  background: url('pattern.png'), linear-gradient(#fff, #eee);\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background"
  },
  {
    property: "background-attachment",
    category: "Фон",
    description: "Определяет, прокручивается ли фон вместе со страницей.",
    values: ["scroll", "fixed", "local"],
    example: `.parallax {\n  background-image: url('bg.jpg');\n  background-attachment: fixed; /* эффект параллакса */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background-attachment"
  },
  {
    property: "background-blend-mode",
    category: "Фон",
    description: "Режим наложения фоновых слоёв друг на друга и на цвет фона.",
    values: ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion"],
    example: `.element {\n  background: url('photo.jpg'), #3498db;\n  background-blend-mode: multiply;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background-blend-mode"
  },
  {
    property: "background-clip",
    category: "Фон",
    description: "Ограничивает область отображения фона: до рамки, до отступов или только до текста.",
    values: ["border-box", "padding-box", "content-box", "text"],
    example: `.gradient-text {\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background-clip"
  },
  {
    property: "background-color",
    category: "Фон",
    description: "Цвет фона элемента. Отображается под фоновыми изображениями.",
    values: ["<color>", "transparent"],
    example: `.element {\n  background-color: #3498db;\n  background-color: rgb(52, 152, 219);\n  background-color: hsl(204, 70%, 53%);\n  background-color: rgba(0, 0, 0, 0.5);\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background-color"
  },
  {
    property: "background-image",
    category: "Фон",
    description: "Фоновое изображение или градиент. Можно задать несколько через запятую.",
    values: ["url()", "linear-gradient()", "radial-gradient()", "conic-gradient()", "none"],
    example: `.photo    { background-image: url('photo.jpg'); }\n.gradient { background-image: linear-gradient(to right, #f093fb, #f5576c); }\n.radial   { background-image: radial-gradient(circle, #667eea, #764ba2); }\n.pattern  { background-image: url('tile.png'), linear-gradient(#fff, #eee); }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background-image"
  },
  {
    property: "background-position",
    category: "Фон",
    description: "Позиция фонового изображения относительно элемента.",
    values: ["top", "right", "bottom", "left", "center", "<percentage>", "<length>"],
    example: `.element {\n  background-position: center center;\n  background-position: top right;\n  background-position: 50% 25%;\n  background-position: 20px 40px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background-position"
  },
  {
    property: "background-repeat",
    category: "Фон",
    description: "Управляет повтором фонового изображения по осям X и Y.",
    values: ["repeat", "no-repeat", "repeat-x", "repeat-y", "space", "round"],
    example: `.no-tile    { background-repeat: no-repeat; }\n.horizontal { background-repeat: repeat-x; }\n.vertical   { background-repeat: repeat-y; }\n.spaced     { background-repeat: space; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background-repeat"
  },
  {
    property: "background-size",
    category: "Фон",
    description: "Размер фонового изображения. cover и contain — самые частые значения.",
    values: ["cover", "contain", "auto", "<length>", "<percentage>"],
    example: `.cover   { background-size: cover; }   /* заполняет, обрезает */\n.contain { background-size: contain; } /* вписывает, не обрезает */\n.custom  { background-size: 200px 100px; }\n.percent { background-size: 50% auto; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/background-size"
  },
  {
    property: "border",
    category: "Рамки",
    description: "Шорткат для border-width, border-style и border-color. Задаёт рамку вокруг элемента.",
    values: ["<width> <style> <color>"],
    example: `.element {\n  border: 1px solid #ddd;\n  border: 2px dashed #3498db;\n  border: none;\n  border: 3px double #e74c3c;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/border"
  },
  {
    property: "border-radius",
    category: "Рамки",
    description: "Скругляет углы элемента. Можно задать для каждого угла отдельно. 50% — создаёт круг.",
    values: ["<length>", "<percentage>"],
    example: `.circle  { border-radius: 50%; }\n.rounded { border-radius: 8px; }\n.pill    { border-radius: 9999px; }\n.custom  { border-radius: 10px 20px 30px 40px; }\n/* сверху-лево / сверху-право / снизу-право / снизу-лево */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/border-radius"
  },
  {
    property: "bottom",
    category: "Позиционирование",
    description: "Смещение от нижнего края для позиционированных элементов (position: relative/absolute/fixed/sticky).",
    values: ["<length>", "<percentage>", "auto"],
    example: `.element {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/bottom"
  },
  {
    property: "box-shadow",
    category: "Эффекты",
    description: "Тень вокруг элемента. Параметры: offset-x offset-y blur spread color. inset — внутренняя тень.",
    values: ["offset-x offset-y blur spread color", "inset", "none"],
    example: `.card {\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n}\n.raised {\n  box-shadow: 0 10px 30px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1);\n}\n.inset {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);\n}\n.neon {\n  box-shadow: 0 0 10px #00f, 0 0 40px #00f;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow"
  },
  {
    property: "box-sizing",
    category: "Размеры",
    description: "Определяет, включаются ли padding и border в указанные width/height элемента.",
    values: ["content-box", "border-box"],
    example: `/* Рекомендуется для всех элементов */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n/* content-box (по умолчанию): width = только контент */\n/* border-box: width = контент + padding + border */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing"
  },
  {
    property: "clip-path",
    category: "Эффекты",
    description: "Обрезает элемент по заданной форме: кругу, многоугольнику, эллипсу или SVG-фигуре.",
    values: ["circle()", "ellipse()", "polygon()", "inset()", "path()"],
    example: `.circle  { clip-path: circle(50%); }\n.hexagon { clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }\n.arrow   { clip-path: polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%); }\n.inset   { clip-path: inset(10px 20px round 10px); }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/clip-path"
  },
  {
    property: "color",
    category: "Текст",
    description: "Цвет текста и SVG-элементов. Наследуется дочерними элементами.",
    values: ["<color>", "currentColor", "inherit"],
    example: `.element {\n  color: #333;\n  color: rgb(51, 51, 51);\n  color: hsl(0, 0%, 20%);\n  color: rgba(0, 0, 0, 0.8);\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/color"
  },
  {
    property: "columns",
    category: "Многоколоночность",
    description: "Шорткат для column-width и column-count. Создаёт газетную многоколоночную вёрстку.",
    values: ["<column-width> || <column-count>"],
    example: `.text {\n  columns: 3;           /* 3 колонки */\n  columns: 200px;       /* авто-колонки по 200px */\n  columns: 200px 3;     /* до 3 колонок, минимум 200px */\n  column-gap: 2rem;\n  column-rule: 1px solid #ddd;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/columns"
  },
  {
    property: "content",
    category: "Генерируемый контент",
    description: "Вставляет контент через псевдоэлементы ::before и ::after.",
    values: ["''", "'text'", "attr()", "counter()", "url()", "none", "open-quote", "close-quote"],
    example: `/* Иконка перед ссылками */\n.external::after {\n  content: ' ↗';\n}\n/* Счётчик */\n.step::before {\n  content: counter(step);\n  counter-increment: step;\n}\n/* Атрибут */\n[data-tooltip]::after {\n  content: attr(data-tooltip);\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/content"
  },
  {
    property: "counter-reset",
    category: "Генерируемый контент",
    description: "Инициализирует или сбрасывает именованный счётчик CSS.",
    values: ["<custom-ident> <integer>?", "none"],
    example: `ol {\n  counter-reset: item 0; /* сброс счётчика */\n}\nli::before {\n  counter-increment: item;\n  content: counter(item) '. ';\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/counter-reset"
  },
  {
    property: "cursor",
    category: "Пользовательский интерфейс",
    description: "Вид курсора мыши при наведении на элемент.",
    values: ["auto", "default", "pointer", "text", "move", "grab", "grabbing", "crosshair", "not-allowed", "wait", "help", "zoom-in", "zoom-out", "none", "url()"],
    example: `button { cursor: pointer; }\n.drag  { cursor: grab; }\n.drag:active { cursor: grabbing; }\n.map   { cursor: crosshair; }\n.error { cursor: not-allowed; }\n.custom { cursor: url('cursor.png'), auto; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/cursor"
  },
  {
    property: "display",
    category: "Отображение",
    description: "Тип отображения элемента. Самое важное CSS-свойство для управления раскладкой.",
    values: ["block", "inline", "inline-block", "flex", "inline-flex", "grid", "inline-grid", "none", "contents", "table", "list-item"],
    example: `.block        { display: block; }\n.inline       { display: inline; }\n.inline-block { display: inline-block; }\n.flex         { display: flex; }\n.grid         { display: grid; }\n.hidden       { display: none; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/display"
  },
  {
    property: "filter",
    category: "Фильтры",
    description: "Применяет графические эффекты к элементу: размытие, яркость, контраст, сепию и другие.",
    values: ["blur()", "brightness()", "contrast()", "grayscale()", "hue-rotate()", "invert()", "opacity()", "saturate()", "sepia()", "drop-shadow()", "none"],
    example: `.blur     { filter: blur(4px); }\n.dark     { filter: brightness(0.5); }\n.contrast { filter: contrast(200%); }\n.gray     { filter: grayscale(100%); }\n.sepia    { filter: sepia(80%); }\n.combined { filter: contrast(120%) brightness(110%); }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/filter"
  },
  {
    property: "flex",
    category: "Flexbox / Grid",
    description: "Шорткат для flex-grow, flex-shrink и flex-basis. Управляет увеличением/уменьшением flex-элемента.",
    values: ["none", "auto", "<flex-grow> <flex-shrink> <flex-basis>"],
    example: `.item {\n  flex: 1;         /* flex: 1 1 0% */\n  flex: auto;      /* flex: 1 1 auto */\n  flex: none;      /* flex: 0 0 auto */\n  flex: 2 1 200px; /* grow shrink basis */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/flex"
  },
  {
    property: "flex-direction",
    category: "Flexbox / Grid",
    description: "Направление главной оси flex-контейнера: горизонтально или вертикально.",
    values: ["row", "row-reverse", "column", "column-reverse"],
    example: `.row    { flex-direction: row; }            /* → */\n.row-r  { flex-direction: row-reverse; }    /* ← */\n.col    { flex-direction: column; }         /* ↓ */\n.col-r  { flex-direction: column-reverse; } /* ↑ */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/flex-direction"
  },
  {
    property: "flex-wrap",
    category: "Flexbox / Grid",
    description: "Разрешает или запрещает перенос flex-элементов на новую строку.",
    values: ["nowrap", "wrap", "wrap-reverse"],
    example: `.container {\n  display: flex;\n  flex-wrap: wrap; /* перенос на новую строку */\n}\n/* Сочетание с flex-direction */\n.grid-like {\n  flex-flow: row wrap; /* сокращение */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/flex-wrap"
  },
  {
    property: "float",
    category: "Позиционирование",
    description: "Обтекание: элемент выходит из потока и прижимается к краю контейнера.",
    values: ["left", "right", "none", "inline-start", "inline-end"],
    example: `.image {\n  float: left;\n  margin: 0 1rem 1rem 0;\n}\n/* Очистка float */\n.clearfix::after {\n  content: '';\n  display: table;\n  clear: both;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/float"
  },
  {
    property: "font",
    category: "Текст",
    description: "Шорткат для свойств шрифта: style, variant, weight, stretch, size/line-height, family.",
    values: ["<font-style> <font-weight> <font-size>/<line-height> <font-family>"],
    example: `.element {\n  font: italic bold 16px/1.5 'Georgia', serif;\n  font: 700 1rem/1.6 'Inter', sans-serif;\n  font: small-caps 14px/2 monospace;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/font"
  },
  {
    property: "font-family",
    category: "Текст",
    description: "Семейство шрифтов. Список через запятую: браузер использует первый доступный.",
    values: ["<family-name>", "<generic-family>"],
    example: `body {\n  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;\n}\ncode {\n  font-family: 'JetBrains Mono', 'Fira Code', monospace;\n}\n.serif {\n  font-family: 'Georgia', 'Times New Roman', serif;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/font-family"
  },
  {
    property: "font-size",
    category: "Текст",
    description: "Размер шрифта. rem и em предпочтительнее px для масштабируемости.",
    values: ["<length>", "<percentage>", "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large", "smaller", "larger"],
    example: `.px   { font-size: 16px; }      /* фиксированный */\n.rem  { font-size: 1rem; }      /* от root (16px) */\n.em   { font-size: 1.25em; }    /* от родителя */\n.vw   { font-size: 4vw; }       /* от ширины экрана */\n.clamp { font-size: clamp(14px, 2.5vw, 24px); }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/font-size"
  },
  {
    property: "font-style",
    category: "Текст",
    description: "Начертание шрифта: обычное, курсивное или наклонное.",
    values: ["normal", "italic", "oblique"],
    example: `.normal  { font-style: normal; }\n.italic  { font-style: italic; }\n.oblique { font-style: oblique 15deg; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/font-style"
  },
  {
    property: "font-weight",
    category: "Текст",
    description: "Толщина (жирность) шрифта. Числовые значения: 100-900. 400 — обычный, 700 — жирный.",
    values: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    example: `.thin     { font-weight: 100; }\n.light    { font-weight: 300; }\n.regular  { font-weight: 400; }\n.medium   { font-weight: 500; }\n.semibold { font-weight: 600; }\n.bold     { font-weight: 700; }\n.black    { font-weight: 900; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/font-weight"
  },
  {
    property: "gap",
    category: "Flexbox / Grid",
    description: "Промежутки между строками и столбцами в flex и grid контейнерах.",
    values: ["<length>", "<percentage>"],
    example: `.flex-container {\n  display: flex;\n  gap: 1rem;         /* одинаковый по всем осям */\n}\n.grid-container {\n  display: grid;\n  gap: 20px 10px;    /* row-gap column-gap */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/gap"
  },
  {
    property: "grid",
    category: "Flexbox / Grid",
    description: "Шорткат для всех grid-свойств контейнера: template-rows, template-columns, areas.",
    values: ["<grid-template>", "auto-flow"],
    example: `.container {\n  display: grid;\n  grid: 'header' auto\n        'main aside' 1fr\n        'footer' auto\n        / 1fr 300px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/grid"
  },
  {
    property: "grid-area",
    category: "Flexbox / Grid",
    description: "Имя области или шорткат для grid-row/column-start/end. Используется с grid-template-areas.",
    values: ["<custom-ident>", "row-start / column-start / row-end / column-end"],
    example: `.header { grid-area: header; }\n.sidebar { grid-area: sidebar; }\n.main { grid-area: main; }\n\n/* Или явное размещение */\n.item {\n  grid-area: 1 / 1 / 3 / 4;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/grid-area"
  },
  {
    property: "grid-column",
    category: "Flexbox / Grid",
    description: "Шорткат для grid-column-start и grid-column-end. Определяет, какие столбцы занимает элемент.",
    values: ["span <number>", "<line> / <line>"],
    example: `.full-width { grid-column: 1 / -1; }    /* на всю ширину */\n.span-2     { grid-column: span 2; }      /* на 2 столбца */\n.explicit   { grid-column: 2 / 4; }       /* со 2 по 4 */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/grid-column"
  },
  {
    property: "grid-row",
    category: "Flexbox / Grid",
    description: "Шорткат для grid-row-start и grid-row-end. Определяет, какие строки занимает элемент.",
    values: ["span <number>", "<line> / <line>"],
    example: `.span-3  { grid-row: span 3; }\n.from-to { grid-row: 2 / 5; }\n.full    { grid-row: 1 / -1; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/grid-row"
  },
  {
    property: "grid-template-areas",
    category: "Flexbox / Grid",
    description: "Определяет именованные области сетки для размещения элементов.",
    values: ["<string>+", "none"],
    example: `.container {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'sidebar main'\n    'footer footer';\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-areas"
  },
  {
    property: "grid-template-columns",
    category: "Flexbox / Grid",
    description: "Определяет количество и размер столбцов сетки. Функция repeat() и fr упрощают запись.",
    values: ["<length>", "<percentage>", "fr", "auto", "minmax()", "repeat()", "fit-content()"],
    example: `.grid {\n  /* 3 равных столбца */\n  grid-template-columns: repeat(3, 1fr);\n  /* Смешанные */\n  grid-template-columns: 200px 1fr 2fr;\n  /* Авто-заполнение */\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-columns"
  },
  {
    property: "grid-template-rows",
    category: "Flexbox / Grid",
    description: "Определяет количество и высоту строк сетки.",
    values: ["<length>", "<percentage>", "fr", "auto", "minmax()", "repeat()"],
    example: `.grid {\n  grid-template-rows: auto 1fr auto; /* header main footer */\n  grid-template-rows: repeat(3, 100px);\n  grid-template-rows: 60px minmax(100px, 1fr) 60px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/grid-template-rows"
  },
  {
    property: "height",
    category: "Размеры",
    description: "Высота элемента. Не применяется к строчным элементам без display: inline-block/flex/grid.",
    values: ["<length>", "<percentage>", "auto", "min-content", "max-content", "fit-content"],
    example: `.fixed   { height: 200px; }\n.percent { height: 100%; }     /* от родителя */\n.viewport{ height: 100vh; }    /* высота экрана */\n.min-max { height: clamp(100px, 50%, 400px); }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/height"
  },
  {
    property: "inset",
    category: "Позиционирование",
    description: "Шорткат для top, right, bottom и left. Удобен для абсолютного позиционирования.",
    values: ["<length>", "<percentage>", "auto"],
    example: `.overlay {\n  position: absolute;\n  inset: 0; /* top:0 right:0 bottom:0 left:0 */\n}\n.modal {\n  position: fixed;\n  inset: 20px 10px; /* top/bottom:20px right/left:10px */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/inset"
  },
  {
    property: "justify-content",
    category: "Flexbox / Grid",
    description: "Выравнивание flex/grid-элементов по главной оси (горизонтально в row).",
    values: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "start", "end"],
    example: `.center   { justify-content: center; }\n.between  { justify-content: space-between; }\n.around   { justify-content: space-around; }\n.evenly   { justify-content: space-evenly; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/justify-content"
  },
  {
    property: "justify-items",
    category: "Flexbox / Grid",
    description: "Выравнивание grid-элементов по строке (инлайн-оси) внутри их ячеек.",
    values: ["auto", "normal", "stretch", "center", "start", "end", "flex-start", "flex-end"],
    example: `.grid {\n  display: grid;\n  justify-items: center; /* центрировать все элементы */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/justify-items"
  },
  {
    property: "justify-self",
    category: "Flexbox / Grid",
    description: "Выравнивание отдельного grid-элемента по строке. Переопределяет justify-items.",
    values: ["auto", "normal", "stretch", "center", "start", "end"],
    example: `.item {\n  justify-self: end; /* прижать к правому краю ячейки */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/justify-self"
  },
  {
    property: "left",
    category: "Позиционирование",
    description: "Отступ от левого края для позиционированных элементов.",
    values: ["<length>", "<percentage>", "auto"],
    example: `.tooltip {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%); /* горизонтальное центрирование */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/left"
  },
  {
    property: "letter-spacing",
    category: "Текст",
    description: "Межбуквенный интервал (трекинг). Положительный — увеличивает, отрицательный — уменьшает.",
    values: ["normal", "<length>"],
    example: `.tight  { letter-spacing: -0.05em; }\n.normal { letter-spacing: 0; }\n.wide   { letter-spacing: 0.1em; }\n.caps   { letter-spacing: 0.2em; text-transform: uppercase; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/letter-spacing"
  },
  {
    property: "line-height",
    category: "Текст",
    description: "Межстрочный интервал. Безразмерное значение (1.5) наследуется лучше, чем px.",
    values: ["normal", "<number>", "<length>", "<percentage>"],
    example: `.compact { line-height: 1.2; }\n.normal  { line-height: 1.5; }\n.relaxed { line-height: 2; }\n.fixed   { line-height: 24px; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/line-height"
  },
  {
    property: "list-style",
    category: "Списки",
    description: "Шорткат для стиля, позиции и изображения маркеров списка.",
    values: ["disc", "circle", "square", "decimal", "none", "url()", "inside", "outside"],
    example: `ul {\n  list-style: none; /* убрать маркеры */\n  list-style: disc outside;\n  list-style: url('bullet.png');\n}\nol {\n  list-style: decimal inside;\n  list-style: lower-alpha;\n  list-style: upper-roman;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/list-style"
  },
  {
    property: "margin",
    category: "Отступы",
    description: "Внешние отступы вокруг элемента. auto горизонтально центрирует блочный элемент.",
    values: ["<length>", "<percentage>", "auto"],
    example: `.center { margin: 0 auto; }         /* горизонтальное центрирование */\n.all    { margin: 20px; }             /* все стороны */\n.vertical-horizontal { margin: 10px 20px; }  /* верт. гориз. */\n.each   { margin: 10px 20px 30px 40px; }     /* top right bottom left */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/margin"
  },
  {
    property: "max-height",
    category: "Размеры",
    description: "Максимальная высота элемента. Переопределяет height. Полезно для раскрывающихся панелей.",
    values: ["<length>", "<percentage>", "none", "min-content", "max-content"],
    example: `.panel {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.panel.open {\n  max-height: 500px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/max-height"
  },
  {
    property: "max-width",
    category: "Размеры",
    description: "Максимальная ширина. Используется для ограничения ширины контента на широких экранах.",
    values: ["<length>", "<percentage>", "none", "min-content", "max-content", "fit-content"],
    example: `.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.text {\n  max-width: 65ch; /* оптимальная длина строки */\n}\n.image {\n  max-width: 100%; /* адаптивность */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/max-width"
  },
  {
    property: "min-height",
    category: "Размеры",
    description: "Минимальная высота. Используется для секций, которые должны занимать не меньше заданной высоты.",
    values: ["<length>", "<percentage>", "auto", "min-content", "max-content"],
    example: `.hero {\n  min-height: 100vh; /* не меньше экрана */\n}\n.card {\n  min-height: 200px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/min-height"
  },
  {
    property: "min-width",
    category: "Размеры",
    description: "Минимальная ширина элемента. Предотвращает сжатие ниже заданного значения.",
    values: ["<length>", "<percentage>", "auto", "min-content", "max-content"],
    example: `button {\n  min-width: 120px; /* кнопка не уже 120px */\n}\n.column {\n  min-width: 200px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/min-width"
  },
  {
    property: "mix-blend-mode",
    category: "Эффекты",
    description: "Режим наложения элемента на элементы под ним. Аналог blend mode в Photoshop.",
    values: ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
    example: `.text-overlay {\n  mix-blend-mode: multiply;\n}\n.invert {\n  mix-blend-mode: difference;\n  color: white;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/mix-blend-mode"
  },
  {
    property: "object-fit",
    category: "Медиа",
    description: "Как изображение или видео заполняет свой контейнер с сохранением пропорций.",
    values: ["fill", "contain", "cover", "none", "scale-down"],
    example: `img {\n  width: 300px;\n  height: 200px;\n  object-fit: cover;    /* обрезает, заполняет */\n  object-fit: contain;  /* вписывает, не обрезает */\n  object-fit: fill;     /* растягивает (искажение) */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/object-fit"
  },
  {
    property: "object-position",
    category: "Медиа",
    description: "Позиция изображения/видео внутри контейнера при использовании object-fit.",
    values: ["<position>"],
    example: `img {\n  object-fit: cover;\n  object-position: center top;    /* лицо сверху */\n  object-position: 25% 75%;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/object-position"
  },
  {
    property: "opacity",
    category: "Эффекты",
    description: "Прозрачность элемента: 0 — полностью прозрачный, 1 — непрозрачный.",
    values: ["<number 0-1>"],
    example: `.transparent { opacity: 0; }\n.semi        { opacity: 0.5; }\n.visible     { opacity: 1; }\n\n.hover:hover {\n  opacity: 0.8;\n  transition: opacity 0.2s;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/opacity"
  },
  {
    property: "order",
    category: "Flexbox / Grid",
    description: "Порядок flex/grid-элемента независимо от его места в HTML. Число меньше = раньше.",
    values: ["<integer>"],
    example: `.first  { order: -1; } /* переместить в начало */\n.second { order: 0; }  /* по умолчанию */\n.last   { order: 1; }  /* в конец */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/order"
  },
  {
    property: "outline",
    category: "Рамки",
    description: "Внешний контур вокруг элемента. Не занимает место в потоке. Важен для доступности (focus).",
    values: ["<width> <style> <color>", "none"],
    example: `/* Стиль фокуса для доступности */\n:focus-visible {\n  outline: 2px solid #3498db;\n  outline-offset: 4px;\n}\n\n/* Удалять outline без замены — плохая практика */\nbutton:focus { outline: none; } /* ❌ плохо */\nbutton:focus-visible { outline: 2px solid blue; } /* ✅ хорошо */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/outline"
  },
  {
    property: "overflow",
    category: "Отображение",
    description: "Поведение при переполнении контейнера: скрыть, показать или добавить скроллбар.",
    values: ["visible", "hidden", "scroll", "auto", "clip"],
    example: `.truncate {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.scroll-y {\n  overflow-y: auto;\n  max-height: 300px;\n}\n.clip {\n  overflow: clip; /* без прокрутки */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/overflow"
  },
  {
    property: "padding",
    category: "Отступы",
    description: "Внутренние отступы (от содержимого до границы). Увеличивает кликабельную область.",
    values: ["<length>", "<percentage>"],
    example: `.all    { padding: 20px; }\n.v-h    { padding: 10px 20px; }          /* верт. гориз. */\n.each   { padding: 10px 20px 15px 5px; } /* top right bottom left */\n.top    { padding-top: 40px; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/padding"
  },
  {
    property: "place-content",
    category: "Flexbox / Grid",
    description: "Шорткат для align-content и justify-content. Упрощает центрирование в grid.",
    values: ["<align-content> <justify-content>"],
    example: `.centered {\n  display: grid;\n  place-content: center; /* и по осям X и Y */\n}\n.spread {\n  place-content: space-between center;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/place-content"
  },
  {
    property: "place-items",
    category: "Flexbox / Grid",
    description: "Шорткат для align-items и justify-items. Быстрое центрирование содержимого grid-ячеек.",
    values: ["<align-items> <justify-items>"],
    example: `.grid {\n  display: grid;\n  place-items: center; /* центрировать всё */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/place-items"
  },
  {
    property: "pointer-events",
    category: "Пользовательский интерфейс",
    description: "Управляет реакцией элемента на события мыши. none делает элемент «прозрачным» для кликов.",
    values: ["auto", "none", "all", "fill", "stroke"],
    example: `.overlay {\n  pointer-events: none; /* клики проходят сквозь */\n}\n.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n  cursor: not-allowed;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/pointer-events"
  },
  {
    property: "position",
    category: "Позиционирование",
    description: "Схема позиционирования элемента. Меняет поведение свойств top/right/bottom/left.",
    values: ["static", "relative", "absolute", "fixed", "sticky"],
    example: `.static   { position: static; }   /* в потоке (по умолч.) */\n.relative { position: relative; } /* сдвиг от нормы, не выходит из потока */\n.absolute { position: absolute; } /* от ближайшего не-static родителя */\n.fixed    { position: fixed; }    /* фиксированный на экране */\n.sticky   { position: sticky; top: 0; } /* прилипает при прокрутке */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/position"
  },
  {
    property: "resize",
    category: "Пользовательский интерфейс",
    description: "Позволяет пользователю изменять размер элемента. Требует overflow не visible.",
    values: ["none", "both", "horizontal", "vertical"],
    example: `textarea {\n  resize: vertical;   /* только по высоте */\n  resize: none;       /* запретить ресайз */\n}\n.resizable {\n  resize: both;\n  overflow: auto;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/resize"
  },
  {
    property: "right",
    category: "Позиционирование",
    description: "Отступ от правого края для позиционированных элементов.",
    values: ["<length>", "<percentage>", "auto"],
    example: `.fixed-button {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/right"
  },
  {
    property: "scroll-behavior",
    category: "Прокрутка",
    description: "Плавная прокрутка страницы при переходе по якорным ссылкам.",
    values: ["auto", "smooth"],
    example: `html {\n  scroll-behavior: smooth;\n}\n\n/* Ссылка на якорь */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/scroll-behavior"
  },
  {
    property: "scroll-snap-type",
    category: "Прокрутка",
    description: "Включает CSS Scroll Snap для «защёлкивания» прокрутки на элементах-детях.",
    values: ["none", "x mandatory", "y mandatory", "both mandatory", "x proximity", "y proximity"],
    example: `.carousel {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n}\n.slide {\n  flex: 0 0 100%;\n  scroll-snap-align: start;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/scroll-snap-type"
  },
  {
    property: "text-align",
    category: "Текст",
    description: "Горизонтальное выравнивание текста и строчных элементов.",
    values: ["left", "right", "center", "justify", "start", "end"],
    example: `.left    { text-align: left; }\n.center  { text-align: center; }\n.right   { text-align: right; }\n.justify { text-align: justify; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/text-align"
  },
  {
    property: "text-decoration",
    category: "Текст",
    description: "Декоративные линии у текста: подчёркивание, зачёркивание, надчёркивание.",
    values: ["none", "underline", "overline", "line-through", "wavy", "dashed", "dotted"],
    example: `a { text-decoration: none; }\n.underline  { text-decoration: underline; }\n.strike     { text-decoration: line-through; }\n.wavy-error { text-decoration: underline wavy red; }\n.fancy      { text-decoration: underline dotted #3498db; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/text-decoration"
  },
  {
    property: "text-overflow",
    category: "Текст",
    description: "Как отображать переполненный текст, не помещающийся в контейнер.",
    values: ["clip", "ellipsis"],
    example: `.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; /* показать «...» */\n  max-width: 200px;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/text-overflow"
  },
  {
    property: "text-shadow",
    category: "Текст",
    description: "Тень текста. Параметры: offset-x offset-y blur color. Можно задать несколько через запятую.",
    values: ["offset-x offset-y blur color"],
    example: `.subtle   { text-shadow: 0 1px 2px rgba(0,0,0,0.3); }\n.glow     { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #f0f; }\n.multiple { text-shadow: 2px 2px 0 #f00, -2px -2px 0 #00f; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/text-shadow"
  },
  {
    property: "text-transform",
    category: "Текст",
    description: "Изменяет регистр текста без изменения HTML.",
    values: ["none", "uppercase", "lowercase", "capitalize", "full-width"],
    example: `.upper   { text-transform: uppercase; }   /* ВСЁ ЗАГЛАВНЫМИ */\n.lower   { text-transform: lowercase; }   /* всё строчными */\n.capital { text-transform: capitalize; }  /* Первая Буква */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/text-transform"
  },
  {
    property: "top",
    category: "Позиционирование",
    description: "Отступ от верхнего края для позиционированных элементов.",
    values: ["<length>", "<percentage>", "auto"],
    example: `.sticky-header {\n  position: sticky;\n  top: 0; /* прилипает к верху при прокрутке */\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/top"
  },
  {
    property: "transform",
    category: "Трансформации",
    description: "Применяет 2D/3D трансформации: поворот, масштаб, сдвиг, наклон.",
    values: ["translate()", "translateX()", "translateY()", "scale()", "rotate()", "skew()", "matrix()", "perspective()", "none"],
    example: `.move   { transform: translateX(50px); }\n.center { transform: translate(-50%, -50%); }\n.scale  { transform: scale(1.1); }\n.rotate { transform: rotate(45deg); }\n.combo  { transform: translate(20px) scale(1.2) rotate(10deg); }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/transform"
  },
  {
    property: "transform-origin",
    category: "Трансформации",
    description: "Точка, вокруг которой применяется трансформация. По умолчанию — центр элемента.",
    values: ["center", "top left", "<percentage>", "<length>"],
    example: `.top-left  { transform-origin: top left; }\n.bottom    { transform-origin: bottom center; }\n.custom    { transform-origin: 20% 80%; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/transform-origin"
  },
  {
    property: "transition",
    category: "Переходы",
    description: "Плавный переход между CSS-состояниями. Параметры: свойство длительность функция задержка.",
    values: ["property duration timing-function delay", "all", "none"],
    example: `.button {\n  background: blue;\n  transition: background 0.3s ease;\n}\n.button:hover {\n  background: darkblue;\n}\n\n/* Несколько свойств */\n.card {\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    opacity 0.2s;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/transition"
  },
  {
    property: "transition-duration",
    category: "Переходы",
    description: "Продолжительность анимации перехода.",
    values: ["<time>"],
    example: `.fast   { transition-duration: 100ms; }\n.normal { transition-duration: 300ms; }\n.slow   { transition-duration: 1s; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/transition-duration"
  },
  {
    property: "transition-timing-function",
    category: "Переходы",
    description: "Функция скорости перехода.",
    values: ["ease", "linear", "ease-in", "ease-out", "ease-in-out", "cubic-bezier()", "steps()"],
    example: `.ease      { transition-timing-function: ease; }\n.linear    { transition-timing-function: linear; }\n.spring    { transition-timing-function: cubic-bezier(0.68,-0.6,0.32,1.6); }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/transition-timing-function"
  },
  {
    property: "user-select",
    category: "Пользовательский интерфейс",
    description: "Управляет выделением текста пользователем.",
    values: ["auto", "none", "text", "all", "contain"],
    example: `.no-select { user-select: none; }   /* нельзя выделить */\n.select-all { user-select: all; }  /* клик выделяет всё */\ncode { user-select: text; }         /* обычное выделение */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/user-select"
  },
  {
    property: "visibility",
    category: "Отображение",
    description: "Скрывает элемент, сохраняя его место в потоке. Отличается от display:none.",
    values: ["visible", "hidden", "collapse"],
    example: `.hidden { visibility: hidden; } /* место сохраняется */\n/* Сравните: */\n.gone   { display: none; }      /* место пропадает */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/visibility"
  },
  {
    property: "white-space",
    category: "Текст",
    description: "Управляет обработкой пробелов, переносов строк и переносом слов.",
    values: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "break-spaces"],
    example: `.nowrap   { white-space: nowrap; }    /* нет переноса строк */\n.preserve { white-space: pre; }       /* как в <pre> */\n.pre-wrap { white-space: pre-wrap; }  /* pre + перенос */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/white-space"
  },
  {
    property: "width",
    category: "Размеры",
    description: "Ширина элемента. Применяется к блочным и заменяемым строчным элементам.",
    values: ["<length>", "<percentage>", "auto", "min-content", "max-content", "fit-content"],
    example: `.full    { width: 100%; }\n.fixed   { width: 320px; }\n.half    { width: 50%; }\n.content { width: fit-content; }\n.min     { width: min-content; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/width"
  },
  {
    property: "will-change",
    category: "Оптимизация",
    description: "Подсказывает браузеру о предстоящих изменениях для оптимизации рендеринга.",
    values: ["auto", "transform", "opacity", "scroll-position", "contents"],
    example: `.animated {\n  will-change: transform, opacity;\n}\n/* Убирать после анимации для экономии памяти */\n.done {\n  will-change: auto;\n}`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/will-change"
  },
  {
    property: "word-break",
    category: "Текст",
    description: "Управляет переносом слов при переполнении контейнера.",
    values: ["normal", "break-all", "keep-all", "break-word"],
    example: `.url     { word-break: break-all; }   /* рвёт в любом месте */\n.cjk     { word-break: keep-all; }    /* для иероглифов */\n.normal  { word-break: normal; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/word-break"
  },
  {
    property: "word-spacing",
    category: "Текст",
    description: "Дополнительный интервал между словами.",
    values: ["normal", "<length>"],
    example: `.tight  { word-spacing: -2px; }\n.normal { word-spacing: 0; }\n.spaced { word-spacing: 4px; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/word-spacing"
  },
  {
    property: "writing-mode",
    category: "Текст",
    description: "Направление записи текста: горизонтальное или вертикальное (для японского, китайского).",
    values: ["horizontal-tb", "vertical-rl", "vertical-lr"],
    example: `.horizontal { writing-mode: horizontal-tb; } /* по умолчанию */\n.vertical-r { writing-mode: vertical-rl; }   /* справа налево */\n.vertical-l { writing-mode: vertical-lr; }   /* слева направо */`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/writing-mode"
  },
  {
    property: "z-index",
    category: "Позиционирование",
    description: "Порядок наложения позиционированных элементов по оси Z. Большее значение — поверх.",
    values: ["auto", "<integer>"],
    example: `.back    { z-index: -1; }\n.default { z-index: 0; }\n.above   { z-index: 1; }\n.modal   { z-index: 1000; }\n.tooltip { z-index: 9999; }`,
    mdn: "https://developer.mozilla.org/ru/docs/Web/CSS/z-index"
  }
];
