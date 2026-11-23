---
title: Obróbka 4- i 5-osiowa
summary: Powiedz PartCraft, jakie osie obrotowe ma maszyna, pochyl narzędzie w dowolnej zwykłej operacji, wykończ powierzchnię frezem kulistym, który pochyla się podczas skrawania, albo obróć część pod narzędziem na 4. osi. Co jest zapisywane w G-kodzie i czego nie udowodniono.
keywords: 5 osi, pięć osi, 4 osie, czwarta oś, wieloosiowa, multiaxis, 3+2, indeksowana, pozycyjna, pochylenie, pochylone narzędzie, obrotowa, stół obrotowy, głowica, oś A, oś B, oś C, TCP, RTCP, punkt środkowy narzędzia, g43.4, czas odwrotny, g93, kinematyka, oś obrotu, swarf, kąt wyprzedzenia
from: c4f1c491
---

Wytwarzanie może trzymać narzędzie pod kątem i może przesuwać osie obrotowe podczas skrawania. Robią to trzy rzeczy, od najprostszej w górę.

**Nic tutaj nie zostało uruchomione na maszynie.** Ścieżki są sprawdzane z geometrią przez testy, a G-kod jest odczytywany zwrotnie, ale wbudowane postprocesory trzymają się udokumentowanych kodów sterowań, a nie maszyny, która stoi przed nami. Udowodnij program w symulatorze swojego sterowania i w powietrzu, zanim trafi w metal.

## Osie obrotowe maszyny

Na karcie **Ustawienia** {{ui:Osie obrotowe}} mówi, co ma maszyna:

| Wybór | Maszyna |
|---|---|
| Brak (3 osie) | Zwykła frezarka. Każda operacja wymagająca pochylenia narzędzia ostrzega, a postprocesor odmawia jej zapisu. |
| A (obrót wokół X) | Jedna oś obrotowa wzdłuż X: stół 4. osi albo indekser. Narzędzie może pochylać się tylko w płaszczyźnie Y–Z. |
| B (obrót wokół Y) | Jedna oś obrotowa wzdłuż Y. Narzędzie może pochylać się tylko w płaszczyźnie X–Z. |
| A i C | Oś pochylenia wokół X niesiona przez obrót wokół Z albo go niosąca: stół trunnion albo głowica. |
| B i C | To samo z pochyleniem wokół Y. |

Następnie:

- **Niesiona przez**: {{ui:Stół (obraca się część)}} albo {{ui:Głowica (obraca się narzędzie)}}. Stół obraca się w przeciwną stronę, aby przynieść tę samą ścianę pod narzędzie, więc znak każdego kąta wynika z tego wyboru.
- **Sterowanie utrzymuje czubek narzędzia na ścieżce (TCP)**: gdy włączone, X Y Z w programie to czubek narzędzia we własnych współrzędnych części, a sterowanie robi resztę (wbudowane postprocesory w stylu Fanuc i LinuxCNC zapisują `G43.4` dla długości narzędzia). Gdy wyłączone, na maszynie ze stołem PartCraft zapisuje X Y Z tak, jak obracający się stół niesie część, wokół **środka obrotu**, który podajesz (we współrzędnych obróbki; 0, 0, 0, gdy punkt zerowy jest w środku). Maszyna z głowicą wymaga włączonego TCP: bez niego program potrzebowałby długości od osi obrotu maszyny, której PartCraft nie zna.
- **Limit pochylenia**: jak daleko idzie oś pochylenia.

Maszyny różnią się tym, w którą stronę liczą jako dodatnią. Jeśli oś obraca się w złą stronę na twojej, zmień znak w kopii postprocesora ([Postprocesory, które możesz edytować](topic:post-processors)).

## Pochylone narzędzie w zwykłej operacji

Każda operacja frezowania (ściana, kieszeń, adaptacyjne, kontur, wiercenie, fazka, równoległość, grzebieniowe (scallop), zgrubne 3D, resztki) ma **Pochylenie narzędzia** i **Pochyl w stronę**: kierunek narzędzia dla tej operacji, mierzony od osi narzędzia ustawienia. To obróbka 3+2: osie obrotowe idą do pozycji i w niej zostają, a trzy osie skrawają.

- Wpisz dwa kąty albo naciśnij {{ui:Narzędzie prostopadle do ściany}} i wskaż płaską ścianę: narzędzie będzie wskazywać prosto na nią.
- Wskaż ściany i krawędzie operacji jak zwykle. To, co liczy się jako dno albo otwór, jest oceniane wzdłuż pochylonego narzędzia.
- Półfabrykat dla tego kierunku to pudełko, które mieści obracany półfabrykat, więc wysokości i prześwity są bezpieczne od tej strony.

W G-kodzie przed operacją narzędzie idzie w górę, osie obrotowe się obracają, a narzędzie opada nad swój pierwszy punkt. Na stole bez TCP łuki pozostają łukami, a cykle stałego wiercenia pozostają cyklami (zapisana ramka jest tylko obracana wokół Z). Z TCP w pochylonej płaszczyźnie łuki stają się krótkimi odcinkami, a cykle ruchami, które reprezentują.

Symulacja półfabrykatu uruchamia pochylony kierunek **samodzielnie**: pokazuje, co ta operacja wycina z całego półfabrykatu widzianego z jej strony, i znajduje tam wgryzienia, ale cięcia wykonane z innych kierunków nie są przenoszone.

## Wykańczanie 5-osiowe

{{ui:Więcej}} na pasku Wytwarzania wymienia tę operację i następną na górze karty **Operacje**.

{{ui:5 osi}} to [przejście wykończeniowe równoległe](topic:finish-3d) z **frezem kulistym, który pochyla się podczas pracy**. Kula tnie sferą, a sfera jest taka sama, w którą stronę narzędzie pochyla się wokół swojego środka, więc kula podąża dokładnie za ścieżką przejścia 3-osiowego i zmienia się tylko kierunek narzędzia:

- **W stronę powierzchni**: 1 = prostopadle do powierzchni, 0 = pionowo, wartości pomiędzy.
- **Pochylenie do przodu**: stopnie wzdłuż kierunku cięcia, tak aby to nie nieruchomy środek kuli wykonywał skrawanie.
- **Największe pochylenie**: narzędzie nigdy nie pochyla się dalej od osi ustawienia niż to.

Tam, gdzie trzon dotknąłby modelu, pochylenie jest cofane, aż przestanie kolidować, a operacja mówi, w ilu punktach to się zdarzyło. Każde przejście wchodzi i wychodzi prostym podniesieniem.

## Wykończenie obrotowe (4. oś)

{{ui:Obrotowe}} służy do części trzymanej wzdłuż **X obróbki** na osi obrotowej. Część się obraca, a kulisty frez, zawsze wskazujący na oś, podąża za jej powierzchnią:

- **Przejścia**: {{ui:Wzdłuż osi}} (linie wzdłuż X, w odstępach jednego kroku bocznego obrotu) albo {{ui:Dookoła części}} (pierścienie, w odstępach jednego kroku bocznego X).
- **Oś na Y / Z**: gdzie leży oś. Puste oznacza środek półfabrykatu. Na stole bez TCP musi to być środek obrotu w Ustawieniach; operacja ostrzega, gdy nie jest.
- **Od / Do X** i **Od / Do kąta**: część długości i obrotu do obrobienia.

Wysokość kuli nad osią w każdym punkcie to dokładne opadanie kuli na siatce części, z tej strony.

## Ograniczenia

- Wykańczanie 5-osiowe i obrotowe przyjmuje **tylko frez kulisty**. Brak frezowania bocznego (swarf), czyli boku narzędzia na prostej ściance, brak linii przepływu wzdłuż własnych kierunków powierzchni, brak wieloosiowego zgrubnego i brak automatycznego doboru pochylenia, aby uniknąć kolizji.
- Ścieżki 5-osiowe i obrotowe **nie przechodzą przez symulację półfabrykatu**, która jest mapą wysokości i nie obsłuży pochylonego cięcia.
- Trzon jest sprawdzany w wykończeniu 5-osiowym względem modelu widzianego z góry; oprawka, wrzeciono i sama maszyna nie są sprawdzane nigdzie.
- Wykańczanie obrotowe tnie tylko to, co narzędzie widzi, patrząc na oś.
- Wykańczanie 5-osiowe liczy się minutę lub dłużej dla dużej części: trzon jest sprawdzany w każdym punkcie każdego przejścia.
- Gdy osie obrotowe poruszają się razem z liniowymi, a TCP jest wyłączony, wbudowane postprocesory zapisują posuw jako czas odwrotny (`G93`), a potem wracają do `G94`.
- Nie jest zapisywany kod pochylonej płaszczyzny roboczej (`G68.2` i podobne), a nie są znane limity specyficzne dla maszyny, rozwijanie (unwinding) ani strefy kolizji.
