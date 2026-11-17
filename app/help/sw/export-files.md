---
title: Hamisha kwa uchapishaji, STEP na DXF
summary: Hamisha sehemu kama STL au 3MF kwa uchapishaji wa 3D, kama kigumu sahihi cha STEP kwa programu nyingine za CAD na CAM, na mchoro wa awali au uso bapa kama DXF kwa kukata kwa leza na ndege ya maji.
keywords: hamisha, hifadhi kama, ifc, bim, seti za sifa, stl, 3mf, uchapishaji wa 3d, slicer, step, stp, step sahihi, b-rep, ap242, ap214, cam, duka la mashine, kusaga, dxf, leza, ndege ya maji, cnc, mchoro bapa, wasifu, matundu, yenye nyuso bapa
from: e1de71d5
---

Hamisha ni nakala katika miundo mingine. Hifadhi pia faili la `.partcraft.json`: ndilo faili pekee ambalo PartCraft inaweza kulifungua tena na kulihariri.

Hamisha zote hufanya kazi kwenye sehemu iliyo kwenye skrini, kwa milimita. Katika mkusanyiko, STL, 3MF, STEP na Mchoro (PDF) huhamisha mkusanyiko mzima badala yake: tazama [Orodha ya sehemu, mionekano iliyotenganishwa na sehemu zinazosogea](topic:assembly-bom-explode). Ikiwa bado hakuna kigumu: "Bado hakuna kigumu cha kuhamisha."

## Kwa uchapishaji wa 3D: STL au 3MF

1. Hiari: kwa nyuso laini za duara, bofya nafasi tupu ili hakuna kitu kilichochaguliwa, kisha weka **Mikunjo** kuwa **Laini (128 kwa zamu)** au **Laini sana (256 kwa zamu)** kwenye paneli ya kulia. STL na 3MF huundwa kila wakati kwa pembetatu.
2. Chagua {{ui:Hamisha nje}}, kisha {{ui:STL, kwa uchapishaji wa 3D}} au {{ui:3MF, kwa uchapishaji wa 3D}}.
3. Faili hupakuliwa. Upau wa hali unasema, kwa mfano, "Imehamishwa Part1.stl (binary, mm, Z juu, pembetatu 1536)."

Miundo yote miwili ni **Z juu**, kama printa na programu za kukata zinavyotarajia. Ulimwengu wa PartCraft ni Y juu, kwa hiyo hamisha huzungusha sehemu: kile kinachoelekea juu katika PartCraft (kiko mraba kwa ndege ya Top) kinaelekea juu katika programu ya kukata, na sehemu iliyochorwa kwenye ndege ya Top hulala bapa kwenye kitanda. Weka mwelekeo wa mwisho kwenye programu yako ya kukata ikihitajika.

3MF ni muundo mpya na mdogo zaidi ambao programu za kukata husoma pamoja na vitengo. Tumia STL ikiwa programu haikubali 3MF.

Ili kukagua kwanza kwamba sehemu imefungwa, inatoshea kitanda cha printa yako na inasimama kwenye uso bapa, tumia {{ui:Hamisha nje}} › {{ui:Kagua uchapishaji wa 3D (STL au 3MF)…}}: tazama [Andaa sehemu kwa uchapishaji wa 3D](topic:print-3d).

## Kwa programu nyingine za CAD: STEP

Chagua {{ui:Hamisha nje}}, kisha {{ui:STEP AP242 (kigumu sahihi)}}. Hii huandika sehemu kama kigumu kimoja sahihi, kwa milimita, na kuigeuza kuwa Z juu. Nyuso za duara huandikwa kama silinda, koni, duara na torasi halisi, zenye miduara halisi kwa kingo zake, ili programu nyingine iweze kuchagua tundu kama tundu. Mwili uliofunguliwa kutoka faili la STEP huhifadhi nyuso bapa, silinda, koni, duara na torasi za faili hilo, kwa hiyo nazo hutoka sahihi. Nyuso zisizo na uso kama huo (upande wa spline, uzi uliomodelwa, mwili kutoka mesh ya STL, OBJ au 3MF, spline ya faili la STEP, nyuso zilizoshonwa na zilizozungushwa) hubaki facet bapa ndani ya kigumu hicho hicho, na upau wa hali unasema zilivyo nyingi. Upau wa hali unasema, kwa mfano, "Imehamishwa Flange.step (AP242, kigumu sahihi, mm, Z juu): nyuso 14 kwenye nyuso zao halisi (10 za silinda, 1 ya koni, 0 za duara, 0 za torasi), kingo 0 za mikunjo zilizowekwa." Inashikilia kigumu pekee: hakuna historia, hakuna michoro ya awali, hakuna mchoro. Ikiwa programu nyingine inasoma AP214 pekee, chagua {{ui:STEP AP214 (kigumu sahihi)}}: kigumu hicho hicho katika skimu hiyo ya zamani.

Kilicho sahihi na kisicho sahihi:

- Nyuso bapa, silinda (matundu, boss, fillet kwenye kingo zilizonyooka), koni (countersink, mteremko), duara na torasi ni sahihi, na ndivyo kingo zake za mstari, duara na elipsi. Mpangilio wa **Mikunjo** hauzibadilishi.
- Pale nyuso mbili za duara zinapokatiza (tundu lililochimbwa kuvuka shimoni), kingo ni mkunjo laini uliowekwa kwa nyuso zote mbili ndani ya 0.00001 mm; "mikunjo ya kingo iliyowekwa" huzihesabu.
- Ujazo uliofungwa ndani ya sehemu huandikwa kama tupu la kigumu. Miili kadhaa tofauti huandikwa kama vigumu kadhaa.
- Mkusanyiko bado haujaandikwa kama STEP sahihi: hamisha kila sehemu.

Ilikaguliwa kwa kusoma faili tena katika OpenCascade, ambayo huripoti vigumu halali vyenye ujazo uliokokotolewa kwa mkono. Bado haijafunguliwa katika kila programu ya CAD au CAM; ikiwa moja inakataa faili, {{ui:STEP (yenye nyuso bapa, kernel ya matundu)}} huandika umbo lilelile kama nyuso bapa (katika shoka za PartCraft, Y juu), na tafadhali tuambie kupitia {{ui:Msaada}} › {{ui:Ripoti tatizo}}.

Kwa uchakataji, nafasi ya kazi ya Manufacture pia huandika kigumu sahihi katika kuratibu za kazi za usanidi: tazama [Tengeneza njia za zana na G-code](topic:manufacture#exact-step-for-the-shop).

## Kwa programu za BIM: IFC yenye kila sifa

Chagua {{ui:Hamisha nje}}, kisha {{ui:IFC 4 (pamoja na kila sifa)}}. Hii huandika sehemu kama kipengele cha IFC 4 kwa miundo ya majengo na mitambo, umbo lake kama pembetatu (Z juu, milimita), pamoja na kile PartCraft inachojua kuhusu kipengele hicho kama seti za sifa:

| Seti ya sifa | Inashikilia |
|---|---|
| **PartCraft_Part** | Jina, nyenzo na msongamano wake, usanidi unaotumika, idadi ya miili; katika mkusanyiko pia nambari ya sehemu na maelezo |
| **PartCraft_Parameters** | Kila kigezo cha sehemu chenye thamani yake; usemi wa fomula na dokezo viko kwenye maelezo ya sifa |
| **PartCraft_TitleBlock** | Sehemu za kichwa cha mchoro ulizojaza (kichwa, nambari ya mchoro, marekebisho, kampuni, kilichochorwa, kilichokaguliwa na kuidhinishwa na, tarehe, umaliziaji, uvumilivu wa jumla) na ukubwa wa karatasi |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Ujazo, eneo la uso, uzito (pamoja na nyenzo) na ukubwa wa jumla |

Nyenzo imeambatishwa kama nyenzo ya IFC, na nambari ya mchoro ni lebo ya kipengele. Katika mkusanyiko, kila sehemu huandikwa mara moja kama aina inayoshikilia sifa zake, na kila nakala huwekwa pale mkusanyiko unapoiweka, pamoja na thamani zake katika **PartCraft_Instance**: jina lake, nambari yake ya kipengee kwenye orodha ya vifaa, na kama ni sehemu iliyowekwa chini.

## Kwa wasifu wa leza, ndege ya maji au CNC: DXF

Aina mbili za DXF, zote toleo R12, ambalo kila programu ya CAD na CAM hufungua:

### Mchoro wa awali

1. Chagua mchoro wa awali kwenye historia (au uufungue).
2. Chagua {{ui:Hamisha nje}}, kisha {{ui:DXF ya mchoro au uso tambarare}}. (Paneli ya kulia ya mchoro wa awali pia ina {{ui:Hamisha kama DXF}}.)

Utapata `<part> - <sketch>.dxf` katika kuratibu za mchoro wenyewe: mistari, safu na duara halisi kwenye tabaka **PROFILE**, jiometri ya ujenzi kwenye **CONSTRUCTION**, na nukta huru kwenye **POINTS**.

### Uso bapa wa kigumu

1. Bofya uso bapa kwenye mwonekano (kwa mfano, juu ya bamba lenye matundu).
2. Chagua {{ui:Hamisha uso kama DXF}} kwenye paneli ya kulia, au {{ui:Hamisha nje}}, kisha {{ui:DXF ya mchoro au uso tambarare}}.

Utapata `<part> - face.dxf`: mtaro wa uso na kila tundu lililomo. Tundu la duara (mduara mzima pale silinda inapokutana na uso: tundu lililochimbwa, au tundu la faili la STEP lililofunguliwa) huandikwa kama duara halisi lenye kituo na radius ya tundu lenyewe. Kila mtaro mwingine ni polilaini iliyofungwa, na kingo zake za duara (pembe za fillet, nafasi, mikunjo) ni facet zake, kwa hiyo weka **Mikunjo** kuwa Laini kwanza ikiwa kikata kinazifuata kwa karibu. Upau wa hali unasema mitaro mingapi, mingapi kati yake ni miduara halisi, na eneo la uso.

Ikiwa hakuna mchoro wa awali wala uso bapa uliochaguliwa: "Fungua au chagua mchoro wa awali, au chagua uso bapa, ili kuhamisha DXF."

## Mchoro

Mchoro wa PDF una mwongozo wake: [Tengeneza karatasi ya mchoro](topic:drawing-pdf).

## Miundo isiyopatikana

glTF, OBJ, IGES na Parasolid hazihamishwi katika toleo hili. DWG huandikwa na variant pack pekee, kama karatasi ya mchoro: tazama [Tengeneza variant pack kutoka usanidi wako](topic:variant-pack). Tazama [Miundo ya faili](topic:file-formats).
