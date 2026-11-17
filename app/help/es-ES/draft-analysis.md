---
title: Comprobar el ángulo de salida para moldeo y fundición
summary: Colorea la pieza según su ángulo de salida respecto a la dirección de extracción de un molde, y muestra qué caras se desmoldean, cuáles necesitan más ángulo de salida y cuáles se desmoldean desde la otra mitad, con la parte de superficie de cada una.
keywords: análisis de ángulo de salida, ángulo de salida, conicidad, molde, moldeo, fundición a presión, moldeo por inyección, dirección de extracción, línea de partición, socavado, desmoldeo, comprobar ángulo de salida
from: 6a106f83
---

Las piezas fabricadas en molde, en matriz o en fundición en arena necesitan **ángulo de salida**: paredes ligeramente inclinadas para que la pieza salga. **El análisis de ángulo de salida** colorea cada cara según cuánto se inclina respecto a la dirección en que se abre el molde (la **extracción**).

## Activarlo

1. En el espacio de trabajo Diseño, abra {{ui:Views}} y elija {{ui:Draft analysis}}.
2. Configure **Extracción**: la dirección en que se abre el molde, a lo largo de X, Y o Z en cualquier sentido, o **Perpendicular a una cara seleccionada**: pulse {{ui:Pick a face}} y haga clic en una cara plana de la pieza.
3. Configure **Ángulo de salida mínimo**, en grados: la inclinación mínima que necesita su proceso (a menudo entre 1° y 3°).

La pieza se colorea así:

| Color | Significado |
|---|---|
| Verde: **Ángulo de salida positivo** | Inclinada hacia la extracción al menos el mínimo: se desmoldea desde esta mitad del molde |
| Ocre: **Necesita ángulo de salida** | Dentro del mínimo en cualquier sentido, como una pared vertical: añada ángulo de salida aquí |
| Rojo: **Ángulo de salida negativo** | Inclinada en contra de la extracción al menos el mínimo: se desmoldea desde la otra mitad, o es un socavado si la pieza debe salir por una sola mitad |

La parte de la superficie total de la pieza de cada clase se muestra junto a ella. **Invertir la extracción** mira desde la otra mitad del molde: el verde y el rojo se intercambian.

Las caras curvas se evalúan punto por punto, de modo que un cilindro colocado transversalmente a la extracción muestra una banda que necesita ángulo de salida a lo largo de sus costados.

Los colores siguen a la pieza a medida que la modifica. {{key:Esc}} o {{ui:Close}} desactiva el análisis; no se guarda nada en la pieza.

:::tip
Para añadir ángulo de salida, use la operación {{ui:Draft}} en las caras ocres (véase [Barrido, loft y ángulo de salida](topic:sweep-loft-draft)) y después vuelva a comprobarlo.
:::
