---
title: Revisar el ángulo de salida para moldeo y fundición
summary: Coloree la pieza según su ángulo de salida respecto a la dirección de extracción de un molde, vea qué caras se desmoldan, cuáles necesitan más ángulo y cuáles se desmoldan desde la otra mitad, con la parte del área de cada una.
keywords: análisis de ángulo de salida, ángulo de salida, conicidad, molde, moldeo por inyección, fundición a presión, dirección de extracción, línea de partición, socavado, desmoldeo, revisar ángulo de salida
from: 6a106f83
---

Las piezas fabricadas en molde, en troquel o en fundición en arena necesitan **ángulo de salida**: paredes ligeramente inclinadas para que la pieza salga. **El análisis de ángulo de salida** colorea cada cara según cuánto se inclina respecto a la dirección en que se abre el molde (la **extracción**).

## Actívelo

1. En el espacio de trabajo Diseño, abra {{ui:Vistas}} y elija {{ui:Análisis de ángulo de salida}}.
2. Defina **Extracción**: la dirección en que se abre el molde, a lo largo de X, Y o Z en cualquier sentido, o **Perpendicular a una cara elegida**: presione {{ui:Seleccionar una cara}} y haga clic en una cara plana de la pieza.
3. Defina **Ángulo de salida mínimo**, en grados: la inclinación mínima que requiere su proceso (a menudo de 1° a 3°).

La pieza se colorea así:

| Color | Significa |
|---|---|
| Verde: **Ángulo de salida positivo** | Inclinada hacia la extracción al menos el mínimo: se desmolda desde esta mitad del molde |
| Ocre: **Necesita ángulo de salida** | Dentro del mínimo en cualquier sentido, como una pared vertical: agregue ángulo de salida aquí |
| Rojo: **Ángulo de salida negativo** | Inclinada en sentido contrario a la extracción al menos el mínimo: se desmolda desde la otra mitad, o es un socavado si la pieza debe salir de una sola mitad |

Junto a cada clase se muestra su parte del área superficial de la pieza. **Invierta la extracción** mira desde la otra mitad del molde: el verde y el rojo se intercambian.

Las caras curvas se evalúan punto por punto, así que un cilindro colocado atravesado a la extracción muestra una banda que necesita ángulo de salida en sus costados.

Los colores siguen a la pieza conforme la modifica. {{key:Esc}} o {{ui:Cerrar}} apaga el análisis; no se guarda nada en la pieza.

:::tip
Para agregar ángulo de salida, use la operación {{ui:Ángulo de salida}} sobre las caras ocres (vea [Barrido, solevación y ángulo de salida](topic:sweep-loft-draft)), y luego revise de nuevo.
:::
