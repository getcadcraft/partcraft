---
title: Otwórz STL, OBJ lub 3MF jako bryłę
summary: Zamień siatkę ze skanera, serwisu do druku 3D lub innego programu w bryłę, którą możesz przeciąć, dodać do niej i szkicować na niej; co PartCraft naprawia po drodze i czego nie potrafi.
keywords: stl, obj, 3mf, siatka, siatka na bryłę, konwersja siatki, skan, szczelna, naprawa, dziury, szczeliny, jednostki, oś w górę, zaimportowana bryła, płaskie ściany
from: 7b948471
---

PartCraft otwiera siatki STL, OBJ i 3MF jako **bryły**. Bryła działa jak każda inna: można ją przeciąć, dodać do niej, nawiercić, rozłożyć we wzór, użyć jej w złożeniu lub do obróbki i szkicować na jej płaskich ścianach. Nie ma własnej historii: siatka to tylko trójkąty, więc jej wymiarów nie da się zmienić, można tylko do niej dodawać lub z niej ciąć.

## Otwórz siatkę

1. Wybierz {{ui:Otwórz}} albo naciśnij {{key:Mod+O}} i wskaż plik `.stl`, `.obj` lub `.3mf`. Albo upuść go na widok 3D.
2. PartCraft czyta plik, naprawia to, co może bezpiecznie naprawić, i pokazuje, co znalazł: ile trójkątów i punktów, każdą naprawę oraz czy siatka teraz się **zamyka**.
3. Sprawdź **Jednostki w pliku** i **Góra w pliku**. STL i OBJ nie podają swoich jednostek, więc zgadywane są milimetry; plik 3MF podaje własne. Wiersz **Rozmiar z tym wyborem** pokazuje rozmiar bryły przy twoim wyborze, więc część, która wchodzi 25,4 razy za mała, łatwo zauważyć (była w calach).
4. Jeśli część na ekranie jest pusta, wybierz {{ui:Otwórz jako bryłę}}. Jeśli ma już elementy, wybierz **Użyj jej do** (dodaj do części, wytnij z niej albo zachowaj tylko część wspólną), a potem {{ui:Dodaj do tej części}}, albo {{ui:Nowa część}}, aby zacząć od nowa od siatki.

W historii pojawia się element **Imported1**. Pasek stanu mówi na przykład: „bracket.stl jest bryłą: 15200.512 mm³, 14 płaskich ścian do szkicowania.”

## Co naprawia PartCraft

| Naprawa | Co to znaczy |
|---|---|
| Podwójne narożniki połączone | STL powtarza każdy narożnik dla każdego ze swoich trójkątów; są łączone w jeden punkt |
| Usunięte trójkąty bez pola | Odpryski, których narożniki leżą na jednej linii |
| Usunięte podwójne trójkąty | Trójkąt zapisany dwa razy zostaje zachowany raz; dwa skierowane w przeciwne strony (wewnętrzna ściana) są usuwane oba |
| Zamknięte małe szczeliny | Krawędzie, które prawie się stykają (w granicach tysięcznej rozmiaru części), są łączone |
| Wypełnione dziury | Otwór, którego obwód leży płasko, jest wypełniany bez względu na rozmiar; wypaczony tylko wtedy, gdy jest mały |
| Trójkąty obrócone na zewnątrz | Trójkąty skierowane w złą stronę są obracane, aby zgadzały się z sąsiadami, a cała powierzchnia jest skierowana na zewnątrz |

## Gdy siatka się nie zamyka

Bryła wymaga powierzchni bez otworów. Gdy PartCraft nie może jej zamknąć, okno dialogowe mówi, ile otworów i otwartych krawędzi zostało, i nie ma bryły do dodania. Zamknij otwory w programie, który wykonał siatkę, albo wyeksportuj ją ponownie jako zamkniętą (szczelną) siatkę i otwórz ponownie.

PartCraft zostawia otwór w spokoju, gdy wypełnienie mogłoby zgadnąć źle: dużą wypaczoną dziurę albo dwa otwory w tej samej płaszczyźnie (brakującą ścianę w kształcie pierścienia, gdzie wypełnienie każdego obwodu zakryłoby dziurę w środku). Krawędź wspólna dla więcej niż dwóch trójkątów także jest zgłaszana: taka powierzchnia nie ma jednego jasnego wnętrza.

## Szkicuj na płaskich ścianach

Płaskie obszary złożone z wielu trójkątów są scalane w jedną **płaską ścianę** każdy, więc można na nich szkicować: kliknij ścianę i wybierz {{ui:Szkic na tej ścianie}}. Ściana, która później zostanie przycięta lub do której coś dodano, pozostaje ścianą. Okrągłe obszary (otwór, zaokrąglenie) pozostają trójkątami: nie są ścianami, które można wybrać, a widok rysuje ich kontur na podstawie kąta między trójkątami.

## Zmień później

Wybierz **Imported1**, aby zobaczyć plik, z którego pochodzi, ile ma trójkątów i co zostało naprawione. **Jednostki w pliku**, **Góra w pliku** i **Użyj jej do** można tam zmienić; każda zmiana to jeden krok cofnięcia.

## Gdzie jest przechowywana

Naprawiona siatka jest zapisana **wewnątrz** pliku `.partcraft.json`, więc nie potrzebujesz już pliku siatki. Plik części z bryłą siatki ma wersję 5: starszy PartCraft odrzuca go po wersji. Siatka z 200 000 trójkątów dodaje około 1,2 MB.

## Ograniczenia

- Najwyżej 3 miliony trójkątów i 200 MB w jednym pliku.
- Bryła z siatki jest budowana przez jądro siatki. Z włączonym dokładnym jądrem (tylko dla deweloperów) jest to zgłaszane i bryła nie jest budowana.
- Materiały OBJ, współrzędne tekstur i swobodne krzywe są pomijane; kolory, materiały i obiekty podporowe 3MF są pomijane (okno dialogowe mówi, ile obiektów pominięto).
- Bryła jest tak dokładna jak siatka: gruba siatka STL daje grube okrągłe ściany. Otwory, które w niej nawiercisz, są tak okrągłe jak twoje własne elementy.
