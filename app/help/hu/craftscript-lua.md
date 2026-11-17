---
title: Szkriptek Lua nyelven
summary: Szkriptek írása a Szkript munkaterületen Lua 5.4 nyelven: a `cs` táblában lévő beépített függvények, a tömbök értékként indexeléssel és aritmetikával, a közös `ws` munkaterület, az eredmények kiírása és megjelenítése, és mi van kikapcsolva.
keywords: Lua, Lua 5.4, szkript, nyelv, cs tábla, ws, munkaterület, userdata, tenzor, tömb, mátrix, print, display, homokozó
from: 82c668b3
---

A Lua a [Szkript munkaterület](topic:craftscript) második nyelve. Válassza a **Lua** elemet a szerkesztő fölötti nyelvdobozban (a `.lua` fájl magától Luaként nyílik meg). A Lua és a CraftScript ugyanazokat a változókat és ugyanazokat a beépített függvényeket használja, így egy Lua-szkript használhatja azt, amit egy CraftScript-szkript készített, és fordítva.

## Az alapok

```
-- minden beépített függvény a cs táblában van
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-alapú, mint a CraftScriptben
print(K(1, 1), #K)             -- egy elem; az elemek száma

-- a munkaterület: ugyanazok a változók, amelyeket minden szkript lát
ws.total = K(1, 1) * 2
print(ws.total)

-- több eredmény egy függvényből
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- A `cs.<name>(…)` meghívja bármelyik beépített függvényt, és az első eredményét adja vissza; a `cs.call(name, n, …)` `n` eredményt ad vissza.
- A `cs.tensor({1, 2, 3})` egy sort készít, a `cs.tensor({{1, 2}, {3, 4}})` mátrixot.
- A tömbök, ritka mátrixok, hálók és mezők metódusokkal rendelkező értékek: `t(i, j)` vagy `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transzponálás), `t:totable()`. A `+ - * / ^` ugyanazt jelenti, mint a CraftScriptben (a `*` a mátrixszorzat); a `t:times(u)` elemenként szoroz.
- Az 1 × 1-es tömb egyszerű Lua-számként érkezik.
- A `ws.name` olvassa és írja a közös munkaterületet. A szkript által hátrahagyott globális változók is oda kerülnek, amikor a szkript véget ér.
- A `print(…)` a konzolra ír; a `cs.show(f)`, a `cs.plot(y)` és a többi megjelenítő függvény ugyanúgy működik, mint a CraftScriptben.

## Az elemzőkönyvtár hívása

Az elemzőkönyvtár függvényeit (a Könyvtár lap) és az alkatrész saját szkriptjei által definiált CraftScript-függvényeket is a `cs` táblán keresztül érjük el:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- két kimenet
```

Ezeket a szkript indulása előtt megtalálják, ezért a nevet írja le a szkriptbe: `cs.static_tet(` vagy `cs.call('static_tet', …)`. A futás közben összerakott név csak a beépített függvényeket éri el. A `cs.struct({ … })`-tal készített struktúra CraftScript-struktúra, a belőlük álló Lua-lista (`{ cs.struct(…), … }`) pedig cella, amire a könyvtári beállítások várnak. Ha egy könyvtári függvényen belül valami elromlik, az üzenet megnevezi a függvényt és a sorát, és rámutat a hívó sorra a szkriptben.

## Kikapcsolva

A szkriptek nem érhetik el a fájlokat, a hálózatot vagy az oldalt: az `io`, az `os` (az órán kívül), a `require`, a `dofile`, a `loadfile` és a `debug` el van távolítva. Adatot a Szkript munkaterület {{ui:Megnyitás}} gombjával és a változókkal hozzon be. A lépéskeret és a {{ui:Leállítás}} ugyanúgy működik, mint a CraftScriptben.
