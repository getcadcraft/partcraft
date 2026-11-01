/* SPDX-License-Identifier: Apache-2.0 */
// Every node of cc-nodes (nodes/, byte copies of lib/nodes) is a CraftScript function nd_<node> (0.8 round 3, nodes_PART_3; DC.54).
// The library imports nothing of the host: PartCraft hands over its value helpers here.
import { registerBuiltin } from './cs-runtime.js';
import * as V from './cs-values.js';
import { register } from './nodes/script.js';

export const NODE_BUILTINS = register(registerBuiltin, { tensor: V.tensor, struct: V.struct, cell: V.cell });
