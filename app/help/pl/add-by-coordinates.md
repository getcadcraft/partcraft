---
title: Dodaj geometrię szkicu, wpisując współrzędne
summary: Użyj polecenia Dodaj wg współrzędnych w panelu szkicu, aby umieszczać linie, linie osiowe, prostokąty, okręgi i punkty w dokładnych położeniach, wyłącznie z klawiatury.
keywords: współrzędne, wpisywanie, wprowadzanie z klawiatury, wprowadzanie liczb, dokładne położenie, x y, współrzędne bezwzględne, dostępność, bez myszy
from: 5e6c1656
---

Gdy znasz wartości, wpisanie ich jest szybsze niż klikanie i nadawanie wymiarów. **Dodaj wg współrzędnych** znajduje się w prawym panelu, gdy szkic jest otwarty. Pozwala też tworzyć szkic bez wskaźnika.

Współrzędne podajesz w milimetrach, w osiach samego szkicu: x w prawo, y w górę, patrząc na szkic, a punkt (0, 0) to początek układu (czerwony okrąg z krzyżykiem).

## Dodaj kształt

1. Otwórz szkic (zobacz [Narysuj pierwszy szkic](topic:sketch-basics)).
2. W prawym panelu przewiń do **Dodaj wg współrzędnych**.
3. Wybierz kształt w **Dodaj**: Linia, Linia osiowa, Prostokąt, Okrąg lub Punkt.
4. Wypełnij pola:

| Kształt | Pola |
|---|---|
| Linia | **Od x, y** i **Do x, y** |
| Linia osiowa | **Od x, y** i **Do x, y** |
| Prostokąt | **Narożnik x, y** i **Przeciwległy narożnik x, y** |
| Okrąg | **Środek x, y** i **Promień** |
| Punkt | **W x, y** |

5. Wybierz {{ui:Dodaj}} lub naciśnij {{key:Enter}} w dowolnym polu.

Kształt się pojawia, a pasek stanu podaje na przykład: „Dodano prostokąt.” Pola się opróżniają, gotowe na kolejny kształt. Każde dodanie to jeden krok cofnięcia.

Wpisz parę jako dwie liczby oddzielone przecinkiem lub spacją: `0, 0`, `25 -10` albo `12.5,40`. Liczby ujemne i ułamki są dozwolone. Promień musi być większy od zera. Jeśli wpis nie jest liczbą, pasek stanu podaje: „Wpisz współrzędne w postaci x, y i promień większy od zera.”

## Przykład: obrys płyty z dwoma otworami, wpisany z klawiatury

1. Otwórz szkic na płaszczyźnie **Front**.
2. **Dodaj**: Prostokąt. **Narożnik x, y**: `-50, -30`. **Przeciwległy narożnik x, y**: `50, 30`. {{key:Enter}}.
3. **Dodaj**: Okrąg. **Środek x, y**: `-30, 0`. **Promień**: `5`. {{key:Enter}}.
4. **Środek x, y**: `30, 0`. **Promień**: `5`. {{key:Enter}}.
5. Wybierz {{ui:Wyjdź ze szkicu}}, a następnie {{ui:Wyciągnij}}: płyta 100 × 60 z dwoma otworami 10 mm.

## Wpisana geometria jest umieszczona, nie związana

Wpisane współrzędne umieszczają geometrię we właściwym miejscu, ale **nie są relacjami**. Kształty pozostają niebieskie (nie w pełni zdefiniowane) i mogą się przesunąć, jeśli je przeciągniesz albo zmienisz inny wymiar:

- prostokąt wpisany ma własne narożniki i relacje poziome oraz pionowe, jak narysowany, ale nic nie wiąże go z początkiem układu;
- linia wpisana nie ma relacji poziomej ani pionowej, nawet jeśli wpisano linię poziomą;
- środek wpisanego okręgu jest swobodny.

Aby szkic był w pełni zdefiniowany, dodaj później wymiary i relacje (zobacz [W pełni zdefiniuj szkic](topic:relations-dimensions)). Na przykład zaznacz narożnik prostokąta i początek układu, a następnie wybierz {{ui:• Zgodność}}, albo nadaj wymiary od początku układu do środków okręgów.

:::note
Bez wskaźnika można zajść tak daleko: przejdź do wiersza płaszczyzny w historii klawiszem {{key:Tab}} i strzałkami, naciśnij {{key:Enter}}, aby ją zaznaczyć, naciśnij {{key:S}}, aby szkicować, dodawaj tu kształty i dojdź do **Edytuj** obok każdego wymiaru oraz do {{ui:Wyjdź ze szkicu}} klawiszem {{key:Tab}}. Zaznaczanie geometrii, a więc dodawanie relacji lub nowych wymiarów, nadal wymaga kliknięcia lub dotknięcia w tej wersji.
:::

## Ograniczenia

- Łuków nie można jeszcze wpisywać. Narysuj je narzędziem Łuk albo wpisz okrąg i użyj relacji.
- W tym polu nie ma współrzędnych względnych (od ostatniego punktu) ani biegunowych (długość i kąt).
- Wpisana geometria nie przyciąga się do istniejących punktów. Wpisz te same współrzędne co istniejący punkt, a następnie dodaj między nimi relację {{ui:• Zgodność}}, jeśli mają pozostać połączone.
