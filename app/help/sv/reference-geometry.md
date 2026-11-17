---
title: Referensplan, axlar och punkter
summary: Skapa plan som är förskjutna från en yta, i en vinkel, genom tre punkter, mitt emellan, tangerande mot en cylinder, vinkelräta mot en kant eller genom en kant och en punkt; axlar; punkter vid kantmitter, korsningar och planhörn; skissa på dem och använd dem som axlar för revolvering, riktningar för mönster och spegelplan.
keywords: datum, mellan objekt, mittpunkt, skärningspunkt, plan genom kant och punkt, referensplan, arbetsplan, konstruktionsplan, datumplan, förskjutet plan, plan i vinkel, mittplan, tangentplan, referensaxel, konstruktionsaxel, datumaxel, referenspunkt, arbetspunkt, skissa på plan
from: e7eb6fc1
---

Referensgeometri är stödstrukturen du bygger funktioner på: ett **plan** att skissa på där ingen yta finns, en **axel** att revolvera eller mönstra kring, en **punkt** att stoppa en extrudering vid. Den har inget material eget. Plan visas i vyn som ljusa kvadrater, axlar som streckade linjer och punkter som små kors; alla tre går in i historiken och följer det de gjordes av när du ändrar ett mått uppströms.

De finns i gruppen Funktioner under menyn {{ui:Mer}}: {{ui:Plan}}, {{ui:Axel}}, {{ui:Punkt}}.

## Skapa ett plan

1. Klicka på en platt yta, eller ett grundplan i historiken, för att börja från den (valfritt).
2. Välj {{ui:Mer}} och sedan {{ui:Plan}}. Det startar som ett förskjutet plan 20 % av delens storlek från det du valde (eller från det övre planet).
3. Välj **Typ** och dess referenser i den högra panelen:

| Typ | Referenser | Tal |
|---|---|---|
| Förskjutet från ett plan eller en yta | **Från plan** | **Avstånd (mm)**, negativt för den andra sidan |
| I en vinkel, genom en kant eller axel | **Från plan**, **Vrid kring** (en världsaxel, en axelfunktion eller en vald rak kant) | **Vinkel (°)** |
| Genom tre punkter | **Punkt 1**, **Punkt 2**, **Punkt 3** | — |
| Mittplan mellan två | **Första plan**, **Andra plan** (parallella: halvvägs; möts: planet som halverar vinkeln) | — |
| Tangent mot en cylinder | **Cylinder** (en cylindrisk yta), **Närmaste punkt** (vilken sida) | — |
| Vinkelrätt mot en kant, vid en punkt | **Kant**, **Vid punkt** (planet går genom kantens punkt närmast den, och genom punkten också) | — |
| Genom en kant och en punkt | **Rak kant** (eller en axel), **Genom punkt** | — |
| Vinkelrätt mot en kant vid dess mitt | **Kant** (halvvägs längs den, vinkelrätt mot den där), eller utan kant **Punkt 1** och **Punkt 2** (planet halvvägs mellan dem) | — |

Varje referens har en knapp **Välj**: välj den och klicka sedan i vyn. En planplats tar ett grundplan, ett referensplan eller en platt yta; en punktplats tar änden av en kant (klicka nära den änden), en punktfunktion eller en plats på en yta; en kantplats tar en kant. {{key:Esc}} avbryter ett val. **Vänd normalen** vänder planet (åt vilket håll en skiss på det vetter).

I den här versionen svarar en plats som kräver en kant eller en cylinderyta (Tangent mot en cylinder och kantplatserna) ”finns inte ännu”: använd punkter eller en axel i stället.

## Skissa på ett plan

Markera planet (i historiken eller genom att klicka på dess kvadrat i vyn) och välj {{ui:Skiss}}, eller **Skissa på det** i dess panel. Skissen följer planet: ändrar du planets avstånd flyttas skissen och varje funktion på den också.

## Axlar och punkter

- {{ui:Axel}}: genom två punkter, cylinderns eller konens axel, där två plan möts, längs en rak kant (eller axeln för en cirkulär kant), eller vinkelrätt mot en yta genom en punkt.
- {{ui:Punkt}}: vid koordinater, vid ett hörn eller en skisspunkt, eller vid mitten av en cirkulär kant, samt punkterna ”mellan objekt”:

| Punkttyp | Referenser |
|---|---|
| Mitt på en kant (eller mellan två punkter) | **Kant** (halvvägs längs dess längd, även för bågar och kurvor), eller utan kant **Punkt 1** och **Punkt 2** |
| Där en kant eller axel möter en yta eller ett plan | **Kant** (rak eller krökt) eller en axel, och **Möter plan** (ett plan eller en platt yta) eller **Eller en yta** (en platt yta eller en cylinder). En cirkel korsar ett plan två gånger och en linje går genom en cylinder två gånger: **Den andra korsningen** tar den andra |
| Där tre plan möts | **Första**, **Andra** och **Tredje plan** (plan eller platta ytor) |

Var och en misslyckas med ett enkelt meddelande när dess referenser inte passar: en linje parallell med planet, en linje som missar cylindern, en kant som inte når planet, tre plan som inte möts i en punkt, en punkt på linjen med vilken den skulle fixera ett plan.

Använd dem i andra funktioner:

| Var | Hur |
|---|---|
| Revolvera | **Axel**: välj axelfunktionen från listan (den måste ligga i skissens plan) |
| Cirkulärt mönster | **Axel**: axelfunktionen |
| Linjärt mönster | **Riktning**: en axelfunktion, eller ett plan (dess normal) |
| Spegling | **Spegelplan**: ett referensplan |
| Extrudera | **Slut**: Upp till yta eller plan, Upp till hörn (en punktfunktion). Finns inte ännu i den här versionen (den behöver en exakt kärna) |
| Släppvinkel | **Neutralt plan** |

## När en referens är borta

Ett plan som gjorts från en yta som inte längre finns misslyckas med ett meddelande som nämner den, till exempel ”Ytan det ligger på är borta från Extrude1.” Det flyttas aldrig till en annan yta. Skisserna och funktionerna på det markeras ”ej byggd” tills du väljer en ny referens; resten av delen förblir som den var.

:::note
Den här versionen bygger varje del med nätkärnan, som skapar plan, axlar och punkter från grundplan, platta ytor som gjorts av en extrudering eller revolvering, skisspunkter, koordinater och andra referensfunktioner. Allt som behöver en kant, en kants ände eller en krökt yta behöver en exakt kärna: finns inte ännu i den här versionen (”Den använder en yta eller kant på soliden, som bara en exakt kärna kan hitta: finns inte ännu i den här versionen.”).
:::
