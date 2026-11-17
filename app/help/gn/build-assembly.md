---
title: Ensamblar con uniones
summary: Empezá un conjunto desde una pieza, insertá copias y otros archivos de pieza, unilos con uniones rígidas, de revolución, deslizantes, cilíndricas, planas, esféricas y pasador en ranura sobre caras planas, centrá uniones en ejes, editá una pieza en su lugar y guardá el conjunto.
keywords: ensamblaje, acoplamiento, acoplamientos, unión, lazo, lazo cerrado, mecanismo, cuatro barras, mecanismo, rígida, revolución, deslizante, cilíndrica, plana, esférica, bola, unión esférica, pasador en ranura, pasador en ranura, insertar componente, anclada, fija, concéntrica, coincidente, editar pieza, en contexto, partcraft-asm
from: a53bbfef
---

Un conjunto junta piezas. En PartCraft, las **uniones** colocan las piezas: cada unión se asienta en una cara plana de cada una de dos piezas y las pone cara a cara. Una unión de revolución deja girar una pieza, una deslizante la deja correr, una rígida la sujeta.

## Empezar un conjunto

1. Construí una pieza con un sólido (una pieza vacía no puede entrar a un conjunto: "Construí primero un sólido, después ponelo en un conjunto.").
2. Elegí {{ui:Ensamblaje}} en la barra de herramientas.

La barra de estado dice "Conjunto empezado con Part1 como pieza anclada. Insertá más piezas ({{ui:Agregar copia}}, {{ui:Insertar}}, o Editar › {{ui:Duplicar}}), después unilas con {{ui:Unión}}". El panel izquierdo ahora lista **Piezas** y **Uniones**, y la barra de herramientas muestra las herramientas del conjunto. Las herramientas de boceto y de elementos se ocultan.

La primera pieza es **anclada**: nunca se mueve, y todo lo demás se ubica en relación a ella.

## Insertar piezas

- {{ui:Agregar copia}} inserta otra copia de la pieza elegida (o de la última). Las copias comparten una pieza: si la editás, cambia cada copia.
- {{ui:Duplicar}} ({{key:Mod+D}}) en el grupo Editar hace lo mismo con la pieza elegida. {{key:Mod+C}} y {{key:Mod+V}} copian una pieza y la pegan junto a las otras, en este conjunto o en otro; {{key:Mod+Shift+V}} la pega en el mismo lugar. Ver [Copiar, pegar y duplicar](topic:copy-paste).
- {{ui:Insertar}} inserta una pieza desde un archivo `.partcraft.json` de tu computadora. La pieza se copia dentro del conjunto.

Las piezas nuevas aparecen 20 mm a la derecha de todo lo que ya hay, y se quedan ahí hasta que una unión las ubique. Una pieza sin unión también se puede mover a mano: valores escritos o flechas que arrastrás (ver [Lista de piezas, vistas explosionadas y piezas móviles](topic:assembly-bom-explode)).

## Unir dos piezas

1. Elegí {{ui:Unión}} o presioná {{key:J}}. El panel derecho dice **Nueva unión**.
2. Hacé clic en una cara plana de la primera pieza. Se resalta.
3. Hacé clic en una cara plana de la segunda pieza.

La segunda pieza salta para que su cara quede apoyada contra la cara de la primera, mirándola. La unión aparece en **Uniones**, por ejemplo "Revolute1", y el panel derecho muestra sus ajustes.

- Si las dos caras las hicieron revoluciones, la unión empieza como **de revolución**; si no, **rígida**. Cambialo después.
- Las caras curvas no se pueden elegir: "Esa cara es curva. Elegí una cara plana (para girar alrededor de un agujero o del eje de una revolución, elegilo después en la unión)."
- {{key:Esc}} cancela una unión que empezaste (o hacé clic en una pieza de la lista de la izquierda).

### Ajustes de unión

| Ajuste | Qué hace |
|---|---|
| **Tipo** | Una de las uniones de la tabla de abajo |
| **Ángulo (°)** | Gira la segunda pieza alrededor del eje de la unión (perpendicular a las caras) |
| **Desplazamiento (mm)** | Mueve la segunda pieza a lo largo del eje, alejándola de la cara (los valores negativos la empujan hacia adentro) |
| **Along X**, **Along Y**, **Tilt about X**, **Tilt about Y**, **Along the slot**, **Slot direction** | Los otros valores, mostrados para las uniones que los usan |
| **Centrar en** (para cada lado) | Dónde cruza el eje de la unión la cara: "El propio origen de la cara", el eje de una revolución ("Axis of Revolve1") o el eje de un agujero ("Hole1, hole 2") |

Cada valor que una unión deja mover tiene un control deslizante debajo de su casilla; los demás se fijan una vez.

| Unión | Qué se mueve | Fijar una vez |
|---|---|---|
| **Rígida** | nada | Ángulo, Desplazamiento |
| **De revolución** | Ángulo (una bisagra) | Desplazamiento |
| **Deslizante** | Desplazamiento (un cajón) | Ángulo |
| **Cilíndrica** | Ángulo y Desplazamiento (un eje en un cojinete liso) | |
| **Plana** | Along X, Along Y a través de la cara, y Ángulo (una pieza que se desliza sobre una mesa) | |
| **Esférica** | Ángulo (giro) y Tilt about X e Y, alrededor del centro de la unión (una junta esférica) | |
| **Pasador en ranura** | Along the slot y Ángulo (un pasador en una ranura recta) | Slot direction: el ángulo de la ranura desde la X de la cara |

La X y la Y de una cara son las de la cara de la primera pieza; el centro de la unión se fija con **Centrar en**.

"El propio origen de la cara" es el origen de la pieza proyectado sobre la cara, que muchas veces no es donde querés alinear las piezas. Para piezas redondas y pasadores, poné **Centrar en** en el eje de la revolución o del agujero en ambos lados: los ejes quedan alineados, como un acoplamiento concéntrico.

### Ejemplo: dos bridas atornilladas cara a cara

1. Abrí la pieza brida (una revolución con un patrón circular de agujeros) y elegí {{ui:Ensamblaje}}.
2. Elegí {{ui:Agregar copia}}.
3. Presioná {{key:J}}, hacé clic en la cara plana del disco de la primera brida (la cara de donde salen los agujeros del perno), después en la misma cara de la segunda brida. Las caras las hizo la revolución, así que la unión es de revolución.
4. Poné **Centrar en** en "Axis of Revolve1" para ambos lados. Ahora las bridas comparten un eje.
5. Escribí `22.5` en **Ángulo (°)** para alinear los agujeros de los pernos, o arrastrá el control deslizante.

## Lazos cerrados: mecanismos

Las piezas unidas en anillo (un mecanismo de cuatro barras, una manivela y corredera, un marco arriostrado a ambos lados) forman un **lazo**. PartCraft resuelve cada lazo para que se cierre: las uniones del lazo toman los valores que cierran el anillo, moviéndose lo menos posible desde donde estaban.

- **Fijá o arrastrá** un valor de una unión de un lazo y el resto del lazo lo sigue. En un mecanismo de cuatro barras, arrastrá el **Ángulo** de la manivela y el acoplador y el balancín se mueven con él. El valor que fijaste se mantiene; los demás se calculan a partir de él.
- En la lista, una unión de un lazo que todavía puede moverse está en **azul**: se podría fijar otro valor. Un lazo que no puede moverse (un marco arriostrado) queda negro. Un lazo que no puede cerrarse está en **rojo**.
- La casilla **Pieza** muestra **Lazos**: cuántos están cerrados y cuántos valores todavía se pueden mover, por ejemplo "1 cerrado; 1 valor puede moverse todavía".
- {{ui:Verificar el movimiento por choques}} recorre una unión de un lazo con el lazo siguiéndola, paso a paso (ver [Verificar un conjunto por choques y movimiento](topic:check-assembly)).

Un mecanismo plano armado con barras planas tiene que coincidir en profundidad: dos piezas unidas cara a cara en ambos lados de un anillo necesitan la misma altura de apilado en los dos sentidos. Usá el **Desplazamiento** de una unión para levantar una pieza donde el apilado no cierra, o el lazo no se puede cerrar.

## Trabajar con las piezas

Hacé clic en una pieza de la vista o de la lista para elegirla. El panel derecho muestra su nombre, cuántas copias hay, su volumen, sus uniones, y si está anclada, fijada por sus uniones, o "No unida: queda donde se puso". Botones:

- {{ui:Editar esta pieza}} (o {{ui:Editar pieza}} en la barra de herramientas, o doble clic en la pieza de la lista): abre la pieza para editarla;
- {{ui:Insertar una copia}};
- {{ui:Hacerla la pieza anclada}};
- {{ui:Quitar}}: también quita sus uniones, después de preguntar.

Un conjunto mantiene al menos una pieza: "Un conjunto mantiene al menos una pieza. Ciérralo en su lugar."

### Editar una pieza en su lugar

1. Elegí una pieza y elegí {{ui:Editar pieza}}. La pieza se abre con su historial; el encabezado dice "Bracket (en el conjunto Bracket)".
2. Cambiala como cualquier pieza.
3. Elegí {{ui:Atrás}} en la barra de herramientas. El conjunto se actualiza: cada copia de esa pieza cambia, y las uniones en caras hechas por aristas de boceto las siguen.

Traer el cambio de vuelta es un paso en la lista de deshacer del conjunto.

## Deshacer, guardar y cerrar

- El conjunto tiene su propia lista de deshacer: {{key:Mod+Z}} y {{key:Mod+Y}} funcionan con uniones, insertos y ajustes.
- {{ui:Guardar}} o {{key:Mod+S}} descarga `<nombre del conjunto>.partcraft-asm.json`, con cada pieza adentro. Abrilo después con {{ui:Abrir}}.
- {{ui:Cerrar}} cierra el conjunto y vuelve a la pieza desde la que empezaste. Si el conjunto no está guardado, pregunta: {{ui:Cancelar}}, {{ui:Descartar el ensamblaje}} o {{ui:Guardar primero}}.
- Para renombrar el conjunto, hacé clic en espacio vacío para que no quede nada elegido y cambiá **Nombre** en el panel derecho.

## Conjuntos grandes

Un conjunto puede tener miles de copias de unas pocas piezas. Las copias de una misma pieza se dibujan juntas, una unión que girás coloca solo las piezas que están detrás de ella, y la lista de piezas muestra sus primeras filas con un botón "Mostrar más" debajo (la pieza elegida siempre aparece).

- Mientras girás o hacés zoom en la vista, un conjunto de más de unos 300.000 triángulos se dibuja como una caja por pieza, y después completo un momento después de que dejás de moverlo.
- {{ui:Vistas}} › {{ui:Visualización liviana}} mantiene las cajas todo el tiempo. Elegir una pieza y las uniones sigue usando las piezas reales.
- La velocidad de giro también depende de tu placa gráfica. Los números que PartCraft midió están en las notas de la versión, con la máquina en la que se midieron.

## Problemas de unión

- Una pieza a la que no llega ninguna unión aparece como **libre** y el panel dice "Bracket2 no está unida a la pieza anclada, así que queda donde se puso."
- Un lazo que no puede cerrarse (las longitudes no llegan, un límite frena una unión, las caras no coinciden en profundidad): "Revolute3 cierra un lazo que no puede cerrarse: está desfasado 2.000 mm. Revisá las caras, desplazamientos y límites de las uniones del lazo." Sus uniones se ponen rojas.
- Si una cara o eje que usa una unión desaparece al editar una pieza: "La cara que usa esta unión ya no está en Bracket." Quitá la unión y volvé a hacerla.

Siguiente: [Verificar un conjunto por choques y movimiento](topic:check-assembly).
