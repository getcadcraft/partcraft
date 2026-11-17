---
title: Flytta delar till och från andra delmodelerare
summary: Skicka en del till en annan delmodelerare som en makro som bygger upp den igen med ett levande funktionsträd. Den namngivna STEP-filen och att öppna funktionslistan som en annan modelerare skrivit ut finns inte ännu i den här versionen.
keywords: makro, finns inte ännu, swb, vba, funktionsträd, tur och retur, exportera makro, cadcraft-sw.json, namngiven step, ap214, globala variabler, ekvationer, inbyggd del
from: 97ca61da
---

PartCraft utbyter delar med SolidWorks åt båda håll, utan ett filformat som ingen annan kan läsa:

- **Ut:** en makro (`.swb`, vanlig text) som SolidWorks kör för att bygga delen själv, funktion för funktion, med sina skisser, villkor, mått, globala variabler och ekvationer. Du får en inbyggd del med ett levande funktionsträd, inte ett dött solid.
- **Tillbaka:** en makro som du kör inne i SolidWorks skriver delens funktioner och ekvationer till en fil `.cadcraft-sw.json`. Att öppna den filen i PartCraft finns inte ännu i den här versionen (den kräver en exakt kärna).

:::warning
Inget av detta har testats i SolidWorks än. SolidWorks körs bara på Windows med licens, och PartCraft har aldrig kört dessa makron i det. Makrona skrevs utifrån dokumentationen för SolidWorks API och kontrollerades här avseende struktur. Räkna med att behöva rapportera problem; loggen som makrot skriver anger vilket steg som misslyckades.
:::

PartCraft kan inte skriva en `.sldprt`-fil: det formatet är slutet. Makrot är vägen till en inbyggd del.

## Skicka en del som makro

1. Öppna delen.
2. Välj {{ui:Exportera}} och sedan {{ui:Makro för SolidWorks (.swb)}}. PartCraft laddar ner `<part>.swb`; statusfältet säger att den skrevs ”utan den exakta kärnan”.
3. En dialogruta anger hur många funktioner, globala variabler och ekvationer makrot bygger, och listar allt det lämnar ut. Ingen STEP-fil skrivs bredvid i den här versionen: använd {{ui:Exportera}} och sedan {{ui:STEP (fasetterad, nätkärna)}} om du behöver en.
4. I SolidWorks väljer du **Verktyg > Makro > Kör**, väljer `.swb`-filen och väntar. Den skapar en ny del från din standardmall för delar, ställer in millimeter och bygger varje funktion.
5. I slutet visar ett meddelande hur många steg som gjordes, hur många som misslyckades och hur många som stämde med PartCrafts kropp. Hela loggen, `<part> macro log.txt`, skrivs bredvid makrot.

Vad makrot bygger:

| PartCraft | I den nya delen |
|---|---|
| Skiss på framplanet, ovanplanet eller högerplanet | En skiss på det planet, med sina linjer, bågar, cirklar, punkter, villkor och mått (namngivna som i PartCraft, till exempel `k7`) |
| Skiss på en yta | En skiss på samma yta, vald med en punkt på den |
| Skiss på ett fast plan | Ett referensplan genom tre punkter, och skissen på det |
| Extrudera, urtag (blint, genom allt, mittplan, två riktningar, avsmalnande) | Boss-extrusion eller urtagsextrusion |
| Revolvera, revolverat urtag | Revolvering kring samma centrumlinje |
| Hål (enkelt, förborrat, försänkt, gängat) | Ett eller två urtag med egna skisser (ett gängat hål blir sitt borrhål; ingen gänga) |
| Linjärt och cirkulärt mönster, spegling | Linjärt mönster, cirkulärt mönster, spegling (funktioner eller kroppen) |
| Rundning, fasning, skal | Rundning, fasning och skal på samma kanter och ytor, valda med punkter |
| Parametrar och ekvationer | Globala variabler och ekvationer på de omdöpta måtten |
| Undertryckta funktioner, återrullningsfältet | Undertryckta på samma sätt; återrullningsfältet på samma plats |

Efter varje solid funktion jämför makrot kroppens volym och storlek med PartCrafts. När de skiljer sig vänder det funktionens riktning en gång och kontrollerar igen; om det inte blir bättre vänder det tillbaka och skriver ”Kontrollera” i loggen.

### Vad som lämnas ut

Dialogrutan och början av makrot listar allt som inte överförs, med skälet. Idag är det: importerade solider (infoga STEP i stället), svep, lofter, släppvinklar, referensaxlar och -punkter, slutvillkor ”upp till”, extrudering av bara vissa konturer, och allt som beror av dem. Splines blir kurvor genom sina punkter. Den här versionen saknar en exakt kärna, så skisser på ytor och funktioner som väljer kanter eller ytor lämnas också ut.

## Skicka en namngiven STEP

Finns inte ännu i den här versionen: {{ui:STEP för SolidWorks (namngiven, AP214)}} kräver en exakt kärna, och när du väljer den står det ”STEP för SolidWorks: finns inte ännu. …”. Med en exakt kärna bär filen delens namn, millimeter och delens färg, och står Y uppåt, så som SolidWorks visar delar (den vanliga exporten {{ui:STEP AP214 (exakt solid)}} står Z uppåt). Bokstäver med accenter förlorar dem i namnet, och andra tecken utanför vanlig ASCII blir `_`.

## Ta tillbaka en del

Att öppna filen i PartCraft (steg 3) finns inte ännu i den här versionen: där står ”Öppna en SolidWorks-export: finns inte ännu. …”. CadCraft-ritappen öppnar fortfarande filen och tar dess skisser.

1. Välj {{ui:Fil}} > {{ui:Exportera}} > {{ui:Exportera makro för att hämta tillbaka delar (.swb)}} för att ladda ner `CadCraftExport.swb`, och lägg den bredvid dina delar.
2. I SolidWorks öppnar du delen, väljer **Verktyg > Makro > Kör** och väljer `CadCraftExport.swb`. Den skriver `<part>.cadcraft-sw.json` bredvid delen och ändrar ingenting i den.
3. I PartCraft väljer du {{ui:Öppna}} och väljer filen, eller släpper den i 3D-vyn.
4. Med en exakt kärna bygger PartCraft om delen funktion för funktion och visar vad den gjorde: till exempel ”5 av 5 funktioner överförda från SolidWorks (Flange.SLDPRT)”, varje funktion den inte kunde överföra (”Inte överförd: Sweep1 (Sweep).”) och om volymen stämmer med den som SolidWorks skrev.
5. Spara den som en PartCraft-del med {{ui:Spara}}.

Skisser hamnar på ett basplan när de ligger på ett sådant, på motsvarande plan yta på delen när en finns (så att de följer senare ändringar), och annars på ett fast plan. Kanter och ytor på rundningar, fasningar och skal hittas utifrån punkter och behålls som namngivna referenser. Globala variabler blir parametrar (namn med mellanslag får understreck: ”Bolt count” blir `Bolt_count`) och ekvationer blir ekvationer på samma mått. Ingenting gissas: det som saknar motsvarighet listas.

CadCraft-ritappen öppnar samma fil och tar dess skisser.

:::note
Formatet är `cadcraft-sw-export` version 1, vanlig JSON i millimeter och grader. En fil från ett nyare makro, eller en som inte är giltig, nekas med skälet.
:::
