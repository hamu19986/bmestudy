/* ============================================================
   FORMULA SHEET — organized by section
   ============================================================ */

const FORMULA_SHEET = [
  {
    section: 'Machine Tools',
    items: [
      { formula: 'V = πDN / 1000', meaning: 'Cutting speed. D = diameter (mm), N = rpm', units: 'V in m/min', mistake: 'Forgetting the /1000 to convert mm·rpm into metres.' },
      { formula: 'T = L / (f·N)', meaning: 'Machining time. L = length of cut (mm), f = feed (mm/rev), N = rpm', units: 'T in minutes', mistake: 'Using feed in mm/min instead of mm/rev without converting.' },
      { formula: 'r = t1 / t2', meaning: 'Chip thickness ratio in orthogonal cutting. t1 = uncut chip thickness, t2 = actual chip thickness', units: 'dimensionless, always < 1', mistake: 'Inverting the ratio (writing t2/t1).' }
    ]
  },
  {
    section: 'Thermodynamics',
    items: [
      { formula: 'δQ = dU + δW', meaning: 'First Law for a closed, non-cyclic process', units: 'All terms in Joules (or kJ)', mistake: 'Forgetting the sign convention: heat IN and work done BY the system are positive.' },
      { formula: 'W = ∫ p dV', meaning: 'General displacement (pdV) work', units: 'J, if p in Pa and V in m³', mistake: 'Applying it to an irreversible/non-quasi-static process where it isn\'t strictly valid.' },
      { formula: 'W = p₁V₁ ln(V₂/V₁)', meaning: 'Isothermal work for an ideal gas', units: 'J', mistake: 'Using log base 10 instead of natural log (ln).' },
      { formula: 'W = p(V₂ − V₁)', meaning: 'Isobaric (constant pressure) work', units: 'J', mistake: 'Forgetting work is negative when V₂ < V₁ (compression).' },
      { formula: 'pVⁿ = constant', meaning: 'Polytropic process law', units: '—', mistake: 'Forgetting n = 1 gives isothermal, not n = 0.' },
      { formula: 'H = U + pV,  h = u + pv', meaning: 'Enthalpy (total and specific)', units: 'H, U in J or kJ; h, u in J/kg or kJ/kg', mistake: 'Treating enthalpy as only relevant to closed systems — it\'s most useful for OPEN/flow systems.' },
      { formula: 'Δh = Cp·ΔT,  Δu = Cv·ΔT', meaning: 'Change in enthalpy / internal energy of an ideal gas', units: 'Depends on whether Cp, Cv are specific (per kg) or total', mistake: 'Mixing up Cp and Cv.' },
      { formula: 'dS = δQ_rev / T', meaning: 'Entropy change (reversible process)', units: 'J/K or kJ/(kg·K)', mistake: 'Forgetting to convert T to Kelvin.' },
      { formula: 'η = W_net/Q_in = 1 − Q_reject/Q_supplied', meaning: 'Heat engine thermal efficiency', units: 'dimensionless (often as %)', mistake: 'Confusing efficiency with COP — efficiency is always < 1; COP can exceed 1.' }
    ]
  },
  {
    section: 'Refrigeration & Hydraulics',
    items: [
      { formula: '1 TR ≈ 3.5 kW ≈ 210 kJ/min ≈ 12,000 Btu/hr', meaning: 'Ton of Refrigeration — standard reference conversion', units: '—', mistake: 'Using an imprecise rounded value inconsistently within one numerical.' },
      { formula: 'COP(refrigerator) = Q_L / W', meaning: 'Coefficient of performance, refrigerator', units: 'dimensionless', mistake: 'Using Q_H (heat rejected) instead of Q_L (heat absorbed) in the numerator.' },
      { formula: 'COP(heat pump) = Q_H / W = COP(ref.) + 1', meaning: 'COP of the same cycle used as a heat pump', units: 'dimensionless', mistake: 'Forgetting the "+1" relationship.' },
      { formula: 'Refrigerating effect = h1 − h4', meaning: 'Enthalpy difference across the evaporator (VCR cycle)', units: 'kJ/kg', mistake: 'Reversing the subtraction order.' },
      { formula: 'Work of compression = h2 − h1', meaning: 'Enthalpy rise across the compressor', units: 'kJ/kg', mistake: 'Using condenser/evaporator enthalpies instead of compressor inlet/outlet.' },
      { formula: 'V = Cv √(2gH)', meaning: 'Jet velocity from a Pelton turbine nozzle. Cv = velocity coefficient, H = net head', units: 'V in m/s, H in m, g = 9.81 m/s²', mistake: 'Omitting Cv and using the ideal (Cv=1) formula when a value is given.' }
    ]
  },
  {
    section: 'Power Transmission',
    items: [
      { formula: 'Velocity ratio = N2/N1 = D1/D2', meaning: 'Belt/gear drive speed ratio. 1 = driver, 2 = driven', units: 'dimensionless', mistake: 'Inverting driver/driven subscripts.' }
    ]
  },
  {
    section: 'Stress & Strain',
    items: [
      { formula: 'σ = P / A', meaning: 'Direct (tensile/compressive) stress', units: 'N/mm² (MPa)', mistake: 'Leaving the answer in plain N instead of stress units.' },
      { formula: 'ε = δL / L', meaning: 'Linear strain', units: 'dimensionless', mistake: 'Writing strain with units like "MPa" — it never has units.' },
      { formula: 'σ = E · ε (Hooke\'s Law)', meaning: 'Valid only within the elastic limit; E = Young\'s modulus', units: 'E in N/mm² or GPa', mistake: 'Applying Hooke\'s Law beyond the elastic limit.' },
      { formula: 'μ = Lateral strain / Longitudinal strain', meaning: 'Poisson\'s ratio', units: 'dimensionless, ~0.25–0.35 for metals', mistake: 'Forgetting the negative sign convention some textbooks use (lateral strain is a contraction).' },
      { formula: 'E = 2G(1 + μ)', meaning: 'Relation between E, G (rigidity modulus) and μ', units: '—', mistake: 'Confusing G (rigidity) with K (bulk modulus).' },
      { formula: 'E = 3K(1 − 2μ)', meaning: 'Relation between E, K (bulk modulus) and μ', units: '—', mistake: 'Sign error: it is (1 − 2μ), not (1 + 2μ).' },
      { formula: 'E = 9KG / (3K + G)', meaning: 'Relation between all three elastic constants directly', units: '—', mistake: 'Mixing up numerator/denominator when rearranging for K or G.' }
    ]
  }
];
