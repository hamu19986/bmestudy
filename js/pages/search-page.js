/* ============================================================
   GLOBAL SEARCH
   ============================================================ */
ME.routes.search = function (parsed) {
  const query = (parsed.query.q || '').trim();
  const needle = query.toLowerCase();

  let topicResults = [], questionResults = [], flashcardResults = [], glossaryResults = [], formulaResults = [];

  if (needle) {
    topicResults = ME.data.allTopics.filter(function (t) {
      return (t.title + ' ' + (t.summary || '') + ' ' + (t.overview || '') + ' ' + (t.working || '')).toLowerCase().includes(needle);
    });
    questionResults = ME.data.questions.filter(function (q) {
      return (q.question + ' ' + (q.answer || '')).toLowerCase().includes(needle);
    });
    flashcardResults = ME.data.flashcards.filter(function (c) {
      return (c.front + ' ' + c.back).toLowerCase().includes(needle);
    });
    glossaryResults = ME.data.glossary.filter(function (g) {
      return (g.term + ' ' + g.simple + ' ' + g.technical).toLowerCase().includes(needle);
    });
    ME.data.formulas.forEach(function (sec) {
      sec.items.forEach(function (f) {
        if ((f.formula + ' ' + f.meaning).toLowerCase().includes(needle)) formulaResults.push(f);
      });
    });
  }

  const totalResults = topicResults.length + questionResults.length + flashcardResults.length + glossaryResults.length + formulaResults.length;

  const html = `
    <h1>Search</h1>
    <div class="card" style="margin-bottom:18px;">
      <label class="muted" style="font-size:0.8rem;">Search everything — topics, questions, flashcards, glossary, formulas</label>
      <input type="text" id="global-search" placeholder="e.g. lathe, entropy, Pelton" value="${ME.helpers.escapeHtml(query)}">
    </div>
    ${!needle ? '<p class="muted">Type something above to search across the whole app.</p>' : `
      <p class="muted">${totalResults} result(s) for "${ME.helpers.escapeHtml(query)}"</p>

      ${topicResults.length ? `<div class="topic-section"><h2>📘 Topics (${topicResults.length})</h2><div class="grid grid-2">${topicResults.map(function (t) {
        return `<a class="card card-link" href="#/topic/${t.id}">${ME.helpers.unitTag(t.unit)}<h3>${ME.helpers.escapeHtml(t.title)}</h3><p class="muted">${ME.helpers.escapeHtml(t.summary || '')}</p></a>`;
      }).join('')}</div></div>` : ''}

      ${questionResults.length ? `<div class="topic-section"><h2>❓ Questions (${questionResults.length})</h2><p class="muted">${questionResults.length} question(s) found.</p><a class="btn btn-primary" href="#/questions?text=${encodeURIComponent(query)}">Open in Question Bank →</a></div>` : ''}

      ${flashcardResults.length ? `<div class="topic-section"><h2>🗂️ Flashcards (${flashcardResults.length})</h2><ul>${flashcardResults.slice(0, 10).map(function (c) {
        return `<li>${ME.helpers.escapeHtml(c.front)}</li>`;
      }).join('')}</ul><a class="btn" href="#/flashcards">Open Flashcards →</a></div>` : ''}

      ${glossaryResults.length ? `<div class="topic-section"><h2>🔤 Glossary (${glossaryResults.length})</h2>${glossaryResults.map(function (g) {
        return `<div class="glossary-term"><h3>${ME.helpers.escapeHtml(g.term)}</h3><p>${ME.helpers.escapeHtml(g.simple)}</p></div>`;
      }).join('')}</div>` : ''}

      ${formulaResults.length ? `<div class="topic-section"><h2>∑ Formulas (${formulaResults.length})</h2>${formulaResults.map(function (f) {
        return `<div class="formula-box">${ME.helpers.escapeHtml(f.formula)}<div class="muted">${ME.helpers.escapeHtml(f.meaning || '')}</div></div>`;
      }).join('')}</div>` : ''}

      ${totalResults === 0 ? '<div class="empty-state"><h2>No results found.</h2><p class="muted">Try a shorter or more general keyword.</p></div>' : ''}
    `}
  `;
  ME.setView(html);

  const input = document.getElementById('global-search');
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
  let searchTimer;
  input.addEventListener('input', function (e) {
    clearTimeout(searchTimer);
    const val = e.target.value;
    searchTimer = setTimeout(function () {
      location.hash = '#/search' + (val ? '?q=' + encodeURIComponent(val) : '');
    }, 400);
  });
};
