---
title: Definir por completo un boceto con relaciones y cotas
summary: Agregue relaciones desde el panel derecho y cotas con la herramienta Cota, lea los colores de insuficientemente definido, completamente definido y sobredefinido, y corrija un boceto sobredefinido.
keywords: relaciones, restricciones, cotas, cota inteligente, completamente definido, insuficientemente definido, sobredefinido, grados de libertad, coincidente, horizontal, vertical, paralela, perpendicular, tangente, igual, concéntrica, punto medio, fijar, conflicto, redundante
from: e76d047a
---

Un boceto está **completamente definido** cuando cada punto y cada medida están fijados por relaciones y cotas. Un boceto completamente definido solo cambia cuando cambia un número, así la pieza se comporta de forma previsible cuando la edita después. PartCraft no le obliga a definir por completo un boceto, pero siempre muestra qué tan cerca está.

## Leer el estado del boceto

El estado aparece en tres lugares: la etiqueta arriba a la izquierda de la vista, el mensaje arriba del panel derecho y la marca del historial.

| Estado | Etiqueta | Color de la geometría | Qué significa |
|---|---|---|---|
| Insuficientemente definido | "Insuficientemente definido · 3 grados de libertad" | Azul | Parte de la geometría todavía puede moverse. Arrastre la geometría azul para ver hacia dónde |
| Completamente definido | "Completamente definido" | Tinta (negro en Paper, claro en Model) | Cada punto y cada medida están fijados |
| Sobredefinido | "Sobredefinido" | Rojo en las relaciones involucradas | Algunas relaciones se contradicen entre sí, o una ya está implicada por otras |

La geometría de construcción es gris y punteada en cualquier estado. Los elementos seleccionados son naranjas. Un "grado de libertad" es una forma en que algo todavía puede moverse: un punto libre tiene dos (izquierda-derecha y arriba-abajo), un círculo libre tiene tres (su centro y su radio).

La leyenda bajo el mensaje del panel derecho repite los colores.

## Agregar una cota

1. Presione {{key:D}} o elija {{ui:Cota}}.
2. Haga clic en lo que va a medir:
   - **una línea**: su longitud;
   - **un círculo**: su diámetro; **un arco**: su radio;
   - **dos puntos** (un extremo, un centro, un punto suelto o el origen): la distancia entre ellos;
   - **un punto y una línea**: la distancia del punto a la línea;
   - **dos líneas paralelas**: la distancia entre ellas; **dos líneas en ángulo**: el ángulo entre ellas.
3. Después de un elemento, la barra de estado dice "Haga clic en un segundo elemento, o en el lugar donde irá la cota." Haga clic en un segundo elemento, o en un espacio vacío donde quiera el número.
4. Se abre una casilla de número con el valor actual. Escriba la medida y presione {{key:Enter}}. {{key:Esc}} conserva el valor medido.

**Dónde coloca el número define el tipo** para una línea inclinada o dos puntos: colóquelo arriba o abajo para obtener una distancia horizontal, a la izquierda o a la derecha para obtener una distancia vertical, y en otro lugar para la distancia real (alineada).

La casilla acepta números simples en milímetros o grados, como `25`, `12.5` o `1e3`. Un `⌀`, `Ø` o `R` al inicio, o `mm` o `°` al final, se ignora. Los ángulos van de 0 a 180 grados. Las operaciones como `20+5` no se aceptan; para vincular una medida a una variable o fórmula, empiece con `=`.

Para cambiar una cota después, haga doble clic en su número en el boceto, o elija **Editar** junto a ella en la lista del panel derecho.

:::tip
También puede seleccionar primero la geometría (herramienta Seleccionar) y elegir un botón de cota en el panel derecho: {{ui:Distancia}}, {{ui:Distancia horizontal}}, {{ui:Distancia vertical}}, {{ui:Radio}}, {{ui:Diámetro}} o {{ui:Ángulo}}. Solo se muestran los que encajan con la selección. Así se le da a un círculo un radio en lugar de un diámetro.
:::

## Agregar una relación

Las relaciones se agregan desde el panel derecho, no con una herramienta.

1. Presione {{key:S}} para Seleccionar.
2. Haga clic en un elemento, y luego {{key:Shift}}+clic en un segundo si la relación necesita dos. También se puede seleccionar el origen.
3. El panel derecho dice "Seleccionado: línea l3, punto p1" y muestra un botón para cada relación que encaja, como {{ui:∥ Paralela}} o {{ui:• Coincidente}}.
4. Elija el botón. El boceto se resuelve de inmediato.

Si ninguna relación encaja, el panel dice "Ninguna relación encaja con esta selección. Seleccione uno o dos elementos (Shift+clic agrega)."

La lista completa de relaciones, lo que necesita cada una y lo que hace, está en [Relaciones y cotas de boceto](topic:sketch-relations).

Las relaciones aparecen en el boceto como pequeños símbolos junto a la geometría (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Los puntos de coincidencia están ocultos salvo que la geometría esté seleccionada o la relación tenga problemas. Haga clic en un símbolo para seleccionar la relación.

## Ejemplo práctico: perfil de soporte en L

1. Dibuje sobre el **Plano frontal**. Con la herramienta Línea, empiece en el origen y haga clic en seis esquinas de una L, terminando otra vez en el origen. La cadena termina sola cuando hace clic en el primer punto.
2. Las líneas trazadas casi horizontales o verticales ya tienen relaciones H y V, salvo la última: una línea que termina en un punto existente no recibe relación automática. Presione {{key:S}}, haga clic en esa última línea y elija {{ui:V Vertical}} en el panel derecho. La etiqueta dice "Insuficientemente definido · 4 grados de libertad".
3. Presione {{key:D}}. Haga clic en la línea inferior, haga clic debajo de ella, escriba `80` y presione {{key:Enter}}.
4. Haga clic en la línea izquierda, haga clic a la izquierda de ella, escriba `60` y presione {{key:Enter}}.
5. Acote la línea corta superior con `20` y la línea vertical interior con `45` de la misma forma.
6. La etiqueta ahora dice **Completamente definido** y toda la L pasa a tinta.

## Corregir un boceto sobredefinido

Cuando una relación o cota nueva contradice a las demás, PartCraft no mueve nada. La geometría queda exactamente igual, las relaciones involucradas se vuelven rojas, y la barra de estado las nombra:

- "Sobredefinido: Horizontal, Distancia 40 no pueden cumplirse todas a la vez. Deshaga, o elimine una de ellas." Las relaciones están en conflicto.
- "Sobredefinido: Paralela ya está implicada. Elimínela." La relación no agrega nada: las demás ya la fuerzan. (Por ejemplo, los lados de un rectángulo ya son paralelos.)

Para corregirlo:

1. Presione {{key:Mod+Z}} para deshacer el último cambio, o
2. Busque el elemento rojo en la lista **Relaciones y cotas** del panel derecho (un grupo que lo contiene se abre y aparece en rojo) y elija **Eliminar** junto a él. También puede hacer clic en su símbolo o número en el boceto y presionar {{key:Delete}}.

:::note
En esta versión no hay cotas "conducidas" (de referencia). Una cota que solo informaría una medida que las demás relaciones ya fijan se trata como sobredefinida. Lea las medidas en el panel: seleccione una línea y mire los botones de Cota, o revise los datos de la pieza después de extruir.
:::

Un boceto sobredefinido con conflicto real hace fallar el elemento que lo usa ("Sobredefinido: 1 relación no puede cumplirse con las demás."), y el historial lo marca **⚠ error**. Un boceto solo redundante se construye igual, con una ⚠ advertencia.

## Arrastrar para encontrar lo libre

En Seleccionar, arrastre cualquier punto o línea azul. El solucionador lo mueve lo mínimo posible manteniendo todas las relaciones. Si un arrastre rompería una relación, la geometría vuelve a su lugar. Es la forma más rápida de ver qué cota falta.

## La lista de relaciones

Sin nada seleccionado, el panel derecho lista **Relaciones y cotas**. Cada fila tiene:

- **Editar** (solo cotas): abre la casilla de número;
- **Seleccionar**: la selecciona en el boceto;
- **Eliminar**: la quita.

Las relaciones de un mismo tipo que aparecen más de una vez comparten una fila, como "Coincidente × 5" para un rectángulo unido al origen. Haga clic en la fila para abrirla: cada relación aparece con lo que une ("punto p2, punto p4") con su propio **Seleccionar** y **Eliminar**. La fila en sí tiene:

- **Seleccionar**: selecciona todas en el boceto;
- **Eliminar todo**: quita todas de una vez ({{key:Mod+Z}} las devuelve).

Un grupo que contiene una relación sobredefinida se abre solo, con su nombre en rojo. Las cotas siempre aparecen una por fila, con sus valores.

Con geometría seleccionada, la lista muestra solo las **Relaciones de la selección**.
