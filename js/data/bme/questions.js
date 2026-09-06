/* ============================================================
   QUESTION BANK
   type: 'mcq' | 'short' | 'long' | 'numerical'
   difficulty: 'Easy' | 'Medium' | 'Hard' | 'Exam Challenge'
   ============================================================ */

const QUESTION_BANK = [

/* ================= UNIT I ================= */

{ id:'q1', unit:1, course:'bme', topic:'u1-lathe', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which lathe part holds and rotates the workpiece?',
  options:['Tailstock','Headstock','Carriage','Bed'], answer:'Headstock',
  explanation:'The headstock houses the spindle and drive mechanism that holds and rotates the workpiece via a chuck or centre.' },

{ id:'q2', unit:1, course:'bme', topic:'u1-lathe', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which lathe operation produces a flat surface perpendicular to the axis?',
  options:['Turning','Facing','Knurling','Parting off'], answer:'Facing',
  explanation:'Facing removes material to create a flat end face perpendicular to the axis of rotation.' },

{ id:'q3', unit:1, course:'bme', topic:'u1-lathe', type:'mcq', difficulty:'Medium', marks:1,
  question:'Knurling on a lathe is best described as:',
  options:['A material-removal operation for tapers','A forming operation that presses a pattern into the surface','A thread-cutting operation','A boring operation'], answer:'A forming operation that presses a pattern into the surface',
  explanation:'Knurling forms a diamond-shaped grip pattern; it does not remove material like turning or facing.' },

{ id:'q4', unit:1, course:'bme', topic:'u1-shaper', type:'mcq', difficulty:'Easy', marks:1,
  question:'On a shaper, cutting occurs during the:',
  options:['Return stroke','Forward (cutting) stroke','Both strokes equally','Neither stroke'], answer:'Forward (cutting) stroke',
  explanation:'The return stroke is idle and made faster using a quick-return mechanism.' },

{ id:'q5', unit:1, course:'bme', topic:'u1-shaper', type:'mcq', difficulty:'Medium', marks:1,
  question:'The quick return mechanism commonly used in a standard shaper is the:',
  options:['Whitworth mechanism','Crank and slotted link mechanism','Geneva mechanism','Scotch yoke mechanism'], answer:'Crank and slotted link mechanism',
  explanation:'The Crank and Slotted Link Mechanism gives the shaper ram its faster idle return stroke.' },

{ id:'q6', unit:1, course:'bme', topic:'u1-planer', type:'mcq', difficulty:'Medium', marks:1,
  question:'In a planer, which element reciprocates?',
  options:['The tool head','The workpiece/table','Neither — both are stationary','The spindle'], answer:'The workpiece/table',
  explanation:'Unlike a shaper, the planer\'s workpiece (on the table) reciprocates while the tool heads stay largely fixed.' },

{ id:'q7', unit:1, course:'bme', topic:'u1-planer', type:'mcq', difficulty:'Hard', marks:1,
  question:'Which planer type is used for extra-large jobs that cannot be moved at all, keeping the workpiece stationary in a pit?',
  options:['Double housing planer','Open side planer','Pit planer','Edge planer'], answer:'Pit planer',
  explanation:'In a pit planer, the workpiece stays stationary in a pit while the tool/housings travel.' },

{ id:'q8', unit:1, course:'bme', topic:'u1-milling', type:'mcq', difficulty:'Easy', marks:1,
  question:'Milling is fundamentally a:',
  options:['Single-point cutting process','Multi-point cutting process','Non-cutting forming process','Abrasive process'], answer:'Multi-point cutting process',
  explanation:'A rotating multi-tooth cutter is what distinguishes milling from single-point processes like turning/shaping.' },

{ id:'q9', unit:1, course:'bme', topic:'u1-milling', type:'mcq', difficulty:'Medium', marks:1,
  question:'Helical milling (for helical gears/flutes) requires which type of milling machine?',
  options:['Horizontal milling machine','Universal milling machine','Vertical milling machine only','Any milling machine'], answer:'Universal milling machine',
  explanation:'A universal milling machine\'s table can swivel in the horizontal plane, enabling helical milling.' },

{ id:'q10', unit:1, course:'bme', topic:'u1-drilling', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which operation enlarges the end of a hole to seat a bolt head?',
  options:['Countersinking','Counterboring','Reaming','Spot facing'], answer:'Counterboring',
  explanation:'Counterboring enlarges the hole end cylindrically (flat-bottomed) to a given depth for a bolt head.' },

{ id:'q11', unit:1, course:'bme', topic:'u1-drilling', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which drilling machine type is best suited to a very large, heavy workpiece that must not be moved?',
  options:['Sensitive drilling machine','Gang drilling machine','Radial drilling machine','Portable drilling machine'], answer:'Radial drilling machine',
  explanation:'A radial drilling machine\'s arm can swing and slide, bringing the spindle to the fixed workpiece.' },

{ id:'q12', unit:1, course:'bme', topic:'u1-slotter', type:'mcq', difficulty:'Medium', marks:1,
  question:'A slotter is specifically used for producing:',
  options:['External flat surfaces only','Internal keyways/profiles not possible on a shaper','Cylindrical turned surfaces','Thread forms'], answer:'Internal keyways/profiles not possible on a shaper',
  explanation:'The slotter\'s vertical ram lets it reach and cut internal profiles a horizontal shaper tool cannot.' },

{ id:'q13', unit:1, course:'bme', topic:'u1-metalcutting', type:'mcq', difficulty:'Easy', marks:1,
  question:'In orthogonal cutting, the cutting edge is oriented:',
  options:['Perpendicular to the direction of tool travel','Parallel to the direction of tool travel','At 45° to the direction of tool travel','At the rake angle to the direction of tool travel'], answer:'Perpendicular to the direction of tool travel',
  explanation:'This perpendicular orientation makes orthogonal cutting a simplified 2-D case for analysis.' },

{ id:'q14', unit:1, course:'bme', topic:'u1-metalcutting', type:'mcq', difficulty:'Medium', marks:1,
  question:'Continuous chips with a built-up edge (BUE) typically form due to:',
  options:['High speed with large positive rake in ductile material','Low/medium speed with insufficient rake angle in ductile material','Machining brittle material at any speed','High feed with negative rake in brittle material'], answer:'Low/medium speed with insufficient rake angle in ductile material',
  explanation:'Insufficient rake at low/medium speed causes work material to weld onto the tool face, forming a BUE and poor finish.' },

{ id:'q15', unit:1, course:'bme', topic:'u1-metalcutting', type:'mcq', difficulty:'Hard', marks:1,
  question:'Tool life is best defined as:',
  options:['The total weight of material a tool can cut','The time between two successive grindings of a tool','The hardness rating of the tool material','The maximum rake angle a tool can have'], answer:'The time between two successive grindings of a tool',
  explanation:'Tool life measures the useful cutting duration before the tool needs to be re-sharpened.' },

{ id:'q16', unit:1, course:'bme', topic:'u1-thermo-basics', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which system allows both mass and energy transfer across its boundary?',
  options:['Closed system','Isolated system','Open system','None of these'], answer:'Open system',
  explanation:'An air compressor or turbine is a classic open-system example.' },

{ id:'q17', unit:1, course:'bme', topic:'u1-thermo-basics', type:'mcq', difficulty:'Easy', marks:1,
  question:'Pressure and temperature are examples of:',
  options:['Extensive properties','Intensive properties','Path functions','Point masses'], answer:'Intensive properties',
  explanation:'Intensive properties do not depend on the amount (mass) of the system.' },

{ id:'q18', unit:1, course:'bme', topic:'u1-work-heat', type:'mcq', difficulty:'Medium', marks:1,
  question:'Heat and work are classified as:',
  options:['Point functions','Path functions','State properties','Extensive properties only'], answer:'Path functions',
  explanation:'Their value depends on the process path, not just the initial/final states — hence inexact differentials δQ, δW.' },

{ id:'q19', unit:1, course:'bme', topic:'u1-work-heat', type:'mcq', difficulty:'Medium', marks:1,
  question:'The sign convention typically used is: work done BY the system is _____ and heat rejected BY the system is _____.',
  options:['positive; positive','negative; negative','positive; negative','negative; positive'], answer:'positive; negative',
  explanation:'Work done by the system is +ve; heat rejected by the system is −ve (standard engineering thermodynamics convention).' },

{ id:'q20', unit:1, course:'bme', topic:'u1-zeroth-law', type:'mcq', difficulty:'Easy', marks:1,
  question:'The Zeroth Law of Thermodynamics forms the basis for:',
  options:['Measuring pressure','Measuring temperature','Measuring entropy','Measuring enthalpy'], answer:'Measuring temperature',
  explanation:'It justifies comparing two bodies\' temperatures indirectly using a third body (a thermometer).' },

{ id:'q21', unit:1, course:'bme', topic:'u1-first-law', type:'mcq', difficulty:'Medium', marks:1,
  question:'For a closed, non-cyclic process, the correct First Law statement is:',
  options:['δQ = dU + δW','δQ = dU − δW','δW = dU + δQ','∮δQ = 0'], answer:'δQ = dU + δW',
  explanation:'Heat supplied is used partly to increase internal energy and partly to do external work.' },

{ id:'q22', unit:1, course:'bme', topic:'u1-first-law', type:'mcq', difficulty:'Medium', marks:1,
  question:'Enthalpy is defined as:',
  options:['H = U − pV','H = U + pV','H = pV − U','H = U/pV'], answer:'H = U + pV',
  explanation:'Enthalpy adds the flow (pressure-volume) work term to internal energy.' },

{ id:'q23', unit:1, course:'bme', topic:'u1-first-law', type:'mcq', difficulty:'Hard', marks:1,
  question:'Internal energy is classified as a:',
  options:['Path function','Point function (property)','Neither property nor path function','Extensive-only quantity that cannot be made specific'], answer:'Point function (property)',
  explanation:'U depends only on the state of the system, not on how that state was reached.' },

{ id:'q24', unit:1, course:'bme', topic:'u1-second-law', type:'mcq', difficulty:'Easy', marks:1,
  question:'The Kelvin-Planck statement is directly concerned with:',
  options:['Refrigerators','Heat engines','Pumps','Compressors alone'], answer:'Heat engines',
  explanation:'It states no heat engine can have 100% thermal efficiency in a cycle.' },

{ id:'q25', unit:1, course:'bme', topic:'u1-second-law', type:'mcq', difficulty:'Medium', marks:1,
  question:'The Clausius statement is directly concerned with:',
  options:['Heat engines only','The direction of spontaneous heat transfer','Only ideal gases','Only solids'], answer:'The direction of spontaneous heat transfer',
  explanation:'It says heat cannot flow unaided from a colder to a hotter body.' },

{ id:'q26', unit:1, course:'bme', topic:'u1-entropy-third-law', type:'mcq', difficulty:'Medium', marks:1,
  question:'For any real (irreversible) process in an isolated system, entropy:',
  options:['Always decreases','Always stays exactly constant','Always increases (ΔS ≥ 0)','Becomes negative'], answer:'Always increases (ΔS ≥ 0)',
  explanation:'This is the Principle of Increase of Entropy — equality holds only for reversible processes.' },

{ id:'q27', unit:1, course:'bme', topic:'u1-entropy-third-law', type:'mcq', difficulty:'Hard', marks:1,
  question:'According to the Third Law, absolute zero temperature is:',
  options:['Easily attainable in modern labs','Never actually attainable, only approachable','Equal to 0°C','Only a theoretical impossibility for gases'], answer:'Never actually attainable, only approachable',
  explanation:'The Third Law implies absolute zero can be approached but never actually reached.' },

// Short answer — Unit I
{ id:'q28', unit:1, course:'bme', topic:'u1-lathe', type:'short', difficulty:'Easy', marks:2,
  question:'List any four operations that can be performed on a lathe.',
  answer:'Any four of: Turning, Facing, Taper turning, Thread cutting, Knurling, Drilling/Boring, Parting off.', explanation:'Each is a standard lathe operation described in the syllabus.' },

{ id:'q29', unit:1, course:'bme', topic:'u1-planer', type:'short', difficulty:'Medium', marks:3,
  question:'Differentiate between a shaper and a planer (any three points).',
  answer:'Shaper: tool reciprocates, work stationary, small/medium jobs, single tool head. Planer: work reciprocates, tool stationary, large/heavy jobs, multiple tool heads possible.', explanation:'See the Shaper vs Planer comparison table.' },

{ id:'q30', unit:1, course:'bme', topic:'u1-metalcutting', type:'short', difficulty:'Medium', marks:3,
  question:'Explain the three types of chips formed in metal cutting.',
  answer:'Continuous chips (ductile material, high speed, good finish); Discontinuous chips (brittle material, or ductile at low speed); Continuous chips with BUE (low/medium speed, insufficient rake, poor finish).', explanation:'Each chip type corresponds to specific material/speed/rake conditions.' },

{ id:'q31', unit:1, course:'bme', topic:'u1-thermo-basics', type:'short', difficulty:'Easy', marks:2,
  question:'Define system, boundary and surroundings.',
  answer:'System: the matter/region chosen for study. Boundary: the surface separating system from surroundings. Surroundings: everything external to the system.', explanation:'Foundational thermodynamics vocabulary.' },

{ id:'q32', unit:1, course:'bme', topic:'u1-second-law', type:'short', difficulty:'Medium', marks:3,
  question:'State the Kelvin-Planck and Clausius statements of the Second Law, and state their relationship.',
  answer:'Kelvin-Planck: no cyclic heat engine converts all absorbed heat to work. Clausius: heat cannot flow unaided from cold to hot. They are equivalent — violating one implies violating the other.', explanation:'Both statements describe the same underlying limitation from different device perspectives.' },

{ id:'q33', unit:1, course:'bme', topic:'u1-entropy-third-law', type:'short', difficulty:'Medium', marks:2,
  question:'Define entropy and state the Third Law of Thermodynamics.',
  answer:'Entropy: a property measuring molecular disorder, indicating process direction/feasibility. Third Law: entropy of a pure, perfect crystalline substance is zero at absolute zero (0 K).', explanation:'—' },

// Long answer — Unit I
{ id:'q34', unit:1, course:'bme', topic:'u1-lathe', type:'long', difficulty:'Hard', marks:5,
  question:'With a neat labelled diagram, explain the construction and working of a lathe machine. List its main operations.',
  answer:'Structure your answer as: Definition → Principle of working → Labelled diagram (bed, headstock, tailstock, carriage, lead screw/feed rod) → Function of each part → Operations (turning, facing, taper turning, thread cutting, knurling, drilling/boring, parting) with one line each → Applications.', explanation:'This is the standard "construction and working" answer template for any machine tool question.' },

{ id:'q35', unit:2, course:'bme', topic:'u2-vcr-cycle', type:'long', difficulty:'Hard', marks:5,
  question:'Explain, with a block diagram, the working of the simple vapour compression refrigeration cycle.',
  answer:'Structure: Definition of the VCR cycle → Draw the 4-block loop (Compressor → Condenser → Expansion valve → Evaporator → back to Compressor) → Explain each of the 4 processes with the type of thermodynamic process involved → Mention p-h/T-s diagram representation → State the COP formula in terms of refrigerating effect and work input.', explanation:'Full model long-answer structure for this near-guaranteed question.' },

{ id:'q36', unit:1, course:'bme', topic:'u1-first-law', type:'long', difficulty:'Exam Challenge', marks:5,
  question:'State and explain the First Law of Thermodynamics for a closed system. Define internal energy and enthalpy, and explain their significance.',
  answer:'Structure: First Law statement (cyclic and non-cyclic forms) → derive δQ = dU + δW conceptually → define U as a point function/property → define H = U + pV → explain significance of H for flow/open systems (turbines, compressors, nozzles) → note both U and H are properties, unlike Q and W.', explanation:'A complete conceptual + definitional answer covering the full First Law sub-topic.' },

// Numerical — Unit I
{ id:'q37', unit:1, course:'bme', topic:'u1-thermo-numericals', type:'numerical', difficulty:'Medium', marks:5,
  question:'A gas expands isothermally from a volume of 0.1 m³ to 0.3 m³ at a constant pressure-related state where p₁V₁ = 20 kJ. Find the work done during the process.',
  answer:'Given: V1=0.1 m³, V2=0.3 m³, p1V1=20 kJ.\nFind: W\nFormula: W = p1V1 ln(V2/V1)\nSubstitution: W = 20 × ln(0.3/0.1) = 20 × ln(3)\nCalculation: W = 20 × 1.0986 ≈ 21.97 kJ\nAnswer: W ≈ 21.97 kJ\nUnit: kJ\nSanity check: Positive value is expected since the gas expands (does work ON the surroundings).', explanation:'Standard isothermal work numerical using the given p1V1 product directly.' },

{ id:'q38', unit:1, course:'bme', topic:'u1-thermo-numericals', type:'numerical', difficulty:'Medium', marks:5,
  question:'A heat engine receives 800 kJ of heat from a source and rejects 500 kJ to a sink in one cycle. Find its thermal efficiency and the net work done.',
  answer:'Given: Q_supplied = 800 kJ, Q_reject = 500 kJ\nFind: η, W_net\nFormula: η = 1 − Q_reject/Q_supplied ; W_net = Q_supplied − Q_reject\nSubstitution: η = 1 − 500/800 = 1 − 0.625 = 0.375\nCalculation: η = 37.5% ; W_net = 800 − 500 = 300 kJ\nAnswer: η = 37.5%, W_net = 300 kJ\nUnit: % and kJ\nSanity check: η is between 0 and 1, as required for a real heat engine.', explanation:'Direct application of heat-engine efficiency formula.' },

/* ================= UNIT II ================= */

{ id:'q39', unit:2, course:'bme', topic:'u2-refrigeration-basics', type:'mcq', difficulty:'Easy', marks:1,
  question:'1 Ton of Refrigeration is approximately equal to:',
  options:['3.5 kW','35 kW','0.35 kW','350 kW'], answer:'3.5 kW',
  explanation:'1 TR ≈ 3.5 kW ≈ 210 kJ/min ≈ 12,000 Btu/hr.' },

{ id:'q40', unit:2, course:'bme', topic:'u2-cop', type:'mcq', difficulty:'Easy', marks:1,
  question:'COP of a refrigerator is defined as:',
  options:['Work input ÷ refrigerating effect','Refrigerating effect ÷ work input','Heat rejected ÷ work input','Work input ÷ heat rejected'], answer:'Refrigerating effect ÷ work input',
  explanation:'COP(ref) = Q_L / W.' },

{ id:'q41', unit:2, course:'bme', topic:'u2-cop', type:'mcq', difficulty:'Medium', marks:1,
  question:'If COP of a refrigerator is 4, the COP of the same cycle used as a heat pump is:',
  options:['3','4','5','16'], answer:'5',
  explanation:'COP(HP) = COP(ref) + 1 = 4 + 1 = 5.' },

{ id:'q42', unit:2, course:'bme', topic:'u2-vcr-cycle', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which VCR cycle component converts high-pressure vapour into high-pressure liquid?',
  options:['Compressor','Condenser','Expansion valve','Evaporator'], answer:'Condenser',
  explanation:'The condenser rejects heat at constant pressure, condensing the vapour to liquid.' },

{ id:'q43', unit:2, course:'bme', topic:'u2-vcr-cycle', type:'mcq', difficulty:'Medium', marks:1,
  question:'The process occurring in the expansion (throttle) valve is:',
  options:['Constant pressure heat rejection','Constant enthalpy throttling','Isentropic compression','Constant volume heating'], answer:'Constant enthalpy throttling',
  explanation:'Throttling is an irreversible, constant-enthalpy process (h3 = h4).' },

{ id:'q44', unit:2, course:'bme', topic:'u2-vcr-cycle', type:'mcq', difficulty:'Hard', marks:1,
  question:'The compression process (1-2) in the ideal VCR cycle is assumed to be:',
  options:['Isothermal','Reversible adiabatic (isentropic)','Isobaric','Polytropic with n=1.2'], answer:'Reversible adiabatic (isentropic)',
  explanation:'Standard VCR cycle assumption for the compression stroke.' },

{ id:'q45', unit:2, course:'bme', topic:'u2-psychrometry', type:'mcq', difficulty:'Easy', marks:1,
  question:'Dry Bulb Temperature (DBT) is measured using:',
  options:['A wet-wick-covered thermometer','An ordinary thermometer, unaffected by moisture','A hygrometer only','A barometer'], answer:'An ordinary thermometer, unaffected by moisture',
  explanation:'DBT is simply the plain air temperature reading.' },

{ id:'q46', unit:2, course:'bme', topic:'u2-psychrometry', type:'mcq', difficulty:'Medium', marks:1,
  question:'Wet Bulb Temperature equals Dry Bulb Temperature only when:',
  options:['RH = 0%','RH = 50%','RH = 100%','Never equal'], answer:'RH = 100%',
  explanation:'At saturation (100% RH) there is no evaporative cooling effect, so WBT = DBT.' },

{ id:'q47', unit:2, course:'bme', topic:'u2-psychrometry', type:'mcq', difficulty:'Hard', marks:1,
  question:'Humidity ratio is expressed in units of:',
  options:['Percentage (%)','kg vapour / kg dry air','°C','kJ/kg'], answer:'kg vapour / kg dry air',
  explanation:'Humidity ratio (specific humidity) is an absolute mass-ratio quantity, unlike RH which is a percentage.' },

{ id:'q48', unit:2, course:'bme', topic:'u2-turbines-intro', type:'mcq', difficulty:'Easy', marks:1,
  question:'Pelton wheel is classified as a(n):',
  options:['Reaction turbine','Impulse turbine','Axial-flow reaction turbine','Centrifugal pump'], answer:'Impulse turbine',
  explanation:'Pelton wheel converts all available head to kinetic energy via the nozzle before the jet hits the runner.' },

{ id:'q49', unit:2, course:'bme', topic:'u2-pelton', type:'mcq', difficulty:'Medium', marks:1,
  question:'In a Pelton turbine, the jet is deflected through approximately:',
  options:['45°', '90°', '160°–165°', '270°'], answer:'160°–165°',
  explanation:'This large deflection angle maximises the momentum change and hence driving force.' },

{ id:'q50', unit:2, course:'bme', topic:'u2-pelton', type:'mcq', difficulty:'Medium', marks:1,
  question:'The flow rate (and power) of a Pelton turbine is regulated by:',
  options:['Guide vanes','Spear/needle in the nozzle','Draft tube','Wicket gates'], answer:'Spear/needle in the nozzle',
  explanation:'Guide vanes/wicket gates regulate flow in reaction turbines; Pelton uses a spear in the nozzle instead.' },

{ id:'q51', unit:2, course:'bme', topic:'u2-francis', type:'mcq', difficulty:'Medium', marks:1,
  question:'Francis turbine is best suited for:',
  options:['High head, low discharge','Medium head, medium discharge','Low head, high discharge','Zero head applications'], answer:'Medium head, medium discharge',
  explanation:'Francis turbines occupy the medium head/discharge range between Pelton (high head) and Kaplan (low head).' },

{ id:'q52', unit:2, course:'bme', topic:'u2-kaplan', type:'mcq', difficulty:'Medium', marks:1,
  question:'The Kaplan turbine runner most closely resembles a:',
  options:["Ship's propeller",'Paddle wheel','Pelton bucket wheel','Gear wheel'], answer:"Ship's propeller",
  explanation:'The Kaplan runner is a propeller-type design with adjustable-pitch blades.' },

{ id:'q53', unit:2, course:'bme', topic:'u2-centrifugal-pump', type:'mcq', difficulty:'Easy', marks:1,
  question:'A centrifugal pump converts:',
  options:['Pressure energy to kinetic energy only','Mechanical (shaft) energy to hydraulic energy','Hydraulic energy to mechanical energy','Heat energy to work'], answer:'Mechanical (shaft) energy to hydraulic energy',
  explanation:'This is the reverse conversion of what a reaction turbine does.' },

{ id:'q54', unit:2, course:'bme', topic:'u2-reciprocating-pump', type:'mcq', difficulty:'Medium', marks:1,
  question:'A reciprocating pump is an example of a:',
  options:['Centrifugal-action pump','Positive-displacement pump','Axial-flow pump','Mixed-flow pump'], answer:'Positive-displacement pump',
  explanation:'A piston/plunger physically displaces a fixed volume of liquid each stroke.' },

// Short — Unit II
{ id:'q55', unit:2, course:'bme', topic:'u2-cop', type:'short', difficulty:'Easy', marks:2,
  question:'Define COP for a refrigerator and state its relation to COP of a heat pump.',
  answer:'COP(refrigerator) = refrigerating effect ÷ work input. COP(heat pump) = COP(refrigerator) + 1.', explanation:'—' },

{ id:'q56', unit:2, course:'bme', topic:'u2-vcr-cycle', type:'short', difficulty:'Medium', marks:3,
  question:'List the four processes of the simple VCR cycle with the type of each process.',
  answer:'1-2 Compression (reversible adiabatic); 2-3 Condensation (constant pressure); 3-4 Expansion (constant enthalpy throttling); 4-1 Evaporation (constant pressure).', explanation:'—' },

{ id:'q57', unit:2, course:'bme', topic:'u2-psychrometry', type:'short', difficulty:'Medium', marks:3,
  question:'Define DBT, WBT and DPT.',
  answer:'DBT: plain air temperature (ordinary thermometer). WBT: temperature from a wet-wick-covered thermometer, showing evaporative cooling. DPT: temperature at which moisture begins to condense on cooling at constant pressure.', explanation:'—' },

{ id:'q58', unit:2, course:'bme', topic:'u2-turbines-intro', type:'short', difficulty:'Medium', marks:2,
  question:'Differentiate impulse and reaction turbines (any two points).',
  answer:'Impulse: pressure stays atmospheric across runner; runner not always full of water. Reaction: pressure drops across runner; runner always full of water.', explanation:'—' },

{ id:'q59', unit:2, course:'bme', topic:'u2-reciprocating-pump', type:'short', difficulty:'Medium', marks:3,
  question:'Differentiate single-acting and double-acting reciprocating pumps.',
  answer:'Single-acting: delivers water once per revolution (one side of piston works). Double-acting: delivers water twice per revolution (both sides of piston work).', explanation:'—' },

{ id:'q60', unit:2, course:'bme', topic:'u2-human-comfort', type:'short', difficulty:'Easy', marks:2,
  question:'List the factors affecting human comfort in an air-conditioned space.',
  answer:'Air temperature, relative humidity, air velocity, radiant heat, and occupant\'s clothing/activity level.', explanation:'—' },

// Long — Unit II
{ id:'q61', unit:2, course:'bme', topic:'u2-vcr-cycle', type:'long', difficulty:'Hard', marks:5,
  question:'Explain, with a labelled block diagram, the construction and working of the simple vapour compression refrigeration cycle.',
  answer:'Structure: Definition of VCR cycle → Draw 4-block loop (Compressor-Condenser-Expansion valve-Evaporator) → Explain each of the 4 processes (1-2, 2-3, 3-4, 4-1) with type of process → Mention p-h/T-s diagram representation → State the COP formula in terms of enthalpies.', explanation:'Full model long-answer structure for this near-guaranteed question.' },

{ id:'q62', unit:2, course:'bme', topic:'u2-kaplan', type:'long', difficulty:'Hard', marks:5,
  question:'Compare Pelton, Francis and Kaplan turbines under head, flow direction, discharge and type.',
  answer:'Use the Pelton vs Francis vs Kaplan comparison table: Type (Impulse/Reaction/Reaction), Head (High/Medium/Low), Flow (Tangential/Mixed/Axial), Discharge (Low/Medium/High).', explanation:'See the comparison table on the Kaplan Turbine topic page.' },

{ id:'q63', unit:2, course:'bme', topic:'u2-centrifugal-pump', type:'long', difficulty:'Medium', marks:5,
  question:'Explain the construction and working of a centrifugal pump with a neat diagram.',
  answer:'Structure: Definition → Principle (centrifugal action) → Parts (impeller, casing — volute/diffuser, suction & delivery pipe) → Working (energy conversion: kinetic at impeller → pressure in casing) → Classification (by casing, stages, flow direction) → Applications.', explanation:'—' },

// Numerical — Unit II
{ id:'q64', unit:2, course:'bme', topic:'u2-refrigeration-basics', type:'numerical', difficulty:'Medium', marks:5,
  question:'A refrigeration plant has a capacity of 10 TR. Express this capacity in kW and in kJ/min.',
  answer:'Given: Capacity = 10 TR\nFind: Capacity in kW and kJ/min\nFormula: 1 TR ≈ 3.5 kW ≈ 210 kJ/min\nSubstitution: 10 × 3.5 kW ; 10 × 210 kJ/min\nCalculation: 35 kW ; 2100 kJ/min\nAnswer: 35 kW, 2100 kJ/min\nUnit: kW and kJ/min\nSanity check: Both values scale linearly and consistently with the 1 TR reference.', explanation:'Direct unit-conversion numerical using the TR reference values.' },

{ id:'q65', unit:2, course:'bme', topic:'u2-cop', type:'numerical', difficulty:'Medium', marks:5,
  question:'A refrigerator removes 250 kJ of heat from the cold space while consuming 100 kJ of work. Find its COP and the heat rejected to the surroundings.',
  answer:'Given: Q_L = 250 kJ, W = 100 kJ\nFind: COP, Q_H\nFormula: COP = Q_L/W ; Q_H = Q_L + W\nSubstitution: COP = 250/100 ; Q_H = 250 + 100\nCalculation: COP = 2.5 ; Q_H = 350 kJ\nAnswer: COP = 2.5, Q_H = 350 kJ\nUnit: dimensionless COP, kJ for heat\nSanity check: Q_H > Q_L as expected (energy balance: heat rejected = heat absorbed + work input).', explanation:'Uses the energy balance across the refrigeration cycle.' }
,

/* ================= UNIT III — Power Transmission, Stress & Strain ================= */

{ id:'q66', unit:3, course:'bme', topic:'u3-belt-drives', type:'mcq', difficulty:'Easy', marks:1,
  question:'In which type of belt drive do the two pulleys rotate in opposite directions?',
  options:['Open belt drive','Cross belt drive','Compound belt drive','Stepped pulley drive'], answer:'Cross belt drive',
  explanation:'A cross belt drive crosses the belt between the pulleys, reversing the direction of the driven pulley.' },

{ id:'q67', unit:3, course:'bme', topic:'u3-belt-drives', type:'mcq', difficulty:'Easy', marks:1,
  question:'Why does a V-belt grip its pulley better than a flat belt of similar tension?',
  options:['It is heavier','Wedging action in the grooved pulley increases effective friction','It stretches more','It runs at lower speed'], answer:'Wedging action in the grooved pulley increases effective friction',
  explanation:'The trapezoidal cross-section wedges into the V-groove, increasing the normal (and hence friction) force for the same belt tension.' },

{ id:'q68', unit:3, course:'bme', topic:'u3-belt-drives', type:'mcq', difficulty:'Medium', marks:1,
  question:'"Creep" in a belt drive is best described as:',
  options:['Gross slipping from insufficient friction','A small continuous relative movement from alternate stretching/relaxing of the belt','Permanent stretching of an old belt','The belt jumping off the pulley'], answer:'A small continuous relative movement from alternate stretching/relaxing of the belt',
  explanation:'Creep is caused by the belt elastically stretching on the tight side and relaxing on the slack side as it travels — distinct from gross frictional slip.' },

{ id:'q69', unit:3, course:'bme', topic:'u3-rope-chain-drives', type:'mcq', difficulty:'Easy', marks:1,
  question:'A chain drive is called a "positive drive" because:',
  options:['It only moves forward','Sprocket teeth mechanically engage the chain links, so there is no slip','It is always faster than a belt','It needs no lubrication'], answer:'Sprocket teeth mechanically engage the chain links, so there is no slip',
  explanation:'Positive engagement between teeth and links means the velocity ratio is fixed exactly by the tooth ratio, unlike friction-based belts.' },

{ id:'q70', unit:3, course:'bme', topic:'u3-rope-chain-drives', type:'mcq', difficulty:'Easy', marks:1,
  question:'Wire ropes are preferred over fibre ropes mainly for:',
  options:['Lower cost','High power / heavy-duty applications needing high strength (e.g. cranes)','Quieter operation','Shorter drive distances'], answer:'High power / heavy-duty applications needing high strength (e.g. cranes)',
  explanation:'Wire rope withstands much higher loads than fibre rope, so it is used in cranes, elevators and haulage.' },

{ id:'q71', unit:3, course:'bme', topic:'u3-gear-drives', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which gear type connects parallel shafts using straight teeth cut along the axis?',
  options:['Bevel gear','Worm gear','Spur gear','Helical gear only'], answer:'Spur gear',
  explanation:'Spur gears have teeth parallel to the shaft axis and connect parallel shafts; they are simple but can be noisy at speed.' },

{ id:'q72', unit:3, course:'bme', topic:'u3-gear-drives', type:'mcq', difficulty:'Medium', marks:1,
  question:'Worm gears are typically chosen when the requirement is:',
  options:['Very high speed reduction between non-intersecting, perpendicular shafts','Quiet running between parallel shafts','Connecting intersecting shafts at 90 degrees','Zero axial thrust'], answer:'Very high speed reduction between non-intersecting, perpendicular shafts',
  explanation:'A worm meshing with a worm wheel gives large speed reduction in a single stage between non-intersecting, perpendicular shafts.' },

{ id:'q73', unit:3, course:'bme', topic:'u3-clutches', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which clutch engages automatically as rotational speed increases, without a pedal or lever?',
  options:['Single-plate clutch','Cone clutch','Centrifugal clutch','Multi-plate clutch'], answer:'Centrifugal clutch',
  explanation:'Spring-loaded friction shoes fly outward under centrifugal force and grip the drum as speed rises — no manual operation needed.' },

{ id:'q74', unit:3, course:'bme', topic:'u3-clutches', type:'mcq', difficulty:'Medium', marks:1,
  question:'The main advantage of a multi-plate clutch over a single-plate clutch is:',
  options:['Lower cost','Simplicity','More friction surface area in a compact size, so higher torque capacity','No wear over time'], answer:'More friction surface area in a compact size, so higher torque capacity',
  explanation:'Alternating multiple friction and pressure plates multiply the effective friction area without increasing diameter much.' },

{ id:'q75', unit:3, course:'bme', topic:'u3-stress-strain-intro', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which type of stress causes one layer of a material to slide over an adjacent layer?',
  options:['Tensile stress','Compressive stress','Shear stress','Volumetric stress'], answer:'Shear stress',
  explanation:'Shear stress arises from equal, opposite, parallel (tangential) forces causing layers to slide relative to each other.' },

{ id:'q76', unit:3, course:'bme', topic:'u3-stress-strain-intro', type:'mcq', difficulty:'Easy', marks:1,
  question:'Strain is a:',
  options:['Force quantity, units N','Pressure quantity, units N/mm2','Dimensionless ratio','Quantity measured in Newtons per second'], answer:'Dimensionless ratio',
  explanation:'Strain is the ratio of change in dimension to original dimension, so it has no units.' },

{ id:'q77', unit:3, course:'bme', topic:'u3-poisson-stress-strain-diagram', type:'mcq', difficulty:'Medium', marks:1,
  question:"The typical range of Poisson's ratio for common metals is:",
  options:['0.01 to 0.05','0.25 to 0.35','0.5 to 0.9','1.0 to 1.5'], answer:'0.25 to 0.35',
  explanation:"Most engineering metals have Poisson's ratio between about 0.25 and 0.35." },

{ id:'q78', unit:3, course:'bme', topic:'u3-poisson-stress-strain-diagram', type:'mcq', difficulty:'Medium', marks:1,
  question:'On the mild-steel stress-strain diagram, necking begins at which labelled point?',
  options:['Proportional limit (A)','Elastic limit (B)','Ultimate stress (E)','Fracture stress (F)'], answer:'Ultimate stress (E)',
  explanation:'Ultimate stress is the peak of the curve, where visible local necking (reduction in cross-section) begins.' },

{ id:'q79', unit:3, course:'bme', topic:'u3-hooke-elastic-constants', type:'mcq', difficulty:'Medium', marks:1,
  question:"Hooke's Law (stress = E times strain) is valid:",
  options:['At all stress levels up to fracture','Only within the elastic limit','Only for shear stress','Only for brittle materials'], answer:'Only within the elastic limit',
  explanation:'Beyond the elastic limit, stress and strain are no longer proportional and permanent deformation occurs.' },

{ id:'q80', unit:3, course:'bme', topic:'u3-hooke-elastic-constants', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which elastic constant relates shear stress to shear strain?',
  options:["Young\'s modulus (E)",'Modulus of rigidity (G)','Bulk modulus (K)',"Poisson's ratio"], answer:'Modulus of rigidity (G)',
  explanation:'The modulus of rigidity (G) measures resistance to shear deformation.' },

{ id:'q81', unit:3, course:'bme', topic:'u3-mechanical-properties', type:'mcq', difficulty:'Easy', marks:1,
  question:'The ability of a material to be drawn into thin wires under tension is called:',
  options:['Malleability','Ductility','Brittleness','Resilience'], answer:'Ductility',
  explanation:'Ductility is large plastic deformation under tension, e.g. drawing copper into wire.' },

{ id:'q82', unit:3, course:'bme', topic:'u3-mechanical-properties', type:'mcq', difficulty:'Medium', marks:1,
  question:'Slow, progressive plastic deformation under a constant sustained load, usually at elevated temperature, is called:',
  options:['Fatigue','Creep','Resilience','Toughness'], answer:'Creep',
  explanation:'Creep is time-dependent deformation under a steady load, distinct from cyclic-load fatigue.' },

{ id:'q83', unit:3, course:'bme', topic:'u3-stress-strain-intro', type:'short', difficulty:'Easy', marks:2,
  question:'Define stress and strain, with their units.',
  answer:'Stress (sigma) is the internal resisting force developed per unit cross-sectional area, sigma = P/A, units N/mm2 (MPa). Strain (epsilon) is the ratio of change in dimension to original dimension, epsilon = dL/L, dimensionless.', explanation:'-' },

{ id:'q84', unit:3, course:'bme', topic:'u3-belt-drives', type:'short', difficulty:'Medium', marks:2,
  question:'Differentiate between slip and creep in a belt drive.',
  answer:'Slip: gross relative motion between belt and pulley from insufficient friction, reducing the velocity ratio suddenly. Creep: a small, continuous relative movement caused by the belt alternately stretching (tight side) and relaxing (slack side) as it travels around the pulleys.', explanation:'-' },

{ id:'q85', unit:3, course:'bme', topic:'u3-belt-drives', type:'short', difficulty:'Easy', marks:2,
  question:'Differentiate an open belt drive from a cross belt drive.',
  answer:'Open belt drive: both pulleys rotate in the SAME direction; shafts parallel; belt sides do not cross. Cross belt drive: pulleys rotate in OPPOSITE directions; the belt crosses itself between the pulleys, causing extra wear at the crossing point.', explanation:'-' },

{ id:'q86', unit:3, course:'bme', topic:'u3-gear-drives', type:'short', difficulty:'Medium', marks:2,
  question:'List the four common gear types with the shaft arrangement each connects.',
  answer:'Spur - parallel shafts. Helical - parallel or crossed shafts (angled teeth, quieter). Bevel - intersecting shafts (usually 90 degrees). Worm - non-intersecting, perpendicular shafts (large speed reduction).', explanation:'-' },

{ id:'q87', unit:3, course:'bme', topic:'u3-clutches', type:'short', difficulty:'Medium', marks:2,
  question:'Differentiate a single-plate clutch from a multi-plate clutch.',
  answer:'Single-plate: one friction plate between flywheel and pressure plate - the standard car clutch. Multi-plate: several alternating friction and pressure plates, giving much more friction area (and torque capacity) in a compact size - used in motorcycles/heavy vehicles.', explanation:'-' },

{ id:'q88', unit:3, course:'bme', topic:'u3-poisson-stress-strain-diagram', type:'short', difficulty:'Medium', marks:2,
  question:"Define Poisson's ratio and state its typical range for metals.",
  answer:"Poisson's ratio = lateral strain / longitudinal strain, valid within the elastic limit. For most metals it lies between 0.25 and 0.35.", explanation:'-' },

{ id:'q89', unit:3, course:'bme', topic:'u3-hooke-elastic-constants', type:'short', difficulty:'Easy', marks:2,
  question:"State Hooke's Law and name the three elastic constants it leads to.",
  answer:"Hooke's Law: within the elastic limit, stress is directly proportional to strain (sigma = E times epsilon). The three elastic constants are Young\'s modulus (E, tension/compression), Modulus of rigidity (G, shear), and Bulk modulus (K, volumetric/hydrostatic).", explanation:'-' },

{ id:'q90', unit:3, course:'bme', topic:'u3-mechanical-properties', type:'short', difficulty:'Medium', marks:2,
  question:'Differentiate toughness from hardness.',
  answer:'Toughness: ability to absorb energy and withstand shock/impact loads without fracturing. Hardness: resistance to indentation, scratching, abrasion or wear. A material can be hard but not tough (brittle), or tough but not the hardest.', explanation:'-' },

{ id:'q91', unit:3, course:'bme', topic:'u3-rope-chain-drives', type:'short', difficulty:'Easy', marks:2,
  question:'List two advantages of a chain drive over a belt drive.',
  answer:'Any two of: no slip (truly positive drive), more compact, higher transmission efficiency, can transmit more power, performs well at both low and high speeds without efficiency loss.', explanation:'-' },

{ id:'q92', unit:3, course:'bme', topic:'u3-poisson-stress-strain-diagram', type:'long', difficulty:'Hard', marks:5,
  question:'Draw and explain the stress-strain diagram for a ductile material (mild steel), labelling all important points.',
  answer:"Draw stress (y-axis) vs strain (x-axis) rising from the origin. Label: A - Proportional limit (Hooke's Law holds exactly); B - Elastic limit (material fully recovers on unloading); C/D - Upper and lower yield points (plastic deformation begins, stress fluctuates); E - Ultimate stress (peak of curve, necking begins); F - Breaking/fracture stress (specimen fractures; appears lower than E only because it is computed on the original area, while true area has shrunk from necking). Conclude by naming which region is elastic and which is plastic.", explanation:'One of the most reliably repeated diagram-based long answers in the syllabus.' },

{ id:'q93', unit:3, course:'bme', topic:'u3-hooke-elastic-constants', type:'long', difficulty:'Hard', marks:5,
  question:"State the relationships between the three elastic constants (E, G, K) and Poisson's ratio, and explain when each is used.",
  answer:'Relations: E = 2G(1+mu); E = 3K(1-2mu); E = 9KG/(3K+G) (derived by eliminating mu from the first two). E (Young\'s modulus) relates tensile/compressive stress to linear strain; G (rigidity modulus) relates shear stress to shear strain; K (bulk modulus) relates volumetric stress to volumetric strain. Given any two of E, G, K, mu, the others can be found by rearranging these formulas.', explanation:'Near-guaranteed numerical/derivation source.' },

{ id:'q94', unit:3, course:'bme', topic:'u3-gear-drives', type:'long', difficulty:'Medium', marks:5,
  question:'Explain, with sketches, the four common types of gears and the shaft arrangement each is suited to.',
  answer:'Structure: Definition of a gear drive (positive transmission, exact velocity ratio) then Spur (straight teeth, parallel shafts, simple, noisy at speed) then Helical (angled teeth, parallel/crossed shafts, quieter, produces axial thrust) then Bevel (conical, intersecting shafts, usually 90 degrees) then Worm (worm + worm wheel, non-intersecting perpendicular shafts, large speed reduction) then a one-line comparison summary.', explanation:'-' },

{ id:'q95', unit:3, course:'bme', topic:'u3-mechanical-properties', type:'long', difficulty:'Medium', marks:5,
  question:'Explain any five important mechanical properties of metals with a suitable example material for each.',
  answer:'Choose five, e.g.: Elasticity (returns to shape - spring steel); Plasticity (permanent deformation - used in forging); Ductility (drawn into wire - copper); Malleability (rolled into sheet - gold/aluminium); Toughness (absorbs impact - structural steel); Hardness (resists indentation - hardened tool steel); Brittleness (fractures with little deformation - cast iron/glass). Define each in one line and give the example.', explanation:'-' },

{ id:'q96', unit:3, course:'bme', topic:'u3-belt-drives', type:'long', difficulty:'Medium', marks:5,
  question:'Explain the construction and working of belt drives, and differentiate open belt drive from cross belt drive with sketches.',
  answer:'Structure: Definition and purpose of belt drives then Working principle (friction between belt and pulley) then Types (flat, V, circular/rope) then Open belt drive (same direction, parallel shafts, sketch with non-crossing sides) then Cross belt drive (opposite direction, sketch with crossing sides, note extra wear at crossing point) then Slip and creep as limitations then Applications.', explanation:'-' },

{ id:'q97', unit:3, course:'bme', topic:'u3-clutches', type:'long', difficulty:'Medium', marks:5,
  question:'Explain, with neat sketches, the construction and working of single-plate, multi-plate, cone and centrifugal clutches.',
  answer:'Structure: Definition/purpose of a clutch (connect/disconnect drive without stopping the driver) then common friction-engagement principle then Single-plate (one plate, flywheel + spring-loaded pressure plate, standard car clutch) then Multi-plate (alternating plates, more torque in compact size) then Cone clutch (male/female cones, wedging action, more torque for same axial force, wears faster) then Centrifugal clutch (spring-loaded shoes engage automatically with speed) then one-line comparison summary.', explanation:'-' },

{ id:'q98', unit:3, course:'bme', topic:'u3-hooke-elastic-constants', type:'numerical', difficulty:'Medium', marks:5,
  question:"For a material, Young\'s modulus E = 200 GPa and Poisson's ratio = 0.3. Find the modulus of rigidity G.",
  answer:'Given: E = 200 GPa, mu = 0.3\nFind: G\nFormula: E = 2G(1+mu)\nSubstitution: 200 = 2G(1+0.3) = 2.6G\nCalculation: G = 200/2.6 = 76.9 GPa\nAnswer: G is approximately 76.9 GPa\nUnit: GPa\nSanity check: G is comfortably less than E, as expected for typical metals.', explanation:'Direct application of the E-G-mu relationship.' },

{ id:'q99', unit:3, course:'bme', topic:'u3-stress-strain-intro', type:'numerical', difficulty:'Medium', marks:5,
  question:"A steel rod 2 m long and 20 mm in diameter is subjected to an axial pull of 40 kN, producing an extension of 0.4 mm. Find the stress, strain and Young\'s modulus of the rod.",
  answer:'Given: L = 2000 mm, d = 20 mm, P = 40000 N, dL = 0.4 mm\nFind: stress, strain, E\nFormula: A = (pi times d squared)/4 ; stress = P/A ; strain = dL/L ; E = stress/strain\nSubstitution: A = pi(20)^2/4 = 314.16 mm2 ; stress = 40000/314.16 ; strain = 0.4/2000\nCalculation: stress = 127.3 N/mm2 ; strain = 0.0002 ; E = 127.3/0.0002 = 6.37e5 N/mm2 which is about 637 GPa\nAnswer: stress is about 127.3 MPa, strain is 0.0002, E is about 637 GPa\nUnit: MPa for stress, dimensionless strain, GPa for E\nSanity check: order of magnitude is consistent with a stiff metallic rod under a modest extension (note: a real steel value is closer to 200 GPa, so always check whether the given numbers in an exam question are realistic).', explanation:'Standard direct-stress/strain/Young\'s-modulus numerical.' },

/* ================= UNIT IV — Manufacturing Systems and NC/CNC ================= */

{ id:'q100', unit:4, course:'bme', topic:'u4-manufacturing-systems', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which manufacturing system uses general-purpose machines and highly skilled labour to make a wide variety of custom products in small quantities?',
  options:['Mass production','Job shop production','Continuous production','Batch production'], answer:'Job shop production',
  explanation:'Job shop production suits low volume, high variety work such as a tool room or prototype shop.' },

{ id:'q101', unit:4, course:'bme', topic:'u4-manufacturing-systems', type:'mcq', difficulty:'Medium', marks:1,
  question:'As a factory moves from job shop, to batch, to mass, to continuous production, the general trend is:',
  options:['Variety increases, volume decreases','Variety decreases, volume increases','Both increase together','Both decrease together'], answer:'Variety decreases, volume increases',
  explanation:'This is the standard trend line examiners expect stated explicitly.' },

{ id:'q102', unit:4, course:'bme', topic:'u4-nc-fundamentals', type:'mcq', difficulty:'Easy', marks:1,
  question:"The brain of an NC system, which interprets the part program and drives the machine's actuators, is called the:",
  options:['Part program','Machine Control Unit (MCU)','Servo motor','Tool post'], answer:'Machine Control Unit (MCU)',
  explanation:'The MCU reads and converts the coded part program into signals that drive the machine.' },

{ id:'q103', unit:4, course:'bme', topic:'u4-nc-classification', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which motion-control type is best suited to a simple drilling operation, where only the final hole position matters?',
  options:['Contouring','Straight-cut','Point-to-Point (PTP)','Closed-loop'], answer:'Point-to-Point (PTP)',
  explanation:'PTP controls only the end position, not the path taken between points - ideal for drilling, spot welding, punching.' },

{ id:'q104', unit:4, course:'bme', topic:'u4-nc-classification', type:'mcq', difficulty:'Medium', marks:1,
  question:'An NC system with no feedback mechanism to verify actual tool position is called:',
  options:['Closed-loop system','Open-loop system','Contouring system','Adaptive control system'], answer:'Open-loop system',
  explanation:'Open-loop systems (typically using stepper motors) do not check the commanded position against the actual position.' },

{ id:'q105', unit:4, course:'bme', topic:'u4-nc-vs-cnc', type:'mcq', difficulty:'Easy', marks:1,
  question:'In a classic NC machine (not CNC), the part program is typically stored on:',
  options:['On-board computer memory','Punched tape/cards, read again for every job','Cloud storage','A USB drive'], answer:'Punched tape/cards, read again for every job',
  explanation:'Classic NC has no on-board memory; CNC introduced stored-program computer control.' },

{ id:'q106', unit:4, course:'bme', topic:'u4-nc-vs-cnc', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which capability is available in CNC but NOT in classic NC?',
  options:['Cutting metal','Following a coded program','Editing the program directly at the machine','Using a motor to move the tool'], answer:'Editing the program directly at the machine',
  explanation:"CNC's stored-program computer allows at-the-machine editing; NC needs external re-punching of tape." },

{ id:'q107', unit:4, course:'bme', topic:'u4-manufacturing-systems', type:'short', difficulty:'Easy', marks:2,
  question:'Differentiate batch production from mass production.',
  answer:'Batch production: limited quantities of a product made periodically in batches, using moderately flexible machines (e.g. seasonal clothing). Mass production: large quantities of a STANDARDISED product made continuously on dedicated, special-purpose machines (e.g. car assembly lines).', explanation:'-' },

{ id:'q108', unit:4, course:'bme', topic:'u4-nc-fundamentals', type:'short', difficulty:'Easy', marks:2,
  question:'List the three basic components of an NC system and their function in one line each.',
  answer:'Part program - coded instructions describing the machining sequence/tool path. Machine Control Unit (MCU) - interprets the program and converts it into drive signals. Machine tool - the actual machine that performs the cutting, fitted with servo motors/drives.', explanation:'-' },

{ id:'q109', unit:4, course:'bme', topic:'u4-nc-classification', type:'short', difficulty:'Medium', marks:2,
  question:'Differentiate open-loop and closed-loop NC control systems.',
  answer:'Open-loop: no feedback device; commands are sent to the motor with no check on actual position; simpler and cheaper but less accurate. Closed-loop: uses feedback devices (encoders/transducers) to compare actual position with commanded position and correct errors; more accurate but more expensive.', explanation:'-' },

{ id:'q110', unit:4, course:'bme', topic:'u4-nc-classification', type:'short', difficulty:'Medium', marks:2,
  question:'Differentiate point-to-point (PTP) control from contouring control.',
  answer:'PTP: controls only the end position of each move, not the path between points - used for drilling/punching. Contouring: continuously controls the tool path along a curved/angular profile using coordinated multi-axis motion - used for milling complex profiles, cams, dies.', explanation:'-' },

{ id:'q111', unit:4, course:'bme', topic:'u4-nc-vs-cnc', type:'short', difficulty:'Easy', marks:2,
  question:'State any four points of difference between NC and CNC.',
  answer:'Any four of: control (hard-wired vs computer/software); program storage (tape, no memory vs on-board memory); flexibility (limited vs high); editing (not possible at machine vs possible at machine); diagnostics (none vs built-in); accuracy over time (tape wear vs consistent); multiple program storage (no vs yes).', explanation:'-' },

{ id:'q112', unit:4, course:'bme', topic:'u4-manufacturing-systems', type:'long', difficulty:'Medium', marks:5,
  question:'Explain the four types of manufacturing systems - job shop, batch, mass and continuous/flow production - with examples.',
  answer:'Structure: Define a manufacturing system then Job shop (small qty, wide variety, general-purpose machines, skilled labour, e.g. tool room) then Batch (limited qty, periodic batches, moderately flexible machines, e.g. seasonal clothing) then Mass (large qty, standardised product, special-purpose/dedicated line, e.g. car assembly) then Continuous/flow (very high volume, uninterrupted, e.g. petroleum refining, cement) then conclude with the trend: as you move job shop to continuous, variety falls and volume rises.', explanation:'-' },

{ id:'q113', unit:4, course:'bme', topic:'u4-nc-fundamentals', type:'long', difficulty:'Medium', marks:5,
  question:'With a block diagram, explain the fundamentals of Numerical Control (NC) and list its advantages.',
  answer:'Structure: Definition of NC then block diagram (Part Program to Machine Control Unit (MCU) to Drives/Actuators to Machine Tool, with feedback loop noted for closed-loop systems) then function of each block then advantages: high accuracy and repeatability, reduced dependence on operator skill, increased productivity, flexibility (change job by changing program), reduced scrap/rework, reduced lead time.', explanation:'-' },

{ id:'q114', unit:4, course:'bme', topic:'u4-nc-classification', type:'long', difficulty:'Medium', marks:5,
  question:'Explain the classification of NC systems by motion control (PTP, straight-cut, contouring) and by control loop (open-loop, closed-loop).',
  answer:'Structure: two independent classification axes then motion control: PTP (end point only, e.g. drilling), Straight-cut (controlled feed along machine axes, e.g. simple milling), Contouring (continuous coordinated multi-axis path, e.g. complex profile milling) then control loop: Open-loop (no feedback, simpler/cheaper, less accurate) vs Closed-loop (feedback via encoders/transducers, corrects error, more accurate/expensive) then sketch simple block diagrams for open vs closed loop.', explanation:'-' },

{ id:'q115', unit:4, course:'bme', topic:'u4-nc-vs-cnc', type:'long', difficulty:'Hard', marks:5,
  question:'Compare NC and CNC systems under at least six heads: control, program storage, flexibility, editing, diagnostics, accuracy and cost.',
  answer:'Use the NC vs CNC comparison table: Control (hard-wired vs computer/software); Program storage (tape/cards, no memory vs on-board memory); Flexibility (limited, needs new tape vs high, edited at machine); Editing (not possible at machine vs possible at machine); Diagnostics (none vs built-in); Accuracy over time (tape wear vs consistent); Cost (lower initial/higher operating vs higher initial/more efficient long-term); Multiple program storage (no vs yes). Conclude: the real distinction is architectural - hard-wired logic vs a stored-program computer.', explanation:'This comparison is one of the highest-yield items in Unit IV.' },

/* ================= ADDED COVERAGE ================= */

{ id:'q116', unit:1, course:'bme', topic:'u1-intro-machinetools', type:'mcq', difficulty:'Easy', marks:1,
  question:'The primary function of any machine tool is to:',
  options:['Join two metal parts together','Generate surfaces by removing material from a workpiece','Only measure the dimensions of a part','Heat-treat the workpiece'], answer:'Generate surfaces by removing material from a workpiece',
  explanation:'A machine tool generates surfaces (flat, cylindrical, holes, threads) by removing metal from a workpiece using a cutting tool.' },

{ id:'q117', unit:1, course:'bme', topic:'u1-intro-machinetools', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which machine tool is best suited to producing a flat surface on a small job using a reciprocating tool?',
  options:['Lathe','Shaper','Drilling machine','Milling machine'], answer:'Shaper',
  explanation:'A shaper drives a single-point tool in a reciprocating motion to produce flat surfaces on small to medium jobs; planers are used for larger work.' },

{ id:'q118', unit:1, course:'bme', topic:'u1-intro-machinetools', type:'short', difficulty:'Easy', marks:2,
  question:'Classify machine tools and state one example of each class.',
  answer:'Machine tools may be classified as: single-point cutting (lathe, shaper, planer, slotter, boring machine), multi-point cutting (milling, broaching, grinding with multi-grit wheels), and abrasive/finishing (grinding, honing, lapping). One example of each is sufficient.', explanation:'-' },

{ id:'q119', unit:1, course:'bme', topic:'u1-slotter', type:'mcq', difficulty:'Easy', marks:1,
  question:'The ram of a slotter reciprocates:',
  options:['Horizontally','Vertically','In a circle','At 45 degrees'], answer:'Vertically',
  explanation:'A slotter is essentially a vertical shaper — the ram moves vertically and cuts on the downward stroke.' },

{ id:'q120', unit:1, course:'bme', topic:'u1-zeroth-law', type:'mcq', difficulty:'Easy', marks:1,
  question:'Two bodies are in thermal equilibrium with a third body. Then they are:',
  options:['In thermal equilibrium with each other','Necessarily at different temperatures','Always isolated from each other','Never in equilibrium'], answer:'In thermal equilibrium with each other',
  explanation:'This is exactly the Zeroth Law, and it is the principle that makes the thermometer possible.' },

{ id:'q121', unit:1, course:'bme', topic:'u1-zeroth-law', type:'short', difficulty:'Medium', marks:2,
  question:'State the Zeroth Law of thermodynamics and explain how it justifies temperature measurement.',
  answer:'Statement: if body A is in thermal equilibrium with body C, and body B is also in thermal equilibrium with body C, then A and B are in thermal equilibrium with each other. Because bodies in thermal equilibrium share one common intensive property — temperature — a small third body (the thermometer) that equilibrates with A reads the same temperature it would read against B, so temperature comparison becomes objective and measurable.', explanation:'-' },

{ id:'q122', unit:2, course:'bme', topic:'u2-francis', type:'mcq', difficulty:'Easy', marks:1,
  question:'A Francis turbine is best described as a:',
  options:['Tangential impulse turbine','Mixed-flow reaction turbine with radial inflow','Axial-flow impulse turbine','Positive displacement machine'], answer:'Mixed-flow reaction turbine with radial inflow',
  explanation:'Water enters the Francis runner radially and leaves axially into the draft tube — a mixed-flow reaction machine for medium heads.' },

{ id:'q123', unit:2, course:'bme', topic:'u2-francis', type:'short', difficulty:'Medium', marks:2,
  question:'Why does a reaction turbine like the Francis require a draft tube, while a Pelton wheel does not?',
  answer:'A Pelton operates in air under atmospheric pressure, so the runner can simply discharge freely. A Francis runner is submerged and may sit above the tailrace; the draft tube is a gradually expanding pipe that (1) lets the turbine be installed above the tailrace without losing head and (2) recovers part of the kinetic energy at runner exit by converting it into pressure as the water slows down. Without it, that exit kinetic energy would be wasted.', explanation:'-' },

{ id:'q124', unit:2, course:'bme', topic:'u2-francis', type:'long', difficulty:'Medium', marks:5,
  question:'With a neat sketch, explain the working of a Francis turbine and state its main components and applications.',
  answer:'Structure: definition (medium-head, medium-discharge mixed-flow reaction turbine) then main components: spiral/scroll casing, stay vanes and guide vanes, runner with curved blades, draft tube. Working: water from the penstock enters the spiral casing, which distributes it uniformly around the circumference; stay vanes and adjustable guide vanes give the water the required swirl/direction and partial pressure drop; water flows radially inward through the runner, where both pressure and velocity fall and energy is transferred to the shaft; the draft tube recovers exit kinetic energy as pressure and discharges to the tailrace. Applications: medium-head (roughly 40 to 400 m) powerhouses with moderate discharge — the most widely used hydraulic turbine in the world.', explanation:'-' },

{ id:'q125', unit:2, course:'bme', topic:'u2-human-comfort', type:'mcq', difficulty:'Easy', marks:1,
  question:'The four environmental variables that determine human comfort are:',
  options:['DBT, WBT, DPT and altitude','DBT, humidity, air velocity and mean radiant temperature','Temperature, pressure, volume and density','DBT, rainfall, wind and dust'], answer:'DBT, humidity, air velocity and mean radiant temperature',
  explanation:'Comfort depends on dry-bulb temperature, relative humidity, air motion and radiation from surrounding surfaces — plus personal factors like clothing and activity.' },

{ id:'q126', unit:3, course:'bme', topic:'u3-clutches', type:'mcq', difficulty:'Easy', marks:1,
  question:'The torque transmitted by a cone clutch compared to a single-plate clutch of the same size is:',
  options:['Lower, because of the taper','Higher, because of the wedge action of the cone','Exactly equal','Zero'], answer:'Higher, because of the wedge action of the cone',
  explanation:'The conical shape multiplies the normal force between the friction surfaces, so a cone clutch transmits more torque for the same axial spring force and size.' },

{ id:'q127', unit:3, course:'bme', topic:'u3-clutches', type:'short', difficulty:'Medium', marks:2,
  question:'Distinguish between a single-plate and a multi-plate clutch. Where is each preferred?',
  answer:'A single-plate clutch has one pair of friction surfaces (flywheel-plate-pressure plate) and is dry: it is simple, cheap and used in cars and light vehicles. A multi-plate clutch stacks several driving and driven plates, creating many friction surfaces; total torque capacity rises with the number of pairs, so it is compact for the torque it carries. Multi-plate clutches are preferred where space is tight or torque is high — motorcycles, and wet clutches inside gearboxes running in oil.', explanation:'-' },

{ id:'q128', unit:3, course:'bme', topic:'u3-clutches', type:'long', difficulty:'Medium', marks:5,
  question:'Explain the working of single-plate, multi-plate, cone and centrifugal clutches with sketches.',
  answer:'Structure: define a clutch (engages/disconnects driving and driven shafts without stopping the driver) then each type. Single-plate: engine flywheel face, splined friction plate and spring-loaded pressure plate; releasing the pedal pulls the pressure plate back against spring force, freeing the plate; used in cars. Multi-plate: several alternate driving/driven plates in oil or dry, many friction surfaces, high torque in small space; motorcycles/racing. Cone: male and female friction cones; the wedge action increases normal pressure, giving more torque for the same spring force; older cars, industrial machines. Centrifugal: spring-loaded shoes fly outward with speed and grip the drum automatically — no pedal; scooters and automatic drives.', explanation:'This is a classic Unit III long answer — draw all four sketches.' },

{ id:'q129', unit:4, course:'bme', topic:'u4-nc-classification', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which pair of applications correctly matches the NC motion-control class?',
  options:['Contouring: drilling holes; PTP: die milling','PTP: drilling/punching; Contouring: die and cam milling','PTP: gear hobbing; Straight-cut: lathe threading','Contouring: spot welding; PTP: profiling'], answer:'PTP: drilling/punching; Contouring: die and cam milling',
  explanation:'Point-to-point control only cares about final coordinates (drilling, punching); contouring coordinates multi-axis motion continuously for curved profiles (dies, cams).' },

{ id:'q130', unit:4, course:'bme', topic:'u4-nc-vs-cnc', type:'mcq', difficulty:'Medium', marks:1,
  question:'A workshop needs to edit part programs frequently at the machine and store many programs on-board. Which system and why?',
  options:['NC — punched tape is durable','CNC — programs are stored in computer memory and editable at the machine','NC — it has better diagnostics','Either — no difference'], answer:'CNC — programs are stored in computer memory and editable at the machine',
  explanation:'In-machine editing and on-board multi-program storage are precisely the advantages of the computer (CNC) over hard-wired NC.' },

{ id:'q131', unit:2, course:'bme', topic:'u2-cop', type:'numerical', difficulty:'Medium', marks:5,
  question:'A refrigerator maintains a cold space at -5 C while rejecting heat to surroundings at 35 C. It removes 2.5 kW of heat using 1 kW of power input. Find its actual COP and the Carnot (maximum possible) COP for these temperatures.',
  answer:'Given: Q_L = 2.5 kW, W = 1 kW, T_L = -5 C = 268 K, T_H = 35 C = 308 K\nFind: COP(actual), COP(Carnot)\nFormula: COP = Q_L/W ; COP(Carnot) = T_L/(T_H - T_L)\nSubstitution: COP(actual) = 2.5/1 = 2.5\nCOP(Carnot) = 268/(308 - 268) = 268/40 = 6.7\nCalculation: as above\nAnswer: COP(actual) = 2.5, COP(Carnot) = 6.7\nUnit: dimensionless\nSanity check: actual COP must be BELOW the Carnot COP — 2.5 < 6.7, consistent. Remember to convert C to K before using the Carnot formula.', explanation:'Tests both the definition of COP and the Carnot limit — and the classic Celsius-to-Kelvin trap.' },

{ id:'q132', unit:2, course:'bme', topic:'u2-centrifugal-pump', type:'numerical', difficulty:'Medium', marks:5,
  question:'A centrifugal pump delivers 0.05 m3/s of water against a head of 20 m with an overall efficiency of 70 percent. Find the power required to drive the pump.',
  answer:'Given: Q = 0.05 m3/s, H = 20 m, eta_o = 0.70, rho = 1000 kg/m3, g = 9.81 m/s2\nFind: P_input\nFormula: P_water = rho*g*Q*H / 1000 ; P_input = P_water / eta\nSubstitution: P_water = (1000 x 9.81 x 0.05 x 20)/1000 = 9.81 kW\nCalculation: P_input = 9.81/0.70 = 14.01 kW\nAnswer: about 14 kW\nUnit: kW\nSanity check: input power must be MORE than the water power because efficiency is less than 1 — divide by eta, never multiply.', explanation:'The classic pump-power numerical; the multiply-vs-divide-by-efficiency slip is the most common mistake.' }

];
