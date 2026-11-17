---
title: Referentievlakken, assen en punten
summary: Vlakken maken die offset zijn van een vlak, onder een hoek, door drie punten, halverwege, raakvlak aan een cilinder, loodrecht op een rand of door een rand en een punt; assen; punten op randmiddens, kruisingen en vlakhoeken; schetsen erop en ze gebruiken als omwentelingsassen, patroonrichtingen en spiegelvlakken.
keywords: datum, tussen objecten, middelpunt, snijpunt, vlak door rand en punt, referentievlak, werkvlak, constructievlak, datumvlak, offsetvlak, vlak onder hoek, middenvlak, raakvlak, referentie-as, constructie-as, datum-as, referentiepunt, werkpunt, schets op vlak
from: e7eb6fc1
---

Referentiegeometrie is het hulpwerk waarop u features bouwt: een **vlak** om op te schetsen waar geen vlak is, een **as** om omheen te draaien of te patroneren, een **punt** om een extrusie te laten stoppen. Het heeft geen eigen materiaal. Vlakken verschijnen in de weergave als lichte vierkanten, assen als gestreepte lijnen, punten als kleine kruisjes; alle drie komen in de geschiedenis en volgen wat ze zijn gemaakt van als u hierboven een maat wijzigt.

Ze staan in het menu {{ui:Meer}} van de groep Features: {{ui:Vlak}}, {{ui:As}}, {{ui:Punt}}.

## Een vlak maken

1. Klik op een plat vlak, of op een basisvlak in de geschiedenis, om ervan te starten (optioneel).
2. Kies {{ui:Meer}}, dan {{ui:Vlak}}. Het begint als een offsetvlak op 20 % van de grootte van het onderdeel, van wat u koos (of van het bovenvlak).
3. Kies in het rechterpaneel het **Type** en de verwijzingen:

| Type | Verwijzingen | Getallen |
|---|---|---|
| Offset vanaf een vlak | **Vanaf vlak** | **Afstand (mm)**, negatief voor de andere kant |
| Onder een hoek, door een rand of as | **Vanaf vlak**, **Draaien om** (een wereldas, een asfeature of een gekozen rechte rand) | **Hoek (°)** |
| Door drie punten | **Punt 1**, **Punt 2**, **Punt 3** | — |
| Middenvlak tussen twee | **Eerste vlak**, **Tweede vlak** (evenwijdig: halverwege; elkaar snijdend: het vlak dat de hoek halveert) | — |
| Raakvlak aan een cilinder | **Cilinder** (een cilindrisch vlak), **Nabij punt** (welke kant) | — |
| Loodrecht op een rand, in een punt | **Rand**, **In punt** (het vlak gaat door het punt van de rand dat het dichtst bij ligt, en door het punt zelf) | — |
| Door een rand en een punt | **Rechte rand** (of een as), **Door punt** | — |
| Loodrecht op een rand in het midden | **Rand** (halverwege de lengte, loodrecht erop), of zonder rand **Punt 1** en **Punt 2** (het vlak halverwege ertussen) | — |

Elke verwijzing heeft een knop **Kiezen**: kies hem en klik daarna in de weergave. Een vlakveld neemt een basisvlak, een referentievlak of een plat vlak; een puntveld neemt het uiteinde van een rand (klik dicht bij dat uiteinde), een puntfeature of een plek op een vlak; een randveld neemt een rand. {{key:Esc}} annuleert een keuze. **Normaal omkeren** keert het vlak om (naar welke kant een schets erop wijst).

In deze versie geeft een veld dat een rand of een cilindrisch vlak nodig heeft (Raakvlak aan een cilinder, en de randvelden) het antwoord "nog niet beschikbaar": gebruik in plaats daarvan punten of een as.

## Een schets op een vlak

Selecteer het vlak (in de geschiedenis of door op het vierkantje in de weergave te klikken) en kies {{ui:Schets}}, of **Schets erop** in het paneel. De schets volgt het vlak: wijzigt u de afstand van het vlak, dan verplaatsen de schets en alle features erop mee.

## Assen en punten

- {{ui:As}}: door twee punten, de as van een cilinder of kegel, waar twee vlakken elkaar snijden, langs een rechte rand (of de as van een cirkelvormige rand), of loodrecht op een vlak door een punt.
- {{ui:Punt}}: op coördinaten, in een hoekpunt of schetspunt, of in het middelpunt van een cirkelvormige rand, plus de punten "tussen objecten":

| Puntsoort | Verwijzingen |
|---|---|
| Midden van een rand (of tussen twee punten) | **Rand** (halverwege de lengte, ook voor bogen en krommen), of zonder rand **Punt 1** en **Punt 2** |
| Waar een rand of as een vlak snijdt | **Rand** (recht of gekromd) of een as, en **Snijdt vlak** (een vlak of plat vlak) of **Of een vlak** (een plat vlak of een cilinder). Een cirkel snijdt een vlak twee keer, en een lijn gaat twee keer door een cilinder: **De andere snijding** neemt de tweede |
| Waar drie vlakken elkaar snijden | **Eerste**, **Tweede** en **Derde vlak** (vlakken of platte vlakken) |

Elk van deze mislukt met een eenvoudige melding als de verwijzingen niet passen: een lijn evenwijdig aan het vlak, een lijn die de cilinder mist, een rand die het vlak niet bereikt, drie vlakken die niet in één punt samenkomen, of een punt op de lijn waarmee het een vlak zou moeten vastleggen.

Gebruik ze in andere features:

| Waar | Hoe |
|---|---|
| Omwentelen | **As**: kies de asfeature uit de lijst (hij moet in het schetsvlak liggen) |
| Circulair patroon | **As**: de asfeature |
| Lineair patroon | **Richting**: een asfeature, of een vlak (zijn normaal) |
| Spiegelen | **Spiegelvlak**: een referentievlak |
| Extruderen | **Einde**: Tot vlak of referentievlak, Tot hoekpunt (een puntfeature). In deze versie nog niet beschikbaar (het heeft een exacte kernel nodig) |
| Trekhoek | **Neutraal vlak** |

## Wanneer een verwijzing weg is

Een vlak dat is gemaakt van een vlak dat niet meer bestaat, mislukt met een melding die het noemt, zoals "Het vlak waarop het staat, is verdwenen uit Extrude1." Het wordt nooit naar een ander vlak verplaatst. De schetsen en features erop worden als "niet opgebouwd" gemarkeerd tot u een nieuwe verwijzing kiest; de rest van het onderdeel blijft zoals het was.

:::note
In deze versie bouwt elk onderdeel met de mesh-kernel, die vlakken, assen en punten maakt uit basisvlakken, platte vlakken gemaakt door Extruderen of Omwentelen, schetspunten, coördinaten en andere referentiefeatures. Alles wat een rand, het uiteinde van een rand of een gekromd vlak nodig heeft, vraagt om een exacte kernel: nog niet beschikbaar in deze versie ("Het gebruikt een vlak of rand van het volume, die alleen een exacte kernel kan vinden: nog niet beschikbaar in deze versie.").
:::
