/* SPDX-License-Identifier: Apache-2.0 */
/**
 * cam-worker.js — the Manufacture workspace's compute op (DOM-free; runs in a compute worker, compute-worker.js):
 *   camProgram({study, regen: {faces, edges, mesh: {positions, indices, triFace}, stats: {bbox}}, cell})
 *     → {paths: [{op (id), tool (id), speeds, moves, warnings, info, error, sim}], report, time, stock, origin,
 *        zmap: {positions (work mm), indices, colors (RGB per vertex: stock against the model)}, gouges: [[x, y, depth]]}
 * Every operation's toolpath (cam-paths.generateProgram) with the stock simulated after each one (cam-sim.Sim), so
 * later operations see the stock that is left, then the summary, the cycle time and the Z-map as a mesh.
 */
import { addOps } from './worker-ops.js';
import { readStudy, machineModel } from './cam.js';
import { generateProgram } from './cam-paths.js';
import { Sim, cycleTime } from './cam-sim.js';

export function camProgram({ study, regen, cell = 0 }, ctx = { progress() {}, transfer() {} }) {
  const st = readStudy(study);
  const model = machineModel(regen, st.setup);
  const sim = new Sim(model, { cell });
  ctx.progress(0.05);
  // 0.11 CAM.3: a tilted tool direction is simulated on a height map of its own (the full stock seen from that direction)
  const prog = generateProgram(st, regen, { sim, model, simFor: (m) => new Sim(m, { cell }) });
  ctx.progress(0.9);
  const report = sim.report();
  const time = cycleTime(prog, st.setup);
  const zmap = sim.toMesh(Math.max(1, Math.round(Math.max(sim.nx, sim.ny) / 400)), { colors: true });
  ctx.transfer(zmap.positions.buffer, zmap.indices.buffer, zmap.colors.buffer);
  const gouges = [];
  for (const p of prog.paths) if (p.sim && !p.frame && !p.kind) for (const a of p.sim.at) gouges.push(a);
  // gouges and rapid cuts found in the other simulations (tilted directions, the lathe's stock) count too
  for (const p of prog.paths) if (p.sim && (p.frame || p.kind)) { report.gouges += p.sim.gouges || 0; report.rapidCuts = (report.rapidCuts || 0) + (p.sim.rapidCuts || 0); }
  return {
    paths: prog.paths.map((p) => ({ op: p.op.id, tool: p.tool ? p.tool.id : null, speeds: p.speeds || null, moves: p.moves, warnings: p.warnings || [], info: p.info || {}, error: p.error || null, suppressed: !!p.suppressed, sim: p.sim || null, kind: p.kind || null, frame: p.frame || null, tip: p.tip || null })),
    report, time, stock: model.stock, origin: model.origin, axis: model.axis, zmap, gouges,
  };
}

addOps({ camProgram });
