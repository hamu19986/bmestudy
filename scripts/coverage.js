#!/usr/bin/env node
/* ============================================================
   coverage.js — run with: npm run coverage
   Prints the CSE Semester-I content coverage report and exits 1
   if syllabus→topic mapping is below 100% (the build gate).

   Items whose topic files exist but aren't authored yet count as
   unmapped — so this gates the same way the validator's --strict
   mode does, and turns green exactly when content is complete.
   ============================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'js', 'data');

function loadAll(relPath) {
  const p = path.join(DATA_DIR, relPath);
  if (!fs.existsSync(p)) return [];
  const code = fs.readFileSync(p, 'utf8');
  const names = [];
  const re = /const\s+([A-Z][A-Z0-9_]+)\s*=/g;
  let m;
  while ((m = re.exec(code)) !== null) names.push(m[1]);
  const out = [];
  try {
    const body = code + '\nreturn {' + names.map(function (n) { return n + ': (typeof ' + n + ' !== "undefined") ? ' + n + ' : null'; }).join(',') + '};';
    const res = new Function(body)();
    names.forEach(function (n) { if (res[n] && res[n].length) out.push.apply(out, res[n]); });
  } catch (e) { /* reported by validator */ }
  return out;
}

const COURSES = loadAll('courses.js');
let SYLLABUS = null;
(function () {
  const p = path.join(DATA_DIR, 'syllabus.js');
  if (fs.existsSync(p)) {
    try {
      SYLLABUS = new Function(fs.readFileSync(p, 'utf8') + '\nreturn SYLLABUS;')();
    } catch (e) { SYLLABUS = null; }
  }
})();
if (!SYLLABUS) SYLLABUS = {};

const TOPIC_FILES = {
  'bme': ['bme/unit1.js', 'bme/unit2.js', 'bme/unit3.js', 'bme/unit4.js'],
  'maths': ['maths/topics.js'], 'physics': ['physics/topics.js'], 'pps': ['pps/topics.js'],
  'egd': ['egd/topics.js'], 'english': ['english/topics.js'],
  'pps-lab': ['pps-lab/experiments.js'], 'physics-lab': ['physics-lab/experiments.js'],
  'english-lab': ['english-lab/modules.js']
};
const QUESTION_FILES = ['bme/questions.js', 'maths/questions.js', 'physics/questions.js', 'pps/questions.js', 'egd/questions.js', 'english/questions.js', 'pps-lab/questions.js', 'physics-lab/questions.js', 'english-lab/questions.js'];
const FLASHCARD_FILES = ['bme/flashcards.js', 'maths/flashcards.js', 'physics/flashcards.js', 'pps/flashcards.js', 'egd/flashcards.js', 'english/flashcards.js', 'pps-lab/flashcards.js', 'physics-lab/flashcards.js', 'english-lab/flashcards.js'];

const topics = [];
Object.keys(TOPIC_FILES).forEach(function (cid) { TOPIC_FILES[cid].forEach(function (f) { topics.push.apply(topics, loadAll(f)); }); });
const questions = [];
QUESTION_FILES.forEach(function (f) { questions.push.apply(questions, loadAll(f)); });
const flashcards = [];
FLASHCARD_FILES.forEach(function (f) { flashcards.push.apply(flashcards, loadAll(f)); });

const topicIds = new Set(topics.map(function (t) { return t.id; }));

console.log('CSE SEMESTER I CONTENT COVERAGE');
console.log('================================');
let totalItems = 0, totalMapped = 0, totalTopics = 0, totalQ = 0, totalF = 0;
let allMapped = true;

COURSES.forEach(function (c) {
  const units = SYLLABUS[c.id] || [];
  let items = 0, mapped = 0;
  units.forEach(function (u) {
    u.items.forEach(function (item) {
      items++;
      if (item.topics && item.topics.length && item.topics.every(function (tid) { return topicIds.has(tid); })) mapped++;
    });
  });
  const tCount = topics.filter(function (t) { return t.course === c.id; }).length;
  const qCount = questions.filter(function (q) { return (q.course || 'bme') === c.id; }).length;
  const fCount = flashcards.filter(function (f) { return (f.course || 'bme') === c.id; }).length;
  const missing = items - mapped;
  const pct = items ? Math.round(mapped / items * 100) : 0;
  console.log('');
  console.log(c.icon + ' ' + c.name);
  console.log('   Syllabus items: ' + items + '   Mapped: ' + mapped + (missing ? '   (pending content: ' + missing + ')' : '   ✓'));
  console.log('   Topics: ' + tCount + '   Questions: ' + qCount + '   Flashcards: ' + fCount);
  totalItems += items; totalMapped += mapped; totalTopics += tCount; totalQ += qCount; totalF += fCount;
  if (mapped < items) allMapped = false;
});

console.log('');
console.log('TOTAL');
console.log('   Syllabus items: ' + totalItems);
console.log('   Mapped: ' + totalMapped + ' of ' + totalItems + '  (' + (totalItems ? Math.round(totalMapped / totalItems * 100) : 0) + '%)');
console.log('   Topics: ' + totalTopics + '   Questions: ' + totalQ + '   Flashcards: ' + totalF);
console.log('');

if (allMapped && totalItems > 0) {
  console.log('PASS — syllabus coverage 100%');
  process.exit(0);
} else {
  console.log('FAIL — syllabus coverage below 100% (' + (totalItems - totalMapped) + ' item(s) still awaiting topic content).');
  console.log('Fill the pending files listed in README ("Adding a subject") and re-run.');
  process.exit(1);
}
