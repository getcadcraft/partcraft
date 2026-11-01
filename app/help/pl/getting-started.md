---
title: Pierwsze kroki w PartCraft
summary: Co PartCraft potrafi dziś, czego potrzebuje przeglądarka i pierwsza część w dziesięć minut, od szkicu do zapisanego pliku.
keywords: start, pierwsze uruchomienie, szybki start, wprowadzenie, samouczek, pierwsza część, płyta, parametryczny, modeler części
from: 5f0a668d
---

PartCraft to parametryczna aplikacja do części i złożeń z rodziny CadCraft. Rysujesz szkic 2D, wiążesz go relacjami i wymiarami, zamieniasz w bryłę za pomocą elementów takich jak wyciągnięcie, obrót i otwór, a potem możesz zmienić dowolną liczbę: część przebuduje się z historii. Części trafiają następnie do złożeń, w których połączenia ustawiają je względem siebie i pozwalają sprawdzić ruch.

Co potrafi ta wersja:

| Zadanie | Co dostajesz |
|---|---|
| Szkice | Linie, prostokąty, okręgi, łuki, punkty i linie osiowe, z relacjami i wymiarami oraz stanem na żywo: niedookreślony, w pełni określony albo nadmiernie określony |
| Elementy bryłowe | Wyciągnięcie, wycięcie, obrót, wycięcie obrotowe, otwory proste i z pogłębieniem, wzory liniowe i kołowe, lustro, zaokrąglenia i fazki na prostych krawędziach między płaskimi ścianami oraz powłoki i pochylenia na płaskich ścianach. Przeciągnięcia, lofty i inne elementy, które wymagają dokładnego jądra, nie są jeszcze zbudowane w tej wersji: zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet) |
| Historia | Edycja liczb dowolnego elementu, wyłączanie, cofanie, zmiana kolejności i usuwanie, z możliwością cofnięcia |
| Złożenia | Części połączone połączeniami sztywnymi, obrotowymi i przesuwnymi, sprawdzenie kolizji i sprawdzenie ruchu |
| Rysunki | Arkusz A3 z trzema widokami, izometrią, przekrojem, szczegółem, wymiarami gabarytowymi, bazami, ramkami tolerancji i symbolami chropowatości, eksportowany do PDF |
| Pliki | Własne pliki części i złożeń; na wyjściu STL, 3MF, STEP z fasetkami, DXF i PDF |

Wszystko działa w przeglądarce, na Twoim komputerze. **Nic nie jest przesyłane.** Gdzie trafiają pliki, opisano w temacie [Pliki: otwieranie, zapisywanie i eksport](topic:files).

## Czego potrzebujesz

- Aktualnej przeglądarki Chrome, Edge, Firefox albo Safari z włączonymi **WebGL** (grafika 3D) i **WebAssembly**. Oba są domyślnie włączone. Geometrię brył buduje jądro siatkowe w WebAssembly, które ładuje się razem z aplikacją: zobacz [Jądro siatkowe](topic:solid-kernels).
- Najłatwiej pracować myszą. Panel dotykowy też działa, a ekrany dotykowe nadają się do oglądania i prostych szkiców: zobacz [Panel dotykowy, dotyk i małe ekrany](topic:trackpad-and-touch).
- Ekran szeroki na co najmniej 1280 pikseli pokazuje cały pasek narzędzi w jednym wierszu. Węższe okna przewijają pasek narzędzi na boki; na telefonie panele otwierają się jako arkusze z paska na dole.

Więcej o przeglądarkach: [Przeglądarki i komputery](common:browsers).

:::note
PartCraft działa w przeglądarce, a na pulpicie w CadCraft Studio. Zapis w chmurze nie jest jeszcze dostępny: części otwierasz z komputera i zapisujesz z powrotem na komputer jako pliki.
:::

## Otwórz PartCraft

1. Otwórz PartCraft.
2. Poczekaj, aż ekran przestanie pokazywać „Ładowanie jądra bryłowego…”. Za pierwszym razem to chwilę trwa.
3. Zobaczysz pusty widok 3D z trzema płaszczyznami bazowymi, historią po lewej („Część1”, potem Płaszczyzna przód, Płaszczyzna góra, Płaszczyzna prawo) i ramką w widoku z nagłówkiem „Zacznij część”.
4. Znacznik blisko prawego końca paska stanu pokazuje „Jądro siatkowe”: w tej wersji PartCraft buduje każdą część jądrem siatkowym, więc okrągłe ściany są płaskimi fasetkami. Możesz od razu zacząć modelować.

Jeśli widok informuje, że przeglądarka nie może pokazać 3D albo że jądro się nie załadowało, zobacz [Rozwiązywanie problemów](topic:troubleshooting#the-app-does-not-start).

## Pierwsza część: płyta z otworem

Zrobisz płytę 60 × 40 mm, grubą na 10 mm, z otworem 6 mm na wylot. Jednostki to milimetry.

### Naszkicuj obrys

1. Kliknij **Płaszczyzna przód** w historii po lewej. Płaszczyzna zostanie podświetlona w widoku.
2. Wybierz {{ui:Szkic}} na pasku narzędzi albo naciśnij {{key:S}}. Widok obróci się tak, by patrzeć wprost na płaszczyznę, a narzędzie Linia będzie aktywne.
3. Naciśnij {{key:R}}, aby wybrać narzędzie Prostokąt.
4. Ustaw wskaźnik na początku układu (mały czerwony okrąg z krzyżykiem). Mały kwadrat pokazuje, że następuje przyciągnięcie. Kliknij.
5. Przesuń w górę i w prawo, po czym kliknij ponownie. Masz prostokąt. Jego linie są niebieskie: niebieski oznacza, że nadal mogą się przesuwać.

### Nadaj mu wymiary

1. Naciśnij {{key:D}}, aby wybrać narzędzie Wymiar.
2. Kliknij górną linię, a potem kliknij trochę nad nią. Otworzy się pole liczby z bieżącą długością.
3. Wpisz `60` i naciśnij {{key:Enter}}. Prostokąt ma teraz szerokość 60 mm.
4. Kliknij lewą linię, a potem kliknij trochę na lewo od niej. Wpisz `40` i naciśnij {{key:Enter}}.

Znacznik w lewym górnym rogu widoku pokazuje teraz **W pełni określony**, a linie zmieniają kolor na tuszowy (czarny w motywie Papier, jasny w motywie Model). Każdy punkt i wymiar jest ustalony.

:::tip
Jeśli prostokąt zacząłeś z dala od początku układu, znacznik nadal pokazuje „Niedookreślony · 2 stopnie swobody”. Naciśnij {{key:S}}, aby wybrać zaznaczanie, kliknij jeden narożnik, kliknij początek układu z klawiszem {{key:Shift}}, a potem wybierz {{ui:• Współpadanie}} w prawym panelu.
:::

### Wyciągnij go

1. Wybierz {{ui:Wyjdź}} na pasku narzędzi albo naciskaj {{key:Esc}}, aż szkic się zamknie (zwykle dwa razy).
2. Wybierz {{ui:Wyciągnij}}. Pojawi się bryła o grubości 10 mm. W historii dodany zostanie „Wyciągnięcie1”, a „Szkic1” będzie wcięty pod nim.
3. Prawy panel pokazuje ustawienia wyciągnięcia. Aby zmienić grubość, wpisz nową liczbę w polu **Głębokość (mm)** i naciśnij {{key:Enter}} albo {{key:Tab}}. Część przebuduje się natychmiast.

### Dodaj otwór

1. Kliknij dużą płaską ścianę z przodu płyty (koniec wyciągnięcia). Cała ściana zostanie podświetlona, a prawy panel pokaże **Ściana**.
2. Wybierz {{ui:Szkic na tej ścianie}} w prawym panelu.
3. Naciśnij {{key:P}}, aby wybrać narzędzie Punkt, i kliknij blisko środka ściany.
4. Wybierz {{ui:Wyjdź}}.
5. Wybierz {{ui:Otwór}}. Otwór 6 mm przechodzi przez płytę. Jeśli chcesz, zmień **Średnica (mm)** w prawym panelu.

Ramka **Część** w lewym dolnym rogu pokazuje teraz objętość, pole powierzchni, rozmiar (60 × 40 × 10 mm) i „Otwory przelotowe: 1”.

### Zapisz ją

1. Naciśnij {{key:Mod+S}} albo wybierz {{ui:Zapisz}}.
2. Przeglądarka pobierze `Part1.partcraft.json` do folderu pobranych plików. Plik zawiera całą historię: otwórz go ponownie przez {{ui:Otwórz}}, aby dalej edytować.

Aby najpierw zmienić nazwę części, kliknij puste miejsce w widoku, tak by nic nie było zaznaczone, i wpisz nową **Nazwa** w prawym panelu.

## Co dalej

- [Narysuj pierwszy szkic](topic:sketch-basics) i [Określ szkic w pełni](topic:relations-dimensions) wyjaśniają szkicownik dokładnie.
- [Zmieniaj część przez jej historię](topic:edit-history) pokazuje, jak edytować to, co zbudowałeś.
- [Zaokrąglaj, fazuj i drąż](topic:fillet-chamfer-shell) oraz [Zrób rysunek](topic:drawing-pdf) kończą część. [Czego jeszcze nie zbudowano](topic:not-built-yet) wymienia to, czego ta wersja nie robi, na przykład przeciągnięć i loftów.
- [Przechodzisz z innego modelera parametrycznego](topic:coming-from) wymienia nawyki, które tutaj działają inaczej.
- [Klawisze i mysz](topic:keyboard) to pełna lista skrótów.
- [Jak korzystać z tej pomocy](common:help).
