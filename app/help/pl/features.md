---
title: Elementy i ich opcje
summary: Każdy element na pasku narzędzi z jego ustawieniami, wartościami domyślnymi i ograniczeniami, od wyciągania po zaokrąglenie, powłokę i zaimportowane bryły STEP, działania wspólne dla wszystkich elementów oraz ustawienia części.
keywords: elementy, wyciągnij, wytnij, obrót, wycięcie obrotowe, otwór, pogłębienie, wzór liniowy, wzór kołowy, lustro, zaokrąglenie, fazka, powłoka, import, opcje, domyślne, ustawienia, rozdzielczość, krzywe, ścianki, wyłącz, cofnij
from: ab3a598e
---

Elementy są wymienione w historii w kolejności, w jakiej powstały, i są przebudowywane z góry na dół. Każdy nosi nazwę od swojego rodzaju z numerem: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft buduje każdy element jądrem siatkowym. Zaokrąglenie i fazka działają na prostych krawędziach między dwiema płaskimi ścianami, a powłoka otwiera płaskie ściany. Zaimportowane bryły wymagają dokładnego jądra, którego ta wersja nie ma: nie są jeszcze zbudowane, a ich sekcja poniżej opisuje je jako część zrobioną w wcześniejszej wersji, która je zachowuje. Zob. [Jądro siatkowe](topic:solid-kernels) i [Czego jeszcze nie zbudowano](topic:not-built-yet).

## Szkic

| Ustawienie | Uwagi |
|---|---|
| Płaszczyzna | Front, Top lub Right, albo płaska ściana. Tylko do podglądu, nie zmienia się: aby przenieść szkic, utwórz nowy |
| Stan | W pełni zdefiniowany, Niedostatecznie zdefiniowany (z liczbą stopni swobody), Nadmiarowo zdefiniowany lub Pusty |
| Geometria, Relacje | Ile krzywych, punktów i relacji |
| Wymiary sterujące | Każdy wymiar szkicu, edytowalny |

Przyciski: {{ui:Edytuj szkic}}, {{ui:Eksportuj jako DXF}}.

## Wyciągnij i Wytnij

{{ui:Wyciągnij}} i {{ui:Wytnij}} tworzą ten sam element, różniący się punktem startowym ustawień.

| Ustawienie | Wybory | Wyciągnij zaczyna od | Wytnij zaczyna od |
|---|---|---|---|
| Operacja | Występ (dodaj materiał), Wytnij (usuń materiał), Przecięcie (zachowaj część wspólną), Nowa bryła (w tej wersji jeszcze nie zbudowano) | Występ | Wytnij |
| Koniec | Ślepo (głębokość), Płaszczyzna środkowa (w obu kierunkach), Przez wszystko | Ślepo | Przez wszystko |
| Głębokość (mm) | Powyżej 0, do 1,000,000 | 10 | 10 |
| Odwróć kierunek | Wył. / wł. | Wył. | Wył. |

- Profil: każda zamknięta pętla linii ciągłych, okręgów i łuków w szkicu. Pętle wewnątrz pętli są otworami.
- Przez wszystko działa tylko dla wycięć. Sięga na wylot przez część po wybranej stronie.
- Wycięcie idzie w materiał, z dala od zewnętrznej strony płaszczyzny szkicu; Odwróć kierunek zmienia to na przeciwne.

## Obrót i wycięcie obrotowe

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| Operacja | Występ, Wytnij | Występ ({{ui:Obróć}}), Wytnij ({{ui:Więcej}} › {{ui:Obrotowe wycięcie}}) |
| Kąt (°) | Powyżej 0, do 360 | 360 |
| Oś | Pierwsza oś, dowolna linia lub oś szkicu, albo element osi leżący w płaszczyźnie szkicu | Pierwsza oś |

- Profil musi leżeć po jednej stronie osi. Może ją dotykać.
- Oś obrotu może być użyta przez wzory kołowe i połączenia złożenia.

## Otwór

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| Typ | Prosty, Pogłębiony | Prosty |
| Średnica (mm) | Powyżej 0 | 6 |
| Przez wszystko | Wł. / wył. | Wł. |
| Głębokość (mm) | Gdy Przez wszystko jest wyłączone | 10 |
| Średnica pogłębienia ⌀ | Szersze niż otwór | 11 |
| Głębokość pogłębienia | Płycej niż otwór ślepy | 6 |
| Odwróć kierunek | Wył. / wł. | Wył. |

- Jeden otwór w każdym luźnym punkcie szkicu (punkty utworzone narzędziem Punkt). Panel pokazuje, ile ich jest.
- Otwory wiercą prostopadle do płaszczyzny szkicu, w materiał.
- Oś każdego otworu może być użyta przez połączenia złożenia („Hole1, hole 2”).

## Wzór liniowy

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| Elementy do skopiowania | Dowolne elementy bryłowe powyżej niego | Zaznaczony element, a jeśli brak, ostatni element bryłowy |
| Kierunek | Oś X, oś Y, oś Z; linia wcześniejszego szkicu; oś obrotu; wskazana krawędź | Oś X (albo krawędź wskazana przy dodawaniu) |
| Odstęp (mm) | Dowolna liczba | 20 |
| Liczba | 1 do 1000, łącznie z oryginałem | 3 |
| Odwróć kierunek | Wył. / wł. | Wył. |

## Wzór kołowy

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| Elementy do skopiowania | Jak we Wzorze liniowym | Jak we Wzorze liniowym |
| Oś | Jak Kierunek powyżej | Oś ostatniego obrotu, a jeśli brak, oś Y (albo wskazana krawędź) |
| Kąt (°) | Powyżej 0, do 360. 360 rozmieszcza kopie równomiernie dookoła; mniej rozkłada je na tym kącie | 360 |
| Liczba | 1 do 1000, łącznie z oryginałem | 6 |
| Odwróć kierunek | Wył. / wł. | Wył. |

## Lustro

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| Lustro | Cała bryła (w stanie dotychczasowym) albo wybrane elementy | Zaznaczony element, a jeśli brak, cała bryła |
| Płaszczyzna lustra | Front, Top lub Right; płaska ściana | Płaszczyzna Right albo płaska ściana wskazana przy dodawaniu |

## Zaokrąglenie i fazka

W tej wersji jądro siatkowe buduje je na prostych krawędziach między dwiema płaskimi ścianami (narożniki zewnętrzne lub wewnętrzne), z jednym promieniem. Okrągła krawędź daje komunikat: „Zaokrąglenie: w tej wersji tylko proste krawędzie między dwiema płaskimi ścianami (buduje je jądro siatkowe). Zaokrąglij lub sfazuj krzywe krawędzie w szkicu.” Tam, gdzie zaokrąglone krawędzie stykają się w narożniku, są ścięte na ukos, a element ostrzega: „Zaokrąglenie przez jądro siatkowe: tam, gdzie zaokrąglone krawędzie się stykają, są ścięte na ukos, a nie wtopione.” Wszystkie typy fazki (równa odległość, dwie odległości, odległość i kąt, z **Zamień strony**) działają. Zob. [Zaokrąglanie, fazkowanie i wydrążanie](topic:fillet-chamfer-shell).

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| Promień (mm) (Zaokrąglenie) | Powyżej 0 | 2 |
| Odległość (mm) (Fazka) | Powyżej 0, ta sama na obu ścianach | 1 |
| Krawędzie | Wskazane krawędzie, każda wymieniona przez dwie ściany, które łączy („Extrude1 end face × Extrude1 side”), z **Usuń** | Krawędzie wskazane przy dodawaniu |

- Wskaż krawędzie przed wyborem przycisku ({{key:Shift}}+kliknięcie, aby wskazać kilka), albo wybierz przycisk bez wskazania i kliknij krawędzie później.
- {{ui:Wskaż krawędzie}} (albo dwukrotne kliknięcie elementu) zmienia krawędzie.
- Krawędzie są zapamiętywane przez dwie ściany, które łączą, więc przetrwają zmiany wymiarów wcześniej w historii.

## Powłoka

Buduje ją jądro siatkowe. Można otwierać tylko płaskie ściany („Powłoka: w tej wersji otwiera tylko płaskie ściany (buduje ją jądro siatkowe).”); ścianki o różnej grubości nie są jeszcze zbudowane. Zob. [Zaokrąglanie, fazkowanie i wydrążanie](topic:fillet-chamfer-shell).

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| Ścianka (mm) | Powyżej 0 | 2 |
| Ścianki rosną na zewnątrz (ściany pozostają w środku) | Wył.: ścianki idą do środka. Wł.: ścianki idą na zewnątrz | Wył. |
| Otwarte ściany | Usunięte ściany, co najmniej jedna, z **Usuń** | Ściany wskazane przy dodawaniu |

{{ui:Wskaż ściany}} zmienia otwarte ściany.

## Zaimportowana bryła

Powstaje przez otwarcie pliku STEP, STL, OBJ lub 3MF: bryła z trójkątów bez własnej historii ([Otwieranie pliku STEP](topic:import-step), [Otwieranie STL, OBJ lub 3MF](topic:open-meshes)). Pokazuje plik, z którego pochodzi, i to, co import naprawił; **Jednostki w pliku**, **Oś w górę w pliku** i **Użyj jej do** pozostają edytowalne. Bryła STEP zaimportowana przez starszą wersję z dokładnym jądrem pozostaje w historii oznaczona jako niezbudowana; otwórz ponownie plik STEP, aby wczytać ją jako trójkąty.

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| Oś w górę w pliku | Z w górę (większość CAD), Y w górę | Z w górę |

Wzory i lustra mogą kopiować zaimportowaną bryłę, ale nie zaokrąglenie, fazkę ani powłokę.

## Wspólne dla każdego elementu

Na dole panelu każdego elementu:

| Przycisk | Działanie |
|---|---|
| {{ui:Wyłącz}} / {{ui:Przywróć}} | Wyłącza lub włącza element. Elementy, które go potrzebują, nie są budowane, gdy jest wyłączony |
| {{ui:Cofnij do tego miejsca}} | Buduje tylko elementy powyżej tego. Nowe elementy trafiają na pasek cofnięcia |
| {{ui:Przesuń w górę}} / {{ui:Przesuń w dół}} | Zmienia kolejność, gdy nic, czego używa, nie znalazłoby się pod nim. W przeciwnym razie przycisk jest szary, z podaniem przyczyny |
| {{ui:Usuń}} | Usuwa go oraz (po zapytaniu) każdy element, który go używa |
| Nazwa | Zmienia nazwę (do 60 znaków) |

Elementy ze szkicem wymieniają też **Wymiary szkicu**, edytowalne w miejscu.

## Stany w historii

| Stan | Wygląd | Znaczenie |
|---|---|---|
| Zbudowany | Normalnie | Wszystko w porządku |
| Ostrzeżenie | ⚠ | Zbudowany, ale do sprawdzenia: „Nadmiarowo zdefiniowany: 1 relacja jest zbędna.” albo „Po tym nic nie zostało z części.” |
| Błąd | ⚠ błąd, czerwony | Nie udało się zbudować; komunikat podaje przyczynę |
| Niezbudowany | ⚠ niezbudowany | Wymaga elementu, który się nie powiódł, jest wyłączony lub cofnięty, albo wymaga dokładnego jądra, którego ta wersja nie ma („Przeciągnij: jeszcze nie zbudowano. …”) |
| Wyłączony | wył. | Wyłączony |
| Cofnięty | szary, poniżej paska cofnięcia | Niezbudowany, dopóki nie przesuniesz do przodu |

## Ustawienia części

Kliknij puste miejsce, aby nic nie było zaznaczone. Prawy panel pokazuje **Część**:

- **Nazwa**: nazwa części, używana w nazwach plików i tabliczce rysunkowej (do 120 znaków).
- **Krzywe**: zob. niżej.

### Rozdzielczość krzywych

Jądro siatkowe buduje samą bryłę z płaskich ścianek, więc widok, STL, 3MF, STEP ze ściankami, objętość i widoki rysunku wszystkie podążają za **Krzywe**: ile ścianek na pełny obrót.

| Ustawienie | Ścianki na obrót | Objętość kształtu okrągłego |
|---|---|---|
| Zgrubne (32 na obrót) | 32 | Około 0.64 % poniżej wartości rzeczywistej |
| Normalne (64 na obrót) | 64 | Około 0.16 % poniżej (domyślne) |
| Dokładne (128 na obrót) | 128 | Około 0.04 % poniżej |
| Bardzo dokładne (256 na obrót) | 256 | Około 0.01 % poniżej |

Dokładniejsze krzywe dają gładsze eksporty i widoki, ale wolniejsze przebudowy. Ustawienie jest zapisywane w pliku części.

## Jeszcze nie zbudowano

Zaokrąglenia o zmiennym promieniu, zaokrąglenia i fazki na okrągłych krawędziach, powłoki otwierające zakrzywione ściany, pochylenie na zakrzywionych ścianach, przeciąganie, loft, żebro, bryły STEP z dokładnymi zakrzywionymi ścianami, nowe bryły, zwężenia (pochylenia), „do” ściany lub wierzchołka oraz odniesienia do ścian i krawędzi bryły wymagają dokładnego jądra, którego ta wersja nie ma. Nie są też zbudowane: otwory gwintowane i pogłębiane stożkowo. Zob. [Czego jeszcze nie zbudowano](topic:not-built-yet).
