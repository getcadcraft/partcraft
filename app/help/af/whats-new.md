---
title: Wat is nuut in 0.8 en 0.8.1
summary: PartCraft 0.8 voeg lewendige ontleding by terwyl jy wysig, 'n Wat breek eerste-kontrole, opbrengs- en kontakstudies met dekke-lêers vir 'n eksterne oplosser, bewegingstudies vir samestellings, 'n Oppervlakke-werkruimte vir vormvrye oppervlaktes, onderdele wat uit fisika gedimensioneer word in die Ingenieur-werkruimte, foto-na-skets, druk-uitvoere, geneste plate na G-code en tekeninge wat hul gate dimensioneer. 0.8.1 herstel 'n vries van die volskermwyser.
keywords: wat is nuut, what's new, vrystellingsnotas, veranderingslog, veranderinge, 0.8, 0.8.1, weergawe, nuwe kenmerke, lewendige ontleding, opdateer terwyl jy wysig, breek dit, wat breek eerste, lasfaktor, nie-lineêr, opbrengs, plastiese rek, kontak, calculix, bewegingstudie, speling, oppervlaktes, nurbs, gladmaak, romp, zebra, ingenieur, generator, gegenereerde liggaam, skets uit 'n foto, skaal vir druk, verdeel vir druk, krimp, geneste plate, g-code, tekening, dimensioneer gate, assistent, mcp, tale, werkbalkrye
from: 62e4dce2
---

Dit is wat in PartCraft 0.8 en 0.8.1 verander het, vergeleke met 0.7. Die simulasie antwoord terwyl jy wysig en vertel jou wat eerste breek, samestellings kry bewegingstudies, en nuwe werkruimtes maak vormvrye oppervlaktes en onderdele wat uit fisika gedimensioneer word. 0.8.1 is 'n klein herstelvrystelling.

## Nuut

### Simulasie

- **Werk op terwyl ek wysig.** Merk {{ui:Werk op terwyl ek wysig}} in die **Oplos**-blok en die antwoorde volg jou wysigings. Verander 'n maat, 'n las of die materiaal en 'n vinnige antwoord, gemaak met elemente vier keer groter, verskyn dadelik; wanneer jy vir ongeveer 'n sekonde stilhou, vervang die studie se eie verfynde antwoord dit. Die resultate sê watter een jy kyk. By 'n staal-kantilever was die vinnige antwoord binne 1 % van die verfynde een vir buiging en ongeveer 4 % vir spanning. Sien [Kontroleer spanning en buiging](topic:simulation#update-while-you-edit-live).
- **Wat breek eerste.** Vir 'n statiese of knik-studie skaal {{ui:Wat breek eerste?}} in die **Breek dit**-blok die laste totdat die onderdeel swig. Dit lys, die ergste eerste, die lasfaktor tot die eerste opbrengs (met 'n rooi merker waar die spanning piek) en die lasfaktor tot knik. 'n Faktor onder 1 beteken die onderdeel swig reeds soos belas, en Probleme wys 'n fout. Die faktore kom uit 'n lineêre studie, so hulle is net so goed as dit. Sien [Kontroleer spanning en buiging](topic:simulation#find-out-what-breaks-first-break-it).
- **Opbrengs en kontak.** Twee meer studietipes: 'n nie-lineêre een waar die materiaal sy reguit lyn tot die opbrengsspanning volg en dan 'n platter helling, met plastiese rek wat geplot word, en 'n kontakstudie waar aparte stukke teen mekaar druk (wrywingloos) of vas bly (gebind). 'n Lasstap wat nie kan vestig nie, of stukke wat te ver in mekaar sak, verskyn in die Probleme-paneel. Wrywing, groot glyding, groot rotasies, groot buigings en moegheid word nie opgelos nie. Sien [Kontroleer spanning en buiging](topic:simulation#yielding-and-contact-nonlinear-studies).
- **Dekke vir CalculiX.** {{ui:Uitvoer}} › {{ui:CalculiX-deck (.inp)}} stoor die studie vir CalculiX, 'n aparte program wat jy self installeer en laat loop; {{ui:Uitvoer}} › {{ui:CalculiX-resultate (.frd)}} lees sy resultaatlêer terug op dieselfde netwerk. PartCraft begin nooit daardie program nie, en dit sê so as die onderdeel verander het sedert die deck gestoor is.

### Samestellings

- **Bewegingstudies.** {{ui:Samestelling}} › {{ui:Beweging}} dryf een gewrig se waarde oor 'n tyd wat jy gee (konstante spoed, versag, sinus, of uit en terug), plaas die samestelling by elke stap met sy gewrigte en geslotte lusse, en rapporteer watter dele bots en hoe na dele kom. {{ui:Voeg 'n punt by}} plot 'n punt se posisie, spoed en versnelling, die gewrig se waarde en die speling teen tyd; {{ui:Stoor CSV}} en {{ui:Stoor grafiek}} skryf hulle uit. Na {{ui:Voer uit}} beweeg die Stap deur die voerbalk die samestelling na enige stap. Die studie se instellings word in die samestellingslêer gestoor. Spoed en versnelling kom uit die opgetekende posisies, so gebruik meer stappe as 'n skerp piek laag lees. Sien [Kontroleer 'n samestelling vir botsings en beweging](topic:check-assembly#a-motion-study).

### Oppervlaktes en onderdele uit fisika

- **'n Oppervlakke-werkruimte.** Kies {{ui:Oppervlakke}} in die {{ui:Werkruimte}}-blokkie vir NURBS-krommes en -oppervlaktes langs die onderdeel: {{ui:Kromme}}, {{ui:Loft}}, {{ui:Sweep}}, {{ui:Pas aan}} en {{ui:Zebra}}, met kontinuïteit (G0, G1 of G2) gemeet op die presiese oppervlaktes, en 'n rand wat slegter is as wat jy gevra het, word in Probleme gelys met 'n Pas aan-regstelling. {{ui:Gladmaak}} meet romplyne vir buigpunte en kromtesprongs en bou die onregmatige weer op binne jou toleransie. Oppervlaktes word in die onderdeellêer gestoor en verander nie die onderdeel se kenmerke nie. Sien [Vormvrye oppervlaktes (NURBS)](topic:nurbs-surfaces).
- **Die Ingenieur-werkruimte.** Kies {{ui:Ingenieur}} in die werkruimte-skakelaar, kies 'n generator en klik {{ui:Nuut}}: 'n skrip dimensioneer 'n onderdeel uit wat dit moet doen (hitte om te skuif, vloei, druk, materiaal, drukproses) met handboekformules en bou dit, en gee dan die getalle terug wat dit gebruik het met hul bronne, sy vervaardigingskontroles en lêers vir ontledingsgereedskap. Dieselfde insette gee dieselfde onderdeel op enige rekenaar. Die generator word in die onderdeel bewaar, en om 'n onderdeel oop te maak, loop nooit 'n skrip nie. Sien [Onderdele uit fisika: generators](topic:engineer-generators) en [Skryf 'n generator](topic:write-a-generator).

### Skets, tekeninge en maak

- **'n Skets uit 'n foto.** {{ui:Kenmerke}} › {{ui:Meer}} › {{ui:Skets uit 'n foto…}} trek 'n lyntekening van 'n plat onderdeel op 'n gewone grond (buitelyn en gate) of 'n pen-tekening in lyne, boë en sirkels. Jy gee een lengte, kontroleer die voorskou en maak die skets. Sien [Sketsbasiese beginsels](topic:sketch-basics#a-sketch-from-a-photo).
- **Skaal en verdeel vir druk.** {{ui:Uitvoer}} › {{ui:Skaal vir druk (STL of 3MF)…}} skaal per as sonder om die onderdeel te verander, byvoorbeeld met 'n krimptoelae. {{ui:Uitvoer}} › {{ui:Verdeel vir druk (’n zip van stukke)…}} sny 'n onderdeel wat te groot is vir jou bed in genommerde stukke wat met penne, sleutels, swaluisters, dowelgate of magneetsakkies verbind word. Sien [Druk in 3D](topic:print-3d).
- **Geneste plate na G-code.** {{ui:Uitvoer}} › {{ui:Geneste plate na G-code}} lees 'n geneste DXF en maak een program per plaat deur die postprosessor wat jy kies: gate en uitsnedes eerste, dan die buitelyne. Dit beplan nie die insny-aanloop, die snyvolgorde of gedeelde rande nie. Sien [Rangskik plat onderdele op plate](topic:nest-flat-parts#cut-the-sheets-g-code).
- **Tekeninge wat meer self doen.** {{ui:Blad}} › {{ui:Outomaties}} kies die kleinste A-formaat-blad wat die aansigte hou, by die grootste standaardskaal tot 1:1. {{ui:Dimensioneer die gate}} plaas 'n middelpuntmerker op elke gat, een aanwysing per grootte en die posisies vanaf die aansig se linkeronderhoek. Sien [Maak 'n tekening](topic:drawing-pdf).

### In elke program

- **Tale.** Die programme kom in 54 tale. Dié behalwe Engels is masjienkonsepte totdat 'n moedertaalspreker dit lees.
- **Werkbalkrye.** {{ui:Instellings}} › {{ui:Algemeen}} › {{ui:Werkbalkrye}} kies Omvou (soos voorheen), 2 rye of 1 ry; 'n balk wat nie pas nie, rol sylings. PartCraft se Kenmerk-lint wys die mees gebruikte gereedskap groot en steek variante agter 'n verdeelde knoppie weg.
- **Koppel jou KI.** Studio is die middelpunt om 'n assistent van jou eie aan al agt programme te koppel, met leesalleen-, voorstel- of wysigingsregte per program. 'n Gekoppelde assistent kan 'n onderdeel uit een sin dimensioneer, soos 'n beugel vir 'n las, sy werk en elke kontrole wys, en dit bou; dit meld wat dit nie nagegaan het nie (spanningskonsentrasie, moegheid, kruip in plastiek). Sien [Gebruik PartCraft met 'n KI-assistent](topic:use-with-ai-assistants).

## Reg in 0.8.1

- **Volskermwyser-vries.** Die swewe-keuse is nou gekeer. Die oorsaak is ons beste lesing en is nie met die persoon wat dit gerapporteer het, bevestig nie.
- **Taal tydens uitvoering.** Studio en die verpakte weergawes kan tydens uitvoering van taal wissel; voorheen was dit net Engels. Dit is nog nie op elke platform getoets nie: sê vir ons as die taal nie verander nie.

## Nog nie in hierdie weergawe nie

- Koppel jou KI is nie klaar nie: koppel met een klik binne Studio, die gehoste koppelaar vir blaai-KI, jou eie API-sleutel binne Studio en die gepubliseerde MCP-pakket word nie belowe nie. Studio het geen KI van sy eie nie.
- Studio is nie kode-geteken nie: Windows kan waarsku, en macOS vra vir regsklik en dan Oopmaak. Sien [Foutoplossing](topic:troubleshooting).
- Spanningsketings is steeds een rigting: sien [Toleransie-kettings](topic:tolerance-stackup).
- Die res word gelys in [Wat is nog nie gebou nie](topic:not-built-yet).

Vroeër veranderinge is in [Wat is nuut in 0.7](topic:whats-new-0-7).
