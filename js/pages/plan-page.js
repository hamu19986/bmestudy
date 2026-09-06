/* ============================================================
   SMART STUDY PLAN PAGE
   Weak-point-driven, day-by-day study schedule with exam countdown.
   ============================================================ */

ME.routes.plan = function () {
  const examDate = ME.store.getExamDate();           // '' | 'YYYY-MM-DD'
  const daysLeft = ME.plan.daysUntilExam();          // null | int
  const goalHours = ME.store.get('plan-goal-hours', 3);
  const doneMap = ME.store.get('plan-done', {});
  const weak = ME.plan.weaknessMap();

  /* ---------- Exam date + countdown card ---------- */
  const countdownHtml =
    daysLeft === null
      ? `<p class="muted">Set your exam date and this app will build a personalised, day-by-day plan that attacks your weakest topics first.</p>`
      : (daysLeft > 0
        ? `<div class="countdown-row"><span class="countdown-num">${daysLeft}</span><span class="muted">day${daysLeft === 1 ? '' : 's'} left</span></div>`
        : (daysLeft === 0
          ? `<div class="countdown-row"><span class="countdown-num" style="color:var(--danger);">Today</span><span class="muted">is exam day — good luck! 🍀</span></div>`
          : `<p class="muted">Your exam date has passed. Update it to plan for the next attempt.</p>`));

  /* ---------- Build (or reuse) the plan ---------- */
  let plan = null;
  let planHtml = '';

  if (examDate && daysLeft !== null && daysLeft >= 0) {
    const budgetBlocks = Math.max(2, Math.min(8, Math.round((goalHours * 60) / 40)));
    plan = ME.plan.build(daysLeft === 0 ? 1 : daysLeft, budgetBlocks);

    const doneToday = plan.days[0] ? plan.days[0].blocks.filter(function (b) {
      return doneMap[dayKey(0) + '|' + b.topicId + '|' + b.kind];
    }).length : 0;
    const totalToday = plan.days[0] ? plan.days[0].blocks.length : 0;
    const todayPct = totalToday ? Math.round((doneToday / totalToday) * 100) : 0;

    planHtml = `
      <div class="card" style="margin-bottom:20px;">
        <div class="flex space-between flex-wrap gap-8">
          <h3 class="mt-0">Today's goal</h3>
          <div class="flex gap-8 flex-wrap">
            <label class="muted" style="font-size:0.85rem;">Daily budget:</label>
            <select id="goal-hours" style="max-width:180px;">
              <option value="2"${goalHours === 2 ? ' selected' : ''}>~2 hours/day</option>
              <option value="3"${goalHours === 3 ? ' selected' : ''}>~3 hours/day</option>
              <option value="4"${goalHours === 4 ? ' selected' : ''}>~4 hours/day</option>
              <option value="6"${goalHours === 6 ? ' selected' : ''}>~6 hours/day (cram)</option>
            </select>
          </div>
        </div>
        <div class="progress-bar" style="height:10px;"><span style="width:${todayPct}%"></span></div>
        <p class="muted" style="margin-bottom:0;margin-top:6px;">${doneToday} of ${totalToday} study blocks done today (~40 min each). Finish them all to keep your streak alive! 🔥</p>
      </div>

      <div class="plan-grid">
        ${plan.days.map(function (d, di) {
          const doneCount = d.blocks.filter(function (b) {
            return doneMap[dayKey(di) + '|' + b.topicId + '|' + b.kind];
          }).length;
          const isToday = di === 0;
          return `<div class="card plan-day${isToday ? ' plan-day-today' : ''}">
            <div class="flex space-between">
              <h3 class="mt-0" style="margin-bottom:2px;">${ME.helpers.escapeHtml(d.label)}</h3>
              <span class="muted" style="font-size:0.78rem;">${doneCount}/${d.blocks.length} ✓</span>
            </div>
            <div class="muted" style="font-size:0.78rem;margin-bottom:10px;">${d.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</div>
            ${d.blocks.length ? d.blocks.map(function (b, bi) {
              const t = ME.data.topicById[b.topicId];
              if (!t) return '';
              const key = dayKey(di) + '|' + b.topicId + '|' + b.kind;
              const isDone = !!doneMap[key];
              const w = weak[b.topicId];
              return `<a class="plan-block${isDone ? ' plan-block-done' : ''}" href="${ME.plan.blockHref(b)}" data-key="${ME.helpers.escapeHtml(key)}" data-di="${di}">
                <span class="plan-check">${isDone ? '✓' : ''}</span>
                <span class="plan-block-body">
                  <span class="plan-kind">${ME.plan.blockKindLabel(b.kind)}</span>
                  <strong>${ME.helpers.escapeHtml(t.title)}</strong>
                  <span class="muted" style="font-size:0.72rem;">${ME.helpers.escapeHtml((ME.data.courseById[t.course || 'bme'] || {}).shortName || '')} · Unit ${ME.helpers.unitRoman(t.unit)}</span>
                  ${w && w.label !== 'steady' ? `<span class="plan-why muted">${ME.helpers.escapeHtml(w.reasons.join(' · ') || w.label)}</span>` : ''}
                </span>
              </a>`;
            }).join('') : '<p class="muted" style="margin-bottom:0;">Rest day — or revise anything you like.</p>'}
          </div>`;
        }).join('')}
      </div>

      <div class="flex gap-8 flex-wrap" style="margin-top:16px;">
        <button class="btn" id="regen-plan">🔄 Regenerate plan</button>
        <button class="btn" id="clear-done">Clear today's checkmarks</button>
        <a class="btn" href="#/revision">Emergency revision modes →</a>
      </div>
    `;
  } else if (daysLeft !== null && daysLeft < 0) {
    planHtml = `<div class="empty-state">
      <h2>Exam date has passed</h2>
      <p>Set a new date below, or jump into <a href="#/revision">quick revision</a> / <a href="#/exam">mock exams</a>.</p>
    </div>`;
  } else {
    planHtml = `<div class="empty-state">
      <h2>No exam date set</h2>
      <p>Pick your exam date above — the planner takes care of the rest.</p>
    </div>`;
  }

  /* ---------- Weakness analysis ---------- */
  const weakRows = ME.plan.priorityQueue()
    .filter(function (t) { return weak[t.id].score >= 18; })
    .slice(0, 8);

  const weaknessHtml = `
    <div class="card" style="margin-bottom:20px;">
      <h3 class="mt-0">Your weakest points right now</h3>
      ${weakRows.length ? `<table class="plan-weak-table"><thead><tr><th>Topic</th><th style="width:34%;">Weakness</th><th style="width:18%;">Why</th></tr></thead><tbody>
        ${weakRows.map(function (t) {
          const w = weak[t.id];
          return `<tr>
            <td><a href="#/topic/${t.id}">${ME.helpers.escapeHtml(t.title)}</a><div class="muted" style="font-size:0.75rem;">${ME.helpers.courseTag(t.course || 'bme')}${ME.helpers.unitTag(t.unit)}</div></td>
            <td><div class="flex gap-8"><div class="weakness-bar"><span class="weakness-fill weakness-${w.label}" style="width:${w.score}%"></span></div><span class="muted" style="font-size:0.8rem;white-space:nowrap;">${ME.helpers.escapeHtml(w.label)}</span></div></td>
            <td class="muted" style="font-size:0.8rem;">${ME.helpers.escapeHtml(w.reasons.join(', ') || 'needs a refresher')}</td>
          </tr>`;
        }).join('')}
      </tbody></table>` : `<p class="muted">Nothing flagged yet. Practise some <a href="#/questions">questions</a> or take a <a href="#/exam">mock exam</a> so the planner can find your weak spots.</p>`}
      <p class="muted" style="margin-bottom:0;">Weakness = topic status + quiz accuracy + mock-exam scores + flashcard ratings + mistakes, all combined.</p>
    </div>`;

  /* ---------- Page ---------- */
  const html = `
    <h1>Smart Study Plan</h1>
    <p class="muted">A schedule built around <strong>your</strong> weak points — weakest topics get the most time, and every day mixes learning, practice and revision.</p>

    <div class="card plan-exam-card" style="margin-bottom:20px;">
      <div class="flex space-between flex-wrap gap-14">
        <div>
          <h3 class="mt-0">Exam date</h3>
          <input type="date" id="exam-date" value="${ME.helpers.escapeHtml(examDate)}" aria-label="Exam date">
        </div>
        <div style="text-align:right;">${countdownHtml}</div>
      </div>
    </div>

    ${weaknessHtml}
    ${planHtml}
  `;
  ME.setView(html);

  /* ---------- Wiring ---------- */
  document.getElementById('exam-date').addEventListener('change', function (e) {
    ME.store.setExamDate(e.target.value);
    ME.render();
  });

  const goalSel = document.getElementById('goal-hours');
  if (goalSel) {
    goalSel.addEventListener('change', function (e) {
      ME.store.set('plan-goal-hours', parseInt(e.target.value, 10) || 3);
      ME.render();
    });
  }

  const regen = document.getElementById('regen-plan');
  if (regen) regen.addEventListener('click', function () { ME.render(); });

  const clearDone = document.getElementById('clear-done');
  if (clearDone) clearDone.addEventListener('click', function () {
    const dm = ME.store.get('plan-done', {});
    const tk = dayKey(0);
    Object.keys(dm).forEach(function (k) { if (k.indexOf(tk + '|') === 0) delete dm[k]; });
    ME.store.set('plan-done', dm);
    ME.render();
  });

  ME.helpers.qsa('.plan-block').forEach(function (el) {
    el.addEventListener('click', function (e) {
      // Let the link navigate; just record the checkmark in passing.
      const key = el.getAttribute('data-key');
      const di = parseInt(el.getAttribute('data-di'), 10);
      if (!key || di !== 0) return;
      const dm = ME.store.get('plan-done', {});
      if (dm[key]) delete dm[key]; else dm[key] = true;
      ME.store.set('plan-done', dm);
      // Completing today's full plan counts as study activity for the streak.
      const day = plan && plan.days[0];
      if (day) {
        const allDone = day.blocks.every(function (b) { return dm[dayKey(0) + '|' + b.topicId + '|' + b.kind]; });
        if (allDone) ME.store.recordActivity();
      }
    });
  });

  function dayKey(di) {
    const d = plan && plan.days[di] ? plan.days[di].date : new Date();
    const pad = function (n) { return String(n).padStart(2, '0'); };
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
};
