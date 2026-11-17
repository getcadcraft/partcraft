---
title: Izici nezinketho zazo
summary: Isici ngasinye ebhodini lamathuluzi nezilungiselelo zaso, okuzenzakalelayo nemikhawulo, kusukela ekukhipheni kuya ku-fillet, ku-shell nasezolidini ze-STEP ezingeniswe, izenzo ezabelwa yizici zonke, nezilungiselelo zengxenye.
keywords: izici, okungakakhiwa, khipha, sika, vuvuka, sika okuvuvukile, umgodi, iphethini yomugqa, iphethini yesiyingi, isibonakaliso, fillet, chamfer, shell, ngenisa, izinketho, okuzenzakalelayo, izilungiselelo, ukuqina, amajika, ukuvimbela, ukubuyela emuva
from: ab3a598e
---

Izici zibhalwa komlando ngokuhlelwa kwazo kwenziwa futhi zakhiwa kabusha kusuka phezulu kuya phansi. Ngasinye sibizwa ngohlobo lwaso nenombolo: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

I-PartCraft yakha zonke izici nge-mesh kernel. I-Fillet ne-Chamfer zisebenza emaphethelweni aqondile phakathi kwezinhlangothi ezimbili ezithe, ne-Shell ivula izinhlangothi ezithe. Izolidi ezingeniswe zidinga i-kernel eqondile, engekho kule nguqulo: azikakhiwa, futhi isigaba sazo esingezansi sichaza ukuthi ingxenye eyenziwe enguqulweni yakudala iyigcina. Bheka [I-mesh kernel](topic:solid-kernels) ne-[Akukakhiwa okwamanje](topic:not-built-yet).

## Isikethi

| Isilungiselelo | Amanothi |
|---|---|
| Ipuleni | Front, Top noma Right, noma ubuso obuthe. Iyabonakala, ayishintshwa: ukuze uhambise isikethi, yenza esisha |
| Isimo | Icacisiwe ngokugcwele, Icacisiwe ngaphansi (nezinqumo zokunyakaza), Icacisiwe ngaphezu, noma Akukho lutho |
| Ijometri, Ukuxhumana | Mangaki amajika, amaphoyinti nokuxhumana |
| Izilinganiso ezishayelayo | Zonke izilinganiso zesikethi, ezishintshekayo |

Izinkinobho: {{ui:Hlela isikethi}}, {{ui:Khipha njenge-DXF}}.

## Khipha nesika

{{ui:Ukukhipha}} kanye {{ui:Sika}} zenza isici esifanayo, siqale ngezilungiselelo ezihlukile.

| Isilungiselelo | Izinketho | Ukukhipha kuqala ku- | Ukusika kuqala ku- |
|---|---|---|---|
| Isenzo | Isiqukathi (engeza impahla), Sika (susa impahla), Hlanganisa (gcina ukuhlangana), Isidumbu esisha (akukakhiwa kule nguqulo) | Isiqukathi | Sika |
| Ukuphela | Okuvaliwe (ukujula), Phakathi kwendiza (zombili izindlela), Konke kudlule | Okuvaliwe | Konke kudlule |
| Ukujula (mm) | Ngaphezu kwe-0, kuze kube ku-1,000,000 | 10 | 10 |
| Phendula indlela | Kuvalwe / Kuvuliwe | Kuvalwe | Kuvalwe |

- Iphrofayili: wonke amalunu avaliwe emigqeni eqinile, emasongweni namasekhono esikethini. Amalunu angaphakathi kwamanye amalunu ayimigodi.
- Konke kudlule kusebenza kuphela kwezokusika. Ifinyelela ngqo ngaphakathi kwengxenye ohlangothini olukhethiwe.
- Ukusika kungena empahleni, kude nohlangothi lwendiza yesikethi oluphuma ngaphandle; Phendula indlela iyaguqula.

## Jikeleza nokusika okujikelezayo

| Isilungiselelo | Izinketho | Okuzenzakalelayo |
|---|---|---|
| Isenzo | Isiqukathi, Sika | Isiqukathi ({{ui:Jikeleza}}), Sika ({{ui:Okwengeziwe}} › {{ui:Ukusikwa okujikelezayo}}) |
| Ukuhlangana (°) | Ngaphezu kwe-0, kuze kube ku-360 | 360 |
| Eksisi | Umugqa wokuqala wephakathi, noma yimuphi umugqa noma umugqa wephakathi wesikethi, noma isici seeksisi esilele endizeni yesikethi | Umugqa wokuqala wephakathi |

- Iphrofayili kumele ihlale ohlangothini olulodwa leeksisi. Ingayithinta.
- Eksisi yokujikeleza ingasetshenziswa yizakhiwo ezijikelezayo nezixhumanisi zenhlanganisela.

## Umgodi

| Isilungiselelo | Izinketho | Okuzenzakalelayo |
|---|---|---|
| Uhlobo | Olula, Counterbore | Olula |
| Ububanzi (mm) | Ngaphezu kwe-0 | 6 |
| Konke kudlule | Kuvuliwe / Kuvaliwe | Kuvuliwe |
| Ukujula (mm) | Uma Konke kudlule kuvaliwe | 10 |
| Ububanzi be-counterbore ⌀ | Kubanzi kunomgodi | 11 |
| Ukujula kwe-counterbore | Kujulile kancane kunomgodi ovaliwe | 6 |
| Phendula indlela | Kuvalwe / Kuvuliwe | Kuvalwe |

- Umgodi owodwa kuwo wonke amaphoyinti angalungiswanga esikethi (amaphoyinti adalwe ngethuluzi lephoyinti). Iphaneli ibonisa ukuthi mangaki.
- Imigodi ibhodla ngokuqondile endizeni yesikethi, ingene empahleni.
- Eksisi yomgodi ngamunye ingasetshenziswa izixhumanisi zenhlanganisela ("Hole1, hole 2").

## Iphethini elilayini

| Isilungiselelo | Izinketho | Okuzenzakalelayo |
|---|---|---|
| Izici ezizokopishelwa | Noma yiziphi izici zesolidi ezingaphezulu kwalo | Isici esikhethiwe, kungenjalo isici sesolidi sokugcina |
| Indlela | Eksisi ye-X, eksisi ye-Y, eksisi ye-Z; umugqa wesikethi sangaphambilini; eksisi yokujikeleza; umphetho okhethiwe | Eksisi ye-X (noma umphetho okhethwe lapho wengeza) |
| Ibanga (mm) | Noma yisiphi isibalo | 20 |
| Inani | Kusukela ku-1 kuya ku-1000, kubandakanya okwangempela | 3 |
| Phendula indlela | Kuvalwe / Kuvuliwe | Kuvalwe |

## Iphethini elijikelezayo

| Isilungiselelo | Izinketho | Okuzenzakalelayo |
|---|---|---|
| Izici ezizokopishelwa | Njengakwelilayini | Njengakwelilayini |
| Eksisi | Njengakwe-Indlela phezulu | Eksisi yokujikeleza yakamuva, kungenjalo eksisi ye-Y (noma umphetho okhethiwe) |
| Ukuhlangana (°) | Ngaphezu kwe-0, kuze kube ku-360. I-360 ibeka izikhopi ngokulinganayo zonke; okungaphansi kuzisakaza ngaphezu kwelo hlangana | 360 |
| Inani | Kusukela ku-1 kuya ku-1000, kubandakanya okwangempela | 6 |
| Phendula indlela | Kuvalwe / Kuvuliwe | Kuvalwe |

## Isibonakaliso

| Isilungiselelo | Izinketho | Okuzenzakalelayo |
|---|---|---|
| Isibonakaliso | Isidumbu sonke (njengoba sakhiwe kwaze kwaba manje), noma izici ezikhethiwe | Isici esikhethiwe, kungenjalo isidumbu sonke |
| Ipuleni lesibonakaliso | Front, Top noma Right; ubuso obuthe | Ipuleni le-Right, noma ubuso obuthe okukhethwe lapho wengeza |

## Fillet ne-Chamfer

Kule nguqulo i-mesh kernel iyazakha emaphethelweni aqondile phakathi kwezinhlangothi ezimbili ezithe (amakhona angaphandle noma angaphakathi), nomsantsa oyodwa. Umphetho ojikelezayo uthi "Fillet: kule nguqulo kuphela emaphethelweni aqondile phakathi kwezinhlangothi ezimbili ezithe (i-mesh kernel iyawakha). Jikeleza noma gobisa imiphetho egobile esikethini."; lapho imiphetho ejikelezayo ihlangana ekhoneni iyasikwa (mitred), nesici sixwayisa "Fillet nge-mesh kernel: lapho imiphetho ejikelezayo ihlangana iyasikwa, ayixutshwa." Izinhlobo ze-Chamfer (ibanga elilinganayo, amabanga amabili, ibanga nengonyama, no-**Flip sides**) zonke ziyasebenza. Bheka [Jikeleza, gobisa nokwenza kube yisikhwama](topic:fillet-chamfer-shell).

| Isilungiselelo | Izinketho | Okuzenzakalelayo |
|---|---|---|
| Umsantsa (mm) (Fillet) | Ngaphezu kwe-0 | 2 |
| Ibanga (mm) (Chamfer) | Ngaphezu kwe-0, linye kuzo zombili izinhlangothi | 1 |
| Imiphetho | Imiphetho ekhethiwe, ngayinye ibhalwe ngezinhlangothi ezimbili ezihlangene nazo ("Extrude1 end face × Extrude1 side"), ne-**Susa** | Imiphetho ekhethwe lapho wengeza |

- Khetha imiphetho ngaphambi kokukhetha inkinobho ({{key:Shift}}+chofoza ukuze uthole eminingi), noma khetha inkinobho kungakhethiwe lutho bese uchofoza imiphetho kamuva.
- {{ui:Khetha imiphetho}} (noma chofoza kabili isici) iyashintsha imiphetho.
- Imiphetho igcinwa ngezinhlangothi ezimbili ezihlangene nazo, ngakho isinda kushintsha kosayizi ngaphambili komlando.

## Shell

I-mesh kernel iyayakha. Izinhlangothi ezithe kuphela zingavulwa ("Shell: kule nguqulo ivula izinhlangothi ezithe kuphela (i-mesh kernel iyakha)."); izindonga zobukhulu obuhlukene azikakhiwa okwamanje. Bheka [Jikeleza, gobisa nokwenza kube yisikhwama](topic:fillet-chamfer-shell).

| Isilungiselelo | Izinketho | Okuzenzakalelayo |
|---|---|---|
| Udonga (mm) | Ngaphezu kwe-0 | 2 |
| Izindonga zikhula ngaphandle (izinhlangothi zihlala ngaphakathi) | Kuvalwe: izindonga ziya ngaphakathi. Kuvuliwe: izindonga ziya ngaphandle | Kuvalwe |
| Izinhlangothi ezivulekile | Izinhlangothi ezisusiwe, okungenani eyodwa, ne-**Susa** | Izinhlangothi ezikhethwe lapho wengeza |

{{ui:Khetha izinhlangothi}} iyashintsha izinhlangothi ezivulekile.

## Isolidi esingeniswe

Yenziwa ngokuvula ifayela le-STEP, STL, OBJ noma 3MF: umzimba wesolidi wamatriyangula ongenalo umlando wawo ([Vula ifayela le-STEP](topic:import-step), [Vula i-STL, OBJ noma i-3MF](topic:open-meshes)). Ibonisa ifayela elivela kulo nokulungisa okwenziwe ngokungeniswa; **Iyunithi kufayela**, **Phezulu kufayela** no **Sebenzisela ukuze** ziyahleleka. Isolidi se-STEP esingeniswe yinguqulo yakudala enekernel eqondile sihlala komlando simakwe njengokungakakhiwa; vula kabusha ifayela le-STEP ukuze ulingenise njengamatriyangula.

| Isilungiselelo | Izinketho | Okuzenzakalelayo |
|---|---|---|
| Phezulu kufayela | Z up (izinhlelo eziningi ze-CAD), Y up | Z up |

Amaphethini nezibonakaliso zingakopisha isolidi esingeniswe, kodwa hhayi i-fillet, i-chamfer noma i-shell.

## Konke isici sinakho

Ezansi kwephaneli yesici ngasinye:

| Inkinobho | Yenza |
|---|---|
| {{ui:Vimbela}} / {{ui:Khipha ekuvinjelweni}} | Iyivala noma ivule. Izici ezidinga kuwo azakhiwa kuze kube yilapho ivaliwe |
| {{ui:Buyela lapha}} | Yakha kuphela izici ezingaphezulu kwalo. Izici ezintsha zingena ebhalweni lokubuyela emuva |
| {{ui:Hambisa phezulu}} / {{ui:Hambisa phansi}} | Hlela kabusha, lapho okungasetshenziswa yisici kungaphela ngaphansi kwaso. Kuba mpunga nesizathu uma kungenjalo |
| {{ui:Susa}} | Isisusa, futhi (emva kokubuza) zonke izici ezisisebenzisayo |
| Igama | Shintsha igama (kuze kube izinhlamvu ezingu-60) |

Izici ezinesikethi zidlule nazo **Izilinganiso zesikethi**, ezishintshekayo ngqo.

## Izimo komlando

| Isimo | Okubonakala njengakho | Incazelo |
|---|---|---|
| Kwakhiwe | Ngokujwayelekile | Konke kuhle |
| Isexwayiso | ⚠ | Kwakhiwe, kukhona okufanele kuhlolwe: "Over defined: 1 relation is not needed." noma "Nothing is left of the part after this." |
| Iphutha | ⚠ iphutha, bomvu | Ayikwazanga ukwakhiwa; umyalezo uchaza ngani |
| Akukakhiwa | ⚠ akukakhiwa | Idinga isici esehlulekile, esivinjiwe noma esibuyele emuva, noma idinga i-kernel eqondile, engekho kule nguqulo ("Sweep: not built yet. …") |
| Ivinjiwe | ivaliwe | Ivalwe |
| Ibuyele emuva | ikhanya ngaphansi kwebha yokubuyela emuva | Akukakhiwa uze ubuyele phambili |

## Izilungiselelo zengxenye

Chofoza isikhala esingenalutho ukuze kungakhethwa lutho. Iphaneli yangakwesokudla ibonisa **Ingxenye**:

- **Igama**: igama lengxenye, elisetshenziswa emagameni amafayela nakubhulokhi yesihloko somdwebo (kuze kube izinhlamvu ezingu-120).
- **Amajika**: bheka ngezansi.

### Ukuqondisa kwamajika

I-mesh kernel yakha isolidi ngokwayo ngobuso obuthe, ngakho umbono, i-STL, i-3MF, i-STEP enobuso, ivolumu nemibono yomdwebo konke kulandela **Amajika**: mangaki ama-facet ngesiyingi ngasinye.

| Isilungiselelo | Ama-facet ngokujikeleza | Ivolumu yesimo esijikelezayo |
|---|---|---|
| Kuqinile (32 ngokujikeleza) | 32 | Cishe ngaphansi ka-0.64 % kwenani eliqondile |
| Okujwayelekile (64 ngokujikeleza) | 64 | Cishe ngaphansi ka-0.16 % (okuzenzakalelayo) |
| Kuhle (128 ngokujikeleza) | 128 | Cishe ngaphansi ka-0.04 % |
| Kuhle kakhulu (256 ngokujikeleza) | 256 | Cishe ngaphansi ka-0.01 % |

Amajika aqinile enza ukukhipha nemibono ibushelelezi, nokwakha kabusha kuhamba kancane. Lesi silungiselelo sigcinwa efayelini lengxenye.

## Akukakhiwa okwamanje

Ama-fillet anobubanzi obuguquguqukayo, ama-fillet nama-chamfer emaphethelweni ajikelezayo, ama-shell avula izinhlangothi ezigobile, i-draft ezinhlangothini ezigobile, i-sweep, i-loft, i-rib, izolidi ze-STEP ezinezinhlangothi ezigobile eziqondile, izidumbu ezintsha, ama-taper, "kuze kube" ubuso noma i-vertex, nezikhombo ezinhlangothini nasemaphethelweni esolidi, zidinga i-kernel eqondile, engekho kule nguqulo. Futhi akukakhiwa: imigodi enesikulufo nemigodi ye-countersunk. Bheka [Akukakhiwa okwamanje](topic:not-built-yet).
