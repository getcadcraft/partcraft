---
title: Uchakataji wa shoka 4 na 5
summary: Mwambie PartCraft mashine ina shoka gani za mzunguko, inamisha zana kwa operesheni yoyote ya kawaida, malizia uso kwa kikata cha ncha ya duara kinachoinama wakati kinakata, au geuza sehemu chini ya zana kwenye shoka ya 4. Kinachoandikwa kwenye G-code, na kisichothibitishwa.
keywords: shoka 5, shoka tano, shoka 4, shoka ya nne, shoka nyingi, multiaxis, 3+2, iliyowekwa, positional, kuinamisha, zana iliyoinama, mzunguko, meza, kichwa, shoka a, shoka b, shoka c, TCP, RTCP, kituo cha ncha ya zana, G43.4, wakati wa kinyume, G93, kinematiki, pivot, swarf, pembe ya kuongoza, trunnion
from: c4f1c491
---

Utengenezaji unaweza kushikilia zana kwa pembe, na unaweza kusogeza shoka za mzunguko wakati wa kukata. Mambo matatu yanayofanya hivyo, kutoka rahisi zaidi kwenda juu.

**Hakuna kilichopo hapa kilichoendeshwa kwenye mashine.** Njia zinakaguliwa dhidi ya jiometri na majaribio, na G-code inasomwa tena, lakini posts zilizojengwa ndani zinafuata misimbo ya vidhibiti iliyoandikwa, si mashine yoyote iliyo mbele yetu. Thibitisha programu kwenye kiigaji cha kidhibiti chako mwenyewe na hewani kabla haijagusa chuma.

## Shoka za mzunguko za mashine

Kwenye kichupo cha **Mpangilio**, {{ui:Shoka za mzunguko}} inasema mashine ina nini:

| Chaguo | Mashine |
|---|---|
| Hakuna (shoka 3) | Kinu cha kawaida. Operesheni yoyote inayohitaji zana iliyoinamishwa inaonya, na post inakataa kuiandika. |
| A (inazunguka X) | Shoka moja ya mzunguko kando ya X: meza ya shoka ya 4 au indexer. Zana inaweza kuinama kwenye ndege ya Y–Z pekee. |
| B (inazunguka Y) | Shoka moja ya mzunguko kando ya Y. Zana inaweza kuinama kwenye ndege ya X–Z pekee. |
| A na C | Shoka la kuinamisha kuzunguka X linalobebwa na, au linalobeba, mzunguko kuzunguka Z: meza ya trunnion, au kichwa. |
| B na C | Vile vile, kwa kuinamisha kuzunguka Y. |

Kisha:

- **Kinachobebwa na**: {{ui:Meza (kipande ndicho kinachozunguka)}} au {{ui:Kichwa (zana ndiyo inayozunguka)}}. Meza inazunguka kinyume ili kuleta uso uleule chini ya zana, kwa hiyo ishara ya kila pembe inafuata kutoka hapa.
- **Kidhibiti kinaweka ncha ya zana kwenye njia (TCP)**: ikiwa imewashwa, X Y Z kwenye programu ni ncha ya zana kwenye kuratibu za sehemu yenyewe na kidhibiti kinafanya kilichobaki (posts zilizojengwa ndani za mtindo wa Fanuc na LinuxCNC zinaandika `G43.4` kwa urefu wa zana). Ikiwa imezimwa, kwenye mashine yenye meza, PartCraft inaandika X Y Z kadiri meza inayozunguka inavyobeba kipande, kuzunguka **kituo cha mzunguko** unachotoa (kwenye kuratibu za kazi; 0, 0, 0 wakati asili ya kazi iko katikati). Mashine yenye kichwa inahitaji TCP iwashwe: bila hiyo programu ingehitaji urefu wa pivot wa mashine, ambao PartCraft haujui.
- **Kikomo cha kuinamisha**: shoka la kuinamisha linaenda mbali kiasi gani.

Mashine hutofautiana kwa upande gani zinahesabu kuwa chanya. Ikiwa shoka linazunguka upande mbaya kwenye yako, badilisha ishara kwenye nakala ya post ([Vichakataji vya post unavyoweza kuhariri](topic:post-processors)).

## Zana iliyoinama kwa operesheni ya kawaida

Kila operesheni ya kusaga (uso, pocket, inayojirekebisha, contour, kuchimba, chamfer, sambamba, scallop, 3D mbaya, mabaki) ina **Kuinamisha zana** na **Elekea**: mwelekeo wa zana kwa operesheni hiyo peke yake, unaopimwa kutoka mhimili wa zana wa mpangilio. Hii ni uchakataji wa 3+2: shoka za mzunguko zinaenda kwenye nafasi na kubaki hapo wakati shoka tatu zinakata.

- Andika pembe mbili, au bonyeza {{ui:Zana iwe sawa na uso}} kisha ubofye uso tambarare: zana itaelekea moja kwa moja kwake.
- Chagua nyuso na kingo za operesheni kama kawaida. Kinachohesabiwa kuwa sakafu au tundu kinahukumiwa kando ya zana iliyoinama.
- Malighafi kwa mwelekeo huo ni boksi inayoshikilia malighafi iliyogeuzwa, kwa hiyo urefu na vibali ni salama upande huo.

Kwenye G-code, kabla ya operesheni zana inainuka, shoka za mzunguko zinageuka, na zana inashuka juu ya nukta yake ya kwanza. Kwenye mashine yenye meza bila TCP, matao yanabaki matao na mizunguko ya kuchimba iliyoandaliwa inabaki mizunguko (fremu iliyoandikwa inageuzwa kuzunguka Z pekee). Kwa TCP kwenye ndege iliyoinama, matao yanakuwa mistari mifupi na mizunguko kuwa mienendo wanayowakilisha.

Uigaji wa malighafi unaendesha mwelekeo ulioinama **peke yake**: unaonyesha kile operesheni hiyo inakata kutoka malighafi yote inavyoonekana kutoka upande wake, na unatafuta mikwaruzo hapo, lakini mikato iliyofanywa kutoka mielekeo mingine haibebwi.

## Umaliziaji wa shoka 5

{{ui:Zaidi}} kwenye upau wa zana wa Utengenezaji inaorodhesha operesheni hii na inayofuata juu ya kichupo cha **Shughuli**.

{{ui:Shoka 5}} ni [pita ya umaliziaji sambamba](topic:finish-3d) pamoja na **kikata cha ncha ya duara kinachoinama kinapoendelea**. Mpira unakata kwa duara, na duara ni lile lile kwa upande wowote zana inapoinama kuzunguka katikati yake, kwa hiyo mpira unafuata njia kamili ambayo pita ya shoka 3 ingetoa na ni mwelekeo wa zana pekee unaobadilika:

- **Kuelekea uso**: 1 = sawa na uso, 0 = wima, chochote kati ya hivyo.
- **Inamisha mbele**: digrii kando ya mwelekeo wa kukata, ili katikati tulivu ya mpira isiwe kile kinachokata.
- **Inamisho kubwa zaidi**: zana haiinami zaidi ya hapa kutoka mhimili wa mpangilio.

Pale shank ingegusa modeli, kuinama kunakatwa nyuma hadi iwe huru, na operesheni inasema katika nukta ngapi. Kila pita inaingiwa na kutokea kwa kuinuka kulionyooka.

## Umaliziaji wa mzunguko (shoka ya 4)

{{ui:Mzunguko}} ni kwa sehemu iliyoshikiliwa kando ya **X ya kazi** kwenye shoka la mzunguko. Sehemu inageuka na kikata cha ncha ya duara, kinachoelekeza kila mara kwenye shoka, kinafuata uso wake:

- **Pita**: {{ui:Kando ya shoka}} (mistari kando ya X, umbali mmoja wa hatua ya mzunguko kati yao) au {{ui:Kuzunguka kipande}} (pete, umbali mmoja wa hatua ya X kati yao).
- **Shoka kwenye Y / Z**: shoka lilipo. Tupu inamaanisha katikati ya malighafi. Kwenye mashine yenye meza bila TCP hii lazima iwe kituo cha mzunguko kwenye Mpangilio; operesheni inaonya isipokuwa hivyo.
- **Kutoka / Hadi X** na **Kutoka / Hadi pembe**: sehemu ya urefu na ya mzunguko wa kukata.

Urefu wa mpira juu ya shoka kwenye kila nukta ni mteremko kamili wa duara kwenye mesh ya sehemu, kutoka upande huo.

## Mipaka

- Umaliziaji wa shoka 5 na wa mzunguko unatumia **kikata cha ncha ya duara** pekee. Hakuna ukataji wa swarf (upande wa zana kwenye ukuta ulionyooka), hakuna mistari ya mtiririko kando ya mielekeo ya uso wenyewe, hakuna ukataji mbaya wa shoka nyingi, na hakuna uchaguzi wa kiotomatiki wa kuinamisha ili kuepuka mgongano.
- Njia za shoka 5 na za mzunguko **hazipitishwi kwenye uigaji wa malighafi**, ambao ni ramani ya urefu na hauwezi kubeba mkato ulioinama.
- Shank inakaguliwa kwenye umaliziaji wa shoka 5 dhidi ya modeli inavyoonekana kutoka juu; mshikio, spindle na mashine yenyewe havikaguliwi popote.
- Umaliziaji wa mzunguko unakata tu kile zana inachoweza kuona ikiangalia shoka.
- Umaliziaji wa shoka 5 unachukua dakika moja au zaidi kuhesabiwa kwenye sehemu kubwa: shank inakaguliwa kwenye kila nukta ya kila pita.
- Shoka za mzunguko zinaposogea pamoja na za mstari na TCP imezimwa, posts zilizojengwa ndani zinaandika malisho kama wakati wa kinyume (`G93`), kisha zinarudi `G94`.
- Hakuna msimbo wa ndege ya kazi iliyoinama (`G68.2` na kama hivyo) unaoandikwa, na hakuna mipaka mahususi ya mashine, kufungua au maeneo ya mgongano yanayojulikana.
