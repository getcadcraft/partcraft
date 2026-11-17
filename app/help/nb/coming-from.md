---
title: Kommer fra en annen parametrisk modellerer
summary: Hvordan vanene fra stasjonære parametriske delmodelleringsprogrammer tilsvarer PartCraft, og forskjellene som gjør erfarne brukere usikre den første timen.
keywords: bytte, migrere, kjent, funksjonsbehandler, designtre, smart mål, pålegg-ekstrudering, kutt-ekstrudering, hullveiviser, koblinger, interferensdeteksjon, tilbakerullingslinje, egenskapsbehandler, mus, forskjeller
from: fbacaee1
---

Hvis du designer deler i SolidWorks, vil de fleste ideene i PartCraft være kjente: skisser på Front-, Top- og Right-planene, relasjoner og smarte mål, en funksjonshistorikk med en tilbakerullingslinje, og sammenstillinger plassert med koblinger. Måten du kommer dit på, er ulik noen steder, og denne første versjonen gjør mindre. Denne siden kobler vanene dine til PartCraft og lister opp overraskelsene.

## Vaner, kartlagt

| Det du er vant til | I PartCraft |
|---|---|
| Designtreet til venstre | Historikken til venstre: planer, deretter funksjoner, med skisser innrykket under funksjonen som bruker dem |
| Front-, Top- og Right-planene | De samme tre, gjennom origo. Front er XY-planet, Top er XZ og Right er YZ. Y peker opp |
| Skisse på et plan eller en flate, deretter bekreftelseshjørnet for å avslutte | {{ui:Skisse}} ({{key:S}}) på et valgt plan eller en plan flate. {{ui:Avslutt}} eller {{key:Esc}} til den lukkes |
| Smart mål | {{ui:Mål}} ({{key:D}}). Klikk ett eller to elementer, og deretter der tallet skal plasseres. Plasseringen avgjør om det blir horisontalt, vertikalt eller innrettet |
| Legg til relasjoner i egenskapspanelet | Velg elementer, og deretter relasjonsknappene i høyre panel (Sammenfallende, Horisontal, Parallell, Tangent, Lik og så videre) |
| Automatiske relasjoner under skissering | Snapping legger til sammenfallende, punkt-på-kurve, horisontale og vertikale relasjoner |
| Blå / svart / rød skissefarge | Samme idé: blå under definert, svart fullt definert, rød over definert. Brikken viser gjenværende frihetsgrader |
| Midtlinje for rotasjoner | {{ui:Midtlinje}} ({{key:N}}). {{ui:Roter}} bruker den første midtlinjen med mindre du velger en annen akse |
| Skissevinkel (avrunding) | {{ui:Avrunding}} ({{key:F}}) i en skisse: klikk hjørnet, skriv inn radiusen |
| Veksling for konstruksjonsgeometri | {{ui:Konstruksjon}} ({{key:Q}}) |
| Ekstrudert pålegg | {{ui:Ekstruder}}: Blind, Midtplan, Opp til flate / neste / hjørne, Forskyvning fra flate, annen retning, avsmalning, én kontur (Velg områder) |
| Ekstrudert utskjæring | {{ui:Klipp ut}}: starter som Gjennom alt. Bytt til Blind for en lomme |
| Revolvert pålegg / utskjæring | {{ui:Roter}} / {{ui:Mer}} › {{ui:Rotert utskjæring}} |
| Referanseplan / akse / punkt | {{ui:Mer}} › {{ui:Plan}}, {{ui:Akse}}, {{ui:Punkt}} (se [Referanseplan, akser og punkter](topic:reference-geometry)) |
| Sveipet eller loftet pålegg eller utskjæring, trekkvinkel | {{ui:Mer}} › {{ui:Trekkvinkel}} på plane flater (se [Sveip, loft og trekkvinkel](topic:sweep-loft-draft)). {{ui:Sveip}} og {{ui:Loft}} er ikke bygget ennå i denne versjonen (de krever en eksakt kjerne) |
| Hullveiviser | {{ui:Hull}} på hvert løst skissepunkt: enkel, senkeboring, forsenkning (90° / 82°) eller gjenget ISO-metrisk M2–M24, gjennom eller blind |
| Lineært / sirkulært mønster, speil | {{ui:Lineært}}, {{ui:Sirkulært}}, {{ui:Speil}} (funksjoner eller hele legemet) |
| Avrunding og fasing på kanter | {{ui:Avrunding}} / {{ui:Fasing}}: klikk en kant, {{key:Shift}}+klikk flere, og deretter knappen. Én radius; like, to-avstands- eller avstand-vinkel-fasinger. I denne versjonen bare rette kanter mellom to plane flater, og avrundinger som møtes i et hjørne, skjæres med gjæring. Rund eller skrå buede kanter i skissen ({{ui:Avrunding}} i en skisse, {{key:F}}) |
| Skall | {{ui:Skall}}: klikk de plane flatene som skal åpnes, og deretter knappen. Én veggtykkelse |
| Åpne en STEP-fil | {{ui:Åpne}}: leses som trekanter, et massivt legeme å bygge på ([Åpne en STEP-fil](topic:import-step)) |
| Rediger funksjon, deretter OK | Klikk funksjonen. Endre tallene til høyre. Den bygges om mens du skriver. Ingen OK, ingen Avbryt: bruk {{key:Mod+Z}} |
| Rediger skisse | Dobbeltklikk skissen i historikken |
| Bygg om | Automatisk etter hver endring. Det finnes ingen tast for å bygge om |
| Undertrykk / opphev undertrykking | {{ui:Undertrykk}} / {{ui:Opphev undertrykking}} i høyre panel |
| Dra tilbakerullingslinjen | {{ui:Rull tilbake til hit}} på en funksjon. Klikk «Tilbakerullingslinje · rull fremover» for å gå tilbake |
| Dra en funksjon i treet for å sortere | {{ui:Flytt opp}} / {{ui:Flytt ned}} eller {{key:Alt+Up}} / {{key:Alt+Down}}. Avvist med årsaken når det ville bryte en avhengighet |
| Rediger mål ved å dobbeltklikke på modellen | Velg funksjonen: skissens mål listes i høyre panel |
| Koblinger: sammenfallende, konsentrisk, avstand, vinkel | {{ui:Ledd}} ({{key:J}}): velg en plan flate på hver del. Leddet legger dem flate mot flate. **Sentrer på** en akse virker som konsentrisk, **Forskyvning** som avstand, og **Vinkel** som vinkel |
| Fast komponent | Den første delen er forankret. {{ui:Gjør den til den forankrede delen}} endrer det |
| Sett inn komponent | {{ui:Legg til kopi}} eller {{ui:Dupliser}} (en ny kopi) eller {{ui:Sett inn}} (fra en delfil) |
| Rediger del i sammenstillingen | {{ui:Rediger del}}, deretter {{ui:Tilbake}} |
| Interferensdeteksjon | {{ui:Kollisjon}} |
| Flytte en komponent for å se bevegelsen | Dra vinkel- eller forskyvningsglideren til et roterende eller glidende ledd. {{ui:Kontroller bevegelsen for kollisjoner}} sveiper den. En del uten ledd: **Flytt for hånd** (piler å dra, eller skrevne verdier) |
| Mål / inspiser | {{ui:Visninger}}, deretter {{ui:Mål}} ({{key:M}}): avstander, vinkler, radier, arealer. {{ui:Massegenskaper}} |
| Eksplodert visning, stykkliste | I en sammenstilling uten valg: **Eksploderte visninger** og **Stykkliste** i høyre panel |
| Massegenskaper | **Del**-boksen: volum, overflateareal og størrelse, av det fasetterte volumlegemet (litt lavt på runde deler). Ingen masse: det finnes ingen materialer ennå |
| Lagre, Lagre som STEP | {{ui:Lagre}} laster ned en `.partcraft.json`. {{ui:Eksporter}} har STL, 3MF, eksakt STEP (AP242 eller AP214), fasettert STEP, DXF og en PDF-tegning |
| Lag en tegning fra delen | {{ui:Tegning}}: et automatisk A3-ark med tre visninger, isometrisk, ett snitt, ett detalj, datum, rammer for form- og toleransesymboler og overflatesymboler. Bare totalstørrelser er målsatt |
| Midtdra for å rotere | **Venstredra** roterer her. Midt- eller høyredra panorerer. Hjulet zoomer ved pekeren |
| Visningsretning, Normal til | {{ui:Visninger}}-menyen. {{ui:Normalt til}} for en valgt flate, plan eller skisse |
| Zoom til tilpass (F) | {{key:F}}, eller {{ui:Tilpass}} (i en skisse er {{key:F}} avrundingsverktøyet) |
| Høyreklikkmenyer | Ingen. Høyredra panorerer. I en skisse avslutter høyreklikk en linjekjede |

:::tip
Hvis hendene dine kjenner SolidWorks, velg menystilen {{ui:Funksjonstre}} i {{ui:Innstillinger}} › {{ui:PartCraft}} › {{ui:Menyer, taster og mus}}. Da får du et bånd med faner for Funksjoner, Skisse, Flater, Evaluer, Tegning, Sammenstilling og Visning. Midtknappen kretser, {{key:Shift}} og midtknappen panorerer, og venstreknappen bare velger. Se [Menyer, taster og mus](topic:menus-keys-and-mouse).
:::

## Forskjeller som lurer folk

**Hele skissen er profilen.** Ekstruder og Roter bruker hver lukket sløyfe i skissen. Du kan ikke velge ett område eller én kontur i en skisse for en funksjon. Bruk en skisse per funksjon.

**Hvilken skisse en funksjon tar.** En funksjon bruker skissen du nettopp lukket, eller den som er valgt i historikken. Uten valg tar den den nyeste skissen som ingen funksjon bruker ennå. Hvis du får feil, velg riktig skisse og velg funksjonen på nytt.

**Endringer virker mens du skriver.** Det finnes ingen funksjonsdialog med OK og Avbryt. Hvert tall bygger om med en gang, og {{key:Mod+Z}} er veien tilbake. Angrehistorikken dekker skisseendringer, funksjoner og innstillinger likt.

**Overdefinert får aldri stå stille.** Det finnes ingen drevne (referanse-) mål. Et mål som de andre relasjonene allerede låser, rapporteres som overdefinert («er allerede underforstått. Slett det.»). Et motstridende mål lar geometrien være urørt og blir rødt. Slett ett, eller angre.

**Svip og loft er ikke bygget ennå. Avrundinger, fasinger, skall og trekkvinkler har begrensninger.** Denne versjonen av PartCraft bygger alle deler med en nettkjerne. Brikken i statuslinjen sier alltid «Nettkjerne». Avrundinger og fasinger virker på rette kanter mellom to plane flater, og der avrundinger møtes i et hjørne, skjæres de med gjæring i stedet for å blandes. Skall åpnes, og trekkvinkler vipper, bare plane flater. Funksjoner som krever en eksakt kjerne, forblir klikkbare, men sier «ikke bygget ennå» når de velges. Se [Nettkjernen](topic:solid-kernels) og [Hva som ikke er bygget ennå](topic:not-built-yet).

**To knapper kalt Avrunding.** I en skisse runder {{ui:Avrunding}} ({{key:F}}) et skissehjørne. På delen runder {{ui:Avrunding}} i gruppen Funksjoner faste kanter (rette kanter mellom plane flater i denne versjonen). Det finnes ingen sveip eller loft i denne versjonen: se [Hva som ikke er bygget ennå](topic:not-built-yet).

**Hull trenger løse punkter.** {{ui:Hull}} borer i punkter laget med Punkt-verktøyet. Sirkelsentre og linjeender teller ikke.

**Gjennom alt er bare for kutt.** Et pålegg trenger en dybde. Det finnes ikke «opp til hjørne / flate / neste» sluttbetingelser ennå.

**Volumlegemet er fasettert.** Nettkjernen bygger runde flater av flate fasetter. Visningen, volumene, STL- og 3MF-eksportene er alle laget av dem. **Kurver** i delens panel gjør dem finere. Den eksakte STEP-eksporten er ikke slik: den skriver runde flater på deres sanne overflater.

**Bare millimeter.** Det finnes ingen tommeinnstilling ennå. Multipliser tommestørrelser med 25.4 når du skriver dem inn.

**Y er opp.** Front-planet vender mot deg, og Top ser ned på delen, som du forventer. Men verdens opp-akse er Y. STL-, 3MF- og eksakte STEP-eksporter vendes til Z opp. Den fasetterte STEP beholder Y opp.

**Koblinger er flater, ikke geometripar.** Et ledd starter alltid fra to plane flater lagt flate mot flate. For en tapp i et hull velger du den plane flaten rundt hullet og tappens skulder. Deretter setter du **Sentrer på** til hullets akse og tappens rotasjonsakse. Deler som ikke nås av ledd, blir stående der de ble satt inn. Du kan ikke dra dem. Ledd i en sløyfe løses ikke.

**Lagring er en nedlasting.** Det finnes ingen fil du fortsetter å overskrive. Hver lagring er en ny fil i nedlastingsmappen din. Gi delen et navn først, og hold filene i en prosjektmappe.

**Ingen kontekstmenyer, ingen kommandobehandlerfaner.** Alt ligger i verktøylinjen og høyre panel, og verktøylinjen endrer seg med det du gjør. Skissverktøyene vises bare i en skisse, og sammenstillingsverktøyene bare i en sammenstilling.

**Tastene er enkeltbokstaver i en skisse.** {{key:L}}, {{key:R}}, {{key:C}}, {{key:A}}, {{key:P}}, {{key:N}}, {{key:F}}, {{key:D}}, {{key:Q}} og {{key:S}} velger verktøy uten modifikator. Se [Taster og mus](topic:keyboard).
