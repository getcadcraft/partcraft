---
title: De analysebibliotheek
summary: De bibliotheek met leesbare analysescripts in de Script-werkomgeving: wat elke groep bevat, een functie alleen-lezen openen, de kop met methode, referenties en een controle, een eigen kopie maken, en hoe een kopie de bibliotheekfunctie overneemt.
keywords: bibliotheek, craftlib, analyse, elektromagneet, statisch, modaal, thermisch, topologie-optimalisatie, top88, SIMP, elektromagnetica, elektrostatica, magnetostatica, stroming, lattice Boltzmann, LBM, mesh, voxel, tetraëders, referenties, controle, verificatie, kopie, schaduw
from: bf993859
---

De analysebibliotheek is een verzameling scripts, elk een functie die u van boven naar onder kunt lezen: hoe de stijfheidsmatrix wordt opgebouwd, waar de randvoorwaarden komen, welke oplosser draait, hoe de resultaten worden berekend. Niets erin is verborgen in een black box; alleen de snelle binnenste lussen (elementmatrices, ijle oplossers, meshing) zijn ingebouwd.

## Begin met een voorbeeld

De groep **Voorbeelden** bevat vijf korte scripts die de bibliotheek van begin tot eind gebruiken. Klik op een ervan, druk op {{ui:Openen (alleen-lezen)}}, en daarna op {{key:F5}}: elk maakt de weergave leeg, toont een resultaat op het canvas en een grafiek in de subweergaven.

| Voorbeeld | Wat het toont |
|---|---|
| Uitkragende balk, spanning | Een stalen staaf van 100 × 10 × 10 mm onder een puntbelasting van 100 N: von Mises-spanning op de vervormde staaf, en de doorbuiging van de punt tegenover de balktheorie bij vier elementgroottes (in een grafiek) |
| MBB-balk, topologie | De klassieke topologie-optimalisatie van 60 × 20: het ontstaan van het ontwerp, de dalende compliance, de uiteindelijke indeling (94 iteraties, compliance 203.19) |
| Condensatorveld | Twee platen van 4 mm breed, 1 mm uit elkaar: potentiaal en veld, de capaciteit met randeffecten tegenover de ideale waarde en de formule van Palmer |
| Kanaalstroming | Lattice Boltzmann-stroming langs een paal in een kanaal: het snelheidsveld en de convergentiegeschiedenis |
| Elektromagneet | Een C-vormige ijzeren kern met een luchtspleet en een spoel: de fluxdichtheid, het veld in de spleet tegenover de formule van het magnetische circuit, de inductie en de trekkracht over de spleet. Doorlopen in [Magnetische velden in 2D](topic:magnetic-fields-2d) |
| Permanente magneet | Dezelfde kern met een permanente magneet in plaats van de spoel: het werkpunt van de magneet, het veld in de spleet tegenover het magnetische circuit, hoeveel flux lekt, de trekkracht. In [Magnetische velden in 2D](topic:magnetic-fields-2d#permanent-magnets) |

## Groepen

| Groep | Functies | Wat ze doen |
|---|---|---|
| Meshing | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Dozen en cilinders als hexaëders, kubussen of tetraëders; kubussen of tetraëders van elk model (het onderdeel, een lichaam, een geladen STL); elementvolumes en kwaliteit; knopen kiezen op een vlak of een vlak oppervlak |
| Statische spanning | `static_voxel`, `static_tet` | Lineaire statische spanning op kubussen of op 10-knoops tetraëders: verplaatsingen, spanningen, von Mises, reacties |
| Frames | `frame3d` | 3D-frames van balken, kolommen en verbindingen volgens de directe-stijfheidsmethode: eindvrijgaven, steunen en veren, belastingen langs staven; verplaatsingen, reacties, eindkrachten van staven. De opdracht {{ui:Exporteren als CraftScript}} van DetailCraft en BimCraft schrijft er een compleet model voor weg. Een analysehulpmiddel, geen constructieve toets |
| Trilling | `modal_tet` | Eigenfrequenties en eigenvormen |
| Warmte | `heat_steady`, `heat_transient`, `heat_system` | Stationaire en transiënte warmtegeleiding met vaste temperaturen, warmte-invoer, generatie, flux en convectie |
| Topologie-optimalisatie | `top88`, `top99`, `topopt3d` | De gepubliceerde 2D-codes van 88 en 99 regels, en dezelfde methode in 3D op kubussen |
| Elektromagnetisme | `poisson2d`, `magnetostatic2d` | 2D-elektrostatica (potentiaal, veld, capaciteit, lading) en magnetostatica (vectorpotentiaal, fluxdichtheid, permanente magneten) |
| Vloeistofstroming | `lbm2d`, `lbm3d` | Lattice Boltzmann-stroming: 2D uitgeschreven in het script, 3D op de eigen stromingskern van PartCraft |

De kop van elke functie geeft de exacte argumenten. Eenheden zijn die van de studies van PartCraft, tenzij de kop anders zegt: millimeter, newton, megapascal, ton per mm³ voor dichtheid, watt en kelvin voor warmte. De elektromagnetische en lattice Boltzmann-functies werken in elke consistente eenheid; hun koppen zeggen hoe.

## Hoe de bibliotheek wordt gecontroleerd

De kop van elke functie eindigt met een **controle**: een klein geval met een bekend antwoord. De tests van PartCraft draaien ze allemaal, en waar PartCraft een eigen studie voor dezelfde taak heeft, wordt het antwoord van het script vergeleken met die studie op hetzelfde mesh:

- de doorbuiging van de punt van de uitkragende balk tegenover de balktheorie (binnen 0.2 % met kubussen, 0.05 % met tetraëders), en tegenover de oplossers van de werkomgeving **Simulatie** op hetzelfde mesh (hetzelfde tot vele cijfers);
- de eerste eigenfrequentie van de uitkragende balk tegenover de balktheorie (0.24 % lager, zoals verwacht voor een korte balk) en tegenover de trillingsoplosser van **Simulatie**;
- warmte: een verwarmde vlakke wand exact, een klein lichaam dat afkoelt zoals de lumped-capacity-formule zegt, de temperatuur van een plaat die wegsterft zoals de theorie zegt;
- topologie-optimalisatie: `top88` reproduceert de 94 iteraties en compliance 203.1925 uit het artikel (en 218.8032 met het dichtheidsfilter); `topopt3d` eindigt op dezelfde compliance als de werkomgeving **Generatief** met dezelfde instellingen;
- de capaciteit van een condensator en het veld van een lange solenoïde tegenover hun leerboekwaarden, het spleetveld van de elektromagneet tegenover de formule van het magnetische circuit, en permanente magneten tegenover een ronde magneet in lucht en een magneet gesloten door een ijzeren keeper;
- kanaalstroming tegenover het exacte parabolische profiel.

## Een functie lezen

1. Open het tabblad **Bibliotheek** van het scriptpaneel.
2. Klik op een functie. De kop toont: wat ze berekent, de methode, eenheden, aannames en grenzen, de **referenties** (boek of artikel, met vergelijkingsnummers) en een **controle** — een klein geval met een bekend antwoord dat de eigen tests van PartCraft draaien.
3. {{ui:Openen (alleen-lezen)}} opent het hele script in een tabblad met een gestreepte rand. U kunt het uitvoeren, delen ervan selecteren en uitvoeren, maar niet wijzigen.

## Er een wijzigen

Druk op {{ui:Een kopie maken}} (of **Een kopie maken om te bewerken** boven een alleen-lezen tabblad). De kopie is een script in uw onderdeel met dezelfde naam, dus het wordt samen met het onderdeel opgeslagen, en **elke aanroep van die functie gebruikt nu uw kopie** — de editor meldt dat boven het script. Hernoem de kopie om beide te behouden.

## Er een gebruiken

Roep een bibliotheekfunctie vanuit elk script aan bij zijn naam, net als een ingebouwde functie:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Resultaten komen terug als waarden in de werkomgeving; grafieken en velden die het toont verschijnen in de weergave en de subweergaven.

Een statische analyse van het geopende onderdeel neemt bijvoorbeeld een paar regels:

```
v = voxel_mesh(part(), 2);                   % kubussen van 2 mm
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % bodem vasthouden
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N naar beneden op de bovenkant
r = static_voxel(v, 210000, 0.3, bc);       % staal
```

`r` bevat de verplaatsingen, spanningen en reacties; de von Mises-spanning wordt op het vervormde onderdeel getekend. Voor gebogen onderdelen gebruikt u `tet_mesh` en `static_tet`, die ook hele vlakken kunnen belasten en vasthouden (`face_nodes`).

:::note
De functies van de bibliotheek zijn geschreven in CraftScript, en een Lua-script roept ze aan via `cs`, net als de ingebouwde functies: `cs.static_tet(t, 200000, 0.3, bc)` (zie [Lua-scripts](topic:craftscript-lua)). Elke functie lost één materiaal en één belastinggeval op; de koppen vermelden wat verder niet is gedekt.
:::
