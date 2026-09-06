/* ============================================================
   FORMULA SHEET PAGE — grouped by subject, then section
   Every formula shows meaning, units, condition and a
   common-mistake note. Searchable across all subjects.
   ============================================================ */

ME.routes.formulas = function (parsed) {
  const q = parsed.query;
  const text = (q.text || '').toLowerCase();
  const scope = q.course || '';

  function itemMatches(item) {
    if (!text) return true;
    return (item.formula + ' ' + (item.meaning || '') + ' ' + (item.mistake || '')).toLowerCase().includes(text);
  }

  function secMatchesCourse(sec, cid) {
    return !cid || (sec.course || 'bme') === cid;
  }

  const sections = ME.data.formulas
    .filter(function (sec) { return secMatchesCourse(sec, scope); })
    .map(function (sec) {
      return { section: sec.section, course: sec.course || 'bme', items: sec.items.filter(itemMatches) };
    }).filter(function (sec) { return sec.items.length; });

  const totalAll = ME.data.formulas.reduce(function (n, s) { return n + s.items.length; }, 0);
  const totalShown = sections.reduce(function (n, s) { return n + s.items.length; }, 0);

  const courseBtns = ME.data.formulas.map(function (s) { return s.course || 'bme'; });
  const courseIds = Array.from(new Set(courseBtns)).filter(function (cid) { return !scope || cid === scope; });

  const html = `
    <h1>Formula Sheet</h1>
    <p class="muted">${totalShown} of ${totalAll} formulas${text ? ' matching "' + ME.helpers.escapeHtml(text) + '"' : ''}, organised by subject and section. Every entry shows the symbols, units and a common mistake to avoid.</p>

    <div class="card" style="margin-bottom:18px;">
      <label class="muted" style="font-size:0.8rem;">Search formulas</label>
      <input type="text" id="formula-search" placeholder="e.g. Poisson, COP, enthalpy, de Broglie" value="${ME.helpers.escapeHtml(text)}">
    </div>

    <div class="filters" style="margin-bottom:20px;">
      <a class="btn btn-sm ${!scope ? 'btn-primary' : ''}" href="#/formulas${text ? '?text=' + encodeURIComponent(text) : ''}">All subjects</a>
      ${courseIds.map(function (cid) {
        const c = ME.data.courseById[cid];
        return c ? `<a class="btn btn-sm ${scope === cid ? 'btn-primary' : ''}" href="#/formulas?course=${cid}${text ? '&text=' + encodeURIComponent(text) : ''}">${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</a>` : '';
      }).join('')}
    </div>

    <div id="formula-list">
      ${sections.length ? sections.map(function (sec) {
        const c = ME.data.courseById[sec.course];
        return `<div class="topic-section" id="sec-${ME.helpers.escapeHtml((c ? c.shortName + '-' : '') + sec.section).replace(/\s+/g, '-')}">
          <h2>${c ? c.icon + ' ' + ME.helpers.escapeHtml(c.shortName) + ' — ' : ''}${ME.helpers.escapeHtml(sec.section)}</h2>
          ${sec.items.map(function (f) {
            return `<div class="formula-box">
              <div style="font-size:1.1rem;font-weight:600;">${ME.helpers.escapeHtml(f.formula)}</div>
              <div style="margin-top:4px;">${ME.helpers.escapeHtml(f.meaning || '')}</div>
              <div class="muted" style="font-size:0.85rem;margin-top:4px;">${f.units ? 'Units: ' + ME.helpers.escapeHtml(f.units) : ''}</div>
              ${f.mistake ? `<div class="mistake-box" style="margin-top:8px;">⚠️ Common mistake: ${ME.helpers.escapeHtml(f.mistake)}</div>` : ''}
            </div>`;
          }).join('')}
        </div>`;
      }).join('') : '<div class="empty-state">No formulas match that search.</div>'}
    </div>
  `;
  ME.setView(html);

  let searchTimer;
  document.getElementById('formula-search').addEventListener('input', function (e) {
    clearTimeout(searchTimer);
    const val = e.target.value;
    searchTimer = setTimeout(function () {
      location.hash = '#/formulas' + (scope || val ? '?' : '') + (scope ? 'course=' + scope : '') + (scope && val ? '&' : '') + (val ? 'text=' + encodeURIComponent(val) : '');
    }, 400);
  });
};
