---
title: Redondear, biselar y vaciar con Redondeo, Chaflán y Vaciado
summary: Seleccione aristas y agregue redondeos de radio constante o variable, y chaflanes de distancia igual, dos distancias o distancia y ángulo. Vacíe una pieza con Vaciado seleccionando las caras que se abren, cambie qué aristas o caras usa una operación, y corrija los fallos habituales.
keywords: redondeo, redondear, mezcla, chaflán, bisel, vaciado, ahuecar, espesor de pared, aristas, caras, seleccionar aristas, mayús+clic, cara abierta, núcleo exacto, núcleo de malla, no construido
from: e41c1c12
---

:::note
**En esta versión** PartCraft construye redondeos y chaflanes con el núcleo de malla, solo en **aristas rectas entre dos caras planas**: aristas de cajas y las aristas rectas de extrusiones y cortes, en esquinas exteriores o interiores (una esquina interior agrega material). Las aristas redondas, como los bordes de agujeros, y un radio que cambia a lo largo de la arista todavía no se construyen. Donde dos aristas redondeadas se encuentran en una esquina, los redondeos quedan a inglete (se unen en un pliegue agudo), no mezclados. **Vaciado** también funciona, construido por el núcleo de malla: solo abre caras planas, los vaciados con paredes de distinto espesor todavía no se construyen, y es lento en piezas con muchas caras redondas. Vea [Qué no está construido todavía](topic:not-built-yet).
:::

{{ui:Redondeo}} redondea aristas, {{ui:Chaflán}} las biselar y {{ui:Vaciado}} ahueca la pieza. Las tres trabajan con las aristas y caras del sólido, y las construye el núcleo de malla. Sus redondeos están facetados como cualquier cara redonda (**Curvas** define qué tan finos son); las caras redondas son cilindros que puede seleccionar y medir (vea [El núcleo de malla](topic:solid-kernels)).

## Redondear o biselar aristas

### Seleccione primero las aristas

1. Haga clic en una arista de la pieza. Toda la arista se resalta, y el panel derecho dice **Arista**: su tipo (Recta, Círculo o arco, Curva), su longitud y las caras entre las que está.
2. Para agregar más aristas, haga {{key:Shift}}+clic en ellas. Cada una queda marcada; haga {{key:Shift}}+clic en una arista marcada para quitarla. El encabezado del panel las cuenta ("4 aristas") y la barra de estado dice "4 aristas seleccionadas. Redondeo o Chaflán las redondea; Mayús+clic selecciona más, Esc las borra."
3. Elija {{ui:Redondeo}} o {{ui:Chaflán}} en la barra de herramientas, o los mismos botones en el panel derecho.

La operación se agrega con todas las aristas seleccionadas: un redondeo de 2 mm, o un chaflán de 1 mm. La barra de estado dice, por ejemplo: "Fillet1 agregado (4 aristas). Cambie su tamaño a la derecha; Seleccionar aristas cambia cuáles."

### O agregue primero la operación

1. Sin nada seleccionado, elija {{ui:Redondeo}} o {{ui:Chaflán}}.
2. PartCraft pasa a la selección: el encabezado del panel derecho dice "Fillet1: seleccionando", la pieza se muestra como estaba antes del redondeo (el panel lo indica), y la barra de herramientas muestra {{ui:Listo}}.
3. Haga clic en cada arista para agregarla; haga clic de nuevo para quitarla. La barra de estado las cuenta.
4. Elija {{ui:Listo}} (o {{ui:Terminar selección}} en el panel), o pulse {{key:Esc}} o {{key:Enter}}.

### Ajustes

| Ajuste | Redondeo | Chaflán |
|---|---|---|
| Tamaño | **Radio (mm)**, predeterminado 2 | **Distancia (mm)** desde la arista en ambas caras, predeterminado 1 |
| **Aristas** | Cuántas | Cuántas |

La lista de abajo nombra cada arista por las dos caras que une, por ejemplo "Arista 1: Extrude1 cara final × Extrude1 lateral". **Quitar** elimina una. {{ui:Seleccionar aristas}} vuelve a la selección. Hacer doble clic en la operación del historial hace lo mismo.

Las aristas se recuerdan por las dos caras que unen, así que siguen en la arista correcta cuando cambia una cota anterior en el historial.

### Redondeos variables y tipos de chaflán

- **Radio variable** (redondeo): todavía no construido en esta versión ("Un redondeo cuyo radio cambia a lo largo de la arista: todavía no construido (necesita un núcleo exacto). Dele un solo radio."). Con un núcleo exacto: marque la casilla y ajuste **Radio final (mm)**. El radio cambia linealmente desde **Radio** en un extremo de cada arista hasta **Radio final** en el otro; **Intercambiar los extremos** lo invierte.
- **Tipo** (chaflán): **Distancia igual**, **Dos distancias** (una **Segunda distancia** en la otra cara) o **Distancia y ángulo** (la distancia en una cara, el bisel en **Ángulo (°)** respecto a esa cara). **Invertir lados** pone la primera distancia en la otra cara.

## Vaciar una pieza

1. Haga clic en la cara plana que quedará abierta, por ejemplo la parte superior de una caja. O haga {{key:Shift}}+clic en varias caras.
2. Elija {{ui:Vaciado}} en la barra de herramientas, o {{ui:Vaciado, abriendo esta cara}} en el panel de la cara.

La pieza queda con una pared de 2 mm y las caras seleccionadas abiertas. Ajustes:

| Ajuste | Qué hace | Predeterminado |
|---|---|---|
| **Pared (mm)** | El espesor de la pared | 2 |
| **Las paredes crecen hacia afuera (las caras quedan dentro)** | Marcado: las paredes se agregan por fuera, así que el interior conserva el tamaño de la pieza | Desactivado: las paredes van hacia dentro y el exterior conserva su tamaño |
| **Caras abiertas** | Cuántas caras se quitan | |

Hacia dentro, las paredes tienen exactamente el espesor indicado: las esquinas exteriores quedan vivas, las esquinas interiores salen redondeadas (radio = la pared), y un agujero que atraviesa la pieza recibe un tubo de pared alrededor. Hacia afuera, las paredes se agregan fuera de la superficie original, que se convierte en el hueco, y las aristas exteriores salen redondeadas. Las caras interiores llevan el nombre de las caras que desplazan, para que pueda seleccionarlas.

Solo se pueden abrir caras planas: si selecciona una curva, dice "Vaciado: en esta versión solo abre caras planas (lo construye el núcleo de malla)." Un vaciado es lento en piezas con muchas caras redondas (varios segundos por cada mil triángulos): use un ajuste **Curvas** más grueso mientras diseña.

{{ui:Seleccionar caras}} cambia qué caras están abiertas, de la misma forma que seleccionar aristas. La lista nombra cada una, por ejemplo "Cara 1: Extrude1 cara final". Un vaciado sin caras abiertas no está permitido: "Seleccione las caras a quitar (abiertas) y luego vacíe."

## El orden importa

Las operaciones se construyen de arriba abajo. Un redondeo antes de un vaciado se vacía junto con la pieza, así que el interior también recibe esquinas redondeadas. Un redondeo después de un vaciado solo redondea las aristas que usted seleccione. Mueva las operaciones con {{ui:Subir}} y {{ui:Bajar}} (vea [Cambie una pieza mediante su historial](topic:edit-history)).

Las matrices y simetrías no pueden copiar un redondeo, chaflán o vaciado: "Fillet1 cambia las aristas o paredes del cuerpo; no se puede copiar. Copie las operaciones que crean sólidos (extrusiones, revoluciones, agujeros, importaciones)." Primero haga la matriz de los agujeros o cortes, luego redondee todas las aristas de las copias en un solo redondeo.

## Cuando falla

| Mensaje | Qué hacer |
|---|---|
| "Un redondeo de 5 mm no cabe aquí (es demasiado grande para una cara junto a una de las aristas, o las aristas se encuentran en una esquina que el núcleo no puede mezclar)." | Use un radio menor, o redondee menos aristas a la vez (varias operaciones de redondeo, la más pequeña al final) |
| "Una arista que se redondea ya no existe: la arista entre Extrude1 y Cut2." | Un cambio anterior quitó esa arista. Elija {{ui:Seleccionar aristas}}, quite la arista roja y seleccione la nueva |
| "El vaciado no se pudo hacer con este espesor (…)." | La pared es más gruesa que una parte estrecha del modelo, o que el radio de un redondeo. Haga la pared más delgada, o los redondeos mayores que la pared |
| "Esa cara no tiene un nombre que el historial pueda seguir; seleccione otra." | Seleccione una cara creada por una operación (la mayoría lo son) |
| "Redondeo: en esta versión solo aristas rectas entre dos caras planas (las construye el núcleo de malla). Redondee o biselar aristas curvas en el croquis." (también Chaflán) | Una arista seleccionada es redonda, como el borde de un agujero, o está sobre una cara curva. Quítela con {{ui:Seleccionar aristas}}, y redondee o biseló esa esquina en el croquis |
| "Un redondeo cuyo radio cambia a lo largo de la arista: todavía no construido (necesita un núcleo exacto). Dele un solo radio." | Desmarque **Radio variable** |
| "Redondeo por el núcleo de malla: donde se encuentran aristas redondeadas, quedan a inglete, no mezcladas." (⚠ en el historial) | Una advertencia, no un error: la pieza se construye. Las aristas seleccionadas se encuentran en una esquina, y los redondeos se unen allí en un pliegue agudo. Redondee menos aristas, o acepte el pliegue |
| "Vaciado: en esta versión solo abre caras planas (lo construye el núcleo de malla)." | Una cara abierta es curva. Use {{ui:Seleccionar caras}} y quítela; abra solo caras planas |

## Límites

En esta versión, los redondeos y chaflanes funcionan solo en aristas rectas entre dos caras planas, con un solo radio, y los redondeos que se encuentran en una esquina quedan a inglete. Los vaciados solo abren caras planas. Con un núcleo exacto, un redondeo variable cambia linealmente a lo largo de cada arista (una ley por operación; no hay radios fijados en puntos a lo largo de ella). Los redondeos de cara, los redondeos de semicírculo completo y los vaciados con paredes de distinto espesor todavía no se construyen.
