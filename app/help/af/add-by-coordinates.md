---
title: Voeg sketsgeometrie by deur koördinate te tik
summary: Gebruik Voeg by koördinate in die sketspaneel om lyne, middellyne, reghoeke, sirkels en punte op presiese posisies te plaas, net met die sleutelbord.
keywords: koördinate, getikte invoer, sleutelbordinvoer, numeriese invoer, presiese posisie, x y, absolute koördinate, toeganklikheid, geen muis
from: 5e6c1656
---

Wanneer jy die getalle ken, is dit vinniger om hulle te tik as om te klik en te dimensioneer. **Voeg by koördinate** staan in die regterpaneel wanneer 'n skets oop is. Dit laat jou ook 'n skets bou sonder 'n wyser.

Koördinate is in millimeter, in die skets se eie asse: x na regs en y op soos jy na die skets kyk, met (0, 0) by die oorsprong (die rooi sirkel met 'n kruis).

## Voeg 'n vorm by

1. Maak 'n skets oop (sien [Teken jou eerste skets](topic:sketch-basics)).
2. In die regterpaneel, rol na **Voeg by koördinate**.
3. Kies die vorm in **Voeg by**: Lyn, Middellyn, Reghoek, Sirkel of Punt.
4. Vul die blokkies in:

| Vorm | Blokkies |
|---|---|
| Lyn | **Van x, y** en **Na x, y** |
| Middellyn | **Van x, y** en **Na x, y** |
| Reghoek | **Hoek x, y** en **Teenoorstaande hoek x, y** |
| Sirkel | **Middelpunt x, y** en **Radius** |
| Punt | **By x, y** |

5. Kies {{ui:Voeg by}}, of druk {{key:Enter}} in enige blokkie.

Die vorm verskyn en die statusbalk sê, byvoorbeeld, "Reghoek bygevoeg." Die blokkies raak leeg, gereed vir die volgende een. Elke toevoeging is een {{ui:Ontdoen}}-stap.

Tik 'n paar as twee getalle geskei deur 'n komma of 'n spasie: `0, 0`, `25 -10` of `12.5,40`. Negatiewe getalle en desimale getalle is reg. 'n Radius moet groter as nul wees. As iets nie as 'n getal lees nie, sê die statusbalk: 'Tik koördinate as "x, y" en 'n radius bo nul.'

## Voorbeeld: 'n gleufplaat-omtrek, getik

1. Maak 'n skets op **Voorvlak** oop.
2. **Voeg by**: Reghoek. **Hoek x, y**: `-50, -30`. **Teenoorstaande hoek x, y**: `50, 30`. {{key:Enter}}.
3. **Voeg by**: Sirkel. **Middelpunt x, y**: `-30, 0`. **Radius**: `5`. {{key:Enter}}.
4. **Middelpunt x, y**: `30, 0`. **Radius**: `5`. {{key:Enter}}.
5. Kies {{ui:Verlaat skets}}, dan {{ui:Ekstrudeer}}: 'n 100 × 60-plaat met twee gate van 10 mm.

## Getikte geometrie is geplaas, nie vasgemaak nie

Getikte koördinate plaas geometrie op die regte plek, maar dit is **nie verhoudings** nie. Die vorms bly blou (onder gedefinieer) en kan beweeg as jy hulle sleep of 'n ander maat verander:

- 'n getikte reghoek kom met sy eie hoek-, horisontale en vertikale verhoudings, soos 'n getekende een, maar niks bind dit aan die oorsprong nie;
- 'n getikte lyn het geen horisontale of vertikale verhouding nie, selfs al het jy 'n vlak lyn getik;
- die middelpunt van 'n getikte sirkel is vry.

Om die skets ten volle te definieer, voeg maate en verhoudings daarna by (sien [Definieer 'n skets ten volle](topic:relations-dimensions)). Kies byvoorbeeld 'n reghoekhoek en die oorsprong en kies {{ui:• Samevallend}}, of dimensioneer die sirkelmiddelpunte vanaf die oorsprong.

:::note
Sonder 'n wyser kan jy tot hier kom: beweeg na 'n vlakry in die geskiedenis met {{key:Tab}} en die pyltjiesleutels, druk {{key:Enter}} om dit te kies, druk {{key:S}} om te skets, voeg vorms hier by, en bereik **Wysig** langs elke maat en {{ui:Verlaat skets}} met {{key:Tab}}. Geometrie kies, en dus verhoudings of nuwe maate byvoeg, vereis steeds 'n klik of tik in hierdie weergawe.
:::

## Beperkings

- Boë kan nog nie getik word nie. Teken hulle met die Boog-gereedskap, of tik 'n sirkel en gebruik verhoudings.
- Daar is geen relatiewe koördinate (vanaf die laaste punt) of poolkoördinate (lengte en hoek) in hierdie blokkie nie.
- Getikte geometrie snap nie na bestaande punte nie. Tik dieselfde koördinate as 'n bestaande punt, en voeg dan 'n {{ui:• Samevallend}}-verhouding tussen hulle by as hulle saam moet bly.
