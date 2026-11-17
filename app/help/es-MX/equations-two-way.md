---
title: Ecuaciones en ambos sentidos
summary: Cambie un parámetro y la pieza lo sigue; escriba una nueva medida en una cota conducida y PartCraft calcula el parámetro detrás de ella, preguntando cuál cuando podrían cambiar varios.
keywords: ecuaciones, resolver hacia atrás, cota conducida, dos sentidos, inverso, buscar objetivo, parámetros, valores vinculados, qué parámetro
from: 82dc0269
---

Una ecuación como **Extrude1 profundidad = thick + extra** funciona en ambos sentidos.

## Hacia adelante: cambie el parámetro

En la pestaña {{ui:Parámetros}}, cambie `thick` de 20 a 30. La profundidad de Extrude1 pasa a ser 30 + extra, y la pieza se reconstruye.

## Hacia atrás: cambie la cota conducida

1. Haga clic en "Extrude1" en el historial. Su cuadro **Profundidad (mm)** muestra **ƒ**: una ecuación la gobierna.
2. Escriba la medida que quiere, por ejemplo `40`, y presione {{key:Enter}}.

PartCraft resuelve el parámetro detrás de la ecuación, en tantos pasos como haga falta (`depth = hub_h`, `hub_h = disc_t + 50`: al escribir una altura cambia `disc_t`). La barra de estado indica qué cambió, por ejemplo que extra pasó de 5 a 15.

Cuando dos o más parámetros gobiernan el número, aparece un cuadro que pregunta **¿Qué parámetro debe cambiar?** y los enumera. Haga clic en uno; los demás conservan sus valores. {{ui:Cancelar}} no cambia nada.

Lo mismo funciona en un croquis: haga doble clic en una cota conducida, escriba un valor y presione {{key:Enter}}. También funciona en la columna **Valor** de la tabla de parámetros, para un parámetro que es a su vez una expresión.

## Cuando no es posible

- Un número que debe ser entero (un número de elementos de un patrón) o quedar dentro de un rango (un ángulo de hasta 360°) se rechaza antes de cambiar algo.
- Una ecuación de solo números fijos (`=40`) no tiene parámetro que cambiar: el número que escribe reemplaza a la ecuación.
- Si ningún valor del parámetro da la medida que escribió, la barra de estado lo indica y nada cambia.
- Un croquis que no se puede resolver con el nuevo valor conserva sus valores anteriores, y la barra de estado nombra el croquis.

Cada cambio, en cualquier sentido, es un paso para {{key:Mod+Z}} y {{key:Mod+Y}}.
