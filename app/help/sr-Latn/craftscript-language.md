---
title: CraftScript jezik
summary: CraftScript na jednoj stranici: matrice, opsezi i indeksiranje, operatori, kontrola toka, funkcije, strukture i ćelije, komentari, eho, greške i budžet koraka, i kako se razlikuje od MATLAB-a.
keywords: CraftScript, jezik, sintaksa, matrica, niz, vektor, tenzor, indeks, end, dve tačke, opseg, operator, po elementima, transponovanje, if, for, while, switch, try, catch, funkcija, anonimna funkcija, struktura, ćelija, komentar, eho, tačka-zarez, MATLAB, Octave, prenos koda
from: d072b7d5
---

CraftScript je matrični jezik napisan tako da se čita kao MATLAB, pa većina klasičnih numeričkih kodova (na primer kod za optimizaciju topologije od 88 linija) radi uz samo male izmene. Pokreće se u [radnom prostoru Skripte](topic:craftscript) i iz komandne linije.

## Vrednosti

| Tip | Primer | Napomene |
|---|---|---|
| Broj, niz | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Svaki broj je niz (1×1). Nizovi se čuvaju kolonu po kolonu, do 8 dimenzija |
| Logička | `A > 2`, `true` | Nizovi tačno/netačno; mogu da služe kao indeksi |
| Tekst | `'beam'`, `"beam"` | |
| Retka matrica | `sparse(i, j, v, n, n)` | Za matrice krutosti |
| Mreža, polje, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Ono što `show` crta |
| Struktura | `s.E = 210e3` | Imenovana polja |
| Ćelija | `c = {1, 'two', [3 4]}` | Lista bilo kojih vrednosti |
| Pokazivač na funkciju | `f = @(x) x.^2` | |

## Nizovi i indeksiranje

- Opsezi: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksiranje počinje od 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (cela kolona), `A(:)` (sve kao jedna kolona), `v(v > 0)` (logičko indeksiranje).
- Dodeljivanje iza kraja proširuje niz, kao u MATLAB-u: `v(10) = 1`.

## Operatori

- `+ - * / \ ^` su matrične operacije (`A \ b` rešava); `.* ./ .^` rade element po element. `'` transponuje.
- Poređenja `== ~= < <= > >=`; logika `& | ~` (element po element) i `&& ||` (kratki spoj).

## Kontrola toka i funkcije

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

Funkcije idu u skriptu posle njenih naredbi, ili u sopstveni jezičak skripte nazvan po funkciji:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Ime se traži ovim redom: promenljiva, skripta u ovom delu sa tim imenom, funkcija iz biblioteke, ugrađena funkcija.

## Eho, komentari, izlaz

- Naredba bez `;` ispisuje svoju vrednost; `;` je ućutkava.
- `%` počinje komentar; `%{` i `%}` u zasebnim redovima stavljaju u komentar redove između njih.
- `disp(x)`, `fprintf('%g\n', x)` i `display(x)` ispisuju u konzolu.

## Greške i ograničenja

- Greške jasno kažu šta nije u redu i daju red (i lanac poziva funkcija).
- Svako pokretanje ima budžet koraka (opcije pokretanja u panelu); beskonačna petlja se zaustavlja uz poruku, ili pritisnite Zaustavi.
- Niz može da sadrži do 134 miliona vrednosti.

## Nije kao MATLAB

- Naredbe za crtanje stavljaju opcije u poziv: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` i slične su prihvaćene i ne rade ništa.
- `input` i `keyboard` nisu podržane: skripta ne može da stane i postavi pitanje.
- Nema dodatnih paketa (toolbox-ova); imate [biblioteku analiza](topic:craftscript-library) i ugrađene funkcije.
