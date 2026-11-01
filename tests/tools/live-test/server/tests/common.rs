// SPDX-License-Identifier: Apache-2.0
//! Shared helpers for the live tests: vectors.json values ⇄ MessagePack values.
#![allow(dead_code)]
use rmpv::Value;

pub fn vectors() -> serde_json::Value {
    let p = concat!(env!("CARGO_MANIFEST_DIR"), "/../vectors.json");
    serde_json::from_str(&std::fs::read_to_string(p).expect("vectors.json (node tools/live-test/make-vectors.mjs)")).unwrap()
}

pub fn unhex(s: &str) -> Vec<u8> {
    (0..s.len()).step_by(2).map(|i| u8::from_str_radix(&s[i..i + 2], 16).unwrap()).collect()
}
pub fn hex(b: &[u8]) -> String {
    b.iter().map(|x| format!("{x:02x}")).collect()
}

/// JSON form → value: {"$bin": hex} → bytes, {"$int": "…"} → a 64-bit integer, other objects keep their key order.
pub fn to_value(j: &serde_json::Value) -> Value {
    use serde_json::Value as J;
    match j {
        J::Null => Value::Nil,
        J::Bool(b) => Value::Boolean(*b),
        J::Number(n) => {
            if let Some(u) = n.as_u64() {
                Value::from(u)
            } else if let Some(i) = n.as_i64() {
                Value::from(i)
            } else {
                Value::F64(n.as_f64().unwrap())
            }
        }
        J::String(s) => Value::from(s.as_str()),
        J::Array(a) => Value::Array(a.iter().map(to_value).collect()),
        J::Object(o) => {
            if o.len() == 1 {
                if let Some(J::String(h)) = o.get("$bin") {
                    return Value::Binary(unhex(h));
                }
                if let Some(J::String(d)) = o.get("$int") {
                    return match d.parse::<u64>() {
                        Ok(u) => Value::from(u),
                        Err(_) => Value::from(d.parse::<i64>().unwrap()),
                    };
                }
            }
            Value::Map(o.iter().map(|(k, v)| (Value::from(k.as_str()), to_value(v))).collect())
        }
    }
}
