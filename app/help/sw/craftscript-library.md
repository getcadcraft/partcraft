---
title: Maktaba ya uchambuzi
summary: Maktaba ya scripts za uchambuzi zinazosomeka katika Eneo la Script: kilicho katika kila kikundi, kufungua kazi kwa kusoma tu, kichwa chake chenye mbinu, marejeleo na ukaguzi, kutengeneza nakala yako, na jinsi nakala inavyochukua nafasi ya kazi ya maktaba.
keywords: maktaba, craftlib, uchambuzi, sumaku-umeme, tuli, modal, joto, uboreshaji wa topolojia, top88, SIMP, sumakuumeme, elektrostatiki, magnetostatiki, umajimaji, lattice Boltzmann, LBM, mesh, voxel, tetrahedra, marejeleo, ukaguzi, uthibitisho, nakala, kivuli
from: bf993859
---

Maktaba ya uchambuzi ni seti ya scripts, kila moja ikiwa kazi unayoweza kuisoma kuanzia juu hadi chini: jinsi matriki ya ugumu inavyokusanywa, masharti ya mipaka yanapowekwa, kitatuzi gani kinaendeshwa, na matokeo yanavyohesabiwa. Hakuna kitu ndani yake kilichofichwa kwenye kisanduku cheusi; ni vitanzi vya ndani vya kasi tu (matriki za elementi, vitatuzi adimu, uundaji wa mesh) ndivyo vilivyojengwa ndani.

## Anza na mfano

Kikundi cha **Mifano** kina scripts tano fupi zinazotumia maktaba kuanzia mwanzo hadi mwisho. Bofya moja, bonyeza {{ui:Fungua (kusoma tu)}}, kisha {{key:F5}}: kila moja husafisha mwonekano, huonyesha matokeo kwenye turubai na mchoro katika maonyesho madogo.

| Mfano | Inaonyesha nini |
|---|---|
| Mkazo wa cantilever | Baa ya chuma 100 × 10 × 10 mm chini ya mzigo wa ncha wa 100 N: mkazo wa von Mises kwenye baa iliyoharibika, na mkengeuko wa ncha dhidi ya nadharia ya boriti kwa ukubwa wa elementi nne (imechorwa) |
| Topolojia ya boriti ya MBB | Uboreshaji wa topolojia wa kawaida wa 60 × 20: muundo ukiundwa, utiifu ukishuka, mpangilio wa mwisho (marudio 94, utiifu 203.19) |
| Uwanja wa kapasita | Sahani mbili zenye upana wa 4 mm, umbali wa 1 mm: uwezo na uwanja, kapasita yenye kingo za uwanja dhidi ya thamani bora na fomula ya Palmer |
| Mtiririko wa mfereji | Mtiririko wa Lattice Boltzmann kupita nguzo katika mfereji: uwanja wa kasi na historia ya muunganiko |
| Sumaku-umeme | Kiini cha chuma chenye umbo la C chenye pengo la hewa na koili: msongamano wa mtiririko wa sumaku, uwanja katika pengo dhidi ya fomula ya saketi ya sumaku, induktansi na nguvu ya kuvuta kuvuka pengo. Inaelezwa hatua kwa hatua katika [Sehemu za sumaku katika 2-D](topic:magnetic-fields-2d) |
| Sumaku ya kudumu | Kiini kile kile chenye sumaku ya kudumu badala ya koili: sehemu ya kazi ya sumaku, uwanja katika pengo dhidi ya saketi ya sumaku, mtiririko kiasi gani unavuja, nguvu ya kuvuta. Katika [Sehemu za sumaku katika 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Vikundi

| Kikundi | Kazi | Wanachofanya |
|---|---|---|
| Uundaji wa mesh | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Masanduku na silinda kama heksahedra, ujazo au tetrahedra; ujazo au tetrahedra za modeli yoyote (sehemu, mwili, STL iliyopakiwa); ujazo na ubora wa elementi; kuchagua nodi kwenye ndege au uso |
| Mkazo tuli | `static_voxel`, `static_tet` | Mkazo tuli wa mstari kwenye ujazo au tetrahedra zenye nodi 10: mikengeuko, misongo, von Mises, athari |
| Fremu | `frame3d` | Fremu za 3D za mihimili, nguzo na mabano kwa mbinu ya moja kwa moja ya ugumu: kuachilia ncha, vihimili na chemchemi, mizigo kando ya wanachama; mikengeuko, athari, nguvu za ncha za wanachama. Hamisha kama CraftScript ya DetailCraft na BimCraft huandika modeli nzima kwa ajili yake. Ni msaada wa uchambuzi, si ukaguzi wa msimbo |
| Mtetemo | `modal_tet` | Masafa asilia na umbo la modi |
| Joto | `heat_steady`, `heat_transient`, `heat_system` | Upitishaji wa joto thabiti na wa muda mfupi kwa halijoto zilizowekwa, ingizo la joto, uzalishaji, fluksi na konveksheni |
| Uboreshaji wa topolojia | `top88`, `top99`, `topopt3d` | Misimbo iliyochapishwa ya 2-D ya mistari 88 na 99, na mbinu hiyo hiyo katika 3-D kwenye ujazo |
| Sumakuumeme | `poisson2d`, `magnetostatic2d` | Umeme tuli wa 2-D (uwezo, uwanja, kapasita, chaji) na sumaku tuli (uwezo wa vekta, msongamano wa mtiririko, sumaku za kudumu) |
| Mtiririko wa umajimaji | `lbm2d`, `lbm3d` | Mtiririko wa Lattice Boltzmann: 2-D imeandikwa kikamilifu kwenye script, 3-D kwenye kerneli ya mtiririko ya PartCraft |

Kichwa cha kila kazi kinatoa hoja zake kamili. Vitengo ni vya masomo ya PartCraft isipokuwa kichwa kisema vinginevyo: milimita, niutoni, megapascali, tani kwa milimita ya ujazo kwa msongamano, wati na kelvin kwa joto. Kazi za sumakuumeme na Lattice Boltzmann hufanya kazi kwa vitengo vyovyote vinavyolingana; vichwa vyake vinaeleza jinsi.

## Jinsi maktaba inavyokaguliwa

Kichwa cha kila kazi huishia na **ukaguzi**: kesi ndogo yenye jibu linalojulikana. Majaribio ya PartCraft huendesha zote, na pale PartCraft ina utafiti wake kwa kazi hiyo hiyo, jibu la script hulinganishwa na utafiti huo kwenye mesh ile ile:

- mkengeuko wa ncha wa cantilever dhidi ya nadharia ya boriti (ndani ya 0.2 % kwa ujazo, 0.05 % kwa tetrahedra), na dhidi ya vitatuzi vya eneo la kazi la **Simulation** kwenye mesh ile ile (vinafanana hadi tarakimu nyingi);
- masafa ya kwanza ya cantilever dhidi ya nadharia ya boriti (chini kwa 0.24 %, kama inavyotarajiwa kwa boriti fupi) na dhidi ya kitatuzi cha modal cha **Simulation**;
- joto: ukuta bapa uliopashwa joto kwa usahihi kamili, mwili mdogo unaopoa kama fomula ya uwezo uliojumlishwa inavyosema, joto la slabu linalofifia kama nadharia inavyosema;
- uboreshaji wa topolojia: `top88` inarudia marudio 94 ya karatasi na utiifu 203.1925 (na 218.8032 kwa kichujio cha msongamano); `topopt3d` inamalizia kwa utiifu ule ule wa eneo la kazi la **Generative** kwa mipangilio ile ile;
- kapasita ya kapasita na uwanja wa solenoidi ndefu dhidi ya thamani za vitabuni, uwanja wa pengo la sumaku-umeme dhidi ya fomula ya saketi ya sumaku, na sumaku za kudumu dhidi ya sumaku duara hewani na sumaku iliyofungwa na kifungio cha chuma;
- mtiririko wa mfereji dhidi ya wasifu kamili wa parabola.

## Kusoma kazi

1. Fungua kichupo cha **Maktaba** cha paneli ya script.
2. Bofya kazi. Kichwa chake kinaonyesha: kinachohesabu, mbinu, vitengo, dhana na mipaka, **marejeleo** (kitabu au karatasi, pamoja na nambari za milinganyo) na **ukaguzi** — kesi ndogo yenye jibu linalojulikana ambalo majaribio ya PartCraft yenyewe huendesha.
3. {{ui:Fungua (kusoma tu)}} hufungua script nzima kwenye kichupo chenye mpaka wa mistari-nukta. Unaweza kuiendesha, kuchagua na kuendesha sehemu zake, lakini si kuibadilisha.

## Kubadilisha moja

Bonyeza {{ui:Tengeneza nakala}} (au **Tengeneza nakala ili kuhariri** juu ya kichupo cha kusoma tu). Nakala ni script katika sehemu yako yenye jina lile lile, kwa hiyo inahifadhiwa pamoja na sehemu, na **kila mwito wa kazi hiyo sasa unatumia nakala yako** — kihariri kinasema hivyo juu ya script. Badilisha jina la nakala ili kuweka zote mbili.

## Kutumia moja

Ita kazi ya maktaba kutoka script yoyote kwa jina lake, kama kazi iliyojengwa ndani:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Matokeo hurudi kama thamani kwenye eneo la kazi; michoro na nyanja inazoonyesha huonekana kwenye mwonekano na maonyesho madogo.

Kwa mfano, uchambuzi tuli wa sehemu iliyo wazi unachukua mistari michache:

```
v = voxel_mesh(part(), 2);                   % ujazo wa 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % shika sehemu ya chini
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N chini juu
r = static_voxel(v, 210000, 0.3, bc);       % chuma
```

`r` inashikilia mikengeuko, misongo na athari; mkazo wa von Mises unachorwa kwenye sehemu iliyoharibika. Kwa sehemu zilizopinda tumia `tet_mesh` na `static_tet`, ambazo pia zinaweza kupakia na kushikilia nyuso nzima (`face_nodes`).

:::note
Kazi za maktaba zimeandikwa kwa CraftScript, na script ya Lua huziita kupitia `cs` kama kazi zilizojengwa ndani: `cs.static_tet(t, 200000, 0.3, bc)` (tazama [Scripts katika Lua](topic:craftscript-lua)). Kila kazi hutatua nyenzo moja na kesi moja ya mzigo; vichwa vinaorodhesha kisichoshughulikiwa.
:::
