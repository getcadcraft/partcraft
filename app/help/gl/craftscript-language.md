---
title: A linguaxe CraftScript
summary: CraftScript nunha páxina: matrices, rangos e indexación, operadores, control de fluxo, funcións, estruturas e celas, comentarios, eco, erros e límite de pasos, e en que se diferencia de MATLAB.
keywords: CraftScript, linguaxe, sintaxe, matriz, array, vector, tensor, índice, end, dous puntos, rango, operador, elemento a elemento, transposición, if, for, while, switch, try, catch, función, función anónima, estrutura, cela, comentario, eco, punto e coma, MATLAB, Octave, portabilidade
from: d072b7d5
---

CraftScript é unha linguaxe matricial escrita para que se lea como MATLAB, así que a maioría dos códigos numéricos clásicos (por exemplo, o código de optimización topolóxica de 88 liñas) funcionan só con pequenos cambios. Execútase no [espazo de traballo Script](topic:craftscript) e desde a liña de comandos.

## Valores

| Tipo | Exemplo | Notas |
|---|---|---|
| Número, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Todo número é un array (de 1×1). Os arrays gárdanse por columnas, ata 8 dimensións |
| Lóxico | `A > 2`, `true` | Arrays de verdadeiro/falso; utilizables como índices |
| Texto | `'beam'`, `"beam"` | |
| Matriz esparsa | `sparse(i, j, v, n, n)` | Para matrices de rixidez |
| Malla, campo, modelo | `hexGrid(…)`, `part()`, `load('part.stl')` | O que dibuxa `show` |
| Estrutura | `s.E = 210e3` | Campos con nome |
| Cela | `c = {1, 'two', [3 4]}` | Unha lista de valores calquera |
| Manexador de función | `f = @(x) x.^2` | |

## Arrays e indexación

- Rangos: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- A indexación comeza en 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (unha columna completa), `A(:)` (todo como unha soa columna), `v(v > 0)` (indexación lóxica).
- Asignar máis aló do final fai crecer o array, como en MATLAB: `v(10) = 1`.

## Operadores

- `+ - * / \ ^` son operacións matriciais (`A \ b` resolve); `.* ./ .^` traballan elemento a elemento. `'` transpón.
- Comparacións `== ~= < <= > >=`; lóxica `& | ~` (elemento a elemento) e `&& ||` (curtocircuíto).

## Control de fluxo e funcións

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

As funcións van nun script despois dos seus comandos, ou na súa propia lapela de script co nome da función:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Un nome búscase por esta orde: unha variable, un script desta peza con ese nome, unha función da biblioteca e unha función integrada.

## Eco, comentarios, saída

- Unha instrución sen `;` imprime o seu valor; `;` mantena en silencio.
- `%` inicia un comentario; `%{` e `%}` en liñas propias comentan as liñas que hai entre elas.
- `disp(x)`, `fprintf('%g\n', x)` e `display(x)` imprimen na consola.

## Erros e límites

- Os erros din en palabras simples que fallou e indican a liña (e a cadea de chamadas de funcións).
- Cada execución ten un límite de pasos (Opcións de execución no panel); un bucle sen fin para cunha mensaxe, ou prema Parar.
- Cada array pode conter ata 134 millóns de valores.

## Non como MATLAB

- Os comandos de trazado poñen as súas opcións na chamada: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` e similares admítense e non fan nada.
- `input` e `keyboard` non se admiten: un script non pode parar para facer unha pregunta.
- Non hai caixas de ferramentas; o que hai son a [biblioteca de análise](topic:craftscript-library) e as funcións integradas.
