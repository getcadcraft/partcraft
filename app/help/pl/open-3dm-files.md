---
title: Otwórz model .3dm jako bryłę
summary: Wprowadź siatki, polipowierzchnie i bloki pliku .3dm do PartCraft jako jedną bryłę, którą możesz przeciąć, dodać do niej i szkicować na niej; skąd biorą się trójkąty i co zostaje pominięte.
keywords: 3dm, nurbs, polipowierzchnia, brep, powierzchnie, siatka renderowania, wyciągnięcie, bloki, import, siatka na bryłę, jednostki, zaimportowana bryła
from: 8ae9571b
---

PartCraft otwiera pliki `.3dm` jako **bryły**, tak samo jak [siatkę STL, OBJ lub 3MF](topic:open-meshes). Bryła działa jak każda inna: można ją przeciąć, dodać do niej, nawiercić, rozłożyć we wzór i szkicować na jej płaskich ścianach. Nie ma własnej historii.

## Otwórz plik

1. Wybierz {{ui:Otwórz}} albo naciśnij {{key:Mod+O}} i wskaż plik `.3dm`. Albo upuść go na widok 3D.
2. PartCraft czyta plik i pokazuje, co znalazł: ile obiektów z ścianami wchodzi, ile ścian pochodzi z siatek zapisanych w pliku, a ile PartCraft zamienił na trójkąty, każdą naprawę oraz czy wynik się **zamyka**.
3. Sprawdź **Jednostki w pliku** (plik podaje swoje; jednostka, której PartCraft nie zna, np. jardy, jest zamieniana na milimetry) i **Góra w pliku**.
4. Wybierz {{ui:Otwórz jako bryłę}} albo **Użyj jej do** i {{ui:Dodaj do tej części}}, gdy część ma już elementy.

## Skąd biorą się trójkąty

PartCraft buduje bryły z trójkątów w tej wersji, więc każda powierzchnia w pliku staje się małymi płaskimi ścianami. Dla każdej ściany polipowierzchni (i każdego wyciągnięcia) bierze **siatkę renderowania zapisaną w pliku**, gdy taka jest, a w przeciwnym razie **sam ją zamienia na trójkąty** (płaszczyzny, powierzchnie NURBS, powierzchnie obrotowe, wyciągnięte krzywe i wyciągnięcia, przycięte krawędziami). Ściany jednej polipowierzchni dzielą punkty krawędzi, więc zamknięta polipowierzchnia wchodzi zamknięta. Ściana na rodzaju powierzchni, którego PartCraft jeszcze nie czyta, jest pomijana, a okno dialogowe mówi, ile jest ich i jakiego rodzaju; wynik zwykle wtedy się nie zamyka.

## Wszystko z pliku staje się jedną bryłą

Każda widoczna siatka, polipowierzchnia i wyciągnięcie oraz każde umieszczenie bloku trafia do **jednej** bryły, tam gdzie plik je umieszcza. Obiekty ukryte albo na wyłączonej warstwie są pomijane. Gdy plik zawiera kilka oddzielnych brył, bryła ma kilka kawałków: jeśli chcesz je mieć jako osobne bryły, otwórz każdą z osobnego pliku.

## Co zostaje pominięte (i jest o tym powiedziane)

Krzywe, punkty, chmury punktów, tekst, wymiary, kreskowania i światła są pomijane: bryła przyjmuje tylko ściany. Pomijane są też obiekty SubD (zamień je na siatki albo polipowierzchnie w programie, który utworzył plik), bloki połączone z innych plików oraz kolory, warstwy i nazwy (bryły PartCraft nie mają tu własnych).

## Gdy się nie zamyka

Otwarte polipowierzchnie i powierzchnie (pojedyncza przycięta powierzchnia, kształt z brakującą ścianą) nie mają wnętrza, więc nie mogą być bryłą. Okno dialogowe mówi, ile otworów zostało, i nic nie dodaje. Połącz albo zamknij kształt w programie, który go utworzył, zapisz i otwórz ponownie. Zobacz [Gdy siatka się nie zamyka](topic:open-meshes#when-a-mesh-does-not-close).
