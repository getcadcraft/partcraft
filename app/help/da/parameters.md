---
title: Styr en del med parametre
summary: Navngiv de størrelser, der betyder noget (bredde, tykkelse, boltstørrelse), knyt ethvert feature-tal eller skitsemål til dem med =, og ændr hele delen fra én tabel.
keywords: parametre, hvor brugt, brugt af, globale variable, variable, ligninger, konstruktionsintention, styrende mål, link, udtryk, formel, navngiv et mål, koblede værdier
from: 58c646ea
---

En parameter er et navngivet tal, såsom `width = 120` eller `margin = bolt * 1.5`. Knyt en dybde, en huldiameter, et mønsters antal eller et skitsemål til den, og når du ændrer parameteren, ændres alle i ét trin. Sådan holder du konstruktionsintentionen i delen i stedet for i hovedet.

## Tilføj parametre

1. I det højre panel klikkes fanen {{ui:Parametre}}.
2. Under **Variabler** skrives et navn i feltet "name", for eksempel `width`.
3. Skriv dens værdi i det næste felt, for eksempel `120`, og tryk {{key:Enter}} (eller klik {{ui:Tilføj}}).

En værdi kan være et tal eller et udtryk med andre parametre: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Kolonnen **Værdi** viser, hvad den regner sig frem til. Et navn starter med et bogstav eller `_` og har kun bogstaver, cifre og `_`; navne på funktioner og enheder (`sin`, `mm`, `pi`) afvises, og det samme gælder en løkke som `a = b` med `b = a`.

## Knyt et tal til en parameter

1. Klik på et feature i historikken, for eksempel "Extrude1". Dets indstillinger vises på fanen {{ui:Egenskaber}}.
2. I et talfelt, såsom **Dybde (mm)**, skriv `=` og et udtryk: `=thick` eller `=width / 4`.
3. Tryk {{key:Enter}}.

Feltet viser nu resultatet, og en **ƒ**-knap vises ved siden af dets etiket. Peg på den for at se ligningen. Skitsemål virker på samme måde, både i listen **Skitsemål** på et feature og i målfeltet i en åben skitse (dobbeltklik på et mål, skriv `=width`, tryk {{key:Enter}}).

Tal du kan knytte: ekstruderingsdybde, drejevinkel, huldiameter, dybde og størrelser på forsænkninger, mønstrets antal, afstand og vinkel, afrundingsradius, affasningsafstand, skaltykkelse, hvert skitsemål og størrelserne på de nyere features (anden dybde, skråning, forsænkning af boring, afstand til referenceplan, udtræksvinkel og andre).

## Ændr en parameter

På fanen {{ui:Parametre}} skriv en ny værdi eller et nyt udtryk i kolonnen **Udtryk** og tryk {{key:Enter}}. Alt, der er knyttet til den, ændres, og delen genopbygges som ét trin: {{key:Mod+Z}} fortryder det.

For at ændre et tal fra den anden ende, se [Ligninger begge veje](topic:equations-two-way).

## Se, hvor en parameter bruges

Under hver parameter på fanen {{ui:Parametre}} står en linje, der siger, hvad der bruger den:

- de tal, den styrer, såsom **Extrude1 dybde** eller **Sketch1 D2 (afstand)**. Klik på en for at vælge dens feature og vise dens egenskaber;
- de tal, den styrer **gennem** andre parametre, såsom **Hole1 diameter (gennem h, d)**, når `d = h + 2` og `h = w / 2`;
- de **parametre**, hvis udtryk bruger den, de **konfigurationer**, der sætter den, og de **scripts**, der læser den (se [Skriv og kør scripts](topic:craftscript)).

»Ikke brugt endnu.« betyder, at intet bruger den: du kan slette den uden at spørge.

## Afkobl, omdøb, slet

- **Afkobl et tal:** klik på dets **ƒ**-knap, eller {{ui:Afkobl}} i listen **Ligninger**. Det beholder sin nuværende værdi, og ingen parameter ændrer det mere.
- **Omdøb en parameter:** skriv et nyt navn i dens felt **Navn**. Hvert udtryk, der bruger den, omskrives.
- **Slet en parameter:** klik på × i dens række. Hvis noget bruger den, spørger PartCraft, om den skal skrive dens nuværende værdi ind i de udtryk først.
- **Sletning af et feature** fjerner ligningerne for dets tal; statuslinjen siger, hvilke.

:::note
Parametre gemmes i `.partcraft.json`-filen (som filversion 3). En del uden parametre gemmes præcis som før.
:::

## Udtryk

| Skriv | Betyder |
|---|---|
| `120`, `12.5`, `1e3` | et tal (millimeter, eller grader for en vinkel) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | en længde i andre enheder, omregnet til millimeter |
| `30deg`, `0.5rad` | en vinkel, omregnet til grader |
| `+ - * / %` og `^` | regning; `^` er en potens, `-2^2` er −4 |
| `sin cos tan asin acos atan atan2` | trigonometri i grader |
| `sqrt pow exp ln log abs sign` | andre funktioner |
| `ceil floor int round(x, digits) min max` | afrunding og grænser |
| `if(test, a, b)` med `< <= > >= == !=` | et valg: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Navne skelner mellem store og små bogstaver: `Width` og `width` er to parametre.

Se også [Konfigurationer og designtabeller](topic:design-tables) og [Scripts og kommandolinjen](topic:scripts-and-cli).
