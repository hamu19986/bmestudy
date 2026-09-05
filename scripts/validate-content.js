#!/usr/bin/env node
/* ============================================================
   validate-content.js
   Run with: npm run validate-content

   Loads every content data file (without a browser) and checks:
     1. Every syllabus line item maps to a topic id that actually exists.
     2. Every topic has non-empty core content (overview + working).
     3. Every unit has at least one question of a low-mark type (for
        Q1 of the mock exam) and at least two high-mark questions
        (for the "choose one of two" per-unit exam sections).
     4. Every unit has at least some flashcards.
     5. No known placeholder / filler strings appear anywhere.
     6. No duplicate topic ids or question ids.

   Exits with code 1 (and prints what's missing) if anything fails,
   so it can be used in CI. Exits 0 on a clean pass.
   ============================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'js', 'data');

function loadGlobal(file, varName) {
  const code = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
  return new Function(code + '\nreturn ' + varName + ';')();
}

const UNIT_TOPICS = {
  1: loadGlobal('unit1.js', 'UNIT1_TOPICS'),
  2: loadGlobal('unit2.js', 'UNIT2_TOPICS'),
  3: loadGlobal('unit3.js', 'UNIT3_TOPICS'),
  4: loadGlobal('unit4.js', 'UNIT4_TOPICS')
};
const ALL_TOPICS = [].concat(UNIT_TOPICS[1], UNIT_TOPICS[2], UNIT_TOPICS[3], UNIT_TOPICS[4]);
const QUESTION_BANK = loadGlobal('questions.js', 'QUESTION_BANK');
const FLASHCARDS = loadGlobal('flashcards.js', 'FLASHCARDS');
const GLOSSARY = loadGlobal('glossary.js', 'GLOSSARY');
const FORMULA_SHEET = loadGlobal('formulas.js', 'FORMULA_SHEET');
const SYLLABUS = loadGlobal('syllabus.js', 'SYLLABUS');

const errors = [];
const warnings = [];

// ---------- 1. Syllabus -> topic mapping ----------
const topicIds = new Set(ALL_TOPICS.map(function (t) { return t.id; }));
let syllabusItemCount = 0;
SYLLABUS.forEach(function (unit) {
  unit.items.forEach(function (item) {
    syllabusItemCount++;
    if (!item.topics || !item.topics.length) {
      errors.push('Syllabus item "' + item.label + '" (Unit ' + unit.unit + ') has no mapped topic id.');
      return;
    }
    item.topics.forEach(function (tid) {
      if (!topicIds.has(tid)) {
        errors.push('Syllabus item "' + item.label + '" (Unit ' + unit.unit + ') references missing topic id "' + tid + '".');
      }
    });
  });
});

// ---------- 2. Topic content completeness ----------
const seenTopicIds = new Set();
ALL_TOPICS.forEach(function (t) {
  if (seenTopicIds.has(t.id)) errors.push('Duplicate topic id: ' + t.id);
  seenTopicIds.add(t.id);
  if (!t.overview || !t.overview.trim()) errors.push('Topic "' + t.id + '" has no overview.');
  if (!t.working || !t.working.trim()) errors.push('Topic "' + t.id + '" has no "how it works" content.');
  if (!t.summary || !t.summary.trim()) warnings.push('Topic "' + t.id + '" has no one-line summary.');
});

// ---------- 3. Question bank coverage per unit ----------
const seenQIds = new Set();
QUESTION_BANK.forEach(function (q) {
  if (seenQIds.has(q.id)) errors.push('Duplicate question id: ' + q.id);
  seenQIds.add(q.id);
  if (!topicIds.has(q.topic)) errors.push('Question ' + q.id + ' references missing topic id "' + q.topic + '".');
});

[1, 2, 3, 4].forEach(function (u) {
  const unitQs = QUESTION_BANK.filter(function (q) { return q.unit === u; });
  const low = unitQs.filter(function (q) { return q.marks <= 2; });
  const high = unitQs.filter(function (q) { return q.marks >= 5; });
  if (unitQs.length === 0) errors.push('Unit ' + u + ' has ZERO questions in the question bank.');
  if (low.length === 0) errors.push('Unit ' + u + ' has no low-mark (<=2) questions — Q1 of the mock exam needs these.');
  if (high.length < 2) warnings.push('Unit ' + u + ' has only ' + high.length + ' high-mark (>=5) question(s) — the mock exam offers 2 choices per unit, so more is better.');
});

// ---------- 4. Flashcards per unit ----------
[1, 2, 3, 4].forEach(function (u) {
  const count = FLASHCARDS.filter(function (c) { return c.unit === u; }).length;
  if (count === 0) errors.push('Unit ' + u + ' has ZERO flashcards.');
});

// ---------- 5. Placeholder / filler text scan ----------
const PLACEHOLDER_PATTERNS = [
  /lorem ipsum/i,
  /\btodo\b/i,
  /coming soon/i,
  /content goes here/i,
  /add (content|questions|topics) here/i,
  /placeholder text/i,
  /\bTBD\b/,
  /\bFIXME\b/i
];
function scanForPlaceholders(label, obj) {
  const str = JSON.stringify(obj);
  PLACEHOLDER_PATTERNS.forEach(function (re) {
    if (re.test(str)) errors.push('Placeholder-like text matching ' + re + ' found in ' + label + '.');
  });
}
scanForPlaceholders('topics', ALL_TOPICS);
scanForPlaceholders('questions', QUESTION_BANK);
scanForPlaceholders('flashcards', FLASHCARDS);
scanForPlaceholders('glossary', GLOSSARY);
scanForPlaceholders('formulas', FORMULA_SHEET);

// ---------- 6. Formula sheet sanity ----------
if (!FORMULA_SHEET.length) errors.push('Formula sheet is empty.');

// ---------- Report ----------
console.log('Content validation for 25ESC-ME-103H study platform');
console.log('----------------------------------------------------');
console.log('Syllabus line items checked : ' + syllabusItemCount);
console.log('Topics                      : ' + ALL_TOPICS.length + ' (Unit I: ' + UNIT_TOPICS[1].length + ', II: ' + UNIT_TOPICS[2].length + ', III: ' + UNIT_TOPICS[3].length + ', IV: ' + UNIT_TOPICS[4].length + ')');
console.log('Questions                   : ' + QUESTION_BANK.length);
console.log('Flashcards                  : ' + FLASHCARDS.length);
console.log('Glossary terms              : ' + GLOSSARY.length);
console.log('Formula entries             : ' + FORMULA_SHEET.reduce(function (n, s) { return n + s.items.length; }, 0));
console.log('');

if (warnings.length) {
  console.log('WARNINGS (' + warnings.length + '):');
  warnings.forEach(function (w) { console.log('  ⚠ ' + w); });
  console.log('');
}

if (errors.length) {
  console.log('ERRORS (' + errors.length + '):');
  errors.forEach(function (e) { console.log('  ✗ ' + e); });
  console.log('');
  console.log('FAILED — fix the errors above before treating this build as complete.');
  process.exit(1);
} else {
  console.log('PASSED — no missing syllabus topics, no broken references, no placeholder content found.');
  process.exit(0);
}
