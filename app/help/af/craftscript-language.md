---
title: Die CraftScript-taal
summary: CraftScript op een bladsy: matrikse, reekse en indeksering, operateurs, vloeibeheer, funksies, structs en selle, kommentaar, eggo, foute en die stapbegroting, en hoe dit van MATLAB verskil.
keywords: CraftScript, taal, sintaksis, matriks, skikking, vektor, tensor, indeks, end, dubbelpunt, reeks, operator, elementgewys, transponeer, if, for, while, switch, try, catch, funksie, anonieme funksie, struct, sel, kommentaar, eggo, kommapunt, MATLAB, Octave, poort
from: d072b7d5
---

CraftScript is 'n matrikstaal wat gelees word soos MATLAB, so die meeste klassieke numeriese kodes (die 88-reël-topologie-optimeringskode, byvoorbeeld) loop met slegs klein veranderinge. Dit loop in die [Skrip-werkruimte](topic:craftscript) en vanaf die opdraglyn.

## Waardes

| Tipe | Voorbeeld | Notas |
|---|---|---|
| Getal, skikking | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Elke getal is 'n skikking ('n 1×1-een). Skikkings word kolom vir kolom gestoor, tot 8 dimensies |
| Logies | `A > 2`, `true` | Skikkings van waar/onwaar; bruikbaar as indekse |
| Teks | `'beam'`, `"beam"` | |
| Yl matriks | `sparse(i, j, v, n, n)` | Vir styfheidsmatrikse |
| Maas, veld, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Wat `show` teken |
| Struct | `s.E = 210e3` | Benoemde velde |
| Sel | `c = {1, 'two', [3 4]}` | 'n Lys van enige waardes |
| Funksiehandvatsel | `f = @(x) x.^2` | |

## Skikkings en indeksering

- Reekse: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksering begin by 1: `A(2, 3)`, `v(end)`, `A(:, 1)` ('n hele kolom), `A(:)` (alles as een kolom), `v(v > 0)` (logiese indeksering).
- Toekenning verby die einde laat die skikking groei, soos in MATLAB: `v(10) = 1`.

## Operateurs

- `+ - * / \ ^` is matriksbewerkings (`A \ b` los op); `.* ./ .^` werk element vir element. `'` transponeer.
- Vergelykings `== ~= < <= > >=`; logika `& | ~` (element vir element) en `&& ||` (kortsluit).

## Vloeibeheer en funksies

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

Funksies gaan in 'n skrip ná sy opdragte, of in hul eie skripblad wat na die funksie vernoem is:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

'n Naam word in hierdie volgorde opgesoek: 'n veranderlike, 'n skrip in hierdie onderdeel met daardie naam, 'n biblioteekfunksie, 'n ingeboude funksie.

## Eggo, kommentaar, uitvoer

- 'n Stelling sonder `;` druk sy waarde uit; `;` hou dit stil.
- `%` begin 'n kommentaar; `%{` en `%}` op hul eie reëls kommentarieer die reëls tussen hulle uit.
- `disp(x)`, `fprintf('%g\n', x)` en `display(x)` druk na die konsole.

## Foute en perke

- Foute sê in gewone woorde wat verkeerd gegaan het en gee die reël (en die ketting van funksieaanroepe).
- Elke lopie het 'n stapbegroting (Voer uit-opsies in die paneel); 'n oneindige lus stop met 'n boodskap, of druk Stop.
- Skikkings hou tot 134 miljoen waardes elk.

## Anders as MATLAB

- Grafiekopdragte plaas hul opsies in die aanroep: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` en soortgelyke word aanvaar en doen niks.
- `input` en `keyboard` word nie ondersteun nie: 'n skrip kan nie stop om 'n vraag te vra nie.
- Daar is geen gereedskapstelle nie; die [analise-biblioteek](topic:craftscript-library) en die ingeboude funksies is wat daar is.
