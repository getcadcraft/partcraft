---
title: Scripts en Lua
summary: Escriba scripts del espacio de trabajo Script en Lua 5.4: la tabla cs de funciones integradas, arrays como valores con indexación y aritmética, el espacio de trabajo compartido ws, impresión y visualización de resultados, y lo que está desactivado.
keywords: Lua, Lua 5.4, script, lenguaje, tabla cs, ws, espacio de trabajo, userdata, tensor, array, matriz, print, display, sandbox
from: 82c668b3
---

Lua es el segundo lenguaje del [espacio de trabajo Script](topic:craftscript). Elija **Lua** en el cuadro de lenguaje encima del editor (un archivo `.lua` se abre en Lua por sí mismo). Lua y CraftScript comparten las mismas variables y las mismas funciones integradas, de modo que un script Lua puede usar lo que creó un script de CraftScript, y viceversa.

## Lo esencial

```
-- cada función integrada está en la tabla cs
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- base 1, como en CraftScript
print(K(1, 1), #K)             -- un elemento; el número de elementos

-- el espacio de trabajo: las mismas variables que ve todo script
ws.total = K(1, 1) * 2
print(ws.total)

-- varios resultados de una misma función
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<name>(…)` llama a cualquier función integrada y devuelve su primer resultado; `cs.call(name, n, …)` devuelve `n` resultados.
- `cs.tensor({1, 2, 3})` crea una fila, `cs.tensor({{1, 2}, {3, 4}})` una matriz.
- Los arrays, las matrices dispersas, las mallas y los campos son valores con métodos: `t(i, j)` o `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (traspuesta), `t:totable()`. `+ - * / ^` significan lo mismo que en CraftScript (`*` es el producto matricial); `t:times(u)` multiplica elemento a elemento.
- Un número que es un array de 1×1 llega como un número Lua sencillo.
- `ws.name` lee y escribe el espacio de trabajo compartido. Las variables globales que deje su script también llegan allí al terminar.
- `print(…)` escribe en la consola; `cs.show(f)`, `cs.plot(y)` y las demás funciones de visualización funcionan como en CraftScript.

## Llamar a la biblioteca de análisis

Las funciones de la biblioteca de análisis (la pestaña Biblioteca) y las funciones de CraftScript que definen los scripts de su pieza también se alcanzan mediante `cs`:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- dos salidas
```

Se localizan antes de que empiece el script, así que escriba el nombre en el script: `cs.static_tet(` o `cs.call('static_tet', …)`. Un nombre que se construye mientras el script se ejecuta solo llega a las funciones integradas. Una estructura creada con `cs.struct({ … })` es una estructura de CraftScript, y una lista Lua de ellas (`{ cs.struct(…), … }`) es una celda, que es lo que esperan los ajustes de la biblioteca. Si algo falla dentro de una función de la biblioteca, el mensaje indica la función y su línea, y señala la línea suya que la llamó.

## Desactivado

Los scripts no pueden acceder a archivos, a la red ni a la página: `io`, `os` (salvo el reloj), `require`, `dofile`, `loadfile` y `debug` se han eliminado. Use {{ui:Abrir}} del espacio de trabajo Script y las variables para traer datos. El presupuesto de pasos y {{ui:Detener}} funcionan como en CraftScript.
