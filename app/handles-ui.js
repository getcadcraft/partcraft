/* SPDX-License-Identifier: Apache-2.0 */
/**
 * handles-ui.js: partcraft.js's 2 bindings for this topic, moved out of init() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountHandles(ctx) is called once by init(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables init() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import * as WS from './workspaces.js';
import * as P from './part.js';
import { linkOf } from './params-part.js';
import * as HM from './handle-math.js';

export function mountHandles(ctx) {
  const { ST, settings } = ctx;

  /** The base planes (0.6 PU.4): full while choosing where to sketch, or with one selected; faint (drawn, not picked) once
   *  the part has a solid; View › Base planes off hides them except while choosing where to sketch. Sketches, drawings and
   *  assemblies set their own (hidden). */
  // ---------------------------------------------------------------- drag handles (0.6 PU.2, handles.js + handle-math.js)
  // The selected Extrude (blind or both sides) or Revolve, built, its value not driven by an equation, in the Design
  // workspace: an arrow (a curved one on a Revolve) to drag; the drag changes the part live and is one undo step at the end.
  function syncHandles() {
    if (!ST.handles) return;
    let h = null;
    if (ST.mode === 'model' && ST.ws === WS.DESIGN && ST.sel?.kind === 'feature' && ST.regen?.mesh) {
      const f = P.featureById(ST.part, ST.sel.id), r = ST.regen.results.get(ST.sel.id);
      const key = f && { extrude: 'depth', revolve: 'angle' }[f.type];
      if (key && r?.status === 'ok' && !linkOf(ST.part, f.id + '.' + key)) {
        const sf = typeof f.sketch === 'string' ? P.featureById(ST.part, f.sketch) : null, frame = sf ? ST.regen.frames.get(sf.id) : null;
        h = f.type === 'extrude' ? HM.extrudeHandle(f, frame, sf?.sketch) : HM.revolveHandle(f, ST.regen.axes?.get(f.id), frame, sf?.sketch);
      }
    }
    ST.handles.show(h);
  }

  function syncPlanes() {
    if (!ST.view || (ST.mode !== 'model' && ST.mode !== 'pick')) return;
    const want = ST.pendingSketch || ST.sel?.kind === 'plane';
    ST.view.setPlanesFaint(!want && !!ST.regen?.mesh);
    ST.view.setPlanesVisible(want || settings.planes);
  }

  return { syncHandles, syncPlanes };
}
