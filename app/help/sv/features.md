---
title: Funktioner och deras alternativ
summary: Varje funktion i verktygsfältet med dess inställningar, standardvärden och gränser, från extrudering till rundning, skal och importerade STEP-solider, de åtgärder som alla funktioner delar, och delinställningarna.
keywords: funktioner, finns inte ännu, extrudera, klipp ut, revolvera, revolverat snitt, hål, förborrning, linjärt mönster, cirkulärt mönster, spegling, rundning, fas, skal, import, alternativ, standardvärden, inställningar, upplösning, kurvor, facetter, undertryck, rulla tillbaka
from: ab3a598e
---

Funktioner listas i historiken i den ordning de skapades, och de byggs om uppifrån och ned. Varje funktion namnges efter sin typ med ett nummer: Sketch1, Extrude1, Revolve1, Hole1, LPattern1, CirPattern1, Mirror1, Fillet1, Chamfer1, Shell1, Imported1.

PartCraft bygger varje funktion med nätkärnan. Rundning och fas fungerar på raka kanter mellan två plana ytor, och skal öppnar plana ytor. Importerade solider kräver en exakt kärna, som den här versionen inte har: de byggs inte ännu, och avsnittet nedan beskriver dem som en del som gjordes i en tidigare version och behåller dem. Se [Nätkärnan](topic:solid-kernels) och [Det som inte finns ännu](topic:not-built-yet).

## Skiss

| Inställning | Anmärkningar |
|---|---|
| Plan | Planet Front, Top eller Right, eller en plan yta. Visas men ändras inte: för att flytta en skiss, skapa en ny |
| Tillstånd | Helt definierad, Underdefinierad (med frihetsgraderna), Överdefinierad eller Tom |
| Geometri, Relationer | Hur många kurvor, punkter och relationer det finns |
| Drivande mått | Varje mått i skissen, redigerbart |

Knappar: {{ui:Redigera skiss}}, {{ui:Exportera som DXF}}.

## Extrudera och Klipp ut

{{ui:Extrude}} och {{ui:Cut}} skapar samma funktion, med olika startinställningar.

| Inställning | Val | Extrudera börjar på | Klipp ut börjar på |
|---|---|---|---|
| Åtgärd | Upphöjning (lägg till material), Klipp ut (ta bort material), Skärning (behåll överlappet), Ny kropp (finns inte ännu i den här versionen) | Upphöjning | Klipp ut |
| Slut | Blind (ett djup), Mittplan (åt båda hållen), Genom alla | Blind (ett djup) | Genom alla |
| Djup (mm) | Över 0, upp till 1,000,000 | 10 | 10 |
| Vänd riktning | Av / på | Av | Av |

- Profil: varje sluten slinga av heldragna linjer, cirklar och bågar i skissen. Slingor inuti slingor är hål.
- Genom alla fungerar endast för urtag. Det når rakt igenom delen på den valda sidan.
- Ett urtag går in i materialet, bort från skissplanets utåtvända sida; Vänd vänder det.

## Revolvera och revolverat snitt

| Inställning | Val | Standard |
|---|---|---|
| Åtgärd | Upphöjning, Klipp ut | Upphöjning ({{ui:Revolve}}), Klipp ut ({{ui:More}} › {{ui:Revolved cut}}) |
| Vinkel (°) | Över 0, upp till 360 | 360 |
| Axel | Första mittlinjen, valfri linje eller mittlinje i skissen, eller en axelfunktion som ligger i skissens plan | Första mittlinjen |

- Profilen måste ligga på ena sidan av axeln. Den får vidröra den.
- En revolveringsaxel kan användas av cirkulära mönster och av sammanställningsfogar.

## Hål

| Inställning | Val | Standard |
|---|---|---|
| Typ | Enkelt, Förborrning | Enkelt |
| Diameter (mm) | Över 0 | 6 |
| Genom alla | På / av | På |
| Djup (mm) | När Genom alla är av | 10 |
| Förborrning ⌀ | Bredare än hålet | 11 |
| Förborrningens djup | Grundare än ett blint hål | 6 |
| Vänd riktning | Av / på | Av |

- Ett hål vid varje lös punkt i skissen (punkter gjorda med punktverktyget). Panelen visar hur många det är.
- Hål borras vinkelrätt mot skissplanet, in i materialet.
- Varje håls axel kan användas av sammanställningsfogar ("Hole1, hål 2").

## Linjärt mönster

| Inställning | Val | Standard |
|---|---|---|
| Funktioner att kopiera | Valfria solidfunktioner ovanför den | Den markerade funktionen, annars den sista solidfunktionen |
| Riktning | X-axel, Y-axel, Z-axel; en linje i en tidigare skiss; revolveringens axel; en vald kant | X-axel (eller kanten som valdes när du lade till den) |
| Avstånd (mm) | Valfritt tal | 20 |
| Antal | 1 till 1000, inklusive originalet | 3 |
| Vänd riktning | Av / på | Av |

## Cirkulärt mönster

| Inställning | Val | Standard |
|---|---|---|
| Funktioner att kopiera | Som för Linjärt | Som för Linjärt |
| Axel | Som för Riktning ovan | Den senaste revolveringens axel, annars Y-axeln (eller den valda kanten) |
| Vinkel (°) | Över 0, upp till 360. 360 fördelar kopiorna jämnt runt; mindre sprider ut dem över vinkeln | 360 |
| Antal | 1 till 1000, inklusive originalet | 6 |
| Vänd riktning | Av / på | Av |

## Spegling

| Inställning | Val | Standard |
|---|---|---|
| Spegling | Hela kroppen (så långt den byggts hittills), eller valda funktioner | Den markerade funktionen, annars hela kroppen |
| Spegelplan | Planet Front, Top eller Right; en plan yta | Planet Right, eller den plana yta som valdes när du lade till den |

## Rundning och fas

I den här versionen bygger nätkärnan dem på raka kanter mellan två plana ytor (yttre eller inre hörn), med en radie. En rund kant ger meddelandet: "Rundning: i den här versionen endast raka kanter mellan två plana ytor (nätkärnan bygger dem). Runda eller fasa krökta kanter i skissen."; där rundade kanter möts i ett hörn skärs de i geringen, och funktionen varnar: "Rundning med nätkärnan: där rundade kanter möts skärs de, de blandas inte." Alla fasttyper (lika avstånd, två avstånd, avstånd och vinkel, med **Byt sida**) fungerar. Se [Runda, fasa och gör ihålig](topic:fillet-chamfer-shell).

| Inställning | Rundning | Fas |
|---|---|---|
| Radie (mm) (Rundning) / Avstånd (mm) (Fas) | Över 0: radie 2 | Över 0, samma på båda ytorna: avstånd 1 |
| Kanter | De valda kanterna, var och en listad med de två ytor den förbinder ("Extrude1 end face × Extrude1 side"), med **Ta bort** | Kanterna som valdes när du lade till den |

- Välj kanter före knappen ({{key:Shift}}+klick för flera), eller välj knappen med ingenting valt och klicka sedan på kanter efteråt.
- {{ui:Välj kanter}} (eller dubbelklicka på funktionen) ändrar kanterna.
- Kanter hålls kvar av de två ytor de förbinder, så de överlever storleksändringar tidigare i kedjan.

## Skal

Nätkärnan bygger det. Endast plana ytor kan öppnas ("Skal: i den här versionen öppnar den endast plana ytor (nätkärnan bygger den)."); väggar med olika tjocklek byggs inte ännu. Se [Runda, fasa och gör ihålig](topic:fillet-chamfer-shell).

| Inställning | Val | Standard |
|---|---|---|
| Vägg (mm) | Över 0 | 2 |
| Väggar växer utåt (ytorna förblir inuti) | Av: väggarna går inåt. På: väggarna går utåt | Av |
| Öppna ytor | De borttagna ytorna, minst en, med **Ta bort** | Ytorna som valdes när du lade till den |

{{ui:Välj ytor}} ändrar vilka ytor som är öppna.

## Importerad solid

Skapas genom att öppna en STEP-, STL-, OBJ- eller 3MF-fil: en solid kropp av trianglar utan egen historik ([Öppna en STEP-fil](topic:import-step), [Öppna en STL, OBJ eller 3MF](topic:open-meshes)). Den visar filen den kom från och vad importen reparerade. **Enheter i filen**, **Upp i filen** och **Använd den till** förblir redigerbara. En STEP-solid som importerats av en äldre version med exakt kärna finns kvar i historiken, markerad som inte byggd; öppna STEP-filen igen för att hämta in den som trianglar.

| Inställning | Val | Standard |
|---|---|---|
| Upp i filen | Z upp (de flesta CAD), Y upp | Z upp |

Mönster och speglingar kan kopiera en importerad solid, men inte en rundning, fas eller ett skal.

## Det som varje funktion har

Längst ned i varje funktions panel:

| Knapp | Gör |
|---|---|
| {{ui:Undertryck}} / {{ui:Häv undertryckning}} | Stänger av eller på den. Funktioner som behöver den byggs inte när den är avstängd |
| {{ui:Rulla tillbaka hit}} | Bygger endast funktionerna ovanför den här. Nya funktioner läggs in vid återställningsfältet |
| {{ui:Flytta upp}} / {{ui:Flytta ned}} | Ordnar om, när inget den använder hamnar under den. Annars nedtonad med skälet |
| {{ui:Ta bort}} | Tar bort den, och (efter fråga) varje funktion som använder den |
| Namn | Byter namn på den (upp till 60 tecken) |

Funktioner med en skiss listar också **Skissmått**, som kan redigeras på plats.

## Tillstånd i historiken

| Tillstånd | Visas som | Betydelse |
|---|---|---|
| Byggd | Normal | Allt väl |
| Varning | ⚠ | Byggd, men något att kontrollera: "Överdefinierad: 1 relation behövs inte." eller "Inget av delen finns kvar efter detta." |
| Fel | ⚠ fel, röd | Kunde inte byggas; meddelandet säger varför |
| Inte byggd | ⚠ inte byggd | Behöver en funktion som misslyckades, är undertryckt eller återställd, eller behöver en exakt kärna, som den här versionen inte har ("Svep: finns inte ännu. …") |
| Undertryckt | av | Avstängd |
| Återställd | nedtonad, under återställningsfältet | Byggs inte förrän du rullar fram igen |

## Delinställningar

Klicka på tomt utrymme så att inget är markerat. Högra panelen visar **Del**:

- **Namn**: delens namn, används för filnamn och för ritningshuvudets fält (upp till 120 tecken).
- **Kurvor**: se nedan.

### Upplösning för kurvor

Nätkärnan bygger solidet själv av plana facetter, så vyn, STL, 3MF, den fasetterade STEP-filen, volymen och ritningens vyer följer alla **Kurvor**: hur många facetter per helt varv.

| Inställning | Facetter per varv | Volym för en rund form |
|---|---|---|
| Grov (32 per varv) | 32 | Cirka 0.64 % under det sanna värdet |
| Normal (64 per varv) | 64 | Cirka 0.16 % under (standard) |
| Fin (128 per varv) | 128 | Cirka 0.04 % under |
| Mycket fin (256 per varv) | 256 | Cirka 0.01 % under |

Finare kurvor ger jämnare exporter och vyer, men långsammare ombyggnader. Inställningen sparas i delfilen.

## Finns inte ännu

Variabla radier på rundningar, rundningar och fasningar på runda kanter, skal som öppnar krökta ytor, släppvinkel på krökta ytor, svep, loft, ribb, STEP-solider med exakta krökta ytor, nya kroppar, avsmalningar, "upp till" en yta eller ett hörn, och referenser på solidets ytor och kanter kräver en exakt kärna, som den här versionen inte har. Även gängade och försänkta hål är inte byggda. Se [Det som inte finns ännu](topic:not-built-yet).
