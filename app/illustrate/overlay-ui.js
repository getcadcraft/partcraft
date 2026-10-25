/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/overlay-ui.js — the annotation layer over a 3D view (DOM; the only page-touching module in illustrate/, given its
 * stage element by the workspace, so any app's view can carry it). It draws a display list (display.js) as SVG built with
 * createElementNS + textContent (never innerHTML), in the stage's own pixels, and reports clicks and drags on what it drew.
 * Clicks on empty space fall through to the 3D view (the layer itself takes no pointer events).
 *
 *   const o = createOverlay(stage, { onSelect(ref, ev), onDrag(ref, dx, dy, phase: 'move'|'end'), onPoint(x, y, ev) })
 *   o.draw(display)      o.size() → { w, h } (pixels)      o.setSelected(ref)      o.capture(on) (take every click: 2D tools)
 *   o.destroy()
 */
import { svgNodes } from './svg.js';

const NS = 'http://www.w3.org/2000/svg';

export function createOverlay(stage, { onSelect = () => {}, onDrag = () => {}, onPoint = () => {} } = {}) {
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('class', 'il-overlay');
  svg.setAttribute('aria-hidden', 'true');
  Object.assign(svg.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible', zIndex: '2' });
  if (getComputedStyle(stage).position === 'static') stage.style.position = 'relative';
  stage.append(svg);
  let selected = null, drag = null, capturing = false;
  const size = () => ({ w: Math.max(1, stage.clientWidth), h: Math.max(1, stage.clientHeight) });

  function build(n) {
    const e = document.createElementNS(NS, n.tag);
    for (const [k, v] of Object.entries(n.attrs || {})) if (k !== 'xmlns' && k !== 'width' && k !== 'height') e.setAttribute(k, String(v));
    if (n.text !== undefined) e.textContent = n.text;
    for (const k of n.kids || []) e.append(build(k));
    return e;
  }
  function draw(d) {
    const root = svgNodes(d, { idPrefix: 'il-ov' });
    svg.setAttribute('viewBox', root.attrs.viewBox);
    svg.replaceChildren(...root.kids.map(build));
    for (const el of svg.querySelectorAll('[data-ref]')) {
      el.style.pointerEvents = 'visiblePainted';
      el.style.cursor = 'move';
      if (el.dataset.ref === selected) el.setAttribute('filter', 'drop-shadow(0 0 1.5px #d9822b)');
    }
  }
  const at = (ev) => { const r = svg.getBoundingClientRect(); return [ev.clientX - r.left, ev.clientY - r.top]; };
  svg.addEventListener('pointerdown', (ev) => {
    if (capturing) { const [x, y] = at(ev); onPoint(x, y, ev); ev.preventDefault(); ev.stopPropagation(); return; }
    const t = ev.target.closest?.('[data-ref]');
    if (!t || ev.button !== 0) return;
    ev.preventDefault(); ev.stopPropagation();
    onSelect(t.dataset.ref, ev);
    const [x, y] = at(ev);
    drag = { ref: t.dataset.ref, x, y, moved: false, id: ev.pointerId };
    svg.setPointerCapture?.(ev.pointerId);
  });
  svg.addEventListener('pointermove', (ev) => {
    if (!drag || ev.pointerId !== drag.id) return;
    const [x, y] = at(ev);
    if (!drag.moved && Math.hypot(x - drag.x, y - drag.y) < 3) return;
    drag.moved = true;
    onDrag(drag.ref, x - drag.x, y - drag.y, 'move');
  });
  const end = (ev) => {
    if (!drag || ev.pointerId !== drag.id) return;
    const [x, y] = at(ev);
    if (drag.moved) onDrag(drag.ref, x - drag.x, y - drag.y, 'end');
    drag = null;
  };
  svg.addEventListener('pointerup', end);
  svg.addEventListener('pointercancel', end);
  return {
    draw, size,
    setSelected(ref) { selected = ref; },
    capture(on) { capturing = !!on; svg.style.pointerEvents = on ? 'auto' : 'none'; svg.style.cursor = on ? 'crosshair' : ''; },
    get dragging() { return !!drag?.moved; },
    destroy() { svg.remove(); },
    element: svg,
  };
}
