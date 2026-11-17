---
title: Pola: kształty jako odległości
summary: Czym jest pole (kształt zapisany jako odległość od jego powierzchni), jak zbudować je z prymitywów, operacji logicznych, krat i powierzchni minimalnych w skrypcie, jak zamienia się w bryłę i dlaczego ten sam skrypt zawsze daje te same bajty.
keywords: pole, odległość ze znakiem, sdf, woksel, giroida, tpms, krata, operacje logiczne, przesunięcie, powłoka, wtopienie, dual contouring, deterministyczny, szczelny, rozmaity, cegiełka
from: faab7480
---

**Pole** opisuje kształt przez odległość dowolnego punktu od jego powierzchni: ujemną wewnątrz, zerową na powierzchni, dodatnią na zewnątrz. Kula o promieniu 5 to „odległość od środka minus 5”. Łączenie kształtów to arytmetyka na odległościach: suma to mniejsza z dwóch, część wspólna to większa, a odjęcie jednego kształtu od drugiego to większa z pierwszej i minus druga. Powiększenie kształtu o 1 mm odejmuje 1 od odległości; pusta ścianka to odległość odbita od zera.

Dlatego pola dobrze nadają się do krat, kanałów i ścianek o zmiennej grubości: powierzchnia giroidy to „suma sinusów równa się zeru”, a ścianka, która zgrubieje z 1 do 3 mm na całej części, to liczba zmieniająca się na całej części.

## Od pola do bryły

`to_body(field, h)` próbkuje pole na siatce punktów oddalonych o `h` milimetrów, zachowując tylko punkty blisko powierzchni (rzadka siatka cegiełek 8 × 8 × 8), i buduje powierzchnię metodą **dual contouring**: jeden wierzchołek na komórkę powierzchni, umieszczony tam, gdzie spotykają się płaszczyzny powierzchni, dzięki czemu ostra krawędź pozostaje ostra w granicach jednego wokselu. Powierzchnia jest zamknięta, a każda krawędź jest wspólna dla dokładnie dwóch trójkątów; raport to potwierdza. Element cieńszy niż około trzy woksele może się zwęzić do zera i wtedy raport informuje, że bryła nie jest zamkniętą bryłą, zamiast to ukrywać.

Rozmiar wokselu to dokładność: objętość kuli o średnicy 25 wokseli mieści się w granicach kilku setnych procenta, a ścianka jest tak dokładna, jak jej woksele. Im grubsza siatka, tym szybciej to idzie.

## Zawsze te same bajty

Pole nie ma zegara ani liczby losowej. Sinus i cosinus giroidy oraz każda funkcja wykładnicza, logarytmiczna i potęgowa w bibliotece są obliczane z prostej arytmetyki, tak aby Node, Chrome, Firefox i Safari dawały te same bity; siatka jest przechodzona w ustalonej kolejności, więc ten sam skrypt z tymi samymi danymi wejściowymi daje siatki i arkusze danych identyczne co do bajta, na dowolnym komputerze i przy dowolnej liczbie wątków roboczych. Jest to sprawdzone, także przeglądarka względem Node.

## Dokąd dalej

[Pisanie generatora](topic:write-a-generator) buduje część z pól; [Biblioteka inżynierska](topic:engineering-library) dobiera jej wymiary.
