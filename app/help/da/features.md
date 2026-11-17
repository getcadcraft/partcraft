---
title: Features og deres indstillinger
summary: Alle features i værktøjslinjen med deres indstillinger, standarder og grænser, fra ekstrudering til afrunding, skal og importerede STEP-legemer, de handlinger alle features deler, og delindstillingerne.
keywords: features, ikke lavet endnu, ekstrudér, klip, drej, drejet udskæring, hul, forsænkning, lineært mønster, cirkulært mønster, spejl, afrunding, affasning, skal, import, indstillinger, standarder, opløsning, kurver, facetter, undertryk, rul tilbage
from: ab3a598e
---

Features står i historikken i den rækkefølge, de blev lavet i, og bygges oppefra og ned. Hver er navngivet efter sin type med et nummer: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft bygger hver feature med mesh-kernen. Afrunding og affasning virker på rette kanter mellem to plane flader, og Skal åbner plane flader. Importerede legemer kræver en eksakt kerne, som denne version ikke har: de er endnu ikke lavet, og deres afsnit nedenfor beskriver dem, som en del lavet i en tidligere build beholder dem. Se [Mesh-kernen](topic:solid-kernels) og [Hvad der endnu ikke er lavet](topic:not-built-yet).

## Skitse

| Indstilling | Bemærkninger |
|---|---|
| Plan | Front-, Top- eller Right-plan, eller en plan flade. Vises, men ændres ikke: for at flytte en skitse, lav en ny |
| Tilstand | Fuldt defineret, Under defineret (med frihedsgraderne), Over defineret, eller Tom |
| Geometri, relationer | Hvor mange kurver, punkter og relationer |
| Styrende mål | Hvert mål i skitsen, kan redigeres |

Knapper: {{ui:Rediger skitse}}, {{ui:Eksportér som DXF}}.

## Ekstruder og Klip

{{ui:Ekstruder}} og {{ui:Klip}} laver den samme feature, med forskellige startindstillinger.

| Indstilling | Valg | Ekstruder starter ved | Klip starter ved |
|---|---|---|---|
| Operation | Ophøjning (tilføj materiale), Klip (fjern materiale), Skæring (behold overlappet), Nyt legeme (endnu ikke lavet i denne version) | Ophøjning | Klip |
| Slut | Blind (en dybde), Midterplan (begge veje), Igennem alt | Blind | Igennem alt |
| Dybde (mm) | Over 0, op til 1,000,000 | 10 | 10 |
| Omvendt retning | Fra / til | Fra | Fra |

- Profil: hver lukket sløjfe af fuldt optrukne linjer, cirkler og buer i skitsen. Sløjfer inde i sløjfer er huller.
- Igennem alt virker kun til udskæringer. Den når helt igennem delen på den valgte side.
- En udskæring går ind i materialet, væk fra skitseplanets udadvendte side; Omvendt vender den.

## Drej og drejet udskæring

| Indstilling | Valg | Standard |
|---|---|---|
| Operation | Ophøjning, Klip | Ophøjning ({{ui:Drej}}), Klip ({{ui:Mere}} › {{ui:Drejet skær}}) |
| Vinkel (°) | Over 0, op til 360 | 360 |
| Akse | Første midterlinje, en vilkårlig linje eller midterlinje i skitsen, eller et akse-feature der ligger i skitsens plan | Første midterlinje |

- Profilen skal blive på den ene side af aksen. Den må røre den.
- En drejs akse kan bruges af cirkulære mønstre og af samlingsled.

## Hul

| Indstilling | Valg | Standard |
|---|---|---|
| Type | Enkel, Forsænkning | Enkel |
| Diameter (mm) | Over 0 | 6 |
| Igennem alt | Til / fra | Til |
| Dybde (mm) | Når Igennem alt er fra | 10 |
| Forsænkning ⌀ | Bredere end hullet | 11 |
| Forsænkningsdybde | Lavere end et blindt hul | 6 |
| Omvendt retning | Fra / til | Fra |

- Et hul ved hvert løst punkt i skitsen (punkter lavet med punktværktøjet). Panelet viser hvor mange.
- Huller bores vinkelret på skitseplanet, ind i materialet.
- Hvert huls akse kan bruges af samlingsled ("Hole1, hul 2").

## Lineært mønster

| Indstilling | Valg | Standard |
|---|---|---|
| Features der kopieres | Alle massive features over den | Den valgte feature, ellers den sidste massive feature |
| Retning | X-akse, Y-akse, Z-akse; en linje i en tidligere skitse; drejningens akse; en valgt kant | X-akse (eller kanten valgt, da du tilføjede den) |
| Afstand (mm) | Ethvert tal | 20 |
| Antal | 1 til 1000, inklusive originalen | 3 |
| Omvendt retning | Fra / til | Fra |

## Cirkulært mønster

| Indstilling | Valg | Standard |
|---|---|---|
| Features der kopieres | Som for Lineært | Som for Lineært |
| Akse | Som for Retning ovenfor | Den sidste drejs akse, ellers Y-aksen (eller den valgte kant) |
| Vinkel (°) | Over 0, op til 360. 360 fordeler kopierne ligeligt rundt; mindre spreder dem over vinklen | 360 |
| Antal | 1 til 1000, inklusive originalen | 6 |
| Omvendt retning | Fra / til | Fra |

## Spejl

| Indstilling | Valg | Standard |
|---|---|---|
| Spejl | Hele legemet (som bygget indtil nu), eller valgte features | Den valgte feature, ellers hele legemet |
| Spejlplan | Front-, Top- eller Right-plan; en plan flade | Right-plan, eller den plane flade valgt, da du tilføjede den |

## Afrunding og affasning

I denne version bygger mesh-kernen dem på rette kanter mellem to plane flader (ydre eller indre hjørner), med én radius. En rund kant siger »Afrunding: i denne version kun rette kanter mellem to plane flader (mesh-kernen bygger dem). Afrund eller affas buede kanter i skitsen.«; hvor afrundede kanter mødes i et hjørne, bliver de til en gering, og featuren advarer »Afrunding af mesh-kernen: hvor afrundede kanter mødes, får de en gering, ikke en blød overgang.« Affasningstyper (lige afstand, to afstande, afstand og vinkel, med **Vend siderne**) virker alle. Se [Afrund, affas og hulning](topic:fillet-chamfer-shell).

| Indstilling | Valg | Standard |
|---|---|---|
| Radius (mm) (Afrund) | Over 0 | 2 |
| Afstand (mm) (Affas) | Over 0, den samme på begge flader | 1 |
| Kanter | De valgte kanter, hver vist med de to flader den forbinder ("Extrude1 endeflade × Extrude1 side"), med **Fjern** | De kanter der var valgt, da du tilføjede den |

- Vælg kanter, før du vælger knappen ({{key:Shift}}+klik for flere), eller vælg knappen uden valgte kanter og klik på kanter bagefter.
- {{ui:Vælg kanter}} (eller dobbeltklik på featuren) ændrer kanterne.
- Kanter huskes af de to flader, de forbinder, så de består, når størrelser længere oppe ændres.

## Skal

Mesh-kernen bygger den. Kun plane flader kan åbnes (»Skal: i denne version åbner den kun plane flader (mesh-kernen bygger den).«); vægge med forskellige tykkelser er endnu ikke lavet. Se [Afrund, affas og hulning](topic:fillet-chamfer-shell).

| Indstilling | Valg | Standard |
|---|---|---|
| Væg (mm) | Over 0 | 2 |
| Vægge vokser udad (fladerne forbliver inde) | Fra: vægge går indad. Til: vægge går udad | Fra |
| Åbne flader | De fjernede flader, mindst én, med **Fjern** | De flader der var valgt, da du tilføjede den |

{{ui:Vælg flader}} ændrer de åbne flader.

## Importeret legeme

Lavet ved at åbne en STEP-, STL-, OBJ- eller 3MF-fil: et massivt legeme af trekanter uden egen historik ([Åbn en STEP-fil](topic:import-step), [Åbn en STL, OBJ eller 3MF](topic:open-meshes)). Det viser den fil det kom fra og hvad importen reparerede; **Enheder i filen**, **Op i filen** og **Brug det til** kan stadig redigeres. Et STEP-legeme importeret af en ældre build, som havde den eksakte kerne, bliver i historikken markeret som ikke lavet; åbn STEP-filen igen for at hente det ind som trekanter.

| Indstilling | Valg | Standard |
|---|---|---|
| Op i filen | Z op (de fleste CAD), Y op | Z op |

Mønstre og spejlinger kan kopiere et importeret legeme, men ikke en afrunding, affasning eller skal.

## Hvad alle features har

Nederst i hver features panel:

| Knap | Gør |
|---|---|
| {{ui:Undertryk}} / {{ui:Ophæv undertrykkelse}} | Slår den fra eller til. Features der har brug for den, bygges ikke, mens den er fra |
| {{ui:Rul tilbage hertil}} | Bygger kun featuresne over denne. Nye features indsættes ved rullelinjen |
| {{ui:Flyt op}} / {{ui:Flyt ned}} | Omrokér, når intet den bruger ville havne under den. Gråt med årsagen ellers |
| {{ui:Slet}} | Slet den, og (efter spørgsmål) hver feature der bruger den |
| Navn | Omdøb den (op til 60 tegn) |

Features med en skitse viser også **Skitsemål**, som kan redigeres på stedet.

## Tilstande i historikken

| Tilstand | Vist som | Betydning |
|---|---|---|
| Bygget | Normal | Alt i orden |
| Advarsel | ⚠ | Bygget, men noget at kontrollere: »Over defineret: 1 relation er ikke nødvendig.« eller »Der er intet tilbage af delen efter dette.« |
| Fejl | ⚠ fejl, rød | Kunne ikke bygges; meddelelsen siger hvorfor |
| Ikke bygget | ⚠ ikke bygget | Kræver en feature der fejlede, er undertrykt eller rullet tilbage, eller kræver en eksakt kerne, som denne version ikke har (»Sweep: endnu ikke lavet. …«) |
| Undertrykt | fra | Slået fra |
| Rullet tilbage | gråt, under rullelinjen | Ikke bygget, før du rullet frem igen |

## Delindstillinger

Klik på tomt rum, så intet er valgt. Højre panel viser **Del**:

- **Navn**: delens navn, bruges til filnavne og tegningshovedets titel (op til 120 tegn).
- **Kurver**: se nedenfor.

### Kurveopløsning

Mesh-kernen bygger selve legemet af plane facetter, så visningen, STL, 3MF, den facetterede STEP, rumfanget og tegningsvisningerne alle følger **Kurver**: hvor mange facetter pr. fuld omdrejning.

| Indstilling | Facetter pr. omdrejning | Rumfang af en rund form |
|---|---|---|
| Grov (32 pr. omdrejning) | 32 | Cirka 0.64 % under den sande værdi |
| Normal (64 pr. omdrejning) | 64 | Cirka 0.16 % under (standarden) |
| Fin (128 pr. omdrejning) | 128 | Cirka 0.04 % under |
| Meget fin (256 pr. omdrejning) | 256 | Cirka 0.01 % under |

Finere kurver giver glattere eksporter og visninger og langsommere genopbygninger. Indstillingen gemmes i delfilen.

## Endnu ikke lavet

Variabel-radius-afrundinger, afrundinger og affasninger på runde kanter, skaller der åbner buede flader, udtræksvinkel på buede flader, sweep, loft, ribbe, STEP-legemer med eksakte buede flader, nye legemer, udtræksvinkler, "op til" en flade eller et hjørnepunkt, og referencer på legemets flader og kanter kræver en eksakt kerne, som denne version ikke har. Også ikke lavet: gevindhuller og forsænkede huller. Se [Hvad der endnu ikke er lavet](topic:not-built-yet).
