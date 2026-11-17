---
title: Scripts i Lua
summary: Skriv Script-arbejdsområdets scripts i Lua 5.4: cs-tabellen med indbyggede funktioner, arrays som værdier med indeksering og aritmetik, det delte ws-arbejdsområde, udskrivning og visning af resultater, og hvad der er slået fra.
keywords: Lua, Lua 5.4, script, sprog, cs-tabel, ws, arbejdsområde, userdata, tensor, array, matrix, print, display, sandkasse
from: 82c668b3
---

Lua er det andet sprog i [Script-arbejdsområdet](topic:craftscript). Vælg **Lua** i sprogfeltet over editoren (en `.lua`-fil åbnes i Lua af sig selv). Lua og CraftScript deler de samme variabler og de samme indbyggede funktioner, så et Lua-script kan bruge det, et CraftScript-script har lavet, og omvendt.

## Det vigtigste

```
-- alle indbyggede funktioner findes i cs-tabellen
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-baseret, ligesom i CraftScript
print(K(1, 1), #K)             -- et element; antal elementer

-- arbejdsområdet: de samme variabler, alle scripts ser
ws.total = K(1, 1) * 2
print(ws.total)

-- flere resultater fra én funktion
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<navn>(…)` kalder en indbygget funktion og returnerer dens første resultat; `cs.call(navn, n, …)` returnerer `n` resultater.
- `cs.tensor({1, 2, 3})` laver en række, `cs.tensor({{1, 2}, {3, 4}})` en matrix.
- Arrays, sparsomme matricer, meshes og felter er værdier med metoder: `t(i, j)` eller `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponering), `t:totable()`. `+ - * / ^` betyder det samme som i CraftScript (`*` er matrixproduktet); `t:times(u)` multiplicerer element for element.
- Et tal, der er et 1×1-array, kommer ind som et almindeligt Lua-tal.
- `ws.name` læser og skriver det delte arbejdsområde. Globale variabler dit script efterlader, havner der også, når det slutter.
- `print(…)` skriver til konsollen; `cs.show(f)`, `cs.plot(y)` og de øvrige visningsfunktioner virker som i CraftScript.

## Kald analysebiblioteket

Analysebibliotekets funktioner (fanen Bibliotek) og de CraftScript-funktioner, som din dels egne scripts definerer, nås også gennem `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- to resultater
```

De findes, før scriptet starter, så skriv navnet i scriptet: `cs.static_tet(` eller `cs.call('static_tet', …)`. Et navn, der sættes sammen, mens scriptet kører, når kun de indbyggede funktioner. En struct bygget med `cs.struct({ … })` er en CraftScript-struct, og en Lua-liste af dem (`{ cs.struct(…), … }`) er en celle, hvilket er det, bibliotekets indstillinger forventer. Hvis noget går galt inde i en biblioteksfunktion, nævner meddelelsen funktionen og dens linje og peger på din linje, der kaldte den.

## Slået fra

Scripts kan ikke nå filer, netværket eller siden: `io`, `os` (undtagen uret), `require`, `dofile`, `loadfile` og `debug` er fjernet. Brug Script-arbejdsområdets Åbn og variablerne til at hente data ind. Trinbudgettet og Stop virker som i CraftScript.
