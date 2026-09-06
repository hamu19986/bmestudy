# Engineering Graphics & Design — 25ESC-ME-101H
**Credits:** 2 (0-0-4, practical-heavy) · Internal 15, External 35, Total 50 · Practical Exam: 3 hrs

This is primarily a drawing/CAD subject — content below focuses on the construction PRINCIPLE and method for each topic (what you'd actually need to reproduce it on a drawing sheet), since the "diagram" IS the answer in this subject.

---

## UNIT I — Introduction to Engineering Drawing

### 1. Principles, Significance, Drawing Instruments, Lettering
**Overview:** Engineering drawing is a universal graphical "language" used to communicate a design's exact size, shape, and specification unambiguously, without depending on any spoken language — its significance lies in precision and standardization (following codes like BIS/SP-46).
**Instruments:** Drawing board & sheet, mini-drafter/set-squares (for parallel/perpendicular lines and standard angles 30°/45°/60°/90°), compass (circles/arcs), divider (transferring measurements), scale (measuring/scaling), protractor (angles), French curves (irregular curves).
**Lettering:** Must be uniform, legible, and follow standard proportions (usually single-stroke Gothic lettering, vertical or inclined at 75°) — used for all dimensions, titles, and notes on a drawing.
**Exam Tip:** In the practical exam, examiners check lettering quality and line-thickness discipline (thick lines for visible outlines, thin for dimension/construction lines) on EVERY sheet, not just on lettering-specific questions — practice consistent lettering habits from day one.
**Common Mistake:** Using the same line thickness for outlines and dimension lines — visible outlines must be noticeably thicker (~0.5-0.7mm) than construction/dimension lines (~0.2-0.3mm).
**Quick Check:** Q: What is the standard lettering style commonly used in engineering drawings? A: Single-stroke (Gothic) lettering, vertical or 75°-inclined.

### 2. Conic Sections
**Overview:** Conic sections are curves obtained by cutting a right circular cone with a plane at different angles — Circle, Ellipse, Parabola, Hyperbola — each also definable via the "eccentricity" method: the locus of a point whose distance from a fixed point (focus) divided by its distance from a fixed line (directrix) is a constant (e).
**Eccentricity (e) by curve type:** Circle: e=0. Ellipse: e<1. Parabola: e=1. Hyperbola: e>1.
**Rectangular hyperbola:** A special hyperbola where the two asymptotes are perpendicular to each other; constructed using the property that the product of a point's distances from the two asymptotes is constant.
**Cycloidal curves:** A **Cycloid** is traced by a point on the circumference of a circle rolling along a straight line. An **Epicycloid** is traced by a point on a circle rolling on the OUTSIDE of another (base) circle. A **Hypocycloid** is traced by a point on a circle rolling on the INSIDE of a base circle. An **Involute** is the curve traced by the end of a thread as it is unwound, taut, from around a circle (or polygon).
**Method (general eccentricity construction):** Draw the directrix and mark the focus at the given distance. Divide the distance between focus and directrix using the eccentricity ratio to locate points progressively further from the directrix, plotting each point where "distance from focus = e × distance from directrix," then join smoothly.
**Exam Tip:** The eccentricity-method construction of an ellipse or parabola, given the focus-directrix distance and eccentricity, is the most commonly asked conics numerical/drawing problem — memorize the step-by-step point-plotting procedure, not just the definition.
**Common Mistake:** Mixing up epicycloid (circle rolling OUTSIDE) with hypocycloid (circle rolling INSIDE) — a very common labelling mistake in exams.
**Quick Check:** Q: What is the eccentricity of a parabola? A: Exactly 1.

### 3. Scales
**Overview:** A scale is used when a drawing must be a fixed ratio (larger, smaller, or equal) to the actual object, since most real objects can't be drawn at true size on paper.
**Representative Fraction (R.F.):** R.F. = Drawing size / Actual size (dimensionless, always expressed as a ratio like 1:100, with both sides in the same unit).
**Types:** **Plain scale** — reads two units (e.g., metres and decimetres) directly using a single graduated line, for simple ratios. **Diagonal scale** — reads three units (e.g., metres, decimetres, centimetres) using diagonal lines that subdivide a small distance proportionally, giving much finer precision. **Scale of chords** — used to measure/construct angles directly using a scale, without a protractor. **Vernier scale** — like a diagonal scale, uses two adjoining scales (main + vernier) to achieve fine sub-division precision for reading fractional parts.
**Worked Example (R.F. & length):** A 1:50 scale drawing represents a 5m wall as: length on paper = 5m × (1/50) = 0.1m = 10cm.
**Exam Tip:** Diagonal-scale construction (with the specific number of primary/secondary divisions determined by the R.F. and the maximum length to be represented) is the most commonly examined "construct a scale" question — practice the systematic layout: draw the scale line, divide into primary units, then construct the diagonal subdivisions in a rectangle above it.
**Common Mistake:** Forgetting to reduce R.F. to a pure, unit-free ratio (converting both drawing and actual measurements to the SAME unit) before proceeding with construction.
**Quick Check:** Q: How many different units can a diagonal scale measure directly (unlike a plain scale's two)? A: Three units.

---

## UNIT II — Projection of Points & Lines

### 1. Projection Fundamentals & Orthographic Projection
**Overview:** Projection is the technique of representing a 3D object on a 2D plane by "projecting" points from the object onto that plane using projectors (imaginary lines of sight).
**Methods:** **Orthographic projection** uses PARALLEL projectors perpendicular to the plane of projection (used almost exclusively in engineering drawing for accurate, to-scale views). (Perspective and oblique projection exist but are outside this subject's usual scope, aside from isometric which is covered separately.)
**Planes of projection & Quadrants:** Two principal planes intersect at 90°: the **Vertical Plane (VP)** and **Horizontal Plane (HP)**, dividing space into Four Quadrants. An object placed in the FIRST quadrant (above HP, in front of VP) uses **First-angle projection** (the object is between the observer and the plane — standard in India/Europe/BIS). An object placed in the THIRD quadrant uses **Third-angle projection** (the plane is between the observer and the object — standard in the USA).
**Symbols:** Each projection method has a distinct standardized symbol (a truncated-cone symbol) placed on the drawing title block to indicate which convention is used.
**Reference line (xy line):** The line of intersection of HP and VP, used as the reference from which all distances are measured when the planes are "unfolded" flat onto the drawing sheet.
**Exam Tip:** Always state which angle of projection (First-angle, per BIS/Indian standard, unless otherwise specified) you're using at the start of any projection problem — examiners check this convention is followed consistently throughout the answer.
**Common Mistake:** Mixing first-angle and third-angle view placement conventions within the same drawing (e.g., placing the top view above the front view, which is third-angle convention, while claiming first-angle).
**Quick Check:** Q: In first-angle projection, where is the object positioned relative to the observer and the plane? A: The object is BETWEEN the observer and the plane of projection.

### 2. Projection of Points
**Overview:** A point can lie in any of the four quadrants, and its projections onto HP and VP (called the Top View and Front View respectively) are located and then represented on a single flat sheet after "unfolding" the HP downward.
**Method:** Given a point's distance above/below HP and in-front/behind VP, mark its front view (elevation) above or below the xy line accordingly, and its top view (plan) below or above the xy line (after unfolding), with both views aligned on the same vertical projector line.
**Convention per quadrant:** First quadrant — point above HP, in front of VP. Second quadrant — above HP, behind VP. Third quadrant — below HP, behind VP. Fourth quadrant — below HP, in front of VP.
**Exam Tip:** Always draw a small 3D "pictorial" quadrant sketch alongside your orthographic solution when first learning this — it dramatically reduces confusion about which direction each view unfolds, even though only the final flat orthographic answer earns marks.
**Common Mistake:** Forgetting that after unfolding, the TOP VIEW appears BELOW the xy line if the point is above HP (i.e., the unfolding direction flips the usual "above stays above" intuition) — this trips up nearly every student early on.
**Quick Check:** Q: In first-angle projection, if a point lies above HP, does its top view appear above or below the xy reference line, after unfolding? A: Below the xy line.

### 3. Projection of Lines
**Overview:** A straight line's projections depend on its orientation relative to HP and VP: **parallel to one plane** (its projection on that plane shows the TRUE LENGTH), **parallel to both planes**, **contained by one/both planes** (lies exactly within a plane), **perpendicular to one plane** (its projection on that plane is a single point), **inclined to one plane and parallel to the other**, and **inclined to both planes** (general position — projections in both views are foreshortened, i.e. shorter than true length).
**Traces of a line:** The points where a (extended) line would meet HP and VP are called its Horizontal Trace (HT) and Vertical Trace (VT) respectively.
**Method (line inclined to both planes — general case):** Solved typically using the "rotation" or "trapezoidal" method — first draw the line assuming it's inclined to only ONE plane (parallel to the other) to get one true-length view, then re-project/rotate to bring in the second inclination, finally locating the true length and traces.
**Exam Tip:** "Line inclined to both planes" is the highest-difficulty, most heavily-weighted question type in Unit II — practice the two-stage (auxiliary/rotation) construction method repeatedly, since it's a near-guaranteed long-answer question.
**Common Mistake:** Directly measuring the "true length" off the front or top view when the line is inclined to BOTH planes — in that general case, NEITHER view directly shows true length; it must be found through the auxiliary construction.
**Quick Check:** Q: When is a line's true length directly visible in one of its two standard views? A: Only when the line is parallel to that particular plane.

---

## UNIT III — Projection of Planes & Solids

### 1. Projection of Planes
**Overview:** A plane (a 2D lamina — triangle, rectangle, circle, etc.) can be positioned: **Perpendicular to BOTH reference planes** (edge view in both, shown as a straight line in both front and top views), **Perpendicular to one plane and parallel to the other** (true shape shows in the view where it's parallel; a straight line in the other), **Perpendicular to one, inclined to the other**, or **Inclined to both planes** (general case — foreshortened, non-true-shape in both views).
**Method (general case):** Similar strategy to lines — first draw the plane in a simple position (perpendicular/parallel to one reference plane) to establish known dimensions, then progressively rotate/re-project to achieve the final specified inclination(s), tracking each auxiliary view carefully.
**Exam Tip:** Always begin by drawing the plane in its SIMPLEST position (as if only one inclination is given) before adding the second inclination — attempting to place both inclinations directly, in one step, is the most common source of errors in this topic.
**Common Mistake:** Assuming a plane's TRUE SHAPE will show in a view even when it's inclined (not parallel) to that plane's corresponding reference plane — true shape appears ONLY in the view parallel to the plane's actual surface.
**Quick Check:** Q: In which view does a plane's true shape appear? A: The view corresponding to the reference plane the plane surface is PARALLEL to.

### 2. Projection of Solids
**Overview:** Solids (prisms, pyramids, cylinders, cones, etc.) are projected by considering the position of their AXIS relative to HP/VP.
**Positions:** **Simple position** — axis perpendicular to one plane (giving a straightforward, true-shape base view) or parallel to both planes. **Axis inclined to one reference plane, parallel to the other** — solved using the "change of position" or "auxiliary plane" method: first draw the solid in a simple position, then tilt/re-project it to the required single inclination. **Axis inclined to BOTH HP and VP** — the most complex, general case, solved in two stages (first satisfy one inclination via re-projection, then the second), similar in spirit to the two-plane inclined line/plane problems.
**Exam Tip:** For solids questions, always identify the solid's TYPE (prism/pyramid — how many base sides, and the base shape) and its axis orientation FIRST, exactly as stated in the question, before beginning construction — misreading the axis condition (parallel vs perpendicular vs inclined) is the single biggest cause of a wrong final answer.
**Common Mistake:** Confusing "axis inclined to HP" with "axis inclined to VP" and constructing the wrong reference view first — always re-read which plane the FIRST given inclination refers to.
**Quick Check:** Q: What is the standard problem-solving strategy for a solid whose axis is inclined to both HP and VP? A: Solve in two stages — first satisfy one inclination by drawing the solid in a simpler position, then re-project/tilt to satisfy the second.

---

## UNIT IV — Sections, Development, Isometric Projection & CAD

### 1. Section of Solids
**Overview:** A "sectional view" shows a solid as if it has been cut by an imaginary cutting/sectional plane, revealing its internal shape — used to clarify hidden internal details that outline views alone cannot show clearly.
**True shape of section:** The actual, undistorted shape of the cut surface — found by projecting the section plane's cut line onto an AUXILIARY plane that is parallel to the cutting plane (since the section, as it appears in a standard front/top view, is usually foreshortened/distorted).
**Exam Tip:** "Draw the sectional front view and true shape of the section" is a very standard combined question — remember the true shape ALWAYS needs its own separate auxiliary-plane construction; it is never simply "read off" the sectional view directly.
**Common Mistake:** Presenting the (foreshortened) sectional view itself as if it were the "true shape" of the section — these are two DIFFERENT, separately-constructed views.
**Quick Check:** Q: Why is a separate construction needed to find the "true shape" of a section, rather than reading it off the sectional view? A: Because the cutting plane is usually inclined to the reference planes, so the standard views show the section foreshortened/distorted, not in its true shape.

### 2. Development of Surfaces
**Overview:** "Development" (also called an unfolding, or a surface's pattern/net) means laying out a 3D solid's surface flat on a plane, as if it were unfolded/unrolled — used practically in sheet-metal work (ducts, funnels, boxes) to know exactly what shape to cut from flat material.
**Methods:** **Parallel-line method** — used for prisms and cylinders (surfaces made of straight lines parallel to the axis, or a curved surface that unrolls into a simple rectangle for a cylinder). **Radial-line method** — used for pyramids and cones (surfaces made of lines converging to the apex; the development becomes a fan/sector shape).
**Worked Example (cylinder):** The development of a cylinder's curved lateral surface is a rectangle: width = circumference (πD) of the base circle, height = the cylinder's height.
**Exam Tip:** Immediately identify whether the solid is prism/cylinder-type (→ use parallel-line method) or pyramid/cone-type (→ use radial-line method) as your very first step — this single classification determines your entire construction approach.
**Common Mistake:** Using the parallel-line method on a cone/pyramid (or vice-versa) — the two methods are NOT interchangeable, since a cone's surface fundamentally converges to a point (apex) while a cylinder's does not.
**Quick Check:** Q: Which development method is used for a cone's lateral surface? A: The radial-line method (producing a sector/fan shape).

### 3. Isometric Projection
**Overview:** Isometric projection is a pictorial (3D-looking) drawing method where all three principal axes are drawn at equal angles (120° apart) to each other, and dimensions along all three axes are measured to the same reduced scale — giving a realistic 3D impression using a single view, unlike orthographic's separate multiple views.
**Isometric axes/lines/planes:** The three isometric axes are conventionally drawn at 30° above the horizontal on either side, plus one vertical axis. Isometric LINES are any lines drawn parallel to these three axes; Isometric PLANES are planes formed by pairs of isometric lines (e.g., the "top," "front," and "side" faces of an isometric cube).
**Isometric scale vs. Isometric view:** True (actual) dimensions, when foreshortened by the projection, are reduced by a factor of about 0.816 — an **Isometric Projection**, drawn using a special isometric scale, is technically accurate to this reduced size. An **Isometric View** (or isometric drawing) instead uses the object's TRUE, full-size dimensions directly along the isometric axes — visually near-identical in proportion but larger (about 1.22× the true isometric projection size) and much faster to construct, so it's the more commonly used method in practice.
**Conversion (isometric ↔ orthographic):** Requires carefully identifying corresponding true lengths and reading them off along the correct isometric axis direction, or vice-versa reconstructing the front/top/side orthographic views from an isometric pictorial by measuring along each axis.
**Exam Tip:** Unless a question explicitly specifies "isometric PROJECTION" (and asks you to apply the isometric scale/reduction), default to constructing the simpler, full-size Isometric VIEW — this distinction is a very common examiner clarification point, and drawing the wrong one wastes significant time.
**Common Mistake:** Measuring a NON-isometric line (like a line drawn parallel to an object's diagonal edge, not along the three axis directions) directly with a scale in an isometric drawing — such lines are NOT true-length in an isometric view and must instead be located via their isometric-axis-aligned endpoints (offset/coordinate method).
**Quick Check:** Q: What angle do the three isometric axes make with each other? A: 120° apart (typically drawn as two lines at 30° above horizontal, plus one vertical).

### 4. Introduction to Computer Graphics / CAD & BIM
**Overview:** CAD (Computer-Aided Design) software replaces manual drafting instruments with digital tools — offering precision, easy editing, and reusable standard components.
**Key CAD interface elements:** Toolbars (Standard — file/print/zoom; Object Properties — layer/color/linetype; Draw — line/circle/polygon tools; Modify — trim/extend/mirror/array; Dimension — automatic dimensioning tools), the Drawing area with a coordinate system and crosshairs cursor, Dialog boxes/windows and Shortcut (right-click) menus, the Command line (typed commands, common in AutoCAD-style software), Status bar (coordinates, snap/grid toggles), and Zoom methods (zoom window, zoom extents, pan) for navigating large drawings.
**Object selection/editing:** Selecting objects (click, window/crossing selection) and Erasing objects are foundational operations before any modify command can be applied.
**Isometric views in CAD:** CAD software provides built-in isometric snap/grid modes to directly draw isometric lines, planes, and both simple and compound solids without manual angle calculation.
**BIM (Building Information Modelling):** An advanced extension of CAD used specifically in architecture/construction — instead of just drawing lines, BIM creates an intelligent 3D digital model containing information about materials, cost, and building lifecycle, allowing coordinated design, clash detection, and facility management beyond simple geometric drafting.
**Exam Tip:** Theory questions on this module are typically definitional/conceptual ("what is BIM and how does it differ from traditional CAD") — the key differentiating point to state: CAD produces GEOMETRIC drawings, while BIM produces an INFORMATION-RICH digital model (including non-geometric data like material and cost).
**Common Mistake:** Describing BIM as "just 3D CAD" — the key distinguishing feature is the embedded INFORMATION (data) beyond pure geometry, not merely having three dimensions.
**Quick Check:** Q: What key feature distinguishes BIM from ordinary 3D CAD modelling? A: BIM embeds rich non-geometric information (materials, cost, lifecycle data) into the model, not just 3D shapes.
