#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-scenarios.mjs — the shared scenarios of vectors.json (docs/LIVE-PROTOCOL.md § 13), run over real sockets through
 * live-client.js against the Rust server. The Rust side runs the same list on the session core (`cargo test`). Each
 * conflict case of spec § 5 point 4 is one of them.
 *
 *   node tools/live-test/test-scenarios.mjs
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { LiveClient, webSocketTransport } from '../../public_html/assets/js/live-client.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const v = JSON.parse(fs.readFileSync(path.join(here, 'vectors.json'), 'utf8'));
const TOKEN = 'sc-' + Math.random().toString(36).slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function until(cond, what, ms = 5000) { const t0 = Date.now(); while (!cond()) { if (Date.now() - t0 > ms) throw new Error('timed out: ' + what); await sleep(3); } }

/** An adapter whose ops carry their own touched list: the scenario's keys reach the server exactly as written. */
function scenarioAdapter() {
  let cb = null;
  return {
    app: 'cadcraft', schema: 1,
    onLocalChange(f) { cb = f; },
    edit(label, touched) { return cb({ label, ops: [{ touched }], inverse: [{ touched: [] }] }); },
    invert() { return [{ touched: [] }]; },
    apply() {},
    // no `r` in the scenario = no version condition (as the Rust runner sends it)
    touched(ops) { return (ops[0].touched || []).map((t) => ('r' in t ? { ...t } : { ...t, r: null })); },
    load() {}, snapshot() { return new Uint8Array(0); },
  };
}

let pass = 0, fail = 0;
for (const sc of v.scenarios) {
  const p = spawn(path.join(here, 'server/target/release/live-server'), ['--bind', '127.0.0.1:0', '--app', 'cadcraft', '--auto-approve', '--plain', '--token', TOKEN], { stdio: ['pipe', 'pipe', 'inherit'] });
  const { addr } = JSON.parse(await new Promise((r) => readline.createInterface({ input: p.stdout }).once('line', r)));
  const cs = {};
  try {
    for (const name of sc.clients) {
      const a = scenarioAdapter();
      const c = new LiveClient(Object.assign({ transport: webSocketTransport(`ws://${addr}/live`), adapter: a, name, secure: false }, name === 'H' ? { role: 'host', token: TOKEN } : {}));
      c.a = a; c.refusals = [];
      c.on('refused', (r) => c.refusals.push(r));
      c.connect();
      cs[name] = c;
      await until(() => c.status === 'live', name + ' live');
    }
    const all = Object.values(cs);
    const settle = () => until(() => all.every((c) => !c.pending.length && !c.inbox.length && !c.flushQueued) && new Set(all.map((c) => c.q)).size === 1, 'settled');
    await settle();
    for (const [i, st] of sc.steps.entries()) {
      const c = cs[st.by];
      const at = `step ${i + 1}`;
      if (st.touched) {
        const before = c.refusals.length, undoBefore = c.undoStack.length;
        const n = c.a.edit(st.label || 'edit', st.touched);
        await until(() => c.refusals.length > before || c.undoStack.length > undoBefore, at + ' answered');
        if (st.expect.commit !== undefined) {
          assert.equal(c.refusals.length, before, `${at}: refused ${c.refusals.at(-1) && c.refusals.at(-1).reason}`);
          assert.equal(c.undoStack.at(-1).q, st.expect.commit, `${at}: seq`);
        } else {
          const r = c.refusals.at(-1);
          assert.equal(r.reason, st.expect.refuse, `${at}: reason`);
          if (n !== null) assert.equal(r.n, n);
          if (st.expect.by) assert.equal(r.by, cs[st.expect.by].c, `${at}: by`);
        }
      } else if (st.hold) { c.hold(st.hold); await until(() => st.hold.every((k) => all.every((x) => x.holds.get(k) === c.c)), at + ' hold seen'); }
      else if (st.release) { c.release(st.release); await until(() => st.release.every((k) => all.every((x) => !x.holds.has(k))), at + ' release seen'); }
      else if (st.lock) { c.lock(st.lock); await until(() => st.lock.every((k) => all.every((x) => x.locks.has(k))), at + ' lock seen'); }
      else if (st.unlock) { c.unlock(st.unlock); await until(() => st.unlock.every((k) => all.every((x) => !x.locks.has(k))), at + ' unlock seen'); }
      else if (st.role) { c.setRole(cs[st.role.who].c, st.role.role); await until(() => cs[st.role.who].role === st.role.role, at + ' role seen'); }
      await settle();
    }
    pass++;
    console.log('ok   ' + sc.name);
  } catch (e) {
    fail++;
    console.log('FAIL ' + sc.name + ': ' + e.message);
  } finally {
    for (const c of Object.values(cs)) c.stop();
    p.stdin.end(); p.kill();
  }
}
console.log(`${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
