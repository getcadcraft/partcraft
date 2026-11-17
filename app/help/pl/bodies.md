---
title: Łącz, przesuwaj i skaluj bryły; wzory po ścieżce
summary: Twórz oddzielne bryły, a następnie łącz, tnij lub przecinaj je po fakcie, przesuwaj, obracaj, wyrównuj lub kopiuj, skaluj równomiernie lub wzdłuż X, Y i Z oraz kopiuj elementy lub bryły wzdłuż krzywej.
keywords: bryła, bryły, wiele brył, nowa bryła, łącz, boolean, złącz, wytnij, przecięcie, odejmij, suma, zachowaj narzędzia, przesuń bryłę, kopiuj bryłę, obróć bryłę, wyrównaj, przesunięcie, skaluj, skalowanie nierównomierne, rozciągnij, afiniczne, wzór po ścieżce, wzór wzdłuż krzywej, wzór wzdłuż ścieżki, wzór sterowany krzywą
from: 6b1ea820
---

:::note
**Nie jest jeszcze zbudowane w tej wersji.** Praca z kilkoma bryłami wymaga dokładnego jądra geometrii, którego ta wersja PartCraft nie ma: buduje każdą część jądrem siatkowym. [Czego jeszcze nie zbudowano](topic:not-built-yet) mówi, co robić zamiast tego. Reszta tej strony opisuje działanie z dokładnym jądrem.
:::

Część może mieć więcej niż jedną bryłę. Każda oddzielna bryła to **bryła**. Większość elementów dodaje do każdej dotkniętej bryły albo z niej odejmuje. Narzędzia z tej strony działają na całych wybranych bryłach. Znajdują się w menu {{ui:Więcej}} grupy Elementy: {{ui:Połącz}}, {{ui:Przesuń bryłę}}, {{ui:Skaluj bryłę}} i {{ui:Wzór po ścieżce}}. Wszystkie wymagają dokładnego jądra (OpenCascade).

## Utwórz oddzielną bryłę

W prawym panelu ustaw **Operację** wyciągnięcia lub obrotu na **Nowa bryła** (przeciągnięcia i lofty też ją mają). Nowa bryła pozostaje oddzielna, nawet tam, gdzie zachodzi na inne. **Przecięcie** zachowuje tylko część wspólną nowego kształtu z tym, co już jest.

Bryły nazywa się od elementu, który je utworzył: „Extrude2”. Kopia nosi nazwę swojego oryginału i elementu, który ją skopiował: „Extrude2, copy 1 of Move1”. Nazwy nie zmieniają się, gdy zmieniasz wymiary wcześniej w historii, więc elementy używające bryły nadal ją znajdują. Przy dwóch lub więcej bryłach panel części (kliknij puste miejsce) wyświetla je wraz z ich objętościami.

## Zmień nazwę lub ukryj bryłę

Kliknij puste miejsce w widoku, aby zobaczyć panel części. Jego lista brył (widoczna, gdy część ma dwie lub więcej brył) ma pole nazwy i przycisk {{ui:Ukryj}} w każdym wierszu.

- **Zmiana nazwy:** wpisz nową nazwę w polu i naciśnij {{key:Enter}} albo kliknij poza nim. Wszystkie panele wtedy jej używają: Połącz, Przesuń bryłę, wzory. Wyczyść pole, aby wrócić do nazwy z elementu, który utworzył bryłę.
- **Ukrycie:** kliknij {{ui:Ukryj}} w jej wierszu. Bryła znika z widoku, a kliknięcia przechodzą przez nią, więc możesz wybierać ściany za nią. {{ui:Pokaż}} przywraca ją, a {{ui:Pokaż wszystkie}} przywraca wszystkie ukryte bryły.

Ukrycie zmienia tylko widok. Ukryta bryła nadal jest budowana, liczona w objętości i pomiarach oraz zapisywana w eksportach STL, 3MF i STEP. Nazwy i ukryte bryły są zapisywane w pliku części, a każda zmiana to jeden krok {{ui:Cofnij}}.

## Łączenie brył

1. Shift+kliknięcie ściany bryły **docelowej**, a następnie ściany każdej bryły **narzędziowej**.
2. Wybierz {{ui:Więcej}}, a następnie {{ui:Połącz}}.
3. W prawym panelu wybierz **Operację**:

| Operacja | Wynik |
|---|---|
| **Złącz** | Cel i narzędzia stają się jedną bryłą |
| **Wytnij** | Narzędzia są odejmowane od celu |
| **Przecięcie** | Zostaje tylko to, co wspólne dla celu i wszystkich narzędzi |

**Bryła docelowa** to ta, która zachowuje swoją nazwę. Zaznacz lub odznacz **Bryły narzędziowe** albo użyj **Wybierz w widoku** i kliknij ich ściany. **Zachowaj bryły narzędziowe** pozostawia narzędzia na miejscu (przydatne przy formie i jej rdzeniu). Jeśli bryła narzędziowa została już zużyta przez wcześniejsze łączenie, panel to podaje zamiast wybierać inną bryłę.

## Przesuwanie lub kopiowanie bryły

1. Wybierz {{ui:Więcej}}, a następnie {{ui:Przesuń bryłę}}. Najnowsza bryła jest zaznaczona. Zaznacz te, które chcesz przesunąć.
2. Wybierz typ **Przesunięcie**:

| Typ | Co ustawiasz |
|---|---|
| Przesunięcie | **ΔX**, **ΔY**, **ΔZ** w milimetrach |
| Punkt do punktu | **Od** i **Do**: kliknij w pobliżu końca krawędzi, elementu punktowego albo miejsca na ścianie |
| Obrót wokół osi | **Oś** (X, Y, Z, element osi albo **Wybierz**: prosta krawędź, okrąg lub walec) i **Kąt (°)** |
| Wyrównanie ściany do ściany lub płaszczyzny | **Ściana do przesunięcia** (płaska ściana bryły), **Na** (płaska ściana lub płaszczyzna) |

Wyrównanie obraca bryłę tak, aby jej ściana leżała na drugiej ścianie, przylegając do niej, a następnie przesuwa ją tylko wzdłuż normalnej tej ściany. **Ten sam kierunek** obraca ją w przeciwną stronę. **Kopiuj** zachowuje oryginał i dodaje przesuniętą kopię jako nową bryłę.

## Skalowanie bryły

1. Wybierz {{ui:Więcej}}, a następnie {{ui:Skaluj bryłę}}, i zaznacz bryły.
2. Wpisz **Skalę** albo odznacz **Jednorodne** i wpisz **Skala X**, **Skala Y** i **Skala Z** (wzdłuż osi świata).
3. **Względem** to punkt, który pozostaje na miejscu: środek prostopadłościanu opisanego na bryłach albo punkt, który wybierzesz.

Skalowanie jednorodne jest dokładne. Skalowanie nierównomierne zamienia okręgi w elipsy: walec staje się walcem eliptycznym, którego żadna powierzchnia analityczna nie opisuje. Zakrzywione ściany stają się więc powierzchniami B-spline, które leżą w odległości 0.0000004 mm od dokładnego kształtu. Płaskie ściany i proste krawędzie pozostają dokładne. Panel mówi, co się stało. Współczynniki skali muszą być większe od zera (zamiast tego użyj {{ui:Lustro}}).

## Kopiowanie wzdłuż ścieżki

1. Zaznacz element do skopiowania w historii albo nie zaznaczaj niczego, aby skopiować najnowszą bryłę.
2. Wybierz {{ui:Więcej}}, a następnie {{ui:Wzór po ścieżce}}. Jako ścieżkę przyjmowany jest najnowszy nieużyty szkic.
3. W prawym panelu ustaw:

| Ustawienie | Co robi |
|---|---|
| **Kopiuj** | **Bryły** (każda kopia to nowa bryła) lub **Elementy** (złączone lub wycięte jak oryginał) |
| **Ścieżka** | Zaznacz szkice albo **Wybierz krawędzie modelu**; fragmenty muszą łączyć się końcami |
| **Liczba** | Łączna liczba, łącznie z oryginałem |
| **Rozstaw** | Równy (rozłożony do końca otwartej ścieżki albo na całej zamkniętej) lub ustalona odległość |
| **Orientacja** | Wzdłuż ścieżki (każda kopia obraca się razem z nią) lub Stała (kopie pozostają równoległe) |
| **Odwróć kierunek** | Idź w drugą stronę wzdłuż ścieżki |

Kopie zaczynają się tam, gdzie ścieżka przechodzi najbliżej oryginału, i są rozmieszczone wzdłuż krzywej według długości.

Wzory liniowe i kołowe też mogą kopiować bryły: zaznacz **Kopiuj bryły** w ich panelu i wybierz bryły. Każda kopia to nowa bryła.

## Ograniczenia

- Bryły wymagają dokładnego jądra. Jądro siatkowe zachowuje jedną bryłę i mówi o tym.
- Skalowanie nierównomierne zamienia zakrzywione ściany w bliskie przybliżenia B-spline (patrz wyżej), a nie w dokładne walce czy stożki. Powierzchni przesuniętych nie można jeszcze tak skalować.
- Podążanie po skręcającej się krzywej 3D prowadzi kopię bez jej skręcania. Na płaskich ścieżkach obrót jest dokładny.
- Łączenie działa tylko na bryłach. Bryły powierzchniowe łączy się poleceniem {{ui:Zszyj}}.

Zobacz także [Płaszczyzny, osie i punkty odniesienia](topic:reference-geometry) dla punktów i płaszczyzn „między obiektami” oraz [Elementy wzoru i lustra](topic:patterns-mirror).
