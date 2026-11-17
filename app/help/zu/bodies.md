---
title: Hlanganisa, hambisa neshintsha usayizi wemizimba; imiumo yendlela
summary: Yenza imizimba ehlukene, bese uyihlanganisa, uyisike noma uyihlanganise ngemva kwalokho, uyihambise, uyijikise, uyilinganise noma uyikopishe, uyishintshe usayizi ngokulinganayo noma nge-X, Y no-Z, bese ukopisha izakhi noma imizimba ngomugqa wejika.
keywords: umzimba, imizimba, imizimba eminingi, umzimba omusha, hlanganisa, boolean, xhuma, sika, hlangana, susa, union, gcina amathuluzi, hambisa umzimba, kopisha umzimba, jikisa umzimba, linganisa, shintsha usayizi, stretch, affine, umumo wendlela, umumo ojikelezayo, uhlelo oluqondiswa ijika
from: 6b1ea820
---

:::note
**Akakakhiwa kule nguqulo.** Ukusebenza nemizimba eminingi kudinga i-exact geometry kernel, engekho kule nguqulo ye-PartCraft: yakha yonke ingxenye nge-mesh kernel. [Okungakakhiwa](topic:not-built-yet) kuchaza okufanele wenze esikhundleni salokho. Esinye salelikhasi sichaza kanjalo njengoba lisebenza ne-exact kernel.
:::

Ingxenye ingaba nezinto eziqinile ezingaphezu kwesisodwa. Isiqinile ngasinye esihlukile yi-**umzimba**. Izakhi eziningi zengeza noma zisike kuyo yonke imizimba ezithinta; amathuluzi aleli khasi asebenza emizimbeni ephelele oyikhethile. Atholakala emenyu ye-{{ui:Okwengeziwe}} yeqembu lezakhi: {{ui:Hlanganisa}}, {{ui:Hambisa umzimba}}, {{ui:Shintsha usayizi womzimba}} kanye {{ui:Umumo wendlela}}. Konke lokhu kudinga i-exact kernel (OpenCascade).

## Yenza umzimba ohlukile

Setha i-**Ukusebenza** ye-extrude noma ye-revolve ibe **Umzimba omusha** kuphaneli yayo yesokudla (ama-sweep nama-loft nawo anayo). Isiqinile esisha sihlala sihlukile nalapho sigqumana khona nezinye. **Hlangana** igcina kuphela ukugqumana kwesimo esisha nento esikhona.

Imizimba iqanjwa ngesakhi esayiqala: "Extrude2". Ikhophi iqanjwa ngomsuka wayo kanye nesakhi esayikopisha: "Extrude2, copy 1 of Move1". Amagama ahlala efanayo uma ushintsha usayizi ongaphambili, ngakho izakhi ezisebenzisa umzimba ziqhubeka ziwuthola. Uma kunemizimba emibili noma ngaphezulu, ipheneli lengxenye (chofoza isikhala esingenalutho) liwudwebela ngamavolumu awo.

## Qamba kabusha noma fihla umzimba

Chofoza isikhala esingenalutho embonweni ukuze ubone ipheneli lengxenye. Uhlu lomzimba (olubonakala uma ingxenye inemizimba emibili noma ngaphezulu) lunebhokisi lamagama kanye nenkinobho ye-{{ui:Fihla}} emugqeni ngamunye.

- **Qamba kabusha:** bhala igama elisha ebhokisini bese ucindezela {{key:Enter}} noma uchofoze kwenye indawo. Zonke iphaneli bese ziyisebenzisa: Hlanganisa, Hambisa umzimba, imiumo. Sula ibhokisi ukuze ubuyele egameni lesakhi esenze umzimba.
- **Fihla:** chofoza {{ui:Fihla}} emugqeni wawo. Umzimba uphuma embonweni, nokuchofoza kudlula kuwo, ngakho ungakhetha izinhlangothi ezisemuva kwawo. {{ui:Bonisa}} uwubuyisela; {{ui:Bonisa konke}} ubuyisela yonke imizimba efihliwe.

Ukufihla kushintsha umbono kuphela. Umzimba ofihliwe usakhiwa, ubalwa kuvolumu nasemalinganisweni, futhi uyalondolozwa ekuthumeleni kwe-STL, 3MF ne-STEP. Amagama nemizimba efihliwe alondolozwa efayeleni lengxenye, futhi noshintsho ngalunye lungesinyathelo esisodwa se-{{ui:Hlehlisa}}.

## Hlanganisa imizimba

1. {{key:Shift}}+chofoza ubuso bomzimba **wenjongo**, bese ubuso bomzimba ngamunye **wethuluzi**.
2. Khetha {{ui:Okwengeziwe}}, bese {{ui:Hlanganisa}}.
3. Kuphaneli yesokudla khetha **Ukusebenza**:

| Ukusebenza | Umphumela |
|---|---|
| **Xhuma** | Umzimba wenjongo kanye namathuluzi kuba umzimba oyodwa |
| **Sika** | Amathuluzi asuswa emzimbeni wenjongo |
| **Hlangana** | Kugcinwa kuphela okwabelwana ngakho umzimba wenjongo namathuluzi onke |

**Umzimba wenjongo** ye umzimba ogcina igama lawo. Thika noma susa uthiki **Imizimba yamathuluzi**, noma sebenzisa **Khetha embonweni** bese uchofoza ubuso bawo. **Gcina imizimba yamathuluzi** ishiya namathuluzi endaweni yawo (kuyasiza ngesikhunta nomgodi washo). Uma umzimba wethuluzi usuke usetshenziswe yi-Hlanganisa yangaphambili, ipheneli liyasho lokho kunokukhetha omunye umzimba.

## Hambisa noma kopisha umzimba

1. Khetha {{ui:Okwengeziwe}}, bese {{ui:Hambisa umzimba}}. Umzimba omusha kakhulu uthikiwe; thika owodwa owufuna ukuwuhambisa.
2. Khetha uhlobo **Hambisa**:

| Hambisa | Okusethwayo |
|---|---|
| Hambisa | **ΔX**, **ΔY**, **ΔZ** ku-millimeter |
| Iphoyinti kuya kuphoyinti | **Kusukela** kanye **Kuya**: chofoza eduze kwesiphetho sohlangothi, isakhi sephoyinti, noma indawo ebusweni |
| Jikisa ngokuzungeza i-axis | **Axis** (X, Y, Z, isakhi se-axis, noma **Khetha**: isiphetho esiqondile, indilinga noma isilinda) kanye **Ikona (°)** |
| Linganisa ubuso nobuso noma indiza | **Ubuso okuzohanjiswa** (ubuso obuthe bomzimba), **Phezu** (ubuso obuthe noma indiza) |

Ukulinganisa kujikisa umzimba ukuze ubuso bawo bulale phezu kobunye ubuso, ubuso nobuso, bese ubuhambisela kuphela ngokuqondile kwalobo buso. **Indlela efanayo** iyijikisa ngendlela ephambene. **Kopisha** igcina okokuqala bese yengeza ikhophi ehanjisiwe njengomzimba omusha.

## Shintsha usayizi womzimba

1. Khetha {{ui:Okwengeziwe}}, bese {{ui:Shintsha usayizi womzimba}}, bese uthika imizimba.
2. Bhala **Isikali**, noma susa uthiki **Okulinganayo** bese ubhala **Isikali X**, **Isikali Y** kanye **Isikali Z** (ngokuya ku-axis yomhlaba).
3. **Mayelana** iyiphoyinti elihlala lingashintshi: isikhungo sebhokisi yemizimba, noma iphoyinti olikhethayo.

Ukushintsha usayizi okulinganayo kuyinembile. Ukushintsha usayizi okungalingani kuguqula izindilinga zibe ama-ellipse: isilinda siba yisilinda se-elliptic, engakabambeki ngubuso bokuhlaziya, ngakho ubuso obugobile buba ubuso be-B-spline obuhlala phakathi kuka-0.0000004 mm kokwakheka okunembile; ubuso obuthe namaphethelo aqondile ahlala enembile. Ipheneli liyatshela ukuthi yenzekile yini. Izinkomba zokushintsha usayizi kumele zibe ngaphezu kuka-zero (esikhundleni salokho sebenzisa {{ui:Isibuko}}).

## Kopisha ngomugqa

1. Khetha isakhi okufanele sikopishwe emlandweni, noma ungakhethi lutho ukukopisha umzimba omusha kakhulu.
2. Khetha {{ui:Okwengeziwe}}, bese {{ui:Umumo wendlela}}. Isikethi esisha kakhulu esingasetshenziswa siyathathwa njengomugqa.
3. Kuphaneli yesokudla setha:

| Okusethwayo | Okwenzayo |
|---|---|
| **Kopisha** | Imizimba (ikhophi ngayinye ibe umzimba omusha) noma Izakhi (ixhunyiwe noma isikwe njengokwasekuqaleni) |
| **Umugqa** | Thika izikethi, noma **Khetha amaphethelo emodeli**; izingxenye kumele zixhume ekugcineni ngakunye |
| **Inani** | Inani eliphelele, kubalwa nokokuqala |
| **Ukuhlukaniswa** | Okulinganayo (kusatshalaliswe kuze kube sekugcineni komugqa ovulekile, noma kuzungeze konke komugqa ovaliwe) noma ibanga elisethiwe |
| **Ukuqondiswa** | Landela umugqa (ikhophi ngayinye ijikeka nawo) noma Okungashintshi (amakhophi ahlala ahambisana) |
| **Guqula indlela** | Hamba ngendlela ephambene emugqeni |

Amakhophi aqala lapho umugqa udlula khona eduze kakhulu nomsuka, futhi ahlukaniswa ngobude ngokuya ejikeni.

Imiumo {{ui:Olayini}} kanye {{ui:Ngokujikeleza}} nayo ingakopisha imizimba: thika **Kopisha imizimba** kuphaneli yayo bese ukhetha imizimba; ikhophi ngayinye ibe umzimba omusha.

## Imikhawulo

- Imizimba idinga i-exact kernel; i-mesh kernel igcina isiqinile esisodwa futhi iyakusho lokho.
- Ukushintsha usayizi okungalingani kwenza ubuso obugobile bube yimibono esondele ye-B-spline (bona ngenhla), kungabi izilinda noma izikhala ezinembile; ubuso obuhlukaniswe akukakwazi ukushintshwa usayizi ngale ndlela.
- Ukulandela umugqa ku-ijika le-3D elijikayo kuthwala ikhophi ngaphandle kokuyiphendula; emigqeni ethe xaxa ukujika kunembile.
- I-Hlanganisa isebenza kuzinto eziqinile kuphela. Imizimba yobuso ixhunywa nge-{{ui:Ukuthunga}}.

Bona futhi [Izindiza zesethenjwa, ama-axis namaphoyinti](topic:reference-geometry) ngamaphoyinti nezindiza "phakathi kwezinto", kanye [Izakhi zomumo nesibuko](topic:patterns-mirror).
