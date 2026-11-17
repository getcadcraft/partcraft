---
title: Pliki: otwieranie, zapisywanie i eksport
summary: Pliki części i złożeń, które PartCraft otwiera i zapisuje, wszystkie formaty eksportu i to, co zachowują, gdzie trafiają pliki oraz co zmienia się offline i między przeglądarkami.
keywords: otwórz, zapisz, eksport, pobierz, plik, partcraft.json, plik złożenia, stl, 3mf, step, dxf, pdf, gdzie są pliki, offline, zapisz jako
from: e5fbc7e3
---

PartCraft pracuje na plikach na komputerze. Nigdy nie przesyła części, a nie ma tu konta ani pamięci w chmurze. Zapis w chmurze nie jest jeszcze dostępny.

## Co otwiera PartCraft

| Plik | Rozszerzenie | Jak |
|---|---|---|
| Część PartCraft | `.partcraft.json` | {{ui:Otwórz}}, {{key:Mod+O}} albo upuść go w widoku 3D |
| Złożenie PartCraft | `.partcraft-asm.json` | Tak samo: PartCraft sama rozpoznaje rodzaj pliku |
| Bryła STEP | `.step`, `.stp` | Bryła odczytana jako trójkąty: [Otwórz plik STEP i buduj na nim](topic:import-step) |

Siatki STL, OBJ i 3MF też otwierają się jako bryły ([Otwieranie STL, OBJ lub 3MF](topic:open-meshes)), podobnie pliki `.3dm` ([Otwieranie modelu .3dm](topic:open-3dm-files)). Nie można otworzyć plików DXF, IGES ani natywnych plików części innych programów (zob. [Czego jeszcze nie zbudowano](topic:not-built-yet)).

Zasady przy otwieraniu:

- Nazwa pliku części lub złożenia musi kończyć się na `.json`, a plik musi mieć mniej niż 50 MB.
- Pliki są sprawdzane, zanim cokolwiek zostanie pokazane. Uszkodzony lub zmieniony plik jest odrzucany z prostym powodem, na przykład „To nie jest plik PartCraft.”
- Plik zapisany przez nowszy PartCraft jest odrzucany: „Ten plik został zapisany przez nowszy PartCraft (wersja pliku 3); ta wersja odczytuje wersję 2.” Starsze pliki się otwierają.
- Jeśli część na ekranie ma niezapisane zmiany, PartCraft najpierw pyta: {{ui:Anuluj}}, {{ui:Odrzuć zmiany}} albo {{ui:Najpierw zapisz}}.

## Zapisywanie

{{ui:Zapisz}} albo {{key:Mod+S}} zapisuje to, co jest na ekranie:

- Dla części: `<part name>.partcraft.json`, pełna historia (szkice, relacje, wymiary, elementy, pozycja cofnięcia), przekrój, szczegół i uwagi GD&T arkusza rysunkowego oraz pełny tekst każdej bryły STEP zaimportowanej w wcześniejszej wersji. Elementy, których ta wersja nie może zbudować, są zapisywane bez zmian. Sama bryła nie jest zapisywana; PartCraft odtwarza ją z historii przy otwieraniu pliku.
- W złożeniu: `<assembly name>.partcraft-asm.json`, z **każdą częścią w środku**. Jeden plik zawiera całe złożenie, więc można go wysłać samodzielnie.

Zapis to **pobranie**. Przeglądarka umieszcza plik w folderze pobranych albo pyta, gdzie go zapisać, jeśli tak ustawiono. Ponowny zapis tworzy nowe pobranie; przeglądarka może nazwać je `Part1 (1).partcraft.json` zamiast zastąpić stary. Zmieniaj nazwy i przenoś pliki w {{pick:mac=Finder|windows=Eksplorator plików|linux=menedżer plików}} według potrzeb.

Znaki inne niż litery, cyfry, spacje, `_`, `.` i `-` w nazwie części zamieniają się na `_` w nazwie pliku.

:::tip
Większość przeglądarek ma ustawienie pytania, gdzie zapisać każde pobranie. Włącz je, jeśli chcesz za każdym razem wybierać „Zapisz jako”: w Chrome i Edge jest w ustawieniach w sekcji Pobrane; w Firefox w sekcji Ogólne, Pliki i aplikacje; w Safari w sekcji Ogólne, Lokalizacja pobieranych plików.
:::

Więcej o tym, dokąd trafiają pobrane pliki i jak je bezpiecznie przechowywać: [Gdzie trafiają pliki](common:your-files).

## Eksport

Menu {{ui:Eksport}} zapisuje inne formaty. Każdy jest pobieraniem, nazwanym od części.

| Pozycja menu | Plik | Co zawiera |
|---|---|---|
| {{ui:STL, do druku 3D}} | `<name>.stl` | Binarny STL z trójkątów bryły, w milimetrach, **Z w górę** |
| {{ui:3MF, do druku 3D}} | `<name>.3mf` | 3MF z bryłą jako jednym obiektem, w milimetrach, **Z w górę** |
| {{ui:STEP AP242 (dokładna bryła)}} | `<name>.step` | Jedna dokładna bryła, w milimetrach, Z w górę: okrągłe ściany jako prawdziwe walce, stożki, kule i tory. STEP do użycia w innych programach CAD i CAM |
| {{ui:STEP AP214 (dokładna bryła)}} | `<name>.step` | Ta sama dokładna bryła w starszym schemacie AP214 |
| {{ui:STEP (ścianki, jądro siatkowe)}} | `<name>.step` | Bryła z płaskich ścian z siatki: **okrągłe powierzchnie to wiele małych płaskich ścianek**. W milimetrach, w osiach własnych PartCraft (oś Y w górę). Dla programu, który odrzuca dokładny plik |
| {{ui:DXF szkicu albo płaskiej ściany}} | `<name> - <sketch>.dxf` albo `<name> - face.dxf` | DXF R12. Szkic: linie, łuki, okręgi i punkty we własnych współrzędnych szkicu, na warstwach PROFILE, CONSTRUCTION i POINTS. Wskazana płaska ściana: jej kontury jako zamknięte polilinie (okrągłe krawędzie jako ścianki) |
| {{ui:Rysunek (PDF): widoki, przekrój, szczegół, GD&T}} | `<name> - drawing.pdf` | Arkusz rysunkowy A3: trzy widoki, izometria, przekrój i szczegół, jeśli ustawiono, wymiary gabarytowe, symbole GD&T, tabliczka rysunkowa |

:::note
{{ui:STEP AP242 (dokładna bryła)}} zapisuje otwory, występy, zaokrąglenia, stożki, kule i tory na ich prawdziwych powierzchniach, więc inny program może wybrać otwór jako walec; **Krzywe** tego nie zmienia. Boki splajnów, modelowane gwinty i zaimportowane siatki nie mają dokładnej powierzchni i pozostają płaskimi ściankami w tej samej bryle; pasek stanu podaje, ile ich jest. {{ui:STEP (ścianki, jądro siatkowe)}} zapisuje każdą okrągłą ścianę jako ścianki.
:::

- Eksporty dotyczą części na ekranie. Eksport jest wyłączony w złożeniu; eksportu złożenia jeszcze nie ma.
- STL, 3MF, STEP ze ściankami i DXF ściany zawsze składają się ze ścianek. Ustawienie **Krzywe** (w prawym panelu, gdy nic nie jest zaznaczone) określa, jak drobne są, od 32 do 256 ścianek na obrót. Przed eksportem STL lub 3MF wybierz Dokładne albo Bardzo dokładne, aby uzyskać gładki wydruk.
- Rysunek PDF używa wbudowanej w czytnik czcionki Helvetica. Znaki, których nie może pokazać, są drukowane jako „?”.

Krok po kroku: [Eksport do druku, STEP i DXF](topic:export-files) oraz [Tworzenie arkusza rysunkowego](topic:drawing-pdf).

## Niezapisana praca

- PartCraft zachowuje kopię odzyskiwania otwartej części lub złożenia w tej przeglądarce chwilę po każdej zmianie, więc awaria lub zamknięta karta jej nie zgubi: przy następnym otwarciu PartCraft zapyta „Odzyskać pracę?”. To nie jest zapis: zapisz do pliku, aby zachować pracę. Zob. [Odzyskiwanie niezapisanej pracy](common:recover).
- Jeśli próbujesz zamknąć kartę lub przeładować stronę z niezapisanymi zmianami, przeglądarka pyta „Opuścić witrynę?”. To okno przeglądarki; PartCraft nie może zmienić jego treści.
- {{ui:Nowy}}, {{ui:Otwórz}} i zamykanie złożenia pytają przed odrzuceniem niezapisanych zmian.

## Online i offline

Wszystko dzieje się na komputerze: jądro siatkowe (program WebAssembly) jest pobierane razem z aplikacją i buduje geometrię lokalnie, a pliki są odczytywane i zapisywane na dysku. Żadne dane części nie przechodzą przez sieć. Zob. [Jądro siatkowe](topic:solid-kernels).

Aby pracować bez połączenia, zapisz PartCraft do pracy offline, będąc online: wybierz {{ui:Zapisz do pracy offline}} na pasku aplikacji i poczekaj, aż licznik („Zapisywanie 40 z 212”) pokaże **Gotowe do pracy offline**. Zapisana kopia obejmuje bibliotekę 3D i jądro siatkowe, więc później modelowanie, zapis, każdy eksport i rysunki działają offline. Jeśli pojawi się **Nie udało się zapisać**, kliknij, aby spróbować ponownie będąc online; **Tryb offline niedostępny** oznacza, że to okno przeglądarki nie może zachować kopii (okna prywatne i niektóre komputery zarządzane). Gdy kopia jest zapisana, kliknięcie **Gotowe do pracy offline** pokazuje {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} i {{ui:Usuń kopię offline}}. Szczegóły: [Praca offline](common:offline).

:::online
Połączenie jest aktywne. Nawet bez zapisu do pracy offline, gdy PartCraft się załaduje i pasek stanu pokaże znacznik „Mesh kernel”, można dalej pracować, jeśli połączenie zostanie przerwane. Tylko nie przeładowuj strony, dopóki sieć nie wróci.
:::

:::offline
Połączenie jest nieaktywne. Jeśli PartCraft jest już otwarty, można dalej pracować; zapis i eksport nadal działają. Jeśli pasek aplikacji pokazuje **Gotowe do pracy offline**, PartCraft otworzy się od zera także bez połączenia; w przeciwnym razie nie przeładowuj tej karty.
:::

## Różnice między przeglądarkami

- **Pobrane.** Każda przeglądarka ma własny folder pobranych i własny sposób pytania. Jeśli przeglądarka zapyta, czy ta witryna może pobierać pliki, zezwól, bo inaczej zapis i eksport nie zadziałają.
- **Przeciągnij i upuść** plik na widok działa w Chrome, Edge, Firefox i Safari.
- **Pliki z telefonu lub tabletu.** Na iPhone i iPad Otwórz pokazuje aplikację Pliki; zapisane pliki trafiają do Pliki, Pobrane. Na Androidzie trafiają do folderu Pobrane.

Zawartość plików nie różni się między przeglądarkami ani systemami operacyjnymi.
