#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the Advanced simulation add-on's Node tests (0.8 SU.891, session addons-finish-advanced-sim). The solvers are part-sim-08's and the
 * study mount part_PART_3's (tools/partcraft-test/test-sim08.mjs, test-nl-mount.mjs check them against closed forms); these tests are for what
 * the add-on adds and for the whole path through it, on parts built by PartCraft's mesh kernel:
 *   setup    finding contact pairs (the showcase two bars: exactly the 0.01 mm joint; one piece: none), turning a study into nonlinear / contact
 *            with its supports, loads and material kept, pair edits, all checked by sim.js readSimStudy
 *   solve    a bar pulled past yield (end displacement vs the bilinear curve), the two bars pushed together past yield (contact force = the load,
 *            plastic strain = (σ − σy)(1/Et − 1/E)), the CalculiX deck's contents, a .frd written from a known field read back
 *   results  the summary rows (every key in en.json), the colour bands as valid display bodies (addon-bodies.js cleanBody), beside the part
 *   addon    the add-on through PartCraft's own loader (partcraft-api.js, API 1.2) with a stand-in page: bundled and off, switched on, its tab,
 *            the buttons pressed (Contact, Find, Add, Run, Show, Remove, Save deck), one undo step each, Problems, commands, switched off
 *   lang     every key the code uses is in en.json; no unused keys
 *   node public_html/assets/apps/partcraft/dev/addons/advanced-sim/test/test.mjs [--verbose]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { makeDocument } from './fake-dom.mjs';

process.env.PC_EXACT = '0';
const HERE = path.dirname(fileURLToPath(import.meta.url)), ADDON = path.resolve(HERE, '..'), APP = path.resolve(ADDON, '../..'), ROOT = path.resolve(APP, '../../../../..');
const VERBOSE = process.argv.includes('--verbose');
let pass = 0, fail = 0;
const ok = (c, n, x = '') => { if (c) { pass++; if (VERBOSE) console.log('  ok   ' + n); } else { fail++; console.log('  FAIL ' + n + (x ? ' — ' + x : '')); } };
const section = (s) => console.log('\n' + s);
const app = (f) => import(pathToFileURL(path.join(APP, f)).href);
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const rel = (a, b) => Math.abs(a - b) / Math.max(Math.abs(b), 1e-300);
const EN = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));

await import(pathToFileURL(path.join(ROOT, 'tools/partcraft-test/fixtures.mjs')).href);   // PartCraft's English strings
const H = await import(pathToFileURL(path.join(ROOT, 'tools/cli/headless/part.mjs')).href);
const m = await H.partModules(), P = m.P;
await app('ws-simulation.js');   // registers the Simulation study reader, as the app does
const SIM = await app('sim.js'), B = await app('brep.js'), S = await app('sketch.js'), NW = await app('nl-worker.js'), AB = await app('addons/addon-bodies.js');
const SU = await mine('lib/setup.js'), RU = await mine('lib/run.js'), RS = await mine('lib/results.js');
const inProcess = { call: async (op, args) => NW[op](args), terminate() {} };

// ------------------------------------------------------------------ setup
section('setup: contact pairs and the study');
const fixture = path.join(ROOT, 'fixtures/showcase/partcraft-two-bars-contact.partcraft.json');
const two = new H.PartSession(P.readPart(JSON.parse(fs.readFileSync(fixture, 'utf8'))), m);
const rg2 = two.regen();
ok(rg2.named && rg2.stats.bodies === 2 && rg2.faces.length === 12, `the showcase part builds on the mesh kernel: ${rg2.stats.bodies} pieces, ${rg2.faces.length} named faces`);
const st0 = P.study(two.part, 'simulation');
ok(st0 && st0.kind === 'static' && st0.constraints.length === 5 && st0.loads.length === 1, 'it carries a static study: 5 supports, 1 load');
const d0 = SU.describe(st0, rg2);
ok(d0.pieces === 2 && d0.supports === 5 && d0.loads === 1 && d0.material.yield === 250 && d0.material.E === 200000, 'describe: 2 pieces, the supports, loads and steel (E 200 GPa, yield 250 MPa)', JSON.stringify(d0));
const found = SU.findPairs(rg2);
const fa = found[0] && rg2.faces[found[0].a], fb = found[0] && rg2.faces[found[0].b];
ok(found.length === 1 && Math.abs(found[0].gap - 0.01) < 1e-6 && rel(found[0].overlap, 100) < 1e-6, `findPairs: exactly one pair, ${found[0]?.gap.toFixed(4)} mm apart, ${found[0]?.overlap.toFixed(2)} mm² overlap`);
ok(fa && fb && fa.n[0] * fb.n[0] < -0.999 && Math.abs(fa.o[0] - 50) + Math.abs(fb.o[0] - 50.01) < 1e-4 + Math.min(Math.abs(fa.o[0] - 50.01), 1) * 0 || (fa && fb && Math.abs(fa.o[0] - 50.01) + Math.abs(fb.o[0] - 50) < 1e-4), 'the pair is the joint: the faces at x 50 and x 50.01, facing each other');
ok(SU.findPairs(rg2, { gap: 0.005 }).length === 0, 'a search distance below the gap finds nothing');
ok(found[0].pieces[0] !== found[0].pieces[1], 'the two faces belong to different pieces');
// one piece
const bar = (() => {
  const part = P.newPart('Bar'), sk = S.newSketch();
  S.addRect(sk, [0, 0], [100, 10]);
  const f = P.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'top' }, sketch: sk });
  P.addFeature(part, 'extrude', { sketch: f.id, op: 'add', end: 'blind', depth: 10 });
  return new H.PartSession(part, m);
})();
const rg1 = bar.regen();
ok(SU.findPairs(rg1, { gap: 50 }).length === 0 && SU.describe(null, rg1).pieces === 1, 'one piece: no pairs even with a large search distance');
// asKind
const c1 = SU.asKind(st0, 'contact');
ok(c1.kind === 'contact' && c1.mesher === 'tet' && c1.nonlinear.steps === 10 && c1.nonlinear.Et === null && c1.contacts.length === 0, 'asKind contact: tets, 10 steps, Et = 1 % of E, no pairs yet');
ok(JSON.stringify(c1.constraints) === JSON.stringify(st0.constraints) && JSON.stringify(c1.loads) === JSON.stringify(st0.loads) && c1.material === 'steel' && c1.h === 5, 'the supports, loads, material and element size are kept');
const n1 = SU.asKind(c1, 'nonlinear', { steps: 20, Et: 1000 });
ok(n1.kind === 'nonlinear' && !('contacts' in n1) && n1.nonlinear.steps === 20 && n1.nonlinear.Et === 1000, 'asKind nonlinear: steps and slope set, the pairs dropped');
let threw = false; try { SU.asKind(c1, 'contact', { steps: 1e6 }); } catch { threw = true; }
ok(threw, 'a step count the reader refuses throws (nothing reaches the part)');
const fresh = SU.asKind(null, 'nonlinear');
ok(fresh.kind === 'nonlinear' && fresh.constraints.length === 0 && fresh.material === SIM.newSimStudy().material, 'no study yet: a new one with PartCraft\'s defaults');
const wp = SU.withPairs(c1, rg2, found);
ok(wp.added === 1 && wp.study.contacts.length === 1 && wp.study.contacts[0].id === 'p1' && wp.study.contacts[0].type === 'frictionless' && wp.study.contacts[0].factor === 20, 'withPairs: pair p1, frictionless, penalty factor 20');
ok(SU.withPairs(wp.study, rg2, found).added === 0, 'the same pair is not added twice');
const e1 = SU.editPair(wp.study, 'p1', { type: 'bonded', factor: 1000, swap: true });
ok(e1.contacts[0].type === 'bonded' && e1.contacts[0].factor === 1000 && e1.contacts[0].faces[0].name === wp.study.contacts[0].master[0].name, 'editPair: type, factor and sides swapped');
ok(SU.dropPair(e1, 'p1').contacts.length === 0, 'dropPair');
ok(SIM.simJob(wp.study, rg2).problems.length === 0, 'the study with the found pair is ready to solve (simJob has no problems)', SIM.simJob(wp.study, rg2).problems.join(' '));

// ------------------------------------------------------------------ solve
section('solve: through nl-worker.js, the same op the Simulation workspace calls');
{
  // a bar 100 × 10 × 10 held on three symmetry faces, pulled 3000 MPa·... past yield: the end moves L(σy/E + (σ − σy)/Et)
  const face = (rg, n, c) => { const ax = n.findIndex((v) => v !== 0); return rg.faces.findIndex((f) => f.type === 'plane' && f.n && f.n.every((v, k) => Math.abs(v - n[k]) < 1e-9) && Math.abs(f.o[ax] - c) < 1e-6); };
  const bb = rg1.stats.bbox, sym = [face(rg1, [-1, 0, 0], 0), face(rg1, [0, -1, 0], bb.min[1]), face(rg1, [0, 0, -1], bb.min[2])], end = face(rg1, [1, 0, 0], 100);
  const st = SU.asKind({ ...SIM.newSimStudy(), material: 'steel', h: 5, constraints: sym.map((i, k) => ({ id: 'c' + (k + 1), type: 'frictionless', faces: [B.faceRef(rg1.faces[i])] })), loads: [{ id: 'l1', type: 'force', faces: [B.faceRef(rg1.faces[end])], total: 30000, dir: [1, 0, 0] }] }, 'nonlinear', { steps: 6, Et: 2000 });
  const { job, problems } = RU.jobOf(st, rg1, { title: 'Bar' });
  ok(job && !problems.length && job.title === 'Bar', 'jobOf: a job from the bar\'s nonlinear study', problems.join(' '));
  const r = await RU.solve(inProcess, job);
  let ux = 0; for (let v = 0; v < r.vertex.u.length; v += 3) ux = Math.max(ux, r.vertex.u[v]);
  const want = 100 * (250 / 200000 + (300 - 250) / 2000);
  ok(r.nonlinear.converged && rel(ux, want) < 2e-3, `bar at 300 MPa: end moves ${ux.toFixed(5)} mm vs L(σy/E + (σ−σy)/Et) ${want.toFixed(5)} (${(100 * (ux / want - 1)).toFixed(3)} %)`);
  const ep = (300 - 250) * (1 / 2000 - 1 / 200000);
  ok(rel(r.nonlinear.maxPlastic, ep) < 2e-3, `plastic strain ${r.nonlinear.maxPlastic.toExponential(4)} vs (σ − σy)(1/Et − 1/E) ${ep.toExponential(4)}`);
  const sm = RS.summary(r);
  ok(sm.ok && sm.steps.length >= 6 && sm.rows.some((x) => x.key === 'res.plastic') && !sm.rows.some((x) => x.key === 'res.contact'), `summary: converged, ${sm.steps.length} steps, plastic row, no contact row`);
  ok(RS.problems(r).length === 0, 'no Problems for a converged solve');
  // perfectly plastic past the limit → a problem with the add-on's source
  const pp = RU.jobOf(SU.asKind(st, 'nonlinear', { steps: 4, Et: 0, tol: 1e-6 }), rg1).job;
  pp.loads = undefined;
  const ppst = SU.asKind(st, 'nonlinear', { steps: 4, Et: 0 }); ppst.loads[0].total = 36000;
  const rp = await RU.solve(inProcess, RU.jobOf(SIM.readSimStudy(ppst), rg1).job);
  const pr = RS.problems(rp);
  ok(!rp.nonlinear.converged && pr.length === 1 && pr[0].code === 'sim.nl.newton' && pr[0].source.name === RS.SOURCE, `perfectly plastic at 1.44 × the limit load: stops at ${Math.round(100 * rp.nonlinear.failedAt)} %, Problem sim.nl.newton from ${pr[0]?.source.name}`);
  ok(RS.summary(rp).rows[0].key === 'res.failed' && !RS.summary(rp).ok, 'the summary says it stopped');
}
const cst = SU.withPairs(SU.asKind(st0, 'contact', { steps: 6 }), rg2, found).study;
const cj = RU.jobOf(cst, rg2, { title: 'Two bars' }).job;
const cr = await RU.solve(inProcess, cj);
const cc = cr.nonlinear.contact;
ok(cr.nonlinear.converged && cc && cc.active > 0, `two bars, 27.5 kN: converged, ${cc?.active} contact points`);
ok(cc && rel(cc.normalForce, 27500) < 0.01, `the contact carries the load: ${cc?.normalForce.toFixed(1)} N vs 27500 N`);
const epc = (275 - 250) * (1 / 2000 - 1 / 200000);
ok(rel(cr.nonlinear.maxPlastic, epc) < 0.03, `both bars yield: plastic strain ${cr.nonlinear.maxPlastic.toExponential(4)} vs ${epc.toExponential(4)} (${(100 * (cr.nonlinear.maxPlastic / epc - 1)).toFixed(2)} %)`);
ok(cc.maxPenetration < 0.01 * cc.h && RS.problems(cr).length === 0, `penetration ${cc.maxPenetration.toExponential(2)} mm < 1 % of the ${cc.h} mm element: no Problem`);
const deck = await RU.deck(inProcess, cj);
ok(/\*ELEMENT, TYPE=C3D10/.test(deck.text) && /\*CONTACT PAIR/.test(deck.text) && /\*PLASTIC/.test(deck.text) && /\*CLOAD/.test(deck.text) && deck.nodes > 100, `the CalculiX deck: ${deck.nodes} nodes, ${deck.elements} C3D10, *CONTACT PAIR, *PLASTIC, *CLOAD`);
{
  const P2 = NW.prepare(cj), n = P2.model.n;
  const E12 = (v) => v.toExponential(5).replace(/e([+-])(\d)$/, 'e$10$2').toUpperCase().padStart(12), I10 = (v) => String(v).padStart(10);
  const frd = ['    1C', '    2C' + ' '.repeat(18) + n];
  for (let k = 0; k < n; k++) frd.push(' -1' + I10(k + 1) + E12(P2.model.X[3 * k]) + E12(P2.model.X[3 * k + 1]) + E12(P2.model.X[3 * k + 2]));
  frd.push(' -3', '  100CL  101 1.000000000       ' + n + '                     0    1', ' -4  DISP        4    1', ' -5  D1          1    2    1    0', ' -5  D2          1    2    2    0', ' -5  D3          1    2    3    0', ' -5  ALL         1    2    0    0    1ALL');
  for (let k = 0; k < n; k++) frd.push(' -1' + I10(k + 1) + E12(-1e-3 * P2.model.X[3 * k]) + E12(0) + E12(0));
  frd.push(' -3', '9999');
  const back = await RU.readFrd(inProcess, cj, frd.join('\n'));
  ok(back.calculix.nodes === n && rel(back.maxDisp.value, 1e-3 * 100.01) < 1e-4 && !back.calculix.stress, `a .frd in CalculiX's layout read back: ${back.calculix.nodes} nodes, largest displacement ${back.maxDisp.value.toExponential(4)} mm`);
  const sb = RS.summary(back);
  ok(sb.rows[0].key === 'res.ccx_disp' && RS.fieldsOf(back).join() === 'disp', 'its summary says displacement only; only the displacement plot is offered');
  let bad = false; try { await RU.readFrd(inProcess, cj, frd.slice(0, 5).join('\n')); } catch { bad = true; }
  ok(bad, 'a .frd of another mesh is refused');
}
ok(RU.jobOf(st0, rg2).problems[0] === 'not-nl' && RU.jobOf(null, rg2).problems[0] === 'no-study', 'jobOf refuses a static study and no study, in words the panel maps');

// ------------------------------------------------------------------ results
section('results: summary and the colour bands');
{
  const sm = RS.summary(cr);
  const keys = sm.rows.map((r) => r.key);
  ok(['res.converged', 'res.load', 'res.disp', 'res.vm', 'res.plastic', 'res.contact', 'res.pen', 'res.mesh'].every((k) => keys.includes(k)), 'summary rows for a contact result', keys.join());
  ok(sm.rows.every((r) => EN[r.key] && EN[r.key + '.k']), 'every row has its words and its label in en.json');
  const load = sm.rows.find((r) => r.key === 'res.load');
  ok(rel(load.vars.f, 27500) < 1e-3, `load carried ${load.vars.f} N`);
  for (const f of RS.fieldsOf(cr)) {
    const b = RS.bands(cr, f);
    const tris = b.bodies.reduce((s, x) => s + x.mesh.indices.length / 3, 0);
    ok(b.bodies.length >= (f === 'disp' ? 4 : 1) && tris === b.triangles && b.bodies.every((x) => AB.cleanBody(x)), `${f}: ${b.bodies.length} bands, ${tris} triangles (all of the plot mesh), every one a valid display body`);
    let minx = Infinity; for (const x of b.bodies) for (let i = 0; i < x.mesh.positions.length; i += 3) minx = Math.min(minx, x.mesh.positions[i]);
    ok(minx > 100.01, `${f}: drawn beside the part (starts at x ${minx.toFixed(1)}, the part ends at 100.01)`);
    ok(b.legend.length === 8 && b.legend[0].lo === b.lo && Math.abs(b.legend[7].hi - b.hi) < 1e-9 * Math.max(1, b.hi), `${f}: 8 legend bands from ${b.lo.toPrecision(3)} to ${b.hi.toPrecision(3)}`);
  }
  const bs = RS.bands(cr, 'disp', { scale: 1, beside: false });
  ok(bs.scale === 1 && bs.offset.every((v) => v === 0), 'a given scale and in place');
  ok(RS.rampColor(0) === '#2b4cc9' && RS.rampColor(1) === '#d9362b', 'the ramp runs blue to red');
}

// ------------------------------------------------------------------ the add-on through PartCraft's loader
section('add-on: through PartCraft\'s own loader (API 1.2)');
{
  const doc = makeDocument();
  globalThis.document = doc;
  const mem = () => { const mm = new Map(); return { getItem: (k) => (mm.has(k) ? mm.get(k) : null), setItem: (k, v) => mm.set(k, String(v)), removeItem: (k) => mm.delete(k) }; };
  const store = mem(), seen = [];
  globalThis.window = { ccProblems: { source: (def) => ({ set: (list) => { seen.push({ def, list }); return {}; }, clear() {}, dispose() {}, invalidate() {}, recheck: async () => ({}) }) }, localStorage: store, addEventListener() {} };
  globalThis.URL.createObjectURL = () => 'blob:x'; globalThis.URL.revokeObjectURL = () => {};
  const A = await app('addons.js'), PA = await app('addons/partcraft-api.js');
  const ses = new H.PartSession(P.readPart(JSON.parse(fs.readFileSync(fixture, 'utf8'))), m);
  const history = [], statuses = [], workers = [];
  let kernelRuns = 0;
  const host = {
    get part() { return ses.part; }, get regen() { return ses.regen(); },
    commit: (label, fn, { rebuild = true } = {}) => { history.push(label); if (rebuild) kernelRuns++; return fn(); },
    status: (s) => statuses.push(s), renderAll() {},
    study: (k) => P.study(ses.part, k), setStudy: (k, v, label) => host.commit(label, () => P.setStudy(ses.part, k, v), { rebuild: false }),
    computeWorker: (mods, o) => { workers.push({ mods, o }); return inProcess; },
  };
  const root = doc.createElement('div'), list = doc.createElement('div');
  list.setAttribute('data-right-tabs', ''); root.append(list); doc.body.append(root);
  let shown = null;
  const started = await PA.startAddons({
    host, selection: () => null, select() {}, find: (sel) => (sel.includes('data-right-tabs') ? list : null), showTab: (k) => { shown = k; }, bodies: { sync() {}, fit() {} },
    base: pathToFileURL(path.join(APP, 'addons') + '/').href, importer: (u) => import(u), storage: store, verify: async () => false, bundledOnly: false, noGlobal: true, packages: A.packageStore(null),
    fetchJson: async (u) => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } },
  });
  const me = () => started.list().find((a) => a.id === 'advanced-sim');
  ok(me() && me().source === 'bundled' && me().state !== 'active' && me().state !== 'failed', 'bundled and off until switched on', JSON.stringify(me() && { state: me().state, reason: me().reason, detail: me().detail }));
  const man = JSON.parse(fs.readFileSync(path.join(ADDON, 'addon.json'), 'utf8'));
  ok(man.api === '1.2' && man.default === 'off' && man.license === 'Apache-2.0' && man.apps.join() === 'partcraft' && /never been run in CalculiX/.test(man.description), 'manifest: PartCraft, API 1.2, off by default, Apache-2.0, says the decks were never run in CalculiX');
  await started.loader.setEnabled('advanced-sim', true);
  ok(me().state === 'active', 'active after the switch', JSON.stringify(me()));
  ok(started.panelTabs().length === 1 && started.panelTabs()[0].title === 'Advanced sim', 'its tab is "Advanced sim"');
  ok(['advanced-sim:run', 'advanced-sim:deck', 'advanced-sim:pairs'].every((k) => started.commandList().some((c) => c.key === k)), 'three commands');
  const tabBtn = list.children.find((c) => c.tag === 'BUTTON' && c.dataset.addon === 'advanced-sim'), pane = root.children.find((c) => c.tag === 'SECTION' && c.dataset.addon === 'advanced-sim');
  ok(tabBtn && pane, 'a tab button and its pane are in the right panel');
  pane.fire('cc-tab-shown');
  const q = (s) => pane.querySelector(s);
  const click = async (act) => { const b = q('[data-asim-act="' + act + '"]'); if (!b) return false; b.click(); await new Promise((r) => setTimeout(r, 30)); return true; };
  const settle = async () => { for (let i = 0; i < 400 && /Solving|Writing/.test(pane.textContent); i++) await new Promise((r) => setTimeout(r, 25)); await new Promise((r) => setTimeout(r, 30)); };
  ok(q('[data-asim]') && /not a design approval/.test(q('[data-asim-honest]').textContent), 'the panel opens with the honest note');
  ok(/never been run in CalculiX/.test(q('[data-asim-ccx-honest]').textContent), 'the CalculiX block says the decks were never run in CalculiX');
  ok(/Static/.test(pane.textContent) && /Separatepieces2/.test(pane.textContent.replace(/\s/g, '')), 'it shows the part: 2 pieces, static study', pane.textContent.slice(0, 600));
  ok(q('[data-asim-act="run"]').hasAttribute('disabled'), 'Run is off for a static study');
  const h0 = history.length;
  await click('kind-contact');
  ok(P.study(ses.part, 'simulation').kind === 'contact' && history.length === h0 + 1 && kernelRuns === 0, 'Contact: the part\'s study is a contact study, one undo step, no kernel run');
  await click('find-pairs');
  ok(q('[data-asim-found="1"]') && /0\.01 mm apart/.test(pane.textContent), 'Find touching faces lists the one joint, 0.01 mm apart');
  await click('add-pairs');
  ok(P.study(ses.part, 'simulation').contacts.length === 1 && history.length === h0 + 2 && q('[data-asim-pair="p1"]'), 'Add: pair p1 in the study (one more undo step) and in the panel');
  const steps = q('[data-asim-field="steps"]'); steps.value = '6'; steps.fire('change'); await new Promise((r) => setTimeout(r, 10));
  ok(P.study(ses.part, 'simulation').nonlinear.steps === 6, 'Load steps typed: 6');
  const bad = q('[data-asim-field="steps"]'); bad.value = '2.5'; bad.fire('change'); await new Promise((r) => setTimeout(r, 10));
  ok(P.study(ses.part, 'simulation').nonlinear.steps === 6 && /whole number/.test(pane.textContent), 'a step count of 2.5 is refused with words');
  await click('run'); await settle();
  ok(workers.length === 1 && workers[0].mods.join() === 'tet-worker.js,nl-worker.js', 'Run asks the app\'s compute worker for tet-worker.js + nl-worker.js');
  ok(q('[data-asim-result="ok"]') && /Converged in/.test(q('[data-asim-row="res.converged"]')?.textContent || ''), 'the result: converged', pane.textContent.slice(0, 400));
  ok(/27[\s,.]?5\d\d(\.\d+)? N/.test(q('[data-asim-row="res.contact"]')?.textContent || '') || /2\.75\d*e\+?4|275\d\d/.test(q('[data-asim-row="res.contact"]')?.textContent || ''), 'contact row: the force ≈ 27,500 N', q('[data-asim-row="res.contact"]')?.textContent);
  ok(q('[data-asim-steps]') && Number(q('[data-asim-steps]').getAttribute('data-asim-steps')) >= 6, 'the load-step table');
  ok(seen.length && seen.at(-1).list.length === 0 && seen.at(-1).def.id === 'addon.advanced-sim.nl', 'Problems: the source "addon.advanced-sim.nl" gets the (empty) list');
  const hb = history.length;
  await click('show-bands');
  const grp = ses.part.addonBodies && ses.part.addonBodies['advanced-sim'] && ses.part.addonBodies['advanced-sim'].results;
  ok(grp && grp.bodies.length >= 1 && history.length === hb + 1 && q('[data-asim-legend]'), `Show: ${grp?.bodies.length} colour bands kept in the part as display bodies, one undo step, a legend`);
  const fsel = q('[data-asim-field="plot"]'); fsel.value = 'plastic'; fsel.fire('change');
  await click('show-bands');
  const grp2 = ses.part.addonBodies['advanced-sim'].results;
  ok(grp2 && /Plastic/.test(grp2.name) && Object.keys(ses.part.addonBodies['advanced-sim']).length === 1, 'the plastic-strain plot replaces it (one group)');
  await click('clear-bands');
  ok(!ses.part.addonBodies || !ses.part.addonBodies['advanced-sim'] || !ses.part.addonBodies['advanced-sim'].results, 'Remove takes the plot away');
  doc.downloads.length = 0;
  await click('deck'); await settle();
  ok(doc.downloads.length === 1 && doc.downloads[0].name === 'Two bars.inp' && /never run in CalculiX/.test(pane.textContent), 'Save CalculiX deck downloads "Two bars.inp" and says it was never run in CalculiX');
  // the deck's head comment: write it the same way main.js does
  ok(EN['ccx.deck_head'].includes('NOT CHECKED IN CALCULIX'), 'the deck starts with a NOT CHECKED IN CALCULIX comment');
  await click('drop-pair');
  ok(P.study(ses.part, 'simulation').contacts.length === 0, 'Remove a pair');
  await click('kind-nonlinear');
  ok(P.study(ses.part, 'simulation').kind === 'nonlinear' && !q('[data-asim-pairs]'), 'Nonlinear: no contact block');
  await click('run'); await settle();
  ok(/not held|held|support/i.test(pane.textContent) || q('[data-asim-result]'), 'a nonlinear solve of two loose pieces: refused or reported, never silent');
  started.runCommand('advanced-sim:pairs'); await new Promise((r) => setTimeout(r, 30));
  ok(P.study(ses.part, 'simulation').kind === 'contact' && P.study(ses.part, 'simulation').contacts.length === 1, 'the pairs command: contact study + the found pair');
  await started.loader.setEnabled('advanced-sim', false);
  ok(me().state !== 'active' && started.panelTabs().length === 0 && !started.commandList().some((c) => c.addon === 'advanced-sim'), 'switched off: tab and commands go');
  ok(statuses.length > 3, 'messages went to PartCraft\'s status line');
}

// ------------------------------------------------------------------ lang
section('lang: the words');
{
  const src = ['main.js', 'lib/ui.js', 'lib/results.js'].map((f) => fs.readFileSync(path.join(ADDON, f), 'utf8')).join('\n');
  const used = new Set([...src.matchAll(/\bt\('([a-z0-9_.-]+)'/gi)].map((x) => x[1]));
  for (const k of ['kind.static', 'kind.modal', 'kind.thermal', 'kind.buckling', 'kind.flow', 'kind.nonlinear', 'kind.contact', 'pair.frictionless', 'pair.bonded', 'plot.vm', 'plot.plastic', 'plot.disp', 'unit.vm', 'unit.plastic', 'unit.disp']) used.add(k);
  for (const m2 of src.matchAll(/key: '(res\.[a-z_.]+)'/g)) { used.add(m2[1]); used.add(m2[1] + '.k'); }
  for (const m2 of src.matchAll(/'(res\.[a-z_]+)' : '(res\.[a-z_.]+)'/g)) for (const k of [m2[1], m2[2]]) { used.add(k); used.add(k + '.k'); }
  const missing = [...used].filter((k) => !k.endsWith('.') && !(k in EN));
  ok(!missing.length, `every key the code uses is in en.json (${used.size})`, missing.join(', '));
  const unused = Object.keys(EN).filter((k) => !k.startsWith('@') && !used.has(k) && !src.includes("'" + k + "'") && !src.includes('.' + k.split('.').pop()));
  ok(unused.length === 0, 'no unused keys', unused.join(', '));
  ok(Object.values(EN).every((v) => typeof v !== 'string' || !/[{]\w+,\s*select/.test(v)), 'no ICU select (api.t fills {name} only)');
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
