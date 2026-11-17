---
title: Referenceplaner, akser og punkter
summary: Lav planer forskudt fra en flade, i en vinkel, gennem tre punkter, midtimellem, tangent til en cylinder, vinkelret på en kant eller gennem en kant og et punkt; akser; punkter i kantmidter, skæringer og planhjørner; skitsér på dem og brug dem som omdrejningsakser, mønsterretninger og spejlplaner.
keywords: datum, mellem objekter, midtpunkt, skæringspunkt, plan gennem kant og punkt, referenceplan, arbejdsplan, konstruktionsplan, datumplan, forskudt plan, plan i vinkel, midtplan, tangentplan, referenceakse, konstruktionsakse, datumakse, referencepunkt, arbejdspunkt, skitsér på plan
from: e7eb6fc1
---

Referencegeometri er stilladset, du bygger features på: et **plan** at skitsere på, hvor der ikke er nogen flade, en **akse** at omdreje eller mønstre om, et **punkt** at stoppe en ekstrudering ved. Den har ingen materiale selv. Planer vises i visningen som lyse firkanter, akser som stiplede linjer og punkter som små krydser. Alle tre kommer ind i historikken og følger det, de blev lavet ud fra, når du ændrer et mål længere oppe.

De findes i Features-gruppens {{ui:Mere}}-menu: {{ui:Plan}}, {{ui:Akse}}, {{ui:Punkt}}.

## Lav et plan

1. Klik på en plan flade, eller et grundplan i historikken, for at starte fra den (valgfrit).
2. Vælg {{ui:Mere}}, og vælg derefter {{ui:Plan}}. Det starter som et forskudt plan 20 % af delens størrelse fra det, du valgte (eller fra topplanet).
3. Vælg i højre panel **Type** og dens referencer:

| Type | Referencer | Tal |
|---|---|---|
| Forskudt fra et plan eller en flade | **Fra plan** | **Afstand (mm)**, negativ for den anden side |
| I en vinkel, gennem en kant eller akse | **Fra plan**, **Drej om** (en verdensakse, en akse-feature eller en valgt ret kant) | **Vinkel (°)** |
| Gennem tre punkter | **Punkt 1**, **Punkt 2**, **Punkt 3** | — |
| Midtplan mellem to | **Første plan**, **Andet plan** (parallelle: halvvejs; mødes: planet, der halverer vinklen) | — |
| Tangent til en cylinder | **Cylinder** (en cylinderflade), **Nærmeste punkt** (hvilken side) | — |
| Vinkelret på en kant, i et punkt | **Kant**, **Ved punkt** (planet går gennem kantens punkt nærmest det og gennem punktet) | — |
| Gennem en kant og et punkt | **Ret kant** (eller en akse), **Gennem punkt** | — |
| Vinkelret på en kant i dens midte | **Kant** (halvvejs langs den, vinkelret på den dér), eller uden kant **Punkt 1** og **Punkt 2** (planet halvvejs mellem dem) | — |

Hver reference har en **Vælg**-knap: vælg den, og klik derefter i visningen. Et planfelt tager et grundplan, et referenceplan eller en plan flade. Et punktfelt tager enden af en kant (klik nær den ende), en punkt-feature eller et sted på en flade. Et kantfelt tager en kant. {{key:Esc}} annullerer et valg. **Vend normalen** vender planet om, så du styrer, hvilken vej en skitse på det vender.

I denne version svarer et felt, der kræver en kant eller en cylinderflade (Tangent til en cylinder og kantfelterne), med »ikke lavet endnu«. Brug i stedet punkter eller en akse.

## Skitsér på et plan

Vælg planet (i historikken eller ved at klikke på dets firkant i visningen) og vælg {{ui:Skitse}}, eller **Skitsér på det** i dets panel. Skitsen følger planet: ændrer du planets afstand, flytter skitsen og alle features på den sig også.

## Akser og punkter

- {{ui:Akse}}: gennem to punkter, cylinderens eller keglens akse, hvor to planer mødes, langs en ret kant (eller aksen på en cirkulær kant), eller vinkelret på en flade gennem et punkt.
- {{ui:Punkt}}: ved koordinater, i et hjørne eller skitsepunkt, eller i centrum af en cirkulær kant, samt punkterne »mellem objekter«:

| Punkttype | Referencer |
|---|---|
| Midt på en kant (eller mellem to punkter) | **Kant** (halvvejs langs dens længde, også for buer og kurver), eller uden kant **Punkt 1** og **Punkt 2** |
| Hvor en kant eller akse møder en flade eller et plan | **Kant** (ret eller buet) eller en akse, og **Møder plan** (et plan eller en plan flade) eller **Eller en flade** (en plan flade eller en cylinder). En cirkel skærer et plan to gange, og en linje går gennem en cylinder to gange: **Den anden skæring** tager den anden |
| Hvor tre planer mødes | **Første**, **Andet** og **Tredje plan** (planer eller plane flader) |

Hver af dem fejler med en almindelig besked, når dens referencer ikke passer: en linje parallel med planet, en linje, der misser cylinderen, en kant, der ikke når planet, tre planer, der ikke mødes i ét punkt, eller et punkt på den linje, der skulle fastlægge et plan.

Brug dem i andre features:

| Hvor | Hvordan |
|---|---|
| Drej | **Akse**: vælg akse-featuren fra listen (den skal ligge i skitsens plan) |
| Cirkulært mønster | **Akse**: akse-featuren |
| Lineært mønster | **Retning**: en akse-feature eller et plan (dets normal) |
| Spejling | **Spejlplan**: et referenceplan |
| Ekstruder | **Slut**: Op til flade eller plan, Op til hjørnepunkt (en punkt-feature). Ikke lavet endnu i denne version (den kræver en exact-kerne) |
| Udtræksvinkel | **Neutralt plan** |

## Når en reference er væk

Et plan lavet ud fra en flade, der ikke længere findes, fejler med en besked, der nævner den, for eksempel »Fladen, det sidder på, er væk fra Extrude1.« Det bliver aldrig flyttet til en anden flade. Skitserne og features på det markeres »ikke lavet«, indtil du vælger en ny reference. Resten af delen bliver, som den var.

:::note
Denne version bygger alle dele med mesh-kernen, som laver planer, akser og punkter ud fra grundplaner, plane flader lavet af en Extrude eller Revolve, skitsepunkter, koordinater og andre referencefeatures. Alt, der kræver en kant, enden af en kant eller en buet flade, kræver en exact-kerne: ikke lavet endnu i denne version (»Den bruger en flade eller kant på massivlegemet, som kun en exact-kerne kan finde: ikke lavet endnu i denne version.«).
:::
