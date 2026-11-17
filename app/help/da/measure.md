---
title: Mål afstande, vinkler og masse
summary: Klik på to ting i visningen for den mindste afstand, vinkel og ΔX ΔY ΔZ; læs en kants længde, et huls diameter, en flades areal eller et punkts koordinater; få volumen, masse, massemidtpunkt og inerti for en del eller en samling.
keywords: mål, afstand, mindste afstand, vinkel, længde, radius, diameter, areal, koordinater, delta, inspicér, masseegenskaber, masse, vægt, massemidtpunkt, tyngdepunkt, inerti, inertimoment, massefylde, materiale
from: 20bda0b7
---

**Mål** virker på modellen i alle arbejdsområder (Design, Form, Simulation, Generative, Manufacture) og i en samling. Det findes i menuen {{ui:Visninger}} i gruppen **Visning**, eller du trykker på {{key:M}}. Et kort åbner øverst til venstre i visningen.

## Mål ét ting

Klik på et hjørnepunkt, en kant eller en flade. Kortet viser:

- **Et punkt** (et hjørnepunkt, en kants midtpunkt eller en cirkels centrum): dets X, Y, Z.
- **En kant**: ret, cirkel eller kurve, og dens længde; for en cirkel også radius, diameter og centrum.
- **En flade**: plan, cylinder, kegle og så videre, og dens areal; en plan flades normal; en cylinders radius og diameter (et huls størrelse). Arealerne er af de facetter, net-kernen bygger.
- **Hele legemet**: hold {{key:Shift}} nede, og klik på delen. Du får dets volumen, areal, masse og inerti (se nedenfor).

Markøren fanger hjørnepunkter, kantmidtpunkter og cirkelcentre inden for 10 pixels; en lille blå prik viser fangsten, før du klikker. For at vælge et huls centrum peger du på midten af hullet; for at vælge dets kant (cirklen) peger du på kanten.

## Mål mellem to ting

Klik på et andet element. Kortet tilføjer:

- **Mindste afstand** og de to nærmeste punkter, tegnet i visningen med en linje imellem dem.
- **ΔX, ΔY, ΔZ** fra det første nærmeste punkt til det andet.
- **Vinkel** mellem to plane flader (mellem deres normaler, 0–180°), mellem to rette kanter eller akser (0–90°), eller mellem en kant og en flade.
- **Afstand mellem planene** for to parallelle plane flader, **Centrum til centrum** for to cirkler eller huller, **Akse til akse** for to parallelle huller eller cylindre.

Et tredje klik starter et nyt par. {{key:Esc}} rydder valgene; {{key:Esc}} igen (eller {{ui:Luk}}) lukker Mål. {{ui:Kopiér}} lægger resultaterne på udklipsholderen som tabulatorsepareret tekst, klar til at blive sat ind i et regneark.

### Hvor nøjagtig den er

PartCraft bygger delen med net-kernen, så afstande beregnes på facetterne i nettet, og kortet siger **tilnærmet: ud fra facetterne**: korrekt for plane flader og mellem hjørnepunkter, en smule forkert for buede. En finere indstilling af **Kurver** bringer dem tættere på. Præcis måling på de rigtige overflader kræver en eksakt kerne: ikke lavet endnu i denne version.

## Masseegenskaber

Vælg {{ui:Masseegenskaber}} i kortet eller i menuen {{ui:Visninger}}. På en del vælger du et **Materiale** i kortet (stål, aluminium, plasttyper og andre med deres sædvanlige massefylder). I en samling bruger hver del det materiale, der er sat i dens egenskaber (vælg delen, og derefter **Materiale**), og resultatet gælder for alle delene samlet.

Kortet viser masse, volumen, areal, massemidtpunkt, inertitensoren (Ixx, Iyy, Izz og produkterne Ixy, Iyz, Ixz, i kg·mm², om massemidtpunktet langs verdens akser) og hovedmomenterne. Uden materiale viser det det samme pr. enhed massefylde (mm⁵) og ingen masse.

Tallene er eksakte for det opdelte legeme, som net-kernen bygger (buede flader som facetter), så en rund del kommer ud en smule lavt, og kortet siger det. Materialernes massefylder er typiske værdier fra håndbøger; en rigtig legering eller kvalitet kan afvige med få procent.

## Begrænsninger

- Fangst kan finde et punkt, der er skjult bag anden geometri; kontrollér at kortet viser det, du mente.
- Mål lukkes, når du åbner en skitse eller tegningsarket, eller skifter arbejdsområde.
