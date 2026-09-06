ME.routes.home = function () {
  const overall = ME.progress.overallCompletionPct();
  const unitPcts = [1, 2, 3, 4].map(ME.progress.unitCompletionPct);
  const accuracy = ME.progress.quizAccuracy();
  const examAvg = ME.progress.mockExamAverage();
  const next = ME.progress.recommendedNext();
  const weak = ME.progress.weakestTopics(3);
  const recent = ME.progress.recentTopics(3);
  const streak = ME.progress.streak();

  const quickLinks = [
    ['#/units', '📘', 'Study by Unit'],
    ['#/revision', '⏱️', 'Quick Revision'],
    ['#/questions', '❓', 'Practice Questions'],
    ['#/exam', '📝', 'Mock Exam'],
    ['#/formulas', '∑', 'Formula Sheet'],
    ['#/progress', '📊', 'My Progress']
  ];

  const html = `
    <div class="hero">
      <h1>Basics of Mechanical Engineering</h1>
      <p>25ESC-ME-103H &middot; Engineering Science Course &middot; 3 Credits &middot; 25 Internal + 50 Theory (3 hr exam)</p>
      ${next ? `<a class="btn btn-primary" href="#/topic/${next.id}">Continue learning: ${ME.helpers.escapeHtml(next.title)} →</a>` : `<a class="btn btn-primary" href="#/units">Start studying →</a>`}
    </div>

    <div class="grid grid-3" style="margin-bottom:22px;">
      ${quickLinks.map(function (l) {
        return `<a class="card card-link center" href="${l[0]}"><div style="font-size:1.6rem;">${l[1]}</div><div style="font-weight:600;margin-top:4px;">${l[2]}</div></a>`;
      }).join('')}
    </div>

    <div class="card" style="margin-bottom:22px;">
      <div class="flex space-between"><h3 class="mt-0">Overall syllabus completion</h3><strong>${overall}%</strong></div>
      <div class="progress-bar"><span style="width:${overall}%"></span></div>
      <div class="grid grid-4" style="margin-top:16px;">
        ${[1, 2, 3, 4].map(function (n) {
          return `<div><div class="flex space-between"><span class="muted">Unit ${['', 'I', 'II', 'III', 'IV'][n]}</span><span>${unitPcts[n - 1]}%</span></div><div class="progress-bar"><span style="width:${unitPcts[n - 1]}%"></span></div></div>`;
        }).join('')}
      </div>
    </div>

    <div class="grid grid-2">
      <div class="card">
        <h3 class="mt-0">Quiz &amp; exam performance</h3>
        <p class="muted" style="margin-bottom:6px;">Question bank accuracy: <strong>${accuracy === null ? '—' : accuracy + '%'}</strong></p>
        <p class="muted">Mock exam average: <strong>${examAvg === null ? '—' : examAvg + '%'}</strong></p>
        ${weak.length ? `<hr><p class="muted" style="margin-bottom:6px;">Weakest topics right now:</p><ul>${weak.map(function (w) {
          const t = ME.data.topicById[w.id];
          return `<li><a href="#/topic/${w.id}">${t ? ME.helpers.escapeHtml(t.title) : w.id}</a> — ${w.pct}% correct</li>`;
        }).join('')}</ul>` : `<p class="muted">Practice some questions to see your weak areas here.</p>`}
      </div>
      <div class="card">
        <h3 class="mt-0">Recently studied</h3>
        ${recent.length ? `<ul>${recent.map(function (r) {
          const t = ME.data.topicById[r.id];
          return `<li><a href="#/topic/${r.id}">${t ? ME.helpers.escapeHtml(t.title) : r.id}</a></li>`;
        }).join('')}</ul>` : `<p class="muted">You haven't opened any topics yet — <a href="#/units">start with Unit I</a>.</p>`}
      </div>
    </div>

    <div class="card streak-card">
      <div class="flex space-between flex-wrap gap-8">
        <div>
          <h3 class="mt-0">🔥 Study streak</h3>
          <p class="muted" style="margin-bottom:0;">${streak.current > 0 ? `You've studied <strong>${streak.current} day${streak.current === 1 ? '' : 's'}</strong> in a row${streak.activeToday ? ' — keep it going today!' : (streak.alive ? ' — study today to keep it alive!' : ' — start a new streak today!')}` : 'Open any topic and your daily streak starts.'} ${streak.best > 0 ? `Best streak: <strong>${streak.best} day${streak.best === 1 ? '' : 's'}</strong>.` : ''}</p>
        </div>
        <a class="btn" href="#/progress">Full progress →</a>
      </div>
    </div>
  `;
  ME.setView(html);
};
