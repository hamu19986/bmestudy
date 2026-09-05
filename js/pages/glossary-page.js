/* ============================================================
   GLOSSARY PAGE — A-Z engineering terms
   ============================================================ */
ME.routes.glossary = function (parsed) {
  const q = parsed.query;
  const text = (q.text || '').toLowerCase();

  const filtered = text ? ME.data.glossary.filter(function (g) {
    return (g.term + ' ' + g.simple + ' ' + g.technical).toLowerCase().includes(text);
  }) : ME.data.glossary;

  const letters = Array.from(new Set(ME.data.glossary.map(function (g) { return g.term[0].toUpperCase(); }))).sort();

  const html = `
    <h1>Glossary</h1>
    <p class="muted">${filtered.length} of ${ME.data.glossary.length} terms. Every term has a simple meaning and a technical (exam-ready) definition.</p>
    <div class="card" style="margin-bottom:16px;">
      <label class="muted" style="font-size:0.8rem;">Search glossary</label>
      <input type="text" id="glossary-search" placeholder="e.g. entropy" value="${ME.helpers.escapeHtml(text)}">
    </div>
    ${!text ? `<div class="glossary-jump">${letters.map(function (l) { return '<a href="#letter-' + l + '">' + l + '</a>'; }).join('')}</div>` : ''}
    <div id="glossary-list">
      ${filtered.length ? filtered.map(function (g, i) {
        const showAnchor = !text && (i === 0 || filtered[i - 1].term[0].toUpperCase() !== g.term[0].toUpperCase());
        return `${showAnchor ? `<div id="letter-${g.term[0].toUpperCase()}"></div>` : ''}
        <div class="glossary-term">
          <h3>${ME.helpers.escapeHtml(g.term)}</h3>
          <p><strong>Simple:</strong> ${ME.helpers.escapeHtml(g.simple)}</p>
          <p><strong>Technical:</strong> ${ME.helpers.escapeHtml(g.technical)}</p>
          <p class="muted">${ME.helpers.escapeHtml(g.where || '')}${g.related && g.related.length ? ' &middot; Related: ' + g.related.map(ME.helpers.escapeHtml).join(', ') : ''}</p>
        </div>`;
      }).join('') : '<div class="empty-state">No terms match that search.</div>'}
    </div>
  `;
  ME.setView(html);

  let searchTimer;
  document.getElementById('glossary-search').addEventListener('input', function (e) {
    clearTimeout(searchTimer);
    const val = e.target.value;
    searchTimer = setTimeout(function () {
      location.hash = '#/glossary' + (val ? '?text=' + encodeURIComponent(val) : '');
    }, 400);
  });
};
