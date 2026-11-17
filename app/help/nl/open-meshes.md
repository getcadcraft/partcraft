---
title: Een STL, OBJ of 3MF openen als volumelichaam
summary: Maak van een mesh van een scanner, een 3D-printsite of een ander programma een volume dat u kunt snijden, waaraan u kunt toevoegen en waarop u kunt schetsen; wat PartCraft onderweg repareert en wat niet kan.
keywords: stl, obj, 3mf, mesh, mesh naar volume, mesh omzetten, scan, waterdicht, repareren, gaten, openingen, eenheden, omhoog-as, geïmporteerd lichaam, platte vlakken
from: 7b948471
---

PartCraft opent STL-, OBJ- en 3MF-meshes als **volumelichamen**. Het lichaam werkt als elk ander volume: snijden, toevoegen, boren, patroon maken, gebruiken in een samenstelling of voor bewerking, en op de platte vlakken schetsen. Het heeft geen eigen geschiedenis: een mesh is alleen driehoeken, dus de maten kunnen niet worden gewijzigd, alleen worden toegevoegd of eruit gesneden.

## Een mesh openen

1. Kies {{ui:Openen}} of druk op {{key:Mod+O}}, en kies het `.stl`-, `.obj`- of `.3mf`-bestand. Of zet het op de 3D-weergave.
2. PartCraft leest het, repareert wat veilig kan en toont wat het vond: hoeveel driehoeken en punten, elke reparatie, en of de mesh nu **sluit**.
3. Controleer **Eenheden in het bestand** en **Omhoog in het bestand**. STL en OBJ zeggen hun eenheden niet, dus millimeter is de gok; een 3MF-bestand zegt het zelf. De regel **Grootte hier** toont de maat van het lichaam met uw keuze, zodat een onderdeel dat 25.4 keer te klein binnenkomt makkelijk te zien is (het was in inches).
4. Staat het onderdeel op het scherm leeg, kies {{ui:Openen als lichaam}}. Heeft het al features, kies **Gebruiken voor** (toevoegen aan het onderdeel, eruit snijden, of alleen de overlap houden), en daarna {{ui:Aan dit onderdeel toevoegen}}, of {{ui:Nieuw onderdeel}} om opnieuw te beginnen met de mesh.

Er verschijnt een feature **Imported1** in de geschiedenis. De statusbalk zegt bijvoorbeeld: "bracket.stl is een volumelichaam: 15200.512 mm³, 14 platte vlakken om op te schetsen."

## Wat PartCraft repareert

| Reparatie | Wat het betekent |
|---|---|
| Dubbele hoeken samengevoegd | Een STL herhaalt elke hoek voor elk van zijn driehoeken; ze worden samengevoegd tot één punt |
| Driehoeken zonder oppervlak verwijderd | Slierten waarvan de hoeken op één lijn liggen |
| Dubbele driehoeken verwijderd | Een driehoek die twee keer is geschreven, wordt één keer bewaard; twee die naar tegenovergestelde kanten wijzen (een binnenwand), worden allebei verwijderd |
| Kleine openingen gesloten | Randen die bijna samenkomen (binnen een duizendste van de grootte van het onderdeel) worden verbonden |
| Gaten gevuld | Een opening waarvan de rand vlak ligt, wordt gevuld, hoe groot ook; een vervormde alleen wanneer ze klein is |
| Driehoeken naar buiten gericht | Driehoeken die de verkeerde kant op wijzen, worden gedraaid zodat ze overeenkomen met hun buren, en het hele vlak wijst naar buiten |

## Wanneer een mesh niet sluit

Een volume heeft een oppervlak zonder openingen nodig. Wanneer PartCraft er geen kan sluiten, zegt het dialoogvenster hoeveel openingen en open randen er overblijven, en is er geen lichaam om toe te voegen. Sluit de openingen in het programma dat de mesh maakte, of exporteer hem opnieuw als gesloten (waterdichte) mesh, en open hem opnieuw.

PartCraft laat een opening staan wanneer vullen het verkeerd zou kunnen raden: een groot vervormd gat, of twee openingen in hetzelfde vlak (een ringvormig vlak dat ontbreekt, waarbij het vullen van elke rand het gat in het midden zou bedekken). Een rand die door meer dan twee driehoeken wordt gedeeld, wordt ook gemeld: zo'n oppervlak heeft geen duidelijke binnenkant.

## Op de platte vlakken schetsen

Platte gebieden van veel driehoeken worden samengevoegd tot één **plat vlak** per gebied, zodat een schets erop kan: klik het vlak en kies {{ui:Schets op dit vlak}}. Een vlak dat later wordt gesneden of waaraan iets wordt toegevoegd, blijft een vlak. Ronde gebieden (een gat, een afronding) blijven driehoeken: het zijn geen vlakken die u kunt kiezen, en de weergave tekent hun contour uit de hoek tussen de driehoeken.

## Later wijzigen

Selecteer **Imported1** om het bestand te zien waar het vandaan kwam, hoeveel driehoeken het heeft en wat er is gerepareerd. **Eenheden in het bestand**, **Omhoog in het bestand** en **Gebruiken voor** kunnen daar worden gewijzigd; elke wijziging is één stap ongedaan maken.

## Waar het wordt bewaard

De gerepareerde mesh wordt **in** het bestand `.partcraft.json` opgeslagen, dus het meshbestand is niet meer nodig. Een onderdeelbestand met een meshlichaam is versie 5: een oudere PartCraft weigert het op basis van de versie. Een mesh van 200,000 driehoeken voegt ongeveer 1.2 MB toe.

## Grenzen

- Maximaal 3 miljoen driehoeken en 200 MB in één bestand.
- Een lichaam uit een mesh wordt gebouwd door de meshkern. Met de exacte kern aan (alleen voor ontwikkelaars) meldt het dat en wordt het niet gebouwd.
- OBJ-materialen, texturecoördinaten en vrije-vormkrommen worden weggelaten; 3MF-kleuren, -materialen en -steunobjecten worden weggelaten (het dialoogvenster zegt hoeveel objecten er zijn overgeslagen).
- Het lichaam is zo fijn als de mesh: een grove STL geeft grove ronde vlakken. Gaten die u erin boort, zijn net zo rond als uw eigen features.
