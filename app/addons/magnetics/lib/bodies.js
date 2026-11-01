/* SPDX-License-Identifier: Apache-2.0 */
/**
 * bodies.js — a magnet study's result as PartCraft display bodies (add-on API 1.1 api.model.addBodies; DOM-free). Everything lies in the
 * study's plane (the sketch's plane, or the front plane for an example), mm, PartCraft's world axes (Y up):
 *   - the bodies (iron, magnets, coils) as see-through prisms from the plane out to the depth given,
 *   - the field |B| on the far face (z = depth), in ten colour bands of the scale the panel shows,
 *   - the flux lines on it, the air box's outline, and an arrow for each body whose force was asked for.
 * They are display bodies: never part of the part's solid (no mass, no STL).
 *
 *   studyBodies(res, meta, { frame, depth, flux, forces (sum.bodies), crop ([x0, y0, x1, y1] mm: field and flux lines only there), top (|B| of the top color; default the largest), show, names, say }) → { bodies, triangles, skipped: [what] }
 *   frameOf(plane) → { o, x, y, n } for a sketch plane PartCraft can place without a rebuild (base planes, fixed planes) or null
 */
import { fieldColour } from '../../../magnet-study.js';

export const LIMIT = 58000;   // addon-bodies.js keeps a group under 60 000 triangles
export const BANDS = 10;
const ROLE_COLOUR = { iron: '#8a8f98', magnet: '#c0392b', coil: '#b87333', air: '#9ec5e8' };
const BASE = {
  front: { o: [0, 0, 0], x: [1, 0, 0], y: [0, 1, 0], n: [0, 0, 1] },
  top: { o: [0, 0, 0], x: [1, 0, 0], y: [0, 0, -1], n: [0, 1, 0] },
  right: { o: [0, 0, 0], x: [0, 0, -1], y: [0, 1, 0], n: [1, 0, 0] },
};
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = (v) => { const l = Math.hypot(...v) || 1; return v.map((c) => c / l); };

export function frameOf(plane) {
  if (!plane || plane.kind === 'base') return BASE[plane?.name || 'front'] || null;
  if (plane.kind === 'fixed' && Array.isArray(plane.o) && Array.isArray(plane.n)) {   // the same basis as vec.js frameFor: x ⟂ n, y = n × x
    const n = unit(plane.n), helper = Math.abs(n[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0], x = unit(cross(helper, n)), y = cross(n, x);
    return { o: plane.o.slice(), x, y, n };
  }
  return null;
}

/** Sutherland–Hodgman: a convex polygon cut to the rectangle [x0, y0, x1, y1]. */
export function clipRect(poly, [x0, y0, x1, y1]) {
  let out = poly;
  for (const [inside, cut] of [
    [(p) => p[0] >= x0, (a, b) => [x0, a[1] + (b[1] - a[1]) * (x0 - a[0]) / (b[0] - a[0])]],
    [(p) => p[0] <= x1, (a, b) => [x1, a[1] + (b[1] - a[1]) * (x1 - a[0]) / (b[0] - a[0])]],
    [(p) => p[1] >= y0, (a, b) => [a[0] + (b[0] - a[0]) * (y0 - a[1]) / (b[1] - a[1]), y0]],
    [(p) => p[1] <= y1, (a, b) => [a[0] + (b[0] - a[0]) * (y1 - a[1]) / (b[1] - a[1]), y1]],
  ]) {
    const inp = out; out = [];
    for (let i = 0; i < inp.length; i++) {
      const a = inp[i], b = inp[(i + 1) % inp.length], ia = inside(a), ib = inside(b);
      if (ia) out.push(a);
      if (ia !== ib) out.push(cut(a, b));
    }
    if (!out.length) break;
  }
  return out;
}

export function studyBodies(res, meta, { frame = BASE.front, depth = 10, flux = null, forces = [], top: top0 = 0, crop = null, show = {}, names = [], say = (k) => k } = {}) {
  const F = frame, N = res.mesh.nodes, T = res.mesh.tris, R = res.mesh.region, m = T.length / 3;
  const [bx0, by0, bx1, by1] = meta.box.map((v) => v * 1e3), size = Math.max(bx1 - bx0, by1 - by0);
  const eps = Math.max(0.05, 0.002 * size), D = Math.max(0.01, depth);
  const P = (u, v, w) => [0, 1, 2].map((k) => F.o[k] + u * F.x[k] + v * F.y[k] + w * F.n[k]);
  const bodies = [], skipped = [];
  let tris = 0;
  const room = (n) => tris + n <= LIMIT;
  const push = (b, n) => { bodies.push(b); tris += n; };
  const on = (k) => (k === 'box' ? show.box === true : show[k] !== false);
  const kept = (x, y) => !crop || (x >= crop[0] && x <= crop[2] && y >= crop[1] && y <= crop[3]);

  // 1 the field, banded
  if (on('field')) {
    if (!room(m)) skipped.push('field');
    else {
      const top = top0 > 0 ? top0 : (res.B.mag.reduce((a, b) => (b > a ? b : a), 0) || 1);
      const band = new Uint8Array(m); for (let e = 0; e < m; e++) band[e] = Math.min(BANDS - 1, Math.floor(res.B.mag[e] / top * BANDS));
      for (let k = 0; k < BANDS; k++) {
        const map = new Map(), pos = [], idx = [];
        for (let e = 0; e < m; e++) {
          if (band[e] !== k) continue;
          const tri = [T[3 * e], T[3 * e + 1], T[3 * e + 2]], pts = tri.map((i) => [N[2 * i] * 1e3, N[2 * i + 1] * 1e3]);
          if (!crop || pts.every(([x, y]) => kept(x, y))) {
            for (const i of tri) {
              if (!map.has(i)) { map.set(i, pos.length / 3); pos.push(...P(N[2 * i] * 1e3, N[2 * i + 1] * 1e3, D + eps)); }
              idx.push(map.get(i));
            }
            continue;
          }
          const poly = clipRect(pts, crop);   // a triangle across the crop's edge: cut to it, so the shown field has straight edges
          if (poly.length < 3) continue;
          const b0 = pos.length / 3;
          for (const [x, y] of poly) pos.push(...P(x, y, D + eps));
          for (let q = 1; q < poly.length - 1; q++) idx.push(b0, b0 + q, b0 + q + 1);
        }
        if (!idx.length) continue;
        const lo = top * k / BANDS, hi = top * (k + 1) / BANDS;
        push({ name: k === BANDS - 1 ? say('body.field_top', { lo: +lo.toFixed(3) }) : say('body.field', { lo: +lo.toFixed(3), hi: +hi.toFixed(3) }), color: fieldColour((k + 0.5) / BANDS), mesh: { positions: pos, indices: idx } }, idx.length / 3);
      }
    }
  }
  // 2 flux lines: thin ribbons on the field
  if (on('flux') && flux && flux.segs.length) {
    const nseg = flux.segs.length / 4, w = Math.max(0.03, 0.0025 * size);
    if (!room(2 * nseg) || nseg > 14000) skipped.push('flux');   // one body holds at most 60 000 corners
    else {
      const pos = [], idx = [];
      for (let s = 0; s < nseg; s++) {
        if (!kept(flux.segs[4 * s], flux.segs[4 * s + 1]) || !kept(flux.segs[4 * s + 2], flux.segs[4 * s + 3])) continue;
        const [x1, y1, x2, y2] = flux.segs.slice(4 * s, 4 * s + 4), L = Math.hypot(x2 - x1, y2 - y1) || 1, nx = -(y2 - y1) / L * w / 2, ny = (x2 - x1) / L * w / 2, b = pos.length / 3;
        pos.push(...P(x1 - nx, y1 - ny, D + 2 * eps), ...P(x1 + nx, y1 + ny, D + 2 * eps), ...P(x2 + nx, y2 + ny, D + 2 * eps), ...P(x2 - nx, y2 - ny, D + 2 * eps));
        idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
      }
      if (idx.length) push({ name: say('body.flux', { n: flux.levels.length }), color: '#f5f5f5', mesh: { positions: pos, indices: idx } }, idx.length / 3);
    }
  }
  // 3 the bodies as see-through prisms: the region's own triangles as the two caps, its outline edges as the sides
  if (on('bodies')) {
    for (const r of meta.regions) {
      if (r.role === 'air') continue;
      const map = new Map(), pos = [], idx = [], edges = new Map();
      const vtx = (i, w) => { const key = i * 2 + (w ? 1 : 0); if (!map.has(key)) { map.set(key, pos.length / 3); pos.push(...P(N[2 * i] * 1e3, N[2 * i + 1] * 1e3, w ? D : 0)); } return map.get(key); };
      for (let e = 0; e < m; e++) {
        if (R[e] !== r.id) continue;
        const t = [T[3 * e], T[3 * e + 1], T[3 * e + 2]];
        idx.push(vtx(t[0], 0), vtx(t[1], 0), vtx(t[2], 0), vtx(t[0], 1), vtx(t[1], 1), vtx(t[2], 1));
        for (let q = 0; q < 3; q++) { const a = t[q], b = t[(q + 1) % 3], key = a < b ? a + ':' + b : b + ':' + a; edges.set(key, edges.has(key) ? null : [a, b]); }
      }
      for (const ed of edges.values()) if (ed) { const [a, b] = ed; idx.push(vtx(a, 0), vtx(b, 0), vtx(b, 1), vtx(a, 0), vtx(b, 1), vtx(a, 1)); }
      if (!idx.length) continue;
      if (!room(idx.length / 3)) { skipped.push('bodies'); break; }
      push({ name: say('body.region', { n: r.loop + 1, name: names[r.loop] || say('role.' + r.role) }), color: ROLE_COLOUR[r.role] || '#c9c2b4', opacity: 0.35, mesh: { positions: pos, indices: idx } }, idx.length / 3);
    }
  }
  // 4 the air box outline (four thin strips)
  if (on('box') && room(8)) {
    const w = Math.max(0.05, 0.003 * size), pos = [], idx = [];
    const strip = (x1, y1, x2, y2) => { const L = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / L * w, ny = (x2 - x1) / L * w, b = pos.length / 3; pos.push(...P(x1, y1, D + eps), ...P(x1 + nx, y1 + ny, D + eps), ...P(x2 + nx, y2 + ny, D + eps), ...P(x2, y2, D + eps)); idx.push(b, b + 1, b + 2, b, b + 2, b + 3); };
    strip(bx0, by0, bx1, by0); strip(bx1, by0, bx1, by1); strip(bx1, by1, bx0, by1); strip(bx0, by1, bx0, by0);
    push({ name: say('body.box', { w: +(bx1 - bx0).toFixed(1), h: +(by1 - by0).toFixed(1) }), color: '#6b7280', mesh: { positions: pos, indices: idx } }, 8);
  }
  // 5 force arrows (flat, in the plane, length a third of the model's size)
  if (on('forces') && forces.length) {
    for (const b of forces) {
      const f = Math.hypot(b.fx, b.fy);
      if (!(f > 0) || !room(4)) continue;
      const L = size / 3 * 0.6, ux = b.fx / f, uy = b.fy / f, vx = -uy, vy = ux, s = Math.max(0.1, size / 120), h = Math.max(0.3, size / 30), [cx, cy] = b.centre, z = D + 3 * eps;
      const tip = [cx + ux * L, cy + uy * L], base = [tip[0] - ux * h, tip[1] - uy * h];
      const pos = [...P(cx + vx * s, cy + vy * s, z), ...P(cx - vx * s, cy - vy * s, z), ...P(base[0] - vx * s, base[1] - vy * s, z), ...P(base[0] + vx * s, base[1] + vy * s, z),
        ...P(base[0] + vx * h / 2, base[1] + vy * h / 2, z), ...P(base[0] - vx * h / 2, base[1] - vy * h / 2, z), ...P(tip[0], tip[1], z)];
      push({ name: say('body.force', { n: b.loop, f: +f.toPrecision(4) }), color: '#16a34a', mesh: { positions: pos, indices: [0, 1, 2, 0, 2, 3, 4, 5, 6] } }, 3);
    }
  }
  return { bodies, triangles: tris, skipped };
}
