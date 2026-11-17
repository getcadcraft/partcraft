---
title: Data uit: datablad, velde en maas
summary: Stoor 'n gegenereerde liggaam se datablad as JSON of PDF, sy veld as 'n VTK-beeld (.vti) of 'n OpenVDB-vlakstel (.vdb) en sy oppervlak as 'n VTK-maas (.vtu) vir ParaView en ander analisehulpmiddels, en die maas as 'n 3MF wat die generator se data dra. Dieselfde onderdeel skryf altyd dieselfde lêers.
keywords: uitvoer, datablad, json, pdf, vti, vtu, vtk, paraview, 3mf, veld, geteken afstand, fea, cfd, metadata, openvdb
from: 817b4579
---

In die {{ui:Ingenieur}}-werkruimte, of in die eienskappe van 'n Gegenereerde liggaam, maak **Data uit** oop:

| Knoppie | Lêer | Vir |
|---|---|---|
| Datablad (JSON) | `.json` | Elke invoer, elke getal met sy eenheid en bron, die kontroles, die maasvingerafdruk. Gesorteer, geen tye nie: dieselfde onderdeel gee dieselfde lêer. |
| Datablad (PDF) | `.pdf` | Dieselfde op papier, oor soveel bladsye as dit nodig het. |
| Veld (.vti) | `.vti` | Die onderdeel as 'n geteekende afstand (negatief binne) en 'n binnemasker op 'n rooster van punte: 'n VTK-beeldlêer vir ParaView en gereedskap wat op VTK gebou is. Dit word gebou uit die liggaam se oppervlak by die voksel-grootte van die generator se invoere, so dit neem 'n oomblik, en 'n liggaam van meer as 400 000 driehoeke is te groot vir die bladsy: stoor eerder die veld uit 'n skrip (`field_bake`). |
| Vlakstel (.vdb) | `.vdb` | Dieselfde veld as 'n OpenVDB-vlakstel: 'n yl boom wat net die dun band van voksels rondom die oppervlak hou, vir gereedskap wat OpenVDB lees (weergawers, simulasie en 3D-programme). Voksel-grootte en eenhede is dié van die generator (millimeter), die smal band is die aktiewe deel, binne is negatief. Gebou uit die oppervlak soos die `.vti`, met dieselfde limiet van 400 000 driehoeke; 'n lêer wat meer as 1.5 GB sou wees, word geweier (gebruik 'n groter voksel-grootte). Die lêer is OpenVDB-formaat 224, ongekomprimeer behalwe OpenVDB se eie pakking van aktiewe waardes, so enige OpenVDB-leser open dit. |
| Oppervlak (.vtu) | `.vtu` | Die driehoeke, met elkeen se oppervlakte en normaal. |
| 3MF met generatordata | `.3mf` | Die maas in millimeter vir 'n snyprogram, met die generator, sy invoere en (vir 'n gegradeerde rooster) sy wandreeks as metadata in die lêer. |

Niks in hierdie lêers kom van die klok of die masjien nie, so jy kan twee lêers byte vir byte vergelyk: 'n veranderde byte beteken 'n veranderde onderdeel.

## Nog nie gebou nie

- 'n `.vti` of `.vdb` van die veld by 'n voksel-grootte anders as die generator se eie.
- `.vdb`-lêers invoer lees (slegs skryf is gebou).
