/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: SVG markup (file content, not words) */
/**
 * illustrate/svg.js — a display list (display.js) as SVG (DOM-free, import-free). The picture is in millimetres
 * (width/height "…mm", viewBox in mm, y flipped so the display list's y-up becomes SVG's y-down).
 *
 *   svgNodes(d, { background }) → node tree { tag, attrs, text?, kids? }   (the live overlay builds DOM from it)
 *   svgText(d, opts) → the .svg file's text (escaped; no scripts, no external references)
 */
const f = (v) => { const r = Math.abs(v) < 1e-9 ? 0 : v; return String(Number(r.toFixed(3))); };
const esc = (s) => String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const DATA_IMG = /^data:image\/(png|jpeg);base64,[A-Za-z0-9+/]+={0,2}$/;

export function svgNodes(d, { background = null, idPrefix = 'il' } = {}) {
  const H = d.h;
  let clipN = 0;
  const defs = [];
  const Y = (y) => H - y;
  const strokeAttrs = (it) => {
    const a = {};
    a.fill = it.fill || 'none';
    if (it.stroke) { a.stroke = it.stroke; a['stroke-width'] = f(it.width ?? 0.25); a['stroke-linecap'] = 'round'; a['stroke-linejoin'] = 'round'; if (it.dash) a['stroke-dasharray'] = it.dash.map(f).join(' '); }
    if (it.opacity !== undefined && it.opacity < 1) a.opacity = f(it.opacity);
    if (it.ref) a['data-ref'] = it.ref;
    return a;
  };
  const node = (it) => {
    if (it.t === 'path') {
      if (it.pts.length < 2) return null;
      const dd = it.pts.map((p, i) => (i ? 'L' : 'M') + f(p[0]) + ' ' + f(Y(p[1]))).join('') + (it.closed ? 'Z' : '');
      return { tag: 'path', attrs: { d: dd, ...strokeAttrs(it) } };
    }
    if (it.t === 'circle') return { tag: 'circle', attrs: { cx: f(it.c[0]), cy: f(Y(it.c[1])), r: f(it.r), ...strokeAttrs(it) } };
    if (it.t === 'text') {
      const a = { x: f(it.x), y: f(Y(it.y)), 'font-family': 'Helvetica, Arial, sans-serif', 'font-size': f(it.size), fill: it.color || '#1b1b1b' };
      if (it.anchor && it.anchor !== 'start') a['text-anchor'] = it.anchor;
      if (it.bold) a['font-weight'] = 'bold';
      if (it.rot) a.transform = `rotate(${f(-it.rot)} ${f(it.x)} ${f(Y(it.y))})`;
      if (it.ref) a['data-ref'] = it.ref;
      return { tag: 'text', attrs: a, text: String(it.text) };
    }
    if (it.t === 'image') {
      if (!DATA_IMG.test(it.src || '')) return null;
      return { tag: 'image', attrs: { x: f(it.x), y: f(Y(it.y + it.h)), width: f(it.w), height: f(it.h), href: it.src, preserveAspectRatio: 'xMidYMid meet' } };
    }
    if (it.t === 'group') {
      const g = { tag: 'g', attrs: it.ref ? { 'data-ref': it.ref } : {}, kids: it.items.map(node).filter(Boolean) };
      if (it.clip) {
        const id = idPrefix + '-clip-' + (++clipN);
        const shape = it.clip.circle ? { tag: 'circle', attrs: { cx: f(it.clip.circle[0]), cy: f(Y(it.clip.circle[1])), r: f(it.clip.circle[2]) } }
          : { tag: 'rect', attrs: { x: f(it.clip.rect[0]), y: f(Y(it.clip.rect[1] + it.clip.rect[3])), width: f(it.clip.rect[2]), height: f(it.clip.rect[3]) } };
        defs.push({ tag: 'clipPath', attrs: { id }, kids: [shape] });
        g.attrs['clip-path'] = `url(#${id})`;
      }
      return g;
    }
    return null;
  };
  const kids = d.items.map(node).filter(Boolean);
  if (background) kids.unshift({ tag: 'rect', attrs: { x: 0, y: 0, width: f(d.w), height: f(d.h), fill: background } });
  if (defs.length) kids.unshift({ tag: 'defs', attrs: {}, kids: defs });
  return { tag: 'svg', attrs: { xmlns: 'http://www.w3.org/2000/svg', width: f(d.w) + 'mm', height: f(d.h) + 'mm', viewBox: `0 0 ${f(d.w)} ${f(d.h)}` }, kids };
}

export function svgText(d, opts = {}) {
  const out = ['<?xml version="1.0" encoding="UTF-8"?>\n'];
  const write = (n, depth) => {
    const attrs = Object.entries(n.attrs || {}).map(([k, v]) => ` ${k}="${esc(v)}"`).join('');
    if (n.text !== undefined) out.push(`${' '.repeat(depth)}<${n.tag}${attrs}>${esc(n.text)}</${n.tag}>\n`);
    else if (n.kids?.length) { out.push(`${' '.repeat(depth)}<${n.tag}${attrs}>\n`); for (const k of n.kids) write(k, depth + 1); out.push(`${' '.repeat(depth)}</${n.tag}>\n`); }
    else out.push(`${' '.repeat(depth)}<${n.tag}${attrs}/>\n`);
  };
  const root = svgNodes(d, opts);
  if (opts.title) root.kids.unshift({ tag: 'title', attrs: {}, text: opts.title });
  write(root, 0);
  return out.join('');
}
