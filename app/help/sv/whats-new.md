---
title: Vad är nytt i 0.8 och 0.8.1
summary: PartCraft 0.8 lägger till live-analys medan du redigerar, en kontroll av vad som går sönder först, studier av flytning och kontakt med underlagsfiler för en extern lösare, rörelsestudier för sammanställningar, en arbetsyta Ytor för friformsytor, delar dimensionerade utifrån fysik i arbetsytan Engineer, skiss från foto, exporter för utskrift, nästade blad till G-kod och ritningar som måttsätter sina hål. 0.8.1 åtgärdar en frysning av markören i helskärm.
keywords: vad är nytt, what's new, versionsinformation, release notes, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, live-analys, uppdatera medan du redigerar, gå sönder, vad går sönder först, lastfaktor, icke-linjär, flytning, plastisk töjning, kontakt, calculix, rörelsestudie, glapp, ytor, nurbs, jämna ut, skrov, zebra, engineer, generator, genererad kropp, skiss från ett foto, skala för utskrift, dela för utskrift, krympning, nästade blad, g-kod, ritning, måttsätt hål, assistent, mcp, språk, verktygsfältsrader
from: 62e4dce2
---

Detta är vad som ändrats i PartCraft 0.8 och 0.8.1, jämfört med 0.7. Simuleringen svarar medan du redigerar och talar om vad som går sönder först, sammanställningar får rörelsestudier, och nya arbetsytor gör friformsytor och delar dimensionerade utifrån fysik. 0.8.1 är en liten felrättningsutgåva.

## Nytt

### Simulering

- **Uppdatera medan jag redigerar.** Markera {{ui:Uppdatera medan jag redigerar}} i lösblocket så följer svaren dina ändringar. Ändrar du ett mått, en last eller materialet visas direkt ett snabbt svar, beräknat med element som är fyra gånger större; när du slutar en stund, cirka en sekund, ersätts det av studiens egna förfinade svar. Resultaten anger vilket av dem du tittar på. På en stålkonsol låg det snabba svaret inom 1 % för nedböjning och cirka 4 % för spänning jämfört med det förfinade. Se [Kontrollera spänning och nedböjning](topic:simulation#update-while-you-edit-live).
- **Vad går sönder först.** För en statisk studie eller knäckningsstudie skalar {{ui:Vad går sönder först?}} i blocket **Bryt den** lasterna tills delen ger vika. Den listar, värsta först, lastfaktorn till första flytning (med en röd markör där spänningen är störst) och lastfaktorn till knäckning. En faktor under 1 betyder att delen redan ger vika med given last, och Problem-panelen visar ett fel. Faktorerna kommer från en linjär studie, så de är lika bra som den. Se [Kontrollera spänning och nedböjning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flytning och kontakt.** Två studietyper till: en icke-linjär där materialet följer sin räta linje upp till flytgränsen och sedan en flackare lutning, med plastisk töjning plottad, och en kontaktstudie där separata delar pressar mot varandra (friktionsfritt) eller sitter fast (bundna). Ett laststeg som inte kan stabiliseras, eller delar som sjunker för djupt in i varandra, visas i Problempanelen. Friktion, stort glid, stora rotationer, stora utböjningar och utmattning löses inte. Se [Kontrollera spänning och nedböjning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Underlag för CalculiX.** {{ui:Exportera}} › {{ui:CalculiX-underlag (.inp)}} sparar studien för CalculiX, ett separat program som du installerar och kör själv; {{ui:Exportera}} › {{ui:CalculiX-resultat (.frd)}} läser tillbaka dess resultatfil till samma nät. PartCraft startar aldrig det programmet, och det säger till om delen ändrats sedan underlaget sparades.

### Sammanställningar

- **Rörelsestudier.** {{ui:Sammanställning}} › {{ui:Rörelse}} driver en leds värde över en tid du anger (konstant hastighet, mjukad, sinus eller ut och tillbaka), placerar sammanställningen vid varje steg med dess leder och slutna slingor, och rapporterar vad som kolliderar och hur nära delar kommer varandra. {{ui:Lägg till en punkt}} plottar en punkts position, hastighet och acceleration, ledens värde och glappet mot tiden; {{ui:Spara CSV}} och {{ui:Spara diagram}} skriver ut dem. Efter {{ui:Kör}} flyttar stegreglaget i körfältet sammanställningen till valfritt steg. Studiens inställningar sparas i sammanställningsfilen. Hastighet och acceleration beräknas från de inspelade positionerna, så använd fler steg om en skarp topp blir för låg. Se [Kontrollera en sammanställning för kollisioner och rörelse](topic:check-assembly#a-motion-study).

### Ytor och delar utifrån fysik

- **En arbetsyta för ytor.** Välj {{ui:Ytor}} i rutan {{ui:Arbetsyta}} för NURBS-kurvor och -ytor bredvid delen: {{ui:Kurva}}, {{ui:Loft}}, {{ui:Svep}}, {{ui:Anpassa}} och {{ui:Zebra}}, med kontinuitet (G0, G1 eller G2) mätt på de exakta ytorna och en kant som är sämre än du bett om listad i Problem med en Anpassa-åtgärd. {{ui:Jämna ut}} mäter skrovlinjer för inflexioner och krökningshopp och bygger om de ojämna inom din tolerans. Ytor sparas i delfilen och ändrar inte delens funktioner. Se [Friformsytor (NURBS)](topic:nurbs-surfaces).
- **Arbetsytan Engineer.** Välj {{ui:Engineer}} i arbetsytsväljaren, välj en generator och klicka på {{ui:Ny}}: ett skript dimensionerar en del utifrån vad den måste göra (värme som ska flyttas, flöden, tryck, material, utskriftsprocess) med läroboksformler och bygger den, och ger sedan tillbaka siffrorna som använts med deras källor, dess tillverkningskontroller och filer för analysverktyg. Samma indata ger samma del på vilken dator som helst. Generatorn sparas i delen, och att öppna en del kör aldrig ett skript. Se [Delar utifrån fysik: generatorer](topic:engineer-generators) och [Skriv en generator](topic:write-a-generator).

### Skisser, ritningar och tillverkning

- **En skiss från ett foto.** {{ui:Funktioner}} › {{ui:Mer}} › {{ui:Skiss från ett foto…}} spårar en bild av en plan del på en enkel bakgrund (kontur och hål) eller en pennteckning till linjer, bågar och cirklar. Du anger en längd, kontrollerar förhandsvisningen och skapar skissen. Se [Grunder för skissning](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala och dela för utskrift.** {{ui:Exportera}} › {{ui:Skala för utskrift (STL eller 3MF)…}} skalar per axel utan att ändra delen, till exempel med en krympmån. {{ui:Exportera}} › {{ui:Dela för utskrift (en zip med delar)…}} klipper en del som är för stor för din bädd i numrerade delar som sammanfogas med pinnar, kilar, svalstjärtar, dymlingshål eller magnetfickor. Se [Skriv ut i 3D](topic:print-3d).
- **Nästade blad till G-kod.** {{ui:Exportera}} › {{ui:Nästade blad till G-kod}} läser en nästad DXF-fil och skapar ett program per blad genom den postprocessor du väljer: hål och urtag först, sedan konturerna. Den planerar inte in-kör, skärordningen eller gemensamma kanter. Se [Nästa plana delar på blad](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Ritningar som gör mer själva.** {{ui:Blad}} › {{ui:Automatiskt}} väljer det minsta A-formatbladet som rymmer vyerna i den största standardskalan upp till 1:1. {{ui:Måttsätt hålen}} sätter en centrummarkering på varje hål, en hänvisning per storlek och positionerna från vyns nedre vänstra hörn. Se [Gör en ritning](topic:drawing-pdf).

### I alla appar

- **Språk.** Apparna finns på 54 språk. De som är andra än engelska är maskinella utkast tills en modersmålstalare har läst dem.
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} väljer Bryt (som förut), 2 rader eller 1 rad; ett fält som inte får plats rullar åt sidan. PartCrafts funktionsmeny visar det mest använda verktyget stort och gömmer varianter bakom en delad knapp.
- **Anslut din AI.** Studio är navet för att koppla en egen assistent till alla åtta apparna, med behörighet för läsning, förslag eller redigering per app. En ansluten assistent kan dimensionera en del utifrån en mening, till exempel ett fäste för en last, visa sitt arbete och alla kontroller, och bygga den; den rapporterar vad den inte kontrollerat (spänningskoncentration, utmattning, krypning i plaster). Se [Använd PartCraft med en AI-assistent](topic:use-with-ai-assistants).

## Rättat i 0.8.1

- **Frysning av markören i helskärm.** Markeringen vid hovring är nu begränsad. Orsaken är vår bästa tolkning och bekräftades inte med personen som rapporterade den.
- **Språk vid körning.** Studio och de paketerade utgåvorna kan byta språk under körning; tidigare var de bara på engelska. Detta är ännu inte testat på alla plattformar: säg till om språket inte ändras.

## Inte i den här versionen ännu

- Anslut din AI är inte färdig: anslutning med ett klick i Studio, den hostade kopplingen för webbläsar-AI, egen API-nyckel i Studio och det publicerade MCP-paketet utlovas inte. Studio har ingen egen AI.
- Studio är inte kodsignerad: Windows kan varna, och macOS ber dig högerklicka och sedan välja Öppna. Se [Felsökning](topic:troubleshooting).
- Toleranskedjor är fortfarande enkelriktade: se [Toleranskedjor](topic:tolerance-stackup).
- Resten finns i [Vad som inte finns ännu](topic:not-built-yet).

Tidigare ändringar finns i [Vad är nytt i 0.7](topic:whats-new-0-7).
