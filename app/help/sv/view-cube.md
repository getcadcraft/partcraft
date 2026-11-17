---
title: ViewCube
summary: Klicka på en sida, kant eller ett hörn av kuben i hörnet av vyn för att titta därifrån, dra den för att kretsa, vrid kompassringen, gå runt en vy rakt framifrån och gå hem.
keywords: view cube, viewcube, kub, kompass, norr, hemvy, standardvyer, ovansida, framsida, höger, iso, hörn, kant, kretsa, rotera vy, axelikon, hörnindikator, navigering
from: afc33dc7
---

ViewCube sitter uppe till höger i 3D-vyn (inte när du skissar eller på ritningsbladet). Den vrids med vyn, så den visar alltid åt vilket håll du tittar: {{ui:Ovansida}} är delens +Y-sida (ovanplanet), {{ui:Framsida}} är +Z-sidan (framplanet vetter mot dig när du tittar på det), {{ui:Höger}} är +X-sidan. Den är genomskinlig tills du pekar på den.

## Titta från en sida, en kant eller ett hörn

1. Peka på kuben. Delen under pekaren lyser upp: mitten av en sida, en kant (den lyser på båda sidor som delar den) eller ett hörn (på alla tre sidor).
2. Klicka på den. Vyn vrids för att titta därifrån och behåller samma mitt och zoom.

Det finns 26 ställen att klicka på: 6 sidor ({{ui:Ovansida}}, {{ui:Undersida}}, {{ui:Framsida}}, Baksida, {{ui:Vänster}}, {{ui:Höger}}), 12 kanter och 8 hörn. Ett hörn ger den klassiska tre-kvartsvyn; en kant ser ut halvvägs mellan två sidor.

Att klicka på {{ui:Framsida}}, {{ui:Ovansida}} eller {{ui:Höger}} ger samma vyer som {{ui:Vyer}} i verktygsfältet, utan zoom för att passa.

## Kretsa genom att dra kuben

Dra kuben för att vrida vyn, samma som att kretsa i själva vyn. Ett drag räknas aldrig som ett klick, så du kan ta tag i kuben var som helst.

## Kompassringen

Ringen under kuben har N, Ö, S och V.

- **Dra ringen** för att vrida modellen kring den vertikala axeln, som om den stod på en skivspelare. Ringen följer pekaren.
- **Klicka på en bokstav** för att titta från den sidan och behålla hur brant du tittar ner. I en vy rakt uppifrån hamnar bokstaven du klickar på längst ned på skärmen.

## Vyer rakt framifrån: pilar

När du tittar rakt mot en sida visas små pilar runt kuben:

- De fyra **trianglarna** för sidan på den sidan till fram: triangeln ovanför kuben visar sidan som var överst, och så vidare.
- De två **böjda pilarna** uppe till höger vrider bilden en kvarts varv medurs eller moturs, utan att ändra vilken sida du tittar på. Använd dem för att vrida en plan så att en lång vägg går tvärs över skärmen.

## Hem

Husknappen uppe till vänster på kuben går tillbaka till tre-kvartsvyn och anpassar delen. {{key:Home}} gör detsamma när kuben har tangentbordsfokus.

## Med tangentbordet

{{key:Tab}} till kuben, sedan:

| Tangent | Gör |
|---|---|
| {{key:left}} / {{key:right}} | väljer en sida, kant eller ett hörn runt kuben, i åttondelssteg (skärmläsare säger vilket) |
| {{key:up}} / {{key:down}} | väljer ett högre eller lägre, upp till {{ui:Ovansida}} eller ned till {{ui:Undersida}} |
| {{key:Enter}} eller {{key:Space}} | tittar från det valda |
| {{key:Shift+left}} / {{key:Shift+right}} | vrider vyn en kvarts varv kring den vertikala axeln |
| {{key:Home}} | hemvyn |
| {{key:Esc}} | lämnar kuben |

Tangenter som trycks på kuben stannar i kuben: de startar inte PartCraft-verktyg.

## Axelikon eller ingenting i stället

Öppna {{ui:Inställningar}} ({{key:Mod+,}}), fliken {{ui:PartCraft}}, och ställ in **Hörnindikator** till {{ui:ViewCube}} (standard), {{ui:Axelikon}} (en liten X-, Y-, Z-markör nere till vänster: X röd, Y grön, Z blå) eller {{ui:Inget}}. Webbläsaren minns valet. Se [PartCraft-inställningar](topic:settings#corner-indicator).

:::note
Kuben visar delen så som PartCraft bygger den: Y uppåt, så kubens {{ui:Ovansida}} är ovanplanet. Kompassbokstäverna är bara till för att vrida; en del har inget norr.
:::
