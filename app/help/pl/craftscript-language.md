---
title: Język CraftScript
summary: CraftScript na jednej stronie: macierze, zakresy i indeksowanie, operatory, sterowanie przebiegiem, funkcje, struktury i komórki, komentarze, echo, błędy i limit kroków oraz różnice w stosunku do MATLAB-a.
keywords: CraftScript, język, składnia, macierz, tablica, wektor, tensor, indeks, end, dwukropek, zakres, operator, element po elemencie, transpozycja, if, for, while, switch, try, catch, funkcja, funkcja anonimowa, struktura, komórka, komentarz, echo, średnik, MATLAB, Octave, port
from: d072b7d5
---

CraftScript to język macierzowy napisany tak, aby czytało się go jak MATLAB-a, dlatego większość klasycznych kodów numerycznych (na przykład 88-liniowy kod optymalizacji topologii) działa po niewielkich zmianach. Uruchamia się go w [obszarze roboczym Skrypt](topic:craftscript) oraz z wiersza poleceń.

## Wartości

| Typ | Przykład | Uwagi |
|---|---|---|
| Liczba, tablica | `a = 3`, `v = [1 2 3]`, `A = [1 2; 3 4]` | Każda liczba jest tablicą (o rozmiarze 1×1). Tablice są przechowywane kolumna po kolumnie, do 8 wymiarów |
| Logiczny | `A > 2`, `true` | Tablice prawda/fałsz; można ich używać jako indeksów |
| Tekst | `'beam'`, `"beam"` | |
| Macierz rzadka | `sparse(i, j, v, n, n)` | Dla macierzy sztywności |
| Siatka, pole, model | `hexGrid(…)`, `part()`, `load('part.stl')` | To, co rysuje `show` |
| Struktura | `s.E = 210e3` | Nazwane pola |
| Komórka | `c = {1, 'two', [3 4]}` | Lista dowolnych wartości |
| Uchwyt funkcji | `f = @(x) x.^2` | |

## Tablice i indeksowanie

- Zakresy: `1:5`, `0:0.1:1`. `linspace(a, b, n)`, `zeros(n, m)`, `ones`, `eye`, `rand`.
- Indeksowanie zaczyna się od 1: `A(2, 3)`, `v(end)`, `A(:, 1)` (cała kolumna), `A(:)` (wszystko jako jedna kolumna), `v(v > 0)` (indeksowanie logiczne).
- Przypisanie za końcem powiększa tablicę, jak w MATLAB-ie: `v(10) = 1`.

## Operatory

- `+ - * / \ ^` są operacjami macierzowymi (`A \ b` rozwiązuje układ); `.* ./ .^` działają element po elemencie. `'` transponuje.
- Porównania `== ~= < <= > >=`; logika `& | ~` (element po elemencie) oraz `&& ||` (z wcześniejszym zakończeniem).

## Sterowanie przebiegiem i funkcje

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

Funkcje umieszczaj w skrypcie za jego poleceniami albo w osobnej karcie skryptu, nazwanej tak jak funkcja:

```
function [k, m] = beam(E, I, L)
  k = 3 * E * I / L^3;
  m = 0;
end
```

Nazwa jest szukana w tej kolejności: zmienna, skrypt w tej części o tej nazwie, funkcja z biblioteki, funkcja wbudowana.

## Echo, komentarze, wyjście

- Polecenie bez `;` wypisuje swoją wartość; `;` wycisza je.
- `%` zaczyna komentarz; `%{` i `%}` w osobnych wierszach zamieniają na komentarz wiersze między nimi.
- `disp(x)`, `fprintf('%g\n', x)` i `display(x)` wypisują na konsoli.

## Błędy i ograniczenia

- Błędy opisują prostym językiem, co poszło nie tak, i podają wiersz (oraz łańcuch wywołań funkcji).
- Każde uruchomienie ma limit kroków (opcje uruchamiania w panelu); nieskończona pętla zatrzymuje się z komunikatem albo po naciśnięciu {{ui:Stop}}.
- Każda tablica może mieć do 134 milionów wartości.

## Różnice w stosunku do MATLAB-a

- Polecenia rysowania przyjmują opcje w wywołaniu: `plot(x, y, 'title', 'Error', 'xlabel', 'Step')`. `figure`, `hold`, `axis`, `title(…)` i podobne są akceptowane, ale nic nie robią.
- `input` i `keyboard` nie są obsługiwane: skrypt nie może się zatrzymać, aby zadać pytanie.
- Brak toolboxów; zamiast nich są [biblioteka analiz](topic:craftscript-library) i funkcje wbudowane.
