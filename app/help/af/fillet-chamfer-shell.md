---
title: Afrond, skuinskant en hol uit met Fillet, Chamfer en Shell
summary: Kies rande en voeg konstante of veranderlike-radius-afrondings en gelyke, twee-afstand- of afstand-hoek-skuinskante by, hol 'n onderdeel met Shell deur die vlakke te kies wat oopgemaak moet word, verander watter rande of vlakke 'n kenmerk gebruik, en los die algemene mislukkings op.
keywords: fillet, afrond, vermenging, chamfer, skuinskant, shell, hol, muurdikte, rande, vlakke, kies rande, shift-klik, oop vlak, presiese kern, maaskern, nie gebou nie
from: e41c1c12
---

:::note
**In hierdie weergawe** bou PartCraft afrondings en skuinskante met die maaskern, op **reguit rande tussen twee plat vlakke** net: boksrande en die reguit rande van ekstrusies en snitte, buite- of binnehoeke (’n binnehoek kry materiaal bygevoeg). Ronde rande soos gatrande, en 'n radius wat langs die rand verander, is nog nie gebou nie. Waar twee geronde rande by 'n hoek ontmoet, word die afrondings gemiter (hulle ontmoet in 'n skerp vou), nie ineengevloei nie. **Shell** werk ook, gebou deur die maaskern: dit open net plat vlakke, mure met verskillende diktes is nog nie gebou nie, en dit is stadig op onderdele met baie ronde vlakke. Sien [Wat nog nie gebou is nie](topic:not-built-yet).
:::

{{ui:Fillet}} rond rande af, {{ui:Chamfer}} skuins hulle, en {{ui:Shell}} hol die onderdeel uit. Al drie werk op die soliede se rande en vlakke en word deur die maaskern gebou. Hul afrondings is gefasetteer soos elke ronde vlak (**Curves** stel hoe fyn); die ronde vlakke is silinders wat jy kan kies en meet (sien [Die maaskern](topic:solid-kernels)).

## Kies rande vir afronding of skuinskant

### Kies die rande eerste

1. Klik op 'n rand van die onderdeel. Die hele rand verlig, en die regter paneel sê **Edge**: die soort (Straight, Circle of arc, Curve), lengte en die vlakke waartussen dit lê.
2. Om meer rande by te voeg, {{key:Shift}}+klik hulle. Elkeen word gemerk; {{key:Shift}}+klik 'n gemerkte rand om dit te laat val. Die paneelkop tel hulle ("4 edges") en die statusbalk sê "4 edges picked. Fillet or Chamfer rounds them; Shift+click picks more, Esc clears." › "4 rande gekies. Fillet of Chamfer rond hulle af; Shift+klik kies meer, Esc maak skoon."
3. Kies {{ui:Fillet}} of {{ui:Chamfer}} in die nutsbalk, of dieselfde knoppies in die regter paneel.

Die kenmerk word bygevoeg met al die gekose rande: 'n 2 mm-afronding, of 'n 1 mm-skuinskant. Die statusbalk sê byvoorbeeld "Fillet1 added (4 edges). Change its size on the right; Pick edges changes which." › "Fillet1 bygevoeg (4 rande). Verander sy grootte aan die regterkant; {{ui:Kies rande}} verander watter."

### Of voeg die kenmerk eerste by

1. Met niks gekies nie, kies {{ui:Fillet}} of {{ui:Chamfer}}.
2. PartCraft gaan in kiesmodus: die regter paneelkop sê "Fillet1: picking" › "Fillet1: kies", die onderdeel wys soos dit was voor die afronding (die paneel sê so), en die nutsbalk wys {{ui:Klaar}}.
3. Klik op elke rand om dit by te voeg; klik weer om dit te laat val. Die statusbalk tel hulle.
4. Kies {{ui:Klaar}} (of {{ui:Klaar kies}} in die paneel), of druk {{key:Esc}} of {{key:Enter}}.

### Instellings

| Instelling | Fillet | Chamfer |
|---|---|---|
| Grootte | **Radius (mm)**, verstek 2 | **Distance (mm)** terug van die rand op albei vlakke, verstek 1 |
| **Edges** | Hoeveel | Hoeveel |

Die lys hieronder noem elke rand volgens die twee vlakke wat dit verbind, soos "Edge 1: Extrude1 end face × Extrude1 side". **Remove** laat een val. {{ui:Kies rande}} gaan terug na kies. Dubbelklik die kenmerk in die geskiedenis doen dieselfde.

Rande word onthou volgens die twee vlakke wat hulle verbind, so hulle bly op die regte rand wanneer jy 'n afmeting vroeër in die geskiedenis verander.

### Veranderlike afronding en skuinskanttipes

- **Variable radius** (afronding): nog nie gebou in hierdie weergawe nie ("A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." › "'n Afronding waarvan die radius langs die rand verander: nog nie gebou nie (dit benodig 'n presiese kern). Gee dit een radius."). Met 'n presiese kern: merk dit en stel **End radius (mm)**. Die radius verander lineêr van **Radius** aan een einde van elke rand na **End radius** aan die ander; **Swap the ends** draai dit om.
- **Type** (skuinskant): **Equal distance**, **Two distances** (’n **Second distance** op die ander vlak) of **Distance and angle** (die afstand op een vlak, die skuinsvlak teen **Angle (°)** tot daardie vlak). **Flip sides** sit die eerste afstand op die ander vlak.

## Dop 'n onderdeel

1. Klik op die plat vlak om oop te laat, byvoorbeeld die bo-kant van 'n boks. Of {{key:Shift}}+klik verskeie vlakke.
2. Kies {{ui:Shell}} in die nutsbalk, of {{ui:Shell, hierdie vlak oopmaak}} in die vlak se paneel.

Die onderdeel word 'n 2 mm-muur met die gekose vlakke oop. Instellings:

| Instelling | Wat dit doen | Verstek |
|---|---|---|
| **Wall (mm)** | Die muurdikte | 2 |
| **Walls grow outward (the faces stay inside)** | Gemerk: die mure word buite bygevoeg, so die binnekant behou die onderdeel se grootte | Af: die mure gaan innatoe en die buitekant behou sy grootte |
| **Open faces** | Hoeveel vlakke verwyder word | |

Innatoe is die mure presies die muurdikte: buitehoeke bly skerp, binnehoeke kom afgerond uit (radius = die muur), en 'n gat deur die onderdeel kry 'n buis van muur rondom. Uitwaarts word die mure buite die oorspronklike oppervlak bygevoeg, wat die holte word, en die buitelyke rande kom afgerond uit. Die binnevlakke word genoem na die vlakke wat hulle verskuif, so jy kan hulle kies.

Net plat vlakke kan oopgemaak word: as 'n geboë vlak gekies word, sê dit "Shell: in this version it opens flat faces only (the mesh kernel builds it)." › "Shell: in hierdie weergawe open dit net plat vlakke (die maaskern bou dit)." 'n Dop is stadig op onderdele met baie ronde vlakke (verskeie sekondes per duisend driehoeke): gebruik 'n growwer **Curves**-instelling terwyl jy ontwerp.

{{ui:Kies vlakke}} verander watter vlakke oop is, op dieselfde manier as rande kies. Die lys noem elkeen, soos "Face 1: Extrude1 end face". 'n Dop sonder oop vlakke word nie toegelaat nie: "Kies die vlakke om te verwyder (oop), en dop dan."

## Volgorde maak saak

Kenmerke bou van bo na onder. 'n Afronding voor 'n dop word saam met die onderdeel gedop, so die binnekant kry ook afgeronde hoeke. 'n Afronding ná 'n dop rond net die rande wat jy kies af. Skuif kenmerke met {{ui:Skuif op}} en {{ui:Skuif af}} (sien [Verander 'n onderdeel deur sy geskiedenis](topic:edit-history)).

Patrone en spieëls kan nie 'n afronding, skuinskant of dop kopieer nie: "Fillet1 changes the body's edges or walls; it cannot be copied. Copy the features that make solids (extrudes, revolves, holes, imports)." › "Fillet1 verander die liggaam se rande of mure; dit kan nie gekopieer word nie. Kopieer die kenmerke wat soliede maak (ekstrusies, draaiings, gate, invoere)." Patroon die gate of snitte eerste, en rond dan al die kopieë se rande in een afronding af.

## Wanneer dit misluk

| Boodskap | Wat om te doen |
|---|---|
| "A 5 mm round does not fit here (…)." › "'n 5 mm-afronding pas nie hier nie (…)." | Gebruik 'n kleiner radius, of rond minder rande op 'n slag af (verskeie afrondingskenmerke, kleinste laaste) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." › "'n Rand wat dit rond, is weg: die rand tussen Extrude1 en Cut2." | 'n Vroeëre verandering het daardie rand verwyder. Kies {{ui:Kies rande}}, verwyder die rooi rand en kies die nuwe een |
| "The shell could not be made with this thickness (…)." › "Die dop kon nie met hierdie dikte gemaak word nie (…)." | Die muur is dikker as 'n smal deel van die model, of as 'n afronding se radius. Maak die muur dunner, of die afronding groter as die muur |
| "That face has no name the history can follow; pick another." › "Daardie vlak het geen naam wat die geskiedenis kan volg nie; kies 'n ander." | Kies 'n vlak wat deur 'n kenmerk gemaak is (die meeste vlakke is) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." › "Fillet: in hierdie weergawe net reguit rande tussen twee plat vlakke (die maaskern bou hulle). Rond of skuins geboë rande in die skets af." (ook Chamfer) | 'n Gekose rand is rond, soos 'n gatrand, of lê op 'n geboë vlak. Verwyder dit met {{ui:Kies rande}}, en rond of skuins daardie hoek eerder in die skets af |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." › "'n Afronding waarvan die radius langs die rand verander: nog nie gebou nie (dit benodig 'n presiese kern). Gee dit een radius." | Ontmerk **Variable radius** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." › "Fillet deur die maaskern: waar geronde rande ontmoet, word hulle gemiter, nie ineengevloei nie." (⚠ in die geskiedenis) | 'n Waarskuwing, nie 'n fout nie: die onderdeel is gebou. Gekose rande ontmoet by 'n hoek, en die afrondings ontmoet daar in 'n skerp vou. Rond minder rande af, of aanvaar die vou |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." › "Shell: in hierdie weergawe open dit net plat vlakke (die maaskern bou dit)." | 'n Oop vlak is geboë. Gebruik {{ui:Kies vlakke}} en verwyder dit; maak net plat vlakke oop |

## Grense

In hierdie weergawe werk afronding en skuinskante net op reguit rande tussen twee plat vlakke, met een radius, en afrondings wat by 'n hoek ontmoet, word gemiter. Dope maak net plat vlakke oop. Met 'n presiese kern verander 'n veranderlike afronding lineêr langs elke rand (een wet per kenmerk; geen radiusstelle by punte langs dit nie). Vlakafrondings, volronde afrondings en dope met verskillende muurdiktes is nog nie gebou nie.
