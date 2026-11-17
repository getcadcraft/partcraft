---
title: Nyheter i 0.9
summary: PartCraft 0.9 lägger till rundningar mellan ytor och förtjockning till solider, sammanställningar med tusentals delar, ett Dokumentvalv med revisioner, ett tillägg för Solid FEM-spänningskontroll, tio bågmetoder, brittiska stålprofiler, ett utskriftssteg och tillägg för hartsutskrift.
keywords: nyheter, vad är nytt, versionsinformation, ändringslogg, 0.9, rundning mellan ytor, rullande kula, runda av flera kanter, förtjockna, solid från ytor, STEP-skal, IGES-solid, skanningsrundningar, stor sammanställning, lättviktsvisning, 20000 delar, dokument, valv, checka ut, revision, version, var används, Rhino-länk, Grasshopper, 3dm, markörer, fabriksgolv, jobbkö, solid FEM, finita element, von Mises, egenfrekvens, bågmetoder, 3-punktsbåge, brittiska stålprofiler, blå bok, utskriftssteg, harts, goo, ctb, bädd, lägg ut, nyheter, ändringslogg, ändringar, 0.8, 0.8.1, version, nya funktioner, live-analys, uppdatera medan jag redigerar, gå sönder, lastfaktor, olinjär, flytgräns, plastisk töjning, kontakt, calculix, rörelsestudie, glapp, ytor, nurbs, jämna ut, skrov, zebra, ingenjör, generator, genererad kropp, skiss från ett foto, skala för utskrift, dela för utskrift, krympning, nästade blad, g-kod, ritning, måttsätt hålen, assistent, mcp, språk, verktygsfältsrader
from: 96d9fbfa
---

Det här är vad som ändrats i PartCraft 0.9, jämfört med 0.8.1. Friformsytor sluts nu till solider, sammanställningar med tusentals delar förblir användbara, ett Dokumentvalv behåller revisioner och ett tillägg för Solid FEM kontrollerar spänningar i en del. Varje punkt anger var du hittar den.

## Nytt i 0.9.1

- **Exakt STEP-export.** {{ui:Export}} › {{ui:STEP AP242 (exakt solid)}} och {{ui:STEP AP214 (exakt solid)}} fungerar nu. Hål, upphöjningar, rundningar, koner, sfärer och toroider skrivs på sina verkliga ytor, med verkliga cirklar som kanter, så att ett annat CAD- eller CAM-program kan känna igen ett hål som ett hål. Splinesidor, modellerade gängor och importerade nät förblir platta facetter i samma solid. Se [Exportera för utskrift, STEP och DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in, exakt STEP ut.** En STEP-fil du öppnar behåller sina egna plana ytor, cylindrar, koner, sfärer och toroider, så att {{ui:Export}} › {{ui:STEP AP242 (exakt solid)}} skriver tillbaka dem som verkliga ytor i stället för facetter. En leverantörs balk med bulthål går ut med samma ytor som den kom in med, plus det du skurit i den. Spline-, svepta och revolverade ytor i filen förblir facetter, liksom kroppar från STL, OBJ och 3MF. Öppna STEP-filen igen för en del som sparats tidigare. Se [Öppna en STEP-fil och bygg vidare på den](topic:import-step).
- **Verkliga cirklar i ytans DXF.** {{ui:Export}} › {{ui:DXF av skissen eller den plana ytan}} med en plan yta vald skriver nu runda hål som cirklar, med hålets egen mittpunkt och radie, för ett laser-, plasma- eller vattenskärbord. Andra runda kanter är fortfarande facetter.
- **Exakt STEP för verkstaden.** I {{ui:Tillverkning}} skriver {{ui:Exakt STEP (arbetskoordinater)}} delen med origo i inställningens arbetsorigo och Z längs verktygsaxeln, de koordinater som G-koden använder. Se [Gör verktygsbanor och G-kod](topic:manufacture#exact-step-for-the-shop).

## Nytt

### Ytor och solider

- **Rundning mellan ytor.** Välj {{ui:Ytor}} i rutan {{ui:Arbetsyta}} och sedan {{ui:Rundning mellan ytor}}. Markera de två ytorna i en solid och skriv radien (och {{ui:Radie i änden (mm, 0 = samma)}} för en radie som ändras längs kanten). Resultatraden anger hur långt rundningen är från den ideala rullande kulan, och en radie som inte passar avvisas med ytan namngiven. {{ui:Runda av flera kanter}} rundar många kanter i ett steg; bocka i {{ui:Hörn (sfärisk yta där tre möts)}} för ett sfäriskt hörn där tre rundade kanter av plana ytor möts. Se [Friformsytor (NURBS)](topic:nurbs-surfaces).
- **Förtjockna till solid.** {{ui:Förtjockna till solid}} i samma arbetsyta ger en yta en tjocklek; {{ui:Andra sidan}} växer den åt andra hållet. En veck eller ett självkorsande avvisas med ytan och platsen namngiven.
- **Solider från ytor.** Beskurna ytor kan sammanfogas med förening, subtrahera och skärning och bakas in i delen som ett enda ångringssteg. STEP skriver en solid som ett slutet skal och IGES som en solid; båda läses tillbaka som en solid. Om ytorna inte parar ihop kant för kant får filen separata ytor och statusraden säger det. Solider kan även skapas i nodredigeraren; se [Nodredigeraren](topic:nodes).
- **Rund- och variabla rundningar i skanningar.** När du anpassar ytor till en skanning letas även kantrundningar (toroider) och rundningar med variabel radie längs en någorlunda rak kant, och de listas med sin radie. Det är testat endast på påhittade skanningar.

### Sammanställningar, dokument och länkar

- **Stora sammanställningar.** Delar som är kopior delar ett nät, och {{ui:Vyer}} › {{ui:Lättviktsvisning}} ritar lådor så att vyn fortsätter att röra sig (den slås på av sig själv för mycket stora sammanställningar; markering och leder använder fortfarande de riktiga delarna). Delträdet visar sina första rader och en knapp {{ui:Visa 700 till}} för resten. Sammanställningsfiler kan innehålla upp till 50 000 instanser och 100 000 leder. Se [Bygg en sammanställning](topic:build-assembly).
- **Dokument.** {{ui:Dokument…}} i gruppen **Fil** öppnar en dialogruta över en projektmapp: checka ut och checka in, revisionsbokstäver, tillstånd (pågående arbete, för granskning, släppt, föråldrad), historik, var används och stycklista. Se [Dokument och revisioner (valvet)](topic:documents-walkthrough).
- **Live-länk till Rhino.** Ett skript, `cadcraft_link.py`, övervakar ett Rhino- eller Grasshopper-dokument och skickar bara det som ändrats till PartCraft, där en importerad funktion byggs om efter den nya formen. Den är enkelriktad och kräver Studio. Se [Live-länk för .3dm](topic:live-3dm-link).
- **Se varandras markörer.** I en delad session visas varje persons markör med namn och den funktion de har markerat. Se [Arbeta live med andra](topic:work-live).
- **Fabriksgolv.** Slå på tillägget {{ui:Fabriksgolv}} i {{ui:Inställningar}} › {{ui:Tillägg}}. När du lagt upp ett program i {{ui:Tillverkning}} kan dess flik {{ui:Lägg till i fabrikens jobbkö}} eller {{ui:Spara som jobbfil}}. Den skickar eller startar aldrig en maskin.

### Analys och delar

- **Tillägget Solid FEM.** Slå på {{ui:Solid FEM}} i {{ui:Inställningar}} › {{ui:Tillägg}} (det är av tills du gör det) så visas en flik {{ui:Solid FEM}} i högerpanelen. {{ui:Skapa nät för delen}}, markera fasta ytor och laster i 3D-vyn, {{ui:Lös}} och rita förskjutning, von Mises-spänning eller en egenform med {{ui:Visa på modellen}}. Se [Solid FEM: en spänningskontroll](topic:solid-fem-check).
- **Båge i skisser, tio sätt.** Pilen bredvid {{ui:Båge}} i skissverktygsfältet listar 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length och Continue. Se [Rita en båge på tio sätt](topic:sketch-arc-methods).
- **Brittiska stålprofiler.** Svetsade konstruktioner kan använda 976 brittiska profiler (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); skriv en dimension som `305x165x40 UB`. Se [Konstruktionsprofiler](topic:structural-members).

### Utskrift

- **Utskriftssteg.** Knappen {{ui:Utskriftssteg}} i verktygsfältet (tillägget 3D-utskrift, på som standard) lägger din dels kroppar på en streckad bädd: {{ui:Lägg ut}}, {{ui:Vrid 90°}}, {{ui:Ordna på bädden}}, {{ui:Passa in alla på bädden}}, {{ui:Förhandsgranska lager}} och sedan {{ui:Skicka till 3D-skrivare}} via USB, Klipper (Moonraker), OctoPrint eller PrusaLink. Inget skickas förrän du bekräftar, och din del ändras aldrig. För en STL- eller 3MF-fil i stället, se [Förbered en del för 3D-utskrift](topic:print-3d).
- **Hartsutskrift.** Tillägg i {{ui:Inställningar}} › {{ui:Tillägg}}, alla av tills du slår på dem: en hartsslicer, ett exponeringstest och filformaten Elegoo GOO, SL1, Chitubox CBDDLP/CTB och Anycubic. Slicing körs i en arbetartråd, så sidan förblir svarsduglig.

## I alla appar

- Varje hovertips är en Bootstrap-tooltip.
- Startrutans tips har en stängknapp; den förblir stängd.
- En panels rad med flikar som inte får plats rullar åt sidan i stället för att skäras av.
- Webbläsarfliken visar namnet på det öppna dokumentet före PartCraft | CadCraft.
- {{ui:Inställningar}} visar arbetsytans {{ui:Layout}} som en rullgardinslista med val, och språkrutan listar alla språk som bygget har.
- Vikt och Temperatur är enhetstyper i enhetsinställningarna.

## Åtgärdat

- Menyn Båge i skissen listar nu alla metoder.
- Tilläggets verktygsfält och webbläsarfliken fick korrigerad titel den 2026-11-09.

## Begränsningar

- Exakt STEP lästes tillbaka i OpenCascade (giltiga solider, volymer lika med dem som räknats för hand). Det har ännu inte öppnats i alla CAD- eller CAM-program, och en sammanställning skrivs inte som exakt STEP.
- Inget har skrivits ut på en riktig skrivare. Slicing, G-kod och hartsfiler lästes tillbaka av våra egna program eller en ersättningsskrivare; inget av hartsformaten har lästs in i en skrivare, och skrivarstorlekar och exponeringar är utgångspunkter.
- Solid FEM är linjär, isotrop och elastisk, med ett material per del och utan kontakt, flytning eller knäckning. Spänningen vid fasta ytor och skarpa hörn beror på nätet. Det är ett kontrollhjälpmedel, inte granskat av en ingenjör.
- Tider för stora sammanställningar kommer från en server utan grafikkort; en bildruta i full detalj med 20 000 delar tar fortfarande sekunder där.
- Rundningar fungerar på par av ytor; det finns ingen allmän hörnblandning och ingen rundning mellan ytor som inte möts.
- Rhino-länken har aldrig körts i riktig Rhino eller Grasshopper. Dokument har prövats av två program på en mapp, inte av två personer på en nätverksdelning.
- Anpassning av ytor till en riktig skanning har inte fått sin handkontroll. Språk andra än engelska är maskinutkast.
- Windows-installationsprogram är inte kodsignerade, och diskavbildningen för macOS är inte notariserad. Se [Felsökning](topic:troubleshooting).

Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrats i PartCraft 0.8 och 0.8.1, jämfört med 0.7. Simuleringen svarar medan du redigerar och talar om vad som går sönder först, sammanställningar får rörelsestudier, och nya arbetsytor gör friformsytor och delar dimensionerade utifrån fysik. 0.8.1 är en liten felrättningsversion.

### Nytt

**Simulering**

- **Uppdatera medan jag redigerar.** Bocka i {{ui:Uppdatera medan jag redigerar}} i blocket {{ui:Lös}} så följer svaren dina ändringar. Ändrar du ett mått, en last eller materialet visas ett snabbt svar, gjort med element fyra gånger större, direkt; när du stannar i ungefär en sekund ersätter studiens egna förfinade svar det. Resultaten anger vilket av dem du tittar på. På en stålkonsol låg det snabba svaret inom 1 % för nedböjning och cirka 4 % för spänning jämfört med det förfinade. Se [Kontrollera spänning och nedböjning](topic:simulation#update-while-you-edit-live).
- **Vad går sönder först.** För en statisk studie eller knäckningsstudie skalar {{ui:Vad går sönder först?}} i blocket **Bryt den** lasterna tills delen ger vika. Den listar, värst först, lastfaktorn till första flytning (med en röd markör där spänningen toppar) och lastfaktorn till knäckning. En faktor under 1 betyder att delen redan ger vika som den är belastad, och Problem visar ett fel. Faktorerna kommer från en linjär studie, så de är bara så bra som den. Se [Kontrollera spänning och nedböjning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flytning och kontakt.** Två studietyper till: en olinjär där materialet följer sin räta linje upp till flytgränsen och sedan en flackare lutning, med plastisk töjning ritad, och en kontaktstudie där separata delar trycker mot varandra (friktionsfritt) eller sitter fast (bundna). Ett laststeg som inte kan stabiliseras, eller delar som sjunker för djupt in i varandra, visas i panelen Problem. Friktion, stor glidning, stora rotationer, stora nedböjningar och utmattning löses inte. Se [Kontrollera spänning och nedböjning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Underlag för CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} sparar studien för CalculiX, ett separat program som du installerar och kör själv; {{ui:Export}} › {{ui:CalculiX results (.frd)}} läser tillbaka dess resultatfil på samma nät. PartCraft startar aldrig det programmet, och det säger till om delen ändrats sedan underlaget sparades.

**Sammanställningar**

- **Rörelsestudier.** {{ui:Sammanställning}} › {{ui:Rörelse}} styr värdet för en leds över en tid du anger (konstant hastighet, mjukad, sinus eller fram och tillbaka), placerar sammanställningen vid varje steg med dess leder och slutna slingor, och redovisar vad som krockar och hur nära delar kommer. {{ui:Lägg till en punkt}} ritar en punkts position, hastighet och acceleration, ledens värde och glappet mot tiden; {{ui:Spara CSV}} och {{ui:Spara diagram}} skriver ut dem. Efter {{ui:Kör}} flyttar steget i körfältet sammanställningen till valfritt steg. Studiens inställningar sparas i sammanställningsfilen. Hastighet och acceleration räknas från de inspelade positionerna, så använd fler steg om en skarp topp visas för lågt. Se [Kontrollera en sammanställning för krockar och rörelse](topic:check-assembly#a-motion-study).

**Ytor och delar utifrån fysik**

- **En arbetsyta för ytor.** Välj {{ui:Ytor}} i rutan {{ui:Arbetsyta}} för NURBS-kurvor och -ytor bredvid delen: {{ui:Kurva}}, {{ui:Loft}}, {{ui:Svep}}, {{ui:Anpassa}} och {{ui:Zebra}}, med kontinuitet (G0, G1 eller G2) mätt på de exakta ytorna och en kant som är sämre än du begärde listad i Problem med en åtgärd Match. {{ui:Jämna ut}} mäter skrovlinjer efter inflexioner och krökningshopp och bygger om de ojämna inom din tolerans. Ytor sparas i delfilen och ändrar inte delens funktioner. Se [Friformsytor (NURBS)](topic:nurbs-surfaces).
- **Arbetsytan Ingenjör.** Välj {{ui:Ingenjör}} i arbetsytväxlaren, välj en generator och klicka på {{ui:Ny}}: ett skript dimensionerar en del utifrån vad den måste göra (värme som ska flyttas, flöden, tryck, material, utskriftsprocess) med läroboksformler och bygger den, och ger sedan tillbaka de tal det använde med sina källor, sina tillverkningskontroller och filer för analysverktyg. Samma indata ger samma del på vilken dator som helst. Generatorn sparas i delen, och att öppna en del kör aldrig ett skript. Se [Delar utifrån fysik: generatorer](topic:engineer-generators) och [Skriv en generator](topic:write-a-generator).

**Skiss, ritningar och tillverkning**

- **En skiss från ett foto.** {{ui:Funktioner}} › {{ui:Mer}} › {{ui:Skiss från ett foto…}} följer en bild av en plan del på en enkel botten (kontur och hål) eller en pennteckning och gör den till linjer, bågar och cirklar. Du anger en längd, kontrollerar förhandsvisningen och skapar skissen. Se [Grunder för skisser](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala och dela för utskrift.** {{ui:Export}} › {{ui:Skala för utskrift (STL eller 3MF)…}} skalar per axel utan att ändra delen, till exempel med en krympningsmarginal. {{ui:Export}} › {{ui:Dela för utskrift (en zip med delar)…}} delar en del som är för stor för din bädd i numrerade bitar som sammanfogas med pinnar, nycklar, svalstjärtar, dymlingshål eller magnetfickor. Se [Skriv ut i 3D](topic:print-3d).
- **Nästade blad till G-kod.** {{ui:Export}} › {{ui:Nästade blad till G-kod}} läser en nästad DXF och gör ett program per blad via den efterbearbetning du väljer: hål och urtag först, sedan konturerna. Det planerar inte ingångar, skärordning eller gemensamma kanter. Se [Nästa platta delar på plåt](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Ritningar som gör mer själva.** {{ui:Blad}} › {{ui:Automatiskt}} väljer det minsta A-formatet som rymmer vyerna i den största standardskalan upp till 1:1. {{ui:Måttsätt hålen}} sätter en mittmarkering på varje hål, en notering per storlek och positionerna från vyns nedre vänstra hörn. Se [Gör en ritning](topic:drawing-pdf).

**I alla appar**

- **Språk.** Apparna finns på 54 språk. De som är utöver engelska är maskinutkast tills en modersmålstalare har läst dem.
- **Verktygsfältsrader.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Verktygsfältsrader}} väljer Radbryt (som tidigare), 2 rader eller 1 rad; en rad som inte får plats rullar åt sidan. PartCraft:s band för Funktioner visar det mest använda verktyget stort och gömmer varianter bakom en delad knapp.
- **Anslut din AI.** Studio är navet för att ansluta en egen assistent till alla åtta apparna, med behörighet för läs endast, föreslå eller redigera per app. En ansluten assistent kan dimensionera en del utifrån en mening, till exempel ett fäste för en last, visa sitt arbete och alla kontroller, och bygga den; den redovisar vad den inte kontrollerade (spänningskoncentration, utmattning, krypning i plaster). Se [Använd PartCraft med en AI-assistent](topic:use-with-ai-assistants).

### Åtgärdat i 0.8.1

- **Frysning av markören i helskärm.** Mus-pekningen begränsas nu. Orsaken är vår bästa tolkning och bekräftades inte med personen som rapporterade den.
- **Språk under körning.** Studio och de paketerade utgåvorna kan byta språk medan de körs; tidigare var de endast engelska. Det är ännu inte testat på alla plattformar: säg till om språket inte ändras.

### Ännu inte i den här versionen

- Anslut din AI är inte klar: anslutning med ett klick i Studio, den värdbaserade kopplingen för webbläsar-AI, din egen API-nyckel i Studio och det publicerade MCP-paketet utlovas inte. Studio har ingen AI av sig själv.
- Studio är inte kodsignerad: Windows kan varna, och macOS vill ha högerklick och sedan Öppna. Se [Felsökning](topic:troubleshooting).
- Toleranskedjor är fortfarande endriktade: se [Toleranskedjor](topic:tolerance-stackup).
- Resten finns i [Vad som ännu inte finns](topic:not-built-yet).

Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).
