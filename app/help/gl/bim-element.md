---
title: Deseñar un elemento de BimCraft e gardalo de volta
summary: Unha peza enviada desde BimCraft ábrese co edificio ao seu redor, en gris e só de lectura. Cámbiea e despois gárdea de volta para que BimCraft poida aceptar a nova forma.
keywords: bimcraft, bim, elemento, enviar, gardar de volta, ligazón, edificio, contexto, veciños, apoio, suxeitador, ifc, aceptar
from: 0978fe53
---

## O que vai facer

Traballar cunha peza que procede dun modelo de BimCraft, no seu lugar do edificio, e enviar a nova forma de volta.

## Pasos

1. En BimCraft seleccione un elemento e escolla {{ui:Ligazóns de peza}} › {{ui:Enviar a PartCraft}}. PartCraft ábreo como unha peza nova. A barra de estado indica que é un elemento BIM.
2. Os elementos ao seu redor (a menos de 3 m) débuxanse en gris. Están aí para deseñar a partir deles. Non se poden seleccionar nin cambiar, e non se gardan no ficheiro da peza.
3. Cambie a peza como calquera outra: cortar, engadir, furar, espellar. A orixe e os eixos son os do propio elemento, así que a peza volve ao lugar que ocupaba.
4. Escolla {{ui:Ficheiro}} › {{ui:Exportar}} › {{ui:Gardar de volta en BimCraft}}. A barra de estado indica cal revisión enviou.
5. En BimCraft o elemento aparece como modificado ata que a persoa responsable de alí o acepte.

## O que debe ver

- A peza conserva a súa ligazón no ficheiro. Ábrao máis tarde e a barra de estado segue indicando que é un elemento BIM. O edificio gris volve aparecer mentres o navegador conserve o paquete co que foi enviado.
- Se volve gardar de novo, envía a revisión 2, 3 e así sucesivamente. BimCraft conserva a máis recente.

## Cousas útiles

- A forma volve como malla en milímetros, nos eixos do propio elemento. As características permanecen en PartCraft.
- {{ui:Gardar de volta en BimCraft}} non fai nada cunha peza que non procede de BimCraft.
- Unha peza sen sólido aínda non ten nada que enviar.
- As dúas aplicacións deben estar abertas no mesmo navegador: non se envía nada, as dúas páxinas pasan o elemento entre elas.
