/* ============================================================
   MY MISTAKES — retry bank + weaknesses analytics (course-aware)
   ============================================================ */
ME.routes.mistakes = function () {
  const bank = ME.store.getMistakes();
  const items = Object.keys(bank).map(function (id) { return bank[id]; })
    .sort(function (a, b) { return new Date(b.date) - new Date(a.date); });

  /* ---------- My Weaknesses analytics ---------- */
  const byCourse = {}, byTopic = {};
  items.forEach(function (m) {
    const cid = m.course || 'bme';
    byCourse[cid] = (byCourse[cid] || 0) + 1;
    if (m.topic) byTopic[m.topic] = (byTopic[m.topic] || 0) + 1;
  });
  const courseRows = Object.keys(byCourse)
    .map(function (cid) { return { cid: cid, n: byCourse[cid] }; })
    .sort(function (a, b) { return b.n - a.n; });
  const topicRows = Object.keys(byTopic)
    .map(function (tid) { return { tid: tid, n: byTopic[tid] }; })
    .sort(function (a, b) { return b.n - a.n; })
    .slice(0, 5);

  const weaknessHtml = items.length ? `
    <div class="grid grid-2" style="margin-bottom:20px;">
      <div class="card">
        <h3 class="mt-0">🎯 My weaknesses — by subject</h3>
        ${courseRows.map(function (r) {
          const c = ME.data.courseById[r.cid] || { icon: '📘', shortName: r.cid.toUpperCase() };
          const max = courseRows[0].n;
          return `<div style="margin-bottom:8px;">
            <div class="flex space-between"><span>${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</span><span class="muted">${r.n} mistake${r.n === 1 ? '' : 's'}</span></div>
            ${ME.helpers.bar(Math.round(r.n / max * 100))}
          </div>`;
        }).join('')}
      </div>
      <div class="card">
        <h3 class="mt-0">📌 Most-mistaken topics</h3>
        ${topicRows.length ? `<ul>${topicRows.map(function (r) {
          const t = ME.data.topicById[r.tid];
          return `<li><a href="#/topic/${r.tid}">${t ? ME.helpers.escapeHtml(t.title) : r.tid}</a> — ${r.n} mistake${r.n === 1 ? '' : 's'}</li>`;
        }).join('')}</ul>
        <a class="btn btn-sm" href="#/questions">Practice more →</a>` : '<p class="muted" style="margin-bottom:0;">Mistakes from the mock exam aren\'t topic-tagged yet — retry them below.</p>'}
      </div>
    </div>` : '';

  const html = `
    <h1>My Mistakes</h1>
    <p class="muted">${items.length} item(s) saved for retry. Anything you get wrong (or mark for retry) in the Question Bank lands here automatically, across every subject.</p>
    ${weaknessHtml}
    <div id="mistake-list">
      ${items.length ? items.map(function (m) {
        const c = ME.data.courseById[m.course || 'bme'];
        return `<div class="card mistake-card" data-mid="${m.id}" style="margin-bottom:14px;">
          <div class="flex space-between flex-wrap gap-8" style="margin-bottom:6px;">
            <div>${c ? ME.helpers.courseTag(c) : ''}${ME.helpers.unitTag(m.unit)}<span class="muted" style="margin-left:6px;">${new Date(m.date).toLocaleDateString()}</span></div>
          </div>
          <p style="font-weight:600;">${ME.helpers.escapeHtml(m.question)}</p>
          <p class="mistake-box">Your answer: ${ME.helpers.escapeHtml(m.given || '(none recorded)')}</p>
          <p><strong>Correct answer:</strong> ${ME.helpers.escapeHtml(m.correct)}</p>
          ${m.explanation && m.explanation !== '—' ? `<p class="muted">${ME.helpers.escapeHtml(m.explanation)}</p>` : ''}
          <div class="flex gap-8">
            ${m.topic ? `<a class="btn btn-sm" href="#/topic/${m.topic}">Review topic →</a>` : ''}
            <button class="btn btn-sm btn-resolved">✓ I've got this now — remove</button>
          </div>
        </div>`;
      }).join('') : '<div class="empty-state"><h2>No mistakes saved 🎉</h2><p class="muted">Practice some questions — anything you get wrong will show up here for focused retry.</p><a class="btn btn-primary" href="#/questions">Go to Question Bank →</a></div>'}
    </div>
  `;
  ME.setView(html);

  ME.helpers.qsa('.btn-resolved').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const card = btn.closest('.mistake-card');
      const id = card.getAttribute('data-mid');
      ME.store.removeMistake(id);
      card.remove();
      if (!Object.keys(ME.store.getMistakes()).length) ME.render();
    });
  });
};
