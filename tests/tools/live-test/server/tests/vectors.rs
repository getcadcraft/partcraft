// SPDX-License-Identifier: Apache-2.0
//! docs/LIVE-PROTOCOL.md § 13: the Rust side of the shared vectors. The JS side is tools/live-test/test-vectors.mjs.
mod common;
use cc_live_harness::live::msg::Envelope;
use common::*;

#[test]
fn envelopes_encode_and_decode_like_js() {
    let v = vectors();
    let list = v["envelopes"].as_array().unwrap();
    assert!(list.len() >= 30);
    for e in list {
        let name = e["name"].as_str().unwrap();
        let bytes = unhex(e["hex"].as_str().unwrap());
        let want = to_value(&e["value"]);
        // JS's bytes decode to the intended value…
        let got = rmpv::decode::read_value(&mut &bytes[..]).unwrap_or_else(|err| panic!("{name}: {err}"));
        assert_eq!(got, want, "{name}: decoded value");
        // …our value encoder writes the same bytes…
        let mut ours = vec![];
        rmpv::encode::write_value(&mut ours, &want).unwrap();
        assert_eq!(hex(&ours), hex(&bytes), "{name}: value encoding");
        // …and the envelope type reads it and writes it back byte for byte.
        let env = Envelope::decode(&bytes).unwrap_or_else(|err| panic!("{name}: {err}"));
        assert_eq!(hex(&env.encode()), hex(&bytes), "{name}: envelope round trip");
    }
}

#[test]
fn other_valid_encodings_decode() {
    let v = vectors();
    for e in v["decode_only"].as_array().unwrap() {
        let name = e["name"].as_str().unwrap();
        let bytes = unhex(e["hex"].as_str().unwrap());
        let got = rmpv::decode::read_value(&mut &bytes[..]).unwrap();
        // Integers compare by value whatever width was used on the wire.
        assert_eq!(format!("{got}"), format!("{}", to_value(&e["value"])), "{name}");
        Envelope::decode(&bytes).unwrap_or_else(|err| panic!("{name}: {err}"));
    }
}

#[test]
fn bad_inputs_are_refused() {
    let v = vectors();
    for e in v["bad"].as_array().unwrap() {
        let name = e["name"].as_str().unwrap();
        assert!(Envelope::decode(&unhex(e["hex"].as_str().unwrap())).is_err(), "{name} was accepted");
    }
}
