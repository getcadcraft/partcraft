/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — kinds, keys and report fields are read by code and by assistants; the words the person sees go through t() in the page. */
/**
 * photo-sketch.js — photo to sketch (0.8 round 2, EG.38, session part_PART_2). A picture of a flat part (its silhouette on a plain
 * background) or of a pen drawing becomes a PartCraft sketch at a stated scale: lines, arcs and circles, holes included, ready to extrude.
 * Classic image processing on lib/raster (docs/apps/scanned-drawings.md), in plain JavaScript on this computer: no trained model, no
 * network (rule 35). DOM-free; the caller decodes the picture.
 *
 *   photoToSketch(img, opts) → { found, mode, entities[], loops[], size: {w, h} (mm), mmPerPx, scaled, report, problems[] }
 *     img   = { w, h, channels (1 or 3), data } as lib/raster reads it (readScan / a canvas turned into 3 channels)
 *     opts  = { mode: 'silhouette' (default) | 'lines', known: { of: 'width' | 'height' | 'longest', mm } | mmPerPx, tolPx (default 1.5),
 *               minHolePx (smallest hole kept, in pixels of diameter; default 0.5 % of the longest side), square (degrees; default 2:
 *               lines this close to horizontal or vertical are made so; 0 = off), invert: 'auto' | true | false (dark object on light
 *               ground is the default), arcs: true }
 *   entity = { type: 'line', a: [x, y], b: [x, y] } | { type: 'arc', c, r, s, e (start and end, anticlockwise from s to e) } | { type: 'circle', c, r }
 *            all in millimetres, y up, the object's lower-left corner at the origin; loops[] = [[entity index …]] in order round each outline
 *   sketchFromEntities(S, entities, loops) → a sketch (sketch.js) with the loops chained and closed
 *   What cannot be told comes back as found: false with the reason in problems[], never a guess: no object, an object cut by the picture's
 *   edge, no scale given (the sketch is then in pixels, and says so).
 * Method: threshold (flatten + Otsu), the largest 8-connected piece, its pixel-edge outline and those of its holes (crack following),
 * Douglas-Peucker to the tolerance, corners where the direction turns, runs of gentle turns fitted by a circle (Kåsa), straight runs by a
 * total-least-squares line; whole outlines that are one circle become circles.
 */
import { toGrey, threshold, despeckle, trace, readScan, RasterError } from './raster/index.js';
import { addLine, addArc, addCircle, addConstraint, newSketch } from './sketch.js';

const RAD = Math.PI / 180;
const MAX_PIXELS = 24e6;

// ------------------------------------------------------------------------------------------------ outlines of a mask

/** The closed pixel-edge outlines of a mask (1 = object): outer loops clockwise on screen, holes anticlockwise. → [[x, y] corner points]. */
export function outlines(mask, w, h) {
  const out = new Map();   // "x,y" → [edges leaving that corner]: each [x1, y1, used]
  const edges = [];
  const at = (x, y) => (x < 0 || y < 0 || x >= w || y >= h ? 0 : mask[y * w + x]);
  const add = (x0, y0, x1, y1) => { const e = [x0, y0, x1, y1, false]; edges.push(e); const k = x0 + ',' + y0; (out.get(k) || out.set(k, []).get(k)).push(e); };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    if (!mask[y * w + x]) continue;
    if (!at(x, y - 1)) add(x, y, x + 1, y);               // top, left to right
    if (!at(x + 1, y)) add(x + 1, y, x + 1, y + 1);       // right, downwards
    if (!at(x, y + 1)) add(x + 1, y + 1, x, y + 1);       // bottom, right to left
    if (!at(x - 1, y)) add(x, y + 1, x, y);               // left, upwards
  }
  const loops = [];
  for (const e0 of edges) {
    if (e0[4]) continue;
    const pts = [];
    let e = e0;
    while (e && !e[4]) {
      e[4] = true; pts.push([e[0], e[1]]);
      const cand = (out.get(e[2] + ',' + e[3]) || []).filter((q) => !q[4]);
      if (!cand.length) break;
      if (cand.length === 1) { e = cand[0]; continue; }
      // two ways on at a corner where foreground pixels touch diagonally: keep them one piece (turn left)
      const dx = e[2] - e[0], dy = e[3] - e[1];
      const turn = (q) => dx * (q[3] - q[1]) - dy * (q[2] - q[0]);   // cross: > 0 = right on screen, < 0 = left
      cand.sort((a, b) => turn(a) - turn(b));
      e = cand[0];
    }
    if (pts.length >= 4) loops.push(pts);
  }
  return loops;
}

const areaOf = (P) => { let a = 0; for (let i = 0; i < P.length; i++) { const p = P[i], q = P[(i + 1) % P.length]; a += p[0] * q[1] - q[0] * p[1]; } return a / 2; };   // screen y down: clockwise > 0

// ------------------------------------------------------------------------------------------------ fitting

/** Douglas-Peucker on a closed polyline; returns the indices of the vertices kept (at least 3 when it can). */
function simplifyClosed(P, tol) {
  const n = P.length;
  if (n < 4) return P.map((_, i) => i);
  // split at the point farthest from the first, so both halves are open runs
  let far = 0, fd = -1;
  for (let i = 1; i < n; i++) { const d = (P[i][0] - P[0][0]) ** 2 + (P[i][1] - P[0][1]) ** 2; if (d > fd) { fd = d; far = i; } }
  const keep = new Set([0, far]);
  const run = (i0, i1) => {   // indices on the closed ring from i0 to i1 (inclusive, going forward)
    const stack = [[i0, i1]];
    while (stack.length) {
      const [a, b] = stack.pop();
      const len = (b - a + n) % n;
      if (len < 2) continue;
      const A = P[a], B = P[b], dx = B[0] - A[0], dy = B[1] - A[1], L = Math.hypot(dx, dy);
      let best = -1, bi = -1;
      for (let k = 1; k < len; k++) {
        const i = (a + k) % n, Q = P[i];
        const d = L > 1e-9 ? Math.abs(dx * (Q[1] - A[1]) - dy * (Q[0] - A[0])) / L : Math.hypot(Q[0] - A[0], Q[1] - A[1]);
        if (d > best) { best = d; bi = i; }
      }
      if (best > tol) { keep.add(bi); stack.push([a, bi], [bi, b]); }
    }
  };
  run(0, far); run(far, 0);
  return [...keep].sort((a, b) => a - b);
}

/** Circle through points by the algebraic (Kåsa) fit: { c: [x, y], r, rms, max } or null. */
export function fitCircle(pts) {
  const n = pts.length;
  if (n < 3) return null;
  let mx = 0, my = 0;
  for (const p of pts) { mx += p[0]; my += p[1]; }
  mx /= n; my /= n;
  let suu = 0, suv = 0, svv = 0, suuu = 0, svvv = 0, suvv = 0, svuu = 0;
  for (const p of pts) { const u = p[0] - mx, v = p[1] - my; suu += u * u; suv += u * v; svv += v * v; suuu += u * u * u; svvv += v * v * v; suvv += u * v * v; svuu += v * u * u; }
  const det = suu * svv - suv * suv;
  if (Math.abs(det) < 1e-12) return null;
  const uc = (svv * (suuu + suvv) - suv * (svvv + svuu)) / (2 * det), vc = (suu * (svvv + svuu) - suv * (suuu + suvv)) / (2 * det);
  const cx = mx + uc, cy = my + vc;
  let r = 0;
  for (const p of pts) r += Math.hypot(p[0] - cx, p[1] - cy);
  r /= n;
  let ss = 0, max = 0;
  for (const p of pts) { const d = Math.abs(Math.hypot(p[0] - cx, p[1] - cy) - r); ss += d * d; if (d > max) max = d; }
  return { c: [cx, cy], r, rms: Math.sqrt(ss / n), max };
}

/** Total-least-squares line through points: { p: [x, y] (centroid), d: unit direction, max (largest distance) }. */
export function fitLine(pts) {
  let mx = 0, my = 0;
  for (const p of pts) { mx += p[0]; my += p[1]; }
  mx /= pts.length; my /= pts.length;
  let sxx = 0, sxy = 0, syy = 0;
  for (const p of pts) { const u = p[0] - mx, v = p[1] - my; sxx += u * u; sxy += u * v; syy += v * v; }
  const th = 0.5 * Math.atan2(2 * sxy, sxx - syy), d = [Math.cos(th), Math.sin(th)];
  let max = 0;
  for (const p of pts) max = Math.max(max, Math.abs(-d[1] * (p[0] - mx) + d[0] * (p[1] - my)));
  return { p: [mx, my], d, max };
}

const turnDeg = (a, b, c) => { const u = [b[0] - a[0], b[1] - a[1]], v = [c[0] - b[0], c[1] - b[1]]; return Math.atan2(u[0] * v[1] - u[1] * v[0], u[0] * v[0] + u[1] * v[1]) / RAD; };

/** One outline (dense corner points, pixels) → pieces [{ type: 'line' | 'arc' | 'circle', … }] in order, with shared vertices. */
export function fitOutline(P, { tol = 1.5, arcs = true, minCirclePx = 6 } = {}) {
  const n = P.length;
  // the whole outline one circle?
  if (arcs) {
    const cf = fitCircle(P);
    if (cf && cf.r >= minCirclePx && cf.max <= Math.max(tol, 0.9) * 1.0 + 0.5 && n > 12) return [{ type: 'circle', c: cf.c, r: cf.r }];
  }
  const idx = simplifyClosed(P, tol);
  const V = idx.map((i) => P[i]), m = V.length;
  if (m < 3) return [];
  // a polygon vertex is a corner when the direction turns by more than 30°; gentle vertices in a row belong to an arc
  const turns = V.map((p, i) => turnDeg(V[(i + m - 1) % m], p, V[(i + 1) % m]));
  const gentle = turns.map((t) => Math.abs(t) < 38 && arcs);
  // runs of gentle vertices of one sign: candidate arcs between two vertices (first/last ones are the run's neighbours)
  const pieces = [];
  const pointsBetween = (i, j) => { const a = idx[i], b = idx[j % m], out = []; for (let k = a; ; k = (k + 1) % n) { out.push(P[k]); if (k === b) break; if (out.length > n + 1) break; } return out; };
  let start = gentle.findIndex((g) => !g);
  if (start < 0) start = 0;   // all gentle: a smooth closed curve that is not one circle: lines through the vertices
  const order = Array.from({ length: m }, (_, k) => (start + k) % m);
  let i = 0;
  while (i < m) {
    const a = order[i];
    // extend an arc from a over following gentle vertices of the same turning sign
    let j = i + 1;
    const sign = Math.sign(turns[order[j % m]] || 0);
    while (j < m && gentle[order[j % m]] && Math.sign(turns[order[j % m]]) === sign && sign !== 0) j++;
    let done = false;
    if (j - i >= 3) {   // at least three segments: a candidate arc a → order[j]
      for (let jj = j; jj >= i + 3; jj--) {
        const b = order[jj % m], dense = ((idx[b] - idx[a] + n) % n) > 0 ? pointsBetween(a, b) : null;
        if (!dense || dense.length < 6) continue;
        const cf = fitCircle(dense);
        if (cf && cf.max <= tol + 0.35 && cf.r >= 2 * tol) {
          pieces.push({ type: 'arc', c: cf.c, r: cf.r, from: a, to: b, dense });
          i = jj; done = true; break;
        }
      }
    }
    if (!done) { const b = order[(i + 1) % m]; pieces.push({ type: 'line', from: a, to: b, dense: pointsBetween(a, b) }); i += 1; }
  }
  // slivers: a line a couple of pixels long between two others is a staircase step at a corner, not an edge; take it out and put the
  // corner where the two neighbours' fitted lines meet. Corners between two lines are likewise the meeting of their fitted lines.
  const meetOf = (u, v) => {
    const den = u.d[0] * v.d[1] - u.d[1] * v.d[0];
    if (Math.abs(den) < Math.sin(8 * RAD)) return null;
    const t = ((v.p[0] - u.p[0]) * v.d[1] - (v.p[1] - u.p[1]) * v.d[0]) / den;
    return [u.p[0] + t * u.d[0], u.p[1] + t * u.d[1]];
  };
  const lenOf = (q) => Math.hypot(V[q.to % m][0] - V[q.from][0], V[q.to % m][1] - V[q.from][1]);
  for (let guard = 0; guard < pieces.length * 2; guard++) {
    const k = pieces.findIndex((q, i) => q.type === 'line' && pieces.length > 3 && lenOf(q) < 2.5 * tol && pieces[(i + pieces.length - 1) % pieces.length].type === 'line' && pieces[(i + 1) % pieces.length].type === 'line');
    if (k < 0) break;
    const prev = pieces[(k + pieces.length - 1) % pieces.length], next = pieces[(k + 1) % pieces.length], cur = pieces[k];
    const hit = meetOf(fitLine(prev.dense), fitLine(next.dense));
    const old0 = V[cur.from], old1 = V[cur.to % m], mid = [(old0[0] + old1[0]) / 2, (old0[1] + old1[1]) / 2];
    V[prev.to % m] = hit && Math.hypot(hit[0] - mid[0], hit[1] - mid[1]) <= 4 * tol ? hit : mid;
    next.from = prev.to % m;
    prev.dense = prev.dense.concat(cur.dense.slice(1)); next.dense = cur.dense.slice(0, -1).concat(next.dense);   // the points the sliver held go to its neighbours
    pieces.splice(k, 1);
  }
  for (let k = 0; k < pieces.length; k++) {
    const a = pieces[k], b = pieces[(k + 1) % pieces.length];
    if (a.type !== 'line' || b.type !== 'line' || pieces.length < 3) continue;
    const hit = meetOf(fitLine(a.dense), fitLine(b.dense)), at = V[a.to % m];
    if (hit && Math.hypot(hit[0] - at[0], hit[1] - at[1]) <= 3 * tol) V[a.to % m] = hit;
  }
  // an arc's ends sit where the polygon's corner was found, up to the tolerance short of where the curve really leaves the line:
  // grow each end along the outline while the points stay on the circle, then refit
  const near = Math.min(0.75, tol * 0.5);
  const between = (a, b) => { const out = []; for (let k = a, c = 0; c <= n; k = (k + 1) % n, c++) { out.push(P[k]); if (k === b) break; } return out; };
  for (const p of pieces) {
    if (p.type !== 'arc') continue;
    let ia = idx[p.from], ib = idx[p.to % m], cf = fitCircle(p.dense);
    const prevV = idx[(p.from + m - 1) % m], nextV = idx[(p.to + 1) % m];
    for (const dir of [-1, 1]) {
      for (let k = 0; k < n; k++) {
        const j = dir < 0 ? (ia - 1 + n) % n : (ib + 1) % n;
        if (j === (dir < 0 ? prevV : nextV)) break;
        if (Math.abs(Math.hypot(P[j][0] - cf.c[0], P[j][1] - cf.c[1]) - cf.r) > near) break;
        if (dir < 0) ia = j; else ib = j;
      }
    }
    p.dense = between(ia, ib);
    const cf2 = fitCircle(p.dense);
    if (cf2) { p.c = cf2.c; p.r = cf2.r; }
    const onCircle = (q) => { const d = Math.hypot(q[0] - p.c[0], q[1] - p.c[1]) || 1; return [p.c[0] + p.r * (q[0] - p.c[0]) / d, p.c[1] + p.r * (q[1] - p.c[1]) / d]; };
    V[p.from] = onCircle(P[ia]); V[p.to % m] = onCircle(P[ib]);
  }
  return pieces.map((p) => ({ ...p, a: V[p.from], b: V[p.to % m] ?? V[p.to], V }));
}

// ------------------------------------------------------------------------------------------------ the whole job

function sizeOf(loops) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const L of loops) for (const [x, y] of L) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  return { x0, y0, x1, y1, w: x1 - x0, h: y1 - y0 };
}

export function photoToSketch(img, opts = {}) {
  const problems = [];
  const mode = opts.mode === 'lines' ? 'lines' : 'silhouette';
  const tol = Math.max(0.5, Math.min(20, opts.tolPx ?? 1.5));
  const base = { found: false, mode, entities: [], loops: [], size: { w: 0, h: 0 }, mmPerPx: 1, scaled: false, report: {}, problems };
  if (!img || !(img.w > 2) || !(img.h > 2) || img.w * img.h > MAX_PIXELS) { problems.push('The picture is missing, too small or over ' + MAX_PIXELS / 1e6 + ' million pixels.'); return base; }
  const grey = toGrey(img);
  let bm = threshold(grey, { mode: 'auto' });
  const n = bm.w * bm.h;
  let ink = 0; for (let i = 0; i < n; i++) ink += bm.data[i];
  const swap = opts.invert === true || (opts.invert !== false && mode === 'silhouette' && ink / n > 0.5);
  if (swap) for (let i = 0; i < n; i++) bm.data[i] = bm.data[i] ? 0 : 1;
  despeckle(bm, { maxArea: Math.max(6, Math.round(n * 2e-6)) });
  let mm = 1, scaled = false;
  let entitiesPx = [], loopsPx = [];
  const report = { pixels: [img.w, img.h], inverted: !!swap, tolPx: tol };

  if (mode === 'silhouette') {
    // the biggest piece
    const stack = new Int32Array(n);
    let bestArea = 0, bestSeed = -1;
    const seen = new Uint8Array(n);
    for (let s = 0; s < n; s++) {
      if (!bm.data[s] || seen[s]) continue;
      let sp = 0, area = 0; stack[sp++] = s; seen[s] = 1;
      while (sp) {
        const p = stack[--sp], x = p % bm.w, y = (p - x) / bm.w; area++;
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= bm.w || yy >= bm.h) continue; const q = yy * bm.w + xx; if (bm.data[q] && !seen[q]) { seen[q] = 1; stack[sp++] = q; } }
      }
      if (area > bestArea) { bestArea = area; bestSeed = s; }
    }
    const mask = new Uint8Array(n);
    if (bestSeed < 0) { problems.push('No object found: the picture has no dark shape on a light ground (or light on dark: say invert).'); return { ...base, report }; }
    { let sp = 0; stack[sp++] = bestSeed; mask[bestSeed] = 1;
      while (sp) { const p = stack[--sp], x = p % bm.w, y = (p - x) / bm.w; for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const xx = x + dx, yy = y + dy; if (xx < 0 || yy < 0 || xx >= bm.w || yy >= bm.h) continue; const q = yy * bm.w + xx; if (bm.data[q] && !mask[q]) { mask[q] = 1; stack[sp++] = q; } } } }
    if (bestArea < 25) { problems.push('The object is only ' + bestArea + ' pixels: too small to trace.'); return { ...base, report }; }
    for (let x = 0; x < bm.w; x++) if (mask[x] || mask[(bm.h - 1) * bm.w + x]) { problems.push('The object touches the edge of the picture, so its outline is cut off there.'); break; }
    if (!problems.length) for (let y = 0; y < bm.h; y++) if (mask[y * bm.w] || mask[y * bm.w + bm.w - 1]) { problems.push('The object touches the edge of the picture, so its outline is cut off there.'); break; }
    const longest = Math.max(img.w, img.h), minHole = opts.minHolePx ?? 0.005 * longest;
    const raw = outlines(mask, bm.w, bm.h);
    const keep = [];
    for (const L of raw) {
      const a = areaOf(L), outer = a > 0;
      if (!outer && 2 * Math.sqrt(Math.abs(a) / Math.PI) < minHole) continue;   // a speck of background, not a hole
      keep.push({ L, outer, a: Math.abs(a) });
    }
    const main = keep.filter((k) => k.outer).sort((p, q) => q.a - p.a)[0];
    if (!main) { problems.push('No outline could be followed.'); return { ...base, report }; }
    const loopsKeep = [main, ...keep.filter((k) => !k.outer)];
    loopsPx = loopsKeep.map((k) => k.L.slice().reverse());   // every outline anticlockwise on the sketch, so each arc runs from its start to its end the way a sketch arc does
    report.object = { area: bestArea, holes: loopsKeep.length - 1 };
    const sz = sizeOf([main.L]);
    // the scale
    if (typeof opts.mmPerPx === 'number' && opts.mmPerPx > 0) { mm = opts.mmPerPx; scaled = true; }
    else if (opts.known && opts.known.mm > 0) {
      const ext = opts.known.of === 'height' ? sz.h : opts.known.of === 'longest' ? Math.max(sz.w, sz.h) : sz.w;
      mm = opts.known.mm / ext; scaled = true;
    }
    const sk = sizeOf(loopsPx);
    // fit every outline
    const fitted = loopsPx.map((L) => fitOutline(L, { tol, arcs: opts.arcs !== false }));
    const sq = opts.square === undefined ? 2 : opts.square;
    const X = (x) => (x - sk.x0) * mm, Y = (y) => (sk.y1 - y) * mm;
    fitted.forEach((pieces, li) => {
      const loop = [];
      if (pieces.length === 1 && pieces[0].type === 'circle') {
        const c = pieces[0]; entitiesPx.push({ type: 'circle', c: [X(c.c[0]), Y(c.c[1])], r: c.r * mm }); loop.push(entitiesPx.length - 1); loopsPx[li] = loop; return;
      }
      // vertices (pixels), squared where lines are near horizontal or vertical
      const V = pieces.length ? pieces[0].V.map((p) => p.slice()) : [];
      if (sq > 0) {
        const px = V.map(() => []), py = V.map(() => []);
        for (const p of pieces) {
          if (p.type !== 'line') continue;
          const A = V[p.from], B = V[p.to % V.length], ang = Math.abs(Math.atan2(B[1] - A[1], B[0] - A[0]) / RAD);
          if (ang < sq || ang > 180 - sq) { const y = (A[1] + B[1]) / 2; py[p.from].push(y); py[p.to % V.length].push(y); }
          else if (Math.abs(ang - 90) < sq) { const x = (A[0] + B[0]) / 2; px[p.from].push(x); px[p.to % V.length].push(x); }
        }
        V.forEach((v, i) => { if (px[i].length) v[0] = px[i].reduce((s, q) => s + q, 0) / px[i].length; if (py[i].length) v[1] = py[i].reduce((s, q) => s + q, 0) / py[i].length; });
      }
      for (const p of pieces) {
        const A = V[p.from], B = V[p.to % V.length];
        if (p.type === 'line') { entitiesPx.push({ type: 'line', a: [X(A[0]), Y(A[1])], b: [X(B[0]), Y(B[1])] }); }
        else {
          // circle through the fitted centre and the (possibly moved) ends; anticlockwise on the sketch (y up) from s to e
          const s = [X(A[0]), Y(A[1])], e = [X(B[0]), Y(B[1])], c = [X(p.c[0]), Y(p.c[1])], r = p.r * mm;
          const cross = (s[0] - c[0]) * (e[1] - c[1]) - (s[1] - c[1]) * (e[0] - c[0]);
          // the arc is the short way round when it spans under half a turn; its direction follows the outline's
          const mid = p.dense[Math.floor(p.dense.length / 2)], m2 = [X(mid[0]), Y(mid[1])];
          const crossM = (s[0] - c[0]) * (m2[1] - c[1]) - (s[1] - c[1]) * (m2[0] - c[0]);
          const ccw = crossM > 0 || (Math.abs(crossM) < 1e-12 && cross > 0);
          entitiesPx.push({ type: 'arc', c, r, s: ccw ? s : e, e: ccw ? e : s });
        }
        loop.push(entitiesPx.length - 1);
      }
      loopsPx[li] = loop;
    });
    report.size = { w: sz.w * mm, h: sz.h * mm };
    report.lines = entitiesPx.filter((e) => e.type === 'line').length; report.arcs = entitiesPx.filter((e) => e.type === 'arc').length; report.circles = entitiesPx.filter((e) => e.type === 'circle').length;
    if (!scaled) problems.push('No scale was given, so the sketch is in pixels. Say one length: known {of: "width", mm: 100}, or mmPerPx.');
    return { found: true, mode, entities: entitiesPx, loops: loopsPx, size: { w: sk.w * mm, h: sk.h * mm }, mmPerPx: mm, scaled, report, problems };
  }

  // pen lines: lib/raster's centre-line trace
  const tr = trace(bm, { tol, arcs: opts.arcs !== false });
  if (!tr.lines.length && !tr.arcs.length) { problems.push('No lines found in the picture.'); return { ...base, report }; }
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const grow = (x, y) => { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; };
  for (const l of tr.lines) { grow(l.x1, l.y1); grow(l.x2, l.y2); }
  for (const a of tr.arcs) { grow(a.sx, a.sy); grow(a.ex, a.ey); grow(a.cx - a.r * 0, a.cy); }
  const ext = { w: x1 - x0, h: y1 - y0 };
  if (typeof opts.mmPerPx === 'number' && opts.mmPerPx > 0) { mm = opts.mmPerPx; scaled = true; }
  else if (opts.known && opts.known.mm > 0) { const e = opts.known.of === 'height' ? ext.h : opts.known.of === 'longest' ? Math.max(ext.w, ext.h) : ext.w; mm = opts.known.mm / e; scaled = true; }
  const X = (x) => (x - x0) * mm, Y = (y) => (y1 - y) * mm;
  for (const l of tr.lines) entitiesPx.push({ type: 'line', a: [X(l.x1), Y(l.y1)], b: [X(l.x2), Y(l.y2)] });
  for (const a of tr.arcs) {
    const s = [X(a.sx), Y(a.sy)], e = [X(a.ex), Y(a.ey)], c = [X(a.cx), Y(a.cy)];
    // the trace gives a0 → a1 on the picture (y down); on the sketch (y up) that sweep is reversed
    entitiesPx.push({ type: 'arc', c, r: a.r * mm, s: e, e: s });
  }
  report.lines = tr.lines.length; report.arcs = tr.arcs.length; report.size = { w: ext.w * mm, h: ext.h * mm };
  if (!scaled) problems.push('No scale was given, so the sketch is in pixels. Say one length: known {of: "width", mm: 100}, or mmPerPx.');
  return { found: true, mode, entities: entitiesPx, loops: [], size: { w: ext.w * mm, h: ext.h * mm }, mmPerPx: mm, scaled, report, problems };
}

/** A PartCraft sketch from entities: each loop chained (shared corners) and closed; entities in no loop are drawn on their own. */
export function sketchFromEntities(entities, loops = []) {
  const sk = newSketch();
  const used = new Set();
  const xy = (id) => { const p = sk.entities.find((q) => q.id === id); return [p.x, p.y]; };
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  /** Draw e so that it starts at the point id `from` when it has one: an arc is always drawn anticlockwise, from its own start to its own end. */
  const draw = (e, from) => {
    if (e.type === 'circle') return { made: addCircle(sk, e.c, e.r), start: null, end: null };
    if (e.type === 'line') { const m = addLine(sk, from ?? e.a, e.b); return { made: m, start: m.p1, end: m.p2 }; }
    if (from && dist(xy(from), e.e) < dist(xy(from), e.s)) { const m = addArc(sk, e.c, e.s, from); return { made: m, start: m.e, end: m.s }; }   // stored the other way round
    const m = addArc(sk, e.c, from ?? e.s, e.e);
    return { made: m, start: m.s, end: m.e };
  };
  for (const loop of loops) {
    let first = null, prev = null;
    for (const i of loop) {
      const e = entities[i]; used.add(i);
      if (e.type === 'circle') { draw(e); continue; }
      const d = draw(e, prev);
      if (!first) first = d;
      prev = d.end;
    }
    if (first && prev && prev !== first.start) addConstraint(sk, 'coincident', [prev, first.start]);
  }
  entities.forEach((e, i) => { if (!used.has(i)) draw(e); });
  return sk;
}

/** A PNG, JPEG or TIFF file → the picture photoToSketch takes. A JPEG the reader cannot decode (progressive) goes to `decodeJpeg` when the host has one. */
export async function decodePhoto(bytes, { decodeJpeg = null } = {}) {
  try {
    const r = await readScan(bytes, 0, { decodeJpeg });
    return { w: r.w, h: r.h, channels: r.channels, data: r.data };
  } catch (e) {
    if (e instanceof RasterError) throw Object.assign(new Error(e.message), { code: 'unsupported', key: e.key, next: ['Save the picture as a PNG or a baseline JPEG and try again.'] });
    throw e;
  }
}

/** The sketch and extrude a found photo makes in a part: [{ type: 'sketch', … }, { type: 'extrude', … }] as part.js addFeature takes them. */
export function featuresFor(result, { plane = 'front', depth = 0 } = {}) {
  const sketch = sketchFromEntities(result.entities, result.loops);
  const out = [{ type: 'sketch', props: { plane: { kind: 'base', name: plane }, sketch } }];
  if (depth > 0) out.push({ type: 'extrude', props: { depth }, usesSketch: true });
  return out;
}
