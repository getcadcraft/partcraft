/* SPDX-License-Identifier: Apache-2.0 */
/**
 * sketch-arcs.js — PartCraft's sketch Arc tool, the DOM-free half (0.9 FX.137). The geometry of the eleven ways to draw an arc is
 * arcs/arcs.js (lib/arcs, one copy for every drawing app, synced by tools/arcs/sync.mjs); this file turns a solved arc into
 * sketch entities the way the Arc tool always has — an arc is a centre point, a start point and an end point (CCW), so
 * relations, dimensions, trim and extend keep working — and finds what Continue starts from. sketchview.js owns the clicks.
 */
import * as S from './sketch.js';
import * as Arcs from './arcs/arcs.js';

/** The menu / ribbon order. CSE is the tool's own way (centre, start, a click for the end that follows the pointer round). */
export const METHOD_ORDER = ['3P', 'SCE', 'SCA', 'SCL', 'SEA', 'SED', 'SER', 'CSE', 'CSA', 'CSL', 'CON'];
/** Command-name suffix → method (tool-arc-3p …). */
export const CMD_METHOD = Object.fromEntries(METHOD_ORDER.map((m) => ['tool-arc-' + m.toLowerCase(), m]));

/** Roles that are a click on the sketch; the others are a number (typed, or taken from the pointer). */
export const POINT_ROLES = new Set(['start', 'center', 'second', 'end']);

/** Typed numbers: angles and directions are degrees in the box, radians in arcs.js. */
export const roleToRadians = (role, v) => (role === 'angle' || role === 'direction' ? v * Math.PI / 180 : v);
export const roleToDisplay = (role, v) => (role === 'angle' || role === 'direction' ? v * 180 / Math.PI : v);

/**
 * Where Continue starts: the end of the last line or arc drawn (not construction) and the way it was heading.
 * → { x, y, dir, ref (the point it ends in), entity (its id) } or null.
 */
export function continueFrom(sk) {
  for (let k = sk.entities.length - 1; k >= 0; k--) {
    const e = sk.entities[k];
    if (e.construction) continue;
    if (e.type === 'line') {
      const a = S.pointXY(sk, e.p1), b = S.pointXY(sk, e.p2);
      if (!a || !b || Math.hypot(b[0] - a[0], b[1] - a[1]) < 1e-12) continue;
      return { x: b[0], y: b[1], dir: Math.atan2(b[1] - a[1], b[0] - a[0]), ref: e.p2, entity: e.id };
    }
    if (e.type === 'arc') {
      const { c, r, a0, sweep } = S.arcAngles(sk, e);
      const t = Arcs.endTangent({ cx: c[0], cy: c[1], r, a0, a1: a0 + sweep });
      const end = S.pointXY(sk, e.e);
      return { x: end[0], y: end[1], dir: t.dir, ref: e.e, entity: e.id };
    }
  }
  return null;
}

/**
 * Add a solved arc ({ cx, cy, r, a0, a1 } from arcs.js) to the sketch as the usual centre + start + end entity.
 * `picks` are the snaps the person clicked ({ xy, ref, on }); any of the arc's three points that sits on one joins it (a coincident
 * relation to the existing point, or to the curve it was snapped onto) — the rest are new points. → { id, c, s, e, joined }.
 * opts: auto (join at all; the sketch's autoRelations setting), construction, tangentTo (entity id, Continue), radius (a typed radius).
 */
export function addSolvedArc(sk, arc, picks, opts = {}) {
  const auto = opts.auto !== false, tol = 1e-7 * (1 + arc.r);
  const pts = { c: [arc.cx, arc.cy], s: [arc.cx + arc.r * Math.cos(arc.a0), arc.cy + arc.r * Math.sin(arc.a0)], e: [arc.cx + arc.r * Math.cos(arc.a1), arc.cy + arc.r * Math.sin(arc.a1)] };
  const at = {}, args = {};
  for (const k of ['c', 's', 'e']) {
    const p = picks.find((q) => q && Math.hypot(q.xy[0] - pts[k][0], q.xy[1] - pts[k][1]) < tol);
    at[k] = p || null;
    args[k] = auto && p && p.ref ? p.ref : pts[k];
  }
  const m = S.addArc(sk, args.c, args.s, args.e, { construction: !!opts.construction });
  let joined = 0;
  for (const k of ['c', 's', 'e']) {
    const p = at[k];
    if (auto && p && !p.ref && p.on) { try { S.addConstraint(sk, 'coincident', [m[k], p.on]); joined++; } catch { /* already implied */ } }
  }
  if (opts.tangentTo) { try { S.addConstraint(sk, 'tangent', [opts.tangentTo, m.id]); } catch { /* not every join can be tangent */ } }
  if (opts.radius !== undefined) { try { S.addConstraint(sk, 'radius', [m.id], Math.abs(opts.radius)); } catch { /* already fixed */ } }
  return { id: m.id, c: m.c, s: m.s, e: m.e, joined };
}
