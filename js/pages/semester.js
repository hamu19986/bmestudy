/* ============================================================
   SEMESTER MAP — visual overview of all nine subjects
   ============================================================ */
ME.routes.semester = function () {
  const overview = ME.progress.subjectsOverview();
  const html = `
    <h1>Semester I — Map</h1>
    <p class="muted">Every subject, every unit, one screen. Click a subject to open its full curriculum.</p>
    ${overview.map(function (o) {
      const c = o.course;
      return `<div class="card subject-map-card" style="margin-bottom:14px;">
        <a href="#/subject/${c.id}" class="flex space-between flex-wrap gap-8" style="text-decoration:none;color:inherit;">
          <h3 style="margin-bottom:0;">${c.icon} ${ME.helpers.escapeHtml(c.name)}</h3>
          <span class="muted">${ME.helpers.escapeHtml(c.code)} · ${c.credits} credits · ${c.ltp}</span>
        </a>
        <div class="grid grid-4" style="margin-top:12px;">
          ${[1, 2, 3, 4].map(function (n) {
            const pct = ME.helpers.unitCompletionPct(c.id, n);
            const topics = ME.helpers.topicsFor(c.id, n);
            return `<a href="#/subject/${c.id}/unit/${n}" style="text-decoration:none;color:inherit;">
              <div class="flex space-between"><span class="muted" style="font-size:0.8rem;">Unit ${ME.helpers.unitRoman(n)}</span><span style="font-size:0.8rem;">${pct}%</span></div>
              ${ME.helpers.bar(pct)}
              <div class="muted" style="font-size:0.72rem;margin-top:2px;">${topics.length} topics</div>
            </a>`;
          }).join('')}
        </div>
      </div>`;
    }).join('')}
    <p class="muted" style="margin-top:14px;">Across the semester: ${ME.data.allTopics.length} topics · ${ME.data.questions.length} questions · ${ME.data.flashcards.length} flashcards.</p>
  `;
  ME.setView(html);
};
