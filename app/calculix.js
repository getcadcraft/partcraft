/* SPDX-License-Identifier: Apache-2.0 */
/**
 * calculix.js — export a PartCraft nonlinear study as a CalculiX input deck (.inp) and read the .frd result file back
 * (SU.891). DOM-free. CalculiX is a separate program the person runs themselves (GPL, never bundled or linked: we write a text
 * file for it and read a text file from it; its manual describes both formats).
 *
 * Deck: *NODE (ids = model node + 1, mm), *ELEMENT TYPE=C3D10 per part (our T10 node order — corners, then the midsides
 * 01 12 02 03 13 23 — is the order CalculiX uses for C3D10 (its 5…10: 1-2, 2-3, 3-1, 1-4, 2-4, 3-4)), *MATERIAL with *ELASTIC,
 * *DENSITY (tonne/mm³) and, for a bilinear material, *PLASTIC (σy at 0 and σy + H at εp = 1), one *SOLID SECTION per part,
 * supports as *BOUNDARY (axis directions) or *TRANSFORM + *BOUNDARY (a frictionless face that is not axis-aligned), loads as
 * *CLOAD (the nodal forces the solver itself uses), contact pairs as element-face *SURFACEs + *CONTACT PAIR with a linear
 * *SURFACE BEHAVIOR (penalty slope kn, MPa/mm) or *TIE for bonded, one *STATIC step with the load steps as increments, output
 * U (nodes) and S, E, PEEQ (elements). Units: mm, N, MPa, tonne, as the rest of PartCraft.
 * Reading: the ASCII .frd of CalculiX (100C result blocks: ` -4` name line, ` -5` component lines, ` -1` data lines of an
 * I10 node id and 12-character E fields, ` -3` ends a block) → { nodes, blocks: [{ name, step, values: Map(node → [components]) }] }.
 */

const FACES = [[0, 1, 2], [0, 3, 1], [1, 3, 2], [2, 3, 0]];   // C3D10 faces 1…4 by corner (0-based) — 1-2-3, 1-4-2, 2-4-3, 3-4-1
const num = (v) => (Number.isFinite(v) ? v.toExponential(10) : '0.');

/** Element face lines ("elem, Sn") for boundary triangles (model.btri6 indices) → string[]. */
function surfaceLines(model, tris) {
  const byNode = new Map(), m = model.tets10.length / 10;
  for (let e = 0; e < m; e++) for (let a = 0; a < 4; a++) { const n = model.tets10[10 * e + a]; (byNode.get(n) || byNode.set(n, []).get(n)).push(e); }
  const out = [];
  for (const t of tris) {
    const c = [0, 1, 2].map((k) => model.btri6[6 * t + k]);
    let found = false;
    for (const e of byNode.get(c[0]) || []) {
      const el = [0, 1, 2, 3].map((k) => model.tets10[10 * e + k]);
      for (let f = 0; f < 4; f++) if (FACES[f].every((k) => c.includes(el[k]))) { out.push(`${e + 1}, S${f + 1}`); found = true; break; }
      if (found) break;
    }
    if (!found) throw new Error('calculix: a contact face does not belong to any element');   // i18n-ignore: internal check
  }
  return out;
}

/**
 * The deck as a string. spec: { model (tetfea.js makeTetModel), elemBody (per element, or null = one part), materials
 * ([bilinearMaterial() results]), names?, cons (makeConstraints), f (nodal loads, N), pairs? ([{ type, slave: [btri], master:
 * [btri], kn }] — btri6 indices of the model), steps (load increments, default 10), title }.
 */
export function exportInp(spec) {
  const { model, elemBody = null, materials, cons, f, pairs = [], steps = 10, title = 'PartCraft study', names = null } = spec;
  const L = [], X = model.X, ne = model.tets10.length / 10;
  L.push('*HEADING', ` ${title.replace(/[\r\n,]/g, ' ')} (PartCraft: mm, N, MPa, tonne)`);
  L.push('*NODE, NSET=NALL');
  for (let i = 0; i < model.n; i++) L.push(` ${i + 1}, ${num(X[3 * i])}, ${num(X[3 * i + 1])}, ${num(X[3 * i + 2])}`);
  const nb = materials.length, label = (b) => (names && names[b] ? names[b].toUpperCase().replace(/[^A-Z0-9_]/g, '_') : `PART${b + 1}`);
  for (let b = 0; b < nb; b++) {
    L.push(`*ELEMENT, TYPE=C3D10, ELSET=${label(b)}`);
    for (let e = 0; e < ne; e++) if ((elemBody ? elemBody[e] : 0) === b) L.push(` ${e + 1}, ` + Array.from(model.tets10.subarray(10 * e, 10 * e + 10), (v) => v + 1).join(', '));
  }
  materials.forEach((m, b) => {
    L.push(`*MATERIAL, NAME=MAT_${label(b)}`, '*ELASTIC', ` ${num(m.E)}, ${num(m.nu)}`);
    if (m.density) L.push('*DENSITY', ` ${num(m.density * 1e-12)}`);
    if (Number.isFinite(m.sy)) L.push('*PLASTIC', ` ${num(m.sy)}, 0.`, ` ${num(m.sy + m.H)}, 1.`);
    L.push(`*SOLID SECTION, ELSET=${label(b)}, MATERIAL=MAT_${label(b)}`);
  });
  // supports: axis directions as they are; other directions get a *TRANSFORM group (one per node)
  const bnd = [], transforms = new Map();
  for (let q = 0; q < cons.nodes.length; q++) {
    const node = cons.nodes[q] + 1, dirs = cons.dirs[q], skew = [];
    for (const d of dirs) {
      const ax = d.findIndex((v) => Math.abs(Math.abs(v) - 1) < 1e-9);
      if (ax >= 0) bnd.push(` ${node}, ${ax + 1}, ${ax + 1}, 0.`); else skew.push(d);
    }
    if (skew.length > 1) throw new Error('calculix: a node held along two slanted directions cannot be written (supports on slanted faces that meet)');   // i18n-ignore: internal check, the UI explains
    if (skew.length) { const k = skew[0].map((v) => v.toFixed(9)).join(','); (transforms.get(k) || transforms.set(k, { n: skew[0], nodes: [] }).get(k)).nodes.push(node); }
  }
  let ti = 0;
  for (const { n, nodes } of transforms.values()) {
    ti++;
    L.push(`*NSET, NSET=SLANT${ti}`); for (let i = 0; i < nodes.length; i += 8) L.push(' ' + nodes.slice(i, i + 8).join(', '));
    const t = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0], d = t[0] * n[0] + t[1] * n[1] + t[2] * n[2], p = [t[0] - d * n[0], t[1] - d * n[1], t[2] - d * n[2]], pl = Math.hypot(...p);
    // rectangular system: local x = n, local y in the plane through the origin, n and p
    L.push(`*TRANSFORM, NSET=SLANT${ti}, TYPE=R`, ` ${n.map((v) => v.toFixed(9)).join(', ')}, ${p.map((v) => (v / pl).toFixed(9)).join(', ')}`);
    bnd.push(` SLANT${ti}, 1, 1, 0.`);
  }
  // contact surfaces
  const sNames = [];
  pairs.forEach((p, k) => {
    L.push(`*SURFACE, NAME=SLAVE${k + 1}, TYPE=ELEMENT`, ...surfaceLines(model, p.slave));
    L.push(`*SURFACE, NAME=MASTER${k + 1}, TYPE=ELEMENT`, ...surfaceLines(model, p.master));
    sNames.push(k + 1);
  });
  pairs.forEach((p, k) => {
    if (p.type === 'bonded') L.push(`*TIE, NAME=TIE${k + 1}, POSITION TOLERANCE=${num(p.tol ?? 1)}`, ` SLAVE${k + 1}, MASTER${k + 1}`);
    else L.push(`*SURFACE INTERACTION, NAME=SI${k + 1}`, '*SURFACE BEHAVIOR, PRESSURE-OVERCLOSURE=LINEAR', ` ${num(p.kn)}`,
      `*CONTACT PAIR, INTERACTION=SI${k + 1}, TYPE=SURFACE TO SURFACE`, ` SLAVE${k + 1}, MASTER${k + 1}`);
  });
  L.push('*STEP', '*STATIC', ` ${num(1 / steps)}, 1., ${num(1 / (steps * 64))}, 1.`);
  if (bnd.length) L.push('*BOUNDARY', ...bnd);
  const cl = [];
  for (let i = 0; i < model.n; i++) for (let a = 0; a < 3; a++) { const v = f[3 * i + a]; if (v !== 0) cl.push(` ${i + 1}, ${a + 1}, ${num(v)}`); }
  if (cl.length) L.push('*CLOAD', ...cl);
  L.push('*NODE FILE', ' U', '*EL FILE', ' S, E' + (materials.some((m) => Number.isFinite(m.sy)) ? ', PEEQ' : ''), '*END STEP');
  return L.join('\n') + '\n';
}

/** Parse an ASCII .frd → { nodes: Map(id → [x, y, z]), blocks: [{ name, step, components: [name], values: Map(node → number[]) }] }. */
export function parseFrd(text) {
  const nodes = new Map(), blocks = [], lines = text.split(/\r?\n/);
  const field = (s, a, n) => s.slice(a, a + n);
  const read = (s) => { const v = parseFloat(s.replace(/D/g, 'E')); return v; };
  let i = 0;
  while (i < lines.length) {
    const ln = lines[i];
    if (/^\s*2C/.test(ln)) {   // node block
      i++;
      for (; i < lines.length && !/^ -3/.test(lines[i]); i++) {
        const s = lines[i]; if (!/^ -1/.test(s)) continue;
        nodes.set(parseInt(field(s, 3, 10), 10), [0, 1, 2].map((k) => read(field(s, 13 + 12 * k, 12))));
      }
    } else if (/^\s*100C/.test(ln)) {   // result block
      const step = (ln.match(/\s(\d+)\s*$/) || [])[1];
      const blk = { name: '', step: step ? parseInt(step, 10) : 0, components: [], values: new Map() };
      i++;
      let prev = null;
      for (; i < lines.length && !/^ -3/.test(lines[i]); i++) {
        const s = lines[i];
        if (/^ -4/.test(s)) blk.name = s.slice(5, 13).trim();
        else if (/^ -5/.test(s)) { const nm = s.slice(5, 13).trim(); if (nm !== 'ALL') blk.components.push(nm); }
        else if (/^ -1/.test(s)) { const id = parseInt(field(s, 3, 10), 10), vals = []; for (let p = 13; p + 12 <= s.length; p += 12) vals.push(read(field(s, p, 12))); blk.values.set(id, vals); prev = id; }
        else if (/^ -2/.test(s) && prev !== null) { const vals = blk.values.get(prev); for (let p = 13; p + 12 <= s.length; p += 12) vals.push(read(field(s, p, 12))); }
      }
      blocks.push(blk);
    }
    i++;
  }
  return { nodes, blocks };
}

/** The last DISP block of a parsed .frd as a displacement vector in model numbering (ids = node + 1) → Float64Array(N), or null. */
export function frdDisplacements(frd, model) {
  const blk = [...frd.blocks].reverse().find((b) => b.name === 'DISP');
  if (!blk) return null;
  const u = new Float64Array(model.N);
  for (const [id, v] of blk.values) { const n = id - 1; if (n >= 0 && n < model.n) { u[3 * n] = v[0]; u[3 * n + 1] = v[1]; u[3 * n + 2] = v[2]; } }
  return u;
}
