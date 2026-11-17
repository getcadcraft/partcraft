---
title: Powierzchnie przez siatkę krzywych (powierzchnia Gordona)
summary: Jedna gładka powierzchnia przez siatkę krzywych profili i prowadnic, narysowanych w szkicach albo wziętych z krawędzi modelu; zamknięcie do bryły, gdy profile są zamknięte; co jest dokładne, co dopasowane, i komunikaty, gdy siatka nie pasuje.
keywords: styczność, G1, ciągłość styczna, płaszczyzna lustra, powierzchnia Gordona, siatka krzywych, powierzchnia brzegowa, powierzchnia siatkowa, profile, prowadnice, krzywe prowadzące, loft z prowadnicami, szyny prowadzące, poszycie, transfinite, coons, powierzchnia B-sklejana, powierzchnia swobodna
from: ada3cb8b
---

:::note
**Jeszcze nie zbudowano w tej wersji.** Powierzchnia Gordona wymaga dokładnego jądra geometrii, którego ta wersja PartCraft nie ma: buduje każdą część jądrem siatki. [Czego jeszcze nie zbudowano](topic:not-built-yet) mówi, co zrobić zamiast tego. Reszta strony opisuje ją tak, jak działa z dokładnym jądrem.
:::

**Powierzchnia Gordona** to jedna powierzchnia przechodząca przez każdą krzywą siatki: zestaw **profili** biegnących w jednym kierunku i zestaw **prowadnic** biegnących w drugim, krzyżujących się jak nici w sieci. Tak kształtuje się kadłub, błotnik albo uchwyt z kilku krzywych przekroju, które kontrolujesz bezpośrednio. Wymaga **dokładnego jądra** (zobacz [Jądro siatki](topic:solid-kernels)).

## Narysuj siatkę

1. Narysuj **profile**: dwie lub więcej krzywych biegnących obok siebie, na przykład przekroje na równoległych płaszczyznach. Działają linie, łuki, okręgi i splajny, a łańcuch krzywych połączonych końcami liczy się jako jedna krzywa.
2. Narysuj **prowadnice**: dwie lub więcej krzywych biegnących w poprzek profili. Każda prowadnica musi przeciąć każdy profil raz, a każdy profil każdą prowadnicę raz.
3. Upewnij się, że krzywe naprawdę się spotykają. Narysuj szkic prowadnicy tak, by jej krzywa przechodziła przez punkty profili (przyciągnij do rzutowanych punktów albo wpisz współrzędne). Siatka toleruje przerwy do **Tolerancji** (na początek 0,01 mm).

Jeden szkic może zawierać kilka krzywych: każdy oddzielny łańcuch to osobna krzywa. Można więc narysować wszystkie prowadnice w jednym szkicu, na przykład na płaszczyźnie górnej.

## Utwórz powierzchnię

1. Wybierz {{ui:More}} w grupie Elementy, potem {{ui:Gordon surface}}.
2. PartCraft bierze szkice, których nikt jeszcze nie używa: te na płaszczyznach równoległych do pierwszej stają się **profilami**, pozostałe **prowadnicami**. Sprawdź listę po prawej i ustaw każdy szkic na **Profile**, **Prowadnice** albo **Nieużywany**.
3. Aby użyć krawędzi części, kliknij **Wskaż krawędzie jako profile** (albo **jako prowadnice**), kliknij krawędzie w widoku, potem naciśnij Esc.

Wynikiem jest **bryła powierzchniowa**. {{ui:Thicken}} zamienia ją w bryłę, {{ui:Stitch}} zszywa z innymi powierzchniami, a {{ui:Trim surface}} ją przycina.

### Zamknij do bryły

Gdy profile są zamkniętymi krzywymi (okręgami, zamkniętymi splajnami, zamkniętymi łańcuchami), a pierwszy i ostatni profil leżą płasko, każdy w swojej płaszczyźnie, zaznacz **Zamknij do bryły**. Końce zostają zakryte płaskimi ścianami, a zamknięty kształt łączy się, wycina, przecina albo staje się nową bryłą jak każdy inny element. W ten sposób powstaje loft podążający za krzywymi prowadzącymi. To samo działa z zamkniętymi prowadnicami.

## Styczność do płaszczyzny wzdłuż krawędzi

Powierzchnia Gordona przechodzi przez swoje krzywe, ale sama nie dopasowuje nachylenia do tego, co styka. Aby sprawić, by opuszczała krawędź **styczna** do płaszczyzny (G1), na przykład do płaszczyzny lustra, tak by odbita kopia łączyła się bez zagięcia, albo do płaskiej ściany, z której rośnie:

1. Zaznacz element Gordona. Pod **Styczna do** wybierz płaszczyznę w {{ui:Add a plane…}} (Płaszczyzna przednia, Płaszczyzna górna, Płaszczyzna prawa albo płaszczyzna odniesienia) albo wskaż płaską ścianę w widoku i naciśnij {{ui:Add the picked flat face}}.
2. PartCraft znajduje krzywą brzegową siatki leżącą w tej płaszczyźnie, a powierzchnia opuszcza ją styczna do płaszczyzny.

Jeśli płaszczyzna zawiera dwie krzywe brzegowe (podłogę pod oboma końcami), dodaj ją dwa razy: każda kopia bierze kolejną. Do czterech płaszczyzn, po jednej na krawędź.

Raport podaje, wzdłuż której krzywej każda płaszczyzna uczyniła styczność oraz najbardziej stromy kąt, pod jakim powierzchnia wcześniej spotykała tę płaszczyznę. Prowadnice, które już opuszczają tę krzywą styczne do płaszczyzny, są śledzone dokładnie. Prowadnice odchodzące od niej są wyginane w wąskim pasie przy krawędzi, a wartość „podąża za każdą krzywą w granicach” w raporcie mówi, o ile: rysuj prowadnice opuszczające krawędź płasko, by uzyskać dokładne dopasowanie.

## Co jest dokładne, a co dopasowane

Panel mówi, które z tych zastosowano i jak daleko powierzchnia odchodzi od krzywych.

- **Dokładna**: gdy każda krzywa jest wielomianowa (linie, splajny i ich łańcuchy), a prowadnice przecinają wszystkie profile przy tych samych parametrach, powierzchnia jest dokładnie powierzchnią Gordona tych krzywych. Siatka krzywych izoparametrycznych wyciętych z powierzchni dwusześciennej daje z powrotem tę powierzchnię, a cztery proste linie dają płaską lub skręconą (dwuliniową) łatę.
- **Dopasowana**: łuki, okręgi i krawędzie części nie są wielomianowe, a krzywe przecinające się przy różnych parametrach trzeba przeskalować, by przecięcia się zgadzały. Te krzywe są dopasowywane sześciennymi splajnami B w granicach jednej dziesięciomilionowej rozmiaru siatki (około 0,00001 mm dla części 100 mm). Łata walca z łuków i linii zostaje w granicach 0,00001 mm od prawdziwego walca.

Między krzywymi powierzchnia jest tym, co daje metoda: profile stopione w poprzek, plus prowadnice stopione w poprzek, minus stop ich punktów przecięcia. Jest gładka wszędzie, z wyjątkiem miejsc, gdzie krzywa ma ostry narożnik. Tam, gdzie dwie powierzchnie Gordona dzielą krzywą brzegową, łączą się krawędź w krawędź (G0), a nie stycznie.

## Gdy siatka nie pasuje

| Komunikat | Co zrobić |
|---|---|
| „… nie stykają się: mijają się o 0.4 mm” | Spraw, by ten profil i ta prowadnica się przecinały, albo zwiększ **Tolerancję** |
| „… spotyka … 2 razy” | Prowadnica może przeciąć każdy profil tylko raz: podziel zapętloną krzywą albo użyj mniej profili |
| „w innej kolejności” albo „zagina się na siebie” | Dwie prowadnice przecinają się (albo dwa profile). Rodziny muszą biec obok siebie |
| „co najmniej dwa profile i dwie prowadnice” | Dodaj krzywe albo ustaw więcej szkiców na Profile lub Prowadnice |
| „mieszają krzywe otwarte i zamknięte” | Zrób wszystkie profile otwarte albo wszystkie zamknięte (to samo dla prowadnic) |
| „Koniec … nie jest płaski, więc nie można go zakryć” | Narysuj pierwszy i ostatni zamknięty profil, każdy w jednej płaszczyźnie, albo wyłącz Zamknij do bryły |

## Ograniczenia

- Jedna ściana B-sklejana na siatkę: brak styczności G1 ani G2 do sąsiednich powierzchni.
- Szew zamkniętej siatki przy pierwszej prowadnicy jest połączony krawędź w krawędź, ale nie jest styczny.
- Sam element Loft nie ma szyn prowadzących; zamiast tego użyj powierzchni Gordona zamkniętej do bryły.
- Bardzo faliste krzywe albo przecięcia rozmieszczone bardzo nierówno wzdłuż jednej krzywej w porównaniu z drugą mogą wymagać zbyt wielu punktów do dopasowania; element wtedy to zgłasza.
