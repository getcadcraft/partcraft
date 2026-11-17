---
title: Jądro siatkowe
summary: Ta wersja PartCraft buduje każdą część jądrem siatkowym, działającym w przeglądarce. Co to oznacza dla okrągłych kształtów, objętości i plików, jak sprawdzić, że działa, i które elementy czekają na dokładne jądro.
keywords: jądro, siatka, manifold, dokładne, B-rep, ścianki, krzywe, opencascade, occt, zaokrąglenie wymaga dokładnego jądra, jeszcze nie zbudowano, offline, webassembly
from: f931645c
---

Jądro geometrii to silnik, który zamienia historię w bryłę. Ta wersja PartCraft ma jedno: **jądro siatkowe** (manifold-3d). Działa na Twoim komputerze jako mały program WebAssembly i jest gotowe chwilę po otwarciu aplikacji. Nic o Twojej części nie jest nigdzie wysyłane.

| | Jądro siatkowe |
|---|---|
| Kształty okrągłe | Płaskie ścianki. **Krzywe** w panelu części określają, jak gęste są |
| Objętości i pola | Dla bryły ściankowej, nieco zaniżone dla części okrągłych |
| Szkice, wyciągnięcie, wycięcie, obrót, otwory, wzory, lustro, płaszczyzny odniesienia | Tak |
| Zaokrąglenie i fazka | Na prostych krawędziach między płaskimi ścianami; zaokrąglenia, które się spotykają, są ścinane na ukos |
| Powłoka i pochylenie | Powłoka otwiera płaskie ściany (dokładna grubość ścianki); pochylenie przechyla płaskie ściany |
| Eksport | STL, 3MF, STEP (dokładny: okrągłe ściany zapisane na ich prawdziwych powierzchniach; albo ściankowy), rysunek PDF i DXF |
| Widoki rysunkowe | Rysowane z ścianek, łącznie z widokami przekrojów |
| Ściany i krawędzie | Nazwane i rozpoznawane według rodzaju (płaska, walec, stożek, kula, torus; prosta, okrąg), pobierane ze szkiców: korzystają z nich obszary robocze Symulacja, Generatywny i Wytwarzanie, Pomiar, wskazywanie oraz tabela otworów |

Znacznik przy prawym końcu paska stanu pokazuje **Jądro siatkowe**, gdy buduje część.

## Co czeka na dokładne jądro

Dokładne jądro (B-rep) zachowuje prawdziwe okręgi, walce i stożki oraz gładkie zaokrąglenia na dowolnej krawędzi. Na nim powstają przeciągnięcia, lofty, powierzchnie, blachy, żebra, kilka brył oraz import STEP z zakrzywionymi ścianami zachowanymi dokładnie. (Dokładny eksport STEP na nie nie czeka: jądro siatkowe zna prawdziwą powierzchnię każdej ściany ze szkicu i eksport zapisuje te powierzchnie.) Wcześniejsze wersje laboratoryjne PartCraft używały do tego OpenCascade. Jego licencja (LGPL) nie pasuje do tego wydania, w którym każda aplikacja jest na licencji Apache-2.0 i używa wyłącznie bibliotek o swobodnej licencji, więc nie jest dołączona. Dla tego nie ma terminu.

Do tego czasu te elementy po wybraniu pokazują **Jeszcze nie zbudowano**: pasek stanu podaje powód, a podpowiedzi ich przycisków kończą się na „jeszcze nie zbudowano (wymaga dokładnego jądra)”. [Czego jeszcze nie zbudowano](topic:not-built-yet) wymienia każdy z nich wraz z tym, co zrobić zamiast tego.

Część zrobiona nimi we wcześniejszej wersji nadal się otwiera. Te elementy pozostają w historii oznaczone jako jeszcze nie zbudowane (najedź na jeden, aby zobaczyć powód), reszta części się buduje, a zapis zachowuje je bez zmian.

## Okrągłe ściany i krzywe

Jądro siatkowe rysuje okrąg jako wielokąt. **Krzywe** w panelu części określają, ile boków ma pełny okrąg; więcej boków wygląda gładziej i mierzy się bliżej prawdziwej wartości, ale dłużej się buduje. Objętości, pola i odległości z {{ui:Pomiar}} dotyczą tej bryły ściankowej: dla otworu lub wypustki są nieco mniejsze niż dla okrągłego kształtu.

## Online i offline

Jądro siatkowe jest częścią pobieranej aplikacji. Aby pracować bez połączenia, zapisz PartCraft do pracy offline, gdy jesteś online: wybierz {{ui:Zapisz do pracy offline}} na pasku aplikacji i poczekaj, aż pojawi się **Gotowe do pracy offline**. Szczegóły: [Praca offline](common:offline).
