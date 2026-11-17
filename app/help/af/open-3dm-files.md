---
title: Maak 'n .3dm-model oop as 'n soliede liggaam
summary: Bring die maas, polyoppervlaktes en blokkies van 'n .3dm-lêer in PartCraft as een soliede liggaam wat jy kan sny, byvoeg en op skets; waar die driehoeke vandaan kom, en wat weggelaat word.
keywords: 3dm, nurbs, polyoppervlak, brep, oppervlaktes, weergawemaas, ekstrusie, blokkies, invoer, maas na soliede, eenhede, ingevoerde liggaam
from: 8ae9571b
---

PartCraft maak `.3dm`-lêers oop as **soliede liggame**, op dieselfde manier as waarop dit 'n [STL-, OBJ- of 3MF-maas](topic:open-meshes) oopmaak. Die liggaam werk soos enige ander soliede: sny dit, voeg by, boor dit, patroon dit, en skets op sy plat vlakke. Dit het geen geskiedenis van sy eie nie.

## Maak die lêer oop

1. Kies {{ui:Open}} of druk {{key:Mod+O}}, en kies die `.3dm`-lêer. Of gooi dit op die 3D-aansig.
2. PartCraft lees dit en wys wat dit gevind het: hoeveel voorwerpe met vlakke inkom, hoeveel vlakke uit die maas wat in die lêer gestoor is kom en hoeveel PartCraft self getesselleer het, elke herstel, en of die uitkoms **sluit**.
3. Kontroleer **Eenhede in die lêer** (die lêer sê self wat dit is; 'n eenheid wat PartCraft nie lys nie, soos jard, word na millimeter omgeskakel) en **Op in die lêer**.
4. Kies {{ui:Open as a body}}, of **Gebruik dit om** en {{ui:Add to this part}} wanneer die onderdeel reeds kenmerke het.

## Waar die driehoeke vandaan kom

PartCraft bou liggame in hierdie weergawe uit driehoeke, so elke oppervlak in die lêer word klein plat vlakke. Vir elke vlak van 'n polyoppervlak (en elke ekstrusie) neem dit die **weergawemaas wat in die lêer gestoor is** wanneer daar een is, anders **tesselleer dit self** (vlakke, NURBS-oppervlaktes, omwentelingsoppervlaktes, ekstrueerde krommes en ekstrusies, getrim deur hul rande). Vlakke van een polyoppervlak deel hul randpunte, so 'n geslote polyoppervlak kom geslote in. 'n Vlak op 'n soort oppervlak wat PartCraft nog nie lees nie, word weggelaat en die dialoog sê hoeveel en watter soort; die uitkoms sluit dan gewoonlik nie.

## Alles in die lêer word een liggaam

Elke sigbare maas, polyoppervlak en ekstrusie, en elke plasing van 'n blokkie, gaan in **een** liggaam waar die lêer dit plaas. Voorwerpe wat versteek is, of op 'n laag wat af is, word weggelaat. Wanneer die lêer verskeie aparte soliede hou, het die liggaam verskeie stukke: maak elkeen uit sy eie lêer oop as jy hulle as aparte liggame wil hê.

## Wat weggelaat word (en gesê word)

Krommes, punte, puntwolke, teks, afmetings, arsering en ligte word weggelaat: 'n liggaam neem slegs vlakke. Dit geld ook vir SubD-voorwerpe (skakel dit eers om na maas of polyoppervlaktes in die program wat die lêer gemaak het), blokkies wat van ander lêers gekoppel is, en kleure, lae en name (PartCraft-liggame het hier geen eie nie).

## Wanneer dit nie sluit nie

Oop polyoppervlaktes en oppervlaktes (’n enkele getrimde oppervlak, 'n vorm met 'n ontbrekende vlak) het geen binnekant nie, so hulle kan nie 'n soliede wees nie. Die dialoog sê hoeveel openings oorbly en voeg niks by nie. Voeg die vorm in die program wat dit gemaak het saam of sluit dit, stoor, en maak dit weer oop. Sien [Wanneer 'n maas nie sluit nie](topic:open-meshes#when-a-mesh-does-not-close).
