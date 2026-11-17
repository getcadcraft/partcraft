---
title: Gängor på axlar och hål, ritade eller modellerade
summary: Lägg en ISO-metrisk eller trapetsgänga på valfri rund yta, en axel eller ett hål. Behåll den som kosmetisk för ritningar, eller modellera den verkliga spiralgängan för 3D-utskrift, med ett spel så att utskrivna delar passar ihop.
keywords: gänga, gängor, modellerad gänga, spiralformad, helix, skruv, bult, mutter, axel, hål, yttergänga, innergänga, kosmetisk gänga, metrisk gänga, trapetsgänga, acme, ledskruv, Tr16x4, M10, 3D-utskrift, utskrift, spel, passning, vänsterlindad, gängat
from: 4f6401cc
---

{{ui:Gänga}} sätter en gänga på runda ytor: utsidan av en axel (en yttergänga) eller insidan av ett hål (en innergänga). PartCraft avgör vilken det är från ytan.

En gänga är först **kosmetisk**: ytan förblir slät, vyn ritar gängan som streckade cirklar och ritningsbladet antecknar den, till exempel "M10×1.5 - 6g, gänga 20 lång". Bocka för **Modellerad** för att skära in den verkliga spiralgängan i delen, för 3D-utskrift eller en modell som måste se rätt ut.

## Gänga en axel eller ett hål

1. Bygg axeln eller hålet i gängans storlek: en Ø10-axel för en M10-bult, eller ett Ø8.5-hål (borrdiametern) för en M10-mutter.
2. Klicka på den runda ytan och välj {{ui:Mer}} › {{ui:Gänga}}. Om ingen rund yta är markerad frågar PartCraft efter ytorna, och sedan {{ui:Klar}}.
3. Kontrollera **Storlek** i högerpanelen. **Anpassa till ytan** väljer storleken själv: för en axel den storlek vars yttre diameter är axelns; för ett hål den storlek vars inre diameter passar.

Gängan börjar vid ytans öppna ände, där delen inte fortsätter längs axeln: axelns fria ände, hålets mynning. **Börja vid den andra änden** vänder på det.

## Inställningar

| Inställning | Val | Standard |
|---|---|---|
| **Form** | ISO-metrisk (60°), M1.6 till M64 grov; trapetsgänga (Tr, 30°), Tr8×1.5 till Tr60×9 | ISO-metrisk |
| **Storlek** | Anpassa till ytan, eller en storlek från listan | Anpassa till ytan |
| **Hela ytan** | Avmarkera den för att ange en **Längd (mm)**, mätt från starten | Bockad |
| **Börja vid den andra änden** | Gängan går från den andra änden av ytan | Av |
| **Gängriktning** | Högerlindad eller vänsterlindad | Högerlindad |
| **Modellerad** | Skär in den verkliga spiralgängan | Av |
| **Spel (mm)** | Visas när Modellerad är bockad: hur mycket mindre en axels gänga är, och hur mycket större en borrs, runt om | 0.1 |

En storlek som inte passar ytan byggs ändå, skuren till ytan, och panelen säger det, till exempel "En Ø12 mm-axel är inte M10:s Ø10 mm". Flera ytor kan dela en gängfunktion; med **Anpassa till ytan** får var och en sin egen storlek.

## Modellerade gängor för 3D-utskrift

En modellerad gänga följer standardprofilen: ISO 68-1 för metriska gängor (platta toppar och rötter, 60°-flanker), ISO 2901 för trapetsgängor (30°-flanker). **Spelet** flyttar hela profilen in (en axel) eller ut (ett hål) så att utskrivna delar går ihop:

- **0.1 till 0.2 mm** passar de flesta skrivare. Skriv först ut en testbult och mutter.
- **0** är standardprofilen, för delar som bearbetas eller för att kontrollera en passning.

En bult och en mutter med samma spel rör aldrig varandra längs flankerna: glappet mellan dem är dubbla spelet, runt om.

:::tip
Fina stigningar skrivs ut dåligt: M3 och mindre, eller en stigning under 0.5 mm, ligger nära vad ett 0.4 mm munstycke klarar. Modellera större gängor, och använd en värmeinsats eller ett gängat hål för små.
:::

En modellerad gänga är en del av solidet: STL-, 3MF- och STEP-exporter bär den, och {{ui:Mät}} mäter den. Den gör delen tyngre att bygga om: en M10-gänga som är 20 lång är cirka 150,000 trianglar.

## Gängade hål

Ett **Gängat (ISO-metriskt)** hål har också en brytare **Modellerad**, med samma **Spel**. Se [Borra hål och försänkningar vid skisspunkter](topic:holes).

## När en gänga inte byggs

- "En gänga sätts på en rund yta (en cylinder): en axel eller ett hål." Den valda ytan är plan eller krökt på något annat sätt.
- "Ingen standardstorlek passar en rund yta med Ø0.6 mm: välj en storlek." Anpassa till ytan hittade inget inom 12 % av ytan. Välj en **Storlek**, eller byt yta.
- "En yta den här gängan satt på är borta (…). Välj den igen." En tidigare ändring tog bort ytan. Klicka på {{ui:Välj ytor}} och klicka på ytan igen.

:::note
Tumgängor (UNC, UNF), rörgängor, koniska gängor, gängutlopp och avfasade gängstarter finns inte ännu. Den exakta kärnan visar en modellerad gänga som kosmetisk.
:::
