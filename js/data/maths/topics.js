/* ============================================================
   MATHEMATICS-I — TOPICS  (25BSC-MATH-103H)          [CONTENT PENDING]
   ------------------------------------------------------------
   Fill this file with MATHS_UNIT1_TOPICS … MATHS_UNIT4_TOPICS.
   Schema per topic (match js/data/bme/unit1.js objects):
   {
     id: 'm1-lhospital',            // must equal a syllabus.js topic id
     course: 'maths',
     unit: 1,
     category: 'Calculus',
     title: "L'Hospital's Rule",
     summary: 'One-line summary shown on topic cards.',
     overview: `Beginner "what is it / why do we need it".`,
     working: `Step-by-step "how it works" + solved method.`,
     parts: null, types: null, operations: null,
     formulas: [ { formula, meaning, units, condition } ],
     diagram: { description: 'What to draw in an exam.', svg: null },
     examTip: `...`, commonMistake: `...`,
     quickCheck: [ { q, a } ],
     applications: null, extraNotes: null
   }
   Unit ids: m1-* (unit 1), m2-* (unit 2), m3-* (unit 3), m4-* (unit 4).
   See js/data/syllabus.js → SYLLABUS.maths for the exact topic ids.
   ============================================================ */

const MATHS_UNIT1_TOPICS = [
  // Unit I — Calculus: m1-lhospital, m1-maxima-minima, m1-rolle,
  // m1-mvt-cauchy, m1-taylor-maclaurin, m1-curvature-evolutes,
  // m1-beta-gamma, m1-solids-revolution
];

const MATHS_UNIT2_TOPICS = [
  // Unit II — Matrices: m2-matrix-basics, m2-determinants, m2-inverse,
  // m2-rank-echelon, m2-linear-systems, m2-gauss
];

const MATHS_UNIT3_TOPICS = [
  // Unit III — Vector Spaces I: m3-vector-spaces, m3-span-dependence,
  // m3-basis-dimension, m3-linear-maps, m3-rank-nullity, m3-matrix-of-map
];

const MATHS_UNIT4_TOPICS = [
  // Unit IV — Vector Spaces II: m4-eigenvalues, m4-special-matrices,
  // m4-diagonalization, m4-inner-product, m4-gram-schmidt
];
