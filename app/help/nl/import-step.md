---
title: Een STEP-bestand openen en erop verder bouwen
summary: Breng het STEP-model van een leverancier of van een ander CAD-programma binnen in PartCraft als massief lichaam, als nieuw onderdeel of toegevoegd aan het huidige onderdeel, stel in welke kant omhoog is, en voeg schetsen en features eraan toe.
keywords: step, stp, importeren, step openen, ap203, ap214, ap242, leveranciersmodel, dom massief lichaam, geïmporteerd massief lichaam, omhoogas, z omhoog, y omhoog, driehoeken, gefacetteerd, samenstelling step
from: ca0eca5f
---

PartCraft opent STEP-bestanden (`.step` of `.stp`, AP203, AP214 en AP242) als **massieve lichamen** waarop u kunt schetsen, snijden en boren en die u kunt combineren met uw eigen features. Het lichaam heeft geen eigen geschiedenis: u kunt de afmetingen waarmee het is gemaakt niet wijzigen, u kunt er alleen aan toevoegen of eruit snijden.

Deze versie bouwt elk onderdeel met de meshkernel, dus een STEP-bestand wordt **als driehoeken gelezen**: vlakke vlakken blijven vlak, en gekromde vlakken (cilinders, kegels, bollen, torussen, B-splinevlakken) worden veel kleine vlakke vlakken. Het volume ligt binnen een fractie van een procent van het exacte volume. Gekromde vlakken exact bewaren vereist een exacte kernel, die in deze versie niet zit.

## Een STEP-bestand openen

1. Kies {{ui:Openen}} of druk op {{key:Mod+O}} en kies het `.step`- of `.stp`-bestand. Of sleep het naar de 3D-weergave.
2. PartCraft leest het bestand en toont wat het vond, bijvoorbeeld: "AP214-bestand: 1 massief lichaam, 10 vlakken, als driehoeken gelezen." Hieronder staan het aantal driehoeken, alles wat is weggelaten of samengevoegd, en of het resultaat sluit.
3. Controleer **Omhoog in het bestand**. Een STEP-bestand vermeldt zijn eigen eenheid (millimeter, inch, meter…); PartCraft zet die om naar millimeter, dus **Eenheden in het bestand** toont Millimeter, "het bestand zegt dat". **Grootte hier** toont hoe groot het wordt.
4. Kies {{ui:Openen als lichaam}} voor een leeg onderdeel, of {{ui:Aan dit onderdeel toevoegen}} / {{ui:Nieuw onderdeel}} wanneer het onderdeel al features heeft. Bij toevoegen vraagt PartCraft wat **Gebruik het om te** moet doen: toevoegen, snijden of alleen het overlappende deel houden.

Een feature **Imported1** verschijnt in de geschiedenis, en de statusbalk zegt bijvoorbeeld: "plate.step is een massief lichaam: 57995.937 mm³, 6 vlakke vlakken om op te schetsen."

## Een STEP-samenstelling

Een samenstelling komt binnen als **één lichaam**, met elk onderdeel waar het bestand het plaatst ("3 onderdelen die in het bestand zijn geplaatst, komen binnen waar ze staan"). Een onderdeel dat twee keer wordt gebruikt, komt twee keer binnen. De namen van de onderdelen en de boomstructuur van de samenstelling blijven niet behouden.

## Instellen welke kant omhoog is

De meeste CAD-programma's gebruiken Z omhoog; PartCraft gebruikt Y omhoog. Standaard draait PartCraft het bestand zo dat zijn Z-as hier omhoog wijst. Ligt het onderdeel op zijn zij nadat het is binnengekomen, selecteer dan **Imported1** en zet **Omhoog in het bestand** op **Y omhoog**. **Eenheden in het bestand** en **Gebruik het om te** kunnen daar ook worden gewijzigd; elke wijziging is één stap om ongedaan te maken.

## Erop verder bouwen

- Klik op een plat vlak van het lichaam en kies {{ui:Schets op dit vlak}}. De platte vlakken van het STEP-model behouden hun plaats wanneer het lichaam opnieuw wordt opgebouwd.
- Voeg snijden, gaten, uitstulpingen, patronen en spiegelingen toe zoals bij elk onderdeel.
- Controleer de grootte in het vak **Onderdeel**: volume, oppervlakte en grootte.

Afrondingen, afschuiningen en uitholling vereisen de exacte kernel, zoals bij elk onderdeel in deze versie ([De meshkernel](topic:solid-kernels)).

## Waar het wordt bewaard

De driehoeken worden **in** het bestand `.partcraft.json` opgeslagen, zodat het onderdeelbestand zelfstandig is: u hebt het STEP-bestand niet meer nodig.

## Meldingen

| Melding | Betekenis |
|---|---|
| '"part.stp" is geen STEP-bestand (het begint niet met ISO-10303-21).' | Het bestand is geen gewone STEP-tekst. Vraag de afzender om een AP203-, AP214- of AP242-STEP-bestand |
| "Het STEP-bestand kon niet worden gelezen: het gegevensdeel ontbreekt of is beschadigd." | Het bestand is afgebroken of beschadigd. Kopieer het opnieuw |
| "Het STEP-bestand bevat geen massief of oppervlaktelichaam: er is niets om binnen te halen." | Het bestand bevat alleen tekeningen, punten of gegevens. Vraag om een massief lichaam |
| "Dat STEP-bestand is te groot (meer dan 60 MB) om hier te importeren." en de andere grenzen van de lezer (items, vlakken, driehoeken) | Vereenvoudig het model aan de bron, of stuur onderdelen één voor één |
| "… beschadigde regels in het bestand zijn overgeslagen." | Sommige regels konden niet worden gelezen; de rest is binnengekomen. Controleer het lichaam |
| "… vlakken konden niet in driehoeken worden omgezet en zijn weggelaten." | Die vlakken laten gaten achter; PartCraft probeert ze te vullen. Sluit het lichaam niet, dan wordt het niet toegevoegd |
| "… vlakken van een soort die niet wordt gelezen (…) zijn overgeslagen." | Een zeldzaam oppervlaktetype. Vraag om het model met gewone of B-splineoppervlakken |
| "Het sluit niet …" | De vlakken vormen geen gesloten massief lichaam (een oppervlaktemodel, of vlakken die ontbreken). PartCraft toont de openingen en voegt niets toe |

## Grenzen

- Gekromde vlakken worden getekend en gemeten als vlakke facetten, zoals bij elk onderdeel in deze versie. PartCraft bewaart de platte vlakken, cilinders, kegels, bollen en torussen van het bestand bij het lichaam, zodat {{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} ze terugschrijft als echte oppervlakken, gaten als gaten, samen met de features die u toevoegt. Vlakken die het bestand als splines, uitvegingen of omwentelingsvlakken geeft, blijven facetten in de export. Een onderdeel dat vóór versie 0.9.1 is opgeslagen, heeft geen bewaarde vlakken: open het STEP-bestand opnieuw om ze te krijgen.
- {{ui:Exporteren}} › {{ui:DXF van de schets of het platte vlak}} met een gekozen plat vlak schrijft een rond gat van het bestand als echte cirkel.
- Kleuren, namen van lichamen, samenstellingsstructuur en PMI (toleranties in het bestand) worden niet gelezen.
- Naast STEP opent PartCraft STL-, OBJ- en 3MF-meshes ([Een STL-, OBJ- of 3MF-bestand openen](topic:open-meshes)) en `.3dm`-bestanden ([Een .3dm-model openen](topic:open-3dm-files)) als massieve lichamen. IGES en de eigen bestanden van andere programma's worden niet ondersteund.
- Een onderdeel met een STEP-massief dat is geïmporteerd door een build met de exacte kernel, bewaart de STEP-tekst; deze versie slaat die feature over ("nog niet beschikbaar"). Open het STEP-bestand opnieuw om het als driehoeken binnen te halen.
