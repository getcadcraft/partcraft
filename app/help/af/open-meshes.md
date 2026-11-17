---
title: Maak 'n STL, OBJ of 3MF oop as 'n soliede liggaam
summary: Maak 'n maas van 'n skandeerder, 'n 3D-druksite of 'n ander program om tot 'n soliede wat jy kan sny, byvoeg en op skets; wat PartCraft onderweg herstel, en wat dit nie kan nie.
keywords: stl, obj, 3mf, maas, maas na soliede, maas omskakel, skandeer, waterdig, herstel, gate, openings, eenhede, opwaartse as, ingevoerde liggaam, plat vlakke
from: 7b948471
---

PartCraft maak STL-, OBJ- en 3MF-maas oop as **soliede liggame**. Die liggaam werk soos enige ander soliede: sny dit, voeg by, boor dit, patroon dit, gebruik dit in 'n samestelling of vir masjinering, en skets op sy plat vlakke. Dit het geen geskiedenis van sy eie nie: 'n maas is net driehoeke, so sy groottes kan nie verander word nie, net bygevoeg of daaruit gesny.

## Maak 'n maas oop

1. Kies {{ui:Open}} of druk {{key:Mod+O}}, en kies die `.stl`-, `.obj`- of `.3mf`-lêer. Of gooi dit op die 3D-aansig.
2. PartCraft lees dit, herstel wat dit veilig kan doen, en wys wat dit gevind het: hoeveel driehoeke en punte, elke herstel, en of die maas nou **sluit**.
3. Kontroleer **Eenhede in die lêer** en **Op in die lêer**. STL en OBJ sê nie hul eenhede nie, so millimeter is die raaiskoot; 'n 3MF-lêer sê self wat dit is. Die reël **Grootte hier** wys die liggaam se grootte met jou keuse, so 'n onderdeel wat 25.4 keer te klein inkom, is maklik om raak te sien (dit was in duim).
4. As die onderdeel op die skerm leeg is, kies {{ui:Open as a body}}. As dit reeds kenmerke het, kies **Gebruik dit om** (voeg by die onderdeel, sny daaruit, of hou net die oorvleueling), dan {{ui:Add to this part}}, of {{ui:New part}} om van voor af met die maas te begin.

'n **Imported1**-kenmerk verskyn in die geskiedenis. Die statusbalk sê byvoorbeeld: "bracket.stl is a solid body: 15200.512 mm³, 14 flat faces to sketch on."

## Wat PartCraft herstel

| Herstel | Wat dit beteken |
|---|---|
| Dubbele hoeke saamgevoeg | 'n STL herhaal elke hoek vir elk van sy driehoeke; hulle word in een punt saamgevoeg |
| Driehoeke sonder oppervlakte verwyder | Splinters waarvan die hoeke op een lyn lê |
| Dubbele driehoeke verwyder | 'n Driehoek wat twee keer geskryf is, word een keer gehou; twee wat in teenoorgestelde rigtings wys (’n binnemuur) word albei verwyder |
| Klein gapings toegemaak | Rande wat amper ontmoet (binne 'n duisendste van die onderdeel se grootte) word saamgevoeg |
| Gate gevul | 'n Opening waarvan die rand plat lê, word gevul, hoe groot ook; 'n verwronge een net wanneer dit klein is |
| Driehoeke omgedraai om uitwaarts te wys | Driehoeke wat die verkeerde kant toe wys, word omgedraai om met hul bure te stem, en die hele oppervlak wys uit |

## Wanneer 'n maas nie sluit nie

'n Soliede het 'n oppervlak nodig sonder openings. Wanneer PartCraft nie een kan sluit nie, sê die dialoog hoeveel openings en oop rande oorbly, en daar is geen liggaam om by te voeg nie. Sluit die openings in die program wat die maas gemaak het, of voer dit weer uit as 'n geslote (waterdigte) maas, en maak dit weer oop.

PartCraft laat 'n opening alleen wanneer om dit te vul verkeerd kan raai: 'n groot verwronge gat, of twee openings in dieselfde vlak (’n ringvormige vlak wat ontbreek, waar om elke rand te vul die gat in die middel sou toedek). 'n Rand wat deur meer as twee driehoeke gedeel word, word ook gerapporteer: so 'n oppervlak het nie een duidelike binnekant nie.

## Skets op sy plat vlakke

Plat gebiede wat uit baie driehoeke bestaan, word elk in een **plat vlak** saamgevoeg, sodat 'n skets daarop kan sit: klik die vlak en kies {{ui:Sketch on this face}}. 'n Vlak wat later gesny of waarby gevoeg word, bly 'n vlak. Ronde gebiede (’n gat, 'n afronding) bly driehoeke: hulle is nie vlakke wat jy kan kies nie, en die aansig teken hul omtrek uit die hoek tussen driehoeke.

## Verander dit later

Kies **Imported1** om die lêer te sien waaruit dit kom, hoeveel driehoeke dit het en wat herstel is. **Eenhede in die lêer**, **Op in die lêer** en **Gebruik dit om** kan daar verander word; elke verandering is een ontdoen-stap.

## Waar dit gehou word

Die herstelde maas word **binne** die `.partcraft.json`-lêer gestoor, so jy het die maaslêer nie weer nodig nie. 'n Onderdeellêer met 'n maasliggaam is weergawe 5: 'n ouer PartCraft weier dit volgens sy weergawe. 'n Maas van 200 000 driehoeke voeg ongeveer 1,2 MB by.

## Limiete

- Hoogstens 3 miljoen driehoeke en 200 MB in een lêer.
- 'n Liggaam wat uit 'n maas gemaak is, word deur die maaskern gebou. Met die presiese kern aan (slegs ontwikkelaars), sê dit dit en word dit nie gebou nie.
- OBJ-materiale, tekstuurkoördinate en vrye-vorm-krommes word weggelaat; 3MF-kleure, -materiale en ondersteuningsvoorwerpe word weggelaat (die dialoog sê hoeveel voorwerpe oorgeslaan is).
- Die liggaam is so fyn as die maas: 'n growwe STL gee growwe ronde vlakke. Gate wat jy daarin boor, is so ronde as jou eie kenmerke.
