/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mp4.js — writing an MP4 file from encoded H.264 frames (0.7 RN.10), our own, from the ISO base media file format (ISO/IEC
 * 14496-12: ftyp, moov with one video trak, mdat) and the AVC file format (14496-15: the avc1 sample entry carrying the
 * decoder's avcC record, which WebCodecs' VideoEncoder hands over as `decoderConfig.description`). No DOM. One video track,
 * constant frame rate, every frame's size and place in the sample tables; key frames in stss.
 *
 *   const m = new Mp4Writer({ w, h, fps, avcC: Uint8Array });   m.add(Uint8Array frame (AVC format: length-prefixed NAL units), key)
 *   m.finish() → Uint8Array (the whole file: ftyp, moov, mdat — moov first, so a player can start before the end arrives)
 */

const enc = new TextEncoder();
function box(type, ...parts) {
  const size = 8 + parts.reduce((a, p) => a + p.length, 0), out = new Uint8Array(size), v = new DataView(out.buffer);
  v.setUint32(0, size); out.set(enc.encode(type), 4);
  let o = 8;
  for (const p of parts) { out.set(p, o); o += p.length; }
  return out;
}
const full = (type, version, flags, ...parts) => box(type, Uint8Array.of(version, (flags >> 16) & 255, (flags >> 8) & 255, flags & 255), ...parts);
function u32s(...xs) { const b = new Uint8Array(xs.length * 4), v = new DataView(b.buffer); xs.forEach((x, i) => v.setUint32(i * 4, x >>> 0)); return b; }
function u16s(...xs) { const b = new Uint8Array(xs.length * 2), v = new DataView(b.buffer); xs.forEach((x, i) => v.setUint16(i * 2, x & 0xffff)); return b; }
const zeros = (n) => new Uint8Array(n);
const MATRIX = u32s(0x10000, 0, 0, 0, 0x10000, 0, 0, 0, 0x40000000);   // identity (16.16, last 2.30)

export class Mp4Writer {
  constructor({ w, h, fps, avcC }) {
    if (!(w > 0 && h > 0 && fps > 0) || !avcC || !avcC.length) throw new Error('mp4: size, rate and the avcC record');   // i18n-ignore: a programming error
    this.w = w | 0; this.h = h | 0; this.fps = fps; this.avcC = avcC;
    this.timescale = Math.round(fps * 1000); this.dur = 1000;   // each frame lasts 1000 ticks of fps·1000 per second
    this.frames = []; this.keys = [];
  }
  add(data, key) { this.frames.push(data); if (key) this.keys.push(this.frames.length); }
  finish() {
    const n = this.frames.length, total = this.dur * n;
    const sizes = this.frames.map((f) => f.length);
    // the sample tables (stco is filled once moov's size is known)
    const stsd = full('stsd', 0, 0, u32s(1), box('avc1', zeros(6), u16s(1), zeros(16), u16s(this.w, this.h), u32s(0x00480000, 0x00480000, 0), u16s(1),
      zeros(32), u16s(0x18, 0xffff), box('avcC', this.avcC)));
    const stts = full('stts', 0, 0, u32s(1, n, this.dur));
    const stss = full('stss', 0, 0, u32s(this.keys.length, ...this.keys));
    const stsc = full('stsc', 0, 0, u32s(1, 1, n, 1));   // one chunk holding every sample
    const stsz = full('stsz', 0, 0, u32s(0, n, ...sizes));
    const build = (chunkOffset) => {
      const stbl = box('stbl', stsd, stts, stss, stsc, stsz, full('stco', 0, 0, u32s(1, chunkOffset)));
      const minf = box('minf', full('vmhd', 0, 1, zeros(8)), box('dinf', full('dref', 0, 0, u32s(1), full('url ', 0, 1))), stbl);
      const mdia = box('mdia', full('mdhd', 0, 0, u32s(0, 0, this.timescale, total), u16s(0x55c4, 0)),
        full('hdlr', 0, 0, u32s(0), enc.encode('vide'), zeros(12), enc.encode('Video\0')), minf);
      const tkhd = full('tkhd', 0, 3, u32s(0, 0, 1, 0, total), zeros(8), u16s(0, 0, 0, 0), MATRIX, u32s(this.w << 16, this.h << 16));
      const mvhd = full('mvhd', 0, 0, u32s(0, 0, this.timescale, total, 0x10000), u16s(0x100, 0), zeros(8), MATRIX, zeros(24), u32s(2));
      return box('moov', mvhd, box('trak', tkhd, mdia));
    };
    const ftyp = box('ftyp', enc.encode('isom'), u32s(0x200), enc.encode('isomiso2avc1mp41'));
    const moovLen = build(0).length, mdatHead = 8, off = ftyp.length + moovLen + mdatHead;
    const moov = build(off);
    const dataLen = sizes.reduce((a, b) => a + b, 0), out = new Uint8Array(ftyp.length + moov.length + mdatHead + dataLen), v = new DataView(out.buffer);
    out.set(ftyp, 0); out.set(moov, ftyp.length);
    let o = ftyp.length + moov.length;
    v.setUint32(o, mdatHead + dataLen); out.set(enc.encode('mdat'), o + 4); o += 8;
    for (const f of this.frames) { out.set(f, o); o += f.length; }
    return out;
  }
}
