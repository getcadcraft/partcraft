---
title: Ukuxazulula izinkinga
summary: Izinkinga ongahlangabezana nazo ku-PartCraft, kusukela ohlelweni olungaqali kuya ezici ezehlulekayo, iziskethi ezingeke zixazululeke, amafayela angeke avuleke kanye nezixhumanisi ezingasebenzi kahle, nomlayezo obonwayo nokulungisa kwawo.
keywords: inkinga, iphutha, usizo, akusebenzi, ehlulekayo, ukuwa, kumnyama, webgl, webassembly, kernel, akukakhiwa, ukuchazwa ngokweqile, iskethi evulekile, akukwazi ukuvula, akukho okwenzekayo, isiqondiso esingalungile, kancane
from: 7728542c
---

Uma into ingasebenzi, qala ngokufunda i-**ibha yesimo** esezansi: i-PartCraft ithi lapho kungani inqabile noma ilindele ukuthini okulandelayo. Isici esehlulekayo siphinde sibonise umlayezo waso phezulu ephaneli yaso yokudla nalapho uhlela umugqa waso kumlando.

## Uhlelo alugqalwa

### "Lesi siphequluli asikwazi ukubonisa i-3D (WebGL icimile noma ayikho), ngakho i-PartCraft ayikwazi ukusebenza lapha."

**Imbangela:** isiphequluli sivalile noma sivimbele ukubonisa kwegrafikhi ye-3D (WebGL), noma umshayeli wegrafikhi awuyisekeli.

**Ukulungisa:**

:::chromium
Vula `chrome://settings/system` (noma `edge://settings/system` ku-Edge) bese uvula "Use graphics acceleration when available", bese uqala kabusha isiphequluli. Uma sesivulekile, hlola `chrome://gpu` ukuze uthole isimo se-WebGL, bese ubuyekeza umshayeli wegrafikhi.
:::

:::firefox
Vula `about:support` ubheke i-Graphics, WebGL. Uma ivinjiwe, buyekeza umshayeli wegrafikhi. Ku-`about:config`, `webgl.disabled` kumele ibe `false`.
:::

:::safari
I-WebGL ivulekile njalo ku-Safari yamanje. Buyekeza i-macOS (i-Safari iyabuyekezwa nayo). Uma kusahluleka, zama i-Chrome noma i-Firefox ku-Mac efanayo ukuze uqinisekise ukuthi ihadiwe yegrafikhi ayiyona imbangela.
:::

Ama-desktop akude nezinye izimishini ezibonakalayo azinayo i-WebGL. Zama kukhompyutha ngokwayo.

### "I-solid kernel ayilayithanga: …"

**Imbangela:** i-kernel yejiyomethri (uhlelo lwe-WebAssembly) ayikwazanga ukulethwa noma ukuqala. Ngokuvamile uxhumo luphuke ngesikhathi uhlelo lulayitha, i-WebAssembly ivalwe yinqubomgomo yenkampani noma isethingi yokuvikela yesiphequluli, noma isiphequluli sidala kakhulu.

**Ukulungisa:** layitha kabusha ikhasi uxhunywe. Uma kuqhubeka kusahluleka, zama esinye isiphequluli samanje. Ku-Firefox, `javascript.options.wasm` ku-`about:config` kumele ibe `true`. Ngaphandle kwe-inthanethi, uhlelo nekernel yalo kulayitha kuphela uma i-app bar ibe ithi **Ilungele ngaphandle kwe-inthanethi** ngaphambi kokuthi ulahlekelwe uxhumo ({{ui:Londoloza ngaphandle kwe-inthanethi}} uxhunywe; bona [Ukusebenza ngaphandle kwe-inthanethi](common:offline)).

### Iqhosha langaphandle lithi "Akukwazanga ukulondoloza" noma "Ngaphandle kwe-inthanethi akutholakali"

**Akukwazanga ukulondoloza**: amanye amafayela awazange alandwe. Chofoza ukuze uzame futhi uxhunywe; uxhumo olucothayo noma olukhokhelwayo lungadinga ukuzama okwesibili. **Ngaphandle kwe-inthanethi akutholakali**: leli windi lesiphequluli alikwazi ukugcina ikhophi yangaphandle (amawindi asimfihlo nezinye izikhompyutha ezilawulwayo ziyayivimbela). Sebenzisa iwindi elijwayelekile, noma gcina ithebhu livulekile.

### I-PartCraft ingaphandle kwe-inthanethi kodwa idlule isikhathi

Chofoza **Ilungele ngaphandle kwe-inthanethi** uma uxhunywe bese ukhetha {{ui:Londoloza futhi (thola inguqulo entsha kakhulu)}}.

### "Sweep: akikakhiwa okwamanje. Idinga i-kernel eqondile, …"

Umlayezo ogcwele uthi "<Name>: akikakhiwa okwamanje. Idinga i-kernel eqondile, engekho kule nguqulo ye-PartCraft. Usizo › Okungakakhiwa okwamanje kuchaza okufanele wenze esikhundleni salokho." Uyawubona uma ukhetha i-Sweep, i-Loft, i-Rib, i-flange yeshidi lensimbi, isici sobuso, i-Combine, i-Move body, i-Scale body noma i-Path pattern, nakwezinye izinto okwenza kuphela i-kernel eqondile. Akukho okuvula kubi ngesiphequluli sakho noma ngengxenye yakho: le nguqulo ye-PartCraft yakha zonke izingxenye nge-mesh kernel. Bona [Okungakakhiwa okwamanje](topic:not-built-yet) ukuze uthole okufanele wenze esikhundleni salokho, nento ethi [I-mesh kernel](topic:solid-kernels).

### "Ilayitha i-solid kernel…" akuphelelisi

Linda kancane uma uxhumo lunzima: i-kernel ne-3D library ziyalayitha okokuqala. Bese layitha kabusha. Uma ikhasi ngokwalo likhomba iphutha, bona ngenhla.

## Akwenzeki lutho lapho ucindezela ukhiye

- Okhiye abasebenzi lapho ikhesa lisebhokisini ephaneli. Chofoza ku-3D view noma cindezela {{key:Esc}} emva kokubhala (noma {{key:Tab}} uphume).
- Okhiye bezinkomba nokhiye {{key:Plus}}/{{key:Minus}} bajikeleza futhi basondeze umbono kuphela uma usuchofozile kumbono.
- Kukhona ingxoxo evuliwe: yiphendule kuqala.
- Ku-sketch, {{key:F}} iyithuluzi le-Fillet, hhayi Fit. Sebenzisa iqhosha le-{{ui:Lingana}}.

## Iqhosha lethuluzi lifiphele

- Amaqhosha esici afiphele uma iskethi ivulekile. Vala iskethi kuqala.
- Amathuluzi eskethi asebenza kuphela ngaphakathi keskethi.
- {{ui:Hlehlisa}} ne-{{ui:Phinda wenze}} ziyafiphela uma kungekho lutho oluzohlehliswa noma oluzophindwa.
- {{ui:Inhlanganisela}} idinga ingxenye enesolid. {{ui:Hlanganisa}} idinga izingxenye ezimbili ku-assembly. {{ui:Hlela ingxenye}} idinga ingxenye ekhethiwe.
- {{ui:STEP AP242 (isolidi eqondile)}} ne-{{ui:STEP AP214 (isolidi eqondile)}} ziyafiphela ku-assembly: thumela ingxenye ngayinye. Enye inhlelo yenqaba ifayela eqondile: zama {{ui:STEP AP214 (isolidi eqondile)}}, bese {{ui:STEP (ngobuso, kernel yemeshi)}}, bese utshela thina nge-{{ui:Usizo}} › {{ui:Bika inkinga}}.
- {{ui:Sweep}}, {{ui:Loft}} nezinye izici ezidinga i-kernel eqondile azifiphele: zisasebenza, izincazelo zazo ezivelayo ziphela ngokuthi "akikakhiwa okwamanje (idinga i-kernel eqondile)", futhi ukuchofoza kuyakusho lokho kwi-ibha yesimo. Bona [Okungakakhiwa okwamanje](topic:not-built-yet).
- {{ui:Umdwebo}} idinga ingxenye enesolid, futhi ifiphele lapho iskethi ivulekile.
- Izinto ze-{{ui:Thumela}} ziyafiphela ku-assembly: ama-assembly awakakwazi ukuthunyelwa. Vala, noma hlela ingxenye, ukuze uthumele.

## Izinkinga zeskethi

### Iskethi ayivumeli ukungeza ukuxhumana

"Ayikho ukuxhumana okulingana nalokhu okukhethiwe. Khetha izinto ezimbili noma eyodwa ({{key:Shift}}+chofoza kuyangeza)." Ukuxhumana kudinga ukukhetha okuhlukile. Bona [Ukuxhumana kweskethi nezilinganiso](topic:sketch-relations) ukuze uthole okudingwa yikho ngakunye.

### "Ichazwe ngokweqile: … azikwazi ukufezeka zonke. Hlehlisa, noma susa elinye lazo."

**Imbangela:** ukuxhumana noma isilinganiso esisha siphikisana nalokhu okuvele. Iskethi ayinyakazanga.

**Ukulungisa:** {{key:Mod+Z}}, noma susa enye yezinto ezibomvu ohlwini lwephaneli yesokudla (khetha **Susa** eduze kwayo).

### "Ichazwe ngokweqile: … sele kuphethwe. Yisuse."

**Imbangela:** ukuxhumana akwengezi lutho: ezinye sezikuphoqa kakade (isibonelo Parallel ezinhlangothini ezimbili zesikwele, noma isilinganiso esisesikhundleni esingaguquki). Akukho zilinganiso ezilandelwayo kule nguqulo.

**Ukulungisa:** yisuse. Ingxenye iyakhiwa noma kunjalo, ngesexwayiso.

### "Lezi zinto azikwazi ukulinganiswa ndawonye."

Uchofoze, isibonelo, iphoyinti nesiyingi. Linganisa kuphoyinti lesikhungo sesiyingi esikhundleni salokho.

### "I-fillet idinga ikhona lapho kuhlangana imigqa emibili ngqo." / "Lowo radius mkhulu kakhulu kule migqa."

Chofoza ngqo ephoyinteni lekhona lemigqa emibili eqinile. Sebenzisa radius encane kunaleyo umugqa omfushane ovumela.

### Ijiyomethri ibuyela emuva lapho ngiyihudula

Ukuhudula kuzophula ukuxhumana noma isilinganiso, ngakho i-PartCraft iyibuyisela. Kuphela ijiyomethri eluhlaza (engachazwanga ngokuphelele) ingahamba.

### "Le skethi ayikwazi ukuvula: Idinga i-Extrude2, ehlulekayo."

Iskethi ihlezi ebusweni besici esingakakhiwa. Lungisa leso sici kuqala, noma vula kabusha, noma qhubeka phambili (roll forward).

## Izinkinga zezici

| Umlayezo | Imbangela | Ukulungisa |
|---|---|---|
| "Yenza iskethi kuqala: khetha indiza, Iskethi, dweba iphrofayli evaliwe, Phuma." | Ayikho iskethi engasetshenziswanga enemigqa yamajika, futhi akukho ekhethiwe | Dweba iskethi, noma khetha iskethi oyisebenzisayo emlandweni |
| "Iskethi ayinayo iphrofayli evaliwe yokuphushwa." (noma "yokuzungezisa") | Ayikho ilupu elivaliwe lemigqa eqinile | Vala izikhala; buyisela imigqa yokwakha ngo-{{key:Q}} |
| "Iphrofayli ivulekile: ukuphela ku-(x, y) akuhlanganisiwe nalutho." | Kukhona isikhala kuleso siphoyinti | Vula iskethi, hudula ukuphela kumakhelwane wakho ukuze kuhlangane |
| "Iphrofayli ihlukana ku-(x, y): ngaphezu kwezinhlangothi ezimbili zihlangana khona." | Imigqa emithathu noma ngaphezulu ihlangana kuphoyinti elilodwa | Susa umugqa owengeziwe, noma uwushintshe ube wokwakha |
| "Ilupu elivaliwe lidinga okungenani izinhlangothi ezintathu noma ijika." | Imigqa emibili iphindana phambili nasemuva | Dweba kabusha ilupu |
| "Kudlula konke kwezinqamuko. Sebenzisa ukujula ku-boss." | I-boss esethwe ku-Through all | Setha End ku-Blind noma Mid-plane |
| "Akukho okuzosikwa kuleyo nhlangothi yeskethi. Zama olunye uhlangothi." | Ukusika kubheka ngaphandle kwempahla | Thikha **Isiqondiso esiphambene** |
| "Akukho okuzosikwa okwamanje." / "Akukho okuzokhandwa okwamanje." | Ayikho isolidi ngaphambi kwalesi sici | Yenza i-boss kuqala, noma hehlisa isici phansi |
| "Dweba umugqa wephakathi (umugqa wokwakha) eskethini ukuze uzungeze kuwo." | Ukuzungezisa ngaphandle kwe-axis | Engeza umugqa wephakathi, noma khetha umugqa ku-**I-Axis** |
| "Iphrofayli idlula i-axis. Yigcine ohlangothini olulodwa lomugqa wephakathi." | Iphrofayli ibhekene nazo zombili izinhlangothi ze-axis | Dweba kabusha ingxenye yephrofayli |
| "Beka amaphoyinti eskethi lapho kuzoba khona izimbobo (ithuluzi le-Point), bese wenza umgodi." | Akukho maphoyinti akhululekile eskethini | Engeza amaphoyinti nge-{{key:P}} |
| "Isimbobo kufanele sibe sibanzi kunomgodi." | Ububanzi (⌀) besimbobo abukhulu kune-Diameter | Yenza isimbobo sibe sibanzi |
| "Isimbobo kufanele sibe sengcone kunomgodi." | Isimbobo sijulile kunomgodi ovaliwe | Yenza sibe sengcone, noma umgodi ube mujulile |
| "Khetha izici ozokopisha." | Ipattern noma i-mirror ayikho okuthikhiwe | Thikha isici ngaphansi kwe-**Izici** ukuze ukopishe |
| "Extrude2 akunayo isolidi yokukopisha." | Isici ekopishwayo sehlulekile noma sivaliwe | Lungisa noma vula kabusha |
| "Idinga i-Sketch3, ehlulekayo." | Isici esincike kuso akikakhiwa | Lungisa isici esisho |
| "Ubuso ihlezi kuwo sekunyamalele (i-Extrude1 ayikakhiwa)." | Ubuso beskethi ayisekho | Lungisa leso sici, noma susa iskethi uphinde uyenze |
| "Akusalutho ingxenye ngemva kwalokhu." | Ukusika kususe wonke amanzi (impahla) | Hlola usayizi nesiqondiso sokusika |
| "I-solid kernel ayikwazanga ukwakha lokhu (…)." noma "I-solid kernel ayikwazanga ukuhlanganisa lokhu nomzimba." | I-kernel yenqaba ijiyomethri | Hlehlisa, noma shintsha usayizi kancane; izinhlangothi ezithinta ngokunembile zingabangela lokhu |
| "Sweep: akikakhiwa okwamanje. Idinga i-kernel eqondile, engekho kule nguqulo ye-PartCraft." (futhi i-Loft, i-Rib nezinye) | Isici esenziwe kwisakhiwo sangaphambilini esingakhiwa yi-kernel eqondile kuphela. Sihlala emlandweni futhi sigcinwa sibuyiselwe singashintshiwe | Vimbela noma susa; bona [Okungakakhiwa okwamanje](topic:not-built-yet) ukuze uthole okufanele wenze esikhundleni salokho |
| "I-round eyi-5 mm ayilingani lapha (…)." / "I-chamfer eyi-2 mm …" | Usayizi mkhulu kakhulu ebusweni eliseduze nomphetho, noma ikhona ayikwazi ukuxutshwa | Usayizi omncane, noma imiphetho embalwa ngesici ngasinye |
| "Fillet: kule nguqulo imiphetho eqondile phakathi kwezinhlangothi ezimbili eziyisicaba kuphela (i-mesh kernel iyakwakha). Gotsha noma ubhevele imiphetho egoqekile eskethini." (futhi i-Chamfer) | Umphetho okhethiwe ugoqekile, njengomphetho wesimbobo, noma ukhona ebusweni obugoqekile | {{ui:Khetha imiphetho}} bese usisusa; gotsha noma ubhevele leyo ndawo eskethini esikhundleni salokho |
| "I-fillet enobubanzi obushintsha ngomphetho: akikakhiwa okwamanje (idinga i-kernel eqondile). Yinike radius eyodwa." | **Radius eguqukayo** ithikiwe | Yikhiphe ukuthikha bese unikeza radius eyodwa |
| "Fillet nge-mesh kernel: lapho imiphetho egoqiwe ihlangana, ihlanganiswa nge-mitre, hhayi ixutshwe." (⚠, isexwayiso) | Imiphetho ekhethiwe ihlangana ekhoneni; ama-round ahlangana lapho ngokhuvi obukhali | Akukho okudingeka ukulungiswe: ingxenye iyakhiwa. Fillet imiphetho embalwa uma ikhuvi libalulekile |
| "Umphetho iyagoqa kuwo sekunyamalele: umphetho phakathi kuka-Extrude1 no-Cut2." | Ushintsho lwangaphambilini lususe umphetho | {{ui:Khetha imiphetho}}, susa umphetho obomvu, khetha omusha |
| "Khetha imiphetho embonweni, bese uyengeza." | Isici se-fillet noma i-chamfer alinayo imiphetho | {{ui:Khetha imiphetho}} |
| "Khetha izinhlangothi ozozisusa (ezivulekile), bese wenza i-shell." | I-shell ayinazo izinhlangothi ezivulekile | {{ui:Khetha izinhlangothi}} |
| "I-shell ayikwazanga ukwenziwa ngalobu bukhulu (…)." | Udonga lukhulu kunengxenye encane yemodeli noma kunoba we-fillet | Udonga olumncane, noma ama-fillet amakhulu |
| "Shell: kule nguqulo ivula izinhlangothi eziyisicaba kuphela (i-mesh kernel iyakwakha)." | Ubuso obuvulekile bugoqekile | {{ui:Khetha izinhlangothi}} bese usisusa; vula izinhlangothi eziyisicaba kuphela |
| "Uhlaka: kule nguqulo izinhlangothi eziyisicaba kuphela (i-mesh kernel iyakwakha)." | Ubuso obuthanjisiwe buyisilinda, i-cone noma ubuso be-freeform | Susa, uthambise izinhlangothi eziyisicaba kuphela |
| "Ubuso ivulayo sekunyamalele (…)." | Ushintsho lwangaphambilini lususe ubuso | {{ui:Khetha izinhlangothi}} futhi |
| "I-Fillet1 iguqula imiphetho noma izindonga zomzimba; ayikwazi ukukopishwa. …" | Ipattern noma i-mirror ikopisha i-fillet, i-chamfer noma i-shell | Yikhiphe ukuthikha; yenza ipattern yokusika kuqala, bese fillet |
| "Ihlezi ebusweni okungatholwa kuphela yi-kernel eqondile: akikakhiwa okwamanje kule nguqulo." | Iskethi ebusweni i-mesh kernel engakwazi ukuthola, njengalena yakhiwa kwisakhiwo sangaphambilini | Yenza iskethi endizeni esisekelo noma ebusweni obuyisicaba be-extrude, bese uyibeka ngezilinganiso |
| "Isebenzisa ubuso noma umphetho wesolid, okungatholwa kuphela yi-kernel eqondile: akikakhiwa okwamanje kule nguqulo." | Indiza, i-axis noma iphoyinti lereferensi ebusweni noma emphethweni wesolid | Yakha kusuka ezindizeni ezisisekelo, amaphoyinti eskethi noma ama-coordinates |
| "Ukukhipha kuze kube ubuso, ubuso obulandelayo noma i-vertex: akikakhiwa okwamanje (idinga i-kernel eqondile)." / "I-Taper: akikakhiwa okwamanje (idinga i-kernel eqondile)." | Isimo sokuphela noma i-taper kuphela i-kernel eqondile iyakwakha | Sebenzisa ukujula kwe-Blind noma i-Mid-plane oyilinganisayo; shiya i-Taper ku-0 |

## Izinkinga zokukhetha

- "Lobo buso bugoqekile. Khetha ubuso obuyisicaba noma indiza ukuze udwebe kuyo." Iskethi idinga ubuso obuyisicaba. Dweba endizeni esisekelo bese ubeka iskethi ngezilinganiso.
- Ubuso buthi "Fixed where picked": alukho umphetho weskethi owenza kuwo, isibonelo ubuso bekhophi yokukopisha ye-pattern, ngakho iskethi ebusweni leyo ihlala ilapho lapho ingxenye ishintsha.
- Imiphetho inzima ukuyifinyelela: sondeza. Umphetho uyanqoba ubuso obuseduze uma isikhombisi siphezu kwawo.

## Izinkinga zamafayela

| Umlayezo | Ukulungisa |
|---|---|
| 'I-PartCraft ivula amafayela ayo .partcraft.json, okuthunyelwe kusukela ku-CadCraft macro ye-SolidWorks (.cadcraft-sw.json) namafayela e-STEP. "bracket.igs" akukho kulezi.' | Kuphela lawo mafayela ayaqashelwa (namamesh e-STL, OBJ ne-3MF namafayela `.3dm`) |
| '"part.stp" akuyona ifayela le-STEP (aliqali nge-ISO-10303-21).' | Ifayela alisona umbhalo we-STEP |
| "Leli fayela le-STEP likhulu kakhulu (ngaphezu kuka-60 MB) ukuze lingenisiwe lapha." | Yenza ibe lula emthonjeni |
| "Leli fayela likhulu kakhulu ukuba yingxenye ye-PartCraft." kwingxenye oyigcinile | Isolidi elikhulu le-STEP elangenisiwa kwisakhiwo sangaphambilini lenze ifayela lengxenye libe ngaphezu kuka-50 MB. Sebenzisa ikhophi yangaphambilini engayo |
| "Leli fayela likhulu kakhulu ukuba yingxenye ye-PartCraft." | Ifayela ngaphezu kuka-50 MB; alisona ifayela le-PartCraft |
| "Lolu akusona ifayela le-PartCraft (alikho ku-JSON)." / "Lolu akusona ifayela le-PartCraft." | Ifayela lonakele noma eliyelohlelo lomunye |
| "Leli fayela ligcinwe yi-PartCraft entsha (inguqulo yefayela …); lapha ifunda inguqulo …" | Vula kwi-PartCraft entsha |
| "Extrude2: ukujula akulungile." (noma enye inani) | Ifayela libhalwe ngesandla noma lonakele. Sebenzisa ikhophi yangaphambilini |
| Ukungenisa ku-assembly kuthi "Part1.partcraft.json akunayo isolidi yokungenisa." | Ifayela lengxenye alinayo isolidi. Vula, yakha isolidi, gcina, bese ungenisa futhi |

**Ifayela engiligcinile alikho lapho ngilindele.** Ukulondoloza kuyidawunilodi: bheka efolda yokulanda yesiphequluli, noma vula uhlu lokulanda kwi-toolbar yesiphequluli. Bona [Lapho amafayela akho ahamba khona](common:your-files).

**Ngivule ingxenye kodwa i-assembly isasesikrinini.** Ingxenye ilayithe ngemva kwe-assembly. Khetha {{ui:Vala}} ukuze uvale i-assembly ubone ingxenye. Vala ama-assembly ngaphambi kokuvula amafayela engxenye.

## Izinkinga zombumbo

| Umlayezo | Ukulungisa |
|---|---|
| "Yakha isolidi kuqala, bese wenza umbumbo wayo." | Yakha ingxenye kuqala |
| "Ishidi alinandawo ye-detail. Yenza i-detail ibe ncane, noma ukhiphe umbono." | **Detail radius** noma **Detail scale** encane, noma susa isigaba |
| "I-detail ithathwa emibonweni ephambili, ephezulu, ngakwesokudla noma esigabeni." | Chofoza kwelinye lala mabono |
| "Chofoza kwelinye lemibono." | Ukuchofoza kube phezu kwephepha elingenalutho |
| "I-Position idinga okungenani ireferensi eyodwa ye-datum." nemilayezo yefreyimu eyinye | Setha ama-datum iphaneli eyicela, noma khetha enye impawu |
| "Imibono yombumbo ayikwazanga ukwenziwa: …" | Hlehlisa ushintsho lokugcina. Uma kuqhubeka, gcina, layitha kabusha ikhasi bese uvula kabusha ingxenye |

## Izinkinga ze-assembly

| Umlayezo | Ukulungisa |
|---|---|
| "Yakha isolidi kuqala, bese uyifaka ku-assembly." | Ingxenye ayinayo isolidi |
| "Ngenisa ingxenye yesibili kuqala (Engeza ikopi, Faka, noma Hlela › Phinda)." | Ixhumanisi idinga izingxenye ezimbili |
| "Khetha ubuso kwenye ingxenye." | Ubuso bezixhumanisi zombili kumele bube ezinxenyeni ezihlukene |
| "Lobo buso bugoqekile. Khetha ubuso obuyisicaba …" | Izixhumanisi ziqala ebusweni obuyisicaba. Bese usebenzisa **Gxila ku** ngehhole noma i-axis yokuzungezisa |
| "I-Bracket2 ayihlanganiswanga nengxenye esekelwe emhlabeni, ngakho ihlala lapho yabekwa khona." | Engeza ixhumanisi kuyo kuya engxenyeni ebekiwe |
| "I-Revolute3 ivala ilupu elingeke livale: ilahlekile ngo-2.000 mm. Hlola ubuso, ama-offset namakhawulo ezixhumanisi zelupu." | Izingxenye azikwazi ukuhlangana zonke: hlola ubude, ubuso obusetshenziswa yixhumanisi ngayinye, ama-offset (izingxenye ezibekwe ubuso nobuso kumele zivumelane ngokujula) namakhawulo; noma susa ixhumanisi eyodwa yelupu |
| "Ubuso lo xhumanisi ulisebenzisayo sekunyamalele ku-Bracket." / "I-axis lo xhumanisi ulisebenzisayo sekunyamalele ku-Bracket." | Ingxenye ihleliwe. Susa ixhumanisi bese uyenza futhi |
| "I-axis ihamba ngaphezu kobuso, ngakho ayikwazi ukusetha isikhungo sexhumanisi." | Khetha i-axis edlula ebusweni, noma "Ubuso bomsuka wobuso" |
| "I-assembly igcina okungenani ingxenye eyodwa. Yivale esikhundleni salokho." | Sebenzisa {{ui:Vala}} |

**Izingxenye zihlanganisiwe kodwa endaweni engafanele.** Setha **Gxila ku** kwomabili amahlangothi exhumanisi ukuze ube ngamahhole noma ama-axis okuzungezisa afanele ukuhlelwa, bese ulungisa **Ikona (°)** ne-**Offset (mm)**.

## Kuyahamba kancane

- Setha **Curves** ku-Ngokujwayelekile noma Coarse uma wenza imodeli; shintsha ku-Fine ngaphambi kokuthumela.
- Izinani ezikhulu zepattern (amakhophi amakhulu) zithatha isikhathi ukwakha kabusha ngalo lonke ushintsho. Vimbela ipattern lapho usebenza ezinye izici.
- Ukuhlolwa kokuxhumana (Clash) nokuhlola ukunyakaza kuqhathanisa zonke izingxenye ezimbili; ama-assembly amakhulu athatha isikhathi eside.
- Vala amathebhu amakhulu amanye. I-PartCraft isebenza ngeprosesa nomdwebo wekhompyutha yakho.

## Usazama

Gcina ifayela lakho kuqala ({{key:Mod+S}}), bese uvuselela ikhasi bese uvula futhi. Uma isici sisahluleka, sikhethe, funda umlayezo waso, bese uzama {{key:Mod+Z}} ubuyele esimeni esihle sokugcina.
