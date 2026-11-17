---
title: Wykańczanie 3D: równoległe i łuskowe
summary: Wykończ zakrzywioną powierzchnię całego modelu frezem kulistym, frezem z zaokrąglonym narożnikiem lub płaskim, w liniach równoległych pod dowolnym kątem albo w przejściach oddalonych o ustaloną odległość, tak aby grzbiety między nimi miały żądaną wysokość. Co gwarantują ścieżki, a czego nie.
keywords: wykańczanie 3d, wykańczanie, równoległe, raster, łuska, stała łuska, grzbiet, frez kulisty, frez z zaokrąglonym narożnikiem, powierzchnia, tolerancja, krok boczny, nachylenie, naddatek, drop cutter, wrypanie
from: e1587d0a
---

Dwie operacje w Manufacture obrabiają **całą powierzchnię modelu**, z narzędziem trzymanym pionowo (trzy osie). Nie wymagają wskazywania: działają na całym modelu, który widać z góry. Najpierw wykonaj obróbkę zgrubną części (adaptacyjną lub kieszeniową); przejście wykańczające po nieobrobionym materiale ostrzega, że narzędzie wejdzie zbyt głęboko.

## Równoległe

Proste linie przez model pod ustawionym **kątem**, w odstępie **krok boczny** (ułamek średnicy narzędzia). Każda linia podąża za powierzchnią: wierzchołek narzędzia jest tak wysoko, jak musi być, aby żadna część frezu nie zeszła poniżej modelu, a linia jest dzielona na drobniejsze odcinki tam, gdzie powierzchnia się wygina. Przy włączonym **Zygzak** narzędzie pozostaje w materiale między liniami, gdzie może to zrobić bezpiecznie (sprawdzane wzdłuż ruchu); w przeciwnym razie się podnosi.

- **Tolerancja**: jak daleko prosty odcinek linii może być od prawdziwej wysokości wierzchołka (połowa tej wartości jest używana jako granica w środku każdego odcinka). Domyślnie 0.01 mm.
- **Tylko tam, gdzie powierzchnia ma co najmniej … i co najwyżej … (°)**: wykańcza tylko płytkie obszary albo tylko strome. Tam, gdzie powierzchnia jest poza zakresem, linia jest pomijana, a narzędzie się podnosi.
- **Naddatek**: model przesunięty o tę odległość (frez powiększony o nią: dokładne dla frezów kulistych i z zaokrąglonym narożnikiem; płaski frez zostawia co najmniej tyle).
- **Dno**: nic nie jest obrabiane poniżej tej wartości z.

## Łuska (scallop)

Przejścia zachowujące stałą odległość na powierzchni od siebie, tak aby grzbiet (łuska) pozostały między dwoma sąsiednimi przejściami miał żądaną **wysokość**. Odległość wynika z wysokości i promienia kuli: s = 2·√(2·R·h − h²), na przykład około 0.69 mm między przejściami dla kuli Ø6 i grzbietu 0.02 mm. Frez z zaokrąglonym narożnikiem używa promienia narożnika. Płaski frez palcowy jest odrzucany: nie ma grzbietu do wymiarowania.

Przejścia zaczynają się **od krawędzi modelu, idąc do środka** albo **od jego góry, idąc w dół**. Są to kontury odległości po powierzchni (a nie wysokości), więc na zboczu leżą blisko siebie w rzucie, a na płaszczyźnie są szeroko rozstawione. Odległość mierzy się na siatce po powierzchni i jest dokładna do około 1 %; wysokość grzbietu jest dokładna tam, gdzie powierzchnia jest płaska lub łagodnie zakrzywiona, i przybliżona tam, gdzie szybko się zakrzywia. **Współbieżnie** zachowuje wyższą stronę powierzchni po prawej stronie frezu.

## Jak dobre są ścieżki

Co sprawdzają testy, za pomocą wzorów zamkniętych lub niezależnego przeszukiwania siłowego śladu frezu:

- Wysokość wierzchołka pod narzędziem jest dokładna dla frezu kulistego, z zaokrąglonym narożnikiem i płaskiego na ścianach, krawędziach i narożnikach siatki, i nigdy nie jest wyższa niż prawdziwa wysokość; w przypadku linii równoległych ścieżka mieści się w jej tolerancji, bez wrypania głębszego niż ta wartość.
- Długości ścieżek na pochylonej płaszczyźnie zgadzają się ze wzorem zamkniętym; przejścia łuskowe na płaszczyźnie są oddalone o żądaną odległość, a grzbiet między nimi ma żądaną wysokość.
- Symulacja materiału nie pokazuje wrypania po przejściu i pokazuje pozostałe grzbiety.

Czym te ścieżki nie są: to podstawowe przejścia wykańczające, a nie całość tego, co oferuje system produkcyjny.

- Nie zbudowano: linia poziomicowa (stała z), czyszczenie narożników i ołówkiem, przejścia promieniowe i spiralne, rzutowanie krzywej na powierzchnię, wykrywanie płaskich obszarów, obróbka resztek, sprawdzanie kolizji oprawki i trzonu oraz pochylanie narzędzia.
- Środek narzędzia pozostaje nad modelem: ścieżki zatrzymują się na krawędzi modelu zamiast za nią wychodzić, więc pionowa ściana tuż przy krawędzi nie jest wykończona aż do podstawy.
- Podcięcia nie są widoczne (widać powierzchnię, na którą narzędzie trafia z góry).
- Model to siatka z jądra, więc ścieżki podążają za siatką (jej tolerancja cięciwy wynosi około 0.0002 przekątnej części), a nie za dokładną powierzchnią.
- Wykańczanie dużego modelu przy drobnej tolerancji daje długi program z wieloma krótkimi ruchami. Sprawdź wynik w symulatorze maszyny przed frezowaniem.
