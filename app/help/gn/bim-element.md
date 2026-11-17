---
title: Diseñar un elemento de BimCraft y guardarlo de vuelta
summary: Una pieza enviada desde BimCraft se abre con el edificio alrededor, en gris y de solo lectura. Modifíquela y luego guárdela de vuelta para que BimCraft pueda aceptar la nueva forma.
keywords: bimcraft, bim, elemento, enviar, guardar de vuelta, enlace, edificio, contexto, vecinos, soporte, escuadra, ifc, aceptar
from: 0978fe53
---

## Lo que hará

Trabajar con una pieza que vino de un modelo de BimCraft, en su lugar dentro del edificio, y enviar la nueva forma de vuelta.

## Pasos

1. En BimCraft seleccione un elemento de BIM y elija {{ui:Enlaces de pieza}} › {{ui:Enviar a PartCraft}}. PartCraft lo abre como una pieza nueva. La barra de estado indica que es un elemento BIM.
2. Los elementos alrededor (a menos de 3 m) se dibujan en gris. Están para diseñar en referencia. No se pueden seleccionar ni modificar, y no se guardan en el archivo de la pieza.
3. Modifique la pieza como cualquier otra: corte, agregue, perfore, refleje. Su origen y sus ejes son los propios del elemento, así que la pieza vuelve al lugar que ocupaba.
4. Elija {{ui:Archivo}} › {{ui:Exportar}} › {{ui:Guardar de vuelta en BimCraft}}. La barra de estado indica qué revisión envió.
5. En BimCraft el elemento aparece como modificado hasta que la persona de allí lo acepte.

## Lo que debe ver

- La pieza conserva su enlace en el archivo. Si la abre después, la barra de estado sigue indicando que es un elemento BIM. El edificio en gris vuelve mientras el navegador conserve el paquete con que fue enviada.
- Si guarda de vuelta otra vez, se envía la revisión 2, 3 y así sucesivamente. BimCraft conserva la más nueva.

## Para tener en cuenta

- La forma vuelve como malla en milímetros, en los ejes propios del elemento. Los elementos de diseño se quedan en PartCraft.
- {{ui:Guardar de vuelta en BimCraft}} no hace nada con una pieza que no vino de BimCraft.
- Una pieza sin sólido todavía no tiene nada para enviar.
- Ambas aplicaciones deben estar abiertas en el mismo navegador: no se sube nada, las dos páginas se pasan el elemento entre sí.
