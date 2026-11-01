/* SPDX-License-Identifier: Apache-2.0 */
/**
 * spike-core.mjs — one LV.1 spike client (docs/0.5-PLAN.md LV.1). Self-contained: `runClient` uses only what it is
 * given (a WebSocket constructor, pack/unpack), so spike.mjs runs it in Node processes and, through
 * Function.prototype.toString, inside a Chromium page.
 *
 * Each client: hello → welcome; edits at `rate` a second (property writes on 50 shared objects, a structural create
 * now and then), presence at 30 a second; measures the edit round trip (send → its own commit), counts presence it
 * receives, checks the commit order has no gaps, keeps a running FNV-1a hash of every commit, answers pings, and when
 * 3 pings are missed (or the socket drops) reconnects with its resume token and last seq, re-sending pending edits.
 */
export function runClient(opts, deps) {
  const { WebSocketCtor, pack, unpack, now } = deps;
  const o = Object.assign({ rate: 10, presenceHz: 30, seconds: 20, name: 'client', objects: 50 }, opts);
  const st = {
    c: 0, token: '', q: 0, n: 0, pending: new Map(), rtts: [], rttsAfterRejoin: [], commits: 0, refused: 0, gaps: 0,
    presenceIn: 0, presencePeers: new Map(), reconnects: 0, rejoinMs: [], downAt: 0, hashHi: 0x811c9dc5, hashLo: 0x01000193,
    lastFrame: 0, closedByUs: false, ws: null, welcomeAt: 0, joinedMs: 0, ended: false, errors: [], snapshot: 0,
  };
  // FNV-1a 32 over two lanes (enough to compare runs; not security).
  function mix(str) {
    let h1 = st.hashHi, h2 = st.hashLo;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 16777619) >>> 0;
      h2 = Math.imul(h2 ^ (ch * 31 + 7), 2246822519) >>> 0;
    }
    st.hashHi = h1; st.hashLo = h2;
  }
  const send = (env) => { if (st.ws && st.ws.readyState === 1) st.ws.send(pack(env)); };
  const t0 = now();
  function connect() {
    const ws = new WebSocketCtor(o.url);
    ws.binaryType = 'arraybuffer';
    st.ws = ws;
    const opened = now();
    st.ready = false;
    // A connect that hangs (SYN backoff while the network is down) is dropped after 1.5 s and tried afresh.
    const guard = setTimeout(() => { if (ws.readyState === 0) { try { ws.close(); } catch { /* */ } if (st.ws === ws) { st.ws = null; setTimeout(retry, 100); } } }, 1500);
    ws.onopen = () => {
      clearTimeout(guard);
      st.lastFrame = now();
      const hello = { v: 1, app: 'spike', schema: 1, name: o.name, device: o.device || 'spike' };
      if (st.c) hello.resume = { c: st.c, token: st.token, q: st.q };
      send({ t: 'hello', b: hello });
    };
    ws.onmessage = (ev) => {
      st.lastFrame = now();
      let m;
      try { m = unpack(new Uint8Array(ev.data)); } catch (e) { st.errors.push(String(e)); return; }
      switch (m.t) {
        case 'welcome': {
          const first = !st.c;
          st.c = m.b.c; st.token = m.b.token;
          if (first) { st.q = m.q && m.b.catchup === 'log' ? st.q : st.q; st.joinedMs = now() - opened; }
          else { st.rejoinMs.push(now() - st.downAt); }
          // re-send pending edits in order (same n; the server ignores ones it already decided). Nothing is sent on a
          // new connection before this point, so the server sees every client's edits in counter order.
          for (const [n, p] of st.pending) send({ t: 'edit', n, b: p.body });
          st.ready = true;
          break;
        }
        case 'snap': st.snapshot++; break;
        case 'commit': {
          if (m.q !== st.q + 1) { if (m.q <= st.q) break; st.gaps++; }
          st.q = m.q; st.commits++;
          mix(m.q + ':' + m.b.c + ':' + m.b.n + ':' + JSON.stringify(m.b.ops));
          if (m.b.c === st.c) {
            const p = st.pending.get(m.b.n);
            if (p) { (p.resent ? st.rttsAfterRejoin : st.rtts).push(now() - p.at); st.pending.delete(m.b.n); }
          }
          break;
        }
        case 'refuse': st.refused++; st.pending.delete(m.n || m.b.n); break;
        case 'presence': {
          if (st.stopped || (o.startAt && Date.now() < o.startAt)) break;
          const peers = m.b.peers || {};
          for (const k of Object.keys(peers)) { st.presenceIn++; st.presencePeers.set(k, (st.presencePeers.get(k) || 0) + 1); }
          break;
        }
        case 'ping': send({ t: 'pong', n: m.n }); break;
        case 'end': st.ended = true; break;
        default: break;
      }
    };
    ws.onclose = () => {
      clearTimeout(guard);
      if (st.closedByUs || st.ended) return;
      if (!st.downAt || st.ws === ws) { st.downAt = st.downAt || now(); }
      if (st.ws === ws) { st.ws = null; setTimeout(retry, 500); }
    };
    ws.onerror = () => {};
  }
  function retry() {
    if (st.closedByUs || st.ws) return;
    st.reconnects++;
    for (const p of st.pending.values()) p.resent = true;
    connect();
    // if this attempt does not open, onclose schedules the next one
  }
  connect();
  let lastEdit = now(), lastPres = now(), lastCheck = now();
  const timer = setInterval(() => {
    const t = now();
    // 3 missed pings (6 s of silence): treat the host as gone, reconnect.
    if (st.ws && st.ws.readyState === 1 && t - st.lastFrame > 6000) {
      st.downAt = t;
      const ws = st.ws; st.ws = null;
      try { ws.close(); } catch { /* */ }
      setTimeout(retry, 100);
    }
    const go = !o.startAt || Date.now() >= o.startAt;
    if (st.ws && st.ws.readyState === 1 && st.ready && go) {
      if (t - lastEdit >= 1000 / o.rate) {
        lastEdit = t;
        const n = ++st.n;
        const k = 'e:' + Math.floor(Math.random() * o.objects);
        const structural = n % 20 === 0;
        const body = structural
          ? { label: 'add', ops: [{ add: st.c + ':' + n }], touched: [{ k: 'e:' + st.c + ':' + n, m: 'c' }] }
          : { label: 'color', ops: [{ k, color: n % 255 }], touched: [{ k, f: 'color', m: 'p' }] };
        st.pending.set(n, { at: t, body, resent: false });
        send({ t: 'edit', n, b: body });
      }
      if (t - lastPres >= 1000 / o.presenceHz) {
        lastPres = t;
        send({ t: 'presence', b: { cursor: [Math.random() * 100, Math.random() * 100], view: [0, 0, 100, 100] } });
      }
    } else if (go && st.c) {
      // edits keep being made while offline (they queue)
      if (t - lastEdit >= 1000 / o.rate) {
        lastEdit = t;
        const n = ++st.n;
        const k = 'e:' + Math.floor(Math.random() * o.objects);
        const body = { label: 'color', ops: [{ k, color: n % 255 }], touched: [{ k, f: 'color', m: 'p' }] };
        st.pending.set(n, { at: t, body, resent: true });
      }
    }
    void lastCheck;
  }, 5);
  const wait = Math.max(0, (o.startAt || 0) - Date.now());
  return new Promise((resolve) => {
    setTimeout(() => {
      // stop editing, let in-flight commits land, then report
      clearInterval(timer);
      st.stopped = true;
      setTimeout(() => {
        st.closedByUs = true;
        const sorted = (a) => a.slice().sort((x, y) => x - y);
        const pct = (a, p) => (a.length ? a[Math.min(a.length - 1, Math.floor(a.length * p))] : null);
        const r = sorted(st.rtts), rr = sorted(st.rttsAfterRejoin);
        const secs = o.seconds;
        try { send({ t: 'bye' }); st.ws && st.ws.close(); } catch { /* */ }
        resolve({
          name: o.name, c: st.c, edits: st.n, commits: st.commits, refused: st.refused, gaps: st.gaps, q: st.q,
          hash: st.hashHi.toString(16).padStart(8, '0') + st.hashLo.toString(16).padStart(8, '0'),
          samples: r.map((x) => +x.toFixed(2)),
          rtt: { n: r.length, p50: pct(r, 0.5), p90: pct(r, 0.9), p99: pct(r, 0.99), max: r.length ? r[r.length - 1] : null },
          rttAfterRejoin: { n: rr.length, p50: pct(rr, 0.5), max: rr.length ? rr[rr.length - 1] : null },
          pendingLeft: st.pending.size,
          presencePerSecPerPeer: st.presencePeers.size ? +(st.presenceIn / st.presencePeers.size / secs).toFixed(1) : 0,
          reconnects: st.reconnects, rejoinMs: st.rejoinMs, joinMs: st.joinedMs, errors: st.errors.slice(0, 5),
        });
      }, o.settleMs || 3000);
    }, wait + o.seconds * 1000);
  });
}
