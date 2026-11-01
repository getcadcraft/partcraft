#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** part.mjs — Break it on real parts (EG.31): a cantilever's load factor to first yield (confirmed by a second solve at that load) and a slender
 *  column's to buckling (Euler), with the exact kernel and the tet solver. */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DEV = path.join(REPO, 'public_html/assets/apps/partcraft/dev/');
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('  FAIL ' + m); } };
const [S, P, Brep, SIM, TF, BP, BI, I18N] = await Promise.all(['sketch.js', 'part.js', 'brep.js', 'sim.js', 'tet-worker.js', 'break-part.js', 'study/breakit.js', 'i18n.js'].map((f) => import(DEV + f)));
I18N.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(DEV + 'lang/en.json', 'utf8')) });
const { default: init } = await import(path.join(REPO, 'public_html/assets/vendor/replicad-opencascadejs/current/replicad_single.js'));
const oc = await init({ print: () => {}, printErr: () => {} });
const val = (x) => (x && typeof x === 'object' ? x.value : x);
async function rig(L, force, dir, h) {
  const part = P.newPart('Bar'), sk = S.newSketch(); S.addRect(sk, [0, 0], [L, 10]);
  const s1 = P.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'front' }, sketch: sk });
  P.addFeature(part, 'extrude', { sketch: s1.id, op: 'add', end: 'blind', depth: 10 });
  const regen = Brep.regenerateBrep(part, oc, { keep: true });
  const face = (n) => { const f = regen.faces.find((x) => x.type === 'plane' && x.n[0] * n[0] + x.n[1] * n[1] + x.n[2] * n[2] > 0.999); return { name: f.name, at: f.o ? f.o.slice() : [0, 0, 0] }; };
  const st = SIM.readSimStudy({ v: 1, kind: 'static', material: 'steel', h, elem: 'h8i', mesher: 'tet', modes: 1, seq: 0,
    constraints: [{ id: 'c1', type: 'fixed', faces: [face([-1, 0, 0])] }], loads: [{ id: 'l1', type: 'force', faces: [face([1, 0, 0])], total: force, dir } ] });
  return { st, regen };
}
const solve = async (job) => TF.tetSolve(job);
{ // cantilever, 100 N at the tip: PL³/3EI, σ = PLc/I = 60 MPa → first yield at 250/60 = 4.17× by hand
  const { st, regen } = await rig(100, 100, [0, -1, 0], 4);
  const run = await BP.breakPart({ st, regen, solve, B: BI });
  const y = run.findings.find((f) => f.kind === 'yield');
  ok(run.ok && y && !y.failing, 'cantilever: the run works and the part does not yield as loaded');
  const hand = 250 / 60;
  console.log(`  cantilever: first yield at ${y.factor.toFixed(3)}× the load (hand σ = PLc/I: ${hand.toFixed(3)}×), at (${y.where.at.map((v) => v.toFixed(1)).join(', ')}) mm`);
  ok(Math.abs(y.factor / hand - 1) < 0.1, `load factor to yield within 10 % of the beam formula (${(100 * (y.factor / hand - 1)).toFixed(1)} %)`);
  ok(y.where.at[0] < 15, `and it is at the fixed end (x = ${y.where.at[0].toFixed(1)} mm of 100)`);
  // confirm with a second solve at that load: the maximum von Mises equals the yield stress
  const again = SIM.simJob(BP.scaleLoads(st, y.factor), regen).job, r2 = solve(again);
  const vm = val((await r2).maxVm);
  ok(Math.abs(vm / 250 - 1) < 1e-6, `a second solve at ${y.factor.toFixed(3)}× the load gives ${vm.toFixed(4)} MPa = the 250 MPa yield (linear study)`);
  const over = SIM.simJob(BP.scaleLoads(st, y.factor * 1.05), regen).job;
  ok(val((await solve(over)).maxVm) > 250, 'a few percent more load is over the yield');
  ok(run.notes.length === 0 || run.findings.some((f) => f.kind === 'buckling'), 'buckling of a stocky cantilever under a transverse load is reported or noted');
  const heavy = (await rig(100, 100 * 5, [0, -1, 0], 4)), hr = await BP.breakPart({ ...heavy, solve, B: BI });
  const hy = hr.findings.find((f) => f.kind === 'yield');
  ok(hy.failing && hy.factor < 1 && BI.findingProblems(hr.findings, { source: 'partcraft.breakit' })[0].severity === 'error', `500 N: yields as loaded (load factor ${hy.factor.toFixed(3)}) and becomes an error in Problems`);
}
{ // slender column 10 × 10 × 200, fixed-free, 1000 N in compression: Euler Pcr = π²EI/(2L)² = 10 282 N → buckling factor 10.28; yield at 25×
  const { st, regen } = await rig(200, 1000, [-1, 0, 0], 3);
  const run = await BP.breakPart({ st, regen, solve, B: BI });
  const b = run.findings.find((f) => f.kind === 'buckling'), y = run.findings.find((f) => f.kind === 'yield');
  const I = 10 * 10 ** 3 / 12, Pcr = Math.PI ** 2 * 200000 * I / (2 * 200) ** 2, hand = Pcr / 1000;
  console.log(`  column: buckling at ${b && b.factor.toFixed(3)}× (Euler ${hand.toFixed(3)}×), yield at ${y && y.factor.toFixed(2)}× (hand 25×)`);
  ok(b && Math.abs(b.factor / hand - 1) < 0.1, `buckling factor within 10 % of Euler π²EI/(KL)² (${b && (100 * (b.factor / hand - 1)).toFixed(1)} %)`);
  ok(y && y.factor < 25 && y.factor > 0.6 * 25, `yield: ${y && y.factor.toFixed(2)}× — below σ = P/A's 25× because the fixed face holds the part against lateral swelling (stress concentration at its edge), as expected`);
  ok(run.first.kind === 'buckling', `what breaks first is buckling, as Euler says (${run.first.kind})`);
}
{ // no loads: the run refuses and says why
  const { st, regen } = await rig(100, 100, [0, -1, 0], 4);
  const r = await BP.breakPart({ st: { ...st, loads: [] }, regen, solve, B: BI });
  ok(!r.ok && r.problems.length > 0, 'a study with no loads: refused, with the study\'s own words');
  BP.setBreak({ ok: true, findings: [{ id: 'part.yield', kind: 'yield', subject: { kind: 'part', id: 'part' }, util: 1.2, factor: 0.8, failing: true }] });
  ok(BP.breakProblemsNow()[0].severity === 'error' && BP.breakProblemsNow()[0].code === 'breakit.yield', 'the last run feeds the Problems list');
  BP.setBreak(null); ok(BP.breakProblemsNow().length === 0, 'no run: no problems');
}
console.log(`break part: ${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
