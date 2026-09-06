/* ============================================================
   PROGRESS CALCULATIONS — derived from localStorage + data.
   Course-aware: every metric works per subject, and the
   semester-wide metrics aggregate across all loaded subjects.
   Legacy calls (unitTopics(1), unitCompletionPct(2), …) still
   work — they default to BME, the original subject.
   ============================================================ */

ME.progress = {};

/* ---------- Topic-level ---------- */

ME.progress.unitTopics = function (n, courseId) {
  if (courseId) return ME.helpers.topicsFor(courseId, n);
  return ME.data.allTopics.filter(function (t) { return t.unit === n; });
};

const STATUS_WEIGHT = { 'not-started': 0, 'learning': 0.4, 'practiced': 0.75, 'mastered': 1 };

function topicsPct(topics) {
  if (!topics.length) return 0;
  const sum = topics.reduce(function (acc, t) { return acc + STATUS_WEIGHT[ME.store.getTopicStatus(t.id)]; }, 0);
  return Math.round((sum / topics.length) * 100);
}

ME.progress.unitCompletionPct = function (n, courseId) {
  if (courseId) return topicsPct(ME.helpers.topicsFor(courseId, n));
  return topicsPct(ME.data.allTopics.filter(function (t) { return t.unit === n; }));
};

ME.progress.courseCompletionPct = function (courseId) {
  return topicsPct(ME.helpers.topicsForCourse(courseId));
};

ME.progress.overallCompletionPct = function () {
  // Weighted by topic count across every loaded subject.
  return topicsPct(ME.data.allTopics);
};

/* ---------- Accuracy ---------- */

ME.progress.quizAccuracy = function (courseId) {
  const log = ME.store.getAttempts().filter(function (a) {
    return !courseId || a.course === courseId || (!a.course && courseId === 'bme');
  });
  if (!log.length) return null;
  const correct = log.filter(function (a) { return a.correct; }).length;
  return Math.round((correct / log.length) * 100);
};

ME.progress.mockExamAverage = function (courseId) {
  const results = ME.store.getExamResults().filter(function (r) {
    return !courseId || r.course === courseId;
  });
  if (!results.length) return null;
  const sum = results.reduce(function (a, r) { return a + (r.percent || 0); }, 0);
  return Math.round(sum / results.length);
};

ME.progress.topicAccuracy = function () {
  const log = ME.store.getAttempts();
  const map = {};
  log.forEach(function (a) {
    if (!a.topic) return;
    if (!map[a.topic]) map[a.topic] = { correct: 0, total: 0 };
    map[a.topic].total++;
    if (a.correct) map[a.topic].correct++;
  });
  return map;
};

ME.progress.weakestTopics = function (limit, courseId) {
  const map = ME.progress.topicAccuracy();
  const rows = Object.keys(map).filter(function (id) {
    if (map[id].total < 2) return false;
    if (courseId) {
      const t = ME.data.topicById[id];
      if (!t || (t.course || 'bme') !== courseId) return false;
    }
    return true;
  }).map(function (id) {
    return { id: id, pct: Math.round((map[id].correct / map[id].total) * 100), total: map[id].total };
  }).sort(function (a, b) { return a.pct - b.pct; });
  return rows.slice(0, limit || 5);
};

/* ---------- Activity ---------- */

ME.progress.recentTopics = function (limit) {
  const visits = ME.store.getVisits();
  return Object.keys(visits).map(function (id) { return { id: id, ts: visits[id] }; })
    .sort(function (a, b) { return b.ts - a.ts; })
    .slice(0, limit || 5);
};

ME.progress.recommendedNext = function (courseId) {
  // First topic (in syllabus order) that is not-started or only learning.
  const pool = courseId ? ME.helpers.topicsForCourse(courseId) : ME.data.allTopics;
  const t = pool.find(function (t) {
    const s = ME.store.getTopicStatus(t.id);
    return s === 'not-started' || s === 'learning';
  });
  return t || null;
};

ME.progress.streak = function () { return ME.store.streakStatus(); };

ME.progress.statusCounts = function (courseId) {
  const counts = { 'not-started': 0, 'learning': 0, 'practiced': 0, 'mastered': 0 };
  const pool = courseId ? ME.helpers.topicsForCourse(courseId) : ME.data.allTopics;
  pool.forEach(function (t) { counts[ME.store.getTopicStatus(t.id)]++; });
  return counts;
};

/* ---------- Semester overview ---------- */

ME.progress.subjectsOverview = function () {
  return ME.data.allCourses.map(function (c) {
    const topics = ME.helpers.topicsForCourse(c.id);
    const counts = { 'not-started': 0, 'learning': 0, 'practiced': 0, 'mastered': 0 };
    topics.forEach(function (t) { counts[ME.store.getTopicStatus(t.id)]++; });
    return {
      course: c,
      topics: topics.length,
      questions: ME.data.questions.filter(function (q) { return q.course === c.id; }).length,
      flashcards: ME.data.flashcards.filter(function (f) { return f.course === c.id; }).length,
      completion: topicsPct(topics),
      counts: counts
    };
  });
};
