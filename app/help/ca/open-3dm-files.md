---
title: Obre un model .3dm com a cos sòlid
summary: Porteu les malles, les polisuperfícies i els blocs d'un fitxer .3dm a PartCraft com un sol cos sòlid que podeu tallar, afegir-hi material i fer-hi croquis; d'on vénen els triangles i què queda fora.
keywords: 3dm, nurbs, polisuperfície, brep, superfícies, malla de renderització, extrusió, blocs, importació, malla a sòlid, unitats, cos importat
from: 8ae9571b
---

PartCraft obre els fitxers `.3dm` com a **cossos sòlids**, de la mateixa manera que obre una [malla STL, OBJ o 3MF](topic:open-meshes). El cos funciona com qualsevol altre sòlid: es pot tallar, afegir-hi material, perforar-lo, fer-ne una matriu i fer-hi croquis a les seves cares planes. No té historial propi.

## Obertura del fitxer

1. Trieu {{ui:Obre}} o premeu {{key:Mod+O}}, i escolliu el fitxer `.3dm`. O deixeu-lo anar a la vista 3D.
2. PartCraft el llegeix i mostra el que ha trobat: quants objectes amb cares entren, quantes cares venen de les malles desades al fitxer i quantes ha tessel·lat PartCraft, cada reparació, i si el resultat es **tanca**.
3. Comproveu **Unitats al fitxer** (el fitxer indica les seves pròpies; una unitat que PartCraft no llista, com les iardes, es converteix en mil·límetres) i **Amunt al fitxer**.
4. Trieu {{ui:Obre com a cos}}, o **Usa-ho per a** i {{ui:Afegeix-la a aquesta peça}} quan la peça ja té operacions.

## D'on venen els triangles

En aquesta versió PartCraft construeix els cossos a partir de triangles, de manera que cada superfície del fitxer es converteix en petites cares planes. Per a cada cara d'una polisuperfície (i per a cada extrusió) pren la **malla de renderització desada al fitxer** quan n'hi ha, i si no **la tessel·la ella mateixa** (plans, superfícies NURBS, superfícies de revolució, corbes extruïdes i extrusions, retallades per les seves arestes). Les cares d'una polisuperfície comparteixen els punts de les arestes, de manera que una polisuperfície tancada entra tancada. Una cara d'un tipus de superfície que PartCraft encara no llegeix queda fora, i el diàleg indica quantes i de quin tipus; aleshores el resultat normalment no es tanca.

## Tot el fitxer es converteix en un sol cos

Cada malla, polisuperfície i extrusió visible, i cada col·locació d'un bloc, va a **un sol** cos on el fitxer el col·loca. Els objectes ocults, o els que són en una capa desactivada, queden fora. Quan el fitxer conté diversos sòlids separats, el cos té diverses peces: obriu-ne cadascun des del seu propi fitxer si els voleu com a cossos separats.

## Què queda fora (i s'indica)

Les corbes, els punts, els núvols de punts, el text, les cotes, les trames i les llums queden fora: un cos només pren cares. També queden fora els objectes SubD (converteix-los en malles o polisuperfícies al programa que va fer el fitxer primer), els blocs enllaçats d'altres fitxers, i els colors, les capes i els noms (els cossos de PartCraft aquí no en tenen de propis).

## Quan no es tanca

Les polisuperfícies i superfícies obertes (una sola superfície retallada, una forma amb una cara que falta) no tenen interior, de manera que no poden ser un sòlid. El diàleg indica quantes obertures queden i no afegeix res. Uniu o tanqueu la forma al programa que la va fer, deseu-la i torneu-la a obrir. Vegeu [Quan una malla no es tanca](topic:open-meshes#when-a-mesh-does-not-close).
