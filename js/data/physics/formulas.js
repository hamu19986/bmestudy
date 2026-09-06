/* ============================================================
   PHYSICS-I — SEMICONDUCTOR PHYSICS — FORMULA SHEET
   Source: content/03-Physics-I-Semiconductor-Physics.md
   ============================================================ */

const PHY_FORMULA_SHEET = [
{
  course: 'physics', section: 'Unit I — Quantum Mechanics', items: [
    { formula: 'E = hν', meaning: 'Energy of one quantum/photon', variables: 'h = 6.626×10⁻³⁴ J·s, ν = frequency', units: 'J', condition: 'Planck\'s quantization of energy exchange' },
    { formula: 'hν = φ + KEmax', meaning: 'Einstein\'s photoelectric equation', variables: 'φ = work function, KEmax = ½mv²max', units: 'eV or J (1 eV = 1.6×10⁻¹⁹ J)', condition: 'no emission when hν < φ, regardless of intensity' },
    { formula: 'Δλ = (h/mₑc)(1 − cos θ)', meaning: 'Compton shift', variables: 'mₑ = electron mass, θ = scattering angle', units: 'm', condition: 'elastic photon-electron scattering' },
    { formula: 'λ = h/p = h/(mv)', meaning: 'de Broglie wavelength', variables: 'p = momentum; also p = √(2mKE)', units: 'm', condition: 'all moving matter' },
    { formula: 'Δx·Δp ≥ ℏ/2', meaning: 'Heisenberg uncertainty principle', variables: 'ℏ = h/2π', units: 'J·s', condition: 'fundamental limit, not instrumental' },
    { formula: 'iℏ ∂ψ/∂t = Ĥψ', meaning: 'Time-dependent Schrödinger equation', variables: 'Ĥ = Hamiltonian operator', units: '—', condition: 'non-relativistic quantum mechanics' },
    { formula: '−(ℏ²/2m) d²ψ/dx² + Vψ = Eψ', meaning: 'Time-independent Schrödinger equation', variables: 'V = potential, E = energy', units: '—', condition: 'stationary states' },
    { formula: '|ψ|² = probability density', meaning: 'Born\'s interpretation', variables: 'ψψ* for complex ψ', units: 'probability/volume', condition: 'ψ single-valued, finite, continuous' },
    { formula: 'Eₙ = n²h²/(8mL²)', meaning: 'Particle in a 1-D box', variables: 'n = 1, 2, 3, …', units: 'J', condition: 'infinite square well; E₂ = 4E₁' }
  ]
},
{
  course: 'physics', section: 'Unit II — Electronic Materials', items: [
    { formula: 'f(E) = 1/[1 + e^((E−E_F)/kT)]', meaning: 'Fermi-Dirac occupation probability', variables: 'E_F = Fermi level, k = Boltzmann constant', units: 'probability', condition: 'f(E_F) = 0.5 at any temperature' },
    { formula: 'm* = ℏ²/(d²E/dk²)', meaning: 'Effective mass from band curvature', variables: 'E(k) = band dispersion', units: 'kg', condition: 'can be negative near a band maximum (hole-like)' },
    { formula: 'Eg(Si) = 1.1 eV, Eg(Ge) = 0.7 eV', meaning: 'Standard semiconductor band gaps', variables: 'Eg = gap width', units: 'eV', condition: 'semiconductor ~0.7–1.5 eV; insulator > ~5 eV' }
  ]
},
{
  course: 'physics', section: 'Unit III — Semiconductors', items: [
    { formula: 'nₑ = nₕ = nᵢ', meaning: 'Intrinsic carrier equality', variables: 'nᵢ = intrinsic concentration', units: 'm⁻³', condition: 'pure undoped crystal' },
    { formula: 'J = q(nμₑ + pμₕ)E', meaning: 'Drift current density', variables: 'μₑ, μₕ = mobilities; E = field', units: 'A/m²', condition: 'field-driven transport' },
    { formula: 'D/μ = kT/q', meaning: 'Einstein relation', variables: 'D = diffusion coefficient, μ = mobility', units: '—', condition: 'thermal equilibrium carriers' },
    { formula: 'E_F(intrinsic) ≈ mid-gap', meaning: 'Fermi-level reference position', variables: 'shifts up (n-type) / down (p-type) with doping', units: 'eV', condition: 'heat pulls doped E_F back toward mid-gap' }
  ]
},
{
  course: 'physics', section: 'Unit IV — Lasers', items: [
    { formula: 'He-Ne: 632.8 nm (CW, four-level)', meaning: 'Gas laser signature output', variables: 'He-Collision energy transfer to Ne', units: 'nm', condition: 'continuous wave' },
    { formula: 'Ruby: 694.3 nm (pulsed, three-level)', meaning: 'Solid-state laser signature output', variables: 'Cr³⁺ ions in Al₂O₃, flash-lamp pumped', units: 'nm', condition: 'high pump power — pulsed operation' }
  ]
}
];
