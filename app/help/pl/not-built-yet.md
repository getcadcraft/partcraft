---
title: Czego jeszcze nie ma
summary: Wszystko, czego ta wersja PartCraft jeszcze nie robi, od skręcanych przeciągnięć po wyświetlanie w calach, wymiary rysunkowe i podzespoły, wraz z tym, co zrobić dziś zamiast tego.
keywords: brakujące, jeszcze nie, ograniczenia, plan rozwoju, dokładne jądro, zaokrąglenie, fazka, powłoka, przeciągnięcie, loft, import STEP, symulacja, produkcja, skręcone przeciągnięcie, styczność na końcu lofta, zaokrąglenie ściany, równania, cale, wymiary rysunku, podzespoły, chmura, tablet, telefon
from: 9b868162
---

PartCraft jest wczesną wersją. Ta strona wymienia, czego jeszcze nie robi, abyś tego nie szukał, oraz co robić dziś zamiast tego. Żadna z tych pozycji nie ma terminu.

## Wymaga dokładnego jądra

Ta wersja buduje każdą część jądrem siatki (zobacz [Jądro siatki](topic:solid-kernels)). Wszystko poniżej wymaga dokładnego jądra geometrii, którego ta wersja jeszcze nie ma. Części zapisane z tymi elementami nadal się otwierają: elementy zostają w historii, oznaczone jako niezbudowane, i są zachowywane przy zapisie.

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| {{ui:Zaokrąglenie}} i {{ui:Fazka}} na zaokrąglonych krawędziach; zaokrąglenia, których promień zmienia się wzdłuż krawędzi; zaokrąglenia gładko łączące się tam, gdzie się stykają (jądro siatki ścina je na ukos) | Zaokrąglenie i Fazka działają na prostych krawędziach między płaskimi ścianami; pozostałe narożniki zaokrąglaj w szkicu, zanim wyciągniesz ({{ui:Zaokrąglenie}} w szkicu, {{key:F}}) |
| {{ui:Powłoka}} otwierająca zakrzywione ściany; ścianki o różnych grubościach | Otwarte płaskie ściany; dodaj materiał wyciągnięciami tam, gdzie ścianka ma być grubsza |
| {{ui:Przeciągnięcie}}, {{ui:Loft}}, {{ui:Pochylenie}} na zakrzywionych ścianach; wyciągnięcie do ściany, następnej ściany lub wierzchołka; zwężane wyciągnięcia | Wyciągnij albo obróć, w razie potrzeby krokami; wyciągnij na głębokość, którą zmierzysz |
| {{ui:Żebro}}, {{ui:Kołnierz bazowy}}, {{ui:Kołnierz krawędziowy}} i płaskie wzory | Wyciągnij płytę albo profil żebra |
| Powierzchnie: dokańczanie {{ui:Kształt}} w części, {{ui:Łatka}}, {{ui:Loft powierzchni}}, {{ui:Powierzchnia Gordona}}, {{ui:Zszyj}}, {{ui:Pogrub}}, {{ui:Odsunięcie powierzchni}}, {{ui:Przedłuż powierzchnię}}, {{ui:Przytnij powierzchnię}} | Niedostępne |
| Kilka brył: {{ui:Połącz}}, {{ui:Przesuń bryłę}}, {{ui:Skaluj bryłę}}, {{ui:Wzór po ścieżce}}, elementy tworzące nową bryłę | Jedna bryła; wzory i lustro kopiują elementy |
| Szkice, płaszczyzny, osie i punkty na ścianach, które znajdzie tylko dokładne jądro (ściana powstała z zaokrąglenia, ściana otworu, ściana zaimportowanej bryły) | Szkicuj na płaszczyznach bazowych, płaszczyznach odniesienia i płaskich ścianach wyciągnięć i obrotów |
| Wynik projektowania generatywnego otwarty jako część albo dodany do niej (staje się zaimportowaną bryłą) | Pobierz wynik jako STL lub STEP |
| Edycja zakrzywionych ścian otwartego pliku STEP jako dokładnych powierzchni; dokładny STEP ścian splajnowych, przeciąganych i obrotowych z pliku STEP, boki splajnów, modelowane gwinty, bryły i złożenia STL / OBJ / 3MF; STEP z innych modelerów części | {{ui:Otwórz}} czyta STEP jako trójkąty i zachowuje płaskie ściany, walce, stożki, kule i tory pliku do eksportu ([Otwórz plik STEP](topic:import-step)); {{ui:Eksport}} › {{ui:STEP AP242 (dokładna bryła)}} zapisuje każdą ścianę analityczną dokładnie i zachowuje je jako facety ([Eksport](topic:export-files#for-other-cad-programs-step)); makro dla innego modelera części nadal zapisuje |
| Prawdziwe łuki w widokach rysunku | Widoki i widoki przekroju są rysowane z facetów |
| Dokładne objętości, pola i odległości | {{ui:Pomiar}} podaje liczby bryły z facetów, nieco za niskie dla okrągłych części; dokładniejsze ustawienie **Krzywe** zbliża je |

Niektóre wiersze poniższych tabel proponują jedną z tych funkcji jako sposób obejścia czegoś innego. Te propozycje obowiązują, gdy dokładne jądro wróci.

## Elementy

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Pogrubienia i pełne zaokrąglenia, zaokrąglenia z promieniami ustawionymi w punktach wzdłuż krawędzi | Stały albo liniowo zmienny {{ui:Zaokrąglenie}}; kilka elementów zaokrąglenia |
| Powłoki z różnymi grubościami ścianek | Jedna grubość {{ui:Powłoka}}; dodaj materiał wyciągnięciami tam, gdzie ścianka ma być grubsza |
| Pochylenie na swobodnych (splajnowych) ścianach | {{ui:Pochylenie}} działa na płaskich, walcowych i stożkowych ścianach |
| Przeciągnięcia skręcone, cienkościenne i powierzchniowe; styczność końca w elemencie {{ui:Loft}}; loft z jedną szyną prowadzącą; ścieżki splajnowe | {{ui:Przeciągnięcie}} ze stałą orientacją lub skalą na końcu; loft z dwiema lub więcej szynami prowadzącymi: zobacz [Przeciągnięcie, loft i pochylenie](topic:sweep-loft-draft) |
| Żebra z łuków lub splajnów; żebra rosnące kwadratowo do szkicu (z widoku z góry); pochylenie na żebrach; kilka żeber z jednego szkicu | {{ui:Żebro}} z jednego łańcucha linii w płaszczyźnie żebra: zobacz [Żebra i wzmocnienia](topic:rib) |
| „Do” zakrzywionej powierzchni, „do następnej” zatrzymywane na zakrzywionej ścianie | Do płaskiej ściany albo płaszczyzny odniesienia |
| Otwory z pogłębieniem spodu, gwinty calowe i rurowe, gwinty stożkowe, wybiegi gwintów i sfazowane początki gwintów | Pogłębienie o małej głębokości; gwinty metryczne ISO i trapezowe, kosmetyczne lub modelowane: zobacz [Gwinty na wałach i otworach, rysowane lub modelowane](topic:threads) |
| Wyciągnięcia cienkich elementów | Narysuj obie ścianki profilu |
| Kopie wzoru pomijane jedna po drugiej, wzory wypełnienia | Użyj osobnych elementów; wzory wzdłuż krzywej: {{ui:Wzór po ścieżce}} |
| Kopiowane wzory, lustra, zaokrąglenia, fazki, powłoki i zaimportowane bryły | Skopiuj szkic albo element, na którym są zbudowane, albo go wzoruj |
| Dokładna (G1) styczność w punktach szczególnych kształtu; łączenie łatek kształtu w większe ściany | Podnieś poziom kształtu: przybliżone łatki staną się mniejsze; zobacz [Swobodne kształty z Kształt](topic:form-surfaces) |
| Kształt złożony z kilku oddzielnych zamkniętych części w jednym elemencie; mosty między kształtami | Jeden zamknięty fragment na element Kształt; połącz je poleceniem Join |
| Wybieranie powierzchniowych brył w widoku (oprócz punktów przycięcia i łatki); zaokrąglenia powierzchni; odprzycinanie; łatki G2; powierzchnie Gordona styczne do zakrzywionych sąsiadów (styczne do płaszczyzn i płaskich ścian są zbudowane) | Wybierz je z nazwy w panelu elementu; najpierw pogrub, potem zaokrąglij bryłę |
| Lista brył w historii; pomijanie ukrytych brył w eksportach | Zmień nazwę i ukryj bryły na liście brył w panelu części; usuń albo wyłącz element, który utworzył bryłę, aby ją pominąć |
| Skalowanie nierównomierne zachowujące walce i stożki analitycznie; nierównomierne skalowanie odsuniętych powierzchni | {{ui:Skaluj bryłę}} zamienia zakrzywione ściany w zamknięte B-spline (w granicach 0,0000004 mm); skalowanie jednolite pozostaje dokładne |
| Łączenie brył powierzchniowych; sumy Minkowskiego | Najpierw {{ui:Zszyj}} albo {{ui:Pogrub}}, potem {{ui:Połącz}} |
| Analiza tolerancji: łańcuchy skręcające na narożnikach (wektorowe pętle 2D i 3D), czułości wyliczane z geometrii, Monte Carlo z innymi rozkładami, tolerancje wymiarów na szkicu, tolerancja bonusowa z warunku materiałowego | {{ui:Łańcuch tolerancji}} w złożeniu: jeden kierunek, najgorszy przypadek i RSS, tolerancje wpisane, z tolerancji ogólnej tabliczki rysunkowej albo z ram GD&T: zobacz [Łańcuchy tolerancji](topic:tolerance-stackup) |
| Układanie: kolejność cięcia i wejścia narzędzia, cięcie wspólnych krawędzi raz, części, które muszą być trzymane razem; resztki zwojów, zapas wspólny dla projektów | {{ui:Układaj płaskie części na arkuszach…}} z odstępem, marginesami, obrotami i kierunkiem struktury: zobacz [Układanie płaskich części na arkuszach](topic:nest-flat-parts); pozostałe płyty są zachowywane i używane najpierw: zobacz [Zachowywanie i ponowne użycie odpadów](topic:nest-offcuts); zaplanuj cięcie w oprogramowaniu swojej maszyny tnącej |
| Blacha: zagięcia brzegowe, przesunięcia, kołnierze na ukos i konturowe; kołnierze na zakrzywionych krawędziach albo na ścianach zgiętego kołnierza bazowego; zagięcia szkicowane; zamknięcia narożników; narzędzia formujące; zamiana bryły na blachę; płaski wzór zgiętego kołnierza bazowego z wycięciami; tabele zgięć | {{ui:Kołnierz bazowy}} (płyta albo zgięty profil), {{ui:Kołnierz krawędziowy}} na prostych krawędziach płyty z odciążeniami zgięcia oraz płaski wzór ze współczynnikiem K: zobacz [Blacha](topic:sheet-metal) |
| {{ui:Analiza pochylenia}} na złożeniach; znajdowanie linii podziału; analiza grubości ścianki | {{ui:Analiza pochylenia}} na części w Projektowaniu: zobacz [Sprawdź pochylenie do formowania i odlewania](topic:draft-analysis); otwórz każdą część złożenia, aby ją sprawdzić |

## Szkice

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Elipsy, styczne łuki, krzywe stożkowe, splajny o ustalonym stopniu lub wagach (NURBS) | Splajny (sześcienne), łuki i okręgi z relacjami Styczności |
| Punkt na splajnie (relacja), relacje krzywizny (G2) | Ustaw punkt własny splajnu tam, gdzie musi przechodzić |
| Odsunięte kopie splajnów, które podążają za późniejszymi zmianami; odsunięcia łańcuchów z ostrymi narożnikami splajnowymi | Odsuń ponownie po zmianie; najpierw zaokrąglij narożnik |
| Kopie wzoru pozostające powiązane z oryginałem; wzory wzdłuż krzywej | Wzoruj ponownie po zmianie |
| Rzutowanie swobodnych albo pochylonych krawędzi kołowych; rzutowana geometria podążająca za częścią | Rzutuj proste i równoległe krawędzie kołowe, potem wymiaruj |
| Wymiary sterowane (odniesienia) | Odczytuj rozmiary z panelu lub z właściwości części |
| Relacje współliniowości | Równoległość z odległością 0 |
| Wklejanie do innego programu (schowek systemowy) | Eksportuj DXF, STEP, STL albo 3MF |
| Wpisywanie łuków, współrzędnych względnych lub biegunowych | Wpisz linie i okręgi; rysuj łuki narzędziem Łuk |
| Wybieranie geometrii bez wskaźnika | Wymaga kliknięcia lub dotknięcia |

## Parametry i jednostki

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Konfiguracje zmieniające materiały; tabela projektowa CSV wyłączająca elementy | Konfiguracje ustawiają parametry i włączają oraz wyłączają elementy: zobacz [Konfiguracje i tabele projektowe](topic:design-tables); `partcraft variants` buduje zapisane konfiguracje po nazwie, z wyłączonymi elementami: zobacz [Paczka wariantów z konfiguracji](topic:variant-pack) |
| Równania na liczbach w panelach najnowszych elementów (płaszczyzna, przeciąganie, pochylenie i podobne) | Wpisz je w skrypcie albo za pomocą `partcraft set` ([Skrypty i wiersz poleceń](topic:scripts-and-cli)) |
| Część pokazywana w calach | Rozmiary pokazywane są w milimetrach; wpisz `2in` w polu liczby albo w wyrażeniu, a zamieni się na 50.8 |

## Pliki

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Edycja własnych elementów zaimportowanej bryły STEP (przychodzi bez historii) | Dodawaj albo wycinaj materiał własnymi elementami |
| Odczyt kolorów, nazw, struktury złożenia i PMI ze STEP | Niedostępne |
| Eksport glTF, OBJ, IGES, Parasolid; DWG części 3D (tylko paczka wariantów zapisuje DWG: arkusz rysunku) | STL albo 3MF dla siatek; STEP dla brył; DXF dla 2D |
| Otwieranie IGES, DXF lub plików innych programów (pliki `.3dm` otwierają się jako jedna bryła: [Otwórz model .3dm jako bryłę](topic:open-3dm-files)) | Poproś o STEP albo zamknięty STL, OBJ lub 3MF: [Otwórz STL, OBJ lub 3MF](topic:open-meshes) |
| Struktura złożenia (drzewo z nazwami części) w eksportowanym STEP | Złożeniowy STEP to jeden złożony zbiór umieszczonych brył |
| Zapis do folderu wybranego przez ciebie bez okna przeglądarki | Włącz „pytaj, gdzie zapisać” w ustawieniach pobierania przeglądarki |

## Rysunki

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Wymiary poza trzema wymiarami gabarytowymi (rozmiary otworów, położenia, tolerancje wymiarów) | Zaznacz PDF albo wyeksportuj DXF i wymiaruj w dwuwymiarowym programie CAD |
| Więcej niż jeden przekrój lub szczegół; widoki wyrównane, urwane i pomocnicze | Jeden przekrój i jeden szczegół na rysunek |
| Wolny tekst, uwagi i tabele na arkuszu (poza blokami tytułu i zmian) | Uwaga o wykończeniu albo tekst dodany w PDF |
| Rzut kąta pierwszego, przesuwane widoki, arkusze pionowe | Rzut kąta trzeciego, automatyczny układ, arkusze poziome A4–A0 i ANSI A–E |
| Żywy widok przekroju: kilka płaszczyzn albo pudełko przekroju naraz, kontur wokół cięcia, zapis przekroju w pliku | Jedna płaszczyzna naraz z {{ui:Widoki}} › {{ui:Widok przekroju}}; zobacz [Zajrzyj do środka widokiem przekroju](topic:section-view) |
| Rysunki złożeń z większą liczbą widoków, wymiarów albo wyniesień (callout), które można przesuwać | Jeden izometryczny (albo rozstrzelony) widok z automatycznymi numerami pozycji i listą części |
| Kopiowanie i wklejanie symboli GD&T i wykończenia | Umieść każdy poleceniem Datum, Frame lub Finish |
| Instrukcje: pliki STEP w {{ui:Z innego pliku…}} programu Illustrate, model przekazany wprost z ModelCraft albo BimCraft, obrazy o jakości śledzenia promieni, interaktywne 3D w PDF | Otwórz STEP w Projektowaniu i uruchom instrukcję {{ui:Z otwartej części}}; zapisz model jako glTF (.glb); obrazy PNG widoku 3D; interaktywny plik 3D: zobacz [Zacznij instrukcję w Illustrate](topic:illustrate) |

## Złożenia

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Przeguby zębate, zębatkowe, krzywkowe i śrubowe; przegub kulisty ograniczony do stożka; przeguby na zakrzywionych ścianach albo między punktami | Przeguby sztywne, obrotowe, suwakowe, cylindryczne, płaskie, kuliste i sworzeń w rowku na płaskich ścianach, każdy z własnymi ograniczeniami: zobacz [Zbuduj złożenie](topic:build-assembly) |
| Kroki rozstrzelenia, które obracają części, oraz przeciąganie części ustawianych przez przeguby | Proste kroki rozstrzelenia; usuń przegub, aby przesunąć część ręcznie |
| Podzespoły | Tylko jeden poziom części |
| Koła zębate, krzywki, kontakt | Niedostępne |

## Produkcja

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Obróbka zgrubna 3D zakrzywionych ścian, adaptacyjne czyszczenie 3D, obróbka resztek; wykańczanie waterline, pencil, radialne i spiralne; przejścia adaptacyjne zapisywane jako łuki | Wykańczanie 2,5-osiowe: płaszczyzna, kieszeń, adaptacyjne 2D, kontur, wiercenie i fazka: zobacz [Twórz ścieżki narzędzi i G-code](topic:manufacture); wykańczanie Parallel i Scallop całego modelu: zobacz [Wykańczanie 3D](topic:finish-3d) |
| Ścieżki 4- i 5-osiowe, toczenie, sondowanie | Ustaw jedną stronę naraz z osią narzędzia na karcie Ustawienia |
| Sprawdzanie kolizji uchwytu i trzonka | Zwracaj uwagę na ostrzeżenia o długości rowka i sprawdź w symulatorze swojego sterowania |
| Sondowanie, cykle trwałości narzędzia i podprogramów, osie 4. i 5. oraz kody tokarki w poście; wczytywanie plików postów innych programów | Napisz albo zmień post we własnym formacie PartCraft: zobacz [Edytowalne postprocesory](topic:post-processors) |
| G-code w calach (G20) | Tylko milimetry (G21) |

## Symulacja i projektowanie generatywne

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Nieliniowe badania: plastyczność, duże ugięcia, kontakt między częściami, zmęczenie | Liniowe statyczne i częstości własne: zobacz [Sprawdź naprężenie i ugięcie](topic:simulation); utrzymuj współczynnik bezpieczeństwa wyraźnie powyżej 1 |
| Nieliniowe wyboczenie (imperfekcje, wyboczenie po utracie stateczności, przeskok) | Liniowe współczynniki obciążenia wyboczeniowego z dużym marginesem: zobacz [Ciepło, naprężenie cieplne i wyboczenie](topic:thermal-and-buckling) |
| Promieniowanie między ścianami (współczynniki kształtu), opór styku, materiały zależne od temperatury, bezwładność w naprężeniu cieplnym (fale szoku termicznego) | Promieniowanie do otoczenia, ustalone lub quasi-statyczne naprężenie cieplne w czasie, stałe właściwości: zobacz [Ciepło, naprężenie cieplne i wyboczenie](topic:thermal-and-buckling) |
| Automatyczne zagęszczanie dla przejściowego ciepła i badań z obciążeniem cieplnym; rozrzedzanie siatki tam, gdzie błąd jest mały; cel na wielkości lokalnej (szczytowe naprężenie w jednym miejscu) | **Zagęść automatycznie** dla badań statycznych, wyboczeniowych, częstości własnych i ustalonych cieplnych, na błędzie całej części: zobacz [Sprawdź naprężenie i ugięcie](topic:simulation); w innym wypadku zmniejsz rozmiar elementu |
| Obciążenia łożysk i śrub, siły zdalne, momenty, sprężyny, wymuszone przemieszczenia | Siły i ciśnienia na ścianach, grawitacja; ściany utwierdzone i bez tarcia |
| Symulacja złożeń; materiały różniące się kierunkiem (warstwy druku, kompozyty) | Jedna część, jeden izotropowy materiał |
| Kilka wątków solwera dla badań czworościennych, przepływu ciepła i projektowania generatywnego; jakiekolwiek wątki na stronie, która nie jest izolowana między źródłami | Badania wokselowe, wyboczenie, naprężenie w czasie i przepływ laminarny korzystają z wątków tam, gdzie strona na to pozwala: zobacz [Ustawienia PartCraft](topic:settings) |
| Przepływ turbulentny z dokładnością projektową (model Spalart–Allmaras jest dostępny jako eksperymentalny: tarcie w rurze o 30 do 34 % za wysokie, ponowne przyleganie za progiem o 21 do 39 % za krótkie; planowane: drobniejsze komórki przy ścianach), ciepło w przepływie, przepływ nieustalony, swobodne powierzchnie, płyny nienewtonowskie, wirujące części | Laminarny, ustalony, izotermiczny przepływ płynu newtonowskiego albo eksperymentalny model turbulentny do jakościowych wzorców: zobacz [Symuluj przepływ płynu](topic:flow-simulation); panel ostrzega, gdy liczba Reynoldsa przekracza zakres laminarny |
| Limity naprężeń i reguły produkcyjne (nawisy, kierunki frezowania) w projektowaniu generatywnym; kilka materiałów w jednym kształcie | Najsztywniejszy kształt dla objętości; sprawdź wynik w Symulacji: zobacz [Wyhoduj kształt z obciążeń](topic:generative-design) |
| Wynik jako edytowalna (gładka, parametryczna) bryła | STL, STEP z facetami albo część z wynikiem jako zaimportowana bryła z facetów |
| Projektowanie maszyn elektrycznych: wirnik obracający się w stojanie, moment względem kąta, nasycająca się stal, magnesy tracące siłę za swoim kolanem, prądy wirowe i straty w żelazie i miedzi; pola magnetyczne w 3D albo na zakrzywionych siatkach | Dwuwymiarowa magnetostatyka liniowa na siatce w bibliotece analiz: cewki, żelazo, magnesy trwałe na linii odzysku, szczeliny, indukcyjność i przyciąganie: zobacz [Pola magnetyczne w 2D](topic:magnetic-fields-2d) |

## Skrypty

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Podpowiedzi po najechaniu, punkty przerwania i krokowanie w edytorze skryptów | Szukanie, zwijanie i uzupełnianie są w: zobacz [Pisanie i uruchamianie skryptów](topic:craftscript); resztę w swoim edytorze: {{ui:Zapisz}} i {{ui:Otwórz}} w grupie Skrypt przenoszą skrypty do i z programu; wbudowane funkcje są wymienione w [Język CraftScript](topic:craftscript-language) |
| Punkty przerwania i krokowanie przez skrypt | `disp` i `fprintf` po drodze; {{key:Mod+Enter}} uruchamia kilka zaznaczonych linii naraz |
| Pola i wykresy, które skrypt pokazuje, rysowane w obszarze Projektowanie; skrypty zmieniające parametry części | Pokazują się w obszarze Skrypt; skrypty czytają parametry przez `param` (zobacz [Pisanie i uruchamianie skryptów](topic:craftscript)) i zmieniają je na karcie {{ui:Parametry}} |
| Obrazy i tabele obok wykresów; edycja wykresu (zoom, granice osi) przed zapisem | Obok siebie pokazują wykresy; zapisz wykres jako PNG, SVG lub CSV i dokończ go gdzie indziej |
| numpy i inne pakiety Pythona; Python offline; składanie kodu Pythona w edytorze; Pascal Script | Biblioteka standardowa Pythona, CraftScript i Lua: zobacz [Skrypty w Pythonie](topic:craftscript-python) |
| Przekazywanie funkcji Lua do funkcji wbudowanych; wywoływanie funkcji biblioteki z Lua po nazwie zbudowanej w czasie działania skryptu | Wpisz nazwę funkcji biblioteki w skrypcie (`cs.static_tet(…)`) albo wywołaj ją ze skryptu CraftScript |

## Aplikacja

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Zapis w chmurze, udostępnianie i historia wersji | Jeszcze niedostępne. Zapisuj pliki na komputerze i zachowuj wersje po nazwie |
| PartCraft jako zainstalowana aplikacja na iPadzie i iPhonie | Używaj PartCraft w przeglądarce urządzenia; na Androidzie i na komputerze działa też w CadCraft Studio (getcadcraft.com/download) |
| Menu kontekstowe (prawy przycisk) | Pasek narzędzi i prawy panel |
| Pełna praca offline od świeżego startu | Tylko wtedy, gdy aplikacja została zapisana do pracy offline: zobacz [Praca offline](common:offline) |

Napisz, czego najbardziej ci brakuje, przez stronę wsparcia witryny: to kształtuje to, co będzie dalej.

## Engineer (generatory i pola)

| Jeszcze nie zbudowano | Zamiast tego, dziś |
|---|---|
| Króćce, porty i złączki na wygenerowanym wymienniku ciepła; krzywe temperatury dla wytrzymałości materiału; straty w trójniku kolektora | Generatory budują rdzeń i rury; dodaj złączki w Projektowaniu; używaj wartości materiału w temperaturze pokojowej z współczynnikiem bezpieczeństwa |
| Dodawanie generatorów z katalogu dodatków jednym kliknięciem | {{ui:Otwórz}} w obszarze roboczym Engineer dodaje generator z pliku |
| Plik pola drobniejszy niż rozmiar wokseli generatora; odczyt plików `.vdb` | Zapisz drobniejsze pole ze skryptu; `.vdb` jest zapisywany, nie odczytywany |
| Obliczenia kodowe zbiornika ciśnieniowego | Klasyczne wzory dla cienkich i grubych ścian, ze współczynnikiem bezpieczeństwa, który wybierzesz; nie margines kodowy |
| Generatory dla pozostałych aplikacji | Tylko PartCraft w tej wersji |
