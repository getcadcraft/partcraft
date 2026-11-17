---
title: Bhoboza izimbobo nezimbobo zokungena ezindaweni zamaphoyinti esketshi
summary: Beka amaphoyinti esketshini ebusweni, yenza izimbobo ezilula, ezingenisiwe, ezigxunyiwe noma ezinamasondo (ISO metric), bese usetha ububanzi nokujula, bese ulungisa izimbobo ezibhoboza ngendlela engalungile.
keywords: imbobo, umsizi wezimbobo, bhoboza, imodeli ye-thread, ukuphrinta ngo-3D, counterbore, cbore, countersink, csink, imbobo enamasondo, thread, tap drill, metric thread, M6, through all, blind hole, bolt hole, amaphoyinti, izindawo zezimbobo
from: 8e1eef83
---

{{ui:Hole}} ibhoboza imbobo eyodwa kumaphoyinti ngamanye esketshi. Iphoyinti eliphuthumayo yilona elenziwe ngethuluzi le-Point, hhayi isiphetho somugqa noma isikhungo sejika.

## Bhoboza izimbobo ebusweni

1. Chofoza ubuso obuqondile okufanele kubhobozwe kuwo, bese ukhetha {{ui:Sketch on this face}}.
2. Cindezela {{key:P}} bese uchofoza lapho kufanele kube khona imbobo ngayinye. Linganisa amaphoyinti kusuka emiphetheni noma kumsuka uma indawo yawo ibalulekile (bheka [Phelela isketshi](topic:relations-dimensions)).
3. Khetha {{ui:Exit}}.
4. Khetha {{ui:Hole}}.

Izimbobo zidabula ingxenye, zibe ngu-6 mm ububanzi. Iphaneli ekudla ibonisa **Holes**: zingaki ezenziwe, "one per sketch point".

**Imbobo eyodwa, ngokushesha:** chofoza ubuso obuqondile lapho imbobo kufanele ibe khona bese ukhetha {{ui:Hole here}} ephaneli ekudla. I-PartCraft yengeza isketshi ebusweni nephoyinti elilodwa lapho uchofoze khona, nembobo edabula ingxenye, konke ngesinyathelo esisodwa. Thayipha inombolo ngokushesha bese ucindezela {{key:Enter}} ukuze uyinike ububanzi bayo. Ukuze uyibeke ngokunembile, vula isketshi entsha bese ulinganisa iphoyinti.

**Isketshi esetshenziswayo:** isketshi oyivale manje noma eyikhethayo; uma ingekho, isketshi esekugcineni engakasetshenziswa enamaphoyinti ahlukile. Uma kungekho lutho: "Make a sketch with points where the holes go first (Sketch on a face, then Point)."

## Izilungiselelo

| Ukusethwa | Okukhethwayo | Okuzenzakalelayo |
|---|---|---|
| **Type** | Simple, Counterbore, Countersink, Tapped (ISO metric) | Simple |
| **Diameter (mm)** | Ububanzi bembobo | 6 |
| **Through all** | Uma ichekiwe: iphela engxenyeni. Ukuze ukhiphe, ayichofoze ukuze ibe yimbobo evaliwe | Ichekiwe |
| **Depth (mm)** | Ikhombisa uma i-Through all ingachekiwe | 10 |
| **Counterbore ⌀** | Ikhombisa uma kuyi-Counterbore: ububanzi bokuhlanzwa okubanzi | 11 |
| **Counterbore depth** | Ikhombisa uma kuyi-Counterbore | 6 |
| **Reverse direction** | Ibhoboza ngakolunye uhlangothi lwendiza yesketshi | Off |

Izimbobo zibhoboza impahla, zimi ngokuqondile ndiza yesketshi. Ujula lwembobo evaliwe lulinganiswa kusuka endizeni yesketshi; isisekelo sayo siyaqonda.

## Imbobo ye-counterbore yesikulufo

1. Yenza izimbobo njengasenhla.
2. Setha **Type** ibe **Counterbore**.
3. Setha **Diameter (mm)** ibe `6.6` (indawo yokukhomba isikulufo se-M6), **Counterbore ⌀** ibe `11` nokujula kwe-**Counterbore depth** kube `6.5`.

I-counterbore kumele ibe nobubanzi obudlule imbobo ("The counterbore must be wider than the hole.") futhi, kwimbobo evaliwe, ibe mncane kunokujula kwayo ("The counterbore must be shallower than the hole.").

## Isongo lezikulufo

Ezimbobeni ezihlakaniphile ezizungeze isikhungo, yenza **imbobo eyodwa** bese uyenza ibe yiphethini: khetha isici se-Hole, bese ukhetha {{ui:Circular}} (bheka [Izici zephethini nokuhlanganisa](topic:patterns-mirror)). Iphethini ilandela uma ushintsha usayizi wembobo.

## Uma izimbobo zibhoboza ngendlela engalungile

- "There is nothing to drill on that side of the sketch. Try reversing the direction." Isketshi isendaweni ekude yempahla. Chekela **Reverse direction**.
- "Put sketch points where the holes go (Point tool), then make the hole." Isketshi alinawo amaphoyinti ahlukile. Iziphetho zemigqa nezikhungo zamajika aziboni.
- "There is nothing to drill yet." Imbobo idinga isisekelo. Yenza i-boss kuqala.

## Izimbobo ezisemihlanganisweni

Imbobo ngayinye inendikaxi. Kumhlanganisweni, **Centre on** ingabeka ukuhlanganiswa endikazini yembobo, ebhalwe njengo "Hole1, hole 2", ukuze ipini noma isikulufo lihlelelane nayo. Bheka [Akha umhlanganiso](topic:build-assembly).

## Izimbobo ezigxunyiwe

Setha **Type** ibe **Countersink**, bese **Countersink ⌀** (ebusweni) kanye **Countersink angle**: 90° (izikulufo ze-ISO metric ezinekhanda elibukhasi) noma 82° (izikulufo ze-inch). Thatha ububanzi besikhala sokugxuma kudatha yomkhiqizi wesikulufo (kancane ngaphezu kobubanzi bekhanda lesikulufo). Ubuso besikhala egxunyiwe bubizwa ngokuthi "countersink" kumapheyinti.

## Izimbobo ezinamasondo

Setha **Type** ibe **Tapped (ISO metric)** bese ukhetha **Thread**, u-M2 kuya ku-M24 coarse. Imbobo ibhobozwa ngosayizi wokubhoboza ithephu kusuka etafuleni elingezansi (ububanzi obubizwayo nge-pitch, kuya kuchungechunge lokubhoboza, njengoba i-ISO 2306 ikhombisa i-6H thread); ibhokisi le-**Diameter (mm)** alisetshenziswa. Uma imbobo evaliwe, **Thread depth (mm)** isetha ukuthi ijule kangakanani.

| Ithreshi | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pitch | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Tap drill ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Ithreshi liyi-**cosmetic** ekuqaleni: imodeli inembobo ebhobozwe, umbono udweba ububanzi obukhulu bethreshi njengamasekeli adashiwe, nephepha lokudweba liphatha inothi njengento efana "4× M8×1.25 - 6H, thread through". I-STEP ihlinzeka imbobo ebhobozwe kuphela.

Chekela **Modelled** ukuze usike ithreshi langempela ye-helical embobeni, ukuphrinta nge-3D. **Clearance (mm)** iyenza ibe mikhulu ngakho konke, ukuze isikulufo esiphrintiwe sigqame: 0.1 kuya ku-0.2 mm kulungele abaphrinta abaningi. Isikhalazo bese siphela ngokuthi "(modelled)". Bheka [Amathreshi ezinhlanganweni namabhodi, adwetshiwe noma amodeliwe](topic:threads), okubuye ufake amathreshi ezinhlangeni.

:::note
Izimbobo ezibhobozwa kabili, amathreshi e-inch namathreshi epayipi akukakwakhiwa.
:::
