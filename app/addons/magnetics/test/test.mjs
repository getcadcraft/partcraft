#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test.mjs — the Magnetics add-on's Node tests (0.8 SG.7+, session `addons-finish-magnetics`). The solver (magnet.js), the mesher (magnetmesh.js)
 * and the study's job (magnet-study.js) are PartCraft's and tested there (tools/partcraft-test/test-sim08.mjs, tools/magnet-test/mesh.mjs,
 * tools/partcraft-test/test-magnet-study.mjs); these tests are for what the add-on adds: the example devices against their closed-form answers,
 * the read-outs (region means, flux lines, the hand comparison), the display bodies, the exports, and the add-on through PartCraft's own loader
 * with its panel driven like a person would.
 *   node public_html/assets/apps/partcraft/dev/addons/magnetics/test/test.mjs [--verbose]
 */
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { makeDocument } from './fake-dom.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ADDON = path.resolve(HERE, '..');
const APP = path.resolve(ADDON, '../..');
const VERBOSE = process.argv.includes('--verbose');
const mine = (f) => import(pathToFileURL(path.join(ADDON, f)).href);
const app = (f) => import(pathToFileURL(path.join(APP, f)).href);
const EN = JSON.parse(fs.readFileSync(path.join(ADDON, 'lang/en.json'), 'utf8'));

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok   ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const section = (s) => console.log('\n' + s);
const near = (a, b, rel) => Math.abs(a - b) <= rel * Math.abs(b);
const MU0 = 4e-7 * Math.PI;

const i18n = await app('i18n.js');
i18n.init({ locale: 'en', strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const W = await app('phys-worker.js');
const AB = await app('addons/addon-bodies.js');
const T = await mine('lib/templates.js'), St = await mine('lib/study.js'), R = await mine('lib/results.js'), Bd = await mine('lib/bodies.js');
const say = (k, v) => String(EN[k] ?? k).replace(/\{(\w+)\}/g, (_, n) => (v && v[n] !== undefined ? v[n] : '{' + n + '}'));
const solve = async (job) => W.magnetSolve(job);
const run = async (o, part = { features: [] }) => { const st = St.cleanStudy(o); return St.runStudy(St.setupOf(st, part, { say }), st, solve); };

section('Examples: geometry and the study as saved');
{
  for (const id of T.TEMPLATE_IDS) {
    const b = T.build(id, {});
    ok(b.loops.length === b.specs.length && b.loops.length === b.names.length && b.loops.every((l) => l.length >= 3 && l.every((p) => p.every(Number.isFinite))), `${id}: one spec and one name per closed profile (${b.loops.length})`);
  }
  const c = T.build('ccore', { w: 10, gap: 999, tk: 1e9 });
  ok(c.params.w === 30 && c.params.gap === 50 && c.params.tk <= (30 - 6) / 2, 'parameters are clamped to their range, the iron no thicker than the core allows', JSON.stringify(c.params));
  const bad = St.cleanStudy({ source: 'x', template: '../etc', pad: 3, fine: 7, depth: -5, flux: 1e9, specs: { 'a b': { role: 'iron' }, 't:ccore:0': { role: 'plasma', mur: -4, br: 99 } }, show: { field: 'yes', flux: false } });
  ok(bad.source === 'template' && bad.template === 'ccore' && bad.pad === 1 && bad.fine === 1 && bad.depth === 0.001 && bad.flux === 60, 'a hostile saved study is cleaned: unknown source/template/pad/quality fall back, depth and flux lines clamped');
  ok(!bad.specs['a b'] && bad.specs['t:ccore:0'].role === 'iron' && bad.specs['t:ccore:0'].mur === 1 && bad.specs['t:ccore:0'].br === 3, 'bad spec keys dropped, bad roles and numbers clamped');
  ok(bad.show.field === true && bad.show.flux === false, 'show switches: only booleans kept');
  ok(T.TEMPLATES.wires.pad === 4, 'the two-conductor example asks for a box four sizes wide');
}

section('Closed-form answers (the add-on\'s examples, solved by PartCraft\'s magnetSolve)');
{
  const fr = await run({ template: 'frame' });
  ok(fr.check && Math.abs(fr.check.diff) < 0.01 && fr.check.ok, `magnet in a closed iron frame: B in the magnet ${fr.check.got.toFixed(4)} T vs Br·(lm/μrm)/(lm/μrm + L/μr) = ${fr.check.want.toFixed(4)} T (${(100 * fr.check.diff).toFixed(2)} %, within 1 %)`);
  ok(near(fr.check.want, 1.2 * (20 / 1.05) / (20 / 1.05 + 220 / 1000), 1e-12), 'the frame\'s hand formula: lm 20 mm, L 220 mm, μr 1000, Br 1.2 T (P. Campbell 1994)');
  const w = await run({ template: 'wire' });
  ok(w.check && Math.abs(w.check.diff) < 0.01, `one conductor, 1000 A, radius 5 mm: B at r = 10 mm ${w.check.got.toFixed(5)} T vs μ0I/2πr = ${w.check.want.toFixed(5)} T (${(100 * w.check.diff).toFixed(2)} %, within 1 %)`);
  const inside = R.measure(w.res, { kind: 'ringB', at: [0, 0], r0: 2, r1: 3, r: 2.5, value: MU0 * 1000 * 2.5e-3 / (2 * Math.PI * 25e-6), tol: 0.05 }, w.sum);
  ok(inside && Math.abs(inside.diff) < 0.05, `inside the conductor B = μ0·I·r / 2πa² at r = 2.5 mm: ${inside.got.toFixed(5)} vs ${inside.want.toFixed(5)} T (${(100 * inside.diff).toFixed(2)} %, within 5 %: a ring 1 mm wide on a coarse mesh)`);
  const ws = await run({ template: 'wires', pad: 4 });
  const [a, b] = ws.sum.bodies;
  ok(ws.check && Math.abs(ws.check.diff) < 0.04 && ws.check.ok, `two conductors 40 mm apart, ±1000 A, box 4×: force ${ws.check.got.toFixed(3)} N/m vs μ0I²/2πd = ${ws.check.want.toFixed(3)} N/m (${(100 * ws.check.diff).toFixed(2)} %)`);
  ok(a.fx < 0 && b.fx > 0 && near(-a.fx, b.fx, 0.03) && Math.abs(a.fy) < 0.02 * Math.abs(a.fx), 'opposite currents repel: equal and opposite, no sideways force to speak of');
  ok(near(a.fx, a.fxPerM * 0.02, 1e-9), 'the force on the panel is the per-metre force × the depth (20 mm)');
  const ws1 = await run({ template: 'wires', pad: 1 });
  ok(ws1.check && !ws1.check.ok && ws1.check.diff < -0.2, `with a box only 1× the size the edge acts as a wall and the example says so (${(100 * ws1.check.diff).toFixed(1)} %, flagged)`);
  const cc = await run({ template: 'ccore' });
  ok(cc.check && Math.abs(cc.check.diff) < 0.05, `C-core, gap 2 mm, NI 1000, μr 2000: gap field ${cc.check.got.toFixed(4)} T vs μ0NI/(g + l/μr) = ${cc.check.want.toFixed(4)} T (${(100 * cc.check.diff).toFixed(2)} %; fringing is the difference)`);
  ok(cc.problems.some((p) => p.code === 'sim.magnet.saturation' && p.source.name === 'addon.magnetics'), 'linear iron past 2.1 T at the C\'s inner corners raises the saturation Problem, from this add-on');
  const curve = await run({ template: 'ccore', specs: { 't:ccore:0': { role: 'iron', mur: 2000, curve: '0.5 80\n1.0 200\n1.4 800\n1.7 5000\n1.9 20000' } } });
  ok(!curve.problems.some((p) => p.code === 'sim.magnet.saturation') && curve.sum.bmax < cc.sum.bmax, `with a B–H curve the iron saturates (largest |B| ${curve.sum.bmax.toFixed(2)} T instead of ${cc.sum.bmax.toFixed(2)}) and the warning goes`);
  const two = await run({ template: 'ccore', params: { gap: 4 } });
  ok(two.check.want < cc.check.want && near(two.check.got / cc.check.got, two.check.want / cc.check.want, 0.08), 'a wider gap: field falls as the circuit says (within 8 % of the ratio)');
  const kp = await run({ template: 'keeper', fine: 0.5 });
  const k = kp.sum.bodies[0];
  ok(k && k.loop === 3 && k.fy < 0 && Math.abs(k.fx) < 0.02 * Math.abs(k.fy), `holding magnet: the keeper is pulled toward the poles (Fy ${k.fy.toFixed(0)} N at 20 mm), no sideways force`);
  ok(kp.check === null && kp.problems.some((p) => p.code === 'sim.magnet.force_thin'), 'no hand formula for the keeper, and the thin-gap warning is raised');
  globalThis.__runs = { w, cc, ws };
}

section('Read-outs and exports');
{
  const { w, cc, ws } = globalThis.__runs;
  const st = cc.stats;
  ok(st.length === 3 && st[0].role === 'iron' && st[0].areaMm2 > 0 && st[0].maxB >= st[0].meanB && st.every((s) => Number.isFinite(s.meanB)), 'region stats: area, mean and largest |B| per body');
  const coreArea = 80 * 60 - (80 - 30) * (60 - 30) - 15 * 2;
  ok(near(st[0].areaMm2, coreArea, 1e-6), `the iron's area from the mesh ${st[0].areaMm2.toFixed(3)} mm² = the C's ${coreArea} mm² (the mesh follows the outline)`);
  // flux lines of one wire are circles, and between two lines flows ΔA per metre: μ0I/2π · ln(r2/r1)
  const f = R.fluxLines(w.res, 8);
  const byLevel = new Map();
  for (let i = 0; i < f.lev.length; i++) { const r = Math.hypot(f.segs[4 * i], f.segs[4 * i + 1]); if (!byLevel.has(f.lev[i])) byLevel.set(f.lev[i], []); byLevel.get(f.lev[i]).push(r); }
  ok(f.levels.length === 8 && f.segs.length > 100 && f.dA > 0 && f.lev.length === f.segs.length / 4, `8 flux lines (${f.segs.length / 4} segments), ΔA ${f.dA.toExponential(3)} Wb/m apart`);
  const rings = [...byLevel.values()].filter((g) => g.length > 10 && Math.min(...g) > 6).map((g) => g.reduce((s, x) => s + x, 0) / g.length).sort((x, y) => x - y);
  const inner = [...byLevel.values()].filter((g) => g.length > 10 && Math.max(...g) < 12);
  const spread = inner.length >= 3 && inner.every((g) => { const m = g.reduce((s, x) => s + x, 0) / g.length; return g.every((x) => Math.abs(x - m) < 0.05 * m); });
  ok(spread, inner.length + ' flux lines of one conductor are circles (every point within 5 % of its mean radius; lines near the square box edge bend to it and are left out)');
  if (rings.length >= 2) {
    const want = MU0 * 1000 / (2 * Math.PI) * Math.log(rings[1] / rings[0]);
    ok(near(f.dA, want, 0.05), `the flux between two neighboring circles: ΔA ${f.dA.toExponential(3)} vs μ0I/2π·ln(r2/r1) = ${want.toExponential(3)} Wb/m (within 5 %)`);
  } else ok(false, 'two circular flux lines outside the wire');
  const typed = R.fluxLines({ ...w.res, A: Float32Array.from(w.res.A) }, 4);
  ok(typed.segs.every(Number.isFinite) && !Number.isInteger(typed.segs[1]), 'flux lines from a Float32Array A are real numbers (no typed-array .map)');
  const csv = R.fieldCsv(cc.res), lines = csv.trim().split('\r\n');
  ok(lines.length === cc.sum.tris + 1 && lines[0].endsWith('x_mm,y_mm,region,area_mm2,Bx_T,By_T,B_T') && lines.slice(1).every((l) => l.split(',').length === 7 && l.split(',').every((v) => Number.isFinite(Number(v)))), 'field CSV: a header and one numeric row per triangle');
  const vt = R.vtk(cc.res, 'x\ny').split('\n');
  const n = cc.res.mesh.nodes.length / 2, m = cc.sum.tris;
  ok(vt[0] === '# vtk DataFile Version 3.0' && vt[1] === 'x y' && vt.includes(`POINTS ${n} double`) && vt.includes(`CELLS ${m} ${4 * m}`) && vt.includes(`CELL_DATA ${m}`) && vt.includes(`POINT_DATA ${n}`), 'VTK: header, points, triangles, B per cell and A per point with the right counts (title kept on one line)');
  ok(vt.filter((l) => l === '5').length === m, 'VTK: every cell is a triangle (type 5)');
  const sv = R.svg(cc.res, cc.loops, { top: cc.top, flux: cc.flux, legend: 'a <b> & c' });
  ok(sv.startsWith('<svg') && (sv.match(/<polygon /g) || []).length === m + 3 && /<path d="M/.test(sv) && !/<b>/.test(sv), 'SVG: every triangle, the flux lines, three outlines; the legend is escaped');
  const sm = R.summaryCsv(ws.sum, ws.stats, ws.check, ws.meta);
  ok(/^﻿quantity,value,unit/.test(sm) && /"body 1 Fx",-/.test(sm) && /"hand formula hand.wires",5,N\/m/.test(sm) && /"difference",-?\d/.test(sm), 'summary CSV: field, bodies, forces and the hand comparison');
}

section('On the part: display bodies');
{
  const { cc, ws } = globalThis.__runs;
  const out = Bd.studyBodies(cc.res, cc.meta, { frame: cc.frame, depth: 20, flux: cc.flux, forces: cc.sum.bodies, names: cc.names, show: { box: true }, say });
  const clean = AB.cleanGroup({ name: 'x', bodies: out.bodies });
  ok(out.bodies.length >= 10 && clean && clean.bodies.length === out.bodies.length, `${out.bodies.length} bodies, every one accepted by addon-bodies.js (${out.triangles} triangles)`);
  ok(out.triangles <= Bd.LIMIT && out.skipped.length === 0, 'under the viewport\'s limit; nothing left out');
  const fields = out.bodies.filter((b) => /^Field /.test(b.name)), prisms = out.bodies.filter((b) => /^Body /.test(b.name));
  ok(fields.length >= 5 && fields.reduce((s, b) => s + b.mesh.indices.length / 3, 0) === cc.sum.tris, 'the field: colour bands that together hold every triangle once');
  ok(prisms.length === 3 && prisms.every((b) => b.opacity === 0.35) && /Iron core/.test(prisms[0].name), 'three see-through bodies named in words (iron, two coils)');
  const zs = new Set(); for (const b of fields) for (let i = 2; i < b.mesh.positions.length; i += 3) zs.add(b.mesh.positions[i]);
  ok(zs.size === 1 && [...zs][0] > 20 && [...zs][0] < 21, 'on the front plane the field lies just beyond the depth (z = 20 mm + a hair), in front of the bodies');
  const box = out.bodies.find((b) => /^Air box/.test(b.name));
  const xs = []; for (let i = 0; i < box.mesh.positions.length; i += 3) xs.push(box.mesh.positions[i]);
  const lx = cc.loops.flat().map((p) => p[0]), ly = cc.loops.flat().map((p) => p[1]), sz = Math.max(Math.max(...lx) - Math.min(...lx), Math.max(...ly) - Math.min(...ly));
  ok(near(Math.min(...xs), Math.min(...lx) - sz, 0.01) && near(Math.max(...xs), Math.max(...lx) + sz + 0.003 * 3 * sz, 0.01), `the air box outline: ${sz} mm of air each side (1 × the model's size)`, [Math.min(...xs), Math.max(...xs), sz].join(' '));
  const cropped = Bd.studyBodies(cc.res, cc.meta, { frame: cc.frame, depth: 20, flux: cc.flux, top: cc.top, crop: cc.near, names: cc.names, say });
  const cf = cropped.bodies.filter((b) => /^Field /.test(b.name)), cxs = []; for (const b of cf) for (let i = 0; i < b.mesh.positions.length; i += 3) cxs.push(b.mesh.positions[i]);
  const span = cc.near[2] - cc.near[0];
  ok(cf.reduce((a, b) => a + b.mesh.indices.length / 3, 0) < cc.sum.tris && Math.min(...cxs) >= cc.near[0] - 1e-3 && Math.max(...cxs) <= cc.near[2] + 1e-3 && near(Math.max(...cxs) - Math.min(...cxs), span, 1e-6) && !cropped.bodies.some((b) => /^Air box/.test(b.name)), 'as placed by the panel: the field cut exactly to the bodies\' box grown by half their size (triangles across its edge clipped), no air box outline unless asked');
  const cl = Bd.clipRect([[0, 0], [10, 0], [0, 10]], [-1, -1, 5, 5]), clA = cl.reduce((a, p, i) => { const q = cl[(i + 1) % cl.length]; return a + (p[0] * q[1] - q[0] * p[1]) / 2; }, 0);
  ok(near(clA, 25, 1e-12) && Bd.clipRect([[20, 20], [30, 20], [20, 30]], [0, 0, 5, 5]).length === 0, 'clipRect: a triangle cut by a square keeps exactly the area inside (25 mm²); one outside vanishes');
  ok(/and more$/.test(cf.find((b) => b.color === R.fieldColour(0.95)).name) && cc.top < cc.sum.bmax, `the top color band is "${cc.top.toFixed(2)} T and more" (99th percentile; the corner peak ${cc.sum.bmax.toFixed(2)} T would darken the rest)`);
  const fw = Bd.studyBodies(ws.res, ws.meta, { frame: ws.frame, depth: 20, flux: ws.flux, forces: ws.sum.bodies, say });
  const arrows = fw.bodies.filter((b) => /^Force/.test(b.name));
  ok(arrows.length === 2 && arrows.every((b) => b.color === '#16a34a'), 'one green arrow per body whose force was asked for');
  const left = arrows[0].mesh.positions, tipX = left[18];
  ok(tipX < -20, 'the left conductor\'s arrow points left (it is pushed away)');
  const top = Bd.studyBodies(ws.res, ws.meta, { frame: Bd.frameOf({ kind: 'base', name: 'top' }), depth: 5, flux: null, show: { flux: false, forces: false, bodies: false, box: false } });
  const ys = new Set(); for (const b of top.bodies) for (let i = 1; i < b.mesh.positions.length; i += 3) ys.add(b.mesh.positions[i]);
  ok(ys.size === 1 && [...ys][0] > 5 && [...ys][0] < 6, 'on the top plane the field lies at height = depth (world Y up)');
  const fx = Bd.frameOf({ kind: 'fixed', o: [1, 2, 3], n: [0, 0, 2] });
  ok(fx && fx.o[2] === 3 && near(fx.n[2], 1, 1e-12) && Math.abs(fx.x[0] * fx.n[0] + fx.x[1] * fx.n[1] + fx.x[2] * fx.n[2]) < 1e-12, 'a fixed plane gives a frame (unit normal, x across it); a face plane gives none', JSON.stringify(fx));
  ok(Bd.frameOf({ kind: 'face', feature: 'f1' }) === null, 'a plane on a face is not placed without a rebuild (the panel says so)');
  const none = Bd.studyBodies(ws.res, ws.meta, { show: { field: false, flux: false, bodies: false, box: false, forces: false } });
  ok(none.bodies.length === 0, 'nothing ticked, nothing made');
}

section('Through PartCraft\'s add-on loader, the panel used like a person would');
{
  const doc = makeDocument();
  globalThis.document = doc;
  const mem = () => { const m = new Map(); return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k), m }; };
  const store = mem();
  globalThis.window = { localStorage: store, addEventListener() {} };
  const PT = await app('part.js'), A = await app('addons.js'), PA = await app('addons/partcraft-api.js'), SK = await app('sketch.js');
  const part = PT.newPart('Magnet test');
  const history = [], said = [];
  const calls = { sync: 0, fit: 0 };
  const host = { get part() { return part; }, regen: { mesh: null }, commit: (label, fn) => { history.push({ label, snap: JSON.stringify(part) }); return fn(); }, status: (m) => said.push(m), renderAll() {} };
  const root = doc.createElement('div'), list = doc.createElement('div');
  list.setAttribute('data-right-tabs', ''); root.append(list); doc.body.append(root);
  const started = await PA.startAddons({
    host, selection: () => null, select() {}, find: (sel) => (sel.includes('data-right-tabs') ? list : null), showTab() {}, bodies: { sync: () => { calls.sync++; }, fit: () => { calls.fit++; } },
    base: pathToFileURL(path.join(APP, 'addons') + '/').href, importer: (u) => import(u), storage: store, verify: async () => false, bundledOnly: false, noGlobal: true, packages: A.packageStore(null),
    fetchJson: async (u) => { try { return JSON.parse(fs.readFileSync(fileURLToPath(u), 'utf8')); } catch { return null; } },
  });
  let me = started.list().find((a) => a.id === 'magnetics');
  ok(me && me.state === 'off', 'Magnetics is listed and starts off ("default": "off")', JSON.stringify(me && { state: me.state, reason: me.reason }));
  await started.loader.setEnabled('magnetics', true);
  me = started.list().find((a) => a.id === 'magnetics');
  ok(me.state === 'active' && me.manifest.api === '1.1' && me.manifest.license === 'Apache-2.0', 'switched on: active, API 1.1, Apache-2.0', JSON.stringify({ state: me.state, reason: me.reason, detail: me.detail }));
  ok(started.panelTabs().some((x) => x.addon === 'magnetics' && x.title === 'Magnetics') && started.exporters().some((e) => e.id === 'magnetics:vtk'), 'a Magnetics tab and its exporters (summary CSV, VTK)');
  const pane = list.parentElement.children.find((c) => c.tag === 'SECTION' && c.dataset.addon === 'magnetics');
  pane.dispatchEvent({ type: 'cc-tab-shown' });
  const q = (s) => pane.querySelector(s);
  ok(!!q('[data-magnetics]') && q('[data-mg-template]').value === 'ccore' && pane.querySelectorAll('[data-mg-row]').length === 3, 'the tab opens on the C-core example with its three bodies');
  ok(q('[data-mg-solve]') && q('[data-mg-export="summary"]').hasAttribute('disabled') && q('[data-mg-place]').hasAttribute('disabled'), 'before a solve: Show on the part and the result exports are off');
  // pick the two-conductor example
  const sel = q('[data-mg-template]'); sel.value = 'wires'; sel.dispatchEvent({ type: 'change', target: sel });
  ok(q('[data-mg-template]').value === 'wires' && q('[data-mg-pad]').value === '4' && pane.querySelectorAll('[data-mg-row]').length === 2, 'choosing Two parallel conductors: two bodies, the air box set to 4 × by the example');
  ok(/Air box 396 × 356 mm/.test(q('[data-mg-box]').textContent), 'the air box size is shown: ' + q('[data-mg-box]').textContent.slice(0, 40));
  // a person sets the current of conductor A to 2000 A and B to −2000 A
  for (const [i, v] of [[1, 2000], [2, -2000]]) { const inp = q(`[data-mg-field="current:${i}"]`); inp.value = String(v); inp.dispatchEvent({ type: 'change', target: inp }); }
  q('[data-mg-solve]').click();
  for (let i = 0; i < 400 && !q('[data-mg-check]'); i++) await new Promise((r) => setTimeout(r, 10));
  const chk = q('[data-mg-check]');
  ok(chk && chk.getAttribute('data-mg-check-ok') === 'true' && Math.abs(Number(chk.getAttribute('data-mg-check'))) < 4, 'Solve: the force per metre against μ0I²/2πd shown and within the example\'s tolerance: ' + (chk ? chk.textContent : 'none'));
  const fxA = Number(q('[data-mg-body="1"]').getAttribute('data-mg-fx'));
  ok(near(-fxA, MU0 * 2000 * 2000 / (2 * Math.PI * 0.04) * 0.02, 0.04), `2000 A each: four times the force (${fxA.toFixed(3)} N at 20 mm depth vs ${(MU0 * 4e6 / (2 * Math.PI * 0.04) * 0.02).toFixed(3)} N)`);
  ok(!!q('[data-mg-plot]') && Number(q('[data-mg-flux]').getAttribute('data-mg-flux')) === 16, 'the field picture and 16 flux lines');
  ok(said.some((s) => /^Solved: largest \|B\|/.test(s)), 'the status line says it solved');
  // show on the part: one undo step, saved with the part
  const n0 = history.length;
  q('[data-mg-place]').click();
  const g = part.addonBodies && part.addonBodies.magnetics && part.addonBodies.magnetics.study;
  ok(g && g.bodies.length >= 10 && history.length === n0 + 1 && history.at(-1).label === 'Magnetics: show the study' && calls.fit === 1, `Show on the part: ${g ? g.bodies.length : 0} display bodies in ONE undo step labelled in words, framed`);
  ok(Number(q('[data-mg-placed]').getAttribute('data-mg-placed')) === g.bodies.length && /Show again/.test(q('[data-mg-place]').textContent), 'the panel counts them and offers Show again');
  const back = PT.readPart(PT.toJSON(part));
  ok(back.addonBodies.magnetics.study.bodies.length === g.bodies.length, 'saved with the part and read back');
  // fewer things shown
  const fl = q('[data-mg-show="flux"]'); fl.click();
  q('[data-mg-place]').click();
  ok(!part.addonBodies.magnetics.study.bodies.some((b) => /^Flux/.test(b.name)) && history.length === n0 + 2, 'untick Flux lines, Show again: replaced without them (another single step)');
  // the flux line count redraws without a solve
  const nf = q('[data-mg-nflux]'); nf.value = '6'; nf.dispatchEvent({ type: 'change', target: nf });
  ok(Number(q('[data-mg-flux]').getAttribute('data-mg-flux')) === 6, 'flux lines 6: drawn again from the same result');
  // exports
  q('[data-mg-export="vtk"]').click(); q('[data-mg-export="summary"]').click(); q('[data-mg-export="study"]').click();
  ok(doc.downloads.length === 3 && /field\.vtk$/.test(doc.downloads[0].name) && /summary\.csv$/.test(doc.downloads[1].name) && /study\.json$/.test(doc.downloads[2].name), 'downloads: ' + doc.downloads.map((d) => d.name).join(', '));
  const ex = started.exporters().find((e) => e.id === 'magnetics:summary');
  ok(/quantity,value,unit/.test(await ex.write(started.exportInput('x'))), 'File › Export through the app: the summary CSV');
  // take it off
  q('[data-mg-clear]').click();
  ok(!part.addonBodies && history.length === n0 + 3 && calls.sync >= 1, 'Take off the part: removed in one step');
  // commands
  ok(started.runCommand('magnetics:example') === true, 'the command magnetics:example runs');
  for (let i = 0; i < 400 && q('[data-mg-template]').value !== 'ccore'; i++) await new Promise((r) => setTimeout(r, 10));
  for (let i = 0; i < 400 && !(q('[data-mg-check]') && /Gap field/.test(q('[data-mg-check]').textContent)); i++) await new Promise((r) => setTimeout(r, 10));
  ok(/Gap field/.test(q('[data-mg-check]')?.textContent || ''), 'it set up and solved the C-core example');
  // the part's own sketches: a coil and an iron bar drawn on the top plane, in two sketches
  const sk1 = SK.newSketch(); SK.addRect(sk1, [-30, -5], [-20, 5]);
  const sk2 = SK.newSketch(); SK.addRect(sk2, [0, -10], [40, 10]);
  host.commit('sketches', () => { PT.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'top' }, sketch: sk1 }); PT.addFeature(part, 'sketch', { plane: { kind: 'base', name: 'top' }, sketch: sk2 }); });
  started.changed('rebuild');
  const src = q('[data-mg-source]'); src.value = 'sketches'; src.dispatchEvent({ type: 'change', target: src });
  ok(pane.querySelectorAll('[data-mg-sketch]').length === 2 && pane.querySelectorAll('[data-mg-row]').length === 2, 'This part\'s sketches: both sketches picked, one body each');
  const r1 = q('[data-mg-role="1"]'); r1.value = 'coil'; r1.dispatchEvent({ type: 'change', target: r1 });
  const c1 = q('[data-mg-field="current:1"]'); c1.value = '500'; c1.dispatchEvent({ type: 'change', target: c1 });
  const f2 = q('[data-mg-force="2"]'); f2.click();
  q('[data-mg-solve]').click();
  for (let i = 0; i < 600 && !q('[data-mg-body="2"][data-mg-fx]'); i++) await new Promise((r) => setTimeout(r, 10));
  const bar = q('[data-mg-body="2"]');
  ok(bar && Number(bar.getAttribute('data-mg-fx')) < 0, 'an iron bar next to a coil is pulled toward it (Fx ' + (bar && bar.getAttribute('data-mg-fx')) + ' N)');
  q('[data-mg-place]').click();
  const gb = part.addonBodies.magnetics.study.bodies, fb = gb.filter((b) => /^Field/.test(b.name));
  const ysk = new Set(); for (const b of fb) for (let i = 1; i < b.mesh.positions.length; i += 3) ysk.add(b.mesh.positions[i]);
  const zsk = []; for (const b of fb) for (let i = 2; i < b.mesh.positions.length; i += 3) zsk.push(b.mesh.positions[i]);
  ok(ysk.size === 1 && [...ysk][0] > 20 && Math.min(...zsk) < -10 && Math.max(...zsk) > 10, 'the result sits on the sketches\' top plane, raised by the depth (y = 20 mm + a hair), sketch y going to world −z');
  const st = JSON.parse(store.getItem('cc-addon:partcraft:magnetics:study'));
  ok(st.source === 'sketches' && Object.values(st.specs).some((s) => s.role === 'coil' && s.current === 500), 'the study is kept in the add-on\'s storage');
  await started.loader.setEnabled('magnetics', false);
  ok(!list.querySelector('[data-addon="magnetics"]') && started.list().find((a) => a.id === 'magnetics').state === 'off', 'switched off: its tab goes; the display bodies stay with the part until taken off or undone');
  delete globalThis.document; delete globalThis.window;
}

section('Language and help');
{
  const src = ['main.js', 'lib/bodies.js', 'lib/study.js', 'lib/templates.js'].map((f) => fs.readFileSync(path.join(ADDON, f), 'utf8')).join('\n');
  const used = new Set([...src.matchAll(/\b(?:t|say)\('([a-z][a-z0-9_.]*[a-z0-9_])'/g)].map((m) => m[1]));
  for (const m of src.matchAll(/'(tpl\.name\.[a-z_]+)'/g)) used.add(m[1]);
  const missing = [...used].filter((k) => !(k in EN));
  ok(missing.length === 0, `every literal language key used is in lang/en.json (${used.size})`, missing.join(', '));
  for (const pre of ['tpl.', 'param.', 'role.', 'show.', 'export.', 'box.pad.', 'hand.']) ok(Object.keys(EN).some((k) => k.startsWith(pre)), 'keys built from parts exist: ' + pre + '*');
  for (const id of T.TEMPLATE_IDS) ok(EN['tpl.' + id] && EN['tpl.' + id + '.about'] && T.TEMPLATES[id].params.every((q) => EN['param.' + q.key]), `the ${id} example is named, explained and its parameters labelled`);
  ok(/2-D/.test(EN.limits) && /eddy/.test(EN.limits) && /B–H curve/.test(EN.limits) && /not a design approval/.test(EN.limits), 'the limits line says flat only, no eddy currents, linear iron unless a curve, not an approval');
  const help = (await mine('help/help.js')).default;
  ok(help && help.addon === 'magnetics' && help.topics.length >= 3 && help.topics.every((x) => x.scope === 'addon:magnetics'), 'help compiled: ' + (help ? help.topics.map((x) => x.slug).join(', ') : 'missing'));
  const allHelp = help.topics.map((x) => x.html).join(' ');
  ok(/closed-form|hand formula/i.test(allHelp) && /2-D|flat/i.test(allHelp) && /not built/i.test(allHelp), 'the help states the checks, that it is flat, and what is not built');
  const man = JSON.parse(fs.readFileSync(path.join(ADDON, 'addon.json'), 'utf8'));
  ok(man.default === 'off' && man.license === 'Apache-2.0' && man.api === '1.1' && fs.readFileSync(path.join(ADDON, 'LICENSE'), 'utf8').includes('Apache License'), 'manifest: off by default, Apache-2.0 with its LICENSE, API 1.1');
  const idx = JSON.parse(fs.readFileSync(path.join(APP, 'addons/index.json'), 'utf8'));
  ok(idx.addons.includes('magnetics'), 'registered in PartCraft\'s addons/index.json');
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
