---
title: Skripte u Lua
summary: Pisanje skripti radnog prostora za skripte u Lua 5.4: tabela cs s ugrađenim funkcijama, nizovi kao vrijednosti s indeksiranjem i aritmetikom, zajednički radni prostor ws, ispis i prikaz rezultata, i šta je isključeno.
keywords: Lua, Lua 5.4, skripta, jezik, tabela cs, ws, radni prostor, userdata, tenzor, niz, matrica, ispis, prikaz, sandbox
from: 82c668b3
---

Lua je drugi jezik [radnog prostora za skripte](topic:craftscript). Izaberi **Lua** u polju za jezik iznad uređivača (datoteka `.lua` se sama otvara u Lua). Lua i CraftScript dijele iste varijable i iste ugrađene funkcije, pa skripta u Lua može koristiti ono što je napravila CraftScript skripta, i obrnuto.

## Osnove

```
-- svaka ugrađena funkcija je u tabeli cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- indeksi od 1, kao u CraftScript-u
print(K(1, 1), #K)             -- jedan element; broj elemenata

-- radni prostor: iste varijable koje vidi svaka skripta
ws.total = K(1, 1) * 2
print(ws.total)

-- više rezultata iz jedne funkcije
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` poziva bilo koju ugrađenu funkciju i vraća njen prvi rezultat; `cs.call(name, n, …)` vraća `n` rezultata.
- `cs.tensor({1, 2, 3})` pravi red, `cs.tensor({{1, 2}, {3, 4}})` matricu.
- Nizovi, rijetke matrice, mreže i polja su vrijednosti s metodama: `t(i, j)` ili `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpozicija), `t:totable()`. `+ - * / ^` znače isto što i u CraftScript-u (`*` je matrični proizvod); `t:times(u)` množi element po element.
- Niz 1×1 stiže kao običan Lua broj.
- `ws.name` čita i piše zajednički radni prostor. Globalne varijable koje skripta ostavi iza sebe također se tu pojave kad se završi.
- `print(…)` piše u konzolu; `cs.show(f)`, `cs.plot(y)` i ostale funkcije prikaza rade kao u CraftScript-u.

## Pozovi biblioteku analiza

Funkcije biblioteke analiza (kartica Biblioteka) i funkcije CraftScript koje definišu vlastite skripte dijela dostupne su također preko `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dva izlaza
```

Pronalaze se prije nego što skripta krene, pa ime napiši u skripti: `cs.static_tet(` ili `cs.call('static_tet', …)`. Ime sastavljeno dok skripta radi dopire samo do ugrađenih funkcija. Struktura napravljena s `cs.struct({ … })` je CraftScript struktura, a Lua lista takvih (`{ cs.struct(…), … }`) je ćelija, što postavke biblioteke očekuju. Ako nešto pođe po zlu unutar funkcije biblioteke, poruka imenuje funkciju i njen red, i pokazuje tvoj red koji ju je pozvao.

## Isključeno

Skripte ne mogu doći do datoteka, mreže ili stranice: `io`, `os` (osim sata), `require`, `dofile`, `loadfile` i `debug` su uklonjeni. Koristi Otvori u radnom prostoru za skripte i varijable da uneseš podatke. Budžet koraka i Zaustavi rade kao za CraftScript.
