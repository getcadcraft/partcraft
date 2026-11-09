---
title: Amafayela: vula, londoloza nokuthumela
summary: Amafayela e-PartCraft avula futhi alondoloza, zonke izinhlobo zokuthumela nokuthi zigcina ini, lapho amafayela aya khona, nokuthi yini eshintsha ngaphandle kwe-inthanethi nangaphakathi kwama-browser.
keywords: vula, londoloza, thumela, landa, ifayela, partcraft.json, ifayela lenhlanganisela, stl, 3mf, step, dxf, pdf, lapho kukhona amafayela ami, ngaphandle kwe-inthanethi, londoloza njenge
from: c15c2c48
---

I-PartCraft isebenza ngamafayela akwikhompyutha yakho. Ayikaze ilayishe ingxenye, futhi akukho akhawunti noma isitoreji se-cloud esihileleke. Ukulondoloza ku-cloud akukatholakali okwamanje.

## Okuvulwa yi-PartCraft

| Ifayela | Isandiso | Kanjani |
|---|---|---|
| Ingxenye ye-PartCraft | `.partcraft.json` | {{ui:Vula}}, {{key:Mod+O}}, noma uyiphonsele endaweni ye-3D |
| Inhlanganisela ye-PartCraft | `.partcraft-asm.json` | Okufanayo: i-PartCraft iyazi ukuthi yiluphi uhlobo |
| Isolidi se-STEP | `.step`, `.stp` | Isidumbu esifundwa njengezinxantathu: [Vula ifayela le-STEP bese uyakha kulo](topic:import-step) |

Ama-mesh e-STL, OBJ ne-3MF nawo avulwa njengezidumbu eziqinile ([Vula i-STL, i-OBJ noma i-3MF](topic:open-meshes)), kanjalo namafayela `.3dm` ([Vula imodeli ye-.3dm](topic:open-3dm-files)). Ifayela le-DXF, i-IGES namafayela engxenye ezinhlelweni zokusebenza ezinye akukwazi ukuvulwa (bheka [Okungakakhiwa](topic:not-built-yet)).

Imithetho lapho uvula:

- Igama lefayela lengxenye noma lenhlanganisela kumele liphele nge-`.json`, nefayela kumele libe ngaphansi kuka-50 MB.
- Amafayela ahlolwa ngaphambi kokuthi kukhonjiswe okuthile. Ifayela elonakele noma elihlelwe liyenqatshwa ngesizathu esilula, njengalesi: "Lona akuyona ifayela le-PartCraft."
- Ifayela elilondolozwe i-PartCraft entsha liyenqatshwa: "Leli fayela lilondolozwe yi-PartCraft entsha (inguqulo yefayela 3); lona lifunda inguqulo 2." Amafayela amadala ayavuleka.
- Uma ingxenye esesikrinini inezinguquko ezingalondolozwanga, i-PartCraft iyabuza kuqala: {{ui:Khansela}}, {{ui:Lahla izinguquko}} noma {{ui:Londoloza kuqala}}.

## Ukulondoloza

{{ui:Londoloza}} noma {{key:Mod+S}} ilondoloza lokho okusesikrinini:

- Engxenyeni: `<igama lengxenye>.partcraft.json`, umlando ophelele (amasketshi, izihlobanisi, izilinganiso, izici, isikhundla sokubuyela emuva), isigaba se-sheet somdwebo, izinkomba zemininingwane ne-GD&T, nombhalo wawo wonke amasolidi e-STEP angeniswe kusakhiwo sangaphambilini. Izici lolu nguqulo olungakwazi ukuzakha zigcinwa zingashintshiwe. Isolidi uqobo alilondolozwa; i-PartCraft iyakhiwa kabusha emlandweni lapho ifayela livulwa.
- Kunhlanganisela: `<igama lenhlanganisela>.partcraft-asm.json`, nengxenye ngayinye **ngaphakathi kwayo**. Ifayela elilodwa liphethe yonke inhlanganisela, ngakho ungayithumela yodwa.

Ukulondoloza kuwukulanda. Ibhrawuza yakho ibeka ifayela efolda yakho ye-Downloads, noma ibuze lapho kufanele libekwe khona uma usuyisethile ukuthi ibuze. Ukulondoloza futhi kwenza ukulanda okusha; ibhrawuza ingalinika igama elithi `Part1 (1).partcraft.json` esikhundleni sokubhala phezu kwendala. Ungaqamba kabusha noma uhambise amafayela ku-{{pick:mac=Finder|windows=File Explorer|linux=isiphathi-mafayela sakho}} njengoba uthanda.

Izinhlamvu ezingaphandle kwezinhlamvu, izinombolo, izikhala, `_`, `.` kanye `-` egameni lengxenye ziba `_` egameni lefayela.

:::tip
Amabhrawuza amaningi anesilungiselelo esibuza ukuthi kulondolozwe kuphi ngasinye sokulanda. Sivule uma ufuna ukhetho "Londoloza njenge" njalo: ku-Chrome ne-Edge kungaphansi kwe-Downloads kuzilungiselelo; ku-Firefox kuthi General, Files and Applications; ku-Safari kuthi General, File download location.
:::

Okwengeziwe ngokuthi ukulanda kuya kuphi nokugcina amafayela ephephile: [Lapho amafayela akho aya khona](common:your-files).

## Ukuthumela

Imenyu {{ui:Thumela}} ibhala ezinye izinhlobo zamafayela. Ngayinye iwukulanda, iqanjwe ngegama lengxenye.

| Into yemenyu | Ifayela | Okukuwo |
|---|---|---|
| {{ui:STL, ukuze kuphrintwe nge-3D}} | `<name>.stl` | I-STL ebhayinari yezinxantathu zesolidi, mamilimitha, **Z iphezulu** |
| {{ui:3MF, ukuze kuphrintwe nge-3D}} | `<name>.3mf` | I-3MF enesolidi njengento eyodwa, mamilimitha, **Z iphezulu** |
| {{ui:STEP AP242 (isolidi eqondile)}} | `<name>.step` | Akukakhiwa kulolu nguqulo (kuyagreyiwa): idinga i-kernel eqondile |
| {{ui:STEP AP214 (isolidi eqondile)}} | `<name>.step` | Akukakhiwa kulolu nguqulo (kuyagreyiwa) |
| {{ui:STEP (ngobuso, kernel yemeshi)}} | `<name>.step` | Isolidi eyenziwe ngobuso obuthe kusuka kumesh: **ubuso obujikelezayo buyizinhlamvu eziningi ezincane ezithe tshe**. Mamilimitha, ngama-axis e-PartCraft (Y iphezulu). I-STEP okufanele uyisebenzise kwamanye ama-CAD kulolu nguqulo |
| {{ui:DXF yesikethi noma yobuso obuthe}} | `<name> - <sketch>.dxf` noma `<name> - face.dxf` | I-DXF R12. Isikethi: imigqa, izindilinga, imisalo namaphoyinti ngokuhlelwa kwesikethi, ezendaweni ezithi PROFILE, CONSTRUCTION ne-POINTS. Ubuso obuthe obukhethiwe: izinkomba zalo njengama-polyline avaliwe (imiphetho ejikelezayo njengezinhlamvu zayo) |
| {{ui:Umdwebo (PDF): imibono, isigaba, imininingwane, GD&T}} | `<name> - drawing.pdf` | Ishidi lomdwebo le-A3: imibono emithathu, i-isometric, isigaba nemininingwane uma isethiwe, izilinganiso eziphelele, izimpawu ze-GD&T, ibhlogo yesihloko |

:::note
{{ui:STEP AP242 (isolidi eqondile)}} ne-{{ui:STEP AP214 (isolidi eqondile)}} akukakhiwa kulolu nguqulo: sebenzisa {{ui:STEP (ngobuso, kernel yemeshi)}}. Inesimo nevolumu elifanele, kodwa wonke ubuso obujikelezayo buyizinhlamvu eziningi ezincane ezithe tshe, ngakho ezinye izinhlelo azikwazi ukukhetha umgodi njengesilinda. Setha **Amajika** ngcono kuqala uma lokho kubalulekile.
:::

- Ukuthunyelwa kuvela engxenyeni esesikrinini. Ukuthumela akusebenzi kwinhlanganisela; alikho ukuthumela kwenhlanganisela okwamanje.
- I-STL, i-3MF, i-STEP eyenziwe ngobuso ne-DXF yobuso zikhiqizwa njalo ngezinxantathu. Isilungiselelo se-**Amajika** (esiphaneli esesokudla uma kungakhethiwe lutho) silawula ukuthi zinhle kangakanani, kusuka ku-32 kuya ku-256 izinxantathu ngesijikeleko ngasinye. Khetha {{ui:Kuhle}} noma {{ui:Kuhle kakhulu}} ngaphambi kokuthumela i-STL noma i-3MF ukuze kube bushelelezi lapho kuphrintwa.
- Ukudweba kwe-PDF kusebenzisa ifonti ye-Helvetica eyakhelwe kumfundi we-PDF. Izinhlamvu ezingabonakali zishicilelwa njenge-"?".

Izinyathelo ngezinyathelo: [Thumela ukuze kuphrintwe, i-STEP ne-DXF](topic:export-files) kanye [Yenza ishidi lomdwebo](topic:drawing-pdf).

## Umsebenzi ongalondolozwanga

- I-PartCraft igcina ikhophi yokubuyisela yengxenye noma yenhlanganisela evulekile kulesi sipheki ngemuva nje kwesiguquko ngasinye, ngakho ukuhlakazeka noma ithebhu evaliwe akuyilahlisi: ngesikhathi esilandelayo uvula i-PartCraft iyabuza ukuthi "Buyisa umsebenzi wakho?". Lokhu akuwona ukulondoloza: londoloza kwifayela ukuze ugcine umsebenzi wakho. Bheka [Buyisa umsebenzi ongalondolozwanga](common:recover).
- Uma uzama ukuvala ithebhu noma ukuqala kabusha ngezinguquko ezingalondolozwanga, ibhrawuza iyabuza ukuthi "Shiya le sayithi?". Lobo ubhokisi bebhrawuza uqobo; i-PartCraft ayikwazi ukushintsha amagama alo.
- {{ui:Okusha}}, {{ui:Vula}} nokuvala inhlanganisela kubuza ngaphambi kokulahla izinguquko ezingalondolozwanga.

## Ku-inthanethi nangaphandle kwayo

Konke kwenzeka kukhompyutha yakho: i-mesh kernel (uhlelo lwe-WebAssembly) iyalandwa nge-app futhi yakha ijiyomethri ngasendaweni, namafayela afundwa abhalwe kudiski yakho. Akukho data yengxenye engena kunethiwekhi. Bheka [I-mesh kernel](topic:solid-kernels).

Ukuze usebenze ngaphandle kwanoma yiluphi uxhumo, londoloza i-PartCraft ukuze isetshenziswe ngaphandle kwe-inthanethi lapho usuku ku-inthanethi: khetha {{ui:Londoloza ngaphandle kwe-inthanethi}} ku-ibha ye-app bese ulinda kuze kubalwe ("Ilondoloza 40 kwangu-212") kuze kuthi **Ilungele ukusebenza ngaphandle kwe-inthanethi**. Ikhophi elondoloziwe lifaka umtapo we-3D ne-mesh kernel, ngakho emva kwalokho ukumodela, ukulondoloza, konke ukuthumela nokudweba konke kusebenza ngaphandle kwe-inthanethi. Uma kuthi **Akukwazanga ukulondoloza**, chofoza ukuze uzame futhi uma usuku ku-inthanethi; **Ukusebenza ngaphandle kwe-inthanethi akutholakali** kusho ukuthi lo window webhrawuza awukwazi ukugcina ikhophi (ama-window angasese nezinye izikhompyutha ezilawulwayo). Uma ikhophi selondoloziwe, ukuchofoza **Ilungele ukusebenza ngaphandle kwe-inthanethi** kunikeza {{ui:Londoloza futhi (thola inguqulo entsha kakhulu)}} kanye {{ui:Susa ikopi engaphandle kwe-inthanethi}}. Imininingwane: [Ukusebenza ngaphandle kwe-inthanethi](common:offline).

:::online
Usuku ku-inthanethi. Noma ungalondolozanga ukusebenza ngaphandle kwe-inthanethi, uma i-PartCraft seyilayishile futhi i-chip yebha yesimo ithi "Kernel yemeshi", ungaqhubeka usebenza uma uxhumo lwehla. Ungalayishi kabusha ikhasi kuze ubuyele ku-inthanethi.
:::

:::offline
Awuku-inthanethi. Uma i-PartCraft seyivuliwe, qhubeka usebenza; ukulondoloza nokuthumela kuyasebenza. Uma ibha ye-app ithi **Ilungele ukusebenza ngaphandle kwe-inthanethi**, i-PartCraft iphinde ivuleke kusuka ekuqaleni ngaphandle koxhumo; kungenjalo ungalayishi kabusha leli thebhu.
:::

## Umehluko phakathi kwamabhrawuza

- **Ukulanda.** Ibhrawuza ngayinye inefolda yayo yokulanda nendlela yayo yokubuza. Uma ibhrawuza ibuza ukuthi le sayithi ingalanda amafayela, yivumele, kungenjalo ukulondoloza nokuthumela akusebenzi.
- **Ukudonsa nokushiya** ifayela phezu kwe-view kuyasebenza ku-Chrome, Edge, Firefox ne-Safari.
- **Amafayela efonini noma ethabulethini.** Ku-iPhone ne-iPad, Vula ivula i-Files app; amafayela alondoloziwe aya ku-Files, Downloads. Ku-Android aya kufolda ye-Downloads.

Amafayela aqukethe okufanayo phakathi kwamabhrawuza nezinhlelo zokusebenza ezinye.
