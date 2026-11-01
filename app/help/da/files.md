---
title: Filer: åbn, gem og eksportér
summary: De del- og samlingsfiler, PartCraft åbner og gemmer, alle eksportformater og hvad de beholder, hvor filer havner, og hvad der ændrer sig offline eller mellem browsere.
keywords: åbn, gem, eksportér, download, fil, partcraft.json, samlingsfil, stl, 3mf, step, dxf, pdf, hvor er mine filer, offline, gem som
from: c15c2c48
---

PartCraft arbejder på filer på din computer. Det uploader aldrig en del, og der er ingen konto eller skylager involveret. Skygemning findes ikke endnu.

## Hvad PartCraft åbner

| Fil | Filendelse | Sådan |
|---|---|---|
| En PartCraft-del | `.partcraft.json` | {{ui:Åbn}}, {{key:Mod+O}}, eller slip den på 3D-visningen |
| En PartCraft-samling | `.partcraft-asm.json` | Det samme: PartCraft ser, hvilken slags det er |
| Et STEP-legeme | `.step`, `.stp` | Et massivt legeme læst som trekanter: [Åbn en STEP-fil og byg videre på den](topic:import-step) |

STL-, OBJ- og 3MF-net åbnes også som massive legemer ([Åbn en STL, OBJ eller 3MF](topic:open-meshes)), og det gør `.3dm`-filer også ([Åbn en .3dm-model](topic:open-3dm-files)). DXF, IGES og andre programmers egne delfiler kan ikke åbnes (se [Hvad der ikke er lavet endnu](topic:not-built-yet)).

Regler ved åbning:

- En del- eller samlingsfils navn skal ende på `.json`, og filen skal være under 50 MB.
- Filer kontrolleres, før noget vises. En beskadiget eller redigeret fil afvises med en klar årsag, for eksempel »Dette er ikke en PartCraft-fil.«
- En fil gemt af en nyere PartCraft afvises: »Denne fil blev gemt af en nyere PartCraft (filversion 3); denne læser version 2.« Ældre filer åbnes.
- Hvis delen på skærmen har ikke-gemte ændringer, spørger PartCraft først: {{ui:Annuller}}, {{ui:Kassér ændringer}} eller {{ui:Gem først}}.

## Gem

{{ui:Gem}} eller {{key:Mod+S}} gemmer det, der er på skærmen:

- På en del: `<part name>.partcraft.json`, den komplette historik (skitser, relationer, mål, features, rulleplaceringen), tegningsarkets snit-, detalje- og GD&T-noter samt den fulde tekst af et STEP-legeme, der blev importeret i en tidligere version. Features, som denne version ikke kan bygge, gemmes uændret tilbage. Selve det massive legeme gemmes ikke; PartCraft genopbygger det fra historikken, når filen åbnes.
- I en samling: `<assembly name>.partcraft-asm.json`, med **hver del indeni**. Én fil bærer hele samlingen, så du kan sende den alene.

At gemme er en **download**. Din browser lægger filen i sin downloadmappe eller spørger, hvor den skal lægges, hvis du har indstillet det. Gemmer du igen, laves en ny download; browseren kan give den navnet `Del1 (1).partcraft.json` i stedet for at erstatte den gamle. Omdøb eller flyt filer i {{pick:mac=Finder|windows=Filutforskeren|linux=din filhåndtering}}, som du vil.

Andre tegn end bogstaver, cifre, mellemrum, `_`, `.` og `-` i delens navn bliver til `_` i filnavnet.

:::tip
De fleste browsere har en indstilling, der spørger, hvor hver download skal gemmes. Slå den til, hvis du vil have et valg som »Gem som« hver gang: i Chrome og Edge findes den under Downloads i indstillingerne, i Firefox under Generelt, Filer og programmer, i Safari under Generelt, Placering af filhentninger.
:::

Mere om, hvor downloads havner, og hvordan du holder filer sikre: [Hvor dine filer havner](common:your-files).

## Eksport

Menuen {{ui:Eksportér}} skriver andre formater. Hver er en download, opkaldt efter delen.

| Menupunkt | Fil | Hvad der er i den |
|---|---|---|
| {{ui:STL, til 3D-print}} | `<name>.stl` | Binær STL af det massive legemes trekanter, millimeter, **Z op** |
| {{ui:3MF, til 3D-print}} | `<name>.3mf` | 3MF med det massive legeme som ét objekt, millimeter, **Z op** |
| {{ui:STEP AP242 (eksakt massivt legeme)}} | `<name>.step` | Ikke lavet endnu i denne version (nedtonet): det kræver en eksakt kerne |
| {{ui:STEP AP214 (eksakt massivt legeme)}} | `<name>.step` | Ikke lavet endnu i denne version (nedtonet) |
| {{ui:STEP (facetteret, netkerne)}} | `<name>.step` | Et massivt legeme af plane flader fra nettet: **runde overflader er mange små plane facetter**. Millimeter, i PartCrafts egne akser (Y op). Den STEP, du bruger til andre CAD-programmer i denne version |
| {{ui:DXF af skitsen eller den plane flade}} | `<name> - <sketch>.dxf` eller `<name> - face.dxf` | DXF R12. En skitse: linjer, buer, cirkler og punkter i skitsens egne koordinater, på lagene PROFILE, CONSTRUCTION og POINTS. En valgt plan flade: dens konturer som lukkede polylinjer (runde kanter som deres facetter) |
| {{ui:Tegning (PDF): visninger, snit, detalje, GD&T}} | `<name> - drawing.pdf` | A3-tegningsarket: tre visninger, isometri, snit og detalje, hvis angivet, hovedmål, GD&T-symboler, tegningshoved |

:::note
{{ui:STEP AP242 (eksakt massivt legeme)}} og {{ui:STEP AP214 (eksakt massivt legeme)}} er ikke lavet endnu i denne version: brug {{ui:STEP (facetteret, netkerne)}}. Den har den rigtige form og volumen, men hver rund flade er mange plane facetter, så andre programmer ikke kan vælge et hul som en cylinder. Sæt **Kurver** finere først, hvis det betyder noget.
:::

- Eksporter er af delen på skærmen. Eksport er slået fra i en samling; der er ingen samlingseksport endnu.
- STL, 3MF, den facetterede STEP og flade-DXF'en er altid lavet af facetter. Indstillingen **Kurver** (i højre panel med intet valgt) bestemmer, hvor fine de er, fra 32 til 256 facetter pr. omgang. Vælg Fin eller Meget fin, før du eksporterer STL eller 3MF til en glat udskrift.
- PDF-tegningen bruger læserens indbyggede skrifttype Helvetica. Tegn, den ikke kan vise, udskrives som »?«.

Trin for trin: [Eksportér til print, STEP og DXF](topic:export-files) og [Lav et tegningsark](topic:drawing-pdf).

## Ikke-gemt arbejde

- PartCraft beholder en gendannelseskopi af den åbne del eller samling i denne browser et øjeblik efter hver ændring, så et nedbrud eller en lukket fane ikke mister den: næste gang du åbner PartCraft, spørger det »Gendan dit arbejde?«. Det er ikke en gemning: gem til en fil for at beholde dit arbejde. Se [Gendan ikke-gemt arbejde](common:recover).
- Hvis du prøver at lukke fanen eller genindlæse med ikke-gemte ændringer, spørger browseren »Forlad websted?«. Det er browserens egen boks; PartCraft kan ikke ændre dens ordlyd.
- {{ui:Ny}}, {{ui:Åbn}} og lukning af en samling spørger, før ikke-gemte ændringer kasseres.

## Online og offline

Alt sker på din computer: netkernen (et WebAssembly-program) downloades med appen og bygger geometri lokalt, og filer læses fra og skrives til din disk. Ingen deldata går over netværket. Se [Netkernen](topic:solid-kernels).

For at arbejde helt uden forbindelse gemmer du PartCraft til offline brug, mens du er online: vælg {{ui:Gem til offline brug}} i applinjen og vent, mens den tæller (»Gemmer 40 af 212«), indtil den siger **Klar offline**. Den gemte kopi indeholder 3D-biblioteket og netkernen, så bagefter virker modellering, gemning, alle eksporter og tegninger offline. Hvis den siger **Kunne ikke gemme**, så klik på den for at prøve igen, mens du er online; **Offline er ikke tilgængelig** betyder, at dette browservindue ikke kan beholde en kopi (private vinduer og nogle administrerede computere). Når kopien er gemt, tilbyder et klik på **Klar offline** {{ui:Gem igen (hent den nyeste version)}} og {{ui:Fjern offlinekopien}}. Detaljer: [Arbejd offline](common:offline).

:::online
Du er online. Selv uden at gemme til offline brug kan du, når PartCraft er indlæst, og statuslinjens chip siger »Netkerne«, blive ved med at arbejde, hvis forbindelsen falder ud. Genindlæs bare ikke siden, før du er online igen.
:::

:::offline
Du er offline. Hvis PartCraft allerede er åbent, så fortsæt med at arbejde; at gemme og eksportere virker stadig. Hvis applinjen siger **Klar offline**, åbner PartCraft også fra bunden uden forbindelse; ellers skal du ikke genindlæse denne fane.
:::

## Forskelle mellem browsere

- **Downloads.** Hver browser har sin egen downloadmappe og sin egen måde at spørge på. Hvis en browser spørger, om dette websted må downloade filer, så tillad det, ellers kan det ikke lade sig gøre at gemme og eksportere.
- **Træk og slip** af en fil på visningen virker i Chrome, Edge, Firefox og Safari.
- **Filer fra en telefon eller tablet.** På iPhone og iPad viser Åbn appen Filer; gemte filer havner i Filer, Downloads. På Android havner de i mappen Downloads.

Der er ingen forskel på, hvad filerne indeholder, mellem browsere eller operativsystemer.
