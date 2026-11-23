/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ui-util.js — small DOM helpers for the PartCraft UI (copied from CadCraft's; an app never imports another app's folder).
 * el() is the only way file-derived text reaches the page: children are appended as text
 * nodes (textContent semantics), never parsed as HTML. An opened part file is untrusted input.
 */
import { makeEl, fillDlWith, bytes, num, fmt, frame } from './ui-util-core.js';
export { bytes, num, fmt, frame };

export const el = makeEl({ htmlFor: true });   // PERF.74: the shared builder with this app's own rules (ui-util-core.js)

/**
 * Replace a panel's contents. Removing a focused input fires blur (and change) mid-removal; if that
 * handler re-renders the same panel, a bare replaceChildren() throws "…moved in a 'blur' event handler".
 * So blur first, and if a handler re-rendered the panel meanwhile, its newer content wins.
 */
export function swapChildren(box, nodes) {
  const a = document.activeElement;
  if (a && a !== box && box.contains(a)) {
    const gen = box.pcGen = (box.pcGen || 0) + 1;
    a.blur();
    if (box.pcGen !== gen) return false;
  }
  box.pcGen = (box.pcGen || 0) + 1;
  box.replaceChildren(...nodes);
  return true;
}

export function fillDl(dl, rows) { fillDlWith(el, dl, rows); }

