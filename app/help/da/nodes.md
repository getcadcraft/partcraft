---
title: Noder: byg en model ved at forbinde
summary: Forbind tal til punkter, punkter til kurver og kurver til flader. Ændr et tal, og alt efter det bygges om. Hver node er også en linje CraftScript, og grafen gemmes i filen.
keywords: noder, node-editor, visuel scripting, parametrisk, graf, forbindelser, porte, frit formet, freeform, nurbs, loft, ekstrudér, drej, cirkel, kurve, flade, række, interval, tilfældig, liste, script, craftscript, grasshopper
from: 3a4625de
---

**Noder**-editoren bygger geometri ved at forbinde bokse med hinanden. Hver boks (en node) udfører et lille job: laver et tal, et punkt, en cirkel, et loft. Du forbinder resultatet fra én med indgangen på den næste, og modellen følger med, når du ændrer et tal i starten.

Åbn den fra arbejdsområdelisten: {{ui:Noder}}. Den åbner editorvinduet. En del, der allerede har en graf, viser den, når du åbner arbejdsområdet. Det er et vindue over 3D-visningen: træk i dens titellinje for at flytte det, træk i hjørnet for at ændre størrelsen.

## Forbinding

1. Vælg en node fra listen til venstre (skriv i søgefeltet for at indsnævre den, <kbd>Enter</kbd> tilføjer det første match). Den vises midt på lærredet.
2. Træk fra en rund **udgangsprik** til højre på én node til en rund **indgangsprik** til venstre på en anden. Prikken bliver grøn, når den passer, og rød, når den ikke gør; peg på den for at se årsagen.
3. En indgang uden forbindelse viser en boks til en indtastet værdi. Skriv et tal og tryk <kbd>Tab</kbd>: resultatet bygges om.
4. Den lille cirkel i en nodes titellinje er dens **øje**. En node med øjet tændt tegnes i 3D-visningen: som linjer for kurver, skygget for flader, prikker for punkter.

Træk en node i dens titellinje. Træk i baggrunden for at panorere, drej hjulet for at zoome. <kbd>Delete</kbd> fjerner den valgte node. {{ui:Ryd op}} stiller noderne i kolonner, {{ui:Tilpas}} får dem alle ind i billedet, {{ui:Fortryd}} og {{ui:Gentag}} går igennem dine rettelser.

## Typer og enheder

Porte har en type: tal, ja/nej, punkt, vektor, kurve, flade, net, massivt legeme eller »geometri« for hvilken som helst af dem. Et punkt kan forbindes til en vektorindgang og omvendt. Tal har en enhed: en **længde** er i millimeter, og en **vinkel** er i grader. En længde kan ikke forbindes til en vinkel, og en længde gange en længde (et areal) afvises, så en forkert forbindelse stoppes, når du laver den.

En kvadratisk prik er en **liste**. Når en liste når en indgang med en enkelt værdi, kører noden én gang for hvert element, og dens resultat bliver en liste. Den kortere liste gentager sit sidste element. For eksempel laver en **Række** af højder ind i **Flyt** en stak kopier.

## Massive legemer og Booleans som noder

Gruppen **Massive legemer** laver lukkede legemer ud fra de samme eksakte flader som panelet Surfaces: **Boks-legeme**, **Cylinder-legeme** og **Kugle-legeme** (størrelser i mm), **Forening**, **Subtraktion** og **Skæring** (det andet massive legeme tages fra det første; tolerancen er, hvor langt legememotorens trekanter må ligge fra de eksakte flader), **Afrund mellem flader** (fladerne efter deres nummer i legemet, 1 for det første; en radius og, over 0, en radius i enden), **Legemevolumen** (mm³) og **Legeme til net** (for at se det eller indbage det). Et massivt legeme har sin egen porttype: et punkt eller et tal kan ikke forbindes til en legemeindgang, og prikken forbliver rød. Boolean- og afrundingsnoderne bruger programmets eget legememotor, som indlæses første gang editoren åbnes.

## Fejl

En node, der ikke kan udføre sit job, siger hvorfor under sit navn med rød skrift (»Radius skal være større end nul.«), og noderne efter den venter. Den samme meddelelse er et problem i panelet Problemer, så du kan finde den derfra.

## Hver node er en linje i et script

Tryk på {{ui:Script}} for at se grafen som CraftScript: én linje pr. node, for eksempel `n3 = nd_circle(n2, n1, [0 0 1]);`. Rediger teksten og tryk på {{ui:Lav grafen ud fra dette script}} for at få den tilbage som en graf. De samme `nd_`-funktioner virker i et CraftScript i PartCraft, så en graf kan køres, gentages i en løkke eller testes der. Tilfældige tal får altid en **seed**, så den samme graf giver det samme resultat på hver computer.

## Gemt med filen

Grafen gemmes i delfilen (ikke i historikken, så Fortryd i editoren er sin egen). Noderne laver kurver, flader og net ved siden af det massive legeme: de ændrer ikke delens features.
