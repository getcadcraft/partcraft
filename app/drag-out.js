/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drag-out.js — the "Drag to another app" handle in PartCraft's Export menu (0.8 EG.78, studio_PART_2). The part on screen is
 * offered to Studio's other windows in the forms part-item.js builds (a library item for BimCraft, an OBJ for ModelCraft). Drag the
 * handle onto another app's window, or click it to leave the part on the other apps' shelves ("Place it here"). Only in Studio
 * (window.cadcraftStudio.drag); in a plain browser tab the handle is not added.
 *
 *   mountDragOut({ doc, studio, current, status, t, el }) → remove()
 *     current() → { part, mesh } | null    the part and its built mesh (PartCraft's Y-up mm); null = no solid yet
 */
import { dragForms } from './part-item.js';

export function mountDragOut({ doc = document, studio = window.cadcraftStudio, current, status = () => {}, t = (k) => k }) {
  const drag = studio && studio.drag;
  const list = doc.querySelector('[data-export-menu] .pc-menu-list');   // i18n-ignore: a selector
  if (!drag || !list || list.querySelector('[data-drag-out]')) return () => {};
  const b = doc.createElement('button');
  b.type = 'button'; b.setAttribute('role', 'menuitem'); b.setAttribute('draggable', 'true'); b.setAttribute('data-drag-out', '');
  b.textContent = t('dragout.label'); b.title = t('dragout.title');
  const forms = () => {
    const c = current();
    if (!c || !c.mesh || !c.mesh.indices || !c.mesh.indices.length) { status(t('dragout.nosolid')); return null; }
    try { return dragForms(c.part, c.mesh, { name: c.part && c.part.name }); } catch (e) { status(t('dragout.failed', { why: e.message })); return null; }
  };
  b.addEventListener('dragstart', (e) => { const f = forms(); if (!f) { e.preventDefault(); return; } drag.start(e, f); });
  b.addEventListener('click', () => {
    const f = forms(); if (!f) return;
    list.closest('details')?.removeAttribute('open');
    drag.offer(f);
    status(t('dragout.sent', { name: f.name }));
  });
  list.appendChild(b);
  return () => b.remove();
}
