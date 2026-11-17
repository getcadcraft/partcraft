---
title: Wat nog niet is gebouwd
summary: Alles wat deze PartCraft-versie nog niet doet, van gedraaide uitveging tot inchweergave, maatvoering en subsamenstellingen, met wat u nu in plaats daarvan kunt doen.
keywords: ontbrekend, nog niet, beperkingen, limieten, routekaart, exacte kern, afronden, afschuinen, uitholling, uitvegen, loft, STEP-import, simulatie, fabricage, gedraaide uitveging, loft-eindtangentie, vlakafronding, vergelijkingen, inches, maatvoering, subsamenstellingen, cloud, tablet, telefoon
from: 9b868162
---

PartCraft is een vroege versie. Deze pagina somt op wat het nog niet doet, zodat u er niet naar zoekt, en wat u nu in plaats daarvan kunt doen. Er staat hier geen datum bij.

## Heeft een exacte kern nodig

Deze versie bouwt elk onderdeel met de meshkern (zie [De meshkern](topic:solid-kernels)). Alles hieronder heeft een exacte geometriekern nodig, die deze versie nog niet heeft. Onderdelen die met deze features zijn opgeslagen, openen nog wel: de features blijven in de geschiedenis, gemarkeerd als nog niet gebouwd, en worden bewaard wanneer u opslaat.

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| {{ui:Afronden}} en {{ui:Afschuinen}} op ronde randen; afrondingen waarvan de straal langs de rand verandert; afrondingen die waar ze samenkomen vloeiend overlopen (de meshkern zet ze af op een verstek) | Afronden en Afschuinen werken op rechte randen tussen platte vlakken; rond andere hoeken af in de schets voordat u extrudeert ({{ui:Afronden}} in een schets, {{key:F}}) |
| {{ui:Uitholling}} bij gebogen vlakken; wanden van verschillende dikte | Open platte vlakken; voeg materiaal toe met extrusies waar een wand dikker moet zijn |
| {{ui:Uitvegen}}, {{ui:Loft}}, {{ui:Trekhoek}} op gebogen vlakken; extruderen tot een vlak, het volgende vlak of een hoekpunt; taps toelopende extrusies | Extruderen of omwentelen, waar nodig in stappen; extruderen tot een diepte die u meet |
| {{ui:Rib}}, {{ui:Basisflens}}, {{ui:Randflens}} en platte uitslagen | Extrudeer de plaat of het profiel van de rib |
| Vlakken: het afwerken van een {{ui:Vorm}} tot in het onderdeel, {{ui:Patch}}, {{ui:Loftvlak}}, {{ui:Gordonvlak}}, {{ui:Hechten}}, {{ui:Verdikken}}, {{ui:Offsetvlak}}, {{ui:Vlak verlengen}}, {{ui:Vlak bijsnijden}} | Niet beschikbaar |
| Meerdere lichamen: {{ui:Combineren}}, {{ui:Lichaam verplaatsen}}, {{ui:Lichaam schalen}}, {{ui:Padpatroon}}, features die een nieuw lichaam maken | Eén volume; patronen en spiegelen kopiëren features |
| Schetsen, vlakken, assen en punten op vlakken die alleen een exacte kern kan vinden (een vlak dat door een afronding ontstaat, een gatwand, een vlak van een geïmporteerd volume) | Schets op basisvlakken, referentievlakken en de platte vlakken van extrusies en omwentelingen |
| Een generatief ontwerpresultaat dat als onderdeel wordt geopend of eraan wordt toegevoegd (het wordt een geïmporteerd volume) | Download het resultaat als STL of STEP |
| Gekromde vlakken van een geopend STEP-bestand bewerken als exacte vlakken; exacte STEP van spline-, geveegde en omwentelde vlakken uit een STEP-bestand, spline-zijden, gemodelleerde schroefdraden, STL-, OBJ- en 3MF-lichamen en samenstellingen; STEP voor andere onderdeelmodelleurs | {{ui:Openen}} leest STEP als driehoeken en behoudt de platte vlakken, cilinders, kegels, bollen en torussen van het bestand voor de export ([Een STEP-bestand openen](topic:import-step)); {{ui:Exporteren}} › {{ui:STEP AP242 (exact volume)}} schrijft elk analytisch vlak exact en houdt die als facetten ([Exporteren](topic:export-files#for-other-cad-programs-step)); de macro voor een andere onderdeelmodelleur schrijft nog wel zoals voorheen |
| Ware bogen in tekenweergaven | Weergaven en doorsnede-weergaven worden uit de facetten getekend |
| Exacte volumes, oppervlakten en afstanden | {{ui:Meten}} geeft de getallen van het gefacetteerde volume, een beetje laag bij ronde onderdelen; een fijnere instelling **Krommen** brengt ze dichter bij de exacte waarde |

Sommige rijen in de tabellen hieronder noemen een van deze features als manier om iets anders op te lossen. Die suggesties gelden zodra een exacte kern terug is.

## Features

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Vlakafrondingen, volledig ronde afrondingen, afrondingen met stralen die op punten langs een rand zijn ingesteld | Constante of lineair variabele {{ui:Afronden}}; meerdere afrondings-features |
| Wanden met verschillende dikte in een {{ui:Uitholling}} | Eén dikte voor {{ui:Uitholling}}; voeg materiaal toe met extrusies waar een wand dikker moet zijn |
| {{ui:Trekhoek}} op vrije vorm (spline-)vlakken | {{ui:Trekhoek}} werkt op platte, cilindrische en conische vlakken |
| Draaiende vegen, dunnewand- en vlakvegen; eindtangentie bij de loft-feature; een loft met één geleidingsrail; spline-paden | {{ui:Uitvegen}} met een vaste oriëntatie of een eindschaal; een loft met twee of meer geleidingsrails: zie [Uitvegen, loft en trekhoek](topic:sweep-loft-draft) |
| Ribben uit bogen of splines; ribben die vierkant op de schets groeien (vanuit een bovenaanzicht); trekhoek op ribben; meerdere ribben uit één schets | {{ui:Rib}} uit één keten van lijnen in het eigen vlak van de rib: zie [Ribben en knoopplaten](topic:rib) |
| "Omhoog tot" een gekromd vlak, "omhoog tot volgende" stoppend bij een gebogen vlak | Omhoog tot een plat vlak of een referentievlak |
| Tegenboringen, inch- en pijpdraad, taps toelopende draad, draadeinden en afgeschuinde draadstarts | Verzonken boring met kleine diepte; ISO-metrische en trapeziumdraad, cosmetisch of gemodelleerd: zie [Schroefdraad op assen en gaten, getekend of gemodelleerd](topic:threads) |
| Extrusies van dunne features | Teken beide wanden van het profiel |
| Patroonkopieën één voor één overslaan, vulpatronen | Gebruik aparte features; patronen langs een kromme: {{ui:Padpatroon}} |
| Patronen, spiegels, afrondingen, afschuiningen, uitholling en geïmporteerde volumes kopiëren | Kopieer de schets of het feature waarop ze zijn gebouwd, of maak er een patroon van |
| Exacte (G1-)tangentie op bijzondere punten van een vorm; de vlakken van een vorm samenvoegen tot grotere vlakken | Verhoog het Niveau van de vorm: de benaderde vlakken worden kleiner; zie [Vrije vormen met Vorm](topic:form-surfaces) |
| Een vorm uit meerdere losse gesloten stukken in één feature; bruggen tussen vormen | Eén gesloten stuk per Vorm-feature; voeg ze samen met {{ui:Samenvoegen}} |
| Vlakvolumes in de weergave selecteren (behalve de punten van bijsnijden en vlakken); vlakafrondingen; bijsnijden ongedaan maken; G2-vlakken; Gordonvlakken die raken aan gebogen buren (raken aan vlakken en platte vlakken is gebouwd) | Kies ze op naam in het paneel van het feature; verdik eerst, rond daarna het volume af |
| Een lijst van lichamen in de geschiedenis; verborgen lichamen uitsluiten bij exports | Hernoem en verberg lichamen in de lichamenlijst van het onderdeelpaneel; verwijder of onderdruk het feature dat een lichaam maakte om het uit te sluiten |
| Een niet-uniforme schaal die cilinders en kegels analytisch houdt; niet-uniforme schaal van verplaatste vlakken | {{ui:Lichaam schalen}} maakt gekromde vlakken gesloten B-splines (binnen 0.0000004 mm); een uniforme schaal blijft exact |
| Vlaklichamen samenvoegen; Minkowski-sommen | {{ui:Hechten}} of {{ui:Verdikken}} eerst, daarna {{ui:Combineren}} |
| Toleranceanalyse: stapels die hoeken maken (2D- en 3D-vectorlussen), gevoeligheden berekend uit de geometrie, Monte Carlo met andere verdelingen, maattoleranties op schetsmaten, bonustolerantie uit materiaalconditie | {{ui:Toleranceketen}} in een samenstelling: één richting, worst case en RSS, ingetypte toleranties, uit de algemene tolerantie van het titelblok of uit GD&T-kaders: zie [Toleranceketens](topic:tolerance-stackup) |
| Nesten: snijvolgorde en inleidende lijnen, gedeelde randen eenmaal snijden, onderdelen die samen moeten blijven; restanten van rollen, voorraad die tussen projecten wordt gedeeld | {{ui:Platte onderdelen op platen nesten…}} met afstand, marges, draaiingen en korrelrichting: zie [Platte onderdelen op platen nesten](topic:nest-flat-parts); restplaten worden bewaard en eerst gebruikt: zie [Restanten bewaren en opnieuw gebruiken](topic:nest-offcuts); plan het snijden in de eigen software van uw snijmachine |
| Plaatwerk: omslagen, verspringingen, verstek- en contourflenzen; flenzen op gebogen randen of op de vlakken van een gebogen basisflens; geschetste buigingen; hoekafsluitingen; vormgereedschap; een volume omzetten naar plaatwerk; de uitslag van een gebogen basisflens met uitsnijdingen; buigtabellen | {{ui:Basisflens}} (een plaat of een gebogen profiel), {{ui:Randflens}} op rechte randen van een plaat met buigontlasting, en de uitslag met een K-factor: zie [Plaatwerk](topic:sheet-metal) |
| Trekhoekanalyse op samenstellingen; het scheidingsvlak vinden; wanddikteanalyse | {{ui:Trekhoekanalyse}} op het onderdeel in Ontwerp: zie [Trekhoek controleren voor spuitgieten en gieten](topic:draft-analysis); open elk onderdeel van een samenstelling om het te controleren |

## Schetsen

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Ellipsen, raakbogen, kegelsneden, splines met vaste graad of gewichten (NURBS) | Splines (kubisch), bogen en cirkels met raak-relaties |
| Een punt op een spline (een relatie), krommingsrelaties (G2) | Zet het eigen punt van een spline waar hij moet passeren |
| Offsetkopieën van splines die latere wijzigingen volgen; offsets van ketens met scherpe spline-hoeken | Offset opnieuw na de wijziging; rond de hoek eerst af |
| Patroonkopieën die gekoppeld blijven aan het origineel; patronen langs een kromme | Maak het patroon opnieuw na een wijziging |
| Vrije-vorm- of gekantelde cirkelranden projecteren; geprojecteerde geometrie die het onderdeel volgt | Projecteer rechte en evenwijdige cirkelranden en bemaat daarna |
| Aangedreven (referentie-)maten | Lees maten af uit het paneel of de onderdeelgegevens |
| Collineaire relaties | Evenwijdig met een afstand van 0 |
| Plakken in een ander programma (het klembord van het systeem) | Exporteer DXF, STEP, STL of 3MF |
| Bogen typen, relatieve of polaire coördinaten | Typ lijnen en cirkels; teken bogen met het Boog-gereedschap |
| Geometrie selecteren zonder aanwijzer | Vereist een klik of tik |

## Parameters en eenheden

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Configuraties die materialen wijzigen; een CSV-ontwerptabel die features uitzet | Configuraties stellen parameters in en zetten features aan en uit: zie [Configuraties en ontwerptabellen](topic:design-tables); `partcraft variants` bouwt opgeslagen configuraties op naam, ook met uitgezette features: zie [Een variantenpakket maken uit uw configuraties](topic:variant-pack) |
| Vergelijkingen op de getallen in de paneelen van de nieuwste features (vlak, veeg, trekhoek en dergelijke) | Schrijf ze in een script of met `partcraft set` ([Scripts en de opdrachtregel](topic:scripts-and-cli)) |
| Een onderdeel in inches weergegeven | Maten worden in millimeter getoond; typ `2in` in een getalvak of een expressie en het wordt 50.8 |

## Bestanden

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Bewerken van de eigen features van een geïmporteerd STEP-volume (het komt zonder geschiedenis) | Voeg materiaal toe of snijd het weg met uw eigen features |
| Kleuren, namen, samenstellingsstructuur en PMI lezen uit STEP | Niet beschikbaar |
| glTF-, OBJ-, IGES- en Parasolid-export; DWG van een 3D-onderdeel (alleen het variantenpakket schrijft een DWG: het tekenblad) | STL of 3MF voor meshes; STEP voor volumes; DXF voor 2D |
| IGES-, DXF- of eigen bestanden van andere programma's openen (`.3dm`-bestanden openen als één lichaam: [Een .3dm-model openen als volumelichaam](topic:open-3dm-files)) | Vraag om STEP, of een gesloten STL-, OBJ- of 3MF-mesh: [Een STL, OBJ of 3MF openen](topic:open-meshes) |
| Samenstellingsstructuur (een boom met onderdeelnamen) in geëxporteerd STEP | Samenstelling-STEP is één compound van de geplaatste volumes |
| Opslaan in een map naar keuze zonder de download van de browser | Zet "vragen waar op te slaan" aan in de downloadinstellingen van de browser |

## Tekeningen

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Maten buiten de drie totaalmaten (gatmaten, posities, toleranties op maten) | Markeer de PDF, of exporteer DXF en bemaat het in een 2D-CAD-programma |
| Meer dan één doorsnede of detail; uitgelijnde, uitgebroken en hulpaanzichten | Één doorsnede en één detail per tekening |
| Vrije tekst, notities en tabellen op het blad (behalve de titel- en revisieblokken) | De afwerknotitie, of tekst toegevoegd in de PDF |
| Eerste-hoek-projectie, verplaatsbare aanzichten, staande bladen | Derde-hoek, automatische indeling, liggende bladen A4–A0 en ANSI A–E |
| Live doorsnede-weergave: meerdere vlakken of een snijkader tegelijk, een contour rond de snede, de doorsnede opslaan in het bestand | Één vlak tegelijk via {{ui:Weergaven}} › {{ui:Doorsnedeweergave}}; zie [Kijk binnen met een doorsnedeweergave](topic:section-view) |
| Samenstellingstekeningen met meer aanzichten, maten of ballonnen die u kunt verplaatsen | Één isometrisch (of uiteengetrokken) aanzicht met automatische ballonnen en de onderdelenlijst |
| Kopiëren en plakken van GD&T- en afwerksymbolen | Plaats elk met Datum, Kader of Afwerking |
| Handleidingen: STEP-bestanden in Illustrate's {{ui:Vanuit een ander bestand…}}, een model dat direct uit ModelCraft of BimCraft wordt overgedragen, afbeeldingen op de kwaliteit van de padtracer, interactieve 3D in een PDF | Open de STEP in Ontwerp en start de handleiding {{ui:Vanuit het open onderdeel}}; sla het model op als glTF (.glb); PNG-afbeeldingen van de 3D-weergave; het interactieve 3D-bestand: zie [Een handleiding starten in Illustrate](topic:illustrate) |

## Samenstellingen

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Tandwiel-, tandheugel-, nok- en schroefverbindingen; een kogelverbinding beperkt tot een kegel; verbindingen op gebogen vlakken of tussen punten | Stijve, draai-, schuif-, cilindrische, vlakke, kogel- en pen-in-sleufverbindingen op platte vlakken, elke waarde met eigen grenzen: zie [Een samenstelling bouwen](topic:build-assembly) |
| Uiteentrekstappen die onderdelen draaien, en het slepen van onderdelen die verbindingen plaatsen | Rechte uiteentrekstappen; verwijder een verbinding om een onderdeel met de hand te verplaatsen |
| Subsamenstellingen | Eén niveau van onderdelen |
| Tandwielen, nokken, contact | Niet beschikbaar |

## Fabricage

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| 3D-grofbewerking van gekromde vlakken, 3D-adaptief ruimen, restbewerking; waterlijn-, potlood-, radiale en spiraalafwerking; adaptieve banen geschreven als bogen | Vlak-, holte-, 2D-adaptieve, contour-, boor- en afschuinbewerking (2.5-as): zie [Gereedschapsbanen en G-code maken](topic:manufacture); Parallel en Scallop afwerking van het hele model: zie [3D-afwerking](topic:finish-3d) |
| 4- en 5-assige banen, draaien, tasten | Stel één kant tegelijk in met de gereedschapsas op het tabblad Opspanning |
| Controles op houder- en schachtbotsing | Let op de waarschuwingen over de snijkantlengte en controleer in de simulator van uw besturing |
| Tasten, levensduur van gereedschap en subprogramma-cycli, 4e- en 5e-as- en draaibankcodes in een post; postbestanden van andere programma's laden | Schrijf of wijzig een post in het eigen formaat van PartCraft: zie [Postprocessors die u kunt bewerken](topic:post-processors) |
| G-code in inches (G20) | Alleen millimeter (G21) |

## Simulatie en generatief ontwerp

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Niet-lineaire studies: vloeien, grote doorbuigingen, contact tussen onderdelen, vermoeiing | Lineair statisch en eigenfrequenties: zie [Spanning en doorbuiging controleren](topic:simulation); houd de veiligheidsfactor ruim boven 1 |
| Niet-lineair knikken (imperfecties, nakniksgedrag, doorslaan) | Lineaire knikbelastingsfactoren met een ruime marge: zie [Warmte, thermische spanning en knik](topic:thermal-and-buckling) |
| Straling tussen vlakken (zichtfactoren), contactweerstand, temperatuurafhankelijke materialen, traagheid in thermische spanning (thermische schokgolven) | Straling naar de omgeving, stationaire of quasi-statische thermische spanning in de tijd, constante eigenschappen: zie [Warmte, thermische spanning en knik](topic:thermal-and-buckling) |
| Automatische verfijning voor transiënte warmte en studies met een thermische belasting; het mesh grover maken waar de fout klein is; een doel op een lokale grootheid (de piekspanning op één plek) | **Automatisch verfijnen** voor statische, knik-, eigenfrequentie- en stationaire thermische studies, op de fout over het hele onderdeel: zie [Spanning en doorbuiging controleren](topic:simulation); verlaag anders de elementgrootte |
| Lagerbelastingen en boutbelastingen, externe krachten, momenten, veren, voorgeschreven verplaatsingen | Krachten en drukken op vlakken, zwaartekracht; vaste en wrijvingsloze vlakken |
| Simulatie van samenstellingen; materialen die per richting verschillen (geprinte lagen, composieten) | Eén onderdeel, één isotroop materiaal |
| Meerdere solver-threads voor tetraëdrische studies, warmteoverdracht en generatief ontwerp; threads op een pagina die niet cross-origin geïsoleerd is | Voxelstudies, knik, spanning in de tijd en laminaire stroming gebruiken de threads waar de pagina dat toelaat: zie [PartCraft-instellingen](topic:settings) |
| Turbulente stroming met ontwerpnauwkeurigheid (het Spalart–Allmaras-model is als experimenteel opgenomen: buisweerstand 30 tot 34 % te hoog, herhechting na een achterwaartse stap 21 tot 39 % te kort; gepland: fijnere cellen bij de wanden), warmte in stroming, instationaire (tijdsnauwkeurige) stroming, vrije oppervlakken, niet-Newtonse vloeistoffen, roterende onderdelen | Laminaire, stationaire, isotherme stroming van een Newtonse vloeistof, of het experimentele turbulente model voor kwalitatieve patronen: zie [Vloeistofstroming simuleren](topic:flow-simulation); het paneel waarschuwt wanneer het Reynoldsgetal voorbij laminair is |
| Spanningsgrenzen en fabricageregels (overhangen, freesrichtingen) in generatief ontwerp; meerdere materialen in één vorm | Stijfste vorm voor een volume; controleer het resultaat in Simulatie: zie [Een vorm laten groeien uit belastingen](topic:generative-design) |
| Een resultaat als bewerkbaar (glad, parametrisch) volume | STL, gefacetteerde STEP of een onderdeel met het resultaat als geïmporteerd gefacetteerd volume |
| Ontwerp van elektrische machines: een rotor die in een stator draait, koppel tegen hoek, verzadigend staal, magneten die sterkte verliezen voorbij hun knie, wervelstromen en ijzer- en koperverliezen; magnetische velden in 3D of op gekromde meshes | Lineaire 2D-magnetostatica op een rooster in de analysebibliotheek: spoelen, ijzer, permanente magneten op hun terugwaartse lijn, luchtspleten, inductie en trekkracht: zie [Magnetische velden in 2D](topic:magnetic-fields-2d) |

## Scripts

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Hover-hulp, breekpunten en stapsgewijs doorlopen in de scripteditor | Zoeken, vouwen en aanvullen zijn er (zie [Scripts schrijven en uitvoeren](topic:craftscript)); voor de rest uw eigen editor: {{ui:Opslaan}} en {{ui:Openen}} in de groep Script brengen scripts naar binnen en buiten; ingebouwde functies staan in [De CraftScript-taal](topic:craftscript-language) |
| Breekpunten en stapsgewijs door een script lopen | `disp` en `fprintf` onderweg; {{key:Mod+Enter}} voert een paar geselecteerde regels per keer uit |
| Velden en grafieken die een script toont, getekend in de werkomgeving Ontwerp; scripts die de parameters van het onderdeel wijzigen | Ze worden getoond in de werkomgeving Script; scripts lezen parameters met `param` (zie [Scripts schrijven en uitvoeren](topic:craftscript)) en wijzigen ze op het tabblad {{ui:Parameters}} |
| Afbeeldingen en tabellen naast grafieken; een grafiek bewerken (zoom, asgrenzen) voordat u hem opslaat | Naast elkaar toont de grafieken; sla een grafiek op als PNG, SVG of CSV en werk hem elders af |
| numpy en andere Python-pakketten; Python offline; Python vouwen in de editor; Pascal Script | Python-standaardbibliotheek, CraftScript en Lua: zie [Scripts in Python](topic:craftscript-python) |
| Lua-functies doorgeven aan ingebouwde functies; een bibliotheekfunctie vanuit Lua aanroepen met een naam die tijdens het uitvoeren van het script is gemaakt | Schrijf de naam van de bibliotheekfunctie in het script (`cs.static_tet(…)`), of roep haar aan vanuit een CraftScript-script |

## De app

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Opslaan in de cloud, delen en versiegeschiedenis | Nog niet beschikbaar. Sla bestanden op uw computer op en bewaar versies met een naam |
| PartCraft als geïnstalleerde app op iPad en iPhone | Gebruik PartCraft in de browser van het apparaat; op Android en op de desktop werkt het ook in CadCraft Studio (getcadcraft.com/download) |
| Contextmenu's (rechtsklik) | Werkbalk en rechterpaneel |
| Volledig offline werken vanaf een frisse start | Alleen wanneer de app is opgeslagen voor offline gebruik: zie [Offline werken](common:offline) |

Meld wat u het meest mist via de supportpagina van de site: dat bepaalt wat er daarna komt.

## Engineer (generatoren en velden)

| Nog niet beschikbaar | Nu in plaats daarvan |
|---|---|
| Koppen, poorten en fittingen op de gegenereerde warmtewisselaar; temperatuurcurven voor materiaalsterkte; T-stuk-verliezen in het verdeelstuk | De generatoren bouwen de kern en de buizen; voeg fittingen toe in Ontwerp; gebruik de kamertemperatuurwaarden van het materiaal met een veiligheidsfactor |
| Generatoren toevoegen uit de add-on-map met één klik | {{ui:Openen}} in de werkomgeving Engineer voegt een generator toe vanuit een bestand |
| Een veldbestand fijner dan de eigen voxelgrootte van de generator; `.vdb`-bestanden inlezen | Sla een fijner veld op vanuit een script; `.vdb` wordt geschreven, niet gelezen |
| Drukvaatcode-berekeningen | De leerboekformules voor dunne en dikke wanden, met de veiligheidsfactor die u kiest; geen codemarge |
| Generatoren voor de andere apps | Alleen PartCraft in deze versie |
