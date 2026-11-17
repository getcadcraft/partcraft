---
title: Vipengele na chaguo zake
summary: Kila kipengele kwenye upau wa zana pamoja na mipangilio, chaguo-msingi na mipaka yake, kutoka tolea hadi fillet, shell na vigumu vya STEP vilivyoingizwa, vitendo vyote vinavyoshirikiwa na kila kipengele, na mipangilio ya sehemu.
keywords: vipengele, tolea, kata, zungusha, kukata kwa kuzungusha, tundu, counterbore, mchoro wa mstari, mchoro wa mviringo, kioo, fillet, chamfer, shell, ingiza, chaguo, chaguo-msingi, mipangilio, azimio, mikunjo, facet, zima, rudisha nyuma
from: ab3a598e
---

Vipengele vimeorodheshwa kwenye historia kwa mpangilio vilivyotengenezwa, na hujengwa upya kutoka juu hadi chini. Kila kimoja kimepewa jina la aina yake pamoja na namba: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft hujenga kila kipengele kwa kernel ya matundu. Fillet na Chamfer hufanya kazi kwenye kingo zilizonyooka kati ya nyuso mbili bapa, na Shell hufungua nyuso bapa. Vigumu vilivyoingizwa vinahitaji kernel sahihi, ambayo toleo hili halina: havijajengwa bado, na sehemu yao hapa chini inavielezea kama sehemu iliyotengenezwa katika toleo la awali inavihifadhi. Tazama [Kernel ya matundu](topic:solid-kernels) na [Bado hakijajengwa](topic:not-built-yet).

## Mchoro

| Mpangilio | Maelezo |
|---|---|
| Plane | Ndege ya Front, Top au Right, au uso bapa. Inaonyeshwa, haibadilishwi: ili kusogeza mchoro, tengeneza mpya |
| Hali | Imefafanuliwa kikamilifu, Imefafanuliwa kiasi (pamoja na digrii za uhuru), Imefafanuliwa kupita kiasi, au Tupu |
| Geometry, Relations | Idadi ya mikunjo, nukta na mahusiano |
| Driving dimensions | Kila kipimo cha mchoro, kinachoharirika |

Vitufe: {{ui:Hariri mchoro}}, {{ui:Hamisha kama DXF}}.

## Tolea na Kata

{{ui:Tolea}} na {{ui:Kata}} hutengeneza kipengele kile kile, zikianza na mipangilio tofauti.

| Mpangilio | Chaguo | Tolea inaanzia | Kata inaanzia |
|---|---|---|---|
| Uendeshaji | Boss (ongeza nyenzo), Kata (ondoa nyenzo), Intersect (weka mwingiliano), New body (bado haijajengwa katika toleo hili) | Boss | Kata |
| Mwisho | Kina maalum (kipimo), Katikati ya ndege (pande zote mbili), Kupitia yote | Kina maalum (kipimo) | Kupitia yote |
| Kina (mm) | Zaidi ya 0, hadi 1,000,000 | 10 | 10 |
| Geuza mwelekeo | Imezimwa / imewashwa | Imezimwa | Imezimwa |

- Wasifu: kila kitanzi kilichofungwa cha mistari thabiti, duara na safu kwenye mchoro. Vitanzi ndani ya vitanzi ni matundu.
- Kupitia yote hufanya kazi kwa kukata pekee. Hufikia hadi mwisho wa sehemu upande uliochaguliwa.
- Kata huingia kwenye nyenzo, mbali na upande wa nje wa ndege ya mchoro; Geuza mwelekeo huibadilisha.

## Zungusha na kukata kwa kuzungusha

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| Uendeshaji | Boss, Kata | Boss ({{ui:Zungusha}}), Kata ({{ui:Zaidi}} › {{ui:Kukata kwa kuzungusha}}) |
| Pembe (°) | Zaidi ya 0, hadi 360 | 360 |
| Mhimili | Mstari wa katikati wa kwanza, mstari wowote au mstari wa katikati wa mchoro, au kipengele cha mhimili kilicho kwenye ndege ya mchoro | Mstari wa katikati wa kwanza |

- Wasifu lazima ubaki upande mmoja wa mhimili. Unaweza kuugusa.
- Mhimili wa zungusha unaweza kutumiwa na mchoro wa mviringo na viungio vya mkusanyiko.

## Tundu

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| Aina | Rahisi, Counterbore | Rahisi |
| Kipenyo (mm) | Zaidi ya 0 | 6 |
| Kupitia yote | Imewashwa / imezimwa | Imewashwa |
| Kina (mm) | Wakati Kupitia yote imezimwa | 10 |
| Counterbore ⌀ | Pana kuliko tundu | 11 |
| Kina cha counterbore | Kidogo kuliko tundu lisilo la kupitia | 6 |
| Geuza mwelekeo | Imezimwa / imewashwa | Imezimwa |

- Tundu moja kwa kila nukta huru ya mchoro (nukta zilizotengenezwa kwa zana ya Nukta). Jopo linaonyesha ni ngapi.
- Matundu huchimbwa kwa mraba kwa ndege ya mchoro, ndani ya nyenzo.
- Mhimili wa kila tundu unaweza kutumiwa na viungio vya mkusanyiko ("Hole1, tundu 2").

## Mchoro wa mstari

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| Vipengele vya kunakili | Vipengele vyovyote vikali juu yake | Kilichochaguliwa, vinginevyo kipengele kigumu cha mwisho |
| Mwelekeo | Mhimili wa X, Y, Z; mstari wa mchoro wa awali uliotangulia; mhimili wa zungusha; ukingo uliochaguliwa | Mhimili wa X (au ukingo uliochaguliwa ulipoongezwa) |
| Nafasi (mm) | Namba yoyote | 20 |
| Idadi | 1 hadi 1000, pamoja na ile ya asili | 3 |
| Geuza mwelekeo | Imezimwa / imewashwa | Imezimwa |

## Mchoro wa mviringo

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| Vipengele vya kunakili | Kama kwa Mchoro wa mstari | Kama kwa Mchoro wa mstari |
| Mhimili | Kama kwa Mwelekeo hapo juu | Mhimili wa zungusha la mwisho, vinginevyo mhimili wa Y (au ukingo uliochaguliwa) |
| Pembe (°) | Zaidi ya 0, hadi 360. 360 huweka nakala sawasawa kuzunguka; pungufu huzieneza katika pembe | 360 |
| Idadi | 1 hadi 1000, pamoja na ile ya asili | 6 |
| Geuza mwelekeo | Imezimwa / imewashwa | Imezimwa |

## Kioo

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| Kioo | Sehemu nzima (kama ilivyojengwa hadi sasa), au vipengele vilivyochaguliwa | Kipengele kilichochaguliwa, vinginevyo sehemu nzima |
| Ndege ya kioo | Ndege ya Front, Top au Right; uso bapa | Ndege ya Right, au uso bapa uliochaguliwa ulipoongezwa |

## Fillet na Chamfer

Katika toleo hili kernel ya matundu huzijenga kwenye kingo zilizonyooka kati ya nyuso mbili bapa (pembe za nje au za ndani), kwa radius moja. Ukingo wa duara husema: "Fillet: katika toleo hili ni kingo zilizonyooka kati ya nyuso mbili bapa pekee (kernel ya matundu huzijenga). Zungusha au ukate kingo zilizopinda kwenye mchoro."; pale kingo zilizozungushwa zinapokutana kwenye kona hukatwa kwa mkato wa mtindo wa miter, na kipengele kinaonya "Fillet kwa kernel ya matundu: pale kingo zilizozungushwa zinakutana zimekatwa, si kuchanganywa." Aina zote za Chamfer (umbali sawa, umbali mbili, umbali na pembe, pamoja na **Geuza pande**) zinafanya kazi. Tazama [Zungusha, kata kwa pembe na tupu](topic:fillet-chamfer-shell).

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| Radius (mm) (Fillet) | Zaidi ya 0 | 2 |
| Umbali (mm) (Chamfer) | Zaidi ya 0, sawa kwenye nyuso zote mbili | 1 |
| Kingo | Kingo zilizochaguliwa, kila moja ikiorodheshwa kwa nyuso mbili inazounganisha ("Extrude1 uso wa mwisho × Extrude1 upande"), pamoja na **Ondoa** | Kingo zilizochaguliwa ulipoongezwa |

- Chagua kingo kabla ya kuchagua kitufe ({{key:Shift}}+bofya kwa kadhaa), au chagua kitufe bila kitu kilichochaguliwa kisha ubofye kingo baadaye.
- {{ui:Chagua kingo}} (au kubofya mara mbili kipengele) hubadilisha kingo.
- Kingo huhifadhiwa kwa nyuso mbili zinazoziunganisha, kwa hiyo zinabaki baada ya mabadiliko ya ukubwa kabla yake.

## Shell

Kernel ya matundu huijenga. Nyuso bapa pekee ndizo zinaweza kufunguliwa ("Shell: katika toleo hili inafungua nyuso bapa pekee (kernel ya matundu huijenga)."); kuta za unene tofauti bado hazijajengwa. Tazama [Zungusha, kata kwa pembe na tupu](topic:fillet-chamfer-shell).

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| Ukuta (mm) | Zaidi ya 0 | 2 |
| Kuta zinakua nje (nyuso zinabaki ndani) | Imezimwa: kuta zinaenda ndani. Imewashwa: kuta zinaenda nje | Imezimwa |
| Nyuso zilizo wazi | Nyuso zilizoondolewa, angalau moja, pamoja na **Ondoa** | Nyuso zilizochaguliwa ulipoongezwa |

{{ui:Chagua nyuso}} hubadilisha nyuso zilizo wazi.

## Kigumu kilichoingizwa

Kimetengenezwa kwa kufungua faili la STEP, STL, OBJ au 3MF: mwili mgumu wa pembetatu bila historia yake yenyewe ([Fungua faili la STEP](topic:import-step), [Fungua STL, OBJ au 3MF](topic:open-meshes)). Unaonyesha faili kilikotoka na kile ambacho uingizaji ulirekebisha; **Vitengo kwenye faili**, **Juu kwenye faili** na **Itumie kwa** bado vinaweza kuhaririwa. Kigumu cha STEP kilichoingizwa na toleo la zamani lenye kernel sahihi hubaki kwenye historia kikiwa na alama ya kutojengwa; fungua faili la STEP tena ili kukiingiza kama pembetatu.

| Mpangilio | Chaguo | Chaguo-msingi |
|---|---|---|
| Juu kwenye faili | Z juu (CAD nyingi), Y juu | Z juu |

Mifumo na vioo vinaweza kunakili kigumu kilichoingizwa, lakini si fillet, chamfer au shell.

## Kila kipengele kina nini

Chini ya paneli ya kila kipengele:

| Kitufe | Hufanya |
|---|---|
| {{ui:Zima}} / {{ui:Washa tena}} | Kizime au kiwashe. Vipengele vinavyohitaji havijengwi wakati kimezimwa |
| {{ui:Rudisha hadi hapa}} | Jenga vipengele vilivyo juu ya hiki pekee. Vipengele vipya huingia kwenye upau wa kurudisha |
| {{ui:Sogeza juu}} / {{ui:Sogeza chini}} | Panga upya, pale ambapo hakuna kinachokitumia kitakachoishia chini yake. Kimefifia pamoja na sababu vinginevyo |
| {{ui:Futa}} | Kifute, na (baada ya kuuliza) kila kipengele kinachokitumia |
| Jina | Kitaje upya (hadi herufi 60) |

Vipengele vyenye mchoro pia huorodhesha **Vipimo vya mchoro**, vinavyoharirika papo hapo.

## Hali kwenye historia

| Hali | Inavyoonyeshwa | Maana |
|---|---|---|
| Imejengwa | Kawaida | Yote sawa |
| Onyo | ⚠ | Imejengwa, lakini kuna cha kukagua: "Imefafanuliwa kupita kiasi: uhusiano 1 hauhitajiki." au "Hakuna kilichobaki cha sehemu baada ya hili." |
| Hitilafu | ⚠ hitilafu, nyekundu | Haikuweza kujengwa; ujumbe unaeleza kwa nini |
| Haijajengwa | ⚠ haijajengwa | Inahitaji kipengele kilichoshindwa, kilichozimwa au kurudishwa nyuma, au inahitaji kernel sahihi, ambayo toleo hili halina ("Sweep: bado haijajengwa. …") |
| Imezimwa | imezimwa | Imezimwa |
| Imerudishwa nyuma | imefifia, chini ya upau wa kurudisha | Haijajengwa hadi usogeze mbele |

## Mipangilio ya sehemu

Bofya nafasi tupu ili kusiwe na kitu kilichochaguliwa. Paneli ya kulia inaonyesha **Sehemu**:

- **Jina**: jina la sehemu, linalotumika kwa majina ya faili na kichwa cha mchoro (hadi herufi 120).
- **Mikunjo**: tazama hapa chini.

### Azimio la mikunjo

Kernel ya matundu hujenga kigumu chenyewe kutoka nyuso bapa, kwa hiyo mwonekano, STL, 3MF, STEP yenye nyuso bapa, ujazo na maoni ya mchoro vyote hufuata **Mikunjo**: facet ngapi kwa zamu kamili.

| Mpangilio | Facet kwa zamu | Ujazo wa umbo la duara |
|---|---|---|
| Mbaya (32 kwa zamu) | 32 | Takriban 0.64 % chini ya thamani halisi |
| Kawaida (64 kwa zamu) | 64 | Takriban 0.16 % chini (chaguo-msingi) |
| Laini (128 kwa zamu) | 128 | Takriban 0.04 % chini |
| Laini sana (256 kwa zamu) | 256 | Takriban 0.01 % chini |

Mikunjo laini zaidi hutoa hamisho na mionekano laini zaidi, lakini ujenzi ni wa polepole zaidi. Mpangilio huhifadhiwa kwenye faili la sehemu.

## Bado hakijajengwa

Radius zinazobadilika za fillet, fillet na chamfer kwenye kingo za duara, shell zinazofungua nyuso zilizopinda, rasimu kwenye nyuso zilizopinda, sweep, loft, rib, vigumu vya STEP vyenye nyuso zilizopinda sahihi, miili mipya, mteremko, "hadi" uso au kona, na marejeo kwenye nyuso na kingo za kigumu zinahitaji kernel sahihi, ambayo toleo hili halina. Pia havijajengwa: matundu yenye nyuzi na matundu yaliyochimbwa kwa koni. Tazama [Bado hakijajengwa](topic:not-built-yet).
