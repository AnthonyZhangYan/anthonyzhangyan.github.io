/* ============================================================
   DATA — edit these arrays / objects to update your page
   ============================================================ */

const PROFILE = {
  name:      'Yan Zhang (张岩)',
  title:     'Ph.D. Student @ Florida State University',
  affil:     'Department of Computer Science',
  bio:       'I am a graduate student in the Department of Computer Science at Florida State University. My research interests include <b>machine learning</b>, <b>AI for science</b>, <b>Bayesian optimization</b> and <b>large language models</b>.',
  email:     'yz18b@fsu.edu',
  scholar:   'https://scholar.google.com/citations?user=nAh7B5EAAAAJ&hl=en',
  github:    'https://github.com/AnthonyZhangYan',
  linkedin:  'https://www.linkedin.com/in/yourid',
  interests: ['Machine Learning', 'AI for Science', 'Bayesian Optimization', 'Large Language Models'],
  seals: [
    { cls: 'fsu', href: 'https://www.fsu.edu',       label: 'Florida State University' },
    { cls: 'nku', href: 'https://en.nankai.edu.cn',  label: 'Nankai University' },
  ],
};

// Add entries here — newest first recommended
const NEWS = [
  { date: '2026-04-30', msg: 'My first-author paper <a class="inline-link" href="https://arxiv.org/abs/2601.20043" target="_blank" rel="noopener"><b>RAMBO</b></a> was accepted at <b>ICML 2026</b> (regular)! RAMBO replaces the standard GP surrogate with a Dirichlet Process Mixture of GPs that automatically discovers latent regimes during optimization — each modeled by an independent GP with locally-tuned hyperparameters — enabling principled Bayesian optimization over multi-regime landscapes such as molecular conformation, drug discovery, and fusion reactor design.' },
  { date: '2025-11', msg: 'Homepage launched！🎉' },
  { date: '2025-06', msg: 'I am joining <a class="inline-link" href="https://pml4sc.github.io/" target="_blank" rel="noopener"><b>PML4SC</b></a> lab to conduct research under <a class="inline-link" href="https://imshibo.com/" target="_blank" rel="noopener"><b>Dr. Shibo Li</b></a>\'s mentorship.' },
];

// Add entries here — top → bottom = oldest → newest
const EDUCATION = [
  { degree: 'Ph.D. in Computer Science',             badge: 'Ph.D.', school: 'Florida State University — Tallahassee, FL', mon: '',    yr: 'In\u00a0Progress' },
  { degree: 'Master of Science in Computer Science', badge: 'M.S.',  school: 'Florida State University — Tallahassee, FL', mon: 'May', yr: '2025' },
  { degree: 'Master of Science in Chemistry',        badge: 'M.S.',  school: 'Florida State University — Tallahassee, FL', mon: 'Dec', yr: '2021' },
  { degree: 'Bachelor of Science in Chemistry',      badge: 'B.S.',  school: 'Nankai University — Tianjin, China',          mon: 'Jun', yr: '2016' },
];

// HTML strings; use <a class="inline-link" ...> for links
const MISC = [
  'Hobbies: MOBA games, <a class="inline-link" href="https://boardgamebros.org/" target="_blank" rel="noopener">board games</a>, model painting.',
  'Open to collaboration — feel free to reach out via email.',
];

/* ============================================================
   SVG ICONS
   ============================================================ */

const ICONS = {
  email:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 7L12.97 12.7a2 2 0 0 1-1.94 0L2 7"></path></svg>`,
  scholar:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 2 2 10l10 6 10-6z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
  github:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a5 5 0 0 0-2-4c4 0 7-3 7-6a5 5 0 0 0-.6-2.4 6 6 0 0 0-.1-2S17.9 2.9 15 4.7a12 12 0 0 0-6 0C6.1 2.9 5 3.2 5 3.2a6 6 0 0 0-.1 2A5 5 0 0 0 4 8c0 3 3 6 7 6a5 5 0 0 0-2 4v4"></path><path d="M9 18c-4 2-5-2-7-2"></path><path d="M15 18c4 2 5-2 7-2"></path></svg>`,
  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path></svg>`,
  sun:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
};

/* ============================================================
   HELPERS
   ============================================================ */

const byId = id => document.getElementById(id);

const MY_NAMES = ['Yan Zhang', 'Y. Zhang', 'Y Zhang'];
function highlightAuthors(s = '') {
  return MY_NAMES.reduce(
    (h, n) => h.replace(new RegExp('\\b' + n.replace('.', '\\.') + '\\b', 'g'), `<span class="me">${n}</span>`),
    s
  );
}

function linkClass(name, url) {
  const n = (name || '').toLowerCase(), u = (url || '').toLowerCase();
  if (n.includes('pdf'))                           return 'pdf-link';
  if (n.includes('doi') || u.includes('doi.org')) return 'doi-link';
  if (n.includes('arxiv') || u.includes('arxiv')) return 'arxiv-link';
  return '';
}

/* ============================================================
   RENDER FUNCTIONS
   ============================================================ */

function renderProfile() {
  const seals = PROFILE.seals.map(s =>
    `<a class="seal ${s.cls}" href="${s.href}" target="_blank" rel="noopener" aria-label="${s.label}"></a>`
  ).join('');

  const contacts = [
    { href: `mailto:${PROFILE.email}`, icon: ICONS.email,    text: PROFILE.email,    label: 'Email'         },
    { href: PROFILE.scholar,           icon: ICONS.scholar,  text: 'Google Scholar', label: 'Google Scholar' },
    { href: PROFILE.github,            icon: ICONS.github,   text: 'GitHub',         label: 'GitHub'        },
    { href: PROFILE.linkedin,          icon: ICONS.linkedin, text: 'LinkedIn',       label: 'LinkedIn'      },
  ].map(c =>
    `<a class="icon" href="${c.href}" target="_blank" rel="noopener" aria-label="${c.label}">${c.icon}${c.text}</a>`
  ).join('');

  const chips = PROFILE.interests.map(t => `<span class="chip">${t}</span>`).join('');

  byId('profile-info').innerHTML = `
    <div class="name-row">
      <h1>${PROFILE.name}</h1>
      <div class="name-logos">${seals}</div>
    </div>
    <div class="subtitle">${PROFILE.title}</div>
    <div class="subtitle">${PROFILE.affil}</div>
    <div class="contact" style="margin-top:8px">${contacts}</div>
    <div class="chips" style="margin-top:10px">${chips}</div>
  `;

  byId('bio').innerHTML = PROFILE.bio;
  byId('year').textContent = new Date().getFullYear();
}

function renderEducation() {
  byId('edu-list').innerHTML = EDUCATION.map(e => `
    <li>
      <div class="left">
        <b>${e.degree}</b> <span class="degree">${e.badge}</span>
        <div class="school">${e.school}</div>
      </div>
      <div class="when"><span class="mon">${e.mon}</span> <span class="yr">${e.yr}</span></div>
    </li>
  `).join('');
}

function renderNews() {
  byId('news-list').innerHTML = NEWS.map(n =>
    `<li><span class="pill">${n.date}</span><span class="msg">${n.msg}</span></li>`
  ).join('');
}

function renderMisc() {
  byId('misc-list').innerHTML = MISC.map(item => `<li>${item}</li>`).join('');
}

/* ============================================================
   PUBLICATIONS
   ============================================================ */

function normalizeYear(y) {
  const n = parseInt(y, 10);
  return Number.isFinite(n) ? n : -Infinity;
}

function sortPublications(list, mode) {
  const arr = list.slice();
  switch (mode) {
    case 'year_asc':  arr.sort((a, b) => normalizeYear(a.year) - normalizeYear(b.year)); break;
    case 'venue_az':  arr.sort((a, b) => String(a.venue || '').localeCompare(String(b.venue || ''))); break;
    case 'venue_za':  arr.sort((a, b) => String(b.venue || '').localeCompare(String(a.venue || ''))); break;
    default:          arr.sort((a, b) => normalizeYear(b.year) - normalizeYear(a.year));
  }
  return arr;
}

function renderPubs(list) {
  byId('pubs').innerHTML = list.map(p => {
    const links = (p.links || []).map(l => {
      const safe = (l.url || '').replace(/\s/g, '%20');
      return `<a class="${linkClass(l.name, l.url)}" href="${safe}" target="_blank" rel="noopener noreferrer">${l.name}</a>`;
    }).join('');
    const authors = p.moreAuthors
      ? `<details><summary>${highlightAuthors(p.authors)} <span aria-label="more">…</span></summary><div>${highlightAuthors(p.moreAuthors)}</div></details>`
      : highlightAuthors(p.authors);
    const primaryUrl = (p.links || []).find(l => l.name === 'arXiv' || l.name === 'DOI')?.url || '';
    const title = primaryUrl
      ? `<a class="pub-title-link" href="${primaryUrl}" target="_blank" rel="noopener noreferrer">${p.title}</a>`
      : p.title;
    const badge = p.badge ? `<span class="pub-badge">${p.badge}</span>` : '';
    const imgHTML = p.image
      ? `<div class="pub-img-wrap"><img class="pub-img" src="${p.image}" alt="${p.title}" loading="lazy"></div>`
      : '';
    return `<div class="pub${p.badge ? ' pub-accepted' : ''}${p.image ? ' pub-has-img' : ''}">
      ${imgHTML}
      <div class="pub-body">
        <div class="title">${title}</div>
        <div class="venue">${[p.year, p.venue].filter(Boolean).join(' — ')}${badge}</div>
        <div class="authors">${authors}</div>
        <div class="links">${links}</div>
      </div>
    </div>`;
  }).join('');
}

let publications = [];
async function loadPubs() {
  const selSort = byId('sort-by');
  try {
    const res = await fetch('publications.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    publications = await res.json();
    renderPubs(sortPublications(publications, selSort.value || 'year_desc'));
  } catch (err) {
    byId('pubs').innerHTML = `<div class="pub"><div class="title">Failed to load publications</div><div class="venue" style="color:#dc2626">Error: ${String(err)}</div></div>`;
  }
  selSort.addEventListener('change', () => renderPubs(sortPublications(publications, selSort.value)));
}

/* ============================================================
   MENU TOGGLE
   ============================================================ */

function initMenu() {
  const btn  = byId('menu-toggle');
  const list = byId('menu-list');
  const root = btn && btn.closest('.menu');
  if (!btn || !list || !root) return;

  const open   = () => { root.classList.add('open');    btn.setAttribute('aria-expanded', 'true');  };
  const close  = () => { root.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
  const toggle = () => root.classList.contains('open') ? close() : open();

  btn.addEventListener('click', e => { e.stopPropagation(); toggle(); });
  document.addEventListener('click', e => { if (!root.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  list.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */

function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  const btn = byId('theme-toggle');
  if (!btn) return;

  const mq = window.matchMedia('(prefers-color-scheme: dark)');

  function isDark() {
    const t = document.documentElement.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return mq.matches;
  }

  function updateBtn() {
    btn.innerHTML = isDark() ? ICONS.sun : ICONS.moon;
    btn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
  }

  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateBtn();
  });

  updateBtn();
  mq.addEventListener('change', () => {
    if (!localStorage.getItem('theme')) updateBtn();
  });
}

/* ============================================================
   BOOT
   ============================================================ */

initTheme();
renderProfile();
renderEducation();
renderNews();
renderMisc();
loadPubs();
initMenu();
