#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * make-vectors.mjs — writes tools/live-test/vectors.json, Studio Live's shared test vectors (docs/LIVE-PROTOCOL.md § 13).
 *
 *   node tools/live-test/make-vectors.mjs [--check]
 *
 * `envelopes` are encoded here with live-client.js's own MessagePack writer; the Rust side (`cargo test` in
 * tools/live-test/server) must produce the same bytes independently, and both decode them back. `decode_only` and
 * `bad` are written by hand from the MessagePack spec. `scenarios` are the protocol's commit/refuse rules as data: the
 * Rust tests run them on the session core, tools/live-test/test-scenarios.mjs over real sockets.
 * --check: exit 1 if the file on disk differs from what this would write.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pack } from '../../public_html/assets/js/live-client.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(here, 'vectors.json');
const hex = (u8) => Buffer.from(u8).toString('hex');
const bytes = (n, f = (i) => i & 255) => Uint8Array.from({ length: n }, (_, i) => f(i));
// JSON form of a value: bytes → {"$bin": hex}, integers beyond 2^53 → {"$int": "<decimal>"}.
const toJson = (v) => {
  if (v instanceof Uint8Array) return { $bin: hex(v) };
  if (typeof v === 'bigint') return { $int: v.toString() };
  if (Array.isArray(v)) return v.map(toJson);
  if (v && typeof v === 'object') return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, toJson(x)]));
  return v;
};

const env = (name, value) => ({ name, value: toJson(value), hex: hex(pack(value)) });
const envelopes = [
  env('hello', { t: 'hello', b: { v: 1, app: 'cadcraft', schema: 1, name: 'Ana', device: 'ANA-PC', hash: 'sha256:0f3a' } }),
  env('hello resume', { t: 'hello', b: { v: 1, app: 'cadcraft', schema: 1, name: 'Ben', resume: { c: 3, token: '9f2c41aa07d3e5b6c1d2e3f4a5b6c7d8', q: 1234, n: 17, holds: ['e:a:7', 'layer:Walls'] } } }),
  env('pake 1', { t: 'pake', b: { kid: 'K7', m: bytes(33, (i) => (i * 7 + 65) & 255) } }),
  env('pake 3', { t: 'pake', b: { m: bytes(32, (i) => 255 - i) } }),
  env('waiting', { t: 'waiting' }),
  env('hello signed in', { t: 'hello', b: { v: 1, app: 'cadcraft', schema: 1, name: 'Ben', device: 'BEN-PC', assertion: 'v1.eyJ2IjoxfQ.c2ln', picture: bytes(40) } }),
  env('join', { t: 'join', b: { c: 4, name: 'Ben', device: 'laptop BEN-PC', via: 'lan', kid: 'K7', proof: null, assertion: 'v1.eyJ2IjoxfQ.c2ln', picture: bytes(40), aud: 'AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8' } }),
  env('approve', { t: 'approve', b: { c: 4, role: 'viewer' } }),
  env('welcome', { t: 'welcome', s: '5e55a1c0ffee0001', q: 1500, b: {
    c: 4, prefix: 'e', role: 'editor', token: '00112233445566778899aabbccddeeff', session: '5e55a1c0ffee0001', app: 'cadcraft',
    schema: 1, peers: [{ c: 1, name: 'Ana', role: 'host', via: 'local' }], holds: { 'e:12': 1 }, locks: ['layer:Title'],
    saved: { q: 1400, hash: 'sha256:0f3a' }, catchup: 'log', last_n: 0 } }),
  env('deny', { t: 'deny', b: { reason: 'schema' } }),
  env('edit property', { t: 'edit', n: 17, b: { label: 'Color', ops: [{ op: 'set', id: '42', f: 'color', v: 3, was: null }], touched: [{ k: 'e:42', m: 'p', f: 'color' }] } }),
  env('edit undo (conditional property)', { t: 'edit', n: 18, b: { label: 'Undo Color', ops: [{ op: 'set', id: '42', f: 'color', v: null, was: 3 }], touched: [{ k: 'e:42', m: 'p', f: 'color', r: 1501 }] } }),
  env('edit structural', { t: 'edit', n: 19, b: { label: 'Explode', ops: [{ op: 'del', id: '42' }, { op: 'add', id: 'e:9', ent: { type: 'line', p1: [0, 0], p2: [10.5, -2.25], layer: 'L1' } }], touched: [{ k: 'e:42', m: 'd', r: 1501 }, { k: 'e:e:9', m: 'c' }, { k: 'layer:L1', m: 'r' }] } }),
  env('commit', { t: 'commit', c: 4, n: 17, q: 1501, b: { c: 4, n: 17, label: 'Color', ops: [{ op: 'set', id: '42', f: 'color', v: 3, was: null }], touched: [{ k: 'e:42', m: 'p', f: 'color' }] } }),
  env('refuse', { t: 'refuse', n: 19, b: { n: 19, reason: 'held', by: 2, by_name: 'Ana' } }),
  env('hold', { t: 'hold', b: { keys: ['e:42', 'e:43'] } }),
  env('release all', { t: 'release', b: { all: true } }),
  env('holds', { t: 'holds', b: { set: { 'e:42': 4 }, clear: ['e:12'] } }),
  env('lock', { t: 'lock', b: { keys: ['layer:Title', 'e:7'] } }),
  env('locks', { t: 'locks', b: { add: ['layer:Title'], del: [] } }),
  env('presence out', { t: 'presence', b: { cursor: [12.5, -3.75], view: [0, 0, 841, 594], selection: ['e:42'], command: 'LINE' } }),
  env('presence in', { t: 'presence', b: { peers: { 2: { cursor: [1.5, 2.5] }, 4: { cursor: [-0.125, 1e-7] } } } }),
  env('snap chunk', { t: 'snap', q: 1500, b: { i: 0, of: 2, data: bytes(300), enc: 'deflate', bytes: 262444 } }),
  env('saved', { t: 'saved', b: { q: 1520, hash: 'sha256:77aa', at: '2026-10-14T05:00:00Z' } }),
  env('end', { t: 'end', b: { reason: 'host-ended', q: 1520 } }),
  env('ping', { t: 'ping', n: 1760418000123 }),
  env('peer gone', { t: 'peer', b: { c: 4, state: 'gone' } }),
  env('invite', { t: 'invite', b: { one_time: true, ttl: 600000 } }),
  env('code', { t: 'code', b: { code: 'K7-Q4M2X', tag: 'K7', expires: 600000, one_time: false } }),
  env('handover', { t: 'handover', b: { to: 4 } }),
  env('handover state chunk 0', { t: 'handover', b: { from: 1, i: 0, of: 2, data: bytes(64, (i) => (i * 13) & 255), bytes: 300000, relay: true } }),
  env('handover state chunk 1', { t: 'handover', b: { from: 1, i: 1, of: 2, data: bytes(40) } }),
  env('moved', { t: 'moved', b: { addrs: ['192.168.1.20', '10.0.0.7'], port: 51234 } }),
  env('moved with ticket', { t: 'moved', b: { addrs: ['192.168.1.20'], port: 51234, host: 4, ticket: bytes(32, (i) => 200 - i) } }),
  env('moved with room', { t: 'moved', b: { addrs: ['192.168.1.20'], port: 51234, room: 'K7QX9M2B' } }),
  env('code carried', { t: 'code', b: { code: 'K7-Q4M2X', tag: 'K7', expires: 412000, one_time: false, carried: true } }),
  env('pake 1 rejoin ticket', { t: 'pake', b: { kid: 'h:4', m: bytes(33, (i) => (i * 5 + 66) & 255) } }),
  env('handover-off', { t: 'handover-off', b: { to: 4, reason: 'gone' } }),
  // 2026-10-15 (final sweep): guarded reads (LV.9) and assistants as their own clients (LV.18).
  env('edit guarded read', { t: 'edit', n: 21, b: { label: 'Line', ops: [{ o: 'add', id: 3000000001 }], touched: [{ k: 'e:3000000001', m: 'c' }, { k: 'layer:Walls', m: 'r', g: 1 }, { k: 'area:0,0,12.5,8@', m: 'r', g: 1 }] } }),
  env('assistant', { t: 'assistant' }),
  env('assistant-key', { t: 'assistant-key', b: { kid: 'a:4:9f2c41aa', secret: bytes(32, (i) => (i * 11 + 3) & 255), context: 'assistant:5e55a1c0ffee0001' } }),
  env('assistant-key refused', { t: 'assistant-key', b: { reason: 'role' } }),
  env('hello assistant', { t: 'hello', b: { v: 1, app: 'cadcraft', schema: 1, name: 'Helper', device: 'ANA-PC', assistant: { kid: 'a:4:9f2c41aa', secret: bytes(32, (i) => (i * 11 + 3) & 255) } } }),
  env('join assistant', { t: 'join', b: { c: 7, name: 'Helper', device: 'ANA-PC', via: 'lan', kid: 'a:4:9f2c41aa', proof: null, assertion: '', picture: null, aud: 'AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8', assistant: { of: 4, of_name: 'Ana' } } }),
  env('peer assistant in', { t: 'peer', b: { c: 7, state: 'in', name: 'Helper', role: 'assistant', via: 'lan', of: 4 } }),
  env('removed with its person', { t: 'removed', b: { reason: 'person' } }),
  env('revs', { t: 'revs', q: 1500, b: { keys: { 'block:7': 1402, 'e:42': 1501, 'layer:Walls': 12 } } }),
  env('validate', { t: 'validate', q: 1502, b: { c: 4, n: 20, label: 'Move', ops: [{ op: 'set', id: '1', f: 'p1', v: [1, 2] }] } }),
  env('valid no', { t: 'valid', b: { c: 4, n: 20, ok: false, reason: 'hatch boundary not closed' } }),
  // Encoding edges, inside an envelope body so both sides go through the same path.
  env('integers', { t: 'x', b: { a: 0, b: 127, c: 128, d: 255, e: 256, f: 65535, g: 65536, h: 4294967295, i: 4294967296,
    j: Number.MAX_SAFE_INTEGER, k: 18446744073709551615n, l: -1, m: -32, n: -33, o: -128, p: -129, q: -32768, r: -32769,
    s: -2147483648, t: -2147483649, u: -9223372036854775808n } }),
  env('floats', { t: 'x', b: { a: 0.5, b: -1.25, c: 1e300, d: -2.5e-300, e: 3.141592653589793 } }),
  env('strings', { t: 'x', b: { a: '', b: 'x'.repeat(31), c: 'y'.repeat(32), d: 'z'.repeat(255), e: 'w'.repeat(256), f: 'Ünïcødé ✓ 漢字 🙂' } }),
  env('containers', { t: 'x', b: { a: [], b: {}, c: Array.from({ length: 16 }, (_, i) => i), d: Object.fromEntries(Array.from({ length: 16 }, (_, i) => ['k' + String(i).padStart(2, '0'), i])), e: [[[[[true, false, null]]]]] } }),
  env('bin sizes', { t: 'x', b: { a: bytes(0), b: bytes(255), c: bytes(256) } }),
];

const decode_only = [
  // fields in another order (b first, t last), and n as a wide uint32
  { name: 'field order and wide int', hex: '82' + 'a162' + '81a161c3' + 'a174' + 'a470696e67', value: { b: { a: true }, t: 'ping' } },
  { name: 'uint32 for a small number', hex: '82a174a470656572a16ece00000005', value: { t: 'peer', n: 5 } },
  { name: 'float32', hex: '82a174a178a16281a166ca3fc00000', value: { t: 'x', b: { f: 1.5 } } },
  { name: 'str8 for a short string', hex: '81a174d90477616974', value: { t: 'wait' } },
];

const bad = [
  { name: 'truncated map', hex: '82a174a470696e67' },
  { name: 'trailing bytes', hex: '81a174a470696e67c0' },
  { name: 'never-used type 0xc1', hex: '81a174c1' },
  { name: 'string longer than input', hex: '81a174a5706f' },
  { name: 'bin longer than input', hex: '82a174a17aa162c40a0102' },
  { name: 'empty input', hex: '' },
];

// Scenarios: client H is the host; others join as editors. Edits are numbered per client automatically.
// expect {commit: q} or {refuse: reason, by?: client}.
const P = (k, f, r) => (r === undefined ? { k, m: 'p', f } : { k, m: 'p', f, r });
const scenarios = [
  { name: 'both change the same property: both commit, the later one wins', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', touched: [P('e:1', 'color')], expect: { commit: 1 } },
    { by: 'B', touched: [P('e:1', 'color')], expect: { commit: 2 } },
    { by: 'A', touched: [P('e:1', 'p1')], expect: { commit: 3 } },
  ] },
  { name: 'undo of a property only if nobody wrote over it', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', touched: [P('e:1', 'color')], expect: { commit: 1 } },
    { by: 'B', touched: [P('e:1', 'color')], expect: { commit: 2 } },
    { by: 'A', label: 'undo', touched: [P('e:1', 'color', 1)], expect: { refuse: 'changed', by: 'B' } },
    { by: 'B', label: 'undo', touched: [P('e:1', 'color', 2)], expect: { commit: 3 } },
    { by: 'A', touched: [P('e:1', 'lt', 0)], expect: { commit: 4 } },
  ] },
  { name: 'move then delete: delete wins; delete then move: the move is refused', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', touched: [{ k: 'e:a:1', m: 'c' }], expect: { commit: 1 } },
    { by: 'B', touched: [P('e:a:1', 'p1')], expect: { commit: 2 } },
    { by: 'A', touched: [{ k: 'e:a:1', m: 'd', r: 1 }], expect: { commit: 3 } },
    { by: 'B', touched: [P('e:a:1', 'p2')], expect: { refuse: 'deleted', by: 'A' } },
    { by: 'A', label: 'undo delete', touched: [{ k: 'e:a:1', m: 'c' }], expect: { commit: 4 } },
    { by: 'B', touched: [P('e:a:1', 'p2')], expect: { commit: 5 } },
  ] },
  { name: 'a structural op based on an old version is refused', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', touched: [{ k: 'e:c', m: 'c' }], expect: { commit: 1 } },
    { by: 'B', touched: [P('e:c', 'p1')], expect: { commit: 2 } },
    { by: 'A', label: 'explode (based on seq 1)', touched: [{ k: 'e:c', m: 'd', r: 1 }, { k: 'e:a:2', m: 'c' }], expect: { commit: 3 } },
    { by: 'B', label: 'constrain (based on seq 2)', touched: [{ k: 'e:d', m: 's', r: 0 }], expect: { commit: 4 } },
    { by: 'A', label: 'solve (based on seq 0)', touched: [{ k: 'e:d', m: 's', r: 0 }], expect: { refuse: 'changed', by: 'B' } },
    { by: 'A', label: 'solve (based on seq 4)', touched: [{ k: 'e:d', m: 's', r: 4 }], expect: { commit: 5 } },
  ] },
  { name: 'block definition edited while a reference is placed', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', touched: [{ k: 'block:7', m: 's', r: 0 }], expect: { commit: 1 } },
    { by: 'B', label: 'insert', touched: [{ k: 'e:b:1', m: 'c' }, { k: 'block:7', m: 'r' }], expect: { commit: 2 } },
    { by: 'B', label: 'redefine (stale)', touched: [{ k: 'block:7', m: 's', r: 0 }], expect: { refuse: 'changed', by: 'A' } },
    { by: 'A', label: 'purge', touched: [{ k: 'block:7', m: 'd' }], expect: { commit: 3 } },
    { by: 'B', label: 'insert after purge', touched: [{ k: 'e:b:2', m: 'c' }, { k: 'block:7', m: 'r' }], expect: { refuse: 'deleted', by: 'A' } },
  ] },
  { name: 'holds stop others’ structural ops, not property writes', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', hold: ['e:t'] },
    { by: 'B', label: 'type (text is structural)', touched: [{ k: 'e:t', m: 's' }], expect: { refuse: 'held', by: 'A' } },
    { by: 'B', touched: [P('e:t', 'color')], expect: { commit: 1 } },
    { by: 'B', touched: [{ k: 'e:t', m: 'd' }], expect: { refuse: 'held', by: 'A' } },
    { by: 'A', touched: [{ k: 'e:t', m: 's' }], expect: { commit: 2 } },
    { by: 'A', release: ['e:t'] },
    { by: 'B', touched: [{ k: 'e:t', m: 'd' }], expect: { commit: 3 } },
  ] },
  { name: 'a held layer or area stops others’ edits that read it guarded (g), never a plain read', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', hold: ['layer:Walls'] },
    { by: 'B', label: 'draw on it', touched: [{ k: 'e:c:1', m: 'c' }, { k: 'layer:Walls', m: 'r', g: 1 }], expect: { refuse: 'held', by: 'A' } },
    { by: 'B', label: 'recolour an object on it', touched: [P('e:4', 'color'), { k: 'layer:Walls', m: 'r', g: 1 }], expect: { refuse: 'held', by: 'A' } },
    { by: 'B', label: 'a plain read passes', touched: [{ k: 'e:c:2', m: 'c' }, { k: 'layer:Walls', m: 'r' }], expect: { commit: 1 } },
    { by: 'A', label: 'the holder draws on it', touched: [{ k: 'e:b:1', m: 'c' }, { k: 'layer:Walls', m: 'r', g: 1 }], expect: { commit: 2 } },
    { by: 'B', hold: ['area:0,0,10,10@'] },
    { by: 'A', label: 'move inside the held area', touched: [P('e:5', 'x1+y1'), { k: 'area:0,0,10,10@', m: 'r', g: 1 }], expect: { refuse: 'held', by: 'B' } },
    { by: 'A', release: ['layer:Walls'] },
    { by: 'B', touched: [{ k: 'e:c:3', m: 'c' }, { k: 'layer:Walls', m: 'r', g: 1 }], expect: { commit: 3 } },
  ] },
  { name: 'both draw new objects: no conflict; the same id twice is refused', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', touched: [{ k: 'e:b:1', m: 'c' }, { k: 'layer:0', m: 'r' }], expect: { commit: 1 } },
    { by: 'B', touched: [{ k: 'e:c:1', m: 'c' }, { k: 'layer:0', m: 'r' }], expect: { commit: 2 } },
    { by: 'B', touched: [{ k: 'e:b:1', m: 'c' }], expect: { refuse: 'exists', by: 'A' } },
  ] },
  { name: 'renaming a layer in use breaks nothing (names are properties of stable ids)', clients: ['H', 'A', 'B'], steps: [
    { by: 'A', touched: [P('layer:L1', 'name')], expect: { commit: 1 } },
    { by: 'B', touched: [{ k: 'e:c:5', m: 'c' }, { k: 'layer:L1', m: 'r' }], expect: { commit: 2 } },
    { by: 'B', touched: [P('e:c:5', 'layer'), { k: 'layer:L1', m: 'r' }], expect: { commit: 3 } },
  ] },
  { name: 'locks: every op on a locked key is refused, the host’s too, until unlocked', clients: ['H', 'A'], steps: [
    { by: 'H', lock: ['e:9', 'layer:Title'] },
    { by: 'A', touched: [P('e:9', 'color')], expect: { refuse: 'locked' } },
    { by: 'H', touched: [P('e:9', 'color')], expect: { refuse: 'locked' } },
    { by: 'A', label: 'new object on a locked layer', touched: [{ k: 'e:b:1', m: 'c' }, { k: 'layer:Title', m: 'r' }], expect: { refuse: 'locked' } },
    { by: 'A', label: 'group delete containing it', touched: [{ k: 'e:8', m: 'd' }, { k: 'e:9', m: 'd' }], expect: { refuse: 'locked' } },
    { by: 'A', touched: [P('e:8', 'color')], expect: { commit: 1 } },
    { by: 'H', unlock: ['e:9'] },
    { by: 'A', touched: [P('e:9', 'color')], expect: { commit: 2 } },
    { by: 'A', touched: [{ k: 'e:b:2', m: 'c' }, { k: 'layer:Title', m: 'r' }], expect: { refuse: 'locked' } },
  ] },
  { name: 'viewers can’t edit', clients: ['H', 'A', 'V'], steps: [
    { by: 'H', role: { who: 'V', role: 'viewer' } },
    { by: 'V', touched: [P('e:1', 'color')], expect: { refuse: 'role' } },
    { by: 'A', touched: [P('e:1', 'color')], expect: { commit: 1 } },
  ] },
];

const out = JSON.stringify({ format: 'cadcraft-live-vectors', protocol: 1, envelopes, decode_only, bad, scenarios }, null, 1) + '\n';
if (process.argv.includes('--check')) {
  const same = fs.existsSync(file) && fs.readFileSync(file, 'utf8') === out;
  console.log(same ? 'vectors.json is current' : 'vectors.json differs from make-vectors.mjs');
  process.exit(same ? 0 : 1);
}
fs.writeFileSync(file, out);
console.log(`wrote ${path.relative(process.cwd(), file)}: ${envelopes.length} envelopes, ${decode_only.length} decode-only, ${bad.length} bad, ${scenarios.length} scenarios`);
