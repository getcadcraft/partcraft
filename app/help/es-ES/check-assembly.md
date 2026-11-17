---
title: Comprobar un ensamblaje por interferencias y movimiento
summary: Busque piezas que se solapan con Interferencia, arrastre cualquier valor de unión para ver el movimiento, y barra una unión en todo su rango para encontrar dónde chocan las piezas.
keywords: interferencia, detección de interferencias, colisión, solapamiento, ajuste de rosca, discrepancia de profundidad de rosca, caras en contacto, ocultar, filtro, movimiento, estudio de movimiento, barrido, rango de movimiento, comprobar
from: 9c98db46
---

Dos comprobaciones se ejecutan sobre las piezas tal como están colocadas: **Interferencia** busca material solapado en este momento, y la **comprobación de movimiento** mueve una unión en todo su rango y busca solapamientos durante el recorrido.

## Comprobar interferencias

1. Abra o cree un ensamblaje (véase [Crear un ensamblaje con uniones](topic:build-assembly)).
2. Elija {{ui:Interferencia}}.

La barra de estado informa del resultado:

- "Sin interferencias entre 3 piezas (… ms)." No hay solapamientos.
- "Interferencia: Flange1 y Flange2: Solapamiento, 2.5 mm³." Cada par, qué tipo de resultado es y el volumen que comparten.

El cuadro **Ensamblaje** de la izquierda muestra **Interferencia**: "Ninguna", "2 resultados" (los que se muestran), o "Sin comprobar". Con nada seleccionado, el panel derecho lista cada resultado bajo **Interferencia**.

El resultado se borra cada vez que cambia el ensamblaje. Ejecute {{ui:Interferencia}} de nuevo después de mover una unión. Cada par de piezas se compara con todas las demás, así que los ensamblajes grandes tardan más.

### Tipos de resultados

| Tipo | Significa |
|---|---|
| **Solapamiento** | Las piezas comparten volumen: una interferencia real. |
| **Discrepancia de profundidad de rosca** | El volumen compartido está dentro de la rosca de una pieza pero más allá de la de la otra: un tornillo roscado más profundo que su agujero, o un vástago liso en un agujero roscado. |
| **Ajuste de rosca (roscas cosméticas)** | El volumen compartido está dentro de las roscas de ambas piezas: un tornillo en un agujero roscado. Las roscas cosméticas se dibujan con su tamaño completo, así que siempre se solapan un poco. |
| **Caras en contacto** | Sin volumen compartido, pero caras en contacto (dentro de 0.001 mm). |

Las roscas modeladas (véase [Roscas en ejes y taladros, dibujadas o modeladas](topic:threads)) son geometría real: lo que comparten es un **Solapamiento**.

### Ocultar lo que no necesita ver

Bajo **Interferencia**, **Mostrar** tiene un cuadro para cada tipo: desmarque **Ajuste de rosca** y **Caras en contacto** para ver solo las interferencias importantes. **Ocultar este par** junto a un resultado oculta ese par de piezas sea cual sea su tipo. Los resultados ocultos se cuentan ("2 resultados ocultos por estos filtros"), y **Mostrar de nuevo los pares ocultos** los devuelve. La barra de estado también cuenta los resultados ocultos.

Los filtros se guardan con el ensamblaje, y cada cambio es un paso de {{key:Mod+Z}}. **Barrer una unión por interferencias** (abajo) también los usa. Un ensamblaje con filtros se guarda como versión 4, que las versiones anteriores de PartCraft se niegan a abrir en lugar de perder los filtros.

## Observar el movimiento

1. Seleccione en la lista de la izquierda una unión que se mueva (cualquiera salvo la rígida).
2. Arrastre el control deslizante bajo uno de sus valores, como **Ángulo (°)** o **Desplazamiento (mm)**. La pieza se mueve mientras arrastra.
3. Suelte. La nueva posición se conserva y puede deshacerse con {{key:Mod+Z}}.

También puede escribir un ángulo o un desplazamiento en el cuadro y pulsar {{key:Enter}}.

Una unión de un bucle cerrado (un mecanismo) mueve todo el bucle: el valor que arrastra se conserva y las demás uniones del bucle la siguen (véase [Bucles cerrados](topic:build-assembly#closed-loops-linkages)).

## Barrer una unión por interferencias

1. Seleccione una unión que se mueva.
2. En una unión con varios valores (cilíndrica, plana, de rótula, pasador en ranura), elija cuál barrer en **Comprobar movimientos**.
3. Elija {{ui:Comprobar interferencias en el movimiento}}.

PartCraft mueve ese valor por 25 posiciones en 24 pasos iguales, dejando los demás como están: un ángulo de −180° a 180° (una inclinación de −90° a 90°), una longitud desde menos hasta más el tamaño de la pieza más grande. Informa:

- "Ninguna interferencia en todo el recorrido de Ángulo (°) de -180 a 180 (25 posiciones comprobadas)."
- "6 de 25 posiciones tienen interferencia; la primera en Ángulo (°) 45 (12.4 mm³)." La primera posición con interferencia y el solapamiento que hay allí.

El botón aparece en gris en las uniones rígidas, que no se mueven. El barrido comprueba solo las posiciones, no el camino entre ellas: una pieza delgada podría atravesar otra entre dos pasos.

:::note
El contacto y la gravedad no están disponibles. Sin límites, el barrido cubre todo el rango; dé a ese valor **Límites** (véase [Lista de piezas, vistas descompuestas y piezas móviles](topic:assembly-bom-explode)) y el barrido cubre solo ellos, así que una bisagra que se abre 90° se comprueba en 90°.
:::

## Un estudio de movimiento

**Ensamblaje › Movimiento** lleva el valor de una unión desde un inicio hasta un final durante un tiempo que usted indica (velocidad constante, suavizada, senoidal, o ida y vuelta), coloca el ensamblaje en cada paso con sus uniones y bucles cerrados, e informa de qué interferencias hay y qué tan cerca están las piezas. **Añadir un punto** sigue el centro de una pieza o un punto que elija en ella, y la tarjeta representa su posición, velocidad y aceleración, el valor de la unión y la holgura frente al tiempo; **Guardar CSV** y **Guardar gráfico** los escriben. La velocidad y la aceleración se calculan a partir de las posiciones registradas, así que un pico agudo entre pasos sale bajo: use más pasos.

Tras **Ejecutar**, la barra **Recorrer la ejecución** lleva el ensamblaje a cualquier paso (el tiempo, el valor y si las piezas interfieren allí se muestran junto a ella); la unión conserva su propio valor, y **Volver al modelo** devuelve el ensamblaje a su estado. Los ajustes del estudio se guardan en el archivo del ensamblaje; sus resultados se vuelven a calcular con **Ejecutar**.

## Un estudio de contacto

**Ensamblaje › Contacto** muestra cómo un ensamblaje transmite sus cargas donde las piezas se presionan entre sí. Cada pieza aporta sus propios apoyos, cargas y material desde su propio estudio de **Simulación** (una cara fija en una pieza, una fuerza en otra); aquí usted elige los pares. **Añadir un par**, luego **Elegir lado A** y haga clic en caras de una pieza, **Elegir lado B** y haga clic en caras de una pieza distinta (un clic sobre una cara ya elegida la quita; Esc o **Hecho** termina la selección). Un par es **Sin fricción** (las piezas se presionan pero deslizan) o **Unido** (permanecen juntas); el factor de rigidez indica cuánto resiste el contacto a hundirse (20 es un buen punto de partida, 1000 para un paquete de acero rígido).

**Resolver** ejecuta la carga en pasos y muestra la fuerza de contacto, la mayor penetración, el mayor desplazamiento y la mayor tensión. Una pieza sin ningún par se deja fuera y la tarjeta lo indica. El contacto sin fricción no sujeta una pieza lateralmente: dé a cada pieza un apoyo en su propio estudio de Simulación, o hágala unida, o los pasos podrían no converger. Los pares y los ajustes se guardan en el archivo del ensamblaje.

**Exportar entrada de CalculiX** escribe el mismo modelo como archivo de entrada de CalculiX (.inp). CalculiX es un programa aparte que usted instala y ejecuta por su cuenta; **Leer resultados de CalculiX (.frd)** lee después los desplazamientos sobre la malla de este ensamblaje y rechaza un archivo hecho para otra malla. El solver de aquí admite plasticidad pero no dinámica explícita, y nada de esto es un análisis certificado: un ingeniero debe revisar todo lo que importe.
