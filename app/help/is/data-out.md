---
title: Útflutningur gagna: gagnablað, reitir og möskvar
summary: Vistaðu gagnablað myndaðs búks sem JSON eða PDF, reit hans sem VTK-myndskrá (.vti) eða OpenVDB-jöfnumengi (.vdb) og yfirborð hans sem VTK-möskva (.vtu) fyrir ParaView og önnur greiningarverkfæri, og möskvann sem 3MF sem ber gögn rafalsins. Sami hluti skrifar alltaf sömu skrárnar.
keywords: útflutningur, gagnablað, json, pdf, vti, vtu, vtk, paraview, 3mf, reitur, fjarlægðarreitur með formerki, fea, cfd, lýsigögn, openvdb
from: 817b4579
---

Í {{ui:Verkfræði}}-vinnusvæðinu, eða í eiginleikum myndaðs búks, opnaðu **Útflutningur gagna**:

| Hnappur | Skrá | Fyrir |
|---|---|---|
| Gagnablað (JSON) | `.json` | Sérhvert inntak, sérhver tala með einingu og uppsprettu, athuganirnar, fingrafar möskvans. Raðað, án tíma: sami hluti gefur sömu skrá. |
| Gagnablað (PDF) | `.pdf` | Sama á pappír, á eins mörgum síðum og þörf er á. |
| Reitur (.vti) | `.vti` | Hluturinn sem undirritað fjarlægðarsvið (neikvætt inni) og innri gríma á rist punkta: VTK-myndskrá fyrir ParaView og verkfæri byggð á VTK. Hún er smíðuð úr yfirborði búksins á rúmdílastærð inntaka rafalsins, þannig að það tekur smá stund, og búkur yfir 400 000 þríhyrningum er of stór fyrir síðuna: vistaðu reitinn úr skrift í staðinn (`field_bake`). |
| Jöfnumengi (.vdb) | `.vdb` | Sami reitur sem OpenVDB-jöfnumengi: strjált tré sem geymir aðeins þunna bandið af rúmdílum um yfirborðið, fyrir verkfæri sem lesa OpenVDB (myndgerðarforrit, hermun og þrívíddarforrit). Rúmdílastærð og einingar eru rafalsins (millimetrar), þunna bandið er virki hlutinn, innan er neikvætt. Smíðað úr yfirborðinu eins og `.vti`, með sömu 400 000 þríhyrninga takmörkun; skrá sem væri yfir 1,5 GB er hafnað (notaðu stærri rúmdílastærð). Skráin er OpenVDB-snið 224, óþjöppuð fyrir utan eigin pökkun OpenVDB á virkum gildum, þannig að sérhver OpenVDB-lesari opnar hana. |
| Yfirborð (.vtu) | `.vtu` | Þríhyrningarnir, með flatarmál og normal hvers þeirra. |
| 3MF með gögnum rafalsins | `.3mf` | Möskvinn í millimetrum fyrir skerara, með rafalnum, inntökum hans og (fyrir stigið grindarnet) veggjasviði þess sem lýsigögn í skránni. |

Ekkert í þessum skrám kemur úr klukkunni eða vélinni, þannig að þú getur borið tvær skrár saman bæt fyrir bæt: breytt bæti þýðir breyttan hluta.

## Ekki smíðað enn

- `.vti` eða `.vdb` af reitnum við rúmdílastærð annarri en rafalsins sjálfs.
- Lestur `.vdb`-skráa inn (aðeins skrifun er smíðuð).
