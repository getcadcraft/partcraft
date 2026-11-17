---
title: Mät avstånd, vinklar och massa
summary: Klicka på två saker i vyn för minsta avstånd, vinkel och ΔX ΔY ΔZ; läs en kants längd, ett håls diameter, en ytas area eller en punkts koordinater; få volym, massa, tyngdpunkt och tröghetsmoment för en del eller en sammanställning.
keywords: mät, avstånd, minsta avstånd, vinkel, längd, radie, diameter, area, koordinater, delta, inspektera, massegenskaper, massa, vikt, tyngdpunkt, tröghetsmoment, densitet, material
from: 20bda0b7
---

**Mät** fungerar på modellen i alla arbetsytor (Design, Form, Simulering, Generativ, Tillverkning) och i en sammanställning. Den finns i gruppen {{ui:Visa}} under {{ui:Vyer}}, eller så trycker du på {{key:M}}. Ett kort öppnas över vyns övre vänstra hörn.

## Mät en sak

Klicka på en hörnpunkt, en kant eller en yta. Kortet visar:

- **En punkt** (en hörnpunkt, en kantmitt eller en cirkelmittpunkt): dess X, Y, Z.
- **En kant**: rak, cirkel eller kurva, och dess längd; för en cirkel även radien, diametern och mittpunkten.
- **En yta**: plan, cylinder, kon och så vidare, och dess area; för en plan yta dess normal; för en cylinder dess radie och diameter (ett håls storlek). Areorna gäller de facetter som nätkärnan bygger.
- **Hela kroppen**: håll {{key:Shift}} och klicka på delen. Du får dess volym, area, massa och tröghet (se nedan).

Pekaren fångar hörnpunkter, kantmitter och cirkelmittpunkter inom 10 pixlar; en liten blå prick visar fångsten innan du klickar. För att välja ett håls mittpunkt, peka på mitten av hålet; för att välja dess kant (cirkeln), peka på kanten.

## Mät mellan två saker

Klicka på ett andra objekt. Kortet lägger till:

- **Minsta avstånd** och de två närmaste punkterna, ritade i vyn med en linje mellan dem.
- **ΔX, ΔY, ΔZ** från den första närmaste punkten till den andra.
- **Vinkel** mellan två plana ytor (mellan deras normaler, 0–180°), mellan två raka kanter eller axlar (0–90°), eller mellan en kant och en yta.
- **Avstånd mellan planen** för två parallella plana ytor, **Centrum till centrum** för två cirklar eller hål, **Axel till axel** för två parallella hål eller cylindrar.

Ett tredje klick startar ett nytt par. {{key:Esc}} rensar valen; {{key:Esc}} igen (eller {{ui:Stäng}}) stänger Mät. {{ui:Kopiera}} lägger resultaten på urklippet som tabbseparerad text, redo att klistras in i ett kalkylblad.

### Hur exakt det är

PartCraft bygger delen med nätkärnan, så avstånd räknas på nätets facetter, och kortet säger **ungefärligt: av facetterna**: rätt för plana ytor och mellan hörnpunkter, något fel för krökta. En finare inställning **Kurvor** för dem närmare. Exakt mätning på de verkliga ytorna kräver en exakt kärna: ännu inte byggd i den här versionen.

## Massegenskaper

Välj {{ui:Massegenskaper}} i kortet eller i menyn {{ui:Vyer}}. På en del väljer du ett **Material** i kortet (stål, aluminium, plaster och andra med deras vanliga densiteter). I en sammanställning använder varje del det material som är inställt i dess egenskaper (välj delen, och sedan **Material**), och resultatet gäller alla delarna tillsammans.

Kortet visar massa, volym, area, tyngdpunkt, tröghetstensorn (Ixx, Iyy, Izz och produkterna Ixy, Iyz, Ixz, i kg·mm², kring tyngdpunkten längs världens axlar) och huvudmomenten. Utan material visar det samma per enhetsdensitet (mm⁵) och ingen massa.

Siffrorna är exakta för den trianglade solid som nätkärnan bygger (krökta ytor som facetter), så en rund del blir något låg, och kortet säger det. Materialdensiteter är typiska handboksvärden; en verklig legering eller kvalitet kan skilja sig några procent.

## Begränsningar

- Fångster kan hitta en punkt som döljs bakom annan geometri; kontrollera att kortet visar det du menade.
- Mät stängs när du öppnar en skiss eller ritningsbladet, eller byter arbetsyta.
