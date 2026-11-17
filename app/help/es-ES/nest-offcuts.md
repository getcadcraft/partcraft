---
title: Conservar y reutilizar sobrantes
summary: Tras anidar, lo que queda de cada lámina se convierte en un retal numerado en una lista de existencias; el siguiente anidado usa primero los retales y después láminas completas.
keywords: anidado, sobrante, retal, existencias, resto, lámina, reutilizar, material, espesor, CSV
from: 7a68d4b8
---

Al anidar piezas en láminas, el sobrante útil de cada una (no las tiras ni los trozos pequeños) puede conservarse como **retal**: un contorno numerado (R-0001, R-0002 …) con el material, el espesor, su tamaño y el trabajo del que procede. La lista se guarda con el archivo y puede guardarse como CSV.

## Volver a usarlos

Introduzca el **material** y el **espesor**, deje activada {{ui:Use remnants first}} y anide. Los retales del mismo material y espesor se prueban del más pequeño al más grande; las piezas que caben se colocan en ellos, dentro del contorno propio del retal y sin tocar su borde; lo que no cabe va a láminas nuevas. El informe del trabajo indica qué retales se usaron y qué quedó. Con {{ui:Save the leftovers as remnants}} activada, {{ui:Add this job to the stock}} escribe después el trabajo en la lista de existencias: un retal usado se marca como **Usado** (con el trabajo) y no vuelve a ofrecerse; lo que queda de él se convierte en un retal nuevo que recuerda a su origen.

## Qué cuenta como retal

El sobrante se mide con la separación que haya indicado (ninguna pieza queda más cerca de un corte que esa distancia). Las tiras más estrechas que una veinteava parte de la lámina y los trozos menores del 2 % de ella se consideran desperdicio; cambie ambos límites si su taller conserva piezas más pequeñas. Los huecos dentro de las piezas son de las propias piezas y no se conservan. Un rollo no tiene retales.

## En el dibujo

El DXF de un anidado dibuja el contorno de cada retal en la capa REMNANTS, con su número en el centro, para que las piezas puedan marcarse al cortarlas.

Todavía no está disponible: la dirección de fibra de un retal, una hoja de códigos de barras o de etiquetas, retales de rollos, existencias compartidas entre proyectos.
