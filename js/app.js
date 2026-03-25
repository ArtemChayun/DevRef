// ─── State ────────────────────────────────────────────────────────────────────
let activeTab = 'html';
let searchQuery = '';
let selectedCategory = 'all';
let activeItem = null;

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const tabBtns       = document.querySelectorAll('.tab-btn');
const searchInput   = document.getElementById('searchInput');
const clearBtn      = document.getElementById('clearBtn');
const categoryBar   = document.getElementById('categoryBar');
const itemsGrid     = document.getElementById('itemsGrid');
const resultCount   = document.getElementById('resultCount');
const modal         = document.getElementById('modal');
const modalOverlay  = document.getElementById('modalOverlay');
const modalClose    = document.getElementById('modalClose');



//my function
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
// ─── Categories ───────────────────────────────────────────────────────────────
function getCategories() {
  const data = activeTab === 'html' ? HTML_TAGS : CSS_PROPERTIES;
  const cats = [...new Set(data.map(d => d.category))].sort();
  return cats;
}

// ─── Render category pills ────────────────────────────────────────────────────
function renderCategories() {
  const cats = getCategories();
  categoryBar.innerHTML = `
    <button class="cat-pill ${selectedCategory === 'all' ? 'active' : ''}" data-cat="all">
      Все
    </button>
    ${cats.map(c => `
      <button class="cat-pill ${selectedCategory === c ? 'active' : ''}" data-cat="${c}">
        ${c}
      </button>
    `).join('')}
  `;
  categoryBar.querySelectorAll('.cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.dataset.cat;
      renderCategories();
      renderItems();
    });
  });
}

// ─── Filter data ──────────────────────────────────────────────────────────────
function getFilteredData() {
  const data = activeTab === 'html' ? HTML_TAGS : CSS_PROPERTIES;
  const q = searchQuery.toLowerCase().trim();
  return data.filter(item => {
    const name = activeTab === 'html' ? item.tag : item.property;
    const matchSearch = !q
      || name.toLowerCase().includes(q)
    //  || item.description.toLowerCase().includes(q)
    //  || item.category.toLowerCase().includes(q);
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchSearch && matchCat;
  });
}

// ─── Highlight search query ────────────────────────────────────────────────────
function highlight(text, q) {
  if (!q) return text;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark>$1</mark>');
}

// ─── Render items grid ────────────────────────────────────────────────────────
function renderItems() {
  const filtered = getFilteredData();
  resultCount.textContent = `${filtered.length} ${plural(filtered.length, ['результат', 'результата', 'результатов'])}`;

  if (filtered.length === 0) {
    itemsGrid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <p>Ничего не найдено</p>
        <small>Попробуйте другой запрос</small>
      </div>
    `;
    return;
  }

  const q = searchQuery.toLowerCase().trim();
  itemsGrid.innerHTML = filtered.map((item, i) => {
    const name = activeTab === 'html' ? item.tag : item.property;
    const catColor = getCatColor(item.category);
    return `
      <button class="item-card" data-index="${i}" style="animation-delay:${Math.min(i * 0.02, 0.4)}s">
        <div class="item-card-header">
          <code class="item-name">${highlight(escapeHtml(name), q)}</code>
          <span class="item-cat" style="--cat-color:${catColor}">${item.category}</span>
        </div>
        <p class="item-desc">${highlight(escapeHtml(item.description).substring(0, 90), q)}${item.description.length > 90 ? '…' : ''}</p>
      </button>
    `;
  }).join('');

  itemsGrid.querySelectorAll('.item-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.index);
      openModal(getFilteredData()[idx]);
    });
  });
}

// ─── Category color map ───────────────────────────────────────────────────────
const COLOR_MAP = {
  'Документ': '#6366f1',
  'Метаданные': '#8b5cf6',
  'Семантика': '#06b6d4',
  'Структура': '#0891b2',
  'Текст и ссылки': '#0d9488',
  'Заголовки': '#059669',
  'Списки': '#16a34a',
  'Таблицы': '#ca8a04',
  'Формы': '#ea580c',
  'Медиа': '#dc2626',
  'Встраивание': '#e11d48',
  'Интерактивность': '#7c3aed',
  'Скрипты': '#4f46e5',
  'Flexbox / Grid': '#0ea5e9',
  'Анимация': '#a855f7',
  'Трансформации': '#ec4899',
  'Переходы': '#f43f5e',
  'Фон': '#f97316',
  'Рамки': '#eab308',
  'Отступы': '#84cc16',
  'Размеры': '#22c55e',
  'Позиционирование': '#14b8a6',
  'Отображение': '#6366f1',
  'Текст': '#8b5cf6',
  'Эффекты': '#d946ef',
  'Фильтры': '#a21caf',
  'Многоколоночность': '#0284c7',
  'Генерируемый контент': '#0f766e',
  'Пользовательский интерфейс': '#b45309',
  'Прокрутка': '#1d4ed8',
  'Списки': '#15803d',
  'Медиа': '#b91c1c',
  'Оптимизация': '#374151',
};

function getCatColor(cat) {
  return COLOR_MAP[cat] || '#6b7280';
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function openModal(item) {
  activeItem = item;
  const isHtml = activeTab === 'html';
  const name = isHtml ? item.tag : item.property;
  const catColor = getCatColor(item.category);

  document.getElementById('modalTitle').textContent = name;
  document.getElementById('modalCategory').textContent = item.category;
  document.getElementById('modalCategory').style.setProperty('--cat-color', catColor);
  document.getElementById('modalDescription').textContent = item.description;

  // Attributes or Values
  const attrsSection = document.getElementById('modalAttrsSection');
  const attrsLabel = document.getElementById('modalAttrsLabel');
  const attrsList = document.getElementById('modalAttrsList');
  const items = isHtml ? item.attributes : item.values;

  if (items && items.length > 0) {
    attrsSection.style.display = '';
    attrsLabel.textContent = isHtml ? 'Атрибуты' : 'Значения';
    attrsList.innerHTML = items.map(a => `<code class="attr-tag">${a}</code>`).join('');
  } else {
    attrsSection.style.display = 'none';
  }

  // Code example
  const codeEl = document.getElementById('modalCode');
  codeEl.textContent = item.example;

  // MDN Link
  const mdnLink = document.getElementById('modalMdn');
  mdnLink.href = item.mdn;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Scroll code to top
  document.querySelector('.code-block').scrollTop = 0;
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  activeItem = null;
}

// Copy code button
document.getElementById('copyBtn').addEventListener('click', async () => {
  if (!activeItem) return;
  try {
    await navigator.clipboard.writeText(activeItem.example);
    const btn = document.getElementById('copyBtn');
    btn.innerHTML = '<i class="fas fa-check"></i>';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-copy"></i>';
      btn.classList.remove('copied');
    }, 2000);
  } catch {
    // fallback
    const ta = document.createElement('textarea');
    ta.value = activeItem.example;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
  }
});

// ─── Events ───────────────────────────────────────────────────────────────────
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeTab = btn.dataset.tab;
    selectedCategory = 'all';
    searchQuery = '';
    searchInput.value = '';
    clearBtn.style.opacity = '0';
    clearBtn.style.pointerEvents = 'none';
    renderCategories();
    renderItems();
  });
});

searchInput.addEventListener('input', e => {
  searchQuery = e.target.value;
  const hasVal = searchQuery.length > 0;
  clearBtn.style.opacity = hasVal ? '1' : '0';
  clearBtn.style.pointerEvents = hasVal ? 'all' : 'none';
  renderItems();
});

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearBtn.style.opacity = '0';
  clearBtn.style.pointerEvents = 'none';
  searchInput.focus();
  renderItems();
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

// ─── Helpers ──────────────────────────────────────────────────────────────────
function plural(n, forms) {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if ([2,3,4].includes(mod10) && ![12,13,14].includes(mod100)) return forms[1];
  return forms[2];
}

// ─── Init ─────────────────────────────────────────────────────────────────────
renderCategories();
renderItems();
