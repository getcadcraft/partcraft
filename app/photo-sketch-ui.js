/* SPDX-License-Identifier: Apache-2.0 */
/**
 * photo-sketch-ui.js — Sketch › From a photo… (0.8 EG.38, part_PART_3: the person's way in to part_PART_2's photo-sketch.js, which only the
 * `photo_import` tool reached). Choose a picture (the browser decodes it), say one length to scale by, see what was found drawn over the
 * picture with its size and what could not be told, then Make the sketch (and optionally extrude it): one undo step. Classic image
 * processing on this computer; no trained model, no network (rule 35).
 *
 *   openPhotoDialog(ctx) → Promise<{ entities, loops, size } | null>
 *     ctx = { ask, el, status, commit(label, fn), part(), addFeature(part, type, props), built() }
 */
import { photoToSketch, sketchFromEntities } from './photo-sketch.js';
import { t } from './i18n.js';

const MAX_SIDE = 2400;   // a phone photo is scaled down to this before tracing (tolerances are in pixels of the scaled picture)

/** A File / Blob → { w, h, channels: 3, data } through the browser's own decoder, and an object URL for the preview. */
async function decode(file) {
  const bmp = await createImageBitmap(file);
  const k = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height)), w = Math.max(1, Math.round(bmp.width * k)), h = Math.max(1, Math.round(bmp.height * k));
  const cv = new OffscreenCanvas(w, h), g = cv.getContext('2d');
  g.drawImage(bmp, 0, 0, w, h);
  const rgba = g.getImageData(0, 0, w, h).data, data = new Uint8Array(w * h * 3);
  for (let i = 0, j = 0; i < rgba.length; i += 4, j += 3) { data[j] = rgba[i]; data[j + 1] = rgba[i + 1]; data[j + 2] = rgba[i + 2]; }
  return { img: { w, h, channels: 3, data }, scaledBy: k };
}

/** What was found, drawn on its own (the sketch's frame: mm, y up, the part's lower-left corner at the origin), with the picture beside it
 *  as a thumbnail — the sketch carries no position in the picture, so it is not laid over it. */
function previewSvg(el, url, img, r) {
  const NS = 'http://www.w3.org/2000/svg', svg = document.createElementNS(NS, 'svg');
  const w = Math.max(1e-6, r.size?.w || img.w), h = Math.max(1e-6, r.size?.h || img.h), pad = 0.05 * Math.max(w, h);
  svg.setAttribute('viewBox', `${-pad} ${-pad} ${w + 2 * pad} ${h + 2 * pad}`); svg.setAttribute('class', 'pc-photo-preview'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', t('photo.ui.preview'));
  const g = document.createElementNS(NS, 'g'); g.setAttribute('transform', `translate(0 ${h}) scale(1 -1)`); svg.append(g);   // y up
  const sw = String(Math.max(w, h) / 250);
  const stroke = (node) => { node.setAttribute('fill', 'none'); node.setAttribute('stroke', '#d17a22'); node.setAttribute('stroke-width', sw); g.append(node); };
  for (const e of r.entities || []) {
    if (e.type === 'line') { const n = document.createElementNS(NS, 'line'); n.setAttribute('x1', e.a[0]); n.setAttribute('y1', e.a[1]); n.setAttribute('x2', e.b[0]); n.setAttribute('y2', e.b[1]); stroke(n); }
    else if (e.type === 'circle') { const n = document.createElementNS(NS, 'circle'); n.setAttribute('cx', e.c[0]); n.setAttribute('cy', e.c[1]); n.setAttribute('r', e.r); stroke(n); }
    else if (e.type === 'arc') {
      // s and e are the arc's end points, anticlockwise from s to e (y up: SVG's sweep flag 1 inside the flipped group)
      const ang = (q) => Math.atan2(q[1] - e.c[1], q[0] - e.c[0]);
      let sweep = ang(e.e) - ang(e.s); while (sweep <= 0) sweep += 2 * Math.PI;
      const n = document.createElementNS(NS, 'path'); n.setAttribute('d', `M ${e.s[0]} ${e.s[1]} A ${e.r} ${e.r} 0 ${sweep > Math.PI ? 1 : 0} 1 ${e.e[0]} ${e.e[1]}`); stroke(n);
    }
  }
  return el('div', { className: 'pc-photo-pair' }, el('img', { src: url, alt: t('photo.ui.file'), className: 'pc-photo-thumb' }), svg);
}

export async function openPhotoDialog(ctx) {
  const { el } = ctx;
  const file = el('input', { type: 'file', accept: 'image/png,image/jpeg,image/webp,image/bmp,image/gif', className: 'pc-input', dataset: { photoFile: '1' } });
  const mode = el('select', { className: 'pc-select', dataset: { photoMode: '1' } }, el('option', { value: 'silhouette' }, t('photo.ui.mode.silhouette')), el('option', { value: 'lines' }, t('photo.ui.mode.lines')));
  const of = el('select', { className: 'pc-select', dataset: { photoOf: '1' } }, ...['width', 'height', 'longest'].map((k) => el('option', { value: k }, t('photo.ui.of.' + k))));
  const mm = el('input', { type: 'number', className: 'pc-input', value: '100', min: '0.01', step: 'any', inputMode: 'decimal', dataset: { photoMm: '1' } });
  const plane = el('select', { className: 'pc-select', dataset: { photoPlane: '1' } }, ...['front', 'top', 'right'].map((k) => el('option', { value: k }, t('photo.ui.plane.' + k))));
  const depth = el('input', { type: 'number', className: 'pc-input', value: '0', min: '0', step: 'any', inputMode: 'decimal', dataset: { photoDepth: '1' } });
  const out = el('div', { className: 'pc-photo-out', dataset: { photoOut: '1' }, 'aria-live': 'polite' }, el('p', { className: 'pc-note' }, t('photo.ui.choose')));
  let state = null, url = null;
  const run = async () => {
    const f = file.files && file.files[0];
    if (!f) return;
    out.replaceChildren(el('p', { className: 'pc-note' }, t('photo.ui.working')));
    try {
      if (!state || state.file !== f) { if (url) URL.revokeObjectURL(url); url = URL.createObjectURL(f); state = { file: f, ...(await decode(f)) }; }
      const known = Number(mm.value) > 0 ? { of: of.value, mm: Number(mm.value) } : null;
      const r = photoToSketch(state.img, { mode: mode.value, ...(known ? { known } : {}) });
      state.result = r;
      const rows = [];
      if (r.found) rows.push(el('p', { className: 'pc-note', dataset: { photoFound: String((r.entities || []).length) } }, t('photo.ui.found', { n: (r.entities || []).length, loops: (r.loops || []).length, w: +(r.size?.w ?? 0).toFixed(2), h: +(r.size?.h ?? 0).toFixed(2), unit: r.scaled ? 'mm' : t('photo.ui.px') })));
      for (const p of r.problems || []) rows.push(el('p', { className: 'pc-msg' }, p));   // the engine's own sentences (English, also read by assistants)
      if (!r.scaled && r.found) rows.push(el('p', { className: 'pc-msg' }, t('photo.ui.no_scale')));
      rows.push(el('p', { className: 'pc-note' }, t('photo.ui.limits')));
      out.replaceChildren(previewSvg(el, url, state.img, r), ...rows);
    } catch (e) { state = null; out.replaceChildren(el('p', { className: 'pc-msg' }, t('photo.ui.cannot_read', { error: e && e.message ? e.message : String(e) }))); }
  };
  for (const i of [file, mode, of, mm]) i.addEventListener('change', run);
  const field = (label, input) => el('label', { className: 'pc-field' }, el('span', {}, label), input);
  const body = el('div', { className: 'pc-form pc-photo', dataset: { photoDialog: '1' } },
    el('p', { className: 'pc-note' }, t('photo.ui.intro')),
    field(t('photo.ui.file'), file), field(t('photo.ui.mode'), mode),
    field(t('photo.ui.known'), el('span', { className: 'pc-inline' }, of, mm, ' mm')),   // i18n-ignore: the unit
    field(t('photo.ui.plane'), plane), field(t('photo.ui.depth'), depth), out);
  const key = await ctx.ask({ title: t('photo.ui.title'), body, buttons: [['cancel', t('app.btn.cancel'), 'pc-btn'], ['make', t('photo.ui.make'), 'pc-btn is-primary']] });
  if (url) setTimeout(() => URL.revokeObjectURL(url), 1000);
  const r = state && state.result;
  if (key !== 'make' || !r) return null;
  if (!r.found || !(r.entities || []).length) { ctx.status(t('photo.ui.nothing'), true); return null; }
  const d = Number(depth.value) > 0 ? Number(depth.value) : 0;
  ctx.commit(t('photo.ui.undo'), () => {
    const p = ctx.part();
    const sk = ctx.addFeature(p, 'sketch', { plane: { kind: 'base', name: plane.value }, sketch: sketchFromEntities(r.entities, r.loops) });
    if (d > 0) ctx.addFeature(p, 'extrude', { sketch: sk.id, depth: d });
  });
  await ctx.built();
  ctx.status(t('photo.ui.made', { n: r.entities.length, w: +(r.size?.w ?? 0).toFixed(2), h: +(r.size?.h ?? 0).toFixed(2) }));
  return r;
}
