---
title: Wat is er nieuw in 0.8 en 0.8.1
summary: PartCraft 0.8 voegt live analyse toe tijdens het bewerken, een controle Wat breekt als eerste, vloeien- en contactstudies met invoerbestanden voor een externe solver, bewegingsstudies voor samenstellingen, een werkomgeving Oppervlakken voor vrije vormoppervlakken, onderdelen gedimensioneerd met natuurkunde in de werkomgeving Engineer, schets uit foto, exports voor printen, genestelde platen naar G-code en tekeningen die hun gaten bematen. 0.8.1 herstelt een cursorbevriezing op volledig scherm.
keywords: wat is er nieuw, what's new, releasenotities, wijzigingslog, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, live analyse, bijwerken tijdens bewerken, breken, wat breekt als eerste, belastingsfactor, niet-lineair, vloeien, plastische rek, contact, calculix, bewegingsstudie, speling, oppervlakken, nurbs, strak trekken, rompvorm, zebra, engineer, generator, gegenereerd lichaam, schets uit foto, schalen voor printen, splitsen voor printen, krimp, genestelde platen, g-code, tekening, gaten bematen, assistent, mcp, talen, werkbalkrijen
from: 62e4dce2
---

Dit is wat er veranderd is in PartCraft 0.8 en 0.8.1, vergeleken met 0.7. De simulatie geeft antwoord terwijl u bewerkt en vertelt wat als eerste breekt, samenstellingen krijgen bewegingsstudies, en nieuwe werkomgevingen maken vrije vormoppervlakken en onderdelen gedimensioneerd met natuurkunde. 0.8.1 is een kleine herstelrelease.

## Nieuw

### Simulatie

- **Bijwerken terwijl ik bewerk.** Vink {{ui:Bijwerken terwijl ik bewerk}} aan in het blok Oplossen en de antwoorden volgen uw bewerkingen. Wijzigt u een maat, een belasting of het materiaal, dan verschijnt meteen een snelle berekening, gemaakt met elementen die vier keer zo groot zijn; stopt u ongeveer een seconde, dan vervangt het eigen verfijnde antwoord van de studie de snelle berekening. De resultaten geven aan welke u bekijkt. Bij een stalen uitkragende ligger lag het snelle antwoord binnen 1 % van het verfijnde antwoord voor de doorbuiging en op ongeveer 4 % voor de spanning. Zie [Spanning en doorbuiging controleren](topic:simulation#update-while-you-edit-live).
- **Wat breekt als eerste.** Voor een statische of knikstudie schaalt {{ui:Wat breekt als eerste?}} in het blok **Breken** de belastingen tot het onderdeel begeeft. Het toont, het ergste eerst, de belastingsfactor tot eerste vloeien (met een rode markering waar de spanning piekt) en de belastingsfactor tot knik. Een factor onder 1 betekent dat het onderdeel al begeeft zoals het belast is, en Problemen toont een fout. De factoren komen uit een lineaire studie, dus ze zijn precies zo goed als die studie. Zie [Spanning en doorbuiging controleren](topic:simulation#find-out-what-breaks-first-break-it).
- **Vloeien en contact.** Twee extra studietypen: een niet-lineaire studie waarin het materiaal zijn rechte lijn volgt tot de vloeispanning en daarna een vlakkere helling, met plastische rek uitgezet, en een contactstudie waarin afzonderlijke delen op elkaar drukken (wrijvingsloos) of vastzitten (gebonden). Een belastingstap die niet tot rust komt, of delen die te ver in elkaar zakken, verschijnen in het paneel Problemen. Wrijving, grote glijding, grote rotaties, grote doorbuigingen en vermoeiing worden niet opgelost. Zie [Spanning en doorbuiging controleren](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Invoerbestanden voor CalculiX.** {{ui:Exporteren}} › {{ui:CalculiX-invoerbestand (.inp)}} slaat de studie op voor CalculiX, een apart programma dat u zelf installeert en uitvoert; {{ui:Exporteren}} › {{ui:CalculiX-resultaten (.frd)}} leest het resultatenbestand van dat programma terug op dezelfde mesh. PartCraft start dat programma nooit en meldt het als het onderdeel is gewijzigd nadat het invoerbestand is opgeslagen.

### Samenstellingen

- **Bewegingsstudies.** {{ui:Samenstelling}} › {{ui:Beweging}} stuurt de waarde van één verbinding aan over een tijd die u opgeeft (constante snelheid, geleidelijk, sinus, of heen en terug), plaatst de samenstelling bij elke stap met haar verbindingen en gesloten lussen, en meldt welke delen botsen en hoe dicht ze komen. {{ui:Punt toevoegen}} zet de positie, snelheid en versnelling van een punt, de waarde van de verbinding en de speling tegen de tijd uit; {{ui:CSV opslaan}} en {{ui:Grafiek opslaan}} schrijven ze weg. Na {{ui:Uitvoeren}} verplaatst de balk Stap door de run de samenstelling naar elke gewenste stap. De instellingen van de studie worden bewaard in het samenstellingsbestand. Snelheid en versnelling komen uit de geregistreerde posities; gebruik dus meer stappen als een scherpe piek te laag uitkomt. Zie [Een samenstelling controleren op botsingen en beweging](topic:check-assembly#a-motion-study).

### Oppervlakken en onderdelen uit natuurkunde

- **Een werkomgeving Oppervlakken.** Kies {{ui:Oppervlakken}} in de keuzelijst {{ui:Werkomgeving}} voor NURBS-krommen en -oppervlakken naast het onderdeel: {{ui:Kromme}}, {{ui:Loft}}, {{ui:Uitvegen}}, {{ui:Aanpassen}} en {{ui:Zebra}}, met continuïteit (G0, G1 of G2) gemeten op de exacte oppervlakken. Een rand die slechter is dan u vroeg, staat in Problemen met een herstel via Aanpassen. {{ui:Strak trekken}} meet romplijnen op buigpunten en krommingssprongen en bouwt de onstrakke opnieuw binnen uw tolerantie. Oppervlakken worden opgeslagen in het onderdeelbestand en wijzigen de features van het onderdeel niet. Zie [Vrije vormoppervlakken (NURBS)](topic:nurbs-surfaces).
- **De werkomgeving Engineer.** Kies {{ui:Engineer}} in de keuzelijst van werkomgevingen, kies een generator en klik op {{ui:Nieuw}}: een script dimensioneert een onderdeel op basis van wat het moet doen (warmte verplaatsen, stromen, druk, materiaal, printproces), met leerboekformules, en bouwt het. Daarna geeft het de gebruikte getallen met hun bronnen, de fabricagecontroles en bestanden voor analysetools terug. Dezelfde invoer geeft hetzelfde onderdeel op elke computer. De generator wordt in het onderdeel bewaard, en het openen van een onderdeel start nooit een script. Zie [Onderdelen uit natuurkunde: generators](topic:engineer-generators) en [Een generator schrijven](topic:write-a-generator).

### Schetsen, tekeningen en maken

- **Een schets uit een foto.** {{ui:Features}} › {{ui:Meer}} › {{ui:Schets van een foto…}} traceert een foto van een plat onderdeel op een effen ondergrond (contour en gaten) of een pentekening in lijnen, bogen en cirkels. U geeft één lengte op, controleert het voorbeeld en maakt de schets. Zie [Basis van schetsen](topic:sketch-basics#a-sketch-from-a-photo).
- **Schalen en splitsen voor printen.** {{ui:Exporteren}} › {{ui:Schalen voor printen (STL of 3MF)…}} schaalt per as zonder het onderdeel te wijzigen, bijvoorbeeld met een krimptoeslag. {{ui:Exporteren}} › {{ui:Splitsen voor printen (een zip met stukken)…}} snijdt een onderdeel dat te groot is voor uw printbed in genummerde stukken, die met pennen, sleutels, zwaluwstaarten, pengaten of magneetzakjes worden verbonden. Zie [Printen in 3D](topic:print-3d).
- **Genestelde platen naar G-code.** {{ui:Exporteren}} › {{ui:Genestelde platen naar G-code}} leest een genesteld DXF-bestand en maakt per plaat één programma via de post die u kiest: eerst gaten en uitsneden, daarna de contouren. Het plant geen instappunten, de snijvolgorde of gedeelde randen. Zie [Vlakke onderdelen op platen nesten](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tekeningen die meer zelf doen.** {{ui:Blad}} › {{ui:Automatisch}} kiest het kleinste A-formaat blad dat de aanzichten bevat, op de grootste standaardschaal tot 1:1. {{ui:Gaten bematen}} zet een middenmerk op elk gat, één aanduiding per maat en de posities vanaf de linkeronderhoek van het aanzicht. Zie [Een tekening maken](topic:drawing-pdf).

### In elke app

- **Talen.** De apps zijn beschikbaar in 54 talen. Die naast Engels zijn machineconcepten totdat een moedertaalspreker ze heeft gelezen.
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} kiest Terugvouwen (zoals voorheen), 2 rijen of 1 rij; een balk die niet past, scrolt zijdelings. Het Feature-lint van PartCraft toont het meest gebruikte gereedschap groot en verbergt varianten achter een splitknop.
- **Uw AI koppelen.** Studio is de hub om een eigen assistent te koppelen aan alle acht apps, met per app leesrecht, voorstelrecht of bewerkrecht. Een gekoppelde assistent kan een onderdeel uit één zin dimensioneren, zoals een beugel voor een belasting, zijn werkwijze en elke controle tonen, en het bouwen. Hij meldt wat hij niet heeft gecontroleerd (spanningsconcentratie, vermoeiing, kruip in kunststoffen). Zie [PartCraft gebruiken met een AI-assistent](topic:use-with-ai-assistants).

## Opgelost in 0.8.1

- **Cursorbevriezing op volledig scherm.** De selectie bij zweven is nu vertraagd. De oorzaak is onze beste lezing en is niet bevestigd met de persoon die het meldde.
- **Taal tijdens uitvoering.** Studio en de verpakte edities kunnen tijdens het draaien van taal wisselen; voorheen was dat alleen Engels. Dit is nog niet op elk platform getest: laat het ons weten als de taal niet verandert.

## Nog niet in deze versie

- Uw AI koppelen is nog niet af: koppelen met één klik in Studio, de gehoste connector voor browser-AI, uw eigen API-sleutel in Studio en het gepubliceerde MCP-pakket zijn niet toegezegd. Studio heeft zelf geen AI.
- Studio is niet code-ondertekend: Windows kan waarschuwen, en macOS vraagt om rechtsklik en daarna Openen. Zie [Probleemoplossing](topic:troubleshooting).
- Toleranceketens werken nog maar in één richting: zie [Toleranceketens](topic:tolerance-stackup).
- De rest staat in [Wat nog niet beschikbaar is](topic:not-built-yet).

Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
