---
title: Rangskik plat onderdele op velle
summary: Lê plat onderdele op plate of 'n rol met so min afval as wat PartCraft kan vind, nooit nader as die tussenruimte wat jy gee nie, en stoor die uitleg as 'n DXF vir die laser, plasma, waterjet of router.
keywords: rangskik, rangskikking, blad, plaat, rol, laser, plasma, waterjet, router, snywerk, opbrengs, materiaalgebruik, afval, skrap, tussenruimte, snyspleet, korrel, walsrigting, dxf, platpatroon, buitelyne
from: 8dcce1a6
---

**Rangskikking** plaas baie plat onderdele op 'n blad sodat so min materiaal as moontlik oorbly. PartCraft lê die onderdele een vir een neer, elkeen waar dit die gebruikte lengte van die blad die kortste hou, probeer verskeie volgordes en draaiings in 'n paar sekondes, en hou die beste een. Onderdele kan in mekaar se gate sit en in die holte van 'n L of 'n U.

## Maak dit oop

- {{ui:Export}} › {{ui:Nest flat parts on sheets…}} maak dit oop met die onderdeel se platpatroon, of — in 'n samestelling — met die platpatroon van elke plaatwerkonderdeel, so baie as daar kopieë is.
- Op 'n plaatwerkonderdeel: {{ui:Lay flat}} en dan {{ui:Nest on sheets…}} onder die platpatroon.
- {{ui:Add outlines from a DXF…}} voeg elke geslote buitelyn in 'n DXF-lêer as 'n onderdeel by: 'n tekening uit CadCraft wat as DXF gestoor is, of 'n lêer uit jou snymasjien se eie sagteware. 'n Buitelyn binne 'n ander een is 'n gat daarin. Lyne en boë wat end-tot-end aansluit, tel as een buitelyn. Lêers in duim, sentimeter of meter word na millimeter omgeskakel.

:::note
Om plaatwerk plat te lê, is 'n presiese geometriekern nodig (sien [Plaatwerk](topic:sheet-metal)). Buitelyne uit 'n DXF-lêer werk altyd.
:::

## Stel dit op

Gee vir elke onderdeel **hoeveel** jy nodig het en sy **korrel**: {{ui:Any direction}}, {{ui:Along the sheet (as drawn)}} vir geborsteld of gewalste plaat wat in een rigting moet loop, of {{ui:Across the sheet}}.

Onder **Velle**:

- **Voorraad**: {{ui:Plates}} van 'n gegewe lengte en breedte (en hoeveel jy het; 0 = soveel as nodig), of {{ui:A roll}} van 'n gegewe breedte, so lank as nodig.
- **Randmarge** word aan elke rand van die blad vry gehou (vir klampe, of 'n ru rand).
- **Ruimte tussen onderdele** is die kleinste afstand tussen twee snylyne: ten minste jou snywerktuig se snyspleet, plus wat die materiaal nodig het.
- **Draaiings**: die hoeke waarheen 'n onderdeel gedraai mag word, by verstek elke 90°. Minder draaiings loop vinniger; meer kan die blad beter benut.
- **Onderdele mag omgedraai word** laat toe dat 'n onderdeel onderstebo gelê word. Laat dit af vir plaatwerk: 'n platpatroon wat omgedraai gelê word, buig die ander kant toe.

Druk {{ui:Nest}}. Die voorskou wys elke blad; die feite sê hoeveel plate (of hoeveel van die rol) dit gebruik het en hoeveel van die materiaal die onderdele beslaan. Enigiets wat nie pas nie, word genoem.

## Stoor dit

{{ui:Save DXF}} skryf die uitleg as 'n DXF (R12, millimeter), een blad onder die volgende: die blaaie se buitelyne op laag SHEET, die onderdele op PARTS (boë bly boë), elke onderdeel se naam op LABELS.

:::tip
Om verskeie onderdele te meng, rangskik gewoonlik beter as baie kopieë van een: klein onderdele vul die gapings tussen groot.
:::

## Sny die velle (G-kode)

**Export › Nested sheets to G-code** lees 'n geneste DXF (hierdie een, of die Cabinets-byvoeging se velle in CadCraft) en maak een program per blad deur die nabewerker wat jy kies: gate en uitsnedes eerste, dan die buitelyne, elke snit die gereedskap se radius buite die onderdeel, deur die blad en 1 mm meer, met lipies as jy dit vra. Die nabewerkerlys is die ingeboude nabewerkers plus jou Vervaardiging-studie se eie. Kontroleer elke program in 'n simulator voordat jy dit laat loop: boor en holtes word nie gemaak nie.

## Wat om na te gaan

PartCraft kontroleer elke uitleg weer op die ware vorms (nie die rooster waarmee dit gesoek het nie): geen twee onderdele nader as die tussenruimte nie, niks in die marges nie. Dit beplan nie die snit nie: insnyding, die snyvolgorde, deel van rande een keer snyding en die oorblywende blad behou, is jou snywerk se sagteware se werk. Kontroleer die DXF daar voordat jy sny.
