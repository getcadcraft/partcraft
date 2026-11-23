---
title: Draaiwerk op 'n draaibank
summary: Vlak, growwe, afwerk, groef, sny deel af, draad en boor 'n gedraaide onderdeel, uit die omtrek wat die onderdeel maak wanneer dit draai. Draaigereedskap, voere per omwenteling, draaibankposte, en wat nie bewys is nie.
keywords: draaiwerk, draaibank, draai, vlakmaak, growwe, afwerking, groef, groefwerk, sny deel af, afsny, draad, draadwerk, g32, g33, g96, konstante oppervlakspoed, css, neusradius, insetsel, staaf, klouer, deursnee, voer per omwenteling, g71, g76
from: d8cc53b0
---

Vervaardiging het sewe bewerkings vir 'n draaibank. Hulle werk op enige onderdeel: wat gesny word, is die **omtrek wat die onderdeel maak wanneer dit om die middel van die voorraad draai**, so 'n onderdeel wat nie rond is nie, word tot die ronde vorm wat dit vashou, afgedraai.

**Niks hier is op 'n draaibank uitgevoer nie.** Die bane word deur die toetse teen die meetkunde nagegaan; die twee draaibankposte volg die beheerders se gedokumenteerde kodes. Bewys 'n program in jou beheerder se eie simulator en in die lug eers.

## Opstel

Op die **Opstelling**-oortjie:

- **Gereedskapas** is die spil se as, die draaibank se Z. Die voorkant van die onderdeel is by +Z; die klouer hou die ander einde.
- **Voorraad**: kies {{ui:Silinder}}, die staaf. Die bo-verskuiwing is wat die vlaksnit verwyder.
- **Werkoorsprong**: 'n voorraadbo- of modelbo-middelpunt sit Z0 op die voorvlak, die gewone plek.
- **Beheerder**: {{ui:Fanuc-styl draaibank (.nc)}} of {{ui:LinuxCNC-draaibank (.ngc)}}. 'n Freespost weier 'n draaiprogram en sê so.
- **Maks. spilspoed**: die limiet waaronder die oppervlakspoed gehou word.

{{ui:Meer}} in die Vervaardiging-werkbalk lys die sewe draaibankbewerkings bo-aan die **Bewerkings**-oortjie. Die eerste een wat jy byvoeg, bring sy eie gereedskap: 'n **draaiinsetsel** (neusradius, insetselhoek, snykantehoek) of 'n **groefmes** (breedte, hoekradius, hoe diep dit reik). Verander hulle op die **Gereedskap**-oortjie. Voere is per omwenteling, en die spoed is 'n oppervlakspoed in m/min wat die beheerder hou soos die deursnee verander; gee 'n gereedskap sy eie rpm om die spoed eerder vas te stel.

## Die bewerkings

| Bewerking | Wat dit doen |
|---|---|
| {{ui:Vlak}} | Vlak die voorkant van die staaf af tot by die onderdeel, een afsnystap op 'n slag, van buite tot net verby die middel. |
| {{ui:Growwe}} | Passe langs Z 'n **snidiepte** uitmekaar, af tot by die omtrek plus die **materiaal om te laat staan**; dan een keer langs die omtrek om die trappe af te neem. 'n Dal tussen twee skouers word met 'n indompeling van een snidiepte binnegegaan. |
| {{ui:Afwerking}} | Een pas langs die omtrek teen 'n breukdeel van die gereedskap se voer. |
| {{ui:Groef}} | Dompel die mes sy-aan-sy waar dit meer kan neem as die limiet van materiaal wat nog staan: die groewe wat die draaiinsetsel nie kon bereik nie. **Van / Tot Z** maak dit smaller. |
| {{ui:Sny deel af}} | Sny die onderdeel net agter sy agterkant af, tot 'n bietjie verby die middel, met peck-bewegings as jy een stel. |
| {{ui:Draad}} | 'n Buitedraad: hoofdeursnee, steek, lengte, aantal passe. Diepte 0 beteken 0,6134 × steek ('n 60°-draad). Elke pas neem dieselfde oppervlak spaan; veerpasse herhaal die laaste een. |
| {{ui:Boor}} | 'n Boor op die middellyn tot 'n diepte, met peck-bewegings. |

## Hoe die gereedskap van die onderdeel af gehou word

Die insetsel word behandel soos wat dit is: sy neussirkel, en agter dit die agterste kant, 'n reguit lyn waarvan die hoek 180° minus die snykantehoek en die insetselhoek is. Daardie vorm word op die omtrek neergelaat by elke punt langs Z, en die pad is waar dit tot rus kom. Dus:

- **Die neusradius is reeds in die pad.** Die posts skryf geen `G41` of `G42` nie; die koördinate is die gereedskap se geprogrammeerde punt (die hoek van die vierkant rondom die neus).
- Die insetsel **kan nie 'n muur steiler as sy agterkant volg nie**. 'n Groef agter 'n skouer word met rus gelaat, en die afwerkingsbewerking sê hoeveel van die omtrek dit nie kon bereik nie. 'n {{ui:Groef}}-bewerking neem dit.
- Die voorraad word langs Z opgeteken ná elke snit, sodat growwe nie lug sny nie, groefwerk vind wat oorbly, en elke bewerking wys die volume wat dit verwyder het en of dit in die onderdeel gesny het.

## Limiete

- **Buitedraaiwerk net**: geen boorstaaf nie, geen binnegroewe of -drade nie, geen vlakgroewe nie.
- Een spil, die onderdeel gehou op −Z. Geen sub-spil nie, geen lewendige gereedskap nie, geen C- of Y-as nie, geen stil rus of stertbeweging nie.
- Paaie is reguit bewegings: krommes is kort lyne binne die toleransie (geen `G2`/`G3`), en growwe en draadwerk word pas-vir-pas geskryf (geen `G71`- of `G76`-siklusse nie).
- Draadwerk is reguit passe met 'n reguit uittrek aan die einde; gee die draad 'n ontlastingsgroef. Die draad word nie in die voorraad gewys nie.
- Boor op die middelpunt verander nie die voorraadmodel nie.
- Die houer, die torinkop en die klouer word nie nagegaan nie. Stel **Stop by Z** om die gereedskap weg van die bakke te hou.
- Voere en spoed is beginwaardes, soos vir freswerk.
