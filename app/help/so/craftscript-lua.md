---
title: Scripts-ka Lua
summary: Qor scripts-ka Goobta Script ee Lua 5.4: miiska cs ee built-in functions-ka, arrays oo ah qiyam leh tusmeyn iyo xisaab, workspace-ka wadaagga ah ws, daabacaadda iyo muujinta natiijooyinka, iyo waxa la damiyay.
keywords: Lua, Lua 5.4, script, luqad, miiska cs, cs table, ws, workspace, userdata, tensor, array, matrikis, print, display, sandbox
from: 82c668b3
---

Lua waa luqadda labaad ee [Goobta Script](topic:craftscript). Dooro **Lua** sanduuqa luqadda ee kor ku yaal editor-ka (fayl `.lua` wuxuu si toos ah ugu furmaa Lua). Lua iyo CraftScript waxay wadaagaan isla doorsoomayaasha iyo isla built-in functions-ka, sidaas darteed script Lua wuxuu isticmaali karaa waxa script CraftScript sameeyay, iyo sidii kale.

## Aasaasiyaadka

```
-- built-in function kasta waxay ku jirtaa miiska cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1 ka bilaabo, sida CraftScript
print(K(1, 1), #K)             -- hal unug; tirada unugyada
-- workspace-ka: isla doorsoomayaasha script kasta arka
ws.total = K(1, 1) * 2
print(ws.total)
-- natiijooyin badan oo hal function ka soo baxa
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` wuxuu wacaa built-in function kasta oo soo celinaya natiijadiisa koowaad; `cs.call(name, n, …)` wuxuu soo celinayaa `n` natiijo.
- `cs.tensor({1, 2, 3})` wuxuu sameeyaa safka, `cs.tensor({{1, 2}, {3, 4}})` matrikis.
- Arrays, matrikisyada sparse, meshes iyo fields waa qiyam leh habab: `t(i, j)` ama `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpose), `t:totable()`. `+ - * / ^` waxay ka dhigan yihiin waxa ay CraftScript ka dhigan yihiin (`*` waa wax-soo-saarka matrikiska); `t:times(u)` wuxuu sii dhufanayaa unug-unug.
- Tiro ah oo array 1×1 ah wuxuu u yimaadaa sida tiro Lua oo fudud.
- `ws.name` wuxuu akhrinayaa oo qoraa workspace-ka wadaagga ah. Doorsoomayaasha caalamiga ah ee script-ku ka tago ayaa halkaas u galaya marka uu dhammaado.
- `print(…)` wuxuu daabacaa console-ka; `cs.show(f)`, `cs.plot(y)` iyo habab kale oo muujinta ah waxay u shaqeeyaan sida CraftScript.

## Wac maktabadda falanqaynta

Functions-ka maktabadda falanqaynta (tab-ka Library) iyo functions-ka CraftScript ee scripts-ka qaybtaada qeexaan ayaa sidoo kale lagu gaadhaa `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- laba natiijo
```

Waa la helaa ka hor inta script-ku bilaabanin, sidaas darteed magaca ku qor script-ka: `cs.static_tet(` ama `cs.call('static_tet', …)`. Magac la dhisay socodka script-ka wuxuu gaadhaa built-in functions-ka oo keliya. Struct la dhisay `cs.struct({ … })` waa struct CraftScript, liiska Lua ee ka kooban (`{ cs.struct(…), … }`) waa cell, taasoo ah waxa dejinta maktabadda rabto. Haddii wax khaldamo ku dhaco function maktabad gudihiisa, fariintu waxay magacaabaysaa function-ka iyo sadarkiisa, waxayna tilmaamaysaa sadarkaaga ee wicitaanka.

## Waxa la damiyay

Scripts-ku ma gaadhi karaan faylal, shabakad ama bogga: `io`, `os` (marka laga reebo saacadda), `require`, `dofile`, `loadfile` iyo `debug` waa la ka saaray. Isticmaal Fur ee Goobta Script iyo doorsoomayaasha si xogta loo keeno. Miisaaniyadda tallaabooyinka iyo Stop waxay u shaqeeyaan sida CraftScript.
