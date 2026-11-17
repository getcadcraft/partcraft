---
title: Verificar un conjunto por choques y movimiento
summary: Encontrá piezas que se superponen con Interferencia, arrastrá cualquier valor de unión para ver el movimiento, y recorré una unión en todo su rango para encontrar dónde chocan las piezas.
keywords: interferencia, detección de interferencias, choque, colisión, superposición, ajuste de rosca, desajuste de profundidad de rosca, caras en contacto, ocultar, filtro, movimiento, estudio de movimiento, barrido, rango de movimiento, verificar
from: 9c98db46
---

Dos verificaciones corren sobre las piezas tal como están ubicadas: **Interferencia** busca material superpuesto en este momento, y la verificación de movimiento mueve una unión a lo largo de su rango y busca superposiciones en el camino.

## Verificar interferencias

1. Abrí o construí un conjunto (ver [Ensamblar con uniones](topic:build-assembly)).
2. Elegí {{ui:Interferencia}}.

La barra de estado informa el resultado:

- "Sin interferencia entre 3 piezas (… ms)." Nada se superpone.
- "Interferencia: Flange1 y Flange2: Solapamiento, 2.5 mm³." Cada par, qué tipo de resultado es y el volumen que comparten.

La casilla **Conjunto** a la izquierda muestra **Interferencia**: "Ninguna", "2 resultados" (los que se muestran), o "Sin verificar". Sin nada elegido, el panel derecho lista cada resultado bajo **Interferencia**.

El resultado se borra cada vez que cambia el conjunto. Volvé a ejecutar {{ui:Interferencia}} después de mover una unión. Cada par de piezas se compara con cada otro, así que los conjuntos grandes tardan más.

### Tipos de resultados

| Tipo | Significa |
|---|---|
| **Solapamiento** | Las piezas comparten volumen: un choque real. |
| **Desajuste de profundidad de rosca** | El volumen compartido está dentro de la rosca de una pieza pero más allá de la de la otra: un perno roscado más profundo que su agujero, o un vástago liso en un agujero roscado. |
| **Ajuste de rosca (roscas cosméticas)** | El volumen compartido está dentro de las roscas de ambas piezas: un perno en un agujero roscado. Las roscas cosméticas se dibujan con el tamaño completo de la rosca, así que siempre se superponen un poco. |
| **Caras en contacto** | Sin volumen compartido, pero caras en contacto (dentro de 0.001 mm). |

Las roscas modeladas (ver [Roscas en ejes y perforaciones, dibujadas o modeladas](topic:threads)) son geometría real: lo que comparten es un **Solapamiento**.

### Ocultar lo que no necesitás ver

En **Interferencia**, **Mostrar** tiene una casilla para cada tipo: desmarcá **Ajuste de rosca** y **Caras en contacto** para ver solo los choques que importan. **Ocultar este par** al lado de un resultado oculta ese par de piezas sin importar el tipo. Los resultados ocultos se cuentan ("2 resultados ocultos por estos filtros"), y **Mostrar otra vez los pares ocultos** los vuelve a mostrar. La barra de estado también cuenta los resultados ocultos.

Los filtros se guardan con el conjunto, y cada cambio es un paso de {{key:Mod+Z}}. **Barrer una unión por choques** (abajo) también los usa. Un conjunto con filtros se guarda como versión 4, que las versiones anteriores de PartCraft se niegan a abrir en vez de perder los filtros.

## Mirar el movimiento

1. Elegí una unión que se mueva (cualquiera salvo rígida) en la lista de la izquierda.
2. Arrastrá el control deslizante de uno de sus valores, como **Ángulo (°)** o **Desplazamiento (mm)**. La pieza se mueve mientras arrastrás.
3. Soltá. La nueva posición se mantiene y se puede deshacer con {{key:Mod+Z}}.

También podés escribir un ángulo o desplazamiento en la casilla y presionar {{key:Enter}}.

Una unión en un lazo cerrado (un mecanismo) mueve todo el lazo: el valor que arrastrás se mantiene y las demás uniones del lazo lo siguen (ver [Lazos cerrados](topic:build-assembly#closed-loops-linkages)).

## Barrer una unión por choques

1. Elegí una unión que se mueva.
2. Para una unión con varios valores (cilíndrica, plana, esférica, pasador en ranura), elegí cuál barrer en **Verificar movimientos**.
3. Elegí {{ui:Verificar el movimiento por choques}}.

PartCraft mueve ese valor por 25 posiciones en 24 pasos iguales, dejando los demás como están: un ángulo de −180° a 180° (una inclinación de −90° a 90°), una longitud de menos a más el tamaño de la pieza más grande. Informa:

- "Ningún choque en todo el recorrido de Ángulo (°) de -180 a 180 (25 posiciones verificadas)."
- "6 de 25 posiciones chocan, primero en Ángulo (°) 45 (12.4 mm³)." La primera posición que choca y el solapamiento ahí.

El botón está en gris para uniones rígidas, que no se mueven. El barrido verifica solo las posiciones, no el camino entre ellas: una pieza delgada podría atravesar otra entre dos pasos.

:::note
El contacto y la gravedad no están construidos. Sin límites el barrido cubre todo el rango; dale al valor **Límites** (ver [Lista de piezas, vistas explosionadas y piezas móviles](topic:assembly-bom-explode)) y el barrido cubre solo esos, así una bisagra que abre 90° se verifica en 90°.
:::

## Un estudio de movimiento

**Ensamblaje › Movimiento** lleva el valor de una unión de un inicio a un fin en un tiempo que vos das (velocidad constante, suavizada, senoidal, o ida y vuelta), ubica el conjunto en cada paso con sus uniones y lazos cerrados, e informa qué choca y qué tan cerca quedan las piezas. **Agregar un punto** sigue el centro de una pieza o un punto que hagas clic sobre ella, y la tarjeta grafica su posición, velocidad y aceleración, el valor de la unión y la separación en función del tiempo; **Guardar CSV** y **Guardar gráfico** los escriben. La velocidad y la aceleración salen de las posiciones registradas, así que un pico agudo entre pasos se lee bajo: usá más pasos.

Después de **Ejecutar**, la barra **Recorrer la ejecución** lleva el conjunto a cualquier paso (el tiempo, el valor y si las piezas chocan ahí se muestran al lado); la unión mantiene su propio valor, y **Volver al modelo** devuelve el conjunto a su lugar. La configuración del estudio se guarda en el archivo del conjunto; sus resultados se vuelven a generar con **Ejecutar**.

## Un estudio de contacto

**Ensamblaje › Contacto** muestra cómo un conjunto transmite sus cargas donde las piezas se presionan entre sí. Cada pieza trae sus propios apoyos, cargas y material desde su propio estudio de **Simulación** (una cara fija en una pieza, una fuerza en otra); acá elegís los pares. **Agregar un par**, después **Elegir lado A** y hacé clic en caras de una pieza, **Elegir lado B** y hacé clic en caras de una pieza distinta (un clic sobre una cara elegida la quita; Esc o **Listo** termina la selección). Un par es **Sin fricción** (las piezas se presionan pero se deslizan) o **Unido** (quedan juntas); el factor de rigidez indica qué tan fuerte resiste el contacto a hundirse (20 es un buen punto de partida, 1000 para un paquete de acero rígido).

**Resolver** ejecuta la carga en pasos y muestra la fuerza de contacto, la mayor penetración, el mayor movimiento y la mayor tensión. Una pieza sin ningún par queda afuera y la tarjeta lo dice. El contacto sin fricción no sostiene una pieza de costado: dale un apoyo en su propio estudio de Simulación, o unila, o los pasos quizá no se estabilicen. Los pares y los ajustes se guardan en el archivo del conjunto.

**Exportar archivo CalculiX** escribe el mismo modelo como archivo de entrada CalculiX (.inp). CalculiX es un programa aparte que instalás y ejecutás vos mismo; **Leer resultados de CalculiX (.frd)** después lee los desplazamientos de vuelta sobre la malla de este conjunto y rechaza un archivo hecho para otra malla. El solver de acá admite plasticidad pero no dinámica explícita, y nada de esto es un análisis certificado: que un ingeniero revise lo que importe.
