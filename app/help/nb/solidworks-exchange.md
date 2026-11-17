---
title: Flytt deler til og fra andre delmodelleringsverktøy
summary: Send en del til et annet delmodelleringsverktøy som makro som bygger den på nytt med et levende funksjonstre. Den navngitte STEP-filen og å åpne funksjonslisten et annet verktøy skrev ut, er ikke bygget ennå i denne versjonen.
keywords: makro, ikke bygget, swb, vba, funksjonstre, rundtur, eksporter makro, cadcraft-sw.json, navngitt step, ap214, globale variabler, ligninger, egen del
from: 97ca61da
---

PartCraft utveksler deler med SolidWorks i begge retninger, uten et filformat ingen andre kan lese:

- **Ut:** en makro (`.swb`, ren tekst) som SolidWorks kjører for å bygge delen selv, funksjon for funksjon, med skissene, betingelsene, målene, globale variabler og ligninger. Resultatet er en egen del med et levende funksjonstre, ikke et dødt volumlegeme.
- **Tilbake:** en makro du kjører inne i SolidWorks skriver delens funksjoner og ligninger til en fil `.cadcraft-sw.json`. Å åpne den filen i PartCraft er ikke bygget ennå i denne versjonen (den krever en eksakt kjerne).

:::warning
Ingenting av dette er testet i SolidWorks ennå. SolidWorks kjører bare på Windows med lisens, og PartCraft har aldri kjørt disse makroene i den. Makroene er skrevet ut fra SolidWorks API-dokumentasjonen og kontrollert for struktur her. Regn med å måtte rapportere problemer; loggen makroen skriver, sier hvilket steg som feilet.
:::

PartCraft kan ikke skrive en `.sldprt`-fil: det formatet er lukket. Makroen er veien til en egen del.

## Send en del som makro

1. Åpne delen.
2. Velg {{ui:Eksporter}}, og deretter {{ui:Makro for SolidWorks (.swb)}}. PartCraft laster ned `<part>.swb`; statuslinjen sier at den ble skrevet «uten den eksakte kjernen».
3. En dialogboks sier hvor mange funksjoner, globale variabler og ligninger makroen bygger, og lister opp det den utelater. Ingen STEP-fil følger med i denne versjonen: bruk {{ui:Eksporter}}, og deretter {{ui:STEP (fasettert, nettkjerne)}} hvis en trengs.
4. I SolidWorks velg **Verktøy > Makro > Kjør**, velg `.swb`-filen og vent. Den lager en ny del fra standardmalen, setter millimeter og bygger hver funksjon.
5. Til slutt sier en melding hvor mange steg som ble utført, hvor mange som feilet, og hvor mange som stemte med PartCraft-volumlegemet. Hele loggen, `<part> macro log.txt`, skrives ved siden av makroen.

Hva makroen bygger:

| PartCraft | I den nye delen |
|---|---|
| Skisse på Forsideplan, Toppplan eller Høyreplan | En skisse på det planet, med linjene, buene, sirklene, punktene, betingelsene og målene (navngitt som i PartCraft, for eksempel `k7`) |
| Skisse på en flate | En skisse på samme flate, valgt med et punkt på den |
| Skisse på et fast plan | Et referanseplan gjennom tre punkter, og skissen på det |
| Ekstruder, kutt (blindt, gjennom alt, midtplan, to retninger, skråning) | Boss-ekstrudering eller kuttekstrudering |
| Roter, rotert kutt | Roter om samme midtlinje |
| Hull (enkelt, forsenkning, motsenkning, gjenget) | Ett eller to kutt med egne skisser (et gjenget hull blir til sitt borhull; ingen gjenge) |
| Lineært og sirkulært mønster, speil | Lineært mønster, sirkulært mønster, speil (funksjoner eller legemet) |
| Avrunding, fasing, skall | Avrunding, fasing og skall på de samme kantene og flatene, valgt med punkter |
| Parametere og ligninger | Globale variabler og ligninger på de omdøpte målene |
| Undertrykte funksjoner, tilbakerullingslinjen | Undertrykt på samme måte; tilbakerullingslinjen på samme sted |

Etter hvert volumetrisk trinn sammenligner makroen legemets volum og størrelse med PartCraft sine. Når de avviker, snur den retningen til den funksjonen én gang og sjekker på nytt; hvis det ikke er bedre, snur den tilbake og skriver «Check» i loggen.

### Hva som utelates

Dialogboksen og toppen av makroen lister opp alt som ikke er med, med årsak. I dag er det: importerte volumlegemer (sett inn STEP-filen i stedet), sveip, lofter, trekkvinkler, referanseakser og -punkter, sluttbetingelser «opp til», ekstrudering av bare noen konturer, og alt som avhenger av disse. Splines blir kurver gjennom punktene sine. Denne versjonen har ingen eksakt kjerne, så skisser på flater og funksjonene som velger kanter eller flater, utelates også.

## Send en navngitt STEP

Ikke bygget ennå i denne versjonen: {{ui:STEP for SolidWorks (navngitt, AP214)}} krever en eksakt kjerne, og å velge den sier «STEP for SolidWorks: ikke bygget ennå. …». Med en eksakt kjerne bærer filen delens navn, millimeter og delfargen, og står Y opp, slik SolidWorks viser deler (den vanlige {{ui:STEP AP214 (eksakt volumlegeme)}}-eksporten har Z opp). Bokstaver med aksenter mister dem i navnet, og andre tegn utenfor vanlig ASCII blir `_`.

## Hent en del tilbake

Å åpne filen i PartCraft (trinn 3) er ikke bygget ennå i denne versjonen: det sier «Åpne en SolidWorks-eksport: ikke bygget ennå. …». CadCraft-tegneappen åpner fortsatt filen og tar skissene fra den.

1. Velg {{ui:Fil}} > {{ui:Eksporter}} > {{ui:Eksporter makro for å hente deler tilbake (.swb)}} for å laste ned `CadCraftExport.swb`, og legg den ved siden av delene.
2. I SolidWorks åpne delen, velg **Verktøy > Makro > Kjør** og velg `CadCraftExport.swb`. Den skriver `<part>.cadcraft-sw.json` ved siden av delen og endrer ingenting i den.
3. I PartCraft velg {{ui:Åpne}} og velg den filen, eller slipp den på 3D-visningen.
4. Med en eksakt kjerne bygger PartCraft delen på nytt funksjon for funksjon og viser hva den gjorde: for eksempel «5 av 5 funksjoner overført fra SolidWorks (Flange.SLDPRT)», hver funksjon den ikke kunne overføre («Ikke overført: Sweep1 (Sweep).») og om volumet stemmer med det SolidWorks skrev.
5. Lagre den som en PartCraft-del med {{ui:Lagre}}.

Skisser havner på et grunnplan når de ligger på et, på den tilsvarende flaten på delen når en finnes (slik at de følger senere redigeringer), og ellers på et fast plan. Kanter og flater på avrundinger, fasinger og skall finnes ut fra punkter og lagres som navngitte referanser. Globale variabler blir parametere (navn med mellomrom får understreker: «Bolt count» blir `Bolt_count`), og ligninger blir ligninger på de samme målene. Ingenting gjettes: det som ikke har en motpart, listes opp.

CadCraft-tegneappen åpner samme fil og tar skissene fra den.

:::note
Formatet er `cadcraft-sw-export` versjon 1, ren JSON i millimeter og grader. En fil fra en nyere makro, eller en som ikke er gyldig, avvises med årsaken.
:::
