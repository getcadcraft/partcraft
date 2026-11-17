---
title: Varme, termisk spenning og knekking
summary: Finn temperaturene i en del fra faste temperaturer, varmefluks, varmeeffekt, konveksjon og stråling (stasjonært eller over tid), last en spenningsanalyse med en temperaturøkning, og finn lasten der en slank del knekker, med det hver metode kan og ikke kan fortelle deg.
keywords: termisk, varmeoverføring, varme, temperatur, ledning, konveksjon, filmkoeffisient, stråling, emissivitet, varmefluks, varmeeffekt, varmeproduksjon, varmeavleder, transient, tid, avkjøling, oppvarming, Crank-Nicolson, implisitt Euler, varmebalanse, termisk spenning, termisk spenning over tid, transient termisk spenning, bråkjøling, termisk sjokk, spenningshistorikk, verste tid, termisk utvidelse, utvidelseskoeffisient, knekking, Euler-knekking, lastfaktor, kritisk last, søyle, slank, egenverdi
from: 1a1b7545
---

Disse analysene ligger i Simulering-arbeidsområdet, ved siden av statisk spenning og egenfrekvenser (se [Sjekk spenning og utbøyning](topic:simulation)). Velg dem i panelets **Type**-boks. De bruker samme nett av små kuber og samme materialliste; hvert bibliotekmateriale har en varmeledningsevne, en spesifikk varmekapasitet og en utvidelseskoeffisient (typiske håndbokverdier, vist under **Egenskaper**).

## Varme: hvor går varmen?

1. Velg **Termisk (varmeoverføring)** som **Type**.
2. Legg til termiske betingelser fra panelets **Legg til**-liste, og klikk deretter på flatene deres (som for opplagre og laster):
   - **Fast temperatur**: flaten holdes på en temperatur, i °C.
   - **Varmefluks**: W/m² som strømmer inn i flaten (negativ strømmer ut). Den virker på flatens virkelige areal, også der kubene danner en trappetrinnsform.
   - **Varmeeffekt**: en total i watt, fordelt over de valgte flatene etter areal. Bruk den for en varmeovn eller en brikke med kjent effekt.
   - **Konveksjon**: luft eller væske med en temperatur fører varmen bort med h W/(m²·K). Typisk h: stille luft 5–10, en vifte 25–100, vann 500–10,000. PartCraft beregner ikke h: det finnes ingen væskestrøm i denne analysen.
   - **Stråling**: flaten stråler til omgivelsene ved en temperatur, med en emissivitet fra 0 til 1. Den er **linearisert** (strålingen skrives som en koeffisient som avhenger av temperaturen, og løses på nytt til den stabiliserer seg) og går bare til omgivelsene: flater utveksler ikke varme seg imellom.
3. **Varmeproduksjon** (W/m³) varmer hele delen innenfra, for eksempel en resistiv del.
4. Trykk **Løs**. Delen farges etter temperatur; velg **Varmefluks** i **Vis** for å se hvor varmen strømmer. Pek på delen for å lese begge deler.

Stasjonær varmestrøm trenger et sted for varmen å gå: minst én fast temperatur, konveksjon eller stråling. En del som bare tar opp varme har ingen stasjonær tilstand; gjør den transient i stedet.

Tabellen viser lavest og høyest temperatur og hvor de er, størst varmefluks, og **varmebalansen**: varmen inn i eller ut av hver betingelse (en fast temperatur teller hva den må tilføre eller ta opp), varmen som produseres, summene inn og ut, og **ubalansen**. Ubalansen bør være en liten brøkdel av varmen inn; en stor en betyr at resultatet ikke kan stoles på.

### Over tid (transient)

Kryss av **Transient** og angi en **Starttemperatur** (hele delen starter der), en **Tidsperiode** og et antall **Tidssteg**. **Implisitt Euler** er robust; **Crank–Nicolson** er mer nøyaktig for de samme stegene, men kan rippe etter en plutselig endring. Etter løsning drar du **Tid**-glidebryteren for å se temperaturene på hvert øyeblikk (fargeskalaen er den samme for alle øyeblikk). Varmebalansen inkluderer da varmen som lagres.

## Termisk spenning: hva gjør en temperaturendring med delen?

I en **Statisk spenning**-analyse (eller **Knekking**) angi **Termisk last**:

- **Jevn temperaturendring**: hele delen varmes opp (eller avkjøles, med et negativt tall) med så mange kelvin.
- **Temperaturer fra termiske betingelser**: legg til termiske betingelser i samme analyse; de stasjonære temperaturene løses først på samme nett, deretter utvider delen seg med α·(T − den **spenningsfrie temperaturen**).
- **Temperaturer over tid (transient kjøring)**: legg til termiske betingelser, angi deretter en **Starttemperatur**, **Tidsperiode**, **Tidssteg** og **Tidsstegning** som for en transient termisk analyse. Temperaturene løses over tid på samme nett (kuber eller tetraedre), og en statisk løsning på hvert øyeblikks temperaturer gir spenningen for det øyeblikket. **Spenning ved**:
  - **Verste tid** (starten): **Spenningsløsninger** fordeler øyeblikk jevnt over kjøringen, med starten med (21 hvis du ikke endrer det, høyst 51). Resultatene åpner på øyeblikket med størst von Mises-spenning; tabellen nevner det, et lite diagram viser toppspenningen mot tid, og **Tid**-glidebryteren viser spenningen i hvert løste øyeblikk (fargeskalaen er den for det verste øyeblikket).
  - **Ett valgt tidspunkt**: ett øyeblikk, tidssteget nærmest den **Tid (s)** du angir. En knekkingsanalyse tar alltid ett valgt tidspunkt (slutten av kjøringen hvis du ikke setter ett).

En del som bråkjøles (dyppes fra varm til kald) eller plutselig varmes opp, er mest belastet mens innsiden og overflaten er mest forskjellige: ofte helt i starten. En holdt temperatur gjelder fra første øyeblikk, som en plutselig endring, så spenningen i aller første øyeblikk avhenger av elementstørrelsen (bare noen få elementer ser endringen). Les det som «svært høy», og se på glidebryterens neste øyeblikk for verdier nettet oppløser. Spenningen er kvasistatisk: ingen treghet, ingen vibrasjon fra den plutselige endringen.

En del som kan vokse fritt har ingen termisk spenning: hold den bare så mye at den ikke beveger seg (for eksempel tre friksjonsløse flater i rette vinkler). Klemt mellom to vegger presses den sammen: en stålstang som varmes 50 K mellom stive vegger bærer omtrent 117 MPa. Termiske laster balanserer seg selv, så reaksjonene balanserer fortsatt bare de mekaniske lastene.

## Knekking: når gir en slank del etter?

1. Velg **Knekking (lineær)** som **Type**, og legg til opplagre og laster som for en statisk analyse.
2. Angi **Lastfaktorer å finne** (hvor mange knekkmoder).
3. Trykk **Løs**. Hver modus har en **lastfaktor**: multiplum av lastene dine der den ideelle delen knekker. En lastfaktor på 3 betyr tre ganger lastene dine; **en lastfaktor under 1 betyr at den knekker under lastene du la på**. Tabellen gir også totallasten ved hver faktor. Modusformen viser hvordan den knekker (størrelsen betyr ingenting).

**Lineær knekking overestimerer den virkelige knekklasten.** Den forutsetter en perfekt del: helt rett, uten restspenning, og elastisk. Virkelige deler har små ufullkommenheter og kan flyte først, og tynnveggede skall kan knekke ved en brøkdel av den lineære verdien. Bruk en romslig margin, og behandle en lastfaktor nær eller under 3 for et tynt skall som en advarsel.

## Hvor langt kan du stole på den?

PartCraft sjekker disse løserne mot håndformler: en stang mellom to temperaturer (eksakt), en kjøleribbe (innen 0.3 K), en plate som varmer seg selv (eksakt), en kube som kjøles over tid (innen 0.1 % med Crank–Nicolson), en stang som plutselig varmes i den ene enden, en fri stang som varmes (ingen spenning, ΔL = αLΔT), en stang holdt mellom vegger (σ = −EαΔT), en bråkjølt plate over tid mot den klassiske serieløsningen (innen 1 % på kuber, 2.1 % på tetraedre i platens senter; 0.5 % ved overflaten), et langt løps siste øyeblikk mot den stasjonære termiske spenningen (de samme til en millionendel), og Euler-søyler (innen 1 % fast–fri, 1.5 % ledd–ledd). Husk:

- **Konstante materialverdier.** Ledningsevne, spesifikk varme og utvidelse endrer seg ikke med temperaturen her; ved noen hundre grader kan de endre seg med 10–30 %. Stivheten endrer seg heller ikke.
- **Spenning over tid er kvasistatisk og elastisk**: hvert øyeblikk er en statisk løsning (ingen treghet), og det er ingen flyt, så en bråkjøling som ville gi flyt i overflaten viser en spenning over flytegrensen i stedet.
- **Konveksjonskoeffisientene er din inndata**, ikke beregnet fra en luft- eller vannstrøm.
- **Ingen kontaktmotstand**: delen er ett volumlegeme.
- **Bare lineær knekking**: ingen ufullkommenheter, ingen flyt, ingen oppførsel etter knekking.
- Kubetrappetrinnene og skarpe innvendige hjørner påvirker termiske spenninger på samme måte som andre spenninger (se [Sjekk spenning og utbøyning](topic:simulation)).
- Dette er en laboratorieversjon: sjekk deler som betyr noe på en annen måte.

## Relatert

- [Sjekk spenning og utbøyning (Simulering)](topic:simulation)
- [Hva som ikke er bygget ennå](topic:not-built-yet)
