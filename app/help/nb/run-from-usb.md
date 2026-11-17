---
title: Kjør fra en USB-stasjon
summary: Hva ingeniørverktøyene skriver og hvor, slik at CadCraft Studio kan kjøres fra en USB-minnepinne eller en hvilken som helst mappe uten installasjonsprogram og uten administratorrettigheter: innstillinger, generatorer, hurtiglagre og delfiler, og hva som blir på pinnen.
keywords: usb, bærbar, ingen installasjon, administrator, admin, innstillinger, datamappe, generatorer, hvor filer skrives, frakoblet, personvern, vertstilgang
from: 263efc79
---

Ingeniørverktøyene (generatorer, det tekniske biblioteket, kontrollene og datafilene) krever **ingen administratorrettigheter** og **ingen installasjon**. De skriver bare det som er oppført her, og ingenting annet.

| Hva | Hvor det lagres |
|---|---|
| Delene dine, med de genererte legemene, datablad og kontroller | Delfilen du lagrer (`.partcraft.json`), der du lagrer den. |
| Generatorer du åpnet fra filer | I appens egen lagring: nettleserens lokale lagring på en nettside, og mappen `data` ved siden av programmet i den portable Studio. Høyst 20. |
| Innstillinger (voxelstørrelser du satte, løsertråder, oppsettet) | Samme appslagring. |
| Datablad, felt, nett | Bare der du lagrer dem: nedlastingen går dit du velger. |

Verktøyene sender **ingen egne nettverksforespørsler**: generatorene som følger med, er filer i appens egen mappe; biblioteket og kontrollene kjører på datamaskinen din i en arbeidsprosess som ikke kan nå nettverket; og ingeniørdataene (vann- og luftegenskaper, materialer) ligger inne i appen. En generator du åpner fra en fil, leses på datamaskinen din og går ingen steder.

## Den portable Windows-zip-filen og Linux

Den portable Studio for Windows lagrer innstillingene, hurtiglagrene og tilleggene sine i en mappe `data` ved siden av programmet. Linux-AppImage gjør det samme ved siden av seg selv når en fil som heter `portable` ligger ved siden av den; uten den filen bruker den hjemmemappen din. Det finnes ingen bærbar Mac-versjon: systemet hindrer en app som er lastet ned, i å skrive ved siden av seg selv. Studio-skallets egne notater om bærbarhet (hjelpen for `Studio`) lister opp det programmet skriver.

## Vertstilgang

Ingenting her ber om vertstilgang. Skrivere, serielle maskiner og USB-enheter er egne: de spør når en jobb trenger dem, én gang per enhet, og ingenting i generatorene eller kontrollene berører dem.
