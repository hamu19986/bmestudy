/* ============================================================
   APP CORE — namespace, router, layout, shared helpers, storage
   ============================================================ */

const ME = {
  routes: {},
  data: {},
  helpers: {},
  store: {}
};

/* ---------------- Data aggregation ---------------- */
ME.data.units = [
  { n: 1, title: 'Unit I', subtitle: 'Machine Tools & Basic Thermodynamics', topics: (typeof UNIT1_TOPICS !== 'undefined') ? UNIT1_TOPICS : [] },
  { n: 2, title: 'Unit II', subtitle: 'Refrigeration, A/C, Turbines & Pumps', topics: (typeof UNIT2_TOPICS !== 'undefined') ? UNIT2_TOPICS : [] },
  { n: 3, title: 'Unit III', subtitle: 'Power Transmission, Stress & Strain', topics: (typeof UNIT3_TOPICS !== 'undefined') ? UNIT3_TOPICS : [] },
  { n: 4, title: 'Unit IV', subtitle: 'Manufacturing Systems & NC/CNC', topics: (typeof UNIT4_TOPICS !== 'undefined') ? UNIT4_TOPICS : [] }
];
ME.data.allTopics = ME.data.units.reduce((acc, u) => acc.concat(u.topics), []);
ME.data.topicById = {};
ME.data.allTopics.forEach(t => { ME.data.topicById[t.id] = t; });
ME.data.questions = (typeof QUESTION_BANK !== 'undefined') ? QUESTION_BANK : [];
ME.data.flashcards = (typeof FLASHCARDS !== 'undefined') ? FLASHCARDS : [];
ME.data.glossary = (typeof GLOSSARY !== 'undefined') ? GLOSSARY.slice().sort((a, b) => a.term.localeCompare(b.term)) : [];
ME.data.formulas = (typeof FORMULA_SHEET !== 'undefined') ? FORMULA_SHEET : [];
ME.data.syllabus = (typeof SYLLABUS !== 'undefined') ? SYLLABUS : [];

/* ---------------- LocalStorage store ---------------- */
(function () {
  const NS = 'me103h.';
  function safeParse(str, fallback) { try { return JSON.parse(str); } catch (e) { return fallback; } }

  ME.store.get = function (key, fallback) {
    const raw = localStorage.getItem(NS + key);
    return raw === null ? fallback : safeParse(raw, fallback);
  };
  ME.store.set = function (key, value) {
    try { localStorage.setItem(NS + key, JSON.stringify(value)); } catch (e) { /* storage full/unavailable */ }
  };
  ME.store.remove = function (key) { localStorage.removeItem(NS + key); };

  // Topic status: 'not-started' | 'learning' | 'practiced' | 'mastered'
  ME.store.getTopicStatus = function (id) { return ME.store.get('topic-status', {})[id] || 'not-started'; };
  ME.store.setTopicStatus = function (id, status) {
    const all = ME.store.get('topic-status', {});
    all[id] = status;
    ME.store.set('topic-status', all);
  };

  // Bookmarks
  ME.store.getBookmarks = function () { return ME.store.get('bookmarks', []); };
  ME.store.toggleBookmark = function (id) {
    let bm = ME.store.getBookmarks();
    if (bm.includes(id)) bm = bm.filter(x => x !== id); else bm.push(id);
    ME.store.set('bookmarks', bm);
    return bm.includes(id);
  };

  // Quiz attempts log: { qid, correct, ts, unit, topic }
  ME.store.logAttempt = function (entry) {
    const log = ME.store.get('attempt-log', []);
    log.push(Object.assign({ ts: Date.now() }, entry));
    if (log.length > 2000) log.splice(0, log.length - 2000);
    ME.store.set('attempt-log', log);
  };
  ME.store.getAttempts = function () { return ME.store.get('attempt-log', []); };

  // Mistake bank: keyed by question id -> {question, correct, given, explanation, topic, unit, date}
  ME.store.addMistake = function (m) {
    const bank = ME.store.get('mistakes', {});
    bank[m.id] = Object.assign({}, m, { date: new Date().toISOString() });
    ME.store.set('mistakes', bank);
  };
  ME.store.removeMistake = function (id) {
    const bank = ME.store.get('mistakes', {});
    delete bank[id];
    ME.store.set('mistakes', bank);
  };
  ME.store.getMistakes = function () { return ME.store.get('mistakes', {}); };

  // Mock exam results
  ME.store.addExamResult = function (r) {
    const list = ME.store.get('exam-results', []);
    list.push(Object.assign({ ts: Date.now() }, r));
    ME.store.set('exam-results', list);
  };
  ME.store.getExamResults = function () { return ME.store.get('exam-results', []); };

  // Flashcard progress: { front hash/id -> 'know'|'almost'|'dont' }
  ME.store.getFlashProgress = function () { return ME.store.get('flash-progress', {}); };
  ME.store.setFlashProgress = function (id, level) {
    const p = ME.store.getFlashProgress();
    p[id] = level;
    ME.store.set('flash-progress', p);
  };

  // Theme
  ME.store.getTheme = function () { return ME.store.get('theme', 'light'); };
  ME.store.setTheme = function (t) { ME.store.set('theme', t); };

  // Topic visit log (for "recently studied") — also counts as study activity
  ME.store.logVisit = function (id) {
    const v = ME.store.get('topic-visits', {});
    v[id] = Date.now();
    ME.store.set('topic-visits', v);
    ME.store.recordActivity();
  };
  ME.store.getVisits = function () { return ME.store.get('topic-visits', {}); };

  // Study streak: consecutive calendar days with at least one study action.
  ME.store.recordActivity = function () {
    const data = ME.store.get('streak', { current: 0, best: 0, last: null });
    const now = new Date();
    const todayKey = now.toISOString().slice(0, 10);
    const yesterdayKey = new Date(now.getTime() - 86400000).toISOString().slice(0, 10);
    if (data.last === todayKey) return data; // already counted today
    if (data.last === yesterdayKey) data.current += 1;
    else data.current = 1;
    data.last = todayKey;
    if (data.current > data.best) data.best = data.current;
    ME.store.set('streak', data);
    return data;
  };
  ME.store.streakStatus = function () {
    const data = ME.store.get('streak', { current: 0, best: 0, last: null });
    const todayKey = new Date().toISOString().slice(0, 10);
    const yesterdayKey = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const alive = data.last === todayKey || data.last === yesterdayKey;
    return { current: data.current, best: data.best, activeToday: data.last === todayKey, alive: alive };
  };
})();

/* ---------------- Helpers ---------------- */
ME.helpers.escapeHtml = function (str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, function (c) {
    return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
  });
};

ME.helpers.para = function (text) {
  if (!text) return '';
  return text.split(/\n\s*\n/).map(function (p) {
    return '<p>' + ME.helpers.escapeHtml(p.trim()).replace(/\n/g, '<br>') + '</p>';
  }).join('');
};

ME.helpers.unitTag = function (unit) {
  return '<span class="tag tag-unit' + unit + '">Unit ' + ['', 'I', 'II', 'III', 'IV'][unit] + '</span>';
};

ME.helpers.diffTag = function (diff) {
  const cls = 'tag-' + String(diff).toLowerCase().replace(/\s+/g, '-');
  return '<span class="tag ' + cls + '">' + ME.helpers.escapeHtml(diff) + '</span>';
};

ME.helpers.statusBadge = function (status) {
  const labelMap = { 'not-started': 'Not started', 'learning': 'Learning', 'practiced': 'Practiced', 'mastered': 'Mastered' };
  return '<span class="badge-status status-' + status + '">' + labelMap[status] + '</span>';
};

ME.helpers.qs = function (sel, root) { return (root || document).querySelector(sel); };
ME.helpers.qsa = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

ME.helpers.parseHash = function () {
  let hash = location.hash.replace(/^#\/?/, '');
  if (!hash) hash = 'home';
  const [pathAndAnchor, queryStr] = hash.split('?');
  const [path, anchor] = pathAndAnchor.split('#');
  const parts = path.split('/').filter(Boolean);
  const query = {};
  if (queryStr) {
    queryStr.split('&').forEach(function (pair) {
      const [k, v] = pair.split('=');
      if (k) query[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
  }
  return { route: parts[0] || 'home', parts: parts, query: query, anchor: anchor || '' };
};

ME.helpers.setActiveNav = function (route) {
  ME.helpers.qsa('#sidenav a.nav-link').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('data-route') === route);
  });
  ME.helpers.qsa('#bottom-nav a').forEach(function (a) {
    a.classList.toggle('active', a.getAttribute('data-route') === route);
  });
};

ME.helpers.topicCardsGrid = function (topics) {
  return '<div class="grid grid-2">' + topics.map(function (t) {
    const status = ME.store.getTopicStatus(t.id);
    return '<a class="card card-link" href="#/topic/' + t.id + '">' +
      '<div class="flex space-between gap-8" style="margin-bottom:6px;">' + ME.helpers.unitTag(t.unit) + ME.helpers.statusBadge(status) + '</div>' +
      '<h3>' + ME.helpers.escapeHtml(t.title) + '</h3>' +
      '<p class="muted">' + ME.helpers.escapeHtml(t.summary || '') + '</p>' +
      '</a>';
  }).join('') + '</div>';
};

/* ---------------- Layout chrome ---------------- */
ME.renderNav = function () {
  const groups = [
    { label: 'Study', links: [
      ['home', '🏠 Home', '#/home'],
      ['units', '📘 Study by Unit', '#/units'],
      ['checklist', '☑️ Master Checklist', '#/checklist']
    ]},
    { label: 'Practice', links: [
      ['questions', '❓ Question Bank', '#/questions'],
      ['flashcards', '🗂️ Flashcards', '#/flashcards'],
      ['exam', '📝 Mock Exam', '#/exam'],
      ['mistakes', '🎯 My Mistakes', '#/mistakes']
    ]},
    { label: 'Revise', links: [
      ['revision', '⏱️ Revision Modes', '#/revision'],
      ['formulas', '∑ Formula Sheet', '#/formulas'],
      ['glossary', '🔤 Glossary', '#/glossary']
    ]},
    { label: 'You', links: [
      ['progress', '📊 My Progress', '#/progress']
    ]}
  ];
  const nav = document.getElementById('sidenav');
  nav.innerHTML = groups.map(function (g) {
    return '<div class="nav-group-label">' + g.label + '</div>' +
      g.links.map(function (l) {
        return '<a class="nav-link" data-route="' + l[0] + '" href="' + l[2] + '">' + l[1] + '</a>';
      }).join('');
  }).join('');

  const bottom = document.getElementById('bottom-nav');
  const bnLinks = [
    ['home', '🏠', 'Home', '#/home'],
    ['units', '📘', 'Units', '#/units'],
    ['questions', '❓', 'Practice', '#/questions'],
    ['exam', '📝', 'Exam', '#/exam'],
    ['progress', '📊', 'Progress', '#/progress']
  ];
  bottom.innerHTML = bnLinks.map(function (l) {
    return '<a data-route="' + l[0] + '" href="' + l[3] + '"><span class="bn-icon">' + l[1] + '</span>' + l[2] + '</a>';
  }).join('');
};

ME.renderCrumbs = function (trail) {
  // trail: array of [label, href|null]
  return '<div class="crumbs">' + trail.map(function (t, i) {
    if (i === trail.length - 1 || !t[1]) return '<span>' + ME.helpers.escapeHtml(t[0]) + '</span>';
    return '<a href="' + t[1] + '">' + ME.helpers.escapeHtml(t[0]) + '</a> / ';
  }).join('') + '</div>';
};

/* ---------------- Router ---------------- */
ME.setView = function (html) {
  document.getElementById('view').innerHTML = html;
  window.scrollTo(0, 0);
  document.getElementById('sidenav').classList.remove('open');
  document.getElementById('scrim').classList.remove('show');
};

ME.render = function () {
  const parsed = ME.helpers.parseHash();
  const handler = ME.routes[parsed.route];
  ME.helpers.setActiveNav(parsed.route);
  if (handler) {
    try {
      handler(parsed);
    } catch (err) {
      console.error(err);
      ME.setView('<div class="empty-state"><h2>Something went wrong rendering this page.</h2><p class="muted">' + ME.helpers.escapeHtml(err.message) + '</p></div>');
    }
    if (parsed.anchor) {
      const el = document.getElementById(parsed.anchor);
      if (el) {
        el.scrollIntoView({ block: 'start' });
        window.scrollBy(0, -90); // leave breathing room below the sticky header
      }
    }
  } else {
    ME.setView('<div class="empty-state"><h2>Page not found</h2><p><a href="#/home">Go back home</a></p></div>');
  }
};

/* ---------------- Theme ---------------- */
ME.applyTheme = function (t) {
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
};

/* ---------------- Boot ---------------- */
ME.start = function () {
  ME.applyTheme(ME.store.getTheme());
  ME.renderNav();

  document.getElementById('theme-toggle').addEventListener('click', function () {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    ME.store.setTheme(next);
    ME.applyTheme(next);
  });

  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('sidenav').classList.toggle('open');
    document.getElementById('scrim').classList.toggle('show');
  });
  document.getElementById('scrim').addEventListener('click', function () {
    document.getElementById('sidenav').classList.remove('open');
    document.getElementById('scrim').classList.remove('show');
  });

  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const q = document.getElementById('search-box').value.trim();
    if (q) location.hash = '#/search?q=' + encodeURIComponent(q);
  });

  window.addEventListener('hashchange', ME.render);
  ME.render();
};
