// SPDX-License-Identifier: Apache-2.0
//! The same-port file server (LV.12): paths stay inside the folder, pages are marked.
use cc_live_harness::live::http::{mark_page, resolve, PAGE_MARK};

#[test]
fn paths_stay_inside_the_folder() {
    let dir = std::env::temp_dir().join(format!("cc-live-http-{}", std::process::id()));
    std::fs::create_dir_all(dir.join("apps/cadcraft")).unwrap();
    std::fs::write(dir.join("index.html"), "<html><head></head></html>").unwrap();
    std::fs::write(dir.join("apps/cadcraft/index.html"), "x").unwrap();
    std::fs::write(dir.join(".env"), "SECRET=1").unwrap();
    assert!(resolve(&dir, "/").is_some());
    assert!(resolve(&dir, "/apps/cadcraft/").is_some());
    assert!(resolve(&dir, "/apps/cadcraft").is_some(), "a folder without the slash serves its index");
    for bad in ["/../etc/passwd", "/apps/../../etc/passwd", "/%2e%2e/etc/passwd", "/.env", "/apps/%00x", "/nope.html"] {
        assert!(resolve(&dir, bad).is_none(), "{bad} was served");
    }
    #[cfg(unix)]
    {
        std::os::unix::fs::symlink("/etc", dir.join("out")).unwrap();
        assert!(resolve(&dir, "/out/hostname").is_none(), "a symlink out of the folder was followed");
    }
    std::fs::remove_dir_all(&dir).unwrap();
}

#[test]
fn pages_are_marked() {
    let out = String::from_utf8(mark_page(b"<!doctype html><HTML><Head lang=x><title>t</title>".to_vec())).unwrap();
    assert_eq!(out, format!("<!doctype html><HTML><Head lang=x>{PAGE_MARK}<title>t</title>"));
    assert_eq!(mark_page(b"no head here".to_vec()), b"no head here".to_vec());
}
