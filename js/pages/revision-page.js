/* ============================================================
   SMART REVISION SYSTEM — semester-wide
   Every mode dynamically prioritises: weak topics first (from
   quiz/exam/flashcard/mistake data), then a hand-curated
   high-yield list, then syllabus order. None of these predict
   the exact paper.
   ============================================================ */

/* Hand-curated highest-yield BME topics (legacy, still valid) — used
   to seed picks when the student has no attempt history yet. */
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

/* High-yield seed topics for the other subjects (one per unit minimum). */
const REVISION_SEEDS = {
  maths: ['m1-lhospital', 'm1-mvt-cauchy', 'm1-taylor-maclaurin', 'm2-determinants', 'm2-rank-echelon', 'm2-gauss', 'm3-basis-dimension', 'm3-rank-nullity', 'm4-eigenvalues', 'm4-diagonalization', 'm4-gram-schmidt'],
  physics: ['p1-photoelectric', 'p1-compton', 'p1-debroglie', 'p1-uncertainty', 'p1-particle-box', 'p2-kronig-penney', 'p2-fermi-level', 'p3-intrinsic-extrinsic', 'p3-pn-junction', 'p3-optoelectronic', 'p4-einstein-coefficients', 'p4-he-ne-ruby'],
  pps: ['c1-number-systems', 'c2-algorithms', 'c3-operators', 'c3-decisions', 'c3-loops', 'c3-arrays', 'c3-strings', 'c4-functions', 'c4-recursion', 'c4-pointers', 'c4-structures', 'c4-files'],
  egd: ['g1-conics', 'g1-scales', 'g2-projection-basics', 'g2-lines', 'g3-solids-simple', 'g3-solids-inclined', 'g4-sections', 'g4-development', 'g4-isometric', 'g4-cad-bim'],
  english: ['e1-agreement', 'e1-verb-patterns', 'e2-tenses-voice', 'e3-phonetics', 'e4-literary-texts', 'e4-official-letters'],
  'pps-lab': ['lab-pps-loops-conditionals', 'lab-pps-arrays-2d', 'lab-pps-recursion', 'lab-pps-pointers', 'lab-pps-files'],
  'physics-lab': ['lab-phy-vernier', 'lab-phy-screw-gauge', 'lab-phy-hall', 'lab-phy-planck', 'lab-phy-solar-cell', 'lab-phy-pn-diode'],
  'english-lab': ['lab-eng-listening', 'lab-eng-phonemes', 'lab-eng-introductions', 'lab-eng-telephone', 'lab-eng-presentations']
};

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
  ['Orthogonal vs Oblique cutting', 'Orthogonal: cutting edge ⟂ to travel (2-D). Oblique: edge inclined (3-D, more realistic).'],
  ['Rolle vs Lagrange MVT', "Rolle needs f(a) = f(b) (endpoints equal). Lagrange drops that condition: f'(c) = (f(b) − f(a))/(b − a)."],
  ['Taylor vs Maclaurin series', 'Maclaurin is just Taylor centred at a = 0 — every Maclaurin series is a Taylor series, not vice versa.'],
  ['Rank vs Nullity', 'Rank = dimension of the range (column space). Nullity = dimension of the kernel. They ADD to n (number of columns), not to each other.'],
  ['Eigenvalue vs Eigenvector', 'The SCALAR λ is the eigenvalue; the NON-ZERO vector x with Ax = λx is the eigenvector. x = 0 is never an eigenvector.'],
  ['Intrinsic vs Extrinsic semiconductor', 'Intrinsic = pure, carriers from thermal breaking of bonds. Extrinsic = doped, carrier type set by the dopant.'],
  ['Drift vs Diffusion (carriers)', 'Drift = motion driven by an electric field. Diffusion = motion from concentration gradient. Both currents coexist in a diode.'],
  ['Spontaneous vs Stimulated emission', 'Spontaneous = random, incoherent photons. Stimulated = triggered photon that is coherent and in phase — the basis of lasers.'],
  ['Compiler vs Interpreter', 'Compiler translates the WHOLE program before execution (C). Interpreter translates line by line while running.'],
  ['Call by value vs call by reference', 'Value: the function gets a COPY. Reference (pointers): the function gets the ADDRESS and can change the original.'],
  ['malloc vs calloc', 'malloc: one block, garbage (uninitialised) values. calloc: multiple blocks, all initialised to zero.'],
  ['First-angle vs Third-angle projection', 'First-angle: object between observer and plane (profile to the LEFT of the front view). Third-angle: plane between observer and object.'],
  ['Isometric view vs Isometric projection', 'Projection uses the isometric scale (~0.816, foreshortened). View is drawn at full size — about 22.5% larger than the projection.']
];

function revTopicRow(id) {
  const t = ME.data.topicById[id];
  if (!t) return '';
  const c = ME.helpers.courseOf(t);
  return `<a class="card card-link" href="#/topic/${id}" style="margin-bottom:8px;display:block;">
    ${ME.helpers.courseTag(c)} ${ME.helpers.unitTag(t.unit)} <strong>${ME.helpers.escapeHtml(t.title)}</strong>
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
    const c = ME.data.courseById[sec.course || 'bme'];
    return `<h3>${c ? c.icon + ' ' + ME.helpers.escapeHtml(c.shortName) + ' — ' : ''}${ME.helpers.escapeHtml(sec.section)}</h3>` + sec.items.map(function (f) {
      return `<div class="formula-box"><strong>${ME.helpers.escapeHtml(f.formula)}</strong><div class="muted" style="font-size:0.85rem;">${ME.helpers.escapeHtml(f.meaning || '')}</div></div>`;
    }).join('');
  }).join('')}</div>`;
}

/* Weakness-first revision queue with a curated fallback. */
function revisionQueue() {
  const weak = ME.plan.weaknessMap();
  const courseOrder = ME.data.allCourses.map(function (c) { return c.id; });
  const topics = ME.data.allTopics.slice().filter(function (t) { return !!ME.data.topicById[t.id]; });
  topics.sort(function (a, b) {
    const wa = weak[a.id] ? weak[a.id].score : 0;
    const wb = weak[b.id] ? weak[b.id].score : 0;
    if (wb !== wa) return wb - wa;
    const ca = courseOrder.indexOf(a.course || 'bme'), cb = courseOrder.indexOf(b.course || 'bme');
    if (ca !== cb) return ca - cb;
    return a.unit - b.unit;
  });
  // Anyone with no history yet: weakness scores are all status-driven (35),
  // so seed curated high-yield topics to the front instead.
  const hasHistory = ME.store.getAttempts().length > 0 || Object.keys(ME.store.getVisits()).length > 0;
  if (!hasHistory) {
    const seeds = Object.keys(REVISION_SEEDS).reduce(function (acc, k) { return acc.concat(REVISION_SEEDS[k]); }, []).concat(REVISION_PRIORITY);
    const seedSet = {};
    seeds.forEach(function (id, i) { if (ME.data.topicById[id]) seedSet[id] = i; });
    topics.sort(function (a, b) {
      const ia = seedSet[a.id] !== undefined ? seedSet[a.id] : 9999;
      const ib = seedSet[b.id] !== undefined ? seedSet[b.id] : 9999;
      if (ia !== ib) return ia - ib;
      const ca = courseOrder.indexOf(a.course || 'bme'), cb = courseOrder.indexOf(b.course || 'bme');
      if (ca !== cb) return ca - cb;
      return a.unit - b.unit;
    });
  }
  return topics;
}

ME.routes.revision = function (parsed) {
  const mode = parsed.parts[1] || 'hub';

  if (mode === 'hub') {
    const html = `
      <h1>Smart Revision System</h1>
      <p class="muted">Pick how much time you actually have. Every mode dynamically prioritises across all nine subjects — none of these predict the exact paper.</p>
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
        <a class="card card-link" href="#/revision/quick"><h3>Quick Revision</h3><p class="muted">One condensed pass across every subject — formulas, definitions, comparisons, diagrams.</p></a>
        <a class="card card-link" href="#/formulas"><h3>Formula Sheet</h3><p class="muted">Every formula in the semester, organised by subject and section.</p></a>
        <a class="card card-link" href="#/flashcards"><h3>Flashcards</h3><p class="muted">Rapid-fire definitions and formulas for every subject.</p></a>
        <a class="card card-link" href="#/exam"><h3>Mock Exams</h3><p class="muted">Per-subject papers that follow each official pattern.</p></a>
      </div>
    `;
    ME.setView(html);
    return;
  }

  if (mode === '15min' || mode === '30min') {
    const n = mode === '15min' ? 4 : 8;
    const picks = revisionQueue().slice(0, n).map(function (t) { return t.id; });
    const html = `
      ${ME.renderCrumbs([['Revision', '#/revision'], [mode === '15min' ? '15 minutes' : '30 minutes', null]])}
      <h1>${mode === '15min' ? '15-Minute' : '30-Minute'} Emergency Revision</h1>
      <p class="muted">Do not try to learn anything new right now. Just re-read these ${n} highest-priority topics, one line of summary each.</p>
      ${picks.map(revTopicRow).join('')}
      ${mode === '30min' ? doNotConfuseBlock() : ''}
    `;
    ME.setView(html);
    return;
  }

  if (mode === '1hr') {
    // ~12 min per subject: the single most valuable topic per unit.
    const queue = revisionQueue();
    const perCourse = {};
    queue.forEach(function (t) {
      const cid = t.course || 'bme';
      perCourse[cid] = perCourse[cid] || [];
      if (perCourse[cid].length < 4) perCourse[cid].push(t.id);
    });
    const html = `
      ${ME.renderCrumbs([['Revision', '#/revision'], ['1 hour', null]])}
      <h1>1-Hour Revision</h1>
      <p class="muted">Suggested split: ~6 minutes per subject below — its top topic per unit — then the rest of the time on the Do-Not-Confuse list and formulas.</p>
      ${ME.data.allCourses.map(function (c) {
        const picks = (perCourse[c.id] || []).slice(0, 4);
        return picks.length ? `<div class="topic-section"><h2>${c.icon} ${ME.helpers.escapeHtml(c.shortName)} — ${ME.helpers.escapeHtml(c.name)}</h2>${picks.map(revTopicRow).join('')}</div>` : '';
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
      <p class="muted">One condensed card per topic, subject by subject. Click any to open the full page if something doesn't click.</p>
      ${ME.data.allCourses.map(function (c) {
        const topics = ME.helpers.topicsForCourse(c.id);
        return topics.length ? `<div class="topic-section"><h2>${c.icon} ${ME.helpers.escapeHtml(c.name)}</h2>${topics.map(function (t) { return revTopicRow(t.id); }).join('')}</div>` : '';
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
      <div class="topic-section"><h2>High-yield topics, subject by subject</h2>
        ${ME.data.allCourses.map(function (c) {
          const seeds = (REVISION_SEEDS[c.id] || []).filter(function (id) { return ME.data.topicById[id]; }).slice(0, 4);
          return seeds.length ? `<h3>${c.icon} ${ME.helpers.escapeHtml(c.shortName)}</h3>` + seeds.map(revTopicRow).join('') : '';
        }).join('')}
      </div>
      ${doNotConfuseBlock()}
      ${formulaQuickDump()}
      <div class="topic-section"><h2>Last checks</h2>
        <ul>
          <li>Maths: can you state and apply Rolle's, Lagrange's and the Rank-Nullity theorem — with their exact conditions?</li>
          <li>Physics: can you derive the time-independent Schrödinger equation and explain ψ's physical meaning?</li>
          <li>PPS: can you dry-run a recursion (factorial + Fibonacci) and write malloc/calloc/free from memory?</li>
          <li>EGD: can you set out a first-angle projection of a line inclined to both planes, step by step?</li>
          <li>BME: can you draw the stress-strain diagram, the VCR cycle loop, and list all 7 lathe operations?</li>
          <li>English: can you define the SVOC pattern and transcribe three words into IPA?</li>
          <li>Labs: do you know the formula, least count and two sources of error for each experiment you performed?</li>
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
    const S = function (cid) {
      const c = ME.data.courseById[cid];
      return c ? `${c.icon} ${c.shortName}` : cid;
    };
    if (days === 1) {
      plan.push({ label: 'Morning', items: [S('maths') + ': units I–II revision — theorems, formulas, one numerical per type', S('physics') + ': units I–II — derivations and band theory', 'Flashcards: Maths + Physics (weak mode)'] });
      plan.push({ label: 'Afternoon', items: [S('pps') + ': units III–IV — operators, arrays, pointers, structures', S('bme') + ': high-yield list — machine tools + thermodynamics', 'Practice 20 questions across both'] });
      plan.push({ label: 'Evening', items: [S('egd') + ' + ' + S('english') + ': checklists and letter/grammar formats', 'Labs: formulas, least counts, viva answers', 'One full mock exam under timed conditions'] });
    } else if (days === 3) {
      plan.push({ label: 'Day 1', items: [S('maths') + ' — full pass, unit by unit', 'Flashcards + question bank: Maths', S('physics') + ' — full pass, unit by unit'] });
      plan.push({ label: 'Day 2', items: [S('pps') + ' — full pass (code reading + dry runs)', S('bme') + ' — full pass', 'Question banks: PPS + BME'] });
      plan.push({ label: 'Day 3', items: [S('egd') + ' + ' + S('english') + ' + all three labs', 'Formula sheet + Do-Not-Confuse full pass', 'One full timed mock exam; re-attempt every mistake'] });
    } else {
      plan.push({ label: 'Day 1', items: [S('maths') + ': Unit I (Calculus) + Unit II (Matrices)', 'Question bank + flashcards for both units'] });
      plan.push({ label: 'Day 2', items: [S('maths') + ': Units III–IV (Vector spaces, eigenvalues)', S('physics') + ': Units I–II'] });
      plan.push({ label: 'Day 3', items: [S('physics') + ': Units III–IV (Semiconductors, Lasers)', 'Physics Lab: formulas + viva'] });
      plan.push({ label: 'Day 4', items: [S('pps') + ': Units I–II + Unit III basics', 'PPS Lab: write 5 core programs from scratch'] });
      plan.push({ label: 'Day 5', items: [S('pps') + ': Unit IV + ' + S('egd') + ': Units I–II'] });
      plan.push({ label: 'Day 6', items: [S('egd') + ': Units III–IV + ' + S('bme') + ': Units I–II', S('english') + ': grammar + phonetics + letters'] });
      plan.push({ label: 'Day 7', items: [S('bme') + ': Units III–IV + all labs viva', 'Exam-eve rapid revision + one full timed mock exam', 'Review My Mistakes fully — no new topics'] });
    }
    const html = `
      ${ME.renderCrumbs([['Revision', '#/revision'], [days + '-day plan', null]])}
      <h1>${days}-Day Revision Plan</h1>
      <p class="muted">A structured plan covering every subject before your exams. Adjust the pace to how much time you actually have.</p>
      ${plan.map(function (p) {
        return `<div class="topic-section"><h2>${ME.helpers.escapeHtml(p.label)}</h2><ul>${p.items.map(function (i) { return '<li>' + ME.helpers.escapeHtml(i) + '</li>'; }).join('')}</ul></div>`;
      }).join('')}
      <a class="btn" href="#/semester">Go to the Semester Map →</a>
    `;
    ME.setView(html);
    return;
  }

  ME.setView('<div class="empty-state">Unknown revision mode.</div>');
};
