---
title: Begin 'n handleiding in Illustreer
summary: Die Illustreer-werkruimte maak handleidings uit jou ontwerp: aansigte, uiteengehaalde lynkuns met ballonne en 'n onderdeellys, stap-vir-stap-instruksies, animasies en 'n 3D-lêer wat 'n kliënt sonder CAD kan oopmaak. 'n Handleiding is 'n lêer op sy eie.
keywords: illustreer, handleiding, tegniese illustrasie, dokumentasie, uiteengehaalde aansig, onderdeellys, instruksies, partcraft-manual
from: e447e0ab
---

**Illustreer** is die werkruimte vir die dokumente wat mense rondom 'n ontwerp nodig het: uiteengehaalde aansigte met ballonne en 'n onderdeellys, lynkuns-illustrasies vir handleidings, stap-vir-stap-instruksies, animasies en 'n 3D-lêer wat 'n kliënt sonder CAD kan oopmaak. Kies {{ui:Illustreer}} in die {{ui:Werkruimte}}-skakelaar aan die begin van die nutsbalk.

'n **Handleiding** is 'n lêer op sy eie (`<naam>.partcraft-manual.json`). Dit hou 'n kopie van elke onderdeel se vorm, die produkboom en die onderdele se eienskappe, en 'n skakel terug na waar hulle vandaan kom, sodat jy aan die handleiding kan werk terwyl die ontwerp voortgaan. Wanneer die ontwerp verander, bring [Werk vanaf die ontwerp by](topic:illustrate-update) die veranderinge in.

## Begin een

Klik {{ui:Nuut}} in die groep {{ui:Handleiding}}, en kies dan:

- {{ui:Vanaf die oop onderdeel}}: die onderdeel wat in Ontwerp oop is.
- {{ui:Vanaf die oop samestelling}}: word in plaas daarvan gewys wanneer 'n samestelling oop is; sy onderdele, hul plekke, onderdeelnommers, materiale en uiteengehaalde aansigte kom saam.
- {{ui:Vanaf 'n samestellingslêer…}}: 'n gestoorde `.partcraft-asm.json`; PartCraft bou eers sy onderdele.
- {{ui:Vanaf 'n ander lêer…}}: glTF (.glb, .gltf), OBJ, STL of 3MF. Die lêer se boom en name word behou, en kopieë van een onderdeel (dieselfde vorm twee keer geplaas) word een onderdeel met 'n hoeveelheid. STL- en OBJ-lêers sê nie hul eenheid nie, dus word jy gevra. STL-lêers word met Z op gelees; glTF en 3MF sê hul eie.

Terwyl 'n handleiding oop is, wys Illustreer die handleiding se eie kopie van die onderdele; die onderdeel of samestelling wat in Ontwerp oop is, is versteek totdat jy terug na Ontwerp gaan.

## Stoor en maak oop

{{ui:Stoor}} in die groep {{ui:Handleiding}} (of {{key:Mod+S}}) stoor die handleiding; {{ui:Maak oop}} maak een oop. Elke verandering in Illustreer is een stap in die handleiding se eie geskiedenis: {{ui:Ontdoen}} en {{ui:Herdoen}} werk op die handleiding terwyl Illustreer oop is.

## Nog nie gebou nie

- STEP-lêers maak nog nie oop in {{ui:Vanaf 'n ander lêer…}} nie. Maak die STEP in Ontwerp oop (dit kom as 'n soliede liggaam in: sien [Maak 'n STEP-lêer oop](topic:import-step)) en begin die handleiding {{ui:Vanaf die oop onderdeel}}, of stoor dit as glTF, 3MF, OBJ of STL.
- ModelCraft en BimCraft kan nog nie 'n model direk aan Illustreer gee nie: stoor dit as glTF (.glb) en gebruik {{ui:Vanaf 'n ander lêer…}}.

Volgende: [Aansigte en voorkoms](topic:illustrate-views).
