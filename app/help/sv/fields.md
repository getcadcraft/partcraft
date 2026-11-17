---
title: Fält: former som avstånd
summary: Vad ett fält är (en form lagrad som avståndet till dess yta), hur du bygger ett av primitiver, booleska operationer, gitter och minimalytor i ett skript, hur det blir en kropp, och varför samma skript alltid ger samma bytes.
keywords: fält, signerat avstånd, sdf, voxel, gyroid, tpms, gitter, boolesk, förskjutning, skal, blandning, dual contouring, deterministisk, vattentät, manifold, tegel
from: faab7480
---

Ett **fält** beskriver en form med avståndet från valfri punkt till dess yta: negativt inuti, noll på ytan, positivt utanför. En sfär med radien 5 är "avståndet till mittpunkten minus 5". Att kombinera former är aritmetik på avstånd: unionen är det mindre av två, snittet det större, och att subtrahera en form från en annan är det större av den första och minus den andra. Att växa en form med 1 mm subtraherar 1 från avståndet; en ihålig vägg är avståndet, vikt över sig själv.

Det är därför fält passar bra för gitter, kanaler och väggar vars tjocklek varierar: ytan på en gyroid är "summan av sinus är noll", och en vägg som tjocknar från 1 till 3 mm över delen är ett tal som ändras över delen.

## Från fält till kropp

`to_body(field, h)` samplar fältet på ett rutnät av punkter `h` millimeter från varandra, och behåller endast punkterna nära ytan (ett glest rutnät av 8 × 8 × 8 brickor). Sedan bygger den ytan med **dual contouring**: en vertex per ytcell, placerad där ytplanen möts, så att en vass kant förblir vass inom en voxel. Ytan är sluten och varje kant delas av exakt två trianglar; rapporten säger det. Ett fält tunnare än ungefär tre voxlar kan klämmas ihop, och då säger rapporten att kroppen inte är en sluten solid i stället för att dölja det.

Voxelstorleken är noggrannheten: volymen av en sfär som är 25 voxlar över ligger inom några hundradelar av en procent, och en vägg är lika sann som sina voxlar. Ju grövre rutnät, desto snabbare går det.

## Alltid samma bytes

Ett fält har ingen klocka och inget slumptal. Sinus och cosinus i en gyroid, och varje exponential, logaritm och potens i biblioteket, beräknas med vanlig aritmetik så att Node, Chrome, Firefox och Safari ger samma bitar. Rutnätet genomlöps i en fast ordning, så samma skript med samma indata ger byte för byte identiska nät och datablad, på vilken dator som helst och över valfritt antal arbetstrådar. Detta är testat, även en webbläsare mot Node.

## Vart du går härnäst

[Skriv en generator](topic:write-a-generator) bygger en del med fält; [Ingenjörsbiblioteket](topic:engineering-library) dimensionerar den.
