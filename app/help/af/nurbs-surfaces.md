---
title: Vrye-vorm-oppervlaktes (NURBS)
summary: Gladde krommes en oppervlaktes langs die onderdeel — loft, sweep, kromme-netwerke, vierrand-lappe, oorgange, snitte — met G0-, G1- en G2-kontinuïteit gemeet op die presiese oppervlaktes, soliede met unie, aftrek en snyding in die onderdeel gebak, sebra- en krommingaansigte, vlakke wat by 'n skandeering gepas is met die fout gemeet, en STEP- of IGES-lêers. Bewaar in die onderdeellêer.
keywords: nurbs, skandeer, omgekeerde ingenieurswese, pas, maas na oppervlak, puntwolk, stl, snit, gesnede, gat, sny, soliede, boolean, unie, aftrek, snyding, verskil, naat, geslote, bak, vry-vorm, oppervlak, oppervlaktes, b-spline, bspline, kromme, spline, loft, sweep, rail, netwerk, coons, lap, oorgang, pas aan, kontinuïteit, g0, g1, g2, raaklyn, krommming, sebra, kontrolepunte, knope, graad, step, iges, klas a, romp, gladmaak
from: 64ed5196
---

Die **Oppervlaktes**-werkruimte maak gladde krommes en oppervlaktes van die soort wat gebruik word vir produkskille, motorliggame en bootrompe: NURBS, dieselfde wiskunde wat ander oppervlaktemodelleerders gebruik. Alles word op die presiese oppervlaktes gemeet, nooit op die driehoeke wat jy sien nie. Groottes is in millimeter, soos in die res van PartCraft.

Kies **Oppervlaktes** in die **Werkruimte**-kassie. Die nutsbalk het {{ui:Curve}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Match}} en {{ui:Zebra}}; elke opdrag is in die paneel aan die regterkant. 'n Opdrag sê wat dit nog nodig het: klik krommes of oppervlaktes in die aansig (naby 'n rand of 'n einde wanneer dit een vra) of kies hulle uit die lys; tik punte, of klik hulle op die onderdeel se vlakke (buite die onderdeel land hulle op die grondvlak), en druk dan Enter.

Die krommes en oppervlaktes word in die onderdeellêer naas die soliede gestoor. Hulle verander nie die onderdeel se kenmerke nie: die paneel het sy eie **Ontdoen** en **Herdoen**, een stap per opdrag.

## Krommes

- **Kromme deur punte** gaan deur elke punt wat jy klik. **Kromme by kontrolepunte** volg 'n raamwerk van punte in plaas daarvan.
- **Voeg knoop in**, **Verhoog graad** en **Verlaag graad** verander hoe 'n kromme beskryf word sonder om dit te skuif (verlaag weier wanneer die kromme meer as die toleransie sou beweeg). **Herbou kromme** gee dit 'n nuwe aantal kontrolepunte en sê hoe ver dit beweeg het.
- **Pas kromme** laat die einde van een kromme by 'n ander aansluit met G0 (raak), G1 (dieselfde rigting) of G2 (dieselfde kromming ook). **Oorgang-kromme** voeg 'n nuwe kromme tussen twee einde by, G1 of G2.

## Oppervlaktes

- **Loft** deur twee of meer krommes, **Reguit oppervlak** tussen twee, **Stoot kromme uit**, **Roteer kromme**.
- **Sweep langs een rail** dra 'n profiel langs 'n pad sonder om dit te draai; **Sweep langs twee rails** hou die profiel se ente op albei rails. Sweeps word gepas: die uitkoms sê hoe na dit by die ware sweep gebly het.
- **Oppervlak uit 'n kromme-netwerk** gaan deur 'n rooster krommes (elk kruis elk van die ander een keer). **Lap uit vier rande** vul vier krommes wat by hul hoeke aansluit.
- **Pas oppervlak** laat 'n oppervlakrand by 'n buur aansluit met G0, G1 of G2; **Oorgang-oppervlak** voeg 'n oppervlak tussen twee rande by.
- **Verskuif oppervlak**, **Verleng oppervlak** (die oppervlak gaan voort soos dit was), **Herbou oppervlak**.

## Kwaliteit nagaan

Die tabel **Gedeelde rande** lys elke rand wat twee oppervlaktes deel, met die gaping (mm), die hoek daartussen (°) en die kromming-sprong (1/mm), en of dit G0, G1 of G2 maak. 'n Rand wat slegter is as wat jy gevra het, verskyn in **Probleme** met 'n **Pas**-herstelling. **Sebra**-strepe en **kromming**-kleure kom van die presiese oppervlak: strepe wat ononderbroke oor 'n rand loop, beteken G1; strepe wat ook hul breedte behou, beteken G2.

G0–G2 word gemeet, op 33 punte per rand. **G3 en "klas A"-kwaliteit word nie gemeet nie** en word nie beweer nie.

## Oppervlak trim

Die **Trim**-groep sny 'n oppervlak sonder om sy vorm te verander: die oppervlak hou al sy kontrolepunte, en slegs die deel binne die omtrek word getoon, getel en geskryf. **Trim tot 'n reghoek** en **Trim met 'n sirkel** werk op 'n aandeel (0 tot 1) van die oppervlak in elke rigting, so hulle benodig geen kies in die aansig nie; **Trim deur 'n kromme** neem 'n geslote kromme wat op die oppervlak lê (dit word in die oppervlak geprojekteer, en word in woorde geweier wanneer dit oop is of meer as die toleransie weg is). Merk **Sny 'n gat** om die binnekant van die omtrek te verwyder; laat dit af om slegs die binnekant te hou. 'n Oppervlak kan een gehoue omtrek en enige aantal gate hê; 'n omtrek wat ander een kruis, word geweier. **Verwyder die trim** wys die hele oppervlak weer. Die paneel se Ontdoen neem 'n trim terug soos enige ander stap.

STEP dra die trim as die vlak se grense, en IGES as 'n getrimde oppervlak (entiteit 144); albei lees dit terug.

## Soliede en Booleans

Die **Soliede**-groep maak oppervlaktes tot geslote liggame en kombineer hulle. 'n Soliede hier is 'n stel van die paneel se eie oppervlaktes wat saam 'n volume sluit; die vlakke bly presiese NURBS-oppervlaktes met hul trims.

- **Blokkie-soliede**, **Silinder-soliede** en **Sfeer-soliede** maak een uit getikte groottes (in mm): 'n blokkie van ses plat vlakke, 'n silinder van 'n ronde sy en twee plat ente getrim tot die sirkel, 'n sfeer van een geroteerde oppervlak.
- **Soliede uit oppervlaktes** groepeer oppervlaktes wat jy self gemaak het. Kies hulle, of kies niks om elke getoonde oppervlak wat nog nie in 'n soliede is nie, te gebruik. Hulle word binne die toleransie aaneengenaai: as hulle nie sluit nie, verander niks nie en die paneel sê hoeveel rande oop bly en hoe na hulle moet aansluit.
- **Unie**, **Aftrek** (die tweede soliede word van die eerste afgeneem) en **Snyding** (net wat albei deel) neem twee soliede: klik 'n vlak van elk in die aansig, of druk **Kies** in die **Soliede**-lys. Merk **Hou die twee soliede** om hulle naas die resultaat te laat.

'n Boolean hou elke vlak op sy eie presiese oppervlak en sny dit met nuwe trim-omtrekke langs die snyding. Die resultaatlyn gee die gemeten getalle: hoe ver die soliede-enjin se punte moes beweeg om op die presiese oppervlaktes te sit (nooit meer as die toleransie nie), hoe na die snypunte aan albei oppervlaktes is (gewoonlik 'n paar miljoenste van 'n millimeter), die volume, en of die nuwe vlakke weer sluit wanneer hulle vars aan hul presiese oppervlaktes aaneengenaai word. Volumes word op driehoeke binne die toleransie gemeet (0,05 mm tensy jy 'n ander stel), so 'n sfeer of silinder se volume lees effens onder die presiese een: 'n kleiner toleransie kom nader. 'n Boolean wat nie netjies gedoen kan word nie (die soliede deel niks, 'n omtrek sou homself kruis) word in woorde geweier en verander niks nie. Een Boolean is een stap van die paneel se **Ontdoen**.

In die **Soliede**-lys hou **Ontgroepeer** die vlakke as gewone oppervlaktes; die vuilbak verwyder die soliede en sy vlakke.

## Afrondings en verdikking

**Afrond tussen vlakke** rond die rand af waar twee vlakke van een soliede ontmoet: kies die twee vlakke (in die aansig, of met **Kies** in die lys), tik die **radius** en, vir 'n radius wat langs die rand verander, die **radius aan die einde** (0 hou een radius). 'n Bal van daardie radius word langs die rand gerol en raak albei vlakke; die afronding is die presiese sirkelboog wat dit by elke punt laat, saamgevoeg in een oppervlak, en die twee vlakke word getrim waar die bal hulle raak. 'n Buitenste rand verloor materiaal, 'n binnehoek wen dit. Die resultaatlyn gee wat gemeet is: hoe ver die afrondingsoppervlak van die rollende bal is tussen die punte waaruit dit gebou is (punte word bygevoeg totdat dit binne 'n kwart van die toleransie is), die grootste hoek tussen die afronding en elke vlak langs die raaklyne, en dieselfde getalle as 'n Unie. 'n Radius wat nie pas nie (die bal sou 'n vlak verlaat, of 'n vlak buig skerper as die radius) word geweier en die vlak genoem, en niks verander nie.

**Rond verskeie rande af** rond baie rande in een stap af: kies die twee vlakke van die eerste rand, dan die twee vlakke van die volgende, en so voort ('n vlak kan in verskeie pare wees, byvoorbeeld die boonste vlak van 'n blokkie in vier van hulle); alle rande kry die radius wat jy tik. Elke afronding word op die soliede soos dit was uitgewerk, en dan word hulle een ná die ander gesny, so die volgorde maak nie saak nie. Waar twee afgeronde rande by 'n hoek ontmoet waarvan die ander rande skerp bly, loop die twee afrondings in mekaar langs hul snykromme (’n vou). Waar drie afgeronde buitenste rande van drie plat vlakke wat haaks op mekaar staan met een radius ontmoet, is die hoek een **sferiese lap** wat raak aan al drie afrondings (ontmerk **Hoeke** om die hoek met die vou te kry); 'n rand moet ten minste twee keer die radius lank wees waar albei ente sulke hoeke is. Die resultaatlyn sê hoeveel rande afgerond is en hoe die hoeke uitgekom het. Binnerande kan ook saam afgerond word, maar 'n resultaat wat nie weer sluit nie, word net gerapporteer (die lyn sê so), so kontroleer dit.

**Verdik tot 'n soliede** gee 'n oppervlak 'n dikte: kies dit, tik die **dikte**, en merk **Ander kant** om dit die ander kant toe te laat groei. Die verskuifde vlak word by die oppervlak gepas en daarteen gemeet (die resultaatlyn gee die grootste verskil van die dikte); mure volg elke rand en elke trim-omtrek. As die oppervlak aan daardie kant skerper buig as die dikte, of 'n ander deel daarvan lê nader as die dikte, word dit geweier, die oppervlak en die plek word genoem, en niks verander nie.

## Bak 'n soliede in die onderdeel

**Bak** (in die Oppervlaktes-nutsbalk), of **Bak in die onderdeel** in die **Soliede**-lys, maak die soliede 'n liggaam van die onderdeel, soos 'n oopgemaakte STL een word: kies die soliede, of dit **bygevoeg** word aan die onderdeel, **gesny** daaruit of **gesnyd** daarmee, en die toleransie (hoe ver die driehoeke van die presiese oppervlaktes mag wees). Dit is een stap van die onderdeel se Ontdoen en verskyn in die kenmerklys as 'n invoer wat na die soliede genoem is. Die onderdeel hou die driehoeke, so dit maak oop en bou weer sonder die oppervlaktes; die presiese soliede bly in Oppervlaktes, so jy kan dit weer bak ná 'n verandering.

## Lêers

Voer **STEP** (AP242) of **IGES** uit met die krommes en oppervlaktes presies soos hulle is (B-spline-krommes en -oppervlaktes, niks in driehoeke omgesit nie). Elke oppervlak is sy eie vlak, met sy trim; 'n soliede word as een geslote skaal geskryf, elke rand gedeel deur sy twee vlakke soos ander CAD-programme verwag (die statuslyn sê hoeveel soliede so uitgegaan het). In IGES is dieselfde soliede een variëteit-soliede B-rep (entiteit 186 oor geslote skaal 514, vlakke 510, lusse 508, een randlys 504 en een puntlys 502); 'n soliede waarvan die vlakke nie rand vir rand pas nie, word as afsonderlike vlakke geskryf, en die lyn sê so. **Invoer…** lees so 'n soliede terug as 'n soliede, uit STEP en uit IGES.

## Skeepsrompe fyn maak

**Fyn** (in die Oppervlaktes-nutsbalk) meet elke kromme op sy presiese vorm — buigpunte (waar dit van die een buigrigting na die ander verander), die grootste kromming, kromming-sprong by sy knope en sy ruwheid — en herbou die krommes met 'n buigpunt of 'n sprong met die minste kontrolepunte wat binne die toleransie bly wat jy gee en geen buigpunt byvoeg nie. Teken die spantlyne, waterlyne en buttocks as krommes, maak hulle fyn, en **Loft** dan die romp deur die spantlyne en kontroleer met **Sebra**. Onfyn krommes verskyn ook in **Probleme** met 'n **Maak hierdie kromme fyn**-herstelling. 'n Lyn wat bedoel is om van rigting te verander (’n S-vormige snit) hou daardie een buigpunt. Die romp se verplasing, middelpunte en regopstellende arms kom uit die soliede onderdeel: sien die hidrostatika-gereedskap.

## Oppervlaktes uit 'n skandeering (omgekeerde ingenieurswese)

Maak die onderdeel oop wat die geskandeerde maas hou (’n oopgemaakte STL of 'n gebakte liggaam), kies **Oppervlaktes** in die **Werkruimte**-kassie, en kies in die **Skandeer**-groep **Pas oppervlaktes by die skandeering**; die onderdeel se gebou-maas is die skandeering. Die gereedskap soek na **vlakke**, **silinders**, **sfere** en **keëls** (die presiese oppervlaktes waaruit 'n gemasineerde onderdeel bestaan; elke ry wys die radius of halfhoek wat dit gevind het), vind **afrondings** (ronde rande en hoeke: 'n klein silinder of sfeer wat raak aan twee of meer ander vlakke, met sy radius en die vlakke wat dit verbind), **randafrondings** (’n torus: die ronde rand waar 'n plat vlak 'n silinder of keël ontmoet, met sy radius en sy ringradius) en **veranderlike afrondings** (’n ronde rand waarvan die radius langs hom verander, met die radius by elke einde), pas **een vrye-vorm-lap** aan 'n gladde, sagbuigende stuk, en sny elke vlak tot die omtrek van die deel van die skandeering waaruit dit kom, so gate en hoeke bly. Opsies: die **toleransie** (hoe ver, in mm, 'n skandeerpunt van 'n vlak of silinder mag wees en steeds daarby hoort, en die teiken vir 'n vrye-vorm-lap), die **kleinste stuk** ('n aandeel van die oppervlakte) en die **meeste vlakke**. Dieselfde skandeering en opsies gee altyd dieselfde vlakke.

Die uitkoms is 'n tabel, een ry per vlak: sy soort, hoeveel driehoeke dit uit kom, en die fout **gemeet van die skandeering na die vlak** (rms, die grootste, en die aandeel punte binne die toleransie). Die punte wat gemeet word, is die skandeering se hoekpunte en die middel van elke driehoek. Die fout word nie die ander kant toe gemeet nie (vlak na skandeering), so 'n vlak wat verder as die skandeering strek, sou nie wys nie. Die nota onder die tabel sê ook hoeveel van die oppervlakte te klein was om te pas. In die aansig word die skandeerpunte gekleur volgens hul **afwykingskaart**: blou op die vlak, groen halfpad na die toleransie, rooi by die toleransie of meer (ontmerk **Wys die afwykingskaart** om dit te verberg). Stukke wat op hulself terugvou (’n geslote buis wat met vrye-vorm-lappe gepas is, byvoorbeeld) word as nie-gepas gelys, en word nooit in een oppervlak gedwing nie.

**Steek die oppervlaktes tot 'n soliede** naai elke getoonde oppervlak wat nie in 'n soliede is nie aaneen tot een geslote soliede. Skandeervlakke ontmoet net binne die skandeering se eie fout, so dit probeer die kleinste verbindingsafstand wat sluit (nooit meer as die **naatafstand** wat jy stel nie) en weier in woorde wanneer die vlakke nie sluit nie. Dit vul nooit 'n gaping toe nie. 'n Blokkie met afgeronde rande steek as sy afrondings as eie vlakke gevind is; die verbindingsafstand wat gesluit het, staan in die uitkoms. Die soliede werk dan met Unie, Aftrek, Snyding en **Bak in die onderdeel**.

Wat dit nie doen nie: 'n **randafronding** (’n torus) word net rondom die as van 'n reeds gevonde silinder of keël gesoek, en 'n **veranderlike afronding** net langs 'n redelik reguit rand (sy snitte is haaks op een rigting gesny); elders kom hulle uit as vrye-vorm-lappe wanneer gladde genoeg, en word anders weggelaat; sfere, keëls en afrondings word deur ewekansige steekproewe gevind, so 'n baie klein een (’n paar driehoeke) kan gemis word; die afwykingskaart wys die afstand van die skandeering na die vlakke, nie die ander kant toe nie; baie groot skanderings (meer as 300 000 driehoeke) word hier geweier. Vlakke van 'n silinder met 'n volle draai word rondom gate gesny, met die naat waar daar geen gat is nie. Kontroleer elke vlak teen jou skandeering voordat jy daarop staatmaak.

## Nog nie gebou nie

Rande afrond wat by 'n hoek van geboë vlakke of met verskillende radiusse ontmoet (’n hoekoorgang), 'n afronding tussen vlakke wat nie ontmoet nie, 'n binne-afronding wat op 'n skuins of geboë vlak eindig, Booleans en afrondings wat op die oppervlaktes sonder driehoeke bereken word (hier werk die soliede-enjin op driehoeke binne die toleransie, en elke punt word dan terug op die presiese oppervlaktes gesit), 'n gebakte liggaam wat die oppervlaktes volg wanneer hulle verander, 'n oppervlak trim deur 'n ander oppervlak buite 'n Boolean, gate met meer as vier sye vul, krommes op oppervlaktes projekteer.
