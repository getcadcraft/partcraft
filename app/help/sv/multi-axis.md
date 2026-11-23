---
title: 4- och 5-axlig bearbetning
summary: Berätta för PartCraft vilka roterande axlar maskinen har, luta verktyget för valfri vanlig operation, finbearbeta en yta med en kulfräs som lutar när den skär, eller vrid delen under verktyget på en 4:e axel. Vad som skrivs till G-koden och vad som inte är bevisat.
keywords: 5-axlig, femaxlig, 4-axlig, fjärde axeln, multiaxel, 3+2, indexerad, positionell, luta, lutande verktyg, roterande, trunnion, bord, huvud, A-axel, B-axel, C-axel, TCP, RTCP, verktygscentrumpunkt, G43.4, inverstid, G93, kinematik, vridpunkt, swarf, anfallsvinkel
from: c4f1c491
---

Tillverkning kan hålla verktyget i en vinkel, och den kan flytta de roterande axlarna under skärning. Tre saker gör det, från det enklaste och uppåt.

**Inget här har körts på en maskin.** Banorna kontrolleras mot geometrin av testerna och G-koden läses tillbaka, men de inbyggda postprocessorerna följer styrningarnas dokumenterade koder, inte någon maskin framför oss. Bevisa ett program i din styrnings egen simulator och i luften innan det möter metall.

## Maskinens roterande axlar

På fliken **Uppställning** anger {{ui:Rotary axes}} vad maskinen har:

| Val | Maskinen |
|---|---|
| Ingen (3 axlar) | En vanlig fräs. Varje operation som kräver ett lutat verktyg varnar, och postprocessorn vägrar skriva den. |
| A (vrider kring X) | En roterande axel längs X: ett 4:e-axelbord eller en indexerare. Verktyget kan luta endast i Y–Z-planet. |
| B (vrider kring Y) | En roterande axel längs Y. Verktyget kan luta endast i X–Z-planet. |
| A och C | En lutningsaxel kring X buren av, eller bärande, en vridning kring Z: ett trunnionbord, eller ett huvud. |
| B och C | Samma med lutningen kring Y. |

Sedan:

- **Buren av**: {{ui:The table (the part turns)}} eller {{ui:The head (the tool turns)}}. Ett bord vrids åt motsatt håll för att få samma yta under verktyget, så tecknet på varje vinkel följer av detta.
- **Styrningen håller verktygsspetsen på banan (TCP)**: när den är på är X Y Z i programmet verktygsspetsen i delens egna koordinater och styrningen gör resten (de inbyggda Fanuc-liknande och LinuxCNC-postprocessorerna skriver `G43.4` för verktygslängden). När den är av skriver PartCraft, på en bordsmaskin, X Y Z som det vridna bordet bär delen, kring den **roterande centrumpunkten** du anger (i arbetskoordinater; 0, 0, 0 när arbetsnollpunkten är på centrum). En huvudmaskin behöver TCP på: utan det skulle programmet behöva maskinens vridpunktslängd, som PartCraft inte känner till.
- **Lutningsgräns**: hur långt lutningsaxeln går.

Maskiner skiljer sig åt i vilket håll som räknas som positivt. Om en axel vrids åt fel håll på din, ändra tecknet i en kopia av postprocessorn ([Redigerbara postprocessorer](topic:post-processors)).

## Ett lutat verktyg för en vanlig operation

Varje fräsoperation (yta, ficka, adaptiv, kontur, borrning, fas, parallell, kammusslor, 3D-grov, rest) har **Verktygslutning** och **Luta mot**: verktygets riktning för just den operationen, mätt från inställningens verktygsaxel. Det här är 3+2-bearbetning: de roterande axlarna går till ett läge och står kvar där medan tre axlar skär.

- Skriv de två vinklarna, eller tryck {{ui:Tool square to a face}} och klicka på en plan yta: verktyget pekar då rakt mot den.
- Välj operationens ytor och kanter som vanligt. Vad som räknas som golv eller hål bedöms längs det lutade verktyget.
- Råmaterialet för den riktningen är lådan som håller det svarvade råmaterialet, så att höjder och frigångar är säkra från den sidan.

I G-koden, före operationen, går verktyget upp, de roterande axlarna vrids och verktyget sänks ner över sin första punkt. På en bordsmaskin utan TCP förblir bågar bågar och fasta borrcykler förblir cykler (den skrivna ramen vrids bara kring Z). Med TCP i ett lutat plan blir bågar korta linjer och cykler de rörelser de står för.

Materialsimuleringen kör en lutad riktning **för sig själv**: den visar vad operationen skär från hela råmaterialet sett från sin sida, och hittar överskärningar där, men skärningar gjorda från andra riktningar förs inte över.

## 5-axlig finbearbetning

{{ui:More}} i verktygsfältet i Tillverkning listar den här operationen och nästa överst på fliken **Operationer**.

{{ui:5-axis}} är den [parallella finbearbetningsgången](topic:finish-3d) med en **kulfräs som lutar när den går**. En kula skär med en sfär, och sfären är densamma oavsett hur verktyget lutar kring sin mittpunkt, så kulan följer exakt den väg som trebaxelgången ger och bara verktygets riktning ändras:

- **Mot ytan**: 1 = vinkelrätt mot ytan, 0 = upprätt, något däremellan.
- **Luta framåt**: grader längs skärriktningen, så att kulans stillastående centrum inte är det som skär.
- **Störst lutning**: verktyget lutar aldrig längre än så från inställningens axel.

Där skaftet skulle röra modellen backas lutningen tills det klarar, och operationen anger på hur många punkter. Varje gång går in och ut med en rak lyftning.

## Roterande finbearbetning (4:e axeln)

{{ui:Rotary}} är för en del som hålls längs arbetskoordinaten X på en roterande axel. Delen vrids och en kulfräs, alltid riktad mot axeln, följer dess yta:

- **Gångar**: {{ui:Along the axis}} (linjer längs X, ett stegavstånd av vridning isär) eller {{ui:Round the part}} (ringar, ett stegavstånd av X isär).
- **Axel vid Y / Z**: var axeln ligger. Tomt betyder mitten av råmaterialet. På en bordsmaskin utan TCP måste detta vara den roterande centrumpunkten i Uppställningen; operationen varnar när den inte är det.
- **Från / Till X** och **Från / Till vinkel**: den del av längden och av vridningen som ska skäras.

Kulans höjd ovanför axeln i varje punkt är den exakta sänkningen av en sfär på delens nät, sett från den sidan.

## Begränsningar

- 5-axlig och roterande finbearbetning tar bara en **kulfräs**. Det finns ingen swarf-skärning (verktygets sida på en rak vägg), inga flödeslinjer längs en ytas egna riktningar, ingen flera-axlig grovning och inget automatiskt val av lutning för att undvika kollision.
- 5-axliga och roterande banor **körs inte genom materialsimuleringen**, som är en höjdkarta och inte kan hålla en lutande skärning.
- Skaftet kontrolleras i 5-axlig finbearbetning mot modellen sedd uppifrån; hållaren, spindeln och själva maskinen kontrolleras inte någonstans.
- Roterande finbearbetning skär bara det verktyget kan se när det tittar mot axeln.
- 5-axlig finbearbetning tar en minut eller mer att räkna ut på en stor del: skaftet kontrolleras i varje punkt på varje gång.
- När de roterande axlarna rör sig tillsammans med de linjära och TCP är av, skriver de inbyggda postprocessorerna matningen som inverstid (`G93`) och går sedan tillbaka till `G94`.
- Ingen kod för ett lutat arbetsplan (`G68.2` och liknande) skrivs, och inga maskinspecifika gränser, avlindning eller kollisionszoner är kända.
