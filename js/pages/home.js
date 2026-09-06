ME.routes.home = function () {
  const overall = ME.progress.overallCompletionPct();
  const accuracy = ME.progress.quizAccuracy();
  const examAvg = ME.progress.mockExamAverage();
  const next = ME.progress.recommendedNext();
  const weak = ME.progress.weakestTopics(3);
  const recent = ME.progress.recentTopics(3);
  const streak = ME.progress.streak();
  const overview = ME.progress.subjectsOverview();

  // Smart plan data: exam countdown, weakest-topic focus, daily goal ring
  const daysLeft = ME.plan.daysUntilExam();
  const examDate = ME.store.getExamDate();
  const focus = ME.plan.focusNow();

  const examChip = daysLeft === null ? '' :
    daysLeft >= 0
      ? `<a class="exam-chip" href="#/plan">🗓️ ${daysLeft === 0 ? 'Exam is today — final revision!' : '<strong>' + daysLeft + '</strong> day' + (daysLeft === 1 ? '' : 's') + ' until your exam'} · view plan →</a>`
      : `<a class="exam-chip" href="#/plan">🗓️ Exam date passed — set a new one →</a>`;

  const focusCard = focus ? `
    <div class="card focus-card" style="margin-bottom:22px;">
      <div class="flex space-between flex-wrap gap-14">
        <div style="min-width:0;">
          <h3 class="mt-0">🧭 Today's focus — your weakest topic</h3>
          <div class="flex gap-8 flex-wrap" style="margin:6px 0;">${ME.helpers.courseTag(focus.topic.course || 'bme')}${ME.helpers.unitTag(focus.topic.unit)}<span class="tag">${ME.helpers.escapeHtml(focus.topic.category || '')}</span><span class="tag">weakness ${focus.weakness.score}/100</span></div>
          <strong style="font-size:1.02rem;">${ME.helpers.escapeHtml(focus.topic.title)}</strong>
          <p class="muted" style="margin-bottom:0;">${ME.helpers.escapeHtml(focus.why)}</p>
        </div>
        <a class="btn btn-primary" href="${focus.href}">${focus.action === 'practice' ? '✏️ Practice it now' : focus.action === 'revise' ? '🔁 Revise it' : '📖 Start learning'} →</a>
      </div>
    </div>` : '';

  let goalCard = '';
  if (examDate && daysLeft !== null && daysLeft >= 0) {
    const goalHours = ME.store.get('plan-goal-hours', 3);
    const budget = Math.max(2, Math.min(8, Math.round((goalHours * 60) / 40)));
    const todayPlan = ME.plan.build(daysLeft === 0 ? 1 : daysLeft, budget).days[0];
    const pad2 = function (n) { return String(n).padStart(2, '0'); };
    const tk = todayPlan.date.getFullYear() + '-' + pad2(todayPlan.date.getMonth() + 1) + '-' + pad2(todayPlan.date.getDate());
    const doneMap = ME.store.get('plan-done', {});
    const done = todayPlan.blocks.filter(function (b) { return doneMap[tk + '|' + b.topicId + '|' + b.kind]; }).length;
    const total = todayPlan.blocks.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    const C = 163.4; // ring circumference (r = 26)
    goalCard = `
    <div class="card" style="margin-bottom:22px;">
      <div class="flex space-between gap-14 flex-wrap">
        <div style="min-width:0;">
          <h3 class="mt-0">🎯 Today's study goal</h3>
          <p class="muted" style="margin-bottom:6px;"><strong>${done} of ${total}</strong> blocks done (~40 min each) at your ${goalHours} h/day pace.</p>
          <p class="muted" style="margin-bottom:0;">${pct === 100 ? 'All done for today — brilliant! 🎉' : 'Tick blocks off in the study plan as you finish them.'}</p>
          <a class="btn btn-sm" href="#/plan" style="margin-top:8px;">Open study plan →</a>
        </div>
        <svg viewBox="0 0 64 64" class="goal-ring${pct === 100 ? ' goal-ring-done' : ''}" role="img" aria-label="${pct} percent of today's goal done">
          <circle cx="32" cy="32" r="26" class="goal-ring-bg" />
          <circle cx="32" cy="32" r="26" class="goal-ring-fg" stroke-dasharray="${C}" stroke-dashoffset="${(C * (1 - pct / 100)).toFixed(1)}" />
          <text x="32" y="37" text-anchor="middle" class="goal-ring-text">${pct}%</text>
        </svg>
      </div>
    </div>`;
  } else {
    goalCard = `
    <div class="card" style="margin-bottom:22px;">
      <div class="flex space-between flex-wrap gap-14">
        <div><h3 class="mt-0">🗓️ Smart study plan</h3><p class="muted" style="margin-bottom:0;">Set your exam date and get a day-by-day schedule that targets your weakest topics first — across all nine subjects.</p></div>
        <a class="btn" href="#/plan">Create my plan →</a>
      </div>
    </div>`;
  }

  const quickLinks = [
    ['#/semester', '🎓', 'Semester Map'],
    ['#/questions', '❓', 'Question Bank'],
    ['#/flashcards', '🗂️', 'Flashcards'],
    ['#/exam', '📝', 'Mock Exams'],
    ['#/revision', '⏱️', 'Quick Revision'],
    ['#/formulas', '∑', 'Formula Sheet']
  ];

  // Semester stat counters (Phase 24)
  const attempts = ME.store.getAttempts();
  const solved = attempts.length;
  const flashProgress = ME.store.getFlashProgress();
  const flashMastered = Object.keys(flashProgress).filter(function (k) { return flashProgress[k] === 'know'; }).length;
  const mistakeCount = Object.keys(ME.store.getMistakes()).length;
  const statStrip = `
    <div class="grid grid-4" style="margin-bottom:22px;">
      <a class="card card-link center" href="#/questions"><div style="font-size:1.4rem;font-weight:700;">${solved}</div><div class="muted" style="font-size:0.78rem;">Questions solved</div></a>
      <a class="card card-link center" href="#/flashcards"><div style="font-size:1.4rem;font-weight:700;">${flashMastered}</div><div class="muted" style="font-size:0.78rem;">Flashcards known</div></a>
      <a class="card card-link center" href="#/mistakes"><div style="font-size:1.4rem;font-weight:700;">${mistakeCount}</div><div class="muted" style="font-size:0.78rem;">Mistakes to retry</div></a>
      <a class="card card-link center" href="#/exam"><div style="font-size:1.4rem;font-weight:700;">${examAvg === null ? '—' : examAvg + '%'}</div><div class="muted" style="font-size:0.78rem;">Mock exam average</div></a>
    </div>`;

  const html = `
    <div class="hero">
      <h1>B.Tech CSE — Semester I</h1>
      <p>MDU H-Scheme (NEP-2020) · Group-A · 21 credits · 6 theory + 3 lab courses</p>
      ${next ? `<a class="btn btn-primary" href="#/topic/${next.id}">Continue learning: ${ME.helpers.escapeHtml(next.title)} →</a>` : `<a class="btn btn-primary" href="#/semester">Open the Semester Map →</a>`}
      ${examChip}
    </div>

    ${focusCard}
    ${goalCard}

    ${statStrip}

    <div class="grid grid-3" style="margin-bottom:22px;">
      ${quickLinks.map(function (l) {
        return `<a class="card card-link center" href="${l[0]}"><div style="font-size:1.6rem;">${l[1]}</div><div style="font-weight:600;margin-top:4px;">${l[2]}</div></a>`;
      }).join('')}
    </div>

    <div class="card" style="margin-bottom:22px;">
      <div class="flex space-between"><h3 class="mt-0">Semester progress</h3><strong>${overall}%</strong></div>
      ${ME.helpers.bar(overall)}
      <div class="grid grid-3" style="margin-top:16px;">
        ${overview.map(function (o) {
          const c = o.course;
          return `<a href="#/subject/${c.id}" style="text-decoration:none;color:inherit;">
            <div class="flex space-between gap-8"><span style="font-size:0.85rem;">${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</span><span class="muted">${o.completion}%</span></div>
            ${ME.helpers.bar(o.completion)}
          </a>`;
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
        }).join('')}</ul>` : `<p class="muted">You haven't opened any topics yet — <a href="#/semester">pick a subject to begin</a>.</p>`}
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
