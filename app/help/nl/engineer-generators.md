---
title: Onderdelen uit de natuurkunde: generatoren
summary: De werkomgeving Engineer en de functie Gegenereerd lichaam: kies een generator, stel de invoer in (stroming, druk, temperaturen, materiaal, printer), en krijg een onderdeel dat is gedimensioneerd met leerboekformules, met zijn gegevensblad, zijn fabricagecontroles en bestanden voor analysetools. Dezelfde invoer geeft altijd hetzelfde onderdeel.
keywords: engineer, generator, gegenereerd lichaam, natuurkunde, regels, warmtewisselaar, verdeelspruitstuk, mondstuk, rooster, gyroïde, gegevensblad, invoer, deterministisch, zelfde invoer zelfde onderdeel, fabricagecontroles, 3D-printen, poederbed
from: 5a387dc0
---

Een **generator** is een script dat een onderdeel dimensioneert op basis van uw eisen en het bouwt. Een generator voor warmtewisselaars neemt de te verplaatsen warmte, de twee stromen en hun temperaturen, de druk en het materiaal; hij berekent hoe groot de kern moet zijn en hoe dik de wand, bouwt hem, en vertelt u de getallen die hij gebruikte en waar elk vandaan komt. Verandert u een invoer, dan volgt het onderdeel.

Het resultaat is een gewoon lichaam in het onderdeel: het staat in de functielijst, het kan worden afgedrukt, het kan worden geëxporteerd. De generator zelf wordt ook in het onderdeel bewaard, dus een bestand opent op elke computer zonder dat de generator is geïnstalleerd, en **het openen van een onderdeel draait nooit een script**.

## Een lichaam maken

1. Kies de werkomgeving {{ui:Engineer}} in de wisselaar.
2. Kies een generator in de lijst (de meegeleverde van PartCraft, daarna alle die u uit een bestand hebt geopend) en klik op {{ui:Nieuw}}.
3. Het script draait. Als het klaar is, staat het lichaam in beeld en toont het paneel de invoer, het **gegevensblad** en de **controles**.

U kunt er ook een toevoegen vanuit Ontwerp: {{ui:Features}} › {{ui:Meer}} › {{ui:Gegenereerd lichaam}}.

## Wijzigen

Verandert u een invoer, dan wordt het lichaam even nadat u stopt met typen opnieuw gemaakt. Het paneel zegt welke van drie dingen waar is:

- **Actueel**: het lichaam komt overeen met het script en zijn invoer.
- **De invoer is gewijzigd**: het lichaam in het onderdeel komt van de vorige invoer; het wordt opnieuw gemaakt, of druk op {{ui:Uitvoeren}}.
- **Nog niet uitgevoerd** of **De laatste run is mislukt**: er wordt een scriptfout getoond met zijn regel.

{{ui:Stoppen}} beëindigt een run die te lang duurt. Ongedaan maken gaat één stap per keer terug: een run is één stap, een invoer is één stap.

## Het gegevensblad

Elk getal dat de generator heeft berekend, staat in de lijst met zijn **eenheid** en **waar het vandaan komt** (een leerboekvergelijking, een norm, een gegevensblad). Niets is een verborgen constante. Het blad hoort bij het bestand, dus het is hetzelfde op de volgende computer. [Gegevens exporteren](topic:data-out) beschrijft hoe u het als JSON of PDF opslaat.

## De controles

Een generator kan zijn eigen onderdeel controleren tegen een printproces: wanden en spleten die dunner zijn dan het proces aankan, losse stukken, holten die poeder of hars vasthouden, gaten die te smal zijn om ze leeg te maken, en overhangen die ondersteuning nodig hebben. De bevindingen staan in het paneel en in de lijst {{ui:Problemen}} (de ⚠-knop), en ze worden met het onderdeel opgeslagen.

De procescijfers zijn de ronde getallen die openbare ontwerprichtlijnen geven voor het proces in het algemeen (FDM, SLA, SLS, metaal poederbed). Het zijn **niet de specificatie van uw machine**: vervang ze door de cijfers van uw werkplaats voordat u op een controle vertrouwt. De controle werkt op een raster van voxels, dus ze is nauwkeurig tot ongeveer één voxel: een wand wordt alleen gemeld als ze meer dan een voxel dunner is dan de grens.

## Wat er wordt meegeleverd

| Generator | Wat het maakt |
|---|---|
| Gyroïde blok | Een blok gevuld met een gyroïde, Schwarz P of diamantplaat: het eenvoudigste rooster |
| Gyroïde warmtewisselaar | De kern van een wisselaar met twee vloeistoffen, gedimensioneerd uit de belasting volgens de effectiviteit-NTU-methode, de wand uit de druk; kan het drukverlies controleren met een stromingsstudie op één cel |
| Verdeelspruitstuk | Een kop en takken, elke buis gedimensioneerd op de stroom die hij draagt |
| Roosterbalk met gradatie | Een rooster waarvan de wand dikker wordt waar een topologie-optimalisatie zegt dat materiaal nodig is |

Het zijn allemaal eerste schattingen op basis van leerboekformules. [De engineeringbibliotheek](topic:engineering-library) somt de formules en hun grenzen op. Draai Simulatie, Thermisch of Stroming op het resultaat voordat u erop vertrouwt.

## Exportcontroles

De generatoren en gegevensbladen van Engineer dragen een kennisgeving over exportcontroles en sancties. Lees die in [Engineer en exportcontroles](topic:engineer-export-notice); ze staat ook onderaan elk gegevensblad.

## Nog niet beschikbaar

- Koppen, poorten en fittingen op de kern van de warmtewisselaar: het is alleen de kern.
- Temperatuurcurves voor materiaalsterkte: de materialen zijn op kamertemperatuur.
- T-stuk-verliezen en de verdeling van de stroom over de uitgangen in het spruitstuk.
- Generatoren toevoegen uit de add-on-map met één klik; een bestand openen voegt er één toe aan deze browser.
- Generatoren voor de andere apps.
