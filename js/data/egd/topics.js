/* ============================================================
   ENGINEERING GRAPHICS & DESIGN — TOPICS  (25ESC-ME-101H)
   Source: content/04-Engineering-Graphics-Design.md
   Note: EGD is drawing-based — topics carry drawingProcedure and
   commonErrors (rendered on the topic page when present).
   ============================================================ */

const EGD_UNIT1_TOPICS = [
{
  id: 'g1-drawing-basics', course: 'egd', unit: 1, category: 'Drawing Fundamentals',
  title: 'Principles of Engineering Graphics, Instruments & Lettering',
  summary: 'The graphical language, its tools, and disciplined lettering/lines.',
  overview: `Engineering drawing is a universal graphical "language" used to communicate a design's exact size, shape and specification unambiguously, independent of spoken language — its significance lies in precision and standardization (codes like BIS/SP-46).`,
  working: `Instruments: drawing board & sheet, mini-drafter/set-squares (parallel/perpendicular lines, standard angles 30°/45°/60°/90°), compass (circles/arcs), divider (transferring measurements), scale, protractor (angles), French curves (irregular curves).
Lettering: uniform, legible, standard proportions — usually single-stroke Gothic lettering, vertical or inclined at 75° — used for all dimensions, titles and notes.
Line discipline: thick lines (~0.5–0.7 mm) for visible outlines; thin lines (~0.2–0.3 mm) for dimension/construction lines.`,
  formulas: null,
  drawingProcedure: ['Fix the sheet squarely on the board; use the mini-drafter for parallel/perpendicular guides.', 'Plan the layout: title block bottom-right, leave margins.', 'Draw construction lines THIN first; darken only final outlines THICK.', 'Letter all dimensions/titles in single-stroke Gothic, vertical or 75° inclined.'],
  commonErrors: ['Using the same line thickness for outlines and dimension lines.', 'Inconsistent lettering size across the sheet.'],
  examTip: `Examiners check lettering quality and line-thickness discipline on EVERY sheet, not just lettering questions — build consistent habits from day one.`,
  commonMistake: `Using the same thickness for outlines and dimension lines — visible outlines must be noticeably thicker.`,
  quickCheck: [{ q: 'What is the standard lettering style in engineering drawings?', a: 'Single-stroke (Gothic) lettering, vertical or 75°-inclined.' }]
},
{
  id: 'g1-conics', course: 'egd', unit: 1, category: 'Curves',
  title: 'Conic Sections and Cycloidal Curves',
  summary: 'Ellipse/parabola/hyperbola by eccentricity; rolling-circle curves.',
  overview: `Conic sections are curves obtained by cutting a right circular cone with a plane — circle, ellipse, parabola, hyperbola — each also definable by eccentricity: the locus of a point whose distance from a focus divided by its distance from a directrix is constant (e). Cycloidal curves come from rolling circles.`,
  working: `Eccentricity: circle e = 0; ellipse e < 1; parabola e = 1; hyperbola e > 1.
Rectangular hyperbola: asymptotes perpendicular; constructed from the property that the product of a point's distances from the two asymptotes is constant.
Cycloid: point on a circle rolling along a straight line. Epicycloid: rolling on the OUTSIDE of a base circle. Hypocycloid: rolling on the INSIDE. Involute: traced by the end of a taut thread unwound from a circle/polygon.`,
  formulas: [{ formula: 'e = (distance from focus) / (distance from directrix)', meaning: 'Eccentricity definition', variables: 'circle 0 · ellipse <1 · parabola 1 · hyperbola >1', units: '—', condition: 'focus-directrix construction' }],
  drawingProcedure: ['Draw the directrix; mark the focus at the given distance.', 'Divide the focus-directrix distance per the eccentricity ratio to get successive distances from the directrix.', 'At each division, mark the point where distance-from-focus = e × distance-from-directrix (arc from focus crossing the corresponding vertical).', 'Join the plotted points with a smooth French-curve.'],
  commonErrors: ['Labelling epicycloid (rolling OUTSIDE) and hypocycloid (rolling INSIDE) backwards.', 'Not drawing the directrix/focus construction before plotting points.'],
  examTip: `The eccentricity-method construction of an ellipse or parabola (given focus-directrix distance and e) is the most commonly asked conics problem — memorize the point-plotting procedure, not just definitions.`,
  commonMistake: `Mixing up epicycloid (outside) with hypocycloid (inside) — a very common labelling mistake.`,
  quickCheck: [{ q: 'What is the eccentricity of a parabola?', a: 'Exactly 1.' }]
},
{
  id: 'g1-scales', course: 'egd', unit: 1, category: 'Scales',
  title: 'Scales: R.F., Plain, Diagonal, Chords and Vernier',
  summary: 'Shrinking the world to paper — with two or three measurable units.',
  overview: `A scale is used when a drawing must be a fixed ratio (larger, smaller or equal) to the actual object, since most real objects can't be drawn at true size.`,
  working: `Representative Fraction: R.F. = Drawing size / Actual size (dimensionless, e.g. 1:100, both sides in the same unit).
Plain scale: reads TWO units (e.g. metres and decimetres). Diagonal scale: reads THREE units (metres, decimetres, centimetres) via diagonal subdivisions — finer precision. Scale of chords: measures/constructs angles without a protractor. Vernier scale: main + vernier scales for fractional readings.
Worked example: a 1:50 drawing represents a 5 m wall as 5 × (1/50) = 0.1 m = 10 cm on paper.`,
  formulas: [{ formula: 'R.F. = drawing length / actual length', meaning: 'Representative Fraction', variables: 'same units both sides', units: 'dimensionless', condition: 'reduce to a pure unit-free ratio first' }],
  drawingProcedure: ['Compute R.F. and the scale length to be drawn (max length × R.F.).', 'Draw the scale line; divide into primary units; subdivide the first primary into secondary units.', 'For a diagonal scale: construct the rectangle of height = number of tertiary divisions; draw parallel diagonals to read the third unit.', 'Mark the required distance and label units + R.F. beneath the scale.'],
  commonErrors: ['Not reducing R.F. to a unit-free ratio (mixing units).', 'Wrong number of primary/secondary divisions for the given R.F.'],
  examTip: `Diagonal-scale construction (division counts determined by the R.F. and maximum length) is the most examined "construct a scale" question — practice the systematic layout.`,
  commonMistake: `Forgetting to convert both drawing and actual measurements to the SAME unit before computing the R.F.`,
  quickCheck: [{ q: 'How many units can a diagonal scale measure directly?', a: 'Three units (versus a plain scale\'s two).' }]
}
];

const EGD_UNIT2_TOPICS = [
{
  id: 'g2-projection-basics', course: 'egd', unit: 2, category: 'Projection',
  title: 'Projection Fundamentals & Orthographic Projection',
  summary: 'Planes, quadrants, first/third angle, and the xy reference line.',
  overview: `Projection represents a 3D object on a 2D plane by projecting points from the object using projectors (imaginary lines of sight). Orthographic projection uses PARALLEL projectors perpendicular to the plane of projection — the standard for accurate, to-scale engineering views.`,
  working: `Two principal planes intersect at 90°: the Vertical Plane (VP) and Horizontal Plane (HP), dividing space into FOUR quadrants. First-angle projection: object in the FIRST quadrant (above HP, in front of VP) — object between observer and plane; standard in India/Europe/BIS. Third-angle: plane between observer and object; US standard. Each convention has a distinct truncated-cone symbol for the title block.
Reference line (xy line): the intersection line of HP and VP, from which all distances are measured after the planes are "unfolded" flat.`,
  formulas: null,
  drawingProcedure: ['State the projection convention (first-angle unless specified).', 'Draw the xy reference line.', 'Project front view (elevation) and top view (plan) on a common vertical projector.', 'Place views per the chosen convention; add the projection symbol in the title block.'],
  commonErrors: ['Mixing first- and third-angle view placement in one drawing (e.g. top view ABOVE the front view while claiming first-angle).', 'Omitting the projection symbol.'],
  examTip: `Always state which angle of projection (first-angle per BIS, unless specified) at the start — examiners check the convention is followed consistently.`,
  commonMistake: `Placing the top view above the front view (third-angle habit) while claiming first-angle projection.`,
  quickCheck: [{ q: 'In first-angle projection, where is the object relative to observer and plane?', a: 'The object is BETWEEN the observer and the plane of projection.' }]
},
{
  id: 'g2-points', course: 'egd', unit: 2, category: 'Projection',
  title: 'Projection of Points in All Four Quadrants',
  summary: 'Front view + top view on one projector — unfold HP downward.',
  overview: `A point can lie in any of the four quadrants; its projections onto HP and VP (top view and front view) are located, then represented on one flat sheet after "unfolding" the HP downward.`,
  working: `Quadrant conventions: I — above HP, in front of VP. II — above HP, behind VP. III — below HP, behind VP. IV — below HP, in front of VP.
Method: mark the front view (elevation) above/below xy per the point's HP position; mark the top view (plan) below/above xy per its VP position (after unfolding); keep both views on the same vertical projector line.
Key unfolding effect: after unfolding, the TOP VIEW appears BELOW xy if the point is above HP — the fold flips intuition.`,
  formulas: null,
  drawingProcedure: ['Draw xy; decide the quadrant from the given distances.', 'Mark the front view at the point\'s height above/below HP (measured from xy).', 'Mark the top view at the point\'s distance in front of/behind VP, on the OPPOSITE side of xy after unfolding.', 'Keep both views on one vertical projector; label a\', a etc.'],
  commonErrors: ['Placing the top view on the same side as the point\'s HP position (ignoring the unfold).', 'Not aligning both views on a single vertical projector.'],
  examTip: `Sketch a small 3D quadrant pictorial beside your orthographic solution while learning — it prevents unfold-direction confusion (only the flat answer earns marks).`,
  commonMistake: `Forgetting that after unfolding, the top view appears BELOW xy for a point above HP.`,
  quickCheck: [{ q: 'A point above HP in first-angle projection: its top view lies where after unfolding?', a: 'Below the xy line.' }]
},
{
  id: 'g2-lines', course: 'egd', unit: 2, category: 'Projection',
  title: 'Projection of Lines and Their Traces',
  summary: 'True length shows only when parallel; inclined-to-both needs two stages.',
  overview: `A straight line's projections depend on its orientation relative to HP and VP; the points where the extended line meets HP and VP are its Horizontal Trace (HT) and Vertical Trace (VT).`,
  working: `Orientations: parallel to one plane (true length shows on that plane), parallel to both, contained in one/both planes, perpendicular to one plane (projection = a point), inclined to one and parallel to the other, inclined to BOTH (general case — both views foreshortened; neither shows true length).
General case method: two-stage construction (rotation/trapezoidal method) — first draw the line inclined to ONE plane (parallel to the other) to get a true-length view, then re-project/rotate to bring in the second inclination; locate true length and traces.`,
  formulas: null,
  drawingProcedure: ['Draw the front and top views for the simple position (one inclination only).', 'Rotate/re-project to impose the second inclination (auxiliary view).', 'Measure the true length from the auxiliary/rotated view.', 'Extend the projections to find HT (on xy-extended HP view) and VT.'],
  commonErrors: ['Measuring "true length" directly from front or top view when the line is inclined to BOTH planes.', 'Skipping the auxiliary construction and forcing the answer.'],
  examTip: `"Line inclined to both planes" is the highest-difficulty, most heavily-weighted Unit II question — practice the two-stage method repeatedly; it's a near-guaranteed long-answer question.`,
  commonMistake: `Expecting a true length in a standard view for a both-planes-inclined line — neither view shows it; only the auxiliary construction does.`,
  quickCheck: [{ q: 'When is a line\'s true length directly visible in a standard view?', a: 'Only when the line is parallel to that particular plane.' }]
}
];

const EGD_UNIT3_TOPICS = [
{
  id: 'g3-planes', course: 'egd', unit: 3, category: 'Projection',
  title: 'Projection of Planes',
  summary: 'Laminae in simple and inclined positions — true shape needs parallelism.',
  overview: `A plane (a 2D lamina — triangle, rectangle, circle) can be positioned perpendicular to both reference planes, perpendicular to one and parallel to the other, perpendicular to one and inclined to the other, or inclined to both.`,
  working: `Positions: perpendicular to BOTH — straight-line (edge) views in both front and top. Perpendicular to one, parallel to the other — TRUE SHAPE shows in the view it's parallel to; a line in the other. Perpendicular to one, inclined to the other — foreshortened in one view. Inclined to BOTH — general case; foreshortened, non-true-shape in both.
Method: draw the plane in its SIMPLEST position first (single inclination), then progressively rotate/re-project to add the second inclination, tracking auxiliary views carefully.`,
  formulas: null,
  drawingProcedure: ['Draw the lamina in simple position (true shape in the view it\'s parallel to).', 'Re-project/rotate to impose the first specified inclination.', 'Repeat for the second inclination via an auxiliary view.', 'Label all corners consistently across views.'],
  commonErrors: ['Attempting both inclinations in one step.', 'Expecting true shape in a view the plane is only inclined to.'],
  examTip: `Always begin with the plane in its SIMPLEST position (as if only one inclination were given) before adding the second — direct two-inclination attempts are the most common error source.`,
  commonMistake: `Assuming true shape shows in a view when the plane is inclined (not parallel) to that reference plane.`,
  quickCheck: [{ q: 'In which view does a plane\'s true shape appear?', a: 'The view corresponding to the reference plane the surface is PARALLEL to.' }]
},
{
  id: 'g3-solids-simple', course: 'egd', unit: 3, category: 'Projection',
  title: 'Projection of Solids: Types and Simple Positions',
  summary: 'Axis perpendicular to a plane → true-shape base view.',
  overview: `Solids (prisms, pyramids, cylinders, cones) are projected by considering the position of their AXIS relative to HP and VP.`,
  working: `Simple positions: axis perpendicular to one plane — gives a straightforward true-shape base view in that plane's projection; axis parallel to both planes. Identify the solid TYPE first (prism/pyramid — number of base sides and base shape; cylinder/cone) and the axis orientation, then project base edges and axis ends.`,
  formulas: null,
  drawingProcedure: ['Identify solid type and axis orientation exactly as the question states.', 'Draw the true-shape base in the view where the axis is perpendicular.', 'Project the other view (axis shows its true length if parallel to that plane).', 'Label base corners and apex/axis ends.'],
  commonErrors: ['Misreading the axis condition (parallel vs perpendicular vs inclined) before starting.', 'Wrong base-side count for the solid.'],
  examTip: `Identify the solid's TYPE and axis orientation FIRST, exactly as stated — misreading the axis condition is the single biggest cause of a wrong final answer.`,
  commonMistake: `Confusing a prism (constant cross-section) with a pyramid (converging to apex) when counting base edges.`,
  quickCheck: [{ q: 'Which view shows the true shape of a solid\'s base when its axis is perpendicular to HP?', a: 'The top view (on HP).' }]
},
{
  id: 'g3-solids-inclined', course: 'egd', unit: 3, category: 'Projection',
  title: 'Solids with Axis Inclined to One or Both Planes',
  summary: 'Change of position / auxiliary plane method — two stages for both.',
  overview: `When a solid's axis is inclined to one reference plane (parallel to the other) or to BOTH, projections are found by staged re-projection.`,
  working: `Axis inclined to ONE plane: "change of position" or auxiliary-plane method — first draw the solid in a simple position, then tilt/re-project to the required single inclination. Axis inclined to BOTH HP and VP: the most complex general case — solve in two stages (satisfy one inclination by re-projection, then the second), similar in spirit to two-plane-inclined lines and planes.`,
  formulas: null,
  drawingProcedure: ['Draw the solid in simple position with axis true length.', 'Tilt/re-project to impose the FIRST inclination (auxiliary view).', 'Re-project again for the second inclination.', 'Verify the axis appears foreshortened appropriately in both final views.'],
  commonErrors: ['Tilting about the wrong axis/line during re-projection.', 'Applying the first inclination in the wrong view (HP vs VP mix-up).'],
  examTip: `Re-read which plane the FIRST given inclination refers to before constructing — "axis inclined to HP" and "to VP" start in different views.`,
  commonMistake: `Constructing the wrong reference view first by swapping HP and VP inclinations.`,
  quickCheck: [{ q: 'Strategy for a solid with axis inclined to both HP and VP?', a: 'Two stages — first satisfy one inclination in a simpler position, then re-project/tilt for the second.' }]
}
];

const EGD_UNIT4_TOPICS = [
{
  id: 'g4-sections', course: 'egd', unit: 4, category: 'Sections & Development',
  title: 'Section of Solids and True Shape of Section',
  summary: 'Cut away the front half — then unfold the cut for its true shape.',
  overview: `A sectional view shows a solid as if cut by an imaginary cutting/sectional plane, revealing internal shape that outline views alone cannot show clearly.`,
  working: `The cut surface as seen in a standard front/top view is usually foreshortened/distorted. The TRUE SHAPE of the section is found by projecting the cut line onto an AUXILIARY plane parallel to the cutting plane — a separate construction, never read off the sectional view.
Standard combined question: draw the sectional front view AND the true shape of the section.`,
  formulas: null,
  drawingProcedure: ['Draw the solid and the cutting plane\'s trace (VT/HT).', 'Mark intersection points of the cut with the solid\'s edges; project them into the sectional view; hatch the cut face.', 'Construct the auxiliary view parallel to the cutting plane to obtain the TRUE SHAPE.', 'Hatch the true shape and label both views.'],
  commonErrors: ['Presenting the foreshortened sectional view as the "true shape".', 'Forgetting section lining (hatching) at 45°.'],
  examTip: `"Draw the sectional front view and true shape of the section" is a very standard combined question — the true shape ALWAYS needs its own auxiliary-plane construction.`,
  commonMistake: `Reading the "true shape" directly off the sectional view — they are two different, separately-constructed views.`,
  quickCheck: [{ q: 'Why is a separate construction needed for the true shape?', a: 'The cutting plane is usually inclined to the reference planes, so standard views show the section foreshortened, not in true shape.' }]
},
{
  id: 'g4-development', course: 'egd', unit: 4, category: 'Sections & Development',
  title: 'Development of Surfaces',
  summary: 'Unfold the solid flat: parallel-line for prisms/cylinders, radial-line for pyramids/cones.',
  overview: `"Development" (unfolding, or a surface's pattern/net) lays a 3D solid's surface flat — used practically in sheet-metal work (ducts, funnels, boxes) to know exactly what to cut from flat material.`,
  working: `Parallel-line method: for prisms and cylinders — surfaces made of lines parallel to the axis. Radial-line method: for pyramids and cones — surfaces of lines converging to the apex; development is a fan/sector shape.
Worked example: a cylinder's lateral surface unrolls to a rectangle of width = circumference (πD) and height = cylinder height.`,
  formulas: [{ formula: 'cylinder development = πD × h rectangle', meaning: 'Lateral surface of a cylinder unrolled', variables: 'D = base diameter, h = height', units: 'length', condition: 'parallel-line method' }],
  drawingProcedure: ['Classify the solid: prism/cylinder (parallel-line) vs pyramid/cone (radial-line).', 'Divide the base circumference/outline into equal parts; project onto the surface.', 'Lay out the unrolled length (πD for cylinders; slant edges from true lengths for cones/pyramids).', 'Transfer division points and join to complete the pattern.'],
  commonErrors: ['Using parallel-line construction on a cone/pyramid or vice-versa.', 'Using slant height without computing true lengths for inclined edges.'],
  examTip: `Identify prism/cylinder-type vs pyramid/cone-type as your VERY FIRST step — this single classification determines the entire construction approach.`,
  commonMistake: `Swapping the two methods — a cone's surface converges to a point (radial), a cylinder's does not (parallel).`,
  quickCheck: [{ q: 'Which method develops a cone\'s lateral surface?', a: 'The radial-line method (producing a sector/fan shape).' }]
},
{
  id: 'g4-isometric', course: 'egd', unit: 4, category: 'Isometric & CAD',
  title: 'Isometric Projection, Views and Conversion',
  summary: 'Three axes 120° apart; projection shrinks 0.816, view stays full-size.',
  overview: `Isometric projection is a pictorial (3D-looking) method where all three principal axes are drawn at equal angles (120° apart), with dimensions measured to the same reduced scale — a realistic 3D impression from a single view.`,
  working: `Isometric axes: two at 30° above horizontal on either side, plus one vertical. Isometric LINES: any lines parallel to the axes; isometric PLANES: planes formed by pairs of them (top/front/side faces).
Isometric scale vs view: true dimensions foreshorten by ~0.816 in a true ISOMETRIC PROJECTION (drawn with the isometric scale); an ISOMETRIC VIEW uses full-size dimensions along the axes — visually near-identical, ~1.22× larger, faster — hence more common in practice.
Conversion (isometric ↔ orthographic): identify corresponding true lengths along the correct axis directions, or reconstruct front/top/side views by measuring along each axis.`,
  formulas: [{ formula: 'isometric projection scale ≈ 0.816 (view = full size ≈ 1.22× projection)', meaning: 'Isometric reduction factor', variables: 'cos-based foreshortening along the three equal axes', units: '—', condition: 'PROJECTION uses the isometric scale; VIEW does not' }],
  drawingProcedure: ['Draw the isometric axes: vertical + two at 30°.', 'Mark dimensions along the axes only — never along diagonals.', 'Build the box outline, then add features by offsetting parallel to the axes (coordinate/offset method for non-isometric lines).', 'For true isometric PROJECTION, apply the 0.816 isometric scale; for a VIEW, use full size.'],
  commonErrors: ['Measuring a NON-isometric line (e.g. a face diagonal) directly with a scale.', 'Drawing an isometric view when the question demands a true isometric projection (and vice-versa).'],
  examTip: `Unless the question explicitly says "isometric PROJECTION" (isometric scale required), construct the full-size isometric VIEW — this distinction is a common examiner clarification point.`,
  commonMistake: `Measuring along non-axis directions — such lines are not true-length in isometric and must be located via axis-aligned endpoints (offset/coordinate method).`,
  quickCheck: [{ q: 'What angle do the three isometric axes make with each other?', a: '120° apart — typically two lines at 30° above horizontal plus one vertical.' }]
},
{
  id: 'g4-cad-bim', course: 'egd', unit: 4, category: 'Isometric & CAD',
  title: 'Computer Graphics: CAD Interface, Isometric CAD & BIM',
  summary: 'Toolbars to BIM — geometric drawings vs information-rich models.',
  overview: `CAD (Computer-Aided Design) replaces manual drafting instruments with digital tools offering precision, easy editing and reusable standard components. BIM (Building Information Modelling) extends CAD with embedded information for architecture/construction.`,
  working: `Key CAD interface elements: toolbars (Standard — file/print/zoom; Object Properties — layer/color/linetype; Draw — line/circle/polygon; Modify — trim/extend/mirror/array; Dimension — auto dimensioning), the drawing area with coordinate system and crosshairs cursor, dialog boxes, shortcut (right-click) menus, the command line (typed commands, AutoCAD-style), status bar (coordinates, snap/grid), and zoom methods (zoom window, zoom extents, pan).
Object selection (click, window/crossing) and erasing precede any modify command. Isometric snap/grid modes let CAD draw isometric lines/planes/solids directly without manual angle calculation.
BIM: an intelligent 3D model containing materials, cost and building-lifecycle information — coordinated design, clash detection, facility management beyond geometric drafting.`,
  formulas: null,
  drawingProcedure: null,
  commonErrors: ['Describing BIM as "just 3D CAD" — the embedded INFORMATION is the differentiator.', 'Confusing toolbars (Draw vs Modify) functions.'],
  examTip: `Theory questions here are definitional: "What is BIM and how does it differ from CAD?" — the key point: CAD produces GEOMETRIC drawings; BIM produces an INFORMATION-RICH model (material, cost, lifecycle data).`,
  commonMistake: `Reducing BIM to "3D CAD" — the distinguishing feature is non-geometric data, not the third dimension.`,
  quickCheck: [{ q: 'What distinguishes BIM from ordinary 3D CAD?', a: 'BIM embeds rich non-geometric information (materials, cost, lifecycle data), not just 3D shapes.' }]
}
];
