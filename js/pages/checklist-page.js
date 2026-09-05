/* ============================================================
   MASTER SYLLABUS CHECKLIST
   Every official syllabus line item, mapped to topic status.
   ============================================================ */
ME.routes.checklist = function () {
  const statusIcon = { 'not-started': '☐', 'learning': '◐', 'practiced': '◕', 'mastered': '☑' };
  const statusOrder = ['not-started', 'learning', 'practiced', 'mastered'];

  let totalItems = 0, totalDone = 0;

  const unitsHtml = ME.data.syllabus.map(function (unit) {
    const rows = unit.items.map(function (item) {
      // An item's status = the "best" status among its mapped topics (usually 1 topic per item).
      const statuses = item.topics.map(function (tid) { return ME.store.getTopicStatus(tid); });
      const best = statuses.reduce(function (a, b) { return statusOrder.indexOf(b) > statusOrder.indexOf(a) ? b : a; }, 'not-started');
      totalItems++;
      if (best === 'mastered') totalDone++;
      const linkId = item.topics[0];
      return `<div class="checklist-row">
        <span class="label">${statusIcon[best]} ${ME.helpers.escapeHtml(item.label)}</span>
        ${ME.helpers.statusBadge(best)}
        ${linkId ? `<a class="btn btn-sm" href="#/topic/${linkId}">Open →</a>` : ''}
      </div>`;
    }).join('');
    const unitDone = unit.items.filter(function (item) {
      const statuses = item.topics.map(function (tid) { return ME.store.getTopicStatus(tid); });
      return statuses.some(function (s) { return s === 'mastered'; });
    }).length;
    return `<div class="checklist-unit">
      <div class="flex space-between" style="margin-bottom:4px;"><h2 style="margin-bottom:0;">${ME.helpers.escapeHtml(unit.title)}</h2><span class="muted">${unitDone}/${unit.items.length} mastered</span></div>
      <div class="progress-bar" style="margin-bottom:10px;"><span style="width:${Math.round(unitDone / unit.items.length * 100)}%"></span></div>
      <div class="card">${rows}</div>
    </div>`;
  }).join('');

  const html = `
    <h1>Master Checklist</h1>
    <p class="muted">Every official syllabus topic for 25ESC-ME-103H, in one place. ${totalDone}/${totalItems} fully mastered.</p>
    <div class="progress-bar" style="margin-bottom:20px;"><span style="width:${Math.round(totalDone / totalItems * 100)}%"></span></div>
    ${unitsHtml}
    <p class="muted" style="margin-top:10px;">Legend: ☐ Not started &middot; ◐ Learning &middot; ◕ Practiced &middot; ☑ Mastered. Update a topic's status from its own page.</p>
  `;
  ME.setView(html);
};
