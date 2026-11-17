---
title: Równania w obu kierunkach
summary: Zmień parametr, a część pójdzie za nim; wpisz nowy rozmiar w wymiarze sterowanym, a PartCraft wyliczy parametr za nim, pytając, który, gdy może się zmienić kilka.
keywords: równania, rozwiązywanie wstecz, wymiar sterowany, dwukierunkowe, odwrotne, szukanie wartości, parametry, powiązane wartości, który parametr
from: 82dc0269
---

Równanie, takie jak **Extrude1 depth = thick + extra**, działa w obu kierunkach.

## W przód: zmień parametr

Na karcie {{ui:Parametry}} zmień `thick` z 20 na 30. Głębokość Extrude1 staje się 30 + extra, a część się przebudowuje.

## Wstecz: zmień wymiar sterowany

1. Wybierz „Extrude1” w historii. Pole **Głębokość (mm)** pokazuje **ƒ**: równanie nim steruje.
2. Wpisz żądany rozmiar, na przykład `40`, i naciśnij {{key:Enter}}.

PartCraft rozwiązuje parametr stojący za równaniem, przez tyle kroków, ile potrzeba (`depth = hub_h`, `hub_h = disc_t + 50`: wpisanie wysokości zmienia `disc_t`). Pasek stanu mówi, co się zmieniło, na przykład że extra zmieniło się z 5 na 15.

Gdy dwa lub więcej parametrów steruje liczbą, pojawia się okno **Który parametr ma się zmienić?** z listą. Wybierz jeden; pozostałe zachowują swoje wartości. {{ui:Anuluj}} nic nie zmienia.

Tak samo działa to w szkicu: dwukrotnie kliknij wymiar sterowany, wpisz wartość i naciśnij {{key:Enter}}. Działa też w kolumnie **Wartość** tabeli parametrów, dla parametru, który sam jest wyrażeniem.

## Kiedy się nie da

- Liczba, która musi być całkowita (liczba powtórzeń wzoru), albo mieścić się w zakresie (kąt do 360°), jest odrzucana przed jakąkolwiek zmianą.
- Równanie ze stałych liczb (`=40`) nie ma parametru do zmiany: wpisana liczba je zastępuje.
- Jeśli żadna wartość parametru nie daje wpisanego rozmiaru, pasek stanu o tym informuje i nic się nie zmienia.
- Szkic, którego nie da się rozwiązać przy nowej wartości, zachowuje poprzednie wartości, a pasek stanu wskazuje ten szkic.

Każda zmiana, w którąkolwiek stronę, to jeden krok dla {{key:Mod+Z}} i {{key:Mod+Y}}.
