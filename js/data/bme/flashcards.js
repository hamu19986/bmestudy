/* ============================================================
   FLASHCARDS — front/back pairs, tagged by unit and category
   ============================================================ */

const FLASHCARDS = [
  // Unit I — Machine tools
  { id: 'fc1', unit: 1, category: 'Machine Tools', front: 'What is a lathe?', back: 'A machine tool that removes material from a rotating workpiece using a tool fed parallel/perpendicular to the axis.' },
  { id: 'fc2', unit: 1, category: 'Machine Tools', front: 'On a shaper, which stroke cuts?', back: 'The forward stroke. The return stroke is idle and faster (quick return mechanism).' },
  { id: 'fc3', unit: 1, category: 'Machine Tools', front: 'Planer: what reciprocates?', back: 'The workpiece (on the table) — the tool stays essentially stationary.' },
  { id: 'fc4', unit: 1, category: 'Machine Tools', front: 'Difference: drilling vs boring', back: 'Drilling originates a new hole; boring enlarges/finishes an existing one.' },
  { id: 'fc5', unit: 1, category: 'Machine Tools', front: 'Slotter: cutting direction of the ram?', back: 'Vertical — cuts on the downward stroke, used for internal profiles.' },
  { id: 'fc6', unit: 1, category: 'Machine Tools', front: 'Orthogonal vs oblique cutting', back: 'Orthogonal: cutting edge ⟂ to travel direction (2-D). Oblique: edge inclined (3-D, more realistic).' },
  { id: 'fc7', unit: 1, category: 'Machine Tools', front: 'When do discontinuous chips form?', back: 'Machining brittle materials, or ductile materials at low cutting speed.' },
  { id: 'fc8', unit: 1, category: 'Machine Tools', front: 'Which lathe part engages for thread cutting?', back: 'The lead screw, via the half-nut.' },
  // Unit I — Thermodynamics
  { id: 'fc9', unit: 1, category: 'Thermodynamics', front: 'Define a closed system.', back: 'No mass crosses the boundary, but energy (heat/work) can.' },
  { id: 'fc10', unit: 1, category: 'Thermodynamics', front: 'Zeroth Law statement', back: 'If two bodies are each in thermal equilibrium with a third body, they are in equilibrium with each other.' },
  { id: 'fc11', unit: 1, category: 'Thermodynamics', front: 'First Law (cyclic process)', back: '∮δQ = ∮δW — net heat transfer equals net work transfer over a cycle.' },
  { id: 'fc12', unit: 1, category: 'Thermodynamics', front: 'Define enthalpy.', back: 'H = U + pV — total energy of a flow system.' },
  { id: 'fc13', unit: 1, category: 'Thermodynamics', front: 'Kelvin-Planck statement', back: 'No heat engine can convert 100% of absorbed heat from a single reservoir into work, in a cycle.' },
  { id: 'fc14', unit: 1, category: 'Thermodynamics', front: 'Clausius statement', back: 'Heat cannot flow unaided from a colder to a hotter body.' },
  { id: 'fc15', unit: 1, category: 'Thermodynamics', front: 'Principle of increase of entropy', back: 'For an isolated system, ΔS ≥ 0.' },
  { id: 'fc16', unit: 1, category: 'Thermodynamics', front: 'Third Law statement', back: 'Entropy of a pure, perfect crystalline substance is zero at absolute zero (0 K).' },
  { id: 'fc17', unit: 1, category: 'Thermodynamics', front: 'Isothermal work formula', back: 'W = p₁V₁ ln(V₂/V₁)' },
  { id: 'fc18', unit: 1, category: 'Thermodynamics', front: 'Are heat and work properties?', back: 'No — they are path functions (inexact differentials), unlike U and H which are point functions.' },
  // Unit II — Refrigeration & AC
  { id: 'fc19', unit: 2, category: 'Refrigeration', front: '1 Ton of Refrigeration ≈ ?', back: '≈ 3.5 kW ≈ 210 kJ/min ≈ 12,000 Btu/hr' },
  { id: 'fc20', unit: 2, category: 'Refrigeration', front: 'COP(heat pump) in terms of COP(refrigerator)', back: 'COP(HP) = COP(ref.) + 1' },
  { id: 'fc21', unit: 2, category: 'Refrigeration', front: 'Four components of the VCR cycle, in order', back: 'Compressor → Condenser → Expansion valve → Evaporator' },
  { id: 'fc22', unit: 2, category: 'Refrigeration', front: 'Which VCR process is at constant enthalpy?', back: 'Expansion (throttling), through the expansion valve.' },
  { id: 'fc23', unit: 2, category: 'Refrigeration', front: 'Define Relative Humidity.', back: 'Ratio of actual mass of water vapour in air to the mass required for saturation at the same temperature (%).' },
  { id: 'fc24', unit: 2, category: 'Refrigeration', front: 'When does WBT = DBT?', back: 'Only when relative humidity = 100%.' },
  // Unit II — Turbines & pumps
  { id: 'fc25', unit: 2, category: 'Turbines & Pumps', front: 'Impulse vs reaction turbine — key difference', back: 'Impulse: pressure stays atmospheric across the runner (Pelton). Reaction: pressure drops within the runner, which stays full of water (Francis, Kaplan).' },
  { id: 'fc26', unit: 2, category: 'Turbines & Pumps', front: 'Pelton turbine — head range', back: 'High head (> 250 m), low discharge.' },
  { id: 'fc27', unit: 2, category: 'Turbines & Pumps', front: 'Kaplan turbine — defining feature', back: 'Axial flow with adjustable-pitch propeller blades, for low head, high discharge.' },
  { id: 'fc28', unit: 2, category: 'Turbines & Pumps', front: 'Francis turbine — flow pattern', back: 'Mixed flow: radially inward, then axially downward to the draft tube.' },
  { id: 'fc29', unit: 2, category: 'Turbines & Pumps', front: 'Centrifugal pump vs reciprocating pump: working principle', back: 'Centrifugal: rotating impeller (kinetic → pressure). Reciprocating: positive displacement (piston/plunger).' },
  { id: 'fc30', unit: 2, category: 'Turbines & Pumps', front: 'Double-acting reciprocating pump — deliveries per revolution?', back: 'Two (delivers on both piston strokes).' },
  // Unit III — Power transmission
  { id: 'fc31', unit: 3, category: 'Power Transmission', front: 'Slip vs Creep (belt)', back: 'Slip: relative motion from insufficient friction. Creep: small continuous movement from elastic stretch/relax of the belt.' },
  { id: 'fc32', unit: 3, category: 'Power Transmission', front: 'Why do V-belts grip better than flat belts?', back: 'Wedging action in the grooved pulley increases effective friction.' },
  { id: 'fc33', unit: 3, category: 'Power Transmission', front: 'Why is a chain drive called "positive"?', back: 'Sprocket teeth mechanically engage the chain — no slip is possible.' },
  { id: 'fc34', unit: 3, category: 'Power Transmission', front: 'Worm gear: shaft arrangement', back: 'Non-intersecting, perpendicular shafts — used for large speed reduction.' },
  { id: 'fc35', unit: 3, category: 'Power Transmission', front: 'Bevel gear: shaft arrangement', back: 'Intersecting shafts, usually at 90°.' },
  { id: 'fc36', unit: 3, category: 'Power Transmission', front: 'Centrifugal clutch — how does it engage?', back: 'Automatically — spring-loaded shoes fly outward with rotational speed and grip the drum, no pedal needed.' },
  // Unit III — Stress & strain
  { id: 'fc37', unit: 3, category: 'Stress & Strain', front: 'Direct stress formula', back: 'σ = P / A (force ÷ cross-sectional area).' },
  { id: 'fc38', unit: 3, category: 'Stress & Strain', front: "Hooke's Law", back: 'σ = E·ε, valid only within the elastic limit.' },
  { id: 'fc39', unit: 3, category: 'Stress & Strain', front: "Poisson's ratio formula", back: 'μ = Lateral strain / Longitudinal strain' },
  { id: 'fc40', unit: 3, category: 'Stress & Strain', front: 'Stress-strain diagram: point of maximum stress?', back: 'Ultimate stress (E) — necking begins here.' },
  { id: 'fc41', unit: 3, category: 'Stress & Strain', front: 'Why is fracture stress (F) lower than ultimate stress (E)?', back: 'It is calculated on the ORIGINAL area, while necking has shrunk the true area.' },
  { id: 'fc42', unit: 3, category: 'Stress & Strain', front: 'E, G, μ relation', back: 'E = 2G(1 + μ)' },
  { id: 'fc43', unit: 3, category: 'Stress & Strain', front: 'E, K, μ relation', back: 'E = 3K(1 − 2μ)' },
  { id: 'fc44', unit: 3, category: 'Stress & Strain', front: 'Ductility vs Malleability', back: 'Ductility: drawn into wire under tension. Malleability: rolled into sheets under compression.' },
  { id: 'fc45', unit: 3, category: 'Stress & Strain', front: 'Fatigue vs Creep', back: 'Fatigue: fails under repeated/cyclic load. Creep: slow deformation under constant sustained load (often at high temperature).' },
  { id: 'fc46', unit: 3, category: 'Stress & Strain', front: 'Toughness vs Hardness', back: 'Toughness: absorbs impact energy without fracturing. Hardness: resists indentation/scratching.' },
  { id: 'fc47', unit: 3, category: 'Stress & Strain', front: 'Strength vs Stiffness', back: 'Strength: max stress a material can bear. Stiffness: resistance to elastic deformation (∝ E).' },
  // Unit IV — Manufacturing & NC
  { id: 'fc48', unit: 4, category: 'Manufacturing & NC', front: 'Job shop vs Mass production', back: 'Job shop: small qty, high variety, general-purpose machines. Mass: large qty, standardised, special-purpose machines.' },
  { id: 'fc49', unit: 4, category: 'Manufacturing & NC', front: 'Three basic components of an NC system', back: 'Part program, Machine Control Unit (MCU), Machine tool.' },
  { id: 'fc50', unit: 4, category: 'Manufacturing & NC', front: 'PTP control — used for?', back: 'Point-to-Point: operations where only the end position matters, e.g. drilling.' },
  { id: 'fc51', unit: 4, category: 'Manufacturing & NC', front: 'Contouring control — used for?', back: 'Complex curved/angular profiles via simultaneous coordinated multi-axis motion, e.g. die/cam milling.' },
  { id: 'fc52', unit: 4, category: 'Manufacturing & NC', front: 'Open-loop vs closed-loop NC', back: 'Open-loop: no feedback on actual position. Closed-loop: uses encoders/transducers to verify & correct position.' },
  { id: 'fc53', unit: 4, category: 'Manufacturing & NC', front: 'NC vs CNC: program storage', back: 'NC: punched tape, re-read every job. CNC: stored in computer memory, instantly recalled/edited.' },
  { id: 'fc54', unit: 4, category: 'Manufacturing & NC', front: 'NC vs CNC: diagnostics', back: 'NC has none. CNC has built-in self-diagnostics.' },
  // Added coverage — Unit I
  { id: 'fc55', unit: 1, category: 'Machine Tools', front: 'Shaper vs Planer vs Slotter — what reciprocates where?', back: 'Shaper: the TOOL reciprocates (small work). Planer: the WORKPIECE reciprocates (large work). Slotter: the tool reciprocates VERTICALLY (internal profiles).' },
  { id: 'fc56', unit: 1, category: 'Machine Tools', front: 'Name the three chip types', back: 'Continuous (ductile + high speed, good finish), Discontinuous (brittle material or low speed), Continuous with built-up edge (ductile + friction welding onto tool face).' },
  { id: 'fc57', unit: 1, category: 'Thermodynamics', front: 'Intensive vs extensive property — examples?', back: 'Intensive: independent of mass (pressure, temperature, density). Extensive: depends on mass (volume, internal energy, enthalpy).' },
  { id: 'fc58', unit: 1, category: 'Thermodynamics', front: 'Classify: isobaric, isochoric, isothermal, adiabatic', back: 'Isobaric: p constant. Isochoric: V constant (no pdV work). Isothermal: T constant. Adiabatic: no heat transfer (δQ = 0).' },
  { id: 'fc59', unit: 1, category: 'Thermodynamics', front: 'Adiabatic vs isothermal — which is which on the p-V diagram?', back: 'The adiabatic curve is STEEPER than the isothermal through the same point (pV^γ falls faster than pV).' },
  // Added coverage — Unit II
  { id: 'fc60', unit: 2, category: 'Refrigeration', front: 'DBT vs WBT vs DPT', back: 'Dry-bulb: ordinary air temperature. Wet-bulb: thermometer with wet wick (evaporative cooling). Dew point: temperature at which air becomes saturated and condensation starts.' },
  { id: 'fc61', unit: 2, category: 'Refrigeration', front: 'When is DPT = WBT = DBT?', back: 'At 100% relative humidity (saturated air) — all three temperatures coincide.' },
  { id: 'fc62', unit: 2, category: 'Turbines & Pumps', front: 'Turbine selection by specific speed (N_s)', back: 'Low N_s: Pelton (high head). Medium N_s: Francis (medium head). High N_s: Kaplan (low head, high discharge).' },
  { id: 'fc63', unit: 2, category: 'Turbines & Pumps', front: 'What does a draft tube do?', back: 'Recovers kinetic energy at the runner exit as pressure and lets a reaction turbine sit above the tailrace without losing head.' },
  { id: 'fc64', unit: 2, category: 'Turbines & Pumps', front: 'What is priming a pump?', back: 'Filling the casing and suction pipe with water before starting a centrifugal pump — it cannot create enough suction on air alone.' },
  // Added coverage — Unit III
  { id: 'fc65', unit: 3, category: 'Power Transmission', front: 'Belt vs chain vs gear — one-line each', back: 'Belt: friction, long centres, allows slip. Chain: positive engagement, no slip, needs lubrication. Gear: positive, compact, any shaft arrangement, most precise.' },
  { id: 'fc66', unit: 3, category: 'Power Transmission', front: 'Which gear pair for non-intersecting perpendicular shafts?', back: 'Worm and worm wheel — also gives a very large speed reduction in one stage.' },
  { id: 'fc67', unit: 3, category: 'Stress & Strain', front: 'Volumetric strain under uniaxial stress', back: 'ΔV/V = (σ/E)(1 − 2μ) — a stretched bar usually gets thinner, so volume change is smaller than linear strain suggests.' },
  // Added coverage — Unit IV
  { id: 'fc68', unit: 4, category: 'Manufacturing & NC', front: 'Match: prototype shop / seasonal clothing / car assembly / oil refinery', back: 'Job shop / Batch / Mass / Continuous-flow production — variety falls and volume rises along that order.' },
  { id: 'fc69', unit: 4, category: 'Manufacturing & NC', front: 'Straight-cut NC control — used for?', back: 'Parallel to machine axes only, at a controlled feed rate — e.g. square shoulder milling, simple stepped cuts.' },
  { id: 'fc70', unit: 4, category: 'Manufacturing & NC', front: 'Why is CNC more flexible than NC?', back: 'Programs live in computer memory: edit at the machine, store many programs, add diagnostics — NC re-reads punched tape for every job.' }
];
