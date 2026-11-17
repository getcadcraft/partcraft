---
title: Kuatiañe Python-pe
summary: Escribí kuatiañe Script espacio-pe Python 3-pe: cs objeto incorporada función-kuéra, arreglo numpy-icha índice 0-gui, workspace compartido, impresión, mba'e ndaipóri, ha mba'éichapa Python oñemoĩ CraftScript ha Lua-icha.
keywords: Python, Python 3, CPython, WebAssembly, sellado, seguro, script, ñe'ẽ, cs, ws, workspace, numpy, arreglo, matriz, índice, print, display, confianza
from: 66eab56d
---

Python ha'e tercer ñe'ẽ [Script espacio](topic:craftscript). Ejeporá **Python** ñe'ẽ-caja editor-pe (`.py` archivo oipe'a Python-pe ijeheguínte). Python, Lua ha CraftScript oñemboja variable-kuéra ha incorporada función-kuéra, upévare Python kuatiañe ikatu oporu mba'e CraftScript kuatiañe ojapóva.

Python ojuhu ojepyhýva oñepyrũ jeykuaa (CPython 3.14, 7 MB aproximado) ko sitio-gui, umi segundo ojeporu. Python ndaha'éi todavía {{ui:Save for offline}}-pe: peteĩ Python kuatiañe ejapo ko'ẽ línea-pe primero.

## Python oñemoĩ sellado

Python kuatiañe oñemoĩ sellado CraftScript ha Lua-icha: ojuhu parte, variable-kuéra ha incorporada función-kuéra, ha ambue ndaijuhúi. Cada corrida peteĩ Python pyahu ha'e, peteĩ sandbox-pe memoria-pe archivo-árbol chiquito-ndive (estándar biblioteca ha `/tmp` carpeta corrida rire ojepe'áva). Ndaikatúi ojuhu red, nde archivo térã página ambue parte, navegador-pe ha línea de comandos-pe. Ambue kuatiañe heta tiempo térã memoria ojapóva ikatu; {{ui:Stop}} oñemoĩ.

## Esencial

```
A = cs.magic(3)              # opa incorporada función cs.<nombre>
B = A @ A.T                  # @ matriz producto, .T transpuesta
C = A * 2 + 1                # + - * / ** elemento po elemento, numpy-icha
print(A[0, 1], A[-1, -1])    # 0-gui; negativo final-gui
row = A[1]                   # matriz-pe peteĩ índice: fila
big = A[A > 4]              # máscara lógica elemento ohenói
A[0, 0] = -5                 # arreglo-pe asignación
V, D = cs.call('eig', 2, A)  # heta resultado: cs.call(nombre, cuánto, …)
```

- 1 × 1 arreglo ojuhu número chiquito-pe; ambue arreglo, matriz rala, malla, campo ha modelo ha'e **Valores**.
- Valor oguereko `shape` (tupla), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (fila cantidad), ha `float()`, `int()` ha `bool()` peteĩ elemento-pe.
- Comparación (`<`, `==`, …) elemento po elemento, numpy-icha: lógico Valor ombohovái.
- Número lista incorporada función-pe ojeporu arreglo-pe: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` matriz ojapo.
- Diccionario ojapo estructura ha mixto lista celda-pe, ha umi ojehejávo.

Kuatiañe ojapo cada global (número, Valor, diccionario, lista…) oñemoĩ **Variables** tab-pe corrida mboyve, error rire mba'eve. Nombre `_`-gui oñepyrũ, función, clase ha módulo Python-pe ojeikova. `ws.name` oñeikẽ variable tuichaite, `ws_names()` ohechauka opa.

`print(…)` consola-pe. `display(…)` (térã `cs.display`) malla, campo térã gráfico ohechauka, CraftScript-icha.

## Llama biblioteca de análisis

Biblioteca función-kuéra incorporadas-icha ojeporúva: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Nombre kuatiañe-pe ejapo upe ha'e: PartCraft ojuhu biblioteca función-kuéra oporu kuatiañe ojeporúva oñepyrũ mboyve.

## Ndaipóri todavía

- numpy, scipy ha ambue paquete: Python estándar biblioteca-pe `math`, `json`, `itertools`, `decimal`, `statistics`… oĩ, ndaipóri ventana, terminal ha base de datos parte (`tkinter`, `curses`, `sqlite3`).
- Socket ha mba'e ambue ojehasa ohóva: Python-pe ndoguerekói red.
- `time.sleep` oñemboguata ndaipóri.
- Editor-pe plegado, ha CraftScript kuatiañe-pe Python función llama.
- Corrida instrucción presupuesto ha Stop 1000 línea-pe ojekuaa; incorporada función-pe heta cálculo ojepe'a rire.
