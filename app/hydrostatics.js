/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rows and notes are read by the assistant program and the panel; the words the person reads are in lang/en.json. */
/**
 * hydrostatics.js — a floating hull's hydrostatics and righting arms from its closed triangle mesh (0.8 EG.26, session part_PART_2). DOM-free.
 * Textbook naval architecture (Biran, "Ship Hydrostatics and Stability"; Tupper): nothing but the mesh and the water.
 *
 *   hullAt(mesh, draft, opts) → { draft, volume (mm³), displacement (kg), kb, lcb, tcb (mm: the centre of buoyancy from the keel, from the origin
 *       along the length, across), waterplane: { area, lcf, tcf, iT, iL (mm⁴ about the waterplane's own centroid) }, wetted (mm²), bmT, bmL, kmT, kmL,
 *       cb, cw, tpc (kg per mm of immersion), lwl, bwl } | null (nothing submerged)
 *   table(mesh, drafts, opts) → rows of hullAt, one per draft
 *   rightingArms(mesh, { draft | volume, kg, angles[], opts }) → { gm, rows: [{ heel (deg), draft (mm), gz (mm), kn? }] , maxGz, at, vanishing }
 *     the hull is turned about its length axis, lifted to keep its displacement, and GZ = z(B) − z(G) in the water's frame (positive = restoring)
 *   meshOf(regen) → { pos: Float64Array, idx: Uint32Array } in the part's axes; axes: up Y, length X, across Z (opts.axes can change them)
 * The mesh must be closed with outward triangles (the kernel's are). A hull cut by the waterline is clipped triangle by triangle; the volume is the
 * divergence integral over the wet skin plus the waterplane; the moments of the waterplane come from its boundary (Green's theorem), so nothing is chained.
 */
const RAD = Math.PI / 180;

export function meshOf(regen) {
  const m = regen && regen.mesh;
  if (!m || !m.positions || !m.indices) throw Object.assign(new Error('The part has no solid to float.'), { code: 'failed', next: ['Build the part first; fix any failing feature.'] });
  return { pos: Float64Array.from(m.positions), idx: Uint32Array.from(m.indices) };
}

/** Reorder the axes: opts.axes = { up, length, across } each 'x' | 'y' | 'z' (default y, x, z); returns a mesh with Y up, X along, Z across. */
function aligned(mesh, axes) {
  const a = axes || { up: 'y', length: 'x', across: 'z' };
  if (a.up === 'y' && a.length === 'x' && a.across === 'z') return mesh;
  const k = { x: 0, y: 1, z: 2 }, u = k[a.up], l = k[a.length], c = k[a.across];
  if (new Set([u, l, c]).size !== 3) throw Object.assign(new Error('The axes must be three different ones.'), { code: 'invalid_argument', next: ['Use up y, length x, across z, or a permutation.'] });
  const pos = new Float64Array(mesh.pos.length);
  for (let i = 0; i < pos.length; i += 3) { pos[i] = mesh.pos[i + l]; pos[i + 1] = mesh.pos[i + u]; pos[i + 2] = mesh.pos[i + c]; }
  // an odd permutation of the axes mirrors the mesh: swap two corners of every triangle to keep them outward
  const p = [l, u, c], inversions = (p[0] > p[1]) + (p[0] > p[2]) + (p[1] > p[2]);
  let idx = mesh.idx;
  if (inversions % 2) { idx = Uint32Array.from(mesh.idx); for (let i = 0; i < idx.length; i += 3) { const t = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = t; } }
  return { pos, idx };
}

const keelOf = (mesh) => { let m = Infinity; for (let i = 1; i < mesh.pos.length; i += 3) if (mesh.pos[i] < m) m = mesh.pos[i]; return m; };

/** Everything under the plane y = h: volume, moments, wet skin and the waterplane's boundary integrals. */
function below(mesh, h) {
  const { pos, idx } = mesh;
  let V = 0, Mx = 0, My = 0, Mz = 0, S = 0;
  let wA = 0, wCx = 0, wCz = 0, wIx = 0, wIz = 0, wMinX = Infinity, wMaxX = -Infinity, wMinZ = Infinity, wMaxZ = -Infinity, cuts = 0;
  const tri = (a, b, c) => {
    // a, b, c are [x, y, z] under the plane (y ≤ h)
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2], vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx, area2 = Math.hypot(nx, ny, nz);
    S += area2 / 2;
    V += (a[0] * (b[1] * c[2] - b[2] * c[1]) - a[1] * (b[0] * c[2] - b[2] * c[0]) + a[2] * (b[0] * c[1] - b[1] * c[0])) / 6;
    // ∫ x dV = ½ ∮ x² n_x dS, and the same for y and z; ∫_T q² dS = A (q0² + q1² + q2² + q0q1 + q0q2 + q1q2) / 6
    const q = (i) => { const s = a[i] ** 2 + b[i] ** 2 + c[i] ** 2 + a[i] * b[i] + a[i] * c[i] + b[i] * c[i]; return s / 6; };
    Mx += 0.5 * (nx / 2) * q(0); My += 0.5 * (ny / 2) * q(1); Mz += 0.5 * (nz / 2) * q(2);   // n dS = (cross)/2 · … : the area vector is cross/2, so (n_x dS) = nx/2 over the triangle
  };
  const seg = (p, q) => {   // an edge of the waterplane's boundary, in the order the clipped triangle gives it
    const cr = p[0] * q[2] - q[0] * p[2];
    wA += cr / 2; wCx += (p[0] + q[0]) * cr; wCz += (p[2] + q[2]) * cr;
    wIx += (p[2] ** 2 + p[2] * q[2] + q[2] ** 2) * cr; wIz += (p[0] ** 2 + p[0] * q[0] + q[0] ** 2) * cr;
    for (const r of [p, q]) { if (r[0] < wMinX) wMinX = r[0]; if (r[0] > wMaxX) wMaxX = r[0]; if (r[2] < wMinZ) wMinZ = r[2]; if (r[2] > wMaxZ) wMaxZ = r[2]; }
    cuts++;
  };
  const P = (i) => [pos[3 * i], pos[3 * i + 1], pos[3 * i + 2]];
  const lerp = (p, q) => { const t = (h - p[1]) / (q[1] - p[1]); return [p[0] + t * (q[0] - p[0]), h, p[2] + t * (q[2] - p[2])]; };
  for (let t = 0; t < idx.length; t += 3) {
    const v = [P(idx[t]), P(idx[t + 1]), P(idx[t + 2])];
    const inside = v.map((p) => p[1] <= h);
    const n = inside.filter(Boolean).length;
    if (n === 3) tri(v[0], v[1], v[2]);
    else if (n === 0) continue;
    else if (n === 1) {   // one corner under: a small triangle; the cut runs from where the edge leaves to where the edge before enters
      const k = inside.indexOf(true), a = v[k], b = v[(k + 1) % 3], c = v[(k + 2) % 3];
      const pb = lerp(a, b), pc = lerp(c, a);
      tri(a, pb, pc); seg(pb, pc);
    } else {   // two corners under: a quad cut into two triangles
      const k = inside.indexOf(false), a = v[k], b = v[(k + 1) % 3], c = v[(k + 2) % 3];   // a is above; b, c under (b follows a)
      const pa = lerp(b, a), pc = lerp(a, c);
      tri(b, c, pc); tri(b, pc, pa); seg(pc, pa);
    }
  }
  // the waterplane (cap at y = h, normal +y): its volume term is h·A/3 and its moment terms ½ h² A for y only
  return { V, Mx, My, Mz, S, wA, wCx, wCz, wIx, wIz, cuts, bounds: [wMinX, wMaxX, wMinZ, wMaxZ] };
}

/** Properties of the hull floating with the keel's lowest point `draft` mm below the waterline. mesh: meshOf() (Y up, X along, Z across). */
export function hullAt(meshIn, draft, opts = {}) {
  const mesh = aligned(meshIn, opts.axes), rho = opts.rho ?? 1025, keel = keelOf(mesh), h = keel + draft;
  if (!(draft > 0)) return null;
  const r = below(mesh, h);
  const A = Math.abs(r.wA);
  if (!(r.V > 0) && !(A > 0)) return null;
  const V = r.V + h * A / 3;
  if (!(V > 0)) return null;
  const sgn = r.wA < 0 ? -1 : 1;
  // the boundary integrals: signed by the order of the cut edges; fold the sign out
  const aw = r.wA * sgn, cx = (r.wCx * sgn) / (6 * aw) , cz = (r.wCz * sgn) / (6 * aw);
  const Ixx = (r.wIx * sgn) / 12, Izz = (r.wIz * sgn) / 12;   // ∫ z² dA and ∫ x² dA about the origin
  const iT = Ixx - aw * cz * cz, iL = Izz - aw * cx * cx;
  const mx = r.Mx, my = r.My + 0.5 * h * h * A, mz = r.Mz;
  const lcb = mx / V, vcb = my / V, tcb = mz / V, kb = vcb - keel;
  const lwl = r.bounds[1] - r.bounds[0], bwl = r.bounds[3] - r.bounds[2];
  const out = {
    draft, volume: V, displacement: V * 1e-9 * rho, kb, lcb, tcb, wetted: r.S,
    waterplane: { area: aw, lcf: cx, tcf: cz, iT, iL },
    bmT: iT / V, bmL: iL / V, kmT: kb + iT / V, kmL: kb + iL / V,
    cb: lwl > 0 && bwl > 0 ? V / (lwl * bwl * draft) : null, cw: lwl > 0 && bwl > 0 ? aw / (lwl * bwl) : null,
    tpc: rho * 1e-9 * aw, lwl, bwl,
  };
  return out;
}

export function table(mesh, drafts, opts = {}) { return drafts.map((d) => hullAt(mesh, d, opts)).filter(Boolean); }

/** Rotate a mesh by `deg` about the X axis (the length), heeling to +Z down. */
function heeled(mesh, deg) {
  const c = Math.cos(deg * RAD), s = Math.sin(deg * RAD), pos = new Float64Array(mesh.pos.length);
  for (let i = 0; i < pos.length; i += 3) { const y = mesh.pos[i + 1], z = mesh.pos[i + 2]; pos[i] = mesh.pos[i]; pos[i + 1] = y * c - z * s; pos[i + 2] = y * s + z * c; }
  return { pos, idx: mesh.idx };
}

/**
 * Righting arms at a fixed displacement. kg = the centre of gravity's height above the keel (mm); the heel angles in degrees. Each heeled hull is
 * lifted until it displaces what the upright one does (bisection on the waterline), then GZ = z(B) − z(G) with both turned together.
 */
export function rightingArms(meshIn, { draft = null, volume = null, kg, angles = [0, 5, 10, 15, 20, 30, 40, 50, 60], opts = {} } = {}) {
  const mesh = aligned(meshIn, opts.axes), keel = keelOf(mesh);
  if (!(kg > 0) && kg !== 0) throw Object.assign(new Error('Give the height of the centre of gravity above the keel (kg).'), { code: 'invalid_argument', next: ['Give kg in millimetres.'] });
  const up = draft !== null ? hullAt(mesh, draft, { ...opts, axes: undefined }) : null;
  const V0 = volume ?? (up && up.volume);
  if (!(V0 > 0)) throw Object.assign(new Error('Nothing is submerged at that draft.'), { code: 'invalid_argument', next: ['Give a draft between the keel and the deck.'] });
  const rows = [];
  // the upright hull for the metacentric height
  const base = draft !== null ? up : null;
  for (const ang of angles) {
    const M = ang === 0 ? mesh : heeled(mesh, ang);
    // the waterline height h in the heeled frame that gives V0: V(h) rises with h
    let lo = Infinity, hi = -Infinity;
    for (let i = 1; i < M.pos.length; i += 3) { if (M.pos[i] < lo) lo = M.pos[i]; if (M.pos[i] > hi) hi = M.pos[i]; }
    const vol = (h) => { const r = below(M, h); return r.V + h * Math.abs(r.wA) / 3; };
    let a = lo, b = hi;
    for (let it = 0; it < 80 && b - a > 1e-9 * Math.max(1, hi - lo); it++) { const mid = (a + b) / 2; if (vol(mid) < V0) a = mid; else b = mid; }
    const h = (a + b) / 2, r = below(M, h), Vh = r.V + h * Math.abs(r.wA) / 3;
    if (Math.abs(Vh / V0 - 1) > 1e-3) { rows.push({ heel: ang, draft: null, gz: null, note: 'The hull cannot hold that displacement at this heel (it is submerged or out of the water).' }); continue; }
    const A = Math.abs(r.wA);
    const zB = r.Mz / Vh, yB = (r.My + 0.5 * h * h * A) / Vh;
    // G turns with the hull about the same axis: G at (y = kg + keel, z = 0) before heeling
    const zG = (keel + kg) * Math.sin(ang * RAD);   // z' = y sin + z cos with z = 0
    const gz = zB - zG;
    rows.push({ heel: ang, draft: h - lo, volume: Vh, gz, kb: yB - lo, zb: zB });
  }
  const real = rows.filter((x) => x.gz !== null && x.gz !== undefined);
  const best = real.reduce((m, x) => (!m || x.gz > m.gz ? x : m), null);
  const gm = base ? base.kmT - kg : null;
  let vanishing = null;
  for (let i = 1; i < real.length; i++) if (real[i - 1].gz > 0 && real[i].gz <= 0) { const p = real[i - 1], q = real[i]; vanishing = p.heel + (q.heel - p.heel) * p.gz / (p.gz - q.gz); break; }
  return { gm, kg, volume: V0, rows, maxGz: best ? best.gz : null, at: best ? best.heel : null, vanishing };
}

export const WATER = { sea: 1025, fresh: 1000 };
export const HYDRO_PROPS = {
  draft: { type: 'number', minimum: 0.001, maximum: 1e6, description: 'The draft: how deep the keel (the lowest point) sits below the waterline, in length_unit.' },
  length_unit: { type: 'string', enum: ['mm', 'cm', 'm', 'in', 'ft'], default: 'mm', description: 'Unit of the draft and of kg.' },
  water: { type: 'string', enum: ['sea', 'fresh'], default: 'sea', description: 'The water: sea (1025 kg/m³) or fresh (1000 kg/m³).' },
  kg: { type: 'number', minimum: 0, maximum: 1e6, description: 'Height of the centre of gravity above the keel, in length_unit. Give it to get the metacentric height and the righting arms.' },
  heel_to: { type: 'number', minimum: 5, maximum: 90, default: 60, description: 'Largest heel angle of the righting-arm curve, in degrees.' },
  up: { type: 'string', enum: ['x', 'y', 'z'], default: 'y', description: 'Which axis of the part points up.' },
  length_axis: { type: 'string', enum: ['x', 'y', 'z'], default: 'x', description: 'Which axis of the part runs along the hull.' },
  across_axis: { type: 'string', enum: ['x', 'y', 'z'], default: 'z', description: 'Which axis of the part runs across the hull (the hull heels about the length axis).' },
};
const UNITS = { mm: 1, cm: 10, m: 1000, in: 25.4, ft: 304.8 };
const r4 = (v) => (v === null || v === undefined ? v : Math.round(v * 1e4) / 1e4);

/** The tool's answer: the hull at the draft in mm and in m, with the stability when kg is given. Throws Error with .code and .next. */
export function describe(regen, a) {
  const k = UNITS[a.length_unit || 'mm'];
  const axes = { up: a.up || 'y', length: a.length_axis || 'x', across: a.across_axis || 'z' };
  const mesh = meshOf(regen), rho = WATER[a.water || 'sea'];
  const draft = a.draft * k;
  const h = hullAt(mesh, draft, { rho, axes });
  if (!h) throw Object.assign(new Error('Nothing is submerged at that draft.'), { code: 'invalid_argument', next: ['Give a draft above 0, and in the unit you named.'] });
  const m = (v) => r4(v / 1000);
  const out = {
    water: { name: a.water || 'sea', density_kg_m3: rho }, draft_m: m(draft),
    displacement_t: r4(h.displacement / 1000), volume_m3: r4(h.volume / 1e9),
    kb_m: m(h.kb), lcb_m: m(h.lcb), tcb_m: m(h.tcb),
    waterplane: { area_m2: r4(h.waterplane.area / 1e6), lcf_m: m(h.waterplane.lcf), length_m: m(h.lwl), beam_m: m(h.bwl) },
    wetted_surface_m2: r4(h.wetted / 1e6), bm_transverse_m: m(h.bmT), bm_longitudinal_m: m(h.bmL), km_transverse_m: m(h.kmT), km_longitudinal_m: m(h.kmL),
    cb: r4(h.cb), cw: r4(h.cw), tonnes_per_cm: r4(h.tpc * 10),
    notes: ['The hull is the part\'s closed solid, floating with the keel at the stated draft and no trim.', 'Textbook hydrostatics from the mesh; free surface, trim, appendages and the superstructure\'s buoyancy above the part are not included.'],
  };
  if (a.kg !== undefined) {
    const kg = a.kg * k, top = a.heel_to || 60, angles = [];
    for (let d = 0; d <= top + 1e-9; d += top > 40 ? 5 : 2.5) angles.push(d);
    const rr = rightingArms(mesh, { draft, kg, angles, opts: { rho, axes } });
    out.stability = { kg_m: m(kg), gm_m: m(rr.gm), stable_upright: rr.gm > 0, max_gz_m: rr.maxGz === null ? null : m(rr.maxGz), max_gz_at_deg: rr.at, vanishing_deg: rr.vanishing === null ? null : Math.round(rr.vanishing * 10) / 10,
      righting_arms: rr.rows.map((x) => ({ heel_deg: x.heel, gz_m: x.gz === null || x.gz === undefined ? null : m(x.gz) })) };
    if (rr.gm <= 0) out.notes.push('The centre of gravity is above the transverse metacentre: the hull is not stable upright.');
  }
  return out;
}
