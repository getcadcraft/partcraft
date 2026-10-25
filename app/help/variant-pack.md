---
title: Make a variant pack from your configurations
summary: Build every configuration of a part, or a chosen few, in one go as STEP, IFC, DWG and a preview each, with a table of their parameters and the part as one library item with its variants.
section: tasks
order: 107
keywords: variant pack, variants, configurations, family of parts, batch export, every size, step, ifc, dwg, preview, table, csv, json, library, configurator, product configurator, catalog, item json
---

## What you'll do

Hand over **every size of a part at once**: one STEP, IFC and DWG file and a picture for each configuration, a table that says what each one is, and a library item that puts all of them on one page.

You need a part with **configurations** first (see [Configurations and design tables](topic:design-tables)). A configuration that turns a feature off, such as a plate with and without holes, becomes its own variant.

## Steps

1. Open the part. On the {{ui:Parameters}} tab, find **Configurations**.
2. Click {{ui:Variant pack…}}.
3. Tick the configurations to build (all are ticked) and the files to write: STEP, IFC, DWG, a preview, and the library item.
4. Click {{ui:Make the pack}}. The status line counts the variants as they are built; your part is not changed.
5. One zip downloads: `<part> variants.zip`.

## What is in the zip

| File | What it is |
|---|---|
| `<name>.step` | The configuration as a STEP solid. |
| `<name>.ifc` | IFC4, one element with the built body and the part's parameters as properties; the value is that configuration's own. |
| `<name>.dwg` | The front, top, right and isometric views as a drawing sheet at full size. |
| `<name>.svg` | An isometric line picture of it. |
| `variants.csv`, `variants.json` | The parameter table: each variant's id, name and value of every parameter, the features it turns off, its files, its volume and its size. |
| `<part>.item.json` | The part as one library item with its variants (see below). |
| `README.txt` | What was made, the notes below, and anything that was not built. |

Files are named by the configuration. A configuration that fails to build (a feature that cannot be made with those values) is left out of the files and the table, listed in the README and in a message after the zip is saved; the others are still written.

## Good to know

- **STEP** is exact when the exact kernel is on in your build. Without it the STEP is faceted (flat triangles), and the README says so.
- **DWG** is the drawing sheet, not a 3D model. Its lines come from the mesh, so a curved edge is many short lines.
- **The library item** carries one body and one footprint per variant, in the library's own axes: Z up, the front toward −Y, and the insertion point at the middle of the back at the bottom. The plan is each variant's bounding rectangle. An item is limited to 8 MB, so a very heavy variant becomes a box of its size and the README says how many.
- The part's active configuration is the item's default variant.
- Ports (connection points for pipes and ducts) are not set from PartCraft.

## Put the variants on a library page

Upload `<part>.item.json` at **Library › Upload** on the site. Choose its category, license and your credit line, and it becomes a LibraryCraft item with its variants. In BimCraft, placing it asks which variant, and Swap offers the others. The page where visitors choose options, see the 3D and download a variant is a **staff preview** for now: it is not open to the public yet.

## From the command line

```
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --out-dir plate-variants
node tools/partcraft-cli/partcraft.mjs variants plate.partcraft.json --only "Small,Large" --formats step,preview --zip plate.zip
```

`--only` names the configurations, `--formats` any of `step`, `ifc`, `dwg`, `preview`, `--no-item` leaves the library item out. It writes a folder, a zip or both and exits 1 when a variant could not be built. See [Scripts and the command line](topic:scripts-and-cli).
