---
title: Compruebe un ensamblaje en busca de interferencias y movimiento
summary: Encuentre piezas que se superponen con Interferencia, arrastre cualquier valor de una unión para ver el movimiento, y barra una unión en todo su rango para encontrar dónde chocan las piezas.
keywords: interferencia, detección de interferencias, choque, colisión, superposición, ajuste de rosca, discrepancia de profundidad de rosca, caras en contacto, ocultar, filtro, movimiento, estudio de movimiento, barrido, rango de movimiento, comprobar
from: 9c98db46
---

Dos comprobaciones se ejecutan sobre las piezas tal como están colocadas: **Interferencia** busca material superpuesto en este momento, y la **comprobación de movimiento** mueve una unión a lo largo de su rango y busca superposiciones en el camino.

## Comprobar interferencias

1. Abra o construya un ensamblaje (vea [Construir un ensamblaje con uniones](topic:build-assembly)).
2. Elija {{ui:Interferencia}}.

La barra de estado informa el resultado:

- "Sin interferencia entre 3 piezas (… ms)." No hay superposición.
- "Interferencia: Flange1 y Flange2: Superposición, 2.5 mm³." Cada par, qué tipo de resultado es y el volumen que comparten.

El cuadro **Ensamblaje** a la izquierda muestra **Interferencia**: "Ninguna", "2 resultados" (los que se muestran) o "Sin comprobar". Sin nada seleccionado, el panel derecho enumera cada resultado bajo **Interferencia**.

El resultado se borra cada vez que cambia el ensamblaje. Ejecute {{ui:Interferencia}} de nuevo después de mover una unión. Cada par de piezas se compara con todos los demás, así que los ensamblajes grandes tardan más.

### Tipos de resultados

| Tipo | Significa |
|---|---|
| **Superposición** | Las piezas comparten volumen: una interferencia real. |
| **Discrepancia de profundidad de rosca** | El volumen compartido está dentro de la rosca de una pieza pero más allá de la de la otra: un perno con rosca más profunda que su agujero, o un vástago liso en un agujero roscado. |
| **Ajuste de rosca (roscas cosméticas)** | El volumen compartido está dentro de las roscas de ambas piezas: un perno en un agujero roscado. Las roscas cosméticas se dibujan con el tamaño completo de la rosca, así que siempre se superponen un poco. |
| **Caras en contacto** | Sin volumen compartido, pero caras en contacto (dentro de 0.001 mm). |

Las roscas modeladas (vea [Roscas en ejes y perforaciones, dibujadas o modeladas](topic:threads)) son geometría real: lo que comparten es una **Superposición**.

### Ocultar lo que no necesita ver

Bajo **Interferencia**, **Mostrar** tiene un cuadro para cada tipo: desmarque **Ajuste de rosca** y **Caras en contacto** para ver solo las interferencias que importan. **Ocultar este par** junto a un resultado oculta ese par de piezas, sin importar el tipo. Los resultados ocultos se cuentan ("2 resultados ocultos por estos filtros"), y **Volver a mostrar los pares ocultos** los devuelve. La barra de estado también cuenta los resultados ocultos.

Los filtros se guardan con el ensamblaje, y cada cambio es un paso de {{key:Mod+Z}}. El barrido de una unión (abajo) también los usa. Un ensamblaje con filtros se guarda como versión 4, que las versiones anteriores de PartCraft se niegan a abrir en lugar de perder los filtros.

## Ver el movimiento

1. Seleccione en la lista de la izquierda una unión que se mueva (cualquiera, salvo rígida).
2. Arrastre el control deslizante bajo uno de sus valores, como **Ángulo (°)** o **Desfase (mm)**. La pieza se mueve mientras arrastra.
3. Suelte. La nueva posición se conserva y puede deshacerse con {{key:Mod+Z}}.

También puede escribir un ángulo o un desfase en el cuadro y pulsar {{key:Enter}}.

Una unión en un bucle cerrado (un mecanismo) mueve todo el bucle: el valor que arrastra se conserva y las demás uniones del bucle lo siguen (vea [Bucles cerrados](topic:build-assembly#closed-loops-linkages)).

## Barrer una unión en busca de interferencias

1. Seleccione una unión que se mueva.
2. Para una unión con varios valores (cilíndrica, plana, de rótula, pasador en ranura), elija cuál barrer en **Comprobar movimientos**.
3. Elija {{ui:Comprobar interferencias en el movimiento}}.

PartCraft mueve ese valor por 25 posiciones en 24 pasos iguales, y los demás se quedan igual: un ángulo de −180° a 180° (una inclinación de −90° a 90°), o una longitud de menos a más el tamaño de la pieza más grande. Informa:

- "Sin interferencias en ningún punto para Ángulo (°) de -180 a 180 (25 posiciones comprobadas)."
- "6 de 25 posiciones tienen interferencia; la primera en Ángulo (°) 45 (12.4 mm³)." La primera posición con interferencia y la superposición en ella.

El botón aparece en gris para las uniones rígidas, que no se mueven. El barrido comprueba solo las posiciones, no el trayecto entre ellas: una pieza delgada podría atravesar otra entre dos pasos.

:::note
El contacto y la gravedad todavía no están construidos. Sin límites, el barrido cubre todo el rango; dé al valor **Límites** (vea [Lista de piezas, vistas explosionadas y piezas en movimiento](topic:assembly-bom-explode)) y el barrido cubrirá solo esos, así que una bisagra que se abre 90° se comprueba en 90°.
:::

## Un estudio de movimiento

**Ensamblaje › Movimiento** mueve el valor de una unión desde un inicio hasta un fin durante un tiempo que usted define (velocidad constante, suavizada, senoidal, o de ida y vuelta), coloca el ensamblaje en cada paso con sus uniones y bucles cerrados, e informa qué interferencias hay y qué tan cerca están las piezas. **Agregar un punto** sigue el centro de una pieza o un punto en el que haga clic, y la tarjeta grafica su posición, su velocidad y su aceleración, el valor de la unión y la holgura contra el tiempo; **Guardar CSV** y **Guardar gráfica** los escriben. La velocidad y la aceleración se calculan a partir de las posiciones registradas, así que un pico agudo entre pasos se lee bajo: use más pasos.

Después de **Ejecutar**, la barra **Recorrer la ejecución** mueve el ensamblaje a cualquier paso (el tiempo, el valor y si las piezas interfieren allí se muestran junto a ella); la unión conserva su propio valor, y **Volver al modelo** regresa el ensamblaje. Los ajustes del estudio se guardan en el archivo del ensamblaje; sus resultados se generan de nuevo con **Ejecutar**.

## Un estudio de contacto

**Ensamblaje › Contacto** muestra cómo un ensamblaje transmite sus cargas donde las piezas se presionan entre sí. Cada pieza aporta sus propios apoyos, cargas y material desde su propio estudio de **Simulación** (una cara fija en una pieza, una fuerza en otra); aquí usted elige los pares. **Agregar un par**, luego **Elegir lado A** y haga clic en caras de una pieza, **Elegir lado B** y haga clic en caras de otra pieza distinta (un clic sobre una cara ya elegida la quita; Esc o **Listo** termina la selección). Un par es **Sin fricción** (las piezas se presionan pero se deslizan) o **Unido** (permanecen juntas); el factor de rigidez define qué tan fuerte resiste el contacto a hundirse (20 es un buen inicio, 1000 para un apilado de acero rígido).

**Resolver** ejecuta la carga en pasos y muestra la fuerza de contacto, el mayor hundimiento, el mayor desplazamiento y el mayor esfuerzo. Una pieza sin par se deja fuera y la tarjeta lo indica. El contacto sin fricción no sujeta una pieza lateralmente: dé a cada pieza un apoyo en su propio estudio de Simulación, o únala, o los pasos quizá no se estabilicen. Los pares y los ajustes se guardan en el archivo del ensamblaje.

**Exportar archivo de CalculiX** escribe el mismo modelo como archivo de entrada de CalculiX (.inp). CalculiX es un programa aparte que usted instala y ejecuta; **Leer resultados de CalculiX (.frd)** luego lee los desplazamientos de vuelta en la malla de este ensamblaje y rechaza un archivo hecho para otra malla. El solucionador aquí admite plasticidad, pero no dinámica explícita, y nada de lo que hay aquí es un análisis certificado: un ingeniero debe revisar todo lo que importe.
