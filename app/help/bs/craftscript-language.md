---
title: Jezik CraftScript
summary: CraftScript na jednoj stranici: matrice, opsezi i indeksiranje, operatori, kontrola toka, funkcije, strukture i ćelije, komentari, ispis, greške i budžet koraka, te po čemu se razlikuje od MATLAB-a.
keywords: CraftScript, jezik, sintaksa, matrica, niz, vektor, tenzor, indeks, end, dvotačka, opseg, operator, element po element, transpozicija, if, for, while, switch, try, catch, funkcija, anonimna funkcija, struktura, ćelija, komentar, ispis, tačka-zarez, MATLAB, Octave, prenos
from: d072b7d5
---

CraftScript je matrični jezik napisan tako da se čita kao MATLAB, pa većina klasičnih numeričkih kodova (na primjer kod za optimizaciju topologije od 88 linija) radi uz male izmjene. Pokreće se u [radnom prostoru za skripte](topic:craftscript) i iz komandne linije.

## Vrijednosti

| Tip | Primjer | Napomene |
|---|---|---|
| Broj, niz | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Svaki broj je niz (1×1). Nizovi se čuvaju kolonu po kolonu, do 8 dimenzija |
| Logička vrijednost | `A > 2`, `true` | Nizovi tačno/netačno; mogu se koristiti kao indeksi |
| Tekst | `'beam'`, `"beam"` | |
| Rijetka matrica | `sparse(i, j, v, n, n)` | Za matrice krutosti |
| Mreža, polje, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Ono što crta `show` |
| Struktura | `s.E = 210e3` | Imenovana polja |
| Ćelija | `c = {1, 'two', [3 4]}` | Lista proizvoljnih vrijednosti |
| Pokazivač na funkciju | `f = @(x) x.^2` | |

## Nizovi i indeksiranje

- Opsezi: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksiranje počinje od 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (cijela kolona), `A(:)` (sve kao jedna kolona), `v(v > 0)` (logičko indeksiranje).
- Dodjela iza kraja povećava niz, kao u MATLAB-u: `v(10) = 1`.

## Operatori

- `+ - * / \ ^` su matrične operacije (`A \ b` rješava); `.* ./ .^` rade element po element. `'` transponuje.
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

Funkcije idu u skriptu iza njenih naredbi, ili u vlastitu karticu skripte nazvanu po funkciji:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Ime se traži ovim redom: varijabla, skripta u ovom dijelu s tim imenom, funkcija iz biblioteke, ugrađena funkcija.

## Ispis, komentari, izlaz

- Naredba bez `;` ispisuje svoju vrijednost; `;` je ućutka.
- `%` započinje komentar; `%{` i `%}` u zasebnim redovima komentarišu redove između njih.
- `disp(x)`, `fprintf('%g\n', x)` i `display(x)` ispisuju u konzolu.

## Greške i ograničenja

- Greške običnim riječima kažu šta nije u redu i daju red (i lanac poziva funkcija).
- Svako pokretanje ima budžet koraka (opcije pokretanja na panelu); beskonačna petlja staje uz poruku, ili pritisni {{ui:Zaustavi}}.
- Nizovi drže do 134 miliona vrijednosti svaki.

## Nije kao MATLAB

- Naredbe za crtanje stavljaju opcije u poziv: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` i slične su prihvaćene i ne rade ništa.
- `input` i `keyboard` nisu podržani: skripta ne može stati da postavi pitanje.
- Nema toolbox-ova; [biblioteka analiza](topic:craftscript-library) i ugrađene funkcije su sve što postoji.
