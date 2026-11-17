---
title: Bestandsformaten
summary: Elk bestand dat PartCraft leest en schrijft, met extensies, eenheden, assen en wat elk bewaart of verliest.
keywords: formaten, bestandstypen, extensies, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, eenheden, z omhoog
from: 4d0ecbee
---

| Formaat | Extensie | Openen | Opslaan of exporteren | Eenheden | Omhoogas | Bewaart |
|---|---|---|---|---|---|---|
| PartCraft-onderdeel | `.partcraft.json` | Ja | {{ui:Opslaan}} | mm | Y | De volledige geschiedenis: schetsen, relaties, maten, features, onderdrukking, terugrollen, instelling voor rondingen, tekeninginstellingen en GD&T, STEP-tekst die in een eerdere build is geïmporteerd |
| PartCraft-samenstelling | `.partcraft-asm.json` | Ja | {{ui:Opslaan}} in een samenstelling | mm | Y | Elk onderdeel (ingesloten), de kopieën en hun posities, de verbindingen |
| STL (binair of tekst) | `.stl` | Ja, als volumelichaam: [Een STL, OBJ of 3MF openen](topic:open-meshes) | {{ui:STL, voor 3D-printen}} | mm (bij openen gevraagd) | Z | Alleen de driehoeken van het volume |
| 3MF | `.3mf` | Ja, als volumelichaam | {{ui:3MF, voor 3D-printen}} | mm (staat in het bestand) | Z | Het volume als één meshobject |
| OBJ | `.obj` | Ja, als volumelichaam (alleen vlakken) | Nee | bij openen gevraagd | Z of Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ja, als volumelichaam ingelezen als driehoeken (gebogen vlakken getekend als facetten; de vlakke vlakken, cilinders, kegels, bollen en torussen van het bestand blijven bewaard voor exacte export): [Een STEP-bestand openen](topic:import-step) | | mm (uit de eenheid van het bestand) | Z, of Y als u dat aangeeft | De volumes en oppervlaklichamen, samenstellingen met elk onderdeel op zijn plaats; geen kleuren, namen, samenstellingsboom of PMI |
| `.3dm` | `.3dm` | Ja, als één volumelichaam uit de meshes en oppervlakken (opgeslagen rendermeshes, anders getesselleerd): [Een .3dm-model openen](topic:open-3dm-files) | | Uit de eenheid van het bestand | Z, of Y als u dat aangeeft | Meshes, polysurfaces, extrusies en blokplaatsingen als één lichaam; geen curven, kleuren, lagen of namen |
| STEP AP242, exact | `.step` | | {{ui:STEP AP242 (exact volume)}} | mm | Z | Eén exact volume: vlakke vlakken, cilinders, kegels, bollen en torussen op hun echte oppervlakken, echte cirkels en lijnen als randen; splineflanken, gemodelleerde schroefdraad, lichamen uit meshbestanden en spline-vlakken van een STEP-bestand blijven facetten. De STEP om te gebruiken voor andere CAD- en CAM-programma's |
| STEP AP214, exact | `.step` | | {{ui:STEP AP214 (exact volume)}} | mm | Z | Hetzelfde exacte volume in het oudere AP214-schema, voor programma's die alleen dat lezen |
| STEP AP242, gefacetteerd | `.step` | | {{ui:STEP (gefacetteerd, meshkernel)}} | mm | Y | Een gesloten volume van vlakke vlakken: ronde oppervlakken als facetten. Voor een programma dat het exacte bestand weigert |
| STEP AP214, gefacetteerd | `.step` | | {{ui:STEP AP214 (gefacetteerd, mesh-kernel)}} | mm | Y | Hetzelfde volume in het oudere AP214-schema, voor programma's die alleen dat lezen |
| USD-pakket | `.usdz` | Nee | {{ui:USD-pakket (.usdz)}} | m | Z | Het volume met zijn materiaal, volume en massa; een samenstelling met elk onderdeel één keer en elke kopie geplaatst: [Exporteren als USD](topic:usd) |
| IFC 4 | `.ifc` | Nee | {{ui:IFC 4 (met elke eigenschap)}} | mm | Z | De vorm als driehoeken, het materiaal, elke parameter, het titelblok, hoeveelheden; de onderdelen van een samenstelling als types en de kopieën geplaatst |
| DXF R12, schets | `.dxf` | Nee | {{ui:DXF van de schets of het platte vlak}} met een geselecteerde schets | mm | Eigen x, y van de schets | Lijnen, echte bogen en cirkels, punten; lagen PROFILE, CONSTRUCTION, POINTS |
| DXF R12, vlak | `.dxf` | Nee | {{ui:DXF van de schets of het platte vlak}} met een gekozen plat vlak | mm | Eigen x, y van het vlak | De omtrekken van het vlak: ronde gaten als echte cirkels, de rest als gesloten polylijnen (ronde randen als facetten) |
| PDF-tekening | `.pdf` | Nee | {{ui:Tekening (PDF): aanzichten, doorsnede, detail, GD&T}} | mm op een A3-blad | | Voor-, boven-, rechter-, isometrisch-, doorsnede- en detailaanzichten getekend uit facetten, verborgen lijnen, totale maten, GD&T-symbolen, titelblok |

## De PartCraft-bestanden

Beide zijn platte tekst (JSON). Het volume wordt nooit opgeslagen: PartCraft bouwt het opnieuw op uit de geschiedenis, zodat bestanden klein blijven en altijd bij de geschiedenis passen.

- Elk bestand heeft een versienummer. Deze build schrijft elk onderdeelbestand met de laagste versie die bevat wat het gebruikt (2 tot 5; een lichaam uit een mesh heeft 5 nodig) en opent elke oudere versie. Een bestand van een nieuwere PartCraft wordt geweigerd met een melding die beide versies noemt.
- Elke waarde wordt gecontroleerd bij het openen van een bestand. Namen verliezen besturingstekens; getallen buiten bereik, verwijzingen naar ontbrekende features en onbekende soorten features worden geweigerd met een duidelijke reden.
- Bewerk deze bestanden niet met de hand, tenzij u het formaat kent. Een bestand dat de controles niet doorstaat, wordt niet geopend.
- Een onderdeel met een groot STEP-volume dat in een eerdere build is geïmporteerd, kan 50 MB overschrijden, de grens die PartCraft als onderdeelbestand opent (zie [Problemen oplossen](topic:troubleshooting#file-problems)).

## Facetten en exactheid

STL en 3MF bestaan altijd uit facetten, volgens de instelling **Rondingen**, en zo ook het vlak-DXF behalve bij ronde gaten, die echte cirkels zijn. De schets-DXF heeft echte bogen en cirkels, omdat die rechtstreeks uit de schets komt. Deze versie bouwt elk onderdeel met de meshkernel, dus de aanzichten van de tekening (ook de doorsneden) zijn ook gefacetteerd. De exacte STEP-export is de uitzondering: de kernel kent het echte oppervlak van elk vlak uit de schets (of uit het STEP-bestand waaruit een lichaam is geopend), dus ronde vlakken worden geschreven als echte cilinders, kegels, bollen en torussen, ongeacht de instelling van **Rondingen** (zie [Exporteren voor printen, STEP en DXF](topic:export-files#for-other-cad-programs-step)).

## Niet ondersteund in deze build

| Formaat | Status |
|---|---|
| glTF, IGES, Parasolid, ACIS (in of uit); OBJ-export | Nog niet beschikbaar |
| DWG | Wordt alleen geschreven door [het variantenpakket](topic:variant-pack), als het tekenblad van elke configuratie. Niet gelezen, en geen andere export. Exporteer DXF; elk CAD-programma opent R12-DXF |
| STEP van een samenstelling en de tekening van een samenstelling | Nog niet beschikbaar. Exporteer elk onderdeel als exacte STEP; STL, 3MF en de stuklijst worden vanuit een samenstelling geëxporteerd |
| Eigen onderdeel- en samenstellingsbestanden van andere programma's (behalve `.3dm`, dat als één lichaam opent) | Nog niet beschikbaar |

Zie [Wat nog niet beschikbaar is](topic:not-built-yet).
