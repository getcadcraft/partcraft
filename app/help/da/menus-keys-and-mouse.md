---
title: Menuer, taster og mus
summary: Vælg en menustil, der passer til den måde, du allerede arbejder på, giv en hvilken som helst kommando din egen tast, flyt kommandoer mellem båndfaner, og indstil, hvad hjulet og hver museknap gør i 3D-visningen.
keywords: menustil, menuer, bånd, værktøjslinje, featuretræ, tastaturgenveje, hurtigtaster, taster, tilpas, omlæg, mus, hjul, vend, zoomretning, midterknap, kredsbevægelse, panorér, eksport, import, skift, velkendt
from: 8445b06c
---

PartCraft's kommandoer er de samme, uanset hvordan du når dem. En **menustil** bestemmer kun, hvor de sidder på skærmen, hvad de hedder dér, og hvilke taster der kører dem. Vælg en i {{ui:Indstillinger}} ({{key:Mod+,}}) › {{ui:PartCraft}} › {{ui:Menuer, taster og mus}}; ændringen træder i kraft med det samme, og denne browser husker den.

## De to stilarter

| Stil | Hvad du får |
|---|---|
| {{ui:PartCraft}} | PartCraft's egen værktøjslinje: arbejdsområdeskifteren, {{ui:Fil}}, {{ui:Skitse}}, Features, {{ui:Tegning}}, {{ui:Samling}}, Rediger og {{ui:Visning}}. Taster {{key:S}} skitse, {{key:F}} tilpas, {{key:M}} mål, {{key:X}} snitvisning. Udgangspunktet. |
| {{ui:Featuretræ}} | Et bånd opstillet, som featurebaserede mekaniske CAD-programmer opstiller deres: en {{ui:Fil}}-menu (med alle eksporter), hurtigknapper og fanerne {{ui:Features}}, {{ui:Skitse}}, {{ui:Overflader}}, {{ui:Evaluér}}, {{ui:Tegning}}, {{ui:Samling}}, {{ui:Undersøgelser}} (arbejdsområderne og deres værktøjer), {{ui:Illustrér}} (Illustrér-arbejdsområdets manuelle værktøjer; dets værktøjer skifter først til Illustrér) og {{ui:Visning}}. {{ui:Features}} starter med {{ui:Skitse}}, da en del starter fra en skitse. Ekstra taster: {{key:E}} ekstruder, {{key:H}} hul, og {{key:V}} efterfulgt af et bogstav for en visning: {{key:V}} {{key:F}} forfra, {{key:V}} {{key:B}} bagfra, {{key:V}} {{key:T}} oppefra, {{key:V}} {{key:O}} nedefra, {{key:V}} {{key:R}} højre, {{key:V}} {{key:L}} venstre, {{key:V}} {{key:I}} isometrisk, {{key:V}} {{key:N}} normal til. I 3D-visningen drejer midterknappen visningen, {{key:Shift}} og midterknappen panorerer, højreknappen panorerer, og venstreknappen vælger kun. |

Alle stilarter beholder {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+D}} og {{key:Mod+A}}.

Et værktøj fra et andet arbejdsområde skifter først til det; et Design-værktøj valgt i et andet arbejdsområde går først tilbage til Design. Skitseværktøjer venter på en skitse, tegningsværktøjer på tegningsarket, samlingsværktøjer på en samling: statuslinjen siger, hvad du skal gøre først.

:::tip
I en skitse, på tegningsarket, i en samling og i de andre arbejdsområder beholder bogstaver deres egen betydning dér ({{key:L}} linje, {{key:R}} rektangel, {{key:J}} samling …) i alle stilarter. {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piletasterne beholder altid deres. En tast fra PartCraft's egen opsætning, som din stil har givet en anden kommando, gør ingenting, og statuslinjen siger, hvor dens kommando er blevet af.
:::

## Gør den til din egen

1. Vælg den stil, der ligger tættest på det, du ønsker, og klik derefter på {{ui:Tilpas…}}.
2. På {{ui:Taster og menuer}} finder du en kommando (søgefeltet hjælper). Klik på {{ui:Tilføj en tast}}, og tryk på tasten, eller to taster i træk. Klik på en tast for at fjerne den.
3. Med båndet flytter {{ui:Hvor den sidder}} kommandoen til en anden fane og et andet panel, til menuen {{ui:Fil}}, eller til {{ui:Kun taster}}.
4. På {{ui:Mus}} indstiller du hjulet, knapperne der panorerer en skitse, og hvad hver knap gør i 3D-visningen.
5. Giv den et navn, og klik på {{ui:Gem}}.

Når du gemmer en indbygget stil, laves din egen kopi (»Min Featuretræ«); den indbyggede ændres aldrig. En tast givet til to kommandoer, eller en der ville køre, før en to-bogstavs-tast kunne skrives, vises med rødt og skal rettes, før du kan gemme.

## Mus

- **Musehjul**: {{ui:Rul op zoomer ind}} (udgangspunktet) eller {{ui:Rul op zoomer ud}}, og hvor hurtigt. Et trackpad-knib zoomer altid i den retning, dine fingre bevæger sig.
- **Panorér skitsen med**: midterknappen, højreknappen eller begge. Et højreklik i en skitse afslutter stadig værktøjets trin.
- **Træk i 3D-visningen**: {{ui:Hver visnings egen}} beholder PartCraft's indstilling ({{ui:Indstillinger}} › {{ui:PartCraft}}: venstre drejer, eller midterknappen drejer). Eller indstil hver knap til at dreje, panorere, zoome eller ingenting; {{key:Shift}} med drejeknappen panorerer. Et klik uden træk vælger stadig.

## Tag den med dig

{{ui:Eksportér}} gemmer den brugte stil som en lille `.ccinput.json`-fil; {{ui:Importér…}} tilføjer en, fra en anden computer eller en kollega. En importeret fil kan kun pege på PartCraft's egne kommandoer: alt andet i den udelades og tælles i statuslinjen. {{ui:Slet denne stil}} fjerner en af dine egne.

:::note
Disse indstillinger bliver i denne browser. {{ui:Brug denne stil i alle apps}} under stilkortene får alle apps til at åbne i deres tilsvarende stil (deres egen værktøjslinje eller et bånd), med de ændringer, du har lavet i hver app. Hvis du vælger en anden stil i én app, ændres kun den app.
:::

Relateret: [Taster og mus](topic:keyboard) · [PartCraft-indstillinger](topic:settings) · [Kommer fra en anden parametrisk modellering](topic:coming-from)
