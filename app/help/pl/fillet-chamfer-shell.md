---
title: Zaokrąglanie, fazkowanie i wydrążanie przez Zaokrąglenie, Fazkę i Powłokę
summary: Wskaż krawędzie i dodaj zaokrąglenia o stałym lub zmiennym promieniu oraz fazki o równej odległości, dwóch odległościach lub odległości i kącie, wydrąż część za pomocą Powłoki, wskazując ściany do otwarcia, zmień, z których krawędzi lub ścian korzysta element, i napraw typowe błędy.
keywords: zaokrąglenie, zaokrąglij, wtopienie, fazka, sfazuj, powłoka, wydrążenie, grubość ścianki, krawędzie, ściany, wskaż krawędzie, shift kliknięcie, otwarta ściana, dokładne jądro, jądro siatkowe, nie zbudowano
from: e41c1c12
---

:::note
**W tej wersji** PartCraft buduje zaokrąglenia i fazki jądrem siatkowym, wyłącznie na **prostych krawędziach między dwiema płaskimi ścianami**: krawędzie brył prostopadłościennych oraz proste krawędzie wyciągnięć i wycięć, narożniki zewnętrzne lub wewnętrzne (wewnętrzny narożnik dostaje dodany materiał). Okrągłe krawędzie, takie jak krawędzie otworów, oraz promień zmieniający się wzdłuż krawędzi nie są jeszcze zbudowane. Tam, gdzie dwie zaokrąglone krawędzie stykają się w narożniku, zaokrąglenia są ścięte na ukos (spotykają się w ostrym zagłębieniu), a nie wtopione. **Powłoka** też działa, zbudowana przez jądro siatkowe: otwiera wyłącznie płaskie ściany, powłoki o różnych grubościach ścianek nie są jeszcze zbudowane, a na częściach z wieloma okrągłymi ścianami działa wolno. Zob. [Czego jeszcze nie zbudowano](topic:not-built-yet).
:::

{{ui:Zaokrąglenie}} zaokrągla krawędzie, {{ui:Fazka}} je fazuje, a {{ui:Powłoka}} wydrąża część. Wszystkie trzy działają na krawędziach i ścianach bryły i są budowane przez jądro siatkowe. Ich zaokrąglenia są jak każda okrągła ściana zbudowane z ścianek (**Krzywe** określa, jak drobno); okrągłe ściany są walcami, które można wskazać i zmierzyć (zob. [Jądro siatkowe](topic:solid-kernels)).

## Zaokrąglanie lub fazkowanie krawędzi

### Najpierw wskaż krawędzie

1. Kliknij krawędź części. Cała krawędź się podświetli, a prawy panel pokaże **Krawędź**: jej rodzaj (Prosta, Okrąg lub łuk, Krzywa), długość i ściany, między którymi leży.
2. Aby dodać więcej krawędzi, kliknij je z {{key:Shift}}. Każda jest oznaczona; kliknij oznaczoną krawędź z {{key:Shift}}, aby ją usunąć. Nagłówek panelu liczy je („4 krawędzie”), a pasek stanu mówi: „Wskazano 4 krawędzie. Zaokrąglenie lub Fazka je zaokrągla; Shift+kliknięcie wskazuje więcej, Esc czyści.”
3. Wybierz {{ui:Zaokrąglenie}} lub {{ui:Fazka}} na pasku narzędzi albo te same przyciski w prawym panelu.

Element jest dodawany ze wszystkimi wskazanymi krawędziami: zaokrąglenie 2 mm albo fazka 1 mm. Pasek stanu mówi na przykład: „Dodano Fillet1 (4 krawędzie). Zmień jego rozmiar po prawej; Wskaż krawędzie zmienia, które.”

### Albo najpierw dodaj element

1. Bez wskazanych krawędzi wybierz {{ui:Zaokrąglenie}} lub {{ui:Fazka}}.
2. PartCraft przechodzi do wskazywania: nagłówek prawego panelu pokazuje „Fillet1: wskazywanie”, część pokazuje się tak, jak przed zaokrągleniem (panel to podaje), a pasek narzędzi pokazuje {{ui:Gotowe}}.
3. Kliknij każdą krawędź, aby ją dodać; kliknij ją ponownie, aby ją usunąć. Pasek stanu je liczy.
4. Wybierz {{ui:Gotowe}} (albo {{ui:Zakończ wskazywanie}} w panelu) albo naciśnij {{key:Esc}} lub {{key:Enter}}.

### Ustawienia

| Ustawienie | Zaokrąglenie | Fazka |
|---|---|---|
| Rozmiar | **Promień (mm)**, domyślnie 2 | **Odległość (mm)** od krawędzi na obu ścianach, domyślnie 1 |
| **Krawędzie** | Ile | Ile |

Lista poniżej nazywa każdą krawędź przez dwie łączone ściany, na przykład „Krawędź 1: Extrude1 end face × Extrude1 side”. **Usuń** usuwa jedną. {{ui:Wskaż krawędzie}} wraca do wskazywania. Dwukrotne kliknięcie elementu w historii robi to samo.

Krawędzie są zapamiętywane przez dwie łączone ściany, więc pozostają na właściwej krawędzi, gdy zmienisz wymiar wcześniej w historii.

### Zmienne zaokrąglenia i typy fazek

- **Zmienny promień** (zaokrąglenie): w tej wersji jeszcze nie zbudowano („Zaokrąglenie, którego promień zmienia się wzdłuż krawędzi: jeszcze nie zbudowano (wymaga dokładnego jądra). Podaj jeden promień.”). Przy dokładnym jądrze zaznacz go i ustaw **Promień końcowy (mm)**. Promień zmienia się liniowo od **Promienia** na jednym końcu każdej krawędzi do **Promienia końcowego** na drugim; **Zamień końce** odwraca go.
- **Typ** (fazka): **Równa odległość**, **Dwie odległości** (**Druga odległość** na drugiej ścianie) albo **Odległość i kąt** (odległość na jednej ścianie, skos pod **Kątem (°)** do tej ściany). **Zamień strony** przenosi pierwszą odległość na drugą ścianę.

## Wydrąż część

1. Kliknij płaską ścianę, którą zostawisz otwartą, na przykład górę pudełka. Albo kliknij kilka ścian z {{key:Shift}}.
2. Wybierz {{ui:Powłoka}} na pasku narzędzi albo {{ui:Powłoka otwierająca tę ścianę}} w panelu ściany.

Część staje się ścianką 2 mm z otwartymi wskazanymi ścianami. Ustawienia:

| Ustawienie | Co robi | Domyślnie |
|---|---|---|
| **Ścianka (mm)** | Grubość ścianki | 2 |
| **Ścianki rosną na zewnątrz (ściany zostają w środku)** | Zaznaczone: ścianki dodawane są na zewnątrz, więc wnętrze zachowuje rozmiar części | Wył.: ścianki idą do środka, a zewnętrze zachowuje rozmiar |
| **Otwarte ściany** | Ile ścian jest usuniętych | (pusto) |

Do środka ścianki mają dokładnie grubość ścianki: zewnętrzne narożniki pozostają ostre, wewnętrzne wychodzą zaokrąglone (promień = ścianka), a otwór przechodzący przez część dostaje wokół siebie rurkę ścianki. Na zewnątrz ścianki są dodawane na zewnątrz pierwotnej powierzchni, która staje się pustym wnętrzem, a zewnętrzne krawędzie wychodzą zaokrąglone. Wewnętrzne ściany są nazwane od ścian, które przesuwają, więc można je wskazać.

Można otwierać tylko płaskie ściany: wskazanie zakrzywionej daje komunikat „Powłoka: w tej wersji otwiera tylko płaskie ściany (buduje ją jądro siatkowe).”. Powłoka działa wolno na częściach z wieloma okrągłymi ścianami (kilka sekund na tysiąc trójkątów): podczas projektowania użyj grubszego ustawienia **Krzywe**.

{{ui:Wskaż ściany}} zmienia, które ściany są otwarte, tak samo jak wskazywanie krawędzi. Lista nazywa każdą, na przykład „Ściana 1: Extrude1 end face”. Powłoka bez otwartych ścian jest niedozwolona: „Wskaż ściany do usunięcia (otwarcia), a potem wydrąż.”

## Kolejność ma znaczenie

Elementy są budowane z góry na dół. Zaokrąglenie przed powłoką jest wydrążane razem z częścią, więc wnętrze również dostaje zaokrąglone narożniki. Zaokrąglenie po powłoce zaokrągla tylko wskazane krawędzie. Przesuwaj elementy za pomocą {{ui:Przesuń w górę}} i {{ui:Przesuń w dół}} (zob. [Zmiana części za pomocą historii](topic:edit-history)).

Wzory i lustra nie mogą kopiować zaokrąglenia, fazki ani powłoki: „Fillet1 zmienia krawędzie lub ścianki bryły; nie można go skopiować. Kopiuj elementy tworzące bryły (wyciągnięcia, obroty, otwory, importy).” Najpierw utwórz wzór otworów lub wycięć, a potem zaokrąglij krawędzie wszystkich kopii jednym zaokrągleniem.

## Gdy coś się nie uda

| Komunikat | Co zrobić |
|---|---|
| „Zaokrąglenie 5 mm tu się nie mieści (jest za duże dla ściany obok jednej z krawędzi albo krawędzie spotykają się w narożniku, którego jądro nie może wtopić).” | Użyj mniejszego promienia albo zaokrąglaj mniej krawędzi naraz (kilka elementów zaokrąglenia, najmniejszy na końcu) |
| „Krawędź, którą zaokrągla, zniknęła: krawędź między Extrude1 a Cut2.” | Wcześniejsza zmiana usunęła tę krawędź. Wybierz {{ui:Wskaż krawędzie}}, usuń czerwoną krawędź i wskaż nową |
| „Powłoki nie udało się wykonać przy tej grubości (…).” | Ścianka jest grubsza niż wąska część modelu albo niż promień zaokrąglenia. Zrób ściankę cieńszą albo zaokrąglenia większe niż ścianka |
| „Ta ściana nie ma nazwy, którą historia może śledzić; wskaż inną.” | Wskaż ścianę utworzoną przez element (większość ścian takie jest) |
| „Zaokrąglenie: w tej wersji tylko proste krawędzie między dwiema płaskimi ścianami (buduje je jądro siatkowe). Zaokrąglij lub sfazuj krzywe krawędzie w szkicu.” (także Fazka) | Wskazana krawędź jest okrągła, na przykład krawędź otworu, albo leży na zakrzywionej ścianie. Usuń ją przez {{ui:Wskaż krawędzie}} i zaokrąglij lub sfazuj ten narożnik w szkicu |
| „Zaokrąglenie, którego promień zmienia się wzdłuż krawędzi: jeszcze nie zbudowano (wymaga dokładnego jądra). Podaj jeden promień.” | Odznacz **Zmienny promień** |
| „Zaokrąglenie przez jądro siatkowe: tam, gdzie zaokrąglone krawędzie się stykają, są ścięte na ukos, a nie wtopione.” (⚠ w historii) | To ostrzeżenie, a nie błąd: część jest zbudowana. Wskazane krawędzie spotykają się w narożniku i zaokrąglenia łączą się tam w ostre zagłębienie. Zaokrąglaj mniej krawędzi albo zaakceptuj zagłębienie |
| „Powłoka: w tej wersji otwiera tylko płaskie ściany (buduje ją jądro siatkowe).” | Otwarta ściana jest zakrzywiona. {{ui:Wskaż ściany}} i usuń ją; otwieraj tylko płaskie ściany |

## Ograniczenia

W tej wersji zaokrąglenia i fazki działają wyłącznie na prostych krawędziach między dwiema płaskimi ścianami, z jednym promieniem, a zaokrąglenia spotykające się w narożniku są ścięte na ukos. Powłoki otwierają wyłącznie płaskie ściany. Przy dokładnym jądrze zmienne zaokrąglenie zmienia się liniowo wzdłuż każdej krawędzi (jedno prawo na element; brak promienia ustawianego w punktach wzdłuż niej). Zaokrąglenia ścian, pełne zaokrąglenia i powłoki o różnych grubościach ścianek nie są jeszcze zbudowane.
