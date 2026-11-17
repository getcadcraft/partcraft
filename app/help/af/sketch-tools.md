---
title: Splines, trim, verskuiwing en ander skets-gereedskap
summary: Teken pas-punt- en beheerpunt-splines, trim en verleng kurwes, verskuif 'n ketting, spieël oor 'n middellyn, voeg veelhoeke en gleuwe by, patroon skets-meetkunde en projekteer model-rande.
keywords: spline, pas-punt, beheerpunt, b-spline, nurbs, kurwe, trim, verleng, verskuif, spieël, simmetries, veelhoek, seskant, gleuf, patroon, lineêre patroon, sirkulêre patroon, projekteer, projekteer rand, insluit, omskep entiteite
from: 3ecb166a
---

Hierdie gereedskap werk in 'n oop skets. {{ui:Spline}} en {{ui:Trim}} is op die gereedskapsbalk. Die ander is onder {{ui:Meer}} aan die einde van die skets-gereedskap. Elke gereedskap is een ontdoen-stap, en {{key:Esc}} stop dit. Vir die basiese teken-gereedskap sien [Teken jou eerste skets](topic:sketch-basics).

## Splines

'n Spline is 'n gladde kurwe. Daar is twee soorte.

| Gereedskap | Sleutel | Hoe om te teken |
|---|---|---|
| {{ui:Spline}} | {{key:B}} | Klik die punte waardeur die kurwe loop. Beëindig met {{key:Enter}}, {{key:Esc}}, 'n regsklik of 'n dubbelklik. Klik die eerste punt weer om die spline te sluit |
| {{ui:Beheerpunt-spline}} (onder {{ui:Meer}}) | | Klik die beheerpunte. Die kurwe word na hulle getrek, maar raak net die eerste en laaste. Die gestreepte beheerveelhoek wys terwyl jy teken en daarna |

- **Die punte is skets-punte.** Sleep hulle, of gee hulle verhoudings en maatte soos enige ander punt. 'n Spline se eerste punt kan aan 'n lyn se einde vasmaak, wat hulle met 'n saamvallende verhouding verbind.
- **Raaklyn by 'n einde.** Kies 'n lyn, boog of spline wat by een einde van 'n spline aansluit, en die spline, en kies dan {{ui:T Raaklyn}}. Die spline se eindrigting volg dan die lyn. 'n Raaklyn weg van die spline se eindes word geweier: "'n Raaklyn aan 'n spline benodig dat die lyn, boog of spline by een van sy einde aansluit."
- **Eindes.** Sonder 'n raaklynverhouding is 'n pas-punt-spline se eindes natuurlik (geen krommming aan die uiterste einde nie). Die kurwe is kubies en gaan deur elke punt, met sy spasiëring bepaal deur die afstande tussen die punte.
- **Geslote splines** maak op hul eie 'n profiel. Oop splines voeg lyne en boë saam in 'n geslote lus, soos enige ander kurwe.
- 'n Punt binne 'n spline skrap verwyder daardie punt en hou die spline, solank dit nog ten minste twee punte het (drie as dit geslote is).

Ekstrudeer en draai om bou die spline met die maaskern uit kort reguit stukke (ware kurwes benodig 'n presiese kern: nog nie in hierdie weergawe gebou nie). DXF-uitvoer skryf 'n spline as 'n polilyn wat binne 0.01 mm van die kurwe bly, omdat DXF R12 geen spline-entiteit het nie.

## Trim en verleng

| Gereedskap | Sleutel | Hoe |
|---|---|---|
| {{ui:Trim}} | {{key:T}} | Wys na 'n kurwe: die stuk wat sou gaan, wys rooi, tot by die naaste kruisings. Klik om dit te verwyder. 'n Kurwe wat niks kruis nie, word heeltemal verwyder |
| {{ui:Verleng}} (onder {{ui:Meer}}) | {{key:E}} | Klik 'n lyn of boog naby die einde om te verleng. Dit groei tot by die volgende kurwe wat dit ontmoet. "Daar is niks wat daardie einde kan bereik nie." wanneer niks in die pad is nie |

Trim en Verleng werk op lyne, boë, sirkels en splines (Verleng: lyne en boë).

- 'n Getrimde **sirkel** word 'n boog. Die radius- of deursnee-maat beweeg na die boog.
- Die middel van 'n lyn trim laat twee lyne wat op dieselfde reguit lyn bly. Die middel van 'n boog trim laat twee boë met dieselfde middelpunt en 'n gelyk-verhouding.
- 'n Getrimde **spline** word 'n beheerpunt-spline wat die ou kurwe presies volg. 'n Raaklynverhouding by 'n einde wat behou word, bly.
- Die nuwe einde word op die kurwe geplaas wat dit gesny het (op die lyn, boog of sirkel, of saamvallend met sy einde). Splines kan nie 'n punt hou nie, so 'n spline wat sny, voeg geen verhouding by nie.

**Verhoudings wat nie meer pas nie, word verwyder**, en die statusbalk sê hoeveel. Byvoorbeeld, 'n lengtemaat op 'n getrimde lyn word verwyder, maar horisontale of parallelle verhoudings bly.

## Verskuiwing

1. Kies {{ui:Verskuif}} onder {{ui:Meer}} of druk {{key:O}}.
2. Klik 'n lyn, boog, sirkel of spline. Die hele ketting word uitgelig: al die kurwes wat end tot end verbind is, tot by 'n punt waar drie of meer ontmoet. Om slegs 'n deel van 'n ketting te verskuif, kies eers daardie kurwes, kies dan Verskuif en klik op een van hulle.
3. Beweeg die aanwyser na die kant waar die kopie gaan. 'n Gestreepte voorskou volg. Druk {{key:B}} vir albei kante.
4. Klik, tik die afstand in, en druk {{key:Enter}}.

Lyne en boë word presies verskuif. Hoeke word verleng of getrim totdat hulle ontmoet. Die kopie het een **Verskuiwing**-maat, en die ander stukke volg dit: dubbelklik op die maat om die hele kopie te verander. 'n Afstand wat te groot is vir die ketting, word geweier, byvoorbeeld "Daardie afstand is te groot vir hierdie ketting: 'n kant sou binnetoe draai."

'n **Spline** word verskuif deur 'n nuwe pas-punt-spline binne 0.001 mm van die ware verskuiwing. Hierdie kopie is vas: dit volg nie latere veranderinge nie, en het geen Verskuiwing-maat nie. 'n Spline in 'n ketting benodig gladde (raaklyn) verbindings by sy einde.

## Spieël

1. Met {{ui:Kies}}, kies wat om te spieël.
2. Kies {{ui:Spieël}} onder {{ui:Meer}} of druk {{key:M}}.
3. Klik die lyn of middellyn om oor te spieël.

Elke gespieëlde punt kry 'n **Simmetries**-verhouding met sy oorspronklike, sodat die kopie volg wanneer die oorspronklike verander. Punte wat op die spieëllyn lê, word gedeel, en gespieëlde sirkels kry 'n Gelyk-verhouding. As niks gekies was nie, klik die items om te spieël, druk {{key:Enter}}, en klik dan die spieëllyn.

## Veelhoeke en gleuwe

| Gereedskap | Hoe |
|---|---|
| {{ui:Veelhoek}} | Klik die middelpunt, dan 'n hoek, dan tik die aantal sye (3 tot 64). Die sye is gelyk en die hoeke sit op 'n konstruksiesirkel. Maat die sirkel om die veelhoek se grootte te bepaal |
| {{ui:Gleuf}} | Klik die middelpunt van die een einde, dan die middelpunt van die ander einde, dan klik om die breedte te stel. Twee lyne, raaklyn aan twee gelyke halwe sirkels |

## Skets-patrone

Kies eers die meetkunde, en daarna:

- {{ui:Lineêre patroon}}: klik 'n beginpunt, dan waar die eerste kopie gaan, en tik dan die aantal kopieë in (insluitend die oorspronklike).
- {{ui:Sirkulêre patroon}}: klik die middelpunt, en tik dan die aantal kopieë in, eweredig versprei om 'n volle draai.

Die kopieë neem die verhoudings tussen die gekose meetkunde saam ('n sirkulêre patroon laat horisontale en vertikale verhoudings uit). Die kopieë is nie aan die oorspronklike gekoppel nie: verander een, en die ander bly soos hulle is.

## Projekteer rande van die onderdeel

1. Kies {{ui:Projekteer rand}} onder {{ui:Meer}}.
2. Klik 'n reguit of sirkelvormige rand van die onderdeel agter die skets.

Die rand word presies op die skets-vlak gekopieer en vasgemaak (Vas-verhouding). Dit volg nie latere veranderinge aan die onderdeel nie. Druk {{key:Q}} om dit konstruksiemeetkunde te maak. 'n Sirkel wat skuins teen die skets-vlak staan, sou as 'n ellips projekteer, so dit word geweier. Vrye vorm-rande en rande wat reguit uit die skets wys, ook. Projekteer benodig 'n presiese kern: dit is nog nie in hierdie weergawe gebou nie.
