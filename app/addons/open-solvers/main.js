/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Open solver cases add-on for PartCraft (0.9.1, suggestion 1309; add-on API 1.3). A tab "Solver cases" in the right panel: choose the kind
 * of case (flow, stress / frequencies / heat, drop or impact), pick faces in the 3D view, export a ready-to-run case folder as a .zip for an outside
 * solver the person runs themselves, and read the result files back onto the model as colour bands. The solvers are separate programs (GPL / AGPL):
 * nothing of them is in here, nothing is downloaded, and no program is started; only text files go out and come back.
 * The logic is the shared lib/opensolvers (synced copies: node tools/opensolvers/sync.mjs), the host adapter is host-partcraft.js.
 * Commands: open-solvers:export, open-solvers:import.
 */
import { createOpenSolvers } from './lib/opensolvers/os-panel.js';
import { makeHost } from './host-partcraft.js';

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  const host = makeHost(api, t);
  const osc = createOpenSolvers(host);
  const pane = api.ui.panelTab({ id: 'cases', title: t('tab'), render: (el) => osc.mount(el) });
  if (pane) osc.mount(pane);
  api.commands.add('export', () => osc.app.exportCase(), { label: t('cmd.export') });
  api.commands.add('import', () => osc.app.importResults(), { label: t('cmd.import') });
  // the deactivate function: picking stops; a plot stays (it is part of the file) until the person removes it
  return Object.assign(() => { osc.app.stopPick(); }, { app: osc.app, osc, host });
}
