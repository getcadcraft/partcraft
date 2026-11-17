---
title: Zebrarandning och krökning
summary: Kontrollera hur jämnt ytorna på valfri del övergår i varandra, med zebrarandning som följer vyn eller en färgkarta över medelkrökning, från menyn {{ui:Vyer}}.
keywords: zebra, zebrarandning, reflektionslinjer, krökning, krökningskarta, medelkrökning, ytkvalitet, kontinuitet, tangent, g1, g2, jämn, veck, markeringslinjer
from: 78fed4c3
---

Två snabba sätt att se hur jämna en delś ytor är, på valfri del i designarbetsytan (formarbetsytan har en egen, för formen du redigerar: se [Friformade former med Form](topic:form-surfaces)).

## Zebrarandning

Öppna {{ui:Vyer}} och välj {{ui:Zebrarandning}}. Delen visar reflektionen av ett randigt ljus, så som en polerad yta gör:

- Där två ytor möts **tangentiellt** (en rundning på en plan yta, en jämn Gordon-yta) fortsätter randerna över skarven, med en böj.
- Där de möts i ett **veck** bryts randerna och hoppar.
- Där krökningen också stämmer (G2) flyter randerna vidare utan ens en knyck.

Vrid vyn (dra, eller en ViewCube-yta): randerna ritas om från den nya riktningen. **Ränder** anger hur många det är.

## Krökning

Välj {{ui:Krökning}} i samma meny. Delen färgas efter sin **medelkrökning**: blå där den är ihålig (konkav), ljus där den är plan, röd där den bucklar ut (konvex). Kortet anger vid vilken krökning färgerna når full styrka, i 1/mm och som radie. Skarpa kanter räknas som mycket krökta och syns därför starkt; titta på ytorna mellan dem.

## Kortet

Båda öppnar analyskortet nere till vänster i vyn, som också innehåller [släppanalysen](topic:draft-analysis). Byt mellan dem med **Visa**. Att välja den öppna igen i {{ui:Vyer}}, {{ui:Stäng}} eller {{key:Esc}} stänger av den. Färgerna följer delen när du ändrar den; ingenting sparas i delen.
