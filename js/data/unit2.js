/* ============================================================
   UNIT II — Refrigeration, Air Conditioning, Hydraulic Turbines & Pumps
   25ESC-ME-103H
   ============================================================ */

const UNIT2_TOPICS = [

// ---------------------------------------------------------------
{
  id: 'u2-refrigeration-basics',
  unit: 2,
  category: 'Refrigeration & AC',
  title: 'Refrigeration Basics & Ton of Refrigeration',
  summary: 'Moving heat from cold to hot, and the unit used to rate machines that do it.',
  overview: `Refrigeration is the process of removing heat from a low-temperature region (the refrigerated space) and rejecting it to a high-temperature region (the surroundings), so the space is kept below the surrounding temperature. Note this is the OPPOSITE of the natural direction of heat flow — which is exactly why refrigeration always requires external work input (Clausius statement, Unit I).`,
  working: `Air conditioning goes a step further than plain refrigeration: it also controls humidity, air cleanliness and air motion, for either human comfort or an industrial process. Refrigeration machines are rated by how fast they can remove heat — the standard unit for this is the Ton of Refrigeration (TR).`,
  parts: null, types: null, operations: null,
  formulas: [
    { formula: '1 TR ≈ 3.5 kW ≈ 210 kJ/min ≈ 12,000 Btu/hr', meaning: 'Rate of heat removal needed to freeze 1 ton of water at 0°C into ice at 0°C in 24 hours', units: 'kW / kJ per min / Btu per hr — all equivalent', condition: 'Standard reference definition — memorise all three equivalent values.' }
  ],
  diagram: null,
  examTip: `1 TR ≈ 3.5 kW is used as a straight conversion factor in almost every refrigeration-capacity numerical — memorise it as a number, not just a definition.`,
  commonMistake: `Confusing refrigeration (heat removal from a cold space) with cooling in general — refrigeration specifically means maintaining a space BELOW ambient temperature, requiring continuous work input.`,
  quickCheck: [
    { q: 'Define Ton of Refrigeration.', a: 'The rate of heat removal needed to freeze one ton of water at 0°C into ice at 0°C in 24 hours.' },
    { q: '1 TR equals how many kW (approx)?', a: 'Approximately 3.5 kW.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u2-cop',
  unit: 2,
  category: 'Refrigeration & AC',
  title: 'Coefficient of Performance (COP)',
  summary: 'The refrigeration equivalent of "efficiency" — and it can be greater than 1.',
  overview: `COP is the ratio of the desired refrigerating (or heating) effect to the net work input required to produce it. Unlike a heat engine's thermal efficiency (which is always < 1), COP is regularly greater than 1 — a good refrigerator moves far more heat than the electrical work it consumes.`,
  working: `For a refrigerator, the "desired effect" is the heat extracted from the cold space (Q_L). For a heat pump, the desired effect is the heat delivered to the warm space (Q_H) — even though both machines may use an identical vapour-compression cycle, they are rated differently because they are used for opposite purposes (cooling vs heating).`,
  parts: null, types: null, operations: null,
  formulas: [
    { formula: 'COP(refrigerator) = Q_L / W', meaning: 'Q_L = refrigerating effect (heat absorbed), W = net work input', units: 'dimensionless', condition: 'Q_L and W in the same energy units.' },
    { formula: 'COP(heat pump) = Q_H / W = COP(refrigerator) + 1', meaning: 'Q_H = heat rejected to the warm space', units: 'dimensionless', condition: 'Follows directly from Q_H = Q_L + W (energy balance).' }
  ],
  diagram: null,
  examTip: `Whenever a question gives COP(refrigerator), you can instantly get COP(heat pump) by adding 1 — this shortcut is worth memorising for numericals.`,
  commonMistake: `Thinking a higher COP always means "more powerful" — COP measures efficiency of energy use, not the total refrigerating capacity (which is a separate quantity, in TR or kW).`,
  quickCheck: [
    { q: 'Can COP be greater than 1? Why?', a: 'Yes — because a refrigeration cycle moves heat rather than creates it, so the heat moved can exceed the work input.' },
    { q: 'If COP(refrigerator) = 3, what is COP(heat pump) for the same cycle?', a: '4 (COP_HP = COP_R + 1).' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u2-vcr-cycle',
  unit: 2,
  category: 'Refrigeration & AC',
  title: 'Simple Vapour Compression Refrigeration Cycle',
  summary: 'The four-component loop used in almost every fridge and AC.',
  overview: `The Vapour Compression Refrigeration (VCR) cycle is the most widely used refrigeration cycle in the world — every domestic fridge and most air conditioners use it. It has exactly four components arranged in a closed loop, and the refrigerant changes phase (liquid ↔ vapour) as it moves through them.`,
  working: `The refrigerant flows continuously: Evaporator → Compressor → Condenser → Expansion valve → back to Evaporator. Each component performs one clearly defined thermodynamic process on the refrigerant.`,
  parts: [
    { name: 'Compressor', function: 'Compresses low-pressure refrigerant vapour to high pressure and high temperature (reversible adiabatic/isentropic compression, process 1–2).' },
    { name: 'Condenser', function: 'Rejects heat from the high-pressure vapour to the surroundings at constant pressure; the refrigerant condenses to a saturated liquid (process 2–3).' },
    { name: 'Expansion valve (throttle valve)', function: 'Drops the pressure and temperature of the liquid refrigerant sharply through an irreversible, constant-enthalpy throttling process (process 3–4).' },
    { name: 'Evaporator', function: 'The refrigerant absorbs heat from the refrigerated space at constant pressure and evaporates back to a dry saturated vapour — this is the actual cooling effect (process 4–1).' }
  ],
  types: null,
  operations: [
    { name: 'Compression (1–2)', description: 'Reversible adiabatic (isentropic) compression from evaporator pressure to condenser pressure.' },
    { name: 'Condensation (2–3)', description: 'Constant-pressure heat rejection; vapour condenses to saturated liquid.' },
    { name: 'Expansion (3–4)', description: 'Irreversible throttling (constant enthalpy); sharp drop in pressure and temperature.' },
    { name: 'Evaporation (4–1)', description: 'Constant-pressure heat absorption; liquid evaporates to dry saturated vapour — produces the refrigerating effect.' }
  ],
  formulas: [
    { formula: 'Refrigerating effect = h1 − h4', meaning: 'Enthalpy at evaporator exit minus enthalpy at evaporator inlet', units: 'kJ/kg', condition: 'Read h-values off the p-h diagram or refrigerant tables.' },
    { formula: 'Work of compression = h2 − h1', meaning: 'Enthalpy rise across the compressor', units: 'kJ/kg', condition: 'Isentropic compression assumed.' },
    { formula: 'COP = (h1 − h4) / (h2 − h1)', meaning: 'Refrigerating effect ÷ work input', units: 'dimensionless', condition: 'Uses the same h1, h2, h4 as above.' }
  ],
  diagram: {
    description: 'A closed loop of 4 boxes: Evaporator → Compressor → Condenser → Expansion Valve → back to Evaporator, with arrows showing refrigerant flow direction. Also sketch the cycle as a 4-point loop on a p-h diagram (pressure vertical, enthalpy horizontal): 1→2 vertical-ish line up-right (compression), 2→3 horizontal line left at high pressure (condensation), 3→4 vertical line down (throttling, constant h), 4→1 horizontal line right at low pressure (evaporation).',
    svg: `<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="70" width="130" height="60" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="95" y="105" text-anchor="middle" font-size="12" fill="var(--ink)">Evaporator</text>
      <rect x="240" y="20" width="130" height="60" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="305" y="55" text-anchor="middle" font-size="12" fill="var(--ink)">Compressor</text>
      <rect x="450" y="70" width="130" height="60" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="515" y="105" text-anchor="middle" font-size="12" fill="var(--ink)">Condenser</text>
      <rect x="240" y="120" width="130" height="60" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="305" y="145" text-anchor="middle" font-size="11" fill="var(--ink)">Expansion</text>
      <text x="305" y="160" text-anchor="middle" font-size="11" fill="var(--ink)">Valve</text>
      <line x1="160" y1="90" x2="240" y2="55" stroke="var(--steel)" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="370" y1="50" x2="450" y2="90" stroke="var(--steel)" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="515" y1="130" x2="370" y2="150" stroke="var(--steel)" stroke-width="2" marker-end="url(#arrow)"/>
      <line x1="240" y1="155" x2="160" y2="115" stroke="var(--steel)" stroke-width="2" marker-end="url(#arrow)"/>
      <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--steel)"/></marker></defs>
    </svg>`
  },
  examTip: `Draw the 4-block loop diagram FIRST in any VCR question, even if not asked explicitly — most mark schemes give 1–2 marks just for a correctly labelled, correctly arrowed diagram.`,
  commonMistake: `Saying the expansion valve "does work" — throttling is NOT a work-producing/consuming process; enthalpy stays constant across it (h3 = h4).`,
  quickCheck: [
    { q: 'List the four components of a VCR cycle in order.', a: 'Compressor → Condenser → Expansion valve → Evaporator (then back to compressor).' },
    { q: 'Which process in the cycle is at constant enthalpy?', a: 'Expansion (throttling) through the expansion valve.' },
    { q: 'Which process actually produces the cooling effect?', a: 'Evaporation, in the evaporator.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u2-psychrometry',
  unit: 2,
  category: 'Refrigeration & AC',
  title: 'Psychrometry',
  summary: 'The science of moist air properties — DBT, WBT, DPT, humidity and the psychrometric chart.',
  overview: `Psychrometry deals with the properties of moist air (a mixture of dry air and water vapour) and how those properties are used to analyse air-conditioning processes.`,
  working: `Several temperatures and humidity measures together describe the state of moist air. Any TWO of these properties are enough to find all the others using a psychrometric chart.`,
  parts: [
    { name: 'Dry Bulb Temperature (DBT)', function: 'Temperature measured by an ordinary thermometer, unaffected by moisture in the air.' },
    { name: 'Wet Bulb Temperature (WBT)', function: 'Temperature shown by a thermometer whose bulb is covered by a wet wick exposed to air flow; lower than DBT due to evaporative cooling (equal to DBT only at 100% RH).' },
    { name: 'Dew Point Temperature (DPT)', function: 'The temperature at which moisture in the air just begins to condense when cooled at constant pressure.' },
    { name: 'Humidity Ratio (Specific Humidity)', function: 'Mass of water vapour present per unit mass of dry air (kg vapour / kg dry air).' },
    { name: 'Relative Humidity (RH)', function: 'Ratio of actual mass of water vapour in the air to the mass required for saturation at the same temperature, given as a %.' }
  ],
  types: null,
  operations: [
    { name: 'Sensible heating/cooling', description: 'Temperature changes with no change in moisture content — a horizontal line on the chart.' },
    { name: 'Humidification/dehumidification', description: 'Moisture content changes.' },
    { name: 'Mixing of air streams', description: 'Combining two air streams — final state lies on the straight line joining the two points on the chart, weighted by mass.' }
  ],
  formulas: null,
  diagram: { description: 'Sketch a simplified psychrometric chart: DBT along the x-axis, Humidity Ratio along the y-axis, curved saturation (100% RH) line at the top-left boundary, with RH curves fanning out below it. Mark a sample state point and show how DPT is found by moving horizontally left to the saturation curve.', svg: null },
  examTip: `Remember: WBT = DBT only when RH = 100%. This single fact is often tested as a quick conceptual question.`,
  commonMistake: `Confusing Humidity Ratio (an absolute quantity, kg vapour/kg dry air) with Relative Humidity (a % comparison to saturation) — they are NOT the same thing and are not even in the same units.`,
  quickCheck: [
    { q: 'What temperature does the wet bulb thermometer measure, and why is it usually lower than DBT?', a: 'It measures the cooling effect of evaporation from a wet wick — evaporation absorbs latent heat, so WBT < DBT unless air is already saturated.' },
    { q: 'Define Dew Point Temperature.', a: 'The temperature at which moisture in the air just begins to condense, at constant pressure.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u2-human-comfort',
  unit: 2,
  category: 'Refrigeration & AC',
  title: 'Human Comfort',
  summary: 'What air-conditioning is actually trying to achieve for people.',
  overview: `Human comfort in an air-conditioned space depends on more than just air temperature — it is a combination of several physical factors acting together on the human body's sense of warmth.`,
  working: `Effective temperature is an index that combines the effects of DBT, humidity and air motion into a single number representing the sensation of warmth a person feels. The generally accepted comfort zone for sedentary occupants is around 22–25°C DBT with 40–60% relative humidity.`,
  parts: null, types: null, operations: null, formulas: null,
  diagram: null,
  examTip: `List all 5 comfort factors (air temperature, RH, air velocity, radiant heat, clothing/activity level) — a common 2-mark question just asks you to "list factors affecting human comfort."`,
  commonMistake: `Reducing "comfort" purely to temperature — examiners specifically want humidity, air velocity, radiant heat and occupant factors (clothing, activity) mentioned too.`,
  quickCheck: [
    { q: 'Name the factors affecting human comfort in an air-conditioned space.', a: 'Air temperature, relative humidity, air velocity, radiant heat, and the occupant\'s clothing/activity level.' },
    { q: 'What is the typical comfort zone DBT range?', a: 'About 22–25°C.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u2-turbines-intro',
  unit: 2,
  category: 'Hydraulic Machines',
  title: 'Hydraulic Turbines — Introduction & Classification',
  summary: 'Converts water\'s energy into shaft power; classified by action, flow direction and head.',
  overview: `A hydraulic turbine is a rotary machine that converts the kinetic and pressure energy of flowing or falling water into mechanical (shaft) energy — typically used to drive an electrical generator in a hydroelectric power plant.`,
  working: `Key terms: Gross head is the difference in water level between the reservoir (headrace) and the tailrace. Net (effective) head is the gross head minus losses (friction in penstock, etc.). Discharge is the volume flow rate of water through the turbine.`,
  parts: null,
  types: [
    'By action of water on blades: Impulse turbine (Pelton wheel) and Reaction turbine (Francis, Kaplan).',
    'By direction of flow: Tangential, Radial, Axial, Mixed flow.',
    'By head available: High head (Pelton), Medium head (Francis), Low head (Kaplan).',
    'By specific speed: Low, medium and high specific-speed turbines.'
  ],
  operations: null, formulas: null,
  diagram: null,
  examTip: `The "Impulse vs Reaction" distinction is the single most important concept in this whole topic — get it perfect: impulse turbines act on a jet at atmospheric pressure (no pressure change across the runner); reaction turbines have the runner always full of water, with pressure change occurring within the runner itself.`,
  commonMistake: `Thinking "impulse" and "reaction" describe the water source (like high head vs low head) — they actually describe the MECHANISM by which the runner extracts energy from the water.`,
  quickCheck: [
    { q: 'What quantity is "gross head minus losses" called?', a: 'Net (effective) head.' },
    { q: 'Name one impulse turbine and one reaction turbine.', a: 'Impulse: Pelton wheel. Reaction: Francis or Kaplan turbine.' }
  ],
  comparisonTable: {
    title: 'Impulse Turbine vs Reaction Turbine',
    columns: ['Aspect', 'Impulse Turbine (e.g. Pelton)', 'Reaction Turbine (e.g. Francis, Kaplan)'],
    rows: [
      ['Pressure change across runner', 'None — atmospheric throughout', 'Pressure drops as water flows through runner'],
      ['Runner condition', 'Only partially in contact with water (jet strikes buckets)', 'Runner is always completely full of water'],
      ['Energy conversion location', 'All P.E./K.E. converted to K.E. by the nozzle before hitting runner', 'Conversion happens partly in guide vanes, partly within the runner'],
      ['Head range', 'High head', 'Low to medium head']
    ]
  }
},

// ---------------------------------------------------------------
{
  id: 'u2-pelton',
  unit: 2,
  category: 'Hydraulic Machines',
  title: 'Pelton Turbine (Impulse Turbine)',
  summary: 'High-head, low-discharge turbine driven by a single high-velocity jet.',
  overview: `The Pelton wheel is the classic impulse turbine, used where a very high head (above ~250 m) but relatively low discharge is available — typical of mountainous hydroelectric sites.`,
  working: `The entire available head is converted into kinetic energy by a nozzle BEFORE the water touches the runner — so pressure stays atmospheric throughout the runner (this is what makes it an "impulse" machine). The high-velocity jet strikes the splitter (central ridge) of each double-hemispherical (spoon-shaped) bucket, is deflected through nearly 160°–165°, and the resulting change in momentum of the water produces the driving force that spins the wheel.`,
  parts: [
    { name: 'Runner (wheel)', function: 'Rotating disc fitted with a series of buckets around its periphery.' },
    { name: 'Buckets', function: 'Double-hemispherical, spoon-shaped; split the jet symmetrically and reverse its direction to maximise momentum change.' },
    { name: 'Nozzle', function: 'Converts the available head into a high-velocity jet directed tangentially onto the buckets.' },
    { name: 'Spear / needle', function: 'Slides inside the nozzle to regulate the flow (and hence the power output) by changing the jet\'s cross-sectional area.' }
  ],
  types: null, operations: null,
  formulas: [
    { formula: 'Jet velocity, V = Cv √(2gH)', meaning: 'Cv = coefficient of velocity of the nozzle, H = net head', units: 'V in m/s, H in m', condition: 'Cv is typically close to 0.98.' }
  ],
  diagram: { description: 'A circular wheel with several spoon-shaped double-hemispherical buckets around the rim; a nozzle to one side firing a jet tangentially at the buckets; a spear inside the nozzle shown as a thin rod controlling the opening.', svg: null },
  examTip: `Head range and "double-hemispherical bucket" wording are frequently tested exact-phrase items — use "double-hemispherical (spoon-shaped)" precisely, not just "curved."`,
  commonMistake: `Saying the runner is "always full of water" — that is true for reaction turbines, NOT for an impulse turbine like Pelton, where only the buckets currently under the jet are wetted.`,
  quickCheck: [
    { q: 'Through roughly what angle is the jet deflected by a Pelton bucket?', a: 'About 160°–165°.' },
    { q: 'What controls the flow rate (and hence power) in a Pelton turbine?', a: 'The spear/needle inside the nozzle.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u2-francis',
  unit: 2,
  category: 'Hydraulic Machines',
  title: 'Francis Turbine (Reaction Turbine)',
  summary: 'Medium-head, mixed-flow reaction turbine — the most widely used turbine type.',
  overview: `The Francis turbine is a reaction turbine used for medium head (roughly 60–250 m) and medium discharge applications. It is the most common turbine type in hydroelectric plants worldwide.`,
  working: `Water enters a spiral (scroll) casing that distributes it evenly around the runner, passes through guide vanes (wicket gates, fixed to a stay ring) that control the flow rate and direction onto the runner, and then flows through the runner — radially inward and axially downward (a "mixed flow" pattern) — to the draft tube below. Unlike the Pelton wheel, part of the pressure energy is converted to kinetic energy WITHIN the runner itself (this is the "reaction" principle), and the runner remains completely full of water at all times.`,
  parts: [
    { name: 'Spiral (scroll) casing', function: 'Distributes water uniformly around the full circumference of the guide vanes.' },
    { name: 'Guide vanes / wicket gates', function: 'Adjustable vanes on a stay ring that regulate the quantity and direction of water entering the runner.' },
    { name: 'Runner', function: 'Curved vanes through which water flows radially inward then axially downward, producing shaft torque.' },
    { name: 'Draft tube', function: 'Gradually expanding tube below the runner that recovers some kinetic energy from the exiting water, allowing the runner to be set above tailrace level.' }
  ],
  types: null, operations: null, formulas: null,
  diagram: null,
  examTip: `The Pelton/Francis/Kaplan comparison table below is one of the highest-yield items in the entire unit — it can single-handedly answer a 5-mark comparison question.`,
  commonMistake: `Describing Francis flow as purely "radial" — it is technically mixed flow (radially inward, then turning axial before the draft tube).`,
  quickCheck: [
    { q: 'What is the function of guide vanes in a Francis turbine?', a: 'They regulate the quantity and direction of water flowing onto the runner.' },
    { q: 'Is the Francis turbine impulse or reaction type?', a: 'Reaction type.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u2-kaplan',
  unit: 2,
  category: 'Hydraulic Machines',
  title: 'Kaplan Turbine (Reaction Turbine)',
  summary: 'Low-head, high-discharge axial-flow turbine with adjustable propeller blades.',
  overview: `The Kaplan turbine is an axial-flow reaction turbine, used for low head (below ~60 m) but high discharge sites — think of large rivers with a gentle drop, rather than mountain streams.`,
  working: `Water flows parallel to the shaft axis through an adjustable-pitch, propeller-type runner (similar in shape to a ship's propeller), after passing through guide vanes. Because the runner blades can pivot to change pitch, a Kaplan turbine maintains good efficiency across a wide range of loads — a major advantage over fixed-blade designs.`,
  parts: [
    { name: 'Guide vanes', function: 'Direct and regulate flow onto the runner, as in a Francis turbine.' },
    { name: 'Runner (propeller-type, adjustable blades)', function: 'Axial-flow blades whose pitch can be adjusted to suit varying load/flow conditions.' },
    { name: 'Draft tube', function: 'Recovers kinetic energy from water leaving the runner, as in Francis turbines.' }
  ],
  types: null, operations: null, formulas: null,
  diagram: null,
  examTip: `Always mention "adjustable-pitch blades" for Kaplan — it is the single distinguishing feature examiners look for versus a plain axial-flow propeller turbine.`,
  commonMistake: `Mixing up Kaplan (adjustable blades, axial flow, LOW head) with Francis (fixed runner, mixed flow, MEDIUM head) in comparison answers.`,
  quickCheck: [
    { q: 'What is the key mechanical feature that lets a Kaplan turbine stay efficient over a wide load range?', a: 'Adjustable-pitch runner blades.' },
    { q: 'In what direction does water flow through a Kaplan runner?', a: 'Axially (parallel to the shaft).' }
  ],
  comparisonTable: {
    title: 'Pelton vs Francis vs Kaplan',
    columns: ['Aspect', 'Pelton', 'Francis', 'Kaplan'],
    rows: [
      ['Type', 'Impulse', 'Reaction', 'Reaction'],
      ['Head', 'High (> 250 m)', 'Medium (60–250 m)', 'Low (< 60 m)'],
      ['Flow direction', 'Tangential', 'Radial → Axial (mixed)', 'Axial'],
      ['Discharge', 'Low', 'Medium', 'High'],
      ['Runner condition', 'Not always full of water', 'Always full of water', 'Always full of water']
    ]
  }
},

// ---------------------------------------------------------------
{
  id: 'u2-centrifugal-pump',
  unit: 2,
  category: 'Hydraulic Machines',
  title: 'Centrifugal Pump',
  summary: 'Uses a rotating impeller to fling water outward, converting kinetic energy to pressure.',
  overview: `A centrifugal pump converts mechanical (shaft) energy into hydraulic energy using a rotating impeller — it is essentially the reverse energy-conversion process of a reaction turbine (shaft energy IN → fluid pressure energy OUT).`,
  working: `The rotating impeller imparts centrifugal (kinetic) energy to the water at its centre (eye). As the water moves outward through the impeller vanes and into the surrounding casing (volute or diffuser type), its velocity is progressively converted into pressure energy, and it is discharged through the delivery pipe at high pressure.`,
  parts: [
    { name: 'Impeller', function: 'Rotating set of curved vanes that accelerates the water outward.' },
    { name: 'Casing (volute or diffuser)', function: 'Surrounds the impeller and converts the water\'s velocity head into pressure head as the flow area gradually increases.' },
    { name: 'Suction pipe & delivery pipe', function: 'Bring water into the impeller eye and carry pressurised water away, respectively.' }
  ],
  types: [
    'By casing type: Volute casing, Diffuser (turbine) casing.',
    'By number of impellers: Single-stage, Multi-stage (impellers in series, for higher head).',
    'By flow direction: Radial flow, Axial flow, Mixed flow.'
  ],
  operations: null, formulas: null,
  diagram: null,
  examTip: `State explicitly that a centrifugal pump does the OPPOSITE energy conversion to a reaction turbine — this single sentence often earns bonus conceptual marks.`,
  commonMistake: `Forgetting that a centrifugal pump must be primed (casing filled with liquid) before starting — it cannot draw air, unlike some other pump types.`,
  quickCheck: [
    { q: 'What energy conversion happens inside a centrifugal pump\'s casing?', a: 'Kinetic (velocity) energy of the water is converted into pressure energy as the flow area increases.' },
    { q: 'Name the two common casing types for a centrifugal pump.', a: 'Volute casing and diffuser (turbine) casing.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u2-reciprocating-pump',
  unit: 2,
  category: 'Hydraulic Machines',
  title: 'Reciprocating Pump',
  summary: 'A piston/plunger displaces water positively, stroke by stroke.',
  overview: `A reciprocating pump is a positive-displacement pump — instead of relying on centrifugal action, a piston or plunger physically pushes a fixed volume of liquid out with each stroke.`,
  working: `A piston/plunger moves inside a cylinder, driven via a crank and connecting rod from a rotating shaft. On the suction stroke, the piston retreats, creating a vacuum that draws water in through the suction (non-return) valve. On the delivery stroke, the piston advances, closing the suction valve and forcing water out through the delivery (non-return) valve.`,
  parts: [
    { name: 'Cylinder & Piston/Plunger', function: 'Piston moves within the cylinder to alternately create suction and delivery strokes.' },
    { name: 'Crank & connecting rod', function: 'Convert the rotary motion of the driving shaft into the piston\'s reciprocating (back-and-forth) motion.' },
    { name: 'Suction valve & Delivery valve', function: 'Non-return valves that open/close automatically to allow flow in only one direction each.' }
  ],
  types: [
    'Single-acting — delivers water once per revolution (only one side of the piston does useful work).',
    'Double-acting — delivers water twice per revolution (both sides of the piston do useful work).',
    'Single-cylinder and multi-cylinder types (more cylinders give smoother, more continuous flow).'
  ],
  operations: null, formulas: null,
  diagram: null,
  examTip: `The Centrifugal vs Reciprocating comparison is a very common 5-mark question — lead with "positive displacement vs centrifugal action" as the core distinguishing idea.`,
  commonMistake: `Assuming reciprocating pumps give continuous flow — they inherently deliver pulsating flow (flow varies through each stroke), unlike a centrifugal pump.`,
  quickCheck: [
    { q: 'What type of pump is a reciprocating pump — positive displacement or centrifugal action?', a: 'Positive displacement.' },
    { q: 'How many delivery strokes per revolution does a double-acting reciprocating pump give?', a: 'Two.' }
  ],
  comparisonTable: {
    title: 'Centrifugal Pump vs Reciprocating Pump',
    columns: ['Aspect', 'Centrifugal Pump', 'Reciprocating Pump'],
    rows: [
      ['Working principle', 'Centrifugal action (impeller)', 'Positive displacement (piston/plunger)'],
      ['Flow', 'Continuous, smooth', 'Pulsating'],
      ['Discharge', 'High discharge, low-medium head', 'Low discharge, high head'],
      ['Suitability for viscous liquids', 'Poor', 'Good'],
      ['Priming required', 'Yes', 'No (self-priming, generally)']
    ]
  }
}

];
