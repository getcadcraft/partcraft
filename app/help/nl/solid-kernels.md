---
title: De meshkernel
summary: Deze versie van PartCraft bouwt elk onderdeel op met een meshkernel die in uw browser draait. Wat dat betekent voor ronde vlakken, volumes en bestanden, hoe u ziet dat hij werkt en welke features op een exacte kernel wachten.
keywords: kernel, mesh, manifold, exact, b-rep, gefacetteerd, krommen, opencascade, occt, afronden vereist exact, niet beschikbaar, offline, webassembly
from: 68d32d16
---

Een geometriekernel is de engine die uw geschiedenis omzet in een volume. Deze versie van PartCraft heeft er een: de **meshkernel** (manifold-3d). Hij draait op uw computer als een klein WebAssembly-programma en is een ogenblik na het openen van de app klaar. Er wordt niets van uw onderdeel ergens naartoe gestuurd.

| | Meshkernel |
|---|---|
| Ronde vormen | Platte facetten. **Krommen** in het onderdeelpaneel bepaalt hoe fijn |
| Volumes en oppervlakten | Van het gefacetteerde volume, bij ronde onderdelen een beetje te laag |
| Schetsen, extruderen, uitsnijden, omwentelen, gaten, patronen, spiegelen, referentievlakken | Ja |
| Afronden en afschuinen | Op rechte randen tussen platte vlakken; afrondingen die samenkomen, worden op verstek gezet |
| Uithollen en trekhoek | Uithollen opent platte vlakken (exacte wanddikte); trekhoek kantelt platte vlakken |
| Exports | STL, 3MF, STEP (gefacetteerd), tekening-pdf en DXF |
| Tekenaanzichten | Getekend vanuit de facetten, doorsneden inbegrepen |
| Vlakken en randen | Benoemd en bekend naar soort (plat, cilinder, kegel, bol, torus; recht, cirkel), overgenomen uit de schetsen: de werkomgevingen Simulatie, Generatief en Fabricage, Meten, kiezen en de gatentabel gebruiken ze |

De chip rechts in de statusbalk zegt **Meshkern** terwijl hij uw onderdeel opbouwt.

## Wat op een exacte kernel wacht

Een exacte (B-rep) kernel behoudt echte cirkels, cilinders en kegels, en gladde afrondingen op elke rand; uitvegen, loften, oppervlakken, plaatwerk, ribben, meerdere lichamen, STEP-import en exacte STEP-export zijn erop gebouwd. Eerdere labversies van PartCraft gebruikten daarvoor OpenCascade. De licentie ervan (de LGPL) past niet bij deze uitgave, waarin elke app Apache-2.0 is en alleen bibliotheken met een permissieve licentie gebruikt, dus is hij niet inbegrepen. Hieraan hangt geen datum.

Tot die tijd zeggen die features **Nog niet beschikbaar** als u ze kiest: de statusbalk geeft de reden en de tooltips van hun knoppen eindigen met "nog niet beschikbaar (heeft een exacte kernel nodig)". [Wat nog niet beschikbaar is](topic:not-built-yet) noemt ze allemaal met wat u in plaats daarvan kunt doen.

Een onderdeel dat in een eerdere versie ermee is gemaakt, opent nog steeds. Die features blijven in de geschiedenis staan, gemarkeerd als niet beschikbaar (houd de aanwijzer erboven voor de reden), de rest van het onderdeel wordt opgebouwd en opslaan bewaart ze ongewijzigd.

## Ronde vlakken en Krommen

De meshkernel tekent een cirkel als veelhoek. **Krommen** in het onderdeelpaneel bepaalt hoeveel zijden een volledige cirkel krijgt; meer zijden zien er gladder uit en meten dichter bij de ware waarde, en kosten meer tijd om op te bouwen. Volumes, oppervlakten en afstanden uit {{ui:Meten}} gelden voor dit gefacetteerde volume: bij een gat of een nok zijn ze een beetje kleiner dan die van de ronde vorm.

## Online en offline

De meshkernel maakt deel uit van de eigen download van de app. Om zonder verbinding te werken slaat u PartCraft op voor offline gebruik terwijl u online bent: kies {{ui:Opslaan voor offline gebruik}} in de appbalk en wacht tot er **Klaar voor offline gebruik** staat. Details: [Offline werken](common:offline).
