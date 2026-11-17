---
title: Ribber og knutepunktsplater
summary: Stiv av et emne med en ribbe tegnet som én linje. Den fylles fra linjen til veggene, en satt tykkelse på tvers av skissplanet, på siden du velger.
keywords: ribbe, knutepunktsplate, steg, avstivning, stiver, beslag, hjørnestøtte, tynn vegg, forsterke
from: 5c218881
---

:::note
**Ikke bygget ennå i denne versjonen.** Ribben trenger en eksakt geometrikjerne, som denne versjonen av PartCraft ikke har: den bygger alle emner med mesh-kjernen. [Hva som ikke er bygget ennå](topic:not-built-yet) forteller hva du skal gjøre i stedet. Resten av siden beskriver ribben slik den fungerer med en eksakt kjerne.
:::

En **ribbe** (eller knutepunktsplate) er en tynn vegg som avstiver et emne, for eksempel trekanten inne i hjørnet på et L-beslag. Du tegner bare den frie kanten: PartCraft fyller rommet mellom den linjen og veggene. Den trenger den **eksakte kjernen** (se [Mesh-kjernen](topic:solid-kernels)).

## Legg til en ribbe

1. Lag et plan midt der ribben skal være (for et L-beslag som er 40 dypt: et plan 20 foran skissen. Se [Referanseplan, akser og punkter](topic:reference-geometry)).
2. Skisser på det **én linje** fra vegg til vegg, eller noen få linjer ende mot ende for en bøyd ribbekant. Linjen kan stoppe kort av veggene: endene føres videre til de møter dem.
3. Velg skissen og velg {{ui:Mer}} › {{ui:Ribbe}}.

Ribben fylles fra linjen til veggene, på siden mot midten av emnet, slik at en knutepunktsplate havner i innvinkelen. Hvis den siden er åpen og den andre er lukket, snur PartCraft den for deg og sier fra om det.

## Innstillinger

- **Tykkelse (mm)** er ribbens tykkelse på tvers av skissplanet. Den kan styres av en parameter.
- **Tykkelse** (valget under den): **Sentrert på skissplanet**, **Foran planet** (langs normalen) eller **Bak planet**.
- **Snu** fyller den andre siden av linjen.

## Meldinger

- **På denne siden møter ribbekanten aldri emnet**: ingenting lukkes i rommet på den siden. Kryss av eller av i **Snu**, eller flytt linjen slik at vegger avgrenser den.
- **En ribbe trenger én åpen kjede av linjer i skissen**: skissen har en lukket form, en bue eller en kurve, eller linjer som ikke henger sammen ende mot ende.
- **Ribbekanten går inne i legemet der**: linjen ligger inne i volumlegemet. Tegn den i det åpne rommet mellom veggene.
