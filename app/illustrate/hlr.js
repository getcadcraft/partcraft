/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/hlr.js — hidden-line removal for a whole manual view by the mesh method (DOM-free; the method of drawing.js
 * projectView, which runs without OpenCascade): every drawn edge is cut into short pieces and each piece's middle is tested
 * against the triangles in front of it, found through a grid over the picture. Extended here to many parts at their places
 * in the view (explode and moves included), perspective cameras, ghosted parts (drawn light, hiding nothing), and cuts
 * (look.js: a section plane or a box cut-away) with the cut faces capped and hatched.
 *
 *   hiddenLines(m, meshes, view, { aspect, cuts, hidden, detail, sharp, pieces }) → {
 *     lines:   [{ a: [u,v], b: [u,v], kind: 'outline'|'edge'|'detail'|'hidden'|'ghost'|'cut', inst }]   picture coordinates
 *     hatch:   [{ a, b, inst }]          hatch lines on the cut faces (visible parts only)
 *     caps:    [{ inst, loops: [[[u,v]…]] }]   the cut faces' outlines in the picture (for fills)
 *     tris:    [{ pts: [[u,v]×3], d, inst, shade }] front-facing triangles, back to front (for flat / shaded fills)
 *     stats:   { triangles, edges, pieces, ms }
 *   }
 *   Edge kinds: outline = open edges and silhouettes (where a face turned to the viewer meets one turned away); edge = sharp
 *   edges (faces meeting at more than `sharp` degrees, 20 like drawing.js); detail = softer creases (8°…sharp) when asked.
 *   xray: true draws every edge as seen (nothing hides), for the magnifier's inside mode.
 *   Pieces: an edge is cut into pieces of about 1/`pieces` of the picture's height (default 600).
 * cuts = { removed(p) → bool, faces: [{ n, c, region(p) → bool }] } in world coordinates (look.js builds it), or null.
 */
import { topology } from './edges.js';
import { worldOf, instState } from './manual.js';
import { projector } from './camera.js';
import { dot, sub, cross } from './m4.js';

const COS = (deg) => Math.cos(deg * Math.PI / 180);

export function hiddenLines(m, meshes, view, { aspect = 1.6, cuts = null, hidden = true, detail = false, sharp = 20, pieces = 600, wantTris = false, lightDir = null, xray = false } = {}) {
  const t0 = Date.now();
  const P = projector(view.camera, aspect);
  const persp = P.type === 'persp';
  const world = worldOf(m, view);
  const cam = view.camera;
  const shown = m.instances.filter((i) => !instState(view, i.id).hide && meshes.get(i.part));
  // ---- every shown instance in world and picture coordinates
  const parts = [];
  let size = 0;
  const topoCache = new Map();
  for (const inst of shown) {
    const mesh = meshes.get(inst.part), M = world.get(inst.id), st = instState(view, inst.id);
    let topo = topoCache.get(inst.part);
    if (!topo) { topo = topology(mesh); topoCache.set(inst.part, topo); }
    const Pm = mesh.positions, nv = Pm.length / 3;
    const W = new Float64Array(nv * 3), Q = new Float64Array(nv * 3);
    for (let i = 0; i < nv; i++) {
      const x = Pm[i * 3], y = Pm[i * 3 + 1], z = Pm[i * 3 + 2];
      const wx = M[0] * x + M[4] * y + M[8] * z + M[12], wy = M[1] * x + M[5] * y + M[9] * z + M[13], wz = M[2] * x + M[6] * y + M[10] * z + M[14];
      W[i * 3] = wx; W[i * 3 + 1] = wy; W[i * 3 + 2] = wz;
      const q = P.project([wx, wy, wz]);
      Q[i * 3] = q[0]; Q[i * 3 + 1] = q[1]; Q[i * 3 + 2] = q[2];
    }
    // world normals of the triangles (the matrix may turn the part; it is a rigid move for every reader's output)
    const nt = mesh.indices.length / 3, N = new Float64Array(nt * 3);
    for (let tt = 0; tt < nt; tt++) {
      const n = [topo.normals[tt * 3], topo.normals[tt * 3 + 1], topo.normals[tt * 3 + 2]];
      N[tt * 3] = M[0] * n[0] + M[4] * n[1] + M[8] * n[2]; N[tt * 3 + 1] = M[1] * n[0] + M[5] * n[1] + M[9] * n[2]; N[tt * 3 + 2] = M[2] * n[0] + M[6] * n[1] + M[10] * n[2];
    }
    const closed = topo.edges.every((e) => e.t2 >= 0);
    parts.push({ inst, mesh, topo, W, Q, N, closed, ghost: st.ghost || st.opacity < 0.5 });
    for (let i = 0; i < nv; i++) size = Math.max(size, Math.abs(Q[i * 3 + 2]));
  }
  // facing: toward the camera
  const facing = (p, tt) => {
    const n = [p.N[tt * 3], p.N[tt * 3 + 1], p.N[tt * 3 + 2]];
    if (!persp) return -dot(n, P.dir) > 1e-9;
    const a = p.mesh.indices[tt * 3] * 3;
    return dot(n, [cam.pos[0] - p.W[a], cam.pos[1] - p.W[a + 1], cam.pos[2] - p.W[a + 2]]) > 1e-9;
  };
  // ---- the occluders: triangles of solid (not ghosted) parts; front-facing only for a closed part with nothing cut away
  let u0 = Infinity, v0 = Infinity, u1 = -Infinity, v1 = -Infinity;
  for (const p of parts) for (let i = 0; i < p.Q.length; i += 3) { u0 = Math.min(u0, p.Q[i]); u1 = Math.max(u1, p.Q[i]); v0 = Math.min(v0, p.Q[i + 1]); v1 = Math.max(v1, p.Q[i + 1]); }
  if (!parts.length) return { lines: [], hatch: [], caps: [], tris: [], stats: { triangles: 0, edges: 0, pieces: 0, ms: 0 } };
  const G = 128, cw = (u1 - u0) / G || 1, ch = (v1 - v0) / G || 1;
  const grid = Array.from({ length: G * G }, () => []);
  const occ = [];   // [part, tri]
  let triCount = 0;
  parts.forEach((p, pi) => {
    if (p.ghost) return;
    const I = p.mesh.indices, nt = I.length / 3;
    for (let tt = 0; tt < nt; tt++) {
      if (p.closed && !cuts && !facing(p, tt)) continue;
      const a = I[tt * 3] * 3, b = I[tt * 3 + 1] * 3, c = I[tt * 3 + 2] * 3, Q = p.Q;
      if (Q[a + 2] <= 0 && Q[b + 2] <= 0 && Q[c + 2] <= 0) continue;   // behind a perspective camera
      const k = occ.length / 2;
      occ.push(pi, tt);
      triCount++;
      const gi0 = Math.max(0, Math.floor((Math.min(Q[a], Q[b], Q[c]) - u0) / cw)), gi1 = Math.min(G - 1, Math.floor((Math.max(Q[a], Q[b], Q[c]) - u0) / cw));
      const gj0 = Math.max(0, Math.floor((Math.min(Q[a + 1], Q[b + 1], Q[c + 1]) - v0) / ch)), gj1 = Math.min(G - 1, Math.floor((Math.max(Q[a + 1], Q[b + 1], Q[c + 1]) - v0) / ch));
      for (let i = gi0; i <= gi1; i++) for (let j = gj0; j <= gj1; j++) grid[j * G + i].push(k);
    }
  });
  // ---- the cut faces (caps): section loops of every solid part with each cut plane
  const caps = [];   // { face, part, loops3: [[world points]], loops2: [[[s,t]]], frame: { o, e1, e2 }, box (picture) }
  if (cuts) {
    for (const face of cuts.faces) {
      const e1 = Math.abs(face.n[1]) < 0.9 ? norm3(cross(face.n, [0, 1, 0])) : norm3(cross(face.n, [1, 0, 0])), e2 = cross(face.n, e1);
      const o = [face.n[0] * face.c, face.n[1] * face.c, face.n[2] * face.c];
      parts.forEach((p, pi) => {
        if (p.ghost) return;
        const loops3 = sectionLoops(p, face.n, face.c);
        if (!loops3.length) return;
        const to2 = (w) => { const d = sub(w, o); return [dot(d, e1), dot(d, e2)]; };
        const loops2 = loops3.map((l) => l.map(to2));
        let bu0 = Infinity, bv0 = Infinity, bu1 = -Infinity, bv1 = -Infinity;
        for (const l of loops3) for (const w of l) { const q = P.project(w); bu0 = Math.min(bu0, q[0]); bu1 = Math.max(bu1, q[0]); bv0 = Math.min(bv0, q[1]); bv1 = Math.max(bv1, q[1]); }
        caps.push({ face, part: pi, loops3, loops2, frame: { o, e1, e2 }, box: [bu0, bv0, bu1, bv1] });
      });
    }
  }
  const capAt = (cap, w) => cap.face.region(w) && insideLoops(cap.loops2, [dot(sub(w, cap.frame.o), cap.frame.e1), dot(sub(w, cap.frame.o), cap.frame.e2)]);
  // ---- is a point (picture u, v at depth d) hidden?
  const eps = 1e-6 * Math.max(size, 1) + 1e-9;
  const margin = 1e-7;
  function occluded(u, v, d, self = -1) {
    const i = Math.min(G - 1, Math.max(0, Math.floor((u - u0) / cw))), j = Math.min(G - 1, Math.max(0, Math.floor((v - v0) / ch)));
    for (const k of grid[j * G + i]) {
      const p = parts[occ[k * 2]], tt = occ[k * 2 + 1], I = p.mesh.indices, Q = p.Q;
      const a = I[tt * 3] * 3, b = I[tt * 3 + 1] * 3, c = I[tt * 3 + 2] * 3;
      const x1 = Q[a], y1 = Q[a + 1], x2 = Q[b], y2 = Q[b + 1], x3 = Q[c], y3 = Q[c + 1];
      const den = (y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3);
      if (Math.abs(den) < 1e-18) continue;
      const l1 = ((y2 - y3) * (u - x3) + (x3 - x2) * (v - y3)) / den, l2 = ((y3 - y1) * (u - x3) + (x1 - x3) * (v - y3)) / den, l3 = 1 - l1 - l2;
      if (l1 < margin || l2 < margin || l3 < margin) continue;
      let w1 = l1, w2 = l2, w3 = l3, depth;
      if (persp) { w1 = l1 / Q[a + 2]; w2 = l2 / Q[b + 2]; w3 = l3 / Q[c + 2]; const s = w1 + w2 + w3; depth = 1 / s; w1 /= s; w2 /= s; w3 /= s; } else depth = l1 * Q[a + 2] + l2 * Q[b + 2] + l3 * Q[c + 2];
      if (depth >= d - eps * 10) continue;
      if (cuts) {
        const W = p.W, wp = [w1 * W[a] + w2 * W[b] + w3 * W[c], w1 * W[a + 1] + w2 * W[b + 1] + w3 * W[c + 1], w1 * W[a + 2] + w2 * W[b + 2] + w3 * W[c + 2]];
        if (cuts.removed(wp)) continue;
      }
      return true;
    }
    if (caps.length) {
      const ray = P.ray(u, v);
      for (const cap of caps) {
        if (cap === self || u < cap.box[0] || u > cap.box[2] || v < cap.box[1] || v > cap.box[3]) continue;
        const den = dot(cap.face.n, ray.d);
        if (Math.abs(den) < 1e-12) continue;
        const tt = (cap.face.c - dot(cap.face.n, ray.o)) / den;
        const w = [ray.o[0] + ray.d[0] * tt, ray.o[1] + ray.d[1] * tt, ray.o[2] + ray.d[2] * tt];
        const dw = P.project(w)[2];
        if (dw < d - eps * 10 && capAt(cap, w)) return true;
      }
    }
    return false;
  }
  // ---- the edges to draw, piece by piece
  const lines = [];
  const step = 1 / pieces;
  const cosSharp = COS(sharp), cosDetail = COS(8);
  let edgeCount = 0, pieceCount = 0;
  // pieces in a row of one edge with one look join into one line (never across edges: that would cut corners)
  let eid = 0;
  const emit = (kind, a, b, inst) => { const last = lines[lines.length - 1]; if (last && last._e === eid && last.kind === kind && last.b[0] === a[0] && last.b[1] === a[1]) last.b = b; else lines.push({ a, b, kind, inst, _e: eid }); };
  parts.forEach((p) => {
    const { topo, W, Q } = p;
    for (const e of topo.edges) {
      let kind = null;
      if (e.t2 < 0) kind = 'outline';
      else {
        const f1 = facing(p, e.t1), f2 = facing(p, e.t2);
        if (f1 !== f2) kind = 'outline';
        else if (e.cos < cosSharp) kind = 'edge';
        else if (detail && e.cos < cosDetail) kind = 'detail';
        if (kind && kind !== 'outline' && !f1 && p.closed && !cuts) kind = 'back';   // an edge between two back faces: hidden
      }
      if (!kind) continue;
      edgeCount++; eid++;
      const A = [W[e.a * 3], W[e.a * 3 + 1], W[e.a * 3 + 2]], B = [W[e.b * 3], W[e.b * 3 + 1], W[e.b * 3 + 2]];
      const qa = [Q[e.a * 3], Q[e.a * 3 + 1]], qb = [Q[e.b * 3], Q[e.b * 3 + 1]];
      const len2 = Math.hypot(qb[0] - qa[0], qb[1] - qa[1]);
      if (len2 < 1e-9) continue;   // seen end-on
      const n = Math.max(1, Math.ceil(len2 / step));
      let prev = qa;
      for (let k = 0; k < n; k++) {
        const s0 = k / n, s1 = (k + 1) / n, sm = (s0 + s1) / 2;
        const wm = [A[0] + (B[0] - A[0]) * sm, A[1] + (B[1] - A[1]) * sm, A[2] + (B[2] - A[2]) * sm];
        const w1 = [A[0] + (B[0] - A[0]) * s1, A[1] + (B[1] - A[1]) * s1, A[2] + (B[2] - A[2]) * s1];
        const q1 = k === n - 1 ? qb : P.project(w1);
        pieceCount++;
        if (cuts && cuts.removed(wm)) { prev = [q1[0], q1[1]]; continue; }
        const qm = P.project(wm);
        // x-ray (the magnifier's inside mode): nothing hides anything; every edge is drawn as seen
        const hid = !xray && (kind === 'back' || occluded(qm[0], qm[1], qm[2]));
        let k2;
        if (p.ghost) k2 = hid ? null : 'ghost';
        else k2 = hid ? (hidden ? 'hidden' : null) : kind === 'back' ? 'edge' : kind;
        if (k2) emit(k2, prev, [q1[0], q1[1]], p.inst.id);
        prev = [q1[0], q1[1]];
      }
    }
  });
  // ---- the cut faces: their outlines (visible pieces) and 45° hatch
  const hatch = [], capOut = [];
  for (const cap of caps) {
    const pi = cap.part, inst = parts[pi].inst.id;
    const loopsUv = cap.loops3.map((l) => l.map((w) => { const q = P.project(w); return [q[0], q[1]]; }));
    capOut.push({ inst, loops: loopsUv });
    // outlines
    for (const l of cap.loops3) for (let i = 0; i < l.length; i++) {
      eid++;
      const A = l[i], B = l[(i + 1) % l.length];
      const qa = P.project(A), qb = P.project(B);
      const n = Math.max(1, Math.ceil(Math.hypot(qb[0] - qa[0], qb[1] - qa[1]) / step));
      let prev = [qa[0], qa[1]];
      for (let k = 0; k < n; k++) {
        const sm = (k + 0.5) / n, s1 = (k + 1) / n;
        const wm = lerp3(A, B, sm), q1 = P.project(lerp3(A, B, s1)), qm = P.project(wm);
        if (cap.face.region(wm) && !occluded(qm[0], qm[1], qm[2] - eps * 20, cap)) emit('cut', prev, [q1[0], q1[1]], inst);
        prev = [q1[0], q1[1]];
      }
    }
    // hatch: lines at 45° in the picture, spaced 1/60 of its height, kept inside the loops (in the plane) and not hidden
    const gap = 1 / 70;
    const [bu0, bv0, bu1, bv1] = cap.box;
    const sMin = (bu0 - bv1) * Math.SQRT1_2, sMax = (bu1 - bv0) * Math.SQRT1_2;
    for (let s = Math.ceil(sMin / gap) * gap; s <= sMax; s += gap) {
      // the hatch line: points (u, v) with (u − v)/√2 = s, walked along (1,1)/√2
      const L = Math.hypot(bu1 - bu0, bv1 - bv0);
      const cu = (bu0 + bu1) / 2, cv = (bv0 + bv1) / 2;
      const t0c = (cu + cv) * Math.SQRT1_2;   // the box centre along (1, 1)/√2
      const n = Math.max(2, Math.ceil(2 * L / (step * 2)));
      let run = null;
      for (let k = 0; k <= n; k++) {
        const tt = t0c - L + 2 * L * k / n;
        const u = s * Math.SQRT1_2 + tt * Math.SQRT1_2, v = -s * Math.SQRT1_2 + tt * Math.SQRT1_2;
        let ok = false;
        if (u >= bu0 && u <= bu1 && v >= bv0 && v <= bv1) {
          const ray = P.ray(u, v), den = dot(cap.face.n, ray.d);
          if (Math.abs(den) > 1e-12) {
            const pt = (cap.face.c - dot(cap.face.n, ray.o)) / den;
            const w = [ray.o[0] + ray.d[0] * pt, ray.o[1] + ray.d[1] * pt, ray.o[2] + ray.d[2] * pt];
            ok = capAt(cap, w) && !occluded(u, v, P.project(w)[2] - eps * 20, cap);
          }
        }
        if (ok) { if (!run) run = [u, v]; run.end = [u, v]; } else if (run) { if (run.end) hatch.push({ a: [run[0], run[1]], b: run.end, inst }); run = null; }
      }
      if (run?.end) hatch.push({ a: [run[0], run[1]], b: run.end, inst });
    }
  }
  // ---- triangles for fills (front-facing, solid parts, not cut away), back to front
  let tris = [];
  if (wantTris) {
    const L = lightDir ? norm3(lightDir) : norm3([-P.dir[0] + P.up[0] * 0.6 + P.right[0] * 0.3, -P.dir[1] + P.up[1] * 0.6 + P.right[1] * 0.3, -P.dir[2] + P.up[2] * 0.6 + P.right[2] * 0.3]);
    parts.forEach((p) => {
      if (p.ghost) return;
      const I = p.mesh.indices, nt = I.length / 3, Q = p.Q, W = p.W;
      for (let tt = 0; tt < nt; tt++) {
        const a = I[tt * 3] * 3, b = I[tt * 3 + 1] * 3, c = I[tt * 3 + 2] * 3;
        const front = facing(p, tt);
        if (!front && !cuts) continue;
        if (cuts && cuts.removed([(W[a] + W[b] + W[c]) / 3, (W[a + 1] + W[b + 1] + W[c + 1]) / 3, (W[a + 2] + W[b + 2] + W[c + 2]) / 3])) continue;
        const n = [p.N[tt * 3], p.N[tt * 3 + 1], p.N[tt * 3 + 2]];
        const shade = Math.max(0, Math.min(1, 0.35 + 0.65 * Math.abs(dot(n, L))));
        tris.push({ pts: [[Q[a], Q[a + 1]], [Q[b], Q[b + 1]], [Q[c], Q[c + 1]]], d: (Q[a + 2] + Q[b + 2] + Q[c + 2]) / 3, inst: p.inst.id, shade: front ? shade : shade * 0.6 });
      }
    });
    tris.sort((x, y) => y.d - x.d);
    if (tris.length > 400000) tris = [];
  }
  for (const l of lines) delete l._e;
  return { lines, hatch, caps: capOut, tris, stats: { triangles: triCount, edges: edgeCount, pieces: pieceCount, ms: Date.now() - t0 } };
}

const norm3 = (a) => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };
const lerp3 = (a, b, s) => [a[0] + (b[0] - a[0]) * s, a[1] + (b[1] - a[1]) * s, a[2] + (b[2] - a[2]) * s];

/** Section of a part with the plane n·p = c: closed loops of world points (segments chained end to end). */
export function sectionLoops(p, n, c) {
  const I = p.mesh.indices, W = p.W, weld = p.topo.weld, nt = I.length / 3;
  const segs = [];
  const sd = (v) => n[0] * W[v * 3] + n[1] * W[v * 3 + 1] + n[2] * W[v * 3 + 2] - c;
  for (let tt = 0; tt < nt; tt++) {
    const vs = [I[tt * 3], I[tt * 3 + 1], I[tt * 3 + 2]], ds = vs.map(sd);
    const pts = [];
    for (let k = 0; k < 3; k++) {
      const a = vs[k], b = vs[(k + 1) % 3], da = ds[k], db = ds[(k + 1) % 3];
      if ((da < 0 && db >= 0) || (da >= 0 && db < 0)) {
        const s = da / (da - db);
        const wa = weld[a], wb = weld[b];
        pts.push({ p: [W[a * 3] + (W[b * 3] - W[a * 3]) * s, W[a * 3 + 1] + (W[b * 3 + 1] - W[a * 3 + 1]) * s, W[a * 3 + 2] + (W[b * 3 + 2] - W[a * 3 + 2]) * s], key: wa < wb ? wa + '_' + wb : wb + '_' + wa });
      }
    }
    if (pts.length === 2) segs.push(pts);
  }
  // chain by the welded edge each end lies on
  const byKey = new Map();
  segs.forEach((s, i) => { for (const e of s) (byKey.get(e.key) || byKey.set(e.key, []).get(e.key)).push(i); });
  const used = new Uint8Array(segs.length), loops = [];
  for (let i = 0; i < segs.length; i++) {
    if (used[i]) continue;
    used[i] = 1;
    const loop = [segs[i][0].p, segs[i][1].p];
    let key = segs[i][1].key;
    for (let guard = 0; guard < segs.length; guard++) {
      const next = (byKey.get(key) || []).find((j) => !used[j]);
      if (next === undefined) break;
      used[next] = 1;
      const s = segs[next], far = s[0].key === key ? s[1] : s[0];
      loop.push(far.p); key = far.key;
    }
    if (loop.length >= 3) { loop.pop(); loops.push(loop); }
  }
  return loops;
}
/** Even-odd: is a 2D point inside a set of loops? */
export function insideLoops(loops, pt) {
  let inside = false;
  for (const l of loops) for (let i = 0, j = l.length - 1; i < l.length; j = i++) {
    const a = l[i], b = l[j];
    if ((a[1] > pt[1]) !== (b[1] > pt[1]) && pt[0] < (b[0] - a[0]) * (pt[1] - a[1]) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}

/**
 * The cut faces of a view for a live display: per shown solid part and cut face, the section's loops in world coordinates,
 * nested into outer loops with their holes, in the face plane's 2D frame too (for triangulating).
 *   capPolygons(m, meshes, view, cuts) → [{ inst, n, frame: { o, e1, e2 }, polys: [{ outer: [[s,t]…], holes: [[[s,t]…]…] }] }]
 */
export function capPolygons(m, meshes, view, cuts) {
  if (!cuts) return [];
  const world = worldOf(m, view);
  const out = [];
  for (const inst of m.instances) {
    const st = instState(view, inst.id);
    if (st.hide || st.ghost) continue;
    const mesh = meshes.get(inst.part);
    if (!mesh) continue;
    const M = world.get(inst.id), Pm = mesh.positions, nv = Pm.length / 3;
    const W = new Float64Array(nv * 3);
    for (let i = 0; i < nv; i++) { const x = Pm[i * 3], y = Pm[i * 3 + 1], z = Pm[i * 3 + 2]; W[i * 3] = M[0] * x + M[4] * y + M[8] * z + M[12]; W[i * 3 + 1] = M[1] * x + M[5] * y + M[9] * z + M[13]; W[i * 3 + 2] = M[2] * x + M[6] * y + M[10] * z + M[14]; }
    const p = { mesh, W, topo: topology(mesh) };
    for (const face of cuts.faces) {
      const loops3 = sectionLoops(p, face.n, face.c);
      if (!loops3.length) continue;
      const e1 = Math.abs(face.n[1]) < 0.9 ? norm3(cross(face.n, [0, 1, 0])) : norm3(cross(face.n, [1, 0, 0])), e2 = cross(face.n, e1);
      const o = [face.n[0] * face.c, face.n[1] * face.c, face.n[2] * face.c];
      // only what lies in the face's region (a box face is a rectangle of its plane)
      const loops2 = loops3.filter((l) => l.every((w) => face.region(w))).map((l) => l.map((w) => { const d = sub(w, o); return [dot(d, e1), dot(d, e2)]; }));
      if (!loops2.length) continue;
      out.push({ inst: inst.id, n: face.n, frame: { o, e1, e2 }, polys: nestLoops(loops2) });
    }
  }
  return out;
}
/** Loops into outer loops and their holes (a loop inside an even number of others is an outer). */
export function nestLoops(loops) {
  const depth = loops.map((l, i) => loops.reduce((s, o, j) => s + (j !== i && insideLoops([o], l[0]) ? 1 : 0), 0));
  const polys = [];
  loops.forEach((l, i) => { if (depth[i] % 2 === 0) polys.push({ outer: l, holes: [], d: depth[i] }); });
  loops.forEach((l, i) => {
    if (depth[i] % 2 === 0) return;
    const host = polys.filter((p) => p.d === depth[i] - 1 && insideLoops([p.outer], l[0]))[0];
    if (host) host.holes.push(l);
  });
  return polys.map(({ outer, holes }) => ({ outer, holes }));
}
