---
title: Co nowego w wersji 0.9
summary: PartCraft 0.9 dodaje zaokrąglenia między ścianami i pogrubianie w bryły, złożenia z tysiącami części, skarbiec Dokumentów z rewizjami, dodatek Solid FEM do sprawdzania naprężeń, dziesięć metod łuku, brytyjskie profile stalowe, etap druku i dodatki do druku żywicznego.
keywords: co nowego, informacje o wydaniu, dziennik zmian, 0.9, zaokrąglenie między ścianami, toczące się kulki, zaokrąglenie kilku krawędzi, pogrubienie, bryła z powierzchni, step, iges, skanowanie zaokrągleń, duże złożenie, wyświetlanie uproszczone, 20000 części, dokumenty, skarbiec, pobranie, rewizja, wydanie, gdzie użyte, link rhino, grasshopper, 3dm, kursory, hala produkcyjna, kolejka zadań, solid fem, metoda elementów skończonych, von mises, częstotliwość drgań, metody łuku, łuk 3-punktowy, brytyjskie profile stalowe, blue book, etap druku, żywica, goo, ctb, stół, rozłóż na płasko, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, analiza na żywo, aktualizacja podczas edycji, złam to, co pęka pierwsze, współczynnik obciążenia, nieliniowość, granica plastyczności, odkształcenie plastyczne, kontakt, calculix, badanie ruchu, luz, powierzchnie, nurbs, wygładź, kadłub, zebra, inżynier, generator, wygenerowana bryła, szkic ze zdjęcia, skala do druku, podział do druku, skurcz, zagnieżdżone arkusze, g-code, rysunek, wymiaruj otwory, asystent, mcp, języki, wiersze paska narzędzi
from: 96d9fbfa
---

To, co zmieniło się w PartCraft 0.9 w porównaniu z 0.8.1. Powierzchnie swobodne domykają się teraz w bryły, złożenia z tysiącami części pozostają użyteczne, skarbiec Dokumentów zachowuje rewizje, a dodatek Solid FEM sprawdza naprężenia w części. Każda pozycja mówi, gdzie ją znaleźć.

## Nowe w 0.9.1

- **Dokładny eksport STEP.** {{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} i {{ui:STEP AP214 (dokładna bryła)}} działają teraz. Otwory, wypusty, zaokrąglenia, stożki, sfery i tory są zapisywane na swoich prawdziwych powierzchniach, z prawdziwymi okręgami jako krawędziami, więc inny program CAD lub CAM może rozpoznać otwór jako otwór. Boki splajnów, modelowane gwinty i zaimportowane siatki pozostają płaskimi ściankami w tej samej bryle. Zob. [Eksport do druku, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP wchodzi, dokładny STEP wychodzi.** Otwarty plik STEP zachowuje własne płaskie ściany, walce, stożki, sfery i tory, więc {{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} zapisuje je z powrotem jako prawdziwe powierzchnie zamiast ścianek: belka dostawcy z otworami na śruby wychodzi z tymi samymi ścianami, z którymi weszła, plus tym, co w nią wyciąłeś. Splajnowe, przeciągnięte i obrócone ściany pliku pozostają ściankami, tak samo jak bryły z STL, OBJ i 3MF. Dla części zapisanej wcześniej otwórz plik STEP ponownie. Zob. [Otwórz plik STEP i buduj na nim](topic:import-step).
- **Prawdziwe okręgi w DXF ściany.** {{ui:Eksport}} › {{ui:DXF szkicu albo płaskiej ściany}} z wybraną płaską ścianą zapisuje teraz okrągłe otwory jako okręgi, z własnym środkiem i promieniem otworu, dla stołu laserowego, plazmowego lub wodnego. Inne okrągłe krawędzie nadal są ściankami.
- **Dokładny STEP dla warsztatu.** W {{ui:Wytwarzanie}} {{ui:Dokładny STEP (współrzędne obróbki)}} zapisuje część z początkiem w punkcie zerowym ustawienia i osią Z wzdłuż osi narzędzia, czyli w współrzędnych, których używa G-code. Zob. [Twórz ścieżki narzędzi i G-code](topic:manufacture#exact-step-for-the-shop).

## Nowe

### Powierzchnie i bryły

- **Zaokrąglenie między ścianami.** Wybierz {{ui:Powierzchnie}} w polu {{ui:Obszar roboczy}}, a potem {{ui:Zaokrąglenie między ścianami}}. Wskaż dwie ściany jednej bryły i wpisz promień (oraz {{ui:Promień na końcu (mm, 0 = taki sam)}} dla promienia, który zmienia się wzdłuż krawędzi). Wiersz wyniku mówi, jak bardzo zaokrąglenie odbiega od idealnej toczącej się kulki, a promień, który nie pasuje, zostaje odrzucony z nazwaną ścianą. {{ui:Zaokrąglenie kilku krawędzi}} zaokrągla wiele krawędzi jednym krokiem; zaznacz {{ui:Narożniki (płat sferyczny, gdy spotykają się trzy)}}, aby uzyskać sferyczny narożnik, w którym spotykają się trzy zaokrąglone krawędzie płaskich ścian. Zob. [Swobodne powierzchnie (NURBS)](topic:nurbs-surfaces).
- **Pogrubienie w bryłę.** {{ui:Pogrub do bryły}} w tym samym obszarze roboczym nadaje powierzchni grubość; {{ui:Druga strona}} rozrasta ją w drugą stronę. Zagięcie lub samoprzecięcie jest odrzucane z nazwaną powierzchnią i miejscem.
- **Bryły z powierzchni.** Przycięte powierzchnie można łączyć operacjami sumy, odejmowania i przecięcia, i wbudować w część jednym krokiem cofnięcia. STEP zapisuje bryłę jako jedną zamkniętą powłokę, a IGES jako jedną bryłę; obie wracają jako bryły. Jeśli ściany nie łączą się krawędź w krawędź, plik dostaje osobne ściany, a wiersz stanu to mówi. Bryły można też tworzyć w edytorze węzłów; zob. [Edytor węzłów](topic:nodes).
- **Zaokrąglenia obrzeża i zmienne w skanach.** Gdy dopasowujesz powierzchnie do skanu, szuka się też zaokrągleń obrzeża (tori) i zaokrągleń o zmiennym promieniu wzdłuż dość prostej krawędzi, i są wymieniane wraz z promieniem. Testowano to tylko na zmyślonych skanach.

### Złożenia, dokumenty i połączenia

- **Duże złożenia.** Części będące kopiami współdzielą jedną siatkę, a {{ui:Widoki}} › {{ui:Wyświetlanie uproszczone}} rysuje pudełka, aby widok nadal się przesuwał (włącza się sam przy bardzo dużych złożeniach; wybór i połączenia nadal używają prawdziwych części). Drzewo części pokazuje pierwsze wiersze i przycisk „Pokaż 700 kolejnych" dla reszty. Pliki złożeń mogą zawierać do 50 000 instancji i 100 000 połączeń. Zob. [Buduj złożenie](topic:build-assembly).
- **Dokumenty.** {{ui:Dokumenty…}} w grupie {{ui:Plik}} otwiera okno nad folderem projektu: pobieranie i zwrot, litery rewizji, stany (w toku, do przeglądu, zwolnione, nieaktualne), historia, gdzie użyte i zestawienie materiałów. Zob. [Dokumenty i rewizje (skarbiec)](topic:documents-walkthrough).
- **Żywe połączenie z Rhino.** Jeden skrypt, `cadcraft_link.py`, obserwuje dokument Rhino lub Grasshopper i wysyła do PartCraft tylko to, co się zmieniło; zaimportowany element przebudowuje się na nowym kształcie. Działa jednokierunkowo i wymaga Studio. Zob. [Żywe połączenie z plikiem .3dm](topic:live-3dm-link).
- **Widzicie kursory nawzajem.** W sesji współdzielonej kursor każdej osoby pokazuje jej imię i element, który wybrała. Zob. [Pracuj wspólnie na żywo](topic:work-live).
- **Hala produkcyjna.** Włącz dodatek Hala produkcyjna w {{ui:Ustawienia}} › {{ui:Dodatki}}. Po wysłaniu programu w {{ui:Wytwarzanie}} jego karta może {{ui:Dodaj do kolejki zadań hali}} albo {{ui:Zapisz jako plik zadania}}. Nigdy nie wysyła ani nie uruchamia maszyny.

### Analiza i części

- **Dodatek Solid FEM.** Włącz Solid FEM w {{ui:Ustawienia}} › {{ui:Dodatki}} (jest wyłączony, dopóki tego nie zrobisz), a w prawym panelu pojawi się karta Solid FEM. Siatkuj część, wskaż w widoku 3D stałe ściany i obciążenia, {{ui:Rozwiąż}} i narysuj przemieszczenie, naprężenie von Mises albo postać drgań przez {{ui:Pokaż na modelu}}. Zob. [Solid FEM: sprawdzenie naprężeń](topic:solid-fem-check).
- **Łuk w szkicach, dziesięcioma sposobami.** Strzałka obok {{ui:Łuk}} na pasku szkicu wymienia: 3 punkty, Początek środek koniec, Początek środek kąt, Początek środek długość, Początek koniec kąt, Początek koniec kierunek, Początek koniec promień, Środek początek koniec, Środek początek kąt, Środek początek długość oraz Kontynuuj. Zob. [Narysuj łuk dziesięcioma metodami](topic:sketch-arc-methods).
- **Brytyjskie profile stalowe.** Elementy konstrukcyjne mogą używać 976 brytyjskich profili (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); wpisz rozmiar, na przykład `305x165x40 UB`. Zob. [Elementy konstrukcyjne](topic:structural-members).

### Druk

- **Etap druku.** Przycisk Etap druku na pasku narzędzi (dodatek 3D Print, domyślnie włączony) kładzie bryły części na przerywanym stole: {{ui:Rozłóż na płasko}}, Obróć o 90°, Ułóż na stole, Dopasuj wszystko do stołu, Podgląd warstw, a potem Wyślij do drukarki 3D przez USB, Klipper (Moonraker), OctoPrint lub PrusaLink. Nic nie jest wysyłane, dopóki nie potwierdzisz, a część nigdy się nie zmienia. Dla pliku STL lub 3MF zob. [Przygotuj część do druku 3D](topic:print-3d).
- **Druk żywiczny.** Dodatki w {{ui:Ustawienia}} › {{ui:Dodatki}}, wszystkie wyłączone, dopóki ich nie włączysz: slicer żywiczny, test naświetlania oraz formaty plików Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. Slicowanie działa w osobnym wątku, więc strona pozostaje responsywna.

## We wszystkich aplikacjach

- Każda podpowiedź po najechaniu to podpowiedź Bootstrap.
- Pasek kart panelu, który się nie mieści, przewija się w bok zamiast być ucięty.
- Karta przeglądarki pokazuje nazwę otwartego dokumentu przed PartCraft | CadCraft.
- {{ui:Ustawienia}} pokazuje {{ui:Układ}} obszaru roboczego jako listę rozwijaną, a pole języka wypisuje każdy język dostępny w tej wersji.
- Waga i temperatura to rodzaje jednostek w ustawieniach jednostek.
- Wskazówka startowa ma przycisk zamknięcia; po zamknięciu pozostaje zamknięta.

## Naprawione

- Menu Łuk w szkicu wymienia teraz każdą metodę.
- Pasek dodatków i tytuł karty przeglądarki zostały poprawione 2026-11-09.

## Uczciwe ograniczenia

- Dokładny STEP został odczytany w OpenCascade (poprawne bryły, objętości zgodne z obliczonymi ręcznie). Nie został jeszcze otwarty w każdym programie CAD ani CAM, a złożenie nie jest zapisywane jako dokładny STEP.
- Nic nie zostało wydrukowane na prawdziwej drukarce. Slicowanie, G-code i pliki żywiczne były odczytane przez nasze własne programy albo przez zastępczą drukarkę; żaden z formatów żywicznych nie został załadowany na drukarce, a rozmiary drukarek i czasy naświetlania to punkty wyjścia.
- Solid FEM jest liniowy, izotropowy i sprężysty, z jednym materiałem na część, bez kontaktu, uplastycznienia i wyboczenia. Naprężenie przy stałych ścianach i ostrych narożnikach zależy od siatki. To pomoc w sprawdzaniu, nie przejrzana przez inżyniera.
- Czasy dla dużych złożeń pochodzą z serwera bez GPU; pełnoszczegółowa klatka z 20 000 części nadal zajmuje tam sekundy.
- Zaokrąglenia działają na parach ścian; nie ma ogólnego mieszania wierzchołków ani zaokrągleń między ścianami, które się nie stykają.
- Połączenie z Rhino nigdy nie działało w prawdziwym Rhino ani Grasshopper. Dokumenty wypróbowano dwoma programami na jednym folderze, a nie przez dwie osoby w sieci.
- Dopasowywanie powierzchni do prawdziwego skanu nie zostało jeszcze ręcznie sprawdzone. Języki inne niż angielski to wersje robocze wygenerowane maszynowo.
- Instalatory Windows nie mają podpisu kodu, a obraz dysku macOS nie jest notarialnie poświadczony. Zob. [Rozwiązywanie problemów](topic:troubleshooting).

Wcześniejsze zmiany są w [Co nowego w wersji 0.7](topic:whats-new-0-7).

## Wcześniej: 0.8 i 0.8.1

To, co zmieniło się w PartCraft 0.8 i 0.8.1 w porównaniu z 0.7. Symulacja odpowiada, gdy edytujesz, i mówi, co pęka pierwsze; złożenia dostają badania ruchu, a nowe obszary robocze tworzą swobodne powierzchnie i części dobrane według fizyki. 0.8.1 to niewielkie wydanie poprawek.

### Nowe

**Symulacja**

- **Aktualizuj, gdy edytuję.** Zaznacz „Aktualizuj, gdy edytuję" w bloku Rozwiąż, a odpowiedzi będą podążać za twoimi edycjami. Zmień wymiar, obciążenie lub materiał, a szybka odpowiedź, policzona na elementach czterokrotnie większych, pojawi się od razu; gdy przestaniesz na około sekundę, dokładniejsza odpowiedź badania zastąpi ją. Wyniki mówią, którą widzisz. Na wsporniku stalowym szybka odpowiedź mieściła się w 1 % przy ugięciu i około 4 % przy naprężeniu dokładnej. Zob. [Sprawdź naprężenie i ugięcie](topic:simulation#update-while-you-edit-live).
- **Co pęka pierwsze?** Dla badania statycznego lub wyboczenia {{ui:Co pęka pierwsze?}} w bloku „Złam to" skaluje obciążenia, aż część ulegnie. Wymienia od najgorszego: współczynnik obciążenia do pierwszej granicy plastyczności (z czerwonym znacznikiem tam, gdzie naprężenie jest największe) i współczynnik obciążenia do wyboczenia. Współczynnik poniżej 1 oznacza, że część już ulega przy obciążeniu, a Problemy pokazuje błąd. Współczynniki pochodzą z badania liniowego, więc są tak dobre, jak ono. Zob. [Sprawdź naprężenie i ugięcie](topic:simulation#find-out-what-breaks-first-break-it).
- **Uplastycznienie i kontakt.** Dwa kolejne typy badań: nieliniowe, w którym materiał podąża za swoją prostą aż do granicy plastyczności, a potem za łagodniejszym nachyleniem, z wykreślonym odkształceniem plastycznym; oraz kontaktowe, w którym oddzielne części napierają na siebie (bez tarcia) albo są zaklinowane (sklejone). Krok obciążenia, który nie może się ustabilizować, albo części zagłębiające się zbyt mocno w siebie pojawiają się w panelu Problemy. Tarcie, duży poślizg, duże obroty, duże ugięcia i zmęczenie nie są rozwiązywane. Zob. [Sprawdź naprężenie i ugięcie](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Pliki dla CalculiX.** {{ui:Eksport}} › {{ui:Plik CalculiX (.inp)}} zapisuje badanie dla CalculiX, osobnego programu, który instalujesz i uruchamiasz sam; {{ui:Eksport}} › {{ui:Wyniki CalculiX (.frd)}} czyta z powrotem jego plik wyników na tej samej siatce. PartCraft nigdy nie uruchamia tego programu i mówi o tym, jeśli część zmieniła się od zapisania pliku.

**Złożenia**

- **Badania ruchu.** {{ui:Złożenie}} › {{ui:Ruch}} napędza wartość jednego połączenia w czasie, który podasz (stała prędkość, łagodnie, sinusoidalnie albo tam i z powrotem), ustawia złożenie w każdym kroku z jego połączeniami i zamkniętymi pętlami oraz podaje, co koliduje i jak blisko zbliżają się części. „Dodaj punkt" rysuje położenie punktu, prędkość i przyspieszenie, wartość połączenia i luz w czasie; {{ui:Zapisz CSV}} i {{ui:Zapisz wykres}} zapisują je. Po {{ui:Uruchom}} pasek uruchomienia pozwala przesuwać złożenie do dowolnego kroku. Ustawienia badania zapisują się w pliku złożenia. Prędkość i przyspieszenie pochodzą z zapisanych położeń, więc użyj większej liczby kroków, jeśli ostry szczyt wychodzi zaniżony. Zob. [Sprawdź złożenie pod kątem kolizji i ruchu](topic:check-assembly#a-motion-study).

**Powierzchnie i części z fizyki**

- **Obszar Powierzchnie.** Wybierz {{ui:Powierzchnie}} w polu {{ui:Obszar roboczy}}, aby mieć krzywe i powierzchnie NURBS obok części: {{ui:Krzywa}}, {{ui:Loft}}, {{ui:Przeciągnięcie}}, {{ui:Dopasuj}} i {{ui:Zebra}}, z ciągłością (G0, G1 lub G2) mierzoną na dokładnych powierzchniach i krawędzią gorszą niż zamówiona, wymienioną w Problemach z poprawką Dopasuj. {{ui:Wygładź}} mierzy linie kadłuba pod kątem punktów przegięcia i skoków krzywizny i przebudowuje nierówne w ramach tolerancji. Powierzchnie zapisują się w pliku części i nie zmieniają jej elementów. Zob. [Swobodne powierzchnie (NURBS)](topic:nurbs-surfaces).
- **Obszar Inżynier.** Wybierz Inżynier w przełączniku obszarów roboczych, wybierz generator i kliknij {{ui:Nowy}}: skrypt dobiera rozmiary części na podstawie tego, co ma robić (przenieść ciepło, przepływy, ciśnienie, materiał, proces druku), używając wzorów z podręczników; buduje ją, a potem zwraca użyte liczby wraz z ich źródłami, sprawdzeniami produkcyjnymi i plikami dla narzędzi analizy. Te same dane dają tę samą część na każdym komputerze. Generator zapisuje się w części, a otwarcie części nigdy nie uruchamia skryptu. Zob. [Części z fizyki: generatory](topic:engineer-generators) i [Napisz generator](topic:write-a-generator).

**Szkicowanie, rysunki i wytwarzanie**

- **Szkic ze zdjęcia.** {{ui:Elementy}} › {{ui:Więcej}} › {{ui:Szkic ze zdjęcia…}} obrysowuje zdjęcie płaskiej części na zwykłym tle (zarys i otwory) albo rysunek piórem, zamieniając go na linie, łuki i okręgi. Podajesz jeden wymiar, sprawdzasz podgląd i tworzysz szkic. Zob. [Podstawy szkicowania](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala i podział do druku.** {{ui:Eksport}} › {{ui:Skaluj do druku (STL lub 3MF)…}} skaluje osobno wzdłuż każdej osi bez zmiany części, na przykład o zapas na skurcz. {{ui:Eksport}} › {{ui:Podziel do druku (zip z częściami)…}} tnie część za dużą na stół na ponumerowane kawałki połączone kołkami, wpustami, jaskółczymi ogonami, otworami na kołki lub kieszeniami na magnesy. Zob. [Drukuj w 3D](topic:print-3d).
- **Zagnieżdżone arkusze do G-code.** {{ui:Eksport}} › {{ui:Zagnieżdżone arkusze do G-code}} czyta zagnieżdżony DXF i tworzy jeden program na arkusz przez wybrany postprocesor: najpierw otwory i wycięcia, potem kontury. Nie planuje wejść, kolejności cięcia ani wspólnych krawędzi. Zob. [Zagnieżdżaj płaskie części na arkuszach](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Rysunki, które robią więcej same.** {{ui:Arkusz}} › {{ui:Automatycznie}} wybiera najmniejszy arkusz formatu A, który mieści widoki w największej standardowej skali do 1:1. {{ui:Wymiaruj otwory}} stawia znacznik środka na każdym otworze, jedną wyniesioną etykietę na rozmiar i położenia od lewego dolnego rogu widoku. Zob. [Twórz rysunek](topic:drawing-pdf).

**We wszystkich aplikacjach**

- **Języki.** Aplikacje są dostępne w 54 językach. Te poza angielskim są wersjami roboczymi wygenerowanymi maszynowo, dopóki nie przeczyta ich rodzimy użytkownik języka.
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} wybiera Zawijanie (jak dotąd), 2 wiersze albo 1 wiersz; pasek, który się nie mieści, przewija się w bok. Wstążka elementów PartCraft pokazuje najczęściej używane narzędzie dużym przyciskiem, a warianty chowa za przyciskiem dzielonym.
- **Połącz swoją AI.** Studio to centrum podłączania własnego asystenta do wszystkich ośmiu aplikacji, z uprawnieniem tylko do odczytu, sugerowania lub edycji dla każdej z nich. Połączony asystent może zwymiarować część na podstawie zdania, na przykład wspornika na obciążenie, pokazać swoje obliczenia i wszystkie sprawdzenia oraz ją zbudować; zgłasza, czego nie sprawdził (koncentracja naprężeń, zmęczenie, pełzanie tworzyw sztucznych). Zob. [Używaj PartCraft z asystentem AI](topic:use-with-ai-assistants).

### Naprawione w 0.8.1

- **Zamrożenie kursora w pełnym ekranie.** Wybór kursorem po najechaniu jest teraz ograniczany. Przyczyna to nasza najlepsza odpowiedź i nie została potwierdzona z osobą, która to zgłosiła.
- **Język w czasie działania.** Studio i spakowane wersje mogą zmieniać język podczas pracy; wcześniej były tylko po angielsku. Nie jest to jeszcze sprawdzone na każdej platformie: daj znać, jeśli język się nie zmienia.

### Jeszcze nie w tej wersji

- Połącz swoją AI nie jest skończone: połączenie jednym kliknięciem w Studio, hostowany łącznik dla AI w przeglądarce, własny klucz API w Studio i opublikowany pakiet MCP nie są obiecane. Studio nie ma własnej AI.
- Studio nie ma podpisu kodu: Windows może ostrzegać, a macOS wymaga kliknięcia prawym przyciskiem i wyboru Otwórz. Zob. [Rozwiązywanie problemów](topic:troubleshooting).
- Zestawienia tolerancji są nadal jednokierunkowe: zob. [Zestawienia tolerancji](topic:tolerance-stackup).
- Reszta jest wymieniona w [Czego jeszcze nie zbudowano](topic:not-built-yet).

Wcześniejsze zmiany są w [Co nowego w wersji 0.7](topic:whats-new-0-7).
