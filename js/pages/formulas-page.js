/* ============================================================
   FORMULA SHEET PAGE
   Every formula in FORMULA_SHEET, grouped by section, with
   meaning, units, condition and a common-mistake note. Searchable.
   ============================================================ */

ME.routes.formulas = function (parsed) {
  const q = parsed.query;
  const text = (q.text || '').toLowerCase();

  function itemMatches(item) {
    if (!text) return true;
    return (item.formula + ' ' + (item.meaning || '') + ' ' + (item.mistake || '')).toLowerCase().includes(text);
  }

  const sections = ME.data.formulas.map(function (sec) {
    return { section: sec.section, items: sec.items.filter(itemMatches) };
  }).filter(function (sec) { return sec.items.length; });

  const totalShown = sections.reduce(function (n, s) { return n + s.items.length; }, 0);
  const totalAll = ME.data.formulas.reduce(function (n, s) { return n + s.items.length; }, 0);

  const html = `
    <h1>Formula Sheet</h1>
    <p class="muted">${totalShown} of ${totalAll} formulas${text ? ' matching "' + ME.helpers.escapeHtml(text) + '"' : ''}, organised by section. Every entry shows the symbols, units and a common mistake to avoid.</p>

    <div class="card" style="margin-bottom:18px;">
      <label class="muted" style="font-size:0.8rem;">Search formulas</label>
      <input type="text" id="formula-search" placeholder="e.g. Poisson, COP, enthalpy" value="${ME.helpers.escapeHtml(text)}">
    </div>

    <div class="filters" style="margin-bottom:20px;">
      ${ME.data.formulas.map(function (s) { return `<a class="btn btn-sm" href="#/formulas#sec-${ME.helpers.escapeHtml(s.section).replace(/\s+/g, '-')}">${ME.helpers.escapeHtml(s.section)}</a>`; }).join('')}
    </div>

    <div id="formula-list">
      ${sections.length ? sections.map(function (sec) {
        return `<div class="topic-section" id="sec-${ME.helpers.escapeHtml(sec.section).replace(/\s+/g, '-')}">
          <h2>${ME.helpers.escapeHtml(sec.section)}</h2>
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
      location.hash = '#/formulas' + (val ? '?text=' + encodeURIComponent(val) : '');
    }, 400);
  });
};
