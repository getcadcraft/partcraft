---
title: Analysebiblioteket
summary: Biblioteket med læsbare analysescripts i Script-arbejdsområdet: hvad der er i hver gruppe, åbning af en funktion skrivebeskyttet, dens overskrift med metode, referencer og en kontrol, lav din egen kopi, og hvordan en kopi overtager fra biblioteksfunktionen.
keywords: bibliotek, craftlib, analyse, elektromagnet, statisk, modal, termisk, topologioptimering, top88, SIMP, elektromagnetik, elektrostatik, magnetostatik, fluid, lattice Boltzmann, LBM, mesh, voxel, tetraedre, referencer, kontrol, verifikation, kopi, skygge
from: bf993859
---

Analysebiblioteket er en samling scripts, hver en funktion du kan læse fra top til bund: hvordan stivhedsmatricen samles, hvor randbetingelserne placeres, hvilken løser der kører, hvordan resultaterne beregnes. Intet i det er skjult i en black box; kun de hurtige indre løkker (elementmatricer, sparsomme løsere, meshing) er indbygget.

## Start med et eksempel

Gruppen **Eksempler** indeholder fem korte scripts, der bruger biblioteket fra ende til anden. Klik på et, tryk på {{ui:Åbn (skrivebeskyttet)}} og derefter {{key:F5}}: hvert ryddes visningen, viser et resultat i visningen og en graf i underdisplayene.

| Eksempel | Hvad det viser |
|---|---|
| Udkragers spænding | En stålstang 100 × 10 × 10 mm under en spidslast på 100 N: von Mises-spænding på den deformerede stang, og spidsens nedbøjning mod bjælketeori ved fire elementstørrelser (plottet) |
| MBB-bjælkens topologi | Den klassiske 60 × 20 topologioptimering: designet der tager form, complianceen der falder, det endelige layout (94 iterationer, compliance 203.19) |
| Kondensatorfelt | To plader 4 mm brede, 1 mm fra hinanden: potentiale og felt, kapacitansen med randeffekt mod den ideelle værdi og Palmers formel |
| Kanalstrømning | Lattice Boltzmann-strømning forbi en pæl i en kanal: hastighedsfeltet og konvergenshistorikken |
| Elektromagnet | En C-formet jernkerne med luftspalte og en spole: fluxtætheden, feltet i spalten mod magnetkredsformlen, induktansen og trækkraften over spalten. Gennemgået i [Magnetfelter i 2-D](topic:magnetic-fields-2d) |
| Permanent magnet | Den samme kerne med en permanentmagnet i stedet for spolen: magnetens arbejdspunkt, feltet i spalten mod magnetkredsen, hvor meget flux der lækker, trækkraften. I [Magnetfelter i 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupper

| Gruppe | Funktioner | Hvad de gør |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Kasser og cylindre som hexaedre, kuber eller tetraedre; kuber eller tetraedre af enhver model (delen, et legeme, en indlæst STL); elementvolumener og kvalitet; valg af noder på et plan eller en flade |
| Statisk spænding | `static_voxel`, `static_tet` | Lineær statisk spænding på kuber eller på 10-knude-tetraedre: forskydninger, spændinger, von Mises, reaktioner |
| Rammer | `frame3d` | 3D-rammer af bjælker, søjler og afstivninger efter den direkte stivhedsmetode: endefrigørelser, understøtninger og fjedre, laster langs elementerne; forskydninger, reaktioner, endekræfter i elementerne. DetailCraft's og BimCraft's {{ui:Eksportér som CraftScript}} skriver en hel model til den. Et analysehjælpemiddel, ikke en normkontrol |
| Vibration | `modal_tet` | Egenfrekvenser og egenformer |
| Varme | `heat_steady`, `heat_transient`, `heat_system` | Stationær og transient ledning med faste temperaturer, varmetilførsel, generering, flux og konvektion |
| Topologioptimering | `top88`, `top99`, `topopt3d` | De publicerede 88- og 99-linjers 2-D-koder, og den samme metode i 3-D på kuber |
| Elektromagnetik | `poisson2d`, `magnetostatic2d` | 2-D-elektrostatik (potentiale, felt, kapacitans, ladning) og magnetostatik (vektorpotentiale, fluxtæthed, permanente magneter) |
| Strømning | `lbm2d`, `lbm3d` | Lattice Boltzmann-strømning: 2-D skrevet ud i scriptet, 3-D på PartCraft's egen strømningskerne |

Hver funktions overskrift angiver dens præcise argumenter. Enhederne er dem fra PartCraft's analyser, medmindre overskriften siger andet: millimeter, newton, megapascal, ton pr. kubikmillimeter for massefylde, watt og kelvin for varme. De elektromagnetiske funktioner og Lattice Boltzmann-funktionerne virker i alle ensartede enheder; deres overskrifter angiver hvordan.

## Sådan kontrolleres biblioteket

Hver funktions overskrift slutter med en **kontrol**: et lille tilfælde med et kendt svar. PartCraft's tests kører hver eneste en af dem, og hvor PartCraft har sin egen analyse til samme opgave, sammenlignes scriptets svar med den analyse på samme mesh:

- udkragerens spidsnedbøjning mod bjælketeori (inden for 0.2 % med kuber, 0.05 % med tetraedre) og mod **Simulation**-arbejdsområdets løsere på samme mesh (det samme på mange cifre);
- udkragerens første frekvens mod bjælketeori (0.24 % lavere, som forventet for en kort bjælke) og mod **Simulation**s modalløser;
- varme: en opvarmet plan væg præcist, et lille legeme der køler af som formlen for samlet kapacitet siger, en plades temperatur der aftager som teorien siger;
- topologioptimering: `top88` reproducerer artiklens 94 iterationer og compliance 203.1925 (og 218.8032 med tæthedsfilteret); `topopt3d` ender ved samme compliance som **Generative**-arbejdsområdet med de samme indstillinger;
- en kondensators kapacitans og en lang solenoids felt mod lærebogsværdierne, elektromagnetens spaltefelt mod magnetkredsformlen, og permanente magneter mod en rund magnet i luft og en magnet lukket af et jernanker;
- kanalstrømning mod den eksakte parabolske profil.

## Læs en funktion

1. Åbn fanen **Bibliotek** i script-panelet.
2. Klik på en funktion. Dens overskrift viser: hvad den beregner, metoden, enheder, antagelser og grænser, **referencerne** (bog eller artikel, med ligningsnumre) og en **kontrol** — et lille tilfælde med et kendt svar, som PartCraft's egne tests kører.
3. {{ui:Åbn (skrivebeskyttet)}} åbner hele scriptet i en fane med en stiplet kant. Du kan køre det, vælge og køre dele af det, men ikke ændre det.

## Ændr en funktion

Tryk på {{ui:Lav en kopi}} (eller **Lav en kopi til redigering** over en skrivebeskyttet fane). Kopien er et script i din del med samme navn, så den gemmes med delen, og **alle kald til den funktion bruger nu din kopi** — editoren siger det over scriptet. Omdøb kopien for at beholde begge.

## Brug en funktion

Kald en biblioteksfunktion fra et hvilket som helst script med dens navn, ligesom en indbygget funktion:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Resultater kommer tilbage som værdier i arbejdsområdet; grafer og felter den viser, vises i visningen og underdisplayene.

En statisk analyse af den åbne del tager fx få linjer:

```
v = voxel_mesh(part(), 2);                   % 2 mm kuber
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % hold bunden
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N nedad på toppen
r = static_voxel(v, 210000, 0.3, bc);       % stål
```

`r` indeholder forskydningerne, spændingerne og reaktionerne; von Mises-spændingen tegnes på den deformerede del. Til buede dele bruges `tet_mesh` og `static_tet`, som også kan belaste og fastholde hele flader (`face_nodes`).

:::note
Bibliotekets funktioner er skrevet i CraftScript, og et Lua-script kalder dem gennem `cs` ligesom de indbyggede funktioner: `cs.static_tet(t, 200000, 0.3, bc)` (se [Lua-scripts](topic:craftscript-lua)). Hver funktion løser ét materiale og ét lasttilfælde; overskrifterne angiver, hvad der ikke er dækket.
:::
