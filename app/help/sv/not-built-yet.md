---
title: Det som inte är byggt ännu
summary: Allt det här PartCraft-bygget inte gör ännu, från vridna svep till tumvisning, ritningsmått och underenheter, med vad du gör i stället idag.
keywords: saknas, inte ännu, begränsningar, begränsning, färdplan, exakt kärna, rundning, fas, skal, svep, loft, step-import, simulering, tillverkning, vridet svep, loft-tangens i änden, ytrundning, ekvationer, tum, ritningsmått, underenheter, moln, surfplatta, telefon
from: 97b10a29
---

PartCraft är en tidig version. Den här sidan listar vad den inte gör ännu, så att du inte letar efter det, och vad du gör i stället idag. Inget här har ett datum.

## Kräver en exakt kärna

Den här versionen bygger varje del med nätkärnan (se [Nätkärnan](topic:solid-kernels)). Allt nedan kräver en exakt geometrikärna, som den här versionen ännu inte har. Delar som sparats med de här funktionerna öppnas fortfarande: funktionerna finns kvar i historiken, markerade som inte byggda, och bevaras när du sparar.

| Finns inte ännu | Gör i stället idag |
|---|---|
| {{ui:Fillet}} och {{ui:Chamfer}} på runda kanter; rundningar vars radie ändras längs kanten; rundningar som mjukt övergår där de möts (nätkärnan skär dem i geringar) | Rundning och fas fungerar på raka kanter mellan plana ytor; runda andra hörn i skissen före du extruderar ({{ui:Fillet}} i en skiss, {{key:F}}) |
| {{ui:Shell}} som öppnar krökta ytor; väggar med olika tjocklek | Öppna plana ytor; lägg till material med extruderingar där en vägg måste vara tjockare |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} på krökta ytor; extrudering upp till en yta, nästa yta eller en hörnpunkt; avsmalnande extruderingar | Extrudera eller rotera, i steg där det behövs; extrudera till ett djup du mäter |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} och plana mönster | Extrudera plattan eller ribbans profil |
| Ytor: färdigställa en {{ui:Form}} i delen, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Inte tillgängligt |
| Flera kroppar: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, funktioner som skapar en ny kropp | En solid; mönster och spegling kopierar funktioner |
| Skisser, plan, axlar och punkter på ytor som bara en exakt kärna kan hitta (en yta skapad av en rundning, en hålvägg, en yta på en importerad solid) | Skissa på basplan, referensplan och de plana ytorna på extruderingar och rotationer |
| Ett generativt designresultat som öppnas som en del eller läggs till i en del (det blir en importerad solid) | Ladda ner resultatet som STL eller STEP |
| Redigering av en öppnad STEP-fils krökta ytor som exakta ytor; exakt STEP av spline-, svepta och rotationsytor från en STEP-fil, spline-sidor, modellerade gängor, STL-, OBJ- och 3MF-kroppar och sammanställningar; STEP för andra delmodelleringsprogram | {{ui:Open}} läser STEP som trianglar och behåller filens plana ytor, cylindrar, koner, sfärer och torusar för exporten ([Öppna en STEP-fil](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skriver varje analytisk yta exakt och behåller dem som facetter ([Exportera](topic:export-files#for-other-cad-programs-step)); makrot för ett annat delmodelleringsprogram skriver fortfarande |
| Sanna bågar i ritningsvyer | Vyer och sektionsvyer ritas från facetterna |
| Exakta volymer, areor och avstånd | {{ui:Measure}} ger den facetterade solidens siffror, något för låga på runda delar; en finare inställning för **Kurvor** för dem närmare |

Några rader i tabellerna nedan föreslår en av de här funktionerna som vägen runt något annat. De förslagen gäller när en exakt kärna är tillbaka.

## Funktioner

| Finns inte ännu | Gör i stället idag |
|---|---|
| Ytrundningar, helrundningar, rundningar med radier satta i punkter längs en kant | Konstant eller linjär variabel {{ui:Fillet}}; flera rundningsfunktioner |
| Skal med olika väggtjocklek | En {{ui:Shell}}-tjocklek; lägg till material med extruderingar där en vägg måste vara tjockare |
| Släpp på fria (spline-) ytor | {{ui:Draft}} fungerar på plana, cylindriska och koniska ytor |
| Vridna svep, tunnväggs- och ytsvep; ändtangens på Loft-funktionen; en loft med en styrskena; spline-banor | {{ui:Sweep}} med fast orientering eller en skala i änden; en loft med två eller fler styrskenor: se [Svep, loft och släpp](topic:sweep-loft-draft) |
| Ribbor från bågar eller splines; ribbor utvidgade kvadratiskt mot skissen (från en ovanvy); släpp på ribbor; flera ribbor från en skiss | {{ui:Rib}} från en kedja av linjer i ribbans eget plan: se [Ribbor och gusset](topic:rib) |
| "Upp till" en krökt yta, "upp till nästa" som stannar vid en krökt yta | Upp till en plan yta eller ett referensplan |
| Motborrade hål, tum- och rörgängor, avsmalnande gängor, gängutlopp och fasade gänginlopp | Försänkning med ett litet djup; ISO-metriska och trapetsgängor, kosmetiska eller modellerade: se [Gängor på axlar och borrningar, ritade eller modellerade](topic:threads) |
| Tunnväggsextruderingar | Rita båda väggarna i profilen |
| Mönsterkopior som hoppas över en i taget, fyllnadsmönster | Använd separata funktioner; mönster längs en kurva: {{ui:Path pattern}} |
| Kopiera mönster, speglingar, rundningar, fasningar, skal och importerade solider | Kopiera skissen eller funktionen de bygger på, eller gör ett mönster av den |
| Exakt (G1) tangens vid en forms extraordinära punkter; sammanslagning av en forms lappar till större ytor | Höj formens nivå: de approximerade lapparna blir mindre; se [Fria former med Form](topic:form-surfaces) |
| En form av flera separata slutna delar i en funktion; broar mellan former | En sluten del per Form-funktion; sammanfoga dem med Join |
| Välj ytkroppar i vyn (utom trimmade och lappade punkter); ytrundningar; untrim; G2-lappar; Gordon-ytor som tangerar krökta grannar (tangens mot plan och plana ytor är byggt) | Välj dem med namn i funktionens panel; förtjockna först, runda sedan solidens kanter |
| En kroppslista i historiken; att lämna dolda kroppar utanför exporter | Byt namn på och göm kroppar i delpanelens kroppslista; ta bort eller undertryck funktionen som skapade en kropp för att lämna den utanför |
| En icke-enhetlig skala som bevarar cylindrar och koner analytiskt; icke-enhetlig skalning av förskjutna ytor | {{ui:Scale body}} gör krökta ytor till stängda B-splines (inom 0.0000004 mm); en enhetlig skala förblir exakt |
| Sammanslagning av ytkroppar; Minkowski-summor | {{ui:Stitch}} eller {{ui:Thicken}} först, sedan {{ui:Combine}} |
| Toleransanalys: toleranskedjor som svänger i hörn (2D- och 3D-vektorslingor), känslighet beräknad från geometrin, Monte Carlo med andra fördelningar, storlekstoleranser på skissmått, bonustolerans från materialförhållande | {{ui:Stack-up}} i en sammanställning: en riktning, värsta fall och RSS, toleranser inskrivna, från ritningshuvudets allmäntolerans eller från GD&T-ramar: se [Toleranskedjor](topic:tolerance-stackup) |
| Kapning: skärordning och inlopp, skärning av gemensamma kanter en gång, delar som måste hållas ihop; rester av rullar, material delat mellan projekt | {{ui:Nest flat parts on sheets…}} med avstånd, marginaler, vändningar och kornriktning: se [Nesta plana delar på plåtar](topic:nest-flat-parts); kvarvarande plåtar sparas och används först: se [Behåll och återanvänd restbitar](topic:nest-offcuts); planera skärningen i din skärmaskins egen programvara |
| Plåt: fals, jogg, geringsflänsar och konturflänsar; flänsar på krökta kanter eller på en böjd basflänsens ytor; skissade böjar; hörnavslut; formverktyg; konvertering av en solid till plåt; planet hos en böjd basfläns med urtag i den; böjtabeller | {{ui:Base flange}} (en platta eller en böjd profil), {{ui:Edge flange}} på en plattas raka kanter med böjavlastningar, och det plana mönstret med en K-faktor: se [Plåt](topic:sheet-metal) |
| Släppanalys på sammanställningar; hitta skiljelinjen; väggtjockleksanalys | {{ui:Draft analysis}} på delen i Design: se [Kontrollera släpp för gjutning och formsprutning](topic:draft-analysis); öppna varje del i en sammanställning för att kontrollera den |

## Skisser

| Finns inte ännu | Gör i stället idag |
|---|---|
| Ellipser, tangentbågar, koniska snitt, splines med satt grad eller vikter (NURBS) | Splines (kubiska), bågar och cirklar med tangentrelationer |
| En punkt på en spline (en relation), krökningsrelationer (G2) | Placera splinens egen punkt där den måste passera |
| Förskjutna kopior av splines som följer senare ändringar; förskjutningar av kedjor med skarpa spline-hörn | Förskjut igen efter ändringen; runda hörnet först |
| Mönsterkopior som förblir kopplade till originalet; mönster längs en kurva | Gör mönstret igen efter en ändring |
| Projicering av fria eller lutande cirkulära kanter, projicerad geometri som följer delen | Projicera raka och parallella cirkulära kanter, mät sedan |
| Drivna (referens-)mått | Läs storlekar från panelen eller delens fakta |
| Kollinära relationer | Parallell med ett avstånd på 0 |
| Inklistring i ett annat program (systemets urklipp) | Exportera DXF, STEP, STL eller 3MF |
| Skriva in bågar, relativa eller polära koordinater | Skriv in linjer och cirklar; rita bågar med Båge-verktyget |
| Markera geometri utan pekdon | Kräver ett klick eller en tryckning |

## Parametrar och enheter

| Finns inte ännu | Gör i stället idag |
|---|---|
| Konfigurationer som ändrar material; en CSV-konstruktionstabell som stänger av funktioner | Konfigurationer sätter parametrar och slår på och av funktioner: se [Konfigurationer och konstruktionstabeller](topic:design-tables); `partcraft variants` bygger sparade konfigurationer med namn, även med avstängda funktioner: se [Gör ett variantpaket av dina konfigurationer](topic:variant-pack) |
| Ekvationer på talen i de nyaste funktionernas egna paneler (plan, svep, släpp och liknande) | Skriv dem i ett skript eller med `partcraft set` ([Skript och kommandoraden](topic:scripts-and-cli)) |
| En del visad i tum | Storlekar visas i millimeter; skriv `2in` i en talruta eller ett uttryck så blir det 50.8 |

## Filer

| Finns inte ännu | Gör i stället idag |
|---|---|
| Redigering av en importerad STEP-solids egna funktioner (den kommer utan historik) | Lägg till eller skär material med egna funktioner |
| Läsning av färger, namn, sammanställningsstruktur och PMI från STEP | Inte tillgängligt |
| Export av glTF, OBJ, IGES och Parasolid; DWG av en 3D-del (endast variantpaketet skriver en DWG: ritningsbladet) | STL eller 3MF för nät; STEP för solider; DXF för 2D |
| Öppning av IGES, DXF eller andra programs egna filer (`.3dm`-filer öppnas som en kropp: [Öppna en .3dm-modell som en solid kropp](topic:open-3dm-files)) | Be om STEP, eller ett stängt STL-, OBJ- eller 3MF-nät: [Öppna en STL, OBJ eller 3MF](topic:open-meshes) |
| Sammanställningsstruktur (ett träd med delnamn) i exporterad STEP | En sammanställnings-STEP är en sammansatt form av de placerade solidterna |
| Spara till en mapp du väljer utan webbläsarens nedladdning | Aktivera "fråga var det ska sparas" i webbläsarens nedladdningsinställningar |

## Ritningar

| Finns inte ännu | Gör i stället idag |
|---|---|
| Mått utöver de tre totalmåtten (hålstorlekar, positioner, toleranser på storlekar) | Markera upp PDF:en, eller exportera DXF och sätt måtten i ett 2D-CAD-program |
| Mer än en sektion eller ett detaljutsnitt; justerade, bruten och hjälpvyer | En sektion och ett detaljutsnitt per ritning |
| Fri text, noteringar och tabeller på bladet (utöver titel- och revisionsblocken) | Ytbehandlingsnoteringen, eller text tillagd i PDF:en |
| Första-vinkelprojektion, flyttbara vyer, stående blad | Tredje-vinkel, automatisk layout, liggande blad A4–A0 och ANSI A–E |
| Levande sektionsvy: flera plan eller en sektionsbox samtidigt, en kontur runt snittet, att spara sektionen i filen | Ett plan i taget från {{ui:Views}} › {{ui:Section view}}; se [Titta in med en sektionsvy](topic:section-view) |
| Sammanställningsritningar med fler vyer, mått eller ballonger du kan flytta | En isometrisk (eller sprängd) vy med automatiska ballonger och delförteckningen |
| Kopiera och klistra in GD&T- och ytbehandlingssymboler | Placera var och en med Datum, Ram eller Yta |
| Manualer: STEP-filer i Illustrates {{ui:From another file…}}, en modell som skickas direkt från ModelCraft eller BimCraft, bilder i path tracerns kvalitet, interaktiv 3D i en PDF | Öppna STEP:en i Design och starta manualen {{ui:From the open part}}; spara modellen som glTF (.glb); PNG-bilder av 3D-vyn; den interaktiva 3D-filen: se [Starta en manual i Illustrate](topic:illustrate) |

## Sammanställningar

| Finns inte ännu | Gör i stället idag |
|---|---|
| Kugg-, kuggstångs-, kam- och skruvleder; en kulled begränsad till en kon; leder på krökta ytor eller mellan punkter | Stela, roterande, skjutande, cylindriska, plana, kul- och stift-i-spår-leder på plana ytor, var och ett värde med egna gränser: se [Bygg en sammanställning](topic:build-assembly) |
| Sprängsteg som vrider delar, och att dra delar som leder placerar | Raka spränggsteg; ta bort en led för att flytta en del för hand |
| Underenheter | En nivå av delar endast |
| Kugghjul, kammar, kontakt | Inte tillgängligt |

## Tillverkning

| Finns inte ännu | Gör i stället idag |
|---|---|
| 3D-adaptiv rensning och förskjuten grovning i 3D; vattenlinje-, penn-, radiell- och spiralfinbearbetning; adaptiva gångar skrivna som bågar | 3D-grovning i raka rader och restbearbetning: se [3D-grovbearbetning och restbearbetning](topic:rough-3d); Parallell och Kammusslor-finbearbetning: se [3D-finbearbetning](topic:finish-3d); 2.5-axlig yta, ficka, 2D-adaptiv, kontur, borrning och fas: se [Skapa verktygsbanor och G-kod](topic:manufacture) |
| Svarvning av fasningar, fleranvändning av verktygsbanor och flera-axlig grovning, arbetsplansvinkling (G68.2), kollisionskontroller av hållare och maskin; en simulering av 5-axliga och roterande skär | Ett lutande verktyg för valfri operation, 5-axlig finbearbetning med en kulfräs och 4:e-axelns roterande finbearbetning: se [4- och 5-axlig bearbetning](topic:multi-axis) |
| Urborrning och inre gängor i en svarv, G71/G76-cykler, bågar i svarvbanor, levande verktyg, en underspindel | Yttre svarvning: plana, grova, finbearbeta, spåra, avstick, gänga, borra på centrum: se [Svarvning](topic:turning) |
| Probning av en vinkel eller ett hörn, en verktygsmätare, mätning av ett mått mot en tolerans | Probning av en yta, en sida, ett hål eller en upphöjning för att sätta arbetsförskjutningen: se [Probning](topic:probing) |
| Kollisionskontroller av hållare och skaft | Titta på varningarna om spiralängd och kontrollera i din styrnings simulator |
| Verktygslivslängd- och underprogramcykler i en postprocessor; inläsning av andra programs postfiler | Skriv eller ändra en postprocessor i PartCrafts eget format: se [Redigerbara postprocessorer](topic:post-processors) |
| Tum-G-kod (G20) | Endast millimeter (G21) |

## Simulering och generativ design

| Finns inte ännu | Gör i stället idag |
|---|---|
| Olinjära studier: flytning, stora nedböjningar, kontakt mellan delar, utmattning | Linjär statik och egenfrekvenser: se [Kontrollera spänning och nedböjning](topic:simulation); håll säkerhetsfaktorn väl över 1 |
| Olinjär knäckning (imperfektioner, efterknäckning, snäppgenomslag) | Linjära knäcklastfaktorer med god marginal: se [Värme, termisk spänning och knäckning](topic:thermal-and-buckling) |
| Strålning mellan ytor (vyfaktorer), kontaktmotstånd, temperaturberoende material, tröghet i termisk spänning (termiska stötvågor) | Strålning mot omgivningen, stationär eller kvasistatisk termisk spänning över tid, konstanta egenskaper: se [Värme, termisk spänning och knäckning](topic:thermal-and-buckling) |
| Automatisk förfining för transient värme och studier med en termisk last; grövre nät där felet är litet; ett mål på en lokal storhet (toppspänningen på en punkt) | **Förfina automatiskt** för statiska, knäcknings-, egenfrekvens- och stationära termiska studier, på felet över hela delen: se [Kontrollera spänning och nedböjning](topic:simulation); annars sänk elementstorleken |
| Lager- och bultlaster, fjärrkrafter, moment, fjädrar, föreskrivna förskjutningar | Krafter och tryck på ytor, gravitation; fasta och friktionsfria ytor |
| Simulering av sammanställningar; material som skiljer sig efter riktning (tryckta lager, kompositer) | En del, ett isotropt material |
| Flera lösartrådar för tetraedriska studier, värmeöverföring och generativ design; trådar på en sida som inte är korsurssisolerad | Voxelstudier, knäckning, spänning över tid och laminärt flöde använder trådarna där sidan tillåter: se [PartCraft-inställningar](topic:settings) |
| Turbulent flöde med konstruktionsnoggrannhet (Spalart–Allmaras-modellen finns som experimentell: rörfriktion 30 till 34 % för hög, återfäste vid bakåtsteg 21 till 39 % för kort; planerat: finare celler nära väggarna), värme i flöde, icke-stationärt (tidsnoggrant) flöde, fria ytor, icke-Newtonska vätskor, roterande delar | Laminärt, stationärt, isotermiskt flöde av en Newtonsk vätska, eller den experimentella turbulensmodellen för kvalitativa mönster: se [Simulera vätskeflöde](topic:flow-simulation); panelen varnar när Reynolds-talet är över laminärt |
| Spänningsgränser och tillverkningsregler (överhäng, fräsriktningar) i generativ design; flera material i en form | Styvaste form för en volym; kontrollera resultatet i Simulering: se [Växa fram en form från laster](topic:generative-design) |
| Ett resultat som en redigerbar (slät, parametrisk) solid | STL, facetterad STEP eller en del med resultatet som en importerad facetterad solid |
| Elektrisk maskindesign: en rotor som roterar i en stator, vridmoment mot vinkel, mättat stål, magneter som tappar styrka efter sin knäpunkt, virvelströmmar och järn- och kopparförluster; magnetfält i 3D eller på krökta nät | Linjär 2D-magnetostatik på ett rutnät i analysbiblioteket: spolar, järn, permanentmagneter på deras återgångslinje, luftgap, induktans och dragkraft: se [Magnetfält i 2D](topic:magnetic-fields-2d) |

## Skript

| Finns inte ännu | Gör i stället idag |
|---|---|
| Hjälp vid pekning, brytpunkter och steg i skriptredigeraren | Sök, vik ihop och komplettera finns (se [Skriv och kör skript](topic:craftscript)); för resten din egen redigerare: {{ui:Save}} och {{ui:Open}} i gruppen Script flyttar skript in och ut; inbyggda funktioner listas i [CraftScript-språket](topic:craftscript-language) |
| Brytpunkter och steg genom ett skript | `disp` och `fprintf` längs vägen; {{key:Mod+Enter}} kör några markerade rader åt gången |
| Fält och diagram som ett skript visar ritas i arbetsytan Design; skript som ändrar delens parametrar | De visas i arbetsytan Script; skript läser parametrar med `param` (se [Skriv och kör skript](topic:craftscript)), ändrar dem på fliken {{ui:Parameters}} |
| Bilder och tabeller bredvid diagram; redigering av ett diagram (zoom, axelgränser) före sparning | Sida vid sida visar diagrammen; spara ett diagram som PNG, SVG eller CSV och slutför det någon annanstans |
| numpy och andra Python-paket; Python offline; vikning av Python i redigeraren; Pascal Script | Pythons standardbibliotek, CraftScript och Lua: se [Skript i Python](topic:craftscript-python) |
| Att skicka Lua-funktioner till inbyggda funktioner; att anropa en biblioteksfunktion från Lua med ett namn som byggs medan skriptet körs | Skriv biblioteksfunktionens namn i skriptet (`cs.static_tet(…)`), eller anropa den från ett CraftScript-skript |

## Appen

| Finns inte ännu | Gör i stället idag |
|---|---|
| Molnsparande, delning och versionshistorik | Inte tillgängligt ännu. Spara filer på datorn och behåll versioner med namn |
| PartCraft som installerad app på iPad och iPhone | Använd PartCraft i enhetens webbläsare; på Android och på skrivbordet körs den också i CadCraft Studio (getcadcraft.com/download) |
| Snabbmenyer (högerklick) | Verktygsfält och högerpanel |
| Att arbeta helt offline från en ny start | Endast när appen har sparats för offlineanvändning: se [Arbeta offline](common:offline) |

Rapportera det du saknar mest via webbplatsens supportsida: den styr vad som kommer härnäst.

## Engineer (generatorer och fält)

| Finns inte ännu | Gör i stället idag |
|---|---|
| Huvuden, portar och kopplingar på den genererade värmeväxlaren; temperaturkurvor för materialhållfasthet; förluster i tee i grenröret | Generatorerna bygger kärnan och rören; lägg till kopplingar i Design; använd materialets värden vid rumstemperatur med en säkerhetsfaktor |
| Lägga till generatorer från tilläggskatalogen med ett klick | {{ui:Open}} i arbetsytan Engineer lägger till en generator från en fil |
| En fältfil finare än generatorns egen voxelstorlek; läsning av `.vdb`-filer | Spara ett finare fält från ett skript; `.vdb` skrivs, läses inte |
| Beräkningar enligt tryckkärlskod | De läroboksformler för tunna och tjocka väggar, med den säkerhetsfaktor du väljer; inte en kodmarginal |
| Generatorer för de andra apparna | Endast PartCraft i den här versionen |
