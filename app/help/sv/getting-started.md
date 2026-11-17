---
title: Kom igång med PartCraft
summary: Vad PartCraft gör i dag, vad din webbläsare behöver, och en första del på tio minuter, från skiss till sparad fil.
keywords: starta, första körningen, snabbstart, introduktion, handledning, första del, platta, parametrisk, delmodellerare
from: 7d43283f
---

PartCraft är appen för parametriska delar och sammanställningar i CadCraft-familjen. Du ritar en 2D-skiss, låser den med relationer och mått, gör den till en solid med funktioner som extrudering, rotation och hål, och ändrar vilket tal som helst senare: delen byggs om från sin historik. Delar placeras sedan i sammanställningar, där leder placerar dem och låter dig kontrollera rörelsen.

Vad den här versionen gör:

| Uppgift | Vad du får |
|---|---|
| Skisser | Linjer, rektanglar, cirklar, bågar, punkter och mittlinjer, med relationer och mått, och ett levande tillstånd: underdefinierad, helt definierad eller överdefinierad |
| Solidfunktioner | Extrudera, skär, rotera, roterat skär, enkla och förborrade hål, linjära och cirkulära mönster, spegling, rundningar och fasningar på raka kanter mellan plana ytor, samt skal och släppvinklar på plana ytor. Svep, loft och de andra funktioner som kräver en exakt kärna finns inte ännu i den här versionen: se [Vad som inte finns ännu](topic:not-built-yet) |
| Historik | Redigera siffrorna för vilken funktion som helst, undertryck, återgå, ordna om och ta bort, med ångra |
| Sammanställningar | Delar sammanfogade med stela, vridbara och glidande leder, en kollisionskontroll och en rörelsekontroll |
| Ritningar | Ett A3-blad med tre vyer, en isometrisk, en sektion, en detaljvy, totalmått, referenser, geometritoleransramar och ytjämnhetssymboler, exporterat som PDF |
| Filer | Egna del- och sammanställningsfiler; ut som STL, 3MF, exakt STEP, DXF och PDF |

Allt körs i din webbläsare, på din dator. **Inget laddas upp.** Se [Filer: öppna, spara och exportera](topic:files) för var filerna hamnar.

## Vad du behöver

- En aktuell version av Chrome, Edge, Firefox eller Safari med **WebGL** (3D-grafik) och **WebAssembly** påslagna. Båda är påslagna som standard. Solidgeometrin byggs av en WebAssembly-nätkärna som laddas med appen: se [Nätkärnan](topic:solid-kernels).
- En mus är enklast. En styrplatta fungerar, och pekskärmar fungerar för visning och enkel skissning: se [Styrplatta, touch och små skärmar](topic:trackpad-and-touch).
- En skärm minst 1280 pixlar bred visar hela verktygsfältet på en rad. Smalare fönster rullar verktygsfältet åt sidan; på en telefon öppnas panelerna som blad från en list längst ned.

Mer om webbläsare: [Webbläsare och datorer](common:browsers).

:::note
PartCraft körs i webbläsaren, och på skrivbordet inuti CadCraft Studio. Molnsparande finns inte ännu: du öppnar delar från din dator och sparar dem tillbaka dit som filer.
:::

## Öppna PartCraft

1. Öppna PartCraft.
2. Vänta medan skärmen säger ”Läser in solidkärnan…”. Det tar en stund första gången.
3. Du ser en tom 3D-vy med tre basplan, historiken till vänster (”Part1”, sedan Framplan, Ovanplan, Högerplan) och en ruta i vyn med rubriken ”Starta en del”.
4. Märket nära statusfältets högra ände säger ”Nätkärna”: PartCraft bygger varje del med nätkärnan i den här versionen, så runda ytor är plana facetter. Du kan börja modellera direkt.

Om vyn säger att webbläsaren inte kan visa 3D, eller att kärnan inte läses in, se [Felsökning](topic:troubleshooting#the-app-does-not-start).

## Din första del: en platta med ett hål

Du gör en 60 × 40 mm platta, 10 mm tjock, med ett 6 mm hål genom den. Enheterna är millimeter.

### Skissa konturen

1. Klicka på **Framplan** i historiken till vänster. Planet markeras i vyn.
2. Välj {{ui:Sketch}} i verktygsfältet, eller tryck på {{key:S}}. Vyn vänder sig rakt mot planet, och linjeverktyget är aktivt.
3. Tryck på {{key:R}} för rektangelverktyget.
4. Flytta pekaren till origo (den lilla röda cirkeln med ett kors). En liten ruta visar att den fästs. Klicka.
5. Flytta uppåt och åt höger och klicka igen. Du har en rektangel. Dess linjer är blå: blått betyder att de fortfarande kan röras.

### Ge den mått

1. Tryck på {{key:D}} för måttverktyget.
2. Klicka på den övre linjen och klicka sedan en bit ovanför den. En sifferruta öppnas med den aktuella längden.
3. Skriv `60` och tryck på {{key:Enter}}. Rektangeln blir 60 mm bred.
4. Klicka på den vänstra linjen och klicka sedan en bit till vänster om den. Skriv `40` och tryck på {{key:Enter}}.

Märket längst upp till vänster i vyn säger nu **Helt definierad** och linjerna blir bläckfärgade (svart på temat Papper, ljus på temat Modell). Varje punkt och storlek är låst.

:::tip
Om du började rektangeln långt från origo säger märket fortfarande ”Underdefinierad · 2 frihetsgrader”. Tryck på {{key:S}} för Markera, klicka på ett hörn, {{key:Shift}}+klicka på origo och välj sedan {{ui:• Sammanfallande}} i den högra panelen.
:::

### Extrudera den

1. Välj {{ui:Avsluta}} i verktygsfältet, eller tryck på {{key:Esc}} tills skissen stängs (vanligtvis två gånger).
2. Välj {{ui:Extrudera}}. En 10 mm solid visas. ”Extrude1” läggs till i historiken, med ”Sketch1” indragen under den.
3. Den högra panelen visar extruderingens inställningar. För att ändra tjockleken, skriv ett nytt tal i **Djup (mm)** och tryck på {{key:Enter}} eller {{key:Tab}}. Delen byggs om direkt.

### Lägg till hålet

1. Klicka på den stora plana ytan framtill på plattan (extruderingens ände). Hela ytan markeras och den högra panelen säger **Yta**.
2. Välj {{ui:Skiss på denna yta}} i den högra panelen.
3. Tryck på {{key:P}} för punktverktyget och klicka nära mitten av ytan.
4. Välj {{ui:Avsluta}}.
5. Välj {{ui:Hål}}. Ett 6 mm hål går genom plattan. Ändra **Diameter (mm)** i den högra panelen om du vill.

Rutan **Del** längst ned till vänster visar nu en volym, en ytarea, storleken (60 × 40 × 10 mm) och ”Genomgående hål: 1”.

### Spara den

1. Tryck på {{key:Mod+S}} eller välj {{ui:Spara}}.
2. Din webbläsare laddar ner `Part1.partcraft.json` till sin nedladdningsmapp. Filen innehåller hela historiken: öppna den igen med {{ui:Öppna}} för att fortsätta redigera.

För att byta namn på delen först, klicka på tomt utrymme i vyn så att inget är markerat och skriv ett nytt **Namn** i den högra panelen.

## Vart du går härnäst

- [Rita din första skiss](topic:sketch-basics) och [Definiera en skiss helt](topic:relations-dimensions) förklarar skissverktyget ordentligt.
- [Ändra en del via dess historik](topic:edit-history) visar hur du redigerar det du byggt.
- [Runda, fasa och ihåla](topic:fillet-chamfer-shell) och [Gör en ritning](topic:drawing-pdf) färdigställer delen. [Vad som inte finns ännu](topic:not-built-yet) listar vad den här versionen inte gör, till exempel svep och loft.
- [Om du kommer från en annan parametrisk modellerare](topic:coming-from) listar vanor som fungerar annorlunda här.
- [Tangenter och mus](topic:keyboard) är den fullständiga listan över genvägar.
- [Använda hjälpen](common:help).
