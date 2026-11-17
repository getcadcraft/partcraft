---
title: Stuur 'n tekening na 'n laser
summary: Kies wat elke laag doen (sny, kras, graveer, vul, prent), voorskou die kop se bewegings, stoor GRBL-laser-modus G-kode, of stuur dit vanaf die blaaier nadat die werk geraam is.
keywords: laser, lasersnyer, laser-graveerder, GRBL, G-kode, graveer, vul, dithering, prentgravering, kras, sny, Web Serial, Linux, raam die werk, krag, spoed, passe
from: 327b3c46
---

Die {{ui:Laser}}-paneel draai die lae van 'n tekening om in 'n program vir 'n laser wat GRBL gebruik (die meeste stokperdjie- en klein-werkswinkel-diode- en CO2-beheerders). Kies in PartCraft {{ui:Uitvoer}} › {{ui:Laserprogram…}}, dan {{ui:Voeg buitelyne uit 'n DXF by…}}: die buitelyne en gate kom in op die laag CUT. Die plat patrone van plaatmetaalonderdele (met hul buigreëls op die laag BEND) benodig die presiese kern, wat hierdie weergawe nie het nie. Die instellings word in die onderdeel- of samestellinglêer gestoor.

:::warning
Toets elke instelling eers op afval, dra oogbeskerming wat by jou laser pas, hou die deksel toe waar daar een is, en laat 'n lopende laser nooit alleen nie. Die getalle waarmee 'n laag begin, is plekhouers, nie aanbevelings vir enige materiaal nie.
:::

## Kies wat elke laag doen

Elke laag van die tekening is 'n ry. {{ui:Doen}} stel dit op **Sny**, **Kras**, **Graveer lyne**, **Vul vorms**, **Graveer prent** of **Nie gestuur nie**, met 'n {{ui:Krag %}}, 'n {{ui:Spoed mm/min}} en 'n aantal {{ui:Passe}}.

- **Vul** brand die binnekant van geslote vorms in lyne, Lynspasiëring uitmekaar, teen 'n {{ui:Hoek}}, in beide rigtings of in een, met 'n oorskandering sodat die kop op spoed is wanneer die laser aanskakel; kruisarsering voeg 'n tweede pas by teen 90°. 'n Vorm met 'n gat bly oop by die gat.
- **Graveer prent** verander 'n prent in punte (Floyd–Steinberg, Atkinson, geordend, of gewone swart en wit by 'n drempel) of, met *Grysvlakke*, in veranderlike krag.
- Volgorde: prente en vulsels eerste, dan lyngravering, dan krasse, dan snitte, sodat 'n uitgesnyde onderdeel nie beweeg terwyl dit gegraveer word nie. Binne een laag loop die paaie **binnekant-eerste** ('n gat voor die plaat waarin dit is), die naaste een volgende.

## Voorskou, dan stoor

Die voorskou teken wat die kop doen: brandende lyne in kleur, vinnige bewegings in grys, en 'n groen boks rondom alles wat brand. Daaronder is die grootte, die lengte van die brand en 'n tydskatting (sonder versnelling; 'n regte masjien neem langer). {{ui:Stoor G-kode…}} skryf GRBL-laser-modus G-kode: `$32=1`, `M4` (of `M3`) met S-waardes, `G0`- en `G1`-bewegings, `M5` aan die einde. X0 Y0 is die werk se linkeronderhoek, tensy jy die tekening se oorsprong kies: stel jou masjien se werksnulpunt daar. Die G-kode volg GRBL se gedokumenteerde laser-modus; dit is nog nie op 'n regte laser probeer nie.

## Stuur vanaf die blaaier

In Chrome en Edge vra {{ui:Koppel…}} jou om die laser se USB-poort te kies. Niks koppel of stuur voordat jy 'n knoppie druk nie. Druk eers {{ui:Raam die werk}}: die kop trek die boks van die werk met die laser **af** (of teen die lae krag wat jy vir 'n wyser gestel het) sodat jy kan sien waar dit gaan brand. Eers dan word {{ui:Stuur werk}} aan, en dit skakel weer af as jy iets verander. {{ui:Pouseer}} hou die kop stil, {{ui:Stop}} hou dit ook stil, stel die beheerder terug (die laser gaan af) en stuur `M5`. Waar Web Serial ontbreek (Firefox, Safari, en CadCraft Studio, waarvan die webaansig nog geen het nie), stoor die G-kode en stuur dit met jou laser se eie program.

## Nog nie gebou nie

Ander beheerders se formate (Ruida, Marlin-lasers, verkoperlêers), lipies en inlope, kerf-verskuiwing, materiaalbiblioteke, roterende en Z-asse, kameraopstelling.
