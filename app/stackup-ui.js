/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stackup-ui.js — Tolerance stack-ups in an assembly (0.6 LC.18, session `lc-make`): Assembly › Stack-up. A card over the
 * stage, like Measure. The maths is stackup.js (Node-tested); this file is the card and the picking.
 *
 *   createStackup(ctx) → { active, picking, start(), stop(), toggle(), pick(hit, ev) → bool, keydown(ev) → bool, refresh() }
 *   ctx = { el, btn, stage, view, THREE, status(msg, keep), asm() → the assembly | null, world() → Map(inst → mat4: the real
 *           places, not an exploded view), instName(id), partOf(inst id) → part, commit(label, fn) (one undo step on the
 *           assembly), download(text, name, type), fileBase(), tokens() }
 * Picking the chain: click the faces the chain runs through, in order (start at one side of the gap, end at the other). Two
 * clicks on one part make that part's dimension; a click on another part makes the interface between them (no tolerance until
 * one is typed). Enter or Done ends, Backspace takes the last click back, Esc cancels. The direction is X, Y or Z of the
 * assembly, or the first face's normal. Every change is one undo step (Ctrl+Z), and the stack-ups are saved in the assembly.
 */
import * as SU from './stackup.js';
import { describe as gdtWords } from './gdt.js';
import { t } from './i18n.js';

const f = (v, dp = 4) => String(Number((Math.abs(v) < 1e-12 ? 0 : v).toFixed(dp)));
const pm = (v) => (v >= 0 ? '+' : '−') + f(Math.abs(v));
const DIRS = { x: [1, 0, 0], y: [0, 1, 0], z: [0, 0, 1] };

export function createStackup(ctx) {
  const { el, btn } = ctx;
  const st = { active: false, picking: false, picks: [], dirKey: 'x', faceDir: null, sel: null };
  let card = null, uid = 0;
  const id = () => 'pc-stk-' + (++uid);
  const stacks = () => ctx.asm()?.stackups || [];
  const cur = () => stacks().find((s) => s.id === st.sel) || stacks()[0] || null;
  const nextId = (list, p) => { let n = 1; while (list.some((x) => x.id === p + n)) n++; return p + n; };
  const commit = (label, fn) => { ctx.commit(label, () => { const a = ctx.asm(); if (!a.stackups) a.stackups = []; fn(a); if (!a.stackups.length) delete a.stackups; }); render(); };
  const edit = (label, fn) => commit(label, (a) => { const s = a.stackups.find((x) => x.id === (cur()?.id)); if (s) fn(s, a); });

  function start() { if (!ctx.asm()) { ctx.status(t('stack.needs_asm'), true); return; } st.active = true; render(); }
  function stop() { st.active = false; endPick(false); card?.remove(); card = null; }
  const toggle = () => (st.active ? stop() : start());

  // ---------------------------------------------------------------- picking the chain
  function beginPick() { st.picking = true; st.picks = []; st.faceDir = null; ctx.status(t('stack.pick.status', { n: 0 }), true); marks(); render(); }
  function endPick(apply) {
    if (!st.picking) return;
    st.picking = false;
    if (apply && st.picks.length >= 2) {
      const dir = st.dirKey === 'face' && st.faceDir ? st.faceDir : DIRS[st.dirKey] || DIRS.x;
      const links = SU.fromPicks(st.picks, dir, { part: (a) => t('stack.link.part', { name: ctx.instName(a.inst) }), iface: (a, b) => t('stack.link.iface', { a: ctx.instName(a.inst), b: ctx.instName(b.inst) }) });
      const exists = !!cur();
      commit(t('stack.undo.chain'), (a) => {
        let s = exists ? a.stackups.find((x) => x.id === cur().id) : null;
        if (!s) { s = { id: nextId(a.stackups, 's'), name: t('stack.default_name', { n: a.stackups.length + 1 }), dir: SU.unit(dir), spec: null, links: [] }; a.stackups.push(s); st.sel = s.id; }
        s.dir = SU.unit(dir); s.links = links;
        // a part's general tolerance (its title block) is the first guess for its dimensions
        for (const l of s.links) if (l.inst) applyGeneral(l);
      });
      ctx.status(t('stack.pick.done', { n: links.length }));
    } else if (apply) ctx.status(t('stack.pick.few'), true);
    else ctx.status('');
    st.picks = []; marks(); render();
  }
  function pick(h) {
    if (!st.picking) return false;
    if (!h || h.kind !== 'face' || !h.inst) { ctx.status(t('stack.pick.face'), true); return true; }
    const M = ctx.world().get(h.inst);
    if (!M) return true;
    const p = h.point, at = [M[0] * p[0] + M[4] * p[1] + M[8] * p[2] + M[12], M[1] * p[0] + M[5] * p[1] + M[9] * p[2] + M[13], M[2] * p[0] + M[6] * p[1] + M[10] * p[2] + M[14]];
    if (!st.picks.length && h.normal) { const n = h.normal; st.faceDir = SU.unit([M[0] * n[0] + M[4] * n[1] + M[8] * n[2], M[1] * n[0] + M[5] * n[1] + M[9] * n[2], M[2] * n[0] + M[6] * n[1] + M[10] * n[2]]); }
    st.picks.push({ inst: h.inst, at, label: ctx.instName(h.inst) });
    ctx.status(t('stack.pick.status', { n: st.picks.length }), true);
    marks(); render();
    return true;
  }
  function keydown(e) {
    if (!st.active) return false;
    if (st.picking) {
      if (e.key === 'Enter') { endPick(true); return true; }
      if (e.key === 'Escape') { endPick(false); return true; }
      if (e.key === 'Backspace') { st.picks.pop(); marks(); render(); return true; }
      return false;
    }
    if (e.key === 'Escape') { stop(); return true; }
    return false;
  }
  function marks() {
    const { THREE, view } = ctx;
    if (!THREE || !view?.setOverlay) return;
    if (!st.picks.length) { view.setOverlay('stackup', null); view.render?.(); return; }
    const g = new THREE.Group();
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(st.picks.flatMap((p) => p.at), 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 9, sizeAttenuation: false, color: ctx.tokens?.().pick || '#d9822b', depthTest: false }));
    const line = new THREE.Line(geo, new THREE.LineBasicMaterial({ color: ctx.tokens?.().pick || '#d9822b', depthTest: false }));
    pts.renderOrder = line.renderOrder = 11;
    g.add(pts, line);
    view.setOverlay('stackup', g); view.render?.();
  }

  // ---------------------------------------------------------------- tolerances from the parts
  const notesOf = (inst) => (ctx.partOf(inst)?.drawing?.notes || []).filter((n) => SU.fromGdt(n));
  const generalOf = (inst) => ctx.partOf(inst)?.drawing?.title?.tolerance || '';
  function applyGeneral(l) {
    const g = SU.generalTol(generalOf(l.inst), l.nominal);
    if (g) { l.up = g.up; l.lo = g.lo; l.source = 'general'; l.ref = g.rule; }
  }
  function setSource(l, v) {
    if (v === 'typed') { l.source = 'typed'; delete l.ref; return; }
    if (v === 'general') { const g = SU.generalTol(generalOf(l.inst), l.nominal); if (g) { l.up = g.up; l.lo = g.lo; l.source = 'general'; l.ref = g.rule; } else ctx.status(t('stack.general.none', { name: ctx.instName(l.inst) }), true); return; }
    if (v.startsWith('gdt:')) { const n = notesOf(l.inst).find((x) => x.id === v.slice(4)); const g = SU.fromGdt(n); if (g) { l.up = g.up; l.lo = g.lo; l.source = 'gdt'; l.ref = n.id; ctx.status(g.words.join(' '), true); } }
  }

  // ---------------------------------------------------------------- the card
  const num = (value, onchange, attrs = {}) => { const i = el('input', { type: 'number', className: 'pc-input pc-stk-num', value: f(value), step: 'any', id: id(), ...attrs }); i.addEventListener('change', () => { const v = parseFloat(i.value); if (Number.isFinite(v)) onchange(v); else render(); }); return i; };
  const select = (opts, value, onchange, attrs = {}) => { const s = el('select', { className: 'pc-select pc-select-sm', id: id(), ...attrs }, ...opts.map(([v, l]) => el('option', { value: v, selected: v === value }, l))); s.addEventListener('change', () => onchange(s.value)); return s; };
  const labelled = (label, input) => el('label', { className: 'pc-stk-field', htmlFor: input.id }, el('span', {}, label), input);

  function linkRow(l, i, res) {
    const r = res.rows.find((x) => x.link.id === l.id);
    const srcOpts = [['typed', t('stack.source.typed')]];
    if (l.inst) {
      if (SU.generalTol(generalOf(l.inst), l.nominal)) srcOpts.push(['general', t('stack.source.general_v', { rule: SU.generalTol(generalOf(l.inst), l.nominal).rule })]);
      for (const n of notesOf(l.inst)) srcOpts.push(['gdt:' + n.id, t('stack.source.gdt_v', { what: gdtWords(n) })]);
    }
    const srcVal = l.source === 'gdt' ? 'gdt:' + l.ref : l.source === 'general' ? 'general' : 'typed';
    const ed = (label, fn) => edit(label, (s) => { const x = s.links.find((y) => y.id === l.id); if (x) fn(x, s); });
    return el('tr', { dataset: { stkLink: String(i) } },
      el('td', { className: 'pc-stk-rank' }, r ? String(r.rank) : ''),
      el('td', {}, l.label || ''),
      el('td', {}, select([['1', '+'], ['-1', '−']], String(l.sign), (v) => ed(t('stack.undo.edit'), (x) => { x.sign = +v; }), { 'aria-label': t('stack.col.sign') })),
      el('td', {}, num(l.nominal, (v) => ed(t('stack.undo.edit'), (x) => { x.nominal = Math.max(0, v); }), { min: 0, 'aria-label': t('stack.col.nominal'), dataset: { stkNominal: String(i) } })),
      el('td', {}, num(l.up, (v) => ed(t('stack.undo.edit'), (x) => { x.up = v; x.lo = Math.min(x.lo, v); x.source = 'typed'; delete x.ref; }), { 'aria-label': t('stack.col.up'), dataset: { stkUp: String(i) } })),
      el('td', {}, num(l.lo, (v) => ed(t('stack.undo.edit'), (x) => { x.lo = v; x.up = Math.max(x.up, v); x.source = 'typed'; delete x.ref; }), { 'aria-label': t('stack.col.lo'), dataset: { stkLo: String(i) } })),
      el('td', {}, select(srcOpts, srcVal, (v) => ed(t('stack.undo.edit'), (x) => setSource(x, v)), { 'aria-label': t('stack.col.source'), dataset: { stkSource: String(i) } })),
      // i18n-ignore-next-line: a CSS custom property, not words
      el('td', { className: 'pc-stk-share' }, r ? el('span', { className: 'pc-stk-bar', style: `--share:${(r.rssShare * 100).toFixed(1)}%` }, f(r.rssShare * 100, 1) + ' %') : ''),
      el('td', {}, btn('×', () => edit(t('stack.undo.remove'), (s) => { s.links = s.links.filter((y) => y.id !== l.id); }), 'pc-btn pc-btn-sm', { title: t('stack.link.remove'), 'aria-label': t('stack.link.remove') })));
  }

  function render() {
    if (!st.active) { card?.remove(); card = null; return; }
    if (!card) { card = el('div', { className: 'pc-measure pc-stk', role: 'region', 'aria-label': t('stack.title'), 'data-stackup': '' }); ctx.stage.append(card); }
    const s = cur();
    if (s) st.sel = s.id;
    const kids = [el('div', { className: 'pc-measure-head' }, el('strong', {}, t('stack.title')), btn(t('app.btn.close'), () => stop(), 'pc-btn pc-btn-sm', { dataset: { stkClose: '1' } }))];
    const list = stacks();
    const row = [];
    if (list.length) row.push(select(list.map((x) => [x.id, x.name]), s?.id, (v) => { st.sel = v; render(); }, { 'aria-label': t('stack.which'), dataset: { stkWhich: '1' } }));
    row.push(btn(t('stack.new'), () => { commit(t('stack.undo.new'), (a) => { const n = { id: nextId(a.stackups, 's'), name: t('stack.default_name', { n: a.stackups.length + 1 }), dir: [1, 0, 0], spec: null, links: [] }; a.stackups.push(n); st.sel = n.id; }); }, 'pc-btn pc-btn-sm', { dataset: { stkNew: '1' } }));
    if (s) row.push(btn(t('stack.delete'), () => commit(t('stack.undo.delete'), (a) => { a.stackups = a.stackups.filter((x) => x.id !== s.id); st.sel = null; }), 'pc-btn pc-btn-sm'));
    kids.push(el('div', { className: 'pc-actions' }, ...row));
    // the chain
    const dirSel = select([['x', 'X'], ['y', 'Y'], ['z', 'Z'], ['face', t('stack.dir.face')]], st.dirKey, (v) => { st.dirKey = v; }, { dataset: { stkDir: '1' } });
    if (st.picking) {
      kids.push(el('p', { className: 'pc-props-sub', dataset: { stkPicking: '1' } }, t('stack.pick.help', { n: st.picks.length })),
        el('div', { className: 'pc-actions' }, btn(t('stack.pick.end'), () => endPick(true), 'pc-btn is-primary pc-btn-sm', { dataset: { stkDone: '1' } }), btn(t('app.btn.cancel'), () => endPick(false), 'pc-btn pc-btn-sm')));
    } else kids.push(el('div', { className: 'pc-stk-row' }, labelled(t('stack.dir'), dirSel), btn(t(s?.links.length ? 'stack.pick.again' : 'stack.pick.start'), () => beginPick(), 'pc-btn pc-btn-sm', { dataset: { stkPick: '1' }, title: t('stack.pick.title') })));
    if (s) {
      kids.push(el('div', { className: 'pc-stk-row' },
        labelled(t('stack.name'), (() => { const i = el('input', { type: 'text', className: 'pc-input', value: s.name, maxLength: SU.LIMITS.name, id: id() }); i.addEventListener('change', () => edit(t('stack.undo.edit'), (x) => { x.name = i.value.replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, SU.LIMITS.name) || x.name; })); return i; })()),
        labelled(t('stack.spec.min'), num(s.spec?.min ?? NaN, (v) => edit(t('stack.undo.edit'), (x) => { x.spec = { ...(x.spec || {}), min: v }; }), { dataset: { stkMin: '1' }, value: Number.isFinite(s.spec?.min) ? f(s.spec.min) : '' })),
        labelled(t('stack.spec.max'), num(s.spec?.max ?? NaN, (v) => edit(t('stack.undo.edit'), (x) => { x.spec = { ...(x.spec || {}), max: v }; }), { dataset: { stkMax: '1' }, value: Number.isFinite(s.spec?.max) ? f(s.spec.max) : '' }))));
      const res = SU.analyze(s);
      if (s.links.length) {
        kids.push(el('div', { className: 'pc-stk-wrap' }, el('table', { className: 'pc-bom pc-stk-table' },
          el('thead', {}, el('tr', {}, ...['stack.col.rank', 'stack.col.link', 'stack.col.sign', 'stack.col.nominal', 'stack.col.up', 'stack.col.lo', 'stack.col.source', 'stack.col.share', ''].map((k) => el('th', {}, k ? t(k) : '')))),
          el('tbody', {}, ...s.links.map((l, i) => linkRow(l, i, res))))));
      } else kids.push(el('p', { className: 'pc-props-sub' }, t('stack.empty')));
      kids.push(el('div', { className: 'pc-actions' }, btn(t('stack.link.add'), () => edit(t('stack.undo.add'), (x) => { x.links.push({ id: nextId(x.links, 'l'), label: t('stack.link.typed'), inst: null, sign: 1, nominal: 0, up: 0, lo: 0, sens: 1, source: 'typed' }); }), 'pc-btn pc-btn-sm', { dataset: { stkAdd: '1' } })));
      if (s.links.length) {
        const dl = el('dl', { className: 'pc-dl pc-measure-dl', dataset: { stkResult: '1' } });
        const add = (k, v) => dl.append(el('dt', {}, k), el('dd', {}, v));
        add(t('stack.r.nominal'), f(res.nominal) + ' mm');
        if (Math.abs(res.mean - res.nominal) > 1e-9) add(t('stack.r.mean'), f(res.mean) + ' mm');
        add(t('stack.r.wc'), t('stack.r.range', { tol: f(res.wc.tol), min: f(res.wc.min), max: f(res.wc.max) }));
        add(t('stack.r.rss'), t('stack.r.range', { tol: f(res.rss.tol), min: f(res.rss.min), max: f(res.rss.max) }));
        if (res.spec) {
          add(t('stack.r.spec_wc'), res.spec.wcOk ? t('stack.r.ok') : t('stack.r.out'));
          add(t('stack.r.spec_rss'), t('stack.r.ppm', { ppm: res.spec.ppm < 0.01 ? '< 0.01' : f(res.spec.ppm, 2) }));
        }
        kids.push(dl, el('p', { className: 'pc-props-sub' }, t('stack.r.note')),
          el('div', { className: 'pc-actions' }, btn(t('stack.csv'), () => ctx.download(SU.csv(s, res, (i) => (i ? ctx.instName(i) : '')), t('stack.csv.file', { name: ctx.fileBase(), stack: s.name }), 'text/csv'), 'pc-btn pc-btn-sm', { dataset: { stkCsv: '1' } })));
      }
    }
    card.replaceChildren(...kids);
  }

  return {
    get active() { return st.active; }, get picking() { return st.picking; },
    start, stop, toggle, pick, keydown, refresh: () => render(),
  };
}
