---
title: Skript i Lua
summary: Skriv Skript-arbeidsområdets skript i Lua 5.4: cs-tabellen med innebygde funksjoner, matriser som verdier med indeksering og aritmetikk, det delte ws-arbeidsområdet, utskrift og visning av resultater, og hva som er slått av.
keywords: Lua, Lua 5.4, skript, språk, cs-tabell, ws, arbeidsområde, userdata, tensor, array, matrise, print, display, sandkasse
from: 82c668b3
---

Lua er det andre språket i [Skript-arbeidsområdet](topic:craftscript). Velg **Lua** i språkboksen over redigeringsverktøyet (en `.lua`-fil åpnes i Lua av seg selv). Lua og CraftScript deler de samme variablene og de samme innebygde funksjonene, så et Lua-skript kan bruke det et CraftScript-skript laget, og omvendt.

## Det viktigste

```
-- hver innebygd funksjon ligger i cs-tabellen
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-basert, som i CraftScript
print(K(1, 1), #K)             -- et element; antall elementer

-- arbeidsområdet: de samme variablene hvert skript ser
ws.total = K(1, 1) * 2
print(ws.total)

-- flere resultater fra én funksjon
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` kaller en hvilken som helst innebygd funksjon og returnerer den første resultatet; `cs.call(name, n, …)` returnerer `n` resultater.
- `cs.tensor({1, 2, 3})` lager en rad, `cs.tensor({{1, 2}, {3, 4}})` en matrise.
- Matriser, sparsomme matriser, nett og felt er verdier med metoder: `t(i, j)` eller `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponering), `t:totable()`. `+ - * / ^` betyr det de betyr i CraftScript (`*` er matriseproduktet); `t:times(u)` multipliserer element for element.
- Et tall som er en 1×1-matrise kommer som et vanlig Lua-tall.
- `ws.name` leser og skriver det delte arbeidsområdet. Globale variabler som skriptet etterlater, havner der også når det avslutter.
- `print(…)` skriver til konsollen; `cs.show(f)`, `cs.plot(y)` og de andre visningsfunksjonene virker som i CraftScript.

## Kall analysebiblioteket

Analysebibliotekets funksjoner (fanen Bibliotek) og CraftScript-funksjonene som delens egne skript definerer, nås også gjennom `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- to utdata
```

De blir funnet før skriptet starter, så skriv navnet i skriptet: `cs.static_tet(` eller `cs.call('static_tet', …)`. Et navn som settes sammen mens skriptet kjører, når bare de innebygde funksjonene. En struct laget med `cs.struct({ … })` er en CraftScript-struct, og en Lua-liste av dem (`{ cs.struct(…), … }`) er en celle, som er det bibliotekets innstillinger forventer. Hvis noe går galt inne i en bibliotekfunksjon, nevner meldingen funksjonen og linjen, og peker på linjen din som kalte den.

## Slått av

Skript kan ikke nå filer, nettverket eller siden: `io`, `os` (unntatt klokken), `require`, `dofile`, `loadfile` og `debug` er fjernet. Bruk Skript-arbeidsområdets {{ui:Åpne}} og variablene for å hente inn data. Stegbudsjettet og {{ui:Stopp}} virker som for CraftScript.
