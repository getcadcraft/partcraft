---
title: Sprawdzanie naprężeń i ugięcia (Symulacja)
summary: Wybierz materiał, utwierdź ściany, dodaj siły, ciśnienia lub ciężar własny części, rozwiąż i odczytaj na modelu naprężenie von Mises, przemieszczenie, współczynnik bezpieczeństwa, reakcje i częstości drgań własnych, wraz z tym, czego metoda może, a czego nie może wykazać.
keywords: symulacja, MES, FEA, analiza na żywo, aktualizuj podczas edycji, co pęknie najpierw, współczynnik obciążenia, nieliniowa, plastyczność, uplastycznienie, odkształcenie plastyczne, dwuliniowa, kontakt, para kontaktowa, kara, sklejone, kontakt bez tarcia, CalculiX, .inp, .frd, metoda elementów skończonych, naprężenie, odkształcenie, von Mises, przemieszczenie, ugięcie, współczynnik bezpieczeństwa, granica plastyczności, reakcja, obciążenie, siła, ciśnienie, grawitacja, ciężar własny, utwierdzenie, bez tarcia, podparcie, więz, materiał, stal, aluminium, tytan, ABS, PLA, nylon, częstość drgań własnych, modalna, drgania, siatka, rozmiar elementu, czworościan, czworościany, siatka czworościenna, woksel, jakość siatki, naprężenie główne, odkształcenie zastępcze, estymata błędu, zakrzywione ściany, otwory, zaokrąglenia, adaptacyjne, adaptacyjne zagęszczanie, automatyczne zagęszczanie, h-adaptacja, zbieżność, zbieżność siatki, dokładna powierzchnia, kula, stożek, torus, spline, swobodna
from: 6f2fdec1
---

Obszar roboczy Symulacja odpowiada na pytanie: „czy to się wygnie lub pęknie pod tym obciążeniem?” dla części, którą modelujesz. To **statyczne liniowe** badanie (małe ugięcia, materiał pozostaje sprężysty) albo badanie **częstości drgań własnych**, rozwiązywane na siatce kwadratowych czworościanów, która podąża za ścianami części (albo, jeśli wybierzesz, na siatce małych równych sześcianów). Działa na nazwanych ścianach, które jądro siatkowe nadaje części (zobacz [Jądro siatkowe](topic:solid-kernels)).

Wybierz **Symulacja** w polu **Obszar roboczy** po lewej stronie paska narzędzi. Twoja część się nie zmienia; badanie zapisuje się w pliku części, a każda zmiana w nim może być cofnięta.

## Ustawianie badania

1. Naciśnij **Nowe badanie** w prawym panelu.
2. Wybierz **Materiał**. Panel pokazuje jego sztywność (E), współczynnik Poissona, gęstość i granicę plastyczności. Wartości są typowymi danymi z podręczników; certyfikowane wartości Twojego dostawcy mogą być inne.
3. Wybierz **Siatkę**:
   - **Czworościenna (dokładna)**, domyślna: czworościany 10-węzłowe, których zewnętrzne ściany leżą na ścianach części, z zakrzywionymi krawędziami na otworach, zaokrągleniach i innych okrągłych ścianach. Węzły na płaskich, walcowych, stożkowych, sferycznych i toroidalnych ścianach, na ścianach obrotowych i wyciąganych oraz na swobodnych (B-spline) ścianach leżą na dokładnej powierzchni; każdy inny rodzaj ściany podąża za swoją siatką wyświetlania, a tabela wyników mówi, ile ścian tak zrobiło. Siatka zagęszcza się sama w pobliżu zakrzywionych ścian, cienkich ścianek i ostrych krawędzi.
   - **Sześciany wokselowe (szybka)**: część wypełniona równymi sześcianami. Szybka, ale zakrzywione ściany stają się schodkami. Badania zapisane przed wprowadzeniem siatki czworościennej zachowują tę siatkę.
4. Pozostaw **Rozmiar elementu** pusty, aby uzyskać automatyczny rozmiar (około 12 000 czworościanów lub 20 000 sześcianów), albo wpisz go w milimetrach. Panel pokazuje, ile elementów to daje, zanim dodane zostaną dokładniejsze miejsca. Dla czworościanów **Mniejsze elementy na zakrzywionych ścianach** (domyślnie włączone) zagęszcza otwory i zaokrąglenia, gdzie naprężenie zwykle osiąga szczyt.

### Automatyczne zagęszczanie

Dla czworościanów, badania statycznego lub wyboczenia (bez obciążenia cieplnego), badania częstości drgań własnych i ustalonego badania cieplnego dostępna jest opcja **Zagęszczaj automatycznie (adaptacyjnie)**. Zaznacz ją i ustaw:

- **Docelowy błąd (%)**: rozwiązywanie zatrzymuje się, gdy szacowany błąd spadnie poniżej tej wartości (na start 1 %).
- **Maks. liczba przebiegów**: najwięcej rozwiązań, jakie może wykonać (na start 5, najwyżej 10).

Każdy przebieg rozwiązuje, znajduje elementy o największym szacowanym błędzie, dzieli je (oraz tyle sąsiednich, ile potrzeba, by siatka pozostała spójna) i rozwiązuje ponownie. Nowe węzły na zakrzywionych ścianach trafiają na dokładną powierzchnię. Wyniki pokazują wówczas tabelę i wykres z liczbą elementów, niewiadomych, szacowanym błędem oraz szczytowym naprężeniem (lub temperaturą) i przemieszczeniem (lub strumieniem ciepła) dla każdego przebiegu, a także wiersz z powodem zatrzymania: osiągnięto cel, skończyły się przebiegi, następna siatka byłaby za duża, albo przebieg się nie powiódł (wtedy widzisz ostatni dobry przebieg).

Traktuj estymatę jako przybliżenie. Estymata (Zienkiewicza–Zhu; porównana z dokładnymi rozwiązaniami daje około 0,6 do 0,95 prawdziwego błędu) mierzy błąd dla **całej części**, więc szczyt naprężenia przy otworze lub zaokrągleniu zwykle jest nadal trochę niedokładny, gdy estymata wygląda na małą: w przypadku koncentracji naprężeń ustaw cel poniżej 1 % i obserwuj, jak szczyt się ustala z przebiegu na przebieg. W ostrym wewnętrznym narożniku albo na krawędzi utwierdzonej ściany prawdziwe naprężenie jest nieskończone, więc estymata nigdy tam nie dotrze: przebiegi po prostu się skończą.

**Częstości drgań własnych i wyboczenie.** Dla badania częstości drgań własnych estymata obejmuje każdy zamówiony tryb, każdy liczony tak samo; tabela i wykres śledzą pierwsze dwie częstości. Na części o samych płaskich ścianach częstość może z przebiegu na przebieg tylko maleć (każda siatka zawiera poprzednią); zakrzywione ściany również zbliżają się do swojego prawdziwego kształtu, co może przesunąć częstość nieco w którąkolwiek stronę. Dla wyboczenia estymata obejmuje naprężenie wstępne i tryby wyboczenia, a tabela śledzi współczynniki obciążenia. Sprawdzono na pręcie stalowym 100 × 10 × 10 mm: pierwsza częstość ustala się od 812,4 do 811,9 Hz w czterech przebiegach, czyli o 0,4 % poniżej Eulera–Bernoulliego (który pomija ścinanie), a współczynnik obciążenia słupa mieści się w 0,5 % od Eulera.

## Utwierdzenie i obciążenie

Każde badanie wymaga co najmniej jednego podparcia i, dla naprężeń, co najmniej jednego obciążenia.

1. Naciśnij {{ui:Utwierdzenie}} na pasku narzędzi. Nowe podparcie jest zaznaczone i czeka na ściany: kliknij ściany, które mają być nieruchome (kliknięcie ściany ponownie ją usuwa). Gdy skończysz, naciśnij **Gotowe** albo {{key:Esc}}. Niebieskie stożki oznaczają utwierdzone ściany.
2. Naciśnij {{ui:Siła}} i kliknij ściany, na które działa siła. W panelu wpisz **Siłę całkowitą** w niutonach i wybierz jej **Kierunek**: w ścianę albo wzdłuż osi. Siła jest rozdzielana na wybrane ściany proporcjonalnie do ich pola. Pomarańczowe strzałki ją pokazują.
3. Naciśnij {{ui:Ciśnienie}}, aby ustawić ciśnienie w MPa (N/mm²) wciskające się w wybrane ściany; ujemne ciśnienie ciągnie.

Więcej rodzajów znajduje się na liście **Dodaj** w panelu: **Ściana bez tarcia** (ściana może ślizgać się po sobie, ale nie odsuwać się od siebie; użyj jej dla płaszczyzn symetrii i gładkich podparć) oraz **Grawitacja** (ciężar własny części, 9,81 m/s², w wybranym kierunku).

Podparcie, które pozostawia część swobodną do ślizgania się lub obrotu, zostaje odrzucone z informacją, jaki ruch pozostał swobodny.

## Rozwiąż i odczytaj wyniki

Naciśnij {{ui:Rozwiąż}}. Obliczenia działają w tle; **Stop** je anuluje. Następnie:

- Część jest pokolorowana według **naprężenia von Mises**; w **Pokaż** wybierz **Przemieszczenie** lub **Współczynnik bezpieczeństwa**. Legenda podaje skalę.
- Wskaż część, aby odczytać wartości pod wskaźnikiem.
- Zaznacz **Kształt odkształcony**, aby zobaczyć część wygiętą (ruch jest powiększony przez **Skalę**; prawdziwy jest w tabeli).
- Tabela podaje największe naprężenie i miejsce, w którym występuje, największe przemieszczenie, najmniejszy **współczynnik bezpieczeństwa** (granica plastyczności ÷ naprężenie von Mises; poniżej 1 materiał się uplastycznia), przyłożone obciążenie i **reakcje** w podporach (równoważą obciążenie) oraz użytą siatkę.

Dla **częstości drgań własnych** wybierz ten **Typ**, ustaw liczbę **Postaci**, i rozwiąż. Każda postać pokazuje swoją częstość i kształt (kształty są skalowane do 1 przy największym ruchu).

Jeśli zmienisz część, wyniki są oznaczone jako nieaktualne: rozwiąż ponownie.

## Uplastycznienie i kontakt (badania nieliniowe)

Dwa kolejne typy badań wykraczają poza założenie, że materiał pozostaje sprężysty:

- **Nieliniowe (materiał się uplastycznia)** podąża za prostą linią materiału aż do granicy plastyczności, a potem za łagodniejszym nachyleniem (**Nachylenie po uplastycznieniu**, 1 % E, gdy pozostawisz puste). Obciążenie rośnie w **Kroki obciążenia**; krok, który się nie ustala, jest samodzielnie dzielony na pół. Wyniki dodają **Odkształcenie plastyczne** do wykresów i mówią, jaka część obciążenia została przeniesiona. Jeśli krok nadal się nie ustala, badanie zatrzymuje się na ostatnim dobrym kroku, a panel ⚠ Problemy wskazuje miejsce: część osiągnęła tam swoją wytrzymałość (zniszczenie), albo kroki są zbyt duże.
- **Kontakt między częściami** pozwala oddzielnym kawałkom części wzajemnie na siebie napierać. Dodaj **Parę kontaktową**, wskaż ściany strony A (ściany, które napierają) przyciskiem {{ui:Wskaż ściany}}, a następnie ściany strony B przyciskiem {{ui:Wskaż ściany strony B}}. Części **bez tarcia** napierają, ślizgają się i oddzielają; części **sklejone** pozostają przyklejone. Każda część jest siatkowana osobno, więc mała szczelina między nimi jest w porządku. Kontakt jest metodą kar: części lekko wnikają w siebie (**współczynnik kary** × E ÷ rozmiar elementu określa sztywność kontaktu). Tabela pokazuje największe wniknięcie, a panel Problemy ostrzega, gdy przekracza 1 % rozmiaru elementu: zwiększ współczynnik lub użyj mniejszych elementów.

Oba typy używają siatki czworościennej. Tarcie, duże poślizgi i duże obroty nie są tutaj rozwiązywane.

## Uruchamianie w CalculiX

**Eksport › zestaw CalculiX (.inp)** (lub {{ui:Zapisz zestaw CalculiX (.inp)}} w panelu) zapisuje badanie jako plik wejściowy dla CalculiX, osobnego programu, który instalujesz i uruchamiasz sam: ta sama siatka, materiał, podparcia, obciążenia i pary kontaktowe, w mm, N i MPa. Uruchom go, a następnie **Eksport › wyniki CalculiX (.frd)** odczyta jego plik wynikowy na tę samą siatkę i pokaże przemieszczenie (oraz naprężenie von Mises, jeśli plik zawiera naprężenia). Jeśli w międzyczasie zmieniłeś część lub rozmiar elementu, siatka nie jest ta sama i PartCraft to zgłasza: zapisz nowy zestaw.

## Jak bardzo można mu ufać

PartCraft sprawdza swój solwer względem wzorów ręcznych (ugięcie końca wspornika PL³/3EI w granicach 1 %, wydłużenie pręta PL/AE dokładnie, pierwsza częstość wspornika w granicach 3 %, naprężenie wokół otworu w płycie). Mimo to miej na uwadze te ograniczenia:

- **Siatka.** Dla czworościanów PartCraft sprawdza ugięcie i naprężenie gnące wspornika (w granicach 0,3 %), naprężenie przy otworze w płycie (Kt, w granicach około 1 %), grubościenną rurę pod ciśnieniem (Lamé, w granicach 0,3 %) oraz pierwszą częstość (w granicach 0,4 %). Tabela pokazuje **jakość siatki** (najmniejsze i największe kąty między ścianami elementów; poniżej około 10° element jest słaby) oraz **szacowany błąd naprężenia**: jeśli przekracza kilka procent, rozwiąż ponownie z mniejszym rozmiarem elementu albo pozwól na to **Zagęszczaniu automatycznemu**. Na płycie z otworem i pręcie z dwoma nacięciami krawędziowymi automatyczne zagęszczanie osiągnęło wartość w granicach 1 % od podręcznikowego Kt, przy około jednej szóstej niewiadomych, których wymagało zagęszczenie całej siatki. Dla sześcianów wokselowych otwór lub zaokrąglenie jest schodkiem o rozmiarze sześcianu, więc naprężenie tam jest przybliżone.
- **Ostre wewnętrzne narożniki i krawędzie utwierdzonych ścian nie mają prawdziwego szczytu naprężenia.** Wartość tam rośnie, im mniejsze stają się elementy. Odczytuj naprężenia nieco z dala od takich miejsc albo zaokrąglij narożnik w modelu.
- **Wyniki do odczytania.** Oprócz naprężenia von Mises, przemieszczenia i współczynnika bezpieczeństwa badanie czworościenne pokazuje **największe i najmniejsze naprężenie główne** (rozciąganie i ściskanie) oraz **odkształcenie zastępcze**. Zaznacz **Pokaż siatkę**, aby zobaczyć elementy.
- **Badania statyczne są liniowe i sprężyste.** Dla uplastyczniania i kontaktu użyj opisanych wyżej typów nieliniowych; duże ugięcia i zmęczenie nie są rozwiązywane. Ciepło, naprężenia termiczne i liniowe wyboczenie to osobne typy badań: zobacz [Ciepło, naprężenia termiczne i wyboczenie](topic:thermal-and-buckling).
- **Każdy materiał jest jednakowy we wszystkich kierunkach.** Plastiki z druku 3D są słabsze w poprzek warstw, często o jedną trzecią lub więcej.
- To wersja laboratoryjna: części, na których Ci zależy, sprawdź także innym sposobem.

## Aktualizuj podczas edycji (Live)

Zaznacz **Aktualizuj podczas edycji** w bloku Rozwiąż, a odpowiedzi Symulacji będą podążać za Twoimi zmianami. Zmień wymiar, obciążenie, materiał lub otoczenie, a od razu pojawi się **szybka odpowiedź**, obliczona na elementach cztery razy większych niż w badaniu; gdy zatrzymasz się na chwilę (około sekundy), własna **dokładna odpowiedź** badania zastępuje ją. Wyniki mówią, na którą patrzysz („Szybka odpowiedź” lub „Dokładna odpowiedź”) oraz rozmiar elementu. Szybka odpowiedź nadaje się do kierunku i wielkości: na stalowym wsporniku była w granicach 1 % dla ugięcia i około 4 % dla naprężenia względem dokładnej. Do liczb, których użyjesz, ufaj dokładnej. Badania statyczne, częstości drgań własnych, cieplne i wyboczenia działają w ten sposób; Live to ustawienie widoku i nie jest zapisywane w części. Rozwiązanie, które naciśniesz sam, pozostaje takie, aż do następnej zmiany.

## Sprawdź, co pęknie najpierw (Wytrzymałość)

Dla badania statycznego lub wyboczenia naciśnij **Co pęknie najpierw?** w bloku **Wytrzymałość**. PartCraft skaluje obciążenia badania (siły, ciśnienia i ciężar razem), aż część ulegnie, i wypisuje, od najgorszego: **współczynnik obciążenia do pierwszego uplastycznienia** (współczynnik na dzisiejszych obciążeniach, przy którym najwyższe naprężenie von Mises osiąga granicę plastyczności materiału; czerwony znacznik pokazuje, gdzie to się dzieje) oraz **współczynnik obciążenia do wyboczenia** dla tych samych podparć i obciążeń. Współczynnik 4,3 oznacza, że część wytrzyma 4,3 razy swoje obciążenie, zanim się uplastyczni; **współczynnik poniżej 1 oznacza, że już teraz ulega przy obecnym obciążeniu**, co pojawia się na liście Problemy jako błąd (najsłabsze ustalenie pokazywane jest jako uwaga, nawet gdy wszystko się trzyma). Współczynniki pochodzą z liniowego badania na czworościanach przy Twoim rozmiarze elementu, więc są tak dobre, jak to badanie: naprężenie przy utwierdzonej ścianie lub ostrym narożniku nie ma prawdziwego szczytu (zobacz wyżej), a współczynnik uplastycznienia będzie tam po stronie ostrożnej. Twój asystent może wykonać to samo sprawdzenie narzędziem `break_run`.

## Powiązane

- [Ciepło, naprężenia termiczne i wyboczenie](topic:thermal-and-buckling)
- [Wyhoduj kształt z obciążeń (Generatywne)](topic:generative-design)
- [Mierzenie odległości, kątów i masy](topic:measure)
- [Czego jeszcze nie zbudowano](topic:not-built-yet)
