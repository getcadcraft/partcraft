---
title: Maak 'n STEP-lêer oop en bou daarop
summary: Bring 'n verskaffer se of 'n ander CAD-program se STEP-model in PartCraft as 'n soliede liggaam, as 'n nuwe onderdeel of bygevoeg by die huidige een, stel in watter rigting bo is, en voeg skets en kenmerke daarby.
keywords: step, stp, invoer, maak step oop, ap203, ap214, ap242, verskaffermodel, stomp soliede, ingevoerde soliede, opwaartse as, z op, y op, driehoeke, facet, samestellings-step
from: ca0eca5f
---

PartCraft maak STEP-lêers (`.step` of `.stp`, AP203, AP214 en AP242) oop as **soliede liggame** waarop jy kan skets, sny, boor en met jou eie kenmerke kan kombineer. Die liggaam het geen geskiedenis van sy eie nie: jy kan nie die afmetings verander waarmee dit gemaak is nie, jy kan net daarby voeg of daaruit sny.

Hierdie weergawe bou elke onderdeel met die maaskern, so 'n STEP-lêer word **as driehoeke gelees**: plat vlakke bly plat, en geboë vlakke (silinders, keëls, sfere, torusse, B-spline-oppervlaktes) word baie klein plat vlakkies. Die volume kom binne 'n fraksie van 'n persentasie van die presiese een. Om geboë vlakke presies te behou, is 'n presiese kern nodig, wat nie in hierdie weergawe is nie.

## Maak 'n STEP-lêer oop

1. Kies {{ui:Maak oop}} of druk {{key:Mod+O}}, en kies die `.step`- of `.stp`-lêer. Of sleep dit op die 3D-aansig.
2. PartCraft lees die lêer en wys wat dit gevind het, byvoorbeeld: "AP214-lêer: 1 soliede, 10 vlakke, as driehoeke gelees." Hieronder is die driehoekstelling, enigiets wat dit moes weglaat of saamvoeg, en of die resultaat sluit.
3. Kontroleer **Op in die lêer**. 'n STEP-lêer sê sy eie eenheid (millimeter, duim, meter…); PartCraft skakel dit om na millimeter, so **Eenhede in die lêer** wys Millimeter, "die lêer sê so". **Grootte hier** wys hoe groot dit sal wees.
4. Kies {{ui:Maak oop as 'n liggaam}} vir 'n leë onderdeel, of {{ui:Voeg by hierdie onderdeel}} / {{ui:Nuwe onderdeel}} wanneer die onderdeel reeds kenmerke het. Byvoeg vra wat **Gebruik dit om te** doen: byvoeg, sny of net die oorvleueling hou.

Die **Imported1**-kenmerk verskyn in die geskiedenis, en die statusbalk sê byvoorbeeld: "plate.step is 'n soliede liggaam: 57995.937 mm³, 6 plat vlakke om op te skets."

## 'n Samestelling-STEP

'n Samestelling kom in as **een liggaam** met elke onderdeel waar die lêer dit plaas ("3 onderdele wat in die lêer geplaas is, kom in waar hulle staan"). 'n Onderdeel wat twee keer gebruik word, kom twee keer in. Die name van die onderdele en die samestellingsboom word nie behou nie.

## Stel in watter rigting bo is

Die meeste CAD-programme gebruik Z op; PartCraft gebruik Y op. Standaard draai PartCraft die lêer sodat sy Z hier boontoe wys. As die onderdeel op sy sy aankom, kies **Imported1** en stel **Op in die lêer** op **Y op**. **Eenhede in die lêer** en **Gebruik dit om te** kan daar ook verander word; elke verandering is een ontdoen-stap.

## Bou daarop

- Klik op 'n plat vlak van die liggaam en kies {{ui:Skets op hierdie vlak}}. Die plat vlakke van die STEP-model behou hul plek wanneer die liggaam herbou word.
- Voeg snitte, gate, uitsteeksels, patrone en spieëlings by soos op enige onderdeel.
- Kontroleer sy grootte in die **Onderdeel**-kassie: volume, oppervlakte, grootte.

Verrondings, skuinssnytes en skille benodig die presiese kern, soos op enige onderdeel in hierdie weergawe ([Die maaskern](topic:solid-kernels)).

## Waar dit bewaar word

Die driehoeke word **binne** die `.partcraft.json`-lêer gestoor, so die onderdeellêer staan op sy eie: jy het nie die STEP-lêer weer nodig nie.

## Boodskappe

| Boodskap | Wat dit beteken |
|---|---|
| '"part.stp" is nie 'n STEP-lêer nie (dit begin nie met ISO-10303-21 nie).' | Die lêer is nie gewone STEP-teks nie. Vra die sender vir 'n AP203-, AP214- of AP242-STEP-lêer |
| "Die STEP-lêer kon nie gelees word nie: sy datadeel ontbreek of is beskadig." | Die lêer is afgesny of beskadig. Kopieer dit weer |
| "Die STEP-lêer bevat geen soliede of oppervlakliggaam nie: daar is niks om in te bring nie." | Die lêer bevat net tekeninge, punte of data. Vra vir 'n soliede |
| "Daardie STEP-lêer is te groot (oor 60 MB) om hier in te voer." en die leser se ander perke (inskrywings, vlakke, driehoeke) | Vereenvoudig die model by die bron, of stuur onderdele een vir een |
| "… beskadigde reëls in die lêer is oorgeslaan." | Sommige reëls kon nie gelees word nie; die res is ingevoer. Kontroleer die liggaam |
| "… vlakke kon nie in driehoeke omskep word nie en is weggelaat." | Daardie vlakke laat gate, wat PartCraft probeer vul; as die liggaam nie sluit nie, word dit nie bygevoeg nie |
| "… vlakke van 'n soort wat nie gelees word nie (…) is oorgeslaan." | 'n Seldsame oppervlaktipe. Vra vir die model met gewone of B-spline-oppervlaktes |
| "Dit sluit nie …" | Die vlakke vorm nie 'n geslote soliede nie ('n oppervlakmodel, of vlakke wat weggelaat is). PartCraft wys die openings en voeg niks by nie |

## Perke

- Geboë vlakke word as platte fasette geteken en gemeet, soos in elke onderdeel wat hierdie weergawe bou. PartCraft hou die lêer se eie plat vlakke, silinders, keëls, sfere en torusse by die liggaam, so {{ui:Uitvoer}} › {{ui:STEP AP242 (presiese soliede)}} skryf hulle terug as ware oppervlaktes, gate as gate, saam met die kenmerke wat jy byvoeg. Vlakke wat die lêer as splines, swaaie of oppervlaktes van omwenteling gee, bly fasette in die uitvoer. 'n Onderdeel wat voor 0.9.1 gestoor is, het nie behoue oppervlaktes nie: maak die STEP-lêer weer oop om dit te kry.
- {{ui:Uitvoer}} › {{ui:DXF van die skets of plat vlak}} met 'n plat vlak gekies skryf 'n ronde gat van die lêer as 'n ware sirkel.
- Kleure, name van liggame, samestellingstruktuur en PMI (toleransies in die lêer) word nie gelees nie.
- Behalwe STEP maak PartCraft STL-, OBJ- en 3MF-nette oop ([Maak 'n STL, OBJ of 3MF oop](topic:open-meshes)) en `.3dm`-lêers ([Maak 'n .3dm-model oop](topic:open-3dm-files)) as soliede liggame. IGES en ander programme se inheemse lêers word nie ondersteun nie.
- 'n Onderdeel met 'n STEP-soliede wat deur 'n bou met die presiese kern ingevoer is, behou die STEP-teks; hierdie weergawe slaan daardie kenmerk oor ("nie gebou nie"). Maak die STEP-lêer weer oop om dit as driehoeke in te bring.
