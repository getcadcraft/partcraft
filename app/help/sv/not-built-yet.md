---
title: Vad som ännu inte finns
summary: Allt den här versionen av PartCraft inte gör ännu, från vridna svep till tumvisning, ritningsmått och underkonstruktioner, med vad du gör i stället idag.
keywords: saknas, ännu inte, begränsningar, begränsning, färdplan, exakt kärna, rundning, fas, skal, svep, loft, STEP-import, simulering, tillverkning, vridet svep, ändtangens, ytrundning, ekvationer, tum, ritningsmått, underkonstruktioner, moln, surfplatta, telefon
from: 9b868162
---

PartCraft är en tidig version. Den här sidan listar vad den inte gör ännu, så att du inte letar efter det, och vad du gör i stället idag. Inget här har ett datum.

## Kräver en exakt kärna

Den här versionen bygger varje del med nätkärnan (se [Nätkärnan](topic:solid-kernels)). Allt nedan kräver en exakt geometrikärna, som den här versionen ännu inte har. Delar som sparats med dessa funktioner öppnas fortfarande: funktionerna finns kvar i historiken, markerade som ej byggda, och behålls när du sparar.

| Finns inte ännu | I stället, idag |
|---|---|
| {{ui:Fillet}} och {{ui:Chamfer}} på runda kanter; rundningar vars radie ändras längs kanten; rundningar som mjukt övergår där de möts (nätkärnan skär dem som fasade) | Rundning och fas fungerar på raka kanter mellan plana ytor; runda andra hörn i skissen innan du extruderar ({{ui:Fillet}} i en skiss, {{key:F}}) |
| {{ui:Shell}} som öppnar krökta ytor; väggar med olika tjocklek | Öppna plana ytor; lägg till material med extruderingar där en vägg måste vara tjockare |
| {{ui:Sweep}}, {{ui:Loft}}, {{ui:Draft}} på krökta ytor; extrudera upp till en yta, nästa yta eller ett hörn; avsmalnande extruderingar | Extrudera eller revolvera, i steg där det behövs; extrudera till ett djup du mäter upp |
| {{ui:Rib}}, {{ui:Base flange}}, {{ui:Edge flange}} och plattmönster | Extrudera plåten eller ribbans profil |
| Ytor: att slutföra en {{ui:Form}} i delen, {{ui:Patch}}, {{ui:Loft surface}}, {{ui:Gordon surface}}, {{ui:Stitch}}, {{ui:Thicken}}, {{ui:Offset surface}}, {{ui:Extend surface}}, {{ui:Trim surface}} | Inte tillgängligt |
| Flera kroppar: {{ui:Combine}}, {{ui:Move body}}, {{ui:Scale body}}, {{ui:Path pattern}}, funktioner som skapar en ny kropp | Ett solid; mönster och spegling kopierar funktioner |
| Skisser, plan, axlar och punkter på ytor som bara en exakt kärna kan hitta (en yta skapad av en rundning, en hålvägg, en yta på ett importerat solid) | Skissa på basplan, referensplan och de plana ytorna på extruderingar och revolveringar |
| Ett resultat från generativ design som öppnas som en del eller läggs till i en (det blir ett importerat solid) | Ladda ner resultatet som STL eller STEP |
| Redigering av en öppnad STEP-fils krökta ytor som exakta ytor; exakt STEP för spline-, svepta och revolverade ytor från en STEP-fil, spline-sidor, modellerade gängor, STL-, OBJ- och 3MF-kroppar och sammanställningar; STEP för andra delmodelleringsprogram | {{ui:Open}} läser STEP som trianglar och behåller filens plana ytor, cylindrar, koner, sfärer och toroider för exporten ([Öppna en STEP-fil](topic:import-step)); {{ui:Export}} › {{ui:STEP AP242 (exact solid)}} skriver varje analytisk yta exakt och behåller dem som fasetter ([Exportera](topic:export-files#for-other-cad-programs-step)); makrot för ett annat delmodelleringsprogram skriver fortfarande |
| Riktiga bågar i ritningsvyer | Vyer och sektionsvyer ritas från fasetterna |
| Exakta volymer, areor och avstånd | {{ui:Measure}} ger det fasetterade solidets siffror, något för låga på runda delar; en finare inställning för **Kurvor** för dem närmare |

Vissa rader i tabellerna nedan föreslår en av dessa funktioner som sättet att kringgå något annat. De förslagen gäller när en exakt kärna är tillbaka.

## Funktioner

| Finns inte ännu | I stället, idag |
|---|---|
| Ytrundningar, helrunda rundningar, rundningar med radier satta i punkter längs en kant | Konstant eller linjärt variabel {{ui:Fillet}}; flera rundningsfunktioner |
| Skal med olika väggtjocklek | En tjocklek för {{ui:Shell}}; lägg till material med extruderingar där en vägg måste vara tjockare |
| Släpp på friform- (spline-) ytor | {{ui:Draft}} fungerar på plana, cylindriska och koniska ytor |
| Vridna svep, tunnväggs- och ytsvep; ändtangens på funktionen Loft; en loft med en styrskena; spline-banor | {{ui:Sweep}} med fast orientering eller en slutskala; en loft med två eller fler styrskenor: se [Svep, loft och släpp](topic:sweep-loft-draft) |
| Ribbor från bågar eller splines; ribbor som växer kvadratiskt mot skissen (från en vy uppifrån); släpp på ribbor; flera ribbor från en skiss | {{ui:Rib}} från en kedja av linjer i ribbans eget plan: se [Ribbor och vinkelbeslag](topic:rib) |
| "Upp till" en krökt yta, "upp till nästa" som stannar vid en krökt yta | Upp till en plan yta eller ett referensplan |
| Förborrade hål, tum- och rörgängor, avsmalnande gängor, gängutlopp och fasade gängstarter | Förlyft med ett litet djup; ISO-metriska och trapetsgängor, kosmetiska eller modellerade: se [Gängor på axlar och hål, ritade eller modellerade](topic:threads) |
| Tunnfunktionsextruderingar | Rita båda väggarna i profilen |
| Mönsterkopior som hoppas över en i taget, fyllningsmönster | Använd separata funktioner; mönster längs en kurva: {{ui:Path pattern}} |
| Kopierande mönster, speglingar, rundningar, fasningar, skal och importerade solider | Kopiera skissen eller funktionen de bygger på, eller gör ett mönster av den |
| Exakt (G1) tangens vid en forms extraordinära punkter; sammanslagning av en forms lappar till större ytor | Höj formens nivå: de approximerade lapparna blir mindre; se [Friformsformer med Form](topic:form-surfaces) |
| En form av flera separata slutna delar i en funktion; broar mellan former | En sluten del per Form-funktion; sammanfoga dem med Join |
| Välja ytkroppar i vyn (utom trimnings- och lappunkter); ytrundningar; upphävd trimning; G2-lappar; Gordon-ytor som är tangenta mot krökta grannar (tangent mot plan och plana ytor finns) | Välj dem med namn i funktionens panel; förtjockа först, runda sedan solidet |
| En kroppslista i historiken; utelämna dolda kroppar från exporter | Byt namn på och dölj kroppar i delpanelens kroppslista; ta bort eller undertryck funktionen som skapade en kropp för att utelämna den |
| En icke-enhetlig skalning som behåller cylindrar och koner analytiska; icke-enhetlig skalning av förskjutna ytor | {{ui:Scale body}} gör krökta ytor till slutna B-splines (inom 0.0000004 mm); en enhetlig skalning förblir exakt |
| Kombinera ytkroppar; Minkowski-summor | {{ui:Stitch}} eller {{ui:Thicken}} först, sedan {{ui:Combine}} |
| Toleransanalys: toleranskedjor som svänger hörn (vektorslingor i 2D och 3D), känslighet beräknad ur geometrin, Monte Carlo med andra fördelningar, storlekstoleranser på skissmått, bonustolerans från materialtillstånd | {{ui:Stack-up}} i en sammanställning: en riktning, värsta fall och RSS, toleranser inskrivna, från ritningshuvudets allmäntolerans eller från GD&T-ramar: se [Toleranskedjor](topic:tolerance-stackup) |
| Nesting: skärordning och in- och utkörningar, gemensamma kanter skurna en gång, delar som måste hållas ihop; restbitar av rullar, lager som delas mellan projekt | {{ui:Nest flat parts on sheets…}} med avstånd, marginaler, vridningar och trådriktning: se [Nesta plana delar på plåtar](topic:nest-flat-parts); kvarvarande plåtar sparas och används först: se [Spara och återanvänd restbitar](topic:nest-offcuts); planera skärningen i din skärmaskins egen programvara |
| Plåt: fals, sicksack, snedfals och konturfläns; flänsar på krökta kanter eller på en böjd basflänss ytor; ritade böjar; hörnavslut; formverktyg; omvandling av ett solid till plåt; plattan av en böjd basfläns med urtag; böjtabeller | {{ui:Base flange}} (en plåt eller en böjd profil), {{ui:Edge flange}} på en plåts raka kanter med böjavlastningar, och plattmönstret med en K-faktor: se [Plåt](topic:sheet-metal) |
| Släppanalys på sammanställningar; hitta skiljelinjen; analys av väggtjocklek | {{ui:Draft analysis}} på delen i Design: se [Kontrollera släpp för formsprutning och gjutning](topic:draft-analysis); öppna varje del i en sammanställning för att kontrollera den |

## Skisser

| Finns inte ännu | I stället, idag |
|---|---|
| Ellipser, tangentbågar, koner, splines med satt grad eller vikter (NURBS) | Splines (kubiska), bågar och cirklar med tangentsamband |
| En punkt på en spline (ett samband), krökningssamband (G2) | Lägg splinens egen punkt där den måste passera |
| Förskjutna kopior av splines som följer senare ändringar; förskjutningar av kedjor med skarpa spline-hörn | Förskjut igen efter ändringen; runda hörnet först |
| Mönsterkopior som förblir länkade till originalet; mönster längs en kurva | Gör mönstret igen efter en ändring |
| Projicering av friform- eller lutande cirkulära kanter; projicerad geometri som följer delen | Projicera raka och parallella cirkulära kanter, mät sedan |
| Drivna (referens-) mått | Läs storlekar från panelen eller delens fakta |
| Kolinjära samband | Parallellt med avståndet 0 |
| Klistra in i ett annat program (systemets urklipp) | Exportera DXF, STEP, STL eller 3MF |
| Inskrivning av bågar, relativa eller polära koordinater | Skriv linjer och cirklar; rita bågar med verktyget Båge |
| Val av geometri utan pekare | Kräver ett klick eller tryck |

## Parametrar och enheter

| Finns inte ännu | I stället, idag |
|---|---|
| Konfigurationer som ändrar material; en CSV-konstruktionstabell som stänger av funktioner | Konfigurationer sätter parametrar och slår på och av funktioner: se [Konfigurationer och konstruktionstabeller](topic:design-tables); `partcraft variants` bygger sparade konfigurationer efter namn, med avstängda funktioner: se [Gör ett variantpaket av dina konfigurationer](topic:variant-pack) |
| Ekvationer på talen i de nyaste funktionernas egna paneler (plan, svep, släpp och liknande) | Skriv dem i ett skript eller med `partcraft set` ([Skript och kommandoraden](topic:scripts-and-cli)) |
| En del visad i tum | Storlekar visas i millimeter; skriv `2in` i en talruta eller ett uttryck så blir det 50.8 |

## Filer

| Finns inte ännu | I stället, idag |
|---|---|
| Redigering av ett importerat STEP-solids egna funktioner (det kommer utan historik) | Lägg till eller skär bort material med egna funktioner |
| Läsning av färger, namn, sammanställningsstruktur och PMI från STEP | Inte tillgängligt |
| Export av glTF, OBJ, IGES, Parasolid; DWG av en 3D-del (bara variantpaketet skriver en DWG: ritningsbladet) | STL eller 3MF för nät; STEP för solider; DXF för 2D |
| Öppning av IGES, DXF eller andra programs egna filer (`.3dm`-filer öppnas som en kropp: [Öppna en .3dm-modell som solidkropp](topic:open-3dm-files)) | Be om STEP, eller ett slutet STL-, OBJ- eller 3MF-nät: [Öppna en STL, OBJ eller 3MF](topic:open-meshes) |
| Sammanställningsstruktur (ett träd med delnamn) i exporterad STEP | Sammanställnings-STEP är en sammansatt enhet av de placerade soliderna |
| Spara till en mapp du väljer utan webbläsarens nedladdning | Slå på "fråga var filen ska sparas" i webbläsarens nedladdningsinställningar |

## Ritningar

| Finns inte ännu | I stället, idag |
|---|---|
| Mått utöver de tre totalmåtten (hålstorlekar, positioner, toleranser på storlekar) | Markera upp PDF:en, eller exportera DXF och sätt måtten i ett 2D-CAD-program |
| Mer än en sektion eller ett detaljutsnitt; justerade, bruten- och hjälpvyer | En sektion och ett detaljutsnitt per ritning |
| Fri text, noteringar och tabeller på bladet (utom titel- och revisionsblocken) | Ytbehandlingsnoteringen, eller text tillagd i PDF:en |
| Projektion enligt första vinkeln, flyttbara vyer, stående blad | Tredje vinkeln, automatisk layout, liggande blad A4–A0 och ANSI A–E |
| Levande sektionsvy: flera plan eller en sektionsruta samtidigt, en kontur runt snittet, att spara sektionen i filen | Ett plan i taget från {{ui:Views}} › {{ui:Section view}}; se [Titta in med en sektionsvy](topic:section-view) |
| Sammanställningsritningar med fler vyer, mått eller ballonger som du kan flytta | En isometrisk (eller sprängd) vy med automatiska ballonger och styckelistan |
| Kopiera och klistra in GD&T- och ytbehandlingssymboler | Placera var och en med Datum, Ram eller Yta |
| Manualer: STEP-filer i Illustrates {{ui:From another file…}}, en modell som skickas direkt från ModelCraft eller BimCraft, bilder i path tracerns kvalitet, interaktiv 3D i en PDF | Öppna STEP i Design och starta manualen {{ui:From the open part}}; spara modellen som glTF (.glb); PNG-bilder av 3D-vyn; den interaktiva 3D-filen: se [Starta en manual i Illustrate](topic:illustrate) |

## Sammanställningar

| Finns inte ännu | I stället, idag |
|---|---|
| Kugg-, kuggstång-, kam- och skruvleder; en kulled begränsad till en kon; leder på krökta ytor eller mellan punkter | Stela, vridbara, glid-, cylindriska, plana, kul- och stift-i-spår-leder på plana ytor, var och en med sina egna gränser: se [Bygg en sammanställning](topic:build-assembly) |
| Sprängsteg som vrider delar, och att dra delar som leder placerar | Raka sprängsteg; ta bort en led för att flytta en del för hand |
| Underkonstruktioner | En nivå av delar bara |
| Kugghjul, kammar, kontakt | Inte tillgängligt |

## Tillverkning

| Finns inte ännu | I stället, idag |
|---|---|
| 3D-grovbearbetning av krökta ytor, 3D-adaptiv rensning, restbearbetning; vattenlinje-, penn-, radiell- och spiralefterbearbetning; adaptiva banor skrivna som bågar | 2,5-axlig yta, ficka, 2D-adaptiv, kontur, borr och fas: se [Gör verktygsbanor och G-kod](topic:manufacture); Parallell och Scallop-efterbearbetning av hela modellen: se [3D-efterbearbetning](topic:finish-3d) |
| 4- och 5-axliga verktygsbanor, svarvning, probning | Ställ in en sida i taget med verktygsaxeln på fliken Uppställning |
| Kontroll av hållare och skaft mot kollision | Följ varningarna om spirallängd och kontrollera i din styrnings simulator |
| Probning, verktygslivslängd och underprogramcykler, samt 4:e- och 5:e-axelkoder och svarvkoder i en postprocessor; inläsning av andra programs postprocessorfiler | Skriv eller ändra en postprocessor i PartCraft:s egna format: se [Postprocessorer du kan redigera](topic:post-processors) |
| Tum-G-kod (G20) | Bara millimeter (G21) |

## Simulering och generativ design

| Finns inte ännu | I stället, idag |
|---|---|
| Olinjära studier: flytgräns, stora utböjningar, kontakt mellan delar, utmattning | Linjär statisk och egenfrekvenser: se [Kontrollera spänning och utböjning](topic:simulation); håll säkerhetsfaktorn klart över 1 |
| Olinjär knäckning (imperfektioner, efterknäckning, snabb övergång) | Linjära knäcklastfaktorer med en god marginal: se [Värme, termisk spänning och knäckning](topic:thermal-and-buckling) |
| Strålning mellan ytor (vyfaktorer), kontaktresistans, temperaturberoende material, tröghet i termisk spänning (termiska chockvågor) | Strålning till omgivningen, stationär eller kvasistatisk termisk spänning över tid, konstanta egenskaper: se [Värme, termisk spänning och knäckning](topic:thermal-and-buckling) |
| Automatisk förfining för transient värme och studier med en termisk last; grövre nät där felet är litet; ett mål på en lokal storhet (toppspänningen på en punkt) | **Förfina automatiskt** för statiska, knäcknings-, egenfrekvens- och stationära termiska studier, på felet över hela delen: se [Kontrollera spänning och utböjning](topic:simulation); annars sänk elementstorleken |
| Lager- och bultlaster, fjärrkrafter, moment, fjädrar, föreskrivna förskjutningar | Krafter och tryck på ytor, gravitation; fasta och friktionsfria ytor |
| Simulering av sammanställningar; material som skiljer sig efter riktning (tryckta lager, kompositer) | En del, ett isotropiskt material |
| Flera solvertrådar för tetraedriska studier, värmeöverföring och generativ design; trådar på en sida som inte är korsoriginisolerad | Voxelstudier, knäckning, spänning över tid och laminärt flöde använder trådarna där sidan tillåter det: se [PartCraft-inställningar](topic:settings) |
| Turbulent flöde med konstruktionsnoggrannhet (Spalart–Allmaras-modellen finns med som experimentell: rörfriktion 30 till 34 % för hög, återfäst efter bakåtsteg 21 till 39 % för kort; planerat: finare celler nära väggarna), värme i flöde, ej stationärt (tidsnoggrant) flöde, fria ytor, icke-newtonska vätskor, roterande delar | Laminärt, stationärt, isotermiskt flöde av en newtonsk vätska, eller den experimentella turbulensmodellen för kvalitativa mönster: se [Simulera vätskeflöde](topic:flow-simulation); panelen varnar när Reynolds-talet är förbi det laminära |
| Spänningsgränser och tillverkningsregler (överhäng, fräsriktningar) i generativ design; flera material i en form | Styvaste form för en volym; kontrollera resultatet i Simulering: se [Växa fram en form ur laster](topic:generative-design) |
| Ett resultat som en redigerbar (slät, parametrisk) solid | STL, fasetterad STEP eller en del med resultatet som ett importerat fasetterat solid |
| Konstruktion av elektriska maskiner: en rotor som roterar i en stator, moment mot vinkel, mättat stål, magneter som förlorar styrka efter sin knäpunkt, virvelströmmar och järn- och kopparförluster; magnetfält i 3D eller på krökta nät | Linjär 2D-magnetostatik på ett rutnät i analysbiblioteket: spolar, järn, permanentmagneter på deras återgångslinje, gap, induktans och dragkraft: se [Magnetfält i 2D](topic:magnetic-fields-2d) |

## Skript

| Finns inte ännu | I stället, idag |
|---|---|
| Hjälp vid pekning, brytpunkter och steg i skriptredigeraren | Sök, vik ihop och komplettering finns (se [Skriv och kör skript](topic:craftscript)); för resten, din egen redigerare: {{ui:Save}} och {{ui:Open}} i gruppen Skript flyttar skript in och ut; inbyggda funktioner listas i [CraftScript-språket](topic:craftscript-language) |
| Brytpunkter och steg genom ett skript | `disp` och `fprintf` längs vägen; {{key:Mod+Enter}} kör några markerade rader åt gången |
| Fält och diagram som ett skript visar ritas i arbetsytan Design; skript som ändrar delens parametrar | De visas i arbetsytan Skript; skript läser parametrar med `param` (se [Skriv och kör skript](topic:craftscript)) och ändrar dem på fliken {{ui:Parameters}} |
| Bilder och tabeller bredvid diagram; redigering av ett diagram (zoom, axelgränser) innan du sparar det | Bredvid visar diagrammen; spara ett diagram som PNG, SVG eller CSV och slutför det någon annanstans |
| numpy och andra Python-paket; Python offline; vikning av Python i redigeraren; Pascal Script | Pythons standardbibliotek, CraftScript och Lua: se [Skript i Python](topic:craftscript-python) |
| Att skicka Lua-funktioner till inbyggda funktioner; att anropa en biblioteksfunktion från Lua med ett namn som byggs medan skriptet körs | Skriv biblioteksfunktionens namn i skriptet (`cs.static_tet(…)`), eller anropa den från ett CraftScript-skript |

## Appen

| Finns inte ännu | I stället, idag |
|---|---|
| Molnsparande, delning och versionshistorik | Inte tillgängligt ännu. Spara filer på din dator och behåll versioner med namn |
| PartCraft som installerad app på iPad och iPhone | Använd PartCraft i enhetens webbläsare; på Android och på datorn körs det även i CadCraft Studio (getcadcraft.com/download) |
| Snabbmenyer (högerklick) | Verktygsfält och högerpanelen |
| Fullt offline-arbete från en helt ny start | Bara när appen har sparats för offlineanvändning: se [Arbeta offline](common:offline) |

Berätta vad du saknar mest via sidans supportsida: det styr vad som kommer härnäst.

## Engineer (generatorer och fält)

| Finns inte ännu | I stället, idag |
|---|---|
| Huvar, portar och kopplingar på den genererade värmeväxlaren; temperaturkurvor för materialets hållfasthet; förluster i tee-rör i grenröret | Generatorerna bygger kärnan och rören; lägg till kopplingar i Design; använd materialets värden vid rumstemperatur med en säkerhetsfaktor |
| Lägga till generatorer från tilläggskatalogen med ett klick | {{ui:Open}} i arbetsytan Engineer lägger till en generator från en fil |
| En fältfil finare än generatorns egen voxelstorlek; läsning av `.vdb`-filer | Spara ett finare fält från ett skript; `.vdb` skrivs, men läses inte |
| Beräkningar enligt tryckkärlsnormer | De läroboksformler för tunn och tjock vägg, med den säkerhetsfaktor du väljer; ingen normmarginal |
| Generatorer för de andra apparna | Bara PartCraft i den här versionen |
