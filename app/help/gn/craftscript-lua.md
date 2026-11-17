---
title: Kuatiañe Lua-pe
summary: Escribí kuatiañe Script espacio-pe Lua 5.4-pe: cs tabla incorporada función-kuéra, arreglo valor-icha índice ha aritmética, workspace ws compartido, impresión ha resultado ohechauka, ha mba'e ojehejávo.
keywords: Lua, Lua 5.4, script, ñe'ẽ, tabla cs, ws, workspace, userdata, tensor, arreglo, matriz, print, display, sandbox
from: 82c668b3
---

Lua ha'e segundo ñe'ẽ [Script espacio](topic:craftscript). Ejeporá **Lua** ñe'ẽ-caja editor-pe (`.lua` archivo oipe'a Lua-pe ijeheguínte). Lua ha CraftScript oñemboja variable-kuéra ha incorporada función-kuéra, upévare kuatiañe Lua ikatu oporu mba'e CraftScript kuatiañe ojapóva, ha ambue ndive.

## Esencial

```
-- opa incorporada función cs tabla-pe
local K = cs.zeros(3, 3)
K:set(1, 1, 4)                 -- 1-gui, CraftScript-icha
print(K(1, 1), #K)             -- peteĩ elemento; elemento cantidad
-- workspace: opa kuatiañe ohecha umi mismo variable
ws.total = K(1, 1) * 2
print(ws.total)
-- heta resultado peteĩ función-pe
local V, D = cs.call('eig', 2, cs.tensor({{2, 1}, {1, 2}}))
```

- `cs.<nombre>(…)` llama opa incorporada función ha ombohovái primer resultado; `cs.call(nombre, n, …)` ombohovái `n` resultado.
- `cs.tensor({1, 2, 3})` ojapo fila, `cs.tensor({{1, 2}, {3, 4}})` matriz.
- Arreglo, matriz rala, malla ha campo ha'e valor método-ndive: `t(i, j)` térã `t:get(i, j)`, `t:set(i, j, v)`, `t:shape()`, `#t`, `t:T()` (transpuesta), `t:totable()`. `+ - * / ^` oguereko CraftScript-pe mismo sentido (`*` ha'e producto de matriz); `t:times(u)` oñemba elemento po elemento.
- Número 1×1 arreglo ojuhu Lua número chiquito-pe.
- `ws.name` oñeikẽ ha oñemoĩ workspace compartido. Global variable kuatiañe oheja script oñemoñe rire.
- `print(…)` oñemoñe consola-pe; `cs.show(f)`, `cs.plot(y)` ha ambue display función CraftScript-icha ojapo.

## Llama biblioteca de análisis

Biblioteca de análisis función-kuéra (Library tab) ha parte-pe kuatiañe CraftScript función-kuéra `cs` rupi ojeguejy:

```lua
local t = cs.box_mesh(100, 10, 10, 5, 'tet10')
local bc = cs.struct({ fixedFaces = 5, loads = { cs.struct({ face = 6, force = cs.tensor({ 0, -100, 0 }) }) } })
local r = cs.static_tet(t, 200000, 0.3, bc)
print(r.maxDisp)
local nodes, tris = cs.call('face_nodes', 2, t, 6)   -- ndive resultado
```

Oñejuhu kuatiañe oñepyrũ rire, upévare kuatiañe-pe nombre ha'e ojapo: `cs.static_tet(` térã `cs.call('static_tet', …)`. Nombre ojapóva kuatiañe ojapo mboyve ndojupi incorporada función-kuéra. `cs.struct({ … })` ojapo CraftScript estructura, ha Lua lista-kuéra (`{ cs.struct(…), … }`) ha'e celda, biblioteca ajuste-kuéra ojekuaa. Biblioteca función-pe mba'eve hasýva ohechauka función ha línea, ha ohechauka nde línea ojeporúva.

## Ndojeporúi

Kuatiañe ndaikatúi ojuhu archivo, red térã página: `io`, `os` (reloj ndaha'éi), `require`, `dofile`, `loadfile` ha `debug` oñemboguata. Ejeporá Script espacio Open ha variable datos ojeikeha hag̃ua. Paso-límite ha Stop oñemoĩ CraftScript-icha.
