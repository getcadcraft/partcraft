/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cs-all.js — loads the whole CraftScript runtime: the runtime (cs-runtime.js), the languages, the core builtins and
 * builder B's modules (linalg, mesh, io), each registered once. The script worker (cs-worker.js) and Node (CLI, tests)
 * import this one module, so both see exactly the same builtins. DOM-free.
 *
 *   import { makeRuntime, IO } from "./cs-all.js";   (double quotes here: blobModules links single-quoted imports, even in comments)
 *   const rt = makeRuntime({ budget, onPrint, onDisplay, library });   // = createRuntime + io's prepare hook
 *
 * Adding a module of builtins: import it here and call its register(registerBuiltin, registerMethod) in the list below
 * (or let it register itself at import). Adding a language: import its adapter file here (it calls registerLanguage).
 */
import { registerBuiltin, registerMethod, createRuntime } from './cs-runtime.js';
import './cs-lang-craft.js';
import './cs-lang-lua.js';           // builder B: registers 'lua' (wasmoon loads only when a Lua script runs)
import './cs-lang-python.js';        // 0.4 P10: registers 'python' (CPython for WASI loads only when a Python script runs; 0.5)
import './cs-lib-core.js';
import * as LINALG from './cs-lib-linalg.js';
import * as MESH from './cs-lib-mesh.js';
import * as IO from './cs-lib-io.js';
import * as FIELD from './cs-lib-field.js';   // 0.8 CE.2: signed-distance fields, lattices, TPMS, to_body
import * as ENG from './cs-lib-eng.js';       // 0.8 CE.4: units with dimensions, fluids, materials (the formulas are craftlib/eng/*.craft)
import './cs-lib-nodes.js';           // 0.8 DC.54: every node of cc-nodes is a function nd_<node> (lib/nodes, nodes_PART_3)
import { has, init } from './i18n.js';

// Node (the CLI, tests) has no page to read the language catalog from: English, from this build's lang/en.json, so messages
// read as words. The browser's script worker gets the page's catalog instead (worker-i18n.js).
if (typeof document === 'undefined' && typeof process !== 'undefined' && process.versions && process.versions.node && !has('cs.python.err.load')) {
  try {
    const fs = await import('node' + ':fs');
    init({ locale: 'en', strings: JSON.parse(fs.readFileSync(new URL('lang/en.json', import.meta.url), 'utf8')) });
  } catch { /* no catalog: keys it is */ }
}

let done = false;
function registerAll() {
  if (done) return;
  done = true;
  for (const m of [LINALG, MESH, IO, FIELD, ENG]) if (typeof m.register === 'function') m.register(registerBuiltin, registerMethod);
}
registerAll();

/** createRuntime with the io module's prepare step (HDF5 preload) unless the caller gives its own. */
export function makeRuntime(opts = {}) {
  return createRuntime({ prepare: (src) => IO.prepareIo(src), ...opts });
}

export { IO, LINALG, MESH, FIELD, ENG };
export * from './cs-runtime.js';
