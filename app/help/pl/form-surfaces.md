---
title: Kształty swobodne w obszarze Forma i elementy powierzchni
summary: Przeciągaj i ciągnij gładką klatkę sterującą w obszarze roboczym Forma, zaostrzaj krawędzie, używaj symetrii, sprawdzaj i zakończ jako dokładną bryłę lub powierzchnię, potem łataj, wyciągaj, zszywaj, pogrubiaj, odsuwaj, wydłużaj i przycinaj powierzchnie w Projekcie. Co jest dokładne, a co przybliżone.
keywords: forma, kształt swobodny, t-spline, subdywizja, catmull-clark, klatka, kwadrykula, zagięcie, symetria, zebra, krzywizna, powierzchnia, łata, wypełnienie, loft powierzchni, zszyj, pogrub, odsunięcie powierzchni, wydłuż, przytnij
from: 0d326ef4
---

:::note
**Jeszcze nie zbudowano w tej wersji.** Zakończenie formy w części oraz elementy powierzchni wymagają dokładnego jądra geometrii, którego ta wersja PartCraft nie ma: buduje każdą część jądrem siatki. [Czego jeszcze nie zbudowano](topic:not-built-yet) mówi, co zrobić zamiast tego. Reszta strony opisuje te funkcje tak, jak działają z dokładnym jądrem.
:::

Obszar roboczy **Forma** tworzy organiczne kształty. Edytujesz **klatkę** (cage), grubą siatkę narożników, krawędzi i ścian. Kształtem jest gładka powierzchnia sterowana przez klatkę (jej granicząca powierzchnia Catmulla–Clarka), więc przesunięcie jednego narożnika łagodnie wygina powierzchnię wokół niego. Gdy wygląda dobrze, **Wykończenie** dodaje ją do historii części jako element *Forma*, a dokładne jądro zamienia ją w prawdziwe powierzchnie B-sklejane. Potem możesz ją zaokrąglić, przyciąć, połączyć z innymi elementami i wyeksportować jako STEP.

Wybierz **Forma** na liście **Obszar roboczy** po lewej stronie paska narzędzi.

## Rozpocznij klatkę

1. Ustaw **Rozmiar** i **Podziały** w prawym panelu. Podziały to liczba ścian na każdy bok.
2. Kliknij {{ui:Box}}, {{ui:Quadball}} lub {{ui:Plane}} na pasku narzędzi. Panel ma też **Walec**, **Torus** i **Ściany przez kliknięcia**.

- **Kwadrykula** to klatka-prostopadłościan dopasowana tak, by jej punkty narożne leżały na sferze. Między tymi punktami powierzchnia leży trochę wewnątrz sfery: około 0,4 % mniej objętości przy 2 podziałach.
- **Płaszczyzna** jest otwarta, więc staje się bryłą powierzchniową (patrz „Elementy powierzchni w Projekcie” niżej).
- **Ściany przez kliknięcia**: kliknij 4 punkty na płaszczyźnie górnej (podłożu) albo na narożnikach klatki, by utworzyć jedną ścianę. Ściany mające wspólne narożniki łączą się. Naciśnij {{key:Enter}} po 3 punktach dla trójkąta albo {{key:Esc}}, by zakończyć.

Niedokończona klatka zapisuje się razem z plikiem części, więc możesz zamknąć plik i wrócić do pracy później.

## Wybieranie i przesuwanie

- Kliknij narożnik, krawędź lub ścianę klatki. {{key:Shift}}+kliknięcie dodaje lub usuwa elementy. {{key:Esc}} czyści zaznaczenie.
- Nad środkiem zaznaczenia pojawia się {{ui:Gizmo}}. Przeciągnij strzałkę, by przesuwać wzdłuż niej, albo kwadrat, by przesuwać w tej płaszczyźnie. Naciśnij {{key:W}}, by przesuwać, {{key:E}}, by obracać, i {{key:R}}, by skalować, albo użyj przycisków w panelu. {{ui:Gizmo}} na pasku narzędzi przełącza między nimi.
- **Miękkie opadanie** (mm) przyciąga też narożniki w tej odległości, płynnie zanikając na jej krawędzi.
- Każde przeciągnięcie to jeden krok cofnięcia: {{key:Ctrl+Z}} i {{key:Ctrl+Y}} działają jak zwykle.

## Zmiana klatki

Przyciski **Modyfikuj** w panelu działają na zaznaczeniu:

| Przycisk | Co robi |
|---|---|
| {{ui:Extrude}} | Wybrane ściany przesuwają się o **Odległość wyciągnięcia** wzdłuż swoich normalnych, z nowymi ścianami bocznymi. Wybrane otwarte krawędzie wypuszczają nowe ściany na zewnątrz. |
| {{ui:Edge loop}} / Wstaw pętlę krawędzi | Dzieli pierścień czworokątnych ścian przecinający wybraną krawędź, w połowie drogi. Więcej pętli daje ciaśniejsze krzywizny. |
| Wstaw punkt | Dodaje narożnik w środku wybranej krawędzi. |
| Podziel | Dzieli każdą wybraną ścianę na czworokątne ściany wokół jej środka. |
| Most | Łączy dwie wybrane ściany albo dwa otwory (wskaż po jednej otwartej krawędzi) rurą ze ścian. Oba muszą mieć tę samą liczbę krawędzi. |
| Wypełnij otwór | Zamyka otwór przez wybraną otwartą krawędź jedną ścianą. |
| Scal | Scala wybrane narożniki w jeden, w ich środku. |
| Wyrównaj | Przesuwa wybrane narożniki na płaszczyznę najlepiej do nich dopasowaną. |
| Usuń | Usuwa wybrane ściany, krawędzie (dwie ściany się łączą) lub narożniki. |

## Ostre krawędzie, symetria i widok

- {{ui:Crease}} czyni wybrane krawędzie ostrymi. **Waga zagięcia** 10 to pełna ostrość. Mniejsza waga zostaje ostra przez tyle kroków zagęszczania, a potem łagodnieje, co daje ciasne zaokrąglenie zamiast twardego zgięcia. {{ui:Uncrease}} przywraca gładkość. **Ostry wierzchołek** przypina narożnik, tak że powierzchnia przechodzi przez niego punktowo.
- **Symetria** odbija klatkę względem X, Y lub Z = 0. Zachowuje dodatnią stronę, odbija ją i łączy obie połówki. Potem edycja jednej strony odbywa się na obu. Narożniki na płaszczyźnie lustra zostają na niej.
- {{ui:Display}} przełącza między **Gładki** (powierzchnia, którą będzie element) a **Prostopadłościan** (same ściany klatki).
- **Analiza**: **Paski zebry** odbijają pasiste światło z bieżącego widoku. Gładko wyginają się na gładkiej powierzchni i przerywają się na zagięciu. **Krzywizna średnia** koloruje obszary wypukłe na czerwono, wklęsłe na niebiesko, a płaskie na biało. Mierzy się ją na wyświetlanej siatce wzorem cotangensów, więc jest to wskazówka, a nie pomiar.

## Sprawdź i zakończ

- **Sprawdź dokładnie** przelicza klatkę w dokładnym jądrze, bez zmiany części. Podaje, ile łat B-sklejanych tworzy klatka, ile z nich jest dokładnych, czy wynik jest zamkniętą, poprawną bryłą oraz jaka jest jego objętość.
- {{ui:Finish}} dodaje element *Forma* do historii albo aktualizuje edytowany kształt i wraca do Projektu. Zamknięta klatka staje się bryłą. Jej **Operacja** w panelu Projektu może być: Nowa bryła, Połącz, Wytnij lub Przecięcie. Otwarta klatka staje się bryłą powierzchniową.
- Aby zmienić kształt później, zaznacz go w historii i kliknij **Edytuj w Formie**. Zbudowana bryła jest ukryta podczas edycji jej klatki.
- **Odrzuć** wyrzuca klatkę bez naruszania historii.

## Co jest dokładne, a co przybliżone

Każda czworokątna ściana klatki, zagęszczona w razie potrzeby, staje się jedną dwusześcienną łatą B-sklejaną.

- Gdy każdy narożnik ściany jest *regularny* (w powierzchni schodzą się cztery krawędzie, a na krawędzi otwartej lub wzdłuż zagięcia trzy), łata jest **dokładnie** powierzchnią podziału. Testy sprawdzają to z dokładnością 1e-9 mm.
- Wokół **punktu osobliwego** (schodzą się trzy, pięć lub więcej krawędzi, narożnik ściany trój- lub pięciokątnej albo koniec zagięcia) nie ma dokładnej łaty wielomianowej. Tam łata przyjmuje dokładny punkt i płaszczyznę styczną w tym narożniku oraz krzywe krawędzi sąsiadów, więc łaty nadal się łączą bez szczeliny. Ciągłość styczności na krawędziach schodzących się w tym punkcie jest przybliżona. Panel Formy i panel elementu podają największy kąt, zwykle poniżej 2°. Wyższy **Poziom** w panelu elementu czyni te łaty mniejszymi i bliższymi.
- Ostre zagięcia to prawdziwe krawędzie bryły, więc możesz je zaokrąglić.
- Każda łata to osobna ściana, więc forma ma wiele ścian, a między nimi rysowane są linie.

## Elementy powierzchni w Projekcie

Polecenia powierzchni są w menu {{ui:More}} w Projekcie, wśród elementów. Wymagają dokładnego jądra. Bryły powierzchniowe są rysowane przezroczyście, na niebiesko. Nie są częścią bryły, dopóki ich nie pogrubisz ani nie zszyjesz.

| Polecenie | Co robi |
|---|---|
| Łata | Wypełnia zamkniętą pętlę krawędzi. Najpierw {{key:Shift}}+kliknij krawędzie bryły albo zaznacz bryłę powierzchniową, by wypełnić jej otwór. **Styczna (G1)** sprawia, że łata gładko łączy się z tą powierzchnią. |
| Loft powierzchni | Powierzchnia przez jeden łańcuch krzywych na szkic (otwarty lub zamknięty), w kolejności historii. |
| Zszyj | Zszywa bryły powierzchniowe wzdłuż wspólnych krawędzi. Jeśli się zamkną, wynikiem jest bryła, z Operacją jak w innych elementach. |
| Pogrub | Nadaje bryle powierzchniowej grubość: wzdłuż jej normalnej, przeciwnie do niej albo po połowie w obie strony. Wynikiem jest bryła. |
| Odsunięcie powierzchni | Kopia bryły powierzchniowej przesunięta wzdłuż jej normalnych. Oryginał pozostaje. |
| Wydłuż powierzchnię | Wydłuża jednościanową powierzchnię poza wybrane krawędzie. |
| Przytnij powierzchnię | Przycina bryłę powierzchniową tam, gdzie przecina ją inna bryła powierzchniowa albo bryła. Kliknij **Wskaż punkt na kawałku**, by wybrać, który kawałek zachować, albo zachowaj wszystko inne. |

Zszywanie, Pogrubienie, Wydłużenie i Przycinanie zużywają bryłę powierzchniową, od której zaczynają. Późniejsze elementy używają nowej.

Ograniczenia na dziś: formy z kilkoma oddzielnymi zamkniętymi częściami nie zamieniają się w jedną bryłę; regularne obszary nie są scalane w większe powierzchnie; a także zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet).
