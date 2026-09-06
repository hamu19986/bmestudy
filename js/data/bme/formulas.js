/* ============================================================
   FORMULA SHEET — organized by section
   ============================================================ */

const FORMULA_SHEET = [
  {
    section: 'Machine Tools',
    items: [
      { formula: 'V = πDN / 1000', meaning: 'Cutting speed. D = diameter (mm), N = rpm', units: 'V in m/min', mistake: 'Forgetting the /1000 to convert mm·rpm into metres.' },
      { formula: 'T = L / (f·N)', meaning: 'Machining time. L = length of cut (mm), f = feed (mm/rev), N = rpm', units: 'T in minutes', mistake: 'Using feed in mm/min instead of mm/rev without converting.' },
      { formula: 'r = t1 / t2', meaning: 'Chip thickness ratio in orthogonal cutting. t1 = uncut chip thickness, t2 = actual chip thickness', units: 'dimensionless, always < 1', mistake: 'Inverting the ratio (writing t2/t1).' },
      { formula: 'N = 1000V / (πD)', meaning: 'Spindle speed needed for a required cutting speed. V = cutting speed (m/min), D = diameter (mm)', units: 'N in rpm', mistake: 'Mixing up the rearrangement — doubling D halves N; the workpiece must slow down as it gets larger.' },
      { formula: 'MRR = d · f · V × 1000', meaning: 'Material removal rate in turning. d = depth of cut (mm), f = feed (mm/rev), V = cutting speed (m/min)', units: 'MRR in mm³/min', mistake: 'Forgetting the ×1000 factor when V is in m/min but d and f are in mm.' },
      { formula: 'MRR (drilling) = (πD²/4) · f · N', meaning: 'Material removal rate in drilling. D = hole diameter (mm), f = feed (mm/rev), N = rpm', units: 'MRR in mm³/min', mistake: 'Using the hole circumference (πD) instead of the hole AREA (πD²/4).' }
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
      { formula: 'η = W_net/Q_in = 1 − Q_reject/Q_supplied', meaning: 'Heat engine thermal efficiency', units: 'dimensionless (often as %)', mistake: 'Confusing efficiency with COP — efficiency is always < 1; COP can exceed 1.' },
      { formula: 'η(Carnot) = 1 − T₂/T₁', meaning: 'Maximum possible efficiency of any heat engine operating between two reservoirs', units: 'dimensionless — T₁ and T₂ in KELVIN', mistake: 'Using Celsius temperatures, or swapping the hot/cold reservoirs in the ratio.' },
      { formula: 'Cp − Cv = R', meaning: "Mayer's relation for an ideal gas: difference between specific heats equals the gas constant", units: 'J/(kg·K) for specific heats (per kg)', mistake: 'Using total (not per-unit-mass) Cp and Cv and comparing them with R for a specific mass.' },
      { formula: 'γ = Cp / Cv', meaning: 'Ratio of specific heats (adiabatic index)', units: 'dimensionless — ≈ 1.4 for air', mistake: 'Confusing γ with the polytropic index n: γ applies to adiabatic processes only.' },
      { formula: 'W = (p₁V₁ − p₂V₂) / (n − 1)', meaning: 'Work done in a polytropic process', units: 'J, with p in Pa and V in m³', mistake: 'Forgetting the (n − 1) in the denominator, or sign errors when n < 1.' },
      { formula: 'p₁V₁^γ = p₂V₂^γ', meaning: 'Pressure–volume relation for a reversible adiabatic (isentropic) process of an ideal gas', units: '—', mistake: 'Using n = 1 (isothermal) instead of γ when the process is stated as adiabatic.' }
    ]
  },
  {
    section: 'Refrigeration & A/C',
    items: [
      { formula: '1 TR ≈ 3.5 kW ≈ 210 kJ/min ≈ 12,000 Btu/hr', meaning: 'Ton of Refrigeration — standard reference conversion', units: '—', mistake: 'Using an imprecise rounded value inconsistently within one numerical.' },
      { formula: 'COP(refrigerator) = Q_L / W', meaning: 'Coefficient of performance, refrigerator', units: 'dimensionless', mistake: 'Using Q_H (heat rejected) instead of Q_L (heat absorbed) in the numerator.' },
      { formula: 'COP(heat pump) = Q_H / W = COP(ref.) + 1', meaning: 'COP of the same cycle used as a heat pump', units: 'dimensionless', mistake: 'Forgetting the "+1" relationship.' },
      { formula: 'Refrigerating effect = h1 − h4', meaning: 'Enthalpy difference across the evaporator (VCR cycle)', units: 'kJ/kg', mistake: 'Reversing the subtraction order.' },
      { formula: 'Work of compression = h2 − h1', meaning: 'Enthalpy rise across the compressor', units: 'kJ/kg', mistake: 'Using condenser/evaporator enthalpies instead of compressor inlet/outlet.' },
      { formula: 'COP(Carnot refrigerator) = T_L / (T_H − T_L)', meaning: 'Best possible COP for a refrigerator working between absolute temperatures T_L (cold space) and T_H (warm space)', units: 'dimensionless — temperatures in KELVIN', mistake: 'Using Celsius, or putting the temperature DIFFERENCE in the numerator.' },
      { formula: 'Q_H = Q_L + W', meaning: 'Energy balance of a refrigeration cycle: heat rejected = heat absorbed + work input', units: 'All terms in the same energy units', mistake: 'Writing Q_H = Q_L − W and getting impossible numbers.' }
    ]
  },
  {
    section: 'Hydraulics — Turbines & Pumps',
    items: [
      { formula: 'V = Cv √(2gH)', meaning: 'Jet velocity from a Pelton turbine nozzle. Cv = velocity coefficient of the nozzle, H = net head', units: 'V in m/s, H in m, g = 9.81 m/s²', mistake: 'Omitting Cv and using the ideal (Cv=1) formula when a value is given.' },
      { formula: 'P = ρgQH / 1000', meaning: 'Hydraulic (water) power available at a head H. ρ = density of water (≈1000 kg/m³), Q = discharge (m³/s), H = head (m)', units: 'P in kW (÷1000 converts W to kW)', mistake: 'Leaving the answer in watts, or using head in metres but discharge in litres/second without converting.' },
      { formula: 'P_shaft = η_o · (ρgQH / 1000)', meaning: 'Actual shaft power output of a turbine = hydraulic power × overall efficiency', units: 'kW', mistake: 'Forgetting η_o and quoting the ideal water power as the turbine output.' },
      { formula: 'P_input (pump) = ρgQH / (1000·η)', meaning: 'Power required to drive a pump delivering Q at head H with efficiency η', units: 'kW', mistake: 'Multiplying instead of dividing by efficiency — the input is always MORE than the water power.' },
      { formula: 'N_s = N√P / H^(5/4)', meaning: 'Specific speed — an index used to select the right turbine/pump type (Pelton, Francis, Kaplan) for a site', units: 'N in rpm, P in kW, H in m', mistake: 'Mixing up the exponent on H (it is H^(5/4), not H^1) or forgetting to take the square root of P.' }
    ]
  },
  {
    section: 'Power Transmission',
    items: [
      { formula: 'Velocity ratio = N2/N1 = D1/D2', meaning: 'Belt/gear drive speed ratio. 1 = driver, 2 = driven', units: 'dimensionless', mistake: 'Inverting driver/driven subscripts.' },
      { formula: 'T₁/T₂ = e^(μθ)', meaning: 'Belt tension ratio. T₁ = tight-side tension, T₂ = slack-side tension, μ = friction coefficient, θ = angle of wrap (RADIANS)', units: 'dimensionless', mistake: 'Using the wrap angle in degrees instead of radians, or swapping T₁ and T₂.' },
      { formula: 'Power = (T₁ − T₂) · v', meaning: 'Power transmitted by a belt drive. v = belt speed (m/s)', units: 'P in watts (T in N, v in m/s)', mistake: 'Using the total tension (T₁ + T₂) instead of the difference, which is what actually drives the pulley.' },
      { formula: 'N2/N1 = (D1/D2)(1 − s)', meaning: 'Velocity ratio of a belt drive WITH slip. s = slip fraction (e.g. 0.02 for 2%)', units: 'dimensionless', mistake: 'Adding slip instead of subtracting, or forgetting slip lowers the driven speed.' },
      { formula: 'Gear ratio: N1/N2 = T2/T1', meaning: 'Gear speed ratio from tooth numbers. T = number of teeth', units: 'dimensionless', mistake: 'Thinking more teeth on the driven gear means faster — it means SLOWER.' }
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
      { formula: 'E = 9KG / (3K + G)', meaning: 'Relation between all three elastic constants directly', units: '—', mistake: 'Mixing up numerator/denominator when rearranging for K or G.' },
      { formula: 'τ = G · γ', meaning: "Hooke's Law in shear. τ = shear stress, G = modulus of rigidity, γ = shear strain", units: 'τ in N/mm² (MPa)', mistake: 'Using Young\'s modulus E instead of the rigidity modulus G for a shear problem.' },
      { formula: 'γ = δx / h = θ (radians)', meaning: 'Shear strain — lateral displacement per unit height, equal to the angular distortion', units: 'dimensionless (angle in radians)', mistake: 'Writing shear strain with units — it is a ratio, exactly like linear strain.' },
      { formula: 'ε_vol = ΔV / V', meaning: 'Volumetric strain — fractional change in volume under hydrostatic pressure', units: 'dimensionless', mistake: 'Using a linear dimension change instead of the VOLUME change.' },
      { formula: 'ΔV/V = (σ/E)(1 − 2μ)', meaning: 'Volumetric strain produced by a uniaxial tensile stress σ (depends on Poisson\'s ratio)', units: 'dimensionless', mistake: 'Using (1 + 2μ) instead of (1 − 2μ) — a stretched bar usually gets THINNER, not fatter, so its volume change is smaller than linear strain suggests.' },
      { formula: 'Modulus of resilience = σ_y² / (2E)', meaning: 'Maximum elastic strain energy stored per unit volume, up to the yield stress σ_y', units: 'J/m³', mistake: 'Using ultimate stress instead of yield stress — resilience ends where elasticity ends.' }
    ]
  }
];
