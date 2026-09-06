/* ============================================================
   UNIT I — Machine Tools & Basic Thermodynamics
   25ESC-ME-103H
   ============================================================ */

const BME_UNIT1_TOPICS = [

// ---------------------------------------------------------------
{
  id: 'u1-intro-machinetools',
  course: 'bme',
  unit: 1,
  category: 'Machine Tools',
  title: 'Introduction to Machine Tools',
  summary: 'What a machine tool is and how they are classified.',
  overview: `A machine tool is a power-driven device used to shape, cut, or form a rigid material — almost always metal — by removing excess material in the form of chips. Machine tools are the backbone of every manufacturing industry: they are literally the machines that build other machines.`,
  working: `Machine tools work by creating relative motion between a cutting tool and a workpiece. One of the two must rotate or move, and the other must feed into it, so that the tool's edge shears away a layer of material as a chip. The exact motions used to do this — rotating the work, reciprocating the tool, rotating the tool — are what distinguish a lathe from a shaper from a milling machine.`,
  parts: null,
  types: [
    'Generating type — the cutting edge and workpiece motion generate the required surface point by point (e.g. lathe, milling machine).',
    'Forming type — the shape of the cutting tool itself is reproduced directly onto the workpiece (e.g. broaching, form milling).'
  ],
  operations: null,
  formulas: null,
  diagram: { description: 'A simple classification tree: Machine Tools → Generating type (Lathe, Milling) and Forming type (Broaching, Form tools). Not usually asked as a drawing question — this topic is conceptual.' , svg: null},
  examTip: `This topic rarely gets its own question, but it is used as the opening line ("Define a machine tool") in almost any Unit I long answer on Lathe/Shaper/Milling — always start those answers with this definition.`,
  commonMistake: `Students confuse "machine tool" with just "machine" — a machine tool specifically removes material to produce a shape; a machine (like an engine) does not have to.`,
  quickCheck: [
    { q: 'Define a machine tool.', a: 'A power-driven device that shapes/cuts a rigid material by removing excess material as chips.' },
    { q: 'Name the two broad classes of machine tools.', a: 'Generating type and Forming type.' }
  ],
  applications: [
    'Producing precision components for every manufacturing industry — the machines that build other machines.',
    'Mass-producing interchangeable parts (shafts, gears, housings) on production lines.',
    'Tool rooms and repair shops, where a single machine must make a wide variety of one-off parts.'
  ],
  extraNotes: `The critical exam distinction is that a machine tool REMOVES material to create a shape, while a plain machine only transforms energy (an engine converts fuel to motion but makes nothing). That is why the lathe is called the "mother of all machine tools" — it can machine the parts needed to build every other machine tool. Also remember the two-way classification: generating type (surface produced by the combined motion of tool and workpiece, e.g. lathe, milling) versus forming type (the tool's own shape is copied onto the work, e.g. broaching, form milling).`
},

// ---------------------------------------------------------------
{
  id: 'u1-lathe',
  course: 'bme',
  unit: 1,
  category: 'Machine Tools',
  title: 'Lathe Machine',
  summary: 'Rotates the workpiece; a single-point tool removes material to produce cylindrical, tapered, or contoured surfaces.',
  overview: `A lathe is a machine tool that removes unwanted material from a rotating workpiece using a cutting tool fed either parallel or perpendicular to the axis of rotation. It is often called the "mother of all machine tools" because a lathe can even be used to manufacture parts of other machine tools.`,
  working: `The workpiece is clamped and rotated — usually in a chuck, or between centers held by the headstock and tailstock. The single-point cutting tool, mounted on the tool post, is fed into the rotating workpiece either along the axis (for turning/facing) or across it, shearing off material as a continuous or discontinuous chip until the desired diameter, length, or profile is reached.`,
  parts: [
    { name: 'Bed', function: 'Heavy base that supports all other parts and carries the guideways on which the carriage and tailstock slide.' },
    { name: 'Headstock', function: 'Fixed at one end of the bed; houses the spindle, gears and drive mechanism that hold and rotate the workpiece (via chuck or centre).' },
    { name: 'Tailstock', function: 'Supports the free end of a long workpiece using a dead/live centre, or holds tools like drills for centre-drilling.' },
    { name: 'Carriage', function: 'Carries and moves the cutting tool; made up of the saddle (slides along the bed), cross-slide (moves the tool perpendicular to the axis), compound rest (swivels for taper turning) and tool post (clamps the tool).' },
    { name: 'Lead screw & feed rod', function: 'Transmit rotary motion from the headstock gearbox to the carriage — the lead screw for thread cutting (precise, engaged via a half-nut), the feed rod for ordinary automatic longitudinal/cross feed.' }
  ],
  types: [
    'Engine lathe (general-purpose, most common in workshops)',
    'Bench lathe (small, mounted on a workbench)',
    'Turret lathe (multiple tools mounted on an indexing turret for repetitive production)',
    'Capstan lathe',
    'CNC lathe'
  ],
  operations: [
    { name: 'Turning', description: 'Reduces the diameter of the workpiece by removing material parallel to the axis.' },
    { name: 'Facing', description: 'Produces a flat surface perpendicular to the axis, at the end of the job.' },
    { name: 'Taper turning', description: 'Produces a conical surface — by swiveling the compound rest, offsetting the tailstock, or using a taper-turning attachment.' },
    { name: 'Thread cutting', description: 'Cuts helical grooves of a given pitch using the lead screw engaged through the half-nut.' },
    { name: 'Knurling', description: 'Presses a diamond-shaped rough pattern onto the surface for a better hand grip (no chip is removed — it is a forming operation).' },
    { name: 'Drilling / Boring', description: 'Drilling originates a hole with a drill held in the tailstock; boring enlarges/finishes an existing hole.' },
    { name: 'Parting off', description: 'Cuts the finished workpiece away from the remaining bar stock.' }
  ],
  formulas: [
    { formula: 'Cutting speed, V = πDN / 1000', meaning: 'D = workpiece diameter (mm), N = spindle speed (rpm)', units: 'V in m/min', condition: 'Used to select spindle rpm for a required cutting speed of the tool/material combination.' },
    { formula: 'Machining time, T = L / (f·N)', meaning: 'L = length of cut (mm), f = feed (mm/rev), N = rpm', units: 'T in min', condition: 'Basic turning time estimate, ignoring approach/over-travel.' }
  ],
  diagram: {
    description: 'Draw a horizontal bed with headstock (large gearbox) on the left, tailstock (smaller, with centre) on the right, and the carriage assembly (saddle + cross-slide + compound rest + tool post) between them. Label all 6 parts and show the workpiece held between headstock chuck and tailstock centre.',
    svg: `<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" font-family="var(--font-mono)">
      <rect x="20" y="150" width="600" height="18" fill="var(--steel)" />
      <rect x="20" y="150" width="600" height="18" fill="none" stroke="var(--ink)" stroke-width="1.5"/>
      <rect x="40" y="90" width="90" height="70" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="85" y="130" text-anchor="middle" font-size="11" fill="var(--ink)">Headstock</text>
      <rect x="520" y="105" width="60" height="45" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="550" y="130" text-anchor="middle" font-size="10" fill="var(--ink)">Tailstock</text>
      <line x1="130" y1="120" x2="520" y2="120" stroke="var(--ink)" stroke-width="4"/>
      <text x="325" y="105" text-anchor="middle" font-size="10" fill="var(--ink)">Workpiece</text>
      <rect x="260" y="130" width="70" height="20" fill="var(--brass)" stroke="var(--ink)" stroke-width="1.5"/>
      <rect x="280" y="150" width="30" height="18" fill="var(--brass)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="295" y="200" text-anchor="middle" font-size="10" fill="var(--ink)">Carriage (saddle + cross-slide + tool post)</text>
      <text x="325" y="20" text-anchor="middle" font-size="13" fill="var(--ink)" font-weight="600">Engine Lathe — Main Parts</text>
      <text x="325" y="185" text-anchor="middle" font-size="10" fill="var(--muted)">Bed</text>
    </svg>`
  },
  examTip: `Lathe is the single most-asked machine tool topic. Learn the 5-part-labelled diagram cold, and memorise all 7 operations with a one-line description each — this alone answers most 5-mark and 10-mark questions.`,
  commonMistake: `Mixing up the lead screw (used ONLY for thread cutting, engaged via half-nut) with the feed rod (used for ordinary automatic feed). Also, students often forget knurling removes no material — it's a forming, not a cutting, operation.`,
  quickCheck: [
    { q: 'Which part of the lathe holds and rotates the workpiece?', a: 'The headstock (via the spindle and chuck).' },
    { q: 'Name the operation that produces a flat end face on the job.', a: 'Facing.' },
    { q: 'Which lathe part is used specifically for thread cutting?', a: 'The lead screw, engaged through the half-nut.' },
    { q: 'Is knurling a material-removal operation?', a: 'No — it is a forming operation that presses a pattern into the surface.' }
  ],
  applications: [
    'Turning long cylindrical components: shafts, axles, spindles, mandrels and pulleys.',
    'Facing and parting off components for engines, pumps and machine assemblies.',
    'Cutting external and internal threads on fasteners and pipe fittings, and producing tapers for tool shanks and cones.'
  ],
  extraNotes: `The cutting speed V = πDN/1000 is not just a formula to plug numbers into — it explains real machine behaviour: for a fixed rpm, a large-diameter job cuts faster than a small one, so the headstock gearbox must step the spindle speed down as the workpiece diameter grows. Higher cutting speeds generally give better surface finish on ductile metals (up to a limit set by the tool material). In exams, a lathe answer that names the part, its function, and one operation performed on it covers almost any 5-mark question.`
},

// ---------------------------------------------------------------
{
  id: 'u1-shaper',
  course: 'bme',
  unit: 1,
  category: 'Machine Tools',
  title: 'Shaper Machine',
  summary: 'A reciprocating single-point tool (ram) machines a stationary workpiece.',
  overview: `A shaper is a reciprocating machine tool in which the ram, carrying a single-point cutting tool, moves back and forth over a stationary workpiece to produce flat, contoured, or grooved surfaces. It is mainly used for small and medium-sized jobs and low-volume work.`,
  working: `Cutting happens only on the forward stroke of the ram (the "cutting stroke"). The return stroke is idle — no material is removed — so it is made faster than the cutting stroke to save time. This speed difference is produced by a Quick Return Mechanism, most commonly a Crank and Slotted Link Mechanism. Between strokes, the table (holding the workpiece) is fed sideways by a small amount to bring a new strip of material under the tool.`,
  parts: [
    { name: 'Base', function: 'Supports the entire machine and absorbs vibration.' },
    { name: 'Column', function: 'Box-like casting on the base; houses the ram-drive mechanism.' },
    { name: 'Cross rail', function: 'Mounted on the column front; carries the table and allows vertical/cross feed.' },
    { name: 'Saddle & Table', function: 'The table clamps the workpiece; the saddle moves it horizontally/vertically for feed.' },
    { name: 'Ram', function: 'Reciprocates horizontally on top of the column, carrying the tool head.' },
    { name: 'Tool head', function: 'Mounted on the ram front; holds the tool and allows it to swivel for angular cuts.' }
  ],
  types: ['Standard (horizontal) shaper', 'Vertical shaper (ram reciprocates vertically — good for slots/keyways)', 'Universal shaper (table can swivel/tilt)', 'Draw-cut shaper (cuts on the return/draw stroke instead)', 'Travelling head shaper'],
  operations: [
    { name: 'Horizontal surface machining', description: 'Flat surfaces machined with horizontal table feed.' },
    { name: 'Vertical / angular surfaces', description: 'Machined using vertical feed of the tool head or by swivelling it.' },
    { name: 'Slots, keyways & grooves', description: 'Cut using a suitably shaped tool with the table indexed sideways.' },
    { name: 'Small gear teeth (batch)', description: 'Possible with a form tool, though generally uneconomical for large batches.' }
  ],
  formulas: [
    { formula: 'Quick return ratio = Time of cutting stroke / Time of return stroke', meaning: 'Always > 1 since the return stroke is faster', units: 'dimensionless', condition: 'Typical ratio lies between 1.4 and 2.' }
  ],
  diagram: { description: 'Draw the column (vertical box) with the ram projecting horizontally from its top, tool head at the ram\'s free end pointing down at the workpiece clamped on the table, which sits on the cross rail in front of the column.', svg: null },
  examTip: `Shaper vs Planer is a guaranteed comparison-style question — learn the table in that topic by heart alongside this one.`,
  commonMistake: `Confusing which stroke actually cuts. Remember: forward stroke = cutting (slow, powered), return stroke = idle (fast, quick-return mechanism).`,
  quickCheck: [
    { q: 'On which stroke does a shaper remove material?', a: 'The forward (cutting) stroke.' },
    { q: 'Name the mechanism that makes the return stroke faster.', a: 'Quick Return Mechanism (Crank and Slotted Link Mechanism).' }
  ],
  applications: [
    'Machining flat and contoured surfaces on small and medium-sized jobs in tool rooms.',
    'Cutting keyways, slots and grooves on components that will later be assembled.',
    'Producing small dies and mould halves where a single-point tool must reach into internal shapes.'
  ],
  extraNotes: `The quick return ratio matters because it directly sets productivity: the return stroke does no cutting, so making it fast (typical ratios 1.4–2.0) shortens the idle time between cuts. In the crank-and-slotted-link mechanism, the pin of a rotating crank slides in a slotted lever: when the crank pin travels the longer arc of its circle the ram moves slowly (cutting), and through the shorter arc it returns quickly. The shaper is inherently a low-production machine — one tool, one cut per stroke — which is exactly why it is used for small batches, not mass production.`
},

// ---------------------------------------------------------------
{
  id: 'u1-planer',
  course: 'bme',
  unit: 1,
  category: 'Machine Tools',
  title: 'Planer Machine',
  summary: 'Like a shaper but for large, heavy work — the WORKPIECE reciprocates, not the tool.',
  overview: `A planer is a machine tool similar in principle to a shaper, but built for very large and heavy workpieces. The key difference is which part reciprocates: on a planer, the workpiece (mounted on the table) moves back and forth, while the tool(s) remain essentially stationary during a pass.`,
  working: `The heavy table carrying the workpiece reciprocates on guideways in the bed. One or more tool heads, mounted on a cross rail (and sometimes on vertical housings at the sides), are fed down and across between strokes to remove material, similar in principle to shaping but at a much larger scale and often with multiple simultaneous cuts.`,
  parts: [
    { name: 'Bed', function: 'Very long, heavy base carrying guideways for the reciprocating table.' },
    { name: 'Table', function: 'Reciprocates, carrying the (large/heavy) workpiece.' },
    { name: 'Housings / Columns', function: 'Vertical structures on either side of the bed supporting the cross rail.' },
    { name: 'Cross rail & tool heads', function: 'Carry one or more tool heads that feed vertically/horizontally between strokes; multiple tool heads give higher output.' }
  ],
  types: ['Double housing planer (columns on both sides — most rigid)', 'Open side planer (one side open — for extra-wide jobs)', 'Pit planer (workpiece stationary in a pit, tool/housings travel — for very large, immovable jobs)', 'Edge / plate planer (specialised for machining edges of plates)'],
  operations: null,
  formulas: null,
  diagram: { description: 'A comparison sketch works best: shaper = small tool head moves, big workpiece stays; planer = big table+workpiece moves, tool heads on an overhead cross rail stay largely fixed.', svg: null },
  examTip: `The Shaper vs Planer table below is the highest-yield content in this whole topic — it appears almost every year in some form (2-mark "differentiate" or as part of Q1).`,
  commonMistake: `Saying planer is "just a bigger shaper" without stating WHAT actually reciprocates — examiners specifically want the workpiece vs tool distinction.`,
  quickCheck: [
    { q: 'In a planer, what reciprocates — the tool or the workpiece?', a: 'The workpiece (on the table).' },
    { q: 'Which type of planer is used for very large jobs that cannot be moved at all?', a: 'Pit planer.' }
  ],
  applications: [
    'Machining the long, flat guideways and beds of machine tools themselves.',
    'Facing and edge-finishing large engine blocks, frames and heavy machine bases.',
    'Producing flat plates and large structural surfaces in shipbuilding and heavy fabrication.'
  ],
  extraNotes: `The planer exists because a shaper cannot handle heavy workpieces: moving a multi-ton table is practical (it is designed for it), while moving a multi-ton workpiece past a small tool is not. Because the table can carry several workpieces and the cross rail can hold several tool heads cutting simultaneously, a planer removes metal far faster than a shaper for large jobs. The pit planer turns the logic upside down — the workpiece stays fixed in a pit and the housings/tools travel — which is why it suits enormous, immovable jobs.`,
  comparisonTable: {
    title: 'Shaper vs Planer',
    columns: ['Aspect', 'Shaper', 'Planer'],
    rows: [
      ['What reciprocates', 'Tool (ram)', 'Workpiece (table)'],
      ['Job size', 'Small / medium', 'Large / heavy'],
      ['Number of tools', 'Single tool head', 'Multiple tool heads possible'],
      ['Output rate', 'Lower', 'Higher, for large jobs'],
      ['Drive', 'Crank/slotted-link, hydraulic', 'Usually hydraulic or rack drive for heavy table']
    ]
  }
},

// ---------------------------------------------------------------
{
  id: 'u1-milling',
  course: 'bme',
  unit: 1,
  category: 'Machine Tools',
  title: 'Milling Machine',
  summary: 'A rotating multi-point cutter removes material as the workpiece is fed into it.',
  overview: `A milling machine removes material by feeding a workpiece against a rotating multi-point (multi-tooth) cutter. Because many cutting edges share the work, milling machines can remove metal faster than a single-point tool and can produce flat surfaces, slots, gears and complex profiles.`,
  working: `The cutter, mounted on a spindle (horizontal or vertical), rotates at high speed. The workpiece, clamped to the table, is fed steadily into the rotating cutter along one or more axes. Each tooth removes a small chip as it passes through the work, so material removal happens intermittently, tooth by tooth.`,
  parts: [
    { name: 'Column & base', function: 'Main support structure and coolant reservoir.' },
    { name: 'Knee', function: 'Supports the saddle and table; moves vertically for depth of cut.' },
    { name: 'Saddle & Table', function: 'Table clamps the workpiece and provides longitudinal/cross feed.' },
    { name: 'Spindle', function: 'Rotates the cutter — horizontal in a horizontal mill, vertical in a vertical mill.' },
    { name: 'Arbor', function: 'A shaft that holds the cutter in a horizontal milling machine.' }
  ],
  types: [
    'Horizontal milling machine — cutter mounted on a horizontal arbor.',
    'Vertical milling machine — spindle is vertical; cutter mounted directly on the spindle nose.',
    'Universal milling machine — table can swivel in the horizontal plane, enabling helical milling (e.g. helical gears, flutes).'
  ],
  operations: [
    { name: 'Plain (slab) milling', description: 'Machining a flat surface parallel to the cutter axis with a plain cylindrical cutter.' },
    { name: 'Face milling', description: 'Machining a flat surface perpendicular to the cutter axis using a face-milling cutter.' },
    { name: 'Angular milling', description: 'Machining an angular surface (e.g. V-grooves, dovetails) with a single-angle cutter.' },
    { name: 'Form milling', description: 'Producing an irregular contour using a cutter ground to the exact reverse profile.' },
    { name: 'Gang milling', description: 'Several cutters mounted together on one arbor to machine multiple surfaces in one pass.' },
    { name: 'Slot & keyway milling', description: 'Cutting slots/keyways with a side or end mill.' },
    { name: 'Gear cutting', description: 'Producing gear teeth using a form cutter matched to the gear profile.' }
  ],
  formulas: [
    { formula: 'Table feed, f = fz · z · N', meaning: 'fz = feed per tooth (mm), z = number of teeth, N = cutter rpm', units: 'f in mm/min', condition: 'Basic milling feed-rate calculation.' }
  ],
  diagram: { description: 'Vertical mill sketch: column at the back, knee-saddle-table stack in front holding the workpiece, spindle head above with cutter pointing down into the work.', svg: null },
  examTip: `"Horizontal vs Vertical Milling" is a favourite short-answer comparison — the deciding factor is simply the orientation of the spindle/cutter axis.`,
  commonMistake: `Calling milling a "single point cutting" process — it is always multi-point, which is exactly why it removes material faster than turning/shaping.`,
  quickCheck: [
    { q: 'Is milling a single-point or multi-point cutting process?', a: 'Multi-point.' },
    { q: 'Which type of milling machine allows helical milling?', a: 'Universal milling machine (table can swivel).' }
  ],
  applications: [
    'Producing flat surfaces, slots, keyways and grooves at high material-removal rates.',
    'Cutting gear teeth, splines and racks with form cutters.',
    'Machining complex profiles, dies, moulds and engine components like cylinder heads and blocks.'
  ],
  extraNotes: `Milling cuts intermittently — each tooth enters and leaves the work in rapid succession — which lets the cutter cool between cuts but also means the machine and cutter must absorb repeated impacts. In climb (down) milling the cutter rotates WITH the feed, giving better finish but requiring backlash-free tables; conventional (up) milling cuts against the feed, safer on older machines but with a slight tendency to rub. The universal machine's swivelling table is what enables helical milling: the table is angled to the cutter axis by the helix angle so the gear blank rotates as it feeds.`,
  comparisonTable: {
    title: 'Horizontal vs Vertical Milling',
    columns: ['Aspect', 'Horizontal Milling', 'Vertical Milling'],
    rows: [
      ['Spindle axis', 'Horizontal', 'Vertical'],
      ['Cutter mounting', 'On an arbor', 'Directly on spindle nose'],
      ['Best for', 'Slab/slot work, gang milling', 'Face milling, drilling-like ops, die sinking'],
      ['Rigidity for heavy cuts', 'Generally higher (arbor supported both ends)', 'Good for lighter, precision work']
    ]
  }
},

// ---------------------------------------------------------------
{
  id: 'u1-drilling',
  course: 'bme',
  unit: 1,
  category: 'Machine Tools',
  title: 'Drilling Machine',
  summary: 'Originates or enlarges round holes with a rotating twist drill.',
  overview: `A drilling machine originates or enlarges a round hole in a workpiece using a rotating cutting tool called a drill (most commonly a twist drill). It is one of the simplest and most widely used machine tools.`,
  working: `The drill is held in a rotating spindle (via a chuck or a taper socket) and fed axially downward into a stationary, clamped workpiece. Two cutting edges at the drill tip shear material away, and the drill's helical flutes carry the chips up and out of the hole.`,
  parts: [
    { name: 'Base', function: 'Supports the column; may also hold the workpiece for large jobs.' },
    { name: 'Column', function: 'Vertical support carrying the table and head.' },
    { name: 'Table', function: 'Holds the workpiece; can be raised, lowered, or swivelled.' },
    { name: 'Spindle & Head', function: 'Spindle holds/rotates the drill; the head houses the motor and speed-change mechanism, and provides the hand/power feed lever.' }
  ],
  types: ['Portable drilling machine', 'Sensitive (bench) drilling machine — light, high-speed, small drills', 'Upright drilling machine — general workshop use', 'Radial drilling machine — arm can swing/slide so the spindle reaches large, heavy workpieces without moving them', 'Gang drilling machine — several spindles on one table for sequential operations', 'Multiple spindle drilling machine — many holes drilled simultaneously'],
  operations: [
    { name: 'Drilling', description: 'Originating a round hole in solid material.' },
    { name: 'Reaming', description: 'Finishing/sizing an existing hole to an accurate diameter and smooth finish.' },
    { name: 'Boring', description: 'Enlarging an existing hole (also corrects out-of-roundness).' },
    { name: 'Counterboring', description: 'Enlarging the end of a hole to a set depth, e.g. to seat a bolt head.' },
    { name: 'Countersinking', description: 'Making a conical enlargement at the hole mouth, e.g. to seat a screw head.' },
    { name: 'Tapping', description: 'Cutting internal threads inside a hole.' },
    { name: 'Spot facing', description: 'Machining a smooth flat seat around a hole for a washer/nut.' }
  ],
  formulas: [
    { formula: 'Cutting time, T = L / (f·N)', meaning: 'L = hole depth + approach (mm), f = feed (mm/rev), N = rpm', units: 'T in min', condition: 'Basic drilling time estimate.' }
  ],
  diagram: { description: 'Upright drilling machine: column on the left, table midway holding the workpiece, drill head at top with chuck/drill pointing straight down onto the work.', svg: null },
  examTip: `"Drilling vs Boring" is the classic trap comparison — drilling ORIGINATES a hole, boring only ENLARGES/finishes an existing one. Get this exact distinction into any answer.`,
  commonMistake: `Treating counterboring and countersinking as the same thing — counterbore is cylindrical (flat-bottomed, for bolt heads), countersink is conical (for screw heads).`,
  quickCheck: [
    { q: 'What is the difference between drilling and boring?', a: 'Drilling originates a new hole; boring enlarges/finishes an existing one.' },
    { q: 'Which drilling machine type is best for a very large, heavy workpiece that should not be moved?', a: 'Radial drilling machine.' }
  ],
  applications: [
    'Holes for rivets, bolts, screws and dowels in assembly and fabrication work.',
    'Oil holes, through-holes and clearance holes in engine blocks, frames and machine bodies.',
    'Large, heavy workpieces via radial drilling machines, where the spindle arm moves to the work instead of the reverse.'
  ],
  extraNotes: `A twist drill removes material with two cutting edges at its tip; the helical flutes do three jobs at once — they carry chips out, deliver cutting fluid in, and give the drill its self-centring action. A drill bit's point angle matters: about 118° for general-purpose steel. The related operations are easy to confuse, so group them by function: reaming finishes and sizes a hole, boring enlarges it (and can correct alignment), counterboring seats bolt heads (flat-bottomed), countersinking seats screw heads (conical), spot facing creates a flat washer seat, and tapping cuts internal threads.`,
  comparisonTable: {
    title: 'Drilling vs Boring',
    columns: ['Aspect', 'Drilling', 'Boring'],
    rows: [
      ['Hole status', 'Creates a new hole', 'Enlarges/finishes an existing hole'],
      ['Tool', 'Twist drill (2 cutting edges)', 'Single-point boring tool/bar'],
      ['Accuracy', 'Moderate', 'High — corrects roundness/alignment']
    ]
  }
},

// ---------------------------------------------------------------
{
  id: 'u1-slotter',
  course: 'bme',
  unit: 1,
  category: 'Machine Tools',
  title: 'Slotter (Slotting Machine)',
  summary: 'A vertically reciprocating ram cuts internal keyways, slots and irregular internal profiles.',
  overview: `A slotter is a reciprocating machine tool in which the ram, holding the tool, moves vertically up and down to cut internal or external keyways, slots and irregular internal profiles — such as internal gear teeth or splines — that cannot be produced on a (horizontal) shaper.`,
  working: `The ram carrying the tool reciprocates vertically. Cutting occurs on the downward stroke; the upward stroke is the idle/quick-return stroke, typically produced by a Whitworth quick return mechanism. Between strokes the circular rotary table (which can also index/rotate) feeds the workpiece for the next cut.`,
  parts: [
    { name: 'Base & Column', function: 'Support structure; column houses the ram drive.' },
    { name: 'Ram', function: 'Reciprocates vertically, carrying the tool head.' },
    { name: 'Saddle & Rotary table', function: 'Carry and position/rotate the workpiece for internal profile work.' }
  ],
  types: null,
  operations: [
    { name: 'Internal keyways/splines', description: 'Cut inside a bore — impossible with a shaper since a shaper tool moves horizontally.' },
    { name: 'Internal/external gear teeth', description: 'Producing internal gear profiles that need vertical tool travel.' },
    { name: 'Irregular internal contours', description: 'Any internal profile requiring vertical single-point cutting.' }
  ],
  formulas: null,
  diagram: { description: 'A vertical column with the ram sliding up/down inside it, tool pointing downward, workpiece clamped on a rotary table below.', svg: null },
  examTip: `Slotter is often forgotten by students — remember its ONE defining feature for exams: vertical ram, used specifically for INTERNAL profiles a shaper cannot reach.`,
  commonMistake: `Confusing the slotter's Whitworth quick-return mechanism with the shaper's crank & slotted-link mechanism — both give quick return, but by different mechanisms.`,
  quickCheck: [
    { q: 'On which stroke does a slotter cut — up or down?', a: 'Downward stroke.' },
    { q: 'What mechanism gives the slotter its quick return?', a: 'Whitworth quick return mechanism.' }
  ],
  applications: [
    'Cutting internal keyways and splines inside bores — work a horizontal shaper cannot reach.',
    'Producing internal gear teeth and irregular internal profiles in dies and moulds.',
    'Machining external slots, splines and serrations on shafts.'
  ],
  extraNotes: `The slotter's vertical stroke is its entire reason for existing: internal profiles (keyways, splines, internal gears) can only be cut by a tool moving up and down inside the bore, since a horizontal tool cannot enter from the side. The Whitworth quick-return mechanism achieves the fast idle stroke with a rotating pin sliding in a slotted arm whose pivot is offset from the crank centre — the same family of idea as the shaper's slotted link, which is why examiners love to check you know WHICH mechanism belongs to WHICH machine.`
},

// ---------------------------------------------------------------
{
  id: 'u1-metalcutting',
  course: 'bme',
  unit: 1,
  category: 'Machine Tools',
  title: 'Introduction to Metal Cutting',
  summary: 'The science of chip formation: tool geometry, orthogonal vs oblique cutting, chip types.',
  overview: `Metal cutting is the process of removing unwanted material from a workpiece in the form of chips using a cutting tool, in order to obtain the desired shape, size and surface finish. Every machine tool operation (turning, shaping, milling, drilling) is, at its core, a metal cutting process.`,
  working: `A wedge-shaped tool is forced into the workpiece. The tool's rake angle, clearance angle and cutting edge angle together control how the material ahead of the tool shears off as a chip, how much force is needed, and what surface finish results. Positive rake reduces cutting force but weakens the edge; negative rake strengthens the edge for tougher materials/interrupted cuts.`,
  parts: null,
  types: [
    'Orthogonal cutting — the cutting edge is perpendicular to the direction of tool travel; treated as a simpler 2-D force system for analysis.',
    'Oblique cutting — the cutting edge is inclined at an angle other than 90° to the direction of motion; a more realistic 3-D cutting action used in most real operations.'
  ],
  operations: null,
  formulas: [
    { formula: 'Chip thickness ratio, r = t1/t2', meaning: 't1 = uncut chip thickness, t2 = actual chip thickness', units: 'dimensionless (r < 1 always, since chips thicken on cutting)', condition: 'Used in orthogonal cutting analysis to find shear angle.' }
  ],
  diagram: { description: 'Two small sketches: (1) orthogonal cutting — cutting edge drawn as a straight line at 90° to the feed direction; (2) oblique cutting — the same edge tilted at an angle. Also sketch a tool wedge showing rake angle and clearance angle.', svg: null },
  examTip: `Learn the 3 chip types (continuous, discontinuous, continuous-with-BUE) with WHEN each forms — this is asked almost every year as a 2 or 3 mark question.`,
  commonMistake: `Saying continuous chips are "always good" — they give good finish but can be dangerously sharp/tangled; discontinuous chips are actually preferred for automated machining precisely because they break away safely.`,
  quickCheck: [
    { q: 'Which type of chip is typical of machining brittle materials like cast iron?', a: 'Discontinuous chips.' },
    { q: 'What causes a poor surface finish with a built-up edge (BUE)?', a: 'Low/medium speed with insufficient rake angle in ductile materials, causing work material to weld onto the tool tip.' },
    { q: 'Define tool life.', a: 'The time between two successive grindings (or the useful cutting time) of a tool.' }
  ],
  applications: [
    'Choosing cutting speeds and feeds for every machining operation in production planning.',
    'Selecting tool materials (HSS, carbides, ceramics) for the material being cut.',
    'Predicting tool wear and scheduling tool changes on CNC machines and transfer lines.'
  ],
  extraNotes: `The chip formation story explains most of the theory: the wedge-shaped tool forces the material ahead of it to shear along a narrow zone (the shear plane), and the shear angle decides whether you get a thin, well-formed chip or a thick, torn one. Positive rake lowers cutting force but weakens the edge — fine for soft, ductile metals; negative rake strengthens the edge for hard materials and interrupted cuts (as in milling). A built-up edge (BUE) forms when work material welds to the tool tip at medium speeds, ruining finish — increasing speed or rake usually eliminates it. Tool life itself falls sharply as cutting speed rises (Taylor's tool-life relation VTⁿ = C), which is why speed selection is an economic decision, not just a technical one.`,
  comparisonTable: {
    title: 'Continuous vs Discontinuous Chips',
    columns: ['Aspect', 'Continuous chips', 'Discontinuous chips'],
    rows: [
      ['Material', 'Ductile, machined at high speed', 'Brittle materials, or ductile at low speed'],
      ['Surface finish', 'Good', 'Relatively poor'],
      ['Chip handling', 'Long, ribbon-like — can be hazardous', 'Small, broken pieces — safer, easier to clear']
    ]
  }
},

// ---------------------------------------------------------------
{
  id: 'u1-thermo-basics',
  course: 'bme',
  unit: 1,
  category: 'Thermodynamics',
  title: 'System, Boundary, Surroundings & Properties',
  summary: 'The vocabulary every thermodynamics question is built on.',
  overview: `Thermodynamics is the branch of science dealing with the relationships between heat, work and the properties of a system, and how energy converts from one form to another. Before any law can make sense, you must be precise about what exactly you are studying — the "system" — and what surrounds it.`,
  working: `A System is the specific quantity of matter or region of space chosen for study (e.g. gas inside a cylinder). The Boundary is the real or imaginary surface separating the system from everything else. Everything outside the boundary is the Surroundings. Systems are classified by what can cross the boundary:`,
  parts: [
    { name: 'Open system', function: 'Both mass and energy can cross the boundary — e.g. an air compressor, a turbine.' },
    { name: 'Closed system', function: 'No mass crosses the boundary, but energy (heat/work) can — e.g. gas being compressed in a piston-cylinder.' },
    { name: 'Isolated system', function: 'Neither mass nor energy crosses the boundary — e.g. an ideal thermos flask.' }
  ],
  types: null,
  operations: null,
  formulas: null,
  diagram: { description: 'A dashed rectangle labelled "Boundary" enclosing a shaded region labelled "System"; arrows crossing the boundary labelled "mass" and "energy" (present/absent) to distinguish open/closed/isolated.', svg: null },
  examTip: `The Open/Closed/Isolated table below is a guaranteed 2-mark or Q1 sub-part question every single year — memorise it exactly, with one real example each.`,
  commonMistake: `Students often say a closed system exchanges "nothing" with surroundings — remember, energy (heat and work) CAN still cross in a closed system; only mass cannot.`,
  quickCheck: [
    { q: 'In an isolated system, can heat cross the boundary?', a: 'No — neither mass nor energy (including heat) crosses the boundary.' },
    { q: 'Give one intensive and one extensive property.', a: 'Intensive: pressure or temperature. Extensive: volume or mass (or total internal energy).' },
    { q: 'Define a thermodynamic cycle.', a: 'A series of processes after which the system returns exactly to its original state, so the net change in every property is zero.' }
  ],
  applications: [
    'Modelling engines, turbines, compressors and refrigerators as open or closed systems.',
    'Deciding which properties to measure and which to compute in plant energy analysis.',
    'First step of almost every thermodynamics numerical — "define the system and its boundary" before applying any law.'
  ],
  extraNotes: `The single most useful habit in thermodynamics is to draw the system boundary FIRST on any problem: only then can you say whether mass crosses it (open vs closed) and whether it exchanges heat or work (isolated vs not). Intensive properties (p, T, ρ) are the same whether you sample a drop or a tank; extensive properties (V, m, total U) scale with size — which is why "specific" quantities (per unit mass) exist, converting extensive properties into intensive ones for comparison.`,
  comparisonTable: {
    title: 'Open vs Closed vs Isolated Systems',
    columns: ['Type', 'Mass transfer', 'Energy transfer', 'Example'],
    rows: [
      ['Open system', 'Yes', 'Yes', 'Air compressor, turbine'],
      ['Closed system', 'No', 'Yes', 'Gas in a piston-cylinder'],
      ['Isolated system', 'No', 'No', 'Ideal thermos flask']
    ]
  },
  extraNotes: `Property: a characteristic used to describe the state of a system (pressure, volume, temperature). Intensive properties (pressure, temperature, density) do not depend on the amount of matter; extensive properties (volume, mass, total energy) do — and become intensive when expressed "per unit mass" (specific volume, specific energy). State = the condition of the system at an instant, fixed by its properties. Path = the series of states passed through during a process. Process = the change from one state to another (isothermal, isobaric, isochoric, adiabatic, etc.).`
},

// ---------------------------------------------------------------
{
  id: 'u1-work-heat',
  course: 'bme',
  unit: 1,
  category: 'Thermodynamics',
  title: 'Work and Heat',
  summary: 'Both are energy IN TRANSIT across a boundary — never stored inside a system.',
  overview: `Work and heat are the two ways energy can be transferred between a system and its surroundings. Neither is a property of the system — both are path functions, meaning their value depends on HOW the process happens, not just the start and end states.`,
  working: `Work (W) is energy transfer due to a driving force other than a temperature difference — e.g. a piston moving. Heat (Q) is energy transfer due to a temperature difference alone. Because both depend on the path taken, they are written with an inexact differential (δQ, δW), unlike a true property such as internal energy (dU), which is an exact differential and depends only on the state.`,
  parts: null,
  types: null,
  operations: null,
  formulas: [
    { formula: 'Displacement (pdV) work: W = ∫ p·dV', meaning: 'Work done as the boundary of a system moves, e.g. in a piston-cylinder', units: 'W in Joules (J) if p in Pa and V in m³', condition: 'Only valid for a quasi-static (slow, near-equilibrium) process.' },
    { formula: 'Isothermal work: W = p₁V₁ ln(V₂/V₁)', meaning: 'Constant temperature expansion/compression of an ideal gas', units: 'J', condition: 'T constant throughout.' },
    { formula: 'Isobaric work: W = p(V₂ − V₁)', meaning: 'Constant pressure process', units: 'J', condition: 'p constant throughout.' },
    { formula: 'Polytropic process: pVⁿ = constant', meaning: 'General process law; n = polytropic index', units: '—', condition: 'n = 0 → isobaric, n = 1 → isothermal, n = γ → adiabatic, n = ∞ → isochoric.' }
  ],
  diagram: { description: 'A p–V diagram showing a curve from state 1 to state 2; shade the area under the curve down to the V-axis and label it "Work = ∫p dV". Draw three separate shapes for isothermal (hyperbola), isobaric (horizontal line) and isochoric (vertical line) processes.', svg: null },
  examTip: `Sign convention questions are easy marks: work done BY the system is +ve, work done ON the system is −ve; heat supplied TO the system is +ve, heat rejected is −ve. State this explicitly in every numerical answer.`,
  commonMistake: `Treating heat and work as things a system "contains." A system contains internal energy — heat and work only exist while energy is crossing the boundary, during a process.`,
  quickCheck: [
    { q: 'Why are heat and work called path functions?', a: 'Because their values depend on the path followed during the process, not just on the initial and final states.' },
    { q: 'Write the formula for work done in an isothermal process.', a: 'W = p₁V₁ ln(V₂/V₁).' },
    { q: 'What is the sign convention for heat rejected by a system?', a: 'Negative.' }
  ],
  applications: [
    'Computing work and heat in piston-cylinder engines, compressors and turbines.',
    'Choosing the correct work formula once the process type (isothermal, isobaric, polytropic…) is identified.',
    'Sign convention discipline — the difference between +W and −W decides whether a numerical answer makes physical sense.'
  ],
  extraNotes: `The δQ/δW versus dU notation is not pedantry — it encodes a real distinction. U is a property: its change between two states is fixed, so we write dU and the change depends only on state 1 and state 2. Q and W are not properties: the same two end states can be connected by a slow, reversible path (lots of work, little heat) or a fast, throttling path (little work, lots of heat), so their values depend on the PATH and are written with δ. That is precisely why the First Law written as δQ = dU + δW works: the path-dependent terms on the two sides always balance, leaving the state-dependent dU to do the bookkeeping.`
},

// ---------------------------------------------------------------
{
  id: 'u1-zeroth-law',
  course: 'bme',
  unit: 1,
  category: 'Thermodynamics',
  title: 'Temperature & Zeroth Law',
  summary: 'The law that makes thermometers possible.',
  overview: `Temperature measures the degree of hotness or coldness of a body and determines the direction of heat flow — heat always flows from a higher-temperature body to a lower-temperature one. The Zeroth Law is what justifies measuring temperature at all.`,
  working: `Zeroth Law statement: "If two bodies are each in thermal equilibrium with a third body, then they are in thermal equilibrium with each other." In practice, the "third body" is the thermometer — this law is why you can compare the temperature of two objects indirectly, by comparing each to a thermometer, without touching them together.`,
  parts: null, types: null, operations: null, formulas: null,
  diagram: { description: 'Three circles A, B and C (thermometer). Draw A–C in equilibrium and B–C in equilibrium, then conclude A–B with a dashed line and a question mark resolved to "also in equilibrium".', svg: null },
  examTip: `Always mention explicitly WHY this law is called "Zeroth" — it was formulated after the First and Second Laws but is logically more fundamental, so it needed a "before zero" number.`,
  commonMistake: `Writing the Zeroth Law as just "objects at the same temperature are in equilibrium" — the actual value of the law is the TRANSITIVE property (A~C and B~C implies A~B), which is what enables thermometry.`,
  quickCheck: [
    { q: 'State the Zeroth Law of Thermodynamics.', a: 'If two bodies are each in thermal equilibrium with a third body, they are in thermal equilibrium with each other.' },
    { q: 'What practical device is justified by the Zeroth Law?', a: 'The thermometer.' }
  ],
  applications: [
    'Temperature measurement of every kind — clinical, industrial, meteorological thermometers.',
    'Calibrating one thermometer against another (secondary standard against primary standard).',
    'Establishing the concept of temperature as a property that can be compared between systems.'
  ],
  extraNotes: `The Zeroth Law is really about the transitivity of thermal equilibrium: if A and B are each in equilibrium with C, they are in equilibrium with each other — no direct contact needed. That transitivity is what makes temperature a MEASURABLE property: the thermometer (C) equilibrates with the object (A), so we can assign a number to A without ever touching it. The law was named "Zeroth" because it was recognised after the First and Second Laws but is logically more fundamental — it deserved to be numbered before them. Remember also that thermodynamic temperature is measured in Kelvin, and that Celsius and Kelvin are related by T(K) = t(°C) + 273.15.`
},

// ---------------------------------------------------------------
{
  id: 'u1-first-law',
  course: 'bme',
  unit: 1,
  category: 'Thermodynamics',
  title: 'First Law, Internal Energy & Enthalpy',
  summary: 'Energy conservation applied to a thermodynamic system.',
  overview: `The First Law of Thermodynamics is simply the law of conservation of energy applied to a system: energy can neither be created nor destroyed, only converted from one form to another.`,
  working: `For a cyclic process: ∮δQ = ∮δW — over a complete cycle, net heat transfer equals net work transfer. For a non-cyclic (closed-system) process: δQ = dU + δW — heat supplied is used partly to raise internal energy and partly to do external work. Internal Energy (U) is the energy stored in a system due to molecular motion (kinetic) and molecular bonding/configuration (potential); it is a property (point function) — it depends only on the state, not the path. Enthalpy (H) is defined as H = U + pV, representing the total energy of a flowing fluid (internal energy plus the "flow work" needed to push it into/out of a system). It is especially useful for open systems like turbines, compressors and nozzles.`,
  parts: null, types: null, operations: null,
  formulas: [
    { formula: 'δQ = dU + δW', meaning: 'Heat supplied = change in internal energy + work done by system', units: 'All terms in Joules', condition: 'Applies to a closed system, non-cyclic process.' },
    { formula: 'H = U + pV', meaning: 'Enthalpy = internal energy + flow (pressure-volume) work', units: 'H, U in J; p in Pa; V in m³', condition: 'Especially used for open/flow systems.' },
    { formula: 'Specific enthalpy: h = u + pv', meaning: 'Per unit mass version of enthalpy', units: 'J/kg', condition: '—' },
    { formula: 'Δh = Cp·ΔT and Δu = Cv·ΔT', meaning: 'Change in enthalpy/internal energy of an ideal gas', units: 'J/kg or J, depending on whether Cp/Cv are specific or total', condition: 'Valid for an ideal gas over the temperature range considered.' }
  ],
  diagram: { description: 'A box labelled "System"; an arrow δQ entering, an arrow δW leaving, and inside the box "ΔU" — visually showing δQ = ΔU + δW.', svg: null },
  examTip: `Numerical problems here almost always follow the same skeleton: Given → Find → Formula → Substitution → Calculation → Answer → Unit → Sanity check. Practising that exact structure gets you full marks even under time pressure.`,
  commonMistake: `Forgetting that U and H are properties (state functions) — students sometimes try to compute them "along a path" like they would work; ΔU and Δh depend only on the initial and final states.`,
  quickCheck: [
    { q: 'State the First Law of Thermodynamics for a cyclic process.', a: '∮δQ = ∮δW — net heat transfer equals net work transfer over a complete cycle.' },
    { q: 'Define enthalpy.', a: 'H = U + pV, the total energy of a flow system (internal energy plus flow work).' },
    { q: 'Is internal energy a path function or a point function?', a: 'A point function (property) — depends only on the state.' }
  ],
  applications: [
    'Energy analysis of boilers, turbines, condensers, nozzles and compressors (flow systems use enthalpy).',
    'First-law numericals: given Q and ΔU, find W (or vice versa) for piston-cylinder processes.',
    'Basis for energy audits — accounting for every joule entering and leaving a plant.'
  ],
  extraNotes: `A machine that violates the First Law — producing work without any energy input — is called a perpetual motion machine of the FIRST kind, and it is impossible: energy is conserved, full stop. The enthalpy concept exists for a practical reason: in a flow system (turbine, nozzle, heat exchanger), energy is carried in and out by the flowing fluid, and each kilogram carries its internal energy PLUS the "flow work" pv needed to push it through the boundary. Combining them as h = u + pv gives a single property whose change across a device equals the heat and work exchanged — which is why every steam and gas table is built around enthalpy, not internal energy.`
},

// ---------------------------------------------------------------
{
  id: 'u1-second-law',
  course: 'bme',
  unit: 1,
  category: 'Thermodynamics',
  title: 'Second Law: Kelvin-Planck & Clausius Statements',
  summary: 'Adds direction and quality to energy conversion — no 100% efficient engine, no free-flowing "cold to hot" heat.',
  overview: `The First Law tracks quantity of energy but says nothing about direction or quality — it does not forbid heat from flowing spontaneously from a cold body to a hot one, and it does not say why 100% of heat can never be turned into work. The Second Law fixes this gap.`,
  working: `Kelvin-Planck Statement (engine form): "It is impossible to construct a heat engine operating in a cycle that produces no effect other than extracting heat from a single reservoir and converting it completely into an equivalent amount of work." In short: no engine can be 100% efficient. Clausius Statement (refrigerator form): "It is impossible to construct a device operating in a cycle that produces no effect other than the transfer of heat from a colder body to a hotter body." In short: heat cannot flow from cold to hot without external work input (this is exactly why a refrigerator needs electricity). The two statements are logically equivalent — violating one always implies violating the other.`,
  parts: null, types: null, operations: null, formulas: null,
  diagram: { description: 'Two small block diagrams: (1) Kelvin-Planck violation — a single hot reservoir feeding an "impossible engine" producing only work, no heat rejected, shown with a cross through it; (2) Clausius violation — heat arrow going directly from a cold to a hot reservoir with no work input, also crossed out.', svg: null },
  examTip: `Always state BOTH statements together and add the one-line equivalence remark ("violation of one implies violation of the other") — many mark schemes specifically reward that connecting sentence.`,
  commonMistake: `Mixing up which statement belongs to which device — Kelvin-Planck = engines (work output), Clausius = refrigerators/heat pumps (heat transfer direction).`,
  quickCheck: [
    { q: 'State the Kelvin-Planck statement.', a: 'No heat engine can convert 100% of the heat it absorbs from a single reservoir into work in a cycle.' },
    { q: 'State the Clausius statement.', a: 'Heat cannot flow, unaided, from a colder to a hotter body — a cycle producing only this effect is impossible.' },
    { q: 'Are the two statements independent or equivalent?', a: 'Equivalent — violating one implies violating the other.' }
  ],
  applications: [
    'Setting the theoretical efficiency ceiling for every heat engine (automobiles, power plants, jet engines).',
    'Explaining why refrigerators and heat pumps require external work input.',
    'Judging whether a proposed "free energy" device is physically impossible without doing the math.'
  ],
  extraNotes: `The Second Law adds something the First Law cannot: direction. The First Law allows heat to flow from cold to hot as long as energy balances — the Second Law forbids it without work input. The Kelvin-Planck statement rules out the perpetual motion machine of the SECOND kind (100% efficient engine); the Clausius statement rules out the perfect refrigerator. They look different but are the same law in two costumes: any device that violates one can be combined with ordinary machines to build a device that violates the other — which is why examiners reward the one-line "they are equivalent" remark. The Second Law also introduces the quality of energy: low-temperature heat is less useful than high-temperature heat, because less of it can be converted to work.`
},

// ---------------------------------------------------------------
{
  id: 'u1-entropy-third-law',
  course: 'bme',
  unit: 1,
  category: 'Thermodynamics',
  title: 'Entropy & Third Law',
  summary: 'Entropy measures disorder and tells you whether a process is even possible.',
  overview: `Entropy (S) is a thermodynamic property that measures the degree of molecular disorder or randomness of a system, and it indicates the direction and feasibility of a process — a natural, spontaneous process always moves towards greater total entropy.`,
  working: `For a reversible process, dS = δQ_rev / T. For any real (irreversible) process happening in an isolated system, entropy always increases: ΔS ≥ 0 — this is the Principle of Increase of Entropy, and is really just another way of stating the Second Law. Entropy can also be understood as a measure of the unavailability of energy to do useful work — the more disordered/higher-entropy the energy, the less of it can be converted to work.`,
  parts: null, types: null, operations: null,
  formulas: [
    { formula: 'dS = δQ_rev / T', meaning: 'Entropy change for a reversible process', units: 'S in J/K (or J/(kg·K) for specific entropy)', condition: 'δQ_rev must be evaluated along a reversible path even if the actual process is irreversible (since S is a property).' },
    { formula: 'ΔS(isolated system) ≥ 0', meaning: 'Principle of increase of entropy', units: '—', condition: '= 0 only for a reversible process; > 0 for any real (irreversible) process.' }
  ],
  diagram: { description: 'A simple upward-sloping arrow labelled "Entropy of the universe" that only ever goes up or stays flat, never down — a good visual shorthand for ΔS ≥ 0.', svg: null },
  examTip: `Third Law is usually a quick 2-marker — memorise the exact statement and its one consequence (absolute zero is unattainable).`,
  commonMistake: `Saying "entropy always increases" without the qualifier "of an isolated system (or universe)" — entropy of a system alone CAN decrease, as long as the surroundings' entropy increases by at least as much.`,
  quickCheck: [
    { q: 'State the Third Law of Thermodynamics.', a: 'The entropy of a pure, perfect crystalline substance is zero at absolute zero temperature (0 K).' },
    { q: 'What does the Third Law imply about reaching absolute zero?', a: 'Absolute zero can be approached but never actually attained.' },
    { q: 'Under what condition does ΔS of a system equal exactly zero?', a: 'For a reversible process.' }
  ],
  applications: [
    'Predicting whether a proposed process can occur naturally (spontaneous ⇒ ΔS(universe) > 0).',
    'Working with T–s diagrams, the standard way to represent and analyse power and refrigeration cycles.',
    'Cryogenics and low-temperature physics, where the Third Law sets the limit of attainable temperatures.'
  ],
  extraNotes: `Entropy is often described as "disorder," but the more exam-useful way to think about it is as the UNAVAILABILITY of energy: high-entropy energy (heat in a lukewarm room) cannot be converted to work, while low-entropy energy (a hot reservoir) can. The principle of increase of entropy, ΔS(universe) ≥ 0, is the Second Law in a single inequality — every real process makes the universe more disordered. Do not write "entropy always increases" without the qualifier: the entropy of a single SYSTEM can decrease (a refrigerator lowers the entropy of the food inside); it is the combined entropy of system plus surroundings that never decreases. The Third Law gives the Third Law its practical punch: because reaching 0 K would require removing the last bit of entropy through a finite number of steps, absolute zero can be approached arbitrarily closely but never reached.`
},

// ---------------------------------------------------------------
{
  id: 'u1-thermo-numericals',
  course: 'bme',
  unit: 1,
  category: 'Thermodynamics',
  title: 'Solving Thermodynamics Numericals',
  summary: 'The standard method for every First-Law style numerical in this unit.',
  overview: `Unit I numericals almost always revolve around Q = ΔU + W for a closed system, work done in various processes, change in enthalpy/internal energy of an ideal gas, and basic heat-engine efficiency. The formulas are simple — the skill being tested is picking the RIGHT one for the process described.`,
  working: `Always identify the process type first (isothermal / isobaric / isochoric / polytropic / adiabatic) from the wording of the question — "at constant pressure" = isobaric, "temperature remains constant" = isothermal, "no heat is exchanged" = adiabatic, "volume unchanged" = isochoric. That choice determines which work formula and which property-change formula apply.`,
  parts: null, types: null, operations: null,
  formulas: [
    { formula: 'η = W_net/Q_in = 1 − (Q_reject/Q_supplied)', meaning: 'Thermal efficiency of a heat engine', units: 'dimensionless (often expressed as %)', condition: 'Q_reject and Q_supplied must be in the same units.' }
  ],
  diagram: null,
  examTip: `ALWAYS use this 8-line skeleton for numericals, even in a rush — examiners give partial marks stage-by-stage: Given: / Find: / Formula: / Substitution: / Calculation: / Answer: / Unit: / Sanity check:`,
  commonMistake: `Skipping the units on the final answer (a lone number gets marks deducted), and forgetting to convert temperatures to Kelvin for any formula involving T directly (like entropy or ideal-gas relations).`,
  quickCheck: [
    { q: 'A question says "gas expands at constant pressure" — which work formula applies?', a: 'Isobaric work: W = p(V₂ − V₁).' },
    { q: 'What must you always check before using T in a formula like dS = δQ/T?', a: 'That T is in Kelvin, not Celsius.' }
  ],
  applications: [
    'Every closed-system First Law numerical: identify the process → pick the work formula → apply δQ = dU + δW.',
    'Heat-engine efficiency problems (η = 1 − Q_reject/Q_supplied) that appear in Q1 every year.',
    'Ideal-gas problems where Δh = Cp·ΔT or Δu = Cv·ΔT must be matched to the process at hand.'
  ],
  extraNotes: `The whole of Unit I numericals reduces to a decision tree. First decide the process from the wording: "constant pressure" → isobaric (W = pΔV); "constant temperature" → isothermal (W = p₁V₁ ln(V₂/V₁)); "no heat exchange" → adiabatic; "fixed volume" → isochoric (W = 0). Then pick the property-change formula: for ideal gases, ΔU always equals Cv·ΔT and ΔH always equals Cp·ΔT regardless of process — a fact that surprises students who think Cp is only for constant-pressure paths. Finally, discipline on units: temperatures in Kelvin inside any formula containing T directly, pressures and volumes consistent (Pa·m³ = J), and the final answer carries its unit. Examiners award staged partial marks — write the Given/Find/Formula skeleton even when you are unsure of the arithmetic.`
}

];
