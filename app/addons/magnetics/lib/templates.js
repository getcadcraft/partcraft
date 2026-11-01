/* SPDX-License-Identifier: Apache-2.0 */
/**
 * templates.js — ready-made magnet studies (the Magnetics add-on, 0.8 SG.7+; DOM-free). Each one is the cross-section of a long device, in mm,
 * as closed polygons with a role per polygon (air, iron, magnet, coil: the shapes of PartCraft's magnet-study.js), so a study can be set up and
 * solved without drawing sketches first. Five of them, three with a hand formula the result is compared against:
 *
 *   ccore   C-core electromagnet: an iron C with an air gap, a coil round its back leg (go and return)        hand: μ0·NI / (g + l/μr) in the gap
 *   frame   a permanent magnet in one leg of a closed iron frame                                             hand: Br·(lm/μrm) / (lm/μrm + L/μr)
 *   keeper  a holding magnet: U yoke with a magnet in its base, a keeper across the poles over a small gap   (no hand formula; force through a thin gap is rough)
 *   wire    one round conductor in air                                                                      hand: B = μ0·I / 2πr at r = 2a
 *   wires   two parallel conductors with opposite currents                                                  hand: F = μ0·I² / 2πd per metre
 *
 *   TEMPLATES                 { id → { params: [{ key, def, min, max }], pad? (the air box margin it wants), build(p) → { loops, specs, names }, hand?(p, specs) → { kind, … } } }
 *   build(id, params)         → { loops: [[[x, y] …] …] (mm), specs: [spec], names: [language key], hand: … | null, params (clamped) }
 *   circle(cx, cy, r, n)      → a polygon with n corners (counter-clockwise)
 * A spec is magnet-study.js's: { role, mur, curve, br, angle, murMag, current (total A through the profile), force }.
 * Every material number here is an example (iron μr 1000–2000, magnet Br 1.2 T, μr 1.05), not a data sheet.
 */
export const MU0 = 4e-7 * Math.PI;

const spec = (o) => ({ role: 'iron', mur: 2000, curve: '', br: 1.2, angle: 0, murMag: 1.05, current: 0, force: false, ...o });
const rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
export const circle = (cx, cy, r, n = 48) => Array.from({ length: n }, (_, i) => [cx + r * Math.cos(2 * Math.PI * i / n), cy + r * Math.sin(2 * Math.PI * i / n)]);

export const TEMPLATES = {
  ccore: {
    params: [{ key: 'w', def: 80, min: 30, max: 1000 }, { key: 'h', def: 60, min: 30, max: 1000 }, { key: 'tk', def: 15, min: 4, max: 300 }, { key: 'gap', def: 2, min: 0.5, max: 50 }],
    build(p) {
      const { w, h, tk } = p, g = Math.min(p.gap, h - 2 * tk - 2), y0 = h / 2 - g / 2, y1 = h / 2 + g / 2;
      const core = [[0, 0], [w, 0], [w, y0], [w - tk, y0], [w - tk, tk], [tk, tk], [tk, h - tk], [w - tk, h - tk], [w - tk, y1], [w, y1], [w, h], [0, h]];
      const cw = Math.max(2, Math.min(12, (w - 2 * tk) / 3)), cl = Math.max(2, Math.min(4, tk / 3));
      return {
        loops: [core, rect(tk + cl, tk + cl, tk + cl + cw, h - tk - cl), rect(-cl - cw, tk + cl, -cl, h - tk - cl)],
        specs: [spec({ role: 'iron', mur: 2000 }), spec({ role: 'coil', current: 1000 }), spec({ role: 'coil', current: -1000 })],
        names: ['tpl.name.core', 'tpl.name.coil_out', 'tpl.name.coil_in'],
      };
    },
    // the magnetic circuit: the gap field when the iron's mean path l carries the same flux (no fringing, no leakage)
    hand(p, specs) {
      const { w, h, tk } = p, g = Math.min(p.gap, h - 2 * tk - 2), l = 2 * (w - tk) + 2 * (h - tk) - g, NI = Math.abs(Number(specs[1]?.current) || 0), mur = Number(specs[0]?.mur) || 1;
      return { kind: 'meanB', box: [w - tk, h / 2 - g / 2, w, h / 2 + g / 2], value: MU0 * NI / ((g + l / mur) * 1e-3), what: 'hand.ccore', tol: 0.15 };
    },
  },
  frame: {
    params: [{ key: 'w', def: 100, min: 30, max: 1000 }, { key: 'h', def: 60, min: 30, max: 1000 }, { key: 'tk', def: 20, min: 4, max: 300 }],
    build(p) {
      const { w, h, tk } = p, x0 = -w / 2, y0 = -h / 2;
      return {
        loops: [rect(x0, y0, x0 + w, y0 + h), rect(x0 + tk, y0 + tk, x0 + w - tk, y0 + h - tk), rect(x0, y0 + tk, x0 + tk, y0 + h - tk)],
        specs: [spec({ role: 'iron', mur: 1000 }), spec({ role: 'air' }), spec({ role: 'magnet', br: 1.2, angle: 90, murMag: 1.05 })],
        names: ['tpl.name.frame', 'tpl.name.window', 'tpl.name.magnet'],
      };
    },
    // P. Campbell, Permanent Magnet Materials and their Application (1994): B = Br (lm/μrm) / (lm/μrm + L/μr), L the iron's mean path
    hand(p, specs) {
      const { w, h, tk } = p, lm = h - 2 * tk, L = 2 * (w - tk) + 2 * (h - tk) - lm, Br = Number(specs[2]?.br) || 0, murm = Number(specs[2]?.murMag) || 1, mur = Number(specs[0]?.mur) || 1;
      return { kind: 'meanB', region: 3, value: Br * (lm / murm) / (lm / murm + L / mur), what: 'hand.frame', tol: 0.02 };
    },
  },
  keeper: {
    params: [{ key: 'w', def: 100, min: 30, max: 1000 }, { key: 'h', def: 60, min: 30, max: 1000 }, { key: 'tk', def: 20, min: 4, max: 300 }, { key: 'gap', def: 2, min: 0.5, max: 50 }],
    build(p) {
      const { w, h, tk, gap } = p, x0 = -w / 2, y0 = -h / 2, mw = Math.min(tk, w - 2 * tk - 2);
      const yoke = [[x0, y0], [x0 + w, y0], [x0 + w, y0 + h], [x0 + w - tk, y0 + h], [x0 + w - tk, y0 + tk], [x0 + tk, y0 + tk], [x0 + tk, y0 + h], [x0, y0 + h]];
      return {
        loops: [yoke, rect(-mw / 2, y0, mw / 2, y0 + tk), rect(x0, y0 + h + gap, x0 + w, y0 + h + gap + tk)],
        specs: [spec({ role: 'iron', mur: 1000 }), spec({ role: 'magnet', br: 1.2, angle: 0, murMag: 1.05 }), spec({ role: 'iron', mur: 1000, force: true })],
        names: ['tpl.name.yoke', 'tpl.name.magnet', 'tpl.name.keeper'],
      };
    },
  },
  wire: {
    params: [{ key: 'r', def: 5, min: 0.5, max: 500 }],
    build(p) { return { loops: [circle(0, 0, p.r)], specs: [spec({ role: 'coil', current: 1000 })], names: ['tpl.name.wire'] }; },
    hand(p, specs) {
      const I = Math.abs(Number(specs[0]?.current) || 0), r = 2 * p.r;
      return { kind: 'ringB', at: [0, 0], r0: 1.8 * p.r, r1: 2.2 * p.r, r, value: MU0 * I / (2 * Math.PI * r * 1e-3), what: 'hand.wire', tol: 0.02 };
    },
  },
  wires: {
    pad: 4,   // the box edge is a wall: two wires need room round them (1× gives −38 %, 4× −2.7 %)
    params: [{ key: 'd', def: 40, min: 5, max: 1000 }, { key: 's', def: 4, min: 0.5, max: 100 }],
    build(p) {
      const s = Math.min(p.s, p.d / 2), h = p.d / 2;
      return {
        loops: [rect(-h - s / 2, -s / 2, -h + s / 2, s / 2), rect(h - s / 2, -s / 2, h + s / 2, s / 2)],
        specs: [spec({ role: 'coil', current: 1000, force: true }), spec({ role: 'coil', current: -1000, force: true })],
        names: ['tpl.name.wire_a', 'tpl.name.wire_b'],
      };
    },
    // two long conductors d apart: F = μ0 I1 I2 / 2πd per metre (the box edge is a wall: use a larger air box for a closer answer)
    hand(p, specs) {
      const I1 = Number(specs[0]?.current) || 0, I2 = Number(specs[1]?.current) || 0;
      return { kind: 'force', body: 1, value: MU0 * Math.abs(I1 * I2) / (2 * Math.PI * p.d * 1e-3), what: 'hand.wires', tol: 0.06, perMetre: true };
    },
  },
};
export const TEMPLATE_IDS = Object.keys(TEMPLATES);

export function cleanParams(id, params = {}) {
  const T = TEMPLATES[id];
  const out = {};
  for (const q of T.params) { const v = Number(params[q.key]); out[q.key] = Number.isFinite(v) ? Math.min(q.max, Math.max(q.min, v)) : q.def; }
  if (id === 'ccore' || id === 'frame' || id === 'keeper') { out.tk = Math.min(out.tk, (Math.min(out.w, out.h) - 6) / 2); }
  return out;
}

export function build(id, params) {
  const T = TEMPLATES[id] || TEMPLATES.ccore, key = TEMPLATES[id] ? id : 'ccore', p = cleanParams(key, params);
  const b = T.build(p);
  return { id: key, params: p, ...b, hand: T.hand ? (specs) => T.hand(p, specs) : null };
}
