/* ============================================================
   COURSE CATALOGUE — B.Tech CSE Semester 1
   M.D. University, Rohtak — B.Tech 1st Year H-Scheme (NEP-2020),
   effective 2025-26. Group-A CSE combination:
   Maths-I, Physics-I, PPS, EGD, BME, English + 3 labs.
   Each course drives its own topics, questions, flashcards,
   syllabus map, mock-exam pattern and study plan.
   ============================================================ */

const COURSES = [
  {
    id: 'bme',
    code: '25ESC-ME-103H',
    name: 'Basics of Mechanical Engineering',
    shortName: 'BME',
    icon: '⚙️',
    accent: 'accent-bme',
    category: 'Engineering Science Course',
    credits: 3,
    ltp: '3-0-0',
    internalMarks: 25,
    externalMarks: 50,
    examHours: 3,
    examType: 'theory',
    units: [
      { n: 1, title: 'Unit I', subtitle: 'Machine Tools & Basic Thermodynamics' },
      { n: 2, title: 'Unit II', subtitle: 'Refrigeration, A/C, Turbines & Pumps' },
      { n: 3, title: 'Unit III', subtitle: 'Power Transmission, Stress & Strain' },
      { n: 4, title: 'Unit IV', subtitle: 'Manufacturing Systems & NC/CNC' }
    ],
    exam: {
      // Q1 compulsory: 6 short parts across all units (~10 marks) +
      // 2 choice questions per unit (attempt 1) = 5 questions, 50 marks, 3 h.
      q1Parts: 6, q1TotalMarks: 10, unitQuestionMarks: 10,
      unitChoices: 2, totalMarks: 50, durationMinutes: 180,
      patternNote: '9 questions set. Q1 compulsory (6 short parts, all units). 2 questions per unit; attempt one from each. Attempt 5 questions, 50 marks, 3 hours.'
    },
    description: 'Machine tools, thermodynamics, refrigeration & air-conditioning, hydraulic machines, power transmission, stress & strain, manufacturing systems and NC/CNC.'
  },
  {
    id: 'maths',
    code: '25BSC-MATH-103H',
    name: 'Mathematics-I — Calculus & Linear Algebra',
    shortName: 'Maths-I',
    icon: '∫',
    accent: 'accent-maths',
    category: 'Basic Science Course',
    credits: 4,
    ltp: '3-1-0',
    internalMarks: 30,
    externalMarks: 70,
    examHours: 3,
    examType: 'theory',
    units: [
      { n: 1, title: 'Unit I', subtitle: 'Calculus' },
      { n: 2, title: 'Unit II', subtitle: 'Matrices' },
      { n: 3, title: 'Unit III', subtitle: 'Vector Spaces I' },
      { n: 4, title: 'Unit IV', subtitle: 'Vector Spaces II' }
    ],
    exam: {
      q1Parts: 6, q1TotalMarks: 14, unitQuestionMarks: 14,
      unitChoices: 2, totalMarks: 70, durationMinutes: 180,
      patternNote: '9 questions set. Q1 compulsory (6 short parts, all units). 2 questions per unit; attempt one from each. Attempt 5 questions, 70 marks, 3 hours.'
    },
    description: 'Indeterminate forms, mean value theorems, series expansions, curvature, Beta & Gamma functions, matrices, rank, systems of linear equations, vector spaces, rank-nullity, eigenvalues and diagonalization.'
  },
  {
    id: 'physics',
    code: '25BSC-PHY-103H',
    name: 'Physics-I — Semiconductor Physics',
    shortName: 'Physics-I',
    icon: '⚛️',
    accent: 'accent-physics',
    category: 'Basic Science Course',
    credits: 4,
    ltp: '3-1-0',
    internalMarks: 30,
    externalMarks: 70,
    examHours: 3,
    examType: 'theory',
    units: [
      { n: 1, title: 'Unit I', subtitle: 'Introduction to Quantum Mechanics' },
      { n: 2, title: 'Unit II', subtitle: 'Electronic Materials' },
      { n: 3, title: 'Unit III', subtitle: 'Semiconductors' },
      { n: 4, title: 'Unit IV', subtitle: 'Lasers' }
    ],
    exam: {
      q1Parts: 6, q1TotalMarks: 14, unitQuestionMarks: 14,
      unitChoices: 2, totalMarks: 70, durationMinutes: 180,
      patternNote: '9 questions set. Q1 compulsory (6 short parts, all units). 2 questions per unit; attempt one from each. Attempt 5 questions, 70 marks, 3 hours.'
    },
    description: 'Quantum mechanics origins, wave-particle duality, Schrödinger equation, energy bands, semiconductors, p-n junctions, optoelectronic devices and lasers.'
  },
  {
    id: 'pps',
    code: '25ESC-CSE101H',
    name: 'Programming for Problem Solving (C)',
    shortName: 'PPS',
    icon: '💻',
    accent: 'accent-pps',
    category: 'Engineering Science Course',
    credits: 3,
    ltp: '3-0-0',
    internalMarks: 25,
    externalMarks: 50,
    examHours: 3,
    examType: 'theory',
    units: [
      { n: 1, title: 'Unit I', subtitle: 'The Computer' },
      { n: 2, title: 'Unit II', subtitle: 'Problem-Solving Techniques' },
      { n: 3, title: 'Unit III', subtitle: 'Fundamentals of C' },
      { n: 4, title: 'Unit IV', subtitle: 'Advanced C Programming' }
    ],
    exam: {
      q1Parts: 6, q1TotalMarks: 10, unitQuestionMarks: 10,
      unitChoices: 2, totalMarks: 50, durationMinutes: 180,
      patternNote: '9 questions set. Q1 compulsory (6 short parts, all units). 2 questions per unit; attempt one from each. Attempt 5 questions, 50 marks, 3 hours.'
    },
    description: 'Computer fundamentals, number systems, algorithms & flowcharts, C basics, operators, control flow, arrays, strings, functions, recursion, pointers, structures, file handling and dynamic memory.'
  },
  {
    id: 'egd',
    code: '25ESC-ME-101H',
    name: 'Engineering Graphics & Design',
    shortName: 'EGD',
    icon: '📐',
    accent: 'accent-egd',
    category: 'Engineering Science Course',
    credits: 2,
    ltp: '0-0-4',
    internalMarks: 15,
    externalMarks: 35,
    examHours: 3,
    examType: 'practical-drawing',
    units: [
      { n: 1, title: 'Unit I', subtitle: 'Drawing Basics, Conic Sections & Scales' },
      { n: 2, title: 'Unit II', subtitle: 'Projection of Points & Lines' },
      { n: 3, title: 'Unit III', subtitle: 'Projection of Planes & Solids' },
      { n: 4, title: 'Unit IV', subtitle: 'Sections, Development, Isometric & CAD' }
    ],
    exam: {
      q1Parts: 6, q1TotalMarks: 10, unitQuestionMarks: 9,
      unitChoices: 2, totalMarks: 35, durationMinutes: 180,
      patternNote: 'Drawing paper: 9 questions set. Q1 compulsory (6 short parts, all units). 2 drawing questions per unit; attempt one from each. Attempt 5 questions, 35 marks, 3 hours. Assessed on sheet work — use the model answers as step checklists.'
    },
    description: 'Drawing instruments, conic sections, scales, orthographic projection of points/lines/planes/solids, sections, development of surfaces, isometric projection and CAD/BIM basics.'
  },
  {
    id: 'english',
    code: '25HSMC-ENG-101H',
    name: 'English',
    shortName: 'English',
    icon: '📝',
    accent: 'accent-english',
    category: 'Humanities & Sciences Course',
    credits: 2,
    ltp: '2-0-0',
    internalMarks: 15,
    externalMarks: 35,
    examHours: 3,
    examType: 'theory',
    units: [
      { n: 1, title: 'Unit I', subtitle: 'Basic Writing Skills & Common Errors' },
      { n: 2, title: 'Unit II', subtitle: 'Vocabulary & Grammatical Cohesion' },
      { n: 3, title: 'Unit III', subtitle: 'Oral Communication & Phonetics' },
      { n: 4, title: 'Unit IV', subtitle: 'Reading & Writing Practice' }
    ],
    exam: {
      q1Parts: 6, q1TotalMarks: 10, unitQuestionMarks: 9,
      unitChoices: 2, totalMarks: 35, durationMinutes: 180,
      patternNote: '9 questions set. Q1 compulsory (6 short parts, all units). 2 questions per unit; attempt one from each. Attempt 5 questions, 35 marks, 3 hours.'
    },
    description: 'Subject-verb agreement, verb patterns, vocabulary, tenses, voice, phonetics, prescribed essays by Vivekananda and Kalam Azad, and official letter writing.'
  },
  {
    id: 'pps-lab',
    code: '25LC-CSE101H',
    name: 'Programming for Problem Solving Lab',
    shortName: 'PPS Lab',
    icon: '⌨️',
    accent: 'accent-pps',
    category: 'Laboratory Course',
    credits: 1,
    ltp: '0-0-2',
    internalMarks: 5,
    externalMarks: 20,
    examHours: 2,
    examType: 'lab',
    units: [
      { n: 1, title: 'Experiments 1–6', subtitle: 'Components, Algorithms, Environment, Operators & Conditionals' },
      { n: 2, title: 'Experiments 7–12', subtitle: 'Loops, Series, Arrays, Matrices & Strings' },
      { n: 3, title: 'Experiments 13–18', subtitle: 'Functions, Recursion, Pointers, Structures & Files' },
      { n: 4, title: 'Virtual-Lab Modules', subtitle: 'Virtual-lab topics mapped to experiments' }
    ],
    exam: {
      q1Parts: 6, q1TotalMarks: 6, unitQuestionMarks: 5,
      unitChoices: 2, totalMarks: 20, durationMinutes: 120,
      patternNote: 'Lab exam (2 h): one compulsory short question + one programming task per experiment group. Practise writing, compiling and tracing each experiment program.'
    },
    description: '18 prescribed experiments: from identifying computer components through arrays, strings, recursion, pointers, structures, files and dynamic memory. At least 10 experiments required.'
  },
  {
    id: 'physics-lab',
    code: '25LC-PHY-103H',
    name: 'Semiconductor Physics Lab',
    shortName: 'Physics Lab',
    icon: '🔬',
    accent: 'accent-physics',
    category: 'Laboratory Course',
    credits: 1,
    ltp: '0-0-2',
    internalMarks: 5,
    externalMarks: 20,
    examHours: 2,
    examType: 'lab',
    units: [
      { n: 1, title: 'Section A', subtitle: 'Basic Measurement Experiments (1–4)' },
      { n: 2, title: 'Section B — Electronics', subtitle: 'Hall effect, Planck\'s constant, diodes & solar cells' },
      { n: 3, title: 'Section B — Electricity & Magnetism', subtitle: 'B-H curve, bridges, coils & capacitance' },
      { n: 4, title: 'Section B — Mechanics & Thermal', subtitle: 'Sonometer, e/m, Curie temperature' }
    ],
    exam: {
      q1Parts: 6, q1TotalMarks: 6, unitQuestionMarks: 5,
      unitChoices: 2, totalMarks: 20, durationMinutes: 120,
      patternNote: 'Lab exam (2 h): perform at least one experiment with readings, calculation and result; viva on formula, least count and sources of error. At least 8 experiments (3+ from Section B) required in the semester.'
    },
    description: 'Measurement instruments (Vernier, screw gauge, spherometer, multimeter) plus 15 main experiments: Hall effect, Planck\'s constant, solar cell, p-n & Zener diodes, B-H curve, bridges and more.'
  },
  {
    id: 'english-lab',
    code: '25LC-ENG-101H',
    name: 'English Language Lab',
    shortName: 'English Lab',
    icon: '🗣️',
    accent: 'accent-english',
    category: 'Laboratory Course',
    credits: 1,
    ltp: '0-0-2',
    internalMarks: 5,
    externalMarks: 20,
    examHours: 2,
    examType: 'lab',
    units: [
      { n: 1, title: 'Listening & Phonetics', subtitle: 'Listening comprehension, phonemes, IPA' },
      { n: 2, title: 'Speaking', subtitle: 'Self-introduction, conversations & dialogues' },
      { n: 3, title: 'Professional & Telephone Communication', subtitle: 'Workplace phrases, telephonic skills' },
      { n: 4, title: 'Public Speaking & Presentations', subtitle: 'Speeches, presentations, literary texts' }
    ],
    exam: {
      q1Parts: 6, q1TotalMarks: 6, unitQuestionMarks: 5,
      unitChoices: 2, totalMarks: 20, durationMinutes: 120,
      patternNote: 'Lab exam (2 h): listening passage with questions, phoneme identification, self-introduction/role-play, hypothetical telephone conversation, tag questions and a short presentation on a prescribed text.'
    },
    description: 'Listening comprehension, IPA phonetics, self & third-person introduction, conversations, workplace communication, telephone skills, speeches and formal presentations.'
  }
];

const COURSE_BY_ID = {};
COURSES.forEach(function (c) { COURSE_BY_ID[c.id] = c; });
