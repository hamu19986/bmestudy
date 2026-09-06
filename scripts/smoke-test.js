/* Throwaway smoke test: load the entire app with a stubbed DOM and
   render every route, reporting any runtime error. */
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
global.window = { addEventListener() {}, scrollTo() {}, scrollBy() {} };
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
  console: console, Date: Date, Math: Math, JSON: JSON, Set: Set, Array: Array,
  Object: Object, String: String, Number: Number, parseInt: parseInt, parseFloat: parseFloat,
  isNaN: isNaN, encodeURIComponent: encodeURIComponent, decodeURIComponent: decodeURIComponent,
  setInterval: setInterval, clearInterval: clearInterval, setTimeout: setTimeout, clearTimeout: clearTimeout
});

// ---------- Load scripts ----------
function load(file) {
  const code = fs.readFileSync(path.join(ROOT, file), 'utf8');
  vm.runInContext(code, ctx, { filename: file });
}
['js/data/unit1.js','js/data/unit2.js','js/data/unit3.js','js/data/unit4.js',
 'js/data/questions.js','js/data/flashcards.js','js/data/formulas.js','js/data/glossary.js','js/data/syllabus.js'].forEach(load);
['js/core/app-core.js','js/core/progress-calc.js'].forEach(load);
['js/pages/home.js','js/pages/units.js','js/pages/questions-page.js','js/pages/flashcards-page.js',
 'js/pages/formulas-page.js','js/pages/exam-page.js','js/pages/revision-page.js','js/pages/checklist-page.js',
 'js/pages/mistakes-page.js','js/pages/progress-page.js','js/pages/search-page.js','js/pages/glossary-page.js'].forEach(load);

// ---------- Render every route ----------
let lastHtml = '';
const ME = vm.runInContext('ME', ctx);
ME.setView = function (html) { lastHtml = html; };

const routes = [
  ['home', {}],
  ['units', {}],
  ['unit', { parts: ['unit', '1'] }],
  ['unit', { parts: ['unit', '4'] }],
  ['topic', { parts: ['topic', 'u1-lathe'] }],
  ['topic', { parts: ['topic', 'u1-planer'] }],             // comparisonTable + applications + extraNotes
  ['topic', { parts: ['topic', 'u1-thermo-basics'] }],      // comparisonTable + extraNotes
  ['topic', { parts: ['topic', 'u1-thermo-numericals'] }],  // diagram: null, last topic (prev/next nav)
  ['topic', { parts: ['topic', 'u4-nc-vs-cnc'] }],          // comparisonTable + applications + extraNotes
  ['topic', { parts: ['topic', 'u1-intro-machinetools'] }], // first topic (prev/next nav edge)
  ['topic', { parts: ['topic', 'nope'] }],
  ['questions', { query: {} }],
  ['questions', { query: { unit: '1' } }],
  ['flashcards', { query: {} }],
  ['flashcards', { query: { review: 'unseen' } }],
  ['flashcards', { query: { review: 'weak', unit: '3' } }],
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
  ['mistakes', {}],
  ['progress', {}],
  ['search', { query: { q: 'lathe' } }],
  ['search', { query: { q: 'entropy' } }],
  ['glossary', { query: {} }],
  ['glossary', { query: { text: 'law' } }],
  ['diagram', { parts: ['diagram', 'u1-lathe'] }],
  ['diagram', { parts: ['diagram', 'u1-shaper'] }]          // svg null -> empty state
];

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

// Verify the new topic sections actually render on a topic with comparisonTable
ME.routes.topic({ route: 'topic', parts: ['topic', 'u1-planer'], query: {}, anchor: '' });
const checks = [
  ['comparison table rendered', lastHtml.indexOf('Shaper vs Planer') !== -1],
  ['applications section rendered', lastHtml.indexOf('Where it is used (applications)') !== -1],
  ['deeper dive rendered', lastHtml.indexOf('Deeper dive / extra notes') !== -1],
  ['prev/next nav rendered', lastHtml.indexOf('topic-nav') !== -1]
];
checks.forEach(function (c) {
  console.log((c[1] ? '  ok  ' : '  FAIL') + ' check: ' + c[0]);
  if (!c[1]) failures++;
});

console.log(failures === 0 ? '\nSMOKE TEST PASSED' : '\nSMOKE TEST FAILED (' + failures + ' issue(s))');
process.exit(failures === 0 ? 0 : 1);