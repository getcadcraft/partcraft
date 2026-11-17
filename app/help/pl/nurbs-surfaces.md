---
title: Powierzchnie swobodne (NURBS)
summary: Gładkie krzywe i powierzchnie obok części — loft, przeciąganie, siatki krzywych, łatki z czterech krawędzi, zaokrąglenia, przycinanie — z ciągłością G0, G1 i G2 mierzoną na dokładnych powierzchniach, bryły z sumą, odejmowaniem i częścią wspólną wypalone w części, widoki zebra i krzywizny, ściany dopasowane do skanu z mierzonym błędem oraz pliki STEP lub IGES. Zachowywane w pliku części.
keywords: nurbs, skan, inżynieria wsteczna, dopasuj, siatka na powierzchnię, chmura punktów, stl, przytnij, przycięty, otwór, wytnij, bryła, bryły, operacje logiczne, suma, odejmij, część wspólna, różnica, zszyj, zamknięty, wypal, swobodny, powierzchnia, powierzchnie, b-spline, bspline, krzywa, spline, loft, przeciąganie, szyna, siatka, coons, łatka, zbłendowanie, dopasowanie, ciągłość, g0, g1, g2, styczna, krzywizna, zebra, punkty kontrolne, węzły, stopień, step, iges, klasa A, kadłub, wygładzanie
from: 64ed5196
---

Obszar roboczy **Powierzchnie** tworzy gładkie krzywe i powierzchnie typu używanego w powłokach wyrobów, nadwoziach samochodów i kadłubach łodzi: NURBS, ta sama matematyka, której używają inne modelery powierzchni. Wszystko jest mierzone na dokładnych powierzchniach, nigdy na trójkątach, które widzisz. Wymiary są w milimetrach, jak w reszcie PartCraft.

Wybierz **Powierzchnie** w polu **Obszar roboczy**. Pasek narzędzi ma {{ui:Krzywa}}, {{ui:Loft}}, {{ui:Przeciągnięcie}}, {{ui:Dopasuj}} i {{ui:Zebra}}; każde polecenie jest w panelu po prawej. Polecenie mówi, czego jeszcze potrzebuje: kliknij krzywe lub powierzchnie w widoku (blisko krawędzi albo końca, gdy o to poprosi) albo wybierz je z listy; wpisz punkty albo kliknij je na ścianach części (poza częścią trafiają na płaszczyznę terenu), a potem naciśnij Enter.

Krzywe i powierzchnie są zapisane w pliku części obok bryły. Nie zmieniają elementów części: panel ma własne {{ui:Cofnij}} i {{ui:Ponów}}, jeden krok na polecenie.

## Krzywe

- **Krzywa przez punkty** przechodzi przez każdy klikany punkt. **Krzywa z punktów kontrolnych** podąża zamiast tego za siatką punktów.
- **Wstaw węzeł**, **Podnieś stopień** i **Obniż stopień** zmieniają opis krzywej bez jej przesuwania (obniżenie odmawia, gdy krzywa przesunęłaby się bardziej niż tolerancja). **Przebuduj krzywą** nadaje jej nową liczbę punktów kontrolnych i podaje, o ile się przesunęła.
- **Dopasuj krzywą** sprawia, że koniec jednej krzywej styka się z końcem drugiej z G0 (dotyk), G1 (ten sam kierunek) albo G2 (także ta sama krzywizna). **Zbłenduj krzywą** dodaje nową krzywą między dwoma końcami, G1 lub G2.

## Powierzchnie

- **Loft** przez dwie lub więcej krzywych, **Powierzchnia prostolinijna** między dwiema, **Wyciągnij krzywą**, **Obróć krzywą**.
- **Przeciągnij wzdłuż jednej szyny** prowadzi profil wzdłuż ścieżki bez skręcania; **Przeciągnij wzdłuż dwóch szyn** utrzymuje końce profilu na obu szynach. Przeciągnięcia są dopasowywane: wynik podaje, jak blisko pozostały prawdziwego przeciągnięcia.
- **Powierzchnia z siatki krzywych** przechodzi przez siatkę krzywych (każda przecina każdą z pozostałych raz). **Łatka z czterech krawędzi** wypełnia cztery krzywe spotykające się w narożnikach.
- **Dopasuj powierzchnię** sprawia, że krawędź powierzchni styka się z sąsiadem z G0, G1 lub G2; **Zbłenduj powierzchnię** dodaje powierzchnię między dwiema krawędziami.
- **Odsunięcie powierzchni**, **Przedłuż powierzchnię** (powierzchnia biegnie dalej tak, jak szła), **Przebuduj powierzchnię**.

## Sprawdzanie jakości

Tabela **Wspólne krawędzie** wymienia każdą krawędź, którą dzielą dwie powierzchnie, z przerwą (mm), kątem między nimi (°) i skokiem krzywizny (1/mm), oraz czy to daje G0, G1 czy G2. Krawędź gorsza, niż zamówiłeś, pojawia się w **Problemach** z poprawką **Dopasuj**. **Zebra** pasy i kolory **krzywizny** pochodzą z dokładnej powierzchni: pasy biegnące bez przerwy przez krawędź oznaczają G1; pasy, które zachowują też swoją szerokość, oznaczają G2.

G0–G2 są mierzone w 33 punktach na krawędź. **G3 i jakość „klasy A” nie są mierzone i nie są deklarowane.**

## Przycinanie powierzchni

Grupa **Przytnij** tnie powierzchnię bez zmiany jej kształtu: powierzchnia zachowuje wszystkie punkty kontrolne, a widoczna, liczona i zapisywana jest tylko część w środku konturu. **Przytnij do prostokąta** i **Przytnij okręgiem** działają na udziale (0 do 1) powierzchni w każdym kierunku, więc nie wymagają wskazywania w widoku; **Przytnij krzywą** przyjmuje zamkniętą krzywą leżącą na powierzchni (jest rzutowana na powierzchnię i odrzucana słowami, gdy jest otwarta albo dalej niż tolerancja). Zaznacz **Wytnij otwór**, aby usunąć wnętrze konturu; zostaw odznaczone, aby zostawić tylko wnętrze. Powierzchnia może mieć jeden zachowany kontur i dowolną liczbę otworów; kontur przecinający inny jest odrzucany. **Usuń przycięcie** pokazuje całą powierzchnię ponownie. Cofnij w panelu cofa przycięcie jak każdy inny krok.

STEP przenosi przycięcie jako granice ściany, a IGES jako przyciętą powierzchnię (encja 144); oba je odczytują.

## Bryły i operacje logiczne

Grupa **Bryły** zamienia powierzchnie w zamknięte bryły i łączy je. Bryła to tutaj zbiór powierzchni z panelu, które razem zamykają objętość; jej ściany pozostają dokładnymi powierzchniami NURBS z przycięciami.

- **Bryła prostopadłościan**, **Bryła walec** i **Bryła kula** tworzą jedną z wpisanych wymiarów (w mm): prostopadłościan z sześcioma płaskimi ścianami, walec z okrągłą boczną ścianą i dwoma płaskimi końcami przyciętymi do okręgu, kula z jednej obrotowej powierzchni.
- **Bryła z powierzchni** grupuje powierzchnie, które sam zrobiłeś. Wybierz je albo nie wybieraj żadnej, aby użyć wszystkich widocznych powierzchni, które nie są jeszcze w bryle. Są zszywane razem w granicach tolerancji: jeśli się nie zamykają, nic się nie zmienia, a panel mówi, ile krawędzi pozostaje otwartych i jak blisko muszą się spotkać.
- **Suma**, **Odejmij** (druga bryła jest odejmowana od pierwszej) i **Część wspólna** (tylko to, co obie mają wspólnego) biorą dwie bryły: kliknij ścianę każdej w widoku albo naciśnij **Wybierz** na liście **Bryły**. Zaznacz **Zachowaj obie bryły**, aby zostawić je obok wyniku.

Operacja logiczna zachowuje każdą ścianę na jej dokładnej powierzchni i tnie ją nowymi konturami przycięcia wzdłuż przecięcia. Wiersz wyniku podaje zmierzone wartości: jak daleko musiały się przesunąć punkty silnika brył, aby leżeć na dokładnych powierzchniach (nigdy więcej niż tolerancja), jak blisko są punkty przecięcia obu powierzchni (zwykle kilka milionowych milimetra), objętość oraz czy nowe ściany zamykają się ponownie, gdy zszyje się je od nowa z ich dokładnych powierzchni. Objętości mierzy się na trójkątach w granicach tolerancji (0,05 mm, chyba że ustawisz inną), więc objętość kuli lub walca wychodzi nieco niższa od dokładnej: mniejsza tolerancja daje bliższy wynik. Operacja logiczna, która nie może być wykonana czysto (bryły nie mają nic wspólnego, kontur przecinałby sam siebie), jest odrzucana słowami i nic nie zmienia. Jedna operacja logiczna to jeden krok {{ui:Cofnij}} panelu.

Na liście **Bryły** **Rozgrupuj** zachowuje ściany jako zwykłe powierzchnie; kosz usuwa bryłę i jej ściany.

## Zaokrąglenia i pogrubienie

**Zaokrąglenie między ścianami** zaokrągla krawędź, w której spotykają się dwie ściany jednej bryły: wybierz dwie ściany (w widoku albo przez **Wybierz** na liście), wpisz **promień** i, dla promienia zmieniającego się wzdłuż krawędzi, **promień na końcu** (0 zachowuje jeden promień). Kula o tym promieniu jest toczona wzdłuż krawędzi, dotykając obu ścian; zaokrąglenie to dokładny łuk kołowy, który pozostaje w każdym punkcie, połączony w jedną powierzchnię, a obie ściany są przycinane tam, gdzie kula je dotyka. Zewnętrzna krawędź traci materiał, a wewnętrzny narożnik zyskuje go. Wiersz wyniku podaje, co zmierzono: jak daleko powierzchnia zaokrąglenia jest od toczącej się kuli między punktami, z których została zbudowana (punkty są dodawane, aż odległość będzie w granicach jednej czwartej tolerancji), największy kąt między zaokrągleniem a każdą ścianą wzdłuż linii styku oraz te same wartości co przy Sumie. Promień, który nie pasuje (kula wyszłaby poza ścianę albo ściana wygina się ciaśniej niż promień), jest odrzucany z nazwą ściany i nic się nie zmienia.

**Zaokrąglenie kilku krawędzi** zaokrągla wiele krawędzi jednym krokiem: wybierz dwie ściany pierwszej krawędzi, potem dwie ściany następnej itd. (ściana może być w kilku parach, na przykład górna ściana pudełka w czterech z nich); wszystkie krawędzie dostają wpisany promień. Każde zaokrąglenie jest liczone na bryle w jej pierwotnym stanie, a potem wycinane jedno po drugim, więc kolejność nie ma znaczenia. Tam, gdzie dwie zaokrąglone krawędzie spotykają się w narożniku, którego pozostałe krawędzie są ostre, dwa zaokrąglenia zachodzą na siebie wzdłuż krzywej przecięcia (zagięcie). Tam, gdzie trzy zaokrąglone zewnętrzne krawędzie trzech płaskich ścian, prostopadłych do siebie, spotykają się z jednym promieniem, narożnik jest jednym **fragmentem sfery** stycznym do wszystkich trzech zaokrągleń (odznacz **Narożniki**, aby uzyskać zagięty narożnik); krawędź musi być co najmniej dwa razy dłuższa od promienia tam, gdzie oba jej końce są takimi narożnikami. Wiersz wyniku podaje, ile krawędzi zostało zaokrąglonych i jak wyszły narożniki. Krawędzie wewnętrzne też można zaokrąglać razem, ale wynik, który się nie zamyka ponownie, jest tylko zgłaszany (wiersz to mówi), więc go sprawdź.

**Pogrub w bryłę** nadaje powierzchni grubość: wskaż ją, wpisz **grubość** i zaznacz **Druga strona**, aby rosła w drugą stronę. Ściana odsunięta jest dopasowywana do powierzchni i sprawdzana względem niej (wiersz wyniku podaje największą różnicę od grubości); ściany podążają za każdą krawędzią i każdym konturem przycięcia. Jeśli powierzchnia wygina się ciaśniej niż grubość po tej stronie albo inna jej część leży bliżej niż grubość, operacja jest odrzucana z nazwą powierzchni i miejscem, a nic się nie zmienia.

## Wypal bryłę w części

**Wypal** (na pasku Powierzchnie) albo **Wypal w części** na liście **Bryły** zamienia bryłę w bryłę części, tak jak otwarty STL staje się jedną: wybierz bryłę, czy ma być **dodana** do części, **wycięta** z niej czy **przecięta** z nią, oraz tolerancję (jak daleko trójkąty mogą być od dokładnych powierzchni). To jeden krok cofnięcia części, a na liście elementów pojawia się jako import nazwany od bryły. Część zachowuje trójkąty, więc otwiera się i przebudowuje bez powierzchni; dokładna bryła zostaje w Powierzchniach, więc możesz ją wypalić ponownie po zmianie.

## Pliki

Eksportuj **STEP** (AP242) albo **IGES** z krzywymi i powierzchniami dokładnie takimi, jakie są (krzywe i powierzchnie B-spline, nic nie zamienione na trójkąty). Każda powierzchnia jest osobną ścianą z przycięciem; bryła jest zapisywana jako jedna zamknięta powłoka, w której każda krawędź jest wspólna dla dwóch ścian, tak jak oczekują inne programy CAD (pasek stanu podaje, ile brył wyszło w ten sposób). W IGES ta sama bryła to jedna rozmaita bryła B-rep (encja 186 nad zamkniętą powłoką 514, ściany 510, pętle 508, jedna lista krawędzi 504 i jedna lista wierzchołków 502); bryła, której ściany nie łączą się krawędź w krawędź, jest zapisywana jako osobne ściany, a wiersz o tym informuje. **Importuj…** odczytuje taką bryłę z powrotem jako bryłę, z STEP i z IGES.

## Wygładzanie linii kadłuba

**Wygładź** (na pasku Powierzchnie) mierzy każdą krzywą na jej dokładnym kształcie — punkty przegięcia (miejsca, w których zmienia kierunek zginania), największą krzywiznę, skoki krzywizny w jej węzłach i chropowatość — i przebudowuje te z przegięciem lub skokiem, używając najmniejszej liczby punktów kontrolnych, które mieszczą się w podanej tolerancji i nie dodają przegięcia. Rysuj przekroje poprzeczne (stations), linie wodne i pośladki (buttocks) jako krzywe, wygładź je, a potem **Loft** kadłub przez przekroje i sprawdź go **Zebrą**. Niewygładzone krzywe pojawiają się też w **Problemach** z poprawką **Wygładź tę krzywą**. Linia, która ma zmieniać kierunek (przekrój w kształcie litery S), zachowuje to jedno przegięcie. Wyporność, środki i ramiona prostujące kadłuba pochodzą z bryły części: zobacz narzędzie hydrostatyczne.

## Powierzchnie ze skanu (inżynieria wsteczna)

Otwórz część, która zawiera zeskanowaną siatkę (otwarty STL albo wypalona bryła), wybierz **Powierzchnie** w polu **Obszar roboczy**, a w grupie **Skan** wybierz **Dopasuj powierzchnie do skanu**; zbudowana siatka części jest skanem. Narzędzie szuka **płaszczyzn**, **walców**, **kul** i **stożków** (dokładne powierzchnie, z których składa się obrobiona część; każdy wiersz podaje znaleziony promień lub półkąt), znajduje **zaokrąglenia** (zaokrąglone krawędzie i narożniki: mały walec lub kula, styczna do dwóch lub więcej innych ścian, pokazana z promieniem i ścianami, które łączy), **zaokrąglenia pierścieniowe** (torus: zaokrąglona krawędź, w której płaska ściana styka się z walcem lub stożkiem, pokazana z promieniem i promieniem pierścienia) oraz **zmienne zaokrąglenia** (zaokrąglona krawędź, której promień zmienia się wzdłuż niej, pokazana z promieniem na każdym końcu), dopasowuje **jedną swobodną łatkę** do gładkiego, łagodnie zakrzywionego fragmentu i tnie każdą ścianę do konturu tej części skanu, z której pochodzi, więc otwory i narożniki pozostają. Opcje: **tolerancja** (jak daleko w mm punkt skanu może być od płaszczyzny lub walca i nadal do niego należeć oraz cel dla swobodnej łatki), **najmniejszy fragment** (udział w polu powierzchni) i **najwięcej ścian**. Ten sam skan i te same opcje zawsze dają te same ściany.

Wynikiem jest tabela, jeden wiersz na ścianę: jej rodzaj, z ilu trójkątów powstała i błąd **zmierzony od skanu do ściany** (rms, największy i udział punktów w tolerancji). Mierzone punkty to wierzchołki skanu i środki każdego trójkąta. Błędu nie mierzy się w drugą stronę (od ściany do skanu), więc ściana wykraczająca poza skan nie byłaby widoczna. Uwaga pod tabelą mówi też, jaka część powierzchni była za mała, by ją dopasować. W widoku punkty skanu są zabarwione według **mapy odchyleń**: niebieski na ścianie, zielony w połowie tolerancji, czerwony przy tolerancji lub powyżej (odznacz **Pokaż mapę odchyleń**, aby ją ukryć). Fragmenty zawijające się na siebie (na przykład zamknięta rurka dopasowana swobodnymi łatkami) są wymienione jako niedopasowane, nigdy nie wciskane na siłę w jedną powierzchnię.

**Zszyj powierzchnie w bryłę** zszywa każdą widoczną powierzchnię, która nie jest w bryle, w jedną zamkniętą bryłę. Ściany skanu stykają się tylko w granicach własnego błędu skanu, więc narzędzie próbuje najmniejszej odległości łączenia, która domyka (nigdy więcej niż ustawiona **odległość zszywania**), i odrzuca słowami, gdy ściany się nie domykają. Nigdy nie łata przerwy. Pudełko z zaokrąglonymi krawędziami zszywa się, gdy jego zaokrąglenia zostały znalezione jako osobne ściany; odległość łączenia, która się domknęła, jest podana w wyniku. Bryła działa wtedy z Sumą, Odejmij, Częścią wspólną i **Wypal w części**.

Czego nie robi: **zaokrąglenie pierścieniowe** (torus) jest szukane tylko wokół osi walca lub stożka już znalezionego, a **zmienne zaokrąglenie** tylko wzdłuż dość prostej krawędzi (jej przekroje są cięte prostopadle do jednego kierunku); w innych miejscach wychodzą jako swobodne łatki, gdy są dość gładkie, i są pomijane w przeciwnym razie; sfery, stożki i zaokrąglenia są znajdowane losowym próbkowaniem, więc bardzo małe (kilka trójkątów) mogą zostać przeoczone; mapa odchyleń pokazuje odległość od skanu do ścian, a nie odwrotnie; bardzo duże skany (ponad 300 000 trójkątów) są tu odrzucane. Ściany pełnego obrotu walca są cięte wokół otworów, a szew umieszczany jest tam, gdzie nie ma otworu. Sprawdź każdą ścianę względem skanu, zanim na niej polegasz.

## Jeszcze nie zbudowano

Zaokrąglanie krawędzi spotykających się w narożniku zakrzywionych ścian albo o różnych promieniach (mieszanie wierzchołków), zaokrąglenie między ścianami, które się nie stykają, wewnętrzne zaokrąglenie kończące się na pochylonej lub zakrzywionej ścianie, operacje logiczne i zaokrąglenia liczone na powierzchniach bez trójkątów (tu silnik brył działa na trójkątach w granicach tolerancji, a każdy punkt jest potem przywracany na dokładne powierzchnie), wypalona bryła, która podąża za powierzchniami po ich zmianie, przycinanie powierzchni inną powierzchnią poza operacją logiczną, wypełnianie otworów o więcej niż czterech bokach, rzutowanie krzywych na powierzchnie.
