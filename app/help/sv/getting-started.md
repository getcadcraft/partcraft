---
title: Kom igång med PartCraft
summary: Vad PartCraft gör idag, vad din webbläsare behöver och en första del på tio minuter, från skiss till sparad fil.
keywords: start, första körningen, snabbstart, introduktion, handledning, första delen, platta, parametrisk, delmodellerare
from: 5f0a668d
---

PartCraft är CadCraft-familjens parametriska del- och sammanställningsapp. Du ritar en 2D-skiss, binder fast den med villkor och mått, gör den till en solid med funktioner som extrudera, revolvera och hål, och ändrar vilket tal som helst senare: delen byggs om från sin historik. Delar går sedan in i sammanställningar, där leder placerar dem och låter dig kontrollera rörelsen.

Vad den här versionen gör:

| Uppgift | Vad du får |
|---|---|
| Skisser | Linjer, rektanglar, cirklar, bågar, punkter och centrumlinjer, med villkor och mått, och ett levande tillstånd: under-, fullt eller överbestämd |
| Solida funktioner | Extrudera, skär, revolvera, revolverat skär, enkla och försänkta hål, linjära och cirkulära mönster, spegling, rundningar och fasningar på raka kanter mellan plana ytor, samt skal och släppvinklar på plana ytor. Svep, loft och de andra funktioner som kräver en exakt kärna är inte byggda ännu i den här versionen: se [Vad som inte är byggt ännu](topic:not-built-yet) |
| Historik | Redigera vilken funktions tal som helst, undertryck, rulla tillbaka, ordna om och ta bort, med ångra |
| Sammanställningar | Delar sammanfogade med fasta, roterande och glidande leder, en kollisionskontroll och en rörelsekontroll |
| Ritningar | Ett A3-blad med tre vyer, en isometri, en sektion, en detaljvy, yttermått, datum, toleransramar och ytjämnhetssymboler, exporterat som PDF |
| Filer | Egna del- och sammanställningsfiler; STL, 3MF, fasetterad STEP, DXF och PDF ut |

Allt körs i din webbläsare, på din dator. **Ingenting laddas upp.** Se [Filer: öppna, spara och exportera](topic:files) för vart filer tar vägen.

## Det här behöver du

- En aktuell Chrome, Edge, Firefox eller Safari med **WebGL** (3D-grafik) och **WebAssembly** påslagna. Båda är på som standard. Den solida geometrin byggs av en WebAssembly-nätkärna som läses in med appen: se [Nätkärnan](topic:solid-kernels).
- En mus är enklast. En styrplatta fungerar, och pekskärmar fungerar för att titta och göra enkla skisser: se [Styrplatta, touch och små skärmar](topic:trackpad-and-touch).
- En skärm som är minst 1280 pixlar bred visar hela verktygsfältet på en rad. Smalare fönster rullar verktygsfältet i sidled; på en telefon öppnas panelerna som blad från ett fält längst ned.

Mer om webbläsare: [Webbläsare och datorer](common:browsers).

:::note
PartCraft körs i webbläsaren, och på skrivbordet inuti CadCraft Studio. Molnsparande finns inte ännu: du öppnar delar från din dator och sparar tillbaka dem till den som filer.
:::

## Öppna PartCraft

1. Öppna PartCraft.
2. Vänta medan skärmen säger ”Läser in solidkärnan…”. Det tar en stund första gången.
3. Du ser en tom 3D-vy med tre basplan, historiken till vänster (”Del1”, sedan Frontplan, Överplan, Högerplan) och en ruta i vyn med rubriken ”Starta en del”.
4. Chipet nära högra änden av statusfältet säger ”Nätkärna”: PartCraft bygger varje del med nätkärnan i den här versionen, så runda ytor är plana fasetter. Du kan börja modellera direkt.

Om vyn säger att webbläsaren inte kan visa 3D, eller att kärnan inte lästes in, se [Felsökning](topic:troubleshooting#the-app-does-not-start).

## Din första del: en platta med ett hål

Du ska göra en platta på 60 × 40 mm, 10 mm tjock, med ett hål på 6 mm rakt igenom. Enheter är millimeter.

### Skissa konturen

1. Klicka på **Frontplan** i historiken till vänster. Planet markeras i vyn.
2. Välj {{ui:Skiss}} i verktygsfältet, eller tryck på {{key:S}}. Vyn vrids för att titta rakt mot planet, och Linje-verktyget är aktivt.
3. Tryck på {{key:R}} för Rektangel-verktyget.
4. Flytta pekaren till origo (den lilla röda cirkeln med ett kryss). En liten kvadrat visar att den fångar. Klicka.
5. Flytta uppåt och åt höger och klicka igen. Du har en rektangel. Dess linjer är blå: blått betyder att de fortfarande kan röra sig.

### Ge den mått

1. Tryck på {{key:D}} för Mått-verktyget.
2. Klicka på den övre linjen och sedan en bit ovanför den. En sifferruta öppnas med den aktuella längden.
3. Skriv `60` och tryck på {{key:Enter}}. Rektangeln ändras till 60 mm bred.
4. Klicka på den vänstra linjen och sedan en bit till vänster om den. Skriv `40` och tryck på {{key:Enter}}.

Chipet uppe till vänster i vyn säger nu **Fullt bestämd** och linjerna blir bläck (svarta på temat Papper, ljusa på temat Modell). Varje punkt och storlek är fast.

:::tip
Om du började rektangeln en bit från origo säger chipet fortfarande ”Underbestämd · 2 frihetsgrader”. Tryck på {{key:S}} för Markera, klicka på ett hörn, {{key:Shift}}+klicka på origo och välj sedan {{ui:• Sammanfallande}} i högerpanelen.
:::

### Extrudera den

1. Välj {{ui:Avsluta}} i verktygsfältet, eller tryck på {{key:Esc}} tills skissen stängs (oftast två gånger).
2. Välj {{ui:Extrudera}}. En solid på 10 mm visas. ”Extrudering1” läggs till i historiken, med ”Skiss1” indragen under.
3. Högerpanelen visar extruderingens inställningar. För att ändra tjockleken skriver du ett nytt tal i **Djup (mm)** och trycker på {{key:Enter}} eller {{key:Tab}}. Delen byggs om direkt.

### Lägg till hålet

1. Klicka på den stora plana ytan framtill på plattan (extruderingens ände). Hela ytan markeras och högerpanelen säger **Yta**.
2. Välj {{ui:Skiss på denna yta}} i högerpanelen.
3. Tryck på {{key:P}} för Punkt-verktyget och klicka nära mitten av ytan.
4. Välj {{ui:Avsluta}}.
5. Välj {{ui:Hål}}. Ett hål på 6 mm går rakt igenom plattan. Ändra **Diameter (mm)** i högerpanelen om du vill.

Rutan **Del** längst ned till vänster visar nu en volym, en yta, storleken (60 × 40 × 10 mm) och ”Genomgående hål: 1”.

### Spara den

1. Tryck på {{key:Mod+S}} eller välj {{ui:Spara}}.
2. Webbläsaren laddar ner `Part1.partcraft.json` till sin nedladdningsmapp. Filen innehåller hela historiken: öppna den igen med {{ui:Öppna}} för att fortsätta redigera.

För att döpa om delen först klickar du på tomt utrymme i vyn så att inget är markerat och skriver ett nytt **Namn** i högerpanelen.

## Vart du går härnäst

- [Rita din första skiss](topic:sketch-basics) och [Bestäm en skiss fullt](topic:relations-dimensions) förklarar skissverktyget ordentligt.
- [Ändra en del genom dess historik](topic:edit-history) visar hur du redigerar det du byggt.
- [Runda, fasa och urholka](topic:fillet-chamfer-shell) och [Gör en ritning](topic:drawing-pdf) färdigställer delen. [Vad som inte är byggt ännu](topic:not-built-yet) listar vad den här versionen inte gör, till exempel svep och loft.
- [Om du kommer från en annan parametrisk modellerare](topic:coming-from) listar de vanor som fungerar annorlunda här.
- [Tangenter och mus](topic:keyboard) är den fullständiga listan över genvägar.
- [Använda den här hjälpen](common:help).
