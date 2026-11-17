---
title: Jikeleza, gobisa nokwenza kube yisikhwama nge-Fillet, Chamfer ne-Shell
summary: Khetha imiphetho bese wengeza ama-fillet anobubanzi obuhlala njalo noma obuguquguqukayo namachamfer alinganayo, amabanga amabili noma ibanga nengonyama; yenza ingxenye ibe yisikhwama nge-Shell ngokukhetha izinhlangothi ozovula, shintsha imiphetho noma izinhlangothi isici esizisebenzisayo, bese ulungisa izinkinga ezivamile.
keywords: fillet, jikeleza, hlanganisa, chamfer, gobisa, shell, isikhwama, ubukhulu bodonga, imiphetho, izinhlangothi, khetha imiphetho, shift click, vula ubuso, i-kernel eqondile, i-mesh kernel, akukakhiwa
from: e41c1c12
---

:::note
**Kule nguqulo** i-PartCraft yakha ama-fillet nama-chamfer nge-mesh kernel, kuphela emaphethelweni aqondile phakathi kwezinhlangothi ezimbili ezithe: amaphethelo ebhokisi nemiphetho eqondile yokukhipha nokusika, amakhona angaphandle noma angaphakathi (ikhona ngaphakathi lapho kungezwa impahla). Imiphetho ejikelezayo njengemiphetho yemigodi, nobubanzi obushintsha ngaphezu komphetho, akukakhiwa okwamanje. Lapho imiphetho emibili ejikelezayo ihlangana ekhoneni, ukujikeleza kuyasikwa (kuhlangana kumgodi obukhali), kungaxutshwa. I-**Shell** nayo isebenza, yakhiwe yi-mesh kernel: ivula izinhlangothi ezithe kuphela, izikhwama zobukhulu bodonga obuhlukene azikakhiwa okwamanje, futhi ishesha kakhulu ezingxenyeni ezinezinhlangothi eziningi ezijikelezayo. Bheka [Akukakhiwa okwamanje](topic:not-built-yet).
:::

{{ui:Fillet}} ijikeleza imiphetho, {{ui:Chamfer}} iyigobisa, {{ui:Shell}} yenza ingxenye ibe yisikhwama. Zonke ntathu zisebenza emaphethelweni nasezinhlangothini zesolidi futhi zakhiwa yi-mesh kernel. Ukujikeleza kwazo kwenziwa ngobuso njengazo zonke izinhlangothi ezijikelezayo (**Amajika** ilawula ukuthi zincane kangakanani); izinhlangothi ezijikelezayo yizilinda ongazikhetha futhi ulinganise (bheka [I-mesh kernel](topic:solid-kernels)).

## Jikeleza noma gobisa imiphetho

### Khetha imiphetho kuqala

1. Chofoza umphetho wengxenye. Umphetho wonke uyakhanya, futhi iphaneli yangakwesokudla ithi **Umphetho**: uhlobo lwawo (Oqondile, Isiyingi noma ihlamvu, Ijika), ubude, nezinhlangothi ayisendiswe phakathi kwazo.
2. Ukwengeza eminye imiphetho, {{key:Shift}}+chofoza yona. Ngayinye iyamakwa; {{key:Shift}}+chofoza umphetho omakiwe ukuze uwuphonse. Ukuqondwa kwephaneli kubala (“imiphetho engu-4”) nebha yesimo ithi "imiphetho engu-4 ikhethiwe. Fillet noma Chamfer ziyijikeleza; Shift+click ikhetha eminye, Esc isula."
3. Khetha {{ui:Fillet}} noma {{ui:Chamfer}} ebhodini lamathuluzi, noma izinkinobho ezifanayo kwiphaneli yangakwesokudla.

Isici sengezwa ngayo yonke imiphetho ekhethiwe: ukujikeleza kwe-2 mm, noma i-chamfer ye-1 mm. Ibha yesimo ithi, ngokwesibonelo, "Fillet1 yengeziwe (imiphetho engu-4). Shintsha usayizi wayo kwesokudla; Khetha imiphetho ishintsha ukuthi yiphi."

### Noma engeza isici kuqala

1. Ngaphandle kokukhetha lutho, khetha {{ui:Fillet}} noma {{ui:Chamfer}}.
2. I-PartCraft ingena ekukhetheni: ukuqondwa kwephaneli yangakwesokudla kuthi "Fillet1: ukukhetha", ingxenye ibonakala njengoba yayinjalo ngaphambi kwe-fillet (iphaneli iyakusho lokho), futhi ibhodi lamathuluzi libonisa {{ui:Kuqediwe}}.
3. Chofoza umphetho ngamunye ukuze wengeze; uchofoze futhi ukuze uwuphonse. Ibha yesimo iyawabala.
4. Khetha {{ui:Kuqediwe}} (noma {{ui:Kuqediwe ukukhetha}} kwiphaneli), noma cindezela {{key:Esc}} noma {{key:Enter}}.

### Izilungiselelo

| Isilungiselelo | Fillet | Chamfer |
|---|---|---|
| Usayizi | **Umsantsa (mm)**, okuzenzakalelayo 2 | **Ibanga (mm)** ngasemuva komphetho ezinhlangothini zombili, okuzenzakalelayo 1 |
| **Imiphetho** | Mangaki | Mangaki |

Uhlu oluseduze ibiza umphetho ngamunye ngezinhlangothi ezimbili ezihlangene nawo, njengo "Umphetho 1: Extrude1 end face × Extrude1 side". **Susa** ususa elilodwa. {{ui:Khetha imiphetho}} ibuyela ekukhetheni. Ukuchofoza kabili isici komlando kwenza into efanayo.

Imiphetho ikhunjulwa ngezinhlangothi ezimbili ezihlangene nazo, ngakho ihlala emphethweni ofanele uma ushintsha isilinganiso ngaphambili komlando.

### Ama-fillet aguquguqukayo nezinhlobo ze-chamfer

- **Umsantsa oguquguqukayo** (fillet): akukakhiwa kule nguqulo ("I-fillet yobubanzi obushintsha ngomphetho: akukakhiwa okwamanje (idinga i-kernel eqondile). Yinike umsantsa oyodwa."). Ngale-kernel eqondile: tick kuwo bese usetha **Umsantsa wokugcina (mm)**. Umsantsa uguquka ngokulingana kusuka ku-**Umsantsa** kolunye uhlangothi lomphetho ngamunye kuya ku-**Umsantsa wokugcina** kolunye; **Shintsha izinhlangothi** uyaphendula.
- **Uhlobo** (chamfer): **Ibanga elilinganayo**, **Amabanga amabili** (**Ibanga lesibili** kolunye ubuso) noma **Ibanga nengonyama** (ibanga ebusweni obubodwa, ukugoba ku-**Ingonyama (°)** kuleso sibuso). **Flip sides** ibeka ibanga lokuqala kolunye ubuso.

## Yenza ingxenye ibe yisikhwama

1. Chofoza ubuso obuthe ofuna ukungavala, isibonelo phezulu kwebhokisi. Noma {{key:Shift}}+chofoza izinhlangothi eziningi.
2. Khetha {{ui:Shell}} ebhodini lamathuluzi, noma {{ui:Shell, evula lobu buso}} kwiphaneli yobuso.

Ingxenye iba udonga olungu-2 mm, izinhlangothi ezikhethiwe zivulekile. Izilungiselelo:

| Isilungiselelo | Okwenzayo | Okuzenzakalelayo |
|---|---|---|
| **Udonga (mm)** | Ubukhulu bodonga | 2 |
| **Izindonga zikhula ngaphandle (izinhlangothi zihlala ngaphakathi)** | Kuticiwe: izindonga zengezwa ngaphandle, ngakho ngaphakathi kugcina usayizi wengxenye | Kuvalwe: izindonga ziya ngaphakathi futhi ngaphandle kugcina usayizi wakho |
| **Izinhlangothi ezivulekile** | Mangaki amabuso asusiwe | |

Ngaphakathi, izindonga zingobukhulu bodonga ngqo: amakhona angaphandle ahlala abukhali, amakhona angaphakathi aphuma ejikelezile (umsantsa = udonga), nomgodi odlula engxenyeni uthola ithubhu lodonga ozungezile. Ngaphandle, izindonga zengezwa ngaphandle kobuso bokuqala, okuba yisikhwama, nemiphetho yangaphandle iphuma ijikelezile. Izinhlangothi zangaphakathi zithathwa amagama ngokuhlukanisa izinhlangothi ezibekwe kuzo, ngakho ungazikhetha.

Izinhlangothi ezithe kuphela zingavulwa: ukukhetha eyodwa egobile kuthi "Shell: kule nguqulo ivula izinhlangothi ezithe kuphela (i-mesh kernel iyakha)." I-shell ishesha kancane ezingxenyeni ezinezinhlangothi eziningi ezijikelezayo (amasekhondi ambalwa ngamathrayangula azinkulungwane): sebenzisa **Amajika** ancane kakhulu uma uklama.

{{ui:Khetha izinhlangothi}} iyashintsha izinhlangothi ezivulekile, ngendlela efanayo nokukhetha imiphetho. Uhlu lubiza ngayinye, njengo "Ubuso 1: Extrude1 end face". Ishell engenayo izinhlangothi ezivulekile ayivunyelwe: "Khetha izinhlangothi ezizosuswa (ezivulekile), bese wenza i-shell."

## Ukuhleleka kubalulekile

Izici zakhiwa phezulu kuya phansi. I-fillet ngaphambi kwe-shell ifakwa i-shell kanye nengxenye, ngakho nangaphakathi kuthola amakhona ajikelezile. I-fillet ngemva kwe-shell ijikeleza kuphela imiphetho oyikhethayo. Hambisa izici nge-{{ui:Hambisa phezulu}} ne-{{ui:Hambisa phansi}} (bheka [Shintsha ingxenye ngomlando wayo](topic:edit-history)).

Amaphethini nezibonakaliso azikwazi ukukopisha i-fillet, i-chamfer noma i-shell: "Fillet1 ishintsha imiphetho noma udonga lomzimba; ayikwazi ukukopishwa. Kopisha izici ezenza izolidi (ukukhipha, ukujikeleza, imigodi, okungeniswe)." Yenza iphethini yemigodi noma yokusika kuqala, bese wenza i-fillet kuyo yonke imiphetho yamakhophi ku-fillet eyodwa.

## Lapho kwehluleka

| Umyalezo | Okufanele wenze |
|---|---|
| "A 5 mm round does not fit here (it is too big for a face next to one of the edges, or the edges meet in a corner the kernel cannot blend)." | "Umzimba ojikelezile we-5 mm awulingani lapha (mkhulu kakhulu ebusweni eliseduze nomphetho owodwa, noma imiphetho ihlangana ekhoneni i-kernel engayixuba)." Sebenzisa umsantsa omncane, noma fillet imiphetho embalwa ngesikhathi (izici eziningi zefillet, eyincane kakhulu ekugcineni) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | "Umphetho esiwujikelezayo unyamalele: umphetho phakathi kuka-Extrude1 na-Cut2." Ushintsho lwangaphambili luwususile lowo mphetho. Khetha {{ui:Khetha imiphetho}}, susa umphetho obomvu bese ukhetha omusha |
| "The shell could not be made with this thickness (…)." | "Ishell ayikwazanga ukwenziwa ngalobu bukhulu (…)." Udonga lukhulu kunengxenye emincane yemodeli, noma kunomsantsa we-fillet. Yenza udonga lube mncane, noma ama-fillet abe mkhulu kunodonga |
| "That face has no name the history can follow; pick another." | "Lobo buso alinagama umlando olingalandela; khetha elinye." Khetha ubuso okwenziwe yisici (ubuso obuningi bunjalo) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (futhi Chamfer) | "Fillet: kule nguqulo emaphethelweni aqondile phakathi kwezinhlangothi ezimbili ezithe kuphela (i-mesh kernel iyawakha). Jikeleza noma gobisa imiphetho egobile esikethini." Umphetho okhethiwe ujikelezile, njengomphetho womgodi, noma ulele ebusweni elijikelezile. Wususe nge-{{ui:Khetha imiphetho}}, bese ujikeleza noma ugobisa leli khona esikethini kunalokho |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | "I-fillet yobubanzi obushintsha ngomphetho: akukakhiwa okwamanje (idinga i-kernel eqondile). Yinike umsantsa oyodwa." Susa ukukhetha **Umsantsa oguquguqukayo** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠ komlando) | "I-fillet nge-mesh kernel: lapho imiphetho ejikelezile ihlangana iyasikwa, ayixutshwa." Isexwayiso, hhayi iphutha: ingxenye yakhiwe. Imiphetho ekhethiwe ihlangana ekhoneni, nezijikeleko zihlangana khona ngomgoqo obukhali. Fillet imiphetho embalwa, noma wamukele lowo mgoqo |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | "Shell: kule nguqulo ivula izinhlangothi ezithe kuphela (i-mesh kernel iyakha)." Ubuso ovulekile ujikelezile. {{ui:Khetha izinhlangothi}} bese uwususa; vula izinhlangothi ezithe kuphela |

## Imikhawulo

Kule nguqulo ama-fillet nama-chamfer asebenza kuphela emaphethelweni aqondile phakathi kwezinhlangothi ezimbili ezithe, nobubanzi obubodwa, nezijikeleko ezihlangana ekhoneni ziyasikwa. Ama-shell avula izinhlangothi ezithe kuphela. Ngale-kernel eqondile, i-fillet eguquguqukayo ishintsha ngokulingana kuwo wonke umphetho (umthetho owodwa ngesici; akukho bubanzi obubekwe emaphoyinti asemphethweni). Ama-fillet obuso, ama-fillet agcwele nama-shell anobukhulu bodonga obuhlukene akukakhiwa okwamanje.
