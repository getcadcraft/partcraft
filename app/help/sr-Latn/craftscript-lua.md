---
title: Skripte u jeziku Lua
summary: Pišite skripte radnog prostora Skripte u Lua 5.4: tabela cs sa ugrađenim funkcijama, nizovi kao vrednosti sa indeksiranjem i aritmetikom, deljeni radni prostor ws, ispis i prikaz rezultata, i šta je isključeno.
keywords: Lua, Lua 5.4, skripta, jezik, tabela cs, ws, radni prostor, userdata, tenzor, niz, matrica, ispis, prikaz, peščanik
from: 82c668b3
---

Lua je drugi jezik [radnog prostora Skripte](topic:craftscript). Izaberite **Lua** u polju za jezik iznad uređivača (fajl `.lua` se sam otvara u jeziku Lua). Lua i CraftScript dele iste promenljive i iste ugrađene funkcije, pa Lua skripta može da koristi ono što je napravila CraftScript skripta, i obrnuto.

## Osnovno

```
-- svaka ugrađena funkcija je u tabeli cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- od 1, kao u CraftScript-u
print(K(1, 1), #K)             -- element; broj elemenata

-- radni prostor: iste promenljive koje vidi svaka skripta
ws.total = K(1, 1) * 2
print(ws.total)

-- više rezultata iz jedne funkcije
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` poziva bilo koju ugrađenu funkciju i vraća njen prvi rezultat; `cs.call(name, n, …)` vraća `n` rezultata.
- `cs.tensor({1, 2, 3})` pravi red, `cs.tensor({{1, 2}, {3, 4}})` matricu.
- Nizovi, retke matrice, mreže i polja su vrednosti sa metodama: `t(i, j)` ili `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpozicija), `t:totable()`. `+ - * / ^` znače isto što u CraftScript-u (`*` je matrični proizvod); `t:times(u)` množi element po element.
- Niz 1 × 1 stiže kao običan Lua broj.
- `ws.name` čita i upisuje deljeni radni prostor. Globalne promenljive koje skripta ostavi takođe se tu upisuju kad se završi.
- `print(…)` piše u konzolu; `cs.show(f)`, `cs.plot(y)` i ostale funkcije prikaza rade kao u CraftScript-u.

## Pozivanje biblioteke analiza

Funkcije biblioteke analiza (kartica Biblioteka) i funkcije CraftScript skripti vašeg dela dostupne su takođe preko `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dva izlaza
```

Pronalaze se pre pokretanja skripte, zato ime napišite u skripti: `cs.static_tet(` ili `cs.call('static_tet', …)`. Ime sastavljeno dok skripta radi dopire samo do ugrađenih funkcija. Struktura napravljena sa `cs.struct({ … })` je CraftScript struktura, a Lua lista takvih (`{ cs.struct(…), … }`) je ćelija, što očekuju podešavanja biblioteke. Ako nešto krene naopako u funkciji biblioteke, poruka navodi funkciju i njen red, i ukazuje na vaš red koji ju je pozvao.

## Isključeno

Skripte ne mogu da dođu do fajlova, mreže ni stranice: `io`, `os` (osim sata), `require`, `dofile`, `loadfile` i `debug` su uklonjeni. Za unos podataka koristite {{ui:Otvori}} u radnom prostoru Skripte i promenljive. Budžet koraka i {{ui:Zaustavi}} rade kao za CraftScript.
