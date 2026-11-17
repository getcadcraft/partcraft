---
title: Vula ifayela le-STEP nakha kulo
summary: Letha imodeli ye-STEP yomhlinzeki noma yenye iprogram ye-CAD ku-PartCraft njengomzimba oqinile, njengengxenye entsha noma yengezwe kwengxenye yamanje, uhlele ukuthi iyiphi indlela ephezulu, bese wengeza amasikethi nezici kuyo.
keywords: step, stp, ukungenisa, vula i-step, ap203, ap214, ap242, imodeli yomhlinzeki, isolidi elingenamlando, isolidi elingeniswe, indlela ephezulu, z phezulu, y phezulu, izinxantathu, izinhlaka, inhlanganisela ye-step
from: ca0eca5f
---

I-PartCraft ivula amafayela e-STEP (`.step` noma `.stp`, AP203, AP214 kanye ne-AP242) njengezindikimba **zomzimba oqinile** ongakhela phezu kwawo amasikethi, ukusika, ukubhoboza nokuwahlanganisa nezici zakho. Umzimba awunawo umlando wawo: awukwazi ukushintsha izilinganiso ayenziwe ngazo, ungawengeza noma usike kuwo kuphela.

Lolu hlobo lwe-PartCraft lwakha zonke izingxenye ngomshini we-mesh, ngakho ifayela le-STEP **lifundwa njengezinxantathu**: izindawo ezithe tshe ziyahlala zithe tshe, kanti izindawo ezigobile (amasilinda, ama-cone, amabhola, ama-torus, izindawo ze-B-spline) ziba izindawo ezincane eziphansi eziningi. Ivolumu yayo ingaphakathi kwengxenyana yephesenti eliqondile. Ukugcina izindawo ezigobile ngokuqondile kudinga i-exact kernel, engekho kulolu hlobo.

## Vula ifayela le-STEP

1. Khetha {{ui:Vula}} noma cindezela {{key:Mod+O}}, bese ukhetha ifayela le-`.step` noma `.stp`. Noma lilahle kumbono we-3D.
2. I-PartCraft iyalifunda ifayela ibonise okutholiwe, isibonelo: "Ifayela le-AP214: isolidi elingu-1, ubuso obungu-10, lifundwe njengezinxantathu." Ngezansi kukhona inani lezinxantathu, noma yini eyashiywa noma eyahlanganiswa, nokuthi umphumela uyavaliwa yini.
3. Hlola **Phezulu kwifayela**. Ifayela le-STEP litshela iyunithi yalo (amamillimitha, amayintshi, amamitha…); i-PartCraft iyiguqula ibe ngamamillimitha, ngakho **Amayunithi kwifayela** ibonisa Amamillimitha, "ifayela lisho njalo". **Ubukhulu lapha** ibonisa ukuthi izoba mkhulu kangakanani.
4. Khetha {{ui:Vula njengomzimba}} ukuze uthole ingxenye engenalutho, noma {{ui:Yengeza kule ngxenye}} / {{ui:Ingxenye entsha}} uma ingxenye isivele ineziphawu. Ukungeza kubuza ukuthi **Sebenzisa ukuze** yenzeni: engeza, sika, noma gcina ukuhlangana kuphela.

Isici se-**Imported1** siyavela emlandweni, nebha yesimo ithi, isibonelo, "plate.step ingumzimba oqinile: 57995.937 mm³, izindawo eziphansi ezi-6 ongabhala kuzo."

## Ifayela le-STEP lenhlanganisela

Inhlanganisela ifika njengomzimba owodwa ngayo yonke ingxenye lapho ifayela liyibeka khona ("izingxenye ezi-3 ezibekwe kufayela zifika lapho zimi khona"). Ingxenye esetshenziswe kabili ifika kabili. Amagama ezingxenye nesihlahla senhlanganisela ayigcinwa.

## Setha ukuthi yiphi indlela ephezulu

Izinhlelo eziningi ze-CAD zisebenzisa Z phezulu; i-PartCraft isebenzisa Y phezulu. Ngokuzenzakalelayo i-PartCraft iyiguqula ifayela ukuze i-Z yalo ibheke phezulu lapha. Uma ingxenye ifika ilele ngecala, khetha **Imported1** bese usetha **Phezulu kwifayela** ibe **Y phezulu**. **Amayunithi kwifayela** nelithi **Sebenzisa ukuze** nakho kungashintshwa lapho; ngalunye lushintsho lusinyathelo esisodwa sokuhlehlisa.

## Yakha phezu kwalo

- Chofoza ubuso obuthe tshe bomzimba bese ukhetha {{ui:Sketch kulobu buso}}. Ubuso obuthe tshe besimodeli se-STEP bugcina indawo yabo lapho umzimba wakhiwa kabusha.
- Engeza ukusika, izimbobo, izigaxa, amaphethini nezibuko njengakunoma yiyiphi ingxenye.
- Hlola usayizi wayo ebhokisini **Ingxenye**: ivolumu, indawo yobuso, usayizi.

Ukuzungeza, ama-chamfer kanye nama-shell kudinga i-exact kernel, njengakuyo yonke ingxenye kulolu hlobo ([I-mesh kernel](topic:solid-kernels)).

## Lapho kugcinwa khona

Izinxantathu zigcinwa **phakathi** kwefayela le-`.partcraft.json`, ngakho ifayela lengxenye liziphelele: awudingi ifayela le-STEP futhi.

## Imilayezo

| Umlayezo | Okusho |
|---|---|
| '"part.stp" akuyona ifayela le-STEP (aliqali nge-ISO-10303-21).' | Ifayela alisona umbhalo we-STEP ovamile. Cela umthumeli ifayela le-STEP le-AP203, AP214 noma AP242 |
| "Ifayela le-STEP alikwazanga ukufundwa: isigaba sedatha sishoda noma senziwe kabi." | Ifayela liqunjiwe noma lonakele. Likopishe futhi |
| "Ifayela le-STEP alinawo umzimba oqinile noma wobuso: akukho okuzongeniswa." | Ifayela liqukethe kuphela imidwebo, amaphoyinti noma idatha. Cela isolidi |
| "Leli fayela le-STEP likhulu kakhulu (ngaphezu kwe-60 MB) ukuthi lingeniswe lapha." nezinye izinqumo zomfundi (izingenisi, ubuso, izinxantathu) | Yenza imodeli ibe lula emthonjeni, noma uthumele izingxenye ngayinye ngayinye |
| "… imigqa elonakele efayelweni yadlulwa." | Imigqa ethile ayifundeki; eyasele yeza. Hlola umzimba |
| "… ubuso abuguqulwanga bube yizinxantathu futhi bushiywe ngaphandle." | Lobo buso buhlala ngamagalelo, ePartCraft izama ukuwagcwalisa; uma umzimba ungavaleki, awungezwa |
| "… ubuso bohlobo olungafundeki (…) buphuthelwe." | Uhlobo olungavamile lobuso. Cela imodeli enobuso obuthe tshe noma be-B-spline |
| "Ayivali …" | Ubuso abuyenzi isolidi evaliwe (imodeli yobuso, noma ubuso obushiyiwe). I-PartCraft ibonisa izimbobo futhi ayengezi lutho |

## Imikhawulo

- Ubuso obugobile budwetshwa futhi bulinganiswe njengezinhlaka ezincane, njengakuyo yonke ingxenye lolu hlobo lwakha. I-PartCraft igcina ubuso obuthe tshe, amasilinda, ama-cone, amabhola nama-torus efayela ngomzimba, ngakho {{ui:Thumela}} › {{ui:STEP AP242 (isolidi eqondile)}} ibuyisela njengezindawo ezigobile zangempela, izimbobo njengezimbobo, kanye nezici ozengeze. Ubuso efayela elinikezwa njenge-splines, ama-sweep noma izindawo zokujikeleza ihlala iyizinhlaka ekuthumeleni. Ingxenye elondolozwe ngaphambi kuka-0.9.1 ayinawo ubuso olugcinwe: vula kabusha ifayela le-STEP ukuze uthole lona.
- {{ui:Thumela}} › {{ui:DXF yesikethi noma yobuso obuthe}} ngobuso obuthe tshe obukhethiwe ibhala isimbobo esijikayo sefayela njengesiyingi esiqondile.
- Imibala, amagama emizimba, isakhiwo senhlanganisela kanye ne-PMI (ukubekezelela okusefayelini) akufundwa.
- Ngaphandle kwe-STEP, i-PartCraft ivula izimesh ze-STL, OBJ ne-3MF ([Vula i-STL, OBJ noma 3MF](topic:open-meshes)) kanye namafayela e-`.3dm` ([Vula imodeli ye-.3dm](topic:open-3dm-files)) njengezimzimba eziqinile. Amafayela e-IGES nawezinye izinhlelo zohlobo lwazo lwendabuko awasekelwe.
- Ingxenye enesolidi ye-STEP eyengeziwe ngenguqulo enomshini oqinile igcina umbhalo we-STEP; le nguqulo iyayeqa leso sici ("akakakhiwa"). Vula kabusha ifayela le-STEP ukuze ulingenise njengezinxantathu.
