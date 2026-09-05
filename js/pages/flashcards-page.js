/* ============================================================
   FLASHCARDS PAGE
   Flip cards front/back, self-rate Know it / Almost / Don't know,
   progress tracked in localStorage. Cards can be filtered by unit.
   ============================================================ */

const FLASH_LEVEL_LABEL = { know: 'Know it', almost: 'Almost know it', dont: "Don't know it" };

ME.routes.flashcards = function (parsed) {
  const q = parsed.query;
  const state = { unit: q.unit || '', category: q.category || '' };

  function matches(c) {
    if (state.unit && String(c.unit) !== String(state.unit)) return false;
    if (state.category && c.category !== state.category) return false;
    return true;
  }

  const deck = ME.data.flashcards.filter(matches);
  const progress = ME.store.getFlashProgress();
  const categories = Array.from(new Set(ME.data.flashcards
    .filter(function (c) { return !state.unit || String(c.unit) === String(state.unit); })
    .map(function (c) { return c.category; })));

  const counts = { know: 0, almost: 0, dont: 0, unseen: 0 };
  deck.forEach(function (c) {
    const lvl = progress[c.id];
    if (lvl && counts[lvl] !== undefined) counts[lvl]++; else counts.unseen++;
  });

  const html = `
    <h1>Flashcards</h1>
    <p class="muted">${deck.length} card(s)${state.unit ? ' in Unit ' + ['', 'I', 'II', 'III', 'IV'][state.unit] : ' across all units'}. Rate yourself honestly — your ratings are saved on this device.</p>

    <div class="card" style="margin-bottom:16px;">
      <div class="grid grid-2">
        <div>
          <label class="muted" style="font-size:0.8rem;">Unit</label>
          <select id="fc-unit" class="btn-block">
            <option value="">All units</option>
            <option value="1">Unit I</option>
            <option value="2">Unit II</option>
            <option value="3">Unit III</option>
            <option value="4">Unit IV</option>
          </select>
        </div>
        <div>
          <label class="muted" style="font-size:0.8rem;">Category</label>
          <select id="fc-category" class="btn-block">
            <option value="">All categories</option>
            ${categories.map(function (c) { return `<option value="${ME.helpers.escapeHtml(c)}" ${state.category === c ? 'selected' : ''}>${ME.helpers.escapeHtml(c)}</option>`; }).join('')}
          </select>
        </div>
      </div>
    </div>

    ${!deck.length ? '<div class="empty-state">No flashcards match this filter.</div>' : `
      <div class="grid grid-4" style="margin-bottom:16px;">
        <div class="card center"><div style="font-size:1.3rem;font-weight:700;">${counts.know}</div><div class="muted" style="font-size:0.78rem;">Know it</div></div>
        <div class="card center"><div style="font-size:1.3rem;font-weight:700;">${counts.almost}</div><div class="muted" style="font-size:0.78rem;">Almost</div></div>
        <div class="card center"><div style="font-size:1.3rem;font-weight:700;">${counts.dont}</div><div class="muted" style="font-size:0.78rem;">Don't know</div></div>
        <div class="card center"><div style="font-size:1.3rem;font-weight:700;">${counts.unseen}</div><div class="muted" style="font-size:0.78rem;">Unseen</div></div>
      </div>

      <div class="flash-wrap">
        <div class="flashcard-frame">
          <div class="flashcard" id="flashcard" data-index="0" data-flipped="0">
            <span class="side-label" id="fc-side-label">Front &middot; tap to flip</span>
            <span id="fc-text"></span>
          </div>
        </div>
        <div class="muted center" style="margin:10px 0;" id="fc-position"></div>
        <div class="flex space-between gap-8" style="margin-bottom:10px;">
          <button class="btn" id="fc-prev">← Previous</button>
          <button class="btn" id="fc-shuffle">🔀 Shuffle</button>
          <button class="btn" id="fc-next">Next →</button>
        </div>
        <div class="flash-actions">
          <button class="btn btn-danger" id="fc-dont">✕ Don't know it</button>
          <button class="btn" id="fc-almost">~ Almost know it</button>
          <button class="btn btn-primary" id="fc-know">✓ Know it</button>
        </div>
      </div>
    `}
  `;
  ME.setView(html);

  if (!deck.length) return;

  ME.helpers.qs('#fc-unit').value = state.unit;
  document.getElementById('fc-unit').addEventListener('change', function (e) {
    location.hash = '#/flashcards' + (e.target.value ? '?unit=' + e.target.value : '');
  });
  document.getElementById('fc-category').addEventListener('change', function (e) {
    const params = [];
    if (state.unit) params.push('unit=' + state.unit);
    if (e.target.value) params.push('category=' + encodeURIComponent(e.target.value));
    location.hash = '#/flashcards' + (params.length ? '?' + params.join('&') : '');
  });

  let order = deck.map(function (c, i) { return i; });
  let pos = 0;

  const cardEl = document.getElementById('flashcard');
  const textEl = document.getElementById('fc-text');
  const sideLabel = document.getElementById('fc-side-label');
  const posEl = document.getElementById('fc-position');

  function currentCard() { return deck[order[pos]]; }

  function render() {
    const c = currentCard();
    cardEl.setAttribute('data-flipped', '0');
    textEl.textContent = c.front;
    sideLabel.textContent = 'Front · tap to flip';
    const lvl = progress[c.id];
    posEl.textContent = 'Card ' + (pos + 1) + ' of ' + deck.length + (lvl ? ' · last rated: ' + FLASH_LEVEL_LABEL[lvl] : '');
  }

  cardEl.addEventListener('click', function () {
    const c = currentCard();
    const flipped = cardEl.getAttribute('data-flipped') === '1';
    if (flipped) {
      textEl.textContent = c.front;
      sideLabel.textContent = 'Front · tap to flip';
      cardEl.setAttribute('data-flipped', '0');
    } else {
      textEl.textContent = c.back;
      sideLabel.textContent = 'Back';
      cardEl.setAttribute('data-flipped', '1');
    }
  });

  function goTo(newPos) {
    pos = (newPos + order.length) % order.length;
    render();
  }

  document.getElementById('fc-prev').addEventListener('click', function () { goTo(pos - 1); });
  document.getElementById('fc-next').addEventListener('click', function () { goTo(pos + 1); });
  document.getElementById('fc-shuffle').addEventListener('click', function () {
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = order[i]; order[i] = order[j]; order[j] = t;
    }
    pos = 0;
    render();
  });

  function rate(level) {
    const c = currentCard();
    ME.store.setFlashProgress(c.id, level);
    progress[c.id] = level;
    goTo(pos + 1);
  }
  document.getElementById('fc-know').addEventListener('click', function () { rate('know'); });
  document.getElementById('fc-almost').addEventListener('click', function () { rate('almost'); });
  document.getElementById('fc-dont').addEventListener('click', function () { rate('dont'); });

  render();
};
