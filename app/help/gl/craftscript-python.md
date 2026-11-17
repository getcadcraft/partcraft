---
title: Scripts en Python
summary: Escriba scripts do espazo de traballo Script en Python 3: o obxecto cs de funcións integradas, arrays como valores tipo numpy con indexación desde 0, o espazo de traballo compartido, impresión, o que aínda non está, e como Python está illado como CraftScript e Lua.
keywords: Python, Python 3, CPython, WebAssembly, illado, seguro, script, linguaxe, cs, ws, espazo de traballo, numpy, array, matriz, indexación, print, display, confianza
from: 66eab56d
---

Python é a terceira linguaxe do [espazo de traballo Script](topic:craftscript). Escolla **Python** na caixa de linguaxe sobre o editor (un ficheiro `.py` ábrese en Python por si só). Python, Lua e CraftScript comparten as mesmas variables e as mesmas funcións integradas, así que un script de Python pode usar o que fixo un script de CraftScript, e viceversa.

A primeira execución de Python nunha visita carga o propio Python (CPython 3.14, uns 7 MB) desde este sitio, o que leva uns segundos. Python aínda non forma parte de {{ui:Gardar para usar sen conexión}}: execute antes un script de Python estando en liña.

## Python está illado

Os scripts de Python están illados como os scripts de CraftScript e Lua: chegan á peza, ás variables e ás funcións integradas, e a nada máis. Cada execución é un Python novo nun entorno illado propio cunha pequena árbore de ficheiros en memoria (a súa biblioteca estándar e un cartafol `/tmp` que desaparece ao rematar a execución). Non pode chegar á rede, aos seus ficheiros nin ao resto da páxina, tanto no navegador como na liña de comandos. Un script doutra persoa pode aínda consumir moito tempo ou memoria: {{ui:Parar}} acaba con el.

## O esencial

```
A = cs.magic(3)              # todas as funcións integradas son cs.<name>
B = A @ A.T                  # @ é o produto matricial, .T a transposición
C = A * 2 + 1                # + - * / ** son elemento a elemento, como en numpy
print(A[0, 1], A[-1, -1])    # desde 0; os negativos cóntanse desde o final
row = A[1]                   # un índice sobre unha matriz: unha fila
big = A[A > 4]               # unha máscara lóxica selecciona elementos
A[0, 0] = -5                 # asignación a un array
V, D = cs.call('eig', 2, A)  # varios resultados: cs.call(nome, cantos, …)
```

- Un array de 1 × 1 chega como un número simple; os demais arrays, matrices esparsas, mallas, campos e modelos son **Valores**.
- Un Valor ten `shape` (unha tupla), `T`, `type`, `numel()`, `copy()`, `tolist()`, `len()` (as súas filas), e `float()`, `int()` e `bool()` para un único elemento.
- As comparacións (`<`, `==`, …) son elemento a elemento, como en numpy: dan un Valor lóxico.
- As listas de números pasadas a unha función integrada convértense en arrays: `cs.sum([1, 2, 3])`. `cs.tensor([[1, 2], [3, 4]])` crea unha matriz.
- Un dict convértese nunha estrutura e unha lista de cousas mixtas nunha cela, e viceversa.

Cada global que faga o script (un número, un Valor, un dict, unha lista…) acaba na lapela **Variables** ao rematar a execución, mesmo despois dun erro. Os nomes que empezan por `_`, as funcións, as clases e os módulos quedan en Python. `ws.name` lee ou fixa unha variable directamente, e `ws_names()` as lista.

`print(…)` escribe na consola. `display(…)` (ou `cs.display`) amosa unha malla, un campo ou un trazado, como en CraftScript.

## Chamar a biblioteca de análise

As funcións da biblioteca chámanse como as integradas: `cs.box_mesh(20, 10, 10, 5, 'hex')`, `cs.call('modal_tet', 2, …)`. Escriba o nome no script tal como é: PartCraft atopa as funcións da biblioteca que usa un script antes de executalo.

## Aínda non dispoñible

- numpy, scipy e outros paquetes: aquí só está a biblioteca estándar propia de Python (`math`, `json`, `itertools`, `decimal`, `statistics`…), sen as súas partes de ventás, terminal e bases de datos (`tkinter`, `curses`, `sqlite3`).
- Sockets e calquera outra cousa que chegase ao exterior: aquí Python non ten rede.
- `time.sleep` devolve o control de inmediato.
- O pregamento no editor, e a chamada dunha función de Python desde un script de CraftScript.
- Cada execución comproba o límite de instrucións e Parar cada 1000 liñas; un cálculo longo dentro dunha función integrada termina antes.
