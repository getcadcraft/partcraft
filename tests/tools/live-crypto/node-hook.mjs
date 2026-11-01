/* SPDX-License-Identifier: Apache-2.0 */
/**
 * node-hook.mjs — resolves "@noble/curves/…", "@noble/hashes/…" and "@noble/ciphers/…" to the vendored copies
 * (public_html/assets/vendor/noble-<pkg>/current/), as an app build's import map does in the browser. So Node runs the
 * exact files the apps ship (owner: 0.5 session `live-relay`).
 *
 *   node --import ./tools/live-crypto/node-hook.mjs some-test.mjs
 *   or, inside a script: (await import('./tools/live-crypto/node-hook.mjs')) before importing live-crypto.js
 */
import { register } from 'node:module';

register('./node-hook-resolve.mjs', import.meta.url);
