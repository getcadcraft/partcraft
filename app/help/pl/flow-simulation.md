---
title: Symulacja przepływu płynu (badanie przepływu)
summary: Przepływ przez kanały wewnątrz części lub wokół niej w pudełku: wloty, wyloty, powietrze, woda albo własny płyn, potem prędkość i ciśnienie na przesuwalnej płaszczyźnie przekroju, linie prądu, ciśnienie na powierzchni, spadek ciśnienia, bilans masy, opór i siła nośna, z tym, co metoda laminarna może i czego nie może pokazać.
keywords: przepływ, CFD, płyn, dynamika płynów obliczeniowa, symulacja przepływu, powietrze, woda, lepkość, gęstość, liczba Reynoldsa, laminarny, turbulentny, spadek ciśnienia, strata wysokości, wlot, wylot, pokrywa, zaślepka, prędkość, natężenie przepływu, przepływ objętościowy, litry na minutę, ciśnienie statyczne, linie prądu, płaszczyzna przekroju, płaszczyzna tnąca, opór, siła nośna, współczynnik oporu, współczynnik siły nośnej, powierzchnia czołowa, przepływ zewnętrzny, przepływ wewnętrzny, rura, kanał, rozdzielacz, dysza, metoda sieci Boltzmanna, residuum, zbieżność
from: 7dc75f29
---

Badanie **Przepływ** pokazuje, jak płyn przemieszcza się przez kanały wewnątrz części (**wewnętrzny**) albo wokół niej (**zewnętrzny**). Domyślnie jest **laminarny, nieściśliwy, izotermiczny i newtonowski**: gładki przepływ płynu o stałej gęstości i lepkości, bez ciepła, turbulencji i grawitacji. Dostępny jest też **eksperymentalny** model turbulentny, tylko do jakościowych wzorców (patrz niżej). Działa na nazwanych ścianach, które jądro siatki nadaje części (patrz [Jądro siatki](topic:solid-kernels)).

W polu **Obszar roboczy** wybierz **Symulację**, naciśnij **Nowe badanie**, jeśli nie ma żadnego, i ustaw **Typ** na **Przepływ (CFD)**. **Model przepływu** to **Laminarny** (domyślnie) albo **Turbulentny (Spalart–Allmaras, eksperymentalny)**: patrz **Przepływ turbulentny (eksperymentalny)** niżej. Ustawienia konstrukcyjne badania zostają zachowane, więc można wrócić. Ustawienia przepływu są zapisane w pliku części i każdą zmianę można cofnąć.

## Wybierz płyn i komórki

- **Płyn**: powietrze lub woda w 20 °C albo **Własny** z własną gęstością (kg/m³) i lepkością dynamiczną (Pa·s). Dla powietrza używane jest prawo gazu doskonałego i prawo Sutherlanda (1.204 kg/m³, 1.813 × 10⁻⁵ Pa·s); dla wody wartości IAPWS (998.21 kg/m³, 1.0016 mPa·s).
- **Rozmiar komórki**: przestrzeń płynu jest wypełniona równymi sześcianami. Zostaw pole puste, by mieć automatyczny rozmiar; panel pokazuje siatkę. Każdy otwór i kanał powinien mieć **co najmniej 8 do 10 komórek w poprzek**, by wyniki były użyteczne; mniejsze komórki są dokładniejsze i wolniejsze (dwa razy drobniejsza siatka to około 16 razy więcej pracy).
- **Ściany**: **Interpolowane** podąża za zakrzywionymi ścianami między komórkami (domyślnie); **Odbicie** traktuje ściany jak schodki sześcianów.

## Przepływ wewnątrz części

Przestrzeń płynu musi być zamknięta. Dodaj **Wlot** i **Wylot** w panelu, a potem kliknij ich ściany w widoku:

1. **Płaska ściana wokół otworu** — krawędź na końcu rury, ściana przyłącza. PartCraft zamyka tam otwór pokrywą. Każdy otwór w tej ścianie należy do tego wylotu, więc gdy wlot i wylot leżą na tej samej ścianie, zamiast tego zamodeluj cienką zaślepkę nad jednym z nich.
2. **Wewnętrzna ściana zaślepki** — jak w innych programach CAD: zamodeluj cienką płytę (wyciągnięcie) nad otworem i wskaż jej ścianę, która styka się z płynem.

Dla wlotu ustaw **prędkość** (m/s, jednakową na całym otworze, do wnętrza części) albo **przepływ objętościowy** (L/min). Dla wylotu ustaw **ciśnienie statyczne** (Pa, manometryczne). Jeśli otwór pozostanie otwarty albo ściana jest cieńsza niż komórka, wnętrze połączy się z zewnętrzem i obliczenia zatrzymają się z komunikatem „Brak zamkniętej przestrzeni płynu”.

## Przepływ wokół części

Ustaw **Przepływ** na **Zewnętrzny**, **Prędkość**, kierunek, w którym płynie, oraz jak daleko pudełko sięga w górę i w dół przepływu oraz na boki (puste: 1, 3 i 1 raz największy wymiar części). Ściana pudełka, przez którą wpływa przepływ, to dopływ; ściana, przez którą wypływa, to odpływ przy 0 Pa; ściany równoległe do przepływu są ślizgowe. Zbyt małe pudełko ściska przepływ wokół części i zwiększa opór. **Powierzchnia odniesienia** to pole, z którego liczone są współczynniki oporu i siły nośnej (puste: powierzchnia czołowa części widziana wzdłuż przepływu); siłę nośną mierzy się wzdłuż +Y, chyba że wybierzesz inny kierunek.

## Oblicz i odczytaj wyniki

Naciśnij **Oblicz**. Obliczenia działają w tle z liczbą kroków, residuum i wykresem residuum; **Stop** je kończy. Zatrzymują się, gdy residuum (o ile pole prędkości zmienia się w kroku) spadnie poniżej celu, a spadek ciśnienia lub opór się ustabilizuje. Jeśli wcześniej osiągnięty zostanie limit kroków, panel pokaże na czerwono **Brak zbieżności**: liczby są ostatnim stanem, a nie wynikiem ustalonym.

- **Płaszczyzna przekroju**: prędkość lub ciśnienie statyczne na płaszczyźnie przechodzącej przez model; wybierz jej normalną (X, Y lub Z) i przeciągnij suwak, by ją przesunąć. Najedź kursorem, by odczytać wartości.
- **Linie prądu**: od wlotów (wewnętrzny) albo od grzebienia rozciągniętego w poprzek końca dopływu pudełka w płaszczyźnie przekroju (zewnętrzny).
- **Część**: bryła, przezroczysta (by zobaczyć płaszczyznę wewnątrz), ciśnienie na powierzchni albo ukryta.
- **Tabela**: liczba Reynoldsa, spadek ciśnienia (średnie ciśnienie statyczne na wlotach minus na wylotach), przepływ i średnie ciśnienie każdego otworu, siła na części, opór i siła nośna ze współczynnikami i powierzchnią odniesienia (zewnętrzny), bilans masy (dopływ względem odpływu), siatka i solver.

## Przepływ turbulentny (eksperymentalny)

**Model przepływu › Turbulentny (Spalart–Allmaras, eksperymentalny)** rozwiązuje uśrednione w czasie przepływy turbulentne (ustalone RANS): model Spalart–Allmaras daje lepkość wirową w każdej komórce, a komórki przy ścianach używają prawa ściany Spaldinga zamiast rozdzielania cienkiej warstwy. Przepływ jest w pełni turbulentny wszędzie (bez obszarów laminarnych i bez przejścia).

**Nie przeszedł testów dokładności.** Panel, wyniki i tabela mówią o tym przy każdym badaniu turbulentnym, a tego ostrzeżenia nie da się zamknąć. Używaj go do **jakościowych wzorców przepływu** — gdzie przepływ się oddziela, zawraca albo przyspiesza — **a nie do liczb projektowych**.

| Sprawdzenie | Odniesienie | Wynik |
|---|---|---|
| Tarcie w płaskim kanale, pierwsza komórka przy y⁺ 49 / 98 | Korelacja Deana | +3.3 % / +4.7 % |
| Kanał z rozdzielonymi ścianami (y⁺ ≈ 3), Re_τ 180: prędkość objętościowa | Moser, Kim & Mansour DNS | −1 % |
| Płaski kanał, y⁺ 7–15 lub 190–380 | Korelacja Deana | +9 do +22 % |
| Tarcie w rurze przez komórki sześcienne, w pełni rozwinięte, 10–30 komórek w poprzek | Colebrook | o 30 do 34 % za wysokie |
| Przyczepienie za uskokiem skierowanym wstecz, 6–14 komórek na wysokość uskoku | Driver & Seegmiller, 6.26 wysokości uskoku | o 21 do 39 % za krótkie |

Wyniki poprawiają się tylko powoli przy drobniejszych komórkach. Po obliczeniu tabela pokazuje **y⁺ pierwszej komórki** (min, średnią i maks. po komórkach przy ścianach) i ostrzega poza sprawdzonym zakresem od 1 do 400; celuj w około 30 do 300. **Czas obliczeń:** automatyczne komórki są dobierane tak, by liczyć najwyżej kilka minut na jednym rdzeniu laptopa (panel pokazuje najgorszy przypadek dla siatki i limitu kroków; mała rura ustala się w mniej niż 20 sekund). Zmniejszenie rozmiaru komórki o połowę wydłuża czas około 16 razy. Siły na części pochodzą z bilansu pędu po otworach lub pudełku.

**Stan prac:** komórki przy ścianach dopasowują teraz własne naprężenie styczne do prawa ściany, co obniżyło błędy rury i uskoku do wartości podanych wyżej, bez zmiany wyników dla płaskiego kanału. To jednak nie wystarczyło do liczb projektowych. Następnym krokiem są drobniejsze komórki przy ścianach.

## Co może, a czego nie może pokazać

- **Model laminarny** działa tylko dla przepływu laminarnego. W rurach przepływ staje się turbulentny powyżej liczby Reynoldsa około 2,000 do 4,000; za tępymi bryłami ślad zaczyna odrywać wiry powyżej około 50. Panel ostrzega w tych punktach. Wynik laminarny dla przepływu turbulentnego zaniża spadek ciśnienia i błędnie określa opór. Eksperymentalny model turbulentny (powyżej) opisuje przepływ turbulentny jakościowo; jego liczby nie są jeszcze wiarygodne.
- **Metoda:** metoda sieci Boltzmanna (D3Q19, zderzenia z dwoma czasami relaksacji) prowadzona do stanu ustalonego. Wewnątrz jest lekko ściśliwa; PartCraft utrzymuje zmiany gęstości w granicach kilku procent. Jeśli przepływ jest zbyt szybki dla komórek, obliczenia nie ruszą i podadzą, o ile mniejsze muszą być komórki.
- **Sprawdzono względem:** przepływu Hagena–Poiseuille’a w rurze przez część (gradient ciśnienia w granicach 1 % przy 20 komórkach w poprzek), wnęki napędzanej pokrywą wg Ghii i in. (w granicach 0,75 % prędkości pokrywy) oraz wzorcowego cylindra Schäfera–Turka (opór w granicach 1 % przy 10 komórkach na średnicę).
- Nie jest modelowane: przenoszenie ciepła, turbulencja z dokładnością projektową (model turbulentny jest eksperymentalny), swobodne powierzchnie, kawitacja, grawitacja, ruchome części, płyny nienewtonowskie, chropowate ściany. Wersja laboratoryjna: ważne wyniki sprawdź innym sposobem.
