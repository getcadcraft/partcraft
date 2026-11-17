---
title: Lägg till skissgeometri genom att skriva koordinater
summary: Använd Lägg till med koordinater i skisspanelen för att placera linjer, centrumlinjer, rektanglar, cirklar och punkter på exakta positioner, enbart med tangentbordet.
keywords: koordinater, skriven inmatning, tangentbordsinmatning, numerisk inmatning, exakt position, x y, absoluta koordinater, tillgänglighet, utan mus
from: 5e6c1656
---

När du känner till siffrorna är det snabbare att skriva in dem än att klicka och sätta mått. **Lägg till med koordinater** finns i den högra panelen när en skiss är öppen. Med den kan du också bygga en skiss utan pekare alls.

Koordinaterna anges i millimeter, i skissens egna axlar: x åt höger och y uppåt när du ser på skissen, med (0, 0) i origo (den röda cirkeln med ett kryss).

## Lägg till en form

1. Öppna en skiss (se [Rita din första skiss](topic:sketch-basics)).
2. Bläddra i den högra panelen till **Lägg till med koordinater**.
3. Välj formen i **Lägg till**: Linje, Centrumlinje, Rektangel, Cirkel eller Punkt.
4. Fyll i fälten:

| Form | Fält |
|---|---|
| Linje | **Från x, y** och **Till x, y** |
| Centrumlinje | **Från x, y** och **Till x, y** |
| Rektangel | **Hörn x, y** och **Motsatt hörn x, y** |
| Cirkel | **Centrum x, y** och **Radie** |
| Punkt | **Vid x, y** |

5. Välj {{ui:Lägg till}}, eller tryck på {{key:Enter}} i ett valfritt fält.

Formen visas och statusfältet säger till exempel "Lade till en rektangel." Fälten töms, redo för nästa. Varje tillägg är ett steg i {{ui:Ångra}}.

Skriv ett par som två tal åtskilda av ett kommatecken eller ett mellanslag: `0, 0`, `25 -10` eller `12.5,40`. Negativa tal och decimaltal går bra. En radie måste vara större än noll. Om något inte går att läsa som tal säger statusfältet: "Ange koordinater som "x, y" och en radie större än noll."

## Exempel: en plåtkontur, skriven

1. Öppna en skiss på **Framplan**.
2. **Lägg till**: Rektangel. **Hörn x, y**: `-50, -30`. **Motsatt hörn x, y**: `50, 30`. {{key:Enter}}.
3. **Lägg till**: Cirkel. **Centrum x, y**: `-30, 0`. **Radie**: `5`. {{key:Enter}}.
4. **Centrum x, y**: `30, 0`. **Radie**: `5`. {{key:Enter}}.
5. Välj {{ui:Avsluta skiss}}, och sedan {{ui:Extrudera}}: en platta på 100 × 60 med två 10 mm hål.

## Inmatad geometri placeras, men är inte låst

Inmatade koordinater placerar geometrin på rätt ställe, men de är **inte relationer**. Formerna förblir blå (underdefinierade) och kan flyttas om du drar i dem eller ändrar ett annat mått:

- en inmatad rektangel får egna hörn-, horisontella och vertikala relationer, precis som en ritad, men ingenting binder den till origo;
- en inmatad linje har ingen horisontell eller vertikal relation, även om du skrev in en vågrät linje;
- en inmatad cirkels centrum är fritt.

För att göra skissen helt definierad lägger du till mått och relationer efteråt (se [Definiera en skiss fullt ut](topic:relations-dimensions)). Välj till exempel ett rektangelhörn och origo och välj {{ui:• Sammanfallande}}, eller sätt mått på cirklarnas centrum från origo.

:::note
Utan pekare kommer du så här långt: flytta till en planrad i historiken med {{key:Tab}} och piltangenterna, tryck på {{key:Enter}} för att välja den, tryck på {{key:S}} för att skissa, lägg till former här, och nå **Redigera** bredvid varje mått och {{ui:Avsluta skiss}} med {{key:Tab}}. Att markera geometri, och därmed lägga till relationer eller nya mått, kräver fortfarande ett klick eller tryck i den här versionen.
:::

## Begränsningar

- Bågar kan inte skrivas in än. Rita dem med Båge-verktyget, eller skriv in en cirkel och använd relationer.
- Det finns inga relativa koordinater (från sista punkten) eller polära koordinater (längd och vinkel) i den här rutan.
- Inmatad geometri snäpper inte till befintliga punkter. Skriv in samma koordinater som en befintlig punkt och lägg sedan till en {{ui:• Sammanfallande}}-relation mellan dem om de måste hänga ihop.
