---
title: Ramar av stålprofiler
summary: Lägg stålprofiler längs linjerna i en eller flera skisser för att göra en svetsad ram: geringar eller stumfogar i hörnen, stänger som kapas för att passa där de möts, ändlock, knutplåtar och en kapplista med längder och ändvinklar.
keywords: svetskonstruktion, profilstång, ram, stålram, rör, fyrkantsrör, hss, rhs, shs, rör, chs, bredflänsad, i-balk, w-balk, ipe, hea, heb, U-profil, upn, vinkelstål, gering, stumfog, urtag, ändlock, knutplåt, kapplista
from: 59071e5a
---

En **Profilstång** lägger en stålprofil längs varje linje i de skisser du väljer. Rita ramen som linjer (varje linje är en stång), och välj sedan profilen: stängerna byggs, deras hörn trimmas och förlängs, och en kapplista anger hur lång varje bit ska kapas och i vilken vinkel.

## Gör en ram

1. Rita ramen som linjer i en skiss, till exempel en rektangel på ovanplanet. Linjer markerade som konstruktion utelämnas.
2. Med skissen markerad väljer du {{ui:Mer}} › {{ui:Profilstång}}. Varje linje i skissen får en stång.
3. I panelen väljer du profilens **Familj** och **Storlek**. Familjerna är AISC-tabellerna (W, S, C, L, HSS-rör, Rör) och EN 10365 (IPE, HEA, HEB, UPN).

### En ram i 3D

Linjer från flera skisser bildar en ram: en övre rektangel skissad på ett plan ovanför, och benen skissade på plan som står upprätt, möts i sina ändar i 3D. Under **Längs linjerna i** i panelen bockar du för varje skiss vars linjer stängerna följer. Ändar som möts inom en mikrometer sammanfogas.

## Ställ in profilen på sin linje

- **Rotera (°)** vrider profilen kring sin linje. En balk står med sin höjd uppåt (på en lodrät stång pekar dess höjd mot fronten).
- **På linjen** väljer vilken punkt på profilen som sitter på linjen: mitten, eller ett hörn eller mitten av en sida på profilens kontur. **Nedre mitten** placerar en ram ovanpå skissplanet i stället för genom det.

## Hörn och skarvar

| Var stängerna möts | Vad som händer |
|---|---|
| Två stänger ände mot ände, **Hörn: Gering** | Båda kapas i planet halvvägs mellan dem, som en bildram |
| Två stänger ände mot ände, **Hörn: Stumfog** | Den första stången fortsätter till den andra stångens bortre yta; den andra kapas rakt mot den första stångens närmaste yta |
| En stång slutar mitt på en annan (ett T) | Den kapas för att passa mot den andra stångens utsida |
| Tre eller fler slutar i en punkt | Den första fortsätter rakt förbi de andra; de övriga kapas för att passa mot den |

Den första stången är den vars linje kommer först: linjerna behåller den ordning de ritades i, skiss för skiss i den ordning skisserna bockades för.

## Ändlock och knutplåtar

- **Ändlock** stänger varje fri ände med en plåt i profilens kontur, med den tjocklek du anger, utanför änden.
- **Knutplåtar** lägger en triangulär plåt i varje hörn där två stänger möts i en vinkel: **Knutplåtens storlek** längs varje stång från hörnet, **Knutplåtens tjocklek** tvärs, centrerad på hörnets plan.

## Kapplistan

Panelen listar varje bit, med identiska bitar grupperade: profilen, längden (från långpunkt till långpunkt, så som du skulle märka upp den för sågen), hur varje ände kapas (rakt, en vinkel från rakt, eller kapad för att passa), och vilka stänger de tillhör. Ändlock och knutplåtar listas med sina storlekar. {{ui:Spara kapplistan (CSV)}} sparar den för ett kalkylblad.

En stång som kapats för att passa mot ett rör med rundade hörn går en liten bit in i rörets hörnradie, så dess längd från långpunkt är några millimeter mer än avståndet mellan ytorna.

## Begränsningar

- Stängerna följer bara räta linjer; bågar och splines i skissen utelämnas.
- Skarvarna är kapade, inte svetsade: inga svetsfogar ritas, och ramen är ett solid.
- Profilerna ritas utifrån tabellens mått: W-profiler med sin rotrundning, S-profiler och U-profiler med parallella flänsar, rör med hörnradier; hål, ändberedningar och svetsgap görs inte åt dig.
- Profilstänger byggs av nätkärnan. Med den exakta kärnan påslagen (endast utvecklare) visar de att de inte är byggda.
