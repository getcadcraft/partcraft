---
title: Ribber og vinkelbøjler
summary: Stiv et emne af med en ribbe tegnet som én linje: den fylder fra linjen ud til væggene, en fast tykkelse på tværs af skitsens plan, på den side du vælger.
keywords: ribbe, vinkelbøjle, bånd, stiver, afstivning, beslag, hjørnestøtte, tynd væg, forstærk
from: 5c218881
---

:::note
**Ikke bygget endnu i denne version.** Ribben kræver en eksakt geometrikerne, som denne version af PartCraft ikke har: den bygger alle emner med mesh-kernen. [Hvad der ikke er bygget endnu](topic:not-built-yet) siger, hvad du skal gøre i stedet. Resten af siden beskriver ribben, sådan den virker med en eksakt kerne.
:::

En **ribbe** (eller vinkelbøjle) er en tynd væg, der stiver et emne, fx trekanten inde i hjørnet af et L-beslag. Du tegner kun dens frie kant: PartCraft fylder rummet mellem den linje og væggene. Det kræver den **eksakte kerne** (se [Mesh-kernen](topic:solid-kernels)).

## Tilføj en ribbe

1. Lav et plan gennem midten af, hvor ribben skal være (for et L-beslag 40 dybt, et plan 20 foran dets skitse: se [Referenceplaner, akser og punkter](topic:reference-geometry)).
2. Skitsér på det **én linje** fra væg til væg — eller flere linjer ende til ende for en bøjet ribbekant. Linjen må stoppe kort af væggene: dens ender føres videre, indtil de møder dem.
3. Vælg skitsen, og vælg {{ui:Mere}} › {{ui:Ribbe}}.

Ribben fylder fra linjen til væggene på siden mod midten af emnet, så en vinkelbøjle havner i det indvendige hjørne. Er den side åben, og den anden lukket, vender PartCraft den for dig og siger det.

## Indstillinger

- **Tykkelse (mm)** er ribbens tykkelse på tværs af skitsens plan. Den kan styres af en parameter.
- **Tykkelse** (valget under den): **Centreret på skitsens plan**, **Foran planet** (langs dets normal) eller **Bag planet**.
- **Vend** fylder den anden side af linjen.

## Meddelelser

- **På denne side rører ribbens kant aldrig emnet** — intet lukker rummet på den side: sæt eller fjern flueben ved **Vend**, eller flyt linjen, så vægge afgrænser den.
- **En ribbe kræver én åben kæde af linjer i sin skitse** — skitsen har en lukket form, en bue eller en spline, eller linjer, der ikke slutter ende til ende.
- **Ribbens kant løber inde i emnet der** — linjen ligger inde i det massive legeme; tegn den i det åbne rum mellem væggene.
