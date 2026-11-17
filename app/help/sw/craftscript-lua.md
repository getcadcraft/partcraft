---
title: Scripts katika Lua
summary: Andika scripts za Eneo la Script kwa Lua 5.4: jedwali cs la kazi zilizojengwa ndani, safu kama thamani zenye faharasa na hesabu, eneo la kazi la pamoja ws, kuchapisha na kuonyesha matokeo, na kilichozimwa.
keywords: Lua, Lua 5.4, script, lugha, jedwali cs, ws, eneo la kazi, userdata, tensor, safu, matriki, print, display, sandbox
from: 82c668b3
---

Lua ni lugha ya pili ya [Eneo la Script](topic:craftscript). Chagua **Lua** kwenye kisanduku cha lugha juu ya kihariri (faili la `.lua` hufunguka kwa Lua lenyewe). Lua na CraftScript vinashiriki vigeu vile vile na kazi zile zile zilizojengwa ndani, kwa hiyo script ya Lua inaweza kutumia kilichotengenezwa na script ya CraftScript, na kinyume chake.

## Msingi

```
-- kila kazi iliyojengwa ndani iko kwenye jedwali cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- inaanza na 1, kama CraftScript
print(K(1, 1), #K)             -- kipengele; idadi ya vipengele

-- eneo la kazi: vigeu vile vile ambavyo kila script inaviona
ws.total = K(1, 1) * 2
print(ws.total)

-- matokeo kadhaa kutoka kazi moja
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` huita kazi yoyote iliyojengwa ndani na kurudisha matokeo yake ya kwanza; `cs.call(name, n, …)` hurudisha matokeo `n`.
- `cs.tensor({1, 2, 3})` hutengeneza safu-mlalo, `cs.tensor({{1, 2}, {3, 4}})` matriki.
- Safu, matriki adimu, mesh na nyanja ni thamani zenye mbinu: `t(i, j)` au `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (geuza), `t:totable()`. `+ - * / ^` zina maana sawa na katika CraftScript (`*` ni zidisho la matriki); `t:times(u)` huzidisha kipengele kwa kipengele.
- Namba ambayo ni safu ya 1×1 hufika kama namba ya kawaida ya Lua.
- `ws.name` husoma na kuandika eneo la kazi la pamoja. Vigeu vya kimataifa ambavyo script yako inaviacha pia huishia hapo itakapomalizika.
- `print(…)` huandika kwenye kiweko; `cs.show(f)`, `cs.plot(y)` na kazi nyingine za kuonyesha hufanya kazi kama katika CraftScript.

## Kuita maktaba ya uchambuzi

Kazi za maktaba ya uchambuzi (kichupo cha Maktaba) na kazi za CraftScript ambazo script za sehemu yako yenyewe zinazifafanua pia zinafikiwa kupitia `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- matokeo mawili
```

Zinapatikana kabla script haijaanza, kwa hiyo andika jina ndani ya script: `cs.static_tet(` au `cs.call('static_tet', …)`. Jina lililojengwa wakati script inaendeshwa hufikia kazi zilizojengwa ndani tu. Struct iliyojengwa kwa `cs.struct({ … })` ni struct ya CraftScript, na orodha ya Lua ya hizo (`{ cs.struct(…), … }`) ni seli, ambayo ndiyo mipangilio ya maktaba inayotarajia. Kosa likitokea ndani ya kazi ya maktaba, ujumbe unataja kazi hiyo na mstari wake, na unaelekeza kwenye mstari wako uliomwita.

## Vilivyozimwa

Scripts haziwezi kufikia faili, mtandao au ukurasa: `io`, `os` (isipokuwa saa), `require`, `dofile`, `loadfile` na `debug` vimeondolewa. Tumia Fungua ya Eneo la Script na vigeu kuleta data. Bajeti ya hatua na Simamisha hufanya kazi kama katika CraftScript.
