---
title: Noder: bygg en modell ved å koble sammen
summary: Koble tall til punkter, punkter til kurver, kurver til overflater. Endrer du et tall, bygges alt nedstrøms på nytt. Hver node er også en linje CraftScript, og grafen lagres i filen.
keywords: noder, nodeeditor, visuell skripting, parametrisk, graf, ledninger, porter, fri form, freeform, nurbs, loft, ekstruder, roter, sirkel, kurve, overflate, serie, område, tilfeldig, liste, skript, craftscript, grasshopper
from: 3a4625de
---

Redigeringsverktøyet **Noder**-editoren bygger geometri ved å koble bokser sammen. Hver boks (en node) gjør én liten jobb: lager et tall, et punkt, en sirkel, et loft. Du kobler resultatet av én til inngangen på den neste, og modellen følger når du endrer et tall i starten.

Åpne den fra arbeidsområdelisten: {{ui:Noder}}. Det åpner editorvinduet. En del som allerede har en graf, viser den når du åpner arbeidsområdet. Det er et vindu over 3D-visningen: dra tittellinjen for å flytte det, dra hjørnet for å endre størrelsen.

## Kobling

1. Velg en node fra listen til venstre (skriv i søkefeltet for å snevre inn; <kbd>Enter</kbd> legger til første treff). Den vises midt på lerretet.
2. Dra fra en rund **utgang** til høyre på én node til en rund **inngang** til venstre på en annen. Prikken blir grønn når den passer og rød når den ikke gjør det; hold musepekeren på den for å se årsaken.
3. En inngang uten tilkobling viser en boks for en skrevet verdi. Skriv et tall og trykk <kbd>Tab</kbd>: resultatet bygges på nytt.
4. Den lille sirkelen i en nodes tittellinje er dens **øye**. En node med øyet på tegnes i 3D-visningen: som linjer for kurver, skyggelagt for overflater, prikker for punkter.

Dra en node i tittellinjen. Dra bakgrunnen for å panorere, rull hjulet for å zoome. <kbd>Delete</kbd> fjerner den valgte noden. {{ui:Rydd}} ordner nodene i kolonner, {{ui:Tilpass}} viser dem alle, {{ui:Angre}} og {{ui:Gjør om}} går steg for steg gjennom redigeringene dine.

## Typer og enheter

Porter har en type: tall, ja/nei, punkt, vektor, kurve, overflate, nett, volumlegeme, eller «geometri» for noen av disse. Et punkt kan mate en vektorinngang og omvendt. Tall har en enhet: en **lengde** er i millimeter og en **vinkel** i grader. En lengde kan ikke mate en vinkel, og en lengde ganget med en lengde (et areal) avvises, så en feil ledning stoppes når du lager den.

En firkantet prikk er en liste. Når en liste når en inngang for én verdi, kjører noden én gang for hvert element, og resultatet blir en liste. Den korteste listen gjentar sitt siste element. For eksempel gir en **Serie** av høyder inn i **Flytt** en stabel med kopier.

## Volumlegemer og Boolske operasjoner som noder

Gruppen **Volumlegemer** lager lukkede legemer av de samme eksakte overflatene som Overflater-panelet: **Boks-volumlegeme**, **Sylinder-volumlegeme** og **Kule-volumlegeme** (størrelser i mm), **Forening**, **Subtraher** og **Snitt** (det andre volumlegemet tas fra det første; toleransen er hvor langt volumlegememotorens trekanter kan være fra de eksakte overflatene), **Avrunding mellom flater** (flatene etter nummeret deres i volumlegemet, 1 for den første; en radius og, over 0, en radius ved enden), **Volumlegemets volum** (mm³) og **Volumlegeme til nett** (for å se eller bake det inn). Et volumlegeme har sin egen porttype: et punkt eller et tall kan ikke kobles til en volumlegeme-inngang, og prikken forblir rød. Boolske operasjoner og avrundinger bruker programmets eget volumlegememotor, som lastes første gang editoren åpnes.

## Feil

En node som ikke kan gjøre jobben sin, sier hvorfor under navnet sitt, i rødt («Radius må være større enn null.»), og nodene etter den venter. Den samme meldingen er et problem i Problemer-panelet, så du kan finne den derfra.

## Hver node er en linje skript

Trykk {{ui:Skript}} for å se grafen som CraftScript: én linje per node, for eksempel `n3 = nd_circle(n2, n1, [0 0 1]);`. Rediger teksten og trykk {{ui:Lag grafen fra dette skriptet}} for å hente den tilbake som graf. De samme `nd_`-funksjonene fungerer i et CraftScript i PartCraft, så en graf kan kjøres, løkkes eller testes der. Tilfeldige tall tar alltid et **frø**, så samme graf gir samme resultat på hver datamaskin.

## Lagret med filen

Grafen lagres i delfilen (ikke i historikken, så Angre i editoren er sin egen). Nodene lager kurver, overflater og nett ved siden av volumlegemet: de endrer ikke delens funksjoner.
