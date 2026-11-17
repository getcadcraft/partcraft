---
title: Chimba matundu na counterbore kwenye pointi za mchoro
summary: Weka nukta kwenye mchoro juu ya uso, tengeneza matundu rahisi, ya counterbore, ya countersink au yenye nyuzi (ISO metric) kwenye kila nukta, weka kipenyo na kina, na urekebishe matundu yanayochimba upande usio sahihi.
keywords: hole, hole wizard, drill, modelled thread, uchapishaji wa 3D, counterbore, cbore, countersink, csink, tundu lenye nyuzi, thread, tap drill, metric thread, M6, through all, blind hole, bolt hole, nukta, vituo vya matundu
from: 8e1eef83
---

{{ui:Hole}} huchimba tundu moja kwenye kila nukta huru ya mchoro. Nukta huru ni ile iliyotengenezwa kwa zana ya Nukta, si ncha ya mstari wala katikati ya duara.

## Chimba matundu kwenye uso

1. Bonyeza uso tambarare wa kuchimbia, kisha chagua {{ui:Sketch on this face}}.
2. Bonyeza {{key:P}} kisha ubofye pale kila tundu linapokwenda. Pima nukta kutoka kwenye kingo au asili ikiwa nafasi yake ni muhimu (angalia [Fafanua mchoro kikamilifu](topic:relations-dimensions)).
3. Chagua {{ui:Exit}}.
4. Chagua {{ui:Hole}}.

Matundu yanapita kwenye sehemu, yenye kipenyo cha 6 mm. Paneli ya kulia inaonyesha **Holes**: ni mangapi yaliyotengenezwa, "one per sketch point".

**Tundu moja, haraka:** bonyeza uso tambarare pale tundu linapokwenda kisha chagua {{ui:Hole here}} kwenye paneli ya kulia. PartCraft huongeza mchoro juu ya uso wenye nukta moja pale ulipobofya, na Tundu linalopita kwenye sehemu, kwa hatua moja. Andika nambari mara moja kisha bonyeza {{key:Enter}} kwa kipenyo chake. Ili kuliweka kwa usahihi, fungua mchoro mpya kisha pima nukta.

**Mchoro unaotumika:** mchoro uliyoufunga hivi karibuni au uliochaguliwa; vinginevyo mchoro wa hivi karibuni usiotumika wenye nukta huru. Kama hakuna: "Make a sketch with points where the holes go first (Sketch on a face, then Point)."

## Mipangilio

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| **Type** | Simple, Counterbore, Countersink, Tapped (ISO metric) | Simple |
| **Diameter (mm)** | Kipenyo cha tundu | 6 |
| **Through all** | Imewekwa alama: kupitia sehemu nzima. Iondoe kwa tundu la kipofu | Imewekwa alama |
| **Depth (mm)** | Inaonekana Through all ikiwa haijawekwa alama | 10 |
| **Counterbore ⌀** | Inaonekana kwa Counterbore: kipenyo cha sehemu pana ya kuingilia | 11 |
| **Counterbore depth** | Inaonekana kwa Counterbore | 6 |
| **Reverse direction** | Huchimba hadi upande mwingine wa ndege ya mchoro | Imezimwa |

Matundu huchimba kwenye nyenzo, mraba kwenye ndege ya mchoro. Kina cha tundu la kipofu hupimwa kutoka kwenye ndege ya mchoro; sehemu yake ya chini ni tambarare.

## Tundu la bolti lenye counterbore

1. Tengeneza matundu kama hapo juu.
2. Weka **Type** kuwa **Counterbore**.
3. Weka **Diameter (mm)** kuwa `6.6` (nafasi ya bolti ya M6), **Counterbore ⌀** kuwa `11` na **Counterbore depth** kuwa `6.5`.

Counterbore lazima iwe pana kuliko tundu ("The counterbore must be wider than the hole.") na, kwa tundu la kipofu, iwe ya kina kidogo kuliko tundu ("The counterbore must be shallower than the hole.").

## Mduara wa bolti

Kwa matundu yaliyopangwa sawasawa kuzunguka kituo, tengeneza **moja** kisha uyapange: chagua kipengele cha Hole, kisha chagua {{ui:Circular}} (angalia [Pattern and mirror features](topic:patterns-mirror)). Mfumo unafuata unapobadilisha ukubwa wa tundu.

## Matundu yanapoenda upande usio sahihi

- "There is nothing to drill on that side of the sketch. Try reversing the direction." Mchoro uko upande wa mbali wa nyenzo. Weka alama kwenye **Reverse direction**.
- "Put sketch points where the holes go (Point tool), then make the hole." Mchoro hauna nukta huru. Ncha za mistari na vituo vya duara havihesabiwi.
- "There is nothing to drill yet." Tundu linahitaji kigumu. Tengeneza boss kwanza.

## Matundu kwenye mikusanyiko

Kila tundu lina mhimili. Kwenye mkusanyiko, **Centre on** inaweza kuweka kiungio kwenye mhimili wa tundu, kinachoorodheshwa kama "Hole1, hole 2", ili sehemu ya pini au bolti ilingane nalo. Angalia [Build an assembly](topic:build-assembly).

## Matundu yaliyozama (countersunk)

Weka **Type** kuwa **Countersink**, kisha **Countersink ⌀** (kwenye uso) na **Countersink angle**: 90° (skrubu tambarare za ISO metric) au 82° (skrubu za inchi). Chukua kipenyo cha countersink kutoka kwenye data ya mtengenezaji wa skrubu (kidogo zaidi ya kipenyo cha kichwa cha skrubu). Uso wa koni unaitwa "countersink" kwenye paneli.

## Matundu yenye nyuzi

Weka **Type** kuwa **Tapped (ISO metric)** kisha chagua **Thread**, M2 hadi M24 coarse. Tundu linachimbwa kwa ukubwa wa tap drill kutoka jedwali lililo chini (kipenyo kilichotajwa ukitoa pitch, hadi mfululizo wa vichimba, kama ISO 2306 inavyoorodhesha kwa nyuzi 6H); kisanduku cha **Diameter (mm)** hakitumiki. Kwa tundu la kipofu, **Thread depth (mm)** huweka nyuzi zinaenda kwa kina kipi.

| Nyuzi | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pitch | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Tap drill ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Nyuzi kwanza ni **cosmetic**: modeli ina tundu lililochimbwa, mwonekano unachora kipenyo kikuu cha nyuzi kama miduara yenye mistari, na karatasi ya michoro inabeba maelezo kama noti, kwa mfano "4× M8×1.25 - 6H, thread through". STEP inasafirisha tundu lililochimbwa tu.

Weka alama kwenye **Modelled** ili kukata nyuzi halisi za hesi ndani ya tundu, kwa ajili ya uchapishaji wa 3D. **Clearance (mm)** huongeza ukubwa wake pande zote, ili bolti iliyochapishwa ilingane: 0.1 hadi 0.2 mm inafaa vichapishaji vingi. Maelezo kisha yanamalizika kwa "(modelled)". Angalia [Threads on shafts and bores, drawn or modelled](topic:threads), ambayo pia huweka nyuzi kwenye shafti.

:::note
Matundu yaliyochimbwa mara mbili, nyuzi za inchi na nyuzi za bomba bado hazijajengwa.
:::
