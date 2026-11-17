---
title: Fungua faili ya STEP na ujenge juu yake
summary: Leta modeli ya STEP ya msambazaji au ya programu nyingine ya CAD kwenye PartCraft kama kitu kigumu, kama sehemu mpya au iliyoongezwa kwenye ile ya sasa, weka upande upi ni juu, na ongeza michoro na vipengele kwake.
keywords: step, stp, ingiza, fungua step, ap203, ap214, ap242, modeli ya msambazaji, kitu kigumu kisicho na historia, kitu kigumu kilichoingizwa, mhimili wa juu, z juu, y juu, pembetatu, nyuso tambarare, STEP ya mkusanyiko
from: ca0eca5f
---

PartCraft inafungua faili za STEP (`.step` au `.stp`, AP203, AP214 na AP242) kama **vitu vigumu** unavyoweza kuchora juu yake, kukata, kutoboa na kuunganisha na vipengele vyako mwenyewe. Kitu hakina historia yake: huwezi kubadilisha vipimo vilivyokitengeneza, unaweza tu kuongeza juu yake au kukata kutoka kwake.

Toleo hili linajenga kila sehemu kwa kernel ya mesh, kwa hiyo faili ya STEP **inasomwa kama pembetatu**: nyuso tambarare zinabaki tambarare, na nyuso zilizopindika (silinda, koni, duara, torus, nyuso za B-spline) zinakuwa nyuso nyingi ndogo tambarare. Ujazo wake unakaribia ule sahihi kwa sehemu ndogo ya asilimia. Kuweka nyuso zilizopindika kikamilifu kunahitaji kernel sahihi, ambayo haipo katika toleo hili.

## Fungua faili ya STEP

1. Chagua {{ui:Fungua}} au bonyeza {{key:Mod+O}}, kisha chagua faili ya `.step` au `.stp`. Au iangushe kwenye mwonekano wa 3D.
2. PartCraft inasoma faili na kuonyesha ilichokipata, kwa mfano: "Faili ya AP214: solidi 1, nyuso 10, imesomwa kama pembetatu." Chini yake kuna idadi ya pembetatu, chochote ilichoshindwa kuacha au kuunganisha, na kama matokeo yanafunga.
3. Angalia **Juu katika faili**. Faili ya STEP inataja kipimo chake (milimita, inchi, mita…); PartCraft inabadilisha kuwa milimita, kwa hiyo **Vipimo katika faili** inaonyesha Milimita, "faili inasema hivyo". **Ukubwa hapa** inaonyesha itakavyokuwa kubwa.
4. Chagua {{ui:Fungua kama kitu}} kwa sehemu tupu, au {{ui:Ongeza kwenye sehemu hii}} / {{ui:Sehemu mpya}} wakati sehemu tayari ina vipengele. Kuongeza kunauliza **Tumia kwa** kufanya nini: ongeza, kata, au weka tu sehemu inayoingiliana.

Kipengele **Imported1** kinaonekana kwenye historia, na upau wa hali unasema, kwa mfano, "plate.step ni kitu kigumu: 57995.937 mm³, nyuso tambarare 6 za kuchora juu yake."

## STEP ya mkusanyiko

Mkusanyiko unaingia kama **kitu kimoja** chenye kila sehemu mahali ilipowekwa kwenye faili ("sehemu 3 zilizowekwa kwenye faili zinaingia zilipo"). Sehemu iliyotumika mara mbili inaingia mara mbili. Majina ya sehemu na mti wa mkusanyiko havihifadhiwi.

## Weka upande upi ni juu

Programu nyingi za CAD zinatumia Z juu; PartCraft inatumia Y juu. Kwa chaguo-msingi PartCraft inageuza faili ili Z yake ielekee juu hapa. Sehemu ikifika ikiwa imelala kwenye upande wake, chagua **Imported1** na weka **Juu katika faili** kuwa **Y juu**. **Vipimo katika faili** na **Tumia kwa** pia vinaweza kubadilishwa hapo; kila mabadiliko ni hatua moja ya kutendua.

## Jenga juu yake

- Bofya uso tambarare wa kitu kisha chagua {{ui:Mchoro wa awali juu ya uso huu}}. Nyuso tambarare za modeli ya STEP zinabaki mahali pake kitu kinapojengwa upya.
- Ongeza mikato, matundu, matuta, mifumo na vioo kama kwenye sehemu yoyote.
- Angalia ukubwa wake kwenye kisanduku cha **Sehemu**: ujazo, eneo la uso, ukubwa.

Viringo vya kingo, chamfa na ganda zinahitaji kernel sahihi, kama kwenye sehemu yoyote katika toleo hili ([Kernel ya mesh](topic:solid-kernels)).

## Inapohifadhiwa

Pembetatu zinahifadhiwa **ndani** ya faili la `.partcraft.json`, kwa hiyo faili ya sehemu inajitosheleza: hauhitaji faili ya STEP tena.

## Ujumbe

| Ujumbe | Maana yake |
|---|---|
| '"part.stp" si faili ya STEP (haianzi na ISO-10303-21).' | Faili si maandishi safi ya STEP. Omba mtumaji faili ya STEP ya AP203, AP214 au AP242 |
| "Faili ya STEP haikuweza kusomwa: sehemu yake ya data haipo au imeharibika." | Faili imekatika au imeharibika. Inakili upya |
| "Faili ya STEP haina kitu kigumu wala cha uso: hakuna cha kuingiza." | Faili ina michoro, nukta au data tu. Omba kitu kigumu |
| "Faili hiyo ya STEP ni kubwa mno (zaidi ya MB 60) kuingizwa hapa." na mipaka mingine ya msomaji (maingizo, nyuso, pembetatu) | Rahisisha modeli kwenye chanzo, au tuma sehemu moja moja |
| "… mistari iliyoharibika kwenye faili iliruka." | Baadhi ya mistari haikusomeka; iliyobaki iliingia. Angalia kitu |
| "… nyuso hazikuweza kugeuzwa pembetatu na ziliachwa." | Nyuso hizo huacha matundu, PartCraft inajaribu kuyajaza; kitu kisipofunga, hakiongezwi |
| "… nyuso za aina ambayo haisomwi (…) ziliruka." | Aina adimu ya uso. Omba modeli yenye nyuso rahisi au B-spline |
| "Haifungi …" | Nyuso hazifanyi kitu kigumu kilichofungwa (modeli ya uso, au nyuso zilizoachwa). PartCraft inaonyesha mapengo na haiongezi chochote |

## Mipaka

- Nyuso zilizopindika zinachorwa na kupimwa kama vipande tambarare, kama kwenye kila sehemu ambayo toleo hili linajenga. PartCraft inahifadhi nyuso tambarare, silinda, koni, duara na torus za faili pamoja na kitu, hivyo {{ui:Hamisha nje}} › {{ui:STEP AP242 (kigumu sahihi)}} zinaziandika tena kama nyuso halisi, matundu kama matundu, pamoja na vipengele unavyoongeza. Nyuso ambazo faili inazitoa kama spline, sweep au nyuso za mzunguko zinabaki vipande kwenye hamisho. Sehemu iliyohifadhiwa kabla ya 0.9.1 haina nyuso zilizohifadhiwa: fungua tena faili ya STEP ili uzipate.
- {{ui:Hamisha nje}} › {{ui:DXF ya mchoro au uso tambarare}} ikiwa uso tambarare umechaguliwa, inaandika tundu la mviringo la faili kama duara halisi.
- Rangi, majina ya vitu, muundo wa mkusanyiko na PMI (uvumilivu uliomo kwenye faili) hazisomwi.
- Mbali na STEP, PartCraft inafungua matundu ya STL, OBJ na 3MF ([Fungua STL, OBJ au 3MF](topic:open-meshes)) na faili za `.3dm` ([Fungua modeli ya .3dm](topic:open-3dm-files)) kama vitu vigumu. IGES na faili asili za programu nyingine hazitumiki.
- Sehemu yenye kitu kigumu cha STEP kilichoingizwa na toleo lenye kernel sahihi inahifadhi maandishi ya STEP; toleo hili linaruka kipengele hicho ("bado hakijajengwa"). Fungua tena faili ya STEP ili kuiingiza kama pembetatu.
