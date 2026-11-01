/* SPDX-License-Identifier: Apache-2.0 */
/**
 * motion-ui.js — Motion study in an assembly (0.8 EG.7, session part_PART_2): Assembly › Motion. A card over the stage, like Stack-up. The
 * maths is motion.js (Node-tested); this file is the card and the point picking.
 *
 *   createMotion(ctx) → { active, picking, start(), stop(), toggle(), pick(hit, ev) → bool, keydown(ev) → bool, refresh() }
 *   ctx = { el, btn, stage, status(msg, keep), asm() → the assembly | null, builds() → Map(pid → build), M() → manifold-3d,
 *           instName(id), download(text, name, type), fileBase() }
 * Choose the joint and the value to drive, from / to, how long and by which law; Add a point follows the middle of a part or a point you
 * click on it; Run. The card shows the clashes and the least clearance along the way and draws position, speed, acceleration, the value
 * and the clearance against time. Save CSV / Save plot write what is on the card. The study's settings are kept in the assembly file
 * (asm.motion, 0.8 EG.7 round 3: ctx.save), its results are not (Run makes them again); a scrub bar moves the assembly through the run
 * (ctx.pose / ctx.unpose: shown only, the joint's own value is not changed).
 */
import * as A from './assembly.js';
import * as MO from './motion.js';
import { t } from './i18n.js';

const f = (v, dp = 3) => String(Number((Math.abs(v) < 1e-12 ? 0 : v).toFixed(dp)));
const PLOTS = ['position', 'speed', 'acceleration', 'value', 'clearance'];

export function createMotion(ctx) {
  const { el, btn } = ctx;
  const st = { scrub: null, scrubbing: false, active: false, picking: false, joint: null, key: null, from: 0, to: 90, duration: 2, steps: 24, law: 'linear', clearance: true, limit: '', tracks: [], inst: null, plot: 'position', result: null, error: '' };
  let card = null, uid = 0;
  const id = () => 'pc-mot-' + (++uid);
  const joints = () => (ctx.asm()?.joints || []).filter((j) => (A.JOINT_DOF[j.type] || []).length);
  const cur = () => joints().find((j) => j.id === st.joint) || joints()[0] || null;

  /** The settings kept in the assembly file (asm.motion) back into the card. */
  function load() {
    const m = ctx.asm()?.motion;
    if (!m) return false;
    Object.assign(st, { joint: m.joint, key: m.key, from: m.from, to: m.to, duration: m.duration, steps: m.steps, law: MO.LAWS[m.law] ? m.law : 'linear', clearance: m.clearance,
      limit: m.limit === null || m.limit === undefined ? '' : String(m.limit), tracks: m.tracks.map((q) => ({ ...q })) });
    return true;
  }
  /** The settings into the assembly file (outside undo, like a view setting; the file is marked changed). */
  const save = () => ctx.save?.({ joint: st.joint, key: st.key, from: st.from, to: st.to, duration: st.duration, steps: st.steps, law: st.law, clearance: st.clearance,
    limit: st.limit !== '' && Number.isFinite(+st.limit) ? +st.limit : null, tracks: st.tracks.map((q) => ({ inst: q.inst, at: q.at, name: q.name })) });
  function start() { if (!ctx.asm()) { ctx.status(t('motion.needs_asm'), true); return; } st.active = true; st.result = null; if (!load() || !cur() || cur().id !== st.joint) fit(); else { const keep = { from: st.from, to: st.to, key: st.key }; fit(); Object.assign(st, keep); } render(); }
  function stop() { if (st.scrub !== null && st.scrub !== undefined) { st.scrub = null; ctx.unpose?.(); } st.active = false; st.picking = false; card?.remove(); card = null; }
  const toggle = () => (st.active ? stop() : start());

  /** The defaults for the chosen joint: its first value, over its limits or a usual span. */
  function fit() {
    const j = cur();
    if (!j) return;
    st.joint = j.id;
    const dof = A.JOINT_DOF[j.type];
    if (!dof.includes(st.key)) st.key = dof[0];
    const L = A.limitOf(j, st.key);
    const deg = A.VALUE_UNIT[st.key] === 'deg';
    st.from = L ? L.min : 0; st.to = L ? L.max : deg ? 90 : 50;
    if (!st.inst || !ctx.asm().instances.some((i) => i.id === st.inst)) st.inst = ctx.asm().instances[0]?.id || null;
  }

  function run() {
    const asm = ctx.asm(), j = cur();
    st.error = '';
    if (!asm || !j) return;
    save();
    if (st.scrub !== null && st.scrub !== undefined) { st.scrub = null; ctx.unpose?.(); }
    try {
      st.result = MO.motionStudy(asm, ctx.builds(), ctx.M(), {
        joint: j.id, key: st.key, from: st.from, to: st.to, duration: st.duration, steps: st.steps, law: st.law,
        tracks: st.tracks.map((q) => ({ inst: q.inst, at: q.at, name: q.name })),
        clearance: st.clearance ? { search: 50, ...(st.limit !== '' && Number.isFinite(+st.limit) ? { limit: +st.limit } : {}) } : undefined,
      });
      const s = st.result.summary;
      ctx.status(s.clashSteps ? t('motion.done_clash', { n: s.clashSteps, of: st.result.rows.length, value: f(s.firstClash.value) }) : t('motion.done_ok', { n: st.result.rows.length }), true);
    } catch (e) {
      if (!(e instanceof MO.MotionError)) throw e;
      st.result = null; st.error = e.message + (e.next.length ? ' ' + e.next.join(' ') : '');
    }
    render();
  }

  // ---------------------------------------------------------------- following a point
  function beginPick() { st.picking = true; ctx.status(t('motion.pick.status'), true); render(); }
  function pick(h) {
    if (!st.picking) return false;
    if (!h || h.kind !== 'face' || !h.inst) { ctx.status(t('motion.pick.face'), true); return true; }
    st.picking = false;
    st.tracks.push({ inst: h.inst, at: h.point.slice(0, 3), name: ctx.instName(h.inst) + ' ' + (st.tracks.length + 1) });
    st.result = null; ctx.status(''); render();
    return true;
  }
  function keydown(e) {
    if (!st.active) return false;
    if (e.key === 'Escape') { if (st.picking) { st.picking = false; ctx.status(''); render(); } else stop(); return true; }
    return false;
  }

  // ---------------------------------------------------------------- the card
  const num = (value, onchange, attrs = {}) => { const i = el('input', { type: 'number', className: 'pc-input pc-mot-num', value: f(value), step: 'any', id: id(), ...attrs }); i.addEventListener('change', () => { const v = parseFloat(i.value); if (Number.isFinite(v)) onchange(v); else render(); }); return i; };
  const select = (opts, value, onchange, attrs = {}) => { const s = el('select', { className: 'pc-select pc-select-sm', id: id(), ...attrs }, ...opts.map(([v, l]) => el('option', { value: v, selected: v === value }, l))); s.addEventListener('change', () => onchange(s.value)); return s; };
  const labelled = (label, input) => el('label', { className: 'pc-stk-field', htmlFor: input.id }, el('span', {}, label), input);
  const valueName = (k) => t('asm.joint.value.' + k.toLowerCase());

  function plotNode(r) {
    const list = MO.series(r, st.plot, (i) => ctx.instName(i));
    if (!list.length || !list.some((s) => s.points.some((p) => p[1] !== null))) return el('p', { className: 'pc-props-sub' }, t('motion.plot.none'));
    const svg = MO.plotSvg(list, { title: t('motion.plot.' + st.plot), xLabel: t('motion.plot.time'), yLabel: list[0].unit });
    const doc = new DOMParser().parseFromString(svg, 'image/svg+xml');
    const node = document.importNode(doc.documentElement, true);
    node.setAttribute('class', 'pc-mot-plot'); node.removeAttribute('width'); node.removeAttribute('height');
    node.dataset.motPlot = st.plot;
    return node;
  }

  function resultNodes(r) {
    const kids = [];
    const s = r.summary, dl = el('dl', { className: 'pc-dl pc-measure-dl', dataset: { motResult: '1' } });
    const add = (k, v) => dl.append(el('dt', {}, k), el('dd', {}, v));
    const un = r.unit === 'deg' ? '°' : ' mm';
    add(t('motion.r.range'), t('motion.r.range_v', { key: valueName(r.key), from: f(r.spec.from), to: f(r.spec.to), unit: un, time: f(r.spec.duration, 2), n: r.rows.length }));
    add(t('motion.r.clash'), s.clashSteps ? t('motion.r.clash_v', { n: s.clashSteps, of: r.rows.length, value: f(s.firstClash.value), unit: un, a: ctx.instName(s.firstClash.pair[0]), b: ctx.instName(s.firstClash.pair[1]) }) : t('motion.r.clash_none'));
    if (st.clearance) add(t('motion.r.gap'), s.minGap ? t('motion.r.gap_v', { gap: f(s.minGap.gap), value: f(s.minGap.value), unit: un, a: ctx.instName(s.minGap.a), b: ctx.instName(s.minGap.b) }) : t('motion.r.gap_far'));
    if (st.clearance && st.limit !== '' && Number.isFinite(+st.limit)) add(t('motion.r.flag'), t('motion.r.flag_v', { n: s.gapFlags, of: r.rows.length, limit: f(+st.limit) }));
    for (const p of s.peaks) add(p.name, t('motion.r.peak', { speed: f(p.speed), at: f(p.speedAt, 2), acc: f(p.acc), travel: f(p.travel) }));
    if (s.open) add(t('motion.r.open'), t('motion.r.open_v', { n: s.open }));
    kids.push(dl);
    // the scrub bar: the assembly at a step of the run (shown only; the joint keeps its own value)
    const k0 = st.scrub ?? 0, row0 = r.rows[k0];
    const scrub = el('input', { type: 'range', className: 'span pc-range', min: '0', max: String(r.rows.length - 1), step: '1', value: String(k0), id: id(), dataset: { motScrub: '1' }, 'aria-label': t('motion.scrub') });
    const at = el('span', { className: 'pc-props-sub', dataset: { motScrubAt: String(k0) } }, t('motion.scrub.at', { time: f(row0.time, 3), value: f(row0.value), unit: un, clash: row0.clashes.length ? t('motion.scrub.clash') : '' }));
    scrub.addEventListener('input', () => {
      const k = Number(scrub.value), row = r.rows[k];
      st.scrub = k; st.scrubbing = true;
      ctx.pose?.(r.spec.joint, r.key, row.value);
      st.scrubbing = false;
      at.dataset.motScrubAt = String(k);
      at.textContent = t('motion.scrub.at', { time: f(row.time, 3), value: f(row.value), unit: un, clash: row.clashes.length ? t('motion.scrub.clash') : '' });
    });
    kids.push(el('div', { className: 'pc-stk-row pc-mot-scrub' }, labelled(t('motion.scrub'), scrub), at,
      btn(t('motion.scrub.back'), () => { st.scrub = null; ctx.unpose?.(); render(); }, 'pc-btn pc-btn-sm', { dataset: { motScrubBack: '1' } })));
    kids.push(el('div', { className: 'pc-stk-row' }, labelled(t('motion.plot.which'), select(PLOTS.map((p) => [p, t('motion.plot.' + p)]), st.plot, (v) => { st.plot = v; render(); }, { dataset: { motPlotSel: '1' } }))));
    kids.push(plotNode(r));
    kids.push(el('p', { className: 'pc-props-sub' }, r.notes.join(' ')));
    kids.push(el('div', { className: 'pc-actions' },
      btn(t('motion.csv'), () => ctx.download(MO.csv(r, (i) => ctx.instName(i)), t('motion.csv.file', { name: ctx.fileBase() }), 'text/csv'), 'pc-btn pc-btn-sm', { dataset: { motCsv: '1' } }),
      btn(t('motion.svg'), () => ctx.download(MO.plotSvg(MO.series(r, st.plot, (i) => ctx.instName(i)), { title: t('motion.plot.' + st.plot), xLabel: t('motion.plot.time') }), t('motion.svg.file', { name: ctx.fileBase(), plot: t('motion.plot.' + st.plot) }), 'image/svg+xml'), 'pc-btn pc-btn-sm', { dataset: { motSvg: '1' } })));
    return kids;
  }

  function render() {
    if (!st.active) { card?.remove(); card = null; return; }
    if (!card) { card = el('div', { className: 'pc-measure pc-stk pc-mot', role: 'region', 'aria-label': t('motion.title'), 'data-motion': '' }); ctx.stage.append(card); }
    const asm = ctx.asm();
    const kids = [el('div', { className: 'pc-measure-head' }, el('strong', {}, t('motion.title')), btn(t('app.btn.close'), () => stop(), 'pc-btn pc-btn-sm', { dataset: { motClose: '1' } }))];
    const js = joints();
    if (!js.length) { kids.push(el('p', { className: 'pc-props-sub' }, t('motion.no_joint'))); card.replaceChildren(...kids); return; }
    const j = cur();
    const dof = A.JOINT_DOF[j.type], deg = A.VALUE_UNIT[st.key] === 'deg';
    kids.push(el('div', { className: 'pc-stk-row' },
      labelled(t('motion.joint'), select(js.map((x) => [x.id, x.name || x.id]), j.id, (v) => { st.joint = v; st.key = null; fit(); st.result = null; render(); }, { dataset: { motJoint: '1' } })),
      ...(dof.length > 1 ? [labelled(t('motion.value'), select(dof.map((k) => [k, valueName(k)]), st.key, (v) => { st.key = v; const keep = st.joint; fit(); st.joint = keep; st.result = null; render(); }, { dataset: { motKey: '1' } }))] : [])));
    kids.push(el('div', { className: 'pc-stk-row' },
      labelled(t('motion.from', { unit: deg ? '°' : 'mm' }), num(st.from, (v) => { st.from = v; st.result = null; }, { dataset: { motFrom: '1' } })),
      labelled(t('motion.to', { unit: deg ? '°' : 'mm' }), num(st.to, (v) => { st.to = v; st.result = null; }, { dataset: { motTo: '1' } })),
      labelled(t('motion.duration'), num(st.duration, (v) => { st.duration = Math.max(0.001, v); st.result = null; }, { min: 0.001, dataset: { motDuration: '1' } })),
      labelled(t('motion.steps'), num(st.steps, (v) => { st.steps = Math.max(1, Math.min(MO.LIMITS.steps, Math.round(v))); st.result = null; render(); }, { min: 1, max: MO.LIMITS.steps, step: 1, dataset: { motSteps: '1' } })),
      labelled(t('motion.law'), select(Object.keys(MO.LAWS).map((k) => [k, t('motion.law.' + k)]), st.law, (v) => { st.law = v; st.result = null; }, { dataset: { motLaw: '1' } }))));
    // the points followed
    const insts = asm.instances;
    kids.push(el('div', { className: 'pc-stk-row' },
      labelled(t('motion.follow'), select(insts.map((i) => [i.id, i.name]), st.inst, (v) => { st.inst = v; }, { dataset: { motInst: '1' } })),
      btn(t('motion.follow.middle'), () => { st.tracks.push({ inst: st.inst, at: null, name: ctx.instName(st.inst) + ' ' + (st.tracks.length + 1) }); st.result = null; render(); }, 'pc-btn pc-btn-sm', { dataset: { motAddMid: '1' } }),
      btn(t(st.picking ? 'app.btn.cancel' : 'motion.follow.point'), () => { if (st.picking) { st.picking = false; ctx.status(''); render(); } else beginPick(); }, 'pc-btn pc-btn-sm', { dataset: { motAddPoint: '1' }, title: t('motion.follow.point.title') })));
    if (st.tracks.length) kids.push(el('ul', { className: 'pc-mot-tracks' }, ...st.tracks.map((q, i) => el('li', {}, q.name + (q.at ? ' (' + q.at.map((v) => f(v, 2)).join(', ') + ')' : ' ' + t('motion.follow.middle_of')), btn('×', () => { st.tracks.splice(i, 1); st.result = null; render(); }, 'pc-btn pc-btn-sm', { title: t('motion.follow.remove'), 'aria-label': t('motion.follow.remove'), dataset: { motRemove: String(i) } })))));
    const clr = el('input', { type: 'checkbox', id: id(), checked: st.clearance, dataset: { motClearance: '1' } });
    clr.addEventListener('change', () => { st.clearance = clr.checked; st.result = null; render(); });
    kids.push(el('div', { className: 'pc-stk-row' }, el('label', { className: 'pc-stk-field', htmlFor: clr.id }, el('span', {}, t('motion.clearance')), clr),
      ...(st.clearance ? [labelled(t('motion.limit'), num(st.limit === '' ? NaN : +st.limit, (v) => { st.limit = String(v); st.result = null; }, { dataset: { motLimit: '1' }, value: st.limit === '' ? '' : f(+st.limit) }))] : [])));
    kids.push(el('div', { className: 'pc-actions' }, btn(t('motion.run'), () => run(), 'pc-btn is-primary pc-btn-sm', { dataset: { motRun: '1' } })));
    if (st.picking) kids.push(el('p', { className: 'pc-props-sub', dataset: { motPicking: '1' } }, t('motion.pick.status')));
    if (st.error) kids.push(el('p', { className: 'pc-note', role: 'alert', dataset: { motError: '1' } }, st.error));
    if (st.result) kids.push(...resultNodes(st.result));
    card.replaceChildren(...kids);
  }

  return {
    get active() { return st.active; }, get picking() { return st.picking; },
    start, stop, toggle, pick, keydown, refresh: () => { if (st.active && !st.scrubbing) render(); },
  };
}
