/* SPDX-License-Identifier: Apache-2.0 */
// The Engineer workspace lives in lib/engineer (0.8 CE.12); PartCraft registers it with its own workspace table.
import './engineer-mount.js';
import { registerWorkspace } from './workspaces.js';
import { makeWorkspace, lazyLabels } from './engineer/ws-engineer.js';

lazyLabels(registerWorkspace(makeWorkspace()));
export { _state } from './engineer/ws-engineer.js';   // tests
