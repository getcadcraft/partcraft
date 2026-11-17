---
title: Wat is er nieuw in 0.9
summary: PartCraft 0.9 voegt afrondingen tussen vlakken en verdikken tot volumes toe, samenstellingen van duizenden onderdelen, een documentenkluis met revisies, een add-on Solid FEM voor spanning, tien boogmethoden, Britse staalmaten, een printfase en add-ons voor harsprinten.
keywords: wat is er nieuw, release notes, uitgavenotities, wijzigingslogboek, 0.9, afronding tussen vlakken, rollende bol, meerdere randen afronden, verdikken, volume uit oppervlakken, step shell, iges-volume, scanafrondingen, grote samenstelling, lichtgewicht weergave, 20000 onderdelen, documenten, kluis, uitchecken, revisie, uitgave, waar gebruikt, Rhino-koppeling, grasshopper, 3dm, cursors, fabrieksvloer, takenwachtrij, solid fem, eindige elementen, von mises, eigenfrequentie, boogmethoden, 3-puntsboog, Britse staalmaten, Blue Book, printfase, hars, goo, ctb, bed, plat leggen, 0.8, 0.8.1, versie, nieuwe functies, live analyse, bijwerken tijdens bewerken, breek het, wat breekt als eerste, belastingsfactor, niet-lineair, vloeien, plastische rek, contact, calculix, bewegingsstudie, speling, oppervlakken, nurbs, strak trekken, romp, zebra, engineer, generator, gegenereerd lichaam, schets van een foto, schalen voor printen, splitsen voor printen, krimp, genestelde platen, g-code, tekening, gaten bematen, assistent, mcp, talen, werkbalkrijen
from: 96d9fbfa
---

Dit is wat er in PartCraft 0.9 is veranderd, vergeleken met 0.8.1. Vrije oppervlakken sluiten nu tot volumes, samenstellingen van duizenden onderdelen blijven bruikbaar, een documentenkluis bewaart revisies, en een add-on Solid FEM controleert spanning in een onderdeel. Elk punt zegt waar u het vindt.

## Nieuw in 0.9.1

- **Exacte STEP-export.** {{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} en {{ui:STEP AP214 (exact volume)}} werken nu. Gaten, verhogingen, afrondingen, kegels, bollen en torussen worden op hun ware oppervlakken geschreven, met ware cirkels als randen, zodat een ander CAD- of CAM-programma een gat als gat kan herkennen. Splinezijden, gemodelleerde schroefdraad en geïmporteerde meshes blijven platte facetten in hetzelfde volume. Zie [Exporteren voor printen, STEP en DXF](topic:export-files#for-other-cad-programs-step).
- **STEP erin, exacte STEP eruit.** Een STEP-bestand dat u opent houdt zijn eigen platte vlakken, cilinders, kegels, bollen en torussen, zodat {{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} ze als ware oppervlakken terugschrijft in plaats van als facetten: de balk van een leverancier met boutgaten gaat eruit met dezelfde vlakken als waarmee hij binnenkwam, plus alles wat u erin snijdt. Splines, geveegde en geroteerde vlakken van het bestand blijven facetten, en dat geldt ook voor lichamen uit STL, OBJ en 3MF. Open het STEP-bestand opnieuw voor een onderdeel dat eerder is opgeslagen. Zie [Een STEP-bestand openen en erop bouwen](topic:import-step).
- **Ware cirkels in de DXF van het vlak.** {{ui:Exporteren}} › {{ui:DXF van de schets of het platte vlak}} met een gekozen plat vlak schrijft nu ronde gaten als cirkels, met het eigen middelpunt en de eigen straal van het gat, voor een laser-, plasma- of waterstraaltafel. Andere ronde randen blijven facetten.
- **Exacte STEP voor de werkplaats.** In {{ui:Fabricage}} schrijft {{ui:Exacte STEP (werkcoördinaten)}} het onderdeel met zijn oorsprong op het werknulpunt van de opstelling en Z langs de gereedschapsas, de coördinaten die de G-code gebruikt. Zie [Gereedschapsbanen en G-code maken](topic:manufacture#exact-step-for-the-shop).

## Nieuw

### Oppervlakken en volumes

- **Afronding tussen vlakken.** Kies {{ui:Oppervlakken}} in de keuzelijst {{ui:Werkomgeving}}, dan {{ui:Afronding tussen vlakken}}. Kies de twee vlakken van één volume en typ de straal (en {{ui:Radius aan het einde (mm, 0 = gelijk)}} voor een straal die langs de rand verandert). De resultaatregel zegt hoe ver de afronding van de ideale rollende bol af staat, en een straal die niet past, wordt geweigerd met het vlak erbij genoemd. {{ui:Meerdere randen afronden}} rondt in één stap vele randen af; vink {{ui:Hoeken (bolvormig vlakstuk waar drie samenkomen)}} aan voor een bolvormige hoek waar drie afgeronde randen van vlakke vlakken samenkomen. Zie [Vrije oppervlakken (NURBS)](topic:nurbs-surfaces).
- **Verdikken tot volume.** {{ui:Verdikken tot een volume}} in dezelfde werkomgeving geeft een oppervlak een dikte; {{ui:Andere kant}} laat het de andere kant op groeien. Een vouw of een zelfkruising wordt geweigerd, met het oppervlak en de plaats erbij genoemd.
- **Volumes uit oppervlakken.** Getrimde oppervlakken kunnen met vereniging, aftrekken en doorsnede worden samengevoegd en als één stap ongedaan maken in het onderdeel verwerkt. STEP schrijft een volume als één gesloten schil en IGES als één volume; beide lezen terug als volume. Als de vlakken niet rand voor rand passen, krijgt het bestand losse vlakken en zegt de statusregel dat. Volumes kunnen ook in de knooppunteditor worden gemaakt; zie [Knooppunteditor](topic:nodes).
- **Ronde en variabele afrondingen in scans.** Wanneer u oppervlakken op een scan past, wordt ook gezocht naar ronde randafrondingen (torussen) en afrondingen met variabele straal langs een vrij rechte rand, en die worden met hun straal vermeld. Het is alleen getest op nagemaakte scans.

### Samenstellingen, documenten en koppelingen

- **Grote samenstellingen.** Onderdelen die kopieën zijn delen één mesh, en {{ui:Weergaven}} › {{ui:Lichtgewicht weergave}} tekent dozen zodat de weergave blijft bewegen (het schakelt zichzelf in bij zeer grote samenstellingen; selecteren en verbindingen gebruiken nog de echte onderdelen). De onderdelenboom toont de eerste rijen en een knop {{ui:Toon 700 meer}} voor de rest. Samenstellingsbestanden mogen tot 50.000 exemplaren en 100.000 verbindingen bevatten. Zie [Een samenstelling bouwen](topic:build-assembly).
- **Documenten.** {{ui:Documenten…}} in de groep **Bestand** opent een dialoogvenster over een projectmap: uitchecken en inchecken, revisieletters, statussen (in bewerking, ter beoordeling, vrijgegeven, verouderd), geschiedenis, waar gebruikt en stuklijst. Zie [Documenten en revisies (de kluis)](topic:documents-walkthrough).
- **Live Rhino-koppeling.** Één script, `cadcraft_link.py`, volgt een Rhino- of Grasshopper-document en stuurt alleen wat is veranderd naar PartCraft, waar een geïmporteerd kenmerk opnieuw wordt opgebouwd op de nieuwe vorm. Het werkt in één richting en heeft Studio nodig. Zie [Live .3dm-koppeling](topic:live-3dm-link).
- **Elkaars cursors zien.** In een gedeelde sessie wordt de cursor van elke persoon getoond met zijn naam en het kenmerk dat hij geselecteerd heeft. Zie [Samen live werken](topic:work-live).
- **Fabrieksvloer.** Zet de add-on Fabrieksvloer aan in {{ui:Instellingen}} › {{ui:Add-ons}}. Nadat u een programma in {{ui:Fabricage}} heeft geplaatst, kan het tabblad {{ui:Toevoegen aan de takenwachtrij van de fabriek}} of {{ui:Opslaan als takenbestand}} gebruiken. Het verzendt of start nooit een machine.

### Analyse en onderdelen

- **Add-on Solid FEM.** Zet {{ui:Solid FEM}} aan in {{ui:Instellingen}} › {{ui:Add-ons}} (het staat uit tot u dat doet) en er verschijnt een tabblad {{ui:Solid FEM}} in het rechterpaneel. {{ui:Het onderdeel meshen}}, kies vaste vlakken en belastingen in de 3D-weergave, {{ui:Oplossen}}, en teken de verplaatsing, von Mises-spanning of een eigenvorm met {{ui:Op het model tonen}}. Zie [Solid FEM: een spanningscontrole](topic:solid-fem-check).
- **Boog in schetsen, op tien manieren.** De pijl naast {{ui:Boog}} in de schetswerkbalk toont 3-punt, Start Middelpunt Eind, Start Middelpunt Hoek, Start Middelpunt Lengte, Start Eind Hoek, Start Eind Richting, Start Eind Straal, Middelpunt Start Eind, Middelpunt Start Hoek, Middelpunt Start Lengte en Doorgaan. Zie [Een boog tekenen op tien manieren](topic:sketch-arc-methods).
- **Britse staalmaten.** Lasconstructies kunnen 976 Britse profielen gebruiken (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); typ een maat zoals `305x165x40 UB`. Zie [Constructieve elementen](topic:structural-members).

### Printen

- **Printfase.** De knop {{ui:Printfase}} in de werkbalk (add-on 3D-printen, standaard aan) zet de lichamen van uw onderdeel op een gestippeld bed: {{ui:Plat leggen}}, {{ui:Draai 90°}}, {{ui:Op het bed rangschikken}}, {{ui:Alles op het bed passend maken}}, {{ui:Lagen voorvertonen}}, daarna {{ui:Naar 3D-printer verzenden}} via USB, Klipper (Moonraker), OctoPrint of PrusaLink. Er wordt niets verzonden tot u bevestigt, en uw onderdeel verandert nooit. Voor een STL- of 3MF-bestand, zie [Een onderdeel klaarmaken voor 3D-printen](topic:print-3d).
- **Harsprinten.** Add-ons in {{ui:Instellingen}} › {{ui:Add-ons}}, allemaal uit tot u ze aanzet: een harsslicer, een belichtingstest, en bestandsformaten Elegoo GOO, SL1, Chitubox CBDDLP/CTB en Anycubic. Slicen gebeurt op een werkthread, zodat de pagina reageert.

## In elke app

- Elke hint bij de aanwijzer is een Bootstrap-tooltip.
- De starttip heeft een sluitknop; hij blijft gesloten.
- Een rij tabbladen van een paneel die niet past, scrolt zijwaarts in plaats van afgesneden te worden.
- Het browsertabblad toont de naam van het geopende document vóór PartCraft | CadCraft.
- {{ui:Instellingen}} toont de werkomgeving {{ui:Indeling}} als keuzelijst, en het taalvak toont elke taal die de build heeft.
- Gewicht en Temperatuur zijn eenheidssoorten in de eenheidsinstellingen.

## Opgelost

- Het schetsmenu Boog toont nu elke methode.
- De werkbalk van de add-ons en de titel van het browsertabblad zijn op 2026-11-09 gecorrigeerd.

## Eerlijke grenzen

- Exacte STEP is teruggelezen in OpenCascade (geldige volumes, met dezelfde volumes als die met de hand zijn berekend). Het is nog niet in elk CAD- of CAM-programma geopend, en een samenstelling wordt niet als exacte STEP geschreven.
- Niets is op een echte printer afgedrukt. Slicen, G-code en harsbestanden zijn teruggelezen door onze eigen programma's of een vervangende printer; geen van de harsformaten is op een printer geladen, en printerformaten en belichtingen zijn startpunten.
- Solid FEM is lineair, isotroop en elastisch, met één materiaal per onderdeel, zonder contact, vloeien of knikken. Spanning bij vaste vlakken en scherpe hoeken hangt af van de mesh. Het is een controlehulpmiddel, niet door een ingenieur nagekeken.
- Timings van grote samenstellingen komen van een server zonder GPU; een volledig gedetailleerd beeld van 20.000 onderdelen kost daar nog steeds seconden.
- Afrondingen werken op paren vlakken; er is geen algemene hoekpuntblend en geen afronding tussen vlakken die elkaar niet raken.
- De Rhino-koppeling is nooit binnen echte Rhino of Grasshopper uitgevoerd. Documenten is door twee programma's op één map geprobeerd, niet door twee personen op een netwerkschijf.
- Oppervlakken passen op een echte scan is nog niet met de hand gecontroleerd. Talen anders dan Engels zijn machinevertalingen.
- Windows-installatieprogramma's zijn niet code-ondertekend, en het macOS-schijfbeeld is niet genotariseerd. Zie [Problemen oplossen](topic:troubleshooting).

Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).

## Eerder: 0.8 en 0.8.1

Dit is wat er in PartCraft 0.8 en 0.8.1 is veranderd, vergeleken met 0.7. De simulatie antwoordt terwijl u bewerkt en vertelt wat het eerst breekt, samenstellingen krijgen bewegingsstudies, en nieuwe werkomgevingen maken vrije oppervlakken en onderdelen op maat op basis van natuurkunde. 0.8.1 is een kleine herstelversie.

### Nieuw

**Simulatie**

- **Bijwerken terwijl ik bewerk.** Vink {{ui:Bijwerken terwijl ik bewerk}} aan in het blok {{ui:Oplossen}} en de antwoorden volgen uw bewerkingen. Wijzig een maat, een belasting of het materiaal en een snel antwoord, gemaakt met elementen die vier keer zo groot zijn, verschijnt meteen; wanneer u ongeveer een seconde stopt, vervangt het eigen verfijnde antwoord van de studie het. De resultaten zeggen welk van de twee u bekijkt. Op een stalen uitkragende ligger lag het snelle antwoord binnen 1 % voor de doorbuiging en ongeveer 4 % voor de spanning van het verfijnde antwoord. Zie [Spanning en doorbuiging controleren](topic:simulation#update-while-you-edit-live).
- **Wat breekt als eerste.** Voor een statische of knikstudie schaalt {{ui:Wat breekt als eerste?}} in het blok **Breek het** de belastingen op tot het onderdeel begeeft. Het toont, het ergste eerst, de belastingsfactor tot de eerste vloei (met een rode markering waar de spanning piekt) en de belastingsfactor tot knik. Een factor onder 1 betekent dat het onderdeel al begeeft zoals het belast is, en Problemen toont een fout. De factoren komen uit een lineaire studie, dus ze zijn zo goed als die. Zie [Spanning en doorbuiging controleren](topic:simulation#find-out-what-breaks-first-break-it).
- **Vloeien en contact.** Twee studietypes erbij: een niet-lineaire waarin het materiaal zijn rechte lijn volgt tot de vloeigrens en daarna een vlakkere helling, met plastische rek uitgezet, en een contactstudie waarin afzonderlijke stukken op elkaar duwen (wrijvingsloos) of vast blijven zitten (gebonden). Een belaststap die niet tot rust komt, of stukken die te ver in elkaar zakken, verschijnen in het paneel Problemen. Wrijving, grote glijding, grote rotaties, grote doorbuigingen en vermoeiing worden niet opgelost. Zie [Spanning en doorbuiging controleren](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Invoerbestanden voor CalculiX.** {{ui:Exporteren}} › {{ui:CalculiX-invoerbestand (.inp)}} slaat de studie op voor CalculiX, een apart programma dat u zelf installeert en uitvoert; {{ui:Exporteren}} › {{ui:CalculiX-resultaten (.frd)}} leest het resultaatbestand weer terug op hetzelfde mesh. PartCraft start dat programma nooit, en het zegt dat als het onderdeel is veranderd sinds het invoerbestand is opgeslagen.

**Samenstellingen**

- **Bewegingsstudies.** {{ui:Samenstelling}} › {{ui:Beweging}} stuurt de waarde van één verbinding over een tijd die u opgeeft (constante snelheid, versoepeld, sinus, of heen en terug), zet de samenstelling bij elke stap met zijn verbindingen en gesloten lussen, en meldt wat botst en hoe dicht onderdelen komen. {{ui:Punt toevoegen}} zet de positie, snelheid en versnelling van een punt uit, de waarde van de verbinding en de speling tegen de tijd; {{ui:CSV opslaan}} en {{ui:Grafiek opslaan}} schrijven ze uit. Na {{ui:Uitvoeren}} brengt de stapbalk in de uitvoerbalk de samenstelling naar elke gewenste stap. De instellingen van de studie worden in het samenstellingsbestand opgeslagen. Snelheid en versnelling komen uit de vastgelegde posities, dus gebruik meer stappen als een scherpe piek te laag leest. Zie [Samenstellingen controleren op botsingen en beweging](topic:check-assembly#a-motion-study).

**Oppervlakken en onderdelen op basis van natuurkunde**

- **Een werkomgeving Oppervlakken.** Kies {{ui:Oppervlakken}} in de keuzelijst {{ui:Werkomgeving}} voor NURBS-krommen en -oppervlakken naast het onderdeel: {{ui:Kromme}}, {{ui:Loft}}, {{ui:Uitvegen}}, {{ui:Aanpassen}} en {{ui:Zebra}}, met continuïteit (G0, G1 of G2) gemeten op de exacte oppervlakken, en een rand die slechter is dan u vroeg, wordt in Problemen vermeld met een Aanpassen-oplossing. {{ui:Strak trekken}} meet de romplijnen op inflecties en sprongen in de kromming, en herbouwt de niet-strakke binnen uw tolerantie. Oppervlakken worden in het onderdeelbestand opgeslagen en wijzigen de kenmerken van het onderdeel niet. Zie [Vrije oppervlakken (NURBS)](topic:nurbs-surfaces).
- **De werkomgeving Engineer.** Kies {{ui:Engineer}} in de keuzelijst van de werkomgeving, kies een generator en klik op {{ui:Nieuw}}: een script dimensioneert een onderdeel op basis van wat het moet doen (warmte om te verplaatsen, stromen, druk, materiaal, printproces) met leerboekformules en bouwt het, en geeft dan de gebruikte getallen met hun bronnen, de fabricagecontroles en bestanden voor analysetools terug. Dezelfde invoer geeft hetzelfde onderdeel op elke computer. De generator wordt in het onderdeel bewaard, en het openen van een onderdeel draait nooit een script. Zie [Onderdelen uit natuurkunde: generatoren](topic:engineer-generators) en [Een generator schrijven](topic:write-a-generator).

**Schetsen, tekeningen en maken**

- **Een schets van een foto.** {{ui:Features}} › {{ui:Meer}} › {{ui:Schets van een foto…}} overtrekt een afbeelding van een plat onderdeel op een effen ondergrond (omtrek en gaten) of een pentekening in lijnen, bogen en cirkels. U geeft één lengte, controleert het voorbeeld en maakt de schets. Zie [Grondbeginselen van schetsen](topic:sketch-basics#a-sketch-from-a-photo).
- **Schalen en splitsen voor printen.** {{ui:Exporteren}} › {{ui:Schalen voor printen (STL of 3MF)…}} schaalt per as zonder het onderdeel te veranderen, bijvoorbeeld voor een krimptoeslag. {{ui:Exporteren}} › {{ui:Splitsen voor printen (een zip met stukken)…}} snijdt een onderdeel dat te groot is voor uw bed in genummerde stukken die met pennen, sleutels, zwaluwstaarten, pengaten of magneetzakken verbonden worden. Zie [3D-printen](topic:print-3d).
- **Genestelde platen naar G-code.** {{ui:Exporteren}} › {{ui:Genestelde platen naar G-code}} leest een genest DXF-bestand en maakt per plaat één programma via de post die u kiest: eerst gaten en uitsnijdingen, dan de contouren. Het plant geen inleidingen, de snijvolgorde of gedeelde randen. Zie [Vlakke onderdelen op platen nesten](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tekeningen die meer zelf doen.** {{ui:Blad}} › {{ui:Automatisch}} kiest het kleinste A-formaat blad dat de aanzichten houdt op de grootste standaardschaal tot 1:1. {{ui:Gaten bematen}} zet een middelpuntmarkering op elk gat, één aanduiding per maat en de posities vanaf de linkeronderhoek van het aanzicht. Zie [Een tekening maken](topic:drawing-pdf).

**In elke app**

- **Talen.** De apps komen in 54 talen. Die naast Engels zijn machinevertalingen totdat een moedertaalspreker ze heeft gelezen.
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} kiest Afbreken (zoals voorheen), 2 rijen of 1 rij; een balk die niet past, scrolt zijwaarts. Het lint Kenmerk van PartCraft toont het meest gebruikte gereedschap groot en verbergt varianten achter een gesplitste knop.
- **Verbind uw AI.** Studio is het centrum om een eigen assistent aan alle acht apps te koppelen, met alleen-lezen-, suggestie- of bewerkingsrecht per app. Een verbonden assistent kan een onderdeel dimensioneren op basis van één zin, zoals een beugel voor een belasting, zijn werk en elke controle tonen, en het bouwen; het meldt wat het niet heeft gecontroleerd (spanningsconcentratie, vermoeiing, kruip in kunststoffen). Zie [PartCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

### Opgelost in 0.8.1

- **Bevriezing van de cursor op volledig scherm.** De hoverkeuze wordt nu afgeremd. De oorzaak is onze beste inschatting en is niet bevestigd met de persoon die het meldde.
- **Taal tijdens het uitvoeren.** Studio en de verpakte edities kunnen tijdens het draaien van taal wisselen; eerder waren ze alleen Engels. Dit is nog niet op elk platform getest: laat het ons weten als de taal niet verandert.

### Nog niet in deze versie

- Uw AI verbinden is nog niet af: één-klik verbinden binnen Studio, de gehoste connector voor browser-AI, uw eigen API-sleutel binnen Studio en het gepubliceerde MCP-pakket zijn niet beloofd. Studio heeft zelf geen AI.
- Studio is niet code-ondertekend: Windows kan waarschuwen, en macOS vraagt om met de rechtermuisknop te klikken en dan Openen. Zie [Problemen oplossen](topic:troubleshooting).
- Stapelingen (stack-ups) zijn nog steeds in één richting: zie [Tolerantiestapels](topic:tolerance-stackup).
- De rest staat in [Wat nog niet is gebouwd](topic:not-built-yet).

Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
