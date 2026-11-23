/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-kin.js — tool directions and rotary-axis kinematics for PartCraft's CAM (DOM-free; a leaf module: cam.js, the post
 * engine and the workspace all import it, it imports only the language catalog).
 *
 *   orient {tilt, turn} (degrees)   a tool direction in the setup's work frame: tilt from the setup's tool axis (+Z), turn about it
 *                                   (0 = leaning towards +X, 90 = towards +Y). The tool points along
 *                                   t = [sin tilt · cos turn, sin tilt · sin turn, cos tilt]  (from the tip towards the spindle).
 *   orientMatrix(orient) → Q        Q = Rz(turn) · Ry(tilt): its columns are the tilted frame's X, Y, Z in the work frame, so
 *                                   work = Q · local and local = Qᵀ · work. Both frames share the work origin.
 *   orientFromVector(t) → orient    the tilt and turn of a unit vector
 *
 * Machines (KINEMATICS). The angles are worked out for a HEAD that carries the tool:
 *   a    one rotary about X          t = Rx(A)·ez = [0, −sin A, cos A]                  (t must lie in the YZ plane)
 *   b    one rotary about Y          t = Ry(B)·ez = [sin B, 0, cos B]                   (t must lie in the XZ plane)
 *   ac   A about X carried by C      t = Rz(C)·Rx(A)·ez = [sin A·sin C, −sin A·cos C, cos A]
 *   bc   B about Y carried by C      t = Rz(C)·Ry(B)·ez = [sin B·cos C, sin B·sin C, cos B]
 * A TABLE that carries the part turns the other way: the table has to bring t onto the fixed spindle axis, R·t = ez with
 * R = Hᵀ (H the head rotation above), which is the same pair of angles with the signs flipped. solveAngles() returns the
 * angles to WRITE for the machine as described (rotaryIn head | table). Real machines differ in which way they count as
 * positive; a machine that counts the other way needs the sign changed in its post.
 * The rotation about the tool's own axis is free: C keeps going the short way from where it was (it is not wrapped to 0–360),
 * and at tilt 0, where any C gives the same direction, C stays where it was.
 */
import { t } from './i18n.js';

const DEG = Math.PI / 180;
export const KINEMATICS = ['none', 'a', 'b', 'ac', 'bc'];
export const ROTARY_IN = ['table', 'head'];

export const mulMV = (M, v) => [M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2], M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2], M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2]];
/** Mᵀ · v */
export const mulTV = (M, v) => [M[0][0] * v[0] + M[1][0] * v[1] + M[2][0] * v[2], M[0][1] * v[0] + M[1][1] * v[1] + M[2][1] * v[2], M[0][2] * v[0] + M[1][2] * v[1] + M[2][2] * v[2]];
export const mulMM = (A, B) => [0, 1, 2].map((i) => [0, 1, 2].map((j) => A[i][0] * B[0][j] + A[i][1] * B[1][j] + A[i][2] * B[2][j]));
export const transpose = (M) => [0, 1, 2].map((i) => [0, 1, 2].map((j) => M[j][i]));
export const IDENTITY = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
export const rotX = (a) => { const c = Math.cos(a), s = Math.sin(a); return [[1, 0, 0], [0, c, -s], [0, s, c]]; };
export const rotY = (a) => { const c = Math.cos(a), s = Math.sin(a); return [[c, 0, s], [0, 1, 0], [-s, 0, c]]; };
export const rotZ = (a) => { const c = Math.cos(a), s = Math.sin(a); return [[c, -s, 0], [s, c, 0], [0, 0, 1]]; };

export const isTilted = (o) => !!o && Math.abs(o.tilt) > 1e-9;
export function orientMatrix(o) {
  if (!o) return IDENTITY;
  return mulMM(rotZ(o.turn * DEG), rotY(o.tilt * DEG));
}
export function toolVector(o) {
  if (!o) return [0, 0, 1];
  const st = Math.sin(o.tilt * DEG);
  return [st * Math.cos(o.turn * DEG), st * Math.sin(o.turn * DEG), Math.cos(o.tilt * DEG)];
}
/** A unit vector → {tilt, turn} in degrees (turn 0 when the vector is the axis itself). Rounded to 1e-6°. */
export function orientFromVector(v) {
  const L = Math.hypot(v[0], v[1], v[2]) || 1;
  const k = Math.max(-1, Math.min(1, v[2] / L));
  const r6 = (x) => Math.round(x * 1e6) / 1e6 + 0;
  const tilt = r6(Math.acos(k) / DEG);
  const turn = Math.hypot(v[0], v[1]) / L < 1e-9 ? 0 : r6(Math.atan2(v[1], v[0]) / DEG);
  return { tilt, turn };
}
export const orientKey = (o) => (isTilted(o) ? o.tilt.toFixed(6) + '/' + (((o.turn % 360) + 360) % 360).toFixed(6) : '');

export class KinError extends Error {
  constructor(code, data = {}) { super(code); this.code = code; this.data = data; }
}
const near = (c, prev) => (prev == null ? c : c + 360 * Math.round((prev - c) / 360));

/**
 * The rotary positions (degrees, as the machine is to be told) that put the tool along unit vector t (work frame).
 * machine {kin, rotaryIn, tiltMax}; prev = the angles before (for the short way round). → {a, b, c} (null = no such axis)
 * Throws KinError: no_rotary (a tilted tool on a 3-axis machine), plane (a one-rotary machine cannot reach t), tilt (past tiltMax).
 */
export function solveAngles(machine, t, prev = null) {
  const kin = machine.kin || 'none';
  const [i, j, k] = t;
  const tilted = Math.hypot(i, j) > 1e-9 || k < 0;
  if (kin === 'none') {
    if (tilted) throw new KinError('no_rotary');
    return { a: null, b: null, c: null };
  }
  const sgn = machine.rotaryIn === 'head' ? 1 : -1;
  const out = { a: null, b: null, c: null };
  const p = prev || {};
  const unsign = (v) => (v == null ? null : v * sgn);   // prev is stored as written; the head angle is sgn × that
  if (kin === 'a') {
    if (Math.abs(i) > 1e-6) throw new KinError('plane', { axis: 'A', plane: 'YZ' });
    out.a = near(Math.atan2(-j, k) / DEG, unsign(p.a));
  } else if (kin === 'b') {
    if (Math.abs(j) > 1e-6) throw new KinError('plane', { axis: 'B', plane: 'XZ' });
    out.b = near(Math.atan2(i, k) / DEG, unsign(p.b));
  } else {
    const tilt = Math.acos(Math.max(-1, Math.min(1, k))) / DEG;
    const max = machine.tiltMax ?? 110;
    if (tilt > max + 1e-6) throw new KinError('tilt', { tilt, max });
    const flat = Math.hypot(i, j) < 1e-9;
    let c;
    if (flat) c = unsign(p.c) ?? 0;
    else c = near((kin === 'ac' ? Math.atan2(i, -j) : Math.atan2(j, i)) / DEG, unsign(p.c));
    if (kin === 'ac') out.a = tilt; else out.b = tilt;
    out.c = c;
  }
  const r6 = (v) => (v == null ? null : Math.round(v * sgn * 1e6) / 1e6 + 0);
  return { a: r6(out.a), b: r6(out.b), c: r6(out.c) };
}

/** The head rotation H (H·ez = the tool direction) for angles as written on this machine. */
export function headMatrix(machine, ang) {
  const sgn = machine.rotaryIn === 'head' ? 1 : -1;
  const A = (ang.a || 0) * sgn * DEG, B = (ang.b || 0) * sgn * DEG, C = (ang.c || 0) * sgn * DEG;
  switch (machine.kin) {
    case 'a': return rotX(A);
    case 'b': return rotY(B);
    case 'ac': return mulMM(rotZ(C), rotX(A));
    case 'bc': return mulMM(rotZ(C), rotY(B));
    default: return IDENTITY;
  }
}
/** What the tool direction is for angles as written (the check of solveAngles). */
export const vectorOf = (machine, ang) => mulMV(headMatrix(machine, ang), [0, 0, 1]);

/**
 * Where a work-frame point lands in the coordinates the program is written in.
 *   tcp (the control keeps the tool tip on the path)  → the work coordinates themselves
 *   a table machine without it                        → the point as the turned table carries it: R·(p − pivot) + pivot, R = Hᵀ
 * → {M (3×3), d (3)}: out = M·p + d. A head machine without tool-tip control is refused (the pivot length is the machine's).
 */
export function outputTransform(machine, ang) {
  if (machine.tcp || (machine.kin || 'none') === 'none') return { M: IDENTITY, d: [0, 0, 0] };
  if (machine.rotaryIn === 'head') throw new KinError('head_needs_tcp');
  const R = transpose(headMatrix(machine, ang));
  const pv = machine.pivot || [0, 0, 0];
  const Rp = mulMV(R, pv);
  return { M: R, d: [pv[0] - Rp[0], pv[1] - Rp[1], pv[2] - Rp[2]] };
}
/** Is M a turn about Z only (so XY arcs stay XY arcs and holes stay along Z)? */
export const keepsZ = (M) => Math.abs(M[2][2] - 1) < 1e-9;

const f3 = (v) => String(+Number(v).toFixed(3));
/** A kinematics refusal (KinError) in words; any other error's own message. */
export function kinMessage(e) {
  if (!(e instanceof KinError)) return e && e.message ? e.message : String(e);
  const d = e.data || {};
  switch (e.code) {
    case 'no_rotary': return t('mfg.kin.no_rotary');
    case 'plane': return t('mfg.kin.plane', { axis: d.axis, plane: d.plane });
    case 'tilt': return t('mfg.kin.tilt', { tilt: f3(d.tilt), max: f3(d.max) });
    case 'head_needs_tcp': return t('mfg.kin.head_needs_tcp');
    default: return e.code;
  }
}
