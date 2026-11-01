/* SPDX-License-Identifier: Apache-2.0 */
/**
 * netem.mjs — emulated networks for Studio Live's tests (root only): each client in its own network namespace, joined
 * to a bridge ("the access point", 10.77.0.1/24) by a veth pair with netem on both ends. One temporary iptables INPUT
 * rule accepts the private test bridge (the host firewall drops everything else); netDown() removes it with the bridge.
 * An emulation of Wi-Fi, not Wi-Fi: real laptops, phones and access points are the owner's check.
 */
import { execFileSync } from 'node:child_process';

// Wi-Fi retries lost frames at the link layer (802.11 ARQ), so what reaches IP is mostly delay and jitter; IP-level
// loss is rare on a working network. `lossy` and `badwifi` push loss up to show what TCP retransmits cost.
// netem with jitter alone reorders packets, which Wi-Fi doesn't (802.11 keeps order per traffic class) and which TCP
// punishes with 200 ms stalls; with a `rate` netem times each packet after the one before it, so order is kept.
export const PROFILES = {
  wifi: 'delay 2ms 2ms distribution normal rate 100mbit loss 0.05%',
  flat: 'delay 2ms',
  jitter: 'delay 2ms 2ms distribution normal rate 100mbit',
  lossy: 'delay 2ms 2ms distribution normal rate 100mbit loss 0.3%',
  badwifi: 'delay 6ms 6ms distribution normal rate 20mbit loss 1%',
};
export const sh = (...a) => execFileSync(a[0], a.slice(1), { stdio: ['ignore', 'pipe', 'pipe'] }).toString();
const tryq = (...a) => { try { sh(...a); } catch { /* already gone */ } };

export function netDown() {
  for (let i = 1; i <= 40; i++) tryq('ip', 'netns', 'del', `cclive${i}`);
  tryq('ip', 'link', 'del', 'cclivebr0');
  // The temporary firewall opening for the test bridge only (ufw's INPUT policy is DROP); removed with the bridge.
  while (true) { try { sh('iptables', '-D', 'INPUT', '-i', 'cclivebr0', '-s', '10.77.0.0/24', '-j', 'ACCEPT'); } catch { break; } }
}
export function netUp(profile, total) {
  netDown();
  sh('ip', 'link', 'add', 'cclivebr0', 'type', 'bridge');
  sh('ip', 'addr', 'add', '10.77.0.1/24', 'dev', 'cclivebr0');
  sh('ip', 'link', 'set', 'cclivebr0', 'up');
  sh('iptables', '-I', 'INPUT', '1', '-i', 'cclivebr0', '-s', '10.77.0.0/24', '-j', 'ACCEPT');
  for (let i = 1; i <= total; i++) {
    const ns = `cclive${i}`, a = `cclv${i}a`, b = `cclv${i}b`;
    sh('ip', 'netns', 'add', ns);
    sh('ip', 'link', 'add', a, 'type', 'veth', 'peer', 'name', b);
    sh('ip', 'link', 'set', b, 'netns', ns);
    sh('ip', 'link', 'set', a, 'master', 'cclivebr0');
    sh('ip', 'link', 'set', a, 'up');
    sh('ip', 'netns', 'exec', ns, 'ip', 'addr', 'add', `10.77.0.${10 + i}/24`, 'dev', b);
    sh('ip', 'netns', 'exec', ns, 'ip', 'link', 'set', b, 'up');
    sh('ip', 'netns', 'exec', ns, 'ip', 'link', 'set', 'lo', 'up');
    const nm = PROFILES[profile].split(' ');
    sh('tc', 'qdisc', 'add', 'dev', a, 'root', 'netem', ...nm);
    sh('ip', 'netns', 'exec', ns, 'tc', 'qdisc', 'add', 'dev', b, 'root', 'netem', ...nm);
  }
}


/** The access point's plug: down / up. */
export const plug = (on) => sh('ip', 'link', 'set', 'cclivebr0', on ? 'up' : 'down');
/** argv to run a command inside client i's namespace. */
export const inNs = (i, argv) => ['ip', 'netns', 'exec', `cclive${i}`, ...argv];
