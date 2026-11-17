---
title: Hold en .3dm-modell live
summary: Endre en modell i programmet som laget den, og se PartCraft-legemet følge med, fra Rhino 8 eller en Grasshopper-definisjon, med funksjonene dine bygget om på den nye formen.
keywords: rhino, grasshopper, live-kobling, live-forbindelse, 3dm, nurbs, parametrisk, kobling, synkronisering, skript, push, importert legeme
from: cf4dc9b2
---

Fortsett å forme modellen der du modellerer, og maskinbearbeid, kontroller og dokumenter den her. Hver endring i det andre programmet erstatter ett importert legeme i PartCraft, og funksjonene etter det bygges om på den nye formen.

:::note
Koblingen krever **CadCraft Studio** på samme datamaskin. En nettleserfane kan ikke ta imot forbindelsen. Ingenting går over internett: skriptet snakker med Studio på datamaskinens egen adresse, med et token.
:::

:::warning
Denne koblingen er testet med skriptets filskriver og en erstatning for det andre programmet, ikke ennå inne i Rhino eller Grasshopper selv. Hvis noe feiler der, si fra om hva meldingen sa.
:::

## Sett den opp

1. I Studio åpner du PartCraft. Under {{ui:Innstillinger}} › {{ui:PartCraft}} › {{ui:Assistenter}} krysser du av for **La KI-assistenter og skript bruke PartCraft**, deretter **Rediger**.
2. I Studio velger du {{ui:Koble til en assistent}}. Den viser adressen og tokenet du limer inn nedenfor.
3. Last ned skriptet: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Fra Rhino

1. Kjør `cadcraft_link.py` i Rhinos skripteditor (Python 3 i Rhino 8).
2. Første gang limer du inn adressen og tokenet. De lagres i `.cadcraft-link.json` i hjemmemappen din, aldri i modellen. Studio lager et nytt token hver gang det starter, så skriptet spør igjen da.

Kjør skriptet på nytt for å stoppe.

## Fra Grasshopper

Kjør skriptet én gang i Rhino først, slik at adressen og tokenet lagres.

1. Legg til en skriptkomponent (Python 3) og lim inn hele `cadcraft_link.py` i den.
2. Gi den disse inngangene: `G` (geometrien, med listetilgang), `N` (et navn, valgfritt), `On` (en boolsk bryter) og `Target` (valgfritt: `model` eller `part`, hvis begge programmene er åpne).
3. Sett `On` til sann.

Hver løsning sender `G` over og erstatter det komponenten sendte sist.

## Hvordan det fungerer her

- **Ett legeme.** Alt som er synlig i modellen blir én importert funksjon, som når du [åpner en .3dm-fil](topic:open-3dm-files).
- **Det må lukkes.** PartCraft fyller små hull og flate åpninger, og det andre programmet får vite hvor mange. Hvis modellen fortsatt ikke er lukket, beholder PartCraft legemet det hadde, og statuslinjen sier det. Neste endring som lukker, oppdaterer det.
- **Fullfør det du gjør.** I en skisse eller en tegning blir oppdateringer avvist og forsøkt på nytt; de kommer når du er tilbake i modellen.
- **Angre.** Oppdateringer som kommer innen to sekunder etter hverandre, deler ett angretrinn.
- **Lagre.** Delfilen beholder koblingen. Kjør skriptet på nytt etter at du har åpnet den igjen, så oppdateres samme funksjon.

**Bare én vei.** Endringer her går ikke tilbake til det andre programmet.

## Hvis noe går galt

- **«Ingen ModelCraft- eller PartCraft-vindu tillater det»:** gjør trinn 1 i oppsettet.
- **«Studio avviste tokenet»:** Studio har startet på nytt. Kopier det nye tokenet og kjør skriptet igjen. For Grasshopper, kjør det i Rhino først.
- **«Kan ikke nå CadCraft Studio»:** Studio kjører ikke, eller adressen har endret seg.
