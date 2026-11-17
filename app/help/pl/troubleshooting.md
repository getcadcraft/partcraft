---
title: Rozwiązywanie problemów
summary: Problemy, które możesz napotkać w PartCraft: od aplikacji, która się nie uruchamia, przez nieudane funkcje, szkice, które się nie rozwiązują, pliki, których nie da się otworzyć, po złącza zachowujące się źle; z komunikatem, który widzisz, i poprawką.
keywords: problem, błąd, pomoc, nie działa, nie udaje się, awaria, pusty ekran, webgl, webassembly, jądro, nie zbudowane, nadmiernie określony, otwarty profil, nie można otworzyć, nic się nie dzieje, zły kierunek, wolno
from: 7728542c
---

Gdy coś nie działa, najpierw przeczytaj **pasek stanu** na dole: PartCraft mówi tam, dlaczego coś odrzucił albo czego oczekuje dalej. Nieudana funkcja pokazuje też swój komunikat na górze prawego panelu oraz po najechaniu na jej wiersz w historii.

## Aplikacja się nie uruchamia

### „Ta przeglądarka nie może pokazać 3D (WebGL jest wyłączony lub go brak), więc PartCraft nie może tu działać.”

**Przyczyna:** w przeglądarce grafika 3D (WebGL) jest wyłączona, zablokowana albo nieobsługiwana przez sterownik karty graficznej.

**Rozwiązanie:**

:::chromium
Otwórz `chrome://settings/system` (lub `edge://settings/system` w Edge) i włącz „Użyj przyspieszenia sprzętowego, gdy jest dostępne”, a potem uruchom przeglądarkę ponownie. Jeśli to już jest włączone, sprawdź stan WebGL w `chrome://gpu` i zaktualizuj sterownik karty graficznej.
:::

:::firefox
Otwórz `about:support` i sprawdź Grafika, WebGL. Jeśli jest zablokowane, zaktualizuj sterownik karty graficznej. W `about:config` `webgl.disabled` musi mieć wartość `false`.
:::

:::safari
WebGL jest zawsze włączony w aktualnym Safari. Zaktualizuj macOS (Safari aktualizuje się razem z nim). Jeśli nadal się nie udaje, spróbuj Chrome lub Firefox na tym samym Macu, aby wykluczyć sprzęt graficzny.
:::

Zdalne pulpity i niektóre maszyny wirtualne nie mają WebGL. Spróbuj na samym komputerze.

### „Jądro bryłowe nie załadowało się: …”

**Przyczyna:** jądro geometrii (program WebAssembly) nie mogło zostać pobrane albo uruchomione. Zwykle połączenie zostało przerwane podczas ładowania aplikacji, WebAssembly jest wyłączone przez politykę firmy lub ustawienie zabezpieczeń przeglądarki, albo przeglądarka jest bardzo stara.

**Rozwiązanie:** przeładuj stronę, będąc online. Jeśli nadal się nie udaje, spróbuj innej aktualnej przeglądarki. W Firefox `javascript.options.wasm` w `about:config` musi mieć wartość `true`. Offline aplikacja i jej jądro ładują się tylko wtedy, gdy pasek aplikacji pokazywał **Gotowe do pracy offline**, zanim straciłeś połączenie ({{ui:Zapisz do pracy offline}} będąc online; zob. [Praca offline](common:offline)).

### Przycisk offline mówi „Nie udało się zapisać” lub „Offline niedostępne”

**Nie udało się zapisać**: niektóre pliki się nie pobrały. Kliknij, aby spróbować ponownie, będąc online; wolne lub limitowane połączenie może wymagać drugiej próby. **Offline niedostępne**: to okno przeglądarki nie może zachować kopii offline (okna prywatne i niektóre zarządzane komputery to blokują). Użyj zwykłego okna albo zostaw kartę otwartą.

### PartCraft jest offline, ale nieaktualny

Kliknij **Gotowe do pracy offline**, będąc online, i wybierz {{ui:Zapisz ponownie (pobierz najnowszą wersję)}}.

### „<Name>: jeszcze nie zbudowano. Wymaga dokładnego jądra …”

Pełny komunikat brzmi: „<Name>: jeszcze nie zbudowano. Wymaga dokładnego jądra, którego ta wersja PartCraft nie ma. Pomoc › Co jeszcze nie jest zbudowane mówi, co zrobić zamiast tego.” Widzisz go, gdy wybierzesz Przeciągnięcie, Loft, Żebro, kołnierz blachy, element powierzchniowy, Połącz, Przesuń bryłę, Skaluj bryłę lub Wzorzec ścieżki, a także przy innych rzeczach, które wymagają tylko dokładnego jądra. Nic złego nie dzieje się z przeglądarką ani z częścią: ta wersja PartCraft buduje każdą część jądrem siatkowym. Zob. [Co jeszcze nie jest zbudowane](topic:not-built-yet) oraz [Jądro siatkowe](topic:solid-kernels).

### „Ładowanie jądra bryłowego…” nigdy nie znika

Poczekaj chwilę na wolnym połączeniu: jądro i biblioteka 3D pobierają się przy pierwszym uruchomieniu. Potem przeładuj stronę. Jeśli sama strona pokazuje błąd, zob. wyżej.

## Nic się nie dzieje, gdy naciskam klawisz

- Klawisze nie działają, gdy kursor jest w polu w panelu. Kliknij w widok 3D albo naciśnij {{key:Esc}} po wpisaniu (lub {{key:Tab}}, aby wyjść z pola).
- Klawisze strzałek i {{key:Plus}}/{{key:Minus}} obracają i powiększają widok dopiero po kliknięciu w widok.
- Okno dialogowe jest otwarte: najpierw na nie odpowiedz.
- W szkicu {{key:F}} to narzędzie Zaokrąglenie, a nie Dopasuj. Użyj przycisku {{ui:Dopasuj}}.

## Przycisk na pasku narzędzi jest wyszarzony

- Przyciski funkcji są wyszarzone, gdy szkic jest otwarty. Najpierw zamknij szkic.
- Narzędzia szkicu działają tylko w szkicu.
- {{ui:Cofnij}} i {{ui:Ponów}} są wyszarzone, gdy nie ma czego cofnąć lub ponowić.
- {{ui:Złożenie}} wymaga części z bryłą. {{ui:Połączenie}} wymaga dwóch części w złożeniu. {{ui:Edytuj część}} wymaga zaznaczonej części.
- {{ui:STEP AP242 (dokładna bryła)}} i {{ui:STEP AP214 (dokładna bryła)}} są wyszarzone w złożeniu: wyeksportuj każdą część osobno. Jeśli inny program odrzuca dokładny plik, spróbuj {{ui:STEP AP214 (dokładna bryła)}}, potem {{ui:STEP (ścianki, jądro siatkowe)}}, i daj nam znać przez {{ui:Pomoc}} › {{ui:Zgłoś problem}}.
- {{ui:Przeciągnięcie}}, {{ui:Loft}} i inne funkcje wymagające dokładnego jądra nie są wyszarzone: pozostają klikalne, ich podpowiedzi kończą się na „jeszcze nie zbudowano (wymaga dokładnego jądra)”, a kliknięcie mówi to w pasku stanu. Zob. [Co jeszcze nie jest zbudowane](topic:not-built-yet).
- {{ui:Rysunek}} wymaga części z bryłą i jest wyszarzony, gdy szkic jest otwarty.
- Pozycje {{ui:Eksport}} są wyszarzone w złożeniu: złożenia nie da się jeszcze eksportować. Zamknij je albo edytuj część, aby eksportować.

## Problemy ze szkicem

### Szkic nie pozwala dodać relacji

„Żadna relacja nie pasuje do tego zaznaczenia. Zaznacz jeden lub dwa elementy (Shift+kliknięcie dodaje).” Relacja wymaga innego zaznaczenia. Zob. [Relacje i wymiary szkicu](topic:sketch-relations), czego wymaga każda z nich.

### „Nadmiernie określony: … nie mogą być spełnione jednocześnie. Cofnij albo usuń jeden z nich.”

**Przyczyna:** nowa relacja lub wymiar przeczy tym, które już są. Szkic się nie przesunął.

**Rozwiązanie:** {{key:Mod+Z}} albo usuń jeden z czerwonych elementów na liście w prawym panelu (wybierz **Usuń** obok niego).

### „Nadmiernie określony: … jest już wynikające. Usuń to.”

**Przyczyna:** relacja nic nie dodaje: inne już ją wymuszają (na przykład Równoległość na dwóch bokach prostokąta albo wymiar, który już jest ustalony). W tej wersji nie ma wymiarów sterowanych.

**Rozwiązanie:** usuń ją. Element i tak się zbuduje, z ostrzeżeniem.

### „Tych elementów nie da się wymiarować razem.”

Kliknąłeś na przykład punkt i okrąg. Wymiaruj do punktu środkowego okręgu.

### „Zaokrąglenie wymaga narożnika, w którym spotykają się dokładnie dwie linie.” / „Ten promień jest za duży dla tych linii.”

Kliknij dokładnie punkt narożnika dwóch litych linii. Użyj promienia mniejszego niż pozwala krótsza linia.

### Geometria odskakuje, gdy ją przeciągam

Przeciągnięcie złamałoby relację lub wymiar, więc PartCraft ją przywraca. Ruszać się może tylko geometria niebieska (niedookreślona).

### „Ten szkic nie może się otworzyć: wymaga Extrude2, który się nie udaje.”

Szkic leży na ścianie elementu, który nie jest zbudowany. Najpierw napraw ten element, odblokuj go albo przewiń historię do przodu.

## Problemy z elementami

| Komunikat | Przyczyna | Rozwiązanie |
|---|---|---|
| „Najpierw zrób szkic: wybierz płaszczyznę, Szkic, narysuj zamknięty profil, Wyjdź.” | Brak nieużytego szkicu z krzywymi i żaden nie jest zaznaczony | Narysuj szkic albo zaznacz szkic do użycia w historii |
| „Szkic nie ma zamkniętego profilu do wyciągnięcia.” (lub „do obrotu”) | Brak zamkniętej pętli z litych linii | Zamknij przerwy; przywróć linie konstrukcyjne klawiszem {{key:Q}} |
| „Profil jest otwarty: koniec w (x, y) nie jest połączony z niczym.” | Przerwa w tym punkcie | Otwórz szkic i przeciągnij koniec na sąsiada, aby się przyciągnął |
| „Profil rozgałęzia się w (x, y): więcej niż dwa końce się spotykają.” | Trzy lub więcej linii spotyka się w jednym punkcie | Usuń dodatkową linię albo zmień ją na konstrukcyjną |
| „Zamknięta pętla wymaga co najmniej trzech boków lub krzywej.” | Dwie linie wracające tam i z powrotem | Narysuj pętlę od nowa |
| „Przez wszystko dotyczy wycięć. Użyj głębokości dla wypustu.” | Wypust ustawiony na Przez wszystko | Ustaw Koniec na Ślepy lub Płaszczyzna środkowa |
| „Nie ma nic do wycięcia po tej stronie szkicu. Spróbuj drugiego kierunku.” | Wycięcie wskazuje od materiału | Zaznacz Odwróć kierunek |
| „Nie ma jeszcze nic do wycięcia.” / „Nie ma jeszcze nic do wywiercenia.” | Brak bryły przed tym elementem | Najpierw zrób wypust albo przesuń element niżej |
| „Narysuj oś (linię konstrukcyjną) w szkicu, wokół której obrócić.” | Obrót bez osi | Dodaj oś środkową albo wybierz linię w Osi |
| „Profil przecina oś. Trzymaj go po jednej stronie osi środkowej.” | Profil po obu stronach osi | Narysuj od nowa połowę profilu |
| „Umieść punkty szkicu tam, gdzie mają być otwory (narzędzie Punkt), potem wykonaj otwór.” | Brak luźnych punktów w szkicu | Dodaj punkty klawiszem {{key:P}} |
| „Pogłębienie musi być szersze niż otwór.” | Średnica pogłębienia nie jest większa od Średnicy | Zrób pogłębienie szersze |
| „Pogłębienie musi być płytsze niż otwór.” | Pogłębienie głębsze niż otwór ślepy | Zrób je płytsze albo otwór głębszy |
| „Wybierz elementy do skopiowania.” | Wzorzec lub lustro bez zaznaczenia | Zaznacz element w Elementy do skopiowania |
| „Extrude2 nie ma bryły do skopiowania.” | Skopiowany element się nie udał albo jest wyłączony | Napraw go albo odblokuj |
| „Wymaga Sketch3, który się nie udaje.” | Element, od którego zależy, nie jest zbudowany | Napraw element wymieniony w komunikacie |
| „Ściana, na której leży, zniknęła (Extrude1 nie jest zbudowany).” | Ściana szkicu już nie istnieje | Napraw ten element albo usuń szkic i narysuj go ponownie |
| „Po tym nic nie zostało z części.” | Wycięcie usunęło cały materiał | Sprawdź rozmiar i kierunek wycięcia |
| „Jądro bryłowe nie mogło zbudować tego (…).” lub „Jądro bryłowe nie mogło połączyć tego z bryłą.” | Jądro odrzuciło geometrię | Cofnij albo nieznacznie zmień rozmiary; ściany dokładnie stykające się mogą to powodować |
| „Przeciągnięcie: jeszcze nie zbudowano. Wymaga dokładnego jądra, którego ta wersja PartCraft nie ma.” (także Loft, Żebro i inne) | Element zrobiony we wcześniejszej wersji, który buduje tylko dokładne jądro. Zostaje w historii i jest zapisywany bez zmian | Wyłącz go albo usuń; zob. [Co jeszcze nie jest zbudowane](topic:not-built-yet), co zrobić zamiast tego |
| „5 mm zaokrąglenie tu nie pasuje (…).” / „Fazka 2 mm …” | Rozmiar jest za duży dla ściany obok krawędzi albo narożnik nie może być wygładzony | Mniejszy rozmiar albo mniej krawędzi w elemencie |
| „Zaokrąglenie: w tej wersji tylko proste krawędzie między dwiema płaskimi ścianami (buduje je jądro siatkowe). Zaokrąglaj lub ścinaj zakrzywione krawędzie w szkicu.” (także Fazka) | Wybrana krawędź jest zaokrąglona, jak krawędź otworu, albo leży na zakrzywionej ścianie | {{ui:Wskaż krawędzie}} i usuń ją; zamiast tego zaokrąglij lub zetnij ten narożnik w szkicu |
| „Zaokrąglenie, którego promień zmienia się wzdłuż krawędzi: jeszcze nie zbudowano (wymaga dokładnego jądra). Podaj jeden promień.” | Zaznaczono **Zmienny promień** | Odznacz go i podaj jeden promień |
| „Zaokrąglenie jądrem siatkowym: tam, gdzie zaokrąglone krawędzie się spotykają, są ścinane na ukos, a nie wygładzane.” (⚠, ostrzeżenie) | Wybrane krawędzie spotykają się w narożniku; zaokrąglenia tworzą tam ostre załamanie | Nic do naprawy: część jest zbudowana. Zaokrąglij mniej krawędzi, jeśli załamanie ma znaczenie |
| „Krawędź, którą zaokrągla, zniknęła: krawędź między Extrude1 a Cut2.” | Wcześniejsza zmiana usunęła krawędź | {{ui:Wskaż krawędzie}}, usuń czerwoną krawędź i wskaż nową |
| „Wskaż krawędzie w widoku, a potem je dodaj.” | Zaokrąglenie lub fazka nie ma krawędzi | {{ui:Wskaż krawędzie}} |
| „Wskaż ściany do usunięcia (otwarte), potem powłoka.” | Powłoka nie ma otwartych ścian | {{ui:Wskaż ściany}} |
| „Powłoki nie dało się zrobić przy tej grubości (…).” | Ścianka jest grubsza niż cienka część modelu albo promień zaokrąglenia | Cieńsza ścianka albo większe zaokrąglenia |
| „Powłoka: w tej wersji otwiera tylko płaskie ściany (buduje je jądro siatkowe).” | Otwierana ściana jest zakrzywiona | {{ui:Wskaż ściany}} i usuń ją; otwieraj tylko płaskie ściany |
| „Pochylenie: w tej wersji tylko płaskie ściany (buduje je jądro siatkowe).” | Pochylana ściana to walec, stożek lub ściana swobodna | Usuń ją; pochylaj tylko płaskie ściany |
| „Ściana, którą otwiera, zniknęła (…).” | Wcześniejsza zmiana usunęła ścianę | Ponownie {{ui:Wskaż ściany}} |
| „Zaokrąglenie1 zmienia krawędzie lub ścianki bryły; nie może być skopiowane. …” | Wzorzec lub lustro kopiuje zaokrąglenie, fazkę lub powłokę | Odznacz je; najpierw powtórz wycięcia, potem zaokrąglij |
| „Ten element leży na ścianie, którą może znaleźć tylko dokładne jądro: w tej wersji jeszcze nie zbudowano.” | Szkic na ścianie, której jądro siatkowe nie znajduje, na przykład takiej z wcześniejszej wersji | Szkicuj na płaszczyźnie bazowej lub płaskiej ścianie wyciągnięcia i ustaw wymiarami |
| „Używa ściany lub krawędzi bryły, którą może znaleźć tylko dokładne jądro: w tej wersji jeszcze nie zbudowano.” | Płaszczyzna, oś lub punkt odniesienia na ścianie albo krawędzi bryły | Zrób je z płaszczyzn bazowych, punktów szkicu lub współrzędnych |
| „Wyciąganie do ściany, następnej ściany lub wierzchołka: jeszcze nie zbudowano (wymaga dokładnego jądra).” / „Zwężenie: jeszcze nie zbudowano (wymaga dokładnego jądra).” | Warunek końca lub zwężenie, które buduje tylko dokładne jądro | Użyj głębokości Ślepej lub Płaszczyzny środkowej, którą zmierzysz; zostaw Zwężenie na 0 |

## Problemy z wyborem

- „Ta ściana jest zakrzywiona. Wskaż płaską ścianę lub płaszczyznę do szkicowania.” Szkice wymagają płaskiej ściany. Szkicuj na płaszczyźnie bazowej i ustaw szkic wymiarami.
- Ściana oznaczona „Ustalona w miejscu wskazania” nie została zrobiona przez krawędź szkicu (na przykład ściana kopii wzorca), więc szkic na niej zostaje na miejscu, gdy część się zmienia.
- Krawędzie trudno trafić: przybliż widok. Krawędź wygrywa z sąsiednią ścianą, gdy wskaźnik jest dokładnie na niej.

## Problemy z plikami

| Komunikat | Rozwiązanie |
|---|---|
| „PartCraft otwiera własne pliki .partcraft.json, eksporty z makra CadCraft dla SolidWorks (.cadcraft-sw.json) i pliki STEP. ‚bracket.igs’ nie jest żadnym z nich.” | Rozpoznawane są tylko te pliki (oraz siatki STL, OBJ i 3MF oraz pliki `.3dm`) |
| „‚part.stp’ nie jest plikiem STEP (nie zaczyna się od ISO-10303-21).” | Plik nie jest tekstem STEP |
| „Ten plik STEP jest za duży (ponad 60 MB), aby go tu zaimportować.” | Uprość go u źródła |
| „Ten plik jest za duży, aby być częścią PartCraft.” w twojej zapisanej części | Duży bryłowy STEP zaimportowany we wcześniejszej wersji sprawił, że plik części ma ponad 50 MB. Użyj wcześniejszej kopii bez niego |
| „Ten plik jest za duży, aby być częścią PartCraft.” | Plik ma ponad 50 MB; nie jest plikiem PartCraft |
| „To nie jest plik PartCraft (nie jest JSON).” / „To nie jest plik PartCraft.” | Plik jest uszkodzony albo należy do innego programu |
| „Ten plik zapisał nowszy PartCraft (wersja pliku …); ta wersja czyta wersję …” | Otwórz go w nowszym PartCraft |
| „Extrude2: głębokość jest błędna.” (lub inna wartość) | Plik został edytowany ręcznie albo uszkodzony. Użyj wcześniejszej kopii |
| Wstawienie w złożeniu mówi „Part1.partcraft.json nie ma bryły do wstawienia.” | Plik części nie ma bryły. Otwórz go, zbuduj bryłę, zapisz i wstaw ponownie |

**Mój zapisany plik nie jest tam, gdzie się spodziewałem.** Zapis to pobieranie: szukaj w folderze pobranych plików przeglądarki albo otwórz listę pobranych z paska narzędzi przeglądarki. Zob. [Gdzie trafiają twoje pliki](common:your-files).

**Otworzyłem część, ale złożenie nadal jest na ekranie.** Część załadowała się za złożeniem. Wybierz {{ui:Zamknij}}, aby zamknąć złożenie i zobaczyć część. Zamykaj złożenia przed otwarciem plików części.

## Problemy z rysunkiem

| Komunikat | Rozwiązanie |
|---|---|
| „Najpierw zbuduj bryłę, potem zrób jej rysunek.” | Najpierw zbuduj część |
| „Brak miejsca na arkuszu dla: detal. Zrób detal mniejszy albo usuń widok.” | Mniejszy **Promień detalu** lub **Skala detalu**, albo usuń przekrój |
| „Detal jest pobierany z widoku z przodu, z góry, z prawej lub z przekroju.” | Kliknij jeden z tych widoków |
| „Kliknij jeden z widoków.” | Kliknięcie było na pustej kartce |
| „Położenie wymaga co najmniej jednego odniesienia bazowego.” i inne komunikaty ramki | Ustaw bazy, o które prosi panel, albo wybierz inną charakterystykę |
| „Nie udało się wykonać widoków rysunku: …” | Cofnij ostatnią zmianę. Jeśli to się powtarza, zapisz, przeładuj i otwórz część ponownie |

## Problemy ze złożeniem

| Komunikat | Rozwiązanie |
|---|---|
| „Najpierw zbuduj bryłę, potem wstaw ją do złożenia.” | Część nie ma jeszcze bryły |
| „Najpierw wstaw drugą część (Dodaj kopię, Wstaw albo Edycja › Duplikuj).” | Połączenie wymaga dwóch części |
| „Wskaż ścianę na innej części.” | Obie ściany połączenia muszą być na różnych częściach |
| „Ta ściana jest zakrzywiona. Wskaż płaską ścianę …” | Połączenia zaczynają się od płaskich ścian. Potem użyj **Wyśrodkuj na** dla osi otworu lub obrotu |
| „Bracket2 nie jest połączony z częścią zakotwiczoną, więc zostaje tam, gdzie go postawiono.” | Dodaj połączenie od niego do części, która jest ustawiona |
| „Revolute3 zamyka pętlę, której nie da się zamknąć: jest niedokładna o 2.000 mm. Sprawdź ściany, odsunięcia i ograniczenia połączeń pętli.” | Części nie mogą się wszystkie spotkać: sprawdź długości, ściany, których używa każde połączenie, odsunięcia (części ułożone ścianą do ściany muszą się zgadzać głębokością) i ograniczenia; albo usuń jedno połączenie z pętli |
| „Ściana, której używa to połączenie, zniknęła z Bracket.” / „Oś, której używa to połączenie, zniknęła z Bracket.” | Część została edytowana. Usuń połączenie i zrób je ponownie |
| „Oś biegnie wzdłuż ściany, więc nie może ustawić środka połączenia.” | Wybierz oś, która przecina ścianę, albo „Początek układu ściany” |
| „Złożenie zachowuje co najmniej jedną część. Zamknij je zamiast tego.” | Użyj {{ui:Zamknij}} |

**Części są połączone, ale w złym miejscu.** Ustaw **Wyśrodkuj na** dla obu stron połączenia na otwory lub osie obrotu, które mają się zgadzać, a potem dostosuj **Kąt (°)** i **Odsunięcie (mm)**.

## Działa wolno

- Ustaw **Krzywe** na Normalne lub Zgrubne podczas modelowania; przed eksportem przełącz na Dokładne.
- Duże liczby kopii wzorca (setki kopii) długo się przebudowują przy każdej zmianie. Wyłącz wzorzec, gdy pracujesz nad innymi elementami.
- Sprawdzanie kolizji i sprawdzanie ruchu porównują każdą parę części; duże złożenia zajmują więcej czasu.
- Zamknij inne ciężkie karty. PartCraft działa na procesorze i grafice twojego komputera.

## Nadal masz problem

Najpierw zapisz plik ({{key:Mod+S}}), potem przeładuj stronę i otwórz go ponownie. Jeśli element nadal się nie udaje, zaznacz go, przeczytaj jego komunikat i spróbuj {{key:Mod+Z}}, aby wrócić do ostatniego dobrego stanu.
