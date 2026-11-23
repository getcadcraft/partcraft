---
title: Czego jeszcze nie zbudowano
summary: Wszystko, czego ta wersja PartCraft jeszcze nie robi, od skręcanych przeciągnięć po wyświetlanie w calach, wymiary rysunku i podzespoły, wraz z tym, co zrobić zamiast tego dziś.
keywords: brakujące, jeszcze nie, ograniczenia, limity, plan rozwoju, dokładne jądro, zaokrąglenie, fazka, powłoka, przeciągnięcie, loft, import STEP, symulacja, wytwarzanie, skręcone przeciągnięcie, styczność końca lofta, zaokrąglenie ściany, równania, cale, wymiary rysunku, podzespoły, chmura, tablet, telefon
from: 97b10a29
---

PartCraft to wczesna wersja. Ta strona wymienia, czego jeszcze nie robi, abyś nie szukał tego na próżno, oraz co zrobić zamiast tego dziś. Żadna z pozycji nie ma terminu.

## Wymaga dokładnego jądra

Ta wersja buduje każdą część jądrem siatki (zobacz [Jądro siatki](topic:solid-kernels)). Wszystko poniżej wymaga dokładnego jądra geometrycznego, którego ta wersja jeszcze nie ma. Części zapisane z tymi elementami nadal się otwierają: elementy pozostają w historii, oznaczone jako niezbudowane, i są zachowywane przy zapisie.

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| {{ui:Zaokrąglenie}} i {{ui:Fazka}} na okrągłych krawędziach; zaokrąglenia, których promień zmienia się wzdłuż krawędzi; zaokrąglenia płynnie łączące się tam, gdzie się spotykają (jądro siatki ścina je na ukos) | Zaokrąglenie i Fazka działają na prostych krawędziach między płaskimi ścianami; inne narożniki zaokrąglaj w szkicu, zanim wyciągniesz ({{ui:Zaokrąglenie}} w szkicu, {{key:F}}) |
| {{ui:Powłoka}} otwierająca zakrzywione ściany; ścianki o różnych grubościach | Otwórz płaskie ściany; dodaj materiał wyciągnięciami tam, gdzie ścianka musi być grubsza |
| {{ui:Przeciągnięcie}}, {{ui:Loft}}, {{ui:Pochylenie}} na zakrzywionych ścianach; wyciąganie do ściany, następnej ściany albo wierzchołka; wyciągnięcia zwężane | Wyciągnij albo obróć, w razie potrzeby w krokach; wyciągnij na głębokość, którą zmierzysz |
| {{ui:Żebro}}, {{ui:Kołnierz bazowy}}, {{ui:Kołnierz krawędziowy}} i płaskie rozwinięcia | Wyciągnij płytę albo profil żebra |
| Powierzchnie: wykańczanie {{ui:Kształt}} w części, {{ui:Łatka}}, {{ui:Loft powierzchni}}, {{ui:Powierzchnia Gordona}}, {{ui:Zszyj}}, {{ui:Pogrub}}, {{ui:Odsunięcie powierzchni}}, {{ui:Przedłuż powierzchnię}}, {{ui:Przytnij powierzchnię}} | Niedostępne |
| Kilka brył: {{ui:Połącz}}, {{ui:Przesuń bryłę}}, {{ui:Skaluj bryłę}}, {{ui:Wzór po ścieżce}}, elementy tworzące nową bryłę | Jedna bryła; wzory i lustra kopiują elementy |
| Szkice, płaszczyzny, osie i punkty na ścianach, które znajdzie tylko dokładne jądro (ściana z zaokrąglenia, ścianka otworu, ściana importowanej bryły) | Szkicuj na płaszczyznach bazowych, płaszczyznach referencyjnych i płaskich ścianach wyciągnięć oraz obrotów |
| Wynik projektowania generatywnego otwarty jako część albo dodany do niej (staje się importowaną bryłą) | Pobierz wynik jako STL albo STEP |
| Edycja zakrzywionych ścian otwartego pliku STEP jako dokładnych powierzchni; dokładny STEP splajnowych, przeciąganych i obracanych ścian z pliku STEP, boki splajnów, modelowane gwinty, bryły STL / OBJ / 3MF i złożenia; STEP dla innych programów do modelowania części | {{ui:Otwórz}} czyta STEP jako trójkąty i zachowuje płaskie ściany, walce, stożki, sfery i tory pliku do eksportu ([Otwórz plik STEP](topic:import-step)); {{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} zapisuje każdą ścianę analityczną dokładnie i zachowuje je jako facety ([Eksport](topic:export-files#for-other-cad-programs-step)); makro dla innego programu do modelowania nadal zapisuje |
| Prawdziwe łuki w widokach rysunku | Widoki i widoki przekrojów są rysowane z facetów |
| Dokładne objętości, pola i odległości | {{ui:Pomiar}} podaje wartości bryły z facetów, nieco zaniżone na okrągłych częściach; dokładniejsze ustawienie **Krzywe** zbliża je do prawdy |

Niektóre wiersze w poniższych tabelach sugerują jedną z tych funkcji jako sposób obejścia czegoś innego. Te sugestie obowiązują, gdy wróci dokładne jądro.

## Elementy

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Zaokrąglenia ścian, zaokrąglenia pełnym promieniem, zaokrąglenia z promieniami ustawianymi w punktach krawędzi | Stałe albo liniowo zmienne {{ui:Zaokrąglenie}}; kilka elementów zaokrąglenia |
| Powłoki o różnych grubościach ścianek | Jedna grubość {{ui:Powłoka}}; dodaj materiał wyciągnięciami tam, gdzie ścianka musi być grubsza |
| Pochylenie na swobodnych (splajnowych) ścianach | {{ui:Pochylenie}} działa na płaskich, walcowych i stożkowych ścianach |
| Skręcone przeciągnięcia, przeciągnięcia cienkościenne i powierzchniowe; styczność końca w elemencie Loft; loft z jedną prowadnicą; ścieżki splajnowe | {{ui:Przeciągnięcie}} ze stałą orientacją albo skalą końca; loft z dwiema lub więcej prowadnicami: zobacz [Przeciągnięcie, loft i pochylenie](topic:sweep-loft-draft) |
| Żebra z łuków lub splajnów; żebra rosnące kwadratowo do szkicu (z widoku z góry); pochylenie na żebrach; kilka żeber z jednego szkicu | {{ui:Żebro}} z jednego łańcucha linii w płaszczyźnie własnej żebra: zobacz [Żebra i blachy wzmacniające](topic:rib) |
| „Do” zakrzywionej powierzchni, „do następnej” zatrzymanej na zakrzywionej ścianie | Do płaskiej ściany albo płaszczyzny referencyjnej |
| Otwory z pogłębieniem z drugiej strony, gwinty calowe i rurowe, gwinty stożkowe, wybiegi gwintów i sfazowane początki gwintów | Pogłębienie o małej głębokości; gwinty metryczne ISO i trapezowe, kosmetyczne albo modelowane: zobacz [Gwinty na wałach i otworach, rysowane lub modelowane](topic:threads) |
| Wyciągnięcia cienkich elementów | Narysuj obie ścianki profilu |
| Kopie wzoru pomijane pojedynczo, wzory wypełnienia | Używaj osobnych elementów; wzory wzdłuż krzywej: {{ui:Wzór po ścieżce}} |
| Kopiowane wzory, lustra, zaokrąglenia, fazki, powłoki i importowane bryły | Skopiuj szkic albo element, na którym są zbudowane, albo go powtórz wzorem |
| Dokładna styczność (G1) w punktach szczególnych kształtu; łączenie łat kształtu w większe ściany | Zwiększ poziom kształtu: przybliżone łaty staną się mniejsze; zobacz [Kształty swobodne z elementem Kształt](topic:form-surfaces) |
| Kształt złożony z kilku oddzielnych zamkniętych części w jednym elemencie; mosty między kształtami | Jedna zamknięta część na element Kształt; połącz je poleceniem {{ui:Połącz}} |
| Wskazywanie brył powierzchniowych w widoku (oprócz punktów przycinania i łat); zaokrąglenia powierzchni; odprzycinanie; łaty G2; powierzchnie Gordona styczne do zakrzywionych sąsiadów (styczność do płaszczyzn i płaskich ścian jest zbudowana) | Wybierz je po nazwie w panelu elementu; najpierw pogrub, potem zaokrąglij bryłę |
| Lista brył w historii; pomijanie ukrytych brył w eksportach | Zmieniaj nazwy i ukrywaj bryły na liście brył w panelu części; usuń albo wyłącz element, który utworzył bryłę, aby ją pominąć |
| Skalowanie nierównomierne zachowujące walce i stożki analityczne; nierównomierne skalowanie powierzchni odsuniętych | {{ui:Skaluj bryłę}} sprawia, że zakrzywione ściany stają się zamkniętymi B-splajnami (w granicach 0,0000004 mm); skalowanie równomierne pozostaje dokładne |
| Łączenie brył powierzchniowych; sumy Minkowskiego | Najpierw {{ui:Zszyj}} albo {{ui:Pogrub}}, potem {{ui:Połącz}} |
| Analiza tolerancji: łańcuchy wymiarowe skręcające za rogi (pętle wektorów 2D i 3D), czułości liczone z geometrii, metoda Monte Carlo z innymi rozkładami, tolerancje rozmiarów na wymiarach szkicu, tolerancja bonusowa z warunku materiałowego | {{ui:Łańcuch tolerancji}} w złożeniu: jeden kierunek, przypadek najgorszy i RSS, tolerancje wpisywane ręcznie, z ogólnej tolerancji tabliczki rysunkowej albo z ramek GD&T: zobacz [Łańcuchy tolerancji](topic:tolerance-stackup) |
| Gniazdowanie: kolejność cięcia i wejścia, cięcie wspólnych krawędzi raz, części, które muszą być trzymane razem; resztki ze zwojów, materiał współdzielony między projektami | {{ui:Układaj płaskie części na arkuszach…}} z odstępami, marginesami, obrotami i kierunkiem włókien: zobacz [Układanie płaskich części na arkuszach](topic:nest-flat-parts); pozostałe płyty są zachowywane i używane jako pierwsze: zobacz [Zachowywanie i ponowne użycie odpadów](topic:nest-offcuts); zaplanuj cięcie w oprogramowaniu swojej ciętarki |
| Blacha: zagięcia zawijane, przesunięcia, flansze ukośne i konturowe; flansze na zakrzywionych krawędziach albo na ścianach zgiętego kołnierza bazowego; szkicowane zagięcia; zamknięcia narożników; narzędzia do formowania; zamiana bryły na blachę; płaska część zgiętego kołnierza bazowego z wycięciami; tabele gięcia | {{ui:Kołnierz bazowy}} (płyta albo zgięty profil), {{ui:Kołnierz krawędziowy}} na prostych krawędziach płyty z odciążeniami gięcia oraz rozwinięcie płaskie ze współczynnikiem K: zobacz [Blacha](topic:sheet-metal) |
| Analiza pochylenia w złożeniach; wyznaczanie linii podziału formy; analiza grubości ścianek | {{ui:Analiza pochylenia}} na części w Projektowaniu: zobacz [Sprawdzanie pochylenia do formowania i odlewania](topic:draft-analysis); otwórz każdą część złożenia, aby ją sprawdzić |

## Szkice

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Elipsy, łuki styczne, krzywe stożkowe, splajny o zadanym stopniu lub wagach (NURBS) | Splajny (sześcienne), łuki i okręgi z relacją Styczność |
| Punkt na splajnie (relacja), relacje krzywizny (G2) | Ustaw punkt własny splajnu tam, gdzie musi przechodzić |
| Kopie przesunięte splajnów, które podążają za późniejszymi zmianami; przesunięcia łańcuchów z ostrymi narożnikami splajnowymi | Przesuń ponownie po zmianie; najpierw zaokrąglij narożnik |
| Kopie wzorów pozostające powiązane z oryginałem; wzory wzdłuż krzywej | Powtórz wzór po zmianie |
| Rzutowanie swobodnych albo pochylonych krawędzi kołowych; rzut geometrii podążający za częścią | Rzutuj proste i równoległe krawędzie kołowe, potem wymiaruj |
| Wymiary sterowane (referencyjne) | Odczytaj rozmiary z panelu albo z danych części |
| Relacja współliniowości | Równoległość z odległością 0 |
| Wklejanie do innego programu (schowek systemowy) | Eksportuj DXF, STEP, STL albo 3MF |
| Wpisywanie łuków, współrzędnych względnych lub biegunowych | Wpisuj linie i okręgi; rysuj łuki narzędziem {{ui:Łuk}} |
| Zaznaczanie geometrii bez wskaźnika | Wymaga kliknięcia albo dotknięcia |

## Parametry i jednostki

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Konfiguracje zmieniające materiały; tabela projektowa w CSV, która wyłącza elementy | Konfiguracje ustawiają parametry i włączają oraz wyłączają elementy: zobacz [Konfiguracje i tabele projektowe](topic:design-tables); `partcraft variants` buduje zapisane konfiguracje po nazwie, z wyłączonymi elementami: zobacz [Pakiet wariantów z konfiguracji](topic:variant-pack) |
| Równania w polach najnowszych elementów (płaszczyzna, przeciągnięcie, pochylenie i podobne) | Pisz je w skrypcie albo poleceniem `partcraft set` ([Skrypty i wiersz poleceń](topic:scripts-and-cli)) |
| Część pokazywana w calach | Rozmiary pokazywane są w milimetrach; wpisz `2in` w polu liczbowym albo w wyrażeniu, a zamieni się na 50.8 |

## Pliki

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Edycja własnych elementów importowanej bryły STEP (przychodzi bez historii) | Dodawaj albo usuwaj materiał własnymi elementami |
| Odczyt kolorów, nazw, struktury złożenia i PMI ze STEP | Niedostępne |
| Eksport glTF, OBJ, IGES, Parasolid; DWG części 3D (tylko pakiet wariantów zapisuje DWG: arkusz rysunku) | STL albo 3MF dla siatek; STEP dla brył; DXF dla 2D |
| Otwieranie plików IGES, DXF albo własnych plików innych programów (pliki `.3dm` otwierają się jako jedna bryła: [Otwórz model .3dm jako bryłę](topic:open-3dm-files)) | Poproś o STEP albo zamknięte siatki STL, OBJ lub 3MF: [Otwórz STL, OBJ lub 3MF](topic:open-meshes) |
| Struktura złożenia (drzewo z nazwami części) w eksportowanym STEP | Złożeniowy STEP to jeden złożony zbiór umieszczonych brył |
| Zapisywanie do wybranego folderu bez pobierania przez przeglądarkę | Włącz „pytaj, gdzie zapisać” w ustawieniach pobierania przeglądarki |

## Rysunki

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Wymiary poza trzema wymiarami gabarytowymi (rozmiary otworów, położenia, tolerancje wymiarów) | Zaznacz PDF albo wyeksportuj DXF i wymiaruj w programie 2D CAD |
| Więcej niż jeden przekrój lub szczegół; widoki zrównane, urwane i pomocnicze | Jeden przekrój i jeden szczegół na rysunek |
| Wolny tekst, uwagi i tabele na arkuszu (poza blokami tytułu i rewizji) | Uwaga o wykończeniu albo tekst dodany w PDF |
| Rzut pierwszego kąta, przesuwane widoki, arkusze pionowe | Rzut trzeciego kąta, automatyczny układ, arkusze poziome A4–A0 i ANSI A–E |
| Widok przekroju na żywo: kilka płaszczyzn albo pudełko przekroju naraz, obrys wokół cięcia, zapisywanie przekroju w pliku | Jedna płaszczyzna naraz z {{ui:Widoki}} › {{ui:Widok przekroju}}; zobacz [Zajrzyj do środka widokiem przekroju](topic:section-view) |
| Rysunki złożeń z większą liczbą widoków, wymiarów lub balonów, które można przesuwać | Jeden widok izometryczny (albo rozsunięty) z automatycznymi balonami i listą części |
| Kopiowanie i wklejanie symboli GD&T oraz wykończenia | Umieść każdy osobno: Baza, Ramka albo Wykończenie |
| Ręczne instrukcje: pliki STEP w {{ui:Z innego pliku…}} w Illustrate, model przekazany wprost z ModelCraft lub BimCraft, obrazy o jakości śledzenia ścieżek, interaktywne 3D w PDF | Otwórz STEP w Projektowaniu i uruchom instrukcję {{ui:Z otwartej części}}; zapisz model jako glTF (.glb); obrazy PNG widoku 3D; plik interaktywnego 3D: zobacz [Zacznij instrukcję w Illustrate](topic:illustrate) |

## Złożenia

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Przeguby zębate, zębatkowe, krzywkowe i śrubowe; przegub kulisty ograniczony do stożka; przeguby na zakrzywionych ścianach albo między punktami | Sztywne, obrotowe, suwakowe, cylindryczne, płaskie, kuliste i czopowe w rowku na płaskich ścianach, każda wartość z własnymi granicami: zobacz [Zbuduj złożenie](topic:build-assembly) |
| Kroki rozsuwania obracające części i przeciąganie części ustawianych przez przeguby | Proste kroki rozsuwania; usuń przegub, aby przesunąć część ręcznie |
| Podzłożenia | Tylko jeden poziom części |
| Koła zębate, krzywki, kontakt | Niedostępne |

## Wytwarzanie

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| 3D czyszczenie adaptacyjne i zgrubne przesunięcia w 3D; wykańczanie waterline, pencil, promieniowe i spiralne; przejścia adaptacyjne zapisane jako łuki | Zgrubna 3D w prostych rzędach i obróbka resztek: zobacz [Obróbka zgrubna 3D i obróbka resztek](topic:rough-3d); wykańczanie Równoległość i Grzebieniowe (scallop): zobacz [Obróbka wykończeniowa 3D](topic:finish-3d); operacje płaskie 2,5-osiowe: Ściana, Kieszeń, czyszczenie adaptacyjne 2D, Kontur, Wiercenie i Fazka: zobacz [Tworzenie ścieżek narzędzi i G-kodu](topic:manufacture) |
| Frezowanie bocznymi ostrzami (swarf), ścieżki liniowe przepływu i wieloosiowe ścieżki zgrubne, kody pochylonej płaszczyzny roboczej (G68.2), kontrola kolizji oprawki i maszyny; symulacja cięć 5-osiowych i obrotowych | Pochylone narzędzie w każdej operacji, wykańczanie 5-osiowe frezem kulistym i wykańczanie obrotowe 4. osią: zobacz [Obróbka 4- i 5-osiowa](topic:multi-axis) |
| Wytaczanie i gwinty wewnętrzne na tokarce, cykle G71/G76, łuki w ścieżkach toczenia, narzędzia napędzane, wrzeciono pomocnicze | Toczenie zewnętrzne: Ściana, Zgrubne, Wykończenie, Rowek, Odetnij, Gwint, Wiercenie na osi: zobacz [Toczenie na tokarce](topic:turning) |
| Sondowanie kąta albo narożnika, ustawiacz narzędzi, pomiar rozmiaru względem tolerancji | Sondowanie ściany, boku, otworu lub czopa, aby ustawić przesunięcie układu roboczego: zobacz [Sondowanie](topic:probing) |
| Kontrola kolizji oprawki i trzonu | Obserwuj ostrzeżenia o długości rowka i sprawdzaj w symulatorze sterowania |
| Cykle trwałości narzędzia i podprogramów w postprocesorze; wczytywanie cudzych plików postprocesorów | Pisz albo zmieniaj postprocesor we własnym formacie PartCraft: zobacz [Postprocesory, które możesz edytować](topic:post-processors) |
| G-kod w calach (G20) | Tylko milimetry (G21) |

## Symulacja i projektowanie generatywne

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Badania nieliniowe: plastyczność, duże ugięcia, kontakt między częściami, zmęczenie | Statyka liniowa i częstości własne: zobacz [Sprawdź naprężenie i ugięcie](topic:simulation); utrzymaj współczynnik bezpieczeństwa wyraźnie powyżej 1 |
| Nieliniowe wyboczenie (niedoskonałości, zachowanie po wyboczeniu, przeskok) | Liniowe współczynniki obciążenia wyboczeniowego z dużym marginesem: zobacz [Ciepło, naprężenia termiczne i wyboczenie](topic:thermal-and-buckling) |
| Promieniowanie między ścianami (współczynniki kształtu), opór kontaktowy, materiały zależne od temperatury, bezwładność w naprężeniach termicznych (fale szoku termicznego) | Promieniowanie do otoczenia, stałe albo quasi-statyczne naprężenie termiczne w czasie, stałe własności: zobacz [Ciepło, naprężenia termiczne i wyboczenie](topic:thermal-and-buckling) |
| Automatyczne zagęszczanie siatki dla przejściowego przepływu ciepła i badań z obciążeniem termicznym; rozrzedzanie siatki tam, gdzie błąd jest mały; cel na wielkości lokalnej (szczytowe naprężenie w jednym punkcie) | **Zagęść automatycznie** dla badań statycznych, wyboczeniowych, częstości własnych i stacjonarnych termicznych, na błędzie całej części: zobacz [Sprawdź naprężenie i ugięcie](topic:simulation); w przeciwnym razie zmniejsz rozmiar elementu |
| Obciążenia łożysk i śrub, siły zdalne, momenty, sprężyny, przemieszczenia zadane | Siły i ciśnienia na ścianach, grawitacja; ściany utwierdzone i bez tarcia |
| Symulacja złożeń; materiały różniące się kierunkowo (warstwy wydruku, kompozyty) | Jedna część, jeden izotropowy materiał |
| Kilka wątków dla badań czworościennych, przepływu ciepła i projektowania generatywnego; jakiekolwiek wątki na stronie, która nie jest izolowana między źródłami | Badania wokselowe, wyboczenie, naprężenie w czasie i przepływ laminarny korzystają z wątków tam, gdzie strona na to pozwala: zobacz [Ustawienia PartCraft](topic:settings) |
| Dokładne projektowanie przepływu turbulentnego (model Spalart–Allmarasa jest dostępny jako eksperymentalny: tarcie w rurze o 30 do 34 % za wysokie, ponowne przyleganie za uskokiem o 21 do 39 % za krótkie; planowane: drobniejsze komórki przy ściankach), ciepło w przepływie, przepływ nieustalony (dokładny w czasie), swobodne powierzchnie, płyny nienewtonowskie, wirujące części | Przepływ laminarny, ustalony, izotermiczny płynu newtonowskiego albo eksperymentalny model turbulentny dla jakościowych wzorców: zobacz [Symulacja przepływu płynu](topic:flow-simulation); panel ostrzega, gdy liczba Reynoldsa przekracza zakres laminarny |
| Ograniczenia naprężeń i reguły wytwarzania (nawisy, kierunki frezowania) w projektowaniu generatywnym; kilka materiałów w jednym kształcie | Najsztywniejszy kształt dla danej objętości; sprawdź wynik w Symulacji: zobacz [Wyhoduj kształt z obciążeń](topic:generative-design) |
| Wynik jako edytowalna (gładka, parametryczna) bryła | STL, STEP z facetów albo część z wynikiem jako importowaną bryłą z facetów |
| Projektowanie maszyn elektrycznych: wirnik obracający się w stojanie, moment względem kąta, nasycająca się stal, magnesy tracące siłę za kolanem charakterystyki, prądy wirowe oraz straty w żelazie i miedzi; pola magnetyczne w 3D albo na zakrzywionych siatkach | Liniowa magnetostatyka 2D na siatce w bibliotece analiz: cewki, żelazo, magnesy trwałe na linii powrotnej, szczeliny, indukcyjność i siła przyciągania: zobacz [Pola magnetyczne w 2D](topic:magnetic-fields-2d) |

## Skrypty

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Podpowiedzi po najechaniu, punkty przerwania i krokowanie w edytorze skryptów | Wyszukiwanie, zwijanie i uzupełnianie są dostępne (zobacz [Pisanie i uruchamianie skryptów](topic:craftscript)); resztę zrób we własnym edytorze: {{ui:Zapisz}} i {{ui:Otwórz}} w grupie Skrypty przenoszą skrypty do i z programu; wbudowane funkcje są wymienione w [Język CraftScript](topic:craftscript-language) |
| Punkty przerwania i krokowanie przez skrypt | `disp` i `fprintf` po drodze; {{key:Mod+Enter}} uruchamia kilka zaznaczonych wierszy naraz |
| Pola i wykresy pokazywane przez skrypt, rysowane w obszarze Projektowanie; skrypty zmieniające parametry części | Pokazują się w obszarze Skrypt; skrypty odczytują parametry poleceniem `param` (zobacz [Pisanie i uruchamianie skryptów](topic:craftscript)), a zmieniają je na karcie {{ui:Parametry}} |
| Obrazy i tabele obok wykresów; edycja wykresu (zoom, granice osi) przed zapisem | Obok siebie pokazują się wykresy; zapisz wykres jako PNG, SVG lub CSV i dokończ go gdzie indziej |
| numpy i inne pakiety Pythona; Python offline; składanie kodu Pythona w edytorze; Pascal Script | Biblioteka standardowa Pythona, CraftScript i Lua: zobacz [Skrypty w Pythonie](topic:craftscript-python) |
| Przekazywanie funkcji Lua do funkcji wbudowanych; wywołanie funkcji biblioteki z Lua po nazwie zbudowanej podczas działania skryptu | Wpisz nazwę funkcji biblioteki w skrypcie (`cs.static_tet(…)`) albo wywołaj ją ze skryptu CraftScript |

## Aplikacja

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Zapis w chmurze, udostępnianie i historia wersji | Jeszcze niedostępne. Zapisuj pliki na komputerze i zachowuj wersje pod nazwami |
| PartCraft jako zainstalowana aplikacja na iPadzie i iPhonie | Używaj PartCraft w przeglądarce urządzenia; na Androidzie i na komputerze działa też w CadCraft Studio (getcadcraft.com/download) |
| Menu kontekstowe (prawy przycisk myszy) | Pasek narzędzi i prawy panel |
| Pełna praca offline od świeżego startu | Tylko gdy aplikacja została zapisana do pracy offline: zobacz [Praca offline](common:offline) |

Napisz, czego najbardziej ci brakuje, przez stronę pomocy technicznej: to kształtuje to, co będzie dalej.

## Inżynier (generatory i pola)

| Czego jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Złączki, porty i armatura na wygenerowanym wymienniku ciepła; krzywe temperatury dla wytrzymałości materiału; straty w trójniku w kolektorze | Generatory budują rdzeń i rurki; dodawaj armaturę w Projektowaniu; używaj wartości materiału w temperaturze pokojowej ze współczynnikiem bezpieczeństwa |
| Dodawanie generatorów z katalogu dodatków jednym kliknięciem | {{ui:Otwórz}} w obszarze Inżynier dodaje generator z pliku |
| Plik pola drobniejszy niż rozmiar woksela generatora; odczyt plików `.vdb` | Zapisz drobniejsze pole ze skryptu; `.vdb` jest zapisywany, nie odczytywany |
| Obliczenia zbiorników ciśnieniowych według norm | Podręcznikowe wzory cienkościenne i grubościenne ze współczynnikiem bezpieczeństwa, który wybierasz; nie margines normowy |
| Generatory dla innych aplikacji | Tylko PartCraft w tej wersji |
