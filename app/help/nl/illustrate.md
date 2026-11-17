---
title: Een handleiding starten in Illustrate
summary: De werkomgeving Illustrate maakt handleidingen van uw ontwerp: aanzichten, uiteengetrokken lijntekeningen met ballonnen en een onderdelenlijst, stap-voor-stap-instructies, animaties en een 3D-bestand dat een klant zonder CAD kan openen. Een handleiding is een eigen bestand.
keywords: illustrate, handleiding, technische illustratie, documentatie, uiteengetrokken aanzicht, onderdelenlijst, instructies, partcraft-manual
from: e447e0ab
---

**Illustrate** is de werkomgeving voor de documenten die mensen rond een ontwerp nodig hebben: uiteengetrokken aanzichten met ballonnen en een onderdelenlijst, lijntekeningen voor handleidingen, stap-voor-stap-instructies, animaties en een 3D-bestand dat een klant kan openen zonder CAD. Kies {{ui:Illustrate}} in de wisselaar {{ui:Werkomgeving}} aan het begin van de werkbalk.

Een **handleiding** is een eigen bestand (`<naam>.partcraft-manual.json`). Het bewaart een kopie van de vorm van elk onderdeel, de productboom en de eigenschappen van de onderdelen, en een verwijzing terug naar waar ze vandaan komen. Zo kunt u aan de handleiding werken terwijl het ontwerp verder wordt bewerkt. Verandert het ontwerp, dan brengt [Bijwerken vanuit het ontwerp](topic:illustrate-update) de wijzigingen binnen.

## Een handleiding starten

Klik op {{ui:Nieuw}} in de groep {{ui:Handleiding}} en kies daarna:

- {{ui:Vanuit het open onderdeel}}: het onderdeel dat open is in Ontwerp.
- {{ui:Vanuit de open samenstelling}}: wordt in plaats daarvan getoond wanneer een samenstelling open is; de onderdelen, hun plaatsen, onderdeelnummers, materialen en uiteengetrokken aanzichten komen mee.
- {{ui:Vanuit een samenstellingsbestand…}}: een opgeslagen `.partcraft-asm.json`; PartCraft bouwt eerst de onderdelen.
- {{ui:Vanuit een ander bestand…}}: glTF (.glb, .gltf), OBJ, STL of 3MF. De boomstructuur en namen van het bestand blijven behouden, en kopieën van één onderdeel (dezelfde vorm twee keer geplaatst) worden één onderdeel met een aantal. STL- en OBJ-bestanden vermelden hun eenheid niet, dus wordt u ernaar gevraagd. STL-bestanden worden met Z omhoog gelezen; glTF en 3MF vermelden dat zelf.

Terwijl een handleiding open is, toont Illustrate de eigen kopie van de onderdelen van de handleiding. Het onderdeel of de samenstelling die open is in Ontwerp wordt verborgen tot u terugkeert naar Ontwerp.

## Opslaan en openen

{{ui:Opslaan}} in de groep {{ui:Handleiding}} (of {{key:Mod+S}}) slaat de handleiding op; {{ui:Openen}} opent er een. Elke wijziging in Illustrate is één stap in de eigen geschiedenis van de handleiding: {{ui:Ongedaan maken}} en {{ui:Opnieuw}} werken op de handleiding terwijl Illustrate open is.

## Nog niet beschikbaar

- STEP-bestanden worden nog niet geopend via {{ui:Vanuit een ander bestand…}}. Open het STEP-bestand in Ontwerp (het komt binnen als een massief lichaam: zie [Een STEP-bestand openen](topic:import-step)) en start de handleiding met {{ui:Vanuit het open onderdeel}}, of sla het op als glTF, 3MF, OBJ of STL.
- ModelCraft en BimCraft kunnen nog geen model rechtstreeks aan Illustrate geven: sla het op als glTF (.glb) en gebruik {{ui:Vanuit een ander bestand…}}.

Volgende: [Aanzichten en uiterlijk](topic:illustrate-views).
