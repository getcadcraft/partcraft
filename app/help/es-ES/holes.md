---
title: Taladrar agujeros y cajeras en puntos del croquis
summary: Coloque puntos en un croquis sobre una cara, cree agujeros simples, con cajera, avellanados o roscados (métricos ISO) en cada punto, ajuste diámetro y profundidad, y corrija los agujeros que taladran en sentido equivocado.
keywords: agujero, asistente de agujeros, taladrar, rosca modelada, impresión 3D, cajera, avellanado, agujero de tornillo, pasante, agujero ciego, puntos, centros de agujero, rosca, rosca métrica, broca de roscar, M6, cbore, csink
from: 8e1eef83
---

{{ui:Taladro}} taladra un agujero en cada punto suelto de un croquis. Un punto suelto es uno hecho con la herramienta Punto, no el extremo de una línea ni el centro de un círculo.

## Taladrar agujeros en una cara

1. Haga clic en la cara plana donde taladrar y elija {{ui:Croquis en esta cara}}.
2. Pulse {{key:P}} y haga clic donde va cada agujero. Acote los puntos desde los bordes o el origen si importa su posición (véase [Defina totalmente un croquis](topic:relations-dimensions)).
3. Elija {{ui:Salir}}.
4. Elija {{ui:Taladro}}.

Los agujeros atraviesan la pieza, de 6 mm de diámetro. El panel derecho muestra **Agujeros**: cuántos se hicieron, «uno por punto del croquis».

**Un agujero, rápido:** haga clic en la cara plana donde va el agujero y elija {{ui:Agujero aquí}} en el panel derecho. PartCraft añade un croquis sobre la cara con un punto donde hizo clic y un agujero pasante en la pieza, en un solo paso. Escriba un número de inmediato y pulse {{key:Enter}} para su diámetro. Para colocarlo con exactitud, abra el nuevo croquis y acote el punto.

**Qué croquis se usa:** el que acaba de cerrar o el seleccionado; si no, el croquis sin usar más reciente que tenga puntos sueltos. Si no hay ninguno: «Haga antes un croquis con puntos donde vayan los agujeros (croquis sobre una cara y luego Punto)».

## Ajustes

| Ajuste | Opciones | Por defecto |
|---|---|---|
| **Tipo** | Simple, Con cajera, Avellanado, Roscado (métrico ISO) | Simple |
| **Diámetro (mm)** | El diámetro del agujero | 6 |
| **Pasante total** | Marcado: atraviesa toda la pieza. Desmárquelo para un agujero ciego | Marcado |
| **Profundidad (mm)** | Se muestra cuando Pasante total está desmarcado | 10 |
| **Diámetro de cajera ⌀** | Se muestra para Con cajera: el diámetro del rebaje más ancho | 11 |
| **Profundidad de cajera** | Se muestra para Con cajera | 6 |
| **Invertir dirección** | Taladra hacia el otro lado del plano del croquis | Desactivado |

Los agujeros taladran el material, en escuadra con el plano del croquis. La profundidad de un agujero ciego se mide desde el plano del croquis; su fondo es plano.

## Un agujero de tornillo con cajera

1. Haga los agujeros como arriba.
2. Ponga **Tipo** en **Con cajera**.
3. Ponga **Diámetro (mm)** en `6.6` (holgura para un tornillo M6), **Diámetro de cajera ⌀** en `11` y **Profundidad de cajera** en `6.5`.

La cajera debe ser más ancha que el agujero («La cajera debe ser más ancha que el agujero») y, en un agujero ciego, menos profunda que él («La cajera debe ser menos profunda que el agujero»).

## Una circunferencia de tornillos

Para agujeros repartidos uniformemente alrededor de un centro, haga **uno** y repítalo en patrón: seleccione la característica Agujero y elija {{ui:Circular}} (véase [Patrones y simetría](topic:patterns-mirror)). El patrón sigue cuando cambia el tamaño del agujero.

## Cuando los agujeros van en el sentido equivocado

- «No hay nada que taladrar en ese lado del croquis. Pruebe a invertir la dirección.» El croquis está al otro lado del material. Marque **Invertir dirección**.
- «Coloque puntos del croquis donde vayan los agujeros (herramienta Punto) y luego haga el agujero.» El croquis no tiene puntos sueltos. Los extremos de líneas y los centros de círculos no cuentan.
- «Aún no hay nada que taladrar.» Un agujero necesita un sólido. Haga antes un resalte.

## Agujeros en ensamblajes

Cada agujero tiene un eje. En un ensamblaje, **Centrar en** puede colocar una unión sobre el eje de un agujero, listado como «Hole1, hole 2», de modo que una pieza de pasador o de tornillo quede alineada con él. Véase [Crear un ensamblaje](topic:build-assembly).

## Agujeros avellanados

Ponga **Tipo** en **Avellanado**, y después **Diámetro de avellanado ⌀** (en la superficie) y **Ángulo de avellanado**: 90° (tornillos de cabeza plana ISO métrica) o 82° (tornillos en pulgadas). Tome el diámetro del avellanado de los datos del fabricante del tornillo (un poco mayor que el diámetro de la cabeza). La cara del cono se llama «avellanado» en los paneles.

## Agujeros roscados

Ponga **Tipo** en **Roscado (métrico ISO)** y elija la **Rosca**, de M2 a M24 de paso grueso. El agujero se taladra con el tamaño de broca de la tabla de abajo (diámetro nominal menos paso, según la serie de brocas que indica ISO 2306 para una rosca 6H); el cuadro **Diámetro (mm)** no se usa. En un agujero ciego, **Profundidad de rosca (mm)** indica hasta dónde llega la rosca.

| Rosca | M2 | M2.5 | M3 | M4 | M5 | M6 | M8 | M10 | M12 | M14 | M16 | M18 | M20 | M22 | M24 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Paso | 0.4 | 0.45 | 0.5 | 0.7 | 0.8 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2 | 2.5 | 2.5 | 2.5 | 3 |
| Broca de roscar ⌀ | 1.6 | 2.05 | 2.5 | 3.3 | 4.2 | 5 | 6.8 | 8.5 | 10.2 | 12 | 14 | 15.5 | 17.5 | 19.5 | 21 |

La rosca es **cosmética** al principio: el modelo tiene el agujero taladrado, la vista dibuja el diámetro mayor de la rosca como círculos discontinuos, y la hoja de plano lleva la llamada como nota, por ejemplo «4× M8×1.25 - 6H, rosca pasante». STEP exporta solo el agujero taladrado.

Marque **Modelada** para cortar la rosca helicoidal real en el agujero, para impresión 3D. **Holgura (mm)** la hace así de grande en todo el contorno, para que encaje un tornillo impreso: de 0.1 a 0.2 mm va bien con la mayoría de impresoras. La llamada termina entonces en «(modelada)». Véase [Roscas en ejes y taladros, dibujadas o modeladas](topic:threads), que también pone roscas en ejes.

:::note
Los agujeros de contrataladrado, las roscas en pulgadas y las roscas de tubería aún no están disponibles.
:::
