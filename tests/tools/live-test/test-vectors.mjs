#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-vectors.mjs — the JS side of Studio Live's shared vectors (docs/LIVE-PROTOCOL.md § 13): live-client.js's
 * MessagePack writes exactly the bytes in vectors.json and reads them back; other valid encodings read; bad inputs are
 * refused. The Rust side is `cargo test` in tools/live-test/server. Also checks vectors.json is what make-vectors.mjs
 * writes.
 */
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { pack, unpack } from '../../public_html/assets/js/live-client.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const v = JSON.parse(fs.readFileSync(path.join(here, 'vectors.json'), 'utf8'));
const fromJson = (j) => {
  if (Array.isArray(j)) return j.map(fromJson);
  if (j && typeof j === 'object') {
    const keys = Object.keys(j);
    if (keys.length === 1 && keys[0] === '$bin') return Uint8Array.from(Buffer.from(j.$bin, 'hex'));
    if (keys.length === 1 && keys[0] === '$int') { const b = BigInt(j.$int); return b >= -9007199254740991n && b <= 9007199254740991n ? Number(b) : b; }
    return Object.fromEntries(keys.map((k) => [k, fromJson(j[k])]));
  }
  return j;
};
let pass = 0, fail = 0;
const check = (name, fn) => { try { fn(); pass++; } catch (e) { fail++; console.log(`FAIL ${name}: ${e.message.split('\n')[0]}`); } };
const hex = (u8) => Buffer.from(u8).toString('hex');

for (const e of v.envelopes) {
  const value = fromJson(e.value);
  check(`${e.name}: encodes to the shared bytes`, () => assert.equal(hex(pack(value)), e.hex));
  check(`${e.name}: decodes to the shared value`, () => assert.deepEqual(unpack(Buffer.from(e.hex, 'hex')), value));
}
for (const e of v.decode_only) check(`${e.name}: decodes`, () => assert.deepEqual(unpack(Buffer.from(e.hex, 'hex')), fromJson(e.value)));
for (const e of v.bad) check(`${e.name}: refused`, () => assert.throws(() => unpack(Buffer.from(e.hex, 'hex'))));
check('vectors.json is what make-vectors.mjs writes', () => execFileSync(process.execPath, [path.join(here, 'make-vectors.mjs'), '--check'], { stdio: 'pipe' }));
// A few properties of the writer the vectors don't pin.
check('undefined map values are left out', () => assert.equal(hex(pack({ a: 1, b: undefined })), '81a16101'));
check('Map keeps its order', () => assert.equal(hex(pack(new Map([['z', 1], ['a', 2]]))), '82a17a01a16102'));
check('a decoded __proto__ key is dropped', () => assert.deepEqual(Object.getPrototypeOf(unpack(Buffer.from('81a95f5f70726f746f5f5f81a178c3', 'hex'))), Object.prototype));
check('deep nesting is refused', () => assert.throws(() => unpack(new Uint8Array(1000).fill(0x91))));
check('a huge array count with no data is refused before allocating', () => assert.throws(() => unpack(Buffer.from('ddffffffff', 'hex'))));
console.log(`${pass} passed, ${fail} failed (${v.envelopes.length} envelopes, ${v.decode_only.length} decode-only, ${v.bad.length} bad)`);
process.exit(fail ? 1 : 0);
