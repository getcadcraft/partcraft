---
title: Modelar una pieza junto con Live TeamWork
summary: Qué cambia en PartCraft durante una sesión de Live TeamWork desde CadCraft Studio: el árbol de operaciones de todos en uno, cada ventana construye el mismo sólido, su propio deshacer, y unirse desde un navegador en la misma red.
keywords: live, live teamwork, studio live, juntos, colaborar, sesión, compartir en vivo, unirse, árbol de operaciones, historial, reconstruir, cursor, puntero, verse, nombres, color, selección, deshacer, anfitrión
from: 1809b96c
---

## Lo que aprenderá

Lo que le pasa a una pieza mientras varias personas la modelan al mismo tiempo. CadCraft Studio inicia y une la sesión de Live TeamWork (Compartir, Unirse); esta página trata de la pieza en sí.

## Todos modelan a la vez

Todos trabajan en el mismo árbol de operaciones: croquis, extrusiones, agujeros, patrones, redondeos, parámetros. Sus propias ediciones se ven de inmediato; las de los demás aparecen un momento después de hacerlas. Solo viaja el árbol: cada ventana construye el sólido por sí misma, y el núcleo de PartCraft construye el mismo sólido a partir del mismo árbol en cada ventana.

- **Dos personas cambian una operación:** ajustes distintos (uno la profundidad, el otro la condición final) se conservan los dos; el mismo ajuste queda con el cambio posterior.
- **Un croquis** viaja completo: cuando dos personas editan un mismo croquis a la vez, gana la edición posterior. Acuerden quién dibuja cada croquis.
- **Una operación construida sobre una que alguien acaba de borrar** (una extrusión de un croquis eliminado, un agujero en una cara eliminada) se deshace, y la barra de estado indica por qué.
- **Reordenar el árbol** se verifica: si dos personas arrastran operaciones en el mismo momento, el segundo movimiento se deshace.

## Verse unos a otros

Cada persona de la sesión tiene un color propio. Usted ve el puntero de cada persona como una flecha de su color con su nombre al lado, sobre la cara que esa persona apunta. Cuando tiene una operación seleccionada en el árbol, su nombre aparece después del suyo.

Punteros, nombres y selecciones son solo para la sesión: nunca se guardan en el archivo ni entran en el deshacer de nadie. Se deslizan hasta donde está cada persona, así que también se mantienen suaves con una conexión lenta.

## Deshacer deshace su propio trabajo

{{key:Mod+Z}} deshace su última edición y deja en paz las de los demás. Cuando alguien cambió lo mismo después, no se deshace nada y la barra de estado indica quién fue.

## Unirse desde un navegador

Un compañero sin Studio puede escanear la imagen bajo el código del anfitrión con un teléfono, tableta o computadora en la misma red. PartCraft se abre en el navegador, se llena con la pieza del anfitrión una vez que el anfitrión lo admite, y la construye. Un enlace de invitación permite que alguien se una desde otra red: el anfitrión necesita un asiento del Team Cloud Plan para la aplicación, los demás se unen gratis, y el enlace solo funciona mientras la sesión del anfitrión está abierta.

## Cuando termina la sesión

Solo el anfitrión guarda la pieza. Los demás conservan una copia sin guardar: guárdela si quiere conservarla.

:::note
Los ensamblajes todavía no se comparten en una sesión: abra la pieza misma para trabajar juntos en ella.
:::
