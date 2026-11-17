---
title: Biblioteka inżynierska
summary: Wzory z podręczników jako czytelne skrypty, w jednostkach SI, każdy wynik z podanym źródłem: przepływ w rurach i kanałach, wymiana ciepła i wymienniki, elementy ciśnieniowe, dynamika gazów, właściwości wody i powietrza, materiały oraz sprawdzane jednostki. Do czego każdy służy i gdzie się kończy.
keywords: inżynieria, biblioteka, jednostki, Darcy-Weisbach, Colebrook, Reynolds, współczynnik tarcia, Dittus-Boelter, Gnielinski, NTU, skuteczność, LMTD, żebro, Barlow, Lamé, dysza, izentropowy, Mach, przepływ dławiony, woda, powietrze, właściwości, materiał, źródła
from: 786ef967
---

Biblioteka inżynierska to zestaw skryptów w bibliotece obszaru roboczego Script (`craftlib/eng`). Każdy to funkcja, którą można czytać od góry do dołu, z nagłówkiem podającym jej **metodę**, **jednostki**, **ograniczenia**, **odniesienia** oraz **sprawdzenie** z przykładową liczbą. Wszędzie używają jednostek SI i zwracają wielkości z **jednostką** i **źródłem**, więc karta danych może wydrukować, skąd pochodzi każda liczba.

## Sprawdzane jednostki

`to_si(10, 'bar', 'Pa')` przelicza wartość i odrzuca jednostkę mierzącą coś innego (długość tam, gdzie oczekiwane jest ciśnienie). `from_si`, `unit_convert(1, 'bar', 'psi')` i `unit_kind('W/(m K)')` („przewodność cieplna”) działają tak samo. `temp_k(25, 'C')` i `temp_from_k` przeliczają temperatury, które mają przesunięcie.

## Właściwości

- `fluid('water', T)` i `fluid('air', T, p)`: gęstość, lepkość, przewodność, ciepło właściwe, liczba Prandtla. Woda 0 do 100 °C, powietrze 250 do 600 K; poza tym zakresem funkcja się zatrzymuje zamiast ekstrapolować.
- `material('ss304')`: moduł Younga, współczynnik Poissona, gęstość, granica plastyczności, przewodność, ciepło właściwe, rozszerzalność: wartości w temperaturze pokojowej z tych samych kart danych co Simulation. Rzeczywisty projekt używa certyfikowanych wartości dostawcy. Krzywe temperaturowe nie są jeszcze zbudowane.

## Przepływ w rurach i kanałach

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminarny, potem równanie Colebrooka dla przepływu burzliwego; zakres 2300 do 4000 nie ma wiarygodnego wzoru i funkcja to mówi), `darcy_weisbach`, `minor_loss`, `pipe_flow` (okrągła rura, wszystko naraz) i `rect_channel` (laminarne kanały prostokątne według dopasowania Shaha i Londona).

## Wymiana ciepła

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (wybiera laminarny lub burzliwy i podaje nazwę korelacji), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` oraz `ntu_for` (zależności skuteczność-NTU dla przepływu przeciwprądowego, równoległego, płaszczowo-rurowego, poprzecznego i pojedynczego zmieniającego się strumienia) oraz `hx_size` (rozmiar UA, którego wymaga obciążenie; mówi, ile jest możliwe, gdy obciążenia nie da się spełnić).

## Elementy ciśnieniowe

`allowable_stress` (granica plastyczności podzielona przez współczynnik bezpieczeństwa), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamégo, według kryterium obwodowego lub ścinania) i `wall_sphere`. To są marginesy z podręczników, **nie obliczenia wg normy zbiorników ciśnieniowych**: bez naddatku na korozję, sprawności złącza ani współczynników normowych.

## Dynamika gazów

`isentropic` (stosunki przy liczbie Macha), `mach_from_area`, `choked_flow`, `throat_area` i `exit_mach`, dla gazu doskonałego bez tarcia, ciepła i uderzeń.

## Sprawdź wynik

`check_stress`, `check_thermal` i `check_flow` uruchamiają własne solvery PartCraft: naprężeń, przewodzenia i przepływu na wygenerowanej części ze skryptu i odczytują maksymalne naprężenie i przemieszczenie, temperatury i strumień ciepła oraz przepuszczalność sieci kanałów. Nie zmieniają niczego w solverach. Sprawdzenia naprężeń i temperatury używają wokseli, więc zakrzywiona ściana jest schodkiem, a naprężenie w ostrym wewnętrznym narożniku lub pod obciążeniem punktowym zależy od rozmiaru woksela.
