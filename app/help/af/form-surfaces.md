---
title: Vormvrye vorms met Form, en oppervlakkenmerke
summary: Stoot en trek 'n gladde beheerkooi in die Form-werkruimte, vou rande, gebruik simmetrie, kontroleer en werk dit af tot 'n presiese soliede of oppervlak, en dan lap, loft, steek, verdik, verskuif, verleng en trim oppervlaktes in Ontwerp. Wat presies is en wat benader word.
keywords: form, vormvry, t-spline, onderverdeling, catmull-clark, kooi, quadball, vou, simmetrie, zebra, kromming, oppervlak, lap, vulling, lofoppervlak, steek, naai, verdik, verskuif oppervlak, verleng, trim
from: 0d326ef4
---

:::note
**Nog nie in hierdie weergawe gebou nie.** Om 'n vorm in die onderdeel af te werk, en die oppervlakkenmerke, benodig 'n presiese geometriekern, wat hierdie weergawe van PartCraft nie het nie: dit bou elke onderdeel met die maaskern. [Wat nog nie gebou is nie](topic:not-built-yet) sê wat om in plaas daarvan te doen. Die res van hierdie bladsy beskryf hulle soos hulle met 'n presiese kern werk.
:::

Die **Form**-werkruimte maak organiese vorms. Jy wysig 'n **kooi**, 'n growwe maas van hoeke, rande en vlakke. Die vorm is die gladde oppervlak wat die kooi beheer (sy Catmull–Clark-grenssoppervlak), so die beweging van een hoek buig die oppervlak sag daaromheen. Wanneer dit reg lyk, voeg **Afwerking** dit by die onderdeelgeskiedenis as 'n *Form*-kenmerk, en die presiese kern maak dit ware B-spline-oppervlaktes. Jy kan dit dan afrond, sny, aan ander kenmerke heg en as STEP uitvoer.

Kies **Form** in die **Werkruimte**-lys links op die werkbalk.

## Begin 'n kooi

1. Stel **Grootte** en **Verdelings** in die regterpaneel. Verdelings is hoeveel vlakke elke kant kry.
2. Klik {{ui:Boks}}, {{ui:Quadball}} of {{ui:Vlak}} op die werkbalk. Die paneel het ook **Silinder**, **Torus** en **Vlakke deur klikke**.

- 'n **quadball** is 'n boks-kooi wat so ingepas is dat sy hoekpunte op 'n sfeer lê. Tussen daardie punte sit die oppervlak 'n bietjie binne die sfeer: ongeveer 0.4 % minder volume met 2 verdelings.
- 'n **vlak** is oop, so dit word 'n oppervlakliggaam (sien "Oppervlakkenmerke in Ontwerp" hieronder).
- **Vlakke deur klikke**: klik 4 punte op die bo- (grond-)vlak of op hoeke van die kooi om een vlak te maak. Vlakke wat hoeke deel, sluit aan. Druk {{key:Enter}} na 3 punte vir 'n driehoek, of {{key:Esc}} om te stop.

Jou onvoltooide kooi word saam met die onderdeellêer gestoor, so jy kan die lêer toemaak en later voortgaan.

## Kies en skuif

- Klik 'n hoek, 'n rand of 'n vlak van die kooi. {{key:Shift}}+klik voeg items by of laat dit val. {{key:Esc}} maak die keuse skoon.
- 'n Gizmo verskyn in die middel van die keuse. Sleep 'n pyl om langs dit te skuif, of 'n vierkant om in daardie vlak te skuif. Druk {{key:W}} om te skuif, {{key:E}} om te draai en {{key:R}} om te skaal, of gebruik die knoppies in die paneel. {{ui:Gizmo}} op die werkbalk loop deur hulle.
- **Sagte uitval** (mm) trek ook die hoeke binne daardie afstand, en vervaag glad tot niks aan die rand van daardie afstand.
- Elke sleep is een ongedaan-stap: {{key:Ctrl+Z}} en {{key:Ctrl+Y}} werk soos gewoonlik.

## Verander die kooi

Die **Wysig**-knoppies in die paneel werk op die keuse:

| Knoppie | Wat dit doen |
|---|---|
| {{ui:Ekstrudeer}} | Gekose vlakke beweeg uit volgens **Ekstrusie-afstand**, langs hul normale, met nuwe syvlakke. Gekose oop rande laat nuwe vlakke na buite groei. |
| {{ui:Kantlus}} / Voeg kantlus in | Verdeel die ring van vierkantige vlakke wat die gekose rand kruis, halfpad langs. Meer lusse gee strakker krommes. |
| Voeg punt in | Voeg 'n hoek in die middel van die gekose rand by. |
| Onderverdeel | Verdeel elke gekose vlak in vierkantige vlakke rondom sy middel. |
| Brug | Verbind twee gekose vlakke, of twee openings (kies een oop rand op elk), met 'n buis van vlakke. Albei benodig dieselfde aantal rande. |
| Vul gat | Sluit die opening deur die gekose oop rand met een vlak. |
| Sweis | Smelt die gekose hoeke in een, by hul middel. |
| Plat maak | Skuif die gekose hoeke na die vlak wat hulle die beste pas. |
| Skrap | Verwyder die gekose vlakke, rande (twee vlakke smelt saam) of hoeke. |

## Skerp rande, simmetrie en aansig

- {{ui:Vou}} maak die gekose rande skerp. **Vougewig** 10 is heeltemal skerp. 'n Kleiner gewig bly skerp vir daardie aantal verfyningstappe en versag dan, wat 'n stywe ronding gee in plaas van 'n harde vou. **Ontvou** maak hulle weer glad. **Skerp hoekpunt** pen 'n hoek vas sodat die oppervlak met 'n punt daardeur gaan.
- **Simmetrie** spieël die kooi oor X, Y of Z = 0. Dit hou die positiewe kant, spieël dit, en voeg die twee helftes saam. Daarna gebeur 'n wysiging aan enige kant aan albei. Hoeke op die spieëlvlak bly daarop.
- {{ui:Aansig}} wissel tussen **Glad** (die oppervlak wat die kenmerk sal wees) en **Boks** (die kooivlakke self).
- **Analise**: **Zebra-strepe** weerkaats 'n gestreepte lig vanaf die huidige aansig. Hulle buig glad oor 'n gladde oppervlak en breek by 'n vou. **Gemiddelde kromming** skakeer konvekse dele rooi, konkawe dele blou en plat dele wit. Dit word op die vertoonde maas gemeet met die kotangensformule, so dit is 'n gids, nie 'n meting nie.

## Kontroleer en werk af

- **Presiese kontrole** skakel die kooi in die presiese kern om sonder om jou onderdeel te verander. Dit rapporteer hoeveel B-spline-lappe die kooi maak, hoeveel daarvan presies is, en of die resultaat 'n geslote, geldige soliede is en sy volume.
- {{ui:Afwerking}} voeg 'n *Form*-kenmerk by die geskiedenis, of werk die vorm by wat jy wysig, en neem jou terug na Ontwerp. 'n Geslote kooi word 'n soliede. Sy **Bewerking** in die Ontwerp-paneel kan Nuwe liggaam, Voeg saam, Sny of Doorsnede wees. 'n Oop kooi word 'n oppervlakliggaam.
- Om 'n vorm later te verander, kies dit in die geskiedenis en klik **Wysig in Form**. Die gebouede liggaam word verberg terwyl jy sy kooi wysig.
- **Gooi weg** gooi die kooi weg sonder om die geskiedenis aan te raak.

## Wat presies is en wat benader word

Elke vierkantige vlak van die kooi, verfyn wanneer nodig, word een bikubiese B-spline-lap.

- Waar elke hoek van 'n vlak *gereeld* is (vier rande ontmoet binne die oppervlak, of drie op 'n oop rand of langs 'n vou), is die lap **presies** die onderverdelingsoppervlak. Die toetse kontroleer dit tot 1e-9 mm.
- Rondom 'n **buitengewone punt** (drie, vyf of meer rande ontmoet, 'n hoek van 'n drie- of vyfsydige vlak, of die einde van 'n vou) is daar geen presiese polinomiale lap nie. Daar neem die lap die presiese punt en raakvlak by daardie hoek en die buurrandkrommes, sodat die lappe steeds sonder gaping aansluit. Raaklyn-kontinuïteit oor die rande wat by die punt ontmoet, is benaderd. Die Form-paneel en die kenmerk se paneel gee die grootste hoek, tipies onder 2°. 'n Hoër **Vlak** in die kenmerk se paneel maak hierdie lappe kleiner en nader.
- Skerp plooie is ware rande van die soliede, so jy kan hulle afrond.
- Elke lap is sy eie vlak, so 'n vorm het baie vlakke, en lyne word tussen hulle geteken.

## Oppervlakkenmerke in Ontwerp

Die oppervlakopdragte is in Ontwerp se {{ui:Meer}}-kieslys, onder die kenmerke. Hulle benodig die presiese kern. Oppervlakliggame word deursigtig blou geteken. Hulle is nie deel van die soliede totdat jy hulle verdik of steek nie.

| Opdrag | Wat dit doen |
|---|---|
| Lap | Vul 'n geslote lus van rande. {{key:Shift}}+klik eers die rande van die soliede, of kies 'n oppervlakliggaam om sy opening te vul. **Raak (G1)** laat die lap daardie oppervlak gladweg ontmoet. |
| Lofoppervlak | 'n Oppervlak deur een ketting krommes per skets (oop of geslote), in geskiedenisvolgorde. |
| Steek | Naai oppervlakliggame langs hul gedeelde rande. As hulle toesluit, is die resultaat 'n soliede, met 'n Bewerking soos ander kenmerke. |
| Verdik | Gee 'n oppervlakliggaam 'n dikte: langs sy normaal, daarteen, of helfte elke kant toe. Die resultaat is 'n soliede. |
| Verskuif oppervlak | 'n Kopie van 'n oppervlakliggaam wat langs sy normale geskuif is. Die oorspronklike bly. |
| Verleng oppervlak | Laat 'n enkelvlak-oppervlak groei verby die rande wat jy kies. |
| Trim oppervlak | Sny 'n oppervlakliggaam waar 'n ander oppervlakliggaam, of die soliede, dit kruis. Klik **Kies 'n punt op die stuk** om te kies watter stuk om te hou, of hou alles anders. |

Steek, Verdik, Verleng en Trim verbruik die oppervlakliggaam waarmee hulle begin. Latere kenmerke gebruik die nuwe een.

Beperkings vandag: vorms met verskeie aparte geslote stukke skakel nie om in een soliede nie; gereelde gebiede word nie in groter oppervlaktes saamgevoeg nie; en sien [Wat nog nie gebou is nie](topic:not-built-yet).
