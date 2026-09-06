/* ============================================================
   MATHEMATICS-I — QUESTION BANK
   Source: content/01-Mathematics-I.md
   ============================================================ */

const MATHS_QUESTIONS = [
/* -------- Unit I — Calculus -------- */
{ id:'mq1', course:'maths', unit:1, topic:'m1-lhospital', type:'mcq', difficulty:'Easy', marks:1,
  question:'L\'Hospital\'s Rule may be applied directly to which pair of forms?',
  options:['0/0 and ∞/∞','0×∞ and ∞−∞ only','0⁰ and 1^∞ only','Any indeterminate form directly'], answer:'0/0 and ∞/∞',
  explanation:'Only 0/0 and ∞/∞ qualify directly; all other indeterminate forms must first be rewritten into one of these.' },

{ id:'mq2', course:'maths', unit:1, topic:'m1-lhospital', type:'mcq', difficulty:'Medium', marks:1,
  question:'lim(x→0) (sin x)/x equals:',
  options:['0','1','∞','Does not exist'], answer:'1',
  explanation:'0/0 form → differentiate: lim (cos x)/1 = cos 0 = 1.' },

{ id:'mq3', course:'maths', unit:1, topic:'m1-maxima-minima', type:'mcq', difficulty:'Easy', marks:1,
  question:'For f(x) = x³ − 3x, the local minimum occurs at:',
  options:['x = −1','x = 1','x = 0','x = 3'], answer:'x = 1',
  explanation:'f\'(x)=3x²−3=0 → x=±1; f\'\'(1)=6>0 → local minimum at x=1 (value −2).' },

{ id:'mq4', course:'maths', unit:1, topic:'m1-rolle', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which condition is REQUIRED by Rolle\'s Theorem but NOT by Lagrange\'s MVT?',
  options:['Continuity on [a,b]','Differentiability on (a,b)','f(a) = f(b)','Existence of f\'(c) = 0'], answer:'f(a) = f(b)',
  explanation:'LMVT drops the equal-endpoints requirement; everything else stays.' },

{ id:'mq5', course:'maths', unit:1, topic:'m1-mvt-cauchy', type:'mcq', difficulty:'Hard', marks:1,
  question:'Cauchy\'s MVT applied to f and g requires, throughout (a,b):',
  options:['g(x) ≠ 0','g\'(x) ≠ 0','f\'(x) = g\'(x)','f(a) = g(b)'], answer:'g\'(x) ≠ 0',
  explanation:'The denominator difference quotient needs g\'(x)≠0 so the ratio f\'(c)/g\'(c) is defined.' },

{ id:'mq6', course:'maths', unit:1, topic:'m1-taylor-maclaurin', type:'mcq', difficulty:'Easy', marks:1,
  question:'The Maclaurin series of a function is its Taylor series about:',
  options:['x = 1','x = −1','x = 0','any point a'], answer:'x = 0',
  explanation:'Maclaurin = Taylor with a = 0.' },

{ id:'mq7', course:'maths', unit:1, topic:'m1-taylor-maclaurin', type:'mcq', difficulty:'Medium', marks:1,
  question:'Up to the x³ term, eˣ ≈',
  options:['1 + x + x²/2 + x³/6','1 + x + x² + x³','x + x²/2 + x³/3','1 + x²/2 + x³/6'], answer:'1 + x + x²/2 + x³/6',
  explanation:'All derivatives of eˣ at 0 equal 1, so coefficients are 1/n!.' },

{ id:'mq8', course:'maths', unit:1, topic:'m1-beta-gamma', type:'mcq', difficulty:'Medium', marks:1,
  question:'Γ(1/2) equals:',
  options:['1','√π','π/2','0.5!'], answer:'√π',
  explanation:'A standard result worth memorizing: Γ(1/2) = √π.' },

{ id:'mq9', course:'maths', unit:1, topic:'m1-curvature-evolutes', type:'mcq', difficulty:'Hard', marks:1,
  question:'The evolute of a curve is:',
  options:['The locus of its centres of curvature','Its inverse function','The envelope of its tangents','Its reflection about y=x'], answer:'The locus of its centres of curvature',
  explanation:'The original curve is then called the involute of its evolute.' },

{ id:'mq10', course:'maths', unit:1, topic:'m1-solids-revolution', type:'mcq', difficulty:'Easy', marks:1,
  question:'Rotating y = f(x) about the x-axis, the volume element is:',
  options:['π y² dx','2π y dx','y² dx','π y dx'], answer:'π y² dx',
  explanation:'Disc method: each slice is a disc of radius y and thickness dx.' },

/* Unit I — short/long/numerical */
{ id:'mq11', course:'maths', unit:1, topic:'m1-lhospital', type:'short', difficulty:'Easy', marks:2,
  question:'State the two indeterminate forms to which L\'Hospital\'s Rule applies directly, and name two other indeterminate forms that must first be rewritten.',
  answer:'Directly: 0/0 and ∞/∞. Others needing rewriting: 0×∞, ∞−∞, 0⁰, 1^∞, ∞⁰.',
  explanation:'The rule only fires on quotient forms; the others are algebraically converted first.' },

{ id:'mq12', course:'maths', unit:1, topic:'m1-mvt-cauchy', type:'numerical', difficulty:'Medium', marks:5,
  question:'Verify Lagrange\'s Mean Value Theorem for f(x) = x² on [1, 3] and find the value of c.',
  answer:'f is continuous on [1,3] and differentiable on (1,3). Average rate = (f(3)−f(1))/(3−1) = (9−1)/2 = 4. f\'(c) = 2c = 4 → c = 2, which lies in (1,3). LMVT verified with c = 2.',
  explanation:'Full marks require: condition check, average-rate computation, solving f\'(c), and confirming c ∈ (a,b).' },

{ id:'mq13', course:'maths', unit:1, topic:'m1-rolle', type:'long', difficulty:'Hard', marks:5,
  question:'State Rolle\'s Theorem with all its conditions. Explain why each condition is necessary, giving a counter-example for the failure of any one condition.',
  answer:'If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then ∃ c ∈ (a,b) with f\'(c)=0. Continuity ensures no jumps so extremes are attained; differentiability ensures slopes exist in the interior; f(a)=f(b) equalizes the endpoints so an interior extremum of f\' must be flat. Drop continuity (jump at one point) or differentiability (corner) or equal endpoints, and a counter-example can avoid any zero-slope point.',
  explanation:'The grading emphasis is the verification/condition discussion, not just the statement.' },

{ id:'mq14', course:'maths', unit:1, topic:'m1-beta-gamma', type:'numerical', difficulty:'Medium', marks:5,
  question:'Evaluate Γ(5) and express β(m,n) in terms of Gamma functions. Hence state Γ(n) for positive integer n.',
  answer:'Γ(5) = 4! = 24. β(m,n) = Γ(m)Γ(n)/Γ(m+n). For positive integer n, Γ(n) = (n−1)!, equivalently Γ(n+1) = n!.',
  explanation:'Γ(n+1)=n·Γ(n) with Γ(1)=1 gives the factorial reduction.' },

{ id:'mq15', course:'maths', unit:1, topic:'m1-solids-revolution', type:'numerical', difficulty:'Medium', marks:5,
  question:'Find the volume generated by rotating y = x from x = 0 to x = 2 about the x-axis.',
  answer:'V = π∫₀² x² dx = π[x³/3]₀² = 8π/3 cubic units.',
  explanation:'Straight disc-method application: V = π∫ y² dx.' },

/* -------- Unit II — Matrices -------- */
{ id:'mq16', course:'maths', unit:2, topic:'m2-matrix-basics', type:'mcq', difficulty:'Easy', marks:1,
  question:'For matrix multiplication AB to be defined:',
  options:['A and B must have equal dimensions','Columns of A must equal rows of B','Rows of A must equal columns of B','Both must be square'], answer:'Columns of A must equal rows of B',
  explanation:'(m×n)·(n×p) works; the inner dimensions must match.' },

{ id:'mq17', course:'maths', unit:2, topic:'m2-determinants', type:'mcq', difficulty:'Easy', marks:1,
  question:'det[[2,3],[1,4]] equals:',
  options:['5','11','−5','2'], answer:'5',
  explanation:'ad − bc = 2(4) − 3(1) = 5.' },

{ id:'mq18', course:'maths', unit:2, topic:'m2-rank-echelon', type:'mcq', difficulty:'Medium', marks:1,
  question:'The rank of a matrix equals:',
  options:['Its number of rows','The number of nonzero rows in its echelon form','Its largest entry','Its determinant'], answer:'The number of nonzero rows in its echelon form',
  explanation:'Row reduction preserves rank; counting nonzero rows reads it off.' },

{ id:'mq19', course:'maths', unit:2, topic:'m2-inverse', type:'mcq', difficulty:'Medium', marks:1,
  question:'A⁻¹ = adj(A)/det(A) fails to exist exactly when:',
  options:['A is not square','det(A) = 0','A is symmetric','A has a zero entry'], answer:'det(A) = 0',
  explanation:'Division by the determinant requires it to be nonzero.' },

{ id:'mq20', course:'maths', unit:2, topic:'m2-linear-systems', type:'mcq', difficulty:'Hard', marks:1,
  question:'A system AX=B has rank(A) = rank([A|B]) < n (number of unknowns). The system has:',
  options:['A unique solution','Infinitely many solutions','No solution','Exactly two solutions'], answer:'Infinitely many solutions',
  explanation:'Consistent but under-determined: the ranks match yet fall short of n, leaving free variables.' },

{ id:'mq21', course:'maths', unit:2, topic:'m2-gauss', type:'mcq', difficulty:'Medium', marks:1,
  question:'Gauss-Jordan elimination differs from Gauss elimination because it:',
  options:['Uses determinants','Reduces all the way to the identity, needing no back-substitution','Works only for 2×2 systems','Requires Cramer\'s Rule first'], answer:'Reduces all the way to the identity, needing no back-substitution',
  explanation:'Gauss stops at echelon form and back-substitutes; Gauss-Jordan continues to reduced form.' },

{ id:'mq22', course:'maths', unit:2, topic:'m2-determinants', type:'short', difficulty:'Easy', marks:2,
  question:'State what det(A) = 0 implies about the invertibility of A and about the rows of A.',
  answer:'A is singular — no inverse exists — and its rows are linearly dependent (at least one row is a combination of the others).',
  explanation:'Zero determinant ⇔ singular ⇔ dependent rows.' },

{ id:'mq23', course:'maths', unit:2, topic:'m2-linear-systems', type:'numerical', difficulty:'Medium', marks:5,
  question:'Solve by Cramer\'s Rule: x + y = 3, x − y = 1.',
  answer:'det(A) = [[1,1],[1,−1]] = −2. det(A₁) = [[3,1],[1,−1]] = −4 → x = −4/−2 = 2. det(A₂) = [[1,3],[1,1]] = −2 → y = −2/−2 = 1. Solution: x = 2, y = 1.',
  explanation:'Replace each column in turn with B and divide by det(A).' },

{ id:'mq24', course:'maths', unit:2, topic:'m2-rank-echelon', type:'long', difficulty:'Hard', marks:5,
  question:'Define the rank of a matrix. Describe the echelon-form method of finding it and explain why elementary row operations do not change the rank.',
  answer:'Rank = number of linearly independent rows (equivalently, the order of the largest nonzero minor, or nonzero rows in echelon form). Row-reduce with swaps/scalar-multiples/additions until each leading entry sits right of the one above with zero rows at the bottom; count nonzero rows. These operations are reversible and never create/destroy linear relations among rows, so independence count — the rank — is preserved.',
  explanation:'Examiners expect the definition, the method, and the invariance argument.' },

{ id:'mq25', course:'maths', unit:2, topic:'m2-gauss', type:'long', difficulty:'Exam Challenge', marks:5,
  question:'Compare Gauss elimination and Gauss-Jordan elimination: procedure, back-substitution, and the final form reached. When is each preferred?',
  answer:'Gauss: reduce [A|B] to echelon (upper-triangular) form, then back-substitute from the last equation up; preferred when only the solution is needed and arithmetic economy matters. Gauss-Jordan: continue clearing above pivots until the left block is the identity; the solution reads off the right block with no back-substitution; preferred for computing matrix inverses via [A|I] → [I|A⁻¹] and for small systems where clarity matters.',
  explanation:'A structured comparison earns full marks: steps, back-substitution, final form, use cases.' },

/* -------- Unit III — Vector Spaces I -------- */
{ id:'mq26', course:'maths', unit:3, topic:'m3-vector-spaces', type:'mcq', difficulty:'Easy', marks:1,
  question:'Which of these is the FIRST thing to check when testing a subset for subspace status?',
  options:['It contains the zero vector','It is finite','Its elements have integer coordinates','It is closed under inverses only'], answer:'It contains the zero vector',
  explanation:'A subset failing the zero-vector test fails immediately, before closure checks.' },

{ id:'mq27', course:'maths', unit:3, topic:'m3-span-dependence', type:'mcq', difficulty:'Medium', marks:1,
  question:'The set {(1,0), (2,0)} in ℝ² is:',
  options:['Linearly independent','Linearly dependent','A basis of ℝ²','A subspace of dimension 2'], answer:'Linearly dependent',
  explanation:'(2,0) = 2(1,0): a nontrivial combination gives zero.' },

{ id:'mq28', course:'maths', unit:3, topic:'m3-basis-dimension', type:'mcq', difficulty:'Medium', marks:1,
  question:'A basis of a vector space is a set that is:',
  options:['Spanning only','Linearly independent only','Linearly independent AND spanning','Any finite set containing zero'], answer:'Linearly independent AND spanning',
  explanation:'Both properties are required; dimension counts the vectors in any such set.' },

{ id:'mq29', course:'maths', unit:3, topic:'m3-linear-maps', type:'mcq', difficulty:'Medium', marks:1,
  question:'For T(x,y) = (x, 0) on ℝ², rank(T) and nullity(T) are:',
  options:['1 and 1','2 and 0','0 and 2','1 and 0'], answer:'1 and 1',
  explanation:'Range = x-axis (dim 1), kernel = y-axis (dim 1); they sum to dim(V)=2 per Rank-Nullity.' },

{ id:'mq30', course:'maths', unit:3, topic:'m3-rank-nullity', type:'mcq', difficulty:'Hard', marks:1,
  question:'T: ℝ⁴→ℝ³ is linear with nullity 1. Its rank is:',
  options:['1','3','4','2'], answer:'3',
  explanation:'Rank-Nullity uses dim of the DOMAIN: 4 = rank + 1 → rank 3.' },

{ id:'mq31', course:'maths', unit:3, topic:'m3-matrix-of-map', type:'mcq', difficulty:'Medium', marks:1,
  question:'If T₁ and T₂ are linear with matrices [T₁], [T₂], the composition T₂∘T₁ has matrix:',
  options:['[T₁][T₂]','[T₂][T₁]','[T₁] + [T₂]','[T₂]ᵀ[T₁]'], answer:'[T₂][T₁]',
  explanation:'Composition applies T₁ first, so its matrix sits on the right.' },

{ id:'mq32', course:'maths', unit:3, topic:'m3-vector-spaces', type:'short', difficulty:'Easy', marks:2,
  question:'Show briefly that the set {(x, y, 0) : x, y ∈ ℝ} is a subspace of ℝ³.',
  answer:'(1) Contains zero: (0,0,0) is in the set. (2) Closed under addition: (x₁,y₁,0)+(x₂,y₂,0)=(x₁+x₂, y₁+y₂, 0) stays in the set. (3) Closed under scalars: c(x,y,0) = (cx, cy, 0) stays in the set. Hence a subspace (the xy-plane).',
  explanation:'All three subspace-test steps must be written.' },

{ id:'mq33', course:'maths', unit:3, topic:'m3-rank-nullity', type:'numerical', difficulty:'Medium', marks:5,
  question:'A linear map T: V→W has dim(V) = 5 and Rank(T) = 3. Find Nullity(T) and state the theorem used.',
  answer:'Rank-Nullity Theorem: Rank(T) + Nullity(T) = dim(V) → Nullity(T) = 5 − 3 = 2.',
  explanation:'One-step subtraction once dim(V) and rank are known.' },

{ id:'mq34', course:'maths', unit:3, topic:'m3-basis-dimension', type:'long', difficulty:'Exam Challenge', marks:5,
  question:'Define basis and dimension. Explain why a spanning set with more vectors than the dimension cannot be a basis, and why any two bases of a space have the same size.',
  answer:'A basis is a linearly independent spanning set; dimension is the number of vectors in any basis. An over-sized spanning set is dependent: with more vectors than the dimension, some vector is expressible via the others, producing a nontrivial zero combination. Any two bases must match in size because an independent set can never exceed a spanning set in size — formally, exchanging spanning vectors for independent ones preserves counts, forcing equal sizes.',
  explanation:'The exchange argument is the conceptual heart examiners look for.' },

/* -------- Unit IV — Vector Spaces II -------- */
{ id:'mq35', course:'maths', unit:4, topic:'m4-eigenvalues', type:'mcq', difficulty:'Easy', marks:1,
  question:'Eigenvalues of A are the roots of:',
  options:['det(A) = 0','det(A − λI) = 0','A − λI = 0','det(A + λI) = 1'], answer:'det(A − λI) = 0',
  explanation:'The characteristic equation; each root λ has (A−λI)v = 0 for its eigenvector.' },

{ id:'mq36', course:'maths', unit:4, topic:'m4-special-matrices', type:'mcq', difficulty:'Medium', marks:1,
  question:'The diagonal entries of a skew-symmetric matrix are:',
  options:['All 1','All 0','Arbitrary','Equal to det(A)'], answer:'All 0',
  explanation:'aᵢᵢ = −aᵢᵢ forces aᵢᵢ = 0.' },

{ id:'mq37', course:'maths', unit:4, topic:'m4-diagonalization', type:'mcq', difficulty:'Medium', marks:1,
  question:'In A = PDP⁻¹, the columns of P are:',
  options:['Eigenvalues','Eigenvectors of A','Row-reduced pivots','The entries of D'], answer:'Eigenvectors of A',
  explanation:'D carries the eigenvalues on its diagonal, paired in order with P\'s columns.' },

{ id:'mq38', course:'maths', unit:4, topic:'m4-inner-product', type:'mcq', difficulty:'Easy', marks:1,
  question:'An orthogonal set becomes orthonormal when:',
  options:['Vectors are sorted','Each vector is normalized to unit length','One vector is removed','Vectors are doubled'], answer:'Each vector is normalized to unit length',
  explanation:'Orthogonality stays; each vector is divided by its own norm.' },

{ id:'mq39', course:'maths', unit:4, topic:'m4-gram-schmidt', type:'mcq', difficulty:'Hard', marks:1,
  question:'In Gram-Schmidt, u₂ is computed as:',
  options:['v₂ itself','v₂ minus its projection onto u₁','v₂ plus its projection onto v₁','The normalized v₂'], answer:'v₂ minus its projection onto u₁',
  explanation:'Subtracting the projection makes u₂ orthogonal to u₁ while staying in the span.' },

{ id:'mq40', course:'maths', unit:4, topic:'m4-diagonalization', type:'short', difficulty:'Medium', marks:2,
  question:'State the pairing rule between D and P when diagonalizing, and the verification step that avoids computing P⁻¹.',
  answer:'The i-th diagonal entry of D must be the eigenvalue whose eigenvector is the i-th column of P — the orders must match exactly. Verify with AP = PD instead of forming A = PDP⁻¹.',
  explanation:'AP = PD confirms correctness with one multiplication, no inverse.' },

{ id:'mq41', course:'maths', unit:4, topic:'m4-eigenvalues', type:'numerical', difficulty:'Medium', marks:5,
  question:'Find the eigenvalues and eigenvectors of A = [[2,0],[0,3]].',
  answer:'Characteristic equation: (2−λ)(3−λ) = 0 → λ = 2, 3. For λ=2: (A−2I)v=0 → v=(1,0). For λ=3: v=(0,1). Check: A(1,0)=(2,0)=2(1,0) ✓; A(0,1)=(0,3)=3(0,1) ✓.',
  explanation:'Diagonal matrices factor immediately; verification via Av=λv is the exam bonus.' },

{ id:'mq42', course:'maths', unit:4, topic:'m4-gram-schmidt', type:'long', difficulty:'Exam Challenge', marks:5,
  question:'State the Gram-Schmidt process and apply it to v₁=(1,1), v₂=(2,0) to obtain an orthogonal set.',
  answer:'u₁ = v₁. For k ≥ 2: uₖ = vₖ − Σ (⟨vₖ,uᵢ⟩/⟨uᵢ,uᵢ⟩)uᵢ over all previous i; normalize at the end for orthonormality. Applying: u₁=(1,1); ⟨v₂,u₁⟩=(2,0)·(1,1)=2, ⟨u₁,u₁⟩=2 → proj = (2/2)(1,1)=(1,1); u₂ = (2,0)−(1,1) = (1,−1). Orthogonal set: {(1,1),(1,−1)}. Check: (1,1)·(1,−1)=0 ✓.',
  explanation:'Full marks: general formula, projection arithmetic, resulting set, orthogonality check.' }
];
