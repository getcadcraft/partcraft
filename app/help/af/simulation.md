---
title: Kontroleer spanning en deurbuiging (Simulasie)
summary: Kies 'n materiaal, vas vlakke, voeg kragte, drukke of die onderdeel se eie gewig by, los op, en lees von Mises-spanning, verplasing, veiligheidsfaktor, reaksies en natuurlike frekwensies op die model, met wat die metode kan en nie kan sê nie.
keywords: simulasie, EEM, lewendige analise, opdateer terwyl jy wysig, breek dit, wat breek eerste, lasfaktor, nie-lineêr, plastisiteit, swig, plastiese vervorming, bilineêr, kontak, kontakpaar, straf, gebind, wrywinglose kontak, CalculiX, .inp, .frd, eindige element, spanning, vervorming, von Mises, verplasing, deurbuiging, veiligheidsfaktor, faktor van veiligheid, swigpunt, reaksie, las, krag, druk, swaartekrag, eie gewig, vas, wrywingloos, ondersteuning, beperking, materiaal, staal, aluminium, titanium, ABS, PLA, nylon, natuurlike frekwensie, modaal, vibrasie, maas, elementgrootte, tetraëdries, tetraëdra, tet-maas, voksel, maaskwaliteit, hoofspanning, ekwivalente vervorming, foutskatting, geboë vlakke, gate, rond, verfyning, outomatiese verfyning, h-aanpasbaar, konvergensie, maaskonvergensie, presiese oppervlak, sfeer, kegel, torus, spline, vrye vorm
from: 6f2fdec1
---

Die Simulasie-werkruimte antwoord "sal dit buig of breek onder hierdie las?" vir die onderdeel wat jy modelleer. Dit is 'n **lineêr statiese** studie (klein vervormings, die materiaal bly elasties) of 'n **natuurlike frekwensie**-studie, opgelos op 'n maas van kwadratiese tetraëders wat die onderdeel se vlakke volg (of, as jy kies, van klein gelyke kubusse). Dit werk op die benoemde vlakke wat die maaskern aan die onderdeel gee (sien [Die maaskern](topic:solid-kernels)).

Kies **Simulasie** in die **Werkruimte**-blokkie links van die nutsbalk. Jou onderdeel word nie verander nie; die studie word binne die onderdeellêer gestoor, en elke verandering daaraan kan ongedaan gemaak word.

## Stel 'n studie op

1. Druk **Nuwe studie** in die regterpaneel.
2. Kies die **Materiaal**. Die paneel wys sy styfheid (E), Poisson se verhouding, digtheid en vloeisterkte. Die waardes is tipiese handboekgetalle; jou verskaffer se gesertifiseerde waardes kan verskil.
3. Kies die **Maas**:
   - **Tetraëdries (akkuraat)**, die verstek: 10-knoop-tetraëders waarvan die buitevlakke op die onderdeel se vlakke lê, met geboë rande op gate, afrondings en ander ronde vlakke. Die knope op plat, silindriese, koniese, sferiese en torusvlakke, omwentelde en ge-ekstrudeerde vlakke en vrye-vorm (B-spline)-vlakke lê op die presiese oppervlak; enige ander soort vlak volg sy vertoonmaas, en die resultatetabel sê hoeveel vlakke dit gedoen het. Die maas word self fyner naby geboë vlakke, dun wande en skerp rande.
   - **Voksel-kubusse (vinnig)**: die onderdeel gevul met gelyke kubusse. Vinnig, maar geboë vlakke word trappe. Studies wat voor die tetraëdermaas gestoor is, behou dit.
4. Laat **Elementgrootte** leeg vir 'n outomatiese grootte (ongeveer 12 000 tetraëders, of 20 000 kubusse), of tik een in millimeter. Die paneel wys ongeveer hoeveel elemente dit maak voordat die fyner plekke bygevoeg word. Met tetraëders verfyn **Kleiner elemente op geboë vlakke** (standaard aan) gate en afrondings, waar spanning gewoonlik piek.

### Verfyn outomaties

Met tetraëders bied 'n statiese of knik-studie (sonder 'n termiese las), 'n natuurlike-frekwensiestudie en 'n bestendige termiese studie **Verfyn outomaties (aanpasbaar)** aan. Merk dit en stel:

- **Teikenfout (%)**: oplossing stop wanneer die geskatte fout daaronder is (1 % om mee te begin).
- **Meeste deurgange**: die meeste oplossings wat dit mag doen (5 om mee te begin, hoogstens 10).

Elke deurgang los op, vind die elemente met die grootste geskatte fout, verdeel hulle (en so min bure as nodig om die maas heel te hou), en los weer op. Nuwe knope op geboë vlakke gaan op die presiese oppervlak. Die resultate wys dan 'n tabel en 'n grafiek met, vir elke deurgang, die elemente, die onbekendes, die geskatte fout en die piekspanning (of temperatuur) en verplasing (of hitte-vloed), en 'n reël wat sê waarom dit gestop het: die teiken is bereik, die deurgange is op, die volgende maas sou te groot wees, of 'n deurgang het misluk (dan sien jy die laaste goeie deurgang).

Lees die skatting as 'n skatting. Dit (Zienkiewicz–Zhu; vergeleke met presiese antwoorde lees dit ongeveer 0.6 tot 0.95 van die ware fout) meet die fout oor die **hele onderdeel**, so 'n piekspanning by 'n gat of 'n afronding is gewoonlik nog 'n bietjie af wanneer die skatting klein lyk: vir 'n spanningskonsentrasie, stel die teiken onder 1 % en kyk hoe die piek van deurgang tot deurgang stabiliseer. By 'n skerp binnehoek of die rand van 'n vaste vlak is die ware spanning oneindig, so die skatting bereik dit nooit nie: die deurgange raak eerder op.

**Natuurlike frekwensies en knik.** By 'n natuurlike-frekwensiestudie dek die skatting elke modus wat jy gevra het, elk gelyk getel; die tabel en grafiek volg die eerste twee frekwensies. By 'n onderdeel met net plat vlakke kan 'n frekwensie van deurgang tot deurgang net afneem (elke maas hou die een voor dit); geboë vlakke kom ook nader aan hul ware vorm, wat 'n frekwensie 'n bietjie na enige kant kan skuif. Vir knik dek die skatting die voorspanning en die knikmodusse, en die tabel volg die lasfaktore. Nagegaan op 'n 100 × 10 × 10 mm staafstaal: die eerste frekwensie stabiliseer van 812.4 tot 811.9 Hz oor vier deurgange, 0.4 % onder Euler–Bernoulli (wat skuif ignoreer), en die kolom se lasfaktor binne 0.5 % van Euler.

## Hou dit vas en laai dit

Elke studie benodig ten minste een ondersteuning en, vir spanning, een las.

1. Druk {{ui:Vas}} in die nutsbalk. Die nuwe ondersteuning is gekies en wag vir vlakke: klik die vlakke wat stilgehou word (klik 'n vlak weer om dit te laat vaar). Druk **Klaar met kies** of {{key:Esc}} wanneer jy klaar is. Blou keëls merk die vasgehoue vlakke.
2. Druk {{ui:Krag}} en klik die vlakke waarop die krag werk. In die paneel tik die **Totale krag** in newton en kies sy **Rigting**: in die vlak in, of langs 'n as. Die krag word oor die gekose vlakke volgens oppervlakte verdeel. Oranje pyle wys dit.
3. Druk {{ui:Druk}} vir 'n druk in MPa (N/mm²) wat in die gekose vlakke druk; 'n negatiewe druk trek.

Meer soorte is in die paneel se **Voeg by**-lys: 'n **Wrywinglose vlak** (die vlak mag langs homself gly maar nie daarvan wegbeweeg nie — gebruik dit vir simmetrievlakke en gladde ondersteunings) en **Swaartekrag** (die onderdeel se eie gewig, 9.81 m/s², in die rigting wat jy kies).

'n Ondersteuning wat die onderdeel vry laat om te gly of te draai, word geweier, en die boodskap sê watter beweging vry gelaat word.

## Los op en lees die resultate

Druk {{ui:Los op}}. Die werk loop op die agtergrond; **Stop** kanselleer dit. Dan:

- Die onderdeel word gekleur volgens **von Mises-spanning**; kies **Verplasing** of **Veiligheidsfaktor** in **Wys**. Die legenda gee die skaal.
- Wys na die onderdeel om die waardes onder die wyser te lees.
- Merk **Vervormde vorm** om die onderdeel gebuig te sien (die beweging word vergroot deur die **Skaal**; die werklike een is dié van die tabel).
- Die tabel lys die grootste spanning en waar dit is, die grootste verplasing, die kleinste **veiligheidsfaktor** (vloeisterkte ÷ von Mises-spanning; onder 1 begin die materiaal swig), die toegepaste las en die **reaksies** by die ondersteunings (hulle balanseer die las), en die maas wat gebruik is.

Vir **natuurlike frekwensies**, kies daardie **Tipe**, stel hoeveel **Modusse**, en los op. Elke modus wys sy frekwensie en vorm (vorms word geskaal na 1 by hul grootste beweging).

As jy die onderdeel verander, word die resultate as verouderd gemerk: los weer op.

## Swig en kontak (nie-lineêre studies)

Twee meer studietipes gaan verby "die materiaal bly elasties":

- **Nie-lineêr (materiaal swig)** volg die materiaal se reguit lyn tot by sy vloeispanning, en dan 'n platter helling (**Helling na swig**, 1 % van E as dit leeg gelaat word). Die las gaan voort in **Lasstappe**; 'n stap wat nie stabiliseer nie, word outomaties gehalveer. Die resultate voeg **Plastiese vervorming** by die grafieke en sê hoeveel van die las gedra is. As 'n stap steeds nie kan stabiliseer nie, stop die studie by die laaste goeie stap en die ⚠ Probleme-paneel sê waar: die onderdeel het daar sy sterkte verloor (ineenstorting), of die stappe is te groot.
- **Kontak tussen stukke** laat afsonderlike stukke van die onderdeel teen mekaar druk. Voeg 'n **Kontakpaar** by, kies die vlakke van kant A (die vlakke wat druk) met {{ui:Kies vlakke}}, en dan kant B met {{ui:Kies kant B-vlakke}}. **Wrywinglose** stukke druk, gly en skei; **gebinde** stukke bly vas. Elke stuk word op sy eie gemaas, so 'n klein gaping tussen hulle is goed. Kontak is 'n strafmetode: die stukke sak 'n bietjie in mekaar in (die **strafkoëffisiënt** × E ÷ elementgrootte bepaal hoe styf die kontak is). Die tabel wys die diepste insinking, en die Probleme-paneel waarsku wanneer dit meer as 1 % van die elementgrootte is: verhoog die koëffisiënt of gebruik kleiner elemente.

Albei gebruik die tetraëdermaas. Wrywing, groot gly en groot rotasies word hier nie opgelos nie.

## Laat dit in CalculiX loop

**Uitvoer › CalculiX-deklaag (.inp)** (of {{ui:Stoor 'n CalculiX-deklaag (.inp)}} in die paneel) stoor die studie as 'n invoerdeklaag vir CalculiX, 'n afsonderlike program wat jy self installeer en laat loop: dieselfde maas, materiaal, ondersteunings, laste en kontakpare, in mm, N en MPa. Laat dit loop, en dan lees **Uitvoer › CalculiX-resultate (.frd)** sy resultaatlêer terug op dieselfde maas en wys die verplasing (en von Mises-spanning as die lêer spannings bevat). As jy die onderdeel of die elementgrootte intussen verander het, is die maas nie dieselfde nie en PartCraft sê dit: stoor 'n nuwe deklaag.

## Hoe ver om dit te vertrou

PartCraft toets sy oplosser teen handformules ('n kantilever se punt-deurbuiging PL³/3EI binne 1 %, 'n staaf se rek PL/AE presies, 'n kantilever se eerste frekwensie binne 3 %, die spanning rondom 'n gat in 'n plaat). Hou egter hierdie grense in gedagte:

- **Die maas.** Met tetraëders toets PartCraft 'n kantilever se deurbuiging en buigspanning (binne 0.3 %), die spanning by 'n gat in 'n plaat (Kt, binne ongeveer 1 %), 'n dik buis onder druk (Lamé, binne 0.3 %) en die eerste frekwensie (binne 0.4 %). Die tabel wys die **maaskwaliteit** (die kleinste en grootste hoeke tussen elementvlakke; onder ongeveer 10° is 'n element swak) en 'n **geskatte spanningsfout**: as dit meer as 'n paar persent is, los weer op met 'n kleiner elementgrootte, of laat **Verfyn outomaties** dit doen. By 'n plaat met 'n gat en 'n staaf met twee randkerwe het outomatiese verfyning binne 1 % van die handboek-Kt gekom met ongeveer 'n sesde van die onbekendes wat 'n fyner maas oor die hele onderdeel nodig gehad het. Met voksel-kubusse is 'n gat of 'n afronding 'n trap op die kubusgrootte, so spanning daar is ru.
- **Skerp binnehoeke en die rande van vaste vlakke het geen ware piekspanning nie.** Die waarde daar groei aanhoudend soos die elemente kleiner word. Lees spannings 'n bietjie weg van sulke plekke af, of rond die hoek in die model af.
- **Resultate om te lees.** Behalwe von Mises-spanning, verplasing en veiligheidsfaktor, wys 'n tetraëderstudie die **maksimum en minimum hoofspanning** (trek en druk) en die **ekwivalente vervorming**. Merk **Wys maas** om die elemente te sien.
- **Statiese studies is lineêr en elasties.** Vir swig en kontak gebruik die nie-lineêre studietipes hierbo; groot deurbuigings en vermoeiing word nie opgelos nie. Hitte, termiese spanning en lineêre knik is hul eie studietipes: sien [Hitte, termiese spanning en knik](topic:thermal-and-buckling).
- **Elke materiaal is dieselfde in alle rigtings.** 3D-gedrukte plastiek is swakker oor hul lae, dikwels met 'n derde of meer.
- Dit is 'n laboratoriumbou: kontroleer onderdele wat saak maak op 'n ander manier.

## Opdateer terwyl jy wysig (Lewendig)

Merk **Opdateer terwyl ek wysig** in die Los op-blokkie, en die Simulasie-antwoorde volg jou wysigings. Verander 'n maat, 'n las, die materiaal of die omgewing, en 'n **vinnige antwoord** verskyn dadelik, gemaak met elemente vier keer groter as dié van die studie; wanneer jy 'n oomblik stilhou ('n sekonde of so), vervang die studie se eie **verfynde antwoord** dit. Die resultate sê watter een jy kyk ("Vinnige antwoord" of "Verfynde antwoord") en die elementgrootte. Die vinnige antwoord is goed vir rigting en grootte: op 'n staal-kantilever was dit binne 1 % op deurbuiging en ongeveer 4 % op spanning van die verfynde een. Vertrou die verfynde een vir getalle wat jy sal gebruik. Statiese, natuurlike-frekwensie-, termiese en knikstudies werk so; Lewendig is 'n aansigsinstelling en word nie in die onderdeel gestoor nie. 'n Los op wat jy self druk, bly soos dit is tot die volgende wysiging.

## Vind uit wat eerste breek (Breek dit)

Vir 'n statiese of knikstudie, druk **Wat breek eerste?** in die **Breek dit**-blokkie. PartCraft skaal die studie se laste (krag, druk en gewig saam) op totdat die onderdeel swig en lys, swakste eerste, **die lasfaktor tot eerste swig** (die faktor op vandag se laste waarby die hoogste von Mises-spanning die materiaal se vloeispanning bereik, met 'n rooi merker waar dit gebeur) en **die lasfaktor tot knik** vir dieselfde ondersteunings en laste. 'n Faktor van 4.3 beteken die onderdeel neem 4.3 keer sy las voordat dit swig; **'n faktor onder 1 beteken dit gee reeds toe soos belaai**, en dit verskyn in die Probleme-lys as 'n fout (die swakste bevinding word as 'n nota gewys selfs wanneer alles hou). Die faktore kom van 'n lineêre studie op tetraëders by jou elementgrootte, so is hulle so goed as daardie studie: die spanning by 'n vaste vlak of 'n skerp hoek het geen ware piek nie (sien hieronder), en die swigfaktor sal daar aan die versigtige kant wees. Jou assistent kan dieselfde kontrole met die `break_run`-hulpmiddel laat loop.

## Verwant

- [Hitte, termiese spanning en knik](topic:thermal-and-buckling)
- [Groei 'n vorm uit laste (Generatief)](topic:generative-design)
- [Meet afstande, hoeke en massa](topic:measure)
- [Wat nog nie gebou is nie](topic:not-built-yet)
