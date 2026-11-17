---
title: Pasy zebry i krzywizna
summary: Sprawdź, jak gładko łączą się ściany dowolnej części, dzięki pasom zebry, które podążają za widokiem, lub mapie kolorów średniej krzywizny, z menu Widoki.
keywords: zebra, pasy zebry, linie odbicia, krzywizna, mapa krzywizny, średnia krzywizna, jakość powierzchni, ciągłość, styczność, g1, g2, gładki, załamanie, linie podświetlenia
from: 78fed4c3
---

Dwa szybkie podglądy tego, jak gładkie są ściany części, na dowolnej części w obszarze roboczym Design (obszar roboczy Form ma własny, dla formy, którą edytujesz: zob. [Swobodne kształty w Form](topic:form-surfaces)).

## Pasy zebry

Otwórz {{ui:Widoki}} i wybierz {{ui:Pasy zebry}}. Część pokazuje odbicie pasiastego światła, tak jak zrobiłaby to polerowana powierzchnia:

- Tam, gdzie dwie ściany łączą się **stycznie** (zaokrąglenie na płaskiej, gładka powierzchnia Gordona), pasy biegną dalej przez połączenie, z zagięciem.
- Tam, gdzie spotykają się pod **załamaniem**, pasy się przerywają i przeskakują.
- Tam, gdzie krzywizna również się zgadza (G2), pasy płyną dalej, bez nawet załamania.

Obróć widok (przeciągnij albo kliknij ścianę kostki widoku): pasy są rysowane ponownie z nowego kierunku. **Pasy** ustawiają, ile ich jest.

## Krzywizna

Wybierz {{ui:Krzywizna}} w tym samym menu. Część jest pokolorowana według **średniej krzywizny**: na niebiesko tam, gdzie jest wklęsła, jasnym kolorem tam, gdzie jest płaska, i na czerwono tam, gdzie się wybrzusza (wypukła). Karta podaje, przy jakiej krzywiźnie kolory osiągają pełną intensywność, w 1/mm i jako promień. Ostre krawędzie liczą się jako bardzo zakrzywione, więc wyglądają wyraziście; patrz na ściany między nimi.

## Karta

Oba tryby otwierają kartę analizy w lewym dolnym rogu widoku, która również zawiera [analizę pochylenia](topic:draft-analysis). Przełączaj między nimi przyciskiem **Pokaż**. Ponowne wybranie otwartego trybu w {{ui:Widoki}}, {{ui:Zamknij}} lub {{key:Esc}} wyłącza go. Kolory podążają za zmianami części; nic nie jest zapisywane w części.
