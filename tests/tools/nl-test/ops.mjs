#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** ops.mjs — phys-worker.js (SU.891 / SG.7+ solver side): contact between separate parts and the 2-D magnet op, on real exact-kernel parts, against hand answers.
 *  (The nonlinear and one-part contact ops are part_PART_3's nl-worker.js, tested by tools/partcraft-test/test-nl-mount.mjs.) */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DEV = path.join(REPO, 'public_html/assets/apps/partcraft/dev/');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('  FAIL ' + m); } };
const [S, P, B, SIM, W, I18N] = await Promise.all(['sketch.js', 'part.js', 'brep.js', 'sim.js', 'phys-worker.js', 'i18n.js'].map((f) => import(DEV + f)));
I18N.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(DEV + 'lang/en.json', 'utf8')) });
const { default: init } = await import(path.join(REPO, 'public_html/assets/vendor/replicad-opencascadejs/current/replicad_single.js'));
const oc = await init({ print: () => {}, printErr: () => {} });
const ctx = { progress() {}, transfer() {} };
const bar = (x0, x1) => {
  const part = P.newPart('Bar'), sk = S.newSketch(); S.addRect(sk, [x0, 0], [x1, 10]);
  const s1 = P.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'front' }, sketch: sk });
  P.addFeature(part, 'extrude', { sketch: s1.id, op: 'add', end: 'blind', depth: 10 });
  return B.regenerateBrep(part, oc, { keep: true });
};
const faceBy = (regen, n) => { const i = regen.faces.findIndex((x) => x.type === 'plane' && x.n[0] * n[0] + x.n[1] * n[1] + x.n[2] * n[2] > 0.999); return { i, ref: { name: regen.faces[i].name, at: regen.faces[i].o ? regen.faces[i].o.slice() : [0, 0, 0] } }; };
const jobOf = (regen, { fixedLeft = false, force = 0, material, h = 5, slide = false }) => {
  const c = [], l = [];
  if (slide) [[0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].forEach((n, k) => c.push({ id: 'c' + (k + 2), type: 'frictionless', faces: [faceBy(regen, n).ref] }));   // a floating part must be held sideways: contact holds it only along the normal
  if (fixedLeft) c.push({ id: 'c1', type: 'fixed', faces: [faceBy(regen, [-1, 0, 0]).ref] });
  if (force) l.push({ id: 'l1', type: 'force', faces: [faceBy(regen, [1, 0, 0]).ref], total: force, dir: [1, 0, 0] });
  const st = SIM.readSimStudy({ v: 1, kind: 'static', material: 'steel', h, elem: 'h8i', mesher: 'tet', modes: 1, seq: 0, constraints: c, loads: l });
  const { job, problems } = SIM.simJob(st, regen, { check: false });
  if (!job) throw new Error(problems.join('; '));
  job.mesher = 'tet'; job.material = { ...job.material, ...material };
  return job;
};
const STEEL = { E: 200000, nu: 0, yield: 250, Et: 20000, density: 7850 };
// ---- contactSolve: two bars end to end, steel then aluminium; bonded pull and frictionless push over a gap
for (const type of ['bonded', 'frictionless']) {
  const gap = type === 'bonded' ? 0 : 0.01, F = type === 'bonded' ? 10000 : -10000;
  const r1 = bar(0, 10), r2 = bar(10 + gap, 20 + gap);
  const j1 = jobOf(r1, { fixedLeft: true, material: STEEL }), j2 = jobOf(r2, { force: F, slide: true, material: { ...STEEL, E: 70000, yield: 0, Et: 0 } });
  j1.material.yield = 0; j1.material.Et = 0;
  const run = W.contactSolve({ parts: [j1, j2], pairs: [{ type, slave: { part: 0, faces: [faceBy(r1, [1, 0, 0]).i] }, master: { part: 1, faces: [faceBy(r2, [-1, 0, 0]).i] } }], nonlinear: { steps: 6 } }, ctx);
  const tip = F > 0 ? 100 * (10 / 200000 + 10 / 70000) : -(gap + 100 * (10 / 200000 + 10 / 70000));
  const got = type === 'bonded' ? run.maxDisp.value : run.maxDisp.value;
  console.log(`  ${type}: tip ${got.toFixed(5)} mm (1-D: ${Math.abs(tip).toFixed(5)}), ${run.contact.points} contact points, force ${run.contact.normalForce.toFixed(0)} N, max penetration ${run.contact.maxPenetration.toExponential(2)} mm, ${run.summary.elements} tets`);
  ok(run.converged && Math.abs(got / Math.abs(tip) - 1) < 0.05, `${type}: tip ${got.toFixed(5)} mm within 5 % of the 1-D answer ${Math.abs(tip).toFixed(5)} mm`);
  if (type === 'frictionless') ok(Math.abs(run.contact.normalForce / 10000 - 1) < 0.05, `the contact carries the push: ${run.contact.normalForce.toFixed(0)} N of 10 000 N`);
  else ok(run.contact.points >= 0, 'bonded: reports its tied points');
}
{ let msg = ''; try { W.contactSolve({ parts: [{}] }, ctx); } catch (e) { msg = e.message; }
  ok(/two or more parts/.test(msg), 'one part is not a contact study: refused in words'); }
// ---- magnetSolve: a line current, B·r = μ0 I / 2π
{
  const w = 0.02, I = 1000;
  const r = W.magnetSolve({ box: [-1, -1, 1, 1], loops: [{ region: 1, poly: [[-w, -w], [w, -w], [w, w], [-w, w]] }], size: { base: 0.3, grow: 0.07, zones: [{ box: [-w, -w, w, w], h: 0.006 }] },
    materials: { 0: { type: 'linear', mur: 1 }, 1: { type: 'linear', mur: 1 } }, current: { 1: I / (2 * w) ** 2 }, contours: [{ id: 'wire', at: [0, 0], radius: 0.2 }] }, ctx);
  let sum = 0, n = 0;
  for (let e = 0; e < r.mesh.tris.length / 3; e++) { const a = r.mesh.tris[3 * e], b = r.mesh.tris[3 * e + 1], c = r.mesh.tris[3 * e + 2]; const x = (r.mesh.nodes[2 * a] + r.mesh.nodes[2 * b] + r.mesh.nodes[2 * c]) / 3, y = (r.mesh.nodes[2 * a + 1] + r.mesh.nodes[2 * b + 1] + r.mesh.nodes[2 * c + 1]) / 3, rr = Math.hypot(x, y); if (rr > 0.06 && rr < 0.15) { sum += r.B.mag[e] * rr / (4e-7 * Math.PI * I / (2 * Math.PI)); n++; } }
  ok(n > 20 && Math.abs(sum / n - 1) < 0.005, `magnetSolve: mean B·r ${(100 * (sum / n - 1)).toFixed(3)} % from μ0I/2π (${r.stats.tris} triangles, ${r.ms} ms)`);
  ok(Math.abs(r.forces[0].fx) < 0.01 && Math.abs(r.forces[0].fy) < 0.01, `no net force on a lone wire (under 1 % of the B·I scale, 1 N/m) (${r.forces[0].fx.toExponential(1)}, ${r.forces[0].fy.toExponential(1)} N/m)`);
  let msg = ''; try { W.magnetSolve({ box: [0, 0, 1, 1], loops: [], size: 0.0005, maxPoints: 300 }, ctx); } catch (e) { msg = e.message; }
  ok(/more points than allowed/.test(msg), 'a mesh over the point limit is refused in words');
}
console.log(`nl ops: ${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
