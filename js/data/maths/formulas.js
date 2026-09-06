/* ============================================================
   MATHEMATICS-I — FORMULA SHEET
   Source: content/01-Mathematics-I.md
   ============================================================ */

const MATHS_FORMULA_SHEET = [
{
  course: 'maths', section: 'Unit I — Calculus', items: [
    { formula: "lim f(x)/g(x) = lim f'(x)/g'(x)", meaning: "L'Hospital's Rule", variables: 'f, g differentiable; original limit of form 0/0 or ∞/∞', units: '—', condition: 'apply repeatedly if still indeterminate', commonMistake: 'Using the quotient rule instead of differentiating separately' },
    { formula: "f'(c) = 0", meaning: "Rolle's Theorem conclusion", variables: 'c ∈ (a,b)', units: '—', condition: 'continuity, differentiability, f(a)=f(b)' },
    { formula: "f'(c) = [f(b) − f(a)]/(b − a)", meaning: "Lagrange's Mean Value Theorem", variables: 'c ∈ (a,b)', units: '—', condition: 'continuity on [a,b], differentiability on (a,b)' },
    { formula: "f(x) = f(a) + f'(a)(x−a) + f''(a)(x−a)²/2! + …", meaning: 'Taylor series about x = a', variables: 'a = expansion point', units: '—', condition: 'f infinitely differentiable' },
    { formula: 'eˣ = 1 + x + x²/2! + x³/3! + …', meaning: 'Standard Maclaurin series', variables: '—', units: '—', condition: 'all x' },
    { formula: 'sin x = x − x³/3! + x⁵/5! − …;  cos x = 1 − x²/2! + x⁴/4! − …', meaning: 'Standard Maclaurin series', variables: '—', units: '—', condition: 'all x' },
    { formula: 'ln(1+x) = x − x²/2 + x³/3 − …', meaning: 'Standard Maclaurin series', variables: '—', units: '—', condition: '−1 < x ≤ 1' },
    { formula: 'ρ = [1 + (dy/dx)²]^(3/2) / |d²y/dx²|', meaning: 'Radius of curvature (Cartesian)', variables: 'ρ = radius of curvature', units: 'length', condition: 'y = f(x) twice differentiable', commonMistake: 'Forgetting the absolute value — radius must be positive' },
    { formula: 'Γ(n) = ∫₀^∞ xⁿ⁻¹ e⁻ˣ dx', meaning: 'Gamma function', variables: 'n > 0', units: '—', condition: 'Γ(n+1) = nΓ(n); Γ(1/2) = √π; Γ(n+1) = n! for integers' },
    { formula: 'β(m,n) = ∫₀¹ xᵐ⁻¹(1−x)ⁿ⁻¹ dx = Γ(m)Γ(n)/Γ(m+n)', meaning: 'Beta function and its Gamma relation', variables: 'm, n > 0', units: '—', condition: 'symmetric: β(m,n) = β(n,m)' },
    { formula: 'V = π ∫ₐᵇ y² dx', meaning: 'Volume of revolution about the x-axis', variables: 'y = f(x)', units: 'cubic units', condition: 'disc method' },
    { formula: 'S = 2π ∫ₐᵇ y √(1 + (dy/dx)²) dx', meaning: 'Surface area of revolution about the x-axis', variables: 'y = f(x)', units: 'square units', condition: '—' }
  ]
},
{
  course: 'maths', section: 'Unit II — Matrices', items: [
    { formula: 'det[[a,b],[c,d]] = ad − bc', meaning: '2×2 determinant', variables: '—', units: '—', condition: 'square matrix' },
    { formula: 'A⁻¹ = adj(A)/det(A)', meaning: 'Inverse via adjoint', variables: 'adj(A) = transpose of the cofactor matrix', units: '—', condition: 'det(A) ≠ 0' },
    { formula: 'rank(A) = number of nonzero rows in echelon form', meaning: 'Rank by row reduction', variables: '—', units: '—', condition: 'row operations preserve rank' },
    { formula: 'xᵢ = det(Aᵢ)/det(A)', meaning: "Cramer's Rule", variables: 'Aᵢ = A with column i replaced by B', units: '—', condition: 'det(A) ≠ 0' },
    { formula: 'rank(A) = rank([A|B]) = n ⇒ unique solution', meaning: 'Consistency criterion for AX=B', variables: 'n = number of unknowns', units: '—', condition: 'ranks equal but < n ⇒ infinite solutions; unequal ⇒ none' }
  ]
},
{
  course: 'maths', section: 'Unit III — Vector Spaces I', items: [
    { formula: 'T(u+v) = T(u) + T(v),  T(cv) = cT(v)', meaning: 'Linearity conditions', variables: 'T: V→W', units: '—', condition: 'must hold for all vectors and scalars' },
    { formula: 'Rank(T) + Nullity(T) = dim(V)', meaning: 'Rank-Nullity Theorem', variables: 'V = domain', units: '—', condition: 'T linear, V finite-dimensional', commonMistake: 'Using dim(W) instead of dim(V)' },
    { formula: '[T₂∘T₁] = [T₂]·[T₁]', meaning: 'Matrix of a composition', variables: '—', units: '—', condition: 'T₁ applied first (right-most)' }
  ]
},
{
  course: 'maths', section: 'Unit IV — Vector Spaces II', items: [
    { formula: 'det(A − λI) = 0', meaning: 'Characteristic equation → eigenvalues', variables: 'λ = eigenvalue', units: '—', condition: 'A square' },
    { formula: 'Av = λv', meaning: 'Eigenvalue-eigenvector relation', variables: 'v ≠ 0 eigenvector', units: '—', condition: 'defined up to scalar multiples' },
    { formula: 'AᵀA = I', meaning: 'Orthogonal matrix', variables: '—', units: '—', condition: 'equivalent to A⁻¹ = Aᵀ' },
    { formula: 'A = PDP⁻¹', meaning: 'Diagonalization', variables: 'D diagonal of eigenvalues; P columns of eigenvectors', units: '—', condition: 'n linearly independent eigenvectors; verify AP = PD' },
    { formula: 'A = ½(A + Aᵀ) + ½(A − Aᵀ)', meaning: 'Symmetric + skew-symmetric decomposition', variables: '—', units: '—', condition: 'any square matrix' },
    { formula: 'uₖ = vₖ − Σᵢ (⟨vₖ,uᵢ⟩/⟨uᵢ,uᵢ⟩)uᵢ', meaning: 'Gram-Schmidt step', variables: 'u₁ = v₁; subtract projections onto ALL previous uᵢ', units: '—', condition: 'v₁…vₖ linearly independent' }
  ]
}
];
