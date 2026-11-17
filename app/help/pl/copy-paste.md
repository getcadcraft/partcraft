---
title: Kopiuj, wklej i duplikuj
summary: Kopiuj geometrię szkicu, elementy i części złożenia, wklejaj w miejscu kliknięcia lub w tym samym miejscu, duplikuj w jednym kroku oraz zobacz, co idzie wraz z kopią, a co nie.
keywords: kopiuj, wklej, wytnij, duplikuj, schowek, wklej w miejscu, zaznacz wszystko, odznacz wszystko, usuń, ctrl c, ctrl v, ctrl d, instancja, komponent, kopiuj szkic, kopiuj element, kopiuj część
from: 611307d7
---

Grupa {{ui:Edytuj}} na pasku narzędzi zawiera {{ui:Cofnij}}, {{ui:Ponów}}, {{ui:Kopiuj}}, {{ui:Wklej}} oraz menu {{ui:Więcej}} z {{ui:Wytnij}}, {{ui:Kopiuj}}, {{ui:Wklej}}, {{ui:Wklej w miejscu}}, {{ui:Duplikuj}}, {{ui:Usuń}}, {{ui:Zaznacz wszystko}} i {{ui:Odznacz wszystko}}, każde z własnym klawiszem. To, co się kopiuje, zależy od miejsca: geometria w otwartym szkicu, element w historii albo część w złożeniu.

Wyszarzona pozycja nie może teraz działać. Najedź na nią: podpowiedź mówi dlaczego, na przykład „Najpierw zaznacz geometrię szkicu” albo „Schowek zawiera Sketch2 i Extrude2: elementy wklejają się do historii, więc najpierw wyjdź ze szkicu”.

| Działanie | Klawisz | W szkicu | W historii | W złożeniu |
|---|---|---|---|---|
| Kopiuj | {{key:Mod+C}} | Zaznaczone punkty i krzywe | Zaznaczony szkic, wyciągnięcie, obrót lub otwór (wraz ze swoim szkicem) | Zaznaczona część |
| Wytnij | {{key:Mod+X}} | Kopiuj, potem usuń je | Kopiuj, potem usuń element | Kopiuj, potem usuń część |
| Wklej | {{key:Mod+V}} | Kopia podąża za wskaźnikiem; kliknij, gdzie ma trafić | Dodaje kopię na koniec historii | Nowa kopia obok pozostałych części |
| Wklej w miejscu | {{key:Mod+Shift+V}} | W tych samych współrzędnych | Tak samo jak Wklej | W tym samym miejscu co skopiowana część |
| Duplikuj | {{key:Mod+D}} | Kopiuj i przesuń za jednym razem; schowek pozostaje bez zmian | Druga kopia zaraz po tym elemencie | Druga kopia obok pozostałych części |
| Usuń | {{key:Delete}} | Zaznaczenie | Element (pyta, jeśli inne go używają) | Część lub połączenie |
| Zaznacz wszystko | {{key:Mod+A}} | Wszystko w szkicu | Niedostępne | Niedostępne |
| Odznacz wszystko | {{key:Esc}} | Czyści zaznaczenie | Czyści zaznaczenie i wybory | Czyści zaznaczenie |

Każde wklejenie, duplikat i wycięcie to jeden krok na liście cofnięć: {{key:Mod+Z}} go cofa, {{key:Mod+Y}} przywraca.

## W szkicu

1. Zaznacz to, co chcesz skopiować: kliknij, {{key:Shift}}+kliknięcie dla kolejnych, przeciągnij okno albo naciśnij {{key:Mod+A}}, aby zaznaczyć wszystko.
2. Naciśnij {{key:Mod+C}} albo wybierz {{ui:Kopiuj}}. Pasek stanu mówi, co skopiowano.
3. Naciśnij {{key:Mod+V}} albo wybierz {{ui:Wklej}}. Przerywana kopia podąża za wskaźnikiem, trzymana za środek. Przyciąga się do punktów: aby umieścić środek skopiowanego okręgu na punkcie, kliknij ten punkt.
4. Kliknij, gdzie ma trafić. Wklejona geometria pozostaje zaznaczona, więc możesz ją od razu przeciągnąć albo dodać do niej relacje. {{key:Esc}} anuluje wklejanie.

Wraz z kopią przechodzi:

- Skopiowana linia, okrąg lub łuk zabiera własne punkty końcowe i środek.
- Relacje i wymiary **między skopiowanymi elementami** przechodzą: skopiowany prostokąt nadal jest prostokątem, z tymi samymi wymiarami.
- Relacje **do geometrii, której nie skopiowano**, oraz do początku układu są porzucane. Pasek stanu je liczy: „2 relacje do geometrii spoza kopii nie przejdą”. Wklejona kopia może więc się swobodnie przesuwać, dopóki nie powiążesz jej relacjami albo wymiarami.
- Punkt stały pozostaje stały, w swoim nowym położeniu.

{{ui:Wklej w miejscu}} umieszcza kopię dokładnie na współrzędnych oryginału, w tym szkicu albo w innym. To wygodne do przeniesienia profilu z jednego szkicu do drugiego. W tym samym szkicu kopia leży na oryginale; przeciągnij ją na bok.

{{ui:Duplikuj}} ({{key:Mod+D}}) kopiuje zaznaczenie i od razu zaczyna je umieszczać, nie ruszając tego, co jest w schowku.

:::tip
Aby powtórzyć środek otworu albo rowek kilka razy, skopiuj go raz i wklej kilka razy: każde {{key:Mod+V}} rozpoczyna nową kopię, która podąża za wskaźnikiem.
:::

## W historii

1. Kliknij szkic, wyciągnięcie, obrót lub otwór w historii.
2. {{key:Mod+C}} kopiuje go. Element oparty na szkicu jest kopiowany razem ze swoim szkicem.
3. {{key:Mod+V}} dodaje kopię na koniec historii (przy pasku cofania, gdy się cofnąłeś), z nowymi nazwami, na przykład Sketch3 i Extrude2.

Kopia leży na tej samej płaszczyźnie lub ścianie co oryginał, więc buduje się na nim i część wygląda tak samo. Aby przesunąć kopię, zaznacz nowy szkic i zmień jego płaszczyznę w prawym panelu. Możesz też otworzyć go i przeciągnąć albo ponownie wymiarować profil.

- Wklejanie do **innej części**: otwórz tę część i naciśnij {{key:Mod+V}}. Gdy szkic kopii leżał na ścianie, której ta część nie ma, trafia na płaszczyznę Front, a pasek stanu o tym informuje.
- {{ui:Duplikuj}} kopiuje i wkleja w jednym kroku, w obrębie tej samej części.
- {{ui:Wytnij}} kopiuje element, a potem go usuwa (najpierw pyta, jeśli inne elementy go używają).

Wzorów, lustrzanych odbić, zaokrągleń, fazek, powłok i zaimportowanych brył nie można kopiować: są zawieszone na krawędziach, ścianach lub elementach wybranych w tej części. Zamiast tego skopiuj szkic albo element, na którym są zbudowane, albo powiel je wzorem {{ui:Liniowy}} lub {{ui:Kołowy}}.

## W złożeniu

1. Kliknij część w widoku albo na liście po lewej.
2. Wybierz {{ui:Duplikuj}} ({{key:Mod+D}}), albo {{key:Mod+C}}, a następnie {{key:Mod+V}}.

Nowa kopia to **ta sama część**: edytujesz jedną, a zmienia się każda kopia. Pojawia się 20 mm na prawo od wszystkiego, co już jest w złożeniu, obrócona tak jak kopia, i tam pozostaje, dopóki połączenie jej nie ustawi. {{ui:Wklej w miejscu}} ({{key:Mod+Shift+V}}) umieszcza ją dokładnie tam, gdzie jest skopiowana część. Połącz ją, aby ją przesunąć (odsunięcie połączenia suwakowego wypycha ją wzdłuż).

Wklejenie części skopiowanej z innego złożenia przenosi tę część, tak samo jak {{ui:Wstaw}} z jej pliku. {{ui:Dodaj kopię}} w grupie Złożenie robi to samo co {{ui:Duplikuj}} i działa, gdy nic nie jest zaznaczone (kopiuje ostatnią część).

## Schowek

- To schowek PartCraft, a nie komputera: nie możesz wkleić geometrii PartCraft do innego programu ani tekstu do widoków PartCraft.
- Jest przechowywany w tej przeglądarce, więc inna karta PartCraft może wkleić to, co skopiowano. Jest odczytywany ponownie i sprawdzany jak otwarty plik. Wszystko uszkodzone albo z innej wersji zostaje odrzucone.
- Część z dużym zaimportowanym plikiem STEP może być za duża, by przeglądarka ją zachowała. Wtedy wkleja się tylko w tej karcie.
- W polu liczbowym albo w wyszukiwarce pomocy {{key:Mod+C}} i {{key:Mod+V}} kopiują i wklejają tekst jak zwykle.

Na arkuszu rysunku kopiowanie i wklejanie nie są jeszcze dostępne. {{ui:Usuń}} i {{ui:Odznacz wszystko}} działają na zaznaczonym symbolu. Zobacz [Czego jeszcze nie zbudowano](topic:not-built-yet).
