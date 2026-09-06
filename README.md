# B.Tech CSE Semester I — Academic OS

A complete self-study and exam-preparation platform for the **entire B.Tech CSE
Semester I** (M.D. University, Rohtak — H-Scheme, NEP-2020, effective 2025-26,
Group-A CSE combination, 21 credits):

| Subject | Code | Credits | Exam |
|---|---|---|---|
| ⚙️ Basics of Mechanical Engineering | 25ESC-ME-103H | 3 | 50 marks · 3 h |
| ∫ Mathematics-I — Calculus & Linear Algebra | 25BSC-MATH-103H | 4 | 70 marks · 3 h |
| ⚛️ Physics-I — Semiconductor Physics | 25BSC-PHY-103H | 4 | 70 marks · 3 h |
| 💻 Programming for Problem Solving (C) | 25ESC-CSE101H | 3 | 50 marks · 3 h |
| 📐 Engineering Graphics & Design | 25ESC-ME-101H | 2 | 35 marks · 3 h |
| 📝 English | 25HSMC-ENG-101H | 2 | 35 marks · 3 h |
| ⌨️ PPS Lab | 25LC-CSE101H | 1 | 20 marks · 2 h |
| 🔬 Semiconductor Physics Lab | 25LC-PHY-103H | 1 | 20 marks · 2 h |
| 🗣️ English Language Lab | 25LC-ENG-101H | 1 | 20 marks · 2 h |

One app: learn every topic, practise question banks, drill flashcards, sit
per-subject mock exams that follow each official paper pattern, and track
weak areas across the whole semester — fully offline, no backend, no account.

## Status — what's inside right now

- **BME (⚙️) is fully migrated and complete** — the original platform's entire
  content set: 38 in-depth topic pages, 132-question bank, 70 flashcards,
  110-term glossary, 49-entry formula sheet, mock-exam engine, smart revision,
  study plan, mistake bank, progress dashboard, search.
- **The other 8 subjects are wired end-to-end but their content slots are
  empty and awaiting authoring.** Everything already works for them: subject
  pages, per-unit routes, syllabus checklist, filters, exam landing pages and
  the coverage report. Fill the data files (see below) and the UI picks them
  up with zero code changes.
- `npm run coverage` shows exactly which syllabus items are still pending
  (currently 37/189 mapped — BME's 37 are 100% done).

## Architecture

Plain **HTML + CSS + vanilla JavaScript**; content lives as plain JS data
modules. No build step — `git clone` and serve the folder; what you see in
the repo is what runs.

```
index.html               Shell page + load order: courses → data → core → pages → boot
css/style.css            All styling (light/dark themes, per-subject accent tags)
js/data/
  courses.js             Subject registry: 9 courses with credits, marks, units, exam config
  syllabus.js            SYLLABUS[courseId] — every official syllabus line → topic ids
  bme/                   Complete: unit1-4.js, questions.js, flashcards.js, formulas.js, glossary.js
  maths/  physics/  pps/ maths/{topics,questions,flashcards,formulas,glossary}.js etc.
  egd/    english/       (topics, questions, flashcards)
  pps-lab/ physics-lab/ english-lab/   (experiments|modules, questions, flashcards)
js/core/
  app-core.js            Namespace, data aggregation, hash router, storage, helpers, nav
  progress-calc.js       Course-aware completion %, accuracy, weakness, streaks
  study-plan.js          Weakness scoring + day-by-day study-plan engine
js/pages/                One file per route (ME.routes.<name> = function(){...})
scripts/
  validate-content.js    Reference/duplicate/placeholder checks (CI gate)
  coverage.js            Syllabus→topic coverage report, exits 1 below 100%
  smoke-test.js          Headless DOM-stub test rendering every route
.github/workflows/deploy.yml   CI: validate + smoke, then deploy to GitHub Pages
```

Routes: `#/home`, `#/semester`, `#/units`, `#/subject/<id>`,
`#/subject/<id>/unit/<n>`, `#/topic/<id>`, `#/questions`, `#/flashcards`,
`#/formulas`, `#/glossary`, `#/exam`, `#/exam/<courseId>`, `#/exam/take`,
`#/revision/<mode>`, `#/checklist`, `#/mistakes`, `#/progress`, `#/plan`,
`#/search`, `#/diagram/<topicId>`. The legacy `#/unit/<n>` deep link still
resolves (to BME).

## Data schema

Every content object carries a `course` id from `courses.js`, plus `unit` 1–4.

**Topic** (`js/data/<subject>/topics.js` or lab `experiments|modules.js`):

```js
{
  id: 'm2-inverse',            // must match a syllabus.js topic id
  course: 'maths',
  unit: 2,
  category: 'Matrices',
  title: 'Inverse of a Matrix',
  summary: 'One-line summary shown on topic cards.',
  overview: `Beginner "what is it / why do we need it".`,
  working: `Step-by-step "how it works" / method.`,
  parts: null,                 // [{name, function}] or null
  types: null,                 // ['Type — description'] or null
  operations: null,            // [{name, description}] or null
  formulas: [ { formula, meaning, units, condition } ],  // or null
  diagram: { description: 'What to draw in the exam.', svg: null },
  examTip: `...`, commonMistake: `...`,
  quickCheck: [ { q, a } ],
  applications: null, extraNotes: null,
  // Optional universal-topic-page sections (rendered only when present):
  whyThisMatters: `...`,                    // "Why this matters" section
  prerequisites: ['m1-lhospital'],          // topic ids → auto-linked cards
  learningObjectives: ['Use A⁻¹ to solve Ax = b'],
  relatedTopics: ['m2-determinants']        // topic ids → "Related topics" grid
}
```

**Question** (`questions.js`):

```js
{ id:'mq1', course:'maths', unit:2, topic:'m2-inverse',
  type:'mcq'|'short'|'long'|'numerical',
  difficulty:'Easy'|'Medium'|'Hard'|'Exam Challenge',
  marks:1, question:'…', options:['…'], answer:'…', explanation:'…' }
```

**Flashcard** (`flashcards.js`): `{ id, course, unit, topic?, category, front, back }`
**Formula section** (`formulas.js`): `{ course, section, items:[{formula, meaning, units, mistake}] }`
**Glossary term** (`glossary.js`): `{ term, course, simple, technical, where, related }`

## Adding content for a pending subject

1. Open the subject's files under `js/data/<subject>/` — each is a documented
   stub listing the exact expected global names and the syllabus topic ids it
   must fill (also listed in `js/data/syllabus.js`).
2. Fill topics first (ids must match the syllabus mapping), then questions,
   flashcards, formulas, glossary.
3. Per unit, add **low-mark (≤2) and high-mark (≥5) questions** — the
   mock-exam generator draws Q1 parts from the low-mark pool and unit-choice
   questions from the high-mark pool.
4. Run `npm test && npm run coverage` and iterate until the subject shows
   100% mapped.

That's it — pages, filters, exams, checklist, search and the plan engine
discover the new content automatically. To register a *brand-new* subject,
add one object to `COURSES` in `js/data/courses.js` and a `SYLLABUS` block in
`js/data/syllabus.js`; never hard-code a subject into core or page code.

## Exam pattern

Each subject's mock exam is generated from its `exam` config in
`courses.js` (`q1Parts`, `q1TotalMarks`, `unitQuestionMarks`, `unitChoices`,
`totalMarks`, `durationMinutes`). The four-unit theory papers follow the
official 9-question structure: Q1 compulsory (6 short parts across all
units) + 2 questions per unit, attempt one from each — 5 questions total.
Marks/durations differ per subject (50/70/35) and are never hard-coded.

## Validation

```bash
npm run validate-content   # references, duplicates, placeholders, per-unit exam pools
npm run coverage           # syllabus→topic coverage %, exits 1 below 100%
npm run smoke              # renders every route headlessly, fails on runtime errors
npm test                   # validate + smoke
```

`validate-content --strict` additionally fails on any syllabus item without
topic content — use it as the 100%-complete gate once content authoring
catches up. The GitHub Actions workflow runs validate + smoke on every push
and deploys to GitHub Pages on success.

## Running locally

```bash
python3 -m http.server 5173   # or: npm run dev
# open http://localhost:5173
```

(`file://` can fail because of module/CORS restrictions — use a server.)

## Deploying

No build step — the repo root is the site. Push to GitHub, set
**Settings → Pages → GitHub Actions**; the included workflow validates,
smoke-tests and publishes on every push to `main`.

## License

MIT — see [LICENSE](LICENSE).
