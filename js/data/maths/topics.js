/* ============================================================
   MATHEMATICS-I — TOPICS  (25BSC-MATH-103H)
   Source: content/01-Mathematics-I.md
   ============================================================ */

const MATHS_UNIT1_TOPICS = [
{
  id: 'm1-lhospital', course: 'maths', unit: 1, category: 'Calculus',
  title: "Indeterminate Forms & L'Hospital's Rule",
  summary: 'Resolve 0/0 and ∞/∞ limits by differentiating numerator and denominator separately.',
  overview: `An indeterminate form (0/0, ∞/∞, 0×∞, ∞−∞, 0⁰, 1^∞, ∞⁰) is a limit expression whose value can't be determined by direct substitution. L'Hospital's Rule resolves 0/0 or ∞/∞ forms by differentiating numerator and denominator separately (not using the quotient rule) and re-evaluating the limit.`,
  working: `Statement: If lim f(x)/g(x) gives 0/0 or ∞/∞ as x→a, then lim f(x)/g(x) = lim f'(x)/g'(x), provided the latter limit exists. Apply repeatedly if the new limit is still indeterminate.
Worked example: lim(x→0) (sin x)/x → 0/0 form → differentiate: lim(x→0) (cos x)/1 = cos 0 = 1.`,
  formulas: null,
  examTip: `Before applying L'Hospital's, always explicitly write "this is of the form 0/0 (or ∞/∞)" — examiners deduct marks if you differentiate without confirming the indeterminate form first.`,
  commonMistake: `Applying the quotient rule instead of differentiating numerator and denominator separately.`,
  quickCheck: [{ q: 'What form must a limit take before you can apply L\'Hospital\'s Rule directly?', a: '0/0 or ∞/∞.' }],
  extraNotes: `Other indeterminate forms (0×∞, ∞−∞, 0⁰, 1^∞, ∞⁰) must first be algebraically rewritten into 0/0 or ∞/∞ before the rule applies.`
},
{
  id: 'm1-maxima-minima', course: 'maths', unit: 1, category: 'Calculus',
  title: 'Maxima and Minima of a Function of One Variable',
  summary: 'Find and classify critical points using the first and second derivative tests.',
  overview: `A local maximum/minimum occurs where a function's slope changes sign; found using the first and second derivative tests.`,
  working: `Method: Find critical points by solving f'(x) = 0. Then use the second derivative test: if f''(x) < 0 at that point → local maximum; if f''(x) > 0 → local minimum; if f''(x) = 0, the test is inconclusive (use higher derivatives or the first-derivative sign-change test).
Worked example: f(x) = x³ − 3x. f'(x) = 3x² − 3 = 0 → x = ±1. f''(x) = 6x. At x=1, f''=6>0 → local minimum (value −2). At x=−1, f''=−6<0 → local maximum (value 2).`,
  formulas: [{ formula: 'f\'(c) = 0 → critical point; f\'\'(c) < 0 → max, f\'\'(c) > 0 → min', meaning: 'Second derivative test for classifying critical points', units: '—', condition: 'f differentiable near c' }],
  examTip: `Always state both the critical point AND the function's value there — "local maximum at x=−1, value 2" — examiners award marks for both.`,
  commonMistake: `Forgetting to check f''(x)=0 cases separately, or stopping at finding critical points without classifying them.`,
  quickCheck: [{ q: 'What does f\'\'(x) > 0 at a critical point indicate?', a: 'A local minimum.' }]
},
{
  id: 'm1-rolle', course: 'maths', unit: 1, category: 'Calculus',
  title: "Rolle's Theorem",
  summary: 'If f(a)=f(b) with continuity and differentiability, some c has f\'(c)=0.',
  overview: `Rolle's Theorem relates a function's behaviour over an interval to an interior point where the tangent is horizontal: between two equal-height points on a smooth curve, somewhere the slope must be zero.`,
  working: `Statement: If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then there exists at least one c in (a,b) where f'(c) = 0.
Verification pattern for exams: (1) state and check continuity on [a,b], (2) state and check differentiability on (a,b), (3) check f(a)=f(b), (4) only then solve f'(c)=0 for c and confirm c lies in (a,b).`,
  formulas: [{ formula: 'f\'(c) = 0 for some c ∈ (a,b)', meaning: "Rolle's conclusion", units: '—', condition: 'f continuous on [a,b], differentiable on (a,b), f(a)=f(b)' }],
  examTip: `Always verify and state the three conditions (continuity, differentiability, and f(a)=f(b)) explicitly before applying the theorem; "verify Rolle's theorem" questions are graded heavily on this verification step, not just the final c value.`,
  commonMistake: `Applying Rolle's Theorem when f(a) ≠ f(b) — that requires LMVT instead.`,
  quickCheck: [{ q: "What extra condition does Rolle's Theorem need beyond LMVT?", a: 'f(a) = f(b).' }]
},
{
  id: 'm1-mvt-cauchy', course: 'maths', unit: 1, category: 'Calculus',
  title: "Lagrange's & Cauchy's Mean Value Theorems",
  summary: 'Average rate of change over [a,b] equals an instantaneous rate at some interior c.',
  overview: `The Mean Value Theorems relate a function's average rate of change over an interval to its instantaneous rate of change at some interior point — Rolle's result, generalised to functions with unequal endpoint values (LMVT) and to two functions (Cauchy).`,
  working: `Lagrange's Mean Value Theorem (LMVT): If f is continuous on [a,b] and differentiable on (a,b), then there exists c in (a,b) such that f'(c) = [f(b)−f(a)]/(b−a).
Cauchy's Mean Value Theorem: Generalizes LMVT to two functions f, g: there exists c in (a,b) such that [f(b)−f(a)]/[g(b)−g(a)] = f'(c)/g'(c), provided g'(x)≠0 throughout.
Worked example (LMVT): f(x) = x² on [1,3]. f'(c) = (f(3)−f(1))/(3−1) = (9−1)/2 = 4 → 2c = 4 → c = 2 (lies in (1,3), verifying the theorem).`,
  formulas: [{ formula: 'f\'(c) = [f(b) − f(a)] / (b − a)', meaning: "Lagrange's Mean Value Theorem", units: '—', condition: 'f continuous on [a,b], differentiable on (a,b)' }],
  examTip: `"Verify Lagrange's Mean Value Theorem for f(x) on [a,b]" is graded on: checking the two conditions, computing the average rate, then solving for c — show every step.`,
  commonMistake: `Forgetting to verify that the c you compute actually lies inside the open interval (a,b).`,
  quickCheck: [{ q: 'For f(x)=x² on [1,3], find the c guaranteed by LMVT.', a: "f'(c)=2c = (9−1)/2 = 4 → c = 2, which lies in (1,3)." }]
},
{
  id: 'm1-taylor-maclaurin', course: 'maths', unit: 1, category: 'Calculus',
  title: "Taylor's & Maclaurin's Theorems and Series",
  summary: 'Expand functions as sums of derivative terms about a point; Maclaurin is the a=0 case.',
  overview: `Taylor's theorem expresses a function as an infinite (or finite, with remainder) sum of terms calculated from its derivatives at a single point 'a'. Maclaurin's series is the special case where a = 0.`,
  working: `Taylor series: f(x) = f(a) + f'(a)(x−a) + f''(a)(x−a)²/2! + f'''(a)(x−a)³/3! + ...
Maclaurin series: f(x) = f(0) + f'(0)x + f''(0)x²/2! + f'''(0)x³/3! + ...
Standard Maclaurin expansions to memorize: eˣ = 1+x+x²/2!+x³/3!+..., sin x = x − x³/3!+x⁵/5!−..., cos x = 1 − x²/2!+x⁴/4!−..., ln(1+x) = x − x²/2+x³/3−...
Worked example: Expand eˣ up to the x³ term about 0: f(0)=1, f'(0)=1, f''(0)=1, f'''(0)=1 → eˣ ≈ 1+x+x²/2+x³/6.`,
  formulas: [{ formula: 'f(x) = Σ fⁿ(a)(x−a)ⁿ/n!', meaning: 'Taylor series about x = a', units: '—', condition: 'f infinitely differentiable near a' }],
  examTip: `Memorize the standard Maclaurin series for eˣ, sin x, cos x, and ln(1+x) — these save huge time on "expand f(x) in powers of x" questions, which appear almost every year.`,
  commonMistake: `Mixing up the remainder-with-derivative form (Taylor's theorem with Lagrange's form of remainder) with the pure infinite-series form (Taylor series) when the question specifically asks for the "theorem with remainder."`,
  quickCheck: [{ q: "What is Maclaurin's series a special case of?", a: "Taylor's series, expanded about a = 0." }]
},
{
  id: 'm1-curvature-evolutes', course: 'maths', unit: 1, category: 'Calculus',
  title: 'Curvature, Evolutes and Involutes',
  summary: 'How sharply a curve bends; the evolute is the locus of centres of curvature.',
  overview: `Curvature measures how sharply a curve bends at a point (radius of curvature ρ = 1/curvature). The evolute is the locus of all centres of curvature of a curve; the original curve is then called the involute of its evolute.`,
  working: `Radius of curvature (Cartesian form): ρ = [1+(dy/dx)²]^(3/2) / |d²y/dx²|. For parametric curves use the corresponding form with dx/dt, dy/dt. To find an evolute: compute the centre of curvature (X, Y) at a general point, then eliminate the original parameter between X, Y — the resulting equation is the evolute.
For standard curves (parabola, circle, catenary) the radius-of-curvature formula is a direct plug-in numerical.`,
  formulas: [{ formula: 'ρ = [1 + (dy/dx)²]^(3/2) / |d²y/dx²|', meaning: 'Radius of curvature (Cartesian form)', units: 'length units', condition: 'y = f(x) twice differentiable' }],
  examTip: `For standard curves (parabola, circle, catenary) the radius-of-curvature formula is a direct plug-in numerical — memorize the formula exactly, including the 3/2 power.`,
  commonMistake: `Forgetting the absolute value on the second derivative in the denominator, leading to a negative radius of curvature (radius must be positive).`,
  quickCheck: [{ q: "What is the relationship between a curve and its evolute's involute?", a: 'The original curve IS the involute of its own evolute.' }]
},
{
  id: 'm1-beta-gamma', course: 'maths', unit: 1, category: 'Calculus',
  title: 'Beta and Gamma Functions',
  summary: 'Integral-defined extensions of the factorial; β(m,n) = Γ(m)Γ(n)/Γ(m+n).',
  overview: `Beta and Gamma functions are special "extension" functions of the factorial, defined via definite integrals, heavily used to evaluate otherwise-difficult integrals.`,
  working: `Definitions: Gamma function: Γ(n) = ∫₀^∞ xⁿ⁻¹e⁻ˣ dx (for n>0). Beta function: β(m,n) = ∫₀¹ xᵐ⁻¹(1−x)ⁿ⁻¹ dx (for m,n>0).
Key properties: Γ(n+1) = n·Γ(n) (reduces to n! for positive integers); Γ(1)=1; Γ(1/2)=√π. Relationship: β(m,n) = Γ(m)Γ(n)/Γ(m+n). Symmetry: β(m,n) = β(n,m).
Worked example: Evaluate Γ(5) = 4! = 24 (since Γ(n+1)=n! for integer n).`,
  formulas: [
    { formula: 'Γ(n) = ∫₀^∞ xⁿ⁻¹e⁻ˣ dx', meaning: 'Gamma function', units: '—', condition: 'n > 0' },
    { formula: 'β(m,n) = Γ(m)Γ(n) / Γ(m+n)', meaning: 'Beta in terms of Gamma', units: '—', condition: 'm, n > 0' }
  ],
  examTip: `The relation β(m,n)=Γ(m)Γ(n)/Γ(m+n) is the single most-used tool in this topic — most numericals reduce a Beta-function integral to a ratio of Gamma functions.`,
  commonMistake: `Forgetting the domain restriction (m,n>0) or misapplying Γ(n+1)=n·Γ(n) in the wrong direction.`,
  quickCheck: [{ q: 'What is Γ(1/2)?', a: '√π.' }]
},
{
  id: 'm1-solids-revolution', course: 'maths', unit: 1, category: 'Calculus',
  title: 'Surface Area & Volume of Solids of Revolution',
  summary: 'Definite integrals for the volume and surface area generated by rotating a curve.',
  overview: `Rotating a plane curve about an axis generates a solid of revolution; definite integrals compute its surface area and volume.`,
  working: `Formulas (rotation about x-axis, y=f(x) from x=a to b): Volume V = π∫ₐᵇ y² dx. Surface area S = 2π∫ₐᵇ y √(1+(dy/dx)²) dx.
Worked example: Volume generated by rotating y=x (from x=0 to 2) about the x-axis: V = π∫₀² x² dx = π[x³/3]₀² = 8π/3.`,
  formulas: [
    { formula: 'V = π∫ₐᵇ y² dx', meaning: 'Volume of revolution about the x-axis', units: 'cubic units', condition: 'y = f(x), a ≤ x ≤ b, rotation about x-axis' },
    { formula: 'S = 2π∫ₐᵇ y √(1+(dy/dx)²) dx', meaning: 'Surface area of revolution about the x-axis', units: 'square units', condition: 'y = f(x) rotated about the x-axis' }
  ],
  examTip: `Always double-check which axis of rotation is specified — the formula swaps x and y roles if rotating about the y-axis instead.`,
  commonMistake: `Forgetting the π (or 2π for surface area) multiplier, or squaring the wrong variable when the axis of rotation changes.`,
  quickCheck: [{ q: 'What is the volume formula for rotating y=f(x) about the x-axis from a to b?', a: 'V = π∫ₐᵇ [f(x)]² dx.' }]
}
];

const MATHS_UNIT2_TOPICS = [
{
  id: 'm2-matrix-basics', course: 'maths', unit: 2, category: 'Matrices',
  title: 'Matrix Operations: Addition, Scalar Multiplication, Multiplication',
  summary: 'Dimension rules for adding and multiplying matrices; AB ≠ BA in general.',
  overview: `A matrix is a rectangular array of numbers. Addition/subtraction require identical dimensions (element-wise). Scalar multiplication multiplies every element by a constant. Matrix multiplication (A·B) requires the number of columns of A to equal the number of rows of B, and is NOT commutative in general.`,
  working: `For A (m×n) and B (n×p), the product AB is (m×p) with (AB)ᵢⱼ = Σ (row i of A) × (column j of B), summed element by element.
Worked example: For two 2×2 matrices, each entry is the dot product of a row of A with a column of B. Always write the resulting dimension (rows of A × columns of B) before computing entries.`,
  formulas: null,
  examTip: `Always double-check dimension compatibility before attempting multiplication — write out the resulting matrix's dimension to catch dimension-mismatch mistakes early.`,
  commonMistake: `Assuming AB = BA — matrix multiplication is generally non-commutative.`,
  quickCheck: [{ q: 'Can you multiply a 2×3 matrix by a 2×2 matrix?', a: 'No — columns of the first (3) must equal rows of the second (2); this fails.' }]
},
{
  id: 'm2-determinants', course: 'maths', unit: 2, category: 'Matrices',
  title: 'Determinants',
  summary: 'Scalar value of a square matrix; det ≠ 0 means invertible.',
  overview: `A determinant is a scalar value computed from a square matrix, indicating (among other things) whether the matrix is invertible (det ≠ 0) and encoding the scaling factor of the linear transformation it represents.`,
  working: `Formula (2×2): det[[a,b],[c,d]] = ad − bc. For 3×3: expand along any row/column using cofactors, with alternating signs (+,−,+ pattern).
Worked example: det[[2,3],[1,4]] = 2(4) − 3(1) = 8−3 = 5.`,
  formulas: [{ formula: 'det[[a,b],[c,d]] = ad − bc', meaning: '2×2 determinant', units: '—', condition: 'square matrix' }],
  examTip: `For 3×3 determinants, always pick the row/column with the most zeros to expand along — this drastically reduces computation and avoids arithmetic slips.`,
  commonMistake: `Forgetting the alternating sign pattern (+,−,+,...) when doing cofactor expansion for matrices larger than 2×2.`,
  quickCheck: [{ q: 'What does det(A) = 0 tell you about matrix A?', a: 'A is singular (not invertible).' }]
},
{
  id: 'm2-inverse', course: 'maths', unit: 2, category: 'Matrices',
  title: 'Inverse of a Matrix',
  summary: 'A⁻¹ = adj(A)/det(A), exists only when det(A) ≠ 0.',
  overview: `The inverse A⁻¹ of a square matrix A satisfies A·A⁻¹ = I. It exists only when A is non-singular (det(A) ≠ 0); a singular matrix has no inverse.`,
  working: `Two standard methods: (1) A⁻¹ = adj(A)/det(A) — compute the cofactor matrix, transpose it to get the adjoint, then divide by the determinant. (2) Gauss-Jordan elimination — row-reduce the augmented matrix [A | I] until the left block becomes I; the right block is then A⁻¹.
Check your answer by multiplying A·A⁻¹ and confirming you get I.`,
  formulas: [{ formula: 'A⁻¹ = adj(A) / det(A)', meaning: 'Inverse via the adjoint', units: '—', condition: 'det(A) ≠ 0' }],
  examTip: `In "find the inverse" questions, one arithmetic slip in a cofactor ruins everything — verify with A·A⁻¹ = I (or at least one entry of the product) before moving on.`,
  commonMistake: `Attempting to compute an inverse without first checking det(A) ≠ 0 — if the determinant is zero, the question is actually about singularity/inconsistency.`,
  quickCheck: [{ q: 'When does a square matrix fail to have an inverse?', a: 'When det(A) = 0 (the matrix is singular).' }]
},
{
  id: 'm2-rank-echelon', course: 'maths', unit: 2, category: 'Matrices',
  title: 'Elementary Transformations, Rank, Echelon & Normal Forms',
  summary: 'Row-reduce to echelon form; rank = number of nonzero rows.',
  overview: `Elementary row/column operations (swap two rows, multiply a row by a nonzero scalar, add a multiple of one row to another) transform a matrix without changing its rank, and are the basis of Gauss elimination.`,
  working: `Rank: The number of linearly independent rows (or columns) of a matrix — equivalently, the order of the largest nonzero minor, or the number of nonzero rows in its row-echelon form.
Echelon form: Each leading (first nonzero) entry of a row is to the right of the leading entry of the row above; all-zero rows are at the bottom. Normal form: Further reduced so the leading nonzero entries are all 1 and the matrix looks like [I | 0] blocks — used to directly read off the rank.
Worked method: apply row operations systematically (clear below each pivot in turn) until echelon form, then count nonzero rows.`,
  formulas: [{ formula: 'rank(A) = number of nonzero rows in echelon form', meaning: 'Rank via row reduction', units: '—', condition: 'any matrix' }],
  examTip: `For "find the rank of the matrix" questions, reducing to echelon form via elementary row operations (rather than computing every minor) is far faster and is what examiners expect to see shown step by step.`,
  commonMistake: `Confusing "rank = number of rows" with the correct definition (rank = number of linearly independent rows) — a matrix can have zero rows in echelon form, reducing its rank below the row count.`,
  quickCheck: [{ q: 'What is the rank of a 3×3 identity matrix?', a: '3 (full rank).' }]
},
{
  id: 'm2-linear-systems', course: 'maths', unit: 2, category: 'Matrices',
  title: "Systems of Linear Equations, Independence & Cramer's Rule",
  summary: 'Consistency via ranks; Cramer\'s Rule xᵢ = det(Aᵢ)/det(A) when det(A) ≠ 0.',
  overview: `A system of linear equations AX=B can be analysed by ranks (consistency) or solved by Cramer's Rule (determinants — practical only for small systems). Linear (in)dependence of the rows determines whether solutions are unique, infinite, or nonexistent.`,
  working: `Consistency rules: unique solution when rank(A)=rank([A|B])=n; infinitely many solutions when rank(A)=rank([A|B])<n; no solution when rank(A)≠rank([A|B]).
Cramer's Rule: xᵢ = det(Aᵢ)/det(A), where Aᵢ replaces the i-th column of A with B — valid only when det(A) ≠ 0.
Worked example: Solve x+y=3, x−y=1 by Cramer's Rule: det(A)=[[1,1],[1,−1]]=−2. det(A₁)=[[3,1],[1,−1]]=−4 → x=−4/−2=2. det(A₂)=[[1,3],[1,1]]=−2 → y=−2/−2=1.`,
  formulas: [{ formula: 'xᵢ = det(Aᵢ) / det(A)', meaning: "Cramer's Rule", units: '—', condition: 'det(A) ≠ 0, square system' }],
  examTip: `For "check consistency of the system" questions, always compute and compare rank(A) and rank([A|B]) explicitly as your first step — this is the examiner's expected structure regardless of which method you use afterward.`,
  commonMistake: `Using Cramer's Rule when det(A)=0 — the rule simply doesn't apply there; you must fall back on rank-based consistency analysis.`,
  quickCheck: [{ q: 'If rank(A) = rank([A|B]) = number of unknowns, what kind of solution does the system have?', a: 'A unique solution.' }]
},
{
  id: 'm2-gauss', course: 'maths', unit: 2, category: 'Matrices',
  title: 'Gauss Elimination and Gauss-Jordan Elimination',
  summary: 'Row-reduce, then back-substitute (Gauss) or read off directly (Gauss-Jordan).',
  overview: `Gauss Elimination and Gauss-Jordan Elimination are systematic row-reduction methods for solving AX=B, needing no determinants and working for any square or rectangular consistent system.`,
  working: `Gauss Elimination: row-reduce the augmented matrix [A|B] to upper-triangular (echelon) form, then back-substitute from the last equation upwards.
Gauss-Jordan Elimination: continue row-reducing until the left block is the identity (reduced row-echelon form); the solution is then read off directly with no back-substitution needed.
Pivot discipline: use each pivot to clear all entries below it (Gauss) or below AND above it (Gauss-Jordan), one column at a time.`,
  formulas: null,
  examTip: `Show every row operation as an annotation (R₂ → R₂ − 2R₁ etc.) — examiners award method marks for correct operations even if a final arithmetic slip occurs.`,
  commonMistake: `Back-substituting before the echelon form is complete, or clearing entries above the pivot during plain Gauss elimination (that's Gauss-Jordan, not Gauss).`,
  quickCheck: [{ q: 'Which method needs no back-substitution?', a: 'Gauss-Jordan elimination — it reduces all the way to the identity, so the solution is read off directly.' }]
}
];

const MATHS_UNIT3_TOPICS = [
{
  id: 'm3-vector-spaces', course: 'maths', unit: 3, category: 'Vector Spaces',
  title: 'Vector Spaces and Subspaces',
  summary: 'Sets closed under addition and scalar multiplication satisfying the axioms.',
  overview: `A vector space is a set of "vectors" closed under addition and scalar multiplication, satisfying axioms like associativity, existence of a zero vector, and distributivity. A subspace is a subset of a vector space that is itself a vector space under the same operations.`,
  working: `Subspace test (all three steps must be shown): (1) the subset contains the zero vector, (2) closed under addition, (3) closed under scalar multiplication.
Worked example: In ℝ³, the set of all vectors (x,y,0) forms a subspace (the xy-plane) — it contains the zero vector (0,0,0) and is closed under addition/scalar multiplication.`,
  formulas: null,
  examTip: `To prove a subset is a subspace, always verify (in order): zero vector, closure under addition, closure under scalar multiplication — examiners specifically check all three steps are shown.`,
  commonMistake: `Skipping the zero-vector check — a set that fails to contain the zero vector cannot be a subspace, even if it's closed under the operations.`,
  quickCheck: [{ q: 'What is the quickest way a subset can fail the subspace test?', a: 'Not containing the zero vector (or failing closure under addition/scalar multiplication).' }]
},
{
  id: 'm3-span-dependence', course: 'maths', unit: 3, category: 'Vector Spaces',
  title: 'Linear Span, Dependence and Independence',
  summary: 'Span = all linear combinations; independence means only trivial combinations give zero.',
  overview: `The linear span of a set of vectors is the set of ALL possible linear combinations of those vectors. Vectors are linearly independent if no nontrivial linear combination of them equals the zero vector.`,
  working: `Independence test: c₁v₁+c₂v₂+...+cₙvₙ=0 forces all cᵢ=0 for independent vectors; if some cᵢ can be nonzero, the set is dependent.
Worked example: The set {(1,0),(2,0)} is linearly DEPENDENT (one is a scalar multiple of the other) and cannot be a basis. {(1,0),(0,1)} is independent.
Practical test: set up the combination equation, form the coefficient matrix, and check its determinant/rank — nonzero determinant (for a square matrix) confirms independence.`,
  formulas: null,
  examTip: `To test independence, set up the combination equation, form the coefficient matrix, and check its determinant/rank — this structured method earns method marks even if the final conclusion is a single sentence.`,
  commonMistake: `Declaring a set independent because it "looks different" — proportionality (one vector a scalar multiple of another) always means dependence.`,
  quickCheck: [{ q: 'Are {(1,0),(2,0)} independent?', a: 'No — (2,0) = 2(1,0), so a nontrivial combination gives zero: the set is dependent.' }]
},
{
  id: 'm3-basis-dimension', course: 'maths', unit: 3, category: 'Vector Spaces',
  title: 'Basis and Dimension',
  summary: 'A basis is an independent spanning set; dimension counts its vectors.',
  overview: `A basis is a linearly independent set that spans the entire vector space. The dimension is the number of vectors in any basis of that space.`,
  working: `Two properties, both required: independence + spanning. A spanning set with MORE vectors than the dimension is dependent (not a basis); an independent set with FEWER doesn't span.
Worked example: In ℝ², {(1,0),(0,1)} is a basis (linearly independent + spans ℝ²), so dim(ℝ²)=2.`,
  formulas: null,
  examTip: `When asked to "show that a set is a basis", demonstrate BOTH properties separately: first independence (determinant/rank test), then spanning (express a general vector as a combination).`,
  commonMistake: `Confusing "spans the space" with "is a basis" — only a minimal spanning set (exactly dimension-many, independent vectors) qualifies.`,
  quickCheck: [{ q: 'What two properties must a basis satisfy?', a: 'Linear independence AND spanning the whole space.' }]
},
{
  id: 'm3-linear-maps', course: 'maths', unit: 3, category: 'Vector Spaces',
  title: 'Linear Transformations: Range, Kernel, Rank, Nullity',
  summary: 'Maps preserving addition and scalars; rank = dim(range), nullity = dim(kernel).',
  overview: `A linear transformation (linear map) T: V→W between vector spaces preserves vector addition and scalar multiplication: T(u+v)=T(u)+T(v) and T(cv)=cT(v).`,
  working: `Range and Kernel: The Range (image) of T is the set of all possible outputs T(v) for v in V. The Kernel (null space) of T is the set of all v in V such that T(v)=0. Rank(T) = dimension of the range; Nullity(T) = dimension of the kernel.
Worked example: For T(x,y)=(x,0) mapping ℝ²→ℝ², the range is the x-axis (dim 1, so rank=1); the kernel is the y-axis, i.e., all (0,y) (dim 1, so nullity=1).`,
  formulas: null,
  examTip: `Always verify linearity explicitly by checking both T(u+v)=T(u)+T(v) and T(cv)=cT(v) with general vectors, not specific numbers, when asked to "show T is linear."`,
  commonMistake: `Assuming any function between vector spaces is automatically linear — functions involving squares, constants added, or products of coordinates are typically NOT linear.`,
  quickCheck: [{ q: 'What is another name for the kernel of a linear transformation?', a: 'The null space.' }]
},
{
  id: 'm3-rank-nullity', course: 'maths', unit: 3, category: 'Vector Spaces',
  title: 'Rank-Nullity Theorem and Inverse of a Linear Map',
  summary: 'Rank(T) + Nullity(T) = dim(V); invertibility needs injective + surjective.',
  overview: `The Rank-Nullity Theorem states: for T: V→W, Rank(T) + Nullity(T) = dim(V). It links how much of the domain "survives" (rank) versus how much "collapses to zero" (nullity).`,
  working: `Inverse of a linear transformation: T is invertible iff it's both one-to-one (injective, nullity=0) and onto (surjective, rank=dim(W)); then T⁻¹ is also linear.
Worked example: If dim(V)=5 and Rank(T)=3, then by Rank-Nullity, Nullity(T) = 5−3 = 2.`,
  formulas: [{ formula: 'Rank(T) + Nullity(T) = dim(V)', meaning: 'Rank-Nullity Theorem', units: '—', condition: 'T: V→W linear, V finite-dimensional' }],
  examTip: `Rank-Nullity numericals are quick, guaranteed marks — as soon as you're given dim(V) and either rank or nullity, the other follows immediately by subtraction.`,
  commonMistake: `Applying Rank-Nullity using dim(W) instead of dim(V) — the theorem's total is always the dimension of the DOMAIN.`,
  quickCheck: [{ q: 'If T: ℝ⁴→ℝ³ has nullity 1, what is its rank?', a: '4 − 1 = 3.' }]
},
{
  id: 'm3-matrix-of-map', course: 'maths', unit: 3, category: 'Vector Spaces',
  title: 'Matrix of a Linear Map and Composition',
  summary: 'T(v) = Av relative to chosen bases; composition multiplies matrices.',
  overview: `Any linear transformation between finite-dimensional vector spaces can be represented by a matrix (relative to chosen bases), so that T(v) = Av — turning abstract map questions into concrete matrix computations.`,
  working: `Matrix of a linear map: the j-th column of A is the coordinate vector of T(bⱼ), where bⱼ is the j-th basis vector of the domain basis.
Composition: If T₁: U→V and T₂: V→W are linear, their composition T₂∘T₁: U→W is also linear, with matrix representation = (matrix of T₂)×(matrix of T₁) — note the order (composition reads right-to-left, like function composition).`,
  formulas: [{ formula: '[T₂∘T₁] = [T₂]·[T₁]', meaning: 'Matrix of a composition', units: '—', condition: 'T₁, T₂ linear with compatible dimensions' }],
  examTip: `When finding a matrix of a linear map, state which bases you are using — the matrix changes with the choice of basis, and stating it earns clarity marks.`,
  commonMistake: `Multiplying the matrices in the wrong order for a composition — [T₂∘T₁] is [T₂]×[T₁], with T₁ applied first appearing on the RIGHT.`,
  quickCheck: [{ q: 'What is the j-th column of the matrix of a linear map T?', a: 'The coordinate vector of T applied to the j-th basis vector of the domain.' }]
}
];

const MATHS_UNIT4_TOPICS = [
{
  id: 'm4-eigenvalues', course: 'maths', unit: 4, category: 'Vector Spaces II',
  title: 'Eigenvalues and Eigenvectors',
  summary: 'Av = λv: directions a matrix only scales; found from det(A − λI) = 0.',
  overview: `For a square matrix A, an eigenvector v (nonzero) and its corresponding eigenvalue λ satisfy Av = λv — meaning A only scales v (by factor λ) without changing its direction.`,
  working: `Method: Solve the characteristic equation det(A − λI) = 0 for λ (the eigenvalues); for each λ, solve (A−λI)v=0 for the eigenvector v.
Worked example: A = [[2,0],[0,3]]. Characteristic equation: (2−λ)(3−λ)=0 → λ=2 or λ=3. For λ=2: eigenvector (1,0). For λ=3: eigenvector (0,1).`,
  formulas: [{ formula: 'det(A − λI) = 0', meaning: 'Characteristic equation giving the eigenvalues', units: '—', condition: 'A square' }],
  examTip: `Always verify your final answer by plugging the eigenvector back into Av=λv — this quick check catches sign/arithmetic errors before submission.`,
  commonMistake: `Forgetting that eigenvectors are defined only up to a scalar multiple — any nonzero multiple of a valid eigenvector is also valid; don't worry about "matching" a specific normalization unless asked for a unit eigenvector.`,
  quickCheck: [{ q: 'What equation gives the eigenvalues of A?', a: 'det(A − λI) = 0.' }]
},
{
  id: 'm4-special-matrices', course: 'maths', unit: 4, category: 'Vector Spaces II',
  title: 'Symmetric, Skew-Symmetric and Orthogonal Matrices',
  summary: 'Aᵀ=A, Aᵀ=−A, and AᵀA=I — the three special square-matrix types.',
  overview: `A matrix A is Symmetric if Aᵀ=A (mirror-image about the main diagonal); Skew-symmetric if Aᵀ=−A (diagonal entries must be 0); Orthogonal if AᵀA=I (its inverse equals its transpose; rows/columns are orthonormal).`,
  working: `Quick classification drill: transpose the matrix and compare. For skew-symmetric, every diagonal entry must satisfy aᵢᵢ = −aᵢᵢ, hence aᵢᵢ = 0. For orthogonal matrices, both the rows and the columns form orthonormal sets, and |det(A)| = 1.
Key fact used constantly with diagonalization: every real symmetric matrix is diagonalizable, and its eigenvectors corresponding to distinct eigenvalues are automatically orthogonal.`,
  formulas: [{ formula: 'AᵀA = I', meaning: 'Defining property of an orthogonal matrix (so A⁻¹ = Aᵀ)', units: '—', condition: 'A square' }],
  examTip: `For "express A as the sum of a symmetric and a skew-symmetric matrix", use A = ½(A + Aᵀ) + ½(A − Aᵀ) — memorize this decomposition; it's a standard 5-mark question.`,
  commonMistake: `Forgetting that a skew-symmetric matrix must have all zero diagonal entries — a matrix with nonzero diagonal terms can never be skew-symmetric.`,
  quickCheck: [{ q: 'What are the diagonal entries of a skew-symmetric matrix?', a: 'All zero (since aᵢᵢ = −aᵢᵢ forces aᵢᵢ = 0).' }]
},
{
  id: 'm4-diagonalization', course: 'maths', unit: 4, category: 'Vector Spaces II',
  title: 'Eigenbases and Diagonalization',
  summary: 'A = PDP⁻¹ with D the eigenvalue matrix and P the eigenvector matrix.',
  overview: `A matrix A is diagonalizable if it can be written as A = PDP⁻¹, where D is a diagonal matrix of eigenvalues and P's columns are the corresponding eigenvectors — possible when A has enough linearly independent eigenvectors (an "eigenbasis").`,
  working: `Procedure: (1) find all eigenvalues, (2) find an eigenvector for each, (3) assemble P with the eigenvectors as columns and D with the eigenvalues on the diagonal, (4) verify AP = PD (equivalent to A = PDP⁻¹ but avoids computing an inverse).
Worked example: For A=[[2,0],[0,3]] (already diagonal): P=I, D=A itself.`,
  formulas: [{ formula: 'A = PDP⁻¹ (equivalently AP = PD)', meaning: 'Diagonalization of A', units: '—', condition: 'A has n linearly independent eigenvectors' }],
  examTip: `When asked to "diagonalize A", present all three pieces clearly: P (eigenvector matrix), D (eigenvalue diagonal matrix), and verify AP = PD, which avoids computing an inverse.`,
  commonMistake: `Placing eigenvalues in D in a different order than their corresponding eigenvectors appear as columns in P — the order in D must exactly match the column order in P.`,
  quickCheck: [{ q: 'Is every symmetric matrix diagonalizable?', a: 'Yes, always (over the reals).' }]
},
{
  id: 'm4-inner-product', course: 'maths', unit: 4, category: 'Vector Spaces II',
  title: 'Inner Product Spaces, Orthogonal Sets and Complements',
  summary: 'Generalized dot product; orthogonal pairs have zero inner product, orthonormal adds unit length.',
  overview: `An inner product ⟨u,v⟩ generalizes the dot product, giving vector spaces a notion of length (‖v‖=√⟨v,v⟩) and angle. A set of vectors is Orthogonal if every pair has inner product 0; Orthonormal if additionally every vector has unit length (‖v‖=1). The Orthogonal Complement of a subspace W is the set of all vectors orthogonal to every vector in W.`,
  working: `Worked example: {(1,0),(0,1)} in ℝ² (standard dot product) is orthonormal: (1,0)·(0,1)=0, and each has length 1.
Orthogonal complement: W⊥ = { v : ⟨v,w⟩ = 0 for every w in W }; together W and W⊥ span the whole space, and dim(W) + dim(W⊥) = dim(V).`,
  formulas: [{ formula: '‖v‖ = √⟨v,v⟩', meaning: 'Length (norm) induced by the inner product', units: '—', condition: 'inner product space' }],
  examTip: `Remember orthogonal ≠ orthonormal — orthogonal only requires zero inner products between pairs; orthonormal additionally requires each vector to be normalized to unit length.`,
  commonMistake: `Forgetting to normalize (divide each vector by its own length) when a question specifically asks for an ORTHONORMAL set/basis, not just an orthogonal one.`,
  quickCheck: [{ q: 'What extra condition turns an orthogonal set into an orthonormal one?', a: 'Every vector must additionally have unit length (norm = 1).' }]
},
{
  id: 'm4-gram-schmidt', course: 'maths', unit: 4, category: 'Vector Spaces II',
  title: 'Gram-Schmidt Orthogonalization Process',
  summary: 'Algorithm converting an independent set into an orthogonal/orthonormal one.',
  overview: `An algorithm that converts any linearly independent set of vectors into an orthogonal (then orthonormal, after normalizing) set that spans the same subspace.`,
  working: `Method (for vectors v₁, v₂, ...): u₁ = v₁. u₂ = v₂ − proj_{u₁}(v₂), where proj_u(v) = (⟨v,u⟩/⟨u,u⟩)u. Continue: uₖ = vₖ − Σ(projections of vₖ onto all previous uᵢ). Finally normalize each uᵢ by dividing by its own norm to get an orthonormal set.
Worked example: v₁=(1,1), v₂=(2,0). u₁=(1,1). proj_{u₁}(v₂) = [(2,0)·(1,1)/(1,1)·(1,1)]·(1,1) = (2/2)(1,1)=(1,1). u₂ = (2,0)−(1,1) = (1,−1). Result: orthogonal set {(1,1),(1,−1)}.`,
  formulas: [{ formula: 'uₖ = vₖ − Σᵢ₍ᵢ₎ (⟨vₖ,uᵢ⟩/⟨uᵢ,uᵢ⟩)uᵢ', meaning: 'Gram-Schmidt step subtracting all previous projections', units: '—', condition: 'v₁…vₖ linearly independent' }],
  examTip: `Process the vectors strictly in the given order and subtract the projection onto EVERY previously-found u vector at each step (not just the immediately preceding one) once you're past the second vector — a common source of lost marks in 3-vector problems.`,
  commonMistake: `Using the ORIGINAL vᵢ vectors in the projection formula for later steps instead of the newly-computed, already-orthogonalized uᵢ vectors.`,
  quickCheck: [{ q: 'What is the very first vector of the orthogonalized set always equal to?', a: 'The first original vector, u₁ = v₁ (unchanged).' }]
}
];
