---
title: Bestanden: openen, opslaan en exporteren
summary: De onderdeel- en samenstellingsbestanden die PartCraft opent en opslaat, elke exportindeling en wat die bewaart, waar bestanden naartoe gaan en wat er offline of tussen browsers verandert.
keywords: openen, opslaan, exporteren, downloaden, bestand, partcraft.json, samenstellingsbestand, stl, 3mf, step, dxf, pdf, waar zijn mijn bestanden, offline, opslaan als
from: c15c2c48
---

PartCraft werkt met bestanden op uw computer. Het uploadt nooit een onderdeel en er is geen account of cloudopslag bij betrokken. Opslaan in de cloud is nog niet beschikbaar.

## Wat PartCraft opent

| Bestand | Extensie | Hoe |
|---|---|---|
| Een PartCraft-onderdeel | `.partcraft.json` | {{ui:Openen}}, {{key:Mod+O}}, of neerzetten op de 3D-weergave |
| Een PartCraft-samenstelling | `.partcraft-asm.json` | Hetzelfde: PartCraft ziet welk soort het is |
| Een STEP-volume | `.step`, `.stp` | Een volumelichaam gelezen als driehoeken: [Een STEP-bestand openen en erop voortbouwen](topic:import-step) |

STL-, OBJ- en 3MF-meshes openen ook als volumelichamen ([Een STL, OBJ of 3MF openen](topic:open-meshes)), en `.3dm`-bestanden eveneens ([Een .3dm-model openen](topic:open-3dm-files)). DXF, IGES en de eigen onderdeelbestanden van andere programma's kunnen niet worden geopend (zie [Wat nog niet beschikbaar is](topic:not-built-yet)).

Regels bij het openen:

- De naam van een onderdeel- of samenstellingsbestand moet op `.json` eindigen en het bestand moet kleiner zijn dan 50 MB.
- Bestanden worden gecontroleerd voordat er iets wordt getoond. Een beschadigd of bewerkt bestand wordt geweigerd met een duidelijke reden, bijvoorbeeld "Dit is geen PartCraft-bestand."
- Een bestand dat door een nieuwere PartCraft is opgeslagen, wordt geweigerd: "Dit bestand is opgeslagen door een nieuwere PartCraft (bestandsversie 3); deze leest versie 2." Oudere bestanden openen.
- Als het onderdeel op het scherm niet-opgeslagen wijzigingen heeft, vraagt PartCraft het eerst: {{ui:Annuleren}}, {{ui:Wijzigingen weggooien}} of {{ui:Eerst opslaan}}.

## Opslaan

{{ui:Opslaan}} of {{key:Mod+S}} slaat op wat op het scherm staat:

- Bij een onderdeel: `<onderdeelnaam>.partcraft.json`, de volledige geschiedenis (schetsen, relaties, maten, features, de terugrolpositie), de doorsnede, het detail en de GD&T-notities van het tekenblad, en de volledige tekst van een STEP-volume dat in een eerdere versie is geïmporteerd. Features die deze versie niet kan opbouwen, worden ongewijzigd teruggeschreven. Het volume zelf wordt niet opgeslagen; PartCraft bouwt het opnieuw op uit de geschiedenis als het bestand opent.
- In een samenstelling: `<samenstellingsnaam>.partcraft-asm.json`, met **elk onderdeel erin**. Eén bestand bevat de hele samenstelling, dus u kunt het los versturen.

Opslaan is een **download**. Uw browser zet het bestand in zijn downloadmap, of vraagt waar het moet komen als u dat zo hebt ingesteld. Opnieuw opslaan maakt een nieuwe download; de browser kan hem `Onderdeel1 (1).partcraft.json` noemen in plaats van het oude bestand te vervangen. Hernoem of verplaats bestanden in {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheer}} zoals u wilt.

Tekens anders dan letters, cijfers, spaties, `_`, `.` en `-` in de onderdeelnaam worden `_` in de bestandsnaam.

:::tip
De meeste browsers hebben een instelling om bij elke download te vragen waar hij moet worden opgeslagen. Zet die aan als u elke keer een keuze "Opslaan als" wilt: in Chrome en Edge staat die onder Downloads in de instellingen; in Firefox onder Algemeen, Bestanden en toepassingen; in Safari onder Algemeen, Locatie voor gedownloade bestanden.
:::

Meer over waar downloads naartoe gaan en hoe u bestanden veilig houdt: [Waar uw bestanden naartoe gaan](common:your-files).

## Exporteren

Het menu {{ui:Exporteren}} schrijft andere indelingen. Elke is een download, genoemd naar het onderdeel.

| Menu-item | Bestand | Wat erin zit |
|---|---|---|
| {{ui:STL, voor 3D-printen}} | `<naam>.stl` | Binaire STL van de driehoeken van het volume, millimeters, **Z omhoog** |
| {{ui:3MF, voor 3D-printen}} | `<naam>.3mf` | 3MF met het volume als één object, millimeters, **Z omhoog** |
| {{ui:STEP AP242 (exact volume)}} | `<naam>.step` | In deze versie nog niet beschikbaar (grijs): het heeft een exacte kernel nodig |
| {{ui:STEP AP214 (exact volume)}} | `<naam>.step` | In deze versie nog niet beschikbaar (grijs) |
| {{ui:STEP (gefacetteerd, meshkernel)}} | `<naam>.step` | Een volume van platte vlakken uit de mesh: **ronde oppervlakken zijn veel kleine platte facetten**. Millimeters, in de eigen assen van PartCraft (Y omhoog). De STEP die u in deze versie voor andere CAD-programma's gebruikt |
| {{ui:DXF van de schets of het platte vlak}} | `<naam> - <schets>.dxf` of `<naam> - face.dxf` | DXF R12. Een schets: lijnen, bogen, cirkels en punten in de eigen coördinaten van de schets, op de lagen PROFILE, CONSTRUCTION en POINTS. Een gekozen plat vlak: zijn omtrekken als gesloten polylijnen (ronde randen als hun facetten) |
| {{ui:Tekening (PDF): aanzichten, doorsnede, detail, GD&T}} | `<naam> - drawing.pdf` | Het A3-tekenblad: drie aanzichten, isometrisch, doorsnede en detail indien ingesteld, totale maten, GD&T-symbolen, titelblok |

:::note
{{ui:STEP AP242 (exact volume)}} en {{ui:STEP AP214 (exact volume)}} zijn in deze versie nog niet beschikbaar: gebruik {{ui:STEP (gefacetteerd, meshkernel)}}. Die heeft de juiste vorm en het juiste volume, maar elk rond vlak bestaat uit veel platte facetten, dus andere programma's kunnen een gat niet als cilinder selecteren. Stel **Krommen** eerst fijner in als dat ertoe doet.
:::

- Exports gelden voor het onderdeel op het scherm. Exporteren is uitgeschakeld in een samenstelling; er is nog geen export van samenstellingen.
- STL, 3MF, de gefacetteerde STEP en de vlak-DXF bestaan altijd uit facetten. De instelling **Krommen** (in het rechterpaneel als niets geselecteerd is) bepaalt hoe fijn ze zijn, van 32 tot 256 facetten per omwenteling. Kies Fijn of Zeer fijn voordat u STL of 3MF exporteert voor een gladde print.
- De pdf-tekening gebruikt het ingebouwde lettertype Helvetica van de lezer. Tekens die het niet kan tonen, worden als "?" afgedrukt.

Stap voor stap: [Exporteren voor printen, STEP en DXF](topic:export-files) en [Een tekenblad maken](topic:drawing-pdf).

## Niet-opgeslagen werk

- PartCraft bewaart een ogenblik na elke wijziging een herstelkopie van het geopende onderdeel of de samenstelling in deze browser, zodat een crash of een gesloten tabblad het niet kwijtraakt: de volgende keer dat u PartCraft opent, vraagt het "Uw werk herstellen?". Het is geen opslag: sla op in een bestand om uw werk te bewaren. Zie [Niet-opgeslagen werk herstellen](common:recover).
- Als u het tabblad probeert te sluiten of de pagina opnieuw te laden met niet-opgeslagen wijzigingen, vraagt de browser "Site verlaten?". Dat is het eigen vak van de browser; PartCraft kan de tekst ervan niet wijzigen.
- {{ui:Nieuw}}, {{ui:Openen}} en het sluiten van een samenstelling vragen eerst voordat niet-opgeslagen wijzigingen worden weggegooid.

## Online en offline

Alles gebeurt op uw computer: de meshkernel (een WebAssembly-programma) wordt met de app gedownload en bouwt de geometrie lokaal op, en bestanden worden van en naar uw schijf gelezen en geschreven. Er gaan geen onderdeelgegevens over het netwerk. Zie [De meshkernel](topic:solid-kernels).

Om helemaal zonder verbinding te werken slaat u PartCraft op voor offline gebruik terwijl u online bent: kies {{ui:Opslaan voor offline gebruik}} in de appbalk en wacht terwijl het telt ("Opslaan 40 van 212") totdat er **Klaar voor offline gebruik** staat. De opgeslagen kopie bevat de 3D-bibliotheek en de meshkernel, dus daarna werken modelleren, opslaan, elke export en tekeningen allemaal offline. Als er **Kon niet opslaan** staat, klik er dan op om het opnieuw te proberen terwijl u online bent; **Offline gebruik is niet beschikbaar** betekent dat dit browservenster geen kopie kan bewaren (privévensters en sommige beheerde computers). Met de kopie opgeslagen biedt een klik op **Klaar voor offline gebruik** {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} en {{ui:De offlinekopie verwijderen}} aan. Details: [Offline werken](common:offline).

:::online
U bent online. Ook zonder opslaan voor offline gebruik kunt u, zodra PartCraft is geladen en de chip in de statusbalk "Meshkern" zegt, doorwerken als de verbinding wegvalt. Laad de pagina alleen niet opnieuw totdat u weer online bent.
:::

:::offline
U bent offline. Als PartCraft al open is, werk dan gewoon door; opslaan en exporteren werken nog. Als de appbalk **Klaar voor offline gebruik** zegt, opent PartCraft ook helemaal opnieuw zonder verbinding; laad anders dit tabblad niet opnieuw.
:::

## Verschillen tussen browsers

- **Downloads.** Elke browser heeft zijn eigen downloadmap en zijn eigen manier van vragen. Als een browser vraagt of deze site bestanden mag downloaden, sta dat dan toe, anders kunnen opslaan en exporteren niet werken.
- **Slepen en neerzetten** van een bestand op de weergave werkt in Chrome, Edge, Firefox en Safari.
- **Bestanden van een telefoon of tablet.** Op iPhone en iPad toont Openen de app Bestanden; opgeslagen bestanden gaan naar Bestanden, Downloads. Op Android gaan ze naar de map Downloads.

Er is geen verschil in wat de bestanden bevatten tussen browsers of besturingssystemen.
