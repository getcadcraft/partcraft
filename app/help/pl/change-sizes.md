---
title: Zmieniaj rozmiary bez otwierania szkicu
summary: Steruj częścią za pomocą liczb w prawym panelu: wymiarów szkicu, głębokości, liczby i kątów. Planuj część tak, aby właściwe liczby nią sterowały, i zobacz, gdzie przejmują parametry i równania.
keywords: parametry, wymiary sterujące, intencja projektowa, zmiana rozmiaru, równania, zmienne globalne, tabela projektowa, konfiguracje, zmiana rozmiaru, zmiana wymiaru
from: c2ae1a32
---

Każdy rozmiar w części PartCraft to liczba, którą można później zmienić: wymiary w jej szkicach i ustawienia jej elementów. Nie musisz otwierać szkicu, aby zmienić jego wymiary.

## Zmiana wymiaru szkicu z panelu

1. Kliknij element w historii, na przykład „Extrude1”.
2. W ustawieniach samego wyciągnięcia **Wymiary szkicu (Sketch1)** wymienia wszystkie wymiary jego szkicu: „Distance”, „Diameter”, „Kąt (°)” i tak dalej.
3. Wpisz nową wartość w jednym polu i naciśnij {{key:Enter}} albo {{key:Tab}}.

Szkic rozwiązuje się z nową wartością, a cała część buduje się od nowa. Zaznaczenie samego szkicu pokazuje tę samą listę jako **Wymiary sterujące**.

Promień lub średnica muszą być większe od zera, a kąt mieści się między 0 a 180 stopni. Pasek stanu o tym informuje, jeśli nie.

:::tip
Które pole to które? Pola są wymienione w kolejności, w jakiej utworzono wymiary. Jeśli nie jesteś pewien, otwórz szkic (kliknij go dwukrotnie), kliknij dwukrotnie wymiar na płótnie i zmień go tam.
:::

## Wpisz główną liczbę od razu

Zaznacz element w historii (albo po prostu go dodaj) i wpisz liczbę. Trafi ona do głównego pola elementu, tego, które zmieniasz najczęściej: **Głębokość** wyciągnięcia, **Kąt** obrotu, **Średnica** otworu, **Liczba** wzoru, **Promień** zaokrąglenia albo grubość ścianki powłoki. Naciśnij {{key:Enter}}, aby ją ustawić, albo {{key:Esc}}, aby zachować starą. Dodanie wyciągnięcia mówi o tym na pasku stanu: „Extrude1 dodano. Zmień jego liczby po prawej albo wpisz teraz liczbę jego głębokości.”

## Zmiana liczby w historii

Wiersz każdego elementu w historii pokazuje jego główną liczbę obok nazwy: „Extrude1 25 mm”, „Hole1 Ø6.6 thru”, „Fillet1 R2”, „LPattern1 4 × 20 mm”. Kliknij dwukrotnie liczbę (albo zaznacz wiersz i naciśnij {{key:F2}}), a od razu otworzy się pole. Wpisz nową wartość i naciśnij {{key:Enter}}. {{key:Esc}} zachowuje starą. Działa dokładnie jak pole elementu po prawej: te same limity, `=` do wpisania równania, na przykład `=width/2`, i jeden krok cofnięcia.

Przy wyciągnięciu, otworze albo wzorze dwukrotne kliknięcie w dowolnym miejscu wiersza otwiera pole. Przy zaokrągleniu, fazce, powłoce, pochyleniu lub gwincie dwukrotne kliknięcie nazwy nadal przechodzi do wybierania krawędzi lub ścian, więc kliknij dwukrotnie samą liczbę. Szkice nie mają liczby w wierszu: dwukrotne kliknięcie otwiera szkic.

## Przeciągnięcie w widoku

Zaznacz wyciągnięcie w historii (albo kliknij je w widoku, a następnie jego wiersz). Na jego ścianie końcowej pojawi się pomarańczowa strzałka, z głębokością w polu obok. Przeciągnij strzałkę: część podąża za przeciąganiem, a puszczenie ustawia nową głębokość jako jeden krok ({{key:Mod+Z}} ją cofa). Naciśnij {{key:Esc}} podczas przeciągania, aby wrócić do miejsca startu. Głębokość zmienia się co jedną dziesiątą jej rozmiaru: 1 mm dla wyciągnięcia 25 mm, 0.1 mm dla wyciągnięcia 3 mm.

Obrót ma zakrzywioną strzałkę na końcu obrotu. Przeciągnij ją wokół osi, aby zmienić kąt, w pełnych stopniach od 1° do 360°.

Albo kliknij w pole obok strzałki, wpisz wartość (albo `=` i równanie) i naciśnij {{key:Enter}}. Nie ma strzałki przy wyciągnięciu, które idzie **Przez wszystko** albo do ściany, ani przy wartości sterowanej równaniem. Zmieniaj je po prawej.

## Liczby, które sterują częścią

| Miejsce | Co można zmienić |
|---|---|
| Szkic | Każdy wymiar: długości, odległości, promienie, średnice, kąty |
| Wyciągnij i Wytnij | Głębokość, warunek końca, kierunek, występ albo wycięcie |
| Obróć i Obrotowe wycięcie | Kąt, oś, występ albo wycięcie |
| Otwór | Średnica, głębokość, przez wszystko, średnica i głębokość pogłębienia |
| Zaokrąglenie, Fazka, Powłoka | Promień, odległość, grubość ścianki i kierunek oraz które krawędzie lub ściany |
| Liniowy i Kołowy | Liczba, rozstaw lub kąt, kierunek lub oś |
| Część | Krzywe (jak drobno zaokrąglone kształty są podzielone na ściany) |
| Rysunek | Miejsce cięcia przekroju, rozmiar i skala detalu, wartości GD&T |

## Zaplanuj część tak, aby sterowały nią właściwe liczby

Liczby, które podasz, są tymi, które możesz zmienić. Kilka nawyków sprawia, że późniejsze zmiany zachowują się poprawnie:

- **Wymiaruj to, co ważne dla zadania.** Jeśli otwór ma być 15 mm od krawędzi, wymiaruj go od tej krawędzi, a nie od początku układu.
- **W pełni definiuj szkice.** Wtedy zmiana przesuwa tylko to, co powinna (zobacz [W pełni zdefiniuj szkic](topic:relations-dimensions)).
- **Używaj relacji do wyrażenia intencji.** Równość dwóch otworów oznacza, że jedna średnica steruje obiema. Kształty symetryczne: umieść początek układu na linii osiowej albo użyj Punktu środkowego.
- **Szkicuj na ścianach utworzonych przez elementy.** Szkic na ścianie końcowej wyciągnięcia przesuwa się, gdy zmienia się głębokość.
- **Używaj wzoru zamiast kopiowania.** Jeden otwór powielony wzorem osiem razy ma jedną średnicę do zmiany.

## Więcej niż pojedyncze liczby

- **Jedna liczba steruje kilkoma:** użyj parametrów i równań: [Steruj częścią za pomocą parametrów](topic:parameters).
- **Kilka rozmiarów jednej części:** zapisz każdy jako [konfigurację](topic:design-tables). Są przechowywane w pliku części.
- **Działania w polu liczbowym:** wpisz `=40/2` albo `=width / 2`. Powstaje równanie. Zobacz [Równania w obie strony](topic:equations-two-way).
- **Jednostki calowe:** część pokazuje milimetry. W polu liczbowym z `=` albo w parametrze `2in` zamienia się na 50.8.

Zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet).
