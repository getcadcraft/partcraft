/* SPDX-License-Identifier: Apache-2.0 */
/**
 * toy-adapter.mjs — a small app adapter for Studio Live's tests (spec § 4): a model of objects with properties, the
 * shape every real adapter has (CadCraft's entities, MarkupCraft's markups…), so live-client.js and the server can be
 * tested without an app. Ops:
 *   {op: 'set', id, f, v}   property write (key e:<id>, mode p)
 *   {op: 'add', id, obj}    create (mode c; obj.layer → a read of layer:<layer>)
 *   {op: 'del', id}         delete (mode d)
 *   {op: 'text', id, v}     text content: structural (mode s), so the typist's hold protects it
 * `validate` refuses a property named "bad" and an object whose layer doesn't exist ("no such layer").
 */
import { pack, unpack } from '../../public_html/assets/js/live-client.js';

export function toyAdapter(name = 'toy') {
  const model = new Map(); // id → {…props}
  let listener = null;
  const a = {
    app: 'cadcraft', schema: 1, name, model, applied: 0,
    onLocalChange(cb) { listener = cb; },
    /** The app's own edit: apply, then report it like an app does after doc.change(). */
    edit(label, ops) {
      const inverse = a.invert(ops);
      a.apply(ops, 'local');
      if (listener) return listener({ label, ops, inverse });
      return null;
    },
    invert(ops) {
      const inv = [];
      for (const op of ops) {
        const cur = model.get(op.id);
        if (op.op === 'set') inv.unshift({ op: 'set', id: op.id, f: op.f, v: cur ? (cur[op.f] ?? null) : null });
        else if (op.op === 'text') inv.unshift({ op: 'text', id: op.id, v: cur ? (cur.text ?? null) : null });
        else if (op.op === 'add') inv.unshift({ op: 'del', id: op.id });
        else if (op.op === 'del') inv.unshift(cur ? { op: 'add', id: op.id, obj: { ...cur } } : { op: 'noop' });
      }
      return inv;
    },
    apply(ops) {
      a.applied++;
      for (const op of ops) {
        const cur = model.get(op.id);
        if (op.op === 'set') { if (cur) { if (op.v === null) delete cur[op.f]; else cur[op.f] = op.v; } }
        else if (op.op === 'text') { if (cur) { if (op.v === null) delete cur.text; else cur.text = op.v; } }
        else if (op.op === 'add') model.set(op.id, { ...op.obj });
        else if (op.op === 'del') model.delete(op.id);
      }
    },
    touched(ops) {
      const t = [];
      for (const op of ops) {
        if (op.op === 'set') t.push({ k: 'e:' + op.id, m: 'p', f: op.f });
        else if (op.op === 'text') t.push({ k: 'e:' + op.id, m: 's', r: null }); // the hold protects it, not a version
        else if (op.op === 'add') { t.push({ k: 'e:' + op.id, m: 'c' }); if (op.obj && op.obj.layer) t.push({ k: 'layer:' + op.obj.layer, m: 'r' }); }
        else if (op.op === 'del') { t.push({ k: 'e:' + op.id, m: 'd' }); const cur = model.get(op.id); if (cur && cur.layer) t.push({ k: 'layer:' + cur.layer, m: 'r' }); }
      }
      return t;
    },
    validate(ops) {
      for (const op of ops) {
        if (op.op === 'set' && op.f === 'bad') return 'not allowed';
        if (op.op === 'add' && op.obj && op.obj.layer && op.obj.layer !== '0' && !model.has('L' + op.obj.layer)) return 'no such layer';
      }
      return null;
    },
    snapshot() { return pack(Object.fromEntries([...model].sort(([x], [y]) => (x < y ? -1 : 1)))); },
    load(bytes) { model.clear(); for (const [k, v] of Object.entries(unpack(bytes))) model.set(k, v); },
    /** Canonical text of the model, to compare clients. */
    hash() {
      const sorted = [...model].sort(([x], [y]) => (x < y ? -1 : 1)).map(([k, v]) => [k, Object.fromEntries(Object.entries(v).sort())]);
      return JSON.stringify(sorted);
    },
  };
  return a;
}
