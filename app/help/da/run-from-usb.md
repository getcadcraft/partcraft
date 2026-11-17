---
title: Kør fra et USB-drev
summary: Hvad ingeniørværktøjerne skriver og hvor, så CadCraft Studio kan køre fra et USB-stik eller en vilkårlig mappe uden installationsprogram og uden administratorrettigheder: indstillinger, generatorer, cache og delfiler, og hvad der bliver på stikket.
keywords: usb, bærbar, intet installationsprogram, administrator, admin, indstillinger, datamappe, generatorer, hvor filer skrives, offline, privatliv, værtsadgang
from: 263efc79
---

Ingeniørværktøjerne (generatorer, det tekniske bibliotek, kontrollerne og datafilerne) kræver **ingen administratorrettigheder** og **intet installationsprogram**. De skriver kun det, der står her, og intet andet.

| Hvad | Hvor det gemmes |
|---|---|
| Dine dele, med deres genererede legemer, datablade og kontroller | Delfilen (`.partcraft.json`), hvor du gemmer den. |
| Generatorer, du har åbnet fra filer | I programmets egen lagring: browserens lokale lager i en webside, og mappen `data` ved siden af programmet i den bærbare Studio. Højst 20. |
| Indstillinger (voxelstørrelser du har valgt, løsertråde, layoutet) | Den samme appslagring. |
| Datablade, felter, net | Kun hvor du gemmer dem: download går ddertil, du vælger. |

Værktøjerne laver **ingen netværkskald på egen hånd**: de generatorer, der følger med, er filer i programmets egen mappe, biblioteket og kontrollerne kører på din computer i en arbejdsproces, der ikke kan nå netværket, og de tekniske data (vand- og luftegenskaber, materialer) ligger inde i programmet. En generator, du åbner fra en fil, læses på din computer og går ingen steder hen.

## Den bærbare Windows-zip og Linux

Den bærbare Studio til Windows gemmer sine indstillinger, cache og tilføjelser i en mappe `data` ved siden af programmet. Linux AppImage gør det samme ved siden af sig selv, når en fil ved navn `portable` ligger ved siden af den; uden den fil bruger den din hjemmemappe. Der findes ingen bærbar Mac-form: systemet forhindrer en app, der er hentet fra nettet, i at skrive ved siden af sig selv. Studio-skallens egne noter om bærbar brug (hjælpen for `Studio`) viser, hvad programmet skriver.

## Værtsadgang

Intet her beder om værtsadgang. Printere, seriel-maskiner og USB-enheder hører til noget andet: de spørger, når et job har brug for dem, én gang pr. enhed, og ingen af generatorerne eller kontrollerne rører dem.
