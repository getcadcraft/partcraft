---
title: Taladrar agujeros y avellanados en puntos de boceto
summary: Poner puntos en un boceto sobre una cara, hacer agujeros simples, avellanados, cónicos o roscados (métrica ISO) en cada punto, fijar diámetro y profundidad, y corregir agujeros que se taladran en la dirección equivocada.
keywords: agujero, asistente de agujeros, taladro, rosca modelada, impresión 3D, avellanado, cbore, avellanado cónico, csink, agujero roscado, rosca, diámetro de broca de roscado, rosca métrica, M6, pasante, agujero ciego, agujero para perno, puntos, centros de agujeros
from: 8e1eef83
---

{{ui:Agujero}} taladra un agujero en cada punto suelto de un boceto. Un punto suelto es uno hecho con la herramienta Punto, no el extremo de una línea ni el centro de un círculo.

## Taladrar agujeros en una cara

1. Hacé clic en la cara plana donde taladrar, y después elegí {{ui:Boceto sobre esta cara}}.
2. Apretá {{key:P}} y hacé clic donde va cada agujero. Acotá los puntos desde los bordes o el origen si importa su posición (ver [Definir totalmente un boceto](topic:relations-dimensions)).
3. Elegí {{ui:Salir}}.
4. Elegí {{ui:Agujero}}.

Los agujeros atraviesan la pieza, de 6 mm de diámetro. El panel derecho muestra **Agujeros**: cuántos se hicieron, "uno por punto de boceto".

**Un agujero, rápido:** hacé clic en la cara plana donde va el agujero y elegí {{ui:Agujero aquí}} en el panel derecho. PartCraft agrega un boceto sobre la cara con un punto donde hiciste clic y un Agujero pasante por la pieza, en un solo paso. Escribí un número de inmediato y apretá {{key:Enter}} para su diámetro. Para colocarlo exactamente, abrí el boceto nuevo y acotá el punto.

**Qué boceto se usa:** el boceto que acabás de cerrar o el seleccionado; si no, el boceto sin usar más reciente que tenga puntos sueltos. Si no hay ninguno: "Primero hacé un boceto con puntos donde van los agujeros (Boceto sobre una cara, luego Punto)."

## Ajustes

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| **Tipo** | Simple, Avellanado cilíndrico, Avellanado cónico, Roscado (ISO métrico) | Simple |
| **Diámetro (mm)** | El diámetro del agujero | 6 |
| **Pasante total** | Marcado: atraviesa toda la pieza. Desmarcalo para un agujero ciego | Marcado |
| **Profundidad (mm)** | Se muestra cuando Pasante total está desmarcado | 10 |
| **Diámetro del avellanado** | Se muestra para Avellanado cilíndrico: el diámetro del rebaje más ancho | 11 |
| **Profundidad del avellanado** | Se muestra para Avellanado cilíndrico | 6 |
| **Invertir dirección** | Taladra hacia el otro lado del plano del boceto | Desactivado |

Los agujeros taladran dentro del material, en ángulo recto con el plano del boceto. La profundidad de un agujero ciego se mide desde el plano del boceto; su fondo es plano.

## Un agujero avellanado para perno

1. Hacé los agujeros como arriba.
2. Poné **Tipo** en **Avellanado cilíndrico**.
3. Poné **Diámetro (mm)** en `6.6` (holgura para un perno M6), **Diámetro del avellanado** en `11` y **Profundidad del avellanado** en `6.5`.

El avellanado tiene que ser más ancho que el agujero ("El avellanado debe ser más ancho que el agujero.") y, para un agujero ciego, menos profundo que él ("El avellanado debe ser menos profundo que el agujero.").

## Un círculo de pernos

Para agujeros repartidos de manera uniforme alrededor de un centro, hacé **un** agujero y hacé un patrón con él: seleccioná la función Agujero, y después elegí {{ui:Circular}} (ver [Funciones de patrón y simetría](topic:patterns-mirror)). El patrón sigue cuando cambiás el tamaño del agujero.

## Cuando los agujeros van en la dirección equivocada

- "No hay nada donde taladrar de ese lado del boceto. Probá invirtiendo la dirección." El boceto está del lado lejano del material. Marcá **Invertir dirección**.
- "Poné puntos de boceto donde van los agujeros (herramienta Punto), y luego hacé el agujero." El boceto no tiene puntos sueltos. Los extremos de líneas y los centros de círculos no cuentan.
- "Todavía no hay nada que taladrar." Un agujero necesita un sólido. Primero hacé un macizo.

## Agujeros en ensamblajes

Cada agujero tiene un eje. En un ensamblaje, **Centrar en** puede poner una unión sobre el eje de un agujero, listado como "Agujero1, agujero 2", para que un pasador o un perno quede alineado con él. Ver [Armar un ensamblaje](topic:build-assembly).

## Agujeros avellanados cónicos

Poné **Tipo** en **Avellanado cónico**, después **Diámetro del avellanado cónico** (en la superficie) y **Ángulo del avellanado**: 90° (tornillos planos ISO métricos) o 82° (tornillos en pulgadas). Tomá el diámetro del avellanado de los datos del fabricante del tornillo (un poco más que el diámetro de la cabeza del tornillo). La cara del cono se llama "avellanado" en los paneles.

## Agujeros roscados

Poné **Tipo** en **Roscado (ISO métrico)** y elegí la **Rosca**, de M2 a M24 de paso grueso. El agujero se taladra con el tamaño de broca de roscado de la tabla de abajo (diámetro nominal menos el paso, en la serie de brocas, como lo indica ISO 2306 para una rosca 6H); la casilla **Diámetro (mm)** no se usa. Para un agujero ciego, **Profundidad de rosca (mm)** fija qué tan profundo llega la rosca.

| Rosca | M2 | M2,5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Paso | 0,4 | 0,45 | 0,5 | 0,7 | 0,8 | 1 | 1,25 | 1,5 | 1,75 | 2 | 2 | 2,5 | 2,5 | 2,5 | 3 |
| Diámetro de broca de roscado | 1,6 | 2,05 | 2,5 | 3,3 | 4,2 | 5 | 6,8 | 8,5 | 10,2 | 12 | 14 | 15,5 | 17,5 | 19,5 | 21 |

La rosca es **cosmética** al principio: el modelo tiene el agujero taladrado, la vista dibuja el diámetro mayor de la rosca como círculos de trazos, y la hoja del plano lleva la indicación como una nota, como "4× M8×1,25 - 6H, rosca pasante". STEP exporta solo el agujero taladrado.

Marcá **Modelada** para cortar la rosca helicoidal real en el agujero, para impresión 3D. **Holgura (mm)** la hace más grande en todo el contorno, para que un perno impreso encaje: 0,1 a 0,2 mm sirve para la mayoría de las impresoras. La indicación termina entonces con "(modelada)". Ver [Roscas en ejes y perforaciones, dibujadas o modeladas](topic:threads), que también pone roscas en ejes.

:::note
Los agujeros contrataladrados, las roscas en pulgadas y las roscas de tubería todavía no están construidos.
:::
