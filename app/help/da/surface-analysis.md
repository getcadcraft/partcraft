---
title: Zebrastriber og krumning
summary: Kontrollér, hvor glat overgangen er mellem en dels flader, med zebrastriber, der følger visningen, eller et farvekort over middelkrumning, fra menuen Visninger.
keywords: zebra, zebrastriber, refleksionslinjer, krumning, krumningskort, middelkrumning, fladekvalitet, kontinuitet, tangent, g1, g2, glat, knæk, fremhævningslinjer
from: 78fed4c3
---

To hurtige kig på, hvor glatte en dels flader er, på alle dele i Design-arbejdsområdet (Form-arbejdsområdet har sit eget til den form, du redigerer: se [Frie former med Form](topic:form-surfaces)).

## Zebrastriber

Åbn {{ui:Visninger}} og vælg {{ui:Zebrastriber}}. Delen viser refleksionen af et stribet lys, sådan som en poleret flade ville:

- Hvor to flader støder sammen **tangentielt** (en afrunding på en plan flade, en glat Gordon-flade), fortsætter stribene hen over samlingen med et knæk.
- Hvor de mødes i et **knæk**, brydes stribene og springer.
- Hvor krumningen også stemmer overens (G2), løber stribene videre uden selv et knæk.

Drej visningen (træk, eller en side på view-kuben): stribene tegnes igen ud fra den nye retning. **Striber** angiver, hvor mange der er.

## Krumning

Vælg {{ui:Krumning}} i samme menu. Delen farves efter sin **middelkrumning**: blå hvor den er hul (konkav), bleg hvor den er plan, rød hvor den buler ud (konveks). Kortet angiver ved hvilken krumning farverne når fuld styrke, i 1/mm og som en radius. Skarpe kanter regnes som meget krumme, så de vises kraftigt; se på fladerne mellem dem.

## Kortet

Begge åbner analysekortet nederst til venstre i visningen, som også rummer [udtræksvinkelanalysen](topic:draft-analysis). Skift mellem dem med **Vis**. Vælger du den åbne igen i {{ui:Visninger}}, {{ui:Luk}} eller {{key:Esc}}, slås den fra. Farverne følger delen, når du ændrer den; intet gemmes i delen.
