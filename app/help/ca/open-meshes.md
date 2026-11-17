---
title: Obre un STL, OBJ o 3MF com a cos sòlid
summary: Converteix una malla d'un escàner, d'un lloc d'impressió 3D o d'un altre programa en un sòlid que podeu tallar, afegir-hi material i fer-hi croquis; què repara PartCraft pel camí i què no pot.
keywords: stl, obj, 3mf, malla, malla a sòlid, convertir malla, escaneig, estanca, reparar, forats, buits, unitats, eix vertical, cos importat, cares planes
from: 7b948471
---

PartCraft obre les malles STL, OBJ i 3MF com a **cossos sòlids**. El cos funciona com qualsevol altre sòlid: es pot tallar, afegir-hi material, perforar-lo, fer-ne una matriu, usar-lo en un conjunt o per a mecanitzar, i fer-hi croquis a les seves cares planes. No té historial propi: una malla són només triangles, de manera que les seves mides no es poden canviar, només afegir-hi material o tallar-hi.

## Obertura d'una malla

1. Trieu {{ui:Obre}} o premeu {{key:Mod+O}}, i escolliu el fitxer `.stl`, `.obj` o `.3mf`. O deixeu-lo anar a la vista 3D.
2. PartCraft la llegeix, repara el que pot reparar amb seguretat i mostra el que ha trobat: quants triangles i punts, cada reparació, i si la malla ara es **tanca**.
3. Comproveu **Unitats al fitxer** i **Amunt al fitxer**. L'STL i l'OBJ no indiquen les seves unitats, de manera que el mil·límetre és l'estimació; un fitxer 3MF indica les seves pròpies. La línia **Mida aquí** mostra la mida del cos amb la vostra elecció, de manera que una peça que surt 25.4 vegades més petita es detecta fàcilment (era en polzades).
4. Si la peça de la pantalla és buida, trieu {{ui:Obre com a cos}}. Si ja té operacions, trieu **Usa-ho per a** (afegir-ho a la peça, tallar-hi o conservar només la superposició), i després {{ui:Afegeix-la a aquesta peça}}, o {{ui:Peça nova}} per començar de nou amb la malla.

Apareix una operació **Imported1** a l'historial. La barra d'estat diu, per exemple, "bracket.stl és un cos sòlid: 15200.512 mm³, 14 cares planes per fer-hi croquis."

## Què repara PartCraft

| Reparació | Què vol dir |
|---|---|
| Cantonades duplicades unides | Un STL repeteix cada cantonada per a cadascun dels seus triangles; s'uneixen en un sol punt |
| Triangles prims eliminats | Triangles fins, les cantonades dels quals són sobre una mateixa línia |
| Triangles duplicats eliminats | Un triangle escrit dues vegades es manté una sola vegada; dos que miren en direccions oposades (una paret interior) s'eliminen tots dos |
| Petits buits tancats | Les arestes que gairebé es toquen (dins d'una mil·lèsima de la mida de la peça) s'uneixen |
| Forats omplerts | Una obertura la vora de la qual és plana s'omple sigui quina sigui la mida; una de corbada només quan és petita |
| Triangles girats cap enfora | Els triangles que miren en la direcció equivocada es giren perquè concordin amb els veïns, i tota la superfície mira cap enfora |

## Quan una malla no es tanca

Un sòlid necessita una superfície sense obertures. Quan PartCraft no en pot tancar cap, el diàleg indica quantes obertures i arestes obertes queden, i no hi ha cap cos per afegir. Tanqueu les obertures al programa que va fer la malla, o exporteu-la de nou com a malla tancada (estanca), i torneu-la a obrir.

PartCraft deixa una obertura sense tocar quan omplir-la podria endevinar malament: un forat gran i corbat, o dues obertures al mateix pla (una cara en forma d'anell que falta, on omplir cada vora cobriria el forat del mig). També s'informa d'una aresta compartida per més de dos triangles: una superfície així no té un interior clar.

## Fer croquis a les seves cares planes

Les zones planes fetes de molts triangles es fusionen cadascuna en una **cara plana**, de manera que hi pot anar un croquis: feu clic a la cara i trieu {{ui:Croquis en aquesta cara}}. Una cara que després es talla o a la qual s'afegeix material continua sent una cara. Les zones rodones (un forat, un arrodoniment) segueixen sent triangles: no són cares que es puguin triar, i la vista en dibuixa el contorn a partir de l'angle entre triangles.

## Canvi posterior

Seleccioneu **Imported1** per veure el fitxer del qual ve, quants triangles té i què s'ha reparat. **Unitats al fitxer**, **Amunt al fitxer** i **Usa-ho per a** es poden canviar allà; cada canvi és un pas del Desfés.

## On es conserva

La malla reparada es desa **dins** del fitxer `.partcraft.json`, de manera que ja no cal el fitxer de la malla. Un fitxer de peça amb un cos de malla és la versió 5: un PartCraft més antic el rebutja per la seva versió. Una malla de 200,000 triangles afegeix uns 1.2 MB.

## Límits

- Com a màxim 3 milions de triangles i 200 MB en un sol fitxer.
- Un cos fet d'una malla el construeix el nucli de malla. Amb el nucli exacte activat (només per a desenvolupadors), ho indica i no es construeix.
- Els materials OBJ, les coordenades de textura i les corbes de forma lliure queden fora; els colors, els materials i els objectes de suport de 3MF també queden fora (el diàleg indica quants objectes s'han saltat).
- El cos és tan fi com la malla: un STL de malla basta dona cares rodones poc fines. Els forats que hi perforeu són tan rodons com les vostres pròpies operacions.
