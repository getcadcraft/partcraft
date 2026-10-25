/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/instructions.js — step-by-step instructions from a manual's views (0.7 TP.8; DOM-free): a cover page, one page per
 * step (the view's picture or line art, the parts that step shows, notes, warnings, tools) and a parts-list page; written as
 * PDF pages (display lists for pdf.js) and as one HTML page that prints well. Templates (paper, orientation, a logo, an
 * accent colour, a footer) are files of their own (`<name>.partcraft-template.json`, format `partcraft-manual-template` v1).
 *
 *   m.instructions = { title, subtitle, cover, partsPage, template, steps: [{ view, title, notes, warnings: [text],
 *                      tools: [text], picture: 'lines'|'flat'|'shaded'|'view', list }] }      (picture 'view' = as it looks)
 *   readInstructions(raw, { viewIds }) (registered with manual.js) · defaultInstructions(m) · stepsFromViews(m, ids)
 *   readTemplate(text) / templateText(template) — the template file (untrusted on read)
 *   pages(m, meshes, { words, labels, lineArt }) → [display]   (words: the document's fixed words in the reader's language)
 *   html(m, meshes, { words, labels, lineArt, svgText, pictureFor }) → the HTML text (pictureFor(step) → data URL or null:
 *       a raster picture made by the caller; null = inline SVG line art)
 *   wrap(text, size, width) → lines
 */
import { registerReaders } from './manual.js';
import { rows as partRows, tableItems, columnValue } from './parts-list.js';
import { textWidth, fitText, INK, PENS } from './display.js';
import { PAPERS, lineArt as lineArtOf } from './lineart.js';

export const TEMPLATE_FORMAT = 'partcraft-manual-template';
export const TEMPLATE_EXT = '.partcraft-template.json';
export const PICTURES = ['view', 'lines', 'flat', 'shaded'];
const HEX = /^#[0-9a-f]{6}$/i;
const DATA_IMG = /^data:image\/(png|jpeg);base64,[A-Za-z0-9+/]+={0,2}$/;
const MAX_LOGO = 256 * 1024;
const isObj = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const line = (s, max) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
const text = (s, max) => String(s ?? '').replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, '').slice(0, max);
const lines = (a, n, max) => (Array.isArray(a) ? a.slice(0, n).map((x) => line(x, max)).filter(Boolean) : []);

export const defaultTemplate = () => ({ paper: 'a4', landscape: false, logo: '', accent: '#1b1b1b', footer: '' });
export function cleanTemplate(raw) {
  const T = defaultTemplate();
  if (!isObj(raw)) return T;
  if (Object.prototype.hasOwnProperty.call(PAPERS, raw.paper)) T.paper = raw.paper;
  T.landscape = raw.landscape === true;
  if (typeof raw.logo === 'string' && raw.logo.length <= MAX_LOGO * 1.4 && DATA_IMG.test(raw.logo)) T.logo = raw.logo;
  if (typeof raw.accent === 'string' && HEX.test(raw.accent)) T.accent = raw.accent.toLowerCase();
  T.footer = line(raw.footer, 160);
  return T;
}
export function readInstructions(raw, { viewIds }) {
  if (!isObj(raw)) throw new Error('instructions');
  if (raw.steps !== undefined && (!Array.isArray(raw.steps) || raw.steps.length > 200)) throw new Error('instructions');
  const steps = (raw.steps || []).map((s) => {
    if (!isObj(s) || typeof s.view !== 'string' || !viewIds.has(s.view)) throw new Error('instructions');
    return { view: s.view, title: line(s.title, 120), notes: text(s.notes, 4000), warnings: lines(s.warnings, 10, 400), tools: lines(s.tools, 20, 120), picture: PICTURES.includes(s.picture) ? s.picture : 'view', list: s.list !== false };
  });
  return { title: line(raw.title, 120), subtitle: line(raw.subtitle, 200), cover: raw.cover !== false, partsPage: raw.partsPage !== false, template: cleanTemplate(raw.template), steps };
}
registerReaders({ instructions: readInstructions });

export const stepsFromViews = (m, ids = m.views.map((v) => v.id)) => ids.filter((id) => m.views.some((v) => v.id === id)).map((id) => ({ view: id, title: m.views.find((v) => v.id === id).name, notes: '', warnings: [], tools: [], picture: 'view', list: true }));
export const defaultInstructions = (m) => ({ title: m.name, subtitle: '', cover: true, partsPage: true, template: defaultTemplate(), steps: stepsFromViews(m) });

export function readTemplate(textIn) {
  let raw;
  try { raw = JSON.parse(String(textIn).replace(/^﻿/, '')); } catch { throw new Error('template'); }
  if (!isObj(raw) || raw.format !== TEMPLATE_FORMAT || raw.version !== 1 || !isObj(raw.template)) throw new Error('template');
  return cleanTemplate(raw.template);
}
export const templateText = (tpl) => JSON.stringify({ format: TEMPLATE_FORMAT, version: 1, template: cleanTemplate(tpl) }, null, 1);

/** Words that fit a width (mm) at a size, a line at a time; hard line breaks kept; an over-long word is cut. */
export function wrap(s, size, width) {
  const out = [];
  for (const para of String(s ?? '').split('\n')) {
    let cur = '';
    for (const w of para.split(/\s+/).filter(Boolean)) {
      const next = cur ? cur + ' ' + w : w;
      if (textWidth(next, size) <= width) { cur = next; continue; }
      if (cur) out.push(cur);
      cur = textWidth(w, size) <= width ? w : fitText(w, size, width);
    }
    out.push(cur);
  }
  return out;
}

// ---------------------------------------------------------------------------------------------- pages
function pageSize(tpl) { const [w, h] = PAPERS[tpl.paper] || PAPERS.a4; return tpl.landscape ? [Math.max(w, h), Math.min(w, h)] : [Math.min(w, h), Math.max(w, h)]; }
const stepView = (m, step) => {
  const v = m.views.find((x) => x.id === step.view);
  if (!v) return null;
  if (step.picture === 'view') return v;
  const style = step.picture === 'lines' ? 'lines' : step.picture;
  return { ...v, look: { ...(v.look || { section: null, box: null, magnifier: null }), style } };
};

export function pages(m, meshes, { words, labels = (k) => k, lineArt = lineArtOf }) {
  const doc = m.instructions || defaultInstructions(m);
  const tpl = doc.template, [W, H] = pageSize(tpl), mg = 14, accent = tpl.accent || INK;
  const out = [];
  const frame = (items, n, total) => {
    // header: logo left, the document's title right; footer: the template's line left, page n of total right
    if (tpl.logo) items.push({ t: 'image', x: mg, y: H - mg - 12, w: 36, h: 12, src: tpl.logo });
    items.push({ t: 'text', x: W - mg, y: H - mg - 7, text: fitText(doc.title || m.name, 4, W - 2 * mg - 44), size: 4, anchor: 'end', bold: true, color: accent });
    items.push({ t: 'path', pts: [[mg, H - mg - 15], [W - mg, H - mg - 15]], stroke: accent, width: PENS.edge });
    items.push({ t: 'path', pts: [[mg, mg + 7], [W - mg, mg + 7]], stroke: INK, width: PENS.thin });
    if (tpl.footer) items.push({ t: 'text', x: mg, y: mg + 2, text: fitText(tpl.footer, 3, W * 0.6), size: 3, anchor: 'start', color: INK });
    items.push({ t: 'text', x: W - mg, y: mg + 2, text: words.page(n, total), size: 3, anchor: 'end', color: INK });
  };
  const list = (scopeView) => partRows(m, meshes, { view: scopeView, scope: scopeView ? 'view' : 'all' });
  const total = (doc.cover ? 1 : 0) + doc.steps.length + (doc.partsPage ? 1 : 0);
  let n = 0;
  if (doc.cover) {
    const items = [];
    n++;
    items.push({ t: 'text', x: W / 2, y: H * 0.78, text: fitText(doc.title || m.name, 11, W - 2 * mg), size: 11, anchor: 'middle', bold: true, color: accent });
    if (doc.subtitle) items.push({ t: 'text', x: W / 2, y: H * 0.78 - 10, text: fitText(doc.subtitle, 5, W - 2 * mg), size: 5, anchor: 'middle', color: INK });
    const first = doc.steps[0] ? stepView(m, doc.steps[0]) : m.views[0] || null;
    if (first) {
      const aw = W - 2 * mg - 10, ah = H * 0.5;
      const art = lineArt(m, meshes, first, { W: aw, H: ah, labels, annotations: false, table: false });
      items.push({ t: 'group', items: shiftItems(art.items, mg + 5, H * 0.18) });
    }
    items.push({ t: 'text', x: W / 2, y: H * 0.12, text: words.coverLine(doc.steps.length, list(null).reduce((s, r) => s + r.qty, 0)), size: 3.5, anchor: 'middle', color: INK });
    frame(items, n, total);
    out.push({ w: W, h: H, items });
  }
  doc.steps.forEach((step, k) => {
    const v = stepView(m, step);
    if (!v) return;
    const items = [];
    n++;
    const top = H - mg - 22;
    items.push({ t: 'text', x: mg, y: top, text: words.step(k + 1), size: 6, anchor: 'start', bold: true, color: accent });
    if (step.title) items.push({ t: 'text', x: mg + textWidth(words.step(k + 1), 6) + 4, y: top, text: fitText(step.title, 6, W - 2 * mg - textWidth(words.step(k + 1), 6) - 4), size: 6, anchor: 'start', color: INK });
    // the picture: the upper part of the page
    const picTop = top - 5, picH = (H - 2 * mg) * (tpl.landscape ? 0.56 : 0.5), picW = W - 2 * mg;
    const art = lineArt(m, meshes, v, { W: picW, H: picH, labels, table: false });
    items.push({ t: 'group', items: shiftItems(art.items, mg, picTop - picH) });
    // below it: notes and warnings left, the step's parts and tools right
    let y = picTop - picH - 8;
    const colW = (W - 2 * mg - 8) / 2, xR = mg + colW + 8, size = 3.4, lh = size * 1.45;
    if (step.notes) for (const l of wrap(step.notes, size, colW)) { if (y < mg + 14) break; items.push({ t: 'text', x: mg, y, text: l, size, anchor: 'start', color: INK }); y -= lh; }
    for (const wtext of step.warnings) {
      const wl = wrap(words.warning + ' ' + wtext, size, colW - 6);
      const bh = wl.length * lh + 4;
      if (y - bh < mg + 12) break;
      y -= 2;
      items.push({ t: 'path', pts: [[mg, y + 1.5], [mg + colW, y + 1.5], [mg + colW, y - bh + 1.5], [mg, y - bh + 1.5]], closed: true, stroke: '#b5651d', width: PENS.edge, fill: '#fff4e5' });
      wl.forEach((l, i) => items.push({ t: 'text', x: mg + 3, y: y - 2.2 - i * lh, text: l, size, anchor: 'start', bold: i === 0, color: '#5a2d00' }));
      y -= bh + 2;
    }
    let yR = picTop - picH - 4;
    if (step.list) {
      const rowsHere = list(v);
      if (rowsHere.length) {
        items.push({ t: 'text', x: xR, y: yR - 4, text: words.parts, size: 3.8, anchor: 'start', bold: true, color: INK });
        const tb = tableItems(rowsHere.slice(0, 18), ['item', 'qty', 'name'], labels, { x: xR, y: yR - 7, size: 3, maxW: colW, ref: 'table', corner: 'tl' });
        items.push(...tb.items);
        yR -= 7 + tb.h + 4;
      }
    }
    if (step.tools.length) {
      items.push({ t: 'text', x: xR, y: yR - 4, text: words.tools, size: 3.8, anchor: 'start', bold: true, color: INK });
      yR -= 9;
      for (const tl of step.tools) { if (yR < mg + 12) break; items.push({ t: 'text', x: xR + 2, y: yR, text: '•  ' + fitText(tl, size, colW - 6), size, anchor: 'start', color: INK }); yR -= lh; }
    }
    frame(items, n, total);
    out.push({ w: W, h: H, items });
  });
  if (doc.partsPage) {
    const all = list(null);
    const per = Math.floor((H - 2 * mg - 40) / (3.2 * 1.7)) - 1;
    for (let start = 0; start < Math.max(all.length, 1); start += per) {
      const items = [];
      n++;
      items.push({ t: 'text', x: mg, y: H - mg - 22, text: words.partsList, size: 6, anchor: 'start', bold: true, color: accent });
      const tb = tableItems(all.slice(start, start + per), ['item', 'qty', 'number', 'name', 'material', 'description'].filter((c) => c !== 'description' || all.some((r) => r.description)), labels, { x: mg, y: H - mg - 28, size: 3.2, maxW: W - 2 * mg, corner: 'tl' });
      items.push(...tb.items);
      frame(items, n, total + Math.ceil(all.length / per) - 1);
      out.push({ w: W, h: H, items });
      if (!all.length) break;
    }
  }
  return out;
}
function shiftItems(items, dx, dy) {
  const sh = (it) => {
    if (it.t === 'path') return { ...it, pts: it.pts.map((p) => [p[0] + dx, p[1] + dy]) };
    if (it.t === 'circle') return { ...it, c: [it.c[0] + dx, it.c[1] + dy] };
    if (it.t === 'text' || it.t === 'image') return { ...it, x: it.x + dx, y: it.y + dy };
    if (it.t === 'group') return { ...it, items: it.items.map(sh), clip: it.clip?.circle ? { circle: [it.clip.circle[0] + dx, it.clip.circle[1] + dy, it.clip.circle[2]] } : it.clip?.rect ? { rect: [it.clip.rect[0] + dx, it.clip.rect[1] + dy, it.clip.rect[2], it.clip.rect[3]] } : undefined };
    return it;
  };
  return items.map(sh);
}

// ---------------------------------------------------------------------------------------------- one HTML page
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function html(m, meshes, { words, labels = (k) => k, lineArt = lineArtOf, svgText, pictureFor = () => null, lang = 'en' }) {
  const doc = m.instructions || defaultInstructions(m);
  const tpl = doc.template, accent = HEX.test(tpl.accent) ? tpl.accent : INK;
  const [W, H] = pageSize(tpl);
  const table = (list, cols) => '<table><thead><tr>' + cols.map((c) => `<th scope="col">${esc(labels(c))}</th>`).join('') + '</tr></thead><tbody>'
    + list.map((r) => '<tr>' + cols.map((c) => `<td${['item', 'qty'].includes(c) ? ' class="n"' : ''}>${esc(columnValue(r, c))}</td>`).join('') + '</tr>').join('') + '</tbody></table>';
  const svgOf = (v, w, h, opts = {}) => svgText(lineArt(m, meshes, v, { W: w, H: h, labels, ...opts }), { background: '#ffffff' }).replace(/^<\?xml[^>]*>\s*/, '').replace(/ width="[^"]*mm" height="[^"]*mm"/, ' width="100%" role="img"');
  const pic = (step, v, alt) => { const src = pictureFor(step); return src && DATA_IMG.test(src) ? `<img src="${src}" alt="${esc(alt)}">` : svgOf(v, W - 28, (H - 28) * 0.5); };
  const parts = [];
  parts.push(`<!doctype html>\n<html lang="${esc(lang)}">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>${esc(doc.title || m.name)}</title>\n<style>
:root { --accent: ${accent}; --ink: #1b1b1b; }
* { box-sizing: border-box; }
body { margin: 0; font: 11pt/1.45 Helvetica, Arial, sans-serif; color: var(--ink); background: #fff; }
main { max-width: 52rem; margin: 0 auto; padding: 1.5rem 1rem 3rem; }
header.doc { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--accent); padding-bottom: .5rem; margin-bottom: 1rem; gap: 1rem; }
header.doc img { height: 2.5rem; width: auto; }
h1 { color: var(--accent); font-size: 2rem; margin: 2rem 0 .25rem; }
h2 { color: var(--accent); font-size: 1.35rem; margin: 0 0 .75rem; }
.sub { font-size: 1.15rem; margin: 0 0 1.5rem; }
section { margin: 2rem 0; padding-top: 1rem; border-top: 1px solid #ccc; }
figure { margin: 0 0 1rem; }
figure svg, figure img { width: 100%; height: auto; display: block; border: 1px solid #ddd; }
.cols { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
@media (max-width: 40rem) { .cols { grid-template-columns: 1fr; } }
.warning { border: 1.5px solid #b5651d; background: #fff4e5; color: #5a2d00; padding: .5rem .75rem; margin: .5rem 0; border-radius: 2px; }
.warning strong { margin-right: .35rem; }
table { border-collapse: collapse; width: 100%; font-size: .95em; }
th, td { border: 1px solid #999; padding: .2rem .4rem; text-align: left; vertical-align: top; }
th { background: #f2f2f2; }
td.n { text-align: right; font-variant-numeric: tabular-nums; }
footer.doc { margin-top: 2rem; font-size: .85em; color: #555; }
@page { size: ${esc(tpl.paper === 'letter' ? 'letter' : tpl.paper === 'tabloid' ? 'ledger' : tpl.paper.toUpperCase())} ${tpl.landscape ? 'landscape' : 'portrait'}; margin: 14mm; }
@media print { main { max-width: none; padding: 0; } section { break-before: page; border-top: 0; } section.cover { break-before: auto; } figure svg, figure img { border: 0; } }
</style>\n</head>\n<body>\n<main>\n<header class="doc">${tpl.logo ? `<img src="${tpl.logo}" alt="">` : '<span></span>'}<strong>${esc(doc.title || m.name)}</strong></header>`);
  if (doc.cover) {
    const first = doc.steps[0] ? stepView(m, doc.steps[0]) : m.views[0];
    parts.push(`<section class="cover"><h1>${esc(doc.title || m.name)}</h1>${doc.subtitle ? `<p class="sub">${esc(doc.subtitle)}</p>` : ''}${first ? `<figure>${svgOf(first, W - 28, (H - 28) * 0.5, { annotations: false, table: false })}</figure>` : ''}<p>${esc(words.coverLine(doc.steps.length, partRows(m, meshes).reduce((s, r) => s + r.qty, 0)))}</p></section>`);
  }
  doc.steps.forEach((step, k) => {
    const v = stepView(m, step);
    if (!v) return;
    const rowsHere = step.list ? partRows(m, meshes, { view: v, scope: 'view' }) : [];
    parts.push(`<section class="step"><h2>${esc(words.step(k + 1))}${step.title ? ': ' + esc(step.title) : ''}</h2><figure>${pic(step, v, step.title || words.step(k + 1))}</figure><div class="cols"><div>`
      + (step.notes ? step.notes.split('\n').filter((x) => x.trim()).map((p) => `<p>${esc(p)}</p>`).join('') : '')
      + step.warnings.map((w) => `<p class="warning"><strong>${esc(words.warning)}</strong>${esc(w)}</p>`).join('')
      + '</div><div>'
      + (rowsHere.length ? `<h3>${esc(words.parts)}</h3>` + table(rowsHere, ['item', 'qty', 'name']) : '')
      + (step.tools.length ? `<h3>${esc(words.tools)}</h3><ul>` + step.tools.map((x) => `<li>${esc(x)}</li>`).join('') + '</ul>' : '')
      + '</div></div></section>');
  });
  if (doc.partsPage) {
    const all = partRows(m, meshes);
    parts.push(`<section class="parts"><h2>${esc(words.partsList)}</h2>` + table(all, ['item', 'qty', 'number', 'name', 'material', 'description'].filter((c) => c !== 'description' || all.some((r) => r.description))) + '</section>');
  }
  parts.push(`${tpl.footer ? `<footer class="doc">${esc(tpl.footer)}</footer>` : ''}\n</main>\n</body>\n</html>\n`);
  return parts.join('\n');
}
