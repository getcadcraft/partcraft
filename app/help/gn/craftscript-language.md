---
title: Ñe'ẽ CraftScript
summary: CraftScript mba'e apytépe peteĩ kuatiañe: matriz, rango ha índice, operador, control de flujo, función, estructura ha celda, comentario, echo, error ha límite de paso, ha mba'éichapa oiporu MATLAB-gui.
keywords: CraftScript, ñe'ẽ, sintaxis, matriz, arreglo, vector, tensor, índice, end, dos puntos, rango, operador, elemento por elemento, transpuesta, if, for, while, switch, try, catch, función, función anónima, estructura, celda, comentario, echo, punto y coma, MATLAB, Octave, port
from: d072b7d5
---

CraftScript ha'e ñe'ẽ de matriz ojejapo MATLAB-icha ojeikuaa hag̃ua, upévare heta código numérico clásico (por ejemplo, el código de optimización de topología de 88 línea) oñemboguata chupe mbegue pequeño cambio rupi. Ojapo [espacio Script](topic:craftscript) ryepýpe ha línea de comandos-gui.

## Valores

| Tipo | Ejemplo | Notas |
|---|---|---|
| Número, arreglo | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Opa número ha'e arreglo (1×1 rehegua). Arreglos oñemoĩ columna por columna, hasta 8 dimensión |
| Lógico | `A > 2`, `true` | Arreglo de true/false; oikoveha índice-icha |
| Texto | `'beam'`, `"beam"` | |
| Matriz rala | `sparse(i, j, v, n, n)` | Matriz de rigidez-pe |
| Malla, campo, modelo | `hexGrid(…)`, `part()`, `load('part.stl')` | Oñemoña `show` |
| Estructura | `s.E = 210e3` | Campo oñemboguéva |
| Celda | `c = {1, 'two', [3 4]}` | Lista de mba'e cualquiera |
| Manejador de función | `f = @(x) x.^2` | |

## Arreglos ha índice

- Rango: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Índice oñepyrũ 1-gui: `A(2, 3)`, `v(end)`, `A(:, 1)` (columna entera), `A(:)` (opa mba'e peteĩ columna-pe), `v(v > 0)` (índice lógico).
- Oñemoĩ mboyve fin-gui, arreglo ojagranda, MATLAB-icha: `v(10) = 1`.

## Operadores

- `+ - * / \ ^` ha'e operación de matriz (`A \ b` ombohovái); `.* ./ .^` oñemba elemento po elemento. `'` ohechauka transpuesta.
- Comparación `== ~= < <= > >=`; lógica `& | ~` (elemento po elemento) ha `&& ||` (corte rápido).

## Control de flujo ha función

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

Función oĩ kuatiañe-pe mboguegua rire, térã iñambue tab-pe ojeporâva función rérape:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Nombre ojekuaa ko orden-pe: variable, kuatiañe ko parte-pe ojehechaséva upe nombre-pe, función biblioteca, upéi función incorporada.

## Echo, comentario, salida

- Mba'e sin `;` ohechauka valor; `;` oñemongeta.
- `%` oñepyrũ comentario; `%{` ha `%}` líneas propias-pe ohundi líneas ojoavágui.
- `disp(x)`, `fprintf('%g\n', x)` ha `display(x)` oñemoñe consola-pe.

## Error ha límite

- Error ohechauka mba'épa ojehaʼéva palabras kléra-pe ha línea (ha función-kuéra jeroviaha).
- Cada corrida oguereko paso-límite (Run options panel-pe); loop ndoikóiva oñemoĩ mensaje-pe, térã oprimi Stop.
- Cada arreglo oguereko 134 millón valor peve.

## Ndaha'éi MATLAB-icha

- Plot-kuéra opyta opción llamada-pe: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` ha ambue ojeporu, ha ndohaʼéi mba'eve.
- `input` ha `keyboard` ndojeporúi: kuatiañe ndoikói pregunta-pe ohejareko hag̃ua.
- Ndoguerekói toolbox; [biblioteca de análisis](topic:craftscript-library) ha función incorporada ha'e oiméva.
