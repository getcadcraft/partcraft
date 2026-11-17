---
title: Ligninger begge veje
summary: Ændr en parameter, og delen følger med; skriv en ny størrelse i en drevet målsætning, og PartCraft regner den parameter ud, der står bag, og spørger, hvilken en, når flere kan ændres.
keywords: ligninger, løs baglæns, drevet målsætning, to-vejs, omvendt, goal seek, parametre, koblede værdier, hvilken parameter
from: 82dc0269
---

En ligning som **Extrude1 depth = thick + extra** virker i begge retninger.

## Fremad: ændr parameteren

På fanen {{ui:Parameters}} ændrer du `thick` fra 20 til 30. Extrude1's dybde bliver 30 + extra, og delen bygges igen.

## Baglæns: ændr den drevne målsætning

1. Klik på »Extrude1« i historikken. Dens boks **Dybde (mm)** viser **ƒ**: en ligning styrer den.
2. Skriv den størrelse, du ønsker, fx `40`, og tryk {{key:Enter}}.

PartCraft løser for parameteren bag ligningen, over så mange trin som nødvendigt (`depth = hub_h`, `hub_h = disc_t + 50`: at skrive en højde ændrer `disc_t`). Statuslinjen siger, hvad der ændrede sig, fx at extra gik fra 5 til 15.

Når to eller flere parametre styrer tallet, spørger en boks **Hvilken parameter skal ændres?** og lister dem. Klik på en; de andre beholder deres værdier. {{ui:Cancel}} ændrer intet.

Det samme virker i en skitse: dobbeltklik på en drevet målsætning, skriv en værdi, og tryk {{key:Enter}}. Det virker også i kolonnen **Værdi** i parametertabellen, for en parameter, der selv er et udtryk.

## Når det ikke kan

- Et tal, der skal være et helt tal (et mønstertal), eller holde sig inden for et interval (en vinkel op til 360°), afvises, før noget ændres.
- En ligning med kun faste tal (`=40`) har ingen parameter at ændre: det tal, du skriver, erstatter den.
- Hvis ingen værdi af parameteren giver den størrelse, du skrev, siger statuslinjen det, og intet ændres.
- En skitse, der ikke kan løses med den nye værdi, beholder sine tidligere værdier, og statuslinjen navngiver skitsen.

Hver ændring, i begge retninger, er ét trin for {{key:Mod+Z}} og {{key:Mod+Y}}.
