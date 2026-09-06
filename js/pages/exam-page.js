/* ============================================================
   MOCK EXAM ENGINE — course-aware
   Pattern (from COURSES[cid].exam): Q1 compulsory (6 short parts,
   all units) + 2 choice questions per unit (attempt 1 of each)
   = 5 questions. Marks, durations and self-mark options come
   straight from the course config, never hard-coded per subject.
   Self-assessed: model answers shown, the student marks honestly.
   ============================================================ */

function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function examPool(cid, unit, minMarks, maxMarks) {
  return ME.data.questions.filter(function (q) {
    return (q.course || 'bme') === cid && q.unit === unit && q.marks >= minMarks && q.marks <= maxMarks;
  });
}

function examCourse(cid) {
  return ME.data.courseById[cid] || { id: cid, shortName: cid.toUpperCase(), name: cid, icon: '📘', exam: {} };
}

function generateExamPaper(cid) {
  const course = examCourse(cid);
  const cfg = course.exam || {};
  const q1Parts = cfg.q1Parts || 6;
  const q1Total = cfg.q1TotalMarks || 10;
  const unitQMarks = cfg.unitQuestionMarks || 10;
  const unitChoices = cfg.unitChoices || 2;

  const perPart = q1Total / q1Parts;
  const selfMarkQ1 = [0, +(perPart / 2).toFixed(2), +perPart.toFixed(2)];
  const selfMarkUnit = [0, +Math.round(unitQMarks / 3).toFixed(2), +Math.round(unitQMarks * 2 / 3).toFixed(2), unitQMarks];

  // Decide how many Q1 parts come from each unit (cover all 4 units).
  const shuffledUnits = shuffleArr([1, 2, 3, 4]);
  const countByUnit = {};
  shuffledUnits.forEach(function (u, i) { countByUnit[u] = i < 2 ? 2 : 1; });

  const q1 = [];
  [1, 2, 3, 4].forEach(function (u) {
    const pool = shuffleArr(examPool(cid, u, 0, 2)); // low-mark pool for Q1 parts
    for (let i = 0; i < countByUnit[u] && i < pool.length; i++) q1.push(pool[i]);
  });

  const choices = {};
  [1, 2, 3, 4].forEach(function (u) {
    const pool = shuffleArr(examPool(cid, u, 5, 999)); // high-mark pool
    choices[u] = pool.slice(0, Math.min(unitChoices, pool.length));
  });

  return {
    id: 'exam-' + Date.now(),
    course: cid,
    startedAt: Date.now(),
    durationMinutes: cfg.durationMinutes || 180,
    totalMarks: cfg.totalMarks || 50,
    q1TotalMarks: q1Total,
    unitQuestionMarks: unitQMarks,
    selfMarkQ1: selfMarkQ1,
    selfMarkUnit: selfMarkUnit,
    q1Parts: q1.map(function (q) { return q.id; }),
    unitChoices: { 1: choices[1].map(function (q) { return q.id; }), 2: choices[2].map(function (q) { return q.id; }), 3: choices[3].map(function (q) { return q.id; }), 4: choices[4].map(function (q) { return q.id; }) },
    selected: { 1: null, 2: null, 3: null, 4: null },
    q1Marks: {},
    unitMarks: {},
    submitted: false
  };
}

function saveExam(paper) { ME.store.set('current-exam', paper); }
function loadExam() { return ME.store.get('current-exam', null); }

function qById(id) { return ME.data.questions.find(function (q) { return q.id === id; }); }

function formatRemaining(ms) {
  if (ms <= 0) return '00:00:00';
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return [h, m, s].map(function (x) { return String(x).padStart(2, '0'); }).join(':');
}

ME.routes.exam = function (parsed) {
  const action = parsed.parts[1];
  const cidFromUrl = parsed.parts[1] && ME.data.courseById[parsed.parts[1]] ? parsed.parts[1] : null;
  const inProgress = loadExam();

  if (cidFromUrl) {
    // #/exam/<courseId> — landing for that subject's exam
    renderExamLanding(cidFromUrl, null);
    return;
  }
  if (action === 'take') {
    renderExamTaking();
    return;
  }

  // #/exam — subject picker hub
  const results = ME.store.getExamResults();
  const html = `
    <h1>Mock Exams</h1>
    <p class="muted">Each subject gets its own paper that follows its official pattern — question counts, marks and duration come from the course config, and the generator never claims a topic is guaranteed to appear.</p>
    ${inProgress && !inProgress.submitted ? `
      <div class="card" style="margin-bottom:18px;">
        <h3 class="mt-0">You have a paper in progress — ${ME.helpers.escapeHtml(examCourse(inProgress.course).name)}</h3>
        <p class="muted">Started ${new Date(inProgress.startedAt).toLocaleString()}</p>
        <a class="btn btn-primary" href="#/exam/take">Resume this paper →</a>
      </div>` : ''}
    <div class="grid grid-3">
      ${ME.data.allCourses.map(function (c) {
        const n = ME.data.questions.filter(function (x) { return (x.course || 'bme') === c.id; }).length;
        const history = results.filter(function (r) { return r.course === c.id; });
        return `<a class="card card-link" href="#/exam/${c.id}">
          <div class="flex space-between gap-8" style="margin-bottom:6px;"><span class="tag tag-course ${c.accent || ''}">${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</span><span class="muted">${history.length ? 'best ' + Math.max.apply(null, history.map(function (r) { return r.percent; })) + '%' : 'no attempts'}</span></div>
          <h3>${ME.helpers.escapeHtml(c.name)}</h3>
          <p class="muted">${c.exam.totalMarks} marks · ${Math.round(c.exam.durationMinutes / 60 * 10) / 10} h · ${n} questions in bank</p>
        </a>`;
      }).join('')}
    </div>
    ${results.length ? `<div class="card" style="margin-top:20px;">
      <h3 class="mt-0">Recent attempts (all subjects)</h3>
      <table><thead><tr><th>Date</th><th>Subject</th><th>Score</th><th>%</th></tr></thead><tbody>
        ${results.slice().reverse().slice(0, 8).map(function (r) {
          const c = examCourse(r.course);
          return `<tr><td>${new Date(r.ts).toLocaleDateString()}</td><td>${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</td><td>${r.score}/${r.total}</td><td>${r.percent}%</td></tr>`;
        }).join('')}
      </tbody></table>
      <a class="btn btn-sm" href="#/progress" style="margin-top:8px;">See full analysis in My Progress →</a>
    </div>` : ''}
  `;
  ME.setView(html);
};

function renderExamLanding(cid, _unused) {
  const course = examCourse(cid);
  const inProgress = loadExam();
  const results = ME.store.getExamResults().filter(function (r) { return r.course === cid; });
  const bankCount = ME.data.questions.filter(function (q) { return (q.course || 'bme') === cid; }).length;
  const lowCount = ME.data.questions.filter(function (q) { return (q.course || 'bme') === cid && q.marks <= 2; }).length;
  const highCount = ME.data.questions.filter(function (q) { return (q.course || 'bme') === cid && q.marks >= 5; }).length;
  const ready = lowCount >= 6 && highCount >= 8;

  const html = `
    ${ME.renderCrumbs([['Mock Exams', '#/exam'], [course.shortName, null]])}
    <h1>${course.icon} ${ME.helpers.escapeHtml(course.name)} — Mock Exam</h1>
    <p class="muted">${ME.helpers.escapeHtml(ME.helpers.examPatternNote(cid))}</p>

    <div class="card" style="margin-bottom:18px;">
      <h3 class="mt-0">Exam pattern</h3>
      <ul>
        <li>Question 1 (compulsory): ${course.exam.q1Parts} short parts, covering all four units (${course.exam.q1TotalMarks} marks).</li>
        <li>Remaining questions: two set per unit; attempt <strong>one</strong> from each unit (${course.exam.unitQuestionMarks} marks each).</li>
        <li>Total attempted: 5 questions &middot; ${course.exam.totalMarks} marks &middot; ${course.exam.durationMinutes}-minute suggested duration.</li>
      </ul>
      <p class="muted">This is a practice generator, not the real paper — no topic is guaranteed to appear. Every paper is freshly randomised from the ${bankCount}-question bank for this subject.</p>
    </div>

    ${inProgress && !inProgress.submitted && inProgress.course === cid ? `
      <div class="card" style="margin-bottom:18px;">
        <h3 class="mt-0">You have a ${ME.helpers.escapeHtml(course.shortName)} paper in progress</h3>
        <p class="muted">Started ${new Date(inProgress.startedAt).toLocaleString()}</p>
        <a class="btn btn-primary" href="#/exam/take">Resume this paper →</a>
      </div>` : ''}

    ${ready
      ? `<button class="btn btn-primary" id="gen-exam">🎲 Generate a new ${ME.helpers.escapeHtml(course.shortName)} mock paper</button>`
      : `<div class="exam-tip">💡 <strong>Question bank for this subject is still growing.</strong> It needs at least 6 low-mark and 8 high-mark items before a full paper can be generated (currently ${lowCount} low / ${highCount} high). Meanwhile, practise with the <a href="#/questions?course=${cid}">Question Bank</a> and the <a href="#/flashcards?course=${cid}">Flashcards</a>.</div>`}

    ${results.length ? `<div class="card" style="margin-top:20px;">
      <h3 class="mt-0">Your ${ME.helpers.escapeHtml(course.shortName)} mock exam history</h3>
      <table><thead><tr><th>Date</th><th>Score</th><th>%</th></tr></thead><tbody>
        ${results.slice().reverse().slice(0, 8).map(function (r) {
          return `<tr><td>${new Date(r.ts).toLocaleDateString()}</td><td>${r.score}/${r.total}</td><td>${r.percent}%</td></tr>`;
        }).join('')}
      </tbody></table>
      <a class="btn btn-sm" href="#/progress" style="margin-top:8px;">See full analysis in My Progress →</a>
    </div>` : ''}
  `;
  ME.setView(html);

  const genBtn = document.getElementById('gen-exam');
  if (genBtn) {
    genBtn.addEventListener('click', function () {
      if (inProgress && !inProgress.submitted && !confirm('This will discard your in-progress paper and start a fresh one. Continue?')) return;
      saveExam(generateExamPaper(cid));
      location.hash = '#/exam/take';
    });
  }
}

function renderExamTaking() {
  let paper = loadExam();
  if (!paper) { location.hash = '#/exam'; return; }

  const course = examCourse(paper.course);
  const cfg = course.exam || {};
  const unitQMarks = paper.unitQuestionMarks;
  const deadline = paper.startedAt + paper.durationMinutes * 60 * 1000;
  const maxTotal = paper.q1TotalMarks + unitQMarks * 4;

  function q1Score() { return paper.q1Parts.reduce(function (s, qid) { return s + (paper.q1Marks[qid] || 0); }, 0); }
  function unitScore(u) { return paper.unitMarks[u] || 0; }
  function totalScore() { return q1Score() + [1, 2, 3, 4].reduce(function (s, u) { return s + unitScore(u); }, 0); }

  const html = `
    <div class="flex space-between flex-wrap gap-8" style="margin-bottom:10px;">
      <h1 style="margin-bottom:0;">${course.icon} ${ME.helpers.escapeHtml(course.shortName)} — Mock Exam Paper</h1>
      <span class="timer-pill" id="exam-timer">--:--:--</span>
    </div>
    <div class="filters">
      <a class="btn btn-sm" href="#/exam/take#q1-section">Q1</a>
      ${[1, 2, 3, 4].map(function (u) { return `<a class="btn btn-sm" href="#/exam/take#unit${u}-section">Unit ${ME.helpers.unitRoman(u)}</a>`; }).join('')}
      <span class="tag" id="running-score">Score so far: ${totalScore()} / ${maxTotal}</span>
    </div>

    <div class="topic-section" id="q1-section">
      <h2>Q1. Compulsory (all units) — ${paper.q1Parts.length} parts, ${+(paper.q1TotalMarks / Math.max(1, paper.q1Parts.length)).toFixed(2)} marks each</h2>
      ${paper.q1Parts.map(function (qid, i) {
        const q = qById(qid);
        return renderExamItem(q, 'q1-' + qid, paper.selfMarkQ1, String.fromCharCode(97 + i), paper.q1Marks[qid]);
      }).join('')}
    </div>

    ${[1, 2, 3, 4].map(function (u) {
      const choices = paper.unitChoices[u].map(qById);
      const selected = paper.selected[u];
      return `<div class="topic-section" id="unit${u}-section">
        <h2>Unit ${ME.helpers.unitRoman(u)} — choose ONE question (${unitQMarks} marks)</h2>
        ${choices.length ? `<div class="filters">
          ${choices.map(function (q, i) {
            return `<label style="display:flex;align-items:center;gap:6px;">
              <input type="radio" name="unit-choice-${u}" value="${q.id}" ${selected === q.id ? 'checked' : ''}> Option ${i === 0 ? 'A' : 'B'}
            </label>`;
          }).join('')}
        </div>
        <div id="unit-${u}-body">
          ${selected ? renderExamItem(qById(selected), 'unit' + u, paper.selfMarkUnit, null, paper.unitMarks[u]) : '<p class="muted">Select a question above to view it.</p>'}
        </div>` : `<p class="muted">No high-mark questions for this unit yet — practise it in the <a href="#/questions?course=${paper.course}&unit=${u}">Question Bank</a> while the bank grows.</p>`}
      </div>`;
    }).join('')}

    <div class="card" style="margin-bottom:60px;">
      <h3 class="mt-0">Submit</h3>
      <p class="muted">Self-assessed score so far: <strong>${totalScore()} / ${maxTotal}</strong></p>
      <button class="btn btn-danger" id="submit-exam">Submit exam</button>
      <button class="btn" id="abandon-exam">Discard this paper</button>
    </div>
  `;
  ME.setView(html);
  wireExamTaking(paper);
  startExamTimer(deadline);
}

function renderExamItem(q, keyPrefix, markOptions, label, currentMark) {
  if (!q) return '';
  return `<div class="card q-card" data-qkey="${keyPrefix}" data-qid="${q.id}">
    <div class="flex gap-8 flex-wrap" style="margin-bottom:8px;">
      ${label ? `<span class="tag">(${label})</span>` : ''}${ME.helpers.unitTag(q.unit)}${ME.helpers.diffTag(q.difficulty)}<span class="tag">${q.type}</span>
    </div>
    <p style="font-weight:600;">${ME.helpers.escapeHtml(q.question)}</p>
    <button class="btn btn-sm btn-reveal-exam">Reveal model answer</button>
    <div class="answer-reveal exam-answer" style="display:none;">
      <strong>Model answer:</strong> ${ME.helpers.escapeHtml(q.answer)}
      ${q.explanation && q.explanation !== '—' ? '<br><br><strong>Why:</strong> ' + ME.helpers.escapeHtml(q.explanation) : ''}
    </div>
    <div style="margin-top:10px;">
      <label class="muted" style="font-size:0.82rem;">Marks I'd honestly give myself:</label>
      <div class="filters self-mark-group">
        ${markOptions.map(function (m) {
          return `<button type="button" class="btn btn-sm self-mark-btn ${currentMark === m ? 'btn-primary' : ''}" data-mark="${m}">${m}</button>`;
        }).join('')}
      </div>
    </div>
  </div>`;
}

function wireExamTaking(paper) {
  ME.helpers.qsa('.btn-reveal-exam').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const card = btn.closest('.q-card');
      card.querySelector('.exam-answer').style.display = 'block';
      btn.style.display = 'none';
    });
  });

  ME.helpers.qsa('.self-mark-group').forEach(function (group) {
    ME.helpers.qsa('.self-mark-btn', group).forEach(function (btn) {
      btn.addEventListener('click', function () {
        const card = btn.closest('.q-card');
        const qid = card.getAttribute('data-qid');
        const keyPrefix = card.getAttribute('data-qkey');
        const mark = parseFloat(btn.getAttribute('data-mark'));
        ME.helpers.qsa('.self-mark-btn', group).forEach(function (b) { b.classList.remove('btn-primary'); });
        btn.classList.add('btn-primary');

        const current = loadExam();
        if (!current) return;
        if (keyPrefix.indexOf('q1-') === 0) {
          current.q1Marks[qid] = mark;
        } else {
          const unit = parseInt(keyPrefix.replace('unit', ''), 10);
          current.unitMarks[unit] = mark;
        }
        saveExam(current);
        const total = current.q1Parts.reduce(function (s, id) { return s + (current.q1Marks[id] || 0); }, 0) +
          [1, 2, 3, 4].reduce(function (s, u) { return s + (current.unitMarks[u] || 0); }, 0);
        const scoreEl = document.getElementById('running-score');
        if (scoreEl) scoreEl.textContent = 'Score so far: ' + Math.round(total * 10) / 10 + ' / ' + (current.q1TotalMarks + current.unitQuestionMarks * 4);
      });
    });
  });

  [1, 2, 3, 4].forEach(function (u) {
    ME.helpers.qsa('input[name="unit-choice-' + u + '"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        const current = loadExam();
        current.selected[u] = radio.value;
        saveExam(current);
        document.getElementById('unit-' + u + '-body').innerHTML = renderExamItem(qById(radio.value), 'unit' + u, current.selfMarkUnit, null, current.unitMarks[u]);
        wireExamTaking(current);
      });
    });
  });

  document.getElementById('submit-exam').addEventListener('click', function () {
    const current = loadExam();
    const unfilled = [1, 2, 3, 4].filter(function (u) { return current.unitChoices[u].length && !current.selected[u]; });
    if (unfilled.length && !confirm('You have not selected a question for Unit(s) ' + unfilled.join(', ') + '. Submit anyway?')) return;
    const q1Total = current.q1Parts.reduce(function (s, id) { return s + (current.q1Marks[id] || 0); }, 0);
    const unitTotal = [1, 2, 3, 4].reduce(function (s, u) { return s + (current.unitMarks[u] || 0); }, 0);
    const score = Math.round((q1Total + unitTotal) * 10) / 10;
    const total = current.q1TotalMarks + current.unitQuestionMarks * 4;
    const percent = Math.round((score / total) * 100);
    ME.store.addExamResult({ score: score, total: total, percent: percent, paperId: current.id, course: current.course,
      perUnit: [1, 2, 3, 4].reduce(function (m, u) { m[u] = { score: current.unitMarks[u] || 0, total: current.unitQuestionMarks }; return m; }, {}) });

    // Log attempts + mistakes for weak-topic tracking
    const allAttempted = current.q1Parts.map(function (qid) { return { qid: qid, mark: current.q1Marks[qid] || 0, max: current.q1TotalMarks / Math.max(1, current.q1Parts.length) }; })
      .concat([1, 2, 3, 4].filter(function (u) { return current.selected[u]; }).map(function (u) { return { qid: current.selected[u], mark: current.unitMarks[u] || 0, max: current.unitQuestionMarks }; }));
    allAttempted.forEach(function (a) {
      const q = qById(a.qid);
      if (!q) return;
      const correct = a.mark >= a.max * 0.7;
      ME.store.logAttempt({ qid: q.id, correct: correct, unit: q.unit, topic: q.topic, course: q.course || 'bme' });
      if (!correct) ME.store.addMistake({ id: q.id, question: q.question, correct: q.answer, given: '(mock exam — self-marked ' + a.mark + '/' + a.max + ')', explanation: q.explanation, topic: q.topic, unit: q.unit, course: q.course || 'bme' });
    });

    current.submitted = true;
    saveExam(current);
    ME.store.remove('current-exam');
    const c = examCourse(current.course);

    // Per-unit performance analysis for the result screen.
    const unitRows = [1, 2, 3, 4].map(function (u) {
      const s = current.unitMarks[u] || 0;
      const pct = current.unitQuestionMarks ? Math.round(s / current.unitQuestionMarks * 100) : 0;
      return { unit: u, score: s, total: current.unitQuestionMarks, pct: pct };
    });
    const weakUnits = unitRows.filter(function (r) { return r.pct < 50; });

    ME.setView(`
      <h1>Exam submitted</h1>
      <div class="card" style="text-align:center;padding:32px;">
        <div style="font-size:2.4rem;font-weight:700;">${score} / ${total}</div>
        <div class="muted" style="font-size:1.1rem;">${percent}% · ${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</div>
      </div>

      <div class="card" style="margin-top:18px;">
        <h3 class="mt-0">Unit performance</h3>
        ${unitRows.map(function (r) {
          return `<div style="margin-bottom:8px;">
            <div class="flex space-between"><span class="muted">Unit ${ME.helpers.unitRoman(r.unit)}</span><span>${r.score}/${r.total} · ${r.pct}%</span></div>
            ${ME.helpers.bar(r.pct)}
          </div>`;
        }).join('')}
        ${weakUnits.length
          ? `<div class="exam-tip" style="margin-top:10px;">💡 <strong>Weak areas:</strong> Unit${weakUnits.length === 1 ? '' : 's'} ${weakUnits.map(function (r) { return ME.helpers.unitRoman(r.unit); }).join(', ')} scored below 50%. Recommended revision: <a href="#/questions?course=${current.course}&unit=${weakUnits[0].unit}">practice ${weakUnits[0].unit === 0 ? '' : 'Unit ' + ME.helpers.unitRoman(weakUnits[0].unit)} questions</a>, drill the <a href="#/flashcards?course=${current.course}&unit=${weakUnits[0].unit}">unit flashcards</a>, then retest with another paper.</div>`
          : '<p class="muted" style="margin-top:10px;margin-bottom:0;">All units at or above 50% — solid, balanced performance. Keep going! 🎉</p>'}
      </div>

      <div class="grid grid-2" style="margin-top:18px;">
        <a class="card card-link" href="#/progress"><h3>See weak-area analysis →</h3><p class="muted">Topics tagged from this exam feed straight into My Progress and My Mistakes.</p></a>
        <a class="card card-link" href="#/mistakes"><h3>Review My Mistakes →</h3><p class="muted">Everything you self-marked below 70% is waiting for a retry.</p></a>
        <a class="card card-link" href="#/exam/${c.id}"><h3>Take another ${ME.helpers.escapeHtml(c.shortName)} paper →</h3><p class="muted">Every paper is freshly randomised.</p></a>
        <a class="card card-link" href="#/revision/examEve"><h3>Exam-eve rapid revision →</h3><p class="muted">Formulas, laws, definitions and comparisons, fast.</p></a>
      </div>
    `);
  });

  document.getElementById('abandon-exam').addEventListener('click', function () {
    if (!confirm('Discard this in-progress paper? This cannot be undone.')) return;
    ME.store.remove('current-exam');
    location.hash = '#/exam';
  });
}

let examTimerInterval = null;
function startExamTimer(deadline) {
  if (examTimerInterval) clearInterval(examTimerInterval);
  function tick() {
    const el = document.getElementById('exam-timer');
    if (!el) { clearInterval(examTimerInterval); return; }
    const remaining = deadline - Date.now();
    el.textContent = formatRemaining(remaining);
    if (remaining <= 0) {
      el.textContent = "Time's up";
      clearInterval(examTimerInterval);
    }
  }
  tick();
  examTimerInterval = setInterval(tick, 1000);
}
