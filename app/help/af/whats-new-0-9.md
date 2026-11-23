---
title: Wat is nuut in 0.9 (vroeër)
summary: PartCraft 0.9 voeg filets tussen vlakke en verdiking in soliede liggame by, samestellings van duisende dele, 'n Dokumente-kluis met hersienings, 'n Solid FEM-spanningsbyvoeging, tien boogmetodes, Britse staalgroottes, 'n Druk-stadium en harsdrukbyvoegings.
keywords: wat is nuut 0.9, vroeëre vrystelling, wat is nuut, vrystellingsnotas, veranderinglys, 0.9, fillet tussen vlakke, rollende bal, fillet verskeie rande, verdik, soliede liggaam uit oppervlakke, step-dop, iges-soliede liggaam, skandeer-fillets, groot samestelling, ligte vertoning, 20000 dele, dokumente, kluis, uitcheck, hersiening, vrystelling, waar gebruik, Rhino-skakel, grasshopper, 3dm, aanwysers, fabrieksvloer, werkrij, solid fem, eindige element, von mises, natuurlike frekwensie, boogmetodes, 3-punt-boog, britse staalprofiele, blou boek, druk-stadium, hars, goo, ctb, bed, plat lê, wat is nuut, vrystellingsnotas, veranderinglys, veranderinge, 0.8, 0.8.1, weergawe, nuwe funksies, lewendige analise, opdateer terwyl jy wysig, breek dit, wat breek eerste, lasfaktor, nie-lineêr, swigting, plastiese vervorming, kontak, calculix, bewegingstudie, speling, oppervlakke, nurbs, gladmaak, skrog, zebra, ingenieur, generator, gegenereerde liggaam, skets uit 'n foto, skaal vir druk, verdeel vir druk, krimp, geneste velle, g-kode, tekening, dimensioneer gate, assistent, mcp, tale, gereedskapbalkrye
from: 1dafd7c8
---

Dit is wat in PartCraft 0.9 verander het, vergeleke met 0.8.1. Vormoppervlakke sluit nou op tot soliede liggame, samestellings van duisende dele bly bruikbaar, 'n Dokumente-kluis hou hersienings, en 'n Solid FEM-byvoeging toets spanning in 'n onderdeel. Elke item sê waar om dit te vind.

## Nuut in 0.9.1

- **Presiese STEP-uitvoer.** {{ui:Uitvoer}} › {{ui:STEP AP242 (presiese soliede)}} en {{ui:STEP AP214 (presiese soliede)}} werk nou. Gate, uitsteeksels, filets, keëls, sfere en torusse word op hul ware oppervlakke geskryf, met ware sirkels as rande, sodat 'n ander CAD- of CAM-program 'n gat as 'n gat kan kies. Spline-sye, gemodelleerde drade en ingevoerde meshes bly plat fasette in dieselfde soliede liggaam. Sien [Uitvoer vir druk, STEP en DXF](topic:export-files#for-other-cad-programs-step).
- **STEP in, presiese STEP uit.** 'n STEP-lêer wat jy oopmaak, behou sy eie plat vlakke, silinders, keëls, sfere en torusse, sodat {{ui:Uitvoer}} › {{ui:STEP AP242 (presiese soliede)}} hulle terugskryf as ware oppervlakke in plaas van fasette: 'n leweransier se balk met boutgate gaan uit met dieselfde vlakke waarmee dit ingekom het, plus wat jy ook al daarin gesny het. Spline-, geswaaide en omwentelde vlakke van die lêer bly fasette, en so ook liggame uit STL, OBJ en 3MF. Maak die STEP-lêer weer oop vir 'n onderdeel wat vroeër gestoor is. Sien [Maak 'n STEP-lêer oop en bou daarop](topic:import-step).
- **Ware sirkels in die vlak-DXF.** {{ui:Uitvoer}} › {{ui:DXF van die skets of plat vlak}} met 'n plat vlak gekies, skryf nou ronde gate as sirkels, met die gat se eie middelpunt en radius, vir 'n laser-, plasma- of waterstraaltafel. Ander ronde rande bly fasette.
- **Presiese STEP vir die werkplek.** In {{ui:Vervaardiging}} skryf {{ui:Presiese STEP (werkskoördinate)}} die onderdeel met sy oorsprong by die opstelling se werkoorsprong en Z langs die gereedskapas, die koördinate wat die G-kode gebruik. Sien [Maak gereedskapbane en G-kode](topic:manufacture#exact-step-for-the-shop).

## Nuut

### Oppervlakke en soliede liggame

- **Fillet tussen vlakke.** Kies {{ui:Oppervlakke}} in die {{ui:Werkruimte}}-blokkie, dan {{ui:Fillet tussen vlakke}}. Kies die twee vlakke van een soliede liggaam, tik die radius (en {{ui:Radius aan die einde (mm, 0 = dieselfde)}} vir 'n radius wat langs die rand verander). Die resultaatreël sê hoe ver die fillet van die ideale rollende bal af is, en 'n radius wat nie pas nie, word geweier met die vlak genoem. {{ui:Fillet verskeie rande}} rond baie rande in een stap af; merk {{ui:Hoeke (sferiese vlakstuk waar drie ontmoet)}} vir 'n sferiese hoek waar drie afgeronde rande van plat vlakke ontmoet. Sien [Vrye oppervlakke (NURBS)](topic:nurbs-surfaces).
- **Verdik tot 'n soliede liggaam.** {{ui:Verdik tot 'n soliede liggaam}} in dieselfde werkruimte gee 'n oppervlak 'n dikte; {{ui:Ander kant}} laat dit na die ander kant groei. 'n Vou of self-kruising word geweier met die oppervlak en die plek genoem.
- **Soliede liggame uit oppervlakke.** Getrimde oppervlakke kan met vereniging, aftrek en snymerk verbind word en as een ontdoenstap in die onderdeel gebak word. STEP skryf 'n soliede liggaam as een geslote dop en IGES as een soliede liggaam; albei lees terug as 'n soliede liggaam. As die vlakke nie kant-vir-kant pas nie, kry die lêer afsonderlike vlakke en sê die statusreël dit. Soliede liggame kan ook in die nodige redigeerder gemaak word; sien [Nodige redigeerder](topic:nodes).
- **Rand- en veranderlike filets in skanderings.** Wanneer jy oppervlakke by 'n skandering pas, word randfilets (torusse) en veranderlike-radius filets langs 'n redelik reguit rand ook gesoek en met hul radius gelys. Dit is slegs op gemaakte skanderings getoets.

### Samestellings, dokumente en skakels

- **Groot samestellings.** Dele wat kopieë is, deel een mesh, en {{ui:Aansigte}} › {{ui:Ligte vertoning}} teken bokse sodat die aansig aan die beweeg bly (dit skakel self aan vir baie groot samestellings; kies en verbindings gebruik steeds die werklike dele). Die deelboom wys sy eerste rye en 'n knoppie {{ui:Wys 700 meer}} vir die res. Samestellingslêers kan tot 50 000 gevalle en 100 000 verbindings hou. Sien [Bou 'n samestelling](topic:build-assembly).
- **Dokumente.** {{ui:Dokumente…}} in die **Lêer**-groep open 'n dialoog oor 'n projekgids: uitcheck en incheck, hersieningsletters, toestande (werk aan die gang, vir hersiening, vrygestel, verouderd), geskiedenis, waar-gebruik en die materiaallys. Sien [Dokumente en hersienings (die kluis)](topic:documents-walkthrough).
- **Lewendige Rhino-skakel.** Een skrip, `cadcraft_link.py`, hou 'n Rhino- of Grasshopper-dokument dop en stoot net wat verander het in PartCraft, waar 'n ingevoerde kenmerk op die nuwe vorm herbou. Dit is een rigting en benodig Studio. Sien [Lewendige .3dm-skakel](topic:live-3dm-link).
- **Sien mekaar se aanwysers.** In 'n gedeelde sessie wys elke persoon se aanwyser met hul naam en die kenmerk wat hulle gekies het. Sien [Werk lewendig saam met ander](topic:work-live).
- **Fabrieksvloer.** Skakel die Fabrieksvloer-byvoeging aan in {{ui:Instellings}} › {{ui:Byvoegings}}. Nadat jy 'n program in {{ui:Vervaardiging}} gepos het, kan sy oortjie {{ui:Voeg by die fabriek se werkrij}} of {{ui:Stoor as 'n werklêer}}. Dit stuur of begin nooit 'n masjien nie.

### Analise en dele

- **Solid FEM-byvoeging.** Skakel {{ui:Solid FEM}} aan in {{ui:Instellings}} › {{ui:Byvoegings}} (dit is af totdat jy dit doen) en 'n {{ui:Solid FEM}}-oortjie verskyn in die regterpaneel. {{ui:Meshe die onderdeel}}, kies vaste vlakke en laste in die 3D-aansig, {{ui:Los op}}, en teken verplasing, von Mises-spanning of 'n modusvorm met {{ui:Wys op die model}}. Sien [Solid FEM: 'n spanningskontrole](topic:solid-fem-check).
- **Boog in skette, tien maniere.** Die pyltjie langs {{ui:Boog}} in die sketsbalk lys 3-Punt, Begin Middelpunt Einde, Begin Middelpunt Hoek, Begin Middelpunt Lengte, Begin Einde Hoek, Begin Einde Rigting, Begin Einde Radius, Middelpunt Begin Einde, Middelpunt Begin Hoek, Middelpunt Begin Lengte en Gaan voort. Sien [Teken 'n boog op tien maniere](topic:sketch-arc-methods).
- **Britse staalgroottes.** Staafwerk kan 976 Britse profiele gebruik (UB, UC, PFC, EA, UEA, CHS, SHS, RHS); tik 'n grootte soos `305x165x40 UB`. Sien [Strukturele lede](topic:structural-members).

### Druk

- **Druk-stadium.** Die {{ui:Druk-stadium}}-knoppie in die werkbalk (byvoeging 3D-druk, standaard aan) sit jou onderdeel se liggame op 'n gestippelde bed: {{ui:Plat lê}}, {{ui:Draai 90°}}, {{ui:Rangskik op die bed}}, {{ui:Pas alles op die bed}}, {{ui:Voorskou lae}}, en dan {{ui:Stuur na 3D-drukker}} oor USB, Klipper (Moonraker), OctoPrint of PrusaLink. Niks word gestuur voordat jy bevestig nie, en jou onderdeel word nooit verander nie. Vir 'n STL- of 3MF-lêer, sien [Maak 'n onderdeel gereed vir 3D-druk](topic:print-3d).
- **Harsdruk.** Byvoegings in {{ui:Instellings}} › {{ui:Byvoegings}}, almal af totdat jy hulle aanskakel: 'n hars-snyer, 'n blootstellingstoets, en lêerformate Elegoo GOO, SL1, Chitubox CBDDLP/CTB en Anycubic. Snyding loop op 'n werkdraad, sodat die bladsy reaktief bly.

## In elke app

- Elke sweef-wenk is 'n Bootstrap-geleentheidsnotasie.
- Die beginwenk het 'n sluitknoppie; dit bly toe.
- 'n Paneel se ry oortjies wat nie pas nie, rol sywaarts in plaas daarvan om afgesny te word.
- Die blaaieroortjie wys die oop dokument se naam voor PartCraft | CadCraft.
- {{ui:Instellings}} wys die werkruimte-{{ui:Uitleg}} as 'n aftreklys van keuses, en die taalblokkie lys elke taal wat die bou het.
- Gewig en Temperatuur is eenheidsoorte in die Eenheidinstellings.

## Reggestel

- Die skets-Boogkieslys lys nou elke metode.
- Die byvoegings-werkbalk en die blaaieroortjie-titel is op 2026-11-09 reggestel.

## Eerlike beperkings

- Presiese STEP is in OpenCascade teruggelees (geldige soliede liggame, volumes gelyk aan dié wat met die hand uitgewerk is). Dit is nog nie in elke CAD- of CAM-program oopgemaak nie, en 'n samestelling word nie as presiese STEP geskryf nie.
- Niks is nog op 'n werklike drukker gedruk nie. Snyding, G-kode en harslêers is deur ons eie programme of 'n stand-in-drukker teruggelees; geen harsformaat is op 'n drukker gelaai nie, en drukkergroottes en blootstellings is beginwaardes.
- Solid FEM is lineêr, isotropies en elasties, een materiaal per onderdeel, sonder kontak, swigting of knak. Spanning by vaste vlakke en skerp hoeke hang van die mesh af. Dit is 'n kontrolehulpmiddel, nie deur 'n ingenieur hersien nie.
- Lae-tyd-meetings kom van 'n bediener sonder 'n GPU; 'n volledige-detail raam van 20 000 dele neem daar nog sekondes.
- Filets werk op pare vlakke; daar is geen algemene hoekvermenging nie en geen fillet tussen vlakke wat nie ontmoet nie.
- Die Rhino-skakel het nog nooit binne werklike Rhino of Grasshopper geloop nie. Dokumente is deur twee programme op een gids getoets, nie deur twee mense op 'n netwerkdeel nie.
- Die pas van oppervlakke aan 'n werklike skandering is nog nie met die hand nagegaan nie. Tale behalwe Engels is masjienontwerpe.
- Windows-installeerders is nie kode-onderteken nie, en die macOS-skyfbeeld is nie genotariseer nie. Sien [Foutoplossing](topic:troubleshooting).

Vroeër veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).

## Vroeër: 0.8 en 0.8.1

Dit is wat in PartCraft 0.8 en 0.8.1 verander het, vergeleke met 0.7. Die simulasie antwoord terwyl jy wysig en sê vir jou wat eerste breek, samestellings kry bewegingstudies, en nuwe werkruimtes maak vormoppervlakke en onderdele wat volgens fisika bemeet is. 0.8.1 is 'n klein regstellingsvrystelling.

### Nuut

**Simulasie**

- **Opdateer terwyl ek wysig.** Merk {{ui:Opdateer terwyl ek wysig}} in die Los op-blok aan, en die antwoorde volg jou wysigings. Verander 'n afmeting, 'n las of die materiaal, en 'n vinnige antwoord, gemaak met elemente vier keer groter, verskyn dadelik; wanneer jy vir ongeveer 'n sekonde stop, vervang die studie se eie verfynde antwoord dit. Die resultate sê watter een jy kyk. Op 'n staal-kantlewer was die vinnige antwoord binne 1 % op defleksie en ongeveer 4 % op spanning van die verfynde een. Sien [Kontroleer spanning en defleksie](topic:simulation#update-while-you-edit-live).
- **Wat eerste breek.** Vir 'n statiese of knakstudie skaal {{ui:Wat breek eerste?}} in die **Breek dit**-blok die laste totdat die onderdeel swig. Dit lys, ergste eerste, die lasfaktor tot eerste swigting (met 'n rooi merker waar die spanning piek) en die lasfaktor tot knak. 'n Faktor onder 1 beteken die onderdeel swig al soos gelaai, en Probleme wys 'n fout. Die faktore kom uit 'n lineêre studie, so hulle is net so goed as dit. Sien [Kontroleer spanning en defleksie](topic:simulation#find-out-what-breaks-first-break-it).
- **Swigting en kontak.** Twee meer studietipes: 'n nie-lineêre een waar die materiaal sy reguit lyn tot die vloeispanning volg en dan 'n platter helling, met plastiese vervorming geplot, en 'n kontakstudie waar afsonderlike stukke op mekaar druk (wrywingloos) of vas bly (gebind). 'n Lasstap wat nie kan vestig nie, of stukke wat te ver in mekaar sak, wys in die Probleme-paneel. Wrywing, groot gly, groot rotasies, groot defleksies en vermoeidheid word nie opgelos nie. Sien [Kontroleer spanning en defleksie](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Ontwerpe vir CalculiX.** {{ui:Uitvoer}} › {{ui:CalculiX-ontwerp (.inp)}} stoor die studie vir CalculiX, 'n aparte program wat jy installeer en self uitvoer; {{ui:Uitvoer}} › {{ui:CalculiX-uitslae (.frd)}} lees sy uitslaglêer terug op dieselfde mesh. PartCraft begin nooit daardie program nie, en dit sê so as die onderdeel verander het sedert die ontwerp gestoor is.

**Samestellings**

- **Bewegingstudies.** {{ui:Samestelling}} › {{ui:Beweging}} dryf een verbinding se waarde oor 'n tyd wat jy gee (konstante spoed, versag, sinus of uit-en-terug), plaas die samestelling by elke stap met sy verbindings en geslotte lusse, en rapporteer wat botsing en hoe na dele kom. {{ui:Voeg 'n punt by}} plot 'n punt se posisie, spoed en versnelling, die verbinding se waarde en die speling teenoor tyd; {{ui:Stoor CSV}} en {{ui:Stoor grafiek}} skryf hulle uit. Ná {{ui:Voer uit}} beweeg die Stap deur die lopie-balk die samestelling na enige stap. Die studie se instellings word in die samestellingslêer gestoor. Spoed en versnelling kom uit die opgetekende posisies, so gebruik meer stappe as 'n skerp piek laag lees. Sien [Kontroleer 'n samestelling vir botsings en beweging](topic:check-assembly#a-motion-study).

**Oppervlakke en onderdele uit fisika**

- **'n Oppervlakwerkruimte.** Kies {{ui:Oppervlakke}} in die {{ui:Werkruimte}}-blokkie vir NURBS-krommes en -oppervlakke langs die onderdeel: {{ui:Kromme}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Pas aan}} en {{ui:Zebra}}, met kontinuïteit (G0, G1 of G2) gemeet op die presiese oppervlakke, en 'n rand wat slegter is as wat jy gevra het, gelys in Probleme met 'n Pas aan-regstelling. {{ui:Gladmaak}} meet skrog-lyne vir buigpunte en kromming-sprongs en bou die onregmatige weer binne jou toleransie. Oppervlakke word in die onderdeellêer gestoor en verander nie die onderdeel se kenmerke nie. Sien [Vrye oppervlakke (NURBS)](topic:nurbs-surfaces).
- **Die Ingenieur-werkruimte.** Kies {{ui:Ingenieur}} in die werkruimte-skakelaar, kies 'n generator en klik {{ui:Nuut}}: 'n skrip bemeet 'n onderdeel uit wat dit moet doen (hitte om te beweeg, vloeie, druk, materiaal, drukproses) met handboekformules en bou dit, gee dan die getalle terug wat dit gebruik het met hul bronne, sy vervaardigingskontroles en lêers vir analise-gereedskap. Dieselfde insette gee dieselfde onderdeel op enige rekenaar. Die generator word in die onderdeel gehou, en om 'n onderdeel oop te maak, loop nooit 'n skrip nie. Sien [Onderdele uit fisika: generators](topic:engineer-generators) en [Skryf 'n generator](topic:write-a-generator).

**Skets, tekeninge en maak**

- **'n Skets uit 'n foto.** {{ui:Kenmerke}} › {{ui:Meer}} › {{ui:Skets uit 'n foto…}} volg 'n prent van 'n plat onderdeel op 'n gewone grond (omtrek en gate) of 'n pentekening in lyne, boë en sirkels. Jy gee een lengte, kontroleer die voorskou en maak die skets. Sien [Beginsels van skets](topic:sketch-basics#a-sketch-from-a-photo).
- **Skaal en verdeel vir druk.** {{ui:Uitvoer}} › {{ui:Skaal vir druk (STL of 3MF)…}} skaal per as sonder om die onderdeel te verander, byvoorbeeld vir 'n krimptoelae. {{ui:Uitvoer}} › {{ui:Verdeel vir druk (’n zip van stukke)…}} sny 'n onderdeel wat te groot is vir jou bed in genommerde stukke wat met penne, sleutels, swaelstertjies, dowelgate of magneetsakke verbind is. Sien [Druk in 3D](topic:print-3d).
- **Geneste velle na G-kode.** {{ui:Uitvoer}} › {{ui:Geneste velle na G-kode}} lees 'n geneste DXF en maak een program per vel deur die pos wat jy kies: gate en uitsnye eerste, dan die omtrekke. Dit beplan nie inlope, die snyvolgorde of gedeelde rande nie. Sien [Rangskik plat onderdele op velle](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tekeninge wat meer self doen.** {{ui:Blad}} › {{ui:Outomaties}} kies die kleinste A-grootte blad wat die aansigte hou, teen die grootste standaardskaal tot 1:1. {{ui:Dimensioneer die gate}} sit 'n middelpuntmerk op elke gat, een uitroeping per grootte en die posisies vanaf die aansig se linkeronderhoek. Sien [Maak 'n tekening](topic:drawing-pdf).

**In elke app**

- **Tale.** Die apps kom in 54 tale. Dié behalwe Engels is masjienontwerpe totdat 'n moedertaalspreker dit lees.
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} kies Wrap (soos vroeër), 2 rye of 1 ry; 'n balk wat nie pas nie, rol sywaarts. PartCraft se Kenmerklint wys die mees gebruikte gereedskap groot en steek varianten agter 'n gesplete knoppie weg.
- **Koppel jou KI.** Studio is die middelpunt om 'n assistent van jou eie aan al agt apps te koppel, met alleen-lees-, voorstel- of wysigreg per app. 'n Gekoppelde assistent kan 'n onderdeel uit 'n sin bemeet, soos 'n hyser vir 'n las, sy werk en elke kontrole wys, en dit bou; dit rapporteer wat dit nie nagegaan het nie (spanningskonsentrasie, vermoeidheid, kruip in plastiek). Sien [Gebruik PartCraft met 'n KI-assistent](topic:use-with-ai-assistants).

### Reggestel in 0.8.1

- **Volskermcursor-vries.** Die sweefkeuse word nou verminder. Die oorsaak is ons beste lesing en is nie met die persoon wat dit gerapporteer het, bevestig nie.
- **Taal tydens uitvoering.** Studio en die gepakte uitgawes kan tydens uitvoering van taal wissel; voorheen was dit net Engels. Dit is nog nie op elke platform getoets nie: laat ons weet as die taal nie verander nie.

### Nog nie in hierdie weergawe nie

- Koppel jou KI is nie klaar nie: eenklik-koppeling binne Studio, die gehoste koppelaar vir blaaier-KI, jou eie API-sleutel binne Studio en die gepubliseerde MCP-pakket word nie belowe nie. Studio het geen KI van sy eie nie.
- Studio is nie kode-onderteken nie: Windows kan waarsku, en macOS vra vir regsklik en dan Oop. Sien [Foutoplossing](topic:troubleshooting).
- Toleransiestapels is nog een rigting: sien [Toleransiestapels](topic:tolerance-stackup).
- Die res word gelys in [Wat nog nie gebou is nie](topic:not-built-yet).

Vroeër veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).
