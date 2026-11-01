/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — the quoted words are internal state names and defaults; every sentence a person hears goes through t() */
/**
 * access-mount.js — PartCraft without sight (0.8 round 3, session access_PART_3, EG.52; plan docs/spikes/access_PART_2.md, shared part assets/js/app-access.js).
 * PartCraft's work is the feature tree, so the shell's keyboard explorer runs in its list mode (`walk`): the arrow keys and Tab step through the features in
 * order and say each one with its build state ("Extrude 2, extrude, built. 3 of 7"), Enter selects it, D describes the part, W says where you are in the tree, N the
 * neighbours, S the selection. Build errors and sketch solver states (under- or over-constrained) are part of the sentence, and the status line is read aloud
 * when it changes. The sketch's own geometry is not described yet (it needs the keyboard cursor over the sketch plane): that is the next step.
 * The sentence builders are pure (rows from agents.js featureRows, and a `t`) so Node tests them (bin/test-part-access.mjs).
 */
import { t as tr } from './i18n.js';

const STATUS = { ok: 'built', error: 'error', suppressed: 'suppressed', skipped: 'not built', rolled: 'rolled back', 'rolled back': 'rolled back', 'not built': 'not built' };
/** One feature as a sentence. r = a row from featureRows (+ optional solve: 'full' | 'under' | 'over' | 'empty'). */
export function featureSentence(r, t = tr) {
  const st = r.suppressed ? 'suppressed' : (STATUS[r.status] || 'built');
  let s = t(r.name && r.name !== r.label ? 'pc.access.feature' : 'pc.access.feature.plain', { name: r.name || r.label, label: r.label, state: t('pc.access.state.' + st.replace(/ /g, '_')) });
  if (r.solve && r.solve !== 'full' && r.solve !== 'empty') s += ' ' + t('pc.access.solve.' + r.solve);
  if (r.status === 'error' && r.message) s += ' ' + r.message;
  return s;
}
/** The whole part in a few sentences (key D). */
export function describePart(name, rows, facts, t = tr) {
  if (!rows.length) return t('pc.access.empty', { name });
  const bad = rows.filter((r) => r.status === 'error').length, off = rows.filter((r) => r.suppressed).length;
  let s = t('pc.access.part', { name, n: rows.length, built: rows.filter((r) => r.status === 'ok' && !r.suppressed).length });
  if (bad) s += ' ' + t('pc.access.errors', { n: bad });
  if (off) s += ' ' + t('pc.access.off', { n: off });
  if (facts) s += ' ' + facts;
  return s;
}

/** Hand PartCraft's feature tree to the shell's explorer. */
export function mountPartAccess({ part, regen, stage, status, facts, sel, selectFeature, partName, labelOf }) {
  const go = () => {
    const A = window.ccAccess;
    if (!A) return;
    const rows = () => {
      const p = part(), rg = regen();
      const out = [];
      const n = p.rollback ?? p.features.length;
      p.features.forEach((f, i) => {
        const r = rg?.results?.get(f.id);
        out.push({ id: f.id, name: f.name, type: f.type, label: labelOf(f), suppressed: !!f.suppressed, status: r ? r.status : i >= n ? 'rolled back' : 'not built', message: r?.message || r?.error, solve: f.type === 'sketch' ? r?.solve?.status : undefined });
      });
      return out;
    };
    A.mount({
      stage, label: () => tr('pc.access.stage'),
      walk: () => rows().map((r) => ({ id: r.id, kind: r.status === 'error' ? 'error' : 'object', label: featureSentence(r) })),
      describe: () => describePart(partName(), rows(), facts()),
      selection: () => { const s = sel(); if (!s) return tr('pc.access.nosel'); const r = s.kind === 'feature' ? rows().find((x) => x.id === s.id) : null; return r ? tr('pc.access.selected', { what: featureSentence(r) }) : tr('pc.access.selplane', { name: s.name || '' }); },
      pick: (p, item) => { if (item) { selectFeature(item.id); A.say(tr('pc.access.selected', { what: item.label })); } else A.say(tr('pc.access.nosel')); },
    });
    A.follow(status, { max: 240 });
  };
  if (window.ccAccess) go(); else document.addEventListener('cc-access-ready', go, { once: true });
}
