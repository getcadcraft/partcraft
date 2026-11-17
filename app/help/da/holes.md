---
title: Bor huller og forsænkninger ved skitsepunkter
summary: Sæt punkter i en skitse på en flade, lav enkle, cylindriske eller koniske forsænkninger og gevindskårne (ISO-metriske) huller ved hvert punkt, angiv diameter og dybde, og ret huller, der bores i den forkerte retning.
keywords: hul, hulguide, bore, modelleret gevind, 3D-print, forsænkning, cylindrisk forsænkning, konisk forsænkning, gevindskåret hul, gevind, boreform, metrisk gevind, M6, gennem alt, blindhul, boltehul, punkter, hulcentre
from: 8e1eef83
---

{{ui:Hul}} borer ét hul ved hvert løse punkt i en skitse. Et løst punkt er et, der er lavet med punktværktøjet, ikke enden af en linje eller midten af en cirkel.

## Bor huller i en flade

1. Klik på den flade, der skal bores i, og vælg {{ui:Skitsér på denne flade}}.
2. Tryk {{key:P}}, og klik, hvor hvert hul skal være. Mål punkterne fra kanterne eller origo, hvis deres placering betyder noget (se [Fastlås en skitse fuldt](topic:relations-dimensions)).
3. Vælg {{ui:Afslut}}.
4. Vælg {{ui:Hul}}.

Huller går igennem delen, 6 mm på tværs. Det højre panel viser **Huller**: hvor mange der blev lavet, »ét pr. skitsepunkt«.

**Ét hul, hurtigt:** klik på den flade, hvor hullet skal være, og vælg {{ui:Hul her}} i det højre panel. PartCraft tilføjer en skitse på fladen med ét punkt, hvor du klikkede, og et Hul gennem delen, i ét trin. Skriv et tal med det samme, og tryk {{key:Enter}} for dets diameter. For at placere det præcist: åbn den nye skitse, og mål punktet.

**Hvilken skitse der bruges:** den, du lige lukkede, eller den valgte; ellers den seneste ubrugte skitse, der har løse punkter. Hvis der ikke er nogen: »Lav først en skitse med punkter, hvor hullerne skal være (Skitsér på en flade, og derefter Punkt).«

## Indstillinger

| Indstilling | Valg | Standard |
|---|---|---|
| **Type** | Enkel, Cylindrisk forsænkning, Konisk forsænkning, Gevindskåret (ISO-metrisk) | Enkel |
| **Diameter (mm)** | Hullets diameter | 6 |
| **Gennem alt** | Markeret: helt igennem delen. Fjern markeringen for et blindhul | Markeret |
| **Dybde (mm)** | Vises når Gennem alt er fravalgt | 10 |
| **Forsænkningens ⌀** | Vises for cylindrisk forsænkning: den bredere forsænknings diameter | 11 |
| **Forsænkningsdybde** | Vises for cylindrisk forsænkning | 6 |
| **Omvendt retning** | Borer til den anden side af skitseplanet | Fra |

Huller bores ind i materialet, vinkelret på skitseplanet. Et blindhuls dybde måles fra skitseplanet; bunden er flad.

## Et cylindrisk forsænket boltehul

1. Lav hullerne som ovenfor.
2. Sæt **Type** til **Cylindrisk forsænkning**.
3. Sæt **Diameter (mm)** til `6.6` (luft til en M6-bolt), **Forsænkningens ⌀** til `11` og **Forsænkningsdybde** til `6.5`.

Forsænkningen skal være bredere end hullet (»Forsænkningen skal være bredere end hullet.«) og, for et blindhul, grundere end det (»Forsænkningen skal være grundere end hullet.«).

## En boltecirkel

For huller jævnt fordelt rundt om et centrum laver du **ét** hul og mønstrer det: vælg hulfunktionen, og vælg derefter {{ui:Cirkulær}} (se [Mønster- og spejlfunktioner](topic:patterns-mirror)). Mønsteret følger, når du ændrer hullets størrelse.

## Når huller går den forkerte vej

- »Der er intet at bore på den side af skitsen. Prøv at vende retningen.« Skitsen ligger på den fjerne side af materialet. Sæt kryds ved **Omvendt retning**.
- »Sæt skitsepunkter, hvor hullerne skal være (punktværktøjet), og lav derefter hullet.« Skitsen har ingen løse punkter. Linjeender og cirkelcentre tæller ikke.
- »Der er endnu intet at bore.« Et hul kræver et legeme. Lav først et fremspring.

## Huller i samlinger

Hvert hul har en akse. I en samling kan **Centrér på** sætte et led på et huls akse, listet som »Hul1, hul 2«, så en stift eller bolt-del flugter med den. Se [Byg en samling](topic:build-assembly).

## Koniske forsænkninger

Sæt **Type** til **Konisk forsænkning**, derefter **Forsænkningens ⌀** (ved overfladen) og **Forsænkningsvinkel**: 90° (ISO-metriske skruer med forsænket hoved) eller 82° (tomme-skruer). Tag forsænkningens diameter fra skruefabrikantens data (lidt over skruehovedets diameter). Keglefladen hedder »Konisk forsænkning« i panelerne.

## Gevindskårne huller

Sæt **Type** til **Gevindskåret (ISO-metrisk)**, og vælg **Gevind**, M2 til M24 grovt. Hullet bores i den gevindboredimension fra tabellen nedenfor (nominel diameter minus stigning, til borserien, som ISO 2306 angiver for et 6H-gevind). Feltet **Diameter (mm)** bruges ikke. For et blindhul angiver **Gevinddybde (mm)**, hvor dybt gevindet går.

| Gevind | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Stigning | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Gevindboring ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Gevindet er først **kosmetisk**: modellen har det borede hul, visningen tegner gevindets ydre diameter som stiplede cirkler, og tegningsarket bærer callout'en som en note, fx »4× M8×1.25 - 6H, gevind igennem«. STEP eksporterer kun det borede hul.

Afkryds **Modelleret** for at skære det rigtige spiralgevind ind i hullet, til 3D-print. **Klaring (mm)** gør det så meget større rundt om, så en printet bolt passer: 0.1 til 0.2 mm passer til de fleste printere. Callout'en slutter så med »(modelleret)«. Se [Gevind på aksler og boringer, tegnet eller modelleret](topic:threads), som også sætter gevind på aksler.

:::note
Modborede huller, tommer-gevind og rørgevind er ikke lavet endnu.
:::
