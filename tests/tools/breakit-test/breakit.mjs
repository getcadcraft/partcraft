#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** breakit.mjs — Break it (EG.31): the load-factor search, escape routes, a part's findings, Problems; then a frame (a beam and a portal) by hand. */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const load = (f) => import(pathToFileURL(path.join(ROOT, f)).href);
let pass = 0, fail = 0;
const ok = (c, m) => { if (c) pass++; else { fail++; console.log('  FAIL ' + m); } };
const close = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300);
const B = await load('lib/study/breakit.js');

// ---- reserve: the factor at which utilisation reaches 1
{
  const lin = await B.reserve(async (l) => 0.4 * l);
  ok(lin.bounded && close(lin.factor, 2.5, 2e-4), `linear u = 0.4 λ → λ* 2.5 (got ${lin.factor.toFixed(5)}, ${lin.evals} solves)`);
  const sq = await B.reserve(async (l) => 0.25 * l * l);
  ok(close(sq.factor, 2, 2e-4), `u = λ²/4 → λ* 2 (got ${sq.factor.toFixed(5)})`);
  const over = await B.reserve(async (l) => 1.6 * l);
  ok(close(over.factor, 1 / 1.6, 2e-4) && over.factor < 1, `already over (u(1) = 1.6) → λ* below 1: ${over.factor.toFixed(5)} (1/1.6 = 0.625)`);
  const never = await B.reserve(async (l) => 0.001 * l, { max: 64 });
  ok(never.factor === Infinity && !never.bounded && never.atLeast >= 32, `u = 0.001 λ never fails up to 64 → "holds at least ${never.atLeast}"`);
  const slow = await B.reserve(async (l) => 0.4 * l, { maxEvals: 3 });
  ok(slow.evals <= 4, `the number of solves is bounded (${slow.evals})`);
  let calls = 0; const c = await B.reserve(async (l) => { calls++; return 0.01 * l; }, { cancelled: () => calls >= 3 });
  ok(c.cancelled && c.factor === null, 'a cancelled search says so and gives no factor');
  let threw = false; try { await B.reserve(async () => NaN); } catch (e) { threw = /number/.test(e.message); }
  ok(threw, 'a check that gives no number is an error, not a silent pass');
}

// ---- escape routes (a hand graph): rooms A, B, C, hall H, D with no door; exit through H (900), second exit from C (850 after the add)
{
  const rooms = ['A', 'B', 'C', 'H', 'D'].map((id) => ({ id, label: 'Room ' + id }));
  const doors = [{ id: 'dAH', a: 'A', b: 'H', width: 800 }, { id: 'dBH', a: 'B', b: 'H', width: 700 }, { id: 'dHx', a: 'H', b: null, width: 900 }, { id: 'dCB', a: 'C', b: 'B', width: 600 }];
  const rule = { min: 813, id: 'door.egress.width.min', clause: 'R311.2' };
  const r = B.routes({ rooms, doors }, rule), by = Object.fromEntries(r.rows.map((x) => [x.room, x]));
  ok(by.H.bottleneck === 900 && !by.H.failing, 'hall: out by its 900 mm door, meets 813');
  ok(by.A.bottleneck === 800 && by.A.door === 'dAH' && by.A.failing, 'A: the widest way out is 800 mm (door A–H), 13 mm under the rule');
  ok(by.B.bottleneck === 700 && by.B.door === 'dBH', 'B: 700 mm');
  ok(by.C.bottleneck === 600 && by.C.door === 'dCB' && by.C.path.join() === 'dCB,dBH,dHx', `C: 600 mm through B (path ${by.C.path.join(' → ')})`);
  ok(by.D.reachable === false && by.D.failing, 'D has no door: no way out, fails whatever the rule says');
  ok(r.worst.room === 'D' && r.failing.length === 4, 'worst first: the room with no way out; four rooms fail');
  const r2 = B.routes({ rooms, doors: [...doors, { id: 'dCx', a: 'C', b: null, width: 850 }] }, rule);
  const c2 = r2.rows.find((x) => x.room === 'C');
  ok(c2.bottleneck === 850 && c2.door === 'dCx' && !c2.failing, 'a second exit from C (850 mm) replaces the route through B');
  const none = B.routes({ rooms: [{ id: 'A' }], doors: [] }, rule);
  ok(none.failing.length === 1, 'no doors at all: the only room has no way out');
}

// ---- a part
{
  const f = B.partFindings({ kind: 'static', minSafety: 2.5, maxVm: { value: 100, at: [1, 2, 3] }, material: { yield: 250 } });
  ok(f.length === 1 && close(f[0].factor, 2.5, 1e-12) && close(f[0].util, 0.4, 1e-12) && !f[0].failing && f[0].where.at.join() === '1,2,3', 'static: yield at 2.5× the load (σy/σvm), located');
  const g = B.partFindings({ kind: 'static', minSafety: 0.8, maxVm: { value: 312.5 } });
  ok(g[0].failing && g[0].factor === 0.8, 'already past yield (safety 0.8) fails');
  const b = B.partFindings({ kind: 'buckling', factors: [0.6, 1.4] });
  ok(b.length === 1 && b[0].kind === 'buckling' && b[0].failing && b[0].factor === 0.6, 'buckling factor 0.6 < 1 fails');
  ok(B.partFindings({ kind: 'modal', freqs: [1] }).length === 0 && B.partFindings(null).length === 0, 'other studies and no result give no findings');
}

// ---- ranking and Problems
{
  const fs = [
    { id: 'm1', kind: 'member', subject: { kind: 'member', id: 'm1' }, util: 0.5, factor: 2, failing: false },
    { id: 'm2', kind: 'member', subject: { kind: 'member', id: 'm2' }, util: 1.2, factor: 0.83, failing: true, clause: 'AISC 360 F2', pack: { id: 'x', name: 'Pack', clause: 'R1' } },
    { id: 'm3', kind: 'member', subject: { kind: 'member', id: 'm3', label: 'B3' }, util: 0.95, factor: 1.05, failing: false },
    { id: 'm4', kind: 'member', subject: { kind: 'member', id: 'm4' }, util: 0.2, factor: 5, failing: false }];
  const r = B.rank(fs);
  ok(r.map((x) => x.id).join() === 'm2,m3,m1,m4', 'rank: failing first, then the highest utilisation: ' + r.map((x) => x.id).join());
  const p = B.findingProblems(fs, { source: 'detailcraft.breakit' });
  ok(p.length === 2 && p[0].severity === 'error' && p[1].severity === 'warning', 'Problems: the failing one is an error, the one at 95 % a warning, the rest are left out');
  ok(p[0].code === 'breakit.member' && p[0].msg.key === 'breakit.p.member.fail' && p[0].about[0].id === 'm2' && p[0].source.kind === 'regulation' && p[0].source.pack.clause === 'R1', 'a regulation finding carries its pack and clause');
  ok(p[1].msg.key === 'breakit.p.member' && p[1].msg.vars.subject === 'B3', 'warning key and the readable name');
  const calm = B.findingProblems([fs[0], fs[3]], {});
  ok(calm.length === 1 && calm[0].severity === 'note' && calm[0].about[0].id === 'm1', 'when everything holds, the weakest is one note');
  ok(B.summaryOf(fs).failing === 1 && B.summaryOf(fs).weakest.id === 'm2', 'summary names what gives way first');
}

// ---- frames by hand
const FM = await load('lib/frame/frame-model.js'), FS = await load('lib/frame/frame-solve.js'), C = await load('lib/frame/frame-combos.js'), D = await load('lib/frame/frame-design.js'),
  A = await load('lib/frame/frame-design-aisc.js'), FB = await load('lib/frame/frame-breakit.js'), SH = await load('lib/shapes/sections.js');
const secOf = (name) => { const p = SH.findSection(name); return { p, s: FM.sectionOf({ ...p, loops: SH.outline(p, 16) }), shape: { kind: 'I', d: p.d, bf: p.bf, tw: p.tw, tf: p.tf, r: p.r } }; };
const design = { code: 'asce-aisc', grade: 'A992', lbRatio: 1 };
function beam(wd, wl, span = 6000) {
  const { s, shape } = secOf('W16x26');
  const cases = [{ id: 'd', name: 'Dead', kind: 'dead', selfWeight: 0, loads: [{ type: 'udl', member: 'm', dir: 'Z', w: -wd }] }, { id: 'l', name: 'Live', kind: 'live', selfWeight: 0, loads: [{ type: 'udl', member: 'm', dir: 'Z', w: -wl }] }];
  const gen = C.generateCombos('asce-aisc', cases);
  const raw = { format: 'cadcraft-frame', version: 1, nodes: [{ id: 'a', x: 0, y: 0, z: 0 }, { id: 'b', x: span, y: 0, z: 0 }], materials: [{ id: 'g', name: 'steel', ...FM.STEEL }], sections: [{ id: 's', name: 'W16x26', A: s.A, Iy: s.Iy, Iz: s.Iz, J: s.J, shape }],
    members: [{ id: 'm', i: 'a', j: 'b', section: 's', material: 'g', roll: 0, rel: { i: Array(6).fill(false), j: Array(6).fill(false) } }],
    supports: [{ node: 'a', fix: [true, true, true, true, false, false] }, { node: 'b', fix: [false, true, true, false, false, false] }], cases, combos: gen.combos };
  return { model: FM.cleanFrame(raw).model, s, shape };
}
{
  const { model, s, shape } = beam(2, 4);
  const res = await FB.breakFrame(model, design, { B });
  ok(res.ok && res.combo && /1\.2.*1\.6/.test(res.combo.name), `simple beam: 1.2D + 1.6L governs (${res.combo && res.combo.name})`);
  const wu = 1.2 * 2 + 1.6 * 4, Mu = wu * 6000 ** 2 / 8, Vu = wu * 6000 / 2;
  const p = A.props(shape, s), fl = A.flexureMajor(p, 345, 200000, 6000, 12.5 / 11);
  const m = res.members[0];
  ok(close(m.util, Mu / fl.phiMn, 1e-6) && m.check.id === 'bending-y', `weakest member: bending-y ${m.util.toFixed(4)} = Mu ${(Mu / 1e6).toFixed(2)} kN·m / φMn ${(fl.phiMn / 1e6).toFixed(2)} kN·m`);
  const lam = fl.phiMn / Mu;
  ok(res.reserve.bounded && close(res.reserve.factor, lam, 2e-3), `reserve: λ* = φMn/Mu = ${lam.toFixed(4)} by hand, ${res.reserve.factor.toFixed(4)} from ${res.reserve.evals} solves of the real solver`);
  // independent check: the beam at 0.99 λ* holds, at 1.01 λ* fails
  const at = (l) => { const m2 = { ...model, combos: model.combos.filter((c) => c.id === res.combo.id).map((c) => ({ ...c, factors: c.factors.map((x) => ({ ...x, f: x.f * l })) })) }; return D.checkFrame(m2, FS.solveFrame(m2), design).max; };
  ok(at(0.99 * lam) < 1 && at(1.01 * lam) > 1, `at 0.99 λ* utilisation ${at(0.99 * lam).toFixed(4)}, at 1.01 λ* ${at(1.01 * lam).toFixed(4)}`);
  ok(!res.findings.some((f) => f.failing) && res.highlight.some((h) => h.kind === 'member' && h.id === 'm' && h.level === 'weakest'), 'nothing fails as loaded; the weakest member is marked');
  // connections: end shear of the beam against a stated resistance
  const cn = [{ id: 'c1', label: 'End plate A', ends: [{ member: 'm', end: 'i' }], shear: 60e3 }, { id: 'c2', label: 'Unknown', ends: [{ member: 'm', end: 'j' }] }];
  const r2 = await FB.breakFrame(model, design, { B, connections: cn });
  ok(close(r2.connections[0].V, Vu, 1e-6) && close(r2.connections[0].util, Vu / 60e3, 1e-6), `connection: end shear ${(r2.connections[0].V / 1e3).toFixed(3)} kN = wu L/2 ${(Vu / 1e3).toFixed(3)} kN; ${(100 * r2.connections[0].util).toFixed(1)} % of 60 kN`);
  ok(r2.notChecked.join() === 'c2', 'a connection with no stated resistance is listed as not checked');
  const r3 = await FB.breakFrame(model, design, { B, connections: [{ id: 'c1', ends: [{ member: 'm', end: 'i' }], shear: 20e3 }] });
  ok(r3.findings.find((f) => f.kind === 'connection').failing && r3.highlight.some((h) => h.kind === 'connection' && h.level === 'fail'), 'a 20 kN joint under a 63 kN shear fails and is marked');
}
{
  const { model } = beam(5, 10);   // heavy: over as loaded
  const res = await FB.breakFrame(model, design, { B });
  ok(res.ok && res.members[0].util > 1 && res.findings.some((f) => f.kind === 'member' && f.failing) && res.reserve.factor < 1, `over as loaded: utilisation ${res.members[0].util.toFixed(3)}, load factor ${res.reserve.factor.toFixed(3)} < 1`);
  ok(close(res.reserve.factor * res.members[0].util, 1, 5e-3), `and λ* × utilisation = 1 (${(res.reserve.factor * res.members[0].util).toFixed(4)}): bending is linear in the load`);
  ok(B.findingProblems(res.findings, { source: 'x' })[0].severity === 'error', 'it becomes an error in Problems');
  ok((await FB.breakFrame(model, { code: 'none' }, { B })).error === 'no-code', 'no design code: refuses, and says why');
  ok((await FB.breakFrame({ ...model, combos: [] }, design, { B })).error === 'no-combos', 'no combinations: refuses');
}
{ // a portal frame: beam pinned to two columns (hand: each column carries wL/2 in axial compression; the beam is simply supported)
  const { s, shape } = secOf('W16x26'), W = secOf('W12x50');
  const L = 6000, H = 3500, w = 8;
  const cases = [{ id: 'd', name: 'Dead', kind: 'dead', selfWeight: 0, loads: [{ type: 'udl', member: 'b', dir: 'Z', w: -w }] }, { id: 'w', name: 'Wind', kind: 'wind', selfWeight: 0, loads: [{ type: 'node', node: 'c', F: [20e3, 0, 0, 0, 0, 0] }] }];
  const gen = C.generateCombos('asce-aisc', cases);
  const rel = (pin) => ({ i: Array(6).fill(false), j: pin ? [false, false, false, false, true, true] : Array(6).fill(false) });
  const raw = { format: 'cadcraft-frame', version: 1,
    nodes: [{ id: 'a', x: 0, y: 0, z: 0 }, { id: 'c', x: 0, y: 0, z: H }, { id: 'd', x: L, y: 0, z: H }, { id: 'e', x: L, y: 0, z: 0 }],
    materials: [{ id: 'g', name: 'steel', ...FM.STEEL }],
    sections: [{ id: 'sb', name: 'W16x26', A: s.A, Iy: s.Iy, Iz: s.Iz, J: s.J, shape }, { id: 'sc', name: 'W12x50', A: W.s.A, Iy: W.s.Iy, Iz: W.s.Iz, J: W.s.J, shape: W.shape }],
    members: [{ id: 'c1', i: 'a', j: 'c', section: 'sc', material: 'g', roll: 0, rel: rel(false) }, { id: 'b', i: 'c', j: 'd', section: 'sb', material: 'g', roll: 0, rel: { i: [false, false, false, false, true, true], j: [false, false, false, false, true, true] } }, { id: 'c2', i: 'e', j: 'd', section: 'sc', material: 'g', roll: 0, rel: rel(false) }],
    supports: [{ node: 'a', fix: [true, true, true, true, true, true] }, { node: 'e', fix: [true, true, true, true, true, true] }], cases, combos: gen.combos };
  const model = FM.cleanFrame(raw).model;
  const res = await FB.breakFrame(model, design, { B });
  ok(res.ok && res.members.length >= 2, `portal frame: ${res.members.length} members checked, governing ${res.combo && res.combo.name}`);
  const sol = FS.solveFrame(model), cb = model.combos.find((c) => /1\.4/.test(c.name)) || model.combos[0];
  const R = sol.results['combo:' + cb.id], f = cb.factors.find((x) => x.case === 'd');
  const Nc = f ? f.f * w * L / 2 : null;
  ok(f && close(Math.abs(R.ends[0 + 12 * 0]), Nc, 1e-3), `columns carry wL/2 each: ${(Nc / 1e3).toFixed(2)} kN by hand, ${(Math.abs(R.ends[0]) / 1e3).toFixed(2)} kN from the analysis (${cb.name})`);
  const ids = res.members.map((m) => m.id);
  ok(res.members[0].util >= res.members[ids.length - 1].util && ids.includes('b') && ids.includes('c1'), 'members come back worst first');
  ok(res.reserve && res.reserve.bounded && res.reserve.factor > 1 === (res.members[0].util < 1), `reserve (${res.reserve.factor.toFixed(3)}) agrees with the utilisation as loaded (${res.members[0].util.toFixed(3)})`);
  // the load factor on the governing combination: re-check at λ* by hand through the same checker
  const at = (l) => { const m2 = { ...model, combos: model.combos.filter((c) => c.id === res.combo.id).map((c) => ({ ...c, factors: c.factors.map((x) => ({ ...x, f: x.f * l })) })) }; return D.checkFrame(m2, FS.solveFrame(m2), design).max; };
  ok(close(at(res.reserve.factor), 1, 2e-3), `utilisation at λ* = ${at(res.reserve.factor).toFixed(4)}`);
}
// ---- escape routes from a model (regs add-on route.js): two 4 × 4 m rooms, a 900 mm door between them, a 700 mm door to the outside from B
{
  const RT = await load('public_html/assets/apps/bimcraft/dev/addons/regs/lib/route.js'), RG = await load('public_html/assets/apps/bimcraft/dev/addons/regs/lib/regs.js');
  const sq = (x0) => [[x0, 0], [x0 + 4000, 0], [x0 + 4000, 4000], [x0, 4000]];
  const loops = new Map([['s1', { rooms: [{ poly: sq(0), area: 16e6 }, { poly: sq(4000), area: 16e6 }] }]]);
  const door = (id, wall, offset, width) => ({ id, guid: id, kind: 'door', wall, offset, width, height: 2040 });
  const snap = { derived: { spaces: [{ storey: 's1', guid: 'A', number: '1', name: 'Bedroom', seed: [2000, 2000] }, { storey: 's1', guid: 'B', number: '2', name: 'Living', seed: [6000, 2000] }] },
    walls: [{ id: 'wi', storey: 's1', a: [4000, 0], b: [4000, 4000], t: 100 }, { id: 'wo', storey: 's1', a: [4000, 0], b: [8000, 0], t: 100 }],
    openings: [door('dAB', 'wi', 1550, 900), door('dBx', 'wo', 1650, 700)] };
  const g = RT.routeGraph(snap, loops);
  const ab = g.doors.find((d) => d.id === 'dAB'), bx = g.doors.find((d) => d.id === 'dBx');
  ok(g.rooms.length === 2 && ab && ab.b !== null && ab.width === 900 - 50.8 && bx && bx.b === null && Math.abs(bx.width - (700 - 50.8)) < 1e-9, 'graph: the inside door joins A and B, the outside door is an exit; clear width = leaf less 2 in');
  const pack = RG.cleanPack({ format: 'cadcraft-regulation-pack', version: 1, id: 'zz-route', name: 'Route test pack', edition: '2021', jurisdiction: { level: 'country', country: 'US', name: 'Test' }, review: { state: 'reviewed' },
    rules: [{ id: 'door.egress.width.min', op: '>=', value: 812.8, unit: 'mm', clause: 'R311.2', label: 'Egress door width' }], source: { name: 'test', date: '2026-10-28' } });
  const prof = RG.resolve(new Map([[pack.pack.id, pack.pack]]), pack.pack.id);
  const r = RT.routeFindings(snap, loops, prof, B), a = r.findings.find((f) => f.subject.id === 'A'), b = r.findings.find((f) => f.subject.id === 'B');
  ok(a && b && a.failing && b.failing && Math.abs(b.found.value - 649) < 1 && Math.abs(a.found.value - 649) < 1, `both rooms leave by the 700 mm exit (clear ${b && b.found.value} mm) under the 813 mm rule: they fail`);
  ok(a.pack.id === 'zz-route' && a.clause === 'R311.2' && a.route.join() === 'dAB,dBx' && a.what.door === 'Door dBx', `the finding names the pack, the clause and the way out (${a.route.join(' → ')})`);
  const prob = B.findingProblems(r.findings, { source: 'bimcraft.breakit' }).find((p) => p.about[0].id === 'A');
  ok(prob && prob.severity === 'error' && prob.source.kind === 'regulation' && prob.source.pack.clause === 'R311.2' && prob.req.value === 813 && prob.found.value === 649, 'as a Problem: an error with the pack, clause, required 813 mm and found 649 mm');
  const wide = { ...snap, openings: [door('dAB', 'wi', 1550, 900), door('dBx', 'wo', 1500, 1000)] };
  ok(RT.routeFindings(wide, loops, prof, B).findings.every((f) => !f.failing), 'a 1000 mm exit door: both rooms meet the rule (A through its 900 mm door too: clear 849 ≥ 813)');
  ok(RT.routeFindings({ ...snap, openings: [door('dAB', 'wi', 1550, 900)] }, loops, prof, B).findings.every((f) => f.failing && !f.what.width), 'no door to the outside at all: no room has a way out');
  ok(RT.routeFindings(snap, loops, RG.resolve(new Map([['p', RG.cleanPack({ ...pack.pack, id: 'p', rules: [] }).pack]]), 'p'), B).findings.length === 0, 'a pack without the egress rule: nothing to break');
}
console.log(`breakit: ${pass} passed, ${fail} failed`); process.exit(fail ? 1 : 0);
