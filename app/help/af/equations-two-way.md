---
title: Vergelykings in albei rigtings
summary: Verander 'n parameter en die onderdeel volg. Tik 'n nuwe grootte in 'n aangedrewe getal en PartCraft werk die parameter agter dit uit, en vra watter een wanneer verskeie kan verander.
keywords: vergelykings, oplos agteruit, aangedrewe maat, twee rigtings, omgekeerd, doelsoek, parameters, gekoppelde waardes, watter parameter
from: 82dc0269
---

'n Vergelyking soos **Extrude1 diepte = thick + extra** werk in albei rigtings.

## Vorentoe: verander die parameter

Op die {{ui:Parameters}}-blad verander jy `thick` van 20 na 30. Extrude1 se diepte word 30 + extra, en die onderdeel bou weer.

## Agteruit: verander die aangedrewe getal

1. Klik op "Extrude1" in die geskiedenis. Sy **Diepte (mm)**-blokkie wys **ƒ**: 'n vergelyking dryf dit.
2. Tik die grootte wat jy wil hê, byvoorbeeld `40`, en druk {{key:Enter}}.

PartCraft los op vir die parameter agter die vergelyking, deur soveel stappe as wat dit neem (`depth = hub_h`, `hub_h = disc_t + 50`: 'n hoogte tik verander `disc_t`). Die statusbalk sê wat verander het, byvoorbeeld dat extra van 5 na 15 gegaan het.

Wanneer twee of meer parameters die getal dryf, vra 'n blokkie **Watter parameter moet verander?** en lys hulle. Klik een. Die ander hou hul waardes. {{ui:Kanselleer}} verander niks nie.

Dieselfde werk in 'n skets: dubbelklik op 'n aangedrewe maat, tik 'n waarde en druk {{key:Enter}}. Dit werk ook in die **Waarde**-kolom van die parametertabel, vir 'n parameter wat self 'n uitdrukking is.

## Wanneer dit nie kan nie

- 'n Getal wat heel moet wees ('n patroontelling), of binne 'n reeks moet bly ('n hoek tot 360°), word geweier voordat iets verander.
- 'n Vergelyking van slegs vaste getalle (`=40`) het geen parameter om te verander nie. Die getal wat jy tik, vervang dit.
- As geen waarde van die parameter die grootte gee wat jy getik het nie, sê die statusbalk so en niks verander nie.
- 'n Skets wat nie met die nuwe waarde opgelos kan word nie, hou sy vorige waardes, en die statusbalk noem die skets.

Elke verandering, in albei rigtings, is een stap vir {{key:Mod+Z}} en {{key:Mod+Y}}.
