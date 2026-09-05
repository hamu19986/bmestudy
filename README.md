# Basics of Mechanical Engineering — Study & Exam Prep (25ESC-ME-103H)

A self-study and exam-preparation platform for the first-semester engineering
science course **Basics of Mechanical Engineering (25ESC-ME-103H)** — 3 credits,
25 internal + 50 theory marks, 3-hour university examination.

It is built to be usable on its own: a student who has never studied the
subject can learn every topic in Units I–IV, practise questions, drill
flashcards, sit full-length mock exams that follow the real question paper
pattern, and track their weak areas — all from this one app.

## What's inside

- **38 in-depth topic pages** across Units I–IV (machine tools, thermodynamics,
  refrigeration & air-conditioning, hydraulic turbines & pumps, power
  transmission, stress & strain, mechanical properties, manufacturing systems,
  NC/CNC), each with a beginner explanation, working principle, parts/types,
  formulas, labelled diagrams (inline SVG), exam tips, common mistakes and a
  quick self-check.
- **115 question-bank items** (MCQ, short-answer, long-answer, numerical) —
  every unit has both low-mark items (for Q1) and multiple high-mark items
  (for the "one of two" per-unit exam sections).
- **A mock-exam engine** that generates a fresh, randomised paper every time,
  following the real pattern: Q1 compulsory (6 parts covering all four units)
  + 2 choice-questions per unit (attempt 1 of each) = 5 questions, 50 marks,
  with a 3-hour countdown, self-marking, and unit/topic-wise result analysis.
- **54 flashcards**, a **39-term glossary**, and a **26-entry formula sheet**
  organised by section (Machine Tools, Thermodynamics, Refrigeration &
  Hydraulics, Power Transmission, Stress & Strain).
- **Smart revision modes** (quick / 1-day / 3-day / 7-day / exam-eve), a
  syllabus **checklist** with per-topic mastery status, a **mistake bank**
  that stores every wrong answer for targeted retrying, a **progress
  dashboard**, and full-text **search** across topics, questions and glossary.
- All progress (topic status, quiz/exam history, flashcard levels, bookmarks,
  mistakes) is saved locally in the browser via `localStorage` — no backend,
  no account, works offline once loaded.

## Tech stack — and why

The app is plain **HTML + CSS + vanilla JavaScript**, with content stored as
plain JS data modules (arrays of objects) rather than React/TypeScript/Vite.
This was a deliberate choice for this project: the content — not UI
architecture — is the hard part of a 38-topic, 115-question curriculum app,
and a framework-free static site:

- needs **zero build step** — `git clone` and open `index.html`, or serve the
  folder directly; nothing can go stale from a broken bundler config;
- deploys to GitHub Pages by copying files, with no compile step to maintain;
- keeps content changes to plain, easy-to-diff data files that anyone can
  edit without knowing React or a build toolchain (see "Adding content" below).

If you later want component reuse, routing libraries, or a design system at
scale, porting this to React/Vite is straightforward since content is already
fully separated from rendering logic (`js/data/` vs `js/pages/`) — but it
isn't required for correctness or completeness today.

## Project structure

```
index.html              Shell page: header, nav mounts, one <main id="view">
css/style.css            All styling (light/dark themes via CSS variables)
js/data/                 Content — pure data, no rendering logic
  unit1.js … unit4.js       Topic objects for each unit
  questions.js              Question bank (MCQ / short / long / numerical)
  flashcards.js             Flashcard deck
  formulas.js               Formula sheet, grouped by section
  glossary.js               A–Z glossary
  syllabus.js               Official syllabus line items → topic id mapping
js/core/
  app-core.js               Hash router, localStorage-backed store, nav render,
                             theme toggle, small render helpers (ME.* namespace)
  progress-calc.js           Dashboard/completion % calculations
js/pages/                 One file per route (ME.routes.<name> = function(){...})
  home.js, units.js, questions-page.js, flashcards-page.js, formulas-page.js,
  exam-page.js, revision-page.js, checklist-page.js, mistakes-page.js,
  progress-page.js, search-page.js, glossary-page.js
scripts/validate-content.js   Content-completeness checker (see below)
.github/workflows/deploy.yml  CI: validate, then deploy to GitHub Pages
```

Everything routes through a tiny hash-based router in `js/core/app-core.js`
(`#/home`, `#/unit/1`, `#/topic/u1-lathe`, `#/exam`, etc.) — there's no bundler
and no build artefacts to inspect; what you see in the repo is what runs.

## Running locally

No installation is required to just view the site — any static file server
works:

```bash
# Option A — Python (built into most systems)
python3 -m http.server 5173

# Option B — the npm script (uses the `serve` package via npx)
npm run dev
```

Then open `http://localhost:5173`.

> Opening `index.html` directly via `file://` can fail in some browsers
> because of `<script>` module/CORS restrictions on local files — use a local
> server as above instead.

## Building / deploying to GitHub Pages

There is no build step — the repository root **is** the deployable site.

1. Push this repository to GitHub.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) runs
   `npm run validate-content` on every push to `main` and, if it passes,
   publishes the repository root to GitHub Pages automatically.

To deploy manually without Actions, you can instead set **Settings → Pages →
Deploy from a branch** and point it at `main` / `/ (root)`.

## Content validation

```bash
npm run validate-content
```

This loads every content data file (no browser needed) and checks:

1. Every syllabus line item maps to a topic id that actually exists.
2. Every topic has non-empty core content.
3. Every unit has low-mark questions (for Q1) and high-mark questions
   (for the per-unit "choose one of two" sections).
4. Every unit has flashcards.
5. No placeholder/filler text (`Lorem ipsum`, `TODO`, `coming soon`, etc.).
6. No duplicate topic or question ids.

It exits non-zero (and lists exactly what's missing) if anything fails, so
it's safe to run in CI — which is exactly what the GitHub Actions workflow
does before every deploy.

## Adding new topics or questions

Everything is data-driven — you do not need to touch any page/UI code to add
content.

**A new topic** — add an object to the matching `js/data/unitN.js` array:

```js
{
  id: 'u3-my-new-topic',       // must be unique
  unit: 3,
  category: 'Power Transmission',
  title: 'My New Topic',
  summary: 'One-line summary shown on topic cards.',
  overview: `Beginner-level "what is it / why do we need it" explanation.`,
  working: `Step-by-step "how it works" explanation.`,
  parts: [ { name: 'Part name', function: 'What it does.' } ], // or null
  types: [ 'Type A — description.', 'Type B — description.' ], // or null
  formulas: [ { formula: '...', meaning: '...', units: '...', condition: '...' } ], // or null
  diagram: { description: 'What to draw in an exam.', svg: null }, // svg optional
  examTip: `...`,
  commonMistake: `...`,
  quickCheck: [ { q: '...', a: '...' } ]
}
```

Then add its id to `js/data/syllabus.js` under the right unit so the
checklist and validator pick it up.

**A new question** — add an object to `js/data/questions.js`:

```js
{ id:'q116', unit:3, topic:'u3-my-new-topic', type:'mcq', difficulty:'Easy', marks:1,
  question:'...', options:['A','B','C','D'], answer:'B', explanation:'...' }
```

`type` is one of `mcq | short | long | numerical`. Give each unit at least a
few `marks<=2` items and at least two `marks>=5` items so the mock-exam
generator (which needs a low-mark pool for Q1 and a high-mark pool of 2+ per
unit) always has enough to draw from — `npm run validate-content` will warn
if a unit is thin.

Flashcards, glossary terms and formula-sheet entries follow the same
pattern in `js/data/flashcards.js`, `glossary.js` and `formulas.js`
respectively — open any existing entry as a template.

## Exam pattern this app follows

50 marks, 3 hours, 9 questions set in total. Question 1 is compulsory with
6 equal-mark parts covering all four units. The remaining 8 questions are
2 per unit; the student attempts 1 from each unit. Total attempted: 5
questions. The app uses this pattern for mock exams, practice papers and
revision priority — it never claims a specific topic is guaranteed to
appear, only that it is high-priority, frequently testable, or
numerical/diagram-practice priority based on the structure of the syllabus
and exam pattern.

## License

MIT — see [LICENSE](LICENSE).
