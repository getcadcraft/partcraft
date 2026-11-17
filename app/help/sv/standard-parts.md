---
title: Öppna en standarddel
summary: Starta en del från en bult, skruv, mutter, bricka, stift, lager eller kil dimensionerad efter sin standard, med varje storlek i standardens tabell som en konfiguration.
keywords: standarddel, standarddelar, bult, skruv, sexkant, mutter, bricka, stift, dymling, lager, kullager, kil, parallellkil, fästelement, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, mall, bibliotek
from: b9e2811f
---

PartCraft öppnar vanliga maskindelar färdiga: måtten kommer från standardernas tabeller, och varje storlek i tabellen är en konfiguration som du kan växla till.

## Öppna en

1. Klicka på {{ui:Standarddel}} i gruppen Fil.
2. I {{ui:Del}} väljer du typ, till exempel Skruv med sexkantshuvud (ISO 4017).
3. I {{ui:Storlek}} väljer du storleken, till exempel `M10 × 40`.
4. Klicka på {{ui:Öppna}}.

Delen öppnas som en ny, osparad del. Spara den för att behålla den ({{key:Mod+S}}).

| Del | Standard | Parametrar |
|---|---|---|
| Skruv med sexkantshuvud, sexkantsbult | ISO 4017, ISO 4014, ASME B18.2.1 (tum) | `d` gängstorlek, `s` nyckelvidd, `k` huvudhöjd, `l` längd |
| Sexkantsmutter | ISO 4032, ASME B18.2.2 (tum) | `d`, `s`, `height` |
| Plan bricka | ISO 7089 | `d1` innermått, `d2` ytterdiameter, `h` tjocklek |
| Parallellt stift | ISO 2338 | `d`, `l` |
| Djupspårigt kullager | ISO 15 | `d` borrning, `D` ytterdiameter, `B` bredd |
| Parallellkil | DIN 6885-1, form A | `b` bredd, `h` höjd, `l` längd |

## Ändra storleken

Varje storlek är en konfiguration (se [Konfigurationer och designtabeller](topic:design-tables)): öppna {{ui:Parametrar}} och välj en annan, eller ändra en parameter, till exempel `l` för en längre skruv, och spara den som en egen konfiguration.

## Vad som är modellerat

- Skruvar och bultar: sexkantshuvudet och en slät skaft. Muttrar: sexkanten med ett hål i gängans nominella storlek. Gängor modelleras inte; lägg till en med {{ui:Gänga}} om du behöver den (se [Gängor](topic:threads)).
- Stift: en slät cylinder; ändfasningarna utelämnas.
- Lager: bara det yttre höljet (en ring med borrningen, ytterdiametern och bredden), vilket är vad du behöver för att placera ett.
- Kilar: kilen med rundade ändar.

Delens material är stål, så massapanelen visar dess vikt. Kugghjul finns inte här ännu: PartCraft har ingen tandfunktion, och en skiva är inte ett kugghjul. CadCraft ritar kugghjul enligt ritningskonventionen, och biblioteket har dem som ritningar.
