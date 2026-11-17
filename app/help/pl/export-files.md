---
title: Eksport do druku, STEP i DXF
summary: Eksportuj część jako STL lub 3MF do druku 3D, jako dokładną bryłę STEP dla innych programów CAD i CAM oraz szkic lub płaską ścianę jako DXF do cięcia laserowego i strumieniem wody.
keywords: eksport, zapisz jako, ifc, bim, zestawy właściwości, stl, 3mf, druk 3d, slicer, step, stp, dokładny step, b-rep, ap242, ap214, cam, warsztat obróbki, frezowanie, dxf, laser, strumień wody, cnc, płaski wzór, profil, siatka, ścianki
from: e1de71d5
---

Eksporty to kopie w innych formatach. Zachowaj też plik `.partcraft.json`: to jedyny plik, który PartCraft może ponownie otworzyć i edytować.

Wszystkie eksporty dotyczą części na ekranie, w milimetrach. W złożeniu STL, 3MF, STEP i Rysunek (PDF) eksportują całe złożenie: zob. [Lista części, widoki rozstrzelone i ruchome części](topic:assembly-bom-explode). Jeśli nie ma jeszcze bryły: „Nie ma jeszcze bryły do wyeksportowania.”

## Do druku 3D: STL lub 3MF

1. Opcjonalnie: w przypadku gładkich, okrągłych powierzchni kliknij puste miejsce, aby nic nie było zaznaczone, i ustaw **Krzywe** na **Dokładne (128 na obrót)** lub **Bardzo dokładne (256 na obrót)** w prawym panelu. STL i 3MF zawsze składają się z trójkątów.
2. Wybierz {{ui:Eksport}}, a następnie {{ui:STL, do druku 3D}} lub {{ui:3MF, do druku 3D}}.
3. Plik zostanie pobrany. Pasek stanu pokazuje na przykład: „Wyeksportowano Part1.stl (binarny, mm, oś Z w górę, 1536 trójkątów).”

Oba formaty mają **oś Z w górę**, tak jak oczekują drukarki i programy slicer. Świat PartCraft ma oś Y w górę, więc eksport obraca część: to, co wskazuje w górę w PartCraft (prostopadle do płaszczyzny Top), wskazuje w górę w slicerze, a część szkicowana na płaszczyźnie Top leży płasko na stole drukarki. W razie potrzeby ustaw ostateczną orientację w slicerze.

3MF to nowszy, mniejszy format, który programy slicer odczytują razem z jednostkami. Użyj STL, jeśli program nie obsługuje 3MF.

Aby najpierw sprawdzić, czy część jest zamknięta, mieści się na stole drukarki i stoi na płaskiej ścianie, użyj {{ui:Eksport}} › {{ui:Sprawdź do druku 3D (STL albo 3MF)…}}: zob. [Przygotowanie części do druku 3D](topic:print-3d).

## Dla innych programów CAD: STEP

Wybierz {{ui:Eksport}}, a następnie {{ui:STEP AP242 (dokładna bryła)}}. Zapisuje część jako jedną dokładną bryłę, w milimetrach, obróconą tak, by oś Z była w górę. Powierzchnie okrągłe są zapisywane jako prawdziwe walce, stożki, kule i tory, a ich krawędzie jako prawdziwe okręgi, dzięki czemu inny program może wybrać otwór jako otwór. Bryła otwarta z pliku STEP zachowuje płaskie ściany, walce, stożki, kule i tory tego pliku, więc także one trafiają do eksportu dokładnie. Ściany bez takiej powierzchni (bok splajnu, modelowany gwint, bryła z siatki STL, OBJ lub 3MF, splajn z pliku STEP, ściany przeciągnięte i obrócone) pozostają płaskimi ściankami w tej samej bryle, a pasek stanu podaje, ile ich jest. Pasek stanu pokazuje na przykład: „Wyeksportowano Flange.step (AP242, dokładna bryła, mm, oś Z w górę): 14 ścian na prawdziwych powierzchniach (10 walcowych, 1 stożkowa, 0 kulistych, 0 toroidalnych), 0 dopasowanych krawędzi krzywych.” Zawiera tylko bryłę: bez historii, szkiców i rysunku. Jeśli drugi program odczytuje tylko AP214, wybierz {{ui:STEP AP214 (dokładna bryła)}}: ta sama bryła w starszym schemacie.

Co jest dokładne, a co nie:

- Płaskie ściany, walce (otwory, występy, zaokrąglenia na prostych krawędziach), stożki (pogłębienia, skosy), kule i tory są dokładne, podobnie jak ich proste, okrągłe i eliptyczne krawędzie. Ustawienie **Krzywe** ich nie zmienia.
- Tam, gdzie dwie okrągłe ściany się przecinają (otwór wywiercony w poprzek wału), krawędź jest gładką krzywą dopasowaną do obu powierzchni z dokładnością do 0.00001 mm; „dopasowane krawędzie krzywe” je liczy.
- Zamknięta pustka wewnątrz części jest zapisywana jako pusta przestrzeń bryły. Kilka oddzielnych brył jest zapisywanych jako kilka brył.
- Złożenie nie jest jeszcze zapisywane jako dokładny STEP: wyeksportuj każdą część osobno.

Sprawdzono go, odczytując pliki z powrotem w OpenCascade, który zgłasza poprawne bryły z objętościami policzonymi ręcznie. Nie został jeszcze otwarty we wszystkich programach CAD i CAM. Jeśli któryś odrzuci plik, {{ui:STEP (ścianki, jądro siatkowe)}} zapisuje ten sam kształt jako płaskie ściany (w osiach własnych PartCraft, oś Y w górę). Daj nam znać przez {{ui:Pomoc}} › {{ui:Zgłoś problem}}.

Do obróbki obszar roboczy Manufacture zapisuje też dokładną bryłę we własnych współrzędnych roboczych ustawienia: zob. [Tworzenie ścieżek narzędzi i G-code](topic:manufacture#exact-step-for-the-shop).

## Dla programów BIM: IFC ze wszystkimi właściwościami

Wybierz {{ui:Eksport}}, a następnie {{ui:IFC 4 (ze wszystkimi właściwościami)}}. Zapisuje część jako element IFC 4 dla modeli budynków i instalacji, jej kształt jako trójkąty (oś Z w górę, w milimetrach), a to, co PartCraft o niej wie, jako zestawy właściwości:

| Zestaw właściwości | Zawiera |
|---|---|
| **PartCraft_Part** | Nazwę, materiał i jego gęstość, aktywną konfigurację, liczbę brył; w złożeniu także numer części i opis |
| **PartCraft_Parameters** | Każdy parametr części z jego wartością; wyrażenie formuły i notatka są w opisie właściwości |
| **PartCraft_TitleBlock** | Pola tabliczki rysunkowej, które wypełniono (tytuł, numer rysunku, rewizja, firma, narysował, sprawdził i zatwierdził, data, wykończenie, tolerancja ogólna), oraz format arkusza |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Objętość, pole powierzchni, masę (z materiałem) i wymiary gabarytowe |

Materiał jest dołączany jako materiał IFC, a numer rysunku jest znacznikiem elementu. W złożeniu każda część jest zapisywana raz jako typ z jej właściwościami, a każda kopia jest umieszczona tam, gdzie ustawia ją złożenie, z własnymi wartościami w **PartCraft_Instance**: nazwą, numerem pozycji na liście części oraz tym, czy jest częścią nieruchomą (osadzoną).

## Dla profili do lasera, strumienia wody lub CNC: DXF

Są dwa rodzaje DXF, oba w wersji R12, którą otworzy każdy program CAD i CAM:

### Szkic

1. Zaznacz szkic w historii (lub miej go otwartego).
2. Wybierz {{ui:Eksport}}, a następnie {{ui:DXF szkicu albo płaskiej ściany}}. (Prawy panel szkicu ma też {{ui:Eksportuj jako DXF}}.)

Otrzymasz plik `<part> - <sketch>.dxf` we własnych współrzędnych szkicu: linie, prawdziwe łuki i okręgi na warstwie **PROFILE**, geometria konstrukcyjna na **CONSTRUCTION**, luźne punkty na **POINTS**.

### Płaska ściana bryły

1. Kliknij płaską ścianę w widoku (na przykład górę płyty z otworami).
2. Wybierz {{ui:Eksportuj ścianę jako DXF}} w prawym panelu albo {{ui:Eksport}}, a następnie {{ui:DXF szkicu albo płaskiej ściany}}.

Otrzymasz plik `<part> - face.dxf`: kontur ściany i każdy otwór w niej. Okrągły otwór (pełny okrąg tam, gdzie walec styka się ze ścianą: wywiercony otwór lub otwór z otwartego pliku STEP) jest zapisywany jako prawdziwy okrąg o własnym środku i promieniu otworu. Każdy inny kontur jest zamkniętą polilinią, a jej zaokrąglone krawędzie (narożniki zaokrągleń, rowki, łuki) są zapisane jako ścianki, więc jeśli narzędzie dokładnie je śledzi, najpierw ustaw **Krzywe** na Dokładne. Pasek stanu podaje, ile jest konturów, ile z nich to prawdziwe okręgi oraz pole powierzchni ściany.

Jeśli nie zaznaczono ani szkicu, ani płaskiej ściany: „Otwórz lub zaznacz szkic albo wskaż płaską ścianę, aby wyeksportować DXF.”

## Rysunek

Rysunek PDF ma własną instrukcję: [Tworzenie arkusza rysunkowego](topic:drawing-pdf).

## Formaty niedostępne

Formaty glTF, OBJ, IGES i Parasolid nie są eksportowane w tej wersji. DWG zapisuje tylko pakiet wariantów, jako arkusz rysunkowy: zob. [Tworzenie pakietu wariantów z konfiguracji](topic:variant-pack). Zob. [Formaty plików](topic:file-formats).
