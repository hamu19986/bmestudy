# Physics-I — Semiconductor Physics — 25BSC-PHY-103H
**Credits:** 4 (3-1-0) · Internal 30, External 70, Total 100 · Exam: 3 hrs (for CSE/CST/IT/CSIT branches)
**Exam pattern:** Q1 compulsory (covers all 4 units) + attempt 5 of remaining 8 (2 per unit), at least one from every unit.

---

## UNIT I — Introduction to Quantum Mechanics

### 1. Limitations of Classical Mechanics & Black-Body Radiation
**Overview:** Classical (Newtonian) mechanics fails to explain several atomic-scale phenomena — black-body radiation spectra, the photoelectric effect, and atomic stability — motivating the birth of quantum mechanics.
**Black-body radiation:** A black body absorbs all incident radiation and re-emits a characteristic spectrum depending only on temperature. Classical theory (Rayleigh-Jeans law) predicted an "ultraviolet catastrophe" — infinite energy at short wavelengths — which does not match experiment.
**Exam Tip:** Be ready to name and briefly describe the "ultraviolet catastrophe" as the specific classical failure that black-body radiation exposed — a frequently asked short-answer point.
**Common Mistake:** Confusing black-body radiation's failure (ultraviolet catastrophe) with the photoelectric effect's failure (classical theory predicted no threshold frequency) — they are different classical breakdowns.
**Quick Check:** Q: What classical prediction failure is called the "ultraviolet catastrophe"? A: Classical theory predicting infinite radiated energy at short wavelengths, which doesn't match experiment.

### 2. Planck's Radiation Law
**Overview:** Max Planck resolved the ultraviolet catastrophe by proposing that energy is emitted/absorbed only in discrete packets ("quanta"), not continuously.
**Formula:** E = hν (energy of one quantum), where h = Planck's constant (6.626×10⁻³⁴ J·s), ν = frequency.
**Exam Tip:** State clearly that Planck's key departure from classical physics was quantization of energy exchange — this single sentence is often the key mark-scoring point in a "state Planck's hypothesis" question.
**Common Mistake:** Writing E=hν as the total energy of a black body, rather than the energy of a SINGLE quantum (photon) of radiation.
**Quick Check:** Q: What physical quantity did Planck propose is quantized? A: Energy exchanged between radiation and matter (in discrete packets, hν).

### 3. Photoelectric Effect & Compton Effect
**Overview:** Both effects demonstrate the particle nature of light. The **Photoelectric effect** is the emission of electrons from a metal surface when light of sufficient frequency strikes it. The **Compton effect** is the increase in wavelength of X-rays after scattering off electrons, explained only if X-rays behave as particles (photons) colliding elastically with electrons.
**Einstein's photoelectric equation:** hν = φ + KEmax, where φ (work function) is the minimum energy needed to eject an electron, and KEmax = ½mv²max is the maximum kinetic energy of emitted electrons.
**Key observations:** Below a threshold frequency ν₀ (where hν₀=φ), NO electrons are emitted regardless of light intensity — inexplicable classically, since classical wave theory predicts emission should depend on intensity, not frequency.
**Worked Example:** If φ = 2 eV and incident photon energy hν = 5 eV, then KEmax = 5−2 = 3 eV.
**Exam Tip:** Einstein's equation (hν = φ + KEmax) is the single most numerically tested formula in this unit — practice converting between eV and Joules (1 eV = 1.6×10⁻¹⁹ J) since exam numericals often mix units.
**Common Mistake:** Believing higher light intensity alone can cause photoelectric emission below the threshold frequency — intensity affects the NUMBER of photoelectrons, not whether emission happens at all.
**Quick Check:** Q: What does the existence of a threshold frequency in the photoelectric effect prove? A: Light behaves as discrete photons (particles), not a continuous wave, since wave theory predicts no such frequency threshold.

### 4. Wave-Particle Duality & de Broglie's Hypothesis
**Overview:** Light shows both wave (interference, diffraction) and particle (photoelectric, Compton) behavior. De Broglie extended this duality to ALL matter — proposing that any particle with momentum p has an associated wavelength.
**Formula:** λ = h/p = h/(mv), the de Broglie wavelength.
**Worked Example:** An electron (mass 9.1×10⁻³¹ kg) moving at 10⁶ m/s has λ = 6.626×10⁻³⁴ / (9.1×10⁻³¹ × 10⁶) ≈ 7.28×10⁻¹⁰ m.
**Exam Tip:** De Broglie wavelength numericals are common — always keep h, mass, and velocity in consistent SI units before plugging into the formula, since this is the most common source of factor-of-10 errors.
**Common Mistake:** Using momentum p = mv for a numerical involving KE instead — remember p can also be derived from kinetic energy as p=√(2mKE) when velocity isn't directly given.
**Quick Check:** Q: What does de Broglie's hypothesis claim about matter? A: Every moving particle has an associated wavelength, λ = h/(mv) — matter has wave-like properties too.

### 5. Heisenberg's Uncertainty Principle
**Overview:** States that it is fundamentally impossible to simultaneously know both the exact position and exact momentum of a particle with unlimited precision — this is not a measurement flaw but a fundamental property of nature at quantum scales.
**Formula:** Δx · Δp ≥ ℏ/2 (or commonly stated as Δx·Δp ≥ h/4π), where ℏ = h/2π.
**Exam Tip:** Be ready to explain the principle conceptually (not just state the formula) — examiners often ask "explain the physical significance" as a separate mark, expecting an explanation about the inherent limit of simultaneous measurement, not a measurement-apparatus limitation.
**Common Mistake:** Describing the uncertainty as being due to "poor instruments" — it is a fundamental quantum-mechanical limit, independent of how good the measuring equipment is.
**Quick Check:** Q: Can Δx and Δp both be made simultaneously zero? A: No — their product has a fundamental non-zero lower bound (≥ℏ/2).

### 6. Schrödinger Wave Equation & Physical Significance of ψ
**Overview:** The Schrödinger equation is the fundamental equation of non-relativistic quantum mechanics, describing how the wave function ψ (which encodes all information about a quantum system) evolves.
**Time-dependent form:** iℏ ∂ψ/∂t = Ĥψ. **Time-independent form (for a particle in a potential V):** −(ℏ²/2m) d²ψ/dx² + Vψ = Eψ.
**Physical significance of ψ:** ψ itself has no direct physical meaning, but |ψ|² gives the *probability density* of finding the particle at a given position (Born's interpretation). ψ must be single-valued, finite, and continuous everywhere (well-behaved) to represent a physically valid state.
**Exam Tip:** Always state Born's interpretation (|ψ|² = probability density) explicitly when discussing ψ's significance — many students lose marks by describing ψ itself as a "probability", which is incorrect.
**Common Mistake:** Saying ψ represents the probability of finding a particle — it is |ψ|² (or ψψ*, for complex ψ) that represents probability density, not ψ alone.
**Quick Check:** Q: What physically measurable quantity does |ψ|² represent? A: The probability density of finding the particle at that point.

### 7. Particle in a One-Dimensional Box
**Overview:** A classic quantum-mechanics model: a particle confined to move freely within a box of length L, with infinitely high walls (V=0 inside, V=∞ outside), so ψ=0 at the walls.
**Result:** Solving the time-independent Schrödinger equation with these boundary conditions gives quantized energy levels: Eₙ = n²h²/(8mL²), for n = 1,2,3,...
**Key insight:** Energy is quantized (only discrete values allowed) purely because of the box's boundary conditions — this is the simplest system showing how confinement leads to quantization.
**Worked Example:** The ground state (n=1) energy is E₁ = h²/(8mL²); the first excited state (n=2) has E₂ = 4E₁ — four times the ground state energy.
**Exam Tip:** Memorize the formula Eₙ = n²h²/(8mL²) exactly — it's directly used in "calculate the energy of the nth level" numericals, one of the most repeated Unit I numerical types.
**Common Mistake:** Forgetting n starts at 1 (not 0) — n=0 would give zero energy everywhere, violating the uncertainty principle (a confined particle can never truly be at rest).
**Quick Check:** Q: Why can't n=0 be an allowed state for a particle in a box? A: It would give zero energy and require the particle to be perfectly at rest with a definite position, violating the Uncertainty Principle.

---

## UNIT II — Electronic Materials

### 1. Free-Electron Theory & Drude Model
**Overview:** The Drude model treats the free (valence) electrons in a metal as a classical "gas" of particles that move freely between collisions with fixed positive ion cores, explaining electrical/thermal conductivity qualitatively.
**Limitations:** It fails to explain specific heat capacity of metals, and treats electrons classically — ignoring quantum effects like the Pauli exclusion principle, which the later Quantum Free Electron theory (Sommerfeld) corrects.
**Exam Tip:** A common conceptual question is "state two limitations of the classical free-electron theory" — memorize: (1) fails to explain electronic specific heat correctly, (2) doesn't correctly predict electrical conductivity's temperature dependence at low temperatures.
**Common Mistake:** Confusing the Drude (classical) model with the Sommerfeld (quantum) free-electron model — only the quantum version correctly incorporates the Pauli exclusion principle and Fermi-Dirac statistics.
**Quick Check:** Q: What does the Drude model assume about the valence electrons in a metal? A: They behave as a free, classical gas of particles moving between collisions with fixed ions.

### 2. Kronig-Penney Model & Origin of the Band Gap
**Overview:** The Kronig-Penney model treats electrons in a crystal as moving through a periodic array of potential wells (representing the periodic arrangement of atoms), and shows mathematically why allowed and forbidden energy bands arise.
**Key result:** Electron energies split into allowed "bands" separated by forbidden "gaps" — this periodicity-induced banding is the fundamental origin of the band structure that determines whether a material is a conductor, semiconductor, or insulator.
**Exam Tip:** Be ready to explain, in words, that the periodic potential of the crystal lattice (not just "electron interactions") is the direct cause of band formation — a key conceptual point examiners check for.
**Common Mistake:** Believing energy bands arise purely from electron-electron interactions — they arise fundamentally from the PERIODIC POTENTIAL of the lattice acting on each electron.
**Quick Check:** Q: What physical feature of a crystal, according to the Kronig-Penney model, causes energy bands to form? A: The periodic potential created by the regularly-spaced atoms/ions in the lattice.

### 3. Energy Bands: Metals, Semiconductors, Insulators; E-k Diagrams
**Overview:** Materials are classified by how their Valence Band (VB, filled with electrons) and Conduction Band (CB, where electrons can move freely and conduct current) relate:
- **Metals (conductors):** VB and CB overlap, or the CB is partially filled — electrons can move into higher energy states with negligible energy input.
- **Insulators:** A large band gap (Eg > ~5 eV) separates a completely full VB from an empty CB — electrons cannot practically jump across.
- **Semiconductors:** A small band gap (Eg ~ 0.7–1.5 eV, e.g. Si: 1.1 eV, Ge: 0.7 eV) — at room temperature, thermal energy is enough to excite some electrons across.
**Direct vs. Indirect band gap:** In a Direct band gap material (e.g. GaAs), the conduction-band minimum and valence-band maximum occur at the SAME momentum (k) value — an electron can drop straight down, emitting a photon (ideal for LEDs/lasers). In an Indirect band gap material (e.g. Si), the minimum/maximum occur at DIFFERENT k values, so a momentum-carrying phonon must also be involved — this makes light emission far less efficient.
**Exam Tip:** "Distinguish direct and indirect band gap semiconductors, with examples" is a guaranteed question — always mention GaAs (direct) vs. Si/Ge (indirect) and link it to why LEDs are made from direct-gap materials.
**Common Mistake:** Saying insulators have "no" band gap — they actually have the LARGEST band gap of the three categories, which is precisely why they don't conduct.
**Quick Check:** Q: Why are LEDs typically made from direct-bandgap materials like GaAs rather than silicon? A: Direct-gap materials allow efficient photon emission (electron transitions straight down in energy without needing a momentum-changing phonon), unlike indirect-gap silicon.

### 4. Density of States, Occupation Probability, Fermi Level, Effective Mass, Phonons
**Overview:** The Density of States (DOS) g(E) describes how many electron states are available per unit energy interval. The Occupation Probability (Fermi-Dirac distribution) f(E) = 1/[1+e^((E−Eф)/kT)] gives the probability that a state of energy E is occupied by an electron at temperature T.
**Fermi level (Eф):** The energy level at which the occupation probability is exactly 0.5, at any temperature — a reference energy that separates "mostly filled" from "mostly empty" states.
**Effective mass (m*):** The mass an electron "appears" to have when responding to external forces inside a crystal, accounting for the periodic potential's effect on its motion — can differ significantly from the free-electron mass, and can even be negative (behaving like a hole).
**Phonons:** Quantized units of lattice vibration (crystal sound waves) — the vibrational analogue of a photon, responsible for carrying thermal energy and momentum in interactions like Compton-like electron-phonon scattering.
**Exam Tip:** For "define Fermi level," the exam-standard answer is precisely: "The energy at which the probability of occupation is exactly ½, at any given temperature" — memorize this exact phrasing.
**Common Mistake:** Believing the Fermi level is always physically OCCUPIED by an electron — it is a statistical reference energy, and at absolute zero it marks the boundary between fully-filled and fully-empty states, not necessarily a real occupied state itself in a semiconductor.
**Quick Check:** Q: At what occupation probability value is the Fermi level defined? A: f(E) = 0.5.

---

## UNIT III — Semiconductors

### 1. Intrinsic and Extrinsic Semiconductors
**Overview:** An Intrinsic semiconductor is a pure crystal (e.g., pure Si or Ge) where charge carriers (electrons and holes) exist only due to thermal excitation across the band gap, always in equal numbers (nₑ = nₕ). An Extrinsic semiconductor is intentionally "doped" with impurity atoms to increase and control conductivity:
- **n-type:** Doped with a pentavalent (Group V) impurity like Phosphorus/Arsenic — contributes an extra "donor" electron, making electrons the majority carrier.
- **p-type:** Doped with a trivalent (Group III) impurity like Boron/Gallium — creates a "hole" (electron deficiency, an acceptor), making holes the majority carrier.
**Exam Tip:** Always state which carrier is "majority" vs "minority" for each doping type — this specific pairing (n-type→electrons majority, p-type→holes majority) is tested very frequently in short-answer format.
**Common Mistake:** Confusing donor (pentavalent, gives an electron, makes n-type) with acceptor (trivalent, creates a hole, makes p-type) impurities.
**Quick Check:** Q: What type of impurity creates a p-type semiconductor? A: A trivalent (Group III) acceptor impurity, e.g. Boron.

### 2. Dependence of Fermi Level on Carrier Concentration & Temperature
**Overview:** In an intrinsic semiconductor, the Fermi level sits approximately at the middle of the band gap. In n-type material, extra electrons shift the Fermi level UP, closer to the conduction band; in p-type material, extra holes shift it DOWN, closer to the valence band. As temperature rises, the Fermi level in a doped semiconductor moves back toward the intrinsic (mid-gap) position, since thermal generation of intrinsic carriers begins to dominate over the doping effect at high temperatures.
**Exam Tip:** A frequently asked short question: "Where does the Fermi level lie in an intrinsic semiconductor?" — answer precisely: "approximately at the middle of the forbidden energy gap."
**Common Mistake:** Assuming the Fermi level's position is fixed regardless of doping concentration or temperature — it is directly dependent on both.
**Quick Check:** Q: In which direction does doping with a pentavalent impurity shift the Fermi level? A: Upward, toward the conduction band.

### 3. Carrier Transport: Diffusion and Drift
**Overview:** **Drift current** arises from charge carriers accelerated by an applied electric field (Jdrift = σE, or in terms of carriers, J = q(nμₑ+pμₕ)E). **Diffusion current** arises from carriers moving from a region of higher concentration to lower concentration (Fick's law-like behavior), even with no applied field — described by the diffusion coefficient D, related to mobility μ via the Einstein relation D/μ = kT/q.
**Exam Tip:** Be ready to state the Einstein relation (D/μ = kT/q) — it's a short but frequently tested formula linking diffusion and drift transport parameters.
**Common Mistake:** Believing diffusion current requires an applied electric field — it is driven purely by a concentration gradient, independent of any field.
**Quick Check:** Q: What causes diffusion current, as opposed to drift current? A: A concentration gradient of charge carriers (diffusion needs no applied electric field, unlike drift).

### 4. p-n Junction, Heterojunctions, Metal-Semiconductor Junctions
**Overview:** A **p-n junction** forms when p-type and n-type semiconductors are joined — at the interface, electrons and holes diffuse across and recombine, creating a "depletion region" devoid of free carriers, with a built-in potential barrier that opposes further diffusion (this is the basis of diodes). A **Heterojunction** is a junction between two DIFFERENT semiconductor materials (e.g., GaAs and AlGaAs), used in advanced devices like laser diodes and HEMTs, treated only qualitatively in this course. A **Metal-semiconductor junction** can be either an **Ohmic junction** (linear I-V, low resistance, used for simple electrical contacts) or a **Schottky junction** (rectifying, like a p-n junction diode but with a metal-semiconductor interface, and faster switching due to lack of minority-carrier storage).
**Exam Tip:** "Differentiate Ohmic and Schottky junctions" is a common short question — the key differentiator is: Ohmic = non-rectifying (behaves like a resistor, current flows both ways easily); Schottky = rectifying (current flows easily one way only, like a diode).
**Common Mistake:** Assuming every metal-semiconductor contact automatically behaves like a diode — many are deliberately engineered to be Ohmic (non-rectifying) for use as simple electrical contacts.
**Quick Check:** Q: What forms at the interface of a p-n junction, opposing further carrier diffusion? A: The depletion region, with its built-in potential barrier.

### 5. Photoconductivity, Photovoltaic Effect & Optoelectronic Devices
**Overview:** **Photoconductivity** is the increase in a semiconductor's electrical conductivity when it absorbs light (photons generate extra electron-hole pairs). The **Photovoltaic effect** is the generation of a voltage/current directly from light absorption at a p-n junction, without any external bias — the basis of solar cells.
**Devices:** **Photoconductive cell (LDR)** — resistance decreases with increasing light intensity, used in light sensors. **Photodiode** — a reverse-biased p-n junction whose reverse current increases with incident light, used for fast light detection. **Solar cell** — an unbiased, large-area p-n junction that converts light directly to electrical power. **LED (Light Emitting Diode)** — a forward-biased p-n junction (of a direct-bandgap material) where electron-hole recombination releases energy as light.
**Exam Tip:** A conceptual differentiator often asked: photoconductivity changes a material's RESISTANCE due to light, while the photovoltaic effect directly GENERATES a voltage/current due to light — don't conflate the two.
**Common Mistake:** Describing a photodiode as unbiased — it specifically operates under REVERSE bias for fast, sensitive light detection (unlike a solar cell, which is unbiased).
**Quick Check:** Q: Which optoelectronic device operates with no external bias to directly generate power from light? A: The solar cell.

---

## UNIT IV — Lasers

### 1. Einstein's Theory of Matter-Radiation Interaction
**Overview:** Einstein identified three fundamental processes by which atoms interact with electromagnetic radiation: **Absorption** (an atom in a lower energy state absorbs a photon and jumps to a higher state), **Spontaneous emission** (an atom in an excited state randomly drops to a lower state, emitting a photon in a random direction with random phase — the basis of ordinary light sources), and **Stimulated emission** (an incoming photon of the correct energy triggers an excited atom to drop down, emitting a SECOND photon that is identical in phase, direction, and frequency to the triggering photon — the basis of laser action).
**A and B coefficients:** Einstein's A coefficient governs the rate of spontaneous emission; the B coefficients govern the rates of absorption and stimulated emission (which depend on the incident radiation's intensity). Their relationship (derived by Einstein) shows that stimulated emission becomes significant only at very high radiation densities, or requires the population inversion trick used in real lasers.
**Exam Tip:** The key differentiator to always state: stimulated emission produces a photon that is COHERENT (same phase, direction, frequency) with the triggering photon — this single property is what makes laser light special (spontaneous emission does not have this coherence).
**Common Mistake:** Confusing spontaneous and stimulated emission — spontaneous emission happens randomly, with no external trigger; stimulated emission is triggered by an incoming photon and produces a coherent output photon.
**Quick Check:** Q: What key property makes stimulated-emission photons useful for producing laser light? A: They are coherent — same phase, frequency, and direction as the triggering photon.

### 2. Population Inversion and Pumping
**Overview:** Normally (thermal equilibrium), lower energy states have MORE atoms than higher energy states (Boltzmann distribution). **Population inversion** is the artificially created, non-equilibrium condition where a HIGHER energy state has more atoms than a lower one — a necessary condition for stimulated emission (and hence lasing) to dominate over absorption. **Pumping** is the external process (optical, electrical) used to continuously supply energy and achieve/maintain this population inversion.
**Exam Tip:** Always explicitly state that population inversion is a NECESSARY (but not by itself sufficient — you also need an optical cavity/resonator) condition for laser action — a common conceptual point in "explain the requirements for laser action" questions.
**Common Mistake:** Believing population inversion happens naturally at high temperature — it never occurs in true thermal equilibrium and always requires active, external pumping.
**Quick Check:** Q: What condition must be met, opposite to normal equilibrium, for lasing to occur? A: Population inversion — more atoms in a higher energy state than a lower one.

### 3. Two-Level, Three-Level, Four-Level Laser Systems
**Overview:** A **Two-level system** cannot sustain continuous population inversion (pumping simultaneously depletes the lower level and excites the upper level, so at best you reach equal populations, never a true inversion) — theoretically shown to be unable to lase continuously. A **Three-level system** (e.g., Ruby laser) pumps atoms to a short-lived higher level, from which they quickly decay (non-radiatively) into a longer-lived "metastable" intermediate level — population inversion is achieved between this metastable level and the ground state, but requires pumping MORE than half the ground-state atoms (high pump power, often pulsed operation). A **Four-level system** (e.g., He-Ne laser) adds an extra lower level above the true ground state as the lasing transition's terminal state — since this level is normally almost empty, inversion is achieved much more easily, at lower pump power, enabling continuous-wave (CW) operation.
**Exam Tip:** "Why is a four-level laser more efficient than a three-level laser?" is a very common question — the key answer point: the four-level system's lower lasing level is NOT the ground state and stays nearly empty, so population inversion requires far less pump energy.
**Common Mistake:** Assuming any pumped system automatically lases — a pure two-level system fundamentally cannot sustain population inversion, no matter how hard it's pumped.
**Quick Check:** Q: Why can't a simple two-level system sustain laser action? A: Pumping simultaneously depletes the lower level and populates the upper one, so populations can at best equalize — true inversion (upper > lower) can never be sustained.

### 4. Characteristics of Laser Beams & Types of Lasers
**Overview:** Laser light is distinguished from ordinary light by: **Monochromaticity** (single, very narrow wavelength/frequency), **Coherence** (constant phase relationship, both temporal and spatial), **Directionality** (extremely low divergence/beam spread), and **High intensity/brightness** (energy concentrated in a narrow beam and spectral line).
**Types:**
- **Gas laser — He-Ne laser:** Uses a Helium-Neon gas mixture; Helium atoms are excited by an electric discharge and transfer energy to Neon atoms via collisions, producing lasing (commonly at 632.8 nm, red) between Neon energy levels — a four-level system, giving continuous-wave output.
- **Solid-state laser — Ruby laser:** Uses a ruby crystal (Cr³⁺ ions in Al₂O₃) optically pumped by a flash lamp; operates as a three-level system, typically producing pulsed output at 694.3 nm (red).
- **Semiconductor laser:** Uses a forward-biased p-n junction of a direct-bandgap material; lasing occurs via electron-hole recombination at the junction — compact, efficient, and widely used in everyday electronics (barcode scanners, optical fiber communication, laser pointers).
**Applications:** Optical fiber communication, medical surgery, industrial cutting/welding, barcode scanning, holography, military range-finding.
**Exam Tip:** A comparison table (He-Ne vs Ruby vs Semiconductor: type/system-level/active medium/output wavelength/CW-or-pulsed) is the most efficient way to answer "compare different types of lasers" — practice drawing this table from memory.
**Common Mistake:** Mixing up which laser is three-level (Ruby, pulsed) versus four-level (He-Ne, continuous) — this pairing is frequently tested.
**Quick Check:** Q: Is the Ruby laser typically pulsed or continuous-wave, and why? A: Pulsed — because it's a three-level system requiring very high pump power to achieve inversion, which is impractical to sustain continuously.
