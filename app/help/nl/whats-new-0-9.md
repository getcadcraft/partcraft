---
title: Wat is er nieuw in 0.9 (eerder)
summary: PartCraft 0.9 voegt afrondingen tussen vlakken en verdikken tot volumes toe, samenstellingen van duizenden onderdelen, een Documenten-kluis met revisies, een Solid FEM-spanningsadd-on, tien boogmethoden, Britse staalmaten, een Printfase en add-ons voor harsprinten.
keywords: wat is er nieuw 0.9, eerdere versie, wat is er nieuw, release-notities, wijzigingslog, 0.9, afronding tussen vlakken, rollende bol, meerdere randen afronden, verdikken, volume uit vlakken, STEP-schil, IGES-volume, scanafrondingen, grote samenstelling, lichtgewicht weergave, 20000 onderdelen, documenten, kluis, uitchecken, revisie, release, waar gebruikt, Rhino-koppeling, grasshopper, 3dm, cursors, fabrieksvloer, taakwachtrij, solid fem, eindige elementen, von mises, eigenfrequentie, boogmethoden, 3-punts boog, Britse staalprofielen, printfase, hars, goo, ctb, bed, plat leggen, 0.8, 0.8.1, versie, nieuwe functies, live-analyse, bijwerken tijdens bewerken, wat breekt eerst, belastingsfactor, niet-lineair, vloeien, plastische rek, contact, calculix, bewegingsstudie, speling, oppervlakken, nurbs, strak trekken, romp, zebra, engineer, generator, gegenereerd lichaam, schets van een foto, schalen voor printen, splitsen voor printen, krimp, geneste platen, g-code, tekening, maten van gaten, assistent, mcp, talen, werkbalkrijen
from: 1dafd7c8
---

Dit is wat er veranderde in PartCraft 0.9, vergeleken met 0.8.1. Gekromde vlakken sluiten nu tot volumes, samenstellingen van duizenden onderdelen blijven bruikbaar, een Documenten-kluis bewaart revisies, en een Solid FEM-add-on controleert spanning in een onderdeel. Elk punt zegt waar u het vindt.

## Nieuw in 0.9.1

- **Exacte STEP-export.** {{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} en {{ui:STEP AP214 (exact volume)}} werken nu. Gaten, bossen, afrondingen, kegels, bollen en torussen worden geschreven op hun echte oppervlakken met echte cirkels als randen, zodat een ander CAD- of CAM-programma een gat als gat kan herkennen. Spline-zijden, gemodelleerde schroefdraden en geïmporteerde meshes blijven platte facetten in hetzelfde volume. Zie [Exporteren voor printen, STEP en DXF](topic:export-files#for-other-cad-programs-step).
- **STEP erin, exacte STEP eruit.** Een STEP-bestand dat u opent, behoudt zijn eigen platte vlakken, cilinders, kegels, bollen en torussen, zodat {{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} ze terugschrijft als echte oppervlakken in plaats van facetten: een balk van een leverancier met boutgaten gaat weer uit met dezelfde vlakken waarmee hij binnenkwam, plus wat u erin heeft gesneden. Spline-, geveegde en omgewenteld vlakken van het bestand blijven facetten, net als lichamen uit STL, OBJ en 3MF. Open het STEP-bestand opnieuw voor een onderdeel dat eerder is opgeslagen. Zie [Een STEP-bestand openen en erop verder bouwen](topic:import-step).
- **Ware cirkels in de vlak-DXF.** {{ui:Exporteren}} › {{ui:DXF van de schets of het platte vlak}} met een gekozen plat vlak schrijft nu ronde gaten als cirkels, met het eigen middelpunt en de eigen straal van het gat, voor een laser-, plasma- of waterstraaltafel. Andere ronde randen blijven facetten.
- **Exacte STEP voor de werkplaats.** In {{ui:Fabricage}} schrijft {{ui:Exacte STEP (werkcoördinaten)}} het onderdeel met zijn oorsprong in het werknulpunt van de opstelling en Z langs de gereedschapsas, de coördinaten die de G-code gebruikt. Zie [Freespaden en G-code maken](topic:manufacture#exact-step-for-the-shop).

## Nieuw

### Oppervlakken en volumes

- **Afronding tussen vlakken.** Kies {{ui:Oppervlakken}} in het vak {{ui:Werkomgeving}}, dan {{ui:Afronding tussen vlakken}}. Kies de twee vlakken van één volume en typ de straal (en {{ui:Radius aan het einde (mm, 0 = gelijk)}} voor een straal die langs de rand verandert). De resultaatregel zegt hoe ver de afronding van de ideale rollende bol af ligt, en een straal die niet past wordt geweigerd met het vlak erbij genoemd. {{ui:Meerdere randen afronden}} rondt in één stap veel randen af; vink {{ui:Hoeken (bolvormig vlakstuk waar drie samenkomen)}} aan voor een bolvormige hoek waar drie afgeronde randen van vlakke vlakken samenkomen. Zie [Gekromde oppervlakken (NURBS)](topic:nurbs-surfaces).
- **Verdikken tot een volume.** {{ui:Verdikken tot volume}} in dezelfde werkomgeving geeft een oppervlak een dikte; {{ui:Andere kant}} laat het de andere kant op groeien. Een vouw of zelfkruising wordt geweigerd, met het oppervlak en de plek erbij genoemd.
- **Volumes uit oppervlakken.** Ingeperkte oppervlakken kunnen met vereniging, aftrekken en doorsnede worden samengevoegd en als één stap die ongedaan gemaakt kan worden in het onderdeel worden gebakken. STEP schrijft een volume als één gesloten schil en IGES als één volume; beide lezen terug als volume. Als de vlakken niet rand voor rand aansluiten, krijgt het bestand losse vlakken en zegt de statusregel dat. Volumes kunnen ook in de knooppunteditor worden gemaakt; zie [Knooppunteditor](topic:nodes).
- **Rand- en variabele afrondingen in scans.** Wanneer u oppervlakken op een scan past, wordt ook gezocht naar randafrondingen (tori) en afrondingen met variabele straal langs een vrij rechte rand; ze worden met hun straal vermeld. Dit is alleen getest op nagemaakte scans.

### Samenstellingen, documenten en koppelingen

- **Grote samenstellingen.** Onderdelen die kopieën zijn delen één mesh, en {{ui:Weergaven}} › {{ui:Lichtgewicht weergave}} tekent dozen zodat de weergave blijft bewegen (het schakelt zichzelf in bij zeer grote samenstellingen; selecteren en verbindingen gebruiken nog steeds de echte onderdelen). De onderdeelboom toont zijn eerste rijen en een knop {{ui:700 meer tonen}} voor de rest. Samenstellingsbestanden kunnen maximaal 50,000 instanties en 100,000 verbindingen bevatten. Zie [Een samenstelling bouwen](topic:build-assembly).
- **Documenten.** {{ui:Documenten…}} in de groep **Bestand** opent een dialoogvenster over een projectmap: uitchecken en inchecken, revisieletters, statussen (in uitvoering, ter beoordeling, vrijgegeven, verouderd), geschiedenis, waar gebruikt en stuklijst. Zie [Documenten en revisies (de kluis)](topic:documents-walkthrough).
- **Live Rhino-koppeling.** Eén script, `cadcraft_link.py`, bewaakt een Rhino- of Grasshopper-document en stuurt alleen wat is veranderd naar PartCraft, waar een geïmporteerde functie opnieuw wordt opgebouwd op de nieuwe vorm. Het werkt één kant op en heeft Studio nodig. Zie [Live .3dm-koppeling](topic:live-3dm-link).
- **Elkaars cursors zien.** In een gedeelde sessie wordt de cursor van elke persoon getoond met zijn naam en de functie die hij heeft geselecteerd. Zie [Samen live werken](topic:work-live).
- **Fabrieksvloer.** Schakel de add-on Fabrieksvloer in via {{ui:Instellingen}} › {{ui:Add-ons}}. Na het posten van een programma in {{ui:Fabricage}} kan zijn tabblad {{ui:Toevoegen aan de taakwachtrij van de fabriek}} of {{ui:Opslaan als taakbestand}} gebruiken. Het verstuurt of start nooit een machine.

### Analyse en onderdelen

- **Solid FEM-add-on.** Schakel {{ui:Solid FEM}} in via {{ui:Instellingen}} › {{ui:Add-ons}} (het staat uit tot u het aanzet), en er verschijnt een tabblad {{ui:Solid FEM}} in het rechterpaneel. {{ui:Onderdeel meshen}}, kies vaste vlakken en belastingen in het 3D-beeld, {{ui:Oplossen}}, en teken verplaatsing, von Mises-spanning of een eigenvorm met {{ui:Op het model tonen}}. Zie [Solid FEM: een spanningscontrole](topic:solid-fem-check).
- **Boog in schetsen, op tien manieren.** De pijl naast {{ui:Boog}} in de schetswerkbalk toont: 3-punts, Begin Middelpunt Eind, Begin Middelpunt Hoek, Begin Middelpunt Lengte, Begin Eind Hoek, Begin Eind Richting, Begin Eind Straal, Middelpunt Begin Eind, Middelpunt Begin Hoek, Middelpunt Begin Lengte en Doorgaan. Zie [Een boog tekenen op tien manieren](topic:sketch-arc-methods).
- **Britse staalmaten.** Constructies kunnen 976 Britse profielen gebruiken (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); typ een maat zoals `305x165x40 UB`. Zie [Constructieve elementen](topic:structural-members).

### Printen

- **Printfase.** De knop {{ui:Printfase}} in de werkbalk (add-on 3D-printen, standaard aan) zet de volumes van uw onderdeel op een gestippeld printbed: {{ui:Plat leggen}}, {{ui:90° draaien}}, {{ui:Op het bed schikken}}, {{ui:Alles op het bed passen}}, {{ui:Lagen bekijken}}, dan {{ui:Naar 3D-printer sturen}} via USB, Klipper (Moonraker), OctoPrint of PrusaLink. Er wordt niets verstuurd tot u bevestigt, en uw onderdeel wordt nooit gewijzigd. Voor een STL- of 3MF-bestand zie [Een onderdeel klaarmaken voor 3D-printen](topic:print-3d).
- **Harsprinten.** Add-ons in {{ui:Instellingen}} › {{ui:Add-ons}}, allemaal uit tot u ze aanzet: een harsslicer, een belichtingstest, en bestandsformaten Elegoo GOO, SL1, Chitubox CBDDLP/CTB en Anycubic. Slicen loopt op een aparte thread, zodat de pagina reageert.

## In alle apps

- Elke zweefhulp is een Bootstrap-tooltip.
- De starttip heeft een sluitknop; hij blijft dicht.
- Een rij tabbladen van een paneel die niet past, scrolt zijwaarts in plaats van afgesneden te worden.
- Het browsertabblad toont de naam van het geopende document vóór PartCraft | CadCraft.
- {{ui:Instellingen}} toont de {{ui:Indeling}} van de werkomgeving als keuzelijst, en het taalvak somt elke taal op die de build heeft.
- Gewicht en Temperatuur zijn eenheidssoorten in de eenheideninstellingen.

## Opgelost

- Het menu Boog in de schets toont nu elke methode.
- De add-onwerkbalk en de titel van het browsertabblad zijn gecorrigeerd op 2026-11-09.

## Eerlijke grenzen

- Exacte STEP is teruggelezen in OpenCascade (geldige volumes, volumes gelijk aan de met de hand berekende). Het is nog niet in elk CAD- of CAM-programma geopend, en een samenstelling wordt niet als exacte STEP geschreven.
- Niets is op een echte printer geprint. Slicen, G-code en harsbestanden zijn teruggelezen door onze eigen programma's of een stand-in-printer; geen van de harsformaten is op een printer geladen, en printerformaten en belichtingen zijn startpunten.
- Solid FEM is lineair, isotroop en elastisch, met één materiaal per onderdeel, zonder contact, vloeien of knik. Spanning bij vaste vlakken en scherpe hoeken hangt af van het mesh. Het is een hulpmiddel voor controle, niet door een ingenieur beoordeeld.
- Tijden voor grote samenstellingen komen van een server zonder GPU; een volledig gedetailleerd beeld van 20,000 onderdelen kost daar nog steeds seconden.
- Afrondingen werken op paren van vlakken; er is geen algemene hoekvermenging en geen afronding tussen vlakken die elkaar niet raken.
- De Rhino-koppeling is nooit binnen echt Rhino of Grasshopper gedraaid. Documenten is door twee programma's op één map geprobeerd, niet door twee personen op een netwerkschijf.
- Oppervlakken passen op een echte scan is nog niet met de hand gecontroleerd. Talen naast Engels zijn machineconcepten.
- Windows-installatiepakketten zijn niet met een code-handtekening ondertekend, en het macOS-schijfbeeld is niet genotariseerd. Zie [Problemen oplossen](topic:troubleshooting).

Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).

## Eerder: 0.8 en 0.8.1

Dit is wat er veranderde in PartCraft 0.8 en 0.8.1, vergeleken met 0.7. De simulatie antwoordt terwijl u bewerkt en vertelt wat er eerst breekt, samenstellingen krijgen bewegingsstudies, en nieuwe werkomgevingen maken gekromde oppervlakken en onderdelen op maat uit de natuurkunde. 0.8.1 is een kleine herstelversie.

### Nieuw

**Simulatie**

- **Bijwerken tijdens bewerken.** Vink {{ui:Bijwerken terwijl ik bewerk}} aan in het blok Oplossen, en de antwoorden volgen uw bewerkingen. Wijzig een maat, een belasting of het materiaal, en een snel antwoord, gemaakt met elementen die vier keer zo groot zijn, verschijnt meteen; wanneer u ongeveer een seconde stopt, vervangt het eigen verfijnde antwoord van de studie het. De resultaten zeggen welke u bekijkt. Op een stalen uitkragende ligger lag het snelle antwoord binnen 1 % bij de doorbuiging en ongeveer 4 % bij de spanning van het verfijnde. Zie [Spanning en doorbuiging controleren](topic:simulation#update-while-you-edit-live).
- **Wat breekt eerst.** Voor een statische of knikstudie schaalt {{ui:Wat breekt eerst?}} in het blok Kapot maken de belastingen tot het onderdeel het begeeft. Het somt op, het ergste eerst, de belastingsfactor tot de eerste vloeiing (met een rode markering waar de spanning piekt) en de belastingsfactor tot knik. Een factor onder 1 betekent dat het onderdeel al begeeft zoals belast, en Problemen toont een fout. De factoren komen uit een lineaire studie, dus ze zijn zo goed als die. Zie [Spanning en doorbuiging controleren](topic:simulation#find-out-what-breaks-first-break-it).
- **Vloeien en contact.** Twee studietypes erbij: een niet-lineaire waarin het materiaal zijn rechte lijn volgt tot de vloeispanning en dan een vlakkere helling, met plastische rek uitgezet, en een contactstudie waarin afzonderlijke delen op elkaar drukken (wrijvingsloos) of vast blijven zitten (gebonden). Een belaststap die niet tot rust komt, of delen die te diep in elkaar zinken, verschijnen in het paneel Problemen. Wrijving, grote glijding, grote rotaties, grote doorbuigingen en vermoeiing worden niet opgelost. Zie [Spanning en doorbuiging controleren](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Decks voor CalculiX.** {{ui:Exporteren}} › {{ui:CalculiX-deck (.inp)}} slaat de studie op voor CalculiX, een apart programma dat u zelf installeert en uitvoert; {{ui:Exporteren}} › {{ui:CalculiX-resultaten (.frd)}} leest het resultaatbestand terug op hetzelfde mesh. PartCraft start dat programma nooit, en zegt het als het onderdeel is veranderd sinds het deck werd opgeslagen.

**Samenstellingen**

- **Bewegingsstudies.** {{ui:Samenstelling}} › {{ui:Beweging}} stuurt de waarde van één verbinding over een tijd die u geeft (constante snelheid, geleidelijk, sinus, of heen en terug), plaatst de samenstelling bij elke stap met zijn verbindingen en gesloten lussen, en meldt wat botst en hoe dicht delen komen. {{ui:Punt toevoegen}} zet de positie, snelheid en versnelling van een punt uit, de waarde van de verbinding en de speling tegen de tijd; {{ui:CSV opslaan}} en {{ui:Grafiek opslaan}} schrijven ze weg. Na {{ui:Uitvoeren}} verplaatst de balk Stap door de uitvoering de samenstelling naar elke stap. De instellingen van de studie worden in het samenstellingsbestand bewaard. Snelheid en versnelling komen uit de opgenomen posities, dus gebruik meer stappen als een scherpe piek te laag leest. Zie [Een samenstelling controleren op botsingen en beweging](topic:check-assembly#a-motion-study).

**Oppervlakken en onderdelen uit de natuurkunde**

- **Een werkomgeving Oppervlakken.** Kies {{ui:Oppervlakken}} in het vak {{ui:Werkomgeving}} voor NURBS-curves en -vlakken naast het onderdeel: {{ui:Kromme}}, {{ui:Loft}}, {{ui:Uitvegen}}, {{ui:Aanpassen}} en {{ui:Zebra}}, met continuïteit (G0, G1 of G2) gemeten op de exacte oppervlakken en een rand die slechter is dan u vroeg, vermeld in Problemen met een Aanpassen-oplossing. {{ui:Strak trekken}} meet scheepslijnen op buigpunten en krommingssprongen en herbouwt de onstrakke binnen uw tolerantie. Oppervlakken worden in het onderdeelbestand bewaard en veranderen de functies van het onderdeel niet. Zie [Gekromde oppervlakken (NURBS)](topic:nurbs-surfaces).
- **De werkomgeving Engineer.** Kies {{ui:Engineer}} in de werkomgeving-schakelaar, kies een generator en klik op {{ui:Nieuw}}: een script dimensioneert een onderdeel op basis van wat het moet doen (warmte verplaatsen, stromen, druk, materiaal, printproces) met leerboekformules en bouwt het, en geeft dan de gebruikte getallen met hun bronnen, zijn fabricagecontroles en bestanden voor analysetools terug. Dezelfde invoer geeft hetzelfde onderdeel op elke computer. De generator blijft in het onderdeel bewaard, en het openen van een onderdeel draait nooit een script. Zie [Onderdelen uit de natuurkunde: generatoren](topic:engineer-generators) en [Een generator schrijven](topic:write-a-generator).

**Schetsen, tekeningen en maken**

- **Een schets van een foto.** {{ui:Functies}} › {{ui:Meer}} › {{ui:Schets van een foto…}} traceert een afbeelding van een vlak onderdeel op een effen ondergrond (omtrek en gaten) of een pentekening in lijnen, bogen en cirkels. U geeft één lengte, controleert het voorbeeld en maakt de schets. Zie [Basis van schetsen](topic:sketch-basics#a-sketch-from-a-photo).
- **Schalen en splitsen voor printen.** {{ui:Exporteren}} › {{ui:Schalen voor printen (STL of 3MF)…}} schaalt per as zonder het onderdeel te veranderen, bijvoorbeeld met een krimptoeslag. {{ui:Exporteren}} › {{ui:Splitsen voor printen (een zip met stukken)…}} snijdt een onderdeel dat te groot is voor uw bed in genummerde stukken die met pennen, sleutels, zwaluwstaarten, pengaten of magneetholten verbonden worden. Zie [3D printen](topic:print-3d).
- **Geneste platen naar G-code.** {{ui:Exporteren}} › {{ui:Geneste platen naar G-code}} leest een genest DXF en maakt één programma per plaat via de postprocessor die u kiest: gaten en uitsnijdingen eerst, dan de omtrekken. Het plant geen instappen, de snijvolgorde of gedeelde randen. Zie [Platte onderdelen op platen nesten](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tekeningen die meer zelf doen.** {{ui:Blad}} › {{ui:Automatisch}} kiest het kleinste A-formaatblad dat de aanzichten houdt op de grootste standaardschaal tot 1:1. {{ui:Gaten bematen}} zet een middelpuntmarkering op elk gat, één aanwijzing per maat en de posities vanaf de linkeronderhoek van het aanzicht. Zie [Een tekening maken](topic:drawing-pdf).

**In alle apps**

- **Talen.** De apps zijn beschikbaar in 54 talen. Die naast Engels zijn machineconcepten tot een moedertaalspreker ze heeft gelezen.
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} kiest Terugloop (zoals voorheen), 2 rijen of 1 rij; een balk die niet past scrolt zijwaarts. De lint met functies van PartCraft toont het meest gebruikte gereedschap groot en verbergt varianten achter een gesplitste knop.
- **Verbind uw AI.** Studio is de hub om een eigen assistent aan alle acht apps te koppelen, met per app alleen-lezen-, voorstel- of bewerkingsrechten. Een verbonden assistent kan een onderdeel dimensioneren vanuit één zin, zoals een beugel voor een belasting, zijn werk en elke controle tonen en het bouwen; het meldt wat hij niet heeft gecontroleerd (spanningsconcentratie, vermoeiing, kruip in kunststoffen). Zie [PartCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

### Opgelost in 0.8.1

- **Cursor blijft hangen op volledig scherm.** De aanwijsselectie bij zweven is nu beperkt. De oorzaak is onze beste lezing en is niet bevestigd met de persoon die het meldde.
- **Taal tijdens het draaien.** Studio en de verpakte edities kunnen de taal wisselen terwijl ze draaien; eerder waren ze alleen Engels. Dit is nog niet op elk platform getest: laat het ons weten als de taal niet verandert.

### Nog niet in deze versie

- Verbind uw AI is niet af: verbinden met één klik binnen Studio, de gehoste connector voor browser-AI, uw eigen API-sleutel binnen Studio en het gepubliceerde MCP-pakket zijn niet beloofd. Studio heeft zelf geen AI.
- Studio is niet met een code-handtekening ondertekend: Windows kan waarschuwen, en macOS vraagt om rechtsklik en dan Openen. Zie [Problemen oplossen](topic:troubleshooting).
- Toleranceketens zijn nog één richting: zie [Toleranceketens](topic:tolerance-stackup).
- De rest staat in [Wat nog niet is gebouwd](topic:not-built-yet).

Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
