---
title: Data exporteren: gegevensblad, velden en meshes
summary: Sla het gegevensblad van een gegenereerd lichaam op als JSON of PDF, het veld als VTK-beeld (.vti) of OpenVDB-niveauset (.vdb) en het oppervlak als VTK-mesh (.vtu) voor ParaView en andere analysehulpmiddelen, en de mesh als 3MF met de gegevens van de generator. Hetzelfde onderdeel schrijft altijd dezelfde bestanden.
keywords: exporteren, gegevensblad, json, pdf, vti, vtu, vtk, paraview, 3mf, veld, afstand met teken, signed distance, fea, cfd, metadata, openvdb
from: 817b4579
---

In de werkomgeving {{ui:Engineer}}, of in de eigenschappen van een gegenereerd lichaam, opent u **Data exporteren**:

| Knop | Bestand | Voor |
|---|---|---|
| Gegevensblad (JSON) | `.json` | Elke invoer, elk getal met zijn eenheid en bron, de controles, de meshvingerafdruk. Gesorteerd, zonder tijden: hetzelfde onderdeel geeft hetzelfde bestand. |
| Gegevensblad (PDF) | `.pdf` | Hetzelfde op papier, over zoveel pagina's als nodig. |
| Veld (.vti) | `.vti` | Het onderdeel als afstand met teken (negatief binnenin) en een binnenmasker op een raster van punten: een VTK-beeldbestand voor ParaView en hulpmiddelen die op VTK zijn gebouwd. Het wordt opgebouwd uit het oppervlak van het lichaam op de voxelgrootte van de invoer van de generator, dus het duurt even, en een lichaam van meer dan 400 000 driehoeken is te groot voor de pagina: sla het veld dan op vanuit een script (`field_bake`). |
| Niveauset (.vdb) | `.vdb` | Hetzelfde veld als OpenVDB-niveauset: een ijle boom die alleen de dunne band van voxels rond het oppervlak bewaart, voor hulpmiddelen die OpenVDB lezen (renderers, simulatie- en 3D-programma's). Voxelgrootte en eenheden zijn die van de generator (millimeter), de smalle band is het actieve deel, binnenin is negatief. Opgebouwd uit het oppervlak zoals de `.vti`, met dezelfde limiet van 400 000 driehoeken; een bestand van meer dan 1.5 GB wordt geweigerd (gebruik een grotere voxelgrootte). Het bestand is OpenVDB-formaat 224, ongecomprimeerd behalve de eigen actieve-waardenpakking van OpenVDB, dus elke OpenVDB-lezer opent het. |
| Oppervlak (.vtu) | `.vtu` | De driehoeken, met de oppervlakte en normaal van elk. |
| 3MF met generatorgegevens | `.3mf` | De mesh in millimeter voor een slicer, met de generator, zijn invoer en (voor een gegradueerd rooster) zijn wanddikte-bereik als metadata in het bestand. |

Niets in deze bestanden komt van de klok of de machine, dus u kunt twee bestanden byte voor byte vergelijken: een gewijzigde byte betekent een gewijzigd onderdeel.

## Nog niet beschikbaar

- Een `.vti` of `.vdb` van het veld op een andere voxelgrootte dan die van de generator zelf.
- Het inlezen van `.vdb`-bestanden (alleen schrijven is beschikbaar).
