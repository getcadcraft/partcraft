---
title: Modelar una pieza junto con Live TeamWork
summary: Lo que cambia en PartCraft mientras está en una sesión de Live TeamWork desde CadCraft Studio: el árbol de operaciones de todos en uno, cada ventana construye el mismo sólido, su propio deshacer, y unirse desde un navegador en la misma red.
keywords: live, live teamwork, studio live, juntos, colaborar, sesión, compartir en vivo, unirse, árbol de operaciones, historial, reconstruir, cursor, puntero, verse unos a otros, nombres, color, selección, deshacer, anfitrión
from: 1809b96c
---

## Qué aprenderá

Qué le ocurre a una pieza cuando varias personas la modelan a la vez. CadCraft Studio inicia y se une a la sesión de Live TeamWork (Compartir, Unirse); esta página trata de la propia pieza.

## Todos modelan a la vez

Todos trabajan sobre el mismo árbol de operaciones: croquis, extrusiones, agujeros, patrones, redondeos, parámetros. Sus propias ediciones se ven al instante; las de los demás aparecen un momento después de hacerlas. Solo viaja el árbol: cada ventana construye el sólido por sí misma, y el núcleo de PartCraft construye el mismo sólido a partir del mismo árbol en cada ventana.

- **Dos personas cambian una misma operación:** se conservan ambos ajustes distintos (uno la profundidad, el otro la condición final); si cambian el mismo ajuste, prevalece el cambio posterior.
- **Un croquis** viaja completo: cuando dos personas editan a la vez un mismo croquis, gana la edición posterior. Acuerden quién dibuja cada croquis.
- **Una operación construida sobre algo que alguien acaba de borrar** (una extrusión de un croquis eliminado, un agujero en una cara eliminada) se retira, y la barra de estado indica por qué.
- **Reordenar el árbol** se comprueba: si dos personas arrastran operaciones en el mismo momento, se revierte el segundo movimiento.

## Verse unos a otros

Cada persona de la sesión tiene su propio color. Ve el puntero de cada una como una flecha de su color con su nombre al lado, sobre la cara que está señalando. Cuando tiene una operación seleccionada en el árbol, su nombre aparece tras el suyo.

Los punteros, nombres y selecciones son solo para la sesión: nunca se guardan en el archivo ni entran en el deshacer de nadie. Se desplazan hasta donde está cada persona, así que también se mantienen fluidos con una conexión lenta.

## Deshacer deshace su propio trabajo

{{key:Mod+Z}} deshace su última edición y deja en paz las de los demás. Si alguien cambió lo mismo después, no se deshace nada y la barra de estado indica quién fue.

## Unirse desde un navegador

Un compañero sin Studio puede escanear con un teléfono, una tableta o un equipo en la misma red la imagen bajo el código del anfitrión. PartCraft se abre en el navegador, se llena con la pieza del anfitrión cuando este le deja entrar, y la construye. Un enlace de invitación permite a alguien unirse desde otra red: el anfitrión necesita una plaza del Team Cloud Plan para la aplicación, los demás se unen gratis, y el enlace solo funciona mientras la sesión del anfitrión está abierta.

## Cuando termina la sesión

Solo el anfitrión guarda la pieza. Los demás conservan una copia sin guardar: guárdela si quiere conservarla.

:::note
Los ensamblajes todavía no se comparten en una sesión: abra la propia pieza para trabajar juntos.
:::
