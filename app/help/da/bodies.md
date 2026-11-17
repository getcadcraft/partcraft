---
title: Kombinér, flyt og skalér legemer; stimønstre
summary: Lav separate legemer, og kombinér, skær eller fællesmængde dem bagefter, flyt, drej, justér eller kopiér dem, skalér dem ensartet eller efter X, Y og Z, og kopiér features eller legemer langs en kurve.
keywords: legeme, legemer, flere legemer, nyt legeme, kombinér, boolesk, sammenføj, skær, fællesmængde, træk fra, union, behold værktøjer, flyt legeme, kopiér legeme, roter legeme, justér, flyt, skalér, skalér ujævnt, stræk, affin, stimønster, mønster langs kurve, array langs sti, kurvestyret mønster
from: 6b1ea820
---

:::note
**Ikke lavet endnu i denne version.** Arbejde med flere legemer kræver en præcis geometrikerne, som denne version af PartCraft ikke har: den bygger alle dele med mesh-kernen. [Hvad der ikke er lavet endnu](topic:not-built-yet) forklarer, hvad du gør i stedet. Resten af siden beskriver, hvordan det virker med en præcis kerne.
:::

En del kan indeholde mere end ét massivt legeme. Hvert adskilt massivt legeme er et **legeme**. De fleste features tilføjer til eller skærer fra alle de legemer, de rører; værktøjerne på denne side arbejder på hele legemer, du vælger. De findes i Features-gruppens menu {{ui:Mere}}: {{ui:Kombinér}}, {{ui:Flyt legeme}}, {{ui:Skalér legeme}} og {{ui:Stimønster}}. Alle kræver den præcise kerne (OpenCascade).

## Lav et separat legeme

Sæt en ekstrudering eller drejnings **Handling** til **Nyt legeme** i dens højre panel (sweeps og lofts har den også). Det nye massive legeme forbliver adskilt, også hvor det overlapper de andre. **Fællesmængde** beholder kun overlapningen mellem den nye form og det, der allerede er.

Legemer navngives efter den feature, der oprettede dem: "Extrude2". En kopi navngives efter sin original og den feature, der kopierede den: "Extrude2, copy 1 of Move1". Navnene forbliver de samme, når du ændrer mål tidligere i forløbet, så de features, der bruger et legeme, bliver ved med at finde det. Med to eller flere legemer viser delpanelet (klik på et tomt område) dem med deres volumener.

## Omdøb eller skjul et legeme

Klik på et tomt område i visningen for at se delpanelet. Dets liste over legemer (vises, når delen har to eller flere legemer) har et navnefelt og en {{ui:Skjul}}-knap på hver række.

- **Omdøb:** skriv et nyt navn i feltet og tryk {{key:Enter}} eller klik et andet sted. Alle paneler bruger det derefter: Kombinér, Flyt legeme, mønstrene. Tøm feltet for at gå tilbage til navnet fra den feature, der lavede legemet.
- **Skjul:** klik på {{ui:Skjul}} i dens række. Legemet forlader visningen, og klik går igennem det, så du kan vælge flader bagved. {{ui:Vis}} henter det tilbage; {{ui:Vis alle}} henter alle skjulte legemer tilbage.

Skjul ændrer kun visningen. Et skjult legeme bygges stadig, tælles med i volumen og målingerne og gemmes i STL-, 3MF- og STEP-eksporter. Navne og skjulte legemer gemmes i delfilen, og hver ændring er ét trin i {{ui:Fortryd}}.

## Kombinér legemer

1. Shift+klik på en flade af **målet**-legemet, og derefter en flade af hvert **værktøjs**-legeme.
2. Vælg {{ui:Mere}}, og vælg derefter {{ui:Kombinér}}.
3. I højre panel vælger du **Handling**:

| Handling | Resultat |
|---|---|
| Forbind | Målet og værktøjerne bliver ét legeme |
| Skær | Værktøjerne fjernes fra målet |
| Fællesmængde | Kun det, målet og alle værktøjer har tilfælles, beholdes |

**Målet** er det legeme, der beholder sit navn. Sæt eller fjern flueben i **Værktøjslegemer**, eller brug **Vælg i visningen** og klik på deres flader. **Behold værktøjslegemerne** lader også værktøjerne blive på plads (praktisk til en støbeform og dens kerne). Hvis et værktøjslegeme allerede er brugt op af en tidligere Kombinér, siger panelet det i stedet for at vælge et andet legeme.

## Flyt eller kopiér et legeme

1. Vælg {{ui:Mere}}, og vælg derefter {{ui:Flyt legeme}}. Det nyeste legeme er markeret; sæt flueben i dem, der skal flyttes.
2. Vælg flyttetypen:

| Flyt | Det du angiver |
|---|---|
| Parallelforskydning | **ΔX**, **ΔY**, **ΔZ** i millimeter |
| Punkt til punkt | **Fra** og **Til**: klik tæt på enden af en kant, et punkt-feature eller et sted på en flade |
| Roter om en akse | **Akse** (X, Y, Z, et akse-feature, eller **Vælg**: en ret kant, en cirkel eller en cylinder) og **Vinkel (°)** |
| Justér en flade til en flade eller et plan | **Flade, der skal flyttes** (en plan flade på legemet), **Mod** (en plan flade eller et plan) |

Justér drejer legemet, så dets flade ligger mod den anden flade, flade mod flade, og skubber det derefter kun langs den flades normal. **Samme retning** vender det den modsatte vej. **Kopiér** beholder originalen og tilføjer den flyttede kopi som et nyt legeme.

## Skalér et legeme

1. Vælg {{ui:Mere}}, og vælg derefter {{ui:Skalér legeme}}, og sæt flueben i legemerne.
2. Skriv en **Skala**, eller fjern fluebenet i **Ensartet** og skriv **Skala X**, **Skala Y** og **Skala Z** (langs verdens akser).
3. **Omkring** er punktet, der bliver stående: midten af legemernes boks, eller et punkt du vælger.

En ensartet skalering er præcis. En ikke-ensartet skalering gør cirkler til ellipser: en cylinder bliver en elliptisk cylinder, som ingen analytisk flade kan holde, så buede flader bliver til B-spline-flader, der holder sig inden for 0.0000004 mm fra den præcise form; plane flader og rette kanter forbliver præcise. Panelet siger, hvad der skete. Skaleringsfaktorer skal være større end nul (spejl i stedet med {{ui:Spejl}}).

## Kopiér langs en sti

1. Vælg den feature, der skal kopieres, i historikken, eller lad intet være valgt for at kopiere det nyeste legeme.
2. Vælg {{ui:Mere}}, og vælg derefter {{ui:Stimønster}}. Den nyeste ubrugte skitse bruges som sti.
3. I højre panel angiver du:

| Indstilling | Hvad den gør |
|---|---|
| **Kopiér** | Legemer (hver kopi et nyt legeme) eller Features (sammenføjet eller skåret ligesom originalen) |
| **Sti** | Sæt flueben i skitser, eller **Vælg modelkanter**; stykkerne skal sluttes ende til ende |
| **Antal** | Samlet antal, inklusive originalen |
| **Afstand** | Ens (fordelt til enden af en åben sti, eller hele vejen rundt om en lukket) eller en fast afstand |
| **Retning** | Følg stien (hver kopi drejer med den) eller Fast (kopierne forbliver parallelle) |
| **Vend retning** | Gå den modsatte vej langs stien |

Kopierne starter, hvor stien går tættest på originalen, og placeres med længden langs kurven.

Lineære og cirkulære mønstre kan også kopiere legemer: sæt flueben i **Kopiér legemer** i deres panel og vælg legemerne; hver kopi er et nyt legeme.

## Begrænsninger

- Legemer kræver den præcise kerne; mesh-kernen beholder ét massivt legeme og siger det.
- En ikke-ensartet skalering gør buede flader til tætte B-spline-tilnærmelser (se ovenfor), ikke præcise cylindre eller kegler; forskudte flader kan endnu ikke skaleres på den måde.
- At følge stien på en snoet 3D-kurve fører kopien med uden at vride den; på plane stier er drejningen præcis.
- Kombinér virker kun på massive legemer. Fladelegemer sammenføjes med {{ui:Sy sammen}}.

Se også [Referenceplaner, akser og punkter](topic:reference-geometry) for punkter og planer "mellem objekter" og [Mønster- og spejlfeatures](topic:patterns-mirror).
