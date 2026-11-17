---
title: Jikeleza ingxenye ejikelezayo
summary: Dweba uhhafu wephrofayili eduze komugqa wesisekelo, uyijikeleze ibe yingxenye egudlile, khetha i-axis nengeengeli, bese usebenzisa ukusikwa okujikelezayo ngemijikelezo.
keywords: jikeleza, impahla ejikelezayo, ukusikwa okujikelezayo, ukujikeleza, ingxenye ejikelezayo, lathe, shaft, axis, umugqa wesisekelo, umjikelezo, iengeli, rev cut
from: 593b6929
---

{{ui:Jikeleza}} ijikelezisa iphrofayili ngokuzungeza i-axis, njengengxenye eyenziwe ku-lathe: amashafu, amapulley, amafulenji, izibambo. Ukusikwa okujikelezayo (ku-menyu ye-{{ui:Okwengeziwe}} yeqembu le-Features) kujikelezisa iphrofayili ukuze kususwe impahla, kwenze imigqa nezikhala.

## Jikeleza i-shaft enezinyathelo

1. Dweba ku-**Front plane**.
2. Cindezela {{key:N}} ukuze uthole {{ui:Umugqa wesisekelo}}. Qala ku-origin bese uchofoza iphoyinti eliqondile ngakwesokudla, isibonelo ama-100 mm ngaphesheya. Lena i-axis. Iphukile: umugqa wokwakha awuyona ingxenye yephrofayili.
3. Cindezela {{key:L}} ukuze uthole Umugqa. Dweba **uhhafu** wephrofayili phezu komugqa wesisekelo njengelupu elilodwa elivaliwe: qala emugqeni wesisekelo, phakama, yenza isinyathelo, bese wehla ubuyele emugqeni wesisekelo, bese uhamba kuwo uye ekuqaleni. Imiphetho yayo kumele ihlangane: lupu kumele livaleke.
4. Bekela imisakazo (amakhaza aphezu komugqa wesisekelo) nobude. Ukuphakama okungu-10 ngaphezu komugqa wesisekelo kwenza idayamitha engu-20.
5. Khetha {{ui:Phuma}}.
6. Khetha {{ui:Jikeleza}}. I-shaft iyavela, ijikeleza ngokuphelele.

Iphrofayili kumele ihlale ohlangothini olulodwa lwe-axis. Uma idlula: "Iphrofayili idlula i-axis. Yigcine ohlangothini olulodwa womugqa wesisekelo." Umphetho wephrofayili ungalala ku-axis.

## Izilungiselelo

| Isilungiselelo | Okwenzayo | Okuzenzakalelayo |
|---|---|---|
| **Umsebenzi** | Boss (engeza impahla), Cut (susa impahla), Intersect (gcina ukuhlangana) noma umzimba omusha (New body) | Boss for {{ui:Jikeleza}}, Cut for {{ui:Okwengeziwe}} › {{ui:Ukusikwa okujikelezayo}} |
| **I-engeli (°)** | Ukujikeleza kuya kangakanani, kusuka kancane ngaphezu kwe-0 kuya ku-360 | 360 |
| **I-axis** | Umugqa wokuqala wesisekelo, noma noma imuphi umugqa noma umugqa wesisekelo esikethini, ohlwini njengo "Centerline 1 (l1)" noma "Line 3 (l3)" | Umugqa wokuqala wesisekelo |

Iengeli engaphelele yenza i-wedge, ijikelezwe kusuka endizeni yesikethi ngakolunye uhlangothi.

Uma isikethi singenamugqa wesisekelo futhi ushiye **I-axis** ku-Umugqa wokuqala wesisekelo: "Dweba umugqa wesisekelo (umugqa wokwakha) esikethini ukuze ujikelezele kuwo." Ungakhetha futhi umugqa oqinile wephrofayili njenge-axis.

## Sika igrumbu

1. Uma i-shaft isiyakhiwe, vula isikethi esisha ku-**Front plane** (indiza efanayo nesikethi se-shaft).
2. Dweba umugqa wesisekelo ku-axis efanayo: qala ku-origin bese uwugcina ulingene ukuze uthole H, noma uwuthayipha nge-**Add by coordinates** (isibonelo ukusuka ku `0, 0` kuya ku `100, 0`). Isikethi esisha asikwazi ukuhlanganisa nemigqa yesikethi esinye.
3. Dweba ihlombe elincane elivaliwe elihlanganisa umphetho we-shaft lapho kufanele khona igrumbu.
4. Khetha {{ui:Phuma}}, bese {{ui:Okwengeziwe}} › {{ui:Ukusikwa okujikelezayo}}.

## Ubuso obujikelezayo ku-assembly

Ukujikeleza kunayo i-axis ezinye izici nama-assembly angayisebenzisa:

- inkambu **ngokujikeleza** isebenzisa i-axis yokujikeleza yokugcina ngokuzenzakalelayo (bheka [Izici zokuphinda nezibuko](topic:patterns-mirror));
- ku-assembly, ukuxhuma phakathi kobuso obenziwe ngokujikeleza kuqala njenge-**revolute** joint, futhi **Centre on** inikeza "Axis of Revolve1" (bheka [Yakha i-assembly](topic:build-assembly)).

## Amajika angempela namafasethi

I-PartCraft yakha ukujikeleza nge-mesh kernel (i-chip ye-status bar ithi "Mesh kernel"): izimo ezijikelezayo ziwamafasethi athambile, angu-64 ngokujikeleza ngokuzenzakalelayo, kanti amavolumu ancane kancane kunenani langempela (cishe ngo-0.16 % ku-64). Ukubukwa, ukuthunyelwa kwe-STL, 3MF ne-STEP kwakhiwe ngalawo mafasethi: setha **Amajika** (chofoza endaweni engenalutho, bese uya ohlangothini lwesokudla) ibe Fine (128) noma Very fine (256) ukuze ibe bushelelezi. Amasilinda, amakhoni namatorasi angempela adinga i-kernel echanekile: akukakwakhiwa kule nguqulo. Bheka [I-mesh kernel](topic:solid-kernels).
