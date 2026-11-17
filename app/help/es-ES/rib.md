---
title: Nervios y cartelas
summary: Rigidice una pieza con un nervio dibujado como una sola línea: se rellena desde la línea hasta las paredes, con un grosor fijo a través del plano del croquis, por el lado que elija.
keywords: nervio, cartela, alma, rigidizador, riostra, escuadra, soporte, refuerzo de esquina, pared fina, reforzar
from: 5c218881
---

:::note
**Aún no construido en esta versión.** El nervio necesita un núcleo de geometría exacto, que esta versión de PartCraft no tiene: construye todas las piezas con el núcleo de malla. [Lo que aún no está construido](topic:not-built-yet) explica qué hacer en su lugar. El resto de esta página describe cómo funciona con un núcleo exacto.
:::

Un **nervio** (o cartela) es una pared delgada que rigidiza una pieza, como el triángulo interior de la esquina de una escuadra en L. Solo dibuja su borde libre: PartCraft rellena el espacio entre esa línea y las paredes. Necesita el **núcleo exacto** (véase [El núcleo de malla](topic:solid-kernels)).

## Añadir un nervio

1. Cree un plano por el centro de donde va el nervio (para una escuadra en L de 40 de profundidad, un plano a 20 delante de su croquis: véase [Planos, ejes y puntos de referencia](topic:reference-geometry)).
2. Dibuje sobre él **una línea** de pared a pared, o unas pocas líneas seguidas para un borde de nervio doblado. La línea puede quedarse corta respecto a las paredes: sus extremos se prolongan hasta encontrarlas.
3. Seleccione el croquis y elija {{ui:Más}} › {{ui:Nervio}}.

El nervio se rellena desde la línea hasta las paredes, por el lado hacia el centro de la pieza, de modo que una cartela cae en la esquina interior. Si ese lado está abierto y el otro cerrado, PartCraft lo invierte por usted y se lo indica.

## Ajustes

- **Grosor (mm)** es el grosor del nervio a través del plano del croquis. Puede venir dado por un parámetro.
- **Grosor** (la opción debajo): **Centrado en el plano del croquis**, **Delante del plano** (a lo largo de su normal) o **Detrás del plano**.
- **Invertir** rellena el otro lado de la línea.

## Mensajes

- **En este lado, el borde del nervio nunca toca el cuerpo**: nada se cierra en ese lado. Marque o desmarque **Invertir**, o mueva la línea para que las paredes la delimiten.
- **Un nervio necesita una única cadena abierta de líneas en su croquis**: el croquis tiene una forma cerrada, un arco o una spline, o líneas que no se unen de extremo a extremo.
- **El borde del nervio pasa dentro del cuerpo ahí**: la línea queda dentro del sólido; dibújela en el espacio libre entre las paredes.
