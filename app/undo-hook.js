/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — protocol only. */
/**
 * undo-hook.js — PartCraft's end of the project-level undo (0.8 round 4, EG.77; docs/spikes/EG.77_PART_4.md, part-model_PART_4). The reporter is undo-report.js
 * (byte-identical copy of public_html/assets/js/undo-report.js). Each finished step is told to the window it runs in:
 *
 *   window event 'cc-undo-report' { detail: { type: 'edit.done', data: { step, label, depth, kind } } }   (Studio's host forwards it to the channel)
 *   window.ccUndoReporter.onMessage('undo.probe' | 'undo.run', data) → the reply Studio's journal waits for   (null = not ours)
 *
 * A step is told when the part's history takes a snapshot (History.push, called for every edit). The app's own undo and redo are told too. Opening a file,
 * editing a part inside an assembly and other stack swaps leave the reporter unsure of the top step: its probe then says "moved" and Studio skips this
 * window, never forces it (undo-report.js). `undoOne` is the app's own undo, so a run from Studio takes the same path as Ctrl+Z.
 */
import { makeUndoReporter } from './undo-report.js';

export function mountUndoHook({ hist, undoOne, win = typeof window !== 'undefined' ? window : null }) {
  const depth = () => hist.undoStack.length;
  const post = (type, data) => { try { win?.dispatchEvent(new CustomEvent('cc-undo-report', { detail: { type, data } })); } catch { /* no window */ } };
  let running = false;
  const rep = makeUndoReporter({ depth, post, undoOne: () => { running = true; try { undoOne(); } finally { running = false; } }, label: () => hist.undoStack.at(-1)?.label || '' });
  const push0 = hist.push.bind(hist), undo0 = hist.undo.bind(hist), redo0 = hist.redo.bind(hist);
  hist.push = (part, label) => { const r = push0(part, label); if (!running) rep.stepDone(label); return r; };
  hist.undo = (part) => { const r = undo0(part); if (r && !running) rep.undone(); return r; };
  hist.redo = (part) => { const r = redo0(part); if (r) rep.redone(); return r; };
  if (win) win.ccUndoReporter = rep;
  return rep;
}
