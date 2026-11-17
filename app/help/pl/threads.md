---
title: Gwinty na wałach i otworach, rysowane lub modelowane
summary: Nałóż metryczny ISO lub trapezowy gwint na dowolną okrągłą ścianę, wał lub otwór. Zostaw go kosmetycznym do rysunków albo zamodeluj rzeczywisty gwint śrubowy do druku 3D, z luzem, aby wydrukowane części pasowały.
keywords: gwint, gwinty, gwint modelowany, gwint śrubowy, śruba, wał, otwór, gwint zewnętrzny, gwint wewnętrzny, gwint kosmetyczny, gwint metryczny, trapezowy, acme, śruba pociągowa, Tr16x4, M10, druk 3D, drukowanie, luz, pasowanie, lewozwojny, nagwintowany
from: 4f6401cc
---

{{ui:Gwint}} nakłada gwint na okrągłe ściany: na zewnątrz wału (gwint zewnętrzny) lub wewnątrz otworu (gwint wewnętrzny). PartCraft rozpoznaje, który to jest, po ścianie.

Gwint jest na początku **kosmetyczny**: ściana pozostaje gładka, widok rysuje gwint jako przerywane okręgi, a arkusz rysunku go opisuje, na przykład „M10×1.5 - 6g, gwint o długości 20”. Zaznacz **Modelowany**, aby wyciąć rzeczywisty gwint śrubowy w części, do druku 3D lub modelu, który ma dobrze wyglądać.

## Nagwintuj wał lub otwór

1. Zbuduj wał lub otwór o rozmiarze gwintu: wał Ø10 do śruby M10 albo otwór Ø8.5 (średnica wiertła pod gwint) do nakrętki M10.
2. Kliknij okrągłą ścianę, a potem wybierz {{ui:Więcej}} › {{ui:Gwint}}. Bez wybranej okrągłej ściany PartCraft poprosi o kliknięcie ścian, a potem o {{ui:Gotowe}}.
3. W prawym panelu sprawdź **Rozmiar**. **Dopasuj do ściany** wybiera rozmiar samodzielnie: dla wału ten, którego średnica zewnętrzna jest średnicą wału; dla otworu ten, którego średnica rdzenia do niego pasuje.

Gwint zaczyna się na otwartym końcu ściany, tam gdzie część nie biegnie dalej wzdłuż osi: wolny koniec wału lub wlot otworu. **Zacznij od drugiego końca** odwraca to.

## Ustawienia

| Ustawienie | Wybór | Domyślnie |
|---|---|---|
| **Typ** | ISO metryczny (60°), M1.6 do M64 zwykły; trapezowy (Tr, 30°), Tr8×1.5 do Tr60×9 | ISO metryczny |
| **Rozmiar** | Dopasuj do ściany albo jeden rozmiar z listy | Dopasuj do ściany |
| **Cała ściana** | Odznacz, aby podać **Długość (mm)**, mierzoną od początku | Zaznaczone |
| **Zacznij od drugiego końca** | Gwint biegnie od drugiego końca ściany | Wyłączone |
| **Skręt** | Prawy lub lewy | Prawy |
| **Modelowany** | Wycina rzeczywisty gwint śrubowy | Wyłączone |
| **Luz (mm)** | Widoczny, gdy zaznaczono Modelowany: o ile mniejszy jest gwint wału, a o ile większy gwint otworu, dookoła | 0.1 |

Rozmiar, który nie pasuje do ściany, i tak jest zbudowany, przycięty do ściany, a panel to mówi, na przykład „Wał Ø12 mm nie ma średnicy M10 (Ø10 mm)”. Kilka ścian może należeć do jednego elementu Gwint; przy **Dopasuj do ściany** każda dostaje własny rozmiar.

## Gwinty modelowane do druku 3D

Modelowany gwint odpowiada standardowemu profilowi podstawowemu: ISO 68-1 dla gwintów metrycznych (płaskie wierzchołki i dna, boki 60°), ISO 2901 dla trapezowych (boki 30°). **Luz** przesuwa cały profil do środka (wał) lub na zewnątrz (otwór), tak aby wydrukowane części dawały się wkręcić:

- **0,1 do 0,2 mm** pasuje do większości drukarek. Najpierw wydrukuj próbną śrubę i nakrętkę.
- **0** to standardowy profil, dla części obrabianych lub do sprawdzenia pasowania.

Śruba i nakrętka z tym samym luzem nigdy nie dotykają się bokami: szczelina między nimi to dwukrotność luzu, dookoła.

:::tip
Drobne skoki słabo się drukują: M3 i mniejsze albo skok poniżej 0,5 mm są bliskie temu, co dysza 0,4 mm potrafi narysować. Modeluj większe gwinty, a w małych użyj wkładki gwintowanej lub nagwintowanego otworu.
:::

Modelowany gwint jest częścią bryły: eksporty STL, 3MF i STEP go zawierają, a {{ui:Zmierz}} go mierzy. Przeliczanie części z nim trwa dłużej: gwint M10 o długości 20 ma około 150 000 trójkątów.

## Otwory gwintowane

Otwór **Gwintowany (ISO metryczny)** też ma przełącznik **Modelowany** z tym samym **Luzem**. Zob. [Wiercenie otworów i pogłębień w punktach szkicu](topic:holes).

## Gdy gwint się nie buduje

- „Gwint ląduje na okrągłej ścianie (walcu): wał lub otwór.” Wybrana ściana jest płaska albo zakrzywiona w inny sposób.
- „Żaden standardowy rozmiar nie pasuje do okrągłej ściany Ø0.6 mm: wybierz rozmiar.” Dopasowanie do ściany nie znalazło nic w granicach 12 % średnicy ściany. Wybierz **Rozmiar** albo zmień ścianę.
- „Ściana, na której był ten gwint, zniknęła (…). Wskaż ją ponownie.” Wcześniejsza zmiana usunęła ścianę. Kliknij {{ui:Wskaż ściany}} i kliknij ścianę ponownie.

:::note
Gwinty calowe (UNC, UNF), gwinty rurowe, stożkowe, wybiegi gwintu i sfazowane początki gwintu nie są jeszcze zbudowane. Dokładne jądro pokazuje gwint modelowany jako kosmetyczny.
:::
