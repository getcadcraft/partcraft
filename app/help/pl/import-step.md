---
title: Otwieranie pliku STEP i dalsza praca na nim
summary: Wczytaj model STEP dostawcy lub innego programu CAD do PartCraft jako bryłę, jako nową część albo dodaj go do bieżącej; ustaw, która strona jest u góry, i dodawaj do niego szkice oraz elementy.
keywords: step, stp, import, otwórz step, ap203, ap214, ap242, model dostawcy, bryła bez historii, zaimportowana bryła, oś w górę, trójkąty, fasetowany, złożenie step
from: ca0eca5f
---

PartCraft otwiera pliki STEP (`.step` lub `.stp`, AP203, AP214 i AP242) jako **bryły**, na których możesz szkicować, wycinać, wiercić i łączyć je z własnymi elementami. Bryła nie ma własnej historii: nie można zmienić wymiarów, z jakimi powstała, można tylko do niej dodawać albo z niej wycinać.

Ta wersja buduje każdą część jądrem siatkowym (mesh), więc plik STEP jest **odczytywany jako trójkąty**: płaskie ściany pozostają płaskie, a zakrzywione (walce, stożki, kule, torusy, powierzchnie B-spline) stają się wieloma małymi płaskimi. Objętość różni się od dokładnej o ułamek procenta. Zachowanie zakrzywionych ścian dokładnie wymaga dokładnego jądra, którego nie ma w tej wersji.

## Otwieranie pliku STEP

1. Wybierz {{ui:Otwórz}} lub naciśnij {{key:Mod+O}} i wskaż plik `.step` lub `.stp`. Możesz też upuścić go na widok 3D.
2. PartCraft odczytuje plik i pokazuje, co znalazł, na przykład: „Plik AP214: 1 bryła, 10 ścian, odczytany jako trójkąty.” Poniżej są liczba trójkątów, wszystko, co trzeba było pominąć lub połączyć, oraz to, czy wynik się domyka.
3. Sprawdź **Góra w pliku**. Plik STEP podaje własną jednostkę (milimetry, cale, metry…); PartCraft przelicza ją na milimetry, więc **Jednostki w pliku** pokazuje Milimetry, „plik tak mówi”. **Rozmiar tutaj** pokazuje, jak duża będzie.
4. Wybierz {{ui:Otwórz jako bryłę}} dla pustej części albo {{ui:Dodaj do tej części}} / {{ui:Nowa część}}, gdy część ma już elementy. Dodawanie pyta, co zrobić z **Użyj do**: dodać, wyciąć albo zachować tylko część wspólną.

Element **Imported1** pojawia się w historii, a pasek stanu pokazuje na przykład: „plate.step to bryła: 57995.937 mm³, 6 płaskich ścian do szkicowania.”

## Złożenie STEP

Złożenie wczytuje się jako **jedną bryłę** z każdą częścią tam, gdzie umieścił ją plik („3 części umieszczone w pliku wchodzą tam, gdzie stoją”). Część użyta dwukrotnie wchodzi dwukrotnie. Nazwy części i drzewo złożenia nie są zachowywane.

## Ustaw, która strona jest u góry

Większość programów CAD używa osi Z w górę; PartCraft używa osi Y w górę. Domyślnie PartCraft obraca plik tak, aby jego oś Z wskazywała tu górę. Jeśli część przychodzi leżąca na boku, zaznacz **Imported1** i ustaw **Góra w pliku** na **Y w górę**. **Jednostki w pliku** i **Użyj do** także można tam zmienić; każda zmiana to jeden krok cofania.

## Dalsza praca

- Kliknij płaską ścianę bryły i wybierz {{ui:Szkic na tej ścianie}}. Płaskie ściany modelu STEP zachowują swoje miejsce, gdy bryła jest przebudowywana.
- Dodawaj wycięcia, otwory, wypukłości, wzory i lustra tak jak w każdej części.
- Sprawdź jej rozmiar w polu **Część**: objętość, pole powierzchni, rozmiar.

Zaokrąglenia, fazki i powłoki wymagają dokładnego jądra, tak jak każda część w tej wersji ([Jądro siatki (mesh)](topic:solid-kernels)).

## Gdzie jest przechowywany

Trójkąty są przechowywane **wewnątrz** pliku `.partcraft.json`, więc plik części jest samodzielny: nie potrzebujesz już pliku STEP.

## Komunikaty

| Komunikat | Co oznacza |
|---|---|
| „part.stp” nie jest plikiem STEP (nie zaczyna się od ISO-10303-21). | Plik nie jest zwykłym tekstem STEP. Poproś nadawcę o plik STEP AP203, AP214 lub AP242 |
| „Nie udało się odczytać pliku STEP: jego sekcja danych jest brakująca lub uszkodzona.” | Plik jest ucięty lub uszkodzony. Skopiuj go ponownie |
| „Plik STEP nie zawiera bryły ani powierzchni: nie ma czego wczytać.” | Plik zawiera tylko rysunki, punkty lub dane. Poproś o bryłę |
| „Ten plik STEP jest za duży (ponad 60 MB), aby go tutaj wczytać.” oraz pozostałe limity odczytu (wpisy, ściany, trójkąty) | Uprość model u źródła albo wysyłaj części pojedynczo |
| „… uszkodzone wiersze w pliku zostały pominięte.” | Niektórych wierszy nie udało się odczytać; reszta została wczytana. Sprawdź bryłę |
| „… ścian nie udało się zamienić na trójkąty i zostały pominięte.” | Te ściany zostawiają dziury, które PartCraft próbuje wypełnić; jeśli bryła się nie domyka, nie zostaje dodana |
| „… ścian rodzaju, którego nie odczytano (…), zostało pominiętych.” | Rzadki typ powierzchni. Poproś o model z powierzchniami zwykłymi lub B-spline |
| „Nie domyka się …” | Ściany nie tworzą zamkniętej bryły (model powierzchniowy albo pominięte ściany). PartCraft pokazuje otwory i niczego nie dodaje |

## Ograniczenia

- Zakrzywione ściany są rysowane i mierzone jako płaskie fasety, jak w każdej części zbudowanej w tej wersji. PartCraft zachowuje z bryłą własne płaskie ściany pliku, walce, stożki, kule i torusy, więc {{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} zapisuje je z powrotem jako prawdziwe powierzchnie, otwory jako otwory, razem z dodanymi elementami. Ściany podane w pliku jako splajny, przeciągnięcia lub powierzchnie obrotowe pozostają fasetami w eksporcie. Część zapisana przed 0.9.1 nie ma zachowanych powierzchni: otwórz ponownie plik STEP, aby je uzyskać.
- {{ui:Eksport}} › {{ui:DXF szkicu albo płaskiej ściany}} z wybraną płaską ścianą zapisuje okrągły otwór z pliku jako prawdziwy okrąg.
- Kolory, nazwy brył, struktura złożenia i PMI (tolerancje w pliku) nie są odczytywane.
- Oprócz STEP PartCraft otwiera siatki STL, OBJ i 3MF ([Otwieranie STL, OBJ lub 3MF](topic:open-meshes)) oraz pliki `.3dm` ([Otwieranie modelu .3dm](topic:open-3dm-files)) jako bryły. Pliki IGES i natywne pliki innych programów nie są obsługiwane.
- Część z bryłą STEP zaimportowaną przez wersję z dokładnym jądrem zachowuje tekst STEP; ta wersja pomija tę funkcję („jeszcze nie zbudowano”). Otwórz plik STEP ponownie, aby wczytać go jako trójkąty.
