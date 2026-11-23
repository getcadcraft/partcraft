---
title: Obróbka wykończeniowa 3D: równoległa i grzebieniowa (scallop)
summary: Wykończ zakrzywioną powierzchnię całego modelu frezem kulistym, zaokrąglonym albo płaskim, liniami równoległymi pod dowolnym kątem albo przejściami oddalonymi o zadaną odległość, tak aby grzbiety między nimi zachowały żądaną wysokość. Co gwarantują ścieżki, a czego nie.
keywords: obróbka wykończeniowa 3D, wykończenie, równoległa, raster, scallop, stała wysokość grzbietu, cusp, frez kulisty, zaokrąglenie narożnika, powierzchnia, tolerancja, krok boczny, nachylenie, naddatek, drop cutter, wgryzienie
from: 942d2341
---

Dwie operacje w Wytwarzaniu obrabiają **całą powierzchnię modelu** z narzędziem utrzymywanym pionowo (trzy osie). Nie wymagają wskazywania: pracują na całym modelu, który jest widoczny z góry. Najpierw zgrubnie obrób część (adaptacyjnie albo kieszenią); przejście wykończeniowe po nieobrobionym półfabrykacie ostrzeże, że narzędzie wejdzie zbyt głęboko.

## {{ui:Równoległość}}

Proste linie przez model pod **kątem**, który ustawisz, w odstępach **kroku bocznego** (ułamek średnicy narzędzia). Każda linia podąża za powierzchnią: czubek narzędzia jest tak wysoko, jak musi być, aby żadna część frezu nie zeszła poniżej modelu, a linia jest frezowana drobniej tam, gdzie powierzchnia się wygina. Przy włączonym **Zygzak** narzędzie pozostaje w materiale między liniami tam, gdzie może to zrobić bezpiecznie (sprawdzane wzdłuż ruchu); w przeciwnym razie się podnosi.

- **Tolerancja**: jak daleko prosty odcinek linii może być od prawdziwej wysokości czubka (połowa tej wartości jest używana jako granica w środku każdego odcinka). Domyślnie 0,01 mm.
- **Tylko tam, gdzie powierzchnia ma co najmniej … i co najwyżej … (°)**: wykańczaj tylko płaskie obszary albo tylko strome. Tam, gdzie powierzchnia jest poza zakresem, linia jest pomijana, a narzędzie się podnosi.
- **Naddatek**: model przesunięty o tę odległość (narzędzie powiększone o nią: dokładne dla narzędzi kulistych i zaokrąglonych; narzędzie płaskie zostawi co najmniej tyle).
- **Dno**: nic nie jest frezowane poniżej tej wysokości z.

## {{ui:Grzebieniowe (scallop)}}

Przejścia zachowujące stałą odległość na powierzchni od siebie, tak aby grzbiet (scallop) pozostający między dwoma sąsiednimi przejściami miał żądaną **wysokość**. Odległość wynika z wysokości i promienia kuli: s = 2·√(2·R·h − h²), na przykład około 0,69 mm między przejściami dla kuli Ø6 i grzbietu 0,02 mm. Narzędzie zaokrąglone używa swojego promienia zaokrąglenia narożnika. Frez płaski jest odrzucany: nie ma grzbietu, który dałoby się wymiarować.

Przejścia zaczynają się od **krawędzi modelu, idąc do środka**, albo od **jego góry, idąc w dół**. Są konturami odległości na powierzchni (a nie wysokości), więc na zboczu leżą blisko siebie w rzucie, a na płaszczyźnie są szeroko rozstawione. Odległość mierzona jest na siatce nałożonej na powierzchnię i jest dokładna do około 1 %; wysokość grzbietu jest dokładna tam, gdzie powierzchnia jest płaska lub łagodnie zakrzywiona, a przybliżona tam, gdzie szybko się zakrzywia. **Frezowanie współbieżne** utrzymuje wyższą stronę powierzchni po prawej stronie narzędzia.

## Jak dobre są ścieżki

Co sprawdzają testy, z wzorami zamkniętymi albo niezależnym przeszukiwaniem siłowym śladu narzędzia:

- Wysokość czubka pod narzędziem jest dokładna dla narzędzia kulistego, zaokrąglonego i płaskiego na ścianach, krawędziach i narożnikach siatki i nigdy nie jest wyższa niż prawdziwa wysokość; dla linii równoległych ścieżka mieści się w tolerancji, bez wgryzienia głębszego niż ona.
- Długości ścieżek na pochylonej płaszczyźnie zgadzają się z wzorem zamkniętym; przejścia grzebieniowe na płaszczyźnie są oddalone o żądaną odległość, a grzbiet między nimi wychodzi na żądanej wysokości.
- Symulacja półfabrykatu nie pokazuje wgryzienia po przejściu i pokazuje grzbiety, które pozostają.

Czym te ścieżki nie są: to podstawowe przejścia wykończeniowe, a nie pełen zestaw możliwości systemu produkcyjnego.

- Nie zbudowano: wykańczania na stałej wysokości z (waterline), czyszczenia narożników i krawędzi (pencil), przejść promieniowych i spiralnych, rzutowania krzywej na powierzchnię, wykrywania płaskich obszarów, sprawdzania kolizji oprawki i trzonu. Zgrubną obróbkę i obróbkę resztek wykonują osobne operacje ([Obróbka zgrubna 3D i obróbka resztek](topic:rough-3d)); narzędzie pochylone to [wykańczanie 5-osiowe](topic:multi-axis#5-axis-finishing).
- Środek narzędzia pozostaje nad modelem: ścieżki zatrzymują się na krawędzi modelu zamiast wychodzić poza nią, więc pionowa ściana dokładnie na krawędzi nie jest wykończona aż do podstawy.
- Podcięć nie widać (powierzchnia to to, co narzędzie spotyka z góry).
- Model to siatka z jądra, więc ścieżki podążają za siatką (jej tolerancja cięciwy wynosi około 0,0002 przekątnej części), a nie za dokładną powierzchnią.
- Wykańczanie dużego modelu z drobną tolerancją daje długi program z wieloma krótkimi ruchami. Sprawdź wynik w symulatorze swojej maszyny przed frezowaniem.
