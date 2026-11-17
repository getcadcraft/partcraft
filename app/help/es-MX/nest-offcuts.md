---
title: Conservar y reutilizar retazos
summary: Después de un anidado, lo que queda de cada lámina se convierte en un retazo numerado en una lista de existencias; el siguiente anidado usa primero los retazos y luego las láminas completas.
keywords: anidado, sobrante, retazo, existencias, recorte, lámina, placa, reutilizar, material, espesor, CSV
from: 7a68d4b8
---

Al anidar piezas en láminas, el sobrante útil de cada lámina (no las tiras) puede conservarse como **retazo**: un contorno numerado (R-0001, R-0002 …) con el material, el espesor, su tamaño y la tarea de la que procede. La lista se guarda con el archivo y puede guardarse como CSV.

## Reutilizarlos

Indique el **material** y el **espesor**, deje activada {{ui:Use remnants first}} y anide. Se prueban primero los retazos del mismo material y espesor, del más pequeño al más grande; las piezas que caben van sobre ellos, dentro del contorno propio del retazo y sin tocar su borde; lo que no cabe va a láminas nuevas. El informe de la tarea indica qué retazos se usaron y qué quedó. Con {{ui:Save the leftovers as remnants}} activada, {{ui:Add this job to the stock}} lo escribe en la lista de existencias: un retazo usado se marca **Usado** (con la tarea) y no vuelve a ofrecerse; lo que queda de él se convierte en un retazo nuevo que recuerda de cuál proviene.

## Qué cuenta como retazo

El sobrante se mide con la separación que usted configuró (ninguna pieza queda más cerca que eso de un corte). Las tiras más estrechas que una veinteava parte de la lámina y las piezas menores que el 2 % de ella se consideran recortes; cambie ambos límites si su taller conserva piezas más pequeñas. Los agujeros dentro de las piezas son de las propias piezas y no se conservan. Un rollo no tiene retazos.

## En el dibujo

El DXF de un anidado dibuja el contorno de cada retazo en la capa REMNANTS, con su número en el centro, para que las piezas puedan marcarse al cortarse.

Aún no disponible: dirección de la fibra de un retazo, una hoja de códigos de barras o de etiquetas, retazos de rollos, existencias compartidas entre proyectos.
