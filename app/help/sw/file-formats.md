---
title: Miundo ya faili
summary: Kila faili ambalo PartCraft husoma na kuandika, pamoja na viendelezi, vitengo, mhimili na kile kila moja huhifadhi au hupoteza.
keywords: miundo, aina za faili, viendelezi, usd, usdz, 3dm, ifc, bim, partcraft.json, partcraft-asm.json, stl, 3mf, obj, mesh, step, stp, ap242, dxf, r12, pdf, gltf, obj, iges, vitengo, z juu
from: 4d0ecbee
---

| Umbizo | Kiendelezi | Fungua | Hifadhi au hamisha | Vitengo | Mhimili juu | Huhifadhi |
|---|---|---|---|---|---|---|
| Sehemu ya PartCraft | `.partcraft.json` | Ndiyo | {{ui:Hifadhi}} | mm | Y | Historia yote: michoro, mahusiano, vipimo, vipengele, kuzima, kurudisha nyuma, mpangilio wa mikunjo, mipangilio ya karatasi ya mchoro na GD&T, maandishi ya STEP yaliyoingizwa na toleo la awali |
| Mkusanyiko wa PartCraft | `.partcraft-asm.json` | Ndiyo | {{ui:Hifadhi}} kwenye mkusanyiko | mm | Y | Kila sehemu (imejumuishwa ndani), nakala na nafasi zake, viungio |
| STL (binary au maandishi) | `.stl` | Ndiyo, kama mwili mgumu: [Fungua STL, OBJ au 3MF](topic:open-meshes) | {{ui:STL, kwa uchapishaji wa 3D}} | mm (huulizwa unapofunguliwa) | Z | Pembetatu za kigumu pekee |
| 3MF | `.3mf` | Ndiyo, kama mwili mgumu | {{ui:3MF, kwa uchapishaji wa 3D}} | mm (imetajwa kwenye faili) | Z | Kigumu kama mesh moja |
| OBJ | `.obj` | Ndiyo, kama mwili mgumu (nyuso pekee) | Hapana | huulizwa unapofunguliwa | Z au Y | |
| STEP (AP203, AP214, AP242) | `.step`, `.stp` | Ndiyo, kama mwili mgumu unaosomwa kama pembetatu (nyuso zilizopinda huchorwa kama facet; nyuso bapa, silinda, koni, duara na torasi za faili huhifadhiwa kwa hamisho sahihi): [Fungua faili la STEP](topic:import-step) | | mm (kutoka kitengo cha faili) | Z, au Y ukisema hivyo | Vigumu na miili ya nyuso; mikusanyiko yenye kila sehemu mahali pake; hakuna rangi, majina, mti wa mkusanyiko wala PMI |
| `.3dm` | `.3dm` | Ndiyo, kama mwili mmoja mgumu kutoka mesh na nyuso zake (mesh za render zilizohifadhiwa, vinginevyo zinatengenezwa): [Fungua modeli ya .3dm](topic:open-3dm-files) | | Kutoka kitengo cha faili | Z, au Y ukisema hivyo | Mesh, polysurfaces, extrusions na nafasi za block kama mwili mmoja; hakuna mikunjo, rangi, tabaka wala majina |
| STEP AP242, sahihi | `.step` | | {{ui:STEP AP242 (kigumu sahihi)}} | mm | Z | Kigumu kimoja sahihi: nyuso bapa, silinda, koni, duara na torasi kwenye nyuso zao halisi, miduara na mistari halisi kama kingo; pande za spline, nyuzi zilizomodelwa, miili kutoka faili za mesh na nyuso za spline za faili la STEP hubaki facet. STEP ya kutumia kwa programu nyingine za CAD na CAM |
| STEP AP214, sahihi | `.step` | | {{ui:STEP AP214 (kigumu sahihi)}} | mm | Z | Kigumu kilekile sahihi katika skimu ya zamani ya AP214, kwa programu zinazosoma hiyo pekee |
| STEP AP242, yenye facet | `.step` | | {{ui:STEP (yenye nyuso bapa, kernel ya matundu)}} | mm | Y | Kigumu kilichofungwa cha nyuso bapa: nyuso za duara kama facet. Kwa programu inayokataa faili sahihi |
| STEP AP214, yenye facet | `.step` | | {{ui:STEP AP214 (pembe bapa, kernel ya matundu)}} | mm | Y | Kigumu kilekile katika skimu ya zamani ya AP214, kwa programu zinazosoma hiyo pekee |
| Kifurushi cha USD | `.usdz` | Hapana | {{ui:Kifurushi cha USD (.usdz)}} | m | Z | Kigumu chenye nyenzo, ujazo na uzito wake; mkusanyiko wenye kila sehemu mara moja na kila nakala imewekwa: [Hamisha kama USD](topic:usd) |
| IFC 4 | `.ifc` | Hapana | {{ui:IFC 4 (pamoja na kila sifa)}} | mm | Z | Umbo kama pembetatu, nyenzo, kila kigezo, kichwa cha mchoro, vipimo; sehemu za mkusanyiko kama aina na nakala zilizowekwa |
| DXF R12, mchoro | `.dxf` | Hapana | {{ui:DXF ya mchoro au uso tambarare}} mchoro ukiwa umechaguliwa | mm | x, y za mchoro wenyewe | Mistari, safu na duara halisi, nukta; tabaka PROFILE, CONSTRUCTION, POINTS |
| DXF R12, uso | `.dxf` | Hapana | {{ui:DXF ya mchoro au uso tambarare}} uso bapa ukiwa umechaguliwa | mm | x, y za uso wenyewe | Mitaro ya uso: matundu ya duara kama duara halisi, mengine kama polilaini zilizofungwa (kingo za duara kama facet) |
| PDF ya mchoro | `.pdf` | Hapana | {{ui:Mchoro (PDF): mionekano, sehemu ya mkato, undani, GD&T}} | mm kwenye karatasi A3 | | Mionekano ya mbele, juu, kulia, isometric, sehemu ya mkato na undani, iliyochorwa kutoka facet; mistari iliyofichwa, ukubwa wa jumla, alama za GD&T, kichwa cha mchoro |

## Faili za PartCraft

Zote mbili ni maandishi tupu (JSON). Kigumu hakihifadhiwi kamwe: PartCraft huki-jenga upya kutoka historia, kwa hiyo faili hubaki ndogo na daima hulingana na historia.

- Kila faili lina namba ya toleo. Toleo hili huandika kila faili la sehemu kwa toleo la chini kabisa linaloshikilia kile kinachotumika (2 hadi 5; mwili uliotengenezwa kutoka mesh unahitaji 5), na hufungua kila toleo la zamani. Faili kutoka PartCraft mpya hukataliwa kwa ujumbe unaotaja matoleo yote mawili.
- Kila thamani hukaguliwa faili linapofunguliwa. Majina hupoteza herufi za udhibiti; namba zilizo nje ya mipaka, marejeo ya vipengele vinavyokosekana na aina za vipengele zisizojulikana hukataliwa kwa sababu rahisi.
- Usihariri faili hizi kwa mkono isipokuwa unajua umbizo. Faili lisilopita ukaguzi halitafunguka.
- Sehemu yenye STEP kubwa iliyoingizwa na toleo la awali inaweza kupita MB 50, kiwango kikubwa zaidi ambacho PartCraft hufungua kama faili la sehemu (tazama [Utatuzi wa matatizo](topic:troubleshooting#file-problems)).

## Facet na usahihi

STL na 3MF huundwa kila wakati kwa facet, kwa mpangilio wa **Mikunjo**, na vivyo hivyo DXF ya uso isipokuwa matundu ya duara, ambayo ni duara halisi. DXF ya mchoro ina safu na duara halisi, kwa sababu hutoka moja kwa moja kwenye mchoro. Toleo hili hujenga kila sehemu kwa kernel ya matundu, kwa hiyo mionekano ya karatasi ya mchoro (pamoja na sehemu za mkato) pia ni facet. Hamisho sahihi ya STEP ndiyo ubaguzi: kernel inajua uso halisi wa kila uso kutoka kwenye mchoro (au kutoka faili la STEP lililofunguliwa), kwa hiyo nyuso za duara huandikwa kama silinda, koni, duara na torasi halisi bila kujali mpangilio wa **Mikunjo** (tazama [Hamisha kwa uchapishaji, STEP na DXF](topic:export-files#for-other-cad-programs-step)).

## Haziungwi mkono katika toleo hili

| Umbizo | Hali |
|---|---|
| glTF, IGES, Parasolid, ACIS (ndani au nje); hamisho ya OBJ | Havijajengwa |
| DWG | Huandikwa na [variant pack](topic:variant-pack) pekee, kama karatasi ya mchoro ya kila usanidi. Haisomwi, na hakuna hamisho nyingine. Hamisha DXF; kila programu ya CAD hufungua DXF R12 |
| STEP ya mkusanyiko na mchoro wa mkusanyiko | Bado havijajengwa. Hamisha kila sehemu kama STEP sahihi; STL, 3MF na orodha ya vifaa huhamishwa kutoka mkusanyiko |
| Faili asilia za sehemu na mikusanyiko za programu nyingine (isipokuwa `.3dm`, inayofunguka kama mwili mmoja) | Havijajengwa |

Tazama [Bado hakijajengwa](topic:not-built-yet).
