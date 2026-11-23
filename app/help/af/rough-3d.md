---
title: 3D-growwe en rusbewerking
summary: Ruim die voorraad rondom die hele model vlak vir vlak uit met 'n plat, stompneus- of kogel-eindfrees, en laat materiaal vir afwerking staan, en laat dan 'n kleiner gereedskap net sny waar die eerste een materiaal laat staan het. Wat die bane waarborg, en wat nie.
keywords: 3D-growwe, growwe, rusbewerking, rusgrof, oorblywende voorraad, materiaal om te laat staan, afsnystap, vlakke, Z-vlak, waterlyn, helling, indompeling, gouge, kleiner gereedskap
from: 29ddc266
---

Twee bewerkings in Vervaardiging, onder {{ui:Meer}} in sy werkbalk, ruim voorraad uit die **hele model** in 3D, met die gereedskap regop gehou (of langs die bewerking se eie [gereedskaprigting](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation)). Hulle neem geen keuses nie.

## 3D-growwe

{{ui:3D growwe}} werk af vanaf die bo van die voorraad, een **afsnystap** op 'n slag. By elke vlak ruim dit alles uit wat die gereedskap kan bereik sonder om die model te raak: reguit rye 'n **staponderbreking** uitmekaar (&#8217;n breukdeel van die gereedskapdeursnee), en dan een keer om die rand van wat dit mag bereik, sodat mure gevolg word en nie as 'n ry trappies in plan gelaat word nie.

- **Materiaal om te laat staan**: hoe ver die gereedskap oral van die model af bly, vir die afwerkingspas (verstek 0,5 mm).
- **'n Vlak by elke plat vlak**: 'n ekstra vlak op die hoogte van elke plat vlak van die model (plus die materiaal om te laat staan), sodat 'n vloer nie byna 'n hele afsnystap hoog gelaat word nie.
- **Ignoreer voorraad dunner as**: materiaal dunner as dit, op of opsy, is nie die moeite werd van 'n pas nie (0,05 mm vir growwe, 0,5 mm vir rusbewerking, sodat 'n haarlyntjie langs 'n muur nie die kleiner gereedskap rondom elke muur stuur nie).
- **Onderkant**: niks word onder hierdie hoogte gesny nie. Leeg beteken die onderkant van die model.

Dit begin van die voorraad **soos die bewerkings voor dit dit gelaat het**: ná 'n vlakpas sny dit nie die lug waar die vlakfrees was nie.

Om af te kom: waar die gereedskap op die afpad materiaal sou raak, helling dit langs sy eie pas teen die **hellingshoek**, heen en weer oor hoogstens twee gereedskapdeursnees. 'n Pas wat te kort is daarvoor, word reg af ingedompel teen die indompelvoer; die bewerking tel dit en waarsku, want 'n gereedskap wat nie op sy middelpunt sny nie, moet dit nie doen nie.

## Rusbewerking

{{ui:Rus}} is dieselfde strategie vir **'n kleiner gereedskap ná 'n groter een**. Dit lees die voorraadsimulasie en sny net waar materiaal nog staan: binne-hoeke waarin die groter gereedskap nie kon draai nie, gleuwe waarin dit nie gepas het nie, en die trappe wat dit op hellings gelaat het. Oral elders doen dit niks nie, so sy pad is 'n klein deel van wat dieselfde gereedskap op vars voorraad sou neem.

Plaas dit ná die growwe bewerking en kies die kleiner gereedskap. Dit benodig die voorraadsimulasie van die bewerkings voor dit, wat die werkruimte altyd loop.

## Hoe goed die bane is

- **Geen gouge nie.** Die gereedskap se posisies word op 'n rooster uitgewerk, met die snyer 'n bietjie groter as wat dit is (met 1,4 roosterselle na die kant, en met die materiaal om te laat staan), sodat dit oral waar dit staan vry is van die model. Die toetse kontroleer elke snypunt teen die presiese gereedskap op die presiese mesh, en die voorraadsimulasie ná elke lopie: geen gouge nie, geen snelgang deur voorraad nie.
- **Die prys daarvoor**: mure hou 'n bietjie meer as die materiaal om te laat staan, tot die bedrag wat as "Ekstra voorraad op mure" op die bewerking gewys word (ongeveer 0,5 mm vir 'n Ø6-gereedskap, minder vir 'n kleiner een). Die afwerkingspas neem dit weg.

Wat hierdie bane nie is nie:

- Rye is reguit lyne, nie versette van die onderdeel se vorm of kontoere met konstante ingryping nie. Hulle maak meer optelle en lugbewegings as 'n versette- of aanpassende strategie, en die eerste ry op elke vlak sny die gereedskap se volle breedte. Vir holtes met plat vloere is [Aanpassend](topic:manufacture) die beter growwe bewerking.
- Die gereedskap se skag en houer word nie nagegaan nie. 'n Waarskuwing sê wanneer die snit dieper is as die vlerklengte.
- Ondersnyings word nie gesien nie: die model is wat die gereedskap ontmoet wat langs sy as afkom. Om 'n sy growwe te maak, gee 'n tweede bewerking 'n [geskuinsde gereedskaprigting](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Rusbewerking ken die voorraad net so goed as die simulasie se rooster (0,1 tot 2 mm selle, volgens die onderdeel se grootte).
- Op 'n groot onderdeel is die program lank (meer as 100 000 bewegings vir 'n 200 mm-flens met 'n Ø6-gereedskap) en neem ongeveer 'n minuut om uit te werk, en elke verandering in die werkruimte werk die hele program weer uit. Gebruik die grootste gereedskap wat pas vir die growwe bewerking.
- Kontroleer die uitset in jou masjien se eie simulator voordat jy sny.
