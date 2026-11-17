---
title: Skripti v jeziku Lua
summary: Pišite skripte delovnega okolja Skript v Lua 5.4: tabela cs vgrajenih funkcij, polja kot vrednosti z indeksiranjem in aritmetiko, skupno delovno okolje ws, izpis in prikaz rezultatov ter kaj je izklopljeno.
keywords: Lua, Lua 5.4, skript, jezik, tabela cs, ws, delovno okolje, userdata, tenzor, polje, matrika, izpis, prikaz, peskovnik
from: 82c668b3
---

Lua je drugi jezik [delovnega okolja Skript](topic:craftscript). Izberite **Lua** v polju za jezik nad urejevalnikom (datoteka `.lua` se odpre v jeziku Lua sama od sebe). Lua in CraftScript si delita iste spremenljivke in iste vgrajene funkcije, zato lahko skript Lua uporabi to, kar je ustvaril skript CraftScript, in obratno.

## Osnove

```
-- vsaka vgrajena funkcija je v tabeli cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-based, kot v CraftScript
print(K(1, 1), #K)             -- element; število elementov

-- delovno okolje: iste spremenljivke, ki jih vidi vsak skript
ws.total = K(1, 1) * 2
print(ws.total)

-- več rezultatov iz ene funkcije
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` pokliče katero koli vgrajeno funkcijo in vrne njen prvi rezultat; `cs.call(name, n, …)` vrne `n` rezultatov.
- `cs.tensor({1, 2, 3})` naredi vrstico, `cs.tensor({{1, 2}, {3, 4}})` pa matriko.
- Polja, redke matrike, mreže in polja so vrednosti z metodami: `t(i, j)` ali `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponiranje), `t:totable()`. `+ - * / ^` pomenijo isto kot v CraftScript (`*` je matrični produkt); `t:times(u)` množi po elementih.
- Število, ki je polje 1×1, pride kot navadno število Lua.
- `ws.name` bere in piše v skupno delovno okolje. Globalne spremenljivke, ki jih skript pusti za seboj, se ob koncu prav tako shranijo tja.
- `print(…)` izpiše v konzolo; `cs.show(f)`, `cs.plot(y)` in druge funkcije prikaza delujejo kot v CraftScript.

## Pokličite knjižnico za analizo

Funkcije knjižnice za analizo (zavihek Knjižnica) in funkcije CraftScript, ki jih definirajo skripti vašega dela, so dosegljive tudi prek `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dva izhoda
```

Najdejo se, preden se skript zažene, zato ime zapišite v skriptu: `cs.static_tet(` ali `cs.call('static_tet', …)`. Ime, sestavljeno med izvajanjem, doseže samo vgrajene funkcije. Struktura, zgrajena z `cs.struct({ … })`, je struktura CraftScript, seznam takih struktur v Lua (`{ cs.struct(…), … }`) pa je celica, ki jo pričakujejo nastavitve knjižnice. Če gre kaj narobe v funkciji knjižnice, sporočilo navede ime funkcije in njeno vrstico ter pokaže na vašo vrstico, ki jo je klicala.

## Izklopljeno

Skripti ne morejo dostopati do datotek, omrežja ali strani: `io`, `os` (razen ure), `require`, `dofile`, `loadfile` in `debug` so odstranjeni. Za uvoz podatkov uporabite Odpri v delovnem okolju Skript in spremenljivke. Proračunski korak in Ustavi delujeta enako kot pri CraftScript.
