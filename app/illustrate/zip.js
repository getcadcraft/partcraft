/* SPDX-License-Identifier: Apache-2.0 */
/**
 * illustrate/zip.js — reading a zip archive (DOM-free, import-free; APPNOTE.TXT 6.3.x, PKWARE): the central directory, then
 * each entry stored or deflated (DecompressionStream 'deflate-raw', in browsers and Node 18+). Untrusted: every offset and
 * size is checked against the bytes, names are capped, zip64, encryption and other methods are refused, and an entry's
 * inflated size is capped (a zip bomb stops at the cap).
 *
 *   const entries = readZip(bytes)     → Map(name → { size, read: () => Promise<Uint8Array> })    throws ZipError
 */
export class ZipError extends Error { constructor(code) { super(code); this.name = 'ZipError'; this.code = code; } }
export const MAX_ENTRIES = 20000, MAX_ENTRY = 512 * 1024 * 1024;

export function readZip(bytes) {
  if (!(bytes instanceof Uint8Array)) bytes = new Uint8Array(bytes);
  const dv = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const n = bytes.length;
  let eocd = -1;
  for (let i = n - 22; i >= Math.max(0, n - 22 - 65535); i--) if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new ZipError('not_zip');
  const count = dv.getUint16(eocd + 10, true), cdSize = dv.getUint32(eocd + 12, true), cdOff = dv.getUint32(eocd + 16, true);
  if (count === 0xffff || cdOff === 0xffffffff) throw new ZipError('zip64');
  if (count > MAX_ENTRIES || cdOff + cdSize > eocd) throw new ZipError('bad');
  const out = new Map();
  let p = cdOff;
  for (let k = 0; k < count; k++) {
    if (p + 46 > eocd || dv.getUint32(p, true) !== 0x02014b50) throw new ZipError('bad');
    const flags = dv.getUint16(p + 8, true), method = dv.getUint16(p + 10, true);
    const csize = dv.getUint32(p + 20, true), usize = dv.getUint32(p + 24, true);
    const nlen = dv.getUint16(p + 28, true), xlen = dv.getUint16(p + 30, true), clen = dv.getUint16(p + 32, true);
    const local = dv.getUint32(p + 42, true);
    if (p + 46 + nlen + xlen + clen > eocd) throw new ZipError('bad');
    const name = new TextDecoder('utf-8').decode(bytes.subarray(p + 46, p + 46 + Math.min(nlen, 1024)));
    p += 46 + nlen + xlen + clen;
    if (flags & 1) throw new ZipError('encrypted');
    if (csize === 0xffffffff || usize === 0xffffffff) throw new ZipError('zip64');
    if (local + 30 > n || dv.getUint32(local, true) !== 0x04034b50) throw new ZipError('bad');
    const start = local + 30 + dv.getUint16(local + 26, true) + dv.getUint16(local + 28, true);
    if (start + csize > n) throw new ZipError('bad');
    if (method !== 0 && method !== 8) throw new ZipError('method');
    if (usize > MAX_ENTRY) throw new ZipError('too_big');
    const data = bytes.subarray(start, start + csize);
    out.set(name.replace(/^\/+/, ''), { size: usize, read: () => (method === 0 ? Promise.resolve(data) : inflate(data, usize)) });
  }
  return out;
}

async function inflate(data, expect) {
  if (typeof DecompressionStream === 'undefined') throw new ZipError('no_inflate');
  const cap = Math.min(MAX_ENTRY, Math.max(expect, 1) + 64);
  const chunks = [];
  let total = 0;
  try {
    const reader = new Blob([data]).stream().pipeThrough(new DecompressionStream('deflate-raw')).getReader();
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      total += value.length;
      if (total > cap) { reader.cancel().catch(() => {}); throw new ZipError('bad'); }
      chunks.push(value);
    }
  } catch (e) { if (e instanceof ZipError) throw e; throw new ZipError('bad'); }
  const out = new Uint8Array(total);
  let o = 0;
  for (const c of chunks) { out.set(c, o); o += c.length; }
  return out;
}
