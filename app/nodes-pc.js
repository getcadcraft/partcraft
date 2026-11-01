/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nodes-pc.js — PartCraft's thin adapter for the node editor (0.8 round 3, nodes_PART_3; DC.54). The graph engine is cc-nodes (./nodes/, byte copies
 * of lib/nodes via `node tools/nodes/sync.mjs partcraft`) over cc-nurbs (./nurbs/); the editor window is the shell's assets/js/app-nodes.js; every
 * node is also a CraftScript function nd_<node> (cs-lib-nodes.js). What is PartCraft's here, and only here:
 *   - the graph is kept in the part file as a study (`part.studies.nodes`, cc-nodes' file shape; untrusted on the way in: Graph.fromJSON leaves out
 *     what it cannot read), outside the part's undo like the Surfaces patch set — the editor has its own Undo / Redo;
 *   - PartCraft works in millimetres, as cc-nodes does (display scale 1); what the nodes draw goes in the view as the overlay 'nodes';
 *   - node errors go to the shell's Problems (source 'partcraft.nodes').
 * The nodes make curves, surfaces and meshes beside the solid: they do not change the part's features or its build (like Surfaces, before S2).
 */
import * as THREE from 'three';
import * as N from './nurbs/index.js';
import * as E from './nodes/index.js';
import { registerWorkspace } from './workspaces.js';
import { registerStudyReader } from './part.js';
import { t } from './i18n.js';

export const KEY = 'nodes';
registerStudyReader(KEY, (raw) => E.Graph.fromJSON(raw).toJSON());

const S = { host: null, win: null, root: null, loading: null };

async function ensure(host) {
  S.host = host;
  S.loading ??= import('/assets/js/app-nodes.js').then(({ openNodesWindow }) => {
    S.root = new THREE.Group(); S.root.name = 'nodes';
    S.win = openNodesWindow({
      parent: host.view.canvas.parentElement, E, N, THREE, scene: S.root, scale: 1, t, problemsId: 'partcraft.nodes',
      store: {
        get: () => S.host.part?.studies?.[KEY] || null,
        set: (json) => {
          const p = S.host.part;
          if (json.nodes.length) (p.studies ||= {})[KEY] = json;
          else if (p.studies) { delete p.studies[KEY]; if (!Object.keys(p.studies).length) delete p.studies; }
          S.host.markDirty?.();
        },
      },
      redraw: () => S.host.view.render(),
    });
    window.partcraft.nodes = S;
    return S;
  });
  return S.loading;
}

/** The open part changed (opened, New, undo of a study): the window reads its graph again. */
export function partChanged(host) { S.host = host; if (S.win) S.win.reload(); }

const ws = registerWorkspace({
  id: 'nodes', label: 'nodes.ws.label', icon: 'diagram-3', blurb: 'nodes.ws.blurb',
  groups: [{ label: 'nodes.title', items: [
    { cmd: 'nodes-window', icon: 'diagram-3', label: 'nodes.open', title: 'nodes.hint' },
  ] }],
  async enter(host) { await ensure(host); host.view.setOverlay('nodes', S.root); S.win.reload(); S.win.show(); host.view.render(); },
  exit() { S.win?.hide(); },
  renderPanel(host, box) {
    const b = host.el('button', { className: 'pc-btn is-primary', type: 'button', dataset: { nodesOpen: '1' } }, t('nodes.open'));
    b.addEventListener('click', async () => { await ensure(host); host.view.setOverlay('nodes', S.root); S.win.toggle(); });
    box.replaceChildren(host.el('p', { className: 'pc-note' }, t('nodes.intro')), b);
    return t('nodes.title');
  },
  command(cmd, host) {
    if (cmd !== 'nodes-window') return false;
    ensure(host).then(() => { host.view.setOverlay('nodes', S.root); S.win.toggle(); });
    return true;
  },
});
const lazy = (o, f) => { const key = o[f]; Object.defineProperty(o, f, { get: () => t(key), enumerable: true, configurable: true }); };
lazy(ws, 'label'); lazy(ws, 'blurb');
for (const g of ws.groups) { lazy(g, 'label'); for (const it of g.items) { lazy(it, 'label'); lazy(it, 'title'); } }
export const _state = S;   // tests
