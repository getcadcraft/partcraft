---
title: El lenguaje CraftScript
summary: CraftScript en una página: matrices, rangos e indexado, operadores, control de flujo, funciones, estructuras y celdas, comentarios, eco, errores y presupuesto de pasos, y en qué se diferencia de MATLAB
keywords: CraftScript, lenguaje, sintaxis, matriz, arreglo, vector, tensor, índice, end, dos puntos, rango, operador, elemento por elemento, transpuesta, if, for, while, switch, try, catch, función, función anónima, estructura, celda, comentario, eco, punto y coma, MATLAB, Octave, portabilidad
from: d072b7d5
---

CraftScript es un lenguaje de matrices escrito para leerse como MATLAB, así que la mayoría de los códigos numéricos clásicos (el código de optimización topológica de 88 líneas, por ejemplo) se ejecutan con pocos cambios. Se ejecuta en el [espacio de trabajo Script](topic:craftscript) y desde la línea de comandos.

## Valores

| Tipo | Ejemplo | Notas |
|---|---|---|
| Número, arreglo | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Todo número es un arreglo (de 1×1). Los arreglos se guardan columna por columna, hasta 8 dimensiones |
| Lógico | `A > 2`, `true` | Arreglos de verdadero/falso; se usan como índices |
| Texto | `'beam'`, `"beam"` | |
| Matriz dispersa | `sparse(i, j, v, n, n)` | Para matrices de rigidez |
| Malla, campo, modelo | `hexGrid(…)`, `part()`, `load('part.stl')` | Lo que dibuja `show` |
| Estructura | `s.E = 210e3` | Campos con nombre |
| Celda | `c = {1, 'two', [3 4]}` | Lista de valores de cualquier tipo |
| Manejador de función | `f = @(x) x.^2` | |

## Arreglos e indexado

- Rangos: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- El indexado empieza en 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (una columna completa), `A(:)` (todo como una sola columna), `v(v > 0)` (indexado lógico).
- Asignar más allá del final agranda el arreglo, como en MATLAB: `v(10) = 1`.

## Operadores

- `+ - * / \ ^` son operaciones de matrices (`A \ b` resuelve); `.* ./ .^` operan elemento por elemento. `'` obtiene la transpuesta.
- Comparaciones `== ~= < <= > >=`; lógica `& | ~` (elemento por elemento) y `&& ||` (con cortocircuito).

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

- Una instrucción sin `;` muestra su valor; `;` la mantiene en silencio.
- `%` inicia un comentario; `%{` y `%}` en líneas propias comentan las líneas entre ellas.
- `disp(x)`, `fprintf('%g\n', x)` y `display(x)` escriben en la consola.

## Errores y límites

- Los errores dicen en palabras sencillas qué salió mal y dan la línea (y la cadena de llamadas a funciones).
- Cada ejecución tiene un presupuesto de pasos (opciones de ejecución en el panel); un bucle sin fin se detiene con un mensaje, o pulse {{ui:Detener}}.
- Los arreglos guardan hasta 134 millones de valores cada uno.

## Diferencias con MATLAB

- Los comandos de graficación ponen sus opciones en la llamada: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` y similares se aceptan y no hacen nada.
- `input` y `keyboard` no se admiten: un script no puede detenerse a hacer una pregunta.
- No hay cajas de herramientas; lo que hay son la [biblioteca de análisis](topic:craftscript-library) y las funciones integradas.
