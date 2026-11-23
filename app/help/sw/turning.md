---
title: Kugeuza kwenye lathe
summary: Kata uso, mbaya, umaliziaji, mtaro, kukata kipande, uzi na kuchimba kipande kilichogeuzwa, kutoka kwenye kontua ambayo sehemu inatengeneza inapozunguka. Zana za lathe, malisho kwa mzunguko, posts za lathe, na kisichothibitishwa.
keywords: kugeuza, lathe, geuza, kukata uso, mbaya, umaliziaji, mtaro, kugawanya, kukata kipande, uzi, kuchonga uzi, g32, g33, g96, kasi ya mara kwa mara ya uso, css, radius ya pua, insert, baa, chuck, kipenyo, malisho kwa mzunguko, g71, g76
from: d8cc53b0
---

Utengenezaji una operesheni saba za lathe. Zinafanya kazi kwenye sehemu yoyote: kinachokatwa ni **kontua ambayo sehemu inatengeneza inapozunguka** kuzunguka katikati ya malighafi, kwa hiyo sehemu isiyo ya duara inageuzwa hadi umbo la duara linalouhimili.

**Hakuna kilichopo hapa kilichoendeshwa kwenye lathe.** Njia zinakaguliwa dhidi ya jiometri na majaribio; posts mbili za lathe zinafuata misimbo ya vidhibiti iliyoandikwa. Thibitisha programu kwenye kiigaji cha kidhibiti chako mwenyewe na hewani kwanza.

## Mpangilio

Kwenye kichupo cha **Mpangilio**:

- **Mhimili wa zana** ni mhimili wa spindle, Z ya lathe. Mbele ya sehemu iko +Z; chuck inashikilia upande mwingine.
- **Malighafi**: chagua {{ui:Silinda}}, baa. Kukabiliana kwake juu ndicho kinachoondolewa na kata la uso.
- **Asili ya kazi**: katikati ya juu ya malighafi au ya juu ya modeli inaweka Z0 kwenye uso wa mbele, mahali pa kawaida.
- **Kidhibiti**: {{ui:Lathe ya mtindo wa Fanuc (.nc)}} au {{ui:Lathe ya LinuxCNC (.ngc)}}. Post ya kusaga inakataa programu ya kugeuza na inasema hivyo.
- **Kasi ya juu ya spindle**: kikomo ambacho kasi ya uso inashikiliwa chini yake.

{{ui:Zaidi}} kwenye upau wa zana wa Utengenezaji inaorodhesha operesheni saba za kugeuza juu ya kichupo cha **Shughuli**. Ya kwanza unayoongeza inaleta zana yake: **insert ya kugeuza** (radius ya pua, pembe ya insert, pembe ya ukingo wa kukata) au **blade ya mtaro** (upana, radius ya kona, inafika kwa kina kipi). Zibadilishe kwenye kichupo cha **Zana**. Malisho ni kwa mzunguko, na kasi ni kasi ya uso kwa m/min ambayo kidhibiti kinashikilia wakati kipenyo kinabadilika; mpe zana rpm yake yenyewe ili kurekebisha kasi badala yake.

## Operesheni

| Operesheni | Inachofanya |
|---|---|
| {{ui:Uso}} | Inasawazisha mbele ya baa hadi sehemu, hatua moja ya kushuka kwa wakati, kutoka nje hadi kupita katikati kidogo. |
| {{ui:Mbaya}} | Pita kando ya Z zikiwa umbali wa **kina cha kukata** kati yake, hadi kontua pamoja na **malighafi ya kuachwa**; kisha mara moja kando ya kontua kuondoa ngazi. Bonde kati ya mabega mawili linaingiwa kwa kuchoma kwa kina kimoja cha kukata. |
| {{ui:Umaliziaji}} | Pita moja kando ya kontua kwa sehemu ya malisho ya zana. |
| {{ui:Mtaro}} | Inachoma blade kando kwa kando popote inapoweza kuchukua zaidi ya kikomo cha malighafi iliyobaki: mitaro ambayo insert ya kugeuza haikuweza kuifikia. **Kutoka / Hadi Z** inaipunguza. |
| {{ui:Kata kipande}} | Inakata sehemu kidogo nyuma ya uso wake wa nyuma, hadi kidogo zaidi ya katikati, pamoja na pecks ukiweka moja. |
| {{ui:Uzi}} | Uzi wa nje: kipenyo kikuu, hatua ya uzi, urefu, idadi ya pita. Kina 0 kinamaanisha 0.6134 × hatua (uzi wa 60°). Kila pita inachukua eneo sawa la chip; pita za spring zinarudia ya mwisho. |
| {{ui:Kuchimba}} | Kichimba kwenye mstari wa katikati hadi kina, pamoja na pecks. |

## Jinsi zana inavyowekwa mbali na sehemu

Insert inachukuliwa kama ilivyo: duara lake la pua, na nyuma yake ukingo wa kufuata, mstari ulionyooka ambao pembe yake ni 180° kupunguza pembe ya ukingo wa kukata na pembe ya insert. Umbo hilo linashushwa juu ya kontua kwenye kila nukta kando ya Z, na njia ni pale unapotulia. Kwa hiyo:

- **Radius ya pua tayari iko kwenye njia.** Posts hazaandiki `G41` wala `G42`; kuratibu ni nukta ya zana iliyopangwa (kona ya mraba unaozunguka pua).
- Insert **haiwezi kufuata ukuta ulio mwinuko kuliko ukingo wake wa kufuata**. Mtaro nyuma ya bega unaachwa, na operesheni ya umaliziaji inasema ni kiasi gani cha kontua haikuweza kufikia. Operesheni ya {{ui:Mtaro}} inaishughulikia.
- Malighafi inafuatiliwa kando ya Z baada ya kila mkato, kwa hiyo ukataji mbaya hauikati hewa, mtaro unatafuta kilichobaki, na kila operesheni inaonyesha ujazo iliyoondoa na kama ilikata ndani ya sehemu.

## Mipaka

- **Kugeuza kwa nje pekee**: hakuna baa ya kuchosha, hakuna mitaro au nyuzi za ndani, hakuna mitaro ya uso.
- Spindle moja, sehemu ikishikiliwa kwenye −Z. Hakuna spindle ndogo, hakuna zana hai, hakuna shoka C wala Y, hakuna steady rest wala mienendo ya tailstock.
- Njia ni mienendo iliyonyooka: mikunjo ni mistari mifupi ndani ya uvumilivu (hakuna `G2`/`G3`), na ukataji mbaya na uzi vinaandikwa pita kwa pita (hakuna mizunguko ya `G71` wala `G76`).
- Kuchonga uzi ni pita zilizonyooka na kutoka kwa mstari ulionyooka mwishoni; mpe uzi mtaro wa unafuu. Uzi haionyeshwi kwenye malighafi.
- Kuchimba katikati hakubadilishi modeli ya malighafi.
- Mshikio, turret na chuck havikaguliwi. Weka **Simama kwenye Z** ili kuiweka zana mbali na taya.
- Malisho na kasi ni thamani za kuanzia, kama kwa kusaga.
