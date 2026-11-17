---
title: Formaty plików
summary: Każdy plik, który PartCraft odczytuje i zapisuje, z rozszerzeniami, jednostkami, osiami i tym, co każdy zachowuje lub gubi.
keywords: formaty, typy plików, rozszerzenia, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, siatka, step, stp, ap242, dxf, r12, pdf, gltf, iges, jednostki, oś Z w górę
from: 4d0ecbee
---

| Format | Rozszerzenie | Otwieranie | Zapis lub eksport | Jednostki | Oś w górę | Zachowuje |
|---|---|---|---|---|---|---|
| Część PartCraft | `.partcraft.json` | Tak | {{ui:Zapisz}} | mm | Y | Pełna historia: szkice, relacje, wymiary, elementy, wyłączenia, cofnięcia, ustawienie krzywych, ustawienia rysunku i GD&T, tekst STEP zaimportowany w wcześniejszej wersji |
| Złożenie PartCraft | `.partcraft-asm.json` | Tak | {{ui:Zapisz}} w złożeniu | mm | Y | Każda część (osadzona), kopie i ich położenia, połączenia |
| STL (binarny lub tekstowy) | `.stl` | Tak, jako bryła: [Otwieranie STL, OBJ lub 3MF](topic:open-meshes) | {{ui:STL, do druku 3D}} | mm (pytane przy otwieraniu) | Z | Tylko trójkąty bryły |
| 3MF | `.3mf` | Tak, jako bryła | {{ui:3MF, do druku 3D}} | mm (podane w pliku) | Z | Bryła jako jeden obiekt siatki |
| OBJ | `.obj` | Tak, jako bryła (tylko ściany) | Nie | pytane przy otwieraniu | Z lub Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Tak, jako bryła odczytana jako trójkąty (zakrzywione ściany rysowane jako ścianki; płaskie ściany, walce, stożki, kule i tory pliku są zachowane do dokładnego eksportu): [Otwieranie pliku STEP](topic:import-step) | | mm (z jednostki pliku) | Z, albo Y, jeśli tak zaznaczysz | Bryły i bryły powierzchniowe, złożenia z każdą częścią na miejscu; bez kolorów, nazw, drzewa złożenia ani PMI |
| `.3dm` | `.3dm` | Tak, jako jedna bryła z jej siatek i powierzchni (zapisane siatki renderowania, a jeśli ich brak, podział na trójkąty): [Otwieranie modelu .3dm](topic:open-3dm-files) | | Z jednostki pliku | Z, albo Y, jeśli tak zaznaczysz | Siatki, polipowierzchnie, wyciągnięcia i umieszczenia bloków jako jedna bryła; bez krzywych, kolorów, warstw i nazw |
| STEP AP242, dokładny | `.step` | | {{ui:STEP AP242 (dokładna bryła)}} | mm | Z | Jedna dokładna bryła: płaskie ściany, walce, stożki, kule i tory na prawdziwych powierzchniach, prawdziwe okręgi i proste jako krawędzie; boki splajnów, modelowane gwinty, bryły z plików siatkowych i ściany splajnowe z pliku STEP pozostają ściankami. STEP do użycia w innych programach CAD i CAM |
| STEP AP214, dokładny | `.step` | | {{ui:STEP AP214 (dokładna bryła)}} | mm | Z | Ta sama dokładna bryła w starszym schemacie AP214, dla programów, które odczytują tylko ten |
| STEP AP242, ścianki | `.step` | | {{ui:STEP (ścianki, jądro siatkowe)}} | mm | Y | Zamknięta bryła z płaskich ścian: okrągłe powierzchnie jako ścianki. Dla programu, który odrzuca dokładny plik |
| STEP AP214, ścianki | `.step` | | {{ui:STEP AP214 (ścianki, jądro siatkowe)}} | mm | Y | Ta sama bryła w starszym schemacie AP214, dla programów, które odczytują tylko ten |
| Paczka USD | `.usdz` | Nie | {{ui:Paczka USD (.usdz)}} | m | Z | Bryła z materiałem, objętością i masą; złożenie z każdą częścią raz i rozmieszczonymi kopiami: [Eksport do USD](topic:usd) |
| IFC 4 | `.ifc` | Nie | {{ui:IFC 4 (ze wszystkimi właściwościami)}} | mm | Z | Kształt jako trójkąty, materiał, każdy parametr, tabliczka rysunkowa, ilości; części złożenia jako typy, a kopie rozmieszczone |
| DXF R12, szkic | `.dxf` | Nie | {{ui:DXF szkicu albo płaskiej ściany}} przy zaznaczonym szkicu | mm | Własne x, y szkicu | Linie, prawdziwe łuki i okręgi, punkty; warstwy PROFILE, CONSTRUCTION, POINTS |
| DXF R12, ściana | `.dxf` | Nie | {{ui:DXF szkicu albo płaskiej ściany}} przy wskazanej płaskiej ścianie | mm | Własne x, y ściany | Kontury ściany: okrągłe otwory jako prawdziwe okręgi, reszta jako zamknięte polilinie (okrągłe krawędzie jako ścianki) |
| Rysunek PDF | `.pdf` | Nie | {{ui:Rysunek (PDF): widoki, przekrój, szczegół, GD&T}} | mm na arkuszu A3 | (pusto) | Widoki z przodu, z góry, z prawej, izometryczny, przekrój i szczegół rysowane z ścianek, linie niewidoczne, wymiary gabarytowe, symbole GD&T, tabliczka rysunkowa |

## Pliki PartCraft

Oba są zwykłym tekstem (JSON). Bryła nigdy nie jest zapisywana: PartCraft odtwarza ją z historii, dzięki czemu pliki są małe i zawsze zgodne z historią.

- Każdy plik ma numer wersji. Ta wersja zapisuje każdy plik części z najniższą wersją, która obejmuje to, czego używa (od 2 do 5; bryła z siatki wymaga 5), i otwiera każdą starszą wersję. Plik z nowszego PartCraft jest odrzucany z komunikatem podającym obie wersje.
- Każda wartość jest sprawdzana przy otwieraniu pliku. Nazwy tracą znaki sterujące; liczby spoza zakresu, odwołania do brakujących elementów i nieznane rodzaje elementów są odrzucane z prostym powodem.
- Nie edytuj tych plików ręcznie, chyba że znasz format. Plik, który nie przejdzie sprawdzeń, się nie otworzy.
- Część z dużą bryłą STEP zaimportowaną w wcześniejszej wersji może przekroczyć 50 MB, czyli największy rozmiar, jaki PartCraft otwiera jako plik części (zob. [Rozwiązywanie problemów](topic:troubleshooting#file-problems)).

## Ścianki a dokładność

STL i 3MF zawsze składają się ze ścianek, zgodnie z ustawieniem **Krzywe**, tak samo DXF ściany, z wyjątkiem okrągłych otworów, które są prawdziwymi okręgami. DXF szkicu ma prawdziwe łuki i okręgi, bo pochodzi bezpośrednio ze szkicu. Ta wersja buduje każdą część jądrem siatkowym, więc widoki rysunku (także przekroje) też są z ścianek. Dokładny eksport STEP jest wyjątkiem: jądro zna prawdziwą powierzchnię każdej ściany ze szkicu (albo z pliku STEP, z którego otwarto bryłę), więc okrągłe ściany są zapisywane jako prawdziwe walce, stożki, kule i tory, bez względu na ustawienie **Krzywe** (zob. [Eksport do druku, STEP i DXF](topic:export-files#for-other-cad-programs-step)).

## Nieobsługiwane w tej wersji

| Format | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (import i eksport); eksport OBJ | Nie zbudowano |
| DWG | Zapisywany tylko przez [pakiet wariantów](topic:variant-pack), jako arkusz rysunkowy każdej konfiguracji. Nie jest odczytywany i nie ma innego eksportu. Eksportuj DXF; każdy program CAD otworzy DXF R12 |
| STEP złożenia i rysunek złożenia | Jeszcze nie zbudowano. Eksportuj każdą część jako dokładny STEP; STL, 3MF i zestawienie części eksportują się ze złożenia |
| Natywne pliki części i złożeń innych programów (poza `.3dm`, który otwiera się jako jedna bryła) | Nie zbudowano |

Zob. [Czego jeszcze nie zbudowano](topic:not-built-yet).
