---
title: 3D ruwen en restbewerking
summary: Ruim het ruwdeel rond het hele model niveau voor niveau met een vlakke, radius- of bolfrees, en laat een kleiner gereedschap alleen snijden waar het eerste materiaal liet staan. Wat de paden garanderen en wat niet.
keywords: 3d ruwen, ruwen, ruw, restbewerking, restruwen, resterend ruwdeel, over te laten materiaal, stapdiepte, niveaus, z-niveau, waterlijn, helling, insteken, inkeping, kleiner gereedschap
from: 29ddc266
---

Twee bewerkingen in Fabricage, onder {{ui:Meer}} in de werkbalk, ruimen het ruwdeel van het **hele model** in 3D, met het gereedschap verticaal gehouden (of langs de eigen [gereedschapsrichting](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation) van de bewerking). Ze vragen geen selectie.

## 3D ruwen

{{ui:3D ruwen}} werkt van de bovenkant van het ruwdeel naar beneden, één **stapdiepte** tegelijk. Op elk niveau ruimt het alles wat het gereedschap kan bereiken zonder het model te raken: rechte rijen op een **stapafstand** (een deel van de gereedschapsdiameter), dan eenmaal rond de rand van wat het mag bereiken, zodat wanden gevolgd worden en niet als een rij treden in grondplan blijven staan.

- **Over te laten materiaal**: hoe ver het gereedschap overal van het model blijft, voor de afwerkgang (standaard 0.5 mm).
- **Een niveau bij elk vlak**: een extra niveau op de hoogte van elk vlak van het model (plus het over te laten materiaal), zodat een vloer niet bijna een hele stapdiepte hoog blijft.
- **Negeer ruwdeel dunner dan**: materiaal dat dunner is dan dit, omhoog of opzij, is het geen pas waard (0.05 mm voor ruwen, 0.5 mm voor restbewerking, zodat een haar langs een wand het kleinere gereedschap niet langs elke wand stuurt).
- **Onderkant**: er wordt niet onder deze hoogte gefreesd. Leeg betekent de onderkant van het model.

Het begint vanaf het ruwdeel **zoals de bewerkingen ervoor het achterlieten**: na een vlakgang snijdt het niet de lucht waar de vlakfrees is geweest.

Naar beneden gaan: waar het gereedschap op de weg naar beneden materiaal zou raken, loopt het schuin langs zijn eigen gang onder de **hellingshoek**, heen en weer over hoogstens twee gereedschapsdiameters. Een gang die daarvoor te kort is, wordt recht naar beneden gestoken met de insteekaanzet; de bewerking telt die en waarschuwt, omdat een gereedschap dat niet op zijn middelpunt snijdt dat niet zou moeten doen.

## Restbewerking

{{ui:Rest}} is dezelfde strategie voor een **kleiner gereedschap na een groter**. Het leest de ruwdeelsimulatie en snijdt alleen waar nog materiaal staat: in binnenhoeken waar het grotere gereedschap niet kon draaien, sleuven waar het niet in paste, de treden die het op hellingen liet. Overal elders doet het niets, zodat zijn pad een klein deel is van wat hetzelfde gereedschap op vers ruwdeel zou nemen.

Zet het na de ruwbewerking en kies het kleinere gereedschap. Het heeft de ruwdeelsimulatie van de bewerkingen ervoor nodig, die de werkomgeving altijd draait.

## Hoe goed de paden zijn

- **Geen inkeping.** De posities van het gereedschap worden op een raster berekend, met de frees iets groter dan hij is (met 1.4 rastercellen opzij, en met het over te laten materiaal), zodat het gereedschap overal waar het staat vrij is van het model. De tests controleren elk snijpunt tegen het exacte gereedschap op het exacte mesh, en de ruwdeelsimulatie na elke run: geen inkeping, geen snelgang door materiaal.
- **De prijs daarvoor**: wanden houden iets meer dan het over te laten materiaal, tot de hoeveelheid die als "Extra ruwdeel op wanden" bij de bewerking wordt getoond (ongeveer 0.5 mm voor een Ø6-gereedschap, minder voor een kleiner). De afwerkgang neemt dat weg.

Wat deze paden niet zijn:

- Rijen zijn rechte lijnen, geen offsets van de vorm van het onderdeel of krommen met constante ingrijping. Ze maken meer opheffingen en luchtbewegingen dan een offset- of adaptieve strategie, en de eerste rij bij elk niveau snijdt de volle breedte van het gereedschap. Voor vlakkevloerholten is [Adaptief](topic:manufacture) het betere ruwen.
- De schacht en de houder van het gereedschap worden niet gecontroleerd. Een waarschuwing meldt wanneer de snede dieper is dan de snijkantlengte.
- Ondersnijdingen worden niet gezien: het model is wat het gereedschap langs zijn as naar beneden tegenkomt. Om een zijkant te ruwen, geef een tweede bewerking een [gekantelde gereedschapsrichting](topic:multi-axis#a-tilted-tool-for-an-ordinary-operation).
- Restbewerking kent het ruwdeel alleen zo goed als het raster van de simulatie (cellen van 0.1 tot 2 mm, naar grootte van het onderdeel).
- Bij een groot onderdeel is het programma lang (meer dan 100,000 bewegingen voor een flens van 200 mm met een Ø6-gereedschap) en kost het ongeveer een minuut om uit te rekenen, en elke wijziging in de werkomgeving rekent het hele programma opnieuw uit. Gebruik het grootste gereedschap dat past voor het ruwen.
- Controleer de uitvoer in de eigen simulator van uw machine voordat u snijdt.
