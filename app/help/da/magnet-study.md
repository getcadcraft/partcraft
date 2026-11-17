---
title: Magnetundersøgelse af en skitse
summary: Omdan de lukkede profiler i dine skitser til en flad magnetisk model (jern, magneter, spoler), se feltet, og læs kraften og momentet på et legeme.
keywords: magnet, magnetisk, magnetostatisk, felt, fluxtæthed, kraft, moment, spole, åg, jern, B-H-kurve, permanentmagnet, aktuator, motor, solenoide, maxwell
from: 604efc3b
---

Brug {{ui:Mere}} i Features-værktøjslinjen › {{ui:Magnetundersøgelse af skitser…}} på en del, der har skitser. Hver lukket figur i de skitser, du markerer, er ét område i en flad model; undersøgelsen beregner det magnetiske felt B, kraften og momentet på et legeme, du vælger.

## Trin

1. Tegn legemerne som lukkede figurer i skitser: et jernåg, en magnet, en spole. Legemer, der rører hinanden, deler en kant, så læg dem i forskellige skitser; legemer, der står adskilt, eller sidder inde i hinanden (et vindue i et åg), kan deles om én skitse. Hold skitserne på samme plan.
2. Åbn undersøgelsen, og markér de skitser, der skal bruges. Hver lukket profil får en nummereret række. Angiv, hvad den er: {{ui:Luft}}, {{ui:Jern}} (en permeabilitet, eller en B–H-kurve skrevet som par af B i tesla og H i A/m), en {{ui:Permanentmagnet}} (Br i tesla, dens retning som en vinkel fra skitsens x-akse, og dens rekylpermeabilitet) eller en {{ui:Spole}} (den samlede strøm gennem dens profil, vindinger gange ampere; fortegnet angiver, hvilken vej den løber).
3. Markér {{ui:Kraft og moment på dette legeme}} for de legemer, du vil have dem på. Angiv delens dybde ud af skitsen.
4. Vælg nettet og luften omkring modellen, og tryk derefter på {{ui:Kør}}.

## Hvad du bør se

- Fluxtætheden |B| over modellen, mørkeblå lav til rød høj, med profilerne nummereret.
- Det stærkeste felt og hvor det er, antallet af trekanter, og for hvert legeme du markerede kraften langs x og y samt momentet om dets midte, for den dybde du angav.
- {{ui:Gem resultater (CSV)}} skriver tallene.

## Godt at vide

- Det er en flad, stationær model: alt er pr. meter dybde, uden hvirvelstrømme og uden hysterese, og en magnet er en ret rekylinje (den kan ikke afmagnetiseres).
- Modellen sidder i en boks af luft, hvis kant er en væg. Sammenlign to størrelser af luftboksen og netene Normal og Fin: en kraft, der tages fra feltet omkring et legeme, er kun så god som nettet dér.
- Jern med kun en permeabilitet mætter aldrig. Når feltet passerer 2 T, rejser undersøgelsen et ⚠ i listen over problemer: giv jernet en B–H-kurve. Tallene i en ny række er eksempler (jern μr 2000, en magnet på 1.2 T), ikke et materiales datablad.
- Et legeme har brug for plads omkring sig for at tage kraften: hvis et andet legeme står for tæt på, siger undersøgelsen det.
- Et tegnehjælpemiddel, ikke en teknisk godkendelse.

## Næste

- [Magnetiske felter i 2D (vejledning)](topic:magnetic-fields-2d)
