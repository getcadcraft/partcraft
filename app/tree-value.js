/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tree-value.js — the main value a feature shows in its history row (0.6 PU.5): "25 mm", "Ø6.6 thru", "R2", "6 over 360°".
 * DOM-free. `treeValue(f, fmt)` → the text, or '' when the feature has none worth a row (sketches, mirrors, imports, bodies …).
 * `fmt` formats a number (partcraft.js passes V.fmt(v, 3)). The value a double-click edits is the feature's MAIN_NUMBER
 * (partcraft.js); this module only words it.
 */
import { t } from './i18n.js';

const num = (v) => typeof v === 'number' && Number.isFinite(v);

export function treeValue(f, fmt = (v) => String(+v.toFixed(3))) {
  if (!f || typeof f !== 'object') return '';
  const mm = (v) => t('tree.val.mm', { v: fmt(v) }), deg = (v) => t('tree.val.deg', { v: fmt(v) });
  switch (f.type) {
    case 'extrude':
      if (f.end === 'through') return t('tree.val.through');
      if (f.end === 'next') return t('tree.val.next');
      if (f.end === 'upto') return t('tree.val.upto');
      if (f.end === 'vertex') return t('tree.val.vertex');
      if (!num(f.depth)) return '';
      if (f.end === 'mid') return t('tree.val.mid', { v: fmt(f.depth) });
      if (f.end === 'offset') return t('tree.val.offset', { v: fmt(f.depth) });
      return mm(f.depth);
    case 'revolve': return num(f.angle) ? deg(f.angle) : '';
    case 'hole':
      if (!num(f.d)) return '';
      return f.through ? t('tree.val.hole_thru', { d: fmt(f.d) }) : num(f.depth) ? t('tree.val.hole_depth', { d: fmt(f.d), depth: fmt(f.depth) }) : t('tree.val.dia', { d: fmt(f.d) });
    case 'lpattern': return num(f.count) && num(f.spacing) ? t('tree.val.lpattern', { n: f.count, v: fmt(f.spacing) }) : '';
    case 'cpattern': return num(f.count) && num(f.angle) ? t('tree.val.cpattern', { n: f.count, v: fmt(f.angle) }) : '';
    case 'fillet': return num(f.r) ? t('tree.val.radius', { v: fmt(f.r) }) : '';
    case 'chamfer': case 'shell': case 'rib': return num(f.type === 'chamfer' ? f.d : f.t) ? mm(f.type === 'chamfer' ? f.d : f.t) : '';
    case 'draft': return num(f.angle) ? deg(f.angle) : '';
    case 'plane':
      if (f.mode === 'offset' && num(f.d)) return mm(f.d);
      if (f.mode === 'angle' && num(f.angle)) return deg(f.angle);
      return '';
    case 'thread': {
      const size = typeof f.size === 'string' && f.size !== 'auto' ? f.size.slice(0, 16) : '';
      if (num(f.length)) return size ? t('tree.val.thread_len', { size, v: fmt(f.length) }) : mm(f.length);
      return size;
    }
    default: return '';
  }
}
