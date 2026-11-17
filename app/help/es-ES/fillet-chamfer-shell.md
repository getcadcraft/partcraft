---
title: Redondee, achaflane y vacíe con Redondeo, Chaflán y Vaciado
summary: Seleccione aristas y añada redondeos de radio constante o variable y chaflanes de distancia igual, de dos distancias o de distancia y ángulo; vacíe una pieza con Vaciado seleccionando las caras que abrir, cambie qué aristas o caras usa un elemento y solucione los fallos habituales.
keywords: redondeo, redondear, mezcla, chaflán, bisel, vaciado, vaciar, espesor de pared, aristas, caras, seleccionar aristas, shift clic, cara abierta, núcleo exacto, núcleo de malla, no construido
from: e41c1c12
---

:::note
**En esta versión** PartCraft construye los redondeos y chaflanes con el núcleo de malla, solo en **aristas rectas entre dos caras planas**: aristas de cajas y las aristas rectas de extrusiones y cortes, en esquinas exteriores o interiores (una esquina interior añade material). Los bordes redondeados, como los bordes de agujeros, y un radio que cambia a lo largo de la arista, todavía no se construyen. Donde dos aristas redondeadas se encuentran en una esquina, los redondeos se ingletean (se encuentran en un pliegue vivo), no se mezclan. El **vaciado** también funciona, construido por el núcleo de malla: solo abre caras planas, los vaciados con espesores de pared distintos todavía no se construyen, y es lento en piezas con muchas caras redondas. Consulte [Lo que todavía no está disponible](topic:not-built-yet).
:::

{{ui:Redondeo}} redondea aristas, {{ui:Chaflán}} las biselan y {{ui:Vaciado}} vacía la pieza. Las tres trabajan sobre las aristas y caras del sólido y las construye el núcleo de malla. Sus redondeos se facetan como cualquier cara redonda (**Curvas** define su finura); las caras redondas son cilindros que puede seleccionar y medir (consulte [El núcleo de malla](topic:solid-kernels)).

## Redondear o achaflanar aristas

### Seleccione primero las aristas

1. Haga clic en una arista de la pieza. Toda la arista se resalta, y el panel derecho dice **Arista**: su tipo (Recta, Círculo o arco, Curva), su longitud y las caras entre las que está.
2. Para añadir más aristas, haga {{key:Shift}}+clic en ellas. Cada una queda marcada; haga {{key:Shift}}+clic en una arista marcada para quitarla. El encabezado del panel las cuenta ("4 aristas") y la barra de estado indica "4 aristas seleccionadas. Redondeo o Chaflán las redondea; Shift+clic selecciona más, Esc las borra."
3. Elija {{ui:Redondeo}} o {{ui:Chaflán}} en la barra de herramientas, o los mismos botones del panel derecho.

El elemento se añade con todas las aristas seleccionadas: un redondeo de 2 mm, o un chaflán de 1 mm. La barra de estado indica, por ejemplo, "Fillet1 añadido (4 aristas). Cambie su tamaño a la derecha; Seleccionar aristas cambia cuáles."

### O añada primero el elemento

1. Sin nada seleccionado, elija {{ui:Redondeo}} o {{ui:Chaflán}}.
2. PartCraft pasa a modo de selección: el encabezado del panel derecho dice "Fillet1: seleccionando", la pieza se muestra como estaba antes del redondeo (el panel lo indica), y la barra de herramientas muestra {{ui:Listo}}.
3. Haga clic en cada arista para añadirla; vuelva a hacer clic para quitarla. La barra de estado las cuenta.
4. Elija {{ui:Listo}} (o {{ui:Terminar selección}} en el panel), o pulse {{key:Esc}} o {{key:Enter}}.

### Ajustes

| Ajuste | Redondeo | Chaflán |
|---|---|---|
| Tamaño | **Radio (mm)**, predeterminado 2 | **Distancia (mm)** desde la arista en ambas caras, predeterminado 1 |
| **Aristas** | Cuántas | Cuántas |

La lista de abajo nombra cada arista por las dos caras que une, como "Arista 1: Extrude1 end face × Extrude1 side". **Quitar** elimina una. {{ui:Seleccionar aristas}} vuelve a la selección. Hacer doble clic en el elemento del historial hace lo mismo.

Las aristas se recuerdan por las dos caras que unen, así que se mantienen en la arista correcta al cambiar una dimensión anterior en el historial.

### Redondeos variables y tipos de chaflán

- **Radio variable** (redondeo): todavía no disponible en esta versión ("Un redondeo cuyo radio cambia a lo largo de la arista: todavía no disponible (necesita un núcleo exacto). Dele un solo radio."). Con un núcleo exacto: márquelo y ajuste **Radio final (mm)**. El radio cambia linealmente desde **Radio** en un extremo de cada arista hasta **Radio final** en el otro; **Intercambiar los extremos** lo invierte.
- **Tipo** (chaflán): **Distancia igual**, **Dos distancias** (una **Segunda distancia** en la otra cara) o **Distancia y ángulo** (la distancia en una cara, el bisel en **Ángulo (°)** respecto a esa cara). **Invertir lados** pone la primera distancia en la otra cara.

## Vaciar una pieza

1. Haga clic en la cara plana que quiere dejar abierta, por ejemplo la superficie superior de una caja. O haga {{key:Shift}}+clic en varias caras.
2. Elija {{ui:Vaciado}} en la barra de herramientas, o {{ui:Vaciado, abriendo esta cara}} en el panel de la cara.

La pieza pasa a tener una pared de 2 mm con las caras seleccionadas abiertas. Ajustes:

| Ajuste | Qué hace | Predeterminado |
|---|---|---|
| **Pared (mm)** | El espesor de la pared | 2 |
| **Las paredes crecen hacia fuera (las caras quedan dentro)** | Marcado: las paredes se añaden por fuera, así que el interior conserva el tamaño de la pieza | Desactivado: las paredes van hacia dentro y el exterior conserva su tamaño |
| **Caras abiertas** | Cuántas caras se eliminan | |

Hacia dentro, las paredes tienen exactamente el espesor indicado: las esquinas exteriores siguen vivas, las interiores salen redondeadas (radio = la pared), y un agujero que atraviesa la pieza recibe alrededor un tubo de pared. Hacia fuera, las paredes se añaden fuera de la superficie original, que pasa a ser el hueco, y los bordes exteriores salen redondeados. Las caras interiores se nombran según las caras que desplazan, para que pueda seleccionarlas.

Solo se pueden abrir caras planas: si selecciona una curva, aparece "Vaciado: en esta versión solo abre caras planas (lo construye el núcleo de malla)." Un vaciado es lento en piezas con muchas caras redondas (varios segundos por cada mil triángulos): use un ajuste de **Curvas** más grueso mientras diseña.

{{ui:Seleccionar caras}} cambia qué caras están abiertas, del mismo modo que seleccionar aristas. La lista nombra cada una, como "Face 1: Extrude1 end face". Un vaciado sin caras abiertas no está permitido: "Seleccione las caras que quitar (abiertas) y después vacíe."

## El orden importa

Los elementos se construyen de arriba abajo. Un redondeo antes de un vaciado se vacía junto con la pieza, así que el interior también tiene esquinas redondeadas. Un redondeo después de un vaciado redondea solo las aristas que selecciona. Mueva los elementos con {{ui:Subir}} y {{ui:Bajar}} (consulte [Cambie una pieza a través de su historial](topic:edit-history)).

Los patrones y las simetrías no pueden copiar un redondeo, chaflán o vaciado: "Fillet1 cambia las aristas o paredes del cuerpo; no se puede copiar. Copie los elementos que crean sólidos (extrusiones, revoluciones, agujeros, importaciones)." Haga primero el patrón de los agujeros o cortes, y luego redondee todas las aristas de las copias en un solo redondeo.

## Cuando falla

| Mensaje | Qué hacer |
|---|---|
| "A 5 mm round does not fit here (…)." › "Un redondeo de 5 mm no cabe aquí (es demasiado grande para una cara junto a una de las aristas, o las aristas se encuentran en una esquina que el núcleo no puede mezclar)." | Use un radio menor, o redondee menos aristas a la vez (varios elementos de redondeo, el más pequeño al final) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." › "Una arista que redondea ha desaparecido: la arista entre Extrude1 y Cut2." | Un cambio anterior eliminó esa arista. Elija {{ui:Seleccionar aristas}}, quite la arista roja y seleccione la nueva |
| "The shell could not be made with this thickness (…)." › "No se pudo hacer el vaciado con este espesor (…)." | La pared es más gruesa que una parte estrecha del modelo, o que el radio de un redondeo. Haga la pared más fina, o los redondeos más grandes que la pared |
| "That face has no name the history can follow; pick another." › "Esa cara no tiene un nombre que el historial pueda seguir; seleccione otra." | Seleccione una cara creada por un elemento (la mayoría lo son) |
| "Fillet: in this version only straight edges between two flat faces (…)" (también Chamfer) › "Redondeo: en esta versión solo aristas rectas entre dos caras planas (las construye el núcleo de malla). Redondee o achaflane las aristas curvas en el croquis." | Una arista seleccionada es redonda, como el borde de un agujero, o está sobre una cara curva. Quítela con {{ui:Seleccionar aristas}}, y redondee o achaflane esa esquina en el croquis |
| "A fillet whose radius changes along the edge: not built yet (…)." › "Un redondeo cuyo radio cambia a lo largo de la arista: todavía no disponible (necesita un núcleo exacto). Dele un solo radio." | Desmarque **Radio variable** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠ en el historial) › "Redondeo por el núcleo de malla: donde se encuentran las aristas redondeadas se ingletean, no se suavizan." | Un aviso, no un error: la pieza está construida. Las aristas seleccionadas se encuentran en una esquina, y los redondeos se juntan allí en un pliegue vivo. Redondee menos aristas, o acepte el pliegue |
| "Shell: in this version it opens flat faces only (…)." › "Vaciado: en esta versión solo abre caras planas (lo construye el núcleo de malla)." | Una cara abierta es curva. Use {{ui:Seleccionar caras}} y quítela; abra solo caras planas |

## Límites

En esta versión los redondeos y chaflanes solo funcionan en aristas rectas entre dos caras planas, con un único radio, y los redondeos que se encuentran en una esquina se ingletean. Los vaciados solo abren caras planas. Con un núcleo exacto, un redondeo variable cambia linealmente a lo largo de cada arista (una ley por elemento; sin radios fijados en puntos a lo largo de ella). Los redondeos de caras, los redondeos de sección completa y los vaciados con espesores de pared distintos todavía no se construyen.
