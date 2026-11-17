---
title: El lenguaje CraftScript
summary: CraftScript en una página: matrices, rangos e indexación, operadores, control de flujo, funciones, estructuras y celdas, comentarios, eco, errores y presupuesto de pasos, y en qué se diferencia de MATLAB.
keywords: CraftScript, lenguaje, sintaxis, matriz, array, vector, tensor, índice, end, dos puntos, rango, operador, elemento a elemento, traspuesta, if, for, while, switch, try, catch, función, función anónima, estructura, celda, comentario, eco, punto y coma, MATLAB, Octave, port
from: d072b7d5
---

CraftScript es un lenguaje matricial escrito para leerse como MATLAB, de modo que la mayoría de los códigos numéricos clásicos (el código de optimización topológica de 88 líneas, por ejemplo) funcionan con pocos cambios. Se ejecuta en el [espacio de trabajo Script](topic:craftscript) y desde la línea de comandos.

## Valores

| Tipo | Ejemplo | Notas |
|---|---|---|
| Número, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Todo número es un array (de 1×1). Los arrays se almacenan columna a columna, hasta 8 dimensiones |
| Lógico | `A > 2`, `true` | Arrays de verdadero/falso; utilizables como índices |
| Texto | `'beam'`, `"beam"` | |
| Matriz dispersa | `sparse(i, j, v, n, n)` | Para matrices de rigidez |
| Malla, campo, modelo | `hexGrid(…)`, `part()`, `load('part.stl')` | Lo que dibuja `show` |
| Estructura | `s.E = 210e3` | Campos con nombre |
| Celda | `c = {1, 'two', [3 4]}` | Una lista de valores de cualquier tipo |
| Manejador de función | `f = @(x) x.^2` | |

## Arrays e indexación

- Rangos: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- La indexación empieza en 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (una columna completa), `A(:)` (todo como una sola columna), `v(v > 0)` (indexación lógica).
- Asignar más allá del final amplía el array, como en MATLAB: `v(10) = 1`.

## Operadores

- `+ - * / \ ^` son operaciones matriciales (`A \ b` resuelve); `.* ./ .^` actúan elemento a elemento. `'` traspone.
- Comparaciones `== ~= < <= > >=`; lógica `& | ~` (elemento a elemento) y `&& ||` (cortocircuito).

## Control de flujo y funciones

```
for k = 1:10
  if mod(k, 2) == 0
    continue
  elseif k > 7
    break
  end
end
while err > 1e-6, … end
switch kind
  case 'steel'
    E = 210e3;
  otherwise
    E = 70e3;
end
try
  x = A \ b;
catch e
  disp(e.message)
end
```

Las funciones van en un script después de sus comandos, o en su propia pestaña de script con el nombre de la función:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Un nombre se busca en este orden: una variable, un script de esta pieza con ese nombre, una función de la biblioteca, una función integrada.

## Eco, comentarios, salida

- Una sentencia sin `;` muestra su valor; `;` la mantiene en silencio.
- `%` inicia un comentario; `%{` y `%}` en líneas propias comentan las líneas que hay entre ellas.
- `disp(x)`, `fprintf('%g\n', x)` y `display(x)` escriben en la consola.

## Errores y límites

- Los errores dicen en palabras sencillas qué ha fallado y dan la línea (y la cadena de llamadas a funciones).
- Cada ejecución tiene un presupuesto de pasos (opciones de ejecución en el panel); un bucle sin fin se detiene con un mensaje, o pulse {{ui:Detener}}.
- Cada array admite hasta 134 millones de valores.

## Distinto de MATLAB

- Los comandos de trazado ponen sus opciones en la llamada: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` y similares se aceptan y no hacen nada.
- `input` y `keyboard` no están soportados: un script no puede detenerse para hacer una pregunta.
- No hay cajas de herramientas; lo que hay son la [biblioteca de análisis](topic:craftscript-library) y las funciones integradas.
