---
title: Mecanitzat de 4 i 5 eixos
summary: Indiqueu a PartCraft quins eixos rotatius té la màquina, inclineu l'eina per a qualsevol operació ordinària, acabeu una superfície amb una fresa de punta esfèrica que s'inclina mentre talla, o gireu la peça sota l'eina en un 4t eix. Què s'escriu al G-code, i què no s'ha provat.
keywords: 5 eixos, cinc eixos, 4 eixos, quart eix, multieix, multi-eix, 3+2, indexat, posicional, inclinació, eina inclinada, rotatiu, trunnió, taula, capçal, eix A, eix B, eix C, TCP, RTCP, punt central de l'eina, G43.4, temps invers, G93, cinemàtica, pivot, tall amb el flanc, angle d'avanç
from: c4f1c491
---

Fabricació pot mantenir l'eina en un angle, i pot moure els eixos rotatius mentre talla. Tres coses ho fan, de la més senzilla a la més complexa.

**Res d'això no s'ha executat en una màquina.** Les trajectòries es comproven amb la geometria mitjançant les proves i el G-code es torna a llegir, però els postprocessadors integrats segueixen els codis documentats dels controls, no cap màquina que tinguem davant. Proveu un programa al simulador del vostre control i a l'aire abans que toqui el metall.

## Els eixos rotatius de la màquina

A la pestanya **Preparació**, {{ui:Eixos rotatius}} indica què té la màquina:

| Opció | La màquina |
|---|---|
| Cap (3 eixos) | Una fresadora simple. Qualsevol operació que necessiti l'eina inclinada avisa, i el postprocessador es nega a escriure-la. |
| A (gira al voltant de X) | Un eix rotatiu al llarg de X: una taula de 4t eix o un indexador. L'eina només pot inclinar-se al pla Y–Z. |
| B (gira al voltant de Y) | Un eix rotatiu al llarg de Y. L'eina només pot inclinar-se al pla X–Z. |
| A i C | Un eix d'inclinació al voltant de X, portat per un gir al voltant de Z o que el porta: una taula de trunnió, o un capçal. |
| B i C | El mateix amb la inclinació al voltant de Y. |

Després:

- **Portat per**: {{ui:La taula (la peça gira)}} o {{ui:El capçal (l'eina gira)}}. Una taula gira en sentit contrari per portar la mateixa cara sota l'eina, de manera que el signe de cada angle se'n deriva.
- **El control manté la punta de l'eina sobre la trajectòria (TCP)**: activat, X Y Z del programa són la punta de l'eina en les coordenades pròpies de la peça i el control fa la resta (els postprocessadors integrats d'estil Fanuc i de LinuxCNC escriuen `G43.4` per a la longitud de l'eina). Desactivat, en una màquina de taula, PartCraft escriu X Y Z tal com la taula girada porta la peça, al voltant del **centre de rotació** que doneu (en coordenades de treball; 0, 0, 0 quan l'origen de treball és al centre). Una màquina amb capçal necessita el TCP activat: sense ell, el programa necessitaria la longitud de pivot de la màquina, que PartCraft no coneix.
- **Límit d'inclinació**: fins on arriba l'eix d'inclinació.

Les màquines es diferencien en el sentit que consideren positiu. Si un eix gira al revés a la vostra, canvieu el signe en una còpia del postprocessador ([Postprocessadors que podeu editar](topic:post-processors)).

## Una eina inclinada per a una operació ordinària

Cada operació de fresatge (cara, buidatge, adaptatiu, contorn, perforació, xamfrà, paral·lel, festó, desbast 3D, resta) té una **Inclinació de l'eina** i **Inclina cap a**: la direcció de l'eina només per a aquella operació, mesurada des de l'eix d'eina de la preparació. Això és mecanitzat 3+2: els eixos rotatius van a una posició i s'hi queden mentre tres eixos tallen.

- Escriviu els dos angles, o premeu {{ui:Eina perpendicular a una cara}} i feu clic a una cara plana: l'eina apuntarà directament cap a ella.
- Seleccioneu les cares i les arestes de l'operació com de costum. El que compta com a fons o com a forat es jutja al llarg de l'eina inclinada.
- El material en brut per a aquella direcció és la caixa que conté el material girat, de manera que les alçades i les llibertats són segures des d'aquell costat.

Al G-code, abans de l'operació l'eina puja, els eixos rotatius giren i l'eina baixa sobre el seu primer punt. En una màquina de taula sense TCP, els arcs es mantenen com a arcs i els cicles de perforació fixos es mantenen com a cicles (el marc escrit només gira al voltant de Z). Amb TCP en un pla inclinat, els arcs es converteixen en línies curtes i els cicles en els moviments que representen.

La simulació del material executa una direcció inclinada **per si sola**: mostra el que aquella operació talla del material sencer vist des del seu costat, i troba rascades allà, però els talls fets des d'altres direccions no es traslladen.

## Acabat de 5 eixos

{{ui:Més}} a la barra d'eines de Fabricació enumera aquesta operació i la següent a la part superior de la pestanya **Operacions**.

{{ui:5 eixos}} és la [passada d'acabat paral·lel](topic:finish-3d) amb una **fresa de punta esfèrica que s'inclina mentre avança**. Una bola talla amb una esfera, i l'esfera és la mateixa sigui quina sigui la manera com s'inclina l'eina al voltant del seu centre; per tant, la bola segueix exactament la trajectòria que donaria la passada de 3 eixos i només canvia la direcció de l'eina:

- **Cap a la superfície**: 1 = perpendicular a la superfície, 0 = vertical, qualsevol valor intermedi.
- **Inclinació endavant**: graus en la direcció del tall, de manera que el centre quiet de la bola no sigui el que talla.
- **Inclinació màxima**: l'eina mai no s'inclina més enllà d'això respecte de l'eix de la preparació.

On el mànec tocaria el model, la inclinació es redueix fins que queda lliure, i l'operació indica en quants punts. Cada passada s'entra i se surt amb una elevació recta.

## Acabat rotatiu (4t eix)

{{ui:Rotatiu}} és per a una peça subjectada al llarg de **X de treball** en un eix rotatiu. La peça gira i una fresa de punta esfèrica, que sempre apunta a l'eix, segueix la seva superfície:

- **Passades**: {{ui:Al llarg de l'eix}} (línies al llarg de X, separades un pas lateral de gir) o {{ui:Al voltant de la peça}} (anells, separats un pas lateral de X).
- **Eix a Y / Z**: on és l'eix. Buit vol dir el centre del material en brut. En una màquina de taula sense TCP ha de ser el centre de rotació de Preparació; l'operació avisa quan no ho és.
- **Des de / Fins a X** i **Des de / Fins a angle**: la part de la longitud i del gir a tallar.

L'alçada de la bola sobre l'eix en cada punt és la caiguda exacta d'una esfera sobre la malla de la peça, des d'aquell costat.

## Límits

- L'acabat de 5 eixos i el rotatiu només admeten una **fresa de punta esfèrica**. No hi ha tall amb el flanc de l'eina (el costat de l'eina en una paret reglada), ni línies de flux al llarg de les direccions pròpies d'una superfície, ni desbast multieix, ni elecció automàtica de la inclinació per evitar una col·lisió.
- Les trajectòries de 5 eixos i rotatives **no passen per la simulació del material**, que és un mapa d'altures i no pot representar un tall inclinat.
- El mànec es comprova a l'acabat de 5 eixos contra el model vist des de dalt; el portaeines, el capçal i la mateixa màquina no es comproven enlloc.
- L'acabat rotatiu talla només el que l'eina pot veure mirant cap a l'eix.
- L'acabat de 5 eixos triga un minut o més a calcular-se en una peça gran: el mànec es comprova en cada punt de cada passada.
- Quan els eixos rotatius es mouen amb els lineals i el TCP està desactivat, els postprocessadors integrats escriuen l'avanç com a temps invers (`G93`) i després tornen a `G94`.
- No s'escriu cap codi de pla de treball inclinat (`G68.2` i similars), i no es coneixen límits específics de cada màquina, desembolicat ni zones de col·lisió.
