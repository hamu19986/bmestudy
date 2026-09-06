/* ---------------- Units overview ---------------- */
ME.routes.units = function () {
  const html = `
    <h1>Study by Unit</h1>
    <p class="muted">Everything in the official syllabus, organised the way it will be examined.</p>
    <div class="grid grid-2">
      ${ME.data.units.map(function (u) {
        const pct = ME.progress.unitCompletionPct(u.n);
        return `<a class="card card-link" href="#/unit/${u.n}">
          <div class="flex space-between" style="margin-bottom:6px;">${ME.helpers.unitTag(u.n)}<span class="muted">${u.topics.length} topics</span></div>
          <h3>${u.title} — ${ME.helpers.escapeHtml(u.subtitle)}</h3>
          <div class="progress-bar" style="margin-top:8px;"><span style="width:${pct}%"></span></div>
          <div class="muted" style="margin-top:4px;font-size:0.82rem;">${pct}% complete</div>
        </a>`;
      }).join('')}
    </div>
  `;
  ME.setView(html);
};

/* ---------------- Single unit: topics grouped by category ---------------- */
ME.routes.unit = function (parsed) {
  const n = parseInt(parsed.parts[1], 10);
  const unit = ME.data.units.find(function (u) { return u.n === n; });
  if (!unit) { ME.setView('<div class="empty-state">Unit not found.</div>'); return; }

  const byCategory = {};
  unit.topics.forEach(function (t) {
    const cat = t.category || 'General';
    (byCategory[cat] = byCategory[cat] || []).push(t);
  });

  const html = `
    ${ME.renderCrumbs([['Units', '#/units'], [unit.title, null]])}
    <h1>${unit.title} — ${ME.helpers.escapeHtml(unit.subtitle)}</h1>
    <div class="flex gap-8 flex-wrap" style="margin-bottom:18px;">
      <a class="btn" href="#/questions?unit=${n}">Practice Unit ${n} questions</a>
      <a class="btn" href="#/flashcards?unit=${n}">Unit ${n} flashcards</a>
      <a class="btn" href="#/exam">Take a mock exam</a>
    </div>
    ${Object.keys(byCategory).map(function (cat) {
      return `<div class="topic-section"><h2>${ME.helpers.escapeHtml(cat)}</h2>${ME.helpers.topicCardsGrid(byCategory[cat])}</div>`;
    }).join('')}
  `;
  ME.setView(html);
};

/* ---------------- Topic detail ---------------- */
function renderPartsTable(parts) {
  if (!parts || !parts.length) return '';
  return `<table><thead><tr><th style="width:26%;">Part</th><th>Function</th></tr></thead><tbody>
    ${parts.map(function (p) { return `<tr><td><strong>${ME.helpers.escapeHtml(p.name)}</strong></td><td>${ME.helpers.escapeHtml(p.function)}</td></tr>`; }).join('')}
  </tbody></table>`;
}
function renderOperationsTable(ops) {
  if (!ops || !ops.length) return '';
  return `<table><thead><tr><th style="width:26%;">Operation</th><th>Description</th></tr></thead><tbody>
    ${ops.map(function (o) { return `<tr><td><strong>${ME.helpers.escapeHtml(o.name)}</strong></td><td>${ME.helpers.escapeHtml(o.description)}</td></tr>`; }).join('')}
  </tbody></table>`;
}
function renderFormulas(list) {
  if (!list || !list.length) return '';
  return list.map(function (f) {
    return `<div class="formula-box">
      <div style="font-size:1.05rem;">${ME.helpers.escapeHtml(f.formula)}</div>
      <div class="muted mono" style="font-size:0.82rem;margin-top:4px;">${ME.helpers.escapeHtml(f.meaning || '')}${f.units ? ' &middot; Units: ' + ME.helpers.escapeHtml(f.units) : ''}</div>
      ${f.condition ? `<div class="muted" style="font-size:0.82rem;margin-top:2px;">When to use: ${ME.helpers.escapeHtml(f.condition)}</div>` : ''}
    </div>`;
  }).join('');
}
function renderTypesList(types) {
  if (!types || !types.length) return '';
  return '<ul>' + types.map(function (t) { return '<li>' + ME.helpers.escapeHtml(t) + '</li>'; }).join('') + '</ul>';
}
function renderComparisonTable(table) {
  if (!table || !table.rows || !table.rows.length) return '';
  const cols = table.columns || [];
  return `<table class="comparison-table"><thead><tr>${cols.map(function (c) { return '<th>' + ME.helpers.escapeHtml(c) + '</th>'; }).join('')}</tr></thead><tbody>
    ${table.rows.map(function (row) { return '<tr>' + row.map(function (cell) { return '<td>' + ME.helpers.escapeHtml(cell) + '</td>'; }).join('') + '</tr>'; }).join('')}
  </tbody></table>`;
}
function renderStringList(list) {
  if (!list || !list.length) return '';
  return '<ul class="nice-list">' + list.map(function (item) { return '<li>' + ME.helpers.escapeHtml(item) + '</li>'; }).join('') + '</ul>';
}

ME.routes.topic = function (parsed) {
  const id = parsed.parts[1];
  const topic = ME.data.topicById[id];
  if (!topic) { ME.setView('<div class="empty-state">Topic not found.</div>'); return; }
  ME.store.logVisit(id);

  const unitObj = ME.data.units.find(function (u) { return u.n === topic.unit; });
  const status = ME.store.getTopicStatus(id);
  const isBookmarked = ME.store.getBookmarks().includes(id);
  const relatedQs = ME.data.questions.filter(function (q) { return q.topic === id; });

  // Prev / next topic navigation within the unit (syllabus order).
  const unitTopics = unitObj ? unitObj.topics : [];
  const tIdx = unitTopics.findIndex(function (t) { return t.id === id; });
  const prevTopic = tIdx > 0 ? unitTopics[tIdx - 1] : null;
  const nextTopic = tIdx >= 0 && tIdx < unitTopics.length - 1 ? unitTopics[tIdx + 1] : null;
  const topicNavHtml = (prevTopic || nextTopic) ? `<nav class="topic-nav" aria-label="Topic navigation">
    ${prevTopic ? `<a class="card card-link topic-nav-prev" href="#/topic/${prevTopic.id}"><span class="muted">← Previous topic</span><strong>${ME.helpers.escapeHtml(prevTopic.title)}</strong></a>` : '<span></span>'}
    ${nextTopic ? `<a class="card card-link topic-nav-next" href="#/topic/${nextTopic.id}"><span class="muted">Next topic →</span><strong>${ME.helpers.escapeHtml(nextTopic.title)}</strong></a>` : '<span></span>'}
  </nav>` : '';

  let sectionNum = 0;
  function section(title, bodyHtml) {
    if (!bodyHtml) return '';
    sectionNum++;
    return `<div class="topic-section"><h2><span class="num">${String(sectionNum).padStart(2, '0')}</span> ${title}</h2>${bodyHtml}</div>`;
  }

  const html = `
    ${ME.renderCrumbs([['Units', '#/units'], [unitObj ? unitObj.title : '', '#/unit/' + topic.unit], [topic.title, null]])}
    <div class="flex space-between flex-wrap gap-8" style="margin-bottom:6px;">
      <h1 style="margin-bottom:0;">${ME.helpers.escapeHtml(topic.title)}</h1>
      <button id="bookmark-btn" class="btn btn-sm">${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}</button>
    </div>
    <p class="muted">${ME.helpers.escapeHtml(topic.summary || '')}</p>

    <div class="card" style="margin-bottom:20px;">
      <div class="flex space-between flex-wrap gap-8">
        <div>${ME.helpers.unitTag(topic.unit)} <span class="tag">${ME.helpers.escapeHtml(topic.category || '')}</span></div>
        <div class="flex gap-8">
          <label class="muted" style="font-size:0.85rem;">Status:</label>
          <select id="status-select">
            <option value="not-started">Not started</option>
            <option value="learning">Learning</option>
            <option value="practiced">Practiced</option>
            <option value="mastered">Mastered</option>
          </select>
        </div>
      </div>
    </div>

    ${section('What is it? / Overview', ME.helpers.para(topic.overview))}
    ${section('How it works', ME.helpers.para(topic.working))}
    ${section('Components / Parts', renderPartsTable(topic.parts))}
    ${section('Types', renderTypesList(topic.types))}
    ${section('Operations', renderOperationsTable(topic.operations))}
    ${section('Diagram', topic.diagram ? `<div class="diagram-box">${topic.diagram.svg || '<p class="muted">Diagram description only — see below.</p>'}</div>
      <p style="margin-top:10px;"><strong>What to draw in the exam:</strong> ${ME.helpers.escapeHtml(topic.diagram.description || '')}</p>
      ${topic.diagram.svg ? `<a class="btn btn-sm" href="#/diagram/${id}">Practice this diagram (blank → labelled) →</a>` : ''}` : '')}
    ${section('Formulae', renderFormulas(topic.formulas))}
    ${section('Where it is used (applications)', renderStringList(topic.applications))}
    ${section('Comparison table', topic.comparisonTable ? `<div class="card table-card">${renderComparisonTable(topic.comparisonTable)}</div>` : '')}
    ${section('Deeper dive / extra notes', topic.extraNotes ? `<div class="extra-notes">${ME.helpers.para(topic.extraNotes)}</div>` : '')}
    ${section('Exam tip', topic.examTip ? `<div class="exam-tip">💡 ${ME.helpers.escapeHtml(topic.examTip)}</div>` : '')}
    ${section('Common mistake', topic.commonMistake ? `<div class="mistake-box">⚠️ ${ME.helpers.escapeHtml(topic.commonMistake)}</div>` : '')}
    ${section('Self-check', topic.quickCheck && topic.quickCheck.length ? `<ul class="quick-check">${topic.quickCheck.map(function (qc) {
      return `<li><details><summary>${ME.helpers.escapeHtml(qc.q)}</summary><div style="margin-top:6px;">${ME.helpers.escapeHtml(qc.a)}</div></details></li>`;
    }).join('')}</ul>` : '')}

    <div class="topic-section">
      <h2>Practice questions on this topic</h2>
      ${relatedQs.length ? `<p class="muted">${relatedQs.length} question(s) in the bank tagged to this topic.</p><a class="btn btn-primary" href="#/questions?topic=${id}">Practice these questions →</a>` : `<p class="muted">No question-bank items are tagged to this exact topic yet — try the Unit ${topic.unit} question set.</p><a class="btn" href="#/questions?unit=${topic.unit}">Practice Unit ${topic.unit} questions →</a>`}
    </div>

    ${topicNavHtml}
  `;
  ME.setView(html);

  const statusSelect = document.getElementById('status-select');
  statusSelect.value = status;
  statusSelect.addEventListener('change', function () {
    ME.store.setTopicStatus(id, statusSelect.value);
  });
  document.getElementById('bookmark-btn').addEventListener('click', function (e) {
    const now = ME.store.toggleBookmark(id);
    e.target.textContent = now ? '★ Bookmarked' : '☆ Bookmark';
  });
};

/* ---------------- Diagram practice mode ---------------- */
ME.routes.diagram = function (parsed) {
  const id = parsed.parts[1];
  const topic = ME.data.topicById[id];
  if (!topic || !topic.diagram || !topic.diagram.svg) { ME.setView('<div class="empty-state">No practice diagram available for this topic.</div>'); return; }

  const html = `
    ${ME.renderCrumbs([['Units', '#/units'], [topic.title, '#/topic/' + id], ['Diagram practice', null]])}
    <h1>Diagram practice — ${ME.helpers.escapeHtml(topic.title)}</h1>
    <p class="muted">Try to recall and sketch this on paper, then reveal each stage below.</p>
    <div class="filters">
      <button class="btn" data-stage="blank">1. Blank outline</button>
      <button class="btn" data-stage="partial">2. Partially labelled</button>
      <button class="btn" data-stage="full">3. Full diagram</button>
      <button class="btn" data-stage="answer">4. Description / what to draw</button>
    </div>
    <div class="diagram-box" id="diagram-stage-box">${topic.diagram.svg}</div>
    <div id="diagram-answer" style="margin-top:12px;"></div>
  `;
  ME.setView(html);

  const box = document.getElementById('diagram-stage-box');
  const answerBox = document.getElementById('diagram-answer');
  const fullSvg = topic.diagram.svg;
  const noTextSvg = fullSvg.replace(/<text[\s\S]*?<\/text>/g, '');

  ME.helpers.qsa('[data-stage]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const stage = btn.getAttribute('data-stage');
      answerBox.innerHTML = '';
      if (stage === 'blank') box.innerHTML = noTextSvg;
      else if (stage === 'partial') box.innerHTML = fullSvg; // dataset doesn't separate partial labels; shown with a hint
      else if (stage === 'full') box.innerHTML = fullSvg;
      else if (stage === 'answer') {
        box.innerHTML = fullSvg;
        answerBox.innerHTML = '<div class="card"><strong>What to draw in the exam:</strong><p>' + ME.helpers.escapeHtml(topic.diagram.description || '') + '</p></div>';
      }
    });
  });
};
