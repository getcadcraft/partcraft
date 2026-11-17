---
title: Diseñar un elemento de BimCraft y guardarlo
summary: Una pieza enviada desde BimCraft se abre con el edificio alrededor, en gris y de solo lectura. Modifíquela y guárdela en BimCraft para que pueda aceptar la nueva forma.
keywords: bimcraft, bim, elemento, enviar, guardar en BimCraft, enlace, edificio, contexto, vecinos, soporte, escuadra, ifc, aceptar
from: 0978fe53
---

## Qué hará

Trabaje sobre una pieza procedente de un modelo de BimCraft, en su lugar dentro del edificio, y devuelva la nueva forma a su sitio.

## Pasos

1. En BimCraft elija un elemento y seleccione {{ui:Enlaces de pieza}} › {{ui:Enviar a PartCraft}}. PartCraft lo abre como una pieza nueva. La barra de estado indica que es un elemento BIM.
2. Los elementos de alrededor (a menos de 3 m) se dibujan en gris. Están para diseñar en relación con ellos. No puede seleccionarlos ni cambiarlos, y no se guardan en el archivo de la pieza.
3. Modifique la pieza como cualquier otra: corte, añada, taladre, simetrice. Su origen y sus ejes son los del propio elemento, así que la pieza vuelve a su posición original.
4. Elija {{ui:Archivo}} › {{ui:Exportar}} › {{ui:Guardar en BimCraft}}. La barra de estado indica qué revisión ha enviado.
5. En BimCraft el elemento aparece como modificado hasta que la persona responsable lo acepte.

## Lo que debe ver

- La pieza conserva su enlace en el archivo. Si la abre más tarde, la barra de estado sigue indicando que es un elemento BIM. El edificio gris vuelve mientras el navegador conserve el paquete con el que se envió.
- Si guarda de nuevo, envía la revisión 2, 3 y así sucesivamente. BimCraft conserva la más reciente.

## Conviene saber

- La forma se devuelve como malla en milímetros, en los ejes propios del elemento. Los elementos siguen en PartCraft.
- {{ui:Guardar en BimCraft}} no hace nada con una pieza que no procede de BimCraft.
- Una pieza sin sólido aún no tiene nada que enviar.
- Ambas aplicaciones deben estar abiertas en el mismo navegador: no se sube nada, las dos páginas se pasan el elemento entre sí.
