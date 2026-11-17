---
title: Ecuaciones en ambos sentidos
summary: Cambie un parámetro y la pieza lo sigue; escriba un nuevo tamaño en una cota dirigida y PartCraft calcula el parámetro que hay detrás, preguntando cuál cuando podrían cambiar varios.
keywords: ecuaciones, resolver hacia atrás, cota dirigida, dos sentidos, inverso, buscar objetivo, parámetros, valores vinculados, qué parámetro
from: 82dc0269
---

Una ecuación como **Extrude1 profundidad = grosor + extra** funciona en ambos sentidos.

## Hacia delante: cambiar el parámetro

En la pestaña {{ui:Parameters}}, cambie `grosor` de 20 a 30. La profundidad de Extrude1 pasa a ser 30 + extra, y la pieza se regenera.

## Hacia atrás: cambiar la cota dirigida

1. Haga clic en «Extrude1» en el historial. Su casilla **Profundidad (mm)** muestra **ƒ**: una ecuación la controla.
2. Escriba el tamaño que desee, por ejemplo `40`, y pulse {{key:Enter}}.

PartCraft resuelve el parámetro que hay detrás de la ecuación, en tantos pasos como haga falta (`profundidad = altura_cubo`, `altura_cubo = grosor_disco + 50`: escribir una altura cambia `grosor_disco`). La barra de estado indica qué cambió, por ejemplo que extra pasó de 5 a 15.

Cuando dos o más parámetros controlan el número, aparece un cuadro que pregunta **¿Qué parámetro debe cambiar?** y los enumera. Haga clic en uno; los demás conservan sus valores. {{ui:Cancel}} no cambia nada.

Lo mismo funciona en un croquis: haga doble clic en una cota dirigida, escriba un valor y pulse {{key:Enter}}. También funciona en la columna **Valor** de la tabla de parámetros, para un parámetro que es a su vez una expresión.

## Cuando no es posible

- Un número que debe ser entero (el número de elementos de un patrón) o que debe quedarse dentro de un rango (un ángulo de hasta 360°) se rechaza antes de cambiar nada.
- Una ecuación de solo números fijos (`=40`) no tiene parámetro que cambiar: el número que escriba sustituye a la ecuación.
- Si ningún valor del parámetro da el tamaño que escribió, la barra de estado lo indica y no cambia nada.
- Un croquis que no se puede resolver con el nuevo valor conserva sus valores anteriores, y la barra de estado indica qué croquis es.

Cada cambio, en cualquier sentido, es un paso para {{key:Mod+Z}} y {{key:Mod+Y}}.
