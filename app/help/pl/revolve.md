---
title: Obrót części toczonej
summary: Naszkicuj połowę profilu obok linii osiowej, obróć go w część okrągłą, wybierz oś i kąt, a do rowków użyj obrotowego wycięcia.
keywords: obrót, obrotowy wypust, obrotowe wycięcie, część toczona, tokarka, wał, oś, linia osiowa, rowek, kąt, obrót wycięcia
from: 593b6929
---

{{ui:Obróć}} obraca profil wokół osi, jak część zrobioną na tokarce: wały, koła pasowe, kołnierze, gałki. {{ui:Obrotowe wycięcie}} (w menu {{ui:Więcej}} grupy Elementy) obraca profil, aby usunąć materiał, np. na rowki i wgłębienia.

## Obróć wałek schodkowy

1. Naszkicuj na **płaszczyźnie Front**.
2. Naciśnij {{key:N}} dla {{ui:Linia osiowa}}. Zacznij w początku układu i kliknij punkt prosto w prawo, np. 100 mm dalej. To jest oś. Jest przerywana: geometria pomocnicza nie jest częścią profilu.
3. Naciśnij {{key:L}} dla Linia. Narysuj **połowę** profilu nad linią osiową jako jedną zamkniętą pętlę: zacznij na linii osiowej, idź w górę, przesuń się w bok i wróć w dół do linii osiowej, a potem wzdłuż niej do początku. Końce muszą się spotkać: pętla musi być zamknięta.
4. Zwymiaruj promienie (wysokości nad linią osiową) i długości. Wysokość 10 nad linią osiową daje średnicę 20.
5. Wybierz {{ui:Wyjdź}}.
6. Wybierz {{ui:Obróć}}. Pojawia się wałek, pełny obrót.

Profil musi pozostać po jednej stronie osi. Jeśli przecina: „Profil przecina oś. Trzymaj go po jednej stronie linii osiowej.” Krawędź profilu może leżeć na osi.

## Ustawienia

| Ustawienie | Co robi | Domyślnie |
|---|---|---|
| **Operacja** | Wypust (dodaj materiał), Wycięcie (usuń materiał), Część wspólna (zachowaj nakładanie) albo Nowa bryła | Wypust dla {{ui:Obróć}}, Wycięcie dla {{ui:Więcej}} › {{ui:Obrotowe wycięcie}} |
| **Kąt (°)** | Jak daleko obracać, od wartości tuż powyżej 0 do 360 | 360 |
| **Oś** | Pierwsza linia osiowa albo dowolna linia lub linia osiowa w szkicu, wymieniona jako „Linia osiowa 1 (l1)” albo „Linia 3 (l3)” | Pierwsza linia osiowa |

Częściowy kąt tworzy klin, obracany od płaszczyzny szkicu w jednym kierunku.

Jeśli szkic nie ma linii osiowej, a **Oś** zostaje na Pierwsza linia osiowa: „Narysuj w szkicu linię osiową (linię pomocniczą), wokół której można obrócić.” Możesz też wskazać jako oś pełną linię profilu.

## Wytnij rowek

1. Gdy wałek jest zbudowany, otwórz nowy szkic na **płaszczyźnie Front** (ta sama płaszczyzna co szkic wałka).
2. Narysuj linię osiową wzdłuż tej samej osi: zacznij ją w początku układu i trzymaj poziomo, aby dostała H, albo wpisz ją za pomocą **Dodaj według współrzędnych** (np. od `0, 0` do `100, 0`). Nowy szkic nie przyciąga się do linii innego szkicu.
3. Narysuj mały zamknięty prostokąt, który nachodzi na krawędź wałka tam, gdzie ma być rowek.
4. Wybierz {{ui:Wyjdź}}, potem {{ui:Więcej}} › {{ui:Obrotowe wycięcie}}.

## Obrócone powierzchnie w złożeniach

Obrót ma oś, z której mogą korzystać inne elementy i złożenia:

- {{ui:Wzór kołowy}} domyślnie używa osi ostatniego obrotu (zob. [Wzory i lustra elementów](topic:patterns-mirror));
- w złożeniu połączenie między powierzchniami wykonanymi obrotami zaczyna się jako połączenie obrotowe, a **Wyśrodkuj na** oferuje „Oś Revolve1” (zob. [Budowa złożenia](topic:build-assembly)).

## Prawdziwe krzywe i fasety

PartCraft buduje obrót jądrem siatkowym (pasek stanu pokazuje „Jądro siatkowe”): kształty okrągłe to płaskie fasety, domyślnie 64 na obrót, a objętości są trochę mniejsze niż prawdziwa wartość (około 0,16 % przy 64). Widok, eksporty STL, 3MF i STEP składają się z tych faset: ustaw **Krzywe** (kliknij puste miejsce, potem prawy panel) na Dokładne (128) albo Bardzo dokładne (256), aby były gładsze. Prawdziwe walce, stożki i torusy wymagają dokładnego jądra: jeszcze nie zbudowano ich w tej wersji. Zob. [Jądro siatkowe](topic:solid-kernels).
