---
title: Lêerformate
summary: Elke lêer wat PartCraft lees en skryf, met uitbreidings, eenhede, asse en wat elkeen behou of verloor.
keywords: formate, lêertipes, uitbreidings, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, maas, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, eenhede, z opwaarts
from: 4d0ecbee
---

| Formaat | Uitbreiding | Oopmaak | Stoor of uitvoer | Eenhede | Op-as | Behou |
|---|---|---|---|---|---|---|
| PartCraft-onderdeel | `.partcraft.json` | Ja | {{ui:Stoor}} | mm | Y | Die volle geskiedenis: skets, verhoudings, afmetings, kenmerke, onderdrukking, terugrol, krommes-instelling, tekeninginstellings en GD&T, STEP-teks wat in 'n vroeër bou ingevoer is |
| PartCraft-samestelling | `.partcraft-asm.json` | Ja | {{ui:Stoor}} in 'n samestelling | mm | Y | Elke onderdeel (ingebed), die kopieë en hul posisies, die verbindings |
| STL (binêr of teks) | `.stl` | Ja, as 'n soliede liggaam: [Maak 'n STL, OBJ of 3MF oop](topic:open-meshes) | {{ui:STL, vir 3D-druk}} | mm (word gevra wanneer dit oopgemaak word) | Z | Net die soliede se driehoeke |
| 3MF | `.3mf` | Ja, as 'n soliede liggaam | {{ui:3MF, vir 3D-druk}} | mm (staan in die lêer) | Z | Die soliede as een maasvoorwerp |
| OBJ | `.obj` | Ja, as 'n soliede liggaam (net vlakke) | Nee | word gevra wanneer dit oopgemaak word | Z of Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ja, as 'n soliede liggaam wat as driehoeke gelees word (geboë vlakke word as fasette geteken; die lêer se plat vlakke, silinders, keëls, sfere en torusse word vir presiese uitvoer behou): [Maak 'n STEP-lêer oop](topic:import-step) | | mm (uit die lêer se eenheid) | Z, of Y as jy dit sê | Die soliede en oppervlakliggaam, samestellings met elke onderdeel op sy plek; geen kleure, name, samestellingsboom of PMI nie |
| `.3dm` | `.3dm` | Ja, as een soliede liggaam uit sy maas en oppervlaktes (gestoorde weergave-maas, anders getesselleer): [Maak 'n .3dm-model oop](topic:open-3dm-files) | | Uit die lêer se eenheid | Z, of Y as jy dit sê | Maas, polioppervlaktes, uittrekkings en blokplasings as een liggaam; geen krommes, kleure, lae of name nie |
| STEP AP242, presies | `.step` | | {{ui:STEP AP242 (presiese soliede)}} | mm | Z | Een presiese soliede: plat vlakke, silinders, keëls, sfere en torusse op hul ware oppervlakke, ware sirkels en lyne as rande; spline-sye, gemodelleerde drade, liggame uit maaslêers en 'n STEP-lêer se spline-vlakke bly fasette. Die STEP om vir ander CAD- en CAM-programme te gebruik |
| STEP AP214, presies | `.step` | | {{ui:STEP AP214 (presiese soliede)}} | mm | Z | Dieselfde presiese soliede in die ouer AP214-skema, vir programme wat net dit lees |
| STEP AP242, gefasetteer | `.step` | | {{ui:STEP (gefasseteer, maaskern)}} | mm | Y | 'n Geslote soliede van plat vlakke: ronde oppervlakke as fasette. Vir 'n program wat die presiese lêer weier |
| STEP AP214, gefasetteer | `.step` | | {{ui:STEP AP214 (gefasetteer, maaskern)}} | mm | Y | Dieselfde soliede in die ouer AP214-skema, vir programme wat net dit lees |
| USD-pakket | `.usdz` | Nee | {{ui:USD package (.usdz)}} | m | Z | Die soliede met sy materiaal, volume en massa; 'n samestelling met elke onderdeel een keer en elke kopie geplaas: [Uitvoer as USD](topic:usd) |
| IFC 4 | `.ifc` | Nee | {{ui:IFC 4 (met elke eienskap)}} | mm | Z | Die vorm as driehoeke, die materiaal, elke parameter, die titelblok, hoeveelhede; 'n samestelling se onderdele as tipes en sy kopieë geplaas |
| DXF R12, skets | `.dxf` | Nee | {{ui:DXF van die skets of plat vlak}} met 'n skets gekies | mm | Die skets se eie x, y | Lyne, ware bôë en sirkels, punte; lae PROFILE, CONSTRUCTION, POINTS |
| DXF R12, vlak | `.dxf` | Nee | {{ui:DXF van die skets of plat vlak}} met 'n plat vlak gekies | mm | Die vlak se eie x, y | Die vlak se omtrekke: ronde gate as ware sirkels, die res as geslote polilyne (ronde rande as fasette) |
| PDF-tekening | `.pdf` | Nee | {{ui:Tekening (PDF): aansigte, snit, detail, GD&T}} | mm op 'n A3-blad | | Voor-, bo-, regter-, isometriese, snit- en detailaansigte uit fasette geteken, verborge lyne, algehele groottes, GD&T-simbole, titelblok |

## Die PartCraft-lêers

Albei is gewone teks (JSON). Die soliede word nooit gestoor nie: PartCraft bou dit weer uit die geskiedenis, sodat lêers klein bly en altyd by die geskiedenis pas.

- Elke lêer het 'n weergawenommer. Hierdie bou skryf elke onderdeellêer met die laagste weergawe wat alles hou wat dit gebruik (2 tot 5; 'n liggaam wat uit 'n maas gemaak is, benodig 5) en open elke ouer weergawe. 'n Lêer van 'n nuwer PartCraft word geweier met 'n boodskap wat albei weergawes noem.
- Elke waarde word nagegaan wanneer 'n lêer oopgemaak word. Name verloor beheerkarakters; getalle buite bereik, verwysings na ontbrekende kenmerke en onbekende kenmerksoorte word met 'n eenvoudige rede geweier.
- Moenie hierdie lêers met die hand wysig nie, tensy jy die formaat ken. 'n Lêer wat nie die kontroles slaag nie, sal nie oopmaak nie.
- 'n Onderdeel met 'n groot STEP-soliede wat in 'n vroeër bou ingevoer is, kan 50 MB oorskry, die meeste wat PartCraft as onderdeellêer oopmaak (sien [Foutoplossing](topic:troubleshooting#file-problems)).

## Fasette en presiesheid

STL en 3MF bestaan altyd uit fasette, teen die **Curves**-instelling, en so ook die vlak-DXF, behalwe vir ronde gate, wat ware sirkels is. Die skets-DXF het ware bôë en sirkels, omdat dit reguit uit die skets kom. Hierdie weergawe bou elke onderdeel met die maaskern, so die tekening se aansigte (insluitend snitte) is ook gefasetteer. Die presiese STEP-uitvoer is die uitsondering: die kern ken elke vlak se ware oppervlak uit die skets (of uit die STEP-lêer waaruit 'n liggaam oopgemaak is), so ronde vlakke word as ware silinders, keëls, sfere en torusse geskryf, ongeag hoe **Curves** ingestel is (sien [Uitvoer vir druk, STEP en DXF](topic:export-files#for-other-cad-programs-step)).

## Nie ondersteun in hierdie weergawe nie

| Formaat | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (in of uit); OBJ-uitvoer | Nie gebou nie |
| DWG | Net geskryf deur [die variantpakket](topic:variant-pack), as die tekeningblad van elke konfigurasie. Nie gelees nie, en geen ander uitvoer nie. Voer DXF uit; elke CAD-program maak R12-DXF oop |
| Samestelling-STEP en die tekening van 'n samestelling | Nog nie gebou nie. Voer elke onderdeel uit as presiese STEP; STL, 3MF en die materiaallys voer uit 'n samestelling uit |
| Ander programme se eie onderdeel- en samestellinglêers (behalwe `.3dm`, wat as een liggaam oopmaak) | Nie gebou nie |

Sien [Wat nog nie gebou is nie](topic:not-built-yet).
