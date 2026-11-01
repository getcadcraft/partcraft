/* SPDX-License-Identifier: Apache-2.0 */
/**
 * engineer-script.js — PartCraft's side of the Engineer contract for CraftScript (0.8 CE.12; docs/apps/engineer.md). DOM-free: it is
 * linked into the script worker and Node. The field and engineering builtins (engineer/cs-lib-field.js, cs-lib-eng.js) reach PartCraft's
 * CraftScript runtime, material table and solvers only through what this file hands over.
 */
import { setHost } from './engineer/host.js';
import { t, has } from './i18n.js';
import { registerBuiltin, hasBuiltin } from './cs-runtime.js';
import { CsError, tensor } from './cs-values.js';
import { mat, asTensor, scalarOf, optsOf, typeName } from './cs-lib-linalg.js';
import { voxelMeshOf, meshValue } from './cs-lib-mesh.js';
import { MATERIALS } from './materials.js';
import * as FD from './field/index.js';
import { dpow, dlog10 } from './field/detmath.js';

setHost({
  name: 'partcraft', t, has,
  field: { ...FD, dpow, dlog10 },
  checks: ['stress', 'thermal', 'flow'],          // static_voxel, heat_steady and lbm3d are PartCraft's own solvers (craftlib/ and the compute worker)
  script: { registerBuiltin, hasBuiltin, CsError, tensor, asTensor, scalarOf, mat, optsOf, typeName, voxelMeshOf, meshValue },
  materials: MATERIALS,
}, 'script');
