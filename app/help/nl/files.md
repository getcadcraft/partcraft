---
title: "Bestanden: openen, opslaan en exporteren"
summary: De onderdeel- en samenstellingsbestanden die PartCraft opent en opslaat, elk exportformaat en wat het bewaart, waar bestanden terechtkomen, en wat er offline of tussen browsers verandert.
keywords: openen, opslaan, exporteren, downloaden, bestand, partcraft.json, samenstellingsbestand, stl, 3mf, step, dxf, pdf, waar zijn mijn bestanden, offline, opslaan als
from: e5fbc7e3
---

PartCraft werkt met bestanden op uw computer. Het uploadt nooit een onderdeel, en er is geen account of cloudopslag bij betrokken. Opslaan in de cloud is nog niet beschikbaar.

## Wat PartCraft opent

| Bestand | Extensie | Hoe |
|---|---|---|
| Een PartCraft-onderdeel | `.partcraft.json` | {{ui:Openen}}, {{key:Mod+O}}, of sleep het naar de 3D-weergave |
| Een PartCraft-samenstelling | `.partcraft-asm.json` | Hetzelfde: PartCraft herkent welk soort het is |
| Een STEP-volume | `.step`, `.stp` | Een volumelichaam ingelezen als driehoeken: [Een STEP-bestand openen en erop verder bouwen](topic:import-step) |

STL-, OBJ- en 3MF-meshes openen ook als volumelichamen ([Een STL, OBJ of 3MF openen](topic:open-meshes)), en `.3dm`-bestanden ook ([Een .3dm-model openen](topic:open-3dm-files)). DXF, IGES en de eigen onderdeelbestanden van andere programma's kunnen niet worden geopend (zie [Wat nog niet beschikbaar is](topic:not-built-yet)).

Regels bij het openen:

- Een onderdeel- of samenstellingsbestand moet eindigen op `.json`, en het bestand moet kleiner zijn dan 50 MB.
- Bestanden worden gecontroleerd voordat er iets wordt getoond. Een beschadigd of bewerkt bestand wordt geweigerd met een duidelijke reden, bijvoorbeeld "Dit is geen PartCraft-bestand."
- Een bestand dat door een nieuwere PartCraft is opgeslagen, wordt geweigerd: "Dit bestand is opgeslagen door een nieuwere PartCraft (bestandsversie 3); deze leest versie 2." Oudere bestanden worden geopend.
- Als het onderdeel op het scherm niet-opgeslagen wijzigingen heeft, vraagt PartCraft eerst: {{ui:Annuleren}}, {{ui:Wijzigingen weggooien}} of {{ui:Eerst opslaan}}.

## Opslaan

{{ui:Opslaan}} of {{key:Mod+S}} slaat op wat op het scherm staat:

- Bij een onderdeel: `<part name>.partcraft.json`, de volledige geschiedenis (schetsen, relaties, maten, features, de terugrolpositie), de doorsnede-, detail- en GD&T-notities van het tekenblad, en de volledige tekst van elk STEP-volume dat in een eerdere build is geïmporteerd. Features die deze versie niet kan opbouwen, worden ongewijzigd teruggeschreven. Het volume zelf wordt niet opgeslagen; PartCraft bouwt het opnieuw op uit de geschiedenis wanneer het bestand opent.
- Bij een samenstelling: `<assembly name>.partcraft-asm.json`, met **elk onderdeel erin**. Eén bestand bevat de hele samenstelling, zodat u het alleen kunt versturen.

Opslaan is een **download**. Uw browser zet het bestand in de downloadmap, of vraagt waar het moet worden opgeslagen als u dat zo hebt ingesteld. Opnieuw opslaan maakt een nieuwe download; de browser kan het `Part1 (1).partcraft.json` noemen in plaats van het oude te vervangen. Hernoem of verplaats bestanden in {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheerprogramma}} naar believen.

Tekens in de onderdeelnaam die geen letters, cijfers, spaties, `_`, `.` of `-` zijn, worden `_` in de bestandsnaam.

:::tip
De meeste browsers hebben een instelling om te vragen waar elke download moet worden opgeslagen. Zet die aan als u elke keer een keuze "Opslaan als" wilt: in Chrome en Edge staat die onder Downloads in de instellingen; in Firefox onder Algemeen, Bestanden en toepassingen; in Safari onder Algemeen, locatie voor bestandsdownloads.
:::

Meer over waar downloads terechtkomen en hoe u bestanden veilig houdt: [Waar uw bestanden terechtkomen](common:your-files).

## Exporteren

Het menu {{ui:Exporteren}} schrijft andere formaten. Elk is een download, genoemd naar het onderdeel.

| Menu-item | Bestand | Wat erin zit |
|---|---|---|
| {{ui:STL, voor 3D-printen}} | `<name>.stl` | Binaire STL van de driehoeken van het volume, millimeter, **Z omhoog** |
| {{ui:3MF, voor 3D-printen}} | `<name>.3mf` | 3MF met het volume als één object, millimeter, **Z omhoog** |
| {{ui:STEP AP242 (exact volume)}} | `<name>.step` | Eén exact volume, millimeter, Z omhoog: ronde vlakken als echte cilinders, kegels, bollen en torussen. De STEP om te gebruiken voor andere CAD- en CAM-programma's |
| {{ui:STEP AP214 (exact volume)}} | `<name>.step` | Hetzelfde exacte volume in het oudere AP214-schema |
| {{ui:STEP (gefacetteerd, meshkernel)}} | `<name>.step` | Een volume van vlakke vlakken uit de mesh: **ronde oppervlakken zijn veel kleine vlakke facetten**. Millimeter, in de eigen assen van PartCraft (Y omhoog). Voor een programma dat het exacte bestand weigert |
| {{ui:DXF van de schets of het platte vlak}} | `<name> - <sketch>.dxf` of `<name> - face.dxf` | DXF R12. Een schets: lijnen, bogen, cirkels en punten in de eigen coördinaten van de schets, op de lagen PROFILE, CONSTRUCTION en POINTS. Een gekozen plat vlak: de omtrekken als gesloten polylijnen (ronde randen als hun facetten) |
| {{ui:Tekening (PDF): aanzichten, doorsnede, detail, GD&T}} | `<name> - drawing.pdf` | Het A3-tekenblad: drie aanzichten, isometrisch, doorsnede en detail indien ingesteld, totale maten, GD&T-symbolen, titelblok |

:::note
{{ui:STEP AP242 (exact volume)}} schrijft gaten, bossen, afrondingen, kegels, bollen en torussen op hun echte oppervlakken, zodat een ander programma een gat als cilinder kan selecteren; **Rondingen** verandert dat niet. Splineflanken, gemodelleerde schroefdraad en geïmporteerde meshes hebben geen exact oppervlak en blijven vlakke facetten in hetzelfde volume; de statusbalk zegt hoeveel. {{ui:STEP (gefacetteerd, meshkernel)}} schrijft elk ronde vlak als facetten.
:::

- Exports zijn van het onderdeel op het scherm. Exporteren is uitgeschakeld in een samenstelling; er is nog geen export van samenstellingen.
- STL, 3MF, de gefacetteerde STEP en het vlak-DXF bestaan altijd uit facetten. De instelling **Rondingen** (in het rechterpaneel als niets is geselecteerd) bepaalt hoe fijn ze zijn, van 32 tot 256 facetten per omwenteling. Kies Fijn of Zeer fijn voordat u STL of 3MF exporteert voor een gladde print.
- De PDF-tekening gebruikt het ingebouwde lettertype Helvetica van de lezer. Tekens die het niet kan tonen, worden als "?" afgedrukt.

Stap voor stap: [Exporteren voor printen, STEP en DXF](topic:export-files) en [Een tekenblad maken](topic:drawing-pdf).

## Niet-opgeslagen werk

- PartCraft bewaart een herstelkopie van het geopende onderdeel of de geopende samenstelling in deze browser, even na elke wijziging, zodat een crash of een gesloten tabblad het niet verliest: de volgende keer dat u PartCraft opent, vraagt het "Uw werk herstellen?". Het is geen opslag: sla op naar een bestand om uw werk te bewaren. Zie [Niet-opgeslagen werk herstellen](common:recover).
- Als u de tab probeert te sluiten of de pagina opnieuw laadt met niet-opgeslagen wijzigingen, vraagt de browser "Site verlaten?". Dat is het eigen venster van de browser; PartCraft kan de tekst niet wijzigen.
- {{ui:Nieuw}}, {{ui:Openen}} en het sluiten van een samenstelling vragen eerst voordat niet-opgeslagen wijzigingen worden weggegooid.

## Online en offline

Alles gebeurt op uw computer: de meshkernel (een WebAssembly-programma) wordt met de app gedownload en bouwt de geometrie lokaal, en bestanden worden van en naar uw schijf gelezen en geschreven. Geen onderdeelgegevens gaan over het netwerk. Zie [De meshkernel](topic:solid-kernels).

Om zonder enige verbinding te werken, slaat u PartCraft op voor offline gebruik terwijl u online bent: kies {{ui:Opslaan voor offline gebruik}} in de app-balk en wacht terwijl het telt ("Opslaan 40 van 212") tot er **Offline klaar** staat. De opgeslagen kopie bevat de 3D-bibliotheek en de meshkernel, dus daarna werken modelleren, opslaan, elke export en tekeningen allemaal offline. Staat er **Kon niet opslaan**, klik er dan op om het opnieuw te proberen terwijl u online bent; **Offline niet beschikbaar** betekent dat dit browservenster geen kopie kan bewaren (privévensters en sommige beheerde computers). Met de opgeslagen kopie biedt klikken op **Offline klaar** {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} en {{ui:De offlinekopie verwijderen}} aan. Details: [Offline werken](common:offline).

:::online
U bent online. Ook zonder opslaan voor offline gebruik kunt u, zodra PartCraft is geladen en het statusbalkje "Meshkernel" toont, blijven werken als de verbinding wegvalt. Laad de pagina alleen niet opnieuw voordat u weer online bent.
:::

:::offline
U bent offline. Als PartCraft al open is, blijf dan werken; opslaan en exporteren werken nog steeds. Staat er in de app-balk **Offline klaar**, dan opent PartCraft ook helemaal opnieuw zonder verbinding; laad dit tabblad anders niet opnieuw.
:::

## Verschillen tussen browsers

- **Downloads.** Elke browser heeft een eigen downloadmap en een eigen manier van vragen. Vraagt een browser of deze site bestanden mag downloaden, sta dat dan toe; anders kunnen opslaan en exporteren niet werken.
- **Slepen en neerzetten** van een bestand op de weergave werkt in Chrome, Edge, Firefox en Safari.
- **Bestanden van een telefoon of tablet.** Op iPhone en iPad toont Openen de Bestanden-app; opgeslagen bestanden gaan naar Bestanden, Downloads. Op Android gaan ze naar de downloadmap.

De inhoud van de bestanden verschilt niet tussen browsers of besturingssystemen.
