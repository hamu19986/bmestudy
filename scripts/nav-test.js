/* Navigation test: exercises the REAL router path (hash -> parseHash -> render)
   for common journeys, then crawls rendered pages and verifies every internal
   href resolves to a registered route + existing topic/subject.
   Run: npm run navtest */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = path.join(__dirname, '..');

/* ---------- Minimal DOM stubs ---------- */
function makeEl() {
  return {
    innerHTML: '', textContent: '', value: '', style: {},
    setAttribute() {}, getAttribute() { return null; },
    addEventListener() {}, removeEventListener() {},
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    querySelector() { return makeEl(); },
    querySelectorAll() { return []; },
    focus() {}, setSelectionRange() {}, scrollIntoView() {},
    appendChild() {}, remove() {}, parentNode: null, closest() { return makeEl(); }
  };
}
const els = {};
global.window = { addEventListener() {}, removeEventListener() {}, scrollTo() {}, scrollBy() {} };
global.document = {
  getElementById(id) { if (!els[id]) els[id] = makeEl(); return els[id]; },
  querySelector() { return makeEl(); },
  querySelectorAll() { return []; },
  documentElement: { setAttribute() {}, getAttribute() { return 'classic'; } },
  createElement() { return makeEl(); }
};
global.location = { hash: '#/home' };
global.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
global.confirm = () => true;
global.navigator = {};

const ctx = vm.createContext({
  window: global.window, document: global.document, location: global.location,
  localStorage: global.localStorage, confirm: global.confirm, navigator: global.navigator,
  console, Date, Math, JSON, Set, Map, Array, Object, String, Number, Boolean, Function,
  parseInt, parseFloat, isNaN, encodeURIComponent, decodeURIComponent,
  setInterval, clearInterval, setTimeout, clearTimeout, RegExp, Error
});
ctx.globalThis = ctx;

fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8')
  .match(/js\/[a-z0-9/-]*\.js/g)
  .forEach(function (f) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
  });

const ME = vm.runInContext('ME', ctx);
let html = '';
ME.setView = function (h) { html = h; };

let failures = 0;
function fail(msg) { failures++; console.log('  FAIL ' + msg); }
function ok(msg) { console.log('  ok   ' + msg); }

/* ---------- Part 1: journey tests through the real render path ---------- */
function journey(label, hash, expect) {
  global.location.hash = hash;
  html = '';
  try {
    ME.render();
    // Redirect routes (e.g. legacy #/unit/N) only set location.hash; in a
    // browser that fires hashchange -> render again. Emulate that here.
    if (!html) ME.render();
    const pass = expect(html || '');
    if (pass) ok(label); else fail(label);
  } catch (e) { fail(label + ' threw: ' + e.message); }
}

journey('empty hash renders home', '#/', function (h) { return h.indexOf('hero') !== -1; });
journey('missing hash renders home', '', function (h) { return h.indexOf('hero') !== -1; });
journey('subject page', '#/subject/bme', function (h) { return h.indexOf('Mechanical') !== -1; });
journey('subject unit page', '#/subject/bme/unit/2', function (h) { return h.indexOf('Unit II') !== -1; });
journey('legacy unit route redirects with content', '#/unit/3', function (h) { return h.indexOf('Unit III') !== -1; });
journey('topic page', '#/topic/m1-lhospital', function (h) { return h.length > 500; });
journey('topic page with anchor', '#/topic/m1-lhospital#quick-check', function (h) { return h.length > 500; });
journey('search with query', '#/search?q=entropy', function (h) { return h.toLowerCase().indexOf('entropy') !== -1; });
journey('search with encoded query', '#/search?q=gamma%20function', function (h) { return h.toLowerCase().indexOf('gamma') !== -1; });
journey('questions filtered by course+unit', '#/questions?course=maths&unit=1', function (h) { return h.length > 500; });
journey('glossary text search', '#/glossary?text=eigen', function (h) { return h.toLowerCase().indexOf('eigen') !== -1; });
journey('trailing slash on subject', '#/subject/bme/', function (h) { return h.indexOf('Mechanical') !== -1; });
journey('unknown route shows 404', '#/nonexistent', function (h) { return h.indexOf('Page not found') !== -1; });
journey('exam landing', '#/exam', function (h) { return h.length > 200; });
journey('exam for subject', '#/exam/bme', function (h) { return h.length > 200; });
journey('bogus exam subject redirects safely', '#/exam/nope', function (h) { return h.length > 0; });

/* parseHash unit checks */
const hashChecks = [
  ['#/search?q=x#results', function (p) { return p.route === 'search' && p.query.q === 'x' && p.anchor === 'results'; }],
  ['#/topic/abc#related', function (p) { return p.parts[1] === 'abc' && p.anchor === 'related'; }],
  ['#/questions?course=bme&unit=2', function (p) { return p.query.course === 'bme' && p.query.unit === '2' && !p.anchor; }]
];
hashChecks.forEach(function (c) {
  global.location.hash = c[0];
  let p;
  try { p = vm.runInContext('ME.helpers.parseHash()', ctx); } catch (e) { p = null; }
  if (p && c[1](p)) ok('parseHash ' + c[0]); else fail('parseHash ' + c[0]);
});

/* ---------- Part 2: internal link audit across rendered pages ---------- */
const pages = [
  ['home', {}], ['semester', {}], ['units', {}],
  ['questions', { query: {} }], ['flashcards', { query: {} }],
  ['formulas', { query: {} }], ['glossary', { query: {} }],
  ['exam', {}], ['revision', { parts: ['revision'] }],
  ['checklist', { query: {} }], ['mistakes', {}], ['progress', {}], ['plan', {}]
];
ME.data.allCourses.forEach(function (c) {
  pages.push(['subject', { parts: ['subject', c.id] }]);
  pages.push(['subjectUnit', { parts: ['subject', c.id, 'unit', '1'] }]);
});
ME.data.allTopics.slice(0, 30).forEach(function (t) {
  pages.push(['topic', { parts: ['topic', t.id] }]);
});

const allLinks = new Set();
pages.forEach(function (p) {
  html = '';
  try {
    ME.routes[p[0]](Object.assign({ route: p[0], parts: [], query: {}, anchor: '' }, p[1]));
  } catch (e) { fail('page render threw: ' + p[0] + ' — ' + e.message); return; }
  (html.match(/href="#\/[^"]*"/g) || []).forEach(function (l) { allLinks.add(l.slice(6, -1)); });
});

let dead = 0;
allLinks.forEach(function (h) {
  global.location.hash = h;
  const parsed = vm.runInContext('ME.helpers.parseHash()', ctx);
  if (!ME.routes[parsed.route]) { dead++; fail('dead link (no route): ' + h); return; }
  if (parsed.route === 'topic' && parsed.parts[1] && !ME.data.topicById[parsed.parts[1]]) {
    dead++; fail('dead link (no topic): ' + h);
  }
  if (parsed.route === 'subject' && parsed.parts[1] && !ME.data.courseById[parsed.parts[1]]) {
    dead++; fail('dead link (no subject): ' + h);
  }
});
if (dead === 0) ok('all ' + allLinks.size + ' internal links resolve');

console.log(failures === 0 ? '\nNAV TEST PASSED' : '\nNAV TEST FAILED (' + failures + ' issue(s))');
process.exit(failures === 0 ? 0 : 1);
