/* ============================================================
   UNIT III — Power Transmission, Stress & Strain
   25ESC-ME-103H
   ============================================================ */

const UNIT3_TOPICS = [

// ---------------------------------------------------------------
{
  id: 'u3-belt-drives',
  unit: 3,
  category: 'Power Transmission',
  title: 'Belt Drives',
  summary: 'Flexible-element drive using friction between a belt and pulleys.',
  overview: `Power transmission is the process of transferring mechanical power from a driving shaft (motor/engine) to a driven shaft/machine, often over some distance and with a change of speed or torque. Belt drives are the simplest and cheapest way to do this over moderate distances.`,
  working: `A belt wraps around two pulleys — one on the driving shaft, one on the driven shaft — and transmits power purely through friction between the belt and the pulley surface. Because friction is never perfect, some relative motion (slip) can occur.`,
  parts: null,
  types: [
    'Flat belt — simple rectangular cross-section; used for moderate power over larger center distances.',
    'V-belt — trapezoidal cross-section; wedges into a grooved pulley for much better grip.',
    'Circular (round) belt / rope — used for light loads or where the drive must run in different planes.'
  ],
  operations: [
    { name: 'Open belt drive', description: 'Used when both pulleys must rotate in the SAME direction; shafts are parallel.' },
    { name: 'Cross belt drive', description: 'Used when the pulleys must rotate in OPPOSITE directions; the belt crosses itself, which causes extra wear at the crossing point.' }
  ],
  formulas: [
    { formula: 'Velocity ratio = N2/N1 = D1/D2', meaning: 'N = pulley speed (rpm), D = pulley diameter; 1 = driver, 2 = driven', units: 'dimensionless', condition: 'Ignoring belt thickness and slip.' }
  ],
  diagram: { description: 'Two circles (pulleys) connected by a belt loop; for open belt draw both loop sides parallel (not crossing); for cross belt draw the two sides crossing in an X between the pulleys.', svg: null },
  examTip: `Slip vs Creep is a classic confusion pair examiners test directly — Slip is GROSS relative motion from insufficient friction (reduces velocity ratio); Creep is a much smaller, continuous relative movement caused by the belt alternately stretching and relaxing as it passes from the tight side to the slack side.`,
  commonMistake: `Treating slip and creep as the same phenomenon — they have different causes (friction shortage vs elastic stretching) even though both reduce the effective velocity ratio slightly.`,
  quickCheck: [
    { q: 'When is a cross belt drive used instead of an open belt drive?', a: 'When the two pulleys must rotate in opposite directions.' },
    { q: 'Why do V-belts grip better than flat belts?', a: 'Because of the wedging action in the grooved pulley, which increases the effective friction force for a given tension.' },
    { q: 'Differentiate slip and creep in one line each.', a: 'Slip: relative motion from insufficient friction. Creep: small continuous movement from elastic stretching/relaxing of the belt.' }
  ],
  comparisonTable: {
    title: 'Flat Belt vs V-Belt',
    columns: ['Aspect', 'Flat Belt', 'V-Belt'],
    rows: [
      ['Cross-section', 'Flat, rectangular', 'Trapezoidal (wedge shape)'],
      ['Grip', 'Lower (relies on flat friction)', 'Higher (wedging action in groove)'],
      ['Center distance', 'Suits longer distances', 'Suits shorter center distances'],
      ['Power capacity', 'Lower', 'Higher, for a given belt width'],
      ['Slip', 'More prone to slip', 'Less prone to slip']
    ]
  }
},

// ---------------------------------------------------------------
{
  id: 'u3-rope-chain-drives',
  unit: 3,
  category: 'Power Transmission',
  title: 'Rope Drives & Chain Drives',
  summary: 'Rope for long-distance heavy loads; chain for a positive (slip-free) drive.',
  overview: `Rope drives are used when large amounts of power must be transmitted over long distances. Chain drives use a series of interconnected links engaging with toothed sprockets, giving a truly POSITIVE drive with no slip at all.`,
  working: `Fibre ropes (cotton, hemp, manila) suit moderate power at low speeds; wire ropes suit high power and heavy duty applications like cranes, elevators and haulage where high strength is essential. A chain drive works like a belt drive but the sprocket teeth physically engage the chain links, so there is no possibility of frictional slip — the driven sprocket speed is always exactly determined by the tooth ratio.`,
  parts: null,
  types: [
    'Roller chain — widely used in bicycles, motorcycles and general industrial machinery.',
    'Silent (inverted-tooth) chain — used where smooth, quiet operation at higher speed is required.'
  ],
  operations: null, formulas: null,
  diagram: null,
  examTip: `List chain drive's advantages over belt drive as a set: no slip (positive drive), more compact, higher efficiency, can transmit more power, works well at both low and high speeds without efficiency loss.`,
  commonMistake: `Assuming a chain drive is always quieter/smoother than a belt — actually the opposite is often true (chains can be noisier), which is exactly why silent/inverted-tooth chains were developed.`,
  quickCheck: [
    { q: 'Why is a chain drive called a "positive drive"?', a: 'Because the sprocket teeth mechanically engage the chain links, so there is no slip — unlike a friction-based belt drive.' },
    { q: 'When would wire rope be preferred over fibre rope?', a: 'For high power/heavy duty applications needing high strength, e.g. cranes and elevators.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u3-gear-drives',
  unit: 3,
  category: 'Power Transmission',
  title: 'Gear Drives',
  summary: 'Toothed wheels for exact velocity ratio power transmission over short distances.',
  overview: `Gears are used for positive transmission of power/motion between shafts with an EXACT velocity ratio, typically over short centre distances — no slip is possible because the teeth mesh directly.`,
  working: `Different gear types are chosen based on the relative arrangement of the two shafts (parallel, intersecting, or non-intersecting/perpendicular) and the amount of speed reduction or smoothness needed.`,
  parts: null,
  types: [
    'Spur gears — teeth cut parallel to the axis; connect PARALLEL shafts; simplest and cheapest but can be noisy at high speed.',
    'Helical gears — teeth cut at an angle (helix angle) to the axis; smoother and quieter than spur gears since teeth engage gradually; can connect parallel or crossed shafts.',
    'Bevel gears — conical shape; connect INTERSECTING shafts, usually at 90°.',
    'Worm gears — a worm (screw-like) gear meshes with a worm wheel; used for large speed reductions between NON-intersecting, perpendicular shafts.'
  ],
  operations: null, formulas: null,
  diagram: { description: 'Four small sketches: spur gear (straight teeth, parallel shafts), helical gear (slanted teeth), bevel gear (two cones meeting at 90°), worm gear (a screw meshing with a toothed wheel).', svg: null },
  examTip: `Learn which shaft arrangement goes with which gear type — this exact mapping (parallel→spur/helical, intersecting→bevel, non-intersecting perpendicular→worm) is asked directly almost every year.`,
  commonMistake: `Saying helical gears are "just angled spur gears" without mentioning WHY that matters — the angled teeth engage gradually rather than all at once, which is what makes them quieter and smoother, and also introduces an axial thrust force that spur gears don't have.`,
  quickCheck: [
    { q: 'Which gear type is used for large speed reduction between non-intersecting, perpendicular shafts?', a: 'Worm gear.' },
    { q: 'Why are helical gears quieter than spur gears?', a: 'Their angled teeth engage gradually along the tooth face instead of all at once, reducing impact/noise.' }
  ],
  comparisonTable: {
    title: 'Spur vs Helical, and Bevel vs Worm',
    columns: ['Gear Type', 'Shaft arrangement', 'Key feature'],
    rows: [
      ['Spur', 'Parallel', 'Straight teeth, simple, can be noisy at speed'],
      ['Helical', 'Parallel or crossed', 'Angled teeth, smooth & quiet, produces axial thrust'],
      ['Bevel', 'Intersecting (usually 90°)', 'Conical gear bodies'],
      ['Worm', 'Non-intersecting, perpendicular', 'Very high speed reduction in one stage']
    ]
  }
},

// ---------------------------------------------------------------
{
  id: 'u3-clutches',
  unit: 3,
  category: 'Power Transmission',
  title: 'Clutches',
  summary: 'Connects/disconnects driving and driven shafts on demand, without stopping the driver.',
  overview: `A clutch is a mechanical device used to connect and disconnect a driving shaft from a driven shaft at the operator's will, WITHOUT stopping the driving shaft — essential for smoothly engaging and disengaging power, most familiarly in a car's manual gearbox.`,
  working: `Most clutches work by friction: two surfaces are pressed together (usually by springs) so that friction transmits torque from one to the other; separating the surfaces (e.g. by depressing a pedal) disengages the drive.`,
  parts: null,
  types: [
    'Single-plate friction clutch — one friction plate sandwiched between the flywheel and a spring-loaded pressure plate; the standard automobile clutch.',
    'Multi-plate friction clutch — multiple friction and pressure plates alternate, giving much more friction surface area (and hence torque capacity) in a compact size; common in motorcycles and heavy vehicles.',
    'Cone clutch — a male cone on the driving shaft engages a female cone on the driven shaft; the wedging action gives more torque capacity than a flat plate for the same axial force, but wears faster and can drag.',
    'Centrifugal clutch — engages automatically as speed rises; spring-loaded friction shoes fly outward under centrifugal force and grip the driven drum with no pedal or lever needed (common in mopeds, go-karts, chainsaws).'
  ],
  operations: null, formulas: null,
  diagram: null,
  examTip: `Learn the ONE distinguishing feature of each clutch type as a quick trigger word: single-plate = "one plate," multi-plate = "more torque, compact," cone = "wedging action," centrifugal = "automatic, no pedal."`,
  commonMistake: `Thinking a centrifugal clutch needs manual operation — its entire point is that it engages AUTOMATICALLY purely from rotational speed, with no lever or pedal at all.`,
  quickCheck: [
    { q: 'What is the main advantage of a multi-plate clutch over a single-plate clutch?', a: 'More friction surface area in a compact size, so it can transmit higher torque.' },
    { q: 'Why does a centrifugal clutch not need a pedal?', a: 'It engages automatically — spring-loaded shoes are thrown outward by centrifugal force as speed increases, gripping the drum on their own.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u3-stress-strain-intro',
  unit: 3,
  category: 'Stress & Strain',
  title: 'Stress, Strain & Their Types',
  summary: 'The internal resisting force per unit area, and the deformation it produces.',
  overview: `When an external load is applied to a solid body, internal resisting forces develop within the material, and the body deforms. Studying this relationship — stress and strain — is the foundation of the Strength of Materials.`,
  working: `Stress is the internal resisting force developed per unit cross-sectional area when a body is subjected to an external load. Strain is the ratio of change in dimension to the original dimension — a pure (dimensionless) number.`,
  parts: null,
  types: [
    'Tensile stress — develops under two equal, opposite PULLING forces; causes elongation.',
    'Compressive stress — develops under two equal, opposite PUSHING forces; causes shortening.',
    'Shear stress — develops under equal, opposite, PARALLEL forces acting tangentially on a section, causing one layer to slide over the next.',
    'Linear (longitudinal) strain — ε = δL / L (change in length ÷ original length).',
    'Lateral strain — change in a transverse dimension ÷ original transverse dimension (perpendicular to the load).',
    'Volumetric strain — change in volume ÷ original volume.',
    'Shear strain — the angular deformation (change of angle, in radians) caused by shear stress.'
  ],
  operations: null,
  formulas: [
    { formula: 'Stress, σ (or τ) = P / A', meaning: 'P = applied force, A = cross-sectional area', units: 'N/m² (Pa), or more commonly N/mm² (MPa) in mechanical engineering', condition: 'Assumes the force is applied uniformly (axial for σ, tangential for τ).' },
    { formula: 'Linear strain, ε = δL / L', meaning: 'δL = change in length, L = original length', units: 'dimensionless', condition: '—' }
  ],
  diagram: { description: 'Three small sketches: (1) tensile — a bar with two outward arrows at each end; (2) compressive — a bar with two inward arrows; (3) shear — a bar with two parallel offset arrows across a cross-section showing layers sliding.', svg: null },
  examTip: `Always state units correctly: stress in N/mm² (MPa) is standard in mechanical engineering exams — writing plain "N" (a force unit, not stress) is a very common lost mark.`,
  commonMistake: `Confusing "strain" with "stress" in casual writing — strain is dimensionless (a ratio), stress has units of pressure (force/area). Never write strain "in MPa."`,
  quickCheck: [
    { q: 'Write the formula for direct stress.', a: 'σ = P/A (force divided by cross-sectional area).' },
    { q: 'Is strain a dimensioned or dimensionless quantity?', a: 'Dimensionless — it is a ratio of two lengths (or volumes).' },
    { q: 'Which type of stress causes one layer of material to slide over an adjacent layer?', a: 'Shear stress.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u3-poisson-stress-strain-diagram',
  unit: 3,
  category: 'Stress & Strain',
  title: "Poisson's Ratio & the Stress-Strain Diagram",
  summary: 'How a material contracts sideways when stretched, and the famous mild-steel tensile test curve.',
  overview: `When a body is stretched, it elongates along the load direction but simultaneously contracts in the perpendicular (lateral) directions. Poisson's Ratio quantifies exactly how much lateral contraction accompanies a given longitudinal stretch. Plotting stress against strain for a specimen loaded to fracture gives the stress-strain diagram — one of the most-tested diagrams in this course.`,
  working: `Poisson's ratio μ (or ν) = Lateral strain / Longitudinal strain (within the elastic limit); for most metals μ lies between 0.25 and 0.35. For a ductile material like mild steel loaded gradually in tension, the stress-strain curve passes through several distinct, named points before fracture — each corresponds to a real physical change happening inside the specimen.`,
  parts: [
    { name: 'A — Proportional limit', function: 'Stress is directly proportional to strain up to this point (Hooke\'s Law holds exactly).' },
    { name: 'B — Elastic limit', function: 'The maximum stress up to which the material fully returns to its original shape on unloading — no permanent set.' },
    { name: 'C/D — Upper & lower yield point', function: 'The material begins to deform plastically with little or no increase in load; a sudden drop/fluctuation in stress is seen (only in materials like mild steel).' },
    { name: 'E — Ultimate stress', function: 'The maximum stress the material can withstand — the peak of the curve; visible necking (local reduction in cross-section) begins here.' },
    { name: 'F — Breaking/fracture stress', function: 'The stress at which the specimen finally fractures. It appears LOWER than the ultimate stress only because it is calculated using the original cross-sectional area, while the true (necked) area has actually shrunk.' }
  ],
  types: null, operations: null,
  formulas: [
    { formula: 'μ = Lateral strain / Longitudinal strain', meaning: 'Poisson\'s ratio (dimensionless)', units: 'typically 0.25–0.35 for metals', condition: 'Valid within the elastic limit only.' }
  ],
  diagram: {
    description: 'Draw stress (y-axis) vs strain (x-axis). The curve rises straight from the origin to A (proportional limit), curves very slightly to B (elastic limit, close to A), a small dip/wiggle to C then D (yield points), rises to a peak at E (ultimate stress), then curves down to F (fracture) where the specimen breaks. Label all six points A–F clearly.',
    svg: `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg">
      <line x1="60" y1="220" x2="600" y2="220" stroke="var(--ink)" stroke-width="1.5"/>
      <line x1="60" y1="220" x2="60" y2="20" stroke="var(--ink)" stroke-width="1.5"/>
      <text x="320" y="245" text-anchor="middle" font-size="12" fill="var(--ink)">Strain (ε)</text>
      <text x="20" y="120" text-anchor="middle" font-size="12" fill="var(--ink)" transform="rotate(-90 20 120)">Stress (σ)</text>
      <path d="M60,220 L200,90 L230,80 L245,95 L260,75 L400,45 L560,150" fill="none" stroke="var(--steel)" stroke-width="2.5"/>
      <circle cx="200" cy="90" r="3.5" fill="var(--brass)"/><text x="200" y="80" font-size="11" text-anchor="middle">A</text>
      <circle cx="230" cy="80" r="3.5" fill="var(--brass)"/><text x="238" y="70" font-size="11">B</text>
      <circle cx="245" cy="95" r="3.5" fill="var(--brass)"/><text x="245" y="112" font-size="11" text-anchor="middle">C</text>
      <circle cx="260" cy="75" r="3.5" fill="var(--brass)"/><text x="266" y="65" font-size="11">D</text>
      <circle cx="400" cy="45" r="3.5" fill="var(--brass)"/><text x="400" y="34" font-size="11" text-anchor="middle">E</text>
      <circle cx="560" cy="150" r="3.5" fill="var(--brass)"/><text x="560" y="168" font-size="11" text-anchor="middle">F</text>
    </svg>`
  },
  examTip: `Practise DRAWING this curve from memory with all 6 points labelled — it is one of the most reliably repeated diagram questions in the whole syllabus, and appears in the diagram-practice mode of this app.`,
  commonMistake: `Thinking fracture stress (F) is the maximum stress the material experiences — the TRUE stress at fracture is actually higher than the ultimate stress E, because necking shrinks the real cross-sectional area; F only looks lower because it's calculated on the ORIGINAL area.`,
  quickCheck: [
    { q: 'What physically begins to happen to the specimen at the ultimate stress point (E)?', a: 'Necking — a local reduction in cross-sectional area.' },
    { q: 'Between which two points does Hooke\'s Law hold exactly?', a: 'From the origin to the proportional limit (A).' },
    { q: 'Typical range of Poisson\'s ratio for metals?', a: '0.25 to 0.35.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u3-hooke-elastic-constants',
  unit: 3,
  category: 'Stress & Strain',
  title: "Hooke's Law & Elastic Constants",
  summary: 'Stress ∝ strain within the elastic limit, and the three moduli that quantify stiffness.',
  overview: `Hooke's Law states that within the elastic limit, stress is directly proportional to strain. This proportionality constant is called the modulus of elasticity, and depending on which type of stress/strain you're relating, it takes one of three names.`,
  working: `Young's Modulus (E) relates tensile/compressive stress to linear strain — the standard measure of stiffness. Modulus of Rigidity (G, sometimes C) relates shear stress to shear strain — resistance to twisting/shearing. Bulk Modulus (K) relates volumetric (hydrostatic) stress to volumetric strain — resistance to uniform compression (like being submerged in a fluid). All three are properties of the material and are related to each other and to Poisson's ratio.`,
  parts: null, types: null, operations: null,
  formulas: [
    { formula: 'σ = E · ε (Hooke\'s Law)', meaning: 'E = Young\'s modulus, the constant of proportionality', units: 'E in N/mm² (MPa) or GPa', condition: 'Valid only within the elastic limit.' },
    { formula: 'E = 2G(1 + μ)', meaning: 'Relation between Young\'s modulus, rigidity modulus and Poisson\'s ratio', units: '—', condition: 'μ = Poisson\'s ratio.' },
    { formula: 'E = 3K(1 − 2μ)', meaning: 'Relation between Young\'s modulus, bulk modulus and Poisson\'s ratio', units: '—', condition: '—' },
    { formula: 'E = 9KG / (3K + G)', meaning: 'Relation between all three elastic constants (eliminates μ)', units: '—', condition: 'Derived by combining the two relations above.' }
  ],
  diagram: null,
  examTip: `These three elastic-constant relationships are near-guaranteed for a numerical: given any two of E, G, K, μ you can find the other two — practise rearranging all three formulas, not just plugging in.`,
  commonMistake: `Mixing up which modulus goes with which stress: Young's = tension/compression, Rigidity = shear, Bulk = volumetric/hydrostatic. A very common exam trap is asking for "modulus of rigidity" and students write the Young's modulus formula.`,
  quickCheck: [
    { q: 'What does Bulk Modulus (K) relate?', a: 'Volumetric (hydrostatic) stress to volumetric strain.' },
    { q: 'Write the relation between E, G and μ.', a: 'E = 2G(1 + μ).' },
    { q: 'If E and G are known, how do you find μ?', a: 'Rearrange E = 2G(1+μ) → μ = (E/2G) − 1.' }
  ]
},

// ---------------------------------------------------------------
{
  id: 'u3-mechanical-properties',
  unit: 3,
  category: 'Stress & Strain',
  title: 'Mechanical Properties of Metals',
  summary: 'Elasticity, plasticity, ductility, malleability, toughness, hardness and more — the exam-ready definitions.',
  overview: `A metal's suitability for a job depends on a set of standard mechanical properties. Examiners frequently test whether you can tell visually-similar-sounding properties apart with a precise, one-line definition each.`,
  working: `Learn each property with a real material example — this is the fastest way to make the definitions stick and to avoid confusing the commonly paired ones.`,
  parts: [
    { name: 'Elasticity', function: 'Ability to return to the original shape after the load is removed (e.g. rubber, spring steel).' },
    { name: 'Plasticity', function: 'Ability to undergo PERMANENT deformation without fracturing (the opposite tendency to elasticity).' },
    { name: 'Ductility', function: 'Ability to be drawn into thin WIRES — large plastic deformation under TENSION (e.g. copper, mild steel).' },
    { name: 'Malleability', function: 'Ability to be hammered/rolled into thin SHEETS — large plastic deformation under COMPRESSION (e.g. gold, aluminium).' },
    { name: 'Toughness', function: 'Ability to absorb energy and withstand shock/impact loads without fracturing.' },
    { name: 'Hardness', function: 'Resistance to indentation, scratching, abrasion or wear.' },
    { name: 'Brittleness', function: 'Fractures with little or no plastic deformation — the OPPOSITE of ductility (e.g. cast iron, glass).' },
    { name: 'Stiffness', function: 'Resistance to ELASTIC deformation — directly related to the modulus of elasticity, E.' },
    { name: 'Resilience', function: 'Capacity to absorb energy elastically and release it fully upon unloading (like a spring storing/releasing energy).' },
    { name: 'Fatigue strength', function: 'Ability to withstand repeated/cyclic loading without failure, even at stresses well below the ultimate stress.' },
    { name: 'Creep', function: 'Slow, progressive PLASTIC deformation under a constant sustained load, usually at elevated temperature, over a long time.' }
  ],
  types: null, operations: null, formulas: null,
  diagram: null,
  examTip: `The five confusion-pairs below are asked almost verbatim every year — memorise them as PAIRS, not as isolated definitions.`,
  commonMistake: `Confusing toughness (energy absorption under impact) with strength (maximum stress a material can bear) — a material can be strong but brittle (low toughness), like cast iron, or tough but not the strongest, like some ductile alloys.`,
  quickCheck: [
    { q: 'What is the key difference between ductility and malleability?', a: 'Ductility = drawn into wires under tension; Malleability = rolled/hammered into sheets under compression.' },
    { q: 'How is creep different from ordinary plastic deformation?', a: 'Creep happens slowly over a long time under a CONSTANT sustained load, usually at elevated temperature, rather than from a single applied load.' },
    { q: 'Define resilience.', a: 'The capacity of a material to absorb energy elastically and release it fully when unloaded.' }
  ],
  comparisonTable: {
    title: 'The Five Classic Confusion-Pairs',
    columns: ['Pair', 'Property 1', 'Property 2'],
    rows: [
      ['Ductility vs Malleability', 'Wire-drawing under tension', 'Sheet-rolling under compression'],
      ['Hardness vs Toughness', 'Resists indentation/scratching', 'Absorbs impact energy without fracture'],
      ['Strength vs Stiffness', 'Max stress a material can bear', 'Resistance to elastic deformation (∝ E)'],
      ['Elasticity vs Plasticity', 'Returns to original shape', 'Retains permanent deformation'],
      ['Fatigue vs Creep', 'Fails under repeated/cyclic load', 'Slowly deforms under constant sustained load']
    ]
  }
}

];
