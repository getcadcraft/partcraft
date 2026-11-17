---
title: El llenguatge CraftScript
summary: CraftScript en una pàgina: matrius, rangs i indexació, operadors, control de flux, funcions, estructures i cel·les, comentaris, eco, errors i el pressupost de passos, i en què es diferencia de MATLAB.
keywords: CraftScript, llenguatge, sintaxi, matriu, array, vector, tensor, índex, end, dos punts, rang, operador, element a element, transposició, if, for, while, switch, try, catch, funció, funció anònima, estructura, cel·la, comentari, echo, punt i coma, MATLAB, Octave, portabilitat
from: d072b7d5
---

CraftScript és un llenguatge de matrius escrit perquè es llegeixi com MATLAB, de manera que la majoria de codis numèrics clàssics (per exemple, el codi d'optimització topològica de 88 línies) funcionen amb canvis petits. S'executa a l'[espai de treball Script](topic:craftscript) i des de la línia d'ordres.

## Valors

| Tipus | Exemple | Observacions |
|---|---|---|
| Nombre, matriu | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Cada nombre és una matriu (d'1×1). Les matrius s'emmagatzemen columna per columna, fins a 8 dimensions |
| Lògic | `A > 2`, `true` | Matrius de vertader/fals; utilitzables com a índexs |
| Text | `'beam'`, `"beam"` | |
| Matriu dispersa | `sparse(i, j, v, n, n)` | Per a matrius de rigidesa |
| Malla, camp, model | `hexGrid(…)`, `part()`, `load('part.stl')` | El que dibuixa `show` |
| Estructura | `s.E = 210e3` | Camps amb nom |
| Cel·la | `c = {1, 'two', [3 4]}` | Una llista de valors de qualsevol tipus |
| Identificador de funció | `f = @(x) x.^2` | |

## Matrius i indexació

- Rangs: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- La indexació comença a 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (una columna sencera), `A(:)` (tot com una sola columna), `v(v > 0)` (indexació lògica).
- Assignar més enllà del final fa créixer la matriu, com a MATLAB: `v(10) = 1`.

## Operadors

- `+ - * / \ ^` són operacions de matrius (`A \ b` resol); `.* ./ .^` actuen element a element. `'` transposa.
- Comparacions `== ~= < <= > >=`; lògica `& | ~` (element a element) i `&& ||` (curtcircuit).

## Control de flux i funcions

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

Les funcions van en un script després de les seves ordres, o en la seva pròpia pestanya de script amb el nom de la funció:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Un nom es busca en aquest ordre: una variable, un script d'aquesta peça amb aquest nom, una funció de la biblioteca, una funció integrada.

## Eco, comentaris, sortida

- Una sentència sense `;` mostra el seu valor; `;` el deixa en silenci.
- `%` inicia un comentari; `%{` i `%}` en línies pròpies comenten les línies que hi ha entre elles.
- `disp(x)`, `fprintf('%g\n', x)` i `display(x)` escriuen a la consola.

## Errors i límits

- Els errors diuen en paraules senzilles què ha anat malament i indiquen la línia (i la cadena de crides a funcions).
- Cada execució té un pressupost de passos (Opcions d'execució al panell); un bucle sense fi s'atura amb un missatge, o premeu {{ui:Atura}}.
- Les matrius contenen fins a 134 milions de valors cadascuna.

## Diferències amb MATLAB

- Les ordres de traçat posen les seves opcions dins de la crida: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` i similars s'accepten i no fan res.
- `input` i `keyboard` no són compatibles: un script no pot aturar-se per fer una pregunta.
- No hi ha caixes d'eines; la [biblioteca d'anàlisi](topic:craftscript-library) i les funcions integrades són el que hi ha.
