---
title: Aan de slag met PartCraft
summary: Wat PartCraft nu kan, wat uw browser nodig heeft en een eerste onderdeel in tien minuten, van schets tot opgeslagen bestand.
keywords: start, eerste keer, snelstart, introductie, handleiding, eerste onderdeel, plaat, parametrisch, onderdeelmodelleerprogramma
from: 5f0a668d
---

PartCraft is de parametrische app voor onderdelen en samenstellingen in de CadCraft-familie. U tekent een 2D-schets, legt die vast met relaties en maten, maakt er een volume van met features zoals extruderen, omwentelen en gat, en wijzigt later elk getal: het onderdeel wordt opnieuw opgebouwd uit zijn geschiedenis. Onderdelen gaan daarna in samenstellingen, waar verbindingen ze plaatsen en u de beweging kunt controleren.

Wat deze versie doet:

| Taak | Wat u krijgt |
|---|---|
| Schetsen | Lijnen, rechthoeken, cirkels, bogen, punten en hartlijnen, met relaties en maten, en een live toestand: onder-, volledig of overgedefinieerd |
| Volumefeatures | Extruderen, uitsnijden, omwentelen, omwentelend uitsnijden, eenvoudige gaten en gaten met verzinking, lineaire en cirkelvormige patronen, spiegelen, afrondingen en afschuiningen op rechte randen tussen platte vlakken, en uithollingen en trekhoeken op platte vlakken. Uitvegen, loften en de andere features die een exacte kernel nodig hebben, zijn in deze versie nog niet beschikbaar: zie [Wat nog niet beschikbaar is](topic:not-built-yet) |
| Geschiedenis | Bewerk de getallen van elke feature, onderdruk, rol terug, herorden en verwijder, met ongedaan maken |
| Samenstellingen | Onderdelen verbonden door starre, draai- en schuifverbindingen, een clashcontrole en een bewegingscontrole |
| Tekeningen | Een A3-blad met drie aanzichten, een isometrisch aanzicht, een doorsnede, een detailaanzicht, totale maten, datums, toleranctiekaders en symbolen voor oppervlakteafwerking, geëxporteerd als pdf |
| Bestanden | Eigen onderdeel- en samenstellingsbestanden; STL, 3MF, gefacetteerd STEP, DXF en PDF eruit |

Alles draait in uw browser, op uw computer. **Er wordt niets geüpload.** Zie [Bestanden: openen, opslaan en exporteren](topic:files) voor waar bestanden naartoe gaan.

## Wat u nodig hebt

- Een actuele versie van Chrome, Edge, Firefox of Safari met **WebGL** (3D-graphics) en **WebAssembly** ingeschakeld. Beide staan standaard aan. Het volume wordt opgebouwd door een WebAssembly-meshkernel die met de app wordt geladen: zie [De meshkernel](topic:solid-kernels).
- Een muis is het makkelijkst. Een trackpad werkt, en aanraakschermen werken voor bekijken en eenvoudig schetsen: zie [Trackpad, aanraking en kleine schermen](topic:trackpad-and-touch).
- Een scherm van minstens 1280 pixels breed toont de hele werkbalk in één rij. Smallere vensters schuiven de werkbalk opzij; op een telefoon openen de panelen als bladen vanaf een balk onderaan.

Meer over browsers: [Browsers en computers](common:browsers).

:::note
PartCraft draait in de browser, en op de desktop binnen CadCraft Studio. Opslaan in de cloud is nog niet beschikbaar: u opent onderdelen vanaf uw computer en slaat ze als bestanden weer op uw computer op.
:::

## PartCraft openen

1. Open PartCraft.
2. Wacht terwijl het scherm "De volume-kernel wordt geladen…" zegt. De eerste keer duurt dat even.
3. U ziet een lege 3D-weergave met drie basisvlakken, links de geschiedenis ("Onderdeel1", daarna Voorvlak, Bovenvlak, Rechtervlak) en in de weergave een kader met de kop "Een onderdeel beginnen".
4. De chip rechts in de statusbalk zegt "Meshkern": PartCraft bouwt in deze versie elk onderdeel op met de meshkernel, dus ronde vlakken zijn platte facetten. U kunt meteen beginnen met modelleren.

Als de weergave zegt dat de browser geen 3D kan tonen, of dat de kernel niet is geladen, zie dan [Problemen oplossen](topic:troubleshooting#the-app-does-not-start).

## Uw eerste onderdeel: een plaat met een gat

U maakt een plaat van 60 × 40 mm, 10 mm dik, met een gat van 6 mm erdoorheen. De eenheden zijn millimeters.

### De omtrek schetsen

1. Klik links in de geschiedenis op **Voorvlak**. Het vlak licht op in de weergave.
2. Kies {{ui:Schets}} in de werkbalk, of druk op {{key:S}}. De weergave draait zodat u recht op het vlak kijkt en het gereedschap Lijn is actief.
3. Druk op {{key:R}} voor het gereedschap Rechthoek.
4. Beweeg de aanwijzer naar de oorsprong (de kleine rode cirkel met een kruis). Een klein vierkant laat zien dat hij vastklikt. Klik.
5. Beweeg omhoog en naar rechts en klik opnieuw. U hebt een rechthoek. De lijnen zijn blauw: blauw betekent dat ze nog kunnen bewegen.

### Maten geven

1. Druk op {{key:D}} voor het gereedschap Maatvoering.
2. Klik op de bovenste lijn en klik dan een stukje erboven. Een getalvak opent met de huidige lengte.
3. Typ `60` en druk op {{key:Enter}}. De rechthoek wordt 60 mm breed.
4. Klik op de linkerlijn en klik dan een stukje links ervan. Typ `40` en druk op {{key:Enter}}.

De chip linksboven in de weergave zegt nu **Volledig gedefinieerd** en de lijnen worden inkt (zwart in het thema Papier, licht in het thema Model). Elk punt en elke maat ligt vast.

:::tip
Als u de rechthoek weg van de oorsprong bent begonnen, zegt de chip nog "Onvolledig gedefinieerd · 2 vrijheidsgraden". Druk op {{key:S}} voor Selecteren, klik op een hoek, klik met {{key:Shift}} op de oorsprong en kies dan {{ui:• Samenvallend}} in het rechterpaneel.
:::

### Extruderen

1. Kies {{ui:Afsluiten}} in de werkbalk, of druk op {{key:Esc}} totdat de schets sluit (meestal twee keer).
2. Kies {{ui:Extruderen}}. Er verschijnt een volume van 10 mm. "Extrusie1" wordt aan de geschiedenis toegevoegd, met "Schets1" ingesprongen eronder.
3. Het rechterpaneel toont de instellingen van de extrusie. Om de dikte te wijzigen typt u een nieuw getal in **Diepte (mm)** en drukt u op {{key:Enter}} of {{key:Tab}}. Het onderdeel wordt meteen opnieuw opgebouwd.

### Het gat toevoegen

1. Klik op het grote platte vlak aan de voorkant van de plaat (het uiteinde van de extrusie). Het hele vlak licht op en het rechterpaneel zegt **Vlak**.
2. Kies {{ui:Schets op dit vlak}} in het rechterpaneel.
3. Druk op {{key:P}} voor het gereedschap Punt en klik dicht bij het midden van het vlak.
4. Kies {{ui:Afsluiten}}.
5. Kies {{ui:Gat}}. Een gat van 6 mm gaat dwars door de plaat. Wijzig **Diameter (mm)** in het rechterpaneel als u wilt.

Het vak **Onderdeel** linksonder toont nu een volume, een oppervlakte, de afmeting (60 × 40 × 10 mm) en "Doorgaande gaten: 1".

### Opslaan

1. Druk op {{key:Mod+S}} of kies {{ui:Opslaan}}.
2. Uw browser downloadt `Onderdeel1.partcraft.json` naar zijn downloadmap. Het bestand bevat de hele geschiedenis: open het weer met {{ui:Openen}} om verder te bewerken.

Om het onderdeel eerst te hernoemen klikt u op lege ruimte in de weergave zodat niets geselecteerd is en typt u een nieuwe **Naam** in het rechterpaneel.

## Waar u daarna heen gaat

- [Uw eerste schets tekenen](topic:sketch-basics) en [Een schets volledig definiëren](topic:relations-dimensions) leggen de schetser goed uit.
- [Een onderdeel wijzigen via zijn geschiedenis](topic:edit-history) laat zien hoe u bewerkt wat u hebt gebouwd.
- [Afronden, afschuinen en uithollen](topic:fillet-chamfer-shell) en [Een tekening maken](topic:drawing-pdf) maken het onderdeel af. [Wat nog niet beschikbaar is](topic:not-built-yet) noemt wat deze versie niet doet, zoals uitvegen en loften.
- [Afkomstig van een ander parametrisch modelleerprogramma](topic:coming-from) noemt de gewoonten die hier anders werken.
- [Toetsen en muis](topic:keyboard) is de volledige lijst met sneltoetsen.
- [Deze Help gebruiken](common:help).
