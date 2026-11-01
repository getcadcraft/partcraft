---
title: Filer: åpne, lagre og eksportere
summary: Del- og sammenstillingsfilene PartCraft åpner og lagrer, hvert eksportformat og hva det beholder, hvor filer havner, og hva som endres frakoblet eller mellom nettlesere.
keywords: åpne, lagre, eksportere, nedlasting, fil, partcraft.json, sammenstillingsfil, stl, 3mf, step, dxf, pdf, hvor er filene mine, frakoblet, lagre som
from: c15c2c48
---

PartCraft arbeider på filer på datamaskinen din. Den laster aldri opp en del, og det er ingen konto eller skylagring involvert. Lagring i skyen er ikke tilgjengelig ennå.

## Hva PartCraft åpner

| Fil | Filtype | Hvordan |
|---|---|---|
| En PartCraft-del | `.partcraft.json` | {{ui:Åpne}}, {{key:Mod+O}}, eller slipp den på 3D-visningen |
| En PartCraft-sammenstilling | `.partcraft-asm.json` | Det samme: PartCraft ser hvilken type det er |
| Et STEP-volumlegeme | `.step`, `.stp` | Et volumlegeme lest som trekanter: [Åpne en STEP-fil og bygg videre på den](topic:import-step) |

STL-, OBJ- og 3MF-nett åpnes også som volumlegemer ([Åpne en STL, OBJ eller 3MF](topic:open-meshes)), og det samme gjelder `.3dm`-filer ([Åpne en .3dm-modell](topic:open-3dm-files)). DXF, IGES og andre programmers egne delfiler kan ikke åpnes (se [Hva som ikke er bygget ennå](topic:not-built-yet)).

Regler ved åpning:

- Navnet på en del- eller sammenstillingsfil må slutte på `.json`, og filen må være under 50 MB.
- Filer kontrolleres før noe vises. En skadet eller redigert fil avvises med en klar årsak, for eksempel «Dette er ikke en PartCraft-fil.»
- En fil lagret av en nyere PartCraft avvises: «Denne filen ble lagret av en nyere PartCraft (filversjon 3); denne leser versjon 2.» Eldre filer åpnes.
- Hvis delen på skjermen har ulagrede endringer, spør PartCraft først: {{ui:Avbryt}}, {{ui:Forkast endringer}} eller {{ui:Lagre først}}.

## Lagring

{{ui:Lagre}} eller {{key:Mod+S}} lagrer det som er på skjermen:

- For en del: `<part name>.partcraft.json`, hele historikken (skisser, betingelser, mål, funksjoner, tilbakerullingsposisjonen), snitt-, detalj- og GD&T-merknadene på tegningsarket, og hele teksten til et STEP-volumlegeme importert i en tidligere versjon. Funksjoner denne versjonen ikke kan bygge, lagres tilbake uendret. Selve volumlegemet lagres ikke; PartCraft bygger det på nytt fra historikken når filen åpnes.
- I en sammenstilling: `<assembly name>.partcraft-asm.json`, med **hver del inni**. Én fil bærer hele sammenstillingen, så du kan sende den alene.

Lagring er en **nedlasting**. Nettleseren legger filen i nedlastingsmappen sin, eller spør hvor den skal legges hvis du har stilt den inn slik. Å lagre på nytt lager en ny nedlasting; nettleseren kan gi den navnet `Part1 (1).partcraft.json` i stedet for å erstatte den gamle. Gi nytt navn til eller flytt filer i {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren din}} som du vil.

Andre tegn enn bokstaver, sifre, mellomrom, `_`, `.` og `-` i delnavnet blir til `_` i filnavnet.

:::tip
De fleste nettlesere har en innstilling for å spørre hvor hver nedlasting skal lagres. Slå den på hvis du vil ha et valg av «Lagre som» hver gang: i Chrome og Edge finner du den under Nedlastinger i innstillingene; i Firefox under Generelt, Filer og programmer; i Safari under Generelt, Sted for filnedlasting.
:::

Mer om hvor nedlastinger havner og hvordan du holder filer trygge: [Hvor filene dine havner](common:your-files).

## Eksportering

Menyen {{ui:Eksporter}} skriver andre formater. Hver er en nedlasting, oppkalt etter delen.

| Menyvalg | Fil | Hva den inneholder |
|---|---|---|
| {{ui:STL, for 3D-utskrift}} | `<name>.stl` | Binær STL av volumlegemets trekanter, millimeter, **Z opp** |
| {{ui:3MF, for 3D-utskrift}} | `<name>.3mf` | 3MF med volumlegemet som ett objekt, millimeter, **Z opp** |
| {{ui:STEP AP242 (eksakt volumlegeme)}} | `<name>.step` | Ikke bygget ennå i denne versjonen (nedtonet): den trenger en eksakt kjerne |
| {{ui:STEP AP214 (eksakt volumlegeme)}} | `<name>.step` | Ikke bygget ennå i denne versjonen (nedtonet) |
| {{ui:STEP (fasettert, nettkjerne)}} | `<name>.step` | Et volumlegeme laget av plane flater fra nettet: **runde overflater er mange små plane fasetter**. Millimeter, i PartCrafts egne akser (Y opp). STEP-en du bruker for andre CAD-programmer i denne versjonen |
| {{ui:DXF av skissen eller den plane flaten}} | `<name> - <sketch>.dxf` eller `<name> - face.dxf` | DXF R12. En skisse: linjer, buer, sirkler og punkter i skissens egne koordinater, på layerne PROFILE, CONSTRUCTION og POINTS. En valgt plan flate: omrisset som lukkede polylinjer (runde kanter som fasettene sine) |
| {{ui:Tegning (PDF): visninger, snitt, detalj, GD&T}} | `<name> - drawing.pdf` | A3-tegningsarket: tre visninger, isometri, snitt og detalj hvis satt, hovedmål, GD&T-symboler, tegningshode |

:::note
{{ui:STEP AP242 (eksakt volumlegeme)}} og {{ui:STEP AP214 (eksakt volumlegeme)}} er ikke bygget ennå i denne versjonen: bruk {{ui:STEP (fasettert, nettkjerne)}}. Den har riktig form og volum, men hver runde flate er mange plane fasetter, så andre programmer kan ikke velge et hull som en sylinder. Sett **Kurver** finere først hvis det betyr noe.
:::

- Eksporter gjelder delen på skjermen. Eksport er slått av i en sammenstilling; det finnes ingen sammenstillingseksport ennå.
- STL, 3MF, den fasetterte STEP-en og flate-DXF-en er alltid laget av fasetter. Innstillingen **Kurver** (i høyre panel uten noe valgt) angir hvor fine de er, fra 32 til 256 fasetter per omdreining. Velg Fin eller Veldig fin før du eksporterer STL eller 3MF for en glatt utskrift.
- PDF-tegningen bruker leserens innebygde skrifttype Helvetica. Tegn den ikke kan vise, skrives ut som «?».

Steg for steg: [Eksporter for utskrift, STEP og DXF](topic:export-files) og [Lag et tegningsark](topic:drawing-pdf).

## Ulagret arbeid

- PartCraft beholder en gjenopprettingskopi av den åpne delen eller sammenstillingen i denne nettleseren et øyeblikk etter hver endring, slik at et krasj eller en lukket fane ikke mister den: neste gang du åpner PartCraft spør den «Gjenopprette arbeidet ditt?». Det er ikke en lagring: lagre til en fil for å beholde arbeidet. Se [Gjenopprett ulagret arbeid](common:recover).
- Hvis du prøver å lukke fanen eller laste på nytt med ulagrede endringer, spør nettleseren «Forlate nettstedet?». Det er nettleserens egen boks; PartCraft kan ikke endre ordlyden.
- {{ui:Ny}}, {{ui:Åpne}} og lukking av en sammenstilling spør før ulagrede endringer forkastes.

## Tilkoblet og frakoblet

Alt skjer på datamaskinen din: nettkjernen (et WebAssembly-program) lastes ned med appen og bygger geometri lokalt, og filer leses fra og skrives til disken din. Ingen deldata går over nettverket. Se [Nettkjernen](topic:solid-kernels).

For å arbeide uten tilkobling i det hele tatt lagrer du PartCraft for frakoblet bruk mens du er tilkoblet: velg {{ui:Lagre for frakoblet bruk}} i applinjen og vent mens den teller («Lagrer 40 av 212») til den sier **Klar frakoblet**. Den lagrede kopien inneholder 3D-biblioteket og nettkjernen, så etterpå fungerer modellering, lagring, hver eksport og tegninger frakoblet. Hvis den sier **Kunne ikke lagre**, klikker du på den for å prøve igjen mens du er tilkoblet; **Frakoblet bruk er ikke tilgjengelig** betyr at dette nettleservinduet ikke kan beholde en kopi (private vinduer og enkelte administrerte datamaskiner). Når kopien er lagret, tilbyr et klikk på **Klar frakoblet** {{ui:Lagre på nytt (hent nyeste versjon)}} og {{ui:Fjern den frakoblede kopien}}. Detaljer: [Arbeide frakoblet](common:offline).

:::online
Du er tilkoblet. Selv uten å lagre for frakoblet bruk kan du, så snart PartCraft er lastet og brikken i statuslinjen sier «Nettkjerne», fortsette å arbeide hvis tilkoblingen faller bort. Bare ikke last siden på nytt før du er tilkoblet igjen.
:::

:::offline
Du er frakoblet. Hvis PartCraft allerede er åpen, fortsett å arbeide; lagring og eksport fungerer fortsatt. Hvis applinjen sier **Klar frakoblet**, åpnes PartCraft også fra bunnen av uten tilkobling; ellers ikke last denne fanen på nytt.
:::

## Forskjeller mellom nettlesere

- **Nedlastinger.** Hver nettleser har sin egen nedlastingsmappe og sin egen måte å spørre på. Hvis en nettleser spør om dette nettstedet har lov til å laste ned filer, si ja, ellers kan ikke lagring og eksport fungere.
- **Dra og slipp** av en fil på visningen fungerer i Chrome, Edge, Firefox og Safari.
- **Filer fra en telefon eller et nettbrett.** På iPhone og iPad viser Åpne Filer-appen; lagrede filer går til Filer, Nedlastinger. På Android går de til mappen Nedlastinger.

Det er ingen forskjell i hva filene inneholder mellom nettlesere eller operativsystemer.
