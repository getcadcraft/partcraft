---
title: Klawisze i mysz
summary: Każdy skrót klawiszowy i każde działanie myszą w PartCraft, pogrupowane według miejsca, w którym działają: wszędzie, kopiowanie i wklejanie, na części, w widoku 3D, w szkicu, w historii i w złożeniu.
keywords: klawiatura, skróty, skróty klawiszowe, klawisze, mysz, orbita, obrót, przesunięcie, powiększenie, kółko, prawy przycisk, cofnij, ponów, zapisz, otwórz, esc, usuń, alt strzałka, kopiuj, wklej, wytnij, duplikuj, zaznacz wszystko, środkowy przycisk
from: 3a59c3a3
---

Klawisze nie działają podczas wpisywania tekstu w polu w panelu, z wyjątkiem {{key:Mod+S}} i {{key:Mod+O}}, które działają zawsze. Klawisze liter działają bez modyfikatora.

Ogólne uwagi o klawiszach w przeglądarce oraz na klawiaturach bez klawiszy funkcyjnych: [Klawisze, myszy i gładziki](common:keys).

## Wszędzie

| Klawisz | Działanie |
|---|---|
| {{key:Mod+S}} | Zapisz część (w złożeniu: złożenie). Najpierw zamyka otwarty szkic |
| {{key:Mod+O}} | Otwórz plik części lub złożenia (najpierw pyta, jeśli są niezapisane zmiany) |
| {{key:Mod+Z}} | Cofnij |
| {{key:Mod+Y}} lub {{key:Mod+Shift+Z}} | Ponów |
| {{key:F1}} | Otwórz lub zamknij tę pomoc (także {{ui:Pomoc}} na pasku aplikacji). {{key:Esc}} też ją zamyka. Na wielu laptopach i klawiaturach Mac przytrzymaj Fn |
| {{key:Ctrl+Shift+F}} | Tryb ekranu: normalny, pełny ekran, pełny ekran z ukrytymi paskami. Również Control na Macu, nie ⌘ |
| {{key:Esc}} | Wyjdź z pełnego ekranu (gdy jest włączony) |
| {{key:Mod+,}} | Ustawienia, w tym karta PartCraft (zob. [Ustawienia PartCraft](topic:settings)) |

W polu liczbowym panelu {{key:Mod+Z}} to cofnięcie tekstu przez przeglądarkę. W polu liczbowym nad wymiarem szkicu cofa zmiany w PartCraft.

## Kopiowanie, wklejanie i duplikowanie

Działają na tym, w czym pracujesz: zaznaczonej geometrii w otwartym szkicu, zaznaczonym elemencie w historii albo zaznaczonej części w złożeniu. Szczegóły w [Kopiowanie, wklejanie i duplikowanie](topic:copy-paste).

| Klawisz | Działanie |
|---|---|
| {{key:Mod+C}} | Kopiuj zaznaczenie |
| {{key:Mod+X}} | Wytnij: kopiuj, a potem usuń |
| {{key:Mod+V}} | Wklej. W szkicu kopia podąża za wskaźnikiem: kliknij, gdzie ma trafić |
| {{key:Mod+Shift+V}} | Wklej w miejscu: te same współrzędne (w złożeniu: to samo miejsce) |
| {{key:Mod+D}} | Duplikuj: kopiuj i wklej w jednym kroku, schowek pozostaje bez zmian |
| {{key:Mod+A}} | Zaznacz wszystko (w szkicu) |
| {{key:Esc}} | Odznacz wszystko (i anuluj wklejanie, które podąża za wskaźnikiem) |

W polu liczbowym te klawisze kopiują i wklejają tekst jak zwykle. Zaznaczony tekst w panelu kopiuje przeglądarka.

## Na części (bez otwartego szkicu)

| Klawisz | Działanie |
|---|---|
| {{key:S}} | Szkic na wybranej płaszczyźnie lub płaskiej ścianie; gdy nic nie wybrano, miejsce wskaż kliknięciem |
| {{key:F}} | Dopasuj część do widoku |
| {{key:M}} | Zmierz, we wszystkich obszarach roboczych i w złożeniu; {{key:Esc}} czyści wybrane punkty, kolejne {{key:Esc}} zamyka narzędzie (zob. [Zmierz odległości, kąty i masę](topic:measure)) |
| {{key:X}} | Widok przekroju włączony lub wyłączony, we wszystkich obszarach roboczych i w złożeniu; {{key:Esc}} go zamyka (zob. [Zajrzyj do środka widokiem przekroju](topic:section-view)) |
| {{key:Delete}} | Usuń zaznaczony element (pyta, jeśli inne go używają) |
| {{key:0}} … {{key:9}}, {{key:.}} | Przy zaznaczonym elemencie: wpisz jego główną liczbę (głębokość wyciągnięcia, średnicę otworu, liczbę wzoru, promień zaokrąglenia …), a potem {{key:Enter}}. {{key:Esc}} zachowuje starą wartość |
| {{key:Backspace}} | Usuń zaznaczony element, gdy jakiś jest zaznaczony |
| {{key:Esc}} | Przestań wybierać płaszczyznę szkicu albo wyczyść zaznaczenie (w tym krawędzie lub ściany wybrane z {{key:Shift}}) |

## W widoku 3D

Najpierw kliknij w widok, aby miał fokus klawiatury.

| Klawisz | Działanie |
|---|---|
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Obróć widok o 15 stopni |
| {{key:Shift+Left}} i pozostałe strzałki | Przesuń |
| {{key:Plus}} lub {{key:=}} | Powiększ |
| {{key:Minus}} | Pomniejsz |

| Mysz | Działanie |
|---|---|
| Przeciągnij lewym przyciskiem | Obróć (orbituj) widok |
| Przeciągnij prawym lub środkowym przyciskiem | Przesuń |
| {{key:Shift}}, {{key:Ctrl}} lub ⌘ przytrzymane podczas przeciągania lewym przyciskiem | Przesuń |
| Obrót kółka | Powiększ przy wskaźniku (od siebie powiększa) |
| Gest dwoma palcami na gładziku | Obróć widok; z {{key:Shift}} przesuń. Szczypnięcie powiększa. Ustawiane przez **Przewijanie** w [ustawieniach PartCraft](topic:settings) |

Przy opcji **Obracanie widoku: Środkowy przycisk** w [ustawieniach PartCraft](topic:settings) środkowy przycisk obraca widok, {{key:Shift}} ze środkowym lub prawym przyciskiem przesuwa, a lewy przycisk tylko wskazuje.
| Kliknięcie | Wskaż ścianę (podświetla się w całości), krawędź lub płaszczyznę |
| {{key:Shift}}+kliknięcie krawędzi lub ściany | Zbierz kilka krawędzi lub ścian |
| Kliknięcie pustego miejsca | Wyczyść wskazanie |

## Podczas wskazywania krawędzi lub ścian do zaokrąglenia, fazki lub powłoki

| Klawisz lub mysz | Działanie |
|---|---|
| Kliknij krawędź lub ścianę | Dodaj ją, a jeśli już jest, usuń |
| {{key:Esc}} lub {{key:Enter}} | Zakończ wskazywanie (to samo co {{ui:Gotowe}}) |
| {{key:F}} | Dopasuj |
| Klawisze strzałek, gdy widok ma fokus | Obróć; z {{key:Shift}} przesuń |

## Na arkuszu rysunku

| Klawisz | Działanie |
|---|---|
| {{key:F}} | Dopasuj arkusz |
| {{key:Plus}} / {{key:Minus}} | Powiększ / pomniejsz (gdy arkusz ma fokus) |
| {{key:Shift+Left}} i pozostałe strzałki | Przesuń (gdy arkusz ma fokus) |
| {{key:Left}} {{key:Right}} {{key:Up}} {{key:Down}} | Przesuń wybrany symbol GD&T o 1 mm |
| {{key:Delete}} lub {{key:Backspace}} | Usuń wybrany symbol |
| {{key:Esc}} | Przestań umieszczać symbol; w przeciwnym razie odznacz; w przeciwnym razie wróć do modelu |

| Mysz | Działanie |
|---|---|
| Kliknięcie widoku, gdy wybrano Bazę, Ramkę, Wykończenie lub Detal | Umieść go tam (przyciąga do najbliższej linii) |
| Kliknij symbol | Zaznacz go |
| Przeciągnij symbol | Przesuń go (odnośnik trzyma swój punkt) |
| Obrót kółka | Powiększ przy wskaźniku |
| Przeciągnij prawym lub środkowym przyciskiem | Przesuń |

## W szkicu

| Klawisz | Działanie |
|---|---|
| {{key:L}} | Linia |
| {{key:R}} | Prostokąt |
| {{key:C}} | Okrąg |
| {{key:A}} | Łuk (środek, początek, koniec) |
| {{key:P}} | Punkt |
| {{key:N}} | Linia osiowa |
| {{key:F}} | Zaokrąglenie narożnika |
| {{key:D}} | Wymiar |
| {{key:B}} | Spline (punkty dopasowania) |
| {{key:T}} | Przytnij |
| {{key:E}} | Wydłuż |
| {{key:O}} | Odsunięcie ({{key:B}} podczas odsuwania: obie strony) |
| {{key:M}} | Lustro |
| {{key:S}} | Zaznacz |
| {{key:Q}} | Przełącz zaznaczone krzywe na konstrukcyjne i z powrotem |
| {{key:Enter}} | Zakończ łańcuch linii lub spline |
| {{key:Delete}} lub {{key:Backspace}} | Usuń zaznaczenie |
| {{key:Mod+A}} | Zaznacz wszystko w szkicu |
| {{key:Mod+C}} / {{key:Mod+X}} / {{key:Mod+V}} | Kopiuj, wytnij, wklej geometrię (wklejanie podąża za wskaźnikiem) |
| {{key:Mod+Shift+V}} | Wklej w tych samych współrzędnych |
| {{key:Mod+D}} | Duplikuj zaznaczenie i umieść je kliknięciem |
| {{key:Esc}} | Krok wstecz: anuluj pole liczbowe lub wklejanie, zakończ łańcuch linii, wróć do Zaznacz, wyczyść zaznaczenie, a potem zamknij szkic |

| Mysz | Działanie |
|---|---|
| Kliknięcie | Stawiaj punkty narzędziem rysowania; zaznaczaj narzędziem Zaznacz |
| {{key:Shift}}+kliknięcie | Dodaj do zaznaczenia lub usuń z niego ({{key:Ctrl}}+kliknięcie w Windows i Linux, ⌘+kliknięcie na Macu, działa tak samo) |
| Przeciągnięcie po pustym miejscu (Zaznacz) | Okno: zaznacza wszystko w całości wewnątrz |
| Przeciągnij punkt, linię lub krawędź okręgu (Zaznacz) | Przesuń go; relacje zostają |
| Przeciągnij liczbę wymiaru (Zaznacz) | Przesuń etykietę |
| Dwukrotne kliknięcie wymiaru | Zmień jego wartość |
| Dwukrotne kliknięcie lub kliknięcie prawym przy rysowaniu linii | Zakończ łańcuch |
| Przeciągnij prawym lub środkowym przyciskiem | Przesuń |
| Obrót kółka | Powiększ przy wskaźniku |

### W polu liczbowym

| Klawisz | Działanie |
|---|---|
| {{key:Enter}} | Zastosuj wartość |
| {{key:Esc}} | Zamknij bez zmian |

Kliknięcie poza pole także zastosowuje wartość.

## Na liście historii

| Klawisz | Działanie |
|---|---|
| {{key:Tab}} | Przejdź do listy |
| {{key:Up}} / {{key:Down}} | Przechodź między wierszami |
| {{key:Enter}} lub {{key:Space}} | Zaznacz wiersz |
| {{key:Alt+Up}} / {{key:Alt+Down}} | Przesuń zaznaczony element w górę lub w dół, o ile historia na to pozwala |
| {{key:F2}} | Zmień główną liczbę elementu w jego wierszu; {{key:Enter}} ją zatwierdza, {{key:Esc}} zachowuje starą |

| Mysz | Działanie |
|---|---|
| Kliknięcie | Zaznacz płaszczyznę lub element |
| Dwukrotne kliknięcie szkicu | Otwórz go |
| Dwukrotne kliknięcie liczby elementu | Zmień ją w wierszu |

## W złożeniu

| Klawisz | Działanie |
|---|---|
| {{key:J}} | Rozpocznij połączenie: potem kliknij płaską ścianę na każdej z dwóch części |
| {{key:F}} | Dopasuj |
| {{key:Esc}} | Anuluj rozpoczęte połączenie albo wyczyść zaznaczenie |
| {{key:Delete}} | Usuń zaznaczoną część lub połączenie |
| {{key:Backspace}} | Usuń zaznaczoną część lub połączenie |
| {{key:Mod+Z}} / {{key:Mod+Y}} | Cofnij i ponów na własnej liście złożenia |
| {{key:Mod+D}} | Duplikuj zaznaczoną część (ta sama część, obok pozostałych) |
| {{key:Mod+C}}, potem {{key:Mod+V}} lub {{key:Mod+Shift+V}} | Kopiuj część, wklej ją obok pozostałych albo w to samo miejsce |

Mysz w widoku: jak w widoku 3D powyżej. Kliknij część, aby ją zaznaczyć. Kliknij dwukrotnie część na liście, aby ją edytować.

## W obszarze roboczym Skrypt

| Klawisz | Działanie |
|---|---|
| {{key:F5}} | Uruchom skrypt (w edytorze, panelu lub widoku) |
| {{key:Mod+Enter}} | Uruchom zaznaczone wiersze albo wiersz, na którym jest kursor |
| {{key:Tab}} / {{key:Shift+Tab}} | Wcięcie / usunięcie wcięcia zaznaczonych wierszy. Aby wyjść z edytora klawiaturą, naciśnij {{key:Esc}}, a potem {{key:Tab}} |
| {{key:Mod+/}} | Zakomentuj zaznaczone wiersze lub przywróć je z komentarza |
| {{key:Mod+F}} / {{key:Mod+H}} | Szukaj / szukaj i zamień w skrypcie; {{key:Enter}} lub {{key:F3}} następne dopasowanie, {{key:Shift+Enter}} lub {{key:Shift+F3}} poprzednie, {{key:Esc}} zamyka |
| {{key:Mod+Shift+[}} / {{key:Mod+Shift+]}} | Zwiń / rozwiń blok, na którym jest kursor (funkcja, if, for, while … end) |
| {{key:Mod+Space}} | Lista uzupełnień dla wpisywanej nazwy (otwiera się też po dwóch literach); {{key:Up}} / {{key:Down}} wybierają, {{key:Enter}} lub {{key:Tab}} przyjmują, {{key:Esc}} zamyka |
| {{key:Enter}} w wierszu pod konsolą | Uruchom tę jedną instrukcję; {{key:Up}} i {{key:Down}} przywołują wcześniejsze |
| {{key:F}} | Dopasuj widok do tego, co pokazują skrypty |

Zob. [Pisanie i uruchamianie skryptów](topic:craftscript).

## Skróty, które może przejąć przeglądarka

- {{key:Mod+Y}} w Safari może otworzyć historię: do ponowienia użyj {{key:Mod+Shift+Z}}.
- {{key:Mod+D}} to klawisz zakładek przeglądarki: PartCraft przejmuje go, gdy aplikacja ma fokus, a podczas wpisywania w polu zostawia go w spokoju.
- {{key:F11}} oraz {{key:Mod+Plus}} / {{key:Mod+Minus}} to pełny ekran i powiększenie strony przeglądarki, a nie PartCraft. Do pełnego ekranu użyj {{key:Ctrl+Shift+F}}, a do powiększania modelu kółka myszy.
- Klawisze funkcyjne na wielu laptopach i Macach wymagają Fn: naciśnij Fn+{{key:F1}}, aby otworzyć pomoc, albo użyj przycisku {{ui:Pomoc}}.

Gesty dotykowe i gładzika: [Gładzik, dotyk i małe ekrany](topic:trackpad-and-touch).

## Gdzie znajduje się Przesunięcie

Przesunięcie jest w menu {{ui:Więcej}} w grupie {{ui:Elementy}} jako {{ui:Przesuń bryłę}}, w polu {{ui:Przesunięcie}}, gdzie wpisujesz ΔX, ΔY i ΔZ, oraz jako strzałki {{ui:Przeciągnij, aby przesunąć}} na części.
