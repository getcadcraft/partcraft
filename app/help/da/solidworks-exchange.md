---
title: Flyt dele til og fra andre part-modellerere
summary: Send en del til en anden part-modellerer som en makro, der bygger den igen med et levende feature-træ. Den navngivne STEP og åbning af featurelisten, som en anden modellerer skrev ud, er ikke lavet endnu i denne version.
keywords: makro, ikke lavet endnu, swb, vba, feature-træ, tur og retur, eksportér makro, cadcraft-sw.json, navngivet step, ap214, globale variabler, ligninger, indbygget del
from: 97ca61da
---

PartCraft udveksler dele med SolidWorks i begge retninger, uden et filformat som ingen andre kan læse:

- **Ud:** en makro (`.swb`, ren tekst), som SolidWorks kører for at bygge delen selv, feature for feature, med dens skitser, relationer, mål, globale variabler og ligninger. Du får en indbygget del med et levende feature-træ, ikke et dødt legeme.
- **Tilbage:** en makro, du kører inde i SolidWorks, skriver delens features og ligninger til en fil `.cadcraft-sw.json`. Åbning af den fil i PartCraft er ikke lavet endnu i denne version (den kræver en eksakt kerne).

:::warning
Intet af dette er testet i SolidWorks endnu. SolidWorks kører kun på Windows med en licens, og PartCraft har aldrig kørt disse makroer i det. Makroerne er skrevet ud fra SolidWorks' API-dokumentation og kontrolleret for struktur her. Regn med at skulle melde fejl; loggen, makroen skriver, siger, hvilket trin der fejlede.
:::

PartCraft kan ikke skrive en `.sldprt`-fil: det format er lukket. Makroen er vejen til en indbygget del.

## Send en del som makro

1. Åbn delen.
2. Vælg {{ui:Eksportér}}, og derefter {{ui:Makro til SolidWorks (.swb)}}. PartCraft henter `<part>.swb`; statuslinjen siger, at den blev »skrevet uden den eksakte kerne«.
3. En dialogboks siger, hvor mange features, globale variabler og ligninger makroen bygger, og lister alt, den udelader. Der følger ingen STEP med i denne version: brug {{ui:Eksportér}}, derefter {{ui:STEP (facetteret, mesh-kerne)}}, hvis du har brug for en.
4. I SolidWorks vælg **Tools > Macro > Run**, vælg `.swb`-filen og vent. Den laver en ny del ud fra din standarddelskabelon, sætter millimeter og bygger hver feature.
5. Til sidst siger en besked, hvor mange trin der blev udført, hvor mange der fejlede, og hvor mange der matchede PartCraft's legeme. Den fulde log, `<part> macro log.txt`, skrives ved siden af makroen.

Hvad makroen bygger:

| PartCraft | I den nye del |
|---|---|
| Skitse på forplan, topplan eller højreplan | En skitse på det plan, med dens linjer, buer, cirkler, punkter, relationer og mål (navngivet som i PartCraft, for eksempel `k7`) |
| Skitse på en flade | En skitse på samme flade, valgt via et punkt på den |
| Skitse på et fast plan | Et referenceplan gennem tre punkter, og skitsen på det |
| Ekstrudering, udskæring (blind, gennem alt, midterplan, to retninger, konisk) | Boss-extrude eller cut-extrude |
| Drejning, drejet udskæring | Drejning om den samme midterlinje |
| Hul (simpelt, forboring, forsænkning, gevindhul) | En eller to udskæringer med deres egne skitser (et gevindhul er sin boreboring; intet gevind) |
| Lineært og cirkulært mønster, spejl | Lineært mønster, cirkulært mønster, spejl (features eller legemet) |
| Afrunding, affasning, skal | Afrunding, affasning og skal på de samme kanter og flader, valgt via punkter |
| Parametre og ligninger | Globale variabler og ligninger på de omdøbte mål |
| Undertrykte features, rullebjælken | Undertrykt på samme måde; rullebjælken på samme sted |

Efter hver fast feature sammenligner makroen legemets rumfang og størrelse med PartCraft's. Når de er forskellige, vender den featurens retning én gang og kontrollerer igen; er det ikke bedre, vender den tilbage og skriver »Check« i loggen.

### Hvad der udelades

Dialogboksen og toppen af makroen lister alt, der ikke er medtaget, med årsagen. I dag er det: importerede legemer (indsæt i stedet STEP-filen), sweeps, lofts, udtræksvinkler, referenceakser og -punkter, slutbetingelser »op til«, ekstrudering af kun nogle konturer, og alt, der afhænger af dem. Splines bliver til kurver gennem deres punkter. Denne version har ingen eksakt kerne, så skitser på flader og de features, der vælger kanter eller flader, udelades også.

## Send en navngivet STEP

Ikke lavet endnu i denne version: {{ui:STEP til SolidWorks (navngivet, AP214)}} kræver en eksakt kerne, og valg af den siger »STEP til SolidWorks: ikke lavet endnu. …«. Med en eksakt kerne bærer filen delens navn, millimeter og delens farve og står Y op, som SolidWorks viser dele (den almindelige {{ui:STEP AP214 (eksakt massivt legeme)}}-eksport står Z op). Bogstaver med accenter mister accenterne i navnet, og andre tegn uden for almindelig ASCII bliver til `_`.

## Hent en del tilbage

Åbning af filen i PartCraft (trin 3) er ikke lavet endnu i denne version: den siger »Åbning af en SolidWorks-eksport: ikke lavet endnu. …«. CadCraft-tegneappen åbner stadig filen og henter dens skitser.

1. Vælg {{ui:Fil}} > {{ui:Eksportér}} > {{ui:Eksportér makro til at hente dele tilbage (.swb)}} for at hente `CadCraftExport.swb`, og læg den ved siden af dine dele.
2. I SolidWorks åbner du delen, vælger **Tools > Macro > Run** og vælger `CadCraftExport.swb`. Den skriver `<part>.cadcraft-sw.json` ved siden af delen og ændrer intet i den.
3. I PartCraft vælger du {{ui:Åbn}} og vælger den fil, eller slipper den på 3D-visningen.
4. Med en eksakt kerne bygger PartCraft delen igen feature for feature og viser, hvad den gjorde: for eksempel »5 af 5 features overført fra SolidWorks (Flange.SLDPRT)«, hver feature den ikke kunne overføre (»Ikke overført: Sweep1 (Sweep).«), og om rumfanget stemmer med det, SolidWorks skrev.
5. Gem den som en PartCraft-del med {{ui:Gem}}.

Skitser havner på et grundplan, når de ligger på et, på den tilsvarende plane flade på delen, når der findes en (så de følger senere rettelser), og ellers på et fast plan. Kanter og flader på afrundinger, affasninger og skal findes ud fra punkter og bevares som navngivne referencer. Globale variabler bliver til parametre (navne med mellemrum får understreger: »Bolt count« bliver til `Bolt_count`), og ligninger bliver til ligninger på de samme mål. Intet gættes: det, der ikke har en modpart, står på listen.

CadCraft-tegneappen åbner den samme fil og henter dens skitser.

:::note
Formatet er `cadcraft-sw-export` version 1, ren JSON i millimeter og grader. En fil fra en nyere makro, eller en der ikke er gyldig, afvises med årsagen.
:::
