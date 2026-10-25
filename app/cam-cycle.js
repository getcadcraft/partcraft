/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-cycle.js — a canned cycle as the plain moves a control makes of it (a leaf module: the posts, the simulation and cam-paths.js
 * share it; kept apart from cam-paths.js so the post engine does not import it, which would close an import cycle the compute
 * worker's loader refuses).
 */
export const PECK_BACKOFF = 0.254;   // mm: G83/G73 back-off as LinuxCNC documents it (Fanuc: a machine parameter)

/** A canned cycle as plain rapid/feed moves (what the control does), starting at z = init over the first hole. */
export function expandCycle(m) {
  const out = [];
  let z = m.init;
  for (const hl of m.holes) {
    const [x, y] = hl.at;
    out.push({ k: 'rapid', p: [x, y, z] });
    out.push({ k: 'rapid', p: [x, y, hl.r] });
    if (m.kind === 'drill' || !(hl.q > 0)) out.push({ k: 'feed', p: [x, y, hl.z], f: m.f });
    else {
      let cur = hl.r;
      while (cur > hl.z + 1e-9) {
        const next = Math.max(hl.z, cur - hl.q);
        if (m.kind === 'peck' && cur < hl.r) out.push({ k: 'rapid', p: [x, y, cur + PECK_BACKOFF] });
        out.push({ k: 'feed', p: [x, y, next], f: m.f });
        if (next > hl.z + 1e-9) {
          if (m.kind === 'peck') out.push({ k: 'rapid', p: [x, y, hl.r] });
          else out.push({ k: 'rapid', p: [x, y, next + PECK_BACKOFF] });
        }
        cur = next;
      }
    }
    z = hl.ret === 'r' ? hl.r : m.init;
    out.push({ k: 'rapid', p: [x, y, z] });
  }
  return out;
}
