---
title: Zmień część przez jej historię
summary: Edytuj elementy i szkice po fakcie, wyłączaj, cofaj do punktu, wstawiaj elementy wcześniej, zmieniaj ich kolejność, nazwy i usuwaj oraz cofaj każdą z tych zmian.
keywords: historia, drzewo elementów, drzewo projektu, edycja elementu, edycja szkicu, wyłącz, przywróć, cofnięcie do punktu, cofnij do, przywróć dalej, zmiana kolejności, przenieś element, usuń, zmień nazwę, cofnij, ponów, przebuduj, regeneruj, rodzic, dziecko, duża część, wiele elementów, wolna przebudowa, 750 elementów
from: 6f75aef4
---

Część PartCraft to jej historia: lista płaszczyzn, szkiców i elementów po lewej stronie. PartCraft przebudowuje bryłę od góry tej listy za każdym razem, gdy coś się zmieni. Zmiana liczby na początku listy zmienia wszystko, co na niej oparto.

## Edycja elementu

1. Kliknij element w historii (lub szkic wcięty pod nim).
2. Zmień jego ustawienia w prawym panelu. Każda zmiana przebudowuje część od razu.

Nie ma przycisków OK ani Anuluj: każda zmiana jest zastosowana. Jeśli ci się nie podoba, naciśnij {{key:Mod+Z}}.

## Zmiana krawędzi lub ścian używanych przez zaokrąglenie, fazkę lub powłokę

Kliknij dwukrotnie element w historii albo zaznacz go i wybierz {{ui:Wskaż krawędzie}} (lub {{ui:Wskaż ściany}}). Kliknij krawędzie lub ściany, aby je dodać lub usunąć z wyboru, a potem wybierz {{ui:Gotowe}} lub naciśnij {{key:Esc}}. Zobacz [Zaokrąglenie, fazka i wydrążenie](topic:fillet-chamfer-shell).

## Edycja szkicu

1. Kliknij dwukrotnie szkic w historii albo zaznacz go i wybierz {{ui:Edytuj szkic}} w prawym panelu (lub {{ui:Szkic}} na pasku narzędzi).
2. Część wraca do stanu z chwili utworzenia szkicu: elementy powstałe później są podczas edycji ukryte.
3. Zmień geometrię, relacje lub wymiary.
4. Zamknij szkic. Cała część przebuduje się ze zmianą.

Aby zmienić tylko rozmiar, nie musisz otwierać szkicu. Zaznacz element lub szkic i zmień liczbę pod **Wymiary szkicu** (lub **Wymiary sterujące**) w prawym panelu. Zobacz [Zmiana wymiarów bez otwierania szkicu](topic:change-sizes).

## Gdy element się nie powiedzie

Jeśli zmiana uniemożliwia wykonanie elementu, PartCraft buduje wszystko inne i oznacza problem:

- element pokazuje **⚠ błąd** w historii, a jego komunikat jest na górze prawego panelu (najedź na wiersz, aby też go odczytać);
- elementy, które go potrzebują, pokazują **⚠ nie zbudowano** z komunikatem „Wymaga Extrude2, która zgłasza błąd.”;
- znacznik w pasku stanu pokazuje „1 element z błędem”.

Usuń przyczynę (lub cofnij zmianę), a część znów się zbuduje. Typowe komunikaty i sposoby ich rozwiązania są opisane w [Rozwiązywanie problemów](topic:troubleshooting).

## Wyłączanie elementu

Wyłączenie przełącza element bez jego usuwania: przydatne, aby sprawdzić część bez otworu lub wzoru.

1. Zaznacz element.
2. Wybierz {{ui:Wyłącz}}. Jego wiersz pokazuje **wył.**. Elementy, które go potrzebują, również nie są budowane.
3. Wybierz {{ui:Przywróć}}, aby go znów włączyć.

## Cofnięcie do punktu

Cofnięcie do punktu buduje część tylko do wybranego miejsca, dzięki czemu widzisz ją w dawnym stanie albo dodajesz element wcześniej w historii.

1. Zaznacz element i wybierz {{ui:Cofnij do tego miejsca}}. Ten element i wszystkie poniżej są wyszarzone i nie są budowane. Wiersz **Pasek cofnięcia · przywróć** oznacza to miejsce.
2. Każdy element, który teraz dodasz, trafi **na pasek**, przed wyszarzone elementy.
3. Kliknij **Pasek cofnięcia · przywróć**, aby znów zbudować wszystko.

Położenie cofnięcia jest zapisane w pliku.

## Zmiana kolejności elementów

1. Zaznacz element.
2. Wybierz {{ui:Przesuń w górę}} lub {{ui:Przesuń w dół}} albo, gdy jest aktywny wiersz w historii, naciśnij {{key:Alt+Up}} lub {{key:Alt+Down}}.

Element nigdy nie przesunie się powyżej tego, czego używa. Przycisk jest wyszarzony, a najechanie na niego (lub próba klawisza) podaje powód, na przykład „Extrude2 używa Sketch2, więc Sketch2 musi być pierwszy.”

Element używa: swojego szkicu; ściany, na której leży jego szkic; elementów, które wzór lub lustro kopiuje; linii szkicu lub obrotu użytej jako kierunek lub oś.

## Usuwanie elementu

1. Zaznacz element i wybierz {{ui:Usuń}} w prawym panelu lub na pasku narzędzi albo naciśnij {{key:Delete}}.
2. Jeśli inne elementy z niego korzystają, PartCraft pyta: „Extrude3, Hole1 używają Extrude1 i również zostaną usunięte.” Wybierz {{ui:Usuń wszystko}} lub {{ui:Anuluj}}.

Usunięcie elementu nie usuwa jego szkicu: szkic pojawia się w widoku jako nieużywany, gotowy do kolejnego elementu. Usuń szkic osobno, jeśli go nie potrzebujesz.

## Zmiana nazwy

Zaznacz element i wpisz nową **Nazwę** na dole prawego panelu (do 60 znaków). Nazwa całej części jest w prawym panelu, gdy nic nie jest zaznaczone.

## Części z setkami elementów

Część z setkami elementów jest testowana na 750. PartCraft zachowuje bryłę, jaką miała w połowie historii, więc zmiana późno w historii przebudowuje tylko elementy po niej; zmiana blisko góry przebudowuje wszystko, co na niej oparto, i trwa to najdłużej. Cofnij i ponów przebudowują tylko od miejsca, w którym stany się różnią. Aby pracować szybciej przy dużej części, cofnij ją do miejsca, w którym pracujesz (patrz Cofnięcie do punktu wyżej), albo wyłącz to, czego teraz nie potrzebujesz. Kilka wycięć i wypustów, które się nie stykają, jest stosowanych razem, więc część złożona z wielu osobnych otworów i wypustów buduje się szybciej, niż wskazuje liczba elementów.

Duża część przebudowuje się w tle: wskaźnik na dole pokazuje **Przebudowywanie…** i to, jak daleko doszło, a widok, panele i menu nadal działają. Na ekranie widać ostatnio zbudowaną wersję, aż nowa będzie gotowa. Jeśli zmienisz coś ponownie w trakcie przebudowy, PartCraft zbuduje najnowszą wersję i porzuci tę w toku. Mała część przebudowuje się od razu.

## Cofnij i ponów

- {{key:Mod+Z}} lub {{ui:Cofnij}} cofa ostatnią zmianę: element, ustawienie, edycję szkicu, przeciągnięcie. Pasek stanu mówi, co to było, na przykład „Cofnięto zmianę wymiaru.”
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}} lub {{ui:Ponów}} ponawia ją.
- PartCraft zachowuje ostatnie 200 kroków (część tak duża, że 200 kopii zajęłoby dużo pamięci, zachowuje mniej, ale nigdy mniej niż 20 najnowszych). Zmiany na arkuszu rysunku (przekrój, przesunięty symbol GD&T) są na tej samej liście. Otwarcie pliku lub utworzenie nowej części czyści listę.

:::mac
Na Macu użyj ⇧⌘Z, aby ponowić. W Safari ⌘Y może otworzyć historię przeglądarki.
:::
