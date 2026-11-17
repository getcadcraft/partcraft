---
title: Scripturi în Lua
summary: Scrieți scripturi ale spațiului de lucru Script în Lua 5.4: tabela cs cu funcțiile încorporate, tablouri ca valori cu indexare și aritmetică, spațiul comun de lucru ws, afișarea rezultatelor și ce este dezactivat.
keywords: Lua, Lua 5.4, script, limbaj, tabela cs, ws, spațiu de lucru, userdata, tensor, tablou, matrice, print, afișare, sandbox
from: 82c668b3
---

Lua este al doilea limbaj al [spațiului de lucru Script](topic:craftscript). Alegeți **Lua** în caseta de limbaj de deasupra editorului (un fișier `.lua` se deschide în Lua de la sine). Lua și CraftScript împart aceleași variabile și aceleași funcții încorporate, deci un script Lua poate folosi ce a făcut un script CraftScript și invers.

## Esențialul

```
-- fiecare funcție încorporată se află în tabela cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- de la 1, ca în CraftScript
print(K(1, 1), #K)             -- un element; numărul de elemente

-- spațiul de lucru: aceleași variabile pe care le văd toate scripturile
ws.total = K(1, 1) * 2
print(ws.total)

-- mai multe rezultate dintr-o funcție
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` apelează orice funcție încorporată și returnează primul rezultat; `cs.call(name, n, …)` returnează `n` rezultate.
- `cs.tensor({1, 2, 3})` face un rând, `cs.tensor({{1, 2}, {3, 4}})` o matrice.
- Tablourile, matricile rare, plasele și câmpurile sunt valori cu metode: `t(i, j)` sau `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpunerea), `t:totable()`. `+ - * / ^` înseamnă ce înseamnă în CraftScript (`*` este produsul matricial); `t:times(u)` înmulțește element cu element.
- Un număr care este un tablou de 1×1 ajunge ca un simplu număr Lua.
- `ws.name` citește și scrie în spațiul de lucru comun. Variabilele globale pe care scriptul le lasă în urmă ajung și ele acolo la final.
- `print(…)` scrie în consolă; `cs.show(f)`, `cs.plot(y)` și celelalte funcții de afișare funcționează ca în CraftScript.

## Apelarea bibliotecii de analiză

Funcțiile bibliotecii de analiză (fila Bibliotecă) și funcțiile CraftScript pe care le definesc scripturile proprii ale piesei sunt accesate și ele prin `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- două ieșiri
```

Ele sunt găsite înainte de pornirea scriptului, deci scrieți numele în script: `cs.static_tet(` sau `cs.call('static_tet', …)`. Un nume construit în timpul rulării ajunge doar la funcțiile încorporate. O structură făcută cu `cs.struct({ … })` este o structură CraftScript, iar o listă Lua de astfel de structuri (`{ cs.struct(…), … }`) este o celulă, ceea ce așteaptă setările bibliotecii. Dacă ceva nu merge într-o funcție din bibliotecă, mesajul numește funcția și rândul ei și arată rândul din script care a apelat-o.

## Dezactivat

Scripturile nu pot ajunge la fișiere, la rețea sau la pagină: `io`, `os` (cu excepția ceasului), `require`, `dofile`, `loadfile` și `debug` sunt eliminate. Folosiți Deschidere din spațiul de lucru Script și variabilele ca să aduceți date. Bugetul de pași și Oprire funcționează ca în CraftScript.
