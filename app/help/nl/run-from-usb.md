---
title: Vanaf een usb-stick uitvoeren
summary: Wat de engineeringprogramma's schrijven en waar, zodat CadCraft Studio zonder installatieprogramma en zonder beheerdersrechten vanaf een usb-stick of elke map kan draaien: instellingen, generatoren, caches en onderdeelbestanden, en wat op de stick blijft.
keywords: usb, draagbaar, geen installatieprogramma, beheerder, admin, instellingen, gegevensmap, generatoren, waar bestanden worden geschreven, offline, privacy, hosttoegang
from: 263efc79
---

De engineeringprogramma's (generatoren, de engineeringbibliotheek, de controles en de gegevensbestanden) hebben **geen beheerdersrechten** nodig en **geen installatieprogramma**. Ze schrijven alleen wat hier staat, en verder niets.

| Wat | Waar het wordt bewaard |
|---|---|
| Uw onderdelen, met de gegenereerde lichamen, datasheets en controles | Het onderdeelbestand dat u opslaat (`.partcraft.json`), op de plek waar u het opslaat. |
| Generatoren die u uit bestanden hebt geopend | In de eigen opslag van de app: de lokale opslag van de browser in een webpagina, en de map `data` naast het programma in de draagbare Studio. Maximaal 20. |
| Instellingen (voxelgroottes die u hebt ingesteld, solver-threads, de indeling) | Dezelfde opslag van de app. |
| Datasheets, velden, meshes | Alleen waar u ze opslaat: de download gaat naar de plek die u kiest. |

De programma's doen **geen eigen netwerkaanroepen**: de meegeleverde generatoren zijn bestanden in de eigen map van de app, de bibliotheek en de controles draaien op uw computer in een worker die geen netwerk kan bereiken, en de engineeringgegevens (eigenschappen van water en lucht, materialen) zitten in de app. Een generator die u uit een bestand opent, wordt op uw computer gelezen en gaat nergens heen.

## De draagbare Windows-zip en Linux

De draagbare Studio voor Windows bewaart de instellingen, caches en add-ons in een map `data` naast het programma. De Linux-AppImage bewaart ze naast zichzelf als er een bestand met de naam `portable` naast staat; zonder dat bestand gebruikt hij uw thuismap. Er is geen draagbare Mac-versie: het systeem voorkomt dat een gedownloade app naast zichzelf schrijft. De eigen notities over draagbaar gebruik van de shell (help over `Studio`) vermelden wat het programma schrijft.

## Hosttoegang

Hier wordt nooit om hosttoegang gevraagd. Printers, seriële machines en usb-apparaten staan los daarvan: die vragen om toegang wanneer een taak ze nodig heeft, één keer per apparaat, en de generatoren en de controles raken ze nooit aan.
