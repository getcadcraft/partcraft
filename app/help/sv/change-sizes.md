---
title: Ändra mått utan att öppna skissen
summary: Styr en del med siffrorna i den högra panelen: skissmått, djup, antal och vinklar, hur du planerar en del så att rätt siffror styr den, och var parametrar och ekvationer tar över.
keywords: parametrar, styrande mått, konstruktionsavsikt, ändra storlek, ekvationer, globala variabler, designtabell, konfigurationer, storleksändring, ändra mått
from: c2ae1a32
---

Varje mått i en PartCraft-del är ett tal du kan ändra senare: måtten i dess skisser och inställningarna för dess funktioner. Du behöver inte öppna en skiss för att ändra dess mått.

## Ändra ett skissmått från panelen

1. Klicka på en funktion i historiken, till exempel "Extrude1".
2. Under extruderingens egna inställningar listar **Skissmått (Sketch1)** varje mått i dess skiss: "Avstånd", "Diameter", "Vinkel (°)" och så vidare.
3. Skriv in ett nytt värde i en ruta och tryck på {{key:Enter}} eller {{key:Tab}}.

Skissen löses med det nya värdet, och hela delen byggs om. Om du markerar skissen själv visas samma lista som **Styrande mått**.

En radie eller diameter måste vara större än noll, och en vinkel ligger mellan 0 och 180 grader. Statusfältet säger till om inte.

:::tip
Vilken ruta är vilken? Rutorna listas i den ordning som måtten skapades. Om du är osäker öppnar du skissen (dubbelklicka på den), dubbelklickar på måttet på ritytan och ändrar det där.
:::

## Skriv in huvudsiffran direkt

Markera en funktion i historiken (eller lägg bara till den) och skriv ett tal: det går in i funktionens huvudruta, den du ändrar mest. Det är en extrudering **Djup**, en revolvering **Vinkel**, ett hål **Diameter**, ett mönster **Antal**, en rundning **Radie** eller ett skals vägg. Tryck på {{key:Enter}} för att ange det, eller {{key:Esc}} för att behålla det gamla. Att lägga till en extrudering säger det i statusfältet: "Extrude1 lades till. Ändra dess siffror till höger, eller skriv in ett tal nu för dess djup."

## Ändra siffran i historiken

Varje funktions rad i historiken visar sin huvudsiffra bredvid dess namn: "Extrude1 25 mm", "Hole1 Ø6.6 thru", "Fillet1 R2", "LPattern1 4 × 20 mm". Dubbelklicka på siffran (eller markera raden och tryck på {{key:F2}}) så öppnas en ruta där. Skriv det nya värdet och tryck på {{key:Enter}}. {{key:Esc}} behåller det gamla. Det fungerar exakt som funktionens ruta till höger: samma gränser, `=` för att skriva en ekvation som `=width/2`, och ett steg att ångra.

På en extrudering, ett hål eller ett mönster öppnar ett dubbelklick var som helst på raden rutan. På en rundning, fas, skal, släpp eller gänga går ett dubbelklick på namnet fortfarande till att välja dess kanter eller ytor, så dubbelklicka på själva siffran. Skisser har ingen siffra på raden: ett dubbelklick öppnar skissen.

## Dra den i vyn

Markera en extrudering i historiken (eller klicka på den i vyn och sedan på dess rad). En orange pil står då på dess slutyta, med djupet i en ruta bredvid. Dra pilen: delen följer med när du drar, och när du släpper sätts det nya djupet som ett steg ({{key:Mod+Z}} återställer det). Tryck på {{key:Esc}} under draget för att gå tillbaka till där du började. Djupet ändras i steg på en tiondel av dess storlek: 1 mm på en 25 mm extrudering, 0.1 mm på en 3 mm.

En revolvering får en böjd pil i slutet av sitt varv. Dra den runt axeln för att ändra vinkeln, i hela grader från 1° till 360°.

Eller klicka i rutan bredvid pilen, skriv ett värde (eller `=` och en ekvation) och tryck på {{key:Enter}}. Det finns ingen pil på en extrudering som går **Genom alla** eller upp till en yta, eller på ett värde som en ekvation styr. Ändra dem till höger.

## Siffrorna som styr en del

| Var | Vad du kan ändra |
|---|---|
| Skiss | Varje mått: längder, avstånd, radier, diametrar, vinklar |
| Extrudera och Skär | Djup, slutvillkor, riktning, pålägg eller urtag |
| Revolvera och revolverat snitt | Vinkel, axel, pålägg eller urtag |
| Hål | Diameter, djup, genom alla, förborrningens diameter och djup |
| Rundning, Fas, Skal | Radie, avstånd, väggtjocklek och riktning, och vilka kanter eller ytor |
| Linjärt och cirkulärt | Antal, avstånd eller vinkel, riktning eller axel |
| Del | Kurvor (hur fint runda former facetteras) |
| Ritning | Var snittet går, detaljens storlek och skala, GD&T-värden |

## Planera delen så att rätt siffror styr den

Siffrorna du anger är de du kan ändra. Några vanor gör att senare ändringar beter sig:

- **Sätt mått på det som spelar roll för jobbet.** Om ett hål måste ligga 15 mm från en kant, sätt måttet från den kanten, inte från origo.
- **Definiera skisser fullt ut.** Då flyttar en ändring bara det den ska (se [Definiera en skiss fullt ut](topic:relations-dimensions)).
- **Använd relationer för avsikt.** Lika på två hål betyder att en diameter styr båda. Symmetriska former: lägg origo på mittlinjen, eller använd Mittpunkt.
- **Skissa på ytor som skapats av funktioner.** En skiss på en extrudering slutyta flyttas när djupet ändras.
- **Mönstra i stället för att kopiera.** Ett hål mönstrat åtta gånger har en diameter att ändra.

## Bortom enskilda siffror

- **En siffra som styr flera:** använd parametrar och ekvationer: [Styr en del med parametrar](topic:parameters).
- **Flera storlekar av en del:** spara var och en som en [konfiguration](topic:design-tables). De sparas i delfilen.
- **Aritmetik i en sifferruta:** skriv `=40/2` eller `=width / 2`. Det blir en ekvation. Se [Ekvationer åt båda hållen](topic:equations-two-way).
- **Tumenheter:** delen visar millimeter. I en sifferruta med `=`, eller i en parameter, blir `2in` 50.8.

Se [Vad som inte finns ännu](topic:not-built-yet).
