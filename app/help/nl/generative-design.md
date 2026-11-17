---
title: Een vorm laten groeien uit belastingen (Generatief)
summary: Kies de vlakken die vast zijn en belast worden, gebieden om te behouden en vrij te houden, doelvolumes en materialen, en genereer uitkomsten: de stijfste vormen die per volume zijn gevonden, opnieuw gecontroleerd als volumes, vergeleken in een tabel en gedownload als STL, STEP of een nieuw onderdeel.
keywords: generatief ontwerp, topologie-optimalisatie, topologieoptimalisatie, SIMP, lichtgewicht, rooster, organische vorm, uitkomsten, vergelijken, massa, volumefractie, behouden, binnenhouden, obstakel, vrijhouden, ontwerpruimte, minimale staafdikte, STL, 3D-printen
from: 5b91fa8e
---

De werkomgeving Generatief verwijdert materiaal dat de belastingen niet nodig hebben. U zegt waar het onderdeel vastzit en belast wordt, wat moet blijven staan en wat vrij moet blijven; PartCraft vindt de stijfste vorm voor elk doelvolume (**topologie-optimalisatie**), controleert elke vorm opnieuw als volume met het echte materiaal, en toont de uitkomsten naast elkaar. Het werkt op de benoemde vlakken die de mesh-kernel aan het onderdeel geeft (zie [De mesh-kernel](topic:solid-kernels)).

Kies **Generatief** in het vak **Werkomgeving**. Uw onderdeel wordt niet gewijzigd; de studie wordt opgeslagen in het onderdeelbestand.

## Een studie opzetten

1. Druk op **Nieuwe studie** in het rechterpaneel.
2. **Ruimte**: *Het onderdeel zoals het is* verwijdert materiaal uit uw onderdeel; *Een blok rond het onderdeel* laat een vorm groeien in een blok dat groter is dan het onderdeel, met de **Blokmarge**.
3. **Elementgrootte**: laat het leeg voor een automatische grootte (ongeveer 8,000 kubussen), of typ er een. Fijnere groottes geven fijnere vormen en duren langer.
4. **Minimale staaf**: staven die dunner zijn dan ongeveer het dubbele hiervan vormen zich niet. Leeg betekent anderhalve kubus.
5. Vink één tot zes **Doelvolumes** aan (het aandeel van de ontwerpruimte dat de vorm mag vullen) en één tot vier **Materialen**. Elk volume wordt één keer gegenereerd; elk materiaal wordt op die vorm gecontroleerd (de stijfste vorm hangt niet af van het materiaal, maar haar massa, spanning en veiligheidsfactor wel).

## Doelen

- {{ui:Vast}}: klik op de vlakken die vastgehouden worden. Een **Wrijvingsloos vlak** uit de lijst **Toevoegen** in het paneel houdt een vlak alleen in het eigen vlak vast (gebruik dit voor symmetrievlakken).
- {{ui:Kracht}}: klik op de belaste vlakken, typ daarna de totale kracht en kies de richting in het paneel. **Druk** staat in de lijst **Toevoegen**.
- {{ui:Behouden}}: klik op vlakken waarvan de omgeving massief moet blijven, en stel in hoe diep (**Massief houden binnen**), bijvoorbeeld rond boutgaten. De vlakken die u vastzet of belast, blijven altijd behouden.
- {{ui:Obstakel}}: klik op vlakken waarvan de omgeving leeg moet blijven, en stel in hoe ver (**Leeg houden binnen**), bijvoorbeeld ruimte voor een as of gereedschap.

Druk op **Selectie gereed** of op {{key:Esc}} na het klikken op vlakken. Groene en rode tinten tonen de gebieden.

## Genereren en vergelijken

Druk op {{ui:Genereren}}. Het paneel toont de voortgang en de resterende tijd; **Stoppen** annuleert. Elke uitkomst verschijnt in de tabel **Uitkomsten**: doelvolume, materiaal, **massa**, **grootste spanning**, **grootste verplaatsing** en **veiligheidsfactor** (vloeigrens ÷ spanning), allemaal uit het opnieuw berekenen van de vorm als massieve kubussen met het echte materiaal.

Kies een uitkomst om die in het beeld te zien (het onderdeel is verborgen; vink **Toon het onderdeel erdoorheen** aan om beide te zien). Onder de tabel: hoeveel iteraties het kostte en of het tot rust kwam, de stijfheid als volume vergeleken met de eigen waarde van de optimalisator, en het oppervlak.

## Een uitkomst gebruiken

- **STL**: een gesloten driehoeksmesh, klaar voor 3D-printen.
- **STEP (gefacetteerd)**: hetzelfde oppervlak als een STEP-volume van platte vlakken.
- **Nieuw onderdeelbestand**: een PartCraft-onderdeel waarvan de enige feature de uitkomst is als geïmporteerd volume. Open het om erop te schetsen, gaten te snijden of het te controleren in Simulatie. Het is gefacetteerd (duizenden platte vlakken), geen bewerkbare vorm.
- **Voeg toe aan dit onderdeel** voegt de uitkomst aan het onderdeel toe; het is alleen aan voor een blokontwerpruimte (met het onderdeel zelf als ruimte ligt de uitkomst binnen het onderdeel).

**Nieuw onderdeelbestand** en **Voeg toe aan dit onderdeel** zijn in deze versie nog niet beschikbaar: de uitkomst wordt een geïmporteerd volume, en dat heeft een exacte kernel nodig. De downloads STL en STEP (gefacetteerd) werken wel.

## Hoe betrouwbaar is het

- Het optimaliseert **stijfheid** voor het gegeven volume. Er zijn nog geen spanningsgrenzen en geen fabricageregels (overhangen, freesrichtingen, minimale gatgroottes): controleer een gekozen uitkomst in [Simulatie](topic:simulation) en pas aan.
- Dunne staven die één of twee kubussen breed zijn, zijn benaderingen: gebruik een kleinere elementgrootte voor slanke onderdelen.
- De methode is SIMP met een dichtheidsfilter, een drempelprojectie en optimaliteitscriteria-updates; de gemelde spanning en doorbuiging zijn van de uitkomst als kubussen, wat eerlijk maar grof is bij scherpe hoeken.

## Gerelateerd

- [Spanning en doorbuiging controleren (Simulatie)](topic:simulation)
- [Exporteren voor printen, STEP en DXF](topic:export-files)
- [Wat nog niet beschikbaar is](topic:not-built-yet)
