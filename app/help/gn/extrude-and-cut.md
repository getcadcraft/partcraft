---
title: Extruir un saliente y cortar a través
summary: Convertí un boceto en sólido con Extruir, ajustá profundidades ciega, de plano medio, hasta o de dos direcciones, una conicidad, o un contorno del boceto; después bocetá sobre una cara y Cortá una cavidad o una ranura pasante.
keywords: extruir, saliente, saliente extruido, cortar, corte extruido, cavidad, a través de todo, ciego, plano medio, invertir, profundidad, cortar-extruir, saliente-extruir, pad, hasta cara, hasta siguiente, hasta vértice, desfase desde superficie, dirección 2, dos direcciones, salida al extruir, conicidad, contorno, región, contornos seleccionados
from: 3b13ff10
---

{{ui:Extrude}} empuja el perfil cerrado de un boceto recto afuera de su plano para hacer material. {{ui:Cut}} hace lo mismo pero quita material. Ambos son el mismo elemento por debajo; después podés cambiar uno al otro.

## Extruir un saliente

1. Dibujá un perfil cerrado y cerrá el boceto (ver [Dibujá tu primer boceto](topic:sketch-basics)). Queda seleccionado.
2. Elegí {{ui:Extrude}}.

Aparece un sólido de 10 mm, "Extrude1" entra al historial con su boceto sangrado debajo, y la barra de estado dice "Extrude1 added. Change its numbers on the right."

**Qué boceto se usa:** el boceto que acabás de cerrar, o el seleccionado en el historial. Sin nada seleccionado, PartCraft toma el boceto más reciente que ningún elemento usa todavía. Si no hay ninguno: "Make a sketch first: pick a plane, Sketch, draw a closed profile, Exit."

### Ajustar profundidad y dirección

En el panel derecho:

| Ajuste | Opciones | Predeterminado |
|---|---|---|
| **Operation** | Boss (agregar material), Cut (quitar material), Intersect (mantener la superposición), New body (todavía no hecho en esta versión: necesita un núcleo exacto) | Boss |
| **End** | Blind (una profundidad), Mid-plane (en ambos sentidos), Through all, Up to face or plane, Up to next face, Up to vertex, Offset from face | Blind |
| **Depth (mm)** | Cualquier tamaño mayor que cero (se muestra para Blind y Mid-plane) | 10 |
| **Reverse direction** | Crece hacia el otro lado del plano del boceto (no se muestra para Mid-plane) | Off |

Escribí un número y presioná {{key:Enter}} o {{key:Tab}}: la pieza se reconstruye enseguida. **Mid-plane** pone la mitad de la profundidad a cada lado del boceto.

### Hasta una cara, la siguiente cara o un vértice

Todavía no hecho en esta versión: cada final "hasta" necesita un núcleo exacto, y el elemento dice "Extruding up to a face, the next face or a vertex: not built yet (it needs an exact kernel)." Usá una profundidad Blind que midas. Con un núcleo exacto los finales funcionan así:

- **Up to face or plane**: **Up to** toma una cara plana (Pick, y después hacé clic) o un plano de referencia. Una cara paralela al boceto da una profundidad exacta; una inclinada corta el final sobre la pendiente. Si la cara queda detrás del boceto: "… Try Reverse direction."
- **Up to next face**: se detiene en la primera cara plana del cuerpo que la extrusión encuentra (no se admiten caras curvas aquí: lo dice).
- **Up to vertex**: se detiene a la altura de un vértice (hacé clic cerca del extremo de una arista) o de un elemento punto.
- **Offset from face**: como Up to face, deteniéndose a **Offset (mm)** antes de ella (medido perpendicular a la cara).

### Dos direcciones, conicidad, un contorno

- **Second direction** (Blind): también extruye **Second depth (mm)** hacia el otro lado del boceto.
- **Taper (°)**: los lados se inclinan a medida que avanzan (negativo: hacia afuera), como una salida; sólo una dirección. Todavía no hecho en esta versión (necesita un núcleo exacto): dejalo en 0.
- **Regions**: **Pick regions**, y después hacé clic dentro de los bucles para extruir; sólo se usan esas regiones (un círculo dentro de un cuadrado: hacé clic dentro del círculo para un cilindro, entre ellos para una placa con agujero). **All** vuelve a todos los bucles.

Debajo de estos, **Sketch dimensions** lista las cotas que dirigen el boceto, así cambiás los tamaños del perfil sin abrir el boceto.

:::note
**Through all es sólo para cortes.** Un saliente con Through all falla con "Through all is for cuts. Use a depth for a boss." Si cambiás un elemento de Cut a Boss, Through all pasa a Blind por vos.
:::

## Cortar una cavidad

1. Hacé clic en la cara plana donde querés cortar. Se resalta, y el panel derecho dice **Face**.
2. Elegí {{ui:Sketch on this face}} (o {{ui:Sketch}} en la barra).
3. Dibujá el contorno de la cavidad, por ejemplo un rectángulo, y acotalo.
4. Elegí {{ui:Exit}}.
5. Elegí {{ui:Cut}}. Empieza como **Through all**: quita material a través de toda la pieza.
6. Para una cavidad, poné **End** en **Blind (a depth)** y escribí la **Depth (mm)**.

Un corte entra en el material, lejos de la cara donde bocetaste. Si la barra de estado dice "There is nothing to cut on that side of the sketch. Try the other direction.", marcá **Reverse direction**.

Un boceto en el fondo de la cavidad sigue al fondo: si cambiás la profundidad, el boceto se mueve con ella.

## Empujar o sacar una cara entera

Para que una cara sobresalga más o se hunda, no hace falta dibujar su contorno. Hacé clic en la cara plana y luego, en el panel derecho:

- {{ui:Extrude from it}} saca la cara afuera: PartCraft agrega un boceto sobre la cara con su contorno (los agujeros de la cara siguen siendo agujeros) y una Extrusión de 10 mm.
- {{ui:Cut into it}} empuja la cara hacia adentro: el mismo boceto y un Corte a mitad de la pieza.

Ambos son un solo paso: {{key:Mod+Z}} quita el boceto y el elemento juntos. El elemento nuevo queda seleccionado, así que escribí un número enseguida y presioná {{key:Enter}} para su profundidad. El contorno se copia como líneas y arcos fijos: no sigue cambios posteriores de la cara. Si parte del contorno no se puede copiar (una curva libre), se abre el boceto con lo que sí se copió; terminalo, después elegí {{ui:Exit}} y {{ui:Extrude}} o {{ui:Cut}}.

## Perfiles con islas

Un boceto puede tener varios bucles cerrados. Los bucles uno al lado del otro se vuelven salientes (o cortes) separados; un bucle dentro de otro se vuelve un agujero a través del saliente. Por ejemplo, un rectángulo con dos círculos adentro se extruye como una placa con dos agujeros.

Para usar sólo algunos bucles, elegílos con **Regions** (arriba); otro elemento puede usar los otros bucles del mismo boceto.

## Editarlo después

- Hacé clic en "Extrude1" en el historial para recuperar sus ajustes.
- Doble clic en su boceto (sangrado debajo) para abrirlo; cerralo para reconstruir.
- Ver [Cambiar una pieza por su historial](topic:edit-history) para suprimir, retroceder, reordenar y eliminar.

## Mensajes comunes

| Mensaje | Qué hacer |
|---|---|
| "The sketch has no closed profile to extrude." | El boceto no tiene un bucle cerrado de líneas sólidas. Cerrá los huecos, o volvé las líneas de construcción con {{key:Q}} |
| "The profile is open: an end at (x, y) is not joined to anything." | Abrí el boceto y uní ese extremo con la línea siguiente |
| "There is nothing to cut yet." | Un corte necesita un sólido para cortar. Primero hacé un saliente |
| "Nothing is left of the part after this." | El corte quitó todo. Revisá su tamaño y dirección |

Más en [Solución de problemas](topic:troubleshooting).
