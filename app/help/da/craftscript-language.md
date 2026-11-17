---
title: CraftScript-sproget
summary: CraftScript på én side: matricer, intervaller og indeksering, operatorer, kontrolflow, funktioner, structs og celler, kommentarer, ekko, fejl og trinbudgettet, og hvordan det adskiller sig fra MATLAB.
keywords: CraftScript, sprog, syntaks, matrix, array, vektor, tensor, indeks, end, kolon, interval, operator, elementvis, transponering, if, for, while, switch, try, catch, funktion, anonym funktion, struct, celle, kommentar, ekko, semikolon, MATLAB, Octave, port
from: d072b7d5
---

CraftScript er et matrixsprog, skrevet så det læses som MATLAB, så de fleste klassiske numeriske koder (fx topologioptimeringskoden på 88 linjer) kører med kun små ændringer. Det kører i [Script-arbejdsområdet](topic:craftscript) og fra kommandolinjen.

## Værdier

| Type | Eksempel | Noter |
|---|---|---|
| Tal, array | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Hvert tal er et array (et 1×1-array). Arrays gemmes kolonne for kolonne, op til 8 dimensioner |
| Logisk | `A > 2`, `true` | Arrays af sand/falsk; kan bruges som indeks |
| Tekst | `'beam'`, `"beam"` | |
| Sparsom matrix | `sparse(i, j, v, n, n)` | Til stivhedsmatricer |
| Mesh, felt, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Det `show` tegner |
| Struct | `s.E = 210e3` | Navngivne felter |
| Celle | `c = {1, 'two', [3 4]}` | En liste med vilkårlige værdier |
| Funktionshåndtag | `f = @(x) x.^2` | |

## Arrays og indeksering

- Intervaller: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksering starter ved 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (en hel kolonne), `A(:)` (alt som én kolonne), `v(v > 0)` (logisk indeksering).
- Tildeling efter slutningen udvider arrayet, som i MATLAB: `v(10) = 1`.

## Operatorer

- `+ - * / \ ^` er matrixoperationer (`A \ b` løser); `.* ./ .^` virker element for element. `'` transponerer.
- Sammenligninger `== ~= < <= > >=`; logik `& | ~` (element for element) og `&& ||` (kortslutning).

## Kontrolflow og funktioner

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

Funktioner placeres i et script efter dets kommandoer, eller på sin egen script-fane, opkaldt efter funktionen:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Et navn slås op i denne rækkefølge: en variabel, et script i denne del med det navn, en biblioteksfunktion, en indbygget funktion.

## Ekko, kommentarer, output

- En sætning uden `;` udskriver sin værdi; `;` holder den stille.
- `%` starter en kommentar; `%{` og `%}` på egne linjer sætter linjerne imellem ud af kraft som kommentar.
- `disp(x)`, `fprintf('%g\n', x)` og `display(x)` udskriver til konsollen.

## Fejl og grænser

- Fejlmeddelelser siger med almindelige ord, hvad der gik galt, og angiver linjen (og kæden af funktionskald).
- Hver kørsel har et trinbudget (Kørselsindstillinger i panelet); en uendelig løkke stopper med en besked, eller tryk Stop.
- Arrays rummer op til 134 millioner værdier hver.

## Ikke som MATLAB

- Plotkommandoer angiver deres indstillinger i kaldet: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` og lignende accepteres og gør ingenting.
- `input` og `keyboard` understøttes ikke: et script kan ikke stoppe for at stille et spørgsmål.
- Der findes ingen toolboxes; [analysebiblioteket](topic:craftscript-library) og de indbyggede funktioner er det, der findes.
