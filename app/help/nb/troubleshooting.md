---
title: Feilsøking
summary: Problemer du kan møte i PartCraft, fra at appen ikke starter til funksjoner som feiler, skisser som ikke vil løses, filer som ikke åpnes og ledd som oppfører seg rart, med meldingen du ser og løsningen.
keywords: problem, feil, hjelp, virker ikke, feiler, feilende, krasj, tom, webgl, webassembly, kjerne, ikke bygget, overdefinert, åpen profil, kan ikke åpne, skjer ingenting, feil retning, treg
from: 7728542c
---

Når noe ikke fungerer, les **statuslinjen** nederst først: PartCraft sier der hvorfor den avviste noe, eller hva den venter på neste. En feilende funksjon viser også meldingen sin øverst i høyre panel, og når du holder pekeren over raden i historikken.

## Appen starter ikke

### «Denne nettleseren kan ikke vise 3D (WebGL er av eller mangler), så PartCraft kan ikke kjøre her.»

**Årsak:** nettleseren har 3D-grafikk (WebGL) slått av, blokkert, eller ikke støttet av grafikkdriveren.

**Løsning:**

:::chromium
Åpne `chrome://settings/system` (eller `edge://settings/system` i Edge) og slå på «Bruk maskinvareakselerasjon når det er tilgjengelig», og start nettleseren på nytt. Hvis den er på, sjekk `chrome://gpu` for WebGL-status, og oppdater grafikkdriveren.
:::

:::firefox
Åpne `about:support` og se på Graphics, WebGL. Hvis den er blokkert, oppdater grafikkdriveren. I `about:config` må `webgl.disabled` være `false`.
:::

:::safari
WebGL er alltid på i gjeldende Safari. Oppdater macOS (Safari oppdateres med den). Hvis det fortsatt feiler, prøv Chrome eller Firefox på samme Mac for å utelukke grafikkmaskinvaren.
:::

Eksterne skrivebord og noen virtuelle maskiner har ingen WebGL. Prøv på selve datamaskinen.

### «Volumlegemekjernen ble ikke lastet: …»

**Årsak:** geometrikjernen (et WebAssembly-program) kunne ikke hentes eller startes. Vanligvis brøt forbindelsen mens appen lastet, WebAssembly er slått av av en firmapolicy eller en nettleserinnstilling for sikkerhet, eller nettleseren er svært gammel.

**Løsning:** last siden på nytt mens du er på nett. Hvis det fortsetter å feile, prøv en annen gjeldende nettleser. I Firefox må `javascript.options.wasm` i `about:config` være `true`. Frakoblet laster appen og kjernen bare hvis appen sa **Klar for frakoblet bruk** før du mistet forbindelsen ({{ui:Lagre for frakoblet bruk}} mens du er på nett; se [Arbeide frakoblet](common:offline)).

### Frakoblet-knappen sier «Kunne ikke lagre» eller «Frakoblet ikke tilgjengelig»

**Kunne ikke lagre**: noen filer ble ikke lastet ned. Klikk på den for å prøve igjen mens du er på nett; en treg eller målt forbindelse kan trenge et nytt forsøk. **Frakoblet ikke tilgjengelig**: dette nettleservinduet kan ikke beholde en frakoblet kopi (private vinduer og noen administrerte datamaskiner blokkerer det). Bruk et vanlig vindu, eller hold fanen åpen.

### PartCraft er frakoblet, men utdatert

Klikk **Klar for frakoblet bruk** mens du er på nett, og velg {{ui:Lagre på nytt (hent nyeste versjon)}}.

### «Sveip: ikke bygget ennå. Den trenger en nøyaktig kjerne, …»

Hele meldingen er «<Navn>: ikke bygget ennå. Den trenger en nøyaktig kjerne, som denne versjonen av PartCraft ikke har. Hjelp › Hva som ikke er bygget ennå sier hva du kan gjøre i stedet.» Du ser den når du velger Sveip, Loft, Ribbe, en flens i plateverk, en overflatefunksjon, Kombiner, Flytt kropp, Skaler kropp eller Banemønster, og for andre ting som bare en nøyaktig kjerne kan gjøre. Det er ingenting galt med nettleseren eller delen din: denne versjonen av PartCraft bygger alle deler med nettkjernen. Se [Hva som ikke er bygget ennå](topic:not-built-yet) for hva du kan gjøre i stedet, og [Nettkjernen](topic:solid-kernels).

### «Laster volumlegemekjernen…» går aldri over

Vent litt på en treg forbindelse: kjernen og 3D-biblioteket lastes ned første gang. Last deretter siden på nytt. Hvis selve siden viser en feil, se over.

## Ingenting skjer når jeg trykker en tast

- Taster virker ikke mens markøren står i en boks i et panel. Klikk i 3D-visningen, eller trykk {{key:Esc}} etter å ha skrevet (eller {{key:Tab}} for å gå ut).
- Piltaster og {{key:Plus}}/{{key:Minus}} snur og zoomer visningen først etter at du har klikket i visningen.
- En dialog er åpen: svar på den først.
- I en skisse er {{key:F}} Avrund-verktøyet, ikke Tilpass. Bruk {{ui:Tilpass}}-knappen.

## En verktøylinjeknapp er nedtonet

- Funksjonsknapper er nedtonet mens en skisse er åpen. Lukk skissen først.
- Skisseverktøy fungerer bare inne i en skisse.
- {{ui:Angre}} og {{ui:Gjør om}} er nedtonet når det ikke er noe å angre eller gjøre om.
- {{ui:Sammenstilling}} trenger en del med et volumlegeme. {{ui:Ledd}} trenger to deler i sammenstillingen. {{ui:Rediger del}} trenger en valgt del.
- {{ui:STEP AP242 (eksakt volumlegeme)}} og {{ui:STEP AP214 (eksakt volumlegeme)}} er nedtonet i en sammenstilling: eksporter hver del. Et annet program avviser den nøyaktige filen: prøv {{ui:STEP AP214 (eksakt volumlegeme)}}, deretter {{ui:STEP (fasettert, nettkjerne)}}, og si fra via {{ui:Hjelp}} › {{ui:Rapporter et problem}}.
- {{ui:Sveip}}, {{ui:Loft}} og de andre funksjonene som trenger en nøyaktig kjerne er ikke nedtonet: de forblir klikkbare, verktøytipsene slutter med «ikke bygget ennå (trenger en nøyaktig kjerne)», og et klikk sier det i statuslinjen. Se [Hva som ikke er bygget ennå](topic:not-built-yet).
- {{ui:Tegning}} trenger en del med et volumlegeme, og er nedtonet mens en skisse er åpen.
- {{ui:Eksporter}}-punktene er nedtonet i en sammenstilling: sammenstillinger kan ikke eksporteres ennå. Lukk den, eller rediger en del, for å eksportere.

## Skisseproblemer

### Skissen lar meg ikke legge til en relasjon

«Ingen relasjon passer til dette utvalget. Velg ett eller to elementer (Shift+klikk legger til).» Relasjonen trenger et annet utvalg. Se [Skisserelasjoner og mål](topic:sketch-relations) for hva hver trenger.

### «Overdefinert: … kan ikke alle oppfylles. Angre, eller slett en av dem.»

**Årsak:** den nye relasjonen eller målet motsier de som allerede finnes. Skissen flyttet seg ikke.

**Løsning:** {{key:Mod+Z}}, eller slett ett av de røde elementene i høyre panels liste (velg **Slett** ved siden av det).

### «Overdefinert: … er allerede implisert. Slett den.»

**Årsak:** relasjonen tilfører ingenting: andre tvinger den allerede (for eksempel Parallell på to sider av et rektangel, eller et mål som allerede er fast). Det finnes ingen drevne mål i denne versjonen.

**Løsning:** slett den. Funksjonen bygges likevel, med en advarsel.

### «Disse elementene kan ikke måles sammen.»

Du klikket for eksempel på et punkt og en sirkel. Mål i stedet til sirkelens sentrumspunkt.

### «En avrunding trenger et hjørne der nøyaktig to linjer møtes.» / «Den radiusen er for stor for disse linjene.»

Klikk nøyaktig på hjørnepunktet til to faste linjer. Bruk en mindre radius enn den korteste linjen tillater.

### Geometrien hopper tilbake når jeg drar den

Draget ville bryte en relasjon eller et mål, så PartCraft setter den tilbake. Bare blå (underdefinert) geometri kan flyttes.

### «Denne skissen kan ikke åpnes: Trenger Extrude2, som feiler.»

Skissen ligger på en flate av en funksjon som ikke er bygget. Fiks den funksjonen først, eller opphev undertrykkingen, eller gå fremover i historikken.

## Funksjonsproblemer

| Melding | Årsak | Løsning |
|---|---|---|
| «Lag en skisse først: velg et plan, Skisse, tegn en lukket profil, Avslutt.» | Ingen ubrukt skisse med kurver, og ingen valgt | Tegn en skisse, eller velg skissen som skal brukes i historikken |
| «Skissen har ingen lukket profil å ekstrudere.» (eller «å rotere») | Ingen lukket sløyfe av heltrukne linjer | Lukk hullene; slå konstruksjonslinjer tilbake med {{key:Q}} |
| «Profilen er åpen: en ende ved (x, y) er ikke festet til noe.» | Et hull i det punktet | Åpne skissen, og dra enden over naboen slik at den fester seg |
| «Profilen forgrener seg ved (x, y): mer enn to ender møtes der.» | Tre eller flere linjer møtes i ett punkt | Slett den ekstra linjen, eller bytt den til konstruksjon |
| «En lukket sløyfe trenger minst tre sider eller en kurve.» | To linjer fram og tilbake | Tegn sløyfen på nytt |
| «Gjennom alt er for kutt. Bruk en dybde for en utstikker.» | En utstikker satt til Gjennom alt | Sett Slutt til Blind eller Midtplan |
| «Det er ingenting å kutte på den siden av skissen. Prøv den andre retningen.» | Kuttet peker bort fra materialet | Kryss av Omvendt retning |
| «Det er ingenting å kutte ennå.» / «Det er ingenting å bore ennå.» | Ingen volumlegeme før denne funksjonen | Lag en utstikker først, eller flytt funksjonen ned |
| «Tegn en senterlinje (en konstruksjonslinje) i skissen å rotere om.» | Rotering uten akse | Legg til en senterlinje, eller velg en linje i Akse |
| «Profilen krysser aksen. Hold den på én side av senterlinjen.» | Profil på begge sider av aksen | Tegn halvparten av profilen på nytt |
| «Plasser skisse-punkter der hullene skal være (Punkt-verktøyet), og lag deretter hullet.» | Ingen løse punkter i skissen | Legg til punkter med {{key:P}} |
| «Forsenkningen må være bredere enn hullet.» | Forsenkningens ⌀ er ikke større enn Diameter | Gjør forsenkningen bredere |
| «Forsenkningen må være grunnere enn hullet.» | Forsenkning dypere enn et blindt hull | Gjør den grunnere, eller hullet dypere |
| «Velg funksjonene å kopiere.» | Et mønster eller speil uten noe avkrysset | Kryss av en funksjon under Funksjoner å kopiere |
| «Extrude2 har ingen volumlegeme å kopiere.» | Den kopierte funksjonen feilet eller er av | Fiks den, eller ta bort undertrykkingen |
| «Trenger Sketch3, som feiler.» | En funksjon den avhenger av er ikke bygget | Fiks funksjonen den nevner |
| «Flaten den ligger på er borte (Extrude1 er ikke bygget).» | Skissens flate finnes ikke lenger | Fiks den funksjonen, eller slett skissen og tegn på nytt |
| «Det er ingenting igjen av delen etter dette.» | Et kutt fjernet alt materiale | Sjekk kuttets størrelse og retning |
| «Volumlegemekjernen kunne ikke bygge dette (…).» eller «Volumlegemekjernen kunne ikke kombinere dette med kroppen.» | Kjernen avviste geometrien | Angre, eller endre størrelsene litt; flater som nøyaktig berører hverandre kan forårsake det |
| «Sveip: ikke bygget ennå. Den trenger en nøyaktig kjerne, som denne versjonen av PartCraft ikke har.» (også Loft, Ribbe og de andre) | En funksjon laget i en tidligere versjon, som bare en nøyaktig kjerne kan bygge. Den blir i historikken og lagres tilbake uendret | Undertrykk eller slett den; se [Hva som ikke er bygget ennå](topic:not-built-yet) for hva du kan gjøre i stedet |
| «En 5 mm avrunding passer ikke her (…).» / «En 2 mm fasing …» | Størrelsen er for stor for en flate ved siden av kanten, eller hjørnet kan ikke avrundes | Mindre størrelse, eller færre kanter per funksjon |
| «Avrunding: i denne versjonen bare rette kanter mellom to plane flater (nettkjernen bygger dem). Avrund eller skrå av buede kanter i skissen.» (også Fasing) | En valgt kant er rund, som kanten på et hull, eller ligger på en buet flate | {{ui:Velg kanter}} og fjern den; avrund eller skrå av hjørnet i skissen i stedet |
| «En avrunding med radius som endrer seg langs kanten: ikke bygget ennå (den trenger en nøyaktig kjerne). Gi den én radius.» | **Variabel radius** er avkrysset | Fjern krysset og gi én radius |
| «Avrunding med nettkjernen: der avrundede kanter møtes, gjæres de i stedet for å gå jevnt over.» (⚠, en advarsel) | Valgte kanter møtes i et hjørne; avrundingene møtes der i en skarp knekk | Ingenting å fikse: delen er bygget. Avrund færre kanter hvis knekken betyr noe |
| «En kant den runder er borte: kanten mellom Extrude1 og Cut2.» | En tidligere endring fjernet kanten | {{ui:Velg kanter}}, fjern den røde kanten, og velg den nye |
| «Velg kantene i visningen, og legg dem deretter til.» | Avrundingen eller fasingen har ingen kanter | {{ui:Velg kanter}} |
| «Velg flatene som skal fjernes (åpne), og deretter skall.» | Skallet har ingen åpne flater | {{ui:Velg flater}} |
| «Skallet kunne ikke lages med denne tykkelsen (…).» | Veggen er tykkere enn en tynn del av modellen eller en avrundingsradius | En tynnere vegg, eller større avrundinger |
| «Skall: i denne versjonen åpner det bare plane flater (nettkjernen bygger det).» | En åpen flate er buet | {{ui:Velg flater}} og fjern den; åpne bare plane flater |
| «Trekkvinkel: i denne versjonen kun plane flater (nettkjernen bygger den).» | En flate med trekkvinkel er en sylinder, kjegle eller frihåndsflate | Fjern den; gi bare plane flater trekkvinkel |
| «En flate den åpner er borte (…).» | En tidligere endring fjernet flaten | {{ui:Velg flater}} igjen |
| «Fillet1 endrer kroppens kanter eller vegger; den kan ikke kopieres. …» | Et mønster eller speil kopierer en avrunding, fasing eller skall | Fjern krysset; mønster kuttene først, og avrund deretter |
| «Den ligger på en flate som bare en nøyaktig kjerne kan finne: ikke bygget ennå i denne versjonen.» | En skisse på en flate nettkjernen ikke finner, for eksempel en laget i en tidligere versjon | Tegn på et grunnplan eller en plan flate av en ekstrudering, og plasser den med mål |
| «Den bruker en flate eller kant av volumlegemet, som bare en nøyaktig kjerne kan finne: ikke bygget ennå i denne versjonen.» | Et referanseplan, en akse eller et punkt på en flate eller kant av volumlegemet | Lag den fra grunnplan, skisse-punkter eller koordinater i stedet |
| «Ekstrudering opp til en flate, neste flate eller et hjørnepunkt: ikke bygget ennå (den trenger en nøyaktig kjerne).» / «En avsmalning: ikke bygget ennå (den trenger en nøyaktig kjerne).» | En sluttbetingelse eller avsmalning som bare en nøyaktig kjerne bygger | Bruk en Blind- eller Midtplan-dybde du måler; la Avsmalning være 0 |

## Plukkeproblemer

- «Den flaten er buet. Velg en plan flate eller et plan å skissere på.» Skisser trenger en plan flate. Skisser på et grunnplan, og plasser skissen med mål i stedet.
- En flate sier «Fast der den ble valgt»: den ble ikke laget av en skissekant (for eksempel en flate av en mønsterkopi), så en skisse på den blir stående når delen endres.
- Kanter er vanskelige å treffe: zoom inn. En kant vinner over flaten ved siden av den når pekeren står rett på den.

## Filproblemer

| Melding | Løsning |
|---|---|
| 'PartCraft åpner sine egne .partcraft.json-filer, eksporter fra CadCraft-makroen for SolidWorks (.cadcraft-sw.json) og STEP-filer. "bracket.igs" er ingen av disse.' | Bare disse filene gjenkjennes (og STL-, OBJ- og 3MF-nett samt `.3dm`-filer) |
| '"part.stp" er ikke en STEP-fil (den starter ikke med ISO-10303-21).' | Filen er ikke STEP-tekst |
| «STEP-filen er for stor (over 60 MB) til å importeres her.» | Forenkle den ved kilden |
| «Filen er for stor til å være en PartCraft-del.» på din egen lagrede del | En stor STEP-volumlegeme importert i en tidligere versjon gjorde delfilen større enn 50 MB. Bruk en tidligere kopi uten den |
| «Filen er for stor til å være en PartCraft-del.» | Filen er over 50 MB; den er ikke en PartCraft-fil |
| «Dette er ikke en PartCraft-fil (den er ikke JSON).» / «Dette er ikke en PartCraft-fil.» | Filen er skadet, eller tilhører et annet program |
| «Denne filen ble lagret av en nyere PartCraft (filversjon …); denne leser versjon …» | Åpne den i den nyere PartCraft |
| «Extrude2: dybden er ugyldig.» (eller en annen verdi) | Filen ble redigert for hånd, eller skadet. Bruk en tidligere kopi |
| Innsetting i en sammenstilling sier «Part1.partcraft.json har ingen volumlegeme å sette inn.» | Delfilen har ingen volumlegeme. Åpne den, lag et volumlegeme, lagre, og sett inn på nytt |

**Min lagrede fil er ikke der jeg forventet.** Lagring er en nedlasting: se i nettleserens nedlastingsmappe, eller åpne nedlastingslisten fra nettleserens verktøylinje. Se [Hvor filene dine havner](common:your-files).

**Jeg åpnet en del, men sammenstillingen er fortsatt på skjermen.** Delen ble lastet bak sammenstillingen. Velg {{ui:Lukk}} for å lukke sammenstillingen og se delen. Lukk sammenstillinger før du åpner delfiler.

## Tegningsproblemer

| Melding | Løsning |
|---|---|
| «Bygg et volumlegeme først, og lag deretter tegningen.» | Bygg delen først |
| «Ikke plass på arket til: detalj. Gjør detaljen mindre eller fjern en visning.» | Mindre **Detaljradius** eller **Detaljskala**, eller fjern snittet |
| «En detalj tas fra forsiden, toppen, høyre side eller snittvisningen.» | Klikk på en av disse visningene |
| «Klikk på en av visningene.» | Klikket var på tomt papir |
| «Posisjon trenger minst én datumreferanse.» og andre rammemeldinger | Sett datumene panelet ber om, eller velg en annen egenskap |
| «Tegningsvisningene kunne ikke lages: …» | Angre den siste endringen. Hvis det fortsetter, lagre, last inn på nytt og åpne delen igjen |

## Sammenstillingsproblemer

| Melding | Løsning |
|---|---|
| «Bygg et volumlegeme først, og sett det deretter inn i en sammenstilling.» | Delen har ikke et volumlegeme ennå |
| «Sett inn en andre del først (Legg til kopi, Sett inn, eller Rediger › Dupliser).» | Et ledd trenger to deler |
| «Velg en flate på en annen del.» | Begge flatene i et ledd må være på forskjellige deler |
| «Den flaten er buet. Velg en plan flate …» | Ledd starter fra plane flater. Bruk deretter **Sentrum på** for et hull eller en roteringsakse |
| «Bracket2 er ikke festet til den forankrede delen, så den blir der den ble plassert.» | Legg til et ledd fra den til en del som er plassert |
| «Revolute3 lukker en sløyfe som ikke kan lukkes: den er av med 2.000 mm. Sjekk flatene, forskyvningene og grensene til sløyfens ledd.» | Delene kan ikke alle møtes: sjekk lengdene, flatene hvert ledd bruker, forskyvninger (deler stablet flate mot flate må stemme i dybde) og grenser; eller fjern ett ledd i sløyfen |
| «Flaten dette leddet bruker er borte fra Bracket.» / «Aksen dette leddet bruker er borte fra Bracket.» | Delen ble redigert. Fjern leddet og lag det på nytt |
| «Aksen går langs flaten, så den kan ikke sette leddets sentrum.» | Velg en akse som krysser flaten, eller «Flatens egen origo» |
| «En sammenstilling beholder minst én del. Lukk den i stedet.» | Bruk {{ui:Lukk}} |

**Delene er festet, men på feil sted.** Sett **Sentrum på** for begge sider av leddet til hullene eller roteringsaksene som skal flukte, og juster deretter **Vinkel (°)** og **Forskyvning (mm)**.

## Det er tregt

- Sett **Kurver** til Normal eller Grov mens du modellerer; bytt til Fin før eksport.
- Store mønstertall (hundrevis av kopier) tar tid å bygge på nytt ved hver endring. Undertrykk mønsteret mens du jobber med andre funksjoner.
- Kollisjon og bevegelseskontrollen sammenligner hvert par av deler; store sammenstillinger tar lengre tid.
- Lukk andre tunge faner. PartCraft kjører på din egen datamaskins prosessor og grafikk.

## Fortsatt fast

Lagre filen først ({{key:Mod+S}}), og last deretter siden på nytt og åpne den igjen. Hvis en funksjon fortsatt feiler, velg den, les meldingen, og prøv {{key:Mod+Z}} tilbake til siste gode tilstand.
