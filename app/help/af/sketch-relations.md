---
title: Skets-verhoudings en maatte
summary: Elke verhouding en maat wat 'n PartCraft-skets het, wat om vir elk te kies, die simbool daarvan, en hoe dit optree wanneer dit oplos.
keywords: verhoudings, beperkings, saamval, horisontaal, vertikaal, parallel, loodreg, raaklyn, gelyk, konsentries, middelpunt, vas, afstand, horisontale afstand, vertikale afstand, radius, deursnee, hoek, simbole, glifs
from: 9831e7be
---

Verhoudings bepaal hoe meetkunde ten opsigte van ander meetkunde lê. Maatte bepaal groottes. Om 'n verhouding by te voeg, kies items met die {{ui:Kies}}-gereedskap ({{key:S}}) en kies sy knoppie in die regterpaneel; om 'n maat by te voeg, gebruik die {{ui:Maat}}-gereedskap ({{key:D}}) of die maatknoppies in die regterpaneel. Hoe om daarmee te werk: [Heeltemal definieer 'n skets](topic:relations-dimensions).

"Kurwe" hieronder beteken 'n sirkel of 'n boog. Die oorsprong tel as 'n punt.

## Verhoudings

| Knoppie | Simbool | Kies | Effek |
|---|---|---|---|
| {{ui:• Saamval}} | • (slegs gewys wanneer gekies of in moeilikheid) | Twee punte | Die punte ontmoet |
| {{ui:• Saamval}} | • | 'n Punt en 'n lyn | Die punt lê op die lyn (of sy verlenging) |
| {{ui:• Saamval}} | • | 'n Punt en 'n kurwe | Die punt lê op die sirkel of boog |
| {{ui:H Horisontaal}} | H | 'n Lyn, of twee punte | Die lyn is gelyk, of die twee punte is op dieselfde hoogte |
| {{ui:V Vertikaal}} | V | 'n Lyn, of twee punte | Die lyn is regop, of die punte is een bo die ander |
| {{ui:∥ Parallel}} | ∥ | Twee lyne | Die lyne loop dieselfde rigting |
| {{ui:⊥ Loodreg}} | ⊥ | Twee lyne | Die lyne ontmoet in 'n regte hoek |
| {{ui:T Raaklyn}} | T | 'n Lyn en 'n kurwe | Die lyn raak die kurwe sonder om dit te kruis |
| {{ui:T Raaklyn}} | T | Twee kurwes | Hulle raak, buite of binne, soos geteken |
| {{ui:T Raaklyn}} | T | 'n Spline en 'n lyn, boog of spline wat by een van sy einde aansluit | Die spline verlaat daardie einde in die ander kurwe se rigting |
| {{ui:= Gelyk}} | = | Twee lyne | Dieselfde lengte |
| {{ui:= Gelyk}} | = | Twee kurwes | Dieselfde radius |
| {{ui:◎ Konsentries}} | ◎ | Twee kurwes | Dieselfde middelpunt |
| {{ui:◎ Konsentries}} | ◎ | 'n Punt en 'n kurwe | Die punt sit by die kurwe se middelpunt |
| {{ui:M Middelpunt}} | M | 'n Punt en 'n lyn | Die punt sit by die lyn se middelpunt |
| {{ui:↔ Simmetries}} | ↔ | Twee punte en 'n lyn | Die punte is spieëlbeelde oor die lyn ({{ui:Spieël}} voeg hierdie by) |
| {{ui:⚓ Vas}} | ⚓ | 'n Punt, 'n lyn, 'n kurwe of 'n spline | Hou dit presies waar dit nou is (by 'n spline: sy punte) |

Lyne hier sluit middellyne in. Teken voeg sommige verhoudings vir jou by: vasmaak aan 'n punt maak dit saamvallend, vasmaak aan 'n kurwe plaas die punt daarop, amper horisontale of regop lyne kry H of V, en 'n reghoek kom met sy vier hoeke verbind, twee H en twee V.

**Vas** is 'n vinnige manier om iets te keer om te beweeg, maar die onderdeel kan dan nie 'n maatverandering elders volg nie. Verkies maatte na die oorsprong.

## Maatte

| Knoppie | Kies | Meet | Word gewys as |
|---|---|---|---|
| {{ui:Afstand}} | 'n Lyn | Die lengte daarvan | Afstand 40 |
| {{ui:Afstand}} | Twee punte | Die reguit afstand tussen hulle | Afstand 40 |
| {{ui:Afstand}} | 'n Punt en 'n lyn | Die afstand van die punt tot die lyn, reghoek daarop | Afstand 40 |
| {{ui:Afstand}} | Twee parallelle lyne | Die gaping tussen hulle | Afstand 40 |
| {{ui:Horisontale afstand}} | Twee punte, of 'n lyn | Slegs die links-regs-afstand | Horisontale afstand 40 |
| {{ui:Vertikale afstand}} | Twee punte, of 'n lyn | Slegs die op-af-afstand | Vertikale afstand 40 |
| {{ui:Radius}} | 'n Sirkel of boog | Die radius daarvan | Radius R10 |
| {{ui:Deursnee}} | 'n Sirkel of boog | Die deursnee daarvan | Deursnee ⌀20 |
| {{ui:Hoek}} | Twee lyne wat nie parallel is nie | Die hoek tussen hulle, 0 tot 180 grade | Hoek 30° |

Met die {{ui:Maat}}-gereedskap kies PartCraft die soort uit wat jy klik en waar jy die getal plaas:

| Jy klik | Jy kry |
|---|---|
| 'n Lyn | Die lengte; vir 'n skuins lyn, horisontaal as die getal bo of onder daarvan is, vertikaal as dit aan die kant is |
| 'n Sirkel | Deursnee |
| 'n Boog | Radius |
| Twee punte | Afstand; horisontaal of vertikaal soos vir 'n skuins lyn |
| 'n Punt en 'n lyn | Afstand van die punt tot die lyn |
| Twee lyne | Hoek, of die afstand as hulle parallel is |
| 'n Punt en 'n sirkel | Niks: "Daardie items kan nie saam gemaat word nie." Meet eerder na die sirkel se middelpunt |

**Verskuiwing** (gewys as die afstand) word gemaak deur die {{ui:Verskuif}}-gereedskap: dit hou 'n gekopieerde lyn parallel op daardie afstand, of 'n gekopieerde boog of sirkel konsentries met 'n radius net so veel groter of kleiner. Die ander dele van dieselfde verskuiwing dra 'n **O**-verhouding en volg die een Verskuiwing-maat. Sien [Splines, trim, verskuiwing en ander skets-gereedskap](topic:sketch-tools).

Maatwaardes is millimeter (of grade), nooit negatief nie. Radius en deursnee moet groter as nul wees. 'n Waarde van 0 is toegelaat vir afstande: twee punte 0 uitmekaar is saamvallend.

## Hoe oplossing optree

- **Minste beweging.** Wanneer 'n waarde verander, skuif die oplosser die meetkunde so min moontlik. 'n Lyn waarvan die lengte verander, groei eweneens aan albei punte as niks enige een van die punte vashou nie.
- **Geen omdraai nie.** Afstande van 'n punt tot 'n lyn, horisontale en vertikale afstande, hoeke en raaklyn onthou aan watter kant hulle gemaak is. Die verandering van 'n waarde draai die meetkunde nooit na die ander kant nie.
- **Konflikte laat dinge staan.** As verhoudings mekaar weerspreek, bly die skets presies soos dit was, en die botsende verhoudings word rooi.
- **Oortollige verhoudings** (wat deur ander ingesluit word) word in die statusbalk genoem ("is reeds ingesluit. Skrap dit.") en die kenmerk word steeds gebou, met 'n waarskuwing.
- **Raaklynverbindings.** Waar 'n afronding-boog by 'n gedeelde eindpunt by sy lyne aansluit, word raaklynigheid opgelos in 'n vorm wat daar goed gedefinieer bly, sodat skets-fillets nie as oor-gedefinieer gelees word nie.

## Nog nie beskikbaar nie

Kollineêre, koradiale en deurboor-verhoudings; 'n punt op 'n spline; aangedrewe (verwysings-)maatte; ordinaat- en boglengte-maatte; vergelykings tussen maatte. Gebruik Parallel plus 'n afstand van 0 vir kollineêre lyne.
