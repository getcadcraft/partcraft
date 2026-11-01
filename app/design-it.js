/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — results and errors are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * design-it.js — "describe it, get it" (0.8 round 2, EG.75): pick a generator for a need, size it from the loads and the material,
 * stress-check it by hand formulas and build the checked part. DOM-free; the assistant tools in agents.js (and the headless tools)
 * are thin wrappers over these functions (AI-CONNECT-SPEC § 2.6). No trained model: a need is matched by words and numbers (rule 35).
 *
 *   GENERATORS · listGenerators() · findGenerators({ text, load }) → ranked picks
 *   forceN(v, unit) · lengthMm(v, unit) · materialFor(text) → a materials.js entry
 *   estimate(spec) → { generator, material, dims, checks, ok, safetyFactor, massG, steps[], notes[] }   (nothing is built)
 *   buildPart(est) → a part (part.js) with the sketch, extrude and holes as the Features would make them
 *
 * Generator "bracket": an L shelf bracket (shelf L × t, wall flange t × H, width b, two bolts in the flange) carrying a downward
 * point force F at the tip, a distance `arm` from the wall face. Textbook maths (Timoshenko, Strength of Materials; Shigley's bolt
 * joint simplifications, rotation about the flange's bottom edge):
 *   M = F·arm · σ = 6M/(b t²) · τ = 1.5 F/(b t) · δ = 4 F arm³/(E b t³)
 *   bolt i at height y_i above the pivot: T_i = M·y_i/Σ y_j², shear V = F/n; combined (T/Tall)² + (V/Vall)² ≤ 1,
 *   Tall = As·Sp/SF, Vall = 0.577·As·Sp/SF (class 8.8: Sp 600 MPa).
 * Generator "shaft": a solid round shaft in bending and torque, von Mises σ' = 32/(π d³)·√(M² + ¾T²) ≤ Sy/SF.
 * NOT checked, and said in every result: stress concentration at the inner corner and the bolt holes, the flange's own bending
 * between the bolts, fatigue, creep (plastics), the wall's strength, local bearing. A real FE check is Simulation's.
 */
import { MATERIALS, materialById } from './materials.js';
import { newPart, addFeature } from './part.js';
import * as S from './sketch.js';

export class DesignError extends Error {
  constructor(code, message, next = []) { super(message); this.code = code; this.next = next; }
}

export const FORCE_UNITS = { N: 1, kN: 1000, lbf: 4.4482216152605, lb: 4.4482216152605, kgf: 9.80665 };
export const LENGTH_UNITS = { mm: 1, cm: 10, m: 1000, in: 25.4, inch: 25.4, ft: 304.8 };
export const TORQUE_UNITS = { 'N*m': 1000, 'N*mm': 1, 'lbf*in': 112.98482902, 'lbf*ft': 1355.8179483 };   // → N·mm

export function forceN(v, unit = 'N') {
  const k = FORCE_UNITS[unit];
  if (!k) throw new DesignError('invalid_argument', 'Unknown force unit "' + unit + '".', ['Use N, kN, lbf (pounds) or kgf.']);
  return v * k;
}
export function lengthMm(v, unit = 'mm') {
  const k = LENGTH_UNITS[unit];
  if (!k) throw new DesignError('invalid_argument', 'Unknown length unit "' + unit + '".', ['Use mm, cm, m, in or ft.']);
  return v * k;
}

const MAT_WORDS = [
  [/al(?:uminium|uminum)?|6061/i, 'al6061'], [/stainless|304|inox/i, 'ss304'], [/titanium|ti-?6|ti64/i, 'ti64'],
  [/steel|iron/i, 'steel'], [/\babs\b/i, 'abs'], [/\bpla\b/i, 'pla'], [/nylon|pa-?6|pa66/i, 'nylon'],
];
const MAT_LABEL = { steel: 'structural steel', ss304: 'stainless steel 304', al6061: 'aluminium 6061-T6', ti64: 'titanium Ti-6Al-4V', abs: 'ABS', pla: 'PLA', nylon: 'nylon (PA)' };
const PLASTIC = new Set(['abs', 'pla', 'nylon']);

/** "aluminium", "6061", "stainless steel" … → a materials.js entry (the table's yield and modulus are the figures used). */
export function materialFor(text) {
  const s = String(text ?? '').trim();
  const direct = materialById(s.toLowerCase());
  if (direct) return direct;
  for (const [re, id] of MAT_WORDS) if (re.test(s)) return materialById(id);
  throw new DesignError('invalid_argument', 'There is no material "' + s + '" in the table.', ['Use one of: ' + MATERIALS.map((m) => m.id).join(', ') + '.']);
}

// ------------------------------------------------------------------------------------------------ catalog

export const GENERATORS = [
  { id: 'bracket', kind: 'sizer', title: 'L shelf bracket', loads: ['point-force-at-distance', 'cantilever', 'shelf', 'bracket', 'hold', 'hang', 'support'],
    words: ['bracket', 'shelf', 'hold', 'holding', 'hang', 'hanging', 'support', 'mount', 'cantilever', 'wall', 'lb', 'pounds', 'lbf', 'newton'],
    needs: 'a force (force) and its distance from the wall (arm), a material; optional width, process (machined, printed, any), max_deflection, safety.',
    makes: 'A wall flange with two bolt holes and a shelf, one solid.' },
  { id: 'shaft', kind: 'sizer', title: 'Round shaft', loads: ['torque', 'bending-and-torque', 'shaft', 'axle'],
    words: ['shaft', 'axle', 'torque', 'rotating', 'drive', 'spindle', 'pin', 'transmit'],
    needs: 'a torque (torque) and/or a bending moment (moment), a length, a material; optional safety.',
    makes: 'A solid round shaft along the Y axis.' },
  { id: 'heat-exchanger', kind: 'script', title: 'Gyroid heat exchanger', loads: ['heat-duty'], words: ['heat', 'exchanger', 'cooling', 'hot', 'cold', 'duty', 'gyroid', 'kw'],
    needs: 'The generator\'s own inputs (duty, temperatures, flows, pressure) in a Generated feature.', makes: 'A gyroid core sized by the effectiveness-NTU method (QuantScope workspace).' },
  { id: 'manifold', kind: 'script', title: 'Distribution manifold', loads: ['flow-distribution'], words: ['manifold', 'distribution', 'flow', 'ports', 'header', 'fluid'],
    needs: 'The generator\'s own inputs in a Generated feature.', makes: 'A manifold body (QuantScope workspace).' },
  { id: 'lattice-beam', kind: 'script', title: 'Graded lattice beam (half MBB)', loads: ['stiffness-per-mass', 'topology'], words: ['lattice', 'lightweight', 'topology', 'optimised', 'optimized', 'stiffness', 'beam', 'light'],
    needs: 'The generator\'s own inputs in a Generated feature.', makes: 'A topology-optimised, lattice-filled beam (QuantScope workspace).' },
  { id: 'gyroid-block', kind: 'script', title: 'Gyroid block', loads: ['porous'], words: ['gyroid', 'porous', 'tpms', 'filter', 'block', 'infill'],
    needs: 'The generator\'s own inputs in a Generated feature.', makes: 'A gyroid block (QuantScope workspace).' },
];

export const listGenerators = () => GENERATORS.map((g) => ({ id: g.id, kind: g.kind, title: g.title, needs: g.needs, makes: g.makes }));

/** Words and numbers, no model: score each generator by the words of the need. `load` is the hint when the caller knows it. */
export function findGenerators({ text = '', load = '' } = {}) {
  const words = new Set(String(text).toLowerCase().match(/[a-z0-9]+/g) || []);
  const rows = GENERATORS.map((g) => {
    let score = 0; const why = [];
    for (const w of g.words) if (words.has(w)) { score += 1; why.push(w); }
    if (load && g.loads.includes(String(load))) { score += 5; why.push('load: ' + load); }
    return { id: g.id, kind: g.kind, title: g.title, score, matched: why.slice(0, 8), needs: g.needs };
  }).filter((r) => r.score > 0).sort((a, b) => b.score - a.score);
  return rows;
}

// ------------------------------------------------------------------------------------------------ rounding and tables

export const STOCK_T = [2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 25, 32];             // mm, bar and plate thicknesses
export const SHAFT_D = [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 30, 32, 35, 38, 40, 45, 50, 55, 60, 70, 80, 90, 100];   // mm
export const BOLTS = [   // ISO metric coarse: stress area As (mm²), medium clearance hole (mm)
  { size: 'M4', d: 4, as: 8.78, hole: 4.5 }, { size: 'M5', d: 5, as: 14.2, hole: 5.5 }, { size: 'M6', d: 6, as: 20.1, hole: 6.6 },
  { size: 'M8', d: 8, as: 36.6, hole: 9 }, { size: 'M10', d: 10, as: 58, hole: 11 }, { size: 'M12', d: 12, as: 84.3, hole: 13.5 },
];
export const BOLT_PROOF = 600;   // class 8.8, MPa

const PROCESS = {
  machined: { tmin: 3, round: (t) => STOCK_T.find((s) => s >= t - 1e-9) ?? Math.ceil(t) },
  printed: { tmin: 2.5, round: (t) => Math.ceil(t * 2 - 1e-9) / 2 },
  any: { tmin: 1, round: (t) => Math.ceil(t * 2 - 1e-9) / 2 },
};
const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const fin = (v, what) => { if (!(typeof v === 'number' && Number.isFinite(v) && v > 0)) throw new DesignError('invalid_argument', what + ' must be a number above zero.'); return v; };

function safetyOf(mat, given) {
  if (given !== undefined && given !== null) return fin(given, 'safety');
  return PLASTIC.has(mat.id) ? 3 : 2;
}

// ------------------------------------------------------------------------------------------------ bracket

function boltLayout(dims) {
  const { t, a } = dims;
  const bolt = dims.bolt;
  const yb = r2(t + 1.5 * bolt.hole);
  const s = Math.min(100, Math.max(30, Math.round(a / 2 / 5) * 5));
  const yt = r2(yb + s);
  return { yb, yt, H: r2(yt + 1.5 * bolt.hole), spacing: s };
}

/** The checks of a bracket as dimensioned (dims: t, b, a (arm = shelf length), bolt, H, ys). Pure hand formulas. */
export function checkBracket(dims, load, mat, safety) {
  const { t, b, a } = dims, F = load.force_N, M = F * a;
  const sigma = 6 * M / (b * t * t), tau = 1.5 * F / (b * t);
  const I = b * t ** 3 / 12, delta = F * a ** 3 / (3 * mat.E * I);
  const allow = mat.yield / safety;
  const rows = [
    { id: 'shelf-bending', what: 'Bending stress at the wall face (σ = 6 F a / (b t²))', value: r2(sigma), limit: r2(allow), unit: 'MPa', sf: r2(mat.yield / sigma), ok: sigma <= allow + 1e-9 },
    { id: 'shelf-shear', what: 'Shear stress in the shelf (τ = 1.5 F / (b t), limit 0.577 Sy / SF)', value: r2(tau), limit: r2(0.577 * allow), unit: 'MPa', sf: r2(0.577 * mat.yield / tau), ok: tau <= 0.577 * allow + 1e-9 },
  ];
  const dl = load.max_deflection_mm;
  rows.push({ id: 'tip-deflection', what: 'Tip deflection of the shelf (δ = F a³ / (3 E I); the flange\'s own rotation is not included)', value: r2(delta), limit: dl ? r2(dl) : null, unit: 'mm', sf: dl ? r2(dl / delta) : null, ok: dl ? delta <= dl + 1e-9 : true });
  // bolts: rotation about the flange's bottom edge; force proportional to height above it
  const ys = [dims.ys[0], dims.ys[1]], sum2 = ys[0] ** 2 + ys[1] ** 2;
  const Ttop = M * ys[1] / sum2, V = F / 2;
  const Tall = dims.bolt.as * BOLT_PROOF / safety, Vall = 0.577 * dims.bolt.as * BOLT_PROOF / safety;
  const comb = (Ttop / Tall) ** 2 + (V / Vall) ** 2;
  rows.push({ id: 'bolt-tension', what: 'Tension in the top bolt (T = M y / Σy²; ' + dims.bolt.size + ' class 8.8, Tall = As Sp / SF)', value: r2(Ttop), limit: r2(Tall), unit: 'N', sf: r2(Tall * safety / Ttop), ok: Ttop <= Tall + 1e-9 });
  rows.push({ id: 'bolt-combined', what: 'Tension and shear together ((T/Tall)² + (V/Vall)² ≤ 1)', value: r3(comb), limit: 1, unit: '', sf: r2(1 / Math.sqrt(comb || 1e-9)), ok: comb <= 1 + 1e-9 });
  return { rows, ok: rows.every((r) => r.ok), safetyFactor: r2(Math.min(...rows.filter((r) => r.sf !== null && r.id !== 'tip-deflection' && r.id !== 'bolt-combined').map((r) => r.sf))), bolt: { top_N: r2(Ttop), shear_N: r2(V) } };
}

export function estimateBracket(spec) {
  const mat = materialFor(spec.material);
  const F = fin(spec.force_N, 'The force'), a = fin(spec.arm_mm, 'The arm');
  const safety = safetyOf(mat, spec.safety);
  const pr = PROCESS[spec.process || 'machined'];
  if (!pr) throw new DesignError('invalid_argument', 'Unknown process "' + spec.process + '".', ['Use machined, printed or any.']);
  const M = F * a;
  const b = spec.width_mm ? fin(spec.width_mm, 'The width') : Math.max(20, Math.ceil(0.15 * a / 5) * 5);
  const steps = [];
  steps.push('Moment at the wall: M = F·a = ' + r2(F) + ' N × ' + r2(a) + ' mm = ' + r2(M) + ' N·mm.');
  steps.push('Allowable stress: Sy / SF = ' + mat.yield + ' / ' + safety + ' = ' + r2(mat.yield / safety) + ' MPa (' + MAT_LABEL[mat.id] + ').');
  const tStrength = Math.sqrt(6 * M / (b * mat.yield / safety));
  steps.push('Thickness for strength: t = √(6 M / (b σ_allow)) = √(6 × ' + r2(M) + ' / (' + b + ' × ' + r2(mat.yield / safety) + ')) = ' + r2(tStrength) + ' mm at width b = ' + b + ' mm.');
  let t = tStrength;
  const dl = spec.max_deflection_mm;
  if (dl) {
    const tStiff = Math.cbrt(4 * F * a ** 3 / (mat.E * b * fin(dl, 'max_deflection')));
    steps.push('Thickness for the tip deflection limit ' + dl + ' mm: t = ∛(4 F a³ / (E b δ)) = ' + r2(tStiff) + ' mm.');
    t = Math.max(t, tStiff);
  }
  t = Math.max(t, pr.tmin);
  const tr = spec.thickness_mm ? fin(spec.thickness_mm, 'The thickness') : pr.round(t);
  if (spec.thickness_mm) steps.push('Thickness given: t = ' + tr + ' mm (checked, not sized).');
  else steps.push('Rounded up for the ' + (spec.process || 'machined') + ' process (' + (spec.process === 'printed' ? '0.5 mm steps, 2.5 mm minimum' : spec.process === 'any' ? '0.5 mm steps' : 'stock thicknesses, 3 mm minimum') + '): t = ' + tr + ' mm.');
  // the smallest bolt that carries the load
  const dims = { t: tr, b, a, L: a };
  let chosen = null;
  for (const bolt of BOLTS) {
    if (bolt.d < 5) continue;   // M5 is the smallest a bracket this size is given
    const lay = boltLayout({ t: tr, a, bolt });
    const trial = { ...dims, bolt, H: lay.H, ys: [lay.yb, lay.yt], spacing: lay.spacing };
    const c = checkBracket(trial, { force_N: F, max_deflection_mm: dl }, mat, safety);
    if (c.rows.filter((r) => r.id.startsWith('bolt')).every((r) => r.ok)) { chosen = { trial, c }; break; }
  }
  if (!chosen) throw new DesignError('failed', 'No bolt up to M12 carries this load with two bolts.', ['Lower the force or the arm.', 'Ask for a wider mounting (three or more bolts is not built).']);
  const { trial, c } = chosen;
  steps.push('Two ' + trial.bolt.size + ' class 8.8 bolts ' + trial.spacing + ' mm apart in the flange (top bolt tension ' + c.bolt.top_N + ' N, shear ' + c.bolt.shear_N + ' N each).');
  const volume = trial.b * (trial.L * trial.t + (trial.H - trial.t) * trial.t) - 2 * Math.PI / 4 * trial.bolt.hole ** 2 * trial.t;
  const massG = volume * mat.density * 1e-6;   // mm³ × kg/m³ → g  (1 mm³ = 1e-9 m³; kg → g ×1e3)
  return {
    generator: 'bracket', process: spec.process || 'machined',
    material: { id: mat.id, name: MAT_LABEL[mat.id], E_MPa: mat.E, yield_MPa: mat.yield, density_kg_m3: mat.density },
    load: { force_N: r2(F), arm_mm: r2(a), moment_Nmm: r2(M), safety },
    dims: { thickness_mm: trial.t, width_mm: trial.b, shelf_length_mm: trial.L, flange_height_mm: trial.H, bolt: trial.bolt.size, bolt_hole_mm: trial.bolt.hole, bolt_heights_mm: trial.ys, bolt_spacing_mm: trial.spacing },
    checks: c.rows, ok: c.ok, safetyFactor: c.safetyFactor, volume_mm3: r2(volume), massG: r2(massG), steps,
    notes: NOT_CHECKED_BRACKET.concat(PLASTIC.has(mat.id) ? ['Plastic: the yield figure is a short-term value; creep under a steady load is not checked.'] : []),
    _t: trial,
  };
}
const NOT_CHECKED_BRACKET = [
  'Not checked: stress concentration at the sharp inner corner and the bolt holes (add an inside radius of about t), the flange\'s bending between the bolts, fatigue, the wall, bolt preload and local bearing.',
  'The load is a static force at the tip; the moment is taken at the wall face, slightly conservative.',
];

// ------------------------------------------------------------------------------------------------ shaft

export function checkShaft(d, L, load, mat, safety) {
  const T = load.torque_Nmm || 0, M = load.moment_Nmm || 0;
  const sigma = 32 / (Math.PI * d ** 3) * Math.sqrt(M ** 2 + 0.75 * T ** 2);
  const allow = mat.yield / safety;
  const rows = [{ id: 'von-mises', what: 'Von Mises stress at the surface (32/(π d³)·√(M² + ¾T²))', value: r2(sigma), limit: r2(allow), unit: 'MPa', sf: r2(mat.yield / sigma), ok: sigma <= allow + 1e-9 }];
  if (T) {
    const tau = 16 * T / (Math.PI * d ** 3);
    rows.push({ id: 'torsion-shear', what: 'Torsional shear (16 T / (π d³), limit 0.577 Sy / SF)', value: r2(tau), limit: r2(0.577 * allow), unit: 'MPa', sf: r2(0.577 * mat.yield / tau), ok: tau <= 0.577 * allow + 1e-9 });
    const theta = T * L / (mat.E / (2 * (1 + mat.nu)) * Math.PI * d ** 4 / 32) * 180 / Math.PI;
    rows.push({ id: 'twist', what: 'Twist over the length (θ = T L / (G J))', value: r3(theta), limit: null, unit: 'degrees', sf: null, ok: true });
  }
  return { rows, ok: rows.every((r) => r.ok), safetyFactor: r2(Math.min(...rows.filter((r) => r.sf !== null).map((r) => r.sf))) };
}

export function estimateShaft(spec) {
  const mat = materialFor(spec.material);
  const T = spec.torque_Nmm || 0, M = spec.moment_Nmm || 0;
  if (!(T > 0 || M > 0)) throw new DesignError('invalid_argument', 'A shaft needs a torque or a bending moment.', ['Give torque (with torque_unit) and/or moment.']);
  const L = fin(spec.length_mm, 'The length');
  const safety = safetyOf(mat, spec.safety);
  const dReq = Math.cbrt(32 * safety * Math.sqrt(M ** 2 + 0.75 * T ** 2) / (Math.PI * mat.yield));
  const d = SHAFT_D.find((s) => s >= dReq - 1e-9) ?? Math.ceil(dReq);
  const c = checkShaft(d, L, { torque_Nmm: T, moment_Nmm: M }, mat, safety);
  const steps = [
    'Equivalent moment √(M² + ¾T²) = ' + r2(Math.sqrt(M ** 2 + 0.75 * T ** 2)) + ' N·mm; allowable ' + r2(mat.yield / safety) + ' MPa (' + MAT_LABEL[mat.id] + ', SF ' + safety + ').',
    'Diameter d = ∛(32 SF √(M² + ¾T²) / (π Sy)) = ' + r2(dReq) + ' mm, rounded up to the standard size ' + d + ' mm.',
  ];
  const volume = Math.PI / 4 * d * d * L;
  return {
    generator: 'shaft', process: spec.process || 'machined',
    material: { id: mat.id, name: MAT_LABEL[mat.id], E_MPa: mat.E, yield_MPa: mat.yield, density_kg_m3: mat.density },
    load: { torque_Nmm: r2(T), moment_Nmm: r2(M), safety },
    dims: { diameter_mm: d, length_mm: L }, checks: c.rows, ok: c.ok, safetyFactor: c.safetyFactor, volume_mm3: r2(volume), massG: r2(volume * mat.density * 1e-6), steps,
    notes: ['Not checked: keyways, shoulders and fillets (stress concentration), fatigue, critical speed, bearing loads.'],
  };
}

/** spec → an estimate for its generator. `spec.generator` is required. */
export function estimate(spec) {
  if (spec.generator === 'bracket') return estimateBracket(spec);
  if (spec.generator === 'shaft') return estimateShaft(spec);
  const g = GENERATORS.find((x) => x.id === spec.generator);
  if (g && g.kind === 'script') throw new DesignError('unsupported', 'The generator "' + g.id + '" is a script with its own inputs; it is not sized here.', ['Add it as a Generated feature in the QuantScope workspace.']);
  throw new DesignError('not_found', 'There is no generator "' + spec.generator + '".', ['Call generators_list for the ids.']);
}

// ------------------------------------------------------------------------------------------------ the arguments an assistant gives

const num = (description, minimum, maximum) => ({ type: 'number', description, minimum, maximum });
/** The input properties shared by design_estimate, design_check and design_make (AI-CONNECT-SPEC § 2.2: units in every description). */
export const DESIGN_PROPS = {
  generator: { type: 'string', enum: ['bracket', 'shaft'], description: 'Which generator: "bracket" (L shelf bracket carrying a force at a distance from the wall) or "shaft" (round shaft in torque and bending). generators_find picks one from words.' },
  force: num('The force, in force_unit (a bracket). "20 pounds" is 20 with force_unit lbf.', 0.001, 1e7),
  force_unit: { type: 'string', enum: ['N', 'kN', 'lbf', 'lb', 'kgf'], default: 'N', description: 'Unit of force. lb and lbf are pounds-force.' },
  arm: num('Distance from the wall face to the force, in length_unit (a bracket); also the shelf length.', 0.1, 1e5),
  length: num('Shaft length, in length_unit.', 1, 1e5),
  torque: num('Shaft torque, in torque_unit.', 0, 1e9),
  moment: num('Shaft bending moment, in torque_unit.', 0, 1e9),
  torque_unit: { type: 'string', enum: ['N*m', 'N*mm', 'lbf*in', 'lbf*ft'], default: 'N*m', description: 'Unit of torque and moment.' },
  length_unit: { type: 'string', enum: ['mm', 'cm', 'm', 'in', 'ft'], default: 'mm', description: 'Unit of every length in the call (arm, length, width, thickness, max_deflection).' },
  material: { type: 'string', maxLength: 60, description: 'The material in words: "aluminium", "steel", "stainless", "titanium", "ABS", "PLA", "nylon" or an id (al6061, steel, ss304, ti64, abs, pla, nylon).' },
  process: { type: 'string', enum: ['machined', 'printed', 'any'], default: 'machined', description: 'How it is made: machined rounds sizes to stock (thickness) and standard diameters, printed to 0.5 mm, any to 0.5 mm.' },
  safety: num('Safety factor on yield (default 2 for metals, 3 for plastics).', 1, 20),
  width: num('Bracket width, in length_unit (default: a fraction of the arm, at least 20 mm).', 1, 1e4),
  max_deflection: num('Largest allowed tip deflection of a bracket, in length_unit (default: none, the deflection is still reported).', 0.001, 1e4),
};
/** Assistant arguments → the spec estimate() takes (all lengths mm, forces N, moments N·mm). */
export function specFromArgs(a) {
  const lu = a.length_unit || 'mm';
  const L = (v) => (v === undefined || v === null ? undefined : lengthMm(v, lu));
  const tq = (v) => (v === undefined || v === null ? undefined : v * (TORQUE_UNITS[a.torque_unit || 'N*m']));
  if (!a.generator) throw new DesignError('invalid_argument', 'Say which generator.', ['Call generators_find with the need in words.']);
  if (!a.material) throw new DesignError('invalid_argument', 'Say the material.', ['Use "aluminium", "steel", "stainless", "titanium", "ABS", "PLA" or "nylon".']);
  const spec = { generator: a.generator, material: a.material, process: a.process, safety: a.safety };
  if (a.generator === 'bracket') {
    if (a.force === undefined || a.arm === undefined) throw new DesignError('invalid_argument', 'A bracket needs a force and an arm.', ['Give force (with force_unit) and arm (with length_unit).']);
    Object.assign(spec, { force_N: forceN(a.force, a.force_unit || 'N'), arm_mm: L(a.arm), width_mm: L(a.width), max_deflection_mm: L(a.max_deflection), thickness_mm: L(a.thickness) });
  } else if (a.generator === 'shaft') {
    if (a.length === undefined) throw new DesignError('invalid_argument', 'A shaft needs a length.', ['Give length (with length_unit).']);
    Object.assign(spec, { length_mm: L(a.length), torque_Nmm: tq(a.torque), moment_Nmm: tq(a.moment) });
  }
  return spec;
}

// ------------------------------------------------------------------------------------------------ the part

/** The part of an estimate: sketches, extrudes and cuts, as the Features panel would make them. */
export function buildPart(est, name) {
  const mat = materialById(est.material.id);
  const part = newPart(name || (est.generator === 'bracket' ? 'Bracket' : 'Shaft'));
  if (est.generator === 'bracket') {
    const { t, b, L, H, bolt, ys } = est._t;
    const sk = S.newSketch();
    const pts = [[0, 0], [L, 0], [L, t], [t, t], [t, H], [0, H]];
    const lines = [];
    let prev = null;
    for (let i = 0; i < 6; i++) { const l = S.addLine(sk, prev || pts[i], pts[(i + 1) % 6]); lines.push(l); prev = l.p2; }
    S.addConstraint(sk, 'coincident', [lines[5].p2, lines[0].p1]);
    S.addConstraint(sk, 'coincident', ['O', lines[0].p1]);
    [0, 2, 4].forEach((i) => S.addConstraint(sk, 'horizontal', [lines[i].id]));
    [1, 3, 5].forEach((i) => S.addConstraint(sk, 'vertical', [lines[i].id]));
    S.addConstraint(sk, 'hdistance', ['O', lines[0].p2], L);
    S.addConstraint(sk, 'distance', [lines[1].id], t);
    S.addConstraint(sk, 'vdistance', ['O', lines[4].p1], H);
    S.addConstraint(sk, 'hdistance', ['O', lines[2].p2], t);
    const s1 = addFeature(part, 'sketch', { plane: { kind: 'base', name: 'front' }, sketch: sk });
    addFeature(part, 'extrude', { sketch: s1.id, depth: b });
    const hs = S.newSketch();
    for (const y of ys) S.addCircle(hs, [-b / 2, y], bolt.hole / 2);   // the right plane has sketch x = −Z
    const s2 = addFeature(part, 'sketch', { plane: { kind: 'base', name: 'right' }, sketch: hs });
    addFeature(part, 'extrude', { sketch: s2.id, op: 'cut', end: 'mid', depth: 3 * t });
  } else {
    const { diameter_mm: d, length_mm: L } = est.dims;
    const sk = S.newSketch();
    S.addCircle(sk, [0, 0], d / 2);
    const s1 = addFeature(part, 'sketch', { plane: { kind: 'base', name: 'top' }, sketch: sk });
    addFeature(part, 'extrude', { sketch: s1.id, depth: L });
  }
  part.material = { name: MAT_LABEL[mat.id], density: mat.density / 1000 };
  return part;
}

const CHECK_ROW = { type: 'object', properties: { id: { type: 'string' }, what: { type: 'string' }, value: { type: 'number' }, limit: { type: ['number', 'null'] }, unit: { type: 'string' }, sf: { type: ['number', 'null'] }, ok: { type: 'boolean' } }, required: ['id', 'ok'] };
/** The shape of an estimate (outputSchema of design_estimate / design_check; the Great Eight headliner tools declare one). */
export const ESTIMATE_SCHEMA = { type: 'object', properties: {
  generator: { type: 'string' }, process: { type: 'string' }, material: { type: 'object' }, load: { type: 'object' }, dims: { type: 'object' },
  checks: { type: 'array', items: CHECK_ROW }, ok: { type: 'boolean', description: 'every check passes' }, safetyFactor: { type: 'number', description: 'the lowest stress safety factor, yield over stress' },
  volume_mm3: { type: 'number' }, massG: { type: 'number' }, steps: { type: 'array', items: { type: 'string' } }, notes: { type: 'array', items: { type: 'string' } } }, required: ['generator', 'dims', 'checks', 'ok', 'safetyFactor', 'massG'] };
export const MAKE_SCHEMA = { type: 'object', properties: { undo: { type: 'string' }, out: { type: 'string' }, estimate: ESTIMATE_SCHEMA, failing: { type: 'array' }, solid: { type: 'object' } }, required: ['estimate', 'solid'] };

/** What an assistant gets back: the estimate without the internals. */
export const publicEstimate = (est) => { const { _t, ...rest } = est; return rest; };
