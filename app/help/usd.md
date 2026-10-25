---
title: Export a part or an assembly as USD
summary: Write the part, or the whole assembly with each part once and every copy placed, as a USD package.
section: tasks
order: 140
keywords: usd, usdz, openusd, export, assembly, package, rendering, scene
---

Choose {{ui:Export}} › {{ui:USD package (.usdz)}}.

- In a part, the file holds the part's solid with its material, volume and mass.
- In an assembly, each part is written once and every copy is placed where the assembly puts it, so the file stays small however many copies there are.

PartCraft works in millimetres with Y up; the USD file is in metres with Z up, as most 3D programs expect.
