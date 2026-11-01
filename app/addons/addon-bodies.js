/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — data and scene code; nothing here is shown to a person. */
/**
 * addon-bodies.js — display bodies an add-on places in PartCraft's viewport (add-on API 1.1, `api.model`; docs/ADDONS-SPEC.md § 5.7).
 *
 * They are kept IN THE PART FILE (`part.addonBodies`), so the part's own history makes placing or removing them one undo step, a saved
 * part brings them back, and an older PartCraft that does not know the key opens the file without them (nothing else changes). They are
 * display bodies: drawn in the viewport, never part of the part's solid (no boolean, no mass, no STL / STEP, no picks). Units are mm,
 * PartCraft's world axes (Y up).
 *
 *   part.addonBodies = { <add-on id>: { <group id>: { name, bodies: [body] } } }
 *   body = { name, color '#rrggbb', opacity? (0.05–1), box: [x0, y0, z0, x1, y1, z1] | mesh: { positions: [x y z …], indices: [i j k …] },
 *            at?: [x, y, z] (moved after the turn), rotY?: degrees about the world Y axis through the body's own origin }
 *
 *   cleanBody(raw) → body | null · cleanGroup(raw) → { name, bodies } | null · readAddonBodies(raw) → the clean object | null (untrusted file)
 *   setGroup(part, addon, group, { name, bodies }) → count · removeGroup(part, addon, group) → boolean · groupsOf(part, addon?) → [{ addon, group, name, count }]
 *   boundsOf(part) → { min, max } | null (all groups) · groupObject(THREE, g) → THREE.Group (merged by colour; one edge set)
 */
const SAFE_ID = /^[a-z0-9][a-z0-9-]{0,40}$/;
export const LIMITS = { groupsPerAddon: 20, addons: 40, bodies: 6000, triangles: 60000, name: 60, coord: 1e7 };
const text = (v, n) => String(v ?? '').replace(/[\u0000-\u001f\u007f<>]/g, '').trim().slice(0, n);
const fin = (v) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= LIMITS.coord;
const r3 = (v) => Math.round(v * 1000) / 1000;
const COLOR = /^#[0-9a-fA-F]{6}$/;

export function cleanBody(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const out = { name: text(raw.name, LIMITS.name), color: COLOR.test(raw.color) ? raw.color.toLowerCase() : '#c9c2b4' };
  if (typeof raw.opacity === 'number' && raw.opacity >= 0.05 && raw.opacity < 1) out.opacity = r3(raw.opacity);
  if (Array.isArray(raw.box)) {
    if (raw.box.length !== 6 || !raw.box.every(fin)) return null;
    const b = raw.box.map(Number);
    out.box = [Math.min(b[0], b[3]), Math.min(b[1], b[4]), Math.min(b[2], b[5]), Math.max(b[0], b[3]), Math.max(b[1], b[4]), Math.max(b[2], b[5])].map(r3);
    if (out.box[3] - out.box[0] <= 0 || out.box[4] - out.box[1] <= 0 || out.box[5] - out.box[2] <= 0) return null;
  } else if (raw.mesh && typeof raw.mesh === 'object') {
    const P = raw.mesh.positions, I = raw.mesh.indices;
    if (!Array.isArray(P) || !Array.isArray(I) || P.length < 9 || P.length % 3 || I.length < 3 || I.length % 3 || I.length / 3 > LIMITS.triangles || P.length > 3 * LIMITS.triangles) return null;
    if (!P.every(fin) || !I.every((i) => Number.isInteger(i) && i >= 0 && i < P.length / 3)) return null;
    out.mesh = { positions: P.map((v) => r3(Number(v))), indices: I.slice() };
  } else return null;
  if (Array.isArray(raw.at)) { if (raw.at.length !== 3 || !raw.at.every(fin)) return null; out.at = raw.at.map((v) => r3(Number(v))); }
  if (raw.rotY !== undefined) { if (!fin(raw.rotY)) return null; out.rotY = r3(Number(raw.rotY)); }
  return out;
}

export function cleanGroup(raw) {
  if (!raw || typeof raw !== 'object' || !Array.isArray(raw.bodies)) return null;
  const bodies = [];
  let tris = 0;
  for (const b of raw.bodies.slice(0, LIMITS.bodies)) {
    const c = cleanBody(b);
    if (!c) continue;
    tris += c.mesh ? c.mesh.indices.length / 3 : 12;
    if (tris > LIMITS.triangles) break;
    bodies.push(c);
  }
  return bodies.length ? { name: text(raw.name, LIMITS.name), bodies } : null;
}

export function readAddonBodies(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const out = {};
  for (const [id, groups] of Object.entries(raw).slice(0, LIMITS.addons)) {
    if (!SAFE_ID.test(id) && !/^[a-z0-9][a-z0-9.-]{0,60}$/.test(id)) continue;
    if (!groups || typeof groups !== 'object') continue;
    const g = {};
    for (const [gid, grp] of Object.entries(groups).slice(0, LIMITS.groupsPerAddon)) {
      if (!SAFE_ID.test(gid)) continue;
      const c = cleanGroup(grp);
      if (c) g[gid] = c;
    }
    if (Object.keys(g).length) out[id] = g;
  }
  return Object.keys(out).length ? out : null;
}

export function setGroup(part, addon, group, def) {
  if (!SAFE_ID.test(String(group))) throw new Error('model.addBodies: the group id must be lowercase letters, digits and hyphens');
  const g = cleanGroup(def);
  if (!g) throw new Error('model.addBodies: no usable body (a box [x0,y0,z0,x1,y1,z1] or a mesh { positions, indices })');
  const all = part.addonBodies || (part.addonBodies = {});
  const mine = all[addon] || (all[addon] = {});
  if (!(group in mine) && Object.keys(mine).length >= LIMITS.groupsPerAddon) throw new Error('model.addBodies: too many groups');
  mine[group] = g;
  return g.bodies.length;
}

export function removeGroup(part, addon, group) {
  const mine = part.addonBodies && part.addonBodies[addon];
  if (!mine || !(group in mine)) return false;
  delete mine[group];
  if (!Object.keys(mine).length) delete part.addonBodies[addon];
  if (!Object.keys(part.addonBodies).length) delete part.addonBodies;
  return true;
}

export function groupsOf(part, addon = null) {
  const out = [];
  for (const [a, groups] of Object.entries(part.addonBodies || {})) {
    if (addon && a !== addon) continue;
    for (const [group, g] of Object.entries(groups)) out.push({ addon: a, group, name: g.name, count: g.bodies.length });
  }
  return out;
}

function bodyPoints(b) {
  let pts;
  if (b.box) { const [x0, y0, z0, x1, y1, z1] = b.box; pts = [[x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0], [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]]; }
  else { pts = []; const P = b.mesh.positions; for (let i = 0; i < P.length; i += 3) pts.push([P[i], P[i + 1], P[i + 2]]); }
  return placed(b, pts);
}
function placed(b, pts) {
  const a = ((b.rotY || 0) * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a), at = b.at || [0, 0, 0];
  return pts.map(([x, y, z]) => [x * c + z * s + at[0], y + at[1], -x * s + z * c + at[2]]);   // a right-handed turn about +Y
}

export function boundsOf(part) {
  let min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (const groups of Object.values(part.addonBodies || {})) for (const g of Object.values(groups)) for (const b of g.bodies) for (const p of bodyPoints(b)) for (let i = 0; i < 3; i++) { if (p[i] < min[i]) min[i] = p[i]; if (p[i] > max[i]) max[i] = p[i]; }
  return Number.isFinite(min[0]) ? { min, max } : null;
}

/** Triangles (as corner positions, 9 numbers each) of a clean body in the world. */
export function bodyTriangles(b) {
  const out = [];
  if (b.box) {
    const p = bodyPoints(b);
    const quad = [[0, 3, 2, 1], [4, 5, 6, 7], [0, 1, 5, 4], [3, 7, 6, 2], [0, 4, 7, 3], [1, 2, 6, 5]];   // bottom, top, −z, +z, −x, +x (outward)
    for (const [a, c, d, e] of quad) { out.push(...p[a], ...p[c], ...p[d], ...p[a], ...p[d], ...p[e]); }
    return out;
  }
  const p = bodyPoints(b), I = b.mesh.indices;
  for (let i = 0; i < I.length; i++) out.push(...p[I[i]]);
  return out;
}

const BOX_EDGES = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];

/** A THREE.Group for one group: one mesh per colour and opacity, one line set for the box edges. */
export function groupObject(THREE, g, { ink = '#2b2f36' } = {}) {
  const root = new THREE.Group();
  const buckets = new Map();
  const edges = [];
  for (const b of g.bodies) {
    const key = b.color + '|' + (b.opacity || 1);
    if (!buckets.has(key)) buckets.set(key, { color: b.color, opacity: b.opacity || 1, pos: [] });
    const tr = bodyTriangles(b);
    const dst = buckets.get(key).pos;
    for (let i = 0; i < tr.length; i++) dst.push(tr[i]);
    if (b.box && !b.opacity) { const p = bodyPoints(b); for (const [i, j] of BOX_EDGES) edges.push(...p[i], ...p[j]); }
  }
  for (const k of buckets.values()) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(k.pos), 3));
    geo.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ color: k.color, roughness: 0.7, metalness: 0.02, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, side: THREE.DoubleSide, transparent: k.opacity < 1, opacity: k.opacity, depthWrite: k.opacity >= 1 });
    root.add(new THREE.Mesh(geo, mat));
  }
  if (edges.length) {
    const eg = new THREE.BufferGeometry();
    eg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(edges), 3));
    root.add(new THREE.LineSegments(eg, new THREE.LineBasicMaterial({ color: ink })));
  }
  root.userData.addonBodies = g.bodies.length;
  return root;
}
