---
title: Nervios y cartelas
summary: Rigidice una pieza con un nervio dibujado como una sola línea: se rellena desde la línea hasta las paredes, con un espesor fijo a través del plano del croquis, del lado que elija.
keywords: nervio, cartela, alma, rigidizador, riostra, soporte, soporte de esquina, pared delgada, reforzar
from: 5c218881
---

:::note
**Aún no disponible en esta versión.** El nervio necesita un núcleo de geometría exacto, que esta versión de PartCraft no tiene: construye todas las piezas con el núcleo de malla. [Lo que aún no está disponible](topic:not-built-yet) explica qué hacer en su lugar. El resto de esta página describe cómo funciona con un núcleo exacto.
:::

Un **nervio** (o cartela) es una pared delgada que rigidiza una pieza, como el triángulo dentro de la esquina de un soporte en L. Solo dibuja su borde libre: PartCraft rellena el espacio entre esa línea y las paredes. Necesita el **núcleo exacto** (vea [El núcleo de malla](topic:solid-kernels)).

## Añadir un nervio

1. Cree un plano que pase por el centro del lugar donde va el nervio (para un soporte en L de 40 de profundidad, un plano 20 delante de su croquis: vea [Planos, ejes y puntos de referencia](topic:reference-geometry)).
2. Croquice en él **una línea** de pared a pared, o varias líneas seguidas para un borde de nervio doblado. La línea puede quedarse corta de las paredes: sus extremos se prolongan hasta encontrarlas.
3. Seleccione el croquis y elija {{ui:More}} › {{ui:Más}} › {{ui:Rib}} › {{ui:Nervio}}.

El nervio se rellena desde la línea hasta las paredes, hacia el centro de la pieza, así que una cartela cae en la esquina interior. Si ese lado está abierto y el otro cerrado, PartCraft lo invierte y se lo indica.

## Ajustes

- **Espesor (mm)** es el espesor del nervio a través del plano del croquis. Puede controlarse con un parámetro.
- **Espesor** (la opción debajo): **Centrado en el plano del croquis**, **Delante del plano** (a lo largo de su normal) o **Detrás del plano**.
- **Invertir** rellena el otro lado de la línea.

## Mensajes

- **De este lado, el borde del nervio nunca toca el cuerpo**: nada se cierra en ese lado del espacio. Marque o desmarque **Invertir**, o mueva la línea para que la rodeen paredes.
- **Un nervio necesita una sola cadena abierta de líneas en su croquis**: el croquis tiene una forma cerrada, un arco o una spline, o líneas que no se unen de extremo a extremo.
- **El borde del nervio pasa por dentro del cuerpo ahí**: la línea está dentro del sólido. Dibújela en el espacio libre entre las paredes.
