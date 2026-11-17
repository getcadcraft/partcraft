---
title: Værktøjsbiblioteket
summary: Gem de værktøjer, du bruger, i browseren, så alle dele kan have dem, og flyt værktøjsbiblioteker mellem computere som en JSON-fil.
keywords: værktøjsbibliotek, værktøjer, eksport, import, JSON, gem værktøjer, T-nummer, fingerfræser, værkstedsværktøjer
from: 8b9f2483
---

Fanen **Værktøjer** i Manufacture viser delens værktøjer. Under **Værktøjsbibliotek** kan du gemme dine egne værktøjer ud over én del:

- {{ui:Gem dette værktøj}} føjer det valgte værktøj til **Mine gemte værktøjer**; {{ui:Gem alle denne dels værktøjer}} føjer dem alle til. Mine gemte værktøjer gemmes i denne browser og er der for alle dele. Et værktøj, du allerede har gemt (samme type, størrelse, skær og overskrivninger), gemmes ikke to gange.
- {{ui:Føj til denne del}} tager det valgte gemte værktøj ind i delen. Hvis dets T-nummer allerede bruges af et andet værktøj i delen, får det det næste ledige nummer, og panelet siger det. {{ui:Fjern fra mit bibliotek}} fjerner det fra den gemte liste (ikke fra dele, der allerede har det).
- {{ui:Eksportér værktøjer…}} skriver delens værktøjer som en `.json`-fil; {{ui:Importér værktøjer…}} føjer værktøjerne i en sådan fil til delen, med de samme regler (et værktøj, der allerede er der, springes over, og et optaget T-nummer flyttes). Filen rummer størrelser, skær, materialer og de fremføringer og hastigheder, du skrev ind; den har ingen id'er. Brug den til at flytte et værksteds værktøjer til en anden computer eller give dem til en kollega.

Hvis browseren ikke kan gemme biblioteket (lagring er slået fra eller fuld), siger gemningen det, og **Eksportér værktøjer** er vejen til at gemme en fil. En fil skal være et PartCraft-værktøjsbibliotek fra denne version eller ældre, med højst 500 værktøjer med gyldige størrelser; alt andet afvises med årsagen.

Skærehastighederne og spånbelastningerne, der følger med et værktøj, er startværdier; se [Lav værktøjsbaner og G-kode](topic:manufacture).
