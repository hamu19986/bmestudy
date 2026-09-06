/* ============================================================
   MASTER SYLLABUS CHECKLIST — all 9 subjects
   Every official syllabus line item, mapped to topic status.
   Supports ?course=<id> scoping and a course jump-strip.
   ============================================================ */
ME.routes.checklist = function () {
  const q = ME.helpers.parseHash().query;
  const scope = q.course || '';
  const statusIcon = { 'not-started': '☐', 'learning': '◐', 'practiced': '◕', 'mastered': '☑' };
  const statusOrder = ['not-started', 'learning', 'practiced', 'mastered'];

  let totalItems = 0, totalDone = 0;

  function unitBlock(courseId, unit) {
    const rows = unit.items.map(function (item) {
      // An item's status = the "best" status among its mapped topics.
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
    const donePct = unit.items.length ? Math.round(unitDone / unit.items.length * 100) : 0;
    return `<div class="checklist-unit">
      <div class="flex space-between" style="margin-bottom:4px;"><h2 style="margin-bottom:0;">${ME.helpers.escapeHtml(unit.title)}</h2><span class="muted">${unitDone}/${unit.items.length} mastered</span></div>
      <div class="progress-bar" style="margin-bottom:10px;"><span style="width:${donePct}%"></span></div>
      <div class="card">${rows}</div>
    </div>`;
  }

  const courseIds = Object.keys(ME.data.syllabus).filter(function (cid) {
    return !scope || cid === scope;
  });

  const jumpStrip = `<div class="filters" style="margin-bottom:18px;">
    <a class="btn btn-sm ${!scope ? 'btn-primary' : ''}" href="#/checklist">All subjects</a>
    ${Object.keys(ME.data.syllabus).map(function (cid) {
      const c = ME.data.courseById[cid];
      return c ? `<a class="btn btn-sm ${scope === cid ? 'btn-primary' : ''}" href="#/checklist?course=${cid}">${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</a>` : '';
    }).join('')}
  </div>`;

  const unitsHtml = courseIds.map(function (cid) {
    const c = ME.data.courseById[cid] || { shortName: cid.toUpperCase(), icon: '📘', name: cid };
    return `<div class="checklist-course" style="margin-bottom:26px;">
      <h2 class="checklist-course-title" style="margin-bottom:10px;">${c.icon} ${ME.helpers.escapeHtml(c.name)} <span class="muted" style="font-size:0.8rem;font-weight:400;">${ME.helpers.escapeHtml(c.code || '')}</span></h2>
      ${ME.data.syllabus[cid].map(function (unit) { return unitBlock(cid, unit); }).join('')}
    </div>`;
  }).join('');

  const html = `
    <h1>Master Checklist</h1>
    <p class="muted">Every official syllabus item of the semester, in one place. ${totalDone}/${totalItems} fully mastered.</p>
    ${totalItems ? `<div class="progress-bar" style="margin-bottom:20px;"><span style="width:${Math.round(totalDone / totalItems * 100)}%"></span></div>` : ''}
    ${jumpStrip}
    ${unitsHtml || '<div class="empty-state">No syllabus data loaded.</div>'}
    <p class="muted" style="margin-top:10px;">Legend: ☐ Not started &middot; ◐ Learning &middot; ◕ Practiced &middot; ☑ Mastered. Update a topic's status from its own page.</p>
  `;
  ME.setView(html);
};
