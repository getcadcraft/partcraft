---
title: Analysebiblioteket
summary: Biblioteket med lesbare analyseskript i Skript-arbeidsområdet: hva hver gruppe inneholder, åpne en funksjon skrivebeskyttet, dens hode med metode, referanser og en kontroll, lage din egen kopi, og hvordan en kopi overtar fra bibliotekfunksjonen.
keywords: bibliotek, craftlib, analyse, elektromagnet, statisk, modal, termisk, topologioptimering, top88, SIMP, elektromagnetisme, elektrostatikk, magnetostatikk, fluidstrømning, gitter-Boltzmann, LBM, nett, voksel, tetraedre, referanser, kontroll, verifisering, kopi, skygge
from: bf993859
---

Analysebiblioteket er en samling skript, hver en funksjon du kan lese fra topp til bunn: hvordan stivhetsmatrisen settes sammen, hvor randbetingelsene går, hvilken løser som kjøres, og hvordan resultatene beregnes. Ingenting i det er skjult i en svart boks; bare de raske indre løkkene (elementmatriser, sparsomme løsere, nettdanning) er innebygd.

## Start med et eksempel

Gruppen **Eksempler** holder fem korte skript som bruker biblioteket fra ende til ende. Klikk på ett, trykk {{ui:Åpne (skrivebeskyttet)}}, og deretter {{key:F5}}: hvert av dem tømmer visningen, viser et resultat på lerretet og et plott i delvisningene.

| Eksempel | Hva det viser |
|---|---|
| Utkraget bjelke, spenning | En stålstang 100 × 10 × 10 mm under en 100 N spisslast: von Mises-spenning på den deformerte stangen, og spissnedbøyningen mot bjelketeori ved fire elementstørrelser (plottet) |
| MBB-bjelke, topologi | Den klassiske 60 × 20 topologioptimeringen: utformingen som dannes, compliance som synker, det endelige oppsettet (94 iterasjoner, compliance 203.19) |
| Kondensatorfelt | To plater 4 mm brede, 1 mm fra hverandre: potensial og felt, kapasitansen med kanteffekt mot den ideelle verdien og Palmers formel |
| Kanalstrømning | Gitter-Boltzmann-strømning forbi en stolpe i en kanal: hastighetsfeltet og konvergenshistorikken |
| Elektromagnet | En C-formet jernkjerne med luftgap og en spole: fluksetettheten, feltet i gapet mot formelen for magnetkrets, induktansen og trekkraften over gapet. Gjennomgått i [Magnetfelt i 2-D](topic:magnetic-fields-2d) |
| Permanentmagnet | Samme kjerne med en permanentmagnet i stedet for spolen: magnetens arbeidspunkt, feltet i gapet mot magnetkretsen, hvor mye fluks som lekker, og trekkraften. I [Magnetfelt i 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupper

| Gruppe | Funksjoner | Hva de gjør |
|---|---|---|
| Nettdanning | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Bokser og sylindre som heksaedre, kuber eller tetraedre; kuber eller tetraedre av en hvilken som helst modell (delen, et legeme, en innlastet STL); elementvolumer og kvalitet; plukking av noder på et plan eller en flate |
| Statisk spenning | `static_voxel`, `static_tet` | Lineær statisk spenning på kuber eller på 10-noders tetraedre: forskyvninger, spenninger, von Mises, reaksjoner |
| Rammer | `frame3d` | 3D-rammer av bjelker, søyler og avstivninger etter direkte stivhetsmetode: endeløsninger, opplegg og fjærer, laster langs elementene; forskyvninger, reaksjoner og endekrefter. DetailCraft og BimCraft sin {{ui:Eksporter som CraftScript}} skriver en hel modell for den. Et analysehjelpemiddel, ikke en normkontroll |
| Vibrasjon | `modal_tet` | Egenfrekvenser og svingeformer |
| Varme | `heat_steady`, `heat_transient`, `heat_system` | Stasjonær og transient ledning med faste temperaturer, varmetilførsel, generering, fluks og konveksjon |
| Topologioptimering | `top88`, `top99`, `topopt3d` | De publiserte 88- og 99-linjers 2-D-kodene, og den samme metoden i 3-D på kuber |
| Elektromagnetisme | `poisson2d`, `magnetostatic2d` | 2-D elektrostatikk (potensial, felt, kapasitans, ladning) og magnetostatikk (vektorpotensial, fluksetetthet, permanentmagneter) |
| Fluidstrømning | `lbm2d`, `lbm3d` | Gitter-Boltzmann-strømning: 2-D skrevet ut i skriptet, 3-D på PartCrafts egen strømningskjerne |

Hver funksjons hode gir de nøyaktige argumentene. Enhetene er de som brukes i PartCrafts studier, med mindre hodet sier noe annet: millimeter, newton, megapascal, tonn per kubikkmillimeter for tetthet, watt og kelvin for varme. De elektromagnetiske funksjonene og gitter-Boltzmann-funksjonene virker i alle konsistente enheter; hodene deres sier hvordan.

## Hvordan biblioteket kontrolleres

Hver funksjons hode slutter med en **kontroll**: et lite tilfelle med et kjent svar. PartCrafts tester kjører alle sammen, og der PartCraft har en egen studie for samme jobb, sammenlignes skriptets svar med den studien på samme nett:

- spissnedbøyningen til den utkragede bjelken mot bjelketeori (innen 0.2 % med kuber, 0.05 % med tetraedre), og mot løserne i **Simulering**-arbeidsområdet på samme nett (de samme til mange siffer);
- bjelkens første frekvens mot bjelketeori (0.24 % lavere, som forventet for en kort bjelke) og mot modalløseren i **Simulering**;
- varme: en oppvarmet plan vegg nøyaktig, en liten kropp som kjøles etter den samlede kapasitetsformelen, en platetemperatur som dør bort slik teorien sier;
- topologioptimering: `top88` reproduserer artikkelens 94 iterasjoner og compliance 203.1925 (og 218.8032 med tetthetsfilteret); `topopt3d` ender på samme compliance som **Generativ**-arbeidsområdet med samme innstillinger;
- en kondensators kapasitans og feltet i en lang solenoid mot lærebokverdiene, elektromagnetens gapfelt mot formelen for magnetkrets, og permanentmagneter mot en rund magnet i luft og en magnet lukket av et jernstykke;
- kanalstrømning mot den eksakte parabolske profilen.

## Les en funksjon

1. Åpne fanen **Bibliotek** i skriptpanelet.
2. Klikk på en funksjon. Hodet viser: hva den beregner, metoden, enheter, forutsetninger og grenser, **referansene** (bok eller artikkel, med ligningsnummer) og en **kontroll**: et lite tilfelle med kjent svar som PartCrafts egne tester kjører.
3. {{ui:Åpne (skrivebeskyttet)}} åpner hele skriptet i en fane med stiplet kant. Du kan kjøre det, velge og kjøre deler av det, men ikke endre det.

## Endre en

Trykk {{ui:Lag en kopi}} (eller **Lag en kopi for redigering** over en skrivebeskyttet fane). Kopien er et skript i delen din med samme navn, så den lagres sammen med delen, og **hvert kall til den funksjonen bruker nå kopien din**. Redigeringsverktøyet sier det over skriptet. Gi kopien nytt navn for å beholde begge.

## Bruk en

Kall en bibliotekfunksjon fra et hvilket som helst skript med navnet, slik som en innebygd funksjon:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Resultatene kommer tilbake som verdier i arbeidsområdet; plott og felt den viser, dukker opp i visningen og delvisningene.

En statisk analyse av den åpne delen tar for eksempel noen få linjer:

```
v = voxel_mesh(part(), 2);                   % 2 mm kuber
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % hold bunnen
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N ned på toppen
r = static_voxel(v, 210000, 0.3, bc);       % stål
```

`r` holder forskyvningene, spenningene og reaksjonene; von Mises-spenningen tegnes på den deformerte delen. For buede deler brukes `tet_mesh` og `static_tet`, som også kan laste og holde hele flater (`face_nodes`).

:::note
Bibliotekets funksjoner er skrevet i CraftScript, og et Lua-skript kaller dem gjennom `cs` på samme måte som de innebygde funksjonene: `cs.static_tet(t, 200000, 0.3, bc)` (se [Skript i Lua](topic:craftscript-lua)). Hver funksjon løser ett materiale og ett lasttilfelle; hodene viser hva som ikke er dekket.
:::
