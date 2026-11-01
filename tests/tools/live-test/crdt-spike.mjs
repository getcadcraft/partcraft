#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * crdt-spike.mjs — LV.29, a spike: Automerge (MIT; test-only, tools/live-test/crdt) holding a CadCraft drawing, for
 * step 3 of the spec (a central model with copies that work offline and merge later, § 12).
 *
 *   (cd tools/live-test/crdt && npm install)
 *   node tools/live-test/crdt-spike.mjs [--dwg <file|dir>…] [--edits 1000] [--json out.json]
 *
 * Per drawing (CadCraft's own reader: readDwg → importDwg → Doc.load, then the model as plain data):
 *   - the Automerge document's size against the DWG and against plain JSON, and the time to build / save / load it;
 *   - two copies edited offline (`--edits` each: moves, colour changes, adds, deletes, mostly on different objects,
 *     some on the same), then merged both ways: merge time, size growth, and whether both orders give the same drawing;
 *   - CadCraft's rules on the merged drawing (`validate`: every block reference names a block that exists, every
 *     constraint names objects that exist and still holds).
 * Then the conflict cases of spec § 5 point 4, each as two offline copies merged, with what Automerge decides and
 * whether `validate` passes. Files outside the repo are reported by size only, never by name or content.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const A = await import(pathToFileURL(path.join(here, 'crdt/am.mjs')).href).catch(() => null);
if (!A) { console.error('run (cd tools/live-test/crdt && npm install) first'); process.exit(2); }
const APP = path.join(root, 'public_html/assets/apps/cadcraft/dev');
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);
const I18n = await load('i18n.js');
I18n.init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const { Doc } = await load('doc.js');
const { readDwg } = await load('dwg/read.js');
const { importDwg } = await load('dwg-import.js');

const args = process.argv.slice(2);
const many = (k) => args.flatMap((a, i) => (args[i - 1] === k ? [a] : []));
const EDITS = +(args.includes('--edits') ? args[args.indexOf('--edits') + 1] : 1000);
const jsonOut = args.includes('--json') ? args[args.indexOf('--json') + 1] : null;
const inputs = many('--dwg').length ? many('--dwg') : [
  '/var/www/CADCRAFT/testfiles/dwg-samples',
  path.join(root, 'fixtures/dwg/kitchen-equipment.dwg'),
  // a large plan of your own: --dwg <file> (files outside the repo are named only by size in the output)
];
const files = inputs.flatMap((p) => (fs.existsSync(p) ? (fs.statSync(p).isDirectory() ? fs.readdirSync(p).filter((f) => f.endsWith('.dwg')).sort().map((f) => path.join(p, f)) : [p]) : []));
const publicName = (f) => (f.startsWith(root) || f.includes('/dwg-samples/') ? path.basename(f) : `client plan (${(fs.statSync(f).size / 1e6).toFixed(1)} MB)`);

// ---------------------------------------------------------------------------------------------------------------------
// The drawing as plain data (what a central model would hold): entities by id, layers, blocks.

const plain = (v) => JSON.parse(JSON.stringify(v, (k, x) => (x instanceof Map ? Object.fromEntries(x) : x === undefined ? null : typeof x === 'number' && !Number.isFinite(x) ? null : x)));
function drawingOf(doc) {
  const ents = {};
  for (const [id, e] of doc.model) ents[String(id)] = plain(e);
  const blocks = {};
  for (const [name, b] of doc.blocks) blocks[name] = plain({ base: b.base, entities: b.entities || [] });
  const layers = {};
  for (const [name, l] of doc.layers) layers[name] = plain(l);
  return { ents, layers, blocks, constraints: plain(doc.constraints || []) };
}

/** CadCraft's rules that a merge can break (spec § 5 point 2 lists them for validate). */
function validate(d) {
  const problems = [];
  for (const [id, e] of Object.entries(d.ents)) {
    if (e.type === 'insert' && e.block && !d.blocks[e.block]) problems.push(`reference ${id} names a missing block`);
    if (e.layer && !d.layers[e.layer]) problems.push(`object ${id} on a missing layer`);
    if (e.type === 'line' && ![e.x1, e.y1, e.x2, e.y2].every(Number.isFinite)) problems.push(`line ${id} lost an end`);
  }
  for (const c of d.constraints || []) {
    for (const r of c.refs || []) if (!d.ents[String(r.e)]) problems.push(`constraint ${c.id} names a missing object`);
    if (c.type === 'dist' && (c.refs || []).length === 2) {
      const [a, b] = c.refs.map((r) => d.ents[String(r.e)]);
      if (a && b) {
        const pt = (e, k) => (k === 'p1' ? { x: e.x1, y: e.y1 } : { x: e.x2, y: e.y2 });
        const pa = pt(a, c.refs[0].k), pb = pt(b, c.refs[1].k);
        const dd = Math.hypot(pa.x - pb.x, pa.y - pb.y);
        if (Math.abs(dd - c.value) > 1e-6) problems.push(`constraint ${c.id} no longer holds (${dd.toFixed(3)} ≠ ${c.value})`);
      }
    }
  }
  return problems;
}

const canon = (d) => JSON.stringify(d, (k, v) => (v && typeof v === 'object' && !Array.isArray(v) ? Object.fromEntries(Object.keys(v).sort().map((x) => [x, v[x]])) : v));
const toJs = (doc) => JSON.parse(JSON.stringify(doc));
function rng(seed) { let x = seed >>> 0 || 7; const r = () => { x ^= x << 13; x >>>= 0; x ^= x >> 17; x ^= x << 5; x >>>= 0; return x / 4294967296; }; r.int = (n) => Math.floor(r() * n); return r; }
const time = (f) => { const t = performance.now(); const v = f(); return [v, performance.now() - t]; };

// ---------------------------------------------------------------------------------------------------------------------
// Corpus

const rows = [];
for (const f of files) {
  const bytes = new Uint8Array(fs.readFileSync(f));
  let doc;
  try { doc = new Doc(); doc.load(importDwg(readDwg(bytes))); } catch (e) { console.log(`${publicName(f)}: not read (${e.message})`); continue; }
  const d = drawingOf(doc);
  const json = JSON.stringify(d);
  const [am, buildMs] = time(() => A.from(d));
  const [saved, saveMs] = time(() => A.save(am));
  const [, loadMs] = time(() => A.load(saved));
  // two offline copies
  const r = rng(bytes.length);
  const ids = Object.keys(d.ents);
  const lineIds = ids.filter((id) => d.ents[id].type === 'line');
  const editCopy = (copy, actorSeed, share) => {
    let n = 0, made = 0;
    return A.change(copy, (x) => {
      for (let i = 0; i < EDITS; i++) {
        // `share` of the edits land on the first 50 objects (both copies touch them), the rest anywhere
        const pool = r() < share ? ids.slice(0, 50) : ids;
        const id = pool[r.int(pool.length)];
        const e = x.ents[id];
        if (!e) continue;
        const k = r();
        if (k < 0.5) {
          // a move: whichever position fields the object has
          for (const f of ['x1', 'y1', 'x2', 'y2', 'x', 'y', 'cx', 'cy']) if (typeof e[f] === 'number') e[f] += 1;
        }
        else if (k < 0.8) e.color = r.int(255) + 1;
        else if (k < 0.9) { delete x.ents[id]; }
        else { x.ents[`n${actorSeed}:${++made}`] = { type: 'line', layer: '0', color: null, x1: r() * 100, y1: r() * 100, x2: r() * 100, y2: r() * 100 }; }
        n++;
      }
    });
  };
  let a = A.clone(am, { actor: 'aa'.repeat(16) }), b = A.clone(am, { actor: 'bb'.repeat(16) });
  a = editCopy(a, 1, 0.2); b = editCopy(b, 2, 0.2);
  const [ab, mergeMs] = time(() => A.merge(A.clone(a), b));
  const ba = A.merge(A.clone(b), a);
  const sameBothWays = canon(toJs(ab)) === canon(toJs(ba));
  const merged = toJs(ab);
  const savedAfter = A.save(ab).length;
  // only what the merge broke: the drawing's own oddities (as read) are not the merge's
  const before = new Set(validate(d));
  const problems = validate(merged).filter((p) => !before.has(p));
  // the same build with scalar strings (not mergeable text) except text content
  const scalar = (v, k) => (typeof v === 'string' ? (k === 's' ? v : new A.ImmutableString(v)) : Array.isArray(v) ? v.map((x) => scalar(x)) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([kk, x]) => [kk, scalar(x, kk)])) : v);
  const [am2, build2Ms] = time(() => A.from(scalar(d)));
  const saved2 = A.save(am2);
  const [, load2Ms] = time(() => A.load(saved2));
  // …and with every list (vertices, hatch loops, block contents) as one value: a list then merges as a whole
  const packed = (v, k) => (typeof v === 'string' ? (k === 's' ? v : new A.ImmutableString(v)) : Array.isArray(v) ? new A.ImmutableString(JSON.stringify(v)) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([kk, x]) => [kk, packed(x, kk)])) : v);
  const [am3, build3Ms] = time(() => A.from(packed(d)));
  const saved3 = A.save(am3);
  const [, load3Ms] = time(() => A.load(saved3));
  const row = {
    file: publicName(f), dwg_kb: Math.round(bytes.length / 1024), entities: ids.length, blocks: Object.keys(d.blocks).length,
    json_kb: Math.round(json.length / 1024), am_kb: Math.round(saved.length / 1024), build_ms: Math.round(buildMs), save_ms: Math.round(saveMs), load_ms: Math.round(loadMs),
    after_kb: Math.round(savedAfter / 1024), growth_kb_per_1000_edits: Math.round((savedAfter - saved.length) / 1024 / (2 * EDITS / 1000)),
    merge_ms: Math.round(mergeMs), same_both_ways: sameBothWays, problems: problems.length,
    scalar_am_kb: Math.round(saved2.length / 1024), scalar_build_ms: Math.round(build2Ms), scalar_load_ms: Math.round(load2Ms),
    packed_am_kb: Math.round(saved3.length / 1024), packed_build_ms: Math.round(build3Ms), packed_load_ms: Math.round(load3Ms),
  };
  rows.push(row);
  console.log(`${row.file.padEnd(58)} ${String(row.entities).padStart(6)} obj  DWG ${String(row.dwg_kb).padStart(5)} KB  JSON ${String(row.json_kb).padStart(6)} KB  Automerge ${String(row.am_kb).padStart(5)} KB (build ${row.build_ms} ms, load ${row.load_ms} ms)  ` +
    `+${row.growth_kb_per_1000_edits} KB/1000 edits  merge ${row.merge_ms} ms  ${sameBothWays ? 'same both ways' : 'ORDER-DEPENDENT'}  merge broke: ${problems.length ? problems.length + ' rule(s)' : 'nothing'}  ` +
    `| scalar strings: ${row.scalar_am_kb} KB, build ${row.scalar_build_ms} ms, load ${row.scalar_load_ms} ms` +
    ` | packed lists: ${row.packed_am_kb} KB, build ${row.packed_build_ms} ms, load ${row.packed_load_ms} ms`);
}

// ---------------------------------------------------------------------------------------------------------------------
// The conflict cases (spec § 5 point 4), each as two offline copies merged

const L = (x1, y1, x2, y2, extra = {}) => ({ type: 'line', layer: '0', color: null, x1, y1, x2, y2, ...extra });
const base = () => A.from({
  ents: { 1: L(0, 0, 10, 0), 2: L(0, 5, 10, 5), 3: { type: 'insert', layer: '0', block: 'DOOR', x: 1, y: 1 }, 4: { type: 'text', layer: 'A', s: 'KITCHEN' }, 5: L(0, 0, 10, 0), 6: L(0, 10, 10, 10) },
  layers: { 0: { name: '0', color: 7 }, A: { name: 'A-ANNO', color: 3 } },
  blocks: { DOOR: { base: { x: 0, y: 0 }, entities: [L(0, 0, 1, 0)] } },
  constraints: [{ id: 'c1', type: 'dist', value: 10, refs: [{ e: 5, k: 'p1' }, { e: 5, k: 'p2' }] }],
});
const pair = (fa, fb) => {
  const o = base();
  let a = A.clone(o, { actor: 'a1'.repeat(16) }), b = A.clone(o, { actor: 'b2'.repeat(16) });
  a = A.change(a, fa); b = A.change(b, fb);
  const m1 = toJs(A.merge(A.clone(a), b)), m2 = toJs(A.merge(A.clone(b), a));
  return { m: m1, same: canon(m1) === canon(m2), problems: validate(m1) };
};
const cases = [
  ['Both change the same property', () => pair((x) => { x.ents[1].color = 1; }, (x) => { x.ents[1].color = 5; }),
    (r) => `one value wins (colour ${r.m.ents[1].color}), picked by actor id, not by time — Live picks the later commit`],
  ['One moves an object, the other deletes it', () => pair((x) => { x.ents[2].x1 = 3; }, (x) => { delete x.ents[2]; }),
    (r) => (r.m.ents[2] ? 'the move brought it back' : 'the delete wins (the move is lost), as in Live')],
  ['A block definition is purged while someone places it', () => pair((x) => { delete x.blocks.DOOR; delete x.ents[3]; }, (x) => { x.ents[7] = { type: 'insert', layer: '0', block: 'DOOR', x: 5, y: 5 }; }),
    (r) => `merged without complaint; the new reference names a block that no longer exists`],
  // A line with a length constraint of 10, (0,0)–(10,0). One person slides it right (both x change), the other turns it
  // upright about its start (x2, y2 change). Each copy is solved and valid on its own.
  ['Both edit a constrained object (one slides it, the other turns it)', () => pair((x) => { x.ents[5].x1 = 2; x.ents[5].x2 = 12; }, (x) => { x.ents[5].x2 = 0; x.ents[5].y2 = 10; }),
    (r) => `per-property merge mixes the two solved states: (${r.m.ents[5].x1},${r.m.ents[5].y1})–(${r.m.ents[5].x2},${r.m.ents[5].y2})`],
  ['Both type in the same text', () => pair((x) => { A.splice(x, ['ents', '4', 's'], 7, 0, ' 101'); }, (x) => { A.splice(x, ['ents', '4', 's'], 0, 0, 'MAIN '); }),
    (r) => `character merge: "${r.m.ents[4].s}" (Live holds the text instead)`],
  ['Both draw new objects', () => pair((x) => { x.ents['a:1'] = L(1, 1, 2, 2); }, (x) => { x.ents['b:1'] = L(3, 3, 4, 4); }),
    (r) => `both kept (${Object.keys(r.m.ents).length} objects)`],
  ['A layer is renamed while someone draws on it', () => pair((x) => { x.layers.A.name = 'A-NOTE'; }, (x) => { x.ents['b:2'] = { type: 'text', layer: 'A', s: 'NEW' }; }),
    (r) => `references use the layer's stable key, so the new text is on "${r.m.layers.A.name}"`],
  ['A layer is deleted while someone draws on it', () => pair((x) => { delete x.layers.A; delete x.ents[4]; }, (x) => { x.ents['b:3'] = { type: 'text', layer: 'A', s: 'NEW' }; }),
    (r) => `merged without complaint; the new text sits on a layer that no longer exists`],
];
console.log('\nConflict cases (two offline copies, merged):');
const caseRows = [];
for (const [name, run, say] of cases) {
  const r = run();
  caseRows.push({ name, same_both_ways: r.same, problems: r.problems, result: say(r) });
  console.log(`- ${name}: ${say(r)}; ${r.same ? 'same both ways' : 'ORDER-DEPENDENT'}; validate: ${r.problems.length ? r.problems.join('; ') : 'ok'}`);
}
if (jsonOut) fs.writeFileSync(jsonOut, JSON.stringify({ edits: EDITS, automerge: '3.1.2', rows, cases: caseRows }, null, 1));
