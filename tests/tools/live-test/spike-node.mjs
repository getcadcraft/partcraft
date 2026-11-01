/* SPDX-License-Identifier: Apache-2.0 */
// One LV.1 spike client in Node: node spike-node.mjs '<json opts>' → prints its result as one JSON line.
import { runClient } from './spike-core.mjs';
import { pack, unpack } from '../../public_html/assets/js/live-client.js';
const opts = JSON.parse(process.argv[2]);
const r = await runClient(opts, { WebSocketCtor: WebSocket, pack, unpack, now: () => performance.now() });
process.stdout.write(JSON.stringify(r) + '\n');
process.exit(0);
