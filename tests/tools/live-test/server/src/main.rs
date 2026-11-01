// SPDX-License-Identifier: Apache-2.0
//! `live-server`: Studio Live's session server without Studio, for tests and the LV.1 spike.
//!
//!   live-server [--bind 0.0.0.0:0] [--app cadcraft] [--auto-approve] [--token <local token>] [--log-keep N]
//!               [--max-clients N] [--www <folder served on the same port>] [--plain] [--stats]
//!               [--relay <wss://…/live/relay/host/ROOM> --ticket <host ticket>] [--from <state file>]
//!
//! --from: carry on from a host handoff's state (MessagePack, `handover.state`; LV.17).
//! --plain: network clients skip the handshake and frame encryption (tests of the session logic only; Studio never).
//!
//! Prints one JSON line `{"addr": "...", "session": "..."}` when listening, then a stats line every second on stderr
//! with --stats. Stops on stdin EOF.
use cc_live_harness::live;

use std::io::BufRead;

fn main() {
    let args: Vec<String> = std::env::args().collect();
    let val = |k: &str| args.iter().position(|a| a == k).and_then(|i| args.get(i + 1)).cloned();
    let mut cfg = live::Config::default();
    cfg.app = val("--app").unwrap_or_default();
    cfg.auto_approve = args.iter().any(|a| a == "--auto-approve");
    cfg.plain = args.iter().any(|a| a == "--plain");
    cfg.local_token = val("--token").unwrap_or_default();
    if let Some(n) = val("--log-keep").and_then(|v| v.parse().ok()) {
        cfg.log_keep = n;
    }
    if let Some(n) = val("--max-clients").and_then(|v| v.parse().ok()) {
        cfg.max_clients = n;
    }
    let bind = val("--bind").unwrap_or_else(|| "127.0.0.1:0".into()).parse().expect("--bind address");
    let serve = live::Serve { www: val("--www").map(std::path::PathBuf::from) };
    let h = match val("--from") {
        Some(f) => {
            let bytes = std::fs::read(&f).expect("--from file");
            let state = rmpv::decode::read_value(&mut &bytes[..]).expect("--from: a MessagePack state");
            live::start_from(cfg, bind, serve, state).expect("start from the state")
        }
        None => live::start(cfg, bind, serve).expect("start"),
    };
    // --relay <host url> --ticket <host ticket>: also host through a relay (live/relay.rs).
    let _relay = val("--relay").map(|u| h.relay(&u, &val("--ticket").unwrap_or_default()));
    println!("{{\"addr\":\"{}\",\"session\":\"{}\"}}", h.addr, h.session_id);
    if args.iter().any(|a| a == "--stats") {
        let h2 = h.clone();
        std::thread::spawn(move || loop {
            std::thread::sleep(std::time::Duration::from_secs(1));
            if let Some((s, q, conns)) = h2.stats_blocking() {
                eprintln!("{{\"seq\":{q},\"conns\":{conns},\"commits\":{},\"refused\":{},\"presence_out\":{}}}", s.commits, s.refused, s.presence_out);
            }
        });
    }
    let stdin = std::io::stdin();
    for _ in stdin.lock().lines() {}
    h.stop();
}
