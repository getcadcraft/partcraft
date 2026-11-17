---
title: Noder: bygg en modell genom att koppla
summary: Koppla tal till punkter, punkter till kurvor och kurvor till ytor. Ändra ett tal så byggs allt efter det om. Varje nod är också en rad CraftScript, och grafen sparas i filen.
keywords: noder, nodredigerare, visuell skriptning, parametrisk, graf, trådar, portar, friform, nurbs, loft, extrudera, revolvera, cirkel, kurva, yta, serie, intervall, slumpmässig, lista, skript, craftscript, grasshopper
from: 3a4625de
---

Redigeraren **Noder** bygger geometri genom att koppla ihop rutor. Varje ruta (en nod) gör ett litet jobb: skapar ett tal, en punkt, en cirkel, en loft. Du kopplar resultatet från en till indatan på nästa, och modellen följer när du ändrar ett tal i början.

Öppna den från arbetsytelistan: {{ui:Nodes}}. Den öppnar redigerarfönstret. En del som redan har en graf visar den när du öppnar arbetsytan. Det är ett fönster över 3D-vyn: dra i namnlisten för att flytta det, dra i hörnet för att ändra storlek.

## Koppla

1. Välj en nod i listan till vänster (skriv i sökrutan för att begränsa, <kbd>Enter</kbd> lägger till första träffen). Den visas mitt på ritytan.
2. Dra från en rund **utgångs**-punkt till höger på en nod till en rund **ingångs**-punkt till vänster på en annan. Punkten blir grön när den passar och röd när den inte gör det; peka på den för att se varför.
3. En ingång utan anslutning visar en ruta för ett inskrivet värde. Skriv ett tal och tryck <kbd>Tab</kbd>: resultatet byggs om.
4. Den lilla cirkeln i en nods namnlist är dess **öga**. En nod med ögat på ritas i 3D-vyn: som linjer för kurvor, skuggad för ytor, punkter för punkter.

Dra en nod i dess namnlist. Dra i bakgrunden för att panorera, vrid hjulet för att zooma. <kbd>Delete</kbd> tar bort den markerade noden. {{ui:Ordna}} ordnar noderna i kolumner, {{ui:Anpassa}} tar in alla i vyn, {{ui:Ångra}} och {{ui:Gör om}} stegar igenom dina ändringar.

## Typer och enheter

Portar har en typ: tal, ja/nej, punkt, vektor, kurva, yta, nät, solid, eller ”geometri” för någon av dessa. En punkt kan mata en vektoringång och tvärtom. Tal bär en enhet: en **längd** är i millimeter och en **vinkel** är i grader. En längd kan inte mata en vinkel, och en längd gånger en längd (en area) avvisas, så en felaktig tråd stoppas när du drar den.

En kvadratisk punkt är en **lista**. När en lista når en ingång för ett enda värde körs noden en gång för varje post, och dess resultat blir en lista. Den kortare listan upprepar sitt sista värde. Till exempel: en **Serie** av höjder in i **Flytta** ger en stapel kopior.

## Solid och booleska operationer som noder

Gruppen **Solid** skapar slutna kroppar av samma exakta ytor som panelen Ytor: **Låda-solid**, **Cylindersolid** och **Sfärsolid** (storlekar i mm), **Union**, **Subtrahera** och **Skärning** (det andra solidet tas från det första; toleransen är hur långt solidmotorns trianglar får ligga från de exakta ytorna), **Rundning mellan ytor** (ytorna efter deras nummer i solidet, 1 för dess första; en radie och, över 0, en radie vid slutet), **Solidvolym** (mm³) och **Solid till nät** (för att se eller baka den). En solid har en egen porttyp: en punkt eller ett tal kan inte kopplas till en solidingång, och punkten förblir röd. Boolean- och rundningsnoderna använder programmets egen solidmotor, som laddas första gången redigeraren öppnas.

## Fel

En nod som inte kan utföra sitt jobb säger varför under sitt namn, i rött (”Radien måste vara större än noll.”), och noderna efter den väntar. Samma meddelande är ett Problem i panelen Problem, så du kan hitta det därifrån.

## Varje nod är en rad skript

Tryck på {{ui:Script}} för att se grafen som CraftScript: en rad per nod, till exempel `n3 = nd_circle(n2, n1, [0 0 1]);`. Redigera texten och tryck på {{ui:Make the graph from this script}} för att föra tillbaka den som en graf. Samma `nd_`-funktioner fungerar i ett CraftScript i PartCraft, så en graf kan köras i en loop eller testas där. Slumptal tar alltid ett **startvärde** (seed), så samma graf ger samma resultat på varje dator.

## Sparas med filen

Grafen sparas i delens fil (inte i historiken, så Ångra i redigeraren är sin egen). Noderna skapar kurvor, ytor och nät bredvid solidet: de ändrar inte delens funktioner.
