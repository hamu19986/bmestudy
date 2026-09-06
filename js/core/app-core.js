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
// Multi-course data model. Every content object carries `course`
// (a COURSES id); topics/questions/flashcards also carry `unit` (1–4).
// BME = the original migrated platform; the other 8 subjects follow.
function concatDefined(pairs) {
  // pairs: [name, directReference] — the typeof guard resolves global
  // lexical (top-level const) bindings as plain script code, which works
  // in browsers, in Node's vm contexts and after any bundling.
  const out = [];
  pairs.forEach(function (pair) {
    if (pair[1] && pair[1].length) out.push.apply(out, pair[1]);
  });
  return out;
}

ME.data.units = [
  { n: 1, title: 'Unit I', subtitle: '', topics: (typeof BME_UNIT1_TOPICS !== 'undefined') ? BME_UNIT1_TOPICS : [] },
  { n: 2, title: 'Unit II', subtitle: '', topics: (typeof BME_UNIT2_TOPICS !== 'undefined') ? BME_UNIT2_TOPICS : [] },
  { n: 3, title: 'Unit III', subtitle: '', topics: (typeof BME_UNIT3_TOPICS !== 'undefined') ? BME_UNIT3_TOPICS : [] },
  { n: 4, title: 'Unit IV', subtitle: '', topics: (typeof BME_UNIT4_TOPICS !== 'undefined') ? BME_UNIT4_TOPICS : [] }
];
ME.data.questions = concatDefined([
  ['QUESTION_BANK', typeof QUESTION_BANK !== 'undefined' ? QUESTION_BANK : null],
  ['MATHS_QUESTIONS', typeof MATHS_QUESTIONS !== 'undefined' ? MATHS_QUESTIONS : null],
  ['PHY_QUESTIONS', typeof PHY_QUESTIONS !== 'undefined' ? PHY_QUESTIONS : null],
  ['PPS_QUESTIONS', typeof PPS_QUESTIONS !== 'undefined' ? PPS_QUESTIONS : null],
  ['EGD_QUESTIONS', typeof EGD_QUESTIONS !== 'undefined' ? EGD_QUESTIONS : null],
  ['ENG_QUESTIONS', typeof ENG_QUESTIONS !== 'undefined' ? ENG_QUESTIONS : null],
  ['PPSLAB_QUESTIONS', typeof PPSLAB_QUESTIONS !== 'undefined' ? PPSLAB_QUESTIONS : null],
  ['PHYLAB_QUESTIONS', typeof PHYLAB_QUESTIONS !== 'undefined' ? PHYLAB_QUESTIONS : null],
  ['ENGLAB_QUESTIONS', typeof ENGLAB_QUESTIONS !== 'undefined' ? ENGLAB_QUESTIONS : null]
]);
ME.data.flashcards = concatDefined([
  ['FLASHCARDS', typeof FLASHCARDS !== 'undefined' ? FLASHCARDS : null],
  ['MATHS_FLASHCARDS', typeof MATHS_FLASHCARDS !== 'undefined' ? MATHS_FLASHCARDS : null],
  ['PHY_FLASHCARDS', typeof PHY_FLASHCARDS !== 'undefined' ? PHY_FLASHCARDS : null],
  ['PPS_FLASHCARDS', typeof PPS_FLASHCARDS !== 'undefined' ? PPS_FLASHCARDS : null],
  ['EGD_FLASHCARDS', typeof EGD_FLASHCARDS !== 'undefined' ? EGD_FLASHCARDS : null],
  ['ENG_FLASHCARDS', typeof ENG_FLASHCARDS !== 'undefined' ? ENG_FLASHCARDS : null],
  ['PPSLAB_FLASHCARDS', typeof PPSLAB_FLASHCARDS !== 'undefined' ? PPSLAB_FLASHCARDS : null],
  ['PHYLAB_FLASHCARDS', typeof PHYLAB_FLASHCARDS !== 'undefined' ? PHYLAB_FLASHCARDS : null],
  ['ENGLAB_FLASHCARDS', typeof ENGLAB_FLASHCARDS !== 'undefined' ? ENGLAB_FLASHCARDS : null]
]);
ME.data.formulas = concatDefined([
  ['FORMULA_SHEET', typeof FORMULA_SHEET !== 'undefined' ? FORMULA_SHEET : null],
  ['MATHS_FORMULA_SHEET', typeof MATHS_FORMULA_SHEET !== 'undefined' ? MATHS_FORMULA_SHEET : null],
  ['PHY_FORMULA_SHEET', typeof PHY_FORMULA_SHEET !== 'undefined' ? PHY_FORMULA_SHEET : null]
]);
const GLOSSARY_ALL = concatDefined([
  ['GLOSSARY', typeof GLOSSARY !== 'undefined' ? GLOSSARY : null],
  ['MATHS_GLOSSARY', typeof MATHS_GLOSSARY !== 'undefined' ? MATHS_GLOSSARY : null],
  ['PHY_GLOSSARY', typeof PHY_GLOSSARY !== 'undefined' ? PHY_GLOSSARY : null],
  ['PPS_GLOSSARY', typeof PPS_GLOSSARY !== 'undefined' ? PPS_GLOSSARY : null]
]);
ME.data.glossary = GLOSSARY_ALL.slice().sort((a, b) => a.term.localeCompare(b.term));
ME.data.syllabus = (typeof SYLLABUS !== 'undefined') ? SYLLABUS : [];

const ALL_TOPIC_SOURCES = [
  typeof BME_UNIT1_TOPICS !== 'undefined' ? BME_UNIT1_TOPICS : null,
  typeof BME_UNIT2_TOPICS !== 'undefined' ? BME_UNIT2_TOPICS : null,
  typeof BME_UNIT3_TOPICS !== 'undefined' ? BME_UNIT3_TOPICS : null,
  typeof BME_UNIT4_TOPICS !== 'undefined' ? BME_UNIT4_TOPICS : null,
  typeof MATHS_UNIT1_TOPICS !== 'undefined' ? MATHS_UNIT1_TOPICS : null,
  typeof MATHS_UNIT2_TOPICS !== 'undefined' ? MATHS_UNIT2_TOPICS : null,
  typeof MATHS_UNIT3_TOPICS !== 'undefined' ? MATHS_UNIT3_TOPICS : null,
  typeof MATHS_UNIT4_TOPICS !== 'undefined' ? MATHS_UNIT4_TOPICS : null,
  typeof PHY_UNIT1_TOPICS !== 'undefined' ? PHY_UNIT1_TOPICS : null,
  typeof PHY_UNIT2_TOPICS !== 'undefined' ? PHY_UNIT2_TOPICS : null,
  typeof PHY_UNIT3_TOPICS !== 'undefined' ? PHY_UNIT3_TOPICS : null,
  typeof PHY_UNIT4_TOPICS !== 'undefined' ? PHY_UNIT4_TOPICS : null,
  typeof PPS_UNIT1_TOPICS !== 'undefined' ? PPS_UNIT1_TOPICS : null,
  typeof PPS_UNIT2_TOPICS !== 'undefined' ? PPS_UNIT2_TOPICS : null,
  typeof PPS_UNIT3_TOPICS !== 'undefined' ? PPS_UNIT3_TOPICS : null,
  typeof PPS_UNIT4_TOPICS !== 'undefined' ? PPS_UNIT4_TOPICS : null,
  typeof EGD_UNIT1_TOPICS !== 'undefined' ? EGD_UNIT1_TOPICS : null,
  typeof EGD_UNIT2_TOPICS !== 'undefined' ? EGD_UNIT2_TOPICS : null,
  typeof EGD_UNIT3_TOPICS !== 'undefined' ? EGD_UNIT3_TOPICS : null,
  typeof EGD_UNIT4_TOPICS !== 'undefined' ? EGD_UNIT4_TOPICS : null,
  typeof ENG_UNIT1_TOPICS !== 'undefined' ? ENG_UNIT1_TOPICS : null,
  typeof ENG_UNIT2_TOPICS !== 'undefined' ? ENG_UNIT2_TOPICS : null,
  typeof ENG_UNIT3_TOPICS !== 'undefined' ? ENG_UNIT3_TOPICS : null,
  typeof ENG_UNIT4_TOPICS !== 'undefined' ? ENG_UNIT4_TOPICS : null,
  typeof PPSLAB_EXPERIMENTS1 !== 'undefined' ? PPSLAB_EXPERIMENTS1 : null,
  typeof PPSLAB_EXPERIMENTS2 !== 'undefined' ? PPSLAB_EXPERIMENTS2 : null,
  typeof PPSLAB_EXPERIMENTS3 !== 'undefined' ? PPSLAB_EXPERIMENTS3 : null,
  typeof PPSLAB_EXPERIMENTS4 !== 'undefined' ? PPSLAB_EXPERIMENTS4 : null,
  typeof PHYLAB_EXPERIMENTS1 !== 'undefined' ? PHYLAB_EXPERIMENTS1 : null,
  typeof PHYLAB_EXPERIMENTS2 !== 'undefined' ? PHYLAB_EXPERIMENTS2 : null,
  typeof PHYLAB_EXPERIMENTS3 !== 'undefined' ? PHYLAB_EXPERIMENTS3 : null,
  typeof PHYLAB_EXPERIMENTS4 !== 'undefined' ? PHYLAB_EXPERIMENTS4 : null,
  typeof ENGLAB_MODULES1 !== 'undefined' ? ENGLAB_MODULES1 : null,
  typeof ENGLAB_MODULES2 !== 'undefined' ? ENGLAB_MODULES2 : null,
  typeof ENGLAB_MODULES3 !== 'undefined' ? ENGLAB_MODULES3 : null,
  typeof ENGLAB_MODULES4 !== 'undefined' ? ENGLAB_MODULES4 : null
];

let allTopicArrays = [];
ALL_TOPIC_SOURCES.forEach(function (arr) { if (arr && arr.length) allTopicArrays = allTopicArrays.concat(arr); });
(function () {
  const topics = allTopicArrays;
  // Group everything by course id, preserving unit order.
  const byCourse = {};
  topics.forEach(function (t) {
    const cid = t.course || 'bme';
    (byCourse[cid] = byCourse[cid] || []).push(t);
  });
  ME.data.topicsByCourse = {};
  Object.keys(byCourse).forEach(function (cid) {
    const units = [1, 2, 3, 4].map(function (n) {
      const meta = (typeof COURSE_BY_ID !== 'undefined' && COURSE_BY_ID[cid] && COURSE_BY_ID[cid].units) ? COURSE_BY_ID[cid].units[n - 1] : null;
      return { n: n, title: 'Unit ' + ['', 'I', 'II', 'III', 'IV'][n], subtitle: meta ? meta.subtitle : '', topics: byCourse[cid].filter(function (t) { return t.unit === n; }) };
    });
    ME.data.topicsByCourse[cid] = { units: units, allTopics: units.reduce(function (acc, u) { return acc.concat(u.topics); }, []) };
  });
})();

ME.data.allCourses = (typeof COURSES !== 'undefined') ? COURSES : [];
ME.data.courseById = (typeof COURSE_BY_ID !== 'undefined') ? COURSE_BY_ID : {};
ME.data.allTopics = [];
Object.keys(ME.data.topicsByCourse).forEach(function (cid) { ME.data.allTopics = ME.data.allTopics.concat(ME.data.topicsByCourse[cid].allTopics); });
ME.data.topicById = {};
ME.data.allTopics.forEach(t => { ME.data.topicById[t.id] = t; });
ME.data.courseOfTopic = {};
ME.data.allTopics.forEach(function (t) { ME.data.courseOfTopic[t.id] = t.course || 'bme'; });

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
  // Anchor comes AFTER the query string: #/route?query#anchor.
  // Split the trailing anchor off first so it never contaminates query values.
  let anchor = '';
  const hashIdx = hash.lastIndexOf('#');
  if (hashIdx !== -1) {
    anchor = decodeURIComponent(hash.slice(hashIdx + 1));
    hash = hash.slice(0, hashIdx);
  }
  const [path, queryStr] = hash.split('?');
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

/* ---------------- Toast notifications ---------------- */
ME.toast = function (msg, kind) {
  const root = document.getElementById('toast-root');
  if (!root) return; // stub environments / very old browsers
  const el = document.createElement('div');
  el.className = 'toast toast-' + (kind || 'info');
  el.setAttribute('role', 'status');
  el.textContent = msg;
  root.appendChild(el);
  // Trigger the slide-in on the next frame so the transition runs.
  window.setTimeout(function () { el.classList.add('show'); }, 20);
  window.setTimeout(function () {
    el.classList.remove('show');
    window.setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 300);
  }, 2600);
};

/* ---------------- Exam-score trend chart (inline SVG) ----------------
   Draws a lightweight line chart of mock-exam percentages. Pure SVG +
   CSS variables so it works offline, prints cleanly and re-themes with
   the light/dark toggle. Falls back to '' when there's no data.
----------------------------------------------------------------------- */
ME.renderExamChart = function (results, height) {
  if (!results || results.length < 2) return '';
  const W = 560, H = height || 150, PAD_L = 30, PAD_R = 10, PAD_T = 12, PAD_B = 20;
  const data = results.slice(-12); // last 12 exams keeps the chart readable
  const stepX = (W - PAD_L - PAD_R) / (data.length - 1);
  function x(i) { return PAD_L + i * stepX; }
  function y(pct) { return PAD_T + (1 - pct / 100) * (H - PAD_T - PAD_B); }

  const pts = data.map(function (r, i) { return [x(i), y(r.percent), r]; });
  const path = pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
  const area = path + ' L' + pts[pts.length - 1][0].toFixed(1) + ',' + (H - PAD_B) + ' L' + PAD_L + ',' + (H - PAD_B) + ' Z';
  const avg = Math.round(data.reduce(function (s, r) { return s + r.percent; }, 0) / data.length);

  return `<svg viewBox="0 0 ${W} ${H}" class="exam-chart" role="img" aria-label="Mock exam score trend, average ${avg} percent" preserveAspectRatio="xMidYMid meet">
    <line x1="${PAD_L}" y1="${y(100)}" x2="${W - PAD_R}" y2="${y(100)}" class="ec-grid" />
    <line x1="${PAD_L}" y1="${y(50)}" x2="${W - PAD_R}" y2="${y(50)}" class="ec-grid" />
    <line x1="${PAD_L}" y1="${y(0)}" x2="${W - PAD_R}" y2="${y(0)}" class="ec-axis" />
    <text x="2" y="${y(100) + 4}" class="ec-label">100</text>
    <text x="6" y="${y(50) + 4}" class="ec-label">50</text>
    <text x="10" y="${y(0) + 4}" class="ec-label">0</text>
    <path d="${area}" class="ec-area" />
    <path d="${path}" class="ec-line" />
    ${pts.map(function (p) {
      return `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.5" class="ec-dot${p[2].percent >= 50 ? '' : ' ec-dot-low'}"><title>${new Date(p[2].ts).toLocaleDateString()}: ${p[2].percent}%</title></circle>`;
    }).join('')}
    <text x="${PAD_L}" y="${H - 4}" class="ec-label">${data.length} exam${data.length === 1 ? '' : 's'} · avg ${avg}%</text>
  </svg>`;
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

/* ============================================================
   MULTI-COURSE HELPERS
   Every page uses these so no subject id is hard-coded in page code.
   ============================================================ */

// Full course record, defaulting safely for legacy BME data.
ME.helpers.courseOf = function (topicOrId) {
  const id = typeof topicOrId === 'string' ? (ME.data.courseOfTopic[topicOrId] || 'bme') : (topicOrId.course || 'bme');
  return ME.data.courseById[id] || { id: id, shortName: id.toUpperCase(), name: id, icon: '📘', accent: '' };
};

ME.helpers.courseTag = function (courseOrId) {
  const c = typeof courseOrId === 'string' ? ME.data.courseById[courseOrId] : courseOrId;
  if (!c) return '';
  return '<span class="tag tag-course ' + (c.accent || '') + '">' + (c.icon || '') + ' ' + ME.helpers.escapeHtml(c.shortName || c.name || c.id) + '</span>';
};

ME.helpers.unitRoman = function (n) { return ['', 'I', 'II', 'III', 'IV'][n] || n; };

ME.helpers.cardKey = function (courseId, unit) { return courseId + ':u' + unit; };

ME.helpers.parseCardKey = function (key) {
  const m = /^([a-z-]+):u(\d)$/.exec(String(key || ''));
  return m ? { course: m[1], unit: parseInt(m[2], 10) } : null;
};

ME.helpers.unitSubtitle = function (courseId, n) {
  const c = ME.data.courseById[courseId];
  return c && c.units && c.units[n - 1] ? c.units[n - 1].subtitle : '';
};

// Topics of one course+unit; falls back to legacy unit-number matching.
ME.helpers.topicsFor = function (courseId, n) {
  const pack = ME.data.topicsByCourse[courseId];
  if (pack) return pack.units[n - 1].topics;
  return ME.data.allTopics.filter(function (t) { return (t.course || 'bme') === courseId && t.unit === n; });
};

ME.helpers.topicsForCourse = function (courseId) {
  const pack = ME.data.topicsByCourse[courseId];
  if (pack) return pack.allTopics;
  return ME.data.allTopics.filter(function (t) { return (t.course || 'bme') === courseId; });
};

ME.helpers.unitCompletionPct = function (courseId, n) {
  const topics = ME.helpers.topicsFor(courseId, n);
  if (!topics.length) return 0;
  const weight = { 'not-started': 0, 'learning': 0.4, 'practiced': 0.75, 'mastered': 1 };
  const sum = topics.reduce(function (acc, t) { return acc + weight[ME.store.getTopicStatus(t.id)]; }, 0);
  return Math.round((sum / topics.length) * 100);
};

ME.helpers.courseCompletionPct = function (courseId) {
  const topics = ME.helpers.topicsForCourse(courseId);
  if (!topics.length) return 0;
  const weight = { 'not-started': 0, 'learning': 0.4, 'practiced': 0.75, 'mastered': 1 };
  const sum = topics.reduce(function (acc, t) { return acc + weight[ME.store.getTopicStatus(t.id)]; }, 0);
  return Math.round((sum / topics.length) * 100);
};

ME.helpers.bar = function (pct) {
  return '<div class="progress-bar"><span style="width:' + Math.max(0, Math.min(100, pct)) + '%"></span></div>';
};

// Build the exam-pattern note for a course straight from its config.
ME.helpers.examPatternNote = function (courseId) {
  const c = ME.data.courseById[courseId];
  if (!c) return '';
  const e = c.exam || {};
  return (c.shortName || c.name) + ' — ' + (e.totalMarks || '?') + ' marks · ' + (e.durationMinutes || '?') + ' min. ' + (e.patternNote || '') +
    ' Internal ' + (c.internalMarks || 0) + ' + external ' + (c.externalMarks || 0) + ' = ' + ((c.internalMarks || 0) + (c.externalMarks || 0)) + ' total.';
};

/* ---------------- Layout chrome ---------------- */
ME.renderNav = function () {
  const groups = [
    { label: 'Study', links: [
      ['home', '🏠 Home', '#/home'],
      ['semester', '🎓 Semester Map', '#/semester'],
      ['units', '📘 All Subjects', '#/units'],
      ['checklist', '☑️ Master Checklist', '#/checklist']
    ]},
    { label: 'Practice', links: [
      ['questions', '❓ Question Bank', '#/questions'],
      ['flashcards', '🗂️ Flashcards', '#/flashcards'],
      ['exam', '📝 Mock Exams', '#/exam'],
      ['mistakes', '🎯 My Mistakes', '#/mistakes']
    ]},
    { label: 'Revise', links: [
      ['revision', '⏱️ Revision Modes', '#/revision'],
      ['formulas', '∑ Formula Sheet', '#/formulas'],
      ['glossary', '🔤 Glossary', '#/glossary']
    ]},
    { label: 'You', links: [
      ['progress', '📊 My Progress', '#/progress'],
      ['plan', '🗓️ Study Plan', '#/plan']
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
    ['plan', '🗓️', 'Plan', '#/plan'],
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
ME.THEMES = ['classic', 'dark', 'swiss', 'editorial', 'bento', 'glass', 'neobrutalism', 'cyberpunk'];

ME.applyTheme = function (t) {
  if (ME.THEMES.indexOf(t) === -1) t = 'classic';
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  const sel = document.getElementById('theme-select');
  if (sel) sel.value = t;
};

ME.setTheme = function (t) {
  ME.store.setTheme(t);
  ME.applyTheme(t);
};

/* ---------------- Boot ---------------- */
ME.start = function () {
  ME.applyTheme(ME.store.getTheme());
  ME.renderNav();

  document.getElementById('theme-toggle').addEventListener('click', function () {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'classic' : 'dark';
    ME.setTheme(next);
  });

  const themeSelect = document.getElementById('theme-select');
  if (themeSelect) {
    themeSelect.addEventListener('change', function () {
      ME.setTheme(themeSelect.value);
      ME.toast('Theme: ' + themeSelect.options[themeSelect.selectedIndex].text);
    });
  }

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
