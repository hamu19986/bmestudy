/* ---------------- All subjects overview ---------------- */
ME.routes.units = function () {
  const overview = ME.progress.subjectsOverview();
  const html = `
    <h1>All Subjects</h1>
    <p class="muted">The complete B.Tech CSE Semester-I curriculum (MDU H-Scheme 2025-26, Group-A) — 21 credits across 6 theory courses and 3 labs.</p>
    <div class="grid grid-2">
      ${overview.map(function (o) {
        const c = o.course;
        return `<a class="card card-link" href="#/subject/${c.id}">
          <div class="flex space-between gap-8" style="margin-bottom:6px;">
            <span class="tag tag-course ${c.accent || ''}">${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</span>
            <span class="muted">${o.topics} topics · ${c.credits} cr</span>
          </div>
          <h3>${ME.helpers.escapeHtml(c.name)}</h3>
          <p class="muted">${ME.helpers.escapeHtml(c.code)} · ${ME.helpers.escapeHtml(c.category)}</p>
          ${ME.helpers.bar(o.completion)}
          <div class="muted" style="margin-top:4px;font-size:0.82rem;">${o.completion}% complete</div>
        </a>`;
      }).join('')}
    </div>
  `;
  ME.setView(html);
};

/* ---------------- Single subject: its 4 units ---------------- */
ME.routes.subject = function (parsed) {
  const courseId = parsed.parts[1];
  const c = ME.data.courseById[courseId];
  if (!c) { ME.setView('<div class="empty-state">Subject not found.</div>'); return; }
  ME.store.set('lastCourse', courseId);
  const pack = ME.data.topicsByCourse[courseId];

  const unitCards = [1, 2, 3, 4].map(function (n) {
    const topics = pack ? pack.units[n - 1].topics : [];
    const pct = ME.helpers.unitCompletionPct(courseId, n);
    return `<a class="card card-link" href="#/subject/${courseId}/unit/${n}">
      <div class="flex space-between" style="margin-bottom:6px;">${ME.helpers.unitTag(n)}<span class="muted">${topics.length} topics</span></div>
      <h3>Unit ${ME.helpers.unitRoman(n)}${c.units[n - 1].subtitle ? ' — ' + ME.helpers.escapeHtml(c.units[n - 1].subtitle) : ''}</h3>
      ${ME.helpers.bar(pct)}
      <div class="muted" style="margin-top:4px;font-size:0.82rem;">${pct}% complete</div>
    </a>`;
  }).join('');

  const html = `
    ${ME.renderCrumbs([['Subjects', '#/units'], [c.shortName, null]])}
    <div class="hero hero-subject ${c.accent || ''}">
      <h1>${c.icon} ${ME.helpers.escapeHtml(c.name)}</h1>
      <p>${ME.helpers.escapeHtml(c.code)} · ${ME.helpers.escapeHtml(c.category)} · ${c.credits} credits (${c.ltp}) · ${c.internalMarks} internal + ${c.externalMarks} external</p>
      <p class="muted" style="max-width:760px;">${ME.helpers.escapeHtml(c.description)}</p>
      <div class="flex gap-8 flex-wrap">
        <a class="btn btn-primary" href="#/questions?course=${courseId}">Practice questions</a>
        <a class="btn" href="#/flashcards?course=${courseId}">Flashcards</a>
        <a class="btn" href="#/checklist?course=${courseId}">Syllabus checklist</a>
        <a class="btn" href="#/exam/${courseId}">Mock exam</a>
      </div>
    </div>
    <div class="grid grid-2">${unitCards}</div>
  `;
  ME.setView(html);
};

/* ---------------- Legacy route: #/unit/N → last-read subject's Unit N ---------------- */
ME.routes.unit = function (parsed) {
  const n = parseInt(parsed.parts[1], 10) || 1;
  // Legacy bookmarked URLs: return users to the subject they were last
  // reading (defaulting to the first subject with content), not always BME.
  const lastCourse = ME.store.get('lastCourse');
  const withContent = ME.data.allCourses.filter(function (c) { return ME.helpers.topicsForCourse(c.id).length; });
  const cid = (lastCourse && ME.data.courseById[lastCourse] && ME.helpers.topicsForCourse(lastCourse).length)
    ? lastCourse
    : (withContent[0] || { id: 'bme' }).id;
  location.hash = '#/subject/' + cid + '/unit/' + n;
};

/* ---------------- Unit page within a subject ---------------- */
ME.routes.subjectUnit = function (parsed) {
  const courseId = parsed.parts[1];
  const n = parseInt(parsed.parts[2], 10);
  const c = ME.data.courseById[courseId];
  if (!c || !n) { ME.setView('<div class="empty-state">Subject or unit not found.</div>'); return; }
  ME.store.set('lastCourse', courseId);
  const topics = ME.helpers.topicsFor(courseId, n);

  const byCategory = {};
  topics.forEach(function (t) {
    const cat = t.category || 'General';
    (byCategory[cat] = byCategory[cat] || []).push(t);
  });

  const html = `
    ${ME.renderCrumbs([['Subjects', '#/units'], [c.shortName, '#/subject/' + courseId], ['Unit ' + ME.helpers.unitRoman(n), null]])}
    <h1>${c.icon} ${ME.helpers.escapeHtml(c.shortName)} — Unit ${ME.helpers.unitRoman(n)}</h1>
    <p class="muted">${c.units[n - 1].subtitle ? ME.helpers.escapeHtml(c.units[n - 1].subtitle) + ' · ' : ''}${topics.length} topics</p>
    <div class="flex gap-8 flex-wrap" style="margin-bottom:18px;">
      <a class="btn" href="#/questions?course=${courseId}&unit=${n}">Practice Unit ${ME.helpers.unitRoman(n)} questions</a>
      <a class="btn" href="#/flashcards?course=${courseId}&unit=${n}">Unit ${ME.helpers.unitRoman(n)} flashcards</a>
      <a class="btn" href="#/exam/${courseId}">Take the ${ME.helpers.escapeHtml(c.shortName)} mock exam</a>
    </div>
    ${topics.length ? Object.keys(byCategory).map(function (cat) {
      return `<div class="topic-section"><h2>${ME.helpers.escapeHtml(cat)}</h2>${ME.helpers.topicCardsGrid(byCategory[cat])}</div>`;
    }).join('') : '<div class="empty-state"><h2>Content pending</h2><p class="muted">This unit\'s topics are mapped in the syllabus checklist and will appear here as soon as their content is added.</p></div>'}
  `;
  ME.setView(html);
};

/* ---------------- Topic detail (course-aware) ---------------- */
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

  const courseId = topic.course || 'bme';
  const course = ME.data.courseById[courseId] || { shortName: courseId.toUpperCase(), name: courseId, icon: '📘', accent: '' };
  const unitTopics = ME.helpers.topicsFor(courseId, topic.unit);
  const status = ME.store.getTopicStatus(id);
  const isBookmarked = ME.store.getBookmarks().includes(id);
  const relatedQs = ME.data.questions.filter(function (q) { return q.topic === id; });
  const relatedCards = ME.data.flashcards.filter(function (f) { return f.topic === id; });

  // Prev / next topic navigation within this subject's unit (syllabus order).
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
    ${ME.renderCrumbs([['Subjects', '#/units'], [course.shortName, '#/subject/' + courseId], ['Unit ' + ME.helpers.unitRoman(topic.unit), '#/subject/' + courseId + '/unit/' + topic.unit], [topic.title, null]])}
    <div class="flex space-between flex-wrap gap-8" style="margin-bottom:6px;">
      <h1 style="margin-bottom:0;">${ME.helpers.escapeHtml(topic.title)}</h1>
      <button id="bookmark-btn" class="btn btn-sm">${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}</button>
    </div>
    <p class="muted">${ME.helpers.escapeHtml(topic.summary || '')}</p>

    <div class="card" style="margin-bottom:20px;">
      <div class="flex space-between flex-wrap gap-8">
        <div>${ME.helpers.courseTag(courseId)} ${ME.helpers.unitTag(topic.unit)} <span class="tag">${ME.helpers.escapeHtml(topic.category || '')}</span></div>
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
      <div id="mastery-note"></div>

    ${section('Why this matters', topic.whyThisMatters ? ME.helpers.para(topic.whyThisMatters) : '')}
    ${section('Prerequisites', topic.prerequisites && topic.prerequisites.length ? `<ul class="nice-list">${topic.prerequisites.map(function (p) {
      const pt = ME.data.topicById[p];
      return '<li>' + (pt ? `<a href="#/topic/${pt.id}">${ME.helpers.escapeHtml(pt.title)}</a>` : ME.helpers.escapeHtml(p)) + '</li>';
    }).join('')}</ul>` : '')}
    ${section('Learning objectives', topic.learningObjectives && topic.learningObjectives.length ? '<ul class="nice-list">' + topic.learningObjectives.map(function (o) { return '<li>' + ME.helpers.escapeHtml(o) + '</li>'; }).join('') + '</ul>' : '')}
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
      ${relatedQs.length ? `<p class="muted">${relatedQs.length} question(s) in the bank tagged to this topic.</p><a class="btn btn-primary" href="#/questions?topic=${id}">Practice these questions →</a>` : `<p class="muted">No question-bank items are tagged to this exact topic yet — try the Unit ${ME.helpers.unitRoman(topic.unit)} set for this subject.</p><a class="btn" href="#/questions?course=${courseId}&unit=${topic.unit}">Practice ${ME.helpers.escapeHtml(course.shortName)} Unit ${ME.helpers.unitRoman(topic.unit)} questions →</a>`}
    </div>

    ${relatedCards.length ? `<div class="topic-section">
      <h2>Flashcards on this topic</h2>
      ${relatedCards.map(function (f) {
        return `<div class="flashcard-static"><strong>${ME.helpers.escapeHtml(f.front)}</strong><div class="muted" style="margin-top:4px;">${ME.helpers.escapeHtml(f.back)}</div></div>`;
      }).join('')}
    </div>` : ''}

    ${topic.relatedTopics && topic.relatedTopics.length ? `<div class="topic-section">
      <h2>Related topics</h2>
      <div class="grid grid-2">${topic.relatedTopics.map(function (rid) {
        const rt = ME.data.topicById[rid];
        return rt ? `<a class="card card-link" href="#/topic/${rt.id}">${ME.helpers.courseTag(rt.course || courseId)}${ME.helpers.unitTag(rt.unit)}<h3 style="margin-bottom:0;">${ME.helpers.escapeHtml(rt.title)}</h3></a>` : '';
      }).join('')}</div>
    </div>` : ''}

    ${topicNavHtml}
  `;
  ME.setView(html);

  const statusSelect = document.getElementById('status-select');
  statusSelect.value = status;
  statusSelect.addEventListener('change', function () {
    ME.store.setTopicStatus(id, statusSelect.value);
    ME.toast('Marked as ' + statusSelect.options[statusSelect.selectedIndex].text + ' ✓', 'success');
  });
  document.getElementById('bookmark-btn').addEventListener('click', function (e) {
    const now = ME.store.toggleBookmark(id);
    e.target.textContent = now ? '★ Bookmarked' : '☆ Bookmark';
  });

  // Adaptive mastery hint (Phase 22): ≥85% accuracy over ≥3 attempts and
  // not yet mastered → suggest promoting the status.
  const masteryNote = document.getElementById('mastery-note');
  if (masteryNote) {
    const acc = ME.progress.topicAccuracy()[id];
    if (acc && acc.total >= 3 && status !== 'mastered') {
      const pct = Math.round(acc.correct / acc.total * 100);
      if (pct >= 85) {
        masteryNote.innerHTML = '<div class="exam-tip">💡 <strong>You\'re solving ' + pct + '% of this topic\'s questions correctly.</strong> If you\'ve also read the material, consider marking it <strong>Mastered</strong> above.</div>';
      } else if (pct < 50) {
        masteryNote.innerHTML = '<div class="mistake-box">⚠️ Only ' + pct + '% correct so far (' + acc.total + ' attempts). Re-read the overview, then <a href="#/questions?topic=' + id + '">retry the question set</a>.</div>';
      }
    }
  }
};

/* ---------------- Diagram practice mode ---------------- */
ME.routes.diagram = function (parsed) {
  const id = parsed.parts[1];
  const topic = ME.data.topicById[id];
  if (!topic || !topic.diagram || !topic.diagram.svg) { ME.setView('<div class="empty-state">No practice diagram available for this topic.</div>'); return; }

  const html = `
    ${ME.renderCrumbs([['Subjects', '#/units'], [topic.title, '#/topic/' + id], ['Diagram practice', null]])}
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
