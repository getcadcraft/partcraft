---
title: Sondowanie: znajdź część i ustaw przesunięcie układu roboczego
summary: Dotknij sondą górną ścianę, bok, otwór albo czop i pozwól sterowaniu przesunąć przesunięcie układu roboczego tam, gdzie część faktycznie leży, albo tylko zmierz. Co każde sterowanie potrafi i czego nie udowodniono.
keywords: sonda, sondowanie, sonda dotykowa, dotknięcie, przesunięcie układu roboczego, g54, g31, g38.2, pominięcie, baza, znajdź środek, wiercenie, czop, krawędź, wyzeruj, zmierz, kontrola, g10
from: 1f718b82
---

{{ui:Sondowanie}} w Wytwarzaniu zapisuje cykl sondowania do programu: sonda dotyka części, a sterowanie przesuwa przesunięcie układu roboczego (G54) o różnicę między miejscem, w którym znaleziono powierzchnię, a miejscem, w którym model ją podaje. Późniejsze operacje skrawają wtedy tam, gdzie część naprawdę leży.

**Nic tutaj nie zostało uruchomione na maszynie.** Ruchy przed dotknięciem są zwykłymi ruchami: sonda nie jest obserwowana aż do samego ruchu sondowania. Uruchom to wolno, najpierw w powietrzu, z ręką na wstrzymaniu posuwu.

## Użycie

1. Na karcie **Narzędzia** pierwsza operacja sondowania dodaje **sondę dotykową**: jej średnicę kulki i posuw sondowania (100 mm/min, chyba że ustawisz inny).
2. Naciśnij {{ui:Więcej}} na pasku Wytwarzania, potem {{ui:Sondowanie}}, i wskaż, czego dotknąć. Każde wskazanie to jeden cykl, w kolejności klikania:

| Wskazanie | Cykl | Co jest ustawiane |
|---|---|---|
| Płaska ściana, która patrzy wzdłuż osi narzędzia | Jedno dotknięcie w dół | Z |
| Płaska ściana boczna prostopadła do X albo do Y | Jedno dotknięcie w kierunku ściany, nieco poniżej jej góry | X albo Y |
| Otwór albo czop wzdłuż osi narzędzia | Cztery dotknięcia (+X, −X, +Y, −Y) | X i Y jego środka |

3. **Z wynikiem**: {{ui:Ustaw przesunięcie układu roboczego}} albo {{ui:Tylko zmierz}}.
4. **Zacznij w tej odległości** i **Szukaj za tym na tę odległość** to, jak daleko od oczekiwanej powierzchni zaczyna się ruch sondowania i jak daleko poza nią sonda może dojechać, zanim sterowanie się podda. **Głębokość** to, jak daleko poniżej góry otworu, czopa albo ściany bocznej schodzi kulka.

Umieść operację sondowania na początku, przed czymkolwiek, co skrawa.

## Co zapisuje każde sterowanie

| Sterowanie | Dotknięcie | Wynik |
|---|---|---|
| W stylu Fanuc | `G31`, pozycja zapisana w `#101` do `#104` | Zmienne przesunięcia (`#5221` do `#5223`) są przesuwane o znalezione − oczekiwane. Tylko pomiar: różnica zostaje w `#110` (i `#111`). |
| LinuxCNC | `G38.2`, pozycja zapisana w nazwanych parametrach | `G10 L2 P1` z nowym przesunięciem. Tylko pomiar: komunikat `(DEBUG, …)`. |
| GRBL | `G38.2` | Jedno dotknięcie ustawia oś poleceniem `G10 L20 P1`. GRBL nie ma zmiennych, więc **nie potrafi wyliczyć środka**: plik mówi to w komentarzu i niczego nie ustawia. |

Arytmetyka należy do postprocesora, więc możesz ją zmienić: zdarzeniami są `probe-move` i `probe-set` ([Postprocesory, które możesz edytować](topic:post-processors)).

## Ograniczenia

- Jedno przesunięcie układu roboczego (G54). Tylko ściany prostopadłe do osi: bez kąta, bez cyklu narożnika, bez obrotu układu.
- Brak ustawiacza narzędzi, brak kontroli złamanego narzędzia, brak mierzenia rozmiaru względem tolerancji, brak raportu.
- Wrzeciono nie startuje dla sondy, a chłodziwo pozostaje wyłączone; nic nie sprawdza, czy narzędzie we wrzecionie jest sondą.
- Symulacja półfabrykatu nie uruchamia ścieżki sondowania.
- Kalibracja samej sondy (przesunięcie kulki, ugięcie trzpienia, kierunek wyzwolenia) należy do sterowania.
