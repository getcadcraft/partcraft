---
title: Nodes: een model bouwen door te verbinden
summary: Verbind getallen met punten, punten met krommen en krommen met vlakken. Wijzig een getal en alles wat erop volgt, wordt opnieuw opgebouwd. Elke node is ook een regel CraftScript, en de graaf wordt in het bestand opgeslagen.
keywords: nodes, nodeeditor, visueel scripten, parametrisch, graaf, draden, poorten, vrije vorm, freeform, nurbs, loft, extruderen, cirkel, kromme, vlak, reeks, bereik, willekeurig, lijst, script, craftscript, grasshopper
from: 3a4625de
---

De **Nodes**-editor bouwt geometrie door vakjes met elkaar te verbinden. Elk vakje (een node) doet één kleine taak: een getal maken, een punt, een cirkel, een loft. U verbindt het resultaat van het ene met de invoer van het volgende, en het model volgt wanneer u een getal aan het begin wijzigt.

Open het vanuit de lijst van werkomgevingen: {{ui:Nodes}}. Het opent het editorvenster. Een onderdeel dat al een graaf heeft, toont die wanneer u de werkomgeving opent. Het is een venster boven de 3D-weergave: sleep de titelbalk om het te verplaatsen, sleep de hoek om het van grootte te veranderen.

## Verbinden

1. Kies een node uit de lijst links (typ in het zoekvak om te beperken; <kbd>Enter</kbd> voegt de eerste overeenkomst toe). Hij verschijnt in het midden van het canvas.
2. Sleep van een ronde **uitvoer**-stip rechts van de ene node naar een ronde **invoer**-stip links van een andere. De stip wordt groen als het past en rood als het niet past; wijs erop voor de reden.
3. Een invoer waarop niets is aangesloten, toont een vak voor een getal dat u typt. Typ een getal en druk op <kbd>Tab</kbd>: het resultaat wordt opnieuw opgebouwd.
4. Het kleine rondje in de titelbalk van een node is het **oog**. Een node met het oog aan wordt in de 3D-weergave getekend: als lijnen voor krommen, gearceerd voor vlakken, als stippen voor punten.

Sleep een node aan zijn titelbalk. Sleep de achtergrond om te verschuiven, draai het wieltje om te zoomen. <kbd>Delete</kbd> verwijdert de geselecteerde node. {{ui:Opruimen}} rangschikt de nodes in kolommen, {{ui:Passend maken}} brengt ze allemaal in beeld, en {{ui:Ongedaan maken}} en {{ui:Opnieuw}} lopen uw bewerkingen stap voor stap door.

## Typen en eenheden

Poorten hebben een type: getal, ja/nee, punt, vector, kromme, vlak, mesh, volume, of "geometrie" voor elk daarvan. Een punt kan naar een vectorinvoer en terug. Getallen hebben een eenheid: een **lengte** is in millimeter en een **hoek** is in graden. Een lengte kan niet naar een hoek, en een lengte maal een lengte (een oppervlakte) wordt geweigerd, zodat een verkeerde draad wordt tegengehouden zodra u hem maakt.

Een vierkante stip is een **lijst**. Wanneer een lijst een invoer met één waarde bereikt, draait de node één keer voor elk item, en wordt het resultaat een lijst. De kortere lijst herhaalt zijn laatste item. Een **Reeks** van hoogtes naar **Verplaatsen** levert bijvoorbeeld een stapel kopieën op.

## Volumes en Booleans als nodes

De groep **Volumes** maakt gesloten lichamen uit dezelfde exacte vlakken als het paneel Vlakken: **Blokvolume**, **Cilindervolume** en **Bolvolume** (afmetingen in mm), **Vereniging**, **Aftrekken** en **Doorsnijden** (het tweede volume wordt van het eerste afgetrokken; de tolerantie is hoe ver de driehoeken van de volume-engine van de exacte vlakken mogen liggen), **Afronding tussen vlakken** (de vlakken via hun nummer in het volume, 1 voor het eerste; een straal en, boven 0, een straal aan het einde), **Inhoud van volume** (mm³) en **Volume naar mesh** (om het te zien of in te bakken).

Een volume heeft een eigen poorttype: een punt of een getal kan niet op een volume-invoer worden aangesloten, en de stip blijft rood. De Boolean- en afrondingsnodes gebruiken de eigen volume-engine van het programma, die de eerste keer wordt geladen wanneer de editor opent.

## Fouten

Een node die zijn taak niet kan uitvoeren, zegt onder zijn naam in rood waarom ("De straal moet groter zijn dan nul."), en de nodes erna wachten. Dezelfde melding staat als probleem in het paneel Problemen, zodat u het daar kunt vinden.

## Elke node is een regel script

Druk op {{ui:Script}} om de graaf als CraftScript te zien: één regel per node, zoals `n3 = nd_circle(n2, n1, [0 0 1]);`. Pas de tekst aan en druk op {{ui:De graaf maken uit dit script}} om hem weer als graaf terug te brengen. Dezelfde `nd_`-functies werken in een CraftScript in PartCraft, zodat een graaf daar kan worden uitgevoerd, in een lus gezet of getest. Willekeurige getallen krijgen altijd een **seed**, zodat dezelfde graaf op elke computer hetzelfde resultaat geeft.

## Opgeslagen met het bestand

De graaf wordt in het onderdeelbestand opgeslagen (niet in de geschiedenis, dus Ongedaan maken in de editor heeft zijn eigen geschiedenis). De nodes maken krommen, vlakken en meshes naast het volume: ze wijzigen de features van het onderdeel niet.
