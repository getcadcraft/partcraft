---
title: Skripte in Lua
summary: Skryf Skrip-werkruimte-skripte in Lua 5.4: die cs-tabel van ingeboude funksies, skikkings as waardes met indeksering en rekenkunde, die gedeelde ws-werkruimte, druk en wys van resultate, en wat afgeskakel is.
keywords: Lua, Lua 5.4, skrip, taal, cs-tabel, ws, werkruimte, userdata, tensor, skikking, matriks, druk, vertoon, sandbox
from: 82c668b3
---

Lua is die tweede taal van die [Skrip-werkruimte](topic:craftscript). Kies **Lua** in die taalkassie bo die redigeerder (`.lua`-lêer open vanself in Lua). Lua en CraftScript deel dieselfde veranderlikes en dieselfde ingeboude funksies, so 'n Lua-skrip kan gebruik wat 'n CraftScript-skrip gemaak het, en andersom.

## Die belangrikste

```
-- elke ingeboude funksie is in die cs-tabel
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-gebaseer, soos CraftScript
print(K(1, 1), #K)             -- 'n element; die aantal elemente

-- die werkruimte: dieselfde veranderlikes wat elke skrip sien
ws.total = K(1, 1) * 2
print(ws.total)

-- verskeie resultate uit een funksie
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` roep enige ingeboude funksie aan en gee sy eerste resultaat terug; `cs.call(name, n, …)` gee `n` resultate terug.
- `cs.tensor({1, 2, 3})` maak 'n ry, `cs.tensor({{1, 2}, {3, 4}})` 'n matriks.
- Skikkings, yl matrikse, maas en velde is waardes met metodes: `t(i, j)` of `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponeer), `t:totable()`. `+ - * / ^` beteken wat hulle in CraftScript beteken (`*` is die matriksproduk); `t:times(u)` vermenigvuldig element vir element.
- 'n Getal wat 'n 1×1-skikking is, kom aan as 'n gewone Lua-getal.
- `ws.name` lees en skryf die gedeelde werkruimte. Globale veranderlikes wat jou skrip agterlaat, beland ook daar wanneer dit eindig.
- `print(…)` skryf na die konsole; `cs.show(f)`, `cs.plot(y)` en die ander vertoonfunksies werk soos in CraftScript.

## Roep die analise-biblioteek aan

Die analise-biblioteek se funksies (die Biblioteek-blad) en die CraftScript-funksies wat jou onderdeel se eie skripte definieer, word ook deur `cs` bereik:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- twee uitsette
```

Hulle word gevind voordat die skrip begin, so skryf die naam in die skrip: `cs.static_tet(` of `cs.call('static_tet', …)`. 'n Naam wat terwyl die skrip loop saamgestel word, bereik net die ingeboude funksies. 'n Struct gebou met `cs.struct({ … })` is 'n CraftScript-struct, en 'n Lua-lys daarvan (`{ cs.struct(…), … }`) is 'n sel, wat is wat die biblioteek se instellings verwag. As iets binne 'n biblioteekfunksie verkeerd gaan, noem die boodskap die funksie en sy reël, en wys na jou reël wat dit aangeroep het.

## Afgeskakel

Skripte kan nie lêers, die netwerk of die bladsy bereik nie: `io`, `os` (behalwe die klok), `require`, `dofile`, `loadfile` en `debug` is verwyder. Gebruik die Skrip-werkruimte se Maak oop en die veranderlikes om data in te bring. Die stapbegroting en Stop werk soos vir CraftScript.
