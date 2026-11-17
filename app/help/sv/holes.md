---
title: Borra hål och förborrningar vid skisspunkter
summary: Lägg punkter i en skiss på en yta, gör enkla, förborrade, försänkta eller gängade (ISO metriska) hål vid varje punkt, ange diameter och djup, och åtgärda hål som borras åt fel håll.
keywords: hål, hålguide, borra, modellerad gänga, 3D-utskrift, förborrning, försänkning, gängat hål, gänga, gängborr, metrisk gänga, M6, genom alla, blindhål, bulthål, punkter, hålcentrum
from: 8e1eef83
---

{{ui:Hål}} borrar ett hål vid varje lös punkt i en skiss. En lös punkt är en som skapats med punktverktyget, inte änden på en linje eller mitten på en cirkel.

## Borra hål i en yta

1. Klicka på den plana ytan att borra i, och välj sedan {{ui:Skiss på denna yta}}.
2. Tryck på {{key:P}} och klicka där varje hål ska vara. Sätt mått på punkterna från kanterna eller origo om deras position spelar roll (se [Definiera en skiss helt](topic:relations-dimensions)).
3. Välj {{ui:Avsluta}}.
4. Välj {{ui:Hål}}.

Hålen går genom delen, 6 mm i diameter. Den högra panelen visar **Hål**: hur många som skapades, ”ett per skisspunkt”.

**Ett hål, snabbt:** klicka på den plana ytan där hålet ska vara och välj {{ui:Hål här}} i den högra panelen. PartCraft lägger till en skiss på ytan med en punkt där du klickade och ett Hål genom delen, i ett steg. Skriv ett tal direkt och tryck på {{key:Enter}} för dess diameter. För att placera det exakt, öppna den nya skissen och sätt mått på punkten.

**Vilken skiss som används:** skissen du just stängde eller den markerade; annars den senaste oanvända skissen som har lösa punkter. Om det inte finns någon: ”Gör först en skiss med punkter där hålen ska vara (Skiss på en yta, sedan Punkt).”

## Inställningar

| Inställning | Val | Standard |
|---|---|---|
| **Typ** | Enkelt, Förborrning, Försänkning, Gängat (ISO metriskt) | Enkelt |
| **Diameter (mm)** | Hålets diameter | 6 |
| **Genom alla** | Ikryssad: rakt genom delen. Avmarkera för ett blindhål | Ikryssad |
| **Djup (mm)** | Visas när Genom alla är avmarkerad | 10 |
| **Förborrningens ⌀** | Visas för Förborrning: den bredare urtagets diameter | 11 |
| **Förborrningens djup** | Visas för Förborrning | 6 |
| **Omvänd riktning** | Borrar till andra sidan av skissplanet | Av |

Hål borras in i materialet, rätvinkligt mot skissplanet. Ett blindhåls djup mäts från skissplanet; dess botten är plan.

## Ett förborrat bulthål

1. Gör hålen som ovan.
2. Ställ in **Typ** på **Förborrning**.
3. Ställ in **Diameter (mm)** till `6.6` (lufthål för en M6-bult), **Förborrningens ⌀** till `11` och **Förborrningens djup** till `6.5`.

Förborrningen måste vara bredare än hålet (”Förborrningen måste vara bredare än hålet.”) och, för ett blindhål, grundare än det (”Förborrningen måste vara grundare än hålet.”).

## En bultcirkel

För hål jämnt fördelade runt ett centrum, gör **ett** hål och mönstra det: markera hålfunktionen och välj {{ui:Cirkulärt}} (se [Mönster- och spegelfunktioner](topic:patterns-mirror)). Mönstret följer när du ändrar hålets storlek.

## När hål går åt fel håll

- ”Det finns inget att borra på den sidan av skissen. Prova att vända riktningen.” Skissen ligger på materialets andra sida. Bocka i **Omvänd riktning**.
- ”Lägg skisspunkter där hålen ska vara (punktverktyget), gör sedan hålet.” Skissen har inga lösa punkter. Linjeändar och cirkelcentrum räknas inte.
- ”Det finns inget att borra i ännu.” Ett hål kräver en solid. Gör en upphöjning först.

## Hål i sammanställningar

Varje hål har en axel. I en sammanställning kan **Centrera på** placera en led på ett håls axel, listad som ”Hole1, hole 2”, så att en pinne eller bult passar in mot den. Se [Bygg en sammanställning](topic:build-assembly).

## Försänkta hål

Ställ in **Typ** på **Försänkning**, sedan **Försänkningens ⌀** (vid ytan) och **Försänkningsvinkel**: 90° (ISO metriska plattskruvar) eller 82° (tumskruvar). Ta försänkningens diameter från skruvtillverkarens data (lite större än skruvhuvudets diameter). Konens yta heter ”försänkning” i panelerna.

## Gängade hål

Ställ in **Typ** på **Gängat (ISO metriskt)** och välj **Gänga**, M2 till M24 grov. Hålet borras med gängborrens storlek från tabellen nedan (nominell diameter minus stigning, till borrserien, så som ISO 2306 anger för en 6H-gänga); rutan **Diameter (mm)** används inte. För ett blindhål anger **Gängdjup (mm)** hur djupt gängan går.

| Gänga | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Stigning | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Gängborr ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Gängan är till en början **kosmetisk**: modellen har det borrade hålet, vyn ritar gängans ytterdiameter som streckade cirklar, och ritningsbladet bär anvisningen som en notering, till exempel ”4× M8×1.25 - 6H, genomgående gänga”. STEP exporterar endast det borrade hålet.

Bocka i **Modellerad** för att skära in den verkliga spiralgängan i hålet, för 3D-utskrift. **Spel (mm)** gör det lika mycket större runt om, så att en utskriven bult passar: 0.1 till 0.2 mm passar de flesta skrivare. Anvisningen slutar sedan med ”(modellerad)”. Se [Gängor på axlar och borrningar, ritade eller modellerade](topic:threads), som också lägger gängor på axlar.

:::note
Motförborrade hål, tumgängor och rörgängor finns inte ännu.
:::
