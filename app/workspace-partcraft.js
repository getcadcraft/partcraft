/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workspace-partcraft.js — PartCraft's adapter for the shell's workspace layout engine (assets/js/app-workspace.js; 0.7 WS.14,
 * session ws-partcraft; contract docs/apps/app-workspace.md § The adapter contract, reference BimCraft's workspace-bimcraft.js).
 * The engine builds the blocks a layout file names (Ribbon and project browser, Toolbox and info box, anyone's file); this file
 * fills them with PartCraft's own things. It starts from fromInput() (assets/js/app-workspace-input.js) and adds what only
 * PartCraft knows:
 *
 *   ribbon    the Feature tree menu style of input-partcraft.js (its Illustrate tab included); a sketch, the drawing sheet, an
 *             assembly or the Illustrate workspace opens its own tab (contextTab)
 *   toolbox   the toolbar's own groups, named by their visible (translated) names
 *   can       fromInput's: the registry's own reasons (window.ccInput.why → input-partcraft.js hooks().why): a tool of another
 *             workspace switches there first
 *   slots     layout (the standard views: iso, front, top, right), fit, document (the kernel and build chips)
 *   palettes  properties (the right panel's Properties: the selection, a feature, the part, another workspace's panel),
 *             browser (the feature tree, the bodies, the configurations), panel (the left panel's own content: Part facts)
 *   views     the model (3D) and the drawing sheet; 'open' tabs follow the drawing sheet as it opens and closes
 *   other     a manual open in Illustrate is another kind of file: the view blocks step aside
 *
 *   mountPartcraftWorkspace(root) → Promise<engine api | null>   (partcraft.js calls it once its UI exists)
 *
 * Everything runs through the app's own buttons (window.ccInput.run → the app's [data-cmd] button); nothing is copied.
 * Words: ws.* in lang/<locale>.json (en + es-MX); the tools' labels are the registry's (input.cmd.*).
 */
import { mountWorkspaces } from 'cc-workspace';
import { fromInput } from '/assets/js/app-workspace-input.js';
import { COMMANDS, STYLES } from './input-partcraft.js';
import { t } from './i18n.js';

/** The engine's well-known actions → PartCraft's registry ids. */
const MAP = { open: 'file.open', save: 'file.save', undo: 'edit.undo', redo: 'edit.redo', clear: 'edit.select-none', fit: 'view.fit' };
/** A tab of the Feature tree ribbon by its name: fromInput numbers the style's tabs t0, t1, … in order. */
const TAB = (name) => { const i = (STYLES.feature?.tabs || []).findIndex((x) => x.label === 'input.m.' + name); return i < 0 ? null : 't' + i; };
/** The running tool (window.partcraft.tool) → the registry command whose label names it. */
const TOOL_CMD = { sketch: 'sketch.new', 'sketch-plane': 'sketch.new', measure: 'view.measure', section: 'view.section', draft: 'view.draft', pick: 'feature.pick-done' };

function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'className') e.className = v; else e.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids.flat()) if (c !== null && c !== undefined && c !== false) e.append(c instanceof Node ? c : String(c));
  return e;
}

export async function mountPartcraftWorkspace(root) {
  const pc = () => window.partcraft;
  const stage = root.querySelector('.pc-stage');
  const left = root.querySelector('.pc-left'), right = root.querySelector('.pc-right');
  const base = await fromInput({ app: 'partcraft', root, stage, panels: { left, right }, map: MAP, status: root.querySelector('.pc-status'),
    say: (text, bad) => pc()?.status(text || '', bad) });
  if (!base) { document.documentElement.removeAttribute('data-cc-ws-boot'); return null; }
  const T = (k, v) => t(k, v);
  const byId = new Map(COMMANDS.map((c) => [c.id, c]));
  const cid = (id) => MAP[id] || id;
  const target = (c) => (c && c.sel ? root.querySelector(c.sel) || document.querySelector(c.sel) : null);
  const toolbarEl = () => root.querySelector(':scope > .pc-tools') || document.querySelector('.pc-tools');
  let engine = null, ctx = null, frame = 0, lastMode = null;
  const soon = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; engine?.refresh(); }); };
  const wsLabel = () => document.querySelector('[data-workspace]')?.selectedOptions?.[0]?.textContent.trim() || '';

  // ---- palettes: Properties (the right panel's [data-props]), the browser (feature tree, bodies, configurations) ----
  const propsEl = root.querySelector('[data-props]');
  const propTitle = el('span', { 'data-ws-pc-props-title': '' }, T('ws.props'));
  const section = (key, label, body) => el('details', { className: 'ws-pc-sec', open: true, 'data-ws-pc-sec': key }, el('summary', {}, label), body);
  const treeSlot = el('div', { className: 'ws-pc-tree' });
  const bodiesSlot = el('div', { className: 'ws-pc-bodies', 'data-ws-pc-bodies': '' });
  const configsSlot = el('div', { className: 'ws-pc-configs', 'data-ws-pc-configs': '' });
  const browserEl = el('div', { className: 'ws-pc-browser', 'data-ws-pc-browser': '' },
    section('tree', T('ws.browser.tree'), treeSlot), section('bodies', T('ws.browser.bodies'), bodiesSlot), section('configs', T('ws.browser.configs'), configsSlot));
  const treeSec = root.querySelector('[data-tree]')?.closest('.pc-sec') || null;
  const treeHome = document.createComment('workspace: feature tree home');   // i18n-ignore: a comment node
  let bodiesSig = null, configsSig = null;
  function renderBodies() {
    const p = pc(); if (!p || bodiesSlot.contains(document.activeElement)) return;
    const bs = p.regen?.bodies || [];
    const sig = JSON.stringify([bs.map((b) => [b.id, Math.round((b.volume || 0) * 1000)]), p.regen?.stats?.bodies || 0, p.part?.bodyInfo || null]);
    if (sig === bodiesSig) return;
    bodiesSig = sig;
    const n = bs.length || p.regen?.stats?.bodies || 0;   // the mesh kernel counts bodies (Part facts) but keeps no list of them
    const block = bs.length > 1 && p.bodiesBlock ? p.bodiesBlock() : null;   // the part panel's own list: names and Show / Hide edit the part
    bodiesSlot.replaceChildren(block || el('p', { className: 'pc-note' }, n > 1 ? T('ws.bodies.n', { n }) : n === 1 ? T('ws.bodies.one') : T('ws.bodies.none')));
  }
  function renderConfigs() {
    const p = pc(); if (!p || configsSlot.contains(document.activeElement)) return;
    const cfg = p.part?.configs || null, rows = Array.isArray(cfg?.rows) ? cfg.rows : [];
    const sig = JSON.stringify([rows.map((r) => r.name), cfg?.active || null]);
    if (sig === configsSig) return;
    configsSig = sig;
    const list = rows.length ? el('ul', { className: 'ws-pc-config-list' }, rows.map((r) => el('li', { className: cfg.active === r.name ? 'is-active' : '' },
      el('span', { className: 'ws-pc-config-name' }, r.name), cfg.active === r.name ? el('span', { className: 'pc-muted' }, T('ws.configs.active')) : null,
      el('button', { type: 'button', className: 'pc-btn pc-btn-sm', 'data-ws-config-apply': r.name, title: T('ws.configs.apply.title', { name: r.name }) }, T('ws.configs.apply')))))
      : el('p', { className: 'pc-note' }, T('ws.configs.none'));
    configsSlot.replaceChildren(list, el('button', { type: 'button', className: 'pc-btn', 'data-ws-config-edit': '' }, T('ws.configs.edit')));
  }
  browserEl.addEventListener('click', (e) => {
    const apply = e.target.closest('[data-ws-config-apply]');
    if (apply) {   // the Parameters panel's own Apply button for that row (one undo step, as in classic)
      const own = root.querySelector('[data-params] [data-config-apply="' + CSS.escape(apply.dataset.wsConfigApply) + '"]');
      if (own) own.click(); else pc()?.status(T('ws.configs.gone'));
      configsSig = null; soon(); return;
    }
    if (e.target.closest('[data-ws-config-edit]')) {
      root.querySelector('#pc-tab-params')?.click();
      root.querySelector('[data-params] [data-configs]')?.scrollIntoView({ block: 'nearest' });
    }
  });

  // ---- the views: the model and the drawing sheet ----
  const VIEWS = () => [{ id: 'model', kind: '3d', name: T('ws.view.model'), icon: 'bi-box' }, { id: 'drawing', kind: 'sheet', name: T('ws.view.drawing'), icon: 'bi-easel' }];
  const viewNow = () => (pc()?.mode === 'drawing' ? 'drawing' : 'model');
  function goView(id) {
    const p = pc(); if (!p || !window.ccInput) return;
    if (id === 'drawing' && p.mode !== 'drawing') window.ccInput.run('drawing.open');
    else if (id === 'model' && p.mode === 'drawing') window.ccInput.run('drawing.back');
    soon();
  }

  const adapter = {
    ...base,
    app: 'partcraft', root, stage, panels: { left, right }, t: T,
    fill: ':is(.pc-gl, .pc-sketch, .pc-sheet, .pc-drop, .pc-busy)', flow: ':is(.pc-hint, .pc-sketch-bar)',   // i18n-ignore: selectors
    toolbar: toolbarEl,
    state() {
      const p = pc(); if (!p) return { document: null, name: '', dirty: false, busy: true, selection: [], tool: 'select' };
      const tool = p.tool || 'select';
      const doc = p.WS?.getWorkspace?.('illustrate')?._state?.doc;
      const sel = p.multi?.length ? [...p.multi] : p.sel ? [p.sel] : [];
      return { document: p.part || null, name: (p.mode === 'assembly' && p.asm?.name) || p.part?.name || '', dirty: !!p.dirty,
        busy: !!root.querySelector('[data-busy]:not([hidden])'), selection: sel, tool,
        toolLabel: tool === 'select' ? '' : TOOL_CMD[tool] ? base.tool(TOOL_CMD[tool]).label : T('ws.tool.drawing'),
        other: p.workspace === 'illustrate' && !!doc };
    },
    ribbon: base.ribbon,
    contextTab() {   // a sketch, the sheet, an assembly or Illustrate opens its own tab; the person may pick another after
      const p = pc(); if (!p) return null;
      if (p.workspace === 'illustrate') return TAB('illustrate');
      return p.mode === 'sketch' ? TAB('sketch') : p.mode === 'drawing' ? TAB('drawing') : p.mode === 'assembly' ? TAB('assembly') : null;
    },
    toolbox() {   // the toolbar's own groups, each named by its visible (translated) name
      const tb = toolbarEl(); if (!tb) return [];
      const owner = new Map(); for (const c of COMMANDS) { const b = target(c); if (b && !owner.has(b)) owner.set(b, c.id); }
      return [...tb.querySelectorAll(':scope > [role="group"]')].map((g, i) => ({ id: 'tb-' + (g.dataset.group || i), label: g.querySelector('.pc-tool-label')?.textContent.trim() || '',
        tools: [...new Set([...g.querySelectorAll('button')].map((b) => owner.get(b)).filter(Boolean))] })).filter((g) => g.tools.length);
    },
    pressed(id) {
      const c = byId.get(cid(id));
      if (c?.wsSwitch) return pc()?.workspace === c.wsSwitch;
      return target(c)?.getAttribute('aria-pressed') === 'true' || target(c)?.getAttribute('aria-checked') === 'true';
    },
    options(s) {
      const p = pc(); if (!p) return { title: '', text: '' };
      if (s.other) return { title: wsLabel(), text: T('ws.opt.manual') };
      if (p.workspace !== 'design') return { title: wsLabel(), text: T('ws.opt.ws', { ws: wsLabel() }) };
      const key = s.busy ? 'busy' : s.tool === 'sketch-plane' ? 'plane' : ['sketch', 'pick', 'drawing', 'assembly'].includes(p.mode) ? p.mode : s.tool === 'measure' ? 'measure' : 'model';
      return { title: wsLabel(), text: T('ws.opt.' + key) };
    },
    showProperties() {
      if (ctx?.has('palettes')) return;
      root.querySelector('#pc-tab-props')?.click();
    },
    slots: {
      layout: { label: '', nodes: (c) => ['view.iso', 'view.front', 'view.top', 'view.right'].map((id) => c.tool(id, 'quickbar', true)) },
      fit: { label: T('ws.slot.fit'), nodes: (c) => [c.tool('view.fit', 'viewbar', true)] },
      document: { label: T('ws.slot.part'), nodes: () => [root.querySelector('[data-kernel]'), root.querySelector('[data-build-state]')].filter(Boolean) },
    },
    palettes: {
      properties: { label: T('ws.props'), title: propTitle, body: () => propsEl },
      browser: { label: T('ws.browser'), hint: T('ws.browser.hint'), body: () => browserEl },
      panel: { label: T('ws.panel') },
    },
    views: {
      list: VIEWS, token: () => 'part', initial: () => 'model',
      current: () => (ctx?.block('viewtabs')?.mode === 'open' ? engine?.view()?.id || null : viewNow()),
      go: (id) => goView(id),
    },
    entered(c) {
      ctx = c; lastMode = null;
      if (c.has('palettes')) {
        if (treeSec) { treeSec.before(treeHome); treeSlot.append(treeSec); treeSec.classList.remove('ws-hide'); }
        // the right panel's Properties tab is the Properties palette now: show its other tabs
        for (const n of [root.querySelector('#pc-tab-props'), root.querySelector('#pc-sec-props')]) n?.classList.add('ws-hide');
        if (root.querySelector('#pc-tab-props')?.getAttribute('aria-selected') === 'true') root.querySelector('#pc-tab-params')?.click();
        bodiesSig = configsSig = null;
      }
      soon();
    },
    leaving(c) {
      if (c.has('palettes') && treeSec && treeHome.parentNode) { treeHome.after(treeSec); treeHome.remove(); }
    },
    left(c) {
      if (c.was && root.querySelector('#pc-tab-props')?.getAttribute('aria-selected') !== 'true') root.querySelector('#pc-tab-props')?.click();
      ctx = null;
    },
    resized() { pc()?.view?.resize?.(); },
    refresh(c) {
      const p = pc(); if (!p) return;
      // 'open' view tabs follow the drawing sheet: it opens as a tab, and the model comes back when it closes
      if (c.block('viewtabs')?.mode === 'open' && p.mode !== lastMode) {
        const was = lastMode; lastMode = p.mode;
        if (p.mode === 'drawing') c.open('drawing'); else if (was === 'drawing') c.open('model');
      }
      if (!c.has('palettes')) return;
      propTitle.textContent = root.querySelector('[data-props-h]')?.textContent.trim() || T('ws.props');
      if (root.querySelector('#pc-tab-props')?.getAttribute('aria-selected') === 'true') root.querySelector('#pc-tab-params')?.click();
      renderBodies(); renderConfigs();
    },
  };

  // the app tells the engine when it changed: its toolbar's states, the tree, the status line, the workspace, the right panel's tabs
  const mo = new MutationObserver(soon);
  const tb = toolbarEl();
  if (tb) mo.observe(tb, { subtree: true, attributes: true, attributeFilter: ['disabled', 'hidden', 'aria-pressed', 'aria-checked', 'aria-disabled', 'title'] });
  mo.observe(root, { attributes: true, attributeFilter: ['data-active-workspace'] });
  for (const s of ['[data-tree]', '.pc-status', '[data-props-h]', '[data-right-tabs]', '[data-busy]', '[data-params]']) {
    const n = root.querySelector(s); if (n) mo.observe(n, { subtree: true, childList: true, characterData: true, attributes: s === '[data-right-tabs]' || s === '[data-busy]', attributeFilter: s === '[data-right-tabs]' ? ['aria-selected'] : s === '[data-busy]' ? ['hidden'] : undefined });
  }
  engine = mountWorkspaces(adapter);
  engine.refresh();
  window.partcraftWorkspace = Object.freeze({ engine, inspect: () => { const st = adapter.state(); return { layout: engine.layout, view: engine.view()?.id || null, state: { ...st, document: st.document ? st.name : null }, contextTab: adapter.contextTab() }; } });   // tests, the console
  return engine;
}
