---
title: Taladrar agujeros, rebajes y avellanados en puntos de croquis
summary: Coloque puntos en un croquis sobre una cara, haga agujeros simples, con rebaje cilíndrico, con avellanado cónico o roscados (ISO métrico) en cada punto, establezca diámetro y profundidad, y corrija los agujeros que se taladran en la dirección equivocada.
keywords: agujero, asistente de agujeros, taladro, rosca modelada, impresión 3D, rebaje cilíndrico, avellanado, avellanado cónico, agujero roscado, rosca, diámetro de broca de roscado, rosca métrica, M6, pasante total, agujero ciego, agujero de perno, puntos, centros de agujero
from: 8e1eef83
---

{{ui:Taladro}} taladra un agujero en cada punto suelto de un croquis. Un punto suelto es uno hecho con la herramienta Punto, no el extremo de una línea ni el centro de un círculo.

## Taladrar agujeros en una cara

1. Haga clic en la cara plana donde va a taladrar, luego elija {{ui:Croquis en esta cara}}.
2. Pulse {{key:P}} y haga clic donde va cada agujero. Acote los puntos desde los bordes o el origen si su posición importa (véase [Definir completamente un croquis](topic:relations-dimensions)).
3. Elija {{ui:Salir}}.
4. Elija {{ui:Taladro}}.

Los agujeros atraviesan la pieza, de 6 mm de diámetro. El panel derecho muestra **Agujeros**: cuántos se hicieron, "uno por punto del croquis".

**Un solo agujero, rápido:** haga clic en la cara plana donde va el agujero y elija {{ui:Agujero aquí}} en el panel derecho. PartCraft agrega un croquis sobre la cara con un punto donde hizo clic y un Agujero pasante por la pieza, en un solo paso. Escriba un número de inmediato y pulse {{key:Enter}} para su diámetro. Para colocarlo con exactitud, abra el nuevo croquis y acote el punto.

**Qué croquis se usa:** el que acaba de cerrar o el seleccionado; si no, el croquis sin usar más reciente que tenga puntos sueltos. Si no hay ninguno: "Haga primero un croquis con puntos donde irán los agujeros (Croquis sobre una cara, luego Punto)."

## Ajustes

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| **Tipo** | Simple, Rebaje cilíndrico, Avellanado cónico, Roscado (ISO métrico) | Simple |
| **Diámetro (mm)** | El diámetro del agujero | 6 |
| **Pasante total** | Marcado: atraviesa la pieza por completo. Desmárquelo para un agujero ciego | Marcado |
| **Profundidad (mm)** | Se muestra cuando Pasante total está desmarcado | 10 |
| **Diámetro del rebaje ⌀** | Se muestra para Rebaje cilíndrico: el diámetro del hueco más ancho | 11 |
| **Profundidad del rebaje** | Se muestra para Rebaje cilíndrico | 6 |
| **Invertir dirección** | Taladra hacia el otro lado del plano del croquis | Desactivado |

Los agujeros taladran el material, perpendiculares al plano del croquis. La profundidad de un agujero ciego se mide desde el plano del croquis; su fondo es plano.

## Un agujero de perno con rebaje cilíndrico

1. Haga los agujeros como se indicó arriba.
2. Establezca **Tipo** en **Rebaje cilíndrico**.
3. Establezca **Diámetro (mm)** en `6.6` (holgura para un perno M6), **Diámetro del rebaje ⌀** en `11` y **Profundidad del rebaje** en `6.5`.

El rebaje cilíndrico debe ser más ancho que el agujero ("El rebaje cilíndrico debe ser más ancho que el agujero.") y, en un agujero ciego, menos profundo que él ("El rebaje cilíndrico debe ser menos profundo que el agujero.").

## Un círculo de pernos

Para agujeros distribuidos de forma uniforme alrededor de un centro, haga **un** agujero y un patrón con él: seleccione la operación Agujero, luego elija {{ui:Circular}} (véase [Patrones y simetría de operaciones](topic:patterns-mirror)). El patrón sigue cuando cambie el tamaño del agujero.

## Cuando los agujeros van en la dirección equivocada

- "No hay nada que taladrar en ese lado del croquis. Pruebe invirtiendo la dirección." El croquis está en el lado lejano del material. Marque **Invertir dirección**.
- "Coloque puntos del croquis donde irán los agujeros (herramienta Punto), luego haga el agujero." El croquis no tiene puntos sueltos. Los extremos de línea y los centros de círculo no cuentan.
- "Todavía no hay nada que taladrar." Un agujero necesita un sólido. Haga primero un macizo.

## Agujeros en ensambles

Cada agujero tiene un eje. En un ensamble, **Centrar en** puede poner una unión sobre el eje de un agujero, listado como "Agujero1, agujero 2", para que un pasador o un perno quede alineado con él. Véase [Crear un ensamble](topic:build-assembly).

## Avellanados cónicos

Establezca **Tipo** en **Avellanado cónico**, luego **Diámetro del avellanado ⌀** (en la superficie) y **Ángulo del avellanado**: 90° (tornillos de cabeza plana ISO métricos) o 82° (tornillos en pulgadas). Tome el diámetro del avellanado de los datos del fabricante del tornillo (un poco más que el diámetro de la cabeza del tornillo). La cara del cono se llama "avellanado" en los paneles.

## Agujeros roscados

Establezca **Tipo** en **Roscado (ISO métrico)** y elija la **Rosca**, de M2 a M24 de paso grueso. El agujero se taladra con el tamaño de broca de roscado de la tabla de abajo (diámetro nominal menos paso, en la serie de brocas, como lo indica ISO 2306 para una rosca 6H); el cuadro **Diámetro (mm)** no se usa. En un agujero ciego, **Profundidad de rosca (mm)** indica hasta dónde llega la rosca.

| Rosca | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Paso | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Diámetro de broca de roscado ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

Al principio la rosca es **cosmética**: el modelo tiene el agujero taladrado, la vista dibuja el diámetro mayor de la rosca como círculos discontinuos, y la hoja de dibujo lleva la llamada como una nota, por ejemplo "4× M8×1.25 - 6H, rosca pasante". STEP exporta solo el agujero taladrado.

Marque **Modelada** para cortar la rosca helicoidal real en el agujero, para impresión 3D. **Holgura (mm)** la hace mayor en todo el contorno, para que un perno impreso encaje: de 0.1 a 0.2 mm sirve para la mayoría de las impresoras. La llamada termina entonces en "(modelada)". Véase [Roscas en ejes y perforaciones, dibujadas o modeladas](topic:threads), que también pone roscas en ejes.

:::note
Los agujeros contra-taladrados, las roscas en pulgadas y las roscas de tubería todavía no están incluidos.
:::
