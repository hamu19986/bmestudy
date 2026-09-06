# Mathematics-I — Calculus & Linear Algebra — 25BSC-MATH-103H
**Credits:** 4 (3-1-0) · Internal 30, External 70, Total 100 · Exam: 3 hrs
**Exam pattern:** Q1 compulsory (short answer, all 4 units) + attempt 5 of remaining 8 (2 per unit), at least one from every unit.

---

## UNIT I — Calculus

### 1. Indeterminate Forms & L'Hospital's Rule
**Overview:** An indeterminate form (0/0, ∞/∞, 0×∞, ∞−∞, 0⁰, 1^∞, ∞⁰) is a limit expression whose value can't be determined by direct substitution. L'Hospital's Rule resolves 0/0 or ∞/∞ forms by differentiating numerator and denominator separately (not using the quotient rule) and re-evaluating the limit.
**Statement:** If lim f(x)/g(x) gives 0/0 or ∞/∞ as x→a, then lim f(x)/g(x) = lim f'(x)/g'(x), provided the latter limit exists. Apply repeatedly if the new limit is still indeterminate.
**Worked Example:** lim(x→0) (sin x)/x → 0/0 form → differentiate: lim(x→0) (cos x)/1 = cos 0 = 1.
**Exam Tip:** Before applying L'Hospital's, always explicitly write "this is of the form 0/0 (or ∞/∞)" — examiners deduct marks if you differentiate without confirming the indeterminate form first.
**Common Mistake:** Applying the quotient rule instead of differentiating numerator and denominator *separately*.
**Quick Check:** Q: What form must a limit take before you can apply L'Hospital's Rule directly? A: 0/0 or ∞/∞.

### 2. Maxima and Minima of a Function of One Variable
**Overview:** A local maximum/minimum occurs where a function's slope changes sign; found using the first and second derivative tests.
**Method:** Find critical points by solving f'(x) = 0. Then use the second derivative test: if f''(x) < 0 at that point → local maximum; if f''(x) > 0 → local minimum; if f''(x) = 0, the test is inconclusive (use higher derivatives or the first-derivative sign-change test).
**Worked Example:** f(x) = x³ − 3x. f'(x) = 3x² − 3 = 0 → x = ±1. f''(x) = 6x. At x=1, f''=6>0 → local minimum (value −2). At x=−1, f''=−6<0 → local maximum (value 2).
**Exam Tip:** Always state both the critical point AND the function's value there — "local maximum at x=−1, value 2" — examiners award marks for both.
**Common Mistake:** Forgetting to check f''(x)=0 cases separately, or stopping at finding critical points without classifying them.
**Quick Check:** Q: What does f''(x) > 0 at a critical point indicate? A: A local minimum.

### 3. Rolle's Theorem, Lagrange's & Cauchy's Mean Value Theorems
**Overview:** These theorems relate a function's average rate of change over an interval to its instantaneous rate of change at some interior point.
**Rolle's Theorem:** If f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then there exists at least one c in (a,b) where f'(c) = 0.
**Lagrange's Mean Value Theorem (LMVT):** If f is continuous on [a,b] and differentiable on (a,b) (no requirement that f(a)=f(b)), then there exists c in (a,b) such that f'(c) = [f(b)−f(a)]/(b−a).
**Cauchy's Mean Value Theorem:** Generalizes LMVT to two functions f, g: there exists c in (a,b) such that [f(b)−f(a)]/[g(b)−g(a)] = f'(c)/g'(c), provided g'(x)≠0 throughout.
**Worked Example (LMVT):** f(x) = x² on [1,3]. f'(c) = (f(3)−f(1))/(3−1) = (9−1)/2 = 4 → 2c = 4 → c = 2 (lies in (1,3), verifying the theorem).
**Exam Tip:** Always verify and state the three conditions (continuity, differentiability, and — for Rolle's — f(a)=f(b)) explicitly before applying the theorem; "verify Rolle's theorem for f(x) on [a,b]" questions are graded heavily on this verification step, not just the final c value.
**Common Mistake:** Applying Rolle's Theorem when f(a) ≠ f(b) — that requires LMVT instead.
**Quick Check:** Q: What extra condition does Rolle's Theorem need beyond LMVT? A: f(a) = f(b).

### 4. Taylor's & Maclaurin's Theorems and Series
**Overview:** Taylor's theorem expresses a function as an infinite (or finite, with remainder) sum of terms calculated from its derivatives at a single point 'a'. Maclaurin's series is the special case where a = 0.
**Taylor series:** f(x) = f(a) + f'(a)(x−a) + f''(a)(x−a)²/2! + f'''(a)(x−a)³/3! + ...
**Maclaurin series:** f(x) = f(0) + f'(0)x + f''(0)x²/2! + f'''(0)x³/3! + ...
**Standard Maclaurin expansions to memorize:** eˣ = 1+x+x²/2!+x³/3!+..., sin x = x − x³/3!+x⁵/5!−..., cos x = 1 − x²/2!+x⁴/4!−..., ln(1+x) = x − x²/2+x³/3−...
**Worked Example:** Expand eˣ up to the x³ term about 0: f(0)=1, f'(0)=1, f''(0)=1, f'''(0)=1 → eˣ ≈ 1+x+x²/2+x³/6.
**Exam Tip:** Memorize the standard Maclaurin series for eˣ, sin x, cos x, and ln(1+x) — these save huge time on "expand f(x) in powers of x" questions, which appear almost every year.
**Common Mistake:** Mixing up the remainder-with-derivative form (Taylor's theorem with Lagrange's form of remainder) with the pure infinite-series form (Taylor series) when the question specifically asks for the "theorem with remainder."
**Quick Check:** Q: What is Maclaurin's series a special case of? A: Taylor's series, expanded about a = 0.

### 5. Curvature, Evolutes, Involutes
**Overview:** Curvature measures how sharply a curve bends at a point (radius of curvature ρ = 1/curvature). The evolute is the locus of all centres of curvature of a curve; the original curve is then called the involute of its evolute.
**Formula:** Radius of curvature ρ = [1+(dy/dx)²]^(3/2) / |d²y/dx²| (Cartesian form).
**Exam Tip:** For standard curves (parabola, circle, catenary) the radius-of-curvature formula is a direct plug-in numerical — memorize the formula exactly, including the 3/2 power.
**Common Mistake:** Forgetting the absolute value on the second derivative in the denominator, leading to a negative radius of curvature (radius must be positive).
**Quick Check:** Q: What is the relationship between a curve and its evolute's involute? A: The original curve IS the involute of its own evolute.

### 6. Beta and Gamma Functions
**Overview:** These are special "extension" functions of the factorial, defined via definite integrals, heavily used to evaluate otherwise-difficult integrals.
**Definitions:** Gamma function: Γ(n) = ∫₀^∞ xⁿ⁻¹e⁻ˣ dx (for n>0). Beta function: β(m,n) = ∫₀¹ xᵐ⁻¹(1−x)ⁿ⁻¹ dx (for m,n>0).
**Key properties:** Γ(n+1) = n·Γ(n) (reduces to n! for positive integers, i.e. Γ(n+1)=n! when n is a positive integer); Γ(1)=1; Γ(1/2)=√π. Relationship between them: β(m,n) = Γ(m)Γ(n)/Γ(m+n). Symmetry: β(m,n) = β(n,m).
**Worked Example:** Evaluate Γ(5) = 4! = 24 (since Γ(n+1)=n! for integer n).
**Exam Tip:** The relation β(m,n)=Γ(m)Γ(n)/Γ(m+n) is the single most-used tool in this topic — most numericals reduce a Beta-function integral to a ratio of Gamma functions.
**Common Mistake:** Forgetting the domain restriction (m,n>0) or misapplying Γ(n+1)=n·Γ(n) in the wrong direction.
**Quick Check:** Q: What is Γ(1/2)? A: √π.

### 7. Applications of Definite Integrals: Surface Area & Volume of Revolution
**Overview:** Rotating a plane curve about an axis generates a solid of revolution; definite integrals compute its surface area and volume.
**Formulas (rotation about x-axis, y=f(x) from x=a to b):** Volume V = π∫ₐᵇ y² dx. Surface area S = 2π∫ₐᵇ y √(1+(dy/dx)²) dx.
**Worked Example:** Volume generated by rotating y=x (from x=0 to 2) about the x-axis: V = π∫₀² x² dx = π[x³/3]₀² = 8π/3.
**Exam Tip:** Always double-check which axis of rotation is specified — the formula swaps x and y roles if rotating about the y-axis instead.
**Common Mistake:** Forgetting the π (or 2π for surface area) multiplier, or squaring the wrong variable when the axis of rotation changes.
**Quick Check:** Q: What is the volume formula for rotating y=f(x) about the x-axis from a to b? A: V = π∫ₐᵇ [f(x)]² dx.

---

## UNIT II — Matrices

### 1. Matrix Operations: Addition, Scalar Multiplication, Multiplication
**Overview:** A matrix is a rectangular array of numbers. Addition/subtraction require identical dimensions (element-wise). Scalar multiplication multiplies every element by a constant. Matrix multiplication (A·B) requires the number of columns of A to equal the number of rows of B, and is NOT commutative in general.
**Worked Example:** For A (2×2) and B (2×2), (AB)ᵢⱼ = Σ (row i of A) × (column j of B), summed element by element.
**Exam Tip:** Always double-check dimension compatibility before attempting multiplication — write out the resulting matrix's dimension (rows of A × columns of B) before computing entries, to catch dimension-mismatch mistakes early.
**Common Mistake:** Assuming AB = BA — matrix multiplication is generally non-commutative.
**Quick Check:** Q: Can you multiply a 2×3 matrix by a 2×2 matrix? A: No — columns of the first (3) must equal rows of the second (2); this fails.

### 2. Determinants
**Overview:** A determinant is a scalar value computed from a square matrix, indicating (among other things) whether the matrix is invertible (det ≠ 0) and encoding the scaling factor of the linear transformation it represents.
**Formula (2×2):** det[[a,b],[c,d]] = ad − bc. **(3×3):** expand along any row/column using cofactors, with alternating signs.
**Worked Example:** det[[2,3],[1,4]] = 2(4) − 3(1) = 8−3 = 5.
**Exam Tip:** For 3×3 determinants, always pick the row/column with the most zeros to expand along — this drastically reduces computation and avoids arithmetic slips.
**Common Mistake:** Forgetting the alternating sign pattern (+,−,+,...) when doing cofactor expansion for matrices larger than 2×2.
**Quick Check:** Q: What does det(A) = 0 tell you about matrix A? A: A is singular (not invertible).

### 3. Elementary Transformations, Rank, Inverse, Echelon/Normal Forms
**Overview:** Elementary row/column operations (swap two rows, multiply a row by a nonzero scalar, add a multiple of one row to another) transform a matrix without changing its rank, and are the basis of Gauss elimination.
**Rank:** The number of linearly independent rows (or columns) of a matrix — equivalently, the order of the largest nonzero minor, or the number of nonzero rows in its row-echelon form.
**Echelon form:** Each leading (first nonzero) entry of a row is to the right of the leading entry of the row above; all-zero rows are at the bottom. **Normal form:** Further reduced so the leading nonzero entries are all 1 and the matrix looks like [I | 0] blocks — used to directly read off the rank.
**Inverse of a matrix:** A⁻¹ exists only if det(A) ≠ 0; A⁻¹ = adj(A)/det(A), or found via Gauss-Jordan elimination (row-reduce [A | I] to [I | A⁻¹]).
**Exam Tip:** For "find the rank of the matrix" questions, reducing to echelon form via elementary row operations (rather than computing every minor) is far faster and is what examiners expect to see shown step by step.
**Common Mistake:** Confusing "rank = number of rows" with the correct definition (rank = number of *linearly independent* rows) — a matrix can have zero rows in echelon form, reducing its rank below the row count.
**Quick Check:** Q: What is the rank of a 3×3 identity matrix? A: 3 (full rank).

### 4. System of Linear Equations, Linear Independence, Cramer's Rule, Gauss Elimination/Gauss-Jordan
**Overview:** A system of linear equations AX=B can be solved by Cramer's Rule (using determinants — practical only for small systems), Gauss Elimination (row-reduce to upper-triangular/echelon form, then back-substitute), or Gauss-Jordan Elimination (row-reduce all the way to reduced row-echelon form, reading off the solution directly with no back-substitution needed).
**Cramer's Rule:** xᵢ = det(Aᵢ)/det(A), where Aᵢ replaces the i-th column of A with B — valid only when det(A) ≠ 0.
**Linear (in)dependence** of the equations/rows determines whether the system has a unique solution (rank(A)=rank([A|B])=n), infinitely many solutions (rank(A)=rank([A|B])<n), or no solution (rank(A)≠rank([A|B])).
**Worked Example:** Solve x+y=3, x−y=1 by Cramer's Rule: det(A)=[[1,1],[1,−1]]=−2. det(A₁)=[[3,1],[1,−1]]=−4 → x=−4/−2=2. det(A₂)=[[1,3],[1,1]]=−2 → y=−2/−2=1.
**Exam Tip:** For "check consistency of the system" questions, always compute and compare rank(A) and rank([A|B]) explicitly as your first step — this is the examiner's expected structure regardless of which elimination method you use afterward.
**Common Mistake:** Using Cramer's Rule when det(A)=0 — the rule simply doesn't apply there; you must fall back on rank-based consistency analysis.
**Quick Check:** Q: If rank(A) = rank([A|B]) = number of unknowns, what kind of solution does the system have? A: A unique solution.

---

## UNIT III — Vector Spaces I

### 1. Vector Space, Subspace, Linear Span
**Overview:** A vector space is a set of "vectors" closed under addition and scalar multiplication, satisfying axioms like associativity, existence of a zero vector, and distributivity. A subspace is a subset of a vector space that is itself a vector space under the same operations (must contain the zero vector, and be closed under addition and scalar multiplication). The linear span of a set of vectors is the set of ALL possible linear combinations of those vectors.
**Worked Example:** In ℝ³, the set of all vectors (x,y,0) forms a subspace (the xy-plane) — it contains the zero vector (0,0,0) and is closed under addition/scalar multiplication.
**Exam Tip:** To prove a subset is a subspace, always verify (in order): (1) it contains the zero vector, (2) closure under addition, (3) closure under scalar multiplication — examiners specifically check all three steps are shown.
**Common Mistake:** Skipping the zero-vector check — a set that fails to contain the zero vector cannot be a subspace, even if it's closed under the operations.
**Quick Check:** Q: What is the minimum requirement for a subset to fail being a subspace? A: Not containing the zero vector (or failing closure under addition/scalar multiplication).

### 2. Linear Dependence/Independence, Basis, Dimension
**Overview:** Vectors are linearly independent if no nontrivial linear combination of them equals the zero vector (i.e., c₁v₁+c₂v₂+...+cₙvₙ=0 forces all cᵢ=0). A basis is a linearly independent set that spans the entire vector space. The dimension is the number of vectors in any basis of that space.
**Worked Example:** In ℝ², {(1,0),(0,1)} is a basis (linearly independent + spans ℝ²), so dim(ℝ²)=2. The set {(1,0),(2,0)} is linearly DEPENDENT (one is a scalar multiple of the other) and cannot be a basis.
**Exam Tip:** To test independence, set up the combination equation, form the coefficient matrix, and check its determinant/rank — nonzero determinant (for a square matrix) confirms independence.
**Common Mistake:** Confusing "spans the space" with "is a basis" — a spanning set that has more vectors than the dimension is NOT a basis (it's linearly dependent); only a minimal spanning set (exactly `dimension` many, independent vectors) qualifies.
**Quick Check:** Q: What two properties must a basis satisfy? A: Linear independence AND spanning the whole space.

### 3. Linear Transformations
**Overview:** A linear transformation (linear map) T: V→W between vector spaces preserves vector addition and scalar multiplication: T(u+v)=T(u)+T(v) and T(cv)=cT(v).
**Range and Kernel:** The Range (image) of T is the set of all possible outputs T(v) for v in V. The Kernel (null space) of T is the set of all v in V such that T(v)=0 (the zero vector in W).
**Rank and Nullity:** Rank(T) = dimension of the range; Nullity(T) = dimension of the kernel.
**Worked Example:** For T(x,y)=(x,0) mapping ℝ²→ℝ², the range is the x-axis (dim 1, so rank=1); the kernel is the y-axis, i.e., all (0,y) (dim 1, so nullity=1).
**Exam Tip:** Always verify linearity explicitly by checking both T(u+v)=T(u)+T(v) and T(cv)=cT(v) with general vectors, not specific numbers, when asked to "show T is linear."
**Common Mistake:** Assuming any function between vector spaces is automatically linear — functions involving squares, constants added, or products of coordinates are typically NOT linear.
**Quick Check:** Q: What is another name for the kernel of a linear transformation? A: The null space.

### 4. Rank-Nullity Theorem, Matrix of a Linear Map, Composition, Inverse
**Overview:** The Rank-Nullity Theorem states: for T: V→W, Rank(T) + Nullity(T) = dim(V). It links how much of the domain "survives" (rank) versus how much "collapses to zero" (nullity).
**Matrix of a linear map:** Any linear transformation between finite-dimensional vector spaces can be represented by a matrix (relative to chosen bases), so that T(v) = Av.
**Composition:** If T₁: U→V and T₂: V→W are linear, their composition T₂∘T₁: U→W is also linear, with matrix representation = (matrix of T₂)×(matrix of T₁).
**Inverse of a linear transformation:** T is invertible iff it's both one-to-one (injective, nullity=0) and onto (surjective, rank=dim(W)); then T⁻¹ is also linear.
**Worked Example:** If dim(V)=5 and Rank(T)=3, then by Rank-Nullity, Nullity(T) = 5−3 = 2.
**Exam Tip:** Rank-Nullity numericals are quick, guaranteed marks — as soon as you're given dim(V) and either rank or nullity, the other follows immediately by subtraction.
**Common Mistake:** Applying Rank-Nullity using dim(W) instead of dim(V) — the theorem's total is always the dimension of the DOMAIN.
**Quick Check:** Q: If T: ℝ⁴→ℝ³ has nullity 1, what is its rank? A: 4 − 1 = 3.

---

## UNIT IV — Vector Spaces II

### 1. Eigenvalues and Eigenvectors
**Overview:** For a square matrix A, an eigenvector v (nonzero) and its corresponding eigenvalue λ satisfy Av = λv — meaning A only scales v (by factor λ) without changing its direction.
**Method:** Solve the characteristic equation det(A − λI) = 0 for λ (the eigenvalues); for each λ, solve (A−λI)v=0 for the eigenvector v.
**Worked Example:** A = [[2,0],[0,3]]. Characteristic equation: (2−λ)(3−λ)=0 → λ=2 or λ=3. For λ=2: eigenvector (1,0). For λ=3: eigenvector (0,1).
**Exam Tip:** Always verify your final answer by plugging the eigenvector back into Av=λv — this quick check catches sign/arithmetic errors before submission.
**Common Mistake:** Forgetting that eigenvectors are defined only up to a scalar multiple — any nonzero multiple of a valid eigenvector is also valid; don't worry about "matching" a specific textbook's normalization unless asked for a unit eigenvector.
**Quick Check:** Q: What equation gives the eigenvalues of A? A: det(A − λI) = 0.

### 2. Symmetric, Skew-Symmetric, Orthogonal Matrices; Diagonalization
**Overview:** A matrix A is Symmetric if Aᵀ=A (mirror-image about the main diagonal); Skew-symmetric if Aᵀ=−A (diagonal entries must be 0); Orthogonal if AᵀA=I (its inverse equals its transpose; rows/columns are orthonormal).
**Diagonalization:** A matrix A is diagonalizable if it can be written as A = PDP⁻¹, where D is a diagonal matrix of eigenvalues and P's columns are the corresponding eigenvectors — possible when A has enough linearly independent eigenvectors (an "eigenbasis").
**Key fact:** Every real symmetric matrix is always diagonalizable, and its eigenvectors corresponding to distinct eigenvalues are automatically orthogonal.
**Worked Example:** For the earlier A=[[2,0],[0,3]] (already diagonal): P=I, D=A itself.
**Exam Tip:** When asked to "diagonalize A", present all three pieces clearly: P (eigenvector matrix), D (eigenvalue diagonal matrix), and verify A = PDP⁻¹ (or equivalently AP = PD, which avoids computing an inverse).
**Common Mistake:** Placing eigenvalues in D in a different order than their corresponding eigenvectors appear as columns in P — the order in D must exactly match the column order in P.
**Quick Check:** Q: Is every symmetric matrix diagonalizable? A: Yes, always (over the reals).

### 3. Inner Product Spaces, Orthogonal Sets/Complements, Orthonormal Sets
**Overview:** An inner product ⟨u,v⟩ generalizes the dot product, giving vector spaces a notion of length (‖v‖=√⟨v,v⟩) and angle. A set of vectors is Orthogonal if every pair has inner product 0; Orthonormal if additionally every vector has unit length (‖v‖=1). The Orthogonal Complement of a subspace W is the set of all vectors orthogonal to every vector in W.
**Worked Example:** {(1,0),(0,1)} in ℝ² (standard dot product) is orthonormal: (1,0)·(0,1)=0, and each has length 1.
**Exam Tip:** Remember orthogonal ≠ orthonormal — orthogonal only requires zero inner products between pairs; orthonormal additionally requires each vector to be normalized to unit length.
**Common Mistake:** Forgetting to normalize (divide each vector by its own length) when a question specifically asks for an ORTHONORMAL set/basis, not just an orthogonal one.
**Quick Check:** Q: What extra condition turns an orthogonal set into an orthonormal one? A: Every vector must additionally have unit length (norm = 1).

### 4. Gram-Schmidt Orthogonalization Process
**Overview:** An algorithm that converts any linearly independent set of vectors into an orthogonal (then orthonormal, after normalizing) set that spans the same subspace.
**Method (for vectors v₁, v₂, ...):** u₁ = v₁. u₂ = v₂ − proj_{u₁}(v₂), where proj_u(v) = (⟨v,u⟩/⟨u,u⟩)u. Continue: uₖ = vₖ − Σ(projections of vₖ onto all previous uᵢ). Finally normalize each uᵢ by dividing by its own norm to get an orthonormal set.
**Worked Example:** v₁=(1,1), v₂=(2,0). u₁=(1,1). proj_{u₁}(v₂) = [(2,0)·(1,1)/(1,1)·(1,1)]·(1,1) = (2/2)(1,1)=(1,1). u₂ = (2,0)−(1,1) = (1,−1). Result: orthogonal set {(1,1),(1,−1)}.
**Exam Tip:** Process the vectors strictly in the given order and subtract the projection onto EVERY previously-found u vector at each step (not just the immediately preceding one) once you're past the second vector — a common source of lost marks in 3-vector problems.
**Common Mistake:** Using the ORIGINAL vᵢ vectors in the projection formula for later steps instead of the newly-computed, already-orthogonalized uᵢ vectors.
**Quick Check:** Q: What is the very first vector of the orthogonalized set always equal to? A: The first original vector, u₁ = v₁ (unchanged).
