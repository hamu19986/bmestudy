/* ============================================================
   SMART STUDY PLAN ENGINE
   Analyses attempt history, mistakes, flashcard results, mock-exam
   scores and completion status to compute per-topic "weakness"
   scores, then lays out a day-by-day study schedule that always
   prioritises the student's weakest areas first.
   Loaded AFTER app-core.js and progress-calc.js, BEFORE pages.
   ============================================================ */

/* ---------- 1. Per-topic weakness scoring ---------- */

/*
  Signals per topic (all optional, missing data degrades gracefully):
    - topic status        (not-started .. mastered)
    - question accuracy   (ME.store.getAttempts)
    - mock-exam accuracy  (exam results with perUnit unit->score/total)
    - flashcard level     ('dont' | 'almost' | 'know')
    - mistake-bank count
    - never visited       (fresh topic — needs first exposure)
  Returns a map: topicId -> { score: 0-100, reasons: [..], label }
  Higher score = weaker.
*/
ME.plan = {};

ME.plan.weaknessMap = function () {
  const attempts = ME.store.getAttempts();
  const exams = ME.store.getExamResults();
  const flash = ME.store.getFlashProgress();
  const mistakes = ME.store.getMistakes();

  // Per-topic accuracy from the attempt log
  const acc = {};
  attempts.forEach(function (a) {
    if (!a.topic) return;
    if (!acc[a.topic]) acc[a.topic] = { correct: 0, total: 0 };
    acc[a.topic].total++;
    if (a.correct) acc[a.topic].correct++;
  });

  // Per-topic accuracy from mock exams that recorded per-unit scores
  const examAgg = {};
  let examPaperCount = 0;
  exams.forEach(function (r) {
    if (r.perUnit) examPaperCount++;
    if (!r.perUnit) return;
    const unitIdToTopicIds = {};
    ME.data.allTopics.forEach(function (t) { (unitIdToTopicIds[t.unit] = unitIdToTopicIds[t.unit] || []).push(t.id); });
    Object.keys(r.perUnit).forEach(function (u) {
      const s = r.perUnit[u]; // {score, total}
      if (!s || !s.total) return;
      const pct = s.score / s.total;
      (unitIdToTopicIds[Number(u)] || []).forEach(function (tid) {
        // Blend unit-level exam accuracy into every topic of that unit,
        // weighted lightly so 5-mark units don't drown question data.
        if (!examAgg[tid]) examAgg[tid] = { sum: 0, n: 0 };
        examAgg[tid].sum += pct;
        examAgg[tid].n += 1;
      });
    });
  });

  const map = {};
  ME.data.allTopics.forEach(function (t) {
    const id = t.id;
    const status = ME.store.getTopicStatus(id);
    const a = acc[id];
    const reasons = [];
    let score = 0;

    // Status component (0–35)
    const statusScore = { 'not-started': 35, 'learning': 22, 'practiced': 10, 'mastered': 0 }[status] || 35;
    score += statusScore;
    if (status === 'not-started') reasons.push('not started yet');

    // Question accuracy component (0–35) — only counts with real attempts
    if (a && a.total >= 2) {
      const pct = a.correct / a.total;
      const qScore = Math.round((1 - pct) * 35);
      score += qScore;
      if (pct < 0.5) reasons.push('low quiz accuracy (' + Math.round(pct * 100) + '%)');
      else if (pct < 0.75) reasons.push('moderate quiz accuracy (' + Math.round(pct * 100) + '%)');
    }

    // Mock-exam component (0–15)
    const e = examAgg[id];
    if (e && examPaperCount > 0) {
      const pct = e.sum / e.n;
      score += Math.round((1 - pct) * 15);
      if (pct < 0.5) reasons.push('weak mock-exam performance in Unit ' + t.unit);
    }

    // Flashcards component (0–10)
    const f = flash[id];
    if (f === 'dont') { score += 10; reasons.push('flashcard marked "don\'t know"'); }
    else if (f === 'almost') { score += 5; }

    // Mistakes component (0–5)
    if (mistakes[id]) { score += 5; reasons.push('sitting in My Mistakes'); }

    score = Math.max(0, Math.min(100, score));
    const label =
      score >= 55 ? 'critical' :
      score >= 35 ? 'weak' :
      score >= 18 ? 'shaky' : 'steady';

    map[id] = { score: score, reasons: reasons, label: label, attempts: a ? a.total : 0 };
  });
  return map;
};

/* ---------- 2. Priority-ordered topic queue ---------- */

/* Ties are broken by syllabus order so the plan reads sensibly. */
ME.plan.priorityQueue = function () {
  const weak = ME.plan.weaknessMap();
  const orderIndex = {};
  ME.data.allTopics.forEach(function (t, i) { orderIndex[t.id] = i; });
  return ME.data.allTopics.slice().sort(function (x, y) {
    const dx = weak[x.id].score, dy = weak[y.id].score;
    if (dy !== dx) return dy - dx;          // weakest first
    return orderIndex[x.id] - orderIndex[y.id];
  });
};

/* ---------- 3. Day-by-day plan builder ---------- */

/*
  daysOut: integer number of days available before the exam (>=1).
  Returns { days: [ { label, date, blocks: [ {topicId, kind} ] } ], meta }
  kinds: 'learn' | 'revise' | 'practice' | 'mixed'
*/
ME.plan.build = function (daysOut, blocksPerDayOverride) {
  daysOut = Math.max(1, Math.min(60, daysOut | 0));
  const queue = ME.plan.priorityQueue();
  const weak = ME.plan.weaknessMap();

  // How much "slot budget" each day gets. A block is ~40 min of study.
  // The page may pass an explicit budget from the student's daily-hours
  // setting; otherwise it derives from the time remaining.
  let blocksPerDay;
  if (blocksPerDayOverride) {
    blocksPerDay = Math.max(2, Math.min(8, blocksPerDayOverride | 0));
  } else if (daysOut <= 3) blocksPerDay = 6;  // cram mode
  else if (daysOut <= 7) blocksPerDay = 5;
  else if (daysOut <= 14) blocksPerDay = 4;
  else if (daysOut <= 30) blocksPerDay = 3;
  else blocksPerDay = 2;

  const BLOCKS_TOTAL = blocksPerDay * daysOut;

  // 1) Decide each topic's "demand": how many study blocks it deserves.
  const demand = {};
  queue.forEach(function (t) {
    const w = weak[t.id];
    let d;
    if (w.score >= 55) d = 3;       // critical: learn + practice + revise
    else if (w.score >= 35) d = 2;  // weak: study + practice
    else if (w.score >= 18) d = 1;  // shaky: single pass
    else if (w.score > 0) d = 0;    // steady: optional filler
    else d = 0;
    demand[t.id] = d;
  });

  // 2) Build the flat, prioritised block list: pass 1 = learn every
  //    topic that needs it (weakest first), pass 2 = practice, pass 3 =
  //    revise. Spreading passes keeps each day a mix of learn/practice.
  const flat = [];
  for (let pass = 1; pass <= 3; pass++) {
    for (let qi = 0; qi < queue.length; qi++) {
      const t = queue[qi];
      if (demand[t.id] >= pass) {
        flat.push({ topicId: t.id, kind: pass === 1 ? 'learn' : (pass === 2 ? 'practice' : 'revise'), pass: pass });
      }
    }
  }

  // 3) Deal blocks round-robin across the days so consecutive blocks
  //    land on different days (interleaving beats blocking for recall).
  const days = [];
  const today = new Date();
  for (let i = 0; i < daysOut; i++) {
    const date = new Date(today.getTime() + i * 86400000);
    days.push({
      label: i === 0 ? 'Today' : (i === 1 ? 'Tomorrow' : date.toLocaleDateString(undefined, { weekday: 'short' })),
      date: date,
      blocks: []
    });
  }

  const used = Math.min(BLOCKS_TOTAL, flat.length);
  for (let bi = 0; bi < used; bi++) {
    days[bi % daysOut].blocks.push(flat[bi]);
  }

  // 4) If budget remains after covering all demand, top up with light
  //    revision of the steady (non-zero weakness) topics.
  if (used < BLOCKS_TOTAL) {
    const steady = queue.filter(function (t) { return weak[t.id].score > 0 && demand[t.id] === 0; });
    let si = 0;
    for (let bi = used; bi < BLOCKS_TOTAL && steady.length; bi++) {
      days[bi % daysOut].blocks.push({ topicId: steady[si % steady.length].id, kind: 'revise', pass: 3 });
      si++;
    }
  }

  return { days: days, blocksPerDay: blocksPerDay, blocksUsed: used, blocksTotal: BLOCKS_TOTAL, daysOut: daysOut };
};

/* ---------- 4. Human-facing summary helpers ---------- */

ME.plan.planSummary = function (plan) {
  const topicCount = {};
  plan.days.forEach(function (d) {
    d.blocks.forEach(function (b) {
      topicCount[b.topicId] = (topicCount[b.topicId] || 0) + 1;
    });
  });
  return Object.keys(topicCount).length;
};

ME.plan.blockKindLabel = function (kind) {
  return { 'learn': '📖 Learn', 'practice': '✏️ Practice', 'revise': '🔁 Revise' }[kind] || '📘 Study';
};

ME.plan.blockHref = function (b) {
  if (b.kind === 'practice') return '#/questions?topic=' + b.topicId;
  return '#/topic/' + b.topicId;
};

/* ---------- 5. Exam date store helpers ---------- */

ME.store.getExamDate = function () { return ME.store.get('exam-date', ''); };
ME.store.setExamDate = function (v) { ME.store.set('exam-date', v); };

/* ---------- 6. Days-until-exam resolver ---------- */

ME.plan.daysUntilExam = function () {
  const v = ME.store.getExamDate();
  if (!v) return null;
  const target = new Date(v + 'T00:00:00');
  if (isNaN(target.getTime())) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.round((target - today) / 86400000);
  return diff;
};

/* ---------- 7. Focus recommendations (mini "what should I do now") ---------- */

ME.plan.focusNow = function () {
  const q = ME.plan.priorityQueue();
  const weak = ME.plan.weaknessMap();
  const first = q[0];
  if (!first) return null;
  const w = weak[first.id];
  const action =
    w.attempts >= 2 ? 'practice' :
    ME.store.getVisits()[first.id] ? 'revise' : 'learn';
  return {
    topic: first,
    weakness: w,
    action: action,
    href: action === 'practice' ? ('#/questions?topic=' + first.id) : ('#/topic/' + first.id),
    why: w.reasons.length ? w.reasons.join(', ') : 'keep it fresh'
  };
};
