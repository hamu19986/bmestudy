/* ============================================================
   MY MISTAKES — retry bank
   ============================================================ */
ME.routes.mistakes = function () {
  const bank = ME.store.getMistakes();
  const items = Object.keys(bank).map(function (id) { return bank[id]; })
    .sort(function (a, b) { return new Date(b.date) - new Date(a.date); });

  const html = `
    <h1>My Mistakes</h1>
    <p class="muted">${items.length} item(s) saved for retry. Anything you get wrong (or mark for retry) in the Question Bank lands here automatically.</p>
    <div id="mistake-list">
      ${items.length ? items.map(function (m) {
        return `<div class="card mistake-card" data-mid="${m.id}" style="margin-bottom:14px;">
          <div class="flex space-between flex-wrap gap-8" style="margin-bottom:6px;">
            <div>${ME.helpers.unitTag(m.unit)}<span class="muted" style="margin-left:6px;">${new Date(m.date).toLocaleDateString()}</span></div>
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
