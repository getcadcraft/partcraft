---
title: Draaien op een draaibank
summary: Vlak, ruw, werk af, groef, steek af, snijd schroefdraad en boor een gedraaid onderdeel, vanaf de omtrek die het onderdeel maakt als het draait. Draaibeitels, aanzetten per omwenteling, draaiposten en wat niet is bewezen.
keywords: draaien, draaibank, vlakken, ruwen, afwerken, groef, groeven, afsteken, schroefdraad, schroefdraad snijden, g32, g33, g96, constante oppervlaktesnelheid, css, neusradius, wisselplaatje, staaf, klauwplaat, diameter, aanzet per omwenteling, g71, g76
from: d8cc53b0
---

Fabricage heeft zeven bewerkingen voor een draaibank. Ze werken op elk onderdeel: wat wordt gesneden is de **omtrek die het onderdeel maakt als het om het midden van het ruwdeel draait**, dus een onderdeel dat niet rond is wordt teruggedraaid tot de ronde vorm die het vasthoudt.

**Niets hier is op een draaibank uitgevoerd.** De paden worden door de tests tegen de geometrie gecontroleerd; de twee draaiposten volgen de gedocumenteerde codes van de besturingen. Controleer een programma eerst in de eigen simulator van uw besturing en in de lucht.

## Instellen

Op het tabblad **Opstelling**:

- **Gereedschapsas** is de as van de spil, de Z van de draaibank. De voorkant van het onderdeel ligt op +Z; de klauwplaat houdt het andere uiteinde vast.
- **Ruwdeel**: kies {{ui:Cilinder}}, de staaf. De bovenste toeslag is wat de vlakkersnede wegneemt.
- **Werknulpunt**: een middelpunt van de bovenkant van het ruwdeel of van het model zet Z0 op het voorvlak, de gebruikelijke plek.
- **Besturing**: {{ui:Draaibank in Fanuc-stijl (.nc)}} of {{ui:LinuxCNC-draaibank (.ngc)}}. Een freespostprocessor weigert een draaiprogramma en zegt dat.
- **Max. spiltoerental**: de grens waaronder de oppervlaktesnelheid wordt gehouden.

{{ui:Meer}} in de werkbalk van Fabricage toont de zeven draaibewerkingen bovenaan het tabblad **Bewerkingen**. De eerste die u toevoegt brengt zijn eigen gereedschap mee: een **draaiwisselplaatje** (neusradius, plaatjeshoek, snijkanthoek) of een **groefmes** (breedte, hoekradius, hoe diep het reikt). Wijzig ze op het tabblad **Gereedschap**. Aanzetten zijn per omwenteling, en de snelheid is een oppervlaktesnelheid in m/min die de besturing aanhoudt wanneer de diameter verandert; geef een gereedschap een eigen toerental om in plaats daarvan de snelheid vast te zetten.

## De bewerkingen

| Bewerking | Wat het doet |
|---|---|
| {{ui:Vlak}} | Vlakt de voorkant van de staaf tot het onderdeel, één stapdiepte tegelijk, van buiten naar net voorbij het midden. |
| {{ui:Ruwen}} | Gangen langs Z op een **snedediepte** afstand, tot de omtrek plus het **over te laten materiaal**; daarna eenmaal langs de omtrek om de treden weg te nemen. Een dal tussen twee schouders wordt ingestoken met een insteek van één snedediepte. |
| {{ui:Afwerking}} | Eén gang langs de omtrek op een fractie van de aanzet van het gereedschap. |
| {{ui:Groef}} | Steekt het mes naast elkaar in waar het meer kan nemen dan de grens van het materiaal dat nog staat: de groeven die het draaiwisselplaatje niet kon bereiken. **Van / Tot Z** maakt het smaller. |
| {{ui:Afsteken}} | Steekt het onderdeel af net achter zijn achtervlak, tot net voorbij het midden, met pikken als u die instelt. |
| {{ui:Schroefdraad}} | Een uitwendige schroefdraad: nominale diameter, steek, lengte, aantal gangen. Diepte 0 betekent 0.6134 × steek (een schroefdraad van 60°). Elke gang neemt hetzelfde spaanoppervlak; veergangen herhalen de laatste. |
| {{ui:Boren}} | Een boor op de middellijn tot een diepte, met pikken. |

## Hoe het gereedschap van het onderdeel wordt gehouden

Het wisselplaatje wordt behandeld als wat het is: zijn neuscirkel, en daarachter de achterste snijkant, een rechte lijn waarvan de hoek 180° min de snijkanthoek en de plaatjeshoek is. Die vorm wordt op elk punt langs Z op de omtrek neergelaten, en het pad is waar hij tot rust komt. Dus:

- **De neusradius zit al in het pad.** De postprocessors schrijven geen `G41` of `G42`; de coördinaten zijn het geprogrammeerde punt van het gereedschap (de hoek van het vierkant rond de neus).
- Het plaatje **kan geen wand volgen die steiler is dan zijn achterste snijkant**. Een groef achter een schouder blijft onbewerkt, en de afwerkbewerking zegt hoeveel van de omtrek het niet kon bereiken. Een bewerking {{ui:Groef}} neemt het.
- Het ruwdeel wordt na elke snede langs Z bijgehouden, zodat ruwen geen lucht snijdt, groeven vindt wat er nog staat, en elke bewerking het verwijderde volume en of het in het onderdeel sneed toont.

## Beperkingen

- **Alleen uitwendig draaien**: geen boorstang, geen inwendige groeven of schroefdraad, geen vlakgroeven.
- Eén spil, het onderdeel vastgehouden op −Z. Geen tweede spil, geen aangedreven gereedschappen, geen C- of Y-as, geen vaste steun of bewegingen van de puntkop.
- Paden zijn rechte bewegingen: curves zijn korte lijnen binnen de tolerantie (geen `G2`/`G3`), en ruwen en schroefdraad worden gang voor gang geschreven (geen `G71`- of `G76`-cycli).
- Schroefdraad snijden is rechte gangen met een rechte uittrekbeweging aan het eind; geef de schroefdraad een ontlastgroef. De schroefdraad wordt niet in het ruwdeel getoond.
- Boren op het middelpunt verandert het ruwdeelmodel niet.
- De houder, de torenrevolver en de klauwplaat worden niet gecontroleerd. Stel **Stop bij Z** in om het gereedschap van de klauwen af te houden.
- Aanzetten en toerentallen zijn startwaarden, zoals bij frezen.
