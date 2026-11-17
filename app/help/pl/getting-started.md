---
title: Pierwsze kroki w PartCraft
summary: Co dziś robi PartCraft, czego potrzebuje przeglądarka i pierwsza część w dziesięć minut, od szkicu do zapisanego pliku.
keywords: start, pierwsze uruchomienie, szybki start, wprowadzenie, samouczek, pierwsza część, płytka, parametryczny, modelowanie części
from: 7d43283f
---

PartCraft to parametryczna aplikacja do części i złożeń z rodziny CadCraft. Rysujesz szkic 2D, wiążesz go relacjami i wymiarami, zamieniasz w bryłę elementami takimi jak wyciągnięcie, wycięcie, obrót i otwór, a każdą liczbę możesz zmienić później: część przebuduje się z historii. Części trafiają potem do złożeń, gdzie połączenia je ustawiają i pozwalają sprawdzić ruch.

Co robi ta wersja:

| Zadanie | Co dostajesz |
|---|---|
| Szkice | Linie, prostokąty, okręgi, łuki, punkty i osie, z relacjami i wymiarami oraz stanem na żywo: niedookreślony, w pełni określony lub przeokreślony |
| Elementy bryłowe | Wyciągnięcie, wycięcie, obrót, wycięcie obrotowe, proste i pogłębione otwory, wzory liniowe i kołowe, odbicie, zaokrąglenia i fazki na prostych krawędziach między płaskimi ścianami, powłoki i pochylenia na płaskich ścianach. Przeciągnięcia, lofty i inne elementy wymagające dokładnego jądra nie są jeszcze zbudowane w tej wersji: zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet) |
| Historia | Edytuj liczby dowolnego elementu, wyłączaj, cofaj, zmieniaj kolejność i usuwaj, z cofnięciem |
| Złożenia | Części połączone połączeniami sztywnymi, obrotowymi i suwakowymi, sprawdzenie kolizji i sprawdzenie ruchu |
| Rysunki | Arkusz A3 z trzema widokami, izometria, przekrój, widok szczegółu, wymiary gabarytowe, bazy, ramki tolerancji geometrycznej i symbole chropowatości, eksportowane do PDF |
| Pliki | Własne pliki części i złożeń; wyjście STL, 3MF, dokładny STEP, DXF i PDF |

Wszystko działa w przeglądarce, na komputerze. **Nic nie jest wysyłane.** Gdzie trafiają pliki, opisuje [Pliki: otwieranie, zapisywanie i eksport](topic:files).

## Czego potrzebujesz

- Aktualnej przeglądarki Chrome, Edge, Firefox lub Safari z włączonym **WebGL** (grafika 3D) i **WebAssembly**. Oba są domyślnie włączone. Geometrię bryły buduje jądro siatki WebAssembly, ładowane razem z aplikacją: zobacz [Jądro siatki](topic:solid-kernels).
- Najwygodniej myszą. Gładzik działa, a ekrany dotykowe nadają się do oglądania i prostych szkiców: zobacz [Gładzik, dotyk i małe ekrany](topic:trackpad-and-touch).
- Ekran o szerokości co najmniej 1280 pikseli pokazuje cały pasek narzędzi w jednym rzędzie. Węższe okna przewijają pasek w bok; na telefonie panele otwierają się jako arkusze z paska u dołu.

Więcej o przeglądarkach: [Przeglądarki i komputery](common:browsers).

:::note
PartCraft działa w przeglądarce, a na komputerze wewnątrz CadCraft Studio. Zapis w chmurze nie jest jeszcze dostępny: otwierasz części z komputera i zapisujesz je z powrotem jako pliki.
:::

## Otwórz PartCraft

1. Otwórz PartCraft.
2. Poczekaj, aż ekran pokaże „Ładowanie jądra bryłowego…”. Za pierwszym razem trwa to chwilę.
3. Widzisz pusty widok 3D z trzema płaszczyznami bazowymi, historię po lewej („Część1”, potem Płaszczyzna przednia, Płaszczyzna górna, Płaszczyzna prawa) i prostopadłościan w widoku z napisem „Rozpocznij część”.
4. Znacznik przy prawym końcu paska stanu mówi „Jądro siatki”: PartCraft buduje każdą część jądrem siatki w tej wersji, więc okrągłe ściany są płaskimi facetami. Można od razu zacząć modelować.

Jeśli widok mówi, że przeglądarka nie może pokazać 3D albo jądro się nie załadowało, zobacz [Rozwiązywanie problemów](topic:troubleshooting#the-app-does-not-start).

## Pierwsza część: płytka z otworem

Zrobisz płytkę 60 × 40 mm, grubą na 10 mm, z przelotowym otworem 6 mm. Jednostki to milimetry.

### Narysuj kontur

1. Kliknij **Płaszczyzna przednia** w historii po lewej. Płaszczyzna podświetla się w widoku.
2. Wybierz {{ui:Sketch}} na pasku narzędzi albo naciśnij {{key:S}}. Widok obraca się, by patrzeć prosto na płaszczyznę, a narzędzie Linia jest aktywne.
3. Naciśnij {{key:R}} dla narzędzia Prostokąt.
4. Przesuń wskaźnik na początek układu (mały czerwony okrąg z krzyżykiem). Mały kwadrat pokazuje, że przyciąga. Kliknij.
5. Przesuń w górę i w prawo, i kliknij ponownie. Masz prostokąt. Jego linie są niebieskie: niebieski oznacza, że mogą się jeszcze przesuwać.

### Nadaj wymiary

1. Naciśnij {{key:D}} dla narzędzia Wymiar.
2. Kliknij górną linię, potem kliknij trochę nad nią. Otwiera się pole liczby z bieżącą długością.
3. Wpisz `60` i naciśnij {{key:Enter}}. Prostokąt ma teraz 60 mm szerokości.
4. Kliknij lewą linię, potem kliknij trochę na lewo od niej. Wpisz `40` i naciśnij {{key:Enter}}.

Znacznik w lewym górnym rogu widoku pokazuje teraz **W pełni określony**, a linie zmieniają kolor na czarny (na motywie Papier) albo jasny (na motywie Model). Każdy punkt i każdy wymiar są ustalone.

:::tip
Jeśli prostokąt zaczęto poza początkiem układu, znacznik nadal pokazuje „Niedookreślony · 2 stopnie swobody”. Naciśnij {{key:S}} dla Zaznacz, kliknij jeden narożnik, {{key:Shift}}+kliknij początek, potem wybierz {{ui:• Zgodność}} w prawym panelu.
:::

### Wyciągnij

1. Wybierz {{ui:Exit}} na pasku narzędzi albo naciśnij {{key:Esc}}, aż szkic się zamknie (zwykle dwa razy).
2. Wybierz {{ui:Extrude}}. Pojawia się bryła 10 mm. „Wyciągnięcie1” dodaje się do historii, a „Szkic1” wcięty pod nim.
3. Prawy panel pokazuje ustawienia wyciągnięcia. Aby zmienić grubość, wpisz nową liczbę w **Głębokość (mm)** i naciśnij {{key:Enter}} albo {{key:Tab}}. Część przebuduje się od razu.

### Dodaj otwór

1. Kliknij dużą płaską ścianę z przodu płytki (koniec wyciągnięcia). Cała ściana się podświetla, a prawy panel mówi **Ściana**.
2. Wybierz {{ui:Sketch on this face}} w prawym panelu.
3. Naciśnij {{key:P}} dla narzędzia Punkt i kliknij blisko środka ściany.
4. Wybierz {{ui:Exit}}.
5. Wybierz {{ui:Hole}}. Otwór 6 mm przechodzi przez płytkę. W razie potrzeby zmień **Średnicę (mm)** w prawym panelu.

Pole **Część** na dole po lewej pokazuje teraz objętość, pole powierzchni, rozmiar (60 × 40 × 10 mm) i „Otwory przelotowe: 1”.

### Zapisz

1. Naciśnij {{key:Mod+S}} albo wybierz {{ui:Save}}.
2. Przeglądarka pobiera `Part1.partcraft.json` do folderu pobranych. Plik zawiera całą historię: otwórz go ponownie za pomocą {{ui:Open}}, aby dalej edytować.

Aby najpierw zmienić nazwę części, kliknij puste miejsce w widoku, by nic nie było zaznaczone, i wpisz nową **Nazwę** w prawym panelu.

## Gdzie dalej

- [Narysuj pierwszy szkic](topic:sketch-basics) i [W pełni określ szkic](topic:relations-dimensions) wyjaśniają edytor szkiców.
- [Zmień część przez jej historię](topic:edit-history) pokazuje, jak edytować to, co zbudowano.
- [Zaokrąglanie, fazowanie i wydrążanie](topic:fillet-chamfer-shell) oraz [Utwórz rysunek](topic:drawing-pdf) kończą część. [Czego jeszcze nie zbudowano](topic:not-built-yet) wymienia to, czego ta wersja nie robi, na przykład przeciągnięć i loftów.
- [Przejście z innego programu parametrycznego](topic:coming-from) wymienia nawyki, które działają tu inaczej.
- [Klawisze i mysz](topic:keyboard) to pełna lista skrótów.
- [Korzystanie z tej pomocy](common:help).
