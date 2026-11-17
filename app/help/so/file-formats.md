---
title: Qaababka faylalka
summary: Dhammaan faylalka PartCraft akhriyo oo qoro, oo leh kordhinta, cabbirrada, jihooyinka iyo waxa mid kasta hayo ama lumiyo.
keywords: qaababka, noocyada faylalka, kordhinta, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, units, z up
from: 4d0ecbee
---

| Qaabka | Kordhinta | Furo | Kaydi ama dhoofi | Cabbirka | Jihada sare | Wuxuu hayaa |
|---|---|---|---|---|---|---|
| Qaybta PartCraft | `.partcraft.json` | Haa | {{ui:Kaydi}} | mm | Y | Taariikhda oo dhan: sawir-gacmeedyada, xiriirada, cabbirrada, features, demidda, rollback, dejinta qalloocyada, dejinta naqshadda iyo GD&T, qoraalka STEP ee la soo dhoofiyay dhisme hore |
| Isku-dhisnaha PartCraft | `.partcraft-asm.json` | Haa | {{ui:Kaydi}} isku-dhisnaha dhexdiisa | mm | Y | Qayb kasta (ku jirta), nuqullada iyo meelahooda, xidhka |
| STL (binary ama text) | `.stl` | Haa, sida jidh saddex-geesood: [Fur STL, OBJ ama 3MF](topic:open-meshes) | {{ui:STL, daabacaadda 3D}} | mm (la weydiiyo markii la furo) | Z | Kaliya saddex-geesoodka jidhka |
| 3MF | `.3mf` | Haa, sida jidh adag | {{ui:3MF, daabacaadda 3D}} | mm (faylka ku sheegan) | Z | Jidhka sida hal mesh object |
| OBJ | `.obj` | Haa, sida jidh adag (wejiyo kaliya) | Maya | la weydiiyo markii la furo | Z ama Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Haa, sida jidh adag oo loo akhriyo saddex-geesood (wejiyada wareegsan waxay u muuqdaan facets; wejiyada toosan, silinderyada, koonnada, kubbadaha iyo torusyada faylka ayaa la hayaa dhoofinta saxda ah): [Fur faylka STEP](topic:import-step) | | mm (cabbirka faylka) | Z, ama Y haddii aad sheegto | Jidhadka iyo jidhadka dusha, isku-dhisnaha oo qayb kasta ku jirta meesheeda; midab, magac, geed isku-dhisnaha ama PMI ma jiraan |
| `.3dm` | `.3dm` | Haa, sida jidh adag oo ka yimid meshes-kiisa iyo dusha (meshes la kaydiyay, ama tessellated): [Fur moodel .3dm](topic:open-3dm-files) | | Cabbirka faylka | Z, ama Y haddii aad sheegto | Meshes, polysurfaces, extrusions iyo meelaynta block-yada oo jidh keliya; curves, midab, layers ama magac ma jiraan |
| STEP AP242, saxda ah | `.step` | | {{ui:STEP AP242 (jidh adag oo saxda ah)}} | mm | Z | Jidh adag oo saxda ah: wejiyo toosan, silinderyo, koonno, kubbado iyo torusyo wejigooda run ah, wareegyo run ah iyo geesaha toosan sida edges; dhinacyada spline-ka, xarka la moodeelay, jidhadka mesh-ka iyo wejiyada spline-ka STEP waxay ku sii jiraan facets. STEP-ka loo isticmaalo barnaamijyada CAD iyo CAM kale |
| STEP AP214, saxda ah | `.step` | | {{ui:STEP AP214 (jidh adag oo saxda ah)}} | mm | Z | Isla jidhka saxda ah ee schema-ga hore AP214, barnaamijyada kaliya akhriya |
| STEP AP242, faceted | `.step` | | {{ui:STEP (fasedyo, kernel-ka mesh)}} | mm | Y | Jidh xidhan oo wejiyo toosan: dusha wareegsan facets. Barnaamij diida faylka saxda ah |
| STEP AP214, faceted | `.step` | | {{ui:STEP AP214 (xabbado, kernel-ka mesh)}} | mm | Y | Isla jidhka schema-ga hore AP214, barnaamijyada kaliya akhriya |
| Xidhmada USD | `.usdz` | Maya | {{ui:Xidhmada USD (.usdz)}} | m | Z | Jidhka agabkiisa, mugga iyo miisaanka; isku-dhisnaha qayb kasta mar, iyo nuqul kasta oo la meeleeyay: [Dhoofi sida USD](topic:usd) |
| IFC 4 | `.ifc` | Maya | {{ui:IFC 4 (oo leh dhammaan sifooyinka)}} | mm | Z | Qaabka saddex-geesood, agabka, cabbir kasta, blokka cinwaanka, tirooyinka; qaybaha isku-dhisnaha nooc ahaan iyo nuqullada la meeleeyay |
| DXF R12, sawir-gacmeed | `.dxf` | Maya | {{ui:DXF oo sawir-gacmeedka ama dhinac sinaan ah}} markii sawir-gacmeed la doortay | mm | Sawir-gacmeedka x, y gudaheeda | Xariiqyo, qaansooyin run ah iyo goobo, barar; layers PROFILE, CONSTRUCTION, POINTS |
| DXF R12, wejig | `.dxf` | Maya | {{ui:DXF oo sawir-gacmeedka ama dhinac sinaan ah}} markii wejig toosan la doortay | mm | Wejigga x, y gudaheeda | Qaabka wejiga: godadka wareegsan sida goobo run ah, inta kale sida polyline xidhan (geesaha wareegsan sida facets) |
| Naqshadda PDF | `.pdf` | Maya | {{ui:Naqshad (PDF): muuqaallada, qaybta, faahfaahinta, GD&T}} | mm xaashi A3 ah | | Hore, sare, midig, isometric, muuqaallada qaybta iyo faahfaahinta oo laga sameeyay facets, khadadka qarsan, cabbirrada guud, calaamadaha GD&T, blokka cinwaanka |

## Faylalka PartCraft

Labaduba waa qoraal caadi ah (JSON). Jidhka ma kaydsana: PartCraft wuu dib u dhisaa taariikhda, sidaas darteed faylalku waa yaryar oo had iyo jeer waxay la mid yihiin taariikhda.

- Fayl kasta wuxuu leeyahay lambar nooc. Dhismahan wuxuu qoraa fayl kasta nooca ugu hooseeya ee hayo waxa uu isticmaalo (2 ilaa 5; jidh ka yimid mesh wuxuu u baahan yahay 5) wuxuuna furaa noocyada hore oo dhan. Fayl ka yimid PartCraft cusub waa la diidaa, fariinta oo magacaabaysa labada nooc.
- Qiime kasta waa la hubiyaa markii fayl la furayo. Magacyada waxay lumiyaan xarfaha xakamaynta; tirooyinka aan xadka ku jirin, tixraacyada features-ka maqan iyo noocyada feature-ka aan la aqoonsan karin waa la diidaa, sabab fudud oo lagu sheegay.
- Ha tafatirin faylalkan gacanta haddii aanad ogayn qaabka. Faylka aan ku guuldareysan hubinta ma furmi doono.
- Qaybta leh STEP solid oo weyn oo la soo dhoofiyay dhisme hore wuxuu dhaafi karaa 50 MB, taas oo ah inta PartCraft furi karo sida fayl qayb (eeg [Dhibaatooyinka](topic:troubleshooting#file-problems)).

## Facets iyo saxnaanta

STL iyo 3MF had iyo jeer waxay ka samaysan yihiin facets, dejinta **Qalloocyada** ku salaysan, oo sidaas oo kale ayuu yahay face DXF marka laga reebo godadka wareegsan, oo ah goobo run ah. Sawir-gacmeedka DXF wuxuu leeyahay qaansooyin iyo goobo run ah, sababtoo ah wuxuu si toos ah uga yimid sawir-gacmeedka. Dhismahan wuxuu qayb kasta ku dhisaa mesh kernel-ka, sidaas darteed muuqaallada naqshadda (oo ay ku jiraan qaybaha) sidoo kale waa facets. Dhoofinta STEP ee saxda ah waa kaliya ka reebsan: kernel-ku wuxuu ka yaqaanaa wejig kasta dhabta ah sawir-gacmeedka (ama faylka STEP ee jidhka laga furay), sidaas darteed wejiyada wareegsan waxay u qoran yihiin silinder, koonn, kubbad iyo torus oo run ah, si kasta oo **Qalloocyada** loo dejiyey (eeg [Dhoofinta daabacaadda, STEP iyo DXF](topic:export-files#for-other-cad-programs-step)).

## Lama taageero dhismahan

| Qaabka | Xaaladda |
|---|---|
| glTF, IGES, Parasolid, ACIS (gelin ama dhoofin); OBJ dhoofin | Lama dhisin |
| DWG | Kaliya [variant pack-ka](topic:variant-pack) ayaa qoraa, sida xaashi naqshad oo qaab kasta. Lama akhrin, dhoofin kale ma jiro. Dhoofi DXF; dhammaan barnaamijyada CAD waxay furaan DXF R12 |
| STEP isku-dhisnaha iyo naqshadda isku-dhisnaha | Weli lama dhisin. Dhoofi qayb kasta sida STEP saxda ah; STL, 3MF iyo liiska walxaha ayaa laga dhoofin karaa isku-dhisnaha |
| Qaababka asalka ah ee barnaamijyada kale ee qaybaha iyo isku-dhisnaha (marka laga reebo `.3dm`, oo furma sida hal jidh) | Lama dhisin |

Eeg [Waxa weli aan la dhisin](topic:not-built-yet).
