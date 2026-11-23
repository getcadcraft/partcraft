/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-probe.js — PartCraft's probing operation (DOM-free; 0.11 CAM.6): touch the part with a probe and set (or only
 * measure) the work offset from where it was found.
 *
 *   What is picked decides the cycle, one per face, in the order picked:
 *     a flat face that looks up the tool axis        z       one touch going down; the face's height is the answer
 *     a flat face square to work X or to work Y      x | y   one touch going at the face; its position is the answer
 *     a full round face along the tool axis          centre  four touches (+X, −X, +Y, −Y), inside a hole or outside a boss;
 *                                                            the middle of each pair is the answer
 *   moves  the usual rapids and feeds (positioning; the feed moves are at 10 × the probing feed, 1000 mm/min at most), and
 *          {k: 'probe', p (how far the touch may go), f, axis 'x'|'y'|'z', n (1–4)}   a move that stops when the probe trips
 *          {k: 'probeset', kind z|x|y|centre, action set|measure, expect, cx, cy}     what to do with what was found
 *   p is the bottom of the stylus ball (where a ball end mill's tip would be), so in X and Y it is the ball's centre.
 *   `expect` is where p should be at the touch if the part is where the model says: the face's height (z), or the face's
 *   position plus the ball's radius towards the probe (x, y); cx, cy the centre of the round face.
 *
 * The arithmetic belongs to the control, so it is written by the post (events probe-move and probe-set, cam-postdef.js):
 * new offset = old offset + (found − expected). A control with no variables (GRBL) can set an offset after one touch but
 * cannot work out a centre.
 *
 * Limits (the help says the same): the positioning moves are ordinary moves, not protected ones — the probe is not watched
 * until the probing move itself; one work offset (G54); faces square to the axes only; no angle, no corner, no tool
 * setter, no measuring of a size against a tolerance; the stock simulation does not run it; never run on a machine.
 */
import { t } from './i18n.js';

const fmt = (v) => String(+Number(v).toFixed(3));

export function opProbe(op, ctx, P) {
  const { model, tool, sp } = ctx;
  const p = op.params;
  if (tool.kind !== 'probe') throw new Error(t('mfg.probe.tool'));
  if (!op.geo.faces.length) throw new Error(t('mfg.probe.pick'));
  const rb = tool.d / 2, st = model.stock.max[2];
  const clearance = st + p.clearance, retract = Math.min(clearance, st + p.retract);
  const pos = sp.feed > 0 ? Math.min(1000, sp.feed * 10) : 500;
  const I = model.mesh.indices, V = model.mesh.positions, tf = model.mesh.triFace;
  const zRange = (fi) => {
    let lo = Infinity, hi = -Infinity;
    for (let k = 0; k < tf.length; k++) if (tf[k] === fi) for (let e = 0; e < 3; e++) { const z = V[I[k * 3 + e] * 3 + 2]; if (z < lo) lo = z; if (z > hi) hi = z; }
    return [lo, hi];
  };
  /** Is the ball free to stand with its bottom at z over (x, y)? */
  const free = (x, y, z) => [[0, 0], [rb, 0], [-rb, 0], [0, rb], [0, -rb]].every(([dx, dy]) => !(model.heightAt(x + dx, y + dy) > z + 1e-6));
  const probe = (target, axis, n) => { P.moves.push({ k: 'probe', p: target, f: sp.feed, axis, n }); P.pos = target; };
  const set = (o) => P.moves.push({ k: 'probeset', action: p.action, expect: null, cx: null, cy: null, ...o });
  const over = (x, y) => { if (!P.pos) P.rapid(x, y, clearance); else { P.rapidZ(retract); P.rapid(x, y, retract); } };
  const cycles = [];
  for (const ref of op.geo.faces) {
    const i = model.faceIndex(ref);
    if (i < 0) throw new Error(t('mfg.err.face_gone', { name: ref.name }));
    const f = model.faces[i];
    if (f.type === 'plane' && f.n && f.n[2] > 1 - 1e-9) {
      const [x, y] = f.at, z = f.o[2];
      if (model.heightAt(x, y) > z + model.tol + 1e-3) throw new Error(t('mfg.probe.covered'));
      over(x, y);
      P.feed(x, y, z + p.approach, pos);
      probe([x, y, z - p.over], 'z', 1);
      set({ kind: 'z', expect: z });
      P.feed(x, y, z + p.approach, pos);
      cycles.push('z');
    } else if (f.type === 'plane' && f.n && Math.abs(f.n[2]) < 1e-9 && (Math.abs(Math.abs(f.n[0]) - 1) < 1e-9 || Math.abs(Math.abs(f.n[1]) - 1) < 1e-9)) {
      const ax = Math.abs(f.n[0]) > 0.5 ? 0 : 1, sgn = Math.sign(f.n[ax]);
      const [lo, hi] = zRange(i);
      const z = Math.max(lo, hi - p.depth - rb);                     // the ball's bottom; its middle is rb higher, on the face
      const at = [f.at[0], f.at[1]];
      const start = at.slice(); start[ax] += sgn * (rb + p.approach);
      const target = at.slice(); target[ax] += sgn * (rb - p.over);
      if (!free(start[0], start[1], z)) throw new Error(t('mfg.probe.blocked'));
      over(start[0], start[1]);
      P.feed(start[0], start[1], z, pos);
      probe([target[0], target[1], z], ax ? 'y' : 'x', 1);
      set({ kind: ax ? 'y' : 'x', expect: at[ax] + sgn * rb });
      P.feed(start[0], start[1], z, pos);
      cycles.push(ax ? 'y' : 'x');
    } else if (f.type === 'cylinder') {
      const h = model.cylinderInfo(i);
      if (!h || !h.full) throw new Error(t('mfg.probe.round'));
      const [cx, cy] = h.c;
      const z = Math.max(h.bottom, h.top - p.depth - rb);
      const dirs = [[1, 0, 'x'], [-1, 0, 'x'], [0, 1, 'y'], [0, -1, 'y']];
      if (h.hole) {
        if (h.r - rb < 0.5) throw new Error(t('mfg.probe.small', { d: fmt(2 * h.r), ball: fmt(tool.d) }));
        over(cx, cy);
        P.feed(cx, cy, z, pos);
        dirs.forEach(([dx, dy, axis], n) => {
          const near = h.r - rb - p.approach;
          if (near > 0.01) P.feed(cx + dx * near, cy + dy * near, z, pos);
          probe([cx + dx * (h.r - rb + p.over), cy + dy * (h.r - rb + p.over), z], axis, n + 1);
          P.feed(cx, cy, z, pos);
        });
      } else {
        dirs.forEach(([dx, dy, axis], n) => {
          const out = h.r + rb + p.approach, sx = cx + dx * out, sy = cy + dy * out;
          if (!free(sx, sy, z)) throw new Error(t('mfg.probe.blocked'));
          over(sx, sy);
          P.feed(sx, sy, z, pos);
          probe([cx + dx * (h.r + rb - p.over), cy + dy * (h.r + rb - p.over), z], axis, n + 1);
          P.feed(sx, sy, z, pos);
        });
      }
      set({ kind: 'centre', cx, cy });
      cycles.push('centre');
    } else throw new Error(t('mfg.probe.kinds'));
  }
  P.rapidZ(clearance);
  ctx.pathKind = 'probe'; ctx.noSim = true;
  ctx.info.cycles = cycles.length; ctx.info.kinds = cycles;
}

export const PROBE_OPS = { probe: opProbe };
