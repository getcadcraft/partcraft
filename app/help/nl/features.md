---
title: Features en hun opties
summary: Elke feature in de werkbalk met zijn instellingen, standaardwaarden en grenzen, van extruderen tot afronden, uitholling en geïmporteerde STEP-volumes, de acties die elke feature gemeen heeft, en de onderdeelinstellingen.
keywords: features, nog niet beschikbaar, extruderen, snijden, omwentelen, omwentelend snijden, gat, verzonken boring, lineair patroon, cirkelvormig patroon, spiegelen, afronden, afschuinen, uitholling, importeren, opties, standaardwaarden, instellingen, resolutie, rondingen, facetten, onderdrukken, terugrollen
from: ab3a598e
---

Features staan in de geschiedenis in de volgorde waarin ze zijn gemaakt en worden van boven naar beneden opnieuw opgebouwd. Elk wordt genoemd naar zijn soort met een nummer: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft bouwt elke feature met de meshkernel. Afronden en Afschuinen werken op rechte randen tussen twee platte vlakken, en Uitholling opent platte vlakken. Geïmporteerde volumes hebben een exacte kernel nodig, die deze versie niet heeft: ze zijn nog niet beschikbaar, en hun paragraaf hieronder beschrijft hoe een onderdeel dat in een eerdere build is gemaakt ze bewaart. Zie [De meshkernel](topic:solid-kernels) en [Wat nog niet beschikbaar is](topic:not-built-yet).

## Schets

| Instelling | Toelichting |
|---|---|
| Vlak | Voorvlak, Bovenvlak of Rechtervlak, of een plat vlak. Wordt getoond, niet gewijzigd: om een schets te verplaatsen, maakt u een nieuwe |
| Status | Volledig gedefinieerd, Onvolledig gedefinieerd (met de vrijheidsgraden), Overgedefinieerd of Leeg |
| Geometrie, Relaties | Hoeveel curven, punten en relaties |
| Aansturende maten | Elke maat van de schets, bewerkbaar |

Knoppen: {{ui:Schets bewerken}}, {{ui:Exporteren als DXF}}.

## Extruderen en Knippen

{{ui:Extruderen}} en {{ui:Knippen}} maken dezelfde feature, met andere startinstellingen.

| Instelling | Keuzes | Extruderen begint bij | Knippen begint bij |
|---|---|---|---|
| Bewerking | Boss (materiaal toevoegen), Knippen (materiaal verwijderen), Doorsnede (de overlap behouden), Nieuw lichaam (nog niet beschikbaar in deze versie) | Boss | Knippen |
| Einde | Blind (een diepte), Middenvlak (beide kanten), Helemaal door | Blind | Helemaal door |
| Diepte (mm) | Boven 0, tot 1,000,000 | 10 | 10 |
| Richting omkeren | Uit / aan | Uit | Uit |

- Profiel: elke gesloten lus van volle lijnen, cirkels en bogen in de schets. Lussen binnen lussen zijn gaten.
- Helemaal door werkt alleen voor snedes. Het gaat helemaal door het onderdeel aan de gekozen kant.
- Een snede gaat het materiaal in, weg van de buitenkant van het schetsvlak; Richting omkeren draait dit om.

## Omwentelen en omwentelend snijden

| Instelling | Keuzes | Standaard |
|---|---|---|
| Bewerking | Boss, Knippen | Boss ({{ui:Omwentelen}}), Knippen ({{ui:Meer}} › {{ui:Omwentelend uitsnijden}}) |
| Hoek (°) | Boven 0, tot 360 | 360 |
| As | Eerste middenlijn, elke lijn of middenlijn van de schets, of een asfeature in het schetsvlak | Eerste middenlijn |

- Het profiel moet aan één kant van de as blijven. Het mag hem raken.
- De as van een omwenteling kan door cirkelvormige patronen en door samenstellingsverbindingen worden gebruikt.

## Gat

| Instelling | Keuzes | Standaard |
|---|---|---|
| Type | Eenvoudig, Verzonken boring | Eenvoudig |
| Diameter (mm) | Boven 0 | 6 |
| Helemaal door | Aan / uit | Aan |
| Diepte (mm) | Als Helemaal door uit is | 10 |
| Verzonken boring ⌀ | Breder dan het gat | 11 |
| Diepte verzonken boring | Ondieper dan een blind gat | 6 |
| Richting omkeren | Uit / aan | Uit |

- Eén gat op elk los punt van de schets (punten gemaakt met het puntgereedschap). Het paneel toont hoeveel.
- Gaten worden loodrecht op het schetsvlak in het materiaal geboord.
- De as van elk gat kan door samenstellingsverbindingen worden gebruikt ("Hole1, hole 2").

## Lineair patroon

| Instelling | Keuzes | Standaard |
|---|---|---|
| Features om te kopiëren | Elke volumefeature erboven | De geselecteerde feature, anders de laatste volumefeature |
| Richting | X-as, Y-as, Z-as; een lijn van een eerdere schets; de as van een omwenteling; een gekozen rand | X-as (of de rand die bij het toevoegen is gekozen) |
| Afstand (mm) | Elk getal | 20 |
| Aantal | 1 tot 1000, inclusief het origineel | 3 |
| Richting omkeren | Uit / aan | Uit |

## Cirkelvormig patroon

| Instelling | Keuzes | Standaard |
|---|---|---|
| Features om te kopiëren | Zoals bij Lineair | Zoals bij Lineair |
| As | Zoals bij Richting hierboven | De as van de laatste omwenteling, anders de Y-as (of de gekozen rand) |
| Hoek (°) | Boven 0, tot 360. 360 verdeelt de kopieën gelijkmatig rondom; minder spreidt ze over de hoek | 360 |
| Aantal | 1 tot 1000, inclusief het origineel | 6 |
| Richting omkeren | Uit / aan | Uit |

## Spiegelen

| Instelling | Keuzes | Standaard |
|---|---|---|
| Spiegelen | Het volledige lichaam (zoals tot nu toe gebouwd), of gekozen features | De geselecteerde feature, anders het volledige lichaam |
| Spiegelvlak | Voorvlak, Bovenvlak of Rechtervlak; een plat vlak | Rechtervlak, of het platte vlak dat bij het toevoegen is gekozen |

## Afronden en Afschuinen

In deze versie bouwt de meshkernel ze op rechte randen tussen twee platte vlakken (buiten- of binnenhoeken), met één straal. Een ronde rand meldt "Afronden: in deze versie alleen rechte randen tussen twee platte vlakken (de meshkernel bouwt ze). Rond of schuin gebogen randen in de schets af."; waar ronde randen in een hoek samenkomen, worden ze in verstek gezet, en de feature waarschuwt "Afronden door de meshkernel: waar ronde randen samenkomen, worden ze in verstek gezet, niet vloeiend verbonden." Afschuin-typen (gelijke afstand, twee afstanden, afstand en hoek, met **Zijden omwisselen**) werken allemaal. Zie [Afronden, afschuinen en uithollen](topic:fillet-chamfer-shell).

| Instelling | Keuzes | Standaard |
|---|---|---|
| Straal (mm) (Afronden) | Boven 0 | 2 |
| Afstand (mm) (Afschuinen) | Boven 0, aan beide vlakken gelijk | 1 |
| Randen | De gekozen randen, elk genoemd naar de twee vlakken die het verbindt ("Extrude1 eindvlak × Extrude1 zijvlak"), met **Verwijderen** | De randen die bij het toevoegen zijn gekozen |

- Kies randen voordat u de knop kiest ({{key:Shift}}+klik voor meerdere), of kies de knop zonder iets gekozen en klik daarna op randen.
- {{ui:Randen kiezen}} (of dubbelklik op de feature) wijzigt de randen.
- Randen worden onthouden via de twee vlakken die ze verbinden, zodat ze verandering van maten eerder in de geschiedenis overleven.

## Uitholling

De meshkernel bouwt het. Alleen platte vlakken kunnen worden geopend ("Uitholling: in deze versie worden alleen platte vlakken geopend (de meshkernel bouwt ze)."); wanden van verschillende diktes zijn nog niet beschikbaar. Zie [Afronden, afschuinen en uithollen](topic:fillet-chamfer-shell).

| Instelling | Keuzes | Standaard |
|---|---|---|
| Wand (mm) | Boven 0 | 2 |
| Wanden groeien naar buiten (de vlakken blijven binnen) | Uit: wanden gaan naar binnen. Aan: wanden gaan naar buiten | Uit |
| Open vlakken | De verwijderde vlakken, minstens één, met **Verwijderen** | De vlakken die bij het toevoegen zijn gekozen |

{{ui:Vlakken kiezen}} wijzigt de open vlakken.

## Geïmporteerd volume

Ontstaan door een STEP-, STL-, OBJ- of 3MF-bestand te openen: een volumelichaam van driehoeken zonder eigen geschiedenis ([Een STEP-bestand openen](topic:import-step), [Een STL, OBJ of 3MF openen](topic:open-meshes)). Het toont het bestand waar het vandaan komt en wat de import heeft hersteld; **Eenheden in het bestand**, **Omhoog in het bestand** en **Gebruiken voor** blijven bewerkbaar. Een STEP-volume dat door een oudere build met de exacte kernel is geïmporteerd, blijft in de geschiedenis staan als niet beschikbaar; open het STEP-bestand opnieuw om het als driehoeken binnen te halen.

| Instelling | Keuzes | Standaard |
|---|---|---|
| Omhoog in het bestand | Z omhoog (de meeste CAD), Y omhoog | Z omhoog |

Patronen en spiegelingen kunnen een geïmporteerd volume kopiëren, maar geen afronding, afschuining of uitholling.

## Wat elke feature heeft

Onderaan het paneel van elke feature:

| Knop | Doet |
|---|---|
| {{ui:Onderdrukken}} / {{ui:Onderdrukking opheffen}} | Zet hem uit of aan. Features die er afhankelijk van zijn, worden niet opgebouwd zolang hij uit staat |
| {{ui:Terugrollen naar hier}} | Bouwt alleen de features boven deze op. Nieuwe features gaan op de terugrolbalk |
| {{ui:Omhoog verplaatsen}} / {{ui:Omlaag verplaatsen}} | Herordent, wanneer niets wat hij gebruikt er onder terecht zou komen. Anders grijs, met de reden |
| {{ui:Verwijderen}} | Verwijdert hem, en (na een vraag) elke feature die hem gebruikt |
| Naam | Hernoemt hem (tot 60 tekens) |

Features met een schets tonen ook **Aansturende maten**, direct bewerkbaar.

## Toestanden in de geschiedenis

| Toestand | Getoond als | Betekenis |
|---|---|---|
| Opgebouwd | Normaal | Alles goed |
| Waarschuwing | ⚠ | Opgebouwd, met iets om te controleren: "Overgedefinieerd: 1 relatie is niet nodig." of "Er blijft na dit niets over van het onderdeel." |
| Fout | ⚠ fout, rood | Kon niet worden opgebouwd; de melding zegt waarom |
| Niet opgebouwd | ⚠ niet opgebouwd | Heeft een feature nodig die mislukt is, onderdrukt of teruggerold is, of een exacte kernel die deze versie niet heeft ("Uitvegen: nog niet beschikbaar. …") |
| Onderdrukt | uit | Uitgeschakeld |
| Teruggerold | grijs, onder de terugrolbalk | Niet opgebouwd tot u vooruit rolt |

## Onderdeelinstellingen

Klik op lege ruimte zodat niets geselecteerd is. Het rechterpaneel toont **Onderdeel**:

- **Naam**: de naam van het onderdeel, gebruikt voor bestandsnamen en het titelblok van de tekening (tot 120 tekens).
- **Rondingen**: zie hieronder.

### Resolutie van rondingen

De meshkernel bouwt het volume zelf uit platte facetten, dus de weergave, STL, 3MF, de gefacetteerde STEP, het volume en de tekeningaanzichten volgen allemaal **Rondingen**: hoeveel facetten per volledige omwenteling.

| Instelling | Facetten per omwenteling | Volume van een ronde vorm |
|---|---|---|
| Grof (32 per omwenteling) | 32 | Ongeveer 0.64 % onder de echte waarde |
| Normaal (64 per omwenteling) | 64 | Ongeveer 0.16 % onder (de standaard) |
| Fijn (128 per omwenteling) | 128 | Ongeveer 0.04 % onder |
| Zeer fijn (256 per omwenteling) | 256 | Ongeveer 0.01 % onder |

Fijnere rondingen geven gladdere exports en weergaven, en tragere opbouw. De instelling wordt in het onderdeelbestand opgeslagen.

## Nog niet beschikbaar

Afrondingen met variabele straal, afrondingen en afschuiningen op ronde randen, uitholling van gebogen vlakken, trekhoek op gebogen vlakken, uitvegen, lofting, rib, STEP-volumes met exacte gebogen vlakken, nieuwe lichamen, hellingen, "tot" een vlak of hoekpunt, en verwijzingen naar de vlakken en randen van het volume hebben een exacte kernel nodig, die deze versie niet heeft. Ook nog niet beschikbaar: getapte en verzonken gaten. Zie [Wat nog niet beschikbaar is](topic:not-built-yet).
