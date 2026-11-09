/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool answers are read by the other program's script; what the person sees goes through t(). */
/**
 * link-pc.js — PartCraft's side of the live .3dm link (0.9 SU.810b; lib/3dm-link, copied to ./3dm-link/ by tools/3dm-link/sync.mjs).
 * What a link brought is one import feature carrying `link` (saved in the part): a push replaces its mesh and the features after it
 * rebuild on the new shape. A body must close, as in the import dialog: a model that does not close changes nothing, and the answer says so.
 *
 *   partLinkTools(app) → the tool definitions (agents.js); app = PartCraft's installAgents argument (part, commit, built, mode, foldUndo, say)
 */
import { createLinkStore, linkTools } from './3dm-link/index.js';
import { open3dm } from './3dm/index.js';
import { addFeature } from './part.js';
import { t } from './i18n.js';

export const linkedFeature = (part, link) => part.features.find((f) => f.type === 'import' && f.link === link) || null;

export function partLinkTools(app) {
  return linkTools({
    app: 'PartCraft',
    store: createLinkStore(),
    open: (bytes) => open3dm(bytes),
    find: (link) => { const f = linkedFeature(app.part(), link); return f ? { feature: f.id, name: f.name } : null; },
    apply: async (scene, { link, name, fold }) => {
      if (app.mode() !== 'model') throw new Error('PartCraft is in ' + app.mode() + ' mode: the link waits until the person is back in the model.');
      const { meshFromScene } = await import('./mesh3dm.js');
      const MI = await import('./meshimport.js');
      let read;
      try { read = meshFromScene(scene); } catch (e) {
        if (e && e.code === 'ccdm.part.none') return { applied: false, reason: 'The model has no meshes or surfaces to make a body from.' };
        throw e;
      }
      const fixed = MI.repairMesh(read), rep = fixed.report;
      if (!rep.closed) {
        if (app.say) app.say(t('ccdm.part.link_open', { name }));
        return { applied: false, closed: false, reason: 'The model does not close into a solid, so PartCraft kept the body it had. Close it (or send only closed objects) and it updates.' };
      }
      const label = 'Assistant: update linked ' + name;
      const part = app.part(), had = linkedFeature(part, link);
      const props = { file: name.slice(0, 200), mesh: MI.encodeMesh(fixed), units: read.unit || 'mm', up: 'z', report: rep };
      const canFold = fold && had && app.lastUndo() === label;
      const f = app.commit(label, () => {
        if (had) { Object.assign(had, props); return had; }
        return addFeature(part, 'import', { ...props, op: 'add', link });
      });
      if (canFold && app.foldUndo) app.foldUndo();
      await app.built();
      if (app.say) app.say(t('ccdm.part.link_done', { name, n: read.threedm.objects }));
      return { applied: true, closed: true, created: !had, feature: f.id, objects: read.threedm.objects, faces: rep.triangles, holesFilled: rep.holesFilled, units: props.units, notes: read.notes.map((n) => n.key), undo: label };
    },
  });
}
