/* ============================================================
   PHYSICS-I — SEMICONDUCTOR PHYSICS — FLASHCARDS
   Source: content/03-Physics-I-Semiconductor-Physics.md
   ============================================================ */

const PHY_FLASHCARDS = [
/* -------- Unit I -------- */
{ id:'phfc1', course:'physics', unit:1, topic:'p1-blackbody', category:'Definition', front:'What was the ultraviolet catastrophe?', back:'Classical (Rayleigh-Jeans) theory predicted infinite radiated energy at short wavelengths for a black body — contradicted by experiment; Planck fixed it by quantizing energy (E = hν).' },
{ id:'phfc2', course:'physics', unit:1, topic:'p1-photoelectric', category:'Formula', front:'Einstein\'s photoelectric equation?', back:'hν = φ + KEmax — φ is the work function; no emission if hν < φ, regardless of intensity. (1 eV = 1.6×10⁻¹⁹ J.)' },
{ id:'phfc3', course:'physics', unit:1, topic:'p1-photoelectric', category:'Exam Trap', front:'Does brighter light below threshold cause emission?', back:'No — intensity changes the NUMBER of photoelectrons, never the threshold; only frequency ≥ ν₀ (hν₀ = φ) causes emission.' },
{ id:'phfc4', course:'physics', unit:1, topic:'p1-debroglie', category:'Formula', front:'de Broglie wavelength?', back:'λ = h/p = h/(mv); when only KE is known, p = √(2mKE).' },
{ id:'phfc5', course:'physics', unit:1, topic:'p1-uncertainty', category:'Formula', front:'Heisenberg\'s uncertainty principle?', back:'Δx·Δp ≥ ℏ/2 (≈ h/4π) — a fundamental limit of nature, independent of instrument quality.' },
{ id:'phfc6', course:'physics', unit:1, topic:'p1-schrodinger', category:'Definition', front:'What is the physical meaning of ψ and |ψ|²?', back:'ψ itself has no direct physical meaning; |ψ|² (Born\'s interpretation) is the probability density. ψ must be single-valued, finite and continuous.' },
{ id:'phfc7', course:'physics', unit:1, topic:'p1-particle-box', category:'Formula', front:'Energy levels of a particle in a 1-D box?', back:'Eₙ = n²h²/(8mL²), n = 1, 2, 3, … — E₂ = 4E₁; n = 0 is forbidden (violates the uncertainty principle).' },

/* -------- Unit II -------- */
{ id:'phfc8', course:'physics', unit:2, topic:'p2-free-electron', category:'Exam Trap', front:'Two failures of the classical Drude model?', back:'(1) Fails to explain electronic specific heat of metals. (2) Wrong conductivity temperature-dependence at low temperatures. Sommerfeld\'s quantum theory fixes both.' },
{ id:'phfc9', course:'physics', unit:2, topic:'p2-kronig-penney', category:'Concept', front:'What causes energy bands in a crystal?', back:'The PERIODIC POTENTIAL of the regularly-spaced lattice atoms (Kronig-Penney model) — not electron-electron interactions.' },
{ id:'phfc10', course:'physics', unit:2, topic:'p2-ek-diagram', category:'Difference', front:'Direct vs indirect band gap?', back:'Direct (GaAs): CB min and VB max at the same k — photons emitted efficiently. Indirect (Si, Ge): different k — a phonon must carry momentum, so emission is inefficient.' },
{ id:'phfc11', course:'physics', unit:2, topic:'p2-material-classes', category:'Formula', front:'Band gaps of Si and Ge?', back:'Si = 1.1 eV, Ge = 0.7 eV — semiconductors ~0.7–1.5 eV; insulators > ~5 eV; metals overlap.' },
{ id:'phfc12', course:'physics', unit:2, topic:'p2-fermi-level', category:'Definition', front:'Define the Fermi level (exam-standard wording).', back:'"The energy at which the probability of occupation is exactly ½, at any given temperature" — a statistical reference, not necessarily a real occupied state.' },
{ id:'phfc13', course:'physics', unit:2, topic:'p2-fermi-level', category:'Formula', front:'Fermi-Dirac distribution?', back:'f(E) = 1/[1 + e^((E−E_F)/kT)] — occupation probability of a state at energy E.' },
{ id:'phfc14', course:'physics', unit:2, topic:'p2-effective-mass-phonons', category:'Definition', front:'What are phonons?', back:'Quantized units of lattice vibration — the vibrational analogue of a photon; they carry thermal energy and momentum (vital for indirect-gap transitions).' },

/* -------- Unit III -------- */
{ id:'phfc15', course:'physics', unit:3, topic:'p3-intrinsic-extrinsic', category:'Difference', front:'Donor vs acceptor doping?', back:'Donor = pentavalent (P, As) → extra electron → n-type (electrons majority). Acceptor = trivalent (B, Ga) → hole → p-type (holes majority).' },
{ id:'phfc16', course:'physics', unit:3, topic:'p3-fermi-dependence', category:'Concept', front:'Fermi level position: intrinsic vs n-type vs p-type?', back:'Intrinsic ≈ mid-gap; n-type shifted UP toward CB; p-type shifted DOWN toward VB; heat pushes doped E_F back toward mid-gap.' },
{ id:'phfc17', course:'physics', unit:3, topic:'p3-transport', category:'Formula', front:'Einstein relation?', back:'D/μ = kT/q — links diffusion coefficient D and mobility μ.' },
{ id:'phfc18', course:'physics', unit:3, topic:'p3-transport', category:'Difference', front:'Drift vs diffusion current?', back:'Drift: driven by an applied electric field. Diffusion: driven by a concentration gradient — no field needed.' },
{ id:'phfc19', course:'physics', unit:3, topic:'p3-pn-junction', category:'Concept', front:'What forms at a p-n interface?', back:'Depletion region (no mobile carriers) + built-in potential barrier opposing further diffusion — the basis of diode action.' },
{ id:'phfc20', course:'physics', unit:3, topic:'p3-junctions-metal', category:'Difference', front:'Ohmic vs Schottky junction?', back:'Ohmic: non-rectifying, linear I-V, used for contacts. Schottky: rectifying like a diode, faster switching (no minority-carrier storage).' },
{ id:'phfc21', course:'physics', unit:3, topic:'p3-photoconductivity', category:'Difference', front:'Photoconductivity vs photovoltaic effect?', back:'Photoconductivity: light INCREASES conductivity (resistance drops). Photovoltaic: light directly GENERATES voltage/current across an unbiased junction.' },
{ id:'phfc22', course:'physics', unit:3, topic:'p3-optoelectronic', category:'Memory Trick', front:'Biasing of LDR, photodiode, solar cell, LED?', back:'LDR: bulk, no junction; photodiode: REVERSE bias; solar cell: UNBIASED; LED: FORWARD bias.' },

/* -------- Unit IV -------- */
{ id:'phfc23', course:'physics', unit:4, topic:'p4-einstein-coefficients', category:'Difference', front:'Spontaneous vs stimulated emission?', back:'Spontaneous: random drop, random phase/direction (ordinary light). Stimulated: triggered by a photon — output photon is COHERENT (same phase, frequency, direction).' },
{ id:'phfc24', course:'physics', unit:4, topic:'p4-population-inversion', category:'Definition', front:'Define population inversion and pumping.', back:'Inversion: more atoms in a HIGHER state than a lower one (never thermal). Pumping: the external optical/electrical process maintaining it. Also needs an optical cavity.' },
{ id:'phfc25', course:'physics', unit:4, topic:'p4-level-systems', category:'Exam Trap', front:'Why can\'t a two-level laser work?', back:'Pumping depletes the lower level while filling the upper — populations at best equalize; true inversion is never sustainable.' },
{ id:'phfc26', course:'physics', unit:4, topic:'p4-level-systems', category:'Concept', front:'Why is a four-level laser more efficient than three-level?', back:'Its lower lasing level is NOT the ground state and stays nearly empty — inversion needs far less pump energy → continuous-wave operation.' },
{ id:'phfc27', course:'physics', unit:4, topic:'p4-characteristics', category:'Definition', front:'Four characteristics of laser light?', back:'Monochromaticity (single wavelength), coherence (constant phase), directionality (low divergence), high intensity (narrow beam).' },
{ id:'phfc28', course:'physics', unit:4, topic:'p4-he-ne-ruby', category:'Memory Trick', front:'He-Ne vs Ruby: level system, output, wavelength?', back:'He-Ne: four-level, continuous, 632.8 nm (gas). Ruby: three-level, pulsed, 694.3 nm (solid-state, flash-lamp pumped).' },
{ id:'phfc29', course:'physics', unit:4, topic:'p4-semiconductor-laser', category:'Concept', front:'Why must a semiconductor laser be direct-gap?', back:'Recombination must emit photons efficiently; indirect-gap Si needs a phonon and radiates poorly. Example material: GaAs.' }
];
