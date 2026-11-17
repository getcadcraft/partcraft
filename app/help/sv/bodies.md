---
title: Kombinera, flytta och skala kroppar; banmönster
summary: Skapa separata kroppar och sedan sammanfoga, skära eller skära gemensamt dem efteråt, flytta, vrida, rikta in eller kopiera dem, skala dem jämnt eller med X, Y och Z, samt kopiera funktioner eller kroppar längs en kurva.
keywords: kropp, kroppar, flerkropp, ny kropp, kombinera, boolesk, sammanfoga, skär, skärning, subtrahera, union, behåll verktyg, flytta kropp, kopiera kropp, rotera kropp, rikta in, förflytta, skala, ojämn skalning, töj, affin, banmönster, mönster längs kurva, matris längs bana, kurvstyrt mönster
from: 6b1ea820
---

:::note
**Finns inte ännu i den här versionen.** Att arbeta med flera kroppar kräver en exakt geometrikärna, som den här versionen av PartCraft inte har: den bygger varje del med mesh-kärnan. [Vad som inte finns ännu](topic:not-built-yet) beskriver vad du gör i stället. Resten av sidan beskriver hur det fungerar med en exakt kärna.
:::

En del kan innehålla mer än en solid. Varje separat solid är en **kropp**. De flesta funktioner lägger till i eller skär från varje kropp de berör. Verktygen på den här sidan arbetar med hela kroppar som du väljer. De finns i funktionsgruppens meny {{ui:Mer}}: {{ui:Kombinera}}, {{ui:Flytta kropp}}, {{ui:Skala kropp}} och {{ui:Banmönster}}. Alla kräver den exakta kärnan (OpenCascade).

## Skapa en separat kropp

Ställ in en extrudering eller en revolvering till **Operation** **Ny kropp** i dess högra panel. Svepningar och lofts har det också. Den nya solid förblir separat även där den överlappar de andra. **Skärning** behåller bara överlappningen mellan den nya formen och det som redan finns.

Kroppar namnges efter funktionen som startade dem: "Extrude2". En kopia namnges efter sin original och funktionen som kopierade den: "Extrude2, kopia 1 av Move1". Namnen förblir desamma när du ändrar mått uppströms, så funktioner som använder en kropp fortsätter att hitta den. Med två eller fler kroppar listar delpanelen (klicka på tomt utrymme) dem med deras volymer.

## Byt namn på eller dölj en kropp

Klicka på tomt utrymme i vyn för att se delpanelen. Dess kroppslista (visas när delen har två eller fler kroppar) har en namnruta och en {{ui:Dölj}}-knapp på varje rad.

- **Byt namn:** skriv ett nytt namn i rutan och tryck på {{key:Enter}} eller klicka utanför. Alla paneler använder det sedan: Kombinera, Flytta kropp och mönstren. Töm rutan för att gå tillbaka till namnet från funktionen som skapade kroppen.
- **Dölj:** klicka på {{ui:Dölj}} på dess rad. Kroppen försvinner ur vyn och klick går igenom den, så du kan välja ytor bakom den. {{ui:Visa}} återställer den. {{ui:Visa alla}} återställer alla dolda kroppar.

Att dölja ändrar bara vyn. En dold kropp byggs fortfarande, räknas med i volymen och mätningarna, och sparas i STL-, 3MF- och STEP-exporter. Namn och dolda kroppar sparas i delfilen, och varje ändring är ett steg i {{ui:Ångra}}.

## Kombinera kroppar

1. {{key:Shift}}+klicka på en yta på **målkroppen**, och sedan på en yta på varje **verktygskropp**.
2. Välj {{ui:Mer}} och sedan {{ui:Kombinera}}.
3. I den högra panelen väljer du **Operation**:

| Operation | Resultat |
|---|---|
| Sammanfoga | Målkroppen och verktygen blir en kropp |
| Skär | Verktygen tas bort från målkroppen |
| Skärning | Bara det som målkroppen och alla verktyg delar behålls |

**Målkropp** är den som behåller sitt namn. Bocka i eller ur **Verktygskroppar**, eller använd **Välj i vyn** och klicka på deras ytor. **Behåll verktygskropparna** lämnar också verktygen kvar på plats, praktiskt för en form och dess kärna. Om en verktygskropp redan förbrukats av en tidigare Kombinera säger panelen det i stället för att välja en annan kropp.

## Flytta eller kopiera en kropp

1. Välj {{ui:Mer}} och sedan {{ui:Flytta kropp}}. Den nyaste kroppen är bockad. Bocka i de du vill flytta.
2. Välj **Flytt**-typen:

| Flytt | Vad du anger |
|---|---|
| Förflytta | **ΔX**, **ΔY**, **ΔZ** i millimeter |
| Punkt till punkt | **Från** och **Till**: klicka nära änden av en kant, en punktfunktion, eller en plats på en yta |
| Rotera kring en axel | **Axel** (X, Y, Z, en axelfunktion, eller **Välj**: en rak kant, en cirkel eller en cylinder) och **Vinkel (°)** |
| Rikta in en yta mot en yta eller ett plan | **Yta att flytta** (en plan yta på kroppen), **Mot** (en plan yta eller ett plan) |

Rikta in vrider kroppen så att dess yta ligger på den andra ytan, yta mot yta, och skjuter den sedan längs den ytans normal enbart. **Samma riktning** vrider den åt andra hållet. **Kopiera** behåller originalet och lägger till den flyttade kopian som en ny kropp.

## Skala en kropp

1. Välj {{ui:Mer}} och sedan {{ui:Skala kropp}}, och bocka i kropparna.
2. Skriv in en **Skala**, eller avbocka **Enhetlig** och skriv in **Skala X**, **Skala Y** och **Skala Z** (längs världsaxlarna).
3. **Kring** är punkten som står still: mitten av kropparnas box, eller en punkt du väljer.

En enhetlig skalning är exakt. En ojämn skalning gör cirklar till ellipser: en cylinder blir en elliptisk cylinder, som ingen analytisk yta kan hålla. Krökta ytor blir därför B-spline-ytor som håller sig inom 0.0000004 mm från den exakta formen. Plana ytor och raka kanter förblir exakta. Panelen säger vilket som hände. Skalfaktorerna måste vara större än noll (spegla med {{ui:Spegla}} i stället).

## Kopiera längs en bana

1. Markera funktionen som ska kopieras i historiken, eller lämna inget markerat för att kopiera den nyaste kroppen.
2. Välj {{ui:Mer}} och sedan {{ui:Banmönster}}. Den nyaste oanvända skissen tas som bana.
3. I den högra panelen anger du:

| Inställning | Vad den gör |
|---|---|
| **Kopiera** | Kroppar (varje kopia blir en ny kropp) eller Funktioner (sammanfogas eller skärs som originalet) |
| **Bana** | Bocka i skisser, eller **Välj modellkanter**. Delarna måste sitta ihop ände mot ände. |
| **Antal** | Totalt antal, inklusive originalet |
| **Avstånd** | Lika (sprids ut till änden av en öppen bana, eller runt en sluten) eller ett angivet avstånd |
| **Orientering** | Följ banan (varje kopia vrider sig med den) eller Fast (kopiorna förblir parallella) |
| **Vänd riktning** | Gå åt andra hållet längs banan |

Kopiorna startar där banan passerar närmast originalet och placeras med avstånd längs kurvan.

Linjärt och cirkulärt mönster kan också kopiera kroppar: bocka i **Kopiera kroppar** i deras panel och välj kropparna. Varje kopia blir en ny kropp.

## Begränsningar

- Kroppar kräver den exakta kärnan. Mesh-kärnan behåller en solid och säger det.
- En ojämn skalning gör krökta ytor till nära B-spline-approximationer (se ovan), inte exakta cylindrar eller koner. Offsetytor kan inte skalas så ännu.
- Att följa banan på en vridande 3D-kurva för med sig kopian utan att vrida den. På plana banor är vridningen exakt.
- Kombinera fungerar bara på solider. Ytkroppar sammanfogas med {{ui:Sy ihop}}.

Se även [Referensplan, axlar och punkter](topic:reference-geometry) för punkter och plan "mellan objekt", och [Mönster- och spegelfunktioner](topic:patterns-mirror).
