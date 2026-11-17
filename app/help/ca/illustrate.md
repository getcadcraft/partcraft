---
title: Comença un manual a Il·lustra
summary: L'espai de treball Il·lustra fa manuals a partir del disseny: vistes, dibuixos de línies explosionats amb globus i una llista de peces, instruccions pas a pas, animacions i un fitxer 3D que el client pot obrir sense CAD. Un manual és un fitxer propi.
keywords: il·lustra, manual, il·lustració tècnica, documentació, vista explosionada, llista de peces, instruccions, partcraft-manual
from: e447e0ab
---

**Il·lustra** és l'espai de treball per als documents que calen al voltant d'un disseny: vistes explosionades amb globus i una llista de peces, il·lustracions de dibuix de línies per a manuals, instruccions pas a pas, animacions i un fitxer 3D que un client pot obrir sense CAD. Trieu {{ui:Il·lustra}} al selector {{ui:Espai de treball}} a l'inici de la barra d'eines.

Un **manual** és un fitxer propi (`<name>.partcraft-manual.json`). Guarda una còpia de la forma de cada peça, l'arbre de productes i les propietats de les peces, i un enllaç a l'origen, de manera que podeu treballar en el manual mentre el disseny continua. Quan canvia el disseny, [Actualitza des del disseny](topic:illustrate-update) n'incorpora els canvis.

## Crear-ne un

Feu clic a {{ui:Nou}} al grup {{ui:Manual}} i després:

- {{ui:Des de la peça oberta}}: la peça oberta en Disseny.
- {{ui:Des del conjunt obert}}: es mostra en lloc de l'anterior quan hi ha un conjunt obert; les seves peces, les seves posicions, els números de peça, els materials i les vistes explosionades s'hi porten.
- {{ui:Des d'un fitxer de conjunt…}}: un `.partcraft-asm.json` desat; PartCraft construeix primer les seves peces.
- {{ui:Des d'un altre fitxer…}}: glTF (.glb, .gltf), OBJ, STL o 3MF. S'hi conserven l'arbre i els noms del fitxer, i les còpies d'una mateixa peça (la mateixa forma col·locada dues vegades) es converteixen en una sola peça amb una quantitat. Els fitxers STL i OBJ no indiquen la seva unitat, de manera que se us pregunta. Els fitxers STL es llegeixen amb Z cap amunt; glTF i 3MF indiquen la seva pròpia.

Mentre hi ha un manual obert, Il·lustra mostra la còpia pròpia del manual de les peces; la peça o el conjunt oberts en Disseny queden amagats fins que torneu a Disseny.

## Desa i obre

{{ui:Desa}} al grup {{ui:Manual}} (o {{key:Mod+S}}) desa el manual; {{ui:Obre}} n'obre un. Cada canvi a Il·lustra és un pas de l'historial propi del manual: {{ui:Desfés}} i {{ui:Refés}} actuen sobre el manual mentre Il·lustra és obert.

## Encara no implementat

- Els fitxers STEP encara no s'obren des de {{ui:Des d'un altre fitxer…}}. Obriu el STEP en Disseny (hi arriba com a cos sòlid: vegeu [Obre un fitxer STEP i construeix-hi a sobre](topic:import-step)) i comenceu el manual amb {{ui:Des de la peça oberta}}, o deseu-lo com a glTF, 3MF, OBJ o STL.
- ModelCraft i BimCraft encara no poden passar un model directament a Il·lustra: deseu-lo com a glTF (.glb) i useu {{ui:Des d'un altre fitxer…}}.

Següent: [Vistes i aspectes](topic:illustrate-views).
