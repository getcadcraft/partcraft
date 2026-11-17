---
title: Sweep, loft nohlaka
summary: Hambisa iphrofayli evaliwe endleleni yemigqa yeskethi noma yemiphetho yemodeli, loft phakathi kwezigaba ezisezindizeni ezihlukene, futhi wengeze uhlaka ezinhlangothini; nezinketho, imiphumela eqondile nemilayezo.
keywords: sweep, swept boss, swept cut, ipayipi, indlela, loft, lofted boss, blend sections, ruled, draft, draft angle, taper faces, neutral plane, pull direction, molding
from: 9d637981
---

:::note
**Kule nguqulo** i-sweep ne-loft azikakhiwa: zidinga i-kernel eqondile, engekho kule nguqulo ye-PartCraft. [Okungakakhiwa okwamanje](topic:not-built-yet) kuchaza okufanele wenze esikhundleni salokho; izigaba ze-Sweep ne-Loft zichaza ukuthi zisebenza kanjani nge-kernel eqondile. **Uhlaka luyasebenza** ezindaweni eziyisicaba: i-mesh kernel iyakwakha, nomphumela ofanayo i-kernel eqondile iwunikeza.
:::

Zonke ntathu zisemenywini ethi {{ui:Okwengeziwe}} yeqembu le-Features (bona [I-mesh kernel](topic:solid-kernels)). Ngayinye ingangeza impahla, iyisuse, igcine kuphela ukuhlangana (**Ukuhlangana**) noma yenze **Umzimba omusha** (sweep ne-loft: **Ukusebenza** ephaneli).

## Sweep

I-sweep ihambisa iphrofayli evaliwe endleleni: amapayipi, amabhande, izipringi zocingo, amarayili.

1. Dweba **indlela** ngeskethi eyodwa: imigqa namajika ahlanganiswe ekugcineni (noma sebenzisa imiphetho yemodeli, ngezansi).
2. Dweba **iphrofayli** kwenye iskethi, indiza yayo edlula ekuqaleni kwendlela; isibonelo umjikelezo endizeni ephezulu ekuqaleni kwendlela edwetshwe endizeni yangaphambili.
3. Khetha iskethi yephrofayli bese ukhetha {{ui:Okwengeziwe}}, bese {{ui:Sweep}}. Eyeskethi yakamuva kakhulu enye ibe yindlela.

Ephaneli:

| Isilungiselelo | Lokho esikwenzayo |
|---|---|
| **Indlela** | Thikha iskethi eyenza indlela (iskethi eziningi zihlanganiswa ekugcineni zibe indlela eyodwa ye-3D); **Khetha imiphetho yemodeli** yengeza imiphetho yengxenye |
| **Isiqondiso** | Landela indlela (okuzenzakalelayo), Frenet, Fixed (izigaba zihlala zilingana nephrofayli), Gcina isiqondiso, Ngokuya kwegogo lomqondisi |
| **Isikali sokuphela** | Iphrofayli ikhula noma incipha ngokulingana ibe lobu bukhulu ekugcineni (1 = ngokungashintshi) |

Amakhona abukhali endleleni ahlanganiswa ngendlela ye-mitre. Isangqa esinesidikiba esingu-5 esihamba emgqeni ongu-100 mm singusilinda oyi-2500π mm³ ngokunembile; ngohlangothi lwe-arc yekota enesidikiba esingu-50, kuyi-torus yekota ye-625π² mm³.

## Loft

I-loft ixuba phakathi kwezigaba ezimbili noma ngaphezulu ezisezindizeni ezihlukene.

1. Dweba isigaba ngasinye ngeskethi yaso (ilupu elilodwa elivaliwe ngalinye), ezindizeni ezisisekelo, ezindizeni zereferensi (bona [Izindiza zereferensi, ama-axis namaphoyinti](topic:reference-geometry)) noma ezinhlangothini.
2. Khetha {{ui:Okwengeziwe}}, bese {{ui:Loft}}. Yonke iskethi enelupu elilodwa okungasetshenziswanga iba yisigaba, ngokuya komlando.

Ephaneli kudweshwa izigaba ngokulandelana (**Phezulu** iyazihlela kabusha, **Susa** isusa eyodwa); **Engeza iskethi** yengeza enye iskethi, **Khetha ubuso** yengeza ubuso obuyisicaba bengxenye. **Ubuso oqondile** yenza izinhlangothi eziyisicaba phakathi kwezigaba esikhundleni sokuxuba okubushelelezi. Phakathi kwezikwele ezimbili, zombili ziyi-frustum efanayo (isikwele esingu-40 mm sibe esingu-20 mm ngobude obungu-30 mm: ngokunembile ngu-28000 mm³).

Izigaba ezinenani elihlukile lamacala (isikwele kuya kwetriangle) zihlanganiswa yi-OpenCascade, engagoqa izinhlangothi ezisecaleni; isici siyakuxwayisa. Dweba izigaba ezinenani elifanayo lamacala, uqale emakhoneni afanayo, ukuze uthole umphumela ohlanzekile kakhulu.

### Imigqa yokuqondisa

Imigqa yokuqondisa yizigxobo ezigcina izinhlangothi ze-loft zilandela kusuka esigabeni sokuqala kuya esokugcina, ukuze ufake ukugoba, ukuncipha noma ukukhula okudwetshwe wena.

1. Dweba imigqa emibili noma ngaphezulu: amajika avulekile (imigqa, ama-arc, ama-spline) asuka esigabeni sokuqala aye esokugcina futhi adlule kusigaba ngasinye kanye. Iskethi eyodwa ingaba nemigqa eminingi: lonke uchungechunge olwehlukile kuyo luba ngumgqa wayo. Dweba umgqa ukuze uhlangane ngempela nesigaba ngasinye: sondeza amaphoyinti awo aphelile kumaphoyinti ezigaba.
2. Ngaphansi kwe-**Imigqa yokuqondisa** ephaneli ye-Loft, thikha iziskethi eziwubambayo, noma chofoza {{ui:Khetha imiphetho yemodeli njengemigqa yokuqondisa}} bese uchofoza imiphetho yengxenye (u-{{key:Esc}} uyaqeda).

Ngemigqa yokuqondisa i-loft iba yi-Gordon surface edlula ezigabeni nasemigqeni (bona [Izindawo ezidlula kunethiwekhi yamajika](topic:gordon-surfaces)), ivalwe ngokuqinile ngamagceke womabili ibe yisolidi. Ipanele ithi ilandela kanjani kahle. Yonke isigaba kumele-ke ibe iskethi (iphoyinti noma ubuso akukwazi ukuthatha umgqa), futhi **Ubuso oqondile** ayisebenzi. Umgqa ophuthuka isigaba ngaphezu kuka-0.01 mm uyenqatshwa, kuboniswe igebe.

Kuhlolwe: amasangqa amabili (20 mm no-10 mm ububanzi phakathi kuka-40 mm) nemigqa eqondile emine inikeza umthamo we-frustum yekhoni ngaphakathi kuka-0.000002 %; ama-arc aphuma ngo-5 mm anikeza ibhegu elilandela yonke imigqa ngaphakathi kuka-0.00001 mm.

## Uhlaka

Uhlaka luthambisa izinhlangothi ukuze ingxenye iphume esikhunjeni.

1. Khetha {{ui:Okwengeziwe}}, bese {{ui:Uhlaka}} (noma bamba {{key:Shift}} uchofoze izinhlangothi kuqala). Uma ungakakhethi lutho usemodi yokukhetha: chofoza ngayinye ubuso ofuna ukuthambisa, bese {{ui:Kuqediwe}}.
2. Setha **Ikona (°)**, i-**Indiza engathathi hlangothi** (lapho izinhlangothi zigcina usayizi wazo) ne-**Isiqondiso sokudonsa** (ukujika kwendiza engathathi hlangothi ngokuzenzakalelayo).

Ikona elihle lithambisa ubuso ngaphakathi endleleni yokudonsa futhi lisuse impahla; elingalungile liyengeza. Indiza engathathi hlangothi iqala njengendiza ethi Top. Kule nguqulo izinhlangothi eziyisicaba kuphela zingathanjiswa: isilinda, i-cone noma ubuso be-freeform bathi "Uhlaka: kule nguqulo izinhlangothi eziyisicaba kuphela (i-mesh kernel iyakwakha)." Izinhlangothi ezine zebhulokhi ka-100 × 100 × 50 zithanjiswe nge-5° ngokuzungeza phansi kwayo ziba yi-frustum yangempela h/3·(a² + b² + ab), nge-b = a − 2h·tan 5°.

## Imilayezo

| Umlayezo | Yenzani |
|---|---|
| "Indiza yephrofayli kumele idlule kwesinye seziphetho zendlela …" | Hambisa iskethi yephrofayli ekuqaleni (noma ekugcineni) kwendlela |
| "Indlela inesikhala: amajika ayo awahlanganisi ekugcineni …" | Hlanganisa amajika endlela; ezikethini ezihlukene iziphetho kumele zihlangane ngokunembile |
| "Isigaba se-loft kumele sibe nelupu elilodwa elivaliwe" | Hlukanisa iskethi, noma susa ilupu elengeziwe |
| "… akukwazi ukuthanjiswa ngale ndiza engathathi hlangothi …" | Ubuso bulingana nendiza engathathi hlangothi noma abuhlangani nayo |
| "Uhlaka: kule nguqulo izinhlangothi eziyisicaba kuphela (i-mesh kernel iyakwakha)." | Ubuso okhethiwe bugoqekile. Susa, uthambise izinhlangothi eziyisicaba kuphela |

:::note
Akikakhiwa okwamanje: ama-sweep ajikayo, ama-sweep ezindonga ezincane nezindawo, imigqa yokuqondisa ye-loft nokuthinta ekugcineni, uhlaka ezinhlangothini ezisikiwe, ema-cone nasezindaweni ze-freeform.
:::
