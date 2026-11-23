/* SPDX-License-Identifier: Apache-2.0 */
/**
 * section-ui.js — the live section view (View › Views › Section view, key X; 0.4 P13), in every workspace, on the part or
 * on an assembly's placed parts. UI module: the plane arithmetic is section.js, the cut and its caps are view3d.js
 * setSection. A card over the stage: the plane (front / top / right, or a flat face picked in the view), its position
 * (slider + mm), Flip (cut away the other side), Fill the cut (caps). Display only: nothing is saved or changed.
 *
 *   createSection(ctx) → { active, picking, start(), stop(), toggle(), pick(hit) → bool, keydown(ev) → bool, refresh() }
 *   ctx = { view, el, stage, status(msg, keep), changed(), blocked() → '' | why, facePlane(hit) → { n, c } (throws a
 *           plain message for anything that is not a flat face) }
 */
import { SECTION_BASES, sectionRange, flipSection } from './section.js';
import { t } from './i18n.js';

const BASE_KEYS = ['front', 'top', 'right'];

export function createSection(ctx) {
  const { view, el } = ctx;
  // n, c: the plane (the cut removes n·p > c); base: 'front'|'top'|'right'|'face'
  const st = { active: false, picking: false, base: 'front', n: SECTION_BASES.front, c: 0, face: null, flip: false, caps: true };
  let card = null;

  const box = () => ({ min: view.box.min.toArray(), max: view.box.max.toArray() });
  const range = () => sectionRange(box(), st.n);
  const apply = () => {
    if (!st.active) { view.setSection(null); return; }
    const s = st.flip ? flipSection({ n: st.n, c: st.c }) : { n: st.n, c: st.c };
    view.setSection({ ...s, caps: st.caps });
  };
  const middle = () => { const [lo, hi] = range(); st.c = (lo + hi) / 2; };
  const fmt = (v) => String(Number((Math.abs(v) < 1e-9 ? 0 : v).toFixed(3)));

  function setBase(k) {
    if (k === 'face') { if (st.face) { st.base = 'face'; st.n = st.face.n; st.c = st.face.c; } }
    else { st.base = k; st.n = SECTION_BASES[k]; middle(); }
    apply(); render();
  }

  function render() {
    if (!st.active) { card?.remove(); card = null; return; }
    if (!card) { card = el('div', { className: 'pc-measure pc-section', role: 'region', 'aria-label': t('section.title'), 'data-section': '' }); ctx.stage.append(card); }
    const [lo, hi] = range(), span = Math.max(hi - lo, 1e-9);
    const sel = el('select', { className: 'pc-select', 'aria-label': t('section.plane'), 'data-section-plane': '' },
      ...BASE_KEYS.map((k) => el('option', { value: k, selected: st.base === k }, t('section.base.' + k))),
      el('option', { value: 'face', selected: st.base === 'face', disabled: !st.face }, t('section.base.face')));
    sel.addEventListener('change', () => setBase(sel.value));
    const pickBtn = el('button', { type: 'button', className: 'pc-btn pc-btn-sm' + (st.picking ? ' is-primary' : ''), 'data-section-pick': '', onclick: arm },
      st.picking ? t('section.picking') : t('section.pick'));
    const slider = el('input', { type: 'range', className: 'pc-section-range', min: String(lo), max: String(hi), step: String(span / 1000), value: String(st.c), 'aria-label': t('section.position'), 'data-section-slider': '' });
    const num = el('input', { type: 'number', className: 'pc-input', step: 'any', value: fmt(st.c), 'aria-label': t('section.position_mm'), 'data-section-at': '' });
    slider.addEventListener('input', () => { st.c = Number(slider.value); num.value = fmt(st.c); apply(); });
    num.addEventListener('change', () => { const v = Number(num.value); if (Number.isFinite(v)) { st.c = v; slider.value = String(v); apply(); } else num.value = fmt(st.c); });
    const flip = el('input', { type: 'checkbox', checked: st.flip, 'data-section-flip': '' });
    flip.addEventListener('change', () => { st.flip = flip.checked; apply(); });
    const caps = el('input', { type: 'checkbox', checked: st.caps, 'data-section-caps': '' });
    caps.addEventListener('change', () => { st.caps = caps.checked; apply(); });
    card.replaceChildren(
      el('div', { className: 'pc-measure-head' }, el('strong', {}, t('section.title')),
        el('button', { type: 'button', className: 'pc-btn pc-btn-sm', 'data-section-close': '', title: t('section.close.title'), onclick: stop }, t('section.close'))),
      el('div', { className: 'pc-section-row' }, el('span', { className: 'k' }, t('section.plane')), sel, pickBtn),
      el('div', { className: 'pc-section-row' }, el('span', { className: 'k' }, t('section.position')), slider, num, el('span', { className: 'pc-muted' }, 'mm')),
      el('label', { className: 'pc-section-check' }, flip, el('span', {}, t('section.flip'))),
      el('label', { className: 'pc-section-check' }, caps, el('span', {}, t('section.caps'))),
      el('p', { className: 'pc-note' }, st.picking ? t('section.pick.hint') : t('section.note')));
  }

  function arm() {
    st.picking = !st.picking;
    ctx.status(st.picking ? t('section.pick.hint') : '', st.picking);
    render(); ctx.changed();
  }
  /** A view click while picking a face: true when taken. */
  function pick(hit) {
    if (!st.active || !st.picking) return false;
    try {
      const f = ctx.facePlane(hit);
      st.face = f; st.picking = false; ctx.status('');
      setBase('face');
    } catch (e) { ctx.status(e.message, true); }
    ctx.changed();
    return true;
  }
  function start() {
    const why = ctx.blocked();
    if (why) { ctx.status(why); return; }
    st.active = true; st.picking = false;
    if (st.base !== 'face') { st.n = SECTION_BASES[st.base]; middle(); }
    apply(); render(); ctx.changed();
  }
  function stop() {
    if (!st.active) return;
    st.active = false; st.picking = false;
    apply(); render(); ctx.changed();
  }
  /** The model changed (rebuild, assembly moves): keep the plane, refresh the slider's ends. */
  function refresh() { if (st.active) { apply(); render(); } }
  function keydown(e) {
    if (!st.active || e.key !== 'Escape') return false;
    if (st.picking) { arm(); return true; }
    stop(); return true;
  }
  return { start, stop, toggle: () => (st.active ? stop() : start()), pick, keydown, refresh, get active() { return st.active; }, get picking() { return st.picking; }, state: st };
}
