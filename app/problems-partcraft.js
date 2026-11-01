/* SPDX-License-Identifier: Apache-2.0 */
/**
 * problems-partcraft.js — PartCraft's checks as shared Problems (0.8 CE.6; spec docs/0.8-PROBLEMS-SPEC.md § 1–2; DOM-free).
 * What a Generated feature's last run found (generated.js `problems`: manufacturing checks on thin walls, narrow gaps, loose
 * pieces, trapped cavities, drain holes, overhangs) in the shape the shell's ⚠ panel takes. partcraft.js hands the result to
 * window.ccProblems after every rebuild (manifest "problems").
 *
 *   pcProblems(part, regen, { labelOf }) → [problem]    one per kind of finding per feature; about = the feature; where.at = the first mark
 *                                                        in PartCraft's own axes (the generator's x, y, z become x, z, −y: Y up)
 */
export const SRC_ID = 'partcraft.mfg';

export function pcProblems(part, regen, { labelOf = null } = {}) {
  const out = [];
  for (const f of part.features) {
    if (f.type !== 'generated' || !Array.isArray(f.problems) || f.suppressed) continue;
    const res = regen && regen.results ? regen.results.get(f.id) : null;
    if (res && (res.status === 'rolled' || res.status === 'suppressed')) continue;
    const label = labelOf ? labelOf(f) : f.name;
    for (const p of f.problems) {
      const mark = p.at && p.at[0] ? p.at[0] : null;
      const at = mark ? (f.up === 'y' ? [mark[0], mark[1], mark[2]] : [mark[0], mark[2], -mark[1]]) : null;
      out.push({
        id: SRC_ID + ':' + p.code + ':' + f.id, code: p.code, severity: p.severity,
        msg: { key: 'mfg.p.' + p.code, vars: p.vars || {} },
        about: [{ kind: 'feature', id: f.id, label }],
        ...(at ? { where: { space: '3d', at } } : {}),
        source: { kind: 'check', name: SRC_ID },
        ...(p.req ? { req: p.req } : {}), ...(p.found ? { found: p.found } : {}),
      });
    }
  }
  return out;
}
