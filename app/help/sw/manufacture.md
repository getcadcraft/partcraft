---
title: Tengeneza njia za zana na G-code (Utengenezaji)
summary: Weka malighafi na asili ya kazi, chagua zana, ongeza shughuli za uso, pocket, contour, kuchimba na chamfer kwa kuchagua nyuso, malizia modeli nzima kwa 3D (sambamba, scallop), iga malighafi dhidi ya modeli kwa mikwaruzo na muda wa mzunguko, kisha pakua G-code kutoka mojawapo ya posts tatu zilizojengwa ndani au moja unayohariri mwenyewe.
keywords: exact step, step kwa duka, kuratibu za kazi, makabidhiano ya cam, sambamba, scallop, umaliziaji wa 3d, umaliziaji, pua ya duara, maktaba ya zana, hariri post, post maalum, mhariri wa post, inayojirekebisha, usafishaji unaojirekebisha, ushiriki wa mara kwa mara, trochoidal, hsm, uchakataji wa kasi ya juu, utengenezaji, CAM, njia ya zana, G-code, NC, CNC, kinu, kusaga, pocket, contour, wasifu, uso, kuchimba, peck, G83, G81, G73, chamfer, malighafi, kukabiliana kwa kazi, G54, kichakataji cha post, GRBL, LinuxCNC, malisho na kasi, uigaji, mkwaruzo, muda wa mzunguko
from: f8a03be8
---

Eneo kazi la Utengenezaji linageuza sehemu kuwa njia za zana na kuziandika kama G-code. Shughuli nyingi ni kusaga kwa **mihimili 2.5**: zana inabaki wima, kuta zinakatwa moja kwa moja chini na sakafu kwa tambarare. **3D mbaya** na **Mabaki** husafisha sehemu zilizopinda kwa 3D ([Ukataji mbaya wa 3D na wa mabaki](topic:rough-3d)); **Sambamba** na **Scallop** zinazimaliza ([Umaliziaji wa 3D](topic:finish-3d)). Kwenye mashine yenye shoka za mzunguko, shughuli yoyote inaweza kuwa na zana iliyoinama, na shughuli mbili zinasogeza shoka za mzunguko wakati wa kukata ([Uchakataji wa shoka 4 na 5](topic:multi-axis)). Kuna shughuli kwa lathe ([Kugeuza](topic:turning)) na kwa kichunguzi cha kugusa ([Kuchunguza](topic:probing)). Inafanya kazi kwenye nyuso zilizopewa jina ambazo kernel ya mesh inatoa kwa sehemu (angalia [Kernel ya mesh](topic:solid-kernels)).

Toleo la maabara: kagua kila programu kwenye kiigaji cha kidhibiti chako mwenyewe, na uiendeshe hewani juu ya malighafi kwanza.

## Usanidi

1. Chagua **Utengenezaji** kwenye kibadilishaji cha eneo kazi, kisha {{ui:Mpangilio mpya}}.
2. Kwenye kichupo cha **Mpangilio** chagua:
   - **Mhimili wa zana (+Z)**: zana inaelekea upande gani ndani ya sehemu. Y ya dunia (+Y, juu ya PartCraft) ndiyo chaguo-msingi; X ya mashine ni X ya dunia na Y ya mashine ni −Z ya dunia.
   - **Asili ya kazi (G54)**: kona au katikati ya malighafi, juu au chini, katikati ya juu ya modeli, au asili ya modeli.
   - **Malighafi**: boksi au silinda, ama modeli pamoja na nyongeza (pande, juu, chini) au ukubwa uliowekwa.
   - **Nyenzo** (huweka malisho na kasi ya kuanzia), **post** (kidhibiti), kasi ya juu ya spindle ya mashine, kiwango cha rapid na muda wa kubadilisha zana, kipozeo na nambari ya programu.

## Zana

Kichupo cha **Zana** kina maktaba: vikata vya ncha tambarare, vya duara na vya mviringo mpana, vichimba, vikata vya chamfer na vikata vya uso, kila kimoja kikiwa na nambari ya T, kipenyo, idadi ya mikato na urefu wa mkato (pamoja na radius ya kona, pembe ya ncha au pembe ya chamfer pale zinapotumika).

Zana zangu zinaweza kuhifadhiwa kwenye kivinjari na kuhamishwa kati ya kompyuta kama faili: angalia [Maktaba ya zana](topic:tool-library).

Kasi ya spindle na malisho vinatokana na nyenzo: n = 1000 × kasi ya kukata / (π × kipenyo), malisho = n × idadi ya mikato × chip load (vichimba: n × malisho kwa mzunguko). Hizi ni thamani za kuanzia za tahadhari kutoka kwenye safu zilizochapishwa, si zilizorekebishwa kwa mashine yako; andika kasi ya kukata, chip load, rpm au malisho ya mtengenezaji wa zana yako ili kuvibadilisha. Kasi ikizidi kiwango cha juu cha mashine, inashikiliwa hapo na malisho yanafuata, ili kudumisha chip load.

## Ongeza shughuli

Kila kitufe cha upau wa zana huongeza shughuli na, pale kinapohitaji jiometri, huanza kuchagua: bofya nyuso au kingo kwenye mwonekano (bofya tena kuondoa moja), kisha {{ui:Imekamilika kuchagua}} au {{key:Esc}}.

| Shughuli | Kuchagua | Inachofanya |
|---|---|---|
| {{ui:Uso}} | hakuna | Pita za zig-zag juu ya malighafi yote, zikipita kingo zake, hadi juu ya modeli |
| {{ui:Pocket}} | uso tambarare wa sakafu, tundu la duara, au mnyororo uliofungwa wa kingo | Inasafisha eneo kwa pita za kukabiliana kutoka ndani kwenda nje, kwa kila hatua ya kushuka; visiwa (nyuso zilizosimama ndani ya sakafu) vinaachwa; sakafu iliyo wazi pande zote (hakuna kitu kirefu nje yake) inasafishwa hadi kwenye ukingo wa malighafi |
| {{ui:Inayojirekebisha}} | sawa na Pocket | Inasafisha eneo lilelile kwa pita zinazokata kila moja upana uliowekwa (**Ushiriki**, sehemu ya kipenyo), kwa hiyo kikata hakichukui upana kamili wa mkato, hata kwenye kona; kinaingia kwa hesi na kumaliza kuta kila ngazi. Mikato myembamba inaruhusu hatua ya kushuka kuwa kubwa zaidi na malisho kuwa ya juu zaidi |
| {{ui:Contour}} | uso tambarare (mstari wake wa nje), uso wa duara, au kingo | Inafuata mstari wa nje ulio na umbali wa radius ya zana, nje au ndani, pamoja na matao ya kuingia na kutoka na vichupo vya hiari |
| {{ui:Kuchimba}} | matundu (bofya ukuta wa tundu au ukingo wake) | Inachimba kila tundu kwa mzunguko ulioandaliwa: peck (G83), kuchimba (G81) au kuvunja chipu (G73); au toa kipenyo ili kuchimba kila tundu la ukubwa huo |
| {{ui:Chamfer}} | mstari wa nje wa uso au kingo | Inaendesha kikata cha chamfer kando ya kingo ili kikate upana uliouweka |
| {{ui:Sambamba}} | hakuna (modeli nzima) | Umaliziaji wa 3D kwa mistari sambamba katika pembe yoyote, ukifuata uso kwa kikata cha duara, cha mviringo mpana au tambarare. Angalia [Umaliziaji wa 3D](topic:finish-3d) |
| {{ui:Scallop}} | hakuna (modeli nzima) | Umaliziaji wa 3D kwa pita zilizo umbali uliowekwa kutoka kila moja juu ya uso, ili tuta lililo kati yao liwe na urefu unaouomba |

Chagua shughuli kwenye orodha ili kubadilisha zana yake, urefu (kibali, kurudisha, urefu wa malisho, juu, chini), hatua ya kushuka, umbali wa hatua, malighafi ya kuachwa, pita ya umaliziaji, kuingia (hesi, mteremko au kuchoma), kusaga kwa kupanda, vichupo au mzunguko. {{ui:Juu}} na {{ui:Chini}} hupanga upya, {{ui:Zima}} inaiacha nje, {{ui:Futa}} inaiondoa. Kila kitu kiko kwenye historia ya kutendua na kinahifadhiwa kwenye faili ya sehemu.

Umbali wa hatua wa pocket ni nusu ya kipenyo cha zana au chini yake, kwa hiyo kila nukta ya sakafu yake iko ndani ya radius moja ya zana kutoka kwenye pita. Kona za ndani zinahifadhi radius ya zana.

**Usafishaji unaojirekebisha** unaweka ushiriki wa kikata karibu na thamani moja. Ushiriki wa 0.15 wa kipenyo ni pembe ya ushiriki ya takriban 46°: upinde wa ukingo wa kikata ndani ya nyenzo. Pocket ya kukabiliana, kinyume chake, inakata upana kamili katika pita yake ya kwanza na kuzunguka zaidi katika kila kona ya ndani. Kati ya pita, zana inabaki chini mahali inapopita hewa iliyokatwa, na inainuka na kushuka tena katika hewa iliyokatwa sehemu nyingine. Pita zinahesabiwa kwenye gridi nzuri juu ya eneo (seli takriban moja ya kumi na mbili ya radius ya zana), kwa hiyo ushiriki unaweza kuzidi kwa takriban seli moja kuliko ulivyoweka; kuta zinamalizwa kwa usahihi. Eneo kubwa wazi linatengeneza programu ndefu yenye mienendo mingi mifupi.

## Iga

Njia za zana zinatengenezwa upya baada ya kila mabadiliko (za sehemu pia). {{ui:Iga}} pia inaonyesha malighafi iliyobaki baada ya programu nzima. Paneli inaonyesha:

- **Muda wa mzunguko**: mienendo ya malisho kwa malisho yake, rapid kama mistari iliyonyooka kwa kiwango cha rapid cha mpangilio, pamoja na muda wa kubadilisha zana. Mashine halisi huongeza kasi, kwa hiyo huchukua muda mrefu zaidi.
- **Mikwaruzo**: sehemu ambazo zana ilishuka zaidi ya 0.02 mm chini ya uso wa sehemu. Alama nyekundu zinaonyesha hizo kwenye mwonekano.
- **Malighafi iliyobaki kwenye sehemu**.

Malighafi ni ramani ya urefu wa juu (ramani-Z), kwa hiyo haiwezi kuonyesha sehemu zilizofichika chini. Buruta **Cheza** kusogeza zana kwenye programu. Kwenye mwonekano, mienendo ya malisho ni thabiti na rapid ni zenye vitone, rangi moja kwa kila shughuli.

Ukiwasha **Onyesha malighafi iliyoigwa**, malighafi inapakwa rangi dhidi ya modeli, seli kwa seli: **kijani** pale iko kwenye modeli (ndani ya 0.02 mm), **nyekundu** pale zana ilipokata ndani ya modeli, na pale malighafi imebaki juu ya modeli **manjano** kwa ngozi nyembamba, **chungwa** kwa zaidi, ikififia hadi **kijivu** cha malighafi isiyokatwa kwa 1 mm au zaidi. Rangi zinatengenezwa upya kwa kila mabadiliko, kutoka kwenye ramani ile ile ya urefu kama namba kwenye paneli, kwa hiyo kijani na nyekundu vinakubaliana na mstari wa Mikwaruzo. Chamfer hukata ndani ya modeli kwa makusudi na huonyesha nyekundu kando ya ukingo wake.

## Andika G-code kwa post

Chagua kidhibiti chini ya **Kichakataji** kisha bonyeza {{ui:Pakua G-code}} (au {{ui:Kichakataji}} kwenye upau wa zana):

| Kidhibiti | Faili | Maelezo |
|---|---|---|
| ISO ya mtindo wa Fanuc | .nc | %, nambari ya O, nambari za mistari, T M6 pamoja na G43 H, mizunguko iliyoandaliwa |
| GRBL | .nc | Hakuna kibadilishaji zana wala mizunguko iliyoandaliwa: kubadilisha zana kunasimama kwa M0, na kuchimba kunaandikwa kama mienendo ya kawaida |
| LinuxCNC | .ngc | T M6 pamoja na G43 H, mizunguko iliyoandaliwa, M2 |
| Lathe ya mtindo wa Fanuc | .nc | Kwa programu za kugeuza: X kama kipenyo, malisho kwa mzunguko, G96 chini ya kikomo cha G50, uzi wa G32 |
| Lathe ya LinuxCNC | .ngc | Kwa programu za kugeuza: vipenyo vya G7, G95, G96, uzi wa G33; haiandiki mwendo wa kurudi nyumbani |
| Yako mwenyewe | yoyote | Post uliyoandika au kuibadilisha: {{ui:Hariri post…}}, {{ui:Post mpya…}}, {{ui:Ingiza faili ya post…}} |

Kila faili inaanza na maoni kwa programu, malighafi, kukabiliana kwa kazi na zana. Kuratibu ziko kwa milimita zenye desimali 3. {{ui:CSV ya njia ya zana}} na {{ui:JSON ya njia ya zana}} zinahamisha mienendo yenyewe.

**Kagua matokeo kwenye kiigaji cha mashine yako kabla ya kukata, na uiendeshe hewani juu ya malighafi kwanza.** Posts tatu zilizojengwa ndani ni mahali pa kuanzia zinazofuata tabia iliyoandikwa ya vidhibiti; hazijathibitishwa kwenye mashine yoyote mahususi. Post unayoibadilisha ni yako kuithibitisha. Jinsi ya kuandika moja: [Vichakataji vya post](topic:post-processors).

## STEP halisi kwa duka

Chini ya vitufe vya G-code kwenye kichupo cha **Shughuli**, {{ui:STEP halisi (kuratibu za kazi)}} inapakua `<part>-work.step`: sehemu kama kigumu sahihi (silinda halisi kwa matundu na viinuko, miduara halisi kwa kingo zake) yenye asili yake kwenye asili ya kazi ya usanidi huu na Z kando ya mhimili wa zana. Hizo ndizo kuratibu G-code inazotumia, kwa hiyo programu ya CAM ya duka au kikagua cha duka huweka modeli sawa na programu bila kuisogeza. Faili ina sehemu pekee, si malighafi wala njia za zana.

{{ui:Hamisha nje}} › {{ui:STEP AP242 (kigumu sahihi)}} inaandika kigumu kile kile kwenye nafasi ya sehemu yenyewe (Z juu): angalia [Hamisha kwa kuchapisha, STEP na DXF](topic:export-files#for-other-cad-programs-step).

## Mipaka

- Pocket, contour, kuchimba na chamfer ni za mihimili 2.5. Sehemu zilizopinda zinakatwa kwa mbaya na kumalizwa kwa 3D na shughuli zao wenyewe ([Ukataji mbaya wa 3D na wa mabaki](topic:rough-3d), [Umaliziaji wa 3D](topic:finish-3d)). Usafishaji unaojirekebisha ni wa 2D (sakafu tambarare).
- Zana zilizoinama, umaliziaji wa shoka 5 na wa shoka ya 4, kugeuza na kuchunguza vipo, kila kimoja na mipaka yake, na **hakuna hata kimoja kimeendeshwa kwenye mashine**: angalia [Uchakataji wa shoka 4 na 5](topic:multi-axis), [Kugeuza](topic:turning) na [Kuchunguza](topic:probing).
- Mishikio na shank hazikaguliwi kwa migongano; onyo linaonekana kukata kukiwa kwa kina kuliko urefu wa mkato.
- Malisho na kasi ni thamani za kuanzia. Post ni maandishi unayoweza kuhariri, lakini huamua tu jinsi mienendo inavyoandikwa; haiwezi kubadilisha njia ya zana, kuongeza shoka au kujua mashine yako ([Vichakataji vya post](topic:post-processors) inaorodhesha isichoweza kufanya).

## Tuma programu kwenye mashine

Kwenye CadCraft Studio kwenye kompyuta ya mezani, ukiwa na mashine iliyowekwa kwenye Studio, **Tuma kwa mashine…** inaonekana kando ya **Pakua G-code** na kupakia programu hiyo hiyo kwenye mashine iliyo kwenye mtandao wako. Haianzishwi kamwe kutoka PartCraft: ianzishe kwenye mashine wakati iko wazi. Kwenye kivinjari kitufe hakionyeshwi (ukurasa wa wavuti hauwezi kufikia mashine kwenye mtandao wako): pakua programu badala yake.
