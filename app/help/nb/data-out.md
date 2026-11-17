---
title: Dataeksport: dataark, felt og nett
summary: Lagre en generert kropps dataark som JSON eller PDF, feltet som et VTK-bilde (.vti) eller et OpenVDB-nivåsett (.vdb) og overflaten som et VTK-nett (.vtu) for ParaView og andre analyseverktøy, og nettet som en 3MF med generatorens data. Den samme delen gir alltid de samme filene.
keywords: eksport, dataark, json, pdf, vti, vtu, vtk, paraview, 3mf, felt, signert avstand, fea, cfd, metadata, openvdb
from: 817b4579
---

I arbeidsområdet {{ui:Ingeniør}}, eller i egenskapene til en generert kropp, åpner du **Dataeksport**:

| Knapp | Fil | Bruk til |
|---|---|---|
| Dataark (JSON) | `.json` | Hver inndata, hvert tall med enhet og kilde, kontrollene, nettfingeravtrykket. Sortert, uten tider: samme del gir samme fil. |
| Dataark (PDF) | `.pdf` | Det samme på papir, over så mange sider som det trenger. |
| Felt (.vti) | `.vti` | Delen som en signert avstand (negativ inne) og en innvendig maske på et rutenett av punkter: en VTK-bildefil for ParaView og verktøy bygget på VTK. Den bygges fra kroppens overflate med vokselstørrelsen til generatorens inndata, så det tar et øyeblikk, og en kropp over 400 000 trekanter er for stor for siden: lagre feltet fra et skript (`field_bake`) i stedet. |
| Nivåsett (.vdb) | `.vdb` | Det samme feltet som et OpenVDB-nivåsett: et sparsomt tre som bare beholder det tynne båndet av voksler rundt overflaten, for verktøy som leser OpenVDB (renderere, simulering og 3D-programmer). Vokselstørrelse og enheter er generatorens (millimeter), det smale båndet er den aktive delen, og innsiden er negativ. Bygget fra overflaten som `.vti`, med samme grense på 400 000 trekanter; en fil som ville vært over 1.5 GB avvises (bruk en større vokselstørrelse). Filen er OpenVDB-format 224, ukomprimert bortsett fra OpenVDBs egen pakking av aktive verdier, så enhver OpenVDB-leser åpner den. |
| Overflate (.vtu) | `.vtu` | Trekantene, med hvert sitt areal og normal. |
| 3MF med generatordata | `.3mf` | Nettet i millimeter for en slicer, med generatoren, dens inndata og (for et gradert gitter) veggområdet som metadata i filen. |

Ingenting i disse filene kommer fra klokken eller maskinen, så du kan sammenligne to filer byte for byte: en endret byte betyr en endret del.

## Ikke bygget ennå

- En `.vti` eller `.vdb` av feltet med en annen vokselstørrelse enn generatorens egen.
- Lesing av `.vdb`-filer (bare skriving er bygget).
