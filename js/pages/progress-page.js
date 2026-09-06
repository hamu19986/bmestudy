/* ============================================================
   MY PROGRESS — full dashboard
   ============================================================ */
ME.routes.progress = function () {
  const overall = ME.progress.overallCompletionPct();
  const unitPcts = [1, 2, 3, 4].map(ME.progress.unitCompletionPct);
  const accuracy = ME.progress.quizAccuracy();
  const examAvg = ME.progress.mockExamAverage();
  const statusCounts = ME.progress.statusCounts();
  const weak = ME.progress.weakestTopics(8);
  const recent = ME.progress.recentTopics(8);
  const bookmarks = ME.store.getBookmarks();
  const examResults = ME.store.getExamResults();
  const mistakeCount = Object.keys(ME.store.getMistakes()).length;
  const streak = ME.progress.streak();

  const html = `
    <h1>My Progress</h1>

    <div class="card" style="margin-bottom:20px;">
      <div class="flex space-between"><h3 class="mt-0">Overall syllabus completion</h3><strong>${overall}%</strong></div>
      <div class="progress-bar"><span style="width:${overall}%"></span></div>
      <div class="grid grid-4" style="margin-top:16px;">
        ${[1, 2, 3, 4].map(function (n) {
          return `<div><div class="flex space-between"><span class="muted">Unit ${['', 'I', 'II', 'III', 'IV'][n]}</span><span>${unitPcts[n - 1]}%</span></div><div class="progress-bar"><span style="width:${unitPcts[n - 1]}%"></span></div></div>`;
        }).join('')}
      </div>
    </div>

    <div class="card streak-card" style="margin-bottom:20px;">
      <div class="flex space-between flex-wrap gap-8">
        <div>
          <h3 class="mt-0">🔥 Study streak</h3>
          <p class="muted" style="margin-bottom:0;">${streak.current > 0 ? `<strong>${streak.current} day${streak.current === 1 ? '' : 's'}</strong> in a row${streak.activeToday ? ' — active today.' : (streak.alive ? ' — study today to keep the streak alive.' : ' — your streak reset; start a new one today.')}` : 'No streak yet — open a topic to start one.'} ${streak.best > 0 ? `Best: <strong>${streak.best} day${streak.best === 1 ? '' : 's'}</strong>.` : ''}</p>
        </div>
        <a class="btn btn-sm" href="#/units">Continue studying →</a>
      </div>
    </div>

    <div class="grid grid-4" style="margin-bottom:20px;">
      <div class="card center"><div style="font-size:1.5rem;font-weight:700;">${statusCounts['not-started']}</div><div class="muted" style="font-size:0.82rem;">Not started</div></div>
      <div class="card center"><div style="font-size:1.5rem;font-weight:700;">${statusCounts['learning']}</div><div class="muted" style="font-size:0.82rem;">Learning</div></div>
      <div class="card center"><div style="font-size:1.5rem;font-weight:700;">${statusCounts['practiced']}</div><div class="muted" style="font-size:0.82rem;">Practiced</div></div>
      <div class="card center"><div style="font-size:1.5rem;font-weight:700;">${statusCounts['mastered']}</div><div class="muted" style="font-size:0.82rem;">Mastered</div></div>
    </div>

    <div class="grid grid-2" style="margin-bottom:20px;">
      <div class="card">
        <h3 class="mt-0">Quiz &amp; exam performance</h3>
        <p class="muted">Question bank accuracy: <strong>${accuracy === null ? '— (practice some questions)' : accuracy + '%'}</strong></p>
        <p class="muted">Mock exam average: <strong>${examAvg === null ? '— (take a mock exam)' : examAvg + '%'}</strong></p>
        <p class="muted">Items in My Mistakes: <strong>${mistakeCount}</strong> ${mistakeCount ? '<a href="#/mistakes">Review →</a>' : ''}</p>
      </div>
      <div class="card">
        <h3 class="mt-0">Weakest topics</h3>
        ${weak.length ? `<ul>${weak.map(function (w) {
          const t = ME.data.topicById[w.id];
          return `<li><a href="#/topic/${w.id}">${t ? ME.helpers.escapeHtml(t.title) : w.id}</a> — ${w.pct}% correct (${w.total} attempts)</li>`;
        }).join('')}</ul>` : '<p class="muted">Practice questions on at least 2 attempts per topic to see weak areas here.</p>'}
      </div>
    </div>

    <div class="grid grid-2" style="margin-bottom:20px;">
      <div class="card">
        <h3 class="mt-0">Recently studied</h3>
        ${recent.length ? `<ul>${recent.map(function (r) {
          const t = ME.data.topicById[r.id];
          return `<li><a href="#/topic/${r.id}">${t ? ME.helpers.escapeHtml(t.title) : r.id}</a></li>`;
        }).join('')}</ul>` : '<p class="muted">Nothing studied yet — <a href="#/units">start with Unit I</a>.</p>'}
      </div>
      <div class="card">
        <h3 class="mt-0">Bookmarked topics</h3>
        ${bookmarks.length ? `<ul>${bookmarks.map(function (id) {
          const t = ME.data.topicById[id];
          return `<li><a href="#/topic/${id}">${t ? ME.helpers.escapeHtml(t.title) : id}</a></li>`;
        }).join('')}</ul>` : '<p class="muted">No bookmarks yet — use the ☆ button on any topic page.</p>'}
      </div>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <h3 class="mt-0">Mock exam history</h3>
      ${examResults.length ? `<table><thead><tr><th>Date</th><th>Score</th><th>%</th></tr></thead><tbody>
        ${examResults.slice().reverse().map(function (r) {
          return `<tr><td>${new Date(r.ts).toLocaleDateString()}</td><td>${r.score}/${r.total}</td><td>${r.percent}%</td></tr>`;
        }).join('')}
      </tbody></table>` : '<p class="muted">No mock exams attempted yet — <a href="#/exam">take one →</a></p>'}
    </div>

    <div class="card">
      <h3 class="mt-0">Reset data</h3>
      <p class="muted">This clears all locally-stored progress on this device: topic status, bookmarks, quiz/exam history, flashcard progress and mistakes. This cannot be undone.</p>
      <button class="btn btn-danger" id="reset-all">Reset all progress</button>
    </div>
  `;
  ME.setView(html);

  document.getElementById('reset-all').addEventListener('click', function () {
    if (!confirm('This will permanently erase all your saved progress on this device. Continue?')) return;
    ['topic-status', 'bookmarks', 'attempt-log', 'mistakes', 'exam-results', 'flash-progress', 'topic-visits', 'streak'].forEach(function (k) {
      ME.store.remove(k);
    });
    ME.render();
  });
};
