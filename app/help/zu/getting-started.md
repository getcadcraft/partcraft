---
title: Qala nge-PartCraft
summary: Yini ePartCraft ayenza namuhla, okudingeka isiphequluli sakho, nengxenye yokuqala ngemizuzu eyishumi, kusukela ekuskeçheni kuya kufayela elilondoloziwe.
keywords: qala, ukuqala kokuqala, isiqalo esisheshayo, isingeniso, ithutorial, ingxenye yokuqala, ipuleti, parametric, umenzi wengxenye
from: 5f0a668d
---

I-PartCraft iyi-app ye-parametric yengxenye nenhlanganisela yomndeni we-CadCraft. Udweba isikethi se-2D, uyibophe ngezihlobanisi nezilinganiso, uyiguqule ibe isolidi ngezici ezifana ne-{{ui:Ukukhipha}}, {{ui:Jikeleza}} ne-{{ui:Imbobo}}, futhi ungashintsha noma iyiphi inombolo kamuva: ingxenye iyakhiwa kabusha kusuka emlandweni wayo. Izingxenye zibe sezingena ezinhlanganisweni, lapho amajoyinti azibeka khona futhi akuvumele uhlole ukunyakaza.

Okwenziwa yileli nguqulo:

| Umsebenzi | Okutholayo |
|---|---|
| Amasketshi | Imigqa, amarektangili, izindilinga, imisalo, amaphoyinti nemigqa yesisekelo, nezihlobanisi nezilinganiso, nesimo esiphilayo: ichazwe kancane, ichazwe ngokuphelele noma ichazwe ngokweqile |
| Izici zesolidi | Ukukhipha, sika, jikeleza, sika ngokujikeleza, imbobo elula nembobo enesikhala, amaphethini ayisiqondo nawokujikeleza, isibuko, ama-fillet nama-chamfer phakathi kwezindawo ezithe tshe, namama-shell nezinhlaka ezindaweni ezithe tshe. I-sweep, i-loft nezinye izici ezidinga i-kernel eqondile azikakhiwa kulolu nguqulo: bheka [Okungakakhiwa](topic:not-built-yet) |
| Umlando | Hlela izinombolo zanoma yisiphi isici, vimbela, buyela emuva, hlela kabusha futhi usule, nokuhlehlisa |
| Izinhlanganisela | Izingxenye ezixhunywe ngamajoyinti aqinile, ajikelezayo nokuhamba, ukuhlolwa kokugqekeza nokuhlolwa kokunyakaza |
| Imidwebo | Ishidi le-A3 elinemibono emithathu, i-isometric, isigaba, umbono wemininingwane, izilinganiso eziphelele, ama-datum, imifreyimu yokulawula izici nezimpawu zokuqeda ubuso, ethunyelwa njenge-PDF |
| Amafayela | Amafayela awo engxenye nenhlanganisela; i-STL, i-3MF, i-STEP eyenziwe ngobuso, i-DXF ne-PDF ephumayo |

Konke kusebenza kusiphequluli sakho, kukhompyutha yakho. **Akukho lutho olulayishwa.** Bheka [Amafayela: vula, londoloza nokuthumela](topic:files) ukuze uthole lapho amafayela aya khona.

## Okudingekayo

- I-Chrome, i-Edge, i-Firefox noma i-Safari yamanje enendlela ye-**WebGL** (izithombe ze-3D) ne-**WebAssembly** evuliwe. Zombili zivulwa ngokuzenzakalela. Ijiyomethri yesolidi yakhiwa yi-mesh kernel ye-WebAssembly elayisha nge-app: bheka [I-mesh kernel](topic:solid-kernels).
- Imbewu iyinhle kakhulu. I-trackpad iyasebenza, nezikrini ezithinta ziyasebenza ukubuka nokudweba okulula: bheka [Trackpad, ukuthinta nezikrini ezincane](topic:trackpad-and-touch).
- Isikrini esinobubanzi obungu-1280 pixels noma ngaphezulu sibonisa ibha yonke yamathuluzi emugqeni owodwa. Amawindi amancane askrolela ibha yamathuluzi ngokuqondile; kuma-foni amaphaneli avulela njengamashidi kusuka kubha engaphansi.

Okwengeziwe ngamabhrawuza: [Amabhrawuza nekhompyutha](common:browsers).

:::note
I-PartCraft isebenza ebhrawuzeni, nasekhompyutheni ngaphakathi kwe-CadCraft Studio. Ukulondoloza ku-cloud akukatholakali okwamanje: uvula izingxenye kukhompyutha yakho futhi ubuyisele kuyo njengamafayela.
:::

## Vula i-PartCraft

1. Vula i-PartCraft.
2. Linda kuze isikrini sithi "Kulayisha i-kernel ye-solid…". Lokhu kuthatha isikhashana okokuqala.
3. Ubona i-view ye-3D engenalutho enamapuleni amathathu asisekelo, umlando ngakwesobunxele ("Part1", bese **Indiza ephambili**, **Indiza ephezulu**, **Indiza yesokudla**) nebhokisi ku-view elithi "Qala ingxenye".
4. Ichip eseduze nesokudla sebha yesimo ithi "Kernel yemeshi": i-PartCraft yakha yonke ingxenye nge-mesh kernel kulolu nguqulo, ngakho ubuso obujikelezayo buyizinxantathu ezithe tshe. Ungaqala ukumodela ngokushesha.

Uma i-view ithi isiphequluli asikwazi ukubonisa i-3D, noma i-kernel ingalayishanga, bheka [Ukuxazulula izinkinga](topic:troubleshooting#the-app-does-not-start).

## Ingxenye yakho yokuqala: ipuleti nemgodi

Uzokwenza ipuleti elingu-60 × 40 mm, elinobukhulu obungu-10 mm, nomgodi ongu-6 mm uwudlule. Izinyunithi zimamilimitha.

### Dweba umjikelezo

1. Chofoza **Indiza ephambili** emlandweni ngakwesobunxele. Indiza iyakhanyisa ku-view.
2. Khetha {{ui:Isikethi}} kwibha yamathuluzi, noma cindezela {{key:S}}. I-view iphenduka ibheke ngqo kwindiza, nethuluzi lomugqa liyasebenza.
3. Cindezela {{key:R}} ethulusini le-Irektangili.
4. Hambisa isikhombi siye kuphoyinti lemvelaphi (iphoyinti elibomvu elincane elinesiphambano). Isikwele esincane sikhombisa ukuthi siyabamba. Chofoza.
5. Hambela phezulu nakwesokudla bese uchofoza futhi. Unerektangili. Imigqa yayo iluhlaza: okuluhlaza kusho ukuthi isenganyakaza.

### Nikeza usayizi

1. Cindezela {{key:D}} ethulusini lesilinganiso.
2. Chofoza umugqa ophezulu, bese uchofoza kancane phezu kwawo. Ibhokisi lenombolo livula ubude bamanje.
3. Bhala `60` bese ucindezela {{key:Enter}}. Irektangili iguqukela ku-60 mm ububanzi.
4. Chofoza umugqa wesobunxele, bese uchofoza kancane ngakwesobunxele kwawo. Bhala `40` bese ucindezela {{key:Enter}}.

Ichip ekhoneni elingakwesobunxele esiphezulu kwe-view manje ithi **Ichazwe ngokuphelele**, nemigqa iguquka ibe yinki (emnyama kwitimu elithi Iphepha, ekhanyayo kwitimu elithi Imodeli). Wonke amaphoyinti nosayizi ulungisiwe.

:::tip
Uma uqale irektangili kude nemvelaphi, ichip ithi "Ichazwe ngokungaphelele · amadigri angu-2 enkululeko". Cindezela {{key:S}} ye-Select, chofoza ikhona elilodwa, {{key:Shift}}+chofoza imvelaphi, bese ukhetha {{ui:• Ihlangene}} ephaneli yesokudla.
:::

### Khipha isolidi

1. Khetha {{ui:Phuma}} kwibha yamathuluzi, noma cindezela {{key:Esc}} kuze kuvale isikethi (ngokuvamile kabili).
2. Khetha {{ui:Ukukhipha}}. Kuvela isolidi esingu-10 mm. "Extrude1" yengezwa emlandweni, "Sketch1" ihlehliswe ngaphansi kwayo.
3. Ephaneli yesokudla kubonakala izilungiselelo zokukhipha. Ukushintsha ubukhulu, bhala inombolo entsha ku-**Ukujula (mm)** bese ucindezela {{key:Enter}} noma {{key:Tab}}. Ingxenye iyakhiwa kabusha ngokushesha.

### Engeza umgodi

1. Chofoza ubuso obukhulu obuthe ngaphambili kwepuleti (ukuphela kokukhishwa). Bonke ubuso buyakhanyisa futhi ephaneli yesokudla ithi **Ubuso**.
2. Khetha {{ui:Sketch kulobu buso}} ephaneli yesokudla.
3. Cindezela {{key:P}} ethulusini le-Point bese uchofoza eduze nephakathi kobuso.
4. Khetha {{ui:Phuma}}.
5. Khetha {{ui:Imbobo}}. Umgodi ongu-6 mm uwudlula ipuleti. Shintsha **Ububanzi (mm)** ephaneli yesokudla uma ufuna.

Ibhokisi le-**Ingxenye** ngakwesobunxele esiphansi manje lifunda ivolumu, indawo yobuso, usayizi (60 × 40 × 10 mm) kanye "Imigodi edlule: 1".

### Londoloza

1. Cindezela {{key:Mod+S}} noma khetha {{ui:Londoloza}}.
2. Isiphequluli sakho silanda `Part1.partcraft.json` efolda yakho yokulanda. Ifayela liphethe umlando wonke: vula futhi nge-{{ui:Vula}} ukuze uqhubeke uhlela.

Ukuze uqambe kabusha ingxenye kuqala, chofoza indawo engenalutho ku-view ukuze kungakhethwa lutho, bese uthayipha **Igama** elisha ephaneli yesokudla.

## Lapho okulandelayo

- [Dweba isikethi sakho sokuqala](topic:sketch-basics) kanye [Chaza ngokuphelele isikethi](topic:relations-dimensions) zichaza isikhethi ngokugcwele.
- [Shintsha ingxenye ngomlando wayo](topic:edit-history) ikhombisa indlela yokuhlela into oyakhe.
- [Jikeleza, gqumuza nokhande ngaphakathi](topic:fillet-chamfer-shell) kanye [Yenza umdwebo](topic:drawing-pdf) kuqeda ingxenye. [Okungakakhiwa](topic:not-built-yet) kuhlu okungenziwa yileli nguqulo, njengama-sweep nama-loft.
- [Uvela kolunye umenzi we-parametric](topic:coming-from) uhlu lwezinkambiso ezisebenza ngokuhlukile lapha.
- [Izinkinobho nemouse](topic:keyboard) uhlu olugcwele lwezinqamuleli.
- [Ukusebenzisa lolu siqondiso](common:help).
