/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: canvas font names (not words) */
/**
 * illustrate/canvas.js — a display list (display.js) painted on a 2D canvas context (for PNG pictures). Import-free and
 * DOM-free: the caller gives the context (a page canvas or an OffscreenCanvas) and, for pictures, decoded images.
 *
 *   draw(ctx, d, { scale (pixels per mm), background, images: Map(src → ImageBitmap | HTMLImageElement) })
 */
export function draw(ctx, d, { scale = 4, background = null, images = new Map() } = {}) {
  const H = d.h * scale;
  if (background) { ctx.fillStyle = background; ctx.fillRect(0, 0, d.w * scale, H); }
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const X = (x) => x * scale, Y = (y) => H - y * scale;
  const item = (it) => {
    ctx.globalAlpha = it.opacity ?? 1;
    if (it.t === 'path' || it.t === 'circle') {
      ctx.beginPath();
      if (it.t === 'circle') ctx.arc(X(it.c[0]), Y(it.c[1]), it.r * scale, 0, 2 * Math.PI);
      else { if (it.pts.length < 2) return; it.pts.forEach((p, i) => (i ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1])))); if (it.closed) ctx.closePath(); }
      if (it.fill) { ctx.fillStyle = it.fill; ctx.fill(); }
      if (it.stroke) { ctx.strokeStyle = it.stroke; ctx.lineWidth = Math.max((it.width ?? 0.25) * scale, 0.5); ctx.setLineDash(it.dash ? it.dash.map((v) => v * scale) : []); ctx.stroke(); }
    } else if (it.t === 'text') {
      ctx.save();
      ctx.translate(X(it.x), Y(it.y));
      if (it.rot) ctx.rotate(-it.rot * Math.PI / 180);
      ctx.font = (it.bold ? 'bold ' : '') + (it.size * scale) + 'px Helvetica, Arial, sans-serif';
      ctx.textAlign = it.anchor === 'middle' ? 'center' : it.anchor === 'end' ? 'right' : 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = it.color || '#1b1b1b';
      ctx.fillText(String(it.text), 0, 0);
      ctx.restore();
    } else if (it.t === 'image') {
      const img = images.get(it.src);
      if (img) ctx.drawImage(img, X(it.x), Y(it.y + it.h), it.w * scale, it.h * scale);
    } else if (it.t === 'group') {
      ctx.save();
      if (it.clip?.circle) { ctx.beginPath(); ctx.arc(X(it.clip.circle[0]), Y(it.clip.circle[1]), it.clip.circle[2] * scale, 0, 2 * Math.PI); ctx.clip(); }
      else if (it.clip?.rect) { const [x, y, w, h] = it.clip.rect; ctx.beginPath(); ctx.rect(X(x), Y(y + h), w * scale, h * scale); ctx.clip(); }
      for (const k of it.items) item(k);
      ctx.restore();
    }
  };
  for (const it of d.items) item(it);
  ctx.globalAlpha = 1;
  ctx.setLineDash([]);
}
/** Every picture a display list uses (for decoding before draw). */
export function pictures(d, out = new Set()) {
  for (const it of d.items) { if (it.t === 'image') out.add(it.src); else if (it.t === 'group') pictures({ items: it.items }, out); }
  return out;
}
