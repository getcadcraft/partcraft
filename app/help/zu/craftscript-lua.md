---
title: Ama-script ku-Lua
summary: Bhala ama-script e-Script workspace ngeLua 5.4: itafula le-cs lemisebenzi yangaphakathi, ama-array njengezinani anokuhlonza nokusebenza ngezibalo, i-workspace ws ehlanganyelwe, ukuphrinta nokubonisa imiphumela, nokuthi yini evaliwe.
keywords: Lua, Lua 5.4, script, ulimi, itafula cs, ws, workspace, userdata, itensa, array, matrix, phrinta, bonisa, sandbox
from: 82c668b3
---

I-Lua ulimi lwesibili kwi-[Script workspace](topic:craftscript). Khetha **Lua** ebhokisini lolimi phezu komhleli (ifayela `.lua` livula nge-Lua ngokwalo). I-Lua ne-CraftScript zabelana ngokuguquguqukayo okufanayo nemisebenzi yangaphakathi efanayo, ngakho i-script ye-Lua ingasebenzisa okwenziwe yi-script ye-CraftScript, nakuphambene.

## Okubalulekile

```
-- yonke imisebenzi yangaphakathi isetafuleni le-cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- ku-1, njenge-CraftScript
print(K(1, 1), #K)             -- isakhi; inani lezakhi

-- i-workspace: okuguquguqukayo okufanayo bonke ama-scriptababona
ws.total = K(1, 1) * 2
print(ws.total)

-- imiphumela eminingi komsebenzi owodwa
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` ibiza noma yimuphi umsebenzi wangaphakathi ibuyise umphumela wokuqala; `cs.call(name, n, …)` ibuyisa imiphumela `n`.
- `cs.tensor({1, 2, 3})` yenza umugqa, `cs.tensor({{1, 2}, {3, 4}})` yenza i-matrix.
- Ama-array, ama-sparse matrix, imesh nezinsimu yizinani ezinezindlela: `t(i, j)` noma `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (ukuguqula), `t:totable()`. `+ - * / ^` zisho okufanayo njengakwi-CraftScript (`*` ngumphumela we-matrix); `t:times(u)` iphindaphinda sakhi-sakhi.
- Inani elingu-array ye-1×1 lifika njengenombolo evamile ye-Lua.
- `ws.name` ifunda futhi ibhale i-workspace ehlanganyelwe. Okuguquguqukayo okuwumhlaba i-script yakho eyishiya nakho kufika lapho iphela.
- `print(…)` ibhala kukhonsoli; `cs.show(f)`, `cs.plot(y)` nezinye izimisebenzi zokubonisa zisebenza njengakwi-CraftScript.

## Biza umtapo wokuhlaziya

Imisebenzi yomtapo wokuhlaziya (ithebhu ye-Library) nemisebenzi ye-CraftScript ama-script wengxenye yakho achaza nawo afinyelelwa nge-`cs` nawo:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- imiphumela emibili
```

Zitholakala ngaphambi kokuqala kwe-script, ngakho bhala igama ku-script: `cs.static_tet(` noma `cs.call('static_tet', …)`. Igama elakhiwa ngenkathi i-script iqhuba lifinyelela imisebenzi yangaphakathi kuphela. I-struct eyakhiwe nge-`cs.struct({ … })` iyi-struct ye-CraftScript, nohlu lwe-Lua lwazo (`{ cs.struct(…), … }`) luyiseli, okulindelwe yizilungiselelo zomtapo. Uma kukhona okungahambi kahle ngaphakathi komsebenzi womtapo, umyalezo uqamba umsebenzi nomugqa wawo, futhi ukhomba umugqa wakho owubizile.

## Kuvaliwe

Ama-script awakwazi ukufinyelela amafayela, inethiwekhi noma ikhasi: `io`, `os` (ngaphandle kwewashi), `require`, `dofile`, `loadfile` kanye ne-`debug` ziyasuswa. Sebenzisa Vula ye-Script workspace nokuguquguqukayo ukuze ulethe idatha. Isabelo sezinyathelo nokuMisa kusebenza njengakwi-CraftScript.
