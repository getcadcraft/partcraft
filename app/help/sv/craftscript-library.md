---
title: Analysbiblioteket
summary: Biblioteket med läsbara analysskript i skriptarbetsytan: vad varje grupp innehåller, att öppna en funktion skrivskyddad, dess rubrik med metod, referenser och en kontroll, att göra en egen kopia och hur en kopia tar över från biblioteksfunktionen.
keywords: bibliotek, craftlib, analys, elektromagnet, statisk, modal, värme, topologioptimering, top88, SIMP, elektromagnetism, elektrostatik, magnetostatik, flöde, gitter-Boltzmann, LBM, nät, voxel, tetraedrar, referenser, kontroll, verifiering, kopia, skugga
from: bf993859
---

Analysbiblioteket är en samling skript, var och en en funktion du kan läsa uppifrån och ned: hur styvhetsmatrisen sätts ihop, var randvillkoren läggs, vilken lösare som körs och hur resultaten räknas ut. Ingenting i den är dolt i en svart låda; bara de snabba inre looparna (elementmatriser, glesa lösare, nätgenerering) är inbyggda.

## Börja med ett exempel

Gruppen **Exempel** innehåller fem korta skript som använder biblioteket från början till slut. Klicka på ett, tryck på {{ui:Öppna (skrivskyddad)}} och sedan {{key:F5}}: vart och ett rensar vyn, visar ett resultat i vyn och en graf i underpanelerna.

| Exempel | Vad det visar |
|---|---|
| Fribärande balk: spänning | En stålstång 100 × 10 × 10 mm under en 100 N spetslast: von Mises-spänning på den deformerade stången, och spetsnedböjningen mot balkteori vid fyra elementstorlekar (plottad) |
| MBB-balk: topologi | Den klassiska 60 × 20 topologioptimeringen: designen tar form, compliance sjunker, slutlig layout (94 iterationer, compliance 203.19) |
| Kondensatorfält | Två plattor 4 mm breda, 1 mm från varandra: potential och fält, kapacitansen med kantfältet mot det ideala värdet och Palmers formel |
| Kanalflöde | Gitter-Boltzmann-flöde förbi en stolpe i en kanal: hastighetsfältet och konvergenshistoriken |
| Elektromagnet | En C-formad järnkärna med luftgap och en spole: flödestätheten, fältet i gapet mot formeln för magnetkretsen, induktansen och dragkraften över gapet. Genomgången i [Magnetfält i 2D](topic:magnetic-fields-2d) |
| Permanentmagnet | Samma kärna med en permanentmagnet i stället för spolen: magnetens arbetspunkt, fältet i gapet mot magnetkretsen, hur mycket flöde som läcker och dragkraften. I [Magnetfält i 2D](topic:magnetic-fields-2d#permanent-magnets) |

## Grupper

| Grupp | Funktioner | Vad de gör |
|---|---|---|
| Nätgenerering | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Lådor och cylindrar som hexaedrar, kuber eller tetraedrar; kuber eller tetraedrar av valfri modell (delen, en kropp, en inläst STL); elementvolymer och kvalitet; plocka noder på ett plan eller en yta |
| Statisk spänning | `static_voxel`, `static_tet` | Linjär statisk spänning på kuber eller på 10-nodiga tetraedrar: förskjutningar, spänningar, von Mises, reaktioner |
| Ramar | `frame3d` | 3D-ramar av balkar, pelare och stag enligt direkta styvhetsmetoden: ändfrigöranden, upplag och fjädrar, laster längs stavarna; förskjutningar, reaktioner och ändkrafter i stavarna. DetailCrafts och BimCrafts {{ui:Exportera som CraftScript}} skriver en hel modell för den. Ett analyshjälpmedel, inte en kontroll av konstruktionen |
| Vibration | `modal_tet` | Egenfrekvenser och egenformer |
| Värme | `heat_steady`, `heat_transient`, `heat_system` | Stationär och transient värmeledning med fasta temperaturer, värmetillförsel, generering, flöde och konvektion |
| Topologioptimering | `top88`, `top99`, `topopt3d` | De publicerade 88- och 99-radiga 2D-koderna, och samma metod i 3D på kuber |
| Elektromagnetism | `poisson2d`, `magnetostatic2d` | 2D-elektrostatik (potential, fält, kapacitans, laddning) och magnetostatik (vektorpotential, flödestäthet, permanentmagneter) |
| Fluidflöde | `lbm2d`, `lbm3d` | Gitter-Boltzmann-flöde: 2D skrivet i skriptet, 3D på PartCrafts egna flödeskärna |

Varje funktions rubrik anger dess exakta argument. Enheterna är de som PartCrafts studier använder, om inte rubriken säger något annat: millimeter, newton, megapascal, ton per kubikmillimeter för densitet, watt och kelvin för värme. Elektromagnetiska funktioner och gitter-Boltzmann-funktioner arbetar i valfria men konsekventa enheter; deras rubriker anger hur.

## Så kontrolleras biblioteket

Varje funktions rubrik avslutas med en **kontroll**: ett litet fall med ett känt svar. PartCrafts tester kör alla, och där PartCraft har en egen studie för samma uppgift jämförs skriptets svar med den studien på samma nät:

- konsolens spetsnedböjning mot balkteori (inom 0.2 % med kuber, 0.05 % med tetraedrar) och mot lösarna i arbetsytan **Simulering** på samma nät (lika till många siffror);
- konsolens första frekvens mot balkteori (0.24 % lägre, väntat för en kort balk) och mot den modala lösaren i **Simulering**;
- värme: en uppvärmd plan vägg exakt, en liten kropp som svalnar enligt formeln för samlad kapacitet, en plattas temperatur som dör ut enligt teorin;
- topologioptimering: `top88` återskapar artikelns 94 iterationer och compliance 203.1925 (och 218.8032 med densitetsfiltret); `topopt3d` slutar på samma compliance som arbetsytan **Generativ** med samma inställningar;
- en kondensators kapacitans och ett långt solenoids fält mot deras läroboksvärden, elektromagnetens gapfält mot formeln för magnetkretsen, och permanentmagneter mot en rund magnet i luft och en magnet stängd av ett järnankare;
- kanalflöde mot den exakta parabolprofilen.

## Läs en funktion

1. Öppna fliken **Bibliotek** i skriptpanelen.
2. Klicka på en funktion. Dess rubrik visar vad den beräknar, metoden, enheter, antaganden och gränser, **referenserna** (bok eller artikel, med ekvationsnummer) och en **kontroll**: ett litet fall med ett känt svar som PartCrafts egna tester kör.
3. {{ui:Öppna (skrivskyddad)}} öppnar hela skriptet i en flik med streckad kant. Du kan köra det, markera och köra delar av det, men inte ändra det.

## Ändra en

Tryck på {{ui:Gör en kopia}} (eller **Gör en kopia för att redigera** ovanför en skrivskyddad flik). Kopian är ett skript i din del med samma namn, så det sparas med delen, och **varje anrop till den funktionen använder nu din kopia**. Redigeraren säger det ovanför skriptet. Byt namn på kopian för att behålla båda.

## Använd en

Anropa en biblioteksfunktion från valfritt skript med dess namn, precis som en inbyggd funktion:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Resultaten kommer tillbaka som värden i arbetsytan; grafer och fält den visar syns i vyn och underpanelerna.

En statisk analys av den öppna delen tar till exempel några rader:

```
v = voxel_mesh(part(), 2);                   % 2 mm kuber
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % håll botten
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N nedåt på toppen
r = static_voxel(v, 210000, 0.3, bc);       % stål
```

`r` innehåller förskjutningarna, spänningarna och reaktionerna; von Mises-spänningen ritas på den deformerade delen. För krökta delar används `tet_mesh` och `static_tet`, som också kan belasta och hålla hela ytor (`face_nodes`).

:::note
Bibliotekets funktioner är skrivna i CraftScript, och ett Lua-skript anropar dem via `cs` precis som de inbyggda funktionerna: `cs.static_tet(t, 200000, 0.3, bc)` (se [Skript i Lua](topic:craftscript-lua)). Varje funktion löser ett material och ett lastfall; rubrikerna anger vad mer som inte täcks.
:::
