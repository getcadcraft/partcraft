---
title: Przejście z innego modelera parametrycznego
summary: Jak nawyki stacjonarnych modelerów części parametrycznych odpowiadają PartCraft oraz różnice, które zaskakują doświadczonych użytkowników w pierwszej godzinie.
keywords: przejście, migracja, znajome, menedżer cech, drzewo projektu, wymiar inteligentny, wyciągnięcie wypustu, wyciągnięcie wycięcia, kreator otworów, więzy złożenia, wykrywanie kolizji, pasek cofania, menedżer właściwości, mysz, różnice
from: fbacaee1
---

Jeśli projektujesz części w SolidWorks, większość pomysłów PartCraft będzie znajoma: szkice na płaszczyznach Front, Top i Right, relacje i wymiary inteligentne, historia elementów z paskiem cofania oraz złożenia ułożone więzami złożenia. Sposób dojścia do nich miejscami się różni, a ta pierwsza wersja robi mniej. Ta strona mapuje twoje nawyki i wymienia niespodzianki.

## Nawyki, odwzorowane

| Jesteś przyzwyczajony do | W PartCraft |
|---|---|
| Drzewo projektu po lewej | Historia po lewej: płaszczyzny, potem elementy, szkice wcięte pod elementem, który ich używa |
| Płaszczyzny Front, Top i Right | Te same trzy, przechodzące przez początek. Front to płaszczyzna XY, Top to XZ, Right to YZ; Y skierowane w górę |
| Szkic na płaszczyźnie lub ścianie, potem narożnik potwierdzenia, aby wyjść | {{ui:Szkic}} ({{key:S}}) na zaznaczonej płaszczyźnie lub płaskiej ścianie; {{ui:Wyjdź}} albo {{key:Esc}}, aż szkic się zamknie |
| Wymiar inteligentny | {{ui:Wymiar}} ({{key:D}}). Kliknij jeden lub dwa elementy, potem miejsce, w którym ma stanąć liczba. Miejsce umieszczenia wybiera wymiar poziomy, pionowy albo równoległy |
| Dodaj relacje w panelu właściwości | Zaznacz elementy, potem przyciski relacji w prawym panelu (• Zgodność, Poziomo, Równoległość, Styczna, Równość i tak dalej) |
| Automatyczne relacje podczas szkicowania | Przyciąganie dodaje relacje zgodności, punktu na krzywej, poziome i pionowe |
| Kolory szkicu: niebieski / czarny / czerwony | Ta sama idea: niebieski przy niedokończonym zdefiniowaniu, czarny gdy w pełni zdefiniowany, czerwony gdy nadmiarowy. Etykieta pokazuje pozostałe stopnie swobody |
| Linia osiowa dla obrotów | {{ui:Linia osiowa}} ({{key:N}}); {{ui:Obróć}} używa pierwszej linii osiowej, chyba że wybierzesz inną oś |
| Zaokrąglenie szkicu | {{ui:Zaokrąglenie}} ({{key:F}}) w szkicu: kliknij narożnik, wpisz promień |
| Przełącznik geometrii konstrukcyjnej | {{ui:Konstrukcja}} ({{key:Q}}) |
| Wyciągnięty występ | {{ui:Wyciągnij}}: Na głębokość, Symetrycznie względem płaszczyzny, Do ściany / następnej / wierzchołka, Odsunięcie od ściany, drugi kierunek, pochylenie, jeden kontur (Wybierz obszary) |
| Wyciągnięte wycięcie | {{ui:Wytnij}}: zaczyna jako Przez wszystko; przełącz na Na głębokość, aby uzyskać kieszeń |
| Obrotowy występ / wycięcie | {{ui:Obróć}} / {{ui:Więcej}} › {{ui:Obrotowe wycięcie}} |
| Płaszczyzna / oś / punkt odniesienia | {{ui:Więcej}} › {{ui:Płaszczyzna}}, {{ui:Oś}}, {{ui:Punkt}} (zobacz [Płaszczyzny, osie i punkty odniesienia](topic:reference-geometry)) |
| Przeciągnięty / loftowany występ lub wycięcie, pochylenie | {{ui:Więcej}} › {{ui:Pochylenie}} na płaskich ścianach (zobacz [Przeciągnięcie, loft i pochylenie](topic:sweep-loft-draft)). {{ui:Przeciągnięcie}} i {{ui:Loft}} nie są jeszcze zbudowane w tej wersji (wymagają dokładnego jądra) |
| Kreator otworów | {{ui:Otwór}} w każdym luźnym punkcie szkicu: prosty, z pogłębieniem walcowym, ze stożkowym pogłębieniem (90° / 82°) albo gwintowany metryczny ISO M2–M24, przelotowy lub ślepy |
| Wzór liniowy / kołowy, lustro | {{ui:Liniowy}}, {{ui:Kołowy}}, {{ui:Lustro}} (elementy albo cała bryła) |
| Zaokrąglenie i fazka krawędzi | {{ui:Zaokrąglenie}} / {{ui:Fazka}}: kliknij krawędź, {{key:Shift}}+kliknięcie kolejnych, potem przycisk. Jeden promień; fazki równe, dwuodległościowe lub odległość-kąt. W tej wersji tylko proste krawędzie między dwiema płaskimi ścianami, a zaokrąglenia spotykające się w narożniku są ścinane na ukos. Zaokrąglaj lub ścinaj zakrzywione krawędzie w szkicu ({{ui:Zaokrąglenie}} w szkicu, {{key:F}}) |
| Powłoka | {{ui:Powłoka}}: kliknij płaskie ściany, które mają być otwarte, potem przycisk. Jedna grubość ścianki |
| Otwórz plik STEP | {{ui:Otwórz}}: odczytywany jako trójkąty, bryła do budowy dalej ([Otwórz plik STEP](topic:import-step)) |
| Edytuj element, potem OK | Kliknij element; zmień liczby po prawej; część przebudowuje się podczas pisania. Nie ma OK ani Anuluj: użyj {{key:Mod+Z}} |
| Edytuj szkic | Kliknij dwukrotnie szkic w historii |
| Przebudowa | Automatyczna po każdej zmianie. Nie ma klawisza przebudowy |
| Wyłącz / Przywróć | {{ui:Wyłącz}} / {{ui:Przywróć}} w prawym panelu |
| Przeciągnij pasek cofania | {{ui:Cofnij do tego miejsca}} na elemencie; kliknij „Pasek cofania · przejdź naprzód”, aby wrócić |
| Przeciągnij element w drzewie, aby zmienić kolejność | {{ui:Przesuń w górę}} / {{ui:Przesuń w dół}} albo {{key:Alt+Up}} / {{key:Alt+Down}}; odmowa z podaniem przyczyny, gdy złamałoby zależność |
| Edytuj wymiary, klikając dwukrotnie model | Zaznacz element: wymiary jego szkicu są wymienione w prawym panelu |
| Więzy złożenia: zgodność, współśrodkowość, odległość, kąt | {{ui:Połączenie}} ({{key:J}}): wybierz płaską ścianę na każdej części; połączenie ustawia je ściana do ściany. **Wyśrodkuj na** osi działa jak współśrodkowość; **Odsunięcie** jak odległość; **Kąt** jak kąt |
| Element stały | Pierwsza część jest uziemiona; {{ui:Ustaw jako część uziemioną}} ją zmienia |
| Wstaw komponent | {{ui:Dodaj kopię}} albo {{ui:Duplikuj}} (kolejna kopia) albo {{ui:Wstaw}} (z pliku części) |
| Edytuj część w złożeniu | {{ui:Edytuj część}}, potem {{ui:Wstecz}} |
| Wykrywanie interferencji | {{ui:Kolizja}} |
| Przesuwanie komponentu, by zobaczyć ruch | Przeciągnij suwak kąta lub odsunięcia połączenia obrotowego albo suwakowego; {{ui:Sprawdź ruch pod kątem kolizji}} przesuwa go przez zakres. Część bez połączenia: **Przesuń ręcznie** (strzałki do przeciągania albo wpisane wartości) |
| Pomiar / inspekcja | {{ui:Widoki}}, potem {{ui:Pomiar}} ({{key:M}}): odległości, kąty, promienie, pola; {{ui:Właściwości masowe}} |
| Widok rozstrzelony, zestawienie | W złożeniu, gdy nic nie jest zaznaczone: **Widoki rozstrzelone** i **Zestawienie materiałów** w prawym panelu |
| Właściwości masowe | Pole **Część**: objętość, pole powierzchni, rozmiar bryły z płaskich ścian (na zaokrąglonych częściach nieco zaniżone). Brak masy: nie ma jeszcze materiałów |
| Zapisz, Zapisz jako STEP | {{ui:Zapisz}} pobiera `.partcraft.json`; {{ui:Eksport}} ma STL, 3MF, dokładny STEP (AP242 lub AP214), STEP z płaskich ścian, DXF i rysunek PDF |
| Utwórz rysunek z części | {{ui:Rysunek}}: automatyczny arkusz A3 z trzema widokami, izometrią, jednym przekrojem, jednym detalem, bazami, ramkami tolerancji kształtu i położenia oraz znakami chropowatości. Wymiarowane są tylko gabaryty |
| Obrót przeciąganiem środkowym | **Przeciągnięcie lewym** obraca tutaj. Przeciągnięcie środkowym lub prawym przesuwa widok. Kółko powiększa w miejscu wskaźnika |
| Orientacja widoku, Normalnie do | Menu {{ui:Widoki}}; {{ui:Prostopadle do}} dla wybranej ściany, płaszczyzny lub szkicu |
| Powiększ do dopasowania (F) | {{key:F}} albo {{ui:Dopasuj}} (w szkicu {{key:F}} to narzędzie Zaokrąglenie) |
| Menu kontekstowe prawego przycisku | Brak. Przeciąganie prawym przesuwa widok; w szkicu kliknięcie prawym kończy łańcuch linii |

:::tip
Jeśli twoje ręce znają SolidWorks, wybierz styl menu {{ui:Drzewo elementów}} w {{ui:Ustawienia}} › {{ui:PartCraft}} › {{ui:Menu, klawisze i mysz}}: wstążka kart Elementy, Szkic, Powierzchnie, Ocena, Rysunek, Złożenie i Widok, środkowy przycisk obraca, {{key:Shift}} i środkowy przycisk przesuwają, a lewy przycisk tylko wybiera. Zobacz [Menu, klawisze i mysz](topic:menus-keys-and-mouse).
:::

## Różnice, które potykają ludzi

**Cały szkic jest profilem.** Wyciągnięcie i obrót używają każdej zamkniętej pętli w szkicu. Nie możesz wybrać jednego obszaru ani jednego konturu szkicu dla elementu. Używaj jednego szkicu na element.

**Który szkic bierze element.** Element używa szkicu, który właśnie zamknąłeś, albo tego zaznaczonego w historii. Gdy nic nie jest zaznaczone, bierze najnowszy szkic, którego jeszcze nie używa żaden element. Jeśli wybrano złe, zaznacz właściwy szkic i wybierz element ponownie.

**Zmiany działają podczas pisania.** Nie ma okna elementu z OK i Anuluj. Każda liczba przebudowuje część od razu, a drogą powrotu jest {{key:Mod+Z}}. Lista cofnięć obejmuje równie edycje szkiców, elementy i ustawienia.

**Nadmiarowe zdefiniowanie nigdy nie jest tolerowane po cichu.** Nie ma wymiarów sterowanych (referencyjnych). Wymiar, który inne relacje już ustalają, jest zgłaszany jako nadmiarowy („jest już wynikający. Usuń go.”). Wymiar sprzeczny pozostawia geometrię nietkniętą i robi się czerwony. Usuń jeden albo cofnij.

**Przeciągnięcia i lofty nie są jeszcze zbudowane; zaokrąglenia, fazki, powłoki i pochylenia mają ograniczenia.** Ta wersja PartCraft buduje każdą część jądrem siatkowym. Znacznik na pasku stanu zawsze mówi „Mesh kernel”. Zaokrąglenia i fazki działają na prostych krawędziach między dwiema płaskimi ścianami. Tam, gdzie zaokrąglenia spotykają się w narożniku, są ścinane na ukos, a nie łączone. Powłoki się otwierają, a pochylenia dotyczą tylko płaskich ścian. Elementy wymagające dokładnego jądra pozostają klikalne, ale po wybraniu mówią „jeszcze nie zbudowano”. Zobacz [Jądro siatkowe](topic:solid-kernels) i [Czego jeszcze nie zbudowano](topic:not-built-yet).

**Dwa przyciski o nazwie Zaokrąglenie.** W szkicu {{ui:Zaokrąglenie}} ({{key:F}}) zaokrągla narożnik szkicu. Na części {{ui:Zaokrąglenie}} w grupie Elementy zaokrągla krawędzie bryły (w tej wersji proste krawędzie między płaskimi ścianami). W tej wersji nie ma przeciągnięcia ani loftu: zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet).

**Otwory potrzebują luźnych punktów.** {{ui:Otwór}} wierci w punktach utworzonych narzędziem Punkt. Środki okręgów i końce linii się nie liczą.

**Przez wszystko dotyczy tylko wycięć.** Występ potrzebuje głębokości. Nie ma jeszcze warunków końca „do wierzchołka / powierzchni / następnej”.

**Bryła jest podzielona na ściany.** Jądro siatkowe buduje zaokrąglone powierzchnie z płaskich facetów, więc widok, objętości oraz eksporty STL i 3MF są z nich zbudowane. **Krzywe** w panelu części czynią je drobniejszymi. Dokładny eksport STEP nie: zapisuje zaokrąglone powierzchnie na ich prawdziwych kształtach.

**Tylko milimetry.** Nie ma jeszcze ustawienia calowego. Mnóż wymiary w calach przez 25.4, wpisując je.

**Y jest w górę.** Płaszczyzna Front jest zwrócona do ciebie, a Top patrzy na część z góry, zgodnie z oczekiwaniem. Osią w górę świata jest jednak Y. Eksporty STL, 3MF i dokładny STEP są obracane tak, by Z było w górę. STEP z płaskich ścian zachowuje Y w górze.

**Więzy złożenia to ściany, a nie pary elementów geometrii.** Połączenie zawsze zaczyna się od dwóch płaskich ścian ustawionych ściana do ściany. Dla trzpienia w otworze wybierz płaską ścianę wokół otworu i barek trzpienia, potem ustaw **Wyśrodkuj na** na oś otworu i oś obrotu trzpienia. Części, do których nie dochodzą połączenia, pozostają tam, gdzie je wstawiono. Nie możesz ich przeciągać. Połączenia w pętli nie są rozwiązywane.

**Zapis to pobieranie.** Nie ma pliku, który nadpisujesz. Każdy zapis to nowy plik w folderze Pobrane. Najpierw nazwij część i trzymaj pliki w folderze projektu.

**Brak menu kontekstowych i kart menedżera poleceń.** Wszystko jest na pasku narzędzi i w prawym panelu. Pasek zmienia się w zależności od tego, co robisz: narzędzia szkicu pojawiają się tylko w szkicu, a narzędzia złożenia tylko w złożeniu.

**W szkicu klawisze to pojedyncze litery.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} i {{key:S}} wybierają narzędzia bez modyfikatora. Zobacz [Klawisze i mysz](topic:keyboard).
