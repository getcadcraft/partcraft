---
title: Przeciągnięcie, loft i pochylenie
summary: Przeciągnij zamknięty profil wzdłuż ścieżki z krzywych szkicu lub krawędzi modelu, wykonaj loft przez przekroje na różnych płaszczyznach i dodaj pochylenie do ścian; z opcjami, dokładnymi wynikami i komunikatami.
keywords: przeciągnięcie, przeciągnięty wypust, przeciągnięte wycięcie, rura, ścieżka, loft, wypust loftowany, mieszanie przekrojów, prostoliniowo, pochylenie, kąt pochylenia, zwężanie ścian, płaszczyzna neutralna, kierunek wyciągania, formowanie
from: 9d637981
---

:::note
**W tej wersji** przeciągnięcie i loft nie są jeszcze zbudowane: wymagają dokładnego jądra geometrii, którego ta wersja PartCraft nie ma. [Co jeszcze nie jest zbudowane](topic:not-built-yet) mówi, co zrobić zamiast tego; sekcje Przeciągnięcie i Loft opisują je tak, jak działają z dokładnym jądrem. **Pochylenie działa** na płaskich ścianach: buduje je jądro siatkowe, z takim samym wynikiem jak dokładne jądro.
:::

Wszystkie trzy są w menu {{ui:Więcej}} grupy Features (zob. [Jądro siatkowe](topic:solid-kernels)). Każda może dodać materiał, wyciąć go, zachować tylko część wspólną (**Część wspólna**) albo utworzyć **Nową bryłę** (przeciągnięcie i loft: **Operacja** w panelu).

## Przeciągnięcie

Przeciągnięcie przesuwa zamknięty profil wzdłuż ścieżki: rury, uchwyty, sprężyny z drutu, prowadnice.

1. Narysuj **ścieżkę** w jednym szkicu: linie i łuki połączone końcami (lub użyj krawędzi modelu, poniżej).
2. Narysuj **profil** w innym szkicu, którego płaszczyzna przechodzi przez jeden koniec ścieżki, na przykład okrąg na płaszczyźnie góry na początku ścieżki narysowanej na płaszczyźnie przodu.
3. Zaznacz szkic profilu i wybierz {{ui:Więcej}}, a potem {{ui:Przeciągnięcie}}. Najnowszy inny szkic staje się ścieżką.

W panelu:

| Ustawienie | Co robi |
|---|---|
| **Ścieżka** | Zaznacz szkice tworzące ścieżkę (kilka szkiców łączy się końcami w jedną ścieżkę 3D); **Wskaż krawędzie modelu** dodaje krawędzie części |
| **Orientacja** | Wzdłuż ścieżki (domyślnie), Frenet, Stała (przekroje pozostają równoległe do profilu), Zachowaj kierunek, Wzdłuż krzywej prowadzącej |
| **Skala końcowa** | Profil rośnie lub maleje liniowo do tego rozmiaru na końcu (1 = stały) |

Ostre narożniki w ścieżce są ścinane na ukos. Okrąg o promieniu 5 przeciągnięty wzdłuż linii 100 mm to walec o dokładnie 2500π mm³; wzdłuż ćwiartki łuku o promieniu 50 ćwiartka torusa o 625π² mm³.

## Loft

Loft przechodzi przez dwa lub więcej przekrojów na różnych płaszczyznach.

1. Narysuj każdy przekrój w osobnym szkicu (jedna zamknięta pętla każdy), na płaszczyznach bazowych, [płaszczyznach odniesienia](topic:reference-geometry) lub ścianach.
2. Wybierz {{ui:Więcej}}, a potem {{ui:Loft}}. Każdy nieużyty szkic z jedną pętlą staje się przekrojem, w kolejności historii.

Panel wypisuje przekroje w kolejności (**W górę** zmienia kolejność, **Usuń** usuwa jeden); **Dodaj szkic** dodaje kolejny, **Wskaż ścianę** dodaje płaską ścianę części. **Prostoliniowo** tworzy płaskie ściany między przekrojami zamiast gładkiego przejścia. Między dwoma kwadratami oba są tym samym ściętym ostrosłupem (kwadrat 40 mm do kwadratu 20 mm na 30 mm: dokładnie 28000 mm³).

Przekroje o różnej liczbie boków (kwadrat i trójkąt) są dopasowywane przez OpenCascade, co może skręcić boczne ściany; część ostrzega o tym. Rysuj przekroje o tej samej liczbie boków, zaczynając od odpowiadających sobie narożników, aby uzyskać najczystszy wynik.

### Prowadnice

Prowadnice to krzywe, którym boki lofta muszą podążać od pierwszego przekroju do ostatniego: dla wybrzuszenia, przewężenia lub rozszerzenia, który rysujesz samodzielnie.

1. Narysuj dwie lub więcej prowadnic: krzywe otwarte (linie, łuki, splajny), które biegną od pierwszego przekroju do ostatniego i przecinają każdy przekrój raz. Jeden szkic może zawierać kilka prowadnic: każdy osobny łańcuch w nim to osobna prowadnica. Narysuj prowadnicę tak, by naprawdę dotykała każdego przekroju: przyciągnij jej końce do punktów przekrojów.
2. W panelu Loft, pod **Prowadnice**, zaznacz szkice, które je zawierają, albo kliknij {{ui:Wskaż krawędzie modelu jako prowadnice}} i kliknij krawędzie części ({{key:Esc}} kończy).

Z prowadnicami loft jest powierzchnią Gordona przechodzącą przez przekroje i prowadnice (zob. [Powierzchnie przez sieć krzywych](topic:gordon-surfaces)), zamkniętą płasko na obu końcach w bryłę. Panel mówi, jak ściśle podąża za nimi. Każdy przekrój musi wtedy być szkicem (punkt ani ściana nie mogą przyjąć prowadnicy), a **Prostoliniowo** nie ma zastosowania. Prowadnica, która mija przekrój o więcej niż 0,01 mm, jest odrzucana, z podaniem szczeliny.

Sprawdzono: dwa okręgi (średnice 20 mm i 10 mm w odległości 40 mm) z czterema prostymi prowadnicami dają objętość ściętego stożka z dokładnością do 0,000002 %; łuki wybrzuszone o 5 mm dają beczkę, która podąża za każdą prowadnicą z dokładnością do 0,00001 mm.

## Pochylenie

Pochylenie nachyla ściany, tak aby część dało się wyjąć z formy.

1. Wybierz {{ui:Więcej}}, a potem {{ui:Pochylenie}} (lub najpierw {{key:Shift}}+kliknij ściany). Bez wybranych elementów jesteś w trybie wskazywania: kliknij każdą ścianę do pochylenia, a potem {{ui:Gotowe}}.
2. Ustaw **Kąt (°)**, **Płaszczyznę neutralną** (gdzie ściany zachowują swój rozmiar) i **Kierunek wyciągania** (domyślnie normalna płaszczyzny neutralnej).

Dodatni kąt przechyla ścianę do wewnątrz wzdłuż wyciągania i usuwa materiał; ujemny dodaje go. Płaszczyzna neutralna zaczyna jako płaszczyzna Top. W tej wersji pochylać można tylko płaskie ściany: walec, stożek lub ściana swobodna daje komunikat „Pochylenie: w tej wersji tylko płaskie ściany (buduje je jądro siatkowe).” Cztery boki bloku 100 × 100 × 50 pochylone o 5° wokół jego dolnej krawędzi stają się ściętym ostrosłupem o objętości dokładnie h/3·(a² + b² + ab), gdzie b = a − 2h·tan 5°.

## Komunikaty

| Komunikat | Co zrobić |
|---|---|
| „Płaszczyzna profilu musi przechodzić przez jeden koniec ścieżki …” | Przesuń szkic profilu na początek (lub koniec) ścieżki |
| „Ścieżka ma przerwę: jej krzywe nie łączą się końcami …” | Połącz krzywe ścieżki; w osobnych szkicach ich końce muszą dokładnie się stykać |
| „Przekrój lofta wymaga dokładnie jednej zamkniętej pętli” | Podziel szkic albo usuń dodatkową pętlę |
| „… nie może być pochylone względem tej płaszczyzny neutralnej …” | Ściana jest równoległa do płaszczyzny neutralnej albo jej nie przecina |
| „Pochylenie: w tej wersji tylko płaskie ściany (buduje je jądro siatkowe).” | Wskazana ściana jest zakrzywiona. Usuń ją; pochylaj tylko płaskie ściany |

:::note
Jeszcze nie zbudowane: skręcające przeciągnięcia, przeciągnięcia cienkościenne i powierzchniowe, prowadnice lofta i styczność na końcach, pochylenie walców, stożków i ścian swobodnych.
:::
