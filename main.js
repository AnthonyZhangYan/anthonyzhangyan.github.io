const SITE_CONFIG = window.SITE_CONFIG || {};
const SITE_DATA = window.SITE_DATA || {};
const ICONS = SITE_CONFIG.icons || {};
const MY_NAMES = SITE_CONFIG.myNames || [];
const THEME_KEY = SITE_CONFIG.themeKey || 'theme';
const DEFAULT_PUBLICATION_SORT = SITE_CONFIG.defaultPublicationSort || 'year_desc';
const PRIMARY_PUBLICATION_LINKS = SITE_CONFIG.primaryPublicationLinks || ['arXiv', 'DOI'];
const EXTERNAL_LINK_ATTRS = SITE_CONFIG.externalLinkAttrs || 'target="_blank" rel="noopener"';
const SAFE_EXTERNAL_LINK_ATTRS = SITE_CONFIG.safeExternalLinkAttrs || 'target="_blank" rel="noopener noreferrer"';
const PROFILE_CONTACTS = SITE_CONFIG.profileContacts || [];
const PROFILE = SITE_DATA.profile || {};
const NEWS = SITE_DATA.news || [];
const EDUCATION = SITE_DATA.education || [];
const MISC = SITE_DATA.misc || [];

const PUBLICATION_SORTERS = {
  year_desc: (a, b) => normalizeYear(b.year) - normalizeYear(a.year),
  year_asc:  (a, b) => normalizeYear(a.year) - normalizeYear(b.year),
};

/* ============================================================
   HELPERS
   ============================================================ */

const byId = id => document.getElementById(id);

function setHTML(id, html) {
  const element = byId(id);
  if (element) element.innerHTML = html;
}

function setText(id, text) {
  const element = byId(id);
  if (element) element.textContent = text;
}

function renderItems(items, renderItem) {
  return items.map(renderItem).join('');
}

function renderList(id, items, renderItem) {
  setHTML(id, renderItems(items, renderItem));
}

function normalizeYear(year) {
  const parsed = parseInt(year, 10);
  return Number.isFinite(parsed) ? parsed : -Infinity;
}

function encodeUrl(url) {
  return String(url || '').replace(/\s/g, '%20');
}

function renderExternalLink({ className = '', href, label, body, safe = false }) {
  const attrs = safe ? SAFE_EXTERNAL_LINK_ATTRS : EXTERNAL_LINK_ATTRS;
  const classes = className ? ` class="${className}"` : '';
  const aria = label ? ` aria-label="${label}"` : '';
  return `<a${classes} href="${href}" ${attrs}${aria}>${body}</a>`;
}

function renderImage({ wrapperClass, imageClass, src, alt }) {
  return `<div class="${wrapperClass}"><img class="${imageClass}" src="${src}" alt="${alt}" loading="lazy"></div>`;
}

function highlightAuthors(text = '') {
  return MY_NAMES.reduce(
    (html, name) => html.replace(new RegExp(`\\b${name.replace('.', '\\.')}\\b`, 'g'), `<span class="me">${name}</span>`),
    text
  );
}

function linkClass(name, url) {
  const lowerName = String(name || '').toLowerCase();
  const lowerUrl = String(url || '').toLowerCase();

  if (lowerName.includes('pdf')) return 'pdf-link';
  if (lowerName.includes('doi') || lowerUrl.includes('doi.org')) return 'doi-link';
  if (lowerName.includes('arxiv') || lowerUrl.includes('arxiv')) return 'arxiv-link';
  return '';
}

/* ============================================================
   PROFILE / SECTIONS
   ============================================================ */

function renderSeal(seal) {
  return renderExternalLink({
    className: `seal ${seal.cls}`,
    href: seal.href,
    label: seal.label,
    body: '',
  });
}

function renderContact(profile, contact) {
  return renderExternalLink({
    className: 'icon',
    href: contact.getHref(profile),
    label: contact.label,
    body: `${ICONS[contact.key]}${contact.getText ? contact.getText(profile) : contact.text}`,
  });
}

function renderChip(label) {
  return `<span class="chip">${label}</span>`;
}

function renderProfile() {
  setHTML('profile-info', `
    <div class="name-row">
      <h1>${PROFILE.name}</h1>
      <div class="name-logos">${renderItems(PROFILE.seals, renderSeal)}</div>
    </div>
    <div class="subtitle">${PROFILE.title}</div>
    <div class="subtitle">${PROFILE.affil}</div>
    <div class="contact profile-contact">${renderItems(PROFILE_CONTACTS, contact => renderContact(PROFILE, contact))}</div>
    <div class="chips profile-chips">${renderItems(PROFILE.interests, renderChip)}</div>
  `);
  setHTML('bio', PROFILE.bio);
  setText('year', new Date().getFullYear());
}

function renderEducationItem(item) {
  return `
    <li>
      <div class="left">
        <b>${item.degree}</b> <span class="degree">${item.badge}</span>
        <div class="school">${item.school}</div>
      </div>
      <div class="when"><span class="mon">${item.mon}</span> <span class="yr">${item.yr}</span></div>
    </li>
  `;
}

function renderNewsItem(item) {
  return `<li><span class="pill">${item.date}</span><span class="msg">${item.msg}</span></li>`;
}

function renderMiscItem(item) {
  return `<li>${item}</li>`;
}

function renderStaticSections() {
  renderEducation();
  renderNews();
  renderMisc();
}

function renderEducation() {
  renderList('edu-list', EDUCATION, renderEducationItem);
}

function renderNews() {
  renderList('news-list', NEWS, renderNewsItem);
}

function renderMisc() {
  renderList('misc-list', MISC, renderMiscItem);
}

/* ============================================================
   PUBLICATIONS
   ============================================================ */

const publicationState = {
  items: [],
};

function sortPublications(list, mode) {
  const sorter = PUBLICATION_SORTERS[mode] || PUBLICATION_SORTERS[DEFAULT_PUBLICATION_SORT];
  return list.slice().sort(sorter);
}

function getPublicationSortMode() {
  return byId('sort-by')?.value || DEFAULT_PUBLICATION_SORT;
}

function renderPublicationLinks(links = []) {
  return renderItems(links, link => renderExternalLink({
    className: linkClass(link.name, link.url),
    href: encodeUrl(link.url),
    body: link.name,
    safe: true,
  }));
}

function renderPublicationAuthors(publication) {
  if (!publication.moreAuthors) return highlightAuthors(publication.authors);

  return `
    <details>
      <summary>${highlightAuthors(publication.authors)} <span aria-label="more">…</span></summary>
      <div>${highlightAuthors(publication.moreAuthors)}</div>
    </details>
  `;
}

function getPrimaryPublicationUrl(publication) {
  return (publication.links || []).find(link => PRIMARY_PUBLICATION_LINKS.includes(link.name))?.url || '';
}

function renderPublicationTitle(publication) {
  const primaryUrl = getPrimaryPublicationUrl(publication);

  if (!primaryUrl) return publication.title;

  return renderExternalLink({
    className: 'pub-title-link',
    href: primaryUrl,
    body: publication.title,
    safe: true,
  });
}

function renderPublicationBadge(publication) {
  return publication.badge ? `<span class="pub-badge">${publication.badge}</span>` : '';
}

function getPublicationImageType(image = '') {
  if (image.includes('arxiv-logo')) return 'arxiv';
  if (image.includes('icml-logo')) return 'icml';
  if (image.includes('eccv')) return 'eccv';
  return '';
}

function getPublicationMedia(publication) {
  const image = publication.image || '';
  if (!image) return { html: '', extraClass: '', hasBanner: false };

  const imageType = getPublicationImageType(image);

  if (publication.imageLayout === 'banner') {
    return {
      html: renderImage({
        wrapperClass: `pub-img-wrap${imageType ? ' is-logo' : ''}`,
        imageClass: 'pub-img',
        src: image,
        alt: publication.title,
      }),
      extraClass: ' pub-has-img',
      hasBanner: true,
    };
  }

  const wrapperClass = imageType ? `pub-thumb is-${imageType}` : 'pub-thumb';
  return {
    html: renderImage({
      wrapperClass,
      imageClass: 'pub-thumb-img',
      src: image,
      alt: publication.title,
    }),
    extraClass: ' pub-has-thumb',
    hasBanner: false,
  };
}

function renderPublicationMeta(publication) {
  return `
    <div class="venue">${[publication.year, publication.venue].filter(Boolean).join(' — ')}${renderPublicationBadge(publication)}</div>
    <div class="authors">${renderPublicationAuthors(publication)}</div>
    <div class="links">${renderPublicationLinks(publication.links)}</div>
  `;
}

function renderPublicationBody(publication) {
  const logoType = getPublicationImageType(publication.logo || '');
  const content = `
    <div class="pub-body">
      <div class="title">${renderPublicationTitle(publication)}</div>
      ${renderPublicationMeta(publication)}
    </div>
  `;

  if (!publication.logo) return content;

  return `
    <div class="pub-body-row">
      ${renderImage({
        wrapperClass: `pub-thumb${logoType ? ` is-${logoType}` : ''}`,
        imageClass: 'pub-thumb-img',
        src: encodeUrl(publication.logo),
        alt: publication.venue || publication.title,
      })}
      ${content}
    </div>
  `;
}

function renderPublicationCard(publication) {
  const media = getPublicationMedia(publication);
  const body = renderPublicationBody(publication);
  const cardClass = `pub${publication.badge ? ' pub-accepted' : ''}${media.extraClass}`;
  const content = media.hasBanner ? media.html + body : (media.html ? media.html + body : body);

  return `<div class="${cardClass}">${content}</div>`;
}

function renderPublicationError(error) {
  setHTML('pubs', `
    <div class="pub">
      <div class="title">Failed to load publications</div>
      <div class="venue pub-error">Error: ${String(error)}</div>
    </div>
  `);
}

function renderPublications() {
  const sorted = sortPublications(publicationState.items, getPublicationSortMode());
  setHTML('pubs', renderItems(sorted, renderPublicationCard));
}

async function loadPublications() {
  try {
    const response = await fetch('publications.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    publicationState.items = await response.json();
    renderPublications();
  } catch (error) {
    renderPublicationError(error);
  }
}

function initPublicationControls() {
  const sortSelect = byId('sort-by');
  if (!sortSelect) return;
  sortSelect.addEventListener('change', renderPublications);
}

/* ============================================================
   SIDE NAV
   ============================================================ */

function initSideNav() {
  const root = byId('side-nav');
  if (!root) return;

  const links = Array.from(root.querySelectorAll('a[href^="#"]'));
  const sections = links
    .map(link => ({
      link,
      target: byId(link.getAttribute('href').slice(1)),
    }))
    .filter(item => item.target);

  if (!sections.length) return;

  const setActiveLink = activeLink => {
    links.forEach(link => link.classList.toggle('active', link === activeLink));
  };

  const updateActiveLink = () => {
    const anchorLine = window.innerHeight * 0.35;
    let active = sections[0];

    sections.forEach(section => {
      if (section.target.getBoundingClientRect().top <= anchorLine) {
        active = section;
      }
    });

    setActiveLink(active.link);
  };

  links.forEach(link => {
    link.addEventListener('click', event => {
      const target = byId(link.getAttribute('href').slice(1));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLink(link);
    });
  });

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  window.addEventListener('resize', updateActiveLink);
  updateActiveLink();
}

/* ============================================================
   THEME
   ============================================================ */

function getStoredTheme() {
  return localStorage.getItem(THEME_KEY);
}

function setDocumentTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

function resolveDarkMode(mediaQuery) {
  const theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') return true;
  if (theme === 'light') return false;
  return mediaQuery.matches;
}

function updateThemeButton(button, mediaQuery) {
  const isDark = resolveDarkMode(mediaQuery);
  button.innerHTML = isDark ? ICONS.sun : ICONS.moon;
  button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

function initTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme) setDocumentTheme(storedTheme);

  const button = byId('theme-toggle');
  if (!button) return;

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  button.addEventListener('click', () => {
    const nextTheme = resolveDarkMode(mediaQuery) ? 'light' : 'dark';
    setDocumentTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    updateThemeButton(button, mediaQuery);
  });

  updateThemeButton(button, mediaQuery);
  mediaQuery.addEventListener('change', () => {
    if (!getStoredTheme()) updateThemeButton(button, mediaQuery);
  });
}

/* ============================================================
   BOOT
   ============================================================ */

function init() {
  initTheme();
  renderProfile();
  renderStaticSections();
  initPublicationControls();
  loadPublications();
  initSideNav();
}

init();
