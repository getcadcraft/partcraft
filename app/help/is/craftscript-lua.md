---
title: Skriftur í Lua
summary: Skrifaðu skriftur fyrir Skriftvinnusvæðið í Lua 5.4: cs-taflan með innbyggðum föllum, fylki sem gildi með vísun og reikningsaðgerðum, sameiginlega ws-vinnusvæðið, prentun og birtingu niðurstaðna, og hvað er slökkt á.
keywords: Lua, Lua 5.4, skrift, tungumál, cs-tafla, ws, vinnusvæði, userdata, tensor, fylki, tvívítt fylki, prentun, birting, sandkassi
from: 82c668b3
---

Lua er annað tungumál [Skriftvinnusvæðisins](topic:craftscript). Veldu **Lua** í tungumálareitnum fyrir ofan ritilinn (`.lua`-skrá opnast í Lua af sjálfu sér). Lua og CraftScript deila sömu breytum og sömu innbyggðu föllum, þannig að Lua-skrift getur notað það sem CraftScript-skrift bjó til, og öfugt.

## Grunnatriði

```
-- sérhvert innbyggt fall er í cs-töflunni
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-byrjað, eins og í CraftScript
print(K(1, 1), #K)             -- eitt stak; fjöldi staka

-- vinnusvæðið: sömu breytur og hver skrift sér
ws.total = K(1, 1) * 2
print(ws.total)

-- nokkrar útkomur úr einu falli
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<nafn>(…)` kallar á hvaða innbyggt fall sem er og skilar fyrstu útkomu þess; `cs.call(nafn, n, …)` skilar `n` útkomum.
- `cs.tensor({1, 2, 3})` býr til röð, `cs.tensor({{1, 2}, {3, 4}})` fylki.
- Fylki, strjál fylki, net og reitir eru gildi með aðferðum: `t(i, j)` eða `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (umsnúningur), `t:totable()`. `+ - * / ^` þýða það sama og í CraftScript (`*` er fylkjamargfeldið); `t:times(u)` margfaldar stak fyrir stak.
- Tala sem er 1×1 fylki kemur sem venjuleg Lua-tala.
- `ws.name` les og skrifar sameiginlega vinnusvæðið. Alþjóðlegar breytur sem skriftan skilur eftir lenda þar líka þegar hún endar.
- `print(…)` skrifar í stjórnborðið; `cs.show(f)`, `cs.plot(y)` og hinar birtiaðgerðirnar virka eins og í CraftScript.

## Kalla á greiningarsafnið

Föll greiningarsafnsins (flipinn Safn) og CraftScript-föllin sem hlutans eigin skriftur skilgreina nást líka í gegnum `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- tvær útkomur
```

Þau finnast áður en skriftan byrjar, þannig að skrifaðu nafnið í skriftuna: `cs.static_tet(` eða `cs.call('static_tet', …)`. Nafn sem er sett saman meðan skriftan keyrir nær aðeins til innbyggðu fallanna. Strúktúr búinn til með `cs.struct({ … })` er CraftScript-strúktúr, og Lua-listi af þeim (`{ cs.struct(…), … }`) er hólf, sem stillingar safnsins krefjast. Ef eitthvað fer úrskeiðis inni í safnfalli nefnir skilaboðin fallið og línu þess, og bendir á línuna þína sem kallaði á það.

## Slökkt á

Skriftur ná ekki í skrár, netið eða síðuna: `io`, `os` (nema klukkuna), `require`, `dofile`, `loadfile` og `debug` eru fjarlægð. Notaðu {{ui:Opna}} Skriftvinnusvæðisins og breyturnar til að flytja gögn inn. Skrefamörkin og {{ui:Stöðva}} virka eins og í CraftScript.
