---
title: Jądro siatkowe
summary: Ta wersja PartCraft buduje każdą część jądrem siatkowym działającym w przeglądarce. Co to oznacza dla okrągłych ścian, objętości i plików, jak poznać, że działa, i które elementy czekają na dokładne jądro.
keywords: jądro, siatka, mesh, manifold, dokładne, b-rep, fasetki, krzywe, opencascade, occt, zaokrąglenie wymaga dokładnego, nie zbudowano, offline, webassembly
from: 68d32d16
---

Jądro geometryczne to silnik, który zamienia historię w bryłę. Ta wersja PartCraft ma jedno: **jądro siatkowe** (manifold-3d). Działa na Twoim komputerze jako mały program WebAssembly i jest gotowe chwilę po otwarciu aplikacji. Nic z Twojej części nie jest nigdzie wysyłane.

| | Jądro siatkowe |
|---|---|
| Okrągłe kształty | Płaskie fasetki. Ustawienie **Krzywe** w panelu części określa, jak drobne |
| Objętości i pola | Policzone dla bryły z fasetkami, na okrągłych częściach nieco za niskie |
| Szkice, wyciągnięcie, wycięcie, obrót, otwory, wzory, lustro, płaszczyzny odniesienia | Tak |
| Zaokrąglenie i fazka | Na prostych krawędziach między płaskimi ścianami; zaokrąglenia, które się spotykają, są ścięte ukośnie |
| Powłoka i pochylenie | Powłoka otwiera płaskie ściany (dokładna grubość ścianki); pochylenie przechyla płaskie ściany |
| Eksporty | STL, 3MF, STEP (z fasetkami), PDF rysunku i DXF |
| Widoki rysunku | Rysowane z fasetek, także widoki przekroju |
| Ściany i krawędzie | Nazwane i znane z rodzaju (płaska, walec, stożek, kula, torus; prosta, okrąg), na podstawie szkiców: korzystają z nich obszary robocze Symulacja, Generatywny i Wytwarzanie, Pomiar, wskazywanie i tabela otworów |

Znacznik blisko prawego końca paska stanu pokazuje **Jądro siatkowe**, gdy buduje część.

## Co czeka na dokładne jądro

Dokładne jądro (B-rep) zachowuje prawdziwe okręgi, walce i stożki, a na nim opierają się gładkie zaokrąglenia na dowolnej krawędzi, przeciągnięcia, lofty, powierzchnie, blacha, żebra, wiele brył, import STEP i dokładny eksport STEP. Wcześniejsze wersje robocze PartCraft używały do tego OpenCascade. Jego licencja (LGPL) nie pasuje do tego wydania, w którym każda aplikacja jest na licencji Apache-2.0 i używa tylko bibliotek o licencjach permisywnych, więc nie jest dołączone. Nic tu nie ma daty.

Do tego czasu te elementy po wybraniu pokazują **Jeszcze nie zbudowano**: pasek stanu podaje powód, a podpowiedzi ich przycisków kończą się słowami „jeszcze nie zbudowano (wymaga dokładnego jądra)”. [Czego jeszcze nie zbudowano](topic:not-built-yet) wymienia każdy z nich wraz z tym, co zrobić zamiast tego.

Część zrobiona z nimi we wcześniejszej wersji nadal się otwiera. Takie elementy zostają w historii oznaczone jako niezbudowane (najedź na jeden, by zobaczyć powód), reszta części się buduje, a zapis zachowuje je bez zmian.

## Okrągłe ściany i Krzywe

Jądro siatkowe rysuje okrąg jako wielokąt. Ustawienie **Krzywe** w panelu części określa, ile boków dostaje pełny okrąg; więcej boków wygląda gładziej i mierzy bliżej prawdziwej wartości, ale buduje się dłużej. Objętości, pola i odległości z {{ui:Pomiar}} dotyczą tej bryły z fasetkami: dla otworu albo występu są nieco mniejsze niż dla kształtu okrągłego.

## Online i offline

Jądro siatkowe jest częścią pobrania samej aplikacji. Aby pracować bez połączenia, zapisz PartCraft do pracy offline, gdy jesteś online: wybierz {{ui:Zapisz do pracy offline}} na pasku aplikacji i poczekaj, aż pojawi się **Gotowe offline**. Szczegóły: [Praca offline](common:offline).
