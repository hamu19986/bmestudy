/* ============================================================
   PHYSICS-I — SEMICONDUCTOR PHYSICS — QUESTION BANK
   Source: content/03-Physics-I-Semiconductor-Physics.md
   ============================================================ */

const PHY_QUESTIONS = [
/* -------- Unit I — Quantum Mechanics -------- */
{ id:'phq1', course:'physics', unit:1, topic:'p1-blackbody', type:'mcq', difficulty:'Easy', marks:1,
  question:'The "ultraviolet catastrophe" refers to:',
  options:['Classical theory predicting infinite radiated energy at short wavelengths','Electrons escaping a metal surface','X-ray wavelength increasing after scattering','Energy levels splitting into bands'], answer:'Classical theory predicting infinite radiated energy at short wavelengths',
  explanation:'The Rayleigh-Jeans law\'s failure for black-body radiation; Planck\'s quantization resolved it.' },

{ id:'phq2', course:'physics', unit:1, topic:'p1-blackbody', type:'short', difficulty:'Easy', marks:2,
  question:'State Planck\'s hypothesis and the formula for the energy of one quantum.',
  answer:'Energy is emitted/absorbed only in discrete packets (quanta), not continuously; the energy of one quantum is E = hν with h = 6.626×10⁻³⁴ J·s.',
  explanation:'The key mark-scoring sentence: quantization of energy exchange was Planck\'s departure from classical physics.' },

{ id:'phq3', course:'physics', unit:1, topic:'p1-photoelectric', type:'mcq', difficulty:'Medium', marks:1,
  question:'Light with hν = 3 eV strikes a metal with φ = 4 eV. What happens?',
  options:['Electrons emitted with KE 1 eV','Electrons emitted with zero KE','No emission regardless of intensity','Emission only if intensity increases'], answer:'No emission regardless of intensity',
  explanation:'hν < φ means below threshold — intensity cannot compensate.' },

{ id:'phq4', course:'physics', unit:1, topic:'p1-photoelectric', type:'numerical', difficulty:'Medium', marks:5,
  question:'The work function of a metal is 2 eV and incident photons carry 5 eV. Find KEmax in eV and joules.',
  answer:'KEmax = hν − φ = 5 − 2 = 3 eV = 3 × 1.6×10⁻¹⁹ = 4.8×10⁻¹⁹ J.',
  explanation:'Einstein\'s equation hν = φ + KEmax; unit conversion (1 eV = 1.6×10⁻¹⁹ J) is where most marks are lost.' },

{ id:'phq5', course:'physics', unit:1, topic:'p1-compton', type:'short', difficulty:'Medium', marks:2,
  question:'What is the Compton effect and what does it demonstrate about light?',
  answer:'The increase in X-ray wavelength after scattering off electrons — explained only if photons collide elastically with electrons; it demonstrates the particle nature of electromagnetic radiation.',
  explanation:'Pair with the photoelectric effect: both prove photon (particle) behaviour.' },

{ id:'phq6', course:'physics', unit:1, topic:'p1-debroglie', type:'numerical', difficulty:'Medium', marks:5,
  question:'Calculate the de Broglie wavelength of an electron (m = 9.1×10⁻³¹ kg) moving at 10⁶ m/s.',
  answer:'λ = h/(mv) = 6.626×10⁻³⁴ / (9.1×10⁻³¹ × 10⁶) ≈ 7.28×10⁻¹⁰ m.',
  explanation:'Keep h, m, v in consistent SI units — the common source of factor-of-10 errors.' },

{ id:'phq7', course:'physics', unit:1, topic:'p1-debroglie', type:'mcq', difficulty:'Medium', marks:1,
  question:'A particle\'s kinetic energy is known but not its velocity. Its momentum for λ = h/p is found via:',
  options:['p = mv','p = √(2mKE)','p = KE/c','p = h/KE'], answer:'p = √(2mKE)',
  explanation:'Derived from KE = p²/2m; essential when velocity is not given.' },

{ id:'phq8', course:'physics', unit:1, topic:'p1-uncertainty', type:'short', difficulty:'Medium', marks:2,
  question:'State Heisenberg\'s uncertainty principle and explain its physical significance.',
  answer:'Δx·Δp ≥ ℏ/2 (often h/4π): position and momentum cannot be simultaneously known with unlimited precision. Significance: a fundamental property of nature at quantum scales — not a limitation of measuring instruments.',
  explanation:'The "fundamental, not instrumental" point is usually a separate mark.' },

{ id:'phq9', course:'physics', unit:1, topic:'p1-schrodinger', type:'mcq', difficulty:'Medium', marks:1,
  question:'According to Born\'s interpretation, the probability density of finding a particle is:',
  options:['ψ','|ψ|²','∂ψ/∂t','ψ − ψ*'], answer:'|ψ|²',
  explanation:'ψ itself has no direct physical meaning; |ψ|² (ψψ* for complex ψ) is the probability density.' },

{ id:'phq10', course:'physics', unit:1, topic:'p1-particle-box', type:'numerical', difficulty:'Medium', marks:5,
  question:'For a particle in a 1-D box, express E₃ in terms of the ground-state energy E₁.',
  answer:'Eₙ = n²h²/(8mL²), so E₃ = 9h²/(8mL²) = 9E₁.',
  explanation:'Energy scales as n² — the first excited state (n=2) is 4E₁, the second (n=3) is 9E₁.' },

{ id:'phq11', course:'physics', unit:1, topic:'p1-particle-box', type:'long', difficulty:'Hard', marks:5,
  question:'Explain how confinement in an infinite potential well leads to energy quantization, and why n = 0 is forbidden.',
  answer:'ψ must vanish at the walls (V = ∞ outside), so only wavelengths that fit an integer number of half-waves into L are allowed — discrete standing-wave solutions, hence discrete energies Eₙ = n²h²/(8mL²), n = 1, 2, 3, … n = 0 would give ψ = 0 everywhere (no particle) and zero energy — a particle at rest with definite position, violating the uncertainty principle.',
  explanation:'Boundary conditions → allowed wavelengths → quantization is the chain examiners look for.' },

/* -------- Unit II — Electronic Materials -------- */
{ id:'phq12', course:'physics', unit:2, topic:'p2-free-electron', type:'short', difficulty:'Medium', marks:2,
  question:'State two limitations of the classical (Drude) free-electron theory.',
  answer:'(1) It fails to explain the electronic specific heat of metals. (2) It does not correctly predict electrical conductivity\'s temperature dependence at low temperatures. (Both are corrected by the quantum free-electron theory with the Pauli exclusion principle.)',
  explanation:'These two specific failures are the memorized answer examiners expect.' },

{ id:'phq13', course:'physics', unit:2, topic:'p2-kronig-penney', type:'long', difficulty:'Medium', marks:5,
  question:'Explain, according to the Kronig-Penney model, how allowed and forbidden bands arise in a crystal.',
  answer:'Electrons move through a PERIODIC array of potential wells (the lattice). Solving Schrödinger\'s equation for this periodic potential shows that only certain energy ranges admit propagating solutions — allowed bands — separated by forbidden gaps. The banding is caused fundamentally by the lattice\'s periodic potential acting on each electron, not by electron-electron interactions.',
  explanation:'Attribute band formation to the periodic potential — that causal statement is the conceptual mark.' },

{ id:'phq14', course:'physics', unit:2, topic:'p2-ek-diagram', type:'long', difficulty:'Medium', marks:5,
  question:'Distinguish direct and indirect band gap semiconductors, with examples, and explain why LEDs use direct-gap materials.',
  answer:'Direct gap (GaAs): conduction-band minimum and valence-band maximum at the SAME k — an electron drops straight down emitting a photon efficiently. Indirect gap (Si, Ge): extrema at DIFFERENT k values — a momentum-carrying phonon must also participate, so light emission is inefficient. LEDs use direct-gap materials because radiative recombination is fast and efficient there.',
  explanation:'GaAs vs Si/Ge plus the phonon argument covers all the mark points.' },

{ id:'phq15', course:'physics', unit:2, topic:'p2-material-classes', type:'mcq', difficulty:'Easy', marks:1,
  question:'The band gap of silicon at room temperature is approximately:',
  options:['0.7 eV','1.1 eV','3 eV','6 eV'], answer:'1.1 eV',
  explanation:'Si = 1.1 eV, Ge = 0.7 eV — the standard pair to memorize.' },

{ id:'phq16', course:'physics', unit:2, topic:'p2-material-classes', type:'short', difficulty:'Easy', marks:2,
  question:'Classify metals, semiconductors and insulators by their band structure.',
  answer:'Metals: VB and CB overlap or the CB is partially filled — electrons move freely. Semiconductors: small gap (~0.7–1.5 eV) — thermal energy excites some electrons across at room temperature. Insulators: large gap (> ~5 eV) — a full VB is separated from an empty CB by a practically uncrossable gap.',
  explanation:'Gap size ordering: metal (none/overlap) < semiconductor < insulator.' },

{ id:'phq17', course:'physics', unit:2, topic:'p2-fermi-level', type:'short', difficulty:'Medium', marks:2,
  question:'Define the Fermi level precisely.',
  answer:'The energy level at which the probability of occupation is exactly ½, at any given temperature — the statistical reference separating mostly-filled from mostly-empty states.',
  explanation:'The exact phrasing ("exactly ½, at any given temperature") is what earns the definition mark.' },

{ id:'phq18', course:'physics', unit:2, topic:'p2-fermi-level', type:'mcq', difficulty:'Hard', marks:1,
  question:'Which statement about the Fermi level in a semiconductor is TRUE?',
  options:['It is always occupied by an electron','It is a statistical reference energy, not necessarily a real occupied state','It always lies inside the conduction band','It equals the band gap energy'], answer:'It is a statistical reference energy, not necessarily a real occupied state',
  explanation:'At absolute zero it marks the filled/empty boundary — it need not be a real state.' },

{ id:'phq19', course:'physics', unit:2, topic:'p2-effective-mass-phonons', type:'short', difficulty:'Medium', marks:2,
  question:'What are phonons and what role do they play in indirect-gap transitions?',
  answer:'Phonons are quantized units of lattice vibration — the vibrational analogue of a photon — carrying thermal energy and momentum. In indirect-gap transitions they supply the momentum difference between band extrema that photons alone cannot provide.',
  explanation:'The "momentum carrier" role links phonons to the E-k diagram topic.' },

/* -------- Unit III — Semiconductors -------- */
{ id:'phq20', course:'physics', unit:3, topic:'p3-intrinsic-extrinsic', type:'mcq', difficulty:'Easy', marks:1,
  question:'Doping silicon with phosphorus produces:',
  options:['p-type with holes as majority','n-type with electrons as majority','An intrinsic crystal','A metal'], answer:'n-type with electrons as majority',
  explanation:'Phosphorus is pentavalent — a donor adding free electrons.' },

{ id:'phq21', course:'physics', unit:3, topic:'p3-intrinsic-extrinsic', type:'short', difficulty:'Easy', marks:2,
  question:'State the majority and minority carriers in n-type and p-type semiconductors.',
  answer:'n-type: majority = electrons, minority = holes (pentavalent donor doping). p-type: majority = holes, minority = electrons (trivalent acceptor doping).',
  explanation:'The carrier-type pairing is tested very frequently in short-answer format.' },

{ id:'phq22', course:'physics', unit:3, topic:'p3-fermi-dependence', type:'short', difficulty:'Medium', marks:2,
  question:'Where does the Fermi level lie in intrinsic, n-type and p-type semiconductors?',
  answer:'Intrinsic: approximately at the middle of the forbidden gap. n-type: shifted UP toward the conduction band. p-type: shifted DOWN toward the valence band. As temperature rises, doped materials\' E_F moves back toward mid-gap.',
  explanation:'Direction of shift with doping plus the temperature pull-back covers the full answer.' },

{ id:'phq23', course:'physics', unit:3, topic:'p3-transport', type:'mcq', difficulty:'Medium', marks:1,
  question:'Diffusion current is caused by:',
  options:['An applied electric field','A concentration gradient','A magnetic field','Temperature gradients only'], answer:'A concentration gradient',
  explanation:'Carriers flow from high to low concentration — no field required (unlike drift).' },

{ id:'phq24', course:'physics', unit:3, topic:'p3-transport', type:'short', difficulty:'Medium', marks:2,
  question:'State the Einstein relation and define its terms.',
  answer:'D/μ = kT/q, where D is the diffusion coefficient, μ the carrier mobility, k the Boltzmann constant, T temperature and q the electronic charge.',
  explanation:'A short but frequently tested formula linking diffusion and drift transport.' },

{ id:'phq25', course:'physics', unit:3, topic:'p3-pn-junction', type:'long', difficulty:'Medium', marks:5,
  question:'Explain the formation of the depletion region and built-in potential at a p-n junction.',
  answer:'When p and n regions join, majority carriers diffuse across: electrons from n to p, holes from p to n. Near the interface they recombine, leaving fixed ionized dopants — a carrier-free depletion region. These fixed charges create an internal electric field and a built-in potential barrier that opposes further diffusion, reaching equilibrium. (This barrier is what a diode\'s forward/reverse bias modulates.)',
  explanation:'Sequence marks: diffusion → recombination → depletion region → built-in potential.' },

{ id:'phq26', course:'physics', unit:3, topic:'p3-junctions-metal', type:'mcq', difficulty:'Medium', marks:1,
  question:'An Ohmic metal-semiconductor contact:',
  options:['Rectifies like a diode','Conducts linearly in both directions','Blocks all current','Only works at high temperature'], answer:'Conducts linearly in both directions',
  explanation:'Ohmic = non-rectifying (resistor-like); Schottky = rectifying with fast switching.' },

{ id:'phq27', course:'physics', unit:3, topic:'p3-junctions-metal', type:'short', difficulty:'Medium', marks:2,
  question:'Why does a Schottky diode switch faster than a p-n junction diode?',
  answer:'It is a majority-carrier device with no minority-carrier storage — there is no stored charge to remove when switching, so it recovers almost instantly.',
  explanation:'"No minority-carrier storage" is the exact phrase examiners want.' },

{ id:'phq28', course:'physics', unit:3, topic:'p3-photoconductivity', type:'short', difficulty:'Medium', marks:2,
  question:'Differentiate photoconductivity from the photovoltaic effect.',
  answer:'Photoconductivity: illumination generates extra carriers, INCREASING a material\'s conductivity (a bulk/material effect — basis of LDRs). Photovoltaic effect: illumination directly GENERATES a voltage/current across an unbiased p-n junction (a junction effect — basis of solar cells).',
  explanation:'Resistance change vs voltage generation — the conceptual differentiator.' },

{ id:'phq29', course:'physics', unit:3, topic:'p3-optoelectronic', type:'long', difficulty:'Medium', marks:5,
  question:'Describe the construction and biasing of the photoconductive cell, photodiode, solar cell and LED.',
  answer:'LDR (photoconductive cell): bulk semiconductor, resistance falls as light rises — light sensing. Photodiode: p-n junction under REVERSE bias — reverse current rises with incident light; fast detection. Solar cell: large-area, UNBIASED junction — converts light directly to electrical power via the photovoltaic effect. LED: FORWARD-biased direct-bandgap junction — recombination emits light.',
  explanation:'A biasing table (reverse / none / forward) organizes the answer efficiently.' },

/* -------- Unit IV — Lasers -------- */
{ id:'phq30', course:'physics', unit:4, topic:'p4-einstein-coefficients', type:'long', difficulty:'Medium', marks:5,
  question:'Explain absorption, spontaneous emission and stimulated emission. Which process produces coherent light and why?',
  answer:'Absorption: a lower-state atom absorbs a photon and jumps up. Spontaneous emission: an excited atom randomly drops, emitting a photon of random phase/direction (ordinary sources). Stimulated emission: an incoming photon triggers an excited atom to emit a SECOND photon identical in phase, frequency and direction — COHERENT with the trigger. Stimulated emission produces coherent light because the emitted photon is an exact phase-locked copy of the stimulating one.',
  explanation:'"Coherent — same phase, direction, frequency" is the mark-scoring phrase.' },

{ id:'phq31', course:'physics', unit:4, topic:'p4-population-inversion', type:'short', difficulty:'Medium', marks:2,
  question:'Define population inversion and pumping. Why is inversion never thermal?',
  answer:'Population inversion: more atoms in a higher energy state than a lower one (opposite of the Boltzmann equilibrium distribution). Pumping: the external process (optical/electrical) supplying energy to achieve and maintain it. Inversion never occurs in thermal equilibrium — it always requires active external pumping.',
  explanation:'"Necessary but not sufficient (also needs an optical cavity)" is the extra conceptual point.' },

{ id:'phq32', course:'physics', unit:4, topic:'p4-level-systems', type:'long', difficulty:'Hard', marks:5,
  question:'Why can\'t a two-level system lase, and why is a four-level laser more efficient than a three-level one?',
  answer:'Two-level: pumping simultaneously depletes the lower level while populating the upper — populations at best equalize; true inversion is never sustained. Three-level (Ruby): inversion forms between a metastable level and the ground state, requiring MORE than half the ground-state atoms to be pumped — high power, pulsed. Four-level (He-Ne): the lower lasing level sits ABOVE the ground state and stays nearly empty, so inversion needs far less pump energy — enabling continuous-wave operation.',
  explanation:'The "lower lasing level is not the ground state" insight is the key mark.' },

{ id:'phq33', course:'physics', unit:4, topic:'p4-characteristics', type:'short', difficulty:'Easy', marks:2,
  question:'List the four characteristics of laser light with one-line explanations.',
  answer:'Monochromaticity: single, very narrow wavelength. Coherence: constant phase relationship (temporal and spatial). Directionality: extremely low divergence. High intensity: energy concentrated in a narrow beam and spectral line.',
  explanation:'Each characteristic needs its one-line meaning — listing alone loses marks.' },

{ id:'phq34', course:'physics', unit:4, topic:'p4-he-ne-ruby', type:'mcq', difficulty:'Medium', marks:1,
  question:'Which pairing is correct?',
  options:['He-Ne: three-level, pulsed','Ruby: four-level, continuous','He-Ne: four-level, continuous','Ruby: two-level, continuous'], answer:'He-Ne: four-level, continuous',
  explanation:'He-Ne = four-level CW at 632.8 nm; Ruby = three-level pulsed at 694.3 nm.' },

{ id:'phq35', course:'physics', unit:4, topic:'p4-he-ne-ruby', type:'short', difficulty:'Medium', marks:2,
  question:'How does energy transfer from helium to neon in a He-Ne laser?',
  answer:'An electric discharge excites helium atoms; excited helium atoms transfer their energy to neon atoms via collisions (resonant energy transfer), populating neon\'s upper lasing levels — lasing occurs between neon levels at 632.8 nm.',
  explanation:'Discharge → He excitation → collisional transfer to Ne → 632.8 nm transition.' },

{ id:'phq36', course:'physics', unit:4, topic:'p4-semiconductor-laser', type:'long', difficulty:'Medium', marks:5,
  question:'Explain the working of a semiconductor laser and state three applications.',
  answer:'A forward-biased p-n junction of a DIRECT-bandgap material (e.g. GaAs): injected electrons and holes recombine at the junction, emitting photons; above threshold current, stimulated emission dominates in the optical cavity, producing coherent light. Advantages: compact, efficient, low-power, directly modulatable. Applications: barcode scanners, optical fibre communication, laser pointers/CD-DVD drives.',
  explanation:'Link back to direct-gap physics (Unit II) — cross-unit integration earns depth marks.' }
];
