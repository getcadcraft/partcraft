---
title: What's new in 0.10
summary: Big parts open without freezing the window, an assembly over the part limit says how many parts it places, and fixes for DXF units, the Design toolbar and Library items.
section: start
order: 5
keywords: whats new, what's new, 0.10, release notes, changelog, changes, version, new features, big parts, freeze, holes, plate, large assembly, part limit, 50000 parts, instance list, dxf, inches, units, design toolbar, enter, library, ifc class, pro layouts, trackpad, swipe, tour
---

This is what changed in PartCraft 0.10, compared with 0.9. It is a small release for this app, about big parts and big assemblies.

## New

- **Big parts open without freezing.** The longest freeze on opening a 1,600-hole plate went from 7.9 s to 0.16 s. The work moved off the page; the total time is about the same.
- **Large assemblies.** A file over the 50,000-part limit now says how many parts it places, instead of "The assembly has no instance list."

## Fixed

- DXF files from PartCraft were read as inches in other programs.
- The Design toolbar wrapped to two rows at 1440 px, and a single digit typed for the selected feature was not set by {{key:Enter}}.
- Library items were written without an IFC class.

## In every app

- **Docking tool groups.** In a layout with a ribbon, tool rows or a toolbox, a group of tools can be docked as a palette beside the part. See [Dock a group of tools](common:dock-tool-groups).
- **Four Pro layouts** (Ribbon, Workbench, Review, Studio) in an optional Pro skin, in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}.
- **A two-finger trackpad swipe pans** the sketch and the sheet.
- **Tour tips** have one {{ui:Next}} button; the X closes the tour.

## Said plainly

- Assemblies open up to 50,000 parts and 100,000 joints; raising the limits waits on a browser measurement.
- Not every slow path on a big part has moved off the page yet.
- Docking tool groups has not been tried on two monitors.
- The new tools were checked by automated tests in a browser, not yet by a person on a real project.
- Languages beyond English are machine drafts, and some words new in 0.10 are still English only.

For the version before this one, see [What's new in 0.9](topic:whats-new-0-9).
