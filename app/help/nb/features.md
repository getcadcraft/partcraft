---
title: Funksjoner og deres innstillinger
summary: Hver funksjon i verktøylinjen med innstillinger, standardverdier og grenser, fra ekstrudering til avrunding, skall og importerte STEP-volumlegemer, handlingene alle funksjoner deler, og delinnstillingene.
keywords: funksjoner, ikke bygget, ekstruder, klipp ut, roter, rotert utklipp, hull, forsenkning, lineært mønster, sirkulært mønster, speil, avrunding, fasing, skall, import, innstillinger, standarder, oppløsning, kurver, fasetter, undertrykk, tilbakerulling
from: ab3a598e
---

Funksjoner står i historikken i den rekkefølgen de ble laget, og bygges om fra topp til bunn. Hver er navngitt etter sin type med et tall: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft bygger hver funksjon med nettkjernen. Avrunding og fasing virker på rette kanter mellom to plane flater, og Skall åpner plane flater. Importerte volumlegemer trenger en eksakt kjerne, som denne versjonen ikke har: de er ikke bygget ennå, og seksjonen under beskriver dem som en del laget i en tidligere versjon beholder. Se [Nettkjernen](topic:solid-kernels) og [Hva som ikke er bygget ennå](topic:not-built-yet).

## Skisse

| Innstilling | Merknader |
|---|---|
| Plan | Forside-, Topp- eller Høyre-planet, eller en plan flate. Vises, men endres ikke: for å flytte en skisse, lag en ny |
| Tilstand | Fullt definert, Underdefinert (med frihetsgradene), Overdefinert eller Tom |
| Geometri, relasjoner | Hvor mange kurver, punkter og relasjoner |
| Drivende mål | Hvert mål i skissen, kan redigeres |

Knapper: {{ui:Rediger skisse}}, {{ui:Eksporter som DXF}}.

## Ekstruder og Klipp ut

{{ui:Ekstruder}} og {{ui:Klipp ut}} lager den samme funksjonen, men starter med ulike innstillinger.

| Innstilling | Valg | Ekstruder starter på | Klipp ut starter på |
|---|---|---|---|
| Operasjon | Opphøyning (legg til materiale), Klipp ut (fjern materiale), Skjæring (behold overlappet), Nytt legeme (ikke bygget ennå i denne versjonen) | Opphøyning | Klipp ut |
| Slutt | Blind (en dybde), Midtplan (begge veier), Gjennom alt | Blind | Gjennom alt |
| Dybde (mm) | Over 0, opp til 1,000,000 | 10 | 10 |
| Snu retning | Av / på | Av | Av |

- Profil: hver lukket sløyfe av heltrukne linjer, sirkler og buer i skissen. Sløyfer inni sløyfer er hull.
- Gjennom alt virker bare for utklipp. Den går helt gjennom delen på den valgte siden.
- Et utklipp går inn i materialet, bort fra skissplanets utoverrettede side; Snu retning snur det.

## Roter og rotert utklipp

| Innstilling | Valg | Standard |
|---|---|---|
| Operasjon | Opphøyning, Klipp ut | Opphøyning ({{ui:Roter}}), Klipp ut ({{ui:Mer}} › {{ui:Rotert utskjæring}}) |
| Vinkel (°) | Over 0, opp til 360 | 360 |
| Akse | Første senterlinje, en hvilken som helst linje eller senterlinje i skissen, eller en aksefunksjon som ligger i skissens plan | Første senterlinje |

- Profilen må holde seg på én side av aksen. Den kan røre den.
- En rotasjonsakse kan brukes av sirkulære mønstre og av sammenstillingsledd.

## Hull

| Innstilling | Valg | Standard |
|---|---|---|
| Type | Enkel, Forsenkning | Enkel |
| Diameter (mm) | Over 0 | 6 |
| Gjennom alt | På / av | På |
| Dybde (mm) | Når Gjennom alt er av | 10 |
| Forsenkning ⌀ | Bredere enn hullet | 11 |
| Forsenkningsdybde | Grunnere enn et blindhull | 6 |
| Snu retning | Av / på | Av |

- Ett hull ved hvert løst punkt i skissen (punkter laget med punktverktøyet). Panelet viser hvor mange.
- Hull bores vinkelrett på skissplanet, inn i materialet.
- Hver hulls akse kan brukes av sammenstillingsledd («Hole1, hole 2»).

## Lineært mønster

| Innstilling | Valg | Standard |
|---|---|---|
| Funksjoner som kopieres | Alle volumfunksjoner over den | Den valgte funksjonen, ellers den siste volumfunksjonen |
| Retning | X-akse, Y-akse, Z-akse; en linje fra en tidligere skisse; aksen til en rotasjon; en valgt kant | X-akse (eller kanten som ble valgt da den ble lagt til) |
| Avstand (mm) | Et hvilket som helst tall | 20 |
| Antall | 1 til 1000, inkludert originalen | 3 |
| Snu retning | Av / på | Av |

## Sirkulært mønster

| Innstilling | Valg | Standard |
|---|---|---|
| Funksjoner som kopieres | Som for lineært mønster | Som for lineært mønster |
| Akse | Som for Retning over | Aksen til siste rotasjon, ellers Y-aksen (eller kanten som ble valgt) |
| Vinkel (°) | Over 0, opp til 360. 360 fordeler kopiene jevnt rundt; mindre sprer dem over vinkelen | 360 |
| Antall | 1 til 1000, inkludert originalen | 6 |
| Snu retning | Av / på | Av |

## Speil

| Innstilling | Valg | Standard |
|---|---|---|
| Speil | Hele legemet (slik det er bygget så langt), eller valgte funksjoner | Den valgte funksjonen, ellers hele legemet |
| Speilplan | Forside-, Topp- eller Høyre-planet; en plan flate | Høyre-planet, eller den plane flaten som ble valgt da den ble lagt til |

## Avrunding og fasing

I denne versjonen bygger nettkjernen dem på rette kanter mellom to plane flater (ytre eller indre hjørner), med én radius. En rund kant får beskjed om at avrunding og fasing i denne versjonen bare virker på rette kanter mellom to plane flater (nettkjernen bygger dem), og at buede kanter må avrundes eller fases i skissen. Der avrundede kanter møtes i et hjørne, avfases de, ikke jevnes ut, og funksjonen advarer om det. Alle fasingtyper (lik avstand, to avstander, avstand og vinkel, med **Bytt sider**) virker. Se [Avrund, fas og gjør hult](topic:fillet-chamfer-shell).

| Innstilling | Avrunding | Fasing |
|---|---|---|
| Størrelse | **Radius (mm)**, over 0, standard 2 | **Avstand (mm)**, over 0, likt på begge flater, standard 1 |
| Kanter | De valgte kantene, hver listet med de to flatene den forbinder (for eksempel Extrude1-sluttflate × Extrude1-side), med **Fjern** | Kantene som ble valgt da den ble lagt til |

- Velg kanter før du velger knappen ({{key:Shift}}+klikk for flere), eller velg den uten noe valgt og klikk på kanter etterpå.
- {{ui:Velg kanter}} (eller dobbeltklikk på funksjonen) endrer kantene.
- Kanter beholdes av de to flatene de forbinder, så de består når størrelser endres lenger opp i historikken.

## Skall

Nettkjernen bygger den. Bare plane flater kan åpnes; buede flater får beskjed om at skall i denne versjonen bare åpner plane flater. Vegger med ulik tykkelse er ikke bygget ennå. Se [Avrund, fas og gjør hult](topic:fillet-chamfer-shell).

| Innstilling | Valg | Standard |
|---|---|---|
| Vegg (mm) | Over 0 | 2 |
| Vegger vokser utover (flatene blir inni) | Av: veggene går innover. På: veggene går utover | Av |
| Åpne flater | Flatene som fjernes, minst én, med **Fjern** | Flatene som ble valgt da den ble lagt til |

{{ui:Velg flater}} endrer hvilke flater som er åpne.

## Importert volumlegeme

Laget ved å åpne en STEP-, STL-, OBJ- eller 3MF-fil: et volumlegeme av trekanter uten egen historikk ([Åpne en STEP-fil](topic:import-step), [Åpne en STL, OBJ eller 3MF](topic:open-meshes)). Det viser filen det kom fra og hva importen reparerte; **Enheter i filen**, **Opp i filen** og **Bruk den til** kan fortsatt redigeres. Et STEP-volumlegeme importert av en eldre versjon med den eksakte kjernen blir i historikken merket som ikke bygget; åpne STEP-filen på nytt for å hente det inn som trekanter.

| Innstilling | Valg | Standard |
|---|---|---|
| Opp i filen | Z opp (de fleste CAD), Y opp | Z opp |

Mønstre og speil kan kopiere et importert volumlegeme, men ikke en avrunding, fasing eller et skall.

## Hva hver funksjon har

Nederst i panelet til hver funksjon:

| Knapp | Gjør |
|---|---|
| {{ui:Undertrykk}} / {{ui:Opphev undertrykking}} | Slår den av eller på. Funksjoner som trenger den, bygges ikke mens den er av |
| {{ui:Rull tilbake til hit}} | Bygger bare funksjonene over denne. Nye funksjoner legges inn ved tilbakerullingsstangen |
| {{ui:Flytt opp}} / {{ui:Flytt ned}} | Endrer rekkefølgen, når ingenting den bruker havner under den. Nedtonet med årsaken ellers |
| {{ui:Slett}} | Sletter den, og (etter å ha spurt) hver funksjon som bruker den |
| Navn | Gir nytt navn (opptil 60 tegn) |

Funksjoner med en skisse lister også **Skissemål**, som kan redigeres på stedet.

## Tilstander i historikken

| Tilstand | Vises som | Betydning |
|---|---|---|
| Bygget | Normal | Alt i orden |
| Advarsel | ⚠ | Bygget, med noe å sjekke: for eksempel at en relasjon ikke er nødvendig, eller at ingenting er igjen av delen etter dette |
| Feil | ⚠ feil, rødt | Kunne ikke bygges; meldingen sier hvorfor |
| Ikke bygget | ⚠ ikke bygget | Trenger en funksjon som feilet, er undertrykt eller tilbakerullet, eller trenger en eksakt kjerne, som denne versjonen ikke har (for eksempel sveip) |
| Undertrykt | av | Slått av |
| Tilbakerullet | nedtonet, under tilbakerullingsstangen | Ikke bygget før du ruller fremover igjen |

## Delinnstillinger

Klikk på tomt område slik at ingenting er valgt. Høyre panel viser **Del**:

- **Navn**: delens navn, brukt til filnavn og tegningshodet (opptil 120 tegn).
- **Kurver**: se under.

### Oppløsning for kurver

Nettkjernen bygger volumlegemet selv av plane fasetter, så visningen, STL, 3MF, den fasetterte STEP-filen, volumet og tegningsvisningene følger alle **Kurver**: hvor mange fasetter per full omdreining.

| Innstilling | Fasetter per omdreining | Volum av en rund form |
|---|---|---|
| Grov (32 per omdreining) | 32 | Omtrent 0.64 % under den sanne verdien |
| Normal (64 per omdreining) | 64 | Omtrent 0.16 % under (standard) |
| Fin (128 per omdreining) | 128 | Omtrent 0.04 % under |
| Svært fin (256 per omdreining) | 256 | Omtrent 0.01 % under |

Finere kurver gir jevnere eksporter og visninger, og tregere ombygginger. Innstillingen lagres i delfilen.

## Ikke bygget ennå

Avrundinger med variabel radius, avrundinger og fasinger på runde kanter, skall som åpner buede flater, trekkvinkel på buede flater, sveip, loft, ribbe, STEP-volumlegemer med eksakte buede flater, nye legemer, skråninger, «opp til» en flate eller et hjørnepunkt, og referanser på volumlegemets flater og kanter trenger en eksakt kjerne, som denne versjonen ikke har. Også ikke bygget: gjengede og forsenkede hull. Se [Hva som ikke er bygget ennå](topic:not-built-yet).
