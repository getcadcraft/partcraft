---
title: Jezik CraftScript
summary: CraftScript na jednoj stranici: matrice, rasponi i indeksiranje, operatori, tijek upravljanja, funkcije, Struct i Cell, komentari, ispis, pogreške i proračunski broj koraka te razlika u odnosu na MATLAB.
keywords: CraftScript, jezik, sintaksa, matrica, niz, vektor, tenzor, indeks, end, dvotočka, raspon, operator, po elementima, transponiranje, if, for, while, switch, try, catch, funkcija, anonimna funkcija, struct, cell, komentar, ispis, točka-zarez, MATLAB, Octave, prijenosivost
from: d072b7d5
---

CraftScript je matrični jezik napisan tako da se čita kao MATLAB, pa većina klasičnih numeričkih kodova (primjerice kod za optimizaciju topologije od 88 redaka) radi uz male izmjene. Pokreće se u [radnom prostoru Skripta](topic:craftscript) i iz naredbenog retka.

## Vrijednosti

| Vrsta | Primjer | Napomene |
|---|---|---|
| Broj, niz | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Svaki broj je niz (1×1). Nizovi se pohranjuju stupac po stupac, do 8 dimenzija |
| Logička | `A > 2`, `true` | Nizovi true/false; upotrebljivi kao indeksi |
| Tekst | `'beam'`, `"beam"` | |
| Rijetka matrica | `sparse(i, j, v, n, n)` | Za matrice krutosti |
| Mreža, polje, model | `hexGrid(…)`, `part()`, `load('part.stl')` | Što `show` crta |
| Struct | `s.E = 210e3` | Imenovana polja |
| Cell | `c = {1, 'two', [3 4]}` | Popis proizvoljnih vrijednosti |
| Rukovatelj funkcijom | `f = @(x) x.^2` | |

## Nizovi i indeksiranje

- Rasponi: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksiranje počinje od 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (cijeli stupac), `A(:)` (sve kao jedan stupac), `v(v > 0)` (logičko indeksiranje).
- Dodjela iza kraja povećava niz, kao u MATLAB-u: `v(10) = 1`.

## Operatori

- `+ - * / \ ^` su matrične operacije (`A \ b` rješava); `.* ./ .^` rade element po element. `'` transponira.
- Usporedbe `== ~= < <= > >=`; logika `& | ~` (element po element) i `&& ||` (kratki spoj).

## Tijek upravljanja i funkcije

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

Funkcije idu u skriptu nakon njezinih naredbi ili u vlastitu karticu skripte nazvanu prema funkciji:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Ime se traži ovim redoslijedom: varijabla, skripta u ovom dijelu s tim imenom, funkcija biblioteke, ugrađena funkcija.

## Ispis, komentari, izlaz

- Naredba bez `;` ispisuje svoju vrijednost; `;` je tiha.
- `%` započinje komentar; `%{` i `%}` u zasebnim retcima stavljaju retke između njih u komentar.
- `disp(x)`, `fprintf('%g\n', x)` i `display(x)` ispisuju na konzolu.

## Pogreške i ograničenja

- Pogreške jednostavnim riječima kažu što nije u redu i navode redak (i lanac poziva funkcija).
- Svako izvođenje ima proračunski broj koraka (opcije pokretanja na panelu); beskonačna petlja zaustavlja se uz poruku ili pritisnite {{ui:Zaustavi}}.
- Nizovi drže do 134 milijuna vrijednosti svaki.

## Drukčije nego u MATLAB-u

- Naredbe za crtanje stavljaju svoje opcije u poziv: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` i slične su prihvaćene i ne rade ništa.
- `input` i `keyboard` nisu podržane: skripta ne može stati i postaviti pitanje.
- Nema alata (toolbox); [biblioteka analiza](topic:craftscript-library) i ugrađene funkcije su sve što postoji.
