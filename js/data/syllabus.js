/* ============================================================
   OFFICIAL SYLLABUS MAP — B.Tech CSE Semester 1 (MDU H-Scheme 2025-26)
   SYLLABUS[courseId] = [ { unit, title, items: [{label, topics:[ids]}] } ]
   Used by the Master Checklist page and by validate-content.js.
   ============================================================ */

const SYLLABUS = {
  /* ---------------- BME — 25ESC-ME-103H ---------------- */
  bme: [
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
        { label: 'Simple vapour compression refrigeration cycle', topics: ['u2-vcr-cycle'] },
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
        { label: 'Stress and strain: types of stress and strain', topics: ['u3-stress-strain-intro'] },
        { label: "Poisson's ratio and the stress-strain diagram", topics: ['u3-poisson-stress-strain-diagram'] },
        { label: "Hooke's law, Young's modulus, modulus of rigidity, bulk modulus, elastic constant relationships", topics: ['u3-hooke-elastic-constants'] },
        { label: 'Mechanical properties of metals', topics: ['u3-mechanical-properties'] }
      ]
    },
    {
      unit: 4,
      title: 'Unit IV — Manufacturing Systems & Numerical Control',
      items: [
        { label: 'Manufacturing systems: job shop, batch, mass, continuous/flow production', topics: ['u4-manufacturing-systems'] },
        { label: 'NC fundamentals: part program, Machine Control Unit, machine tool, advantages', topics: ['u4-nc-fundamentals'] },
        { label: 'Classification of NC: point-to-point, straight-cut, contouring; open-loop, closed-loop', topics: ['u4-nc-classification'] },
        { label: 'NC vs CNC: control, program storage, flexibility, editing, diagnostics, accuracy, cost', topics: ['u4-nc-vs-cnc'] }
      ]
    }
  ],

  /* ---------------- Mathematics-I — 25BSC-MATH-103H ---------------- */
  maths: [
    {
      unit: 1,
      title: 'Unit I — Calculus',
      items: [
        { label: 'Indeterminate forms and L\'Hospital\'s Rule', topics: ['m1-lhospital'] },
        { label: 'Maxima and minima of a single-variable function', topics: ['m1-maxima-minima'] },
        { label: 'Rolle\'s Theorem', topics: ['m1-rolle'] },
        { label: 'Lagrange\'s Mean Value Theorem and Cauchy\'s Mean Value Theorem', topics: ['m1-mvt-cauchy'] },
        { label: 'Taylor\'s and Maclaurin\'s theorems with remainder; Taylor and Maclaurin series', topics: ['m1-taylor-maclaurin'] },
        { label: 'Curvature, evolutes and involutes', topics: ['m1-curvature-evolutes'] },
        { label: 'Beta and Gamma functions and their properties', topics: ['m1-beta-gamma'] },
        { label: 'Applications of definite integrals: surface area and volume of solids of revolution', topics: ['m1-solids-revolution'] }
      ]
    },
    {
      unit: 2,
      title: 'Unit II — Matrices',
      items: [
        { label: 'Matrices and vectors: addition, scalar multiplication, matrix multiplication', topics: ['m2-matrix-basics'] },
        { label: 'Determinants and elementary transformations', topics: ['m2-determinants'] },
        { label: 'Inverse of a matrix', topics: ['m2-inverse'] },
        { label: 'Rank of a matrix, normal form, echelon form', topics: ['m2-rank-echelon'] },
        { label: 'Systems of linear equations, linear independence, Cramer\'s Rule', topics: ['m2-linear-systems'] },
        { label: 'Gauss elimination and Gauss-Jordan elimination', topics: ['m2-gauss'] }
      ]
    },
    {
      unit: 3,
      title: 'Unit III — Vector Spaces I',
      items: [
        { label: 'Definition of vector space, subspaces', topics: ['m3-vector-spaces'] },
        { label: 'Linear span, linear dependence and independence', topics: ['m3-span-dependence'] },
        { label: 'Basis and dimension', topics: ['m3-basis-dimension'] },
        { label: 'Linear transformations/maps: range, kernel, rank, nullity', topics: ['m3-linear-maps'] },
        { label: 'Rank-Nullity Theorem, inverse of a linear transformation', topics: ['m3-rank-nullity'] },
        { label: 'Matrix associated with a linear map, composition of linear maps', topics: ['m3-matrix-of-map'] }
      ]
    },
    {
      unit: 4,
      title: 'Unit IV — Vector Spaces II',
      items: [
        { label: 'Eigenvalues and eigenvectors', topics: ['m4-eigenvalues'] },
        { label: 'Symmetric, skew-symmetric and orthogonal matrices', topics: ['m4-special-matrices'] },
        { label: 'Eigen bases and diagonalization', topics: ['m4-diagonalization'] },
        { label: 'Inner-product spaces, orthogonal sets and orthogonal complements', topics: ['m4-inner-product'] },
        { label: 'Orthonormal sets and the Gram-Schmidt orthogonalization process', topics: ['m4-gram-schmidt'] }
      ]
    }
  ],

  /* ---------------- Physics-I — 25BSC-PHY-103H ---------------- */
  physics: [
    {
      unit: 1,
      title: 'Unit I — Introduction to Quantum Mechanics',
      items: [
        { label: 'Limitations of classical mechanics, black-body radiation, Planck\'s radiation law', topics: ['p1-blackbody'] },
        { label: 'Photoelectric effect', topics: ['p1-photoelectric'] },
        { label: 'Compton effect', topics: ['p1-compton'] },
        { label: 'Wave-particle duality and de Broglie\'s hypothesis', topics: ['p1-debroglie'] },
        { label: 'Heisenberg uncertainty principle', topics: ['p1-uncertainty'] },
        { label: 'Time-dependent and time-independent Schrödinger wave equation', topics: ['p1-schrodinger'] },
        { label: 'Physical significance of wave function ψ, particle in a one-dimensional box', topics: ['p1-particle-box'] }
      ]
    },
    {
      unit: 2,
      title: 'Unit II — Electronic Materials',
      items: [
        { label: 'Free-electron theory and the Drude model', topics: ['p2-free-electron'] },
        { label: 'Kronig-Penney model, origin of band gap, energy bands in solids', topics: ['p2-kronig-penney'] },
        { label: 'E-k diagram, direct and indirect band gaps', topics: ['p2-ek-diagram'] },
        { label: 'Metals, semiconductors and insulators', topics: ['p2-material-classes'] },
        { label: 'Density of states, occupation probability, Fermi level', topics: ['p2-fermi-level'] },
        { label: 'Effective mass and phonons', topics: ['p2-effective-mass-phonons'] }
      ]
    },
    {
      unit: 3,
      title: 'Unit III — Semiconductors',
      items: [
        { label: 'Intrinsic and extrinsic semiconductors', topics: ['p3-intrinsic-extrinsic'] },
        { label: 'Dependence of Fermi level on carrier concentration and temperature', topics: ['p3-fermi-dependence'] },
        { label: 'Carrier transport: diffusion and drift', topics: ['p3-transport'] },
        { label: 'p-n junction', topics: ['p3-pn-junction'] },
        { label: 'Heterojunctions; metal-semiconductor junctions: ohmic and Schottky', topics: ['p3-junctions-metal'] },
        { label: 'Photoconductivity and the photovoltaic effect', topics: ['p3-photoconductivity'] },
        { label: 'Optoelectronic devices: photoconductive cell, photodiode, solar cell, LED', topics: ['p3-optoelectronic'] }
      ]
    },
    {
      unit: 4,
      title: 'Unit IV — Lasers',
      items: [
        { label: 'Einstein\'s theory: absorption, spontaneous and stimulated emission; A and B coefficients', topics: ['p4-einstein-coefficients'] },
        { label: 'Population inversion and pumping', topics: ['p4-population-inversion'] },
        { label: 'Two-, three- and four-level laser systems', topics: ['p4-level-systems'] },
        { label: 'Characteristics of laser beam', topics: ['p4-characteristics'] },
        { label: 'Gas laser: He-Ne laser; solid-state laser: ruby laser', topics: ['p4-he-ne-ruby'] },
        { label: 'Semiconductor laser and applications of lasers', topics: ['p4-semiconductor-laser'] }
      ]
    }
  ],

  /* ---------------- PPS — 25ESC-CSE101H ---------------- */
  pps: [
    {
      unit: 1,
      title: 'Unit I — The Computer',
      items: [
        { label: 'Functional units of a computer, block diagram', topics: ['c1-functional-units'] },
        { label: 'Data, information, classification, characteristics, advantages, limitations and applications of computers', topics: ['c1-classification'] },
        { label: 'CPU, primary memory, secondary memory, memory hierarchy, memory units and interconversion', topics: ['c1-memory'] },
        { label: 'Computer software, classification of software, operating system', topics: ['c1-software'] },
        { label: 'Number systems: binary, octal, decimal, hexadecimal; conversions and binary arithmetic', topics: ['c1-number-systems'] },
        { label: 'ASCII, BCD, EBCDIC, Excess-3 code, Gray code', topics: ['c1-codes'] }
      ]
    },
    {
      unit: 2,
      title: 'Unit II — Problem-Solving Techniques',
      items: [
        { label: 'Steps for solving logical and numerical problems', topics: ['c2-problem-steps'] },
        { label: 'Algorithms: definition, characteristics, developing algorithms', topics: ['c2-algorithms'] },
        { label: 'Flowcharts: concept, representation, solving problems', topics: ['c2-flowcharts'] },
        { label: 'Pseudocode for logical and numerical problems', topics: ['c2-pseudocode'] },
        { label: 'Programming languages and language translators: interpreter, assembler, compiler', topics: ['c2-translators'] },
        { label: 'Compilation process, executing a program, syntax vs logical errors, files generated during C program lifecycle', topics: ['c2-compilation'] }
      ]
    },
    {
      unit: 3,
      title: 'Unit III — Fundamentals of C',
      items: [
        { label: 'History of C, why C, character set, whitespace, escape sequences, format specifiers', topics: ['c3-c-intro'] },
        { label: 'Tokens, keywords, variables, constants, identifiers, special symbols, header files', topics: ['c3-tokens'] },
        { label: 'Data types and type casting', topics: ['c3-data-types'] },
        { label: 'Operators, expressions, precedence and associativity', topics: ['c3-operators'] },
        { label: 'Decision-making statements; solving problems such as roots of a quadratic equation', topics: ['c3-decisions'] },
        { label: 'Loops and iterative problem solving', topics: ['c3-loops'] },
        { label: 'One-dimensional and multidimensional arrays', topics: ['c3-arrays'] },
        { label: 'Strings and standard built-in string functions', topics: ['c3-strings'] },
        { label: 'Searching and sorting: linear search, binary search, bubble sort', topics: ['c3-search-sort'] }
      ]
    },
    {
      unit: 4,
      title: 'Unit IV — Advanced C Programming',
      items: [
        { label: 'Functions: need, types, call by value and call by reference', topics: ['c4-functions'] },
        { label: 'Console input/output functions', topics: ['c4-io'] },
        { label: 'Preprocessor and preprocessor directives', topics: ['c4-preprocessor'] },
        { label: 'Storage classes in C', topics: ['c4-storage-classes'] },
        { label: 'Recursion: factorial, Fibonacci, Ackermann function', topics: ['c4-recursion'] },
        { label: 'Structures and unions; passing structures to functions; self-referential structures', topics: ['c4-structures'] },
        { label: 'Pointers and generic (void) pointers; linked-list concept', topics: ['c4-pointers'] },
        { label: 'File handling: file operations and built-in file functions', topics: ['c4-files'] },
        { label: 'Dynamic memory: malloc, calloc, free, realloc', topics: ['c4-dynamic-memory'] },
        { label: 'Basic time complexity and space complexity', topics: ['c4-complexity'] }
      ]
    }
  ],

  /* ---------------- EGD — 25ESC-ME-101H ---------------- */
  egd: [
    {
      unit: 1,
      title: 'Unit I — Introduction, Conic Sections & Scales',
      items: [
        { label: 'Principles and significance of engineering graphics, drawing instruments, lettering', topics: ['g1-drawing-basics'] },
        { label: 'Conic sections: rectangular hyperbola, cycloid, epicycloid, hypocycloid, involute', topics: ['g1-conics'] },
        { label: 'Scales: representative fraction, plain, diagonal, scale of chords, vernier scales', topics: ['g1-scales'] }
      ]
    },
    {
      unit: 2,
      title: 'Unit II — Projection of Points & Lines',
      items: [
        { label: 'Projection fundamentals: methods, planes of projection, four quadrants, first/third-angle, reference line, symbols, orthographic projection', topics: ['g2-projection-basics'] },
        { label: 'Projection of points in all four quadrants', topics: ['g2-points'] },
        { label: 'Projection of lines: parallel, contained, perpendicular, inclined to planes; traces of lines', topics: ['g2-lines'] }
      ]
    },
    {
      unit: 3,
      title: 'Unit III — Projection of Planes & Solids',
      items: [
        { label: 'Projection of planes: perpendicular/inclined to reference planes', topics: ['g3-planes'] },
        { label: 'Projection of solids: types, simple positions', topics: ['g3-solids-simple'] },
        { label: 'Solids with axis inclined to one or both reference planes (H.P. and V.P.)', topics: ['g3-solids-inclined'] }
      ]
    },
    {
      unit: 4,
      title: 'Unit IV — Sections, Development, Isometric & CAD',
      items: [
        { label: 'Section of solids: sectional planes, true shape of section', topics: ['g4-sections'] },
        { label: 'Development of surfaces: cube, prisms, cylinders, pyramids, cone', topics: ['g4-development'] },
        { label: 'Isometric projection: axes, lines, planes, scale, views; conversion to orthographic', topics: ['g4-isometric'] },
        { label: 'Module 5 — Computer Graphics: CAD software theory, menus, toolbars, drawing aids, isometric views in CAD, introduction to BIM', topics: ['g4-cad-bim'] }
      ]
    }
  ],

  /* ---------------- English — 25HSMC-ENG-101H ---------------- */
  english: [
    {
      unit: 1,
      title: 'Unit I — Basic Writing Skills & Common Errors',
      items: [
        { label: 'Subject-verb agreement and noun-pronoun agreement', topics: ['e1-agreement'] },
        { label: 'Governance of nouns through prepositions', topics: ['e1-prepositions'] },
        { label: 'Basic verb patterns: V, SV, SVO, SVOO, SVC, SVOC, SVOA', topics: ['e1-verb-patterns'] }
      ]
    },
    {
      unit: 2,
      title: 'Unit II — Vocabulary & Grammatical Cohesion',
      items: [
        { label: 'Vocabulary building and one-word substitutions', topics: ['e2-vocabulary'] },
        { label: 'Commonly used idioms; referring to time in language', topics: ['e2-idioms-time'] },
        { label: 'Tenses, active voice and passive voice', topics: ['e2-tenses-voice'] },
        { label: 'Creating grammatical cohesion', topics: ['e2-cohesion'] }
      ]
    },
    {
      unit: 3,
      title: 'Unit III — Oral Communication & Phonetics',
      items: [
        { label: 'Basic phonetics: vowels, consonants, phonemes, syllables', topics: ['e3-phonetics'] },
        { label: 'Transcription of words and pronunciation', topics: ['e3-transcription'] }
      ]
    },
    {
      unit: 4,
      title: 'Unit IV — Reading & Writing Practice',
      items: [
        { label: '"The Secret of Work" — Swami Vivekananda; "Patriotism beyond Politics and Religion" — Abdul Kalam Azad', topics: ['e4-literary-texts'] },
        { label: 'Official letters on issues concerning students\' academic and social life', topics: ['e4-official-letters'] }
      ]
    }
  ],

  /* ---------------- PPS Lab — 25LC-CSE101H ---------------- */
  'pps-lab': [
    {
      unit: 1,
      title: 'Experiments 1–6 — Components, Algorithms, Environment, Operators & Conditionals',
      items: [
        { label: '1. Physical identification/study of computer components', topics: ['lab-pps-components'] },
        { label: '2. Formulation of simple algorithms for arithmetic and logical problems', topics: ['lab-pps-algorithms'] },
        { label: '3. Familiarization with the programming environment', topics: ['lab-pps-environment'] },
        { label: '4. Simple computational problems using operators', topics: ['lab-pps-operators'] },
        { label: '5. Problems involving loops and conditional statements', topics: ['lab-pps-loops-conditionals'] },
        { label: '6. Program to find roots of a quadratic equation', topics: ['lab-pps-quadratic'] }
      ]
    },
    {
      unit: 2,
      title: 'Experiments 7–12 — Iteration, Arrays, Matrices & Strings',
      items: [
        { label: '7. Iterative problems: sum of series and similar computations', topics: ['lab-pps-series'] },
        { label: '8. One-dimensional array manipulation', topics: ['lab-pps-arrays-1d'] },
        { label: '9. Multidimensional array manipulation', topics: ['lab-pps-arrays-2d'] },
        { label: '10. Matrix problems', topics: ['lab-pps-matrix'] },
        { label: '11. String operations', topics: ['lab-pps-strings'] },
        { label: '12. Simple functions', topics: ['lab-pps-functions'] }
      ]
    },
    {
      unit: 3,
      title: 'Experiments 13–18 — Recursion, Pointers, Structures, Files & Dynamic Memory',
      items: [
        { label: '13. Recursive problems', topics: ['lab-pps-recursion'] },
        { label: '14. Pointers', topics: ['lab-pps-pointers'] },
        { label: '15. Structures', topics: ['lab-pps-structures'] },
        { label: '16–17. File operations and file handling using built-in C functions', topics: ['lab-pps-files'] },
        { label: '18. Dynamic memory allocation: malloc, calloc, free, realloc', topics: ['lab-pps-dynamic'] }
      ]
    },
    {
      unit: 4,
      title: 'Virtual-Lab Modules',
      items: [
        { label: 'Expression evaluation, basic and advanced control flow', topics: ['lab-pps-vl-control'] },
        { label: 'Numerical approximation, functions, pointers, arrays, structures, recursion, problem-solving lab', topics: ['lab-pps-vl-topics'] }
      ]
    }
  ],

  /* ---------------- Physics Lab — 25LC-PHY-103H ---------------- */
  'physics-lab': [
    {
      unit: 1,
      title: 'Section A — Basic Measurement Experiments',
      items: [
        { label: '1. Least count of Vernier calipers; measure thickness of an object', topics: ['lab-phy-vernier'] },
        { label: '2. Least count of screw gauge; measure diameter of a wire', topics: ['lab-phy-screw-gauge'] },
        { label: '3. Least count of spherometer; radius of curvature of a convex surface', topics: ['lab-phy-spherometer'] },
        { label: '4. Test and measure electronic devices using a multimeter', topics: ['lab-phy-multimeter'] }
      ]
    },
    {
      unit: 2,
      title: 'Section B — Electronics & Optoelectronics',
      items: [
        { label: '5. Hall effect in semiconductors; measurement of Hall coefficient', topics: ['lab-phy-hall'] },
        { label: '9. Verify inverse-square law using a photovoltaic cell', topics: ['lab-phy-inverse-square'] },
        { label: '10. Determine Planck\'s constant using a photocell', topics: ['lab-phy-planck'] },
        { label: '11. Study solar-cell characteristics; determine fill factor', topics: ['lab-phy-solar-cell'] },
        { label: '14. Forward and reverse characteristics of p-n junction diode', topics: ['lab-phy-pn-diode'] },
        { label: '15. Reverse characteristics of Zener diode and voltage regulation', topics: ['lab-phy-zener'] }
      ]
    },
    {
      unit: 3,
      title: 'Section B — Electricity & Magnetism',
      items: [
        { label: '7. Study magnetic properties using B-H curve', topics: ['lab-phy-bh-curve'] },
        { label: '8. Determine Curie temperature using dielectric setup', topics: ['lab-phy-curie'] },
        { label: '16. Determine unknown resistance using a Post Office Box', topics: ['lab-phy-pob'] },
        { label: '17. Magnetic-field variation along the axis of a current-carrying circular coil', topics: ['lab-phy-coil-field'] },
        { label: '18. Determine unknown capacitance using flashing and quenching of Ne/Ar bulb', topics: ['lab-phy-capacitance-ne'] },
        { label: '19. Compare capacitance of two capacitors using De Sauty\'s bridge', topics: ['lab-phy-de-sauty'] }
      ]
    },
    {
      unit: 4,
      title: 'Section B — Mechanics & Thermal',
      items: [
        { label: '6. Determine AC mains frequency using a sonometer', topics: ['lab-phy-sonometer'] },
        { label: '12. Determine e/m of electron using the helical method', topics: ['lab-phy-em'] },
        { label: '13. Determine temperature coefficient of platinum using Griffith bridge', topics: ['lab-phy-griffith'] }
      ]
    }
  ],

  /* ---------------- English Language Lab — 25LC-ENG-101H ---------------- */
  'english-lab': [
    {
      unit: 1,
      title: 'Listening & Phonetics',
      items: [
        { label: 'Listening comprehension: listening to passages and answering questions', topics: ['lab-eng-listening'] },
        { label: 'Recognition of phonemes, IPA, identification of sounds in words', topics: ['lab-eng-phonemes'] }
      ]
    },
    {
      unit: 2,
      title: 'Speaking',
      items: [
        { label: 'Self-introduction and introducing another person', topics: ['lab-eng-introductions'] },
        { label: 'Everyday conversations, dialogues and common social situations', topics: ['lab-eng-conversations'] }
      ]
    },
    {
      unit: 3,
      title: 'Professional & Telephone Communication',
      items: [
        { label: 'Workplace communication: standard phrases, sentences and professional situations', topics: ['lab-eng-workplace'] },
        { label: 'Telephonic communication and hypothetical telephone conversations; appropriate responses', topics: ['lab-eng-telephone'] }
      ]
    },
    {
      unit: 4,
      title: 'Public Speaking & Presentations',
      items: [
        { label: 'Welcome, introduction, felicitation and farewell speeches', topics: ['lab-eng-speeches'] },
        { label: 'Formal presentations and presenting the prescribed literary texts', topics: ['lab-eng-presentations'] }
      ]
    }
  ]
};
