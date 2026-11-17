---
title: Twórz ścieżki narzędzi i G-kod (Manufacture)
summary: Ustaw surowiec i początek obróbki, wybierz narzędzia, dodaj operacje Ściana, Kieszeń, Kontur, Wiercenie i Fazka przez wskazywanie ścian, wykończ cały model w 3D (równolegle, scallop), symuluj surowiec względem modelu pod kątem wgryzień i czasu cyklu oraz pobierz G-kod z jednego z trzech wbudowanych postprocesorów albo z własnego.
keywords: exact step, STEP dla warsztatu, współrzędne obróbki, przekazanie CAM, równolegle, scallop, wykańczanie 3D, wykańczanie, frez kulisty, biblioteka narzędzi, edytuj post, własny post, edytor postprocesora, adaptacyjne, czyszczenie adaptacyjne, stałe zaangażowanie, trochoidalne, hsm, obróbka wysokoprędkościowa, manufacture, CAM, ścieżka narzędzia, G-code, NC, CNC, frez, frezowanie, kieszeń, kontur, profil, planowanie powierzchni, wiercenie, wiercenie przerywane, G83, G81, G73, fazka, surowiec, przesunięcie układu, G54, postprocesor, GRBL, LinuxCNC, posuwy i prędkości, symulacja, wgryzienie, czas cyklu
from: beeb29aa
---

Obszar roboczy Manufacture zamienia część na ścieżki narzędzi dla frezarki 3-osiowej i zapisuje je jako G-kod. Większość operacji to **2,5-osiowe**: narzędzie stoi pionowo, ściany są cięte prosto w dół, a dna płasko. **Równolegle** i **Scallop** wykańczają zakrzywione powierzchnie w 3D (zob. [Wykańczanie 3D](topic:finish-3d)); narzędzie nadal stoi pionowo (trzy osie, bez przechylania). Działa na nazwanych ścianach, które jądro siatki nadaje części (zob. [Jądro siatki](topic:solid-kernels)).

Wersja laboratoryjna: sprawdź każdy program w symulatorze własnego sterowania i najpierw uruchom go w powietrzu nad surowcem.

## Konfiguracja

1. Wybierz **Manufacture** w przełączniku obszarów roboczych, a potem {{ui:Nowe ustawienie}}.
2. Na karcie **Ustawienie** wybierz:
   - **Oś narzędzia (+Z)**: w którą stronę narzędzie wchodzi w część. Domyślnie świat +Y (góra w PartCraft); wtedy oś X maszyny to X świata, a oś Y maszyny to −Z świata.
   - **Początek obróbki (G54)**: narożnik lub środek surowca, góra lub dół, górny środek modelu albo początek modelu.
   - **Surowiec**: prostopadłościan lub walec, albo model z naddatkami (boki, góra, dół), albo stały rozmiar.
   - **Materiał** (ustawia początkowe posuwy i prędkości), **post** (sterowanie), maksymalną prędkość wrzeciona maszyny, prędkość posuwu szybkiego i czas zmiany narzędzia, chłodziwo oraz numer programu.

## Narzędzia

Karta **Narzędzia** zawiera bibliotekę: frezy palcowe płaskie, kuliste i z zaokrąglonym narożnikiem, wiertła, frezy do fazowania i frezy czołowe, każdy z numerem T, średnicą, liczbą ostrzy i długością części tnącej (plus promień narożnika, kąt wierzchołka lub fazki, tam gdzie dotyczy).

Moje narzędzia mogą być zapisane w przeglądarce i przenoszone między komputerami jako plik: zob. [Biblioteka narzędzi](topic:tool-library).

Prędkość wrzeciona i posuw pochodzą z materiału: n = 1000 × prędkość skrawania / (π × średnica), posuw = n × liczba ostrzy × posuw na ostrze (wiertła: n × posuw na obrót). Liczby to ostrożne wartości początkowe z opublikowanych zakresów, a nie dostrojone do konkretnej maszyny; aby je nadpisać, wpisz prędkość skrawania, posuw na ostrze, obr./min albo posuw podany przez producenta narzędzia. Gdy prędkość przekroczy maksimum maszyny, zostaje na nim, a posuw idzie za nią, zachowując posuw na ostrze.

## Dodawanie operacji

Każdy przycisk na pasku dodaje operację, a tam, gdzie potrzebna jest geometria, uruchamia wskazywanie: kliknij ściany lub krawędzie w widoku (ponowne kliknięcie usuwa wybór), a potem {{ui:Zakończ wskazywanie}} albo {{key:Esc}}.

| Operacja | Wskaż | Co robi |
|---|---|---|
| {{ui:Ściana}} | nic | Zygzakowate przejazdy po całym surowcu, poza jego krawędziami, w dół do góry modelu |
| {{ui:Kieszeń}} | płaską ścianę dna, okrągły otwór albo zamknięty łańcuch krawędzi | Czyści obszar przesuniętymi przejazdami od środka na zewnątrz, na każdej głębokości; wyspy (ściany stojące wewnątrz dna) zostają; dno otwarte dookoła (nic wyższego na zewnątrz) jest czyszczone aż do krawędzi surowca |
| {{ui:Adaptacyjne}} | tak samo jak Kieszeń | Czyści ten sam obszar przejazdami, z których każdy tnie ustaloną szerokość (**Zaangażowanie**, ułamek średnicy), więc frez nigdy nie tnie pełnej szerokości rowka, nawet w narożnikach; wchodzi po helisie i wykańcza ściany na każdym poziomie. Wąskie cięcia pozwalają na głębsze zagłębienie i wyższy posuw |
| {{ui:Kontur}} | płaską ścianę (jej obrys), okrągłą ścianę albo krawędzie | Podąża za obrysem przesuniętym o promień narzędzia, na zewnątrz lub do wewnątrz, z łukami dojazdu i wyjazdu oraz opcjonalnymi mostkami |
| {{ui:Wiercenie}} | otwory (kliknij ścianę otworu albo jego krawędź) | Wierci każdy otwór cyklem stałym: przerywanym (G83), wierceniem (G81) albo łamaniem wiórów (G73); albo podaj średnicę, aby wywiercić każdy otwór tej średnicy |
| {{ui:Fazka}} | obrys ściany albo krawędzie | Prowadzi frez do fazowania wzdłuż krawędzi tak, aby wyciął zadaną szerokość |
| {{ui:Równoległość}} | nic (cały model) | Wykańczanie 3D równoległymi liniami pod dowolnym kątem, podążając za powierzchnią frezem kulistym, z zaokrągleniem lub płaskim. Zob. [Wykańczanie 3D](topic:finish-3d) |
| {{ui:Grzebieniowe (scallop)}} | nic (cały model) | Wykańczanie 3D w przejazdach oddalonych o ustaloną odległość na powierzchni, tak aby grzbiet między nimi miał zadaną wysokość |

Zaznacz operację na liście, aby zmienić jej narzędzie, wysokości (prześwit, wycofanie, wysokość posuwu, góra, dół), głębokość skrawania, krok boczny, naddatek do pozostawienia, przejście wykończeniowe, wejście (helisa, rampa lub zagłębienie), frezowanie współbieżne, mostki lub cykl. {{ui:W górę}} i {{ui:W dół}} zmieniają kolejność, {{ui:Wyłącz}} pomija ją, {{ui:Usuń}} ją usuwa. Wszystko jest w historii cofania i zapisane w pliku części.

Krok boczny kieszeni wynosi najwyżej połowę średnicy narzędzia, więc każdy punkt jej dna leży w odległości jednego promienia narzędzia od przejścia. W narożnikach wewnętrznych zachowywany jest promień narzędzia.

**Czyszczenie adaptacyjne** utrzymuje zaangażowanie frezu blisko jednej wartości. Zaangażowanie 0.15 średnicy to kąt zaangażowania około 46°: łuk krawędzi frezu w materiale. Kieszeń przesunięta natomiast tnie pełną szerokość w pierwszym przejściu i owija się dalej w każdym narożniku wewnętrznym. Między przejściami narzędzie zostaje w dół tam, gdzie porusza się przez już wycięty obszar, a w pozostałych miejscach podnosi się i opuszcza w już wyciętym obszarze. Przejścia są wyznaczane na drobnej siatce nad obszarem (komórki około jednej dwunastej promienia narzędzia), więc zaangażowanie może być większe o około jedną komórkę niż zadane; ściany wykańczane są dokładnie. Duży otwarty obszar daje długi program z wieloma krótkimi ruchami.

## Symulacja

Ścieżki narzędzi są ponownie wyliczane po każdej zmianie (także części). {{ui:Symuluj}} pokazuje też surowiec pozostały po całym programie. Panel pokazuje:

- **Czas cyklu**: ruchy robocze z ich posuwem, szybkie przejazdy jako linie proste z prędkością posuwu szybkiego z ustawienia, plus czas zmiany narzędzia. Prawdziwe maszyny przyspieszają, więc trwają dłużej.
- **Wgryzienia**: miejsca, w których narzędzie zeszło ponad 0.02 mm poniżej powierzchni części. Czerwone znaczniki pokazują je w widoku.
- **Surowiec pozostały na części**.

Surowiec to mapa wysokości góry (mapa Z), więc nie pokaże podcięć. Przeciągnij **Odtwarzanie**, aby przesunąć narzędzie wzdłuż programu. W widoku ruchy robocze są ciągłe, a szybkie przejazdy przerywane, po jednym kolorze na operację.

Przy włączonym **Pokaż symulowany surowiec** surowiec jest kolorowany względem modelu, komórka po komórce: **zielony** tam, gdzie leży na modelu (w granicach 0.02 mm), **czerwony** tam, gdzie narzędzie weszło w model, a tam, gdzie na modelu zostaje surowiec: **żółty** dla cienkiej skórki, **pomarańczowy** dla większej ilości, przechodzący w **szary** nieobrobionego surowca przy 1 mm lub więcej. Kolory są ponownie wyliczane przy każdej zmianie, z tej samej mapy wysokości co liczby w panelu, więc zielony i czerwony zgadzają się z linią Wgryzienia. Fazka celowo wchodzi w model i wzdłuż swojej krawędzi pokazuje kolor czerwony.

## Postprocesor i G-kod

Wybierz sterowanie w **Postprocesor** i naciśnij {{ui:Pobierz G-kod}} (albo {{ui:Postprocesor}} na pasku narzędzi):

| Sterowanie | Plik | Uwagi |
|---|---|---|
| Fanuc-style ISO | .nc | %, numer O, numery wierszy, T M6 z G43 H, cykle stałe |
| GRBL | .nc | Bez zmieniacza narzędzi i cykli stałych: zmiana narzędzia zatrzymuje program przez M0, wiercenie zapisywane jest jako zwykłe ruchy |
| LinuxCNC | .ngc | T M6 z G43 H, cykle stałe, M2 |
| Własne | dowolny | Post, który napisałeś lub zmieniłeś: {{ui:Edytuj post…}}, {{ui:Nowy post…}}, {{ui:Importuj plik posta…}} |

Każdy plik zaczyna się od komentarzy o programie, surowcu, przesunięciu układu i narzędziach. Współrzędne są w milimetrach, z 3 miejscami po przecinku. {{ui:Ścieżki narzędzi CSV}} i {{ui:Ścieżki narzędzi JSON}} eksportują same ruchy.

**Sprawdź wynik w symulatorze własnej maszyny przed cięciem i najpierw uruchom go w powietrzu nad surowcem.** Trzy wbudowane posty to punkty wyjścia zgodne z udokumentowanym działaniem sterowań; nie zostały sprawdzone na żadnej konkretnej maszynie. Post, który zmienisz, musisz sam udowodnić. Jak go napisać: [Postprocesory](topic:post-processors).

## Dokładny STEP dla warsztatu

Pod przyciskami G-kodu na karcie **Operacje** {{ui:Dokładny STEP (współrzędne obróbki)}} pobiera `<part>-work.step`: część jako dokładną bryłę (prawdziwe walce dla otworów i czopów, prawdziwe okręgi dla ich krawędzi), z początkiem w punkcie zerowym obróbki tego ustawienia i osią Z wzdłuż osi narzędzia. To te same współrzędne, których używa G-kod, więc własny program CAM warsztatu albo kontroler ustawia model względem programu bez jego przesuwania. Plik zawiera tylko część, bez surowca i ścieżek narzędzi.

{{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} zapisuje tę samą bryłę w jej własnym położeniu (Z w górę): zob. [Eksport do druku, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Ograniczenia

- Kieszenie, kontury, wiercenie i fazki są 2,5-osiowe. Zakrzywione ściany można wykończyć w 3D ([równolegle i scallop](topic:finish-3d)), ale nie wstępnie obrobić w 3D (stożek zostaje w stopniach, aż go wykończysz), i nie ma obróbki resztek. Czyszczenie adaptacyjne jest 2D (płaskie dna).
- Tylko trzy osie: bez przechylania, bez toczenia, bez kontroli.
- Oprawki i trzony nie są sprawdzane pod kątem kolizji; ostrzeżenie pojawia się, gdy cięcie jest głębsze niż długość części tnącej.
- Posuwy i prędkości to wartości początkowe. Post to tekst, który można edytować, ale decyduje tylko o sposobie zapisu ruchów; nie zmieni ścieżki narzędzia, nie doda osi i nie zna maszyny ([Postprocesory](topic:post-processors) wymieniają, czego nie mogą).

## Wyślij program do maszyny

W CadCraft Studio na komputerze, z maszyną ustawioną w Studio, obok **Pobierz G-kod** pojawia się **Wyślij do maszyny…** i wysyła ten sam program do maszyny w twojej sieci. Nigdy nie jest uruchamiany z PartCraft: uruchom go przy maszynie, gdy będzie czysto. W przeglądarce przycisk się nie pokazuje (strona internetowa nie może połączyć się z maszyną w sieci): zamiast tego pobierz program.
