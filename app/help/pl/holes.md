---
title: Wiercenie otworów i pogłębień w punktach szkicu
summary: Umieść punkty szkicu na ścianie, wykonaj proste, pogłębione, pogłębiane stożkowo lub gwintowane (ISO metryczne) otwory w każdym punkcie, ustaw średnicę i głębokość oraz napraw otwory wiercone w złą stronę.
keywords: otwór, kreator otworów, wiercenie, modelowany gwint, druk 3D, pogłębienie walcowe, cbore, pogłębienie stożkowe, csink, gwintowany otwór, gwint, średnica wiertła, gwint metryczny, M6, przelotowy, otwór ślepy, otwór na śrubę, punkty, środki otworów
from: 8e1eef83
---

{{ui:Hole}} wierci jeden otwór w każdym luźnym punkcie szkicu. Luźny punkt to taki, który utworzono narzędziem Punkt, a nie koniec linii ani środek okręgu.

## Wierć otwory w ścianie

1. Kliknij płaską ścianę, w którą wiercisz, potem wybierz {{ui:Sketch on this face}}.
2. Naciśnij {{key:P}} i kliknij, gdzie ma być każdy otwór. Wymiaruj punkty od krawędzi lub początku układu, jeśli ich położenie ma znaczenie (zobacz [W pełni określ szkic](topic:relations-dimensions)).
3. Wybierz {{ui:Exit}}.
4. Wybierz {{ui:Hole}}.

Otwory przechodzą przez część, 6 mm średnicy. Prawy panel pokazuje **Otwory**: ile ich powstało, „jeden na punkt szkicu”.

**Jeden otwór, szybko:** kliknij płaską ścianę, gdzie ma być otwór, i wybierz {{ui:Hole here}} w prawym panelu. PartCraft dodaje w jednym kroku szkic na ścianie z jednym punktem tam, gdzie kliknięto, oraz otwór przez część. Od razu wpisz liczbę i naciśnij {{key:Enter}}, by ustawić jego średnicę. Aby umieścić go dokładnie, otwórz nowy szkic i wymiaruj punkt.

**Który szkic jest używany:** ten, który właśnie zamknięto, albo zaznaczony; w przeciwnym razie najnowszy nieużywany szkic z luźnymi punktami. Jeśli takiego nie ma: „Najpierw zrób szkic z punktami tam, gdzie mają być otwory (Szkic na ścianie, potem Punkt).”

## Ustawienia

| Ustawienie | Wybory | Domyślnie |
|---|---|---|
| **Typ** | Prosty, Pogłębienie walcowe, Pogłębienie stożkowe, Gwintowany (ISO metryczny) | Prosty |
| **Średnica (mm)** | Średnica otworu | 6 |
| **Przelotowy** | Zaznaczone: na wylot przez część. Odznacz dla otworu ślepego | Zaznaczone |
| **Głębokość (mm)** | Widoczne, gdy Przelotowy jest odznaczony | 10 |
| **Średnica pogłębienia ⌀** | Widoczne dla pogłębienia walcowego: średnica szerszego gniazda | 11 |
| **Głębokość pogłębienia** | Widoczne dla pogłębienia walcowego | 6 |
| **Odwróć kierunek** | Wierci na drugą stronę płaszczyzny szkicu | Wyłączone |

Otwory wierci się w materiale, prostopadle do płaszczyzny szkicu. Głębokość otworu ślepego mierzy się od płaszczyzny szkicu; jego dno jest płaskie.

## Otwór pod śrubę z pogłębieniem

1. Wykonaj otwory jak wyżej.
2. Ustaw **Typ** na **Pogłębienie walcowe**.
3. Ustaw **Średnica (mm)** na `6.6` (luz dla śruby M6), **Średnica pogłębienia ⌀** na `11` i **Głębokość pogłębienia** na `6.5`.

Pogłębienie musi być szersze niż otwór („Pogłębienie musi być szersze niż otwór.”) i, w przypadku otworu ślepego, płytsze od niego („Pogłębienie musi być płytsze niż otwór.”).

## Okrąg śrub

Dla otworów równomiernie rozmieszczonych wokół środka zrób **jeden** otwór i powiel go: zaznacz element Otwór, potem wybierz {{ui:Circular}} (zobacz [Wzory i odbicie](topic:patterns-mirror)). Wzór podąża za zmianą rozmiaru otworu.

## Gdy otwory idą w złą stronę

- „Po tej stronie szkicu nie ma czego wiercić. Spróbuj odwrócić kierunek.” Szkic leży po dalszej stronie materiału. Zaznacz **Odwróć kierunek**.
- „Umieść punkty szkicu tam, gdzie mają być otwory (narzędzie Punkt), potem wykonaj otwór.” Szkic nie ma luźnych punktów. Końce linii i środki okręgów się nie liczą.
- „Nie ma jeszcze czego wiercić.” Otwór potrzebuje bryły. Najpierw zrób występ.

## Otwory w złożeniach

Każdy otwór ma oś. W złożeniu **Wyśrodkuj na** może umieścić połączenie na osi otworu, wymienionej jako „Otwór1, otwór 2”, tak że sworzeń albo śruba ustawia się względem niego. Zobacz [Buduj złożenie](topic:build-assembly).

## Otwory pogłębiane stożkowo

Ustaw **Typ** na **Pogłębienie stożkowe**, potem **Średnica pogłębienia stożkowego ⌀** (na powierzchni) i **Kąt pogłębienia stożkowego**: 90° (śruby z łbem stożkowym ISO metrycznym) albo 82° (śruby calowe). Średnicę pogłębienia weź z danych producenta śruby (nieco większą od średnicy łba). Ściana stożka nosi w panelach nazwę „pogłębienie stożkowe”.

## Otwory gwintowane

Ustaw **Typ** na **Gwintowany (ISO metryczny)** i wybierz **Gwint**, M2 do M24 zwykły. Otwór wierci się wiertłem o średnicy z tabeli poniżej (średnica nominalna minus skok, do szeregu wierteł, jak podaje ISO 2306 dla gwintu 6H); pole **Średnica (mm)** nie jest używane. Dla otworu ślepego **Głębokość gwintu (mm)** ustala, jak głęboko sięga gwint.

| Gwint | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Skok | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Średnica wiertła ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Gwint jest najpierw **kosmetyczny**: model ma nawiercony otwór, widok rysuje średnicę zewnętrzną gwintu jako przerywane okręgi, a arkusz rysunku niesie opis jako uwagę, na przykład „4× M8×1.25 - 6H, gwint przelotowy”. STEP eksportuje tylko nawiercony otwór.

Zaznacz **Modelowany**, by wyciąć prawdziwy gwint śrubowy w otworze, do druku 3D. **Luz (mm)** powiększa go tyle samo dookoła, tak by wydrukowana śruba pasowała: 0,1 do 0,2 mm odpowiada większości drukarek. Opis kończy się wtedy „(modelowany)”. Zobacz [Gwinty na wałkach i otworach, rysowane lub modelowane](topic:threads), które również nakłada gwinty na wałki.

:::note
Otwory z pogłębieniem z dwóch stron, gwinty calowe i gwinty rurowe nie są jeszcze zbudowane.
:::
