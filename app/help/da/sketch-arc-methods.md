---
title: Tegn en bue med ti metoder
summary: Vælg, hvordan en bue beskrives (tre punkter, start og slut med en radius, centrum og start med en vinkel og mere), klik eller skriv værdierne, og fortsæt fra den sidste linje eller bue.
keywords: bue, 3-punktsbue, tre-punktsbue, start centrum slut, start slut radius, tangentbue, fortsæt, korde, omspændt vinkel, skitsebue, buemetoder
from: 647f7dce
---

## Hvad du gør

Tegn en bue i en skitse med den metode, der passer til det, du kender: tre punkter på den, dens centrum, dens radius, den vinkel den spænder over eller retningen den forlader i. Værdier kan klikkes eller skrives.

## Trin

1. Åbn en skitse (se [Grundlæggende skitsering](topic:sketch-basics)).
2. Åbn i skitsens værktøjslinje listen ved siden af {{ui:Bue}}, og vælg en metode, for eksempel {{ui:Bue: start, slut, radius}}. Metoderne er 3-punkt; Start, Centrum, Slut; Start, Centrum, Vinkel; Start, Centrum, Længde; Start, Slut, Vinkel; Start, Slut, Retning; Start, Slut, Radius; Centrum, Start, Slut; Centrum, Start, Vinkel; Centrum, Start, Længde; og Fortsæt.
3. Følg statuslinjen, som nævner metoden og siger, hvad der skal gives næste: klik på startpunktet, centrumpunktet, et andet punkt på buen eller slutpunktet.
4. Hvor prompten siger "eller skriv", skriv et tal og tryk {{key:Enter}}: den omspændte vinkel i grader (negativ er med uret), korde-længden, startens tangentretning i grader eller radius (negativ er den lange vej rundt).
5. Buen tegnes. {{ui:Bue: fortsæt}} starter den næste bue fra enden af den sidste linje eller bue.

## Noter

- Buer beholder deres centrum, start og slut, så relationer og mål virker på dem som før.
- Statuslinjen afviser umulige input og siger hvorfor, for eksempel tre punkter på én linje eller en radius, der er for lille til at nå mellem de to endepunkter.
- {{ui:Bue: fortsæt}} uden noget tegnet siger: Intet at fortsætte fra: tegn en linje eller en bue først.
