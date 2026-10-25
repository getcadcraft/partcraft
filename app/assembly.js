/* SPDX-License-Identifier: Apache-2.0 */
/**
 * assembly.js — parts put together with joints (DOM-free). Saved as `<name>.partcraft-asm.json`
 * (format 'partcraft-assembly', version 2) with every part embedded, so one file carries it all.
 * Version 2 (2026-10-11) added part properties, joint limits and exploded views; version 1 files open unchanged.
 * Version 3 (0.4 P19) added the cylindrical, planar, ball and pin-slot joints and limits on each of a joint's values; a file
 * that uses none of them is still written as version 2.
 *
 *   asm = { format, version, name, seq, parts: { [pid]: { name, part, number?, description?, material? } } (bom.js),
 *           instances: [{ id, part: pid, name, place: [16 numbers] }],   the first instance is grounded
 *           joints: [{ id, name, type (JOINT_TYPES), a: End, b: End, angle, offset, dx?, dy?, tiltX?, tiltY?, slide?, slotDir?,
 *                      limits?: { min, max } (revolute / slider: on their one value) | { <value>: { min, max }, … } (any
 *                      type: per value of JOINT_DOF[type]; degrees for angles, mm for lengths; each value is held inside) }],
 *           views: [exploded views] (explode.js) }
 *   End  = { inst, plane: PlaneRef (part.js readPlane, named faces too), axis?: { feature, index? } }   a mate on a flat face
 *
 * A mate frame sits on a flat face of a part: z = the face's outward normal; origin = where the
 * chosen axis (a revolve's axis, or one hole's axis) crosses the face, else the face frame's
 * origin (the part origin projected onto the face). A joint puts B's frame on A's, facing it
 * (B's z = −A's z), then moves B in A's frame by the joint's values (jointMotion):
 *   rigid      held at `angle` about z and `offset` along z            (no free values)
 *   revolute   turns about z by `angle` (offset held)                  slider       slides along z by `offset` (angle held)
 *   cylindrical turns by `angle` and slides by `offset`                 planar       slides by `dx`, `dy` in the face, turns by `angle`
 *   ball       spins by `angle` about z, then tilts by `tiltY` about y and `tiltX` about x (the frame's origin is the ball's centre)
 *   pinslot    slides by `slide` along the slot (the direction `slotDir`° from A's x, in the face) and turns by `angle` Placement walks from the grounded instance through the joints
 * (a tree); an instance no joint reaches stays at its `place`. Joints on a loop are solved first so every loop closes (0.7
 * D7.40, solveLoops: their free values move as little as possible; a loop that cannot close is a conflict, reported with how far
 * off it is).
 *
 *   placeAll(asm, builds, { solve, hold, start })  builds: Map(pid → kernel regenerate() result) → { world: Map(inst → mat4),
 *              problems: [...], loops (solveLoops' answer: status, mobility, joints' states, values) }
 *   applySolved(asm, loops)  writes the solved values into the joints;  loopJoints(asm) → { onLoop, group }
 *   interference(asm, builds, world, M, { touch }) → [{ a, b, volume, kind }]   per pair (manifold-3d), kind (0.5 WL.33):
 *              'overlap' (a real clash) · 'thread' (all of it inside both parts' cosmetic thread zones: a bolt in a tapped hole)
 *              · 'thread-depth' (inside one part's thread zone only: one thread runs deeper than the other) · 'touch'
 *              (no volume, faces in contact within touchTol; only with touch: true)
 *   filterClashes(asm, list) → { shown, hidden }   asm.clashFilter = { hide: [kinds], pairs: [[inst a, inst b] sorted] }
 *              (written only when it holds something; such a file is version 4)
 *   asm.stackups = [stack-up] (stackup.js, 0.6 LC.18; written only when there is one; such a file is version 5)
 *   jointTree(asm, builds, world) → [{ joint, parent, child, normal }]   the joints placement walked, parents first
 *   freeIds(asm) → Set of instances no joint path ties to the grounded part (only these move by hand)
 *   movePlace(place, { move?: [dx,dy,dz], rotate?: { axis: [x,y,z], angle (deg), about: [x,y,z] } }) → new place
 *   moveInstance(asm, id, place)   refuses the grounded part and parts set by joints
 */
import * as V from './vec.js';
import { readPart, readPlane, toJSON as partJSON } from './part.js';
import { planeFrame } from './kernel.js';
import { readPartProps } from './bom.js';
import { readViews } from './explode.js';
import { cleanStock } from './nest/nest-stock.js';
import { cleanJob } from './laser/laser-model.js';
import { readStackups } from './stackup.js';
import { t } from './i18n.js';

export const FORMAT = 'partcraft-assembly';
export const VERSION = 5;   // 5: tolerance stack-ups (0.6 LC.18); 4: interference filters (0.5 WL.33); 3: 0.4's joints
export const JOINT_TYPES = { rigid: 'Rigid', revolute: 'Revolute', slider: 'Slider', cylindrical: 'Cylindrical', planar: 'Planar', ball: 'Ball', pinslot: 'PinSlot' };
/** The values a joint lets move (its degrees of freedom), first = the one a motion check sweeps by default. */
export const JOINT_DOF = { rigid: [], revolute: ['angle'], slider: ['offset'], cylindrical: ['angle', 'offset'], planar: ['dx', 'dy', 'angle'], ball: ['angle', 'tiltX', 'tiltY'], pinslot: ['slide', 'angle'] };
/** Values set once that do not move: rigid's angle and offset, revolute's offset, slider's angle, the slot's direction. */
export const JOINT_SETUP = { rigid: ['angle', 'offset'], revolute: ['offset'], slider: ['angle'], cylindrical: [], planar: [], ball: [], pinslot: ['slotDir'] };
/** 'deg' or 'mm' per value. */
export const VALUE_UNIT = { angle: 'deg', offset: 'mm', dx: 'mm', dy: 'mm', tiltX: 'deg', tiltY: 'deg', slide: 'mm', slotDir: 'deg' };
const NEW_TYPES = new Set(['cylindrical', 'planar', 'ball', 'pinslot']);
const EXTRA_VALUES = ['dx', 'dy', 'tiltX', 'tiltY', 'slide', 'slotDir'];

export function newAssembly(name = 'Assembly1') {
  return { format: FORMAT, version: VERSION, name, seq: 1, parts: {}, instances: [], joints: [], views: [] };
}

const IDENT = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

/** Add a part (a copy of its JSON) and one instance of it; returns the instance. */
export function insertPart(asm, part, { place = null, pid = null } = {}) {
  if (!pid) {
    pid = 'p' + asm.seq++;
    asm.parts[pid] = { name: part.name, part: JSON.parse(partJSON(part)) };
  }
  const n = asm.instances.filter((i) => i.part === pid).length + 1;
  const inst = { id: 'i' + asm.seq++, part: pid, name: asm.parts[pid].name + '<' + n + '>', place: place ? [...place] : [...IDENT] };
  asm.instances.push(inst);
  return inst;
}

export function addJoint(asm, type, a, b, { angle = 0, offset = 0, ...more } = {}) {
  if (!JOINT_TYPES[type]) throw new Error(t('model.assembly.unknown_joint'));
  if (a.inst === b.inst) throw new Error(t('model.assembly.joint_two_parts'));
  const n = asm.joints.filter((j) => j.type === type).length + 1;
  const j = { id: 'j' + asm.seq++, name: JOINT_TYPES[type] + n, type, a: { ...a }, b: { ...b }, angle, offset };
  for (const k of EXTRA_VALUES) if (typeof more[k] === 'number' && Number.isFinite(more[k])) j[k] = more[k];
  asm.joints.push(j);
  return j;
}

export function removeInstance(asm, id) {
  asm.instances = asm.instances.filter((i) => i.id !== id);
  asm.joints = asm.joints.filter((j) => j.a.inst !== id && j.b.inst !== id);
  for (const v of asm.views || []) v.steps = v.steps.map((s) => ({ ...s, insts: s.insts.filter((i) => i !== id) })).filter((s) => s.insts.length);
  if (asm.clashFilter) { asm.clashFilter.pairs = asm.clashFilter.pairs.filter((pr) => !pr.includes(id)); tidyFilter(asm); }
  for (const s of asm.stackups || []) for (const l of s.links) if (l.inst === id) l.inst = null;   // its links keep their numbers
  const used = new Set(asm.instances.map((i) => i.part));
  for (const pid of Object.keys(asm.parts)) if (!used.has(pid)) delete asm.parts[pid];
}

// ---------------------------------------------------------------- frames and placement

/** Inverse of a rigid (rotation + translation) column-major matrix. */
export function rigidInverse(m) {
  const r = [m[0], m[4], m[8], 0, m[1], m[5], m[9], 0, m[2], m[6], m[10], 0];
  const t = [m[12], m[13], m[14]];
  return [r[0], r[1], r[2], 0, r[4], r[5], r[6], 0, r[8], r[9], r[10], 0,
    -(r[0] * t[0] + r[4] * t[1] + r[8] * t[2]), -(r[1] * t[0] + r[5] * t[1] + r[9] * t[2]), -(r[2] * t[0] + r[6] * t[1] + r[10] * t[2]), 1];
}

/** Axes a mate can turn about in a built part: revolve axes and hole axes. → [{ key, feature, index, o, d, label }] */
export function axesOf(build, part) {
  const out = [];
  if (!build) return out;   // the part is still building (an assembly just opened)
  for (const [fid, a] of build.axes || []) out.push({ key: fid, feature: fid, o: a.o, d: a.d, label: t('model.assembly.axis_of', { name: part.features.find((f) => f.id === fid)?.name || fid }) });
  for (const [fid, list] of build.holeAxes || []) list.forEach((a, i) => out.push({ key: fid + ':' + i, feature: fid, index: i, o: a.o, d: a.d, label: t('model.assembly.hole_axis', { name: part.features.find((f) => f.id === fid)?.name || fid, n: i + 1 }) }));
  return out;
}

/** The mate frame (part coordinates) of a joint end, or throws Error. */
export function mateFrame(end, build, part) {
  const f = planeFrame(end.plane, build, part);
  if (!f) throw new Error(t('model.assembly.face_gone', { part: part.name }));
  let o = f.o;
  if (end.axis) {
    const ax = axesOf(build, part).find((a) => a.feature === end.axis.feature && (a.index ?? null) === (end.axis.index ?? null));
    if (!ax) throw new Error(t('model.assembly.axis_gone', { part: part.name }));
    const den = V.dot(ax.d, f.n);
    if (Math.abs(den) < 1e-9) throw new Error(t('model.assembly.axis_along_face'));
    o = V.add(ax.o, V.mul(ax.d, V.dot(V.sub(f.o, ax.o), f.n) / den));
  }
  return V.basisMatrix(f.x, f.y, f.n, o);
}

const FLIP = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1];   // 180° about X: B faces A
/** The limits on one of the joint's values ({min, max}) or null; the one-value shape { min, max } applies to the first. */
export function limitOf(j, key = JOINT_DOF[j.type]?.[0]) {
  const L = j.limits;
  if (!L || !JOINT_DOF[j.type]?.includes(key)) return null;
  if (typeof L.min === 'number') return key === JOINT_DOF[j.type][0] ? L : null;
  return L[key] && typeof L[key].min === 'number' ? L[key] : null;
}
/** A joint's value, held inside its limits when it is one the joint lets move (default: the first). */
export function jointValue(j, key = JOINT_DOF[j.type]?.[0] || 'angle') {
  const v = j[key] || 0;
  const L = limitOf(j, key);
  return L ? Math.max(L.min, Math.min(L.max, v)) : v;
}
/** The motion of B's frame in A's (after the flip), from the joint's values. */
export function jointMotion(j) {
  const val = (k) => (JOINT_DOF[j.type]?.includes(k) ? jointValue(j, k) : (j[k] || 0));
  const Rz = (deg) => V.rotationAbout([0, 0, 0], [0, 0, 1], deg);
  switch (j.type) {
    case 'planar': return V.matMul(V.translation([val('dx'), val('dy'), 0]), Rz(val('angle')));
    case 'ball': return V.matMul(V.rotationAbout([0, 0, 0], [1, 0, 0], val('tiltX')), V.matMul(V.rotationAbout([0, 0, 0], [0, 1, 0], val('tiltY')), Rz(val('angle'))));
    case 'pinslot': { const d = (j.slotDir || 0) * Math.PI / 180, s = val('slide'); return V.matMul(V.translation([s * Math.cos(d), s * Math.sin(d), 0]), Rz(val('angle'))); }
    default: return V.matMul(V.translation([0, 0, val('offset')]), Rz(val('angle')));   // rigid, revolute, slider, cylindrical
  }
}

/**
 * World transforms for every instance. → { world: Map, problems: [{ joint?, inst?, message }], loops }
 * Placement walks from the grounded instance through the joints (a tree). With `solve` (the default, 0.7 D7.40) the free values
 * of every joint on a loop are first solved so each loop closes (solveLoops); `hold` (Set of '<joint id>.<value>') keeps values
 * the person is setting, `start` (Map joint id → { value: number }) is where the solve starts (a drag's last answer). The joints
 * themselves are not changed: applySolved(asm, loops) writes the answer into them. `solve: false` = the old walk (a joint that
 * closes a loop only checked).
 */
export function placeAll(asm, builds, { solve = true, hold = null, start = null } = {}) {
  const world = new Map();
  const problems = [];
  if (!asm.instances.length) return { world, problems, loops: null };
  const frames = new Map();   // joint id → [FA, FB] (part coordinates); a joint whose faces are gone is left out
  for (const j of asm.joints) {
    try { const FA = endFrame(asm, builds, j.a), FB = endFrame(asm, builds, j.b); frames.set(j.id, [FA, FB, V.matMul(FLIP, rigidInverse(FB))]); }
    catch (e) { problems.push({ joint: j.id, message: t('model.assembly.joint_problem', { name: j.name, message: e.message }) }); }
  }
  const live = asm.joints.filter((j) => frames.has(j.id));
  const loops = solve ? solveLoops(asm, builds, live, frames, { hold, start }) : null;
  const w = walk(asm, live, frames, loops?.values || null, true);
  for (const [k, v] of w.world) world.set(k, v);
  for (const c of w.closing) {
    if (c.off > 1e-6) problems.push({ joint: c.joint.id, message: t('model.assembly.loop_off', { name: c.joint.name, off: c.off.toFixed(3) }) });
  }
  const ground = asm.instances[0];
  for (const i of asm.instances) {
    if (!world.has(i.id)) { world.set(i.id, i.place); if (i !== ground) problems.push({ inst: i.id, message: t('model.assembly.not_joined', { name: i.name }), free: true }); }
  }
  return { world, problems, loops };
}

function endFrame(asm, builds, end) {
  const inst = asm.instances.find((i) => i.id === end.inst);
  const p = inst && asm.parts[inst.part];
  if (!p) throw new Error(t('model.assembly.joint_part_gone'));
  return mateFrame(end, builds.get(inst.part), p.part);
}

/** B's world transform from A's through a joint (values from `over` when given); K = FLIP · FB⁻¹ (the same every time). */
const chainOf = (j, FA, K, over) => V.matMul(FA, V.matMul(jointMotion(over ? { ...j, ...over } : j), K));

/** The tree walk: every joint in order places the end not yet placed from the one that is; a joint whose ends are both placed
 *  closes a loop (measured when `measure`). → { world, closing: [{ joint, want, have, off? }] } */
function walk(asm, joints, frames, vals, measure = false) {
  const world = new Map(), up = new Map();   // up: instance → { joint, parent } (the tree the walk made)
  const ground = asm.instances[0];
  world.set(ground.id, ground.place);
  const done = new Set(), closing = [];
  let grew = true;
  while (grew) {
    grew = false;
    for (const j of joints) {
      if (done.has(j.id)) continue;
      const ha = world.has(j.a.inst), hb = world.has(j.b.inst);
      if (!ha && !hb) continue;
      done.add(j.id);
      const [FA, , K] = frames.get(j.id);
      const chain = chainOf(j, FA, K, vals?.get(j.id));
      if (ha && !hb) { world.set(j.b.inst, V.matMul(world.get(j.a.inst), chain)); up.set(j.b.inst, { joint: j.id, parent: j.a.inst }); grew = true; }
      else if (hb && !ha) { world.set(j.a.inst, V.matMul(world.get(j.b.inst), rigidInverse(chain))); up.set(j.a.inst, { joint: j.id, parent: j.b.inst }); grew = true; }
      else {
        const want = V.matMul(world.get(j.a.inst), chain), have = world.get(j.b.inst);
        let off;
        if (measure) { off = 0; for (let k = 0; k < 15; k++) if (k % 4 !== 3) off = Math.max(off, Math.abs(want[k] - have[k]) * (k >= 12 ? 1 : 100)); }
        closing.push({ joint: j, want, have, off });
      }
    }
  }
  return { world, closing, up };
}

/** The joints of the loop a closing joint closes: the tree path between its two parts, and itself. */
function loopPath(c, up) {
  const anc = new Map();
  for (let i = c.joint.a.inst, guard = 0; i !== undefined && guard < 100000; guard++) { anc.set(i, true); i = up.get(i)?.parent; }
  const path = new Set([c.joint.id]);
  let meet = c.joint.b.inst;
  for (let guard = 0; meet !== undefined && !anc.has(meet) && guard < 100000; guard++) { path.add(up.get(meet).joint); meet = up.get(meet).parent; }
  for (let i = c.joint.a.inst, guard = 0; i !== undefined && i !== meet && guard < 100000; guard++) { path.add(up.get(i).joint); i = up.get(i).parent; }
  return path;
}

// ---------------------------------------------------------------- closed loops (0.7 D7.40)

/** Joints that lie on a loop of the instance graph (the joints that are not bridges), and the loop groups (2-edge-connected
 *  pieces) each belongs to. → { onLoop: Set(joint id), group: Map(joint id → group number) } */
export function loopJoints(asm, joints = asm.joints) {
  const adj = new Map();
  for (const i of asm.instances) adj.set(i.id, []);
  for (const j of joints) { if (!adj.has(j.a.inst) || !adj.has(j.b.inst)) continue; adj.get(j.a.inst).push([j.b.inst, j.id]); adj.get(j.b.inst).push([j.a.inst, j.id]); }
  const disc = new Map(), low = new Map(), bridges = new Set();
  let time = 0;
  for (const root of adj.keys()) {
    if (disc.has(root)) continue;
    // iterative DFS (the parent's edge by id, so two joints between the same two parts are a loop)
    const stack = [[root, null, 0]];
    disc.set(root, time); low.set(root, time); time++;
    while (stack.length) {
      const top = stack[stack.length - 1];
      const [u, pe] = top;
      const nb = adj.get(u);
      if (top[2] < nb.length) {
        const [v, e] = nb[top[2]++];
        if (e === pe) continue;
        if (!disc.has(v)) { disc.set(v, time); low.set(v, time); time++; stack.push([v, e, 0]); }
        else low.set(u, Math.min(low.get(u), disc.get(v)));
      } else {
        stack.pop();
        if (stack.length) {
          const p = stack[stack.length - 1][0];
          low.set(p, Math.min(low.get(p), low.get(u)));
          if (low.get(u) > disc.get(p)) bridges.add(pe);
        }
      }
    }
  }
  const onLoop = new Set(joints.filter((j) => adj.has(j.a.inst) && adj.has(j.b.inst) && j.a.inst !== j.b.inst && !bridges.has(j.id)).map((j) => j.id));
  // groups: instances joined by loop joints
  const parent = new Map([...adj.keys()].map((k) => [k, k]));
  const find = (x) => { while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); } return x; };
  for (const j of joints) if (onLoop.has(j.id)) parent.set(find(j.a.inst), find(j.b.inst));
  const roots = new Map(), group = new Map();
  for (const j of joints) if (onLoop.has(j.id)) { const r = find(j.a.inst); if (!roots.has(r)) roots.set(r, roots.size); group.set(j.id, roots.get(r)); }
  return { onLoop, group };
}

/** The rotation of a 3 × 3 (in a column-major 4 × 4) as a rotation vector (axis × angle in radians). */
function rotVec(m) {
  const c = Math.max(-1, Math.min(1, (m[0] + m[5] + m[10] - 1) / 2)), th = Math.acos(c);
  const w = [m[6] - m[9], m[8] - m[2], m[1] - m[4]];   // 2 sin θ · axis
  if (th < 1e-6) return w.map((x) => x / 2);
  if (Math.PI - th < 1e-6) {   // half a turn: the axis from the symmetric part
    const d = [m[0], m[5], m[10]].map((x) => Math.sqrt(Math.max(0, (x + 1) / 2)));
    const k = d.indexOf(Math.max(...d));
    const ax = [0, 0, 0]; ax[k] = d[k];
    const off = [[0, m[4], m[8]], [m[1], 0, m[9]], [m[2], m[6], 0]];
    for (let q = 0; q < 3; q++) if (q !== k) ax[q] = off[k][q] / (2 * d[k]);
    return ax.map((x) => x * th);
  }
  return w.map((x) => (x * th) / (2 * Math.sin(th)));
}

export const LOOP_MAX_ITER = 60;
export const LOOP_FIRST_TRY = 12;

/**
 * Close every loop: the free values (JOINT_DOF) of the joints on loops are the unknowns (less those in `hold`), each loop-closing
 * joint gives six equations (where its B end is against where the loop puts it: three of position in mm, three of rotation as a
 * rotation vector × a length the size of the assembly, so turning and moving weigh alike). Damped Newton with the least-norm
 * step, as the sketch solver (solver.js): the assembly moves as little as possible from where it was. Values stay inside their
 * limits. Analysis at the answer (Gram–Schmidt over the equations' rows): rank, mobility (unknowns − rank: how many more values
 * could be held), each unknown determined or free; a loop that does not close is a conflict. Conditions met twice over (a flat
 * linkage's out-of-plane equations) are counted, not flagged: they are normal for parallel hinges.
 * → { status 'none'|'under'|'full'|'over', closed, mobility, redundant, conflicts: [joint id], joints: Map(id → 'under'|'full'|
 *     'over'), values: Map(id → { value: number }), unknowns, equations, iterations, ms }
 */
export function solveLoops(asm, builds, joints, frames, { hold = null, start = null } = {}) {
  const t0 = typeof performance !== 'undefined' ? performance.now() : Date.now();
  const { onLoop, group } = loopJoints(asm, joints);
  const empty = { status: 'none', closed: true, mobility: 0, redundant: 0, conflicts: [], joints: new Map(), values: new Map(), unknowns: 0, equations: 0, iterations: 0, ms: 0 };
  if (!onLoop.size) return empty;
  // a length the size of the assembly: radians × L weigh like millimetres
  let size = 10;
  for (const i of asm.instances) { const b = builds.get(i.part)?.stats?.bbox; if (b) size = Math.max(size, ...b.max.map((v, k) => v - b.min[k])); }
  const L = size / 2;
  const vars = [];   // { j, k, sc (internal = value × sc), lo, hi }
  const fixed = new Map();   // joint id → { value } for held values (and the loop joints' other values)
  for (const j of joints) {
    if (!onLoop.has(j.id)) continue;
    const base = {};
    // a held value is the joint's own (the person is setting it); the others start where the last answer left them
    for (const k of JOINT_DOF[j.type]) base[k] = hold?.has(j.id + '.' + k) ? jointValue(j, k) : start?.get(j.id)?.[k] ?? jointValue(j, k);
    fixed.set(j.id, base);
    for (const k of JOINT_DOF[j.type]) {
      if (hold && hold.has(j.id + '.' + k)) continue;
      const lim = limitOf(j, k);
      const sc = VALUE_UNIT[k] === 'deg' ? (Math.PI / 180) * L : 1;
      vars.push({ j, k, sc, lo: lim ? lim.min : -Infinity, hi: lim ? lim.max : Infinity });
    }
  }
  const x = vars.map((v) => fixed.get(v.j.id)[v.k] * v.sc);
  const valsOf = (xx) => {
    const m = new Map([...fixed].map(([id, o]) => [id, { ...o }]));
    vars.forEach((v, i) => { m.get(v.j.id)[v.k] = xx[i] / v.sc; });
    return m;
  };
  // the residuals of the first `k` loop-closing joints (all of them by default)
  const resid = (xx, k = Infinity) => {
    const { closing } = walk(asm, joints, frames, valsOf(xx));
    const r = [];
    for (const c of closing.slice(0, k)) {
      const D = V.matMul(rigidInverse(c.have), c.want);
      const w = rotVec(D);
      r.push(D[12], D[13], D[14], w[0] * L, w[1] * L, w[2] * L);
    }
    return { r, closing };
  };
  const clamp = (xx) => { vars.forEach((v, i) => { xx[i] = Math.max(v.lo * v.sc, Math.min(v.hi * v.sc, xx[i])); }); return xx; };
  const norm2 = (r) => r.reduce((s, v) => s + v * v, 0);
  const worst = (r) => r.reduce((s, v) => Math.max(s, Math.abs(v)), 0);
  const tol = 1e-9 * Math.max(1, L);
  const n = vars.length;
  const ALL = vars.map((_, i) => i);
  /** Central differences over the unknowns `cols` (J has one column per entry of cols). */
  const jac = (xx, r0, k = Infinity, cols = ALL) => {
    const h = 1e-6 * Math.max(1, L);
    const J = r0.map(() => new Float64Array(cols.length));
    cols.forEach((i, c) => {
      const xp = xx.slice(), xm = xx.slice();
      xp[i] += h; xm[i] -= h;
      const rp = resid(xp, k).r, rm = resid(xm, k).r;
      for (let q = 0; q < r0.length; q++) J[q][c] = (rp[q] - rm[q]) / (2 * h);
    });
    return J;
  };
  /** Damped Newton from x0 on the first k loops, moving only the unknowns `cols`, at most `cap` steps → { x, cur, it }. */
  const newton = (x0, k = Infinity, cap = LOOP_MAX_ITER, cols = ALL) => {
    const xs = x0.slice();
    let cur = resid(xs, k), it = 0, mu = 1e-9;
    const n = cols.length;
    while (it < cap && n && worst(cur.r) > tol) {
      it++;
      const J = jac(xs, cur.r, k, cols), m = cur.r.length;
      // the least-norm step dx = Jᵀ (J Jᵀ + μI)⁻¹ (−r) = (JᵀJ + μI)⁻¹ Jᵀ (−r): through whichever square is smaller (many loops
      // give more equations than unknowns, most of them met twice over)
      const wide = m > n, sz = wide ? n : m;
      const A = Array.from({ length: sz }, () => new Float64Array(sz));
      for (let a = 0; a < sz; a++) for (let b = 0; b <= a; b++) {
        let s2 = 0;
        if (wide) for (let q = 0; q < m; q++) s2 += J[q][a] * J[q][b];
        else for (let c = 0; c < n; c++) s2 += J[a][c] * J[b][c];
        A[a][b] = s2; A[b][a] = s2;
      }
      const g = wide ? Array.from({ length: n }, (_, c) => { let s2 = 0; for (let q = 0; q < m; q++) s2 -= J[q][c] * cur.r[q]; return s2; }) : cur.r.map((v) => -v);
      let peak = 0;
      for (let a = 0; a < sz; a++) peak = Math.max(peak, A[a][a]);
      let improved = false;
      for (let tries = 0; tries < 12 && !improved; tries++) {
        const Am = Array.from({ length: sz }, (_, a) => Array.from(A[a], (v, b) => v + (a === b ? mu * (A[a][a] + 1e-9 * peak) + 1e-15 : 0)));
        const y = V.solveDense(Am, g);
        if (!y || !y.every(Number.isFinite)) { mu = Math.max(mu * 100, 1e-9); continue; }
        let dx = y;
        if (!wide) { dx = new Array(n).fill(0); for (let c = 0; c < n; c++) { let s2 = 0; for (let a = 0; a < m; a++) s2 += J[a][c] * y[a]; dx[c] = s2; } }
        for (let alpha = 1, ls = 0; ls < 16; ls++, alpha /= 2) {
          const xn = xs.slice();
          cols.forEach((i, c) => { xn[i] += alpha * dx[c]; });
          clamp(xn);
          const rn = resid(xn, k);
          if (norm2(rn.r) < norm2(cur.r)) { for (const i of cols) xs[i] = xn[i]; cur = rn; improved = true; break; }
        }
        if (improved) mu = Math.max(mu / 10, 1e-12); else mu = Math.max(mu * 100, 1e-9);
      }
      if (!improved) break;
    }
    return { x: xs, cur, it };
  };
  // a good start (an edit, a drag) closes in a few steps; one that has not closed in LOOP_FIRST_TRY is likely in a dip
  let best = newton(x, Infinity, LOOP_FIRST_TRY);
  // far from the answer the equations of every loop at once can hold the solve in a dip that is not a closed position: close
  // the loops one at a time (each starting from the last answer), then all together, and keep whichever is closer
  if (worst(best.cur.r) > tol && best.cur.closing.length > 1) {
    // each loop in turn closed with only the unknowns no earlier loop uses (the earlier loops stay closed), then all together
    const { closing, up } = walk(asm, joints, frames, valsOf(x));
    const seen = new Set();
    let xi = x, its = best.it;
    closing.forEach((c, q) => {
      const path = loopPath(c, up);
      const cols = ALL.filter((i) => path.has(vars[i].j.id) && !seen.has(vars[i].j.id));
      for (const id of path) seen.add(id);
      if (!cols.length) return;
      const s1 = newton(xi, q + 1, LOOP_MAX_ITER, cols);
      xi = s1.x; its += s1.it;
    });
    const again = newton(xi);
    again.it += its;
    if (norm2(again.cur.r) < norm2(best.cur.r)) best = again;
  }
  // an angle comes back on the turn nearest where it started (the equations do not tell 50° from 410°), inside its limits
  vars.forEach((v, c) => {
    let a = best.x[c];
    if (VALUE_UNIT[v.k] === 'deg') {
      const s0 = x[c] / v.sc, val = a / v.sc;
      let w = s0 + ((((val - s0 + 180) % 360) + 360) % 360) - 180;
      if (w < v.lo || w > v.hi) { const up = w + 360, dn = w - 360; w = up >= v.lo && up <= v.hi ? up : dn >= v.lo && dn <= v.hi ? dn : val; }
      a = w * v.sc;
    }
    x[c] = a;
  });
  const cur = best.cur, it = best.it;
  // analysis at the answer
  const r = cur.r, m = r.length;
  const J = n ? jac(x, r) : [];
  const Q = [];
  let redundant = 0;
  for (let a = 0; a < m; a++) {
    const v = Float64Array.from(J[a] || []);
    const vn = Math.hypot(...v);
    if (!(vn > 1e-9)) { redundant++; continue; }
    for (let k = 0; k < n; k++) v[k] /= vn;
    for (let pass = 0; pass < 2; pass++) for (const b of Q) { let d = 0; for (let k = 0; k < n; k++) d += b[k] * v[k]; if (d) for (let k = 0; k < n; k++) v[k] -= d * b[k]; }
    const wn = Math.hypot(...v);
    if (wn < 1e-6) { redundant++; continue; }
    for (let k = 0; k < n; k++) v[k] /= wn;
    Q.push(v);
  }
  const det = new Float64Array(n);
  for (const b of Q) for (let k = 0; k < n; k++) det[k] += b[k] * b[k];
  const conflicts = [];
  cur.closing.forEach((c, i) => { if (Math.max(...r.slice(i * 6, i * 6 + 6).map(Math.abs)) > Math.max(tol * 1e3, 1e-6)) conflicts.push(c.joint.id); });
  const badGroups = new Set(conflicts.map((id) => group.get(id)));
  const states = new Map();
  for (const j of joints) {
    if (!onLoop.has(j.id)) continue;
    if (badGroups.has(group.get(j.id))) { states.set(j.id, 'over'); continue; }
    const free = vars.some((v, i) => v.j === j && det[i] < 1 - 1e-6);
    states.set(j.id, free ? 'under' : 'full');
  }
  const mobility = n - Q.length;
  const t1 = typeof performance !== 'undefined' ? performance.now() : Date.now();
  return {
    status: conflicts.length ? 'over' : mobility > 0 ? 'under' : 'full', closed: !conflicts.length, mobility, redundant,
    conflicts, joints: states, values: valsOf(x), unknowns: n, equations: m, iterations: it, ms: t1 - t0,
  };
}

/** Write a solve's values into the joints (the loop closed as shown). Values are rounded to 1e-9. */
export function applySolved(asm, loops) {
  if (!loops || !loops.values) return;
  for (const [id, o] of loops.values) {
    const j = asm.joints.find((x) => x.id === id);
    if (!j) continue;
    for (const [k, v] of Object.entries(o)) j[k] = Math.round(v * 1e9) / 1e9;
  }
}

/** The joints placement walks from the grounded part (parents first), with the parent's mate normal in world axes. */
export function jointTree(asm, builds, world) {
  const out = [];
  if (!asm.instances.length) return out;
  const reached = new Set([asm.instances[0].id]);
  const done = new Set();
  let grew = true;
  while (grew) {
    grew = false;
    for (const j of asm.joints) {
      if (done.has(j.id)) continue;
      const ha = reached.has(j.a.inst), hb = reached.has(j.b.inst);
      if (ha === hb) { if (ha) done.add(j.id); continue; }
      done.add(j.id);
      const [pe, ce] = ha ? [j.a, j.b] : [j.b, j.a];
      reached.add(ce.inst); grew = true;
      let normal = [0, 1, 0];
      try {
        const inst = asm.instances.find((i) => i.id === pe.inst);
        const F = mateFrame(pe, builds.get(inst.part), asm.parts[inst.part].part);
        normal = V.norm(V.applyDir(world.get(pe.inst), [F[8], F[9], F[10]]));
      } catch { /* a broken joint explodes along +Y */ }
      out.push({ joint: j.id, parent: pe.inst, child: ce.inst, normal });
    }
  }
  return out;
}

/** Instances no joint path ties to the grounded part. */
export function freeIds(asm) {
  const reached = new Set(asm.instances.length ? [asm.instances[0].id] : []);
  let grew = true;
  while (grew) {
    grew = false;
    for (const j of asm.joints) {
      const ha = reached.has(j.a.inst), hb = reached.has(j.b.inst);
      if (ha !== hb) { reached.add(ha ? j.b.inst : j.a.inst); grew = true; }
    }
  }
  return new Set(asm.instances.filter((i) => !reached.has(i.id)).map((i) => i.id));
}

export function movePlace(place, { move = null, rotate = null } = {}) {
  let m = place;
  if (rotate) {
    if (!rotate.axis.every(Number.isFinite) || V.len(rotate.axis) < 1e-12 || !Number.isFinite(rotate.angle) || !rotate.about.every(Number.isFinite)) throw new Error(t('model.assembly.rotation_needs'));
    m = V.matMul(V.rotationAbout(rotate.about, V.norm(rotate.axis), rotate.angle), m);
  }
  if (move) {
    if (!move.every(Number.isFinite)) throw new Error(t('model.assembly.move_needs'));
    m = V.matMul(V.translation(move), m);
  }
  return m.map((v) => (Math.abs(v) < 1e-15 ? 0 : v));
}

export function moveInstance(asm, id, place) {
  const i = asm.instances.find((x) => x.id === id);
  if (!i) throw new Error(t('model.assembly.no_part'));
  if (i === asm.instances[0]) throw new Error(t('model.assembly.grounded_fixed'));
  if (!freeIds(asm).has(id)) throw new Error(t('model.assembly.placed_by_joints', { name: i.name }));
  if (!Array.isArray(place) || place.length !== 16 || !place.every((v) => Number.isFinite(v) && Math.abs(v) < 1e9)) throw new Error(t('model.assembly.bad_position'));
  i.place = [...place];
}

/**
 * Pairwise interference of the placed instances (manifold-3d intersection), each result with its kind (0.5 WL.33). A part's
 * cosmetic threads (tapped holes, Thread features not modelled: regen.threads) are modelled as plain cylinders at the major or
 * tap-drill size, so a bolt in a tapped hole overlaps; such an overlap is classified by the thread zones (tubes from the minor
 * to the major radius along each thread, in world space): inside both parts' zones = 'thread' (a threaded fit), inside one
 * part's only = 'thread-depth', else 'overlap'. touch: also pairs with no common volume whose faces are within touchTol.
 */
export function interference(asm, builds, world, M, { tol = 1e-6, touch = false, touchTol = 1e-3 } = {}) {
  const live = [];
  const T = (m) => { live.push(m); return m; };
  const solids = [];
  try {
    for (const i of asm.instances) {
      const b = builds.get(i.part);
      if (!b?.mesh) continue;
      const mesh = new M.Mesh({ numProp: 3, vertProperties: new Float32Array(b.mesh.positions), triVerts: new Uint32Array(b.mesh.indices) });
      mesh.merge();
      const m = T(new M.Manifold(mesh));
      solids.push({ id: i.id, m: T(m.transform(world.get(i.id))), zones: undefined, b, W: world.get(i.id) });
    }
    // an instance's cosmetic thread zones, made once and only when an overlap needs them
    const zonesOf = (sd) => {
      if (sd.zones !== undefined) return sd.zones;
      const tubes = [];
      for (const th of sd.b.threads?.values?.() || []) {
        if (th.modelled) continue;
        for (const z of th.list || []) {
          if (!(z.r1 > 0) || !(z.depth > 0)) continue;
          const r0 = Math.max(0, (z.r0 ?? z.r1 * 0.8) * 0.97), r1 = z.r1 * 1.03 + 1e-3, m = Math.max(0.05 * z.r1, 1e-3), d = V.norm(z.d);
          const x = V.norm(Math.abs(d[0]) < 0.9 ? V.cross(d, [1, 0, 0]) : V.cross(d, [0, 1, 0])), y = V.cross(d, x);
          const ring = T(T(M.CrossSection.circle(r1, 48)).subtract(T(M.CrossSection.circle(r0, 48))));
          const tube = T(T(ring.extrude(z.depth + 2 * m)).translate([0, 0, -m]));
          tubes.push(T(T(tube.transform(V.basisMatrix(x, y, d, z.o))).transform(sd.W)));
        }
      }
      sd.zones = tubes.length ? (tubes.length === 1 ? tubes[0] : T(M.Manifold.union(tubes))) : null;
      return sd.zones;
    };
    const out = [];
    for (let x = 0; x < solids.length; x++) for (let y = x + 1; y < solids.length; y++) {
      const A = solids[x], B = solids[y], a = A.m.boundingBox(), b = B.m.boundingBox(), pad = touch ? touchTol : 0;
      if ([0, 1, 2].some((k) => a.max[k] < b.min[k] - tol - pad || b.max[k] < a.min[k] - tol - pad)) continue;
      const common = T(A.m.intersect(B.m)), v = common.volume();
      if (v > tol) {
        const za = zonesOf(A), zb = zonesOf(B), small = Math.max(tol, 1e-4 * v);
        let kind = 'overlap';
        if (za || zb) {
          const any = za && zb ? T(za.add(zb)) : za || zb;
          if (T(common.subtract(any)).volume() <= small) kind = za && zb && T(common.subtract(T(za.intersect(zb)))).volume() <= small ? 'thread' : 'thread-depth';
        }
        out.push({ a: A.id, b: B.id, volume: v, kind });
      } else if (touch && A.m.minGap(B.m, touchTol) <= touchTol) out.push({ a: A.id, b: B.id, volume: 0, kind: 'touch' });
    }
    return out;
  } finally {
    for (const m of live) { try { m.delete(); } catch { /* gone */ } }
  }
}

/** The kinds of interference results, in the order they are listed. */
export const CLASH_KINDS = ['overlap', 'thread-depth', 'thread', 'touch'];
const pairKey = (a, b) => (a < b ? a + '|' + b : b + '|' + a);
/** The results the assembly's filters leave shown, and the ones they hide. */
export function filterClashes(asm, list) {
  const f = asm.clashFilter, hide = new Set(f?.hide || []), pairs = new Set((f?.pairs || []).map(([a, b]) => pairKey(a, b)));
  const shown = [], hidden = [];
  for (const c of list || []) (hide.has(c.kind) || pairs.has(pairKey(c.a, c.b)) ? hidden : shown).push(c);
  return { shown, hidden };
}
/** Show or hide a kind (one edit; the caller makes it an undo step). */
export function setKindHidden(asm, kind, hidden) {
  if (!CLASH_KINDS.includes(kind)) return;
  const f = asm.clashFilter || (asm.clashFilter = { hide: [], pairs: [] });
  f.hide = f.hide.filter((k) => k !== kind);
  if (hidden) f.hide.push(kind);
  f.hide.sort((x, y) => CLASH_KINDS.indexOf(x) - CLASH_KINDS.indexOf(y));
  tidyFilter(asm);
}
/** Hide (or show again) one pair of instances. */
export function setPairHidden(asm, a, b, hidden) {
  const f = asm.clashFilter || (asm.clashFilter = { hide: [], pairs: [] });
  const k = pairKey(a, b);
  f.pairs = f.pairs.filter(([x, y]) => pairKey(x, y) !== k);
  if (hidden) f.pairs.push(a < b ? [a, b] : [b, a]);
  tidyFilter(asm);
}
function tidyFilter(asm) { if (asm.clashFilter && !asm.clashFilter.hide.length && !asm.clashFilter.pairs.length) delete asm.clashFilter; }
/** Untrusted filters from a file, against the assembly's instances (pairs of instances it no longer has are dropped). */
export function readClashFilter(raw, insts) {
  if (raw === undefined || raw === null) return null;
  if (typeof raw !== 'object' || Array.isArray(raw) || !Array.isArray(raw.hide ?? []) || !Array.isArray(raw.pairs ?? []) || (raw.pairs || []).length > 5000) throw new Error(t('asm.clash.err_filter'));
  const hide = [...new Set(raw.hide || [])];
  if (!hide.every((k) => CLASH_KINDS.includes(k))) throw new Error(t('asm.clash.err_filter'));
  const pairs = [], seen = new Set();
  for (const pr of raw.pairs || []) {
    if (!Array.isArray(pr) || pr.length !== 2 || !pr.every((x) => typeof x === 'string' && /^i\d{1,9}$/.test(x)) || pr[0] === pr[1]) throw new Error(t('asm.clash.err_filter'));
    const k = pairKey(pr[0], pr[1]);
    if (!insts.has(pr[0]) || !insts.has(pr[1]) || seen.has(k)) continue;
    seen.add(k); pairs.push(pr[0] < pr[1] ? [pr[0], pr[1]] : [pr[1], pr[0]]);
  }
  hide.sort((x, y) => CLASH_KINDS.indexOf(x) - CLASH_KINDS.indexOf(y));
  return hide.length || pairs.length ? { hide, pairs } : null;
}

/** Step a joint through its range and report interference at each step. → [{ value, pairs }] */
export function motionCheck(asm, builds, M, jointId, from, to, steps = 12, key = null) {
  const j = asm.joints.find((x) => x.id === jointId);
  if (!j) throw new Error(t('model.assembly.no_joint'));
  key = key || JOINT_DOF[j.type]?.[0] || 'angle';
  const keep = j[key];
  const L = limitOf(j, key);
  if (L) { from = Math.max(L.min, Math.min(L.max, from)); to = Math.max(L.min, Math.min(L.max, to)); }
  const out = [];
  const hold = new Set([j.id + '.' + key]);
  let start = null;
  try {
    for (let s = 0; s <= steps; s++) {
      j[key] = from + (to - from) * s / steps;
      // the swept value is held and a loop follows it, each step starting from the last (0.7 D7.40)
      const { world, loops } = placeAll(asm, builds, { hold, start });
      start = loops?.values?.size ? loops.values : null;
      out.push({ value: j[key], pairs: interference(asm, builds, world, M), closed: loops ? loops.closed : true });
    }
  } finally { j[key] = keep; }
  return out;
}

// ---------------------------------------------------------------- files

const num = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) < 1e9;
const text = (s, max = 120) => String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, max);

/** Check an opened assembly file; returns a clean assembly or throws Error. */
export function readAssembly(raw) {
  let j = raw;
  if (typeof raw === 'string') { try { j = JSON.parse(raw); } catch { throw new Error(t('model.assembly.file.not_json')); } }
  if (!j || j.format !== FORMAT) throw new Error(t('model.assembly.file.not_asm'));
  if (!Number.isInteger(j.version) || j.version < 1) throw new Error(t('model.assembly.file.no_version'));
  if (j.version > VERSION) throw new Error(t('model.assembly.file.newer', { version: j.version, max: VERSION }));
  const asm = newAssembly(text(j.name) || 'Assembly1');
  const ids = new Set();
  let maxN = 0;
  const take = (id, re) => { if (typeof id !== 'string' || !re.test(id) || ids.has(id)) throw new Error(t('model.assembly.file.bad_id')); ids.add(id); maxN = Math.max(maxN, +id.slice(1)); return id; };
  if (!j.parts || typeof j.parts !== 'object' || Object.keys(j.parts).length > 200) throw new Error(t('model.assembly.file.no_parts'));
  for (const [pid, p] of Object.entries(j.parts)) {
    take(pid, /^p\d{1,9}$/);
    let part, props;
    try { part = readPart(p.part); props = readPartProps(p); } catch (e) { throw new Error(t('model.assembly.file.part_problem', { name: text(p.name) || pid, message: e.message })); }
    asm.parts[pid] = { name: text(p.name) || part.name, part, ...props };
  }
  if (!Array.isArray(j.instances) || j.instances.length > 500) throw new Error(t('model.assembly.file.no_instances'));
  for (const i of j.instances) {
    if (!asm.parts[i.part]) throw new Error(t('model.assembly.file.inst_missing_part'));
    if (!Array.isArray(i.place) || i.place.length !== 16 || !i.place.every(num)) throw new Error(t('model.assembly.file.inst_bad_place'));
    asm.instances.push({ id: take(i.id, /^i\d{1,9}$/), part: i.part, name: text(i.name, 80) || i.id, place: [...i.place] });
  }
  if (!Array.isArray(j.joints) || j.joints.length > 1000) throw new Error(t('model.assembly.file.no_joints'));
  const insts = new Set(asm.instances.map((i) => i.id));
  const end = (e) => {
    if (!e || !insts.has(e.inst)) throw new Error(t('model.assembly.file.joint_missing_part'));
    const out = { inst: e.inst, plane: null };
    if (!e.plane || typeof e.plane !== 'object') throw new Error(t('model.assembly.file.joint_no_face'));
    // part.js's plane check (named faces too); any feature id is let through, so a joint to a deleted feature opens and says so
    try { out.plane = readPlane(e.plane, { has: (id) => typeof id === 'string' && /^f\d{1,9}$/.test(id) }); } catch { throw new Error(t('model.assembly.file.joint_bad_face')); }
    if (e.axis) {
      if (!/^f\d{1,9}$/.test(e.axis.feature) || !(e.axis.index === undefined || (Number.isInteger(e.axis.index) && e.axis.index >= 0 && e.axis.index < 10000))) throw new Error(t('model.assembly.file.joint_bad_axis'));
      out.axis = { feature: e.axis.feature, ...(e.axis.index !== undefined ? { index: e.axis.index } : {}) };
    }
    return out;
  };
  for (const jt of j.joints) {
    if (!JOINT_TYPES[jt.type]) throw new Error(t('model.assembly.file.joint_unknown'));
    if (!num(jt.angle ?? 0) || !num(jt.offset ?? 0) || EXTRA_VALUES.some((k) => jt[k] !== undefined && !num(jt[k]))) throw new Error(t('model.assembly.file.joint_bad_value'));
    const a = end(jt.a), b = end(jt.b);
    if (a.inst === b.inst) throw new Error(t('model.assembly.file.joint_self'));
    const jj = { id: take(jt.id, /^j\d{1,9}$/), name: text(jt.name, 60) || jt.id, type: jt.type, a, b, angle: jt.angle ?? 0, offset: jt.offset ?? 0 };
    for (const k of EXTRA_VALUES) if (jt[k] !== undefined) jj[k] = jt[k];
    if (jt.limits !== undefined && jt.limits !== null) {
      const L = readLimits(jt.limits, jt.type);
      if (L) jj.limits = L;
    }
    asm.joints.push(jj);
  }
  asm.views = readViews(j.views, insts, take);
  const cf = readClashFilter(j.clashFilter, insts);
  if (cf) asm.clashFilter = cf;
  const su = readStackups(j.stackups, asm.instances.map((i) => i.id));
  if (su.length) asm.stackups = su;
  if (j.stock !== undefined && j.stock !== null) { const st = cleanStock(j.stock); if (st.items.length) asm.stock = st; }
  if (j.laser !== undefined && j.laser !== null) { const lj = cleanJob(j.laser); if (lj.layers.length) asm.laser = lj; }   // 0.7 SU.772: the Laser program's settings   // 0.7 SU.755: offcut stock
  asm.seq = maxN + 1;
  asm.version = fileVersion(asm);   // what its contents need (and what it is written as)
  return asm;
}

/** Joint limits from a file or the panel: { min, max } (the first value) or { <value>: { min, max }, … } with min < max
 *  (degrees within ±3600, mm within ±1e6), or throws. → the same shape, or null for a joint with nothing to limit. */
export function readLimits(L, type) {
  const dof = JOINT_DOF[type] || [];
  if (!dof.length) return null;
  const one = (x, key) => {
    if (!x || typeof x !== 'object' || !num(x.min) || !num(x.max) || !(x.min < x.max)) throw new Error(t('asm.limits.err_bad'));
    const cap = VALUE_UNIT[key] === 'deg' ? 3600 : 1e6;
    if (Math.abs(x.min) > cap || Math.abs(x.max) > cap) throw new Error(t('asm.limits.err_range'));
    return { min: x.min, max: x.max };
  };
  if (!L || typeof L !== 'object') throw new Error(t('asm.limits.err_bad'));
  if (typeof L.min === 'number' || typeof L.max === 'number') return one(L, dof[0]);
  const out = {};
  for (const [k, x] of Object.entries(L)) {
    if (!dof.includes(k)) throw new Error(t('asm.limits.err_name'));
    out[k] = one(x, k);
  }
  return Object.keys(out).length ? out : null;
}

/** readLimits that answers null instead of throwing (limits that no longer fit a joint's new type). */
export function readLimitsSafe(L, type) { try { return readLimits(L, type); } catch { return null; } }

/** 5 with tolerance stack-ups (0.6 LC.18); 4 with interference filters (0.5 WL.33); 3 when a joint is of a 0.4 type or limits a
 *  value per name; else 2 (readers of version 2 open it). */
export const fileVersion = (asm) => (asm.stackups?.length ? 5 : asm.clashFilter ? 4 : asm.joints.some((j) => NEW_TYPES.has(j.type) || (j.limits && typeof j.limits.min !== 'number') || EXTRA_VALUES.some((k) => j[k] !== undefined && j[k] !== 0)) ? 3 : 2);
export const toJSON = (asm) => JSON.stringify({ ...asm, version: fileVersion(asm) }, null, 1);
