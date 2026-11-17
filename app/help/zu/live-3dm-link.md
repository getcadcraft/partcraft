---
title: Gcina imodeli ye-.3dm iphila
summary: Shintsha imodeli ohlelweni olwayenza futhi ubone umzimba we-PartCraft ulandela, kusuka ku-Rhino 8 noma kusichazo se-Grasshopper, namasici akho akhiwa kabusha kumumo omusha.
keywords: rhino, grasshopper, live link, ukuxhuma okuphilayo, 3dm, nurbs, parametric, link, sync, script, push, umzimba ongenisiwe
from: cf4dc9b2
---

Qhubeka wenza imodeli lapho uyimodela khona, uyihlole, uyiqinisekise futhi uyibhale lapha. Ushintsho ngalunye ohlelweni olunye lufaka esikhundleni somzimba ongenisiwe ku-PartCraft, nezici ezilandelayo zakhiwe kabusha kumumo omusha.

:::note
Ukuxhuma kudinga i-**CadCraft Studio** kukhompyutha efanayo. Ithebhu yesiphequluli ayikwazi ukuxhuma. Akukho okuhamba nge-inthanethi: i-script ikhuluma ne-Studio ku-address yale kompyutha, ngethokheni.
:::

:::warning
Lokhu kuxhumana kuhlolwe ngomlobi wamafayela wale script nendawo yohlelo olunye, akukahlolwa ngaphakathi kwe-Rhino noma i-Grasshopper. Uma kukhona okungahambi lapho, sitshele ukuthi kuthini.
:::

## Setha

1. Ku-Studio, vula i-PartCraft. Ku-{{ui:Izilungiselelo}} › {{ui:PartCraft}} › {{ui:Abasizi}}, thika **Vumela abasizi be-AI kanye nama-script basebenzise i-PartCraft**, bese **Hlela**.
2. Ku-Studio, khetha {{ui:Xhuma umsizi}}. Ibonisa i-address nethokheni ozoyinamathisela ngezansi.
3. Landa i-script: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Kusuka ku-Rhino

1. Qalisa `cadcraft_link.py` kumhleli we-script we-Rhino (i-Python 3 ku-Rhino 8).
2. Okokuqala, namathisela i-address nethokheni. Zigcinwa ku-`.cadcraft-link.json` kwifolda yakho yasekhaya, hhayi emodelini. I-Studio yenza ithokheni entsha ngesikhathi isiqalisa, ngakho i-script iyabuza futhi lapho.

Qalisa i-script futhi ukuze uyeke.

## Kusuka ku-Grasshopper

Qalisa i-script kanye ku-Rhino kuqala, ukuze i-address nethokheni kugcinwe.

1. Engeza i-Script component (Python 3) bese unamathisela konke `cadcraft_link.py` kuyo.
2. Ayinike lezi zokufaka: `G` (ijiyometri, nokufinyelela kuhlu), `N` (igama, ngokuzikhethela), `On` (iswishi ye-boolean), kanye ne-`Target` (ngokuzikhethela: `model` noma `part`, uma kokubili kuvuliwe).
3. Setha `On` ibe yiqiniso.

Ukuxazulula ngalunye kuthumela `G` bese kubhalwa phezu kwalokho okuthunyelwe ngaphambili.

## Lapha kusebenza kanjani

- **Umzimba oyodwa.** Konke okubonakalayo emodelini kuba yisici esisodwa esingeniswe, njengokuvula [ifayela le-.3dm](topic:open-3dm-files).
- **Kumele kuvale.** I-PartCraft igcwalisa izimbobo ezincane nezimbobo ezitshe, futhi uhlelo olunye luyatshelwa ukuthi zingaki. Uma imodeli isengavaleki, i-PartCraft igcina umzimba eyawunawo futhi ibha yesimo iyatshela. Ushintsho olulandelayo oluvalayo luyawubuyekeza.
- **Qeda okwenzayo.** Ku-sketch noma kudrowing, izibuyekezo ziyenqatshwa futhi zizama futhi; ziyafika uma usubuyele emodelini.
- **Hlehlisa.** Izibuyekezo ezingaphakathi kwamasekhondi amabili ngaphansi komunye zabelana ngesinyathelo esisodwa sokuhlehlisa.
- **Londoloza.** Ifayela lengxenye ligcina ukuxhuma. Qalisa i-script futhi uma uvula kabusha, futhi isici esifanayo siyabuyekezwa.

**Indlela eyodwa kuphela.** Ushintsho lapha ayibuyi ohlelweni olunye.

## Uma kukhona okuhamba kabi

- **"Akukho ModelCraft noma PartCraft window evumela lokhu":** yenza isinyathelo 1 sokusetha.
- **"Studio yenqaba ithokheni":** i-Studio iqalisiwe kabusha. Kopisha ithokheni entsha bese uqalisa i-script futhi. Ye-Grasshopper, qalisa kuqala ku-Rhino.
- **"Ayikwazi ukufinyelela i-CadCraft Studio":** i-Studio ayisebenzi, noma i-address ishintshile.
