---
title: Post processors you can edit
summary: A post is a short text file that turns the toolpath into G-code for your control. Copy one of the built-in posts, change the lines you need (line numbers, tool change, home moves, end code), see the G-code it writes as you type, and keep it with the part.
section: tasks
order: 141
keywords: post, post processor, postprocessor, G-code, NC, GRBL, LinuxCNC, edit post, custom post, cpost, tool change, M6, G43, canned cycle, line numbers, modal, event, variable
---

The same toolpath has to be written differently for different controls: line numbers or none, `M6` or a pause, `G28` or `G53`, `M30` or `M2`. A **post** is the short text that says how. PartCraft's three built-in posts (Fanuc-style, GRBL and LinuxCNC) are written in this format, so a post of your own can start as a copy of one of them.

Check the output in your machine's own simulator before cutting, and run it in the air above the stock first. The built-in posts write exactly what they wrote before this format existed (the tests compare their output byte for byte on hundreds of programs), but nothing here has been proven on your machine, and a post you change is yours to prove.

## Make one

In Manufacture, under **Post**:

- {{ui:Edit post…}} on a built-in control opens **your own copy** of it. On one of your own posts it opens that post.
- {{ui:New post…}} starts from a small blank post with every event in it.
- {{ui:Import post file…}} reads a `.cpost` text file (the file you get from **Save as a file…** in the editor).

The editor shows the text, a line that says whether it reads (and which line is wrong), and the G-code the post writes, as you type. **Preview with** chooses a small sample program that runs every event, or this part's own program. {{ui:Save}} keeps the post in the part's file (up to 20 posts) and chooses it as the control. Posts travel with the part; to use one in another part, save it as a file and import it there.

## What a post looks like

```
post mymill
name My mill (.nc)
extension nc
line-numbers off
decimal-point no
canned-cycles no
modal motion G0 G1 G2 G3

on start
  comment Program {program}: {name}
  emit G21 G90 G17
end

on tool-change
  emit T{tool.number} M6
end

on rapid
  if moved
    emit G0~ X{x}~ Y{y}~ Z{z}~
  end
end
```

Lines starting `//` and blank lines are ignored. At the top come the settings; then one `on <event>` block for each event, closed with `end`. An event you leave out writes nothing.

| Setting | Meaning |
|---|---|
| `post <id>` | The post's id: letters, digits, `-` and `_` |
| `name <text>` | What the Control list shows |
| `extension <ext>` | The file extension: nc, ngc, tap … |
| `line-numbers 10` / `off` | `N10`, `N20` … on every `emit` line, or none |
| `decimal-point yes` / `no` | `10.` instead of `10` (comments never carry the point) |
| `canned-cycles yes` / `no` | `no`: holes are written as the G0/G1 moves they stand for |
| `modal <group> <words>` | Words of a group (`modal motion G0 G1 G2 G3`) that are written only when they change |

## Events

They run in this order for a program: `start`; then for each operation `operation`, `tool-change` (when the tool changes), `spindle` (when the speed changes), `approach` (the move up to the first point, before the first rapid), `coolant-on`, then its moves as `rapid`, `feed` and `arc`, and each canned cycle as `cycle-start`, one `cycle-hole` per hole and `cycle-end`; at last `end`.

Each event can use the variables of its own kind of move, written `{name}`: the program (`name`, `program`, `setup.axis`, `setup.origin`, `setup.coolant`), the stock (`stock.kind`, `stock.d`, `stock.sx`, `stock.sy`, `stock.sz`, `stock.minx` … `stock.maxz`), the tool (`tool.number`, `tool.desc`, `tool.kind`, `tool.d`, `tool.flutes`, `tool.fluteLen`), the operation (`op.name`, `op.type`), `rpm`, the point of a move (`x`, `y`, `z`, `f`, and `moved`: true when an axis changed), arcs (`arc.g` 2 or 3, `arc.i`, `arc.j`, `arc.cx`, `arc.cy`) and holes (`hole.x`, `hole.y`, `hole.z`, `hole.r`, `hole.q`, `hole.return`, `hole.first`, `cycle.kind`, `cycle.init`, `feed`). The editor's **Events and variables** list shows which event sees which. State you can read and set: `cool`, `offset`, and `at.x`, `at.y`, `at.z`, `at.f` (the last values written).

## Statements

| Statement | What it does |
|---|---|
| `raw TEXT` | A line exactly as typed (no line number) |
| `comment TEXT` | `(TEXT)` with non-ASCII and brackets taken out |
| `emit WORD WORD …` | A line of words; words that come out empty are left out; no words, no line |
| `word WORD …` | Add words to the line being built; a bare `emit` ends it |
| `if EXPR` … `else` … `end` | Conditions: `a == b`, `a != b`, `not a`, `a and b`, `a or b`, `a??b` (a, else b) |
| `for tool in tools` … `end` | Once for each tool the program uses |
| `set NAME EXPR` | Remember a value (`set offset tool.number`) |
| `reset NAME …` | Forget modal words (a group, an address letter like `Z`, or `at.z`) |
| `do rapid X Y Z` | Run the `rapid` event for a point |

A word is typed text with `{variable|filter}` holes. The filters are `upper`, `lower`, `pad:N` (zero fill), `cut:N` (first N characters), `safe` (comment-safe ASCII) and `int`. A word ending `~` is **modal**: it is written only when it differs from what was last written (`G1~`, `X{x}~`). A word ending `~!` is written every time and still remembered. A name that is not a variable is plain text (`G81`, `mist`). Numbers are rounded to 0.001 mm and written without trailing zeros.

## What a post cannot do

It decides how the moves are written, nothing more. It cannot change a toolpath, order operations, split an arc, add an axis, know your machine's travel or kinematics, or do arithmetic on coordinates (there is no `+`). Probing, tool-life and subprogram cycles, 4th- and 5th-axis output and lathe codes are not built. A `.cps`-style post file from another program cannot be loaded: this is a different, simpler format.
