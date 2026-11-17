---
title: Nesta plana delar på plåtar
summary: Lägg ut plana delar på plåtar eller en rulle med så lite spill som PartCraft kan hitta, aldrig närmare än det avstånd du anger, och spara layouten som en DXF för lasern, plasmat, vattenskärningen eller fräsen.
keywords: nesting, nesta, plåt, rulle, laser, plasma, vattenskärning, fräs, skärning, utnyttjande, materialanvändning, spill, avstånd, snittbredd, trådriktning, valsriktning, dxf, plattmönster, konturer
from: 8dcce1a6
---

**Nesting** placerar många plana delar på en plåt så att så lite material som möjligt blir över. PartCraft lägger ut delarna en i taget, var och en där den håller använd längd på plåten kortast, prövar flera ordningar och tar några sekunder, och behåller den bästa. Delar kan ligga i varandras hål och i urtaget på ett L eller ett U.

## Öppna den

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} öppnar den med delens plattmönster, eller — i en sammanställning — med plattmönstret för varje plåtdel, så många som det finns kopior.
- På en plåtdel: {{ui:Lay flat}} och sedan {{ui:Nest on sheets…}} under plattmönstret.
- {{ui:Add outlines from a DXF…}} lägger till varje sluten kontur i en DXF-fil som en del: en ritning från CadCraft sparad som DXF, eller en fil från skärmaskinens egna program. En kontur inuti en annan är ett hål i den. Linjer och bågar som sluter sig ände mot ände räknas som en kontur. Filer i tum, centimeter eller meter ändras till millimeter.

:::note
Att lägga plåt plant kräver en exakt geometrikärna (se [Plåt](topic:sheet-metal)). Konturer från en DXF-fil fungerar alltid.
:::

## Ställ in den

För varje del anger du **hur många** du behöver och dess **trådriktning**: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} för borstad eller valsad plåt som måste gå åt ett håll, eller {{ui:Across the sheet}}.

Under **Plåtar**:

- **Lager**: {{ui:Plates}} med given längd och bredd (och hur många du har; 0 = så många som behövs), eller {{ui:A roll}} med given bredd, så lång som behövs.
- **Kantmarginal** hålls fri vid varje kant på plåten (för klämmor eller en ojämn kant).
- **Avstånd mellan delar** är det minsta avståndet mellan två skärlinjer: minst din skärmaskins snittbredd, plus vad materialet kräver.
- **Vridningar**: vinklarna en del får vridas till, var 90° som standard. Färre vridningar går snabbare; fler kan utnyttja plåten bättre.
- **Delar får vändas** låter en del läggas upp och ner. Låt det vara avstängt för plåt: ett plattmönster som läggs vänt böjs åt andra hållet.

Tryck på {{ui:Nest}}. Förhandsvisningen visar varje plåt; uppgifterna anger hur många plåtar (eller hur mycket av rullen) som användes och hur mycket av materialet delarna tar upp. Allt som inte fick plats anges med namn.

## Spara den

{{ui:Save DXF}} skriver layouten som en DXF (R12, millimeter), en plåt under nästa: plåtarnas konturer på lagret SHEET, delarna på PARTS (bågar behålls som bågar), varje dels namn på LABELS.

:::tip
Att blanda flera delar ger oftast bättre nesting än många kopior av en: små delar fyller luckorna mellan de stora.
:::

## Skär plåtarna (G-kod)

**Export › Nästlade plåtar till G-kod** läser en nästlad DXF (den här, eller plåtarna i tillägget Cabinets i CadCraft) och skapar ett program per plåt genom den postprocessor du väljer: hål och urtag först, sedan konturerna, där varje skärning går verktygets radie utanför delen, genom plåten och 1 mm extra, med bryggor om du begär dem. Listan över postprocessorer är de inbyggda plus dina egna från din egen tillverkningsstudie. Kontrollera varje program i en simulator innan du kör det: borrning och fickor görs inte.

## Det här kontrollerar du

PartCraft kontrollerar varje layout igen mot de verkliga formerna (inte det rutnät den sökte i): inga två delar närmare än avståndet, inget i marginalerna. Det planerar inte skärningen: in- och utkörningar, skärordningen, att skära gemensamma kanter en gång och att behålla restplåten är din skärmaskins programvaras jobb. Kontrollera DXF-filen där innan du skär.
