---
title: Rozpoczynanie instrukcji w Illustrate
summary: Obszar roboczy Illustrate tworzy instrukcje z twojego projektu: widoki, rozstrzelone rysunki liniowe z dymkami i listą części, instrukcje krok po kroku, animacje oraz plik 3D. Instrukcja to osobny plik.
keywords: illustrate, instrukcja, ilustracja techniczna, dokumentacja, widok rozstrzelony, lista części, instrukcje, partcraft-manual
from: e447e0ab
---

**Illustrate** to obszar roboczy na dokumenty potrzebne wokół projektu: widoki rozstrzelone z dymkami i listą części, ilustracje liniowe do instrukcji, instrukcje krok po kroku, animacje oraz plik 3D, który klient może otworzyć bez CAD. Wybierz {{ui:Illustrate}} w przełączniku {{ui:Obszar roboczy}} na początku paska narzędzi.

**Instrukcja** to osobny plik (`<name>.partcraft-manual.json`). Zachowuje kopię kształtu każdej części, drzewo produktu i właściwości części oraz odnośnik do miejsca, z którego pochodzą, dzięki czemu możesz pracować nad instrukcją, gdy projekt się rozwija. Gdy projekt się zmienia, [Aktualizuj z projektu](topic:illustrate-update) wprowadza zmiany.

## Rozpoczęcie

Kliknij {{ui:Nowy}} w grupie {{ui:Instrukcja}}, a następnie:

- {{ui:Z otwartej części}}: część otwarta w Design.
- {{ui:Z otwartego złożenia}}: pokazywane zamiast tego, gdy otwarte jest złożenie; jego części, ich położenia, numery części, materiały i widoki rozstrzelone są przenoszone.
- {{ui:Z pliku złożenia…}}: zapisany `.partcraft-asm.json`; PartCraft najpierw buduje jego części.
- {{ui:Z innego pliku…}}: glTF (.glb, .gltf), OBJ, STL lub 3MF. Drzewo i nazwy z pliku są zachowywane, a kopie jednej części (ten sam kształt umieszczony dwukrotnie) stają się jedną częścią z ilością. Pliki STL i OBJ nie podają jednostki, więc zostaniesz o nią zapytany. Pliki STL są odczytywane z osią Z w górę; glTF i 3MF podają własną.

Gdy instrukcja jest otwarta, Illustrate pokazuje własną kopię części instrukcji; część lub złożenie otwarte w Design jest ukryte, dopóki nie wrócisz do Design.

## Zapisywanie i otwieranie

{{ui:Zapisz}} w grupie {{ui:Instrukcja}} (lub {{key:Mod+S}}) zapisuje instrukcję; {{ui:Otwórz}} otwiera ją. Każda zmiana w Illustrate jest jednym krokiem historii instrukcji: {{ui:Cofnij}} i {{ui:Ponów}} działają na instrukcji, dopóki Illustrate jest otwarte.

## Jeszcze nie zbudowano

- Pliki STEP nie otwierają się jeszcze w {{ui:Z innego pliku…}}. Zamiast tego otwórz STEP w Design (wczytuje się jako bryła: zobacz [Otwieranie pliku STEP](topic:import-step)) i zacznij instrukcję {{ui:Z otwartej części}}, albo zapisz go jako glTF, 3MF, OBJ lub STL.
- ModelCraft i BimCraft nie mogą jeszcze przekazać modelu bezpośrednio do Illustrate: zapisz go jako glTF (.glb) i użyj {{ui:Z innego pliku…}}.

Dalej: [Widoki i wygląd](topic:illustrate-views).
