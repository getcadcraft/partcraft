---
title: Aan de slag met PartCraft
summary: Wat PartCraft nu doet, wat uw browser nodig heeft, en een eerste onderdeel in tien minuten, van schets tot opgeslagen bestand.
keywords: aan de slag, eerste start, snelstart, introductie, zelfstudie, eerste onderdeel, plaat, parametrisch, onderdeelmodelleur
from: 7d43283f
---

PartCraft is de parametrische onderdeel- en samenstellingsapp van de CadCraft-familie. U tekent een 2D-schets, legt die vast met relaties en maten, maakt er een volume van met features zoals extruderen, omwentelen en gat, en wijzigt later elk getal: het onderdeel wordt opnieuw opgebouwd uit zijn geschiedenis. Onderdelen gaan daarna naar samenstellingen, waar verbindingen ze plaatsen en u de beweging kunt controleren.

Wat deze versie doet:

| Taak | Wat u krijgt |
|---|---|
| Schetsen | Lijnen, rechthoeken, cirkels, bogen, punten en middellijnen, met relaties en maten, en een live status: onvolledig, volledig of overdefinieerd |
| Volumefeatures | Extrusie, uitsnijding, omwenteling, omwentelingsuitsnijding, eenvoudige en verzonken gaten, lineaire en cirkelvormige patronen, spiegelen, afrondingen en afschuiningen op rechte randen tussen vlakke vlakken, en uitholling en trekhoeken op vlakke vlakken. Vegen, lofts en de andere features die een exacte kernel nodig hebben, zijn in deze versie nog niet beschikbaar: zie [Wat nog niet beschikbaar is](topic:not-built-yet) |
| Geschiedenis | De getallen van elke feature wijzigen, onderdrukken, terugdraaien, herordenen en verwijderen, met ongedaan maken |
| Samenstellingen | Onderdelen verbonden door starre, draaiende en schuivende verbindingen, een botsingscontrole en een bewegingscontrole |
| Tekeningen | Een A3-blad met drie aanzichten, een isometrie, een doorsnede, een detailaanzicht, totaalmaten, datums, kaders voor geometrische toleranties en symbolen voor oppervlakteruwheid, geëxporteerd als PDF |
| Bestanden | Eigen onderdeel- en samenstellingsbestanden; uitvoer naar STL, 3MF, exacte STEP, DXF en PDF |

Alles draait in uw browser, op uw computer. **Er wordt niets geüpload.** Zie [Bestanden: openen, opslaan en exporteren](topic:files) voor waar bestanden terechtkomen.

## Wat u nodig hebt

- Een actuele Chrome, Edge, Firefox of Safari met **WebGL** (3D-graphics) en **WebAssembly** ingeschakeld. Beide staan standaard aan. De volumegeometrie wordt gebouwd door een WebAssembly-mesh-kernel die met de app laadt: zie [De mesh-kernel](topic:solid-kernels).
- Een muis werkt het makkelijkst. Een trackpad werkt, en touchschermen werken om te bekijken en voor eenvoudig schetsen: zie [Trackpad, aanraken en kleine schermen](topic:trackpad-and-touch).
- Een scherm van minstens 1280 pixels breed toont de hele werkbalk op één rij. Smallere vensters laten de werkbalk opzij scrollen; op een telefoon openen de panelen als vellen vanuit een balk onderaan.

Meer over browsers: [Browsers en computers](common:browsers).

:::note
PartCraft draait in de browser, en op het bureaublad binnen CadCraft Studio. Opslaan in de cloud is nog niet beschikbaar: u opent onderdelen van uw computer en slaat ze als bestanden terug naar uw computer.
:::

## PartCraft openen

1. Open PartCraft.
2. Wacht terwijl het scherm "De volumekernel wordt geladen…" toont. Dit duurt even de eerste keer.
3. U ziet een lege 3D-weergave met drie basisvlakken, de geschiedenis links ("Part1", daarna Voorvlak, Bovenvlak, Rechtervlak) en een blok in het beeld met de kop "Start een onderdeel".
4. Het chipje rechts op de statusbalk zegt "Mesh-kernel": PartCraft bouwt in deze versie elk onderdeel met de mesh-kernel, dus ronde vlakken zijn platte facetten. U kunt meteen beginnen met modelleren.

Als de weergave zegt dat de browser geen 3D kan tonen, of dat de kernel niet is geladen, zie [Problemen oplossen](topic:troubleshooting#the-app-does-not-start).

## Uw eerste onderdeel: een plaat met een gat

U maakt een plaat van 60 × 40 mm, 10 mm dik, met een gat van 6 mm erdoor. Eenheden zijn millimeters.

### De contour schetsen

1. Klik op **Voorvlak** in de geschiedenis links. Het vlak licht op in het beeld.
2. Kies {{ui:Schets}} in de werkbalk, of druk op {{key:S}}. De weergave kijkt recht op het vlak, en het hulpmiddel Lijn is actief.
3. Druk op {{key:R}} voor het hulpmiddel Rechthoek.
4. Beweeg de aanwijzer naar de oorsprong (het kleine rode cirkeltje met een kruis). Een klein vierkantje laat zien dat het vastklikt. Klik.
5. Beweeg omhoog en naar rechts en klik opnieuw. U heeft een rechthoek. De lijnen zijn blauw: blauw betekent dat ze nog kunnen bewegen.

### Maten geven

1. Druk op {{key:D}} voor het hulpmiddel Maatvoering.
2. Klik op de bovenste lijn, en klik daarna een beetje erboven. Er opent een getalvak met de huidige lengte.
3. Typ `60` en druk op {{key:Enter}}. De rechthoek wordt 60 mm breed.
4. Klik op de linkerlijn, en klik daarna een beetje links ervan. Typ `40` en druk op {{key:Enter}}.

De chip linksboven in de weergave zegt nu **Volledig gedefinieerd** en de lijnen worden inktkleurig (zwart op het thema Papier, licht op het thema Model). Elk punt en elke maat is vastgelegd.

:::tip
Als u de rechthoek weg van de oorsprong begon, zegt de chip nog steeds "Onvolledig gedefinieerd · 2 vrijheidsgraden". Druk op {{key:S}} voor Selecteren, klik op één hoek, {{key:Shift}}+klik op de oorsprong, en kies daarna {{ui:• Samenvallend}} in het rechterpaneel.
:::

### Extruderen

1. Kies {{ui:Afsluiten}} in de werkbalk, of druk op {{key:Esc}} totdat de schets sluit (meestal twee keer).
2. Kies {{ui:Extruderen}}. Er verschijnt een volume van 10 mm. "Extrusie1" wordt aan de geschiedenis toegevoegd, met "Schets1" ingesprongen eronder.
3. Het rechterpaneel toont de instellingen van de extrusie. Om de dikte te wijzigen, typt u een nieuw getal in **Diepte (mm)** en drukt u op {{key:Enter}} of {{key:Tab}}. Het onderdeel wordt meteen opnieuw opgebouwd.

### Het gat toevoegen

1. Klik op het grote vlakke vlak aan de voorkant van de plaat (het einde van de extrusie). Het hele vlak licht op en het rechterpaneel zegt **Vlak**.
2. Kies {{ui:Schets op dit vlak}} in het rechterpaneel.
3. Druk op {{key:P}} voor het hulpmiddel Punt en klik in de buurt van het midden van het vlak.
4. Kies {{ui:Afsluiten}}.
5. Kies {{ui:Gat}}. Er gaat een gat van 6 mm door de plaat. Wijzig **Diameter (mm)** in het rechterpaneel als u wilt.

Het vak **Onderdeel** linksonder toont nu een volume, een oppervlakte, de afmeting (60 × 40 × 10 mm) en "Doorgaande gaten: 1".

### Opslaan

1. Druk op {{key:Mod+S}} of kies {{ui:Opslaan}}.
2. Uw browser downloadt `Part1.partcraft.json` naar de downloadmap. Het bestand bevat de hele geschiedenis: open het weer met {{ui:Openen}} om verder te bewerken.

Om het onderdeel eerst een andere naam te geven, klikt u op lege ruimte in de weergave zodat niets geselecteerd is, en typt u een nieuwe **Naam** in het rechterpaneel.

## Waar u verder kunt lezen

- [Uw eerste schets tekenen](topic:sketch-basics) en [Een schets volledig definiëren](topic:relations-dimensions) leggen de schetser goed uit.
- [Een onderdeel wijzigen via zijn geschiedenis](topic:edit-history) laat zien hoe u wat u bouwde bewerkt.
- [Afronden, afschuinen en uithollen](topic:fillet-chamfer-shell) en [Een tekening maken](topic:drawing-pdf) maken het onderdeel af. [Wat nog niet beschikbaar is](topic:not-built-yet) somt op wat deze versie niet doet, zoals vegen en lofts.
- [Overstappen van een andere parametrische modeleerder](topic:coming-from) somt de gewoonten op die hier anders werken.
- [Toetsen en muis](topic:keyboard) is de volledige lijst met sneltoetsen.
- [Deze help gebruiken](common:help).
