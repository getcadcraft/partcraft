---
title: Umtapo wokuhlaziya
summary: Umtapo wama-script afundeka ku-Script workspace: okutholakala eqenjini ngalinye, ukuvula umsebenzi ngokufunda kuphela, inhloko yawo nendlela, izinkomba nokuhlola, ukwenza ikopi yakho, nokuthi ikopi ithatha kanjani esikhundleni somsebenzi womtapo.
keywords: umtapo, craftlib, ukuhlaziya, electromagnet, static, modal, thermal, ukwenziwa kahle kwesakhiwo, top88, SIMP, electromagnetics, electrostatics, magnetostatics, fluid, lattice Boltzmann, LBM, mesh, voxel, tetrahedra, izinkomba, ukuhlola, ukuqinisekisa, ikopi, isithunzi
from: bf993859
---

Umtapo wokuhlaziya uyisethi yama-script, ngamunye umsebenzi ongawufunda kusukela phezulu kuya phansi: indlela i-stiffness matrix eyakhiwa ngayo, lapho imibandela yomkhawulo ifakwa khona, isixazululi esisebenza, nendlela imiphumela eqagelwa ngayo. Akukho lutho oluvalelwe ngaphakathi kwebhokisi elimnyama; kuphela izingxenye ezisheshayo (izinhlamvu zezakhiwo, izixazululi ze-sparse, ukwakha imesh) ezakhelwe ngaphakathi.

## Qala ngesibonelo

Iqembu le-**Izibonelo** linama-script amahlanu amafushane asebenzisa umtapo ngokuphelele. Chofoza eyodwa, cindezela {{ui:Vula (ukufunda kuphela)}}, bese {{key:F5}}: ngayinye ihlanza umbono, ibonise umphumela ku-canvas negrafu kuma-sub-display.

| Isibonelo | Okubonisa |
|---|---|
| Ukucindezeleka kwe-cantilever | Ibha yensimbi engu-100 × 10 × 10 mm ngaphansi komthwalo wethiphu ongu-100 N: ukucindezeleka kwe-von Mises ebhalini eguquliwe, nokuphambuka kwethiphu kuqhathaniswa nethiyori yebha ezingeni lezakhi ezine (kuhlelwe ngegrafu) |
| Ukwenziwa kahle kwesakhiwo se-MBB beam | Ukwenziwa kahle kwesakhiwo okuyisiko elingu-60 × 20: ukwakheka kwedizayini, ukwehla kwe-compliance, uhlelo lokugcina (ukuphindaphinda okungu-94, compliance 203.19) |
| Insimu ye-capacitor | Amapuleti amabili anobubanzi be-4 mm, ahlukene ngo-1 mm: amandla kagesi nensimu, i-capacitance enemiphetho iqhathaniswa nenani elifanele nefomula ka-Palmer |
| Ukugeleza komsele | Ukugeleza kwe-lattice Boltzmann kudlule into emsele: insimu yejubane nomlando wokuhlangana |
| I-electromagnet | Ingodo yensimbi enesimo se-C, enegebe lomoya nekhoyili: ukuminyana kwe-flux, insimu egebeni iqhathaniswa nefomula yesekethe yomagnethi, i-inductance nokudonsa egebeni. Ichazwe ku-[Izinkambu zomagnethi ku-2-D](topic:magnetic-fields-2d) |
| Umagnethi ohlala njalo | Ingodo efanayo kodwa nomagnethi ohlala njalo esikhundleni sekhoyili: indawo yokusebenza yomagnethi, insimu egebeni iqhathaniswa nesekethe yomagnethi, ukuthi i-flux ivuza kangakanani, nokudonsa. Ku-[Izinkambu zomagnethi ku-2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Amaqembu

| Iqembu | Imisebenzi | Yenzani |
|---|---|---|
| Ukwakha imesh | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Amabhokisi nama-silinda njengama-hexahedron, amakhyubhu noma ama-tetrahedron; amakhyubhu noma ama-tetrahedron wanoma iyiphi imodeli (ingxenye, umzimba, i-STL elayishiwe); amavolumu wezakhi nekhwalithi; ukukhetha ama-node endizeni noma ebusweni |
| Ukucindezeleka okuzinzile | `static_voxel`, `static_tet` | Ukucindezeleka okuzinzile okulinganayo kumakhyubhu noma kuma-tetrahedron ane-node eyi-10: ukunyakaza, ukucindezeleka, von Mises, izimpendulo |
| Izinhlaka | `frame3d` | Izinhlaka ze-3D zamabhimu, izinsika nezinhlaka ngendlela ye-direct stiffness: ukukhululwa kweziphetho, izisekelo nezipringi, imithwalo emabhimini; ukunyakaza, izimpendulo, amandla aseziphethweni zamalunga. I-{{ui:Thumela njenge-CraftScript}} ye-DetailCraft ne-BimCraft ibhala imodeli yonke ngayo. Isisekelo sokuhlaziya, hhayi ukuhlola kwekhodi |
| Ukunyakaza | `modal_tet` | Amafrikhwensi wemvelo nezimo zemodi |
| Ukushisa | `heat_steady`, `heat_transient`, `heat_system` | Ukudlulisa ukushisa okuzinzile nokuguquguqukayo ngamazinga okushisa aqinile, ukufakwa kokushisa, ukukhiqizwa, i-flux nokuhamba kokushisa |
| Ukwenziwa kahle kwesakhiwo | `top88`, `top99`, `topopt3d` | Amakhodi e-2-D angu-88 nangu-99 emigqa asakazwe, nendlela efanayo ye-3-D kumakhyubhu |
| I-electromagnetics | `poisson2d`, `magnetostatic2d` | I-electrostatics ye-2-D (amandla kagesi, insimu, i-capacitance, ukushaja) ne-magnetostatics (i-vector potential, ukuminyana kwe-flux, omagnethi ahlala njalo) |
| Ukugeleza koketshezi | `lbm2d`, `lbm3d` | Ukugeleza kwe-lattice Boltzmann: i-2-D ibhalwe ngokuphelele ku-script, i-3-D ku-kernel yokugeleza ye-PartCraft |

Inhloko yomsebenzi ngamunye inikeza izimpikiswano zawo ngqo. Amayunithi ayawo ayamayunithi wezifundo ze-PartCraft, uma inhloko ingasho ngenye indlela: amamilimitha, ama-newton, ama-megapascal, amathani ngemamilimitha ekhyubhu ngokuminyana, watt nekelvin ngokushisa. Imisebenzi ye-electromagnetic ne-lattice Boltzmann isebenza ngamayunithi anemigomo efanayo; izinhloko zawo zithi kanjani.

## Ukuhlola umtapo

Inhloko yomsebenzi ngamunye iphela nge-**ukuhlola**: ikhesi elincane nempendulo eyaziwayo. Izivivinyo ze-PartCraft ziyisebenzisa zonke, futhi lapho i-PartCraft inophenyo lwayo lomsebenzi ofanayo, impendulo ye-script iqhathaniswa nalolo phenyo kwi-mesh efanayo:

- ukuphambuka kwethiphu ye-cantilever kuqhathaniswa nethiyori yebha (phakathi kuka-0.2 % ngamakhyubhu, 0.05 % ngama-tetrahedron), nokuqhathaniswa nezixazululi ze-**Simulation** workspace kwi-mesh efanayo (ngokufanayo ezinombolweni eziningi);
- ifrikhwensi yokuqala ye-cantilever kuqhathaniswa nethiyori yebha (ingaphansi ngo-0.24 %, njengoba kulindeleke ebheni elifushane) nasesixazululini se-modal se-**Simulation**;
- ukushisa: udonga oluhlaza olushisayo ngokuqondile, umzimba omncane opholayo njengoba ifomula ye-lumped-capacity isho, izinga lokushisa lesilabhu eliyancipha njengoba ithiyori isho;
- ukwenziwa kahle kwesakhiwo: i-`top88` iphinda ukuphindaphinda okungu-94 nokuhambisana kwephepha 203.1925 (nango-218.8032 nesihlungi sokuminyana); i-`topopt3d` iphela ngokuhambisana okufanayo nowe-**Generative** workspace ngezilungiselelo ezifanayo;
- i-capacitance yekhapheshitha nensimu ye-solenoid ende kuqhathaniswa nezinani zencwadi yokufundela, insimu yegebe ye-electromagnet kuqhathaniswa nefomula yesekethe yomagnethi, nomagnethi ohlala njalo kuqhathaniswa nomagnethi ongqindilili emoyeni nomagnethi ovalwe yisigcini sensimbi;
- ukugeleza komsele kuqhathaniswa neprofayili eyiparabola eqondile.

## Funda umsebenzi

1. Vula ithebhu ye-**Umtapo** yephaneli ye-script.
2. Chofoza umsebenzi. Inhloko yawo ibonisa: okubalwayo, indlela, amayunithi, izimo nemikhawulo, **izinkomba** (incwadi noma iphepha, namanombolo ezibalo) kanye ne-**ukuhlola** — ikhesi elincane nempendulo eyaziwayo elihlolwa izivivinyo zePartCraft.
3. {{ui:Vula (ukufunda kuphela)}} ivula i-script yonke ethebhini enomngcele omile. Ungayiqalisa, ukhethe futhi uqalise izingxenye zayo, kodwa awungayishintshi.

## Shintsha eyodwa

Cindezela {{ui:Yenza ikopi}} (noma **Yenza ikopi ukuze uhlele** phezu kwethebhu efundeka kuphela). Ikopi iyi-script engxenyeni yakho enegama elifanayo, ngakho igcinwa nengxenye, futhi **yonke ukubizwa kwalo msebenzi kusebenzisa ikopi yakho manje** — umhleli uyisho phezu kwe-script. Qamba kabusha ikopi ukuze ugcine zombili.

## Yisebenzisa

Biza umsebenzi womtapo kunoma iyiphi i-script ngegama lawo, njengomsebenzi wangaphakathi:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Imiphumela ibuya njengezinani endaweni yokusebenza; amagrafu nezinsimu okubonisa zivela embonweni nasemabonisweni angaphansi.

Ukuhlaziya okuzinzile kwengxenye evulekile, isibonelo, kuthatha imigqa embalwa:

```
v = voxel_mesh(part(), 2);                   % amakhyubhu ayi-2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % bamba phansi
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N phansi phezulu
r = static_voxel(v, 210000, 0.3, bc);       % insimbi
```

`r` ibamba ukunyakaza, ukucindezeleka nezimpendulo; ukucindezeleka kwe-von Mises kudwetshwa engxenyeni eguquliwe. Ezingxenyeni ezigobile sebenzisa `tet_mesh` no `static_tet`, angakwazi nokulayisha nokubamba ubuso bonke (`face_nodes`).

:::note
Imisebenzi yomtapo ibhalwe nge-CraftScript, futhi i-script ye-Lua ibiza ngayo nge-`cs` njengemisebenzi yangaphakathi: `cs.static_tet(t, 200000, 0.3, bc)` (bheka [Ama-script ku-Lua](topic:craftscript-lua)). Umsebenzi ngamunye uxazulula impahla eyodwa nomthwalo owodwa; izinhloko zidweba okunye okungahlanganisiwe.
:::
