---
title: Scripts en Lua
summary: Escriviu scripts de l'espai de treball Script en Lua 5.4: la taula cs de funcions integrades, matrius com a valors amb indexació i aritmètica, l'espai de treball compartit ws, escriptura i visualització de resultats, i què està desactivat.
keywords: Lua, Lua 5.4, script, llenguatge, taula cs, ws, espai de treball, userdata, tensor, matriu, array, print, display, entorn aïllat
from: 82c668b3
---

Lua és el segon llenguatge de l'[espai de treball Script](topic:craftscript). Trieu **Lua** a la caixa d'idioma sobre l'editor (un fitxer `.lua` s'obre en Lua automàticament). Lua i CraftScript comparteixen les mateixes variables i les mateixes funcions integrades, de manera que un script en Lua pot usar el que ha creat un script de CraftScript, i a la inversa.

## L'essencial

```
-- cada funció integrada és a la taula cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- basat en 1, com a CraftScript
print(K(1, 1), #K)             -- un element; el nombre d'elements

-- l'espai de treball: les mateixes variables que veu qualsevol script
ws.total = K(1, 1) * 2
print(ws.total)

-- diversos resultats d'una mateixa funció
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<nom>(…)` crida qualsevol funció integrada i retorna el seu primer resultat; `cs.call(nom, n, …)` retorna `n` resultats.
- `cs.tensor({1, 2, 3})` crea una fila, `cs.tensor({{1, 2}, {3, 4}})` una matriu.
- Les matrius, les matrius disperses, les malles i els camps són valors amb mètodes: `t(i, j)` o `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transposta), `t:totable()`. `+ - * / ^` signifiquen el mateix que a CraftScript (`*` és el producte de matrius); `t:times(u)` multiplica element a element.
- Un nombre que és una matriu d'1×1 arriba com a nombre simple de Lua.
- `ws.name` llegeix i escriu l'espai de treball compartit. Les variables globals que el vostre script deixa també hi van a parar quan acaba.
- `print(…)` escriu a la consola; `cs.show(f)`, `cs.plot(y)` i les altres funcions de visualització funcionen com a CraftScript.

## Crida la biblioteca d'anàlisi

Les funcions de la biblioteca d'anàlisi (la pestanya Biblioteca) i les funcions de CraftScript que defineixen els scripts de la vostra peça també s'hi arriba a través de `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dues sortides
```

Es troben abans que comenci el script, així que escriviu el nom al script: `cs.static_tet(` o `cs.call('static_tet', …)`. Un nom que es construeix mentre s'executa el script només arriba a les funcions integrades. Una estructura creada amb `cs.struct({ … })` és una estructura de CraftScript, i una llista de Lua d'aquestes (`{ cs.struct(…), … }`) és una cel·la, que és el que esperen les opcions de la biblioteca. Si alguna cosa falla dins d'una funció de la biblioteca, el missatge indica el nom de la funció i la seva línia, i assenyala la vostra línia que la va cridar.

## Desactivat

Els scripts no poden arribar als fitxers, a la xarxa ni a la pàgina: `io`, `os` (excepte el rellotge), `require`, `dofile`, `loadfile` i `debug` són eliminats. Useu {{ui:Obre}} de l'espai de treball Script i les variables per introduir-hi dades. El pressupost de passos i {{ui:Atura}} funcionen igual que a CraftScript.
