// ===================== ТАРИФНАЯ СЕТКА =====================
const PRICING = {
  weekday: {
    STANDARD: {
      hour:   { windows: [ {from:6,to:11,price:80},  {from:11,to:17,price:100}, {from:17,to:30,price:110} ] },
      hours3: { windows: [ {from:6,to:11,price:190}, {from:11,to:16,price:240}, {from:16,to:30,price:270} ] },
      hours5: { windows: [ {from:6,to:10,price:250}, {from:10,to:14,price:310}, {from:14,to:30,price:360} ] },
      night:  450
    },
    POWER: {
      hour:   { windows: [ {from:6,to:11,price:90},  {from:11,to:17,price:120}, {from:17,to:30,price:130} ] },
      hours3: { windows: [ {from:6,to:11,price:220}, {from:11,to:16,price:290}, {from:16,to:30,price:330} ] },
      hours5: { windows: [ {from:6,to:10,price:290}, {from:10,to:14,price:380}, {from:14,to:30,price:440} ] },
      night:  550
    },
    ULTRA: {
      hour:   { windows: [ {from:6,to:11,price:120}, {from:11,to:17,price:150}, {from:17,to:30,price:170} ] },
      hours3: { windows: [ {from:6,to:11,price:280}, {from:11,to:16,price:360}, {from:16,to:30,price:420} ] },
      hours5: { windows: [ {from:6,to:10,price:400}, {from:10,to:14,price:500}, {from:14,to:30,price:600} ] },
      night:  750
    },
    "EPIC-2K": {
      hour:   { windows: [ {from:6,to:11,price:150}, {from:11,to:17,price:200}, {from:17,to:30,price:240} ] },
      hours3: { windows: [ {from:6,to:11,price:380}, {from:11,to:16,price:500}, {from:16,to:30,price:600} ] },
      hours5: { windows: [ {from:6,to:10,price:500}, {from:10,to:14,price:650}, {from:14,to:30,price:800} ] },
      night:  1050
    }
  },
  weekend: {
    STANDARD: {
      hour:   { windows: [ {from:6,to:11,price:90},  {from:11,to:17,price:110}, {from:17,to:30,price:130} ] },
      hours3: { windows: [ {from:6,to:11,price:220}, {from:11,to:16,price:270}, {from:16,to:20,price:330} ] },
      hours5: { windows: [ {from:6,to:10,price:300}, {from:10,to:14,price:370}, {from:14,to:18,price:450} ] },
      night:  560
    },
    POWER: {
      hour:   { windows: [ {from:6,to:11,price:100}, {from:11,to:17,price:130}, {from:17,to:30,price:150} ] },
      hours3: { windows: [ {from:6,to:11,price:240}, {from:11,to:16,price:320}, {from:16,to:20,price:380} ] },
      hours5: { windows: [ {from:6,to:10,price:340}, {from:10,to:14,price:440}, {from:14,to:18,price:530} ] },
      night:  660
    },
    ULTRA: {
      hour:   { windows: [ {from:6,to:11,price:130}, {from:11,to:17,price:180}, {from:17,to:30,price:220} ] },
      hours3: { windows: [ {from:6,to:11,price:320}, {from:11,to:16,price:430}, {from:16,to:20,price:520} ] },
      hours5: { windows: [ {from:6,to:10,price:450}, {from:10,to:14,price:620}, {from:14,to:18,price:750} ] },
      night:  950
    },
    "EPIC-2K": {
      hour:   { windows: [ {from:6,to:11,price:160}, {from:11,to:17,price:240}, {from:17,to:30,price:300} ] },
      hours3: { windows: [ {from:6,to:11,price:400}, {from:11,to:16,price:600}, {from:16,to:20,price:750} ] },
      hours5: { windows: [ {from:6,to:10,price:580}, {from:10,to:14,price:800}, {from:14,to:18,price:1000} ] },
      night:  1350
    }
  }
};

const CATEGORIES = {
  STANDARD: { title: "STANDARD", subtitle: "144Hz", seats: 10, zone: "Общая зона",
    specs: ["AMD Ryzen 5", "NVIDIA GTX 1660 6Gb", "AOC 24″ 144Hz", "HyperX Alloy FPS", "Logitech G102"] },
  POWER: { title: "POWER", subtitle: "165Hz", seats: 8, zone: "Общая зона",
    specs: ["AMD Ryzen 5", "NVIDIA RTX 2060 6Gb", "ASUS 24″ 165Hz 1ms", "Red Square Keyrox TKL", "Logitech G102"] },
  ULTRA: { title: "ULTRA", subtitle: "240Hz", seats: 10, zone: "2 буткемпа по 5 ПК",
    specs: ["AMD Ryzen 5", "NVIDIA RTX 4070 12Gb", "Samsung 25″ 240Hz 1ms", "Red Square Keyrox TKL", "Fantech UX3v2"] },
  "EPIC-2K": { title: "EPIC-2K", subtitle: "240Hz · 2K", seats: 2, zone: "Эксклюзивная комната",
    specs: ["AMD Ryzen 5", "RTX 5070 Ti 16Gb / 4070 Ti Super", "Samsung 27″ 240Hz 2K", "Red Square Keyrox TKL", "Ardor Prime PRO"] }
};

const DURATIONS = [
  { key: "hour",   label: "1 час" },
  { key: "hours3", label: "3 часа" },
  { key: "hours5", label: "5 часов" },
  { key: "night",  label: "Ночь (22:00–8:00)" }
];

const GAMES = [
  "CS 2 + FaceIt","Standoff 2","Dota 2","PUBG","RUST","GTA V","Fortnite","Valorant","World of Tanks",
  "Among Us","APEX Legends","Arena Breakout: Infinite","Arma 3","Atomic Heart","Battlefield I","Battlefield V",
  "Battlefield 6","Battlefield 2042","BeamNG.drive","Bodycam","Call of Duty: Warzone","Cyberpunk 2077","Days Gone",
  "DayZ","Dead by Daylight","Deadlock","Detroit: Become Human","Doom Eternal","Don't Starve Together","Dota 1",
  "Escape from Tarkov","Euro Truck Simulator 2","Fallout 4","Fall Guys","FarCry 5","FarCry 6",
  "Five Nights at Freddy's: Security Breach","Forest","Forza Horizon 5","Garry's Mod","Genshin Impact",
  "Helldivers 2","Hogwarts Legacy","Horizon Forbidden West","Hunt: Showdown 1896","League of Legends",
  "Left 4 Dead 2","Lethal Company","Marvel Rivals","Minecraft","MudRunner","Overwatch 2","Palworld",
  "Path of Exile","Payday 2","PEAK","Phasmophobia","Portal 2","Red Dead Redemption 2","R.E.P.O.","Roblox","Raft",
  "Are We There Yet?","Satisfactory","SCP Secret Laboratory","Sims 4","Sons Of The Forest","Squad","Starcraft 2",
  "The Ascent","The Outlast Trials","Rainbow Six Siege","War Thunder","Warface","Ведьмак 3: Дикая Охота"
];

const RULES_SECTIONS = [
  { title: "Общие положения", items: [
    "При оплате услуг вы соглашаетесь с правилами клуба",
    "Администратор вправе отказать в обслуживании при нарушении правил, без возврата средств",
    "Возврат за игровое время не производится; при форс-мажоре (свет, интернет) — компенсация в эквивалентном размере",
    "Клуб не отвечает за работу интернет-сервисов",
    "Ущерб, причинённый клиентом, компенсируется клиентом в полном размере"
  ]},
  { title: "Что запрещено в зале", items: [
    "Есть за игровым местом, курить (в т.ч. вейпы), употреблять алкоголь и наркотические вещества",
    "Ненормативная лексика, крики, агрессия к персоналу и посетителям",
    "Наносить ущерб оборудованию: удары по клавиатуре/мышке, столу, наушникам",
    "Находиться в зале без оплаченного времени, спать за местом",
    "Скрывать лицо, приходить в грязной одежде",
    "Приносить оружие и колюще-режущие предметы",
    "Самостоятельно передвигать/разбирать технику, лезть в электросеть, менять периферию",
    "Скачивать файлы без согласования с администратором, ставить нелицензионный софт, читы и шпионское ПО",
    "Заниматься торговлей, рекламой, азартными играми и ставками в зале"
  ]},
  { title: "Возрастные ограничения", items: [
    "Дети младше 9 лет — только в сопровождении взрослых",
    "Лица младше 18 лет не допускаются в ночное время (22:00–6:00)"
  ]}
];

// ===================== ПРЕЛОАДЕР =====================
function initPreloader() {
  const el = document.getElementById('preloader');
  const bar = document.getElementById('preloaderBar');
  const pct = document.getElementById('preloaderPct');
  if (!el) return;

  document.body.style.overflow = 'hidden';
  let progress = 0;
  const tick = () => {
    progress += (100 - progress) * 0.12 + 1.5;
    if (progress >= 100) progress = 100;
    bar.style.width = progress + '%';
    pct.textContent = Math.round(progress) + '%';
    if (progress < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => {
        el.classList.add('hidden');
        document.body.style.overflow = '';
      }, 250);
    }
  };
  setTimeout(() => requestAnimationFrame(tick), 300);
  setTimeout(() => {
    el.classList.add('hidden');
    document.body.style.overflow = '';
  }, 4000);
}

// ===================== БУРГЕР-МЕНЮ =====================
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const panel = document.getElementById('mobileNav');
  if (!toggle || !panel) return;

  const close = () => { toggle.classList.remove('open'); panel.classList.remove('open'); document.body.style.overflow = ''; };
  const open = () => { toggle.classList.add('open'); panel.classList.add('open'); document.body.style.overflow = 'hidden'; };

  toggle.addEventListener('click', () => {
    toggle.classList.contains('open') ? close() : open();
  });
  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

// ===================== SCROLL REVEAL + COUNT-UP =====================
function animateCountUp(el) {
  const target = Number(el.dataset.count);
  if (!target && target !== 0) return;
  const duration = 1100;
  const start = performance.now();
  const from = 0;
  function frame(now) {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    el.textContent = Math.round(from + (target - from) * eased);
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = target;
  }
  requestAnimationFrame(frame);
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach(t => t.classList.add('in-view'));
    document.querySelectorAll('.hero-stat-num[data-count]').forEach(animateCountUp);
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        entry.target.querySelectorAll('.hero-stat-num[data-count]').forEach(animateCountUp);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  targets.forEach(t => io.observe(t));
}

// ===================== РАСЧЁТ ЦЕНЫ =====================
function getDayType(date) {
  const d = new Date(date);
  const day = d.getDay();
  const hour = d.getHours();
  if (day === 5 && hour >= 18) return "weekend";
  if (day === 6) return "weekend";
  if (day === 0 && hour < 20) return "weekend";
  return "weekday";
}

function inWindow(hour, from, to) {
  if (to <= 24) return hour >= from && hour < to;
  return (hour >= from && hour < 24) || (hour < to - 24);
}

function calcPrice(category, durationKey, date) {
  const dayType = getDayType(date);
  const table = PRICING[dayType][category];
  if (!table) return null;

  if (durationKey === "night") {
    return { price: table.night, dayType, windowLabel: "Ночной тариф" };
  }

  const hour = date.getHours();
  const windows = table[durationKey].windows;
  for (const w of windows) {
    if (inWindow(hour, w.from, w.to)) {
      return { price: w.price, dayType, windowLabel: `${w.from % 24}:00–${w.to % 24 === 0 ? "24" : w.to % 24}:00` };
    }
  }
  const fallback = windows[windows.length - 1];
  return { price: fallback.price, dayType, windowLabel: "Вечерний тариф" };
}

// ===================== РЕНДЕР КАТЕГОРИЙ =====================
function renderCategories() {
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  grid.innerHTML = Object.entries(CATEGORIES).map(([key, cat]) => {
    const minPrice = PRICING.weekday[key].hour.windows[0].price;
    return `
      <div class="cat-card" data-hz="${cat.subtitle}">
        <div class="cat-card-title">${cat.title}</div>
        <div class="cat-card-zone">${cat.zone} · ${cat.seats} мест</div>
        <ul class="cat-specs">${cat.specs.map(s => `<li>${s}</li>`).join('')}</ul>
        <div class="cat-price">от <b>${minPrice} ₽</b>/час<div class="cat-seats">будни, утро</div></div>
      </div>`;
  }).join('');
}

// ===================== ТАБЛИЦА ЦЕН =====================
function renderPriceTable(dayType) {
  const table = document.getElementById('priceTable');
  if (!table) return;
  const cats = Object.keys(CATEGORIES);
  let head = `<thead><tr>
    <th>Категория</th><th>Длительность</th><th>Утро</th><th>День</th><th>Вечер</th><th>Ночь</th>
  </tr></thead>`;
  const body = cats.map(cat => {
    const data = PRICING[dayType][cat];
    const durRows = [
      { label: '1 час', key: 'hour' },
      { label: '3 часа', key: 'hours3' },
      { label: '5 часов', key: 'hours5' }
    ];
    return durRows.map((d, i) => {
      const w = data[d.key].windows;
      return `<tr>
        ${i === 0 ? `<td class="cat-name" rowspan="3">${cat}</td>` : ''}
        <td>${d.label}</td>
        <td class="num">${w[0].price} ₽</td>
        <td class="num">${w[1].price} ₽</td>
        <td class="num">${w[2].price} ₽</td>
        ${i === 0 ? `<td class="num" rowspan="3">${data.night} ₽</td>` : ''}
      </tr>`;
    }).join('');
  }).join('');
  table.innerHTML = head + `<tbody>${body}</tbody>`;
}

function initPriceTabs() {
  const tabs = document.querySelectorAll('#priceTabs .tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderPriceTable(tab.dataset.day);
    });
  });
  renderPriceTable('weekday');
}

// ===================== МОДАЛКА ТАРИФОВ =====================
function initPricingModal() {
  const openBtn = document.getElementById('openPricing');
  const closeBtn = document.getElementById('closePricing');
  const overlay = document.getElementById('pricingModal');
  if (!openBtn || !overlay) return;

  const open = () => { overlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { overlay.classList.remove('open'); document.body.style.overflow = ''; };

  openBtn.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// ===================== ИГРЫ (бегущая строка) =====================
function renderGamesMarquee(filterQuery) {
  const track = document.getElementById('gamesTrack');
  const wrap = document.getElementById('gamesMarqueeWrap');
  const count = document.getElementById('gamesCount');
  const empty = document.getElementById('gamesEmpty');
  if (!track) return;

  const q = (filterQuery || '').trim().toLowerCase();
  const list = q ? GAMES.filter(g => g.toLowerCase().includes(q)) : GAMES;

  if (!list.length) {
    track.innerHTML = '';
    wrap.style.display = 'none';
    empty.style.display = 'block';
    count.textContent = '';
    return;
  }
  wrap.style.display = '';
  empty.style.display = 'none';

  if (q) {
    // При поиске: бегущая строка останавливается, найденные теги центрируются статично —
    // так совпадение не "убегает" за левый край экрана.
    wrap.classList.add('static-mode');
    track.classList.add('static');
    track.innerHTML = list.map(g => `<span class="game-tag match">${g}</span>`).join('');
  } else {
    wrap.classList.remove('static-mode');
    track.classList.remove('static');
    const tagsHtml = list.map(g => `<span class="game-tag">${g}</span>`).join('');
    track.innerHTML = tagsHtml + tagsHtml; // дублируем для бесшовного лупа
    const duration = Math.max(24, list.length * 1.4);
    track.style.animation = `marquee ${duration}s linear infinite`;
  }

  count.textContent = q
    ? `Найдено: ${list.length} из ${GAMES.length}`
    : `Всего игр: ${GAMES.length}. Своей игры нет? Администратор установит по запросу.`;
}

function initGames() {
  const search = document.getElementById('gamesSearch');
  const track = document.getElementById('gamesTrack');
  const wrap = document.getElementById('gamesMarqueeWrap');
  if (!search || !track) return;

  // Подставляем реальное количество игр везде, где раньше было захардкожено "100+"
  const heroCount = document.getElementById('heroGamesCount');
  const titleCount = document.getElementById('gamesTitleCount');
  const statEl = document.querySelector('[data-count-id="gamesStat"]');
  if (heroCount) heroCount.textContent = GAMES.length;
  if (titleCount) titleCount.textContent = GAMES.length;
  if (statEl) statEl.dataset.count = GAMES.length;

  renderGamesMarquee('');
  search.addEventListener('input', () => renderGamesMarquee(search.value));

  wrap.addEventListener('mouseenter', () => track.classList.add('paused'));
  wrap.addEventListener('mouseleave', () => track.classList.remove('paused'));
}

// ===================== ПРАВИЛА =====================
function renderRules() {
  const wrap = document.getElementById('rulesAccordion');
  if (!wrap) return;
  wrap.innerHTML = RULES_SECTIONS.map((sec, i) => `
    <div class="accordion-item${i === 0 ? ' open' : ''}">
      <button type="button" class="accordion-head" data-idx="${i}">
        ${sec.title}<span class="plus">+</span>
      </button>
      <div class="accordion-body">
        <div class="accordion-body-inner"><ul>${sec.items.map(it => `<li>${it}</li>`).join('')}</ul></div>
      </div>
    </div>
  `).join('');
  wrap.querySelectorAll('.accordion-head').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.accordion-item').classList.toggle('open');
    });
  });
}

// ===================== БРОНИРОВАНИЕ =====================
const bookingState = { category: "STANDARD", duration: "hour", people: 1 };

function renderCategoryPills() {
  const wrap = document.getElementById('catPills');
  if (!wrap) return;
  wrap.innerHTML = Object.keys(CATEGORIES).map(key => `
    <button type="button" class="pill-btn${key === bookingState.category ? ' active' : ''}" data-cat="${key}">${key}</button>
  `).join('');
  wrap.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bookingState.category = btn.dataset.cat;
      const maxSeats = CATEGORIES[bookingState.category].seats;
      if (bookingState.people > maxSeats) bookingState.people = maxSeats;
      wrap.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updatePeopleUI();
      updateSummary();
    });
  });
}

function renderDurationPills() {
  const wrap = document.getElementById('durationPills');
  if (!wrap) return;
  wrap.innerHTML = DURATIONS.map(d => `
    <button type="button" class="pill-btn${d.key === bookingState.duration ? ' active' : ''}" data-dur="${d.key}">${d.label}</button>
  `).join('');
  wrap.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      bookingState.duration = btn.dataset.dur;
      wrap.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateSummary();
    });
  });
}

function updatePeopleUI() {
  const val = document.getElementById('peopleVal');
  const hint = document.getElementById('peopleHint');
  const maxSeats = CATEGORIES[bookingState.category].seats;
  val.textContent = bookingState.people;
  hint.textContent = bookingState.people === 1
    ? "1 место — для игры в одиночку, больше — если бронируешь компанией"
    : `Забронируем ${bookingState.people} соседних мест в категории ${bookingState.category} (доступно до ${maxSeats})`;
}

function initPeopleStepper() {
  const minus = document.getElementById('peopleMinus');
  const plus = document.getElementById('peoplePlus');
  if (!minus || !plus) return;
  minus.addEventListener('click', () => {
    if (bookingState.people > 1) {
      bookingState.people--;
      updatePeopleUI();
      updateSummary();
    }
  });
  plus.addEventListener('click', () => {
    const maxSeats = CATEGORIES[bookingState.category].seats;
    if (bookingState.people < maxSeats) {
      bookingState.people++;
      updatePeopleUI();
      updateSummary();
    }
  });
  updatePeopleUI();
}

function getSelectedDateTime() {
  const dateVal = document.getElementById('bookingDate').value;
  const timeVal = document.getElementById('bookingTime').value || "18:00";
  if (!dateVal) return null;
  return new Date(`${dateVal}T${timeVal}:00`);
}

function updateSummary() {
  const dt = getSelectedDateTime();
  const durLabel = DURATIONS.find(d => d.key === bookingState.duration)?.label || "";

  document.getElementById('sumCategory').textContent = bookingState.category;
  document.getElementById('sumDuration').textContent = durLabel;
  document.getElementById('sumPeople').textContent = bookingState.people;

  if (!dt || isNaN(dt.getTime())) {
    document.getElementById('sumDateTime').textContent = "—";
    document.getElementById('sumTariff').textContent = "—";
    document.getElementById('sumTotal').textContent = "0 ₽";
    return;
  }

  const result = calcPrice(bookingState.category, bookingState.duration, dt);
  const dateStr = dt.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const timeStr = dt.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });

  document.getElementById('sumDateTime').textContent = `${dateStr}, ${timeStr}`;
  document.getElementById('sumTariff').textContent = result ? `${result.dayType === 'weekend' ? 'Выходной' : 'Будни'} · ${result.windowLabel} · ${result.price} ₽` : "—";
  const total = result ? result.price * bookingState.people : 0;
  document.getElementById('sumTotal').textContent = `${total} ₽`;
}

function showFormMsg(text, type) {
  const msg = document.getElementById('formMsg');
  msg.textContent = text;
  msg.className = `form-msg show ${type}`;
}

function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;
  const dateInput = document.getElementById('bookingDate');
  const timeInput = document.getElementById('bookingTime');

  const today = new Date();
  dateInput.min = today.toISOString().split('T')[0];
  dateInput.value = today.toISOString().split('T')[0];

  dateInput.addEventListener('change', updateSummary);
  timeInput.addEventListener('change', updateSummary);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const dt = getSelectedDateTime();
    if (!dt || isNaN(dt.getTime())) {
      showFormMsg("Укажи корректные дату и время.", "err");
      return;
    }

    const name = document.getElementById('bookingName').value.trim();
    const contact = document.getElementById('bookingContact').value.trim();
    const comment = document.getElementById('bookingComment').value.trim();

    if (!name || !contact) {
      showFormMsg("Заполни имя и телефон/Telegram.", "err");
      return;
    }

    const result = calcPrice(bookingState.category, bookingState.duration, dt);
    const durLabel = DURATIONS.find(d => d.key === bookingState.duration)?.label || "";
    const totalPrice = result ? result.price * bookingState.people : null;

    const payload = {
      category: bookingState.category,
      people: bookingState.people,
      date: dt.toISOString(),
      dateLabel: dt.toLocaleDateString('ru-RU') + " " + dt.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      duration: durLabel,
      pricePerSeat: result ? result.price : null,
      price: totalPrice,
      dayType: result ? result.dayType : null,
      name,
      contact,
      comment
    };

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = "Отправляем...";

    try {
      const res = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      let data = null;
      try { data = await res.json(); } catch {}

      if (!res.ok) {
        const serverMsg = data && data.error ? data.error : `Сервер ответил ошибкой (${res.status})`;
        throw new Error(serverMsg);
      }

      showFormMsg("Заявка отправлена! Администратор подтвердит бронь в Telegram в ближайшее время.", "ok");
      form.reset();
      dateInput.value = today.toISOString().split('T')[0];
      bookingState.people = 1;
      updatePeopleUI();
      updateSummary();
    } catch (err) {
      showFormMsg(err.message || "Не удалось отправить заявку. Позвони +7 982 707-26-84 или напиши @dixizee в Telegram.", "err");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Отправить заявку";
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initMobileNav();
  renderCategories();
  initPriceTabs();
  initPricingModal();
  initGames();
  renderRules();
  renderCategoryPills();
  renderDurationPills();
  initPeopleStepper();
  initBookingForm();
  updateSummary();
  initScrollReveal();
});
