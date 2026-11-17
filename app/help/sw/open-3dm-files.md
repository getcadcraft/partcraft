---
title: Fungua modeli ya .3dm kama mwili kigumu
summary: Leta mesh, polysurfaces na blocks za faili la .3dm kwenye PartCraft kama mwili mmoja kigumu unaoweza kukata, kuongeza na kuchora juu yake; pembetatu zinatoka wapi, na kinachoachwa nje.
keywords: 3dm, nurbs, polysurface, brep, nyuso, mesh ya utoaji, extrusion, blocks, kuingiza, mesh kuwa kigumu, vitengo, mwili uliongizwa
from: 8ae9571b
---

PartCraft hufungua faili za `.3dm` kama **miili migumu**, kwa njia ile ile inayofungua [mesh ya STL, OBJ au 3MF](topic:open-meshes). Mwili hufanya kazi kama kigumu kingine chochote: ukate, ongeze kwake, chimba, panga mifumo, na chora kwenye nyuso zake bapa. Haina historia yake yenyewe.

## Fungua faili

1. Chagua {{ui:Open}} au bonyeza {{key:Mod+O}}, kisha chagua faili la `.3dm`. Au liangushe kwenye mwonekano wa 3D.
2. PartCraft inalisoma na kuonyesha kilichopatikana: vitu vingapi vyenye nyuso vinaingia, nyuso ngapi zilitoka kwenye mesh zilizohifadhiwa kwenye faili na ngapi PartCraft ilizigeuza kuwa pembetatu, kila urekebishaji, na kama matokeo yanafunga (**closes**).
3. Angalia **Units in the file** (faili linasema vitengo vyake; kitengo ambacho PartCraft haiorodheshi, kama yadi, kinageuzwa kuwa milimita) na **Up in the file**.
4. Chagua {{ui:Open as a body}}, au **Use it to** kisha {{ui:Add to this part}} sehemu tayari ina vipengele.

## Pembetatu zinatoka wapi

PartCraft hujenga miili kutoka pembetatu katika toleo hili, kwa hiyo kila uso kwenye faili huwa nyuso ndogo bapa. Kwa kila uso wa polysurface (na kila extrusion) huchukua **mesh ya utoaji iliyohifadhiwa kwenye faili** ikiwepo, la sivyo **huigeuza yenyewe** (ndege, nyuso za NURBS, nyuso za mzunguko, mikunjo iliyotolewa na extrusions, zilizokatwa kwa kingo zao). Nyuso za polysurface moja hushiriki pointi zao za kingo, kwa hiyo polysurface iliyofungwa huingia ikiwa imefungwa. Uso wa aina ambayo PartCraft bado haisomi huachwa nje, na mazungumzo yanasema ngapi na za aina gani; matokeo kwa kawaida hayafungi.

## Kila kitu kwenye faili kinakuwa mwili mmoja

Kila mesh, polysurface na extrusion inayoonekana, na kila mahali pa block, huingia kwenye mwili **mmoja** pale faili inapouweka. Vitu vilivyofichwa, au vilivyo kwenye tabaka lililozimwa, huachwa nje. Faili likiwa na vigumu kadhaa tofauti, mwili huwa na vipande kadhaa: fungua kila kimoja kutoka faili lake kama unataka miili tofauti.

## Kilichoachwa nje (na kinachoambiwa)

Mikunjo, pointi, wingu la pointi, maandishi, vipimo, hatches na taa huachwa nje: mwili huchukua nyuso pekee. Pia huachwa nje vitu vya SubD (vigeuze kuwa mesh au polysurfaces kwenye programu iliyotengeneza faili kwanza), blocks zilizounganishwa na faili nyingine, na rangi, tabaka na majina (miili ya PartCraft haina yake hapa).

## Pale isipofunga

Polysurfaces wazi na nyuso (uso mmoja uliokatwa, au umbo lenye uso unaokosekana) hazina ndani, kwa hiyo haziwezi kuwa kigumu. Mazungumzo yanasema ni fursa ngapi zimebaki na hayaongezi kitu. Unganisha au funga umbo kwenye programu iliyotengeneza, hifadhi, kisha ufungue tena. Angalia [Mesh isipofunga](topic:open-meshes#when-a-mesh-does-not-close).
