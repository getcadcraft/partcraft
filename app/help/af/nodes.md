---
title: Knope: bou 'n model deur te bedraad
summary: Koppel getalle aan punte, punte aan krommes, krommes aan oppervlaktes. Verander 'n getal en alles stroomaf bou weer. Elke knoop is ook 'n reël CraftScript, en die grafiek word in die lêer gestoor.
keywords: knope, knoopredigeerder, visuele skripsie, parametries, grafiek, drade, poorte, vryvorm, nurbs, loft, ekstrusie, roteer, sirkel, kromme, oppervlak, reeks, omvang, ewekansig, lys, skrip, craftscript, grasshopper
from: 3a4625de
---

Die **Knope**-redigeerder bou meetkunde deur blokkies aan mekaar te koppel. Elke blokkie (’n knoop) doen een klein werk: maak 'n getal, 'n punt, 'n sirkel, 'n loft. Jy koppel die resultaat van een aan die invoer van die volgende, en die model volg wanneer jy 'n getal aan die begin verander.

Maak dit oop vanaf die werkruimtelys: {{ui:Nodes}}. Dit maak die redigeerdervenster oop. 'n Onderdeel wat reeds 'n grafiek het, wys dit wanneer jy die werkruimte oopmaak. Dit is 'n venster oor die 3D-aansig: sleep die titelbalk om dit te skuif, sleep die hoek om die grootte te verander.

## Bedrading

1. Kies 'n knoop uit die lys aan die linkerkant (tik in die soekkassie om te vernou; <kbd>Enter</kbd> voeg die eerste pasmaker by). Dit verskyn in die middel van die doek.
2. Sleep van 'n ronde **uitvoer**-stippie aan die regterkant van een knoop na 'n ronde **invoer**-stippie aan die linkerkant van 'n ander. Die stippie word groen as dit pas en rooi as nie; wys daarop vir die rede.
3. 'n Invoer waaraan niks gekoppel is nie, wys 'n kassie vir 'n getikte waarde. Tik 'n getal en druk <kbd>Tab</kbd>: die resultaat bou weer.
4. Die klein sirkel in 'n knoop se titelbalk is sy **oog**. 'n Knoop met die oog aan word in die 3D-aansig geteken: as lyne vir krommes, skadu vir oppervlaktes, stippels vir punte.

Sleep 'n knoop aan sy titelbalk. Sleep die agtergrond om te skuif, draai die wiel om te zoem. <kbd>Delete</kbd> verwyder die gekose knoop. {{ui:Tidy}} rangskik die knope in kolomme, {{ui:Fit}} bring hulle almal in sig, en {{ui:Undo}} en {{ui:Redo}} loop deur jou wysigings.

## Tipes en eenhede

Poorte het 'n tipe: getal, ja/nee, punt, vektor, kromme, oppervlak, maas, soliede liggaam, of "meetkunde" vir enige van daardie. 'n Punt kan 'n vektorinvoer voed en andersom. Getalle dra 'n eenheid: 'n **lengte** is in millimeter en 'n **hoek** is in grade. 'n Lengte kan nie 'n hoek voed nie, en 'n lengte maal 'n lengte (’n oppervlakte) word geweier, so 'n verkeerde draad word gestop wanneer jy dit maak.

'n Vierkantige stippie is 'n **lys**. Wanneer 'n lys by 'n enkelwaarde-invoer kom, loop die knoop een keer vir elke item, en sy resultaat word 'n lys. Die kortere lys herhaal sy laaste item. Byvoorbeeld, 'n **Reeks** van hoogtes na **Skuif** maak 'n stapel kopieë.

## Soliede en Booleans as knope

Die **Soliede**-groep maak geslote liggame uit dieselfde presiese oppervlaktes as die Oppervlaktes-paneel: **Blokkie-soliede**, **Silinder-soliede** en **Sfeer-soliede** (groottes in mm), **Unie**, **Trek af** en **Snyding** (die tweede soliede word uit die eerste geneem; die toleransie is hoe ver die soliede-enjin se driehoeke van die presiese oppervlaktes mag wees), **Afrond tussen vlakke** (die vlakke volgens hul nommer in die soliede, 1 vir die eerste; 'n radius en, bo 0, 'n radius aan die einde), **Soliede volume** (mm³) en **Soliede na maas** (om dit te sien of te bak). 'n Soliede het sy eie poorttipe: 'n punt of 'n getal kan nie in 'n soliede invoer gedraad word nie, en die stippie bly rooi. Die Boolean- en Afrondknope gebruik die program se eie soliede-enjin, wat die eerste keer gelaai word wanneer die redigeerder oopgaan.

## Foute

'n Knoop wat sy werk nie kan doen nie, sê hoekom onder sy naam, in rooi ("Die radius moet groter as nul wees."), en die knope daarna wag. Dieselfde boodskap is 'n Probleem in die Probleme-paneel, so jy kan dit daar vind.

## Elke knoop is 'n reël skrif

Druk {{ui:Script}} om die grafiek as CraftScript te sien: een reël per knoop, soos `n3 = nd_circle(n2, n1, [0 0 1]);`. Wysig die teks en druk {{ui:Make the graph from this script}} om dit terug as 'n grafiek te kry. Dieselfde `nd_`-funksies werk in 'n CraftScript in PartCraft, so 'n grafiek kan daar gedraai, herhaal of getoets word. Ewekansige getalle neem altyd 'n **saad**, so dieselfde grafiek gee dieselfde resultaat op elke rekenaar.

## Saam met die lêer gestoor

Die grafiek word in die onderdeellêer gestoor (nie in die geskiedenis nie, so Ontdoen in die redigeerder is sy eie). Die knope maak krommes, oppervlaktes en maas langs die soliede: hulle verander nie die onderdeel se kenmerke nie.
