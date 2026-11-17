---
title: Vrije vormen met Form en vlakfuncties
summary: Duw en trek aan een gladde besturingskooi in de werkomgeving Form, maak randen scherp, gebruik symmetrie, controleer en werk af tot een exact volume of vlak, en vul, loft, hecht, verdik, offset, verleng en snijd vlakken in Ontwerp. Wat exact is en wat benaderd wordt.
keywords: form, vrije vorm, T-spline, subdivisie, Catmull-Clark, kooi, quadbal, knik, symmetrie, zebra, kromming, vlak, opvulling, lofvlak, hechten, naaien, verdikken, offsetvlak, verlengen, bijsnijden
from: 0d326ef4
---

:::note
**Nog niet beschikbaar in deze versie.** Het afwerken van een vorm in het onderdeel en de vlakfuncties hebben een exacte geometriekernel nodig, die deze versie van PartCraft niet heeft: hij bouwt elk onderdeel met de mesh-kernel. [Wat nog niet beschikbaar is](topic:not-built-yet) zegt wat u in plaats daarvan kunt doen. De rest van deze pagina beschrijft ze zoals ze werken met een exacte kernel.
:::

De werkomgeving **Form** maakt organische vormen. U bewerkt een **kooi**, een grof rooster van hoeken, randen en vlakken. De vorm is het gladde oppervlak dat de kooi bestuurt (het Catmull–Clark-limietvlak), dus als u één hoek verplaatst, buigt het oppervlak er zacht omheen. Als het er goed uitziet, voegt **Afwerking** het toe aan de geschiedenis van het onderdeel als een *Form*-feature, en de exacte kernel maakt er echte B-splinevlakken van. Daarna kunt u het afronden, doorsnijden, aan andere features koppelen en als STEP exporteren.

Kies **Form** in de lijst **Werkomgeving** links op de werkbalk.

## Een kooi beginnen

1. Stel **Grootte** en **Verdelingen** in het rechterpaneel in. Verdelingen is het aantal vlakken per zijde.
2. Klik op {{ui:Blok}}, {{ui:Quadbal}} of {{ui:Vlak}} in de werkbalk. Het paneel heeft ook **Cilinder**, **Torus** en **Vlakken door klikken**.

- Een **quadbal** is een blokkooi die zo is ingepast dat de hoekpunten op een bol liggen. Tussen die punten ligt het oppervlak iets binnen de bol: ongeveer 0.4 % minder volume bij 2 verdelingen.
- Een **vlak** is open, dus het wordt een oppervlaklichaam (zie "Vlakfuncties in Ontwerp" hieronder).
- **Vlakken door klikken**: klik 4 punten op het bovenste (grond)vlak of op hoeken van de kooi om één vlak te maken. Vlakken die hoeken delen, sluiten aan. Druk na 3 punten op {{key:Enter}} voor een driehoek, of op {{key:Esc}} om te stoppen.

Uw onafgewerkte kooi wordt opgeslagen met het onderdeelbestand, dus u kunt het bestand sluiten en later verdergaan.

## Kiezen en verplaatsen

- Klik op een hoek, rand of vlak van de kooi. {{key:Shift}}+klik voegt items toe of haalt ze weg. {{key:Esc}} wist de selectie.
- Een gizmo verschijnt in het midden van de selectie. Sleep een pijl om langs die as te verplaatsen, of een vierkant om in dat vlak te verplaatsen. Druk op {{key:W}} om te verplaatsen, {{key:E}} om te roteren en {{key:R}} om te schalen, of gebruik de knoppen in het paneel. {{ui:Gizmo}} in de werkbalk wisselt tussen deze modi.
- **Zachte uitloop** (mm) trekt ook de hoeken binnen die afstand mee, met een vloeiende uitdoving tot niets aan de rand van die afstand.
- Elke sleepactie is één stap ongedaan maken: {{key:Ctrl+Z}} en {{key:Ctrl+Y}} werken zoals gewoonlijk.

## De kooi wijzigen

De knoppen **Wijzigen** in het paneel werken op de selectie:

| Knop | Wat het doet |
|---|---|
| {{ui:Extrude}} | Gekozen vlakken schuiven uit met de **Extrusieafstand**, langs hun normalen, met nieuwe zijvlakken. Gekozen open randen maken nieuwe vlakken naar buiten. |
| {{ui:Edge loop}} / Randlus invoegen | Splitst de ring van vierzijdige vlakken die de gekozen rand kruist, halverwege. Meer lussen geven strakkere krommen. |
| Punt invoegen | Voegt een hoek toe in het midden van de gekozen rand. |
| Onderverdelen | Splitst elk gekozen vlak in vierzijdige vlakken rond het midden. |
| Brug | Verbindt twee gekozen vlakken, of twee openingen (kies één open rand op elk), met een buis van vlakken. Beide hebben evenveel randen nodig. |
| Gat vullen | Sluit de opening door de gekozen open rand met één vlak. |
| Lassen | Voegt de gekozen hoeken samen tot één, in hun midden. |
| Vlak maken | Verplaatst de gekozen hoeken naar het vlak dat ze het best past. |
| Verwijderen | Verwijdert de gekozen vlakken, randen (twee vlakken worden één) of hoeken. |

## Scherpe randen, symmetrie en weergave

- {{ui:Knik}} maakt de gekozen randen scherp. **Knikgewicht** 10 is volledig scherp. Een kleiner gewicht blijft scherp voor zoveel verfijningsstappen en wordt dan zacht, wat een strakke ronding geeft in plaats van een harde vouw. **Ontknikken** maakt ze weer glad. **Scherpe hoek** vastzet een hoek, zodat het oppervlak er met een punt doorheen gaat.
- **Symmetrie** spiegelt de kooi over X, Y of Z = 0. Het houdt de positieve kant, spiegelt die en voegt de twee helften samen. Daarna gebeurt een wijziging aan één kant ook aan de andere. Hoeken op het spiegelvlak blijven erop liggen.
- {{ui:Weergave}} schakelt tussen **Glad** (het oppervlak dat de feature wordt) en **Blok** (de kooivlakken zelf).
- **Analyse**: **Zebrastrepen** kaatsen gestreept licht van de huidige weergave. Ze buigen vloeiend over een glad oppervlak en breken bij een knik. **Gemiddelde kromming** kleurt bolle delen rood, holle delen blauw en vlakke delen wit. Ze wordt gemeten op het getoonde mesh met de cotangensformule, dus het is een richtlijn, geen meting.

## Controleren en afwerken

- **Exact controleren** zet de kooi om in de exacte kernel zonder uw onderdeel te wijzigen. Het meldt hoeveel B-splinepatches de kooi maakt, hoeveel er exact zijn, en of het resultaat een gesloten, geldig volume is, plus het volume.
- {{ui:Afwerking}} voegt een *Form*-feature toe aan de geschiedenis, of werkt de vorm bij die u bewerkte, en brengt u terug naar Ontwerp. Een gesloten kooi wordt een volume. De **Bewerking** in het paneel Ontwerp kan Nieuw lichaam, Samenvoegen, Snijden of Doorsnede zijn. Een open kooi wordt een oppervlaklichaam.
- Om een vorm later te wijzigen, selecteert u hem in de geschiedenis en klikt u op **Bewerken in Form**. Het gebouwde lichaam is verborgen terwijl u de kooi bewerkt.
- **Wegwerpen** gooit de kooi weg zonder de geschiedenis aan te raken.

## Wat exact is en wat benaderd wordt

Elk vierzijdig vlak van de kooi, indien nodig verfijnd, wordt één bicubische B-splinepatch.

- Waar elke hoek van een vlak *regulier* is (vier randen komen samen binnen het oppervlak, of drie op een open rand of langs een knik), is de patch **exact** het subdivisieoppervlak. De tests controleren dit tot 1e-9 mm.
- Rond een **uitzonderlijk punt** (drie, vijf of meer randen die samenkomen, een hoek van een drie- of vijfzijdig vlak, of het einde van een knik) bestaat geen exacte polynomiale patch. Daar neemt de patch het exacte punt en raakvlak op die hoek en de randkrommen van de buren, zodat de patches nog steeds zonder opening aansluiten. Raaklijncontinuïteit over de randen die in het punt samenkomen is benaderd. Het Form-paneel en het paneel van de feature geven de grootste hoek, meestal onder 2°. Een hoger **Niveau** in het paneel van de feature maakt deze patches kleiner en dichter.
- Scherpe knikken zijn echte randen van het volume, dus u kunt ze afronden.
- Elke patch is een eigen vlak, dus een vorm heeft veel vlakken en er worden lijnen tussen getekend.

## Vlakfuncties in Ontwerp

De vlakcommando's staan in het menu {{ui:Meer}} van Ontwerp, onder de features. Ze hebben de exacte kernel nodig. Oppervlaklichamen worden doorzichtig blauw getekend. Ze maken geen deel uit van het volume totdat u ze verdikt of hecht.

| Commando | Wat het doet |
|---|---|
| Patch | Vult een gesloten lus van randen. Houd eerst {{key:Shift}} ingedrukt en klik op de randen van het volume, of selecteer een oppervlaklichaam om de opening te vullen. **Raaklijn (G1)** laat de patch vloeiend op dat vlak aansluiten. |
| Lofvlak | Een vlak door één keten van krommen per schets (open of gesloten), in volgorde van de geschiedenis. |
| {{ui:Stitch}} | Naait oppervlaklichamen langs hun gedeelde randen. Als ze sluiten, wordt het resultaat een volume, met een Bewerking zoals andere features. |
| {{ui:Thicken}} | Geeft een oppervlaklichaam een dikte: langs zijn normaal, ertegenin, of half in elke richting. Het resultaat is een volume. |
| Offsetvlak | Een kopie van een oppervlaklichaam verplaatst langs zijn normalen. Het origineel blijft. |
| Vlak verlengen | Laat een vlak met één vlak groeien voorbij de randen die u kiest. |
| {{ui:Trim surface}} | Snijdt een oppervlaklichaam waar een ander oppervlaklichaam of het volume het kruist. Klik op **Kies een punt op het stuk** om te kiezen welk stuk u behoudt, of behoud alles anders. |

Hechten, Verdikken, Verlengen en Bijsnijden gebruiken het oppervlaklichaam waarmee ze beginnen op. Latere features gebruiken het nieuwe.

Beperkingen nu: vormen met meerdere losse gesloten stukken worden niet in één volume omgezet; regelmatige gebieden worden niet samengevoegd tot grotere vlakken; en zie [Wat nog niet beschikbaar is](topic:not-built-yet).
