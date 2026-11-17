---
title: Filer: åbn, gem og eksportér
summary: De del- og samlingsfiler PartCraft åbner og gemmer, hvert eksportformat og hvad det beholder, hvor filer havner, og hvad der ændrer sig offline eller mellem browsere.
keywords: åbn, gem, eksportér, download, fil, partcraft.json, samlingsfil, stl, 3mf, step, dxf, pdf, hvor er mine filer, offline, gem som
from: e5fbc7e3
---

PartCraft arbejder med filer på din computer. Den uploader aldrig en del, og der er ingen konto eller skylager involveret. Skylagring er endnu ikke tilgængelig.

## Hvad PartCraft åbner

| Fil | Endelse | Hvordan |
|---|---|---|
| En PartCraft-del | `.partcraft.json` | {{ui:Åbn}}, {{key:Mod+O}}, eller slip den på 3D-visningen |
| En PartCraft-samling | `.partcraft-asm.json` | Det samme: PartCraft ser, hvilken type den er |
| Et STEP-legeme | `.step`, `.stp` | Et massivt legeme læst som trekanter: [Åbn en STEP-fil og byg videre på den](topic:import-step) |

STL-, OBJ- og 3MF-meshes åbnes også som massive legemer ([Åbn en STL, OBJ eller 3MF](topic:open-meshes)), og det samme gælder `.3dm`-filer ([Åbn en .3dm-model](topic:open-3dm-files)). DXF, IGES og andre programmers egne delfiler kan ikke åbnes (se [Hvad der endnu ikke er lavet](topic:not-built-yet)).

Regler ved åbning:

- Et del- eller samlingsfilnavn skal ende på `.json`, og filen skal være under 50 MB.
- Filer kontrolleres, før noget vises. En beskadiget eller redigeret fil afvises med en klar årsag, for eksempel »Dette er ikke en PartCraft-fil.«
- En fil gemt af en nyere PartCraft afvises: »Denne fil blev gemt af en nyere PartCraft (filversion 3); denne læser version 2.« Ældre filer åbnes.
- Hvis delen på skærmen har ugemte ændringer, spørger PartCraft først: {{ui:Annuller}}, {{ui:Kassér ændringer}} eller {{ui:Gem først}}.

## Gem

{{ui:Gem}} eller {{key:Mod+S}} gemmer det, der er på skærmen:

- På en del: `<delnavn>.partcraft.json`, hele historikken (skitser, relationer, mål, features, rulleposition), tegningsarkets snit-, detalje- og GD&T-noter, og den fulde tekst af ethvert STEP-legeme importeret i en tidligere build. Features denne version ikke kan bygge, gemmes tilbage uændret. Selve legemet gemmes ikke; PartCraft bygger det igen ud fra historikken, når filen åbnes.
- I en samling: `<samlingsnavn>.partcraft-asm.json`, med **hver del indeni**. Én fil rummer hele samlingen, så du kan sende den alene.

At gemme er en **download**. Din browser lægger filen i sin downloadmappe, eller spørger, hvor den skal lægges, hvis du har slået det til. Gemmer du igen, laves en ny download; browseren kan kalde den `Part1 (1).partcraft.json` i stedet for at erstatte den gamle. Omdøb eller flyt filer i {{pick:mac=Finder|windows=Stifinder|linux=din filhåndtering}}, som du vil.

Tegn i delnavnet, der ikke er bogstaver, cifre, mellemrum, `_`, `.` eller `-`, bliver til `_` i filnavnet.

:::tip
De fleste browsere har en indstilling, der spørger, hvor hver download skal gemmes. Slå den til, hvis du vil have et valg af »Gem som« hver gang: i Chrome og Edge under Downloads i indstillingerne; i Firefox under Generelt, Filer og programmer; i Safari under Generelt, Downloadplacering for filer.
:::

Mere om hvor downloads havner, og hvordan du holder filer sikre: [Hvor dine filer havner](common:your-files).

## Eksport

{{ui:Eksportér}}-menuen skriver andre formater. Hver er en download, navngivet efter delen.

| Menupunkt | Fil | Indhold |
|---|---|---|
| {{ui:STL, til 3D-print}} | `<navn>.stl` | Binær STL af det massive legemes trekanter, millimeter, **Z op** |
| {{ui:3MF, til 3D-print}} | `<navn>.3mf` | 3MF med det massive legeme som ét objekt, millimeter, **Z op** |
| {{ui:STEP AP242 (eksakt massivt legeme)}} | `<navn>.step` | Ét eksakt massivt legeme, millimeter, Z op: runde flader som sande cylindre, kegler, kugler og tori. Den STEP der bruges til andre CAD- og CAM-programmer |
| {{ui:STEP AP214 (eksakt massivt legeme)}} | `<navn>.step` | Samme eksakte massive legeme i det ældre AP214-skema |
| {{ui:STEP (facetteret, netkerne)}} | `<navn>.step` | Et massivt legeme af plane flader fra mesh'en: **runde overflader er mange små plane facetter**. Millimeter, i PartCraft's egne akser (Y op). Til et program der afviser den eksakte fil |
| {{ui:DXF af skitsen eller den plane flade}} | `<navn> - <skitse>.dxf` eller `<navn> - face.dxf` | DXF R12. En skitse: linjer, buer, cirkler og punkter i skitsens egne koordinater, på lagene PROFILE, CONSTRUCTION og POINTS. En valgt plan flade: dens konturer som lukkede polylinjer (runde kanter som deres facetter) |
| {{ui:Tegning (PDF): visninger, snit, detalje, GD&T}} | `<navn> - drawing.pdf` | A3-tegningsarket: tre visninger, isometrisk, snit og detalje hvis sat, samlede mål, GD&T-symboler, tegningshoved |

:::note
{{ui:STEP AP242 (eksakt massivt legeme)}} skriver huller, ophøjninger, afrundinger, kegler, kugler og tori på deres sande overflader, så et andet program kan vælge et hul som en cylinder; **Kurver** ændrer det ikke. Splines-sider, modellerede gevind og importerede meshes har ingen eksakt overflade og forbliver plane facetter i samme massive legeme; statuslinjen siger, hvor mange. {{ui:STEP (facetteret, netkerne)}} skriver hver rund flade som facetter.
:::

- Eksporter gælder for delen på skærmen. Eksport er slået fra i en samling; der er endnu ingen samlingseksport.
- STL, 3MF, den facetterede STEP og flade-DXF'en består altid af facetter. Indstillingen **Kurver** (i højre panel, når intet er valgt) styrer, hvor fine de er, fra 32 til 256 facetter pr. omdrejning. Vælg Fin eller Meget fin, før du eksporterer STL eller 3MF til en glat print.
- PDF-tegningen bruger læserens indbyggede Helvetica-skrifttype. Tegn, den ikke kan vise, udskrives som "?".

Trin for trin: [Eksport til print, STEP og DXF](topic:export-files) og [Lav et tegningsark](topic:drawing-pdf).

## Ugemt arbejde

- PartCraft gemmer en gendannelseskopi af den åbne del eller samling i denne browser kort efter hver ændring, så et nedbrud eller en lukket fane ikke mister den: næste gang du åbner PartCraft, spørger den »Gendan dit arbejde?«. Det er ikke en gemning: gem til en fil for at beholde dit arbejde. Se [Gendan ugemt arbejde](common:recover).
- Hvis du prøver at lukke fanen eller genindlæse med ugemte ændringer, spørger browseren »Forlad siden?«. Det er browserens egen boks; PartCraft kan ikke ændre ordlyden.
- {{ui:Ny}}, {{ui:Åbn}} og lukning af en samling spørger, før ugemte ændringer kasseres.

## Online og offline

Alt sker på din computer: mesh-kernen (et WebAssembly-program) hentes sammen med appen og bygger geometri lokalt, og filer læses og skrives fra din disk. Ingen delsdata sendes over netværket. Se [Mesh-kernen](topic:solid-kernels).

For at arbejde uden forbindelse overhovedet: gem PartCraft til offlinebrug, mens du er online. Vælg {{ui:Gem til offline brug}} i appbaren, og vent, mens den tæller ("Gemmer 40 af 212"), til der står **Offline klar**. Den gemte kopi omfatter 3D-biblioteket og mesh-kernen, så bagefter virker modellering, gemning, al eksport og tegninger alle offline. Hvis der står **Kunne ikke gemme**, klik for at prøve igen, mens du er online. **Offline ikke tilgængelig** betyder, at dette browservindue ikke kan gemme en kopi (private vinduer og nogle administrerede computere). Med kopien gemt tilbyder et klik på **Offline klar** {{ui:Gem igen (hent den nyeste version)}} og {{ui:Fjern offlinekopien}}. Detaljer: [Arbejde offline](common:offline).

:::online
Du er online. Selv uden at gemme til offlinebrug kan du, når PartCraft er indlæst, og statuslinjens chip siger "Mesh kernel", blive ved med at arbejde, hvis forbindelsen dør. Genindlæs bare ikke siden, før du er online igen.
:::

:::offline
Du er offline. Hvis PartCraft allerede er åben, bliv ved med at arbejde; gemning og eksport virker stadig. Hvis appbaren siger **Offline klar**, åbner PartCraft også fra bunden uden forbindelse; ellers genindlæs ikke denne fane.
:::

## Forskelle mellem browsere

- **Downloads.** Hver browser har sin egen downloadmappe og sin egen måde at spørge på. Hvis en browser spørger, om denne side må downloade filer, så tillad det, ellers kan gemning og eksport ikke virke.
- **Træk og slip** af en fil ned på visningen virker i Chrome, Edge, Firefox og Safari.
- **Filer fra en telefon eller tablet.** På iPhone og iPad viser Åbn Filer-appen; gemte filer havner i Filer, Downloads. På Android havner de i mappen Downloads.

Der er ingen forskel på, hvad filerne indeholder, mellem browsere eller operativsystemer.
