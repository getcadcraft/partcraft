---
title: Modeluj jedną część z Live TeamWork
summary: Co zmienia się w PartCraft podczas sesji Live TeamWork z CadCraft Studio: wszystkie elementy w jednym drzewie, każde okno buduje tę samą bryłę, twoje własne cofanie i dołączanie z przeglądarki w tej samej sieci.
keywords: live, live teamwork, studio live, razem, współpraca, sesja, udostępnij na żywo, dołącz, drzewo elementów, historia, przebudowa, kursor, wskaźnik, widzieć się nawzajem, nazwy, kolor, zaznaczenie, cofnij, gospodarz
from: 1809b96c
---

## Czego się dowiesz

Co dzieje się z częścią, gdy kilka osób modeluje ją jednocześnie. CadCraft Studio uruchamia i dołącza do sesji Live TeamWork (Udostępnij, Dołącz); ta strona dotyczy samej części.

## Wszyscy modelują naraz

Wszyscy pracują na tym samym drzewie elementów: szkicach, wyciągnięciach, otworach, wzorach, zaokrągleniach, parametrach. Twoje własne edycje pojawiają się od razu; edycje innych pojawiają się chwilę po tym, jak je wykonają. Przesyła się tylko drzewo: każde okno buduje bryłę samo, a jądro PartCraft buduje tę samą bryłę z tego samego drzewa w każdym oknie.

- **Dwie osoby zmieniają jeden element:** różne ustawienia (jedno głębokość, drugie warunek końca) są zachowane obie; to samo ustawienie przechodzi do późniejszej zmiany.
- **Szkic** przesyła się w całości: gdy dwie osoby edytują jeden szkic naraz, wygrywa późniejsza edycja. Ustalcie, kto rysuje który szkic.
- **Element zbudowany na czymś, co ktoś właśnie usunął** (wyciągnięcie usuniętego szkicu, otwór na usuniętej ścianie), zostaje cofnięty, a pasek stanu mówi dlaczego.
- **Zmiana kolejności drzewa** jest sprawdzana: jeśli dwie osoby przeciągną elementy w tym samym momencie, drugie przesunięcie zostaje cofnięte.

## Widzicie się nawzajem

Każda osoba w sesji ma własny kolor. Widzisz wskaźnik każdej osoby jako strzałkę w jej kolorze z imieniem obok, na ścianie, na którą wskazuje. Gdy ma zaznaczony element w drzewie, jego nazwa pojawia się za imieniem.

Wskaźniki, imiona i zaznaczenia istnieją tylko w sesji: nigdy nie są zapisywane w pliku i nigdy nie trafiają do cudzego cofania. Płynnie przesuwają się do miejsca, w którym jest każda osoba, więc pozostają gładkie nawet przy wolnym połączeniu.

## Cofanie cofa twoją własną pracę

{{key:Mod+Z}} cofa twoją ostatnią edycję i nie rusza cudzych. Gdy ktoś zmienił tę samą rzecz później, nic nie zostaje cofnięte, a pasek stanu mówi, kto to zrobił.

## Dołącz z przeglądarki

Współpracownik bez Studio może zeskanować obraz pod kodem gospodarza telefonem, tabletem lub komputerem w tej samej sieci. PartCraft otwiera się w przeglądarce, wypełnia się częścią gospodarza, gdy gospodarz cię wpuści, i ją buduje. Link zaproszenia pozwala dołączyć komuś z innej sieci: gospodarz potrzebuje miejsca licencyjnego w Team Cloud Plan dla aplikacji, reszta dołącza za darmo, a link działa tylko wtedy, gdy sesja gospodarza jest otwarta.

## Gdy sesja się kończy

Tylko gospodarz zapisuje część. Wszyscy inni zachowują niezapisaną kopię: zapisz ją, jeśli chcesz ją zachować.

:::note
Złożenia nie są jeszcze współdzielone w sesji: otwórz samą część, aby nad nią pracować razem.
:::
