---
title: Skripty v Lua
summary: Píšte skripty pracovného priestoru Skript v Lua 5.4: tabuľka cs vstavaných funkcií, polia ako hodnoty s indexovaním a aritmetikou, zdieľaný pracovný priestor ws, výpis a zobrazovanie výsledkov a čo je vypnuté.
keywords: Lua, Lua 5.4, skript, jazyk, tabuľka cs, ws, pracovný priestor, userdata, tenzor, pole, matica, print, display, sandbox
from: 82c668b3
---

Lua je druhý jazyk [pracovného priestoru Skript](topic:craftscript). Vyberte **Lua** v poli jazyka nad editorom (súbor `.lua` sa otvorí v Lua sám od seba). Lua a CraftScript zdieľajú tie isté premenné a tie isté vstavané funkcie, takže skript v Lua môže použiť to, čo vytvoril skript CraftScript, a naopak.

## Základy

```
-- každá vstavaná funkcia je v tabuľke cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- od 1, ako v CraftScripte
print(K(1, 1), #K)             -- prvok; počet prvkov

-- pracovný priestor: tie isté premenné, ktoré vidí každý skript
ws.total = K(1, 1) * 2
print(ws.total)

-- viac výsledkov z jednej funkcie
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` volá ľubovoľnú vstavanú funkciu a vráti jej prvý výsledok; `cs.call(name, n, …)` vráti `n` výsledkov.
- `cs.tensor({1, 2, 3})` vytvorí riadok, `cs.tensor({{1, 2}, {3, 4}})` maticu.
- Polia, riedke matice, siete a polia sú hodnoty s metódami: `t(i, j)` alebo `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpozícia), `t:totable()`. `+ - * / ^` znamenajú to, čo v CraftScripte (`*` je maticový súčin); `t:times(u)` násobí po prvkoch.
- Číslo, ktoré je poľom 1×1, príde v Lua ako obyčajné číslo.
- `ws.name` číta a zapisuje zdieľaný pracovný priestor. Globálne premenné, ktoré skript zanechá, sa tam tiež dostanú, keď skončí.
- `print(…)` píše do konzoly; `cs.show(f)`, `cs.plot(y)` a ostatné zobrazovacie funkcie fungujú ako v CraftScripte.

## Volanie knižnice analýz

Funkcie knižnice analýz (karta {{ui:Knižnica}}) a funkcie CraftScript, ktoré definujú skripty vašej časti, sa volajú tiež cez `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dva výstupy
```

Nájdu sa pred spustením skriptu, takže názov napíšte priamo do skriptu: `cs.static_tet(` alebo `cs.call('static_tet', …)`. Názov zložený počas behu skriptu dosiahne len vstavané funkcie. Štruktúra vytvorená cez `cs.struct({ … })` je štruktúra CraftScript a zoznam takýchto štruktúr v Lua (`{ cs.struct(…), … }`) je bunka, ktorú nastavenia knižnice očakávajú. Ak sa vo vnútri funkcie knižnice niečo pokazí, správa uvedie funkciu a jej riadok a ukáže na váš riadok, ktorý ju volal.

## Vypnuté

Skripty sa nedostanú k súborom, sieti ani k stránke: `io`, `os` (okrem hodín), `require`, `dofile`, `loadfile` a `debug` sú odstránené. Na načítanie dát použite {{ui:Otvoriť}} v pracovnom priestore Skript a premenné. Rozpočet krokov a {{ui:Zastaviť}} fungujú ako v CraftScripte.
