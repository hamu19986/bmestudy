/* ============================================================
   OFFICIAL SYLLABUS MAP — 25ESC-ME-103H
   Maps every syllabus line item to the topic id(s) that cover it.
   Used by the Master Checklist page and by validate-content.js.
   ============================================================ */

const SYLLABUS = [
  {
    unit: 1,
    title: 'Unit I — Machine Tools & Basic Thermodynamics',
    items: [
      { label: 'Lathe', topics: ['u1-lathe'] },
      { label: 'Shaper', topics: ['u1-shaper'] },
      { label: 'Planer', topics: ['u1-planer'] },
      { label: 'Milling machine', topics: ['u1-milling'] },
      { label: 'Drilling machine', topics: ['u1-drilling'] },
      { label: 'Slotter', topics: ['u1-slotter'] },
      { label: 'Metal cutting', topics: ['u1-metalcutting'] },
      { label: 'Thermodynamics: system, boundary, surroundings, properties, state, path, process, cycle', topics: ['u1-thermo-basics'] },
      { label: 'Work and heat', topics: ['u1-work-heat'] },
      { label: 'Temperature and Zeroth law', topics: ['u1-zeroth-law'] },
      { label: 'First law, internal energy, enthalpy', topics: ['u1-first-law'] },
      { label: 'Second law: Kelvin-Planck and Clausius statements', topics: ['u1-second-law'] },
      { label: 'Entropy and Third law', topics: ['u1-entropy-third-law'] },
      { label: 'Basic numerical problems (thermodynamics)', topics: ['u1-thermo-numericals'] }
    ]
  },
  {
    unit: 2,
    title: 'Unit II — Refrigeration, Air Conditioning, Hydraulic Turbines & Pumps',
    items: [
      { label: 'Refrigeration, rating of machines, Ton of Refrigeration', topics: ['u2-refrigeration-basics'] },
      { label: 'Coefficient of Performance (COP)', topics: ['u2-cop'] },
      { label: 'Simple vapour compression refrigeration cycle (compressor, condenser, expansion valve, evaporator, p-h & T-s diagrams)', topics: ['u2-vcr-cycle'] },
      { label: 'Psychrometry: DBT, WBT, DPT, humidity ratio, relative humidity, psychrometric chart', topics: ['u2-psychrometry'] },
      { label: 'Human comfort', topics: ['u2-human-comfort'] },
      { label: 'Hydraulic turbines — classification', topics: ['u2-turbines-intro'] },
      { label: 'Pelton turbine', topics: ['u2-pelton'] },
      { label: 'Francis turbine', topics: ['u2-francis'] },
      { label: 'Kaplan turbine', topics: ['u2-kaplan'] },
      { label: 'Centrifugal pump', topics: ['u2-centrifugal-pump'] },
      { label: 'Reciprocating pump', topics: ['u2-reciprocating-pump'] }
    ]
  },
  {
    unit: 3,
    title: 'Unit III — Power Transmission, Stress & Strain',
    items: [
      { label: 'Belt drives: flat, V-belt, open/cross drive, slip, creep', topics: ['u3-belt-drives'] },
      { label: 'Rope drives and chain drives', topics: ['u3-rope-chain-drives'] },
      { label: 'Gear drives: spur, helical, bevel, worm', topics: ['u3-gear-drives'] },
      { label: 'Clutches: single plate, multi plate, cone, centrifugal', topics: ['u3-clutches'] },
      { label: 'Stress and strain: tensile, compressive, shear stress; linear, lateral, volumetric, shear strain', topics: ['u3-stress-strain-intro'] },
      { label: "Poisson's ratio and the stress-strain diagram (proportional limit, elastic limit, yield point, ultimate & fracture stress)", topics: ['u3-poisson-stress-strain-diagram'] },
      { label: "Hooke's law, Young's modulus, modulus of rigidity, bulk modulus, elastic constant relationships", topics: ['u3-hooke-elastic-constants'] },
      { label: 'Mechanical properties: elasticity, plasticity, ductility, malleability, toughness, hardness, brittleness, stiffness, resilience, fatigue, creep', topics: ['u3-mechanical-properties'] }
    ]
  },
  {
    unit: 4,
    title: 'Unit IV — Manufacturing Systems & Numerical Control',
    items: [
      { label: 'Manufacturing systems: job shop, batch, mass, continuous/flow production', topics: ['u4-manufacturing-systems'] },
      { label: 'NC fundamentals: part program, Machine Control Unit, machine tool, advantages', topics: ['u4-nc-fundamentals'] },
      { label: 'Classification of NC: point-to-point, straight-cut, contouring; open-loop, closed-loop', topics: ['u4-nc-classification'] },
      { label: 'NC vs CNC: control, program storage, flexibility, editing, diagnostics, accuracy, cost, multiple programs', topics: ['u4-nc-vs-cnc'] }
    ]
  }
];
