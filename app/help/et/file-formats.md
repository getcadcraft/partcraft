---
title: Failivormingud
summary: Iga fail, mida PartCraft loeb ja kirjutab, koos laiendite, ühikute, telgede ning sellega, mida iga fail säilitab või kaotab.
keywords: vormingud, failitüübid, laiendid, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, võrk, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, ühikud, Z üles
from: 4d0ecbee
---

| Vorming | Laiend | Ava | Salvesta või ekspordi | Ühikud | Üles telg | Säilitab |
|---|---|---|---|---|---|---|
| PartCrafti detail | `.partcraft.json` | Jah | {{ui:Salvesta}} | mm | Y | Terve ajalugu: visandid, seosed, mõõtmed, elemendid, väljalülitamine, tagasikerimine, kõverate seade, joonise seaded ja GD&T, eelmises versioonis imporditud STEP-tekst |
| PartCrafti koost | `.partcraft-asm.json` | Jah | {{ui:Salvesta}} koosta | mm | Y | Iga detail (sisse pandud), koopiad ja nende asukohad, liited |
| STL (binaarne või tekst) | `.stl` | Jah, tahkekehana: [Ava STL, OBJ või 3MF](topic:open-meshes) | {{ui:STL, 3D-printimiseks}} | mm (küsitakse avamisel) | Z | Ainult tahke kolmnurgad |
| 3MF | `.3mf` | Jah, tahkekehana | {{ui:3MF, 3D-printimiseks}} | mm (on failis öeldud) | Z | Tahke ühe võrguobjektina |
| OBJ | `.obj` | Jah, tahkekehana (ainult tahud) | Ei | küsitakse avamisel | Z või Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Jah, tahkekehana, loetud kolmnurkadena (kõverad tahud joonistatakse fassettidena; faili lamedad tahud, silindrid, koonused, sfäärid ja torused säilitatakse täpseks eksportiks): [Ava STEP-fail](topic:import-step) | | mm (faili ühikust) | Z, või Y, kui nii öeldakse | Tahked ja pinnakehad, koosted kõigi detailidega oma kohal; ei värve, nimesid, koostepuud ega PMI-d |
| `.3dm` | `.3dm` | Jah, ühe tahkekehana selle võrkudest ja pindadest (salvestatud renderdusvõrgud, muidu tesselleeritud): [Ava .3dm-mudel](topic:open-3dm-files) | | Faili ühikust | Z, või Y, kui nii öeldakse | Võrgud, polüpinnad, ekstrusioonid ja plokkide paigutused ühe kehana; ei kõveraid, värve, kihte ega nimesid |
| STEP AP242, täpne | `.step` | | {{ui:STEP AP242 (täpne tahke)}} | mm | Z | Üks täpne tahke: lamedad tahud, silindrid, koonused, sfäärid ja torused oma tõelistel pindadel, tõelised ringid ja jooned servadena; splain-küljed, modelleeritud keered, võrgufailidest pärit kehad ja STEP-faili splain-tahud jäävad fassettideks. STEP teiste CAD- ja CAM-programmide jaoks |
| STEP AP214, täpne | `.step` | | {{ui:STEP AP214 (täpne tahke)}} | mm | Z | Sama täpne tahke vanemas AP214 skeemis, programmidele, mis seda ainult loevad |
| STEP AP242, fassetiline | `.step` | | {{ui:STEP (tahkudeks jaotatud, võrgusilma tuum)}} | mm | Y | Suletud tahke lamedatest tahkudest: ümarad pinnad fassettidena. Programmile, mis keeldub täpsest failist |
| STEP AP214, fassetiline | `.step` | | {{ui:STEP AP214 (fassetiline, võrgutuum)}} | mm | Y | Sama tahke vanemas AP214 skeemis, programmidele, mis seda ainult loevad |
| USD-pakett | `.usdz` | Ei | {{ui:USD-pakett (.usdz)}} | m | Z | Tahke koos materjali, ruumala ja massiga; koost, iga detail üks kord ja iga koopia paigutatud: [Ekspordi USD-na](topic:usd) |
| IFC 4 | `.ifc` | Ei | {{ui:IFC 4 (koos kõigi omadustega)}} | mm | Z | Kuju kolmnurkadena, materjal, iga parameeter, pealdisplokk, kogused; koosta detailid tüüpidena ja koopiad paigutatuna |
| DXF R12, visand | `.dxf` | Ei | {{ui:DXF visandist või lamedast tahust}} visandi valituna | mm | Visandi enda x, y | Jooned, tõelised kaared ja ringid, punktid; kihid PROFILE, CONSTRUCTION, POINTS |
| DXF R12, tahk | `.dxf` | Ei | {{ui:DXF visandist või lamedast tahust}} lame tahk valituna | mm | Tahu enda x, y | Tahu äärejooned: ümarad augud tõelise ringina, ülejäänud suletud polüjoonidena (ümarad servad fassettidena) |
| PDF-joonis | `.pdf` | Ei | {{ui:Joonis (PDF): vaated, lõige, detail, GD&T}} | mm A3 lehel | | Eesmine, ülemine, parem, isomeetriline, lõige ja detailvaated joonistatud fassettidest, peidetud jooned, üldmõõtmed, GD&T sümbolid, pealdisplokk |

## PartCrafti failid

Mõlemad on lihttekst (JSON). Tahket ennast ei salvestata: PartCraft ehitab selle ajaloost uuesti, nii et failid jäävad väikeseks ja alati ajalooga sobivaks.

- Igal failil on versiooninumber. See versioon kirjutab iga detailifaili madalaima versiooniga, mis hoiab kõike, mida ta kasutab (2 kuni 5; võrgust tehtud keha vajab 5), ja avab iga vanema versiooni. Uuema PartCrafti poolt salvestatud fail keeldutakse vastu võtmast; teade nimetab mõlemat versiooni.
- Iga väärtus kontrollitakse faili avamisel. Nimedest eemaldatakse juhtmärgid; arvud vahemikust väljas, viited puuduvatele elementidele ja tundmatud elementide liigid lükatakse tagasi lihtsa põhjusega.
- Ära muuda neid faile käsitsi, kui sa formaati ei tunne. Fail, mis ei läbi kontrolle, ei avane.
- Detail, millel on suur STEP-tahke, mis imporditi eelmises versioonis, võib ületada 50 MB; see on suurim detailifail, mida PartCraft avab (vt [Tõrkeotsing](topic:troubleshooting#file-problems)).

## Fassetid ja täpsus

STL ja 3MF koosnevad alati fassettidest **Kõverate** seadel, ja nii ka tahu DXF, välja arvatud ümarad augud, mis on tõelised ringid. Visandi DXF-il on tõelised kaared ja ringid, sest see tuleb otse visandist. See versioon ehitab iga detaili võrgusilma tuumaga, seega on joonise vaated (koos lõigetega) samuti fassetilised. Täpne STEP-eksport on erand: tuum teab iga tahu tõelist pinda visandist (või STEP-failist, millest keha avati), seega kirjutatakse ümarad tahud tõeliste silindrite, koonuste, sfääride ja torudena, olenemata **Kõverate** seadest (vt [Ekspordi printimiseks, STEP ja DXF](topic:export-files#for-other-cad-programs-step)).

## Pole selles versioonis toetatud

| Vorming | Staatus |
|---|---|
| glTF, IGES, Parasolid, ACIS (sisse või välja); OBJ eksport | Pole veel ehitatud |
| DWG | Kirjutab ainult [variandipakk](topic:variant-pack), joonislehena iga konfiguratsiooni kohta. Ei loeta ega eksportita muul viisil. Ekspordi DXF; iga CAD-programm avab R12 DXF-i |
| Koosta STEP ja koosta joonis | Pole veel ehitatud. Ekspordi iga detail täpse STEP-ina; STL, 3MF ja materjalide loend eksporditakse koostest |
| Teiste programmide omad detail- ja koostefailid (välja arvatud `.3dm`, mis avaneb ühe kehana) | Pole veel ehitatud |

Vt [Mis pole veel valmis](topic:not-built-yet).
