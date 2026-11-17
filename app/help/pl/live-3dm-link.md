---
title: Utrzymuj model .3dm na żywo
summary: Zmieniaj model w programie, który go stworzył, i obserwuj, jak bryła w PartCraft za nim podąża, z Rhino 8 lub z definicji Grasshoppera, a elementy są przebudowywane na nowym kształcie.
keywords: rhino, grasshopper, łącze na żywo, połączenie na żywo, 3dm, nurbs, parametryczny, łącze, synchronizacja, skrypt, wysyłanie, zaimportowana bryła
from: cf4dc9b2
---

Model kształtuj tam, gdzie go modelujesz, a obrabiaj, sprawdzaj i dokumentuj tutaj. Każda zmiana w drugim programie zastępuje jedną zaimportowaną bryłę w PartCraft, a elementy po niej przebudowują się na nowym kształcie.

:::note
Łącze wymaga **CadCraft Studio** na tym samym komputerze. Karta przeglądarki nie może nawiązać połączenia. Nic nie idzie przez internet: skrypt komunikuje się ze Studio pod adresem tego komputera, z tokenem.
:::

:::warning
To łącze sprawdzono z zapisem plików przez skrypt i zastępstwem drugiego programu, a nie jeszcze wewnątrz samego Rhino czy Grasshoppera. Jeśli tam coś nie działa, napisz nam, co pokazał komunikat.
:::

## Konfiguracja

1. W Studio otwórz PartCraft. W {{ui:Ustawienia}} › {{ui:PartCraft}} › {{ui:Asystenci}} zaznacz **Pozwalaj asystentom AI i skryptom korzystać z PartCraft**, a potem **Edytuj**.
2. W Studio wybierz {{ui:Połącz asystenta}}. Pokazuje adres i token, które wkleisz poniżej.
3. Pobierz skrypt: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Z Rhino

1. Uruchom `cadcraft_link.py` w edytorze skryptów Rhino (Python 3 w Rhino 8).
2. Za pierwszym razem wklej adres i token. Są przechowywane w `.cadcraft-link.json` w folderze domowym, nigdy w modelu. Studio tworzy nowy token przy każdym uruchomieniu, więc skrypt pyta wtedy ponownie.

Aby zatrzymać, uruchom skrypt ponownie.

## Z Grasshoppera

Najpierw uruchom skrypt raz w Rhino, aby adres i token zostały zapisane.

1. Dodaj komponent Script (Python 3) i wklej do niego cały `cadcraft_link.py`.
2. Podaj mu te wejścia: `G` (geometria, z dostępem do listy), `N` (nazwa, opcjonalna), `On` (przełącznik logiczny) i `Target` (opcjonalnie: `model` lub `part`, gdy otwarte są obie aplikacje).
3. Ustaw `On` na true.

Każde przeliczenie wysyła `G` i zastępuje to, co komponent wysłał poprzednio.

## Jak to działa tutaj

- **Jedna bryła.** Wszystko widoczne w modelu staje się jednym zaimportowanym elementem, tak jak przy [otwieraniu pliku .3dm](topic:open-3dm-files).
- **Musi być zamknięta.** PartCraft wypełnia małe otwory i płaskie przerwy, a drugi program dostaje informację, ile ich było. Jeśli model nadal się nie domyka, PartCraft zachowuje dotychczasową bryłę, a pasek stanu o tym informuje. Następna zmiana, która domknie model, go zaktualizuje.
- **Dokończ bieżącą pracę.** W szkicu lub rysunku aktualizacje są odrzucane i ponawiane; docierają, gdy wrócisz do modelu.
- **Cofnij.** Aktualizacje oddalone od siebie o mniej niż dwie sekundy mają wspólny krok cofania.
- **Zapisz.** Plik części zachowuje łącze. Po ponownym otwarciu uruchom skrypt ponownie, a ten sam element się zaktualizuje.

**Tylko w jedną stronę.** Zmiany tutaj nie wracają do drugiego programu.

## Gdy coś nie działa

- **„Żadne okno ModelCraft ani PartCraft na to nie pozwala”:** wykonaj krok 1 konfiguracji.
- **„Studio odrzuciło token”:** Studio zostało ponownie uruchomione. Skopiuj nowy token i uruchom skrypt ponownie. W przypadku Grasshoppera najpierw uruchom go w Rhino.
- **„Nie można połączyć się z CadCraft Studio”:** Studio nie działa albo adres się zmienił.
