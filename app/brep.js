/* SPDX-License-Identifier: Apache-2.0 */
/**
 * brep.js — rebuilds a part as an exact boundary-representation solid with OpenCascade (OCCT,
 * LGPL-2.1, loaded as its own module: see assets/vendor/replicad-opencascadejs/current/SOURCE.txt).
 * DOM-free: the OCCT module object is passed in, so Node tests and the page's Web Worker run the
 * same code. Same feature history and the same plain-data result as kernel.js (manifold-3d), plus
 * what only a B-rep has: true curved faces, exact volumes, named faces and edges, fillets,
 * chamfers, shells and imported STEP solids.
 *
 *   regenerateBrep(part, oc, { upTo, keep }) → { exact: true, results, mesh, stats, frames, planes,
 *       axes, holeAxes, faces, edges, candidates, shape? (keep: the live TopoDS_Shape, caller deletes) }
 *
 * Topological naming (how references survive edits). Every face of the body carries a name made
 * from what generated it, never from its index:
 *   <feature>.<kind>[:<entity>]   start / end (extrude caps), side:<sketch curve id> (the face a
 *                                 profile curve sweeps), wall|floor|cbore|cfloor|top:<point id>
 *                                 (holes), blend:<k> / corner:<k> (fillet), bevel:<k> (chamfer),
 *                                 face:<i> (imported STEP, in file order)
 *   …@<feature>#<i>               the i-th copy made by a pattern (m = a mirror)
 *   …~<feature>                   the inner (offset) face a shell made from that face
 * Names are carried through every boolean, fillet and shell by OCCT's own history (Modified /
 * Generated / IsDeleted), so a face keeps its name when a dimension upstream changes its size or
 * position, and a face split in two keeps the name on both pieces. An edge is named by the two
 * faces it joins (a set of two names) plus the point where it was picked: when several edges join
 * the same two faces (a split face), the one nearest that point wins. A reference whose faces are
 * gone fails with a message naming them (it is never silently moved to another edge).
 */
import * as V from './vec.js';
import { byId, pointXY, arcAngles, extent, insideLoops, tessArc, tessCircle, loosePoints, splineCurve } from './sketch.js';
import * as SP from './sketch-spline.js';
import { solveSketch } from './solver.js';
import { builtCount, dependsOn } from './part.js';
import { installDesign } from './brep-design.js';
import { ISO_COARSE, threadCallout } from './design-features.js';
import { installSurface, sheetMeshes } from './surface.js';
import { installBodies } from './brep-bodies.js';
import { installSheet } from './brep-sheet.js';
import { installRib } from './brep-rib.js';
import { installThread } from './brep-thread.js';
import { exactSurface } from './brep-surf.js';   // exact surfaces for the tet mesher (rec.surf)
import { t as tr } from './i18n.js';

class FeatureError extends Error {}
const fail = (m) => { throw new FeatureError(m); };
const HASH = 2147483647;
// "Needs X, which is …" per status of the feature it needs (keys; the text is looked up when the message is made)
const NEEDS_KEY = { error: 'model.brep.needs_failing', skipped: 'model.brep.needs_not_built', suppressed: 'model.brep.needs_suppressed', rolled: 'model.brep.needs_rolled_back' };

/** Plain-English text of anything OCCT throws (WebAssembly exceptions carry a C++ Standard_Failure). */
export function occtMessage(oc, e) {
  if (e instanceof FeatureError) return e.message;
  try {
    if (typeof WebAssembly !== 'undefined' && WebAssembly.Exception && e instanceof WebAssembly.Exception && oc.getExceptionMessage) {
      const [type, msg] = oc.getExceptionMessage(e);
      return (msg || type || tr('model.brep.occt_error')).trim();
    }
  } catch { /* fall through */ }
  return e && e.message ? e.message : String(e);
}

// ---------------------------------------------------------------- names

/** Feature ids a face name depends on (its maker, every pattern/mirror/shell in its suffixes). */
export function nameFeatures(name) {
  const out = new Set();
  const m = /^(f\d+)\./.exec(name || '');
  if (m) out.add(m[1]);
  for (const k of String(name || '').matchAll(/[@~](f\d+)/g)) out.add(k[1]);
  return [...out];
}
export const NAME_RE = /^f\d{1,9}\.[a-z]+(:[A-Za-z0-9_:-]{1,40})?([@~]f\d{1,9}(#(\d{1,4}|m))?){0,24}$/;

/** The face name a PlaneRef points at (old files: feature + face + entity). */
export function refName(ref) {
  if (!ref || ref.kind !== 'face') return null;
  if (ref.name) return ref.name;
  return ref.feature + '.' + ref.face + (ref.entity ? ':' + ref.entity : '');
}

/** A PlaneRef for a named planar face: the old {feature, face, entity} shape when it fits, else by name. */
export function refForName(name) {
  const m = /^(f\d+)\.(start|end|side)(?::([A-Za-z0-9_:-]+))?$/.exec(name);
  if (m && (m[2] !== 'side' || m[3])) return { kind: 'face', feature: m[1], face: m[2], ...(m[3] ? { entity: m[3] } : {}) };
  return { kind: 'face', feature: nameFeatures(name)[0], face: 'named', name };
}

/** The edge (index into a regen's `edges`) an EdgeRef means now: same two face names, nearest its point. -1 when gone. */
export function findEdge(edges, ref) {
  const key = [...ref.faces].sort().join('|');
  let best = -1, bd = Infinity;
  edges.forEach((e, i) => {
    if (e.key !== key) return;
    const d = ref.at ? V.len(V.sub(e.at, ref.at)) : 0;
    if (d < bd) { bd = d; best = i; }
  });
  return best;
}
/** Same for a FaceRef against a regen's `faces`. */
export function findFace(faces, ref) {
  let best = -1, bd = Infinity;
  faces.forEach((f, i) => {
    if (f.name !== ref.name) return;
    const d = ref.at ? V.len(V.sub(f.at, ref.at)) : 0;
    if (d < bd) { bd = d; best = i; }
  });
  return best;
}
/** A reference to an edge of a regen, for a fillet or chamfer. */
export const edgeRef = (e) => ({ faces: [...e.faces], at: e.at.map((v) => +v.toFixed(6)) });
export const faceRef = (f) => ({ name: f.name, at: f.at.map((v) => +v.toFixed(6)) });

// ---------------------------------------------------------------- OCCT helpers

/** An arena: every OCCT object made during a rebuild is registered and deleted at the end. */
function makeArena() {
  const live = [];
  const T = (o) => { if (o && typeof o.delete === 'function') live.push(o); return o; };
  T.free = (keep = []) => {
    for (const o of live) {
      if (keep.includes(o)) continue;
      try { if (!o.isDeleted || !o.isDeleted()) o.delete(); } catch { /* already gone */ }
    }
    live.length = 0;
  };
  return T;
}

function helpers(oc, T) {
  const pnt = (p) => T(new oc.gp_Pnt(p[0], p[1], p[2]));
  const dir = (d) => T(new oc.gp_Dir(d[0], d[1], d[2]));
  const vec = (d) => T(new oc.gp_Vec(d[0], d[1], d[2]));
  const prog = () => T(new oc.Message_ProgressRange());
  const ENUM = oc.TopAbs_ShapeEnum;
  const hash = (s) => oc.ReplicadShapeHasher.HashCode(s, HASH);
  const explore = (shape, type) => {
    const out = [];
    const ex = T(new oc.TopExp_Explorer(shape, ENUM['TopAbs_' + type], ENUM.TopAbs_SHAPE));
    for (; ex.More(); ex.Next()) out.push(T(ex.Current()));
    return out;
  };
  /** Unique sub-shapes (an edge shared by two faces once). */
  const unique = (shape, type) => {
    const seen = new SMap(hash), out = [];
    for (const s of explore(shape, type)) if (seen.get(s) === undefined) { seen.set(s, out.length); out.push(s); }
    return out;
  };
  const list = (l) => {
    const out = [];
    if (!l) return out;
    T(l);
    const copy = T(new oc.NCollection_List_TopoDS_Shape(l));
    while (!copy.IsEmpty()) { const f = T(copy.First()); out.push(T(f.Oriented(f.Orientation()))); copy.RemoveFirst(); }
    return out;
  };
  const shapeList = (arr) => { const l = T(new oc.NCollection_List_TopoDS_Shape()); for (const s of arr) l.Append(s); return l; };
  const trsf = (m) => {
    // column-major 4×4 → gp_Trsf (rigid or a reflection)
    const t = T(new oc.gp_Trsf());
    t.SetValues(m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14]);
    return t;
  };
  const xyz = (p) => [p.X(), p.Y(), p.Z()];
  return { pnt, dir, vec, prog, hash, explore, unique, list, shapeList, trsf, xyz, ENUM };
}

/** A new handle to the same shape (TopoDS_Shape's copy constructor is not bound). */
export const copyShape = (s) => s.Oriented(s.Orientation());

/** A map keyed by OCCT shape identity (hash + IsSame). */
class SMap {
  constructor(hash) { this.hash = hash; this.m = new Map(); this.size = 0; }
  get(s) { const l = this.m.get(this.hash(s)); if (!l) return undefined; for (const e of l) if (e.s.IsSame(s)) return e.v; return undefined; }
  set(s, v) {
    const h = this.hash(s);
    let l = this.m.get(h);
    if (!l) { l = []; this.m.set(h, l); }
    for (const e of l) if (e.s.IsSame(s)) { e.v = v; return; }
    l.push({ s, v }); this.size++;
  }
  *entries() { for (const l of this.m.values()) for (const e of l) yield [e.s, e.v]; }
}

// ---------------------------------------------------------------- profiles with exact curves

/**
 * Closed loops of a sketch's non-construction lines, arcs and circles, keeping each curve:
 * → { loops: [{ segs: [{ id, type, a, b, mid?, c?, r? }], poly }] } or { error }.
 */
export function profileCurves(sk) {
  const tol = 1e-6 * Math.max(1, extent(sk));
  const loops = [];
  const segs = [];
  for (const e of sk.entities) {
    if (e.construction) continue;
    if (e.type === 'circle') {
      if (!(e.r > tol)) return { error: tr('model.brep.circle_no_size') };
      const c = pointXY(sk, e.c);
      loops.push({ segs: [{ id: e.id, type: 'circle', c, r: e.r }], poly: tessCircle(c, e.r, 128) });
    } else if (e.type === 'line') {
      const a = pointXY(sk, e.p1), b = pointXY(sk, e.p2);
      if (Math.hypot(b[0] - a[0], b[1] - a[1]) <= tol) return { error: tr('model.brep.line_no_length') };
      segs.push({ id: e.id, type: 'line', a, b, pts: [a, b] });
    } else if (e.type === 'arc') {
      const { c, r, a0, sweep } = arcAngles(sk, e);
      if (!(r > tol)) return { error: tr('model.brep.arc_no_size') };
      const pts = tessArc(sk, e, 128);
      segs.push({ id: e.id, type: 'arc', a: pts[0], b: pts[pts.length - 1], c, r, mid: [c[0] + r * Math.cos(a0 + sweep / 2), c[1] + r * Math.sin(a0 + sweep / 2)], pts });
    } else if (e.type === 'spline') {
      // exact B-spline (sketch-spline.js); the polyline only decides nesting
      let bs;
      try { bs = splineCurve(sk, e); } catch (err) { return { error: err.message }; }
      const pts = SP.tessellate(bs, 16);
      if (e.closed) { pts.pop(); loops.push({ segs: [{ id: e.id, type: 'spline', bs, closed: true }], poly: pts }); }
      else segs.push({ id: e.id, type: 'spline', a: pts[0], b: pts[pts.length - 1], bs, pts });
    }
  }
  const nodes = [];
  const nodeOf = (p) => {
    for (let i = 0; i < nodes.length; i++) if (Math.hypot(nodes[i].p[0] - p[0], nodes[i].p[1] - p[1]) <= tol * 10) return i;
    nodes.push({ p, ends: [] });
    return nodes.length - 1;
  };
  for (const s of segs) {
    s.n0 = nodeOf(s.a); s.n1 = nodeOf(s.b);
    nodes[s.n0].ends.push(s); nodes[s.n1].ends.push(s);
  }
  const fx = (v) => String(+v.toFixed(3));
  for (const n of nodes) {
    if (n.ends.length === 1) return { error: tr('model.brep.profile_open', { x: fx(n.p[0]), y: fx(n.p[1]) }), at: n.p };
    if (n.ends.length > 2) return { error: tr('model.brep.profile_branches', { x: fx(n.p[0]), y: fx(n.p[1]) }), at: n.p };
  }
  const used = new Set();
  for (const s0 of segs) {
    if (used.has(s0)) continue;
    const out = [], poly = [];
    const start = s0.n0;
    let s = s0, from = start;
    for (let guard = 0; guard <= segs.length; guard++) {
      used.add(s);
      const fwd = s.n0 === from;
      const to = fwd ? s.n1 : s.n0;
      // both ends sit exactly on the shared node, so neighbouring edges meet at one vertex
      out.push({ id: s.id, type: s.type, a: nodes[from].p, b: nodes[to].p, mid: s.mid, c: s.c, r: s.r, bs: s.bs && (fwd ? s.bs : SP.reverse(s.bs)) });
      const pts = fwd ? s.pts : [...s.pts].reverse();
      for (let i = 0; i < pts.length - 1; i++) poly.push(pts[i]);
      if (to === start) break;
      const nx = nodes[to].ends.find((q) => q !== s);
      if (!nx || used.has(nx)) break;
      from = to; s = nx;
    }
    if (poly.length < 3) return { error: tr('model.brep.loop_too_few') };
    loops.push({ segs: out, poly });
  }
  return { loops };
}

/**
 * A sketch spline (sketch-spline.js curve) as an OCCT Geom_BSplineCurve in world space (W maps sketch → world);
 * `ends` = [a, b]: the open curve's end poles are put exactly on the shared profile vertices.
 */
export function splineGeom(oc, T, bs, W, ends = null) {
  const f = SP.occForm(bs);
  if (ends) { f.poles[0] = ends[0]; f.poles[f.poles.length - 1] = ends[1]; }
  const P = T(new oc.NCollection_Array1_gp_Pnt(1, f.poles.length));
  f.poles.forEach((q, i) => { const w = W(q); P.SetValue(i + 1, T(new oc.gp_Pnt(w[0], w[1], w[2]))); });
  const K = T(new oc.NCollection_Array1_double(1, f.knots.length));
  f.knots.forEach((k, i) => K.SetValue(i + 1, k));
  const M = T(new oc.NCollection_Array1_int(1, f.mults.length));
  f.mults.forEach((k, i) => M.SetValue(i + 1, k));
  return T(new oc.Geom_BSplineCurve(P, K, M, f.deg, f.periodic));
}

function signedArea(poly) {
  let s = 0;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) s += poly[j][0] * poly[i][1] - poly[i][0] * poly[j][1];
  return s / 2;
}

/**
 * Planar faces from a sketch region (even-odd: a loop inside another is a hole, a loop inside a
 * hole is an island) at frame `fr`, lifted by `lift` along its normal. Returns the faces and the
 * map sketch curve id → its TopoDS_Edge (for naming what the edge sweeps).
 */
function profileFaces(oc, T, H, loops, fr, lift = 0, regions = null) {
  const W = (p) => V.add(V.toWorld(fr, p[0], p[1]), V.mul(fr.n, lift));
  const edgeOf = new Map();
  // one vertex per profile node, shared by the two curves that meet there, so MakeWire keeps our edges as they are
  const verts = new Map();
  const vtx = (p) => {
    const k = p[0] + ',' + p[1];
    let v = verts.get(k);
    if (!v) { v = T(T(new oc.BRepBuilderAPI_MakeVertex(H.pnt(W(p)))).Vertex()); verts.set(k, v); }
    return v;
  };
  const wireOf = (loop) => {
    const mw = T(new oc.BRepBuilderAPI_MakeWire());
    for (const s of loop.segs) {
      let e;
      if (s.type === 'line') e = T(new oc.BRepBuilderAPI_MakeEdge(vtx(s.a), vtx(s.b))).Edge();
      else if (s.type === 'circle') {
        const ax = T(new oc.gp_Ax2(H.pnt(W(s.c)), H.dir(fr.n), H.dir(fr.x)));
        e = T(new oc.BRepBuilderAPI_MakeEdge(T(new oc.gp_Circ(ax, s.r)))).Edge();
      } else if (s.type === 'spline') {
        const curve = splineGeom(oc, T, s.bs, W, s.closed ? null : [s.a, s.b]);
        e = T(s.closed ? new oc.BRepBuilderAPI_MakeEdge(curve) : new oc.BRepBuilderAPI_MakeEdge(curve, vtx(s.a), vtx(s.b))).Edge();
      } else {
        const arc = T(T(new oc.GC_MakeArcOfCircle(H.pnt(W(s.a)), H.pnt(W(s.mid)), H.pnt(W(s.b)))).Value());
        e = T(new oc.BRepBuilderAPI_MakeEdge(arc, vtx(s.a), vtx(s.b))).Edge();
      }
      T(e);
      edgeOf.set(s.id, e);
      mw.Add(e);
    }
    if (!mw.IsDone()) fail(tr('model.brep.loop_not_closed'));
    return T(mw.Wire());
  };
  const n = loops.length;
  const depth = loops.map((L, i) => loops.reduce((k, M, j) => k + (j !== i && insideLoops([M.poly], innerPoint(L.poly)) ? 1 : 0), 0));
  const pln = T(new oc.gp_Pln(T(new oc.gp_Ax3(H.pnt(V.add(fr.o, V.mul(fr.n, lift))), H.dir(fr.n), H.dir(fr.x)))));
  const faces = [];
  for (let i = 0; i < n; i++) {
    // regions (picked contours, brep-design.js regionsAt): each { outer, holes } overrides the even-odd rule
    const reg = regions ? regions.find((g) => g.outer === i) : null;
    if (regions ? !reg : depth[i] % 2) continue;
    let w = wireOf(loops[i]);
    if (signedArea(loops[i].poly) < 0) w = T(oc.TopoDS.Wire(T(w.Reversed())));
    const mf = T(new oc.BRepBuilderAPI_MakeFace(pln, w, true));
    // its holes: loops one level deeper whose nearest container is this loop
    for (let j = 0; j < n; j++) {
      if (reg ? !reg.holes.includes(j) : depth[j] !== depth[i] + 1 || !insideLoops([loops[i].poly], innerPoint(loops[j].poly))) continue;
      let h = wireOf(loops[j]);
      if (signedArea(loops[j].poly) > 0) h = T(oc.TopoDS.Wire(T(h.Reversed())));
      mf.Add(h);
    }
    if (!mf.IsDone()) fail(tr('model.brep.profile_no_face'));
    faces.push(T(mf.Face()));
  }
  if (!faces.length) fail(tr('model.brep.profile_no_area'));
  return { faces, edgeOf };
}

/** A point just inside a loop polygon's first edge (for nesting tests that do not hit shared lines). */
function innerPoint(poly) {
  // the centroid of a triangle fan sample is fragile for concave loops; use a point a hair to the inner side of the longest edge
  let best = 0, bi = 0;
  for (let i = 0; i < poly.length; i++) { const a = poly[i], b = poly[(i + 1) % poly.length]; const l = Math.hypot(b[0] - a[0], b[1] - a[1]); if (l > best) { best = l; bi = i; } }
  const a = poly[bi], b = poly[(bi + 1) % poly.length];
  const m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const nx = -(b[1] - a[1]) / best, ny = (b[0] - a[0]) / best;
  const s = Math.sign(signedArea(poly)) || 1;   // left of the edge is inside for a CCW loop
  const eps = 1e-6 * Math.max(1, best);
  return [m[0] + nx * eps * s, m[1] + ny * eps * s];
}

// ---------------------------------------------------------------- the kernel

function resolvePlane(ref, ctx) {
  if (ref.kind === 'base') return V.BASE_PLANES[ref.name];
  if (ref.kind === 'fixed') return V.frameFor(ref.n, ref.o);
  if (ref.kind === 'ref') {
    const g = ctx.refGeom.get(ref.feature), pf = ctx.part.features.find((f) => f.id === ref.feature);
    if (!g || g.kind !== 'plane') fail(pf ? tr('model.brep.plane_not_built', { name: pf.name }) : tr('model.brep.plane_gone'));
    return g.frame;
  }
  const owner = ctx.part.features.find((f) => f.id === ref.feature);
  for (const fid of nameFeatures(refName(ref))) {
    const r = ctx.results.get(fid);
    const g = ctx.part.features.find((f) => f.id === fid);
    if (!r || r.status !== 'ok') fail(g ? tr('model.brep.face_gone_not_built', { name: g.name }) : tr('model.brep.face_gone_deleted'));
  }
  const name = refName(ref);
  const hit = ctx.body ? ctx.faceTable().find((f) => f.name === name && f.type === 'plane') : null;
  if (!hit) fail(owner ? tr('model.brep.face_gone_from', { name: owner.name }) : tr('model.brep.face_gone_from_part'));
  return V.frameFor(hit.n, hit.o);
}

function resolveDir(ref, ctx) {
  if (ref.kind === 'world') return { o: [0, 0, 0], d: { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] }[ref.axis] };
  if (ref.kind === 'fixed') return { o: ref.o, d: V.norm(ref.d) };
  if (ref.kind === 'axis') {
    const a = ctx.axes.get(ref.feature);
    if (!a) fail(tr('model.brep.revolve_axis_not_built'));
    return a;
  }
  if (ref.kind === 'ref') {
    const g = ctx.refGeom.get(ref.feature), rf = ctx.part.features.find((f) => f.id === ref.feature);
    if (g && g.kind === 'axis') return { o: g.o, d: g.d };
    if (g && g.kind === 'plane') return { o: g.frame.o, d: g.frame.n };
    fail(rf ? tr('model.brep.ref_not_built', { name: rf.name }) : tr('model.brep.ref_axis_gone'));
  }
  const frame = ctx.frames.get(ref.sketch);
  const sf = ctx.part.features.find((f) => f.id === ref.sketch);
  if (!frame || !sf) fail(tr('model.brep.sketch_line_not_built'));
  const l = byId(sf.sketch, ref.entity);
  if (!l || l.type !== 'line') fail(tr('model.brep.line_gone_from', { name: sf.name }));
  const a = V.toWorld(frame, ...pointXY(sf.sketch, l.p1)), b = V.toWorld(frame, ...pointXY(sf.sketch, l.p2));
  if (V.len(V.sub(b, a)) < 1e-12) fail(tr('model.brep.line_uses_no_length'));
  return { o: a, d: V.norm(V.sub(b, a)) };
}

function sketchOf(ctx, id) {
  const f = ctx.part.features.find((g) => g.id === id);
  const frame = ctx.frames.get(id);
  if (!f || f.type !== 'sketch' || !frame) fail(tr('model.brep.sketch_not_built'));
  return { f, sk: f.sketch, frame };
}

function bodyRange(ctx, frame) {
  if (!ctx.body) return null;
  const bb = ctx.bbox(ctx.body);
  let lo = Infinity, hi = -Infinity;
  for (const x of [bb.min[0], bb.max[0]]) for (const y of [bb.min[1], bb.max[1]]) for (const z of [bb.min[2], bb.max[2]]) {
    const d = V.dot(V.sub([x, y, z], frame.o), frame.n);
    lo = Math.min(lo, d); hi = Math.max(hi, d);
  }
  return [lo, hi];
}

/** A tool made by sweeping profile faces: names its caps and every face a sketch curve swept. */
function nameSweep(ctx, mk, fid, edgeOf, caps) {
  const { H } = ctx;
  const names = new SMap(H.hash);
  for (const [id, e] of edgeOf) for (const g of H.list(mk.Generated(e))) if (g.ShapeType() === H.ENUM.TopAbs_FACE) names.set(g, `${fid}.side:${id}`);   // i18n-ignore: a face name (identifier)
  if (caps) {
    for (const [k, s] of [['start', mk.FirstShape()], ['end', mk.LastShape()]]) {
      ctx.T(s);
      if (s.IsNull()) continue;
      for (const f of H.explore(s, 'FACE')) names.set(f, `${fid}.${k}`);
    }
  }
  return names;
}

const FEATURES = {
  sketch(f, ctx) {
    const frame = resolvePlane(f.plane, ctx);
    ctx.frames.set(f.id, frame);
    const s = solveSketch(f.sketch);
    const res = { solve: { status: s.status, dof: s.dof, conflicts: s.conflicts, redundant: s.redundant } };
    ctx.solveInfo = res.solve;
    if (s.conflicts.length) fail(tr('model.brep.over_defined_conflicts', { n: s.conflicts.length }));
    if (s.redundant.length) res.warning = tr('model.brep.over_defined_redundant', { n: s.redundant.length });
    return res;
  },

  extrude(f, ctx) {
    const { oc, T, H } = ctx;
    const { sk, frame } = sketchOf(ctx, f.sketch);
    const pr = profileCurves(sk);
    if (pr.error) fail(pr.error);
    if (!pr.loops.length) fail(tr('model.brep.no_profile_extrude'));
    if (LIB.extrudeExtended(f)) return LIB.extrudeExt(f, ctx, pr, frame);
    const sign = (f.op === 'cut' ? -1 : 1) * (f.reverse ? -1 : 1);   // add, intersect and new bodies grow the same way
    let h = f.depth, z0;
    if (f.end === 'blind') z0 = sign > 0 ? 0 : -h;
    else if (f.end === 'mid') z0 = -h / 2;
    else {
      if (f.op !== 'cut') fail(tr('model.brep.through_all_cuts'));
      const rg = bodyRange(ctx, frame);
      if (!rg) fail(tr('model.brep.nothing_to_cut'));
      const margin = 1 + 0.01 * (rg[1] - rg[0]);
      if (sign > 0) { if (rg[1] <= 1e-9) fail(tr('model.brep.nothing_to_cut_side')); z0 = 0; h = rg[1] + margin; }
      else { if (rg[0] >= -1e-9) fail(tr('model.brep.nothing_to_cut_side')); h = -rg[0] + margin; z0 = -h; }
    }
    if (!(h > 0)) fail(tr('model.brep.depth_positive'));
    const { faces, edgeOf } = profileFaces(oc, T, H, pr.loops, frame, z0);
    const tools = [];
    for (const face of faces) {
      const mk = T(new oc.BRepPrimAPI_MakePrism(face, H.vec(V.mul(frame.n, h)), false, true));
      if (!mk.IsDone()) fail(tr('model.brep.extrude_failed'));
      const shape = T(mk.Shape());
      tools.push({ shape, op: f.op, names: nameSweep(ctx, mk, f.id, edgeOf, true) });
    }
    return { tools };
  },

  revolve(f, ctx) {
    const { oc, T, H } = ctx;
    const { sk, frame } = sketchOf(ctx, f.sketch);
    let axis, a2, b2;
    if (f.axis && typeof f.axis === 'object') {
      // an axis from outside the sketch (an axis feature, an edge): it must lie in the sketch's plane
      const ax = resolveDir(f.axis, ctx);
      const sc = Math.max(1, V.len(V.sub(ax.o, frame.o)));
      if (Math.abs(V.dot(ax.d, frame.n)) > 1e-9 || Math.abs(V.dot(V.sub(ax.o, frame.o), frame.n)) > 1e-7 * sc) fail(tr('model.brep.axis_in_plane'));
      a2 = V.toPlane(frame, ax.o); b2 = V.toPlane(frame, V.add(ax.o, ax.d));
      axis = { id: null, construction: true };
    } else {
      axis = f.axis ? byId(sk, f.axis) : sk.entities.find((e) => e.type === 'line' && e.construction);
      if (!axis || axis.type !== 'line') fail(f.axis ? tr('model.brep.axis_line_gone') : tr('model.brep.draw_centerline'));
      a2 = pointXY(sk, axis.p1); b2 = pointXY(sk, axis.p2);
    }
    const ul = Math.hypot(b2[0] - a2[0], b2[1] - a2[1]);
    if (ul < 1e-12) fail(tr('model.brep.axis_no_length'));
    const u = [(b2[0] - a2[0]) / ul, (b2[1] - a2[1]) / ul];
    const skNoAxis = axis.construction ? sk : { ...sk, entities: sk.entities.map((e) => (e.id === axis.id ? { ...e, construction: true } : e)) };
    let pr = profileCurves(skNoAxis);
    if (pr.error && !axis.construction) pr = profileCurves(sk);
    if (pr.error) fail(pr.error);
    if (!pr.loops.length) fail(tr('model.brep.no_profile_revolve'));
    const all = pr.loops.flatMap((l) => l.poly);
    const scale = Math.max(1, ...all.map((p) => Math.hypot(p[0] - a2[0], p[1] - a2[1])));
    let pos = 0, neg = 0;
    for (const p of all) {
      const s = -u[1] * (p[0] - a2[0]) + u[0] * (p[1] - a2[1]);
      if (s > 1e-7 * scale) pos++; else if (s < -1e-7 * scale) neg++;
    }
    if (pos && neg) fail(tr('model.brep.profile_crosses_axis'));
    const A = V.toWorld(frame, ...a2);
    const U3 = V.add(V.mul(frame.x, u[0]), V.mul(frame.y, u[1]));
    // same sweep sense as kernel.js: about U3 starting from the profile side (right-handed)
    const side = neg ? -1 : 1;
    const N3 = V.add(V.mul(frame.x, -u[1] * side), V.mul(frame.y, u[0] * side));
    const W3 = V.cross(U3, N3);
    // kernel.js sweeps from N3 towards W3 (manifold's revolve about +Z from +X towards +Y), i.e. about +U3
    const { faces, edgeOf } = profileFaces(oc, T, H, pr.loops, frame, 0);
    ctx.axes.set(f.id, { o: A, d: U3 });
    void W3;
    const ax1 = T(new oc.gp_Ax1(H.pnt(A), H.dir(U3)));
    const full = Math.abs(f.angle - 360) < 1e-9;
    const tools = [];
    for (const face of faces) {
      // Copy = true: with false, Generated() misses some faces of a full revolution in this OCCT build
      const mk = full ? T(new oc.BRepPrimAPI_MakeRevol(face, ax1, true)) : T(new oc.BRepPrimAPI_MakeRevol(face, ax1, f.angle * Math.PI / 180, true));
      if (!mk.IsDone()) fail(tr('model.brep.revolve_failed'));
      tools.push({ shape: T(mk.Shape()), op: f.op, names: nameSweep(ctx, mk, f.id, edgeOf, !full) });
    }
    return { tools };
  },

  hole(f, ctx) {
    const { oc, T, H } = ctx;
    const { sk, frame } = sketchOf(ctx, f.sketch);
    const pts = loosePoints(sk).filter((p) => !p.construction);
    if (!pts.length) fail(tr('model.brep.hole_points'));
    if (!(f.d > 0)) fail(tr('model.brep.hole_d_positive'));
    const thread = f.kind === 'tapped' ? ISO_COARSE[f.size] : null;
    if (f.kind === 'tapped' && !thread) fail(tr('model.brep.thread_size'));
    const sign = f.reverse ? 1 : -1;
    let depth = f.depth;
    if (f.through) {
      const rg = bodyRange(ctx, frame);
      if (!rg) fail(tr('model.brep.nothing_to_drill'));
      const margin = 1 + 0.01 * (rg[1] - rg[0]);
      depth = sign < 0 ? -rg[0] + margin : rg[1] + margin;
      if (depth <= margin) fail(tr('model.brep.nothing_to_drill_side'));
    }
    if (!(depth > 0)) fail(tr('model.brep.hole_depth_positive'));
    if (f.kind === 'cbore') {
      if (!(f.cboreD > f.d)) fail(tr('model.brep.cbore_wider'));
      if (!(f.cboreDepth > 0) || (!f.through && f.cboreDepth >= depth)) fail(tr('model.brep.cbore_shallower'));
    }
    const csH = f.kind === 'csink' ? (f.csinkD - f.d) / 2 / Math.tan(f.csinkAngle * Math.PI / 360) : 0;
    if (f.kind === 'csink') {
      if (!(f.csinkD > f.d)) fail(tr('model.brep.csink_wider'));
      if (!f.through && csH >= depth) fail(tr('model.brep.csink_deeper'));
    }
    if (thread && f.threadDepth && !f.through && f.threadDepth > depth) fail(tr('model.brep.thread_deeper'));
    const din = V.mul(frame.n, sign);   // into the material
    const tools = [];
    const axes = [], threads = [];
    for (const p of pts) {
      const P0 = V.toWorld(frame, p.x, p.y);
      // the hole's half-section in (radius, depth) and the face each edge sweeps
      const r = (thread ? thread[2] : f.d) / 2;
      const prof = f.kind === 'csink'
        ? [[[0, 0], [f.csinkD / 2, 0], 'top'], [[f.csinkD / 2, 0], [r, csH], 'csink'], [[r, csH], [r, depth], 'wall'], [[r, depth], [0, depth], 'floor'], [[0, depth], [0, 0], null]]
        : f.kind === 'cbore'
        ? [[[0, 0], [f.cboreD / 2, 0], 'top'], [[f.cboreD / 2, 0], [f.cboreD / 2, f.cboreDepth], 'cbore'], [[f.cboreD / 2, f.cboreDepth], [r, f.cboreDepth], 'cfloor'], [[r, f.cboreDepth], [r, depth], 'wall'], [[r, depth], [0, depth], 'floor'], [[0, depth], [0, 0], null]]
        : [[[0, 0], [r, 0], 'top'], [[r, 0], [r, depth], 'wall'], [[r, depth], [0, depth], 'floor'], [[0, depth], [0, 0], null]];
      const Wp = ([rr, z]) => V.add(V.add(P0, V.mul(frame.x, rr)), V.mul(din, z));
      const mw = T(new oc.BRepBuilderAPI_MakeWire());
      const kinds = [];
      const vs = new Map();
      const vx = (q) => { const k = q.join(','); if (!vs.has(k)) vs.set(k, T(T(new oc.BRepBuilderAPI_MakeVertex(H.pnt(Wp(q)))).Vertex())); return vs.get(k); };
      for (const [a, b, kind] of prof) {
        const e = T(T(new oc.BRepBuilderAPI_MakeEdge(vx(a), vx(b))).Edge());
        mw.Add(e);
        if (kind) kinds.push([e, kind]);
      }
      const pln = T(new oc.gp_Pln(T(new oc.gp_Ax3(H.pnt(P0), H.dir(V.cross(frame.x, din)), H.dir(frame.x)))));
      const face = T(T(new oc.BRepBuilderAPI_MakeFace(pln, T(mw.Wire()), true)).Face());
      const mk = T(new oc.BRepPrimAPI_MakeRevol(face, T(new oc.gp_Ax1(H.pnt(P0), H.dir(din))), true));
      if (!mk.IsDone()) fail(tr('model.brep.hole_failed'));
      const names = new SMap(H.hash);
      for (const [e, kind] of kinds) for (const g of H.list(mk.Generated(e))) if (g.ShapeType() === H.ENUM.TopAbs_FACE) names.set(g, `${f.id}.${kind}:${p.id}`);
      tools.push({ shape: T(mk.Shape()), op: 'cut', names });
      axes.push({ o: P0, d: V.mul(frame.n, -sign) });
      // the thread is cosmetic: drawn as the major diameter over the tap drill, and noted (ISO 261 / ISO 2306)
      if (thread) threads.push({ o: P0, d: din, r: thread[0] / 2, depth: f.threadDepth || (f.through ? depth - 1 : depth), r0: Math.min(thread[2], thread[0] - 1.082532 * thread[1]) / 2, r1: thread[0] / 2 });
    }
    if (threads.length) ctx.threads.set(f.id, { callout: threadCallout(f), list: threads });
    ctx.holeAxes.set(f.id, axes);
    // a modelled thread (0.5 WL.29) is the mesh kernel's: here it stays cosmetic, and says so
    return { tools, count: pts.length, ...(thread && f.modelled ? { warning: tr('thread.warn.exact') } : {}) };
  },

  lpattern(f, ctx) {
    const { d } = resolveDir(f.dir, ctx);
    const dir = V.mul(d, f.reverse ? -1 : 1);
    if (f.bodies?.length) return LIB.bodyCopies(ctx, f, f.count, (i) => V.translation(V.mul(dir, f.spacing * i)));   // brep-bodies.js
    const seeds = seedTools(f, ctx);
    const tools = [];
    for (let i = 1; i < f.count; i++) tools.push(...seeds.map((t) => moveTool(ctx, t, V.translation(V.mul(dir, f.spacing * i)), `@${f.id}#${i}`)));
    return { tools };
  },

  cpattern(f, ctx) {
    const { o, d } = resolveDir(f.axis, ctx);
    const full = Math.abs(f.angle - 360) < 1e-9;
    const step = (full ? 360 / f.count : f.count > 1 ? f.angle / (f.count - 1) : 0) * (f.reverse ? -1 : 1);
    if (f.bodies?.length) return LIB.bodyCopies(ctx, f, f.count, (i) => V.rotationAbout(o, d, step * i));   // brep-bodies.js
    const seeds = seedTools(f, ctx);
    const tools = [];
    for (let i = 1; i < f.count; i++) tools.push(...seeds.map((t) => moveTool(ctx, t, V.rotationAbout(o, d, step * i), `@${f.id}#${i}`)));
    return { tools };
  },

  mirror(f, ctx) {
    const frame = resolvePlane(f.plane, ctx);
    const M4 = V.reflection(frame.o, frame.n);
    if (f.seeds === 'body') {
      if (!ctx.body) fail(tr('model.brep.no_body_mirror'));
      return { tools: [moveTool(ctx, { shape: ctx.body, op: 'add', names: ctx.names }, M4, `@${f.id}#m`)] };
    }
    return { tools: seedTools(f, ctx).map((t) => moveTool(ctx, t, M4, `@${f.id}#m`)) };
  },

  fillet(f, ctx) { return edgeFeature(f, ctx, 'fillet'); },
  chamfer(f, ctx) { return edgeFeature(f, ctx, 'chamfer'); },

  shell(f, ctx) {
    const { oc, T, H } = ctx;
    if (!ctx.body) fail(tr('model.brep.no_body_shell'));
    if (!(f.t > 0)) fail(tr('model.brep.wall_positive'));
    if (!f.faces.length) fail(tr('model.brep.shell_pick_faces'));
    const table = ctx.faceTable();
    const remove = f.faces.map((ref) => {
      const cands = table.filter((x) => x.name === ref.name);
      if (!cands.length) fail(tr('model.brep.shell_face_gone', { face: describeName(ctx.part, ref.name) }));
      return nearest(cands, ref.at, (x) => x.at).face;
    });
    const mk = T(new oc.BRepOffsetAPI_MakeThickSolid());
    try { mk.MakeThickSolidByJoin(ctx.body, H.shapeList(remove), f.outward ? f.t : -f.t, 1e-3, oc.BRepOffset_Mode.BRepOffset_Skin, false, false, oc.GeomAbs_JoinType.GeomAbs_Arc, false, H.prog()); } catch (e) { fail(tr('model.brep.shell_failed_why', { why: occtMessage(oc, e) })); }
    if (!mk.IsDone()) fail(tr('model.brep.shell_thickness'));
    const result = T(mk.Shape());
    if (result.IsNull()) fail(tr('model.brep.shell_failed'));
    // the faces it keeps are still there; each one's offset copy (the new inner wall) is Generated from it
    const names = new SMap(H.hash);
    const inResult = new SMap(H.hash);
    for (const rf of H.unique(result, 'FACE')) inResult.set(rf, true);
    for (const [face, name] of ctx.names.entries()) {
      if (inResult.get(face)) names.set(face, name);
      for (const g of H.list(mk.Generated(face))) if (inResult.get(g) && names.get(g) === undefined) names.set(g, `${name}~${f.id}`);
    }
    for (const [face, name] of ctx.names.entries()) for (const m of H.list(mk.Modified(face))) if (inResult.get(m) && names.get(m) === undefined) names.set(m, name);
    return { replace: { shape: result, names } };
  },

  member() { fail(tr('weld.err.exact')); },   // structural members (D7.50) are built by the mesh kernel only

  import(f, ctx) {
    const { T, H } = ctx;
    if (f.mesh) fail(tr('kernel.mesh.import_exact'));   // a body from a mesh (D7.49) is built by the mesh kernel only
    const base = ctx.importShape(f);
    // place: the file's Z up becomes PartCraft's Y up unless the file is already Y up
    const shape = f.up === 'y' ? base : T(new ctx.oc.BRepBuilderAPI_Transform(base, H.trsf(Z_TO_Y), true)).Shape();
    if (shape !== base) T(shape);   // a Y-up file uses the cached shape itself: freeing it here broke every later rebuild
    const names = new SMap(H.hash);
    H.unique(shape, 'FACE').forEach((face, i) => names.set(face, `${f.id}.face:${i}`));   // i18n-ignore: a face name (identifier)
    return { tools: [{ shape, op: 'add', names }] };
  },
};

// the Design features of brep-design.js (reference geometry, sweep, loft, draft, the extended extrude)
const LIB = { fail, SMap, profileCurves, profileFaces, nameSweep, sketchOf, resolvePlane, resolveDir, occtMessage, describeName: (...a) => describeName(...a), nearest: (...a) => nearest(...a), bodyRange, refName };
installDesign(FEATURES, LIB);
// the freeform features of surface.js (form, patch, surface loft, stitch, thicken, offset/extend/trim surface)
installSurface(FEATURES, { ...LIB, splineGeom });
// the body tools of brep-bodies.js (body ids, Combine, Move/Copy, Scale, path pattern, body copies in patterns)
installBodies(FEATURES, LIB);
// sheet metal (brep-sheet.js, 0.4 P15/P16): base flange, edge flange
installSheet(FEATURES, LIB);
// the rib (brep-rib.js, 0.4 P20)
installRib(FEATURES, LIB);
// threads on round faces (brep-thread.js, 0.5 WL.29): cosmetic on this kernel
installThread(FEATURES, LIB);

/** Z-up (STEP, STL, 3MF) → PartCraft's Y-up: (x, y, z) → (x, z, −y); column-major. */
export const Z_TO_Y = [1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1];
/** Y-up → Z-up: (x, y, z) → (x, −z, y). */
export const Y_TO_Z = [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1];

function describeName(part, name) {
  const fid = nameFeatures(name)[0];
  const g = part.features.find((x) => x.id === fid);
  return g ? tr('model.brep.face_of', { name: g.name }) : tr('model.brep.face_of_deleted');
}

function nearest(list, at, pointOf) {
  if (!at || list.length === 1) return list[0];
  let best = list[0], bd = Infinity;
  for (const x of list) { const d = V.len(V.sub(pointOf(x), at)); if (d < bd) { bd = d; best = x; } }
  return best;
}

function edgeFeature(f, ctx, kind) {
  const { oc, T, H } = ctx;
  if (!ctx.body) fail(kind === 'fillet' ? tr('model.brep.no_body_round') : tr('model.brep.no_body_chamfer'));
  const size = kind === 'fillet' ? f.r : f.d;
  if (!(size > 0)) fail(kind === 'fillet' ? tr('model.brep.radius_positive') : tr('model.brep.distance_positive'));
  if (!f.edges.length) fail(tr('model.brep.pick_edges'));
  const table = ctx.edgeTable();
  const picked = f.edges.map((ref) => {
    const want = [...ref.faces].sort().join('|');
    const cands = table.filter((e) => e.key === want);
    if (!cands.length) fail(tr(kind === 'fillet' ? 'model.brep.round_edge_gone' : 'model.brep.chamfer_edge_gone', { a: describeName(ctx.part, ref.faces[0]), b: describeName(ctx.part, ref.faces[1]) }));
    return nearest(cands, ref.at, (e) => e.at).edge;
  });
  const mk = kind === 'fillet' ? T(new oc.BRepFilletAPI_MakeFillet(ctx.body, oc.ChFi3d_FilletShape.ChFi3d_Rational)) : T(new oc.BRepFilletAPI_MakeChamfer(ctx.body));
  const seen = new SMap(H.hash);
  const faceOn = (ref, e) => {
    // the face (of the two the edge joins) a chamfer distance is measured on: faces[0] (sorted), or faces[1] when flipped
    const name = [...ref.faces].sort()[f.flip ? 1 : 0];
    const hit = ctx.faceTable().filter((x) => x.name === name).find((x) => H.explore(x.face, 'EDGE').some((g) => g.IsSame(e)));
    if (!hit) fail(tr('model.brep.chamfer_face_gone', { face: describeName(ctx.part, name) }));
    return T(oc.TopoDS.Face(hit.face));
  };
  if (kind === 'chamfer' && f.mode === 'two' && !(f.d2 > 0)) fail(tr('model.brep.d2_positive'));
  if (kind === 'chamfer' && f.mode === 'angle' && !(f.angle > 0 && f.angle < 90)) fail(tr('model.brep.chamfer_angle'));
  if (kind === 'fillet' && typeof f.r2 === 'number' && !(f.r2 > 0)) fail(tr('model.brep.r2_positive'));
  picked.forEach((e, i) => {
    if (seen.get(e)) return;
    seen.set(e, true);
    const E = T(oc.TopoDS.Edge(e));
    if (kind === 'chamfer' && f.mode === 'two') mk.Add(size, f.d2, E, faceOn(f.edges[i], e));
    else if (kind === 'chamfer' && f.mode === 'angle') mk.AddDA(size, f.angle * Math.PI / 180, E, faceOn(f.edges[i], e));
    else if (kind === 'fillet' && typeof f.r2 === 'number') { if (f.flip) mk.Add(f.r2, size, E); else mk.Add(size, f.r2, E); }
    else mk.Add(size, E);
  });
  try { mk.Build(H.prog()); } catch (e) { fail(tr(kind === 'fillet' ? 'model.brep.fillet_failed_why' : 'model.brep.chamfer_failed_why', { why: occtMessage(oc, e) })); }
  if (!mk.IsDone()) fail(kind === 'fillet' ? tr('model.brep.round_no_fit', { size: fmt(size) }) : tr('model.brep.chamfer_no_fit', { size: fmt(size) }));
  const result = T(mk.Shape());
  const names = new SMap(H.hash);
  for (const [face, name] of ctx.names.entries()) {
    if (mk.IsDeleted(face)) continue;
    const mods = H.list(mk.Modified(face));
    if (mods.length) for (const m of mods) names.set(m, name); else names.set(face, name);
  }
  const tag = kind === 'fillet' ? 'blend' : 'bevel';
  picked.forEach((e, k) => { for (const g of H.list(mk.Generated(e))) if (g.ShapeType() === H.ENUM.TopAbs_FACE) names.set(g, `${f.id}.${tag}:${k}`); });
  let c = 0;
  for (const e of picked) for (const v of H.explore(e, 'VERTEX')) for (const g of H.list(mk.Generated(v))) if (g.ShapeType() === H.ENUM.TopAbs_FACE && names.get(g) === undefined) names.set(g, `${f.id}.corner:${c++}`);   // i18n-ignore: a face name (identifier)
  return { replace: { shape: result, names }, count: seen.size };
}

const fmt = (v) => String(+Number(v).toFixed(4));

function seedTools(f, ctx) {
  if (!f.seeds.length) fail(tr('model.brep.choose_seeds'));
  const out = [];
  for (const id of f.seeds) {
    const t = ctx.tools.get(id);
    const g = ctx.part.features.find((x) => x.id === id);
    if (g && ['fillet', 'chamfer', 'shell', 'draft'].includes(g.type)) fail(tr('model.brep.seed_not_copyable', { name: g.name }));
    if (!t) fail(g ? tr('model.brep.seed_no_solid', { name: g.name }) : tr('model.brep.seed_gone_no_solid'));
    out.push(...t);
  }
  if (!out.length) fail(tr('model.brep.seeds_no_solid'));
  return out;
}

function moveTool(ctx, t, M4, suffix) {
  const { oc, T, H } = ctx;
  const tr = T(new oc.BRepBuilderAPI_Transform(t.shape, H.trsf(M4), false, false));
  const shape = T(tr.Shape());
  const names = new SMap(H.hash);
  for (const [face, name] of t.names.entries()) {
    const m = T(tr.ModifiedShape(face));
    if (!m.IsNull()) names.set(m, name + suffix);
  }
  return { shape, op: t.op, names };
}

/** Apply tools to the body in order (runs of the same operation in one boolean); names follow OCCT's history. */
function applyTools(ctx, tools) {
  const { oc, T, H } = ctx;
  let i = 0;
  while (i < tools.length) {
    const op = tools[i].op;
    let j = i;
    while (j < tools.length && tools[j].op === op) j++;
    const run = tools.slice(i, j);
    i = j;
    if (!ctx.body) {
      if (op === 'cut') fail(tr('model.brep.nothing_to_cut'));
      if (op === 'intersect') fail(tr('model.brep.no_body_intersect'));
      if (run.length === 1) { ctx.body = run[0].shape; ctx.names = run[0].names; continue; }
      ctx.body = run[0].shape; ctx.names = run[0].names;
      run.shift();
    }
    if (op === 'new') {
      // a separate body: kept beside the others in one compound (later booleans act on every body)
      const b = T(new oc.TopoDS_Builder());
      const comp = T(new oc.TopoDS_Compound());
      b.MakeCompound(comp);
      for (const s of [ctx.body, ...run.map((t) => t.shape)]) for (const so of H.explore(s, 'SOLID')) b.Add(comp, so);
      const names = new SMap(H.hash);
      for (const src of [ctx.names, ...run.map((t) => t.names)]) for (const [face, name] of src.entries()) names.set(face, name);
      ctx.body = comp; ctx.names = names; ctx.dirty();
      continue;
    }
    const mk = T(op === 'add' ? new oc.BRepAlgoAPI_Fuse() : op === 'cut' ? new oc.BRepAlgoAPI_Cut() : new oc.BRepAlgoAPI_Common());
    mk.SetArguments(H.shapeList([ctx.body]));
    mk.SetTools(H.shapeList(run.map((t) => t.shape)));
    mk.SetRunParallel(false);
    try { mk.Build(H.prog()); } catch (e) { fail(tr('model.brep.boolean_failed_why', { why: occtMessage(oc, e) })); }
    if (!mk.IsDone() || mk.HasErrors()) fail(tr('model.brep.boolean_failed'));
    const result = T(mk.Shape());
    const names = new SMap(H.hash);
    for (const src of [ctx.names, ...run.map((t) => t.names)]) {
      for (const [face, name] of src.entries()) {
        if (mk.IsDeleted(face)) continue;
        const mods = H.list(mk.Modified(face));
        if (mods.length) for (const m of mods) names.set(m, name); else names.set(face, name);
      }
    }
    ctx.body = result; ctx.names = names;
    ctx.dirty();
    mk.Clear();   // frees the boolean's data structure; deleting the op alone leaks it in this build
  }
}

/** Faces of the body as plain data: name, kind of surface, plane (outward normal) or axis, a point on it. */
function faceTableOf(ctx) {
  const { oc, T, H } = ctx;
  const out = [];
  for (const face of H.unique(ctx.body, 'FACE')) {
    const name = ctx.names.get(face) || null;
    const F = T(oc.TopoDS.Face(face));
    const ad = T(new oc.BRepAdaptor_Surface(F, true));
    const type = ad.GetType();
    const rev = face.Orientation() === oc.TopAbs_Orientation.TopAbs_REVERSED;
    const rec = { face, name, type: 'other' };
    const gp = T(new oc.GProp_GProps());
    oc.BRepGProp.SurfaceProperties(face, gp, false, false);
    rec.area = gp.Mass();
    rec.at = H.xyz(T(gp.CentreOfMass()));
    if (type === 'GeomAbs_Plane') {
      const pl = T(ad.Plane());
      const ax = T(pl.Axis());
      // the surface normal is X × Y of the plane's frame: its axis when the frame is right-handed, else the opposite
      const d = V.mul(H.xyz(T(ax.Direction())), T(pl.Position()).Direct() ? 1 : -1);
      rec.type = 'plane'; rec.n = rev ? V.mul(d, -1) : d; rec.o = H.xyz(T(pl.Location()));
    } else if (type === 'GeomAbs_Cylinder') {
      const cy = T(ad.Cylinder());
      const ax = T(cy.Axis());
      rec.type = 'cylinder';
      rec.axis = { o: H.xyz(T(ax.Location())), d: H.xyz(T(ax.Direction())) };
      rec.r = cy.Radius();
      rec.v = [ad.FirstVParameter(), ad.LastVParameter()];   // its extent along the axis (threads.js)
      // material inside it: a shaft. The surface's normal points away from the axis when its frame is right-handed
      rec.outside = T(cy.Position()).Direct() !== rev;
    } else if (type === 'GeomAbs_Cone') rec.type = 'cone';   // gp_Cone is not bound in this build
    else if (type === 'GeomAbs_Sphere') rec.type = 'sphere';
    else if (type === 'GeomAbs_Torus') rec.type = 'torus';
    else if (type === 'GeomAbs_BSplineSurface' || type === 'GeomAbs_BezierSurface') rec.type = 'spline';
    if (rec.type !== 'plane' && rec.type !== 'cylinder') { try { const s = exactSurface(oc, T, F, ad); if (s) rec.surf = s; } catch { /* no exact form: the tet mesher follows the tessellation */ } }   // brep-surf.js
    out.push(rec);
  }
  return out;
}

/** Edges with the names of the two faces they join and a point on them. */
function edgeTableOf(ctx) {
  const { oc, T, H } = ctx;
  const byEdge = new SMap(H.hash);
  const list = [];
  for (const rec of ctx.faceTable()) {
    for (const e of H.unique(rec.face, 'EDGE')) {
      let x = byEdge.get(e);
      if (x === undefined) { x = { edge: e, faces: [] }; byEdge.set(e, x); list.push(x); }
      x.faces.push(rec.name || '?');
    }
  }
  const out = [];
  for (const x of list) {
    if (x.faces.length !== 2) continue;            // seams join a face to itself (listed once), skip free edges too
    const E = T(oc.TopoDS.Edge(x.edge));
    if (oc.BRep_Tool.Degenerated(E)) continue;
    const c = T(new oc.BRepAdaptor_Curve(E));
    const t0 = c.FirstParameter(), t1 = c.LastParameter();
    const a = H.xyz(T(c.EvalD0(t0))), b = H.xyz(T(c.EvalD0(t1))), m = H.xyz(T(c.EvalD0((t0 + t1) / 2)));
    const type = c.GetType();
    const gp = T(new oc.GProp_GProps());
    oc.BRepGProp.LinearProperties(x.edge, gp, false, false);
    const rec = { edge: x.edge, faces: [...x.faces].sort(), key: [...x.faces].sort().join('|'), at: m, a, b, len: gp.Mass(), type: type === 'GeomAbs_Line' ? 'line' : type === 'GeomAbs_Circle' ? 'circle' : 'curve' };
    // a circle's exact centre / axis / radius (sketch Project uses them)
    if (rec.type === 'circle') { const ci = T(c.Circle()), ax = T(ci.Axis()); rec.circ = { c: H.xyz(T(ci.Location())), n: H.xyz(T(ax.Direction())), r: ci.Radius() }; }
    out.push(rec);
  }
  return out;
}

/** The cache of imported STEP solids: text hash → TopoDS_Shape (kept between rebuilds, outside the arena). */
const importCache = new Map();
function hashText(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16) + ':' + s.length; }

/** Read STEP text into one shape (every solid in the file), cached. Throws FeatureError with a plain message. */
export function readStepShape(oc, text, { cache = true } = {}) {
  const key = hashText(text);
  if (cache && importCache.has(key)) return importCache.get(key);
  const T = makeArena();
  const H = helpers(oc, T);
  const path = '/import-' + key.replace(/[^0-9a-f]/g, '') + '.step';
  try {
    oc.FS.writeFile(path, text);
    const rd = T(new oc.STEPControl_Reader());
    const st = rd.ReadFile(path);
    if (st !== 'IFSelect_RetDone') fail(tr('model.brep.step_unreadable', { code: String(st).replace('IFSelect_Ret', '').toLowerCase() }));
    rd.TransferRoots(H.prog());
    const all = T(rd.OneShape());
    if (all.IsNull()) fail(tr('model.brep.step_no_shapes'));
    let solids = H.explore(all, 'SOLID');
    if (!solids.length) {
      // a closed shell written as a surface model: sew it and make it a solid
      const sew = T(new oc.BRepBuilderAPI_Sewing(1e-6, true, true, true, false));
      sew.Add(all); sew.Perform(H.prog());
      const sewn = T(sew.SewedShape());
      for (const sh of H.explore(sewn, 'SHELL')) {
        const ms = T(new oc.BRepBuilderAPI_MakeSolid(T(oc.TopoDS.Shell(sh))));
        if (ms.IsDone()) solids.push(T(ms.Solid()));
      }
      if (!solids.length) fail(tr('model.brep.step_no_solid'));
    }
    let shape;
    if (solids.length === 1) shape = copyShape(solids[0]);
    else {
      const b = T(new oc.TopoDS_Builder());
      const comp = new oc.TopoDS_Compound();
      b.MakeCompound(comp);
      for (const s of solids) b.Add(comp, s);
      shape = comp;
    }
    if (cache) {
      importCache.set(key, shape);
      while (importCache.size > 8) { const [k, v] = importCache.entries().next().value; importCache.delete(k); try { v.delete(); } catch { /* gone */ } }
    }
    return shape;
  } finally {
    try { oc.FS.unlink(path); } catch { /* not written */ }
    T.free();
  }
}

/**
 * Rebuild the part with OCCT. Mutates each sketch's geometry to its solved state. Never throws for a
 * feature problem. `keep`: also return the live body shape (`shape`, the caller deletes it) for exports.
 */
export function regenerateBrep(part, oc, { upTo = null, keep = false, mesh: meshOpts = {}, noMesh = false } = {}) {
  const T = makeArena();
  const H = helpers(oc, T);
  let tableCache = null, edgeCache = null;
  const ctx = {
    part, oc, T, H, body: null, names: new SMap(H.hash),
    results: new Map(), frames: new Map(), axes: new Map(), holeAxes: new Map(), tools: new Map(), refGeom: new Map(), threads: new Map(), sheetmetal: new Map(),
    dirty: () => { tableCache = null; edgeCache = null; },
    faceTable: () => (tableCache ||= faceTableOf(ctx)),
    edgeTable: () => (edgeCache ||= edgeTableOf(ctx)),
    bbox: (s) => bboxOf(oc, T, s),
    importShape: (f) => readStepShape(oc, f.step),
  };
  const built = upTo === null ? builtCount(part) : Math.min(upTo, part.features.length);
  part.features.forEach((f, i) => {
    const r = { status: 'ok' };
    ctx.results.set(f.id, r);
    if (i >= built) { r.status = 'rolled'; return; }
    if (f.suppressed) { r.status = 'suppressed'; return; }
    const blocked = dependsOn(f).map((d) => [d, ctx.results.get(d)]).find(([, x]) => !x || x.status !== 'ok');
    if (blocked) {
      const g = part.features.find((x) => x.id === blocked[0]);
      r.status = 'skipped';
      r.message = g ? tr(NEEDS_KEY[blocked[1]?.status] || 'model.brep.needs_not_built', { name: g.name }) : tr('model.brep.needs_gone');
      return;
    }
    ctx.solveInfo = null;
    const before = { body: ctx.body, names: ctx.names };
    try {
      const out = FEATURES[f.type](f, ctx) || {};
      if (out.solve) r.solve = out.solve;
      if (out.warning) r.warning = out.warning;
      if (out.count !== undefined) r.count = out.count;
      if (out.note) r.note = out.note;
      if (out.tools) {
        ctx.tools.set(f.id, out.tools);
        applyTools(ctx, out.tools);
      }
      if (out.replace) { ctx.body = out.replace.shape; ctx.names = out.replace.names; ctx.dirty(); }
      if (out.tools || out.replace) {
        const solids = H.explore(ctx.body, 'SOLID');
        if (!solids.length) { r.warning = tr('model.brep.nothing_left'); ctx.body = null; ctx.names = new SMap(H.hash); ctx.dirty(); }
      }
      if (out.tools || out.replace) LIB.trackBodies(ctx, f);   // which solid is which body (brep-bodies.js)
    } catch (e) {
      ctx.body = before.body; ctx.names = before.names; ctx.dirty();
      r.status = 'error';
      r.message = e instanceof FeatureError ? e.message : tr('model.brep.feature_failed', { why: occtMessage(oc, e) });
      if (f.type === 'sketch' && ctx.solveInfo) r.solve = ctx.solveInfo;
    }
  });

  let mesh = null, stats = null, faces = [], edges = [], planes = {};
  if (ctx.body && !noMesh) {
    try {
      const out = meshBody(ctx, meshOpts);
      ({ mesh, stats, faces, edges } = out);
      for (const f of faces) if (f.type === 'plane' && f.name && !planes[f.name]) planes[f.name] = { n: f.n, o: f.o };
    } catch (e) {
      mesh = null; stats = null;
      for (const r of ctx.results.values()) if (r.status === 'ok') { r.warning = tr('model.brep.show_failed', { why: occtMessage(oc, e) }); break; }
    }
  }
  let shape = null;
  if (keep && ctx.body) shape = copyShape(ctx.body);
  const sheets = noMesh ? [] : sheetMeshes(ctx);   // surface bodies (surface.js), for the view
  const { bodies, faceBody } = mesh ? LIB.bodyList(ctx) : { bodies: [], faceBody: [] };   // brep-bodies.js
  T.free();
  return { exact: true, results: ctx.results, mesh, stats, frames: ctx.frames, planes, axes: ctx.axes, holeAxes: ctx.holeAxes, faces, edges, candidates: new Map(), shape, refGeom: ctx.refGeom, threads: ctx.threads, sheets, bodies, faceBody, sheetmetal: ctx.sheetmetal };
}

function bboxOf(oc, T, s) {
  const b = T(new oc.Bnd_Box());
  oc.BRepBndLib.AddOptimal(s, b, false, false);
  return { min: [b.GetXMin(), b.GetYMin(), b.GetZMin()], max: [b.GetXMax(), b.GetYMax(), b.GetZMax()] };
}

/**
 * Triangles (welded, watertight, for the view, STL/3MF and the manifold assembly checks), per-triangle
 * face and feature, edge polylines, and exact properties.
 */
function meshBody(ctx, { angular = null } = {}) {
  const { oc, T, H, body, part } = ctx;
  const bb = bboxOf(oc, T, body);
  const diag = Math.max(1e-6, V.len(V.sub(bb.max, bb.min)));
  const lin = diag * 2e-4;
  const ang = angular || (2 * Math.PI / Math.max(16, part.resolution || 64));
  const table = ctx.faceTable();
  const faceIndex = new SMap(H.hash);
  table.forEach((rec, i) => faceIndex.set(rec.face, i));
  const md = T(oc.ReplicadMeshExtractor.extract(body, lin, ang, false));
  const mem = () => oc.wasmMemory.buffer;
  const vs = new Float32Array(mem(), md.getVerticesPtr(), md.getVerticesSize()).slice();
  const ns = new Float32Array(mem(), md.getNormalsPtr(), md.getNormalsSize()).slice();
  const ts = new Int32Array(mem(), md.getTrianglesPtr(), md.getTrianglesSize()).slice();
  const fg = new Int32Array(mem(), md.getFaceGroupsPtr(), md.getFaceGroupsSize()).slice();
  // face groups come in the explorer's face order; match them by hash to be safe
  const facesInOrder = H.explore(body, 'FACE');
  const ntri = ts.length / 3;
  const triFace = new Int32Array(ntri).fill(-1);
  for (let g = 0; g < fg.length / 3; g++) {
    const start = fg[g * 3], count = fg[g * 3 + 1], h = fg[g * 3 + 2];
    let fi = -1;
    const cand = facesInOrder[g];
    if (cand && H.hash(cand) === h) fi = faceIndex.get(cand) ?? -1;
    if (fi < 0) { const k = table.findIndex((r) => H.hash(r.face) === h); fi = k; }
    for (let t = start / 3; t < (start + count) / 3; t++) triFace[t] = fi;
  }
  // weld by exact position (OCCT discretises a shared edge once, so both faces get the same points)
  const nv = vs.length / 3;
  const remap = new Int32Array(nv);
  const key = new Map();
  const pos = [];
  for (let i = 0; i < nv; i++) {
    const k = vs[i * 3] + ',' + vs[i * 3 + 1] + ',' + vs[i * 3 + 2];
    let w = key.get(k);
    if (w === undefined) { w = pos.length / 3; key.set(k, w); pos.push(vs[i * 3], vs[i * 3 + 1], vs[i * 3 + 2]); }
    remap[i] = w;
  }
  const idx = [];
  const tf = [];
  const cornerN = [];
  for (let t = 0; t < ntri; t++) {
    const a = remap[ts[t * 3]], b = remap[ts[t * 3 + 1]], c = remap[ts[t * 3 + 2]];
    if (a === b || b === c || a === c) continue;   // collapsed by the weld
    idx.push(a, b, c);
    tf.push(triFace[t]);
    for (let k = 0; k < 3; k++) { const v = ts[t * 3 + k]; cornerN.push(ns[v * 3], ns[v * 3 + 1], ns[v * 3 + 2]); }
  }
  const positions = new Float32Array(pos), indices = new Uint32Array(idx);
  const triFaceW = new Int32Array(tf);
  // feature of each triangle (the feature named first in its face's name)
  const featIds = [];
  const faceFeat = table.map((r) => {
    const fid = r.name ? nameFeatures(r.name)[0] : null;
    if (!fid) return -1;
    let k = featIds.indexOf(fid);
    if (k < 0) { featIds.push(fid); k = featIds.length - 1; }
    return k;
  });
  const triFeature = new Int32Array(triFaceW.length);
  for (let t = 0; t < triFaceW.length; t++) triFeature[t] = triFaceW[t] >= 0 ? faceFeat[triFaceW[t]] : -1;
  // edges: polylines from OCCT's own edge discretisation
  const edgeRecs = ctx.edgeTable();
  const edgeIndex = new SMap(H.hash);
  edgeRecs.forEach((e, i) => edgeIndex.set(e.edge, i));
  const ed = T(oc.ReplicadEdgeMeshExtractor.extract(body, lin, ang));
  const lines = new Float32Array(mem(), ed.getLinesPtr(), ed.getLinesSize()).slice();
  const eg = new Int32Array(mem(), ed.getEdgeGroupsPtr(), ed.getEdgeGroupsSize()).slice();
  const allEdges = H.unique(body, 'EDGE');
  const byHash = new Map();
  for (const e of allEdges) { const h = H.hash(e); if (!byHash.has(h)) byHash.set(h, []); byHash.get(h).push(e); }
  const segs = [], segEdge = [];
  for (let g = 0; g < eg.length / 3; g++) {
    const start = eg[g * 3], count = eg[g * 3 + 1], h = eg[g * 3 + 2];
    let ei = -1;
    for (const e of byHash.get(h) || []) { const k = edgeIndex.get(e); if (k !== undefined) { ei = k; break; } }
    for (let p = start; p < start + count - 1; p++) {
      segs.push(lines[p * 3], lines[p * 3 + 1], lines[p * 3 + 2], lines[p * 3 + 3], lines[p * 3 + 4], lines[p * 3 + 5]);
      segEdge.push(ei);
    }
  }
  // exact properties
  const gv = T(new oc.GProp_GProps());
  // spline edges (sketch splines): OCCT's default volume integration is ~1e-4 off there; the adaptive Gauss–Kronrod one is exact to ~1e-12
  if (edgeRecs.some((e) => e.type === 'curve')) oc.BRepGProp.VolumePropertiesGK(body, gv, 1e-12, false, true, false, false, false);
  else oc.BRepGProp.VolumeProperties(body, gv, false, false, false);
  const ga = T(new oc.GProp_GProps());
  oc.BRepGProp.SurfaceProperties(body, ga, false, false);
  const bodies = H.explore(body, 'SOLID').length;
  // genus from the welded mesh: χ = V − E + F, genus = bodies − χ/2
  const ek = new Set();
  for (let t = 0; t < indices.length / 3; t++) for (let k = 0; k < 3; k++) { const a = indices[t * 3 + k], b = indices[t * 3 + (k + 1) % 3]; ek.add(a < b ? a * 4294967296 + b : b * 4294967296 + a); }
  const chi = positions.length / 3 - ek.size + indices.length / 3;
  const stats = {
    volume: gv.Mass(), area: ga.Mass(), genus: Math.round(bodies - chi / 2), tris: indices.length / 3, bodies,
    bbox: bb, faces: table.length, edges: edgeRecs.length, exact: true,
  };
  // Drop the triangulation OCCT attached to the faces: some sub-shapes of a boolean result outlive their
  // last JS handle in this build, and their meshes would pile up rebuild after rebuild.
  oc.BRepTools.Clean(body, true);
  const faces = table.map(({ face, ...rest }) => rest);
  const edges = edgeRecs.map(({ edge, ...rest }) => rest);
  const mesh = { positions, indices, triFeature, featIds, triFace: triFaceW, cornerNormals: new Float32Array(cornerN), edgeSegs: new Float32Array(segs), segEdge: new Int32Array(segEdge) };
  return { mesh, stats, faces, edges };
}

// ---------------------------------------------------------------- STEP

/**
 * STEP text of a shape with its true curved surfaces (OCCT's STEP writer, AP242 by default or AP214).
 * Written Z up like the STL and 3MF exports (PartCraft's Y up turned so other CAD sees it standing).
 */
export function stepText(oc, shape, { name = 'Part', schema = 'AP242' } = {}) {
  const T = makeArena();
  const H = helpers(oc, T);
  const path = '/export-' + Math.random().toString(36).slice(2) + '.step';
  try {
    const w = T(new oc.STEPControl_Writer());   // makes sure the STEP statics exist before they are set
    oc.Interface_Static.SetCVal('write.step.schema', schema === 'AP214' ? 'AP214IS' : 'AP242DIS');
    oc.Interface_Static.SetCVal('write.step.unit', 'MM');
    oc.Interface_Static.SetCVal('write.step.product.name', String(name).replace(/[^\x20-\x7e]/g, '_').slice(0, 80) || 'Part');
    const zUp = T(T(new oc.BRepBuilderAPI_Transform(shape, H.trsf(Y_TO_Z), true)).Shape());
    const st = w.Transfer(zUp, oc.STEPControl_StepModelType.STEPControl_AsIs, true, H.prog());
    if (st !== 'IFSelect_RetDone') throw new Error(tr('model.brep.step_writer_take'));
    if (w.Write(path) !== 'IFSelect_RetDone') throw new Error(tr('model.brep.step_writer_write'));
    return oc.FS.readFile(path, { encoding: 'utf8' });
  } finally {
    try { oc.FS.unlink(path); } catch { /* not written */ }
    T.free();
  }
}

/** Rebuild and write STEP in one go → { text, stats } (throws Error when there is no solid). */
export function exportStep(part, oc, opts = {}) {
  const r = regenerateBrep(part, oc, { keep: true, noMesh: true });
  if (!r.shape) throw new Error(tr('model.brep.no_solid_export'));
  try { return { text: stepText(oc, r.shape, { name: part.name, ...opts }) }; } finally { r.shape.delete(); }
}

/** Facts about STEP text read back by OCCT (for the import dialog and the tests). */
export function stepInfo(oc, text) {
  const T = makeArena();
  const H = helpers(oc, T);
  try {
    const shape = readStepShape(oc, text, { cache: false });
    T(shape);
    const g = T(new oc.GProp_GProps());
    oc.BRepGProp.VolumeProperties(shape, g, false, false, false);
    const surf = {};
    for (const f of H.unique(shape, 'FACE')) { const t = T(new oc.BRepAdaptor_Surface(T(oc.TopoDS.Face(f)), true)).GetType().replace('GeomAbs_', ''); surf[t] = (surf[t] || 0) + 1; }
    return { solids: H.explore(shape, 'SOLID').length, faces: H.unique(shape, 'FACE').length, volume: g.Mass(), surfaces: surf, bbox: bboxOf(oc, T, shape) };
  } finally { T.free(); }
}
