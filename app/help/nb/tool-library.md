---
title: Verktøybiblioteket
summary: Lagre verktøyene du bruker i nettleseren, slik at hver del kan ha dem, og flytt verktøybiblioteker mellom datamaskiner som en JSON-fil.
keywords: verktøybibliotek, verktøy, eksport, import, JSON, lagre verktøy, T-nummer, sluttfres, verkstedverktøy
from: 8b9f2483
---

Produksjon-fanen **Verktøy** lister delens verktøy. Under **Verktøybibliotek** kan du beholde dine egne verktøy utover én del:

- {{ui:Lagre dette verktøyet}} legger det valgte verktøyet til **Mine lagrede verktøy**; {{ui:Lagre alle verktøyene til denne delen}} legger til alle. Mine lagrede verktøy lagres i denne nettleseren og finnes for hver del. Et verktøy du allerede har lagret (samme type, størrelse, tenner og overstyringer) lagres ikke to ganger.
- {{ui:Legg til i denne delen}} tar det valgte lagrede verktøyet inn i delen. Hvis T-nummeret allerede brukes av et annet verktøy i delen, får det neste ledige nummer, og panelet sier det. {{ui:Fjern fra biblioteket mitt}} fjerner det fra den lagrede listen (ikke fra deler som allerede har det).
- {{ui:Eksporter verktøy…}} skriver delens verktøy som en `.json`-fil; {{ui:Importer verktøy…}} legger verktøyene i en slik fil til delen, etter de samme reglene (et verktøy som allerede finnes hoppes over, og et opptatt T-nummer flyttes). Filen inneholder størrelser, tenner, materialer og mating- og hastighetsoverstyringene du skrev inn; den har ingen id-er. Bruk den til å flytte et verksteds verktøy til en annen datamaskin, eller gi dem til en kollega.

Hvis nettleseren ikke kan beholde biblioteket (lagring er av, eller full), sier lagring fra seg, og {{ui:Eksporter verktøy}} er veien til å beholde en fil. En fil må være et PartCraft-verktøybibliotek av denne versjonen eller eldre, med høyst 500 verktøy i gyldige størrelser; alt annet avvises med årsaken.

Skjærehastighetene og spanbelastningene som følger med et verktøy er startverdier; se [Lag verktøybaner og G-kode](topic:manufacture).
