/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-export.js — IFC4 export of a part or an assembly with every property (0.5 WL.32; DOM-free, no library).
 * Written by hand as ISO 10303-21 text (DetailCraft's ifc.js does the same; this is PartCraft's own copy of the idea).
 *
 *   partIfc(part, regen, { now }) → { text, counts: { elements, psets, properties, triangles } }
 *   assemblyIfc(asm, builds, world, { now, readPart }) → same; builds = Map(pid → regenerate() result), world =
 *     Map(instance id → 4×4 column-major, PartCraft's Y-up), readPart(text) → part (part.js; passed in so this module needs
 *     no part.js)
 *
 * Structure: IfcProject → IfcSite → IfcBuilding → IfcBuildingStorey "PartCraft" (viewers want a spatial home). A part is one
 * IfcBuildingElementProxy (ObjectType "Part") whose body is an IfcTriangulatedFaceSet of the built mesh (millimetres;
 * PartCraft's Y up becomes IFC's Z up: (x, y, z) → (x, −z, y)). An assembly is an IfcElementAssembly aggregating one
 * occurrence per instance, each an IfcBuildingElementProxy placed where the assembly puts it, typed by one
 * IfcBuildingElementProxyType per part (its geometry once, as a representation map; its properties once).
 *
 * itemIfc(item, { now, fileName, variant, library }) → { text, counts }   0.7 W3.19: a LibraryCraft item (format 1, Z up, one
 *   variant already chosen by libitem.js itemAsVariant) as IFC4: one IfcBuildingElementProxy with the item's body, in
 *   CadCraft_LibraryItem (name, kind, category, uuid, version, hash, license, maker, model, variant), CadCraft_Variant (the
 *   variant's parameter values) and CadCraft_Ports (one property per port); quantities from the body.
 *
 * Properties ("every property"): on the part (on the type in an assembly)
 *   PartCraft_Part        Name, PartNumber, Description (assembly part props), Material, Density (kg/m³), Configuration
 *                         (the active one), Bodies (count)
 *   PartCraft_Parameters  every user parameter: its value (IfcReal; mm, degrees or a plain number as the part uses it),
 *                         its expression and note in the property's Description
 *   PartCraft_TitleBlock  the drawing's title-block fields that are filled (title, number, rev, company, drawn/checked/
 *                         approved by, date, finish, tolerance) and the sheet size
 *   + IfcMaterial (IfcRelAssociatesMaterial) when the part has one
 * on each element / occurrence
 *   PartCraft_Instance    (assembly) InstanceName, InstanceId, Item (its BOM item number), Grounded
 *   Qto_BuildingElementProxyQuantities  NetVolume (m³), NetSurfaceArea (m²)
 *   PartCraft_Quantities  NetWeight (kg, with a material), OverallLength / OverallWidth / OverallDepth (the box, IFC axes, mm)
 * GlobalIds come from the part's (assembly's) name and the item, so the same file exports with the same ids.
 */

const B64 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$';

/** 128 bits from a string (cyrb128) → a 22-character IFC GlobalId. */
export function guidFor(seed) {
  let h1 = 1779033703, h2 = 3144134277, h3 = 1013904242, h4 = 2773480762;
  for (let i = 0; i < seed.length; i++) {
    const k = seed.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067); h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213); h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067); h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213); h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  h1 ^= h2 ^ h3 ^ h4; h2 ^= h1; h3 ^= h1; h4 ^= h1;
  let n = 0n;
  for (const h of [h1, h2, h3, h4]) n = (n << 32n) | BigInt(h >>> 0);
  let s = '';
  for (let i = 0; i < 22; i++) { s = B64[Number(n & 63n)] + s; n >>= 6n; }
  return s;
}

/** A STEP real with at most `digits` decimals (coordinates, directions): always with a decimal point. */
export function R(v, digits = 6) {
  if (!Number.isFinite(v)) return '0.';
  let s = (Math.abs(v) < 0.5 * 10 ** -digits ? 0 : v).toFixed(digits).replace(/(\.\d*?)0+$/, '$1');
  if (!s.includes('.')) s += '.';
  return s === '-0.' ? '0.' : s;
}
/** A STEP real to 12 significant digits (quantities, values), exponent as E-9. */
export function Rq(v) {
  if (!Number.isFinite(v)) return '0.';
  let s = String(Number(v.toPrecision(12)));
  if (s.includes('e')) { const [m, e] = s.split('e'); return (m.includes('.') ? m : m + '.') + 'E' + e.replace('+', ''); }
  return s.includes('.') ? s : s + '.';
}
/** A STEP string: '' for a quote, \\ for a backslash, \X2\…\X0\ for anything outside printable ASCII. */
export function S(str) {
  let out = '';
  for (const ch of String(str ?? '')) {
    const c = ch.codePointAt(0);
    if (c === 39) out += "''";
    else if (c === 92) out += '\\\\';
    else if (c >= 32 && c < 127) out += ch;
    else {
      const units = [];
      for (let i = 0; i < ch.length; i++) units.push(ch.charCodeAt(i).toString(16).toUpperCase().padStart(4, '0'));
      out += '\\X2\\' + units.join('') + '\\X0\\';
    }
  }
  return "'" + out + "'";
}

class Step {
  constructor() { this.lines = []; this.n = 0; this.cache = new Map(); }
  add(s) { this.n++; this.lines.push('#' + this.n + '=' + s + ';'); return '#' + this.n; }
  once(s) { if (!this.cache.has(s)) this.cache.set(s, this.add(s)); return this.cache.get(s); }
  pt(p) { return this.once('IFCCARTESIANPOINT((' + p.map((v) => R(v)).join(',') + '))'); }
  dir(d) { return this.once('IFCDIRECTION((' + d.map((v) => R(v, 12)).join(',') + '))'); }
}

/** PartCraft (Y up) → IFC (Z up): (x, y, z) → (x, −z, y). */
const toZ = (p) => [p[0], -p[2], p[1]];

/** The header, project, units and spatial structure every file has. */
function begin(name, seed, now, storeyName = 'PartCraft') {
  const w = new Step();
  const O = w.pt([0, 0, 0]);
  const WCS = w.add('IFCAXIS2PLACEMENT3D(' + O + ',$,$)');
  const ctx = w.add("IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05," + WCS + ',$)');
  const body = w.add("IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*," + ctx + ',$,.MODEL_VIEW.,$)');
  const kg = w.add('IFCSIUNIT(*,.MASSUNIT.,.KILO.,.GRAM.)');
  const metre = w.add('IFCSIUNIT(*,.LENGTHUNIT.,$,.METRE.)');   // for the density's unit only (lengths are millimetres)
  const density = w.add('IFCDERIVEDUNIT((' + w.add('IFCDERIVEDUNITELEMENT(' + kg + ',1)') + ',' + w.add('IFCDERIVEDUNITELEMENT(' + metre + ',-3)') + '),.MASSDENSITYUNIT.,$)');
  const units = [
    w.add('IFCSIUNIT(*,.LENGTHUNIT.,.MILLI.,.METRE.)'), w.add('IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)'),
    w.add('IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)'), w.add('IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)'), kg, density,
  ];
  const ua = w.add('IFCUNITASSIGNMENT((' + units.join(',') + '))');
  const project = w.add('IFCPROJECT(' + S(seed('project')) + ',$,' + S(name) + ',$,$,$,$,(' + ctx + '),' + ua + ')');
  const siteLP = w.add('IFCLOCALPLACEMENT($,' + WCS + ')');
  const site = w.add('IFCSITE(' + S(seed('site')) + ",$,'Site',$,$," + siteLP + ',$,$,.ELEMENT.,$,$,$,$,$)');
  const bldLP = w.add('IFCLOCALPLACEMENT(' + siteLP + ',' + WCS + ')');
  const bld = w.add('IFCBUILDING(' + S(seed('building')) + ",$,'Building',$,$," + bldLP + ',$,$,.ELEMENT.,$,$,$)');
  const stLP = w.add('IFCLOCALPLACEMENT(' + bldLP + ',' + WCS + ')');
  const storey = w.add('IFCBUILDINGSTOREY(' + S(seed('storey')) + ',$,' + S(storeyName) + ',$,$,' + stLP + ',$,$,.ELEMENT.,0.)');
  w.add('IFCRELAGGREGATES(' + S(seed('rel-site')) + ',$,$,$,' + project + ',(' + site + '))');
  w.add('IFCRELAGGREGATES(' + S(seed('rel-bld')) + ',$,$,$,' + site + ',(' + bld + '))');
  w.add('IFCRELAGGREGATES(' + S(seed('rel-storey')) + ',$,$,$,' + bld + ',(' + storey + '))');
  const counts = { elements: 0, psets: 0, properties: 0, triangles: 0 };
  return { w, WCS, body, storey, stLP, seed, name, now, counts };
}

function finish(F, fileName, system = 'PartCraft') {
  const ts = F.now.toISOString().slice(0, 19);
  const head = [
    'ISO-10303-21;', 'HEADER;',
    "FILE_DESCRIPTION(('ViewDefinition [ReferenceView_V1.2]'),'2;1');",
    'FILE_NAME(' + S(fileName) + ',' + S(ts) + ",(''),(''),'" + system + "','" + system + "','');",
    "FILE_SCHEMA(('IFC4'));", 'ENDSEC;', 'DATA;',
  ];
  return { text: [...head, ...F.w.lines, 'ENDSEC;', 'END-ISO-10303-21;', ''].join('\n'), counts: F.counts };
}

/** An IfcTriangulatedFaceSet of a mesh ({ positions, indices }), Z up. */
function faceSet(F, mesh) {
  const { w } = F, P = mesh.positions, I = mesh.indices;
  const pts = [];
  for (let i = 0; i < P.length; i += 3) pts.push('(' + toZ([P[i], P[i + 1], P[i + 2]]).map((v) => R(v)).join(',') + ')');
  const tris = [];
  for (let i = 0; i < I.length; i += 3) tris.push('(' + (I[i] + 1) + ',' + (I[i + 1] + 1) + ',' + (I[i + 2] + 1) + ')');
  F.counts.triangles += I.length / 3;
  const list = w.add('IFCCARTESIANPOINTLIST3D((' + pts.join(',') + '),$)');
  return w.add('IFCTRIANGULATEDFACESET(' + list + ',$,.T.,(' + tris.join(',') + '),$)');
}
const shapeRep = (F, items, type) => F.w.add('IFCSHAPEREPRESENTATION(' + F.body + ",'Body'," + S(type) + ',(' + items.join(',') + '))');

/** A property: [name, value (string | number | boolean | { measure, v }), description?]. Empty ones are left out. */
function prop(F, [name, value, desc]) {
  if (value === null || value === undefined || value === '') return null;
  let v;
  if (typeof value === 'boolean') v = 'IFCBOOLEAN(' + (value ? '.T.' : '.F.') + ')';
  else if (typeof value === 'number') v = 'IFCREAL(' + Rq(value) + ')';
  else if (typeof value === 'object') v = value.measure + '(' + (typeof value.v === 'number' ? Rq(value.v) : S(value.v)) + ')';
  else v = 'IFCLABEL(' + S(String(value).slice(0, 255)) + ')';
  F.counts.properties++;
  return F.w.add('IFCPROPERTYSINGLEVALUE(' + S(name) + ',' + (desc ? S(String(desc).slice(0, 255)) : '$') + ',' + v + ',$)');
}
/** A property set → its id (null when every property is empty). */
function pset(F, key, name, props) {
  const ids = props.map((p) => prop(F, p)).filter(Boolean);
  if (!ids.length) return null;
  F.counts.psets++;
  return F.w.add('IFCPROPERTYSET(' + S(F.seed(key + '|' + name)) + ',$,' + S(name) + ',$,(' + ids.join(',') + '))');
}
const relProps = (F, key, objects, set) => F.w.add('IFCRELDEFINESBYPROPERTIES(' + S(F.seed('rdp|' + key)) + ',$,$,$,(' + objects.join(',') + '),' + set + ')');

/** The quantities of a built part: IfcElementQuantity sets (volume, area; mass, box). */
function quantities(F, key, stats, material) {
  const { w } = F, out = [];
  if (!stats) return out;
  const q = (type, name, v) => (Number.isFinite(v) ? w.add('IFCQUANTITY' + type + '(' + S(name) + ',$,$,' + Rq(v) + ',$)') : null);
  const std = [q('VOLUME', 'NetVolume', stats.volume * 1e-9), q('AREA', 'NetSurfaceArea', stats.area * 1e-6)].filter(Boolean);
  if (std.length) out.push(w.add('IFCELEMENTQUANTITY(' + S(F.seed('qto|' + key)) + ",$,'Qto_BuildingElementProxyQuantities',$,$,(" + std.join(',') + '))'));
  const lo = toZ(stats.bbox.min), hi = toZ(stats.bbox.max), size = [0, 1, 2].map((k) => Math.abs(hi[k] - lo[k]));
  const own = [
    material ? q('WEIGHT', 'NetWeight', stats.volume * material.density * 1e-6) : null,   // mm³ × g/cm³ = 1e-3 g → kg ×1e-6
    q('LENGTH', 'OverallLength', size[0]), q('LENGTH', 'OverallWidth', size[1]), q('LENGTH', 'OverallDepth', size[2]),
  ].filter(Boolean);
  if (own.length) out.push(w.add('IFCELEMENTQUANTITY(' + S(F.seed('qpc|' + key)) + ",$,'PartCraft_Quantities',$,$,(" + own.join(',') + '))'));
  F.counts.psets += out.length;
  return out;
}

/** The value of each user parameter (params.js evaluateVars' result is passed in: values + errors). */
function parameterProps(part, evaluate) {
  const vars = part.params?.vars || [];
  if (!vars.length) return [];
  const ev = evaluate(part.params);
  return vars.map((v) => {
    const val = ev.values.get(v.name);
    const desc = [String(v.expr) !== String(val) ? '= ' + v.expr : '', v.note || ''].filter(Boolean).join('; ');
    return [v.name, Number.isFinite(val) ? val : null, desc];
  });
}

/** The part-level property sets of a part (and assembly part properties when given). → [pset ids] */
function partPsets(F, key, part, extra, evaluate) {
  const mat = extra?.material || part.material || null;
  const sets = [];
  sets.push(pset(F, key, 'PartCraft_Part', [
    ['Name', extra?.name || part.name], ['PartNumber', extra?.number], ['Description', extra?.description],
    ['Material', mat?.name], ['Density', mat ? { measure: 'IFCMASSDENSITYMEASURE', v: mat.density * 1000 } : null],
    ['Configuration', part.configs?.active || null], ['Bodies', Number.isFinite(extra?.bodies) ? extra.bodies : null],
  ]));
  sets.push(pset(F, key, 'PartCraft_Parameters', parameterProps(part, evaluate)));
  const tb = part.drawing?.title || {};
  const TB = [['Title', 'title'], ['DrawingNumber', 'number'], ['Revision', 'rev'], ['Company', 'company'], ['DrawnBy', 'drawnBy'], ['CheckedBy', 'checkedBy'], ['ApprovedBy', 'approvedBy'], ['Date', 'date'], ['Finish', 'finish'], ['GeneralTolerance', 'tolerance']];
  sets.push(pset(F, key, 'PartCraft_TitleBlock', [...TB.map(([n, k]) => [n, tb[k]]), ['SheetSize', part.drawing?.sheet ? String(part.drawing.sheet).toUpperCase() : null]]));
  return sets.filter(Boolean);
}

/** IfcMaterial + its association with `objects` (one material per name). */
function material(F, mats, mat, objects, key) {
  if (!mat || !objects.length) return;
  let m = mats.get(mat.name);
  if (!m) { m = F.w.add('IFCMATERIAL(' + S(mat.name) + ',$,$)'); mats.set(mat.name, m); }
  F.w.add('IFCRELASSOCIATESMATERIAL(' + S(F.seed('mat|' + key)) + ',$,$,$,(' + objects.join(',') + '),' + m + ')');
}

/** A part as IFC. regen = the kernel's result (mesh + stats). evaluate = params.js evaluateVars. */
export function partIfc(part, regen, { now = new Date(), evaluate, fileName = (part.name || 'Part') + '.ifc' } = {}) {
  if (!regen?.mesh) throw new Error('partIfc: the part has no solid');   // i18n-ignore: the caller checks first
  const name = part.name || 'Part';
  const F = begin(name, (k) => guidFor('partcraft|' + name + '|' + k), now);
  const { w } = F;
  const rep = shapeRep(F, [faceSet(F, regen.mesh)], 'Tessellation');
  const pds = w.add('IFCPRODUCTDEFINITIONSHAPE($,$,(' + rep + '))');
  const lp = w.add('IFCLOCALPLACEMENT(' + F.stLP + ',' + F.WCS + ')');
  const tag = part.drawing?.title?.number || null;
  const el = w.add('IFCBUILDINGELEMENTPROXY(' + S(F.seed('part')) + ',$,' + S(name) + ',$,' + S('Part') + ',' + lp + ',' + pds + ',' + (tag ? S(tag) : '$') + ',.USERDEFINED.)');
  F.counts.elements++;
  w.add('IFCRELCONTAINEDINSPATIALSTRUCTURE(' + S(F.seed('contained')) + ',$,$,$,(' + el + '),' + F.storey + ')');
  const bodies = regen.stats?.bodies;
  partPsets(F, 'part', part, { bodies }, evaluate).forEach((s, i) => relProps(F, 'part|' + i, [el], s));
  quantities(F, 'part', regen.stats, part.material).forEach((s, i) => relProps(F, 'partq|' + i, [el], s));
  material(F, new Map(), part.material, [el], 'part');
  return finish(F, fileName);
}

/** A library item's body (box or mesh, Z up, mm) as a PartCraft-style mesh (Y up) for faceSet(): (x, y, z) → (x, z, −y). */
export function bodyMeshYUp(body) {
  let P, I;
  if (body.type === 'box') {
    const { x, y, z, w, d, h } = body;
    P = []; for (const dz of [0, h]) for (const [dx, dy] of [[0, 0], [w, 0], [w, d], [0, d]]) P.push(x + dx, y + dy, z + dz);
    I = [0, 2, 1, 0, 3, 2, 4, 5, 6, 4, 6, 7, 0, 1, 5, 0, 5, 4, 1, 2, 6, 1, 6, 5, 2, 3, 7, 2, 7, 6, 3, 0, 4, 3, 4, 7];
  } else { P = body.positions; I = body.indices; }
  const out = new Array(P.length);
  for (let i = 0; i < P.length; i += 3) { out[i] = P[i]; out[i + 1] = P[i + 2]; out[i + 2] = -P[i + 1]; }
  return { positions: out, indices: I };
}

/** Volume, area and box of a mesh (any axes) for the quantities. */
function meshStats(mesh) {
  const P = mesh.positions, I = mesh.indices;
  let vol = 0, area = 0;
  const min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < P.length; i += 3) for (let k = 0; k < 3; k++) { min[k] = Math.min(min[k], P[i + k]); max[k] = Math.max(max[k], P[i + k]); }
  for (let t = 0; t < I.length; t += 3) {
    const a = I[t] * 3, b = I[t + 1] * 3, c = I[t + 2] * 3;
    const ux = P[b] - P[a], uy = P[b + 1] - P[a + 1], uz = P[b + 2] - P[a + 2], vx = P[c] - P[a], vy = P[c + 1] - P[a + 1], vz = P[c + 2] - P[a + 2];
    const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    area += Math.hypot(nx, ny, nz) / 2;
    vol += (P[a] * (P[b + 1] * P[c + 2] - P[b + 2] * P[c + 1]) - P[a + 1] * (P[b] * P[c + 2] - P[b + 2] * P[c]) + P[a + 2] * (P[b] * P[c + 1] - P[b + 1] * P[c])) / 6;
  }
  return { volume: Math.abs(vol), area, bbox: { min, max } };
}

/** A library item as IFC4 (0.7 W3.19). `item` is format 1 with a body, one variant already chosen (libitem.js itemAsVariant);
 * `variant` = { id, name, values } of that choice (omit for an item without variants); `library` = { uuid, version, sha256, license,
 * holder, url } for the file's credit. */
export function itemIfc(item, { now = new Date(), fileName = (item.name || 'Item') + '.ifc', variant = null, library = {} } = {}) {
  if (!item?.body) throw new Error('itemIfc: the item has no body');   // i18n-ignore: the caller checks first
  const name = variant ? `${item.name} — ${variant.name}` : String(item.name || 'Item');
  const F = begin(name, (k) => guidFor('librarycraft|' + (item.uuid || item.name) + '|' + (variant?.id || '') + '|' + k), now, 'Library');
  const { w } = F;
  const mesh = bodyMeshYUp(item.body);
  const rep = shapeRep(F, [faceSet(F, mesh)], 'Tessellation');
  const pds = w.add('IFCPRODUCTDEFINITIONSHAPE($,$,(' + rep + '))');
  const lp = w.add('IFCLOCALPLACEMENT(' + F.stLP + ',' + F.WCS + ')');
  const el = w.add('IFCBUILDINGELEMENTPROXY(' + S(F.seed('item')) + ',$,' + S(name) + ',$,' + S(item.category || 'Item') + ',' + lp + ',' + pds + ',$,.USERDEFINED.)');
  F.counts.elements++;
  w.add('IFCRELCONTAINEDINSPATIALSTRUCTURE(' + S(F.seed('contained')) + ',$,$,$,(' + el + '),' + F.storey + ')');
  const sets = [pset(F, 'item', 'CadCraft_LibraryItem', [
    ['Name', item.name], ['Kind', item.kind], ['Category', item.category], ['Description', item.description || null], ['Maker', item.maker || null], ['Model', item.model || null],
    ['ItemUuid', library.uuid || item.uuid || null], ['ItemVersion', library.version ?? item.version ?? null], ['ItemSha256', library.sha256 || null],
    ['Variant', variant?.id || null], ['VariantName', variant?.name || null],
    ['License', library.license || item.license?.id || null], ['LicenseHolder', library.holder || item.license?.holder || null], ['Source', library.url || null],
    ['IfcClass', item.ifc?.class || null],
  ])];
  if (variant) sets.push(pset(F, 'variant', 'CadCraft_Variant', Object.entries(variant.values || {}).map(([k, v]) => [k, typeof v === 'number' || typeof v === 'string' ? v : null])));
  sets.push(pset(F, 'ports', 'CadCraft_Ports', (item.ports || []).map((p) => [p.name, `${p.system}, ${p.direction}, ${p.shape} ${p.size}${p.h ? ' × ' + p.h : ''} mm${p.nominal ? ', nominal ' + p.nominal : ''}; at ${p.x}, ${p.y}, ${p.z} mm`])));
  sets.filter(Boolean).forEach((s, i) => relProps(F, 'item|' + i, [el], s));
  const st = meshStats(mesh);
  quantities(F, 'item', st, null).forEach((s, i) => relProps(F, 'itemq|' + i, [el], s));
  return finish(F, fileName, 'CadCraft LibraryCraft');
}

/** 4×4 column-major rigid matrix (Y up) → IFC axis placement (Z up): location, Axis (local z), RefDirection (local x). */
function placementOf(F, M) {
  const col = (j) => [M[j * 4], M[j * 4 + 1], M[j * 4 + 2]];
  const C = (v) => toZ(v);
  // the matrix in IFC axes: C · M · C⁻¹; its columns are C of M's columns taken in IFC order (x, −z, y)
  const ex = C(col(0)), ey = C(col(2)).map((v) => -v), ez = C(col(1));   // images of IFC's x, y, z
  void ey;
  const o = C(col(3));
  return F.w.add('IFCAXIS2PLACEMENT3D(' + F.w.pt(o) + ',' + F.w.dir(ez) + ',' + F.w.dir(ex) + ')');
}

/** An assembly as IFC: one type per part (geometry + part properties), one placed occurrence per instance. */
export function assemblyIfc(asm, builds, world, { now = new Date(), evaluate, readPart, fileName = (asm.name || 'Assembly') + '.ifc', bom = null } = {}) {
  const name = asm.name || 'Assembly';
  const F = begin(name, (k) => guidFor('partcraft-asm|' + name + '|' + k), now);
  const { w } = F;
  const lp = w.add('IFCLOCALPLACEMENT(' + F.stLP + ',' + F.WCS + ')');
  const assembly = w.add('IFCELEMENTASSEMBLY(' + S(F.seed('assembly')) + ',$,' + S(name) + ',$,' + S('Assembly') + ',' + lp + ',$,$,.FACTORY.,.USERDEFINED.)');
  F.counts.elements++;
  w.add('IFCRELCONTAINEDINSPATIALSTRUCTURE(' + S(F.seed('contained')) + ',$,$,$,(' + assembly + '),' + F.storey + ')');
  const types = new Map(), mats = new Map(), byType = new Map(), parts = [];
  const item = new Map((bom || []).map((r) => [r.pid, r.item]));
  for (const [pid, p] of Object.entries(asm.parts)) {
    const b = builds.get(pid);
    if (!b?.mesh) continue;
    const part = typeof p.part === 'string' ? readPart(p.part) : p.part;
    const rep = shapeRep(F, [faceSet(F, b.mesh)], 'Tessellation');
    const map = w.add('IFCREPRESENTATIONMAP(' + F.WCS + ',' + rep + ')');
    const sets = partPsets(F, 'type|' + pid, part, { name: p.name, number: p.number, description: p.description, material: p.material, bodies: b.stats?.bodies }, evaluate);
    const ty = w.add('IFCBUILDINGELEMENTPROXYTYPE(' + S(F.seed('type|' + pid)) + ',$,' + S(p.name || part.name || pid) + ',$,$,' + (sets.length ? '(' + sets.join(',') + ')' : '$') + ',(' + map + '),' + (p.number ? S(p.number) : '$') + ',$,.USERDEFINED.)');
    types.set(pid, { ty, map, b, mat: p.material || part.material || null });
    byType.set(pid, []);
  }
  asm.instances.forEach((inst, i) => {
    const T = types.get(inst.part), M = world.get(inst.id);
    if (!T || !M) return;
    const place = w.add('IFCLOCALPLACEMENT(' + lp + ',' + placementOf(F, M) + ')');
    const mapped = w.add('IFCMAPPEDITEM(' + T.map + ',' + w.once('IFCCARTESIANTRANSFORMATIONOPERATOR3D($,$,' + w.pt([0, 0, 0]) + ',1.,$)') + ')');
    const rep = shapeRep(F, [mapped], 'MappedRepresentation');
    const pds = w.add('IFCPRODUCTDEFINITIONSHAPE($,$,(' + rep + '))');
    const p = asm.parts[inst.part];
    const occ = w.add('IFCBUILDINGELEMENTPROXY(' + S(F.seed('inst|' + inst.id)) + ',$,' + S(inst.name || p.name) + ',$,' + S(p.name || 'Part') + ',' + place + ',' + pds + ',' + (p.number ? S(p.number) : '$') + ',.USERDEFINED.)');
    F.counts.elements++;
    parts.push(occ);
    byType.get(inst.part).push(occ);
    const ins = pset(F, 'inst|' + inst.id, 'PartCraft_Instance', [['InstanceName', inst.name], ['InstanceId', inst.id], ['Item', item.get(inst.part) ?? null], ['Grounded', i === 0]]);
    if (ins) relProps(F, 'inst|' + inst.id, [occ], ins);
    quantities(F, 'inst|' + inst.id, T.b.stats, T.mat).forEach((s, k) => relProps(F, 'instq|' + inst.id + '|' + k, [occ], s));
  });
  if (parts.length) w.add('IFCRELAGGREGATES(' + S(F.seed('rel-asm')) + ',$,$,$,' + assembly + ',(' + parts.join(',') + '))');
  for (const [pid, occs] of byType) {
    if (!occs.length) continue;
    const T = types.get(pid);
    w.add('IFCRELDEFINESBYTYPE(' + S(F.seed('rdt|' + pid)) + ',$,$,$,(' + occs.join(',') + '),' + T.ty + ')');
    material(F, mats, T.mat, occs, 'type|' + pid);
  }
  return finish(F, fileName);
}
