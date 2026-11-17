---
title: Dryf 'n onderdeel met parameters
summary: Noem die groottes wat saak maak (breedte, dikte, boutgrootte), koppel enige kenmerknommer of sketsmaat daaraan met =, en verander die hele onderdeel vanuit een tabel.
keywords: parameters, waar gebruik, gebruik deur, globale veranderlikes, veranderlikes, vergelykings, ontwerpbedoeling, dryfmaatte, skakel, uitdrukking, formule, noem 'n maat, gekoppelde waardes
from: 58c646ea
---

'n Parameter is 'n genoemde getal, soos `width = 120` of `margin = bolt * 1.5`. Koppel 'n diepte, 'n gatdeursnee, 'n patroontelling of 'n sketsmaat daaraan, en die verandering van die parameter verander almal in een stap. So hou jy die ontwerpbedoeling in die onderdeel in plaas van in jou kop.

## Voeg parameters by

1. Klik in die regterpaneel die {{ui:Parameters}}-oortjie.
2. Onder **Variables**, tik 'n naam in die "name"-kassie, byvoorbeeld `width`.
3. Tik die waarde in die volgende kassie, byvoorbeeld `120`, en druk {{key:Enter}} (of klik {{ui:Add}}).

'n Waarde kan 'n getal of 'n uitdrukking van ander parameters wees: `bolt * 1.5`, `width / 2 - 10`, `if(width > 100, 6, 4)`. Die **Value**-kolom wys wat dit uitwerk. 'n Naam begin met 'n letter of `_` en het net letters, syfers en `_`; name van funksies en eenhede (`sin`, `mm`, `pi`) word geweier, en so ook 'n lus soos `a = b` met `b = a`.

## Koppel 'n getal aan 'n parameter

1. Klik 'n kenmerk in die geskiedenis, byvoorbeeld "Extrude1". Die instellings wys op die {{ui:Properties}}-oortjie.
2. Tik in 'n getalkassie, soos **Depth (mm)**, `=` en 'n uitdrukking: `=thick` of `=width / 4`.
3. Druk {{key:Enter}}.

Die kassie wys nou die resultaat, en 'n **ƒ**-knoppie verskyn langs sy etiket. Wys daarop om die vergelyking te sien. Sketsmaatte werk op dieselfde manier, sowel in die **Sketch dimensions**-lys van 'n kenmerk as in die maatkassie van 'n oop skets (dubbelklik 'n maat, tik `=width`, druk {{key:Enter}}).

Getalle wat jy kan koppel: ekstrusiediepte, roteerhoek, gatdeursnee, diepte en verlaagde kontrabore-groottes, patroontelling, spasiëring en hoek, afrondingsradius, skuinssnitafstand, skildikte van 'n skaal, elke sketsmaat, en die groottes van die nuwer kenmerke (tweede diepte, taps toelopend, verdiepte kop, verwysingsvlakafstand, draft-hoek en ander).

## Verander 'n parameter

Op die {{ui:Parameters}}-oortjie, tik 'n nuwe waarde of uitdrukking in die **Expression**-kolom en druk {{key:Enter}}. Alles wat daaraan gekoppel is, verander en die onderdeel bou weer, as een stap: {{key:Mod+Z}} maak dit ongedaan.

Om 'n getal van die ander kant af te verander, sien [Vergelykings in albei rigtings](topic:equations-two-way).

## Sien waar 'n parameter gebruik word

Onder elke parameter op die {{ui:Parameters}}-oortjie sê 'n reël wat dit gebruik:

- die getalle wat dit dryf, soos **Extrude1 depth** of **Sketch1 D2 (distance)**. Klik een om sy kenmerk te kies en sy eienskappe te wys;
- die getalle wat dit **deur** ander parameters dryf, soos **Hole1 diameter (through h, d)** wanneer `d = h + 2` en `h = w / 2`;
- die **parameters** wie se uitdrukkings dit gebruik, die **konfigurasies** wat dit stel, en die **skrifte** wat dit lees (sien [Skryf en laat skrifte loop](topic:craftscript)).

"Not used yet." beteken niks gebruik dit nie: jy kan dit sonder vra skrap.

## Ontkoppel, hernoem, skrap

- **Ontkoppel 'n getal:** klik sy **ƒ**-knoppie, of {{ui:Unlink}} in die **Equations**-lys. Dit hou sy huidige waarde en geen parameter verander dit meer nie.
- **Hernoem 'n parameter:** tik 'n nuwe naam in sy **Name**-kassie. Elke uitdrukking wat dit gebruik, word herskryf.
- **Skrap 'n parameter:** klik × op sy ry. As iets dit gebruik, vra PartCraft of dit eers sy huidige waarde in daardie uitdrukkings moet skryf.
- **Skrap 'n kenmerk** laat die vergelykings van sy getalle val; die statusbalk sê watter.

:::note
Parameters word in die `.partcraft.json`-lêer gestoor (as lêerweergawe 3). 'n Onderdeel sonder parameters word presies soos voorheen gestoor.
:::

## Uitdrukkings

| Skryf | Beteken |
|---|---|
| `120`, `12.5`, `1e3` | 'n getal (millimeter, of grade vir 'n hoek) |
| `2in`, `1ft`, `3"`, `1.5cm`, `0.2m` | 'n lengte in ander eenhede, omgeskakel na millimeter |
| `30deg`, `0.5rad` | 'n hoek, omgeskakel na grade |
| `+ - * / %` en `^` | rekenkunde; `^` is 'n mag, `-2^2` is −4 |
| `sin cos tan asin acos atan atan2` | trigonometrie in grade |
| `sqrt pow exp ln log abs sign` | ander funksies |
| `ceil floor int round(x, digits) min max` | afronding en grense |
| `if(test, a, b)` met `< <= > >= == !=` | 'n keuse: `if(bolt >= 16, 6, 8)` |
| `pi` | 3.14159… |

Name is hooflettergevoelig: `Width` en `width` is twee parameters.

Sien ook [Konfigurasies en ontwerptabelle](topic:design-tables) en [Skrifte en die opdragreël](topic:scripts-and-cli).
