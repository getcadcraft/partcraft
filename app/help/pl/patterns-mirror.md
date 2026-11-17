---
title: Wzory i lustra elementów
summary: Powtarzaj elementy w rzędzie za pomocą Liniowy, wokół osi za pomocą Kołowy, a elementy albo całą bryłę kopiuj przez płaszczyznę za pomocą Lustro.
keywords: wzór, wzór liniowy, wzór kołowy, macierz biegunowa, macierz, lustro, symetryczny, kopiuj elementy, okrąg rozstawu śrub, element źródłowy, lustro bryły
from: 702e9edb
---

Wzory i lustra kopiują elementy, które już zbudowałeś. Kopie są częścią historii: zmień oryginał, a kopie pójdą za nim.

Kopiowane jest to, co robi element: wzór z wypukłego elementu dodaje materiał, wzór wycięcia albo otworu go usuwa. Wzory można ponownie wzorować i odbijać w lustrze. Zaimportowaną bryłę STEP też można skopiować; zaokrągleń, fazek i powłok nie można.

## Wzór liniowy

1. Zaznacz w historii element do skopiowania (na przykład Otwór albo Wycięcie). Gdy nic nie jest zaznaczone, używany jest ostatni element bryłowy.
2. Wybierz {{ui:Liniowy}}. Pojawią się trzy kopie co 20 mm wzdłuż osi X.
3. W prawym panelu ustaw:

| Ustawienie | Co robi | Domyślnie |
|---|---|---|
| **Elementy do skopiowania** | Zaznacz każdy element do skopiowania. Na liście są tylko elementy powyżej wzoru | Zaznaczony element |
| **Kierunek** | Oś X, oś Y, oś Z, linia albo linia osiowa z dowolnego wcześniejszego szkicu, oś obrotu albo wskazana krawędź | Oś X |
| **Odstęp (mm)** | Odległość między sąsiednimi | 20 |
| **Liczba** | Łączna liczba, **wliczając oryginał** (od 1 do 1000) | 3 |
| **Odwróć kierunek** | Kopie idą w przeciwną stronę | Wyłączone |

### Użyj krawędzi jako kierunku

1. Kliknij prostą krawędź części w widoku. Prawy panel pokazuje **Krawędź** i jej długość.
2. Wybierz {{ui:Liniowy}}: wzór biegnie wzdłuż tej krawędzi.

Albo zaznacz wzór, wskaż krawędź i wybierz „Wskazana krawędź (użyj tej wskazanej teraz)” w **Kierunek**. Wskazana krawędź jest ustalona w przestrzeni: nie podąża za późniejszymi zmianami. Linia szkicu podąża za swoim szkicem.

## Wzór kołowy

1. Zaznacz element do skopiowania (na przykład jeden otwór przy obwodzie tarczy).
2. Wybierz {{ui:Kołowy}}. Sześć kopii rozmieści się równomiernie dookoła.
3. Ustaw:

| Ustawienie | Co robi | Domyślnie |
|---|---|---|
| **Elementy do skopiowania** | Jak przy wzorze liniowym | Zaznaczony element |
| **Oś** | Oś X, Y lub Z, linia szkicu, oś obrotu albo wskazana krawędź | Oś ostatniego obrotu, jeśli jest, w przeciwnym razie oś Y |
| **Kąt (°)** | 360 rozmieszcza kopie równomiernie dookoła. Mniej rozkłada je na tym kącie, pierwsza i ostatnia na jego końcach | 360 |
| **Liczba** | Łączna liczba, wliczając oryginał | 6 |
| **Odwróć kierunek** | Obraca w przeciwną stronę | Wyłączone |

Osie układu światowego przechodzą przez początek układu. Dla tarczy niewyśrodkowanej na początku użyj linii osiowej szkicu albo osi obrotu.

### Przykład: osiem otworów śrubowych kołnierza

1. Obróć kołnierz (zob. [Obrót części toczonej](topic:revolve)) wokół osi Y.
2. Naszkicuj na płaskiej górnej ścianie kołnierza, postaw jeden punkt na okręgu śrub i wykonaj Otwór.
3. Przy zaznaczonym Otworze wybierz {{ui:Kołowy}}. Oś jest już ustawiona jako „Oś obrotu Revolve1”.
4. Ustaw **Liczba** na `8`.

## Lustro

1. Zaznacz w historii element do odbicia albo nie zaznaczaj nic, aby odbić **całą bryłę zbudowaną do tej pory**.
2. Wybierz {{ui:Lustro}}. Odbija względem **płaszczyzny Right**.

Aby zamiast tego odbić całą bryłę względem ściany części, najpierw kliknij tę płaską ścianę, a potem wybierz {{ui:Lustro}}. (Kliknięcie ściany czyści zaznaczenie w historii, więc zawsze odbija całą bryłę.)

Ustawienia w prawym panelu:

- **Lustro**: zaznacz **Cała bryła (zbudowana do tej pory)** albo odznacz i zaznacz elementy do skopiowania.
- **Płaszczyzna lustra**: płaszczyzna Front, płaszczyzna Top, płaszczyzna Right, ściana, której używa teraz („Ściana z Extrude1” albo „Stała płaszczyzna”), albo „Ściana wskazana teraz”. Aby odbić wybrane elementy względem ściany: zaznacz Lustro w historii, kliknij ścianę w widoku i wybierz „Ściana wskazana teraz”.

Odbicie całej bryły względem ściany podwaja część, na przykład z połowy wspornika robi pełny wspornik.

## Komunikaty

- „Najpierw zbuduj element do skopiowania.” albo „Najpierw zbuduj bryłę.” Nie ma jeszcze bryły do skopiowania.
- „Wybierz elementy do skopiowania.” Wszystkie pola **Elementy do skopiowania** są puste.
- „Extrude2 nie ma bryły do skopiowania.” Ten element się nie powiódł albo jest wyłączony.
- „Fillet1 zmienia krawędzie albo ścianki bryły; nie można go skopiować. Skopiuj elementy tworzące bryły (wyciągnięcia, obroty, otwory, importy).” Zaokrągleń, fazek i powłok nie można wzorować ani odbijać w lustrze; najpierw wzoruj, potem zaokrąglaj.
- „Nie ma jeszcze bryły do odbicia.”

:::note
Kopii wzoru nie można pomijać pojedynczo, a wzór nie może podążać za krzywą szkicu. Wzory szkicu i lustra szkicu jeszcze nie zbudowano: narysuj powtarzającą się geometrię szkicu ręcznie albo za pomocą **Dodaj według współrzędnych**.
:::
