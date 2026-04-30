window.SITE_CONFIG = {
  icons: {
    email:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M22 7L12.97 12.7a2 2 0 0 1-1.94 0L2 7"></path></svg>`,
    scholar:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 2 2 10l10 6 10-6z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    github:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a5 5 0 0 0-2-4c4 0 7-3 7-6a5 5 0 0 0-.6-2.4 6 6 0 0 0-.1-2S17.9 2.9 15 4.7a12 12 0 0 0-6 0C6.1 2.9 5 3.2 5 3.2a6 6 0 0 0-.1 2A5 5 0 0 0 4 8c0 3 3 6 7 6a5 5 0 0 0-2 4v4"></path><path d="M9 18c-4 2-5-2-7-2"></path><path d="M15 18c4 2 5-2 7-2"></path></svg>`,
    linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path></svg>`,
    sun:      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  },

  myNames: ['Yan Zhang', 'Y. Zhang', 'Y Zhang'],
  themeKey: 'theme',
  defaultPublicationSort: 'year_desc',
  primaryPublicationLinks: ['arXiv', 'DOI'],
  externalLinkAttrs: 'target="_blank" rel="noopener"',
  safeExternalLinkAttrs: 'target="_blank" rel="noopener noreferrer"',

  profileContacts: [
    { key: 'email',    getHref: profile => `mailto:${profile.email}`, getText: profile => profile.email, label: 'Email' },
    { key: 'scholar',  getHref: profile => profile.scholar,           text: 'Google Scholar',            label: 'Google Scholar' },
    { key: 'github',   getHref: profile => profile.github,            text: 'GitHub',                    label: 'GitHub' },
    { key: 'linkedin', getHref: profile => profile.linkedin,          text: 'LinkedIn',                  label: 'LinkedIn' },
  ],
};
