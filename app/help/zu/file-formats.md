---
title: Amafomethi amafayela
summary: Wonke amafayela i-PartCraft ayawafunda ayawabhala, nezandiso, iyunithi, amaeksisi nokuthi ngayinye iyagcina noma ilahle yini.
keywords: amafomethi, izinhlobo zamafayela, izandiso, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, iges, iyunithi, z up
from: 4d0ecbee
---

| Ifomethi | Isandiso | Vula | Londoloza noma khipha | Iyunithi | Eksisi phezulu | Igcina |
|---|---|---|---|---|---|---|
| Ingxenye ye-PartCraft | `.partcraft.json` | Yebo | {{ui:Londoloza}} | mm | Y | Umlando ogcwele: amasikethi, ukuxhumana, izilinganiso, izici, ukuvinjwa, ukubuyela emuva, isilungiselelo samajika, izilungiselelo zomdwebo ne-GD&T, umbhalo we-STEP owangeniswa kwenguqulo yakudala |
| Inhlanganisela ye-PartCraft | `.partcraft-asm.json` | Yebo | {{ui:Londoloza}} kwinhlanganisela | mm | Y | Yonke ingxenye (efakiwe), amakhophi nezindawo zawo, izixhumanisi |
| STL (binary noma umbhalo) | `.stl` | Yebo, njengomzimba wesolidi: [Vula i-STL, OBJ noma i-3MF](topic:open-meshes) | {{ui:STL, ukuze kuphrintwe nge-3D}} | mm (kubuzwa uma kuvulwa) | Z | Ama-triyangula wesolidi kuphela |
| 3MF | `.3mf` | Yebo, njengomzimba wesolidi | {{ui:3MF, ukuze kuphrintwe nge-3D}} | mm (ichazwe kufayela) | Z | Isolidi njengento eyodwa ye-mesh |
| OBJ | `.obj` | Yebo, njengomzimba wesolidi (ubuso kuphela) | Cha | kubuzwa uma kuvulwa | Z noma Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Yebo, njengomzimba wesolidi ofundwa njengamatriyangula (ubuso obugobile budwetshwa njengama-facet; ubuso obuthe, amasilinda, amakhoni, amasfere namathoyi efayela kugcinwa ukuze kukhishwe ngokuqondile): [Vula ifayela le-STEP](topic:import-step) | | mm (kusukela eyunithini yefayela) | Z, noma Y uma ukhethile | Izolidi nemizimba yobuso, izinhlanganisela zazo zonke izingxenye zikuzo; akukho mibala, amagama, isihlahla senhlanganisela noma i-PMI |
| `.3dm` | `.3dm` | Yebo, njengomzimba wesolidi owodwa kusuka kumeshi nobuso (imeshi elondoloziwe yokubonisa, noma ihlukaniswe): [Vula imodeli ye-.3dm](topic:open-3dm-files) | | Kusukela eyunithini yefayela | Z, noma Y uma ukhethile | Imeshi, ama-polysurface, ukukhishwa nokubekwa kwamabhulokhi njengomzimba owodwa; akukho majika, mibala, izingqimba noma amagama |
| STEP AP242, eqondile | `.step` | | {{ui:STEP AP242 (isolidi eqondile)}} | mm | Z | Isolidi eyodwa eqondile: ubuso obuthe, amasilinda, amakhoni, amasfere namathoyi ezindaweni zawo zangempela, imijikelezo namajika aqondile njengemiphetho; izinhlangothi ezigobile zesolidi, izintambo ezenziwe, izidumbu ezivela kumafayela e-mesh nobuso bejika le-STEP zihlala zingama-facet. I-STEP esetshenziswa ezinye izinhlelo ze-CAD ne-CAM |
| STEP AP214, eqondile | `.step` | | {{ui:STEP AP214 (isolidi eqondile)}} | mm | Z | Isolidi efanayo eqondile kuhlaka lakudala le-AP214, kwezinhlelo ezifunda lokho kuphela |
| STEP AP242, ngobuso | `.step` | | {{ui:STEP (ngobuso, kernel yemeshi)}} | mm | Y | Isolidi evaliwe yobuso obuthe: izinhlangothi ezijikelezayo njengobuso obuthe. Yohlelo olwenqaba ifayela eliqondile |
| STEP AP214, ngobuso | `.step` | | {{ui:STEP AP214 (ama-facet, mesh kernel)}} | mm | Y | Isolidi efanayo kuhlaka lakudala le-AP214, kwezinhlelo ezifunda lokho kuphela |
| Iphakheji ye-USD | `.usdz` | Cha | {{ui:Iphakheji ye-USD (.usdz)}} | m | Z | Isolidi nempahla yayo, ivolumu nobunzima; inhlanganisela ngayinye yengxenye kanye kanye namakhophi onke abekiwe: [Khipha njenge-USD](topic:usd) |
| IFC 4 | `.ifc` | Cha | {{ui:IFC 4 (ngazo zonke izici)}} | mm | Z | Ukwakheka njengamatriyangula, impahla, yonke iparamitha, ibhulokhi yesihloko, izinkulumo; izingxenye zenhlanganisela njengezinhlobo namakhophi abekiwe |
| DXF R12, isikethi | `.dxf` | Cha | {{ui:DXF yesikethi noma yobuso obuthe}} nesikethi esikhethiwe | mm | x, y zesikethi uqobo | Imigqa, amasongo namasekhono aqondile, amaphoyinti; izingqimba PROFILE, CONSTRUCTION, POINTS |
| DXF R12, ubuso | `.dxf` | Cha | {{ui:DXF yesikethi noma yobuso obuthe}} nobuso obuthe okukhethiwe | mm | x, y zobuso uqobo | Imikhawulo yobuso: imigodi ejikelezayo njengamasongo aqondile, okunye njengeziphethelo ezivaliwe ze-polyline (imiphetho ejikelezayo njengama-facet) |
| Umdwebo we-PDF | `.pdf` | Cha | {{ui:Umdwebo (PDF): imibono, isigaba, imininingwane, GD&T}} | mm ephepheni le-A3 | | Imibono yangaphambili, yangaphezulu, yangakwesokudla, ye-isometric, yesigaba neyemininingwane edwetshwe kusuka kuma-facet, imigqa efihliwe, usayizi jikelele, izimpawu ze-GD&T, ibhulokhi yesihloko |

## Amafayela e-PartCraft

Zombili zingumbhalo ocacile (JSON). Isolidi ayigcinwa ngaso sonke isikhathi: i-PartCraft iyakha kabusha kumlando, ngakho amafayela ahlala emancane futhi ahambisana nomlando ngaso sonke isikhathi.

- Ifayela ngalinye linenombolo yenguqulo. Lolu hlobo lubhala ifayela ngalinye lengxenye ngenguqulo esezansi kakhulu egcina okusetshenziswayo (2 kuya ku-5; isidumbu esenziwe kusuka kumeshi sidinga 5) bese livula zonke izinguqulo zakudala. Ifayela elivela kwi-PartCraft yakamuva liyenqatshwa ngomyalezo okhomba zombili izinguqulo.
- Wonke amanani ahlolwa lapho ifayela livulwa. Amagama alahlekelwa yizinhlamvu zokulawula; izinombolo ezingaphandle kobuningi, izinkomba zezici ezingekho nezinhlobo zezici ezingaziwa ziyenqatshwa ngesizathu esilula.
- Ungahleli lawa mafayela ngesandla uma ungazi ifomethi. Ifayela elingadlulisi ukuhlolwa aliyikuvuleka.
- Ingxenye enesolidi enkulu ye-STEP eyangeniswa kwenguqulo yakudala ingadlula i-50 MB, okukhulu kakhulu i-PartCraft ingalivula njengefayela lengxenye (bheka [Ukuxazulula izinkinga](topic:troubleshooting#file-problems)).

## Ama-facet nokuqondile

I-STL ne-3MF zihlala zenziwe ngama-facet, ngesilungiselelo se-**Amajika**, kanjalo ne-DXF yobuso ngaphandle kwemigodi ejikelezayo, eyizindilinga eqondile. I-DXF yesikethi inamasongo namasekhono eqondile, ngoba ivela ngqo esikethini. Lolu hlobo lwakha yonke ingxenye nge-mesh kernel, ngakho nemibono yomdwebo (nezigaba zifakiwe) inama-facet. Ukukhishwa kwe-STEP okuqondile kuyisici: i-kernel yazi ubuso ngabunye obuqondile esikethini (noma kufayela le-STEP okwavulwa kuso isidumbu), ngakho izinhlangothi ezijikelezayo zibhalwa njengamasilinda, amakhoni, amasfere namathoyi eqondile noma kunjalo **Amajika** esethwe kuwo (bheka [Khipha ukuze kuphrintwe, STEP ne-DXF](topic:export-files#for-other-cad-programs-step)).

## Akusekelwe kule nguqulo

| Ifomethi | Isimo |
|---|---|
| glTF, IGES, Parasolid, ACIS (ngenayo noma ngaphandle); ukukhishwa kwe-OBJ | Akukakhiwa |
| DWG | Ibhalwa kuphela yi-[phakheji yezinguqulo](topic:variant-pack), njengeshidi lomdwebo lokucushwa ngakunye. Ayifundwa, futhi akukho okunye ukukhishwa. Khipha i-DXF; zonke izinhlelo ze-CAD zivula i-R12 DXF |
| I-STEP yenhlanganisela nomdwebo wenhlanganisela | Akukakhiwa okwamanje. Khipha ingxenye ngayinye njenge-STEP eqondile; i-STL, i-3MF nohlu lwempahla kukhishwa kwinhlanganisela |
| Amafayela wengxenye nenhlanganisela wezinye izinhlelo (ngaphandle kwe-`.3dm`, evulwa njengomzimba owodwa) | Akukakhiwa |

Bheka [Akukakhiwa okwamanje](topic:not-built-yet).
