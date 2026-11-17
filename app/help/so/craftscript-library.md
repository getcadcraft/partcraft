---
title: Maktabadda falanqaynta
summary: Maktabadda script-yada falanqaynta ee la akhrin karo ee Goobta Script: waxa ku jira kooxaha, furidda function akhri kaliya, madasheeda habka, tixraacyada iyo hubinta, samaynta nuqulkaaga, iyo sida nuqulku u qaato meesha function-ka maktabadda.
keywords: maktabad, craftlib, falanqayn, electromagnet, static, modal, thermal, topology optimization, top88, SIMP, electromagnetics, electrostatics, magnetostatics, fluid, lattice Boltzmann, LBM, mesh, voxel, tetrahedra, tixraacyo, hubin, xaqiijin, nuqul, shadow
from: bf993859
---

Maktabadda falanqaynta waa set scripts ah, mid kastaa yahay function aad ka akhrisan karto kor ilaa hoos: sida matrikiska adkaysiga loo dhiso, halka shuruudaha xadka lagu dhigo, solver-ka oo socda, sida natiijooyinka loo xisaabiyo. Waxba ka mid ah ma qarsan tahay sanduuq madow; kaliya qaybaha degdega ah ee gudaha (unugyada matrikiska, solver-ada sparse, meshing) ayaa lagu dhisay.

## Ku bilow tusaale

Kooxda **Examples** waxay leedahay shan script oo gaaban oo isticmaala maktabadda bilow ilaa dhammaad. Guji mid, riix {{ui:Fur (akhri kaliya)}}, kadibna {{key:F5}}: mid kastaa wuxuu nadiifiyaa muuqaalka, wuxuuna muujinayaa natiijo canvas-ka iyo plot sub-displays-ka.

| Tusaale | Waxa uu muujinayo |
|---|---|
| Cantilever stress | Bar bir ah 100 × 10 × 10 mm oo culeys 100 N ah ku yaal madaxa: stress von Mises ee bar-ka foorfoorsan, iyo go'a madaxa marka loo barbar dhigo aragtida biimta afar cabbir oo unug ah (plot) |
| MBB beam topology | Habaynta topology-ga caadiga ah 60 × 20: naqshadeynta oo samaysma, compliance-ka oo hoosaysa, habaynta ugu dambeysa (94 soo noqnoq, compliance 203.19) |
| Capacitor field | Laba taxane 4 mm ballac ah, 1 mm kala fogaan: potential iyo field, capacitance-ka oo fringing-ka leh oo lagu barbar dhigo qiimaha ideal-ka iyo qaacidada Palmer |
| Channel flow | Socodka Lattice Boltzmann oo dhex mara tiir ku yaal kanaal: goobta xawaaraha iyo taariikhda isu-soo-dhowaanshaha |
| Electromagnet | Core bir ah oo C-qaab leh oo leh gab hawo ah iyo koil: flux density, field-ka gabka oo lagu barbar dhigo qaacidada magnetic-circuit-ka, inductance iyo jiidista gabka dhexdiisa. Lagu sharaxay [Goobaha magnetic-ka 2-D](topic:magnetic-fields-2d) |
| Permanent magnet | Isla core-ka oo leh magnet joogto ah halkii koil: barta shaqada ee magnet-ka, field-ka gabka oo lagu barbar dhigo magnetic circuit-ka, inta flux ah ee baxda, jiidista. Ku jira [Goobaha magnetic-ka 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Kooxaha

| Kooxda | Functions | Waxa ay sameeyaan |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Sanduuqyo iyo silsilado sida hexahedra, cubes ama tetrahedra; cubes ama tetrahedra ee moodel kasta (qaybta, jidh, STL la soo rartay); mugga unugyada iyo tayada; doorashada nodes-ka diyaarad ama dhinac |
| Static stress | `static_voxel`, `static_tet` | Stress-ka joogtada ah ee cubes ama 10-node tetrahedra: displacements, stresses, von Mises, reactions |
| Frames | `frame3d` | Frames 3D oo ka kooban beams, columns iyo braces oo lagu xisaabinayo habka adkaysiga toos ah: furitaanka dhamaadka, taageerooyinka iyo springs, culeysyada xubnaha dhexdooda; displacements, reactions, cutubka dhamaadka xubnaha. {{ui:Export as CraftScript}} ee DetailCraft iyo BimCraft wuxuu qorayaa moodel oo dhan oo loogu talagalay. Caawiye falanqayn, ma aha hubin koodka |
| Vibration | `modal_tet` | Soo noqnoqyada dabiiciga ah iyo qaababka habaynta |
| Heat | `heat_steady`, `heat_transient`, `heat_system` | Kuleyli-gudbinta joogtada ah iyo ku-meelgaarka, oo leh heerkul go'an, gelinta kulaylka, abuurista, flux iyo convection |
| Topology optimization | `top88`, `top99`, `topopt3d` | Codadka 2-D ee 88 iyo 99 sadar ee la daabacay, iyo isla habka 3-D ee cubes |
| Electromagnetics | `poisson2d`, `magnetostatic2d` | Electrostatics 2-D (potential, field, capacitance, charge) iyo magnetostatics (vector potential, flux density, magnets joogto ah) |
| Fluid flow | `lbm2d`, `lbm3d` | Socodka Lattice Boltzmann: 2-D oo lagu qoray script-ka, 3-D oo ku saleysan kernel-ka socodka PartCraft |

Header-ka function kasta wuxuu siinayaa doodihiisa saxda ah. Unugyadu waa kuwa studies-ka PartCraft ilaa header-ku si kale u sheegin: millimeters, newtons, megapascals, tonnes per cubic millimetre for density, watts iyo kelvin for heat. Functions-ka electromagnetic iyo lattice Boltzmann waxay shaqeeyaan unug kasta oo isku mid ah; headers-keeda ayaa sheegaya sida.

## Sida maktabadda loo hubiyo

Header-ka function kasta wuxuu ku dhammaadaa **check**: kiis yar oo jawaabta la yaqaan. Tijaabooyinka PartCraft waxay socodsiiyaan mid kasta, halka PartCraft uu leeyo study u gaar ah isla shaqadaas, jawaabta script-ka waxaa lagu barbar dhigaa studyga ku saabsan isla mesh-ka:

- go'a madaxa cantilever-ka oo lagu barbar dhigo aragtida biimta (dhexdeeda 0.2 % cubes-ka, 0.05 % tetrahedra), iyo solver-ada workspace-ka **Simulation** isla mesh-ka (isku mid ilaa tiro badan);
- soo noqnoqda ugu horreysa ee cantilever-ka oo lagu barbar dhigo aragtida biimta (0.24 % ka hooseeya, sida la filayo biim gaaban), iyo modal solver-ka **Simulation**;
- kulaylka: derbi kulul oo taagan oo si sax ah, jidh yar oo qaboojinaya sida qaacidada lumped-capacity tilmaamayo, heerkulka dhagax oo dhinta sida aragtidu tilmaamayo;
- topology optimization: `top88` wuxuu soo celinayaa 94 soo noqnoq iyo compliance 203.1925 (iyo 218.8032 oo leh density filter); `topopt3d` wuxuu ku dhammaadaa compliance isku mid ah sida workspace-ka **Generative** oo leh isla settings-ka;
- capacitance-ka capacitor-ka iyo field-ka solenoid dheer oo lagu barbar dhigo qiimayaasha buugaagta, field-ka gabka electromagnet-ka oo lagu barbar dhigo qaacidada magnetic-circuit-ka, magnets joogto ah oo lagu barbar dhigo magnet wareegsan oo hawada ku jira iyo magnet ay xidho iron keeper;
- socodka channel-ka oo lagu barbar dhigo profile-ka parabolic-ka saxda ah.

## Akhri function

1. Fur tab-ka **Library** ee panel-ka script-ka.
2. Guji function. Header-keeda wuxuu muujinayaa: waxa uu xisaabinayo, habka, unugyada, mala-awaalka iyo xadadka, **references** (buug ama warqad, leh lambarada isla'egta) iyo **check**: kiis yar oo jawaab la yaqaan oo tijaabooyinka PartCraft ay socodsiiyaan.
3. {{ui:Fur (akhri kaliya)}} wuxuu furaa script-ka oo dhan tab xariiq jajab ah ku leh. Waad socodsiin kartaa, qayb ka mid ah dooran kartaa oo socodsiin kartaa, laakiin ma beddeli kartid.

## Beddel mid

Riix {{ui:Samee nuqul}} (ama **Samee nuqul si loo tafatiro** kor ku yaal tab akhri kaliya). Nuqulku waa script qaybtaada ku jira oo leh isla magaca, sidaas darteed waxaa lagu kaydiyaa qaybta, **function kasta oo wicitaan ah hadda wuxuu isticmaalayaa nuqulkaaga**; editor-ka ayaa taas kor ugu sheegaya script-ka. Dib u magacow nuqulka si aad labadaba u hayso.

## Isticmaal mid

Wac function maktabad kasta script kasta adigoo u isticmaalaya magiciisa, sida built-in function:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Natiijooyinku waxay ku soo laabtaan qiyam workspace-ka ku jira; plots-ka iyo fields-ka ay muujiso waxay ka muuqdaan muuqaalka iyo sub-displays-ka.

Falanqayn go'an oo qaybta furan, tusaale ahaan, waxay qaadataa dhowr sadar:

```
v = voxel_mesh(part(), 2);                   % kubbado 2 mm ah
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % hay hoosta
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N hoos ee sare
r = static_voxel(v, 210000, 0.3, bc);       % bir
```

`r` wuxuu hayaa displacements, stresses iyo reactions; von Mises stress-ka ayaa lagu sawiraa qaybta foorfoorsan. Qaybaha qalloocan isticmaal `tet_mesh` iyo `static_tet`, kuwaas oo sidoo kale culeysi kara oo hayn kara dusha oo dhan (`face_nodes`).

:::note
Functions-ka maktabadda waxaa lagu qoray CraftScript, script Lua waxa uu `cs` ku wacaa sida built-in functions-ka: `cs.static_tet(t, 200000, 0.3, bc)` (eeg [Scripts-ka Lua](topic:craftscript-lua)). Function kasta wuxuu xallinayaa hal walax iyo hal kiis culeys; headers-ku waxay sheegayaan waxa kale ee aan la daboolin.
:::
