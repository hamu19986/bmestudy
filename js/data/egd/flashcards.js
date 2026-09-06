/* ============================================================
   ENGINEERING GRAPHICS & DESIGN — FLASHCARDS
   Source: content/04-Engineering-Graphics-Design.md
   ============================================================ */

const EGD_FLASHCARDS = [
/* -------- Unit I -------- */
{ id:'egfc1', course:'egd', unit:1, topic:'g1-drawing-basics', category:'Definition', front:'Standard lettering style in engineering drawings?', back:'Single-stroke (Gothic) lettering — vertical or 75° inclined — uniform and legible on every sheet.' },
{ id:'egfc2', course:'egd', unit:1, topic:'g1-drawing-basics', category:'Exam Trap', front:'Line weights: outlines vs dimension lines?', back:'Outlines thick (~0.5–0.7 mm); dimension/construction lines thin (~0.2–0.3 mm).' },
{ id:'egfc3', course:'egd', unit:1, topic:'g1-conics', category:'Memory Trick', front:'Eccentricities of circle, ellipse, parabola, hyperbola?', back:'0, <1, =1, >1 respectively — parabola is exactly 1.' },
{ id:'egfc4', course:'egd', unit:1, topic:'g1-conics', category:'Difference', front:'Epicycloid vs hypocycloid?', back:'Epi = rolling OUTSIDE the base circle; hypo = rolling INSIDE. The involute is a taut thread unwound from a circle.' },
{ id:'egfc5', course:'egd', unit:1, topic:'g1-scales', category:'Definition', front:'Representative Fraction (R.F.)?', back:'R.F. = drawing size / actual size, dimensionless, both in the same unit (e.g. 1:50).' },
{ id:'egfc6', course:'egd', unit:1, topic:'g1-scales', category:'Difference', front:'Plain scale vs diagonal scale?', back:'Plain: two units. Diagonal: three units, using diagonal subdivisions for finer precision. Scale of chords measures angles; vernier reads fractions.' },

/* -------- Unit II -------- */
{ id:'egfc7', course:'egd', unit:2, topic:'g2-projection-basics', category:'Definition', front:'First-angle vs third-angle projection?', back:'First-angle: object BETWEEN observer and plane (India/BIS/Europe). Third-angle: plane between observer and object (USA). Each has a distinct truncated-cone symbol.' },
{ id:'egfc8', course:'egd', unit:2, topic:'g2-projection-basics', category:'Definition', front:'What is the xy reference line?', back:'The intersection of HP and VP — all view distances are measured from it after the planes are unfolded flat.' },
{ id:'egfc9', course:'egd', unit:2, topic:'g2-points', category:'Memory Trick', front:'Quadrant positions of a point?', back:'I: above HP + front of VP; II: above HP + behind VP; III: below HP + behind VP; IV: below HP + front of VP.' },
{ id:'egfc10', course:'egd', unit:2, topic:'g2-points', category:'Exam Trap', front:'Where does the top view of a point above HP appear (first-angle, unfolded)?', back:'BELOW the xy line — unfolding flips the intuition.' },
{ id:'egfc11', course:'egd', unit:2, topic:'g2-lines', category:'Concept', front:'When is a line\'s true length visible in a standard view?', back:'Only when the line is PARALLEL to that plane; inclined-to-both lines show foreshortened views — true length needs the two-stage auxiliary construction.' },
{ id:'egfc12', course:'egd', unit:2, topic:'g2-lines', category:'Definition', front:'What are the traces of a line?', back:'HT — where the extended line meets HP; VT — where it meets VP.' },

/* -------- Unit III -------- */
{ id:'egfc13', course:'egd', unit:3, topic:'g3-planes', category:'Concept', front:'Where does a plane\'s true shape appear?', back:'Only in the view where the plane surface is PARALLEL to the reference plane.' },
{ id:'egfc14', course:'egd', unit:3, topic:'g3-solids-inclined', category:'Algorithm', front:'Strategy for axis inclined to both HP and VP?', back:'Two stages: draw the solid in a simpler position satisfying one inclination, then re-project/tilt for the second (auxiliary-plane method).' },
{ id:'egfc15', course:'egd', unit:3, topic:'g3-solids-simple', category:'Exam Trap', front:'First step in any solids problem?', back:'Identify the solid TYPE (prism/pyramid/cylinder/cone) and the AXIS orientation exactly as stated — misreading it ruins the answer.' },

/* -------- Unit IV -------- */
{ id:'egfc16', course:'egd', unit:4, topic:'g4-sections', category:'Exam Trap', front:'Sectional view vs true shape of section?', back:'Two DIFFERENT views: the sectional view is foreshortened; the true shape needs a separate auxiliary plane parallel to the cutting plane.' },
{ id:'egfc17', course:'egd', unit:4, topic:'g4-development', category:'Difference', front:'Parallel-line vs radial-line development?', back:'Parallel-line: prisms/cylinders (surface lines parallel to axis). Radial-line: pyramids/cones (lines converge to apex → sector/fan). Not interchangeable.' },
{ id:'egfc18', course:'egd', unit:4, topic:'g4-development', category:'Formula', front:'Development of a cylinder?', back:'A rectangle: width = circumference πD, height = cylinder height h.' },
{ id:'egfc19', course:'egd', unit:4, topic:'g4-isometric', category:'Formula', front:'Isometric axes and scale?', back:'Axes 120° apart (two at 30° above horizontal + vertical). PROJECTION: ×0.816 isometric scale; VIEW: full size (≈1.22× larger).' },
{ id:'egfc20', course:'egd', unit:4, topic:'g4-isometric', category:'Exam Trap', front:'Can you measure a face diagonal directly in isometric?', back:'No — non-isometric lines are not true-length; locate them via axis-aligned endpoints (offset/coordinate method).' },
{ id:'egfc21', course:'egd', unit:4, topic:'g4-cad-bim', category:'Difference', front:'BIM vs CAD?', back:'CAD: geometric drawings. BIM: information-rich model embedding materials, cost and lifecycle data — clash detection, coordinated design.' }
];
