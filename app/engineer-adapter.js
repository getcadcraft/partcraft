/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engineer-adapter.js — PartCraft's side of the Engineer contract for the part file (0.8 CE.12; docs/apps/engineer.md): the mesh codec the
 * Generated feature keeps its body in, the field kernel and PartCraft's words. DOM-free and light (part.js reads Generated features
 * through it, so it must not import part.js). The page's side is engineer-mount.js; CraftScript's is engineer-script.js.
 */
import { setHost } from './engineer/host.js';
import { t, has } from './i18n.js';
import { repairMesh, encodeMesh, decodeMesh, readReport, MAX_TRIS } from './meshimport.js';
import * as FD from './field/index.js';
import { dpow, dlog10 } from './field/detmath.js';

setHost({ name: 'partcraft', t, has, field: { ...FD, dpow, dlog10 }, mesh: { repairMesh, encodeMesh, decodeMesh, readReport, MAX_TRIS } }, 'data');
