/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the 3D Print add-on for PartCraft (roadmap PS.7; docs/PRINTSTAGE-HOST-CONTRACT.md) on the shared add-on API: a "Print stage" tab in the right panel and a
 * toolbar button. The bodies of the open part (or an assembly's parts) lie on the printer's bed beside the part and go to the printer through the same slicer and printer
 * add-ons as ModelCraft. Everything loads on first use; PartCraft's own code is not changed. print-host.js is this app's side, lib/printstage's copy in printstage/ the rest.
 */
const MORE = [{ addon: 'slicer-kiri', engine: 'kiri', name: 'Kiri:Moto' }, { addon: 'slicer-prusaslicer', engine: 'prusaslicer', name: 'PrusaSlicer' }, { addon: 'slicer-orcaslicer', engine: 'orcaslicer', name: 'OrcaSlicer' }];
const tag = (name, props = {}, ...kids) => {
  const node = document.createElement(name);
  for (const [k, v] of Object.entries(props)) {
    if (v == null || v === false) continue;
    if (k === 'dataset') Object.assign(node.dataset, v);
    else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
    else if (k in node && k !== 'list') node[k] = v;
    else node.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids.flat()) if (c != null && c !== false) node.append(c);
  return node;
};

export function activate(api) {
  const t = (k, v) => api.t(k, v);
  let stage = null, loading = null;
  const show = () => document.querySelector('[data-rtab="addon-print3d-stage"]')?.click();
  async function mount(pane) {
    const pc = window.partcraft;
    if (!pc) return null;
    if (!stage) {
      loading ||= (async () => {
        const THREE = await import('three');
        const { mountPrintStage } = await import('./print-host.js');
        stage = mountPrintStage({
          pane, pc, THREE, t, el: tag, print: (m) => pc.status(m), fileName: () => pc.part?.name || 'part',
          load: (k) => api.storage.get(k), save: (k, v) => api.storage.set(k, v),
          moreLinks: () => {
            const reg = window.ccAddons?.loader;
            return reg?.setEnabled && !(window.ccPrintLinks || []).some((l) => l.id === 'bambu-p2s') ? [{ addon: 'printer-bambu', name: 'Bambu Lab P2S', add: () => reg.setEnabled('printer-bambu', true) }] : [];
          },
          moreSlicers: () => {
            const reg = window.ccAddons?.loader, on = new Set((window.ccPrintSlicers || []).map((d) => d.id));
            return reg?.setEnabled ? MORE.filter((m) => !on.has(m.engine)).map((m) => ({ ...m, add: () => reg.setEnabled(m.addon, true) })) : [];
          },
        });
        window.ccPartcraftPrint = stage;   // the checks' handle
      })();
      await loading; loading = null;
    }
    return stage;
  }
  const pane = api.ui.panelTab({
    id: 'stage', title: t('ui.printstage'),
    render: async (el) => { el.replaceChildren(tag('p', { className: 'pc-note' }, t('ps.title'))); const s = await mount(el); if (s) s.open(); },
  });
  api.ui.toolbarGroup({ id: 'print3d', label: t('ps.title'), tools: [{ id: 'stage', label: t('ui.printstage'), icon: 'bi-printer', title: t('ui.printstage.title'), run: show }] });
  api.onDeactivate(() => { stage?.dispose(); stage = null; delete window.ccPartcraftPrint; });
  void pane;
}
