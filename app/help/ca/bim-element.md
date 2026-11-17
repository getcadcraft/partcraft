---
title: Dissenya un element de BimCraft i torna'l a desar
summary: Una peça enviada des de BimCraft s'obre amb l'edifici al voltant, en gris i de només lectura. Canvieu-la i després torneu-la a desar perquè BimCraft pugui acceptar la nova forma.
keywords: bimcraft, bim, element, enviar, torna a desar, enllaç, edifici, context, veïns, suport, escaire, ifc, acceptar
from: 0978fe53
---

## Què hi fareu

Treballareu en una peça que ve d'un model de BimCraft, al seu lloc dins de l'edifici, i en tornareu la nova forma.

## Passos

1. A BimCraft trieu un element i trieu {{ui:Enllaços de la peça}} › {{ui:Envia a PartCraft}}. PartCraft l'obre com a peça nova. La barra d'estat diu que és un element BIM.
2. Els elements del voltant (a menys de 3 m) es dibuixen en gris. Hi són perquè hi dissenyeu. No els podeu triar ni canviar, i no es desen al fitxer de la peça.
3. Canvieu la peça com qualsevol altra: talleu, afegiu, perforeu, simetritzeu. El seu origen i els seus eixos són els de l'element, de manera que la peça torna on estava.
4. Trieu {{ui:Fitxer}} › {{ui:Exporta}} › {{ui:Torna a desar a BimCraft}}. La barra d'estat diu quina revisió heu enviat.
5. A BimCraft l'element apareix com a canviat fins que la persona que hi és l'accepti.

## Què hauríeu de veure

- La peça conserva el seu enllaç al fitxer. Quan l'obriu més tard, la barra d'estat encara diu que és un element BIM. L'edifici gris torna mentre el navegador tingui el paquet amb què es va enviar.
- Tornar a desar després envia la revisió 2, 3 i així successivament. BimCraft es queda amb la més recent.

## Bon a saber

- La forma torna com a malla en mil·límetres, en els eixos propis de l'element. Les funcions es mantenen a PartCraft.
- {{ui:Torna a desar a BimCraft}} no fa res per a una peça que no ve de BimCraft.
- Una peça sense cap sòlid encara no té res per enviar.
- Les dues aplicacions han d'estar obertes al mateix navegador: no es puja res, les dues pàgines es passen l'element entre elles.
