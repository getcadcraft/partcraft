---
title: Mga script sa Lua
summary: Sumulat ng mga script ng Script workspace sa Lua 5.4: ang cs table ng mga built-in function, mga array bilang value na may indexing at arithmetic, ang shared na ws workspace, pag-print at pagpapakita ng resulta, at kung ano ang naka-off.
keywords: Lua, Lua 5.4, script, language, cs table, ws, workspace, userdata, tensor, array, matrix, print, display, sandbox
from: 82c668b3
---

Ang Lua ang pangalawang wika ng [Script workspace](topic:craftscript). Piliin ang **Lua** sa language box sa itaas ng editor (ang `.lua` file ay magbubukas sa Lua mismo). Ang Lua at CraftScript ay nagbabahagi ng parehong variable at parehong built-in function, kaya maaaring gamitin ng Lua script ang ginawa ng CraftScript script, at ganoon din sa kabilang panig.

## Ang mga pangunahing bagay

```
-- bawat built-in function ay nasa cs table
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-based, gaya sa CraftScript
print(K(1, 1), #K)             -- isang element; ang bilang ng mga element
-- ang workspace: ang parehong variable na nakikita ng bawat script
ws.total = K(1, 1) * 2
print(ws.total)
-- ilang resulta mula sa isang function
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- Ang `cs.<name>(…)` ay tumatawag sa anumang built-in function at ibinabalik ang unang resulta nito; ang `cs.call(name, n, …)` ay nagbabalik ng `n` na resulta.
- Ang `cs.tensor({1, 2, 3})` ay gumagawa ng row, ang `cs.tensor({{1, 2}, {3, 4}})` ay gumagawa ng matrix.
- Ang mga array, sparse matrix, mesh at field ay mga value na may method: `t(i, j)` o `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpose), `t:totable()`. Ang `+ - * / ^` ay may parehong kahulugan sa CraftScript (ang `*` ay matrix product); ang `t:times(u)` ay nagpaparami element by element.
- Ang number na 1×1 array ay dumarating bilang plain Lua number.
- Ang `ws.name` ay nagbabasa at nagsusulat sa shared workspace. Ang mga global variable na iiwan ng script mo ay napupunta rin doon kapag natapos ito.
- Ang `print(…)` ay nagsusulat sa console; ang `cs.show(f)`, `cs.plot(y)` at iba pang display function ay gumagana gaya ng sa CraftScript.

## Tawagin ang analysis library

Ang mga function ng analysis library (ang Library tab) at ang mga CraftScript function na tinutukoy ng sarili mong script ng part ay naaabot din sa pamamagitan ng `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dalawang output
```

Natatagpuan ang mga ito bago magsimula ang script, kaya isulat ang pangalan sa script: `cs.static_tet(` o `cs.call('static_tet', …)`. Ang pangalang binuo habang tumatakbo ang script ay umaabot lamang sa mga built-in function. Ang struct na ginawa gamit ang `cs.struct({ … })` ay isang CraftScript struct, at ang Lua list nito (`{ cs.struct(…), … }`) ay cell, na siyang inaasahan ng mga setting ng library. Kapag may nagkamali sa loob ng isang library function, ang mensahe ay nagpapangalan ng function at ng linya nito, at itinuturo ang linya mo na tumawag dito.

## Naka-off

Hindi maaabot ng mga script ang mga file, network o page: ang `io`, `os` (maliban sa clock), `require`, `dofile`, `loadfile` at `debug` ay tinanggal. Gamitin ang Buksan ng Script workspace at ang mga variable para magdala ng data. Gumagana ang step budget at Ihinto gaya ng sa CraftScript.
