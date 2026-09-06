/* ============================================================
   PHYSICS-I — SEMICONDUCTOR PHYSICS — TOPICS  (25BSC-PHY-103H)
   Source: content/03-Physics-I-Semiconductor-Physics.md
   ============================================================ */

const PHY_UNIT1_TOPICS = [
{
  id: 'p1-blackbody', course: 'physics', unit: 1, category: 'Quantum Mechanics',
  title: 'Classical Mechanics Failures, Black-Body Radiation & Planck\'s Law',
  summary: 'The ultraviolet catastrophe and the birth of energy quantization.',
  overview: `Classical (Newtonian) mechanics fails to explain several atomic-scale phenomena — black-body radiation spectra, the photoelectric effect and atomic stability — motivating the birth of quantum mechanics. A black body absorbs all incident radiation and re-emits a characteristic spectrum depending only on temperature.`,
  working: `Classical theory (Rayleigh-Jeans law) predicted an "ultraviolet catastrophe" — infinite energy at short wavelengths — which does not match experiment. Max Planck resolved it by proposing that energy is emitted/absorbed only in discrete packets ("quanta"), not continuously.
Planck's radiation law key formula: E = hν (energy of ONE quantum), where h = 6.626×10⁻³⁴ J·s and ν = frequency.`,
  formulas: [{ formula: 'E = hν', meaning: 'Energy of a single quantum/photon', variables: 'h = 6.626×10⁻³⁴ J·s, ν = frequency', units: 'joules', condition: 'quantized exchange between radiation and matter' }],
  examTip: `Be ready to name the "ultraviolet catastrophe" as the specific classical failure black-body radiation exposed, and state that Planck's key departure was the quantization of energy exchange — both are key mark-scoring points.`,
  commonMistake: `Confusing black-body radiation's failure (ultraviolet catastrophe) with the photoelectric effect's failure (no threshold frequency predicted); also writing E = hν as a body's TOTAL energy rather than the energy of a single photon.`,
  quickCheck: [{ q: 'What classical prediction failure is called the "ultraviolet catastrophe"?', a: 'Classical theory predicting infinite radiated energy at short wavelengths, which does not match experiment.' }]
},
{
  id: 'p1-photoelectric', course: 'physics', unit: 1, category: 'Quantum Mechanics',
  title: 'Photoelectric Effect',
  summary: 'hν = φ + KEmax — light\'s particle nature, with a threshold.',
  overview: `The photoelectric effect is the emission of electrons from a metal surface when light of sufficient frequency strikes it — key evidence for the particle nature of light.`,
  working: `Einstein's photoelectric equation: hν = φ + KEmax, where φ (work function) is the minimum energy needed to eject an electron and KEmax = ½mv²max is the maximum kinetic energy of emitted electrons. Below the threshold frequency ν₀ (where hν₀ = φ), NO electrons are emitted regardless of intensity — inexplicable classically.
Worked example: φ = 2 eV, hν = 5 eV → KEmax = 5 − 2 = 3 eV.`,
  formulas: [{ formula: 'hν = φ + KEmax', meaning: 'Einstein\'s photoelectric equation', variables: 'φ = work function, KEmax = ½mv²max', units: 'eV or J (convert: 1 eV = 1.6×10⁻¹⁹ J)', condition: 'hν ≥ φ for any emission' }],
  examTip: `Einstein's equation is the single most numerically tested formula in this unit — practice converting between eV and Joules since numericals often mix units.`,
  commonMistake: `Believing higher intensity alone can cause emission below the threshold frequency — intensity affects the NUMBER of photoelectrons, not whether emission happens.`,
  quickCheck: [{ q: 'What does the threshold frequency\'s existence prove?', a: 'Light behaves as discrete photons (particles) — wave theory predicts no such frequency threshold.' }]
},
{
  id: 'p1-compton', course: 'physics', unit: 1, category: 'Quantum Mechanics',
  title: 'Compton Effect',
  summary: 'X-ray wavelength increases after scattering off electrons.',
  overview: `The Compton effect is the increase in wavelength of X-rays after scattering off electrons — explained only if X-rays behave as particles (photons) colliding elastically with electrons.`,
  working: `Treat the photon-electron interaction as an elastic collision obeying conservation of energy and momentum. The scattered photon has lower energy (longer wavelength), and the shift depends on the scattering angle, not on the incident wavelength's intensity. Together with the photoelectric effect, it demonstrates the particle nature of light.`,
  formulas: [{ formula: 'Δλ = (h/mₑc)(1 − cos θ)', meaning: 'Compton shift', variables: 'mₑ = electron mass, c = speed of light, θ = scattering angle', units: 'metres', condition: 'free (loosely bound) electron' }],
  examTip: `Pair the two particle-nature effects in answers: photoelectric (absorption of a photon by a bound electron) vs Compton (elastic photon-electron collision) — examiners like the comparison.`,
  commonMistake: `Attributing the wavelength shift to the photon "slowing down" — photons always travel at c; they lose ENERGY, hence wavelength increases.`,
  quickCheck: [{ q: 'What happens to an X-ray beam\'s wavelength after Compton scattering?', a: 'It increases — the scattered photons carry less energy than the incident ones.' }]
},
{
  id: 'p1-debroglie', course: 'physics', unit: 1, category: 'Quantum Mechanics',
  title: 'Wave-Particle Duality & de Broglie\'s Hypothesis',
  summary: 'Every moving particle has a wavelength λ = h/p.',
  overview: `Light shows both wave (interference, diffraction) and particle (photoelectric, Compton) behaviour. De Broglie extended this duality to ALL matter — proposing that any particle with momentum p has an associated wavelength.`,
  working: `Formula: λ = h/p = h/(mv), the de Broglie wavelength. When velocity isn't directly given, momentum can be derived from kinetic energy: p = √(2mKE).
Worked example: an electron (mass 9.1×10⁻³¹ kg) at 10⁶ m/s has λ = 6.626×10⁻³⁴ / (9.1×10⁻³¹ × 10⁶) ≈ 7.28×10⁻¹⁰ m.`,
  formulas: [{ formula: 'λ = h/p = h/(mv)', meaning: 'de Broglie wavelength', variables: 'p = momentum (also p = √(2mKE))', units: 'metres', condition: 'all moving matter' }],
  examTip: `De Broglie numericals are common — keep h, mass and velocity in consistent SI units before plugging in; this is the most common source of factor-of-10 errors.`,
  commonMistake: `Forgetting p = √(2mKE) when only kinetic energy is given — don't force p = mv without a velocity.`,
  quickCheck: [{ q: 'What does de Broglie\'s hypothesis claim about matter?', a: 'Every moving particle has an associated wavelength λ = h/(mv) — matter has wave-like properties too.' }]
},
{
  id: 'p1-uncertainty', course: 'physics', unit: 1, category: 'Quantum Mechanics',
  title: 'Heisenberg\'s Uncertainty Principle',
  summary: 'Δx·Δp ≥ ℏ/2 — a fundamental limit, not an instrument flaw.',
  overview: `It is fundamentally impossible to simultaneously know both the exact position and exact momentum of a particle with unlimited precision — not a measurement flaw but a fundamental property of nature at quantum scales.`,
  working: `Formula: Δx · Δp ≥ ℏ/2 (commonly stated as Δx·Δp ≥ h/4π), where ℏ = h/2π. The same structure applies to energy-time (ΔE·Δt).`,
  formulas: [{ formula: 'Δx · Δp ≥ ℏ/2', meaning: 'Position-momentum uncertainty', variables: 'ℏ = h/2π', units: 'J·s', condition: 'simultaneous measurement of conjugate pairs' }],
  examTip: `Be ready to explain the principle conceptually, not just state the formula — "physical significance" is often a separate mark expecting a fundamental-limit explanation.`,
  commonMistake: `Describing the uncertainty as due to "poor instruments" — it is independent of measuring equipment quality.`,
  quickCheck: [{ q: 'Can Δx and Δp both be made simultaneously zero?', a: 'No — their product has a fundamental non-zero lower bound (≥ ℏ/2).' }]
},
{
  id: 'p1-schrodinger', course: 'physics', unit: 1, category: 'Quantum Mechanics',
  title: 'Schrödinger Wave Equation & Physical Significance of ψ',
  summary: 'iℏ ∂ψ/∂t = Ĥψ — and |ψ|² as probability density.',
  overview: `The Schrödinger equation is the fundamental equation of non-relativistic quantum mechanics, describing how the wave function ψ (which encodes all information about a quantum system) evolves.`,
  working: `Time-dependent form: iℏ ∂ψ/∂t = Ĥψ. Time-independent form (particle in potential V): −(ℏ²/2m) d²ψ/dx² + Vψ = Eψ.
Physical significance of ψ (Born's interpretation): ψ itself has no direct physical meaning, but |ψ|² gives the probability density of finding the particle at a given position. ψ must be single-valued, finite and continuous everywhere (well-behaved) to represent a physically valid state.`,
  formulas: [{ formula: '|ψ|² = probability density', meaning: 'Born\'s interpretation of the wave function', variables: 'ψ may be complex; use ψψ*', units: 'probability per unit volume', condition: 'ψ single-valued, finite, continuous' }],
  examTip: `Always state Born's interpretation (|ψ|² = probability density) explicitly when discussing ψ's significance — describing ψ itself as "a probability" loses marks.`,
  commonMistake: `Saying ψ represents the probability of finding a particle — it is |ψ|² (or ψψ* for complex ψ) that represents probability density, not ψ alone.`,
  quickCheck: [{ q: 'What physically measurable quantity does |ψ|² represent?', a: 'The probability density of finding the particle at that point.' }]
},
{
  id: 'p1-particle-box', course: 'physics', unit: 1, category: 'Quantum Mechanics',
  title: 'Particle in a One-Dimensional Box',
  summary: 'Eₙ = n²h²/8mL² — confinement forces quantization.',
  overview: `A classic quantum-mechanics model: a particle confined to move freely within a box of length L, with infinitely high walls (V = 0 inside, V = ∞ outside), so ψ = 0 at the walls.`,
  working: `Solving the time-independent Schrödinger equation with these boundary conditions gives quantized energy levels: Eₙ = n²h²/(8mL²), n = 1, 2, 3, …
Key insight: energy is quantized purely because of the boundary conditions — the simplest system showing how confinement leads to quantization.
Worked example: ground state E₁ = h²/(8mL²); first excited state E₂ = 4E₁ — four times the ground-state energy.`,
  formulas: [{ formula: 'Eₙ = n²h² / 8mL²', meaning: 'Quantized energies of a particle in a 1-D box', variables: 'n = 1, 2, 3, …; L = box length', units: 'joules', condition: 'infinite square well' }],
  examTip: `Memorize Eₙ = n²h²/(8mL²) exactly — it's used directly in "calculate the energy of the nth level" numericals, one of the most repeated Unit I numerical types.`,
  commonMistake: `Forgetting that n starts at 1 (not 0) — n = 0 would give zero energy everywhere, violating the uncertainty principle.`,
  quickCheck: [{ q: 'Why can\'t n = 0 be an allowed state?', a: 'It would give zero energy and require the particle to be perfectly at rest with a definite position, violating the Uncertainty Principle.' }]
}
];

const PHY_UNIT2_TOPICS = [
{
  id: 'p2-free-electron', course: 'physics', unit: 2, category: 'Electronic Materials',
  title: 'Free-Electron Theory and the Drude Model',
  summary: 'Metal electrons as a classical gas — and where that fails.',
  overview: `The Drude model treats the free (valence) electrons in a metal as a classical "gas" of particles that move freely between collisions with fixed positive ion cores, explaining electrical/thermal conductivity qualitatively.`,
  working: `Successes: qualitative explanation of conductivity and heat conduction in metals.
Limitations: (1) fails to explain the electronic specific heat of metals, (2) does not correctly predict electrical conductivity's temperature dependence at low temperatures. The later quantum free-electron theory (Sommerfeld) corrects these by incorporating the Pauli exclusion principle and Fermi-Dirac statistics.`,
  formulas: null,
  examTip: `A common conceptual question is "state two limitations of the classical free-electron theory" — memorize the specific-heat and low-temperature-conductivity failures.`,
  commonMistake: `Confusing the Drude (classical) model with the Sommerfeld (quantum) model — only the quantum version incorporates the Pauli exclusion principle and Fermi-Dirac statistics.`,
  quickCheck: [{ q: 'What does the Drude model assume about valence electrons?', a: 'They behave as a free, classical gas of particles moving between collisions with fixed ions.' }]
},
{
  id: 'p2-kronig-penney', course: 'physics', unit: 2, category: 'Electronic Materials',
  title: 'Kronig-Penney Model and the Origin of the Band Gap',
  summary: 'Periodic lattice potential → allowed bands + forbidden gaps.',
  overview: `The Kronig-Penney model treats electrons in a crystal as moving through a periodic array of potential wells (representing the periodic arrangement of atoms), and shows mathematically why allowed and forbidden energy bands arise.`,
  working: `Key result: electron energies split into allowed "bands" separated by forbidden "gaps" — this periodicity-induced banding is the fundamental origin of the band structure determining whether a material is a conductor, semiconductor or insulator.
The cause is the PERIODIC POTENTIAL of the lattice acting on each electron — not electron-electron interactions.`,
  formulas: null,
  examTip: `Be ready to explain in words that the periodic lattice potential (not "electron interactions") directly causes band formation — the conceptual point examiners check.`,
  commonMistake: `Believing energy bands arise purely from electron-electron interactions.`,
  quickCheck: [{ q: 'What physical feature of a crystal causes energy bands to form?', a: 'The periodic potential created by the regularly-spaced atoms/ions in the lattice.' }]
},
{
  id: 'p2-ek-diagram', course: 'physics', unit: 2, category: 'Electronic Materials',
  title: 'E-k Diagram: Direct and Indirect Band Gaps',
  summary: 'Same-k transitions radiate efficiently; different-k need phonons.',
  overview: `The E-k diagram plots electron energy against crystal momentum k, revealing the band structure. A band gap is direct when the conduction-band minimum and valence-band maximum occur at the SAME k; indirect when they occur at DIFFERENT k values.`,
  working: `Direct gap (e.g. GaAs): an electron can drop straight down, emitting a photon — ideal for LEDs and lasers. Indirect gap (e.g. Si): a momentum-carrying phonon must also participate, making light emission far less efficient.`,
  formulas: null,
  examTip: `"Distinguish direct and indirect band gap semiconductors, with examples" is a guaranteed question — always mention GaAs (direct) vs Si/Ge (indirect) and link it to why LEDs use direct-gap materials.`,
  commonMistake: `Saying insulators have "no" band gap — they actually have the LARGEST gap of the three categories.`,
  quickCheck: [{ q: 'Why are LEDs made from direct-bandgap materials like GaAs rather than silicon?', a: 'Direct-gap materials allow efficient photon emission — transitions straight down in energy without needing a momentum-changing phonon.' }]
},
{
  id: 'p2-material-classes', course: 'physics', unit: 2, category: 'Electronic Materials',
  title: 'Metals, Semiconductors and Insulators',
  summary: 'Band gap size decides conduction: overlap, small gap, huge gap.',
  overview: `Materials are classified by how their Valence Band (VB, filled with electrons) and Conduction Band (CB, where electrons move freely and conduct) relate.`,
  working: `Metals (conductors): VB and CB overlap, or the CB is partially filled — electrons move into higher states with negligible energy input. Insulators: a large band gap (Eg > ~5 eV) separates a completely full VB from an empty CB. Semiconductors: a small band gap (Eg ~ 0.7–1.5 eV; Si: 1.1 eV, Ge: 0.7 eV) — room-temperature thermal energy excites some electrons across.`,
  formulas: [{ formula: 'Eg(Si) = 1.1 eV, Eg(Ge) = 0.7 eV', meaning: 'Standard semiconductor band gaps', variables: 'Eg = forbidden gap width', units: 'eV', condition: 'semiconductor: ~0.7–1.5 eV; insulator: > ~5 eV' }],
  examTip: `Memorize Si = 1.1 eV and Ge = 0.7 eV — they appear constantly in numericals and comparisons.`,
  commonMistake: `Thinking semiconductors conduct like metals at absolute zero — with no thermal energy to cross the gap, they behave as insulators.`,
  quickCheck: [{ q: 'Which band-gap range defines a semiconductor?', a: 'Roughly 0.7–1.5 eV — small enough for thermal excitation at room temperature.' }]
},
{
  id: 'p2-fermi-level', course: 'physics', unit: 2, category: 'Electronic Materials',
  title: 'Density of States, Occupation Probability and Fermi Level',
  summary: 'How many states exist and how likely each is filled.',
  overview: `The Density of States (DOS) g(E) describes how many electron states are available per unit energy interval. The Occupation Probability (Fermi-Dirac distribution) f(E) gives the probability that a state of energy E is occupied by an electron at temperature T.`,
  working: `Fermi-Dirac distribution: f(E) = 1/[1 + e^((E−E_F)/kT)].
Fermi level (E_F): the energy at which the occupation probability is exactly 0.5, at any temperature — a reference energy separating "mostly filled" from "mostly empty" states. At absolute zero it marks the boundary between fully-filled and fully-empty states.
Note: the Fermi level is a statistical reference — it is not necessarily a real occupied state in a semiconductor.`,
  formulas: [{ formula: 'f(E) = 1 / [1 + e^((E−E_F)/kT)]', meaning: 'Fermi-Dirac occupation probability', variables: 'E_F = Fermi level, k = Boltzmann constant', units: 'dimensionless (probability)', condition: 'equilibrium at temperature T' }],
  examTip: `For "define Fermi level", the exam-standard answer is exactly: "The energy at which the probability of occupation is exactly ½, at any given temperature" — memorize this phrasing.`,
  commonMistake: `Believing the Fermi level is always physically occupied by an electron — it is a statistical reference energy.`,
  quickCheck: [{ q: 'At what occupation probability is the Fermi level defined?', a: 'f(E) = 0.5.' }]
},
{
  id: 'p2-effective-mass-phonons', course: 'physics', unit: 2, category: 'Electronic Materials',
  title: 'Effective Mass and Phonons',
  summary: 'How crystals distort electron inertia; quantized lattice vibrations.',
  overview: `Effective mass (m*) is the mass an electron "appears" to have when responding to external forces inside a crystal, accounting for the periodic potential's effect on its motion. Phonons are quantized units of lattice vibration.`,
  working: `Effective mass: derived from the band's curvature (m* = ℏ²/(d²E/dk²)); it can differ significantly from the free-electron mass and can even be negative — the electron then behaves like a hole.
Phonons: the vibrational analogue of a photon — quantized crystal sound waves that carry thermal energy and momentum, participating in interactions such as electron-phonon scattering (essential to indirect-gap transitions).`,
  formulas: [{ formula: 'm* = ℏ² / (d²E/dk²)', meaning: 'Effective mass from band curvature', variables: 'E(k) = band energy', units: 'kg', condition: 'near a band extremum; can be negative near a band maximum' }],
  examTip: `Define phonons as "quantized units of lattice vibration — the vibrational analogue of a photon" — that exact framing earns the definition mark.`,
  commonMistake: `Treating effective mass as the electron's real mass — it encodes the crystal's influence and can even be negative.`,
  quickCheck: [{ q: 'What are phonons?', a: 'Quantized units of lattice vibration, carrying thermal energy and momentum through the crystal.' }]
}
];

const PHY_UNIT3_TOPICS = [
{
  id: 'p3-intrinsic-extrinsic', course: 'physics', unit: 3, category: 'Semiconductors',
  title: 'Intrinsic and Extrinsic Semiconductors',
  summary: 'Pure crystals vs doped ones — donors, acceptors, majority carriers.',
  overview: `An intrinsic semiconductor is a pure crystal (e.g. pure Si or Ge) where charge carriers exist only due to thermal excitation across the band gap, always in equal numbers (nₑ = nₕ). An extrinsic semiconductor is intentionally doped to increase and control conductivity.`,
  working: `n-type: doped with a pentavalent (Group V) impurity like Phosphorus/Arsenic — contributes an extra "donor" electron; electrons are the majority carrier. p-type: doped with a trivalent (Group III) impurity like Boron/Gallium — creates a "hole" (acceptor); holes are the majority carrier.`,
  formulas: [{ formula: 'nₑ = nₕ = nᵢ (intrinsic)', meaning: 'Intrinsic carrier equality', variables: 'nᵢ = intrinsic carrier concentration', units: 'per m³', condition: 'pure, undoped crystal' }],
  examTip: `Always state which carrier is "majority" vs "minority" for each doping type — the pairing (n-type → electrons majority, p-type → holes majority) is tested very frequently.`,
  commonMistake: `Confusing donor (pentavalent, gives an electron, makes n-type) with acceptor (trivalent, creates a hole, makes p-type) impurities.`,
  quickCheck: [{ q: 'What type of impurity creates a p-type semiconductor?', a: 'A trivalent (Group III) acceptor impurity, e.g. Boron.' }]
},
{
  id: 'p3-fermi-dependence', course: 'physics', unit: 3, category: 'Semiconductors',
  title: 'Dependence of Fermi Level on Carrier Concentration & Temperature',
  summary: 'Doping shifts E_F toward one band; heat pulls it back to mid-gap.',
  overview: `In an intrinsic semiconductor the Fermi level sits approximately at the middle of the band gap. In n-type material extra electrons shift E_F UP toward the conduction band; in p-type material extra holes shift it DOWN toward the valence band.`,
  working: `As temperature rises, the Fermi level in a doped semiconductor moves back toward the intrinsic (mid-gap) position, since thermal generation of intrinsic carriers begins to dominate over the doping effect at high temperatures.`,
  formulas: [{ formula: 'E_F(intrinsic) ≈ mid-gap', meaning: 'Reference position of the Fermi level', variables: 'shifts up with donor doping, down with acceptor doping', units: 'eV', condition: 'position depends on BOTH doping and temperature' }],
  examTip: `The frequently asked short question "Where does the Fermi level lie in an intrinsic semiconductor?" deserves the precise answer: "approximately at the middle of the forbidden energy gap".`,
  commonMistake: `Assuming the Fermi level's position is fixed regardless of doping concentration or temperature — it depends directly on both.`,
  quickCheck: [{ q: 'In which direction does pentavalent doping shift the Fermi level?', a: 'Upward, toward the conduction band.' }]
},
{
  id: 'p3-transport', course: 'physics', unit: 3, category: 'Semiconductors',
  title: 'Carrier Transport: Diffusion and Drift',
  summary: 'Field-driven drift vs gradient-driven diffusion, linked by D/μ = kT/q.',
  overview: `Two mechanisms move charge carriers through a semiconductor: drift (driven by an electric field) and diffusion (driven by a concentration gradient).`,
  working: `Drift current: carriers accelerated by an applied field — J = q(nμₑ + pμₕ)E. Diffusion current: carriers flow from higher to lower concentration (Fick's-law behaviour), with no field required — described by the diffusion coefficient D.
Einstein relation linking the two: D/μ = kT/q.`,
  formulas: [{ formula: 'D/μ = kT/q', meaning: 'Einstein relation', variables: 'D = diffusion coefficient, μ = mobility', units: 'consistent SI', condition: 'thermal equilibrium carriers' }],
  examTip: `Be ready to state the Einstein relation (D/μ = kT/q) — a short but frequently tested formula linking diffusion and drift parameters.`,
  commonMistake: `Believing diffusion current requires an applied field — it is driven purely by a concentration gradient.`,
  quickCheck: [{ q: 'What causes diffusion current, as opposed to drift current?', a: 'A concentration gradient of carriers — diffusion needs no applied electric field.' }]
},
{
  id: 'p3-pn-junction', course: 'physics', unit: 3, category: 'Junctions & Devices',
  title: 'The p-n Junction',
  summary: 'Depletion region + built-in barrier = the diode.',
  overview: `A p-n junction forms when p-type and n-type semiconductors are joined — the basis of diodes and most semiconductor devices.`,
  working: `At the interface, electrons and holes diffuse across and recombine, creating a depletion region devoid of free carriers, with a built-in potential barrier that opposes further diffusion. Under forward bias the barrier lowers and current flows easily; under reverse bias the barrier grows and only a tiny leakage current flows.`,
  formulas: null,
  examTip: `Describe junction formation as a sequence: diffusion → recombination → depletion region → built-in potential — each step is typically worth a mark.`,
  commonMistake: `Saying the depletion region is "empty of all atoms" — it is empty of MOBILE carriers; fixed ionized dopants remain, producing the barrier field.`,
  quickCheck: [{ q: 'What forms at the p-n interface, opposing further carrier diffusion?', a: 'The depletion region, with its built-in potential barrier.' }]
},
{
  id: 'p3-junctions-metal', course: 'physics', unit: 3, category: 'Junctions & Devices',
  title: 'Heterojunctions and Metal-Semiconductor Junctions (Ohmic & Schottky)',
  summary: 'Different materials join — or metal meets semiconductor: rectifying or not.',
  overview: `A heterojunction is a junction between two DIFFERENT semiconductor materials (e.g. GaAs and AlGaAs), used in advanced devices like laser diodes and HEMTs (treated qualitatively). A metal-semiconductor junction can be Ohmic (non-rectifying) or Schottky (rectifying).`,
  working: `Ohmic junction: linear I-V, low resistance either way — used for simple electrical contacts. Schottky junction: rectifying like a p-n diode, but with a metal-semiconductor interface and faster switching due to the lack of minority-carrier storage.`,
  formulas: null,
  examTip: `"Differentiate Ohmic and Schottky junctions" is a common short question — the differentiator: Ohmic = non-rectifying (resistor-like, both ways); Schottky = rectifying (one way only, like a diode).`,
  commonMistake: `Assuming every metal-semiconductor contact behaves like a diode — many are deliberately engineered Ohmic for use as simple electrical contacts.`,
  quickCheck: [{ q: 'Which metal-semiconductor contact is rectifying?', a: 'The Schottky junction; the Ohmic junction conducts equally both ways.' }]
},
{
  id: 'p3-photoconductivity', course: 'physics', unit: 3, category: 'Junctions & Devices',
  title: 'Photoconductivity and the Photovoltaic Effect',
  summary: 'Light changes resistance vs light generates voltage.',
  overview: `Photoconductivity is the increase in a semiconductor's electrical conductivity when it absorbs light (photons generate extra electron-hole pairs). The photovoltaic effect is the generation of a voltage/current directly from light absorption at a p-n junction, without any external bias — the basis of solar cells.`,
  working: `Photoconductivity: a material property — illumination ADDS carriers, lowering resistance (basis of photoconductive cells/LDRs). Photovoltaic effect: a junction phenomenon — illumination directly GENERATES EMF across an unbiased junction.`,
  formulas: null,
  examTip: `The conceptual differentiator often asked: photoconductivity changes a material's RESISTANCE due to light; the photovoltaic effect directly GENERATES a voltage/current — don't conflate them.`,
  commonMistake: `Using "photoconductive" and "photovoltaic" interchangeably — they are different mechanisms on different structures.`,
  quickCheck: [{ q: 'Does photoconductivity need a junction?', a: 'No — it is a bulk-material effect; the photovoltaic effect requires a p-n junction.' }]
},
{
  id: 'p3-optoelectronic', course: 'physics', unit: 3, category: 'Junctions & Devices',
  title: 'Optoelectronic Devices: LDR, Photodiode, Solar Cell, LED',
  summary: 'Four light-semiconductor devices, four different biasing schemes.',
  overview: `Four devices convert between light and electricity, each with its own operating regime: photoconductive cell, photodiode, solar cell and LED.`,
  working: `Photoconductive cell (LDR): resistance decreases as light intensity increases — used in light sensors. Photodiode: a REVERSE-biased p-n junction whose reverse current increases with incident light — fast light detection. Solar cell: an UNBIASED, large-area p-n junction converting light directly to electrical power. LED: a FORWARD-biased p-n junction of a direct-bandgap material where electron-hole recombination releases energy as light.`,
  formulas: null,
  examTip: `Organize answers as a biasing table: LDR (bulk, no junction), photodiode (reverse bias), solar cell (unbiased), LED (forward bias) — the biasing contrast is what examiners probe.`,
  commonMistake: `Describing a photodiode as unbiased — it specifically operates under REVERSE bias for fast, sensitive detection (unlike the unbiased solar cell).`,
  quickCheck: [{ q: 'Which optoelectronic device operates with no external bias to directly generate power?', a: 'The solar cell.' }]
}
];

const PHY_UNIT4_TOPICS = [
{
  id: 'p4-einstein-coefficients', course: 'physics', unit: 4, category: 'Lasers',
  title: 'Einstein\'s Theory: Absorption, Spontaneous & Stimulated Emission',
  summary: 'Three radiation interactions — coherence is the laser\'s secret.',
  overview: `Einstein identified three fundamental processes by which atoms interact with electromagnetic radiation: absorption, spontaneous emission and stimulated emission — the last being the basis of laser action.`,
  working: `Absorption: an atom in a lower state absorbs a photon and jumps up. Spontaneous emission: an excited atom randomly drops down, emitting a photon in a random direction with random phase (ordinary light sources). Stimulated emission: an incoming photon of the correct energy triggers an excited atom to emit a SECOND photon identical in phase, direction and frequency (coherent) — the basis of lasers.
A and B coefficients: A governs the spontaneous-emission rate; B governs absorption and stimulated-emission rates (intensity-dependent). Einstein's derivation shows stimulated emission dominates only at very high radiation densities — or with population inversion.`,
  formulas: null,
  examTip: `Always state the differentiator: stimulated emission produces a photon COHERENT with the triggering photon — that single property is what makes laser light special.`,
  commonMistake: `Confusing spontaneous (random, no trigger) with stimulated emission (triggered, coherent output).`,
  quickCheck: [{ q: 'What property of stimulated-emission photons enables laser light?', a: 'Coherence — same phase, frequency and direction as the triggering photon.' }]
},
{
  id: 'p4-population-inversion', course: 'physics', unit: 4, category: 'Lasers',
  title: 'Population Inversion and Pumping',
  summary: 'More atoms up top than below — maintained by external pumping.',
  overview: `Normally (thermal equilibrium) lower energy states hold more atoms than higher ones (Boltzmann distribution). Population inversion is the artificial, non-equilibrium condition where a HIGHER state holds more atoms than a lower one — necessary for stimulated emission to dominate. Pumping is the external process (optical, electrical) supplying the energy.`,
  working: `Population inversion never occurs in true thermal equilibrium — it always requires active, external pumping. A complete laser also needs an optical cavity/resonator, so inversion is necessary but not by itself sufficient for laser action.`,
  formulas: null,
  examTip: `Always explicitly state that population inversion is a NECESSARY (but not by itself sufficient — you also need an optical cavity) condition for laser action.`,
  commonMistake: `Believing population inversion happens naturally at high temperature — it never occurs in thermal equilibrium.`,
  quickCheck: [{ q: 'What condition, opposite to normal equilibrium, must hold for lasing?', a: 'Population inversion — more atoms in a higher energy state than a lower one.' }]
},
{
  id: 'p4-level-systems', course: 'physics', unit: 4, category: 'Lasers',
  title: 'Two-, Three- and Four-Level Laser Systems',
  summary: 'Why more levels mean easier inversion and continuous output.',
  overview: `Laser schemes are classified by the number of energy levels involved: two-level (cannot lase continuously), three-level (e.g. Ruby — pulsed) and four-level (e.g. He-Ne — continuous wave).`,
  working: `Two-level: pumping simultaneously depletes the lower level and excites the upper — at best populations equalize, never a true inversion; cannot sustain lasing. Three-level (Ruby): atoms are pumped to a short-lived level that quickly decays non-radiatively into a long-lived METASTABLE level; inversion forms between metastable and ground state, but requires pumping MORE than half the ground-state atoms (high pump power, usually pulsed). Four-level (He-Ne): an extra lower level above the ground state serves as the lasing terminal — since it's normally almost empty, inversion is achieved at far lower pump power, enabling continuous-wave operation.`,
  formulas: null,
  examTip: `"Why is a four-level laser more efficient than a three-level laser?" is very common — the key point: the four-level system's lower lasing level is NOT the ground state and stays nearly empty, so inversion needs far less pump energy.`,
  commonMistake: `Assuming any pumped system automatically lases — a pure two-level system fundamentally cannot sustain population inversion.`,
  quickCheck: [{ q: 'Why can\'t a two-level system sustain laser action?', a: 'Pumping depletes the lower level while populating the upper — populations at best equalize; true inversion can never be sustained.' }]
},
{
  id: 'p4-characteristics', course: 'physics', unit: 4, category: 'Lasers',
  title: 'Characteristics of Laser Beams',
  summary: 'Monochromatic, coherent, directional, intense.',
  overview: `Laser light is distinguished from ordinary light by four properties: monochromaticity, coherence, directionality and high intensity.`,
  working: `Monochromaticity: a single, very narrow wavelength/frequency. Coherence: constant phase relationship — both temporal and spatial. Directionality: extremely low divergence/beam spread. High intensity/brightness: energy concentrated in a narrow beam and spectral line.
Applications: optical fibre communication, medical surgery, industrial cutting/welding, barcode scanning, holography, military range-finding.`,
  formulas: null,
  examTip: `List all four characteristics with one-line explanations — questions frequently ask for "any three with explanation", so knowing all four hedges the choice.`,
  commonMistake: `Listing the properties without explaining them — each one needs its one-line meaning for the mark.`,
  quickCheck: [{ q: 'Name the four characteristics of laser light.', a: 'Monochromaticity, coherence, directionality, and high intensity/brightness.' }]
},
{
  id: 'p4-he-ne-ruby', course: 'physics', unit: 4, category: 'Lasers',
  title: 'Gas Laser (He-Ne) and Solid-State Laser (Ruby)',
  summary: 'Four-level continuous 632.8 nm vs three-level pulsed 694.3 nm.',
  overview: `Two classic lasers anchor this unit: the He-Ne gas laser (four-level, continuous wave) and the Ruby solid-state laser (three-level, pulsed).`,
  working: `He-Ne laser: a Helium-Neon gas mixture; electric discharge excites Helium atoms, which transfer energy to Neon atoms via collisions; lasing (commonly 632.8 nm, red) occurs between Neon levels — a four-level system, continuous-wave output. Ruby laser: a ruby crystal (Cr³⁺ ions in Al₂O₃) optically pumped by a flash lamp; three-level system producing pulsed output at 694.3 nm (red).`,
  formulas: [{ formula: 'He-Ne: 632.8 nm (CW) · Ruby: 694.3 nm (pulsed)', meaning: 'Signature wavelengths of the two standard lasers', variables: '—', units: 'nanometres', condition: 'He-Ne = four-level; Ruby = three-level' }],
  examTip: `The comparison table (He-Ne vs Ruby: type / system-level / active medium / output wavelength / CW-or-pulsed) is the most efficient answer format — practice drawing it from memory.`,
  commonMistake: `Mixing up which laser is three-level (Ruby, pulsed) versus four-level (He-Ne, continuous) — the pairing is frequently tested.`,
  quickCheck: [{ q: 'Is the Ruby laser typically pulsed or continuous, and why?', a: 'Pulsed — it is a three-level system requiring very high pump power to achieve inversion, impractical to sustain continuously.' }]
},
{
  id: 'p4-semiconductor-laser', course: 'physics', unit: 4, category: 'Lasers',
  title: 'Semiconductor Laser and Applications of Lasers',
  summary: 'Forward-biased direct-gap junction recombines into coherent light.',
  overview: `A semiconductor laser uses a forward-biased p-n junction of a direct-bandgap material; lasing occurs via electron-hole recombination at the junction — compact, efficient and ubiquitous.`,
  working: `The junction must be direct-bandgap (e.g. GaAs) so recombination emits photons efficiently. Advantages: small size, low cost, low power, directly modulatable.
Applications: barcode scanners, optical fibre communication, laser pointers, CD/DVD drives. Broader laser applications: fibre communication, surgery, cutting/welding, holography, range-finding.`,
  formulas: null,
  examTip: `Link the semiconductor laser to Unit II/III concepts in answers: DIRECT band gap (efficient photon emission) + forward-biased junction (recombination injection) — showing cross-unit integration earns depth marks.`,
  commonMistake: `Saying a silicon p-n junction would make a good laser — silicon's indirect gap makes recombination mostly non-radiative.`,
  quickCheck: [{ q: 'Why must a semiconductor laser use a direct-bandgap material?', a: 'Recombination must emit photons efficiently — indirect-gap materials need a phonon and radiate poorly.' }]
}
];
