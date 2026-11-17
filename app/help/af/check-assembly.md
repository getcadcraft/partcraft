---
title: Toets 'n samestelling vir botsings en beweging
summary: Vind onderdele wat met Botsing oorvleuel, sleep enige verbinding se waardes om die beweging te sien, en vee 'n verbinding deur sy reeks om te vind waar onderdele bots.
keywords: inmenging, inmengingsopsporing, botsing, oorvleueling, draadpassing, draaddiepte-wanverhouding, raakvlakke, versteek, filter, beweging, bewegingstudie, veeg, bewegingsreeks, toets
from: 9c98db46
---

Twee kontroles loop op die onderdele soos hulle geplaas is: **Botsing** soek nou na oorvleuelende materiaal, en die **bewegingskontrole** beweeg een verbinding deur sy reeks en soek langs die pad na oorvleueling.

## Toets vir inmenging

1. Open of bou 'n samestelling (sien [Bou 'n samestelling](topic:build-assembly)).
2. Kies {{ui:Botsing}}.

Die statusbalk rapporteer die resultaat:

- "Geen inmenging tussen 3 onderdele (… ms)." Niks oorvleuel nie.
- "Inmenging: Flange1 en Flange2: Oorvleueling, 2.5 mm³." Elke paar, watter soort resultaat dit is en die volume wat hulle deel.

Die **Samestelling**-blokkie aan die linkerkant wys **Inmenging**: "Geen", "2 resultate" (die wat gewys word), of "Nie getoets nie". Met niks gekies nie, lys die regterpaneel elke resultaat onder **Inmenging**.

Die resultaat word uitgevee wanneer die samestelling verander. Voer {{ui:Botsing}} weer uit nadat jy 'n verbinding beweeg. Elke paar onderdele word teen elke ander gekontroleer, so groot samestellings neem langer.

### Soorte resultate

| Soort | Beteken |
|---|---|
| **Oorvleueling** | Die onderdele deel volume: 'n werklike botsing. |
| **Draaddiepte-wanverhouding** | Die gedeelde volume is binne een onderdeel se draad maar verby die ander s'n: 'n bout wat dieper gedraai is as sy gat, of 'n gewone skag in 'n gedraaide gat. |
| **Draadpassing (kosmetiese drade)** | Die gedeelde volume is binne albei onderdele se drade: 'n bout in 'n gedraaide gat. Kosmetiese drade word op die draad se volle grootte geteken, so hulle oorvleuel altyd 'n bietjie. |
| **Raakvlakke** | Geen gedeelde volume nie, maar vlakke in kontak (binne 0.001 mm). |

Gemodelleerde drade (sien [Drade op asse en boorgate, geteken of gemodelleer](topic:threads)) is werklike geometrie: wat hulle deel, is 'n **Oorvleueling**.

### Versteek wat jy nie hoef te sien nie

Onder **Inmenging** het **Wys** 'n blokkie vir elke soort: ontmerk **Draadpassing** en **Raakvlakke** om net die botsings wat saak maak te sien. **Versteek hierdie paar** langs 'n resultaat versteek daardie paar onderdele, ongeag watter soort dit is. Versteekte resultate word getel ("2 resultate versteek deur hierdie filters"), en **Wys die versteekte pare weer** bring die pare terug. Die statusbalk tel versteekte resultate ook.

Die filters word saam met die samestelling gestoor, en elke verandering is een {{key:Mod+Z}}-stap. **Veeg 'n verbinding vir botsings** (hieronder) gebruik hulle ook. 'n Samestelling met filters word as weergawe 4 gestoor, wat vroeëre PartCraft-weergawes weier om oop te maak eerder as om die filters te verloor.

## Kyk na die beweging

1. Kies 'n verbinding wat beweeg (enige behalwe star) in die lys aan die linkerkant.
2. Sleep die skuifbalk onder een van sy waardes, soos **Hoek (°)** of **Verskuiwing (mm)**. Die onderdeel beweeg terwyl jy sleep.
3. Laat los. Die nuwe posisie word behou en kan met {{key:Mod+Z}} ontdoen word.

Jy kan ook 'n hoek of verskuiwing in die blokkie tik en {{key:Enter}} druk.

'n Verbinding op 'n geslote lus (' n skakeling) beweeg die hele lus: die waarde wat jy sleep, word behou, en die ander verbindings van die lus volg (sien [Geslote lusse](topic:build-assembly#closed-loops-linkages)).

## Veeg 'n verbinding vir botsings

1. Kies 'n verbinding wat beweeg.
2. Vir 'n verbinding met verskeie waardes (silindries, plat, bal, pen in gleuf), kies watter een om te veeg in **Kontroleer bewegings**.
3. Kies {{ui:Toets die beweging vir botsings}}.

PartCraft beweeg daardie waarde deur 25 posisies in 24 gelyke stappe, die ander bly soos hulle is: 'n hoek van −180° tot 180° ('n kanteling van −90° tot 90°), 'n lengte van minus tot plus die grootte van die grootste onderdeel. Dit rapporteer:

- "Geen botsing êrens vir Hoek (°) van -180 tot 180 (25 posisies nagegaan)."
- "6 van 25 posisies bots, eerste by Hoek (°) 45 (12.4 mm³)." Die eerste posisie wat bots, en die oorvleueling daar.

Die knoppie is grys vir starre verbindings, wat nie beweeg nie. Die veeg kontroleer net die posisies, nie die pad tussen hulle nie: 'n dun onderdeel kan tussen twee stappe deur 'n ander gaan.

:::note
Kontak en swaartekrag is nie gebou nie. Sonder perke dek die veeg die hele reeks. Gee die waarde **Perke** (sien [Onderdeellys, ontplooide aansigte en onderdele met die hand beweeg](topic:assembly-bom-explode)) en die veeg dek net dié, so 'n skarnier wat 90° oopmaak, word oor 90° nagegaan.
:::

## 'n Bewegingstudie

**Samestelling › Beweging** dryf een verbinding se waarde van 'n begin na 'n einde oor 'n tyd wat jy gee (konstante spoed, versag, sinus, of uit en terug), plaas die samestelling by elke stap met sy verbindings en geslote lusse, en rapporteer watter botsings en hoe na die onderdele kom. **Voeg 'n punt by** volg die middel van 'n onderdeel of 'n punt wat jy daarop klik, en die kaart plot sy posisie, spoed en versnelling, die verbinding se waarde en die speling teen tyd. **Stoor CSV** en **Stoor plot** skryf hulle uit. Spoed en versnelling kom uit die opgetekende posisies, so 'n skerp piek tussen stappe lees laag: gebruik meer stappe.

Ná **Voer uit** beweeg die **Stap deur die lopie**-balk die samestelling na enige stap (die tyd, die waarde en of onderdele daar bots, word langs dit gewys). Die verbinding hou sy eie waarde, en **Terug na die model** plaas die samestelling terug. Die studie se instellings word in die samestellinglêer gestoor; sy resultate word weer gemaak deur **Voer uit**.

## 'n Kontakstudie

**Samestelling › Kontak** wys hoe 'n samestelling sy laste dra waar onderdele op mekaar druk. Elke onderdeel bring sy eie steune, laste en materiaal uit sy eie **Simulasie**-studie (' n vaste vlak op een onderdeel, 'n krag op 'n ander); hier kies jy die pare. **Voeg 'n paar by**, dan **Kies kant A** en klik vlakke van een onderdeel, **Kies kant B** en klik vlakke van 'n ander onderdeel (' n klik op 'n gekose vlak haal dit weg; Esc of **Klaar** beëindig die kies). 'n Paar is **Wrywingloos** (die onderdele druk maar gly) of **Gebonde** (hulle bly saam). Die styfheidsfaktor stel hoe hard die kontak weerstand bied teen insak: 20 is 'n goeie begin, 1000 vir 'n styf staalstapel.

**Los op** voer die las in stappe uit en wys die kontakkrag, die diepste insinking, die grootste beweging en die grootste spanning. 'n Onderdeel sonder 'n paar word weggelaat, en die kaart sê so. Wrywingloos kontak hou nie 'n onderdeel sywaarts vas nie: gee elke onderdeel 'n steun in sy eie Simulasie-studie, of bind dit, anders kan die stappe dalk nie vestig nie. Die pare en instellings word in die samestellinglêer gestoor.

**Voer CalculiX-dek uit** skryf dieselfde model as 'n CalculiX-invoerlêer (.inp). CalculiX is 'n afsonderlike program wat jy self installeer en laat loop; **Lees CalculiX-resultate (.frd)** lees dan die verplasings terug op hierdie samestelling se maas en weier 'n lêer wat vir 'n ander maas gemaak is. Die oplosser hier is plasties-vermoënd maar nie eksplisiete dinamika nie, en niks hier is 'n gesertifiseerde analise nie: laat 'n ingenieur enigiets wat saak maak, nagaan.
