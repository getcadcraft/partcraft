---
title: Cofanie i przesuwanie do przodu w historii
summary: Przesuwaj pasek cofnięcia w górę i w dół po jednym elemencie, aby obserwować budowę części, wstawiaj elementy w środku i wracaj na koniec.
keywords: cofnięcie, cofnij, przesuń do przodu, pasek cofnięcia, krok po historii, wstaw element, zamrożenie, historia
from: 9a366cae
---

Pasek cofnięcia decyduje, ile historii jest zbudowane. Elementy poniżej paska są wyszarzone i niezbudowane; nowe elementy wchodzą w pasku.

## Krok po jednym elemencie

Gdy część jest na ekranie (bez otwartego szkicu ani rysunku):

| Działanie | Wynik |
|---|---|
| {{key:[}} albo przycisk strzałki w górę obok nazwy części | Pasek przesuwa się o jeden element w górę |
| {{key:]}} albo przycisk strzałki w dół | Pasek przesuwa się o jeden element w dół |
| {{key:End}} albo przycisk przesunięcia paska na koniec | Wszystkie elementy są znowu zbudowane |

Pasek stanu mówi, gdzie jest pasek, np. „Pasek cofnięcia po Sketch1: zbudowano 1 z 2 elementów”. Przyciski są wyłączone, gdy pasek nie może się dalej przesunąć w tę stronę.

Możesz też wybrać {{ui:Cofnij do tego miejsca}} przy dowolnym elemencie albo kliknąć **Pasek cofnięcia · przesuń do przodu** w historii.

## Wstaw element w środku

1. Cofaj pasek, aż stanie tam, gdzie powinien być nowy element.
2. Dodaj element: wchodzi w pasku.
3. Naciśnij {{key:End}}, aby zbudować resztę historii na nim.

Każde przesunięcie paska to krok, który można cofnąć przez {{key:Mod+Z}}. Miejsce paska jest zapisane w pliku, więc część można wysłać cofniętą. Narzędzie wiersza poleceń też je przesuwa: `partcraft rollback part.json` i `partcraft forward part.json --end`.
