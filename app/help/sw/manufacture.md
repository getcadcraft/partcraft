---
title: Tengeneza njia za zana na G-code (Manufacture)
summary: Weka malighafi na asili ya kazi, chagua zana, ongeza operesheni za uso, pocket, contour, kuchimba na chamfer kwa kuchagua nyuso, maliza modeli nzima kwa 3D (sambamba, scallop), iga malighafi dhidi ya modeli kwa mikwaruzo na muda wa mzunguko, kisha pakua G-code kutoka mojawapo ya post tatu zilizojengewa ndani au moja unayohariri mwenyewe.
keywords: exact step, step kwa warsha, viwianishi vya kazi, makabidhiano ya cam, sambamba, scallop, umalizio wa 3d, umalizio, ball nose, maktaba ya zana, hariri post, post maalum, mhariri wa post, adaptive, adaptive clearing, constant engagement, trochoidal, hsm, high speed machining, manufacture, CAM, toolpath, G-code, NC, CNC, mill, milling, pocket, contour, profile, facing, drill, peck, G83, G81, G73, chamfer, malighafi, offset ya kazi, G54, post processor, GRBL, LinuxCNC, kasi za malisho na mzunguko, uigaji, gouge, muda wa mzunguko
from: beeb29aa
---

Sehemu ya kazi ya Manufacture hugeuza sehemu kuwa njia za zana kwa mashine ya kusaga ya mihimili 3 na kuziandika kama G-code. Operesheni nyingi ni **2.5-axis**: zana inabaki wima, kuta hukatwa moja kwa moja chini na sakafu ni bapa. **Sambamba** na **Scallop** humalizia nyuso zilizopinda kwa 3D (tazama [Umalizio wa 3D](topic:finish-3d)); zana bado inabaki wima (mihimili mitatu, bila kuinamisha). Inafanya kazi kwenye nyuso zilizotajwa ambazo mesh kernel hutoa kwa sehemu (tazama [Mesh kernel](topic:solid-kernels)).

Toleo la maabara: kagua kila programu kwenye kiigaji cha kidhibiti chako yenyewe, na uiendeshe hewani juu ya malighafi kwanza.

## Weka

1. Chagua **Manufacture** kwenye kibadilishaji cha eneo la kazi, kisha {{ui:New setup}}.
2. Kwenye kichupo cha **Setup** chagua:
   - **Tool axis (+Z)**: zana inaelekea wapi ndani ya sehemu. Dunia +Y (juu ya PartCraft) ndiyo chaguo-msingi; X ya mashine basi ni X ya dunia, na Y ya mashine ni −Z ya dunia.
   - **Work origin (G54)**: kona ya malighafi au katikati, juu au chini, katikati ya juu ya modeli, au asili ya modeli.
   - **Stock**: kisanduku au silinda, ama modeli pamoja na nyongeza (pande, juu, chini) au saizi isiyobadilika.
   - **Material** (huweka kasi za awali za malisho na mzunguko), **post** (kidhibiti), kasi ya juu zaidi ya spindle ya mashine, kasi ya haraka na muda wa kubadili zana, kipozezi na nambari ya programu.

## Zana

Kichupo cha **Tools** kina maktaba: vikata vya mwisho bapa, vya mpira na vya bull nose, drill, vikata vya chamfer na vikata vya uso, kila kimoja na nambari yake ya T, kipenyo, filimbi na urefu wa filimbi (pamoja na radius ya kona, pembe ya nukta au chamfer pale zinapohusika).

Zana zangu zinaweza kuhifadhiwa kwenye kivinjari na kuhamishwa kati ya kompyuta kama faili: tazama [Maktaba ya zana](topic:tool-library).

Kasi ya spindle na malisho hutoka kwenye nyenzo: n = 1000 × kasi ya kukata / (π × kipenyo), malisho = n × filimbi × mzigo wa chip (drill: n × malisho kwa mzunguko). Nambari ni thamani za awali za tahadhari kutoka kwenye safu zilizochapishwa, si zilizorekebishwa kwa mashine yako; andika kasi ya kukata, mzigo wa chip, rpm au malisho ya mtengenezaji wa zana yako ili kuzipita. Kasi ikizidi kiwango cha juu cha mashine, inashikiliwa hapo na malisho hufuata, ili mzigo wa chip ubaki.

## Ongeza operesheni

Kila kitufe cha upau wa zana huongeza operesheni, na pale inapohitaji jiometri, huanza kuchagua: bofya nyuso au kingo kwenye mwonekano (bofya tena ili uondoe moja), kisha {{ui:Imekamilika kuchagua}} au {{key:Esc}}.

| Operesheni | Chagua | Inafanya nini |
|---|---|---|
| {{ui:Face}} | hakuna | Pasi za zig-zag juu ya malighafi yote, zikipita kingo zake, hadi juu ya modeli |
| {{ui:Pocket}} | uso bapa wa sakafu, shimo la duara, au mnyororo uliofungwa wa kingo | Husafisha eneo kwa pasi za ofseti kutoka ndani kwenda nje, kwa kila hatua ya kushuka; visiwa (nyuso zilizosimama ndani ya sakafu) huachwa; sakafu iliyo wazi pande zote (hakuna kilichoinuka nje yake) husafishwa hadi ukingo wa malighafi |
| {{ui:Adaptive}} | sawa na Pocket | Husafisha eneo lile lile kwa pasi ambazo kila moja hukata upana uliowekwa (**Engagement**, sehemu ya kipenyo), ili kikata kisichukue mpasuo kamili kamwe, hata kwenye pembe; huingia kwa hélix na kumaliza kuta kila ngazi. Mikato myembamba inaruhusu kushuka kwa kina zaidi na malisho ya juu zaidi |
| {{ui:Contour}} | uso bapa (mstari wake wa nje), uso wa duara, au kingo | Hufuata mstari wa nje ulioofsetiwa kwa radius ya zana, nje au ndani, pamoja na matao ya kuingia na kutoka na vichupo vya hiari |
| {{ui:Drill}} | mashimo (bofya ukuta wa shimo au ukingo wake) | Huchimba kila shimo kwa mzunguko uliowekwa: peck (G83), drill (G81) au chip break (G73); au toa kipenyo ili kuchimba kila shimo la ukubwa huo |
| {{ui:Chamfer}} | mstari wa nje wa uso au kingo | Huendesha kikata cha chamfer kando ya kingo ili ikate upana uliouweka |
| {{ui:Parallel}} | hakuna (modeli nzima) | Umalizio wa 3D kwa mistari sambamba kwa pembe yoyote, ukifuata uso kwa kikata cha mpira, bull-nose au bapa. Tazama [Umalizio wa 3D](topic:finish-3d) |
| {{ui:Scallop}} | hakuna (modeli nzima) | Umalizio wa 3D kwa pasi zilizo umbali uliowekwa mbali juu ya uso, ili ukingo kati yake uwe na urefu unaouomba |

Chagua operesheni kwenye orodha ili ubadilishe zana yake, urefu (kibali, kurudi, urefu wa malisho, juu, chini), hatua ya kushuka, hatua ya upana, malighafi iliyobaki, pasi ya umalizio, kuingia (hélix, ramp au plunge), kusaga kwa kupanda, vichupo au mzunguko. {{ui:Up}} na {{ui:Down}} hupanga upya, {{ui:Suppress}} huacha operesheni nje, {{ui:Delete}} huiondoa. Kila kitu kiko kwenye historia ya kutendua na kinahifadhiwa kwenye faili la sehemu.

Hatua ya upana wa pocket ni kiwango cha juu nusu ya kipenyo cha zana, ili kila nukta ya sakafu yake iwe ndani ya radius moja ya zana ya pasi. Pembe za ndani zinahifadhi radius ya zana.

**Usafishaji wa adaptive** huweka ushiriki wa kikata karibu na thamani moja. Ushiriki wa 0.15 ya kipenyo ni pembe ya ushiriki ya takriban 46°: upinde wa ukingo wa kikata ndani ya nyenzo. Pocket iliyoofsetiwa, kwa kulinganisha, hukata upana kamili kwenye pasi yake ya kwanza na hujizungusha zaidi kwenye kila pembe ya ndani. Kati ya pasi zana inabaki chini inapopita hewa iliyokatwa, na huinuka na kushuka kwenye hewa iliyokatwa mahali pengine. Pasi zinakokotolewa kwenye gridi nzuri juu ya eneo (seli takriban moja ya kumi na mbili ya radius ya zana), kwa hivyo ushiriki unaweza kwenda hadi seli moja pana kuliko ulivyoweka; kuta zinamalizwa kwa usahihi. Eneo kubwa lililo wazi hutengeneza programu ndefu yenye mienendo mingi mifupi.

## Iga

Njia za zana hutengenezwa upya baada ya kila mabadiliko (za sehemu pia). {{ui:Simulate}} pia huonyesha malighafi iliyobaki baada ya programu nzima. Paneli inaonyesha:

- **Muda wa mzunguko**: mienendo ya malisho kwa malisho yao, mienendo ya haraka kama mistari iliyonyooka kwa kasi ya haraka ya usanidi, pamoja na muda wa kubadili zana. Mashine halisi huongeza kasi, kwa hivyo huchukua muda zaidi.
- **Mikwaruzo**: sehemu ambapo zana ilienda zaidi ya 0.02 mm chini ya uso wa sehemu. Alama nyekundu zinaonyesha hizo kwenye mwonekano.
- **Malighafi iliyobaki kwenye sehemu**.

Malighafi ni ramani ya urefu ya juu (Z-map), kwa hivyo haiwezi kuonyesha sehemu zilizo chini ya kingo. Buruta **Playback** kusogeza zana kando ya programu. Kwenye mwonekano, mienendo ya malisho ni mistari imara na mienendo ya haraka ni mistari yenye nukta, rangi moja kwa kila operesheni.

Ukiwa umewasha **Show the simulated stock**, malighafi hupakwa rangi kulingana na modeli, seli kwa seli: **kijani** pale iko kwenye modeli (ndani ya 0.02 mm), **nyekundu** pale zana ilikata ndani ya modeli, na pale malighafi imebaki kwenye modeli **njano** kwa ngozi nyembamba, **chungwa** kwa zaidi, ikififia hadi **kijivu** cha malighafi isiyokatwa kwa 1 mm au zaidi. Rangi hutengenezwa upya kwa kila mabadiliko, kutoka kwenye ramani ile ile ya urefu kama nambari za paneli, kwa hivyo kijani na nyekundu vinakubaliana na mstari wa Mikwaruzo. Chamfer hukata ndani ya modeli kwa makusudi na huonyesha nyekundu kando ya ukingo wake.

## Toa G-code kupitia post

Chagua kidhibiti chini ya **Post** na bonyeza {{ui:Download G-code}} (au {{ui:Post}} kwenye upau wa zana):

| Kidhibiti | Faili | Maelezo |
|---|---|---|
| Fanuc-style ISO | .nc | %, nambari ya O, nambari za mistari, T M6 yenye G43 H, mizunguko iliyowekwa |
| GRBL | .nc | Hakuna kibadilishaji zana wala mizunguko iliyowekwa: kubadili zana husimama kwa M0, kuchimba kunaandikwa kama mienendo ya kawaida |
| LinuxCNC | .ngc | T M6 yenye G43 H, mizunguko iliyowekwa, M2 |
| Yako mwenyewe | yoyote | Post uliyoandika au kubadilisha: {{ui:Edit post…}}, {{ui:New post…}}, {{ui:Import post file…}} |

Kila faili huanza na maoni kwa programu, malighafi, offset ya kazi na zana. Viwianishi viko kwa milimita, na desimali 3. {{ui:Toolpath CSV}} na {{ui:Toolpath JSON}} husafirisha mienendo yenyewe.

**Kagua matokeo kwenye kiigaji cha mashine yako kabla ya kukata, na uiendeshe hewani juu ya malighafi kwanza.** Post tatu zilizojengewa ndani ni pointi za kuanzia zinazofuata tabia ya vidhibiti iliyoandikwa; hazijathibitishwa kwenye mashine yoyote mahususi. Post unayobadilisha ni yako kuithibitisha. Jinsi ya kuandika moja: [Post processors](topic:post-processors).

## STEP halisi kwa warsha

Chini ya vitufe vya G-code kwenye kichupo cha **Operations**, {{ui:Exact STEP (work coordinates)}} hupakua `<part>-work.step`: sehemu kama kigumu sahihi (silinda halisi kwa mashimo na matuta, duara halisi kwa kingo zake) na asili yake kwenye asili ya kazi ya usanidi huu, na Z kando ya mhimili wa zana. Hizo ndizo viwianishi ambavyo G-code inatumia, kwa hivyo programu ya CAM ya warsha au kikagua chake kinapanga modeli na programu bila kuisogeza. Faili lina sehemu tu, si malighafi wala njia za zana.

{{ui:Export}} › {{ui:STEP AP242 (kigumu sahihi)}} huandika kigumu kile kile kwenye nafasi ya sehemu yenyewe (Z juu): tazama [Hamisha kwa uchapishaji, STEP na DXF](topic:export-files#for-other-cad-programs-step).

## Mipaka

- Pocket, contour, kuchimba na chamfer ni 2.5-axis. Nyuso zilizopinda zinaweza kumalizwa kwa 3D ([sambamba na scallop](topic:finish-3d)) lakini si kukatwa mbaya kwa 3D (koni inabaki kama ngazi hadi uimalize), na hakuna machining ya mabaki. Usafishaji wa adaptive ni 2D (sakafu bapa).
- Mihimili mitatu tu: hakuna kuinamisha, hakuna kugeuza, hakuna ukaguzi.
- Vishikio na shanks havikaguliwi migongano; onyo huonekana kukata kukiwa kwa kina kuliko urefu wa filimbi.
- Malisho na kasi ni thamani za kuanzia. Post ni maandishi unayoweza kuhariri, lakini huamua tu jinsi mienendo inavyoandikwa; haiwezi kubadilisha njia ya zana, kuongeza mihimili au kujua mashine yako ([Post processors](topic:post-processors) inaorodhesha isichoweza kufanya).

## Tuma programu kwa mashine

Kwenye CadCraft Studio ya eneo-kazi, pamoja na mashine iliyowekwa kwenye Studio, **Send to a machine…** huonekana kando ya **Download G-code** na hupakia programu ile ile kwenye mashine iliyo kwenye mtandao wako. Haianzishwi kamwe kutoka PartCraft: anzisha kwenye mashine wakati iko wazi. Kwenye kivinjari kitufe hakionekani (ukurasa wa wavuti hauwezi kufikia mashine kwenye mtandao wako): pakua programu badala yake.
