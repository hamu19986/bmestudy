/* Smoke test: load the entire multi-subject app with a stubbed DOM and
   render every route, reporting any runtime error. Run: npm run smoke */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');

// ---------- Minimal DOM / browser stubs ----------
function makeEl() {
  return {
    innerHTML: '', textContent: '', value: '', style: {},
    setAttribute() {}, getAttribute() { return null; },
    addEventListener() {}, removeEventListener() {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    querySelector() { return makeEl(); },
    querySelectorAll() { return []; },
    focus() {}, setSelectionRange() {}, appendChild() {}, remove() {},
    closest() { return makeEl(); }
  };
}
const els = {};
global.window = { addEventListener() {}, removeEventListener() {}, scrollTo() {}, scrollBy() {} };
global.document = {
  getElementById(id) { if (!els[id]) els[id] = makeEl(); return els[id]; },
  querySelector() { return makeEl(); },
  querySelectorAll() { return []; },
  documentElement: { setAttribute() {}, getAttribute() { return 'light'; } }
};
global.location = { hash: '#/home' };
const storeMap = {};
global.localStorage = {
  getItem(k) { return Object.prototype.hasOwnProperty.call(storeMap, k) ? storeMap[k] : null; },
  setItem(k, v) { storeMap[k] = String(v); },
  removeItem(k) { delete storeMap[k]; }
};
global.confirm = () => true;
global.navigator = {};

// ---------- Shared context (like browser <script> tags) ----------
const ctx = vm.createContext({
  window: global.window, document: global.document, location: global.location,
  localStorage: global.localStorage, confirm: global.confirm, navigator: global.navigator,
  console: console, Date: Date, Math: Math, JSON: JSON, Set: Set, Map: Map, Array: Array,
  Object: Object, String: String, Number: Number, Boolean: Boolean, Function: Function,
  parseInt: parseInt, parseFloat: parseFloat, isNaN: isNaN,
  encodeURIComponent: encodeURIComponent, decodeURIComponent: decodeURIComponent,
  setInterval: setInterval, clearInterval: clearInterval, setTimeout: setTimeout, clearTimeout: clearTimeout,
  RegExp: RegExp, Error: Error
});
// Scripts declare top-level `const` bindings; make them shared inside the context.
const shared = {};
ctx.globalThis = ctx;

// ---------- Load scripts (mirrors index.html order) ----------
const DATA_FILES = [
  'js/data/courses.js',
  'js/data/bme/unit1.js', 'js/data/bme/unit2.js', 'js/data/bme/unit3.js', 'js/data/bme/unit4.js',
  'js/data/bme/questions.js', 'js/data/bme/flashcards.js', 'js/data/bme/formulas.js', 'js/data/bme/glossary.js',
  'js/data/maths/topics.js', 'js/data/maths/questions.js', 'js/data/maths/flashcards.js', 'js/data/maths/formulas.js', 'js/data/maths/glossary.js',
  'js/data/physics/topics.js', 'js/data/physics/questions.js', 'js/data/physics/flashcards.js', 'js/data/physics/formulas.js', 'js/data/physics/glossary.js',
  'js/data/pps/topics.js', 'js/data/pps/questions.js', 'js/data/pps/flashcards.js', 'js/data/pps/glossary.js',
  'js/data/egd/topics.js', 'js/data/egd/questions.js', 'js/data/egd/flashcards.js',
  'js/data/english/topics.js', 'js/data/english/questions.js', 'js/data/english/flashcards.js',
  'js/data/pps-lab/experiments.js', 'js/data/pps-lab/questions.js', 'js/data/pps-lab/flashcards.js',
  'js/data/physics-lab/experiments.js', 'js/data/physics-lab/questions.js', 'js/data/physics-lab/flashcards.js',
  'js/data/english-lab/modules.js', 'js/data/english-lab/questions.js', 'js/data/english-lab/flashcards.js',
  'js/data/syllabus.js'
];
const CORE_FILES = ['js/core/app-core.js', 'js/core/progress-calc.js', 'js/core/study-plan.js'];
const PAGE_FILES = ['js/pages/home.js', 'js/pages/semester.js', 'js/pages/units.js', 'js/pages/questions-page.js',
  'js/pages/flashcards-page.js', 'js/pages/formulas-page.js', 'js/pages/exam-page.js', 'js/pages/revision-page.js',
  'js/pages/checklist-page.js', 'js/pages/mistakes-page.js', 'js/pages/progress-page.js', 'js/pages/plan-page.js',
  'js/pages/search-page.js', 'js/pages/glossary-page.js'];

function load(file) {
  const code = fs.readFileSync(path.join(ROOT, file), 'utf8');
  vm.runInContext(code, ctx, { filename: file });
}
[...DATA_FILES, ...CORE_FILES, ...PAGE_FILES].forEach(load);

// ---------- Render every route ----------
let lastHtml = '';
const ME = vm.runInContext('ME', ctx);
ME.setView = function (html) { lastHtml = html; };

const COURSE_IDS = ME.data.allCourses.map(function (c) { return c.id; });

const routes = [
  ['home', {}],
  ['semester', {}],
  ['units', {}],
  ['unit', { parts: ['unit', '1'] }],
  ['topic', { parts: ['topic', 'u1-lathe'] }],
  ['topic', { parts: ['topic', 'u1-planer'] }],
  ['topic', { parts: ['topic', 'u1-thermo-numericals'] }],
  ['topic', { parts: ['topic', 'nope'] }],
  ['questions', { query: {} }],
  ['questions', { query: { course: 'bme', unit: '1' } }],
  ['flashcards', { query: {} }],
  ['flashcards', { query: { review: 'weak', course: 'bme', unit: '3' } }],
  ['formulas', { query: {} }],
  ['formulas', { query: { text: 'cop' } }],
  ['exam', {}],
  ['exam', { parts: ['exam', 'take'] }],
  ['revision', { parts: ['revision'] }],
  ['revision', { parts: ['revision', '15min'] }],
  ['revision', { parts: ['revision', '1hr'] }],
  ['revision', { parts: ['revision', '3hr'] }],
  ['revision', { parts: ['revision', 'examEve'] }],
  ['revision', { parts: ['revision', '7day'] }],
  ['checklist', {}],
  ['checklist', { query: { course: 'bme' } }],
  ['mistakes', {}],
  ['progress', {}],
  ['plan', {}],
  ['search', { query: { q: 'lathe' } }],
  ['search', { query: { q: 'entropy' } }],
  ['glossary', { query: {} }],
  ['glossary', { query: { text: 'law' } }],
  ['diagram', { parts: ['diagram', 'u1-lathe'] }],
  ['diagram', { parts: ['diagram', 'nope'] }]
];

// One route pair per subject: subject page + its unit-1 page + exam landing.
COURSE_IDS.forEach(function (cid) {
  routes.push(['subject', { parts: ['subject', cid] }]);
  routes.push(['subjectUnit', { parts: ['subject', cid, 'unit', '1'] }]);
  routes.push(['exam', { parts: ['exam', cid] }]);
});
// A topic id from every course that has content.
COURSE_IDS.forEach(function (cid) {
  const t = ME.helpers.topicsForCourse(cid)[0];
  if (t) routes.push(['topic', { parts: ['topic', t.id] }]);
});

let failures = 0;
routes.forEach(function (r) {
  const name = r[0];
  const parsed = Object.assign({ route: name, parts: [], query: {}, anchor: '' }, r[1]);
  try {
    ME.routes[name](parsed);
    const htmlOk = typeof lastHtml === 'string' && (lastHtml.length > 50 || lastHtml.indexOf('empty-state') !== -1);
    console.log((htmlOk ? '  ok  ' : '  WARN') + ' /' + (parsed.parts.length ? parsed.parts.join('/') : name) + '  (' + lastHtml.length + ' chars)');
    if (!htmlOk) failures++;
  } catch (err) {
    failures++;
    console.log('  FAIL /' + (parsed.parts.length ? parsed.parts.join('/') : name) + ' — ' + err.message);
  }
});

// Verify key content actually renders on a rich BME topic page.
ME.routes.topic({ route: 'topic', parts: ['topic', 'u1-planer'], query: {}, anchor: '' });
const checks = [
  ['comparison table rendered', lastHtml.indexOf('Shaper vs Planer') !== -1],
  ['applications section rendered', lastHtml.indexOf('Where it is used (applications)') !== -1],
  ['deeper dive rendered', lastHtml.indexOf('Deeper dive / extra notes') !== -1],
  ['prev/next nav rendered', lastHtml.indexOf('topic-nav') !== -1],
  ['course tag rendered', lastHtml.indexOf('tag-course') !== -1]
];
checks.forEach(function (c) {
  console.log((c[1] ? '  ok  ' : '  FAIL') + ' check: ' + c[0]);
  if (!c[1]) failures++;
});

// Data aggregation sanity
const agg = [
  ['9 courses registered', ME.data.allCourses.length === 9],
  ['BME topics aggregated', ME.helpers.topicsForCourse('bme').length > 0],
  ['topic index built', Object.keys(ME.data.topicById).length > 0]
];
agg.forEach(function (c) {
  console.log((c[1] ? '  ok  ' : '  FAIL') + ' check: ' + c[0]);
  if (!c[1]) failures++;
});

console.log(failures === 0 ? '\nSMOKE TEST PASSED' : '\nSMOKE TEST FAILED (' + failures + ' issue(s))');
process.exit(failures === 0 ? 0 : 1);
