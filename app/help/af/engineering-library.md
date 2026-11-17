---
title: Die ingenieursbiblioteek
summary: Handboekformules as leesbare skripte, in SI-eenhede, elke resultaat met sy bron. Pyp- en kanaalvloei, hitteoordrag en warmtewisselaars, drukdele, gasdinamika, water- en lugeienskappe, materiale, en eenhede wat gekontroleer word. Waarvoor elkeen goed is en waar dit ophou.
keywords: ingenieurswese, biblioteek, eenhede, Darcy-Weisbach, Colebrook, Reynolds, wrywingsfaktor, Dittus-Boelter, Gnielinski, NTU, effektiwiteit, LMTD, vin, Barlow, Lamé, mondstuk, isentropies, Mach, versmoorde vloei, water, lug, eienskappe, materiaal, bronne
from: 786ef967
---

Die ingenieursbiblioteek is 'n stel skripte in die biblioteek van die Skripwerkruimte (`craftlib/eng`). Elkeen is 'n funksie wat jy van bo na onder kan lees, met 'n kopstuk wat sy **metode**, sy **eenhede**, sy **perke**, sy **verwysings** en 'n **kontrole** met 'n uitgewerkte getal gee. Hulle gebruik SI-eenhede deurgaans en gee hoeveelhede terug wat 'n **eenheid** en 'n **bron** dra. So kan 'n datablad druk waar elke getal vandaan kom.

## Eenhede wat gekontroleer word

`to_si(10, 'bar', 'Pa')` skakel 'n waarde om en weier 'n eenheid wat iets anders meet (byvoorbeeld 'n lengte waar 'n druk verwag word). `from_si`, `unit_convert(1, 'bar', 'psi')` en `unit_kind('W/(m K)')` ("termiese geleidingsvermoë") werk op dieselfde manier. `temp_k(25, 'C')` en `temp_from_k` skakel temperature om, wat 'n verskuiwing het.

## Eienskappe

- `fluid('water', T)` en `fluid('air', T, p)`: digtheid, viskositeit, geleiding, spesifieke hitte, Prandtl-getal. Water 0 tot 100 °C, lug 250 tot 600 K. Buite dit stop dit in plaas van om te ekstrapoleer.
- `material('ss304')`: Young se modulus, Poisson se verhouding, digtheid, vloeisterkte, geleiding, spesifieke hitte, uitsetting. Dit is kamertemperatuurwaardes uit dieselfde datablaaie as Simulasie. 'n Werklike ontwerp gebruik die verskaffer se gesertifiseerde getalle. Temperatuurkurwes is nog nie gebou nie.

## Vloei in pype en kanale

`reynolds`, `hydraulic_diameter`, `friction_factor` (laminêr, dan die Colebrook-vergelyking vir turbulente vloei; die 2300 tot 4000-reeks het geen betroubare formule nie, en sê so), `darcy_weisbach`, `minor_loss`, `pipe_flow` (ronde pyp, alles tegelyk) en `rect_channel` (laminêre reghoekige kanale volgens die Shah- en London-pas).

## Hitteoordrag

`nusselt_dittus_boelter`, `nusselt_gnielinski`, `nusselt_tube` (kies laminêr of turbulent en noem die korrelasie), `htc`, `fin_efficiency`, `lmtd`, `effectiveness` en `ntu_for` (die effektiwiteit-NTU-verhoudings vir teenstroom, parallel, dop-en-buis, dwarsstroom en 'n enkele veranderende stroom), en `hx_size` (die grootte UA wat 'n lading nodig het; dit sê hoeveel moontlik is wanneer die lading nie gehaal kan word nie).

## Drukdele

`allowable_stress` (vloei oor 'n veiligheidsfaktor), `wall_thin_cylinder`, `barlow`, `wall_thick_cylinder` (Lamé, op die hoepel- of die skuifkriterium) en `wall_sphere`. Dit is handboekmarges, **nie 'n drukvatkode-berekening nie**: geen korrosietoelaag, verbindingsdoeltreffendheid of kodefaktore nie.

## Gasdinamika

`isentropic` (die verhoudings by 'n Mach-getal), `mach_from_area`, `choked_flow`, `throat_area` en `exit_mach`, vir 'n perfekte gas sonder wrywing, hitte of skokke.

## Kontroleer die resultaat

`check_stress`, `check_thermal` en `check_flow` laat PartCraft se eie spanning-, geleidings- en vloei-oplossers loop op 'n gegenereerde onderdeel vanaf die skrip. Hulle lees die maksimum spanning en verplasing, die temperature en hitte-vloei, en die deurlaatbaarheid van 'n kanaalnetwerk terug. Hulle verander niks in die oplossers nie. Die spanning- en temperatuurkontroles gebruik voksels, so 'n geboë vlak is 'n trap. Die spanning by 'n skerp binnehoek of onder 'n puntlas hang af van die voksel-grootte.
