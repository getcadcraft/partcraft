---
title: Run from a USB drive
summary: What the engineering tools write and where, so CadCraft Studio can run from a USB stick or any folder without an installer and without administrator rights: settings, generators, caches and part files, and what stays on the stick.
section: tasks
order: 154
keywords: usb, portable, no installer, administrator, admin, settings, data folder, generators, where files are written, offline, privacy, host access
---

The engineering tools (generators, the engineering library, the checks and the data files) need **no administrator rights** and **no installer**. They write only what is listed here, and nothing else.

| What | Where it is kept |
|---|---|
| Your parts, with their generated bodies, data sheets and checks | The part file you save (`.partcraft.json`), where you save it. |
| Generators you opened from files | In the app's own storage: the browser's local storage in a web page, and the `data` folder next to the program in the portable Studio. At most 20. |
| Settings (voxel sizes you set, solver threads, the layout) | The same app storage. |
| Data sheets, fields, meshes | Only where you save them: the download goes where you choose. |

The tools make **no network calls of their own**: the generators that ship are files in the app's own folder, the library and the checks run on your computer in a worker that cannot reach the network, and the engineering data (water and air properties, materials) is inside the app. A generator you open from a file is read on your computer and goes nowhere.

## The portable Windows zip and Linux

The portable Studio for Windows keeps its settings, caches and add-ons in a `data` folder beside the program. The Linux AppImage keeps them beside itself when a file called `portable` sits next to it; without that file it uses your home folder. There is no portable Mac form: the system keeps an app that has been downloaded from writing next to itself. The shell's own portable notes (`Studio` help) list what the program writes.

## Host access

Nothing here asks for host access. Printers, serial machines and USB devices are separate: they ask when a job needs them, once per device, and nothing in the generators or the checks touches them.
