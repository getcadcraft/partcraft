---
title: De meshkernel
summary: Deze versie van PartCraft bouwt elk onderdeel met een meshkernel die in uw browser draait. Wat dat betekent voor ronde vlakken, volumes en bestanden, hoe u ziet dat hij werkt, en welke functies op een exacte kernel wachten.
keywords: kernel, mesh, manifold, exact, b-rep, gefacetteerd, krommen, opencascade, occt, afronding vereist exact, nog niet beschikbaar, offline, webassembly
from: f931645c
---

Een geometriekernel is de engine die uw historie omzet in een volume. Deze versie van PartCraft heeft er één: de **meshkernel** (manifold-3d). Die draait op uw computer als een klein WebAssembly-programma en is klaar even nadat de app is geopend. Niets over uw onderdeel wordt ergens naartoe gestuurd.

| | Meshkernel |
|---|---|
| Ronde vormen | Platte facetten. **Krommen** in het onderdeelpaneel bepaalt hoe fijn |
| Volumes en oppervlakten | Van het gefacetteerde volume, een beetje laag bij ronde onderdelen |
| Schetsen, extrusie, uitsnijding, omwenteling, gaten, patronen, spiegelen, referentievlakken | Ja |
| Afronden en Afschuinen | Op rechte randen tussen vlakke vlakken; afrondingen die samenkomen worden in verstek gemaakt |
| Uitholling en Trekhoek | Uitholling opent vlakke vlakken (exacte wanddikte); Trekhoek kantelt vlakke vlakken |
| Exports | STL, 3MF, STEP (exact: ronde vlakken worden op hun echte oppervlakken weggeschreven; of gefacetteerd), tekening-PDF en DXF |
| Tekeningweergaven | Getekend uit de facetten, inclusief doorsnedeweergaven |
| Vlakken en randen | Benoemd en herkend naar soort (vlak, cilinder, kegel, bol, torus; recht, cirkel), afkomstig uit de schetsen: de werkruimten Simulatie, Generatief en Fabricage, Meten, selecteren en de gatentabel gebruiken ze |

De chip rechts in de statusbalk zegt **Meshkernel** terwijl hij uw onderdeel bouwt.

## Wat op een exacte kernel wacht

Een exacte (B-rep) kernel houdt echte cirkels, cilinders en kegels in stand, en gladde afrondingen op elke rand, sweeps, lofts, oppervlakken, plaatwerk, ribben, meerdere lichamen en STEP-import met gekromde vlakken die exact blijven, zijn erop gebouwd. (Exacte STEP-export wacht hier niet op: de meshkernel kent het echte oppervlak van elk vlak uit de schets, en de export schrijft die.) Eerdere labbouwsels van PartCraft gebruikten daarvoor OpenCascade. De licentie daarvan (LGPL) past niet bij deze uitgave, waarin elke app Apache-2.0 is en alleen bibliotheken met een permissieve licentie gebruikt, dus is het er niet in opgenomen. Er staat hier geen datum.

Tot die tijd zeggen die functies **Nog niet beschikbaar** wanneer u ze kiest: de statusbalk geeft de reden, en de tooltips van hun knoppen eindigen met "nog niet beschikbaar (vereist een exacte kernel)". [Wat nog niet beschikbaar is](topic:not-built-yet) somt elk op, met wat u in plaats daarvan kunt doen.

Een onderdeel dat met deze functies in een eerdere build is gemaakt, opent nog steeds. Die functies blijven in de historie staan, gemarkeerd als nog niet beschikbaar (beweeg de muis erover voor de reden), de rest van het onderdeel wordt gebouwd, en opslaan laat ze ongewijzigd.

## Ronde vlakken en Krommen

De meshkernel tekent een cirkel als veelhoek. **Krommen** in het onderdeelpaneel bepaalt hoeveel zijden een volledige cirkel krijgt; meer zijden ziet er gladder uit en komt dichter bij de echte waarde, maar het bouwen duurt langer. Volumes, oppervlakten en afstanden van {{ui:Meten}} zijn van dit gefacetteerde volume: bij een gat of een uitstulping zijn ze iets kleiner dan die van de ronde vorm.

## Online en offline

De meshkernel maakt deel uit van de eigen download van de app. Om zonder verbinding te werken, slaat u PartCraft voor offline gebruik op terwijl u online bent: kies {{ui:Opslaan voor offline gebruik}} in de app-balk en wacht tot er **Offline klaar** staat. Details: [Offline werken](common:offline).
