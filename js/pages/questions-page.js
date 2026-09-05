ME.routes.questions = function (parsed) {
  const q = parsed.query;
  const state = {
    unit: q.unit || '',
    topic: q.topic || '',
    type: q.type || '',
    difficulty: q.difficulty || '',
    text: q.text || ''
  };

  function matches(item) {
    if (state.unit && String(item.unit) !== String(state.unit)) return false;
    if (state.topic && item.topic !== state.topic) return false;
    if (state.type && item.type !== state.type) return false;
    if (state.difficulty && item.difficulty !== state.difficulty) return false;
    if (state.text) {
      const hay = (item.question + ' ' + (item.answer || '')).toLowerCase();
      if (!hay.includes(state.text.toLowerCase())) return false;
    }
    return true;
  }

  const filtered = ME.data.questions.filter(matches);
  const topicTitle = state.topic && ME.data.topicById[state.topic] ? ME.data.topicById[state.topic].title : '';

  const html = `
    <h1>Question Bank</h1>
    <p class="muted">${filtered.length} of ${ME.data.questions.length} questions${topicTitle ? ' — filtered to "' + ME.helpers.escapeHtml(topicTitle) + '"' : ''}</p>

    <div class="card" style="margin-bottom:18px;">
      <div class="grid grid-4">
        <div>
          <label class="muted" style="font-size:0.8rem;">Unit</label>
          <select id="f-unit" class="btn-block">
            <option value="">All units</option>
            <option value="1">Unit I</option>
            <option value="2">Unit II</option>
            <option value="3">Unit III</option>
            <option value="4">Unit IV</option>
          </select>
        </div>
        <div>
          <label class="muted" style="font-size:0.8rem;">Type</label>
          <select id="f-type" class="btn-block">
            <option value="">All types</option>
            <option value="mcq">MCQ</option>
            <option value="short">Short answer</option>
            <option value="long">Long answer</option>
            <option value="numerical">Numerical</option>
          </select>
        </div>
        <div>
          <label class="muted" style="font-size:0.8rem;">Difficulty</label>
          <select id="f-difficulty" class="btn-block">
            <option value="">All difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Exam Challenge">Exam Challenge</option>
          </select>
        </div>
        <div>
          <label class="muted" style="font-size:0.8rem;">Search text</label>
          <input type="text" id="f-text" placeholder="e.g. Pelton" value="${ME.helpers.escapeHtml(state.text)}">
        </div>
      </div>
      ${state.topic ? `<div style="margin-top:10px;"><button class="btn btn-sm" id="clear-topic">✕ Clear topic filter</button></div>` : ''}
    </div>

    <div id="q-list">${filtered.map(renderQuestionCard).join('') || '<div class="empty-state">No questions match these filters.</div>'}</div>
  `;
  ME.setView(html);

  ME.helpers.qs('#f-unit').value = state.unit;
  ME.helpers.qs('#f-type').value = state.type;
  ME.helpers.qs('#f-difficulty').value = state.difficulty;

  function updateHash() {
    const params = [];
    ['unit', 'topic', 'type', 'difficulty', 'text'].forEach(function (k) {
      const v = document.getElementById('f-' + k) ? document.getElementById('f-' + k).value : state[k];
      if (v) params.push(k + '=' + encodeURIComponent(v));
    });
    location.hash = '#/questions' + (params.length ? '?' + params.join('&') : '');
  }
  ['unit', 'type', 'difficulty'].forEach(function (k) {
    document.getElementById('f-' + k).addEventListener('change', updateHash);
  });
  let textTimer;
  document.getElementById('f-text').addEventListener('input', function () {
    clearTimeout(textTimer);
    textTimer = setTimeout(updateHash, 400);
  });
  if (state.topic) {
    document.getElementById('clear-topic').addEventListener('click', function () {
      state.topic = '';
      location.hash = '#/questions?unit=' + state.unit;
    });
  }

  wireQuestionCards();
};

function renderQuestionCard(item) {
  const optionsHtml = item.type === 'mcq' ? `<div class="q-options">${item.options.map(function (opt, i) {
    return `<label data-opt="${ME.helpers.escapeHtml(opt)}"><input type="radio" name="opt-${item.id}" value="${ME.helpers.escapeHtml(opt)}"> ${ME.helpers.escapeHtml(opt)}</label>`;
  }).join('')}</div>` : '';

  return `<div class="card q-card" data-qid="${item.id}" data-type="${item.type}" data-topic="${item.topic || ''}" data-unit="${item.unit}">
    <div class="flex gap-8 flex-wrap" style="margin-bottom:8px;">
      ${ME.helpers.unitTag(item.unit)}${ME.helpers.diffTag(item.difficulty)}<span class="tag">${item.marks} mark${item.marks === 1 ? '' : 's'}</span><span class="tag">${item.type}</span>
    </div>
    <p style="font-weight:600;">${ME.helpers.escapeHtml(item.question)}</p>
    ${optionsHtml}
    <div class="flex gap-8">
      ${item.type === 'mcq' ? '<button class="btn btn-sm btn-check">Check answer</button>' : '<button class="btn btn-sm btn-reveal">Reveal answer</button>'}
      <button class="btn btn-sm btn-bookmark-q" title="Save to mistakes for later retry">🎯 Mark for retry</button>
    </div>
    <div class="answer-reveal" style="display:none;">
      <strong>Answer:</strong> ${ME.helpers.escapeHtml(item.answer)}
      ${item.explanation && item.explanation !== '—' ? '<br><br><strong>Why:</strong> ' + ME.helpers.escapeHtml(item.explanation) : ''}
      ${item.type !== 'mcq' ? '<div class="flex gap-8" style="margin-top:10px;"><button class="btn btn-sm self-right">✓ I got this right</button><button class="btn btn-sm self-wrong">✕ I got this wrong</button></div>' : ''}
    </div>
  </div>`;
}

function wireQuestionCards() {
  ME.helpers.qsa('.q-card').forEach(function (card) {
    const qid = card.getAttribute('data-qid');
    const item = ME.data.questions.find(function (x) { return x.id === qid; });
    const reveal = card.querySelector('.answer-reveal');

    const checkBtn = card.querySelector('.btn-check');
    if (checkBtn) {
      checkBtn.addEventListener('click', function () {
        const selected = card.querySelector('input[type=radio]:checked');
        if (!selected) return;
        const correct = selected.value === item.answer;
        ME.helpers.qsa('.q-options label', card).forEach(function (label) {
          const val = label.getAttribute('data-opt');
          if (val === item.answer) label.classList.add('correct');
          else if (label.querySelector('input').checked) label.classList.add('incorrect');
        });
        reveal.style.display = 'block';
        ME.store.logAttempt({ qid: item.id, correct: correct, unit: item.unit, topic: item.topic });
        if (!correct) {
          ME.store.addMistake({ id: item.id, question: item.question, correct: item.answer, given: selected.value, explanation: item.explanation, topic: item.topic, unit: item.unit });
        } else {
          ME.store.removeMistake(item.id);
        }
        checkBtn.disabled = true;
      });
    }

    const revealBtn = card.querySelector('.btn-reveal');
    if (revealBtn) {
      revealBtn.addEventListener('click', function () {
        reveal.style.display = 'block';
        revealBtn.style.display = 'none';
      });
    }

    const rightBtn = card.querySelector('.self-right');
    const wrongBtn = card.querySelector('.self-wrong');
    if (rightBtn) rightBtn.addEventListener('click', function () {
      ME.store.logAttempt({ qid: item.id, correct: true, unit: item.unit, topic: item.topic });
      ME.store.removeMistake(item.id);
      rightBtn.textContent = '✓ Logged';
      rightBtn.disabled = true; if (wrongBtn) wrongBtn.disabled = true;
    });
    if (wrongBtn) wrongBtn.addEventListener('click', function () {
      ME.store.logAttempt({ qid: item.id, correct: false, unit: item.unit, topic: item.topic });
      ME.store.addMistake({ id: item.id, question: item.question, correct: item.answer, given: '(self-marked wrong)', explanation: item.explanation, topic: item.topic, unit: item.unit });
      wrongBtn.textContent = '✕ Logged — added to My Mistakes';
      wrongBtn.disabled = true; if (rightBtn) rightBtn.disabled = true;
    });

    card.querySelector('.btn-bookmark-q').addEventListener('click', function (e) {
      ME.store.addMistake({ id: item.id, question: item.question, correct: item.answer, given: '(saved for retry)', explanation: item.explanation, topic: item.topic, unit: item.unit });
      e.target.textContent = '✓ Saved to My Mistakes';
      e.target.disabled = true;
    });
  });
}
