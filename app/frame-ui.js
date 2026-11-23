/* SPDX-License-Identifier: Apache-2.0 */
/**
 * frame-ui.js — "Check this frame" in PartCraft (0.11 SU.1811, session inbox-11d on engineering-11's frame-part.js): a dialog that takes the straight steel members of the
 * part's Structural member features, lets the person say where the frame stands (supports) and what sits on it (equipment), picks the code, runs checkThisFrame and shows
 * the member and weld tables. An aid until an engineer has reviewed it: the dialog says so above the result and the CSV carries the same line.
 *
 * The pure helpers (collectMembers, feetOf, parsePoints, buildInput, tablesCsv) are DOM-free and tested in bin/test-partcraft-frame.mjs; openFrameCheck is the page.
 *   openFrameCheck(H)   H = { part, results: Map (regen.results), ask, el, btn, status, download, fileBase }
 * Text goes through t() (pcframe.* here, frame.* from lib/frame's table for the check tables).
 */
import { checkThisFrame, partTables } from './frame/frame-part.js';
import { GRADES, DEFAULT_GRADE } from './frame/frame-design.js';
import { findSection, outline } from './shapes/sections.js';
import { t } from './i18n.js';

const shapes = { findSection, outline };
const FIX = ['pinned', 'fixed', 'roller'];
const CODES = ['asce-aisc', 'en'];
const fin = (v) => typeof v === 'number' && Number.isFinite(v);

/** PartCraft's world is Y up; the frame model is Z up (+X right): (x, y, z) -> (x, -z, y), the same turn the IFC export makes. */
export const zUp = (p) => [p[0], -p[2], p[1]];

/** The straight members of every built Structural member feature, in mm with +Z up: [{ id, a, b, section, roll }]. A feature that did not build is skipped. */
export function collectMembers(part, results) {
  const out = [];
  for (const f of part?.features || []) {
    if (f.type !== 'member' || f.suppressed === true) continue;
    const info = results?.get?.(f.id)?.info;
    if (!info || !Array.isArray(info.members)) continue;
    for (const m of info.members) {
      if (!Array.isArray(m.a) || !Array.isArray(m.b)) continue;
      out.push({ id: (f.name || f.id) + '.' + (m.i + 1), a: zUp(m.a), b: zUp(m.b), section: f.section, roll: f.rotate || 0 });
    }
  }
  return out;
}

/** The feet of a frame: the member ends at the lowest height, each once (within 0.5 mm). → [[x, y, z]]. */
export function feetOf(members) {
  const ends = members.flatMap((m) => [m.a, m.b]);
  if (!ends.length) return [];
  const lo = Math.min(...ends.map((p) => p[2]));
  const out = [];
  for (const p of ends) {
    if (p[2] - lo > 0.5) continue;
    if (!out.some((q) => Math.hypot(q[0] - p[0], q[1] - p[1], q[2] - p[2]) <= 0.5)) out.push([p[0], p[1], p[2]]);
  }
  return out;
}

/** "x y z" per line (spaces, commas or semicolons between). → { points: [[x, y, z]], bad: [line numbers, 1-based] }. */
export function parsePoints(text) {
  const points = [], bad = [];
  String(text || '').split(/\r?\n/).forEach((line, n) => {
    if (!line.trim()) return;
    const v = line.trim().split(/[\s,;]+/).map(Number);
    if (v.length === 3 && v.every(fin)) points.push(v); else bad.push(n + 1);
  });
  return { points, bad };
}

/** The checkThisFrame input from the members and the dialog's state; { input, errors: [{ code, row? }] }. */
export function buildInput(members, st) {
  const errors = [];
  const supports = [];
  (st.supports || []).forEach((s, i) => {
    const at = [s.x, s.y, s.z].map(Number);
    if (at.every(fin) && FIX.includes(s.fix)) supports.push({ at, fix: s.fix }); else errors.push({ code: 'support', row: i + 1 });
  });
  const equipment = [];
  (st.equipment || []).forEach((e, i) => {
    const mass = Number(e.mass), cg = parsePoints(e.cg), mounts = parsePoints(e.mounts);
    if (!(mass > 0) || cg.points.length !== 1 || cg.bad.length || !mounts.points.length || mounts.bad.length) { errors.push({ code: 'equipment', row: i + 1 }); return; }
    equipment.push({ id: 'eq' + (i + 1), name: String(e.name || 'eq' + (i + 1)).slice(0, 60), mass, cg: cg.points[0], mounts: mounts.points });
  });
  return { input: { name: st.name || 'frame', members: members.map((m) => ({ id: m.id, a: m.a, b: m.b, section: m.section, roll: m.roll || 0 })), supports, equipment, selfWeight: 1 }, errors };
}

const csvCell = (v) => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
/** The report tables as CSV: the not-reviewed line first, then each table under its title. */
export function tablesCsv(tables, notReviewed) {
  const out = [csvCell(notReviewed)];
  for (const tab of tables) { out.push(''); out.push(csvCell(tab.title)); out.push(tab.head.map(csvCell).join(',')); for (const r of tab.rows) out.push(r.map(csvCell).join(',')); }
  return out.join('\n') + '\n';
}

/** The words for an error or warning code of the frame build (own keys, never raw codes). */
const codeWords = (c, extra = {}) => { const k = 'pcframe.code.' + c; const w = t(k, extra); return w === k ? c : w; };

export async function openFrameCheck(H) {
  const { el, btn, ask } = H;
  const members = collectMembers(H.part, H.results);
  if (!members.length) { H.status(t('pcframe.no_members')); return; }
  const st = { code: 'asce-aisc', grade: DEFAULT_GRADE['asce-aisc'], fexx: 482.6, weldSize: '', supports: feetOf(members).map(([x, y, z]) => ({ x, y, z, fix: 'pinned' })), equipment: [] };
  let result = null;

  const num = (v, on, extra = {}) => el('input', { type: 'text', inputMode: 'decimal', value: String(v ?? ''), size: 7, onchange: (e) => on(e.target.value), ...extra });
  const sel = (opts, cur, on, label) => el('select', { onchange: (e) => on(e.target.value), 'aria-label': label }, ...opts.map(([v, text]) => el('option', { value: v, selected: v === cur }, text)));
  const field = (label, ctl) => el('label', { className: 'pcframe-f' }, el('span', {}, label), ctl);

  const out = el('div', { className: 'pcframe-result', dataset: { frameResult: '' }, 'aria-live': 'polite' });
  const supBox = el('div', { dataset: { frameSupports: '' } }), eqBox = el('div', { dataset: { frameEquipment: '' } });
  const gradeBox = el('span');
  const weldBox = el('span');

  const drawGrade = () => {
    gradeBox.replaceChildren(field(t('pcframe.grade'), sel(Object.keys(GRADES[st.code]).map((g) => [g, g]), st.grade, (v) => { st.grade = v; }, t('pcframe.grade'))));
    weldBox.replaceChildren(...(st.code === 'asce-aisc' ? [field(t('pcframe.fexx'), num(st.fexx, (v) => { st.fexx = v; }))] : []),
      field(t('pcframe.weld_size'), num(st.weldSize, (v) => { st.weldSize = v; }, { placeholder: t('pcframe.weld_size_auto') })));
  };
  const drawSupports = () => {
    supBox.replaceChildren(...st.supports.map((s, i) => el('div', { className: 'pcframe-row', dataset: { frameSupport: String(i) } },
      ...['x', 'y', 'z'].map((k) => num(Math.round(s[k] * 1000) / 1000, (v) => { s[k] = v; }, { 'aria-label': k.toUpperCase() })),
      sel(FIX.map((f) => [f, t('pcframe.fix.' + f)]), s.fix, (v) => { s.fix = v; }, t('pcframe.support')),
      btn('×', () => { st.supports.splice(i, 1); drawSupports(); }, 'pc-btn pcframe-x', { 'aria-label': t('pcframe.remove'), title: t('pcframe.remove') }))));
    if (!st.supports.length) supBox.append(el('p', { className: 'pc-note' }, t('pcframe.no_supports')));
  };
  const drawEquipment = () => {
    eqBox.replaceChildren(...st.equipment.map((e, i) => el('div', { className: 'pcframe-eq', dataset: { frameEq: String(i) } },
      el('div', { className: 'pcframe-row' },
        el('input', { type: 'text', value: e.name, size: 14, 'aria-label': t('pcframe.eq_name'), placeholder: t('pcframe.eq_name'), onchange: (ev) => { e.name = ev.target.value; } }),
        num(e.mass, (v) => { e.mass = v; }, { 'aria-label': t('pcframe.eq_mass'), placeholder: t('pcframe.eq_mass') }),
        btn('×', () => { st.equipment.splice(i, 1); drawEquipment(); }, 'pc-btn pcframe-x', { 'aria-label': t('pcframe.remove'), title: t('pcframe.remove') })),
      field(t('pcframe.eq_cg'), el('input', { type: 'text', value: e.cg, size: 22, onchange: (ev) => { e.cg = ev.target.value; } })),
      field(t('pcframe.eq_mounts'), el('textarea', { rows: 3, cols: 26, value: e.mounts, onchange: (ev) => { e.mounts = ev.target.value; } })))));
  };
  drawGrade(); drawSupports(); drawEquipment();

  const tableEl = (tab) => el('table', { className: 'pc-table', dataset: { frameTable: '' } },
    el('caption', {}, tab.title),
    el('thead', {}, el('tr', {}, ...tab.head.map((h) => el('th', { scope: 'col' }, h)))),
    el('tbody', {}, ...tab.rows.map((r) => el('tr', {}, ...r.map((c, k) => el('td', tab.numeric?.includes(k) ? { className: 'num' } : {}, String(c)))))));

  function run() {
    const { input, errors } = buildInput(members, { ...st, name: H.fileBase?.() });
    if (errors.length) { out.replaceChildren(el('p', { className: 'pc-note is-bad', dataset: { frameError: 'input' } }, errors.map((e) => t('pcframe.bad_' + e.code, { n: e.row })).join(' '))); return; }
    const fexx = Number(st.fexx), weld = st.weldSize === '' ? null : Number(st.weldSize);
    if (st.code === 'asce-aisc' && !(fexx > 0)) { out.replaceChildren(el('p', { className: 'pc-note is-bad', dataset: { frameError: 'fexx' } }, t('pcframe.bad_fexx'))); return; }
    if (weld != null && !(weld > 0)) { out.replaceChildren(el('p', { className: 'pc-note is-bad', dataset: { frameError: 'weld' } }, t('pcframe.bad_weld'))); return; }
    result = checkThisFrame(input, shapes, { code: st.code, grade: st.grade, ...(st.code === 'asce-aisc' ? { fexx } : {}), ...(weld != null ? { weldSize: weld } : {}) });
    if (!result.ok) { out.replaceChildren(el('p', { className: 'pc-note is-bad', dataset: { frameError: String(result.error) } }, codeWords(result.error))); return; }
    const s = result.summary;
    const pc = (v) => (v == null ? '-' : Math.round(v * 100) + ' %');
    const tables = partTables(result, t);
    const show = new Set([t('frame.des.title'), t('frame.des.summary'), t('frame.weld.title'), t('frame.weld.summary')]);
    const verdict = s.pass ? 'pass' : (s.memberFailed || s.weldFailed ? 'fail' : 'none');
    out.replaceChildren(
      el('p', { className: 'pc-note is-warn', dataset: { frameNotReviewed: '' } }, t('pcframe.not_reviewed')),
      el('p', { dataset: { frameVerdict: verdict }, className: verdict === 'fail' ? 'is-bad' : '' }, t('pcframe.verdict.' + verdict, {
        members: s.members, welds: s.welds, mmax: pc(s.memberMax), wmax: pc(s.weldMax), bad: s.memberFailed + s.weldFailed, skip: s.memberNotChecked + s.weldNotChecked,
        worst: s.worst ? s.worst.id + ' (' + pc(s.worst.util) + ')' : '-' })),
      ...(result.warnings || []).map((w) => el('p', { className: 'pc-note', dataset: { frameWarning: w.code } }, codeWords(w.code, w))),
      ...tables.filter((tab) => show.has(tab.title)).map(tableEl),
      btn(t('pcframe.save_csv'), () => { H.download(tablesCsv(tables, t('pcframe.not_reviewed')), (H.fileBase?.() || 'part') + ' frame check.csv', 'text/csv'); H.status(t('pcframe.saved_csv')); }, 'pc-btn', { dataset: { frameCsv: '' } }));
  }

  const body = el('div', { className: 'pcframe', dataset: { frameDialog: '' } },
    el('p', { className: 'pc-note is-warn' }, t('pcframe.intro', { n: members.length })),
    el('div', { className: 'pcframe-grid' },
      field(t('pcframe.code'), sel(CODES.map((c) => [c, t('pcframe.code.' + c)]), st.code, (v) => { st.code = v; st.grade = DEFAULT_GRADE[v]; drawGrade(); }, t('pcframe.code'))),
      gradeBox, weldBox),
    el('p', { className: 'pc-props-sub' }, t('pcframe.supports')), supBox,
    el('div', { className: 'pc-actions' },
      btn(t('pcframe.add_support'), () => { st.supports.push({ x: 0, y: 0, z: 0, fix: 'pinned' }); drawSupports(); }, 'pc-btn', { dataset: { frameAddSupport: '' } }),
      btn(t('pcframe.feet'), () => { st.supports = feetOf(members).map(([x, y, z]) => ({ x, y, z, fix: 'pinned' })); drawSupports(); }, 'pc-btn', { dataset: { frameFeet: '' } })),
    el('p', { className: 'pc-props-sub' }, t('pcframe.equipment')), eqBox,
    el('div', { className: 'pc-actions' },
      btn(t('pcframe.add_equipment'), () => { st.equipment.push({ name: '', mass: '', cg: '', mounts: '' }); drawEquipment(); }, 'pc-btn', { dataset: { frameAddEq: '' } }),
      btn(t('pcframe.check'), run, 'pc-btn is-primary', { dataset: { frameRun: '' } })),
    out);
  await ask({ title: t('pcframe.title'), body, buttons: [['close', t('app.btn.close'), 'pc-btn']], wide: true });
}
