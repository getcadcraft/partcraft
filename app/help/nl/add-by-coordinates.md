---
title: Schetsgeometrie toevoegen door coördinaten te typen
summary: Gebruik Toevoegen op coördinaten in het schetspaneel om lijnen, hartlijnen, rechthoeken, cirkels en punten op exacte posities te plaatsen, alleen met het toetsenbord.
keywords: coördinaten, getypte invoer, toetsenbordinvoer, numerieke invoer, exacte positie, x y, absolute coördinaten, toegankelijkheid, geen muis
from: 5e6c1656
---

Als u de getallen kent, is typen sneller dan klikken en maatvoeren. **Toevoegen op coördinaten** staat in het rechterpaneel zodra een schets open is. Ook kunt u er een schets mee bouwen zonder aanwijzer.

Coördinaten zijn in millimeters, in de eigen assen van de schets: x naar rechts en y omhoog, gezien vanaf de schets, met (0, 0) in de oorsprong (de rode cirkel met een kruis).

## Een vorm toevoegen

1. Open een schets (zie [Teken uw eerste schets](topic:sketch-basics)).
2. Scrol in het rechterpaneel naar **Toevoegen op coördinaten**.
3. Kies de vorm bij **Toevoegen**: Lijn, Hartlijn, Rechthoek, Cirkel of Punt.
4. Vul de velden in:

| Vorm | Velden |
|---|---|
| Lijn | **Van x, y** en **Naar x, y** |
| Hartlijn | **Van x, y** en **Naar x, y** |
| Rechthoek | **Hoek x, y** en **Tegenoverliggende hoek x, y** |
| Cirkel | **Middelpunt x, y** en **Straal** |
| Punt | **Op x, y** |

5. Kies {{ui:Toevoegen}}, of druk in een veld op {{key:Enter}}.

De vorm verschijnt en de statusbalk meldt bijvoorbeeld: "Rechthoek toegevoegd." De velden worden leeg, klaar voor de volgende. Elke toevoeging is één stap ongedaan maken.

Typ een paar als twee getallen, gescheiden door een komma of een spatie: `0, 0`, `25 -10` of `12.5,40`. Negatieve getallen en decimale getallen zijn toegestaan. Een straal moet groter zijn dan nul. Als iets niet als getal te lezen is, meldt de statusbalk: 'Typ coördinaten als "x, y" en een straal boven nul.'

## Voorbeeld: de contour van een gleufplaat, getypt

1. Open een schets op **Voorvlak**.
2. **Toevoegen**: Rechthoek. **Hoek x, y**: `-50, -30`. **Tegenoverliggende hoek x, y**: `50, 30`. {{key:Enter}}.
3. **Toevoegen**: Cirkel. **Middelpunt x, y**: `-30, 0`. **Straal**: `5`. {{key:Enter}}.
4. **Middelpunt x, y**: `30, 0`. **Straal**: `5`. {{key:Enter}}.
5. Kies {{ui:Schets afsluiten}}, kies dan {{ui:Extruderen}}: een plaat van 100 × 60 met twee gaten van 10 mm.

## Getypte geometrie wordt geplaatst, niet vastgezet

Getypte coördinaten zetten geometrie op de juiste plaats, maar het zijn **geen relaties**. De vormen blijven blauw (onvolledig bepaald) en kunnen bewegen als u ze sleept of een andere maat wijzigt:

- een getypte rechthoek krijgt zijn eigen hoeken en horizontale en verticale relaties, net als een getekende, maar niets koppelt hem aan de oorsprong;
- een getypte lijn heeft geen horizontale of verticale relatie, zelfs als u een horizontale lijn typte;
- het middelpunt van een getypte cirkel is vrij.

Om de schets volledig te bepalen, voegt u daarna maten en relaties toe (zie [Schets volledig bepalen](topic:relations-dimensions)). Selecteer bijvoorbeeld een hoek van de rechthoek en de oorsprong en kies {{ui:• Samenvallend}}, of geef de middelpunten van de cirkels een maat vanaf de oorsprong.

:::note
Zonder aanwijzer komt u hier al een eind: ga met {{key:Tab}} en de pijltjestoetsen naar een vlakrij in de geschiedenis, druk op {{key:Enter}} om die te selecteren, druk op {{key:S}} om te schetsen, voeg hier vormen toe, en bereik bij elke maat **Bewerken**. Sluit af met {{key:Tab}} op {{ui:Schets afsluiten}}. Geometrie selecteren, en daarmee relaties of nieuwe maten toevoegen, vraagt in deze build nog wel een klik of tik.
:::

## Beperkingen

- Bogen kunnen nog niet worden getypt. Teken ze met het gereedschap Boog, of typ een cirkel en gebruik relaties.
- In dit veld zijn geen relatieve coördinaten (vanaf het laatste punt) of poolcoördinaten (lengte en hoek) beschikbaar.
- Getypte geometrie snapt niet naar bestaande punten. Typ dezelfde coördinaten als een bestaand punt en voeg daarna een relatie {{ui:• Samenvallend}} tussen beide toe als ze verbonden moeten blijven.
