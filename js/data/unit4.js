/* ============================================================
   UNIT IV — Manufacturing Systems & Numerical Control
   25ESC-ME-103H
   ============================================================ */

const UNIT4_TOPICS = [

// ---------------------------------------------------------------
{
  id: 'u4-manufacturing-systems',
  unit: 4,
  category: 'Manufacturing Systems',
  title: 'Manufacturing Systems: Job Shop, Batch, Mass & Continuous',
  summary: 'Four production strategies, distinguished mainly by volume and variety.',
  overview: `A manufacturing system is an integrated combination of processes, machine tools, material handling and personnel designed to convert raw materials into finished products. Which system a factory uses depends almost entirely on how many units it needs to make, and how many different product variants.`,
  working: `As production volume goes up and product variety goes down, factories move along a spectrum from job shop toward continuous/flow production, and the machines used shift from general-purpose (flexible, needs skilled labour) toward special-purpose (rigid, but very high output).`,
  parts: [
    { name: 'Job shop production', function: 'Small quantities of a wide variety of custom products, using general-purpose machines and highly skilled labour (e.g. a tool room, a prototype shop).' },
    { name: 'Batch production', function: 'Limited quantities of a product made periodically in batches, using moderately flexible machines (e.g. seasonal clothing, textbook print runs).' },
    { name: 'Mass production', function: 'Large quantities of a STANDARDISED product made continuously, using special-purpose machines and dedicated production lines (e.g. car assembly lines).' },
    { name: 'Continuous / flow production', function: 'Very high volume, standardised, uninterrupted production, typical of process/chemical industries (e.g. petroleum refining, cement).' }
  ],
  types: null, operations: null, formulas: null,
  diagram: { description: 'A horizontal spectrum arrow from left "Job shop" to right "Continuous", with labels showing Variety decreasing left-to-right and Volume increasing left-to-right.', svg: null },
  examTip: `A quick way to remember the order: as you go Job shop → Batch → Mass → Continuous, VARIETY keeps falling and VOLUME keeps rising — state this trend explicitly, it's an easy bonus line in any answer.`,
  commonMistake: `Confusing batch and mass production — batch still makes a LIMITED quantity periodically (machines aren't dedicated to one product forever); mass production commits machines to one standardised product indefinitely.`,
  quickCheck: [
    { q: 'Which manufacturing system uses general-purpose machines and highly skilled labour for a wide variety of custom products?', a: 'Job shop production.' },
    { q: 'Give an example of continuous/flow production.', a: 'A chemical or petroleum refining process, or cement manufacturing.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u4-nc-fundamentals',
  unit: 4,
  category: 'Numerical Control',
  title: 'Fundamentals of Numerical Control (NC)',
  summary: 'Controlling a machine tool with coded numerical instructions instead of a manual operator.',
  overview: `Numerical Control (NC) is a method of automatically controlling the movements and operations of a machine tool using a series of coded numerical/alphabetic instructions — a "part program" — instead of a machinist manually operating the machine.`,
  working: `An NC system has three basic components working together: the part program tells the system WHAT to do, the Machine Control Unit (MCU) figures out HOW to convert that into signals, and the machine tool actually DOES the cutting.`,
  parts: [
    { name: 'Part program', function: 'A set of coded instructions (commonly G-codes/M-codes) representing the machining sequence and tool paths, prepared from the part\'s geometry and required operations.' },
    { name: 'Machine Control Unit (MCU)', function: 'The "brain" of the NC system — reads, interprets and converts the coded part program into electrical signals that drive the machine\'s actuators (motors, drives).' },
    { name: 'Machine tool', function: 'The actual machine (lathe, mill, etc.), fitted with servo motors/drives that execute the motions commanded by the MCU.' }
  ],
  types: null, operations: null, formulas: null,
  diagram: {
    description: 'A simple flow diagram: Part Program → Machine Control Unit (MCU) → Drives/Actuators → Machine Tool, with an arrow looping back from the machine tool to the MCU labelled "feedback (closed loop only)".',
    svg: `<svg viewBox="0 0 640 140" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="45" width="130" height="50" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="75" y="75" text-anchor="middle" font-size="11" fill="var(--ink)">Part Program</text>
      <rect x="200" y="45" width="140" height="50" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="270" y="70" text-anchor="middle" font-size="11" fill="var(--ink)">Machine Control</text>
      <text x="270" y="84" text-anchor="middle" font-size="11" fill="var(--ink)">Unit (MCU)</text>
      <rect x="410" y="45" width="90" height="50" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="455" y="65" text-anchor="middle" font-size="10" fill="var(--ink)">Drives /</text>
      <text x="455" y="79" text-anchor="middle" font-size="10" fill="var(--ink)">Actuators</text>
      <rect x="550" y="45" width="80" height="50" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="590" y="75" text-anchor="middle" font-size="11" fill="var(--ink)">Machine</text>
      <line x1="140" y1="70" x2="200" y2="70" stroke="var(--steel)" stroke-width="2"/>
      <line x1="340" y1="70" x2="410" y2="70" stroke="var(--steel)" stroke-width="2"/>
      <line x1="500" y1="70" x2="550" y2="70" stroke="var(--steel)" stroke-width="2"/>
      <path d="M590,95 Q590,120 270,120 Q270,120 270,95" fill="none" stroke="var(--brass)" stroke-width="1.5" stroke-dasharray="4,3"/>
      <text x="430" y="132" text-anchor="middle" font-size="9" fill="var(--muted)">feedback — closed loop only</text>
    </svg>`
  },
  examTip: `This block diagram (Part Program → MCU → Machine Tool) is a guaranteed component of any NC/CNC long answer — draw it first, then elaborate on each block.`,
  commonMistake: `Calling the part program "the machine's memory" — the part program is the INSTRUCTION SET; whether or not it's stored in memory (vs read repeatedly from tape) is actually the key difference between NC and CNC.`,
  quickCheck: [
    { q: 'What are the three basic components of an NC system?', a: 'Part program, Machine Control Unit (MCU), and the machine tool.' },
    { q: 'What is the "brain" of an NC system called?', a: 'The Machine Control Unit (MCU).' }
  ],
  extraNotes: `Advantages of NC: high accuracy and repeatability; reduced dependency on operator skill and human error; increased productivity via reduced setup/machining time; flexibility to switch jobs by simply changing the part program; reduced scrap/rework and better quality control; reduced lead time for new components.`
},

// ---------------------------------------------------------------
{
  id: 'u4-nc-classification',
  unit: 4,
  category: 'Numerical Control',
  title: 'Classification of NC Systems',
  summary: 'By motion-control type (PTP / straight-cut / contouring) and by control loop (open / closed).',
  overview: `NC systems are classified along two independent axes: HOW the tool path is controlled (motion control), and WHETHER the system checks its own actual position (control loop).`,
  working: `Motion control classification depends on what kind of path accuracy the job needs — a hole just needs the right END POINT (point-to-point), while a complex profile needs the entire PATH controlled continuously (contouring). Control-loop classification depends on whether the system verifies it actually reached the commanded position.`,
  parts: [
    { name: 'Point-to-Point (PTP) control', function: 'Moves the tool from one point to the next without controlling the path taken between them — only the END position matters. Used for drilling, spot welding, punching.' },
    { name: 'Straight-Cut (Line) control', function: 'Moves the tool along axes at a controlled feed rate in straight lines (parallel to the machine axes), cutting along the way — but cannot follow curved/angular paths precisely.' },
    { name: 'Contouring (Continuous Path) control', function: 'Continuously controls the tool path along a curved or angular contour using simultaneous, coordinated motion of two or more axes — used for milling complex profiles, cams, dies.' },
    { name: 'Open-loop system', function: 'No feedback mechanism to verify the actual tool position against the commanded position (typically uses stepper motors); simpler and cheaper, but less accurate.' },
    { name: 'Closed-loop system', function: 'Uses feedback devices (position/velocity transducers, encoders) to continuously compare actual position with the commanded position and correct any error; more accurate and reliable, but more expensive.' }
  ],
  types: null, operations: null, formulas: null,
  diagram: { description: 'For control loop: draw open-loop as a single arrow Command → Motor → Motion (no return arrow). Draw closed-loop with an additional feedback arrow returning from Motion/Encoder back to a comparator before the Motor.', svg: null },
  examTip: `PTP vs Straight-cut vs Contouring is best remembered by the OPERATION each suits: PTP = drilling (only end point matters), Straight-cut = simple milling along an axis, Contouring = complex profile milling.`,
  commonMistake: `Thinking straight-cut control can machine ANY straight-line path at any angle freely like contouring can — straight-cut is limited to lines parallel to the machine's own axes; only contouring gives true coordinated multi-axis path control.`,
  quickCheck: [
    { q: 'Which motion-control type is used for a simple drilling operation, and why?', a: 'Point-to-Point (PTP) — only the final position of each hole matters, not the path taken to get there.' },
    { q: 'What is the key difference between open-loop and closed-loop NC systems?', a: 'Closed-loop uses feedback (encoders/transducers) to verify and correct actual position; open-loop has no such feedback.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u4-nc-vs-cnc',
  unit: 4,
  category: 'Numerical Control',
  title: 'NC vs CNC',
  summary: 'From hard-wired, tape-driven control to a flexible, computer-based, editable controller.',
  overview: `NC (Numerical Control) and CNC (Computer Numerical Control) do the same basic job — running a machine tool from coded instructions — but CNC replaces the old hard-wired control logic with a dedicated on-board computer, which changes almost everything about flexibility, storage and cost of ownership.`,
  working: `A classic NC machine reads its part program from punched tape or cards EVERY TIME it runs a job — there's no on-board memory, and the control logic is fixed (hard-wired), so editing means physically re-punching a new tape. A CNC machine stores the part program directly in computer memory, so programs can be recalled instantly, edited right at the machine, and multiple programs can be kept in storage simultaneously.`,
  parts: null, types: null, operations: null, formulas: null,
  diagram: null,
  examTip: `This comparison table is one of the highest-yield items in Unit IV — it is very commonly the entire content of a Q1 sub-part or a standalone 5-mark question. Learn all 7 rows.`,
  commonMistake: `Saying "CNC is just a faster NC" — the real distinction is architectural (hard-wired logic vs a stored-program computer), which is WHY CNC gains editing, diagnostics, multi-program storage and better accuracy over time, not just speed.`,
  quickCheck: [
    { q: 'Where is the part program stored in a classic NC machine?', a: 'On punched tape/cards, read again for each job — there is no on-board memory.' },
    { q: 'Name two capabilities CNC has that classic NC lacks.', a: 'Any two of: at-the-machine editing, built-in diagnostics, storing multiple programs simultaneously, no tape-wear-related accuracy loss.' }
  ],
  comparisonTable: {
    title: 'NC vs CNC',
    columns: ['Aspect', 'NC (Numerical Control)', 'CNC (Computer Numerical Control)'],
    rows: [
      ['Control', 'Hard-wired logic circuits (fixed)', 'Dedicated computer with software (flexible)'],
      ['Program storage', 'Punched tape/cards, read repeatedly per job — no on-board memory', 'Stored in computer memory; recalled/edited/reused instantly'],
      ['Flexibility', 'Limited — a program change needs a new tape', 'High — programs edited, stored, modified at the machine'],
      ['Editing', 'Not possible at the machine; needs external re-punching', 'Possible directly at the machine controller'],
      ['Diagnostics', 'Not available', 'Built-in self-diagnostic capability'],
      ['Accuracy over time', 'Tape wear can cause errors', 'Higher and more consistent — no tape wear'],
      ['Cost', 'Lower initial cost, higher operating cost', 'Higher initial cost, more efficient long-term'],
      ['Multiple part programs', 'Cannot store multiple programs at once', 'Can store and manage several programs in memory']
    ]
  }
}

];
