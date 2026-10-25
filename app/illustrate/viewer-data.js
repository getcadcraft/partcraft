/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: the HTML and CSS of the exported file (its words come in through `words`) */
/**
 * illustrate/viewer-data.js — the manual as an interactive 3D file (0.7 TP.9; DOM-free): one HTML file that opens offline in any
 * browser with WebGL 2, with no install, account or tracking. It follows RT.4's file contract (realtime's standalone viewer):
 * the viewer's modules (ours and three.js's, MIT, its notice kept) travel inside the page as text and are loaded as blob: URLs
 * under an import map; a Content-Security-Policy forbids every request, so the file cannot reach the internet.
 *
 *   viewerData(m, meshes, { words, labels }) → data  (format 'partcraft-manual-viewer' 1): the parts' meshes, the placed parts,
 *       the views (camera, each part's place and look, cut, magnifier), the parts list, the animation (anim.js's own format)
 *   rewriteImports(source, names) → source with each import / export-from specifier renamed (names: specifier → bundle key)
 *   viewerHtml({ title, lang, modules: [{ key, source }], data, licence }) → the file's text
 */
import { worldOf, instState, b64encode } from './manual.js';
import { rows as partRows, columnValue } from './parts-list.js';
import { partColour } from './scene3d.js';

export const FORMAT = 'partcraft-manual-viewer';
const bytesOf = (a) => new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
const same16 = (a, b) => a.length === b.length && a.every((x, i) => Math.abs(x - b[i]) < 1e-9);

function viewOf(m, v, name) {
  const world = worldOf(m, v);
  const out = { name, camera: v.camera, world: {}, state: {}, look: { style: v.look?.style || 'outlined', section: v.look?.section || null, box: v.look?.box || null, magnifier: v.look?.magnifier || null } };
  for (const i of m.instances) {
    const M = world.get(i.id);
    if (!same16(M, i.matrix)) out.world[i.id] = [...M];
    const s = instState(v, i.id);
    const st = {};
    if (s.hide) st.h = 1;
    if (s.ghost) st.o = 0.22; else if (s.opacity < 1) st.o = s.opacity;
    if (s.color) st.c = s.color;
    if (Object.keys(st).length) out.state[i.id] = st;
  }
  return out;
}

export function viewerData(m, meshes, { words = {}, labels = (k) => k } = {}) {
  const parts = Object.entries(m.parts).map(([pid, p]) => {
    const mesh = meshes.get(pid);
    return { id: pid, name: p.name, colour: partColour(pid), P: b64encode(bytesOf(Float32Array.from(mesh.positions))), I: b64encode(bytesOf(Uint32Array.from(mesh.indices))) };
  });
  const views = m.views.map((v) => viewOf(m, v, v.name));
  const start = views.length ? views[0] : viewOf(m, m.scene, words.scene || 'Scene');
  const list = partRows(m, meshes);
  const cols = ['item', 'qty', 'number', 'name', 'material'];
  return {
    format: FORMAT, version: 1, title: m.name,
    parts, instances: m.instances.map((i) => ({ id: i.id, part: i.part, name: i.name, m: [...i.matrix] })),
    views, start,
    list: { columns: cols.map((c) => labels(c)), rows: list.map((r) => ({ cells: cols.map((c) => columnValue(r, c)), insts: r.insts })) },
    anim: m.anim || null, animIds: m.animIds?.of || null,
    words,
  };
}

/** Rename module specifiers in import / export-from / dynamic import statements. */
export function rewriteImports(src, names) {
  return src.replace(/(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+)(['"])([^'"\n]+)\2/g, (all, head, q, spec) => (names[spec] ? head + q + names[spec] + q : all));
}

/**
 * The modules a viewer file carries, in load order: where each comes from (a page import specifier, or a file of this folder)
 * and how its own imports are renamed to the bundle's keys.
 */
export const BUNDLE = [
  { key: '@il/three-core', spec: 'three', file: 'three.core.js', names: {} },
  { key: '@il/three', spec: 'three', names: { './three.core.js': '@il/three-core' } },
  { key: '@il/orbit', spec: 'three/addons/controls/OrbitControls.js', names: { three: '@il/three' } },
  { key: '@il/anim', own: 'anim.js', names: {} },
  { key: '@il/app', own: 'viewer-app.js', names: { three: '@il/three', 'three/addons/controls/OrbitControls.js': '@il/orbit', './anim.js': '@il/anim' } },
];
/** The bundle's modules from a loader: load({ spec?, file?, own? }) → source text. */
export async function bundleModules(load) {
  const out = [];
  for (const b of BUNDLE) out.push({ key: b.key, source: rewriteImports(await load(b), b.names) });
  return out;
}

const jsonInScript = (x) => JSON.stringify(x).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function viewerHtml({ title = '', lang = 'en', modules = [], data, licence = '' }) {
  const csp = "default-src 'none'; script-src 'unsafe-inline' blob:; style-src 'unsafe-inline'; img-src data: blob:";
  return `<!doctype html>
<html lang="${esc(lang)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<title>${esc(title)}</title>
<style>
:root { --ink: #1b1b1b; --line: #c9ced4; --accent: #1f5fa8; --bg: #ffffff; --side: #f6f7f8; }
* { box-sizing: border-box; }
html, body { margin: 0; height: 100%; font: 14px/1.4 Helvetica, Arial, sans-serif; color: var(--ink); background: var(--bg); }
#app { display: grid; grid-template-columns: 18rem minmax(0, 1fr); height: 100%; }
#side { overflow: auto; border-right: 1px solid var(--line); background: var(--side); padding: .75rem; }
#side h1 { font-size: 1.1rem; margin: 0 0 .75rem; }
#side h2 { font-size: .85rem; text-transform: none; margin: 1rem 0 .4rem; color: #444; }
#views { list-style: none; margin: 0; padding: 0; display: grid; gap: .25rem; }
#views button { width: 100%; text-align: left; padding: .35rem .5rem; border: 1px solid var(--line); background: #fff; border-radius: 2px; cursor: pointer; font: inherit; }
#views button[aria-current="true"] { border-color: var(--accent); outline: 1px solid var(--accent); }
table { border-collapse: collapse; width: 100%; font-size: .85rem; background: #fff; }
th, td { border: 1px solid var(--line); padding: .15rem .3rem; text-align: left; }
tbody tr { cursor: pointer; }
tbody tr[aria-selected="true"] { background: #fde7c7; }
#stage { position: relative; min-width: 0; }
#stage canvas.main { display: block; width: 100%; height: 100%; touch-action: none; }
#lens { position: absolute; border-radius: 50%; border: 2px solid var(--ink); background: #fff; pointer-events: none; overflow: hidden; }
#play { position: absolute; left: .75rem; right: .75rem; bottom: .75rem; display: flex; gap: .5rem; align-items: center; background: rgba(255,255,255,.92); border: 1px solid var(--line); padding: .35rem .5rem; border-radius: 2px; }
#play input { flex: 1; }
#play button { font: inherit; padding: .2rem .6rem; }
#msg { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; padding: 2rem; }
@media (max-width: 40rem) { #app { grid-template-columns: 1fr; grid-template-rows: 40% 60%; } #side { order: 2; border-right: 0; border-top: 1px solid var(--line); } }
</style>
</head>
<body>
<div id="app"><aside id="side"></aside><div id="stage"></div></div>
<!-- three.js: MIT License (its notice follows) — ${esc(licence.split('\n')[2] || 'Copyright © 2010-2025 three.js authors')} -->
<script type="application/json" id="il-modules">${jsonInScript(modules)}</script>
<script type="application/json" id="il-data">${jsonInScript(data)}</script>
<script type="text/plain" id="il-licence">${esc(licence)}</script>
<script>
(function () {
  var mods = JSON.parse(document.getElementById('il-modules').textContent), map = { imports: {} };
  for (var i = 0; i < mods.length; i++) map.imports[mods[i].key] = URL.createObjectURL(new Blob([mods[i].source], { type: 'text/javascript' }));
  var im = document.createElement('script'); im.type = 'importmap'; im.textContent = JSON.stringify(map); document.head.appendChild(im);
  var app = document.createElement('script'); app.type = 'module';
  app.textContent = "import { start } from '@il/app'; start(JSON.parse(document.getElementById('il-data').textContent));";
  document.body.appendChild(app);
})();
</script>
</body>
</html>
`;
}
