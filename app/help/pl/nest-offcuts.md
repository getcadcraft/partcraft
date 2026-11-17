---
title: Zachowywanie i ponowne użycie odpadów
summary: Po ułożeniu to, co zostaje z każdej płyty, staje się ponumerowaną resztką na liście zapasów; następne układanie najpierw użyje resztek, potem całych płyt.
keywords: układanie, odpad, resztka, zapas, pozostałość, płyta, arkusz, ponowne użycie, materiał, grubość, CSV
from: 7a68d4b8
---

Gdy układasz części na płytach, użyteczną pozostałość każdej płyty (bez wąskich pasków) można zachować jako **resztkę**: ponumerowany kontur (R-0001, R-0002 …) z materiałem, grubością, rozmiarem i zleceniem, z którego pochodzi. Lista jest zapisywana razem z plikiem i może być zapisana jako CSV.

## Ponowne użycie

Wpisz **materiał** i **grubość**, zostaw włączone {{ui:Najpierw użyj resztek}} i układaj. Resztki o tym samym materiale i grubości są sprawdzane od najmniejszej; części, które się mieszczą, trafiają na nie, wewnątrz własnego konturu resztki i z dala od jej krawędzi; to, co się nie mieści, idzie na nowe płyty. Raport zlecenia mówi, które resztki zostały użyte i co zostało. Gdy {{ui:Zapisz pozostałości jako resztki}} jest włączone, {{ui:Dodaj to zlecenie do zapasu}} zapisuje je następnie na liście zapasów: użyta resztka jest oznaczona **Użyto** (z zleceniem) i nie jest już proponowana; to, co z niej zostało, staje się nową resztką, która pamięta swoją resztkę nadrzędną.

## Co jest resztką

Pozostałość mierzy się przy odstępie, który ustawiłeś (żadna część nie jest bliżej cięcia niż to). Paski węższe niż jedna dwudziesta płyty i kawałki mniejsze niż 2 % płyty to odpad; zmień oba progi, jeśli twój warsztat zachowuje mniejsze kawałki. Otwory wewnątrz części należą do tych części i nie są zachowywane. Zwój nie ma resztek.

## Na rysunku

DXF układu rysuje kontur każdej resztki na warstwie REMNANTS z jej numerem pośrodku, aby kawałki można było oznaczyć podczas cięcia.

Jeszcze nie zbudowano: kierunek struktury resztki, arkusz z kodami kreskowymi lub etykietami, resztki zwojów, zapas wspólny dla projektów.
