---
title: Andmete eksport: andmeleht, väljad ja võrgud
summary: Salvesta genereeritud keha andmeleht JSON või PDF formaadis, selle väli VTK pildina (.vti) või OpenVDB tasemekomplektina (.vdb) ning pind VTK võrguna (.vtu) ParaView'le ja teistele analüüsitööriistadele, ning võrk 3MF-ina, mis kannab generaatori andmeid. Sama detail kirjutab alati samad failid.
keywords: eksport, andmeleht, json, pdf, vti, vtu, vtk, paraview, 3mf, väli, märgistatud kaugus, fea, cfd, metaandmed, openvdb
from: 817b4579
---

{{ui:Insener}} tööruumis või genereeritud keha omadustes ava **Andmete eksport**:

| Nupp | Fail | Mille jaoks |
|---|---|---|
| Andmeleht (JSON) | `.json` | Iga sisend, iga arv koos ühiku ja allikaga, kontrollid, võrgu sõrmejälg. Sorteeritud, ilma kellaaegadeta: sama detail annab sama faili. |
| Andmeleht (PDF) | `.pdf` | Sama paberil, nii mitmel lehel, kui vaja. |
| Väli (.vti) | `.vti` | Detail märgistatud kaugusena (negatiivne seespool) ja seesmise maskina punktide ruudustikul: VTK pildifail ParaView'le ja VTK-l põhinevatele tööriistadele. See koostatakse keha pinnast generaatori sisendite vokselisuurusega, nii et see võtab hetke, ja keha, millel on üle 400 000 kolmnurga, on lehe jaoks liiga suur: salvesta väli skriptist (`field_bake`). |
| Tasemekomplekt (.vdb) | `.vdb` | Sama väli OpenVDB tasemekomplektina: hõre puu, mis hoiab ainult pinna ümber oleva õhukese vokselivööndi, tööriistadele, mis loevad OpenVDB-d (renderdajad, simulatsioon ja 3D-programmid). Vokselisuurus ja ühikud on generaatori omad (millimeetrid), kitsas vöönd on aktiivne osa, seesmine on negatiivne. Koostatakse pinnast nagu `.vti`, sama 400 000 kolmnurga piiriga; fail, mis läheks üle 1,5 GB, keeldutakse (kasuta suuremat vokselisuurust). Fail on OpenVDB formaat 224, pakkimata, välja arvatud OpenVDB enda aktiivväärtuste pakkimine, nii et iga OpenVDB lugeja avab selle. |
| Pind (.vtu) | `.vtu` | Kolmnurgad koos iga ühe pindala ja normaaliga. |
| 3MF generaatori andmetega | `.3mf` | Võrk millimeetrites lõikuri jaoks, koos generaatori, selle sisenditega ja (kihilise võre puhul) selle seinte vahemikuga metaandmetena failis. |

Miski neis failides ei tule kellast ega masinast, nii et kahte faili saab võrrelda bait baidi kaupa: muutunud bait tähendab muutunud detaili.

## Pole veel ehitatud

- `.vti` või `.vdb` väli muu vokselisuurusega kui generaatori enda oma.
- `.vdb` failide sisselugemine (on ehitatud ainult kirjutamine).
