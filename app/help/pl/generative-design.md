---
title: Tworzenie kształtu z obciążeń (Generatywny)
summary: Wybierz ściany utrzymywane i obciążone, obszary do zachowania i do utrzymania pustymi, docelowe objętości i materiały, potem generuj wyniki: najsztywniejsze kształty dla każdej objętości, sprawdzone ponownie jako bryły, porównane w tabeli i pobrane jako STL, STEP albo nowa część.
keywords: projektowanie generatywne, optymalizacja topologii, SIMP, lekka konstrukcja, kratownica, organiczny kształt, wyniki, porównaj, masa, udział objętości, zachowaj, zachowaj bryłę, przeszkoda, strefa wykluczenia, przestrzeń projektowa, minimalny wymiar elementu, STL, druk 3D
from: 5b91fa8e
---

Obszar roboczy **Generatywny** usuwa materiał, którego nie potrzebują obciążenia. Mówisz, gdzie część jest utrzymywana i obciążona, co musi zostać, a co musi pozostać puste; PartCraft znajduje najsztywniejszy kształt dla każdej docelowej objętości (**optymalizacja topologii**), sprawdza każdy ponownie jako bryłę z prawdziwym materiałem i pokazuje wyniki obok siebie. Działa na nazwanych ścianach, które jądro siatki nadaje części (patrz [Jądro siatki](topic:solid-kernels)).

Wybierz **Generatywny** w polu **Obszar roboczy**. Część nie jest zmieniana; badanie zapisuje się wewnątrz pliku części.

## Ustaw badanie

1. Naciśnij **Nowe badanie** w prawym panelu.
2. **Przestrzeń**: *Część jaka jest* usuwa materiał z części; *Pudełko wokół części* wyrasta kształt wewnątrz pudełka większego od części o **Margines pudełka**.
3. **Rozmiar elementu**: zostaw pusty dla automatycznego rozmiaru (około 8000 sześcianów) albo wpisz własny. Drobniejsze rozmiary dają drobniejsze kształty i trwają dłużej.
4. **Minimalny element**: elementy cieńsze niż około dwukrotność tej wartości nie powstają. Puste oznacza półtora sześcianu.
5. Zaznacz od jednej do sześciu **Docelowych objętości** (udział przestrzeni projektowej, który kształt może wypełnić) i od jednego do czterech **Materiałów**. Każda objętość generowana jest raz; każdy materiał sprawdzany jest na tym kształcie (najsztywniejszy kształt nie zależy od materiału, ale jego masa, naprężenie i współczynnik bezpieczeństwa tak).

## Cele

- {{ui:Fixed}}: kliknij ściany, które są utrzymywane. **Ściana bez tarcia** z listy **Dodaj** w panelu utrzymuje ścianę tylko wzdłuż niej samej (użyj jej dla płaszczyzn symetrii).
- {{ui:Force}}: kliknij obciążone ściany, potem wpisz całkowitą siłę i wybierz jej kierunek w panelu. **Ciśnienie** znajduje się na liście **Dodaj**.
- {{ui:Preserve}}: kliknij ściany, których otoczenie musi pozostać litą bryłą, i ustaw, jak głęboko (**Zachowaj bryłę w zasięgu**), na przykład wokół otworów na śruby. Ściany, które utrzymujesz albo obciążasz, są zawsze zachowane.
- {{ui:Obstacle}}: kliknij ściany, których otoczenie musi pozostać puste, i ustaw, jak daleko (**Zachowaj pustkę w zasięgu**), na przykład miejsce na wał albo narzędzie.

Naciśnij **Gotowe wskazywanie** albo {{key:Esc}} po kliknięciu ścian. Zielone i czerwone zabarwienia pokazują obszary.

## Generuj i porównuj

Naciśnij {{ui:Generate}}. Panel pokazuje postęp i pozostały czas; **Stop** anuluje. Każdy wynik pojawia się w tabeli **Wyniki**: docelowa objętość, materiał, **masa**, **największe naprężenie**, **największe przemieszczenie** i **współczynnik bezpieczeństwa** (granica plastyczności ÷ naprężenie), wszystkie z ponownego obliczenia gotowego kształtu jako bryły z sześcianów o prawdziwym materiale.

Wybierz wynik, by zobaczyć go w widoku (część jest ukryta; zaznacz **Pokaż część przez niego**, by widzieć oba). Pod tabelą: ile iteracji zajęło i czy się ustabilizowało, sztywność jako bryły względem własnej wartości optymalizatora oraz jego powierzchnia.

## Użyj wyniku

- **STL**: zamknięta siatka trójkątów, gotowa do druku 3D.
- **STEP (poligonalny)**: ta sama powierzchnia jako bryła STEP z płaskich ścian.
- **Nowy plik części**: część PartCraft, której jednym elementem jest wynik jako zaimportowana bryła. Otwórz ją, by szkicować na niej, wycinać otwory albo sprawdzić w Symulacji. Jest poligonalna (tysiące płaskich ścian), a nie edytowalnym kształtem.
- **Dodaj do tej części** łączy wynik z częścią; jest włączone tylko dla przestrzeni projektowej będącej pudełkiem (przy samej części jako przestrzeni wynik leży wewnątrz części).

**Nowy plik części** i **Dodaj do tej części** nie są jeszcze zbudowane w tej wersji: wynik staje się zaimportowaną bryłą, co wymaga dokładnego jądra. Pobieranie STL i STEP (poligonalnego) działa.

## Na ile można mu ufać

- Optymalizuje **sztywność** dla danej objętości. Nie ma jeszcze ograniczeń naprężeń ani reguł produkcyjnych (wysięgów, kierunków frezowania, minimalnych rozmiarów otworów): sprawdź wybrany wynik w [Symulacji](topic:simulation) i popraw.
- Cienkie elementy o szerokości jednego lub dwóch sześcianów to przybliżenia: dla smukłych części użyj mniejszego rozmiaru elementu.
- Metoda to SIMP z filtrem gęstości, projekcją progową i aktualizacjami kryterium optymalności; podane naprężenie i ugięcie dotyczą wyniku jako sześcianów, co jest rzetelne, ale przybliżone na ostrych narożnikach.

## Powiązane

- [Sprawdź naprężenie i ugięcie (Symulacja)](topic:simulation)
- [Eksport do druku, STEP i DXF](topic:export-files)
- [Czego jeszcze nie zbudowano](topic:not-built-yet)
