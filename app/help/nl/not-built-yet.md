---
title: Wat nog niet is gebouwd
summary: Alles wat deze PartCraft-versie nog niet doet, van draaiende vegen tot inchweergave, tekeningmaten en subassemblages, met wat u er nu voor kunt doen.
keywords: ontbrekend, nog niet, beperkingen, limieten, routekaart, exacte kernel, afronding, afschuining, uitholling, veeg, loft, step-import, simulatie, fabricage, draaiende veeg, loft-eindtangentie, vlakafronding, vergelijkingen, inch, tekeningmaten, subassemblages, cloud, tablet, telefoon
from: 97b10a29
---

PartCraft is een vroege versie. Deze pagina somt op wat hij nog niet doet, zodat u er niet naar zoekt, en wat u er nu voor kunt doen. Niets hier heeft een datum.

## Heeft een exacte kernel nodig

Deze versie bouwt elk onderdeel met de mesh-kernel (zie [De mesh-kernel](topic:solid-kernels)). Alles hieronder heeft een exacte geometriekernel nodig, die deze versie nog niet heeft. Onderdelen die met deze functies zijn opgeslagen, openen nog steeds: de functies blijven in de geschiedenis, gemarkeerd als nog niet gebouwd, en worden behouden bij opslaan.

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| {{ui:Afronden}} en {{ui:Afschuinen}} op ronde randen; afrondingen waarvan de straal langs de rand verandert; afrondingen die soepel samenkomen waar ze elkaar raken (de mesh-kernel verstaat ze af) | Afronden en Afschuinen werken op rechte randen tussen vlakke vlakken; rond andere hoeken af in de schets voordat u extrudeert ({{ui:Afronden}} in een schets, {{key:F}}) |
| {{ui:Uitholling}} die gekromde vlakken opent; wanden met verschillende diktes | Open vlakke vlakken; voeg materiaal toe met extrusies waar een wand dikker moet zijn |
| {{ui:Uitvegen}}, {{ui:Loft}}, {{ui:Trekhoek}} op gekromde vlakken; extruderen tot een vlak, het volgende vlak of een hoekpunt; taps toelopende extrusies | Extrudeer of draai om, in stappen waar nodig; extrudeer tot een diepte die u meet |
| {{ui:Rib}}, {{ui:Basisflens}}, {{ui:Randflens}} en vlakke patronen | Extrudeer de plaat of het profiel van de rib |
| Vlakken: een {{ui:Vorm}} in het onderdeel afwerken, {{ui:Patch}}, {{ui:Loftvlak}}, {{ui:Gordonvlak}}, {{ui:Hechten}}, {{ui:Verdikken}}, {{ui:Offsetvlak}}, {{ui:Vlak verlengen}}, {{ui:Vlak bijsnijden}} | Niet beschikbaar |
| Meerdere volumes: {{ui:Combineren}}, {{ui:Lichaam verplaatsen}}, {{ui:Lichaam schalen}}, {{ui:Padpatroon}}, functies die een nieuw volume maken | Eén volume; patronen en spiegelen kopiëren functies |
| Schetsen, vlakken, assen en punten op vlakken die alleen een exacte kernel kan vinden (een vlak gemaakt door een afronding, de wand van een gat, een vlak van een geïmporteerd volume) | Schets op basisvlakken, referentievlakken en de vlakke vlakken van extrusies en omwentelingen |
| Een uitkomst van generatief ontwerp die als onderdeel is geopend of eraan is toegevoegd (het wordt een geïmporteerd volume) | Download de uitkomst als STL of STEP |
| Bewerken van de gekromde vlakken van een geopend STEP-bestand als exacte oppervlakken; exacte STEP van spline-, geveegde en omgewenteld vlakken uit een STEP-bestand, spline-zijden, gemodelleerde schroefdraden, STL/OBJ/3MF-volumes en samenstellingen; STEP voor andere onderdeelmodeleerprogramma's | {{ui:Openen}} leest STEP als driehoeken en behoudt de vlakke vlakken, cilinders, kegels, bollen en torussen van het bestand voor de export ([Een STEP-bestand openen](topic:import-step)); {{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} schrijft elk analytisch vlak exact en houdt die als facetten ([Exporteren](topic:export-files#for-other-cad-programs-step)); de macro voor een ander onderdeelmodeleerprogramma schrijft nog steeds |
| Ware bogen in tekeningaanzichten | Aanzichten en doorsneden worden getekend uit de facetten |
| Exacte volumes, oppervlakten en afstanden | {{ui:Meten}} geeft de getallen van het gefacetteerde volume, een beetje laag bij ronde onderdelen; een fijnere instelling **Krommen** brengt ze dichterbij |

Sommige rijen in de tabellen hieronder noemen een van deze functies als de manier om iets anders te omzeilen. Die suggesties gelden zodra een exacte kernel is teruggekomen.

## Functies

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Vlakafrondingen, volledig ronde afrondingen, afrondingen met stralen die op punten langs een rand zijn ingesteld | Constante of lineair variabele {{ui:Afronden}}; meerdere afrondingsfuncties |
| Uitholling met verschillende wanddiktes | Eén {{ui:Uitholling}}-dikte; voeg materiaal toe met extrusies waar een wand dikker moet zijn |
| Trekhoek op vrije (spline-)vlakken | {{ui:Trekhoek}} werkt op vlakke, cilindrische en conische vlakken |
| Draaiende vegen, dunwand- en oppervlakteveegs; eindtangentie op de functie Loft; een loft met één geleiderail; splinepaden | {{ui:Uitvegen}} met een vaste oriëntatie of een eindschaal; een loft met twee of meer geleiderails: zie [Vegen, loft en trekhoek](topic:sweep-loft-draft) |
| Ribben uit bogen of splines; ribben die vierkant met de schets worden opgebouwd (vanuit een bovenaanzicht); trekhoek op ribben; meerdere ribben uit één schets | {{ui:Rib}} uit één keten van lijnen in het eigen vlak van de rib: zie [Ribben en knoopplaten](topic:rib) |
| "Tot" een gekromd oppervlak, "tot volgende" stoppend op een gekromd vlak | Tot een vlak vlak of een referentievlak |
| Verzonken gaten, inch- en buisschroefdraad, conische schroefdraad, schroefdraadafloop en afgeschuinde schroefdraadstarts | Verzinking met een kleine diepte; metrische ISO- en trapeziumschroefdraad, cosmetisch of gemodelleerd: zie [Schroefdraad op assen en boringen, getekend of gemodelleerd](topic:threads) |
| Extrusies van dunne functies | Teken beide wanden van het profiel |
| Patroonkopieën één voor één overslaan, vulpatronen | Gebruik aparte functies; patronen langs een curve: {{ui:Padpatroon}} |
| Kopieerpatronen, spiegels, afrondingen, afschuiningen, uitholling en geïmporteerde volumes | Kopieer de schets of functie waarop ze gebouwd zijn, of maak er een patroon van |
| Exacte (G1) tangentie bij de bijzondere punten van een vorm; samenvoegen van de lapjes van een vorm tot grotere vlakken | Verhoog het Niveau van de vorm: de benaderde lapjes worden kleiner; zie [Vrije vormen met Vorm](topic:form-surfaces) |
| Een vorm van meerdere losse gesloten stukken in één functie; bruggen tussen vormen | Één gesloten stuk per functie Vorm; voeg ze samen met Samenvoegen |
| Oppervlaktevolumes in het beeld kiezen (behalve punten voor snijden en lappen); oppervlakafrondingen; ontsnijden; G2-lapjes; Gordonvlakken die tangent zijn aan gekromde buren (tangent aan vlakken en vlakke vlakken is gebouwd) | Kies ze op naam in het paneel van de functie; verdik eerst, rond dan het volume af |
| Een lijst van volumes in de geschiedenis; verborgen volumes uit exports weglaten | Hernoem en verberg volumes in de volumelijst van het onderdeelpaneel; verwijder of onderdruk de functie die een volume maakte om het weg te laten |
| Een niet-uniforme schaal die cilinders en kegels analytisch houdt; niet-uniform schalen van offsetvlakken | {{ui:Lichaam schalen}} maakt gekromde vlakken gesloten B-splines (binnen 0.0000004 mm); een uniforme schaal blijft exact |
| Oppervlaktevolumes combineren; Minkowski-sommen | Eerst {{ui:Hechten}} of {{ui:Verdikken}}, dan {{ui:Combineren}} |
| Een lijst van lichamen in de geschiedenis; verborgen lichamen uit exports weglaten | Hernoem en verberg lichamen in de lichamenlijst van het onderdeelpaneel; verwijder of onderdruk de functie die een lichaam maakte om het weg te laten |
| Tolerantieanalyse: stapels die hoeken maken (vectorlussen in 2D en 3D), gevoeligheden uit de geometrie, Monte Carlo met andere verdelingen, maattoleranties op schetsmaten, bonustolerantie uit materiaaltoestand | {{ui:Toleranceketen}} in een samenstelling: één richting, slechtste geval en RSS, tolerantie ingetypt, uit de algemene tolerantie van het titelblok of uit GD&T-kaders: zie [Toleranceketens](topic:tolerance-stackup) |
| Nesten: snijvolgorde en instappen, gedeelde randen één keer snijden, onderdelen die samen moeten blijven; restanten van rollen, materiaal gedeeld tussen projecten | {{ui:Platte onderdelen op platen nesten…}} met tussenruimte, marges, draaiingen en draadrichting: zie [Platte onderdelen op platen nesten](topic:nest-flat-parts); overgebleven platen worden bewaard en eerst gebruikt: zie [Reststukken bewaren en hergebruiken](topic:nest-offcuts); plan de snede in de eigen software van uw snijmachine |
| Plaatwerk: omzetranden, jogs, verstekflenzen en contourflenzen; flenzen op gekromde randen of op de vlakken van een gebogen basisflens; geschetste buigingen; hoekafsluitingen; vormgereedschap; een volume omzetten naar plaatwerk; de uitslag van een gebogen basisflens met uitsnijdingen; buigtabellen | {{ui:Basisflens}} (een plaat of een gebogen profiel), {{ui:Randflens}} op rechte randen van een plaat met buigontlastingen, en de uitslag met een K-factor: zie [Plaatwerk](topic:sheet-metal) |
| Trekhoekanalyse op samenstellingen; het scheidingsvlak vinden; wanddikteanalyse | {{ui:Trekhoekanalyse}} op het onderdeel in Ontwerp: zie [Trekhoek controleren voor gieten en spuitgieten](topic:draft-analysis); open elk onderdeel van een samenstelling om het te controleren |

## Schetsen

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Ellipsen, rakende bogen, kegelsneden, splines met een vaste graad of gewichten (NURBS) | Splines (kubisch), bogen en cirkels met Raaklijn-relaties |
| Een punt op een spline (een relatie), krommingsrelaties (G2) | Zet het eigen punt van een spline waar hij moet passeren |
| Offsetkopieën van splines die latere wijzigingen volgen; offsets van ketens met scherpe splinehoeken | Offset opnieuw na de wijziging; rond eerst de hoek af |
| Patroonkopieën die aan het origineel gekoppeld blijven; patronen langs een curve | Maak opnieuw een patroon na een wijziging |
| Vrije of gekantelde cirkelvormige randen projecteren; geprojecteerde geometrie die het onderdeel volgt | Projecteer rechte en evenwijdige cirkelvormige randen, en maat dan |
| Aangedreven (referentie-)maten | Lees maten af uit het paneel of de feiten van het onderdeel |
| Collineaire relaties | Evenwijdig met een afstand van 0 |
| Plakken in een ander programma (het klembord van het systeem) | Exporteer DXF, STEP, STL of 3MF |
| Bogen, relatieve of poolcoördinaten intypen | Typ lijnen en cirkels; teken bogen met de boogtool |
| Geometrie selecteren zonder aanwijzer | Vereist een klik of tik |

## Parameters en eenheden

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Configuraties die materialen wijzigen; een CSV-ontwerptabel die functies uitschakelt | Configuraties stellen parameters in en schakelen functies aan en uit: zie [Configuraties en ontwerptabellen](topic:design-tables); `partcraft variants` bouwt opgeslagen configuraties op naam, met uitgeschakelde functies: zie [Een variantenpakket maken uit uw configuraties](topic:variant-pack) |
| Vergelijkingen op de getallen van het paneel van de nieuwste functies (vlak, veeg, trekhoek en dergelijke) | Schrijf ze in een script of met `partcraft set` ([Scripts en de opdrachtregel](topic:scripts-and-cli)) |
| Een onderdeel getoond in inches | Maten worden in millimeter getoond; typ `2in` in een getalvak of expressie en het wordt 50.8 |

## Bestanden

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Eigen functies van een geïmporteerd STEP-volume bewerken (het komt zonder geschiedenis) | Voeg materiaal toe of snijd het weg met uw eigen functies |
| Kleuren, namen, samenstellingsstructuur en PMI uit STEP lezen | Niet beschikbaar |
| glTF-, OBJ-, IGES- en Parasolid-export; DWG van een 3D-onderdeel (alleen het variantenpakket schrijft een DWG: het tekenblad) | STL of 3MF voor meshes; STEP voor volumes; DXF voor 2D |
| IGES-, DXF- of andere programma's' eigen bestanden openen (`.3dm`-bestanden openen als één lichaam: [Een .3dm-model openen als volumelichaam](topic:open-3dm-files)) | Vraag om STEP, of een gesloten STL-, OBJ- of 3MF-mesh: [Een STL, OBJ of 3MF openen](topic:open-meshes) |
| Samenstellingsstructuur (een boom met onderdeelnamen) in geëxporteerde STEP | Samenstelling-STEP is één verbinding van de geplaatste volumes |
| Opslaan in een map naar keuze zonder het downloadvenster van de browser | Zet "vragen waar op te slaan" aan in de downloadinstellingen van de browser |

## Tekeningen

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Maten buiten de drie totale afmetingen (gatmaten, posities, toleranties op maten) | Markeer de PDF, of exporteer DXF en maat die in een 2D-CAD-programma |
| Meer dan één doorsnede of detail; uitgelijnde, uitgebroken en hulpaanzichten | Eén doorsnede en één detail per tekening |
| Vrije tekst, notities en tabellen op het blad (behalve de titel- en revisieblokken) | De afwerknotitie, of tekst toegevoegd in de PDF |
| Eerste-hoek-projectie, verplaatsbare aanzichten, staande bladen | Derde hoek, automatische indeling, liggende bladen A4–A0 en ANSI A–E |
| Live doorsnede: meerdere vlakken of een doorsnedekader tegelijk, een omtrek rond de snede, de doorsnede bewaren in het bestand | Één vlak tegelijk via {{ui:Weergaven}} › {{ui:Doorsnedeweergave}}; zie [Kijk binnen met een doorsnedeweergave](topic:section-view) |
| Samenstellingstekeningen met meer aanzichten, maten of ballonnetjes die u kunt verplaatsen | Één isometrisch (of uiteengezet) aanzicht met automatische ballonnetjes en de onderdeellijst |
| Kopiëren en plakken van GD&T- en afwerksymbolen | Plaats elk met Datum, Kader of Afwerking |
| Handleidingen: STEP-bestanden in {{ui:Vanuit een ander bestand…}} van Illustrate, een model dat rechtstreeks uit ModelCraft of BimCraft wordt aangeleverd, afbeeldingen van de kwaliteit van de padtracer, interactieve 3D in een PDF | Open de STEP in Ontwerp en start de handleiding met {{ui:Vanuit het open onderdeel}}; sla het model op als glTF (.glb); PNG-afbeeldingen van het 3D-beeld; het interactieve 3D-bestand: zie [Een handleiding starten in Illustrate](topic:illustrate) |

## Samenstellingen

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Tand-, tandheugel-, nok- en schroefverbindingen; een kogelgewricht beperkt tot een kegel; verbindingen op gekromde vlakken of tussen punten | Stijve, draai-, schuif-, cilindrische, vlakke, kogel- en pen-in-sleuf-verbindingen op vlakke vlakken, elk met eigen grenzen: zie [Een samenstelling bouwen](topic:build-assembly) |
| Uiteengezette stappen die onderdelen draaien, en onderdelen slepen die verbindingen plaatsen | Rechte uiteenzetstappen; verwijder een verbinding om een onderdeel met de hand te verplaatsen |
| Subassemblages | Eén niveau van onderdelen |
| Tandwielen, nokken, contact | Niet beschikbaar |

## Fabricage

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| 3D adaptief ruimen en offsetruwen in 3D; waterlijn-, potlood-, radiale en spiraalafwerking; adaptieve gangen geschreven als bogen | 3D ruwen in rechte rijen en restbewerking: zie [3D ruwen en restbewerking](topic:rough-3d); Evenwijdig en Scallop afwerken: zie [3D-afwerking](topic:finish-3d); 2.5-assig vlak, holte, 2D adaptief, contour, boren en afschuinen: zie [Freespaden en G-code maken](topic:manufacture) |
| Swarf-snijden, stroomlijnen en multi-as-ruwpaden, codes voor een gekanteld werkvlak (G68.2), botsingscontroles van de houder en de machine; een simulatie van 5-assige en roterende sneden | Een gekantelde gereedschap voor elke bewerking, 5-assige afwerking met een bolfrees en 4e-as roterende afwerking: zie [4- en 5-assige bewerking](topic:multi-axis) |
| Boren en inwendige schroefdraad op een draaibank, G71/G76-cycli, bogen in draaipaden, aangedreven gereedschappen, een subspil | Uitwendig draaien: vlakken, ruwen, afwerken, groeven, afsteken, schroefdraad, boren op het midden: zie [Draaien op een draaibank](topic:turning) |
| Een hoek of hoek van een onderdeel tasten, een gereedschapsinstelling, een maat meten tegen een tolerantie | Een vlak, een zijkant, een gat of een bos tasten om het werknulpunt in te stellen: zie [Tasten](topic:probing) |
| Botsingscontroles van houder en schacht | Let op de waarschuwingen over de snijkantlengte en controleer in de simulator van uw besturing |
| Gereedschapslevensduur- en subprogrammacycli in een postprocessor; postbestanden van andere programma's laden | Schrijf of wijzig een postprocessor in het eigen formaat van PartCraft: zie [Postprocessoren die u kunt bewerken](topic:post-processors) |
| Inch-G-code (G20) | Alleen millimeters (G21) |

## Simulatie en generatief ontwerp

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Niet-lineaire studies: vloeien, grote doorbuigingen, contact tussen onderdelen, vermoeiing | Lineair statisch en eigenfrequenties: zie [Spanning en doorbuiging controleren](topic:simulation); houd de veiligheidsfactor ruim boven 1 |
| Niet-lineaire knik (imperfecties, na-knik, snap-through) | Lineaire knikbelastingsfactoren met een ruime marge: zie [Warmte, thermische spanning en knik](topic:thermal-and-buckling) |
| Straling tussen vlakken (vormfactoren), contactweerstand, temperatuurafhankelijke materialen, traagheid in thermische spanning (thermische schokgolven) | Straling naar de omgeving, stationaire of quasi-statische thermische spanning in de tijd, constante eigenschappen: zie [Warmte, thermische spanning en knik](topic:thermal-and-buckling) |
| Automatische verfijning voor transiënte warmte en studies met een thermische belasting; het mesh grover maken waar de fout klein is; een doel op een lokale grootheid (de piekspanning op één plek) | **Automatisch verfijnen** voor statische, knik-, eigenfrequentie- en stationaire thermische studies, op de fout over het hele onderdeel: zie [Spanning en doorbuiging controleren](topic:simulation); verlaag anders de elementgrootte |
| Lagerbelastingen en boutbelastingen, externe krachten, momenten, veren, voorgeschreven verplaatsingen | Krachten en drukken op vlakken, zwaartekracht; vaste en wrijvingsloze vlakken |
| Simulatie van samenstellingen; materialen die per richting verschillen (geprinte lagen, composieten) | Eén onderdeel, één isotroop materiaal |
| Meerdere rekenthreads voor tetraëderstudies, warmteoverdracht en generatief ontwerp; enige threads op een pagina die niet cross-origin geïsoleerd is | Voxelstudies, knik, spanning in de tijd en laminaire stroming gebruiken de threads waar de pagina dat toestaat: zie [Instellingen van PartCraft](topic:settings) |
| Turbulente stroming met ontwerpnauwkeurigheid (het Spalart–Allmaras-model zit erin als experimenteel: buiswrijving 30 tot 34 % hoog, heraanhechting bij een achterwaartse stap 21 tot 39 % kort; gepland: fijnere cellen nabij de wanden), warmte in stroming, instationaire (tijdnauwkeurige) stroming, vrije oppervlakken, niet-Newtonse vloeistoffen, roterende onderdelen | Laminaire, stationaire, isotherme stroming van een Newtonse vloeistof, of het experimentele turbulente model voor kwalitatieve patronen: zie [Stromingssimulatie](topic:flow-simulation); het paneel waarschuwt wanneer het Reynoldsgetal voorbij laminair is |
| Spanningsgrenzen en fabricageregels (overhangen, freesrichtingen) in generatief ontwerp; meerdere materialen in één vorm | Stijfste vorm voor een volume; controleer de uitkomst in Simulatie: zie [Een vorm laten groeien uit belastingen](topic:generative-design) |
| Een uitkomst als bewerkbaar (glad, parametrisch) volume | STL, gefacetteerde STEP of een onderdeel met de uitkomst als geïmporteerd gefacetteerd volume |
| Elektrische machineontwerp: een rotor die in een stator draait, koppel tegen hoek, verzadigend staal, magneten die sterkte verliezen voorbij hun knik, wervelstromen en ijzer- en koperverliezen; magnetische velden in 3D of op gekromde meshes | Lineaire 2D-magnetostatica op een raster in de analysebibliotheek: spoelen, ijzer, permanente magneten op hun terugwaartse lijn, luchtspleten, inductie en trekkracht: zie [Magnetische velden in 2D](topic:magnetic-fields-2d) |

## Scripts

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Zweefhulp, breekpunten en stap-voor-stap uitvoeren in de scripteditor | Zoeken, samenvouwen en aanvullen zijn er (zie [Scripts schrijven en uitvoeren](topic:craftscript)); voor de rest uw eigen editor: {{ui:Opslaan}} en {{ui:Openen}} in de groep Script verplaatsen scripts naar binnen en naar buiten; ingebouwde functies staan in [De CraftScript-taal](topic:craftscript-language) |
| Breekpunten en stap-voor-stap door een script | `disp` en `fprintf` onderweg; {{key:Mod+Enter}} voert een paar geselecteerde regels tegelijk uit |
| Figuren en grafieken die een script toont, getekend in de werkomgeving Ontwerp; scripts die de parameters van het onderdeel wijzigen | Ze worden getoond in de werkomgeving Script; scripts lezen parameters met `param` (zie [Scripts schrijven en uitvoeren](topic:craftscript)) en wijzigen ze op het tabblad {{ui:Parameters}} |
| Afbeeldingen en tabellen naast grafieken; een grafiek bewerken (zoom, asgrenzen) voordat u hem opslaat | Naast elkaar toont de grafieken; sla een grafiek op als PNG, SVG of CSV en werk hem elders af |
| numpy en andere Python-pakketten; Python offline; Python-vouwen in de editor; Pascal Script | De standaardbibliotheek van Python, CraftScript en Lua: zie [Scripts in Python](topic:craftscript-python) |
| Lua-functies doorgeven aan ingebouwde functies; een bibliotheekfunctie vanuit Lua aanroepen met een naam die tijdens het script is opgebouwd | Schrijf de naam van de bibliotheekfunctie in het script (`cs.static_tet(…)`), of roep haar aan vanuit een CraftScript-script |

## De app

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Opslaan, delen en versiegeschiedenis in de cloud | Nog niet beschikbaar. Sla bestanden op uw computer op en bewaar versies met een naam |
| PartCraft als geïnstalleerde app op iPad en iPhone | Gebruik PartCraft in de browser van het apparaat; op Android en op de desktop werkt hij ook in CadCraft Studio (getcadcraft.com/download) |
| Contextmenu's (rechtermuisklik) | Werkbalk en rechter paneel |
| Volledig offline werken vanaf een schone start | Alleen wanneer de app voor offline gebruik is opgeslagen: zie [Offline werken](common:offline) |

Meld wat u het meest mist via de supportpagina van de site: dat bepaalt wat er daarna komt.

## Engineer (generatoren en velden)

| Nog niet gebouwd | Nu in plaats daarvan |
|---|---|
| Koppen, poorten en fittingen op de gegenereerde warmtewisselaar; temperatuurcurven voor materiaalsterkte; buisverliezen in het verdeelstuk | De generatoren bouwen de kern en de buizen; voeg fittingen toe in Ontwerp; gebruik de kamertemperatuurwaarden van het materiaal met een veiligheidsfactor |
| Generatoren toevoegen uit de add-onmap met één klik | {{ui:Openen}} in de werkomgeving Engineer voegt een generator toe uit een bestand |
| Een veldbestand fijner dan de eigen voxelgrootte van de generator; `.vdb`-bestanden inlezen | Sla een fijner veld op vanuit een script; `.vdb` wordt geschreven, niet gelezen |
| Drukvatberekeningen volgens een norm | De leerboekformules voor dunne en dikke wanden, met de veiligheidsfactor die u kiest; geen normmarge |
| Generatoren voor de andere apps | Alleen PartCraft in deze versie |
