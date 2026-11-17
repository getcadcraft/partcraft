---
title: Dataudtræk: datablad, felter og meshes
summary: Gem et genereret legemes datablad som JSON eller PDF, dets felt som et VTK-billede (.vti) eller et OpenVDB-niveausæt (.vdb) og dets overflade som et VTK-mesh (.vtu) til ParaView og andre analyseværktøjer, og mesh'et som en 3MF med generatorens data. Den samme del skriver altid de samme filer.
keywords: eksport, datablad, json, pdf, vti, vtu, vtk, paraview, 3mf, felt, fortegnet afstand, fea, cfd, metadata, openvdb
from: 817b4579
---

I {{ui:Ingeniør}}-arbejdsområdet, eller i egenskaberne for et genereret legeme, åbn **Dataudtræk**:

| Knap | Fil | Til |
|---|---|---|
| Datablad (JSON) | `.json` | Alle input, alle tal med deres enhed og kilde, kontrollerne, mesh-fingeraftrykket. Sorteret, uden tidspunkter: den samme del giver den samme fil. |
| Datablad (PDF) | `.pdf` | Det samme på papir, over så mange sider, som der er brug for. |
| Felt (.vti) | `.vti` | Delen som fortegnet afstand (negativ indeni) og en indvendig maske på et gitter af punkter: en VTK-billedfil til ParaView og værktøjer bygget på VTK. Den bygges ud fra legemets overflade med voxel-størrelsen fra generatorens input, så det tager et øjeblik, og et legeme over 400 000 trekanter er for stort til siden: gem feltet fra et script (`field_bake`) i stedet. |
| Niveausæt (.vdb) | `.vdb` | Det samme felt som et OpenVDB-niveausæt: et sparsomt træ, der kun gemmer det tynde bånd af voxels omkring overfladen, til værktøjer der læser OpenVDB (renderere, simulering og 3D-programmer). Voxel-størrelse og enheder er generatorens (millimeter), det smalle bånd er den aktive del, og indersiden er negativ. Bygget ud fra overfladen som `.vti`, med samme grænse på 400 000 trekanter; en fil, der ville være over 1.5 GB, afvises (brug en større voxel-størrelse). Filen er i OpenVDB-format 224, ukomprimeret bortset fra OpenVDB's egen pakning af aktive værdier, så enhver OpenVDB-læser kan åbne den. |
| Overflade (.vtu) | `.vtu` | Trekanterne, med hver enkelts areal og normal. |
| 3MF med generatordata | `.3mf` | Mesh'et i millimeter til en slicer, med generatoren, dens input og (for et gradueret gitter) dets vægområde som metadata i filen. |

Intet i disse filer stammer fra uret eller maskinen, så du kan sammenligne to filer byte for byte: en ændret byte betyder en ændret del.

## Ikke lavet endnu

- En `.vti` eller `.vdb` af feltet i en anden voxel-størrelse end generatorens egen.
- Indlæsning af `.vdb`-filer (kun skrivning er lavet).
