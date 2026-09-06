/* ============================================================
   MOCK EXAM ENGINE
   Pattern: Q1 compulsory (6 parts, all units, ~10 marks total) +
   2 questions per unit (student attempts 1 of each) = 5 questions
   attempted, 50 marks total, 3-hour suggested duration.
   Self-assessed (this is a static app — model answers are shown,
   the student marks their own attempt honestly for tracking).
   ============================================================ */

function shuffleArr(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function examLowPool(unit) { return ME.data.questions.filter(function (q) { return q.unit === unit && q.marks <= 2; }); }
function examHighPool(unit) { return ME.data.questions.filter(function (q) { return q.unit === unit && q.marks >= 5; }); }

const Q1_PART_MAX = +(10 / 6).toFixed(2);

function generateExamPaper() {
  // Decide how many Q1 parts come from each unit: two units get 2 parts, two units get 1 part (sum = 6), all units covered.
  const shuffledUnits = shuffleArr([1, 2, 3, 4]);
  const countByUnit = {};
  shuffledUnits.forEach(function (u, i) { countByUnit[u] = i < 2 ? 2 : 1; });

  const q1Parts = [];
  [1, 2, 3, 4].forEach(function (u) {
    const pool = shuffleArr(examLowPool(u));
    for (let i = 0; i < countByUnit[u] && i < pool.length; i++) q1Parts.push(pool[i]);
  });

  const unitChoices = {};
  [1, 2, 3, 4].forEach(function (u) {
    const pool = shuffleArr(examHighPool(u));
    unitChoices[u] = pool.slice(0, Math.min(2, pool.length));
  });

  return {
    id: 'exam-' + Date.now(),
    startedAt: Date.now(),
    durationMinutes: 180,
    q1Parts: q1Parts.map(function (q) { return q.id; }),
    unitChoices: {
      1: unitChoices[1].map(function (q) { return q.id; }),
      2: unitChoices[2].map(function (q) { return q.id; }),
      3: unitChoices[3].map(function (q) { return q.id; }),
      4: unitChoices[4].map(function (q) { return q.id; })
    },
    selected: { 1: null, 2: null, 3: null, 4: null },
    q1Marks: {},   // qid -> marks (0 .. Q1_PART_MAX)
    unitMarks: {}, // unit -> marks (0,4,7,10)
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

  if (action === 'take') {
    renderExamTaking();
    return;
  }

  // Landing page
  const results = ME.store.getExamResults();
  const inProgress = loadExam();
  const html = `
    <h1>Mock Exam</h1>
    <p class="muted">Matches the official 25ESC-ME-103H pattern: 9 questions are set — Question 1 is compulsory (6 short parts covering all units, ~10 marks), and the remaining 8 questions give 2 options per unit. You attempt 5 total: Q1 + one question from each of Units I–IV, for 50 marks in 3 hours.</p>

    <div class="card" style="margin-bottom:18px;">
      <h3 class="mt-0">Exam pattern</h3>
      <ul>
        <li>Question 1 (compulsory): 6 short parts, covering all four units.</li>
        <li>Questions 2–9: two questions set per unit; attempt <strong>one</strong> from each unit.</li>
        <li>Total attempted: 5 questions &middot; 50 marks &middot; 3-hour suggested duration.</li>
      </ul>
      <p class="muted">This is a practice generator, not the real paper — no topic is guaranteed to appear. Every mock paper is freshly randomised from the question bank so no two attempts are identical.</p>
    </div>

    ${inProgress && !inProgress.submitted ? `
      <div class="card" style="margin-bottom:18px;">
        <h3 class="mt-0">You have a paper in progress</h3>
        <p class="muted">Started ${new Date(inProgress.startedAt).toLocaleString()}</p>
        <a class="btn btn-primary" href="#/exam/take">Resume this paper →</a>
      </div>
    ` : ''}

    <button class="btn btn-primary" id="gen-exam">🎲 Generate a new mock paper</button>

    ${results.length ? `<div class="card" style="margin-top:20px;">
      <h3 class="mt-0">Your mock exam history</h3>
      <table><thead><tr><th>Date</th><th>Score</th><th>%</th></tr></thead><tbody>
        ${results.slice().reverse().slice(0, 8).map(function (r) {
          return `<tr><td>${new Date(r.ts).toLocaleDateString()}</td><td>${r.score}/${r.total}</td><td>${r.percent}%</td></tr>`;
        }).join('')}
      </tbody></table>
      <a class="btn btn-sm" href="#/progress" style="margin-top:8px;">See full analysis in My Progress →</a>
    </div>` : ''}
  `;
  ME.setView(html);

  document.getElementById('gen-exam').addEventListener('click', function () {
    if (inProgress && !inProgress.submitted && !confirm('This will discard your in-progress paper and start a fresh one. Continue?')) return;
    const paper = generateExamPaper();
    saveExam(paper);
    location.hash = '#/exam/take';
  });
};

function renderExamTaking() {
  let paper = loadExam();
  if (!paper) { location.hash = '#/exam'; return; }

  const deadline = paper.startedAt + paper.durationMinutes * 60 * 1000;

  function unitScore(u) { return paper.unitMarks[u] || 0; }
  function q1Score() { return paper.q1Parts.reduce(function (s, qid) { return s + (paper.q1Marks[qid] || 0); }, 0); }
  function totalScore() { return q1Score() + [1, 2, 3, 4].reduce(function (s, u) { return s + unitScore(u); }, 0); }
  const maxTotal = 10 + 40;

  const html = `
    <div class="flex space-between flex-wrap gap-8" style="margin-bottom:10px;">
      <h1 style="margin-bottom:0;">Mock Exam Paper</h1>
      <span class="timer-pill" id="exam-timer">--:--:--</span>
    </div>
    <div class="filters">
      <a class="btn btn-sm" href="#/exam/take#q1-section">Q1</a>
      <a class="btn btn-sm" href="#/exam/take#unit1-section">Unit I</a>
      <a class="btn btn-sm" href="#/exam/take#unit2-section">Unit II</a>
      <a class="btn btn-sm" href="#/exam/take#unit3-section">Unit III</a>
      <a class="btn btn-sm" href="#/exam/take#unit4-section">Unit IV</a>
      <span class="tag" id="running-score">Score so far: ${totalScore()} / ${maxTotal}</span>
    </div>

    <div class="topic-section" id="q1-section">
      <h2>Q1. Compulsory (all units) — ${paper.q1Parts.length} parts, ≈${Q1_PART_MAX} marks each</h2>
      ${paper.q1Parts.map(function (qid, i) {
        const q = qById(qid);
        return renderExamItem(q, 'q1-' + qid, [0, +(Q1_PART_MAX / 2).toFixed(2), Q1_PART_MAX], String.fromCharCode(97 + i), paper.q1Marks[qid]);
      }).join('')}
    </div>

    ${[1, 2, 3, 4].map(function (u) {
      const choices = paper.unitChoices[u].map(qById);
      const selected = paper.selected[u];
      return `<div class="topic-section" id="unit${u}-section">
        <h2>Unit ${['', 'I', 'II', 'III', 'IV'][u]} — choose ONE question (10 marks)</h2>
        <div class="filters">
          ${choices.map(function (q, i) {
            return `<label style="display:flex;align-items:center;gap:6px;">
              <input type="radio" name="unit-choice-${u}" value="${q.id}" ${selected === q.id ? 'checked' : ''}> Question ${i === 0 ? '2' : '3'}-style
            </label>`;
          }).join('')}
        </div>
        <div id="unit-${u}-body">
          ${selected ? renderExamItem(qById(selected), 'unit' + u, [0, 4, 7, 10], null, paper.unitMarks[u]) : '<p class="muted">Select a question above to view it.</p>'}
        </div>
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
        if (scoreEl) scoreEl.textContent = 'Score so far: ' + Math.round(total * 10) / 10 + ' / 50';
      });
    });
  });

  [1, 2, 3, 4].forEach(function (u) {
    ME.helpers.qsa('input[name="unit-choice-' + u + '"]').forEach(function (radio) {
      radio.addEventListener('change', function () {
        const current = loadExam();
        current.selected[u] = radio.value;
        saveExam(current);
        document.getElementById('unit-' + u + '-body').innerHTML = renderExamItem(qById(radio.value), 'unit' + u, [0, 4, 7, 10], null, current.unitMarks[u]);
        wireExamTaking(current);
      });
    });
  });

  document.getElementById('submit-exam').addEventListener('click', function () {
    const current = loadExam();
    const unfilled = [1, 2, 3, 4].filter(function (u) { return !current.selected[u]; });
    if (unfilled.length && !confirm('You have not selected a question for Unit(s) ' + unfilled.join(', ') + '. Submit anyway?')) return;
    const q1Total = current.q1Parts.reduce(function (s, id) { return s + (current.q1Marks[id] || 0); }, 0);
    const unitTotal = [1, 2, 3, 4].reduce(function (s, u) { return s + (current.unitMarks[u] || 0); }, 0);
    const score = Math.round((q1Total + unitTotal) * 10) / 10;
    const total = 50;
    const percent = Math.round((score / total) * 100);
    ME.store.addExamResult({ score: score, total: total, percent: percent, paperId: current.id });

    // Log attempts + mistakes for weak-topic tracking
    const allAttempted = current.q1Parts.map(function (qid) { return { qid: qid, mark: current.q1Marks[qid] || 0, max: Q1_PART_MAX }; })
      .concat([1, 2, 3, 4].filter(function (u) { return current.selected[u]; }).map(function (u) { return { qid: current.selected[u], mark: current.unitMarks[u] || 0, max: 10 }; }));
    allAttempted.forEach(function (a) {
      const q = qById(a.qid);
      if (!q) return;
      const correct = a.mark >= a.max * 0.7;
      ME.store.logAttempt({ qid: q.id, correct: correct, unit: q.unit, topic: q.topic });
      if (!correct) ME.store.addMistake({ id: q.id, question: q.question, correct: q.answer, given: '(mock exam — self-marked ' + a.mark + '/' + a.max + ')', explanation: q.explanation, topic: q.topic, unit: q.unit });
    });

    current.submitted = true;
    saveExam(current);
    ME.store.remove('current-exam');
    ME.setView(`
      <h1>Exam submitted</h1>
      <div class="card" style="text-align:center;padding:32px;">
        <div style="font-size:2.4rem;font-weight:700;">${score} / ${total}</div>
        <div class="muted" style="font-size:1.1rem;">${percent}%</div>
      </div>
      <div class="grid grid-2" style="margin-top:18px;">
        <a class="card card-link" href="#/progress"><h3>See weak-area analysis →</h3><p class="muted">Topics tagged from this exam feed straight into My Progress and My Mistakes.</p></a>
        <a class="card card-link" href="#/exam"><h3>Take another mock paper →</h3><p class="muted">Every paper is freshly randomised.</p></a>
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
