---
title: Jezik CraftScript
summary: CraftScript na eni strani: matrike, obsegi in indeksiranje, operatorji, nadzor toka, funkcije, strukture in celice, komentarji, izpis, napake in proračunski korak ter razlike od MATLAB.
keywords: CraftScript, jezik, sintaksa, matrika, polje, vektor, tenzor, indeks, end, dvopičje, obseg, operator, po elementih, transponiranje, if, for, while, switch, try, catch, funkcija, anonimna funkcija, struktura, celica, komentar, echo, podpičje, MATLAB, Octave, prenos
from: d072b7d5
---

CraftScript je matrični jezik, zapisan tako, da se bere kot MATLAB, zato večina klasičnih numeričnih kod (na primer 88-vrstična koda za optimizacijo topologije) deluje z le manjšimi spremembami. Zažene se v [delovnem okolju Skript](topic:craftscript) in iz ukazne vrstice.

## Vrednosti

| Tip | Primer | Opombe |
|---|---|---|
| Število, polje | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Vsako število je polje (1×1). Polja so shranjena po stolpcih, do 8 dimenzij |
| Logično | `A > 2`, `true` | Polja z vrednostmi true/false; uporabna kot indeksi |
| Besedilo | `'beam'`, `"beam"` | |
| Redka matrika | `sparse(i, j, v, n, n)` | Za togostne matrike |
| Mreža, polje, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Kar nariše `show` |
| Struktura | `s.E = 210e3` | Poimenovana polja |
| Celica | `c = {1, 'two', [3 4]}` | Seznam poljubnih vrednosti |
| Ročaj funkcije | `f = @(x) x.^2` | |

## Polja in indeksiranje

- Obsegi: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksiranje se začne pri 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (cel stolpec), `A(:)` (vse kot en stolpec), `v(v > 0)` (logično indeksiranje).
- Dodeljevanje čez konec polje poveča, kot v MATLAB: `v(10) = 1`.

## Operatorji

- `+ - * / \ ^` so matrične operacije (`A \ b` reši sistem); `.* ./ .^` delujejo po elementih. `'` transponira.
- Primerjave `== ~= < <= > >=`; logika `& | ~` (po elementih) in `&& ||` (s krajšim sklepanjem).

## Nadzor toka in funkcije

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

Funkcije zapišite v skript za njegovimi ukazi ali v lasten zavihek skripta, poimenovan po funkciji:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Ime se išče v tem vrstnem redu: spremenljivka, skript v tem delu s tem imenom, funkcija knjižnice, vgrajena funkcija.

## Izpis, komentarji, izhod

- Stavek brez `;` izpiše svojo vrednost; `;` jo ohrani tiho.
- `%` začne komentar; `%{` in `%}` v lastnih vrsticah zakomentirata vrstice med njima.
- `disp(x)`, `fprintf('%g\n', x)` in `display(x)` izpišejo v konzolo.

## Napake in omejitve

- Napake v preprostih besedah povedo, kaj je šlo narobe, in navedejo vrstico (ter verigo klicev funkcij).
- Vsak zagon ima proračunski korak (možnosti zagona v podoknu); neskončna zanka se ustavi s sporočilom ali pritisnite Ustavi.
- Vsako polje lahko vsebuje do 134 milijonov vrednosti.

## Ni kot MATLAB

- Ukazi za risanje svoje možnosti zapišejo v klicu: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` in podobni so sprejeti, a ne naredijo ničesar.
- `input` in `keyboard` nista podprta: skript se ne more ustaviti in postaviti vprašanja.
- Toolboxov ni; na voljo sta [knjižnica za analizo](topic:craftscript-library) in vgrajene funkcije.
