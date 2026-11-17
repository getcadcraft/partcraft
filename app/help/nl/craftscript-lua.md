---
title: Scripts in Lua
summary: Schrijf Script-werkomgevingscripts in Lua 5.4: de tabel cs met ingebouwde functies, arrays als waarden met indexering en rekenkunde, de gedeelde werkomgeving ws, afdrukken en tonen van resultaten, en wat is uitgeschakeld.
keywords: Lua, Lua 5.4, script, taal, cs-tabel, ws, werkomgeving, userdata, tensor, array, matrix, print, display, sandbox
from: 82c668b3
---

Lua is de tweede taal van de [Script-werkomgeving](topic:craftscript). Kies **Lua** in het taalvak boven de editor (een `.lua`-bestand opent zichzelf in Lua). Lua en CraftScript delen dezelfde variabelen en dezelfde ingebouwde functies, dus een Lua-script kan gebruiken wat een CraftScript-script heeft gemaakt, en omgekeerd.

## De essentie

```
-- elke ingebouwde functie staat in de cs-tabel
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-gebaseerd, zoals in CraftScript
print(K(1, 1), #K)             -- een element; het aantal elementen

-- de werkomgeving: dezelfde variabelen die elk script ziet
ws.total = K(1, 1) * 2
print(ws.total)

-- meerdere resultaten van één functie
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<naam>(…)` roept elke ingebouwde functie aan en geeft het eerste resultaat terug; `cs.call(naam, n, …)` geeft `n` resultaten terug.
- `cs.tensor({1, 2, 3})` maakt een rij, `cs.tensor({{1, 2}, {3, 4}})` een matrix.
- Arrays, ijle matrices, meshes en velden zijn waarden met methoden: `t(i, j)` of `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponeren), `t:totable()`. `+ - * / ^` betekenen wat ze in CraftScript betekenen (`*` is het matrixproduct); `t:times(u)` vermenigvuldigt element voor element.
- Een getal dat een 1×1-array is, komt aan als een gewoon Lua-getal.
- `ws.name` leest en schrijft de gedeelde werkomgeving. Globale variabelen die uw script achterlaat, komen daar ook terecht wanneer het eindigt.
- `print(…)` schrijft naar de console; `cs.show(f)`, `cs.plot(y)` en de andere weergavefuncties werken zoals in CraftScript.

## De analysebibliotheek aanroepen

De functies van de analysebibliotheek (het tabblad Bibliotheek) en de CraftScript-functies die de eigen scripts van uw onderdeel definiëren, worden ook via `cs` bereikt:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- twee uitvoerwaarden
```

Ze worden gevonden voordat het script start, dus schrijf de naam in het script: `cs.static_tet(` of `cs.call('static_tet', …)`. Een naam die tijdens het draaien van het script wordt samengesteld, bereikt alleen de ingebouwde functies. Een struct gemaakt met `cs.struct({ … })` is een CraftScript-struct, en een Lua-lijst daarvan (`{ cs.struct(…), … }`) is een cell, wat de instellingen van de bibliotheek verwachten. Als er iets misgaat in een bibliotheekfunctie, noemt de melding de functie en zijn regel, en wijst naar uw regel die haar aanriep.

## Uitgeschakeld

Scripts kunnen geen bestanden, het netwerk of de pagina bereiken: `io`, `os` (behalve de klok), `require`, `dofile`, `loadfile` en `debug` zijn verwijderd. Gebruik de functie Openen van de Script-werkomgeving en de variabelen om gegevens binnen te halen. Het stappenbudget en Stoppen werken zoals bij CraftScript.
