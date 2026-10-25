/* SPDX-License-Identifier: Apache-2.0 */
/**
 * weld-ui.js — the Design workspace's panel for Structural members (weldment.js; 0.7 D7.50). A UI module (text through el());
 * partcraft.js hands in its state as `host` (as for rib-ui.js) and calls:
 *   create()            props for a new member feature: every line of the selected sketch, else of the last sketch no feature
 *                       uses that holds lines
 *   panel(f, grid, out) its right-panel rows: the sketches whose lines it follows, the section (family, size), rotate, anchor,
 *                       corners, caps, gussets, and the cut list with Save as CSV
 */
import * as P from './part.js';
import { ANCHORS, CORNERS, cutList, cutListCsv } from './weldment.js';
import { FAMILIES, familyRows, findSection, displayName } from './shapes/sections.js';
import { t } from './i18n.js';

export const WELD_TYPES = new Set(['member']);
export const WELD_ICONS = { member: 'bounding-box' };
export const WELD_MENU = ['member'];

/** The lines of a sketch a member follows: every line that is not construction. */
export const sketchLines = (f) => f.sketch.entities.filter((e) => e.type === 'line' && !e.construction).map((e) => e.id);

export function installWeldUI(host) {
  const { el } = host;
  const set = (f, label, fn) => host.setFeature(f.id, label, fn);

  function create() {
    const part = host.part, sel = host.sel;
    const has = (f) => f.type === 'sketch' && sketchLines(f).length > 0;
    let sk = null;
    if (sel?.kind === 'feature') { const f = P.featureById(part, sel.id); if (f && has(f)) sk = f; }
    if (!sk) {
      const used = new Set(part.features.flatMap((f) => (typeof f.sketch === 'string' ? [f.sketch] : f.type === 'member' ? f.segs.map((s) => s.sketch) : [])));
      const c = part.features.slice(0, P.builtCount(part)).filter((f) => has(f) && !used.has(f.id));
      sk = c[c.length - 1] || null;
    }
    if (!sk) { host.status(t('weld.ui.no_sketch')); return null; }
    return { segs: sketchLines(sk).map((line) => ({ sketch: sk.id, line })) };
  }

  function panel(f, grid, out) {
    const part = host.part;
    // the sketches it follows: a box per sketch that holds lines (all its lines; construction lines are left out)
    const usedBy = new Set(f.segs.map((s) => s.sketch));
    const sketches = part.features.slice(0, part.features.indexOf(f)).filter((x) => x.type === 'sketch' && sketchLines(x).length);
    grid.push(el('span', { className: 'pc-props-sub' }, t('weld.ui.lines')));
    for (const sk of sketches) {
      grid.push(host.check(t('weld.ui.sketch_lines', { name: sk.name, n: sketchLines(sk).length }), usedBy.has(sk.id), (on) => set(f, t('weld.ui.undo.lines'), (g) => {
        const keep = g.segs.filter((s) => s.sketch !== sk.id);
        g.segs = on ? [...keep, ...sketchLines(sk).map((line) => ({ sketch: sk.id, line }))] : keep;
      })));
    }
    // the section: family, then size
    const cur = findSection(f.section);
    const fam = cur ? cur.family : FAMILIES[0].id;
    grid.push(...host.field(t('weld.ui.family'), host.selectInput(FAMILIES.map((x) => [x.id, t('weld.family.' + x.id.toLowerCase())]), fam, (v) => set(f, t('weld.ui.undo.section'), (g) => { g.section = familyRows(v)[0].name; }))));
    grid.push(...host.field(t('weld.ui.size'), host.selectInput(familyRows(fam).map((p) => [p.name, displayName(p.name)]), cur ? cur.name : '', (v) => set(f, t('weld.ui.undo.section'), (g) => { g.section = v; }))));
    grid.push(...host.field(t('weld.ui.rotate'), host.numInput(f.rotate || 0, (v) => set(f, t('weld.ui.undo.rotate'), (g) => { g.rotate = v; }), { min: -360, max: 360, key: f.id + '.rotate' })));
    grid.push(...host.field(t('weld.ui.anchor'), host.selectInput(ANCHORS.map((a) => [a, t('weld.anchor.' + a)]), f.anchor || 'c', (v) => set(f, t('weld.ui.undo.anchor'), (g) => { g.anchor = v; }))));
    grid.push(...host.field(t('weld.ui.corners'), host.selectInput(CORNERS.map((c) => [c, t('weld.corner.' + c)]), f.corner || 'miter', (v) => set(f, t('weld.ui.undo.corners'), (g) => { g.corner = v; }))));
    grid.push(host.check(t('weld.ui.caps'), !!f.caps, (on) => set(f, t('weld.ui.undo.caps'), (g) => { g.caps = on ? { t: 5 } : null; })));
    if (f.caps) grid.push(...host.field(t('weld.ui.cap_t'), host.numInput(f.caps.t, (v) => set(f, t('weld.ui.undo.caps'), (g) => { g.caps = { t: v }; }), { min: 0.1, max: 1000 })));
    grid.push(host.check(t('weld.ui.gussets'), !!f.gussets, (on) => set(f, t('weld.ui.undo.gussets'), (g) => { g.gussets = on ? { size: 60, t: 6 } : null; })));
    if (f.gussets) {
      grid.push(...host.field(t('weld.ui.gusset_size'), host.numInput(f.gussets.size, (v) => set(f, t('weld.ui.undo.gussets'), (g) => { g.gussets = { ...g.gussets, size: v }; }), { min: 1, max: 1e5 })));
      grid.push(...host.field(t('weld.ui.gusset_t'), host.numInput(f.gussets.t, (v) => set(f, t('weld.ui.undo.gussets'), (g) => { g.gussets = { ...g.gussets, t: v }; }), { min: 0.1, max: 1000 })));
    }
    out.push(el('div', { className: 'pc-props' }, ...grid));
    grid.length = 0;
    // the cut list
    const info = host.regen?.results.get(f.id)?.info;
    const rows = cutList(info);
    if (!rows.length) return;
    const words = cutWords();
    const endText = (r) => r.ends.map((e, k) => (e === 'fit' ? words.fit : e === 'angle' ? t('weld.cut.angle', { a: r.angles[k] }) : words.square)).join(' / ');
    const size = (r) => (r.kind === 'member' ? host.fmt(r.length) : r.kind === 'cap' ? t('weld.cut.plate', { w: host.fmt(r.w), h: host.fmt(r.h), t: host.fmt(r.t) }) : t('weld.cut.plate', { w: host.fmt(r.size), h: host.fmt(r.size), t: host.fmt(r.t) }));
    out.push(el('p', { className: 'pc-props-sub' }, t('weld.ui.cut_list')));
    // five columns fit the panel: the piece is the section for a member (the CSV keeps every column)
    const cols = [words.head[0], words.head[1], words.head[2], words.head[4], words.head[5]];
    out.push(el('table', { className: 'pc-table pc-cutlist', dataset: { cutList: '' } },
      el('thead', {}, el('tr', {}, ...cols.map((h) => el('th', { scope: 'col' }, h)))),
      el('tbody', {}, ...rows.map((r, n) => el('tr', { dataset: { cutRow: r.kind } },
        el('td', {}, String(n + 1)), el('td', {}, String(r.qty)), el('td', {}, r.kind === 'member' ? r.section : words[r.kind]), el('td', {}, size(r)), el('td', {}, r.kind === 'member' ? endText(r) : '—'))))));
    out.push(el('div', { className: 'pc-actions' }, host.btn(t('weld.ui.save_csv'), () => {
      host.download(cutListCsv(rows, words), (part.name || 'part') + ' cut list.csv', 'text/csv');   // i18n-ignore: a file name
      host.status(t('weld.ui.saved_csv', { n: rows.length }));
    }, 'pc-btn', { dataset: { cutCsv: '' } })));
  }

  const cutWords = () => ({
    head: ['item', 'qty', 'what', 'section', 'size', 'ends', 'members'].map((k) => t('weld.cut.h.' + k)),
    member: t('weld.cut.member'), cap: t('weld.cut.cap'), gusset: t('weld.cut.gusset'), square: t('weld.cut.square'), fit: t('weld.cut.fit'),
  });

  return { create, panel };
}
