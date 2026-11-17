---
title: Kontrollera spänning och nedböjning (Simulering)
summary: Välj ett material, fixera ytor, lägg till krafter, tryck eller delens egen vikt, lös, och läs von Mises-spänning, förskjutning, säkerhetsfaktor, reaktioner och egenfrekvenser på modellen, med vad metoden kan och inte kan säga dig.
keywords: simulering, FEA, livanalys, uppdatera medan du redigerar, bryt den, vad går sönder först, lastfaktor, icke-linjär, plasticitet, flytning, plastisk töjning, bilinjär, kontakt, kontaktpar, straff, bunden, friktionsfri kontakt, CalculiX, .inp, .frd, finita element, spänning, töjning, von Mises, förskjutning, nedböjning, säkerhetsfaktor, flytgräns, reaktion, last, kraft, tryck, gravitation, egen vikt, fast, friktionsfri, upplag, villkor, material, stål, aluminium, titan, ABS, PLA, nylon, egenfrekvens, modal, vibration, nät, elementstorlek, tetraeder, voxel, nätkvalitet, huvudspänning, ekvivalent töjning, felskattning, krökta ytor, hål, rundningar, adaptiv, adaptiv förfining, automatisk förfining, konvergens, nätkonvergens, exakt yta, sfär, kon, torus, spline, fri form
from: 6f2fdec1
---

Simuleringsarbetsytan besvarar frågan "böjer den sig eller går den sönder under den här lasten?" för delen du modellerar. Det är en **linjär statisk** studie (små deformationer, materialet förblir elastiskt) eller en **egenfrekvensstudie**, löst på ett nät av kvadratiska tetraedrar som följer delens ytor (eller, om du väljer det, av små lika kuber). Den fungerar på de namngivna ytor som nätkärnan ger delen (se [Nätkärnan](topic:solid-kernels)).

Välj **Simulering** i rutan **Arbetsyta** till vänster i verktygsfältet. Din del ändras inte; studien sparas i delfilen och varje ändring i den kan ångras.

## Ställ in en studie

1. Tryck på **Ny studie** i högerpanelen.
2. Välj **Material**. Panelen visar dess styvhet (E), Poissons tal, densitet och flytgräns. Värdena är typiska handboksvärden; din leverantörs certifierade värden kan skilja sig.
3. Välj **Nät**:
   - **Tetraedriskt (noggrant)**, standard: 10-nodiga tetraedrar vars yttre ytor ligger på delens ytor, med krökta kanter på hål, rundningar och andra runda ytor. Noderna på plana, cylindriska, koniska, sfäriska och toroidala ytor, på rotations- och extruderade ytor samt på fria (B-spline-)ytor ligger på den exakta ytan; alla andra typer av yta följer sitt visningsnät, och resultattabellen säger hur många ytor som gjorde det. Nätet förfinas av sig självt nära krökta ytor, tunna väggar och skarpa kanter.
   - **Voxelkuber (snabbt)**: delen fylld med lika kuber. Snabbt, men krökta ytor blir steg. Studier sparade innan det tetraedriska nätet fanns behåller detta.
4. Lämna **Elementstorlek** tom för en automatisk storlek (ungefär 12 000 tetraedrar, eller 20 000 kuber), eller skriv in en i millimeter. Panelen visar ungefär hur många element det ger innan de finare ställena läggs till. Med tetraedrar förfinar **Mindre element på krökta ytor** (på som standard) hål och rundningar, där spänningen oftast är som högst.

### Förfina automatiskt

Med tetraedrar, en statisk eller knäckningsstudie (utan termisk last), en egenfrekvensstudie och en stationär termisk studie erbjuds **Förfina automatiskt (adaptivt)**. Markera den och ange:

- **Målfel (%)**: lösningen stannar när det uppskattade felet är under det (1 % till att börja med).
- **Flest pass**: det högsta antalet lösningar den får köra (5 till att börja med, högst 10).

Varje pass löser, hittar elementen med största uppskattade fel, delar dem (och så få grannar som behövs för att hålla nätet helt) och löser igen. Nya noder på krökta ytor placeras på den exakta ytan. Resultaten visar sedan en tabell och ett diagram med, för varje pass, elementen, de obekanta, det uppskattade felet och toppspänningen (eller temperaturen) och förskjutningen (eller värmeflödet), samt en rad som säger varför det stannade: målet nåddes, passen tog slut, nästa nät skulle bli för stort, eller ett pass misslyckades (då ser du det senaste godkända passet).

Läs uppskattningen som just en uppskattning. Den (Zienkiewicz–Zhu, som jämfört med exakta svar ligger på cirka 0.6 till 0.95 av det verkliga felet) mäter felet över **hela delen**, så en toppspänning vid ett hål eller en rundning är oftast fortfarande lite fel när uppskattningen ser liten ut: för en spänningskoncentration, sätt målet under 1 % och se toppen stabiliseras från pass till pass. Vid ett skarpt inre hörn eller kanten på en fast yta är den verkliga spänningen oändlig, så uppskattningen når aldrig dit: passen tar slut i stället.

**Egenfrekvenser och knäckning.** För en egenfrekvensstudie täcker uppskattningen varje mod du bad om, var och en räknad lika; tabellen och diagrammet följer de två första frekvenserna. På en del med bara plana ytor kan en frekvens bara gå ner från pass till pass (varje nät håller det föregående); krökta ytor kommer också närmare sin verkliga form, vilket kan flytta en frekvens lite åt något håll. För knäckning täcker uppskattningen förspänningen och knäckningsmoderna, och tabellen följer lastfaktorerna. Kontrollerat på en 100 × 10 × 10 mm stålstång: den första frekvensen stabiliseras från 812.4 till 811.9 Hz över fyra pass, 0.4 % under Euler–Bernoulli (som bortser från skjuvning), och pelarens lastfaktor inom 0.5 % av Euler.

## Håll och belasta den

Varje studie behöver minst ett stöd och, för spänning, en last.

1. Tryck på {{ui:Fast}} i verktygsfältet. Det nya stödet markeras och väntar på ytor: klicka på de ytor som hålls stilla (klicka på en yta igen för att släppa den). Tryck på **Klar med val** eller {{key:Esc}} när du är klar. Blå koner markerar de hållna ytorna.
2. Tryck på {{ui:Kraft}} och klicka på de ytor som kraften verkar på. I panelen skriver du in den **Totala kraften** i newton och väljer dess **Riktning**: in i ytan, eller längs en axel. Kraften delas över de valda ytorna efter area. Orangea pilar visar den.
3. Tryck på {{ui:Tryck}} för ett tryck i MPa (N/mm²) som pressar in i de valda ytorna; ett negativt tryck drar.

Fler typer finns i panelens lista **Lägg till**: en **Friktionsfri yta** (ytan får glida längs sig själv men inte röra sig bort från den; använd den för symmetriplan och släta stöd) och **Gravitation** (delens egen vikt, 9.81 m/s², i den riktning du väljer).

Ett stöd som lämnar delen fri att glida eller snurra avvisas, med en förklaring av vilken rörelse som är kvar fri.

## Lös och läs resultaten

Tryck på {{ui:Lös}}. Arbetet körs i bakgrunden; **Stopp** avbryter det. Sedan:

- Delen färgas efter **von Mises-spänning**; välj **Förskjutning** eller **Säkerhetsfaktor** under **Visa**. Förklaringen anger skalan.
- Peka på delen för att läsa värdena under pekaren.
- Markera **Deformerad form** för att se delen böjd (rörelsen förstoras av **Skalan**; den verkliga finns i tabellen).
- Tabellen listar den största spänningen och var den finns, den största förskjutningen, den minsta **säkerhetsfaktorn** (flytgräns ÷ von Mises-spänning; under 1 flyter materialet), den påförda lasten och **reaktionerna** i stöden (de balanserar lasten), och det använda nätet.

För **egenfrekvenser**, välj den **Typen**, ange hur många **Moder** du vill ha, och lös. Varje mod visar sin frekvens och form (formerna skalas till 1 vid sin största rörelse).

Ändrar du delen markeras resultaten som inaktuella: lös igen.

## Flytning och kontakt (icke-linjära studier)

Två studietyper till går bortom "materialet förblir elastiskt":

- **Icke-linjär (materialet flyter)** följer materialets räta linje upp till dess flytgräns, och sedan en flackare lutning (**Lutning efter flytning**, 1 % av E när fältet lämnas tomt). Lasten fortsätter i **Laststeg**; ett steg som inte stabiliseras halveras av sig självt. Resultaten lägger till **Plastisk töjning** i graferna och anger hur mycket av lasten som bars. Om ett steg ändå inte kan stabiliseras stannar studien vid det senaste godkända steget, och ⚠-panelen Problem säger var: delen har där tagit slut på hållfasthet (ett brott), eller stegen är för stora.
- **Kontakt mellan delar** låter åtskilda delar av delen trycka på varandra. Lägg till ett **Kontaktpar**, välj ytorna på sida A (de ytor som trycker) med {{ui:Välj ytor}}, och sedan sida B med {{ui:Välj ytor på sida B}}. **Friktionsfria** delar trycker, glider och skiljs åt; **bundna** delar sitter fast. Varje del nätas för sig, så ett litet gap mellan dem är lugnt. Kontakten är en straffmetod: delarna sjunker lite in i varandra (**straffaktorn** × E ÷ elementstorlek anger hur styv kontakten är). Tabellen visar det djupaste inträngandet, och panelen Problem varnar när det är mer än 1 % av elementstorleken: höj faktorn eller använd mindre element.

Båda använder det tetraedriska nätet. Friktion, stor glidning och stora rotationer löses inte här.

## Kör i CalculiX

**Exportera › CalculiX-underlag (.inp)** (eller {{ui:Spara ett CalculiX-underlag (.inp)}} i panelen) sparar studien som ett indataunderlag för CalculiX, ett separat program som du installerar och kör själv: samma nät, material, stöd, laster och kontaktpar, i mm, N och MPa. Kör det, och **Exportera › CalculiX-resultat (.frd)** läser dess resultatfil tillbaka på samma nät och visar förskjutningen (och von Mises-spänningen när filen har spänningar). Om du ändrat delen eller elementstorleken emellanåt är nätet inte detsamma, och PartCraft säger det: spara ett nytt underlag.

## Hur långt man kan lita på den

PartCraft kontrollerar sin lösare mot handformler (en konsols spetsnedböjning PL³/3EI inom 1 %, en stångs töjning PL/AE exakt, en konsols första frekvens inom 3 %, spänningen runt ett hål i en platta). Ha ändå dessa gränser i åtanke:

- **Nätet.** Med tetraedrar kontrollerar PartCraft en konsols nedböjning och böjspänning (inom 0.3 %), spänningen vid ett hål i en platta (Kt, inom cirka 1 %), ett tjockt rör under tryck (Lamé, inom 0.3 %) och den första frekvensen (inom 0.4 %). Tabellen visar **nätkvaliteten** (de minsta och största vinklarna mellan elementens ytor; under cirka 10° är ett element dåligt) och ett **uppskattat spänningsfel**: om det är mer än några procent, lös igen med en mindre elementstorlek, eller låt **Förfina automatiskt** göra det. På en platta med hål och en stång med två kantskåror gav automatisk förfining inom 1 % av den läroboksenliga Kt med cirka en sjättedel av de obekanta som det krävde att göra hela nätet finare. Med voxelkuber är ett hål eller en rundning en trappa i kubens storlek, så spänningen där är grov.
- **Skarpa inre hörn och kanterna på fasta ytor har ingen verklig toppspänning.** Värdet där fortsätter att växa när elementen blir mindre. Läs spänningar en bit bort från sådana ställen, eller runda hörnet i modellen.
- **Resultat att läsa.** Utöver von Mises-spänning, förskjutning och säkerhetsfaktor visar en tetraedrisk studie den **största och minsta huvudspänningen** (drag och tryck) och den **ekvivalenta töjningen**. Markera **Visa nät** för att se elementen.
- **Statiska studier är linjära och elastiska.** För flytning och kontakt, använd de icke-linjära studietyperna ovan; stora deformationer och utmattning löses inte. Värme, termisk spänning och linjär knäckning är egna studietyper: se [Värme, termisk spänning och knäckning](topic:thermal-and-buckling).
- **Varje material är lika i alla riktningar.** 3D-utskrivna plaster är svagare tvärs över sina lager, ofta med en tredjedel eller mer.
- Detta är en labbversion: kontrollera delar som spelar roll på ett annat sätt.

## Uppdatera medan du redigerar (Live)

Markera **Uppdatera medan jag redigerar** i blocket Lös, så följer simuleringssvaren dina ändringar. Ändrar du ett mått, en last, materialet eller miljön visas ett **snabbt svar** direkt, gjort med element fyra gånger större än studiens; när du stannar en stund (en sekund ungefär) ersätter studiens egna **förfinade svar** det. Resultaten säger vilket du tittar på ("Snabbt svar" eller "Förfinat svar") och elementstorleken. Det snabba svaret duger för riktning och storlek: på en stålkonsol låg det inom 1 % på nedböjning och cirka 4 % på spänning jämfört med det förfinade. Lita på det förfinade för siffror du tänker använda. Statiska, egenfrekvens-, termiska och knäckningsstudier fungerar så; Live är en visningsinställning och sparas inte i delen. En lösning du startar själv står kvar tills nästa ändring.

## Ta reda på vad som går sönder först (Bryt den)

För en statisk studie eller en knäckningsstudie, tryck på **Vad går sönder först?** i blocket **Bryt den**. PartCraft skalar studiens laster (krafter, tryck och vikt tillsammans) tills delen ger vika, och listar, värst först, **lastfaktorn till första flytning** (faktorn på dagens laster vid vilken den högsta von Mises-spänningen når materialets flytgräns, med en röd markering där det sker) och **lastfaktorn till knäckning** för samma stöd och laster. En faktor på 4.3 betyder att delen tar 4.3 gånger sin last innan den flyter. **En faktor under 1 betyder att den redan ger vika under lasten**, och det visas i listan Problem som ett fel (det svagaste fyndet visas som en anteckning även när allt håller). Faktorerna kommer från en linjär studie på tetraedrar vid din elementstorlek, så de är lika bra som den studien är: spänningen vid en fast yta eller ett skarpt hörn har ingen verklig topp (se ovan), och flytfaktorn blir där åt det försiktiga hållet. Din assistent kan köra samma kontroll med verktyget `break_run`.

## Relaterat

- [Värme, termisk spänning och knäckning](topic:thermal-and-buckling)
- [Ta fram en form från laster (Generativ)](topic:generative-design)
- [Mät avstånd, vinklar och massa](topic:measure)
- [Vad som inte finns ännu](topic:not-built-yet)
