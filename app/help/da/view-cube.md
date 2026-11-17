---
title: ViewCube
summary: Klik på en flade, kant eller et hjørne af kuben i hjørnet af visningen for at kigge derfra, træk den for at kredse, drej kompasringen, bevæg dig rundt om en visning set lige ind på en flade, og gå hjem.
keywords: view cube, viewcube, visningskube, kompas, nord, hjemvisning, standardvisninger, top, front, højre, iso, hjørne, kant, kredsning, drej visning, akseikon, hjørneindikator, navigation
from: afc33dc7
---

ViewCube sidder øverst til højre i 3D-visningen (ikke når du skitserer eller på tegningsarket). Den drejer med visningen, så den altid viser, hvilken vej du kigger: {{ui:Top}} er delens +Y-side (Top-planet), {{ui:Front}} er +Z-siden (Front-planet vender mod dig, når du kigger på det), {{ui:Højre}} er +X-siden. Den forbliver gennemsigtig, indtil du peger på den.

## Kig fra en side, en kant eller et hjørne

1. Peg på kuben. Delen under markøren lyser op: midten af en flade, en kant (den lyser på begge flader, der deler den) eller et hjørne (på alle tre flader).
2. Klik på den. Visningen drejer for at kigge derfra og beholder den samme midte og zoom.

Der er 26 steder at klikke: 6 flader ({{ui:Top}}, {{ui:Bund}}, {{ui:Front}}, {{ui:Tilbage}}, {{ui:Venstre}}, {{ui:Højre}}), 12 kanter og 8 hjørner. Et hjørne giver det klassiske trekvartsbillede; en kant ser ud halvvejs mellem to flader.

Klik på {{ui:Front}}, {{ui:Top}} eller {{ui:Højre}} giver de samme visninger som {{ui:Visninger}} i værktøjslinjen, uden zoom til at tilpasse.

## Kredsning ved at trække i kuben

Træk i kuben for at dreje visningen, det samme som at kredse i selve visningen. Et træk tages aldrig som et klik, så du kan tage fat i kuben hvor som helst.

## Kompasringen

Ringen under kuben bærer N, Ø, S og V.

- **Træk i ringen** for at dreje modellen om den lodrette akse, som om den stod på et drejebord. Ringen følger markøren.
- **Klik på et bogstav** for at kigge fra den side og beholde, hvor stejlt du kigger ned. I en visning direkte oppefra går bogstavet, du klikker på, til bunden af skærmen.

## Visninger set lige ind på en flade: pile

Når du kigger lige ind på en flade, dukker små pile op rundt om kuben:

- De fire **trekanter** bringer fladen på den side frem foran: trekanten over kuben viser fladen, der var øverst, og så videre.
- De to **buede pile** øverst til højre drejer billedet en kvart omgang med uret eller mod uret, uden at ændre hvilken flade du kigger på. Brug dem til at dreje en plan, så en lang væg løber hen over skærmen.

## Hjem

Husknappen øverst til venstre på kuben går tilbage til trekvartsvisningen og tilpasser delen i visningen. {{key:Home}} gør det samme, mens kuben har tastaturfokus.

## Med tastaturet

{{key:Tab}} til kuben, og så:

| Tast | Gør |
|---|---|
| {{key:left}} / {{key:right}} | vælger en side, kant eller et hjørne rundt om kuben, i ottendedels omgange (skærmlæsere siger, hvilken) |
| {{key:up}} / {{key:down}} | vælger en højere eller lavere en, op til {{ui:Top}} eller ned til {{ui:Bund}} |
| {{key:Enter}} eller {{key:Space}} | kig fra den valgte |
| {{key:Shift+left}} / {{key:Shift+right}} | drej visningen en kvart omgang om den lodrette akse |
| {{key:Home}} | hjemvisningen |
| {{key:Esc}} | forlad kuben |

Taster du trykker på kuben, bliver ved kuben: de starter ikke PartCraft-værktøjer.

## Aksikon eller intet i stedet

Åbn {{ui:Indstillinger}} ({{key:Mod+,}}), fanen {{ui:PartCraft}}, og sæt **Hjørneindikator** til {{ui:ViewCube}} (standard), {{ui:Akseikon}} (en lille X-, Y-, Z-markør nederst til venstre: X rød, Y grøn, Z blå) eller {{ui:Ingen}}. Denne browser husker valget. Se [PartCraft-indstillinger](topic:settings#corner-indicator).

:::note
Kuben viser delen, som PartCraft bygger den: Y op, så kubens {{ui:Top}} er Top-planet. Kompasbogstaverne er kun til at dreje med; en del har ingen nord.
:::
