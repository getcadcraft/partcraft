---
title: Co nowego w 0.9 (wcześniej)
summary: PartCraft 0.9 dodaje zaokrąglenia między ścianami i pogrubianie w bryły, złożenia z tysiącami części, skarbiec dokumentów z rewizjami, dodatek Solid FEM do naprężeń, dziesięć metod łuków, brytyjskie profile stalowe, etap druku i dodatki do druku żywicznego.
keywords: co nowego 0.9, wcześniejsze wydanie, co nowego, what's new, informacje o wydaniu, dziennik zmian, 0.9, zaokrąglenie między ścianami, rolling ball, zaokrąglenie kilku krawędzi, pogrubienie, bryła z powierzchni, step shell, bryła IGES, zaokrąglenia ze skanu, duże złożenie, wyświetlanie uproszczone, 20000 części, dokumenty, skarbiec, pobranie do edycji, rewizja, wydanie, gdzie użyte, link Rhino, grasshopper, 3dm, kursory, hala produkcyjna, kolejka zadań, solid fem, element skończony, von Mises, częstość własna, metody łuków, łuk 3-punktowy, brytyjskie profile stalowe, blue book, etap druku, żywica, goo, ctb, stół, połóż płasko, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, analiza na żywo, aktualizuj podczas edycji, złam to, co pęka pierwsze, współczynnik obciążenia, nieliniowość, plastyczność, odkształcenie plastyczne, kontakt, calculix, badanie ruchu, prześwit, powierzchnie, nurbs, wygładź, kadłub, zebra, inżynier, generator, wygenerowana bryła, szkic ze zdjęcia, skalowanie do druku, podział do druku, skurcz, zagnieżdżone arkusze, g-code, rysunek, wymiaruj otwory, asystent, mcp, języki, wiersze paska narzędzi
from: 1dafd7c8
---

To, co zmieniło się w PartCraft 0.9 w porównaniu z 0.8.1. Powierzchnie swobodne zamykają się teraz w bryły, złożenia z tysiącami części pozostają użyteczne, skarbiec dokumentów przechowuje rewizje, a dodatek Solid FEM sprawdza naprężenia w części. Każdy punkt mówi, gdzie to znaleźć.

## Nowe w 0.9.1

- **Eksport dokładnego STEP.** {{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} i {{ui:STEP AP214 (dokładna bryła)}} działają teraz. Otwory, czopy, zaokrąglenia, stożki, sfery i tory są zapisywane na swoich prawdziwych powierzchniach, z prawdziwymi okręgami jako krawędziami, więc inny program CAD albo CAM może rozpoznać otwór jako otwór. Boki splajnów, modelowane gwinty i zaimportowane siatki pozostają płaskimi facetami w tej samej bryle. Zobacz [Eksport do druku, STEP i DXF](topic:export-files#for-other-cad-programs-step).
- **STEP na wejściu, dokładny STEP na wyjściu.** Otwarty plik STEP zachowuje własne płaskie ściany, walce, stożki, sfery i tory, więc {{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} zapisuje je z powrotem jako prawdziwe powierzchnie zamiast facetów: belka dostawcy z otworami na śruby wychodzi z tymi samymi ścianami, z którymi weszła, plus to, co w nią wyciąłeś. Splajnowe, przeciągnięte i obrócone ściany pliku pozostają facetami, tak samo jak bryły z STL, OBJ i 3MF. Otwórz plik STEP ponownie dla części zapisanej wcześniej. Zobacz [Otwórz plik STEP i buduj na nim](topic:import-step).
- **Prawdziwe okręgi w DXF ściany.** {{ui:Eksport}} › {{ui:DXF szkicu albo płaskiej ściany}} po wskazaniu płaskiej ściany zapisuje teraz okrągłe otwory jako okręgi, z własnym środkiem i promieniem otworu, dla stołu laserowego, plazmowego lub strumieniowego. Inne okrągłe krawędzie pozostają facetami.
- **Dokładny STEP dla warsztatu.** W {{ui:Wytwarzanie}} {{ui:Dokładny STEP (współrzędne obróbki)}} zapisuje część z początkiem w punkcie zerowym obróbki ustawienia i osią Z wzdłuż osi narzędzia, czyli współrzędnymi, których używa G-kod. Zobacz [Tworzenie ścieżek narzędzi i G-kodu](topic:manufacture#exact-step-for-the-shop).

## Nowe

### Powierzchnie i bryły

- **Zaokrąglenie między ścianami.** Wybierz {{ui:Powierzchnie}} w polu {{ui:Obszar roboczy}}, potem {{ui:Zaokrąglenie między ścianami}}. Wskaż dwie ściany jednej bryły i wpisz promień (oraz {{ui:Promień na końcu (mm, 0 = taki sam)}} dla promienia zmieniającego się wzdłuż krawędzi). Wiersz wyniku mówi, jak daleko zaokrąglenie jest od idealnej toczącej się kuli, a promień, który nie pasuje, jest odrzucany z nazwaną ścianą. {{ui:Zaokrąglenie kilku krawędzi}} zaokrągla wiele krawędzi jednym krokiem; zaznacz {{ui:Narożniki (płat sferyczny, gdy spotykają się trzy)}}, aby uzyskać narożnik sferyczny, w którym spotykają się trzy zaokrąglone krawędzie płaskich ścian. Zobacz [Powierzchnie swobodne (NURBS)](topic:nurbs-surfaces).
- **Pogrubienie w bryłę.** {{ui:Pogrub do bryły}} w tym samym obszarze roboczym nadaje powierzchni grubość; {{ui:Druga strona}} rozrasta ją w drugą stronę. Zagięcie albo samoprzecięcie jest odrzucane, z nazwaną powierzchnią i miejscem.
- **Bryły z powierzchni.** Przycięte powierzchnie mogą być łączone sumą, różnicą i częścią wspólną i wpisywane w część jako jeden krok cofnięcia. STEP zapisuje bryłę jako jedną zamkniętą powłokę, a IGES jako jedną bryłę; obie czytają się z powrotem jako bryła. Jeśli ściany nie pasują do siebie krawędź po krawędzi, plik dostaje osobne ściany, a wiersz statusu to mówi. Bryły można też tworzyć w edytorze węzłów; zobacz [Edytor węzłów](topic:nodes).
- **Zaokrąglenia obrzeża i zmienne w skanach.** Gdy dopasowujesz powierzchnie do skanu, szuka się też zaokrągleń obrzeża (tory) i zaokrągleń o zmiennym promieniu wzdłuż dość prostej krawędzi, i są wymieniane z ich promieniem. Testowano to tylko na zmyślonych skanach.

### Złożenia, dokumenty i powiązania

- **Duże złożenia.** Części będące kopiami dzielą jedną siatkę, a {{ui:Widoki}} › {{ui:Wyświetlanie uproszczone}} rysuje pudełka, tak aby widok nadal się przesuwał (włącza się samo przy bardzo dużych złożeniach; wskazywanie i przeguby nadal używają prawdziwych części). Drzewo części pokazuje swoje pierwsze wiersze i przycisk {{ui:Pokaż 700 więcej}} dla reszty. Pliki złożeń mogą mieć do 50 000 wystąpień i 100 000 przegubów. Zobacz [Zbuduj złożenie](topic:build-assembly).
- **Dokumenty.** {{ui:Dokumenty…}} w grupie **Plik** otwiera okno nad folderem projektu: pobranie do edycji i zwrot, litery rewizji, stany (w toku, do przeglądu, zwolniony, nieaktualny), historia, gdzie użyte i zestawienie materiałów. Zobacz [Dokumenty i rewizje (skarbiec)](topic:documents-walkthrough).
- **Żywe łącze z Rhino.** Jeden skrypt, `cadcraft_link.py`, obserwuje dokument Rhino albo Grasshopper i wysyła do PartCraft tylko to, co się zmieniło; zaimportowany element przebudowuje się na nowym kształcie. Działa jednokierunkowo i wymaga Studio. Zobacz [Żywe łącze .3dm](topic:live-3dm-link).
- **Widzenie kursorów nawzajem.** We wspólnej sesji kursor każdej osoby pokazuje się z jej imieniem i wybranym elementem. Zobacz [Pracuj na żywo z innymi](topic:work-live).
- **Hala produkcyjna.** Włącz dodatek Hala produkcyjna w {{ui:Ustawienia}} › {{ui:Dodatki}}. Po wysłaniu programu w {{ui:Wytwarzanie}} jego karta może {{ui:Dodaj do kolejki zadań hali}} albo {{ui:Zapisz jako plik zadania}}. Nigdy nie wysyła ani nie uruchamia maszyny.

### Analiza i części

- **Dodatek Solid FEM.** Włącz {{ui:Solid FEM}} w {{ui:Ustawienia}} › {{ui:Dodatki}} (jest wyłączony, dopóki tego nie zrobisz), a w prawym panelu pojawi się karta {{ui:Solid FEM}}. {{ui:Utwórz siatkę części}}, wskaż stałe ściany i obciążenia w widoku 3D, {{ui:Rozwiąż}}, a przemieszczenie, naprężenie von Mises albo postać drgań narysuj przez {{ui:Pokaż na modelu}}. Zobacz [Solid FEM: sprawdzenie naprężeń](topic:solid-fem-check).
- **Łuk w szkicach, dziesięcioma sposobami.** Strzałka obok {{ui:Łuk}} na pasku szkicu wymienia: 3-punktowy, Początek–Środek–Koniec, Początek–Środek–Kąt, Początek–Środek–Długość, Początek–Koniec–Kąt, Początek–Koniec–Kierunek, Początek–Koniec–Promień, Środek–Początek–Koniec, Środek–Początek–Kąt, Środek–Początek–Długość oraz Kontynuuj. Zobacz [Narysuj łuk dziesięcioma metodami](topic:sketch-arc-methods).
- **Brytyjskie profile stalowe.** Konstrukcje spawane mogą używać 976 brytyjskich profili (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); wpisz rozmiar, np. `305x165x40 UB`. Zobacz [Elementy konstrukcyjne](topic:structural-members).

### Druk

- **Etap druku.** Przycisk {{ui:Etap druku}} na pasku narzędzi (dodatek 3D Print, domyślnie włączony) układa bryły części na przerywanym stole: {{ui:Rozłóż na płasko}}, {{ui:Obróć 90°}}, {{ui:Rozmieść na stole}}, {{ui:Dopasuj wszystkie na stole}}, {{ui:Podgląd warstw}}, potem {{ui:Wyślij do drukarki 3D}} przez USB, Klipper (Moonraker), OctoPrint albo PrusaLink. Nic nie jest wysyłane, dopóki nie potwierdzisz, a twoja część nigdy nie jest zmieniana. Dla pliku STL albo 3MF zobacz [Przygotuj część do druku 3D](topic:print-3d).
- **Druk żywiczny.** Dodatki w {{ui:Ustawienia}} › {{ui:Dodatki}}, wszystkie wyłączone, dopóki ich nie włączysz: program do cięcia na warstwy (slicer) żywicy, test ekspozycji oraz formaty plików Elegoo GOO, SL1, Chitubox CBDDLP/CTB i Anycubic. Cięcie działa w osobnym wątku, więc strona pozostaje responsywna.

## We wszystkich aplikacjach

- Każda podpowiedź po najechaniu to dymek Bootstrap.
- Wskazówka startowa ma przycisk zamknięcia; pozostaje zamknięta.
- Rząd kart panelu, który się nie mieści, przewija się w bok zamiast być ucinany.
- Karta przeglądarki pokazuje nazwę otwartego dokumentu przed PartCraft | CadCraft.
- {{ui:Ustawienia}} pokazuje {{ui:Układ}} obszaru roboczego jako listę rozwijaną z wyborem, a pole języka wymienia każdy język, jaki zawiera wersja.
- Waga i temperatura są rodzajami jednostek w ustawieniach jednostek.

## Naprawiono

- Menu Łuk w szkicu wymienia teraz każdą metodę.
- Pasek narzędzi dodatków i tytuł karty przeglądarki zostały poprawione 2026-11-09.

## Uczciwe ograniczenia

- Dokładny STEP został odczytany w OpenCascade (poprawne bryły, objętości zgodne z obliczeniami ręcznymi). Nie został jeszcze otwarty we wszystkich programach CAD albo CAM, a złożenie nie jest zapisywane jako dokładny STEP.
- Nic nie zostało wydrukowane na prawdziwej drukarce. Cięcie na warstwy, G-kod i pliki żywiczne zostały odczytane przez nasze własne programy albo zastępczą drukarkę; żaden format żywiczny nie został załadowany na drukarkę, a rozmiary drukarek i ekspozycje są punktem wyjścia.
- Solid FEM jest liniowy, izotropowy i sprężysty, z jednym materiałem na część, bez kontaktu, uplastycznienia i wyboczenia. Naprężenie przy stałych ścianach i ostrych narożnikach zależy od siatki. To pomoc w sprawdzaniu, a nie przegląd przez inżyniera.
- Czasy dla dużych złożeń pochodzą z serwera bez GPU; pełna klatka 20 000 części nadal zajmuje tam sekundy.
- Zaokrąglenia działają na parach ścian; nie ma ogólnego połączenia wierzchołków ani zaokrąglenia między ścianami, które się nie stykają.
- Link Rhino nigdy nie działał w prawdziwym Rhino ani Grasshopperze. Dokumenty wypróbowano przez dwa programy na jednym folderze, a nie przez dwie osoby na udziale sieciowym.
- Dopasowanie powierzchni do prawdziwego skanu nie zostało jeszcze ręcznie sprawdzone. Języki inne niż angielski są wstępnymi tłumaczeniami maszynowymi.
- Instalatory Windows nie mają podpisu kodem, a obraz dysku macOS nie jest notaryzowany. Zobacz [Rozwiązywanie problemów](topic:troubleshooting).

Wcześniejsze zmiany są w [Co nowego w 0.7](topic:whats-new-0-7).

## Wcześniej: 0.8 i 0.8.1

To, co zmieniło się w PartCraft 0.8 i 0.8.1 w porównaniu z 0.7. Symulacja odpowiada podczas edycji i mówi, co pęka pierwsze, złożenia zyskują badania ruchu, a nowe obszary robocze tworzą powierzchnie swobodne i części o rozmiarach wynikających z fizyki. 0.8.1 to małe wydanie naprawcze.

### Nowe

**Symulacja**

- **Aktualizuj podczas edycji.** Zaznacz {{ui:Aktualizuj, gdy edytuję}} w bloku Rozwiąż, a odpowiedzi podążą za twoimi zmianami. Zmień wymiar, obciążenie albo materiał, a szybka odpowiedź, policzona z elementami cztery razy większymi, pojawi się od razu; gdy zatrzymasz się na około sekundę, udoskonalona odpowiedź badania zastępuje ją. Wyniki mówią, którą odpowiedź oglądasz. Na stalowym wsporniku wspornikowym szybka odpowiedź była w granicach 1 % dla ugięcia i około 4 % dla naprężenia względem udoskonalonej. Zobacz [Sprawdź naprężenie i ugięcie](topic:simulation#update-while-you-edit-live).
- **Co pęka pierwsze.** Dla badania statycznego albo wyboczeniowego {{ui:Co pęka pierwsze?}} w bloku **Złam to** skaluje obciążenia, aż część ulegnie. Wymienia od najgorszego współczynnik obciążenia do pierwszej granicy plastyczności (czerwony znacznik tam, gdzie naprężenie jest największe) i współczynnik obciążenia do wyboczenia. Współczynnik poniżej 1 oznacza, że część już ulega przy zadanym obciążeniu, a panel Problemy pokazuje błąd. Współczynniki pochodzą z badania liniowego, więc są tak dobre, jak ono. Zobacz [Sprawdź naprężenie i ugięcie](topic:simulation#find-out-what-breaks-first-break-it).
- **Uplastycznienie i kontakt.** Dwa kolejne typy badań: nieliniowe, w którym materiał podąża za prostą aż do granicy plastyczności, a potem za łagodniejszym nachyleniem, z wykreślonym odkształceniem plastycznym; oraz kontaktowe, w którym oddzielne części napierają na siebie (bez tarcia) albo są sklejone (połączone). Krok obciążenia, który nie może się ustabilizować, albo części zanurzające się zbyt głęboko w siebie, są pokazywane w panelu Problemy. Tarcie, duże poślizgi, duże obroty, duże ugięcia i zmęczenie nie są rozwiązywane. Zobacz [Sprawdź naprężenie i ugięcie](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Pliki dla CalculiX.** {{ui:Eksport}} › {{ui:Plik CalculiX (.inp)}} zapisuje badanie dla CalculiX, osobnego programu, który sam instalujesz i uruchamiasz; {{ui:Eksport}} › {{ui:Wyniki CalculiX (.frd)}} odczytuje z powrotem jego plik wyników na tę samą siatkę. PartCraft nigdy nie uruchamia tego programu i mówi, jeśli część zmieniła się od zapisania pliku.

**Złożenia**

- **Badania ruchu.** {{ui:Złożenie}} › {{ui:Ruch}} napędza wartość jednego przegubu w czasie, który podajesz (stała prędkość, łagodna, sinusoidalna albo w tę i z powrotem), ustawia złożenie w każdym kroku z przegubami i zamkniętymi pętlami i raportuje, co się zderza i jak blisko podchodzą części. {{ui:Dodaj punkt}} wykreśla położenie punktu, prędkość i przyspieszenie, wartość przegubu i prześwit w czasie; {{ui:Zapisz CSV}} i {{ui:Zapisz wykres}} zapisują je. Po {{ui:Uruchom}} pasek Krok przez przebieg przesuwa złożenie do dowolnego kroku. Ustawienia badania są zapisywane w pliku złożenia. Prędkość i przyspieszenie pochodzą z zapisanych położeń, więc użyj większej liczby kroków, jeśli ostry szczyt wychodzi zaniżony. Zobacz [Sprawdź złożenie pod kątem kolizji i ruchu](topic:check-assembly#a-motion-study).

**Powierzchnie i części z fizyki**

- **Obszar Powierzchnie.** Wybierz {{ui:Powierzchnie}} w polu {{ui:Obszar roboczy}}, aby uzyskać krzywe i powierzchnie NURBS obok części: {{ui:Krzywa}}, {{ui:Loft}}, {{ui:Przeciągnięcie}}, {{ui:Dopasuj}} i {{ui:Zebra}}, z ciągłością (G0, G1 albo G2) mierzoną na dokładnych powierzchniach i krawędzią gorszą, niż prosiłeś, wymienioną w Problemach z poprawką Dopasuj. {{ui:Wygładź}} mierzy linie kadłuba pod kątem punktów przegięcia i skoków krzywizny i odbudowuje nieładne w ramach tolerancji. Powierzchnie są zapisywane w pliku części i nie zmieniają elementów części. Zobacz [Powierzchnie swobodne (NURBS)](topic:nurbs-surfaces).
- **Obszar Inżynier.** Wybierz {{ui:Inżynier}} w przełączniku obszarów, wybierz generator i kliknij {{ui:Nowy}}: skrypt dobiera wymiary części z tego, co ma robić (przenieść ciepło, przepływy, ciśnienie, materiał, proces druku), używając podręcznikowych wzorów, i ją buduje, po czym podaje użyte liczby wraz ze źródłami, sprawdzenia wytwórcze i pliki dla narzędzi analizy. Te same dane dają tę samą część na każdym komputerze. Generator jest zachowywany w części, a otwarcie części nigdy nie uruchamia skryptu. Zobacz [Części z fizyki: generatory](topic:engineer-generators) i [Napisz generator](topic:write-a-generator).

**Szkicowanie, rysunki i wytwarzanie**

- **Szkic ze zdjęcia.** {{ui:Elementy}} › {{ui:Więcej}} › {{ui:Szkic ze zdjęcia…}} śledzi obraz płaskiej części na zwykłym tle (zarys i otwory) albo rysunek piórkiem, zamieniając go na linie, łuki i okręgi. Podajesz jedną długość, sprawdzasz podgląd i tworzysz szkic. Zobacz [Podstawy szkicowania](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalowanie i podział do druku.** {{ui:Eksport}} › {{ui:Skaluj do druku (STL lub 3MF)…}} skaluje osobno na każdej osi bez zmiany części, na przykład o zapas na skurcz. {{ui:Eksport}} › {{ui:Podziel do druku (zip z częściami)…}} tnie część za dużą na twój stół na ponumerowane kawałki złączone kołkami, klinami, jaskółczymi ogonami, otworami na kołki albo kieszeniami na magnesy. Zobacz [Drukuj w 3D](topic:print-3d).
- **Zagnieżdżone arkusze do G-kodu.** {{ui:Eksport}} › {{ui:Zagnieżdżone arkusze do G-kodu}} czyta zagnieżdżony DXF i tworzy jeden program na arkusz przez wybrany przez ciebie postprocesor: najpierw otwory i wycięcia, potem zarysy. Nie planuje wejść, kolejności cięcia ani wspólnych krawędzi. Zobacz [Układanie płaskich części na arkuszach](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Rysunki, które robią więcej same.** {{ui:Arkusz}} › {{ui:Automatycznie}} wybiera najmniejszy arkusz formatu A, który mieści widoki w największej standardowej skali do 1:1. {{ui:Wymiaruj otwory}} stawia znacznik środka na każdym otworze, jedno odniesienie na rozmiar i położenia od lewego dolnego rogu widoku. Zobacz [Wykonaj rysunek](topic:drawing-pdf).

**We wszystkich aplikacjach**

- **Języki.** Aplikacje są dostępne w 54 językach. Te inne niż angielski są wstępnymi tłumaczeniami maszynowymi, dopóki nie przeczyta ich native speaker.
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} wybiera Zawijanie (jak dotąd), 2 wiersze albo 1 wiersz; pasek, który się nie mieści, przewija się w bok. Wstążka elementów PartCraft pokazuje najczęściej używane narzędzie dużo, a warianty chowa za przyciskiem dzielonym.
- **Podłącz swoją AI.** Studio jest centrum do podłączenia własnego asystenta do wszystkich ośmiu aplikacji, z uprawnieniem tylko do odczytu, sugerowania albo edycji dla każdej aplikacji. Podłączony asystent może dobrać wymiary części z jednego zdania, na przykład wspornika na obciążenie, pokazać swoje obliczenia i każde sprawdzenie, i ją zbudować; zgłasza, czego nie sprawdził (koncentracja naprężeń, zmęczenie, pełzanie tworzyw). Zobacz [Używaj PartCraft z asystentem AI](topic:use-with-ai-assistants).

### Naprawiono w 0.8.1

- **Zamrożenie kursora przy pełnym ekranie.** Wskazywanie po najechaniu jest teraz ograniczane. Przyczyna to nasza najlepsza ocena i nie została potwierdzona z osobą, która to zgłosiła.
- **Język w czasie działania.** Studio i pakietowe wydania mogą zmienić język podczas działania; wcześniej były tylko po angielsku. Nie zostało to jeszcze przetestowane na każdej platformie: daj nam znać, jeśli język się nie zmienia.

### Jeszcze nie w tej wersji

- Podłącz swoją AI nie jest skończone: podłączenie jednym kliknięciem w Studio, hostowany łącznik dla AI w przeglądarce, własny klucz API w Studio i opublikowany pakiet MCP nie są obiecane. Studio nie ma własnej AI.
- Studio nie ma podpisu kodem: Windows może ostrzegać, a macOS prosi o prawy przycisk, potem Otwórz. Zobacz [Rozwiązywanie problemów](topic:troubleshooting).
- Łańcuchy tolerancji nadal działają jednokierunkowo: zobacz [Łańcuchy tolerancji](topic:tolerance-stackup).
- Reszta jest wymieniona w [Czego jeszcze nie zbudowano](topic:not-built-yet).

Wcześniejsze zmiany są w [Co nowego w 0.7](topic:whats-new-0-7).
