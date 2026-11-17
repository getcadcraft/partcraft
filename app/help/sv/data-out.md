---
title: Dataexport: datablad, fält och nät
summary: Spara en genererad kropps datablad som JSON eller PDF, dess fält som en VTK-bild (.vti) eller en OpenVDB-nivåyta (.vdb) och dess yta som ett VTK-nät (.vtu) för ParaView och andra analysverktyg, samt nätet som en 3MF med generatorns data. Samma del skriver alltid samma filer.
keywords: export, datablad, json, pdf, vti, vtu, vtk, paraview, 3mf, fält, signerat avstånd, fea, cfd, metadata, openvdb
from: 817b4579
---

I arbetsytan {{ui:Ingenjör}}, eller i egenskaperna för en genererad kropp, öppnar du **Dataexport**:

| Knapp | Fil | För |
|---|---|---|
| Datablad (JSON) | `.json` | Varje indata, varje tal med dess enhet och källa, kontrollerna och nätets fingeravtryck. Sorterat, utan tider: samma del ger samma fil. |
| Datablad (PDF) | `.pdf` | Samma på papper, över så många sidor som det behöver. |
| Fält (.vti) | `.vti` | Delen som ett signerat avstånd (negativt inuti) och en inre mask på ett rutnät av punkter: en VTK-bildfil för ParaView och verktyg byggda på VTK. Den byggs från kroppens yta med voxelstorleken från generatorns indata, så det tar en stund, och en kropp över 400 000 trianglar är för stor för sidan: spara fältet från ett skript (`field_bake`) i stället. |
| Nivåyta (.vdb) | `.vdb` | Samma fält som en OpenVDB-nivåyta: ett glest träd som bara behåller det tunna bandet av voxlar runt ytan, för verktyg som läser OpenVDB (renderare, simulering och 3D-program). Voxelstorlek och enheter är generatorns (millimeter), det smala bandet är den aktiva delen, insidan är negativ. Byggs från ytan på samma sätt som `.vti`, med samma gräns på 400 000 trianglar; en fil som skulle bli över 1.5 GB avvisas (använd en större voxelstorlek). Filen är OpenVDB-format 224, okomprimerad utom OpenVDB:s egen packning av aktiva värden, så vilken OpenVDB-läsare som helst öppnar den. |
| Yta (.vtu) | `.vtu` | Trianglarna, med varje triangels area och normal. |
| 3MF med generatordata | `.3mf` | Nätet i millimeter för en slicer, med generatorn, dess indata och (för ett gradvis gitter) dess väggintervall som metadata i filen. |

Ingenting i dessa filer kommer från klockan eller maskinen, så du kan jämföra två filer byte för byte: en ändrad byte betyder en ändrad del.

## Finns inte ännu

- En `.vti` eller `.vdb` av fältet med en annan voxelstorlek än generatorns egen.
- Att läsa in `.vdb`-filer (bara skrivning finns).
