---
title: Skripte u jeziku Lua
summary: Pišite skripte radnog prostora Skripta u Lua 5.4: tablicu cs ugrađenih funkcija, nizove kao vrijednosti s indeksiranjem i aritmetikom, zajednički radni prostor ws, ispis i prikaz rezultata te što je isključeno.
keywords: Lua, Lua 5.4, skripta, jezik, tablica cs, ws, radni prostor, userdata, tenzor, niz, matrica, ispis, prikaz, sandbox
from: 82c668b3
---

Lua je drugi jezik [radnog prostora Skripta](topic:craftscript). Odaberite **Lua** u okviru za jezik iznad uređivača (datoteka `.lua` otvara se u Lua jeziku sama od sebe). Lua i CraftScript dijele iste varijable i iste ugrađene funkcije, pa Lua skripta može koristiti ono što je napravila CraftScript skripta i obrnuto.

## Osnove

```
-- svaka ugrađena funkcija nalazi se u tablici cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- od 1, kao u CraftScriptu
print(K(1, 1), #K)             -- element; broj elemenata

-- radni prostor: iste varijable koje vidi svaka skripta
ws.total = K(1, 1) * 2
print(ws.total)

-- više rezultata jedne funkcije
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` poziva bilo koju ugrađenu funkciju i vraća njezin prvi rezultat; `cs.call(name, n, …)` vraća `n` rezultata.
- `cs.tensor({1, 2, 3})` pravi redak, `cs.tensor({{1, 2}, {3, 4}})` matricu.
- Nizovi, rijetke matrice, mreže i polja su vrijednosti s metodama: `t(i, j)` ili `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transponiranje), `t:totable()`. `+ - * / ^` znače isto što i u CraftScriptu (`*` je matrični umnožak); `t:times(u)` množi element po element.
- Broj koji je niz 1×1 stiže kao običan Lua broj.
- `ws.name` čita i piše zajednički radni prostor. Globalne varijable koje skripta ostavi za sobom također završe tamo kad se ona završi.
- `print(…)` ispisuje na konzolu; `cs.show(f)`, `cs.plot(y)` i ostale funkcije prikaza rade kao u CraftScriptu.

## Pozivanje biblioteke analiza

Funkcije biblioteke analiza (kartica Biblioteka) i funkcije CraftScripta koje definiraju skripte vašeg dijela također se pozivaju preko `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dva izlaza
```

Te se funkcije pronalaze prije početka skripte, pa ime napišite u skripti: `cs.static_tet(` ili `cs.call('static_tet', …)`. Ime sastavljeno dok skripta radi dosiže samo ugrađene funkcije. Struktura napravljena s `cs.struct({ … })` je CraftScript struktura, a Lua popis takvih struktura (`{ cs.struct(…), … }`) je Cell, što postavke biblioteke očekuju. Ako nešto pođe po zlu unutar funkcije biblioteke, poruka navodi funkciju i njezin redak te pokazuje na vaš redak koji ju je pozvao.

## Isključeno

Skripte ne mogu doći do datoteka, mreže ili stranice: `io`, `os` (osim sata), `require`, `dofile`, `loadfile` i `debug` su uklonjeni. Za unos podataka koristite {{ui:Otvori}} i varijable. Proračunski broj koraka i {{ui:Zaustavi}} rade kao u CraftScriptu.
