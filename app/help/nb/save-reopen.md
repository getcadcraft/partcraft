---
title: Lagre, åpne på nytt og fortsett å arbeide
summary: Lagre deler og sammenstillinger på datamaskinen, gi dem navn, åpne dem på nytt med knapp, tast eller dra-og-slipp, behold versjoner og unngå å miste arbeid i en nettleserfane.
keywords: lagre, åpne, åpne på nytt, last inn, last ned, versjoner, sikkerhetskopi, gi nytt navn, filnavn, tapt arbeid, forlate siden, partcraft.json, partcraft-asm.json, ny del
from: c18a5abc
---

PartCraft lagrer ingenting mellom besøkene. Delen din ligger i nettleserfanen til du lagrer den som en fil, og den kommer tilbake når du åpner filen.

## Lagre en del

1. Gi delen et navn: klikk på tomt rom i visningen slik at ingenting er valgt, skriv inn **Navn** i høyre panel og trykk {{key:Enter}}. Overskriften for historikken endres til å passe.
2. Trykk {{key:Mod+S}} eller velg {{ui:Lagre}}.
3. Nettleseren laster ned `<navn>.partcraft.json`. Statuslinjen sier «Bracket.partcraft.json er lagret (hele historikken; åpne den her igjen for å fortsette å redigere).»

Hvis en skisse er åpen, lukkes den først når du lagrer.

Filen inneholder alle skisser, relasjoner, mål og funksjoner, i tillegg til undertrykte funksjoner, tilbakerullingsposisjonen, innstillingene for tegningsarket og GD&T-notater, og hele teksten i et importert STEP-legeme. Angrelisten din lagres ikke.

## Lagre en sammenstilling

I en sammenstilling laster {{ui:Lagre}} eller {{key:Mod+S}} ned `<sammenstillingens navn>.partcraft-asm.json`. Hver del er lagret inne i den: du trenger ikke egne delfiler for å åpne den på nytt.

Mens du redigerer en del fra inne i en sammenstilling, lagrer {{key:Mod+S}} den delen alene som `.partcraft.json`. Velg {{ui:Tilbake}} først, og lagre deretter, for å lagre hele sammenstillingen.

## Åpne på nytt

Gjør ett av disse:

- velg {{ui:Åpne}} eller trykk {{key:Mod+O}}, og velg filen;
- dra filen fra {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren din}} til 3D-visningen («Slipp en PartCraft-del for å åpne den» vises).

PartCraft skiller deler fra sammenstillinger etter innholdet, så begge åpnes på samme måte. En `.step`- eller `.stp`-fil åpnes som et importert legeme: se [Åpne en STEP-fil og bygg videre på den](topic:import-step). Statuslinjen bekrefter: «Åpnet Bracket.partcraft.json: 7 funksjoner.» eller «Åpnet Hinge.partcraft-asm.json: 3 deler, 2 ledd.»

Hvis delen på skjermen har ulagrede endringer, spør PartCraft først: {{ui:Avbryt}}, {{ui:Forkast endringer}} eller {{ui:Lagre først}}.

:::warning
Lukk en sammenstilling ({{ui:Lukk}}) før du åpner en delfil. Hvis du åpner en del mens en sammenstilling er på skjermen, lastes delen bak sammenstillingen, og du ser den først når du lukker sammenstillingen. Å åpne en sammenstillingsfil erstatter også en ulagret sammenstilling uten å spørre, så lagre den først.
:::

## Start på nytt

{{ui:Ny}} starter en tom «Part1». Den spør først hvis det finnes ulagrede endringer, og den lukker en åpen sammenstilling (og spør hvis den er ulagret).

## Behold versjoner

Hver lagring er en ny nedlasting, så du kan beholde versjoner ved å beholde filene:

- Sett en versjon eller dato i navnet før du lagrer: «Bracket rev B».
- Nettleseren din kan legge til « (1)» og « (2)» når en fil med samme navn allerede finnes i nedlastingsmappen. Den nyeste er den med høyest nummer, eller sjekk datoen i {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren din}}.
- Flytt ferdige filer ut av nedlastingsmappen og over i prosjektmappen din.

Se [Hvor filene dine havner](common:your-files) for hvor nedlastingene går på hvert system.

## Ikke mist arbeid

- Lagre før du lukker fanen, laster siden på nytt eller lar datamaskinen sove lenge. Nettleseren spør «Forlate siden?» hvis du prøver å lukke med ulagrede endringer, men et krasj eller en lukket bærbar maskin gir ingen varsel.
- Private vinduer og inkognitovinduer fungerer, men ellers er ingenting annerledes: filen er fortsatt den eneste kopien.
- Lagring i skyen og versjonshistorikk er ikke tilgjengelig ennå.
