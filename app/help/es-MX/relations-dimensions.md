---
title: Definir totalmente un croquis con relaciones y cotas
summary: Agregue relaciones desde el panel derecho y cotas con la herramienta Cota, lea los colores de totalmente definido, subdefinido y sobredefinido, y corrija un croquis sobredefinido.
keywords: relaciones, restricciones, cotas, cota inteligente, totalmente definido, subdefinido, sobredefinido, grados de libertad, coincidente, horizontal, vertical, paralela, perpendicular, tangente, igual, concéntrica, punto medio, fijar, conflicto, redundante
from: e76d047a
---

Un croquis está **totalmente definido** cuando cada punto y cada medida están fijados por relaciones y cotas. Un croquis totalmente definido solo cambia cuando cambia un número, así la pieza se comporta de forma predecible al editarla después. PartCraft no le obliga a definir totalmente un croquis, pero siempre muestra qué tan cerca está.

## Leer el estado del croquis

El estado se muestra en tres lugares: la etiqueta en la parte superior izquierda de la vista, el mensaje en la parte superior del panel derecho y la marca en el historial.

| Estado | Etiqueta | Color de la geometría | Qué significa |
|---|---|---|---|
| Subdefinido | "Subdefinido · 3 grados de libertad" | Azul | Alguna geometría todavía puede moverse. Arrastre la geometría azul para ver en qué dirección |
| Totalmente definido | "Totalmente definido" | Tinta (negro sobre Papel, claro sobre Modelo) | Cada punto y cada medida están fijados |
| Sobredefinido | "Sobredefinido" | Rojo en las relaciones involucradas | Algunas relaciones se contradicen, o una ya está implícita por otras |

La geometría de construcción es gris y discontinua sin importar su estado. Los elementos seleccionados son naranjas. Un "grado de libertad" es una forma en que algo todavía puede moverse: un punto libre tiene dos (izquierda-derecha y arriba-abajo), un círculo libre tiene tres (su centro y su radio).

La leyenda bajo el mensaje en el panel derecho repite los colores.

## Agregar una cota

1. Pulse {{key:D}} o elija {{ui:Cota}}.
2. Haga clic en lo que va a medir:
   - **una línea**: su longitud;
   - **un círculo**: su diámetro; **un arco**: su radio;
   - **dos puntos** (un punto final, un centro, un punto suelto o el origen): la distancia entre ellos;
   - **un punto y una línea**: la distancia del punto a la línea;
   - **dos líneas paralelas**: la distancia entre ellas; **dos líneas con ángulo**: el ángulo entre ellas.
3. Después de un elemento, la barra de estado dice "Haga clic en un segundo elemento o donde irá la cota." Haga clic en un segundo elemento, o en un espacio vacío donde quiera el número.
4. Se abre un cuadro de número con el valor actual. Escriba la medida y pulse {{key:Enter}}. {{key:Esc}} conserva el valor medido.

**Dónde coloque el número define el tipo** para una línea inclinada o dos puntos: colóquelo arriba o abajo para obtener una distancia horizontal, a la izquierda o a la derecha para obtener una distancia vertical, y en otro lugar para la distancia real (alineada).

El cuadro acepta números simples en milímetros o grados, como `25`, `12.5` o `1e3`. Un `⌀`, `Ø` o `R` al inicio, o `mm` o `°` al final, se ignoran. Los ángulos van de 0 a 180 grados. No se aceptan operaciones aritméticas como `20+5`; para vincular una medida a una variable o fórmula, empiece con `=`.

Para cambiar una cota después, haga doble clic en su número en el croquis, o elija **Editar** junto a ella en la lista del panel derecho.

:::tip
También puede seleccionar primero la geometría (herramienta Seleccionar) y elegir un botón de cota en el panel derecho: {{ui:Distancia}}, {{ui:Distancia horizontal}}, {{ui:Distancia vertical}}, {{ui:Radio}}, {{ui:Diámetro}} o {{ui:Ángulo}}. Solo se muestran los que encajan con la selección. Así se le puede dar a un círculo un radio en lugar de un diámetro.
:::

## Agregar una relación

Las relaciones se agregan desde el panel derecho, no con una herramienta.

1. Pulse {{key:S}} para Seleccionar.
2. Haga clic en un elemento, y luego {{key:Shift}}+clic en un segundo si la relación necesita dos. También se puede seleccionar el origen.
3. El panel derecho dice "Seleccionado: línea l3, punto p1" y muestra un botón para cada relación que encaje, como {{ui:∥ Paralela}} o {{ui:• Coincidente}}.
4. Elija el botón. El croquis se resuelve de inmediato.

Si ninguna relación encaja, el panel dice "Ninguna relación encaja con esta selección. Seleccione uno o dos elementos (Shift+clic agrega)."

La lista completa de relaciones, lo que necesita cada una y lo que hace está en [Relaciones y cotas de croquis](topic:sketch-relations).

Las relaciones se muestran en el croquis como pequeños símbolos junto a la geometría (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Los puntos de coincidencia se ocultan a menos que la geometría esté seleccionada o la relación tenga un problema. Haga clic en un símbolo para seleccionar la relación.

## Ejemplo práctico: un perfil de escuadra en L

1. Dibuje un croquis sobre el **Plano de alzado**. Con la herramienta Línea, empiece en el origen y haga clic en seis esquinas de una L, terminando otra vez en el origen. La cadena termina sola al hacer clic en el primer punto.
2. Las líneas trazadas casi horizontales o verticales ya tienen relaciones H y V, excepto la última: una línea que termina en un punto existente no recibe relación automática. Pulse {{key:S}}, haga clic en esa última línea y elija {{ui:V Vertical}} en el panel derecho. La etiqueta dice "Subdefinido · 4 grados de libertad".
3. Pulse {{key:D}}. Haga clic en la línea inferior, haga clic debajo de ella, escriba `80` y pulse {{key:Enter}}.
4. Haga clic en la línea izquierda, haga clic a la izquierda de ella, escriba `60` y pulse {{key:Enter}}.
5. Acote la línea superior corta con `20` y la línea vertical interior con `45` de la misma manera.
6. La etiqueta ahora dice **Totalmente definido** y toda la L se vuelve tinta.

## Corregir un croquis sobredefinido

Cuando una nueva relación o cota contradice a las demás, PartCraft no mueve nada. La geometría queda exactamente como estaba, las relaciones involucradas se vuelven rojas y la barra de estado las nombra:

- "Sobredefinido: Horizontal, Distancia 40 no pueden cumplirse todas. Deshacer, o elimine una de ellas." Las relaciones entran en conflicto.
- "Sobredefinido: Paralela ya está implícita. Elimínela." La relación no aporta nada: las demás ya la imponen. (Por ejemplo, los lados de un rectángulo ya son paralelos.)

Para corregirlo:

1. Pulse {{key:Mod+Z}} para deshacer el último cambio, o
2. Busque el elemento rojo en la lista **Relaciones y cotas** del panel derecho (un grupo que lo contiene aparece abierto y en rojo) y elija **Eliminar** junto a él. También puede hacer clic en su símbolo o número en el croquis y pulsar {{key:Delete}}.

:::note
No hay cotas "conducidas" (de referencia) en esta versión. Una cota que solo informaría una medida que ya fijan las demás relaciones se trata como sobredefinida. Lea las medidas en el panel: seleccione una línea y mire los botones de cota, o revise los datos de la pieza después de extruir.
:::

Un croquis sobredefinido con un conflicto real hace que falle la operación que lo usa ("Sobredefinido: 1 relación no puede cumplirse toda."), y el historial la marca como **⚠ error**. Un croquis solo redundante todavía se construye, con una advertencia ⚠.

## Arrastrar para encontrar lo que está libre

En Seleccionar, arrastre cualquier punto o línea azul. El solucionador lo mueve lo menos posible manteniendo todas las relaciones. Si un arrastre rompería una relación, la geometría vuelve a su lugar. Es la forma más rápida de ver qué cota todavía falta.

## La lista de relaciones

Si no hay nada seleccionado, el panel derecho muestra **Relaciones y cotas**. Cada fila tiene:

- **Editar** (solo cotas): abre el cuadro de número;
- **Seleccionar**: lo selecciona en el croquis;
- **Eliminar**: lo quita.

Las relaciones de un mismo tipo que aparecen más de una vez comparten una fila, como "Coincidente × 5" para un rectángulo unido al origen. Haga clic en la fila para abrirla: cada relación aparece listada por lo que une ("punto p2, punto p4") con su propio **Seleccionar** y **Eliminar**. La fila en sí tiene:

- **Seleccionar**: selecciona todas en el croquis;
- **Eliminar todo**: quita todas en un solo paso ({{key:Mod+Z}} las devuelve).

Un grupo que contiene una relación sobredefinida se abre solo, con su nombre en rojo. Las cotas siempre aparecen una por fila, con sus valores.

Con geometría seleccionada, la lista muestra solo las **Relaciones de la selección**.
