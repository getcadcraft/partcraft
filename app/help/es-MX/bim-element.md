---
title: Diseñar un elemento de BimCraft y guardarlo de vuelta
summary: Una pieza enviada desde BimCraft se abre con el edificio alrededor, en gris y de solo lectura. Modifíquela y luego guárdela de vuelta para que BimCraft pueda aceptar la nueva forma.
keywords: bimcraft, bim, elemento, enviar, guardar de vuelta, vínculo, edificio, contexto, vecinos, soporte, escuadra, ifc, aceptar
from: 0978fe53
---

## Qué hará

Trabaje en una pieza que vino de un modelo de BimCraft, en su lugar dentro del edificio, y envíe la nueva forma de regreso.

## Pasos

1. En BimCraft seleccione un elemento y elija {{ui:Vínculos de pieza}} › {{ui:Enviar a PartCraft}}. PartCraft lo abre como una pieza nueva. La barra de estado indica que es un elemento BIM.
2. Los elementos alrededor (a menos de 3 m) se dibujan en gris. Están ahí para diseñar contra ellos. No se pueden seleccionar ni cambiar, y no se guardan en el archivo de la pieza.
3. Cambie la pieza como cualquier otra: corte, agregue, perfore, refleje. Su origen y sus ejes son los del propio elemento, así que la pieza regresa al lugar que ocupaba.
4. Elija {{ui:Archivo}} › {{ui:Exportar}} › {{ui:Guardar en BimCraft}}. La barra de estado indica qué revisión envió.
5. En BimCraft el elemento aparece como modificado hasta que la persona de allá lo acepte.

## Lo que debe ver

- La pieza conserva su vínculo en el archivo. Si la abre después, la barra de estado sigue indicando que es un elemento BIM. El edificio gris reaparece mientras el navegador conserve el paquete con el que se envió.
- Guardar de nuevo envía la revisión 2, 3 y así sucesivamente. BimCraft conserva la más reciente.

## Información útil

- La forma se envía de vuelta como malla en milímetros, en los ejes propios del elemento. Las operaciones permanecen en PartCraft.
- {{ui:Guardar en BimCraft}} no hace nada con una pieza que no vino de BimCraft.
- Una pieza sin sólido todavía no tiene nada que enviar.
- Ambas aplicaciones deben estar abiertas en el mismo navegador: no se sube nada, las dos páginas se pasan el elemento entre ellas.
