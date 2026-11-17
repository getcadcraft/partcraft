---
title: Menyer, taster og mus
summary: Velg en menystil som passer til måten du allerede arbeider på, gi en hvilken som helst kommando din egen tast, flytt kommandoer mellom båndfaner, og still inn hva hjulet og hver musknapp gjør i 3D-visningen.
keywords: menystil, menyer, bånd, verktøylinje, funksjonstre, tastatursnarveier, hurtigtaster, taster, tilpass, omdefiner, mus, hjul, inverter, zoomretning, midtknapp, kretse, panorere, eksporter, importer, bytte, kjent
from: 8445b06c
---

PartCraft sine kommandoer er de samme uansett hvordan du når dem. En **menystil** avgjør bare hvor de står på skjermen, hva de kalles der, og hvilke taster som kjører dem. Velg en i {{ui:Innstillinger}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menyer, taster og mus}}. Endringen trer i kraft med én gang, og denne nettleseren husker den.

## De to stilene

| Stil | Hva du får |
|---|---|
| {{ui:PartCraft}} | PartCraft sin egen verktøylinje: arbeidsområdebyttet, Fil, Skisse, Funksjoner, Tegning, Sammenstilling, Rediger og Visning. Taster: {{key:S}} skisse, {{key:F}} tilpass, {{key:M}} mål, {{key:X}} snittvisning. Startpunktet. |
| {{ui:Funksjonstre}} | Et bånd lagt ut slik mekaniske CAD-programmer med funksjonsbasert modellering gjør det: en {{ui:Fil}}-meny (med alle eksporter), hurtigknapper, og fanene {{ui:Funksjoner}}, {{ui:Skisse}}, {{ui:Overflater}}, {{ui:Evaluer}}, {{ui:Tegning}}, {{ui:Sammenstilling}}, {{ui:Studier}} (arbeidsområdene og deres verktøy), {{ui:Illustrate}} (Illustrate-arbeidsområdets manuelle verktøy; verktøyene bytter først til Illustrate) og {{ui:Visning}}. {{ui:Funksjoner}} starter med {{ui:Skisse}}, siden en del starter fra en skisse. Ekstra taster: {{key:E}} ekstruder, {{key:H}} hull, og {{key:V}} og deretter en bokstav for en visning: {{key:V}} {{key:F}} forfra, {{key:V}} {{key:B}} bakfra, {{key:V}} {{key:T}} topp, {{key:V}} {{key:O}} bunn, {{key:V}} {{key:R}} høyre, {{key:V}} {{key:L}} venstre, {{key:V}} {{key:I}} isometrisk, {{key:V}} {{key:N}} normal til. I 3D-visningen kretser midtknappen, {{key:Shift}} og midtknappen panorerer, høyreknappen panorerer, og venstreknappen velger bare. |

Alle stiler beholder {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} og {{key:Mod+A}}.

Et verktøy fra et annet arbeidsområde bytter til det først. Et Design-verktøy valgt i et annet arbeidsområde går tilbake til Design først. Skisseverktøy venter på en skisse, tegneverktøyene på tegningsarket, og sammenstillingsverktøyene på en sammenstilling. Statuslinjen sier hva som må gjøres først.

:::tip
I en skisse, på tegningsarket, i en sammenstilling og i de andre arbeidsområdene beholder bokstavene sin egen betydning der ({{key:L}} linje, {{key:R}} rektangel, {{key:J}} forbindelse …) i alle stiler. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piltastene beholder alltid sin. En tast i PartCraft sitt eget oppsett som stilen din ga en annen kommando, gjør ingenting, og statuslinjen sier hvor kommandoen gikk.
:::

## Lag den til din egen

1. Velg stilen som ligner mest på det du vil ha, og klikk deretter {{ui:Tilpass…}}.
2. På {{ui:Taster og menyer}} finner du en kommando (søkeboksen hjelper). Klikk {{ui:Legg til en tast}} og trykk tasten, eller to taster etter hverandre. Klikk på en tast for å fjerne den.
3. Med båndet flytter {{ui:Hvor den står}} kommandoen til en annen fane og gruppe, til menyen {{ui:Fil}}, eller til {{ui:Bare taster}}.
4. På {{ui:Mus}} setter du hjulet, knappene som panorerer en skisse, og hva hver knapp gjør i 3D-visningen.
5. Gi den et navn, og klikk {{ui:Lagre}}.

Å lagre en innebygd stil lager din egen kopi («Min Funksjonstre»). Den innebygde endres aldri. En tast gitt til to kommandoer, eller en som ville kjøre før en tobokstavtast kan skrives, vises i rødt og må rettes før du kan lagre.

## Mus

- **Musehjul**: {{ui:Rulling opp zoomer inn}} (startpunktet) eller {{ui:Rulling opp zoomer ut}}, og hvor raskt. En klyping på styreplaten zoomer alltid i den retningen fingrene beveger seg.
- **Panorer skissen med**: midtknappen, høyreknappen, eller begge. Et høyreklikk i en skisse avslutter fortsatt verktøyets steg.
- **Dra i 3D-visningen**: {{ui:Hver visning sin egen}} beholder PartCraft sin innstilling ({{ui:Innstillinger}} › {{ui:PartCraft}}: venstre kretser, eller midtknappen kretser). Eller sett hver knapp til å kretse, panorere, zoome eller ingenting. {{key:Shift}} med kretsknappen panorerer. Et klikk uten å dra velger fortsatt.

## Ta den med deg

{{ui:Eksporter}} lagrer stilen i bruk som en liten `.ccinput.json`-fil. {{ui:Importer…}} legger til en, fra en annen datamaskin eller en kollega. En importert fil kan bare peke på PartCraft sine egne kommandoer: alt annet i den utelates og telles i statuslinjen. {{ui:Slett denne stilen}} fjerner en av dine egne.

:::note
Disse innstillingene blir i denne nettleseren. {{ui:Bruk denne stilen i alle apper}} under stilkortene får hver app til å åpne i sin tilsvarende stil (sin egen verktøylinje, eller et bånd), med endringene du gjorde i hver app. Å velge en annen stil i én app endrer bare den appen.
:::

Relatert: [Taster og mus](topic:keyboard) · [PartCraft-innstillinger](topic:settings) · [Kommer fra en annen parametrisk modellerer](topic:coming-from)
