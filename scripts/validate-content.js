#!/usr/bin/env node
/* ============================================================
   validate-content.js  —  run with: npm run validate-content
   Multi-course content validator for the CSE Semester-I platform.

   Checks (per course, across all loaded data files):
     1. Duplicate topic / question / flashcard ids.
     2. Every syllabus item maps to topic ids that exist.
     3. Every topic has core content (overview + working).
     4. Every topic with questions has overview; questions reference
        existing topics; flashcards reference existing topics.
     5. Per-course exam readiness: every unit of a course with content
        has low-mark (<=2) and high-mark (>=5) questions.
     6. Placeholder / filler text scan everywhere.
     7. Formula sections and glossary terms carry a course tag.

   Exit codes:
     0 — all errors clear.
     1 — errors found (broken references, duplicates, placeholders).

   With --strict, also exits 1 unless EVERY syllabus item of every
   course maps to real topic content (the "100% coverage" gate used
   by `npm run coverage` and CI once all content is authored).
   ============================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'js', 'data');
const STRICT = process.argv.includes('--strict');

function loadGlobal(relPath, varName) {
  const p = path.join(DATA_DIR, relPath);
  if (!fs.existsSync(p)) return undefined;
  const code = fs.readFileSync(p, 'utf8');
  try {
    return new Function(code + '\nreturn (typeof ' + varName + ' !== "undefined") ? ' + varName + ' : undefined;')();
  } catch (e) {
    errors.push('Syntax error while loading ' + relPath + ': ' + e.message);
    return undefined;
  }
}

const errors = [];
const warnings = [];

/* ---------- Course registry ---------- */
const COURSES = loadGlobal('courses.js', 'COURSES') || [];
const COURSE_IDS = COURSES.map(function (c) { return c.id; });

/* ---------- Load every data file ---------- */

// Generic loader: evaluates the file and returns ALL `const X = [...]` arrays.
function loadArrays(relPath) {
  const p = path.join(DATA_DIR, relPath);
  if (!fs.existsSync(p)) return { arrays: [], error: null };
  const code = fs.readFileSync(p, 'utf8');
  const names = [];
  const re = /const\s+([A-Z][A-Z0-9_]+)\s*=/g;
  let m;
  while ((m = re.exec(code)) !== null) names.push(m[1]);
  const arrays = [];
  let error = null;
  try {
    const body = code + '\nreturn {' + names.map(function (n) { return n + ': (typeof ' + n + ' !== "undefined") ? ' + n + ' : null'; }).join(',') + '};';
    const res = new Function(body)();
    names.forEach(function (n) {
      if (res[n] && res[n].length) arrays.push({ name: n, items: res[n] });
    });
  } catch (e) {
    error = e.message;
  }
  return { arrays: arrays, error: error };
}

const TOPIC_FILES = {
  'bme': ['bme/unit1.js', 'bme/unit2.js', 'bme/unit3.js', 'bme/unit4.js'],
  'maths': ['maths/topics.js'],
  'physics': ['physics/topics.js'],
  'pps': ['pps/topics.js'],
  'egd': ['egd/topics.js'],
  'english': ['english/topics.js'],
  'pps-lab': ['pps-lab/experiments.js'],
  'physics-lab': ['physics-lab/experiments.js'],
  'english-lab': ['english-lab/modules.js']
};
const QUESTION_FILES = ['bme/questions.js', 'maths/questions.js', 'physics/questions.js', 'pps/questions.js', 'egd/questions.js', 'english/questions.js', 'pps-lab/questions.js', 'physics-lab/questions.js', 'english-lab/questions.js'];
const FLASHCARD_FILES = ['bme/flashcards.js', 'maths/flashcards.js', 'physics/flashcards.js', 'pps/flashcards.js', 'egd/flashcards.js', 'english/flashcards.js', 'pps-lab/flashcards.js', 'physics-lab/flashcards.js', 'english-lab/flashcards.js'];
const FORMULA_FILES = ['bme/formulas.js', 'maths/formulas.js', 'physics/formulas.js'];
const GLOSSARY_FILES = ['bme/glossary.js', 'maths/glossary.js', 'physics/glossary.js', 'pps/glossary.js'];

const topics = [];
const questions = [];
const flashcards = [];
const formulaSections = [];
const glossary = [];

Object.keys(TOPIC_FILES).forEach(function (cid) {
  TOPIC_FILES[cid].forEach(function (f) {
    const r = loadArrays(f);
    if (r.error) errors.push('Syntax error in ' + f + ': ' + r.error);
    r.arrays.forEach(function (a) { a.items.forEach(function (t) { topics.push(Object.assign({ __file: f }, t)); }); });
  });
});
QUESTION_FILES.forEach(function (f) {
  const r = loadArrays(f);
  if (r.error) errors.push('Syntax error in ' + f + ': ' + r.error);
  r.arrays.forEach(function (a) { a.items.forEach(function (q) { questions.push(q); }); });
});
FLASHCARD_FILES.forEach(function (f) {
  const r = loadArrays(f);
  if (r.error) errors.push('Syntax error in ' + f + ': ' + r.error);
  r.arrays.forEach(function (a) { a.items.forEach(function (c) { flashcards.push(c); }); });
});
FORMULA_FILES.forEach(function (f) {
  const r = loadArrays(f);
  if (r.error) errors.push('Syntax error in ' + f + ': ' + r.error);
  r.arrays.forEach(function (a) { a.items.forEach(function (sec) { formulaSections.push(sec); }); });
});
GLOSSARY_FILES.forEach(function (f) {
  const r = loadArrays(f);
  if (r.error) errors.push('Syntax error in ' + f + ': ' + r.error);
  r.arrays.forEach(function (a) { a.items.forEach(function (g) { glossary.push(g); }); });
});

const SYLLABUS = loadGlobal('syllabus.js', 'SYLLABUS') || {};

/* ---------- 1. Duplicate ids ---------- */
const seenTopic = new Set();
topics.forEach(function (t) {
  if (seenTopic.has(t.id)) errors.push('Duplicate topic id: ' + t.id + ' (in ' + t.__file + ')');
  seenTopic.add(t.id);
});
const seenQ = new Set();
questions.forEach(function (q) {
  if (seenQ.has(q.id)) errors.push('Duplicate question id: ' + q.id);
  seenQ.add(q.id);
});
const seenF = new Set();
flashcards.forEach(function (c) {
  if (seenF.has(c.id)) errors.push('Duplicate flashcard id: ' + c.id);
  seenF.add(c.id);
});
const seenGlossary = new Set();
glossary.forEach(function (g) {
  const key = (g.term || '').toLowerCase();
  if (seenGlossary.has(key)) warnings.push('Duplicate glossary term: ' + g.term);
  seenGlossary.add(key);
});

/* ---------- 2. Syllabus mapping ---------- */
const syllabusTopicRefs = new Set();
let syllabusItemCount = 0;
Object.keys(SYLLABUS).forEach(function (cid) {
  if (COURSE_IDS.length && COURSE_IDS.indexOf(cid) === -1) {
    errors.push('SYLLABUS has course id "' + cid + '" which is not in courses.js.');
  }
  SYLLABUS[cid].forEach(function (unit) {
    unit.items.forEach(function (item) {
      syllabusItemCount++;
      if (!item.topics || !item.topics.length) {
        errors.push('Syllabus item "' + item.label + '" (' + cid + ' U' + unit.unit + ') has no mapped topic id.');
        return;
      }
      item.topics.forEach(function (tid) {
        syllabusTopicRefs.add(tid);
        if (!seenTopic.has(tid)) {
          const hasFile = TOPIC_FILES[cid] && TOPIC_FILES[cid].length;
          const msg = 'Syllabus item "' + item.label + '" (' + cid + ' U' + unit.unit + ') references topic "' + tid + '" which has no content yet.';
          if (STRICT) errors.push(msg);
          else warnings.push(msg + ' (pending content)');
        }
      });
    });
  });
});

/* ---------- 3. Topic content completeness ---------- */
topics.forEach(function (t) {
  if (!t.course) errors.push('Topic "' + t.id + '" (' + (t.__file || '?') + ') is missing its `course` field.');
  else if (COURSE_IDS.length && COURSE_IDS.indexOf(t.course) === -1) errors.push('Topic "' + t.id + '" has unknown course "' + t.course + '".');
  if (!t.unit || t.unit < 1 || t.unit > 4) errors.push('Topic "' + t.id + '" has invalid unit ' + t.unit + '.');
  if (!t.overview || !String(t.overview).trim()) errors.push('Topic "' + t.id + '" has no overview.');
  if (!t.working || !String(t.working).trim()) errors.push('Topic "' + t.id + '" has no "how it works" content.');
  if (!t.title || !t.title.trim()) errors.push('Topic "' + t.id + '" has no title.');
  if (!t.summary || !t.summary.trim()) warnings.push('Topic "' + t.id + '" has no one-line summary.');
});

/* ---------- 4. Cross references ---------- */
questions.forEach(function (q) {
  if (q.topic && !seenTopic.has(q.topic)) errors.push('Question ' + q.id + ' references missing topic "' + q.topic + '".');
  if (q.course && COURSE_IDS.length && COURSE_IDS.indexOf(q.course) === -1) errors.push('Question ' + q.id + ' has unknown course "' + q.course + '".');
  if (q.type === 'mcq' && (!q.options || q.options.length < 2)) errors.push('MCQ ' + q.id + ' has fewer than 2 options.');
  if (!q.answer && q.answer !== 0) errors.push('Question ' + q.id + ' has no answer.');
});
flashcards.forEach(function (c) {
  if (c.topic && !seenTopic.has(c.topic)) errors.push('Flashcard ' + c.id + ' references missing topic "' + c.topic + '".');
  if (!c.front || !c.back) errors.push('Flashcard ' + c.id + ' is missing front or back.');
});

/* ---------- 5. Per-course exam readiness ---------- */
COURSES.forEach(function (c) {
  const courseTopics = topics.filter(function (t) { return t.course === c.id; });
  if (!courseTopics.length) return; // subject not authored yet — pending, not an error
  const unitsWithContent = {};
  courseTopics.forEach(function (t) { unitsWithContent[t.unit] = true; });
  Object.keys(unitsWithContent).forEach(function (u) {
    const unitQs = questions.filter(function (q) { return (q.course || 'bme') === c.id && q.unit === +u; });
    const low = unitQs.filter(function (q) { return q.marks <= 2; });
    const high = unitQs.filter(function (q) { return q.marks >= 5; });
    if (unitQs.length === 0) {
      if (STRICT) errors.push(c.shortName + ' Unit ' + u + ' has ZERO questions.');
      else warnings.push(c.shortName + ' Unit ' + u + ' has questions on topics but none in the bank yet.');
    }
    if (low.length === 0) (STRICT ? errors : warnings).push(c.shortName + ' Unit ' + u + ' has no low-mark (<=2) questions — Q1 needs these.');
    if (high.length < 2) (STRICT ? errors : warnings).push(c.shortName + ' Unit ' + u + ' has only ' + high.length + ' high-mark (>=5) question(s) — 2 unit choices need at least 2.');
  });
  const courseCards = flashcards.filter(function (f) { return (f.course || 'bme') === c.id; });
  if (!courseCards.length) (STRICT ? errors : warnings).push(c.shortName + ' has no flashcards.');
});

/* ---------- 6. Placeholder scan ---------- */
const PLACEHOLDER_PATTERNS = [
  /lorem ipsum/i, /\btodo\b/i, /coming soon/i, /content goes here/i,
  /add (content|questions|topics) here/i, /placeholder text/i, /\bTBD\b/, /\bFIXME\b/i
];
function scanForPlaceholders(label, obj) {
  const str = JSON.stringify(obj) || '';
  PLACEHOLDER_PATTERNS.forEach(function (re) {
    if (re.test(str)) errors.push('Placeholder-like text matching ' + re + ' found in ' + label + '.');
  });
}
scanForPlaceholders('topics', topics);
scanForPlaceholders('questions', questions);
scanForPlaceholders('flashcards', flashcards);
scanForPlaceholders('glossary', glossary);
scanForPlaceholders('formulas', formulaSections);

/* ---------- 7. Course tagging on reference content ---------- */
formulaSections.forEach(function (sec) {
  if (!sec.course) warnings.push('Formula section "' + sec.section + '" has no `course` tag — it will show under All subjects only.');
});
glossary.forEach(function (g) {
  if (!g.course) warnings.push('Glossary term "' + g.term + '" has no `course` tag.');
});

/* ---------- Report ---------- */
const byCourse = {};
COURSES.forEach(function (c) {
  byCourse[c.id] = {
    topics: topics.filter(function (t) { return t.course === c.id; }).length,
    questions: questions.filter(function (q) { return (q.course || 'bme') === c.id; }).length,
    flashcards: flashcards.filter(function (f) { return (f.course || 'bme') === c.id; }).length
  };
});

console.log('Content validation — B.Tech CSE Semester I platform');
console.log('----------------------------------------------------');
console.log('Syllabus items (all subjects) : ' + syllabusItemCount);
console.log('Topics with content           : ' + topics.length);
console.log('Questions                     : ' + questions.length);
console.log('Flashcards                    : ' + flashcards.length);
console.log('Glossary terms                : ' + glossary.length);
console.log('Formula sections              : ' + formulaSections.length);
console.log('');
COURSES.forEach(function (c) {
  const b = byCourse[c.id];
  console.log('  ' + (c.icon || ' ') + ' ' + (c.shortName || c.id).padEnd(12) + ' topics ' + String(b.topics).padStart(3) + '   questions ' + String(b.questions).padStart(4) + '   flashcards ' + String(b.flashcards).padStart(4));
});
console.log('');

if (warnings.length) {
  console.log('WARNINGS (' + warnings.length + '):');
  warnings.slice(0, 40).forEach(function (w) { console.log('  ⚠ ' + w); });
  if (warnings.length > 40) console.log('  … and ' + (warnings.length - 40) + ' more');
  console.log('');
}

if (errors.length) {
  console.log('ERRORS (' + errors.length + '):');
  errors.slice(0, 60).forEach(function (e) { console.log('  ✗ ' + e); });
  if (errors.length > 60) console.log('  … and ' + (errors.length - 60) + ' more');
  console.log('');
  console.log('FAILED — fix the errors above before treating this build as complete.');
  process.exit(1);
}

if (STRICT) {
  console.log('PASSED (strict) — 100% syllabus mapping, no broken references, no placeholders.');
} else {
  console.log('PASSED — no broken references, duplicates or placeholder content.');
  console.log('Note: syllabus items without topic content yet are listed as warnings (pending).');
  console.log('Run `npm run coverage` for the coverage report, or `node scripts/validate-content.js --strict` to enforce 100%.');
}
process.exit(0);
