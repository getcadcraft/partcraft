/* SPDX-License-Identifier: Apache-2.0 */
/**
 * magnetmesh.js — a 2-D triangle mesh of sketch profiles for magnet.js (0.8 round 3, SG.7+ solver side). DOM-free, no imports, plain doubles.
 *
 * The profiles are closed polygons (a magnet, a coil, a steel yoke, an air gap) laid in a rectangular air box. The mesh conforms to every
 * polygon edge, so a material boundary is a mesh line and the Maxwell-stress contour and the B–H switch are exact there; the triangles are
 * well shaped (no angle under `minAngle`, 20° by default, away from sharp input corners) and graded by a size field.
 *
 * Method: Delaunay refinement, J. R. Ruppert, "A Delaunay refinement algorithm for quality 2-dimensional mesh generation", J. Algorithms 18
 * (1995) 548–585, with the segment-splitting rule of J. R. Shewchuk, "Delaunay Refinement Mesh Generation" (PhD thesis, CMU-CS-97-137, 1997)
 * ch. 3: (1) Bowyer–Watson insertion of the polygon vertices into a Delaunay triangulation inside a super triangle; (2) a subsegment whose
 * diametral circle holds another vertex is split at its midpoint, until none is (an unencroached segment is a Delaunay edge, so the
 * triangulation then conforms to every segment); (3) a triangle whose circumradius to shortest edge ratio is over 1/(2 sin minAngle), or whose
 * circumradius exceeds the size field, gets its circumcentre inserted, or, when that would encroach a subsegment, that subsegment is split.
 * Triangles outside the box are dropped, each triangle takes the region of the last polygon that holds its centroid (paint order; the air is
 * region 0), and the nodes are renumbered by reverse Cuthill–McKee so magnet.js's banded solve stays narrow.
 *
 *   meshProfile({ box: [x0, y0, x1, y1], loops: [{ region, poly: [[x, y], …] }], size, minAngle, maxPoints })
 *       → { nodes (x, y per node), tris (CCW), region (per triangle), stats: { points, tris, minAngle, maxAngle, bandwidth, steiner } }
 *       size: a number (the edge length wanted everywhere) or (x, y) → edge length; sizeField({ base, zones, grow }) builds one
 *   sizeField({ base, grow = 0.3, zones: [{ poly | box, h }] }) → (x, y) → h   near a zone h, growing by `grow` per unit distance up to `base`
 * Limits: input corners sharper than about 30° can need more points than Ruppert's rule gives (the run stops at maxPoints and says so in
 * stats.truncated); polygons must not cross each other (touching or nesting is fine; a later polygon paints over an earlier one).
 */
const EPS = 1e-14;
const orient = (ax, ay, bx, by, cx, cy) => (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
function inCircle(ax, ay, bx, by, cx, cy, dx, dy) {   // > 0 when d is inside the circle through counter-clockwise a, b, c
  const adx = ax - dx, ady = ay - dy, bdx = bx - dx, bdy = by - dy, cdx = cx - dx, cdy = cy - dy;
  return (adx * adx + ady * ady) * (bdx * cdy - cdx * bdy) + (bdx * bdx + bdy * bdy) * (cdx * ady - adx * cdy) + (cdx * cdx + cdy * cdy) * (adx * bdy - bdx * ady);
}
const inPoly = (x, y, poly) => {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i], [xj, yj] = poly[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c;
  }
  return c;
};
const segDist = (x, y, a, b) => {
  const dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy, t = L2 > 0 ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / L2)) : 0;
  return Math.hypot(x - a[0] - t * dx, y - a[1] - t * dy);
};

export function sizeField({ base, grow = 0.3, zones = [] }) {
  const polys = zones.map((z) => ({ h: z.h, poly: z.poly || [[z.box[0], z.box[1]], [z.box[2], z.box[1]], [z.box[2], z.box[3]], [z.box[0], z.box[3]]] }));
  return (x, y) => {
    let h = base;
    for (const z of polys) {
      let d = 0;
      if (!inPoly(x, y, z.poly)) { d = Infinity; for (let i = 0; i < z.poly.length; i++) d = Math.min(d, segDist(x, y, z.poly[i], z.poly[(i + 1) % z.poly.length])); }
      h = Math.min(h, z.h + grow * d);
    }
    return h;
  };
}

export function meshProfile({ box, loops = [], size = null, minAngle = 20, maxPoints = 60000 }) {
  const [x0, y0, x1, y1] = box;
  if (!(x1 > x0 && y1 > y0)) throw new Error('The air box needs a positive width and height.');   // i18n-ignore: developer-facing, the caller words it
  const diag = Math.hypot(x1 - x0, y1 - y0), h = typeof size === 'function' ? size : () => (Number.isFinite(size) && size > 0 ? size : diag / 30);
  const ratio = 1 / (2 * Math.sin(minAngle * Math.PI / 180));
  const X = [], Y = [], tv = [], tn = [], dead = [];
  const addV = (x, y) => { X.push(x); Y.push(y); return X.length - 1; };
  const newTri = (a, b, c) => { tv.push(a, b, c); tn.push(-1, -1, -1); dead.push(false); return dead.length - 1; };
  // super triangle (vertices 0, 1, 2), far outside the box
  const cx0 = (x0 + x1) / 2, cy0 = (y0 + y1) / 2, M = 1000 * diag;
  addV(cx0 - 2 * M, cy0 - M); addV(cx0 + 2 * M, cy0 - M); addV(cx0, cy0 + 2 * M);
  let last = newTri(0, 1, 2);
  const tri = (t) => [tv[3 * t], tv[3 * t + 1], tv[3 * t + 2]];

  function locate(px, py) {
    let t = dead[last] ? dead.lastIndexOf(false) : last;
    for (let guard = 0; guard < 4 * dead.length + 100; guard++) {
      let moved = false;
      for (let k = 0; k < 3; k++) {
        const i = (k + guard) % 3, a = tv[3 * t + (i + 1) % 3], b = tv[3 * t + (i + 2) % 3];
        if (orient(X[a], Y[a], X[b], Y[b], px, py) < 0 && tn[3 * t + i] >= 0) { t = tn[3 * t + i]; moved = true; break; }
      }
      if (!moved) return t;
    }
    for (let t2 = 0; t2 < dead.length; t2++) {   // a walk that cycled (a nearly degenerate input): scan
      if (dead[t2]) continue;
      const [a, b, c] = tri(t2);
      if (orient(X[a], Y[a], X[b], Y[b], px, py) >= 0 && orient(X[b], Y[b], X[c], Y[c], px, py) >= 0 && orient(X[c], Y[c], X[a], Y[a], px, py) >= 0) return t2;
    }
    return t;
  }

  /** Insert a point; returns its vertex index (an existing vertex when the point coincides with one). */
  function insert(px, py) {
    const t0 = locate(px, py);
    for (const v of tri(t0)) if (Math.hypot(X[v] - px, Y[v] - py) < EPS * diag * 1e3) return v;
    const cav = new Set([t0]), queue = [t0], boundary = [];
    while (queue.length) {
      const t = queue.pop();
      for (let i = 0; i < 3; i++) {
        const nb = tn[3 * t + i], a = tv[3 * t + (i + 1) % 3], b = tv[3 * t + (i + 2) % 3];
        if (nb >= 0 && cav.has(nb)) continue;
        if (nb >= 0) {
          const [p, q, r] = tri(nb);
          if (inCircle(X[p], Y[p], X[q], Y[q], X[r], Y[r], px, py) > 0) { cav.add(nb); queue.push(nb); continue; }
        }
        boundary.push({ a, b, nb, from: t });
      }
    }
    const v = addV(px, py), startAt = new Map(), made = [];
    for (const e of boundary) { const k = newTri(e.a, e.b, v); made.push(k); startAt.set(e.a, k); tn[3 * k + 2] = e.nb; if (e.nb >= 0) for (let i = 0; i < 3; i++) if (tn[3 * e.nb + i] === e.from) tn[3 * e.nb + i] = k; }
    made.forEach((k, idx) => {
      const e = boundary[idx];
      tn[3 * k] = startAt.get(e.b);   // across (b, p): the triangle whose boundary edge starts at b
      tn[3 * k + 1] = made[boundary.findIndex((o) => o.b === e.a)];   // across (p, a): the one whose boundary edge ends at a
    });
    for (const t of cav) dead[t] = true;
    last = made[0];
    return { v, made };
  }
  const place = (px, py) => { const r = insert(px, py); return typeof r === 'number' ? { v: r, made: [] } : r; };

  // ---- the input: box and polygons as segments
  const segs = [];   // subsegments [a, b] (vertex indices)
  const vertexOf = new Map(), key = (x, y) => x.toPrecision(15) + ',' + y.toPrecision(15);
  const vert = (x, y) => { const k = key(x, y); if (!vertexOf.has(k)) vertexOf.set(k, place(x, y).v); return vertexOf.get(k); };
  const ring = (poly) => { const ids = poly.map(([x, y]) => vert(x, y)); for (let i = 0; i < ids.length; i++) if (ids[i] !== ids[(i + 1) % ids.length]) segs.push([ids[i], ids[(i + 1) % ids.length]]); };
  ring([[x0, y0], [x1, y0], [x1, y1], [x0, y1]]);
  for (const l of loops) ring(l.poly);
  const inputPoints = X.length;

  // ---- encroachment
  const encroaches = (s, px, py) => {
    const [a, b] = s; if (px === X[a] && py === Y[a]) return false; if (px === X[b] && py === Y[b]) return false;
    const mx = (X[a] + X[b]) / 2, my = (Y[a] + Y[b]) / 2, r2 = ((X[a] - X[b]) ** 2 + (Y[a] - Y[b]) ** 2) / 4;
    return (px - mx) ** 2 + (py - my) ** 2 < r2 * (1 - 1e-12);
  };
  let truncated = false;
  const work = [];   // triangles to look at
  function split(i) {
    const [a, b] = segs[i];
    if (X.length >= maxPoints) { truncated = true; return null; }
    const r = place((X[a] + X[b]) / 2, (Y[a] + Y[b]) / 2);
    segs[i] = [a, r.v]; segs.push([r.v, b]);
    work.push(...r.made);
    return r;
  }
  function splitEncroached(px, py) {   // after a new vertex: every subsegment it encroaches is split, recursively
    let again = true;
    while (again && !truncated) {
      again = false;
      for (let i = 0; i < segs.length; i++) if (encroaches(segs[i], px, py)) { if (split(i)) { again = true; break; } }
    }
  }
  for (let round = 0, changed = true; changed && round < 200 && !truncated; round++) {
    changed = false;
    for (let i = 0; i < segs.length; i++) {
      const [a, b] = segs[i]; let hit = false;
      const mx = (X[a] + X[b]) / 2, my = (Y[a] + Y[b]) / 2, r2 = ((X[a] - X[b]) ** 2 + (Y[a] - Y[b]) ** 2) / 4;
      for (let v = 3; v < X.length && !hit; v++) if (v !== a && v !== b && (X[v] - mx) ** 2 + (Y[v] - my) ** 2 < r2 * (1 - 1e-12)) hit = true;
      if (hit && split(i)) changed = true;
    }
  }

  // ---- refinement
  const insideBox = (x, y) => x > x0 - 1e-12 * diag && x < x1 + 1e-12 * diag && y > y0 - 1e-12 * diag && y < y1 + 1e-12 * diag;
  const circ = (t) => {
    const [a, b, c] = tri(t), ax = X[a], ay = Y[a], bx = X[b] - ax, by = Y[b] - ay, cx = X[c] - ax, cy = Y[c] - ay, d = 2 * (bx * cy - by * cx);
    if (Math.abs(d) < 1e-300) return null;
    const ux = (cy * (bx * bx + by * by) - by * (cx * cx + cy * cy)) / d, uy = (bx * (cx * cx + cy * cy) - cx * (bx * bx + by * by)) / d;
    const sh = Math.min(Math.hypot(bx, by), Math.hypot(cx, cy), Math.hypot(bx - cx, by - cy));
    return { x: ax + ux, y: ay + uy, R: Math.hypot(ux, uy), sh, gx: (X[a] + X[b] + X[c]) / 3, gy: (Y[a] + Y[b] + Y[c]) / 3 };
  };
  const real = (t) => tv[3 * t] > 2 && tv[3 * t + 1] > 2 && tv[3 * t + 2] > 2;
  const bad = (t) => {
    if (dead[t] || !real(t)) return null;
    const c = circ(t);
    if (!c || !insideBox(c.gx, c.gy)) return null;
    const want = h(c.gx, c.gy);
    return c.R / c.sh > ratio * (1 + 1e-9) || c.R > want / Math.sqrt(3) * 1.1 ? c : null;
  };
  for (let t = 0; t < dead.length; t++) if (!dead[t]) work.push(t);
  let guard = 0;
  while (work.length && !truncated && guard++ < 50 * maxPoints) {
    const t = work.pop(), c = bad(t);
    if (!c) continue;
    let hit = -1;
    for (let i = 0; i < segs.length; i++) if (encroaches(segs[i], c.x, c.y)) { hit = i; break; }
    if (hit < 0 && !insideBox(c.x, c.y)) {   // outside the domain: it must be split off a boundary subsegment, the nearest one
      let best = Infinity;
      for (let i = 0; i < segs.length; i++) { const [a, b] = segs[i]; const d = segDist(c.x, c.y, [X[a], Y[a]], [X[b], Y[b]]); if (d < best) { best = d; hit = i; } }
    }
    if (hit >= 0) {
      const r = split(hit);
      if (r) { splitEncroached(X[r.v], Y[r.v]); work.push(t); }
      continue;
    }
    if (X.length >= maxPoints) { truncated = true; break; }
    const r = place(c.x, c.y);
    work.push(...r.made);
    splitEncroached(X[r.v], Y[r.v]);
  }

  // ---- collect: triangles inside the box, regions by paint order, nodes renumbered
  const keep = [];
  for (let t = 0; t < dead.length; t++) {
    if (dead[t] || !real(t)) continue;
    const c = circ(t);
    if (c && insideBox(c.gx, c.gy)) keep.push(t);
  }
  const used = new Map(), order = [];
  for (const t of keep) for (const v of tri(t)) if (!used.has(v)) { used.set(v, order.length); order.push(v); }
  const n = order.length, adj = Array.from({ length: n }, () => new Set());
  for (const t of keep) { const [a, b, c] = tri(t).map((v) => used.get(v)); adj[a].add(b); adj[a].add(c); adj[b].add(a); adj[b].add(c); adj[c].add(a); adj[c].add(b); }
  // reverse Cuthill–McKee
  const seen = new Uint8Array(n), perm = [];
  const byDeg = Array.from({ length: n }, (_, i) => i).sort((p, q) => adj[p].size - adj[q].size);
  for (const s of byDeg) {
    if (seen[s]) continue;
    seen[s] = 1; const q = [s];
    for (let h0 = 0; h0 < q.length; h0++) { const u = q[h0]; perm.push(u); for (const w of [...adj[u]].sort((p, r) => adj[p].size - adj[r].size)) if (!seen[w]) { seen[w] = 1; q.push(w); } }
  }
  perm.reverse();
  const newIdx = new Int32Array(n); perm.forEach((old, k) => { newIdx[old] = k; });
  const nodes = new Float64Array(2 * n);
  order.forEach((v, old) => { const k = newIdx[old]; nodes[2 * k] = X[v]; nodes[2 * k + 1] = Y[v]; });
  const tris = new Int32Array(3 * keep.length), region = new Int32Array(keep.length);
  let minA = 180, maxA = 0, bw = 0;
  keep.forEach((t, i) => {
    let [a, b, c] = tri(t).map((v) => newIdx[used.get(v)]);
    tris[3 * i] = a; tris[3 * i + 1] = b; tris[3 * i + 2] = c;
    bw = Math.max(bw, Math.abs(a - b), Math.abs(b - c), Math.abs(a - c));
    const gx = (nodes[2 * a] + nodes[2 * b] + nodes[2 * c]) / 3, gy = (nodes[2 * a + 1] + nodes[2 * b + 1] + nodes[2 * c + 1]) / 3;
    let rg = 0; for (const l of loops) if (inPoly(gx, gy, l.poly)) rg = l.region;
    region[i] = rg;
    const P = [[nodes[2 * a], nodes[2 * a + 1]], [nodes[2 * b], nodes[2 * b + 1]], [nodes[2 * c], nodes[2 * c + 1]]];
    for (let k = 0; k < 3; k++) {
      const p = P[k], q = P[(k + 1) % 3], r = P[(k + 2) % 3], ux = q[0] - p[0], uy = q[1] - p[1], vx = r[0] - p[0], vy = r[1] - p[1];
      const ang = Math.atan2(Math.abs(ux * vy - uy * vx), ux * vx + uy * vy) * 180 / Math.PI;
      minA = Math.min(minA, ang); maxA = Math.max(maxA, ang);
    }
  });
  return { nodes, tris, region, stats: { points: n, tris: keep.length, minAngle: minA, maxAngle: maxA, bandwidth: bw, steiner: Math.max(0, X.length - 3 - inputPoints), truncated } };
}
