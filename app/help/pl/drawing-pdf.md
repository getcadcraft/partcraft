---
title: Utwórz rysunek z widokami, przekrojem i GD&T
summary: Otwórz arkusz rysunkowy, dodaj przekrój i widok szczegółu, umieść bazy, ramki kontroli elementu i symbole chropowatości powierzchni, wybierz rozmiar arkusza, wypełnij tabliczkę rysunkową i rewizje oraz wyeksportuj arkusz jako PDF.
keywords: tabela otworów, wykres otworów, pozycje otworów, znaczniki, rysunek, rysunek 2D, arkusz, rozmiar arkusza, a4, a3, a2, a1, a0, ansi, tabliczka rysunkowa, rewizja, blok rewizji, numer rysunku, materiał, pdf, widoki, ortogonalny, trzeci kąt, izometryczny, przekrój, widok szczegółu, gd&t, baza, rama kontroli elementu, tolerancja, pozycja, płaskość, chropowatość, wykończenie powierzchni, wydruk
from: 39e944c0
---

PartCraft tworzy arkusz rysunkowy z części: widoki z przodu, z góry i z prawej w rzucie w trzecim kącie, widok izometryczny, wymiary gabarytowe i tabliczkę rysunkową na arkuszu od A4 do A0 albo ANSI od A do E. Ponad to możesz dodać przekrój, widok szczegółu i symbole GD&T. Arkusz aktualizuje się, gdy zmienia się część, a jego ustawienia są zapisywane w pliku części.

## Otwórz arkusz rysunkowy

1. Zbuduj część. (Gdy nic nie zbudowano: „Najpierw zbuduj bryłę, a potem utwórz jej rysunek.”)
2. Wybierz {{ui:Rysunek}} na pasku narzędzi.

Widok 3D zostaje zastąpiony arkuszem. Pasek narzędzi pokazuje {{ui:Baza}}, {{ui:Ramka}}, {{ui:Wykończenie}}, {{ui:Szczegół}}, {{ui:PDF}} i {{ui:Wstecz}}, a prawy panel ma nagłówek **Rysunek**. Pasek stanu mówi, jak powstały widoki: „Rysunek (krzywe rysowane jako wielokąty). Baza, Ramka i Wykończenie umieszczają GD&T na widoku; panel ustawia przekrój i widok szczegółu.” Widoki są rysowane z wielokątów jądra siatki, więc zaokrąglone krawędzie to krótkie odcinki proste; prawdziwe łuki wymagają dokładnego jądra, którego ta wersja nie ma.

Poruszaj się po arkuszu: kręć kółkiem, aby powiększać, przeciągaj prawym lub środkowym przyciskiem, aby przesuwać, naciśnij {{key:F}}, aby dopasować arkusz do okna. Gdy arkusz ma fokus, {{key:Plus}} i {{key:Minus}} powiększają, a {{key:Shift}} z klawiszami strzałek przesuwa.

Wybierz {{ui:Wstecz}}, {{ui:Wróć do modelu}} albo naciśnij {{key:Esc}} (gdy nic nie jest zaznaczone i żadne narzędzie nie jest aktywne), aby wrócić do modelu 3D.

## Co jest na arkuszu

- **Wybrany arkusz**, poziomo (A3, jeśli nie wybierzesz innego), z ramką i **tabliczką rysunkową**: {{ui:Tytuł}}, {{ui:Firma}}, {{ui:Nr rysunku}}, {{ui:Rewizja}}, {{ui:Materiał}}, {{ui:Narysował}} / {{ui:Sprawdził}} / {{ui:Zatwierdził}}, {{ui:Data}}, skala, rozmiar arkusza, „Jednostki: milimetry · Rzut w trzecim kącie” oraz to, czy widoki są dokładne, czy wielokątowe.
- **Blok rewizji** w prawym górnym rogu, gdy dodasz rewizję.
- **Widoki z przodu, z góry i z prawej**: widok z góry nad widokiem z przodu, widok z prawej po jego prawej stronie. Krawędzie niewidoczne są kreskowane.
- **Widok izometryczny**, tam gdzie jest miejsce.
- **Wymiary gabarytowe**: szerokość i wysokość na widoku z przodu, głębokość na widoku z góry.
- Jedna **skala** dla widoków głównych z serii ISO (1:1, 1:2, 1:5 … 2:1, 5:1, 10:1), dobrana tak, by się zmieściły.

## Wybierz rozmiar arkusza

Na arkuszu rysunkowym, gdy nic nie jest zaznaczone, wybierz {{ui:Arkusz}} w prawym panelu: **A4, A3, A2, A1, A0** (ISO 216) albo **ANSI A, B, C, D, E** (11 × 8.5 do 44 × 34 in). Widoki są ponownie rozmieszczane w największej skali ISO, która się mieści, więc większy arkusz może pokazać część w większym rozmiarze.

## Wypełnij tabliczkę rysunkową

Pola **Tabliczka rysunkowa** w prawym panelu trafiają wprost na arkusz: {{ui:Tytuł}}, {{ui:Nr rysunku}}, {{ui:Rewizja}}, {{ui:Firma}}, {{ui:Narysował}}, {{ui:Sprawdził}}, {{ui:Zatwierdził}}, {{ui:Data}} (rok-miesiąc-dzień), {{ui:Tolerancja ogólna}} i {{ui:Wykończenie}} (dwa ostatnie drukują się tuż nad tabliczką rysunkową). Wpisz wartość w polu i naciśnij {{key:Enter}} albo kliknij poza nim. Puste pole zostawia komórkę pustą, z wyjątkiem:

- **Tytuł** pokazuje nazwę części, dopóki nie wpiszesz własnej.
- **Data** pokazuje dzisiejszą datę, dopóki nie wpiszesz własnej.
- **Rewizja** pokazuje najnowszą rewizję z listy, dopóki nie wpiszesz własnej.

**Materiał** pochodzi z części: kliknij puste miejsce w modelu, a potem wybierz {{ui:Materiał}} w panelu Część. Ten sam materiał nadaje właściwościom masy z Measure gęstość.

## Dodaj rewizje

W sekcji **Rewizje** kliknij {{ui:Dodaj rewizję}}. Każdy nowy wiersz dostaje następną literę (A, B, C …; po Z idzie AA) i dzisiejszą datę. Wpisz, co się zmieniło, i kto dokonał zmiany. {{ui:Usuń}} usuwa wiersz. Blok rewizji w prawym górnym rogu arkusza wymienia je, od najstarszej, do 20.

Rozmiar arkusza, tabliczka rysunkowa, rewizje i materiał są zapisywane w pliku części, a każda zmiana to jeden krok {{ui:Cofnij}}.

## Dodaj widok przekroju

Część jest przecięta płaszczyzną, a przekrój jest kreskowany. Podobnie jak inne widoki, przekrój jest rysowany z wielokątów, więc zaokrąglone krawędzie to krótkie odcinki proste.

1. W prawym panelu ustaw **Przekrój A-A** na **Z widoku z przodu**, **Z widoku z góry** albo **Z widoku z prawej**.
2. Przekrój pojawia się na arkuszu, kreskowany tam, gdzie płaszczyzna przecina materiał, z linią cięcia i strzałkami „A” na widoku, z którego jest wzięty.
3. Ustaw **Przecięcie w (mm)**, aby przesunąć płaszczyznę cięcia. Zaczyna się w środku części.

Ustaw **Przekrój A-A** z powrotem na **Brak**, aby go usunąć.

## Dodaj widok szczegółu

1. Ustaw **Szczegół B** na widok do powiększenia (albo wybierz {{ui:Szczegół}} na pasku narzędzi).
2. Kliknij środek obszaru do powiększenia na tym widoku. Okrąg z etykietą „B” go zaznacza, a powiększony „Szczegół B” pojawia się na arkuszu z własną skalą, na przykład „Szczegół B (2:1)”.
3. Ustaw **Promień szczegółu (mm)** dla rozmiaru okręgu i **Skalę szczegółu** dla powiększenia: 2, 4, 5 lub 10-krotne.

Szczegół można wziąć z widoku z przodu, z góry, z prawej lub z przekroju, nie z izometrii. Jeśli nie ma miejsca na wszystkie widoki, panel mówi: „Brak miejsca na arkuszu dla: szczegół. Zmniejsz szczegół albo usuń widok.”

## Dodaj tabelę otworów

Tabela otworów wymienia otwory części wraz z ich położeniem, do wiercenia lub obróbki CNC: w panelu wybierz **Tabela otworów** › **Z widoku z góry** (albo z przodu lub z prawej).

- Każdy otwór widziany na wprost w tym widoku dostaje obok znacznik: **A1**, **A2** … dla pierwszego rozmiaru, **B1** … dla następnego.
- Tabela wymienia każdy znacznik, jego **X** i **Y** w milimetrach oraz rozmiar: „Ø14 THRU”, „Ø6.6 × 10 DEEP”, pogłębienie lub stożkowe pogłębienie albo oznaczenie gwintu otworu gwintowanego.
- X i Y są mierzone od lewego dolnego rogu obrysu widoku, oznaczonego na arkuszu jako **X0 Y0**.
- Otwory wykonane wzorami są uwzględnione. Otwory nieprostopadłe do widoku są liczone w panelu i pomijane w tabeli.

Tabela trafia w wolne miejsce na arkuszu i do PDF.

## Umieść symbole GD&T i wykończenia powierzchni

1. Wybierz {{ui:Baza}}, {{ui:Ramka}} (rama kontroli elementu) albo {{ui:Wykończenie}} (symbol wykończenia powierzchni).
2. Kliknij punkt na widoku, w którym ma się przyczepić. Przyciąga się do najbliższej narysowanej linii w odległości 2.5 mm.
3. Symbol pojawia się z odnośnikiem, zaznaczony, a prawy panel pokazuje jego ustawienia.

Przeciągnij symbol, aby go przesunąć; jego odnośnik zostaje w punkcie. Przy zaznaczonym symbolu klawisze strzałek przesuwają go o 1 mm. {{key:Delete}} lub {{key:Backspace}} (albo {{ui:Usuń}} w panelu) usuwa go; {{ui:Gotowe}} lub {{key:Esc}} odznacza go. Każda zmiana jest na liście cofania.

### Baza

**Litera**: od A do Z, bez I, O i Q (wyglądają jak 1, 0 i O). Każda nowa baza dostaje następną wolną literę.

### Rama kontroli elementu

| Ustawienie | Wybór |
|---|---|
| **Tolerancja** | Prostoliniowość, Płaskość, Okrągłość, Walcowość, Profil linii, Profil powierzchni, Prostopadłość, Kątowość, Równoległość, Pozycja, Współosiowość, Symetria (obie usunięte w Y14.5-2018 i oznaczone jako takie), Bicie promieniowe, Bicie całkowite |
| **Strefa (mm)** | Wartość tolerancji, domyślnie 0.1 |
| **Strefa średnicy (⌀)** | Dla cech ze strefą walcową; domyślnie włączona dla Pozycji |
| **Warunek materiałowy** | RFS (brak), MMC (Ⓜ), LMC (Ⓛ), tam, gdzie cecha na to pozwala |
| **Baza główna / Baza drugorzędna / Baza trzeciorzędna** | Do trzech liter baz, każda z **modyfikatorem …** (MMB, LMB) tam, gdzie jest dozwolony |

PartCraft sprawdza ramę według reguł ASME Y14.5 i mówi, co jest nie tak, u góry panelu, na przykład „Płaskość to tolerancja kształtu: nie przyjmuje odniesień do baz.” albo „Pozycja wymaga co najmniej jednego odniesienia do bazy.” Wiersz **Odczyt** wylicza ramę słowami.

### Wykończenie powierzchni

| Ustawienie | Wybór | Domyślnie |
|---|---|---|
| **Ra (µm)** | Średnia chropowatość | 1.6 |
| **Proces** | dowolny proces, obróbka, bez usuwania materiału | obróbka |
| **Uwaga** | Do 40 znaków, na przykład kierunek bruzd albo proces | |

Gdy nic nie jest zaznaczone, panel wymienia **Uwagi na arkuszu**, każdą z przyciskiem **Zaznacz**.

## Eksport PDF

Wybierz {{ui:PDF}} na pasku narzędzi, {{ui:Eksportuj PDF}} w panelu albo {{ui:Eksport}}, a potem {{ui:Rysunek (PDF): widoki, przekrój, szczegół, GD&T}} z modelu. PDF pobiera się jako `<part name> - drawing.pdf`, a pasek stanu wymienia, co jest na nim.

Drukuj w trybie „Rzeczywisty rozmiar” na papierze o rozmiarze arkusza, aby zachować prawdziwą skalę.

## Ograniczenia

| Jeszcze nie zbudowano | Zrób to dziś |
|---|---|
| Wymiary inne niż trzy wymiary gabarytowe | Dodaj je w PDF w programie do adnotacji albo wyeksportuj szkic lub ścianę jako DXF i wymiaruj w programie CAD 2D |
| Więcej niż jeden przekrój lub szczegół; widoki wyrwane, pomocnicze i rzutowane | Niedostępne |
| Rzut w pierwszym kącie, przesuwane widoki, arkusze pionowe | Trzeci kąt, układ automatyczny, poziomo |
| Dowolne notatki tekstowe i tabele na arkuszu (poza tabliczką tytułową i blokiem rewizji) | Użyj uwagi o wykończeniu albo dodaj tekst w PDF |
| Rysunki złożeń | Niedostępne |

Znaki spoza zestawu zachodnioeuropejskiego drukują się jako „?” (PDF używa wbudowanej czcionki Helvetica czytnika). Symbole GD&T są rysowane jako linie, więc drukują się w każdym czytniku.

## Niech arkusz zrobi to za Ciebie

- **Arkusz › Automatycznie** wybiera papier za Ciebie: największą standardową skalę do 1:1, na najmniejszym arkuszu formatu A, który mieści widoki w tej skali (lista pokazuje, który został wybrany).
- **Wymiaruj otwory** wymiaruje otwory na widoku, który pokazuje ich najwięcej widzianych na wprost: znacznik środka przy każdym, jedno wyniesienie na rozmiar („2× Ø6 THRU” z odnośnikiem) oraz ich położenia mierzone od lewego dolnego rogu widoku. Wymiary gabarytowe: szerokość, wysokość i głębokość, są zawsze obecne.
