/* ============================================================
   SMART REVISION SYSTEM
   ============================================================ */

/* Hand-curated highest-yield topics, roughly in priority order (used for
   time-boxed emergency revision). Priority = "most frequently testable /
   conceptually essential", not a guarantee of what will appear. */
const REVISION_PRIORITY = [
  'u1-lathe', 'u3-poisson-stress-strain-diagram', 'u4-nc-vs-cnc', 'u2-vcr-cycle',
  'u1-first-law', 'u3-hooke-elastic-constants', 'u2-pelton', 'u1-second-law',
  'u3-belt-drives', 'u1-shaper', 'u2-francis', 'u2-kaplan', 'u3-gear-drives',
  'u1-metalcutting', 'u4-nc-classification', 'u2-cop', 'u3-clutches',
  'u1-entropy-third-law', 'u1-zeroth-law', 'u3-mechanical-properties',
  'u2-psychrometry', 'u1-drilling', 'u1-milling', 'u4-manufacturing-systems',
  'u3-stress-strain-intro', 'u2-refrigeration-basics', 'u1-planer', 'u1-slotter',
  'u2-turbines-intro', 'u2-centrifugal-pump', 'u2-reciprocating-pump',
  'u3-rope-chain-drives', 'u1-work-heat', 'u1-thermo-basics', 'u4-nc-fundamentals',
  'u2-human-comfort', 'u1-thermo-numericals', 'u1-intro-machinetools'
];

const DO_NOT_CONFUSE = [
  ['Ductility vs Malleability', 'Ductile = drawn into WIRE (tension). Malleable = hammered into SHEET (compression).'],
  ['Slip vs Creep (belts)', 'Slip = loss of grip from insufficient friction. Creep = elastic stretch/relax as belt passes tight→slack side.'],
  ['NC vs CNC', 'NC = hard-wired, punched tape, no on-machine editing. CNC = computer-controlled, editable/storable programs.'],
  ['Drilling vs Boring', 'Drilling originates a new hole. Boring enlarges/finishes an existing hole.'],
  ['Shaper vs Planer', 'Shaper: tool reciprocates, small/medium work. Planer: work reciprocates, large/heavy work.'],
  ['COP vs Efficiency', 'Efficiency (heat engines) is always < 1. COP (refrigeration) can be greater than 1 — they are not the same kind of ratio.'],
  ['Fatigue vs Creep', 'Fatigue = failure under repeated/cyclic load. Creep = slow deformation under constant sustained load (often at high temperature).'],
  ['Hardness vs Toughness', 'Hardness = resists indentation/scratching. Toughness = absorbs energy/impact without fracturing.'],
  ['Strength vs Stiffness', 'Strength = resists failure/fracture. Stiffness = resists elastic deformation (relates to E).'],
  ['Impulse vs Reaction turbine', 'Impulse (Pelton): pressure stays atmospheric across runner. Reaction (Francis/Kaplan): pressure changes within a runner that stays full of water.'],
  ['Lead screw vs Feed rod', 'Lead screw = thread cutting only (via half-nut). Feed rod = ordinary automatic feed.'],
  ['Orthogonal vs Oblique cutting', 'Orthogonal: cutting edge ⟂ to travel (2-D). Oblique: edge inclined (3-D, more realistic).']
];

function revTopicRow(id) {
  const t = ME.data.topicById[id];
  if (!t) return '';
  return `<a class="card card-link" href="#/topic/${id}" style="margin-bottom:8px;display:block;">
    ${ME.helpers.unitTag(t.unit)} <strong>${ME.helpers.escapeHtml(t.title)}</strong>
    <div class="muted" style="font-size:0.85rem;margin-top:2px;">${ME.helpers.escapeHtml(t.summary || '')}</div>
  </a>`;
}

function doNotConfuseBlock() {
  return `<div class="topic-section"><h2>⚠️ Do Not Confuse</h2>${DO_NOT_CONFUSE.map(function (pair) {
    return `<div class="mistake-box" style="margin-bottom:10px;"><strong>${ME.helpers.escapeHtml(pair[0])}</strong><br>${ME.helpers.escapeHtml(pair[1])}</div>`;
  }).join('')}</div>`;
}

function formulaQuickDump() {
  return `<div class="topic-section"><h2>∑ Every formula, fast</h2>${ME.data.formulas.map(function (sec) {
    return `<h3>${ME.helpers.escapeHtml(sec.section)}</h3>` + sec.items.map(function (f) {
      return `<div class="formula-box"><strong>${ME.helpers.escapeHtml(f.formula)}</strong><div class="muted" style="font-size:0.85rem;">${ME.helpers.escapeHtml(f.meaning || '')}</div></div>`;
    }).join('');
  }).join('')}</div>`;
}

ME.routes.revision = function (parsed) {
  const mode = parsed.parts[1] || 'hub';

  if (mode === 'hub') {
    const html = `
      <h1>Smart Revision System</h1>
      <p class="muted">Pick how much time you actually have. Every mode intelligently prioritizes across all four units — none of these predict the exact paper.</p>
      <div class="timer-modes" style="margin-bottom:20px;">
        <a class="btn" href="#/revision/15min">⏱️ 15 minutes</a>
        <a class="btn" href="#/revision/30min">⏱️ 30 minutes</a>
        <a class="btn" href="#/revision/1hr">⏱️ 1 hour</a>
        <a class="btn" href="#/revision/3hr">⏱️ 3 hours</a>
        <a class="btn" href="#/revision/1day">📅 1 day</a>
        <a class="btn" href="#/revision/3day">📅 3 days</a>
        <a class="btn" href="#/revision/7day">📅 7 days</a>
        <a class="btn btn-primary" href="#/revision/examEve">🌙 Exam-eve rapid revision</a>
      </div>
      <div class="grid grid-2">
        <a class="card card-link" href="#/revision/quick"><h3>Quick Revision</h3><p class="muted">One condensed pass across every unit — formulas, definitions, comparisons, diagrams.</p></a>
        <a class="card card-link" href="#/formulas"><h3>Formula Sheet</h3><p class="muted">Every formula in the syllabus, organised by section.</p></a>
        <a class="card card-link" href="#/flashcards"><h3>Flashcards</h3><p class="muted">Rapid-fire definitions and formulas.</p></a>
        <a class="card card-link" href="#/exam"><h3>Mock Exam</h3><p class="muted">Simulate the real 3-hour, 5-question paper.</p></a>
      </div>
    `;
    ME.setView(html);
    return;
  }

  if (mode === '15min' || mode === '30min') {
    const n = mode === '15min' ? 4 : 8;
    const picks = REVISION_PRIORITY.slice(0, n);
    const html = `
      ${ME.renderCrumbs([['Revision', '#/revision'], [mode === '15min' ? '15 minutes' : '30 minutes', null]])}
      <h1>${mode === '15min' ? '15-Minute' : '30-Minute'} Emergency Revision</h1>
      <p class="muted">Do not try to learn anything new right now. Just re-read these ${n} highest-yield topics, one line of summary each.</p>
      ${picks.map(revTopicRow).join('')}
      ${mode === '30min' ? doNotConfuseBlock() : ''}
    `;
    ME.setView(html);
    return;
  }

  if (mode === '1hr') {
    const html = `
      ${ME.renderCrumbs([['Revision', '#/revision'], ['1 hour', null]])}
      <h1>1-Hour Revision</h1>
      <p class="muted">Suggested split: ~12 min per unit on the highest-priority topics below, then 12 min on formulas and common confusions.</p>
      ${[1, 2, 3, 4].map(function (n) {
        const unitTopics = REVISION_PRIORITY.filter(function (id) { return ME.data.topicById[id] && ME.data.topicById[id].unit === n; }).slice(0, 3);
        return `<div class="topic-section"><h2>Unit ${['', 'I', 'II', 'III', 'IV'][n]}</h2>${unitTopics.map(revTopicRow).join('')}</div>`;
      }).join('')}
      ${doNotConfuseBlock()}
    `;
    ME.setView(html);
    return;
  }

  if (mode === '3hr' || mode === 'quick') {
    const html = `
      ${ME.renderCrumbs([['Revision', '#/revision'], ['3-hour / Quick revision', null]])}
      <h1>3-Hour Full Revision Pass</h1>
      <p class="muted">One condensed card per topic, unit by unit. Click any to open the full page if something doesn't click.</p>
      ${ME.data.units.map(function (u) {
        return `<div class="topic-section"><h2>${u.title} — ${ME.helpers.escapeHtml(u.subtitle)}</h2>${u.topics.map(function (t) { return revTopicRow(t.id); }).join('')}</div>`;
      }).join('')}
      ${doNotConfuseBlock()}
      ${formulaQuickDump()}
    `;
    ME.setView(html);
    return;
  }

  if (mode === 'examEve') {
    const html = `
      ${ME.renderCrumbs([['Revision', '#/revision'], ['Exam-eve rapid revision', null]])}
      <h1>🌙 Exam-Eve Rapid Revision</h1>
      <p class="muted">The night before: no new learning. Just formulas, laws, definitions, comparisons and your own weak spots.</p>
      <div class="topic-section"><h2>Your weakest topics right now</h2>
        ${ME.progress.weakestTopics(6).length ? ME.progress.weakestTopics(6).map(function (w) { return revTopicRow(w.id); }).join('') : '<p class="muted">No quiz data yet — practice a few questions first so this section can target your real weak spots.</p>'}
      </div>
      ${doNotConfuseBlock()}
      ${formulaQuickDump()}
      <div class="topic-section"><h2>Last checks</h2>
        <ul>
          <li>Can you draw the stress-strain diagram from memory with all 6 points labelled?</li>
          <li>Can you draw the VCR cycle loop (compressor → condenser → expansion valve → evaporator)?</li>
          <li>Can you list all 6 NC-vs-CNC comparison rows?</li>
          <li>Can you name all 7 lathe operations in one line each?</li>
          <li>Do you know which processes in the VCR cycle are constant-pressure vs constant-enthalpy?</li>
        </ul>
        <a class="btn btn-primary" href="#/exam">One more mock exam attempt →</a>
      </div>
    `;
    ME.setView(html);
    return;
  }

  if (mode === '1day' || mode === '3day' || mode === '7day') {
    const days = mode === '1day' ? 1 : (mode === '3day' ? 3 : 7);
    const plan = [];
    if (days === 1) {
      plan.push({ label: 'Morning', items: ['Study Unit I (Machine tools + Thermodynamics) — "Learn This" + "Draw This"', 'Practice 15 Unit I questions'] });
      plan.push({ label: 'Afternoon', items: ['Study Unit II (Refrigeration/A-C + Turbines/Pumps)', 'Study Unit III (Power transmission + Stress-strain)', 'Practice 15 questions across both'] });
      plan.push({ label: 'Evening', items: ['Study Unit IV (Manufacturing systems + NC/CNC)', 'Full formula sheet pass', 'One full mock exam under timed conditions'] });
    } else if (days === 3) {
      plan.push({ label: 'Day 1', items: ['Unit I — full "Teach me" style read-through', 'Flashcards: Unit I', 'Question Bank: Unit I (all difficulties)'] });
      plan.push({ label: 'Day 2', items: ['Units II & III — full read-through', 'Flashcards: Units II & III', 'Question Bank: Units II & III'] });
      plan.push({ label: 'Day 3', items: ['Unit IV + full formula sheet + Do-Not-Confuse list', 'One full timed mock exam', 'Review "My Mistakes" and re-attempt every wrong question'] });
    } else {
      plan.push({ label: 'Day 1–2', items: ['Unit I: machine tools (Lathe, Shaper, Planer, Milling, Drilling, Slotter, Metal cutting)', 'Unit I question bank + flashcards'] });
      plan.push({ label: 'Day 3', items: ['Unit I: Thermodynamics (Zeroth → Third Law) + numericals', 'Unit I mock questions'] });
      plan.push({ label: 'Day 4', items: ['Unit II: Refrigeration, A/C, psychrometry', 'Unit II: Turbines & pumps', 'Unit II question bank + flashcards'] });
      plan.push({ label: 'Day 5', items: ['Unit III: Power transmission (belts, chains, gears, clutches)', 'Unit III: Stress & strain, elastic constants, mechanical properties', 'Unit III question bank + flashcards'] });
      plan.push({ label: 'Day 6', items: ['Unit IV: Manufacturing systems + NC/CNC', 'Master Checklist review — mark every topic at least "Practiced"', 'One full timed mock exam'] });
      plan.push({ label: 'Day 7', items: ['Exam-eve rapid revision', 'Review My Mistakes bank fully', 'Light review only — no new topics'] });
    }
    const html = `
      ${ME.renderCrumbs([['Revision', '#/revision'], [days + '-day plan', null]])}
      <h1>${days}-Day Revision Plan</h1>
      <p class="muted">A structured plan covering every unit before your exam. Adjust the pace to how much time you actually have.</p>
      ${plan.map(function (p) {
        return `<div class="topic-section"><h2>${ME.helpers.escapeHtml(p.label)}</h2><ul>${p.items.map(function (i) { return '<li>' + ME.helpers.escapeHtml(i) + '</li>'; }).join('')}</ul></div>`;
      }).join('')}
      <a class="btn" href="#/units">Go to Study by Unit →</a>
    `;
    ME.setView(html);
    return;
  }

  ME.setView('<div class="empty-state">Unknown revision mode.</div>');
};
