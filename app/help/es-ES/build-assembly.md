---
title: Crear un ensamblaje con uniones
summary: Inicie un ensamblaje a partir de una pieza, inserte copias y otros archivos de piezas, únalas con uniones rígidas, de revolución, deslizantes, cilíndricas, planas, de rótula y de pasador en ranura sobre caras planas, centre uniones en ejes, edite una pieza en su sitio y guarde el ensamblaje.
keywords: ensamblaje, acoplamiento, acoplamientos, unión, bucle, bucle cerrado, mecanismo, mecanismo de cuatro barras, biela, rígida, revolución, deslizante, cilíndrica, plana, bola, rótula, pasador en ranura, insertar componente, fijada, concéntrica, coincidente, editar pieza, en contexto, partcraft-asm
from: a53bbfef
---

Un ensamblaje reúne piezas. En PartCraft, las **uniones** colocan las piezas: cada unión se sitúa en una cara plana de cada una de dos piezas y las pone cara con cara. Una unión de revolución permite girar una pieza, una deslizante la hace deslizar, una rígida la sujeta.

## Iniciar un ensamblaje

1. Cree una pieza con un sólido (una pieza vacía no puede entrar en un ensamblaje: "Cree primero un sólido y después insértelo en un ensamblaje.").
2. Elija {{ui:Ensamblaje}} en la barra de herramientas.

La barra de estado dice "Ensamblaje iniciado con Part1 como pieza fija. Inserte más piezas (Añadir copia, Insertar o Editar › Duplicar) y después únalas con uniones." El panel izquierdo muestra ahora **Piezas** y **Uniones**, y la barra de herramientas muestra las herramientas de ensamblaje. Las herramientas de croquis y de operaciones se ocultan.

La primera pieza es **fija**: nunca se mueve, y todo lo demás se coloca en relación con ella.

## Insertar piezas

- {{ui:Añadir copia}} inserta otra copia de la pieza seleccionada (o de la última). Las copias comparten una pieza: si la edita, cambian todas las copias.
- {{ui:Duplicar}} ({{key:Mod+D}}) en el grupo Editar hace lo mismo con la pieza seleccionada. {{key:Mod+C}} y {{key:Mod+V}} copian una pieza y la pegan junto a las demás, en este ensamblaje o en otro; {{key:Mod+Shift+V}} la pega en el mismo lugar. Véase [Copiar, pegar y duplicar](topic:copy-paste).
- {{ui:Insertar}} inserta una pieza desde un archivo `.partcraft.json` de su equipo. La pieza se copia en el ensamblaje.

Las piezas nuevas aparecen a 20 mm a la derecha de todo lo que ya hay, y se quedan allí hasta que una unión las coloque. Una pieza sin unión también se puede mover a mano: valores escritos o flechas que arrastra (véase [Lista de piezas, vistas descompuestas y piezas móviles](topic:assembly-bom-explode)).

## Unir dos piezas

1. Elija {{ui:Unión}} o pulse {{key:J}}. El panel derecho dice **Nueva unión**.
2. Haga clic en una cara plana de la primera pieza. Se resalta.
3. Haga clic en una cara plana de la segunda pieza.

La segunda pieza salta para que su cara quede contra la cara de la primera, enfrentada a ella. La unión aparece bajo **Uniones**, por ejemplo "Revolute1", y el panel derecho muestra sus ajustes.

- Si ambas caras se crearon con revoluciones, la unión empieza como **de revolución**; si no, como **rígida**. Cámbiela después.
- Las caras curvas no se pueden elegir: "Esa cara es curva. Elija una cara plana (para girar alrededor de un agujero o del eje de una revolución, elíjalo después en la unión)."
- {{key:Esc}} cancela una unión iniciada (o haga clic en una pieza de la lista de la izquierda).

### Ajustes de la unión

| Ajuste | Qué hace |
|---|---|
| **Tipo** | Una de las uniones de la tabla siguiente |
| **Ángulo (°)** | Gira la segunda pieza alrededor del eje de la unión (perpendicular a las caras) |
| **Desplazamiento (mm)** | Mueve la segunda pieza a lo largo del eje, alejándola de la cara (los valores negativos la empujan hacia dentro) |
| **A lo largo de X**, **A lo largo de Y**, **Inclinación alrededor de X**, **Inclinación alrededor de Y**, **A lo largo de la ranura**, **Dirección de la ranura** | Los demás valores, que se muestran en las uniones que los usan |
| **Centrar en** (para cada lado) | Dónde cruza el eje de la unión la cara: "El propio origen de la cara", el eje de una revolución ("Eje de Revolve1") o el eje de un agujero ("Hole1, agujero 2") |

Cada valor que una unión deja mover tiene un control deslizante bajo su cuadro; los demás se fijan una sola vez.

| Unión | Qué se mueve | Se fija una sola vez |
|---|---|---|
| **Rígida** | nada | Ángulo, Desplazamiento |
| **De revolución** | Ángulo (una bisagra) | Desplazamiento |
| **Deslizante** | Desplazamiento (un cajón) | Ángulo |
| **Cilíndrica** | Ángulo y Desplazamiento (un eje en un cojinete liso) | |
| **Plana** | A lo largo de X, A lo largo de Y sobre la cara, y Ángulo (una pieza que se desliza sobre una mesa) | |
| **De rótula** | Ángulo (giro) e Inclinación alrededor de X e Y, alrededor del centro de la unión (una rótula) | |
| **Pasador en ranura** | A lo largo de la ranura y Ángulo (un pasador en una ranura recta) | Dirección de la ranura: el ángulo de la ranura respecto a X de la cara |

Los ejes X e Y de una cara son los de la cara de la primera pieza; el centro de la unión lo fija **Centrar en**.

"El propio origen de la cara" es el origen de la pieza proyectado sobre la cara, que a menudo no es donde quiere alinear las piezas. Para piezas redondas y pasadores, ponga **Centrar en** en el eje de la revolución o del agujero en ambos lados: los ejes quedan alineados, como en un acoplamiento concéntrico.

### Ejemplo: dos bridas atornilladas cara con cara

1. Abra la pieza de brida (una revolución con una matriz circular de agujeros) y elija {{ui:Ensamblaje}}.
2. Elija {{ui:Añadir copia}}.
3. Pulse {{key:J}}, haga clic en la cara plana del disco de la primera brida (la cara de donde parten los agujeros de los tornillos), y después en la misma cara de la segunda brida. Las caras las creó la revolución, así que la unión es de revolución.
4. Ponga **Centrar en** en "Eje de Revolve1" en ambos lados. Las bridas comparten ahora un eje.
5. Escriba `22.5` en **Ángulo (°)** para alinear los agujeros de los tornillos, o arrastre el control deslizante.

## Bucles cerrados: mecanismos

Las piezas unidas en anillo (un mecanismo de cuatro barras, una manivela y una corredera, un bastidor arriostrado por ambos lados) forman un **bucle**. PartCraft resuelve cada bucle para que se cierre: las uniones del bucle toman los valores que unen el anillo, moviéndose lo menos posible desde donde estaban.

- **Fije o arrastre** un valor de una unión de un bucle y el resto del bucle lo sigue. En un mecanismo de cuatro barras, arrastre el **Ángulo** de la manivela y la biela y el balancín se mueven con ella. El valor que fijó se conserva; los demás se calculan a partir de él.
- En la lista, una unión de un bucle que todavía puede moverse aparece en **azul**: aún podría fijarse otro valor. Un bucle que no puede moverse (un bastidor arriostrado) queda en negro. Un bucle que no puede cerrarse aparece en **rojo**.
- El cuadro **Pieza** muestra **Bucles**: cuántos están cerrados y cuántos valores pueden moverse aún, por ejemplo "1 cerrado; 1 valor puede moverse todavía".
- {{ui:Comprobar interferencias en el movimiento}} barre una unión de un bucle con el bucle siguiéndola, paso a paso (véase [Comprobar un ensamblaje por interferencias y movimiento](topic:check-assembly)).

Un mecanismo plano hecho con barras planas debe coincidir en profundidad: dos piezas unidas cara con cara a ambos lados de un anillo necesitan la misma altura de apilado en ambos sentidos. Utilice el **Desplazamiento** de una unión para elevar una pieza donde el apilado no cuadra; si no, el bucle no se cerrará.

## Trabajar con las piezas

Haga clic en una pieza en la vista o en la lista para seleccionarla. El panel derecho muestra su nombre de pieza, cuántas copias hay, su volumen, sus uniones, y si está fija, definida por sus uniones, o "No unida: se queda donde se colocó". Botones:

- {{ui:Editar esta pieza}} (o {{ui:Editar pieza}} en la barra de herramientas, o doble clic en la pieza de la lista): abre la pieza para editarla;
- {{ui:Insertar una copia}};
- {{ui:Convertirla en la pieza fija}};
- {{ui:Quitar}}: también elimina sus uniones, tras preguntar.

Un ensamblaje conserva al menos una pieza: "Un ensamblaje conserva al menos una pieza. Ciérrelo en su lugar."

### Editar una pieza en su sitio

1. Seleccione una pieza y elija {{ui:Editar pieza}}. La pieza se abre con su historial; el encabezado dice "Bracket (en el ensamblaje Bracket)".
2. Cámbiela como cualquier otra pieza.
3. Elija {{ui:Volver}} en la barra de herramientas. El ensamblaje se actualiza: cada copia de esa pieza cambia, y las uniones en caras creadas por aristas de croquis las siguen.

Traer de vuelta el cambio es un paso en la lista de deshacer del ensamblaje.

## Deshacer, guardar y cerrar

- El ensamblaje tiene su propia lista de deshacer: {{key:Mod+Z}} y {{key:Mod+Y}} actúan sobre uniones, inserciones y ajustes.
- {{ui:Guardar}} o {{key:Mod+S}} descarga `<nombre del ensamblaje>.partcraft-asm.json`, con todas las piezas dentro. Ábralo después con {{ui:Abrir}}.
- {{ui:Cerrar}} cierra el ensamblaje y vuelve a la pieza con la que empezó. Si el ensamblaje no está guardado, lo pregunta: {{ui:Cancelar}}, {{ui:Descartar el ensamblaje}} o {{ui:Guardar primero}}.
- Para cambiar el nombre del ensamblaje, haga clic en un espacio vacío para que no haya nada seleccionado y cambie **Nombre** en el panel derecho.

## Ensamblajes grandes

Un ensamblaje puede tener miles de copias de unas pocas piezas. Las copias de una misma pieza se dibujan juntas; una unión que se gira solo coloca las piezas que dependen de ella, y la lista de piezas muestra sus primeras filas con un botón "Mostrar más" debajo (la pieza seleccionada siempre aparece).

- Mientras gira o amplía la vista, un ensamblaje de más de unos 300 000 triángulos se dibuja como una caja por pieza, y después completo un momento tras parar.
- {{ui:Vistas}} › {{ui:Visualización ligera}} mantiene las cajas siempre. Elegir piezas y uniones sigue usando las piezas reales.
- La velocidad de giro depende también de su tarjeta gráfica. Las cifras que PartCraft ha medido están en las notas de la versión, con la máquina de la que proceden.

## Problemas de uniones

- Una pieza a la que no llega ninguna unión aparece como **libre** y el panel dice "Bracket2 no está unida a la pieza fija, así que se queda donde se colocó."
- Un bucle que no puede cerrarse (las longitudes no llegan, un límite detiene una unión, las caras no coinciden en profundidad): "Revolute3 cierra un bucle que no puede cerrarse: está desfasada 2.000 mm. Revise las caras, los desplazamientos y los límites de las uniones del bucle." Sus uniones se vuelven rojas.
- Si una cara o un eje que usa una unión desaparece tras editar una pieza: "La cara que usa esta unión ha desaparecido de Bracket." Elimine la unión y vuelva a crearla.

Siguiente: [Comprobar un ensamblaje por interferencias y movimiento](topic:check-assembly).
