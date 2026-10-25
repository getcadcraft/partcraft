/* SPDX-License-Identifier: Apache-2.0 */
/**
 * exact-client.js — the page's side of the exact kernel: starts brep-worker.js in a Web Worker,
 * loads OpenCascade there (lazily: only when start() is called), and turns requests into promises.
 *
 * Why the worker is assembled from blob URLs: the page's import map gives every module of this
 * build a cache-busting ?v= URL, but import maps do not reach into workers, so a plain
 * `new Worker('./brep-worker.js')` would import possibly stale copies of brep.js, sketch.js, …
 * Instead the page fetches the worker's modules through its own (versioned) URLs and links them
 * together as blob: modules. OpenCascade itself is imported by its real URL inside the worker.
 *
 *   const k = new ExactKernel({ occtUrl: exactKernelUrl() });   await k.start();   const r = await k.call('regen', { part });
 *   k.state: 'off' (no exact kernel: 0.4 builds with the mesh kernel) | 'idle' | 'loading' | 'ready' | 'failed'
 *   k.loadMs   k.heap (bytes, from the last reply)
 * The worker is restarted on the next request once its WebAssembly memory passes `maxHeap`
 * (OpenCascade keeps a little memory per boolean in this build).
 */
import { t } from './i18n.js';

const ROOT = 'brep-worker.js';
/** localStorage key a developer or a test sets to a same-origin .js URL of OpenCascade to turn the exact kernel on. */
export const EXACT_KERNEL_KEY = 'partcraft.exactKernel';

/**
 * Where OpenCascade comes from, or null. PartCraft 0.4 ships without an exact kernel (0.4 part 2, K.2: OpenCascade is
 * LGPL, so it left the manifest); the mesh kernel builds every part. Releases up to 0.3 still map it in their import map,
 * and developers and tests may point localStorage EXACT_KERNEL_KEY at a copy on the same site. Anything else is ignored.
 */
export function exactKernelUrl() {
  try { return import.meta.resolve('replicad-opencascadejs'); } catch { /* not in this build's import map */ }
  try {
    const v = globalThis.localStorage?.getItem(EXACT_KERNEL_KEY);
    if (!v) return null;
    const u = new URL(v, globalThis.location?.href);
    return u.origin === globalThis.location?.origin && /\.js$/.test(u.pathname) ? u.href : null;
  } catch { return null; }
}

/** Blob URLs for build modules and everything they import relatively ('./x.js' or './folder/x.js', single quotes, each
 *  relative to the importing module's own folder): Map file (path from the build folder) → blob URL.
 *  Also used by compute-worker.js for plain compute workers. */
export async function blobModules(files) {
  const urls = new Map();     // file → blob URL
  const texts = new Map();
  const visit = async (file, stack = []) => {
    if (urls.has(file)) return urls.get(file);
    if (stack.includes(file)) throw new Error('Import cycle at ' + file);   // i18n-ignore: a build error for developers (the module graph must be a tree)
    if (!texts.has(file)) {
      const res = await fetch(import.meta.resolve('./' + file));
      if (!res.ok) throw new Error(t('ui.exact.load_failed', { file, status: res.status }));
      texts.set(file, await res.text());
    }
    let src = texts.get(file);
    // a module never imports itself: a match on its own name is usage text in a comment (i18n.js shows `from './i18n.js'`).
    // Sub-folder imports ('./nest/nest-stock.js' in part.js, './nest.js' inside nest/) are keyed by their path from the build folder.
    const dir = file.includes('/') ? file.slice(0, file.lastIndexOf('/') + 1) : '';
    const deps = [...new Set([...src.matchAll(/(?:from|import)\s*\(?\s*'\.\/((?:[a-z0-9-]+\/)*[a-z0-9-]+\.js)'/g)].map((m) => m[1]))].filter((d) => dir + d !== file);
    for (const d of deps) {
      const u = await visit(dir + d, [...stack, file]);
      src = src.split(`'./${d}'`).join(`'${u}'`);
    }
    const u = URL.createObjectURL(new Blob([src], { type: 'text/javascript' }));
    urls.set(file, u);
    return u;
  };
  for (const f of files) await visit(f);
  return urls;
}
/** The page's language catalog (#cc-lang, docs/LANG.md) for a worker's i18n (worker-i18n.js), or null outside a page. */
export function pageCatalog() {
  try {
    const tag = typeof document !== 'undefined' ? document.getElementById('cc-lang') : null;
    const d = tag ? JSON.parse(tag.textContent || 'null') : null;
    return d && typeof d === 'object' && d.strings && typeof d.strings === 'object' ? { locale: d.locale, chain: d.chain, strings: d.strings } : null;
  } catch { return null; }
}
/** True when this page has no exact kernel at all (0.4): callers then say "not built yet", not "not loaded". */
export const noExactKernel = () => exactKernelUrl() === null;
/** "<what>: not built yet …" when there is no exact kernel, else `otherwise` (the loading / not loaded words). */
export const exactWhy = (what, otherwise) => (noExactKernel() ? t('kernel.not_built', { what }) : otherwise);

const blobGraph = async () => { const urls = await blobModules([ROOT]); return { root: urls.get(ROOT), urls }; };

export class ExactKernel {
  constructor({ occtUrl, maxHeap = 1.5 * 1024 ** 3 } = {}) {
    this.occtUrl = occtUrl;
    this.maxHeap = maxHeap;
    this.state = occtUrl ? 'idle' : 'off';
    this.worker = null;
    this.pending = new Map();
    this.seq = 0;
    this.heap = 0;
    this.loadMs = null;
    this.ready = null;
    this.onstate = null;
  }

  setState(s, detail) { this.state = s; this.onstate?.(s, detail); }

  start() {
    if (this.state === 'off') return Promise.reject(new Error('This build has no exact kernel.'));   // i18n-ignore: callers check state 'off' first and say it in words
    if (this.ready) return this.ready;
    this.setState('loading');
    const t0 = performance.now();
    this.ready = (async () => {
      if (!this.graph) this.graph = await blobGraph();
      this.worker = new Worker(this.graph.root, { type: 'module', name: 'PartCraft exact kernel' });   // i18n-ignore: the worker's name, shown only in developer tools
      this.worker.onmessage = (e) => {
        const { id, ok, result, error, heap, progress } = e.data || {};
        const p = this.pending.get(id);
        if (!p) return;
        if (progress !== undefined) { try { p.onProgress?.(progress); } catch { /* the caller's problem */ } return; }
        this.pending.delete(id);
        this.heap = heap || this.heap;
        if (ok) p.resolve(result); else p.reject(new Error(error));
      };
      this.worker.onerror = (e) => {
        const err = new Error(e.message || t('ui.exact.stopped'));
        for (const p of this.pending.values()) p.reject(err);
        this.pending.clear();
      };
      await this.send('init', { url: this.occtUrl });
      const cat = pageCatalog();
      if (cat) await this.send('i18nInit', cat);   // messages made in the worker speak the page's language (worker-i18n.js)
      this.loadMs = Math.round(performance.now() - t0);
      this.setState('ready');
      return true;
    })().catch((err) => { this.setState('failed', err); this.ready = null; throw err; });
    return this.ready;
  }

  send(op, args, { onProgress, transfer = [] } = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.seq;
      this.pending.set(id, { resolve, reject, onProgress });
      this.worker.postMessage({ id, op, args }, transfer);
    });
  }

  /** A request once the kernel is ready (restarting the worker first when its memory has grown too big).
   *  opts: { onProgress(v) (an op's ctx.progress), transfer: [ArrayBuffer] moved to the worker } */
  async call(op, args, opts) {
    if (this.state === 'ready' && this.heap > this.maxHeap && !this.pending.size) this.restart();
    await this.start();
    return this.send(op, args, opts);
  }

  restart() {
    try { this.worker?.terminate(); } catch { /* gone */ }
    this.worker = null; this.ready = null; this.heap = 0;
    this.setState('idle');
  }
}
