/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — file formats (CSV headers, VTK keywords, SVG markup); the words a person reads come from lang/ through main.js. */
/**
 * results.js — what the Magnetics add-on reads out of a magnetSolve result (PartCraft phys-worker.js; DOM-free). The result is in metres
 * (mesh nodes), tesla (B per element) and webers per metre (A per node); everything here returns mm for positions.
 *
 *   regionStats(res, meta)          → [{ id, loop, role, areaMm2, meanB, maxB }]   area-weighted mean and the largest |B| of each body
 *   measure(res, hand, sum)         → { got, want, diff (got/want − 1), ok (|diff| ≤ hand.tol) } | null   the result against a template's hand formula
 *   fluxLines(res, n)               → { segs: [x1, y1, x2, y2 …] (mm), lev: [level index per segment], levels, dA (Wb/m between neighboring lines) }
 *                                     In 2-D the flux lines are the contours of A: between two lines flows ΔA per metre of depth.
 *   fieldCsv(res) · vtk(res, title) · svg(res, loops, opts) · summaryCsv(sum, stats, check, meta)   the exports
 *   nearBox(loops, f)               → [x0, y0, x1, y1] mm: the bodies' box grown by f of its size (the part of the field worth showing)
 *   colourTop(res)                  → the |B| at the top of the colour scale: the 99th percentile of the triangles' |B| (a sharp iron corner's
 *                                     peak would otherwise paint everything else dark blue); the top color means "this or more"
 *   fieldColour(f)                  → the same colour scale as PartCraft's own magnet study (re-exported)
 * Typed arrays are read with indexes or Array.from, never .map (a Float32Array.map stays a Float32Array).
 */
import { fieldColour } from '../../../magnet-study.js';
export { fieldColour };

const MM = 1e3;
/** The bodies' box grown by `f` of its size on every side (mm): what the picture and the part show of the field (the air box can be far bigger). */
export function nearBox(loops, f = 0.5) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const l of loops) for (const [x, y] of l) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  const m = f * Math.max(x1 - x0, y1 - y0);
  return [x0 - m, y0 - m, x1 + m, y1 + m];
}
export function colourTop(res) {
  const m = res.B.mag, n = m.length;
  if (!n) return 1;
  const s = Float64Array.from(m).sort();
  return Math.max(s[Math.min(n - 1, Math.floor(0.99 * n))], 1e-12);
}
function geom(res) {
  const N = res.mesh.nodes, T = res.mesh.tris, m = T.length / 3, area = new Float64Array(m), cx = new Float64Array(m), cy = new Float64Array(m);
  for (let e = 0; e < m; e++) {
    const a = T[3 * e], b = T[3 * e + 1], c = T[3 * e + 2];
    area[e] = Math.abs((N[2 * b] - N[2 * a]) * (N[2 * c + 1] - N[2 * a + 1]) - (N[2 * c] - N[2 * a]) * (N[2 * b + 1] - N[2 * a + 1])) / 2;
    cx[e] = (N[2 * a] + N[2 * b] + N[2 * c]) / 3 * MM; cy[e] = (N[2 * a + 1] + N[2 * b + 1] + N[2 * c + 1]) / 3 * MM;
  }
  return { m, area, cx, cy };
}

export function regionStats(res, meta) {
  const G = geom(res), out = new Map();
  for (const r of meta.regions) out.set(r.id, { id: r.id, loop: r.loop + 1, role: r.role, areaMm2: 0, meanB: 0, maxB: 0 });
  for (let e = 0; e < G.m; e++) {
    const s = out.get(res.mesh.region[e]);
    if (!s) continue;
    const b = res.B.mag[e];
    s.areaMm2 += G.area[e] * MM * MM; s.meanB += b * G.area[e] * MM * MM; if (b > s.maxB) s.maxB = b;
  }
  for (const s of out.values()) s.meanB = s.areaMm2 > 0 ? s.meanB / s.areaMm2 : 0;
  return [...out.values()].sort((a, b) => a.loop - b.loop);
}

export function measure(res, hand, sum) {
  if (!hand) return null;
  let got = null;
  if (hand.kind === 'force') {
    const b = sum.bodies.find((x) => x.loop === hand.body);
    if (b) got = Math.hypot(b.fxPerM, b.fyPerM);
  } else {
    const G = geom(res);
    let s = 0, a = 0;
    for (let e = 0; e < G.m; e++) {
      let w = 0, v = res.B.mag[e];
      if (hand.kind === 'meanB' && hand.region !== undefined) w = res.mesh.region[e] === hand.region ? G.area[e] : 0;
      else if (hand.kind === 'meanB' && hand.box) w = G.cx[e] > hand.box[0] && G.cx[e] < hand.box[2] && G.cy[e] > hand.box[1] && G.cy[e] < hand.box[3] ? G.area[e] : 0;
      else if (hand.kind === 'ringB') { const r = Math.hypot(G.cx[e] - hand.at[0], G.cy[e] - hand.at[1]); if (r > hand.r0 && r < hand.r1) { w = G.area[e]; v = v * r / hand.r; } }
      s += v * w; a += w;
    }
    if (a > 0) got = s / a;
  }
  if (got === null || !(hand.value > 0)) return null;
  const diff = got / hand.value - 1;
  return { got, want: hand.value, diff, ok: Math.abs(diff) <= hand.tol, tol: hand.tol, what: hand.what, kind: hand.kind, perMetre: !!hand.perMetre };
}

/** Marching triangles on the linear A: n levels evenly between the least and the largest A (the ends left out). */
export function fluxLines(res, n = 16) {
  const N = res.mesh.nodes, T = res.mesh.tris, A = res.A;
  let lo = Infinity, hi = -Infinity;
  for (let i = 0; i < A.length; i++) { if (A[i] < lo) lo = A[i]; if (A[i] > hi) hi = A[i]; }
  const k = Math.max(2, Math.min(60, Math.round(n)));
  if (!(hi > lo)) return { segs: [], lev: [], levels: [], dA: 0 };
  const dA = (hi - lo) / (k + 1), levels = Array.from({ length: k }, (_, i) => lo + dA * (i + 1)), segs = [], lev = [];
  for (let e = 0; e < T.length / 3; e++) {
    const id = [T[3 * e], T[3 * e + 1], T[3 * e + 2]], a = id.map((i) => A[i]);
    const amin = Math.min(...a), amax = Math.max(...a);
    for (let li = 0; li < levels.length; li++) {
      const L = levels[li];
      if (L <= amin || L > amax) continue;
      const pts = [];
      for (let q = 0; q < 3; q++) {
        const i = q, j = (q + 1) % 3, ai = a[i], aj = a[j];
        if ((ai < L) !== (aj < L)) { const t = (L - ai) / (aj - ai); pts.push((N[2 * id[i]] + t * (N[2 * id[j]] - N[2 * id[i]])) * MM, (N[2 * id[i] + 1] + t * (N[2 * id[j] + 1] - N[2 * id[i] + 1])) * MM); }
      }
      if (pts.length === 4) { segs.push(...pts); lev.push(li); }
    }
  }
  return { segs, lev, levels, dA };
}

const num = (v) => String(+Number(v).toPrecision(8));
const q = (s) => '"' + String(s).replace(/"/g, '""') + '"';

export function fieldCsv(res) {
  const G = geom(res), rows = ['x_mm,y_mm,region,area_mm2,Bx_T,By_T,B_T'];
  for (let e = 0; e < G.m; e++) rows.push([num(G.cx[e]), num(G.cy[e]), res.mesh.region[e], num(G.area[e] * MM * MM), num(res.B.x[e]), num(res.B.y[e]), num(res.B.mag[e])].join(','));
  return '﻿' + rows.join('\r\n') + '\r\n';
}

/** Legacy VTK (ASCII): the triangles in mm (z = 0), B per cell (vector and size), the region per cell, A per point. ParaView and VisIt read it. */
export function vtk(res, title = 'CadCraft PartCraft Magnetics') {
  const N = res.mesh.nodes, T = res.mesh.tris, n = N.length / 2, m = T.length / 3, out = ['# vtk DataFile Version 3.0', String(title).replace(/[\r\n]/g, ' ').slice(0, 250), 'ASCII', 'DATASET UNSTRUCTURED_GRID', `POINTS ${n} double`];
  for (let i = 0; i < n; i++) out.push(num(N[2 * i] * MM) + ' ' + num(N[2 * i + 1] * MM) + ' 0');
  out.push(`CELLS ${m} ${4 * m}`);
  for (let e = 0; e < m; e++) out.push(`3 ${T[3 * e]} ${T[3 * e + 1]} ${T[3 * e + 2]}`);
  out.push(`CELL_TYPES ${m}`);
  for (let e = 0; e < m; e++) out.push('5');
  out.push(`CELL_DATA ${m}`, 'VECTORS B_T double');
  for (let e = 0; e < m; e++) out.push(num(res.B.x[e]) + ' ' + num(res.B.y[e]) + ' 0');
  out.push('SCALARS Bmag_T double 1', 'LOOKUP_TABLE default');
  for (let e = 0; e < m; e++) out.push(num(res.B.mag[e]));
  out.push('SCALARS region int 1', 'LOOKUP_TABLE default');
  for (let e = 0; e < m; e++) out.push(String(res.mesh.region[e]));
  out.push(`POINT_DATA ${n}`, 'SCALARS Az_Wb_per_m double 1', 'LOOKUP_TABLE default');
  for (let i = 0; i < n; i++) out.push(num(res.A[i]));
  return out.join('\n') + '\n';
}

/** The field as a picture: each triangle in its colour, the flux lines, the bodies' outlines and numbers. */
export function svg(res, loops, { top: bmax, flux = null, width = 900, legend = '' } = {}) {
  const N = res.mesh.nodes, T = res.mesh.tris;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (let i = 0; i < N.length / 2; i++) { const x = N[2 * i] * MM, y = N[2 * i + 1] * MM; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  const k = width / (x1 - x0), H = (y1 - y0) * k, X = (x) => ((x - x0) * k).toFixed(2), Y = (y) => (H - (y - y0) * k).toFixed(2), top = bmax > 0 ? bmax : 1;
  const parts = [`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${Math.round(H + 28)}" viewBox="0 0 ${width} ${(H + 28).toFixed(0)}">`, '<g stroke-width="0.4">'];
  for (let e = 0; e < T.length / 3; e++) {
    const c = fieldColour(res.B.mag[e] / top), p = [T[3 * e], T[3 * e + 1], T[3 * e + 2]].map((i) => X(N[2 * i] * MM) + ',' + Y(N[2 * i + 1] * MM)).join(' ');
    parts.push(`<polygon points="${p}" fill="${c}" stroke="${c}"/>`);
  }
  parts.push('</g>');
  if (flux && flux.segs.length) {
    let d = '';
    for (let i = 0; i < flux.segs.length; i += 4) d += `M${X(flux.segs[i])} ${Y(flux.segs[i + 1])}L${X(flux.segs[i + 2])} ${Y(flux.segs[i + 3])}`;
    parts.push(`<path d="${d}" stroke="#f5f5f5" stroke-width="0.8" fill="none"/>`);
  }
  loops.forEach((l, i) => {
    parts.push(`<polygon points="${l.map(([x, y]) => X(x) + ',' + Y(y)).join(' ')}" fill="none" stroke="#111" stroke-width="1.2"/>`);
    let cx = 0, cy = 0; for (const [x, y] of l) { cx += x; cy += y; }
    parts.push(`<text x="${X(cx / l.length)}" y="${Y(cy / l.length)}" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#111" stroke="#fff" stroke-width="3" paint-order="stroke">${i + 1}</text>`);
  });
  parts.push(`<text x="4" y="${(H + 20).toFixed(0)}" font-family="sans-serif" font-size="13" fill="#111">${String(legend).replace(/[<&>]/g, ' ')}</text>`, '</svg>');
  return parts.join('\n');
}

export function summaryCsv(sum, stats, check, meta) {
  const rows = [['quantity', 'value', 'unit'], ['Bmax', num(sum.bmax), 'T'], ['Bmax at x', num(sum.bmaxAt[0]), 'mm'], ['Bmax at y', num(sum.bmaxAt[1]), 'mm'], ['depth', num(sum.depthMm), 'mm'], ['triangles', num(sum.tris), ''], ['iterations', num(sum.iterations), '']];
  for (const s of stats) rows.push([q(`body ${s.loop} (${s.role}) area`), num(s.areaMm2), 'mm2'], [q(`body ${s.loop} (${s.role}) mean B`), num(s.meanB), 'T'], [q(`body ${s.loop} (${s.role}) max B`), num(s.maxB), 'T']);
  for (const b of sum.bodies) rows.push([q(`body ${b.loop} Fx`), num(b.fx), 'N'], [q(`body ${b.loop} Fy`), num(b.fy), 'N'], [q(`body ${b.loop} torque about its centre`), num(b.torque), 'N m']);
  if (check) rows.push([q('hand formula ' + check.what), num(check.want), check.kind === 'force' ? 'N/m' : 'T'], [q('this result'), num(check.got), check.kind === 'force' ? 'N/m' : 'T'], [q('difference'), num(100 * check.diff), '%']);
  rows.push([q('model box x0 y0 x1 y1'), q(meta.box.map((v) => num(v * MM)).join(' ')), 'mm']);
  return '﻿' + rows.map((r) => r.join(',')).join('\r\n') + '\r\n';
}
