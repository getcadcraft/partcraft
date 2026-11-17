---
title: Wat is nuut in 0.9
summary: PartCraft 0.9 voeg afrondings tussen vlakke en verdikking tot soliede by, samestellings van duisende onderdele, 'n Dokumente-kluis met hersienings, 'n Solid FEM-spanningsbyvoeging, tien boogmetodes, Britse staalgroottes en 'n Druk-stadium met harsdruk-byvoegings.
keywords: wat is nuut, release notes, veranderinglog, 0.9, afronding tussen vlakke, rollende bal, verskeie kante afrond, verdik, soliede uit oppervlaktes, step-dop, iges-soliede, skandeer-afrondings, groot samestelling, ligte vertoning, 20000 onderdele, dokumente, kluis, uitcheck, hersiening, vrystelling, waar gebruik, rhino-skakel, grasshopper, 3dm, wysers, fabriekvloer, werkrytjie, solid fem, eindige element, von mises, natuurlike frekwensie, boogmetodes, 3-punt-boog, britse staalprofiele, blou boek, druk-stadium, hars, goo, ctb, bed, lê plat, changelog, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, lewendige analise, opdateer tydens wysiging, breek dit, wat breek eerste, lasfaktor, nie-lineêr, vloei, plastiese vervorming, kontak, calculix, bewegingstudie, speling, oppervlaktes, nurbs, gladmaak, romp, zebra, ingenieur, generator, gegenereerde liggaam, skets uit 'n foto, skaal vir druk, verdeel vir druk, krimping, geneste plate, g-code, tekening, dimensioneer gate, assistent, mcp, tale, werkbalkrye
from: 96d9fbfa
---

Dit is wat in PartCraft 0.9 verander het, vergeleke met 0.8.1. Vrye oppervlaktes sluit nou op in soliede, samestellings van duisende onderdele bly bruikbaar, 'n Dokumente-kluis hou hersienings, en 'n Solid FEM-byvoeging toets spanning in 'n onderdeel. Elke item sê waar om dit te vind.

## Nuut in 0.9.1

- **Presiese STEP-uitvoer.** {{ui:Uitvoer}} › {{ui:STEP AP242 (presiese soliede)}} en {{ui:STEP AP214 (presiese soliede)}} werk nou. Gate, verhogings, afrondings, keëls, sfere en torusse word op hul ware oppervlaktes geskryf met ware sirkels as rande, sodat 'n ander CAD- of CAM-program 'n gat as 'n gat kan kies. Spline-sye, gemodelleerde drade en ingevoerde maas bly plat fasette in dieselfde soliede. Sien [Uitvoer vir druk, STEP en DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in, presiese STEP uit.** 'n STEP-lêer wat jy oopmaak, hou sy eie plat vlakke, silinders, keëls, sfere en torusse, so {{ui:Uitvoer}} › {{ui:STEP AP242 (presiese soliede)}} skryf hulle terug as ware oppervlaktes in plaas van fasette: 'n leweransier se balk met boutgate gaan uit met dieselfde vlakke waarmee dit ingekom het, plus wat jy ook al daarin gesny het. Spline-, gesweepte en omgedraaide vlakke van die lêer bly fasette, en so ook liggame van STL, OBJ en 3MF. Maak die STEP-lêer weer oop vir 'n onderdeel wat vroeër gestoor is. Sien [Maak 'n STEP-lêer oop en bou daarop voort](topic:import-step).
- **Ware sirkels in die vlak-DXF.** {{ui:Uitvoer}} › {{ui:DXF van die skets of plat vlak}} met 'n plat vlak gekies, skryf nou ronde gate as sirkels, met die gat se eie middelpunt en radius, vir 'n laser-, plasma- of waterstraaltafel. Ander ronde rande is steeds fasette.
- **Presiese STEP vir die werkplaas.** In {{ui:Vervaardiging}} skryf {{ui:Exact STEP (work coordinates)}} die onderdeel met sy oorsprong by die opstelling se werkoorsprong en Z langs die gereedskapas, die koördinate wat die G-code gebruik. Sien [Maak gereedskapbane en G-code](topic:manufacture#exact-step-for-the-shop).

## Nuut

### Oppervlaktes en soliede

- **Afronding tussen vlakke.** Kies {{ui:Oppervlakke}} in die {{ui:Werkruimte}}-blokkie, en dan {{ui:Afronding tussen vlakke}}. Kies die twee vlakke van een soliede, tik die radius (en {{ui:Radius at the end (mm, 0 = the same)}} vir 'n radius wat langs die rand verander). Die resultaatlyn sê hoe ver die afronding van die ideale rollende bal is, en 'n radius wat nie pas nie, word geweier met die vlak benoem. {{ui:Verskeie kante afrond}} rond baie rande in een stap; merk {{ui:Hoeke (sferiese vlakstuk waar drie ontmoet)}} aan vir 'n sferiese hoek waar drie ronde rande van plat vlakke ontmoet. Sien [Vrye oppervlaktes (NURBS)](topic:nurbs-surfaces).
- **Verdik tot 'n soliede.** {{ui:Verdik tot 'n soliede liggaam}} in dieselfde werkruimte gee 'n oppervlak 'n dikte; {{ui:Ander kant}} laat dit na die ander kant groei. 'n Vou of selfkruising word geweier met die oppervlak en die plek benoem.
- **Soliede uit oppervlaktes.** Getrimde oppervlaktes kan met unie, aftrek en snymerk verbind word en as een ontdoenstap in die onderdeel gebak word. STEP skryf 'n soliede as een geslote skaal en IGES as een soliede; albei lees terug as 'n soliede. As die vlakke nie rand-vir-rand pas nie, kry die lêer aparte vlakke en sê die statuslyn so. Soliede kan ook in die knoopredigeerder gemaak word; sien [Knoopredigeerder](topic:nodes).
- **Rand- en veranderlike afrondings in skanderings.** Wanneer jy oppervlaktes by 'n skandeersel pas, word randafrondings (torusse) en afrondings met veranderlike radius langs 'n redelik reguit rand ook gesoek en met hul radius gelys. Dit is net op nagemaakte skanderings getoets.

### Samestellings, dokumente en skakels

- **Groot samestellings.** Onderdele wat kopieë is, deel een maas, en {{ui:Aansigte}} › {{ui:Ligte vertoning}} teken boksies sodat die aansig aan die beweeg bly (dit skakel self aan vir baie groot samestellings; kies en verbindings gebruik steeds die ware onderdele). Die onderdeelboom wys sy eerste rye en 'n {{ui:Wys 700 meer}}-knoppie vir die res. Samestellingslêers kan tot 50 000 instansies en 100 000 verbindings hou. Sien [Bou 'n samestelling](topic:build-assembly).
- **Dokumente.** {{ui:Dokumente…}} in die **Lêer**-groep open 'n dialoog oor 'n projekvouer: uitcheck en inchecken, hersieningsletters, toestande (werk aan die gang, vir hersiening, vrygestel, verouderd), geskiedenis, waar gebruik en materiaallys. Sien [Dokumente en hersienings (die kluis)](topic:documents-walkthrough).
- **Lewendige Rhino-skakel.** Een skrip, `cadcraft_link.py`, hou 'n Rhino- of Grasshopper-dokument dop en stoot net wat verander het in PartCraft in, waar 'n ingevoerde kenmerk op die nuwe vorm herbou. Dit is eenrigting en benodig Studio. Sien [Lewendige .3dm-skakel](topic:live-3dm-link).
- **Sien mekaar se wysers.** In 'n gedeelde sessie wys elke persoon se wyser met hulle naam en die kenmerk wat hulle gekies het. Sien [Werk lewendig saam met ander](topic:work-live).
- **Fabriekvloer.** Skakel die Fabriekvloer-byvoeging aan in {{ui:Instellings}} › {{ui:Byvoegings}}. Nadat jy 'n program in {{ui:Vervaardiging}} plaas, kan sy oortjie {{ui:Voeg by die fabriek se werkrytjie}} of {{ui:Stoor as 'n werkslêer}}. Dit stuur of begin nooit 'n masjien nie.

### Analise en onderdele

- **Solid FEM-byvoeging.** Skakel {{ui:Solid FEM}} in {{ui:Instellings}} › {{ui:Byvoegings}} aan (dit is af totdat jy dit aanskakel) en 'n {{ui:Solid FEM}}-oortjie verskyn in die regterpaneel. {{ui:Maas die onderdeel}}, kies vaste vlakke en laste in die 3D-aansig, {{ui:Los op}}, en teken verplasing, von Mises-spanning of 'n modusvorm met {{ui:Wys op die model}}. Sien [Solid FEM: 'n spanningstoets](topic:solid-fem-check).
- **Boog in skette, tien maniere.** Die pyltjie langs {{ui:Boog}} in die skets-werkbalk lys 3-Punt, Begin Middelpunt Einde, Begin Middelpunt Hoek, Begin Middelpunt Lengte, Begin Einde Hoek, Begin Einde Rigting, Begin Einde Radius, Middelpunt Begin Einde, Middelpunt Begin Hoek, Middelpunt Begin Lengte en Voortsetting. Sien [Teken 'n boog met tien metodes](topic:sketch-arc-methods).
- **Britse staalgroottes.** Lasstukke kan 976 Britse profiele gebruik (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); tik 'n grootte soos `305x165x40 UB`. Sien [Strukturele lede](topic:structural-members).

### Druk

- **Druk-stadium.** Die {{ui:Druk-stadium}}-knoppie in die werkbalk (byvoeging 3D Print, standaard aan) sit jou onderdeel se liggame op 'n gestreepte bed: {{ui:Lê plat}}, {{ui:Draai 90°}}, {{ui:Rangskik op die bed}}, {{ui:Pas alles op die bed}}, {{ui:Voorskou lae}}, en dan {{ui:Stuur na 3D-drukker}} oor USB, Klipper (Moonraker), OctoPrint of PrusaLink. Niks word gestuur voordat jy bevestig nie, en jou onderdeel word nooit verander nie. Vir 'n STL- of 3MF-lêer, sien [Maak 'n onderdeel gereed vir 3D-druk](topic:print-3d).
- **Harsdruk.** Byvoegings in {{ui:Instellings}} › {{ui:Byvoegings}}, almal af totdat jy hulle aanskakel: 'n harssnyer, 'n blootstellingstoets, en lêerformate Elegoo GOO, SL1, Chitubox CBDDLP/CTB en Anycubic. Snyding loop op 'n werkdraad, so die bladsy bly reageerbaar.

## In elke toepassing

- Elke swewe-wenk is 'n Bootstrap-wenkbalk.
- Die begin-wenk het 'n sluitknoppie; dit bly toe.
- 'n Paneel se ry oortjies wat nie pas nie, rol sywaarts in plaas van om afgesny te word.
- Die blaaieroortjie wys die oop dokument se naam voor PartCraft | CadCraft.
- {{ui:Instellings}} wys die werkruimte-{{ui:Uitleg}} as 'n aftreklys van keuses, en die taalblokkie lys elke taal wat die bou het.
- Gewig en Temperatuur is eenheidsoorte in die Eenhede-instellings.

## Reggestel

- Die skets-Boog-kieslys lys nou elke metode.
- Die byvoegingswerkbalk en die blaaieroortjie se titel is op 2026-11-09 reggestel.

## Eerlike beperkings

- Presiese STEP is in OpenCascade terug gelees (geldige soliede, volumes gelyk aan die wat met die hand bereken is). Dit is nog nie in elke CAD- of CAM-program oopgemaak nie, en 'n samestelling word nie as presiese STEP geskryf nie.
- Niks is nog op 'n werklike drukker gedruk nie. Snyding, G-code en harslêers is deur ons eie programme of 'n plaasvervangende drukker teruggelees; geen van die harsformate is op 'n drukker gelaai nie, en drukkergroottes en blootstellings is beginpunte.
- Solid FEM is lineêr, isotropies en elasties, een materiaal per onderdeel, sonder kontak, vloei of knik. Spanning by vaste vlakke en skerp hoeke hang af van die maas. Dit is 'n nagaanhulpmiddel, nie deur 'n ingenieur hersien nie.
- Tydmetings vir groot samestellings kom van 'n bediener sonder 'n GPU; 'n volbesonderde raam van 20 000 onderdele neem daar steeds sekondes.
- Afrondings werk op pare vlakke; daar is geen algemene hoekpuntmenging nie en geen afronding tussen vlakke wat nie ontmoet nie.
- Die Rhino-skakel het nog nooit binne werklike Rhino of Grasshopper geloop nie. Dokumente is deur twee programme op een vouer getoets, nie deur twee mense op 'n netwerkdeel nie.
- Passing van oppervlaktes op 'n werklike skandeersel het nog nie 'n handnagaan gehad nie. Tale behalwe Engels is masjienkonsepte.
- Windows-installeerders is nie kode-geteken nie, en die macOS-skyfbeeld is nie genotariseer nie. Sien [Foutoplossing](topic:troubleshooting).

Vroeër veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).

## Vroeër: 0.8 en 0.8.1

Dit is wat in PartCraft 0.8 en 0.8.1 verander het, vergeleke met 0.7. Die simulasie antwoord terwyl jy wysig en vertel jou wat eerste breek, samestellings kry bewegingstudies, en nuwe werkruimtes maak vrye oppervlaktes en onderdele wat uit fisika gedimensioneer is. 0.8.1 is 'n klein reparasie-vrystelling.

### Nuut

**Simulasie**

- **Opdateer tydens wysiging.** Merk {{ui:Werk op terwyl ek wysig}} aan in die Los op-blok, en die antwoorde volg jou wysigings. Verander 'n dimensie, 'n las of die materiaal en 'n vinnige antwoord, gemaak met elemente vier keer groter, verskyn dadelik; wanneer jy vir ongeveer 'n sekonde stop, vervang die studie se eie verfynde antwoord dit. Die resultate sê watter een jy kyk. Op 'n staal-uitkraging was die vinnige antwoord binne 1 % op verplasing en ongeveer 4 % op spanning van die verfynde een. Sien [Kontroleer spanning en verplasing](topic:simulation#update-while-you-edit-live).
- **Wat breek eerste.** Vir 'n statiese of knikstudie skaal {{ui:What breaks first?}} in die **Breek dit**-blok die laste totdat die onderdeel swig. Dit lys, ergste eerste, die lasfaktor tot eerste vloei (met 'n rooi merker waar die spanning piek) en die lasfaktor tot knik. 'n Faktor onder 1 beteken die onderdeel swig reeds soos gelaai, en Probleme wys 'n fout. Die faktore kom uit 'n lineêre studie, so hulle is net so goed as dit. Sien [Kontroleer spanning en verplasing](topic:simulation#find-out-what-breaks-first-break-it).
- **Vloei en kontak.** Twee meer studietipes: 'n nie-lineêre een waar die materiaal sy reguit lyn tot die vloeispanning volg en dan 'n platter helling, met plastiese vervorming geplot, en 'n kontakstudie waar aparte stukke teen mekaar druk (wrywingloos) of vas bly (gebind). 'n Laststap wat nie kan setel nie, of stukke wat te ver in mekaar sak, wys in die Probleme-paneel. Wrywing, groot gly, groot rotasies, groot verplasings en vermoeidheid word nie opgelos nie. Sien [Kontroleer spanning en verplasing](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Lêers vir CalculiX.** {{ui:Uitvoer}} › {{ui:CalculiX-lêer (.inp)}} stoor die studie vir CalculiX, 'n aparte program wat jy self installeer en laat loop; {{ui:Uitvoer}} › {{ui:CalculiX-resultate (.frd)}} lees sy resultaatlêer terug op dieselfde maas. PartCraft begin nooit daardie program nie, en dit sê so as die onderdeel verander het sedert die lêer gestoor is.

**Samestellings**

- **Bewegingstudies.** {{ui:Samestelling}} › {{ui:Beweging}} dryf een verbinding se waarde oor 'n tyd wat jy gee (konstante spoed, versag, sinus, of uit en terug), plaas die samestelling by elke stap met sy verbindings en geslote lusse, en rapporteer wat botsings en hoe na onderdele kom. {{ui:Voeg 'n punt by}} plot 'n punt se posisie, spoed en versnelling, die verbinding se waarde en die speling teen tyd; {{ui:Stoor CSV}} en {{ui:Stoor grafiek}} skryf hulle uit. Na {{ui:Voer uit}}, beweeg die Stap deur-knoppies in die lopiebalk die samestelling na enige stap. Die studie se instellings word in die samestellingslêer gestoor. Spoed en versnelling kom uit die opgeneemde posisies, so gebruik meer stappe as 'n skerp piek laag lees. Sien [Kontroleer 'n samestelling vir botsings en beweging](topic:check-assembly#a-motion-study).

**Oppervlaktes en onderdele uit fisika**

- **'n Oppervlakke-werkruimte.** Kies {{ui:Oppervlakke}} in die {{ui:Werkruimte}}-blokkie vir NURBS-krommes en -oppervlaktes langs die onderdeel: {{ui:Kromme}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Pas aan}} en {{ui:Zebra}}, met kontinuïteit (G0, G1 of G2) gemeet op die presiese oppervlaktes, en 'n rand wat slegter is as wat jy gevra het, gelys in Probleme met 'n Pas aan-regstelling. {{ui:Gladmaak}} meet romplyne vir buigpunte en kromming-spronge en herbou die onbillike binne jou toleransie. Oppervlaktes word in die onderdeellêer gestoor en verander nie die onderdeel se kenmerke nie. Sien [Vrye oppervlaktes (NURBS)](topic:nurbs-surfaces).
- **Die Ingenieur-werkruimte.** Kies {{ui:Ingenieur}} in die werkruimte-wisselaar, kies 'n generator en klik {{ui:Nuut}}: 'n skrip dimensioneer 'n onderdeel uit wat dit moet doen (hitte om te beweeg, vloeie, druk, materiaal, drukproses) met handboekformules en bou dit, en gee dan die getalle terug wat dit gebruik het met hulle bronne, sy vervaardigingstoetse en lêers vir ontledingsgereedskap. Dieselfde insette gee dieselfde onderdeel op enige rekenaar. Die generator word in die onderdeel bewaar, en om 'n onderdeel oop te maak, loop nooit 'n skrip nie. Sien [Onderdele uit fisika: generators](topic:engineer-generators) en [Skryf 'n generator](topic:write-a-generator).

**Skets, tekeninge en maak**

- **'n Skets uit 'n foto.** {{ui:Kenmerke}} › {{ui:Meer}} › {{ui:Skets uit 'n foto…}} trek 'n prent van 'n plat onderdeel op 'n effe grond (omtrek en gate) of 'n pen-tekening in lyne, boë en sirkels. Jy gee een lengte, kontroleer die voorskou en maak die skets. Sien [Skets-grondbeginsels](topic:sketch-basics#a-sketch-from-a-photo).
- **Skaal en verdeel vir druk.** {{ui:Uitvoer}} › {{ui:Skaal vir druk (STL of 3MF)…}} skaal per as sonder om die onderdeel te verander, byvoorbeeld met 'n krimptoelae. {{ui:Uitvoer}} › {{ui:Verdeel vir druk (’n zip van stukke)…}} sny 'n onderdeel wat te groot is vir jou bed in genommerde stukke wat met penne, sleutels, swaelstertjies, dowelgate of magneetsakke verbind word. Sien [Druk in 3D](topic:print-3d).
- **Geneste plate na G-code.** {{ui:Uitvoer}} › {{ui:Geneste plate na G-code}} lees 'n geneste DXF en maak een program per plaat deur die postprosessor wat jy kies: gate en uitsnedes eerste, dan die omtrekke. Dit beplan nie inlei-lyne, die snyvolgorde of gedeelde rande nie. Sien [Rangskik plat onderdele op plate](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tekeninge wat meer self doen.** {{ui:Blad}} › {{ui:Outomaties}} kies die kleinste A-grootte blad wat die aansigte hou, by die grootste standaardskaal tot 1:1. {{ui:Dimensioneer die gate}} plaas 'n middelpuntmerk op elke gat, een uitroep per grootte en die posisies vanaf die aansig se linkeronderhoek. Sien [Maak 'n tekening](topic:drawing-pdf).

**In elke toepassing**

- **Tale.** Die toepassings kom in 54 tale. Dié behalwe Engels is masjienkonsepte totdat 'n moedertaalspreker dit lees.
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} kies Omslaan (soos vroeër), 2 rye of 1 ry; 'n balk wat nie pas nie, rol sywaarts. PartCraft se Kenmerk-lint wys die mees gebruikte gereedskap groot en steek variante agter 'n verdeelknoppie weg.
- **Koppel jou KI.** Studio is die middelpunt om 'n assistent van jou eie aan al agt toepassings te koppel, met lees-alleen-, voorstel- of redigeerregte per toepassing. 'n Gekoppelde assistent kan 'n onderdeel uit 'n sin dimensioneer, soos 'n beugel vir 'n las, sy werk en elke toets wys, en dit bou; dit rapporteer wat dit nie nagegaan het nie (spanningskonsentrasie, vermoeidheid, kruip in plastiek). Sien [Gebruik PartCraft met 'n KI-assistent](topic:use-with-ai-assistants).

### Reggestel in 0.8.1

- **Volskerm-wyserbevriesing.** Die swewe-keuse is nou gedemp. Die oorsaak is ons beste lesing en is nie met die persoon wat dit gerapporteer het, bevestig nie.
- **Taal tydens uitvoering.** Studio en die gepakte weergawes kan tydens uitvoering van taal wissel; vroeër was dit net Engels. Dit is nog nie op elke platform getoets nie: laat ons weet as die taal nie verander nie.

### Nog nie in hierdie weergawe nie

- Koppel jou KI is nie klaar nie: een-klik-koppeling binne Studio, die gehuisveste koppelaar vir blaaier-KI, jou eie API-sleutel binne Studio en die gepubliseerde MCP-pakket word nie belowe nie. Studio het nie self KI nie.
- Studio is nie kode-geteken nie: Windows kan waarsku, en macOS vra regsklik en dan Oop. Sien [Foutoplossing](topic:troubleshooting).
- Toleransiestapels is nog een rigting: sien [Toleransiestapels](topic:tolerance-stackup).
- Die res word gelys in [Wat nog nie gebou is nie](topic:not-built-yet).

Vroeër veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).
