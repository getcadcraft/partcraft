/* SPDX-License-Identifier: Apache-2.0 */
/**
 * draft-ui.js — surface analysis on the part (View › Views › Draft analysis / Zebra stripes / Curvature; 0.4 P21, P22): one
 * card with Show: draft angle, zebra stripes (re-drawn as the view turns), or mean curvature.
 * Draft: the part coloured by its draft angle against a pull
 * direction. UI module: the arithmetic is analysis.js, the colours go through view3d.js setFaceColors. A card over the
 * stage: pull direction (±X, ±Y, ±Z or a flat face picked in the view, with Reverse), the minimum draft (degrees), a legend
 * with each class's share of the area. Display only: nothing is saved or changed. Design workspace, the part (not
 * assemblies, sketches or drawings).
 *
 *   createDraft(ctx) → { active, mode, picking, start(mode?), stop(), toggle(mode?), pick(hit) → bool, keydown(ev) → bool, refresh(), state }
 *   ctx = { view, el, stage, status(msg, keep), changed(), blocked() → '' | why, mesh() → the part's mesh | null,
 *           faceNormal(hit) → unit normal of a flat face (throws a plain message otherwise), color(token) → [r, g, b],
 *           viewDir() → the camera's looking direction }
 */
import { PULLS, draftAnalysis, zebraColors, curvatureColors } from './analysis.js';
import { t } from './i18n.js';

const PULL_KEYS = Object.keys(PULLS);
const TOKENS = { positive: '--layer-green', needs: '--layer-ochre', negative: '--layer-red' };

export function createDraft(ctx) {
  const { el } = ctx;
  const st = { active: false, mode: 'draft', picking: false, key: '+y', face: null, reverse: false, min: 1, areas: null, stripes: 16, lim: null };
  let card = null, camOff = null, camT = 0;
  const MODES = ['draft', 'zebra', 'curvature'];

  const pull = () => {
    const d = st.key === 'face' && st.face ? st.face : PULLS[st.key] || PULLS['+y'];
    return st.reverse ? d.map((v) => -v) : d;
  };
  function apply() {
    const mesh = st.active ? ctx.mesh() : null;
    if (!mesh) { st.areas = null; st.lim = null; ctx.view.setFaceColors(null); return; }
    if (st.mode === 'zebra') { ctx.view.setFaceColors(zebraColors(mesh, ctx.viewDir(), st.stripes, { dark: ctx.color('--ink'), light: ctx.color('--sheet-2') })); return; }
    if (st.mode === 'curvature') { const r = curvatureColors(mesh, { concave: ctx.color('--layer-blue'), flat: ctx.color('--sheet-2'), convex: ctx.color('--layer-red') }); st.lim = r.lim; ctx.view.setFaceColors(r.colors); return; }
    const colors = Object.fromEntries(Object.entries(TOKENS).map(([k, tok]) => [k, ctx.color(tok)]));
    const r = draftAnalysis(mesh, pull(), st.min, colors);
    st.areas = r.areas;
    ctx.view.setFaceColors(r.colors);
  }
  /** Zebra stripes follow the view: redraw when the camera moves (a little after, so dragging stays smooth). */
  function watchCamera(on) {
    if (camOff) { camOff(); camOff = null; }
    if (!on) return;
    const c = ctx.view.controls, f = () => { clearTimeout(camT); camT = setTimeout(() => { if (st.active && st.mode === 'zebra') apply(); }, 60); };
    c.addEventListener('change', f);
    camOff = () => { c.removeEventListener('change', f); clearTimeout(camT); };
  }
  const pct = (a) => (st.areas && st.areas.total > 0 ? (100 * a / st.areas.total).toFixed(1) : '0.0');

  function render() {
    if (!st.active) { card?.remove(); card = null; return; }
    if (!card) { card = el('div', { className: 'pc-measure pc-section pc-draft', role: 'region', 'data-draft': '' }); ctx.stage.append(card); }
    card.setAttribute('aria-label', t('analysis.title.' + st.mode));
    card.dataset.analysis = st.mode;
    const modeSel = el('select', { className: 'pc-select', 'aria-label': t('analysis.show'), 'data-analysis-mode': '' }, ...MODES.map((m) => el('option', { value: m, selected: st.mode === m }, t('analysis.mode.' + m))));
    modeSel.addEventListener('change', () => { setMode(modeSel.value); });
    const head = el('div', { className: 'pc-measure-head' }, el('strong', {}, t('analysis.title.' + st.mode)),
      el('button', { type: 'button', className: 'pc-btn pc-btn-sm', 'data-draft-close': '', title: t('draft.close.title'), onclick: stop }, t('draft.close')));
    const showRow = el('div', { className: 'pc-section-row' }, el('span', { className: 'k' }, t('analysis.show')), modeSel);
    if (st.mode === 'zebra') {
      const n = el('input', { type: 'number', className: 'pc-input', min: '4', max: '64', step: '2', value: String(st.stripes), 'aria-label': t('analysis.stripes'), 'data-zebra-stripes': '' });
      n.addEventListener('change', () => { const v = Math.round(Number(n.value)); if (v >= 4 && v <= 64) { st.stripes = v; apply(); } else n.value = String(st.stripes); });
      card.replaceChildren(head, showRow, el('div', { className: 'pc-section-row' }, el('span', { className: 'k' }, t('analysis.stripes')), n), el('p', { className: 'pc-note' }, t('analysis.zebra.note')));
      return;
    }
    if (st.mode === 'curvature') {
      const lim = st.lim ? String(+st.lim.toPrecision(3)) : '—', rad = st.lim ? String(+(1 / st.lim).toPrecision(3)) : '—';
      const bar = el('div', { className: 'pc-curv-bar', 'aria-hidden': 'true', style: 'background:linear-gradient(90deg, var(--layer-blue), var(--sheet-2), var(--layer-red))' });   // i18n-ignore: CSS
      card.replaceChildren(head, showRow, bar, el('div', { className: 'pc-curv-ends' }, el('span', {}, t('analysis.curv.concave')), el('span', {}, t('analysis.curv.flat')), el('span', {}, t('analysis.curv.convex'))),
        el('p', { className: 'pc-note', dataset: { curvLimit: lim } }, t('analysis.curv.note', { lim, rad })));
      return;
    }
    const sel = el('select', { className: 'pc-select', 'aria-label': t('draft.pull'), 'data-draft-pull': '' },
      ...PULL_KEYS.map((k) => el('option', { value: k, selected: st.key === k }, t('draft.pull.' + k.replace('+', 'p').replace('-', 'm')))),
      el('option', { value: 'face', selected: st.key === 'face', disabled: !st.face }, t('draft.pull.face')));
    sel.addEventListener('change', () => { st.key = sel.value; apply(); render(); });
    const pickBtn = el('button', { type: 'button', className: 'pc-btn pc-btn-sm' + (st.picking ? ' is-primary' : ''), 'data-draft-pick': '', onclick: arm }, st.picking ? t('draft.picking') : t('draft.pick'));
    const rev = el('input', { type: 'checkbox', checked: st.reverse, 'data-draft-reverse': '' });
    rev.addEventListener('change', () => { st.reverse = rev.checked; apply(); render(); });
    const min = el('input', { type: 'number', className: 'pc-input', min: '0', max: '45', step: '0.5', value: String(st.min), 'aria-label': t('draft.min'), 'data-draft-min': '' });
    min.addEventListener('change', () => { const v = Number(min.value); if (Number.isFinite(v) && v >= 0 && v <= 45) { st.min = v; apply(); render(); } else min.value = String(st.min); });
    const row = (cls) => el('li', { dataset: { draftClass: cls } },
      el('i', { className: 'cs-swatch', style: `background:var(${TOKENS[cls]})`, 'aria-hidden': 'true' }),   // i18n-ignore: CSS
      el('span', {}, t('draft.class.' + cls, { min: st.min })), el('span', { className: 'pc-muted', dataset: { draftPct: cls } }, pct(st.areas?.[cls] || 0) + ' %'));
    card.replaceChildren(head, showRow,
      el('div', { className: 'pc-section-row' }, el('span', { className: 'k' }, t('draft.pull')), sel, pickBtn),
      el('label', { className: 'pc-section-check' }, rev, el('span', {}, t('draft.reverse'))),
      el('div', { className: 'pc-section-row' }, el('span', { className: 'k' }, t('draft.min')), min, el('span', { className: 'pc-muted' }, '°')),
      el('ul', { className: 'pc-draft-legend' }, row('positive'), row('needs'), row('negative')),
      el('p', { className: 'pc-note' }, st.picking ? t('draft.pick.hint') : t('draft.note')));
  }

  function arm() { st.picking = !st.picking; ctx.status(st.picking ? t('draft.pick.hint') : '', st.picking); render(); ctx.changed(); }
  function pick(hit) {
    if (!st.active || !st.picking) return false;
    try { st.face = ctx.faceNormal(hit); st.key = 'face'; st.picking = false; ctx.status(''); apply(); render(); } catch (e) { ctx.status(e.message, true); }
    ctx.changed();
    return true;
  }
  function setMode(m) {
    if (!MODES.includes(m)) return;
    st.mode = m; st.picking = false;
    watchCamera(st.active && m === 'zebra');
    apply(); render(); ctx.changed();
  }
  function start(mode) {
    const why = ctx.blocked();
    if (why) { ctx.status(why); return; }
    if (!ctx.mesh()) { ctx.status(t('draft.no_part')); return; }
    if (MODES.includes(mode)) st.mode = mode;
    st.active = true; st.picking = false;
    watchCamera(st.mode === 'zebra');
    apply(); render(); ctx.changed();
  }
  function stop() {
    if (!st.active) return;
    st.active = false; st.picking = false;
    watchCamera(false);
    apply(); render(); ctx.changed();
  }
  /** The part was rebuilt (setMesh dropped the colours) or the theme changed: colour it again. */
  function refresh() {
    if (!st.active) return;
    if (ctx.blocked()) { stop(); return; }
    apply(); render();
  }
  function keydown(e) {
    if (!st.active || e.key !== 'Escape') return false;
    if (st.picking) { arm(); return true; }
    stop(); return true;
  }
  /** The menu: the same mode again closes the card; another mode switches it. */
  const toggle = (mode = 'draft') => (st.active && st.mode === mode ? stop() : st.active ? setMode(mode) : start(mode));
  return { start, stop, toggle, setMode, pick, keydown, refresh, get active() { return st.active; }, get mode() { return st.mode; }, get picking() { return st.picking; }, state: st };
}
