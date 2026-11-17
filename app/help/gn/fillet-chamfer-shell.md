---
title: Redondear, biselar y ahuecar con Redondear, Chaflán y Cáscara
summary: Elegí aristas y agregá redondeos de radio constante o variable y chaflanes de distancia igual, de dos distancias o de distancia y ángulo; ahuecá una pieza con Cáscara eligiendo las caras a abrir, cambiá qué aristas o caras usa un elemento, y solucioná los fallos habituales.
keywords: redondeo, redondear, mezcla, chaflán, bisel, cáscara, ahuecar, grosor de pared, aristas, caras, elegir aristas, shift clic, cara abierta, núcleo exacto, núcleo de malla, no hecho
from: e41c1c12
---

:::note
**En esta versión** PartCraft construye redondeos y chaflanes con el núcleo de malla, sólo en **aristas rectas entre dos caras planas**: aristas de cajas y las aristas rectas de extrusiones y cortes, en esquinas exteriores o interiores (una esquina interior agrega material). Las aristas redondas, como bordes de agujeros, y un radio que cambia a lo largo de la arista, todavía no se construyen. Donde dos aristas redondeadas se encuentran en una esquina, los redondeos se achaflanan a inglete (se juntan en un pliegue afilado), no se mezclan. **Cáscara** también funciona, construida por el núcleo de malla: abre sólo caras planas, las cáscaras de grosores de pared distintos todavía no se construyen, y es lenta en piezas con muchas caras redondas. Ver [Lo que todavía no está hecho](topic:not-built-yet).
:::

{{ui:Fillet}} redondea aristas, {{ui:Chamfer}} las biselá y {{ui:Shell}} ahueca la pieza. Los tres actúan sobre las aristas y caras del sólido y los construye el núcleo de malla. Sus redondeos son facetados como cualquier cara redonda (**Curves** define qué tan fino); las caras redondas son cilindros que podés elegir y medir (ver [El núcleo de malla](topic:solid-kernels)).

## Redondear o biselar aristas

### Elegir primero las aristas

1. Hacé clic en una arista de la pieza. Toda la arista se resalta, y el panel derecho dice **Edge**: su tipo (Straight, Circle or arc, Curve), largo y las caras entre las que está.
2. Para agregar más aristas, {{key:Shift}}+clic en ellas. Cada una queda marcada; {{key:Shift}}+clic en una arista marcada la quita. El encabezado del panel las cuenta ("4 edges") y la barra de estado dice "4 edges picked. Fillet or Chamfer rounds them; Shift+click picks more, Esc clears."
3. Elegí {{ui:Fillet}} o {{ui:Chamfer}} en la barra de herramientas, o los mismos botones en el panel derecho.

El elemento se agrega con todas las aristas elegidas: un redondeo de 2 mm, o un chaflán de 1 mm. La barra de estado dice, por ejemplo, "Fillet1 added (4 edges). Change its size on the right; Pick edges changes which."

### O agregar primero el elemento

1. Sin nada elegido, elegí {{ui:Fillet}} o {{ui:Chamfer}}.
2. PartCraft pasa a elegir: el encabezado del panel derecho dice "Fillet1: picking", la pieza se muestra como estaba antes del redondeo (el panel lo dice), y la barra de herramientas muestra {{ui:Done}}.
3. Hacé clic en cada arista para agregarla; hacé clic otra vez para quitarla. La barra de estado las cuenta.
4. Elegí {{ui:Done}} (o {{ui:Done picking}} en el panel), o presioná {{key:Esc}} o {{key:Enter}}.

### Ajustes

| Ajuste | Redondeo | Chaflán |
|---|---|---|
| Tamaño | **Radius (mm)**, predeterminado 2 | **Distance (mm)** hacia atrás desde la arista en ambas caras, predeterminado 1 |
| **Edges** | Cuántas | Cuántas |

La lista de abajo nombra cada arista por las dos caras que une, como "Edge 1: Extrude1 end face × Extrude1 side". **Remove** quita una. {{ui:Pick edges}} vuelve a elegir. Hacer doble clic en el elemento en el historial hace lo mismo.

Las aristas se recuerdan por las dos caras que unen, así que siguen en la arista correcta cuando cambiás una dimensión anterior en el historial.

### Radios variables y tipos de chaflán

- **Variable radius** (redondeo): todavía no hecho en esta versión ("A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius."). Con un núcleo exacto: marcalo y poné **End radius (mm)**. El radio cambia linealmente desde **Radius** en un extremo de cada arista hasta **End radius** en el otro; **Swap the ends** los invierte.
- **Type** (chaflán): **Equal distance**, **Two distances** (una **Second distance** en la otra cara) o **Distance and angle** (la distancia en una cara, el bisel en **Angle (°)** respecto de esa cara). **Flip sides** pone la primera distancia en la otra cara.

## Ahuecar una pieza

1. Hacé clic en la cara plana que querés dejar abierta, por ejemplo la parte superior de una caja. O {{key:Shift}}+clic en varias caras.
2. Elegí {{ui:Shell}} en la barra de herramientas, o {{ui:Shell, opening this face}} en el panel de la cara.

La pieza queda con una pared de 2 mm y las caras elegidas abiertas. Ajustes:

| Ajuste | Qué hace | Predeterminado |
|---|---|---|
| **Wall (mm)** | El grosor de la pared | 2 |
| **Walls grow outward (the faces stay inside)** | Marcado: las paredes se agregan afuera, así el interior conserva el tamaño de la pieza | Off: las paredes van hacia adentro y el exterior conserva su tamaño |
| **Open faces** | Cuántas caras se quitan | |

Hacia adentro, las paredes tienen exactamente el grosor de la pared: las esquinas exteriores quedan afiladas, las interiores salen redondeadas (radio = la pared), y un agujero a través de la pieza recibe un tubo de pared alrededor. Hacia afuera, las paredes se agregan fuera de la superficie original, que pasa a ser el hueco, y los bordes exteriores salen redondeados. Las caras interiores llevan el nombre de las caras que desplazan, así podés elegirlas.

Sólo se pueden abrir caras planas: si elegís una curva, dice "Shell: in this version it opens flat faces only (the mesh kernel builds it)." Una cáscara es lenta en piezas con muchas caras redondas (varios segundos por mil triángulos): usá un ajuste **Curves** más grueso mientras diseñás.

{{ui:Pick faces}} cambia qué caras están abiertas, de la misma forma que elegir aristas. La lista nombra cada una, como "Face 1: Extrude1 end face". Una cáscara sin caras abiertas no está permitida: "Pick the faces to remove (open), then shell."

## El orden importa

Los elementos se construyen de arriba abajo. Un redondeo antes de una cáscara se ahueca junto con la pieza, así que el interior también tiene esquinas redondeadas. Un redondeo después de una cáscara redondea sólo las aristas que elegís. Mové los elementos con {{ui:Move up}} y {{ui:Move down}} (ver [Cambiar una pieza por su historial](topic:edit-history)).

Los patrones y espejos no pueden copiar un redondeo, chaflán o cáscara: "Fillet1 changes the body's edges or walls; it cannot be copied. Copy the features that make solids (extrudes, revolves, holes, imports)." Hacé primero el patrón de los agujeros o cortes, después redondeá todas las aristas de las copias en un solo redondeo.

## Cuando falla

| Mensaje | Qué hacer |
|---|---|
| "A 5 mm round does not fit here (it is too big for a face next to one of the edges, or the edges meet in a corner the kernel cannot blend)." | Usá un radio más chico, o redondeá menos aristas a la vez (varios elementos de redondeo, el más chico al final) |
| "An edge it rounds is gone: the edge between Extrude1 and Cut2." | Un cambio anterior quitó esa arista. Elegí {{ui:Pick edges}}, quitá la arista roja y elegí la nueva |
| "The shell could not be made with this thickness (…)." | La pared es más gruesa que una parte angosta del modelo, o que el radio de un redondeo. Hacé la pared más fina, o los redondeos más grandes que la pared |
| "That face has no name the history can follow; pick another." | Elegí una cara hecha por un elemento (la mayoría lo son) |
| "Fillet: in this version only straight edges between two flat faces (the mesh kernel builds them). Round or bevel curved edges in the sketch." (también Chamfer) | Una arista elegida es redonda, como el borde de un agujero, o está en una cara curva. Quitala con {{ui:Pick edges}}, y redondeá o biselá esa esquina en el boceto |
| "A fillet whose radius changes along the edge: not built yet (it needs an exact kernel). Give it one radius." | Desmarcá **Variable radius** |
| "Fillet by the mesh kernel: where rounded edges meet they are mitred, not blended." (⚠ en el historial) | Un aviso, no un error: la pieza está construida. Las aristas elegidas se encuentran en una esquina, y los redondeos se juntan ahí en un pliegue afilado. Redondeá menos aristas, o aceptá el pliegue |
| "Shell: in this version it opens flat faces only (the mesh kernel builds it)." | Una cara a abrir es curva. {{ui:Pick faces}} y quitala; abrí sólo caras planas |

## Límites

En esta versión los redondeos y chaflanes sólo funcionan en aristas rectas entre dos caras planas, con un radio, y los redondeos que se encuentran en una esquina se achaflanan a inglete. Las cáscaras abren sólo caras planas. Con un núcleo exacto, un redondeo variable cambia linealmente a lo largo de cada arista (una ley por elemento; sin radio fijado en puntos de la arista). Los redondeos de caras, los redondeos completos y las cáscaras de grosores de pared distintos todavía no se construyen.
