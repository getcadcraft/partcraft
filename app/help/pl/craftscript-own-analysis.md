---
title: Pisanie własnej analizy
summary: Budowanie analizy jako skryptów obszaru roboczego Skrypt: siatkowanie części, składanie i rozwiązywanie, pokazywanie pola i wykresu zbieżności, sprawdzanie wyniku obliczeniem ręcznym oraz zachowywanie kroków jako osobnych skryptów współdzielących zmienne.
keywords: własna analiza, analiza użytkownika, skrypt FEA, metoda elementów skończonych, składanie, sztywność, warunki brzegowe, rozwiązywanie, pcg, rzadka, pole, przetwarzanie wyników, zbieżność, weryfikacja, obliczenie ręczne, sprawdzenie, przebieg pracy
from: 0f471a8e
---

Analiza w obszarze roboczym Skrypt to kilka krótkich skryptów, które przekazują sobie zmienne. Zacznij od [funkcji z biblioteki](topic:craftscript-library), która jest bliska temu, czego potrzebujesz: zrób kopię i ją zmień; albo zbuduj analizę krok po kroku, jak poniżej.

## 1. Siatka

```
model = part();                  % część, którą modelujesz, jako model
m = tetmesh(model, 4);           % czworościany o rozmiarze około 4 mm
show(m)
```

Sprawdź siatkę w widoku, zanim przejdziesz dalej: {{key:F}} ją dopasowuje, a {{ui:oko}} w **Wyświetlane** ukrywa część.

## 2. Składanie i rozwiązywanie

Napisz pętlę po elementach w skrypcie (czyta się ją jak z podręcznika), a ciężkie części zostaw funkcjom wbudowanym: macierzom elementów, składaniu rzadkiemu z trójek oraz solverowi gradientów sprzężonych z prekondycjonerem. Funkcja z biblioteki, taka jak `static_tet` (gdy biblioteka ją już ma), jest gotowym, kompletnym przykładem do skopiowania.

## 3. Pokaż wynik

```
f = field(m, vm, 'node', 'von Mises', 'MPa');  % jedna wartość na węzeł
show(f, 'deform', u, 'scale', 100)
plot(residuals, 'title', 'Residuum solvera', 'id', 'conv')
```

- Zakres legendy można wpisać ręcznie albo przywrócić do {{ui:Auto}}.
- Kliknij siatkę, aby odczytać wartości w węźle.
- Wykres z tym samym `'id'` jest aktualizowany w miejscu, więc drukuj i rysuj wewnątrz pętli, aby obserwować zbieżność.

## 4. Sprawdź wynik

Porównaj z czymś znanym: ugięcie końca wspornika z PL³/3EI, płytę z otworem z jej współczynnikiem koncentracji naprężeń, reakcje z obciążeniami. Zapisz sprawdzenie jako osobny skrypt, aby uruchamiało się po każdej zmianie:

```
tip = max(abs(u(:)));
expected = P * L^3 / (3 * E * I);
fprintf('tip %g mm, beam theory %g mm (%.1f %%)\n', tip, expected, 100 * (tip / expected - 1))
```

## 5. Zachowaj

- Każdy krok może być osobną kartą skryptu: współdzielą zmienne, więc uruchamiaj je jeden po drugim.
- Skrypty są zapisywane w części. Zaznacz **Zapisuj zmienne razem z częścią** na karcie **Zmienne**, aby zachować także wyniki (do 32 MB).
- {{ui:Zapisz}} w grupie Skrypt pobiera skrypt, aby go udostępnić; {{ui:Otwórz}} wczytuje skrypt.
