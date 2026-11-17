---
title: Mål avstander, vinkler og masse
summary: Klikk på to ting i visningen for minste avstand, vinkel og ΔX ΔY ΔZ. Les lengden på en kant, diameteren på et hull, arealet på en flate eller koordinatene til et punkt. Få volum, masse, massesenter og treghet for en del eller en sammenstilling.
keywords: mål, avstand, minste avstand, vinkel, lengde, radius, diameter, areal, koordinater, delta, inspiser, massegenskaper, masse, vekt, massesenter, treghet, treghetsmoment, tetthet, materiale
from: 20bda0b7
---

**Mål** virker på modellen i alle arbeidsområder (Design, Form, Simulering, Generativ, Produksjon) og i en sammenstilling. Det finnes i gruppen {{ui:Visning}} under menyen {{ui:Visninger}}, eller du trykker {{key:M}}. Et kort åpnes over øvre venstre hjørne av visningen.

## Mål én ting

Klikk på et hjørnepunkt, en kant eller en flate. Kortet viser:

- **Et punkt** (et hjørnepunkt, et midtpunkt på en kant eller et sirkelsenter): dets X, Y, Z.
- **En kant**: rett, sirkel eller kurve, og dens lengde. For en sirkel også radius, diameter og senter.
- **En flate**: flat, sylinder, kjegle og så videre, og dens areal. En flat flates normal. En sylinders radius og diameter (et hulls størrelse). Arealer gjelder fasettene nettkjernen lager.
- **Hele legemet**: hold {{key:Shift}} og klikk på delen. Du får volum, areal, masse og treghet (se under).

Pekeren fester seg til hjørnepunkter, midtpunkter på kanter og sirkelsentre innen 10 piksler. En liten blå prikk viser festet før du klikker. For å velge et hulls senter, pek på midten av hullet. For å velge kanten (sirkelen), pek på kanten.

## Mål mellom to ting

Klikk på et andre element. Kortet legger til:

- **Minste avstand** og de to nærmeste punktene, tegnet i visningen med en linje mellom dem.
- **ΔX, ΔY, ΔZ** fra det første nærmeste punktet til det andre.
- **Vinkel** mellom to flate flater (mellom normalene, 0–180°), mellom to rette kanter eller akser (0–90°), eller mellom en kant og en flate.
- **Avstand mellom planene** for to parallelle flate flater, **Senter til senter** for to sirkler eller hull, og **Akse til akse** for to parallelle hull eller sylindre.

Et tredje klikk starter et nytt par. {{key:Esc}} fjerner valgene, og {{key:Esc}} igjen (eller {{ui:Lukk}}) lukker Mål. {{ui:Kopier}} legger resultatene på utklippstavlen som tabulatorseparert tekst, klar til å limes inn i et regneark.

### Hvor nøyaktig det er

PartCraft bygger delen med nettkjernen, så avstander regnes ut på fasettene i nettet. Kortet sier **tilnærmet: av fasettene**. Det er riktig for flate flater og mellom hjørnepunkter, og litt unøyaktig for buede. En finere innstilling for **Kurver** bringer dem nærmere. Eksakt måling på de ekte flatene krever en eksakt kjerne, som ikke er bygget ennå i denne versjonen.

## Massegenskaper

Velg {{ui:Massegenskaper}} i kortet eller i menyen {{ui:Visninger}}. På en del velger du et **Materiale** i kortet (stål, aluminium, plast og andre, med deres vanlige tettheter). I en sammenstilling bruker hver del materialet som er satt i egenskapene (velg delen, deretter **Materiale**), og resultatet gjelder alle delene samlet.

Kortet viser masse, volum, areal, massesenter, treghetstensoren (Ixx, Iyy, Izz og produktene Ixy, Iyz, Ixz, i kg·mm², om massesenteret langs verdensaksene) og hovedtreghetsmomentene. Uten materiale vises det samme per enhetstetthet (mm⁵), og ingen masse.

Tallene er eksakte for det trekantnettede legemet som nettkjernen bygger (buede flater som fasetter). Derfor kommer en rund del litt lavt ut, og kortet sier det. Materialtetthetene er typiske håndbokverdier. En ekte legering eller kvalitet kan avvike med noen få prosent.

## Begrensninger

- Snap kan finne et punkt skjult bak annen geometri. Sjekk at kortet viser det du mente.
- Mål lukkes når du åpner en skisse eller tegningsarket, eller bytter arbeidsområde.
