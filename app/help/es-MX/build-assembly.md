---
title: Construir un ensamblaje con uniones
summary: Inicie un ensamblaje a partir de una pieza, inserte copias y otros archivos de pieza, únalos con uniones rígidas, giratorias, deslizantes, cilíndricas, planas, de rótula y de pasador en ranura sobre caras planas, centre uniones en ejes, edite una pieza en su lugar y guarde el ensamblaje.
keywords: ensamblaje, acoplamiento, acoplamientos, unión, uniones, bucle, bucle cerrado, mecanismo, cuatro barras, rígida, giratoria, deslizante, cilíndrica, plana, rótula, esférica, pasador en ranura, insertar componente, pieza fija, fija, concéntrica, coincidente, editar pieza, en contexto, partcraft-asm
from: a53bbfef
---

Un ensamblaje reúne piezas. En PartCraft, las **uniones** colocan las piezas: cada unión se asienta sobre una cara plana de cada una de dos piezas y las pone cara con cara. Una unión giratoria permite girar a una pieza, una deslizante permite que se deslice, y una rígida la sujeta.

## Iniciar un ensamblaje

1. Construya una pieza con un sólido (una pieza vacía no puede entrar en un ensamblaje: "Construya primero un sólido y luego insértelo en un ensamblaje.").
2. Elija {{ui:Ensamblaje}} en la barra de herramientas.

La barra de estado dice: "Ensamblaje iniciado con Part1 como pieza fija. Inserte más piezas (Agregar copia, Insertar o Editar › Duplicar) y luego únalas con Unión." El panel izquierdo ahora muestra **Piezas** y **Uniones**, y la barra de herramientas muestra las herramientas de ensamblaje. Las herramientas de croquis y de operaciones se ocultan.

La primera pieza es **fija**: nunca se mueve, y todo lo demás se coloca en relación con ella.

## Insertar piezas

- {{ui:Agregar copia}} inserta otra copia de la pieza seleccionada (o de la última). Las copias comparten una pieza: si la edita, cambia cada copia.
- {{ui:Duplicar}} ({{key:Mod+D}}) en el grupo Editar hace lo mismo con la pieza seleccionada. {{key:Mod+C}} y {{key:Mod+V}} copian una pieza y la pegan junto a las demás, en este ensamblaje o en otro; {{key:Mod+Shift+V}} la pega en el mismo lugar. Vea [Copiar, pegar y duplicar](topic:copy-paste).
- {{ui:Insertar}} inserta una pieza desde un archivo `.partcraft.json` de su computadora. La pieza se copia en el ensamblaje.

Las piezas nuevas aparecen 20 mm a la derecha de todo lo que ya existe, y se quedan ahí hasta que una unión las coloque. Una pieza sin unión también puede moverse a mano: valores escritos o flechas que usted arrastra (vea [Lista de piezas, vistas explosionadas y piezas en movimiento](topic:assembly-bom-explode)).

## Unir dos piezas

1. Elija {{ui:Unión}} o pulse {{key:J}}. El panel derecho dice **Nueva unión**.
2. Haga clic en una cara plana de la primera pieza. Se resalta.
3. Haga clic en una cara plana de la segunda pieza.

La segunda pieza se mueve para que su cara quede contra la cara de la primera, enfrentada a ella. La unión aparece bajo **Uniones**, por ejemplo "Revolute1", y el panel derecho muestra sus ajustes.

- Si ambas caras se hicieron con revoluciones, la unión empieza como **giratoria**; si no, como **rígida**. Cámbiela después.
- Las caras curvas no se pueden elegir: "Esa cara es curva. Elija una cara plana (para girar alrededor de un agujero o del eje de una revolución, elíjalo después en la unión)."
- {{key:Esc}} cancela una unión que ya empezó (o haga clic en una pieza de la lista de la izquierda).

### Ajustes de unión

| Ajuste | Qué hace |
|---|---|
| **Tipo** | Una de las uniones de la tabla siguiente |
| **Ángulo (°)** | Gira la segunda pieza alrededor del eje de la unión (perpendicular a las caras) |
| **Desfase (mm)** | Mueve la segunda pieza a lo largo del eje, alejándola de la cara (los valores negativos la empujan hacia dentro) |
| **A lo largo de X**, **A lo largo de Y**, **Inclinar alrededor de X**, **Inclinar alrededor de Y**, **A lo largo de la ranura**, **Dirección de la ranura** | Los demás valores, que aparecen en las uniones que los usan |
| **Centrar en** (para cada lado) | Dónde cruza el eje de la unión la cara: "El origen propio de la cara", el eje de una revolución ("Axis of Revolve1") o el eje de un agujero ("Hole1, hole 2") |

Cada valor que una unión deja mover tiene un control deslizante bajo su cuadro; los demás se definen una sola vez.

| Unión | Qué se mueve | Se define una vez |
|---|---|---|
| **Rígida** | nada | Ángulo, Desfase |
| **Giratoria** | Ángulo (una bisagra) | Desfase |
| **Deslizante** | Desfase (un cajón) | Ángulo |
| **Cilíndrica** | Ángulo y Desfase (un eje en un cojinete liso) | |
| **Plana** | A lo largo de X, A lo largo de Y sobre la cara, y Ángulo (una pieza que se desliza sobre una mesa) | |
| **Rótula** | Ángulo (giro) e Inclinar alrededor de X e Y, alrededor del centro de la unión (una junta de rótula) | |
| **Pasador en ranura** | A lo largo de la ranura y Ángulo (un pasador en una ranura recta) | Dirección de la ranura: el ángulo de la ranura respecto a X de la cara |

Las X e Y de una cara son las de la cara de la primera pieza; el centro de la unión se define con **Centrar en**.

El "origen propio de la cara" es el origen de la pieza proyectado sobre la cara, que a menudo no es el lugar donde quiere alinear las piezas. Para piezas redondas y pasadores, defina **Centrar en** con el eje de la revolución o del agujero en ambos lados: los ejes quedan alineados, como un acoplamiento concéntrico.

### Ejemplo: dos bridas atornilladas cara con cara

1. Abra la pieza de brida (una revolución con una matriz circular de agujeros) y elija {{ui:Ensamblaje}}.
2. Elija {{ui:Agregar copia}}.
3. Pulse {{key:J}}, haga clic en la cara plana del disco de la primera brida (la cara desde donde empiezan los agujeros de los tornillos) y luego en la misma cara de la segunda brida. Las caras las hizo la revolución, así que la unión es giratoria.
4. Defina **Centrar en** como "Axis of Revolve1" en ambos lados. Las bridas ahora comparten un eje.
5. Escriba `22.5` en **Ángulo (°)** para alinear los agujeros de los tornillos, o arrastre el control deslizante.

## Bucles cerrados: mecanismos

Las piezas unidas en anillo (un mecanismo de cuatro barras, una manivela y un deslizador, un marco arriostrado en ambos lados) forman un **bucle**. PartCraft resuelve cada bucle para que se cierre: las uniones del bucle toman los valores que cierran el anillo, moviéndose lo menos posible desde donde estaban.

- **Defina o arrastre** un valor de una unión en un bucle y el resto del bucle lo sigue. Para un mecanismo de cuatro barras, arrastre el **Ángulo** de la manivela y el acoplador y el balancín se mueven con ella. El valor que definió se conserva; los demás se calculan a partir de él.
- En la lista, una unión en un bucle que todavía puede moverse está en **azul**: aún podría definirse otro valor. Un bucle que no puede moverse (un marco arriostrado) se mantiene en negro. Un bucle que no puede cerrarse está en **rojo**.
- El cuadro **Pieza** muestra **Bucles**: cuántos están cerrados y cuántos valores aún pueden moverse, por ejemplo "1 cerrado; 1 valor aún puede moverse".
- {{ui:Comprobar interferencias en el movimiento}} barre una unión en un bucle con el bucle siguiéndola, paso a paso (vea [Compruebe un ensamblaje en busca de interferencias y movimiento](topic:check-assembly)).

Un mecanismo plano armado con barras planas debe coincidir en profundidad: dos piezas unidas cara con cara a ambos lados de un anillo necesitan la misma altura de apilado en ambos sentidos. Use el **Desfase** de una unión para elevar una pieza cuando el apilado no cuadra; de lo contrario el bucle no puede cerrarse.

## Trabajar con las piezas

Haga clic en una pieza de la vista o de la lista para seleccionarla. El panel derecho muestra el nombre de la pieza, cuántas copias hay, su volumen, sus uniones, y si está fija, definida por sus uniones o "No unida: se queda donde se colocó". Botones:

- {{ui:Editar esta pieza}} (o {{ui:Editar pieza}} en la barra de herramientas, o haga doble clic en la pieza de la lista): abre la pieza para editarla;
- {{ui:Insertar una copia}};
- {{ui:Convertirla en la pieza fija}};
- {{ui:Quitar}}: también elimina sus uniones, después de preguntar.

Un ensamblaje conserva al menos una pieza: "Un ensamblaje debe conservar al menos una pieza. Ciérrelo en su lugar."

### Editar una pieza en su lugar

1. Seleccione una pieza y elija {{ui:Editar pieza}}. La pieza se abre con su historial; el encabezado dice "Bracket (en el ensamblaje Bracket)".
2. Cámbiela como cualquier pieza.
3. Elija {{ui:Volver}} en la barra de herramientas. El ensamblaje se actualiza: cada copia de esa pieza cambia, y las uniones en caras creadas por aristas de croquis las siguen.

Traer el cambio de vuelta es un paso en la lista de deshacer del ensamblaje.

## Deshacer, guardar y cerrar

- El ensamblaje tiene su propia lista de deshacer: {{key:Mod+Z}} y {{key:Mod+Y}} funcionan con uniones, inserciones y ajustes.
- {{ui:Guardar}} o {{key:Mod+S}} descarga `<nombre del ensamblaje>.partcraft-asm.json`, con todas las piezas dentro. Ábralo después con {{ui:Abrir}}.
- {{ui:Cerrar}} cierra el ensamblaje y regresa a la pieza desde la que empezó. Si el ensamblaje no está guardado, lo pregunta: {{ui:Cancelar}}, {{ui:Descartar el ensamblaje}} o {{ui:Guardar primero}}.
- Para cambiar el nombre del ensamblaje, haga clic en un espacio vacío para no seleccionar nada y cambie **Nombre** en el panel derecho.

## Ensamblajes grandes

Un ensamblaje puede contener miles de copias de pocas piezas. Las copias de una misma pieza se dibujan juntas, una unión que usted gira coloca solo las piezas que dependen de ella, y la lista de piezas muestra sus primeras filas con un botón "Mostrar más" debajo (la pieza seleccionada siempre aparece en la lista).

- Mientras gira o hace zoom en la vista, un ensamblaje de más de unos 300,000 triángulos se dibuja como una caja por pieza, y después completo, un momento después de que se detiene.
- {{ui:Vistas}} › {{ui:Visualización ligera}} mantiene las cajas todo el tiempo. Elegir una pieza y las uniones sigue usando las piezas reales.
- La velocidad de giro también depende de su tarjeta gráfica. Las cifras que PartCraft ha medido están en las notas de la versión, con la máquina de la que provienen.

## Problemas de uniones

- Una pieza que ninguna unión alcanza aparece como **libre** y el panel dice "Bracket2 no está unida a la pieza fija, así que se queda donde se colocó."
- Un bucle que no puede cerrarse (las longitudes no alcanzan, un límite detiene una unión, las caras no coinciden en profundidad): "Revolute3 cierra un bucle que no puede cerrarse: está desfasado 2.000 mm. Revise las caras, los desfases y los límites de las uniones del bucle." Sus uniones se ponen en rojo.
- Si una cara o un eje que usa una unión desaparece después de editar una pieza: "La cara que usa esta unión ya no está en Bracket." Elimine la unión y vuelva a crearla.

Siguiente: [Compruebe un ensamblaje en busca de interferencias y movimiento](topic:check-assembly).
