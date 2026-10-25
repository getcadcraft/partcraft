/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/update.js — bring a changed design into a manual (0.7 TP.10; DOM-free). The fresh product (a new manual made
 * from the changed source the same way the first was) is matched to the manual by stable instance id (the source's own ids:
 * an assembly's instance ids, a glTF node's index, …). Views, annotations, balloon numbers and animation keys stay with
 * their instances.
 *
 *   planUpdate(m, meshes, fresh) → report { moved: [{ id, name, dist (mm) }], reshaped: [{ id, name }], added: [{ id, name }],
 *       removed: [{ id, name, annotations: [{ id, kind, text }], keys: n }], renamed: [{ id, from, to }], same (bool) }
 *   applyUpdate(m, doc, fresh) → report   (inside Doc.edit: changes m and doc.meshes; one undo step)
 * What happens: matched instances take their new place, part and shape; added instances are shown in every view (a view
 * hides only what it lists) and get no balloon number; removed instances leave the manual with their annotations, view
 * entries, explode steps and animation keys — every one of those is named in the report (never dropped silently). Balloon
 * numbers follow their part (by part id, or through a matched instance when the part's id changed); numbers are never
 * given again. Part properties, the tree and the source's exploded views come from the fresh product.
 */
import { keysOn, dropInstance } from './timeline.js';

const near = (a, b, tol) => a.length === b.length && a.every((x, i) => Math.abs(x - b[i]) <= tol);
const sameMesh = (a, b) => {
  if (!a || !b || a.positions.length !== b.positions.length || a.indices.length !== b.indices.length) return false;
  for (let i = 0; i < a.indices.length; i++) if (a.indices[i] !== b.indices[i]) return false;
  for (let i = 0; i < a.positions.length; i++) if (Math.abs(a.positions[i] - b.positions[i]) > 1e-4) return false;
  return true;
};
/** Annotations that point at an instance (anchor, measure points). */
export function annotationsOn(m, id) {
  return m.annotations.filter((a) => a.anchor?.inst === id || a.measure?.pts.some((p) => p.inst === id));
}
const annotText = (a) => (a.text || (a.kind === 'balloon' ? String(a.pid) : a.kind === 'measure' ? a.measure.kind : '')).slice(0, 60);

export function planUpdate(m, meshes, fresh) {
  const oldBy = new Map(m.instances.map((i) => [i.id, i])), newBy = new Map(fresh.m.instances.map((i) => [i.id, i]));
  const rep = { moved: [], reshaped: [], added: [], removed: [], renamed: [], same: true };
  for (const [id, n] of newBy) {
    const o = oldBy.get(id);
    if (!o) { rep.added.push({ id, name: n.name }); continue; }
    const dist = Math.hypot(n.matrix[12] - o.matrix[12], n.matrix[13] - o.matrix[13], n.matrix[14] - o.matrix[14]);
    if (!near(n.matrix, o.matrix, 1e-6)) rep.moved.push({ id, name: n.name, dist });
    if (!sameMesh(meshes.get(o.part), fresh.meshes.get(n.part))) rep.reshaped.push({ id, name: n.name });
    if (n.name !== o.name) rep.renamed.push({ id, from: o.name, to: n.name });
  }
  for (const [id, o] of oldBy) if (!newBy.has(id)) rep.removed.push({ id, name: o.name, annotations: annotationsOn(m, id).map((a) => ({ id: a.id, kind: a.kind, text: annotText(a) })), keys: keysOn(m, id) });
  rep.same = !rep.moved.length && !rep.reshaped.length && !rep.added.length && !rep.removed.length && !rep.renamed.length;
  return rep;
}

export function applyUpdate(m, doc, fresh) {
  const rep = planUpdate(m, doc.meshes, fresh);
  const gone = new Set(rep.removed.map((r) => r.id));
  const oldInst = new Map(m.instances.map((i) => [i.id, i]));
  // balloon numbers: by part id, else carried over through a matched instance whose part id changed
  const items = {};
  for (const [pid, n] of Object.entries(m.balloons.items)) if (fresh.m.parts[pid]) items[pid] = n;
  for (const n of fresh.m.instances) {
    const o = oldInst.get(n.id);
    if (o && o.part !== n.part && m.balloons.items[o.part] !== undefined && items[n.part] === undefined && !Object.values(items).includes(m.balloons.items[o.part])) items[n.part] = m.balloons.items[o.part];
  }
  m.balloons = { next: m.balloons.next, items };
  // a balloon whose part id changed follows its part
  const pidMap = new Map();
  for (const n of fresh.m.instances) { const o = oldInst.get(n.id); if (o && o.part !== n.part && !fresh.m.parts[o.part]) pidMap.set(o.part, n.part); }
  for (const a of m.annotations) if (a.kind === 'balloon' && pidMap.has(a.pid)) a.pid = pidMap.get(a.pid);
  // the product
  m.parts = structuredClone(fresh.m.parts);
  m.groups = structuredClone(fresh.m.groups);
  m.instances = structuredClone(fresh.m.instances);
  m.explodes = structuredClone(fresh.m.explodes);
  m.source = structuredClone(fresh.m.source);
  doc.meshes = new Map(fresh.meshes);
  const exIds = new Set(m.explodes.map((e) => e.id));
  // views and the scene: entries of removed instances go; an explode the source no longer has goes
  for (const v of [...m.views, m.scene].filter(Boolean)) {
    for (const id of Object.keys(v.insts || {})) if (gone.has(id)) delete v.insts[id];
    for (const id of Object.keys(v.moves || {})) if (gone.has(id)) delete v.moves[id];
    if (v.explode && !exIds.has(v.explode.ref)) v.explode = null;
  }
  // annotations on removed instances leave (listed in the report); balloons of parts that are gone leave too
  const dropA = new Set(rep.removed.flatMap((r) => r.annotations.map((a) => a.id)));
  for (const a of m.annotations) if (a.kind === 'balloon' && !m.parts[a.pid]) { dropA.add(a.id); (rep.balloonsDropped ||= []).push({ id: a.id, pid: a.pid }); }
  m.annotations = m.annotations.filter((a) => !dropA.has(a.id));
  for (const v of [...m.views, m.scene].filter(Boolean)) v.annots = (v.annots || []).filter((id) => !dropA.has(id));
  // animation keys of removed instances (TP.6's tracks; their numbers are not given again)
  for (const id of gone) dropInstance(m, id);
  return rep;
}
