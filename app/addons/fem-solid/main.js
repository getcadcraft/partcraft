/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Solid FEM add-on for PartCraft (0.9 SU.908c; add-on API 1.3). A tab "Solid FEM" in the right panel: mesh the part, set a material,
 * fixed faces and loads by picking faces in the 3D view, solve a linear static or modal study with the CadCraft finite element library (lib/fem:
 * the ten-node tetrahedron, PCG solver, modal), and draw displacement, von Mises stress or a mode shape on the model in colour bands.
 * PartCraft keeps its own Simulation solver untouched; this add-on does not replace or edit it.
 * The logic is the shared lib/ (synced copies: node tools/fem/sync.mjs), the host adapter is host-partcraft.js. Commands: fem-solid:mesh, fem-solid:solve.
 */
import { createSolidFem } from './lib/fem/solid-panel.js';
import { makeHost } from './host-partcraft.js';

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const host = makeHost(api, t);
  const fem = createSolidFem(host);
  const pane = api.ui.panelTab({ id: 'solid', title: t('tab'), render: (el) => fem.mount(el) });
  if (pane) fem.mount(pane);
  api.commands.add('mesh', () => fem.app.mesh(), { label: t('cmd.mesh') });
  api.commands.add('solve', () => fem.app.solve(), { label: t('cmd.solve') });
  // the deactivate function: stop picking, take the plot away is the person's choice (it is part of the file), so only picking stops
  return Object.assign(() => { fem.app.stopPick(); }, { app: fem.app, fem, host });
}
