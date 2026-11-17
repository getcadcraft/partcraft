---
title: Płaszczyzny, osie i punkty referencyjne
summary: Twórz płaszczyzny odsunięte od ściany, pod kątem, przez trzy punkty, w połowie, styczne do walca, prostopadłe do krawędzi lub przez krawędź i punkt; osie; punkty w środkach krawędzi, na przecięciach i w narożach płaszczyzn; szkicuj na nich i używaj jako osi obrotu, kierunków wzoru i płaszczyzn lustra.
keywords: odniesienie, między obiektami, punkt środkowy, punkt przecięcia, płaszczyzna przez krawędź i punkt, płaszczyzna referencyjna, płaszczyzna robocza, płaszczyzna konstrukcyjna, płaszczyzna odsunięta, płaszczyzna pod kątem, płaszczyzna środkowa, płaszczyzna styczna, oś referencyjna, oś konstrukcyjna, oś odniesienia, punkt referencyjny, punkt roboczy, szkic na płaszczyźnie
from: e7eb6fc1
---

Geometria referencyjna to rusztowanie, na którym budujesz elementy: **płaszczyzna**, na której szkicujesz tam, gdzie nie ma ściany, **oś**, wokół której obracasz lub tworzysz wzór, oraz **punkt**, na którym zatrzymasz wyciągnięcie. Nie ma własnego materiału. Płaszczyzny widoczne są w widoku jako jasne kwadraty, osie jako linie przerywane, punkty jako małe krzyżyki. Wszystkie trzy trafiają do historii i podążają za tym, z czego powstały, gdy zmienisz rozmiar wcześniej w historii.

Znajdują się w menu {{ui:Więcej}} grupy Elementy: {{ui:Płaszczyzna}}, {{ui:Oś}}, {{ui:Punkt}}.

## Utwórz płaszczyznę

1. Kliknij płaską ścianę lub płaszczyznę bazową w historii, aby od niej zacząć (opcjonalnie).
2. Wybierz {{ui:Więcej}}, a potem {{ui:Płaszczyzna}}. Płaszczyzna zaczyna się jako odsunięcie o 20 % rozmiaru części od wybranego elementu (lub od płaszczyzny górnej).
3. W prawym panelu wybierz **Typ** i jego odniesienia:

| Typ | Odniesienia | Liczby |
|---|---|---|
| Odsunięta od płaszczyzny lub ściany | **Od płaszczyzny** | **Odległość (mm)**, ujemna dla drugiej strony |
| Pod kątem, przez krawędź lub oś | **Od płaszczyzny**, **Obróć wokół** (oś świata, element osi lub wskazana prosta krawędź) | **Kąt (°)** |
| Przez trzy punkty | **Punkt 1**, **Punkt 2**, **Punkt 3** | — |
| Środkowa między dwiema | **Pierwsza płaszczyzna**, **Druga płaszczyzna** (równoległe: w połowie odległości; przecinające się: płaszczyzna dzieląca kąt na pół) | — |
| Styczna do walca | **Walec** (ściana walcowa), **Punkt bliski** (która strona) | — |
| Prostopadła do krawędzi, w punkcie | **Krawędź**, **W punkcie** (płaszczyzna przechodzi przez punkt krawędzi najbliższy jej oraz przez ten punkt) | — |
| Przez krawędź i punkt | **Prosta krawędź** (lub oś), **Przez punkt** | — |
| Prostopadła do krawędzi w jej środku | **Krawędź** (w połowie jej długości, prostopadle w tym miejscu) albo bez krawędzi **Punkt 1** i **Punkt 2** (płaszczyzna w połowie między nimi) | — |

Każde odniesienie ma przycisk **Wskaż**: wybierz go, a potem kliknij w widoku. Pole płaszczyzny przyjmuje płaszczyznę bazową, płaszczyznę referencyjną lub płaską ścianę; pole punktu przyjmuje koniec krawędzi (kliknij w pobliżu tego końca), element punktu lub miejsce na ścianie; pole krawędzi przyjmuje krawędź. {{key:Esc}} anuluje wskazywanie. **Odwróć normalną** przewraca płaszczyznę (w którą stronę jest zwrócony na niej szkic).

W tej wersji pole wymagające krawędzi lub ściany walcowej (Styczna do walca oraz pola Krawędź) odpowiada „jeszcze nie zbudowano”: zamiast tego użyj punktów lub osi.

## Szkicowanie na płaszczyźnie

Zaznacz płaszczyznę (w historii lub klikając jej kwadrat w widoku) i wybierz {{ui:Szkic}} albo **Szkicuj na niej** w jej panelu. Szkic podąża za płaszczyzną: zmień odległość płaszczyzny, a szkic i każdy element na nim również się przesuną.

## Osie i punkty

- {{ui:Oś}}: przez dwa punkty, oś walca lub stożka, miejsce, w którym spotykają się dwie płaszczyzny, wzdłuż prostej krawędzi (lub osi krawędzi kołowej) albo prostopadle do ściany przez punkt.
- {{ui:Punkt}}: według współrzędnych, w wierzchołku lub punkcie szkicu, w środku krawędzi kołowej, a także punkty „między obiektami”:

| Typ punktu | Odniesienia |
|---|---|
| Środek krawędzi (lub między dwoma punktami) | **Krawędź** (w połowie jej długości, także dla łuków i krzywych), albo bez krawędzi **Punkt 1** i **Punkt 2** |
| Miejsce, gdzie krawędź lub oś spotyka ścianę lub płaszczyznę | **Krawędź** (prosta lub krzywa) albo oś oraz **Spotyka płaszczyznę** (płaszczyzna lub płaska ściana) albo **Albo ścianę** (płaska ściana lub walec). Okrąg przecina płaszczyznę dwa razy, a prosta przechodzi przez walec dwa razy: **Drugie przecięcie** wybiera drugi punkt |
| Miejsce, gdzie spotykają się trzy płaszczyzny | **Pierwsza**, **Druga** i **Trzecia płaszczyzna** (płaszczyzny lub płaskie ściany) |

Każdy z nich zgłasza prosty komunikat, gdy odniesienia do siebie nie pasują: prosta równoległa do płaszczyzny, prosta mijająca walec, krawędź, która nie sięga płaszczyzny, trzy płaszczyzny, które nie spotykają się w jednym punkcie, albo punkt leżący na prostej, która miałaby wyznaczać płaszczyznę.

Użycie w innych elementach:

| Gdzie | Jak |
|---|---|
| Obrót | **Oś**: wybierz element osi z listy (musi leżeć w płaszczyźnie szkicu) |
| Wzór kołowy | **Oś**: element osi |
| Wzór liniowy | **Kierunek**: element osi lub płaszczyzna (jej normalna) |
| Lustro | **Płaszczyzna lustra**: płaszczyzna referencyjna |
| Wyciągnij | **Koniec**: Do ściany lub płaszczyzny, Do wierzchołka (element punktu). W tej wersji jeszcze nie zbudowano (wymaga dokładnego jądra) |
| Pochylenie | **Płaszczyzna neutralna** |

## Gdy odniesienie zniknie

Płaszczyzna utworzona z ściany, której już nie ma, zgłasza błąd z jej nazwą, na przykład „Ściana, na której leży, zniknęła z Extrude1.” Nigdy nie jest przenoszona na inną ścianę. Szkice i elementy na niej są oznaczone jako „nie zbudowano”, dopóki nie wybierzesz nowego odniesienia; reszta części pozostaje bez zmian.

:::note
Ta wersja buduje każdą część jądrem siatkowym, które tworzy płaszczyzny, osie i punkty z płaszczyzn bazowych, płaskich ścian wykonanych przez wyciągnięcie lub obrót, punktów szkicu, współrzędnych i innych elementów referencyjnych. Wszystko, co wymaga krawędzi, końca krawędzi lub zakrzywionej ściany, potrzebuje dokładnego jądra i w tej wersji jeszcze nie zostało zbudowane („Używa ściany lub krawędzi bryły, którą może znaleźć tylko dokładne jądro: jeszcze nie zbudowano w tej wersji.”).
:::
