---
title: Hou 'n .3dm-model lewendig
summary: Verander 'n model in die program wat dit gemaak het en kyk hoe PartCraft se liggaam volg, vanaf Rhino 8 of 'n Grasshopper-definisie, met jou kenmerke herbou op die nuwe vorm.
keywords: rhino, grasshopper, lewendige skakel, lewendige verbinding, 3dm, nurbs, parametries, skakel, sinkroniseer, skrip, stoot, ingevoerde liggaam
from: cf4dc9b2
---

Hou aan om die model te vorm waar jy dit modelleer, en masjineer, kontroleer en dokumenteer dit hier. Elke verandering in die ander program vervang een ingevoerde liggaam in PartCraft, en die kenmerke ná dit herbou op die nuwe vorm.

:::note
Die skakel benodig **CadCraft Studio** op dieselfde rekenaar. 'n Blaaiergeleentheid kan nie die verbinding neem nie. Niks gaan oor die internet nie: die skrip praat met Studio by hierdie rekenaar se eie adres, met 'n token.
:::

:::warning
Hierdie skakel is getoets met die skrip se lêerskrywer en 'n plaasvervanger vir die ander program, nog nie binne Rhino of Grasshopper self nie. As iets daar misluk, vertel ons wat dit gesê het.
:::

## Stel dit op

1. In Studio, maak PartCraft oop. In {{ui:Instellings}} › {{ui:PartCraft}} › {{ui:Assistente}}, merk **Laat KI-assistente en skrifte PartCraft gebruik**, dan **Wysig**.
2. In Studio, kies {{ui:Koppel 'n assistent}}. Dit wys die adres en die token wat jy hieronder sal plak.
3. Laai die skrip af: [cadcraft_link.py](https://getcadcraft.com/assets/link3dm/cadcraft_link.py).

## Vanaf Rhino

1. Voer `cadcraft_link.py` uit in Rhino se skripredigeerder (Python 3 in Rhino 8).
2. Die eerste keer, plak die adres en die token. Hulle word in `.cadcraft-link.json` in jou tuisgids gehou, nooit in die model nie. Studio maak elke keer as dit begin 'n nuwe token, so die skrip vra dan weer.

Voer die skrip weer uit om te stop.

## Vanaf Grasshopper

Voer die skrip een keer in Rhino eers uit, sodat die adres en token gestoor word.

1. Voeg 'n Skrip-komponent (Python 3) by en plak die hele `cadcraft_link.py` daarin.
2. Gee dit hierdie insette: `G` (die meetkunde, met lystoegang), `N` ('n naam, opsioneel), `On` ('n boolese skakelaar), en `Target` (opsioneel: `model` of `part`, as albei programme oop is).
3. Stel `On` op waar.

Elke oplossing stuur `G` oor en vervang wat die komponent die vorige keer gestuur het.

## Hoe dit hier werk

- **Een liggaam.** Alles wat sigbaar is in die model word een ingevoerde kenmerk, soos wanneer jy 'n [.3dm-lêer oopmaak](topic:open-3dm-files).
- **Dit moet sluit.** PartCraft vul klein gate en plat openinge, en die ander program word vertel hoeveel. As die model nog nie sluit nie, hou PartCraft die liggaam wat dit gehad het, en die statusbalk sê so. Die volgende verandering wat sluit, werk dit by.
- **Voltooi wat jy doen.** In 'n skets of 'n tekening word opdaterings geweier en weer probeer; hulle kom aan sodra jy weer in die model is.
- **Ontdoen.** Opdaterings binne twee sekondes van mekaar deel een ontdoenstap.
- **Stoor.** Die onderdeellêer hou die skakel. Voer die skrip weer uit nadat jy dit oopmaak, en dieselfde kenmerk werk by.

**Net een rigting.** Veranderinge hier gaan nie terug na die ander program nie.

## As iets verkeerd gaan

- **"Geen ModelCraft- of PartCraft-venster laat dit toe nie":** doen stap 1 van die opstelling.
- **"Studio het die token geweier":** Studio is herbegin. Kopieer die nuwe token en voer die skrip weer uit. Vir Grasshopper, voer dit eers in Rhino uit.
- **"Kan nie CadCraft Studio bereik nie":** Studio loop nie, of die adres het verander.
