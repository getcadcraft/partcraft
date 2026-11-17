---
title: Mesh-kernen
summary: Denne version af PartCraft bygger hver del med en mesh-kerne, der kører i din browser. Hvad det betyder for runde flader, rumfang og filer, hvordan du ser, at den virker, og hvilke funktioner der venter på en eksakt kerne.
keywords: kerne, mesh, manifold, eksakt, b-rep, facetteret, kurver, opencascade, occt, afrundning kræver eksakt, ikke lavet endnu, offline, webassembly
from: f931645c
---

En geometrikerne er motoren, der omdanner din historik til et legeme. Denne version af PartCraft har én: **mesh-kernen** (manifold-3d). Den kører på din computer som et lille WebAssembly-program og er klar et øjeblik efter, at appen åbner. Intet om din del sendes nogen steder hen.

| | Mesh-kerne |
|---|---|
| Runde former | Flade facetter. **Kurver** i delpanelet styrer, hvor fine de er |
| Rumfang og arealer | Af det facetterede legeme, lidt lavt på runde dele |
| Skitser, ekstrudering, udskæring, drejning, huller, mønstre, spejling, referenceplaner | Ja |
| Afrunding og affasning | På rette kanter mellem plane flader; afrundinger, der mødes, skæres i geringer |
| Skal og udtræksvinkel | Skal åbner plane flader (præcis vægtykkelse); udtræksvinkel vipper plane flader |
| Eksporter | STL, 3MF, STEP (eksakt: runde flader skrives på deres sande overflader; eller facetteret), tegnings-PDF og DXF |
| Tegningsvisninger | Tegnet ud fra facetterne, også snitvisninger |
| Flader og kanter | Navngivet og kendt efter type (plan, cylinder, kegle, kugle, torus; ret, cirkel), hentet fra skitserne: arbejdsområderne Simulering, Generativ og Fremstilling, Mål, valg og hultabellen bruger dem |

Chippen længst til højre i statuslinjen siger **Mesh-kerne**, mens den bygger din del.

## Hvad der venter på en eksakt kerne

En eksakt (B-rep) kerne bevarer sande cirkler, cylindre og kegler samt glatte afrundinger på enhver kant. Sweeps, lofts, flader, pladeemner, ribber, flere legemer og STEP-import med buede flader, der bevares eksakte, er bygget på en sådan. (Eksakt STEP-eksport venter ikke på den: mesh-kernen kender hver flades sande overflade fra skitsen, og eksporten skriver dem.) Tidligere labbygninger af PartCraft brugte OpenCascade til det. Dens licens (LGPL) passer ikke til denne udgivelse, hvor hver app er Apache-2.0 og kun bruger biblioteker med tilladende licenser, så den er ikke med. Der er ingen dato for noget her.

Indtil da siger disse funktioner **Ikke lavet endnu**, når du vælger dem: statuslinjen giver årsagen, og knappernes værktøjstips slutter med »ikke lavet endnu (kræver en eksakt kerne)«. [Hvad der ikke er lavet endnu](topic:not-built-yet) lister hver enkelt med, hvad du skal gøre i stedet.

En del lavet med dem i en tidligere version åbner stadig. Disse funktioner bliver i historikken markeret som ikke lavet (hold musen over en for årsagen), resten af delen bygges, og gemning bevarer dem uændret.

## Runde flader og Kurver

Mesh-kernen tegner en cirkel som et polygon. **Kurver** i delpanelet bestemmer, hvor mange sider en hel cirkel får; flere sider ser glattere ud og måler tættere på den sande værdi, men tager længere tid at bygge. Rumfang, arealer og afstande fra {{ui:Mål}} er af det facetterede legeme: for et hul eller en udhævning er de en smule mindre end for den runde form.

## Online og offline

Mesh-kernen er en del af appens egen download. For at arbejde uden forbindelse gemmer du PartCraft til offline brug, mens du er online: vælg {{ui:Gem til offline brug}} i appbaren, og vent, til den siger **Klar til offline brug**. Detaljer: [Arbejde offline](common:offline).
