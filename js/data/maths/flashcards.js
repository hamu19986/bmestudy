/* ============================================================
   MATHEMATICS-I — FLASHCARDS
   Source: content/01-Mathematics-I.md
   ============================================================ */

const MATHS_FLASHCARDS = [
/* -------- Unit I — Calculus -------- */
{ id:'mfc1', course:'maths', unit:1, topic:'m1-lhospital', category:'Definition', front:'When can L\'Hospital\'s Rule be applied directly?', back:'Only when a limit is in the 0/0 or ∞/∞ form; other indeterminate forms (0×∞, ∞−∞, 0⁰, 1^∞, ∞⁰) must be algebraically rewritten first.' },
{ id:'mfc2', course:'maths', unit:1, topic:'m1-lhospital', category:'Concept', front:'How does L\'Hospital\'s Rule differentiate the ratio?', back:'Differentiate numerator and denominator SEPARATELY (not the quotient rule): lim f/g = lim f\'/g\'.' },
{ id:'mfc3', course:'maths', unit:1, topic:'m1-maxima-minima', category:'Formula', front:'Second derivative test for maxima/minima?', back:'At a critical point (f\'=0): f\'\' < 0 → local maximum; f\'\' > 0 → local minimum; f\'\' = 0 → inconclusive (use higher derivatives or sign-change test).' },
{ id:'mfc4', course:'maths', unit:1, topic:'m1-rolle', category:'Definition', front:'State Rolle\'s Theorem.', back:'If f is continuous on [a,b], differentiable on (a,b) and f(a)=f(b), then ∃ c ∈ (a,b) with f\'(c)=0.' },
{ id:'mfc5', course:'maths', unit:1, topic:'m1-mvt-cauchy', category:'Formula', front:'Lagrange\'s Mean Value Theorem formula?', back:'f\'(c) = [f(b) − f(a)] / (b − a) for some c ∈ (a,b), given continuity on [a,b] and differentiability on (a,b).' },
{ id:'mfc6', course:'maths', unit:1, topic:'m1-mvt-cauchy', category:'Difference', front:'Rolle\'s vs LMVT — the key difference?', back:'Rolle\'s additionally requires f(a) = f(b); LMVT works for any endpoint values.' },
{ id:'mfc7', course:'maths', unit:1, topic:'m1-taylor-maclaurin', category:'Formula', front:'Maclaurin series of eˣ?', back:'1 + x + x²/2! + x³/3! + x⁴/4! + … (every derivative of eˣ at 0 is 1).' },
{ id:'mfc8', course:'maths', unit:1, topic:'m1-taylor-maclaurin', category:'Memory Trick', front:'Maclaurin series of sin x and cos x?', back:'sin x = x − x³/3! + x⁵/5! − … (odd powers); cos x = 1 − x²/2! + x⁴/4! − … (even powers).' },
{ id:'mfc9', course:'maths', unit:1, topic:'m1-taylor-maclaurin', category:'Formula', front:'Maclaurin series of ln(1+x)?', back:'x − x²/2 + x³/3 − x⁴/4 + … (valid for −1 < x ≤ 1).' },
{ id:'mfc10', course:'maths', unit:1, topic:'m1-curvature-evolutes', category:'Formula', front:'Radius of curvature (Cartesian form)?', back:'ρ = [1 + (dy/dx)²]^(3/2) / |d²y/dx²| — memorize the 3/2 power and the absolute value.' },
{ id:'mfc11', course:'maths', unit:1, topic:'m1-curvature-evolutes', category:'Definition', front:'What is the evolute of a curve?', back:'The locus of all centres of curvature; the original curve is the involute of its evolute.' },
{ id:'mfc12', course:'maths', unit:1, topic:'m1-beta-gamma', category:'Formula', front:'Define the Gamma function.', back:'Γ(n) = ∫₀^∞ xⁿ⁻¹ e⁻ˣ dx for n > 0; Γ(n+1) = n·Γ(n), so Γ(n+1) = n! for positive integers; Γ(1)=1; Γ(1/2)=√π.' },
{ id:'mfc13', course:'maths', unit:1, topic:'m1-beta-gamma', category:'Formula', front:'Relation between Beta and Gamma functions?', back:'β(m,n) = Γ(m)·Γ(n) / Γ(m+n), symmetric in m and n (m, n > 0).' },
{ id:'mfc14', course:'maths', unit:1, topic:'m1-solids-revolution', category:'Formula', front:'Volume of revolution about the x-axis?', back:'V = π ∫ₐᵇ y² dx where y = f(x) — the disc method.' },
{ id:'mfc15', course:'maths', unit:1, topic:'m1-solids-revolution', category:'Formula', front:'Surface area of revolution about the x-axis?', back:'S = 2π ∫ₐᵇ y √(1 + (dy/dx)²) dx.' },

/* -------- Unit II — Matrices -------- */
{ id:'mfc16', course:'maths', unit:2, topic:'m2-matrix-basics', category:'Concept', front:'When is the product AB defined, and what is its size?', back:'Columns of A must equal rows of B; the result is (rows of A) × (columns of B). AB ≠ BA in general.' },
{ id:'mfc17', course:'maths', unit:2, topic:'m2-determinants', category:'Formula', front:'Determinant of a 2×2 matrix?', back:'det[[a,b],[c,d]] = ad − bc.' },
{ id:'mfc18', course:'maths', unit:2, topic:'m2-determinants', category:'Definition', front:'What does det(A) = 0 mean?', back:'A is singular — not invertible — and its rows are linearly dependent.' },
{ id:'mfc19', course:'maths', unit:2, topic:'m2-inverse', category:'Formula', front:'Formula for the inverse of a matrix?', back:'A⁻¹ = adj(A) / det(A), existing only when det(A) ≠ 0.' },
{ id:'mfc20', course:'maths', unit:2, topic:'m2-rank-echelon', category:'Definition', front:'Define the rank of a matrix.', back:'The number of linearly independent rows (or columns) — equivalently, the number of nonzero rows in its row-echelon form.' },
{ id:'mfc21', course:'maths', unit:2, topic:'m2-rank-echelon', category:'Definition', front:'What is echelon form?', back:'Each leading nonzero entry sits to the right of the one above; all-zero rows are at the bottom.' },
{ id:'mfc22', course:'maths', unit:2, topic:'m2-linear-systems', category:'Formula', front:"State Cramer's Rule.", back:'xᵢ = det(Aᵢ) / det(A), where Aᵢ replaces the i-th column of A with B — valid only when det(A) ≠ 0.' },
{ id:'mfc23', course:'maths', unit:2, topic:'m2-linear-systems', category:'Exam Trap', front:'Consistency of AX=B in terms of ranks?', back:'rank(A)=rank([A|B])=n → unique; both equal but < n → infinitely many; rank(A)≠rank([A|B]) → no solution.' },
{ id:'mfc24', course:'maths', unit:2, topic:'m2-gauss', category:'Difference', front:'Gauss vs Gauss-Jordan elimination?', back:'Gauss: reduce to echelon form, then back-substitute. Gauss-Jordan: reduce to the identity — solution reads off directly, no back-substitution.' },

/* -------- Unit III — Vector Spaces I -------- */
{ id:'mfc25', course:'maths', unit:3, topic:'m3-vector-spaces', category:'Definition', front:'The three-step subspace test?', back:'(1) contains the zero vector, (2) closed under addition, (3) closed under scalar multiplication — all three must be shown.' },
{ id:'mfc26', course:'maths', unit:3, topic:'m3-span-dependence', category:'Definition', front:'When are vectors linearly independent?', back:'When c₁v₁ + c₂v₂ + … + cₙvₙ = 0 forces all cᵢ = 0 (only the trivial combination gives zero).' },
{ id:'mfc27', course:'maths', unit:3, topic:'m3-basis-dimension', category:'Definition', front:'Define basis and dimension.', back:'A basis is a linearly independent set that spans the space; dimension is the number of vectors in any basis.' },
{ id:'mfc28', course:'maths', unit:3, topic:'m3-linear-maps', category:'Definition', front:'What makes a map T linear?', back:'T(u+v) = T(u) + T(v) and T(cv) = cT(v) — it preserves addition and scalar multiplication.' },
{ id:'mfc29', course:'maths', unit:3, topic:'m3-linear-maps', category:'Definition', front:'Define kernel and range of a linear map.', back:'Kernel: all v with T(v)=0 (the null space). Range: all possible outputs T(v). rank = dim(range), nullity = dim(kernel).' },
{ id:'mfc30', course:'maths', unit:3, topic:'m3-rank-nullity', category:'Formula', front:'State the Rank-Nullity Theorem.', back:'Rank(T) + Nullity(T) = dim(V) — the total is always the dimension of the DOMAIN, never the codomain.' },
{ id:'mfc31', course:'maths', unit:3, topic:'m3-matrix-of-map', category:'Concept', front:'Matrix of a composition of linear maps?', back:'[T₂∘T₁] = [T₂]·[T₁] — T₁ (applied first) appears on the right.' },
{ id:'mfc32', course:'maths', unit:3, topic:'m3-rank-nullity', category:'Concept', front:'When is a linear transformation invertible?', back:'Exactly when it is one-to-one (nullity = 0) AND onto (rank = dim(W)); T⁻¹ is then also linear.' },

/* -------- Unit IV — Vector Spaces II -------- */
{ id:'mfc33', course:'maths', unit:4, topic:'m4-eigenvalues', category:'Formula', front:'How do you find eigenvalues?', back:'Solve the characteristic equation det(A − λI) = 0; then solve (A − λI)v = 0 for each eigenvector v.' },
{ id:'mfc34', course:'maths', unit:4, topic:'m4-eigenvalues', category:'Exam Trap', front:'What does Av = λv mean geometrically?', back:'A only scales v by factor λ — the eigenvector keeps its direction.' },
{ id:'mfc35', course:'maths', unit:4, topic:'m4-special-matrices', category:'Definition', front:'Define symmetric, skew-symmetric and orthogonal matrices.', back:'Symmetric: Aᵀ = A. Skew-symmetric: Aᵀ = −A (diagonal all zero). Orthogonal: AᵀA = I (so A⁻¹ = Aᵀ).' },
{ id:'mfc36', course:'maths', unit:4, topic:'m4-special-matrices', category:'Memory Trick', front:'Decompose A into symmetric + skew-symmetric parts?', back:'A = ½(A + Aᵀ) + ½(A − Aᵀ) — a standard 5-mark exam question.' },
{ id:'mfc37', course:'maths', unit:4, topic:'m4-diagonalization', category:'Formula', front:'What does A = PDP⁻¹ mean?', back:'D is diagonal with eigenvalues, P\'s columns are the matching eigenvectors — possible when A has a full eigenbasis. Verify with AP = PD.' },
{ id:'mfc38', course:'maths', unit:4, topic:'m4-special-matrices', category:'Concept', front:'Which matrices are always diagonalizable over ℝ?', back:'Every real symmetric matrix — and its eigenvectors for distinct eigenvalues are automatically orthogonal.' },
{ id:'mfc39', course:'maths', unit:4, topic:'m4-inner-product', category:'Difference', front:'Orthogonal vs orthonormal?', back:'Orthogonal: every pair has inner product 0. Orthonormal: also every vector has unit length (‖v‖ = 1).' },
{ id:'mfc40', course:'maths', unit:4, topic:'m4-gram-schmidt', category:'Algorithm', front:'First step of Gram-Schmidt?', back:'u₁ = v₁ (unchanged); every later uₖ subtracts its projections onto ALL previous uᵢ, using the orthogonalized vectors — not the originals.' }
];
