/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-fmt.js — how a number and a comment are written into G-code (DOM-free), shared by cam-post.js (the
 * three built-in posts as code) and cam-postdef.js (posts as text you can edit).
 *
 *   q(v)            round to 1 µm (and never −0)
 *   num(v, point)   3 decimals, trailing zeros dropped; `point` keeps a decimal point ("10.") for controls that want it
 *   safeComment(s)  ASCII only, no parentheses, one space between words, at most 120 characters
 */
export const DP = 3;
export const q = (v) => { const r = Math.round(v * 1000) / 1000; return Object.is(r, -0) ? 0 : r; };
export function num(v, fanuc = false) {
  let s = q(v).toFixed(DP).replace(/0+$/, '').replace(/\.$/, fanuc ? '.' : '');
  if (s === '-0' || s === '-0.') s = fanuc ? '0.' : '0';
  return s;
}
/** Comment text: ASCII only (controls differ on anything else), no parentheses. */
export const safeComment = (s) => String(s).replace(/⌀/g, 'D').replace(/°/g, ' deg').replace(/[‐-―]/g, '-').replace(/[^\x20-\x7e]/g, '').replace(/[()]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120);
