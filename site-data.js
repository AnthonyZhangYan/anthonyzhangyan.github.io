window.SITE_DATA = {
  profile: {
    name:      'Yan Zhang (张岩)',
    title:     'Ph.D. Student @ Florida State University',
    affil:     'Department of Computer Science',
    bio:       'I am a graduate student in the Department of Computer Science at Florida State University, working in the <a class="inline-link" href="https://pml4sc.github.io/" target="_blank" rel="noopener">PML4SC Lab</a> under the supervision of <a class="inline-link" href="https://imshibo.com/" target="_blank" rel="noopener">Dr. Shibo Li</a>. My research interests include <b>machine learning</b>, <b>AI for science</b>, <b>Bayesian optimization</b>, <b>large language models</b>, and <b>AI agents</b>.',
    email:     'yz18b@fsu.edu',
    scholar:   'https://scholar.google.com/citations?user=nAh7B5EAAAAJ&hl=en',
    github:    'https://github.com/AnthonyZhangYan',
    linkedin:  'https://www.linkedin.com/in/yourid',
    interests: ['Machine Learning', 'AI for Science', 'Bayesian Optimization', 'Large Language Models', 'AI Agents'],
    seals: [
      { cls: 'fsu', href: 'https://www.fsu.edu',      label: 'Florida State University' },
      { cls: 'nku', href: 'https://en.nankai.edu.cn', label: 'Nankai University' },
    ],
  },

  news: [
    { date: '2026-07', msg: 'Received travel grant to <a class="inline-link" href="https://2026.aclweb.org/" target="_blank" rel="noopener"><b>Annual Meeting of the Association for Computational Linguistics (ACL 2026)</b></a> at San Diego.' },
    { date: '2026-06-20', venue: 'ECCV 2026', msg: 'Our paper <a class="inline-link" href="https://arxiv.org/abs/2509.23139" target="_blank" rel="noopener"><b>Closing the Capacity-Convergence Gap: Globally Optimal Configuration of Implicit Neural Representations</b></a> was accepted at <a class="inline-link" href="https://eccv.ecva.net/Conferences/2026" target="_blank" rel="noopener"><b>European Conference on Computer Vision (ECCV 2026)</b></a>! The work presents a Bayesian optimization framework for globally configuring INR activation families and initialization parameters.' },
    { date: '2026-04-30', venue: 'ICML 2026', msg: 'My first-author paper <a class="inline-link" href="https://arxiv.org/abs/2601.20043" target="_blank" rel="noopener"><b>Regime-Adaptive Bayesian Optimization via Dirichlet Process Mixtures of Gaussian Processes</b></a> was accepted at <a class="inline-link" href="https://icml.cc/Conferences/2026" target="_blank" rel="noopener"><b>International Conference on Machine Learning (ICML 2026)</b></a> (regular)! RAMBO replaces the standard GP surrogate with a Dirichlet Process Mixture of GPs that automatically discovers latent regimes during optimization — each modeled by an independent GP with locally-tuned hyperparameters — enabling principled Bayesian optimization over multi-regime landscapes such as molecular conformation, drug discovery, and fusion reactor design.' },
    { date: '2025-11', msg: 'Homepage launched！🎉' },
    { date: '2025-06', msg: 'I am joining <a class="inline-link" href="https://pml4sc.github.io/" target="_blank" rel="noopener"><b>PML4SC</b></a> lab to conduct research under <a class="inline-link" href="https://imshibo.com/" target="_blank" rel="noopener"><b>Dr. Shibo Li</b></a>\'s mentorship.' },
  ],

  conferences: [
    {
      title: '43rd International Conference on Machine Learning (ICML 2026)',
      role: 'Registered Author · Poster presented by a colleague',
      date: 'Jul 06 - 11, 2026',
      location: 'Seoul, South Korea',
      imageLight: 'assets/icml-2026-registration-profile.png',
      imageDark: 'assets/icml-2026-registration-profile.png',
      imageFit: 'contain',
      url: 'https://icml.cc/Conferences/2026',
    },
    {
      title: '64th Annual Meeting of the Association for Computational Linguistics (ACL 2026)',
      role: 'Attendee',
      date: 'Jul 02 - 07, 2026',
      location: 'San Diego, CA',
      imageLight: 'assets/acl-2026-attendance-badge-light.jpg',
      imageDark: 'assets/acl-2026-attendance-badge-dark.jpg',
      url: 'https://2026.aclweb.org/',
    },
  ],

  education: [
    { degree: 'Ph.D. in Computer Science',             badge: 'Ph.D.', school: 'Florida State University — Tallahassee, FL', mon: '',    yr: 'In\u00a0Progress' },
    { degree: 'Master of Science in Computer Science', badge: 'M.S.',  school: 'Florida State University — Tallahassee, FL', mon: 'May', yr: '2025' },
    { degree: 'Master of Science in Chemistry',        badge: 'M.S.',  school: 'Florida State University — Tallahassee, FL', mon: 'Dec', yr: '2021' },
    { degree: 'Bachelor of Science in Chemistry',      badge: 'B.S.',  school: 'Nankai University — Tianjin, China',         mon: 'Jun', yr: '2016' },
  ],

  misc: [
    'Hobbies: MOBA games, <a class="inline-link" href="https://boardgamebros.org/" target="_blank" rel="noopener">board games</a>, model painting.',
    'Open to collaboration — feel free to reach out via email.',
  ],
};
