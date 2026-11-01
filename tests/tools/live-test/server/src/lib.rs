// SPDX-License-Identifier: Apache-2.0
//! Studio Live's session server module, built on its own (no Tauri) for the tests and `live-server`.
//! Site-only: the path assumes the deploy layout /var/www/CADCRAFT/{getcadcraft.com,desktop-shell}.
#[allow(dead_code)]
#[path = "../../../../../desktop-shell/src-tauri/src/live/mod.rs"]
pub mod live;
