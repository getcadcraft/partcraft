---
title: Przygotowanie części do druku 3D
summary: Sprawdź, czy część lub złożenie jest zamknięte, mieści się w drukarce i stoi na podstawie, a następnie pobierz je jako STL lub 3MF dla twojego slicera.
keywords: druk 3D, drukowanie 3D, drukarka, drukuj, slicer, stl, 3mf, szczelny, zamknięty, manifold, stół, rozmiar stołu, platforma, nawis, podpory, podstawa, milimetry, eksport, gwinty, luz
from: 90d81dff
---

Slicer potrzebuje zamkniętego kształtu: bez dziur w powierzchni, z każdą ścianą skierowaną na zewnątrz i bez przenikania przez siebie. Części zbudowane w PartCraft są zamknięte z założenia, więc sprawdzenie głównie pokazuje rozmiar, to, czy część mieści się na stole drukarki, czy stoi na płaskiej ścianie i ile z niej wystaje nawisem.

## Sprawdź i pobierz

1. Opcjonalnie, raz: ustaw stół drukarki w {{ui:Ustawienia}} › PartCraft › **Drukarka 3D**: szerokość, głębokość i wysokość w milimetrach. Zostaw puste, aby pominąć to sprawdzenie.
2. Wybierz {{ui:Eksport}}, a potem {{ui:Sprawdź do druku 3D (STL albo 3MF)…}}.

   Okno mówi „Gotowe do druku” albo „Nie gotowe do druku”, wymienia wszystko, co jest źle, i podaje rozmiar na stole (X × Y × Z, w milimetrach), objętość i liczbę trójkątów.

3. Kliknij {{ui:Pobierz 3MF}} albo {{ui:Pobierz STL}}. Plik jest taki sam jak {{ui:Eksport}} › {{ui:3MF, do druku 3D}} albo {{ui:STL, do druku 3D}}.

W złożeniu sprawdzenie i pliki obejmują całe złożenie, każdą kopię tam, gdzie jest umieszczona.

Część jest sprawdzana tak, jak stoi w chwili eksportu: to, co w PartCraft wskazuje w górę (prostopadle do płaszczyzny Top), wskazuje w górę na stole. Część naszkicowana na płaszczyźnie Top leży płasko.

## Co może powiedzieć okno

**Nie gotowe do druku** (slicer może je odrzucić albo wydrukować źle): dziury (krawędzie, przy których ściana jest tylko po jednej stronie), krawędzie wspólne dla trzech lub więcej ścian, ściany skierowane w przeciwne strony, bryła wywrócona na zewnątrz albo bryła przenikająca przez siebie. Część zbudowana w PartCraft nigdy nie powinna ich pokazywać; jeśli pokaże, zob. [Rozwiązywanie problemów](topic:troubleshooting).

**Ostrzeżenia** (wydrukuje się, ale sprawdź najpierw):

- **Większe niż stół drukarki**, nawet obrócone o 90° na stole.
- **Nic nie leży płasko na dole**: obróć część w slicerze tak, by ściana spoczywała na stole, bo inaczej będą potrzebne podpory albo tratwa.
- **Odchyla się o więcej niż 45° od pionu**: te ściany potrzebują podparcia, stojąc tak, jak są. Inne ułożenie może wymagać mniej.
- **Oddzielne bryły nachodzą na siebie** albo **stykają się ścianami**: slicery zwykle je scalają. {{ui:Połącz}} w Elementy › {{ui:Więcej}} łączy je w jedną bryłę. Zob. [Bryły](topic:bodies).
- **Mniej niż 1 mm w dowolnym wymiarze**: sprawdź rozmiary części.

## Gwinty, które się drukują

Modelowany gwint drukuje się jako prawdziwy gwint. Ustaw trochę **Luzu**, aby wydrukowana śruba weszła w wydrukowaną nakrętkę: zob. [Gwinty](topic:threads).

## Gładkie okrągłe ściany

STL i 3MF składają się z trójkątów. Aby uzyskać gładsze okrągłe ściany, kliknij puste miejsce, tak aby nic nie było zaznaczone, i ustaw **Krzywe** na **Dokładne (128 na obrót)** albo **Bardzo dokładne (256 na obrót)** w prawym panelu przed eksportem. Więcej trójkątów oznacza większe pliki.

## Większa, mniejsza albo w częściach

- **Eksport › Skalowanie do druku (STL albo 3MF)…** zapisuje część przeskalowaną osobno dla każdej osi, bez zmieniania jej: **naddatek na skurcz** w procentach (rozmiar × (1 + s) albo dokładny rozmiar ÷ (1 − s)) dla modelu odlewniczego, albo zwykłe współczynniki, względem środka, najniższego narożnika, środka dołu albo początku układu.
- **Eksport › Podział do druku (zip z częściami)…** tnie część, która jest za duża na twoją drukarkę, na kawałki, z których każdy mieści się na podanym stole. Kawałki łączą się kołkami, wpustami, jaskółczymi ogonami, otworami na kołki albo gniazdami na magnesy (z luzem, który ustawisz). Każdy kawałek i złącze są numerowane, a kawałki zapisują się jako STL albo 3MF w zip z arkuszem złożenia. Sama część się nie zmienia.

## Nie sprawdzane

Grubość ścianek, detale mniejsze niż twoja dysza potrafi narysować i sposób, w jaki slicer umieści podpory. Pokazuje je twój slicer.
