/* SPDX-License-Identifier: Apache-2.0 */
/**
 * thermal.js — heat conduction, steady and transient, on a finite-element mesh, and the element routines that thermal stress and
 * linear buckling (buckling.js) share (DOM-free).
 * Units inside: mm, W, J, s, K (temperatures in °C; radiation works in kelvin). Study input is SI and converted here
 * (`SI`): k W/(m·K) ×1e-3 → W/(mm·K); flux W/m² and h W/(m²·K) ×1e-6; generation W/m³ ×1e-9 → W/mm³; ρ·cp J/(m³·K) ×1e-9.
 *
 * ── ELEMENT INTERFACE ─────────────────────────────────────────────────────────────────────────────────────────────────
 * One object per element type in ELEMENTS[type] ('h8', 'h8i' here — the voxel hexahedra; builder A adds 'tet10'). Every routine
 * gets the element's node coordinates X (Float64Array(3·npe), x y z per node in the element's own node order) and FILLS `out`
 * (it does not add to it). Material values are in the solver units above.
 *   npe                                   nodes per element; nip integration points (the stress points of geometricStiffness)
 *   conductivity(X, k, out)               out (npe×npe, row-major) = ∫ k ∇Naᵀ∇Nb dV
 *   capacity(X, rc, out, lumped)          lumped: out (npe) = a positive diagonal summing to ∫ ρc dV; else out (npe×npe) = ∫ ρc Na Nb dV
 *   heatLoad(X, Q, out)                   out (npe) = ∫ Q Na dV                       (uniform internal generation)
 *   gradient(X, Te, out)                  out (3) = ∇T at the element centre from nodal temperatures Te (npe)
 *   thermalLoad(X, E, nu, alpha, dT, out) out (3·npe, dofs x y z per node) = ∫ Bᵀ D ε_th dV, ε_th = α·ΔT(ξ)·[1 1 1 0 0 0], ΔT interpolated
 *                                         from the nodal rises dT (npe) over the stress-free temperature
 *   stressPoints(X, E, nu, ue, out, th)   out (6·nip) = σ at the integration points, Voigt [xx yy zz xy yz zx], from the element's
 *                                         displacements ue (3·npe); th null or { alpha, dT (npe) } subtracts the thermal strain
 *   geometricStiffness(X, sig, out)       sig = stressPoints' output → out (npe×npe) = ∫ ∇Naᵀ σ ∇Nb dV; the element's 3·npe geometric
 *                                         stiffness is out ⊗ I₃ (the same block for x, y and z)
 *   face: { npf, mass(Xf, out), load(Xf, out) }   a boundary facet (Xf: 3·npf coordinates): out (npf×npf) = ∫ Na Nb dA, out (npf) = ∫ Na dA
 * Voxel hexahedra are equal axis-aligned cubes, so these routines read the side from X and scale one cached unit-cube matrix.
 * h8i (incompatible modes) shares h8's thermal matrices; its stresses include the bubble modes (fea.js hexElement's corner operators,
 * interpolated trilinearly to the Gauss points — exact, since every strain of either element lies in span{1, ξ, η, ζ, ξη, ηζ, ζξ, ξηζ}).
 * h8i's thermal load includes its bubble modes' share, condensed the same way (so h8i is exact for a linear temperature field).
 *
 * ── MESH INTERFACE ────────────────────────────────────────────────────────────────────────────────────────────────────
 * What solveHeat, thermalLoadVector and buckling.js read; voxelMesh(grid) builds it for a voxel.js grid, builder A's tet mesh
 * provides the same fields:
 *   type ('h8' | 'h8i' | 'tet10'), element (= ELEMENTS[type]), nn, xyz Float64Array(3·nn), active Uint8Array(nn) (1 = used),
 *   ne, npe, conn Int32Array(ne·npe), volume (mm³),
 *   facets: { npf, nodes Int32Array(nf·npf), area Float64Array(nf) }, facetsOn(faceIdx[]) → Int32Array of facet ids on those B-rep
 *   faces (regen.faces indices), elemX(e, X) fills an element's coordinates.
 * Node numbering is the structural model's (voxel: fea.js grid nodes; 3 dofs per node there), so a temperature field drops straight
 * into a static or buckling study on the same mesh.
 *
 * Method. Galerkin FE, linear in T: K T = f with K = conduction + convection (and linearised radiation) facet terms; fixed
 * temperatures eliminated (rows and columns of the free nodes only, CSR); PCG with an incomplete Cholesky IC(0) preconditioner
 * (diagonal shift on breakdown). Radiation to surroundings (no view factors between faces): q = εσ(T⁴ − T∞⁴) written as
 * h_r(T − T∞), h_r = εσ(T² + T∞²)(T + T∞) per facet from its mean temperature, re-solved until the temperature changes < 1e-6 K
 * (successive linearisation). Transient: θ-method on (C/Δt + θK) T⁺ = (C/Δt − (1−θ)K) T + f, lumped capacity, θ 1 = implicit Euler,
 * 0.5 = Crank–Nicolson; radiation there is linearised about the previous step. Heat balance: every boundary condition's heat into
 * the part — fixed temperatures by the reaction (K T − f) at their nodes — plus generation, minus storage; the sum is the imbalance.
 */
import { applyEnv } from './env/env.js';
import * as VX from './voxel.js';
import { hexElement, elasticD, solveSmall } from './fea.js';
import { readMaterial } from './materials.js';
import { t } from './i18n.js';

export const SIGMA_SB = 5.670374419e-14;   // Stefan–Boltzmann, W/(mm²·K⁴)
export const KELVIN = 273.15;
export const SI = { k: 1e-3, flux: 1e-6, h: 1e-6, gen: 1e-9, rc: 1e-9 };

// ------------------------------------------------------------------------------------------- the voxel hexahedron
const XI = [-1, 1, 1, -1, -1, 1, 1, -1], ETA = [-1, -1, 1, 1, -1, -1, 1, 1], ZETA = [-1, -1, -1, -1, 1, 1, 1, 1];
const GQ = 1 / Math.sqrt(3);
const GPTS = [];   // 2×2×2 Gauss points, x fastest
for (const z of [-GQ, GQ]) for (const y of [-GQ, GQ]) for (const x of [-GQ, GQ]) GPTS.push([x, y, z]);
const shape = (x, y, z) => XI.map((_, a) => (1 + XI[a] * x) * (1 + ETA[a] * y) * (1 + ZETA[a] * z) / 8);
// gradients for a unit cube (h = 1: ∂/∂x = 2 ∂/∂ξ) → [8][3]
const grads = (x, y, z) => XI.map((_, a) => [XI[a] * (1 + ETA[a] * y) * (1 + ZETA[a] * z) / 4, ETA[a] * (1 + XI[a] * x) * (1 + ZETA[a] * z) / 4, ZETA[a] * (1 + XI[a] * x) * (1 + ETA[a] * y) / 4]);
const GN = GPTS.map((p) => shape(...p)), GG = GPTS.map((p) => grads(...p)), G0 = grads(0, 0, 0);
const UNIT = (() => {
  const K = new Float64Array(64), M = new Float64Array(64), TH = new Float64Array(24 * 8);
  for (let g = 0; g < 8; g++) for (let a = 0; a < 8; a++) {
    for (let b = 0; b < 8; b++) {
      K[a * 8 + b] += (GG[g][a][0] * GG[g][b][0] + GG[g][a][1] * GG[g][b][1] + GG[g][a][2] * GG[g][b][2]) / 8;
      M[a * 8 + b] += GN[g][a] * GN[g][b] / 8;
      for (let i = 0; i < 3; i++) TH[(3 * a + i) * 8 + b] += GG[g][a][i] * GN[g][b] / 8;   // ×E α h²/(1−2ν)
    }
  }
  return { K, M, TH };
})();
// h8i: the incompatible (bubble) modes' share of a thermal load, condensed like their stiffness (fea.js hexElement):
// f = Eαh²·(TH/(1−2ν) + Aᵀ Fi)·ΔT, bubbles α = A u + αh·Kii⁻¹Fi·ΔT, their stress Eα·D·Bi(p)·Kii⁻¹Fi·ΔT (h-free). Exact for a linear ΔT.
const bubCache = new Map();
function bubbleThermal(nu) {
  if (bubCache.has(nu)) return bubCache.get(nu);
  const D = elasticD(nu), c2 = 1 / (1 - 2 * nu);
  const bRow = (dN, nf) => { const B = new Float64Array(6 * 3 * nf), c = 3 * nf; dN.forEach(([dx, dy, dz], a) => { B[3 * a] = dx; B[c + 3 * a + 1] = dy; B[2 * c + 3 * a + 2] = dz; B[3 * c + 3 * a] = dy; B[3 * c + 3 * a + 1] = dx; B[4 * c + 3 * a + 1] = dz; B[4 * c + 3 * a + 2] = dy; B[5 * c + 3 * a] = dz; B[5 * c + 3 * a + 2] = dx; }); return B; };
  const dNi = (x, y, z) => [[-4 * x, 0, 0], [0, -4 * y, 0], [0, 0, -4 * z]];
  const Kii = new Float64Array(81), Kic = new Float64Array(9 * 24), Fi = new Float64Array(9 * 8);
  GPTS.forEach(([x, y, z], g) => {
    const Bi = bRow(dNi(x, y, z), 3), Bc = bRow(GG[g], 8);
    const DBi = new Float64Array(54), DBc = new Float64Array(144);
    for (let r = 0; r < 6; r++) for (let k = 0; k < 6; k++) { const d = D[r * 6 + k]; if (!d) continue; for (let j = 0; j < 9; j++) DBi[r * 9 + j] += d * Bi[k * 9 + j]; for (let j = 0; j < 24; j++) DBc[r * 24 + j] += d * Bc[k * 24 + j]; }
    for (let i = 0; i < 9; i++) {
      for (let r = 0; r < 6; r++) { const b = Bi[r * 9 + i]; if (!b) continue; for (let j = 0; j < 9; j++) Kii[i * 9 + j] += b * DBi[r * 9 + j] / 8; for (let j = 0; j < 24; j++) Kic[i * 24 + j] += b * DBc[r * 24 + j] / 8; }
      const m = (Bi[i] + Bi[9 + i] + Bi[18 + i]) * c2;
      for (let b = 0; b < 8; b++) Fi[i * 8 + b] += m * GN[g][b] / 8;
    }
  });
  const A = solveSmall(Kii, 9, Kic, 24).map((v) => -v), Gi = solveSmall(Kii, 9, Fi, 8);
  const TH = new Float64Array(24 * 8);
  for (let r = 0; r < 24; r++) for (let b = 0; b < 8; b++) { let t = UNIT.TH[r * 8 + b] * c2; for (let i = 0; i < 9; i++) t += A[i * 24 + r] * Fi[i * 8 + b]; TH[r * 8 + b] = t; }
  // stress per unit Eα at points: D·Bi(p)·Gi (6×8)
  const at = (pts) => { const out = new Float64Array(pts.length * 48); pts.forEach(([x, y, z], p) => { const Bi = bRow(dNi(x, y, z), 3); for (let r = 0; r < 6; r++) for (let b = 0; b < 8; b++) { let t = 0; for (let k = 0; k < 6; k++) { const d = D[r * 6 + k]; if (d) for (let j = 0; j < 9; j++) t += d * Bi[k * 9 + j] * Gi[j * 8 + b]; } out[p * 48 + r * 8 + b] = t; } }); return out; };
  const out = { TH, gauss: at(GPTS), points: at(XI.map((_, a) => [XI[a], ETA[a], ZETA[a]]).concat([[0, 0, 0]])) };
  bubCache.set(nu, out);
  return out;
}
/** For fea.js postprocess `thermal.corr`: the h8i bubble modes' thermal stress per unit E·α at the 8 corners and the centre (9·6·8), or null. */
export const stressCorrection = (type, nu) => (type === 'h8i' ? bubbleThermal(nu).points : null);

const side = (X) => Math.abs(X[3] - X[0]) || Math.abs(X[7] - X[1]) || Math.abs(X[14] - X[2]);
const QUAD_M = [4, 2, 1, 2, 2, 4, 2, 1, 1, 2, 4, 2, 2, 1, 2, 4];   // ∫NaNb dA on a square of area 36 (corners in cyclic order)

function hexFor(type) {
  return {
    type, npe: 8, nip: 8,
    conductivity(X, k, out) { const s = k * side(X); for (let i = 0; i < 64; i++) out[i] = s * UNIT.K[i]; return out; },
    capacity(X, rc, out, lumped) { const h = side(X), v = rc * h * h * h; if (lumped) out.fill(v / 8, 0, 8); else for (let i = 0; i < 64; i++) out[i] = v * UNIT.M[i]; return out; },
    heatLoad(X, Q, out) { const h = side(X); out.fill(Q * h * h * h / 8, 0, 8); return out; },
    gradient(X, Te, out) { const h = side(X); out[0] = out[1] = out[2] = 0; for (let a = 0; a < 8; a++) for (let i = 0; i < 3; i++) out[i] += G0[a][i] * Te[a] / h; return out; },
    thermalLoad(X, E, nu, alpha, dT, out) {
      const h = side(X), bub = type === 'h8i', s = E * alpha * h * h / (bub ? 1 : 1 - 2 * nu), M = bub ? bubbleThermal(nu).TH : UNIT.TH;
      for (let r = 0; r < 24; r++) { let t = 0; for (let b = 0; b < 8; b++) t += M[r * 8 + b] * dT[b]; out[r] = s * t; }
      return out;
    },
    stressPoints(X, E, nu, ue, out, th = null) {
      const h = side(X), S = hexElement(nu, type).S, sc = new Float64Array(48), f = E / h;
      for (let c = 0; c < 8; c++) for (let r = 0; r < 6; r++) { let t = 0; const b = c * 144 + r * 24; for (let j = 0; j < 24; j++) t += S[b + j] * ue[j]; sc[c * 6 + r] = f * t; }
      for (let g = 0; g < 8; g++) {
        let dTg = 0;
        for (let r = 0; r < 6; r++) { let t = 0; for (let c = 0; c < 8; c++) t += GN[g][c] * sc[c * 6 + r]; out[g * 6 + r] = t; }
        if (th) {
          for (let c = 0; c < 8; c++) dTg += GN[g][c] * th.dT[c];
          const st = E * th.alpha * dTg / (1 - 2 * nu); out[g * 6] -= st; out[g * 6 + 1] -= st; out[g * 6 + 2] -= st;
          if (type === 'h8i') { const C = bubbleThermal(nu).gauss; for (let r = 0; r < 6; r++) { let t = 0; for (let b = 0; b < 8; b++) t += C[g * 48 + r * 8 + b] * th.dT[b]; out[g * 6 + r] += E * th.alpha * t; } }
        }
      }
      return out;
    },
    geometricStiffness(X, sig, out) {
      const h = side(X);
      out.fill(0, 0, 64);
      for (let g = 0; g < 8; g++) {
        const s = sig.subarray ? sig.subarray(6 * g, 6 * g + 6) : sig.slice(6 * g, 6 * g + 6);
        const m = [s[0], s[3], s[5], s[3], s[1], s[4], s[5], s[4], s[2]];   // 3×3, Voigt xy yz zx
        const G = GG[g];
        for (let a = 0; a < 8; a++) {
          const t0 = m[0] * G[a][0] + m[3] * G[a][1] + m[6] * G[a][2], t1 = m[1] * G[a][0] + m[4] * G[a][1] + m[7] * G[a][2], t2 = m[2] * G[a][0] + m[5] * G[a][1] + m[8] * G[a][2];
          for (let b = 0; b < 8; b++) out[a * 8 + b] += (t0 * G[b][0] + t1 * G[b][1] + t2 * G[b][2]) * h / 8;
        }
      }
      return out;
    },
    face: {
      npf: 4,
      mass(Xf, out) { const A = quadArea(Xf); for (let i = 0; i < 16; i++) out[i] = A * QUAD_M[i] / 36; return out; },
      load(Xf, out) { out.fill(quadArea(Xf) / 4, 0, 4); return out; },
    },
  };
}
function quadArea(Xf) {   // planar quad: half the cross product of its diagonals
  const d1 = [Xf[6] - Xf[0], Xf[7] - Xf[1], Xf[8] - Xf[2]], d2 = [Xf[9] - Xf[3], Xf[10] - Xf[4], Xf[11] - Xf[5]];
  return Math.hypot(d1[1] * d2[2] - d1[2] * d2[1], d1[2] * d2[0] - d1[0] * d2[2], d1[0] * d2[1] - d1[1] * d2[0]) / 2;
}

/** Element routines by type (see ELEMENT INTERFACE above). Builder A registers 'tet10' here: ELEMENTS.tet10 = {...}. */
export const ELEMENTS = { h8: hexFor('h8'), h8i: hexFor('h8i') };

// ------------------------------------------------------------------------------------------- the voxel mesh adapter

/** A voxel.js grid (voxelized with its surface map) → the MESH INTERFACE. type 'h8i' | 'h8' (only stresses differ). */
export function voxelMesh(grid, { type = 'h8i', isSolid = null } = {}) {
  const solidAt = isSolid || ((e) => grid.solid[e] === 1);
  const ids = []; for (let e = 0; e < grid.solid.length; e++) if (solidAt(e)) ids.push(e);
  const off = VX.cornerOffsets(grid), ne = ids.length, conn = new Int32Array(ne * 8);
  ids.forEach((e, m) => { const n0 = VX.elemNode0(grid, e); for (let c = 0; c < 8; c++) conn[m * 8 + c] = n0 + off[c]; });
  const nn = (grid.nx + 1) * (grid.ny + 1) * (grid.nz + 1), xyz = new Float64Array(3 * nn);
  const NX = grid.nx + 1, NXY = NX * (grid.ny + 1);
  for (let n = 0; n < nn; n++) { const i = n % NX, j = Math.floor(n / NX) % (grid.ny + 1), k = Math.floor(n / NXY); xyz[3 * n] = grid.origin[0] + i * grid.h; xyz[3 * n + 1] = grid.origin[1] + j * grid.h; xyz[3 * n + 2] = grid.origin[2] + k * grid.h; }
  const active = VX.activeNodes(grid, solidAt);
  const surf = grid.surf;
  const quads = surf ? surf.quads : new Int32Array(0);
  return {
    type, element: ELEMENTS[type], grid, elems: Int32Array.from(ids), nn, xyz, active, ne, npe: 8, conn, volume: ne * grid.h ** 3,
    facets: { npf: 4, nodes: quads, area: new Float64Array(quads.length / 4).fill(grid.h * grid.h) },
    /** facets whose four corners all lie on the faces (the rule voxel.js faceNodes uses, so areas match the structural loads) */
    facetsOn(faceIdx) {
      if (!surf) return new Int32Array(0);
      const want = new Set(faceIdx), on = new Uint8Array(nn);
      surf.nodes.forEach((n, m) => { if (surf.faces[m].some((f) => want.has(f))) on[n] = 1; });
      const out = [];
      for (let q = 0; q < quads.length / 4; q++) if (on[quads[4 * q]] && on[quads[4 * q + 1]] && on[quads[4 * q + 2]] && on[quads[4 * q + 3]]) out.push(q);
      return Int32Array.from(out);
    },
    elemX(e, X) { for (let c = 0; c < 8; c++) { const n = conn[8 * e + c]; X[3 * c] = xyz[3 * n]; X[3 * c + 1] = xyz[3 * n + 1]; X[3 * c + 2] = xyz[3 * n + 2]; } return X; },
  };
}

const facetX = (mesh, f, Xf) => { const p = mesh.facets.npf; for (let c = 0; c < p; c++) { const n = mesh.facets.nodes[p * f + c]; Xf[3 * c] = mesh.xyz[3 * n]; Xf[3 * c + 1] = mesh.xyz[3 * n + 1]; Xf[3 * c + 2] = mesh.xyz[3 * n + 2]; } return Xf; };
export const facetsArea = (mesh, facets) => { const Xf = new Float64Array(3 * mesh.facets.npf), L = new Float64Array(mesh.facets.npf); let A = 0; for (const f of facets) { mesh.element.face.load(facetX(mesh, f, Xf), L); for (const v of L) A += v; } return A; };

// ------------------------------------------------------------------------------------------- sparse algebra

/** CSR pattern of the free nodes (free[n] ≥ 0) from element connectivity → { n, rowPtr, cols } (columns sorted, diagonal included). */
function csrPattern(mesh, free, nfree) {
  const { nn, ne, npe, conn } = mesh;
  const cnt = new Int32Array(nn + 1);
  for (let i = 0; i < ne * npe; i++) cnt[conn[i] + 1]++;
  for (let n = 0; n < nn; n++) cnt[n + 1] += cnt[n];
  const ofN = new Int32Array(ne * npe), fill = cnt.slice(0, nn);
  for (let e = 0; e < ne; e++) for (let a = 0; a < npe; a++) ofN[fill[conn[e * npe + a]]++] = e;
  const rowPtr = new Int32Array(nfree + 1), mark = new Int32Array(nfree).fill(-1), rows = [];
  let nnz = 0;
  const nodeOf = new Int32Array(nfree); for (let n = 0; n < nn; n++) if (free[n] >= 0) nodeOf[free[n]] = n;
  for (let r = 0; r < nfree; r++) {
    const n = nodeOf[r], list = [];
    for (let k = cnt[n]; k < cnt[n + 1]; k++) { const e = ofN[k]; for (let b = 0; b < npe; b++) { const c = free[conn[e * npe + b]]; if (c >= 0 && mark[c] !== r) { mark[c] = r; list.push(c); } } }
    list.sort((x, y) => x - y);
    rows.push(Int32Array.from(list)); nnz += list.length; rowPtr[r + 1] = nnz;
  }
  const cols = new Int32Array(nnz);
  rows.forEach((l, r) => cols.set(l, rowPtr[r]));
  return { n: nfree, rowPtr, cols, nodeOf };
}
function pos(P, r, c) {
  let lo = P.rowPtr[r], hi = P.rowPtr[r + 1] - 1;
  while (lo <= hi) { const m = (lo + hi) >> 1, v = P.cols[m]; if (v === c) return m; if (v < c) lo = m + 1; else hi = m - 1; }
  return -1;
}
export function csrMul(P, val, x, y) {
  const { n, rowPtr, cols } = P;
  for (let r = 0; r < n; r++) { let s = 0; for (let k = rowPtr[r]; k < rowPtr[r + 1]; k++) s += val[k] * x[cols[k]]; y[r] = s; }
  return y;
}

/** Incomplete Cholesky IC(0) on the lower part of a CSR matrix → apply(r, z); a diagonal shift is added on breakdown. */
export function ic0(P, val) {
  const { n, rowPtr, cols } = P;
  const diag = new Int32Array(n);
  for (let r = 0; r < n; r++) diag[r] = pos(P, r, r);
  let shift = 0;
  for (let attempt = 0; attempt < 8; attempt++) {
    const L = new Float64Array(val.length);   // lower entries (k ≤ diag) used
    let ok = true;
    for (let i = 0; i < n && ok; i++) {
      for (let p = rowPtr[i]; p <= diag[i]; p++) {
        const j = cols[p];
        let s = val[p] * (j === i ? 1 + shift : 1);
        // s −= Σ_{k<j} L_ik L_jk (sorted merge of rows i and j below j)
        let a = rowPtr[i], b = rowPtr[j];
        while (a < p && b < diag[j]) { const ca = cols[a], cb = cols[b]; if (ca === cb) { s -= L[a] * L[b]; a++; b++; } else if (ca < cb) a++; else b++; }
        if (j === i) { if (!(s > 0)) { ok = false; break; } L[p] = Math.sqrt(s); } else L[p] = s / L[diag[j]];
      }
    }
    if (ok) {
      const y = new Float64Array(n);
      return {
        shift,
        apply(r, z) {
          for (let i = 0; i < n; i++) { let s = r[i]; for (let p = rowPtr[i]; p < diag[i]; p++) s -= L[p] * y[cols[p]]; y[i] = s / L[diag[i]]; }
          z.set(y);
          for (let i = n - 1; i >= 0; i--) { z[i] /= L[diag[i]]; const zi = z[i]; for (let p = rowPtr[i]; p < diag[i]; p++) z[cols[p]] -= L[p] * zi; }
          return z;
        },
      };
    }
    shift = shift ? shift * 4 : 1e-3;
  }
  const inv = Float64Array.from(diag, (d) => 1 / val[d]);   // Jacobi as the last resort
  return { shift: Infinity, apply(r, z) { for (let i = 0; i < n; i++) z[i] = r[i] * inv[i]; return z; } };
}

/** PCG on CSR → { x, iterations, residual, converged }. */
export function csrPcg(P, val, b, { x0 = null, tol = 1e-10, maxIter = 0, prec = null, cancelled = null } = {}) {
  const n = P.n, M = prec || ic0(P, val);
  const x = x0 ? Float64Array.from(x0) : new Float64Array(n), r = new Float64Array(n), z = new Float64Array(n), p = new Float64Array(n), q = new Float64Array(n);
  let bn = 0; for (let i = 0; i < n; i++) bn += b[i] * b[i];
  bn = Math.sqrt(bn);
  if (bn === 0) return { x: new Float64Array(n), iterations: 0, residual: 0, converged: true };
  csrMul(P, val, x, q);
  for (let i = 0; i < n; i++) r[i] = b[i] - q[i];
  M.apply(r, z); p.set(z);
  let rz = 0; for (let i = 0; i < n; i++) rz += r[i] * z[i];
  const cap = maxIter || Math.max(1000, 10 * Math.round(Math.cbrt(n)) * 10);
  let it = 0, res = 1;
  for (; it < cap; it++) {
    let rn = 0; for (let i = 0; i < n; i++) rn += r[i] * r[i];
    res = Math.sqrt(rn) / bn;
    if (res < tol) break;
    if (cancelled && (it & 31) === 0 && cancelled()) throw new Error('Cancelled');
    csrMul(P, val, p, q);
    let pq = 0; for (let i = 0; i < n; i++) pq += p[i] * q[i];
    if (!(pq > 0)) break;
    const a = rz / pq;
    for (let i = 0; i < n; i++) { x[i] += a * p[i]; r[i] -= a * q[i]; }
    M.apply(r, z);
    let rz2 = 0; for (let i = 0; i < n; i++) rz2 += r[i] * z[i];
    const beta = rz2 / rz; rz = rz2;
    for (let i = 0; i < n; i++) p[i] = z[i] + beta * p[i];
  }
  return { x, iterations: it, residual: res, converged: res < tol };
}

// ------------------------------------------------------------------------------------------- the heat problem

export const HEAT_BC_TYPES = ['temperature', 'flux', 'power', 'convection', 'radiation'];

/**
 * Steady or transient conduction on a mesh (MESH INTERFACE), solver units.
 * opts { k, rc (ρ·cp, transient only), gen (W/mm³, whole body), bcs: [{ type 'temperature' T | 'flux' q (W/mm², into the part) |
 *   'power' P (W, into the part) | 'convection' h, Tamb | 'radiation' eps, Tamb, facets: Int32Array, scale (true area ÷ mesh area,
 *   default 1) }], transient: null | { T0, t (s), steps, theta (1 | 0.5) }, frames (max stored transient frames, 51), frameSteps
 *   (instead: the step numbers to store, 0 = the start), tol 1e-10,
 *   onProgress(f, text), cancelled() }
 * → { T Float64Array(nn) (NaN off the mesh), iterations, residual, converged, radiation {iterations, converged} | null,
 *     balance {items: [W into the part per bc], gen, stored, inflow, outflow, imbalance}, frames [Float64Array], times, fixedNodes }
 */
export function solveHeat(mesh, opts) {
  const { k, gen = 0, bcs = [], transient = null, tol = 1e-10, onProgress = null, cancelled = null } = opts;
  const { nn, ne, npe, element: el, active } = mesh;
  const npf = mesh.facets.npf;
  // fixed temperatures (a node on two temperature faces takes their mean)
  const Tsum = new Float64Array(nn), Tcnt = new Uint16Array(nn), fixOwner = new Int32Array(nn).fill(-1);
  bcs.forEach((bc, i) => {
    if (bc.type !== 'temperature') return;
    const seen = new Set();
    for (const f of bc.facets) for (let c = 0; c < npf; c++) seen.add(mesh.facets.nodes[npf * f + c]);
    for (const n of seen) { Tsum[n] += bc.T; Tcnt[n]++; fixOwner[n] = i; }
  });
  const free = new Int32Array(nn).fill(-1);
  let nfree = 0;
  const Tfix = new Float64Array(nn);
  for (let n = 0; n < nn; n++) { if (!active[n]) continue; if (Tcnt[n]) Tfix[n] = Tsum[n] / Tcnt[n]; else free[n] = nfree++; }
  const fixedNodes = []; for (let n = 0; n < nn; n++) if (active[n] && Tcnt[n]) fixedNodes.push(n);
  const steady = !transient;
  const hasSink = bcs.some((b) => b.type === 'temperature' || b.type === 'convection' || b.type === 'radiation');
  if (steady && !hasSink) throw new Error(t('study.thermal.problem.no_sink'));
  if (onProgress) onProgress(0, 'Assembling');
  const P = csrPattern(mesh, free, nfree);
  const Kv = new Float64Array(P.cols.length), fBase = new Float64Array(nfree);
  const X = new Float64Array(3 * npe), Ke = new Float64Array(npe * npe), fe = new Float64Array(npe), Xf = new Float64Array(3 * npf), Mf = new Float64Array(npf * npf), Lf = new Float64Array(npf);
  const Cl = new Float64Array(nn);   // lumped capacity (all nodes, for the balance)
  const genN = new Float64Array(nn);
  for (let e = 0; e < ne; e++) {
    mesh.elemX(e, X);
    el.conductivity(X, k, Ke);
    if (gen) el.heatLoad(X, gen, fe);
    if (transient) { const ce = new Float64Array(npe); el.capacity(X, opts.rc, ce, true); for (let a = 0; a < npe; a++) Cl[mesh.conn[e * npe + a]] += ce[a]; }
    for (let a = 0; a < npe; a++) {
      const na = mesh.conn[e * npe + a], ra = free[na];
      if (gen) genN[na] += fe[a];
      if (ra < 0) continue;
      if (gen) fBase[ra] += fe[a];
      for (let b = 0; b < npe; b++) {
        const nb = mesh.conn[e * npe + b], cb = free[nb];
        if (cb >= 0) Kv[pos(P, ra, cb)] += Ke[a * npe + b]; else fBase[ra] -= Ke[a * npe + b] * Tfix[nb];
      }
    }
  }
  // boundary facets: flux / power loads, convection matrices (radiation added per linearisation)
  const itemLoad = bcs.map(() => null);   // per bc: Float64Array(nn) of ∫N q (flux, power) — fixed for the run
  bcs.forEach((bc, i) => {
    const s = bc.scale || 1;
    if (bc.type === 'flux' || bc.type === 'power') {
      const v = new Float64Array(nn);
      let A = 0;
      for (const f of bc.facets) { el.face.load(facetX(mesh, f, Xf), Lf); for (let c = 0; c < npf; c++) A += Lf[c]; }
      const q = bc.type === 'flux' ? bc.q * s : (A > 0 ? bc.P / A : 0);
      for (const f of bc.facets) { el.face.load(facetX(mesh, f, Xf), Lf); for (let c = 0; c < npf; c++) v[mesh.facets.nodes[npf * f + c]] += q * Lf[c]; }
      for (let n = 0; n < nn; n++) if (v[n] && free[n] >= 0) fBase[free[n]] += v[n];
      itemLoad[i] = v;
    }
  });
  // a facet matrix h·M (+ h·T∞·load) into values / rhs
  const addFacet = (val, rhs, f, hh, Tamb) => {
    facetX(mesh, f, Xf); el.face.mass(Xf, Mf); el.face.load(Xf, Lf);
    for (let a = 0; a < npf; a++) {
      const na = mesh.facets.nodes[npf * f + a], ra = free[na];
      if (ra < 0) continue;
      rhs[ra] += hh * Tamb * Lf[a];
      for (let b = 0; b < npf; b++) {
        const nb = mesh.facets.nodes[npf * f + b], cb = free[nb];
        if (cb >= 0) val[pos(P, ra, cb)] += hh * Mf[a * npf + b]; else rhs[ra] -= hh * Mf[a * npf + b] * Tfix[nb];
      }
    }
  };
  bcs.forEach((bc) => { if (bc.type === 'convection') for (const f of bc.facets) addFacet(Kv, fBase, f, bc.h * (bc.scale || 1), bc.Tamb); });
  const rad = bcs.map((bc, i) => (bc.type === 'radiation' ? i : -1)).filter((i) => i >= 0);
  const hr = rad.map((i) => new Float64Array(bcs[i].facets.length));
  const facetMeanT = (T, f) => { let s = 0; for (let c = 0; c < npf; c++) s += T[mesh.facets.nodes[npf * f + c]]; return s / npf; };
  const updateHr = (T) => rad.forEach((i, j) => { const bc = bcs[i], Ta = bc.Tamb + KELVIN; bc.facets.forEach((f, m) => { const Tf = facetMeanT(T, f) + KELVIN; hr[j][m] = bc.eps * SIGMA_SB * (Tf * Tf + Ta * Ta) * (Tf + Ta) * (bc.scale || 1); }); });
  const withRad = (val, rhs) => rad.forEach((i, j) => { const bc = bcs[i]; bc.facets.forEach((f, m) => addFacet(val, rhs, f, hr[j][m], bc.Tamb)); });
  const full = (x) => { const T = new Float64Array(nn).fill(NaN); for (let n = 0; n < nn; n++) if (active[n]) T[n] = free[n] >= 0 ? x[free[n]] : Tfix[n]; return T; };
  // a sensible start for the radiation linearisation: fixed temperatures' mean, else the surroundings'
  const guess = fixedNodes.length ? fixedNodes.reduce((s, n) => s + Tfix[n], 0) / fixedNodes.length : (bcs.find((b) => b.Tamb !== undefined) || { Tamb: 20 }).Tamb;
  let T, iterations = 0, residual = 0, converged = true, radInfo = null;
  const frames = [], times = [];
  if (steady) {
    let x = null;
    if (rad.length) {
      let Tcur = full(new Float64Array(nfree).fill(guess));
      let it = 0, change = Infinity;
      for (; it < 60 && change > 1e-6; it++) {
        updateHr(Tcur);
        const val = Float64Array.from(Kv), rhs = Float64Array.from(fBase);
        withRad(val, rhs);
        const sol = csrPcg(P, val, rhs, { x0: x, tol, cancelled });
        iterations += sol.iterations; residual = sol.residual; converged = converged && sol.converged;
        const Tn = full(sol.x);
        change = 0; for (let n = 0; n < nn; n++) if (active[n]) change = Math.max(change, Math.abs(Tn[n] - Tcur[n]));
        Tcur = Tn; x = sol.x;
        // i18n-ignore: progress labels never reach the screen (the workers pass on only the fraction)
        if (onProgress) onProgress(Math.min(0.95, (it + 1) / 15), `Radiation: pass ${it + 1}, change ${change.toExponential(1)} K`);
      }
      radInfo = { iterations: it, converged: change <= 1e-6, change };
      updateHr(Tcur);   // the balance uses the h_r of the final temperatures
      T = Tcur;
    } else {
      if (onProgress) onProgress(0.1, 'Solving');
      const sol = csrPcg(P, Kv, fBase, { tol, cancelled });
      iterations = sol.iterations; residual = sol.residual; converged = sol.converged;
      T = full(sol.x);
    }
  } else {
    const { T0, t, steps, theta = 1 } = transient, dt = t / steps, maxFrames = opts.frames || 51;
    const every = Math.max(1, Math.ceil(steps / (maxFrames - 1)));
    // frameSteps: the step numbers to store (0 = the start) instead of every `every`-th (thermal-history.js: one per stress solve)
    const want = opts.frameSteps ? new Set(opts.frameSteps) : null, keep = (s) => (want ? want.has(s) : s % every === 0 || s === steps);
    const last = want ? Math.min(steps, Math.max(0, ...want)) : steps;   // no need to step past the last stored frame
    let x = new Float64Array(nfree).fill(T0);
    T = full(x); if (!want || want.has(0)) { frames.push(Float64Array.from(T)); times.push(0); }
    let prevT = T, A = null, Ka = null, prec = null;
    const C = new Float64Array(nfree); for (let n = 0; n < nn; n++) if (free[n] >= 0) C[free[n]] = Cl[n];
    const diagPos = new Int32Array(nfree); for (let r = 0; r < nfree; r++) diagPos[r] = pos(P, r, r);
    const tmp = new Float64Array(nfree);
    radInfo = rad.length ? { iterations: steps, converged: true, linearised: 'about the previous step' } : null;   // i18n-ignore: a data note, never shown
    let fa = fBase;
    for (let s = 1; s <= last; s++) {
      if (cancelled && cancelled()) throw new Error('Cancelled');
      if (!A || rad.length) {
        Ka = Float64Array.from(Kv); fa = Float64Array.from(fBase);
        if (rad.length) { updateHr(T); withRad(Ka, fa); }
        A = new Float64Array(Ka.length);
        for (let i = 0; i < Ka.length; i++) A[i] = theta * Ka[i];
        for (let r = 0; r < nfree; r++) A[diagPos[r]] += C[r] / dt;
        prec = ic0(P, A);
      }
      csrMul(P, Ka, x, tmp);
      const rhs = new Float64Array(nfree);
      for (let r = 0; r < nfree; r++) rhs[r] = C[r] / dt * x[r] - (1 - theta) * tmp[r] + fa[r];
      const sol = csrPcg(P, A, rhs, { x0: x, tol, prec, cancelled });
      iterations += sol.iterations; residual = Math.max(residual, sol.residual); converged = converged && sol.converged;
      prevT = T; x = sol.x; T = full(x);
      if (keep(s)) { frames.push(Float64Array.from(T)); times.push(s * dt); }
      if (onProgress) onProgress(s / last, `Time step ${s} of ${last}`);   // i18n-ignore: progress label, never shown (the workers pass on only the fraction)
    }
    // the balance of the last step: fluxes at T_θ = θT⁺ + (1−θ)T, storage C (T⁺ − T)/Δt
    const Tth = new Float64Array(nn); for (let n = 0; n < nn; n++) Tth[n] = theta * T[n] + (1 - theta) * prevT[n];
    const stored = new Float64Array(nn); for (let n = 0; n < nn; n++) if (active[n] && free[n] >= 0) stored[n] = Cl[n] * (T[n] - prevT[n]) / dt;
    if (rad.length) updateHr(prevT);
    return { T, iterations, residual, converged, radiation: radInfo, balance: balanceOf(Tth, stored), frames, times, fixedNodes: Int32Array.from(fixedNodes), nfree };
  }
  return { T, iterations, residual, converged, radiation: radInfo, balance: balanceOf(T, null), frames, times, fixedNodes: Int32Array.from(fixedNodes), nfree };

  /** Heat into the part per boundary condition (W), generation, storage, and what is left over. */
  function balanceOf(Tb, stored) {
    const items = bcs.map(() => 0), KT = new Float64Array(nn), into = new Float64Array(nn);   // into: all non-fixed heat entering each node
    for (let e = 0; e < ne; e++) {
      mesh.elemX(e, X); el.conductivity(X, k, Ke);
      for (let a = 0; a < npe; a++) { let s = 0; for (let b = 0; b < npe; b++) s += Ke[a * npe + b] * Tb[mesh.conn[e * npe + b]]; KT[mesh.conn[e * npe + a]] += s; }
    }
    let Qgen = 0; for (let n = 0; n < nn; n++) { Qgen += genN[n]; into[n] += genN[n]; }
    const facetIn = (f, hh, Tamb, i) => {
      facetX(mesh, f, Xf); el.face.mass(Xf, Mf); el.face.load(Xf, Lf);
      for (let a = 0; a < npf; a++) {
        const na = mesh.facets.nodes[npf * f + a];
        let q = hh * Tamb * Lf[a]; for (let b = 0; b < npf; b++) q -= hh * Mf[a * npf + b] * Tb[mesh.facets.nodes[npf * f + b]];
        into[na] += q; items[i] += q;
      }
    };
    bcs.forEach((bc, i) => {
      if (itemLoad[i]) { for (let n = 0; n < nn; n++) if (itemLoad[i][n]) { into[n] += itemLoad[i][n]; items[i] += itemLoad[i][n]; } }
      else if (bc.type === 'convection') for (const f of bc.facets) facetIn(f, bc.h * (bc.scale || 1), bc.Tamb, i);
    });
    rad.forEach((i, j) => bcs[i].facets.forEach((f, m) => facetIn(f, hr[j][m], bcs[i].Tamb, i)));
    // fixed temperatures supply what the conduction there needs beyond the rest (storage at fixed nodes is not counted: they are held)
    for (const n of fixedNodes) items[fixOwner[n]] += KT[n] - into[n];
    let St = 0; if (stored) for (let n = 0; n < nn; n++) St += stored[n];
    let inflow = Math.max(0, Qgen), outflow = Math.max(0, -Qgen);
    for (const q of items) { if (q > 0) inflow += q; else outflow -= q; }
    return { items, gen: Qgen, stored: St, inflow, outflow, imbalance: inflow - outflow - St };
  }
}

/** Element-centre heat flux q = −k∇T (W/mm²) and its nodal average (3 per node; NaN off the mesh). */
export function heatFlux(mesh, T, k) {
  const { ne, npe, nn, el = mesh.element } = mesh;
  const X = new Float64Array(3 * npe), Te = new Float64Array(npe), g = new Float64Array(3), elem = new Float64Array(3 * ne), node = new Float64Array(3 * nn), cnt = new Uint16Array(nn);
  let max = 0, maxAt = -1;
  for (let e = 0; e < ne; e++) {
    mesh.elemX(e, X);
    for (let a = 0; a < npe; a++) Te[a] = T[mesh.conn[e * npe + a]];
    el.gradient(X, Te, g);
    for (let i = 0; i < 3; i++) elem[3 * e + i] = -k * g[i];
    const m = Math.hypot(elem[3 * e], elem[3 * e + 1], elem[3 * e + 2]); if (m > max) { max = m; maxAt = e; }
    for (let a = 0; a < npe; a++) { const n = mesh.conn[e * npe + a]; for (let i = 0; i < 3; i++) node[3 * n + i] += elem[3 * e + i]; cnt[n]++; }
  }
  for (let n = 0; n < nn; n++) for (let i = 0; i < 3; i++) node[3 * n + i] = cnt[n] ? node[3 * n + i] / cnt[n] : NaN;
  return { elem, node, max, maxElem: maxAt };
}

/** The structural load of a temperature rise: f (3 per node) = Σ ∫ Bᵀ D ε_th dV. dT: nodal rise over the stress-free temperature (nn). */
export function thermalLoadVector(mesh, { E, nu, alpha }, dT, scale = null) {
  const { ne, npe, nn, element: el } = mesh, f = new Float64Array(3 * nn);
  const X = new Float64Array(3 * npe), te = new Float64Array(npe), fe = new Float64Array(3 * npe);
  for (let e = 0; e < ne; e++) {
    mesh.elemX(e, X);
    for (let a = 0; a < npe; a++) te[a] = dT[mesh.conn[e * npe + a]];
    el.thermalLoad(X, E * (scale ? scale[e] : 1), nu, alpha, te, fe);
    for (let a = 0; a < npe; a++) { const n = mesh.conn[e * npe + a]; f[3 * n] += fe[3 * a]; f[3 * n + 1] += fe[3 * a + 1]; f[3 * n + 2] += fe[3 * a + 2]; }
  }
  return f;
}

// ------------------------------------------------------------------------------------------- the whole thermal job

/**
 * A heat bc list from a job (face indices, SI values) → solver bcs on this mesh. exactArea: regen face areas (scale = true ÷ mesh area,
 * as structural pressures do, so a curved face's staircase does not inflate the heat it exchanges).
 */
export function heatBCs(mesh, heat, exactArea = null) {
  return heat.map((it) => {
    const facets = mesh.facetsOn(it.faces);
    if (!facets.length) throw new Error(t('study.thermal.bc_no_faces.' + it.type));
    const A = facetsArea(mesh, facets), At = exactArea ? it.faces.reduce((s, fi) => s + (exactArea[fi] || 0), 0) : 0;
    const scale = At > 0 && A > 0 ? At / A : 1;
    const bc = { type: it.type, facets, scale, meshArea: A, area: At || A };
    if (it.type === 'temperature') bc.T = it.T;
    if (it.type === 'flux') bc.q = it.q * SI.flux;
    if (it.type === 'power') bc.P = it.P;
    if (it.type === 'convection') { bc.h = it.h * SI.h; bc.Tamb = it.Tamb; }
    if (it.type === 'radiation') { bc.eps = it.eps; bc.Tamb = it.Tamb; }
    return bc;
  });
}

/** A solved temperature field's summary: min / max with where, the flux maximum (W/m²). */
export function heatSummary(mesh, T, flux) {
  let lo = Infinity, hi = -Infinity, loN = -1, hiN = -1;
  for (let n = 0; n < mesh.nn; n++) { if (!mesh.active[n]) continue; if (T[n] < lo) { lo = T[n]; loN = n; } if (T[n] > hi) { hi = T[n]; hiN = n; } }
  const at = (n) => (n >= 0 ? [mesh.xyz[3 * n], mesh.xyz[3 * n + 1], mesh.xyz[3 * n + 2]] : null);
  return { minT: { value: lo, at: at(loN) }, maxT: { value: hi, at: at(hiN) }, maxFlux: flux ? flux.max / SI.flux : 0 };
}

/** The material's thermal values in solver units, or throws naming what is missing. */
export function thermalMaterial(m, { transient = false, expansion = false } = {}) {
  const mat = readMaterial(m);
  const miss = [!(mat.k > 0) && t('study.thermal.mat.k'), transient && !(mat.cp > 0) && t('study.thermal.mat.cp'), expansion && !(mat.alpha >= 0) && t('study.thermal.mat.alpha')].filter(Boolean);
  if (miss.length) throw new Error(t('study.thermal.mat.missing', { what: miss.reduce((a, b) => t('study.thermal.mat.or', { a, b })) }));
  return { mat, k: mat.k * SI.k, rc: mat.cp > 0 ? mat.density * mat.cp * SI.rc : 0 };
}

/** The job's heat problem on a voxel grid (already voxelized, with its surface map) → solveHeat's result plus mesh, flux, summary. */
export function heatOnGrid(job, grid, onProgress = null, cancelled = null, { steadyOnly = false, frameSteps = null } = {}) {
  return heatOnMesh(job, voxelMesh(grid, { type: job.elem || 'h8i' }), { steadyOnly, frameSteps, onProgress, cancelled });
}

/** The job's heat problem on any mesh (MESH INTERFACE: voxel or tet) → { mat, mesh, bcs, res, flux, summary }. frameSteps: solveHeat's. */
export function heatOnMesh(job, mesh, { steadyOnly = false, frameSteps = null, onProgress = null, cancelled = null } = {}) {
  const tr = !steadyOnly && job.transient ? job.transient : null;
  const { mat, k, rc } = thermalMaterial(job.material, { transient: !!tr });
  const exactArea = job.faces ? job.faces.map((f) => f.area || 0) : null;
  const bcs = heatBCs(mesh, job.heat || [], exactArea);
  const res = solveHeat(mesh, { k, rc, gen: (job.gen || 0) * SI.gen, bcs, transient: tr, frameSteps, onProgress, cancelled });
  if (!res.converged) throw new Error(t('study.thermal.solve.not_converged', { residual: res.residual.toExponential(1), n: res.iterations }));
  if (res.radiation && res.radiation.converged === false) throw new Error(t('study.thermal.solve.radiation_unsettled', { change: res.radiation.change.toExponential(1), n: res.radiation.iterations }));
  const flux = heatFlux(mesh, res.T, k);
  return { mat, mesh, bcs, res, flux, summary: heatSummary(mesh, res.T, flux) };
}

/** A whole thermal study (job: sim.js simJob with kind 'thermal'), pure; the worker calls it. */
export function solveThermalStudy(job, onProgress = () => {}, cancelled = null) {
  job = applyEnv(job);   // EG.32: the environment fills gravity, gauge pressure and ambient temperature (env/env.js)
  const t0 = Date.now();
  onProgress(0, 'Building the voxel mesh');   // i18n-ignore: progress label, never shown (the workers pass on only the fraction)
  const grid = VX.voxelize(job.mesh, { h: job.h });
  if (!grid.count) throw new Error(t('study.thermal.solve.no_elements'));
  const h = heatOnGrid(job, grid, onProgress, cancelled);
  const nodes = h.mesh.active.reduce((s, a) => s + a, 0);
  const summary = { elements: h.mesh.ne, nodes, dofs: h.res.nfree, h: grid.h, nx: grid.nx, ny: grid.ny, nz: grid.nz, oddRows: grid.oddRows, volume: h.mesh.volume, mass: h.mesh.volume * h.mat.density * 1e-9 };
  return {
    kind: 'thermal', transient: !!job.transient, summary, material: h.mat, T: h.res.T, flux: h.flux, ...h.summary,
    balance: h.res.balance, bcAreas: h.bcs.map((b) => ({ area: b.area, meshArea: b.meshArea })), iterations: h.res.iterations, residual: h.res.residual,
    radiation: h.res.radiation, frames: h.res.frames, times: h.res.times, model: { grid, active: h.mesh.active }, grid, mesh: h.mesh, ms: Date.now() - t0,
  };
}
