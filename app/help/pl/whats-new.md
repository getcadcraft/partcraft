---
title: Co nowego w 0.8 i 0.8.1
summary: PartCraft 0.8 dodaje analizę na żywo podczas edycji, sprawdzenie „Co pęka pierwsze”, badania plastyczne i kontaktowe z plikami wejściowymi dla zewnętrznego solvera, badania ruchu dla złożeń, przestrzeń Powierzchnie dla swobodnych powierzchni, części dobierane na podstawie fizyki w obszarze Inżynier, szkic ze zdjęcia, eksport do druku, zagnieżdżone arkusze do G-code oraz rysunki, które wymiarują swoje otwory. 0.8.1 naprawia zawieszanie się kursora przy pełnym ekranie.
keywords: co nowego, what's new, informacje o wydaniu, dziennik zmian, zmiany, 0.8, 0.8.1, wersja, nowe funkcje, analiza na żywo, aktualizacja podczas edycji, złam to, co pęka pierwsze, współczynnik obciążenia, nieliniowy, granica plastyczności, odkształcenie plastyczne, kontakt, calculix, badanie ruchu, luz, powierzchnie, nurbs, wygładź, kadłub, zebra, inżynier, generator, wygenerowana bryła, szkic ze zdjęcia, skalowanie do druku, podział do druku, skurcz, zagnieżdżone arkusze, g-code, rysunek, wymiarowanie otworów, asystent, mcp, języki, wiersze paska narzędzi
from: 62e4dce2
---

To, co zmieniło się w PartCraft 0.8 i 0.8.1 w porównaniu z 0.7. Symulacja odpowiada podczas edycji i mówi, co pęka pierwsze, złożenia dostają badania ruchu, a nowe obszary robocze tworzą swobodne powierzchnie i części dobierane na podstawie fizyki. 0.8.1 to niewielka wersja naprawcza.

## Nowe

### Symulacja

- **Aktualizuj, gdy edytuję.** Zaznacz {{ui:Aktualizuj, gdy edytuję}} w bloku Rozwiąż, a wyniki będą podążać za Twoimi zmianami. Zmień wymiar, obciążenie lub materiał, a od razu pojawi się szybka odpowiedź, policzona na elementach cztery razy większych; gdy przestaniesz edytować na około sekundę, dokładniejsza odpowiedź badania zastąpi ją. Wyniki pokazują, którą odpowiedź oglądasz. Dla stalowej belki wspornikowej szybka odpowiedź mieściła się w 1 % dla ugięcia i w około 4 % dla naprężeń względem dokładniejszej. Zobacz [Sprawdź naprężenia i ugięcie](topic:simulation#update-while-you-edit-live).
- **Co pęka pierwsze.** Dla badania statycznego lub wyboczenia {{ui:Co pęka pierwsze?}} w bloku **Złam to** skaluje obciążenia, aż część ulegnie. Lista, od najgorszego, podaje współczynnik obciążenia do pierwszej granicy plastyczności (z czerwonym znacznikiem tam, gdzie szczyt naprężeń) oraz współczynnik obciążenia do wyboczenia. Współczynnik poniżej 1 oznacza, że część już ulega przy obecnym obciążeniu, a Problemy pokazują błąd. Współczynniki pochodzą z badania liniowego, więc są tak dobre, jak ono. Zobacz [Sprawdź naprężenia i ugięcie](topic:simulation#find-out-what-breaks-first-break-it).
- **Plastyczność i kontakt.** Dwa kolejne typy badań: nieliniowe, w którym materiał podąża za prostą aż do granicy plastyczności, a potem za łagodniejszym nachyleniem, z wykreślonym odkształceniem plastycznym, oraz kontaktowe, w którym oddzielne części napierają na siebie (bez tarcia) lub pozostają zespolone (połączone). Krok obciążenia, który nie może się ustabilizować, oraz części wchodzące w siebie zbyt głęboko pokazują się w panelu Problemy. Tarcie, duże poślizgi, duże obroty, duże ugięcia i zmęczenie nie są rozwiązywane. Zobacz [Sprawdź naprężenia i ugięcie](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Pliki wejściowe dla CalculiX.** {{ui:Eksport}} › {{ui:Plik wejściowy CalculiX (.inp)}} zapisuje badanie dla CalculiX, osobnego programu, który instalujesz i uruchamiasz sam; {{ui:Eksport}} › {{ui:Wyniki CalculiX (.frd)}} wczytuje z powrotem jego plik wyników na tę samą siatkę. PartCraft nigdy nie uruchamia tego programu i informuje, jeśli część zmieniła się po zapisaniu pliku wejściowego.

### Złożenia

- **Badania ruchu.** {{ui:Złożenie}} › {{ui:Ruch}} steruje wartością jednego połączenia w czasie, który podajesz (stała prędkość, łagodnie, sinusoida albo w przód i z powrotem), ustawia złożenie w każdym kroku wraz z jego połączeniami i zamkniętymi pętlami oraz raportuje, które części kolidują i jak blisko się zbliżają. {{ui:Dodaj punkt}} wykreśla w czasie położenie punktu, prędkość i przyspieszenie, wartość połączenia oraz luz; {{ui:Zapisz CSV}} i {{ui:Zapisz wykres}} zapisują je na dysku. Po {{ui:Uruchom}} pasek przebiegu z krokowaniem przenosi złożenie do dowolnego kroku. Ustawienia badania są zapisywane w pliku złożenia. Prędkość i przyspieszenie wynikają z zapisanych położeń, więc przy ostrym szczycie użyj większej liczby kroków, jeśli odczyt jest zaniżony. Zobacz [Sprawdź złożenie pod kątem kolizji i ruchu](topic:check-assembly#a-motion-study).

### Powierzchnie i części z fizyki

- **Przestrzeń Powierzchnie.** Wybierz {{ui:Powierzchnie}} w polu {{ui:Obszar roboczy}}, aby zobaczyć krzywe i powierzchnie NURBS obok części: {{ui:Krzywa}}, {{ui:Loft}}, {{ui:Przeciągnięcie}}, {{ui:Dopasuj}} i {{ui:Zebra}}, z ciągłością (G0, G1 lub G2) mierzoną na dokładnych powierzchniach. Krawędź gorsza, niż zamówiłeś, jest wymieniona w Problemach z poprawką {{ui:Dopasuj}}. {{ui:Wygładź}} mierzy linie kadłuba pod kątem przegięć i skoków krzywizny i odbudowuje nierówne w ramach Twojej tolerancji. Powierzchnie są zapisywane w pliku części i nie zmieniają jej elementów. Zobacz [Powierzchnie swobodne (NURBS)](topic:nurbs-surfaces).
- **Obszar roboczy Inżynier.** Wybierz {{ui:Inżynier}} w przełączniku obszaru roboczego, wybierz generator i wybierz {{ui:Nowy}}: skrypt dobiera wymiary części na podstawie tego, co ma robić (przenoszenie ciepła, przepływy, ciśnienie, materiał, proces druku), stosuje podręcznikowe wzory i buduje ją, a następnie podaje użyte liczby wraz ze źródłami, sprawdzenia produkcyjne oraz pliki dla narzędzi analitycznych. Te same dane dają tę samą część na każdym komputerze. Generator jest zapisany w części, a otwarcie części nigdy nie uruchamia skryptu. Zobacz [Części z fizyki: generatory](topic:engineer-generators) i [Napisz generator](topic:write-a-generator).

### Szkicowanie, rysunki i wytwarzanie

- **Szkic ze zdjęcia.** {{ui:Elementy}} › {{ui:Więcej}} › {{ui:Szkic ze zdjęcia…}} obrysowuje zdjęcie płaskiej części na jednolitym tle (kontur i otwory) albo rysunek długopisem na linie, łuki i okręgi. Podajesz jeden wymiar, sprawdzasz podgląd i tworzysz szkic. Zobacz [Podstawy szkicowania](topic:sketch-basics#a-sketch-from-a-photo).
- **Skalowanie i podział do druku.** {{ui:Eksport}} › {{ui:Skaluj do druku (STL lub 3MF)…}} skaluje osobno każdą oś bez zmiany części, na przykład o naddatek na skurcz. {{ui:Eksport}} › {{ui:Podziel do druku (zip z częściami)…}} tnie część zbyt dużą na stół drukarki na ponumerowane części łączone kołkami, kluczami, jaskółczymi ogonami, otworami na kołki lub kieszeniami na magnesy. Zobacz [Drukowanie 3D](topic:print-3d).
- **Zagnieżdżone arkusze do G-code.** {{ui:Eksport}} › {{ui:Zagnieżdżone arkusze do G-code}} czyta zagnieżdżony plik DXF i tworzy jeden program na arkusz, przez wybrany postprocesor: najpierw otwory i wycięcia, potem kontury. Nie planuje wejść narzędzia, kolejności cięcia ani wspólnych krawędzi. Zobacz [Zagnieżdżanie płaskich części na arkuszach](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Rysunki, które robią więcej same.** {{ui:Arkusz}} › {{ui:Automatycznie}} wybiera najmniejszy arkusz formatu A, który mieści widoki w największej standardowej skali, nie większej niż 1:1. {{ui:Wymiaruj otwory}} stawia znacznik środka na każdym otworze, jedno wyniesienie na rozmiar oraz położenia liczone od lewego dolnego rogu widoku. Zobacz [Utwórz rysunek](topic:drawing-pdf).

### We wszystkich aplikacjach

- **Języki.** Aplikacje są dostępne w 54 językach. Te poza angielskim są wersjami roboczymi tworzonymi maszynowo, dopóki nie przeczyta ich rodzimy użytkownik języka.
- **Wiersze paska narzędzi.** {{ui:Ustawienia}} › {{ui:Ogólne}} › {{ui:Wiersze paska narzędzi}} wybiera Zawijanie (jak dotąd), 2 wiersze lub 1 wiersz; pasek, który się nie mieści, przewija się w bok. Wstążka Elementy w PartCraft pokazuje najczęściej używane narzędzie dużym przyciskiem, a warianty chowa za przyciskiem dzielonym.
- **Połącz swoje AI.** Studio to centrum do podłączania własnego asystenta do wszystkich ośmiu aplikacji, z uprawnieniem tylko do odczytu, do sugerowania lub do edycji dla każdej aplikacji. Podłączony asystent może dobrać część na podstawie zdania, na przykład wspornika pod obciążenie, pokazać swoje obliczenia i wszystkie sprawdzenia oraz ją zbudować; podaje też, czego nie sprawdził (koncentracja naprężeń, zmęczenie, pełzanie tworzyw). Zobacz [Używanie PartCraft z asystentem AI](topic:use-with-ai-assistants).

## Naprawiono w 0.8.1

- **Zawieszanie kursora przy pełnym ekranie.** Podgląd wskazania po najechaniu jest teraz ograniczany. Przyczyna to nasza najlepsza ocena; nie została potwierdzona z osobą, która zgłosiła problem.
- **Język w czasie działania.** Studio i wersje spakowane mogą przełączać język w trakcie pracy; wcześniej były tylko angielskie. Nie zostało to jeszcze sprawdzone na każdej platformie: daj nam znać, jeśli język się nie zmienia.

## Jeszcze nie w tej wersji

- Połączenie z AI nie jest jeszcze gotowe: połączenie jednym kliknięciem w Studio, zdalny konektor dla AI w przeglądarce, własny klucz API w Studio i opublikowany pakiet MCP nie są obiecane. Studio nie ma własnej AI.
- Studio nie ma podpisu kodu: Windows może wyświetlać ostrzeżenie, a macOS wymaga kliknięcia prawym przyciskiem, a następnie Otwórz. Zobacz [Rozwiązywanie problemów](topic:troubleshooting).
- Łańcuchy tolerancji są nadal jednokierunkowe: zobacz [Łańcuchy tolerancji](topic:tolerance-stackup).
- Reszta jest wymieniona w [Czego jeszcze nie zbudowano](topic:not-built-yet).

Wcześniejsze zmiany są w [Co nowego w 0.7](topic:whats-new-0-7).
