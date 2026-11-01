/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engineer-mount.js — PartCraft's side of the Engineer contract for the page (0.8 CE.12; docs/apps/engineer.md): where a new body goes
 * in the feature tree, where the generators and the engineering library are served, the CraftScript worker's modules and the solvers.
 */
import './engineer-adapter.js';
import { setHost } from './engineer/host.js';
import * as P from './part.js';
import { createEngine } from './cs-client.js';

setHost({
  checks: ['stress', 'thermal', 'flow'],
  features: { add: (part, type, props) => P.addFeature(part, type, props), byId: (part, id) => P.featureById(part, id) },
  script: { createEngine },
  urls: { generators: new URL('./generators/', import.meta.url), craftlib: new URL('./craftlib/', import.meta.url) },
  workerModules: ['cs-worker.js'],
  storageKey: 'partcraft.generators',             // the generators a person opened from files stay in this browser (ADDONS-SPEC § 17)
}, 'full');
