/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cs-worker.js — the CraftScript worker's ops (compute-worker.js: host.computeWorker(['cs-worker.js'])). DOM-free; one
 * runtime and one workspace per worker, kept between runs. Protocol (docs/apps/craftscript.md "Worker protocol"):
 *
 *   csRun { source, lang, file, budget, files: [{ name, lang, text }], libBase, part?, bodies? }
 *         → { ok, error?: { message, line, col, file, stack?, stopped? }, vars, steps, ms }
 *         while running, progress messages: { print: text } · { display: cmd } · { file: { name, bytes, mime } } (a script
 *         saved a file: the page offers it as a download)
 *   csWorkspace { op: 'list' } → [{ name, type, size, bytes, min?, max? }] · { op: 'get', name } → value · { op: 'set', name,
 *         value } · { op: 'delete', name } · { op: 'clear' } · { op: 'snapshot' } → { name: value } (no function handles) ·
 *         { op: 'load', vars } (untrusted: checked by cs-values.js readValue; bad entries dropped)
 *   csInfo → { languages: [{ id, name, ext, highlight }], builtins: [{ name, args, doc, module }], formats: { load, save } }
 *   csLoadFile { name, fileName, bytes } → { name, type, size, … }   (cs-lib-io.js load: STL OBJ CSV JSON NPY HDF5)
 *   csSaveFile { names, format } → { fileName, bytes, mime }        (json | h5 | csv | npy; one struct of the variables)
 *   csCheck { source, lang } → { ok, error? }                        (syntax only, for the editor)
 *
 * Library functions: a name is looked up in the part's own scripts (`files`, so they shadow the library) and then in
 * craftlib/ at `libBase` (an absolute URL the page passes: new URL('./craftlib/', import.meta.url).href), using
 * craftlib/index.json to skip names that are not there. Stop = terminate the worker (the page keeps a workspace copy).
 */
import { addOps } from './worker-ops.js';
import { makeRuntime, loadLanguage, languageList, builtinList, IO } from './cs-all.js';
import { readValue, toPlain, typeOf, summary, NAME_RE, CsError } from './cs-values.js';
import { t } from './i18n.js';

let current = null;                       // the running op's ctx (for io's onWrite)
const fsHost = IO.memoryFs({ onWrite: (name, bytes, mime) => { if (current) current.progress({ file: { name, bytes: bytes.slice(), mime } }); } });
IO.setIoHost(fsHost);

let userFiles = new Map();                // name → { source, lang, file }
let libBase = null;
const fetchText = async (url) => { const r = await fetch(url); if (!r.ok) return null; return r.text(); };

/** The function names an index.json lists, for one library folder (craftlib/ or craftlib/eng/). */
const indexCache = new Map();
async function namesOf(root) {
  if (indexCache.has(root)) return indexCache.get(root);
  let names = null;
  try {
    const t = await fetchText(new URL('index.json', root).href);
    if (t) {
      names = new Set();
      const walk = (x, d = 0) => {
        if (d > 8 || !x) return;
        if (Array.isArray(x)) { for (const y of x) walk(y, d + 1); return; }
        if (typeof x === 'object') {
          for (const [k, v] of Object.entries(x)) {
            if (typeof v === 'string' && (k === 'name' || k === 'fn' || k === 'function') && NAME_RE.test(v)) names.add(v);
            if (typeof v === 'string' && /^[A-Za-z][A-Za-z0-9_]*\.craft$/.test(v)) names.add(v.slice(0, -6));
            else walk(v, d + 1);
          }
        } else if (typeof x === 'string' && /^[A-Za-z][A-Za-z0-9_]*\.craft$/.test(x)) names.add(x.slice(0, -6));
      };
      walk(JSON.parse(t));
    }
  } catch { names = null; }
  indexCache.set(root, names);
  return names;
}
async function library(name) {
  const u = userFiles.get(name);
  if (u) return u;
  if (!libBase) return null;
  // craftlib/ first, then the engineering library in craftlib/eng/ (0.8 CE.4: its own folder and index, so a name is found in one place)
  for (const dir of ['', 'eng/']) {
    const root = new URL(dir, libBase).href;
    const idx = await namesOf(root);
    if (idx && !idx.has(name)) continue;
    const text = await fetchText(new URL(name + '.craft', root).href).catch(() => null);
    if (text !== null) return { source: text, file: 'craftlib/' + dir + name + '.craft', lang: 'craft' };
  }
  return null;
}

const rt = makeRuntime({
  onPrint: (t) => current && current.progress({ print: t }),
  onDisplay: (cmd) => current && current.progress({ display: toPlain(cmd) }),
  library,
});
const ws = rt.ws;

const plain = (v) => toPlain(v);

addOps({
  async csRun(args, ctx) {
    const source = String(args.source ?? '');
    if (source.length > 4 * 1024 * 1024) throw new Error(t('script.worker.too_long'));
    rt.budget = Number.isFinite(args.budget) && args.budget > 0 ? Math.min(args.budget, 1e13) : 2e9;
    userFiles = new Map();
    for (const f of Array.isArray(args.files) ? args.files.slice(0, 500) : []) {
      if (!f || typeof f.text !== 'string' || f.lang === 'python') continue;   // a Python tab's functions are Python's own (0.4 P10)
      const base = String(f.name || '').replace(/^.*\//, '').replace(/\.(craft|m|lua)$/i, '');
      if (NAME_RE.test(base)) userFiles.set(base, { source: f.text, file: String(f.name), lang: f.lang === 'lua' ? 'lua' : 'craft' });
    }
    if (typeof args.libBase === 'string' && /^(https?:|blob:|file:)/.test(args.libBase)) libBase = args.libBase.endsWith('/') ? args.libBase : args.libBase + '/';
    // the part's parameters (plain numbers by name; param() / params(), 0.5 WL.30) come with every run
    const params = () => (args.params && typeof args.params === 'object' && !Array.isArray(args.params) ? args.params : {});
    if (args.part !== undefined || args.bodies !== undefined) {
      IO.setIoHost({ ...fsHost, part: () => (args.part ? readValue(args.part) : null), bodies: () => (Array.isArray(args.bodies) ? args.bodies.map(readValue) : []), params });
    } else IO.setIoHost({ ...fsHost, params });
    current = ctx;
    try {
      return await rt.run(source, { lang: typeof args.lang === 'string' ? args.lang : 'craft', file: typeof args.file === 'string' ? args.file.slice(0, 200) : null });
    } finally { current = null; }
  },
  csWorkspace(args) {
    const op = args && args.op;
    switch (op) {
      case 'list': return ws.list();
      case 'get': { if (!ws.has(args.name)) throw new Error(t('script.worker.no_var', { name: String(args.name).slice(0, 64) })); return plain(ws.get(args.name)); }
      case 'set': { if (!NAME_RE.test(args.name)) throw new Error(t('script.worker.bad_name')); ws.set(args.name, readValue(args.value)); return true; }
      case 'delete': ws.delete(args.name); return true;
      case 'clear': ws.clear(); return true;
      case 'snapshot': { const o = {}; for (const [k, v] of ws.map) if (typeOf(v) !== 'func') o[k] = plain(v); return o; }
      case 'load': {
        const dropped = [];
        for (const [k, v] of Object.entries(args.vars || {}).slice(0, 10000)) {
          if (!NAME_RE.test(k)) { dropped.push(k.slice(0, 64)); continue; }
          try { ws.set(k, readValue(v)); } catch { dropped.push(k); }
        }
        return { dropped };
      }
      default: throw new Error(t('script.worker.bad_request'));
    }
  },
  async csInfo() {
    const languages = [];
    for (const l of languageList()) {
      let highlight = null;
      try { highlight = (await loadLanguage(l.id)).highlight || null; } catch { /* the language failed to load: listed without highlighting */ }
      languages.push({ ...l, highlight });
    }
    return { stub: false, languages, builtins: builtinList(), formats: { load: ['stl', 'obj', 'csv', 'json', 'npy', 'h5', 'hdf5'], save: ['json', 'h5', 'csv', 'npy'] } };
  },
  async csLoadFile(args) {
    const name = String(args.name || ''), fileName = String(args.fileName || '').replace(/^.*[\\/]/, '');
    if (!NAME_RE.test(name)) throw new Error(t('script.worker.bad_name'));
    if (!fileName) throw new Error(t('script.worker.no_file_name'));
    fsHost.put(fileName, new Uint8Array(args.bytes || []));
    await IO.prepareIo(fileName);
    const v = IO.loadFile(fileName, {}, 1);
    ws.set(name, v);
    return { name, ...summary(v) };
  },
  async csSaveFile(args) {
    const names = Array.isArray(args.names) && args.names.length ? args.names : ws.names();
    const format = String(args.format || 'json').toLowerCase();
    if (!['json', 'h5', 'csv', 'npy'].includes(format)) throw new Error(t('script.worker.save_format', { ext: format }));
    let value;
    if (format === 'csv' || format === 'npy') {
      if (names.length !== 1) throw new Error(t('script.worker.one_array', { ext: format }));
      value = ws.get(names[0]);
    } else {
      const fields = {};
      for (const n of names) { if (!ws.has(n)) throw new Error(t('script.worker.no_var', { name: n })); const v = ws.get(n); if (typeOf(v) !== 'func') fields[n] = v; }
      value = { t: 'struct', fields };
    }
    if (format === 'h5') await IO.loadH5();
    const fileName = (names.length === 1 ? names[0] : 'workspace') + '.' + format;
    let bytes = null, mime = null;
    const saveHost = { ...fsHost, writeFile: (n, b, m) => { bytes = b; mime = m; } };
    IO.setIoHost(saveHost);
    try { IO.saveFile(fileName, value, {}); } finally { IO.setIoHost(fsHost); }
    if (!bytes) throw new CsError(t('script.worker.nothing_written'));
    return { fileName, bytes, mime };
  },
  async csCheck(args) {
    const lang = typeof args.lang === 'string' ? args.lang : 'craft';
    const a = await loadLanguage(lang);
    return typeof a.check === 'function' ? a.check(String(args.source ?? ''), args.file || null) : { ok: true };
  },
});
