---
title: Tworzenie ścieżek narzędzi i G-kodu (Wytwarzanie)
summary: Ustaw półfabrykat i punkt zerowy obróbki, wybierz narzędzia, dodawaj operacje ściany, kieszeni, konturu, wiercenia i fazowania przez wskazanie ścian, wykończ cały model w 3D (równoległa, grzebieniowa), symuluj półfabrykat względem modelu w poszukiwaniu wgryzień i czasu cyklu, a potem pobierz G-kod z jednego z trzech wbudowanych postprocesorów albo z własnego, edytowanego.
keywords: dokładny STEP, STEP dla warsztatu, współrzędne obróbki, przekazanie CAM, równoległa, scallop, wykańczanie 3D, wykończenie, frez kulisty, biblioteka narzędzi, edytuj post, własny post, edytor postprocesora, adaptacyjne, czyszczenie adaptacyjne, stałe zaangażowanie, trochoidalne, hsm, obróbka szybkoobrotowa, wytwarzanie, CAM, ścieżka narzędzia, G-kod, NC, CNC, frezowanie, kieszeń, kontur, profil, planowanie, wiercenie, peck, G83, G81, G73, fazka, półfabrykat, przesunięcie układu roboczego, G54, postprocesor, GRBL, LinuxCNC, posuwy i prędkości, symulacja, wgryzienie, czas cyklu
from: f8a03be8
---

Obszar roboczy Wytwarzanie zamienia część w ścieżki narzędzi i zapisuje je jako G-kod. Większość operacji to frezowanie **2,5-osiowe**: narzędzie stoi pionowo, ściany są frezowane prosto w dół, a dna płasko. **{{ui:Zgrubne 3D}}** i **{{ui:Resztki}}** obrabiają zakrzywione części w 3D ([Obróbka zgrubna 3D i obróbka resztek](topic:rough-3d)); **Równoległość** i **Grzebieniowe (scallop)** je wykańczają ([Obróbka wykończeniowa 3D](topic:finish-3d)). Na maszynie z osiami obrotowymi każda operacja może mieć pochylone narzędzie, a dwie operacje przesuwają osie obrotowe podczas skrawania ([Obróbka 4- i 5-osiowa](topic:multi-axis)). Są operacje dla tokarki ([Toczenie](topic:turning)) i dla sondy dotykowej ([Sondowanie](topic:probing)). Działa na nazwanych ścianach, które jądro siatki nadaje części (zobacz [Jądro siatki](topic:solid-kernels)).

Wersja laboratoryjna: sprawdź każdy program w symulatorze swojego sterowania i najpierw uruchom go w powietrzu nad półfabrykatem.

## Przygotowanie

1. Wybierz **Wytwarzanie** w przełączniku obszarów, a następnie {{ui:Nowe ustawienie}}.
2. Na karcie **Ustawienia** wybierz:
   - **Oś narzędzia (+Z)**: w którą stronę narzędzie wchodzi w część. Domyślnie jest World +Y (góra w PartCraft); wtedy oś X maszyny to World X, a oś Y maszyny to World −Z.
   - **Punkt zerowy obróbki (G54)**: narożnik albo środek półfabrykatu, góra albo dół, środek góry modelu albo początek modelu.
   - **Półfabrykat**: prostopadłościan albo walec, albo model plus naddatki (boki, góra, dół), albo stały rozmiar.
   - **Materiał** (ustawia początkowe posuwy i prędkości), **postprocesor** (sterowanie), maksymalną prędkość obrotową wrzeciona maszyny, prędkość posuwu szybkiego i czas zmiany narzędzia, chłodziwo oraz numer programu.

## Narzędzia

Karta **Narzędzia** przechowuje bibliotekę: frezy palcowe płaskie, kuliste i zaokrąglone, wiertła, frezy do fazowania i frezy czołowe, każdy z numerem T, średnicą, liczbą rowków i długością rowka (a także promieniem narożnika, kątem wierzchołka lub kątem fazki, tam gdzie mają zastosowanie).

Moje narzędzia można zapisać w przeglądarce i przenosić między komputerami jako plik: zobacz [Biblioteka narzędzi](topic:tool-library).

Prędkość wrzeciona i posuw wynikają z materiału: n = 1000 × prędkość skrawania / (π × średnica), posuw = n × liczba rowków × posuw na ząb (wiertła: n × posuw na obrót). To zachowawcze wartości startowe z opublikowanych zakresów, nie dostrojone do twojej maszyny; wpisz prędkość skrawania, posuw na ząb, obr./min albo posuw od producenta narzędzia, aby je nadpisać. Gdy prędkość przekroczy maksimum maszyny, zostaje na nim przytrzymana, a posuw idzie za nią, zachowując posuw na ząb.

## Dodawanie operacji

Każdy przycisk paska narzędzi dodaje operację i, jeśli wymaga geometrii, rozpoczyna wskazywanie: wskaż ściany albo krawędzie w widoku (ponowne kliknięcie usuwa wskazanie), a następnie {{ui:Zakończ wskazywanie}} lub {{key:Esc}}.

| Operacja | Wskazanie | Co robi |
|---|---|---|
| {{ui:Ściana}} | nic | Przejścia zygzakiem po całym półfabrykacie, poza jego krawędziami, aż do góry modelu |
| {{ui:Kieszeń}} | płaską ścianę dna, okrągły otwór albo zamknięty łańcuch krawędzi | Czyści obszar przesuniętymi przejściami od środka na zewnątrz, na każdym kroku głębokości; wyspy (ściany wystające w górę wewnątrz dna) zostają; dno otwarte dookoła (nic wyższego na zewnątrz) jest czyszczone aż do krawędzi półfabrykatu |
| {{ui:Adaptacyjne}} | tak samo jak Kieszeń | Czyści ten sam obszar przejściami, z których każde tnie zadaną szerokość (**Zaangażowanie**, ułamek średnicy), więc frez nigdy nie tnie pełnej szerokości rowka, nawet w narożnikach; wchodzi po helisie i wykańcza ściany na każdym poziomie. Wąskie cięcia pozwalają na głębsze zagłębienie i wyższy posuw |
| {{ui:Kontur}} | płaską ścianę (jej obrys), okrągłą ścianę albo krawędzie | Podąża za obrysem przesuniętym o promień narzędzia, na zewnątrz lub do wewnątrz, z łukami wejścia i wyjścia oraz opcjonalnymi mostkami |
| {{ui:Wiercenie}} | otwory (wskaż ścianę otworu albo jego krawędź) | Wierci każdy otwór cyklem stałym: przerywane (G83), zwykłe (G81) albo łamanie wióra (G73); albo podaj średnicę, aby wywiercić wszystkie otwory tego rozmiaru |
| {{ui:Fazka}} | obrys ściany albo krawędzie | Prowadzi frez do fazowania wzdłuż krawędzi tak, aby wyciął szerokość, którą ustawisz |
| {{ui:Równoległość}} | nic (cały model) | Wykańczanie 3D liniami równoległymi pod dowolnym kątem, podążające za powierzchnią frezem kulistym, zaokrąglonym albo płaskim. Zobacz [Obróbka wykończeniowa 3D](topic:finish-3d) |
| {{ui:Grzebieniowe (scallop)}} | nic (cały model) | Wykańczanie 3D przejściami oddalonymi o zadaną odległość na powierzchni, tak aby grzbiet między nimi miał żądaną wysokość |

Wybierz operację na liście, aby zmienić jej narzędzie, wysokości (prześwit, wycofanie, wysokość posuwu, góra, dół), krok zagłębienia, krok boczny, naddatek, przejście wykończeniowe, wejście (helisa, rampa albo zanurzenie), frezowanie współbieżne, mostki lub cykl. {{ui:W górę}} i {{ui:W dół}} zmieniają kolejność, {{ui:Wyłącz}} pomija operację w programie, {{ui:Usuń}} ją usuwa. Wszystko jest w historii cofania i zapisywane w pliku części.

Krok boczny kieszeni wynosi co najwyżej połowę średnicy narzędzia, więc każdy punkt jej dna leży w odległości jednego promienia narzędzia od jakiegoś przejścia. Wewnętrzne narożniki zachowują promień narzędzia.

**Czyszczenie adaptacyjne** utrzymuje zaangażowanie frezu blisko jednej wartości. Zaangażowanie 0,15 średnicy to kąt zaangażowania około 46°: łuk krawędzi frezu w materiale. Kieszeń przesunięta natomiast tnie pełną szerokość w pierwszym przejściu i obejmuje coraz więcej w każdym wewnętrznym narożniku. Między przejściami narzędzie pozostaje w dół tam, gdzie przesuwa się przez już wycięty (pusty) obszar, a w innych miejscach podnosi się i opuszcza w pustym obszarze. Przejścia są wyliczane na drobnej siatce nad obszarem (komórki około jednej dwunastej promienia narzędzia), więc zaangażowanie może przekroczyć ustawioną wartość najwyżej o około jedną komórkę; ściany są wykańczane dokładnie. Duży otwarty obszar daje długi program z wieloma krótkimi ruchami.

## Symulacja

Ścieżki narzędzi są liczone od nowa po każdej zmianie (także części). {{ui:Symuluj}} pokazuje też półfabrykat pozostały po całym programie. Panel pokazuje:

- **Czas cyklu**: ruchy posuwowe z ich posuwem, szybkie jako proste linie z posuwem szybkim z ustawień, plus czas zmiany narzędzia. Prawdziwe maszyny przyspieszają, więc zajmują dłużej.
- **Wgryzienia (gouge)**: miejsca, w których narzędzie zeszło ponad 0,02 mm pod powierzchnię części. Czerwone znaczniki pokazują je w widoku.
- **Pozostały materiał na części**.

Półfabrykat to mapa wysokości góry (mapa Z), więc nie pokaże podcięć. Przeciągnij **Odtwarzanie**, aby przesunąć narzędzie wzdłuż programu. W widoku ruchy posuwowe są ciągłe, a szybkie przerywane, jeden kolor na operację.

Przy włączonym **Pokaż symulowany półfabrykat** półfabrykat jest kolorowany względem modelu, komórka po komórce: **zielony** tam, gdzie leży na modelu (w granicach 0,02 mm), **czerwony** tam, gdzie narzędzie weszło w model, a tam, gdzie na modelu zostaje materiał: **żółty** dla cienkiej warstwy, **pomarańczowy** dla większej, przechodzący w **szary** nieobrobionego półfabrykatu przy 1 mm lub więcej. Kolory są liczone ponownie przy każdej zmianie z tej samej mapy wysokości co liczby w panelu, więc zielony i czerwony zgadzają się z wierszem Wgryzienia. Fazka celowo wchodzi w model i pokazuje czerwień wzdłuż swojej krawędzi.

## Postprocesor: zapis G-kodu

Wybierz sterowanie w polu **{{ui:Postprocesor}}** i naciśnij {{ui:Pobierz G-kod}} (albo {{ui:Postprocesor}} na pasku narzędzi):

| Sterowanie | Plik | Uwagi |
|---|---|---|
| Fanuc-style ISO | .nc | %, numer O, numery wierszy, T M6 z G43 H, cykle stałe |
| GRBL | .nc | Bez zmieniacza narzędzi i cykli stałych: zmiana narzędzia zatrzymuje program przez M0, wiercenie zapisywane jest jako zwykłe ruchy |
| LinuxCNC | .ngc | T M6 z G43 H, cykle stałe, M2 |
| Tokarka w stylu Fanuc | .nc | Do programów tokarskich: X jako średnica, posuw na obrót, G96 pod limitem G50, gwintowanie G32 |
| Tokarka LinuxCNC | .ngc | Do programów tokarskich: średnice G7, G95, G96, gwintowanie G33; nie zapisuje ruchu bazowania |
| Własne | dowolny | Postprocesor, który napisałeś albo zmieniłeś: {{ui:Edytuj post…}}, {{ui:Nowy post…}}, {{ui:Importuj plik posta…}} |

Każdy plik zaczyna się od komentarzy: programu, półfabrykatu, przesunięcia układu roboczego i narzędzi. Współrzędne są w milimetrach, z trzema miejscami po przecinku. {{ui:Ścieżki narzędzi CSV}} i {{ui:Ścieżki narzędzi JSON}} eksportują same ruchy.

**Sprawdź wynik w symulatorze swojej maszyny przed frezowaniem i najpierw uruchom go w powietrzu nad półfabrykatem.** Trzy wbudowane postprocesory są punktem wyjścia zgodnym z udokumentowanym działaniem sterowań; nie zostały sprawdzone na żadnej konkretnej maszynie. Postprocesor, który zmienisz, jest twój i to ty musisz go udowodnić. Jak go napisać: [Postprocesory, które możesz edytować](topic:post-processors).

## Dokładny STEP dla warsztatu

Pod przyciskami G-kodu na karcie **Operacje** {{ui:Dokładny STEP (współrzędne obróbki)}} pobiera `<part>-work.step`: część jako dokładną bryłę (prawdziwe walce dla otworów i czopów, prawdziwe okręgi dla ich krawędzi), z początkiem w punkcie zerowym obróbki tego ustawienia i osią Z wzdłuż osi narzędzia. To są współrzędne, których używa G-kod, więc własny program CAM albo kontrola warsztatu ustawia model względem programu bez jego przesuwania. Plik zawiera tylko część, bez półfabrykatu i ścieżek narzędzi.

{{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} zapisuje tę samą bryłę w jej położeniu (Z w górę): zobacz [Eksport do druku, STEP i DXF](topic:export-files#for-other-cad-programs-step).

## Ograniczenia

- Kieszenie, kontury, wiercenie i fazowanie są 2,5-osiowe. Zakrzywione części są zgrubnie i wykańczająco obrabiane w 3D przez własne operacje ([Obróbka zgrubna 3D i obróbka resztek](topic:rough-3d), [Obróbka wykończeniowa 3D](topic:finish-3d)). Czyszczenie adaptacyjne jest 2D (płaskie dna).
- Pochylone narzędzia, obróbka 5-osiowa i wykańczanie 4. osią, toczenie i sondowanie istnieją, każde z własnymi ograniczeniami, i **żadne z nich nie zostało uruchomione na maszynie**: zobacz [Obróbka 4- i 5-osiowa](topic:multi-axis), [Toczenie](topic:turning) i [Sondowanie](topic:probing).
- Oprawki i trzony nie są sprawdzane pod kątem kolizji; pojawia się ostrzeżenie, gdy cięcie jest głębsze niż długość rowka.
- Posuwy i prędkości są wartościami startowymi. Postprocesor to tekst, który można edytować, ale decyduje tylko o sposobie zapisu ruchów; nie może zmienić ścieżki narzędzi, dodać osi ani znać twojej maszyny ([Postprocesory, które możesz edytować](topic:post-processors) wymienia, czego nie potrafi).

## Wyślij program na maszynę

W CadCraft Studio na komputerze, z maszyną ustawioną w Studio, przycisk **Wyślij na maszynę…** pojawia się obok {{ui:Pobierz G-kod}} i przesyła ten sam program do maszyny w twojej sieci. Nigdy nie jest uruchamiany z PartCraft: uruchom go na maszynie, gdy wszystko jest jasne. W przeglądarce przycisk nie jest pokazywany (strona internetowa nie może połączyć się z maszyną w twojej sieci): zamiast tego pobierz program.
