---
title: The tool library
summary: Save the tools you use in the browser so every part can have them, and move tool libraries between computers as a JSON file.
section: tasks
order: 143
keywords: tool library, tools, export, import, JSON, save tools, T number, end mill, shop tools
---

Manufacture's **Tools** tab lists the tools of the part. Under **Tool library** you can keep your own tools beyond one part:

- {{ui:Save this tool}} adds the selected tool to **My saved tools**; {{ui:Save all of this part's tools}} adds all of them. My saved tools are kept in this browser and are there for every part. A tool you already saved (same kind, size, flutes and overrides) is not saved twice.
- {{ui:Add to this part}} takes the chosen saved tool into the part. If its T number is already used by another tool in the part, it gets the next free number and the panel says so. {{ui:Remove from my library}} drops it from the saved list (not from parts that already have it).
- {{ui:Export tools…}} writes the part's tools as a `.json` file; {{ui:Import tools…}} adds the tools of such a file to the part, with the same rules (a tool already there is skipped, a taken T number moves). The file holds sizes, flutes, materials and the feed and speed overrides you typed; it has no ids. Use it to move a shop's tools to another computer or to give them to a colleague.

If the browser would not keep the library (storage is off, or full), saving says so and **Export tools** is the way to keep a file. A file must be a PartCraft tool library of this version or older, with at most 500 tools of valid sizes; anything else is refused with the reason.

The cutting speeds and chip loads that come with a tool are starting values; see [Make toolpaths and G-code](topic:manufacture).
