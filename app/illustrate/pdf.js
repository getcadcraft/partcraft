/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: PDF content-stream operators and dictionaries (file content, not words) */
/**
 * illustrate/pdf.js — display lists (display.js) as a vector PDF 1.4 written by hand (DOM-free; no library): one page per
 * display, in millimetres; strokes with colour, width and dash, fills, circles as Béziers, clip groups, opacity (ExtGState),
 * Helvetica / Helvetica-Bold text in WinAnsi (characters outside it print "?" and are counted), pictures: JPEG as is
 * (DCTDecode) and 8-bit grey/RGB PNG without transparency by their own deflate stream (PNG predictors); other pictures are
 * left out and counted (the workspace turns them into JPEG first). Content streams deflated where CompressionStream exists.
 * PDF 1.4: ISO 32000-1 is the reference used for every operator here.
 *
 *   const { bytes, missing, skipped } = await toPdf(pages, { title })    pages: [{ w, h, items }]
 */
import { CP1252, SUBST, advance } from '../font.js';

const num = (v) => { const r = Math.abs(v) < 1e-9 ? 0 : v; return String(Number(r.toFixed(3))); };
const rgb = (h) => { const m = /^#([0-9a-f]{6})$/i.exec(h || '#000000'); const n = m ? parseInt(m[1], 16) : 0; return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255].map((x) => num(x)).join(' '); };

export function winAnsi(s) {
  let str = '', missing = 0;
  for (let ch of String(s)) {
    ch = SUBST[ch] || ch;
    let code = ch.codePointAt(0);
    if (CP1252[ch] !== undefined) code = CP1252[ch];
    else if (code > 0xff || (code >= 0x7f && code < 0xa0) || code < 0x20) { code = 0x3f; missing++; }
    if (code === 0x28 || code === 0x29 || code === 0x5c) str += '\\' + String.fromCharCode(code);
    else if (code >= 0x20 && code < 0x7f) str += String.fromCharCode(code);
    else str += '\\' + code.toString(8).padStart(3, '0');
  }
  return { str, missing };
}

function b64bytes(s) {
  const A = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  const c = s.replace(/=+$/, ''), out = new Uint8Array(Math.floor(c.length * 3 / 4));
  let bits = 0, acc = 0, o = 0;
  for (const ch of c) { const v = A.indexOf(ch); if (v < 0) return null; acc = (acc << 6) | v; bits += 6; if (bits >= 8) { bits -= 8; out[o++] = (acc >> bits) & 255; } }
  return out.subarray(0, o);
}
/** An image XObject from a data: URL, or null (left out). */
export function imageObject(src) {
  const m = /^data:image\/(png|jpeg);base64,([A-Za-z0-9+/]+={0,2})$/.exec(src || '');
  if (!m) return null;
  const b = b64bytes(m[2]);
  if (!b || b.length < 24) return null;
  if (m[1] === 'jpeg') {
    if (b[0] !== 0xff || b[1] !== 0xd8) return null;
    let p = 2;
    while (p + 9 < b.length) {
      if (b[p] !== 0xff) return null;
      const mk = b[p + 1], len = (b[p + 2] << 8) | b[p + 3];
      if (mk >= 0xc0 && mk <= 0xcf && mk !== 0xc4 && mk !== 0xc8 && mk !== 0xcc) {
        const h = (b[p + 5] << 8) | b[p + 6], w = (b[p + 7] << 8) | b[p + 8], comps = b[p + 9];
        if (!w || !h || ![1, 3].includes(comps)) return null;
        return { w, h, dict: `/Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /${comps === 1 ? 'DeviceGray' : 'DeviceRGB'} /BitsPerComponent 8 /Filter /DCTDecode`, data: b };
      }
      p += 2 + len;
    }
    return null;
  }
  // PNG: IHDR, then the IDAT chunks' zlib stream as it is
  const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
  if (dv.getUint32(0) !== 0x89504e47 || dv.getUint32(12) !== 0x49484452) return null;
  const w = dv.getUint32(16), h = dv.getUint32(20), depth = b[24], type = b[25], interlace = b[28];
  if (depth !== 8 || interlace !== 0 || (type !== 0 && type !== 2)) return null;
  const idat = [];
  let p = 8;
  while (p + 8 <= b.length) {
    const len = dv.getUint32(p), kind = dv.getUint32(p + 4);
    if (p + 12 + len > b.length) return null;
    if (kind === 0x49444154) idat.push(b.subarray(p + 8, p + 8 + len));
    p += 12 + len;
  }
  if (!idat.length) return null;
  const total = idat.reduce((s, x) => s + x.length, 0), data = new Uint8Array(total);
  let o = 0; for (const x of idat) { data.set(x, o); o += x.length; }
  const colors = type === 2 ? 3 : 1;
  return { w, h, dict: `/Type /XObject /Subtype /Image /Width ${w} /Height ${h} /ColorSpace /${colors === 3 ? 'DeviceRGB' : 'DeviceGray'} /BitsPerComponent 8 /Filter /FlateDecode /DecodeParms << /Predictor 15 /Colors ${colors} /BitsPerComponent 8 /Columns ${w} >>`, data };
}

async function deflate(bytes) {
  if (typeof CompressionStream === 'undefined') return null;
  try { return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate'))).arrayBuffer()); } catch { return null; }
}

/** One page's content stream; images and opacity states are collected for its resources. */
function pageContent(d, res) {
  const ops = [(72 / 25.4).toFixed(9) + ' 0 0 ' + (72 / 25.4).toFixed(9) + ' 0 0 cm', '1 J 1 j'];
  let missing = 0, skipped = 0;
  const st = { stroke: null, fill: null, width: null, dash: null, gs: null };
  const setStroke = (c) => { if (st.stroke !== c) { ops.push(rgb(c) + ' RG'); st.stroke = c; } };
  const setFill = (c) => { if (st.fill !== c) { ops.push(rgb(c) + ' rg'); st.fill = c; } };
  const setWidth = (w) => { const v = num(w); if (st.width !== v) { ops.push(v + ' w'); st.width = v; } };
  const setDash = (dash) => { const v = dash ? '[' + dash.map(num).join(' ') + '] 0 d' : '[] 0 d'; if (st.dash !== v) { ops.push(v); st.dash = v; } };
  const setAlpha = (a) => {
    const key = a === undefined || a >= 1 ? null : num(a);
    if (st.gs === key) return;
    if (key === null) { ops.push('/GS1 gs'); st.gs = null; return; }
    if (!res.alphas.has(key)) res.alphas.set(key, 'GSa' + res.alphas.size);
    ops.push('/' + res.alphas.get(key) + ' gs'); st.gs = key;
  };
  const pathOps = (pts, closed) => pts.map((p, i) => num(p[0]) + ' ' + num(p[1]) + (i ? ' l' : ' m')).join(' ') + (closed ? ' h' : '');
  const circleOps = (c, r) => {
    const k = 0.5522847498 * r, [x, y] = c;
    return [`${num(x + r)} ${num(y)} m`, `${num(x + r)} ${num(y + k)} ${num(x + k)} ${num(y + r)} ${num(x)} ${num(y + r)} c`, `${num(x - k)} ${num(y + r)} ${num(x - r)} ${num(y + k)} ${num(x - r)} ${num(y)} c`,
      `${num(x - r)} ${num(y - k)} ${num(x - k)} ${num(y - r)} ${num(x)} ${num(y - r)} c`, `${num(x + k)} ${num(y - r)} ${num(x + r)} ${num(y - k)} ${num(x + r)} ${num(y)} c`, 'h'].join(' ');
  };
  const draw = (it) => {
    if (it.t === 'path' || it.t === 'circle') {
      if (it.t === 'path' && it.pts.length < 2) return;
      setAlpha(it.opacity);
      const geo = it.t === 'circle' ? circleOps(it.c, it.r) : pathOps(it.pts, it.closed);
      const doFill = !!it.fill, doStroke = !!it.stroke;
      if (doFill) setFill(it.fill);
      if (doStroke) { setStroke(it.stroke); setWidth(it.width ?? 0.25); setDash(it.dash); }
      ops.push(geo + ' ' + (doFill && doStroke ? 'B' : doFill ? 'f' : doStroke ? 'S' : 'n'));
    } else if (it.t === 'text') {
      const enc = winAnsi(it.text);
      missing += enc.missing;
      const w = advance(String(it.text)) / 1000 * it.size;
      const dx = it.anchor === 'middle' ? -w / 2 : it.anchor === 'end' ? -w : 0;
      const r = (it.rot || 0) * Math.PI / 180, c = Math.cos(r), s = Math.sin(r);
      setAlpha(undefined); setFill(it.color || '#1b1b1b');
      ops.push('BT /' + (it.bold ? 'F2' : 'F1') + ' 1 Tf ' + [it.size * c, it.size * s, -it.size * s, it.size * c, it.x + dx * c, it.y + dx * s].map(num).join(' ') + ' Tm (' + enc.str + ') Tj ET');
    } else if (it.t === 'image') {
      const img = imageObject(it.src);
      if (!img) { skipped++; return; }
      const name = 'Im' + res.images.length;
      res.images.push({ name, img });
      ops.push(`q ${num(it.w)} 0 0 ${num(it.h)} ${num(it.x)} ${num(it.y)} cm /${name} Do Q`);
    } else if (it.t === 'group') {
      ops.push('q');
      const saved = { ...st };
      if (it.clip?.circle) ops.push(circleOps([it.clip.circle[0], it.clip.circle[1]], it.clip.circle[2]) + ' W n');
      else if (it.clip?.rect) { const [x, y, w, h] = it.clip.rect; ops.push(`${num(x)} ${num(y)} ${num(w)} ${num(h)} re W n`); }
      for (const k of it.items) draw(k);
      ops.push('Q');
      Object.assign(st, saved);
    }
  };
  for (const it of d.items) draw(it);
  return { text: ops.join('\n') + '\n', missing, skipped };
}

export async function toPdf(pages, { title = '' } = {}) {
  const enc = new TextEncoder();
  const objs = [];   // [n] = [parts…]
  let next = 1;
  const alloc = () => next++;
  const catalog = alloc(), pagesObj = alloc(), info = alloc(), f1 = alloc(), f2 = alloc(), gs1 = alloc();
  const pageIds = [];
  let missing = 0, skipped = 0;
  const res = { images: [], alphas: new Map() };
  const pageObjs = [];
  for (const d of pages) {
    const before = res.images.length;
    const c = pageContent(d, res);
    missing += c.missing; skipped += c.skipped;
    const raw = enc.encode(c.text), packed = await deflate(raw);
    const contentId = alloc(), pageId = alloc();
    objs[contentId] = ['<< /Length ' + (packed || raw).length + (packed ? ' /Filter /FlateDecode' : '') + ' >>\nstream\n', packed || raw, '\nendstream'];
    pageObjs.push({ pageId, contentId, d, images: res.images.slice(before) });
    pageIds.push(pageId);
  }
  const imageIds = res.images.map(({ img }) => { const id = alloc(); objs[id] = ['<< ' + img.dict + ' /Length ' + img.data.length + ' >>\nstream\n', img.data, '\nendstream']; return id; });
  const alphaIds = new Map([...res.alphas].map(([a, name]) => { const id = alloc(); objs[id] = [`<< /Type /ExtGState /CA ${a} /ca ${a} >>`]; return [name, id]; }));
  const pt = (mm) => num(mm * 72 / 25.4);
  for (const p of pageObjs) {
    const xo = p.images.map((im) => `/${im.name} ${imageIds[res.images.indexOf(im)]} 0 R`).join(' ');
    const gs = ['/GS1 ' + gs1 + ' 0 R', ...[...alphaIds].map(([n, id]) => `/${n} ${id} 0 R`)].join(' ');
    objs[p.pageId] = [`<< /Type /Page /Parent ${pagesObj} 0 R /MediaBox [0 0 ${pt(p.d.w)} ${pt(p.d.h)}] /Resources << /Font << /F1 ${f1} 0 R /F2 ${f2} 0 R >> /ExtGState << ${gs} >>${xo ? ' /XObject << ' + xo + ' >>' : ''} >> /Contents ${p.contentId} 0 R >>`];
  }
  const now = new Date(), pad = (x) => String(x).padStart(2, '0');
  const date = 'D:' + now.getUTCFullYear() + pad(now.getUTCMonth() + 1) + pad(now.getUTCDate()) + pad(now.getUTCHours()) + pad(now.getUTCMinutes()) + pad(now.getUTCSeconds()) + 'Z';
  objs[catalog] = [`<< /Type /Catalog /Pages ${pagesObj} 0 R >>`];
  objs[pagesObj] = [`<< /Type /Pages /Kids [${pageIds.map((i) => i + ' 0 R').join(' ')}] /Count ${pageIds.length} >>`];
  objs[info] = ['<< /Title (' + winAnsi(title).str + ') /Producer (PartCraft) /Creator (PartCraft) /CreationDate (' + date + ') >>'];
  objs[f1] = ['<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>'];
  objs[f2] = ['<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'];
  objs[gs1] = ['<< /Type /ExtGState /CA 1 /ca 1 >>'];
  const parts = [], offsets = [];
  let size = 0;
  const push = (b) => { const u = typeof b === 'string' ? enc.encode(b) : b; parts.push(u); size += u.length; };
  push('%PDF-1.4\n'); push(Uint8Array.from([0x25, 0xe2, 0xe3, 0xcf, 0xd3, 0x0a]));
  for (let n = 1; n < next; n++) { offsets[n] = size; push(n + ' 0 obj\n'); for (const b of objs[n]) push(b); push('\nendobj\n'); }
  const xref = size;
  push('xref\n0 ' + next + '\n0000000000 65535 f \n' + offsets.slice(1).map((o) => String(o).padStart(10, '0') + ' 00000 n \n').join(''));
  push(`trailer\n<< /Size ${next} /Root ${catalog} 0 R /Info ${info} 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  const out = new Uint8Array(size);
  let at = 0;
  for (const p of parts) { out.set(p, at); at += p.length; }
  return { bytes: out, missing, skipped };
}
