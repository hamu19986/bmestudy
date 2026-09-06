/* ============================================================
   PROGRESS CALCULATIONS — derived from localStorage + data
   ============================================================ */

ME.progress = {};

ME.progress.unitTopics = function (n) {
  return ME.data.allTopics.filter(function (t) { return t.unit === n; });
};

ME.progress.unitCompletionPct = function (n) {
  const topics = ME.progress.unitTopics(n);
  if (!topics.length) return 0;
  const weight = { 'not-started': 0, 'learning': 0.4, 'practiced': 0.75, 'mastered': 1 };
  const sum = topics.reduce(function (acc, t) { return acc + weight[ME.store.getTopicStatus(t.id)]; }, 0);
  return Math.round((sum / topics.length) * 100);
};

ME.progress.overallCompletionPct = function () {
  const pcts = [1, 2, 3, 4].map(ME.progress.unitCompletionPct);
  return Math.round(pcts.reduce(function (a, b) { return a + b; }, 0) / pcts.length);
};

ME.progress.quizAccuracy = function () {
  const log = ME.store.getAttempts();
  if (!log.length) return null;
  const correct = log.filter(function (a) { return a.correct; }).length;
  return Math.round((correct / log.length) * 100);
};

ME.progress.mockExamAverage = function () {
  const results = ME.store.getExamResults();
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

ME.progress.weakestTopics = function (limit) {
  const map = ME.progress.topicAccuracy();
  const rows = Object.keys(map).filter(function (id) { return map[id].total >= 2; }).map(function (id) {
    return { id: id, pct: Math.round((map[id].correct / map[id].total) * 100), total: map[id].total };
  }).sort(function (a, b) { return a.pct - b.pct; });
  return rows.slice(0, limit || 5);
};

ME.progress.recentTopics = function (limit) {
  const visits = ME.store.getVisits();
  return Object.keys(visits).map(function (id) { return { id: id, ts: visits[id] }; })
    .sort(function (a, b) { return b.ts - a.ts; })
    .slice(0, limit || 5);
};

ME.progress.recommendedNext = function () {
  // First topic (in syllabus order) that is not-started or only learning.
  const t = ME.data.allTopics.find(function (t) {
    const s = ME.store.getTopicStatus(t.id);
    return s === 'not-started' || s === 'learning';
  });
  return t || null;
};

ME.progress.streak = function () { return ME.store.streakStatus(); };

ME.progress.statusCounts = function () {
  const counts = { 'not-started': 0, 'learning': 0, 'practiced': 0, 'mastered': 0 };
  ME.data.allTopics.forEach(function (t) { counts[ME.store.getTopicStatus(t.id)]++; });
  return counts;
};
