---
title: Modelar una peça junts amb Live TeamWork
summary: Què canvia a PartCraft mentre sou en una sessió de Live TeamWork de CadCraft Studio: les operacions de tothom en un sol arbre, cada finestra construint el mateix sòlid, el vostre propi desfer, i unir-se des d'un navegador de la mateixa xarxa.
keywords: live, live teamwork, studio live, junts, col·laborar, sessió, compartir en viu, unir-se, arbre d'operacions, historial, reconstruir, cursor, punter, veure's els uns als altres, noms, color, selecció, desfer, amfitrió
from: 1809b96c
---

## Què aprendreu

Què passa amb una peça mentre diverses persones la modelen alhora. CadCraft Studio inicia i uneix la sessió de Live TeamWork (Comparteix, Uneix-te); aquesta pàgina tracta de la peça en si.

## Tothom modela alhora

Tothom treballa sobre el mateix arbre d'operacions: croquis, extrusions, forats, matrius, arrodoniments, paràmetres. Les vostres edicions es veuen a l'instant; les dels altres apareixen un moment després de fer-les. Només viatja l'arbre: cada finestra construeix el sòlid per si mateixa, i el nucli de PartCraft construeix el mateix sòlid a partir del mateix arbre a totes les finestres.

- **Dues persones canvien una mateixa operació:** els ajustos diferents (un la profunditat, l'altre la condició final) es mantenen tots dos; el mateix ajust es queda amb el canvi posterior.
- **Un croquis** viatja sencer: quan dues persones editen un mateix croquis alhora, guanya l'edició posterior. Acordeu qui dibuixa cada croquis.
- **Una operació construïda sobre una que algú acaba de suprimir** (una extrusió d'un croquis eliminat, un forat en una cara eliminada) es desfà, i la barra d'estat indica per què.
- **Reordenar l'arbre** es comprova: si dues persones arrosseguen operacions al mateix moment, el segon moviment es desfà.

## Veure's els uns als altres

Tothom de la sessió té un color propi. Veieu el punter de cada persona com una fletxa del seu color amb el seu nom al costat, sobre la cara que està apuntant. Quan té una operació seleccionada a l'arbre, el seu nom es mostra després del de la persona.

Els punters, els noms i les seleccions només són per a la sessió: mai no es desen al fitxer i mai no entren al desfer de ningú. Es desplacen fins on és cada persona, de manera que van suaus fins i tot amb una connexió lenta.

## Desfer desfà la vostra feina

{{key:Mod+Z}} desfà la vostra darrera edició i deixa en pau les dels altres. Quan algú ha canviat la mateixa cosa des de llavors, no es desfà res i la barra d'estat indica qui ho ha fet.

## Unir-se des d'un navegador

Una persona de l'equip sense Studio pot escanejar la imatge que hi ha sota el codi de l'amfitrió amb un telèfon, una tauleta o un ordinador de la mateixa xarxa. PartCraft s'obre al navegador, s'omple amb la peça de l'amfitrió quan aquest us deixa entrar, i la construeix. Un enllaç d'invitació permet que algú s'uneixi des d'una altra xarxa: l'amfitrió necessita una plaça del Team Cloud Plan per a l'aplicació, la resta s'uneixen gratis, i l'enllaç només funciona mentre la sessió de l'amfitrió és oberta.

## Quan acaba la sessió

Només l'amfitrió desa la peça. La resta es queda amb una còpia no desada: deseu-la si la voleu conservar.

:::note
Els conjunts encara no es comparteixen en una sessió: obriu la peça en si per treballar-hi junts.
:::
