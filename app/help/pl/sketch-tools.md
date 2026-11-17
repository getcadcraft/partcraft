---
title: Spline, przycinanie, odsunięcie i inne narzędzia szkicu
summary: Rysuj spline'y z punktami dopasowania i kontrolnymi, przycinaj i wydłużaj krzywe, odsuwaj łańcuch, odbijaj względem linii osiowej, dodawaj wielokąty i rowki, wzoruj geometrię szkicu i rzutuj krawędzie bryły.
keywords: spline, punkt dopasowania, punkt kontrolny, b-spline, nurbs, krzywa, przytnij, wydłuż, odsuń, lustro, symetria, wielokąt, sześciokąt, rowek, wzór, wzór liniowy, wzór kołowy, rzutuj, rzutuj krawędź, uwzględnij, konwertuj elementy
from: 3ecb166a
---

Te narzędzia działają w otwartym szkicu. {{ui:Spline}} i {{ui:Przytnij}} są na pasku narzędzi. Pozostałe są pod {{ui:Więcej}} na końcu narzędzi szkicu. Każde narzędzie to jeden krok cofnięcia, a {{key:Esc}} je zatrzymuje. Podstawowe narzędzia rysowania: [Narysuj pierwszy szkic](topic:sketch-basics).

## Spline'y

Spline to gładka krzywa. Istnieją dwa rodzaje.

| Narzędzie | Klawisz | Jak rysować |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Kliknij punkty, przez które przechodzi krzywa. Zakończ klawiszem {{key:Enter}}, {{key:Esc}}, kliknięciem prawym przyciskiem albo dwukrotnym kliknięciem. Kliknij ponownie pierwszy punkt, aby zamknąć spline |
| {{ui:Spline z punktami kontrolnymi}} (pod {{ui:Więcej}}) | | Kliknij punkty kontrolne. Krzywa jest ciągnięta w ich stronę, ale dotyka tylko pierwszego i ostatniego. Przerywany wielokąt kontrolny jest widoczny podczas rysowania i potem |

- **Punkty są punktami szkicu.** Przeciągnij je albo nadaj im więzy i wymiary jak każdemu innemu punktowi. Pierwszy punkt spline'a może przyciągnąć się do końca linii, co połączy je więzem zgodności.
- **Styczność na końcu.** Zaznacz linię, łuk lub spline, który spotyka się z jednym końcem spline'a, oraz sam spline, a następnie wybierz {{ui:T Styczna}}. Kierunek końca spline'a podąża wtedy za linią. Styczność z dala od końców spline'a jest odrzucana: „Styczność do spline'a wymaga, aby linia, łuk lub spline spotykał się z jednym z jego końców.”
- **Końce.** Bez więzu stycznej końce spline'a z punktami dopasowania są naturalne (bez krzywizny na samym końcu). Krzywa jest sześcienna i przechodzi przez każdy punkt, a jej rozstaw wynika z odległości między punktami.
- **Zamknięte spline'y** tworzą profil samodzielnie. Otwarte spline'y łączą linie i łuki w zamkniętą pętlę jak każda inna krzywa.
- Usunięcie punktu wewnątrz spline'a usuwa ten punkt i zachowuje spline, dopóki ma co najmniej dwa punkty (trzy, gdy jest zamknięty).

Wyciągnięcie i obrót budują spline jądrem siatkowym z krótkich prostych odcinków (prawdziwe krzywe wymagają dokładnego jądra: jeszcze nie zbudowano w tej wersji). Eksport DXF zapisuje spline jako polilinię, która mieści się w odległości 0,01 mm od krzywej, ponieważ DXF R12 nie ma obiektu spline.

## Przycinanie i wydłużanie

| Narzędzie | Klawisz | Jak |
|---|---|---|
| {{ui:Przytnij}} | {{key:T}} | Wskaż krzywą: fragment, który by zniknął, pokazuje się na czerwono, aż do najbliższych przecięć. Kliknij, aby go usunąć. Krzywa, która niczego nie przecina, jest usuwana w całości |
| {{ui:Przedłuż}} (pod {{ui:Więcej}}) | {{key:E}} | Kliknij linię albo łuk blisko końca, aby go przedłużyć. Rośnie do następnej krzywej, którą napotka. „Ten koniec nie ma do czego sięgnąć.”, gdy nic nie stoi na drodze |

Przytnij i Przedłuż działają na liniach, łukach, okręgach i spline'ach (Przedłuż: linie i łuki).

- Przycięty **okrąg** staje się łukiem. Jego wymiar promienia lub średnicy przechodzi na łuk.
- Przycięcie środka linii zostawia dwie linie, które pozostają na tej samej prostej. Przycięcie środka łuku zostawia dwa łuki o tym samym środku i więzie równości.
- Przycięty **spline** staje się spline'em z punktami kontrolnymi, który dokładnie podąża za starą krzywą. Więz styczności na zachowanym końcu pozostaje.
- Nowy koniec zostaje umieszczony na krzywej, która go przecięła (na linii, łuku lub okręgu albo zgodny z jej końcem). Spline'y nie mogą trzymać punktu, więc spline, który tnie, nie dodaje więzu.

**Więzy, które już nie pasują, są usuwane**, a pasek stanu podaje, ile ich jest. Na przykład wymiar długości na przyciętej linii zostaje usunięty, ale więzy poziomości lub równoległości pozostają.

## Odsunięcie

1. Wybierz {{ui:Odsuń}} pod {{ui:Więcej}} albo naciśnij {{key:O}}.
2. Kliknij linię, łuk, okrąg lub spline. Podświetla się cały jego łańcuch: wszystkie krzywe połączone końcem z końcem, aż do punktu, w którym spotyka się trzy lub więcej. Aby odsunąć tylko część łańcucha, najpierw zaznacz te krzywe, potem wybierz {{ui:Odsuń}} i kliknij jedną z nich.
3. Przesuń kursor na stronę, w którą ma iść kopia. Za nim podąża przerywany podgląd. Naciśnij {{key:B}}, aby obie strony.
4. Kliknij, wpisz odległość i naciśnij {{key:Enter}}.

Linie i łuki są odsuwane dokładnie. Narożniki są wydłużane lub przycinane, aż się spotkają. Kopia ma jeden wymiar **Odsunięcie**, a pozostałe części za nim podążają: kliknij dwukrotnie wymiar, aby zmienić całą kopię. Odległość za dużą dla łańcucha jest odrzucana, na przykład: „Ta odległość jest za duża dla tego łańcucha: jedna strona wywróciłaby się na nice.”

**Spline** jest odsuwany nowym spline'em z punktami dopasowania, w odległości 0,001 mm od prawdziwego odsunięcia. Ta kopia jest stała: nie podąża za późniejszymi zmianami i nie ma wymiaru Odsunięcie. Spline w łańcuchu wymaga gładkich (stycznych) połączeń na swoich końcach.

## Lustro

1. Przy narzędziu Zaznacz wskaż, co odbić.
2. Wybierz {{ui:Lustro}} pod {{ui:Więcej}} albo naciśnij {{key:M}}.
3. Kliknij linię lub linię osiową, względem której ma nastąpić odbicie.

Każdy odbity punkt dostaje więz **Symetria** z oryginałem, dzięki czemu kopia podąża za zmianami oryginału. Punkty leżące na linii lustra są wspólne, a odbite okręgi dostają więz Równość. Jeśli nic nie zaznaczono, kliknij elementy do odbicia, naciśnij {{key:Enter}}, a potem kliknij linię lustra.

## Wielokąty i rowki

| Narzędzie | Jak |
|---|---|
| {{ui:Wielokąt}} | Kliknij środek, potem narożnik, potem wpisz liczbę boków (od 3 do 64). Boki są równe, a narożniki leżą na okręgu konstrukcyjnym. Wymiaruj okrąg, aby ustawić rozmiar wielokąta |
| {{ui:Rowek}} | Kliknij środek jednego końca, potem środek drugiego, potem kliknij, aby ustawić szerokość. Dwie linie styczne do dwóch równych półokręgów |

## Wzory szkicu

Najpierw zaznacz geometrię, potem:

- {{ui:Wzór liniowy}}: kliknij punkt początkowy, potem miejsce pierwszej kopii, potem wpisz liczbę kopii (wliczając oryginał).
- {{ui:Wzór kołowy}}: kliknij środek, potem wpisz liczbę kopii, rozłożonych równomiernie na pełnym obrocie.

Kopie zabierają ze sobą więzy między zaznaczoną geometrią (wzór kołowy pomija poziome i pionowe). Kopie nie są powiązane z oryginałem: zmień jedną, a pozostałe pozostają bez zmian.

## Rzutowanie krawędzi części

1. Wybierz {{ui:Rzutuj krawędź}} pod {{ui:Więcej}}.
2. Kliknij prostą lub okrągłą krawędź części znajdującą się za szkicem.

Krawędź zostaje dokładnie skopiowana na płaszczyznę szkicu i zamocowana (więz Stała). Nie podąża za późniejszymi zmianami części. Naciśnij {{key:Q}}, aby uczynić ją geometrią konstrukcyjną. Okrąg nachylony do płaszczyzny szkicu rzutowałby się na elipsę, więc jest odrzucany. Tak samo krawędzie swobodne i krawędzie prostopadle wychodzące z szkicu. Rzutowanie wymaga dokładnego jądra: jeszcze nie zbudowano w tej wersji.
