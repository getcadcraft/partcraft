/* SPDX-License-Identifier: Apache-2.0 */
/**
 * flow-worker.js — the Flow study in a compute worker (compute-worker.js; DOM-free).
 *   flowSolve(job)  flow-domain.js cells → flow.js lattice → time steps to a steady state → physical results:
 *                   cell fields (velocity m/s, static pressure Pa) over the grid, per-opening mass flow and mean pressure,
 *                   pressure drop, mass balance, force on the part (and drag/lift coefficients for external flow), the
 *                   surface pressure on a plot mesh (the part's mesh split to ≤ the cell size), Reynolds numbers, the residual
 *                   history and whether it converged.
 * Progress: ctx.progress({ f (0…1), step, res, phase }). Cancel = terminate the worker.
 * `solveFlow(job, onProgress)` is the same thing without the worker (Node tests).
 */
import { addOps } from './worker-ops.js';
import { buildLattice, makeState, run, boundaryStats, scaling, CX as CXq, CY as CYq, CZ as CZq } from './flow.js';
import { flowDomain, frontalArea } from './flow-domain.js';
import { attachSA, wallStats, wallForceCorrection, YPLUS_RANGE, STABILIZER } from './flow-turb.js';
import { refineMesh } from './fea.js';
import { threadFlow } from './flow-par.js';
import { t } from './i18n.js';   // laminar runs step on the solver threads when the pool is up (bit-identical)
import { dot3 as dotv } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)


export function solveFlow(job, onProgress = () => {}) {
  const t0 = Date.now();
  const { h, fluid } = job, dx = h / 1000, rhoP = fluid.density, nuP = fluid.viscosity / fluid.density;
  const internal = job.type === 'internal', turb = job.model === 'sa';
  onProgress({ f: 0, phase: 'mesh' });
  const dom = flowDomain(job.mesh, {
    type: job.type, h, faces: job.faces, interpolated: job.wall !== 'bounce',
    openings: internal ? job.openings.map((o) => ({ role: o.role, faces: o.faces })) : [],
    box: internal ? null : { up: job.ext.up, down: job.ext.down, side: job.ext.side }, dir: internal ? null : job.ext.dir,
  });
  const c = dom.counts;
  if (!c.fluid) throw new Error(internal ? t('study.flow.err.no_closed_space') : t('study.flow.err.no_fluid_around'));
  if (internal && c.noOutlet) throw new Error(t('study.flow.err.no_outlet'));
  if (c.fluid > (job.limit || 600000)) throw new Error(t('study.flow.err.fluid_cells', { cells: c.fluid.toLocaleString('en-US'), max: (job.limit || 600000).toLocaleString('en-US') }));
  // groups with unit velocities first; the speeds are set once the lattice scale is known
  const groups = dom.groups.map((g) => (g ? { ...g } : null));
  if (internal) groups.forEach((g) => { if (g && g.type === 'velocity') g.u = g.dir; if (g && g.type === 'pressure') g.rho = 1; });
  else { groups[1].u = job.ext.dir; groups[2].rho = 1; }
  const lat = buildLattice({ nx: dom.nx, ny: dom.ny, nz: dom.nz, kind: dom.kind, groups, wallGroup: dom.wallGroup });
  const L = lat.links, ng = groups.length;
  // effective area of each velocity group (cell faces): mass in per unit lattice speed = Σ 6 w (c·d)
  const area = new Float64Array(ng);
  for (let k = 0; k < L.n; k++) if (groups[L.g[k]] && groups[L.g[k]].type === 'velocity' && L.kind[k] === 3) area[L.g[k]] += L.a[k];
  // physical speed per opening
  let Uref, Dc, Lc;
  const span = [0, 1, 2].map((a) => { let lo = Infinity, hi = -Infinity; for (let n = 0; n < lat.nf; n++) { const e = lat.cells[n], ijk = [e % dom.nx, Math.floor(e / dom.nx) % dom.ny, Math.floor(e / (dom.nx * dom.ny))]; lo = Math.min(lo, ijk[a]); hi = Math.max(hi, ijk[a]); } return hi - lo + 1; });
  Lc = Math.max(...span);
  // inlets: the flow is set on the true opening area (lid: the face's holes; cap: the face), whatever the staircase
  const opening = internal ? job.openings.map((o, oi) => {
    const gs = dom.openingGroups[oi], A = gs.reduce((s, g) => s + area[g], 0), At = gs.reduce((s, g) => s + groups[g].area, 0);
    const rec = { id: o.id, role: o.role, groups: gs, modes: dom.faceMode[oi], area: At * 1e-6, cellArea: A * dx * dx };
    if (o.role === 'inlet') {
      if (!(A > 0) || gs.some((g) => !(area[g] > 0))) throw new Error(t('study.flow.err.inlet_dry', { n: o.id.replace(/\D/g, '') }));
      rec.Q = o.spec === 'velocity' ? o.value * At * 1e-6 : o.value;
      rec.U = rec.Q / (At * 1e-6);
      rec.gU = gs.map((g) => rec.Q * (groups[g].area / At) / (area[g] * dx * dx));   // speed on the lattice links of each face
      rec.Dc = Math.sqrt(4 * At * 1e-6 / Math.PI) / dx;
    } else {
      const set = new Set(gs);
      let nl = 0; for (let k = 0; k < L.n; k++) if (set.has(L.g[k])) nl++;
      if (!nl) throw new Error(t('study.flow.err.outlet_dry', { n: o.id.replace(/\D/g, '') }));
      rec.p = o.p;
    }
    return rec;
  }) : [];
  let Lref = null, Aref = null;
  if (internal) {
    const ins = opening.filter((o) => o.role === 'inlet');
    Uref = Math.max(...ins.flatMap((o) => o.gU)); Dc = Math.min(...ins.map((o) => o.Dc));
  } else {
    Uref = job.ext.speed;
    const d = job.ext.dir, bb = job.bbox, size = [0, 1, 2].map((a) => bb.max[a] - bb.min[a]);
    Lref = Math.max(...[0, 1, 2].filter((a) => Math.abs(d[a]) < 0.9).map((a) => size[a]), 1e-9);
    Aref = job.ext.refArea || frontalArea(job.mesh, d);
    Dc = Lref / h;
  }
  const sc = scaling({ dx, U: Uref, nu: nuP, Lc, Dc, internal, turbulent: turb });
  if (!sc.ok) throw new Error(sc.why);
  const cu = sc.cu, cp = rhoP * cu * cu;   // m/s and Pa per lattice unit
  // set speeds and pressures on the links
  const ulat = new Float64Array(ng), rhow = new Float64Array(ng).fill(1);
  let pref = 0;
  if (internal) {
    const outs = opening.filter((o) => o.role === 'outlet');
    pref = Math.min(...outs.map((o) => o.p));
    for (const o of opening) o.groups.forEach((g, gi) => { if (o.role === 'inlet') ulat[g] = o.gU[gi] / cu; else rhow[g] = 1 + 3 * (o.p - pref) / cp; });
    const dr = Math.max(...rhow) - 1;
    if (dr > 0.05) throw new Error(t('study.flow.err.outlet_spread', { pct: (100 * dr).toFixed(0), pa: (0.05 * cp / 3).toPrecision(2) }));
  } else ulat[1] = Uref / cu;
  for (let k = 0; k < L.n; k++) { const g = L.g[k]; if (L.kind[k] === 3) L.a[k] *= ulat[g]; else if (L.kind[k] === 4) L.a[k] = rhow[g]; }
  const S = makeState(lat, { tau: sc.tau, u0: internal ? [0, 0, 0] : job.ext.dir.map((v) => v * ulat[1]), eddy: turb, smagorinsky: turb ? STABILIZER : 0 });
  // Spalart–Allmaras: inflow turbulence from an intensity I and a length scale ℓ (ν_t = √(3/2)·C_μ^¼·I·U·ℓ): internal 5 % and
  // 0.07 × the inlet's equivalent diameter (the usual duct-inlet values), external 1 % and 1 % of the part's size; never
  // below SA's free-stream 3ν. Interior starts at that level.
  const T = turb ? (() => {
    const I = internal ? 0.05 : 0.01, ell = internal ? 0.07 * Dc : 0.01 * Dc, nti = Math.max(3 * sc.nu, Math.sqrt(1.5) * 0.09 ** 0.25 * I * sc.u * ell);
    return attachSA(S, { nu: sc.nu, nuIn: nti });
  })() : null;
  const threaded = threadFlow(S);
  // what convergence watches besides the velocity field: the pressure drop (internal) or the force (external)
  const stats = () => { const st = boundaryStats(S); if (T) { const c = wallForceCorrection(T, S); for (let a = 0; a < 3; a++) st.force[a] += c[a]; } return st; };
  const watch = () => {
    const st = stats();
    if (!internal) return { q: dotv(st.force, job.ext.dir), st };
    let pin = 0, wi = 0, pout = 0, wo = 0;
    for (let k = 0; k < L.n; k++) { const g = L.g[k]; if (!g) continue; const r = S.rho[L.cell[k]]; if (groups[g].type === 'velocity') { pin += r; wi++; } else if (groups[g].type === 'pressure') { pout += r; wo++; } }
    return { q: (wi ? pin / wi : 0) - (wo ? pout / wo : 0), st };
  };
  let last = null, steady = 0, lastSent = 0;
  const qTol = 1e-4;
  const minSteps = Math.min(Math.floor(job.maxSteps / 2), Math.ceil(Lc / Math.max(sc.u, 1e-6)), 20000);   // at least one pass through
  const res0 = { v: null };
  const r = run(S, {
    maxSteps: job.maxSteps, tol: job.tol, every: 100, minSteps, accept: () => steady >= 2, ramp: turb && internal ? Math.min(Math.floor(job.maxSteps / 10), Math.ceil(0.5 * Lc / Math.max(sc.u, 1e-6))) : 0,
    onCheck: ({ step, res }) => {
      const w = watch();
      const dq = last === null ? Infinity : Math.abs(w.q - last) / Math.max(Math.abs(w.q), 1e-30);
      last = w.q;
      steady = dq < qTol ? steady + 1 : 0;
      if (res0.v === null && Number.isFinite(res)) res0.v = res;
      const fr = Math.max(step / job.maxSteps, res0.v && res > 0 ? Math.min(1, Math.log(res0.v / res) / Math.log(res0.v / job.tol)) : 0);
      const now = Date.now();
      if (now - lastSent > 200) { lastSent = now; onProgress({ f: 0.05 + 0.9 * Math.max(0, Math.min(1, fr)), step, res, phase: 'solve' }); }
      return false;
    },
  });
  if (r.blewUp) throw new Error(turb ? t('study.flow.err.blew_up_turb') : t('study.flow.err.blew_up'));
  const converged = r.converged;
  onProgress({ f: 0.96, phase: 'results' });
  // ---------------------------------------------------------------- results
  const st = stats();
  const { nx, ny, nz } = dom, ncell = nx * ny * nz;
  const mask = new Uint8Array(ncell), vx = new Float32Array(ncell), vy = new Float32Array(ncell), vz = new Float32Array(ncell), p = new Float32Array(ncell), nut = turb ? new Float32Array(ncell) : null;
  let vmax = 0, pmin = Infinity, pmax = -Infinity;
  for (let e = 0; e < ncell; e++) { if (dom.kind[e] >= 1) mask[e] = 2; p[e] = NaN; }
  for (let n = 0; n < lat.nf; n++) {
    const e = lat.cells[n];
    mask[e] = 1; vx[e] = S.ux[n] * cu; vy[e] = S.uy[n] * cu; vz[e] = S.uz[n] * cu;
    p[e] = pref + (S.rho[n] - 1) / 3 * cp;
    if (nut) nut[e] = S.nut[n] / sc.nu;
    vmax = Math.max(vmax, Math.hypot(vx[e], vy[e], vz[e])); pmin = Math.min(pmin, p[e]); pmax = Math.max(pmax, p[e]);
  }
  const mdot = (lm) => lm * rhoP * dx * dx * dx / sc.dt;   // lattice mass per step → kg/s
  // per opening: mass flow (+ in), mean static pressure over the fluid cells next to it
  const meanP = (gs) => { let s = 0, w = 0; const set = new Set(gs); for (let k = 0; k < L.n; k++) if (set.has(L.g[k])) { s += S.rho[L.cell[k]]; w++; } return w ? pref + (s / w - 1) / 3 * cp : NaN; };
  let massIn = 0, massOut = 0;
  const openings = [];
  if (internal) for (const o of opening) {
    const m = o.groups.reduce((s, g) => s + mdot(st.mass[g]), 0);
    if (m > 0) massIn += m; else massOut -= m;
    openings.push({ id: o.id, role: o.role, mass: m, flow: m / rhoP, p: meanP(o.groups), area: o.area, cellArea: o.cellArea, U: o.U ?? null, Q: o.Q ?? null, modes: o.modes, setP: o.p ?? null });
  } else {
    const mi = mdot(st.mass[1]), mo = mdot(st.mass[2]);
    massIn = Math.max(0, mi) + Math.max(0, mo); massOut = Math.max(0, -mi) + Math.max(0, -mo);
    openings.push({ id: 'inflow', role: 'inflow', mass: mi, flow: mi / rhoP, p: meanP([1]) }, { id: 'outflow', role: 'outflow', mass: mo, flow: mo / rhoP, p: meanP([2]) });
  }
  const wallLeak = mdot(st.mass[0]);
  const flowW = (role) => { let s = 0, w = 0; for (const o of openings) if (o.role === role && Number.isFinite(o.p)) { const wt = Math.abs(o.mass) || 1e-30; s += o.p * wt; w += wt; } return w ? s / w : NaN; };
  const dp = internal ? flowW('inlet') - flowW('outlet') : openings[0].p - openings[1].p;
  const Fscale = rhoP * dx ** 4 / (sc.dt * sc.dt);
  let force = st.force.map((v) => v * Fscale);
  // turbulent flow: the wall links' momentum exchange is not trustworthy with slip terms on them (it counts the slip's
  // momentum as force), so the force on the part comes from a momentum balance instead: −∮(p n + ρu(u·n))dA over the
  // openings (internal) or the box faces (external: inflow, outflow, frictionless slip sides); steady flow assumed
  let forceBy = 'walls';
  if (turb) {
    const f = [0, 0, 0];
    for (let k = 0; k < L.n; k++) {
      const q = L.dir[k]; if (q > 6 || !L.g[k] || (L.kind[k] !== 3 && L.kind[k] !== 4 && L.kind[k] !== 5)) continue;
      const n = L.cell[k], nv = [-CXq[q], -CYq[q], -CZq[q]], pr = (S.rho[n] - 1) / 3 * cp, u = [S.ux[n] * cu, S.uy[n] * cu, S.uz[n] * cu], un = u[0] * nv[0] + u[1] * nv[1] + u[2] * nv[2];
      for (let a = 0; a < 3; a++) f[a] -= (pr * nv[a] + rhoP * u[a] * un) * dx * dx;
    }
    force = f; forceBy = internal ? 'openings' : 'box';
  }
  let ext = null;
  if (!internal) {
    const d = job.ext.dir, l = job.ext.lift, q = 0.5 * rhoP * Uref * Uref, A = Aref * 1e-6;
    const drag = dotv(force, d), lift = dotv(force, l);
    ext = { drag, lift, cd: drag / (q * A), cl: lift / (q * A), refArea: Aref, refAuto: !job.ext.refArea, lref: Lref, dir: d, liftDir: l, q };
  }
  // Reynolds number: inlet equivalent diameter (internal) or the part's size across the flow (external)
  const Re = internal ? Math.max(...openings.filter((o) => o.role === 'inlet').map((o) => o.U * Math.sqrt(4 * o.area / Math.PI) / nuP)) : Uref * (Lref / 1000) / nuP;
  // surface pressure on the part's plot mesh
  const pm = refineMesh(job.mesh, h);
  const surfP = surfacePressure(pm, { nx, ny, nz, h, origin: dom.origin, mask, p });
  const hist = r.history.map((x) => [x.step, x.res]);
  // streamline seeds: the fluid cells next to the inlets (internal)
  const seedSet = new Set();
  if (internal) for (let k = 0; k < L.n; k++) { const G = groups[L.g[k]]; if (G && G.type === 'velocity') seedSet.add(lat.cells[L.cell[k]]); }
  const inletCells = Int32Array.from(seedSet);
  const F = { nx, ny, nz, h, origin: dom.origin, mask, vx, vy, vz, p };
  if (nut) F.nut = nut;
  // turbulence: first-cell y⁺ over the wall cells, the largest eddy-viscosity ratio, the wall shear range
  let turbOut = null;
  if (T) {
    let nr = 0; for (let n = 0; n < lat.nf; n++) nr = Math.max(nr, S.nut[n] / sc.nu);
    let tmin = Infinity, tmax = 0; for (let w = 0; w < T.wall.utau.length; w++) { const t = rhoP * (T.wall.utau[w] * cu) ** 2; tmin = Math.min(tmin, t); tmax = Math.max(tmax, t); }
    turbOut = { model: 'sa', yplus: wallStats(T), range: YPLUS_RANGE.slice(), nutMax: nr, tauWall: T.wall.utau.length ? [tmin, tmax] : null, wallCells: T.wall.utau.length };
  }
  return {
    kind: 'flow', type: job.type, converged, steps: r.steps, res: r.res, history: hist, ms: Date.now() - t0,
    model: turb ? 'sa' : 'laminar', turb: turbOut, forceBy,
    fields: F, vmax, pmin, pmax, openings, massIn, massOut, wallLeak, dp, force, ext, Re, fluid,
    lattice: { tau: sc.tau, u: sc.u, nu: sc.nu, dt: sc.dt, Reg: sc.Reg, estDrho: sc.estDrho, Lc, Dc, links: L.n },
    mesh: { fluid: c.fluid, cells: ncell, lid: c.lidCells, dropped: c.dropped || 0, h, wallLinks: dom.wallLinks, interpolated: job.wall !== 'bounce' },
    plotMesh: { positions: pm.positions, indices: pm.indices, triFace: pm.triFace }, surfP, inletCells,
  };
}

/** Static pressure at the part's surface: per vertex, sampled half a cell into the fluid along the vertex normal (trilinear over fluid cells; NaN where no fluid touches). */
export function surfacePressure(pm, F) {
  const P = pm.positions, I = pm.indices, nv = P.length / 3, nrm = new Float64Array(nv * 3), out = new Float32Array(nv);
  for (let t = 0; t < I.length; t += 3) {
    const a = 3 * I[t], b = 3 * I[t + 1], c = 3 * I[t + 2];
    const u = [P[b] - P[a], P[b + 1] - P[a + 1], P[b + 2] - P[a + 2]], w = [P[c] - P[a], P[c + 1] - P[a + 1], P[c + 2] - P[a + 2]];
    const n = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]];
    for (const v of [a, b, c]) { nrm[v] += n[0]; nrm[v + 1] += n[1]; nrm[v + 2] += n[2]; }
  }
  const { nx, ny, nz, h, origin, mask, p } = F;
  for (let v = 0; v < nv; v++) {
    const l = Math.hypot(nrm[3 * v], nrm[3 * v + 1], nrm[3 * v + 2]) || 1;
    let best = NaN;
    for (const off of [0.75, 1.25, 0.35, 1.75]) {
      const x = (P[3 * v] + off * h * nrm[3 * v] / l - origin[0]) / h - 0.5, y = (P[3 * v + 1] + off * h * nrm[3 * v + 1] / l - origin[1]) / h - 0.5, z = (P[3 * v + 2] + off * h * nrm[3 * v + 2] / l - origin[2]) / h - 0.5;
      const i = Math.floor(x), j = Math.floor(y), k = Math.floor(z), tx = x - i, ty = y - j, tz = z - k;
      let s = 0, ws = 0;
      for (let cn = 0; cn < 8; cn++) {
        const ii = i + (cn & 1), jj = j + ((cn >> 1) & 1), kk = k + ((cn >> 2) & 1);
        if (ii < 0 || jj < 0 || kk < 0 || ii >= nx || jj >= ny || kk >= nz) continue;
        const e = ii + nx * (jj + ny * kk);
        if (mask[e] !== 1) continue;
        const w = (cn & 1 ? tx : 1 - tx) * ((cn >> 1) & 1 ? ty : 1 - ty) * ((cn >> 2) & 1 ? tz : 1 - tz) + 1e-6;
        s += w * p[e]; ws += w;
      }
      if (ws > 0) { best = s / ws; break; }
    }
    out[v] = best;
  }
  return out;
}

export function flowSolve(job, ctx = { progress() {}, transfer() {} }) {
  const r = solveFlow(job, (x) => ctx.progress(x));
  const F = r.fields;
  if (F.nut) ctx.transfer(F.nut.buffer);
  ctx.transfer(F.mask.buffer, F.vx.buffer, F.vy.buffer, F.vz.buffer, F.p.buffer, r.plotMesh.positions.buffer, r.plotMesh.indices.buffer, r.plotMesh.triFace.buffer, r.surfP.buffer, r.inletCells.buffer);
  return r;
}

addOps({ flowSolve });
