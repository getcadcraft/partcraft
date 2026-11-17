---
title: De CraftScript-taal
summary: CraftScript op één pagina: matrices, bereiken en indexering, operatoren, besturingsstroom, functies, structs en cellen, commentaar, echo, fouten en het stappenbudget, en hoe het verschilt van MATLAB.
keywords: CraftScript, taal, syntaxis, matrix, array, vector, tensor, index, end, dubbele punt, bereik, operator, elementsgewijs, transponeren, if, for, while, switch, try, catch, functie, anonieme functie, struct, cell, commentaar, echo, puntkomma, MATLAB, Octave, overzetten
from: d072b7d5
---

CraftScript is een matrixtaal die leest als MATLAB, zodat de meeste klassieke numerieke codes (de topologie-optimalisatiecode van 88 regels, bijvoorbeeld) met alleen kleine wijzigingen werken. Hij draait in de [Script-werkomgeving](topic:craftscript) en vanaf de opdrachtregel.

## Waarden

| Type | Voorbeeld | Opmerkingen |
|---|---|---|
| Getal, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Elk getal is een array (een 1×1-array). Arrays worden kolom voor kolom opgeslagen, tot 8 dimensies |
| Logisch | `A > 2`, `true` | Arrays van waar/onwaar; bruikbaar als indices |
| Tekst | `'beam'`, `"beam"` | |
| Ijle matrix | `sparse(i, j, v, n, n)` | Voor stijfheidsmatrices |
| Mesh, veld, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Wat `show` tekent |
| Struct | `s.E = 210e3` | Benoemde velden |
| Cell | `c = {1, 'two', [3 4]}` | Een lijst van willekeurige waarden |
| Functiehandle | `f = @(x) x.^2` | |

## Arrays en indexering

- Bereiken: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indexering begint bij 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (een hele kolom), `A(:)` (alles als één kolom), `v(v > 0)` (logische indexering).
- Een waarde toekennen voorbij het einde laat de array groeien, zoals in MATLAB: `v(10) = 1`.

## Operatoren

- `+ - * / \ ^` zijn matrixbewerkingen (`A \ b` lost op); `.* ./ .^` werken element voor element. `'` transponeert.
- Vergelijkingen `== ~= < <= > >=`; logica `& | ~` (element voor element) en `&& ||` (kortsluiting).

## Besturing en functies

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

Functies staan in een script na de opdrachten, of in hun eigen scripttabblad met de naam van de functie:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Een naam wordt in deze volgorde opgezocht: een variabele, een script in dit onderdeel met die naam, een bibliotheekfunctie, een ingebouwde functie.

## Echo, commentaar, uitvoer

- Een instructie zonder `;` toont zijn waarde; `;` houdt het stil.
- `%` begint commentaar; `%{` en `%}` op eigen regels zetten de regels ertussen uit als commentaar.
- `disp(x)`, `fprintf('%g\n', x)` en `display(x)` schrijven naar de console.

## Fouten en grenzen

- Fouten zeggen in gewone woorden wat er misging en geven de regel (en de keten van functieaanroepen).
- Elke uitvoering heeft een stappenbudget (Uitvoeropties in het paneel); een eindeloze lus stopt met een melding, of druk op Stoppen.
- Arrays bevatten elk tot 134 miljoen waarden.

## Niet zoals MATLAB

- Plotcommando's zetten hun opties in de aanroep: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` en vergelijkbare worden geaccepteerd en doen niets.
- `input` en `keyboard` worden niet ondersteund: een script kan niet stoppen om een vraag te stellen.
- Er zijn geen toolboxes; de [analysebibliotheek](topic:craftscript-library) en de ingebouwde functies zijn wat er is.
