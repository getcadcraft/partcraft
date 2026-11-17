---
title: Die analise-biblioteek
summary: Die biblioteek van leesbare analiseskripte in die Skrip-werkruimte: wat in elke groep is, 'n funksie alleen-lees oopmaak, sy kopstuk met metode, verwysings en 'n kontrole, jou eie kopie maak, en hoe 'n kopie die biblioteekfunksie oorneem.
keywords: biblioteek, craftlib, analise, elektromagneet, statiese, modale, termiese, topologie-optimering, top88, SIMP, elektromagnetisme, elektrostatika, magnetostatika, vloeistof, rooster Boltzmann, LBM, maas, voxel, tetraëders, verwysings, kontrole, verifikasie, kopie, skadu
from: bf993859
---

Die analise-biblioteek is 'n stel skripte, elk 'n funksie wat jy van bo tot onder kan lees: hoe die styfheidsmatriks saamgestel word, waar die randvoorwaardes ingaan, watter oplosser loop, hoe die resultate uitgewerk word. Niks daarin is in 'n swart boksie verborge nie; slegs die vinnige binneste lusse (elementmatrikse, yl oplossers, maasvorming) is ingebou.

## Begin met 'n voorbeeld

Die groep **Voorbeelde** bevat vyf kort skripte wat die biblioteek van begin tot einde gebruik. Klik op een, druk {{ui:Maak oop (leesalleen)}}, en dan {{key:F5}}: elkeen maak die aansig skoon, wys 'n resultaat op die aansig en 'n grafiek in die sub-vertonings.

| Voorbeeld | Wat dit wys |
|---|---|
| Uitkraging-spanning | 'n Staalstaaf 100 × 10 × 10 mm onder 'n 100 N punt-las: von Mises-spanning op die vervormde staaf, en die punt-deurbuiging teen balkteorie by vier elementgroottes (gegrafeer) |
| MBB-balk-topologie | Die klassieke 60 × 20 topologie-optimering: die ontwerp wat vorm kry, die meegiewendheid wat daal, die finale uitleg (94 iterasies, meegiewendheid 203.19) |
| Kapasitorveld | Twee plate 4 mm breed, 1 mm uitmekaar: potensiaal en veld, die kapasitansie met randeffek teenoor die ideale waarde en Palmer se formule |
| Kanaalvloei | Rooster-Boltzmann-vloei verby 'n paal in 'n kanaal: die snelheidsveld en die konvergensiegeskiedenis |
| Elektromagneet | 'n C-vormige ysterkern met 'n lugspleet en 'n spoel: die fluksdigtheid, die veld in die spleet teenoor die magnetiese-kringformule, die induktansie en die trekkrag oor die spleet. Deurloop in [Magnetiese velde in 2-D](topic:magnetic-fields-2d) |
| Permanente magneet | Dieselfde kern met 'n permanente magneet in plaas van die spoel: die magneet se werkspunt, die veld in die spleet teenoor die magnetiese kring, hoeveel fluks lek, die trekkrag. In [Magnetiese velde in 2-D](topic:magnetic-fields-2d#permanent-magnets) |

## Groepe

| Groep | Funksies | Wat hulle doen |
|---|---|---|
| Maasvorming | `box_mesh`, `cylinder_mesh`, `voxel_mesh`, `tet_mesh`, `mesh_quality`, `nodes_at`, `face_nodes` | Bokse en silinders as heksaëders, kubusse of tetraëders; kubusse of tetraëders van enige model (die onderdeel, 'n liggaam, 'n gelaaide STL); elementvolumes en gehalte; kies nodes op 'n vlak of 'n vlak |
| Statiese spanning | `static_voxel`, `static_tet` | Lineêre statiese spanning op kubusse of op 10-node-tetraëders: verplasings, spannings, von Mises, reaksies |
| Rame | `frame3d` | 3D-rame van balke, kolomme en stutte volgens die direkte styfheidsmetode: eindvrystellings, steunpunte en vere, las langs lede; verplasings, reaksies, lid-eindkragte. DetailCraft en BimCraft se {{ui:Voer as CraftScript uit}} skryf 'n hele model daarvoor. 'n Analise-hulpmiddel, nie 'n kodetoets nie |
| Vibrasie | `modal_tet` | Natuurlike frekwensies en modusvorms |
| Hitte | `heat_steady`, `heat_transient`, `heat_system` | Bestendige en oorgangsgeleiding met vaste temperature, hitte-inset, opwekking, fluks en konveksie |
| Topologie-optimering | `top88`, `top99`, `topopt3d` | Die gepubliseerde 88- en 99-reël 2-D-kodes, en dieselfde metode in 3-D op kubusse |
| Elektromagnetisme | `poisson2d`, `magnetostatic2d` | 2-D-elektrostatika (potensiaal, veld, kapasitansie, lading) en magnetostatika (vektorpotensiaal, fluksdigtheid, permanente magnete) |
| Vloeistofvloei | `lbm2d`, `lbm3d` | Rooster-Boltzmann-vloei: 2-D uitgeskryf in die skrip, 3-D op PartCraft se eie vloeikern |

Elke funksie se kopstuk gee sy presiese argumente. Eenhede is dié van PartCraft se studies tensy die kopstuk anders sê: millimeter, newton, megapascal, ton per kubieke millimeter vir digtheid, watt en kelvin vir hitte. Die elektromagnetiese en rooster-Boltzmann-funksies werk in enige konsekwente eenhede; hul kopstukke sê hoe.

## Hoe die biblioteek nagegaan word

Elke funksie se kopstuk eindig met 'n **kontrole**: 'n klein geval met 'n bekende antwoord. PartCraft se toetse loop elkeen van hulle, en waar PartCraft sy eie studie vir dieselfde taak het, word die skrip se antwoord vergelyk met daardie studie op dieselfde maas:

- die uitkraging se punt-deurbuiging teen balkteorie (binne 0.2 % met kubusse, 0.05 % met tetraëders), en teen die **Simulasie**-werkruimte se oplossers op dieselfde maas (dieselfde tot baie desimale);
- die uitkraging se eerste frekwensie teen balkteorie (0.24 % laer, soos verwag vir 'n kort balk) en teen **Simulasie** se modale oplosser;
- hitte: 'n verhitte vlakmuur presies, 'n klein liggaam wat afkoel soos die gekonsentreerde-kapasiteitsformule sê, 'n plaat se temperatuur wat wegsterf soos teorie sê;
- topologie-optimering: `top88` herhaal die referaat se 94 iterasies en meegiewendheid 203.1925 (en 218.8032 met die digtheidsfilter); `topopt3d` eindig by dieselfde meegiewendheid as die **Generatiewe** werkruimte met dieselfde instellings;
- 'n kapasitor se kapasitansie en 'n lang soleenoïed se veld teen hul handboekwaardes, die elektromagneet se spleetveld teen die magnetiese-kringformule, en permanente magnete teen 'n ronde magneet in lug en 'n magneet gesluit deur 'n ysterhouer;
- kanaalvloei teen die presiese parabolïese profiel.

## Lees 'n funksie

1. Maak die **Biblioteek**-blad van die skripspaneel oop.
2. Klik op 'n funksie. Die kopstuk wys: wat dit bereken, die metode, eenhede, aannames en perke, die **verwysings** (boek of referaat, met vergelykingnommers) en 'n **kontrole** — 'n klein geval met 'n bekende antwoord wat PartCraft se eie toetse loop.
3. {{ui:Maak oop (leesalleen)}} maak die hele skrip in 'n blad met 'n gestippelde rand oop. Jy kan dit loop, dele daarvan kies en loop, maar dit nie verander nie.

## Verander een

Druk {{ui:Maak 'n kopie}} (of **Maak 'n kopie om te wysig** bo 'n alleen-lees-blad). Die kopie is 'n skrip in jou onderdeel met dieselfde naam, so dit word saam met die onderdeel gestoor, en **elke aanroep na daardie funksie gebruik nou jou kopie** — die redigeerder sê so bo die skrip. Hernoem die kopie om albei te hou.

## Gebruik een

Roep 'n biblioteekfunksie uit enige skrip op met sy naam, soos 'n ingeboude funksie:

```
xPhys = top88(60, 20, 0.5, 3.0, 1.5, 1);
```

Resultate kom terug as waardes in die werkruimte; grafieke en velde wat dit wys, verskyn in die aansig en die sub-vertonings.

'n Statiese analise van die oop onderdeel, byvoorbeeld, neem 'n paar reëls:

```
v = voxel_mesh(part(), 2);                   % 2 mm-kubusse
X = meshNodes(v);
bc = struct('fixed', nodes_at(v, 2, min(X(:, 2))));   % hou die onderkant vas
top = nodes_at(v, 2, max(X(:, 2)));
bc.loads = {struct('nodes', top, 'force', [0 -500 0])};   % 500 N af op die bokant
r = static_voxel(v, 210000, 0.3, bc);       % staal
```

`r` hou die verplasings, spannings en reaksies; die von Mises-spanning word op die vervormde onderdeel geteken. Vir geboë onderdele gebruik `tet_mesh` en `static_tet`, wat ook hele vlakke kan laai en vashou (`face_nodes`).

:::note
Die biblioteek se funksies is in CraftScript geskryf, en 'n Lua-skrip roep hulle deur `cs` soos die ingeboude funksies: `cs.static_tet(t, 200000, 0.3, bc)` (sien [Lua-skripte](topic:craftscript-lua)). Elke funksie los een materiaal en een lasgeval op; die kopstukke lys wat nog nie gedek word nie.
:::
