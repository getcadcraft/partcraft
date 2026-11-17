---
title: Scripts en Lua
summary: Escriba scripts do espazo de traballo Script en Lua 5.4: a táboa cs de funcións integradas, arrays como valores con indexación e aritmética, o espazo de traballo compartido ws, impresión e amosar resultados, e o que está desactivado.
keywords: Lua, Lua 5.4, script, linguaxe, táboa cs, ws, espazo de traballo, userdata, tensor, array, matriz, print, display, entorno illado
from: 82c668b3
---

Lua é a segunda linguaxe do [espazo de traballo Script](topic:craftscript). Escolla **Lua** na caixa de linguaxe sobre o editor (un ficheiro `.lua` ábrese en Lua por si só). Lua e CraftScript comparten as mesmas variables e as mesmas funcións integradas, así que un script de Lua pode usar o que fixo un script de CraftScript, e viceversa.

## O esencial

```
-- todas as funcións integradas están na táboa cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- índice desde 1, como en CraftScript
print(K(1, 1), #K)             -- un elemento; o número de elementos

-- o espazo de traballo: as mesmas variables que ve cada script
ws.total = K(1, 1) * 2
print(ws.total)

-- varios resultados dunha función
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` chama calquera función integrada e devolve o seu primeiro resultado; `cs.call(name, n, …)` devolve `n` resultados.
- `cs.tensor({1, 2, 3})` crea unha fila, `cs.tensor({{1, 2}, {3, 4}})` unha matriz.
- Os arrays, as matrices esparsas, as mallas e os campos son valores con métodos: `t(i, j)` ou `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transposición), `t:totable()`. `+ - * / ^` significan o que significan en CraftScript (`*` é o produto matricial); `t:times(u)` multiplica elemento a elemento.
- Un número que é un array de 1×1 chega como un número simple de Lua.
- `ws.name` lee e escribe o espazo de traballo compartido. As variables globais que deixe o script tamén van parar alí cando remata.
- `print(…)` escribe na consola; `cs.show(f)`, `cs.plot(y)` e as demais funcións de amosar traballan como en CraftScript.

## Chamar a biblioteca de análise

As funcións da biblioteca de análise (a lapela Biblioteca) e as funcións de CraftScript que definen os scripts propios da peza tamén se chaman a través de `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dúas saídas
```

Encóntranse antes de que comece o script, así que escriba o nome no script: `cs.static_tet(` ou `cs.call('static_tet', …)`. Un nome montado durante a execución só chega ás funcións integradas. Unha estrutura creada con `cs.struct({ … })` é unha estrutura de CraftScript, e unha lista de Lua delas (`{ cs.struct(…), … }`) é unha cela, que é o que esperan os axustes da biblioteca. Se algo falla dentro dunha función da biblioteca, a mensaxe indica o nome da función e a súa liña, e apunta á liña do seu script que a chamou.

## Desactivado

Os scripts non poden chegar aos ficheiros, á rede nin á páxina: `io`, `os` (salvo o reloxo), `require`, `dofile`, `loadfile` e `debug` están eliminados. Para traer datos, use Abrir do espazo de traballo Script e as variables. O límite de pasos e Parar funcionan como en CraftScript.
