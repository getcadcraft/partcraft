---
title: Definir por completo un croquis con relaciones y cotas
summary: Añada relaciones desde el panel derecho y cotas con la herramienta Cota, lea los colores de insuficientemente definido, totalmente definido y sobredefinido, y corrija un croquis sobredefinido.
keywords: relaciones, restricciones, cotas, cota inteligente, totalmente definido, insuficientemente definido, sobredefinido, grados de libertad, coincidente, horizontal, vertical, paralela, perpendicular, tangente, igual, concéntrica, punto medio, fijar, conflicto, redundante
from: e76d047a
---

Un croquis está **totalmente definido** cuando cada punto y cada medida están fijados por relaciones y cotas. Un croquis totalmente definido cambia solo cuando cambia un número, así la pieza se comporta de forma previsible al editarla después. PartCraft no le obliga a definir totalmente un croquis, pero siempre muestra lo cerca que está.

## Leer el estado del croquis

El estado aparece en tres lugares: la etiqueta de la esquina superior izquierda de la vista, el mensaje de la parte superior del panel derecho y la marca del historial.

| Estado | Etiqueta | Color de la geometría | Significado |
|---|---|---|---|
| Insuficientemente definido | "Insuficientemente definido · 3 grados de libertad" | Azul | Parte de la geometría aún puede moverse. Arrastre la geometría azul para ver en qué dirección |
| Totalmente definido | "Totalmente definido" | Tinta (negro en Paper, claro en Model) | Cada punto y cada medida está fijado |
| Sobredefinido | "Sobredefinido" | Rojo en las relaciones implicadas | Algunas relaciones se contradicen entre sí, o alguna ya está implicada por otras |

La geometría de construcción es gris y discontinua sea cual sea su estado. Los elementos seleccionados son naranjas. Un "grado de libertad" es una forma en que algo aún puede moverse: un punto libre tiene dos (izquierda-derecha y arriba-abajo), y un círculo libre tiene tres (su centro y su radio).

La leyenda bajo el mensaje del panel derecho repite los colores.

## Añadir una cota

1. Pulse {{key:D}} o elija {{ui:Cota}}.
2. Haga clic en lo que quiere medir:
   - **una línea**: su longitud;
   - **un círculo**: su diámetro; **un arco**: su radio;
   - **dos puntos** (un extremo, un centro, un punto suelto o el origen): la distancia entre ellos;
   - **un punto y una línea**: la distancia del punto a la línea;
   - **dos líneas paralelas**: la distancia entre ellas; **dos líneas con un ángulo**: el ángulo entre ellas.
3. Tras un elemento, la barra de estado dice "Haga clic en un segundo elemento o en el lugar donde irá la cota." Haga clic en un segundo elemento, o en un espacio vacío donde quiera el número.
4. Se abre un cuadro numérico con el valor actual. Escriba la medida y pulse {{key:Enter}}. {{key:Esc}} mantiene el valor medido.

**El lugar donde coloque el número decide el tipo** en una línea inclinada o entre dos puntos: colóquelo arriba o abajo para obtener una distancia horizontal, a la izquierda o a la derecha para una distancia vertical, y en cualquier otro lugar para la distancia real (alineada).

El cuadro acepta números sin formato en milímetros o grados, como `25`, `12.5` o `1e3`. Un `⌀`, `Ø` o `R` al principio, o `mm` o `°` al final, se ignora. Los ángulos van de 0 a 180 grados. No se admiten operaciones como `20+5`; para vincular una medida a una variable o fórmula, empiece por `=`.

Para cambiar una cota más adelante, haga doble clic en su número en el croquis, o elija **Editar** junto a ella en la lista del panel derecho.

:::tip
También puede seleccionar primero la geometría (herramienta Seleccionar) y elegir un botón de cota en el panel derecho: {{ui:Distancia}}, {{ui:Distancia horizontal}}, {{ui:Distancia vertical}}, {{ui:Radio}}, {{ui:Diámetro}} o {{ui:Ángulo}}. Solo se muestran los que encajan con la selección. Así se da a un círculo un radio en lugar de un diámetro.
:::

## Añadir una relación

Las relaciones se añaden desde el panel derecho, no con una herramienta.

1. Pulse {{key:S}} para Seleccionar.
2. Haga clic en un elemento y luego {{key:Shift}}+clic en un segundo si la relación necesita dos. También se puede seleccionar el origen.
3. El panel derecho dice "Seleccionado: línea l3, punto p1" y muestra un botón para cada relación que encaje, como {{ui:∥ Paralela}} o {{ui:• Coincidente}}.
4. Elija el botón. El croquis se resuelve al instante.

Si ninguna relación encaja, el panel dice "No hay ninguna relación que encaje con esta selección. Seleccione uno o dos elementos (Shift+clic añade)."

La lista completa de relaciones, lo que necesita cada una y lo que hace está en [Relaciones y cotas de croquis](topic:sketch-relations).

Las relaciones se muestran en el croquis como pequeños símbolos junto a la geometría (H, V, ∥, ⊥, T, =, ◎, M, ⚓). Los puntos de coincidencia están ocultos salvo que se seleccione la geometría o que la relación tenga problemas. Haga clic en un símbolo para seleccionar la relación.

## Ejemplo práctico: perfil de escuadra en forma de L

1. Croquice sobre el **Plano alzado**. Con la herramienta Línea, empiece en el origen y haga clic en seis esquinas de una L, terminando otra vez en el origen. La cadena termina sola al hacer clic en el primer punto.
2. Las líneas trazadas casi horizontales o verticales ya tienen relaciones H y V, salvo la última: una línea que termina en un punto existente no recibe ninguna relación automática. Pulse {{key:S}}, haga clic en esa última línea y elija {{ui:V Vertical}} en el panel derecho. La etiqueta dice "Insuficientemente definido · 4 grados de libertad".
3. Pulse {{key:D}}. Haga clic en la línea inferior, haga clic debajo de ella, escriba `80` y pulse {{key:Enter}}.
4. Haga clic en la línea izquierda, haga clic a su izquierda, escriba `60` y pulse {{key:Enter}}.
5. Acote la línea corta superior con `20` y la línea vertical interior con `45` de la misma forma.
6. La etiqueta ahora dice **Totalmente definido** y toda la L pasa a tinta.

## Corregir un croquis sobredefinido

Cuando una nueva relación o cota contradice a las demás, PartCraft no mueve nada. La geometría se queda exactamente como estaba, las relaciones implicadas se vuelven rojas y la barra de estado las nombra:

- "Sobredefinido: Horizontal, Distancia 40 no pueden cumplirse todas a la vez. Deshaga o elimine una de ellas." Las relaciones entran en conflicto.
- "Sobredefinido: Paralela ya está implicada. Elimínela." La relación no aporta nada: las demás ya la obligan. (Los lados de un rectángulo, por ejemplo, ya son paralelos.)

Para corregirlo:

1. Pulse {{key:Mod+Z}} para deshacer el último cambio, o
2. Busque el elemento rojo en la lista **Relaciones y cotas** del panel derecho (un grupo que lo contiene se abre y aparece en rojo) y elija **Eliminar** junto a él. También puede hacer clic en su símbolo o número en el croquis y pulsar {{key:Delete}}.

:::note
En esta versión no hay cotas de referencia. Una cota que solo informaría de una medida que las demás relaciones ya fijan se trata como sobredefinida. Lea las medidas en el panel: seleccione una línea y mire los botones de cota, o compruebe los datos de la pieza después de extruir.
:::

Un croquis sobredefinido con un conflicto real hace que falle el elemento que lo usa ("Sobredefinido: 1 relación no puede cumplirse toda a la vez."), y el historial lo marca como **⚠ error**. Un croquis solo redundante se construye igualmente, con un aviso ⚠.

## Arrastrar para encontrar lo que está libre

En Seleccionar, arrastre cualquier punto o línea azul. El solver lo mueve lo mínimo posible manteniendo todas las relaciones. Si un arrastre rompería una relación, la geometría vuelve a su sitio. Es la forma más rápida de ver qué cota aún falta.

## La lista de relaciones

Sin nada seleccionado, el panel derecho muestra **Relaciones y cotas**. Cada fila tiene:

- **Editar** (solo cotas): abre el cuadro numérico;
- **Seleccionar**: la selecciona en el croquis;
- **Eliminar**: la quita.

Las relaciones de un mismo tipo que aparecen más de una vez comparten una fila, como "Coincidente × 5" para un rectángulo unido al origen. Haga clic en la fila para abrirla: cada relación aparece con lo que une ("punto p2, punto p4") y con su propio **Seleccionar** y **Eliminar**. La fila en sí tiene:

- **Seleccionar**: selecciona todas en el croquis;
- **Eliminar todo**: elimina todas de una vez ({{key:Mod+Z}} las devuelve).

Un grupo que contiene una relación sobredefinida se abre solo, con su nombre en rojo. Las cotas aparecen siempre una por fila, con sus valores.

Con geometría seleccionada, la lista muestra solo las **Relaciones de la selección**.
