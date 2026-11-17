---
title: CraftScript-språket
summary: CraftScript på én side: matriser og områder, indeksering, operatorer, kontrollflyt, funksjoner, structer og celler, kommentarer, ekko, feil og stegbudsjettet, og hvordan det skiller seg fra MATLAB.
keywords: CraftScript, språk, syntaks, matrise, array, vektor, tensor, indeks, end, kolon, område, operator, elementvis, transponering, if, for, while, switch, try, catch, funksjon, anonym funksjon, struct, celle, kommentar, ekko, semikolon, MATLAB, Octave, portering
from: d072b7d5
---

CraftScript er et matriseprogrammeringsspråk skrevet slik at det leses som MATLAB, så de fleste klassiske numeriske kodene (for eksempel 88-linjers topologioptimeringskoden) kjører med bare små endringer. Det kjører i [Skript-arbeidsområdet](topic:craftscript) og fra kommandolinjen.

## Verdier

| Type | Eksempel | Merknader |
|---|---|---|
| Tall, matrise | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Alle tall er matriser (en 1×1-matrise). Matriser lagres kolonne for kolonne, med opptil 8 dimensjoner |
| Logisk | `A > 2`, `true` | Matriser med sann/usann; kan brukes som indekser |
| Tekst | `'beam'`, `"beam"` | |
| Sparsom matrise | `sparse(i, j, v, n, n)` | For stivhetsmatriser |
| Nett, felt, modell | `hexGrid(…)`, `part()`, `load('part.stl')` | Det `show` tegner |
| Struct | `s.E = 210e3` | Navngitte felt |
| Celle | `c = {1, 'two', [3 4]}` | En liste med vilkårlige verdier |
| Funksjonshandtak | `f = @(x) x.^2` | |

## Matriser og indeksering

- Områder: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksering starter på 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (en hel kolonne), `A(:)` (alt som én kolonne), `v(v > 0)` (logisk indeksering).
- Tilordning forbi enden utvider matrisen, som i MATLAB: `v(10) = 1`.

## Operatorer

- `+ - * / \ ^` er matriseoperasjoner (`A \ b` løser); `.* ./ .^` virker element for element. `'` transponerer.
- Sammenligninger `== ~= < <= > >=`; logikk `& | ~` (element for element) og `&& ||` (kortslutning).

## Kontrollflyt og funksjoner

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

Funksjoner legges i et skript etter kommandoene, eller i en egen skriptfane oppkalt etter funksjonen:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Et navn slås opp i denne rekkefølgen: en variabel, et skript i denne delen med det navnet, en bibliotekfunksjon, en innebygd funksjon.

## Ekko, kommentarer, utdata

- En setning uten `;` skriver ut verdien sin; `;` holder den stille.
- `%` starter en kommentar; `%{` og `%}` på egne linjer setter linjene mellom dem i kommentar.
- `disp(x)`, `fprintf('%g\n', x)` og `display(x)` skriver ut til konsollen.

## Feil og grenser

- Feil forklarer med enkle ord hva som gikk galt, og oppgir linjen (og kjeden av funksjonskall).
- Hver kjøring har et stegbudsjett (Kjøreinnstillinger i panelet); en endeløs løkke stopper med en melding, eller trykk {{ui:Stop}}.
- Hver matrise kan holde opptil 134 millioner verdier.

## Ikke som MATLAB

- Plottekommandoer legger alternativene sine i kallet: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` og lignende godtas, men gjør ingenting.
- `input` og `keyboard` støttes ikke: et skript kan ikke stoppe for å stille et spørsmål.
- Det finnes ingen verktøykasser; [analysebiblioteket](topic:craftscript-library) og de innebygde funksjonene er det som finnes.
