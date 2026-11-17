---
title: Scripts en Python
summary: Escriba scripts del espacio de trabajo Script en Python 3: el objeto cs de funciones integradas, arrays como valores tipo numpy con indexación desde 0, el espacio de trabajo compartido, impresión, lo que aún no está disponible, y cómo Python está aislado como CraftScript y Lua.
keywords: Python, Python 3, CPython, WebAssembly, aislado, seguro, script, lenguaje, cs, ws, espacio de trabajo, numpy, array, matriz, indexación, print, display, confianza
from: 66eab56d
---

Python es el tercer lenguaje del [espacio de trabajo Script](topic:craftscript). Elija **Python** en el cuadro de lenguaje encima del editor (un archivo `.py` se abre en Python por sí mismo). Python, Lua y CraftScript comparten las mismas variables y las mismas funciones integradas, de modo que un script Python puede usar lo que creó un script de CraftScript, y viceversa.

La primera ejecución de Python en una visita carga el propio Python (CPython 3.14, unos 7 MB) desde este sitio, lo que tarda unos segundos. Python todavía no forma parte de {{ui:Guardar para uso sin conexión}}: ejecute antes un script de Python estando en línea.

## Python está aislado

Los scripts de Python están aislados como los scripts de CraftScript y Lua: acceden a la pieza, a las variables y a las funciones integradas, y nada más. Cada ejecución es un Python nuevo en su propio entorno aislado, con un pequeño árbol de archivos en memoria (su biblioteca estándar y una carpeta `/tmp` que desaparece al terminar la ejecución). No puede acceder a la red, a sus archivos ni al resto de la página, tanto en el navegador como en la línea de comandos. Un script de otra persona aún puede consumir mucho tiempo o memoria: {{ui:Detener}} lo termina.

## Lo esencial

```
A = cs.magic(3)              # cada función integrada es cs.<nombre>
B = A @ A.T                  # @ es el producto matricial, .T la traspuesta
C = A * 2 + 1                # + - * / ** son elemento a elemento, como en numpy
print(A[0, 1], A[-1, -1])    # base 0; los negativos cuentan desde el final
row = A[1]                   # un índice sobre una matriz: una fila
big = A[A > 4]               # una máscara lógica selecciona elementos
A[0, 0] = -5                 # asignar dentro de un array
V, D = cs.call('eig', 2, A)  # varios resultados: cs.call(nombre, cuántos, …)
```

- Un array de 1 × 1 llega como un número sencillo; otros arrays, matrices dispersas, mallas, campos y modelos son **Valores**.
- Un Valor tiene `shape` (una tupla), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (sus filas), y `float()`, `int()` y `bool()` para un solo elemento.
- Las comparaciones (`<`, `==`, …) son elemento a elemento, como en numpy: dan un Valor lógico.
- Las listas de números pasadas a una función integrada se convierten en arrays: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` crea una matriz.
- Un dict se convierte en estructura y una lista de cosas mezcladas en celda, y viceversa.

Cada variable global que cree su script (un número, un Valor, un dict, una lista…) pasa a la pestaña **Variables** al terminar la ejecución, incluso tras un error. Los nombres que empiezan por `_`, las funciones, las clases y los módulos se quedan en Python. `ws.name` lee o asigna una variable directamente, y `ws_names()` las enumera.

`print(…)` escribe en la consola. `display(…)` (o `cs.display`) muestra una malla, un campo o un gráfico, como en CraftScript.

## Llamar a la biblioteca de análisis

Las funciones de la biblioteca se llaman igual que las integradas: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Escriba el nombre en el script tal cual: PartCraft encuentra las funciones de la biblioteca que usa un script antes de ejecutarlo.

## Todavía no disponible

- numpy, scipy y otros paquetes: solo está la biblioteca estándar de Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), sin sus partes de ventanas, terminal y bases de datos (`tkinter`, `curses`, `sqlite3`).
- Sockets y cualquier otra cosa que llegue fuera: aquí Python no tiene red.
- `time.sleep` devuelve el control de inmediato.
- El plegado en el editor, y llamar a una función de Python desde un script de CraftScript.
- Una ejecución comprueba el presupuesto de instrucciones y {{ui:Detener}} cada 1000 líneas; un cálculo largo dentro de una función integrada termina primero.
