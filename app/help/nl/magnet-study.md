---
title: Magneetstudie van een schets
summary: Maak de gesloten profielen van uw schetsen tot een vlak magnetisch model (ijzer, magneten, spoelen), bekijk het veld en lees de kracht en het koppel op een lichaam af.
keywords: magneet, magnetisch, magnetostatisch, veld, fluxdichtheid, kracht, koppel, spoel, juk, ijzer, B-H-curve, permanente magneet, actuator, motor, solenoïde, maxwell
from: 604efc3b
---

Gebruik {{ui:More}} in de werkbalk Features › {{ui:Magnet study of sketches…}} op een onderdeel dat schetsen heeft. Elke gesloten vorm in de schetsen die u aanvinkt, is één gebied van een vlak model; de studie berekent het magnetisch veld B, en de kracht en het koppel op een lichaam dat u kiest.

## Stappen

1. Teken de lichamen als gesloten vormen in schetsen: een ijzeren juk, een magneet, een spoel. Lichamen die elkaar raken, delen een rand, dus zet ze in verschillende schetsen; lichamen die los staan of in elkaar zitten (een venster in een juk), mogen in één schets. Houd de schetsen op hetzelfde vlak.
2. Open de studie en vink de te gebruiken schetsen aan. Elk gesloten profiel krijgt een genummerde rij. Geef aan wat het is: {{ui:Air}}, {{ui:Iron}} (een permeabiliteit, of een B–H-curve ingevoerd als paren van B in tesla en H in A/m), een {{ui:Permanent magnet}} (Br in tesla, de richting als hoek vanaf de x-as van de schets, en de terugkeer-permeabiliteit) of een {{ui:Coil}} (de totale stroom door het profiel, windingen maal ampère; het teken geeft aan welke kant de stroom op loopt).
3. Vink {{ui:Force and torque on this body}} aan voor de lichamen waarvoor u die wilt. Geef de diepte van het onderdeel loodrecht op de schets op.
4. Kies het mesh en de lucht rond het model, en klik dan op {{ui:Run}}.

## Wat u zou moeten zien

- De fluxdichtheid |B| over het model, van donkerblauw (laag) naar rood (hoog), met de profielen genummerd.
- Het sterkste veld en waar het zit, het aantal driehoeken, en voor elk lichaam dat u aanvinkte de kracht langs x en y en het koppel om het midden ervan, voor de diepte die u gaf.
- {{ui:Save results (CSV)}} schrijft de getallen weg.

## Goed om te weten

- Het is een vlak, stationair model: alles is per meter diepte, zonder wervelstromen en zonder hysterese, en een magneet is een rechte terugkeerlijn (hij kan niet worden ontmagnetiseerd).
- Het model zit in een doos lucht waarvan de rand een wand is. Vergelijk twee maten van de luchtdoos en de meshes Normaal en Fijn: een kracht die uit het veld rond een lichaam wordt afgeleid, is slechts zo goed als de mesh daar.
- IJzer met alleen een permeabiliteit verzadigt nooit. Als het veld 2 T passeert, zet de studie een ⚠ in de Problemenlijst: geef het ijzer een B–H-curve. De getallen in een nieuwe rij zijn voorbeelden (ijzer μr 2000, een magneet van 1.2 T), geen gegevens van een materiaalblad.
- Een lichaam heeft ruimte rondom nodig om de kracht op te nemen: staat een ander lichaam te dicht, dan zegt de studie dat.
- Een hulpmiddel bij het tekenen, geen technische goedkeuring.

## Volgende

- [Magnetische velden in 2D (zelfstudie)](topic:magnetic-fields-2d)
