---
title: Gładzik, dotyk i małe ekrany
summary: Jak obracać, przesuwać i powiększać gładzikiem Mac lub laptopa, co działa na ekranie dotykowym, a czego nadal potrzeba klawiatury, oraz jak ekran układa się na telefonie lub wąskim oknie.
keywords: gładzik, touchpad, magic mouse, mac, dotyk, tablet, ipad, telefon, szczypanie, dwa palce, prawy przycisk, kliknięcie pomocnicze, gesty, mały ekran, mobilny
from: 0e764fd8
---

PartCraft jest zrobiony z myszą z kółkiem i środkowym przyciskiem, ale gładzik działa dobrze, gdy znasz gesty, a ekran dotykowy nadaje się do oglądania części i prostego szkicowania.

## Gładzik

:::mac
| Aby | Zrób to |
|---|---|
| Obrócić część (3D) | Kliknij i przeciągnij jednym palcem (lub przeciągnij trzema palcami, jeśli włączyłeś przeciąganie trzema palcami) |
| Przesunąć (3D) | Przytrzymaj {{key:Shift}} (lub ⌘) i kliknij-przeciągnij albo kliknij-przeciągnij dwoma wciśniętymi palcami (przeciąganie kliknięciem pomocniczym) |
| Obrócić część, przesuwając | Przesuń dwoma palcami; z {{key:Shift}} przesuwanie przesuwa widok. Wymaga, aby **Przewijanie** było ustawione na „Rozpoznaj automatycznie” (początek) albo „Gładzik” |
| Powiększyć (3D i szkic) | Uszczypnij. Powiększenie idzie w stronę wskaźnika. Gdy **Przewijanie** jest ustawione na „Kółko myszy”, przewijanie dwoma palcami też powiększa |
| Kliknąć prawym przyciskiem | Kliknij dwoma palcami lub {{key:Ctrl}}+kliknięcie |
| Przesunąć w szkicu | Przesuń dwoma palcami („Rozpoznaj automatycznie” lub „Gładzik”) albo kliknij-przeciągnij dwoma wciśniętymi palcami. {{key:Shift}}+przeciągnięcie nie przesuwa w szkicu (rysuje okno zaznaczenia) |
| Dodać do zaznaczenia w szkicu | {{key:Shift}}+kliknięcie lub ⌘+kliknięcie |

Jeśli kliknięcie dwoma palcami nie działa, włącz kliknięcie pomocnicze w **Ustawienia systemowe, Gładzik, Wskazywanie i klikanie**.
:::

:::windows linux
| Aby | Zrób to |
|---|---|
| Obrócić część (3D) | Naciśnij gładzik (lub stuknij i przytrzymaj) i przeciągnij |
| Przesunąć (3D) | Przytrzymaj {{key:Shift}} lub {{key:Ctrl}} i przeciągnij albo przeciągnij z wciśniętym obszarem prawego przycisku |
| Obrócić część, przesuwając | Przesuń dwoma palcami; z {{key:Shift}} przesuwanie przesuwa widok. Wymaga, aby **Przewijanie** było ustawione na „Rozpoznaj automatycznie” (początek) albo „Gładzik” |
| Powiększyć (3D i szkic) | Uszczypnij tam, gdzie gładzik to obsługuje. Powiększenie idzie w stronę wskaźnika. Gdy **Przewijanie** jest ustawione na „Kółko myszy”, przewijanie dwoma palcami powiększa |
| Kliknąć prawym przyciskiem | Stuknięcie dwoma palcami albo prawy dolny róg gładzika |
| Przesunąć w szkicu | Przesuń dwoma palcami („Rozpoznaj automatycznie” lub „Gładzik”) albo przeciągnij z wciśniętym obszarem prawego przycisku. {{key:Shift}}+przeciągnięcie nie przesuwa w szkicu |
| Dodać do zaznaczenia w szkicu | {{key:Shift}}+kliknięcie lub {{key:Ctrl}}+kliknięcie |
:::

**Przewijanie** jest w [ustawieniach PartCraft](topic:settings): „Rozpoznaj automatycznie” (początek) traktuje boczne lub drobne przewijanie jak gładzik, „Gładzik” zawsze tak robi, „Kółko myszy” nigdy. Uszczypnięcie powiększa we wszystkich trzech.

Klawisze strzałek obracają widok 3D, a {{key:Shift}} ze strzałkami przesuwa, gdy klikniesz w widok: to wygodne na gładziku. {{key:Plus}} i {{key:Minus}} powiększają.

## Ekrany dotykowe

PartCraft obsługuje dotyk, więc tablety, laptopy dotykowe i telefony działają, z ograniczeniami.

:::touch
**Klawisze dotykowe**

Gdy dotkniesz ekranu, w prawym dolnym rogu widoku pojawia się mały pasek z klawiszami, których palec nie ma. Znika, gdy użyjesz myszy.

- {{ui:Esc}}: klawisz Esc. Anuluje to, co zacząłeś, albo cofa krok, dokładnie tak jak klawisz.
- {{ui:Dodaj}} (w szkicu, przy Zaznacz): gdy jest włączony, każde stuknięcie dodaje element do zaznaczenia lub go z niego usuwa, jak {{key:Shift}}+kliknięcie. Stuknij ponownie, aby wrócić do jednego elementu naraz.
- {{ui:Gotowe}} (podczas rysowania łańcucha linii, splajnu lub wielokąta): kończy go, jak kliknięcie prawym przyciskiem.

Przytrzymanie palca w miejscu przez około pół sekundy robi to samo co jedno stuknięcie: przy narzędziu rysowania kończy to, co rysujesz, a przy Zaznacz dodaje element pod palcem do zaznaczenia lub go z niego usuwa. Punkty i linie łatwiej trafić palcem: PartCraft szuka około dwa razy dalej wokół stuknięcia niż wokół kliknięcia.

**W widoku 3D**

- Jeden palec: obróć część.
- Dwa palce: uszczypnij, aby powiększyć; przesuń razem, aby przesunąć widok.
- Stuknięcie: wybierz ścianę, krawędź lub płaszczyznę. Przed stuknięciem nie ma podświetlenia po najechaniu.

**W szkicu**

- Stuknij narzędziem rysującym, aby postawić każdy punkt: stuknij początek, potem koniec. Przyciąganie działa tam, gdzie podniesiesz palec.
- Dwa palce uszczypują i przesuwają. Położenie drugiego palca anuluje przeciąganie, które zaczął pierwszy palec.
- Aby zakończyć łańcuch linii, stuknij {{ui:Gotowe}}, przytrzymaj palec w miejscu albo stuknij ponownie {{ui:Linia}} (lub inne narzędzie) na pasku narzędzi.
- Przy Zaznacz stuknij, aby zaznaczyć; przeciągnij punkt lub linię, aby ją przesunąć; przeciągnij po pustym miejscu, aby narysować okno. Drugie stuknięcie zastępuje zaznaczenie, chyba że {{ui:Dodaj}} jest włączone (lub przytrzymasz palec w miejscu na drugim elemencie).
- Aby zmienić wymiar, użyj **Edytuj** obok niego w prawym panelu.

**Arkusz rysunku**

Stuknij, aby postawić i zaznaczyć symbole, a przeciągnij symbol, aby go przesunąć. Uszczypnij, aby powiększyć, przesuń dwoma palcami, aby przesunąć, albo przeciągnij jednym palcem po pustej kartce. Drugi palec zatrzymuje przeciągany symbol, który wraca na poprzednie miejsce.

**Czego nadal potrzeba klawiatury**

- Wpisywanie liczb: klawiatura ekranowa pojawia się w polach liczbowych i polach wymiarów.
- Skróty klawiszowe narzędzi: użyj paska narzędzi.
:::

## Małe ekrany i telefony

- Przy 1280 pikselach lub szerzej pasek narzędzi mieści się w jednym rzędzie.
- Między około 760 a 1100 pikselami panele boczne są węższe.
- Poniżej około 760 pikseli (telefon lub wąskie okno) ekran układa się w stos: pasek narzędzi (przesuń go w bok, aby zobaczyć więcej przycisków), widok 3D, pasek stanu, a potem panel właściwości i historia. Przewiń stronę, aby dojść do paneli.
- Menu ({{ui:Eksport}}, {{ui:Widoki}}) otwierają się na całą szerokość ekranu.

:::note
Na iPhonie w przeglądarce nie ma trybu pełnego ekranu; {{key:Ctrl+Shift+F}} i przycisk trybu ekranu przełączają tylko między zwykłym widokiem a widokiem z ukrytymi paskami.
:::

Telefon nadaje się do otwierania części, obracania jej i sprawdzania danych. Prawdziwe modelowanie wymaga większego ekranu i myszy lub gładzika.

## Przeglądarki

Aktualne Chrome, Edge, Firefox i Safari uruchamiają PartCraft w Windows, macOS i Linux, na tabletach i telefonach, o ile dostępne są WebGL i WebAssembly. Zob. [Przeglądarki i komputery](common:browsers).
