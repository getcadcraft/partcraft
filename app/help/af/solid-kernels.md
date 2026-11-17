---
title: Die maaskern
summary: Hierdie weergawe van PartCraft bou elke onderdeel met 'n maaskern wat in jou blaaier loop. Wat dit beteken vir ronde vlakke, volumes en lêers, hoe om te sien dat dit werk, en watter kenmerke wag vir 'n presiese kern.
keywords: kern, maas, manifold, presies, b-rep, gefasetteer, kurwes, opencascade, occt, afronding benodig presies, nie gebou nie, vanlyn, webassembly
from: f931645c
---

'n Geometriekern is die enjin wat jou geskiedenis in 'n soliede omskakel. Hierdie weergawe van PartCraft het een: die **maaskern** (manifold-3d). Dit loop op jou rekenaar as 'n klein WebAssembly-program en is gereed 'n oomblik nadat die toepassing oopgaan. Niks oor jou onderdeel word êrens heen gestuur nie.

| | Maaskern |
|---|---|
| Ronde vorms | Plat fasette. **Kurwes** in die onderdeelpaneel stel hoe fyn |
| Volumes en oppervlaktes | Van die gefasetteerde soliede, 'n bietjie laag op ronde onderdele |
| Skette, ekstrudeer, sny, draai om, gate, patrone, spieël, verwysingsvlakke | Ja |
| Fillet en Chamfer | Op reguit rande tussen plat vlakke; ronde rande wat ontmoet, word gemiter |
| Shell en Draft | Shell maak plat vlakke oop (presiese wanddikte); Draft kantel plat vlakke |
| Uitvoere | STL, 3MF, STEP (presies: ronde vlakke geskryf op hul ware oppervlaktes; of gefasetteer), tekening-PDF en DXF |
| Tekeningaansigte | Getrek uit die fasette, insluitend snitaansigte |
| Vlakke en rande | Benoem en bekend volgens soort (plat, silinder, keël, sfeer, torus; reguit, sirkel), geneem uit die skette: die Simulasie-, Generatiewe en Vervaardiging-werkruimtes, Meet, kies en die gattabel gebruik hulle |

Die kaartjie naby die regterkant van die statusbalk sê **Maaskern** terwyl dit jou onderdeel bou.

## Wat op 'n presiese kern wag

'n Presiese (B-rep) kern hou ware sirkels, silinders en keëls, en gladde afrondings op enige rand. Sweeps, lofts, oppervlaktes, plaatmetaal, ribbe, verskeie liggame en STEP-invoer met geboë vlakke wat presies gehou word, is op een gebou. (Presiese STEP-uitvoer wag nie daarvoor nie: die maaskern ken elke vlak se ware oppervlak uit die skets, en die uitvoer skryf dit.) Vroeër laboratoriumbouings van PartCraft het OpenCascade daarvoor gebruik. Die lisensie daarvan (die LGPL) pas nie by hierdie vrystelling nie, waar elke program Apache-2.0 is en slegs permissief gelisensieerde biblioteke gebruik, daarom is dit nie ingesluit nie. Niks hier het 'n datum nie.

Tot dan sê daardie kenmerke **Nog nie gebou nie** wanneer jy hulle kies: die statusbalk gee die rede, en hulle se knoppies se wenkbalkbeskrywings eindig met "nog nie gebou nie (benodig 'n presiese kern)". [Wat nog nie gebou is nie](topic:not-built-yet) lys elkeen met wat om eerder te doen.

'n Onderdeel wat met hulle in 'n vroeër bou gemaak is, maak steeds oop. Daardie kenmerke bly in die geskiedenis gemerk as nie gebou nie (hou een aan vir die rede), die res van die onderdeel bou, en stoor hou hulle onveranderd.

## Ronde vlakke en Kurwes

Die maaskern teken 'n sirkel as 'n veelhoek. **Kurwes** in die onderdeelpaneel stel hoeveel sye 'n volle sirkel kry; meer sye lyk gladder en meet nader aan die ware waarde, en neem langer om te bou. Volumes, oppervlaktes en afstande van {{ui:Meet}} is van hierdie gefasetteerde soliede: vir 'n gat of 'n verhoging is hulle 'n bietjie kleiner as die ronde vorm s'n.

## Aanlyn en vanlyn

Die maaskern is deel van die toepassing se eie aflaai. Om sonder verbinding te werk, stoor PartCraft vir vanlyn-gebruik terwyl jy aanlyn is: kies {{ui:Stoor vir vanlyn}} in die programbalk en wag totdat dit **Gereed vir vanlyn** sê. Besonderhede: [Werk vanlyn](common:offline).
