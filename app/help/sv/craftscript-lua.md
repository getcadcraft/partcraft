---
title: Skript i Lua
summary: Skriv skriptarbetsytans skript i Lua 5.4: tabellen cs med inbyggda funktioner, arrayer som värden med indexering och aritmetik, den delade arbetsytan ws, utskrift och visning av resultat samt vad som är avstängt.
keywords: Lua, Lua 5.4, skript, språk, cs-tabell, ws, arbetsyta, userdata, tensor, array, matris, utskrift, visa, sandlåda
from: 82c668b3
---

Lua är det andra språket i [Skriptarbetsytan](topic:craftscript). Välj **Lua** i språkrutan ovanför redigeraren (en `.lua`-fil öppnas i Lua av sig själv). Lua och CraftScript delar samma variabler och samma inbyggda funktioner, så ett Lua-skript kan använda det ett CraftScript-skript har skapat, och tvärtom.

## Grunderna

```
-- alla inbyggda funktioner finns i tabellen cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-baserat, som i CraftScript
print(K(1, 1), #K)             -- ett element; antalet element

-- arbetsytan: samma variabler som alla skript ser
ws.total = K(1, 1) * 2
print(ws.total)

-- flera resultat från en funktion
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<namn>(…)` anropar valfri inbyggd funktion och returnerar dess första resultat; `cs.call(namn, n, …)` returnerar `n` resultat.
- `cs.tensor({1, 2, 3})` gör en rad, `cs.tensor({{1, 2}, {3, 4}})` en matris.
- Arrayer, glesa matriser, nät och fält är värden med metoder: `t(i, j)` eller `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponat), `t:totable()`. `+ - * / ^` betyder samma sak som i CraftScript (`*` är matrisprodukten); `t:times(u)` multiplicerar element för element.
- Ett tal som är en 1×1-array kommer som ett vanligt Lua-tal.
- `ws.name` läser och skriver den delade arbetsytan. Globala variabler som ditt skript lämnar kvar hamnar också där när det slutar.
- `print(…)` skriver till konsolen; `cs.show(f)`, `cs.plot(y)` och de andra visningsfunktionerna fungerar som i CraftScript.

## Anropa analysbiblioteket

Analysbibliotekets funktioner (fliken Bibliotek) och de CraftScript-funktioner som delens egna skript definierar nås också via `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- två utdata
```

De hittas innan skriptet startar, så skriv namnet i skriptet: `cs.static_tet(` eller `cs.call('static_tet', …)`. Ett namn som sätts ihop medan skriptet körs når bara de inbyggda funktionerna. En struktur byggd med `cs.struct({ … })` är en CraftScript-struktur, och en Lua-lista av sådana (`{ cs.struct(…), … }`) är en cell, vilket är vad bibliotekets inställningar förväntar sig. Om något går fel inne i en biblioteksfunktion anger meddelandet funktionen och dess rad, och pekar på din rad som anropade den.

## Avstängt

Skript kan inte nå filer, nätverket eller sidan: `io`, `os` (utom klockan), `require`, `dofile`, `loadfile` och `debug` är borttagna. Använd skriptarbetsytans Öppna och variablerna för att föra in data. Stegbudgeten och Stopp fungerar som för CraftScript.
