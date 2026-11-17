---
title: Revolvera en svarvad del
summary: Skissa en halv profil bredvid en centrumlinje, revolvera den till en rund del, välj axel och vinkel, och använd ett revolverat snitt för spår.
keywords: revolvera, revolverad upphöjning, revolverat snitt, svarvad del, svarv, axel, centrumlinje, spår, vinkel, revolvering, snitt
from: 593b6929
---

{{ui:Revolvera}} snurrar en profil runt en axel, som en del gjord i en svarv: axlar, remskivor, fläns, knoppar. {{ui:Revolverat snitt}} (i menyn {{ui:Mer}} i gruppen Funktioner) snurrar en profil för att ta bort material, till spår och fördjupningar.

## Revolvera en trappad axel

1. Skissa på **Framplanet**.
2. Tryck {{key:N}} för {{ui:Centrumlinje}}. Börja i origo och klicka på en punkt rakt åt höger, till exempel 100 mm bort. Det här är axeln. Den är streckad: konstruktionsgeometri ingår inte i profilen.
3. Tryck {{key:L}} för Linje. Rita **halva** profilen ovanför centrumlinjen som en sluten slinga: börja på centrumlinjen, gå upp, stega längs, gå tillbaka ner till centrumlinjen och sedan längs den tillbaka till startpunkten. Ändarna måste mötas: slingan måste vara sluten.
4. Mått radierna (höjder ovanför centrumlinjen) och längderna. En höjd på 10 ovanför centrumlinjen ger en diameter på 20.
5. Välj {{ui:Avsluta}}.
6. Välj {{ui:Revolvera}}. Axeln visas, ett helt varv.

Profilen måste ligga på ena sidan av axeln. Om den korsar: ”Profilen korsar axeln. Håll den på ena sidan av centrumlinjen.” En profilkant får ligga på axeln.

## Inställningar

| Inställning | Vad den gör | Standard |
|---|---|---|
| **Operation** | Upphöjning (lägg till material), Urtag (ta bort material), Skärning (behåll överlappet) eller Ny kropp | Upphöjning för {{ui:Revolvera}}, Urtag för {{ui:Mer}} › {{ui:Revolverat snitt}} |
| **Vinkel (°)** | Hur långt som snurrar, från strax över 0 upp till 360 | 360 |
| **Axel** | Första centrumlinjen, eller valfri linje eller centrumlinje i skissen, listad som ”Centrumlinje 1 (l1)” eller ”Linje 3 (l3)” | Första centrumlinjen |

En delvis vinkel ger en kil, snurrad från skissplanet åt ett håll.

Om skissen saknar centrumlinje och du lämnar **Axel** på Första centrumlinjen: ”Rita en centrumlinje (en konstruktionslinje) i skissen att revolvera kring.” Du kan också välja en solid linje i profilen som axel.

## Skär ett spår

1. Med axeln byggd, öppna en ny skiss på **Framplanet** (samma plan som axelns skiss).
2. Rita en centrumlinje längs samma axel: börja den i origo och håll den vågrät så att den får ett H, eller skriv den med **Lägg till med koordinater** (till exempel från `0, 0` till `100, 0`). En ny skiss kan inte fästa i en annan skiss linjer.
3. Rita en liten sluten rektangel som överlappar axelns kant där spåret ska gå.
4. Välj {{ui:Avsluta}}, och sedan {{ui:Mer}} › {{ui:Revolverat snitt}}.

## Revolverade ytor i sammanställningar

En revolvering har en axel som andra funktioner och sammanställningar kan använda:

- ett Cirkulärt mönster använder den senaste revolveringens axel som standard (se [Mönster och speglingar](topic:patterns-mirror));
- i en sammanställning börjar en led mellan ytor skapade av revolveringar som en roterande led, och **Centrera på** erbjuder ”Axel för Revolve1” (se [Bygg en sammanställning](topic:build-assembly)).

## Sanna kurvor och facetter

PartCraft bygger en revolvering med mesh-kärnan (statusfältets etikett säger ”Mesh-kärna”): runda former är platta facetter, 64 per varv som standard, och volymerna ligger en aning under det sanna värdet (ungefär 0.16 % vid 64). Vyn samt STL-, 3MF- och STEP-exporten består av dessa facetter: ställ **Kurvor** (klicka på tomt utrymme, sedan i högerpanelen) till Fin (128) eller Mycket fin (256) för jämnare ytor. Sanna cylindrar, koner och torus kräver en exakt kärna: ännu inte byggt i den här versionen. Se [Mesh-kärnan](topic:solid-kernels).
