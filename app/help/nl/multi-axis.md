---
title: 4- en 5-assige bewerking
summary: Vertel PartCraft welke roteerassen de machine heeft, kantel het gereedschap voor elke gewone bewerking, werk een oppervlak af met een bolfrees die tijdens het snijden kantelt, of draai het onderdeel onder het gereedschap op een 4e as. Wat er in de G-code wordt geschreven en wat niet is bewezen.
keywords: 5-as, vijf-as, 4-as, vierde as, multi-as, multiaxis, 3+2, geïndexeerd, positioneel, kantelen, gekantelde frees, roterend, trunnion, tafel, kop, A-as, B-as, C-as, TCP, RTCP, gereedschapspunt, G43.4, inverse tijd, G93, kinematica, draaipunt, swarf, voorsprongshoek
from: c4f1c491
---

Fabricage kan het gereedschap onder een hoek houden, en het kan de roteerassen bewegen tijdens het snijden. Drie dingen doen dat, van het eenvoudigste tot het meest complexe.

**Niets hier is op een machine uitgevoerd.** De paden worden door de tests tegen de geometrie gecontroleerd en de G-code wordt teruggelezen, maar de ingebouwde postprocessors volgen de gedocumenteerde codes van de besturingen, niet een machine die voor ons staat. Controleer een programma in de eigen simulator van uw besturing en in de lucht voordat het metaal raakt.

## De roteerassen van de machine

Op het tabblad **Opstelling** zegt {{ui:Roteerassen}} wat de machine heeft:

| Keuze | De machine |
|---|---|
| Geen (3 assen) | Een gewone frees. Elke bewerking die het gereedschap gekanteld moet hebben, geeft een waarschuwing, en de postprocessor weigert het te schrijven. |
| A (draait om X) | Één roteerras langs X: een 4e-as-tafel of indexeerder. Het gereedschap kan alleen in het Y–Z-vlak leunen. |
| B (draait om Y) | Één roteerras langs Y. Het gereedschap kan alleen in het X–Z-vlak leunen. |
| A en C | Een kantelas om X, gedragen door of dragend een draai om Z: een tafel met trunnion, of een kop. |
| B en C | Hetzelfde met de kanteling om Y. |

Dan:

- **Gedragen door**: {{ui:De tafel (het onderdeel draait)}} of {{ui:De kop (het gereedschap draait)}}. Een tafel draait de andere kant op om hetzelfde vlak onder het gereedschap te brengen, dus het teken van elke hoek volgt hieruit.
- **De besturing houdt de gereedschapspunt op het pad (TCP)**: aan, dan zijn X Y Z in het programma de gereedschapspunt in de eigen coördinaten van het onderdeel en doet de besturing de rest (de ingebouwde Fanuc-stijl- en LinuxCNC-postprocessors schrijven `G43.4` voor de gereedschapslengte). Uit, dan schrijft PartCraft op een tafelmachine X Y Z zoals de gedraaide tafel het onderdeel meedraagt, om het **roterende middelpunt** dat u opgeeft (in werkcoördinaten; 0, 0, 0 wanneer het werknulpunt in het midden ligt). Een kopmachine heeft TCP nodig: zonder dat zou het programma de draaipuntlengte van de machine nodig hebben, en die kent PartCraft niet.
- **Kantelgrens**: hoe ver de kantelas gaat.

Machines verschillen in welke richting ze als positief tellen. Draait een as op uw machine de verkeerde kant op, wijzig dan het teken in een kopie van de postprocessor ([Postprocessoren die u kunt bewerken](topic:post-processors)).

## Een gekanteld gereedschap voor een gewone bewerking

Elke freesbewerking (vlak, holte, adaptief, contour, boren, afschuinen, evenwijdig, scallop, 3D ruwen, rest) heeft een **Gereedschapshelling** en **Kantelen naar**: de richting van het gereedschap voor die bewerking alleen, gemeten vanaf de gereedschapsas van de opstelling. Dit is 3+2-bewerking: de roteerassen gaan naar een positie en blijven daar terwijl drie assen snijden.

- Typ de twee hoeken, of druk op {{ui:Gereedschap loodrecht op een vlak}} en klik op een vlak: het gereedschap wijst er recht naartoe.
- Kies de vlakken en randen van de bewerking zoals gewoonlijk. Wat als vloer of gat telt, wordt beoordeeld langs het gekantelde gereedschap.
- Het ruwdeel voor die richting is de doos die het gedraaide ruwdeel bevat, zodat hoogtes en vrijlopen aan die kant veilig zijn.

In de G-code gaat het gereedschap vóór de bewerking omhoog, draaien de roteerassen, en komt het gereedschap omlaag boven zijn eerste punt. Op een tafelmachine zonder TCP blijven bogen bogen en blijven vaste boorcycli cycli (het geschreven vlak wordt alleen om Z gedraaid). Met TCP in een gekanteld vlak worden bogen korte lijnen en worden cycli de bewegingen die ze voorstellen.

De ruwdeelsimulatie draait een gekantelde richting **op zichzelf**: ze toont wat die bewerking uit het hele ruwdeel snijdt gezien vanaf zijn kant, en vindt inkepingen daar, maar sneden uit andere richtingen worden niet meegenomen.

## 5-assige afwerking

{{ui:Meer}} in de werkbalk van Fabricage toont deze bewerking en de volgende bovenaan het tabblad **Bewerkingen**.

{{ui:5-assig}} is de [evenwijdige afwerkgang](topic:finish-3d) met een **bolfrees die tijdens het gaan kantelt**. Een bol snijdt met zijn bolvorm, en die vorm is hetzelfde welke kant het gereedschap ook op zijn middelpunt leunt, dus de bol volgt precies het pad dat de 3-assige gang zou geven en alleen de richting van het gereedschap verandert:

- **Naar het oppervlak toe**: 1 = loodrecht op het oppervlak, 0 = rechtop, alles daartussen.
- **Vooruit kantelen**: graden langs de richting van de snede, zodat niet het stilstaande middelpunt van de bol snijdt.
- **Meeste kanteling**: het gereedschap leunt nooit verder dan dit van de gereedschapsas van de opstelling.

Waar de schacht het model zou raken, wordt de helling teruggenomen tot die vrij is, en de bewerking zegt op hoeveel punten dat gebeurde. Elke gang wordt met een rechte opheffing ingegaan en verlaten.

## Roterende afwerking (4e as)

{{ui:Roterend}} is voor een onderdeel dat langs **werk-X** op een roteerras is vastgezet. Het onderdeel draait en een bolfrees, altijd naar de as gericht, volgt het oppervlak:

- **Gangen**: {{ui:Langs de as}} (lijnen langs X, één stapafstand van draai uit elkaar) of {{ui:Rond het onderdeel}} (ringen, één stapafstand van X uit elkaar).
- **As op Y / Z**: waar de as is. Leeg betekent het midden van het ruwdeel. Op een tafelmachine zonder TCP moet dit het roterende middelpunt in Opstelling zijn; de bewerking waarschuwt wanneer dat niet zo is.
- **Van / Tot X** en **Van / Tot hoek**: het deel van de lengte en van de draai dat gefreesd wordt.

De hoogte van de bol boven de as op elk punt is de exacte daling van een bol op het mesh van het onderdeel, vanaf die kant.

## Beperkingen

- 5-assige en roterende afwerking nemen alleen een **bolfrees**. Er is geen zijfrezen (de zijkant van het gereedschap op een gelijkmatige wand), geen stroomlijnen langs de eigen richtingen van een oppervlak, geen multi-as-ruwen en geen automatische keuze van de kanteling om een botsing te vermijden.
- 5-assige en roterende paden worden **niet door de ruwdeelsimulatie gehaald**, die een hoogtekaart is en geen leunende snede kan bevatten.
- De schacht wordt bij 5-assige afwerking gecontroleerd tegen het model gezien van bovenaf; de houder, de spil en de machine zelf worden nergens gecontroleerd.
- Roterende afwerking snijdt alleen wat het gereedschap ziet als het naar de as kijkt.
- 5-assige afwerking kost een minuut of meer om op een groot onderdeel uit te rekenen: de schacht wordt gecontroleerd op elk punt van elke gang.
- Wanneer de roteerassen met de lineaire assen meebewegen en TCP uit staat, schrijven de ingebouwde postprocessors de aanzet als inverse tijd (`G93`) en gaan daarna terug naar `G94`.
- Geen code voor een gekanteld werkvlak (`G68.2` en dergelijke) wordt geschreven, en geen machinespecifieke grenzen, ontdraaiingen of botsingszones zijn bekend.
