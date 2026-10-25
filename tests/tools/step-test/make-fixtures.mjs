#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * make-fixtures.mjs — makes fixtures/step/*.step ONCE (0.7 D7.26, session part-08; CC0, ours): simple parts drawn here and
 * written by OpenCascade 8 (the vendored replicad-opencascadejs, a test-only black box: its output is data, no OCCT code is
 * read or shipped) so cc-step is checked on a second program's STEP. Every surface kind cc-step reads, AP203 / AP214 / AP242,
 * inches, and an assembly with one part placed twice. fixtures/step/facts.json keeps OpenCascade's own volume, solid and
 * instance counts and bounding box of each (what cc-step's triangles must match to the chord tolerance).
 * Refuses to overwrite a file; `--check` rebuilds in memory and compares the geometry facts (the text carries a time stamp).
 *   node tools/step-test/make-fixtures.mjs [--check]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '../..');
const OUT = path.join(REPO, 'fixtures/step');
const check = process.argv.includes('--check');
fs.mkdirSync(OUT, { recursive: true });

const { default: init } = await import(path.join(REPO, 'public_html/assets/vendor/replicad-opencascadejs/current/replicad_single.js'));
const oc = await init({ print: () => {}, printErr: () => {} });
const P = (x, y, z) => new oc.gp_Pnt(x, y, z);
const D = (x, y, z) => new oc.gp_Dir(x, y, z);
const PR = () => new oc.Message_ProgressRange();
const box = (x, y, z, dx, dy, dz) => new oc.BRepPrimAPI_MakeBox(P(x, y, z), P(x + dx, y + dy, z + dz)).Shape();
const ax2 = (o, n) => new oc.gp_Ax2(P(...o), D(...n));
const cylinder = (o, n, r, h) => new oc.BRepPrimAPI_MakeCylinder(ax2(o, n), r, h).Shape();
const cut = (a, b) => new oc.BRepAlgoAPI_Cut(a, b, PR()).Shape();
const fuse = (a, b) => { const op = new oc.BRepAlgoAPI_Fuse(a, b, PR()); op.SimplifyResult(true, true, 1e-7); return op.Shape(); };
const edge = (a, b) => new oc.BRepBuilderAPI_MakeEdge(P(...a), P(...b)).Edge();
const wireOf = (edges) => { const w = new oc.BRepBuilderAPI_MakeWire(); for (const e of edges) w.Add(e); return w.Wire(); };
const faceOf = (w) => new oc.BRepBuilderAPI_MakeFace(w, true).Face();
const revolve = (face, deg = 360) => new oc.BRepPrimAPI_MakeRevol(face, new oc.gp_Ax1(P(0, 0, 0), D(0, 0, 1)), deg * Math.PI / 180, true).Shape();
const bspline = (pts, deg = 3, closed = false) => {
  // a clamped (or periodic) B-spline through the given poles
  const n = pts.length;
  const Pa = new oc.NCollection_Array1_gp_Pnt(1, n); pts.forEach((q, i) => Pa.SetValue(i + 1, P(...q)));
  let knots, mults;
  if (closed) { knots = Array.from({ length: n + 1 }, (_, i) => i); mults = knots.map(() => 1); }
  else { const inner = n - deg - 1; knots = [0, ...Array.from({ length: inner }, (_, i) => i + 1), inner + 1]; mults = knots.map((_, i) => (i === 0 || i === knots.length - 1 ? deg + 1 : 1)); }
  const K = new oc.NCollection_Array1_double(1, knots.length); knots.forEach((k, i) => K.SetValue(i + 1, k));
  const M = new oc.NCollection_Array1_int(1, mults.length); mults.forEach((k, i) => M.SetValue(i + 1, k));
  return new oc.Geom_BSplineCurve(Pa, K, M, deg, closed);
};
const bEdge = (c) => new oc.BRepBuilderAPI_MakeEdge(c).Edge();
const volume = (s) => { const g = new oc.GProp_GProps(); oc.BRepGProp.VolumeProperties(s, g, false, false, false); return g.Mass(); };
const bbox = (s) => { const b = new oc.Bnd_Box(); oc.BRepBndLib.Add(s, b, false); const lo = b.CornerMin(), hi = b.CornerMax(); return [[lo.X(), lo.Y(), lo.Z()], [hi.X(), hi.Y(), hi.Z()]].map((p) => p.map((v) => +v.toFixed(4))); };
const countSolids = (s) => { let n = 0; const ex = new oc.TopExp_Explorer(s, oc.TopAbs_ShapeEnum.TopAbs_SOLID, oc.TopAbs_ShapeEnum.TopAbs_SHAPE); for (; ex.More(); ex.Next()) n++; return n; };
const fillet = (s, r) => {
  const op = new oc.BRepFilletAPI_MakeFillet(s, oc.ChFi3d_FilletShape.ChFi3d_Rational);
  const ex = new oc.TopExp_Explorer(s, oc.TopAbs_ShapeEnum.TopAbs_EDGE, oc.TopAbs_ShapeEnum.TopAbs_SHAPE);
  for (; ex.More(); ex.Next()) op.Add(r, oc.TopoDS.Edge(ex.Current()));
  op.Build(PR());
  return op.Shape();
};
function stepOf(shape, { schema = 'AP214IS', unit = 'MM', name = 'Part' } = {}) {
  const pth = '/fx-' + Math.random().toString(36).slice(2) + '.step';
  const w = new oc.STEPControl_Writer();
  oc.Interface_Static.SetCVal('write.step.schema', schema);
  oc.Interface_Static.SetCVal('write.step.unit', unit);
  oc.Interface_Static.SetCVal('write.step.product.name', name);
  if (w.Transfer(shape, oc.STEPControl_StepModelType.STEPControl_AsIs, true, PR()) !== oc.IFSelect_ReturnStatus.IFSelect_RetDone && w.Transfer === undefined) throw new Error('transfer');
  w.Write(pth);
  const text = oc.FS.readFile(pth, { encoding: 'utf8' });
  oc.FS.unlink(pth);
  return text;
}
/** An assembly: one part (a plate) and another (a peg) placed twice, through XCAF components. */
function assemblyStep(plate, peg, places) {
  const pth = '/asm-' + Math.random().toString(36).slice(2) + '.step';
  const writer = new oc.STEPCAFControl_Writer();
  oc.Interface_Static.SetCVal('write.step.schema', 'AP214IS');
  oc.Interface_Static.SetCVal('write.step.unit', 'MM');
  const doc = new oc.TDocStd_Document(new oc.TCollection_ExtendedString('MDTV-XCAF'));
  const tool = oc.XCAFDoc_DocumentTool.ShapeTool(doc.Main());
  const asm = tool.NewShape();
  oc.TDataStd_Name.Set(asm, new oc.TCollection_ExtendedString('Pegboard', true));
  const pl = tool.AddShape(plate, false, true), pg = tool.AddShape(peg, false, true);
  oc.TDataStd_Name.Set(pl, new oc.TCollection_ExtendedString('Plate', true));
  oc.TDataStd_Name.Set(pg, new oc.TCollection_ExtendedString('Peg', true));
  tool.AddComponent(asm, pl, new oc.TopLoc_Location());
  for (const [dx, dy, dz, rot] of places) {
    const t = new oc.gp_Trsf(); t.SetRotation(new oc.gp_Ax1(P(0, 0, 0), D(0, 0, 1)), rot * Math.PI / 180);
    const tt = new oc.gp_Trsf(); tt.SetTranslation(new oc.gp_Vec(dx, dy, dz));
    tt.Multiply(t);
    tool.AddComponent(asm, pg, new oc.TopLoc_Location(tt));
  }
  tool.UpdateAssemblies();
  writer.SetNameMode(true);
  if (!writer.Perform(doc, pth, PR())) throw new Error('assembly writer failed');
  const text = oc.FS.readFile(pth, { encoding: 'utf8' });
  oc.FS.unlink(pth);
  return text;
}

// ---- the parts (mm, Z up)
const parts = {};
parts.box = { shape: box(0, 0, 0, 50, 40, 30), schema: 'AP214IS', note: 'planes only' };
parts['box-ap203'] = { shape: box(0, 0, 0, 50, 40, 30), schema: 'AP203', note: 'the same box in AP203' };
parts['box-ap242'] = { shape: box(0, 0, 0, 50, 40, 30), schema: 'AP242DIS', note: 'the same box in AP242' };
parts['box-inch'] = { shape: box(0, 0, 0, 50.8, 25.4, 12.7), schema: 'AP214IS', unit: 'INCH', note: '2 x 1 x 0.5 in, written in inches' };
{
  let p = box(0, 0, 0, 100, 60, 10);
  for (const [x, y] of [[20, 15], [80, 15], [20, 45], [80, 45]]) p = cut(p, cylinder([x, y, -5], [0, 0, 1], 4, 20));
  parts.plate = { shape: p, schema: 'AP214IS', note: 'four through holes (cylinders with seams)' };
}
parts.rounded = { shape: fillet(box(0, 0, 0, 50, 40, 30), 5), schema: 'AP214IS', note: 'every edge rounded r5: cylinders and sphere corners' };
parts.sphere = { shape: new oc.BRepPrimAPI_MakeSphere(P(0, 0, 0), 20).Shape(), schema: 'AP214IS', note: 'a whole sphere (seam, poles)' };
parts.torus = { shape: new oc.BRepPrimAPI_MakeTorus(new oc.gp_Ax2(P(0, 0, 0), D(0, 0, 1)), 30, 8).Shape(), schema: 'AP214IS', note: 'a whole torus' };
parts.cone = { shape: revolve(faceOf(wireOf([edge([0, 0, 0], [15, 0, 0]), edge([15, 0, 0], [0, 0, 25]), edge([0, 0, 25], [0, 0, 0])]))), schema: 'AP214IS', note: 'a cone to its apex (revolved triangle)' };
parts.frustum = { shape: revolve(faceOf(wireOf([edge([0, 0, 0], [20, 0, 0]), edge([20, 0, 0], [8, 0, 30]), edge([8, 0, 30], [0, 0, 30]), edge([0, 0, 30], [0, 0, 0])]))), schema: 'AP242DIS', note: 'a frustum' };
{
  // a vase: a B-spline wall revolved about Z (surface of revolution)
  const wall = bspline([[10, 0, 0], [20, 0, 10], [8, 0, 30], [14, 0, 45], [12, 0, 60]]);
  const w = wireOf([edge([0, 0, 0], [10, 0, 0]), bEdge(wall), edge([12, 0, 60], [0, 0, 60]), edge([0, 0, 60], [0, 0, 0])]);
  parts.vase = { shape: revolve(faceOf(w)), schema: 'AP214IS', note: 'a B-spline profile revolved (surface of revolution)' };
}
{
  // a loft through a circle, an ellipse and a smaller circle: B-spline surfaces
  const ts = new oc.BRepOffsetAPI_ThruSections(true, false, 1e-6);
  const circ = (z, r) => wireOf([new oc.BRepBuilderAPI_MakeEdge(new oc.gp_Circ(ax2([0, 0, z], [0, 0, 1]), r)).Edge()]);
  const ell = new oc.gp_Elips(ax2([0, 0, 30], [0, 0, 1]), 20, 10);
  ts.AddWire(circ(0, 15)); ts.AddWire(wireOf([new oc.BRepBuilderAPI_MakeEdge(ell).Edge()])); ts.AddWire(circ(60, 12));
  ts.Build(PR());
  parts.loft = { shape: ts.Shape(), schema: 'AP214IS', note: 'a loft: B-spline surfaces' };
}
{
  // a closed B-spline outline extruded 20 (surface of linear extrusion)
  const c = bspline([[0, 0, 0], [30, -5, 0], [45, 15, 0], [25, 35, 0], [0, 30, 0], [-10, 15, 0]], 3, true);
  const f = faceOf(wireOf([bEdge(c)]));
  parts.extrusion = { shape: new oc.BRepPrimAPI_MakePrism(f, new oc.gp_Vec(0, 0, 20), false, true).Shape(), schema: 'AP214IS', note: 'a closed B-spline outline extruded (surface of linear extrusion)' };
}
parts.boss = { shape: fuse(box(0, 0, 0, 80, 50, 10), cylinder([40, 25, 10], [0, 0, 1], 12, 25)), schema: 'AP214IS', note: 'a boss on a plate (a face with a hole in it, a circle on a plane)' };
// the assembly: a plate and a peg placed twice (one at a turn)
const plate = box(0, 0, 0, 100, 40, 10), peg = cylinder([0, 0, 0], [0, 0, 1], 5, 30);
const places = [[25, 20, 10, 0], [75, 20, 10, 30]];

const facts = {};
for (const [name, p] of Object.entries(parts)) {
  const file = path.join(OUT, name + '.step');
  facts[name + '.step'] = { volume: +volume(p.shape).toFixed(4), solids: countSolids(p.shape), instances: countSolids(p.shape), bbox: bbox(p.shape), schema: p.schema, unit: p.unit || 'MM', note: p.note };
  if (check) continue;
  if (fs.existsSync(file)) { console.log('exists, left as it is: ' + file); continue; }
  fs.writeFileSync(file, stepOf(p.shape, { schema: p.schema, unit: p.unit, name }));
}
{
  const file = path.join(OUT, 'assembly.step');
  const vol = volume(plate) + places.length * volume(peg);
  facts['assembly.step'] = { volume: +vol.toFixed(4), solids: 2, instances: 3, bbox: [[0, 0, 0], [100, 40, 40]], schema: 'AP214IS', unit: 'MM', note: 'a plate and a peg placed twice (XCAF components), one turned 30°' };
  if (!check && !fs.existsSync(file)) fs.writeFileSync(file, assemblyStep(plate, peg, places));
}
const factsFile = path.join(OUT, 'facts.json');
const text = JSON.stringify(facts, null, 1) + '\n';
if (check) { const same = fs.existsSync(factsFile) && fs.readFileSync(factsFile, 'utf8') === text; console.log(same ? 'same' : 'DIFFERS'); process.exit(same ? 0 : 1); }
if (!fs.existsSync(factsFile)) fs.writeFileSync(factsFile, text);
console.log(Object.keys(facts).length + ' fixtures in ' + OUT);
