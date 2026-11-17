---
title: Zaprojektuj element BimCraft i zapisz go z powrotem
summary: Część wysłana z BimCraft otwiera się wraz z otaczającym budynkiem, w kolorze szarym i tylko do odczytu. Zmień ją, a następnie zapisz z powrotem, aby BimCraft mógł przyjąć nowy kształt.
keywords: bimcraft, bim, element, wyślij, zapisz z powrotem, powiązanie, budynek, kontekst, sąsiedzi, podparcie, wspornik, ifc, przyjmij
from: 0978fe53
---

## Co zrobisz

Pracujesz nad częścią pochodzącą z modelu BimCraft, na jej miejscu w budynku, i odsyłasz nowy kształt z powrotem.

## Kroki

1. W BimCraft wskaż element i wybierz {{ui:Powiązania części}} › {{ui:Wyślij do PartCraft}}. PartCraft otwiera go jako nową część. Pasek stanu informuje, że to element BIM.
2. Elementy wokół niego (w odległości do 3 m) są narysowane na szaro. Służą jako odniesienie przy projektowaniu. Nie można ich wskazywać ani zmieniać i nie są zapisywane w pliku części.
3. Zmień część jak każdą inną: wytnij, dodaj, wywierć, utwórz lustro. Jej początek i osie są osiami elementu, więc część wraca na swoje miejsce.
4. Wybierz {{ui:Plik}} › {{ui:Eksport}} › {{ui:Zapisz z powrotem w BimCraft}}. Pasek stanu informuje, którą wersję wysłano.
5. W BimCraft element jest oznaczony jako zmieniony, dopóki osoba tam go nie zaakceptuje.

## Co powinno być widoczne

- Część zachowuje swoje powiązanie w pliku. Po ponownym otwarciu pasek stanu nadal informuje, że to element BIM. Szary budynek wraca, dopóki przeglądarka przechowuje pakiet, z którym został wysłany.
- Ponowny zapis wysyła wersję 2, 3 i kolejne. BimCraft zachowuje najnowszą.

## Warto wiedzieć

- Kształt wraca jako siatka w milimetrach, we własnych osiach elementu. Elementy (feature) pozostają w PartCraft.
- {{ui:Zapisz z powrotem w BimCraft}} nic nie robi dla części, która nie pochodzi z BimCraft.
- Część bez bryły nie ma nic do wysłania.
- Obie aplikacje muszą być otwarte w tej samej przeglądarce: nic nie jest przesyłane na serwer, a dwie strony przekazują sobie element.
