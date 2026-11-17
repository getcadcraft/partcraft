---
title: Modellera en del tillsammans med Live TeamWork
summary: Vad som ändras i PartCraft när du är i en Live TeamWork-session från CadCraft Studio: allas funktioner i ett träd, varje fönster bygger samma solid, din egen ångra och att ansluta från en webbläsare på samma nätverk.
keywords: live, live teamwork, studio live, tillsammans, samarbeta, session, dela live, gå med, funktionsträd, historik, bygga om, markör, pekare, se varandra, namn, färg, markering, ångra, värd
from: 1809b96c
---

## Vad du lär dig

Vad som händer med en del när flera personer modellerar den samtidigt. CadCraft Studio startar och ansluter till Live TeamWork-sessionen (Dela, Gå med); den här sidan handlar om delen själv.

## Alla modellerar samtidigt

Alla arbetar i samma funktionsträd: skisser, extruderingar, hål, mönster, rundningar, parametrar. Dina egna ändringar visas direkt; andras visas strax efter att de gjort dem. Bara trädet färdas: varje fönster bygger solidet själv, och PartCraft:s kärna bygger samma solid från samma träd i varje fönster.

- **Två personer ändrar en funktion:** olika inställningar (den ena djupet, den andra slutvillkoret) behålls båda; samma inställning går till den senare ändringen.
- **En skiss** färdas som en helhet: när två personer redigerar samma skiss samtidigt vinner den senare redigeringen. Kom överens om vem som ritar vilken skiss.
- **En funktion byggd på en som någon just tagit bort** (en extrudering av en borttagen skiss, ett hål på en borttagen yta) tas tillbaka, och statusraden säger varför.
- **Att ordna om trädet** kontrolleras: om två personer drar funktioner samtidigt tas den andra flytten tillbaka.

## Se varandra

Alla i sessionen har en egen färg. Du ser varje persons pekare som en pil i deras färg, med deras namn bredvid, på den yta de pekar på. När de har en funktion markerad i trädet visas dess namn efter deras.

Pekare, namn och markeringar gäller bara sessionen: de sparas aldrig i filen och hamnar aldrig i någons ångra. De glider till varje persons plats, så de hålls jämna även på en långsam anslutning.

## Ångra ångrar ditt eget arbete

{{key:Mod+Z}} ångrar din egen senaste redigering och lämnar allas andra ifred. Om någon har ändrat samma sak sedan dess ångras ingenting, och statusraden säger vem.

## Gå med från en webbläsare

En medarbetare utan Studio kan skanna bilden under värdens kod med en telefon, surfplatta eller dator på samma nätverk. PartCraft öppnas i webbläsaren, fylls med värdens del när värden släpper in dig, och bygger den. En inbjudningslänk gör att någon kan gå med från ett annat nätverk: värden behöver en Team Cloud Plan-plats för appen, alla andra går med gratis, och länken fungerar bara medan värdens session är öppen.

## När sessionen slutar

Bara värden sparar delen. Alla andra behåller en osparad kopia: spara den om du vill behålla den.

:::note
Sammanställningar delas inte i en session än: öppna delen själv för att arbeta med den tillsammans.
:::
