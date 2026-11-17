---
title: CraftScript-språket
summary: CraftScript på en sida: matriser, intervall och indexering, operatorer, styrflöde, funktioner, strukturer och celler, kommentarer, eko, fel och stegbudgeten samt hur det skiljer sig från MATLAB.
keywords: CraftScript, språk, syntax, matris, array, vektor, tensor, index, end, kolon, intervall, operator, elementvis, transponat, if, for, while, switch, try, catch, funktion, anonym funktion, struktur, cell, kommentar, eko, semikolon, MATLAB, Octave, portning
from: d072b7d5
---

CraftScript är ett matrisspråk skrivet så att det läses som MATLAB, så de flesta klassiska numeriska koder (till exempel den 88 rader långa topologioptimeringskoden) körs med bara små ändringar. Det körs i [Skriptarbetsytan](topic:craftscript) och från kommandoraden.

## Värden

| Typ | Exempel | Anteckningar |
|---|---|---|
| Tal, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Varje tal är en array (en 1×1-array). Arrayer lagras kolumn för kolumn, upp till 8 dimensioner |
| Logisk | `A > 2`, `true` | Arrayer med sant/falskt; går att använda som index |
| Text | `'beam'`, `"beam"` | |
| Glesmatris | `sparse(i, j, v, n, n)` | För styvhetsmatriser |
| Nät, fält, modell | `hexGrid(…)`, `part()`, `load('part.stl')` | Det `show` ritar |
| Struktur | `s.E = 210e3` | Namngivna fält |
| Cell | `c = {1, 'two', [3 4]}` | En lista med godtyckliga värden |
| Funktionshandtag | `f = @(x) x.^2` | |

## Arrayer och indexering

- Intervall: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indexering börjar på 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (en hel kolumn), `A(:)` (allt som en kolumn), `v(v > 0)` (logisk indexering).
- Tilldelning efter slutet utökar arrayen, som i MATLAB: `v(10) = 1`.

## Operatorer

- `+ - * / \ ^` är matrisoperationer (`A \ b` löser); `.* ./ .^` arbetar element för element. `'` transponerar.
- Jämförelser `== ~= < <= > >=`; logik `& | ~` (element för element) och `&& ||` (kortslutning).

## Styrflöde och funktioner

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

Funktioner läggs i ett skript efter dess kommandon, eller i en egen skriptflik med funktionens namn:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Ett namn letas upp i denna ordning: en variabel, ett skript i den här delen med det namnet, en biblioteksfunktion, en inbyggd funktion.

## Eko, kommentarer, utdata

- En sats utan `;` skriver ut sitt värde; `;` håller det tyst.
- `%` inleder en kommentar; `%{` och `%}` på egna rader kommenterar bort raderna mellan dem.
- `disp(x)`, `fprintf('%g\n', x)` och `display(x)` skriver ut till konsolen.

## Fel och gränser

- Fel säger med enkla ord vad som gick fel och anger raden (och kedjan av funktionsanrop).
- Varje körning har en stegbudget (körinställningarna i panelen); en oändlig loop stoppas med ett meddelande, eller tryck på Stopp.
- Arrayer rymmer upp till 134 miljoner värden var.

## Inte som MATLAB

- Plottkommandon lägger sina alternativ i anropet: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` och liknande accepteras men gör ingenting.
- `input` och `keyboard` stöds inte: ett skript kan inte stanna och ställa en fråga.
- Det finns inga verktygslådor; [analysbiblioteket](topic:craftscript-library) och de inbyggda funktionerna är vad som finns.
