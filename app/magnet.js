/* SPDX-License-Identifier: Apache-2.0 */
/**
 * magnet.js — 2-D magnetostatics with permanent magnets and saturating steel (SG.7+). DOM-free; SI units (m, A, T, Wb/m,
 * J/m per metre of depth) like the CraftScript library `magnetostatic2d`, which stays the quick linear tool.
 *
 * Formulation: currents along z, A = A_z(x, y), B = (∂A/∂y, −∂A/∂x), H = ν(|B|²)·(B − Br) (Br = the remanent flux
 * density of a magnet on its straight recoil line, zero elsewhere). The weak form of ∇×H = J is
 *   ∫ ν(|∇A|²) ∇A·∇N dA = ∫ J N dA + ∫ ν Br·(∂N/∂y, −∂N/∂x) dA,
 * solved on linear triangles (one B per element) by Newton–Raphson with the exact tangent
 * ν I + 2 ν' ∇A⊗∇A (ν' = dν/d|B|², Silvester & Ferrari, Finite Elements for Electrical Engineers, 3rd ed., ch. 3 and 6;
 * for magnets N. Bianchi, Electrical Machine Analysis Using Finite Elements, CRC, 2005 ch. 1), the linear systems by a banded
 * Cholesky factorisation (nodes in the mesh's own order, so `gridMesh` keeps the band at one grid row).
 * Materials: `linear(μr)`, `brauer({ k1, k2, k3 })` (ν = k1·exp(k2·B²) + k3, W. Brauer's saturation fit, the parameters are
 * the user's) and `table([[B, H], …])` (a measured B–H curve, a monotone cubic through the points, extended linearly past the
 * last at the vacuum slope μ0 — it never goes soft). The curve must rise; `table` refuses one that does not.
 * Forces and torque: the Maxwell stress tensor T = (B⊗B − ½|B|²I)/μ0 integrated round the boundary of a set of elements
 * that lies in air (`maxwell`): F = ∮ T n dl, torque about the origin τ = ∮ (x t_y − y t_x) dl, B on an edge the mean of the
 * two elements that share it. Energy ½∫ B·H' per depth with the co-energy of the magnet term left out: use forces for design.
 * Limits: planar only (no axisymmetric or 3-D yet), static, no eddy currents or hysteresis, magnets linear (no
 * demagnetisation knee), a force from an integral round a contour that crosses the mesh's coarse parts is only as good as
 * the mesh there (use two contours and compare).
 */
export const MU0 = 4e-7 * Math.PI;

/** A tensor-product triangle mesh from grid lines xs, ys (each strictly increasing) → { nodes (x, y per node), tris, nx, ny }. */
export function gridMesh(xs, ys) {
  const nx = xs.length, ny = ys.length, nodes = new Float64Array(2 * nx * ny), tris = [];
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) { nodes[2 * (i + nx * j)] = xs[i]; nodes[2 * (i + nx * j) + 1] = ys[j]; }
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const a = i + nx * j, b = a + 1, c = a + nx, d = c + 1;
    if ((i + j) % 2 === 0) tris.push(a, b, d, a, d, c); else tris.push(a, b, c, b, d, c);
  }
  return { nodes, tris: Int32Array.from(tris), nx, ny };
}
/** Grid lines from lo to hi with spacing h0 at `focus` growing by `grow` per cell away from it (a graded axis). */
export function gradedAxis(lo, hi, focus, h0, grow = 1.15, hMax = Infinity) {
  const pts = new Set([focus]);
  for (const dir of [1, -1]) { let x = focus, h = h0; for (;;) { x += dir * h; if (dir > 0 ? x >= hi : x <= lo) break; pts.add(x); h = Math.min(hMax, h * grow); } }
  pts.add(lo); pts.add(hi);
  return [...pts].sort((a, b) => a - b).filter((v, i, a) => i === 0 || v - a[i - 1] > 1e-12);
}

/** Grid lines from lo to hi: spacing h0 inside [z0, z1] (nodes on both ends), growing by `grow` per cell outside it up to hMax. */
export function gradedZone(lo, hi, z0, z1, h0, grow = 1.15, hMax = Infinity) {
  const pts = new Set(), nz = Math.max(1, Math.round((z1 - z0) / h0));
  for (let i = 0; i <= nz; i++) pts.add(z0 + (z1 - z0) * i / nz);
  for (const [x0, dir] of [[z1, 1], [z0, -1]]) { let x = x0, h = h0; for (;;) { x += dir * h; if (dir > 0 ? x >= hi : x <= lo) break; pts.add(x); h = Math.min(hMax, h * grow); } }
  pts.add(lo); pts.add(hi);
  return [...pts].sort((a, b) => a - b).filter((v, i, a) => i === 0 || v - a[i - 1] > 1e-9 * (hi - lo));
}

// ---------------------------------------------------------------------------------------------------- materials

export const linear = (mur = 1) => ({ nu: () => 1 / (MU0 * mur), dnu: () => 0, mur });
export const brauer = ({ k1, k2, k3 }) => ({ nu: (b2) => k1 * Math.exp(k2 * b2) + k3, dnu: (b2) => k1 * k2 * Math.exp(k2 * b2) });
/** A measured curve: points [[B (T), H (A/m)], …] with B and H rising; ν(B²) = H(B)/B through a monotone cubic (Fritsch–Carlson). */
export function table(points) {
  const P = [[0, 0], ...points.filter((p) => p[0] > 0)].sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < P.length; i++) if (!(P[i][0] > P[i - 1][0] && P[i][1] > P[i - 1][1])) throw new Error('B–H table: B and H must both rise');   // i18n-ignore: internal check
  const n = P.length, dx = [], sl = [];
  for (let i = 0; i < n - 1; i++) { dx.push(P[i + 1][0] - P[i][0]); sl.push((P[i + 1][1] - P[i][1]) / dx[i]); }
  const m = new Array(n);
  m[0] = sl[0]; m[n - 1] = sl[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = sl[i - 1] * sl[i] <= 0 ? 0 : 2 * sl[i - 1] * sl[i] / (sl[i - 1] + sl[i]);
  for (let i = 0; i < n - 1; i++) {   // keep it monotone
    if (sl[i] === 0) { m[i] = m[i + 1] = 0; continue; }
    const a = m[i] / sl[i], b = m[i + 1] / sl[i], s = a * a + b * b;
    if (s > 9) { const t = 3 / Math.sqrt(s); m[i] = t * a * sl[i]; m[i + 1] = t * b * sl[i]; }
  }
  const Bs = P[n - 1][0], Hs = P[n - 1][1];
  // H(B) and dH/dB
  const HB = (B) => {
    if (B >= Bs) return { h: Hs + (B - Bs) / MU0, d: 1 / MU0 };
    let lo = 0, hi = n - 2; while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (P[mid][0] <= B) lo = mid; else hi = mid - 1; }
    const h = dx[lo], t = (B - P[lo][0]) / h, t2 = t * t, t3 = t2 * t;
    const h00 = 2 * t3 - 3 * t2 + 1, h10 = t3 - 2 * t2 + t, h01 = -2 * t3 + 3 * t2, h11 = t3 - t2;
    const val = h00 * P[lo][1] + h10 * h * m[lo] + h01 * P[lo + 1][1] + h11 * h * m[lo + 1];
    const d = ((6 * t2 - 6 * t) * P[lo][1] + (3 * t2 - 4 * t + 1) * h * m[lo] + (-6 * t2 + 6 * t) * P[lo + 1][1] + (3 * t2 - 2 * t) * h * m[lo + 1]) / h;
    return { h: val, d };
  };
  const mu0 = MU0, nu0 = P[1][1] / P[1][0];   // the first segment's slope for B → 0
  return {
    nu: (b2) => { const B = Math.sqrt(b2); return B < 1e-9 ? sl[0] : HB(B).h / B; },
    dnu: (b2) => { const B = Math.sqrt(b2); if (B < 1e-9) return 0; const { h, d } = HB(B); return (d / B - h / (B * B)) / (2 * B); },
    H: (B) => HB(B).h, mu0, nu0,
  };
}

// ---------------------------------------------------------------------------------------------------- banded Cholesky

function bandSolve(K, n, bw, rhs) {
  const w = bw + 1;
  const L = K;   // in place: lower band, L[i*w + (j − i + bw)]
  for (let i = 0; i < n; i++) {
    const j0 = Math.max(0, i - bw);
    for (let j = j0; j <= i; j++) {
      let s = L[i * w + (j - i + bw)];
      for (let k = Math.max(j0, j - bw); k < j; k++) s -= L[i * w + (k - i + bw)] * L[j * w + (k - j + bw)];
      if (i === j) { if (!(s > 0)) throw new Error('magnetostatic matrix is not positive definite (is some node left floating? fix A on the outer boundary)'); L[i * w + bw] = Math.sqrt(s); }   // i18n-ignore: internal check
      else L[i * w + (j - i + bw)] = s / L[j * w + bw];
    }
  }
  const y = Float64Array.from(rhs);
  for (let i = 0; i < n; i++) { let s = y[i]; for (let k = Math.max(0, i - bw); k < i; k++) s -= L[i * w + (k - i + bw)] * y[k]; y[i] = s / L[i * w + bw]; }
  for (let i = n - 1; i >= 0; i--) { let s = y[i]; for (let k = i + 1; k <= Math.min(n - 1, i + bw); k++) s -= L[k * w + (i - k + bw)] * y[k]; y[i] = s / L[i * w + bw]; }
  return y;
}

// ---------------------------------------------------------------------------------------------------- the solver

/** Element geometry: area and the gradient vectors of the three shape functions. */
export function elementGeometry(mesh) {
  const m = mesh.tris.length / 3, area = new Float64Array(m), gx = new Float64Array(3 * m), gy = new Float64Array(3 * m), cx = new Float64Array(m), cy = new Float64Array(m);
  for (let e = 0; e < m; e++) {
    const [a, b, c] = [mesh.tris[3 * e], mesh.tris[3 * e + 1], mesh.tris[3 * e + 2]], X = mesh.nodes;
    const x = [X[2 * a], X[2 * b], X[2 * c]], y = [X[2 * a + 1], X[2 * b + 1], X[2 * c + 1]];
    const d = (x[1] - x[0]) * (y[2] - y[0]) - (x[2] - x[0]) * (y[1] - y[0]);
    area[e] = Math.abs(d) / 2; cx[e] = (x[0] + x[1] + x[2]) / 3; cy[e] = (y[0] + y[1] + y[2]) / 3;
    const bI = [y[1] - y[2], y[2] - y[0], y[0] - y[1]], cI = [x[2] - x[1], x[0] - x[2], x[1] - x[0]];
    for (let i = 0; i < 3; i++) { gx[3 * e + i] = bI[i] / d; gy[3 * e + i] = cI[i] / d; }
  }
  return { area, gx, gy, cx, cy };
}

/**
 * Solve. mesh from gridMesh (any triangle mesh { nodes, tris } works if its numbering keeps the band small).
 * spec: { region: (cx, cy) → id, or Int32Array per element; materials: { id → material }; current: { id → A/m² }; br: { id →
 * [Bx, By] (T) }; fixed: Map/obj of node → A value (default: every node on the mesh's outer boundary → 0); tol (1e-9 on
 * the relative change of A), maxIter (40) }.
 * → { A, Bx, By, Bmag, energy, iterations, geom, region } — per-element B (T), energy ½∫ν(B−Br)·B... see header.
 */
export function solveMagnetostatic(mesh, spec) {
  const n = mesh.nodes.length / 2, m = mesh.tris.length / 3, G = elementGeometry(mesh);
  const region = spec.region instanceof Int32Array ? spec.region : Int32Array.from({ length: m }, (_, e) => spec.region(G.cx[e], G.cy[e]));
  const mats = spec.materials, J = spec.current || {}, Br = spec.br || {};
  const fixed = new Map();
  if (spec.fixed) for (const [k, v] of (spec.fixed instanceof Map ? spec.fixed : Object.entries(spec.fixed))) fixed.set(+k, v);
  else {
    let xl = Infinity, xh = -Infinity, yl = Infinity, yh = -Infinity;
    for (let i = 0; i < n; i++) { xl = Math.min(xl, mesh.nodes[2 * i]); xh = Math.max(xh, mesh.nodes[2 * i]); yl = Math.min(yl, mesh.nodes[2 * i + 1]); yh = Math.max(yh, mesh.nodes[2 * i + 1]); }
    const tx = 1e-9 * (xh - xl), ty = 1e-9 * (yh - yl);
    for (let i = 0; i < n; i++) { const x = mesh.nodes[2 * i], y = mesh.nodes[2 * i + 1]; if (x - xl < tx || xh - x < tx || y - yl < ty || yh - y < ty) fixed.set(i, 0); }
  }
  let bw = 0; for (let e = 0; e < m; e++) { const a = mesh.tris[3 * e], b = mesh.tris[3 * e + 1], c = mesh.tris[3 * e + 2]; bw = Math.max(bw, Math.abs(a - b), Math.abs(b - c), Math.abs(a - c)); }
  const w = bw + 1;
  const A = new Float64Array(n); for (const [i, v] of fixed) A[i] = v;
  const nonlinear = Object.values(mats).some((q) => q.dnu && q.nu(0.5) !== q.nu(0));
  const load = new Float64Array(n);
  for (let e = 0; e < m; e++) {   // the constant right-hand side: currents and magnets
    const r = region[e], j = J[r] || 0, br = Br[r];
    for (let i = 0; i < 3; i++) {
      let f = j * G.area[e] / 3;
      if (br) { const nu = mats[r].nu(0); f += nu * (br[0] * G.gy[3 * e + i] - br[1] * G.gx[3 * e + i]) * G.area[e]; }
      load[mesh.tris[3 * e + i]] += f;
    }
  }
  /** The residual load − ∫ν∇A·∇N (zero at the fixed nodes) and, when asked, the tangent in band storage. */
  const assemble = (Av, wantK) => {
    const K = wantK ? new Float64Array(n * w) : null, R = Float64Array.from(load);
    for (let e = 0; e < m; e++) {
      const mat = mats[region[e]], nd = [mesh.tris[3 * e], mesh.tris[3 * e + 1], mesh.tris[3 * e + 2]], ar = G.area[e];
      let ax = 0, ay = 0; for (let i = 0; i < 3; i++) { ax += G.gx[3 * e + i] * Av[nd[i]]; ay += G.gy[3 * e + i] * Av[nd[i]]; }
      const b2 = ax * ax + ay * ay, nu = mat.nu(b2), dnu = wantK && nonlinear ? mat.dnu(b2) : 0;
      for (let i = 0; i < 3; i++) {
        const gix = G.gx[3 * e + i], giy = G.gy[3 * e + i];
        R[nd[i]] -= nu * ar * (gix * ax + giy * ay);
        if (!wantK) continue;
        for (let k = 0; k < 3; k++) {
          if (nd[k] > nd[i]) continue;
          const gkx = G.gx[3 * e + k], gky = G.gy[3 * e + k];
          K[nd[i] * w + (nd[k] - nd[i] + bw)] += ar * (nu * (gix * gkx + giy * gky) + 2 * dnu * (gix * ax + giy * ay) * (gkx * ax + gky * ay));
        }
      }
    }
    for (const [f] of fixed) {
      R[f] = 0;
      if (!wantK) continue;
      for (let j = Math.max(0, f - bw); j <= Math.min(n - 1, f + bw); j++) {
        if (j === f) continue;
        const hi = Math.max(f, j), lo = Math.min(f, j); K[hi * w + (lo - hi + bw)] = 0;
      }
      K[f * w + bw] = 1;
    }
    return { R, K };
  };
  const nrm = (v) => { let q = 0; for (let i = 0; i < v.length; i++) q += v[i] * v[i]; return Math.sqrt(q); };
  let it = 0, change = Infinity, cur = assemble(A, true), rn = nrm(cur.R);
  for (; it < (spec.maxIter || 40); it++) {
    // the unknown is the correction dA, zero at the fixed nodes (their value is already in A)
    const dA = bandSolve(cur.K, n, bw, cur.R);
    let alpha = 1, next = null, nn = Infinity;
    if (!nonlinear) { for (let i = 0; i < n; i++) A[i] += dA[i]; change = 0; it = 1; break; }
    for (let k = 0; k < 30; k++, alpha /= 2) {   // damped Newton: halve the step until the residual falls (and stays finite)
      const At = Float64Array.from(A, (v, i) => v + alpha * dA[i]);
      next = assemble(At, false); nn = nrm(next.R);
      if (Number.isFinite(nn) && nn < rn) { A.set(At); break; }
      next = null;
    }
    if (!next) break;
    let dn = 0, an = 0; for (let i = 0; i < n; i++) { dn += dA[i] ** 2; an += A[i] * A[i]; }
    change = Math.sqrt(dn / (an || 1));
    cur = assemble(A, true); rn = nrm(cur.R);
    if (change < (spec.tol || 1e-9) || rn < 1e-14 * (nrm(load) || 1)) { it++; break; }
  }
  const Bx = new Float64Array(m), By = new Float64Array(m), Bmag = new Float64Array(m);
  let energy = 0;
  for (let e = 0; e < m; e++) {
    let ax = 0, ay = 0; for (let i = 0; i < 3; i++) { const v = A[mesh.tris[3 * e + i]]; ax += G.gx[3 * e + i] * v; ay += G.gy[3 * e + i] * v; }
    Bx[e] = ay; By[e] = -ax; Bmag[e] = Math.hypot(ax, ay);
    energy += 0.5 * mats[region[e]].nu(Bmag[e] ** 2) * Bmag[e] ** 2 * G.area[e];
  }
  return { A, Bx, By, Bmag, energy, iterations: it, change, geom: G, region, converged: change < (spec.tol || 1e-9) || !nonlinear };
}

// ---------------------------------------------------------------------------------------------------- forces

/**
 * Force and torque per metre of depth on whatever lies inside the set of elements `inside(cx, cy) → bool` (it must be
 * wholly surrounded by air): { fx, fy (N/m), torque (N, about the origin), edges }.
 */
export function maxwell(mesh, res, inside) {
  const m = mesh.tris.length / 3, G = res.geom, X = mesh.nodes, side = new Uint8Array(m);
  for (let e = 0; e < m; e++) side[e] = inside(G.cx[e], G.cy[e]) ? 1 : 0;
  const edges = new Map();
  for (let e = 0; e < m; e++) for (let k = 0; k < 3; k++) {
    const a = mesh.tris[3 * e + k], b = mesh.tris[3 * e + (k + 1) % 3], key = a < b ? a * 4194304 + b : b * 4194304 + a;
    const o = edges.get(key); if (o) o.push(e); else edges.set(key, [e]);
  }
  let fx = 0, fy = 0, tq = 0, cnt = 0;
  for (const [key, es] of edges) {
    if (es.length !== 2 || side[es[0]] === side[es[1]]) continue;
    const a = Math.floor(key / 4194304), b = key % 4194304, ein = side[es[0]] ? es[0] : es[1];
    const x1 = X[2 * a], y1 = X[2 * a + 1], x2 = X[2 * b], y2 = X[2 * b + 1], dl = Math.hypot(x2 - x1, y2 - y1);
    let nx = (y2 - y1) / dl, ny = -(x2 - x1) / dl;
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    if (nx * (mx - G.cx[ein]) + ny * (my - G.cy[ein]) < 0) { nx = -nx; ny = -ny; }   // outward from the set
    const bx = (res.Bx[es[0]] + res.Bx[es[1]]) / 2, by = (res.By[es[0]] + res.By[es[1]]) / 2, b2 = bx * bx + by * by;
    const tx = ((bx * bx - 0.5 * b2) * nx + bx * by * ny) / MU0, ty = (bx * by * nx + (by * by - 0.5 * b2) * ny) / MU0;
    fx += tx * dl; fy += ty * dl; tq += (mx * ty - my * tx) * dl; cnt++;
  }
  return { fx, fy, torque: tq, edges: cnt };
}
