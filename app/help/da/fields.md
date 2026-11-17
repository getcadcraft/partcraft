---
title: Felter: former som afstande
summary: Hvad et felt er (en form gemt som afstanden til dens overflade), hvordan man bygger et af primitiver, booleske operationer, gitre og minimale flader i et script, hvordan det bliver til et legeme, og hvorfor det samme script altid giver de samme bytes.
keywords: felt, fortegnet afstand, sdf, voxel, gyroid, tpms, gitter, boolesk, forskydning, skal, blanding, dual contouring, deterministisk, vandtæt, manifold, klods
from: faab7480
---

Et **felt** beskriver en form ved afstanden fra et hvilket som helst punkt til dens overflade: negativ inde, nul på overfladen, positiv udenfor. En kugle med radius 5 er »afstanden til centrum minus 5«. At kombinere former er regning med afstande: foreningen er den mindste af to, fællesmængden den største, og at trække den ene form fra den anden er den største af den første og minus den anden. At gøre en form 1 mm større trækker 1 fra afstanden; en hul væg er afstanden, foldet over.

Det er derfor, felter er gode til gitre, kanaler og graderede vægge: overfladen af en gyroid er »sinussummen er nul«, og en væg, der tykner fra 1 til 3 mm hen over delen, er et tal, der ændrer sig hen over delen.

## Fra felt til legeme

`to_body(field, h)` samplerer feltet på et gitter af punkter `h` millimeter fra hinanden og beholder kun punkterne nær overfladen (et sparsomt gitter af 8 × 8 × 8 klodser), og bygger overfladen med **dual contouring**: ét hjørnepunkt pr. overfladecelle, placeret hvor overfladeplanerne mødes, så en skarp kant forbliver skarp inden for en voxel. Overfladen er lukket, og hver kant deles af præcis to trekanter; rapporten siger det. En detalje tyndere end cirka tre voxels kan klemme sig, og så siger rapporten, at legemet ikke er et lukket massivt legeme, i stedet for at skjule det.

Voxel-størrelsen er nøjagtigheden: rumfanget af en kugle 25 voxels på tværs er inden for få hundredele procent, og en væg er kun så sand som dens voxels. Jo grovere gitter, jo hurtigere går det.

## Altid de samme bytes

Et felt har ingen ur og intet tilfældigt tal. Sinus og cosinus i en gyroid og alle eksponential-, logaritme- og potensfunktioner i biblioteket beregnes ud fra almindelig aritmetik, så Node, Chrome, Firefox og Safari giver de samme bits. Gitteret gennemløbes i fast rækkefølge, så det samme script med de samme input giver byte-identiske meshes og datablade, på enhver computer og over et hvilket som helst antal arbejdstråde. Det er testet, også en browser mod Node.

## Hvor du går hen næste

[Skriv en generator](topic:write-a-generator) bygger en del med felter; [Ingeniørbiblioteket](topic:engineering-library) dimensionerer den.
