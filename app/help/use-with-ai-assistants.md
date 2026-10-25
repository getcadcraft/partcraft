---
title: Use PartCraft with an AI assistant
summary: Let your own AI assistant or script work with the open part: read its features, parameters and mass, change a parameter and rebuild, run a script, export and save. Off until you turn it on.
section: tasks
order: 60
keywords: ai, assistant, agent, mcp, model context protocol, script, automation, parameters, mass properties, stl, step, 3mf, permissions, disconnect, activity, folders
---

## What you will learn

How to let an AI assistant (or a script you wrote) look at the part you have open, change its parameters, run a script and export it, and how you decide what it may touch.

PartCraft has **no AI of its own** and sends nothing anywhere. You bring the assistant: any program that speaks the Model Context Protocol (MCP). PartCraft only gives it tools, and you choose which.

## Turn it on

1. Open {{ui:Settings}} (the gear in the app bar, or {{key:Mod+,}}) and go to the {{ui:PartCraft}} tab.
2. Under {{ui:Assistants}}, tick **Let AI assistants and scripts use PartCraft**. It is off until you do.
3. Choose what it may do. **Read** is ticked to start with; tick the others only when you need them.
4. To let it export and save into a folder, choose {{ui:Add a folder…}} under **Folders it may use** and pick the folder in Studio's dialog.

Assistants connect through **CadCraft Studio** on your computer: Studio shows the address and the token to paste into the assistant. A browser tab can't open a connection for an assistant.

## What an assistant can ask for

| Tool | Permission | What it does |
|---|---|---|
| `part_describe`, `features_list` | Read | The features in order with what built and what failed, the material, the solid's volume and size |
| `params_list` | Read | The parameters and every number an equation can drive, with their values |
| `mass_properties` | Read | Volume, area, centre of mass, the inertia about it; the mass when the part has a material |
| `param_set` | Edit | Sets a parameter or a feature's number and rebuilds. One step you can undo |
| `script_run` | Edit | Runs a CraftScript, Lua or Python script the way the {{ui:Script}} workspace does: sealed, no files and no network. The part does not change |
| `part_export` | Export | STL, 3MF, STEP or OpenUSD (.usdz, .usda, .usdc), as {{ui:File}} › {{ui:Export}} writes them |
| `part_save` | Save | PartCraft's own {{ui:Save}} |
| `illustrate_export` | Export | A manual from the {{ui:Illustrate}} workspace as PDF or SVG line art of its views, as the interactive 3D file, or its instructions as PDF or a web page, as the workspace's {{ui:Export}} and {{ui:Instructions}} menus write them ([Manuals](topic:illustrate)) |

:::note
This build uses the mesh kernel: volumes come from the triangles (a little under a true curved solid), and STEP is written faceted, with triangles instead of exact surfaces.
:::

## You stay in charge

- **Every change is one undo step**, labelled for the assistant, for example "Assistant: set l = 45". Press {{key:Mod+Z}} to take it back.
- **You know when one is connected.** A button in the app bar names the assistant while it is connected. Click it to see what it may do, or to **Disconnect** it.
- **Activity.** {{ui:Settings}} › {{ui:PartCraft}} › {{ui:Assistants}} › {{ui:Activity}} lists every call; {{ui:Save the log}} keeps a copy.
- **Folders.** It reads and writes files only in the folders you added; {{ui:Remove}} takes a folder back at once.

## Without opening PartCraft

The CadCraft file server for assistants (`npx @getcadcraft/mcp`) and the `cadcraft` command line open `.partcraft.json` parts with PartCraft's own code and mesh kernel, no window: the same reading tools, setting parameters, CraftScript scripts, exports (OpenUSD too) and saving. `cadcraft convert bracket.partcraft.json bracket.stl` builds a part and writes it from the command line. Manuals (`.partcraft-manual.json`) export there too: `illustrate_export`, or `cadcraft convert linkage.partcraft-manual.json linkage.pdf` (add `--instructions` for the instructions).

## If something doesn't work

- **"needs the edit permission":** tick **Edit** under {{ui:Assistants}}, then ask again.
- **"driven by the equation":** that number follows a parameter; ask the assistant to set the parameter instead.
- **Its change was wrong:** press {{key:Mod+Z}}.

## See also

- [Recipes for AI assistants](common:assistants-recipes): worked examples, each with the tools it calls.
