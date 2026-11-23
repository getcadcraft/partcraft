/* SPDX-License-Identifier: Apache-2.0 */
/**
 * brep-rib.js — the Rib feature's solid with OpenCascade (0.4 P20): installRib(FEATURES, LIB) from brep.js.
 *
 * The chain (rib.js) is carried on past both ends by E (well beyond the body) and swept E to one side, square to its chord,
 * into a flat region of the sketch plane; that region t thick across the plane is the slab. The slab less the body falls into
 * pieces: the rib is the piece just beside the chain (a probe point a hair to that side, inside it). A piece that reaches the
 * slab's far side is open — the edge does not meet the body there — and is refused. Faces `<id>.rib:<n>`.
 */
import * as V from './vec.js';
import { pointXY } from './sketch.js';
import { lineChain } from './sheetmetal.js';
import { t } from './i18n.js';
import { len2 as len, sub2 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74)

export function installRib(FEATURES, lib) {
  const { fail, SMap, sketchOf } = lib;

  FEATURES.rib = (f, ctx) => {
    const { oc, T, H } = ctx;
    if (!ctx.body) fail(t('rib.err.no_body'));
    const { sk, frame } = sketchOf(ctx, f.sketch);
    const ents = sk.entities.filter((e) => !e.construction && e.type !== 'point');
    if (!ents.length || ents.some((e) => e.type !== 'line')) fail(t('rib.err.profile'));
    const pts = lineChain(ents.map((e) => [pointXY(sk, e.p1), pointXY(sk, e.p2)]));
    if (!pts) fail(t('rib.err.profile'));
    // how far is "beyond the body": the body's whole size, from its box
    const bb = ctx.bbox(ctx.body);
    const E = 4 * Math.max(1, V.len(V.sub(bb.max, bb.min)) + V.len(V.sub(V.mul(V.add(bb.max, bb.min), 0.5), frame.o)));
    const unit = (a) => [a[0] / len(a), a[1] / len(a)];
    const n = pts.length;
    const d0 = unit(sub(pts[1], pts[0])), d1 = unit(sub(pts[n - 1], pts[n - 2]));
    const chord = unit(sub(pts[n - 1], pts[0]));
    // the side the rib fills: toward the body's centre of mass (a bracket's inside corner), flip: away — whichever end was drawn first
    const gp = T(new oc.GProp_GProps());
    oc.BRepGProp.VolumeProperties(ctx.body, gp, false, false, false);
    const cm = V.toPlane(frame, H.xyz(T(gp.CentreOfMass())));
    const left = [-chord[1], chord[0]], mid0 = [(pts[0][0] + pts[n - 1][0]) / 2, (pts[0][1] + pts[n - 1][1]) / 2];
    const toward = (cm[0] - mid0[0]) * left[0] + (cm[1] - mid0[1]) * left[1] >= 0 ? 1 : -1;
    const side = toward * (f.flip ? -1 : 1);
    const D = [left[0] * side, left[1] * side];
    const ext = [[pts[0][0] - d0[0] * E, pts[0][1] - d0[1] * E], ...pts.slice(1, -1), [pts[n - 1][0] + d1[0] * E, pts[n - 1][1] + d1[1] * E]];
    const far = ext.map((p) => [p[0] + D[0] * E, p[1] + D[1] * E]).reverse();
    const poly = [...ext, ...far];
    // the slab: that region, t thick across the plane
    const lift = f.side === 'mid' ? -f.t / 2 : f.side === 'front' ? 0 : -f.t;
    const W = (p) => V.add(V.toWorld(frame, p[0], p[1]), V.mul(frame.n, lift));
    const mw = T(new oc.BRepBuilderAPI_MakeWire());
    for (let i = 0; i < poly.length; i++) {
      const a = W(poly[i]), b = W(poly[(i + 1) % poly.length]);
      if (V.len(V.sub(a, b)) < 1e-9) continue;
      mw.Add(T(T(new oc.BRepBuilderAPI_MakeEdge(H.pnt(a), H.pnt(b))).Edge()));
    }
    if (!mw.IsDone()) fail(t('rib.err.build'));
    const mf = T(new oc.BRepBuilderAPI_MakeFace(T(mw.Wire()), true));
    if (!mf.IsDone()) fail(t('rib.err.build'));
    const slab = T(T(new oc.BRepPrimAPI_MakePrism(T(mf.Face()), H.vec(V.mul(frame.n, f.t)), false, true)).Shape());
    const cut = T(new oc.BRepAlgoAPI_Cut());
    cut.SetArguments(H.shapeList([slab])); cut.SetTools(H.shapeList([ctx.body])); cut.SetRunParallel(false);
    cut.Build(H.prog());
    if (!cut.IsDone() || cut.HasErrors()) fail(t('rib.err.build'));
    const pieces = H.explore(T(cut.Shape()), 'SOLID');
    // the piece beside the chain: the one that touches the middle of a chain line at mid-thickness (only it can: the slab lies
    // on one side of the chain, and the other pieces are cut off from it by the body)
    const k = Math.floor((n - 1) / 2), mid2 = [(pts[k][0] + pts[k + 1][0]) / 2, (pts[k][1] + pts[k + 1][1]) / 2];
    const probe = V.add(V.toWorld(frame, mid2[0], mid2[1]), V.mul(frame.n, lift + f.t / 2));
    const vx = T(T(new oc.BRepBuilderAPI_MakeVertex(H.pnt(probe))).Vertex());
    const dist = (s) => { const dd = T(new oc.BRepExtrema_DistShapeShape(vx, s, 1e-9, undefined, undefined, T(new oc.Message_ProgressRange()))); return dd.IsDone() ? dd.Value() : Infinity; };
    const rib = pieces.find((s) => dist(s) < 1e-6 * Math.max(1, f.t));
    if (!rib) fail(t('rib.err.inside'));
    // open: the piece runs out to the far side of the slab, so the edge never meets the body on that side
    const rb = ctx.bbox(rib);
    const corners = [];
    for (const x of [rb.min[0], rb.max[0]]) for (const y of [rb.min[1], rb.max[1]]) for (const z of [rb.min[2], rb.max[2]]) corners.push(V.toPlane(frame, [x, y, z]));
    const reach = Math.max(...corners.map((c) => (c[0] - mid2[0]) * D[0] + (c[1] - mid2[1]) * D[1]));
    const along = Math.max(...corners.map((c) => Math.abs((c[0] - mid2[0]) * chord[0] + (c[1] - mid2[1]) * chord[1])));
    if (reach > 0.5 * E || along > 0.5 * E) fail(t('rib.err.open'));
    const names = new SMap(H.hash);
    H.unique(rib, 'FACE').forEach((fc, i) => names.set(fc, `${f.id}.rib:${i}`));   // i18n-ignore: a face name
    return { tools: [{ shape: rib, op: 'add', names }] };
  };
}
