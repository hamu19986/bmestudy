/* ============================================================
   ENGINEERING GRAPHICS & DESIGN — QUESTION BANK
   Source: content/04-Engineering-Graphics-Design.md
   ============================================================ */

const EGD_QUESTIONS = [
/* -------- Unit I -------- */
{ id:'egq1', course:'egd', unit:1, topic:'g1-drawing-basics', type:'mcq', difficulty:'Easy', marks:1,
  question:'The standard engineering lettering style is:',
  options:['Cursive handwriting','Single-stroke Gothic, vertical or 75° inclined','Bold italic','Any legible style'], answer:'Single-stroke Gothic, vertical or 75° inclined',
  explanation:'Uniform, legible, standard-proportioned lettering is required for all dimensions, titles and notes.' },

{ id:'egq2', course:'egd', unit:1, topic:'g1-drawing-basics', type:'short', difficulty:'Easy', marks:2,
  question:'Which line weights are used for visible outlines vs dimension/construction lines?',
  answer:'Visible outlines: thick (~0.5–0.7 mm). Dimension/construction lines: thin (~0.2–0.3 mm).',
  explanation:'Line-thickness discipline is checked on every sheet.' },

{ id:'egq3', course:'egd', unit:1, topic:'g1-conics', type:'mcq', difficulty:'Easy', marks:1,
  question:'The eccentricity of a hyperbola is:',
  options:['e = 0','e < 1','e = 1','e > 1'], answer:'e > 1',
  explanation:'Circle 0, ellipse <1, parabola 1, hyperbola >1.' },

{ id:'egq4', course:'egd', unit:1, topic:'g1-conics', type:'short', difficulty:'Medium', marks:2,
  question:'Distinguish epicycloid and hypocycloid.',
  answer:'Epicycloid: traced by a point on a circle rolling on the OUTSIDE of a base circle. Hypocycloid: rolling on the INSIDE of the base circle.',
  explanation:'The inside/outside distinction is the classic labelling trap.' },

{ id:'egq5', course:'egd', unit:1, topic:'g1-conics', type:'long', difficulty:'Medium', marks:5,
  question:'Describe the eccentricity-method construction of an ellipse given the focus-directrix distance and e < 1.',
  answer:'Draw the directrix; mark the focus. Divide the focus-directrix distance per the eccentricity ratio to obtain successive distances from the directrix. At each division draw a vertical line and, with centre at the focus, an arc of radius = e × that distance; the intersections are curve points. Join smoothly with a French curve.',
  explanation:'Marks come from the systematic point-plotting procedure, not the definition.' },

{ id:'egq6', course:'egd', unit:1, topic:'g1-scales', type:'mcq', difficulty:'Easy', marks:1,
  question:'A diagonal scale can directly measure:',
  options:['One unit','Two units','Three units','Four units'], answer:'Three units',
  explanation:'E.g. metres, decimetres and centimetres — versus a plain scale\'s two.' },

{ id:'egq7', course:'egd', unit:1, topic:'g1-scales', type:'numerical', difficulty:'Medium', marks:5,
  question:'On a 1:50 scale drawing, what length represents a 5 m wall? Also define R.F.',
  answer:'R.F. = drawing length / actual length = 1/50. Paper length = 5 m × (1/50) = 0.1 m = 10 cm.',
  explanation:'Convert both measurements to the same unit before forming the R.F.' },

/* -------- Unit II -------- */
{ id:'egq8', course:'egd', unit:2, topic:'g2-projection-basics', type:'mcq', difficulty:'Medium', marks:1,
  question:'In FIRST-angle projection, the relative positions are:',
  options:['Plane between observer and object','Object between observer and plane','Object behind the plane','Depends on the quadrant only'], answer:'Object between observer and plane',
  explanation:'Third-angle reverses this — plane between observer and object (US standard).' },

{ id:'egq9', course:'egd', unit:2, topic:'g2-projection-basics', type:'short', difficulty:'Medium', marks:2,
  question:'What is the xy line and what is it used for?',
  answer:'The xy (reference) line is the intersection of HP and VP; after the planes are unfolded flat onto the sheet, all distances of front and top views are measured from it.',
  explanation:'It anchors every projection measurement.' },

{ id:'egq10', course:'egd', unit:2, topic:'g2-points', type:'mcq', difficulty:'Medium', marks:1,
  question:'A point above HP and behind VP lies in which quadrant?',
  options:['First','Second','Third','Fourth'], answer:'Second',
  explanation:'I: above HP, front of VP; II: above HP, behind VP; III: below HP, behind VP; IV: below HP, front of VP.' },

{ id:'egq11', course:'egd', unit:2, topic:'g2-points', type:'short', difficulty:'Medium', marks:2,
  question:'After unfolding, on which side of xy does the top view of a point above HP appear (first-angle)?',
  answer:'Below the xy line — the unfolding of HP downward flips the usual "above stays above" intuition.',
  explanation:'This flip trips up nearly every student early on.' },

{ id:'egq12', course:'egd', unit:2, topic:'g2-lines', type:'mcq', difficulty:'Medium', marks:1,
  question:'A line\'s true length appears directly in a view only when the line is:',
  options:['Inclined to both planes','Parallel to that plane','Perpendicular to that plane','Contained in xy'], answer:'Parallel to that plane',
  explanation:'Inclined views foreshorten; only parallelism preserves true length.' },

{ id:'egq13', course:'egd', unit:2, topic:'g2-lines', type:'long', difficulty:'Hard', marks:5,
  question:'Outlines the two-stage construction for a line inclined to both HP and VP, including traces.',
  answer:'Stage 1: draw the line as if inclined to only ONE plane (parallel to the other), obtaining one true-length view. Stage 2: re-project/rotate that true-length view to impose the second inclination (rotation/trapezoidal method). The final construction yields the true length; extending the projections locates the Horizontal Trace (HT) on HP and Vertical Trace (VT) on VP.',
  explanation:'Neither standard view shows true length for the general case — the auxiliary stage is mandatory.' },

/* -------- Unit III -------- */
{ id:'egq14', course:'egd', unit:3, topic:'g3-planes', type:'short', difficulty:'Medium', marks:2,
  question:'When does a plane show its true shape in a projection?',
  answer:'Only in the view corresponding to the reference plane its surface is PARALLEL to; when inclined, the view shows a foreshortened shape.',
  explanation:'True shape requires parallelism — inclination always distorts.' },

{ id:'egq15', course:'egd', unit:3, topic:'g3-planes', type:'long', difficulty:'Hard', marks:5,
  question:'Describe the staged method for projecting a plane inclined to both reference planes.',
  answer:'Step 1: draw the lamina in its SIMPLEST position (perpendicular/parallel to one reference plane) establishing known dimensions and true shape in one view. Step 2: rotate/re-project to impose the first specified inclination. Step 3: re-project via an auxiliary view for the second inclination, tracking every corner point through all views.',
  explanation:'Starting simple, then adding inclinations one at a time, is the expected structured method.' },

{ id:'egq16', course:'egd', unit:3, topic:'g3-solids-inclined', type:'mcq', difficulty:'Medium', marks:1,
  question:'For a solid with axis inclined to both HP and VP, the standard strategy is:',
  options:['Guess the views','Solve in two stages via re-projection','Draw only the top view','Use the radial-line method'], answer:'Solve in two stages via re-projection',
  explanation:'First satisfy one inclination in a simpler position, then re-project/tilt for the second.' },

{ id:'egq17', course:'egd', unit:3, topic:'g3-solids-simple', type:'short', difficulty:'Easy', marks:2,
  question:'What must be identified about a solid before starting its projection?',
  answer:'The solid\'s TYPE (prism/pyramid — number of base sides and base shape; cylinder/cone) and its AXIS orientation exactly as stated in the question.',
  explanation:'Misreading the axis condition is the single biggest cause of wrong answers.' },

/* -------- Unit IV -------- */
{ id:'egq18', course:'egd', unit:4, topic:'g4-sections', type:'long', difficulty:'Hard', marks:5,
  question:'Explain why the "true shape of section" requires a separate auxiliary construction.',
  answer:'The cutting plane is usually inclined to the reference planes, so the section seen in standard front/top views is foreshortened/distorted. The true shape is obtained only by projecting the cut onto an auxiliary plane PARALLEL to the cutting plane — a separate construction from the sectional view itself.',
  explanation:'Presenting the sectional view as the true shape is the classic error.' },

{ id:'egq19', course:'egd', unit:4, topic:'g4-development', type:'mcq', difficulty:'Medium', marks:1,
  question:'The lateral surface of a cone is developed by the:',
  options:['Parallel-line method','Radial-line method','Triangulation only','Unfolding into a rectangle'], answer:'Radial-line method',
  explanation:'Cone/pyramid surfaces converge to an apex — the development is a sector/fan.' },

{ id:'egq20', course:'egd', unit:4, topic:'g4-development', type:'numerical', difficulty:'Medium', marks:2,
  question:'A cylinder has base diameter D and height h. Give the dimensions of its development.',
  answer:'A rectangle of width = πD (circumference) and height = h (parallel-line method).',
  explanation:'Prisms/cylinders unroll via parallel lines; cones/pyramids via radial lines.' },

{ id:'egq21', course:'egd', unit:4, topic:'g4-isometric', type:'mcq', difficulty:'Medium', marks:1,
  question:'The three isometric axes are mutually separated by:',
  options:['60°','90°','120°','45°'], answer:'120°',
  explanation:'Typically drawn as two lines at 30° above horizontal plus one vertical.' },

{ id:'egq22', course:'egd', unit:4, topic:'g4-isometric', type:'short', difficulty:'Medium', marks:2,
  question:'Differentiate isometric projection and isometric view.',
  answer:'Isometric PROJECTION: true dimensions foreshortened by ≈0.816, drawn with the isometric scale (technically accurate). Isometric VIEW: full-size dimensions along the isometric axes — ≈1.22× larger, faster, and the usual default in practice.',
  explanation:'Default to the VIEW unless the question explicitly demands the PROJECTION.' },

{ id:'egq23', course:'egd', unit:4, topic:'g4-cad-bim', type:'short', difficulty:'Easy', marks:2,
  question:'How does BIM differ from traditional CAD?',
  answer:'CAD produces geometric drawings; BIM builds an information-rich digital model embedding non-geometric data — materials, cost, building lifecycle — enabling coordinated design, clash detection and facility management.',
  explanation:'The embedded INFORMATION (not the 3D-ness) is the differentiator.' }
];
