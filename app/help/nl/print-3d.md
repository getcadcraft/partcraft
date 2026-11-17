---
title: Een onderdeel klaarmaken voor 3D-printen
summary: Controleer of een onderdeel of samenstelling gesloten is, in uw printer past en op een voet staat, en download het daarna als STL of 3MF voor uw slicer.
keywords: 3d-printen, 3d-print, printer, printen, slicer, stl, 3mf, waterdicht, gesloten, manifold, printbed, bedgrootte, bouwplaat, overhang, steunen, voet, millimeters, exporteren, schroefdraad, speling
from: 90d81dff
---

Een slicer heeft een gesloten vorm nodig: geen gaten, elk vlak naar buiten gericht, en niets dat door zichzelf heen loopt. Onderdelen die PartCraft bouwt, zijn door de manier waarop ze gemaakt zijn al gesloten, dus de controle vertelt vooral de grootte, of het onderdeel op het printbed past, of het op een plat vlak staat en hoeveel ervan overhangt.

## Controleren en downloaden

1. Optioneel, eenmalig: stel het printbed van uw printer in via {{ui:Instellingen}} › PartCraft › **3D-printer**: breedte, diepte en hoogte in millimeters. Laat ze leeg om die controle over te slaan.
2. Kies {{ui:Exporteren}}, en dan {{ui:Controleren op 3D-printen (STL of 3MF)…}}.

   Het dialoogvenster zegt "Klaar om te printen" of "Niet klaar om te printen", somt op wat er mis is, en geeft de grootte op het bed (X × Y × Z, in millimeters), het volume en het aantal driehoeken.

3. Klik op {{ui:STL downloaden}} of {{ui:3MF downloaden}}. Het bestand is hetzelfde als {{ui:Exporteren}} › {{ui:3MF, voor 3D-printen}} of {{ui:STL, voor 3D-printen}}.

In een samenstelling nemen de controle en de bestanden de hele samenstelling, elke kopie op de plek waar hij staat.

Het onderdeel wordt gecontroleerd zoals de export het schrijft: wat in PartCraft omhoog wijst (haaks op het Bovenvlak) wijst op het bed omhoog. Een onderdeel dat op het Bovenvlak is geschetst, ligt plat.

## Wat het dialoogvenster kan melden

**Niet klaar om te printen** (een slicer weigert het misschien of print het verkeerd): gaten (randen met een vlak aan één kant alleen), randen die door drie of meer vlakken worden gedeeld, vlakken die de verkeerde kant op wijzen, een lichaam dat binnenstebuiten staat, of een lichaam dat door zichzelf heen loopt. Een in PartCraft gebouwd onderdeel zou dit nooit moeten tonen; als er toch een verschijnt, zie [Problemen oplossen](topic:troubleshooting).

**Waarschuwingen** (het print, maar kijk eerst even):

- **Groter dan het printbed van uw printer**, zelfs als het 90° gedraaid is.
- **Niets ligt plat onderaan**: draai het onderdeel in uw slicer zodat een vlak op het bed rust, anders heeft het steunen of een raft nodig.
- **Helt meer dan 45° van verticaal af**: die vlakken hebben steun nodig, zoals het nu staat. Een andere stand kan minder nodig hebben.
- **Afzonderlijke lichamen overlappen** of **raken elkaar vlak op vlak**: slicers voegen ze meestal samen. {{ui:Combineren}} in Kenmerken › {{ui:Meer}} voegt ze samen tot één lichaam. Zie [Lichamen](topic:bodies).
- **Minder dan 1 mm breed**: controleer de afmetingen van het onderdeel.

## Schroefdraad die printt

Een gemodelleerde schroefdraad print als echte schroefdraad. Geef hem wat **Speling**, zodat een geprinte bout in een geprinte moer past: zie [Schroefdraad](topic:threads).

## Ronde vlakken gladmaken

STL en 3MF bestaan uit driehoeken. Voor gladdere ronde vlakken klikt u op lege ruimte zodat niets geselecteerd is, en zet u **Krommen** in het rechterpaneel op **Fijn (128 per omwenteling)** of **Zeer fijn (256 per omwenteling)** voordat u exporteert. Meer driehoeken betekent grotere bestanden.

## Groter, kleiner of in delen

- **Exporteren › Schaal voor printen (STL of 3MF)…** slaat het onderdeel per as geschaald op zonder het te wijzigen: een **krimptoeslag** in procent (grootte × (1 + s), of de exacte grootte ÷ (1 − s)) voor een gietmodel, of gewone factoren, rond het midden, de laagste hoek, het midden van de onderkant of de oorsprong.
- **Exporteren › Splitsen voor printen (een zip met delen)…** snijdt een onderdeel dat te groot is voor uw printer in delen die elk op het opgegeven bed passen, verbonden door pennen, sleutels, zwaluwstaarten, pengaten of magneetholten (met de speling die u instelt). Elk deel en elke verbinding is genummerd, en de delen worden als STL of 3MF in een zip opgeslagen, met een montageblad. Het onderdeel zelf verandert niet.

## Niet gecontroleerd

Wanddikte, details kleiner dan wat uw spuitmond kan tekenen, en hoe de slicer steunen plaatst. Uw slicer toont die.
