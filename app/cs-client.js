/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cs-client.js — the page's side of the CraftScript worker (DOM-free; Node tests drive it with the ops called directly).
 * One worker per Script workspace session; Stop terminates it, so the page keeps a copy of the workspace (taken after
 * every run, up to CAPS.workspace bytes) and seeds the next worker with it — variables survive Stop.
 *
 *   const eng = createEngine({ makeWorker: () => host.computeWorker(MODULES, { name }), onPrint, onDisplay });
 *   await eng.run(source, { lang, file, budget, files, libBase, part, params }) → { ok, error?: { message, line, col, file }, stopped?, ms, vars }
 *   eng.stop()  ·  eng.busy  ·  await eng.list() → [{ name, type, size, bytes, min?, max? }]
 *   await eng.get(name) · set(name, value) · del(name) · clear() · info() · loadFile(name, fileName, bytes) · snapshot()
 *
 * Worker ops (cs-worker.js; docs/apps/craftscript.md): csRun (print/display/saved files stream through the op's progress
 * messages as { print } / { display } / { file }), csWorkspace { op: list|get|set|delete|clear|snapshot|load },
 * csInfo, csLoadFile, csSaveFile.
 */
import { CAPS, sizeBytes, readValue } from './cs-values.js';
import { t } from './i18n.js';
import { packsForWorker } from './engineer/material-pack.js';

export function createEngine({ makeWorker, onPrint = () => {}, onDisplay = () => {}, onFile = () => {}, mirrorLimit = CAPS.workspace } = {}) {
  let w = null, fresh = true, running = 0, info = null;
  let mirror = {};            // name → value: the copy that survives Stop
  let lost = [];              // names too big to keep a copy of (gone after a Stop)
  const worker = () => { if (!w) { w = makeWorker(); fresh = true; } return w; };
  async function call(op, args, opts = {}) {
    const wk = worker();
    if (fresh) { fresh = false; if (Object.keys(mirror).length) await wk.call('csWorkspace', { op: 'load', vars: mirror }); }
    return wk.call(op, args, opts);
  }
  async function refreshMirror() {
    const list = await call('csWorkspace', { op: 'list' });
    const next = {}, big = [];
    let total = 0;
    for (const v of list) {
      if (v.type === 'func') continue;
      const b = v.bytes || 0;
      if (total + b > mirrorLimit) { big.push(v.name); continue; }
      total += b;
      next[v.name] = v;
    }
    const snap = await call('csWorkspace', { op: 'snapshot' });
    mirror = {};
    for (const k of Object.keys(next)) if (k in snap) mirror[k] = snap[k];
    lost = big;
    return list;
  }
  const eng = {
    get busy() { return running > 0; },
    get lost() { return lost.slice(); },
    get stub() { return !!(info && info.stub); },
    /** Run source; print/display arrive through onPrint/onDisplay while it runs. */
    async run(source, { lang = 'craft', file = '', budget, files, libBase, part, params } = {}) {
      running++;
      try {
        const r = await call('csRun', { source: String(source), lang, file, budget, files, libBase, packs: packsForWorker(), ...(part !== undefined ? { part } : {}), ...(params ? { params } : {}) }, {
          onProgress: (m) => {
            if (!m || typeof m !== 'object') return;
            if (typeof m.print === 'string') onPrint(m.print);
            else if (m.display) onDisplay(m.display);
            else if (m.file) onFile(m.file);
          },
        });
        const list = await refreshMirror();
        return { ...normResult(r), list };
      } finally { running--; }
    },
    stop() {
      if (w) { try { w.terminate(); } catch { /* gone */ } }
      w = null; fresh = true; running = 0;
    },
    async list() { return call('csWorkspace', { op: 'list' }); },
    async get(name) { return readValue(await call('csWorkspace', { op: 'get', name })); },
    async set(name, value) { await call('csWorkspace', { op: 'set', name, value }); if (sizeBytes(value) <= mirrorLimit) mirror[name] = value; return true; },
    async del(name) { await call('csWorkspace', { op: 'delete', name }); delete mirror[name]; return true; },
    async clear() { await call('csWorkspace', { op: 'clear' }); mirror = {}; lost = []; return true; },
    async snapshot() { return call('csWorkspace', { op: 'snapshot' }); },
    async load(vars) { await call('csWorkspace', { op: 'load', vars }); for (const [k, v] of Object.entries(vars)) mirror[k] = v; return true; },
    async info() { if (!info) info = await call('csInfo', {}); return info; },
    async loadFile(name, fileName, bytes) { const r = await call('csLoadFile', { name, fileName, bytes }, { transfer: [] }); await refreshMirror(); return r; },
    async saveFile(names, format) { return call('csSaveFile', { names, format }); },
    terminate() { eng.stop(); mirror = {}; },
  };
  return eng;
}

/** A call-stack frame ({ name, line, col, file } or text) as one line: "in beam_ke at line 12 (static_voxel)". */
const frameText = (f) => (f && typeof f === 'object' ? (Number.isInteger(f.line) ? t('script.client.frame_line', { name: String(f.name || '?').slice(0, 64), line: f.line }) : t('script.client.frame', { name: String(f.name || '?').slice(0, 64) })) + (f.file ? ` (${String(f.file).slice(0, 80)})` : '') : String(f).slice(0, 200));

/** Any worker's run result in one shape. */
export function normResult(r) {
  if (!r || typeof r !== 'object') return { ok: false, error: { message: t('script.client.no_answer'), line: 0, col: 0 } };
  const out = { ok: !!r.ok, ms: Number.isFinite(r.ms) ? r.ms : null, vars: Array.isArray(r.vars) ? r.vars.filter((x) => typeof x === 'string') : [], stopped: !!r.stopped };
  if (!r.ok) {
    const e = r.error && typeof r.error === 'object' ? r.error : { message: String(r.error || t('script.client.failed')) };
    out.error = { message: String(e.message || t('script.client.failed')).slice(0, 2000), line: Number.isInteger(e.line) && e.line > 0 ? e.line : 0, col: Number.isInteger(e.col) && e.col > 0 ? e.col : 0, file: typeof e.file === 'string' ? e.file.slice(0, 120) : '', stack: Array.isArray(e.stack) ? e.stack.slice(0, 20).map(frameText) : null };
    if (e.stopped || /^Stopped/.test(out.error.message) || out.error.message.startsWith(t('script.rt.stopped').replace(/[.:]$/, ''))) out.stopped = true;
  }
  return out;
}
