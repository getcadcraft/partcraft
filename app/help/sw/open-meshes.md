---
title: Fungua STL, OBJ au 3MF kama mwili kigumu
summary: Geuza mesh kutoka kwa skana, tovuti ya uchapishaji wa 3D au programu nyingine kuwa kigumu unachoweza kukata, kuongeza na kuchora juu yake; PartCraft inarekebisha nini njiani, na kisichoweza.
keywords: stl, obj, 3mf, mesh, mesh kuwa kigumu, geuza mesh, skani, kufunga kikamilifu, rekebisha, mashimo, mapengo, vitengo, mhimili wa juu, mwili uliongizwa, nyuso bapa
from: 7b948471
---

PartCraft hufungua mesh za STL, OBJ na 3MF kama **miili migumu**. Mwili hufanya kazi kama kigumu kingine chochote: ukate, ongeze kwake, chimba, panga mifumo, tumia kwenye mkusanyiko au kwa uchakataji, na chora kwenye nyuso zake bapa. Haina historia yake yenyewe: mesh ni pembetatu tu, kwa hiyo ukubwa wake hauwezi kubadilishwa, unaweza tu kuongezwa au kukatwa.

## Fungua mesh

1. Chagua {{ui:Open}} au bonyeza {{key:Mod+O}}, kisha chagua faili la `.stl`, `.obj` au `.3mf`. Au liangushe kwenye mwonekano wa 3D.
2. PartCraft inalisoma, inarekebisha kile inachoweza kwa usalama, na kuonyesha kilichopatikana: pembetatu na pointi ngapi, kila urekebishaji, na kama mesh sasa **inafunga**.
3. Angalia **Units in the file** na **Up in the file**. STL na OBJ hazisemi vitengo vyake, kwa hiyo milimita ni dhana; faili la 3MF linasema lake. Mstari wa **Size here** unaonyesha ukubwa wa mwili kwa chaguo lako, kwa hiyo sehemu inayoingia mara 25.4 ndogo ni rahisi kuiona (ilikuwa kwa inchi).
4. Ikiwa sehemu iliyo kwenye skrini ni tupu, chagua {{ui:Open as a body}}. Ikiwa tayari ina vipengele, chagua **Use it to** (iongeze kwenye sehemu, ikatwe kutoka kwake, au ibaki na mwingiliano pekee), kisha {{ui:Add to this part}}, au {{ui:New part}} kuanza upya na mesh.

Kipengele cha **Imported1** huonekana kwenye historia. Upau wa hali unasema, kwa mfano, "bracket.stl is a solid body: 15200.512 mm³, 14 flat faces to sketch on."

## Kile PartCraft inarekebisha

| Urekebishaji | Maana yake |
|---|---|
| Vona zilizorudiwa zimeunganishwa | STL hurudia kila vona kwa kila pembetatu yake; zinaunganishwa kuwa pointi moja |
| Pembetatu zisizo na eneo huondolewa | Vipande vyembamba sana ambavyo vona zake ziko kwenye mstari mmoja |
| Pembetatu zilizorudiwa huondolewa | Pembetatu iliyoandikwa mara mbili huhifadhiwa mara moja; mbili zinazotazama pande tofauti (ukuta wa ndani) zote huondolewa |
| Mapengo madogo yamefungwa | Kingo zinazokaribiana sana (ndani ya elfu moja ya ukubwa wa sehemu) zinaunganishwa |
| Mashimo yanajazwa | Ufunguzi ambao mpaka wake uko bapa hujazwa, bila kujali ukubwa wake; uliopinda hujazwa tu ukiwa mdogo |
| Pembetatu zinageuzwa kutazama nje | Pembetatu zinazotazama upande mbaya hugeuzwa ziendane na jirani zake, na uso mzima ukatazama nje |

## Pale mesh isipofunga

Kigumu kinahitaji uso usio na ufunguzi. PartCraft isipoweza kuufunga, mazungumzo yanasema ni fursa ngapi na kingo wazi zimebaki, na hakuna mwili wa kuongeza. Funga fursa kwenye programu iliyotengeneza mesh, au hamisha tena kama mesh iliyofungwa kikamilifu (watertight), kisha ufungue tena.

PartCraft huacha ufunguzi peke yake pale kuujaza kunaweza kukisia vibaya: shimo kubwa lililopinda, au fursa mbili kwenye ndege moja (uso wa pete uliokosekana, ambapo kujaza kila mpaka kungefunika shimo katikati). Kingo inayoshirikiwa na pembetatu zaidi ya mbili pia huripotiwa: uso kama huo hauna ndani moja wazi.

## Chora kwenye nyuso zake bapa

Maeneo bapa yaliyotengenezwa kwa pembetatu nyingi huunganishwa kuwa **uso bapa** mmoja kila moja, ili mchoro uweze kukaa juu yake: bofya uso kisha chagua {{ui:Sketch on this face}}. Uso unaokatwa au kuongezwa baadaye unabaki kuwa uso. Maeneo ya mviringo (shimo, fillet) hubaki pembetatu: si nyuso unazoweza kuchagua, na mwonekano huchora mstari wao kutoka pembe kati ya pembetatu.

## Ibadilishe baadaye

Chagua **Imported1** kuona faili ilikotoka, pembetatu ngapi ina na kilichorekebishwa. **Units in the file**, **Up in the file** na **Use it to** vinaweza kubadilishwa hapo; kila mabadiliko ni hatua moja ya kutendua.

## Mahali inapohifadhiwa

Mesh iliyorekebishwa huhifadhiwa **ndani** ya faili la `.partcraft.json`, kwa hiyo huhitaji faili la mesh tena. Faili la sehemu lenye mwili wa mesh ni toleo la 5: PartCraft ya zamani huikataa kwa toleo lake. Mesh ya pembetatu 200,000 huongeza takriban MB 1.2.

## Mipaka

- Upeo wa pembetatu milioni 3 na 200 MB kwenye faili moja.
- Mwili uliotengenezwa kutoka mesh hujengwa na mesh kernel. Ukiwasha kernel sahihi (kwa wasanidi pekee), inaonyesha hivyo na haijengwi.
- Vifaa vya OBJ, viwianishi vya umbile na mikunjo huru huachwa nje; rangi, vifaa na vitu vya usaidizi vya 3MF huachwa nje (mazungumzo yanasema vitu vingapi vimeruka).
- Mwili ni laini kama mesh: STL mbaya huleta nyuso za mviringo mbaya. Mashimo unayochimba ndani yake ni ya mviringo kama vipengele vyako mwenyewe.
