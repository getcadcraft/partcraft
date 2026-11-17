---
title: Een tekening naar een laser sturen
summary: Kies wat elke laag doet (snijden, ritsen, graveren, vullen, afbeelding), bekijk de bewegingen van de kop, sla GRBL-lasermodus-G-code op, of stuur het vanuit de browser nadat u de opdracht hebt afgekaderd.
keywords: laser, lasersnijder, lasergraveur, GRBL, G-code, graveren, vullen, dither, afbeeldingsgravure, ritsen, snijden, Web Serial, Linux, opdracht afkaderen, vermogen, snelheid, gangen
from: 327b3c46
---

Het paneel {{ui:Laser}} zet de lagen van een tekening om in een programma voor een laser die GRBL draait (de meeste hobby- en kleine werkplaats-diode- en CO2-besturingen). Kies in PartCraft {{ui:Export}} › {{ui:Laserprogramma…}}, dan {{ui:Contouren toevoegen uit een DXF…}}: de contouren en gaten komen binnen op de laag CUT. De vlakke patronen van plaatwerkonderdelen (met hun buiglijnen op de laag BEND) hebben de exacte kernel nodig, die deze versie niet heeft. De instellingen worden opgeslagen in het onderdeel- of samenstellingsbestand.

:::warning
Test elke instelling eerst op restmateriaal, draag een oogbescherming die bij uw laser past, houd het deksel dicht waar er een is, en laat een draaiende laser nooit alleen. De getallen waarmee een laag begint, zijn plaatsaanduidingen, geen aanbevelingen voor enig materiaal.
:::

## Kies wat elke laag doet

Elke laag van de tekening is een rij. {{ui:Doet}} zet hem op **Snijden**, **Ritsen**, **Lijnen graveren**, **Vormen vullen**, **Afbeelding graveren** of **Niet verzonden**, met een {{ui:Vermogen %}}, een {{ui:Snelheid mm/min}} en een aantal {{ui:Gangen}}.

- **Vullen** brandt de binnenkant van gesloten vormen in lijnen, {{ui:Lijnafstand}} uit elkaar, onder een {{ui:Hoek}}, in beide richtingen of één; met een overscan zodat de kop op snelheid is wanneer de laser aangaat. Kruisarcering voegt een tweede gang onder 90° toe. Een vorm met een gat blijft open bij het gat.
- **Afbeelding graveren** zet een afbeelding om in stippen (Floyd–Steinberg, Atkinson, geordend, of gewoon zwart-wit met een drempel) of, met *Grijsniveaus*, in variabel vermogen.
- Volgorde: afbeeldingen en vullingen eerst, dan lijngravure, dan ritsen, dan snijden, zodat een uitgesneden onderdeel niet beweegt terwijl het wordt gegraveerd. Binnen één laag lopen de paden **binnen-eerst** (een gat voor de plaat waarin het zit), telkens het dichtstbijzijnde als volgende.

## Voorbeeld, dan opslaan

Het voorbeeld tekent wat de kop doet: brandende lijnen in kleur, snelle bewegingen in grijs, en een groen kader rond alles wat brandt. Daaronder staan het formaat, de lengte van de brandbeweging en een tijdschatting (zonder versnelling; een echte machine doet er langer over). {{ui:Save G-code…}} schrijft GRBL-lasermodus-G-code: `$32=1`, `M4` (of `M3`) met S-waarden, `G0`- en `G1`-bewegingen, en `M5` aan het eind. X0 Y0 is de linkeronderhoek van de opdracht, tenzij u de oorsprong van de tekening kiest: stel daar het werknulpunt van uw machine in. De G-code volgt de gedocumenteerde lasermodus van GRBL; ze is nog niet op een echte laser geprobeerd.

## Verzenden vanuit de browser

In Chrome en Edge vraagt {{ui:Verbinden…}} u de USB-poort van de laser te kiezen. Er wordt niets verbonden of verzonden tot u op een knop drukt. Druk eerst op {{ui:De opdracht afkaderen}}: de kop tekent de rechthoek van de opdracht met de laser **uit** (of op het lage vermogen dat u voor een aanwijzer instelt), zodat u ziet waar hij gaat branden. Pas dan wordt {{ui:Opdracht verzenden}} actief, en die schakelt weer uit als u iets wijzigt. {{ui:Pauzeren}} houdt de kop vast, {{ui:Stoppen}} houdt hem ook vast, reset de besturing (de laser gaat uit) en stuurt `M5`. Waar Web Serial ontbreekt (Firefox, Safari, en CadCraft Studio, waarvan de webweergave er nog geen heeft), sla de G-code op en stuur die met het eigen programma van uw laser.

## Nog niet beschikbaar

Andere formaten van besturingen (Ruida, Marlin-lasers, leveranciersbestanden), tabbladen en instapbewegingen, snijbreedtecompensatie, materiaalbibliotheken, roterende en Z-assen, camera-uitlijning.
