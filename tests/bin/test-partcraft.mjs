#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-partcraft.mjs — PartCraft's DOM-free modules (assets/apps/partcraft/dev): the constrained
 * sketch and its solver, the feature history, real parts built with manifold-3d (volumes, bounding
 * boxes and through-hole counts against values worked out by hand), the file format, and every
 * export read back by a second reader.
 *
 *   node bin/test-partcraft.mjs [--verbose] [--keep] [--browser]
 *
 * Second readers (each check is skipped with a note when its tool is missing):
 *   trimesh + ezdxf    tools/partcraft-test/venv  (python3 -m venv tools/partcraft-test/venv &&
 *                      tools/partcraft-test/venv/bin/pip install trimesh numpy lxml networkx ezdxf)
 *   occt-import-js     tools/partcraft-test/node_modules (cd tools/partcraft-test && npm install) — OpenCascade
 *                      (LGPL) reading our STEP; test-only, never shipped in the app
 *   unzip -t           zip integrity of the 3MF
 * --keep leaves the exported files in tmp/partcraft-test/. --browser also runs tools/partcraft-test/browser.mjs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEV = path.join(REPO, 'public_html/assets/apps/partcraft/dev/');
const VERBOSE = process.argv.includes('--verbose');
const KEEP = process.argv.includes('--keep');
const TMP = path.join(REPO, 'tmp/partcraft-test');
fs.mkdirSync(TMP, { recursive: true });

const V = await import(DEV + 'vec.js');
const S = await import(DEV + 'sketch.js');
const { solveSketch, analyze } = await import(DEV + 'solver.js');
const P = await import(DEV + 'part.js');
const K = await import(DEV + 'kernel.js');
const X = await import(DEV + 'export.js');
const FA = await import(DEV + 'faces.js');
const SV = await import(DEV + 'sketchview.js');
const F = await import(path.join(REPO, 'tools/partcraft-test/fixtures.mjs'));
const { default: Module } = await import(path.join(REPO, 'public_html/assets/vendor/manifold-3d/current/manifold.js'));
const M = await Module();
M.setup();

let pass = 0, fail = 0, skipped = 0;
const ok = (c, m) => { if (c) { pass++; if (VERBOSE) console.log('  ok   ' + m); } else { fail++; console.log('  FAIL ' + m); } };
const skip = (m) => { skipped++; console.log('  skip ' + m); };
const section = (t) => console.log('\n== ' + t);
const near = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;
const rel = (a, b, r = 1e-9) => Math.abs(a - b) <= r * Math.max(1, Math.abs(b));
const throws = (fn, re) => { try { fn(); return false; } catch (e) { return re ? re.test(e.message) : true; } };
const k = F.facetFactor;   // inscribed n-gon area / r²
const PY = path.join(REPO, 'tools/partcraft-test/venv/bin/python');
const HAVE_PY = fs.existsSync(PY);
const py = (code, ...args) => execFileSync(PY, ['-c', code, ...args], { encoding: 'utf8' });
const P2 = (sk, id) => S.pointXY(sk, id);
const dist = (a, b) => Math.hypot(b[0] - a[0], b[1] - a[1]);
const build = (part) => K.regenerate(part, M);
const require = createRequire(path.join(REPO, 'tools/partcraft-test/package.json'));
const scaleLabel = (s) => (s >= 1 ? `${s}:1` : `1:${Math.round(1 / s)}`);

// view cube (docs/apps/viewcube.md): byte-identical copies of ModelCraft's modules, and the Corner indicator setting.
// First, so a clone fails fast. A packed clone of PartCraft alone has no modelcraft/dev: the copy check is skipped there.
section('view cube copies');
{
  const canon = path.join(DEV, '../../modelcraft/dev');
  for (const f of ['viewcube.js', 'viewcube-three.js']) {
    const mine = path.join(DEV, f);
    if (!fs.existsSync(path.join(canon, f))) { skip(`partcraft ${f} vs modelcraft/dev/${f}: ModelCraft is not in this checkout`); continue; }
    ok(fs.existsSync(mine) && fs.readFileSync(mine).equals(fs.readFileSync(path.join(canon, f))), `partcraft ${f} is byte-identical to modelcraft/dev/${f}`);
  }
  const inc = fs.readFileSync(path.join(DEV, 'settings.inc'), 'utf8');
  const EN0 = JSON.parse(fs.readFileSync(path.join(DEV, 'lang/en.json'), 'utf8'));   // its words come from the language file (0.4 G)
  ok(['cube', 'axes', 'none'].every((v) => inc.includes(`value="${v}"`)) && [...inc.matchAll(/Lang::e\('([^']+)'\)/g)].some((m) => EN0[m[1]] === 'Corner indicator'), 'settings.inc offers Corner indicator: View cube | Axis icon | None');
}

// section view (0.4 P13): the plane arithmetic of section.js (the cut and caps themselves: tools/partcraft-test/browser-section.mjs)
section('section view: planes');
{
  const SE = await import(DEV + 'section.js');
  const I18N = await import(DEV + 'i18n.js');
  const EN = JSON.parse(fs.readFileSync(path.join(DEV, 'lang/en.json'), 'utf8'));
  I18N.init({ locale: 'en', strings: EN });
  const box = { min: [-10, 0, 5], max: [30, 40, 25] };
  const r = SE.sectionRange(box, [0, 0, 1]);
  ok(r[0] === 5 && r[1] === 25, `the slider spans the model along the normal: front plane z 5…25 (${r})`);
  const d = Math.SQRT1_2, rd = SE.sectionRange(box, [d, d, 0]);
  ok(near(rd[0], -10 * d) && near(rd[1], 70 * d), `a slanted normal (1, 1, 0)/√2: ${rd.map((v) => v.toFixed(6))} = (−10…70)/√2`);
  ok(Object.entries(SE.SECTION_BASES).every(([k, n]) => near(Math.hypot(...n), 1) && V.BASE_PLANES[k] && near(Math.abs(n[0] * V.BASE_PLANES[k].n[0] + n[1] * V.BASE_PLANES[k].n[1] + n[2] * V.BASE_PLANES[k].n[2]), 1)), 'front / top / right cut along their base planes\' normals');
  // a flat face record as brep.js writes it (type, n outward, o on the face); the cut keeps n·p ≤ c
  const top = { type: 'plane', n: [0, 0, 1], o: [3, 4, 20] };
  const s1 = SE.faceSection(top);
  ok(near(s1.c, 20) && s1.n.join() === '0,0,1', 'a picked top face at z 20: n +Z, c 20 (cut starts flush with it)');
  // placed in an assembly: turned 90° about X (y → z) and moved by (100, 0, 7) — column-major
  const M = [1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 100, 0, 7, 1];
  const s2 = SE.faceSection(top, M);
  ok(near(s2.n[0], 0) && near(s2.n[1], -1) && near(s2.n[2], 0) && near(s2.c, 20), `the same face in a placed copy: n (0, −1, 0), o (103, −20, 11), so c = 20 (${s2.n.map((v) => +v.toFixed(12))}, ${s2.c})`);
  const f1 = SE.flipSection(s1);
  ok(f1.n.join() === '0,0,-1' && f1.c === -20, 'Cut away the other side: the same plane, n and c negated');
  ok(throws(() => SE.faceSection({ type: 'cylinder', axis: [0, 0, 1] }), new RegExp(EN['section.need_flat'])) && throws(() => SE.faceSection({ type: 'plane', n: [0, 0, 0], o: [0, 0, 0] }), new RegExp(EN['section.no_direction'])), 'a curved face or a face with no normal is refused in words');
}

// =========================================================================================
section('vectors and plane frames');
for (const [name, f] of Object.entries(V.BASE_PLANES)) {
  ok(rel(V.dot(V.cross(f.x, f.y), f.n), 1), `${name} plane is right-handed (x × y = n)`);
  const g = V.frameFor(f.n, [3, 3, 3]);
  ok(V.dot(g.x, f.x) > 1 - 1e-12 && V.dot(g.y, f.y) > 1 - 1e-12, `frameFor(${name} normal) gives the ${name} plane's axes`);
}
{
  const R = V.rotationAbout([1, 2, 0], [0, 0, 1], 90);
  const p = V.applyMat(R, [2, 2, 5]);
  ok(near(p[0], 1) && near(p[1], 3) && near(p[2], 5), 'rotation about an off-origin axis');
  const Mi = V.reflection([5, 0, 0], [1, 0, 0]);
  const q = V.applyMat(Mi, [7, 1, 2]);
  ok(near(q[0], 3) && near(q[1], 1) && near(q[2], 2), 'reflection in the plane x = 5');
  const f = V.frameFor([0, 1, 0], [9, 30, -4]);
  ok(near(f.o[1], 30) && near(f.o[0], 0) && near(f.o[2], 0), 'a face frame\'s origin is the world origin projected onto it');
}

// =========================================================================================
section('sketch: rectangle, dimensions, degrees of freedom');
{
  const sk = S.newSketch();
  const r = S.addRect(sk, [3, 4], [40, 30]);
  let s = solveSketch(sk);
  ok(s.ok && s.status === 'under' && s.dof === 4, `rectangle: under defined, 4 degrees of freedom (${s.dof})`);
  const l0 = S.byId(sk, r.lines[0]);
  S.addConstraint(sk, 'distance', [r.lines[0]], 100);
  S.addConstraint(sk, 'distance', [r.lines[1]], 50);
  s = solveSketch(sk);
  ok(s.dof === 2, 'two dimensions → 2 degrees of freedom');
  const before = S.bounds(sk);
  ok(rel(before.x1 - before.x0, 100) && rel(before.y1 - before.y0, 50), 'sizes are met');
  // only the corner on the origin is still free; its points are not determined, nothing is
  ok(!s.determined.has(l0.p1), 'an unanchored corner is not determined (blue)');
  S.addConstraint(sk, 'coincident', [l0.p1, 'O']);
  s = solveSketch(sk);
  ok(s.status === 'full' && s.dof === 0, 'corner on the origin → fully defined');
  ok(sk.entities.every((e) => s.determined.has(e.id)), 'every entity determined (fully defined colour)');
  const p = P2(sk, l0.p1);
  ok(near(p[0], 0, 1e-7) && near(p[1], 0, 1e-7), 'corner sits on the origin');
  // conflicting dimension: nothing moves, the conflict is named
  const snap = JSON.stringify(sk.entities);
  const c90 = S.addConstraint(sk, 'distance', [r.lines[2]], 90);
  s = solveSketch(sk);
  ok(!s.ok && s.status === 'over' && s.conflicts.includes(c90.id), 'a conflicting length is over defined and named');
  ok(JSON.stringify(sk.entities) === snap, 'geometry is left exactly as it was when relations conflict');
  S.removeConstraints(sk, [c90.id]);
  const c100 = S.addConstraint(sk, 'distance', [r.lines[2]]);
  s = solveSketch(sk);
  ok(s.ok && s.status === 'over' && s.redundant.includes(c100.id) && !s.conflicts.length, 'a consistent but implied dimension is reported as not needed');
  S.removeConstraints(sk, [c100.id]);
  ok(solveSketch(sk).status === 'full', 'removing it: fully defined again');
}
{
  // least-norm: changing a free line's length moves both ends equally (the sketch stays where it was)
  const sk = S.newSketch();
  const l = S.addLine(sk, [0, 0], [10, 0]);
  const c = S.addConstraint(sk, 'distance', [l.id], 10);
  c.value = 14;
  solveSketch(sk);
  const a = P2(sk, l.p1), b = P2(sk, l.p2);
  ok(rel(dist(a, b), 14) && near((a[0] + b[0]) / 2, 5, 1e-9) && near(a[1], 0, 1e-9), 'a length change grows both ends equally (least change)');
}

// =========================================================================================
section('sketch: every relation and dimension');
{
  const mk = () => S.newSketch();
  const cross = (u, v) => u[0] * v[1] - u[1] * v[0];
  const dirOf = (sk, id) => { const l = S.byId(sk, id); const a = P2(sk, l.p1), b = P2(sk, l.p2); return [b[0] - a[0], b[1] - a[1]]; };
  const tol = 1e-8;
  let sk, s;
  // coincident point–point, point–line, point–circle
  sk = mk(); const pa = S.addPoint(sk, 1, 2), pb = S.addPoint(sk, 4, 6);
  S.addConstraint(sk, 'coincident', [pa, pb]); s = solveSketch(sk);
  ok(s.ok && dist(P2(sk, pa), P2(sk, pb)) < tol && near(P2(sk, pa)[0], 2.5, 1e-8), 'coincident points meet half way');
  sk = mk(); let L = S.addLine(sk, [0, 0], [10, 0]); let q = S.addPoint(sk, 5, 3);
  S.addConstraint(sk, 'coincident', [q, L.id]); s = solveSketch(sk);
  ok(s.ok && Math.abs(cross(dirOf(sk, L.id), [P2(sk, q)[0] - P2(sk, L.p1)[0], P2(sk, q)[1] - P2(sk, L.p1)[1]])) < tol, 'point on line');
  sk = mk(); let C = S.addCircle(sk, [0, 0], 5); q = S.addPoint(sk, 8, 1);
  S.addConstraint(sk, 'coincident', [q, C.id]); s = solveSketch(sk);
  ok(s.ok && rel(dist(P2(sk, q), P2(sk, C.c)), S.byId(sk, C.id).r, 1e-8), 'point on circle');
  // horizontal / vertical (line and two points)
  sk = mk(); L = S.addLine(sk, [0, 0], [10, 2]); S.addConstraint(sk, 'horizontal', [L.id]); s = solveSketch(sk);
  ok(s.ok && near(dirOf(sk, L.id)[1], 0, tol), 'horizontal line');
  sk = mk(); L = S.addLine(sk, [0, 0], [1, 10]); S.addConstraint(sk, 'vertical', [L.id]); s = solveSketch(sk);
  ok(s.ok && near(dirOf(sk, L.id)[0], 0, tol), 'vertical line');
  sk = mk(); const v1 = S.addPoint(sk, 0, 0), v2 = S.addPoint(sk, 3, 7); S.addConstraint(sk, 'vertical', [v1, v2]); S.addConstraint(sk, 'horizontal', [S.addPoint(sk, 9, 9), v2]); s = solveSketch(sk);
  ok(s.ok && near(P2(sk, v1)[0], P2(sk, v2)[0], tol), 'vertical between two points');
  // parallel, perpendicular, equal, angle
  sk = mk(); const A = S.addLine(sk, [0, 0], [10, 1]), B = S.addLine(sk, [0, 5], [8, 9]);
  S.addConstraint(sk, 'parallel', [A.id, B.id]); s = solveSketch(sk);
  ok(s.ok && Math.abs(cross(dirOf(sk, A.id), dirOf(sk, B.id))) < tol, 'parallel');
  sk = mk(); const A2 = S.addLine(sk, [0, 0], [10, 1]), B2 = S.addLine(sk, [0, 5], [3, 9]);
  S.addConstraint(sk, 'perpendicular', [A2.id, B2.id]); s = solveSketch(sk);
  ok(s.ok && Math.abs(dirOf(sk, A2.id)[0] * dirOf(sk, B2.id)[0] + dirOf(sk, A2.id)[1] * dirOf(sk, B2.id)[1]) < tol, 'perpendicular');
  S.addConstraint(sk, 'equal', [A2.id, B2.id]); s = solveSketch(sk);
  ok(s.ok && rel(Math.hypot(...dirOf(sk, A2.id)), Math.hypot(...dirOf(sk, B2.id)), 1e-9), 'equal lengths');
  sk = mk(); const A3 = S.addLine(sk, [0, 0], [10, 0]), B3 = S.addLine(sk, [0, 0], [10, 4]);
  S.addConstraint(sk, 'horizontal', [A3.id]);
  S.addConstraint(sk, 'angle', [A3.id, B3.id], 30); s = solveSketch(sk);
  const ang = Math.atan2(dirOf(sk, B3.id)[1], dirOf(sk, B3.id)[0]) * 180 / Math.PI;
  ok(s.ok && near(ang, 30, 1e-7), `angle 30° (${ang.toFixed(9)})`);
  // tangent: line–circle, circle–circle outside and inside
  sk = mk(); L = S.addLine(sk, [-10, 3], [10, 3]); C = S.addCircle(sk, [0, 0], 5);
  S.addConstraint(sk, 'tangent', [L.id, C.id]); s = solveSketch(sk);
  { const c = P2(sk, C.c), a = P2(sk, L.p1), d = dirOf(sk, L.id); const dd = Math.abs(cross(d, [c[0] - a[0], c[1] - a[1]])) / Math.hypot(...d); ok(s.ok && rel(dd, S.byId(sk, C.id).r, 1e-8), 'line tangent to circle'); }
  sk = mk(); C = S.addCircle(sk, [0, 0], 5); const C2 = S.addCircle(sk, [12, 0], 4);
  S.addConstraint(sk, 'tangent', [C.id, C2.id]); s = solveSketch(sk);
  ok(s.ok && rel(dist(P2(sk, C.c), P2(sk, C2.c)), S.byId(sk, C.id).r + S.byId(sk, C2.id).r, 1e-8), 'circles tangent outside');
  sk = mk(); C = S.addCircle(sk, [0, 0], 10); const C3 = S.addCircle(sk, [3, 0], 4);
  const tin = S.addConstraint(sk, 'tangent', [C.id, C3.id]); s = solveSketch(sk);
  ok(s.ok && tin.kind === 'int' && rel(dist(P2(sk, C.c), P2(sk, C3.c)), S.byId(sk, C.id).r - S.byId(sk, C3.id).r, 1e-8), 'circles tangent inside');
  // concentric, midpoint, fix
  sk = mk(); C = S.addCircle(sk, [0, 0], 10); const C4 = S.addCircle(sk, [3, 1], 4);
  S.addConstraint(sk, 'concentric', [C.id, C4.id]); s = solveSketch(sk);
  ok(s.ok && dist(P2(sk, C.c), P2(sk, C4.c)) < tol, 'concentric');
  sk = mk(); L = S.addLine(sk, [0, 0], [10, 4]); q = S.addPoint(sk, 1, 1);
  S.addConstraint(sk, 'midpoint', [q, L.id]); s = solveSketch(sk);
  ok(s.ok && dist(P2(sk, q), [(P2(sk, L.p1)[0] + P2(sk, L.p2)[0]) / 2, (P2(sk, L.p1)[1] + P2(sk, L.p2)[1]) / 2]) < tol, 'midpoint');
  sk = mk(); L = S.addLine(sk, [0, 0], [10, 0]); S.addConstraint(sk, 'fix', [L.p1]); const dl = S.addConstraint(sk, 'distance', [L.id], 10);
  dl.value = 20; s = solveSketch(sk);
  ok(s.ok && near(P2(sk, L.p1)[0], 0) && near(P2(sk, L.p1)[1], 0) && rel(dist(P2(sk, L.p1), P2(sk, L.p2)), 20), 'fix keeps a point where it is while a length changes');
  // distances: point–line, parallel lines, horizontal / vertical, radius, diameter
  sk = mk(); L = S.addLine(sk, [0, 0], [10, 0]); S.addConstraint(sk, 'fix', [L.id]); q = S.addPoint(sk, 5, 3);
  S.addConstraint(sk, 'distance', [q, L.id], 7); s = solveSketch(sk);
  ok(s.ok && near(P2(sk, q)[1], 7, 1e-8), 'point-to-line distance keeps its side (y = +7)');
  sk = mk(); const D1 = S.addLine(sk, [0, 0], [10, 0]), D2 = S.addLine(sk, [0, 4], [10, 4]);
  S.addConstraint(sk, 'fix', [D1.id]); S.addConstraint(sk, 'parallel', [D1.id, D2.id]);
  S.addConstraint(sk, 'distance', [D1.id, D2.id], 12); s = solveSketch(sk);
  ok(s.ok && near(P2(sk, D2.p1)[1], 12, 1e-8) && near(P2(sk, D2.p2)[1], 12, 1e-8), 'distance between parallel lines');
  sk = mk(); const h1 = S.addPoint(sk, 0, 0), h2 = S.addPoint(sk, 5, 5);
  S.addConstraint(sk, 'hdistance', [h1, h2], 30); S.addConstraint(sk, 'vdistance', [h1, h2], 12); s = solveSketch(sk);
  ok(s.ok && near(P2(sk, h2)[0] - P2(sk, h1)[0], 30, 1e-8) && near(P2(sk, h2)[1] - P2(sk, h1)[1], 12, 1e-8), 'horizontal and vertical distances');
  sk = mk(); C = S.addCircle(sk, [0, 0], 3); S.addConstraint(sk, 'diameter', [C.id], 25); s = solveSketch(sk);
  ok(s.ok && near(S.byId(sk, C.id).r, 12.5, 1e-8), 'diameter 25 → r 12.5');
  sk = mk(); const ar = S.addArc(sk, [0, 0], [5, 0], [0, 5]); S.addConstraint(sk, 'radius', [ar.id], 9); s = solveSketch(sk);
  ok(s.ok && rel(dist(P2(sk, ar.c), P2(sk, ar.s)), 9, 1e-9) && rel(dist(P2(sk, ar.c), P2(sk, ar.e)), 9, 1e-9), 'arc radius 9 (both ends stay on it)');
  // applicable() offers what fits
  sk = mk(); L = S.addLine(sk, [0, 0], [10, 0]); C = S.addCircle(sk, [0, 5], 2);
  const app = S.applicable(sk, [L.id, C.id]);
  ok(app.includes('tangent') && !app.includes('parallel') && !app.includes('coincident'), 'applicable(line, circle) offers tangent, not parallel');
  ok(throws(() => S.addConstraint(sk, 'parallel', [L.id, C.id]), /does not apply/), 'a relation that does not fit is refused with a message');
  ok(throws(() => S.addConstraint(sk, 'radius', [C.id], 0), /more than zero/), 'radius 0 refused');
}

// =========================================================================================
section('sketch: dragging, fillet, profiles');
{
  const sk = S.newSketch();
  const C = S.addCircle(sk, [0, 0], 10);
  S.addConstraint(sk, 'fix', [C.c]);
  S.addConstraint(sk, 'radius', [C.id], 10);
  const q = S.addPoint(sk, 10, 0);
  S.addConstraint(sk, 'coincident', [q, C.id]);
  let s = solveSketch(sk, { pin: new Map([[q, [20, 20]]]) });
  ok(!s.dragged && rel(dist(P2(sk, q), [0, 0]), 10), 'dragging a point on a fixed circle off it: the drag is refused, it stays on the circle');
  const free = S.addPoint(sk, 30, 30);
  s = solveSketch(sk, { pin: new Map([[free, [33, 34]]]) });
  ok(s.dragged && near(P2(sk, free)[0], 33) && near(P2(sk, free)[1], 34), 'a free point follows the drag');
  ok(s.status === 'under' && s.determined.has(q) === false && s.determined.has(C.id), 'circle determined, point on it still free');
}
{
  const sk = S.newSketch();
  const r = S.addRect(sk, [0, 0], [100, 50]);
  const corner = S.byId(sk, r.lines[0]).p1;
  const before = solveSketch(sk).dof;
  const fr = S.filletCorner(sk, corner, 10);
  const s = solveSketch(sk);
  ok(s.ok && s.dof === before, `fillet keeps the degrees of freedom (${before} → ${s.dof}) — no over-definition`);
  const pr = S.profile(sk, 64);
  // quarter arc tessellated with 16 segments → area of the corner = r² − sector(16 chords)
  const sector = 16 / 2 * Math.sin(Math.PI / 2 / 16) * 100;
  ok(!pr.error && rel(Math.abs(S.loopArea(pr.loops[0])), 5000 - (100 - sector), 1e-9), 'filleted rectangle\'s area = 5000 − (r² − faceted quarter circle)');
  const arc = S.byId(sk, fr.arc);
  const a = S.arcAngles(sk, arc);
  ok(near(a.sweep, Math.PI / 2, 1e-9) && near(a.r, 10, 1e-9), 'the fillet arc is a 90° arc of radius 10');
  ok(throws(() => S.filletCorner(sk, S.byId(sk, r.lines[1]).p2, 60), /too big/), 'a fillet bigger than the lines is refused');
  // the fillet radius is a driving dimension
  sk.constraints.find((c) => c.type === 'radius').value = 15;
  solveSketch(sk);
  ok(near(S.arcAngles(sk, arc).r, 15, 1e-8), 'changing the fillet radius re-solves the corner');
}
{
  const sk = S.newSketch();
  S.addLine(sk, [0, 0], [10, 0]); S.addLine(sk, [10, 0], [10, 10]);
  ok(/open/.test(S.profile(sk).error || ''), 'an open profile is named');
  const sk2 = S.newSketch();
  const r = S.addRect(sk2, [0, 0], [10, 10]); S.addLine(sk2, [10, 10], [20, 20]);
  ok(/open|branch/.test(S.profile(sk2).error || ''), 'a branching profile is refused');
  const sk3 = S.newSketch();
  S.addRect(sk3, [0, 0], [40, 40]); S.addCircle(sk3, [20, 20], 5);
  const pr = S.profile(sk3, 64);
  ok(!pr.error && pr.loops.length === 2, 'rectangle with a circle inside → two loops (outer + hole)');
  ok(SV.parseNumber('25.4') === 25.4 && SV.parseNumber('⌀12') === 12 && SV.parseNumber('R3') === 3 && SV.parseNumber('1e2') === 100 && SV.parseNumber('2+2') === null && SV.parseNumber('') === null, 'typed values: plain numbers (⌀/R prefixes allowed), no expressions');
}
{
  // dimension-tool choice: label position decides aligned / horizontal / vertical
  const sk = S.newSketch();
  const a = S.addPoint(sk, 0, 0), b = S.addPoint(sk, 10, 5);
  ok(SV.pickDimType(sk, [a, b], [5, 20]) === 'hdistance' && SV.pickDimType(sk, [a, b], [20, 2]) === 'vdistance' && SV.pickDimType(sk, [a, b], [6, 2]) === 'distance', 'dimension tool: above → horizontal, beside → vertical, between → aligned');
  const g = SV.dimGeometry(sk, { type: 'distance', refs: [a, b], value: dist([0, 0], [10, 5]) });
  ok(g && g.lines.length === 3 && g.arrows.length === 2, 'an aligned dimension draws two extension lines, a dimension line and two arrowheads');
}

// =========================================================================================
section('sketch files');
{
  const fl = F.flangeSketch();
  const back = S.readSketch(JSON.parse(JSON.stringify(fl.sk)));
  const byId = (a) => JSON.stringify([...a].sort((x, y) => (x.id < y.id ? -1 : 1)).map((o) => Object.fromEntries(Object.entries(o).sort())));
  ok(byId(back.entities) === byId(fl.sk.entities) && byId(back.constraints) === byId(fl.sk.constraints), 'readSketch round-trips the flange sketch');
  const bad = JSON.parse(JSON.stringify(fl.sk));
  bad.entities.push({ id: 'l999', type: 'line', p1: 'p1', p2: 'nope' });
  ok(throws(() => S.readSketch(bad), /bad end/), 'a line to a missing point is refused');
  const bad2 = JSON.parse(JSON.stringify(fl.sk)); bad2.constraints[0].type = 'eval';
  ok(throws(() => S.readSketch(bad2), /unknown relation/), 'an unknown relation is refused');
  const bad3 = JSON.parse(JSON.stringify(fl.sk)); bad3.constraints.find((c) => c.type === 'hdistance').refs = [fl.lines[0], fl.lines[1]];
  ok(throws(() => S.readSketch(bad3), /wrong geometry/), 'a dimension on the wrong kind of geometry is refused');
}

// =========================================================================================
section('the Catalog flange (revolve + hole on a face + circular pattern)');
let flangeRegen = null;
{
  const fl = F.flange();
  const t0 = Date.now();
  const r = build(fl.part);
  flangeRegen = { r, fl };
  const ms = Date.now() - t0;
  ok([...r.results.values()].every((x) => x.status === 'ok'), 'every feature builds');
  ok(r.results.get(fl.ids.profile).solve.status === 'full', 'the profile sketch is fully defined');
  ok(r.results.get(fl.ids.holeSketch).solve.status === 'full', 'the bolt-hole sketch is fully defined');
  const s = r.stats;
  const exp = k(64) * 302160;
  ok(rel(s.volume, exp, 1e-8), `volume = k(64)·302160 = ${exp.toFixed(4)} mm³ (got ${s.volume.toFixed(4)})`);
  ok(Math.abs(s.volume - F.flangeExact()) / F.flangeExact() < 0.002, `and within the 64-gon's 0.16 % of the exact 302160π = ${F.flangeExact().toFixed(2)}`);
  ok(s.genus === 9 && s.bodies === 1, 'one body, 9 through holes (bore + 8 bolt holes)');
  ok(near(s.bbox.min[1], 0, 1e-4) && near(s.bbox.max[1], 80, 1e-4) && near(s.bbox.max[0], 100, 1e-4) && near(s.bbox.min[0], -100, 1e-4), 'bounding box Ø200 × 80 high');
  if (VERBOSE) console.log(`       built in ${ms} ms, ${s.tris} triangles`);
  // the disc's top face, from the mesh: annulus 52…100 minus 8 holes, all 64-gons
  const grp = FA.planarGroups(r.mesh);
  const top = grp.groups.find((g) => g.n[1] > 0.999 && near(g.d, 30, 1e-3));
  const fl2 = FA.faceLoops2D(r.mesh, top);
  const expTop = k(64) * (100 * 100 - 52 * 52) - 8 * k(64) * 49;
  ok(top && fl2.loops.length === 10 && rel(Math.abs(fl2.area), expTop, 1e-5), `disc top face: 10 loops (rim, hub, 8 holes), area ${Math.abs(fl2.area).toFixed(3)} = ${expTop.toFixed(3)}`);
  // finer facets approach the exact volume
  const fine = build(F.flange({ resolution: 256 }).part).stats;
  ok(rel(fine.volume, k(256) * 302160, 1e-8) && Math.abs(fine.volume - F.flangeExact()) / F.flangeExact() < 1.1e-4, `256 segments per turn: ${fine.volume.toFixed(2)} (exact ${F.flangeExact().toFixed(2)})`);
  // change dimensions: the hub top Ø80 → Ø90, disc 30 → 25; the hole sketch follows the face
  const sk = fl.part.features[0].sketch;
  sk.constraints.find((c) => c.id === fl.dims.hubTop).value = 45;
  sk.constraints.find((c) => c.id === fl.dims.disc).value = 25;
  const r2 = build(fl.part);
  const exp2 = k(64) * (Math.PI * 0 + (100 * 100 - 34 * 34) * 25 + 55 / 3 * (52 * 52 + 52 * 45 + 45 * 45) - 34 * 34 * 55 - 8 * 49 * 25);
  ok([...r2.results.values()].every((x) => x.status === 'ok') && rel(r2.stats.volume, exp2, 1e-8), `disc 25, hub top Ø90 (hub now 55 high): volume ${r2.stats.volume.toFixed(3)} = ${exp2.toFixed(3)}`);
  ok(r2.stats.genus === 9, 'bolt holes still go through: the hole sketch followed the disc\'s top face down to 25');
  // a hole count change
  fl.part.features.find((f) => f.id === fl.ids.pattern).count = 6;
  const r3 = build(fl.part);
  ok(r3.stats.genus === 7, 'circular pattern of 6 → 7 through holes');
  // the face reference picked from the mesh is the stable one
  const tri = r.mesh.indices.length / 3;
  let found = null;
  for (let t = 0; t < tri; t++) { if (r.mesh.featIds[r.mesh.triFeature[t]] !== fl.ids.revolve) continue; const q = FA.triNormal(r.mesh.positions, r.mesh.indices, t); if (q.n[1] > 0.999 && near(q.a[1], 30, 1e-4)) { found = q; break; } }
  const ref = found && K.faceRefAt(r, fl.ids.revolve, found.n, found.a);
  ok(ref && ref.kind === 'face' && ref.face === 'side' && ref.entity === fl.lines[2], 'picking the disc\'s top face gives {face: side, line: the profile\'s top edge}');
}

// =========================================================================================
section('extrude, cut, hole, patterns, mirror');
function blockPart(depth = 20) {
  const part = P.newPart('Block');
  const b = F.blockSketch(100, 50);
  const s1 = P.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'top' }, sketch: b.sk });
  const e1 = P.addFeature(part, 'extrude', { sketch: s1.id, depth });
  return { part, s1, e1, b };
}
{
  const { part, s1, e1, b } = blockPart();
  let r = build(part);
  ok(rel(r.stats.volume, 100000) && r.stats.genus === 0, 'block 100 × 50 × 20 = 100000');
  ok(near(r.stats.bbox.max[1], 20, 1e-5) && near(r.stats.bbox.min[2], -50, 1e-5), 'top-plane sketch extrudes up +Y; sketch y runs along −Z');
  e1.end = 'mid'; r = build(part);
  ok(near(r.stats.bbox.min[1], -10, 1e-5) && near(r.stats.bbox.max[1], 10, 1e-5), 'mid-plane: −10 … 10');
  e1.end = 'blind'; e1.reverse = true; r = build(part);
  ok(near(r.stats.bbox.min[1], -20, 1e-5) && near(r.stats.bbox.max[1], 0, 1e-5), 'reverse: 0 … −20');
  e1.reverse = false;
  // a slot cut through all from a sketch on the top face
  const sk = S.newSketch();
  const rr = S.addRect(sk, [10, 10], [30, 20]);
  const s2 = P.addFeature(part, 'sketch', { plane: { kind: 'face', feature: e1.id, face: 'end' }, sketch: sk });
  const cut = P.addFeature(part, 'extrude', { sketch: s2.id, op: 'cut', end: 'through' });
  r = build(part);
  ok(rel(r.stats.volume, 100000 - 20 * 10 * 20) && r.stats.genus === 1, 'cut through all from the top face: −4000, one hole');
  cut.end = 'blind'; cut.depth = 5; r = build(part);
  ok(rel(r.stats.volume, 100000 - 20 * 10 * 5) && r.stats.genus === 0, 'blind cut 5 deep (into the material by default)');
  // a sketch on the pocket floor follows the cut's depth
  const sk3 = S.newSketch(); S.addPoint(sk3, 20, 15);   // inside the pocket
  const s3 = P.addFeature(part, 'sketch', { plane: { kind: 'face', feature: cut.id, face: 'start' }, sketch: sk3 });
  const hole = P.addFeature(part, 'hole', { sketch: s3.id, kind: 'simple', d: 4, through: false, depth: 6 });
  r = build(part);
  ok(r.candidates.get(cut.id).find((c) => c.ref.face === 'start').frame.n[1] > 0.999, 'a cut\'s floor faces up (out of the body)');
  ok(rel(r.stats.volume, 100000 - 1000 - k(64) * 4 * 6), 'blind hole Ø4 × 6 from the pocket floor');
  cut.depth = 8; r = build(part);
  ok(rel(r.stats.volume, 100000 - 1600 - k(64) * 4 * 6), 'deeper pocket: the floor sketch and its hole move down with it');
  hole.kind = 'cbore'; hole.cboreD = 8; hole.cboreDepth = 2; r = build(part);
  ok(rel(r.stats.volume, 100000 - 1600 - k(64) * 4 * 6 - k(64) * (16 - 4) * 2), 'counterbore Ø8 × 2 on the Ø4 hole');
  hole.cboreD = 3; r = build(part);
  ok(r.results.get(hole.id).status === 'error' && /wider/.test(r.results.get(hole.id).message) && r.stats, 'a counterbore narrower than the hole is an error on the hole; the part still builds');
  hole.kind = 'simple'; hole.through = true; r = build(part);
  ok(r.stats.genus === 1, 'hole through all from the pocket floor: one through hole');
  // mirror body about the bottom face doubles it
  const before = r.stats.volume;
  const mb = P.addFeature(part, 'mirror', { seeds: 'body', plane: { kind: 'face', feature: e1.id, face: 'start' } });
  r = build(part);
  ok(r.results.get(mb.id).status === 'ok' && rel(r.stats.volume, 2 * before, 1e-7) && near(r.stats.bbox.min[1], -20, 1e-4), 'mirror body about the bottom face doubles it');
}
{
  // patterns and mirror of one Ø6 through hole in a plain block (holes kept apart so counts are clean)
  const mk = (x, y) => {
    const { part, s1, e1, b } = blockPart();
    const sk = S.newSketch(); S.addPoint(sk, x, y);
    const s2 = P.addFeature(part, 'sketch', { plane: { kind: 'face', feature: e1.id, face: 'end' }, sketch: sk });
    const hole = P.addFeature(part, 'hole', { sketch: s2.id, d: 6, through: true });
    return { part, s1, b, hole };
  };
  const H = k(64) * 9 * 20;
  let t = mk(20, 10);
  let r = build(t.part);
  ok(rel(r.stats.volume, 100000 - H) && r.stats.genus === 1, 'one Ø6 hole through the 20 block');
  const lp = P.addFeature(t.part, 'lpattern', { seeds: [t.hole.id], dir: { kind: 'world', axis: 'x' }, count: 4, spacing: 15 });
  r = build(t.part);
  ok(r.results.get(lp.id).status === 'ok' && r.stats.genus === 4 && rel(r.stats.volume, 100000 - 4 * H), 'linear pattern ×4 at 15 along X: 4 holes');
  lp.dir = { kind: 'line', sketch: t.s1.id, entity: t.b.lines[1] }; lp.count = 3; lp.spacing = 12;
  r = build(t.part);
  ok(r.results.get(lp.id).status === 'ok' && r.stats.genus === 3 && rel(r.stats.volume, 100000 - 3 * H), 'direction from a sketch line (the block\'s side): 3 holes');
  ok(near(r.stats.bbox.min[2], -50, 1e-4), 'pattern stays inside the block');
  t = mk(35, 20);
  const cp = P.addFeature(t.part, 'cpattern', { seeds: [t.hole.id], axis: { kind: 'fixed', o: [50, 0, -25], d: [0, 1, 0] }, count: 6, angle: 360 });
  r = build(t.part);
  ok(r.results.get(cp.id).status === 'ok' && r.stats.genus === 6 && rel(r.stats.volume, 100000 - 6 * H), 'circular pattern ×6 about the block\'s centre: 6 holes');
  cp.angle = 90; cp.count = 3;
  r = build(t.part);
  ok(r.stats.genus === 3, 'circular pattern of 3 spread over 90°');
  t = mk(35, 20);
  const mi = P.addFeature(t.part, 'mirror', { seeds: [t.hole.id], plane: { kind: 'fixed', o: [50, 0, 0], n: [1, 0, 0] } });
  r = build(t.part);
  ok(r.results.get(mi.id).status === 'ok' && r.stats.genus === 2 && rel(r.stats.volume, 100000 - 2 * H), 'mirror of the hole about x = 50: 2 holes');
  mi.plane = { kind: 'base', name: 'right' };
  r = build(t.part);
  ok(r.results.get(mi.id).status === 'ok' && r.stats.genus === 1 && rel(r.stats.volume, 100000 - H), 'mirror about the right plane (x = 0) lands outside the block: no new hole');
  mi.plane = { kind: 'fixed', o: [50, 0, 0], n: [1, 0, 0] };
  const mp = P.addFeature(t.part, 'mirror', { seeds: [mi.id], plane: { kind: 'fixed', o: [60, 0, 0], n: [1, 0, 0] } });
  r = build(t.part);
  ok(r.results.get(mp.id).status === 'ok' && r.stats.genus === 3 && rel(r.stats.volume, 100000 - 3 * H), 'a mirror of a mirror (65 about x = 60 → 55): copied tools can be copied again');
}
{
  // revolve: a ring, partial angles, revolve cut; axis given as a solid line; crossing refused
  const part = P.newPart();
  const sk = S.newSketch();
  const ax = S.addLine(sk, [0, 0], [0, 10], { construction: true });
  S.addRect(sk, [10, 0], [20, 5]);
  const s1 = P.addFeature(part, 'sketch', { sketch: sk });
  const rv = P.addFeature(part, 'revolve', { sketch: s1.id });
  let r = build(part);
  ok(rel(r.stats.volume, k(64) * (400 - 100) * 5), 'ring r 10…20 × 5 revolved = k·(20² − 10²)·5');
  rv.angle = 90; r = build(part);
  const wedge = (m, a) => m / 2 * Math.sin(a * Math.PI / 180 / m);
  ok(rel(r.stats.volume, wedge(64, 90) * 300 * 5), 'revolve 90° (64 wedges over the angle)');
  rv.angle = 360;
  const sk2 = S.newSketch(); S.addLine(sk2, [0, -10], [0, 10], { construction: true }); S.addRect(sk2, [15, 1], [25, 3]);
  const s2 = P.addFeature(part, 'sketch', { sketch: sk2 });
  P.addFeature(part, 'revolve', { sketch: s2.id, op: 'cut' });
  r = build(part);
  ok(rel(r.stats.volume, k(64) * 300 * 5 - k(64) * (400 - 225) * 2) && r.stats.genus === 1, 'revolve cut takes a groove out of the ring (still one ring: genus 1)');
  const sk3 = S.newSketch(); S.addLine(sk3, [0, -10], [0, 10], { construction: true }); S.addRect(sk3, [-5, 6], [5, 8]);
  const s3 = P.addFeature(part, 'sketch', { sketch: sk3 });
  const bad = P.addFeature(part, 'revolve', { sketch: s3.id });
  r = build(part);
  ok(r.results.get(bad.id).status === 'error' && /crosses the axis/.test(r.results.get(bad.id).message) && r.stats, 'a profile across the axis is an error on that feature; the part still builds');
  const sk4 = S.newSketch(); S.addRect(sk4, [30, 0], [40, 4]);
  const s4 = P.addFeature(part, 'sketch', { sketch: sk4 });
  const noAx = P.addFeature(part, 'revolve', { sketch: s4.id });
  r = build(part);
  ok(r.results.get(noAx.id).status === 'error' && /centerline/.test(r.results.get(noAx.id).message), 'no centerline: the error says to draw one');
  noAx.axis = sk4.entities.find((e) => e.type === 'line').id;   // a solid edge of the profile as the axis
  r = build(part);
  ok(r.results.get(noAx.id).status === 'ok', 'a solid profile line can be the axis');
}

// =========================================================================================
section('history: errors, suppress, rollback, reorder, delete, undo');
{
  const { part, s1, e1 } = blockPart();
  const sk = S.newSketch(); S.addLine(sk, [0, 0], [10, 0]); S.addLine(sk, [10, 0], [10, 10]);
  const s2 = P.addFeature(part, 'sketch', { plane: { kind: 'face', feature: e1.id, face: 'end' }, sketch: sk });
  const bad = P.addFeature(part, 'extrude', { sketch: s2.id, op: 'cut', end: 'blind', depth: 3 });
  const lp = P.addFeature(part, 'lpattern', { seeds: [bad.id] });
  let r = build(part);
  ok(r.results.get(bad.id).status === 'error' && /open/.test(r.results.get(bad.id).message), 'an open profile: the cut fails with the reason');
  ok(r.results.get(lp.id).status === 'skipped' && /Extrude2/.test(r.results.get(lp.id).message), 'the pattern of it is skipped, naming Extrude2');
  ok(rel(r.stats.volume, 100000), 'the rest of the part still builds');
  e1.suppressed = true; r = build(part);
  ok(r.results.get(e1.id).status === 'suppressed' && r.results.get(s2.id).status === 'skipped' && r.stats === null, 'suppressing the block skips the sketch on its face');
  delete e1.suppressed;
  part.rollback = 1; r = build(part);
  ok(r.results.get(e1.id).status === 'rolled' && r.stats === null, 'rollback to after Sketch1: nothing built');
  const added = P.addFeature(part, 'extrude', { sketch: s1.id, depth: 5 });
  ok(P.indexOf(part, added.id) === 1 && part.rollback === 2, 'a new feature goes in at the rollback bar');
  part.rollback = null;
  ok(!P.canMove(part, bad.id, 0).ok && /has to come first/.test(P.canMove(part, bad.id, 0).reason), 'a cut cannot move above its sketch');
  ok(P.canMove(part, added.id, 2).ok, 'two independent features can swap');
  P.moveFeature(part, added.id, 2);
  ok(part.features[2].id === added.id, 'moved');
  const h = new P.History();
  h.push(part, 'Delete');
  const names = P.deleteFeatures(part, [e1.id]);
  ok(names.join() === ['Extrude1', 'Extrude3', 'Sketch2', 'Extrude2', 'LPattern1'].filter((n) => names.includes(n)).join() && names.length === 4 && !part.features.some((f) => f.id === lp.id), `deleting Extrude1 deletes what needs it (${names.join(', ')})`);
  const u = h.undo(part);
  ok(u && u.part.features.length === 6, 'undo brings them back');
  const rd = h.redo(u.part);
  ok(rd && rd.part.features.length === 2, 'redo deletes again');
}

// =========================================================================================
section('part files');
{
  const fl = F.flange();
  const json = P.toJSON(fl.part);
  const back = P.readPart(json);
  const r1 = build(fl.part), r2 = build(back);
  ok(rel(r2.stats.volume, r1.stats.volume, 1e-12) && r2.stats.genus === 9, 'save → open → identical part');
  const j = JSON.parse(json);
  ok(j.format === 'partcraft' && j.version === 2, 'format and version stamped');
  const tamper = (fn, re, what) => { const t = JSON.parse(json); fn(t); ok(throws(() => P.readPart(JSON.stringify(t)), re), what); };
  tamper((t) => { t.version = P.VERSION + 1; }, /newer PartCraft/, 'a newer file version is refused, saying so');
  tamper((t) => { t.format = 'other'; }, /not a PartCraft/, 'another format is refused');
  tamper((t) => { t.features[1].type = 'script'; }, /unknown kind/, 'an unknown feature type is refused');
  tamper((t) => { t.features[1].sketch = 'f99'; }, /its sketch is bad/, 'a feature pointing at a missing sketch is refused');
  tamper((t) => { t.features[4].count = 1e6; }, /count is bad/, 'an absurd pattern count is refused');
  tamper((t) => { t.features[2].plane = { kind: 'face', feature: 'f9' }; }, /plane reference is bad/, 'a face on an unknown feature is refused');
  tamper((t) => { t.features[1].angle = 'Infinity'; }, /angle is bad/, 'a non-number is refused');
  ok(throws(() => P.readPart('{nope'), /not JSON/), 'broken JSON is refused');
  const named = JSON.parse(json); named.name = 'A\u0000B<script>'; named.features[0].name = 'x\u0007y';
  const nb = P.readPart(JSON.stringify(named));
  ok(nb.name === 'AB<script>' && nb.features[0].name === 'xy', 'control characters are stripped from names (names reach the page as text only)');
}

// =========================================================================================
section('exports, read back by other programs');
const { r: fr } = flangeRegen;

{
  const stl = X.stlBinary(fr.mesh, 'Flange');
  const n = new DataView(stl.buffer).getUint32(80, true);
  ok(stl.length === 84 + n * 50 && n === fr.stats.tris, 'STL: binary layout, one record per triangle');
  // our own signed-volume read of the STL (Z up)
  const dv = new DataView(stl.buffer);
  let vol = 0;
  for (let t = 0; t < n; t++) {
    const o = 84 + t * 50 + 12;
    const p = [0, 1, 2].map((i) => [0, 1, 2].map((c) => dv.getFloat32(o + i * 12 + c * 4, true)));
    vol += V.dot(p[0], V.cross(p[1], p[2])) / 6;
  }
  ok(rel(vol, fr.stats.volume, 1e-6), 'STL encloses the solid\'s volume (outward winding kept after the Z-up turn)');
  const mf = X.threeMf(fr.mesh, 'Flange');
  const step = X.stepFaceted(fr.mesh, 'Flange', { date: new Date('2026-10-10T00:00:00Z') });
  const dxfS = X.dxfSketch(flangeRegen.fl.part.features[0].sketch);
  const grp = FA.planarGroups(fr.mesh);
  const top = grp.groups.find((g) => g.n[1] > 0.999 && near(g.d, 30, 1e-3));
  const dxfF = X.dxfLoops(FA.faceLoops2D(fr.mesh, top).loops);
  const files = { stl: path.join(TMP, 'flange.stl'), mf: path.join(TMP, 'flange.3mf'), step: path.join(TMP, 'flange.step'), dxfS: path.join(TMP, 'flange-profile.dxf'), dxfF: path.join(TMP, 'flange-face.dxf') };
  fs.writeFileSync(files.stl, stl); fs.writeFileSync(files.mf, mf); fs.writeFileSync(files.step, step.text); fs.writeFileSync(files.dxfS, dxfS.text); fs.writeFileSync(files.dxfF, dxfF.text);
  ok(step.text.startsWith('ISO-10303-21;') && /FILE_SCHEMA\(\('AP242/.test(step.text) && /FACETED_BREP\(/.test(step.text), 'STEP: ISO 10303-21, AP242 schema, a faceted B-rep');
  ok(dxfS.counts.line === 7 && /AC1009/.test(dxfS.text), 'DXF of the profile: R12, 7 lines (6 profile + the centerline)');
  // unzip -t
  const uz = spawnSync('unzip', ['-t', files.mf], { encoding: 'utf8' });
  if (uz.error) skip('unzip not installed: 3MF zip not checked');
  else ok(uz.status === 0 && /No errors detected/.test(uz.stdout), '3MF zip passes unzip -t');
  if (HAVE_PY) {
    const out = py(`
import sys, json, trimesh, ezdxf
m = trimesh.load(sys.argv[1]); g = list(trimesh.load(sys.argv[2]).geometry.values())[0]
d = ezdxf.readfile(sys.argv[3]); f = ezdxf.readfile(sys.argv[4])
msp = d.modelspace()
lines = [e for e in msp if e.dxftype() == 'LINE']
cons = [e for e in lines if e.dxf.layer == 'CONSTRUCTION']
xs = sorted(round(v, 6) for e in lines if e.dxf.layer == 'PROFILE' for v in (e.dxf.start.x, e.dxf.end.x))
polys = [e for e in f.modelspace() if e.dxftype() == 'POLYLINE']
def area(p):
    pts = [(v.dxf.location.x, v.dxf.location.y) for v in p.vertices]
    return sum(pts[i-1][0]*pts[i][1] - pts[i][0]*pts[i-1][1] for i in range(len(pts))) / 2
print(json.dumps({'stl': [float(m.volume), bool(m.is_watertight), int(m.euler_number), m.bounds.tolist()],
  'mf': [float(g.volume), bool(g.is_watertight)], 'dxf': [len(lines), len(cons), min(xs), max(xs), d.dxfversion],
  'face': [len(polys), all(p.is_closed for p in polys), sum(abs(area(p)) for p in polys), max(abs(area(p)) for p in polys)]}))
`, files.stl, files.mf, files.dxfS, files.dxfF);
    const j = JSON.parse(out.trim().split('\n').pop());
    ok(rel(j.stl[0], fr.stats.volume, 1e-6) && j.stl[1] && j.stl[2] === 2 - 2 * 9, `trimesh reads the STL: watertight, volume ${j.stl[0].toFixed(3)}, Euler number −16 (genus 9)`);
    ok(near(j.stl[3][0][2], 0, 1e-4) && near(j.stl[3][1][2], 80, 1e-4), 'STL is Z up (the 80 mm height is along Z)');
    ok(rel(j.mf[0], fr.stats.volume, 1e-6) && j.mf[1], `trimesh reads the 3MF: watertight, volume ${j.mf[0].toFixed(3)}`);
    ok(j.dxf[0] === 7 && j.dxf[1] === 1 && near(j.dxf[2], 34, 1e-6) && near(j.dxf[3], 100, 1e-6) && j.dxf[4] === 'AC1009', 'ezdxf reads the profile DXF: 6 profile lines from x 34 (bore) … 100, the centerline on CONSTRUCTION');
    const expTop = k(64) * (100 * 100 - 52 * 52) - 8 * k(64) * 49;
    ok(j.face[0] === 10 && j.face[1] && rel(j.face[3], k(64) * 10000, 1e-5) && rel(j.face[3] - (j.face[2] - j.face[3]), expTop, 1e-5), 'ezdxf reads the face DXF: 10 closed outlines; rim minus hub and holes = the face area');
  } else skip('tools/partcraft-test/venv missing: trimesh/ezdxf checks skipped');
  let occt = null;
  try { occt = await require('occt-import-js')(); } catch { skip('occt-import-js missing (cd tools/partcraft-test && npm install): STEP not read back'); }
  if (occt) {
    const res = occt.ReadStepFile(new Uint8Array(fs.readFileSync(files.step)), null);
    let vol = 0, faces = 0, tris = 0;
    for (const m of res.meshes || []) {
      const p = m.attributes.position.array, I = m.index.array;
      for (let t = 0; t < I.length; t += 3) vol += V.dot([p[I[t] * 3], p[I[t] * 3 + 1], p[I[t] * 3 + 2]], V.cross([p[I[t + 1] * 3], p[I[t + 1] * 3 + 1], p[I[t + 1] * 3 + 2]], [p[I[t + 2] * 3], p[I[t + 2] * 3 + 1], p[I[t + 2] * 3 + 2]])) / 6;
      faces += m.brep_faces?.length || 0; tris += I.length / 3;
    }
    ok(res.success && res.meshes.length === 1, 'OpenCascade (occt-import-js) reads the STEP: one solid');
    ok(rel(vol, fr.stats.volume, 1e-6), `OpenCascade's volume of it = ours (${vol.toFixed(3)})`);
    ok(faces === step.counts.faces, `every face comes through (${faces} faces, ${tris} triangles)`);
    // a block with a pocket: its flat faces arrive merged (not as triangles)
    const { part } = blockPart();
    const sk = S.newSketch(); S.addRect(sk, [10, 10], [30, 20]);
    const s2 = P.addFeature(part, 'sketch', { plane: { kind: 'face', feature: 'f2', face: 'end' }, sketch: sk });
    P.addFeature(part, 'extrude', { sketch: s2.id, op: 'cut', end: 'blind', depth: 5 });
    const rb = build(part);
    const st2 = X.stepFaceted(rb.mesh, 'Block');
    const res2 = occt.ReadStepFile(new TextEncoder().encode(st2.text), null);
    ok(res2.success && st2.counts.faces === 11 && (res2.meshes[0].brep_faces?.length) === 11, `block with a pocket → 11 merged flat faces in STEP (6 + 5 pocket faces; got ${st2.counts.faces})`);
    // 0.4 K.6: the same faceted solid as AP214 (automotive_design), for programs that read only that
    const s214 = X.stepFaceted(fr.mesh, 'Flange', { schema: 'AP214', date: new Date('2026-10-10T00:00:00Z') });
    ok(/FILE_SCHEMA\(\('AUTOMOTIVE_DESIGN \{ 1 0 10303 214 1 1 1 1 \}'\)\);/.test(s214.text) && /'automotive_design',2000/.test(s214.text) && !/AP242|ap242/.test(s214.text) && s214.counts.faces === step.counts.faces, 'STEP AP214: automotive_design schema and protocol, no AP242 left, the same faces');
    const r214 = occt.ReadStepFile(new TextEncoder().encode(s214.text), null);
    let v214 = 0;
    for (const m of r214.meshes || []) { const p = m.attributes.position.array, I = m.index.array; for (let t = 0; t < I.length; t += 3) v214 += V.dot([p[I[t] * 3], p[I[t] * 3 + 1], p[I[t] * 3 + 2]], V.cross([p[I[t + 1] * 3], p[I[t + 1] * 3 + 1], p[I[t + 1] * 3 + 2]], [p[I[t + 2] * 3], p[I[t + 2] * 3 + 1], p[I[t + 2] * 3 + 2]])) / 6; }
    ok(r214.success && r214.meshes.length === 1 && rel(v214, fr.stats.volume, 1e-6) && (r214.meshes[0].brep_faces?.length) === step.counts.faces, `OpenCascade reads the AP214 file too: one solid, volume ${v214.toFixed(3)} = ours, ${step.counts.faces} faces`);
  }
}

// =========================================================================================
section('drawings (PDF)');
{
  const DR = await import(DEV + 'drawing.js');
  // a 100 × 50 × 20 block with one Ø6 hole through: overall sizes and the hole's hidden lines
  const { part, e1 } = blockPart();
  const sk = S.newSketch(); S.addPoint(sk, 30, 20);
  const s2 = P.addFeature(part, 'sketch', { plane: { kind: 'face', feature: e1.id, face: 'end' }, sketch: sk });
  P.addFeature(part, 'hole', { sketch: s2.id, d: 6, through: true });
  const rb = build(part);
  const sh = DR.makeDrawing(rb.mesh, { name: 'Block', date: new Date('2026-10-10T12:00:00Z') });
  ok(sh.scale === 1 || sh.scale === 2, `ISO 5455 scale picked to fit A3 (${DR.scaleLabel(sh.scale)})`);
  ok(rel(sh.views.front.w, 100 * sh.scale, 1e-6) && rel(sh.views.front.h, 20 * sh.scale, 1e-6) && rel(sh.views.top.h, 50 * sh.scale, 1e-6) && rel(sh.views.right.w, 50 * sh.scale, 1e-6), 'views are 100 × 20 (front), 100 × 50 (top), 50 × 20 (right) at scale');
  ok(sh.views.front.hidden >= 2 && sh.views.right.hidden >= 2 && sh.views.top.hidden === 0, `the through hole shows as hidden lines in front and right, not in the top view (${sh.views.front.hidden}, ${sh.views.right.hidden}, ${sh.views.top.hidden})`);
  ok(sh.views.front.visible === 4, `front view of a block: 4 visible edges after merging (${sh.views.front.visible})`);
  ok(sh.views.top.visible > 4, 'top view: the outline plus the hole\'s facets');
  const pdf = await DR.toPdf(sh);
  const fpdf = path.join(TMP, 'block-drawing.pdf');
  fs.writeFileSync(fpdf, pdf.bytes);
  const info = spawnSync('pdfinfo', [fpdf], { encoding: 'utf8' });
  if (info.error) skip('poppler (pdfinfo/pdftotext) not installed: drawing PDF not read back');
  else {
    ok(info.status === 0 && /Pages:\s+1/.test(info.stdout) && /Page size:\s+1190\.55 x 841\.89 pts/.test(info.stdout), 'pdfinfo: one A3 landscape page');
    const txt = spawnSync('pdftotext', ['-layout', fpdf, '-'], { encoding: 'utf8' }).stdout;
    ok(/\b100\b/.test(txt) && /\b50\b/.test(txt) && /\b20\b/.test(txt) && /Block/.test(txt) && /Third-angle/.test(txt) && /2026-10-10/.test(txt), 'pdftotext finds the sizes 100, 50, 20, the name, the projection note and the date');
  }
  const fsheet = DR.makeDrawing(flangeRegen.r.mesh, { name: 'Flange' });
  ok(fsheet.views.front.hidden > 0 && fsheet.views.iso && fsheet.isoScale, 'flange drawing: hidden bore and bolt holes in the front view; an isometric view fits');

  // ---- 0.4 K.3: section views from the mesh kernel (manifold trimByPlane; no OpenCascade)
  section('drawings: section views on the mesh kernel (0.4 K.3)');
  {
    const shoelace = (segs) => segs.reduce((s, g) => s + (g[0] * g[3] - g[2] * g[1]) / 2, 0);
    // the block (top plane): x 0…100, y 0…20, z −50…0; its Ø6 hole runs along −Y at x 30, z −20
    const holeArea = k(64) * 9;
    const st = DR.meshViews(rb.mesh, { M, section: { of: 'top', at: 10 } }).views.section;
    ok(st && st.of === 'top' && st.at === 10 && st.hidden.length === 0 && st.visible.length > 0, 'a top section at y 10: visible lines only, like the exact one');
    ok(st && rel(shoelace(st.cut), 5000 - holeArea, 1e-6), `its cut outline encloses 100 × 50 − the hole's 64-gon = ${(5000 - holeArea).toFixed(4)} mm² (got ${st && shoelace(st.cut).toFixed(4)}; outline counter-clockwise, hole clockwise)`);
    ok(st && st.trace.view === 'front' && near(st.trace.d[0] ** 2 + st.trace.d[1] ** 2, 1, 1e-12) && near(st.box.u1 - st.box.u0, 100, 1e-4) && near(st.box.v1 - st.box.v0, 50, 1e-4), 'it is traced on the front view; its box is the block\'s 100 × 50');
    const sf = DR.meshViews(rb.mesh, { M, section: { of: 'front', at: -20 } }).views.section;
    ok(sf && rel(shoelace(sf.cut), 100 * 20 - 6 * 20, 1e-6) && sf.trace.view === 'top', `a front section through the hole's axis (z −20): 100 × 20 less the 6 × 20 slot = 1880 mm² (got ${sf && shoelace(sf.cut).toFixed(4)}), traced on the top view`);
    const sr = DR.meshViews(rb.mesh, { M, section: { of: 'right', at: 30 } }).views.section;
    ok(sr && rel(shoelace(sr.cut), 50 * 20 - 6 * 20, 1e-6) && sr.trace.view === 'front', `a right section through it (x 30): 50 × 20 less the slot = 880 mm² (got ${sr && shoelace(sr.cut).toFixed(4)}), traced on the front view`);
    const sd = DR.meshViews(rb.mesh, { M, section: { of: 'front' } }).views.section;
    ok(sd && near(sd.at, -25, 1e-4) && rel(shoelace(sd.cut), 100 * 20, 1e-6), `no position given: through the middle (front at z ${sd && sd.at.toFixed(4)}), past the hole: 2000 mm²`);
    ok(!DR.meshViews(rb.mesh, { M, section: { of: 'front', at: -60 } }).views.section, 'a plane behind the whole part leaves nothing: no section view');
    const ss = DR.composeSheet(DR.meshViews(rb.mesh, { M, section: { of: 'top', at: 10 } }), { name: 'Block', drawing: { section: { of: 'top', at: 10 } } });
    ok(ss.views.section && ss.texts.some((q) => /Section A-A/.test(q.text)) && ss.strokes.some((x) => x.width === 0.18 && !x.dash && x.segs.length > 20) && ss.strokes.some((x) => x.dash && x.dash[0] === 8 && x.segs.length), 'the sheet places "Section A-A" with its hatching and the chain line of the cutting plane');
    const fsec = DR.meshViews(flangeRegen.r.mesh, { M, section: { of: 'front' } }).views.section;
    ok(fsec && fsec.cut.length >= 12 && shoelace(fsec.cut) > 0, `the flange cut through its axis: a hatched outline of ${fsec && fsec.cut.length} segments`);
  }
  {
    // 0.4 K.2: no OpenCascade in the import map → the exact kernel is off, never started
    const EC = await import(DEV + 'exact-client.js');
    const ek = new EC.ExactKernel({ occtUrl: EC.exactKernelUrl() });
    let refused = false; try { await ek.start(); } catch { refused = true; }
    ok(EC.exactKernelUrl() === null && EC.noExactKernel() && ek.state === 'off' && refused && !ek.worker, 'no OpenCascade mapped: exactKernelUrl() is null, the kernel is "off" and start() refuses without a worker');
    ok(/^Fillet: not built yet\. It needs an exact kernel/.test(EC.exactWhy('Fillet', 'loading')), 'exactWhy says "not built yet" when there is no exact kernel at all');
    const man = JSON.parse(fs.readFileSync(path.join(DEV, 'manifest.json'), 'utf8'));
    ok(!Object.keys(man.imports).some((k) => /opencascade|replicad/i.test(k + man.imports[k])), 'the build\'s manifest imports no OpenCascade (LGPL): it stays out of the app and the browser edition');
  }

  // ---- 0.4 P14: sheet sizes, title block, revision block, material
  section('drawings: sheet sizes, title block, revisions, material (0.4 P14)');
  // ISO 216 A-series and ANSI Y14.1 (inches × 25.4), landscape
  const SIZES = { a4: [297, 210], a3: [420, 297], a2: [594, 420], a1: [841, 594], a0: [1189, 841], 'ansi-a': [11, 8.5], 'ansi-b': [17, 11], 'ansi-c': [22, 17], 'ansi-d': [34, 22], 'ansi-e': [44, 34] };
  ok(Object.keys(DR.PAPERS).join() === P.SHEET_KEYS.join() && Object.entries(SIZES).every(([k, [w, h]]) => (k.startsWith('ansi') ? near(DR.PAPERS[k][0], w * 25.4, 1e-9) && near(DR.PAPERS[k][1], h * 25.4, 1e-9) : DR.PAPERS[k][0] === w && DR.PAPERS[k][1] === h)), 'ten sheets: A4–A0 (ISO 216) and ANSI A–E (11 × 8.5 … 44 × 34 in), the file keys match');
  const inside = (s) => s.strokes.every((st) => st.segs.every((g) => g.every((v, i) => v >= -1e-9 && v <= (i % 2 ? s.h : s.w) + 1e-9))) && s.texts.every((q) => q.x >= 0 && q.x <= s.w && q.y >= 0 && q.y <= s.h);
  const viewsInBorder = (s) => Object.values(s.views).every((v) => v.x >= 10 && v.y >= 10 && v.x + v.w <= s.w - 10 && v.y + v.h <= s.h - 10);
  const data = DR.meshViews(rb.mesh);
  const per = {};
  for (const k of P.SHEET_KEYS) {
    const s = DR.composeSheet(data, { name: 'Block', drawing: { sheet: k, revisions: [{ rev: 'A', desc: 'First issue', date: '2026-10-12', by: 'JD' }] } });
    per[k] = s;
    ok(s.paper === k && near(s.w, DR.PAPERS[k][0]) && near(s.h, DR.PAPERS[k][1]) && inside(s) && viewsInBorder(s), `${DR.sheetLabel(k)}: every line and word on the sheet, the views inside the border, scale ${DR.scaleLabel(s.scale)}`);
  }
  ok(per.a0.scale >= per.a3.scale && per.a3.scale >= per.a4.scale && per.a4.scale < per.a0.scale, `bigger sheets take a bigger ISO scale for the same part (A4 ${DR.scaleLabel(per.a4.scale)}, A3 ${DR.scaleLabel(per.a3.scale)}, A0 ${DR.scaleLabel(per.a0.scale)})`);
  const title = { title: 'Bracket, left hand', number: 'BR-1001', company: 'Acme Fabrication', drawnBy: 'J. Doe', checkedBy: 'R. Roe', approvedBy: 'K. Lee', date: '2026-10-01', tolerance: 'ISO 2768-m', finish: 'Ra 3.2 all over' };
  const revs = [{ rev: 'A', desc: 'First issue', date: '2026-10-01', by: 'JD' }, { rev: 'B', desc: 'Hole moved 5 mm left', date: '2026-10-12', by: 'RR' }];
  const tb = DR.composeSheet(data, { name: 'Block', drawing: { sheet: 'a2', title, revisions: revs }, material: 'Aluminium 6061-T6', date: new Date('2026-10-12T00:00:00Z') });
  const words = tb.texts.map((q) => q.text);
  ok(['Bracket, left hand', 'BR-1001', 'Acme Fabrication', 'J. Doe', 'R. Roe', 'K. Lee', '2026-10-01', 'Aluminium 6061-T6', 'A2', 'General tolerance: ISO 2768-m', 'Finish: Ra 3.2 all over', 'Hole moved 5 mm left'].every((w) => words.some((x) => x.includes(w))), 'the title block carries every field typed, the material and the size; tolerance and finish above it; the revision rows');
  ok(words.filter((x) => x === 'B').length >= 1 && tb.revisions === 2 && Object.keys(tb.titleCells).length === 11, 'Rev. shows the latest revision (B) when none is typed; 11 labelled cells; 2 revision rows');
  const plain = DR.composeSheet(data, { name: 'Block', date: new Date('2026-10-12T00:00:00Z') });
  ok(plain.paper === 'a3' && plain.texts.some((q) => q.text === 'Block' && q.bold) && plain.texts.some((q) => q.text === '2026-10-12') && !plain.revisions, 'nothing typed: A3, the part\'s name as the title, today as the date, no revision block');
  const long = DR.composeSheet(data, { name: 'x'.repeat(200), drawing: { sheet: 'a4' } });
  ok(long.texts.some((q) => /^x+…$/.test(q.text)) && inside(long), 'a title too long for its cell is cut with "…"');
  ok(DR.nextRevision([]) === 'A' && DR.nextRevision([{ rev: 'C' }]) === 'D' && DR.nextRevision([{ rev: 'Z' }]) === 'AA' && DR.nextRevision([{ rev: 'AZ' }]) === 'BA' && DR.nextRevision([{ rev: '3' }]) === '4', 'next revision: A, C → D, Z → AA, AZ → BA, 3 → 4');
  // the part file: drawing fields and the material, version 3, tamperings refused
  const pp = blockPart().part;
  pp.drawing = { section: null, detail: null, notes: [], sheet: 'ansi-b', title, revisions: revs };
  pp.material = { name: 'Aluminium 6061-T6', density: 2.7 };
  const j = P.toJSON(pp), back = P.readPart(j);
  ok(JSON.parse(j).version === 3 && back.drawing.sheet === 'ansi-b' && Object.keys(title).length === Object.keys(back.drawing.title).length && Object.entries(title).every(([k, v]) => back.drawing.title[k] === v) && JSON.stringify(back.drawing.revisions) === JSON.stringify(revs) && back.material.name === 'Aluminium 6061-T6' && back.material.density === 2.7, 'saved and read back: sheet, title block, revisions and material (file version 3)');
  const p2 = blockPart().part; p2.drawing = { section: null, detail: null, notes: [], sheet: 'a3' };
  ok(P.fileVersion(p2) === 2 && P.readPart(P.toJSON(p2)).drawing.sheet === undefined, 'A3 is the default: not written, the file stays version 2');
  const tamper = (fn, what) => { const tj = JSON.parse(j); fn(tj); ok(throws(() => P.readPart(JSON.stringify(tj))), `a tampered file is refused (${what})`); };
  tamper((tj) => { tj.drawing.sheet = 'b5'; }, 'unknown sheet size');
  tamper((tj) => { tj.drawing.title = ['x']; }, 'title block not an object');
  tamper((tj) => { tj.drawing.title.number = 42; }, 'a title field that is not text');
  tamper((tj) => { tj.drawing.title.date = '12/10/2026'; }, 'a date that is not year-month-day');
  tamper((tj) => { tj.drawing.revisions = Array.from({ length: 21 }, () => ({ rev: 'A' })); }, 'more than 20 revisions');
  tamper((tj) => { tj.drawing.revisions[0].by = { x: 1 }; }, 'a revision field that is not text');
  tamper((tj) => { tj.material = { name: 'Lead', density: 99 }; }, 'a density out of range');
  const tj = JSON.parse(j); tj.drawing.title.company = 'Acme\u0007 ' + 'y'.repeat(100);
  ok(P.readPart(JSON.stringify(tj)).drawing.title.company.length === P.TITLE_FIELDS.company && !/\u0007/.test(P.readPart(JSON.stringify(tj)).drawing.title.company), 'title text is cleaned (control characters out) and cut at its length');
  const pdf2 = await DR.toPdf(tb);
  const f2 = path.join(TMP, 'title-block.pdf');
  fs.writeFileSync(f2, pdf2.bytes);
  if (!info.error) {
    const i2 = spawnSync('pdfinfo', [f2], { encoding: 'utf8' }).stdout, t2 = spawnSync('pdftotext', ['-layout', f2, '-'], { encoding: 'utf8' }).stdout;
    ok(/Page size:\s+1683\.78 x 1190\.55 pts/.test(i2) && ['BR-1001', 'Acme Fabrication', 'Aluminium 6061-T6', 'Hole moved 5 mm left', 'Description', 'General tolerance'].every((w) => t2.includes(w)), 'pdfinfo: an A2 page (1683.78 × 1190.55 pt); pdftotext finds the title block and the revision block');
  }
}

// =========================================================================================
section('assemblies: two flanges face to face');
{
  const A = await import(DEV + 'assembly.js');
  const fl = F.flange();
  const asm = A.newAssembly('Flange joint');
  const i1 = A.insertPart(asm, fl.part);
  const i2 = A.insertPart(asm, fl.part, { pid: i1.part, place: V.translation([300, 0, 0]) });
  ok(Object.keys(asm.parts).length === 1 && asm.instances.length === 2, 'one part, two instances');
  const builds = new Map([[i1.part, build(asm.parts[i1.part].part)]]);
  // the disc's bottom face (the profile's bottom line, square to the axis) on each
  const bottom = { kind: 'face', feature: fl.ids.revolve, face: 'side', entity: fl.lines[0] };
  let { world, problems } = A.placeAll(asm, builds);
  ok(problems.length === 1 && problems[0].free && near(world.get(i2.id)[12], 300), 'before any joint the second flange stays where it was put (and says so)');
  const j = A.addJoint(asm, 'revolute', { inst: i1.id, plane: bottom }, { inst: i2.id, plane: bottom });
  ({ world, problems } = A.placeAll(asm, builds));
  ok(problems.length === 0, 'revolute joint places it');
  const W = world.get(i2.id);
  const hubTop = V.applyMat(W, [0, 80, 0]), discTop = V.applyMat(W, [100, 30, 0]);
  ok(near(hubTop[1], -80, 1e-9) && near(discTop[1], -30, 1e-9) && near(hubTop[0], 0, 1e-9), 'the mating flange sits face to face below: hub down to y −80');
  let clash = A.interference(asm, builds, world, M);
  ok(clash.length === 0, 'faces touching: no interference');
  const kk = k(64);
  j.offset = -2;
  ({ world } = A.placeAll(asm, builds));
  clash = A.interference(asm, builds, world, M);
  ok(clash.length === 1 && rel(clash[0].volume, 2 * kk * (8844 - 8 * 49), 1e-6), `pushed 2 into each other, holes lined up: overlap = 2·k·(100² − 34² − 8·7²) = ${(2 * kk * 8452).toFixed(3)} (${clash[0]?.volume.toFixed(3)})`);
  j.angle = 22.5;
  ({ world } = A.placeAll(asm, builds));
  clash = A.interference(asm, builds, world, M);
  ok(clash.length === 1 && rel(clash[0].volume, 2 * kk * (8844 - 16 * 49), 1e-6), `turned 22.5° the holes miss each other: overlap = 2·k·(8844 − 16·49) (${clash[0]?.volume.toFixed(3)})`);
  j.offset = 0;
  const sweep = A.motionCheck(asm, builds, M, j.id, 0, 90, 6);
  ok(sweep.length === 7 && sweep.every((s) => s.pairs.length === 0) && j.angle === 22.5, 'motion check: turning 0…90° in 7 steps, no interference; the joint is left as it was');
  j.type = 'slider'; j.offset = 5;
  ({ world } = A.placeAll(asm, builds));
  ok(near(V.applyMat(world.get(i2.id), [100, 0, 0])[1], -5, 1e-9), 'slider: offset 5 moves it 5 along the joint axis');
  // a third flange on a hole axis, joined to the second: a chain
  const i3 = A.insertPart(asm, fl.part, { pid: i1.part });
  const top = { kind: 'face', feature: fl.ids.revolve, face: 'side', entity: fl.lines[2] };   // disc top face
  A.addJoint(asm, 'rigid', { inst: i2.id, plane: top, axis: { feature: fl.ids.hole, index: 0 } }, { inst: i3.id, plane: bottom });
  ({ world, problems } = A.placeAll(asm, builds));
  const c3 = V.applyMat(world.get(i3.id), [0, 0, 0]);
  const hole2 = V.applyMat(world.get(i2.id), [75, 30, 0]);
  ok(problems.length === 0 && near(c3[0], hole2[0], 1e-6) && near(c3[2], hole2[2], 1e-6) && near(c3[1], hole2[1], 1e-6), 'a joint centred on a hole axis: the third flange\'s centre lands on the second\'s hole');
  // a loop is checked, not solved
  A.addJoint(asm, 'rigid', { inst: i1.id, plane: bottom }, { inst: i3.id, plane: bottom });
  ({ problems } = A.placeAll(asm, builds));
  ok(problems.some((p) => /loop/.test(p.message)), 'a joint closing a loop is reported with how far off it is');
  const back = A.readAssembly(A.toJSON(asm));
  ok(back.instances.length === 3 && back.joints.length === 3 && Object.keys(back.parts).length === 1, 'assembly file round trip');
  const t = JSON.parse(A.toJSON(asm)); t.joints[0].b.inst = 'i999';
  ok(throws(() => A.readAssembly(JSON.stringify(t)), /missing part/), 'a joint to a missing instance is refused');
  const t2 = JSON.parse(A.toJSON(asm)); t2.version = 9;
  ok(throws(() => A.readAssembly(JSON.stringify(t2)), /newer PartCraft/), 'a newer assembly version is refused');
  ok(throws(() => A.addJoint(asm, 'revolute', { inst: i1.id, plane: bottom }, { inst: i1.id, plane: top }), /two different parts/), 'a part cannot be joined to itself');
}

// =========================================================================================
section('clipboard: copy, paste, duplicate (sketch geometry, features, assembly parts)');
{
  const C = await import(DEV + 'clipboard.js');
  const A = await import(DEV + 'assembly.js');
  // a 100 × 50 rectangle tied to the origin, fully defined, and a loose circle
  const b = F.blockSketch(100, 50);
  const sk = b.sk;
  solveSketch(sk);
  const circ = S.addCircle(sk, [150, 20], 8);
  const rectIds = [...b.lines];
  const nCons = sk.constraints.length;
  const clip = C.copySketch(sk, rectIds);
  const inside = sk.constraints.filter((c) => c.refs.every((r) => clip.sketch.entities.some((e) => e.id === r)));
  ok(clip.sketch.entities.length === 12 && clip.curves === 4 && clip.points === 0, `copying 4 lines brings their 8 end points (${clip.sketch.entities.length} entities)`);
  ok(clip.sketch.constraints.length === inside.length && clip.sketch.constraints.length === nCons - 1 && clip.sketch.constraints.some((c) => c.type === 'distance' && c.value === 100), `relations inside the copy come along (${clip.sketch.constraints.length}, incl. the 100 and 50 dimensions)`);
  ok(clip.dropped === 1 && !clip.sketch.constraints.some((c) => c.refs.includes('O')), 'the coincident to the origin (outside the copy) is dropped and counted');
  ok(near(clip.anchor[0], 50, 1e-6) && near(clip.anchor[1], 25, 1e-6), 'the copy is held by its middle (50, 25)');
  ok(C.copySketch(sk, ['O']) === null && C.copySketch(sk, [sk.constraints[0].id]) === null, 'copying only the origin or a relation copies nothing');
  // paste moved by (200, 100)
  const before = S.clone(sk);
  const made = C.pasteSketch(sk, clip, [200, 100]);
  const ids = new Set();
  const unique = [...sk.entities, ...sk.constraints].every((x) => !ids.has(x.id) && ids.add(x.id));
  ok(made.ids.length === 12 && made.constraints.length === clip.sketch.constraints.length && unique, 'paste: 12 new entities and their relations, every id new');
  ok(made.ids.every((id) => !before.entities.some((e) => e.id === id)), 'pasted ids do not reuse the originals');
  const P0 = (id) => S.pointXY(sk, id);
  const origPts = before.entities.filter((e) => e.type === 'point' && clip.sketch.entities.some((c) => c.id === e.id));
  const newPts = sk.entities.filter((e) => e.type === 'point' && made.ids.includes(e.id));
  ok(newPts.length === 4 * 2 && origPts.every((o, i) => near(newPts[i].x, o.x + 200, 1e-9) && near(newPts[i].y, o.y + 100, 1e-9)), 'pasted points sit 200, 100 from the originals');
  const r1 = solveSketch(sk);
  ok(r1.conflicts.length === 0 && sk.constraints.length === nCons + made.constraints.length, 'the sketch solves with the pasted relations (no conflicts)');
  const newLine = sk.entities.find((e) => e.type === 'line' && made.ids.includes(e.id));
  const pl = [P0(newLine.p1), P0(newLine.p2)];
  ok(near(dist(pl[0], pl[1]), 100, 1e-6) || near(dist(pl[0], pl[1]), 50, 1e-6), 'the pasted rectangle keeps its driving sizes');
  // the copy is under defined only by its position: 2 more degrees of freedom than the original rectangle
  const an = analyze(sk);
  ok(an.dof === 2 + 3, `after the paste: 2 degrees of freedom (the copy can slide) + 3 of the loose circle = ${an.dof}`);
  // fix and label positions move with the paste
  const sk2 = S.newSketch();
  const pt = S.addPoint(sk2, 10, 20);
  S.addConstraint(sk2, 'fix', [pt]);
  const ln = S.addLine(sk2, [0, 0], [30, 0]);
  const dimc = S.addConstraint(sk2, 'distance', [ln.id], 30); dimc.at = [15, -10];
  const c2 = C.copySketch(sk2, [pt, ln.id]);
  const m2 = C.pasteSketch(sk2, c2, [5, 7]);
  const fx = sk2.constraints.find((c) => c.type === 'fix' && m2.constraints.includes(c.id));
  const dm = sk2.constraints.find((c) => c.type === 'distance' && m2.constraints.includes(c.id));
  ok(fx && near(fx.value[0], 15) && near(fx.value[1], 27) && dm && near(dm.at[0], 20) && near(dm.at[1], -3), 'a pasted fix holds the new position; a dimension label moves with it');
  ok(solveSketch(sk2).conflicts.length === 0, 'fixed copy solves in place');
  // untrusted: what comes back from localStorage
  const back = C.readClip(JSON.stringify(clip));
  ok(back.kind === 'sketch' && back.sketch.entities.length === 12 && back.dropped === 1, 'a stored clip reads back');
  const bad = (mut, re, m) => { const j = JSON.parse(JSON.stringify(clip)); mut(j); ok(throws(() => C.readClip(JSON.stringify(j)), re), m); };
  bad((j) => { j.sketch.constraints[0].refs = ['p999', 'p998']; }, /wrong geometry|relation/, 'tampered: a relation to geometry not in the clip is refused');
  bad((j) => { j.sketch.entities[0].x = 'x'; }, /bad position/, 'tampered: a point without a number is refused');
  bad((j) => { j.sketch.entities.find((e) => e.type === 'line').p1 = 'O'; }, /bad end/, 'tampered: a line ending on the origin is refused');
  bad((j) => { j.sketch.constraints.push({ id: 'k900', type: 'coincident', refs: [j.sketch.entities[0].id, 'O'] }); }, /origin/, 'tampered: a relation to the origin is refused');
  bad((j) => { j.sketch.entities[1].id = j.sketch.entities[0].id; }, /repeated id/, 'tampered: a repeated id is refused');
  bad((j) => { j.format = 'evil'; }, /not hold PartCraft/, 'tampered: another format is refused');
  bad((j) => { j.kind = 'script'; }, /does not paste/, 'tampered: an unknown kind is refused');
  bad((j) => { j.anchor = [0]; }, /position/, 'tampered: a bad anchor is refused');
  ok(throws(() => C.readClip('{not json'), /not hold PartCraft/), 'tampered: broken JSON is refused');

  // features: copy a sketch-based feature (with its sketch) into this part and into another
  const fl = F.flange();
  ok(throws(() => C.copyFeature(fl.part, fl.ids.pattern), /cannot be copied/), 'a circular pattern cannot be copied (it hangs on picked geometry); the reason says so');
  const hc = C.copyFeature(fl.part, fl.ids.hole);
  ok(hc.features.length === 2 && hc.features[0].type === 'sketch' && hc.features[1].type === 'hole', 'copying a hole brings its sketch');
  const hcBack = C.readClip(JSON.stringify(hc));
  ok(hcBack.features[0].plane.kind === 'face' && hcBack.features[0].plane.feature === fl.ids.revolve, 'the copied sketch keeps the face it sits on');
  const hist = new P.History();
  const v0 = build(fl.part).stats.volume;
  hist.push(fl.part, 'Paste');
  const n0 = fl.part.features.length;
  const pr = C.pasteFeatures(fl.part, hcBack);
  ok(pr.features.length === 2 && pr.features[1].sketch === pr.features[0].id && !pr.note && fl.part.features.length === n0 + 2, 'paste into the same part: a new sketch on the same face and a new hole using it');
  ok(pr.features.every((g) => !hc.features.some((h) => h.id === g.id)) && new Set(fl.part.features.map((g) => g.name)).size === fl.part.features.length, 'new ids and names (Sketch3, Hole2)');
  const rp = build(fl.part);
  ok(rp.results.get(pr.features[1].id).status === 'ok' && rel(rp.stats.volume, v0, 1e-9), 'the pasted hole builds (it drills the same place as the first, so the volume is unchanged)');
  const u = hist.undo(fl.part);
  ok(u.part.features.length === n0 && u.label === 'Paste', 'one undo step takes the paste back');
  // into a new part: the face is not there, so the copy sits on the front plane
  const other = P.newPart('Other');
  const bp = F.blockSketch(100, 50);
  const s1 = P.addFeature(other, 'sketch', { plane: { kind: 'base', name: 'front' }, sketch: bp.sk });
  const e1 = P.addFeature(other, 'extrude', { sketch: s1.id, depth: 20 });
  const ec = C.readClip(JSON.stringify(C.copyFeature(other, e1.id)));
  const fresh = P.newPart('Fresh');
  C.pasteFeatures(fresh, ec);
  ok(rel(build(fresh).stats.volume, 100000), 'an extrude pasted into an empty part builds the same 100 × 50 × 20 block');
  const pr2 = C.pasteFeatures(P.newPart('Empty'), hcBack);
  ok(pr2.features[0].plane.kind === 'base' && /front plane/.test(pr2.note), 'a sketch whose face is not in the target part lands on the front plane, and the note says so');
  // duplicate a sketch in the history
  const sc = C.copyFeature(other, s1.id);
  const dup = C.pasteFeatures(other, sc);
  ok(dup.features.length === 1 && dup.features[0].type === 'sketch' && dup.features[0].sketch.entities.length === bp.sk.entities.length, 'duplicating a sketch makes a sketch with the same geometry');
  const bf = (mut, re, m) => { const j = JSON.parse(JSON.stringify(hc)); mut(j); ok(throws(() => C.readClip(JSON.stringify(j)), re), m); };
  bf((j) => { j.features[1].sketch = 'f77'; }, /bad/, 'tampered features: a hole pointing at another sketch is refused');
  bf((j) => { j.features[1].d = -3; }, /bad/, 'tampered features: a negative hole diameter is refused');
  bf((j) => { j.features[0].plane = { kind: 'face', feature: 'f1', face: 'named', name: '<script>' }; }, /plane reference is bad/, 'tampered features: a bad face name is refused');
  bf((j) => { j.features.push(j.features[1]); }, /bad/, 'tampered features: three features are refused');

  // assembly: duplicate a part instance (same part, new place), undo
  const asm = A.newAssembly('Pair');
  const i1 = A.insertPart(asm, fl.part);
  const ah = new P.History();
  const ic = C.readClip(JSON.stringify(C.copyInstance(asm, i1.id)));
  ah.push(asm, 'Duplicate');
  const place = V.matMul(V.translation([250, 0, 0]), ic.place);
  const i2 = C.pasteInstance(asm, ic, place);
  ok(asm.instances.length === 2 && Object.keys(asm.parts).length === 1 && i2.part === i1.part && i2.id !== i1.id, 'duplicate: a second instance of the same part (no second copy of the part)');
  const builds = new Map([[i1.part, build(asm.parts[i1.part].part)]]);
  const { world } = A.placeAll(asm, builds);
  ok(near(world.get(i2.id)[12], 250) && near(world.get(i1.id)[12], 0), 'it stands 250 to the side; the original stays put');
  const inPlace = C.pasteInstance(asm, ic, ic.place);
  ok(inPlace.place.every((v, i) => v === ic.place[i]) && asm.instances.length === 3, 'paste in place: same placement');
  const au = ah.undo(asm);
  ok(A.readAssembly(au.part).instances.length === 1, 'undo takes the duplicate back (one step)');
  const asm2 = A.newAssembly('Other');
  A.insertPart(asm2, other);
  const i3 = C.pasteInstance(asm2, ic, ic.place);
  ok(Object.keys(asm2.parts).length === 2 && asm2.parts[i3.part].name === 'Flange', 'pasting into another assembly brings the part along');
  const bi = (mut, re, m) => { const j = JSON.parse(JSON.stringify(ic)); mut(j); ok(throws(() => C.readClip(JSON.stringify(j)), re), m); };
  bi((j) => { j.place = j.place.slice(0, 15); }, /position/, 'tampered part: a 15-number placement is refused');
  bi((j) => { j.place[12] = Infinity; }, /position/, 'tampered part: a non-finite placement is refused');
  bi((j) => { j.part.features[1].sketch = 'f99'; }, /bad/, 'tampered part: a broken part inside is refused like a bad file');
  bi((j) => { j.part.version = 99; }, /newer PartCraft/, 'tampered part: a newer part version is refused');
}

section('exact kernel (OpenCascade): load');
const B = await import(DEV + 'brep.js');
const BD = await import(DEV + 'brep-draw.js');
const DRW = await import(DEV + 'drawing.js');
const G = await import(DEV + 'gdt.js');
const OCCT_DIR = path.join(REPO, 'public_html/assets/vendor/replicad-opencascadejs/current/');
const wasmBytes = fs.statSync(path.join(OCCT_DIR, 'replicad_single.wasm')).size;
const tLoad = performance.now();
const { default: occtInit } = await import(path.join(OCCT_DIR, 'replicad_single.js'));
const oc = await occtInit({ print: () => {}, printErr: () => {} });
const loadMs = Math.round(performance.now() - tLoad);
ok(typeof oc.BRepPrimAPI_MakePrism === 'function' && typeof oc.STEPControl_Writer === 'function' && typeof oc.HLRBRep_Algo === 'function', `OpenCascade loads in Node (${(wasmBytes / 1e6).toFixed(1)} MB wasm, ${loadMs} ms)`);
ok(fs.existsSync(path.join(OCCT_DIR, 'LICENSE')) && fs.existsSync(path.join(OCCT_DIR, 'OCCT_LGPL_EXCEPTION.txt')) && /LGPL/.test(fs.readFileSync(path.join(OCCT_DIR, 'SOURCE.txt'), 'utf8')), 'its licence, the OCCT exception and SOURCE.txt sit next to it');
const xb = (part, opts) => B.regenerateBrep(part, oc, opts);
const allOk = (r) => [...r.results.values()].every((x) => x.status === 'ok');
const PI = Math.PI;

section('exact kernel: the Catalog flange, exact');
let exactFlange = null;
{
  const fl = F.flange();
  const t0 = performance.now();
  const r = xb(fl.part);
  const ms = Math.round(performance.now() - t0);
  exactFlange = { fl, r };
  ok(allOk(r) && r.exact, `every feature builds (${ms} ms)`);
  ok(rel(r.stats.volume, 302160 * PI, 1e-9), `volume = 302160π = ${(302160 * PI).toFixed(6)} mm³ to 1e-9 (got ${r.stats.volume.toFixed(6)})`);
  ok(r.stats.genus === 9 && r.stats.bodies === 1, 'one body, 9 through holes');
  ok(near(r.stats.bbox.min[1], 0, 1e-7) && near(r.stats.bbox.max[1], 80, 1e-7) && near(r.stats.bbox.max[0], 100, 1e-7) && near(r.stats.bbox.min[2], -100, 1e-7), 'exact bounding box: Ø200 × 80');
  const types = {}; for (const f of r.faces) types[f.type] = (types[f.type] || 0) + 1;
  ok(r.faces.length === 14 && types.plane === 3 && types.cylinder === 10 && types.cone === 1, `14 true faces: 3 planes, 10 cylinders (rim, bore, 8 holes), 1 cone (the hub) (got ${JSON.stringify(types)})`);
  const holeWalls = r.faces.filter((f) => /^f\d+\.wall:/.test(f.name));
  ok(holeWalls.length === 8 && holeWalls.every((f) => near(f.r, 7, 1e-9)) && new Set(holeWalls.map((f) => f.name)).size === 8, 'the 8 hole walls are cylinders r 7, each named by the hole and its pattern copy (…@pattern#i)');
  const top = r.faces.find((f) => f.name === `${fl.ids.revolve}.side:${fl.lines[2]}`);
  // area of the disc top: π(100² − 52²) − 8·π·7²
  ok(top && top.type === 'plane' && rel(top.area, PI * (10000 - 2704) - 8 * PI * 49, 1e-9) && near(top.o[1], 30, 1e-9) && top.n[1] > 0.999999, 'the disc\'s top face: a plane at y 30, named by the revolve and its profile line, area π(100² − 52²) − 8·49π exactly');
  const sk = fl.part.features[0].sketch;
  // disc 30 → 40 (hub shorter): V(t) = π[100²·t + (80 − t)/3·(52² + 52·40 + 40²) − 34²·80] − 8·49π·t
  sk.constraints.find((c) => c.id === fl.dims.disc).value = 40;
  const r2 = xb(fl.part);
  const V40 = PI * (10000 * 40 + 40 / 3 * (2704 + 2080 + 1600) - 1156 * 80) - 8 * 49 * PI * 40;
  ok(allOk(r2) && rel(r2.stats.volume, V40, 1e-9) && r2.stats.genus === 9, `disc 30 → 40: volume ${r2.stats.volume.toFixed(4)} = ${V40.toFixed(4)}; the hole sketch followed the named face up to 40`);
  const hs = r2.frames.get(fl.ids.holeSketch);
  ok(hs && near(hs.o[1], 40, 1e-9), 'the bolt-hole sketch plane is at y 40 now');
  sk.constraints.find((c) => c.id === fl.dims.disc).value = 30;
  // an old (version 1) file opens and builds exactly
  const v1 = JSON.parse(P.toJSON(fl.part)); v1.version = 1;
  const back = P.readPart(JSON.stringify(v1));
  ok(rel(xb(back).stats.volume, 302160 * PI, 1e-9), 'a version 1 .partcraft.json opens and builds exactly');
  // the mesh it hands the view and STL is watertight (welded along OCCT's shared edge points)
  const m = r.mesh;
  const ek = new Map();
  for (let t = 0; t < m.indices.length / 3; t++) for (let q = 0; q < 3; q++) { const a = m.indices[t * 3 + q], b = m.indices[t * 3 + (q + 1) % 3]; const key = a < b ? a + ',' + b : b + ',' + a; ek.set(key, (ek.get(key) || 0) + 1); }
  ok([...ek.values()].every((c) => c === 2), `its triangle mesh is closed: every edge shared by exactly two triangles (${m.indices.length / 3} triangles)`);
  ok(m.triFace.length === m.indices.length / 3 && Math.max(...m.triFace) === r.faces.length - 1 && Math.min(...m.triFace) === 0, 'every triangle knows its B-rep face');
  let mv = 0; const Pp = m.positions, I = m.indices;
  for (let t = 0; t < I.length; t += 3) { const p = (i) => [Pp[I[i] * 3], Pp[I[i] * 3 + 1], Pp[I[i] * 3 + 2]]; mv += V.dot(p(t), V.cross(p(t + 1), p(t + 2))) / 6; }
  ok(Math.abs(mv - r.stats.volume) / r.stats.volume < 2e-3, `the mesh volume is within 0.2 % of the exact one (${mv.toFixed(2)})`);
}

section('exact kernel: extrude, cut, hole, patterns, mirror, revolve');
function blockPartX(depth = 20, w = 100, h = 50) {
  const part = P.newPart('Block');
  const b = F.blockSketch(w, h);
  const s1 = P.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'top' }, sketch: b.sk });
  const e1 = P.addFeature(part, 'extrude', { sketch: s1.id, depth });
  return { part, s1, e1, b };
}
{
  const { part, e1 } = blockPartX();
  ok(rel(xb(part).stats.volume, 100000, 1e-10), 'block 100 × 50 × 20 = 100000 (to 1e-10)');
  const sk = S.newSketch(); S.addCircle(sk, [30, 12], 8);
  const s2 = P.addFeature(part, 'sketch', { plane: { kind: 'face', feature: e1.id, face: 'end' }, sketch: sk });
  const cut = P.addFeature(part, 'extrude', { sketch: s2.id, op: 'cut', end: 'through' });
  let r = xb(part);
  ok(allOk(r) && rel(r.stats.volume, 100000 - PI * 64 * 20, 1e-9) && r.stats.genus === 1, 'a Ø16 cut through all: 100000 − 64π·20, one through hole');
  ok(r.faces.some((f) => f.name === `${cut.id}.side:${sk.entities.find((e) => e.type === 'circle').id}` && f.type === 'cylinder' && near(f.r, 8, 1e-12)), 'the cut\'s wall is a true cylinder r 8, named by the cut and the sketch circle');
  const lp = P.addFeature(part, 'lpattern', { seeds: [cut.id], dir: { kind: 'world', axis: 'x' }, count: 3, spacing: 25 });
  r = xb(part);
  ok(allOk(r) && rel(r.stats.volume, 100000 - 3 * PI * 64 * 20, 1e-9) && r.stats.genus === 3, 'linear pattern ×3: 100000 − 3·64π·20');
  // the holes sit at z −12 (sketch y 12 on the top face); mirrored in the plane z = −25 they land at z −38
  P.addFeature(part, 'mirror', { seeds: [lp.id], plane: { kind: 'fixed', o: [0, 0, -25], n: [0, 0, 1] } });
  r = xb(part);
  ok(allOk(r) && rel(r.stats.volume, 100000 - 5 * PI * 64 * 20, 1e-9) && r.stats.genus === 5, 'mirror of the pattern\'s two copies in z = −25: two more holes (the seed itself is not a copy)');
  // counterbored hole, blind
  const q = blockPartX();
  const hk = S.newSketch(); S.addPoint(hk, 50, 25);
  const hsk = P.addFeature(q.part, 'sketch', { plane: { kind: 'face', feature: q.e1.id, face: 'end' }, sketch: hk });
  P.addFeature(q.part, 'hole', { sketch: hsk.id, kind: 'cbore', d: 6, through: false, depth: 15, cboreD: 11, cboreDepth: 6 });
  r = xb(q.part);
  ok(allOk(r) && rel(r.stats.volume, 100000 - PI * (9 * 9 + 30.25 * 6), 1e-9), `counterbore Ø11 × 6 over a Ø6 × 15 blind hole: 100000 − π(3²·9 + 5.5²·6) (got ${r.stats.volume.toFixed(4)})`);
  ok(['wall', 'floor', 'cbore', 'cfloor'].every((kd) => r.faces.some((f) => f.name && f.name.includes(`.${kd}:`))), 'hole faces named wall / floor / cbore / cfloor');
  // revolve 90°: a quarter ring, r 10…20, 5 high
  const rp = P.newPart('Ring');
  const rk = S.newSketch(); S.addLine(rk, [0, 0], [0, 10], { construction: true }); S.addRect(rk, [10, 0], [20, 5]);
  const rs = P.addFeature(rp, 'sketch', { sketch: rk });
  P.addFeature(rp, 'revolve', { sketch: rs.id, angle: 90 });
  r = xb(rp);
  ok(allOk(r) && rel(r.stats.volume, PI * (400 - 100) * 5 / 4, 1e-9) && r.faces.filter((f) => /\.(start|end)$/.test(f.name)).length === 2, '90° revolve: a quarter ring π(20² − 10²)·5/4 with start and end faces');
}

section('exact kernel: fillets, chamfers, shells (and edges that survive edits)');
{
  const { part, e1, b } = blockPartX();
  let r = xb(part);
  const vert = r.edges.filter((e) => e.faces.every((n) => n.includes('.side:')));
  ok(vert.length === 4 && vert.every((e) => e.type === 'line' && near(e.len, 20, 1e-9)), 'the block\'s 4 vertical edges, each named by the two side faces it joins');
  const fil = P.addFeature(part, 'fillet', { edges: vert.map(B.edgeRef), r: 5 });
  r = xb(part);
  const Vf = (w) => w * 50 * 20 - 4 * (25 - 25 * PI / 4) * 20;
  ok(allOk(r) && rel(r.stats.volume, Vf(100), 1e-9), `4 vertical edges rounded r 5: ${Vf(100).toFixed(6)} exactly`);
  const blends = r.faces.filter((f) => f.name?.startsWith(fil.id + '.blend:'));
  ok(blends.length === 4 && blends.every((f) => f.type === 'cylinder' && near(f.r, 5, 1e-9)), 'four blend faces: true cylinders r 5');
  // upstream edit: the block grows to 120 wide — the fillet still finds its edges
  b.sk.constraints.find((c) => c.id === b.dw).value = 120;
  r = xb(part);
  ok(allOk(r) && rel(r.stats.volume, Vf(120), 1e-9), 'block widened 100 → 120: the fillet follows its edges (refs by face names, not indices)');
  b.sk.constraints.find((c) => c.id === b.dw).value = 100;
  // a too-big radius fails with a plain message and the rest still builds
  part.features.find((f) => f.id === fil.id).r = 30;
  r = xb(part);
  if (VERBOSE) console.log('       r 30:', JSON.stringify(r.results.get(fil.id)), r.stats?.volume);
  ok(r.results.get(fil.id).status === 'error' && /does not fit|could not/.test(r.results.get(fil.id).message) && rel(r.stats.volume, 100000, 1e-10), 'r 30 on a 50-wide block: the fillet fails with a message; the block stays');
  part.features.find((f) => f.id === fil.id).r = 5;
  // shell, open at the bottom (the extrude's start cap), 2 thick inward
  const sh = P.addFeature(part, 'shell', { faces: [{ name: e1.id + '.start' }], t: 2 });
  r = xb(part);
  const inner = (96 * 46 - 4 * (9 - 9 * PI / 4)) * 18;
  ok(allOk(r) && rel(r.stats.volume, Vf(100) - inner, 1e-9), `shell 2 inward, bottom open: ${Vf(100).toFixed(3)} − (96·46 − 4(3² − 9π/4))·18 = ${(Vf(100) - inner).toFixed(4)}`);
  ok(r.faces.filter((f) => f.name?.endsWith('~' + sh.id)).length === 9, 'the shell names its 9 inner walls after the faces they offset (…~shell)');
  // chamfer the top outline (end cap × sides and blends) after the shell
  const topEdges = r.edges.filter((e) => e.faces.includes(e1.id + '.end') && !e.faces.some((n) => n.includes('~')));
  const ch = P.addFeature(part, 'chamfer', { edges: topEdges.map(B.edgeRef), d: 1 });
  r = xb(part);
  ok(allOk(r) && r.results.get(ch.id).count === 8 && r.faces.filter((f) => f.name?.startsWith(ch.id + '.bevel:')).length === 8, 'chamfer d 1 on the 8 outer top edges (4 straight, 4 round): 8 bevel faces');
  // the whole chain survives the block growing again
  b.sk.constraints.find((c) => c.id === b.dw).value = 130;
  r = xb(part);
  ok(allOk(r), 'block 100 → 130 with fillet → shell → chamfer after it: everything rebuilds');
  // chamfer volume on a plain box: abh − (a+b)d² + 4d³/3
  const c2 = blockPartX();
  const rr = xb(c2.part);
  P.addFeature(c2.part, 'chamfer', { edges: rr.edges.filter((e) => e.faces.includes(c2.e1.id + '.end')).map(B.edgeRef), d: 2 });
  const r3 = xb(c2.part);
  ok(allOk(r3) && rel(r3.stats.volume, 100000 - 150 * 4 + 4 * 8 / 3, 1e-9), 'chamfer 2 on a box\'s 4 top edges: abh − (a+b)d² + 4d³/3 exactly');
  // a fillet whose edge is gone says so
  const g = P.newPart('x');
  const gs = P.addFeature(g, 'sketch', { plane: { kind: 'base', name: 'top' }, sketch: F.blockSketch(10, 10).sk });
  P.addFeature(g, 'extrude', { sketch: gs.id, depth: 5 });
  const gf = P.addFeature(g, 'fillet', { edges: [{ faces: [gs.id.replace('f', 'f') + '.side:zz', 'f2.end'], at: [0, 0, 0] }], r: 1 });
  const gr = xb(g);
  ok(gr.results.get(gf.id).status === 'error' && /is gone/.test(gr.results.get(gf.id).message), 'an edge reference whose faces are gone fails, naming them (never moved to another edge)');
  // file round trip of the new features
  const back = P.readPart(P.toJSON(part));
  ok(back.features.filter((f) => ['fillet', 'chamfer', 'shell'].includes(f.type)).length === 3 && allOk(xb(back)), 'fillet, chamfer and shell survive save → open');
  const t = JSON.parse(P.toJSON(part)); t.features.find((f) => f.type === 'fillet').edges[0].faces = ['<script>', 'x'];
  ok(throws(() => P.readPart(JSON.stringify(t)), /edge reference is bad/), 'a tampered edge reference is refused');
  // the mesh kernel says what it cannot do
  const mk = build(back);
  // since 0.4 K.4 the mesh kernel builds fillets on straight edges between flat faces, and refuses other edges in words
  const mkf = mk.results.get(back.features.find((f) => f.type === 'fillet').id);
  ok(mkf.status === 'ok' || (mkf.status === 'error' && /straight edges|exact kernel/.test(mkf.message)), `the mesh kernel builds the fillet or says why not (${mkf.status}${mkf.message ? ': ' + mkf.message : ''})`);
}

section('exact kernel: STEP out and in, read back by other OpenCascade builds');
{
  const { fl, r } = exactFlange;
  const st = B.exportStep(fl.part, oc).text;
  const st214 = B.exportStep(fl.part, oc, { schema: 'AP214' }).text;
  const fstep = path.join(TMP, 'flange-exact.step');
  fs.writeFileSync(fstep, st);
  const c = (re, t = st) => (t.match(re) || []).length;
  ok(/FILE_SCHEMA\(\(\s*'AP242_MANAGED_MODEL_BASED_3D_ENGINEERING/.test(st) && /FILE_SCHEMA\(\(\s*'AUTOMOTIVE_DESIGN/.test(st214), 'AP242 and AP214 schemas written');
  ok(c(/ADVANCED_FACE\(/g) === 14 && c(/CYLINDRICAL_SURFACE\(/g) === 10 && c(/CONICAL_SURFACE\(/g) === 1 && c(/MANIFOLD_SOLID_BREP\(/g) === 1 && !/FACETED_BREP/.test(st), 'true B-rep: 14 advanced faces, 10 cylindrical + 1 conical surface, one manifold solid (no facets)');
  ok(/SI_UNIT\(\.MILLI\.,\.METRE\.\)/.test(st), 'units: millimetres');
  const info = B.stepInfo(oc, st);
  ok(info.solids === 1 && info.faces === 14 && rel(info.volume, 302160 * PI, 1e-9) && near(info.bbox.max[2], 80, 1e-6) && near(info.bbox.min[2], 0, 1e-6), 'our own reader: one solid, 14 faces, 302160π, Z up (80 along Z)');
  // second reader 1: occt-import-js (OCCT 7.x, another wasm build) — meshes faces
  let occt2 = null;
  try { occt2 = await require('occt-import-js')(); } catch { skip('occt-import-js missing: exact STEP not read back by it'); }
  if (occt2) {
    const res = occt2.ReadStepFile(new TextEncoder().encode(st), null);
    let vol = 0;
    for (const m of res.meshes || []) { const p = m.attributes.position.array, I = m.index.array; for (let t = 0; t < I.length; t += 3) vol += V.dot([p[I[t] * 3], p[I[t] * 3 + 1], p[I[t] * 3 + 2]], V.cross([p[I[t + 1] * 3], p[I[t + 1] * 3 + 1], p[I[t + 1] * 3 + 2]], [p[I[t + 2] * 3], p[I[t + 2] * 3 + 1], p[I[t + 2] * 3 + 2]])) / 6; }
    ok(res.success && res.meshes.length === 1 && res.meshes[0].brep_faces.length === 14 && Math.abs(vol - 302160 * PI) / (302160 * PI) < 2e-3, `occt-import-js reads it: one solid, 14 B-rep faces, tessellated volume ${vol.toFixed(1)} ≈ 302160π`);
  }
  // second reader 2: native OCCT 7.9 (cadquery-ocp in the test venv): validity, exact volume, surface types
  const hasOcp = HAVE_PY && spawnSync(PY, ['-c', 'import OCP'], { encoding: 'utf8' }).status === 0;
  if (!hasOcp) skip('cadquery-ocp missing (tools/partcraft-test/venv/bin/pip install cadquery-ocp): native STEP read skipped');
  else {
    const out = py(`
import sys, json
from OCP.STEPControl import STEPControl_Reader
from OCP.BRepCheck import BRepCheck_Analyzer
from OCP.GProp import GProp_GProps
from OCP.BRepGProp import BRepGProp
from OCP.TopExp import TopExp_Explorer
from OCP.TopAbs import TopAbs_FACE, TopAbs_SOLID
from OCP.BRepAdaptor import BRepAdaptor_Surface
from OCP.TopoDS import TopoDS
from importlib.metadata import version
r = STEPControl_Reader(); st = r.ReadFile(sys.argv[1]); r.TransferRoots(); s = r.OneShape()
g = GProp_GProps(); BRepGProp.VolumeProperties_s(s, g)
types = {}
e = TopExp_Explorer(s, TopAbs_FACE)
while e.More():
    t = str(BRepAdaptor_Surface(TopoDS.Face_s(e.Current())).GetType()).split('.')[-1]; types[t] = types.get(t, 0) + 1; e.Next()
n = 0; e = TopExp_Explorer(s, TopAbs_SOLID)
while e.More(): n += 1; e.Next()
print(json.dumps({'valid': BRepCheck_Analyzer(s).IsValid(), 'volume': g.Mass(), 'types': types, 'solids': n, 'ver': version('cadquery-ocp')}))
`, fstep);
    const j = JSON.parse(out.trim().split('\n').pop());
    ok(j.valid && j.solids === 1 && rel(j.volume, 302160 * PI, 1e-9) && j.types.GeomAbs_Cylinder === 10 && j.types.GeomAbs_Cone === 1 && j.types.GeomAbs_Plane === 3, `native OpenCascade (cadquery-ocp ${j.ver}) reads it: valid solid, volume ${j.volume.toFixed(6)} = 302160π, 10 cylinders + 1 cone + 3 planes`);
  }
  // STEP in: the exported flange as a base feature, then a sketch on one of its flat faces and a cut
  const ip = P.newPart('Imported');
  const imp = P.addFeature(ip, 'import', { file: 'flange.step', step: st, up: 'z' });
  let ri = xb(ip);
  ok(allOk(ri) && rel(ri.stats.volume, 302160 * PI, 1e-9) && near(ri.stats.bbox.max[1], 80, 1e-6), 'import: the STEP solid comes back Y up with the same exact volume');
  const topI = ri.faces.find((f) => f.type === 'plane' && near(f.o[1], 30, 1e-6) && f.n[1] > 0.99);
  const ref = B.refForName(topI.name);
  const ik = S.newSketch(); S.addCircle(ik, [0, 90], 3);   // r 90: between the bolt circle (75 ± 7) and the rim
  const isk = P.addFeature(ip, 'sketch', { plane: ref, sketch: ik });
  P.addFeature(ip, 'extrude', { sketch: isk.id, op: 'cut', end: 'blind', depth: 5 });
  ri = xb(ip);
  ok(allOk(ri) && ref.face === 'named' && rel(ri.stats.volume, 302160 * PI - PI * 9 * 5, 1e-9), `a sketch on an imported flat face (${topI.name}) + a 5 deep Ø6 pocket: 302160π − 45π`);
  const ie = ri.edges.find((e) => e.type === 'circle' && near(e.len, 2 * PI * 100, 1e-6) && e.at[1] > 29);
  P.addFeature(ip, 'fillet', { edges: [B.edgeRef(ie)], r: 2 });
  ri = xb(ip);
  ok(allOk(ri) && ri.stats.volume < 302160 * PI - 45 * PI, 'and a fillet on an edge of the imported solid (the rim)');
  const back = P.readPart(P.toJSON(ip));
  ok(back.features[0].type === 'import' && back.features[0].step === st && rel(xb(back).stats.volume, ri.stats.volume, 1e-12), 'the STEP text is kept in the part file: save → open rebuilds the same');
  // the faceted STEP export also works from the exact kernel's mesh (flat regions merged, curved faces as facets)
  if (occt2) {
    const sf = X.stepFaceted(r.mesh, 'Flange');
    const res = occt2.ReadStepFile(new TextEncoder().encode(sf.text), null);
    let vol = 0;
    for (const m of res.meshes || []) { const p = m.attributes.position.array, I = m.index.array; for (let t = 0; t < I.length; t += 3) vol += V.dot([p[I[t] * 3], p[I[t] * 3 + 1], p[I[t] * 3 + 2]], V.cross([p[I[t + 1] * 3], p[I[t + 1] * 3 + 1], p[I[t + 1] * 3 + 2]], [p[I[t + 2] * 3], p[I[t + 2] * 3 + 1], p[I[t + 2] * 3 + 2]])) / 6; }
    ok(res.success && res.meshes.length === 1 && Math.abs(vol - r.stats.volume) / r.stats.volume < 2e-3, `faceted STEP from the exact mesh still reads back as one closed solid (${vol.toFixed(1)})`);
  }
  ok(throws(() => B.readStepShape(oc, 'ISO-10303-21;\nHEADER;\nENDSEC;\nDATA;\nENDSEC;\nEND-ISO-10303-21;\n', { cache: false }), /no shapes|could not be read|no closed solid/), 'a STEP file with no solid is refused with a message');
}

section('exact kernel: drawings by hidden-line removal, section and detail views, GD&T');
{
  const { fl } = exactFlange;
  const notes = [
    G.newAnnotation('datum', { id: 'g1', view: 'front', at: [0, 0], letter: 'A' }),
    G.newAnnotation('fcf', { id: 'g2', view: 'top', at: [75, 0], char: 'position', dia: true, tol: 0.2, mod: 'M', datums: [{ letter: 'A', mod: '' }] }),
    G.newAnnotation('finish', { id: 'g3', view: 'section', at: [-100, 15], ra: 1.6, process: 'removal' }),
  ];
  const drawing = { section: { of: 'front' }, detail: { of: 'section', at: [75, 15], r: 20, scale: 2 }, notes };
  fl.part.drawing = drawing;
  const t0 = performance.now();
  const data = BD.drawingViews(fl.part, oc, drawing);
  const ms = Math.round(performance.now() - t0);
  const bw = (v) => v.box.u1 - v.box.u0, bh = (v) => v.box.v1 - v.box.v0;
  ok(data.exact && near(bw(data.views.front), 200, 1e-6) && near(bh(data.views.front), 80, 1e-6) && near(bw(data.views.top), 200, 1e-6) && near(bh(data.views.top), 200, 1e-6), `HLR views (${ms} ms): front 200 × 80, top Ø200 — exact extents`);
  ok(data.views.front.hidden.length > 0 && data.views.top.hidden.length > 0, 'hidden edges (bore, bolt holes) come from OCCT\'s HLR');
  // the top view shows 8 bolt-hole circles r 7 at radius 75: points on them
  const onHole = data.views.top.visible.filter((g) => { const m = [(g[0] + g[2]) / 2, (g[1] + g[3]) / 2]; for (let i = 0; i < 8; i++) { const a = 2 * PI * i / 8; const cc = [75 * Math.cos(a), 75 * Math.sin(a)]; if (Math.abs(Math.hypot(m[0] - cc[0], m[1] - cc[1]) - 7) < 0.05) return true; } return false; });
  ok(onHole.length >= 8 * 8, `the top view draws the 8 bolt holes as circles r 7 on the Ø150 circle (${onHole.length} segments)`);
  const sec = data.views.section;
  ok(sec && sec.cut.length > 0 && near(bw(sec), 200, 1e-6) && near(bh(sec), 80, 1e-6), 'section A-A (front, cut through the centre): 200 × 80 with the cut faces\' outline');
  const hatch = DRW.hatch(sec.cut, 2.5);
  let hl = 0; for (const h of hatch) hl += Math.hypot(h[2] - h[0], h[3] - h[1]);
  // hatched area ≈ total length × spacing; the cut face area: the half profile ×2 minus the two hole cuts (two holes at ±75 are on the plane: 0°, 180°)
  const cutArea = 2 * (66 * 30 + 50 * (52 - 34 + 40 - 34) / 2 - 2 * 0) - 2 * 14 * 30;
  ok(Math.abs(hl * 2.5 - cutArea) / cutArea < 0.03, `hatching fills the cut area: ${(hl * 2.5).toFixed(0)} ≈ ${cutArea} mm² (the two holes on the cutting plane left open)`);
  const sheet = DRW.composeSheet(data, { name: 'Flange', date: new Date('2026-10-10T12:00:00Z'), drawing, annotate: G.annotationGeometry });
  ok(sheet.views.section && sheet.views.detail && sheet.omitted.length === 0 && sheet.notes.every((q) => q.box), `the sheet holds front, top, right, section A-A, detail B (${scaleLabel(sheet.views.detail.s)}) and the 3 notes (iso ${sheet.views.iso ? 'too' : 'left out'})`);
  ok(sheet.views.detail.s === sheet.scale * 2, 'detail B is twice the sheet scale');
  const pdf = await DRW.toPdf(sheet);
  const fpdf = path.join(TMP, 'flange-exact-drawing.pdf');
  fs.writeFileSync(fpdf, pdf.bytes);
  const info = spawnSync('pdfinfo', [fpdf], { encoding: 'utf8' });
  if (info.error) skip('poppler missing: exact drawing PDF not read back');
  else {
    const txt = spawnSync('pdftotext', ['-layout', fpdf, '-'], { encoding: 'utf8' }).stdout;
    ok(/Section A-A/.test(txt) && /Detail B/.test(txt) && /\b200\b/.test(txt) && /OpenCascade HLR/.test(txt) && /Open CASCADE Technology/.test(txt), 'pdftotext: Section A-A, Detail B, the sizes and the OCCT notice');
    ok(/\b0\.2\b/.test(txt) && /Ra 1\.6/.test(txt) && !/[⌀⌖Ⓜ]/.test(txt), 'the frame\'s 0.2 and "Ra 1.6" are text; the symbols (⌀, position, Ⓜ) are drawn, not font glyphs');
    const png = path.join(TMP, 'flange-exact-drawing');
    const rr = spawnSync('pdftoppm', ['-r', '40', '-png', fpdf, png], { encoding: 'utf8' });
    ok(rr.status === 0 && fs.existsSync(png + '-1.png'), 'poppler renders the sheet');
  }
  // drawing settings in the part file: round trip and refusals
  const back = P.readPart(P.toJSON(fl.part));
  ok(back.drawing && back.drawing.section.of === 'front' && back.drawing.detail.scale === 2 && back.drawing.notes.length === 3 && back.drawing.notes[1].char === 'position', 'drawing settings and notes are saved with the part');
  const t = JSON.parse(P.toJSON(fl.part)); t.drawing.detail.scale = 3;
  ok(throws(() => P.readPart(JSON.stringify(t)), /detail view/), 'a bad detail scale in a file is refused');
  const t2 = JSON.parse(P.toJSON(fl.part)); t2.drawing.notes[0].letter = 'I';
  ok(throws(() => P.readPart(JSON.stringify(t2)), /Drawing note/), 'a datum letter I in a file is refused');
  delete fl.part.drawing;
}

await (await import(path.join(REPO, 'tools/partcraft-test/test-gdt.mjs'))).runGdtTests({ ok, section, near });
await (await import(path.join(REPO, 'tools/partcraft-test/test-sketch-tools.mjs'))).runSketchToolTests({ ok, section, near, oc, skip });
await (await import(path.join(REPO, 'tools/partcraft-test/test-assembly-tools.mjs'))).runAssemblyToolsTests({ ok, section, oc, skip });
await (await import(path.join(REPO, 'tools/partcraft-test/test-workspaces.mjs'))).runWorkspaceTests({ ok, section, near });
await (await import(path.join(REPO, 'tools/partcraft-test/test-illustrate.mjs'))).runIllustrateTests({ ok, section, near, M });   // 0.7 Track TP (session illustrate; after the workspaces test, which lists the switcher)
await (await import(path.join(REPO, 'tools/partcraft-test/test-design-features.mjs'))).runDesignFeatureTests({ ok, section, oc, skip, M });
await (await import(path.join(REPO, 'tools/partcraft-test/test-sheetmetal.mjs'))).runSheetMetalTests({ ok, section, oc, skip });   // 0.4 P15–P17
await (await import(path.join(REPO, 'tools/partcraft-test/test-nest.mjs'))).runNestTests({ ok, section, oc, skip });   // 0.6 LC.17 (session lc-make)
await (await import(path.join(REPO, 'tools/partcraft-test/test-offcuts.mjs'))).runOffcutTests({ ok, section });   // 0.7 SU.755 (offcut stock)
await (await import(path.join(REPO, 'tools/partcraft-test/test-stackup.mjs'))).runStackupTests({ ok, section });   // 0.6 LC.18 (session lc-make)
await (await import(path.join(REPO, 'tools/partcraft-test/test-configs.mjs'))).runConfigTests({ ok, section });   // 0.4 P18
await (await import(path.join(REPO, 'tools/partcraft-test/test-stdparts.mjs'))).runStdPartsTests({ ok, section, M });   // 0.5 MQ.4
await (await import(path.join(REPO, 'tools/partcraft-test/test-joints.mjs'))).runJointTests({ ok, section, M });   // 0.4 P19
await (await import(path.join(REPO, 'tools/partcraft-test/test-asm-loops.mjs'))).runAsmLoopTests({ ok, section, M });   // 0.7 D7.40 (session part-08)
await (await import(path.join(REPO, 'tools/partcraft-test/test-rib.mjs'))).runRibTests({ ok, section, oc });   // 0.4 P20
await (await import(path.join(REPO, 'tools/partcraft-test/test-weldment.mjs'))).runWeldmentTests({ ok, section, M });   // 0.7 D7.50 (session part-08)
await (await import(path.join(REPO, 'tools/partcraft-test/test-screw-threads.mjs'))).runScrewThreadTests({ ok, section, oc, M, skip });   // 0.5 WL.29
await (await import(path.join(REPO, 'tools/partcraft-test/test-param-uses.mjs'))).runParamUsesTests({ ok, section });   // 0.5 WL.30
await (await import(path.join(REPO, 'tools/partcraft-test/test-ifc-export.mjs'))).runIfcExportTests({ ok, section, skip, keep: KEEP });   // 0.5 WL.32
await (await import(path.join(REPO, 'tools/partcraft-test/test-clash-filters.mjs'))).runClashFilterTests({ ok, section, M });   // 0.5 WL.33
await (await import(path.join(REPO, 'tools/partcraft-test/test-analysis.mjs'))).runAnalysisTests({ ok, section, M, oc });   // 0.4 P21
await (await import(path.join(REPO, 'tools/partcraft-test/test-python.mjs'))).runPythonTests({ ok, section, skip });   // 0.4 P10
await (await import(path.join(REPO, 'tools/partcraft-test/test-holetable.mjs'))).runHoleTableTests({ ok, section, oc, skip });   // 0.4 P23
await (await import(path.join(REPO, 'tools/partcraft-test/test-adaptive.mjs'))).runAdaptiveTests({ ok, section, oc });   // 0.4 P24
await (await import(path.join(REPO, 'tools/partcraft-test/test-bodies.mjs'))).runBodiesTests({ ok, section, oc, skip, M });
await (await import(path.join(REPO, 'tools/partcraft-test/test-meshfaces.mjs'))).runMeshFacesTests({ ok, section, near, oc, M, skip });   // 0.4 K.2b
await (await import(path.join(REPO, 'tools/partcraft-test/test-mesh-import.mjs'))).runMeshImportTests({ ok, section, M });   // 0.7 D7.49 (session part-08)
{ // 0.7 D7.26 (session part-08): STEP without the exact kernel — cc-step's own test (fixtures, faceted round trip, truncation fuzz, copies)
  section('STEP read as triangles (tools/step-test/test.mjs)');
  const r = spawnSync(process.execPath, [path.join(REPO, 'tools/step-test/test.mjs')], { encoding: 'utf8' });
  const last = (r.stdout || '').trim().split('\n').pop();
  ok(r.status === 0, 'cc-step: ' + last + (r.status ? '\n' + r.stdout.split('\n').filter((l) => /FAIL|unexpected/.test(l)).join('\n') : ''));
}
await (await import(path.join(REPO, 'tools/partcraft-test/test-form.mjs'))).runFormTests({ ok, section, oc, skip });
await (await import(path.join(REPO, 'tools/partcraft-test/test-gordon.mjs'))).runGordonTests({ ok, section, oc });
await (await import(path.join(REPO, 'tools/partcraft-test/test-cam.mjs'))).runCamTests({ ok, section, near, oc, skip, keep: KEEP });
await (await import(path.join(REPO, 'tools/partcraft-test/test-simulation.mjs'))).runSimulationTests({ ok, section, near, oc });
await (await import(path.join(REPO, 'tools/partcraft-test/test-thermal.mjs'))).runThermalTests({ ok, section, near, oc });
await (await import(path.join(REPO, 'tools/partcraft-test/test-tet.mjs'))).runTetTests({ ok, section, near, oc });
await (await import(path.join(REPO, 'tools/partcraft-test/test-tet-exact.mjs'))).runTetExactTests({ ok, section, near, oc });
await (await import(path.join(REPO, 'tools/partcraft-test/test-tet-adaptive.mjs'))).runTetAdaptiveTests({ ok, section, near, oc });
await (await import(path.join(REPO, 'tools/partcraft-test/test-flow.mjs'))).runFlowTests({ ok, section, near, oc });
await (await import(path.join(REPO, 'tools/partcraft-test/test-flow-turb.mjs'))).runFlowTurbTests({ ok, section, near, oc });
await (await import(path.join(REPO, 'tools/partcraft-test/test-threads.mjs'))).runThreadTests({ ok, section });
await (await import(path.join(REPO, 'tools/partcraft-test/test-script.mjs'))).runScriptTests({ ok, section });
await (await import(path.join(REPO, 'tools/partcraft-test/test-pu.mjs'))).runPuTests({ ok, section, M });   // 0.6 PU.1–PU.6
await (await import(path.join(REPO, 'tools/partcraft-test/test-large.mjs'))).runLargeTests({ ok, section, M });   // 0.7 D7.51 (750 features, batched build, checkpoints)

section('exact kernel: hygiene');
{
  const fl = F.flange();
  const heap0 = oc.wasmMemory.buffer.byteLength;
  const t0 = performance.now();
  for (let i = 0; i < 30; i++) xb(fl.part);
  const per = (performance.now() - t0) / 30;
  const heap1 = oc.wasmMemory.buffer.byteLength;
  ok(rel(xb(fl.part).stats.volume, 302160 * PI, 1e-9), `30 exact rebuilds give the same part (${per.toFixed(0)} ms each)`);
  ok(heap1 - heap0 < 64 * 1024 * 1024, `WebAssembly memory after 30 rebuilds grew ${((heap1 - heap0) / 1e6).toFixed(0)} MB (< 64; the page restarts the worker past 1.5 GB)`);
  const bad = P.newPart();
  const sk = S.newSketch(); S.addRect(sk, [0, 0], [10, 10]);
  const s1 = P.addFeature(bad, 'sketch', { sketch: sk });
  const cut = P.addFeature(bad, 'extrude', { sketch: s1.id, op: 'cut', end: 'through' });
  const rb = xb(bad);
  ok(rb.results.get(cut.id).status === 'error' && rb.stats === null, 'a cut with no body is an error, not a crash');
}

// =========================================================================================
section('kernel hygiene');
{
  // rebuilding many times must not leak WASM objects (every Manifold/CrossSection is deleted)
  const fl = F.flange();
  const t0 = Date.now();
  for (let i = 0; i < 30; i++) build(fl.part);
  const per = (Date.now() - t0) / 30;
  const r = build(fl.part);
  ok(rel(r.stats.volume, k(64) * 302160, 1e-8), `30 rebuilds give the same part (${per.toFixed(1)} ms each)`);
  const bad = P.newPart();
  const sk = S.newSketch(); S.addRect(sk, [0, 0], [10, 10]);
  const s1 = P.addFeature(bad, 'sketch', { sketch: sk });
  const cut = P.addFeature(bad, 'extrude', { sketch: s1.id, op: 'cut', end: 'through' });
  const rb = build(bad);
  ok(rb.results.get(cut.id).status === 'error' && /nothing to cut/i.test(rb.results.get(cut.id).message) && rb.stats === null, 'a cut with no body is an error, not a crash');
}

// 3D printing (0.5 SG.4, #531): print3d.js is ModelCraft's, copied byte for byte; the same known answers on this copy,
// then real parts from the mesh kernel turned Z up as the exports write them
{
  const canon = path.join(DEV, '../../modelcraft/dev/print3d.js');
  if (fs.existsSync(canon)) ok(fs.readFileSync(path.join(DEV, 'print3d.js')).equals(fs.readFileSync(canon)), 'partcraft print3d.js is byte-identical to modelcraft/dev/print3d.js');
  else skip('print3d.js copy: ModelCraft is not in this checkout');
  const shared = path.join(REPO, 'tools/modelcraft-test/print3d.mjs');
  if (fs.existsSync(shared)) {
    const { run } = await import(shared);
    await run({ ok, close: (a, b, t = 1e-6) => Math.abs(a - b) <= t, section, APP: DEV.replace(/\/$/, ''), OUT: TMP, ROOT: REPO });
  } else skip('tools/modelcraft-test/print3d.mjs missing');
  section('3D printing: real parts (0.5 SG.4)');
  const PR = await import(DEV + 'print3d.js');
  const zUpMesh = (m) => { const S3 = m.positions, pos = new Float64Array(S3.length); for (let i = 0; i < S3.length; i += 3) { pos[i] = S3[i]; pos[i + 1] = -S3[i + 2]; pos[i + 2] = S3[i + 1]; } return { positions: pos, indices: m.indices, colors: null }; };
  const { part, s1, e1 } = blockPart();
  let r = build(part);
  let c = PR.printCheck(zUpMesh(r.mesh));
  ok(c.ok && c.shells === 1 && rel(c.volume, 100000, 1e-6) && rel(c.volume, r.stats.volume, 1e-6), 'a 100 × 50 × 20 block is ready to print: ' + c.volume);
  ok(near(c.size[2], 20, 1e-4) && near(c.min[2], 0, 1e-4) && rel(c.bedArea, 5000, 1e-6) && !c.warnings.length, 'Y up becomes Z up: 20 tall, resting on its 5000 mm² base, no warning');
  ok(c.warnings.length === 0 && PR.printCheck(zUpMesh(r.mesh), { bed: [80, 120, 100] }).warnings.some((w) => w.kind === 'bed') === false, 'fits a 80 × 120 bed turned 90°');
  ok(PR.printCheck(zUpMesh(r.mesh), { bed: [80, 80, 100] }).warnings.some((w) => w.kind === 'bed'), 'not a 80 × 80 bed');
  const sk = S.newSketch(); S.addRect(sk, [10, 10], [30, 20]);
  const s2 = P.addFeature(part, 'sketch', { plane: { kind: 'face', feature: e1.id, face: 'end' }, sketch: sk });
  P.addFeature(part, 'extrude', { sketch: s2.id, op: 'cut', end: 'through' });
  r = build(part); c = PR.printCheck(zUpMesh(r.mesh));
  ok(c.ok && rel(c.volume, 96000, 1e-6), 'with a slot cut through: still one closed body, 96000 mm³');
  const stl = X.stlBinary(r.mesh, 'p'), back = PR.weld({ positions: Float64Array.from(stlTris(stl)), indices: Uint32Array.from({ length: stlTris(stl).length / 3 }, (_, i) => i) });
  ok(PR.printCheck(back).ok, "PartCraft's own STL export passes the check too");
  function stlTris(b) { const dv = new DataView(b.buffer, b.byteOffset), n = dv.getUint32(80, true), out = []; for (let t = 0; t < n; t++) for (let v = 0; v < 3; v++) for (let k3 = 0; k3 < 3; k3++) out.push(dv.getFloat32(84 + t * 50 + 12 + v * 12 + k3 * 4, true)); return out; }
}

if (process.argv.includes('--browser')) {
  section('browser (tools/partcraft-test/browser.mjs)');
  const b = spawnSync(process.execPath, [path.join(REPO, 'tools/partcraft-test/browser.mjs')], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });
  process.stdout.write(b.stdout);
  const m = /(\d+) passed, (\d+) failed/.exec(b.stdout);
  if (m) { pass += +m[1]; fail += +m[2]; } else fail++;
}

if (!KEEP) for (const f of fs.readdirSync(TMP)) fs.rmSync(path.join(TMP, f), { force: true });
console.log(`\n${pass} passed, ${fail} failed${skipped ? `, ${skipped} skipped` : ''}`);
process.exit(fail ? 1 : 0);
