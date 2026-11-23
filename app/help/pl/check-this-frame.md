---
title: Sprawdź tę ramę
summary: Weź stalowe elementy konstrukcyjne spawanej konstrukcji (sanie, stojak, rama z rur i profili), ustaw urządzenia na nogach, a podpory na podłodze, i zobacz, jaka część każdego elementu i każdej spoiny jest wykorzystana według AISC 360-16 albo EN 1993. To pomoc, dopóki inżynier jej nie przejrzy.
keywords: rama, spawana konstrukcja, sanie, sanie pompy, element konstrukcyjny, spoina, spoiny, sprawdź, AISC 360, EN 1993, wykorzystanie, podpora, urządzenie, obciążenie, przekrój zamknięty, HSS, RHS, CHS, inżynier
from: 032e34ee
---

{{ui:Sprawdź tę ramę}} bierze proste stalowe elementy konstrukcyjne spawanej konstrukcji, buduje z nich ramę, rozwiązuje ją pod ciężarem stali i urządzeń, które na niej stawiasz, i sprawdza każdy element i każdą spoinę tam, gdzie elementy się łączą. Jedno uruchomienie, jedna tabela.

:::warning
To **pomoc, dopóki inżynier jej nie przejrzy**. Nie jest to pieczątka, a zaliczenie nie jest projektem. Używa linii środkowych elementów tak, jak zostały narysowane, traktuje każde połączenie jako spawane dookoła przekroju, bierze nogę spoiny pachwinowej z ścianki przekroju (do 8 mm), chyba że ją ustawisz, i nie sprawdza śrub, płyt, płyt podstawy, kotew, docisku, ścinania bloku, zmęczenia ani podnoszenia.
:::

## Uruchomienie

1. Narysuj elementy poleceniem {{ui:Element konstrukcyjny}} (przekroje pochodzą z tabeli przekrojów).
2. Otwórz {{ui:Widoki}} › {{ui:Sprawdź tę ramę}}. Określ, gdzie rama stoi (**podpora** przy każdej stopie: przegubowa, utwierdzona albo wałkowa; {{ui:Podpory przegubowe pod stopami}} daje jedną przy każdym najniższym końcu elementu) i co na niej stoi (**urządzenie**: masa, środek ciężkości, punkty, w których jest przykręcone, oraz opcjonalny poziomy nacisk).
3. Wybierz normę: **ASCE 7 + AISC 360-16** albo **EN 1990 + EN 1993**. Ustaw gatunek stali i, dla AISC, wytrzymałość materiału spoiny (482.6 MPa to E70).
4. Naciśnij {{ui:Sprawdź}}. {{ui:Zapisz raport jako CSV}} zapisuje każdą tabelę, z wierszem o braku przeglądu na początku.

Rama jest odczytywana w milimetrach, z pionową osią części skierowaną w górę. Punkty podpór i urządzeń wpisuje się jako x y z w tym samym układzie, gdzie z to wysokość.

Koniec elementu trafiający w środek innego elementu dzieli go w tym miejscu, tak samo jak stopa albo punkt przykręcenia na linii elementu. Ciężar rozkłada się na punkty przykręcenia jak na bryle sztywnej; środek ciężkości poza stopami albo siła podnosząca w stopie są podawane wprost, nigdy nie ukrywane.

## Co otrzymujesz

- Najbardziej wykorzystana pozycja i to, czy cokolwiek nie przechodzi. Pozycje, których sprawdzenie nie może ocenić (przekrój, którego nie ma w tabeli, stal bez współczynnika w normie), są liczone i nazywane, nigdy nie są liczone jako zaliczone.
- Jeden wiersz na element i na grupę spoin: ile jest wykorzystane, decydujące sprawdzenie i klauzula oraz kombinacja obciążeń, która zdecydowała.
- Te same tabele w raporcie.

## Co jest sprawdzane

Przekroje zamknięte (RHS, SHS, CHS, rura) i dwuteowe pod rozciąganie, ściskanie, zginanie, ścinanie i ich współdziałanie; spoiny pachwinowe i pełnego przetopu metodą wektorową sprężystą. Zwarte ścianki przy zginaniu tylko dla przekrojów zamkniętych; smukłe ścianki są zgłaszane jako niesprawdzone. Niektóre stałe zapisano na podstawie norm i nie porównano jeszcze z drukowanym egzemplarzem; raport wymienia każde źródło.

Zobacz [Ramy z profili stalowych](topic:structural-members), aby narysować elementy i zobaczyć ich listę cięcia.
