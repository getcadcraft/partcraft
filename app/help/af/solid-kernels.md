---
title: Die maaskern
summary: Hierdie weergawe van PartCraft bou elke onderdeel met 'n maaskern wat in jou blaaier loop. Wat dit beteken vir ronde vlakke, volumes en lêers, hoe om te sien dat dit werk, en watter kenmerke op 'n presiese kern wag.
keywords: kern, maas, manifold, presies, b-rep, gefasetteer, krommes, opencascade, occt, fillet benodig presies, nie gebou nie, vanlyn, webassembly
from: 68d32d16
---

'n Meetkundekern is die enjin wat jou geskiedenis in 'n soliede liggaam verander. Hierdie weergawe van PartCraft het een: die **maaskern** (manifold-3d). Dit loop op jou rekenaar as 'n klein WebAssembly-program en is 'n oomblik gereed nadat die program oopmaak. Niks van jou onderdeel word iewers gestuur nie.

| | Maaskern |
|---|---|
| Ronde vorms | Plat fasette. **Krommes** in die onderdeelpaneel stel hoe fyn |
| Volumes en oppervlaktes | Van die gefasetteerde soliede, 'n bietjie laag op ronde onderdele |
| Skets, ekstrudeer, sny, draai om, gate, patrone, spieël, verwysingsvlakke | Ja |
| Fillet en Chamfer | Op reguit rande tussen plat vlakke; rondings wat ontmoet, word gemiter |
| Shell en Konsep | Shell maak plat vlakke oop (presiese wanddikte); Konsep kantel plat vlakke |
| Uitvoere | STL, 3MF, STEP (gefasetteer), tekening-PDF en DXF |
| Tekeningaansigte | Getrek uit die fasette, insluitend snitaansigte |
| Vlakke en rande | Benoem en bekend volgens soort (plat, silinder, keël, sfeer, torus; reguit, sirkel), geneem uit die skets: die werkruimtes Simulasie, Generatief en Vervaardiging, Meet, kies en die gattabel gebruik hulle |

Die kaartjie naby die regterkant van die statusbalk sê **Maaskern** terwyl dit jou onderdeel bou.

## Wat wag op 'n presiese kern

'n Presiese (B-rep) kern hou ware sirkels, silinders en keëls, en gladde fillets op enige rand. Sweeps, lofts, oppervlaktes, plaatwerk, ribbes, verskeie liggame, STEP-invoer en presiese STEP-uitvoer is op een gebou. Vroeëre laboratoriumbouings van PartCraft het OpenCascade daarvoor gebruik. Die lisensie daarvan (die LGPL) pas nie by hierdie vrystelling nie, waar elke program Apache-2.0 is en slegs toelaatbare biblioteke gebruik, so dit is nie ingesluit nie. Niks hiervan het 'n datum nie.

Tot dan sê daardie kenmerke **Nog nie gebou nie** wanneer jy dit kies: die statusbalk gee die rede, en hulle knoppies se tooltips eindig met "nog nie gebou nie (benodig 'n presiese kern)". [Wat nog nie gebou is nie](topic:not-built-yet) lys elkeen met wat om in plaas daarvan te doen.

'n Onderdeel wat met hulle in 'n vroeëre bou gemaak is, maak steeds oop. Daardie kenmerke bly in die geskiedenis gemerk as nie gebou nie (hou een aan vir die rede), die res van die onderdeel bou, en stoor hou hulle onveranderd.

## Ronde vlakke en Krommes

Die maaskern teken 'n sirkel as 'n veelhoek. **Krommes** in die onderdeelpaneel stel hoeveel sye 'n volle sirkel kry; meer sye lyk gladder en meet nader aan die ware waarde, en neem langer om te bou. Volumes, oppervlaktes en afstande van {{ui:Meet}} is van hierdie gefasetteerde soliede: vir 'n gat of 'n uitstulping is hulle 'n bietjie kleiner as dié van die ronde vorm.

## Vanlyn en aanlyn

Die maaskern is deel van die program se eie aflaai. Om sonder enige verbinding te werk, stoor PartCraft vir vanlynqebruik terwyl jy aanlyn is: kies {{ui:Stoor vir vanlyn}} in die programbalk en wag totdat dit **Gereed vir vanlyn** sê. Besonderhede: [Werk vanlyn](common:offline).
