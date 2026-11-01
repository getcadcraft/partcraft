/* SPDX-License-Identifier: Apache-2.0 */
/** The resolve hook node-hook.mjs registers: "@noble/<pkg>/<file>" → assets/vendor/noble-<pkg>/current/<file>. */
const VENDOR = new URL('../../public_html/assets/vendor/', import.meta.url);

export async function resolve(specifier, context, next) {
  const m = /^@noble\/(curves|hashes|ciphers)\/(.+)$/.exec(specifier);
  if (m) return { url: new URL(`noble-${m[1]}/current/${m[2]}`, VENDOR).href, shortCircuit: true };
  return next(specifier, context);
}
