---
title: Uitvoer vir druk, STEP en DXF
summary: Voer die onderdeel uit as STL of 3MF vir 3D-druk, as 'n presiese STEP-soliede vir ander CAD- en CAM-programme, en 'n skets of 'n plat vlak as DXF vir laser- en waterstraal-snywerk.
keywords: uitvoer, stoor as, ifc, bim, eienskapstelle, stl, 3mf, 3d-druk, snytoepassing, step, stp, presiese step, b-rep, ap242, ap214, cam, masjienwinkel, frees, dxf, laser, waterstraal, cnc, plat patroon, profiel, maas, gefasetteer
from: e1de71d5
---

Uitvoere is kopieë in ander formate. Hou ook die `.partcraft.json`-lêer: dit is die enigste lêer wat PartCraft weer kan oopmaak en wysig.

Alle uitvoere werk op die onderdeel op die skerm, in millimeter. In 'n samestelling voer STL, 3MF, STEP en Tekening (PDF) die hele samestelling uit: sien [Onderdeellys, ontploffingsaansigte en bewegende dele](topic:assembly-bom-explode). As daar nog geen soliede is nie: "Daar is nog geen soliede om uit te voer nie."

## Vir 3D-druk: STL of 3MF

1. Opsioneel: vir gladde ronde oppervlakke, klik op leë ruimte sodat niks gekies is nie, en stel **Krommes** op **Fyn (128 per omwenteling)** of **Baie fyn (256 per omwenteling)** in die regter paneel. STL en 3MF bestaan altyd uit driehoeke.
2. Kies {{ui:Uitvoer}}, dan {{ui:STL, vir 3D-druk}} of {{ui:3MF, vir 3D-druk}}.
3. Die lêer word afgelaai. Die statusbalk sê byvoorbeeld: "Uitgevoer Part1.stl (binêr, mm, Z opwaarts, 1536 driehoeke)."

Albei formate is **Z opwaarts**, soos drukkers en snytoepassings verwag. PartCraft se eie wêreld is Y opwaarts, so die uitvoer draai die onderdeel: wat in PartCraft opwaarts wys (haaks op die Bo-vlak) wys in die snytoepassing opwaarts, en 'n onderdeel wat op die Bo-vlak geskets is, lê plat op die bed. Stel die finale oriëntasie in jou snytoepassing as dit nodig is.

3MF is 'n nuwer, kleiner formaat wat snytoepassings met eenhede ingesluit lees. Gebruik STL as 'n program nie 3MF aanvaar nie.

Om eers te kontroleer dat die onderdeel gesluit is, by jou drukker se bed pas en op 'n plat vlak staan, gebruik {{ui:Uitvoer}} › {{ui:Kontroleer vir 3D-druk (STL of 3MF)…}}: sien [Maak 'n onderdeel gereed vir 3D-druk](topic:print-3d).

## Vir ander CAD-programme: STEP

Kies {{ui:Uitvoer}}, dan {{ui:STEP AP242 (presiese soliede)}}. Dit skryf die onderdeel as een presiese soliede, in millimeter, gedraai na Z opwaarts. Ronde vlakke word as ware silinders, keëls, sfere en torusse geskryf, met ware sirkels vir hul rande, sodat die ander program 'n gat as gat kan kies. 'n Liggaam wat uit 'n STEP-lêer oopgemaak is, behou daardie lêer se plat vlakke, silinders, keëls, sfere en torusse, so dit gaan ook presies uit. Vlakke sonder so 'n oppervlak (die sy van 'n spline, 'n gemodelleerde draad, 'n liggaam uit 'n STL-, OBJ- of 3MF-maas, 'n STEP-lêer se spline, geveegde en omwentelde vlakke) bly plat fasette in dieselfde soliede, en die statusbalk sê hoeveel. Die statusbalk sê byvoorbeeld: "Uitgevoer Flange.step (AP242, presiese soliede, mm, Z opwaarts): 14 vlakke op hul ware oppervlakke (10 silindries, 1 konies, 0 sferies, 0 toroïdaal), 0 passende randkurwes." Dit bevat net die soliede: geen geskiedenis, geen skets en geen tekening nie. As die ander program net AP214 lees, kies {{ui:STEP AP214 (presiese soliede)}}: dieselfde soliede in daardie ouer skema.

Wat presies is en wat nie:

- Plat vlakke, silinders (gate, uitsteeksels, afrondings op reguit rande), keëls (verseënkings, tapse), sfere en torusse is presies, en so ook hul reguit, sirkelvormige en elliptiese rande. Die **Krommes**-instelling verander hulle nie.
- Waar twee ronde vlakke kruis (’n gat wat dwars deur 'n as geboor is), is die rand 'n gladde kromme wat binne 0,00001 mm aan albei oppervlakke pas; "passende randkurwes" tel hulle.
- 'n Geslote holte binne die onderdeel word as 'n leegte van die soliede geskryf. Verskeie losse liggame word as verskeie soliedes geskryf.
- 'n Samestelling word nog nie as presiese STEP geskryf nie: voer elke onderdeel uit.

Dit is nagegaan deur die lêers terug te lees in OpenCascade, wat geldige soliede met volumes wat met die hand bereken is, rapporteer. Dit is nog nie in elke CAD- of CAM-program oopgemaak nie. As een 'n lêer weier, skryf {{ui:STEP (gefasetteer, maaskern)}} dieselfde vorm as plat vlakke (in PartCraft se eie asse, Y opwaarts). Laat ons asseblief weet deur {{ui:Hulp}} › {{ui:Rapporteer 'n probleem}}.

Vir masjinering skryf die Vervaardiging-werkruimte ook die presiese soliede in die opstelling se eie werkkoördinate: sien [Maak gereedskapbane en G-kode](topic:manufacture#exact-step-for-the-shop).

## Vir BIM-programme: IFC met elke eienskap

Kies {{ui:Uitvoer}}, dan {{ui:IFC 4 (met elke eienskap)}}. Dit skryf die onderdeel as 'n IFC 4-element vir gebou- en aanlegmodelle, met die vorm as driehoeke (Z opwaarts, millimeter), en met wat PartCraft daaroor weet as eienskapstelle:

| Eienskapstel | Hou |
|---|---|
| **PartCraft_Part** | Naam, materiaal en sy digtheid, die aktiewe konfigurasie, hoeveel liggame; in 'n samestelling ook die onderdeelnommer en beskrywing |
| **PartCraft_Parameters** | Elke parameter van die onderdeel met sy waarde; 'n formule se uitdrukking en 'n notas is in die eienskap se beskrywing |
| **PartCraft_TitleBlock** | Die titelblokvelde van die tekening wat jy ingevul het (titel, tekeningnommer, hersiening, maatskappy, getek, nagesien en goedgekeur deur, datum, afwerking, algemene toleransie) en die bladgrootte |
| **Qto_BuildingElementProxyQuantities**, **PartCraft_Quantities** | Volume, oppervlakte, massa (met 'n materiaal) en die algehele grootte |

Die materiaal word as 'n IFC-materiaal aangeheg, en die tekeningnommer is die element se etiket. In 'n samestelling word elke onderdeel een keer as 'n tipe geskryf wat sy eienskappe hou, en elke kopie word geplaas waar die samestelling dit plaas, met sy eie waardes in **PartCraft_Instance**: sy naam, sy itemnommer in die materiaallys, en of dit die gegronde onderdeel is.

## Vir laser-, waterstraal- of CNC-profiele: DXF

Twee soorte DXF, albei weergawe R12, wat elke CAD- en CAM-program oopmaak:

### 'n Skets

1. Kies die skets in die geskiedenis (of hou dit oop).
2. Kies {{ui:Uitvoer}}, dan {{ui:DXF van die skets of plat vlak}}. (Die skets se regter paneel het ook {{ui:Voer uit as DXF}}.)

Jy kry `<part> - <sketch>.dxf` in die skets se eie koördinate: lyne, ware bôë en sirkels op laag **PROFILE**, konstruksiemeetkunde op **CONSTRUCTION**, los punte op **POINTS**.

### 'n Plat vlak van die soliede

1. Klik op 'n plat vlak in die aansig (byvoorbeeld die bo-kant van 'n plaat met gate).
2. Kies {{ui:Voer vlak uit as DXF}} in die regter paneel, of {{ui:Uitvoer}}, dan {{ui:DXF van die skets of plat vlak}}.

Jy kry `<part> - face.dxf`: die vlak se omtrek en elke gat daarin. 'n Ronde gat (’n volle sirkel waar 'n silinder die vlak ontmoet: 'n geboorde gat, of 'n gat van 'n oopgemaakte STEP-lêer) word as 'n ware sirkel geskryf met die gat se eie middelpunt en radius. Elke ander omtrek is 'n geslote polilyn, en sy ronde rande (afrondingshoeke, gleuwe, boë) is fasette daarvan, so stel **Krommes** eers op Fyn as die snyer hulle noukeurig volg. Die statusbalk sê hoeveel omtrekke, hoeveel daarvan ware sirkels is, en die vlak se oppervlakte.

As nie 'n skets of 'n plat vlak gekies is nie: "Maak 'n skets oop of kies een, of kies 'n plat vlak, om DXF uit te voer."

## 'n Tekening

Die PDF-tekening het sy eie stap-vir-stap-gids: [Maak 'n tekeningblad](topic:drawing-pdf).

## Formate wat nie beskikbaar is nie

glTF, OBJ, IGES en Parasolid word nie in hierdie weergawe uitgevoer nie. DWG word net deur die variantpakket geskryf, as 'n tekeningblad: sien [Maak 'n variantpakket uit jou konfigurasies](topic:variant-pack). Sien [Lêerformate](topic:file-formats).
