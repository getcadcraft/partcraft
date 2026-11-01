---
title: Pliki: otwieranie, zapisywanie i eksport
summary: Pliki części i złożeń, które PartCraft otwiera i zapisuje, każdy format eksportu i co zachowuje, dokąd trafiają pliki oraz co zmienia się offline i między przeglądarkami.
keywords: otwórz, zapisz, eksport, pobieranie, plik, partcraft.json, plik złożenia, stl, 3mf, step, dxf, pdf, gdzie są moje pliki, offline, zapisz jako
from: c15c2c48
---

PartCraft pracuje na plikach na Twoim komputerze. Nigdy nie przesyła części, a konto ani pamięć w chmurze nie są w to zaangażowane. Zapis w chmurze nie jest jeszcze dostępny.

## Co PartCraft otwiera

| Plik | Rozszerzenie | Jak |
|---|---|---|
| Część PartCraft | `.partcraft.json` | {{ui:Otwórz}}, {{key:Mod+O}} albo upuść na widok 3D |
| Złożenie PartCraft | `.partcraft-asm.json` | Tak samo: PartCraft rozpoznaje, który to rodzaj |
| Bryła STEP | `.step`, `.stp` | Bryła odczytana jako trójkąty: [Otwórz plik STEP i buduj na nim](topic:import-step) |

Siatki STL, OBJ i 3MF też otwierają się jako bryły ([Otwórz STL, OBJ albo 3MF](topic:open-meshes)), podobnie jak pliki `.3dm` ([Otwórz model .3dm](topic:open-3dm-files)). Plików DXF, IGES ani własnych plików części innych programów nie można otworzyć (zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet)).

Zasady przy otwieraniu:

- Nazwa pliku części albo złożenia musi kończyć się na `.json`, a plik musi mieć mniej niż 50 MB.
- Pliki są sprawdzane, zanim cokolwiek się pokaże. Uszkodzony lub edytowany plik zostaje odrzucony z prostym powodem, na przykład „To nie jest plik PartCraft.”
- Plik zapisany przez nowszy PartCraft zostaje odrzucony: „Ten plik zapisał nowszy PartCraft (wersja pliku 3); ten odczytuje wersję 2.” Starsze pliki się otwierają.
- Jeśli część na ekranie ma niezapisane zmiany, PartCraft najpierw pyta: {{ui:Anuluj}}, {{ui:Odrzuć zmiany}} albo {{ui:Najpierw zapisz}}.

## Zapisywanie

{{ui:Zapisz}} albo {{key:Mod+S}} zapisuje to, co jest na ekranie:

- Część: `<nazwa części>.partcraft.json`, czyli pełna historia (szkice, relacje, wymiary, elementy, pozycja cofnięcia), sekcja arkusza rysunku z przekrojem, szczegółem i notatkami GD&T oraz pełny tekst każdej bryły STEP zaimportowanej we wcześniejszej wersji. Elementy, których ta wersja nie potrafi zbudować, są zapisywane z powrotem bez zmian. Sama bryła nie jest przechowywana; PartCraft przebudowuje ją z historii przy otwarciu pliku.
- Złożenie: `<nazwa złożenia>.partcraft-asm.json`, z **każdą częścią w środku**. Jeden plik niesie całe złożenie, więc możesz go wysłać samodzielnie.

Zapis to **pobranie**. Przeglądarka umieszcza plik w folderze pobranych plików albo pyta, gdzie go zapisać, jeśli tak ją ustawisz. Kolejny zapis tworzy nowe pobranie; przeglądarka może nazwać plik `Part1 (1).partcraft.json` zamiast zastąpić stary. Zmieniaj nazwy i przenoś pliki w {{pick:mac=Finderze|windows=Eksploratorze plików|linux=menedżerze plików}} jak chcesz.

Znaki inne niż litery, cyfry, spacje, `_`, `.` i `-` w nazwie części zamieniają się w nazwie pliku na `_`.

:::tip
Większość przeglądarek ma ustawienie pytające, gdzie zapisać każde pobranie. Włącz je, jeśli chcesz za każdym razem wybierać „Zapisz jako”: w Chrome i Edge znajdziesz je w ustawieniach w sekcji Pobrane, w Firefoksie w sekcji Ogólne, Pliki i aplikacje, w Safari w sekcji Ogólne, Lokalizacja pobranych plików.
:::

Więcej o tym, dokąd trafiają pobrane pliki i jak je bezpiecznie przechowywać: [Dokąd trafiają Twoje pliki](common:your-files).

## Eksport

Menu {{ui:Eksportuj}} zapisuje inne formaty. Każdy to pobranie, nazwane od części.

| Pozycja menu | Plik | Co zawiera |
|---|---|---|
| {{ui:STL, do druku 3D}} | `<nazwa>.stl` | Binarny STL z trójkątami bryły, milimetry, **Z w górę** |
| {{ui:3MF, do druku 3D}} | `<nazwa>.3mf` | 3MF z bryłą jako jednym obiektem, milimetry, **Z w górę** |
| {{ui:STEP AP242 (dokładna bryła)}} | `<nazwa>.step` | Jeszcze nie zbudowano w tej wersji (wyszarzone): wymaga dokładnego jądra |
| {{ui:STEP AP214 (dokładna bryła)}} | `<nazwa>.step` | Jeszcze nie zbudowano w tej wersji (wyszarzone) |
| {{ui:STEP (ścianki, jądro siatkowe)}} | `<nazwa>.step` | Bryła z płaskich ścian z siatki: **okrągłe powierzchnie to wiele małych płaskich fasetek**. Milimetry, we własnych osiach PartCraft (Y w górę). W tej wersji to STEP dla innych programów CAD |
| {{ui:DXF szkicu albo płaskiej ściany}} | `<nazwa> - <szkic>.dxf` albo `<nazwa> - face.dxf` | DXF R12. Szkic: linie, łuki, okręgi i punkty we współrzędnych szkicu, na warstwach PROFILE, CONSTRUCTION i POINTS. Wskazana płaska ściana: jej obrysy jako zamknięte polilinie (okrągłe krawędzie jako fasetki) |
| {{ui:Rysunek (PDF): widoki, przekrój, szczegół, GD&T}} | `<nazwa> - drawing.pdf` | Arkusz rysunku A3: trzy widoki, izometria, przekrój i szczegół, jeśli ustawiono, wymiary gabarytowe, symbole GD&T, tabliczka rysunkowa |

:::note
{{ui:STEP AP242 (dokładna bryła)}} i {{ui:STEP AP214 (dokładna bryła)}} nie są jeszcze zbudowane w tej wersji: użyj {{ui:STEP (ścianki, jądro siatkowe)}}. Ma właściwy kształt i objętość, ale każda okrągła ściana to wiele płaskich fasetek, więc inne programy nie mogą zaznaczyć otworu jako walca. Jeśli to ważne, najpierw ustaw drobniejsze **Krzywe**.
:::

- Eksporty dotyczą części na ekranie. W złożeniu eksport jest wyłączony; eksportu złożenia jeszcze nie ma.
- STL, 3MF, STEP z fasetkami i DXF ściany zawsze składają się z fasetek. Ustawienie **Krzywe** (w prawym panelu, gdy nic nie jest zaznaczone) określa, jak drobne są, od 32 do 256 fasetek na obrót. Przed eksportem STL lub 3MF do gładkiego wydruku wybierz Drobne albo Bardzo drobne.
- Rysunek PDF używa wbudowanej czcionki Helvetica czytnika. Znaki, których nie potrafi pokazać, drukują się jako „?”.

Krok po kroku: [Eksport do druku, STEP i DXF](topic:export-files) oraz [Zrób arkusz rysunku](topic:drawing-pdf).

## Niezapisana praca

- PartCraft przechowuje kopię zapasową otwartej części albo złożenia w tej przeglądarce chwilę po każdej zmianie, więc awaria lub zamknięta karta nie zabierze pracy: przy następnym otwarciu PartCraft zapyta „Odzyskać pracę?”. To nie jest zapis: zapisz do pliku, aby zachować pracę. Zobacz [Odzyskaj niezapisaną pracę](common:recover).
- Jeśli spróbujesz zamknąć kartę albo odświeżyć stronę z niezapisanymi zmianami, przeglądarka zapyta „Opuścić stronę?”. To własne okno przeglądarki; PartCraft nie może zmienić jego treści.
- {{ui:Nowy}}, {{ui:Otwórz}} i zamknięcie złożenia pytają przed odrzuceniem niezapisanych zmian.

## Online i offline

Wszystko dzieje się na Twoim komputerze: jądro siatkowe (program WebAssembly) jest pobierane razem z aplikacją i buduje geometrię lokalnie, a pliki są czytane z dysku i zapisywane na dysk. Żadne dane części nie idą przez sieć. Zobacz [Jądro siatkowe](topic:solid-kernels).

Aby pracować zupełnie bez połączenia, zapisz PartCraft do pracy offline, gdy jesteś online: wybierz {{ui:Zapisz do pracy offline}} na pasku aplikacji i poczekaj, gdy odlicza („Zapisywanie 40 z 212”), aż pojawi się **Gotowe offline**. Zapisana kopia zawiera bibliotekę 3D i jądro siatkowe, więc potem modelowanie, zapis, każdy eksport i rysunki działają offline. Jeśli pojawi się **Nie udało się zapisać**, kliknij, aby spróbować ponownie, gdy jesteś online; **Tryb offline niedostępny** oznacza, że to okno przeglądarki nie może przechować kopii (okna prywatne i niektóre zarządzane komputery). Gdy kopia jest zapisana, kliknięcie **Gotowe offline** oferuje {{ui:Zapisz ponownie (pobierz najnowszą wersję)}} i {{ui:Usuń kopię offline}}. Szczegóły: [Praca offline](common:offline).

:::online
Jesteś online. Nawet bez zapisu do pracy offline, gdy PartCraft się załaduje i znacznik na pasku stanu pokazuje „Jądro siatkowe”, możesz pracować dalej, jeśli połączenie zniknie. Tylko nie odświeżaj strony, dopóki nie wrócisz online.
:::

:::offline
Jesteś offline. Jeśli PartCraft jest już otwarty, pracuj dalej; zapis i eksport nadal działają. Jeśli pasek aplikacji pokazuje **Gotowe offline**, PartCraft otwiera się też od zera bez połączenia; w przeciwnym razie nie odświeżaj tej karty.
:::

## Różnice między przeglądarkami

- **Pobieranie.** Każda przeglądarka ma własny folder pobranych plików i własny sposób pytania. Jeśli przeglądarka pyta, czy ta witryna może pobierać pliki, zezwól, bo inaczej zapis i eksport nie zadziałają.
- **Przeciąganie i upuszczanie** pliku na widok działa w Chrome, Edge, Firefox i Safari.
- **Pliki z telefonu lub tabletu.** Na iPhonie i iPadzie Otwórz pokazuje aplikację Pliki; zapisane pliki trafiają do Pliki, Pobrane. Na Androidzie trafiają do folderu Pobrane.

Zawartość plików nie różni się między przeglądarkami ani systemami operacyjnymi.
