---
title: Toczenie na tokarce
summary: Planuj, zgrubnie i wykańczająco toczenie, wykonuj rowki, odcinanie, gwint i wiercenie na toczonej części, z zarysu, jaki część tworzy, gdy się obraca. Narzędzia tokarskie, posuwy na obrót, postprocesory tokarskie i czego nie udowodniono.
keywords: toczenie, tokarka, toczyć, planowanie, zgrubne, wykańczanie, rowek, rowkowanie, odcinanie, odcięcie, gwint, gwintowanie, g32, g33, g96, stała prędkość skrawania, css, promień wierzchołka, płytka, pręt, uchwyt, średnica, posuw na obrót, g71, g76
from: d8cc53b0
---

W Wytwarzaniu jest siedem operacji dla tokarki. Działają na każdej części: skrawany jest **zarys, jaki część tworzy, gdy się obraca** wokół środka półfabrykatu, więc część nieokrągła jest toczona do okrągłego kształtu, który ją trzyma.

**Nic tutaj nie zostało uruchomione na tokarce.** Ścieżki są sprawdzane z geometrią przez testy; dwa postprocesory tokarskie trzymają się udokumentowanych kodów sterowań. Najpierw udowodnij program w symulatorze swojego sterowania i w powietrzu.

## Przygotowanie

Na karcie **Ustawienia**:

- **Oś narzędzia** to oś wrzeciona, Z tokarki. Przód części jest przy +Z; uchwyt trzyma drugi koniec.
- **Półfabrykat**: wybierz {{ui:Walec}}, pręt. Jego przesunięcie od góry to to, co usuwa cięcie planujące.
- **Punkt zerowy obróbki**: środek na górze półfabrykatu albo na górze modelu stawia Z0 na przedniej ścianie, czyli w zwykłym miejscu.
- **Sterowanie**: {{ui:Tokarka w stylu Fanuc (.nc)}} albo {{ui:Tokarka LinuxCNC (.ngc)}}. Postprocesor frezarski odmawia programu tokarskiego i mówi o tym.
- **Maks. prędkość wrzeciona**: limit, pod którym utrzymywana jest prędkość skrawania.

{{ui:Więcej}} na pasku Wytwarzania wymienia siedem operacji toczenia na górze karty **Operacje**. Pierwsza, którą dodasz, przynosi własne narzędzie: **płytkę tokarską** (promień wierzchołka, kąt płytki, kąt krawędzi skrawającej) albo **ostrze do rowków** (szerokość, promień narożnika, na jaką głębokość sięga). Zmieniasz je na karcie **Narzędzia**. Posuwy są na obrót, a prędkość jest prędkością skrawania w m/min, którą sterowanie utrzymuje przy zmianie średnicy; daj narzędziu własne obr./min, aby zamiast tego ustalić prędkość.

## Operacje

| Operacja | Co robi |
|---|---|
| {{ui:Ściana}} | Planuje przód pręta w dół do części, po jednej głębokości przejścia, od zewnątrz do tuż za środek. |
| {{ui:Zgrubne}} | Przejścia wzdłuż Z w odstępach **głębokości skrawania**, w dół do zarysu plus **naddatek**; potem raz wzdłuż zarysu, aby usunąć stopnie. Dolinę między dwoma barkami wchodzi się zanurzeniem o jedną głębokość skrawania. |
| {{ui:Wykończenie}} | Jedno przejście wzdłuż zarysu z ułamkiem posuwu narzędzia. |
| {{ui:Rowek}} | Zanurza ostrze obok siebie tam, gdzie może wziąć więcej niż limit materiału, który wciąż tam jest: rowki, do których płytka tokarska nie sięgnęła. **Od / Do Z** je zawęża. |
| {{ui:Odetnij}} | Odcina część tuż za jej tylną ścianą, do odrobinę poza środek, z przerwami (peck), jeśli je ustawisz. |
| {{ui:Gwint}} | Gwint zewnętrzny: średnica zewnętrzna, skok, długość, liczba przejść. Głębokość 0 oznacza 0,6134 × skok (gwint 60°). Każde przejście zabiera taki sam przekrój wióra; przejścia wiosenne powtarzają ostatnie. |
| {{ui:Wiercenie}} | Wiertło na linii środkowej do głębokości, z przerwami (peck). |

## Jak narzędzie omija część

Płytka jest traktowana jako to, czym jest: jej okrąg wierzchołka i za nim krawędź tylna, prosta linia, której kąt to 180° minus kąt krawędzi skrawającej i kąt płytki. Ten kształt jest opuszczany na zarys w każdym punkcie wzdłuż Z, a ścieżka to miejsce, w którym się zatrzymuje. Zatem:

- **Promień wierzchołka jest już w ścieżce.** Postprocesory nie zapisują `G41` ani `G42`; współrzędne to zaprogramowany punkt narzędzia (narożnik kwadratu opisanego na wierzchołku).
- Płytka **nie może podążać za ścianą bardziej stromą niż jej krawędź tylna**. Rowek za barkiem zostaje nietknięty, a operacja wykończeniowa mówi, jaka część zarysu była nieosiągalna. Operacja {{ui:Rowek}} to przejmuje.
- Półfabrykat jest śledzony wzdłuż Z po każdym cięciu, więc zgrubne nie tnie powietrza, rowkowanie znajduje, co zostało, a każda operacja pokazuje objętość, którą usunęła, i czy weszła w część.

## Ograniczenia

- **Tylko toczenie zewnętrzne**: bez pręta do wytaczania, bez rowków i gwintów wewnętrznych, bez rowków czołowych.
- Jedno wrzeciono, część trzymana na −Z. Bez wrzeciona pomocniczego, bez narzędzi napędzanych, bez osi C ani Y, bez podtrzymania ani ruchów konika.
- Ścieżki to proste ruchy: krzywe są krótkimi odcinkami w tolerancji (bez `G2`/`G3`), a zgrubne i gwintowanie są zapisywane przejście po przejściu (bez cykli `G71` ani `G76`).
- Gwintowanie to proste przejścia z prostym wyjściem na końcu; daj gwintowi rowek odciążający. Gwint nie jest pokazywany w półfabrykacie.
- Wiercenie na osi nie zmienia modelu półfabrykatu.
- Oprawka, rewolwerowa głowica i uchwyt nie są sprawdzane. Ustaw **Zatrzymaj przy Z**, aby trzymać narzędzie z dala od szczęk.
- Posuwy i prędkości są wartościami startowymi, tak jak przy frezowaniu.
