---
title: Netkernen
summary: Denne version af PartCraft bygger hver del med en netkerne, der kører i din browser. Hvad det betyder for runde flader, volumener og filer, hvordan du ser, at den virker, og hvilke features der venter på en eksakt kerne.
keywords: kerne, net, manifold, eksakt, b-rep, facetteret, kurver, opencascade, occt, afrunding kræver eksakt, ikke lavet, offline, webassembly
from: 68d32d16
---

En geometrikerne er motoren, der gør din historik til et massivt legeme. Denne version af PartCraft har én: **netkernen** (manifold-3d). Den kører på din computer som et lille WebAssembly-program og er klar et øjeblik efter, at appen åbner. Intet om din del sendes nogen steder hen.

| | Netkerne |
|---|---|
| Runde former | Plane facetter. **Kurver** i delpanelet bestemmer, hvor fine |
| Volumener og arealer | Af det facetterede massive legeme, lidt lave på runde dele |
| Skitser, ekstruder, skær, drej, huller, mønstre, spejl, referenceplaner | Ja |
| Afrund og Affas | På rette kanter mellem plane flader; afrundinger, der mødes, gæres |
| Skal og Udtræksvinkel | Skal åbner plane flader (eksakt vægtykkelse); Udtræksvinkel hælder plane flader |
| Eksporter | STL, 3MF, STEP (facetteret), tegnings-PDF og DXF |
| Tegningsvisninger | Tegnet ud fra facetterne, snitvisninger inklusive |
| Flader og kanter | Navngivet og kendt efter art (plan, cylinder, kegle, kugle, torus; ret, cirkel), taget fra skitserne: arbejdsområderne Simulering, Generativ og Fremstilling, Mål, valg og hultabellen bruger dem |

Chippen nær højre ende af statuslinjen siger **Netkerne**, mens den bygger din del.

## Hvad der venter på en eksakt kerne

En eksakt (B-rep) kerne beholder sande cirkler, cylindre og kegler, og glatte afrundinger på en vilkårlig kant, sweeps, lofts, overflader, pladearbejde, ribber, flere legemer, STEP-import og eksakt STEP-eksport er bygget på en. Tidligere laboratorieversioner af PartCraft brugte OpenCascade til det. Dens licens (LGPL) passer ikke til denne udgivelse, hvor hver app er Apache-2.0 og kun bruger permissivt licenserede biblioteker, så den er ikke med. Intet her har en dato.

Indtil da siger de features **Ikke lavet endnu**, når du vælger dem: statuslinjen giver årsagen, og deres knappers værktøjstips slutter med »ikke lavet endnu (kræver en eksakt kerne)«. [Hvad der ikke er lavet endnu](topic:not-built-yet) viser hver af dem med, hvad du kan gøre i stedet.

En del lavet med dem i en tidligere version åbnes stadig. Disse features forbliver i historikken markeret som ikke lavet (hold markøren over én for årsagen), resten af delen bygges, og at gemme beholder dem uændret.

## Runde flader og Kurver

Netkernen tegner en cirkel som en polygon. **Kurver** i delpanelet bestemmer, hvor mange sider en hel cirkel får; flere sider ser glattere ud og måler tættere på den sande værdi, og tager længere tid at bygge. Volumener, arealer og afstande fra {{ui:Mål}} er af dette facetterede massive legeme: for et hul eller en bosse er de lidt mindre end den runde forms.

## Online og offline

Netkernen er en del af appens egen download. For at arbejde uden forbindelse gemmer du PartCraft til offline brug, mens du er online: vælg {{ui:Gem til offline brug}} i applinjen og vent, til den siger **Klar offline**. Detaljer: [Arbejd offline](common:offline).
