---
title: Filer: åpne, lagre og eksporter
summary: Del- og sammenstillingsfilene PartCraft åpner og lagrer, hvert eksportformat og hva det beholder, hvor filene havner, og hva som endres frakoblet eller mellom nettlesere.
keywords: åpne, lagre, eksporter, last ned, fil, partcraft.json, sammenstillingsfil, stl, 3mf, step, dxf, pdf, hvor er filene mine, frakoblet, lagre som
from: e5fbc7e3
---

PartCraft jobber med filer på datamaskinen. Den laster aldri opp en del, og det er ingen konto eller skylagring involvert. Skylagring er ikke tilgjengelig ennå.

## Hva PartCraft åpner

| Fil | Filendelse | Slik |
|---|---|---|
| En PartCraft-del | `.partcraft.json` | {{ui:Åpne}}, {{key:Mod+O}}, eller slipp den på 3D-visningen |
| En PartCraft-sammenstilling | `.partcraft-asm.json` | Det samme: PartCraft ser hvilken type den er |
| Et STEP-volumlegeme | `.step`, `.stp` | Et volumlegeme lest som trekanter: [Åpne en STEP-fil og bygg videre på den](topic:import-step) |

STL-, OBJ- og 3MF-nett åpnes også som volumlegemer ([Åpne en STL, OBJ eller 3MF](topic:open-meshes)), og det samme gjelder `.3dm`-filer ([Åpne en .3dm-modell](topic:open-3dm-files)). DXF, IGES og andre programmers egne delfiler kan ikke åpnes (se [Hva som ikke er bygget ennå](topic:not-built-yet)).

Regler ved åpning:

- En del- eller sammenstillingsfil må ende på `.json`, og filen må være under 50 MB.
- Filene kontrolleres før noe vises. En skadet eller redigert fil avvises med en enkel begrunnelse, for eksempel at dette ikke er en PartCraft-fil.
- En fil lagret av en nyere PartCraft avvises, med en melding som sier hvilken filversjon den har, og hvilken versjon denne leser. Eldre filer åpnes.
- Hvis delen på skjermen har ulagrede endringer, spør PartCraft først: {{ui:Avbryt}}, {{ui:Forkast endringer}} eller {{ui:Lagre først}}.

## Lagring

{{ui:Lagre}} eller {{key:Mod+S}} lagrer det som er på skjermen:

- På en del: `<part name>.partcraft.json`, hele historikken (skisser, relasjoner, mål, funksjoner, tilbakerullingsposisjonen), snitt-, detalj- og GD&T-merknadene til tegningsarket, og hele teksten til et STEP-volumlegeme importert i en tidligere versjon. Funksjoner denne versjonen ikke kan bygge, lagres tilbake uendret. Volumlegemet selv lagres ikke; PartCraft bygger det på nytt fra historikken når filen åpnes.
- I en sammenstilling: `<assembly name>.partcraft-asm.json`, med **hver del inni**. Én fil bærer hele sammenstillingen, så den kan sendes alene.

Lagring er en **nedlasting**. Nettleseren legger filen i nedlastingsmappen sin, eller spør hvor den skal legges hvis den er satt til å spørre. Lagrer du på nytt, lages en ny nedlasting; nettleseren kan gi den navnet `Part1 (1).partcraft.json` i stedet for å erstatte den gamle. Gi nytt navn til eller flytt filer i {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren}} slik det passer.

Tegn i delnavnet som ikke er bokstaver, sifre, mellomrom, `_`, `.` og `-`, blir `_` i filnavnet.

:::tip
De fleste nettlesere har en innstilling som spør hvor hver nedlasting skal lagres. Slå den på hvis du vil ha et «Lagre som»-valg hver gang: i Chrome og Edge ligger den under Nedlastinger i innstillingene; i Firefox under Generelt, Filer og programmer; i Safari under Generelt, Filplassering for nedlasting.
:::

Mer om hvor nedlastinger havner og hvordan filene holdes trygge: [Hvor filene havner](common:your-files).

## Eksport

{{ui:Eksporter}}-menyen skriver andre formater. Hver er en nedlasting, navngitt etter delen.

| Menypunkt | Fil | Hva som er med |
|---|---|---|
| {{ui:STL, for 3D-utskrift}} | `<name>.stl` | Binær STL med volumlegemets trekanter, millimeter, **Z opp** |
| {{ui:3MF, for 3D-utskrift}} | `<name>.3mf` | 3MF med volumlegemet som ett objekt, millimeter, **Z opp** |
| {{ui:STEP AP242 (eksakt volumlegeme)}} | `<name>.step` | Ett eksakt volumlegeme, millimeter, Z opp: runde flater som ekte sylindre, kjegler, kuler og torer. STEP-formatet å bruke for andre CAD- og CAM-programmer |
| {{ui:STEP AP214 (eksakt volumlegeme)}} | `<name>.step` | Det samme eksakte volumlegemet i det eldre AP214-skjemaet |
| {{ui:STEP (fasettert, nettkjerne)}} | `<name>.step` | Et volumlegeme laget av plane flater fra nettet: **runde overflater er mange små plane fasetter**. Millimeter, i PartCraft sine egne akser (Y opp). For et program som avviser den eksakte filen |
| {{ui:DXF av skissen eller den plane flaten}} | `<name> - <sketch>.dxf` eller `<name> - face.dxf` | DXF R12. En skisse: linjer, buer, sirkler og punkter i skissens egne koordinater, på lagene PROFILE, CONSTRUCTION og POINTS. En valgt plan flate: omrissene som lukkede polylinjer (runde kanter som sine fasetter) |
| {{ui:Tegning (PDF): visninger, snitt, detalj, GD&T}} | `<name> - drawing.pdf` | A3-tegningsarket: tre visninger, isometrisk, snitt og detalj hvis satt, totalmål, GD&T-symboler, tegningshode |

:::note
{{ui:STEP AP242 (eksakt volumlegeme)}} skriver hull, opphøyninger, avrundinger, kjegler, kuler og torer på sine ekte overflater, så et annet program kan velge et hull som en sylinder; **Kurver** endrer det ikke. Spline-sider, modellerte gjenger og importerte nett har ingen eksakt overflate og forblir plane fasetter i samme volumlegeme; statuslinjen sier hvor mange. {{ui:STEP (fasettert, nettkjerne)}} skriver hver rund flate som fasetter.
:::

- Eksporter gjelder delen på skjermen. Eksport er avslått i en sammenstilling; det finnes ingen sammenstillingseksport ennå.
- STL, 3MF, den fasetterte STEP-filen og flate-DXF-en er alltid laget av fasetter. Innstillingen **Kurver** (i høyre panel når ingenting er valgt) angir hvor fine de er, fra 32 til 256 fasetter per omdreining. Velg Fin eller Svært fin før du eksporterer STL eller 3MF for en jevn utskrift.
- PDF-tegningen bruker leserens innebygde Helvetica-skrift. Tegn den ikke kan vise, skrives ut som «?».

Steg for steg: [Eksporter for 3D-utskrift, STEP og DXF](topic:export-files) og [Lag et tegningsark](topic:drawing-pdf).

## Ulagret arbeid

- PartCraft beholder en gjenopprettingskopi av den åpne delen eller sammenstillingen i denne nettleseren kort tid etter hver endring, så et krasj eller en lukket fane ikke mister den. Neste gang PartCraft åpnes, spør den om du vil gjenopprette arbeidet ditt. Det er ikke en lagring: lagre til en fil for å beholde arbeidet. Se [Gjenopprett ulagret arbeid](common:recover).
- Hvis fanen lukkes eller siden lastes på nytt med ulagrede endringer, spør nettleseren om du vil forlate siden. Det er nettleserens egen boks; PartCraft kan ikke endre ordlyden.
- {{ui:Ny}}, {{ui:Åpne}} og lukking av en sammenstilling spør før ulagrede endringer forkastes.

## Tilkoblet og frakoblet

Alt skjer på datamaskinen: nettkjernen (et WebAssembly-program) lastes ned sammen med appen og bygger geometri lokalt, og filer leses fra og skrives til disken. Ingen deldata går over nettverket. Se [Nettkjernen](topic:solid-kernels).

For å jobbe uten noen tilkobling i det hele tatt, lagre PartCraft for frakoblet bruk mens du er tilkoblet: velg {{ui:Lagre for frakoblet bruk}} i programlinjen og vent mens den teller antall lagrede av totalt, til den sier **Klar frakoblet**. Den lagrede kopien inkluderer 3D-biblioteket og nettkjernen, så etterpå fungerer modellering, lagring, alle eksporter og tegninger frakoblet. Sier den **Kunne ikke lagre**, klikk på den for å prøve igjen mens du er tilkoblet. **Frakoblet ikke tilgjengelig** betyr at dette nettleservinduet ikke kan beholde en kopi (private vinduer og noen administrerte datamaskiner). Med kopien lagret tilbyr et klikk på **Klar frakoblet** {{ui:Lagre på nytt (hent nyeste versjon)}} og {{ui:Fjern den frakoblede kopien}}. Detaljer: [Arbeide frakoblet](common:offline).

:::online
Tilkoblet. Selv uten å lagre for frakoblet bruk kan arbeidet fortsette hvis forbindelsen brytes, når PartCraft er lastet og statuslinjens merke sier «Nettkjerne». Ikke last siden på nytt før tilkoblingen er tilbake.
:::

:::offline
Ingen tilkobling. Hvis PartCraft allerede er åpen, fortsett å jobbe; lagring og eksport fungerer fortsatt. Hvis programlinjen sier **Klar frakoblet**, åpnes PartCraft også fra bunnen av uten tilkobling; ellers ikke last denne fanen på nytt.
:::

## Forskjeller mellom nettlesere

- **Nedlastinger.** Hver nettleser har sin egen nedlastingsmappe og sin egen måte å spørre på. Hvis en nettleser spør om dette nettstedet kan laste ned filer, tillat det, ellers kan ikke lagring og eksport fungere.
- **Dra og slipp** av en fil på visningen fungerer i Chrome, Edge, Firefox og Safari.
- **Filer fra mobil eller nettbrett.** På iPhone og iPad viser Åpne Filer-appen; lagrede filer havner i Filer, Nedlastinger. På Android havner de i Nedlastinger-mappen.

Det er ingen forskjell i hva filene inneholder mellom nettlesere eller operativsystemer.
