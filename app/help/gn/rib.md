---
title: Nervaduras y cartelas
summary: Refuerzá una pieza con una nervadura dibujada como una sola línea: se llena desde la línea hasta las paredes, con un espesor fijo a través del plano del boceto, del lado que elijas.
keywords: nervadura, cartela, alma, rigidizador, riostra, soporte, soporte de esquina, pared delgada, reforzar
from: 5c218881
---

:::note
**Todavía no está hecho en esta versión.** La nervadura necesita un núcleo de geometría exacto, que esta versión de PartCraft no tiene: construye todas las piezas con el núcleo de malla. [Lo que todavía no está hecho](topic:not-built-yet) dice qué hacer en su lugar. El resto de esta página describe cómo funciona con un núcleo exacto.
:::

Una **nervadura** (o cartela) es una pared delgada que refuerza una pieza, como el triángulo dentro de la esquina de un soporte en L. Dibujás solo su borde libre: PartCraft llena el espacio entre esa línea y las paredes. Necesita el **núcleo exacto** (ver [El núcleo de malla](topic:solid-kernels)).

## Agregar una nervadura

1. Hacé un plano que pase por el medio de donde va la nervadura (para un soporte en L de 40 de profundidad, un plano a 20 delante de su boceto: ver [Planos, ejes y puntos de referencia](topic:reference-geometry)).
2. Bosquejá en él **una línea** de pared a pared, o unas pocas líneas de extremo a extremo para un borde de nervadura doblado. La línea puede quedar corta de las paredes: sus extremos se prolongan hasta encontrarlas.
3. Seleccioná el boceto y eiporavo {{ui:Más}} › {{ui:Nervadura}}.

La nervadura se llena desde la línea hasta las paredes, del lado hacia el medio de la pieza, así que una cartela queda en el rincón interior. Si ese lado está abierto y el otro está cerrado, PartCraft lo da vuelta por vos y te lo avisa.

## Ajustes

- **Espesor (mm)** es el espesor de la nervadura a través del plano del boceto. Puede controlarse con un parámetro.
- **Espesor** (la opción debajo): **Centrado en el plano del boceto**, **Delante del plano** (a lo largo de su normal) o **Detrás del plano**.
- **Invertir** llena el otro lado de la línea.

## Mensajes

- **De este lado, el borde de la nervadura nunca toca el cuerpo**: no hay nada que cierre el espacio de ese lado: marcá o desmarcá **Invertir**, o mové la línea para que las paredes la limiten.
- **Una nervadura necesita una cadena abierta de líneas en su boceto**: el boceto tiene una forma cerrada, un arco o una spline, o líneas que no se unen de extremo a extremo.
- **El borde de la nervadura pasa por dentro del cuerpo ahí**: la línea queda dentro del sólido; dibujala en el espacio abierto entre las paredes.
