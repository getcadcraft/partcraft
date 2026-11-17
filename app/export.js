/* SPDX-License-Identifier: Apache-2.0 */
/**
 * export.js — files PartCraft writes (DOM-free, no library):
 *   stlBinary(mesh, name)      binary STL, millimetres, Z up (printing formats are Z-up; the model is Y-up)
 *   threeMf(mesh, name)        3MF core (one object, millimetres, Z up) in a stored zip
 *   dxfSketch(sketch, name)    a sketch as DXF R12: LINE / ARC / CIRCLE / POINT; construction on layer CONSTRUCTION
 *   dxfLoops(loops, circles)   closed 2D loops (a planar face's profile) as R12 closed POLYLINEs; a loop with a circle
 *                              (faces.js loopCircles: a round hole) as a CIRCLE
 *   stepFaceted(mesh, name)    STEP AP242 (ISO 10303-21) FACETED_BREP: planar faces merged, curved
 *                              surfaces as their facets. Model coordinates (Y up), millimetres.
 * The R12 layout follows CadCraft's dxf.js writer (header $ACADVER AC1009, LTYPE/LAYER/STYLE tables).
 */
import { byId, pointXY, arcAngles, loosePoints, splineCurve } from './sketch.js';
import { tessellateTol } from './sketch-spline.js';
import { planarGroupsMesh as planarGroups, boundaryLoops } from './faces.js';

const zUp = (x, y, z) => [x, -z, y];   // rotate +90° about X: model Y-up → Z-up

function triCount(mesh) { return mesh.indices.length / 3; }

export function stlBinary(mesh, name = 'part') {
  const nt = triCount(mesh);
  const buf = new ArrayBuffer(84 + nt * 50);
  const dv = new DataView(buf);
  const head = ('PartCraft binary STL ' + name).slice(0, 79);   // i18n-ignore: STL file header
  for (let i = 0; i < head.length; i++) dv.setUint8(i, head.charCodeAt(i) & 0x7f);
  dv.setUint32(80, nt, true);
  const P = mesh.positions, I = mesh.indices;
  let o = 84;
  for (let t = 0; t < nt; t++) {
    const v = [0, 1, 2].map((k) => zUp(P[I[t * 3 + k] * 3], P[I[t * 3 + k] * 3 + 1], P[I[t * 3 + k] * 3 + 2]));
    const u = [v[1][0] - v[0][0], v[1][1] - v[0][1], v[1][2] - v[0][2]], w = [v[2][0] - v[0][0], v[2][1] - v[0][1], v[2][2] - v[0][2]];
    let n = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]];
    const l = Math.hypot(...n) || 1;
    n = n.map((c) => c / l);
    for (const c of n) { dv.setFloat32(o, c, true); o += 4; }
    for (const p of v) for (const c of p) { dv.setFloat32(o, c, true); o += 4; }
    dv.setUint16(o, 0, true); o += 2;
  }
  return new Uint8Array(buf);
}

// ---------------------------------------------------------------- zip (stored) + 3MF

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
export function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** files: [{ name, data: Uint8Array | string }] → zip bytes (stored, no compression). */
export function zipStored(files) {
  const enc = new TextEncoder();
  const parts = [], central = [];
  let offset = 0;
  for (const f of files) {
    const name = enc.encode(f.name);
    const data = typeof f.data === 'string' ? enc.encode(f.data) : f.data;
    const crc = crc32(data);
    const lh = new DataView(new ArrayBuffer(30));
    lh.setUint32(0, 0x04034b50, true); lh.setUint16(4, 20, true); lh.setUint16(6, 0x0800, true); lh.setUint16(8, 0, true);
    lh.setUint16(10, 0, true); lh.setUint16(12, 0x21, true); lh.setUint32(14, crc, true);
    lh.setUint32(18, data.length, true); lh.setUint32(22, data.length, true); lh.setUint16(26, name.length, true); lh.setUint16(28, 0, true);
    parts.push(new Uint8Array(lh.buffer), name, data);
    const ch = new DataView(new ArrayBuffer(46));
    ch.setUint32(0, 0x02014b50, true); ch.setUint16(4, 20, true); ch.setUint16(6, 20, true); ch.setUint16(8, 0x0800, true); ch.setUint16(10, 0, true);
    ch.setUint16(12, 0, true); ch.setUint16(14, 0x21, true); ch.setUint32(16, crc, true); ch.setUint32(20, data.length, true); ch.setUint32(24, data.length, true);
    ch.setUint16(28, name.length, true); ch.setUint16(30, 0, true); ch.setUint16(32, 0, true); ch.setUint16(34, 0, true); ch.setUint16(36, 0, true);
    ch.setUint32(38, 0, true); ch.setUint32(42, offset, true);
    central.push(new Uint8Array(ch.buffer), name);
    offset += 30 + name.length + data.length;
  }
  const csize = central.reduce((s, b) => s + b.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
  end.setUint32(12, csize, true); end.setUint32(16, offset, true);
  const all = [...parts, ...central, new Uint8Array(end.buffer)];
  const out = new Uint8Array(all.reduce((s, b) => s + b.length, 0));
  let o = 0;
  for (const b of all) { out.set(b, o); o += b.length; }
  return out;
}

const xmlEsc = (s) => String(s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const num = (v) => { const r = Math.abs(v) < 1e-12 ? 0 : v; return Number(r.toPrecision(9)).toString(); };

export function threeMf(mesh, name = 'part') {
  const P = mesh.positions, I = mesh.indices;
  const nv = P.length / 3;
  const out = [];
  out.push('<?xml version="1.0" encoding="UTF-8"?>\n<model unit="millimeter" xml:lang="en-US" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02">\n');
  out.push(` <metadata name="Title">${xmlEsc(name)}</metadata>\n <metadata name="Application">PartCraft</metadata>\n`);
  out.push(' <resources>\n  <object id="1" type="model" name="' + xmlEsc(name) + '">\n   <mesh>\n    <vertices>\n');
  for (let i = 0; i < nv; i++) { const [x, y, z] = zUp(P[i * 3], P[i * 3 + 1], P[i * 3 + 2]); out.push(`     <vertex x="${num(x)}" y="${num(y)}" z="${num(z)}"/>\n`); }
  out.push('    </vertices>\n    <triangles>\n');
  for (let t = 0; t < I.length / 3; t++) out.push(`     <triangle v1="${I[t * 3]}" v2="${I[t * 3 + 1]}" v3="${I[t * 3 + 2]}"/>\n`);
  out.push('    </triangles>\n   </mesh>\n  </object>\n </resources>\n <build>\n  <item objectid="1"/>\n </build>\n</model>\n');
  const types = '<?xml version="1.0" encoding="UTF-8"?>\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>\n';
  const rels = '<?xml version="1.0" encoding="UTF-8"?>\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>\n';
  return zipStored([{ name: '[Content_Types].xml', data: types }, { name: '_rels/.rels', data: rels }, { name: '3D/3dmodel.model', data: out.join('') }]);
}

// ---------------------------------------------------------------- DXF R12

function dxfWriter() {
  const lines = [];
  const w = (code, v) => { lines.push(String(code).padStart(3, ' ')); lines.push(String(v)); };
  const f = (n) => (Math.abs(n) < 1e-12 ? '0.0' : Number(n.toPrecision(15)).toString());
  return { lines, w, f };
}

function dxfHead(w, f, layers, ext, { dashed = false } = {}) {
  w(0, 'SECTION'); w(2, 'HEADER');
  w(9, '$ACADVER'); w(1, 'AC1009');
  w(9, '$INSBASE'); w(10, '0.0'); w(20, '0.0'); w(30, '0.0');
  if (ext) { w(9, '$EXTMIN'); w(10, f(ext.x0)); w(20, f(ext.y0)); w(30, '0.0'); w(9, '$EXTMAX'); w(10, f(ext.x1)); w(20, f(ext.y1)); w(30, '0.0'); }
  // Millimetres, said twice (FX.208, Discord 2026-11-11): R12 itself has no units variable, so a strict R12 reader
  // skips $INSUNITS and assumes inches; $MEASUREMENT 1 (metric) is the second variable many readers check.
  w(9, '$INSUNITS'); w(70, 4);
  w(9, '$MEASUREMENT'); w(70, 1);
  w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'TABLES');
  w(0, 'TABLE'); w(2, 'LTYPE'); w(70, dashed ? 2 : 1);
  // i18n-ignore: DXF linetype description (file content)
  w(0, 'LTYPE'); w(2, 'CONTINUOUS'); w(70, 0); w(3, 'Solid line'); w(72, 65); w(73, 0); w(40, '0.0');
  if (dashed) { w(0, 'LTYPE'); w(2, 'DASHED'); w(70, 0); w(3, '__ __ __'); w(72, 65); w(73, 2); w(40, '9.0'); w(49, '6.0'); w(49, '-3.0'); }
  w(0, 'ENDTAB');
  w(0, 'TABLE'); w(2, 'LAYER'); w(70, layers.length);
  for (const [name, color, lt] of layers) { w(0, 'LAYER'); w(2, name); w(70, 0); w(62, color); w(6, lt || 'CONTINUOUS'); }
  w(0, 'ENDTAB');
  w(0, 'TABLE'); w(2, 'STYLE'); w(70, 1);
  w(0, 'STYLE'); w(2, 'STANDARD'); w(70, 0); w(40, '0.0'); w(41, '1.0'); w(50, '0.0'); w(71, 0); w(42, '2.5'); w(3, 'txt'); w(4, '');
  w(0, 'ENDTAB');
  w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'BLOCKS'); w(0, 'ENDSEC');
  w(0, 'SECTION'); w(2, 'ENTITIES');
}

/** A sketch (in its own plane coordinates) as DXF R12. Returns { text, counts }. R12 has no SPLINE entity: a spline
 * goes out as a 2D POLYLINE whose every chord is within SPLINE_DXF_TOL of the curve (closed flag for closed splines). */
export const SPLINE_DXF_TOL = 0.01;
export function dxfSketch(sk) {
  const { lines, w, f } = dxfWriter();
  dxfHead(w, f, [['0', 7], ['PROFILE', 7], ['CONSTRUCTION', 8], ['POINTS', 3]], null);
  const counts = { line: 0, arc: 0, circle: 0, point: 0, spline: 0 };
  const loose = new Set(loosePoints(sk).map((p) => p.id));
  for (const e of sk.entities) {
    const layer = e.construction ? 'CONSTRUCTION' : 'PROFILE';
    if (e.type === 'line') {
      const a = pointXY(sk, e.p1), b = pointXY(sk, e.p2);
      w(0, 'LINE'); w(8, layer); w(10, f(a[0])); w(20, f(a[1])); w(30, '0.0'); w(11, f(b[0])); w(21, f(b[1])); w(31, '0.0'); counts.line++;
    } else if (e.type === 'circle') {
      const c = pointXY(sk, e.c);
      w(0, 'CIRCLE'); w(8, layer); w(10, f(c[0])); w(20, f(c[1])); w(30, '0.0'); w(40, f(e.r)); counts.circle++;
    } else if (e.type === 'arc') {
      const { c, r, a0, sweep } = arcAngles(sk, e);
      const d0 = a0 * 180 / Math.PI, d1 = (a0 + sweep) * 180 / Math.PI;
      const norm = (d) => ((d % 360) + 360) % 360;
      w(0, 'ARC'); w(8, layer); w(10, f(c[0])); w(20, f(c[1])); w(30, '0.0'); w(40, f(r)); w(50, f(norm(d0))); w(51, f(norm(d1))); counts.arc++;
    } else if (e.type === 'spline') {
      let pts;
      try { pts = tessellateTol(splineCurve(sk, e), SPLINE_DXF_TOL); } catch { continue; }
      if (e.closed) pts.pop();
      w(0, 'POLYLINE'); w(8, layer); w(66, 1); w(10, '0.0'); w(20, '0.0'); w(30, '0.0'); w(70, e.closed ? 1 : 0);
      for (const [x, y] of pts) { w(0, 'VERTEX'); w(8, layer); w(10, f(x)); w(20, f(y)); w(30, '0.0'); }
      w(0, 'SEQEND'); w(8, layer);
      counts.spline++;
    } else if (e.type === 'point' && loose.has(e.id)) {
      w(0, 'POINT'); w(8, e.construction ? 'CONSTRUCTION' : 'POINTS'); w(10, f(e.x)); w(20, f(e.y)); w(30, '0.0'); counts.point++;
    }
  }
  w(0, 'ENDSEC'); w(0, 'EOF');
  return { text: lines.join('\r\n') + '\r\n', counts };
}

/** Closed 2D loops as R12 closed 2D POLYLINEs on layer PROFILE. */
export function dxfLoops(loops, circles = null) {
  const { lines, w, f } = dxfWriter();
  let nc = 0;
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const l of loops) for (const [x, y] of l) { x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y); }
  dxfHead(w, f, [['0', 7], ['PROFILE', 7]], loops.length ? { x0, y0, x1, y1 } : null);
  for (const [i, l] of loops.entries()) {
    // circles[i] (faces.js loopCircles): this outline is a whole circle, written as one (0.9.1)
    const c = circles ? circles[i] : null;
    if (c) { w(0, 'CIRCLE'); w(8, 'PROFILE'); w(10, f(c.c[0])); w(20, f(c.c[1])); w(30, '0.0'); w(40, f(c.r)); nc++; continue; }
    w(0, 'POLYLINE'); w(8, 'PROFILE'); w(66, 1); w(10, '0.0'); w(20, '0.0'); w(30, '0.0'); w(70, 1);
    for (const [x, y] of l) { w(0, 'VERTEX'); w(8, 'PROFILE'); w(10, f(x)); w(20, f(y)); w(30, '0.0'); }
    w(0, 'SEQEND'); w(8, 'PROFILE');
  }
  w(0, 'ENDSEC'); w(0, 'EOF');
  return { text: lines.join('\r\n') + '\r\n', counts: { polyline: loops.length - nc, circle: nc } };
}

/**
 * A sheet metal flat pattern (sheet-flat.js) as DXF R12: the outline on layer OUTLINE as LINE / ARC / CIRCLE (other curves as
 * open 2D POLYLINEs), each bend's centre line on layer BEND (dashed) with a TEXT note above it on BEND_NOTES ("UP 90° R2").
 * Returns { text, counts }. labels(b) → the note (the caller's words; ASCII is safest in R12: ° is written as %%d).
 */
export function dxfFlat(flat, labels = (b) => `${b.up ? 'UP' : 'DOWN'} ${+b.angle.toFixed(2)}%%d R${+b.r.toFixed(3)}`) {   // i18n-ignore: the shop note's default wording
  const { lines, w, f } = dxfWriter();
  dxfHead(w, f, [['0', 7], ['OUTLINE', 7], ['BEND', 1, 'DASHED'], ['BEND_NOTES', 1]], flat.box, { dashed: true });
  const counts = { line: 0, arc: 0, circle: 0, polyline: 0, bend: 0, text: 0 };
  for (const s of flat.segs) {
    if (s.type === 'line') { w(0, 'LINE'); w(8, 'OUTLINE'); w(10, f(s.a[0])); w(20, f(s.a[1])); w(30, '0.0'); w(11, f(s.b[0])); w(21, f(s.b[1])); w(31, '0.0'); counts.line++; }
    else if (s.type === 'circle') { w(0, 'CIRCLE'); w(8, 'OUTLINE'); w(10, f(s.c[0])); w(20, f(s.c[1])); w(30, '0.0'); w(40, f(s.r)); counts.circle++; }
    else if (s.type === 'arc') { w(0, 'ARC'); w(8, 'OUTLINE'); w(10, f(s.c[0])); w(20, f(s.c[1])); w(30, '0.0'); w(40, f(s.r)); w(50, f(s.a0)); w(51, f(s.a1)); counts.arc++; }
    else if (s.type === 'poly') {
      w(0, 'POLYLINE'); w(8, 'OUTLINE'); w(66, 1); w(10, '0.0'); w(20, '0.0'); w(30, '0.0'); w(70, 0);
      for (const [x, y] of s.pts) { w(0, 'VERTEX'); w(8, 'OUTLINE'); w(10, f(x)); w(20, f(y)); w(30, '0.0'); }
      w(0, 'SEQEND'); w(8, 'OUTLINE'); counts.polyline++;
    }
  }
  const h = Math.max(1.5, Math.min(5, 0.02 * Math.max(flat.box.x1 - flat.box.x0, flat.box.y1 - flat.box.y0)));
  for (const b of flat.bends) {
    w(0, 'LINE'); w(8, 'BEND'); w(10, f(b.a[0])); w(20, f(b.a[1])); w(30, '0.0'); w(11, f(b.b[0])); w(21, f(b.b[1])); w(31, '0.0'); counts.bend++;
    // the note along the line, a little off it, reading left to right
    let a = Math.atan2(b.b[1] - b.a[1], b.b[0] - b.a[0]);
    if (a > Math.PI / 2 + 1e-9 || a <= -Math.PI / 2 + 1e-9) a += Math.PI;
    const m = [(b.a[0] + b.b[0]) / 2 - Math.sin(a) * h * 0.6, (b.a[1] + b.b[1]) / 2 + Math.cos(a) * h * 0.6];
    w(0, 'TEXT'); w(8, 'BEND_NOTES'); w(10, f(m[0])); w(20, f(m[1])); w(30, '0.0'); w(40, f(h)); w(1, String(labels(b)).replace(/[\r\n]/g, ' ')); w(50, f(a * 180 / Math.PI)); w(72, 1); w(11, f(m[0])); w(21, f(m[1])); w(31, '0.0'); counts.text++;
  }
  w(0, 'ENDSEC'); w(0, 'EOF');
  return { text: lines.join('\r\n') + '\r\n', counts };
}

// ---------------------------------------------------------------- STEP (faceted)

const stepReal = (v) => {
  if (!Number.isFinite(v) || Math.abs(v) < 1e-15) return '0.';
  let s = Number(v.toPrecision(15)).toExponential().toUpperCase();   // 1.2345E+2
  let [m, e] = s.split('E');
  if (!m.includes('.')) m += '.';
  const ex = parseInt(e, 10);
  if (ex === 0) return m;
  return m + 'E' + (ex < 0 ? '-' : '') + String(Math.abs(ex)).padStart(2, '0');
};
const stepStr = (s) => "'" + String(s).replace(/[^\x20-\x7e]/g, '_').replace(/\\/g, '\\\\').replace(/'/g, "''") + "'";

/**
 * STEP faceted solid, AP242 (the default) or AP214 (schema 'AP214': automotive_design, for programs that read only that;
 * 0.4 K.6). Planar regions become one FACE_SURFACE each (outer POLY_LOOP plus holes) on a PLANE; curved surfaces stay as
 * their triangles. Every loop keeps all its mesh vertices, so neighbouring faces share points exactly and the shell closes.
 */
export function stepFaceted(mesh, name = 'part', { date = new Date(), schema = 'AP242' } = {}) {
  const ap214 = schema === 'AP214';
  const P = mesh.positions;
  const ents = [];
  const add = (s) => { ents.push(s); return '#' + ents.length; };
  const iso = date.toISOString().slice(0, 19);
  const nm = stepStr(name);
  const ctx = add(ap214 ? "APPLICATION_CONTEXT('core data for automotive mechanical design processes')" : "APPLICATION_CONTEXT('managed model based 3d engineering')");   // i18n-ignore: STEP file content
  add(ap214 ? `APPLICATION_PROTOCOL_DEFINITION('international standard','automotive_design',2000,${ctx})` : `APPLICATION_PROTOCOL_DEFINITION('international standard','ap242_managed_model_based_3d_engineering',2011,${ctx})`);
  const pctx = add(`PRODUCT_CONTEXT('',${ctx},'mechanical')`);
  const prod = add(`PRODUCT(${nm},${nm},'',(${pctx}))`);
  add(`PRODUCT_RELATED_PRODUCT_CATEGORY('part',$,(${prod}))`);
  const pdf = add(`PRODUCT_DEFINITION_FORMATION('','',${prod})`);
  const pdc = add(`PRODUCT_DEFINITION_CONTEXT('part definition',${ctx},'design')`);
  const pd = add(`PRODUCT_DEFINITION('design','',${pdf},${pdc})`);
  const pds = add(`PRODUCT_DEFINITION_SHAPE('','',${pd})`);
  const lu = add('(LENGTH_UNIT()NAMED_UNIT(*)SI_UNIT(.MILLI.,.METRE.))');
  const au = add('(NAMED_UNIT(*)PLANE_ANGLE_UNIT()SI_UNIT($,.RADIAN.))');
  const su = add('(NAMED_UNIT(*)SI_UNIT($,.STERADIAN.)SOLID_ANGLE_UNIT())');
  const unc = add(`UNCERTAINTY_MEASURE_WITH_UNIT(LENGTH_MEASURE(1.E-06),${lu},'distance_accuracy_value','confusion accuracy')`);
  // i18n-ignore: STEP file content
  const gctx = add(`(GEOMETRIC_REPRESENTATION_CONTEXT(3)GLOBAL_UNCERTAINTY_ASSIGNED_CONTEXT((${unc}))GLOBAL_UNIT_ASSIGNED_CONTEXT((${lu},${au},${su}))REPRESENTATION_CONTEXT('Context #1','3D Context with UNIT and UNCERTAINTY'))`);
  const o0 = add("CARTESIAN_POINT('',(0.,0.,0.))");
  const zA = add("DIRECTION('',(0.,0.,1.))"), xA = add("DIRECTION('',(1.,0.,0.))");
  const place = add(`AXIS2_PLACEMENT_3D('',${o0},${zA},${xA})`);

  const vref = new Map();
  const vp = (v) => {
    let r = vref.get(v);
    if (!r) { r = add(`CARTESIAN_POINT('',(${stepReal(P[v * 3])},${stepReal(P[v * 3 + 1])},${stepReal(P[v * 3 + 2])}))`); vref.set(v, r); }
    return r;
  };
  const { groups } = planarGroups(mesh);
  const faces = [];
  let planarFaces = 0;
  for (const g of groups) {
    const loops = boundaryLoops(mesh, g.tris);
    if (!loops.length) continue;
    // outer loop = the one with the largest area (signed area along the normal is positive)
    const areaOf = (l) => {
      let s = [0, 0, 0];
      for (let i = 0; i < l.length; i++) {
        const a = l[i], b = l[(i + 1) % l.length];
        const ax = P[a * 3], ay = P[a * 3 + 1], az = P[a * 3 + 2], bx = P[b * 3], by = P[b * 3 + 1], bz = P[b * 3 + 2];
        s = [s[0] + ay * bz - az * by, s[1] + az * bx - ax * bz, s[2] + ax * by - ay * bx];
      }
      return (s[0] * g.n[0] + s[1] * g.n[1] + s[2] * g.n[2]) / 2;
    };
    loops.sort((a, b) => areaOf(b) - areaOf(a));
    const bounds = loops.map((l, i) => {
      const pl = add(`POLY_LOOP('',(${l.map(vp).join(',')}))`);
      return add(`${i === 0 ? 'FACE_OUTER_BOUND' : 'FACE_BOUND'}('',${pl},.T.)`);
    });
    const n = g.n;
    let xd = Math.abs(n[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
    const dd = xd[0] * n[0] + xd[1] * n[1] + xd[2] * n[2];
    xd = [xd[0] - dd * n[0], xd[1] - dd * n[1], xd[2] - dd * n[2]];
    const xl = Math.hypot(...xd); xd = xd.map((c) => c / xl);
    const v0 = loops[0][0];
    const ap = add(`AXIS2_PLACEMENT_3D('',${vp(v0)},${add(`DIRECTION('',(${n.map(stepReal).join(',')}))`)},${add(`DIRECTION('',(${xd.map(stepReal).join(',')}))`)})`);
    const plane = add(`PLANE('',${ap})`);
    faces.push(add(`FACE_SURFACE('',(${bounds.join(',')}),${plane},.T.)`));
    if (g.tris.length > 1) planarFaces++;
  }
  const shell = add(`CLOSED_SHELL('',(${faces.join(',')}))`);
  const brep = add(`FACETED_BREP(${nm},${shell})`);
  const rep = add(`FACETED_BREP_SHAPE_REPRESENTATION(${nm},(${place},${brep}),${gctx})`);
  add(`SHAPE_DEFINITION_REPRESENTATION(${pds},${rep})`);
  const head = [
    'ISO-10303-21;', 'HEADER;',
    "FILE_DESCRIPTION(('PartCraft faceted solid'),'2;1');",
    `FILE_NAME(${stepStr(name + '.step')},'${iso}',(''),(''),'PartCraft','PartCraft','');`,
    ap214 ? "FILE_SCHEMA(('AUTOMOTIVE_DESIGN { 1 0 10303 214 1 1 1 1 }'));" : "FILE_SCHEMA(('AP242_MANAGED_MODEL_BASED_3D_ENGINEERING_MIM_LF { 1 0 10303 442 1 1 4 }'));",
    'ENDSEC;', 'DATA;',
  ];
  const body = ents.map((e, i) => `#${i + 1}=${e};`);
  return { text: [...head, ...body, 'ENDSEC;', 'END-ISO-10303-21;', ''].join('\n'), counts: { faces: faces.length, planarFaces, points: vref.size } };
}
