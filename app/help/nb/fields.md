---
title: Felt: former som avstander
summary: Hva et felt er (en form lagret som avstanden til overflaten), hvordan man bygger ett fra primitiver, booleske operasjoner, gitter og minimalflater i et skript, hvordan det blir et legeme, og hvorfor det samme skriptet alltid gir de samme bytene.
keywords: felt, signert avstand, sdf, voksel, gyroid, tpms, gitter, boolsk, forskyvning, skall, blanding, dual contouring, deterministisk, tett, manifold, blokk
from: faab7480
---

Et **felt** beskriver en form ved avstanden fra et hvilket som helst punkt til overflaten: negativ inni, null på overflaten, positiv utenfor. En kule med radius 5 er «avstanden til sentrum minus 5». Å kombinere former er aritmetikk på avstander: unionen er den mindre av to, snittet den større, og å trekke en form fra en annen er den største av den første og minus den andre. Å vokse en form med 1 mm trekker 1 fra avstanden; en hul vegg er avstanden, brettet over.

Det er derfor felt er gode for gitter, kanaler og gradert vegger: overflaten til en gyroid er «summen av sinusene er null», og en vegg som tykner fra 1 til 3 mm over delen er et tall som endrer seg over delen.

## Fra felt til legeme

`to_body(field, h)` samplet feltet på et rutenett av punkter `h` millimeter fra hverandre, og beholder bare punktene nær overflaten (et sparsomt rutenett av 8 × 8 × 8 blokker), og bygger overflaten med **dual contouring**: ett hjørnepunkt per overflatecelle, plassert der overflateplanene møtes, slik at en skarp kant forblir skarp innen én voksel. Overflaten er lukket, og hver kant deles nøyaktig av to trekanter; rapporten sier det. Et trekk tynnere enn omtrent tre voksler kan klemme seg sammen, og da sier rapporten at legemet ikke er et lukket volumlegeme, i stedet for å skjule det.

Vokselstørrelsen er nøyaktigheten: volumet av en kule på 25 voksler over er innenfor noen hundredeler av en prosent; en vegg er bare så riktig som vokslene sine. Jo grovere rutenettet er, jo raskere går det.

## Alltid de samme bytene

Et felt har ingen klokke og ingen tilfeldige tall. Sinus og cosinus i en gyroid, og alle eksponential-, logaritme- og potensfunksjoner i biblioteket, beregnes fra ren aritmetikk, slik at Node, Chrome, Firefox og Safari gir de samme bitene. Rutenettet gjennomløpes i fast rekkefølge, så samme skript med samme inndata gir byte-identiske nett og datablad, på hvilken som helst datamaskin og over et hvilket som helst antall arbeidertråder. Dette er testet, inkludert en nettleser mot Node.

## Videre

[Skriv en generator](topic:write-a-generator) bygger en del med felt; [Ingeniørbiblioteket](topic:engineering-library) dimensjonerer den.
