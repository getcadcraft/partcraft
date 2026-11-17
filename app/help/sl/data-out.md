---
title: Izvoz podatkov: podatkovni list, polja in mreže
summary: Shranite podatkovni list ustvarjenega telesa kot JSON ali PDF, njegovo polje kot sliko VTK (.vti) ali nivojsko množico OpenVDB (.vdb) in njegovo površino kot mrežo VTK (.vtu) za ParaView in druga orodja za analizo ter mrežo kot 3MF s podatki generatorja. Isti del vedno zapiše iste datoteke.
keywords: izvoz, podatkovni list, json, pdf, vti, vtu, vtk, paraview, 3mf, polje, predznačena razdalja, fea, cfd, metapodatki, openvdb
from: 817b4579
---

V delovnem okolju {{ui:Inženirstvo}} ali v lastnostih ustvarjenega telesa odprite **Izvoz podatkov**:

| Gumb | Datoteka | Za |
|---|---|---|
| Podatkovni list (JSON) | `.json` | Vsak vnos, vsako število z enoto in virom, preverjanja, prstni odtis mreže. Urejeno, brez časov: isti del da isto datoteko. |
| Podatkovni list (PDF) | `.pdf` | Enako na papirju, čez toliko strani, kolikor jih potrebuje. |
| Polje (.vti) | `.vti` | Del kot predznačena razdalja (negativna znotraj) in maska notranjosti na mreži točk: slikovna datoteka VTK za ParaView in orodja, zgrajena na VTK. Zgradi se iz površine telesa pri velikosti voksla vhodov generatorja, zato traja trenutek, telo čez 400 000 trikotnikov pa je za stran preveliko: polje raje shranite iz skripta (`field_bake`). |
| Nivojska množica (.vdb) | `.vdb` | Isto polje kot nivojska množica OpenVDB: redko drevo, ki hrani samo tanek pas voksla okoli površine, za orodja, ki berejo OpenVDB (upodabljalniki, simulacije in 3D-programi). Velikost voksla in enote so generatorjeve (milimetri), ozki pas je aktivni del, znotraj je negativno. Zgrajena iz površine kot `.vti`, z isto mejo 400 000 trikotnikov; datoteka, ki bi presegla 1.5 GB, je zavrnjena (uporabite večjo velikost voksla). Datoteka je v formatu OpenVDB 224, nestisnjena razen lastnega pakiranja aktivnih vrednosti OpenVDB, zato jo odpre vsak bralnik OpenVDB. |
| Površina (.vtu) | `.vtu` | Trikotniki, z vsakim njegovo površino in normalo. |
| 3MF s podatki generatorja | `.3mf` | Mreža v milimetrih za slicer, z generatorjem, njegovimi vhodi in (za mrežno strukturo s stopnjevanjem) njenim razponom sten kot metapodatki v datoteki. |

Nič v teh datotekah ne prihaja iz ure ali stroja, zato lahko dve datoteki primerjate bajt za bajtom: spremenjen bajt pomeni spremenjen del.

## Še ni zgrajeno

- `.vti` ali `.vdb` polja pri velikosti voksla, ki ni generatorjeva.
- Branje datotek `.vdb` (zgrajeno je samo pisanje).
