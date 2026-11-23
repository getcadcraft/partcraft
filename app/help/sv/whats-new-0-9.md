---
title: Nyheter i 0.9 (tidigare)
summary: PartCraft 0.9 lägger till rundningar mellan ytor och förtjockning till solider, sammanställningar med tusentals delar, ett dokumentvalv med revisioner, ett Solid FEM-tillägg för spänning, tio bågmetoder, brittiska stålprofiler, ett utskriftssteg och tillägg för hartsutskrift. Varje punkt anger var man hittar den.
keywords: nyheter 0.9, tidigare version, vad är nytt, release notes, ändringslogg, 0.9, rundning mellan ytor, rullande kula, rundning av flera kanter, förtjockning, solid från ytor, step-skal, iges-solid, skanningsrundningar, stor sammanställning, lättviktsvisning, 20000 delar, dokument, valv, checka ut, revision, release, var använd, rhino-länk, grasshopper, 3dm, markörer, fabriksgolv, jobbkö, solid fem, finit element, von mises, egenfrekvens, bågmetoder, 3-punktsbåge, brittiska stålprofiler, blå bok, utskriftssteg, harts, goo, ctb, bädd, lägg ut, ändringar, 0.8, 0.8.1, version, nya funktioner, livesanalys, uppdatera vid redigering, bryt den, vad går sönder först, lastfaktor, olinjär, flytgräns, plastisk töjning, kontakt, calculix, rörelsestudie, spel, ytor, nurbs, jämna ut, skrov, zebra, engineer, generator, genererad kropp, skiss från foto, skala för utskrift, dela för utskrift, krympning, nästade plåtar, G-kod, ritning, mått på hål, assistent, mcp, språk, verktygsfältsrader
from: 1dafd7c8
---

Det här är vad som ändrades i PartCraft 0.9, jämfört med 0.8.1. Fria ytor sluts nu till solider, sammanställningar med tusentals delar förblir användbara, ett dokumentvalv behåller revisioner och ett Solid FEM-tillägg kontrollerar spänningen i en del. Varje punkt anger var den hittas.

## Nytt i 0.9.1

- **Exakt STEP-export.** {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} och {{ui:STEP AP214 (exact solid)}} fungerar nu. Hål, upphöjningar, rundningar, koner, sfärer och torusar skrivs på sina sanna ytor, med sanna cirklar som kanter, så att ett annat CAD- eller CAM-program kan känna igen ett hål som hål. Spline-sidor, modellerade gängor och importerade nät förblir platta facetter i samma solid. Se [Exportera för utskrift, STEP och DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in, exakt STEP ut.** En STEP-fil du öppnar behåller sina egna plana ytor, cylindrar, koner, sfärer och torusar, så {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skriver tillbaka dem som sanna ytor i stället för facetter: en leverantörs balk med bulthål går ut med samma ytor som den kom in med, plus allt du skurit i den. Spline-, svepta och roterade ytor i filen förblir facetter, och så gör kroppar från STL, OBJ och 3MF. Öppna STEP-filen igen för en del som sparats tidigare. Se [Öppna en STEP-fil och bygg vidare på den](topic:import-step).
- **Sanna cirklar i yt-DXF.** {{ui:Export}} › {{ui:DXF of the sketch or flat face}} med en vald plan yta skriver nu runda hål som cirklar, med hålets egen mittpunkt och radie, för ett laser-, plasma- eller vattenskärbord. Andra runda kanter är fortfarande facetter.
- **Exakt STEP för verkstaden.** I {{ui:Manufacture}} skriver {{ui:Exact STEP (work coordinates)}} delen med sin nollpunkt i uppställningens arbetsnollpunkt och Z längs verktygsaxeln, de koordinater G-koden använder. Se [Skapa verktygsbanor och G-kod](topic:manufacture#exact-step-for-the-shop).

## Nytt

### Ytor och solider

- **Rundning mellan ytor.** Välj {{ui:Surfaces}} i rutan {{ui:Workspace}} och sedan {{ui:Fillet between faces}}. Markera de två ytorna på en solid, skriv radien (och {{ui:Radius at the end (mm, 0 = the same)}} för en radie som ändras längs kanten). Resultatraden säger hur långt rundningen är från den ideala rullande kulan, och en radie som inte passar avvisas med ytan namngiven. {{ui:Fillet several edges}} rundar många kanter i ett steg; bocka för {{ui:Corners (sphere patch where three meet)}} för ett sfäriskt hörn där tre rundade kanter på plana ytor möts. Se [Fria ytor (NURBS)](topic:nurbs-surfaces).
- **Förtjockning till en solid.** {{ui:Thicken into a solid}} i samma arbetsyta ger en yta en tjocklek; {{ui:Other side}} växer den åt andra hållet. En veck eller ett självkorsande avvisas, med ytan och platsen namngiven.
- **Solider från ytor.** Trimmade ytor kan förenas med union, subtract och intersect och införas i delen som ett enda ångringssteg. STEP skriver en solid som ett stängt skal och IGES som en solid; båda läses tillbaka som en solid. Om ytorna inte parar ihop kant för kant får filen separata ytor, och statusraden säger det. Solider kan också skapas i nodredigeraren; se [Nodredigerare](topic:nodes).
- **Rund- och variabla rundningar i skanningar.** När du anpassar ytor till en skanning letas också efter rundningar i kanten (toroider) och rundningar med variabel radie längs en ganska rak kant, och de listas med sin radie. Det är testat endast på påhittade skanningar.

### Sammanställningar, dokument och länkar

- **Stora sammanställningar.** Delar som är kopior delar ett nät, och {{ui:Views}} › {{ui:Lightweight display}} ritar lådor så att vyn fortsätter röra sig (den slås på av sig själv för mycket stora sammanställningar; val och leder använder fortfarande de riktiga delarna). Delträdet visar sina första rader och en knapp {{ui:Show 700 more}} för resten. Sammanställningsfiler kan innehålla upp till 50 000 instanser och 100 000 leder. Se [Bygg en sammanställning](topic:build-assembly).
- **Dokument.** {{ui:Documents…}} i gruppen **Arkiv** öppnar en dialogruta över en projektmapp: checka ut och checka in, revisionsbokstäver, tillstånd (under arbete, för granskning, släppt, föråldrad), historik, var använd och stycklista. Se [Dokument och revisioner (valvet)](topic:documents-walkthrough).
- **Levande Rhino-länk.** Ett skript, `cadcraft_link.py`, bevakar ett Rhino- eller Grasshopper-dokument och skickar bara det som ändrats in i PartCraft, där en importerad funktion byggs om efter den nya formen. Den är enkelriktad och kräver Studio. Se [Levande .3dm-länk](topic:live-3dm-link).
- **Se varandras markörer.** I en delad session visas varje persons markör med namn och funktionen de har markerad. Se [Arbeta levande med andra](topic:work-live).
- **Fabriksgolvet.** Slå på tillägget Fabriksgolv i {{ui:Settings}} › {{ui:Add-ons}}. Efter att du lagt upp ett program i {{ui:Manufacture}} kan dess flik {{ui:Add to the factory job queue}} eller {{ui:Save as a job file}}. Det skickar eller startar aldrig en maskin.

### Analys och delar

- **Solid FEM-tillägg.** Slå på {{ui:Solid FEM}} i {{ui:Settings}} › {{ui:Add-ons}} (det är avstängt tills du gör det) så visas en flik {{ui:Solid FEM}} i högerpanelen. {{ui:Mesh the part}}, markera fasta ytor och laster i 3D-vyn, {{ui:Solve}}, och rita förskjutning, von Mises-spänning eller en egenform med {{ui:Show on the model}}. Se [Solid FEM: en spänningskontroll](topic:solid-fem-check).
- **Båge i skisser, på tio sätt.** Pilen bredvid {{ui:Arc}} i skissens verktygsfält listar 3-Point, Start Center End, Start Center Angle, Start Center Length, Start End Angle, Start End Direction, Start End Radius, Center Start End, Center Start Angle, Center Start Length och Continue. Se [Rita en båge på tio sätt](topic:sketch-arc-methods).
- **Brittiska stålprofiler.** Svetsade konstruktioner kan använda 976 brittiska profiler (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); skriv en storlek som `305x165x40 UB`. Se [Profilstänger](topic:structural-members).

### Utskrift

- **Utskriftssteg.** Knappen {{ui:Print stage}} i verktygsfältet (tillägget 3D-utskrift, på som standard) lägger din dels kroppar på en streckad bädd: {{ui:Lay flat}}, {{ui:Turn 90°}}, {{ui:Arrange on the bed}}, {{ui:Fit all on the bed}}, {{ui:Preview layers}}, och sedan {{ui:Send to 3D printer}} över USB, Klipper (Moonraker), OctoPrint eller PrusaLink. Ingenting skickas förrän du bekräftar, och din del ändras aldrig. För en STL- eller 3MF-fil i stället, se [Gör en del redo för 3D-utskrift](topic:print-3d).
- **Hartsutskrift.** Tillägg i {{ui:Settings}} › {{ui:Add-ons}}, alla avstängda tills du slår på dem: en hartsslicer, ett exponeringstest och filformaten Elegoo GOO, SL1, Chitubox CBDDLP/CTB och Anycubic. Slicing körs i en arbetstråd, så sidan förblir lyhörd.

## I varje app

- Varje hjälptext vid pekning är en Bootstrap-verktygstips.
- Startipset har en stängknapp; det förblir stängt.
- En panels rad med flikar som inte får plats rullar i sidled i stället för att klippas av.
- Webbläsarfliken visar det öppna dokumentets namn före PartCraft | CadCraft.
- {{ui:Settings}} visar arbetsytans {{ui:Layout}} som en rullgardinslista med val, och språkrutan listar varje språk byggversionen har.
- Vikt och Temperatur är enhetstyper i inställningarna för {{ui:Units}}.

## Åtgärdat

- Skissens Båge-meny listar nu varje metod.
- Tilläggens verktygsfält och webbläsarflikens titel rättades den 2026-11-09.

## Ärliga begränsningar

- Exakt STEP lästes tillbaka i OpenCascade (giltiga solider, volymer lika med de som räknats ut för hand). Den har inte öppnats i varje CAD- eller CAM-program än, och en sammanställning skrivs inte som exakt STEP.
- Inget har skrivits ut på en riktig skrivare. Slicing, G-kod och hartsfiler lästes tillbaka av våra egna program eller en ersättningsskrivare; inget av hartsformaten har lästs in i en skrivare, och skrivarstorlekar och exponeringar är startvärden.
- Solid FEM är linjär, isotrop och elastisk, ett material per del, utan kontakt, flytning eller knäckning. Spänning vid fasta ytor och skarpa hörn beror på nätet. Det är ett kontrollverktyg, inte granskat av en ingenjör.
- Tidsmätningar för stora sammanställningar kommer från en server utan GPU; en fullt detaljerad bild av 20 000 delar tar fortfarande sekunder där.
- Rundningar fungerar på par av ytor; det finns ingen allmän hörnblandning och ingen rundning mellan ytor som inte möts.
- Rhino-länken har aldrig körts i riktig Rhino eller Grasshopper. Dokument har prövats av två program på en mapp, inte av två personer på en nätverksdisk.
- Anpassning av ytor till en verklig skanning har inte fått sin handkontroll. Språk utöver engelska är maskinutkast.
- Windows-installationsprogram är inte kodsignerade, och macOS-diskavbildningen är inte notariserad. Se [Felsökning](topic:troubleshooting).

Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).

## Tidigare: 0.8 och 0.8.1

Det här är vad som ändrades i PartCraft 0.8 och 0.8.1, jämfört med 0.7. Simuleringen svarar medan du redigerar och talar om vad som går sönder först, sammanställningar får rörelsestudier, och nya arbetsytor gör fria ytor och delar dimensionerade från fysik. 0.8.1 är en liten felrättningsutgåva.

### Nytt

**Simulering**

- **Uppdatera medan jag redigerar.** Bocka för {{ui:Update while I edit}} i blocket Lös så följer svaren dina ändringar. Ändra ett mått, en last eller materialet så visas genast ett snabbt svar, gjort med element som är fyra gånger större; när du stannat i ungefär en sekund ersätter studiens egna förfinade svar det. Resultaten säger vilket du tittar på. På en stålbalk med ett fast infästningsände låg snabbsvaret inom 1 % för nedböjning och ungefär 4 % för spänning jämfört med det förfinade. Se [Kontrollera spänning och nedböjning](topic:simulation#update-while-you-edit-live).
- **Vad går sönder först.** För en statisk eller knäckningsstudie skalar {{ui:What breaks first?}} i blocket **Bryt den** lasterna tills delen ger vika. Den listar, värst först, lastfaktorn till första flytning (med en röd markör där spänningen toppar) och lastfaktorn till knäckning. En faktor under 1 betyder att delen redan ger vika som belastad, och Problem visar ett fel. Faktorerna kommer från en linjär studie, så de är bara så bra som den. Se [Kontrollera spänning och nedböjning](topic:simulation#find-out-what-breaks-first-break-it).
- **Flytning och kontakt.** Två fler studietyper: en olinjär där materialet följer sin räta linje till flytgränsen och sedan en flackare lutning, med plastisk töjning ritad, och en kontaktstudie där separata delar pressar mot varandra (friktionsfritt) eller sitter fast (bundna). Ett laststeg som inte kan stabiliseras, eller delar som sjunker för långt in i varandra, visas i panelen Problem. Friktion, stor glidning, stora rotationer, stora nedböjningar och utmattning löses inte. Se [Kontrollera spänning och nedböjning](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Underlag för CalculiX.** {{ui:Export}} › {{ui:CalculiX deck (.inp)}} sparar studien för CalculiX, ett separat program du installerar och kör själv; {{ui:Export}} › {{ui:CalculiX results (.frd)}} läser dess resultatfil tillbaka på samma nät. PartCraft startar aldrig det programmet, och det säger till om delen ändrats sedan underlaget sparades.

**Sammanställningar**

- **Rörelsestudier.** {{ui:Assembly}} › {{ui:Motion}} driver en leds värde över en tid du anger (konstant hastighet, mjukad, sinus eller fram och tillbaka), placerar sammanställningen vid varje steg med dess leder och slutna slingor, och rapporterar vad som kolliderar och hur nära delar kommer. {{ui:Add a point}} ritar en punkts position, hastighet och acceleration, ledens värde och glappet mot tiden; {{ui:Save CSV}} och {{ui:Save plot}} skriver ut dem. Efter {{ui:Run}} flyttar steglisten Step through the run sammanställningen till vilket steg som helst. Studiens inställningar sparas i sammanställningsfilen. Hastighet och acceleration räknas ut från de inspelade positionerna, så använd fler steg om en skarp topp visas för lågt. Se [Kontrollera en sammanställning för kollisioner och rörelse](topic:check-assembly#a-motion-study).

**Ytor och delar från fysik**

- **En arbetsyta för Ytor.** Välj {{ui:Surfaces}} i rutan {{ui:Workspace}} för NURBS-kurvor och -ytor bredvid delen: {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} och {{ui:Zebra}}, med kontinuitet (G0, G1 eller G2) mätt på de exakta ytorna och en kant som är sämre än du bad om listad i Problem med en Match-fix. {{ui:Fair}} mäter skrovlinjer för inflektioner och krökningssprång och bygger om de ojämna inom din tolerans. Ytor sparas i delfilen och ändrar inte delens funktioner. Se [Fria ytor (NURBS)](topic:nurbs-surfaces).
- **Arbetsytan Engineer.** Välj {{ui:Engineer}} i arbetsytsväxlaren, välj en generator och klicka på {{ui:New}}: ett skript dimensionerar en del utifrån vad den måste göra (värme som ska flyttas, flöden, tryck, material, tillverkningsprocess) med läroboksformler och bygger den, och ger sedan tillbaka siffrorna den använde med deras källor, sina tillverkningskontroller och filer för analysverktyg. Samma indata ger samma del på vilken dator som helst. Generatorn sparas i delen, och att öppna en del kör aldrig ett skript. Se [Delar från fysik: generatorer](topic:engineer-generators) och [Skriv en generator](topic:write-a-generator).

**Skisser, ritningar och tillverkning**

- **En skiss från ett foto.** {{ui:Features}} › {{ui:More}} › {{ui:Sketch from a photo…}} spårar en bild av en plan del på en enkel bakgrund (kontur och hål) eller en pennteckning till linjer, bågar och cirklar. Du anger en längd, kontrollerar förhandsvisningen och gör skissen. Se [Grunderna i skisser](topic:sketch-basics#a-sketch-from-a-photo).
- **Skala och dela för utskrift.** {{ui:Export}} › {{ui:Scale for printing (STL or 3MF)…}} skalar per axel utan att ändra delen, till exempel med en krympningsmarginal. {{ui:Export}} › {{ui:Split for printing (a zip of pieces)…}} delar en del som är för stor för din bädd i numrerade bitar som hålls ihop med pinnar, kilar, svalstjärtar, dymlingshål eller magnetfickor. Se [Skriv ut i 3D](topic:print-3d).
- **Nästade plåtar till G-kod.** {{ui:Export}} › {{ui:Nested sheets to G-code}} läser en nästad DXF och gör ett program per plåt genom den postprocessor du väljer: hål och urtag först, sedan konturerna. Den planerar inte inlopp, skärordning eller gemensamma kanter. Se [Nesta plana delar på plåtar](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Ritningar som gör mer själva.** {{ui:Sheet}} › {{ui:Automatic}} väljer det minsta A-formatbladet som rymmer vyerna i den största standardskalan upp till 1:1. {{ui:Dimension the holes}} sätter en centrumsmarkering på varje hål, en beteckning per storlek och positionerna från vyns nedre vänstra hörn. Se [Gör en ritning](topic:drawing-pdf).

**I varje app**

- **Språk.** Apparna finns på 54 språk. De som är utöver engelska är maskinutkast tills en modersmålstalare läst dem.
- **Verktygsfältsrader.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} väljer Wrap (som tidigare), 2 rader eller 1 rad; ett fält som inte får plats rullar i sidled. PartCrafts funktionsband visar det mest använda verktyget stort och gömmer varianterna bakom en delad knapp.
- **Anslut din AI.** Studio är navet för att koppla en egen assistent till alla åtta apparna, med behörighet för endast läsning, föreslå eller redigera per app. En ansluten assistent kan dimensionera en del utifrån en mening, till exempel ett fäste för en last, visa sitt arbete och alla kontroller, och bygga den; den rapporterar vad den inte kontrollerat (spänningskoncentration, utmattning, krypning i plaster). Se [Använd PartCraft med en AI-assistent](topic:use-with-ai-assistants).

### Åtgärdat i 0.8.1

- **Frysning av markören i helskärm.** Pekvalet begränsas nu i hastighet. Orsaken är vår bästa tolkning och har inte bekräftats med personen som rapporterade det.
- **Språk vid körning.** Studio och de paketerade utgåvorna kan byta språk medan de körs; tidigare var de bara på engelska. Det är ännu inte testat på varje plattform: säg till om språket inte ändras.

### Inte i den här versionen ännu

- Anslut din AI är inte klar: anslutning med ett klick i Studio, den hostade kopplingen för webbläsar-AI, din egen API-nyckel i Studio och det publicerade MCP-paketet är inte utlovade. Studio har ingen egen AI.
- Studio är inte kodsignerad: Windows kan varna, och macOS frågar efter högerklick och sedan Öppna. Se [Felsökning](topic:troubleshooting).
- Toleranskedjor är fortfarande en riktning: se [Toleranskedjor](topic:tolerance-stackup).
- Resten finns listat i [Det som inte är byggt ännu](topic:not-built-yet).

Tidigare ändringar finns i [Nyheter i 0.7](topic:whats-new-0-7).
