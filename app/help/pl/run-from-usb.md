---
title: Uruchamianie z dysku USB
summary: Co narzędzia inżynierskie zapisują i gdzie, dzięki czemu CadCraft Studio może działać z pendrive'a lub z dowolnego folderu bez instalatora i bez uprawnień administratora: ustawienia, generatory, pamięci podręczne i pliki części oraz to, co zostaje na nośniku.
keywords: usb, przenośny, bez instalatora, administrator, admin, ustawienia, folder danych, generatory, gdzie zapisywane są pliki, offline, prywatność, dostęp do hosta
from: 263efc79
---

Narzędzia inżynierskie (generatory, biblioteka inżynierska, sprawdzenia i pliki danych) nie wymagają **uprawnień administratora** ani **instalatora**. Zapisują wyłącznie to, co jest wymienione tutaj, i nic więcej.

| Co | Gdzie jest przechowywane |
|---|---|
| Twoje części wraz z wygenerowanymi bryłami, kartami danych i sprawdzeniami | Plik części, który zapisujesz (`.partcraft.json`), w miejscu, w którym go zapisujesz. |
| Generatory otwarte z plików | W pamięci aplikacji: w pamięci lokalnej przeglądarki na stronie internetowej oraz w folderze `data` obok programu w przenośnym Studio. Najwyżej 20. |
| Ustawienia (rozmiary wokseli, wątki solwera, układ) | Ta sama pamięć aplikacji. |
| Karty danych, pola, siatki | Tylko tam, gdzie je zapiszesz: pobieranie trafia do wybranego przez Ciebie miejsca. |

Narzędzia **nie wykonują własnych wywołań sieciowych**: dołączone generatory są plikami w folderze samej aplikacji, biblioteka i sprawdzenia działają na Twoim komputerze w procesie roboczym, który nie ma dostępu do sieci, a dane inżynierskie (właściwości wody i powietrza, materiały) są wbudowane w aplikację. Generator otwarty z pliku jest odczytywany na Twoim komputerze i nigdzie nie trafia.

## Przenośny zip dla Windows i Linux

Przenośne Studio dla Windows przechowuje ustawienia, pamięci podręczne i dodatki w folderze `data` obok programu. AppImage dla Linuksa robi to samo, gdy obok leży plik o nazwie `portable`; bez tego pliku korzysta z folderu domowego. Nie ma przenośnej wersji dla Mac: system nie pozwala pobranej aplikacji zapisywać obok siebie. Własne uwagi o przenośności powłoki (pomoc `Studio`) wymieniają, co program zapisuje.

## Dostęp do hosta

Nic tutaj nie wymaga dostępu do hosta. Drukarki, maszyny z portem szeregowym i urządzenia USB są osobne: pytają, gdy zadanie ich potrzebuje, raz na urządzenie, a generatory ani sprawdzenia ich nie dotykają.
